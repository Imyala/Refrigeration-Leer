/* The reference library is the extension point for source documents: lessons
   cite it, the #reference view is generated from it, and more documents will be
   added. These tests keep citations, clause targets and structure honest. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const R = require("../js/refdocs.js");
const MD = require("../js/md.js");

const COURSE = fs
  .readdirSync(path.join(ROOT, "js"))
  .filter((f) => /^course\d+\.js$/.test(f))
  .sort()
  .flatMap((f) => require(path.join(ROOT, "js", f)));

const lessonKeys = new Set(COURSE.flatMap((m) => m.lessons.map((l) => m.id + "/" + l.id)));

test("every document is complete enough to render and to cite", () => {
  assert.ok(R.docs.length >= 1, "at least one reference document");
  for (const doc of R.docs) {
    for (const field of ["id", "short", "title", "edition", "publisher", "module", "blurb", "acknowledgement"]) {
      assert.ok(doc[field], `${doc.id}: ${field}`);
    }
    assert.ok(/^[a-z0-9-]+$/.test(doc.id), `${doc.id}: id is a slug`);
    assert.ok(doc.parts.length >= 1, `${doc.id}: has parts`);
    for (const p of doc.parts) {
      assert.ok(p.id && p.title && p.scope, `${doc.id} part ${p.id}: id, title, scope`);
      assert.ok(p.chapters.length >= 1, `${doc.id} part ${p.id}: chapters`);
    }
  }
});

test("every document is taught by a module that exists", () => {
  const modIds = new Set(COURSE.map((m) => m.id));
  for (const doc of R.docs) {
    assert.ok(modIds.has(doc.module), `${doc.id}: module ${doc.module} exists`);
  }
});

test("every indexed clause is well-formed and points at a real lesson", () => {
  for (const doc of R.docs) {
    const keys = Object.keys(doc.clauses);
    assert.ok(keys.length >= 1, `${doc.id}: has clauses`);
    for (const key of keys) {
      const c = doc.clauses[key];
      assert.match(key, /^(both|\d+):[\d.]+$/, `${doc.id}: clause key format ${key}`);
      assert.ok(c.title, `${doc.id} ${key}: title`);
      assert.ok(c.summary && c.summary.length > 40, `${doc.id} ${key}: a real summary`);
      assert.ok(c.lesson, `${doc.id} ${key}: lesson`);
      assert.ok(lessonKeys.has(doc.module + "/" + c.lesson),
        `${doc.id} ${key}: lesson ${doc.module}/${c.lesson} exists`);
    }
  }
});

test("every !CITE in the course resolves to an indexed clause", () => {
  const used = new Set();
  for (const mod of COURSE) {
    for (const les of mod.lessons) {
      for (const [, ref] of (les.content || "").matchAll(/!CITE\[([^\]]+)\]/g)) {
        used.add(ref);
        assert.ok(R.clause(ref), `${mod.id}/${les.id}: unresolved citation ${ref}`);
      }
    }
  }
  assert.ok(used.size >= 10, `citations in use: ${used.size}`);
});

test("the Code is cited from lessons outside its own module", () => {
  // The point of the citation directive: the Code is referenced while studying
  // the rest of the course, not only inside its own module.
  const outside = new Set();
  for (const mod of COURSE) {
    if (R.docs.some((d) => d.module === mod.id)) continue;
    for (const les of mod.lessons) {
      if (/!CITE\[/.test(les.content || "")) outside.add(mod.id + "/" + les.id);
    }
  }
  assert.ok(outside.size >= 5,
    `lessons outside the reference module carrying citations: ${outside.size}`);
});

test("!CITE renders a link into the lesson that teaches the clause", () => {
  const html = MD.render("Test before charging !CITE[cop:2:4.9] every time.");
  assert.match(html, /class="cite"/);
  assert.match(html, /href="#code-of-practice\/cop-leak-testing"/);
  assert.match(html, /COP 2025/);
  assert.match(html, /Leak tightness testing/);
});

test("an unknown clause degrades to visible text rather than a broken link", () => {
  const html = MD.render("Nonsense !CITE[cop:2:99.9] here.");
  assert.match(html, /cite-missing/);
  assert.doesNotMatch(html, /href="#code-of-practice\/undefined"/);
});

test("clause lookup falls back to shared Part 1 & 2 clauses", () => {
  // Recovery and handling clauses are identical in both Parts, indexed as "both".
  assert.ok(R.clause("cop:1:1.1.1"), "Part 1 resolves a shared clause");
  assert.ok(R.clause("cop:2:1.1.1"), "Part 2 resolves the same shared clause");
  assert.strictEqual(R.label("cop:1:1.1.1"), "COP 2025 · Pt 1 §1.1.1");
  assert.strictEqual(R.label("cop:2:1.1.1"), "COP 2025 · Pt 2 §1.1.1");
});

test("unknown references return null rather than throwing", () => {
  assert.strictEqual(R.clause("nope:1:1.1"), null);
  assert.strictEqual(R.clause("cop:1:404.404"), null);
  assert.strictEqual(R.clause("garbage"), null);
  assert.strictEqual(R.label("garbage"), null);
});
