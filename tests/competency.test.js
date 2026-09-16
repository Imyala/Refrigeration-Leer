/* Modules carry `units:` tags naming the UEE32225 units of competency they
   support. A tag that names a unit the registry does not know is a typo that
   would print on an instructor's report; a core unit nothing supports is a
   gap the mapping document should be honest about. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const C = require("../js/competency.js");

const COURSE = fs
  .readdirSync(path.join(__dirname, "..", "js"))
  .filter((f) => /^course\d+\.js$/.test(f))
  .sort()
  .flatMap((f) => require("../js/" + f));

test("the qualification is the current one and says where it came from", () => {
  assert.strictEqual(C.QUALIFICATION.code, "UEE32225");
  assert.strictEqual(C.QUALIFICATION.supersedes, "UEE32220");
  assert.match(C.QUALIFICATION.released, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(C.QUALIFICATION.checked, /^\d{4}-\d{2}$/);
});

test("every unit in the registry is well-formed", () => {
  for (const [code, u] of Object.entries(C.UNITS)) {
    assert.match(code, /^UEE(CD|CO|RA)\d{4}$/, `${code}: UEE unit code`);
    assert.ok(u.title && u.title.length > 15, `${code}: title`);
    assert.ok(["core", "elective", "unconfirmed"].includes(u.status), `${code}: status`);
  }
  assert.ok(Object.values(C.UNITS).filter(u => u.status === "core").length >= 10, "a real core set");
});

test("every module's unit tags name real units, without duplicates", () => {
  let tagged = 0;
  for (const mod of COURSE) {
    if (!mod.units) continue;
    assert.ok(Array.isArray(mod.units) && mod.units.length, `${mod.id}: units is a non-empty list`);
    assert.strictEqual(new Set(mod.units).size, mod.units.length, `${mod.id}: no duplicate unit tags`);
    for (const code of mod.units) assert.ok(C.isUnit(code), `${mod.id}: unknown unit ${code}`);
    tagged += 1;
  }
  assert.ok(tagged >= COURSE.length * 0.8, `most modules carry unit tags (${tagged} of ${COURSE.length})`);
});

test("every core unit is supported by at least one module or tool", () => {
  const cov = C.coverage(COURSE);
  const bare = cov.filter(u => u.status === "core" && !u.modules.length && !u.tools.length);
  assert.deepStrictEqual(bare.map(u => u.code), [], "core units with no support: " + bare.map(u => u.code).join(", "));
});

test("the tools name real units", () => {
  for (const [id, t] of Object.entries(C.TOOLS)) {
    assert.ok(t.label, `${id}: labelled`);
    for (const code of t.units) assert.ok(C.isUnit(code), `${id}: unknown unit ${code}`);
  }
});
