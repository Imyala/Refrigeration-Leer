/* The control-circuit engine decides what a meter reads at every test point
   for every fault. If a signature here is wrong the page teaches a wrong
   diagnosis, so the classic pictures are pinned explicitly. */
const test = require("node:test");
const assert = require("node:assert");
const K = require("../js/control.js");

const FAULTS = Object.keys(K.FAULTS);

function live(fault) { return K.newState(fault); }
function dead(fault) {
  const s = K.newState(fault);
  K.isolate(s); K.proveTester(s); K.testForDead(s); K.proveTester(s);
  return s;
}
const volts = (s, a, b) => K.measure(s, "volts", a, b).value;
const ohm = (s, a, b) => K.measure(s, "ohms", a, b).value;

test("every fault is described, and every node and chain element is labelled", () => {
  for (const [k, f] of Object.entries(K.FAULTS)) {
    assert.ok(f.label, `${k}: label`);
    assert.ok(Array.isArray(f.clues) && f.clues.length >= 2, `${k}: clues`);
    if (k !== "none") assert.ok(f.diag && f.diag.length > 60, `${k}: diagnosis text`);
  }
  for (const [k, n] of Object.entries(K.NODES)) assert.ok(n.label && n.short, `${k}: labelled`);
  for (const c of K.CONTROL_CHAIN) assert.ok(K.NODES[c.a] && K.NODES[c.b], `${c.id}: between real nodes`);
});

test("a healthy unit reads supply at every control node and runs", () => {
  const s = live("none");
  for (const n of ["n0", "n1", "n2", "n3", "n4", "n5", "T1", "C"]) assert.strictEqual(volts(s, n, "N"), 230, `${n}–N`);
  const m = K.machine(s);
  assert.strictEqual(m.compressor, "running");
  assert.strictEqual(m.fan, "turning");
  assert.ok(m.amps > 5 && m.amps < 12);
});

test("the one open contact in a series chain has full supply voltage across it, and nothing else does", () => {
  const cases = { fuseBlown: ["n0", "n1"], thermostatOpen: ["n1", "n2"], hpTrippedFanOpen: ["n2", "n3"], lpSwitchFailed: ["n3", "n4"], overloadOpen: ["n4", "n5"] };
  for (const [fault, [a, b]] of Object.entries(cases)) {
    const s = live(fault);
    assert.strictEqual(volts(s, a, b), 230, `${fault}: 230 V across the open contact`);
    for (const c of K.CONTROL_CHAIN) {
      if (c.a === a && c.b === b) continue;
      if (c.id === "K1") continue;
      assert.strictEqual(volts(s, c.a, c.b), 0, `${fault}: 0 V across ${c.id}`);
    }
    assert.strictEqual(volts(s, "T1", "N"), 0, `${fault}: contactor out, T1 dead`);
  }
});

test("an open coil floats the whole chain at supply voltage; isolated it reads open circuit", () => {
  const s = live("coilOpen");
  for (const n of ["n0", "n1", "n2", "n3", "n4", "n5"]) assert.strictEqual(volts(s, n, "N"), 230, `${n}–N`);
  assert.strictEqual(volts(s, "n5", "N"), 230, "230 V across the coil, and it does not pull in");
  assert.strictEqual(K.machine(s).contactor, "not pulled in");
  const d = dead("coilOpen");
  assert.strictEqual(ohm(d, "n5", "N"), Infinity);
  assert.ok(ohm(dead("none"), "n5", "N") > 100, "a good coil reads a few hundred ohms");
});

test("welded contacts run the compressor with the stat open; burnt contacts pull in with T1 dead", () => {
  const w = live("contactsWelded");
  assert.strictEqual(volts(w, "n1", "n2"), 230, "thermostat satisfied — open");
  assert.strictEqual(volts(w, "T1", "N"), 230, "yet T1 is live");
  assert.strictEqual(K.machine(w).compressor, "running");
  assert.strictEqual(ohm(dead("contactsWelded"), "n0", "T1"), 0.1, "main contacts read closed de-energised");
  assert.strictEqual(ohm(dead("none"), "n0", "T1"), Infinity, "healthy contacts read open de-energised");

  const b = live("contactsBurnt");
  assert.strictEqual(K.picture(b).coilEnergised, true);
  assert.strictEqual(volts(b, "T1", "N"), 0);
  assert.match(K.machine(b).contactor, /pulled in/);
});

test("start-gear faults hum at locked-rotor current and the capacitance test separates them", () => {
  for (const f of ["runCapFailed", "startRelayFailed"]) {
    const s = live(f);
    assert.match(K.machine(s).compressor, /humming/);
    assert.ok(K.measure(s, "amps", "compressor").value >= 30, `${f}: locked-rotor current`);
  }
  assert.ok(K.measure(dead("runCapFailed"), "cap").value < 5, "failed capacitor reads near zero");
  assert.ok(K.measure(dead("startRelayFailed"), "cap").value > 30, "relay fault: capacitor fine");
  assert.strictEqual(K.judge("runCapFailed", "startRelayFailed").score, 0.5, "same family, half credit");
});

test("an open winding is silent with no current and reads open circuit C–R", () => {
  const s = live("windingOpen");
  assert.strictEqual(K.machine(s).compressor, "silent");
  assert.strictEqual(K.measure(s, "amps", "compressor").value, 0);
  assert.strictEqual(volts(s, "C", "N"), 230, "supply is reaching the compressor");
  const d = dead("windingOpen");
  assert.strictEqual(ohm(d, "C", "R"), Infinity);
  assert.ok(ohm(d, "C", "S") > 0 && ohm(d, "C", "S") < 10, "start winding still reads");
});

test("an earth fault trips the supply on pull-in and fails the insulation test", () => {
  const s = live("earthFault");
  K.isolate(s);
  const r = K.restore(s);
  assert.strictEqual(r.kind, "warn");
  assert.strictEqual(s.supplyTripped, true);
  assert.strictEqual(K.resetSupply(s).kind, "warn", "resetting trips it again");
  assert.ok(K.measure(dead("earthFault"), "ir").value < 1, "IR below 1 MΩ");
  assert.ok(K.measure(dead("none"), "ir").value > 100);
});

test("the two LP-open faults read identically on the meter and are separated by the gauge", () => {
  const a = live("lpOpenLowCharge"), b = live("lpSwitchFailed");
  assert.strictEqual(volts(a, "n3", "n4"), 230);
  assert.strictEqual(volts(b, "n3", "n4"), 230);
  assert.ok(K.measure(a, "gauge", "low").value < 300, "genuinely low suction pressure");
  assert.ok(K.measure(b, "gauge", "low").value > 600, "normal suction pressure");
  assert.strictEqual(K.judge("lpSwitchFailed", "lpOpenLowCharge").score, 0.5);
});

test("ohms and insulation tests on a live circuit are refused and counted against the method", () => {
  const s = live("none");
  const r = K.measure(s, "ohms", "n0", "n1");
  assert.strictEqual(r.kind, "block");
  assert.strictEqual(s.liveOhms, 1);
  assert.strictEqual(s.measurements.length, 0, "no reading was recorded");
  K.measure(s, "ir");
  assert.strictEqual(s.liveOhms, 2);
  const m = K.method(s);
  assert.ok(m.penalty >= K.LIVE_OHMS_PENALTY);
  assert.ok(m.notes.some(n => n.state === "bad"));
});

test("prove–test–prove is required before dead tests count as safe", () => {
  const s = live("fuseBlown");
  K.isolate(s);
  K.measure(s, "ohms", "n0", "n1");          // isolated but never proved dead
  assert.strictEqual(s.unprovedOhms, 1);
  assert.ok(K.method(s).penalty >= K.NOT_PROVED_PENALTY);

  const t = live("fuseBlown");
  K.isolate(t);
  assert.strictEqual(K.testForDead(t).kind, "warn", "tested dead without proving the tester first");
  const u = dead("fuseBlown");
  assert.ok(K.provenDead(u));
  K.measure(u, "ohms", "n0", "n1");
  assert.strictEqual(u.unprovedOhms, 0);
  assert.strictEqual(K.method(u).penalty, 0);
  assert.ok(K.method(u).notes.some(n => n.state === "good" && /4836/.test(n.text)));
});

test("test for dead is refused while the isolator is closed", () => {
  const s = live("none");
  assert.strictEqual(K.testForDead(s).kind, "block");
  assert.strictEqual(s.testedDead, false);
});

test("every fault × every instrument produces a finite, recorded reading when it should", () => {
  for (const f of FAULTS) {
    const s = live(f);
    for (const c of K.CONTROL_CHAIN) {
      const v = volts(s, c.a, c.b);
      assert.ok(v === 0 || v === 230, `${f}: ${c.id} reads 0 or 230 (got ${v})`);
    }
    assert.ok(Number.isFinite(K.measure(s, "amps", "compressor").value), `${f}: amps finite`);
    const d = dead(f);
    for (const [a, b] of [["n0", "n1"], ["n5", "N"], ["C", "R"], ["C", "S"], ["FAN", "N"], ["n0", "T1"]]) {
      const o = ohm(d, a, b);
      assert.ok(o === Infinity || Number.isFinite(o), `${f}: ${a}-${b} ohms`);
    }
  }
});

test("judging: exact fault scores, healthy is a valid answer, wrong is explained", () => {
  assert.strictEqual(K.judge("fuseBlown", "fuseBlown").score, 1);
  assert.strictEqual(K.judge("none", "none").score, 1);
  const j = K.judge("fuseBlown", "coilOpen");
  assert.strictEqual(j.score, 0);
  assert.match(j.text, /Contactor coil open/);
});
