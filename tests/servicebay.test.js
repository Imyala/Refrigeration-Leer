const test = require("node:test");
const assert = require("node:assert");
const S = require("../js/servicebay.js");

const P = { pLow: 3.5, pHigh: 16.0 };

function run(state, actions) {
  const results = [];
  for (const a of actions) results.push(S.act(state, a));
  return results;
}

/* A job now starts before the first hose goes on: the engine blocks connecting
   a hose you have not chosen. Fixtures that are about valves and hoses start
   from a properly opened job so they keep testing what they were written for. */
function opened() {
  const s = S.newState();
  S.act(s, { type: "hoseSet", set: "correct" });
  S.act(s, { type: "zeroCheck" });
  return s;
}

test("the taught hookup order completes cleanly, in order, with one purge", () => {
  /* This is the sequence the trade teaches, and the one sequenceReport grades:
     hoses, prove the gauges, high side on and cracked, low side on, look at
     the gauges, purge the low hose using high-side pressure, then crack the
     low port last — so the air is out of the manifold before the low side is
     ever opened to the system. */
  const s = S.newState();
  const results = run(s, [
    { type: "hoseSet", set: "correct" },
    { type: "zeroCheck" },
    { type: "portCap", side: "discharge" },
    { type: "hose", side: "discharge" },
    { type: "spindleCap", side: "discharge" },
    { type: "spindle", side: "discharge", pos: "crack" },
    { type: "portCap", side: "suction" },
    { type: "hose", side: "suction" },
    { type: "check" },
    { type: "purge", side: "suction" },
    { type: "spindleCap", side: "suction" },
    { type: "spindle", side: "suction", pos: "crack" },
  ]);
  assert.ok(results.every(r => r.kind !== "warn" && r.kind !== "block"), "no warnings or blocks");

  const c = S.checklist(s);
  assert.ok(c.hoseSet && c.zeroChecked, "job opened properly");
  assert.ok(c.capsOff && c.hoses && c.cracked && c.purged && c.readings, "full checklist");
  assert.strictEqual(s.warns, 0);
  /* One puff at the low side sweeps the manifold and both hoses — which is
     exactly why the order is worth teaching. */
  assert.strictEqual(s.emissionG, S.PURGE_G, "one purge puff, not one per hose");
  assert.strictEqual(Math.round(S.reading(s, "suction", P) * 10) / 10, 3.5);
  assert.strictEqual(S.reading(s, "discharge", P), 16.0);

  const seq = S.sequenceReport(s);
  assert.strictEqual(seq.done, seq.total, "every taught step done");
  assert.ok(seq.inOrder, "and done in the taught order");
});

test("packing up correctly returns the machine to as-found", () => {
  const s = opened();
  run(s, [
    { type: "portCap", side: "suction" }, { type: "hose", side: "suction" },
    { type: "spindleCap", side: "suction" }, { type: "spindle", side: "suction", pos: "crack" },
    { type: "purge", side: "suction" },
    // pack up in the right order: back-seat, hose off, caps on
    { type: "spindle", side: "suction", pos: "back" },
    { type: "hose", side: "suction" },
    { type: "portCap", side: "suction" },
    { type: "spindleCap", side: "suction" },
  ]);
  assert.ok(!S.packedUp(s) === false || S.packedUp(s), "suction side packed");
  assert.strictEqual(s.warns, 0);
  assert.ok(S.packedUp(s), "fully packed (discharge untouched = as found)");
});

test("the spindle cannot be turned with its cap on", () => {
  const s = S.newState();
  const r = S.act(s, { type: "spindle", side: "suction", pos: "crack" });
  assert.strictEqual(r.kind, "block");
  assert.strictEqual(s.valves.suction.spindle, "back", "spindle unchanged");
});

test("a hose cannot connect over the port cap", () => {
  const s = S.newState();
  const r = S.act(s, { type: "hose", side: "suction" });
  assert.strictEqual(r.kind, "block");
  assert.ok(!s.valves.suction.hose);
});

test("purging is blocked until there is pressure behind the hose", () => {
  const s = opened();
  run(s, [{ type: "portCap", side: "suction" }, { type: "hose", side: "suction" }]);
  const r = S.act(s, { type: "purge", side: "suction" });
  assert.strictEqual(r.kind, "block");
  assert.ok(!s.valves.suction.purged);
});

test("cracking a valve onto a bare open port vents refrigerant", () => {
  const s = opened();
  run(s, [
    { type: "portCap", side: "suction" },            // cap off, no hose
    { type: "spindleCap", side: "suction" },
  ]);
  const r = S.act(s, { type: "spindle", side: "suction", pos: "crack" });
  assert.strictEqual(r.kind, "warn");
  assert.ok(s.leaks.suction, "leak active");
  assert.strictEqual(s.emissionG, S.VENT_G);
  // back-seating seals it
  const r2 = S.act(s, { type: "spindle", side: "suction", pos: "back" });
  assert.strictEqual(r2.kind, "ok");
  assert.ok(!s.leaks.suction, "leak sealed");
});

test("breaking a hose off a live port hisses and loses the purge", () => {
  const s = opened();
  run(s, [
    { type: "portCap", side: "suction" }, { type: "hose", side: "suction" },
    { type: "spindleCap", side: "suction" }, { type: "spindle", side: "suction", pos: "crack" },
    { type: "purge", side: "suction" },
  ]);
  const r = S.act(s, { type: "hose", side: "suction" });
  assert.strictEqual(r.kind, "warn");
  assert.ok(s.leaks.suction);
  assert.ok(!s.valves.suction.purged);
});

test("front-seating the discharge trips the HP cut-out; back-seating resets it", () => {
  const s = opened();
  run(s, [
    { type: "portCap", side: "discharge" }, { type: "hose", side: "discharge" },
    { type: "spindleCap", side: "discharge" },
  ]);
  const r = S.act(s, { type: "spindle", side: "discharge", pos: "front" });
  assert.strictEqual(r.kind, "warn");
  assert.ok(s.tripped, "HP trip");
  // tripped readings equalise
  const eq = S.reading(s, "discharge", P);
  assert.ok(Math.abs(eq - (P.pLow + P.pHigh) / 2) < 1e-9, "equalised reading");
  const r2 = S.act(s, { type: "spindle", side: "discharge", pos: "back" });
  assert.ok(/resets/.test(r2.msg), "reset message");
  assert.ok(!s.tripped);
});

test("front-seating the suction reads as a pump-down, not a fault", () => {
  const s = opened();
  run(s, [
    { type: "portCap", side: "suction" }, { type: "hose", side: "suction" },
    { type: "spindleCap", side: "suction" },
  ]);
  const r = S.act(s, { type: "spindle", side: "suction", pos: "front" });
  assert.strictEqual(r.kind, "info");
  assert.match(r.msg, /pump-down/);
  const p = S.reading(s, "suction", P);
  assert.ok(p < 1.1, "low side pulled right down");
});

test("no reading without a hose or with the valve back-seated", () => {
  const s = S.newState();
  assert.strictEqual(S.reading(s, "suction", P), null);
  run(s, [{ type: "portCap", side: "suction" }, { type: "hose", side: "suction" }]);
  assert.strictEqual(S.reading(s, "suction", P), null, "back-seated → port dead");
});

/* ---- Flammable refrigerants ------------------------------------------------
   An A2L or A3 charge adds a step to the taught order: assess the area as a
   flammable zone before anything can release refrigerant. */
test("an A1 machine has eight steps; a flammable one has nine, with the zone step before any hose", () => {
  const a1 = S.newState();
  const a2l = S.newState({ flammable: true, safety: "A2L" });
  assert.strictEqual(S.sequenceFor(a1).length, 8);
  assert.strictEqual(S.sequenceFor(a2l).length, 9);
  const ids = S.sequenceFor(a2l).map(st => st.id);
  assert.ok(ids.indexOf("zone") < ids.indexOf("highHose"), "zone is assessed before the first hose goes on");
  assert.ok(!S.sequenceFor(a1).some(st => st.id === "zone"), "no zone step on an A1 charge");
  assert.strictEqual(S.checklist(a2l).flammable, true);
});

test("the zone check is graded in order and needs no warning on a clean flammable hook-up", () => {
  const s = S.newState({ flammable: true, safety: "A2L" });
  const results = run(s, [
    { type: "hoseSet", set: "correct" },
    { type: "zeroCheck" },
    { type: "zoneCheck" },
    { type: "portCap", side: "discharge" },
    { type: "hose", side: "discharge" },
    { type: "spindleCap", side: "discharge" },
    { type: "spindle", side: "discharge", pos: "crack" },
    { type: "portCap", side: "suction" },
    { type: "hose", side: "suction" },
    { type: "check" },
    { type: "purge", side: "suction" },
    { type: "spindleCap", side: "suction" },
    { type: "spindle", side: "suction", pos: "crack" },
  ]);
  assert.ok(results.every(r => r.kind !== "warn" && r.kind !== "block"), "no warnings or blocks");
  assert.strictEqual(s.zoneMissed, 0);
  const seq = S.sequenceReport(s);
  assert.strictEqual(seq.done, 9);
  assert.ok(seq.inOrder);
});

test("a purge on a flammable charge with no zone assessment is called out, and counted", () => {
  const s = S.newState({ flammable: true, safety: "A2L" });
  run(s, [
    { type: "hoseSet", set: "correct" }, { type: "zeroCheck" },
    { type: "portCap", side: "discharge" }, { type: "hose", side: "discharge" },
    { type: "spindleCap", side: "discharge" }, { type: "spindle", side: "discharge", pos: "crack" },
    { type: "portCap", side: "suction" }, { type: "hose", side: "suction" },
  ]);
  const r = S.act(s, { type: "purge", side: "suction" });
  assert.strictEqual(r.kind, "warn");
  assert.match(r.msg, /A2L/);
  assert.strictEqual(s.zoneMissed, 1);
  assert.ok(s.valves.suction.purged && s.valves.discharge.purged, "the purge still happened");
  /* Assessing the zone afterwards completes the step, but out of order. */
  S.act(s, { type: "zoneCheck" });
  const zone = S.sequenceReport(s).steps.find(st => st.id === "zone");
  assert.ok(zone.complete && zone.outOfOrder);
});

test("venting a flammable charge without the assessment carries the reminder; an A1 vent does not", () => {
  const flam = S.newState({ flammable: true, safety: "A3" });
  run(flam, [{ type: "hoseSet", set: "correct" }, { type: "zeroCheck" }, { type: "spindleCap", side: "suction" }, { type: "portCap", side: "suction" }]);
  const vent = S.act(flam, { type: "spindle", side: "suction", pos: "crack" });
  assert.strictEqual(vent.kind, "warn");
  assert.match(vent.msg, /A3 refrigerant/);
  assert.strictEqual(flam.zoneMissed, 1);

  const a1 = opened();
  run(a1, [{ type: "spindleCap", side: "suction" }, { type: "portCap", side: "suction" }]);
  const vent1 = S.act(a1, { type: "spindle", side: "suction", pos: "crack" });
  assert.strictEqual(vent1.kind, "warn");
  assert.doesNotMatch(vent1.msg, /flammable|A2L|A3/);
  assert.strictEqual(a1.zoneMissed, 0);
});

test("the zone check on an A1 machine is harmless and says why", () => {
  const s = opened();
  const r = S.act(s, { type: "zoneCheck" });
  assert.strictEqual(r.kind, "info");
  assert.match(r.msg, /A1/);
  assert.strictEqual(S.sequenceReport(s).total, 8, "it adds no step to grade");
});
