/* The interactive pages are all script-rendered: open one with a broken
   reference and you get a blank panel and no error anyone will see. Nothing
   else in the suite executes them, so this boots each page's real scripts
   against a DOM stub, fires DOMContentLoaded the way a browser would, and
   fails if the page paints nothing or paints a template hole.

   The stub implements only the DOM surface these pages touch. If a page starts
   using something new, add it here rather than working around it. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
/* simulator.html is deliberately not in this list. It builds its schematic by
   real SVG DOM construction — gradients, path geometry, node insertion — and
   stubbing enough of that to boot it would mean maintaining a small SVG engine
   in the test suite, which would then be the thing under test rather than the
   page. Its logic lives in js/model.js and js/data.js, which are covered
   directly. The check below still catches a broken script reference there. */
const PAGES = ["build.html", "diagnose.html", "service.html"];


function makeCtx(html) {
  const els = {};
  const mk = (id) => els[id] = els[id] || {
    id, innerHTML: "", value: "", textContent: "", className: "", hidden: false,
    checked: false, dataset: {}, style: {}, classList: { add(){}, remove(){}, toggle(){}, contains(){return false;} },
    children: [], attributes: {},
    setAttribute(k,v){this.attributes[k]=v;}, getAttribute(k){return this.attributes[k]||null;},
    removeAttribute(k){delete this.attributes[k];}, hasAttribute(k){return k in this.attributes;},
    focus(){}, blur(){}, click(){}, remove(){}, appendChild(){}, append(){}, prepend(){},
    insertBefore(){}, replaceChildren(){}, insertAdjacentHTML(_,h){this.innerHTML+=h;},
    addEventListener(t,f){(this._h=this._h||{})[t]=f;}, removeEventListener(){},
    querySelector(sel){return mk(this.id+" "+sel);}, querySelectorAll(){return [];},
    closest(){return null;}, getBoundingClientRect(){return {top:0,left:0,width:100,height:100};},
    scrollIntoView(){},
    /* SVG geometry the simulator uses to animate flow along the pipe runs. */
    getTotalLength(){ return 100; },
    getPointAtLength(){ return { x: 0, y: 0 }; },
    getScreenCTM(){ return null; },
    createSVGPoint(){ return { x: 0, y: 0, matrixTransform(){ return { x: 0, y: 0 }; } }; },
  };
  const store = {};
  const sandbox = {
    console,
    localStorage: { getItem:k=>(k in store?store[k]:null), setItem:(k,v)=>{store[k]=String(v);}, removeItem:k=>{delete store[k];} },
    document: {
      getElementById: mk, querySelector: (s)=>mk("q:"+s), querySelectorAll: ()=>[],
      createElement: (t)=>mk("new:"+t+":"+Math.random()), createDocumentFragment: ()=>mk("frag"),
      createElementNS: (ns,t)=>mk("ns:"+t+":"+Math.random()),
      _dcl: [],
      addEventListener(t, f){ if (t === "DOMContentLoaded") sandbox.document._dcl.push(f); },
      body: mk("body"), documentElement: mk("html"), readyState: "loading",
      activeElement: null,
    },
    location: { hash:"", search:"", replace(){}, href:"" },
    navigator: { userAgent:"node" },
    requestAnimationFrame: (f)=>{ f(0); return 1; }, cancelAnimationFrame(){},
    setTimeout:(f)=>{ return 0; }, clearTimeout(){}, setInterval:()=>0, clearInterval(){},
    Math, Date, JSON, Object, Array, String, Number, Boolean, Set, Map, RegExp, Error, TypeError,
    parseInt, parseFloat, isNaN, isFinite, Intl, URLSearchParams,
    encodeURIComponent, decodeURIComponent, DataTransfer: function(){},
    getComputedStyle: ()=>({ getPropertyValue: ()=>"" }),
    matchMedia: ()=>({matches:false, addEventListener(){}, addListener(){}}),
    scrollTo(){}, print(){}, addEventListener(){}, alert(){},
  };
  sandbox.window = sandbox; sandbox.globalThis = sandbox; sandbox.self = sandbox;
  vm.createContext(sandbox);
  return { sandbox, els };
}

function bootPage(page) {
  const html = fs.readFileSync(page, "utf8");
  const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
  const { sandbox, els } = makeCtx(html);
  for (const s of scripts) {
    vm.runInContext(fs.readFileSync(s, "utf8"), sandbox, { filename: s });
  }
  /* Pages self-init on DOMContentLoaded; fire it the way a browser would. */
  sandbox.document.readyState = "complete";
  sandbox.document._dcl.forEach(f => f({}));
  return { sandbox, els, scripts };
}


function boot(page) {
  const abs = path.join(ROOT, page);
  const html = fs.readFileSync(abs, "utf8");
  const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
  const { sandbox, els } = makeCtx(html);
  for (const s of scripts) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, s), "utf8"), sandbox, { filename: s });
  }
  sandbox.document.readyState = "complete";
  sandbox.document._dcl.forEach(f => f({}));
  return { sandbox, els, scripts };
}

for (const page of PAGES) {
  test(`${page} boots, renders, and leaks no template holes`, () => {
    let ctx;
    assert.doesNotThrow(() => { ctx = boot(page); }, `${page}: scripts threw on load`);

    const painted = Object.values(ctx.els).filter(e => typeof e.innerHTML === "string" && e.innerHTML.length > 50);
    assert.ok(painted.length > 0, `${page}: nothing was rendered — check the element ids the script looks for`);

    for (const e of Object.values(ctx.els)) {
      if (typeof e.innerHTML !== "string") continue;
      const hole = e.innerHTML.match(/.{0,60}(undefined|\[object Object\]|NaN).{0,40}/);
      assert.ok(!hole, `${page}: template hole in #${e.id} — ${hole && hole[0]}`);
    }
  });
}

test("every page loads only scripts and stylesheets that exist", () => {
  const pages = fs.readdirSync(ROOT).filter(f => f.endsWith(".html"));
  for (const page of pages) {
    const html = fs.readFileSync(path.join(ROOT, page), "utf8");
    const refs = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1])
      .concat([...html.matchAll(/<link[^>]+href="([^"]+\.css)"/g)].map(m => m[1]));
    for (const r of refs) {
      assert.ok(fs.existsSync(path.join(ROOT, r)), `${page} references ${r}, which does not exist`);
    }
  }
});
