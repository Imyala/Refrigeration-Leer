/* =========================================================================
   Service Bay UI — renders the interactive rig (two stem-type service
   valves, gauge manifold, hoses) and wires every cap, hose, spindle and
   purge action to the RefrigService state machine. Browser-only.
   ========================================================================= */
"use strict";

const SB = {
  state: RefrigService.newState(),
  refrigerant: "R134a",
  pressures: null,
  phase: "hookup",          // hookup → read → packup → done
  log: [],
  readingsSeen: false,
  hoseNotes: {},            // verdict per hose set tried, kept on its card
  hosesOpen: true,          // the four cards, or the compact "what's fitted" line
  openWhy: {},              // which step's "why" the learner has expanded
  hoseFocus: false,         // move focus with the cards when they fold away
  stepSeen: {},             // id -> outOfOrder, for steps already earned
};

const SB_COL = {
  vap: "#4fc3f7", hot: "#ff5a3c", liq: "#f5a623", txt: "#e7eef5",
  mut: "#8aa0b3", line: "#3a5068", good: "#6fe0a0", bad: "#e0405a",
};

function sbComputePressures() {
  const c = RefrigModel.deriveAt(SB.refrigerant, 100, 100, "none");
  SB.pressures = { pLow: c.pLow, pHigh: c.pHigh };
}

function sbDo(action) {
  const res = RefrigService.act(SB.state, action);
  SB.log.unshift({ kind: res.kind, msg: res.msg });
  if (SB.log.length > 30) SB.log.pop();

  /* The log scrolls; a hose verdict has to stay next to the hose it judges. */
  if (action.type === "hoseSet") {
    SB.hoseNotes[action.set] = { kind: res.kind, msg: res.msg };
    if (SB.state.hoseSet) { SB.hosesOpen = false; SB.hoseFocus = true; }
  }

  /* sequenceReport() reads the machine as it stands, so back-seating a valve
     during pack-up un-ticks a step the learner has already been graded on.
     The grade is for the hook-up: once a step is done it stays done, and it
     keeps the verdict it earned at the moment it happened. */
  RefrigService.sequenceReport(SB.state).steps.forEach(st => {
    if (st.complete && !(st.id in SB.stepSeen)) SB.stepSeen[st.id] = st.outOfOrder;
  });

  const check = RefrigService.checklist(SB.state);
  if (SB.phase === "hookup" && check.readings) {
    SB.phase = "read";
    SB.readingsSeen = true;
    SB.log.unshift({ kind: "ok", msg: "Readings live on both gauges — well done. Note them down, then pack up: back-seat both valves, hoses off, every cap back on." });
  } else if (SB.phase === "read" && !check.readings) {
    SB.phase = "packup";
  }
  if ((SB.phase === "packup" || SB.phase === "read") && SB.readingsSeen && RefrigService.packedUp(SB.state)) {
    SB.phase = "done";
  }
  sbRender();
}

function sbReset() {
  SB.state = RefrigService.newState();
  SB.phase = "hookup";
  SB.log = [];
  SB.readingsSeen = false;
  SB.hoseNotes = {};
  SB.hosesOpen = true;
  SB.openWhy = {};
  SB.hoseFocus = false;
  SB.stepSeen = {};
  sbComputePressures();
  sbRender();
}

/* ---- SVG scene -------------------------------------------------------------- */
function sbValveSvg(side, x) {
  const v = SB.state.valves[side];
  const col = side === "suction" ? SB_COL.vap : SB_COL.hot;
  const label = side === "suction" ? "SUCTION SERVICE VALVE" : "DISCHARGE SERVICE VALVE";
  const stateTxt = { back: "BACK-SEATED", crack: "CRACKED", front: "FRONT-SEATED" }[v.spindle];
  const leak = SB.state.leaks[side];

  return `
  <g data-side="${side}">
    <line x1="${x - 95}" y1="120" x2="${x + 95}" y2="120" stroke="${col}" stroke-width="7" opacity=".85"/>
    <rect x="${x - 34}" y="96" width="68" height="48" rx="8" fill="#16212e" stroke="${col}" stroke-width="2.5"/>
    <text x="${x}" y="86" fill="${SB_COL.txt}" font-size="10" text-anchor="middle" letter-spacing="1">${label}</text>

    <!-- spindle stem + cap -->
    <rect x="${x - 6}" y="${v.spindle === "back" ? 62 : v.spindle === "crack" ? 68 : 74}" width="12" height="${v.spindle === "back" ? 34 : v.spindle === "crack" ? 28 : 22}" fill="${SB_COL.mut}"/>
    ${v.spindleCap
      ? `<g class="sb-click" data-act="spindleCap" data-side="${side}"><polygon points="${x - 16},62 ${x - 8},52 ${x + 8},52 ${x + 16},62 ${x + 8},72 ${x - 8},72" fill="#22303f" stroke="${SB_COL.mut}" stroke-width="2"/><title>Spindle cap — click to remove</title></g>`
      : `<g class="sb-click" data-act="spindle-cycle" data-side="${side}"><circle cx="${x}" cy="58" r="11" fill="none" stroke="${SB_COL.txt}" stroke-width="2.5"/><line x1="${x - 8}" y1="58" x2="${x + 8}" y2="58" stroke="${SB_COL.txt}" stroke-width="2.5" transform="rotate(${v.spindle === "back" ? 0 : v.spindle === "crack" ? 45 : 90} ${x} 58)"/><title>Spindle stem — click to turn</title></g>`}

    <!-- service port + cap -->
    <rect x="${x - 8}" y="144" width="16" height="18" fill="#22303f" stroke="${col}" stroke-width="2"/>
    ${v.portCap
      ? `<g class="sb-click" data-act="portCap" data-side="${side}"><rect x="${x - 11}" y="160" width="22" height="12" rx="3" fill="#22303f" stroke="${SB_COL.mut}" stroke-width="2"/><title>Gauge-port cap — click to remove</title></g>`
      : v.hose ? "" : `<g class="sb-click" data-act="hose" data-side="${side}"><circle cx="${x}" cy="168" r="8" fill="none" stroke="${col}" stroke-width="2" stroke-dasharray="3 2"/><title>Open port — click to connect the hose</title></g>`}

    ${leak ? `<g class="sb-hiss">
      <path d="M ${x + 12} 166 q 8 -4 16 -2" stroke="${SB_COL.bad}" stroke-width="2" fill="none"/>
      <path d="M ${x + 12} 172 q 10 0 18 4" stroke="${SB_COL.bad}" stroke-width="2" fill="none"/>
      <text x="${x + 40}" y="174" fill="${SB_COL.bad}" font-size="10">HISSSS…</text></g>` : ""}

    <text x="${x}" y="196" fill="${v.spindle === "back" ? SB_COL.mut : v.spindle === "crack" ? SB_COL.good : SB_COL.liq}" font-size="10" text-anchor="middle" font-weight="700">${stateTxt}</text>
  </g>`;
}

function sbHoseSvg(side, portX, manifoldX) {
  const v = SB.state.valves[side];
  if (!v.hose) return "";
  const col = side === "suction" ? SB_COL.vap : SB_COL.hot;
  return `
    <path d="M ${portX} 170 C ${portX} 250, ${manifoldX} 260, ${manifoldX} 316" fill="none" stroke="${col}" stroke-width="6" stroke-linecap="round" opacity=".9"/>
    ${v.purged ? "" : `<path d="M ${portX} 170 C ${portX} 250, ${manifoldX} 260, ${manifoldX} 316" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 8" opacity=".55"><title>Air still in this hose — purge it</title></path>
    <text x="${(portX + manifoldX) / 2 + (side === "suction" ? -8 : 8)}" y="250" fill="${SB_COL.mut}" font-size="9" text-anchor="middle">air in hose</text>`}`;
}

function sbRenderScene() {
  const svg = document.getElementById("bayScene");
  const s = SB.state;
  const base = RefrigData.REFRIGERANTS[SB.refrigerant];

  svg.innerHTML = `
    <rect x="255" y="60" width="150" height="70" rx="10" fill="#16212e" stroke="${SB_COL.line}" stroke-width="2"/>
    <text x="330" y="90" fill="${SB_COL.txt}" font-size="11" text-anchor="middle">COMPRESSOR</text>
    <text x="330" y="108" fill="${s.tripped ? SB_COL.bad : SB_COL.good}" font-size="10" text-anchor="middle" font-weight="700">${s.tripped ? "TRIPPED — HP CUT-OUT" : "RUNNING"}</text>
    ${sbValveSvg("suction", 130)}
    ${sbValveSvg("discharge", 530)}
    ${sbHoseSvg("suction", 130, 240)}
    ${sbHoseSvg("discharge", 530, 420)}
    <rect x="205" y="316" width="250" height="52" rx="10" fill="#16212e" stroke="${SB_COL.line}" stroke-width="2"/>
    <text x="330" y="341" fill="${SB_COL.mut}" font-size="10" text-anchor="middle" letter-spacing="1">GAUGE MANIFOLD</text>
    <text x="330" y="358" fill="${s.zeroChecked ? SB_COL.good : SB_COL.mut}" font-size="9.5" text-anchor="middle">${s.zeroChecked ? "✓ gauges proved at zero" : "gauges not proved yet"}</text>`;

  // gauges (reuses the generic dial from gauges.js)
  const step = { kPa: 200, bar: 2, psi: 50 }[RefrigUnits.prefs.p];
  const niceMax = (bar) => Math.max(step, Math.ceil(RefrigUnits.barTo(bar) / step) * step);
  const rLow = RefrigService.reading(s, "suction", SB.pressures);
  const rHigh = RefrigService.reading(s, "discharge", SB.pressures);

  drawGauge(svg, 240, 258, 52, {
    base, pAbs: rLow == null ? RefrigUnits.ATM_BAR : rLow, color: SB_COL.vap, title: "LOW",
    max: niceMax(base.pLow * 2.6 - RefrigUnits.ATM_BAR),
  });
  drawGauge(svg, 420, 258, 52, {
    base, pAbs: rHigh == null ? RefrigUnits.ATM_BAR : rHigh, color: SB_COL.hot, title: "HIGH",
    max: niceMax(base.pHigh * 1.9 - RefrigUnits.ATM_BAR),
  });

  const add = (x, txt, col) => {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", x); t.setAttribute("y", 392);
    t.setAttribute("fill", col); t.setAttribute("font-size", "11");
    t.setAttribute("font-weight", "700"); t.setAttribute("text-anchor", "middle");
    t.textContent = txt;
    svg.appendChild(t);
  };
  add(240, rLow == null ? "no reading" : `${RefrigUnits.fmtPGauge(rLow)} · sat ${RefrigUnits.fmtT(RefrigModel.satTemp(base, rLow))}`, rLow == null ? SB_COL.mut : SB_COL.txt);
  add(420, rHigh == null ? "no reading" : `${RefrigUnits.fmtPGauge(rHigh)} · sat ${RefrigUnits.fmtT(RefrigModel.satTemp(base, rHigh))}`, rHigh == null ? SB_COL.mut : SB_COL.txt);

  // clickable overlays
  svg.querySelectorAll(".sb-click").forEach(g => {
    g.addEventListener("click", () => {
      const side = g.dataset.side;
      const act = g.dataset.act;
      if (act === "spindle-cycle") {
        const order = { back: "crack", crack: "front", front: "back" };
        sbDo({ type: "spindle", side, pos: order[SB.state.valves[side].spindle] });
      } else {
        sbDo({ type: act, side });
      }
    });
  });
}

/* ---- Hose selection ----------------------------------------------------------
   The job starts at the van, not at the machine. Every set the learner tries
   keeps its verdict on its own card: the coaching log scrolls away, and the
   comparison between the four sets is the lesson — the three wrong ones are
   each wrong for a different reason worth carrying to the next job. */

/* Presentation order, deliberately not "right answer first". Anything the
   engine adds later still gets shown, on the end. */
const SB_HOSE_ORDER = ["perished", "correct", "lowRated", "noLowLoss"];

function sbHoseKeys() {
  const all = Object.keys(RefrigService.HOSE_SETS);
  return SB_HOSE_ORDER.filter(k => all.includes(k)).concat(all.filter(k => !SB_HOSE_ORDER.includes(k)));
}

function sbRenderHoses() {
  const el = document.getElementById("bayHoses");
  if (!el) return;
  const sets = RefrigService.HOSE_SETS;
  const chosen = SB.state.hoseSet;

  /* Once a set is on the manifold the four cards are just clutter in front of
     the rig — but the verdict has to stay readable, right or wrong. */
  if (chosen && !SB.hosesOpen) {
    const note = SB.hoseNotes[chosen];
    const kind = note && note.kind === "warn" ? "warn" : "ok";
    el.innerHTML = `
      <div class="panel-head">
        <h2>Hoses</h2>
        <span class="hint">step 1 — chosen</span>
      </div>
      <p class="sb-hose-summary ${kind}"><b>On the manifold:</b> ${sets[chosen].label}
        <span class="sb-hose-verdict ${kind}">${kind === "warn" ? "compromised — see below" : "correct for this job"}</span></p>
      ${note ? `<p class="sb-hose-note ${note.kind}">${note.msg}</p>` : ""}
      <div class="quiz-controls">
        <button type="button" class="btn btn-ghost" id="sbHosesOpenBtn">Change hoses</button>
      </div>`;
    const reopen = document.getElementById("sbHosesOpenBtn");
    reopen.addEventListener("click", () => { SB.hosesOpen = true; sbRender(); });
    if (SB.hoseFocus) { SB.hoseFocus = false; if (reopen.focus) reopen.focus(); }
    return;
  }

  const card = (key) => {
    const set = sets[key];
    const tried = SB.hoseNotes[key];
    const on = chosen === key;
    const tone = on ? (tried && tried.kind === "warn" ? "warn" : "ok") : "bad";
    const verdict = on
      ? (tried && tried.kind === "warn" ? "Fitted — but compromised" : "Fitted — correct for this job")
      : tried ? "Refused — left on the van" : "";
    return `
      <div class="sb-hose-card ${on ? "on" : tried ? "rejected" : ""}">
        <button type="button" class="sb-hose-pick" data-set="${key}" aria-pressed="${on ? "true" : "false"}">
          <span class="sb-hose-label">${set.label}</span>
          <span class="sb-hose-detail">${set.detail}</span>
        </button>
        ${verdict ? `<p class="sb-hose-verdict ${tone}">${verdict}</p>` : ""}
        ${tried ? `<p class="sb-hose-note ${tone}">${tried.msg}</p>` : ""}
      </div>`;
  };

  el.innerHTML = `
    <div class="panel-head">
      <h2>Hoses off the van</h2>
      <span class="hint">step 1 — before anything is connected</span>
    </div>
    <p class="sb-hose-intro">Four sets in the back of the van. Pick the one you would actually
      put on this machine — rated for its pressures, sound, with low-loss ends and the right fittings.</p>
    <div class="sb-hose-grid">${sbHoseKeys().map(card).join("")}</div>`;

  el.querySelectorAll(".sb-hose-pick").forEach(b =>
    b.addEventListener("click", () => sbDo({ type: "hoseSet", set: b.dataset.set })));
}

/* ---- The taught order, graded live ------------------------------------------
   Anyone can get a needle to move; doing it in the order that keeps air out of
   the machine and refrigerant out of the workshop is the skill being taught, so
   the panel marks not just what is done but what was done out of turn, and what
   that costs. `why` sits behind a native <details> so it is reachable by
   keyboard, and its open/closed state survives the re-render after each action. */
function sbRenderSequence() {
  const el = document.getElementById("baySequence");
  if (!el) return;
  const live = RefrigService.sequenceReport(SB.state);
  const steps = live.steps.map(st => st.id in SB.stepSeen
    ? Object.assign({}, st, { complete: true, outOfOrder: SB.stepSeen[st.id] })
    : st);
  const rep = {
    steps, total: live.total,
    done: steps.filter(st => st.complete).length,
    inOrder: steps.every(st => !(st.complete && st.outOfOrder)),
  };
  const outCount = rep.steps.filter(st => st.complete && st.outOfOrder).length;

  const status = rep.done === rep.total
    ? (rep.inOrder
      ? `All ${rep.total} steps done, and done in the taught order.`
      : `All ${rep.total} steps done, but ${outCount} of them happened out of turn.`)
    : `${rep.done} of ${rep.total} steps done` +
      (outCount ? `, ${outCount} out of turn.` : rep.done ? ", in order so far." : ".");

  const item = (st, i) => {
    const cls = !st.complete ? "todo" : st.outOfOrder ? "out" : "done";
    const stateTxt = !st.complete ? "still to do" : st.outOfOrder ? "done — OUT OF ORDER" : "done";
    const mark = !st.complete ? "○" : st.outOfOrder ? "!" : "✓";
    return `
      <li class="sb-step ${cls}">
        <span class="sb-step-n" aria-hidden="true">${i + 1}</span>
        <div class="sb-step-body">
          <p class="sb-step-head">
            <span class="sb-step-mark" aria-hidden="true">${mark}</span>
            <b>${st.label}</b>
            <span class="sb-step-state">${stateTxt}</span>
          </p>
          ${st.complete && st.outOfOrder && st.early
            ? `<p class="sb-step-early"><b>What that cost:</b> ${st.early}</p>` : ""}
          <details class="reveal sb-why" data-step="${st.id}"${SB.openWhy[st.id] ? " open" : ""}>
            <summary>Why it goes here</summary>
            <p>${st.why}</p>
          </details>
        </div>
      </li>`;
  };

  const verdict = rep.done === rep.total && rep.inOrder
    ? `<div class="quiz-feedback good sb-seq-verdict"><b>✓ Textbook order.</b>
         <p>Right hoses, gauges proved, high side on and cracked first so there was pressure to purge
         <i>with</i>, low side purged before its port was opened. Nothing went into the machine that
         should not be in it, and nothing came out that should have stayed. That order is the skill —
         the readings are just what falls out of it.</p></div>`
    : rep.done === rep.total
      ? `<div class="quiz-feedback partial sb-seq-verdict"><b>All eight done — but not in this order.</b>
           <p>You have readings, and you would have had them on site too. Read the flagged steps below:
           each one names what that shortcut actually costs, in air, in refrigerant, or in a number you
           cannot trust. Reset and run it clean.</p></div>`
      : "";

  el.innerHTML = `
    <div class="panel-head">
      <h2>Order of work</h2>
      <span class="hint">what you did, in what order</span>
    </div>
    <p class="sb-seq-status" aria-live="polite">${status}</p>
    ${verdict}
    <ol class="sb-seq">${rep.steps.map(item).join("")}</ol>`;

  el.querySelectorAll("details.sb-why").forEach(d =>
    d.addEventListener("toggle", () => { SB.openWhy[d.dataset.step] = d.open; }));
}

/* ---- Panels ------------------------------------------------------------------ */

/* The manifold itself is a thing you act on before it goes near the system:
   prove it reads zero, and once both hoses are on, actually look at it. */
function sbManifoldControls() {
  const s = SB.state;
  return `
    <div class="sb-valve-panel">
      <h3>Gauge manifold</h3>
      <p class="sb-manifold-state">Gauges proved at zero:
        <b class="${s.zeroChecked ? "yes" : "no"}">${s.zeroChecked ? "yes" : "not yet"}</b></p>
      <div class="quiz-controls">
        <button type="button" class="btn btn-ghost sb-act" data-type="zeroCheck">${s.zeroChecked ? "Re-check the zero" : "Prove the gauges read zero"}</button>
        <button type="button" class="btn btn-ghost sb-act" data-type="check">Check the gauges</button>
      </div>
    </div>`;
}
function sbValveControls(side) {
  const v = SB.state.valves[side];
  const seg = (pos, label) =>
    `<button type="button" class="sb-seg ${v.spindle === pos ? "on" : ""}" data-type="spindle" data-side="${side}" data-pos="${pos}">${label}</button>`;
  return `
    <div class="sb-valve-panel">
      <h3>${side === "suction" ? "Suction" : "Discharge"} valve</h3>
      <div class="quiz-controls">
        <button type="button" class="btn btn-ghost sb-act" data-type="spindleCap" data-side="${side}">${v.spindleCap ? "Remove spindle cap" : "Refit spindle cap"}</button>
        <button type="button" class="btn btn-ghost sb-act" data-type="portCap" data-side="${side}">${v.portCap ? "Remove port cap" : "Refit port cap"}</button>
        <button type="button" class="btn btn-ghost sb-act" data-type="hose" data-side="${side}">${v.hose ? "Disconnect hose" : "Connect hose"}</button>
        <button type="button" class="btn btn-ghost sb-act" data-type="purge" data-side="${side}">Purge hose</button>
      </div>
      <div class="sb-spindle">
        <span>Spindle:</span>
        ${seg("back", "Back-seat")}${seg("crack", "Crack")}${seg("front", "Front-seat")}
      </div>
    </div>`;
}

function sbRenderPanels() {
  const c = RefrigService.checklist(SB.state);
  const s = SB.state;
  const tick = (done, label) => `<li class="${done ? "done" : ""}">${done ? "✓" : "○"} ${label}</li>`;

  document.getElementById("bayControls").innerHTML =
    sbManifoldControls() + sbValveControls("suction") + sbValveControls("discharge");

  document.getElementById("bayChecklist").innerHTML = `
    <h3>${SB.phase === "hookup" ? "Task: fit gauges & get readings" : SB.phase === "done" ? "Task complete ✓" : "Task: pack up clean"}</h3>
    <ul class="sb-list">
      ${tick(c.hoseSet, "Hoses chosen off the van")}
      ${tick(c.zeroChecked, "Gauges proved to read zero")}
      ${tick(c.capsOff, "Gauge-port caps off (valves back-seated)")}
      ${tick(c.hoses, "Hoses connected hand-tight")}
      ${tick(c.cracked, "Both valves cracked off the back seat")}
      ${tick(c.purged, "Both hoses purged")}
      ${tick(c.readings, "Readings live on both gauges")}
      ${SB.readingsSeen ? tick(RefrigService.packedUp(s), "Packed up: back-seated, hoses off, caps on") : ""}
    </ul>
    <p class="sb-meter ${s.emissionG > 10 ? "warnish" : ""}">Refrigerant lost: <b>${s.emissionG} g</b> ${s.emissionG <= 2 * RefrigService.PURGE_G ? "— clean work" : s.emissionG <= 30 ? "— keep it tighter" : "— that's venting; the Code (and your licence) care"}</p>`;

  const coach = document.getElementById("bayCoach");
  if (SB.phase === "done") {
    coach.innerHTML = `
      <div class="quiz-feedback good">
        <b>✓ Job done, machine left as found.</b>
        <p>You fitted gauges, purged, took readings and packed up. Refrigerant lost:
        <b>${s.emissionG} g</b>${s.warns ? ` · things that hissed along the way: <b>${s.warns}</b> — every one of them is a lesson banked, not a mark against you` : " — textbook-clean, no venting at all"}.</p>
        <div class="quiz-controls"><button id="bayAgainBtn" class="btn btn-tour" type="button">Run it again</button></div>
      </div>`;
    const again = document.getElementById("bayAgainBtn");
    if (again) again.addEventListener("click", sbReset);
  } else {
    const last = SB.log[0];
    coach.innerHTML = `
      ${last ? `<div class="quiz-feedback ${last.kind === "warn" ? "partial" : last.kind === "block" ? "bad" : "good"}" aria-live="polite"><p>${last.msg}</p></div>`
             : `<div class="quiz-feedback good"><p>The machine is running, both service valves are <b>back-seated</b> (gauge ports isolated). Start where the job starts: <b>choose your hoses</b> and <b>prove the gauges read zero</b>, then high side on and cracked → low side on → check → purge → crack the low port. Click parts on the rig or use the buttons — the order panel grades what you actually did.</p></div>`}
      ${SB.log.length > 1 ? `<ul class="sb-log">${SB.log.slice(1, 6).map(l => `<li class="${l.kind}">${l.msg}</li>`).join("")}</ul>` : ""}`;
  }

  document.querySelectorAll(".sb-act").forEach(b =>
    b.addEventListener("click", () => sbDo({ type: b.dataset.type, side: b.dataset.side })));
  document.querySelectorAll(".sb-seg").forEach(b =>
    b.addEventListener("click", () => sbDo({ type: "spindle", side: b.dataset.side, pos: b.dataset.pos })));
}

function sbRender() {
  sbRenderScene();
  sbRenderPanels();
  sbRenderHoses();
  sbRenderSequence();
}

/* ---- Boot ------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("bayRefrigerant");
  sel.innerHTML = Object.keys(RefrigData.REFRIGERANTS)
    .map(k => `<option value="${k}">${RefrigData.REFRIGERANTS[k].label}</option>`).join("");
  sel.value = SB.refrigerant;
  sel.addEventListener("change", () => { SB.refrigerant = sel.value; sbComputePressures(); sbRender(); });
  document.getElementById("bayResetBtn").addEventListener("click", sbReset);
  sbComputePressures();
  sbRender();
});
