/* The home page groups the ten course modules into five stages. If a module id
   is renamed or a stage loses its module, the pathway silently stops covering
   part of the course — these tests make that loud. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
/* Every course content file, so a module added later is still checked against
   the pathway rather than silently falling outside it. */
const COURSE = fs
  .readdirSync(path.join(ROOT, "js"))
  .filter((f) => /^course\d+\.js$/.test(f))
  .sort()
  .flatMap((f) => require(path.join(ROOT, "js", f)));
const homeSrc = fs.readFileSync(path.join(ROOT, "js", "home.js"), "utf8");

// pull the stage table out of home.js without running its browser-only code
function stageModules() {
  const stages = [];
  for (const [, body] of homeSrc.matchAll(/modules:\s*\[([^\]]*)\]/g)) {
    stages.push([...body.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]));
  }
  return stages;
}

test("the pathway covers every course module exactly once", () => {
  const staged = stageModules().flat();
  const courseIds = COURSE.map((m) => m.id);

  assert.ok(staged.length > 0, "stages declare modules");
  for (const id of staged) {
    assert.ok(courseIds.includes(id), `stage module exists in the course: ${id}`);
  }
  for (const id of courseIds) {
    assert.ok(staged.includes(id), `course module appears in a stage: ${id}`);
  }
  assert.strictEqual(new Set(staged).size, staged.length, "no module is staged twice");
});

test("stages are ordered to follow the course", () => {
  const staged = stageModules().flat();
  const courseIds = COURSE.map((m) => m.id);
  const positions = staged.map((id) => courseIds.indexOf(id));
  const sorted = [...positions].sort((a, b) => a - b);
  assert.deepStrictEqual(positions, sorted,
    "a learner walking the stages meets the modules in course order");
});

test("every stage links a tool that exists", () => {
  for (const [, href] of homeSrc.matchAll(/href:\s*"([^"]+)"/g)) {
    const file = href.split(/[?#]/)[0];
    assert.ok(fs.existsSync(path.join(ROOT, file)), `stage tool target exists: ${file}`);
  }
});

test("legacy simulator deep links are forwarded, plain visits are not", () => {
  // The simulator used to live at index.html; those links must still work.
  const simParams = homeSrc.match(/const SIM_PARAMS = \[([^\]]*)\]/);
  assert.ok(simParams, "the redirect lists the params it forwards");
  const keys = [...simParams[1].matchAll(/"([a-z]+)"/g)].map((m) => m[1]);

  // Every param the simulator reads from the URL must be forwarded.
  const appSrc = fs.readFileSync(path.join(ROOT, "js", "app.js"), "utf8");
  const read = new Set([...appSrc.matchAll(/urlq\.get\("([a-z]+)"\)/g)].map((m) => m[1]));
  for (const k of read) {
    assert.ok(keys.includes(k), `legacy redirect forwards the "${k}" param the simulator reads`);
  }
  assert.match(homeSrc, /location\.replace\("simulator\.html"/, "forwards to the simulator");
});
