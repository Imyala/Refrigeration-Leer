const test = require("node:test");
const assert = require("node:assert");
const E = require("../js/exam.js");
const COURSE = [...require("../js/course1.js"), ...require("../js/course2.js")];

// deterministic PRNG so the sampling test is reproducible
function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

test("exam draws exactly two valid questions from every module", () => {
  const qs = E.pickExamQuestions(COURSE, 2, mulberry32(42));
  assert.strictEqual(qs.length, COURSE.length * 2);
  for (const mod of COURSE) {
    const fromMod = qs.filter(q => q.module === mod.title);
    assert.strictEqual(fromMod.length, 2, `${mod.id}: 2 questions`);
  }
  for (const q of qs) {
    assert.ok(q.q && q.options.length >= 2 && q.explain, "question well-formed");
    assert.ok(q.answer >= 0 && q.answer < q.options.length, "answer index valid");
  }
});

test("different seeds draw different papers", () => {
  const a = E.pickExamQuestions(COURSE, 2, mulberry32(1)).map(q => q.q).join("|");
  const b = E.pickExamQuestions(COURSE, 2, mulberry32(99)).map(q => q.q).join("|");
  assert.notStrictEqual(a, b);
});

test("a paper never repeats a question", () => {
  const qs = E.pickExamQuestions(COURSE, 2, mulberry32(7));
  const texts = qs.map(q => q.q);
  assert.strictEqual(new Set(texts).size, texts.length);
});

test("certificate codes are deterministic and input-sensitive", () => {
  const a = E.certificateCode("Jane Doe|18|20|10 July 2026");
  const b = E.certificateCode("Jane Doe|18|20|10 July 2026");
  const c = E.certificateCode("Jane Doe|17|20|10 July 2026");
  assert.strictEqual(a, b);
  assert.notStrictEqual(a, c);
  assert.match(a, /^[0-9A-F]{16}$/);
});
