/* The evidence record is what the instructor dashboard reports by unit of
   competency, so its arithmetic and its merge rules are pinned. */
const test = require("node:test");
const assert = require("node:assert");
const Ev = require("../js/evidence.js");
const C = require("../js/competency.js");
const Cap = require("../js/capstone.js");
const fs = require("fs");
const path = require("path");

const COURSE = fs.readdirSync(path.join(__dirname, "..", "js"))
  .filter(f => /^course\d+\.js$/.test(f)).sort().flatMap(f => require("../js/" + f));

test("an entry is normalised: score clamped, timestamp and id set", () => {
  const e = Ev.make({ tool: "diagnose", score: 1.7, detail: { fault: "lowCharge" } }, "2026-09-16T00:00:00Z");
  assert.strictEqual(e.score, 1);
  assert.strictEqual(e.at, "2026-09-16T00:00:00Z");
  assert.match(e.id, /^[0-9a-f]{8}$/);
  assert.strictEqual(Ev.make({ tool: "x", score: -3 }).score, 0);
});

test("units come from the entry or from the tool's competency map", () => {
  assert.deepStrictEqual(Ev.unitsFor({ tool: "diagnose", units: ["UEERA0036"] }, C), ["UEERA0036"]);
  assert.deepStrictEqual(Ev.unitsFor({ tool: "control" }, C), C.TOOLS.control.units);
  assert.deepStrictEqual(Ev.unitsFor({ tool: "nothing" }, C), []);
});

test("summaries count attempts and average scores per tool and per unit", () => {
  const list = [
    Ev.make({ tool: "diagnose", score: 1 }, "2026-01-01T00:00:00Z"),
    Ev.make({ tool: "diagnose", score: 0.5 }, "2026-01-02T00:00:00Z"),
    Ev.make({ tool: "control", score: 0.75 }, "2026-01-03T00:00:00Z"),
  ];
  const s = Ev.summarise(list, C);
  assert.strictEqual(s.total, 3);
  assert.strictEqual(s.byTool.diagnose.attempts, 2);
  assert.strictEqual(s.byTool.diagnose.mean, 0.75);
  assert.strictEqual(s.byTool.diagnose.best, 1);
  assert.strictEqual(s.byUnit.UEERA0031.attempts, 3, "diagnose and control both count towards UEERA0031");
  assert.ok(s.byUnit.UEERA0036.attempts === 2);
});

test("merging keeps one copy per id, in time order, capped", () => {
  const a = [Ev.make({ tool: "quiz", score: 1, id: "aaaa0001" }, "2026-01-02T00:00:00Z")];
  const b = [Ev.make({ tool: "quiz", score: 0, id: "aaaa0001" }, "2026-01-02T00:00:00Z"), Ev.make({ tool: "quiz", score: 1, id: "aaaa0002" }, "2026-01-01T00:00:00Z")];
  const m = Ev.merge(a, b);
  assert.strictEqual(m.length, 2);
  assert.strictEqual(m[0].id, "aaaa0002", "sorted by time");
  assert.strictEqual(m[1].score, 1, "the first copy wins");
});

test("unit mastery combines lesson progress with tool evidence", () => {
  const mod = COURSE.find(m => m.units && m.units.includes("UEERA0036"));
  const progress = {};
  mod.lessons.forEach(l => { progress[mod.id + "/" + l.id] = { done: true, best: 3, total: 3 }; });
  const ev = [Ev.make({ tool: "diagnose", score: 0.5 }, "2026-01-01T00:00:00Z")];
  const m = C.mastery(COURSE, progress, ev);
  const u = m.find(x => x.code === "UEERA0036");
  assert.ok(u.done === mod.lessons.length && u.lessons > u.done, "one module's lessons done out of several");
  assert.ok(u.knowledge > 0 && u.knowledge < 1);
  assert.strictEqual(u.attempts, 1);
  assert.strictEqual(u.mean, 0.5);
  const none = m.find(x => x.code === "HLTAID009");
  assert.strictEqual(none.attempts, 0);
  assert.ok(m.every(x => x.knowledge >= 0 && x.knowledge <= 1));
});

test("the capstone job has seven stages that open real tools, and its status adds up", () => {
  assert.strictEqual(Cap.STAGES.length, 7);
  const pages = new Set(fs.readdirSync(path.join(__dirname, "..")).filter(f => f.endsWith(".html")));
  for (const st of Cap.STAGES) {
    assert.ok(pages.has(st.href.split("?")[0]), `${st.id}: opens a real page (${st.href})`);
    assert.match(st.href, /capstone=/, `${st.id}: carries the stage`);
    assert.ok(st.brief.length > 60 && st.done && st.units.every(u => C.isUnit(u)), `${st.id}: brief, done text, real units`);
  }
  const rec = { startedAt: "2026-01-01T00:00:00Z", stages: { build: { score: 1, at: "x" }, evacuation: { score: 0.5, at: "y" } } };
  const s = Cap.statusOf(rec);
  assert.strictEqual(s.done, 2);
  assert.strictEqual(s.next.id, "pressureTest", "the next stage is the first incomplete one");
  assert.ok(Math.abs(s.score - 1.5 / 7) < 1e-9);
  assert.strictEqual(Cap.stageFromLocation("?p=evacuation&capstone=evacuation").id, "evacuation");
  assert.strictEqual(Cap.stageFromLocation("?x=1"), null);
  assert.match(Cap.introHtml(Cap.STAGES[0]), /stage 1 of 7/);
});
