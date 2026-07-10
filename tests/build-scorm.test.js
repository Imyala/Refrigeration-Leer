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
});
