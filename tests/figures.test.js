const test = require("node:test");
const assert = require("node:assert");
const F = require("../js/figures.js");
const MD = require("../js/md.js");
const fs = require("fs");
const path = require("path");

const COURSE_SRC =
  fs.readFileSync(path.join(__dirname, "../js/course1.js"), "utf8") +
  fs.readFileSync(path.join(__dirname, "../js/course2.js"), "utf8");

test("every figure is accessible and captioned", () => {
  assert.ok(F.ids.length >= 12, `figure count: ${F.ids.length}`);
  for (const id of F.ids) {
    const f = F.FIGURES[id];
    assert.ok(f.svg.includes('role="img"'), `${id}: role=img`);
    assert.ok(f.svg.includes("aria-label="), `${id}: aria-label`);
    assert.ok(f.caption && f.caption.length > 30, `${id}: substantive caption`);
    assert.ok(f.svg.trim().startsWith("<svg") && f.svg.trim().endsWith("</svg>"), `${id}: well-formed svg`);
  }
});

test("every !FIG directive in the course resolves to a real figure", () => {
  const used = [...COURSE_SRC.matchAll(/!FIG\[([a-z0-9-]+)\]/g)].map(m => m[1]);
  assert.ok(used.length >= 12, `figures used in lessons: ${used.length}`);
  for (const id of used) {
    assert.ok(F.FIGURES[id], `unknown figure referenced: ${id}`);
  }
});

test("every defined figure is actually used in a lesson", () => {
  const used = new Set([...COURSE_SRC.matchAll(/!FIG\[([a-z0-9-]+)\]/g)].map(m => m[1]));
  for (const id of F.ids) {
    assert.ok(used.has(id), `unused figure: ${id}`);
  }
});

test("!FIG renders a captioned figure via the markdown renderer", () => {
  const id = F.ids[0];
  const html = MD.render(`!FIG[${id}]`);
  assert.match(html, /<figure class="fig">/);
  assert.ok(html.includes("<svg"), "svg embedded");
  assert.match(html, /<figcaption>/);
  const missing = MD.render("!FIG[does-not-exist]");
  assert.match(missing, /missing figure/);
});
