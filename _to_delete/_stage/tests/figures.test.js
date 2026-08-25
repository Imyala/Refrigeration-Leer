const test = require("node:test");
const assert = require("node:assert");
const F = require("../js/figures.js");
const MD = require("../js/md.js");
const fs = require("fs");
const path = require("path");

const JS_DIR = path.join(__dirname, "../js");
const COURSE_FILES = fs.readdirSync(JS_DIR).filter(f => /^course\d+\.js$/.test(f)).sort();
const COURSE_SRC = COURSE_FILES
  .map(f => fs.readFileSync(path.join(JS_DIR, f), "utf8"))
  .join("\n");

const usedIds = () => [...COURSE_SRC.matchAll(/!FIG\[([a-z0-9-]+)\]/g)].map(m => m[1]);

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

test("every figure carries an svg, a caption and a real accessible description", () => {
  for (const id of F.ids) {
    const f = F.FIGURES[id];
    assert.ok(typeof f.svg === "string" && f.svg.trim().length > 0, `${id}: has an svg`);
    assert.ok(typeof f.caption === "string" && f.caption.trim().length > 0, `${id}: has a caption`);
    assert.match(f.svg, /<svg[^>]*\brole="img"/, `${id}: svg root carries role="img"`);
    assert.match(f.svg, /\bviewBox="/, `${id}: svg has a viewBox`);
    const label = f.svg.match(/\baria-label="([^"]*)"/);
    assert.ok(label, `${id}: svg has an aria-label`);
    assert.ok(label[1].trim().length > 20, `${id}: aria-label describes the diagram: ${label[1]}`);
  }
});

test("no figure svg reaches outside the page", () => {
  for (const id of F.ids) {
    const svg = F.FIGURES[id].svg;
    assert.ok(!/https?:/i.test(svg), `${id}: no external URL`);
    assert.ok(!/<image\b/i.test(svg), `${id}: no embedded <image>`);
    assert.ok(!/\burl\((?!#)/i.test(svg), `${id}: url() references stay internal`);
  }
});

test("every !FIG directive in the course resolves to a real figure", () => {
  assert.ok(COURSE_FILES.length >= 40, `course files scanned: ${COURSE_FILES.length}`);
  const used = usedIds();
  assert.ok(used.length >= 12, `figures used in lessons: ${used.length}`);
  for (const id of used) {
    assert.ok(F.FIGURES[id], `unknown figure referenced: ${id}`);
  }
});

test("every defined figure is actually used in a lesson", () => {
  const used = new Set(usedIds());
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
