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

/* ---- Rendering: the loop ------------------------------------------------ */
function slotHtml(index) {
  return `<span class="drop-slot" data-slot="${index}" aria-hidden="true"></span>`;
}

function cardHtml(i, opts) {
  const id = BUILD.seq[i];
  const c = comp(id);
  if (!c) return "";
  const sev = opts.sev || null;
  const selected = BUILD.selected === i;
  const flash = BUILD.flash && BUILD.flash.kind === "loop" && BUILD.flash.key === i;
  const fixed = i === 0;
  const cls = [
    fixed ? "loop-node-card is-anchor-fixed" : (opts.node ? "loop-node-card" : "loop-card"),
    sev ? "sev-" + sev : "",
    selected ? "is-selected" : "",
    flash ? "is-flash" : "",
  ].filter(Boolean).join(" ");

  const sub = fixed
    ? "fixed start of the loop"
    : (opts.node ? "main component" : (opts.zoneLabel || "not in a recognised run"));

  const flagged = sev === "error" || sev === "warning"
    ? `<span class="card-flag ${sev}">${sev === "error" ? "Error" : "Check"}</span>` : "";

  const tools = fixed ? "" : `
      <span class="card-tools">
        <button type="button" class="card-tool" data-up="${i}" data-fk="up:${i}"
                title="Move ${esc(c.label)} earlier in the flow"
                aria-label="Move ${esc(c.label)} earlier in the flow"${i <= 1 ? " disabled" : ""}>▲</button>
        <button type="button" class="card-tool" data-down="${i}" data-fk="down:${i}"
                title="Move ${esc(c.label)} later in the flow"
                aria-label="Move ${esc(c.label)} later in the flow"${i >= BUILD.seq.length - 1 ? " disabled" : ""}>▼</button>
        <button type="button" class="card-tool is-remove" data-remove="${i}" data-fk="rm:${i}"
                title="Remove ${esc(c.label)} from the loop"
                aria-label="Remove ${esc(c.label)} from the loop">×</button>
      </span>`;

  return `<div class="${cls}" data-card="${i}"${fixed ? "" : ' draggable="true"'}>
      <button type="button" class="card-main" data-detail="${i}" data-fk="card:${i}"
              aria-pressed="${selected ? "true" : "false"}">
        <span class="card-icon" aria-hidden="true">${esc(c.icon)}</span>
        <span class="card-text">
          <span class="card-label">${esc(c.label)}</span>
          <span class="card-sub">${esc(sub)}</span>
        </span>
      </button>
      ${flagged}${tools}
    </div>`;
}

function runHtml(row, worst) {
  const z = row.zone ? RC.ZONES[row.zone] : null;
  const items = [];
  for (let i = row.from; i < row.to; i++) {
    items.push(slotHtml(i));
    items.push(cardHtml(i, { sev: worst[i], zoneLabel: z ? "in the " + z.label : "" }));
  }
  items.push(slotHtml(row.to));

  const empty = row.to <= row.from;
  return `<div class="loop-run ${row.zone ? "run-" + row.zone : "run-none"}">
      <div class="loop-run-head">
        <span class="loop-run-name">${z ? esc(z.label) : "components in this loop"}</span>
        ${z ? `<span class="loop-run-desc">${esc(z.desc)}</span>` : ""}
      </div>
      <div class="loop-run-body">
        ${items.join("")}
        ${empty ? `<span class="loop-run-empty">nothing fitted here — the refrigerant runs straight through</span>` : ""}
      </div>
    </div>`;
}

function renderLoop(res) {
  const host = document.getElementById("buildLoop");
  const zm = res.zones;
  const plan = loopPlan(BUILD.seq, zm);
  const worst = severityByIndex(res);

  document.getElementById("buildCount").textContent =
    BUILD.seq.length === 1 ? "compressor only" : BUILD.seq.length + " components";

  if (plan.empty) {
    host.innerHTML = `<p class="loop-empty">The loop is empty. Add a compressor from the
      palette to start the circuit — every circuit is read from the compressor round.</p>`;
    return;
  }

  /* The runs only mean something once the engine can tell them apart, so an
     out-of-order circuit is drawn plain rather than coloured with a guess. */
  const note = plan.unzoned ? `<p class="loop-note"><b>The runs are not coloured yet.</b>
    The four main components — compressor, condenser, metering device, evaporator — have to be
    in flow order before there is a discharge line, a liquid line and a suction line to colour.
    Put them in that order and the runs will appear.</p>` : "";

  const rows = plan.rows.map((row) => row.kind === "node"
    ? `<div class="loop-node">${cardHtml(row.i, { node: true, sev: worst[row.i] })}</div>`
    : runHtml(row, worst)).join("");

  host.innerHTML = `${note}
    <div class="loop${plan.unzoned ? " is-unzoned" : ""}" id="loopTrack">
      <span class="loop-return" aria-hidden="true"></span>
      <span class="loop-return-tag" aria-hidden="true">back to the compressor</span>
      ${rows}
    </div>`;
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

/* A drop lands in a slot. Cards are targets too, so that dropping onto the
   left or right half of a component means "before" or "after" it — which is
   what people expect, and it makes the targets far bigger than a 26px gap. */
function slotFor(e) {
  const el = e.target.closest ? e.target.closest(".drop-slot, .loop-card, .loop-node-card, .loop-run-body") : null;
  if (!el) return null;
  if (el.classList.contains("drop-slot")) return el;
  if (el.classList.contains("loop-run-body")) return el.querySelector(".drop-slot");
  const rect = el.getBoundingClientRect();
  const before = e.clientX < rect.left + rect.width / 2;

  if (el.classList.contains("loop-node-card")) {
    const node = el.closest(".loop-node");
    const prev = node && node.previousElementSibling;
    const next = node && node.nextElementSibling;
    const run = before ? (prev || next) : (next || prev);
    if (!run || !run.classList.contains("loop-run")) return null;
    const slots = run.querySelectorAll(".drop-slot");
    if (!slots.length) return null;
    return run === prev ? slots[slots.length - 1] : slots[0];
  }

  const cand = before ? el.previousElementSibling : el.nextElementSibling;
  if (cand && cand.classList.contains("drop-slot")) return cand;
  const parent = el.closest(".loop-run-body");
  return parent ? parent.querySelector(".drop-slot") : null;
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
});
