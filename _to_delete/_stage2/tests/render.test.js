/* End-to-end render check for the course UI.

   The site has no build step and no browser in CI, so nothing else catches a
   template that throws, a lesson that renders empty, or a figure id that no
   longer resolves — and with 54 modules and 437 lessons, clicking through by
   hand is not a plan. This runs js/learn.js against a minimal DOM stub and
   routes to every module, every lesson and every exam view, failing on a
   thrown error, an "undefined" leaking into the markup, a missing figure or a
   suspiciously short page.

   The stub is deliberately dumb: it only implements the DOM surface learn.js
   actually touches. If learn.js starts using something new, add it here. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const JS = path.join(ROOT, "js");

function boot() {
  const els = {};
  function mkEl(id) {
    return els[id] = els[id] || {
      id, innerHTML: "", value: "", hidden: false, className: "", textContent: "",
      dataset: {}, style: {},
      setAttribute(){}, getAttribute(){return null;}, focus(){}, insertAdjacentHTML(_,h){this.innerHTML+=h;},
      addEventListener(){}, querySelector(sel){return mkEl("q:"+sel);}, querySelectorAll(){return [];},
      appendChild(){}, remove(){},
    };
  }
  const store = {};
  const sandbox = {
    console,
    localStorage: { getItem: k => (k in store ? store[k] : null), setItem: (k,v)=>{store[k]=v;}, removeItem: k=>{delete store[k];} },
    document: {
      getElementById: mkEl,
      querySelector: (sel) => mkEl("d:"+sel),
      querySelectorAll: () => [],
      createElement: () => mkEl("tmp"),
      addEventListener: () => {},
      body: { classList: { add(){}, remove(){} }, appendChild(){}, },
      readyState: "complete",
    },
    location: { hash: "", search: "", replace(){} },
    navigator: { userAgent: "node" }, scrollTo(){}, print(){}, addEventListener(){}, matchMedia: () => ({ matches:false, addEventListener(){} }),
    Blob: function(){}, URL: { createObjectURL: () => "blob:", revokeObjectURL(){} },
    setTimeout, clearTimeout, Math, Date, JSON, Object, Array, String, Number, Boolean,
    parseInt, parseFloat, isNaN, Set, Map, encodeURIComponent, decodeURIComponent,
    Intl, RegExp, Error, TypeError, URLSearchParams,
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  vm.createContext(sandbox);

  const load = f => vm.runInContext(fs.readFileSync(path.join(JS, f), "utf8"), sandbox, { filename: f });
  ["data.js","streams.js","course-index.js","cards.js","figures.js","refdocs.js","md.js","srs.js","scorm.js","exam.js"].forEach(load);
  fs.readdirSync(JS).filter(f=>/^course\d+\.js$/.test(f))
    .sort((a,b)=>a.localeCompare(b,"en",{numeric:true})).forEach(load);
  load("learn.js");

  const ctx = {
    els,
    hash(h) { sandbox.location.hash = h; vm.runInContext("route()", sandbox); return els.learnMain.innerHTML; },
    eval(expr) { return vm.runInContext(expr, sandbox); },
  };
  vm.runInContext("Progress.load(); Flags.load(); Srs.load(); NavOpen.load(); buildFlat();", sandbox);
  return ctx;
}

const app = boot();

test("the whole syllabus loads", () => {
  assert.strictEqual(app.eval("COURSE.length"), require("../js/course-index.js").total.modules);
  assert.strictEqual(app.eval("totalLessons()"), require("../js/course-index.js").total.lessons);
});

test("the course overview renders a section and cards for every stream", () => {
  const html = app.hash("");
  assert.match(html, /stream-section/, "stream sections present");
  assert.ok(!html.includes("undefined"), "no undefined in the overview");
  const cards = (html.match(/class="module-card"/g) || []).length;
  assert.strictEqual(cards, app.eval("COURSE.length"), "one card per module");
});

test("the sidebar groups modules under one heading per stream", () => {
  app.hash("");
  const html = app.els.navList.innerHTML;
  const heads = (html.match(/nav-stream-head/g) || []).length;
  assert.strictEqual(heads, require("../js/streams.js").STREAMS.length);
  assert.ok(!html.includes("undefined"), "no undefined in the sidebar");
});

test("every module page renders", () => {
  for (const id of app.eval("COURSE.map(m=>m.id)")) {
    const html = app.hash("#" + id);
    assert.ok(!html.includes("undefined"), `${id}: undefined in output`);
    assert.ok(html.length > 200, `${id}: page is empty`);
  }
});

test("every lesson page renders, with every figure resolving", () => {
  for (const p of app.eval("COURSE.flatMap(m=>m.lessons.map(l=>m.id+'/'+l.id))")) {
    const html = app.hash("#" + p);
    assert.ok(!html.includes("undefined"), `${p}: undefined in output`);
    assert.ok(!html.includes("missing figure"), `${p}: unresolved !FIG`);
    assert.ok(html.length > 400, `${p}: page is suspiciously short`);
  }
});

test("the final exam and every stream exam render", () => {
  assert.match(app.hash("#exam"), /Final exam/);
  for (const st of require("../js/streams.js").STREAMS) {
    const html = app.hash("#exam/" + st.id);
    assert.ok(!html.includes("undefined"), `${st.id}: undefined in output`);
    assert.match(html, /exam/i, `${st.id}: exam view rendered`);
  }
});

test("exam papers draw one question per module, or two for a stream", () => {
  for (const st of require("../js/streams.js").STREAMS) {
    const mods = app.eval(`streamModules('${st.id}').length`);
    const n = app.eval(`RefrigExam.pickExamQuestions(streamModules('${st.id}'), 2).length`);
    assert.strictEqual(n, mods * 2, `${st.id}: paper length`);
  }
  assert.strictEqual(app.eval("RefrigExam.pickExamQuestions(COURSE, 1).length"), app.eval("COURSE.length"));
});

test("the review, practice and reference views render", () => {
  for (const h of ["#review", "#practice", "#reference"]) {
    const html = app.hash(h);
    assert.ok(!html.includes("undefined"), `${h}: undefined in output`);
    assert.ok(html.length > 100, `${h}: page is empty`);
  }
});
