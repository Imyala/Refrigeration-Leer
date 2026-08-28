/* The site navigation is duplicated as static markup in every page — that keeps
   it working before scripts run and without JavaScript, but it can drift. These
   tests pin the shape: same links, same order, exactly one current entry, and
   the practice tools reachable from each other. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

/* page -> [nav entry that page marks, the aria-current value it uses].
   The four workshops are not top-level destinations any more: they live under
   Practice, so they mark that section as current ("true") rather than claiming
   to be the practice page itself ("page"). */
const PAGES = {
  "index.html": ["home", "page"],
  "learn.html": ["learn", "page"],
  "practice.html": ["practice", "page"],
  "simulator.html": ["practice", "true"],
  "service.html": ["practice", "true"],
  "build.html": ["practice", "true"],
  "diagnose.html": ["practice", "true"],
  "teach.html": ["teach", "page"],
  "about.html": ["about", "page"],
};

/* Three primary destinations — where you are, what you read, what you do — then
   the two entries that belong to staff rather than learners. */
const EXPECTED_ORDER = ["home", "learn", "practice", "teach", "about"];

/* The pages that carry the practice-tool switcher, and the entry each marks. */
const TOOL_PAGES = {
  "simulator.html": "sim",
  "service.html": "service",
  "build.html": "build",
  "diagnose.html": "diagnose",
};
const EXPECTED_TOOLS = ["sim", "service", "build", "diagnose", "quiz"];

const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const blockOf = (src, cls, label) => {
  const m = src.match(new RegExp(`<nav class="${cls}"[\\s\\S]*?</nav>`));
  assert.ok(m, `page has a .${cls} block`);
  return m[0];
};
const navOf = (src) => blockOf(src, "sitenav");
const stripOf = (src) => blockOf(src, "toolstrip");

test("every page carries the same nav entries, in the same order", () => {
  for (const page of Object.keys(PAGES)) {
    const nav = navOf(read(page));
    const keys = [...nav.matchAll(/data-nav="([^"]+)"/g)].map((m) => m[1]);
    assert.deepStrictEqual(keys, EXPECTED_ORDER, `${page} nav order`);
  }
});

test("the nav stays short enough to read at a glance", () => {
  // A learner should never have to scan a menu to find the next thing to do.
  assert.ok(EXPECTED_ORDER.length <= 5, "site nav has at most five entries");
});

test("each page marks exactly one nav entry as current", () => {
  for (const [page, [expected, value]] of Object.entries(PAGES)) {
    const nav = navOf(read(page));
    const current = [...nav.matchAll(/data-nav="([^"]+)" aria-current="([^"]+)"/g)]
      .map((m) => [m[1], m[2]]);
    assert.deepStrictEqual(current, [[expected, value]], `${page} marks its own section`);
  }
});

test("every nav target exists on disk", () => {
  const nav = navOf(read("simulator.html"));
  const hrefs = [...nav.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(hrefs.length >= EXPECTED_ORDER.length, "nav has hrefs");
  for (const href of hrefs) {
    const file = href.split(/[?#]/)[0];
    assert.ok(fs.existsSync(path.join(ROOT, file)), `nav target exists: ${file}`);
  }
});

test("every page loads the nav script and offers a skip link", () => {
  for (const page of Object.keys(PAGES)) {
    const src = read(page);
    assert.match(src, /<script src="js\/nav\.js"/, `${page} loads js/nav.js`);
    assert.match(src, /class="skip-link"/, `${page} has a skip link`);
  }
});

test("the mobile menu button is wired to the link list", () => {
  for (const page of Object.keys(PAGES)) {
    const nav = navOf(read(page));
    assert.match(nav, /aria-controls="sitenavLinks"/, `${page} toggle targets the list`);
    assert.match(nav, /aria-expanded="false"/, `${page} toggle starts collapsed`);
    assert.match(nav, /id="sitenavLinks"/, `${page} has the link list`);
  }
});

test("every practice tool can reach every other one, and the hub", () => {
  for (const [page, expected] of Object.entries(TOOL_PAGES)) {
    const strip = stripOf(read(page));
    const keys = [...strip.matchAll(/data-tool="([^"]+)"/g)].map((m) => m[1]);
    assert.deepStrictEqual(keys, EXPECTED_TOOLS, `${page} tool switcher order`);
    assert.match(strip, /href="practice\.html"/, `${page} links back to the hub`);

    const current = [...strip.matchAll(/data-tool="([^"]+)" aria-current="page"/g)].map((m) => m[1]);
    assert.deepStrictEqual(current, [expected], `${page} marks its own tool`);
  }
});

test("the practice hub links to every tool it lists", () => {
  const src = read("practice.html");
  for (const page of Object.keys(TOOL_PAGES)) {
    assert.ok(src.includes(`href="${page}"`), `practice.html links to ${page}`);
  }
  assert.ok(src.includes('href="simulator.html?quiz=1"'), "practice.html links to the quiz");
});

test("cross-page links live in the nav, not duplicated in the page toolbar", () => {
  // .controls is for page-scoped tools; site navigation belongs to .sitenav.
  for (const page of ["simulator.html", "learn.html", "service.html", "teach.html"]) {
    const src = read(page);
    const m = src.match(/<div class="controls">[\s\S]*?<\/div>\s*<\/header>/);
    if (!m) continue; // page has no toolbar at all
    assert.doesNotMatch(m[0], /href="(index|learn|simulator|service|practice|teach|about)\.html"/, `${page} toolbar has no nav links`);
  }
});
