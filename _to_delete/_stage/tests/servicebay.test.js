const test = require("node:test");
const assert = require("node:assert");
const S = require("../js/servicebay.js");

const P = { pLow: 3.5, pHigh: 16.0 };

function run(state, actions) {
  const results = [];
  for (const a of actions) results.push(S.act(state, a));
  return results;
}

test("the correct hookup procedure completes with no venting", () => {
  const s = S.newState();
  const results = run(s, [
    { type: "portCap", side: "suction" },
    { type: "portCap", side: "discharge" },
    { type: "hose", side: "suction" },
    { type: "hose", side: "discharge" },
    { type: "spindleCap", side: "suction" },
    { type: "spindleCap", side: "discharge" },
    { type: "spindle", side: "suction", pos: "crack" },
    { type: "spindle", side: "discharge", pos: "crack" },
    { type: "purge", side: "suction" },
    { type: "purge", side: "discharge" },
  ]);
  assert.ok(results.every(r => r.kind !== "warn" && r.kind !== "block"), "no warnings or blocks");
  const c = S.checklist(s);
  assert.ok(c.capsOff && c.hoses && c.cracked && c.purged && c.readings, "full checklist");
  assert.strictEqual(s.warns, 0);
  assert.strictEqual(s.emissionG, 2 * S.PURGE_G, "only the two purge puffs");
  assert.strictEqual(Math.round(S.reading(s, "suction", P) * 10) / 10, 3.5);
  assert.strictEqual(S.reading(s, "discharge", P), 16.0);
});

test("packing up correctly returns the machine to as-found", () => {
  const s = S.newState();
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
  const s = S.newState();
  run(s, [{ type: "portCap", side: "suction" }, { type: "hose", side: "suction" }]);
  const r = S.act(s, { type: "purge", side: "suction" });
  assert.strictEqual(r.kind, "block");
  assert.ok(!s.valves.suction.purged);
});

test("cracking a valve onto a bare open port vents refrigerant", () => {
  const s = S.newState();
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
  const s = S.newState();
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
  const s = S.newState();
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
  const s = S.newState();
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
