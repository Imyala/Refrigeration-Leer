/* The site has a light theme and a dark one, chosen by a switch in the nav and
   remembered per browser. Both are token blocks in styles.css and a script
   that stamps data-theme on <html> before first paint. Three things can drift
   silently: a page that forgets the script or the switch (that page would
   flash, or lose the choice), the two copies of the dark block diverging, and
   a colour hard-coded below the token blocks that only suits one theme. */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const PAGES = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

test("every page loads the theme script in <head>, before the body paints", () => {
  for (const page of PAGES) {
    const html = read(page);
    const head = html.slice(0, html.indexOf("<body"));
    assert.match(head, /<script src="js\/theme\.js"><\/script>/, `${page} loads js/theme.js in <head>`);
    assert.ok(head.indexOf('href="styles.css"') < head.indexOf("js/theme.js"),
      `${page}: the stylesheet the theme drives comes first`);
  }
});

test("every page carries the theme switch in the site nav, as a toggle button", () => {
  for (const page of PAGES) {
    const nav = read(page).match(/<nav class="sitenav"[\s\S]*?<\/nav>/);
    assert.ok(nav, `${page} has a site nav`);
    const btn = nav[0].match(/<button class="theme-toggle" id="themeToggle"[^>]*>/);
    assert.ok(btn, `${page}: theme switch is in the nav`);
    assert.match(btn[0], /aria-pressed="false"/, `${page}: the switch is a toggle button`);
    assert.match(btn[0], /aria-label="Dark theme"/, `${page}: the switch has a constant name`);
  }
});

/* The dark tokens appear twice in styles.css: once for the switch and the
   instrument faces, once as the no-script OS fallback. Pull both out and
   compare them. */
function darkBlocks(css) {
  const grab = (re) => {
    const m = css.match(re);
    assert.ok(m, `styles.css has ${re}`);
    return m[1].split("\n").map((l) => l.trim()).filter(Boolean).join("\n");
  };
  return [
    grab(/:root\[data-theme="dark"\],[^{]*\{([\s\S]*?)\n\}/),
    grab(/@media \(prefers-color-scheme: dark\) \{\s*:root:not\(\[data-theme\]\) \{([\s\S]*?)\n\s*\}\s*\}/),
  ];
}

test("the two copies of the dark token block are identical", () => {
  const [chosen, fallback] = darkBlocks(read("styles.css"));
  assert.ok(chosen.includes("--bg:"), "the dark block defines the page background");
  assert.strictEqual(chosen, fallback);
});

test("the dark block defines every token the light block does", () => {
  const css = read("styles.css");
  const light = css.match(/:root \{([\s\S]*?)\n\}/)[1];
  const [dark] = darkBlocks(css);
  const names = (block) => new Set([...block.matchAll(/(--[a-z0-9-]+):/g)].map((m) => m[1]));
  const lightNames = names(light), darkNames = names(dark);
  // Layout tokens (type, spacing, shape, state colours) are theme-independent
  // and live only in the light block; every colour role must be in both.
  const colourRoles = [...darkNames];
  assert.ok(colourRoles.length > 40, "the dark block is a full palette");
  for (const n of colourRoles) assert.ok(lightNames.has(n), `light theme defines ${n}`);
  for (const n of ["--bg", "--panel", "--text", "--accent", "--accent-ink", "--good-text",
    "--warn-text", "--bad-text", "--card-bg", "--nav-bg", "--hero-bg", "--face"]) {
    assert.ok(darkNames.has(n), `dark theme defines ${n}`);
  }
});

test("no stylesheet names a page colour of its own below the token blocks", () => {
  /* Instrument faces are dark in both themes, so the rules that draw on them
     (the schematic's pipes and equipment artwork, the builder's loop, the
     diagnosis schematic and its overlay, the printed certificate) may carry
     literal colours. Everything else must go through a token, or it will be
     wrong in one theme. */
  const allowed = {
    "styles.css": [
      /^\.(pipes-base|metering-box|component:focus-visible|fin-set|fins-|eq-|state-chip|cert)/,
      /^#diagram\[data-view="equipment"\]/,
      /^body\.print-cert/,
    ],
    "styles-build.css": [/^\.(pipe-base|run-none|side-split|cx|drop-slot|card-tool)/, /^@keyframes buildFlash/],
    "styles-diagnose.css": [/^\.(dg-zone|dg-coil|dg-fins|dg-meter|dg-air|dg-flow|dg-pt|dg-chip)/],
  };
  for (const [file, ok] of Object.entries(allowed)) {
    const css = read(file);
    const body = (file === "styles.css" ? css.slice(css.indexOf("* { box-sizing")) : css)
      .replace(/\/\*[\s\S]*?\*\//g, "");
    // Walk rule by rule: selector text up to "{", then the declarations.
    const rules = [...body.matchAll(/([^{}]+)\{([^{}]*)\}/g)];
    const bad = [];
    for (const [, sel, decl] of rules) {
      if (!/#[0-9a-f]{3,8}\b|rgba?\(/i.test(decl)) continue;
      const first = sel.trim().split(/\s*,\s*/)[0];
      if (/^(\d+%|from|to)$/.test(first)) continue;  // a keyframe step, not a rule
      if (ok.some((re) => re.test(first))) continue;
      bad.push(first);
    }
    assert.deepStrictEqual(bad, [], `${file}: literal colours outside the instrument faces`);
  }
});

test("theme.js stamps a theme before paint, follows a saved choice, and toggles", () => {
  const src = read("js/theme.js");
  function boot(stored, osDark) {
    const store = stored ? { "refrigSim.theme": stored } : {};
    const attrs = {};
    const handlers = {};
    const btn = {
      attrs: {}, title: "",
      setAttribute(k, v) { this.attrs[k] = v; },
      addEventListener(t, f) { handlers[t] = f; },
    };
    const sandbox = {
      localStorage: {
        getItem: (k) => (k in store ? store[k] : null),
        setItem: (k, v) => { store[k] = String(v); },
      },
      document: {
        documentElement: {
          setAttribute(k, v) { attrs[k] = v; },
          getAttribute(k) { return attrs[k] || null; },
        },
        getElementById: (id) => (id === "themeToggle" ? btn : null),
        readyState: "complete",
        addEventListener() {},
      },
      matchMedia: () => ({ matches: osDark, addEventListener() {} }),
    };
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(src, sandbox, { filename: "js/theme.js" });
    return { attrs, store, btn, click: () => handlers.click() };
  }

  // Nothing saved: the OS decides, light when it has no opinion.
  assert.strictEqual(boot(null, false).attrs["data-theme"], "light");
  assert.strictEqual(boot(null, true).attrs["data-theme"], "dark");
  // A saved choice beats the OS.
  assert.strictEqual(boot("light", true).attrs["data-theme"], "light");
  assert.strictEqual(boot("dark", false).attrs["data-theme"], "dark");

  // The switch flips the theme, remembers it, and reports its state.
  const t = boot(null, false);
  assert.strictEqual(t.btn.attrs["aria-pressed"], "false");
  t.click();
  assert.strictEqual(t.attrs["data-theme"], "dark");
  assert.strictEqual(t.store["refrigSim.theme"], "dark");
  assert.strictEqual(t.btn.attrs["aria-pressed"], "true");
  t.click();
  assert.strictEqual(t.attrs["data-theme"], "light");
  assert.strictEqual(t.store["refrigSim.theme"], "light");
});
