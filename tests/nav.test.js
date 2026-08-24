/* The site navigation is duplicated as static markup in every page — that keeps
   it working before scripts run and without JavaScript, but it can drift. These
   tests pin the shape: same links, same order, exactly one current page. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

// page -> the nav entry that page should mark as current
const PAGES = {
  "index.html": "sim",
  "learn.html": "learn",
  "service.html": "service",
  "teach.html": "teach",
  "about.html": "about",
};

const EXPECTED_ORDER = ["sim", "learn", "service", "quiz", "teach", "about"];

const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const navOf = (src) => {
  const m = src.match(/<nav class="sitenav"[\s\S]*?<\/nav>/);
  assert.ok(m, "page has a .sitenav block");
  return m[0];
};

test("every page carries the same nav entries, in the same order", () => {
  for (const page of Object.keys(PAGES)) {
    const nav = navOf(read(page));
    const keys = [...nav.matchAll(/data-nav="([^"]+)"/g)].map((m) => m[1]);
    assert.deepStrictEqual(keys, EXPECTED_ORDER, `${page} nav order`);
  }
});

test("each page marks exactly one nav entry as the current page", () => {
  for (const [page, expected] of Object.entries(PAGES)) {
    const nav = navOf(read(page));
    const current = [...nav.matchAll(/data-nav="([^"]+)"\s+aria-current="page"/g)].map((m) => m[1]);
    assert.deepStrictEqual(current, [expected], `${page} marks its own nav entry`);
  }
});

test("every nav target exists on disk", () => {
  const nav = navOf(read("index.html"));
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

test("cross-page links live in the nav, not duplicated in the page toolbar", () => {
  // .controls is for page-scoped tools; site navigation belongs to .sitenav.
  for (const page of ["index.html", "learn.html", "service.html", "teach.html"]) {
    const src = read(page);
    const m = src.match(/<div class="controls">[\s\S]*?<\/div>\s*<\/header>/);
    if (!m) continue; // page has no toolbar at all
    assert.doesNotMatch(m[0], /href="(learn|service|teach|about)\.html"/, `${page} toolbar has no nav links`);
  }
});
