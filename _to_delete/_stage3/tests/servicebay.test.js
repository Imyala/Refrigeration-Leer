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
