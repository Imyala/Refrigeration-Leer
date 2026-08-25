#!/usr/bin/env node
/* =========================================================================
   Write js/course-index.js — a small manifest of the syllabus (per stream:
   module count, lesson count, module titles).

   The front door wants to advertise the size and shape of every stream
   without loading forty content files to count them, so the counts are
   baked into a manifest instead. tests/course-index.test.js fails if the
   manifest and the real course disagree, so it can never quietly drift.

   Usage: node tools/build-course-index.js   (or: npm run build:index)
   ========================================================================= */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const JS = path.join(ROOT, "js");

function loadCourse() {
  return fs.readdirSync(JS)
    .filter(f => /^course\d+\.js$/.test(f))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .flatMap(f => require(path.join(JS, f)));
}

function build() {
  const COURSE = loadCourse();
  const S = require(path.join(JS, "streams.js"));
  const index = {};
  for (const st of S.STREAMS) {
    const mods = S.modulesIn(COURSE, st.id);
    index[st.id] = {
      modules: mods.length,
      lessons: mods.reduce((n, m) => n + m.lessons.length, 0),
      titles: mods.map(m => m.title),
    };
  }
  index.total = {
    modules: COURSE.length,
    lessons: COURSE.reduce((n, m) => n + m.lessons.length, 0),
    questions: COURSE.reduce((n, m) =>
      n + m.lessons.reduce((k, l) => k + l.quiz.length, 0), 0),
  };
  return index;
}

function serialise(index) {
  return `/* =========================================================================
   Syllabus manifest — GENERATED. Do not edit by hand.
   Run: npm run build:index    (tools/build-course-index.js)

   Lets the front door show how big each stream is without loading every
   content file. tests/course-index.test.js keeps it honest.
   ========================================================================= */
(function (root) {
  "use strict";
  const COURSE_INDEX = ${JSON.stringify(index, null, 2).replace(/\n/g, "\n  ")};
  root.COURSE_INDEX = COURSE_INDEX;
  if (typeof module !== "undefined" && module.exports) module.exports = COURSE_INDEX;
})(globalThis);
`;
}

if (require.main === module) {
  const out = path.join(JS, "course-index.js");
  fs.writeFileSync(out, serialise(build()), "utf8");
  const i = build();
  console.log(`wrote js/course-index.js — ${i.total.modules} modules, ${i.total.lessons} lessons, ${i.total.questions} questions`);
}

module.exports = { build, serialise };
