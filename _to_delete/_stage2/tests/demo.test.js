const test = require("node:test");
const assert = require("node:assert");
const Demo = require("../js/demo.js");
const COURSE = [...require("../js/course1.js"), ...require("../js/course2.js")];

function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

test("sample cohort is valid progress-export data", () => {
  const cohort = Demo.buildSampleCohort(COURSE, mulberry32(5));
  assert.strictEqual(cohort.length, Demo.SAMPLE_NAMES.length);

  const validKeys = new Set(["exam/final"]);
  COURSE.forEach(mod => mod.lessons.forEach(les => validKeys.add(mod.id + "/" + les.id)));

  for (const s of cohort) {
    assert.strictEqual(s.format, "refrig-progress-v1");
    assert.ok(s.name && s.exported, "name and exported");
    for (const [key, p] of Object.entries(s.progress)) {
      assert.ok(validKeys.has(key), `valid key: ${key}`);
      assert.ok(Number.isInteger(p.best) && Number.isInteger(p.total), `numeric scores: ${key}`);
      assert.ok(p.best <= p.total, `best <= total: ${key}`);
    }
  }
});

test("cohort spreads from beginner to course-complete with a passed exam", () => {
  const cohort = Demo.buildSampleCohort(COURSE, mulberry32(9));
  const totalLessons = COURSE.reduce((n, m) => n + m.lessons.length, 0);
  const doneCounts = cohort.map(s =>
    Object.keys(s.progress).filter(k => k !== "exam/final" && s.progress[k].done).length);

  assert.ok(doneCounts[0] < doneCounts[doneCounts.length - 1], "spread of completion");
  assert.strictEqual(doneCounts[doneCounts.length - 1], totalLessons, "last student finished all lessons");

  const last = cohort[cohort.length - 1].progress["exam/final"];
  assert.ok(last && last.done && last.best >= 16, "last student passed the exam");
  assert.ok(cohort.some(s => !s.progress["exam/final"]), "some students haven't attempted the exam");
});
