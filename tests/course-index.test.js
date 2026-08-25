/* The front door advertises each stream's size from js/course-index.js rather
   than loading every content file to count them. That manifest is generated,
   so this test is what stops it drifting away from the real syllabus. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const builder = require("../tools/build-course-index.js");

test("js/course-index.js is up to date with the course", () => {
  const onDisk = fs.readFileSync(path.join(ROOT, "js", "course-index.js"), "utf8");
  const fresh = builder.serialise(builder.build());
  assert.strictEqual(onDisk, fresh,
    "js/course-index.js is stale — run `npm run build:index` and commit the result");
});

test("the manifest agrees with the loaded course", () => {
  const INDEX = require("../js/course-index.js");
  const S = require("../js/streams.js");
  const COURSE = fs.readdirSync(path.join(ROOT, "js"))
    .filter(f => /^course\d+\.js$/.test(f))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .flatMap(f => require(path.join(ROOT, "js", f)));

  assert.strictEqual(INDEX.total.modules, COURSE.length);
  let lessons = 0;
  for (const st of S.STREAMS) {
    const mods = S.modulesIn(COURSE, st.id);
    assert.strictEqual(INDEX[st.id].modules, mods.length, `${st.id}: module count`);
    assert.deepStrictEqual(INDEX[st.id].titles, mods.map(m => m.title), `${st.id}: titles`);
    lessons += INDEX[st.id].lessons;
  }
  assert.strictEqual(lessons, INDEX.total.lessons, "stream lessons sum to the total");
});

test("every module belongs to a declared stream", () => {
  const S = require("../js/streams.js");
  const known = new Set(S.STREAMS.map(s => s.id));
  const COURSE = fs.readdirSync(path.join(ROOT, "js"))
    .filter(f => /^course\d+\.js$/.test(f))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .flatMap(f => require(path.join(ROOT, "js", f)));
  for (const mod of COURSE) {
    assert.ok(known.has(S.streamIdOf(mod)), `${mod.id}: stream "${S.streamIdOf(mod)}" is declared`);
  }
});

test("learn.html loads every course content file, in syllabus order", () => {
  const html = fs.readFileSync(path.join(ROOT, "learn.html"), "utf8");
  const loaded = [...html.matchAll(/<script src="js\/(course\d+\.js)"><\/script>/g)].map(m => m[1]);
  const onDisk = fs.readdirSync(path.join(ROOT, "js")).filter(f => /^course\d+\.js$/.test(f));

  for (const f of onDisk) {
    assert.ok(loaded.includes(f), `learn.html loads ${f} — add a <script> tag for it`);
  }
  for (const f of loaded) {
    assert.ok(onDisk.includes(f), `learn.html references a file that exists: ${f}`);
  }

  /* Script order decides module order in the course, so it must match the order
     the manifest builder walks the files in. */
  const expected = onDisk.slice().sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  assert.deepStrictEqual(loaded, expected, "script order matches syllabus order");
});
