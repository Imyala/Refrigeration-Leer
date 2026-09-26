/* The Plant Simulator draws a real plant from the same operating point as the
   rest of the site. What can go wrong without anyone seeing it: a pipe that
   no longer joins the part it feeds, a state point that ends up on the wrong
   side of the P–h diagram, a fault that shows nothing at the plant, a part on
   the drawing that the inspector knows nothing about. */
const test = require("node:test");
const assert = require("node:assert");

const D = require("../js/data.js");
const M = require("../js/model.js");
const P = require("../js/plant.js");
const ART = require("../js/plant-art.js");

const near = (a, b, tol) => Math.hypot(a[0] - b[0], a[1] - b[1]) <= (tol == null ? 1 : tol);

test("slicing a polyline keeps its ends and its length", () => {
  const pts = P.run([[0, 0], [100, 0], [100, 100]], 10);
  const L = P.totalLength(pts);
  assert.ok(L > 180 && L < 200, "a rounded right angle is a little shorter than its corners");
  const half = P.slice(pts, 0, 0.5), rest = P.slice(pts, 0.5, 1);
  assert.ok(Math.abs(P.totalLength(half) + P.totalLength(rest) - L) < 0.5, "two halves add up to the whole");
  assert.ok(near(half[half.length - 1], rest[0]), "the halves meet");
  assert.deepStrictEqual(P.slice(pts, 0.6, 0.4), [], "an empty slice is empty");
});

test("the refrigerant circuit is one unbroken loop", () => {
  const R = P.RUNS, C = P.COILS;
  const first = (pts) => pts[0], last = (pts) => pts[pts.length - 1];
  // Pipe runs that meet end to end, in flow order.
  assert.ok(near(last(R.dischargeUp.pts), first(C.condenser)), "discharge reaches the condenser inlet");
  assert.ok(near(last(C.condenser), first(R.condOut.pts)), "condenser outlet feeds the receiver line");
  assert.ok(near(last(R.liquidRiser.pts), first(R.liquidLine.pts)), "riser meets the liquid line");
  assert.ok(near(last(R.txvOut.pts), first(C.evaporator)), "TXV outlet feeds the evaporator");
  assert.ok(near(last(C.evaporator), first(R.suction.pts)), "evaporator outlet is the suction line");
  // Runs that meet at a part: close enough that the part covers the gap.
  const A = P.PARTS_AT;
  assert.ok(near(first(R.discharge.pts), [A.compressor.x + 200, A.compressor.y], 2), "discharge leaves the discharge valve");
  assert.ok(near(last(R.suctionOut.pts), [A.compressor.x + 40, A.compressor.y], 2), "suction arrives at the suction valve");
  assert.ok(near(last(R.discharge.pts), [A.oilSeparator.x + 14, A.oilSeparator.y + 2], 2), "discharge enters the oil separator");
  assert.ok(near(first(R.dischargeUp.pts), [A.oilSeparator.x + 36, A.oilSeparator.y + 2], 2), "and leaves it");
  assert.ok(near(last(R.liquidLine.pts), [A.txv.x + 22, A.txv.y], 2), "the liquid line reaches the TXV inlet");
  assert.ok(near(first(R.txvOut.pts), [A.txv.x, A.txv.y + 24], 2), "and leaves its outlet");
});

test("the seven state points sit where a P–h diagram puts them, for every fluid and fault", () => {
  for (const ref of Object.keys(D.REFRIGERANTS)) {
    for (const fault of P.faultKeys()) {
      const op = M.deriveAt(ref, 100, 100, fault, "basic");
      const sp = P.statePoints(op);
      const tag = `${ref}/${fault}`;
      for (const k of ["5", "1", "1'"]) assert.strictEqual(sp[k].p, op.pLow, `${tag}: ${k} is on the low side`);
      for (const k of ["2", "3", "4", "4'"]) assert.strictEqual(sp[k].p, op.pHigh, `${tag}: ${k} is on the high side`);
      assert.ok(Math.abs(sp["5"].h - sp["4'"].h) < 1e-9, `${tag}: expansion is isenthalpic`);
      assert.ok(sp["1"].h > sp["5"].h, `${tag}: the evaporator adds heat`);
      assert.ok(sp["1'"].h >= sp["1"].h, `${tag}: superheat adds heat`);
      assert.ok(sp["2"].h > sp["1'"].h, `${tag}: the compressor adds work`);
      assert.ok(sp["2"].t >= M.satTemp(op.base, sp["2"].p) - 0.5, `${tag}: the discharge is never below saturation`);
      assert.ok(sp["3"].h > sp["4"].h && sp["4"].h >= sp["4'"].h, `${tag}: the condenser takes heat out`);
      assert.ok(sp["5"].x > 0 && sp["5"].x < 1, `${tag}: point 5 is a mix`);
      assert.ok(sp["1'"].t >= sp["1"].t && sp["4'"].t <= sp["4"].t, `${tag}: superheat and subcooling have the right sign`);
    }
  }
});

test("with liquid coming back, 1 and 1′ are one wet point inside the dome", () => {
  for (const ref of Object.keys(D.REFRIGERANTS)) {
    const sp = P.statePoints(M.deriveAt(ref, 100, 100, "floodback", "basic"));
    assert.ok(sp["1'"].wet && sp["1'"].phase === "mix" && sp["1'"].x < 0.99, `${ref}: the suction is wet`);
    assert.strictEqual(sp["1"].h, sp["1'"].h, `${ref}: 1 and 1′ coincide`);
    const dry = P.statePoints(M.deriveAt(ref, 100, 100, "none", "basic"));
    assert.ok(!dry["1'"].wet && dry["1'"].phase === "vap", `${ref}: a healthy suction is superheated`);
  }
});

test("every point the drawing marks has a position and a description", () => {
  for (const fault of P.faultKeys()) {
    const pos = P.pointPositions(D.VIZ[fault]);
    for (const k of P.POINT_ORDER) {
      assert.ok(pos[k] && Number.isFinite(pos[k][0]) && Number.isFinite(pos[k][1]), `${fault}: point ${k} is placed`);
      assert.ok(pos[k][0] > 0 && pos[k][0] < P.VIEW.w && pos[k][1] > 0 && pos[k][1] < P.VIEW.h, `${fault}: ${k} is on the drawing`);
      assert.ok(P.POINTS[k].name && P.POINTS[k].what, `point ${k} is described`);
    }
  }
});

test("the plant offers the faults it has hardware for, and no others", () => {
  const keys = P.faultKeys();
  for (const k of ["none", "lowCharge", "condFanFail", "icedEvaporator", "solenoidShut", "floodback"]) {
    assert.ok(keys.includes(k), `offers ${k}`);
  }
  for (const k of ["eprMisadjusted", "cascadeFouled"]) assert.ok(!keys.includes(k), `no ${k}: this plant has no such device`);
});

test("every fault shows at the plant, and a healthy plant shows nothing wrong", () => {
  const healthy = P.symptoms("none", M.deriveAt("R404A", 100, 100, "none", "basic"), true);
  assert.deepStrictEqual(healthy.flags, [], "nothing flagged");
  assert.strictEqual(healthy.sightGlass, "clear");
  assert.ok(!healthy.hpTrip && !healthy.lpTrip, "no control has tripped");
  for (const fault of P.faultKeys().filter((k) => k !== "none")) {
    const op = M.deriveAt("R404A", 100, 100, fault, "basic");
    const s = P.symptoms(fault, op, true);
    const visible = s.flags.length || s.sightGlass !== "clear" || s.evapIced || s.condDirty || !s.condFanTurning ||
      s.drierFrost || s.suctionFrost > 0 || s.accumulatorLevel > 0 || s.gaugeFlutter || s.liquidStopsAtSolenoid;
    assert.ok(visible, `${fault} shows at the plant`);
    for (const id of s.flags) assert.ok(P.PARTS[id], `${fault}: flagged part ${id} exists`);
  }
  // The specific tells a technician is taught to look for.
  const s = (f) => P.symptoms(f, M.deriveAt("R404A", 100, 100, f, "basic"), true);
  assert.strictEqual(s("lowCharge").sightGlass, "bubbles", "low charge bubbles in the sight glass");
  assert.ok(s("lowCharge").receiverLevel < s("none").receiverLevel, "and the receiver runs low");
  assert.ok(!s("condFanFail").condFanTurning, "a failed condenser fan does not turn");
  assert.ok(s("condFanFail").hpTrip, "and head pressure reaches the cut-out");
  assert.ok(s("solenoidShut").lpTrip, "a shut solenoid pumps down to the low-pressure switch");
  assert.ok(s("floodback").accumulatorLevel > 0.3 && s("floodback").compressorFrost, "floodback fills the accumulator and frosts the compressor");
  assert.ok(s("restrictedDrier").drierFrost, "a restricted drier frosts");
});

test("every part on the drawing is one the inspector can explain", () => {
  const op = M.deriveAt("R404A", 100, 100, "none", "basic");
  const svg = ART.render({
    op, sym: P.symptoms("none", op, true), viz: D.VIZ.none,
    gaugeLevels: { lo: 0.4, hi: 0.5, flutter: false }, selectedPoint: null,
    air: { room: "0 °C", ambient: "28 °C", roomValue: "0.0" },
  });
  const drawn = new Set([...svg.matchAll(/class="pl-part[^"]*" data-part="(\w+)"/g)].map((m) => m[1]));
  assert.deepStrictEqual([...drawn].sort(), [...P.PART_ORDER].sort(), "the drawing and the catalogue list the same parts");
  for (const id of P.PART_ORDER) {
    const part = P.PARTS[id];
    assert.ok(part.name && part.kind && part.does && part.look, `${id} is fully described`);
    assert.ok(ART.LABELS[id], `${id} is labelled on the drawing`);
  }
  const focusable = (svg.match(/tabindex="0"/g) || []).length;
  assert.strictEqual(focusable, P.PART_ORDER.length + P.POINT_ORDER.length, "every part and point can be reached by keyboard");
});

test("the drawing renders cleanly for every fault, running or stopped", () => {
  for (const fault of P.faultKeys()) {
    for (const running of [true, false]) {
      const op = M.deriveAt("R134a", 120, 80, fault, "basic");
      const sym = P.symptoms(fault, op, running);
      const svg = ART.render({
        op, sym, viz: D.VIZ[fault], gaugeLevels: { lo: 0.3, hi: 0.7, flutter: sym.gaugeFlutter },
        selectedPoint: "4'", air: { room: "16 °C", ambient: "43 °C", roomValue: running ? "16.0" : null },
      });
      const hole = svg.match(/.{0,40}(undefined|NaN|\[object Object\]).{0,20}/);
      assert.ok(!hole, `${fault}/${running}: template hole — ${hole && hole[0]}`);
      assert.ok(!/https?:\/\/(?!www\.w3\.org)/.test(svg), "no external references");
    }
  }
});
