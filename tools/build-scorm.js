#!/usr/bin/env node
/* =========================================================================
   Build a SCORM 1.2 package of the course for LMS import (Moodle, Canvas,
   Blackboard, D2L…). Copies the static site into dist/scorm/, writes an
   imsmanifest.xml with learn.html as the SCO entry point, and zips it to
   dist/refrigeration-course-scorm12.zip.

   Usage: node tools/build-scorm.js     (or: npm run build:scorm)
   No dependencies — uses the system `zip`, falling back to python3.
   ========================================================================= */
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const OUT = path.join(DIST, "scorm");
const ZIP = path.join(DIST, "refrigeration-course-scorm12.zip");

const FILES = [
  "learn.html",
  "index.html",
  "teach.html",
  "service.html",
  "styles.css",
  "js/servicebay.js",
  "js/service-ui.js",
  "js/md.js",
  "js/figures.js",
  "js/srs.js",
  "js/cards.js",
  "js/scorm.js",
  "js/exam.js",
  "js/course1.js",
  "js/course2.js",
  "js/learn.js",
  "js/teach.js",
  "js/demo.js",
  "js/data.js",
  "js/units.js",
  "js/model.js",
  "js/gauges.js",
  "js/pt.js",
  "js/quiz.js",
  "js/app.js",
];

function manifest(files) {
  const fileTags = files.map(f => `      <file href="${f}"/>`).join("\n");
  return `<?xml version="1.0" standalone="no"?>
<manifest identifier="refrigeration-learning-course" version="1.2"
          xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
          xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd
                              http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="org-refrig">
    <organization identifier="org-refrig">
      <title>Refrigeration Learning Course</title>
      <item identifier="item-course" identifierref="res-course" isvisible="true">
        <title>Refrigeration Learning Course</title>
        <adlcp:masteryscore>80</adlcp:masteryscore>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="res-course" type="webcontent" adlcp:scormtype="sco" href="learn.html">
${fileTags}
    </resource>
  </resources>
</manifest>
`;
}

function main() {
  // fresh output dir
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.rmSync(ZIP, { force: true });
  fs.mkdirSync(path.join(OUT, "js"), { recursive: true });

  for (const f of FILES) {
    const src = path.join(ROOT, f);
    if (!fs.existsSync(src)) {
      console.error(`missing file: ${f}`);
      process.exit(1);
    }
    fs.copyFileSync(src, path.join(OUT, f));
  }
  fs.writeFileSync(path.join(OUT, "imsmanifest.xml"), manifest(FILES));

  // zip: system zip first, python3 fallback
  let zipped = spawnSync("zip", ["-r", "-q", ZIP, "."], { cwd: OUT });
  if (zipped.error || zipped.status !== 0) {
    const items = fs.readdirSync(OUT);
    zipped = spawnSync("python3", ["-m", "zipfile", "-c", ZIP, ...items], { cwd: OUT });
  }
  if (zipped.error || zipped.status !== 0) {
    console.error("could not create zip: install `zip` or python3");
    process.exit(1);
  }

  const kb = Math.round(fs.statSync(ZIP).size / 1024);
  console.log(`SCORM 1.2 package: ${path.relative(ROOT, ZIP)} (${kb} KB, ${FILES.length + 1} files)`);
  console.log("Import it in your LMS as a SCORM package (e.g. Moodle: Add activity → SCORM).");
}

main();
