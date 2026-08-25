/* =========================================================================
   System builder UI — the workbench around RefrigCircuit.

   The engine in js/circuit.js knows all the refrigeration; this file knows
   nothing about it beyond the shape of what it returns. Every judgement on
   screen — what is wrong, where a part belongs, what the refrigerant is
   doing — comes from the engine, so the two can never drift apart.

   The one design decision worth stating: the loop is drawn as a closed
   circuit, not a list. A learner who reads a circuit as a list of parts will
   never work out why an accessory belongs where it does; a learner who
   follows the refrigerant round will. So the sequence is rendered as four
   coloured runs of pipe between the four anchors, with a return spine that
   closes it back into the compressor. Browser-only, like js/service-ui.js.
   ========================================================================= */
"use strict";

const RC = RefrigCircuit;
const BUILD_KEY = "refrigSim.build.v1";

const BUILD = {
  seq: ["compressor"],
  scenario: "free",
  selected: null,     // index into seq of the component shown in the detail panel
  explain: false,
  flash: null,        // {kind:"loop"|"palette", key} — what the last issue click pointed at
  focusKey: null,     // control to restore focus to after a re-render (keyboard editing)
};

/* Which drag is in flight. dataTransfer is unreadable during dragover in
   most browsers, so the payload has to live here as well. */
let DRAG = null;

const comp = (id) => RC.COMPONENTS[id] || null;
const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const sentence = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

/* ---- Persistence --------------------------------------------------------
   A half-built circuit is real work. Storage can throw (private browsing,
   quota, a locked-down college SOE), and a builder that dies because it
   cannot save is worse than one that quietly forgets. */
function loadSaved() {
  let raw = null;
  try { raw = localStorage.getItem(BUILD_KEY); } catch (e) { return; }
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data && Array.isArray(data.seq)) BUILD.seq = data.seq.filter(comp);
    if (data && typeof data.scenario === "string") BUILD.scenario = data.scenario;
  } catch (e) { /* corrupt entry: start clean rather than fail to load */ }
  normalise();
}

function save() {
  try {
    localStorage.setItem(BUILD_KEY, JSON.stringify({ seq: BUILD.seq, scenario: BUILD.scenario }));
  } catch (e) { /* nothing to do about it, and nothing worth interrupting for */ }
}

/* The compressor is the fixed reading point of the circuit, so the sequence
   always starts there — including after a load of something odd. */
function normalise() {
  const i = BUILD.seq.indexOf("compressor");
  if (i < 0) BUILD.seq.unshift("compressor");
  else if (i > 0) BUILD.seq.splice(0, 0, BUILD.seq.splice(i, 1)[0]);
  if (BUILD.selected != null && (BUILD.selected < 0 || BUILD.selected >= BUILD.seq.length)) {
    BUILD.selected = null;
  }
}

/* ---- Edits --------------------------------------------------------------
   Index 0 is the compressor and is not editable; every mutation guards it
   rather than relying on the buttons being absent. */
function insertAt(id, index) {
  if (!comp(id)) return;
  const at = Math.max(1, Math.min(index, BUILD.seq.length));
  BUILD.seq.splice(at, 0, id);
  BUILD.selected = at;
  commit();
}

function removeAt(i) {
  if (i <= 0 || i >= BUILD.seq.length) return;
  BUILD.seq.splice(i, 1);
  BUILD.selected = null;
  commit();
}

/* `to` is a slot index read off the loop before anything moved, so once the
   component is lifted out every later slot has shifted down by one. */
function moveTo(from, to) {
  if (from <= 0 || from >= BUILD.seq.length) return;
  const id = BUILD.seq.splice(from, 1)[0];
  let at = to > from ? to - 1 : to;
  at = Math.max(1, Math.min(at, BUILD.seq.length));
  BUILD.seq.splice(at, 0, id);
  BUILD.selected = at;
  commit();
}

function nudge(i, dir) {
  const j = i + dir;
  if (i <= 0 || j <= 0 || j >= BUILD.seq.length) return;
  const [id] = BUILD.seq.splice(i, 1);
  BUILD.seq.splice(j, 0, id);
  BUILD.selected = j;
  BUILD.focusKey = (dir < 0 ? "up:" : "down:") + j;
  commit();
}

function clearAll() {
  BUILD.seq = ["compressor"];
  BUILD.selected = null;
  BUILD.flash = null;
  commit();
}

function commit() {
  normalise();
  save();
  render();
}

/* ---- Reading the engine ------------------------------------------------- */
function result() {
  return BUILD.scenario === "free"
    ? RC.analyse(BUILD.seq)
    : RC.grade(BUILD.seq, BUILD.scenario);
}

/* Worst severity attached to each placed component, so a card can carry its
   own flag instead of making the learner match names by eye. */
function severityByIndex(res) {
  const rank = { error: 3, warning: 2, tip: 1 };
  const worst = {};
  res.issues.forEach((it) => {
    if (!it.component) return;
    const i = BUILD.seq.indexOf(it.component);
    if (i < 0) return;
    if (!worst[i] || rank[it.severity] > rank[worst[i]]) worst[i] = it.severity;
  });
  return worst;
}

/* ---- Loop plan ----------------------------------------------------------
   Turns the flat sequence plus the engine's zone map into the rows the loop
   is drawn from. Every index in the sequence lands in exactly one row, so a
   component can never be silently dropped from the drawing — including the
   duplicates the engine is in the middle of complaining about. */
function loopPlan(seq, zm) {
  const n = seq.length;
  const rows = [];
  if (!n) return { rows, empty: true, unzoned: !zm };

  if (!zm) {
    let from = 0;
    if (seq[0] === "compressor") { rows.push({ kind: "node", i: 0 }); from = 1; }
    rows.push({ kind: "run", zone: null, from, to: n });
    return { rows, unzoned: true };
  }

  // Defensive: with the compressor forced to index 0 this never fires, but a
  // row is cheaper than a lost component.
  if (zm.iComp > 0) rows.push({ kind: "run", zone: "suction", from: 0, to: zm.iComp });

  [[zm.iComp, "discharge", zm.iCond],
   [zm.iCond, "liquid", zm.iMet],
   [zm.iMet, "distrib", zm.iEvap],
   [zm.iEvap, "suction", n]].forEach(([node, zone, next]) => {
    rows.push({ kind: "node", i: node });
    rows.push({ kind: "run", zone, from: node + 1, to: next });
  });
  return { rows, unzoned: false };
}

/* ---- Rendering: palette ------------------------------------------------- */
function renderPalette() {
  const groups = new Map();
  Object.keys(RC.COMPONENTS).forEach((id) => {
    const c = RC.COMPONENTS[id];
    if (!groups.has(c.group)) groups.set(c.group, []);
    groups.get(c.group).push(id);
  });

  const flashId = BUILD.flash && BUILD.flash.kind === "palette" ? BUILD.flash.key : null;
  const html = [...groups.entries()].map(([group, ids]) => `
    <div class="palette-group">
      <h3>${esc(group)}</h3>
      <div class="palette-items">
        ${ids.map((id) => {
          const c = RC.COMPONENTS[id];
          return `<button type="button" class="palette-item${id === flashId ? " is-flash" : ""}"
                    draggable="true" data-add="${esc(id)}" data-fk="pal:${esc(id)}"
                    title="Add ${esc(c.label)} to the loop">
            <span class="pi-icon" aria-hidden="true">${esc(c.icon)}</span>
            <span class="pi-label">${esc(c.label)}</span>
            <span class="pi-add" aria-hidden="true">+</span>
          </button>`;
        }).join("")}
      </div>
    </div>`).join("");

  document.getElementById("buildPalette").innerHTML = html;
}

/* ---- Rendering: the loop ------------------------------------------------
   The circuit is DRAWN, not listed. Four anchors sit at the corners of a
   rectangle, the four runs of pipe are the four sides, and every accessory
   sits on the run it is piped into — which is the whole point: a learner who
   reads a circuit as a list never works out why an accessory belongs where it
   does, and one who follows the refrigerant round the drawing does.

   The pipes, run names and the high/low side split are drawn in SVG; the
   components and the drop targets are HTML on top of it, so dragging,
   keyboard editing and focus all keep working exactly as they do anywhere
   else on the page. Geometry is computed once, in loopGeometry(), and both
   layers read the same numbers. */
const DRAW = {
  pad: 24,
  anchorW: 150, anchorH: 64,
  chipW: 142, chipH: 44,
  gap: 14,
  /* Room left between two parts on the same run: enough for the flow arrow
     that sits in the join, which is also the drop target. */
  join: 30,
  minSpanH: 480, minSpanV: 268,
};

/* Which edge of the rectangle each run is drawn on, in flow order, and which
   way the refrigerant is travelling along it. */
const EDGES = [
  { zone: "discharge", from: 0, to: 1, axis: "x", dir: "right" },
  { zone: "liquid",    from: 1, to: 2, axis: "y", dir: "down" },
  { zone: "distrib",   from: 2, to: 3, axis: "x", dir: "left" },
  { zone: "suction",   from: 3, to: 0, axis: "y", dir: "up" },
];

/* Split the sequence into what sits at each corner and what sits on each run.
   With the four anchors in flow order the engine's zone map decides it; until
   then there are no named runs, so the parts are simply spread round the
   rectangle in the order they were placed — the drawing still shows a loop,
   it just cannot say which run is which. */
function loopEdges(seq, zm) {
  if (zm) {
    return {
      corners: [zm.iComp, zm.iCond, zm.iMet, zm.iEvap],
      runs: [
        range(zm.iComp + 1, zm.iCond),
        range(zm.iCond + 1, zm.iMet),
        range(zm.iMet + 1, zm.iEvap),
        range(zm.iEvap + 1, seq.length),
      ],
      zoned: true,
    };
  }
  const rest = range(1, seq.length);
  const per = Math.ceil(rest.length / 4);
  const runs = [0, 1, 2, 3].map((k) => rest.slice(k * per, (k + 1) * per));
  /* The last run has to end where the loop closes, so its trailing slot is
     the end of the sequence whatever the chunking did. */
  return { corners: [0, null, null, null], runs, zoned: false };
}

function range(from, to) {
  const out = [];
  for (let i = from; i < to; i++) out.push(i);
  return out;
}

function loopGeometry(seq, zm) {
  const D = DRAW;
  const { corners, runs, zoned } = loopEdges(seq, zm);

  /* The four main components are drawn as bigger boxes wherever they are —
     including while they are still in the wrong order — so the spacing has to
     be worked out from the real size of each part, not from an average. */
  const isBig = (i) => { const c = comp(seq[i]); return !!(c && c.anchor); };
  const sizeOf = (i, horiz) => isBig(i)
    ? (horiz ? D.anchorW : D.anchorH)
    : (horiz ? D.chipW : D.chipH);
  const runExtent = (k, horiz) => {
    const n = runs[k].length;
    return n ? runs[k].reduce((a, i) => a + sizeOf(i, horiz), 0) + (n - 1) * D.join : 0;
  };
  const cornerHalf = (k, horiz) => corners[k] == null ? 0 : (horiz ? D.anchorW : D.anchorH) / 2;
  const edgeNeed = (k, horiz) =>
    cornerHalf(EDGES[k].from, horiz) + cornerHalf(EDGES[k].to, horiz) + runExtent(k, horiz) + 2 * D.join;

  const spanH = Math.max(D.minSpanH, edgeNeed(0, true), edgeNeed(2, true));
  const spanV = Math.max(D.minSpanV, edgeNeed(1, false), edgeNeed(3, false));

  const x0 = D.pad + D.anchorW / 2, y0 = D.pad + D.anchorH / 2;
  const x1 = x0 + spanH, y1 = y0 + spanV;
  const pts = [{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }];

  const items = [];   // {i, x, y, big}
  const slots = [];   // {at, x, y, dir}

  corners.forEach((i, k) => {
    if (i != null) items.push({ i, x: pts[k].x, y: pts[k].y, big: true });
  });

  EDGES.forEach((e, k) => {
    const a = pts[e.from], b = pts[e.to];
    const horiz = e.axis === "x";
    const a0 = horiz ? a.x : a.y, b0 = horiz ? b.x : b.y;
    const sign = b0 > a0 ? 1 : -1;
    const start = a0 + sign * (cornerHalf(e.from, horiz) + D.join);
    const stop = b0 - sign * (cornerHalf(e.to, horiz) + D.join);
    const place = (v) => (horiz ? { x: v, y: a.y } : { x: a.x, y: v });
    const list = runs[k];
    const n = list.length;

    /* Where a drop on an empty run lands: immediately after whatever the run
       starts from — its own anchor, or the last part placed before it. */
    const emptyIndex = () => {
      if (corners[k] != null) return corners[k] + 1;
      for (let j = k - 1; j >= 0; j--) {
        if (runs[j].length) return runs[j][runs[j].length - 1] + 1;
        if (corners[j] != null) return corners[j] + 1;
      }
      return 1;
    };

    if (!n) {
      slots.push(Object.assign({ at: emptyIndex(), dir: e.dir }, place((start + stop) / 2)));
      return;
    }

    /* Parts are laid along the run in flow order and the group is centred on
       it, so a run with one part in it reads as that part in the middle of a
       length of pipe rather than crowded up against an anchor. */
    const sizes = list.map((i) => sizeOf(i, horiz));
    const total = runExtent(k, horiz);
    let cursor = (start + stop) / 2 - sign * total / 2;
    list.forEach((i, j) => {
      const centre = cursor + sign * sizes[j] / 2;
      items.push(Object.assign({ i, big: isBig(i) }, place(centre)));
      slots.push(Object.assign({ at: i, dir: e.dir }, place(centre - sign * (sizes[j] / 2 + D.join / 2))));
      if (j === n - 1) {
        slots.push(Object.assign({ at: i + 1, dir: e.dir }, place(centre + sign * (sizes[j] / 2 + D.join / 2))));
      }
      cursor += sign * (sizes[j] + D.join);
    });
  });

  return {
    corners, runs, zoned, pts, spanH, spanV,
    w: x1 + D.anchorW / 2 + D.pad,
    h: y1 + D.anchorH / 2 + D.pad,
    items, slots,
  };
}

/* ---- The drawn layer ---------------------------------------------------- */
function loopSvg(geo) {
  const D = DRAW;
  const [tl, tr, br, bl] = geo.pts;
  const pipe = (a, b, zone) => `
    <line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="pipe-base"/>
    <line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="pipe-flow ${geo.zoned ? "run-" + zone : "run-none"}"/>`;

  /* The run's name, and what the refrigerant actually is along it — the
     second line is the half of the answer a learner is asked for out loud. */
  const runName = (zone, x, y, rotate) => {
    const z = RC.ZONES[zone];
    const state = z.desc.split(",")[0];
    /* Both lines rotate about the same point, so the second line stacks
       alongside the first in the rotated frame instead of on top of it. */
    const t = rotate ? ` transform="rotate(${rotate} ${x} ${y})"` : "";
    return `<g class="run-label"${t}>
      <text x="${x}" y="${y}" class="run-name run-${zone}">${esc(z.label.toUpperCase())}</text>
      <text x="${x}" y="${y + 15}" class="run-state">${esc(state)}</text>
    </g>`;
  };

  const labels = geo.zoned ? `
    <line x1="${tl.x}" y1="${tl.y}" x2="${br.x}" y2="${br.y}" class="side-split"/>
    <text x="${tl.x + geo.spanH * 0.66}" y="${tl.y + geo.spanV * 0.34}" class="side-tag high">HIGH SIDE</text>
    <text x="${tl.x + geo.spanH * 0.34}" y="${tl.y + geo.spanV * 0.70}" class="side-tag low">LOW SIDE</text>
    ${runName("discharge", (tl.x + tr.x) / 2, tl.y + 52)}
    ${runName("liquid", tr.x - (D.chipW / 2 + 22), (tr.y + br.y) / 2, 90)}
    ${runName("distrib", (br.x + bl.x) / 2, br.y - 42)}
    ${runName("suction", bl.x + (D.chipW / 2 + 22), (bl.y + tl.y) / 2, -90)}` : "";

  return `<svg class="loop-svg" viewBox="0 0 ${geo.w} ${geo.h}" width="${geo.w}" height="${geo.h}" aria-hidden="true" focusable="false">
      ${pipe(tl, tr, "discharge")}${pipe(tr, br, "liquid")}${pipe(br, bl, "distrib")}${pipe(bl, tl, "suction")}
      ${labels}
    </svg>`;
}

/* ---- The interactive layer ---------------------------------------------- */
function slotHtml(slot) {
  return `<span class="drop-slot dir-${slot.dir}" data-slot="${slot.at}"
    style="left:${slot.x}px;top:${slot.y}px" aria-hidden="true"></span>`;
}

function chipHtml(item, opts) {
  const i = item.i;
  const id = BUILD.seq[i];
  const c = comp(id);
  if (!c) return "";
  const D = DRAW;
  const sev = opts.sev || null;
  const fixed = i === 0;
  const w = item.big ? D.anchorW : D.chipW;
  const h = item.big ? D.anchorH : D.chipH;
  const cls = [
    "cx", item.big ? "cx-anchor" : "cx-part",
    sev ? "sev-" + sev : "",
    BUILD.selected === i ? "is-selected" : "",
    BUILD.flash && BUILD.flash.kind === "loop" && BUILD.flash.key === i ? "is-flash" : "",
    opts.toolsBelow ? "tools-below" : "",
  ].filter(Boolean).join(" ");

  const where = fixed ? "the fixed start of the loop"
    : opts.zoneLabel ? "in the " + opts.zoneLabel
    : "in this loop";
  const flag = sev === "error" || sev === "warning"
    ? `<span class="cx-flag ${sev}" title="${sev === "error" ? "Error" : "Worth checking"}" aria-hidden="true">!</span>` : "";

  const tools = fixed ? "" : `
    <span class="cx-tools">
      <button type="button" class="card-tool" data-up="${i}" data-fk="up:${i}"
              aria-label="Move ${esc(c.label)} earlier in the flow"${i <= 1 ? " disabled" : ""}>▲</button>
      <button type="button" class="card-tool" data-down="${i}" data-fk="down:${i}"
              aria-label="Move ${esc(c.label)} later in the flow"${i >= BUILD.seq.length - 1 ? " disabled" : ""}>▼</button>
      <button type="button" class="card-tool is-remove" data-remove="${i}" data-fk="rm:${i}"
              aria-label="Remove ${esc(c.label)} from the loop">×</button>
    </span>`;

  return `<div class="${cls}" data-card="${i}"${fixed ? "" : ' draggable="true"'}
      style="left:${item.x - w / 2}px;top:${item.y - h / 2}px;width:${w}px;height:${h}px">
      <button type="button" class="cx-main" data-detail="${i}" data-fk="card:${i}"
              aria-pressed="${BUILD.selected === i ? "true" : "false"}"
              aria-label="${esc(c.label)}, ${esc(where)}${sev ? " — " + (sev === "error" ? "error" : "check this") : ""}">
        <span class="cx-icon" aria-hidden="true">${esc(c.icon)}</span>
        <span class="cx-label">${esc(item.big ? c.label : (c.short || c.label))}</span>
      </button>
      ${flag}${tools}
    </div>`;
}

/* The stage is drawn at its natural size and scaled to whatever width the
   column gives it, so the pipes, the parts and the drop targets can never
   drift apart — and the drawing still fits a laptop screen. */
function fitStage() {
  const wrap = document.getElementById("loopWrap");
  const stage = document.getElementById("loopTrack");
  if (!wrap || !stage || !stage.dataset) return;
  const w = Number(stage.dataset.w) || 0;
  const h = Number(stage.dataset.h) || 0;
  const avail = wrap.clientWidth || 0;
  if (!w || !h || !avail) return;
  /* Grow into a wide column as happily as it shrinks into a narrow one —
     stacked on a laptop or a tablet the drawing gets the whole width. The
     stage scales from its top-left corner, so any room left over after that
     is put back as a margin rather than left hanging off one side. */
  const scale = Math.min(1.25, Math.max(0.5, avail / w));
  stage.style.transform = "scale(" + scale + ")";
  stage.style.marginLeft = Math.max(0, Math.round((avail - w * scale) / 2)) + "px";
  wrap.style.height = Math.round(h * scale) + "px";
}

function renderLoop(res) {
  const host = document.getElementById("buildLoop");
  const zm = res.zones;
  const worst = severityByIndex(res);
  const geo = loopGeometry(BUILD.seq, zm);

  document.getElementById("buildCount").textContent =
    BUILD.seq.length === 1 ? "compressor only" : BUILD.seq.length + " components";

  /* The runs only mean something once the engine can tell them apart, so an
     out-of-order circuit is drawn plain rather than coloured with a guess. */
  const note = geo.zoned ? "" : `<p class="loop-note"><b>The runs are not coloured yet.</b>
    The four main components — compressor, condenser, metering device, evaporator — have to be
    in flow order before there is a discharge line, a liquid line and a suction line to colour.
    Put them in that order and the pipework will come to life.</p>`;

  /* Zone labels for the aria text, keyed by sequence index. */
  const zoneOf = {};
  if (zm) BUILD.seq.forEach((_, i) => { if (zm.zones[i]) zoneOf[i] = RC.ZONES[zm.zones[i]].label; });

  const chips = geo.items
    .slice()
    .sort((a, b) => a.i - b.i)          // DOM order follows the refrigerant
    .map((item) => chipHtml(item, {
      sev: worst[item.i],
      zoneLabel: zoneOf[item.i],
      toolsBelow: Math.abs(item.y - geo.pts[0].y) < 1,
    })).join("");

  host.innerHTML = `${note}
    <div class="loop-wrap" id="loopWrap">
      <div class="loop-stage" id="loopTrack"
           data-w="${geo.w}" data-h="${geo.h}" style="width:${geo.w}px;height:${geo.h}px">
        ${loopSvg(geo)}
        <div class="loop-parts">${geo.slots.map(slotHtml).join("")}${chips}</div>
      </div>
    </div>`;
  fitStage();
}

/* ---- Rendering: analysis ------------------------------------------------ */
const SEV_ORDER = [
  { key: "error", head: "Must fix", word: "Error" },
  { key: "warning", head: "Worth improving", word: "Check this" },
  { key: "tip", head: "Notes from the field", word: "Tip" },
];

function renderAnalysis(res) {
  const briefHost = document.getElementById("buildBrief");
  const sc = res.scenario || null;
  briefHost.innerHTML = sc
    ? `<div class="brief"><h3>${esc(sc.title)}</h3><p>${esc(sc.brief)}</p></div>`
    : "";

  const warns = res.issues.filter((i) => i.severity === RC.SEVERITY.WARN).length;
  const clean = res.ok && warns === 0;
  const tone = !res.ok ? "is-bad" : (warns ? "is-warn" : "is-ok");
  const tag = !res.ok ? "Will not run" : (warns ? "Runs — with notes" : "Correct circuit");

  /* The clean build is the whole point of the exercise, so it gets said
     plainly rather than being left as an absence of complaints. */
  const extra = clean
    ? `<p class="verdict-note">Nothing left to fix and nothing left to improve. Walk it once more
        with <b>Explain this circuit</b> and say out loud what the refrigerant is doing in each
        run — that is the bit that has to be there on the day.</p>`
    : "";
  const note = clean && sc && sc.note ? `<p class="verdict-note">${esc(sc.note)}</p>` : "";

  document.getElementById("buildVerdict").innerHTML = `
    <div class="verdict ${tone}">
      <span class="verdict-tag">${tag}</span>
      <p>${esc(res.verdict)}</p>
      ${note}${extra}
    </div>`;

  const groups = SEV_ORDER.map((g) => {
    const list = res.issues.filter((i) => i.severity === g.key);
    if (!list.length) return "";
    return `<div class="issue-group">
        <h3>${esc(g.head)} (${list.length})</h3>
        <ul class="issue-list">${list.map((it) => issueHtml(it, g.word)).join("")}</ul>
      </div>`;
  }).join("");

  document.getElementById("buildIssues").innerHTML = groups;
}

function issueHtml(it, word) {
  const inner = `<span class="sev">${esc(word)}</span><span class="issue-msg">${esc(it.message)}</span>
    ${it.fix ? `<p class="issue-fix">${esc(it.fix)}</p>` : ""}`;

  if (!it.component) return `<li><div class="issue sev-${it.severity}">${inner}</div></li>`;

  const placed = BUILD.seq.indexOf(it.component) >= 0;
  const c = comp(it.component);
  const where = placed
    ? `Show me the ${esc((c ? c.label : it.component).toLowerCase())} in the loop →`
    : `Find the ${esc((c ? c.label : it.component).toLowerCase())} in the palette →`;
  return `<li><button type="button" class="issue sev-${it.severity}" data-point="${esc(it.component)}">
      ${inner}<p class="issue-where">${where}</p></button></li>`;
}

/* ---- Rendering: component detail ---------------------------------------- */
function renderDetail(res) {
  const host = document.getElementById("buildDetail");
  const i = BUILD.selected;
  const id = i == null ? null : BUILD.seq[i];
  const c = comp(id);

  if (!c) {
    host.innerHTML = `<p class="detail-empty">Click any component in the loop to read what it does,
      where it belongs and what a technician watches out for with it. That is the fastest way to
      learn a circuit: place a part, then read your way around the flow.</p>`;
    return;
  }

  const zm = res.zones;
  const zoneKey = zm && zm.zones[i] ? zm.zones[i] : null;
  const z = zoneKey ? RC.ZONES[zoneKey] : null;
  const isAnchor = !!c.anchor;

  let placement;
  if (isAnchor) {
    placement = `<b>One of the four main components.</b> It is a boundary of the circuit, not
      something that sits in a run — the runs are named by the components either side of them.`;
  } else if (z) {
    placement = `Right now it sits in the <b>${esc(z.label)}</b> — ${esc(z.desc)}.`;
  } else {
    placement = `Where this sits cannot be worked out yet: the four main components are not in
      flow order, so the circuit has no named runs.`;
  }

  const tips = (c.tips || []).length
    ? `<p class="detail-tips-head">In practice</p>
       <ul class="detail-tips">${c.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
    : "";

  host.innerHTML = `
    <div class="detail-head">
      <span class="detail-icon" aria-hidden="true">${esc(c.icon)}</span>
      <div>
        <h3>${esc(c.label)}</h3>
        <span class="detail-group">${esc(c.group)}</span>
      </div>
    </div>
    <p class="detail-why">${esc(c.why)}</p>
    <p class="detail-zone ${zoneKey ? "run-" + zoneKey : ""}">${placement}</p>
    ${tips}`;
}

/* ---- Rendering: explain the circuit -------------------------------------
   A walk round the loop in flow order. This is the thing a learner is asked
   to do out loud in an assessment, so the wording is deliberately the wording
   they should use. */
function renderExplain(res) {
  const panel = document.getElementById("buildExplain");
  const btn = document.getElementById("buildExplainBtn");
  panel.hidden = !BUILD.explain;
  btn.setAttribute("aria-expanded", String(BUILD.explain));
  btn.textContent = BUILD.explain ? "Hide the explanation" : "Explain this circuit";
  if (!BUILD.explain) return;

  const host = document.getElementById("buildExplainBody");
  const zm = res.zones;

  if (!zm) {
    host.innerHTML = `<p class="detail-empty">There is no loop to walk yet. The refrigerant can
      only be followed once the compressor, condenser, metering device and evaporator are all
      present and in flow order — until then there is no high side and no low side to describe.
      Fix that first and this will read the circuit back to you.</p>`;
    return;
  }

  const plan = loopPlan(BUILD.seq, zm);
  const steps = plan.rows.map((row) => {
    if (row.kind === "node") {
      const c = comp(BUILD.seq[row.i]);
      if (!c) return "";
      return `<li class="explain-step">
          <h4>${esc(c.label)}</h4>
          <p>${esc(c.why)}</p>
        </li>`;
    }
    const z = RC.ZONES[row.zone];
    const names = [];
    for (let i = row.from; i < row.to; i++) {
      const c = comp(BUILD.seq[i]);
      if (c) names.push(c.label);
    }
    const fitted = names.length
      ? ` On the way it passes through <b>${names.map(esc).join("</b>, then <b>")}</b>.`
      : " Nothing is fitted in this run — the refrigerant goes straight through.";
    return `<li class="explain-step run-${row.zone}">
        <h4>${esc(z.label)}</h4>
        <p>${esc(sentence(z.desc))}.${fitted}</p>
      </li>`;
  }).join("");

  host.innerHTML = `<ol class="explain-list">${steps}
      <li class="explain-step run-suction">
        <h4>Back to the compressor</h4>
        <p>The suction line returns the vapour to the compressor inlet and the cycle starts
          again. Every circuit you ever meet is this loop, plus accessories.</p>
      </li>
    </ol>`;
}

/* ---- Render ------------------------------------------------------------- */
function render() {
  const pal = document.getElementById("palettePanel");
  if (pal) pal.classList.remove("is-bin");
  const res = result();
  renderPalette();
  renderLoop(res);
  renderAnalysis(res);
  renderDetail(res);
  renderExplain(res);

  /* Editing from the keyboard destroys and rebuilds the button that was
     focused, so put focus back on the equivalent control or the Tab position
     is lost on every move. */
  if (BUILD.focusKey) {
    const el = document.querySelector('[data-fk="' + BUILD.focusKey + '"]')
      || document.querySelector('[data-fk="card:0"]');
    if (el) el.focus();
    BUILD.focusKey = null;
  }
  BUILD.flash = null;
}

/* ---- Pointing at a component from an issue ------------------------------ */
function pointAt(id) {
  const i = BUILD.seq.indexOf(id);
  if (i >= 0) {
    BUILD.selected = i;
    BUILD.flash = { kind: "loop", key: i };
    render();
    const card = document.querySelector('[data-card="' + i + '"]');
    if (card && card.scrollIntoView) card.scrollIntoView({ block: "center", behavior: "smooth" });
    const main = document.querySelector('[data-fk="card:' + i + '"]');
    if (main) main.focus();
    return;
  }
  /* The scenario can ask for something that was never placed — point at the
     palette entry instead of leaving the learner hunting for it. */
  BUILD.flash = { kind: "palette", key: id };
  render();
  const item = document.querySelector('[data-add="' + id + '"]');
  if (item) {
    if (item.scrollIntoView) item.scrollIntoView({ block: "center", behavior: "smooth" });
    item.focus();
  }
}

/* ---- Drag and drop ------------------------------------------------------ */
function clearSlots() {
  document.querySelectorAll(".drop-slot.is-on").forEach((s) => s.classList.remove("is-on"));
}

/* A drop lands in the join it is nearest to. On a drawing that is the only
   rule that behaves the way people expect: you aim at a piece of pipe, not at
   a 26px gap between two boxes, and it works the same whether the run is
   horizontal or vertical. */
function slotFor(e) {
  const slots = document.querySelectorAll(".drop-slot");
  let best = null, bestD = Infinity;
  slots.forEach((s) => {
    const r = s.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const d = dx * dx + dy * dy;
    if (d < bestD) { bestD = d; best = s; }
  });
  return best;
}

function wireDragTargets() {
  const loop = document.getElementById("buildLoop");
  const palette = document.getElementById("palettePanel");

  loop.addEventListener("dragover", (e) => {
    if (!DRAG) return;
    const slot = slotFor(e);
    if (!slot) return;
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = DRAG.kind === "loop" ? "move" : "copy";
    clearSlots();
    slot.classList.add("is-on");
  });

  loop.addEventListener("dragleave", (e) => {
    if (e.relatedTarget && loop.contains(e.relatedTarget)) return;
    clearSlots();
  });

  loop.addEventListener("drop", (e) => {
    if (!DRAG) return;
    const slot = slotFor(e) || document.querySelector(".drop-slot.is-on");
    e.preventDefault();
    clearSlots();
    if (!slot) return;
    const at = Number(slot.dataset.slot);
    const d = DRAG;
    DRAG = null;
    if (d.kind === "palette") insertAt(d.id, at);
    else moveTo(d.index, at);
  });

  /* Dragging a component out of the loop and back onto the palette is the
     natural "I don't want this" gesture; the × button is the same action for
     anyone not using a mouse. */
  palette.addEventListener("dragover", (e) => {
    if (!DRAG || DRAG.kind !== "loop") return;
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
  });
  palette.addEventListener("drop", (e) => {
    if (!DRAG || DRAG.kind !== "loop") return;
    e.preventDefault();
    const d = DRAG;
    DRAG = null;
    palette.classList.remove("is-bin");
    removeAt(d.index);
  });
}

function wireDragSources() {
  document.addEventListener("dragstart", (e) => {
    const t = e.target.closest ? e.target.closest("[data-add], [data-card]") : null;
    if (!t) return;
    if (t.dataset.add) {
      DRAG = { kind: "palette", id: t.dataset.add };
    } else {
      const i = Number(t.dataset.card);
      if (i <= 0) { e.preventDefault(); return; }   // the compressor does not move
      DRAG = { kind: "loop", index: i };
      t.classList.add("is-dragging");
      document.getElementById("palettePanel").classList.add("is-bin");
    }
    const track = document.getElementById("loopTrack");
    if (track) track.classList.add("is-dragging");
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = DRAG.kind === "loop" ? "move" : "copy";
      try { e.dataTransfer.setData("text/plain", DRAG.id || BUILD.seq[DRAG.index]); } catch (err) { /* IE-era quirk */ }
    }
  });

  document.addEventListener("dragend", () => {
    DRAG = null;
    clearSlots();
    document.querySelectorAll(".is-dragging").forEach((el) => el.classList.remove("is-dragging"));
    const p = document.getElementById("palettePanel");
    if (p) p.classList.remove("is-bin");
  });
}

/* ---- Clicks ------------------------------------------------------------- */
function wireClicks() {
  document.addEventListener("click", (e) => {
    const el = e.target.closest ? e.target.closest("[data-add], [data-detail], [data-up], [data-down], [data-remove], [data-point]") : null;
    if (!el) return;
    const d = el.dataset;

    if (d.add !== undefined) { BUILD.focusKey = "pal:" + d.add; insertAt(d.add, BUILD.seq.length); return; }
    if (d.point !== undefined) { pointAt(d.point); return; }
    if (d.up !== undefined) { nudge(Number(d.up), -1); return; }
    if (d.down !== undefined) { nudge(Number(d.down), 1); return; }
    if (d.remove !== undefined) {
      const i = Number(d.remove);
      BUILD.focusKey = "rm:" + Math.max(1, Math.min(i, BUILD.seq.length - 2));
      removeAt(i);
      return;
    }
    if (d.detail !== undefined) {
      const i = Number(d.detail);
      BUILD.selected = BUILD.selected === i ? null : i;
      BUILD.focusKey = "card:" + i;
      render();
    }
  });
}

/* ---- Boot --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("buildScenario");
  sel.innerHTML = `<option value="free">Free build — no brief</option>` +
    RC.SCENARIOS.map((s) => `<option value="${esc(s.id)}">${esc(s.title)}</option>`).join("");

  loadSaved();
  if (!RC.SCENARIOS.some((s) => s.id === BUILD.scenario)) BUILD.scenario = "free";
  sel.value = BUILD.scenario;

  sel.addEventListener("change", () => { BUILD.scenario = sel.value; save(); render(); });
  document.getElementById("buildClearBtn").addEventListener("click", clearAll);
  document.getElementById("buildExplainBtn").addEventListener("click", () => {
    BUILD.explain = !BUILD.explain;
    render();
  });

  wireClicks();
  wireDragSources();
  wireDragTargets();
  render();

  /* The drawing is scaled to the column it is in, so it has to be re-fitted
     when that column changes width. */
  if (window.addEventListener) {
    let pending = null;
    window.addEventListener("resize", () => {
      if (pending) clearTimeout(pending);
      pending = setTimeout(fitStage, 120);
    });
  }
});
