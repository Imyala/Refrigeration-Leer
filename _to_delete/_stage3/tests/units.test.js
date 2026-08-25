const test = require("node:test");
const assert = require("node:assert");
const U = require("../js/units.js");

test("pressure conversions", () => {
  assert.strictEqual(U.barTo(1, "kPa"), 100);
  assert.strictEqual(U.toBar(100, "kPa"), 1);
  assert.ok(Math.abs(U.barTo(1, "psi") - 14.5038) < 1e-6);
  assert.ok(Math.abs(U.toBar(14.5038, "psi") - 1) < 1e-6);
  assert.strictEqual(U.barTo(2.5, "bar"), 2.5);
});

test("gauge pressure is absolute minus one atmosphere", () => {
  assert.ok(Math.abs(U.gaugeBar(U.ATM_BAR)) < 1e-9);
  assert.ok(Math.abs(U.gaugeBar(3.51325) - 2.5) < 1e-9);
  assert.ok(U.gaugeBar(0.5) < 0, "sub-atmospheric reads vacuum (negative gauge)");
});

test("temperature conversions", () => {
  assert.strictEqual(U.cTo(0, "F"), 32);
  assert.strictEqual(U.cTo(100, "F"), 212);
  assert.strictEqual(U.cTo(25, "C"), 25);
  assert.ok(Math.abs(U.dTo(10, "F") - 18) < 1e-9, "delta-T scales by 1.8, no offset");
  assert.strictEqual(U.dTo(10, "C"), 10);
});

test("formatting follows the active preferences", () => {
  const orig = { p: U.prefs.p, t: U.prefs.t };
  try {
    U.setPrefs("kPa", "C");
    assert.strictEqual(U.fmtPAbs(1), "100 kPa");
    assert.strictEqual(U.fmtPGauge(2.01325), "100 kPa g");
    assert.strictEqual(U.fmtT(21.6), "22°C");
    assert.strictEqual(U.fmtDT(6), "6 K");

    U.setPrefs("psi", "F");
    assert.strictEqual(U.fmtPGauge(2.01325), "15 psig");
    assert.strictEqual(U.fmtT(0), "32°F");
    assert.strictEqual(U.fmtDT(10), "18°F");

    U.setPrefs("bar", "C");
    assert.strictEqual(U.fmtPGauge(2.01325), "1.00 bar g");
  } finally {
    U.setPrefs(orig.p, orig.t);
  }
});

test("setPrefs ignores invalid values", () => {
  const orig = { p: U.prefs.p, t: U.prefs.t };
  try {
    U.setPrefs("kPa", "C");
    U.setPrefs("furlongs", "K");
    assert.strictEqual(U.prefs.p, "kPa");
    assert.strictEqual(U.prefs.t, "C");
  } finally {
    U.setPrefs(orig.p, orig.t);
  }
});
