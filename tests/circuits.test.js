/* Circuit library: the schematic definitions and what each variation does to
   the cycle. Geometry is checked structurally — a definition that would draw
   a caption off the frame, or reference a component that is not in the
   circuit, is a bug you would otherwise only find by looking at a screenshot. */
const test = require("node:test");
const assert = require("node:assert");

const C = require("../js/circuits.js");
const D = require("../js/data.js");
const M = require("../js/model.js");

const KEYS = Object.keys(C.CIRCUITS);

test("every circuit declares what it is and what it teaches", () => {
  for (const k of KEYS) {
    const c = C.CIRCUITS[k];
    assert.ok(c.label, `${k} has a label`);
    assert.ok(c.blurb && c.blurb.length > 20, `${k} has a blurb`);
    assert.ok(c.teaches && c.teaches.length > 40, `${k} explains why it exists`);
    assert.ok(c.seenIn && c.seenIn.length > 20, `${k} says where it is met`);
    assert.match(c.viewBox, /^-?\d+ -?\d+ \d+ \d+$/, `${k} has a viewBox`);
    assert.ok(Number.isInteger(c.order), `${k} has an order`);
  }
});

test("ordering is unique and contiguous from 1", () => {
  const orders = KEYS.map(k => C.CIRCUITS[k].order).sort((a, b) => a - b);
  assert.deepStrictEqual(orders, orders.map((_, i) => i + 1));
  assert.deepStrictEqual(C.ORDER.map(k => C.CIRCUITS[k].order), orders);
});

test("every circuit has the components a cycle cannot work without", () => {
  for (const k of KEYS) {
    const ids = C.CIRCUITS[k].components.map(c => c.id);
    for (const need of ["compressor", "condenser", "evaporator", "metering"]) {
      assert.ok(ids.includes(need), `${k} has a ${need}`);
    }
    assert.strictEqual(new Set(ids).size, ids.length, `${k} has no duplicate component ids`);
  }
});

test("every circuit carries all four refrigerant states", () => {
  for (const k of KEYS) {
    const states = new Set(C.CIRCUITS[k].pipes.map(p => p.state));
    for (const s of ["hotgas", "liquid", "flash", "vapor"]) {
      assert.ok(states.has(s), `${k} draws a ${s} run`);
    }
  }
});

test("pipe ids are unique within a circuit", () => {
  for (const k of KEYS) {
    const ids = C.CIRCUITS[k].pipes.map(p => p.id);
    assert.strictEqual(new Set(ids).size, ids.length, `${k} has no duplicate pipe ids`);
  }
});

test("every coordinate sits inside its circuit's viewBox", () => {
  for (const k of KEYS) {
    const c = C.CIRCUITS[k];
    const [vx, vy, vw, vh] = c.viewBox.split(" ").map(Number);
    const inX = (x, what) => assert.ok(x >= vx && x <= vx + vw, `${k}: ${what} x=${x} outside viewBox`);
    const inY = (y, what) => assert.ok(y >= vy && y <= vy + vh, `${k}: ${what} y=${y} outside viewBox`);

    for (const p of c.pipes) {
      for (const [, x, y] of [...p.d.matchAll(/([ML]) (-?[\d.]+) (-?[\d.]+)/g)].map(m => [m[1], +m[2], +m[3]])) {
        inX(x, `pipe ${p.id}`); inY(y, `pipe ${p.id}`);
      }
      if (p.labelAt) { inX(p.labelAt.x, `label ${p.id}`); inY(p.labelAt.y, `label ${p.id}`); }
    }
    for (const comp of c.components) {
      if (comp.box) {
        inX(comp.box.x, `${comp.id} box`); inX(comp.box.x + comp.box.w, `${comp.id} box`);
        inY(comp.box.y, `${comp.id} box`); inY(comp.box.y + comp.box.h, `${comp.id} box`);
      }
      if (comp.at) { inX(comp.at.x, `${comp.id}`); inY(comp.at.y, `${comp.id}`); }
    }
  }
});

test("circuit-specific faults exist and are marked as device-dependent", () => {
  for (const k of KEYS) {
    for (const f of C.CIRCUITS[k].faults || []) {
      assert.ok(D.FAULTS[f], `${k}: fault ${f} exists`);
      assert.ok(D.VIZ[f], `${k}: fault ${f} has schematic visualisation`);
    }
  }
  // Any fault needing a device must be offered by at least one circuit
  for (const [key, f] of Object.entries(D.FAULTS)) {
    if (!f.needsCircuitDevice) continue;
    const offered = KEYS.some(k => (C.CIRCUITS[k].faults || []).includes(key));
    assert.ok(offered, `fault ${key} is reachable from some circuit`);
  }
});

test("a device-dependent fault only flags components its circuits have", () => {
  for (const [key, f] of Object.entries(D.FAULTS)) {
    if (!f.needsCircuitDevice) continue;
    for (const k of KEYS) {
      if (!(C.CIRCUITS[k].faults || []).includes(key)) continue;
      const ids = new Set(C.CIRCUITS[k].components.map(c => c.id));
      for (const flag of D.VIZ[key].flags) {
        assert.ok(ids.has(flag), `${k}: fault ${key} flags ${flag}, which that circuit does not have`);
      }
    }
  }
});

/* ---- What the variations do to the cycle -------------------------------- */

test("hardware that changes nothing thermodynamically changes nothing", () => {
  const base = M.deriveAt("R134a", 100, 100, "none", "basic");
  for (const k of ["commercial", "accumulator"]) {
    const c = M.deriveAt("R134a", 100, 100, "none", k);
    assert.ok(Math.abs(c.cop - base.cop) < 1e-9, `${k} leaves COP alone`);
    assert.ok(Math.abs(c.effect - base.effect) < 1e-9, `${k} leaves the effect alone`);
  }
});

test("a suction-line heat exchanger trades subcooling for superheat", () => {
  const base = M.deriveAt("R134a", 100, 100, "none", "basic");
  const hx = M.deriveAt("R134a", 100, 100, "none", "suctionHx");
  assert.ok(hx.subcool > base.subcool, "more subcooling");
  assert.ok(hx.superheat > base.superheat, "more superheat at the compressor");
  assert.strictEqual(hx.superheatCoil, base.superheatCoil, "the coil still does the same work");
  assert.ok(hx.tDischarge > base.tDischarge, "hotter discharge");
  assert.ok(hx.flashFraction < base.flashFraction, "less flash gas at the valve");
  assert.ok(hx.work > base.work, "the extra superheat costs work");
  // The gain must be modest — a big jump means the model is double-counting
  const gain = hx.cop / base.cop - 1;
  assert.ok(gain > 0 && gain < 0.10, `COP gain is small and positive, got ${(gain * 100).toFixed(1)}%`);
});

test("a flash chamber clears the coil inlet without inventing free COP", () => {
  const base = M.deriveAt("R134a", 100, 100, "none", "basic");
  const fg = M.deriveAt("R134a", 100, 100, "none", "flashGas");
  assert.strictEqual(fg.coilInletQuality, 0, "the coil is fed pure liquid");
  assert.ok(base.coilInletQuality > 0.1, "without it, the coil inlet is part vapour");
  assert.ok(Math.abs(fg.cop - base.cop) < 1e-9, "COP is untouched — the gas still gets compressed");
});

test("an EPR gives the second coil its own temperature", () => {
  const c = M.deriveAt("R134a", 100, 100, "none", "multiEvap");
  assert.ok(c.tEvapB > c.tEvap, "the chiller coil runs warmer than the freezer");
  assert.ok(c.pLowB > c.pLow, "and therefore at a higher pressure");
});

test("a cascade splits the pressure ratio and beats one machine over the span", () => {
  const c = M.deriveAt("R404A", 100, 100, "none", "cascade");
  const base = M.deriveAt("R404A", 100, 100, "none", "basic");
  assert.ok(c.tEvap < base.tEvap - 15, "it reaches far colder than a single stage");
  assert.ok(c.tInter > c.tEvap && c.tInter < c.tCond, "the interstage sits between the two");
  assert.ok(c.lowStage.ratio < c.singleStage.ratio, "each stage runs an easier ratio");
  assert.ok(c.highStage.ratio < c.singleStage.ratio);
  assert.ok(c.cop > c.singleStage.cop, "and it beats one machine over the same span");
  assert.ok(c.singleStage.tDisch > 120, "which would be discharging dangerously hot");
});

test("flash fraction is reported on every circuit and is a fraction", () => {
  for (const k of KEYS) {
    const c = M.deriveAt("R134a", 100, 100, "none", k);
    assert.ok(c.flashFraction >= 0 && c.flashFraction <= 1, `${k} flash fraction in range`);
    assert.ok(c.coilInletQuality >= 0 && c.coilInletQuality <= 1, `${k} coil inlet quality in range`);
  }
});

test("every circuit produces a sane operating point for every refrigerant", () => {
  for (const k of KEYS) {
    for (const r of Object.keys(D.REFRIGERANTS)) {
      const c = M.deriveAt(r, 100, 100, "none", k);
      assert.ok(c.cop > 0.3 && c.cop < 12, `${k}/${r} COP ${c.cop.toFixed(2)} is plausible`);
      assert.ok(c.pHigh > c.pLow, `${k}/${r} high side above low side`);
      assert.ok(c.tDischarge > c.tCond, `${k}/${r} discharge above condensing`);
      assert.ok(Number.isFinite(c.effect) && c.effect > 0, `${k}/${r} positive refrigeration effect`);
    }
  }
});
