/* The diagnostic engine decides what a learner can measure, what those
   readings work out to, and what the numbers mean. If a signature here is
   wrong, the page teaches a wrong diagnosis — so the classic fault pictures
   are pinned explicitly, in the form a technician would recognise them. */
const test = require("node:test");
const assert = require("node:assert");
const Dg = require("../js/diagnose.js");
const M = require("../js/model.js");
const D = require("../js/data.js");

const ENV = { ambient: 32, boxAir: 2 };
const CORE = ["lowGauge", "highGauge", "evapOutlet", "liquidLine"];
const ALL = Object.keys(Dg.POINTS);

function look(fault, refrigerant = "R404A", placed = CORE.concat("condAirOn", "evapAirOn")) {
  const cyc = M.deriveAt(refrigerant, 100, 100, fault);
  return { cyc, placed, derived: Dg.derive(placed, cyc, ENV, fault) };
}

test("every measurement point reads a number, and explains itself", () => {
  const cyc = M.deriveAt("R404A", 100, 100, "none");
  for (const [id, p] of Object.entries(Dg.POINTS)) {
    assert.ok(p.label && p.short, `${id}: labelled`);
    assert.ok(["temp", "gauge", "elec"].includes(p.kind), `${id}: known instrument kind`);
    assert.ok(p.instrument && p.instrument.length > 15, `${id}: says what you measure it with`);
    assert.ok(p.why && p.why.length > 40, `${id}: says why it is worth measuring`);
    const v = Dg.readingAt(id, cyc, ENV, "none");
    assert.ok(Number.isFinite(v), `${id}: reads a finite value`);
  }
});

test("a derived value is unavailable until both its readings are taken", () => {
  const cyc = M.deriveAt("R404A", 100, 100, "none");
  for (const [key, d] of Object.entries(Dg.DERIVED)) {
    assert.ok(d.needs.length >= 2, `${key}: needs more than one reading`);
    d.needs.forEach(n => assert.ok(Dg.POINTS[n], `${key}: needs a real point (${n})`));
    assert.ok(d.needsWhy && d.needsWhy.length > 40, `${key}: explains what it needs and why`);

    const half = Dg.derive([d.needs[0]], cyc, ENV, "none");
    assert.strictEqual(half[key].available, false, `${key}: not available on one reading`);
    const full = Dg.derive(d.needs, cyc, ENV, "none");
    assert.strictEqual(full[key].available, true, `${key}: available on both`);
    assert.ok(Number.isFinite(full[key].value), `${key}: computes a number`);
  }
});

test("a healthy system reads healthy on every refrigerant", () => {
  for (const r of Object.keys(D.REFRIGERANTS)) {
    const cyc = M.deriveAt(r, 100, 100, "none");
    /* Ambient has to be below the condensing temperature or the condenser TD
       is meaningless — pick one the way the page does. */
    const env = { ambient: cyc.tCond - 12, boxAir: cyc.tEvap + 8 };
    const d = Dg.derive(CORE.concat("condAirOn"), cyc, env, "none");
    assert.ok(d.superheat.value > 2 && d.superheat.value < 15, `${r}: superheat sane (${d.superheat.value})`);
    assert.ok(d.subcooling.value >= 0 && d.subcooling.value < 12, `${r}: subcooling sane (${d.subcooling.value})`);
    assert.ok(d.condenserTd.value > 0 && d.condenserTd.value < 20, `${r}: condenser TD sane (${d.condenserTd.value})`);
  }
});

test("the classic fault signatures come out the way the trade teaches them", () => {
  const lowCharge = look("lowCharge").derived;
  assert.ok(lowCharge.superheat.value > 12, "undercharge: superheat high");
  assert.ok(lowCharge.subcooling.value < 2, "undercharge: subcooling gone");

  const restricted = look("restrictedDrier").derived;
  assert.ok(restricted.superheat.value > 12, "restriction: coil starved");
  assert.ok(restricted.subcooling.value > 6, "restriction: liquid stacked up behind it");

  const dirty = look("dirtyCondenser").derived;
  assert.ok(dirty.condenserTd.value > 18, "dirty condenser: TD wide");

  const open = look("txvStuckOpen").derived;
  assert.ok(open.superheat.value < 4, "valve passing too much: superheat collapses");
});

test("undercharge and restriction are separated by subcooling, not superheat", () => {
  /* Both starve the coil. Subcooling is the reading that tells them apart, and
     that is the single most useful idea on the page. */
  const a = look("lowCharge").derived, b = look("restrictedDrier").derived;
  assert.ok(Math.abs(a.superheat.value - b.superheat.value) < 8, "superheat alone cannot separate them");
  assert.ok(b.subcooling.value - a.subcooling.value > 5, "subcooling can");
});

test("air off a coil never leaves hotter than the coil itself", () => {
  for (const f of Object.keys(D.FAULTS)) {
    const cyc = M.deriveAt("R404A", 100, 100, f);
    const off = Dg.readingAt("condAirOff", cyc, ENV, f);
    assert.ok(off <= cyc.tCond + 0.01, `${f}: condenser air off ${off.toFixed(1)} vs coil ${cyc.tCond.toFixed(1)}`);
    assert.ok(off >= ENV.ambient - 0.01, `${f}: air off is not colder than air on`);
    const evapOff = Dg.readingAt("evapAirOff", cyc, ENV, f);
    assert.ok(evapOff >= cyc.tEvap - 0.01, `${f}: evaporator air off is not colder than the coil`);
    assert.ok(evapOff <= ENV.boxAir + 0.01, `${f}: evaporator air off is not warmer than air on`);
  }
});

test("subcooling is never reported as a negative number", () => {
  for (const f of Object.keys(D.FAULTS)) {
    const d = look(f).derived;
    assert.ok(d.subcooling.value >= 0, `${f}: subcooling ${d.subcooling.value}`);
  }
});

test("interpretation names the signature, and says something for every fault", () => {
  for (const f of Object.keys(D.FAULTS)) {
    const { cyc, placed, derived } = look(f);
    const notes = Dg.interpret(derived, cyc, placed);
    assert.ok(notes.length > 0, `${f}: says something`);
    notes.forEach(n => {
      assert.ok(["good", "watch", "bad", "key"].includes(n.state), `${f}: known state`);
      assert.ok(n.text.length > 25 && !/undefined|NaN/.test(n.text), `${f}: readable note`);
    });
  }
  const under = look("lowCharge");
  assert.ok(Dg.interpret(under.derived, under.cyc, under.placed)
    .some(n => n.state === "key" && /undercharge/i.test(n.text)), "undercharge picture named");
  const rest = look("restrictedDrier");
  assert.ok(Dg.interpret(rest.derived, rest.cyc, rest.placed)
    .some(n => n.state === "key" && /restriction/i.test(n.text)), "restriction picture named");
});

test("working without gauges is called out", () => {
  const cyc = M.deriveAt("R404A", 100, 100, "lowCharge");
  const placed = ["evapOutlet", "liquidLine"];
  const notes = Dg.interpret(Dg.derive(placed, cyc, ENV, "lowCharge"), cyc, placed);
  assert.ok(notes.some(n => /gauge/i.test(n.text)), "says the gauges are missing");
});

test("scoring: exact, same-family half credit, and wrong", () => {
  assert.strictEqual(Dg.judge("lowCharge", "lowCharge").score, 1);
  assert.strictEqual(Dg.judge("condFanFail", "dirtyCondenser").score, 0.5, "same signature family");
  assert.strictEqual(Dg.judge("txvStuckClosed", "restrictedDrier").score, 0.5, "same signature family");
  assert.strictEqual(Dg.judge("lowCharge", "dirtyCondenser").score, 0);
  for (const [answer, actual] of [["lowCharge", "lowCharge"], ["condFanFail", "dirtyCondenser"], ["lowCharge", "none"], ["none", "none"]]) {
    const j = Dg.judge(answer, actual);
    assert.ok(j.text && j.text.length > 30, `${answer}/${actual}: explains itself`);
    assert.ok(!/null|undefined/.test(j.text), `${answer}/${actual}: no null leaking into the text`);
  }
});

test("calling a healthy system faulty is scored, and explained, properly", () => {
  const j = Dg.judge("lowCharge", "none");
  assert.strictEqual(j.score, 0);
  assert.match(j.text, /no fault|running normally/i);
});

test("efficiency rewards measuring what decides the fault, not everything", () => {
  assert.strictEqual(Dg.efficiency(["lowGauge", "evapOutlet"]).rating, "incomplete");
  assert.strictEqual(Dg.efficiency(CORE).rating, "sharp");
  assert.strictEqual(Dg.efficiency(ALL).rating, "scattergun");
  for (const p of [["lowGauge"], CORE, ALL]) {
    assert.ok(Dg.efficiency(p).text.length > 40, "the rating is explained");
  }
});
