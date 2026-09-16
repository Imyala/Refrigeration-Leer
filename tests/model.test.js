const test = require("node:test");
const assert = require("node:assert");
const D = require("../js/data.js");
const C = require("../js/circuits.js");
const M = require("../js/model.js");

const REF_KEYS = Object.keys(D.REFRIGERANTS);
const FAULT_KEYS = Object.keys(D.FAULTS);

test("interpTable returns exact table values and interpolates between them", () => {
  const tbl = D.TABLES.R134a;
  assert.ok(Math.abs(M.interpTable(tbl, "P", 2.928, "T") - 0) < 1e-9);
  // halfway between 0°C (2.928 bar) and 10°C (4.146 bar)
  const mid = M.interpTable(tbl, "T", 5, "P");
  assert.ok(mid > 2.928 && mid < 4.146);
});

test("interpTable clamps outside the table instead of extrapolating wildly", () => {
  const tbl = D.TABLES.R134a;
  assert.strictEqual(M.interpTable(tbl, "T", -100, "P"), tbl[0].P);
  assert.strictEqual(M.interpTable(tbl, "T", 500, "P"), tbl[tbl.length - 1].P);
});

test("satTemp and satPress are inverse within the table", () => {
  for (const key of REF_KEYS) {
    const base = D.REFRIGERANTS[key];
    for (const T of [-20, 0, 20, 40]) {
      const p = M.satPress(base, T);
      const back = M.satTemp(base, p);
      assert.ok(Math.abs(back - T) < 0.5, `${key}: ${T}°C → ${p} bar → ${back}°C`);
    }
  }
});

test("healthy operating point is sane for every refrigerant", () => {
  for (const key of REF_KEYS) {
    const c = M.deriveAt(key, 100, 100, "none");
    assert.ok(c.pHigh > c.pLow, `${key}: pHigh > pLow`);
    assert.ok(c.cop > 0 && c.cop < 15, `${key}: plausible COP (got ${c.cop})`);
    assert.ok(c.effect > 0, `${key}: positive refrigeration effect`);
    assert.ok(c.work > 0, `${key}: positive compressor work`);
    assert.ok(c.tCond > c.tEvap, `${key}: condensing above evaporating temperature`);
    assert.ok(c.superheat >= 1 && c.superheat <= 60, `${key}: superheat in range`);
    assert.ok(c.subcool >= 0 && c.subcool <= 40, `${key}: subcool in range`);
  }
});

test("every fault × refrigerant × operating point produces finite readings", () => {
  const numericKeys = ["pLow", "pHigh", "tEvap", "tCond", "tSuction", "tDischarge",
    "tLiquid", "superheat", "subcool", "ratio", "flow", "h1", "h2", "h3", "h4",
    "effect", "work", "heatRej", "cop", "capRaw"];
  for (const ref of REF_KEYS) {
    for (const fault of FAULT_KEYS) {
      for (const [speed, load] of [[50, 50], [100, 100], [150, 150], [60, 140]]) {
        const c = M.deriveAt(ref, speed, load, fault);
        for (const k of numericKeys) {
          assert.ok(Number.isFinite(c[k]), `${ref}/${fault}@${speed}/${load}: ${k} finite (got ${c[k]})`);
        }
        assert.ok(c.pHigh > c.pLow, `${ref}/${fault}@${speed}/${load}: pHigh > pLow`);
      }
    }
  }
});

test("low charge: both pressures sag, superheat up, subcool down", () => {
  const h = M.deriveAt("R134a", 100, 100, "none");
  const f = M.deriveAt("R134a", 100, 100, "lowCharge");
  assert.ok(f.pLow < h.pLow);
  assert.ok(f.pHigh < h.pHigh);
  assert.ok(f.superheat > h.superheat);
  assert.ok(f.subcool < h.subcool);
});

test("dirty condenser: head pressure and discharge temperature climb, COP falls", () => {
  const h = M.deriveAt("R134a", 100, 100, "none");
  const f = M.deriveAt("R134a", 100, 100, "dirtyCondenser");
  assert.ok(f.pHigh > h.pHigh);
  assert.ok(f.tDischarge > h.tDischarge);
  assert.ok(f.cop < h.cop);
});

test("leaking compressor valves: pressures converge (ratio shrinks)", () => {
  const h = M.deriveAt("R134a", 100, 100, "none");
  const f = M.deriveAt("R134a", 100, 100, "compressorValves");
  assert.ok(f.ratio < h.ratio);
  assert.ok(f.pLow > h.pLow);
  assert.ok(f.pHigh < h.pHigh);
});

test("TXV stuck closed starves the coil: low suction, high superheat", () => {
  const h = M.deriveAt("R134a", 100, 100, "none");
  const f = M.deriveAt("R134a", 100, 100, "txvStuckClosed");
  assert.ok(f.pLow < h.pLow);
  assert.ok(f.superheat > h.superheat);
});

test("TXV stuck open floods the coil: high suction, superheat collapses", () => {
  const h = M.deriveAt("R134a", 100, 100, "none");
  const f = M.deriveAt("R134a", 100, 100, "txvStuckOpen");
  assert.ok(f.pLow > h.pLow);
  assert.ok(f.superheat < h.superheat);
});

test("every fault has a label, diagnosis (except none), clues and a VIZ entry", () => {
  for (const [key, f] of Object.entries(D.FAULTS)) {
    assert.ok(f.label, `${key}: label`);
    assert.ok(Array.isArray(f.clues) && f.clues.length >= 2, `${key}: at least two clues`);
    if (key !== "none") assert.ok(f.diag, `${key}: diagnosis text`);
    assert.ok(D.VIZ[key], `${key}: VIZ entry`);
    for (const flag of D.VIZ[key].flags) {
      // Flags may name any component any circuit can draw, not just the four
      // core ones — the variations add devices that faults attach to.
      const known = new Set(
        Object.values(C.CIRCUITS).flatMap(c => c.components.map(x => x.id)));
      assert.ok(known.has(flag), `${key}: valid flag ${flag}`);
    }
  }
});

/* Every fault marks the components it shows itself at, and says what a
   technician would find at each of them. The two lists are written by hand in
   js/data.js and are easy to let drift — a component that pulses on the drawing
   with nothing to say about it teaches nothing, and a symptom attributed to a
   component that never lights up is never read. */
test("every flagged component has a field symptom, and every symptom a flag", () => {
  for (const [fault, viz] of Object.entries(D.VIZ)) {
    const flags = [...viz.flags].sort();
    const signs = Object.keys(viz.signs || {}).sort();
    assert.deepStrictEqual(signs, flags, `${fault}: flags and signs agree`);
    for (const id of signs) {
      assert.ok(viz.signs[id].length > 20, `${fault}/${id}: symptom says something`);
    }
  }
});

/* A symptom is attributed to a component id, and it is rendered with that
   component's own caption — so an id no circuit has would print nothing. */
test("every symptom names a component some circuit actually has", () => {
  const known = new Set();
  for (const c of Object.values(C.CIRCUITS)) c.components.forEach((k) => known.add(k.id));
  for (const [fault, viz] of Object.entries(D.VIZ)) {
    for (const id of Object.keys(viz.signs || {})) {
      assert.ok(known.has(id), `${fault} names component "${id}", which no circuit has`);
    }
  }
});

/* ---- Refrigerant data ------------------------------------------------------ */
test("every refrigerant carries a safety class, and the flammable flag follows it", () => {
  for (const [key, r] of Object.entries(D.REFRIGERANTS)) {
    assert.match(r.safety, /^(A|B)(1|2L|2|3)$/, `${key}: ISO 817 class`);
    assert.strictEqual(r.flammable, r.safety !== "A1" && r.safety !== "B1", `${key}: flammable iff class is not 1`);
    assert.ok(Number.isFinite(r.gwp) && r.gwp >= 0, `${key}: GWP`);
    assert.ok(r.use && r.use.length > 20, `${key}: says what it is used for`);
  }
  assert.ok(D.REFRIGERANTS.R32 && D.REFRIGERANTS.R32.safety === "A2L", "R32 is A2L");
  assert.ok(D.REFRIGERANTS.R290 && D.REFRIGERANTS.R290.safety === "A3", "R290 is A3");
  assert.ok(D.REFRIGERANTS.R454B && D.REFRIGERANTS.R454B.glide > 0, "R454B carries its glide");
});

test("saturation tables are monotonic in pressure and pin the reference state", () => {
  for (const [key, tbl] of Object.entries(D.TABLES)) {
    for (let i = 1; i < tbl.length; i++) {
      assert.ok(tbl[i].T > tbl[i - 1].T && tbl[i].P > tbl[i - 1].P, `${key}: row ${i} rises`);
      assert.ok(tbl[i].hg > tbl[i].hf, `${key}: hg above hf at ${tbl[i].T} °C`);
    }
    const zero = tbl.find(r => r.T === 0);
    assert.ok(zero, `${key}: has a 0 °C row`);
    /* IIR reference: h = 200 kJ/kg for saturated liquid at 0 °C. The blends
       tabulated on the dew line sit a little above it. */
    assert.ok(Math.abs(zero.hf - 200) < 8, `${key}: 0 °C liquid enthalpy near 200 kJ/kg (got ${zero.hf})`);
  }
});

test("the new fluids sit where the trade expects them against R410A and R134a", () => {
  const p = (k, T) => M.satPress(D.REFRIGERANTS[k], T);
  // R32 runs a little above R410A pressure; R454B a little below it
  assert.ok(p("R32", 6) > p("R410A", 6) && p("R32", 6) < p("R410A", 6) * 1.15);
  assert.ok(p("R454B", 6) < p("R410A", 6) && p("R454B", 6) > p("R410A", 6) * 0.85);
  // propane sits between R134a and R22
  assert.ok(p("R290", 0) > p("R134a", 0) && p("R290", 0) < p("R22", 0));
  // R32 discharges hotter than R410A at the same duty
  const r32 = M.deriveAt("R32", 100, 100, "none"), r410 = M.deriveAt("R410A", 100, 100, "none");
  assert.ok(r32.tDischarge > r410.tDischarge + 8, "R32 discharge temperature is the well-known problem");
});
