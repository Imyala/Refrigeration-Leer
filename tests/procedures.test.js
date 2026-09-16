/* The procedure trainers carry the Code of Practice's numbers in their rules:
   test pressures against PS, hold durations, micron targets, fill ratios.
   Pin them, and pin that the taught order completes cleanly while every
   dangerous shortcut is caught. */
const test = require("node:test");
const assert = require("node:assert");
const P = require("../js/procedures.js");

const { pressureTest: PT, evacuation: EV, recoverCharge: RC, brazing: BR } = P.PROCEDURES;
const A = (proc, s, id, ...args) => P.act(proc, s, id, ...args);

test("every procedure declares its steps, actions and Code references", () => {
  for (const id of P.ORDER) {
    const p = P.PROCEDURES[id];
    assert.ok(p.title && p.short, `${id}: titled`);
    assert.ok(Array.isArray(p.refs) && p.refs.length, `${id}: cites the Code`);
    assert.ok(p.SEQUENCE.length >= 6, `${id}: a real sequence`);
    for (const st of p.SEQUENCE) assert.ok(st.id && st.label && st.why && typeof st.test === "function" && typeof st.matches === "function", `${id}/${st.id}: complete step`);
    assert.ok(Object.keys(p.actions).length >= 6, `${id}: actions`);
    assert.ok(Object.keys(p.scenarios).length >= 2, `${id}: scenarios`);
    const s = p.newState();
    assert.strictEqual(s.warns, 0);
    assert.ok(Array.isArray(s.trail));
  }
});

/* ---- Pressure test ------------------------------------------------------ */
test("pressure test: refrigerant and standard nitrogen are refused as the medium", () => {
  const s = PT.newState("commissioning");
  assert.strictEqual(A("pressureTest", s, "chooseMedium", "refrigerant").kind, "warn");
  assert.strictEqual(s.medium, null);
  assert.strictEqual(A("pressureTest", s, "chooseMedium", "nitrogen").kind, "warn");
  assert.strictEqual(A("pressureTest", s, "chooseMedium", "ofn").kind, "ok");
});

test("pressure test: the test pressure is checked against PS, the cut-out and the band the Code gives", () => {
  const c = PT.newState("commissioning");
  assert.strictEqual(A("pressureTest", c, "setPressure", 4500).kind, "warn", "above PS");
  assert.strictEqual(A("pressureTest", c, "setPressure", 4100).kind, "warn", "above the cut-out");
  assert.strictEqual(A("pressureTest", c, "setPressure", 2000).kind, "warn", "below max operating for commissioning");
  assert.strictEqual(A("pressureTest", c, "setPressure", 3800).kind, "ok");
  const r = PT.newState("repair");
  assert.strictEqual(A("pressureTest", r, "setPressure", 500).kind, "warn", "below 25 % of PS");
  assert.strictEqual(A("pressureTest", r, "setPressure", 2400).kind, "ok", "inside 25–90 % and below the cut-out");
});

function ptSetup(scenario, leak) {
  const s = PT.newState(scenario);
  s.leak = leak;
  A("pressureTest", s, "chooseMedium", "ofn");
  A("pressureTest", s, "chooseGauge", "ok");
  A("pressureTest", s, "setPressure", scenario === "repair" ? 2400 : 3800);
  return s;
}

test("pressure test: a tight system passes after the full hold, with temperature correction, in the taught order", () => {
  const s = ptSetup("commissioning", false);
  assert.strictEqual(A("pressureTest", s, "pressurise", 0.3).kind, "ok");
  A("pressureTest", s, "checkJoints");
  A("pressureTest", s, "pressurise", 0.65);
  A("pressureTest", s, "checkJoints");
  A("pressureTest", s, "pressurise", 1);
  A("pressureTest", s, "checkJoints");
  assert.strictEqual(A("pressureTest", s, "isolateAndRecord").kind, "ok");
  for (let i = 0; i < 4; i++) A("pressureTest", s, "wait", 6);
  assert.ok(s.pressure !== s.recorded.p, "the ambient moved the gauge");
  const r = A("pressureTest", s, "declare", "pass");
  assert.strictEqual(r.kind, "ok", r.msg);
  assert.ok(s.done);
  const v = PT.verdict(s);
  assert.strictEqual(v.seq.done, v.seq.total);
  assert.ok(v.seq.inOrder);
});

test("pressure test: a leak is caught at a stage check or by the corrected drop, and repairs wait for zero pressure", () => {
  const s = ptSetup("repair", true);
  A("pressureTest", s, "pressurise", 0.3);
  assert.strictEqual(A("pressureTest", s, "checkJoints").kind, "ok", "too little pressure to show yet");
  A("pressureTest", s, "pressurise", 1);
  assert.strictEqual(A("pressureTest", s, "checkJoints").kind, "warn", "bubbles at the joint");
  assert.ok(s.leakFound);
  assert.strictEqual(A("pressureTest", s, "repair").kind, "warn", "repair attempted under pressure");
  assert.strictEqual(A("pressureTest", s, "depressurise").kind, "ok");
  assert.strictEqual(A("pressureTest", s, "repair").kind, "ok");
  assert.strictEqual(A("pressureTest", s, "retest").kind, "ok");

  const t = ptSetup("commissioning", true);
  A("pressureTest", t, "pressurise", 0.5); A("pressureTest", t, "pressurise", 1);
  A("pressureTest", t, "isolateAndRecord");
  for (let i = 0; i < 24; i++) A("pressureTest", t, "wait", 1);
  assert.strictEqual(A("pressureTest", t, "declare", "pass").kind, "warn", "a pass declared over a real drop");
  assert.strictEqual(A("pressureTest", t, "declare", "fail").kind, "ok");
});

test("pressure test: jumping straight to full pressure, or declaring before the hold, is called out", () => {
  const s = ptSetup("commissioning", false);
  assert.strictEqual(A("pressureTest", s, "pressurise", 1).kind, "warn");
  A("pressureTest", s, "isolateAndRecord");
  A("pressureTest", s, "wait", 2);
  assert.strictEqual(A("pressureTest", s, "declare", "pass").kind, "warn", "declared before the hold");
  const v = PT.verdict(s);
  assert.ok(v.seq.done < v.seq.total, "the stage checks and the hold are left incomplete on the grade");
  assert.ok(!v.seq.steps.find(st => st.id === "hold").complete);
});

/* ---- Evacuation ---------------------------------------------------------- */
function evSetup(cond, hoses, gauge, method) {
  const s = EV.newState(cond);
  A("evacuation", s, "recover");
  A("evacuation", s, "chooseHoses", hoses || "dedicated");
  A("evacuation", s, "chooseGauge", gauge || "micron");
  A("evacuation", s, "chooseMethod", method || "deep");
  A("evacuation", s, "startPump");
  return s;
}

test("evacuation: the pump is not started against refrigerant, and the wrong hoses or gauge are called out", () => {
  const s = EV.newState("dry");
  A("evacuation", s, "chooseHoses", "dedicated"); A("evacuation", s, "chooseGauge", "micron"); A("evacuation", s, "chooseMethod", "deep");
  assert.strictEqual(A("evacuation", s, "startPump").kind, "warn");
  const t = EV.newState("dry");
  assert.strictEqual(A("evacuation", t, "chooseHoses", "service").kind, "warn");
  assert.strictEqual(A("evacuation", t, "chooseGauge", "manifold").kind, "warn");
});

test("evacuation: a dry tight system reaches 500 microns and holds under 600 for an hour", () => {
  const s = evSetup("dry");
  for (let i = 0; i < 6; i++) A("evacuation", s, "pump", 15);
  assert.ok(s.microns <= EV.DEEP_TARGET, `reached deep target (${s.microns})`);
  assert.strictEqual(A("evacuation", s, "declare", "pass").kind, "block", "no hold yet");
  A("evacuation", s, "isolatePump");
  for (let i = 0; i < 4; i++) A("evacuation", s, "hold", 15);
  assert.ok(s.microns < EV.HOLD_LIMIT, `held under 600 (${s.microns})`);
  assert.strictEqual(A("evacuation", s, "declare", "pass").kind, "ok");
  assert.ok(EV.verdict(s).seq.inOrder);

  /* Declaring early is warned, and shows on the grade as a hold not done. */
  const e = evSetup("dry");
  for (let i = 0; i < 6; i++) A("evacuation", e, "pump", 15);
  A("evacuation", e, "isolatePump");
  A("evacuation", e, "hold", 10);
  assert.strictEqual(A("evacuation", e, "declare", "pass").kind, "warn", "declared before 60 minutes");
  assert.ok(!EV.verdict(e).seq.steps.find(st => st.id === "hold").complete);
});

test("evacuation: moisture plateaus and a leak keeps climbing; service hoses are slow", () => {
  const wet = evSetup("wet");
  for (let i = 0; i < 8; i++) A("evacuation", wet, "pump", 15);
  assert.ok(wet.microns > 1000, `wet system stalls (${wet.microns})`);
  A("evacuation", wet, "isolatePump");
  for (let i = 0; i < 4; i++) A("evacuation", wet, "hold", 15);
  assert.ok(wet.microns < 2500, "levels off in the low thousands");
  assert.strictEqual(A("evacuation", wet, "declare", "leak").kind, "warn");
  assert.strictEqual(A("evacuation", wet, "declare", "moisture").kind, "ok");

  const leak = evSetup("leak");
  for (let i = 0; i < 8; i++) A("evacuation", leak, "pump", 15);
  A("evacuation", leak, "isolatePump");
  for (let i = 0; i < 4; i++) A("evacuation", leak, "hold", 15);
  assert.ok(leak.microns > 5000, `keeps climbing (${leak.microns})`);
  assert.strictEqual(A("evacuation", leak, "declare", "moisture").kind, "warn");
  assert.strictEqual(A("evacuation", leak, "declare", "leak").kind, "ok");

  const slow = evSetup("dry", "service");
  const fast = evSetup("dry", "dedicated");
  A("evacuation", slow, "pump", 30); A("evacuation", fast, "pump", 30);
  assert.ok(slow.microns > fast.microns, "service hoses are slower");
});

test("evacuation: triple method breaks with OFN twice and then clears a wet system", () => {
  const s = evSetup("wet", "dedicated", "micron", "triple");
  for (let i = 0; i < 6; i++) A("evacuation", s, "pump", 15);
  assert.strictEqual(A("evacuation", s, "breakOFN").kind, "ok");
  for (let i = 0; i < 6; i++) A("evacuation", s, "pump", 15);
  assert.strictEqual(A("evacuation", s, "breakOFN").kind, "ok");
  assert.strictEqual(s.broken, 2);
  for (let i = 0; i < 8; i++) A("evacuation", s, "pump", 15);
  assert.ok(s.microns <= EV.DEEP_TARGET, `third pull reaches deep target (${s.microns})`);
  A("evacuation", s, "isolatePump");
  for (let i = 0; i < 4; i++) A("evacuation", s, "hold", 15);
  assert.strictEqual(A("evacuation", s, "declare", "pass").kind, "ok");
});

/* ---- Recovery and charging ------------------------------------------------ */
test("recovery: bad cylinders are refused and the safe fill follows the Code's arithmetic", () => {
  const s = RC.newState("r404a");
  for (const c of ["expired", "disposable", "mixed", "unmarked"]) {
    assert.strictEqual(A("recoverCharge", s, "chooseCylinder", c).kind, "warn", c);
    assert.strictEqual(s.cylinder, null);
  }
  assert.strictEqual(A("recoverCharge", s, "chooseCylinder", "good").kind, "ok");
  const right = RC.safeFillKg(s.scenario, RC.CYLINDERS.good.wc);
  assert.ok(Math.abs(right - 47.6 * 0.85 * 0.8) < 0.11, `fill ratio × WC less 20 % (${right})`);
  assert.strictEqual(A("recoverCharge", s, "safeFill", right + 5).kind, "warn", "over");
  assert.strictEqual(A("recoverCharge", s, "safeFill", right).kind, "ok");
});

test("recovery and charging: the taught order completes; blends as vapour and unevacuated charging are called out", () => {
  const s = RC.newState("r404a");
  const run = (id, ...a) => A("recoverCharge", s, id, ...a);
  assert.strictEqual(run("recoverLiquid").kind, "block", "identify first");
  assert.strictEqual(s.trail.length, 0, "a blocked action leaves no trace in the trail");
  run("identify", "label");
  run("chooseCylinder", "good");
  run("safeFill", RC.safeFillKg(s.scenario, 47.6));
  assert.strictEqual(run("recoverLiquid").kind, "ok");
  assert.strictEqual(run("recoverVapour").kind, "ok");
  assert.ok(s.recoveredKg > 12);
  run("weighAndRecord");
  run("evacuate");
  run("checkHoses");
  assert.strictEqual(run("charge", "liquid", 12.5).kind, "ok");
  assert.strictEqual(run("record").kind, "ok");
  assert.ok(s.done);
  const v = RC.verdict(s);
  assert.strictEqual(v.seq.done, v.seq.total);
  assert.ok(v.seq.inOrder);

  /* The shortcuts, each on its own machine. */
  const t = RC.newState("r404a");
  const go = (id, ...a) => A("recoverCharge", t, id, ...a);
  go("identify", "label"); go("chooseCylinder", "good"); go("safeFill", RC.safeFillKg(t.scenario, 47.6));
  go("recoverLiquid"); go("recoverVapour"); go("weighAndRecord");
  assert.strictEqual(go("charge", "liquid", 12.5).kind, "warn", "not evacuated");
  go("evacuate");
  assert.strictEqual(go("charge", "liquid", 12.5).kind, "warn", "hoses not checked");
  go("checkHoses");
  assert.strictEqual(go("charge", "vapour", 12.5).kind, "warn", "blend as vapour");
  assert.strictEqual(go("charge", "liquid", 14).kind, "warn", "overfill");
  assert.ok(!RC.verdict(t).seq.inOrder, "charging attempts before evacuation show in the order of work");
});

test("recovery: an unlabelled system is treated as unknown; a flammable one needs the zone and earthing before charging", () => {
  const u = RC.newState("unknown");
  assert.strictEqual(A("recoverCharge", u, "identify", "label").kind, "warn");
  assert.strictEqual(u.identified, "unknown");
  const f = RC.newState("r32");
  const run = (id, ...a) => A("recoverCharge", f, id, ...a);
  run("identify", "label"); run("chooseCylinder", "good"); run("safeFill", RC.safeFillKg(f.scenario, 47.6));
  run("recoverLiquid"); run("recoverVapour"); run("weighAndRecord"); run("evacuate"); run("checkHoses");
  assert.strictEqual(run("charge", "liquid", 1.9).kind, "warn", "zone not assessed");
  run("zoneCheck"); run("earth");
  assert.strictEqual(run("charge", "liquid", 1.9).kind, "ok");
});

/* ---- Brazing ---------------------------------------------------------------- */
test("brazing: no torch on a charged line, and the classic mistakes each fail the test", () => {
  const s = BR.newState("drier");
  assert.strictEqual(A("brazing", s, "heat", "fitting").kind, "warn", "charged line");
  A("brazing", s, "recover"); A("brazing", s, "protect"); A("brazing", s, "prepare");
  assert.strictEqual(A("brazing", s, "purge", "high").kind, "warn");
  A("brazing", s, "purge", "gentle");
  assert.strictEqual(A("brazing", s, "alloy", "soft").kind, "warn");
  A("brazing", s, "alloy", "phos");
  assert.strictEqual(A("brazing", s, "heat", "rod").kind, "warn");
  A("brazing", s, "heat", "fitting");
  assert.strictEqual(A("brazing", s, "feed").kind, "ok");
  assert.strictEqual(A("brazing", s, "cool", false).kind, "warn", "purge stopped early");
  A("brazing", s, "clean");
  assert.strictEqual(A("brazing", s, "test").kind, "ok");
  assert.ok(s.done);

  const bad = BR.newState("drier");
  ["recover", "protect", "prepare"].forEach(id => A("brazing", bad, id));
  A("brazing", bad, "purge", "high"); A("brazing", bad, "alloy", "phos"); A("brazing", bad, "heat", "fitting"); A("brazing", bad, "feed"); A("brazing", bad, "cool", true);
  assert.strictEqual(A("brazing", bad, "test").kind, "warn", "porous joint from a high-flow purge leaks");
});

test("brazing: the alloy depends on the metals, and the clean sequence is graded in order", () => {
  const brass = BR.newState("valve");
  assert.strictEqual(A("brazing", brass, "alloy", "phos").kind, "warn", "phos-copper on brass");
  assert.strictEqual(A("brazing", brass, "alloy", "silverFlux").kind, "ok");

  const s = BR.newState("drier");
  ["recover", "protect", "prepare"].forEach(id => A("brazing", s, id));
  A("brazing", s, "purge", "gentle"); A("brazing", s, "alloy", "phos"); A("brazing", s, "heat", "fitting");
  A("brazing", s, "feed"); A("brazing", s, "cool", true); A("brazing", s, "clean"); A("brazing", s, "test");
  const v = BR.verdict(s);
  assert.strictEqual(v.seq.done, v.seq.total);
  assert.ok(v.seq.inOrder);
  assert.strictEqual(s.warns, 0);
});

test("sequenceReport marks a step done out of turn", () => {
  const s = BR.newState("drier");
  A("brazing", s, "prepare");          // before recover
  A("brazing", s, "recover");
  const rep = P.sequenceReport(BR.SEQUENCE, s);
  /* The step that came late is the one flagged: recovery should have been
     first, and preparation happened before it. */
  const rec = rep.steps.find(st => st.id === "recover");
  const prep = rep.steps.find(st => st.id === "prepare");
  assert.ok(rec.complete && rec.outOfOrder);
  assert.ok(prep.complete && !prep.outOfOrder);
  assert.ok(!rep.inOrder);
});
