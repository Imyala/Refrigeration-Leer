const test = require("node:test");
const assert = require("node:assert");
const S = require("../js/scorm.js");
const COURSE = [...require("../js/course1.js"), ...require("../js/course2.js")];

test("progress encode/decode round-trips", () => {
  const data = {
    "fundamentals/heat-and-temperature": { done: true, best: 3, total: 3 },
    "cycle/ph-diagram": { done: false, best: 1, total: 3 },
    "exam/final": { done: true, best: 18, total: 20 },
  };
  const decoded = S.decodeProgress(S.encodeProgress(data));
  assert.deepStrictEqual(decoded, data);
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
  data["exam/final"] = { done: true, best: 20, total: 20 };
  const encoded = S.encodeProgress(data);
  assert.ok(encoded.length < 4096, `suspend_data length ${encoded.length}`);
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
