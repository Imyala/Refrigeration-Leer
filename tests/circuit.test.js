/* The circuit engine is the refrigeration knowledge behind the builder: it is
   what decides whether a learner's system would run, and what it tells them
   when it would not. A wrong rule here teaches a wrong thing to every student
   who uses the page, so the rules are pinned individually. */
const test = require("node:test");
const assert = require("node:assert");
const C = require("../js/circuit.js");

const { ERR, WARN, TIP } = C.SEVERITY;
const sev = (r, s) => r.issues.filter(i => i.severity === s);
const mentions = (r, id) => r.issues.some(i => i.component === id);

/* A pump-down cool room, piped the way it is piped in the field. The
   low-pressure switch senses the suction line, so it sits in the suction run —
   not next to the solenoid it works with. */
const GOOD = ["compressor", "condenser", "receiver", "filterdrier", "sightglass",
  "solenoid", "txv", "evaporator", "accumulator", "lpswitch"];

test("a correctly piped commercial system runs with nothing to correct", () => {
  const r = C.analyse(GOOD);
  assert.ok(r.ok, "runs");
  assert.strictEqual(sev(r, ERR).length, 0);
  assert.strictEqual(sev(r, WARN).length, 0, JSON.stringify(sev(r, WARN)));
});

test("the four anchors are each required, and each absence is explained", () => {
  for (const drop of ["compressor", "condenser", "evaporator", "txv"]) {
    const seq = GOOD.filter(id => id !== drop);
    const r = C.analyse(seq);
    assert.ok(!r.ok, `${drop} missing must fail`);
    const e = sev(r, ERR);
    assert.ok(e.length >= 1, `${drop}: an error is raised`);
    assert.ok(e.every(i => i.fix && i.fix.length > 30), `${drop}: the error explains itself`);
  }
});

test("anchors out of flow order fail, whatever else is right", () => {
  const r = C.analyse(["compressor", "txv", "condenser", "evaporator"]);
  assert.ok(!r.ok);
  assert.match(sev(r, ERR)[0].message, /flow order/i);
  assert.strictEqual(r.zones, null, "zones cannot be assigned");
});

test("an accessory in the wrong run is an error, and the fix says where it goes", () => {
  const cases = [
    ["accumulator", ["compressor", "condenser", "accumulator", "txv", "evaporator"], /suction line/i],
    ["oilseparator", ["compressor", "condenser", "oilseparator", "txv", "evaporator"], /discharge line/i],
    ["receiver", ["compressor", "condenser", "txv", "evaporator", "receiver"], /liquid line/i],
    ["distributor", ["compressor", "distributor", "condenser", "txv", "evaporator"], /distribution|metering/i],
  ];
  for (const [id, seq, where] of cases) {
    const r = C.analyse(seq);
    assert.ok(!r.ok, `${id} in the wrong run must fail`);
    const issue = sev(r, ERR).find(i => i.component === id);
    assert.ok(issue, `${id}: reported`);
    assert.match(issue.message + " " + issue.fix, where, `${id}: says where it belongs`);
  }
});

test("the loop closes: a suction component is not 'downstream of the compressor'", () => {
  /* The compressor is drawn first but the suction run returns to it, so an
     accumulator at the end of the loop is correctly placed, not misplaced. */
  const r = C.analyse(["compressor", "condenser", "txv", "evaporator", "accumulator"]);
  assert.ok(r.ok);
  assert.strictEqual(r.issues.filter(i => i.severity !== TIP).length, 0, JSON.stringify(r.issues));
});

test("sight glass before the drier is a warning, not a failure, and teaches why", () => {
  const r = C.analyse(["compressor", "condenser", "receiver", "sightglass", "filterdrier", "txv", "evaporator"]);
  assert.ok(r.ok, "it would still run");
  const w = sev(r, WARN);
  assert.strictEqual(w.length, 1, "said once, not once from each end");
  assert.match(w[0].fix, /after the drier/i);
});

test("a filter drier in the suction line is a burnout tool, not a misplacement", () => {
  const r = C.analyse(["compressor", "condenser", "txv", "evaporator", "filterdrier"]);
  assert.ok(r.ok, "a suction filter drier runs");
  const w = sev(r, WARN);
  assert.ok(w.some(i => /burnout/i.test(i.fix)), "explained as burnout clean-up");
  assert.strictEqual(sev(r, ERR).length, 0, "and not called an error");
});

test("two metering devices in series is an error with the reason", () => {
  const r = C.analyse(["compressor", "condenser", "txv", "captube", "evaporator"]);
  assert.ok(!r.ok);
  assert.ok(sev(r, ERR).some(i => /metering devices/i.test(i.message)));
});

test("duplicated anchors are rejected", () => {
  for (const id of ["compressor", "condenser", "evaporator"]) {
    const seq = ["compressor", "condenser", "txv", "evaporator"].concat([id]);
    assert.ok(!C.analyse(seq).ok, `two ${id}s must fail`);
  }
});

test("every component the palette offers is described well enough to teach from", () => {
  for (const [id, c] of Object.entries(C.COMPONENTS)) {
    assert.ok(c.label, `${id}: label`);
    assert.ok(c.why && c.why.length > 40, `${id}: says what it does`);
    assert.ok(c.group, `${id}: grouped for the palette`);
    if (!c.anchor && !c.attachTo) {
      assert.ok(Array.isArray(c.zone) && c.zone.length, `${id}: belongs to a run`);
      c.zone.forEach(z => assert.ok(C.ZONES[z], `${id}: zone ${z} exists`));
      if (c.zone.length === 1) {
        assert.ok(c.wrongZone && c.wrongZone.length > 30, `${id}: explains the wrong-run case`);
      }
    }
    (c.after || []).concat(c.before || []).forEach(other =>
      assert.ok(C.COMPONENTS[other], `${id}: ordering rule names a real component (${other})`));
  }
});

test("every scenario is buildable, and its own expected answer passes it", () => {
  for (const sc of C.SCENARIOS) {
    assert.ok(sc.title && sc.brief && sc.expected.length, `${sc.id}: complete`);
    sc.expected.forEach(id => assert.ok(C.COMPONENTS[id], `${sc.id}: ${id} exists`));
    sc.required.forEach(id => assert.ok(sc.expected.includes(id), `${sc.id}: ${id} is in the model answer`));
    const g = C.grade(sc.expected, sc.id);
    assert.ok(g.ok, `${sc.id}: the model answer passes — ${JSON.stringify(g.issues.filter(i => i.severity === ERR))}`);
    assert.strictEqual(g.missing.length, 0, `${sc.id}: nothing missing`);
  }
});

test("grading against a brief reports what the brief asked for and did not get", () => {
  const g = C.grade(["compressor", "condenser", "txv", "evaporator"], "commercial");
  assert.ok(!g.ok);
  assert.ok(g.missing.includes("receiver") && g.missing.includes("accumulator"));
  assert.ok(g.issues.some(i => /brief asks for/i.test(i.message)));
});

test("every issue is actionable: a message and a fix a learner can act on", () => {
  const messy = ["compressor", "sightglass", "condenser", "accumulator", "txv", "evaporator", "oilseparator"];
  const r = C.analyse(messy);
  assert.ok(r.issues.length > 0);
  for (const i of r.issues) {
    assert.ok([ERR, WARN, TIP].includes(i.severity), "known severity");
    assert.ok(i.message && i.message.length > 10, "has a message");
    assert.ok(i.fix === null || i.fix.length > 20, "a fix that is worth reading");
    assert.ok(!/undefined|\[object/.test(i.message + i.fix), "no template leakage");
  }
});

test("the verdict always matches whether the system would run", () => {
  assert.match(C.analyse(GOOD).verdict, /correct circuit/i);
  assert.match(C.analyse(["compressor", "condenser", "evaporator"]).verdict, /would not run/i);
  assert.match(
    C.analyse(["compressor", "condenser", "receiver", "sightglass", "filterdrier", "txv", "evaporator"]).verdict,
    /would run/i);
});
