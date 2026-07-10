const test = require("node:test");
const assert = require("node:assert");
const MD = require("../js/md.js");
const D = require("../js/data.js");
const COURSE = [...require("../js/course1.js"), ...require("../js/course2.js")];

test("course has a substantial number of modules and lessons", () => {
  assert.ok(COURSE.length >= 8, `modules: ${COURSE.length}`);
  const lessons = COURSE.reduce((n, m) => n + m.lessons.length, 0);
  assert.ok(lessons >= 20, `lessons: ${lessons}`);
});

test("module and lesson ids are unique and well-formed", () => {
  const modIds = new Set();
  for (const mod of COURSE) {
    assert.ok(mod.id && /^[a-z0-9-]+$/.test(mod.id), `module id: ${mod.id}`);
    assert.ok(!modIds.has(mod.id), `duplicate module id: ${mod.id}`);
    modIds.add(mod.id);
    assert.ok(mod.title && mod.blurb, `${mod.id}: title and blurb`);

    const lesIds = new Set();
    for (const les of mod.lessons) {
      assert.ok(les.id && /^[a-z0-9-]+$/.test(les.id), `lesson id: ${les.id}`);
      assert.ok(!lesIds.has(les.id), `${mod.id}: duplicate lesson id ${les.id}`);
      lesIds.add(les.id);
      assert.ok(les.title, `${mod.id}/${les.id}: title`);
      assert.ok(les.minutes > 0, `${mod.id}/${les.id}: minutes`);
      assert.ok(les.content && les.content.length > 200, `${mod.id}/${les.id}: substantive content`);
      assert.ok(Array.isArray(les.refs) && les.refs.length >= 1, `${mod.id}/${les.id}: references present`);
      for (const r of les.refs) {
        assert.ok(typeof r === "string" && r.length > 10, `${mod.id}/${les.id}: substantive reference`);
      }
    }
  }
});

test("every lesson's content renders without throwing", () => {
  for (const mod of COURSE) {
    for (const les of mod.lessons) {
      const html = MD.render(les.content);
      assert.ok(html.length > 100, `${mod.id}/${les.id}: rendered output`);
      assert.ok(!html.includes("undefined"), `${mod.id}/${les.id}: no undefined in output`);
    }
  }
});

test("every quiz question is well-formed with a valid answer index", () => {
  for (const mod of COURSE) {
    for (const les of mod.lessons) {
      assert.ok(Array.isArray(les.quiz) && les.quiz.length >= 2, `${mod.id}/${les.id}: at least 2 questions`);
      for (const [i, q] of les.quiz.entries()) {
        assert.ok(q.q, `${mod.id}/${les.id} q${i}: question text`);
        assert.ok(q.options.length >= 2, `${mod.id}/${les.id} q${i}: options`);
        assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length,
          `${mod.id}/${les.id} q${i}: answer index in range`);
        assert.ok(q.explain, `${mod.id}/${les.id} q${i}: explanation`);
      }
    }
  }
});

test("every !SIM deep link uses valid parameters", () => {
  const validKeys = new Set(["r", "fault", "speed", "load", "quiz", "tour", "view"]);
  for (const mod of COURSE) {
    for (const les of mod.lessons) {
      const links = [...les.content.matchAll(/!SIM\[[^\]]*\]\(([^)]*)\)/g)];
      for (const [, params] of links) {
        const q = new URLSearchParams(params);
        for (const [k, v] of q.entries()) {
          assert.ok(validKeys.has(k), `${mod.id}/${les.id}: unknown sim param ${k}`);
          if (k === "r") assert.ok(D.REFRIGERANTS[v], `${mod.id}/${les.id}: unknown refrigerant ${v}`);
          if (k === "fault") assert.ok(D.FAULTS[v], `${mod.id}/${les.id}: unknown fault ${v}`);
          if (k === "speed" || k === "load") {
            const n = parseInt(v, 10);
            assert.ok(n >= 50 && n <= 150, `${mod.id}/${les.id}: ${k}=${v} out of range`);
          }
          if (k === "quiz" || k === "tour") assert.strictEqual(v, "1", `${mod.id}/${les.id}: ${k} must be 1`);
          if (k === "view") assert.strictEqual(v, "pt", `${mod.id}/${les.id}: view must be pt`);
        }
      }
    }
  }
});
