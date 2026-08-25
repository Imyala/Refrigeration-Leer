const test = require("node:test");
const assert = require("node:assert");
const MD = require("../js/md.js");
const D = require("../js/data.js");
const fs = require("fs");
const path = require("path");

/* Load every course content file, so a new module file is covered the day it
   lands rather than the day someone remembers to update this list. */
const COURSE = fs
  .readdirSync(path.join(__dirname, "..", "js"))
  .filter((f) => /^course\d+\.js$/.test(f))
  .sort()
  .flatMap((f) => require("../js/" + f));

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
      assert.ok(typeof les.simple === "string" && les.simple.length > 80,
        `${mod.id}/${les.id}: plain-words explanation present`);
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
  const validKeys = new Set(["r", "fault", "speed", "load", "quiz", "tour", "view", "level"]);
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
          if (k === "level") {
            const n = parseInt(v, 10);
            assert.ok(n >= 1 && n <= 3, `${mod.id}/${les.id}: level=${v} out of range`);
          }
          if (k === "view") assert.strictEqual(v, "pt", `${mod.id}/${les.id}: view must be pt`);
        }
      }
    }
  }
});

test("published course sizes match the actual course", () => {
  // These numbers are quoted to institutions on about.html. They drifted once
  // already when a module was added, so pin them to the real course.
  const modules = COURSE.length;
  const lessons = COURSE.reduce((n, m) => n + m.lessons.length, 0);
  const about = fs.readFileSync(path.join(__dirname, "..", "about.html"), "utf8");

  const moduleClaims = [...about.matchAll(/(\d+)-module/g)].map((m) => Number(m[1]));
  assert.ok(moduleClaims.length, "about.html states a module count");
  for (const claimed of moduleClaims) {
    assert.strictEqual(claimed, modules, `about.html claims ${claimed} modules, course has ${modules}`);
  }

  const lessonClaims = [...about.matchAll(/(\d+) lessons\b/g)].map((m) => Number(m[1]));
  assert.ok(lessonClaims.length, "about.html states a lesson count");
  for (const claimed of lessonClaims) {
    assert.strictEqual(claimed, lessons, `about.html claims ${claimed} lessons, course has ${lessons}`);
  }
});

test("the course teaches and cites the reference documents it ships", () => {
  const R = require("../js/refdocs.js");
  for (const doc of R.docs) {
    const mod = COURSE.find((m) => m.id === doc.module);
    assert.ok(mod, `${doc.id}: taught by module ${doc.module}`);
    assert.ok(mod.lessons.length >= 3, `${doc.id}: module has real depth (${mod.lessons.length} lessons)`);
    // and every lesson in that module must carry at least one clause citation
    for (const les of mod.lessons) {
      assert.match(les.content, /!CITE\[/, `${mod.id}/${les.id}: cites at least one clause`);
    }
  }
});
