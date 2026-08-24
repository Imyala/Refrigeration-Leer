const test = require("node:test");
const assert = require("node:assert");
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

test("SCORM package builds with a valid manifest and zip", () => {
  const run = spawnSync("node", [path.join(ROOT, "tools", "build-scorm.js")], { encoding: "utf8" });
  assert.strictEqual(run.status, 0, `builder exit code: ${run.stderr || run.stdout}`);

  const manifestPath = path.join(ROOT, "dist", "scorm", "imsmanifest.xml");
  assert.ok(fs.existsSync(manifestPath), "imsmanifest.xml exists");
  const manifest = fs.readFileSync(manifestPath, "utf8");
  assert.match(manifest, /<schemaversion>1\.2<\/schemaversion>/);
  assert.match(manifest, /adlcp:scormtype="sco" href="learn\.html"/);
  assert.match(manifest, /<file href="js\/scorm\.js"\/>/);

  const zipPath = path.join(ROOT, "dist", "refrigeration-course-scorm12.zip");
  assert.ok(fs.existsSync(zipPath), "zip exists");
  assert.ok(fs.statSync(zipPath).size > 10000, "zip has content");

  // every file the manifest lists is actually in the package dir
  for (const [, href] of manifest.matchAll(/<file href="([^"]+)"\/>/g)) {
    assert.ok(fs.existsSync(path.join(ROOT, "dist", "scorm", href)), `packaged: ${href}`);
  }

  // every script a packaged HTML file references must itself be packaged —
  // a missing script would 404 inside the LMS. Match any attribute order, so a
  // tag like <script src="js/nav.js" defer> is checked too.
  const pkgDir = path.join(ROOT, "dist", "scorm");
  const pages = ["learn.html", "index.html", "teach.html", "service.html", "about.html"];
  for (const html of pages) {
    const src = fs.readFileSync(path.join(pkgDir, html), "utf8");
    for (const [, scriptSrc] of src.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)) {
      assert.ok(fs.existsSync(path.join(pkgDir, scriptSrc)), `${html} references packaged script: ${scriptSrc}`);
    }
  }

  // ...and so must every page the navigation links to, or the learner hits a
  // dead link inside the LMS
  for (const html of pages) {
    const src = fs.readFileSync(path.join(pkgDir, html), "utf8");
    for (const [, href] of src.matchAll(/<a\b[^>]*\bhref="([^"#?][^"]*?)(?:[?#][^"]*)?"/g)) {
      if (/^(https?:|mailto:|data:)/.test(href)) continue;
      assert.ok(fs.existsSync(path.join(pkgDir, href)), `${html} links to packaged page: ${href}`);
    }
  }
});
