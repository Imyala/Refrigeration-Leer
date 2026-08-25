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

/* ---- SVG scene --------------------------------------------------------------
   The rig is drawn as the machine actually stands in front of you: a running
   condensing unit with a stem-type service valve bolted to each side of the
   compressor, and a gauge manifold on the floor below it with its hoses run
   up to the two gauge ports. Everything the learner can act on is drawn where
   it is on the real thing — spindle cap on top of the stem, gauge-port cap on
   the side stub — so clicking the picture teaches the layout as well as the
   procedure. Geometry is in one place, below, because every label position on
   a drawing this dense depends on the ones around it. */
const SB_GEO = {
  compressor: { x: 345, y: 112, w: 170, h: 92 },
  centreY: 158,                       // the axis the valves and pipework sit on
  suctionX: 205, dischargeX: 655,
  frame: { x: 62, y: 42, w: 736, h: 214 },
  manifold: { x: 270, y: 378, w: 320, h: 58 },
  gaugeY: 328, gaugeR: 64, lowX: 340, highX: 520,
};

/* Where the spindle stem sits for each position: back-seated is fully out
   (anticlockwise), front-seated is fully screwed in. */
const SB_STEM_TOP = { back: 98, crack: 106, front: 117 };

function sbValveSvg(side, x) {
  const G = SB_GEO;
  const v = SB.state.valves[side];
  const col = side === "suction" ? SB_COL.vap : SB_COL.hot;
  const cy = G.centreY;
  const left = side === "suction";
  const name = left ? "SUCTION SERVICE VALVE" : "DISCHARGE SERVICE VALVE";
  const stateTxt = { back: "BACK-SEATED", crack: "CRACKED", front: "FRONT-SEATED" }[v.spindle];
  const stateCol = v.spindle === "back" ? SB_COL.mut : v.spindle === "crack" ? SB_COL.good : SB_COL.liq;
  const leak = SB.state.leaks[side];
  const stemTop = SB_STEM_TOP[v.spindle];
  const capY = stemTop - 15;          // centre of the spindle cap / stem head
  const angle = { back: 0, crack: 40, front: 90 }[v.spindle];

  /* The pipe the valve is in: system line on the outer side, compressor
     flange on the inner side. */
  const outerX = left ? G.frame.x + 8 : G.frame.x + G.frame.w - 8;
  const innerX = left ? G.compressor.x : G.compressor.x + G.compressor.w;
  const bodyEdge = left ? x + 40 : x - 40;
  const outerEdge = left ? x - 40 : x + 40;

  return `
  <g data-side="${side}">
    <line x1="${outerX}" y1="${cy}" x2="${outerEdge}" y2="${cy}" stroke="${col}" stroke-width="8" stroke-linecap="round" opacity=".9" class="sb-flow"/>
    <line x1="${bodyEdge}" y1="${cy}" x2="${innerX}" y2="${cy}" stroke="${col}" stroke-width="8" stroke-linecap="round" opacity=".9" class="sb-flow"/>
    <text x="${outerX}" y="${cy - 16}" fill="${SB_COL.mut}" font-size="8.5" letter-spacing=".6"
          text-anchor="${left ? "start" : "end"}">${left ? "FROM EVAPORATOR" : "TO CONDENSER"}</text>

    <!-- valve body, with the bolt flange that holds it to the compressor -->
    <rect x="${x - 40}" y="${cy - 23}" width="80" height="46" rx="7" fill="#1b2836" stroke="${col}" stroke-width="2.5"/>
    <rect x="${left ? x + 34 : x - 44}" y="${cy - 17}" width="10" height="34" rx="3" fill="#22303f" stroke="${SB_COL.line}" stroke-width="1.5"/>
    <text x="${x}" y="58" fill="${SB_COL.txt}" font-size="10.5" text-anchor="middle" letter-spacing="1">${name}</text>

    <!-- spindle: stem out of the bonnet, cap over it until it is removed -->
    <rect x="${x - 11}" y="${cy - 33}" width="22" height="12" rx="3" fill="#22303f" stroke="${SB_COL.line}" stroke-width="1.5"/>
    <rect x="${x - 6}" y="${stemTop}" width="12" height="${cy - 29 - stemTop}" fill="${SB_COL.mut}" rx="2"/>
    ${v.spindleCap
      ? `<g class="sb-click" data-act="spindleCap" data-side="${side}">
           <polygon points="${x - 17},${capY} ${x - 8},${capY - 11} ${x + 8},${capY - 11} ${x + 17},${capY} ${x + 8},${capY + 11} ${x - 8},${capY + 11}"
                    fill="#25333f" stroke="${SB_COL.mut}" stroke-width="2"/>
           <title>Spindle cap on — click to remove it</title></g>`
      : `<g class="sb-click" data-act="spindle-cycle" data-side="${side}">
           <circle cx="${x}" cy="${capY}" r="13" fill="#101a24" stroke="${SB_COL.txt}" stroke-width="2.5"/>
           <line x1="${x - 9}" y1="${capY}" x2="${x + 9}" y2="${capY}" stroke="${SB_COL.txt}" stroke-width="2.5"
                 transform="rotate(${angle} ${x} ${capY})"/>
           <title>Valve stem — click to turn it to the next position</title></g>`}

    <!-- gauge port on the side stub, and whatever is on it -->
    <rect x="${x - 9}" y="${cy + 23}" width="18" height="20" fill="#22303f" stroke="${col}" stroke-width="2"/>
    <rect x="${x - 14}" y="${cy + 43}" width="28" height="7" rx="2" fill="#22303f" stroke="${col}" stroke-width="2"/>
    ${v.portCap
      ? `<g class="sb-click" data-act="portCap" data-side="${side}">
           <rect x="${x - 13}" y="${cy + 50}" width="26" height="14" rx="4" fill="#25333f" stroke="${SB_COL.mut}" stroke-width="2"/>
           <title>Gauge-port cap on — click to remove it</title></g>`
      : v.hose ? "" : `<g class="sb-click" data-act="hose" data-side="${side}">
           <circle cx="${x}" cy="${cy + 58}" r="9" fill="none" stroke="${col}" stroke-width="2" stroke-dasharray="3 3"/>
           <title>Open gauge port — click to connect the hose</title></g>`}

    ${leak ? `<g class="sb-hiss">
      <path d="M ${x + 16} ${cy + 46} q 9 -5 18 -3" stroke="${SB_COL.bad}" stroke-width="2" fill="none"/>
      <path d="M ${x + 16} ${cy + 54} q 11 0 20 5" stroke="${SB_COL.bad}" stroke-width="2" fill="none"/>
      <text x="${x + 42}" y="${cy + 40}" fill="${SB_COL.bad}" font-size="10" font-weight="700">HISSSS…</text></g>` : ""}

    <text x="${left ? x - 46 : x + 46}" y="${cy + 58}" fill="${stateCol}" font-size="10.5" font-weight="700"
          text-anchor="${left ? "end" : "start"}">${stateTxt}</text>
  </g>`;
}

function sbHoseSvg(side, portX, manifoldX) {
  const G = SB_GEO;
  const v = SB.state.valves[side];
  if (!v.hose) return "";
  const col = side === "suction" ? SB_COL.vap : SB_COL.hot;
  const y0 = G.centreY + 50;
  /* A hose hangs down off the port and sweeps in to the manifold rather than
     cutting across the drawing in a straight line. */
  const d = `M ${portX} ${y0} C ${portX} ${y0 + 96}, ${portX} ${y0 + 152}, ${manifoldX} 406`;
  return `
    <path d="${d}" fill="none" stroke="${col}" stroke-width="7" stroke-linecap="round" opacity=".92"/>
    <circle cx="${portX}" cy="${y0}" r="6" fill="#25333f" stroke="${col}" stroke-width="2"/>
    ${v.purged ? "" : `
    <path d="${d}" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="5 9" opacity=".6"><title>Air still in this hose — purge it</title></path>
    <text x="${portX + (side === "suction" ? -38 : 38)}" y="332" fill="${SB_COL.mut}" font-size="9.5" text-anchor="middle">air in hose</text>`}`;
}

function sbManifoldSvg() {
  const G = SB_GEO, s = SB.state, M = G.manifold;
  const cx = M.x + M.w / 2;
  const knob = (kx) => `
    <circle cx="${kx}" cy="${M.y + 36}" r="11" fill="#25333f" stroke="${SB_COL.line}" stroke-width="2"/>
    <line x1="${kx - 7}" y1="${M.y + 36}" x2="${kx + 7}" y2="${M.y + 36}" stroke="${SB_COL.mut}" stroke-width="2"/>`;

  return `
    <rect x="${M.x}" y="${M.y}" width="${M.w}" height="${M.h}" rx="10" fill="#16212e" stroke="${SB_COL.line}" stroke-width="2"/>
    <rect x="${M.x - 14}" y="${M.y + 23}" width="14" height="10" rx="2" fill="#22303f" stroke="${SB_COL.vap}" stroke-width="2"/>
    <rect x="${M.x + M.w}" y="${M.y + 23}" width="14" height="10" rx="2" fill="#22303f" stroke="${SB_COL.hot}" stroke-width="2"/>
    ${knob(M.x + 28)}${knob(M.x + M.w - 28)}
    <rect x="${cx - 9}" y="${M.y + M.h}" width="18" height="22" rx="3" fill="#22303f" stroke="${SB_COL.line}" stroke-width="2"/>
    <text x="${cx}" y="${M.y + 30}" fill="${SB_COL.mut}" font-size="9.5" text-anchor="middle" letter-spacing=".8">GAUGE MANIFOLD</text>
    <text x="${cx}" y="${M.y + 46}" fill="${s.zeroChecked ? SB_COL.good : SB_COL.mut}" font-size="9" text-anchor="middle">${s.zeroChecked ? "✓ proved at zero" : "not proved yet"}</text>
    <text x="${cx}" y="494" fill="${SB_COL.mut}" font-size="9" text-anchor="middle">centre port — charging &amp; vacuum · outer ring reads pressure, inner ring the saturation temperature</text>`;
}

function sbRenderScene() {
  const svg = document.getElementById("bayScene");
  if (!svg) return;
  const G = SB_GEO, C = G.compressor;
  const s = SB.state;
  const base = RefrigData.REFRIGERANTS[SB.refrigerant];

  svg.innerHTML = `
    <rect x="${G.frame.x}" y="${G.frame.y}" width="${G.frame.w}" height="${G.frame.h}" rx="16"
          fill="rgba(255,255,255,.015)" stroke="${SB_COL.line}" stroke-width="1.5" stroke-dasharray="6 6"/>
    <text x="${C.x + C.w / 2}" y="${G.frame.y + G.frame.h - 12}" fill="${SB_COL.mut}" font-size="9.5"
          text-anchor="middle" letter-spacing="1">CONDENSING UNIT</text>

    <rect x="${C.x}" y="${C.y}" width="${C.w}" height="${C.h}" rx="12" fill="#16212e" stroke="${s.tripped ? SB_COL.bad : SB_COL.line}" stroke-width="2.5"/>
    <circle cx="${C.x + C.w / 2}" cy="${C.y + 30}" r="16" fill="none" stroke="${s.tripped ? SB_COL.bad : SB_COL.hot}" stroke-width="2.5"/>
    <text x="${C.x + C.w / 2}" y="${C.y + 62}" fill="${SB_COL.txt}" font-size="11" text-anchor="middle" letter-spacing="1">COMPRESSOR</text>
    <text x="${C.x + C.w / 2}" y="${C.y + 80}" fill="${s.tripped ? SB_COL.bad : SB_COL.good}" font-size="10" text-anchor="middle" font-weight="700">${s.tripped ? "TRIPPED — HP CUT-OUT" : "RUNNING"}</text>

    ${sbValveSvg("suction", G.suctionX)}
    ${sbValveSvg("discharge", G.dischargeX)}
    ${sbHoseSvg("suction", G.suctionX, G.manifold.x - 16)}
    ${sbHoseSvg("discharge", G.dischargeX, G.manifold.x + G.manifold.w + 16)}
    ${sbManifoldSvg()}`;

  // gauges (the same dial the simulator's manifold draws, at rig scale)
  const step = { kPa: 200, bar: 2, psi: 50 }[RefrigUnits.prefs.p];
  const niceMax = (bar) => Math.max(step, Math.ceil(RefrigUnits.barTo(bar) / step) * step);
  const rLow = RefrigService.reading(s, "suction", SB.pressures);
  const rHigh = RefrigService.reading(s, "discharge", SB.pressures);

  drawGauge(svg, G.lowX, G.gaugeY, G.gaugeR, {
    base, pAbs: rLow == null ? RefrigUnits.ATM_BAR : rLow, color: SB_COL.vap,
    max: niceMax(base.pLow * 2.6 - RefrigUnits.ATM_BAR),
  });
  drawGauge(svg, G.highX, G.gaugeY, G.gaugeR, {
    base, pAbs: rHigh == null ? RefrigUnits.ATM_BAR : rHigh, color: SB_COL.hot,
    max: niceMax(base.pHigh * 1.9 - RefrigUnits.ATM_BAR),
  });

  const add = (x, y, txt, col, size, weight) => {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", x); t.setAttribute("y", y);
    t.setAttribute("fill", col); t.setAttribute("font-size", size || 11);
    t.setAttribute("font-weight", weight || "700"); t.setAttribute("text-anchor", "middle");
    t.textContent = txt;
    svg.appendChild(t);
  };
  add(G.lowX, 456, "LOW SIDE", SB_COL.vap, 9.5);
  add(G.highX, 456, "HIGH SIDE", SB_COL.hot, 9.5);
  add(G.lowX, 474, rLow == null ? "no reading" : `${RefrigUnits.fmtPGauge(rLow)} · sat ${RefrigUnits.fmtT(RefrigModel.satTemp(base, rLow))}`,
      rLow == null ? SB_COL.mut : SB_COL.txt, 11.5);
  add(G.highX, 474, rHigh == null ? "no reading" : `${RefrigUnits.fmtPGauge(rHigh)} · sat ${RefrigUnits.fmtT(RefrigModel.satTemp(base, rHigh))}`,
      rHigh == null ? SB_COL.mut : SB_COL.txt, 11.5);

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
