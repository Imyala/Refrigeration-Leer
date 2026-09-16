/* The course teaches to named editions of the Code of Practice, the
   standards and the training package. Editions get superseded, and a lesson
   that still cites the old one is exactly the kind of drift nobody notices
   until a TAFE teacher does. The edition register in js/refdocs.js names, for
   each document, the strings that would betray a stale citation; this scans
   the content and the public documents for them. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const R = require("../js/refdocs.js");

const ROOT = path.join(__dirname, "..");
const CONTENT = fs.readdirSync(path.join(ROOT, "js"))
  .filter(f => /^course\d+\.js$/.test(f))
  .map(f => path.join("js", f));
const PUBLIC = ["README.md", "about.html", "index.html", "practice.html",
  "docs/REFERENCES.md", "docs/CURRICULUM_MAPPING.md", "docs/SOURCE_COVERAGE.md",
  "docs/LMS_INTEGRATION_GUIDE.md", "docs/SALES_OVERVIEW.md", "js/competency.js"];

const CONTEXT = 220;   // characters either side of a match that may excuse it

function staleHits(text, doc) {
  const hits = [];
  for (const re of doc.stale) {
    const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    let m;
    while ((m = g.exec(text)) !== null) {
      const around = text.slice(Math.max(0, m.index - CONTEXT), m.index + m[0].length + CONTEXT);
      if (doc.allow && doc.allow.test(around)) continue;
      const line = text.slice(0, m.index).split("\n").length;
      hits.push({ match: m[0], line });
    }
  }
  return hits;
}

test("the edition register names a current edition for every document", () => {
  assert.ok(R.editions.length >= 5, "register has entries");
  for (const doc of R.editions) {
    assert.ok(doc.id && doc.title, `${doc.id}: identified`);
    assert.ok(doc.current && doc.current.length > 3, `${doc.id}: current edition named`);
    assert.match(doc.reviewed, /^\d{4}-\d{2}$/, `${doc.id}: reviewed as YYYY-MM`);
    assert.ok(Array.isArray(doc.stale), `${doc.id}: stale patterns are a list`);
    for (const re of doc.stale) assert.ok(re instanceof RegExp, `${doc.id}: stale pattern is a RegExp`);
  }
});

test("no lesson cites a superseded edition as if it were current", () => {
  const problems = [];
  for (const file of CONTENT) {
    const text = fs.readFileSync(path.join(ROOT, file), "utf8");
    for (const doc of R.editions) {
      for (const h of staleHits(text, doc)) {
        problems.push(`${file}:${h.line} cites "${h.match}" — current is ${doc.current}`);
      }
    }
  }
  assert.deepStrictEqual(problems, [], "stale citations:\n" + problems.join("\n"));
});

test("the public documents cite current editions too", () => {
  const problems = [];
  for (const file of PUBLIC) {
    const p = path.join(ROOT, file);
    if (!fs.existsSync(p)) continue;
    const text = fs.readFileSync(p, "utf8");
    for (const doc of R.editions) {
      for (const h of staleHits(text, doc)) {
        problems.push(`${file}:${h.line} cites "${h.match}" — current is ${doc.current}`);
      }
    }
  }
  assert.deepStrictEqual(problems, [], "stale citations:\n" + problems.join("\n"));
});

test("the register agrees with the reference library and the competency data", () => {
  const cop = R.editions.find(d => d.id === "cop");
  const lib = R.byId("cop");
  assert.ok(lib, "the Code is in the reference library");
  assert.ok(cop.current.includes(lib.edition.replace(" edition", "")), "the Code's edition matches between register and library");

  const C = require("../js/competency.js");
  const uee = R.editions.find(d => d.id === "uee");
  assert.ok(uee.current.includes(C.QUALIFICATION.code), "the qualification code matches between register and competency data");
  assert.ok(uee.supersedes.includes(C.QUALIFICATION.supersedes), "and so does the code it superseded");
});
