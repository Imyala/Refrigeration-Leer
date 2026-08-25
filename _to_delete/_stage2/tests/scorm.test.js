const test = require("node:test");
const assert = require("node:assert");
const S = require("../js/scorm.js");
const fs = require("fs");
const path = require("path");
/* The whole syllabus, so the suspend_data budget is tested against the real
   course rather than a slice of it. */
const COURSE = fs
  .readdirSync(path.join(__dirname, "..", "js"))
  .filter((f) => /^course\d+\.js$/.test(f))
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
  .flatMap((f) => require("../js/" + f));

test("progress encode/decode round-trips (legacy format, no course)", () => {
  const data = {
    "fundamentals/heat-and-temperature": { done: true, best: 3, total: 3 },
    "cycle/ph-diagram": { done: false, best: 1, total: 3 },
    "exam/final": { done: true, best: 18, total: 20 },
  };
  const decoded = S.decodeProgress(S.encodeProgress(data));
  assert.deepStrictEqual(decoded, data);
});

test("progress encode/decode round-trips against the real course", () => {
  const first = COURSE[0], les = first.lessons[0];
  const second = COURSE[1], les2 = second.lessons[0];
  const data = {
    [first.id + "/" + les.id]: { done: true, best: les.quiz.length, total: les.quiz.length },
    [second.id + "/" + les2.id]: { done: false, best: 1, total: les2.quiz.length },
    "exam/final": { done: true, best: 44, total: 54 },
    "exam/v1": { done: false, best: 20, total: 32 },
  };
  const decoded = S.decodeProgress(S.encodeProgress(data, COURSE), COURSE);
  assert.deepStrictEqual(decoded, data);
});

test("format 1 records still load after the upgrade", () => {
  const les = COURSE[0].lessons[0];
  const key = COURSE[0].id + "/" + les.id;
  const legacy = S.encodeProgress({ [key]: { done: true, best: 2, total: 3 } });
  assert.deepStrictEqual(S.decodeProgress(legacy, COURSE),
    { [key]: { done: true, best: 2, total: 3 } });
});

test("lesson tokens are unique across the whole syllabus", () => {
  const keys = S.lessonKeys(COURSE);
  const seen = new Map();
  for (const k of keys) {
    const t = S.token(k);
    assert.ok(!seen.has(t), `token collision: ${k} and ${seen.get(t)}`);
    seen.set(t, k);
  }
  assert.strictEqual(seen.size, keys.length);
});

test("a record survives a lesson being removed from the course", () => {
  /* Written while the course had two modules, read back after one was cut. */
  const before = COURSE.slice(0, 2);
  const after = COURSE.slice(0, 1);
  const keep = before[0].id + "/" + before[0].lessons[0].id;
  const gone = before[1].id + "/" + before[1].lessons[0].id;
  const encoded = S.encodeProgress({
    [keep]: { done: true, best: 3, total: before[0].lessons[0].quiz.length },
    [gone]: { done: true, best: 3, total: before[1].lessons[0].quiz.length },
  }, before);
  const decoded = S.decodeProgress(encoded, after);
  assert.ok(decoded[keep], "surviving lesson kept");
  assert.ok(!decoded[gone], "removed lesson dropped rather than corrupting the record");
});

test("keys the course does not know are preserved, not lost", () => {
  /* Exam results and anything a later version adds must round-trip. */
  const data = { "exam/final": { done: true, best: 44, total: 54 } };
  assert.deepStrictEqual(S.decodeProgress(S.encodeProgress(data, COURSE), COURSE), data);
});

test("decode tolerates garbage and empty input", () => {
  assert.deepStrictEqual(S.decodeProgress(""), {});
  assert.deepStrictEqual(S.decodeProgress(null), {});
  assert.deepStrictEqual(S.decodeProgress("random junk;;a:b"), {});
  const mixed = S.decodeProgress("good/lesson:2:3:1;broken;also:bad");
  assert.deepStrictEqual(mixed, { "good/lesson": { best: 2, total: 3, done: true } });
});

test("a fully complete course fits inside SCORM 1.2's 4096-char suspend_data", () => {
  const data = {};
  COURSE.forEach(mod => mod.lessons.forEach(les => {
    data[mod.id + "/" + les.id] = { done: true, best: les.quiz.length, total: les.quiz.length };
  }));
  /* Every exam a learner can sit: the whole-program final and one per stream. */
  data["exam/final"] = { done: true, best: 48, total: 54 };
  require("../js/streams.js").STREAMS.forEach(st => {
    data["exam/" + st.id] = { done: true, best: 20, total: 22 };
  });
  const encoded = S.encodeProgress(data, COURSE);
  assert.ok(encoded.length < 4096,
    `suspend_data length ${encoded.length} for ${Object.keys(data).length} entries`);
  /* And it must survive the round trip at that size. */
  const decoded = S.decodeProgress(encoded, COURSE);
  assert.strictEqual(Object.keys(decoded).length, Object.keys(data).length);
});

test("findAPI walks parent frames and falls back to opener", () => {
  const api = { LMSInitialize: () => "true" };
  const direct = { API: api };
  direct.parent = direct;
  assert.strictEqual(S.findAPI(direct), api);

  const child = {};
  const parent = { API: api };
  parent.parent = parent;
  child.parent = parent;
  assert.strictEqual(S.findAPI(child), api);

  const lone = {};
  lone.parent = lone;
  assert.strictEqual(S.findAPI(lone), null);

  const popup = { opener: { API: api } };
  popup.parent = popup;
  assert.strictEqual(S.findAPI(popup), api);
});
