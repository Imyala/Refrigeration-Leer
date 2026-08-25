/* =========================================================================
   Pressure–Temperature (PT) chart and the target-pressure trainer.
   Teaches the core field skill: reading expected gauge pressures from the
   saturation relationship. Browser-only; wired up from app.js.
   ========================================================================= */
"use strict";

const PT = { q: null };

function renderPtChart() {
  const U = RefrigUnits, M = RefrigModel;
  const base = RefrigData.REFRIGERANTS[state.refrigerant];
  const tbl = base.satTable;
  const svg = document.getElementById("ptChart");
  if (!svg) return;
  svg.innerHTML = "";
  const NS = "http://www.w3.org/2000/svg";
  const add = (tag, attrs, text) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (text != null) el.textContent = text;
    svg.appendChild(el);
    return el;
  };

  // Plot box. Generous top and bottom margins: the axis titles, the gauge-zero
  // note and the two operating-point labels all live outside the box, and the
  // old layout had them landing on top of each other.
  const x0 = 52, x1 = 330, y0 = 30, y1 = 168;
  const tMin = tbl[0].T, tMax = tbl[tbl.length - 1].T;
  const gLo = U.barTo(U.gaugeBar(tbl[0].P));
  const gHi = U.barTo(U.gaugeBar(tbl[tbl.length - 1].P));
  const tX = (t) => x0 + (t - tMin) / (tMax - tMin) * (x1 - x0);
  const gY = (g) => y1 - (g - gLo) / (gHi - gLo) * (y1 - y0);

  const INK = "#7f93a5", FAINT = "#5b6d7e", GRID = "#1b2632", AXIS = "#23303d";
  const uLbl = U.P_UNITS[U.prefs.p].gaugeLabel;

  // Gridlines first, so everything else sits on top of them
  for (let i = 0; i <= 4; i++) {
    const y = gY(gLo + (gHi - gLo) * i / 4);
    add("line", { x1: x0, y1: y, x2: x1, y2: y, stroke: GRID });
  }
  add("line", { x1: x0, y1: y0, x2: x0, y2: y1, stroke: AXIS });
  add("line", { x1: x0, y1: y1, x2: x1, y2: y1, stroke: AXIS });

  // Axis titles, both outside the plot box
  add("text", { x: 4, y: 14, fill: INK, "font-size": 10 }, `P (${uLbl})`);
  add("text", { x: x1, y: 202, fill: INK, "font-size": 10, "text-anchor": "end" },
    `saturation temperature (°${U.prefs.t}) →`);

  // x ticks: every second table temperature
  tbl.forEach((row, i) => {
    if (i % 2 !== 0) return;
    const x = tX(row.T);
    add("line", { x1: x, y1: y1, x2: x, y2: y1 + 3, stroke: AXIS });
    add("text", { x, y: y1 + 15, fill: FAINT, "font-size": 9, "text-anchor": "middle" },
      String(Math.round(U.cTo(row.T))));
  });
  // y ticks: 5 even steps
  for (let i = 0; i <= 4; i++) {
    const g = gLo + (gHi - gLo) * i / 4;
    const y = gY(g);
    add("text", { x: x0 - 7, y: y + 3, fill: FAINT, "font-size": 9, "text-anchor": "end" },
      String(Math.round(g)));
  }

  // atmospheric line (gauge zero) — below it the gauge reads vacuum
  let yZero = null;
  if (gLo < 0) {
    yZero = gY(0);
    add("line", { x1: x0, y1: yZero, x2: x1, y2: yZero, stroke: INK, "stroke-dasharray": "4 4", opacity: 0.45 });
    // Right-aligned: the evaporating point sits near gauge zero on the left,
    // and the note used to run straight through it.
    add("text", { x: x1 - 3, y: yZero - 5, fill: INK, "font-size": 8.5,
                  "text-anchor": "end", opacity: 0.85 },
      "gauge 0 — vacuum below");
  }

  // the saturation curve itself
  let d = "";
  tbl.forEach((row, i) => {
    const pt = `${tX(row.T)} ${gY(U.barTo(U.gaugeBar(row.P)))}`;
    d += (i === 0 ? "M " : " L ") + pt;
  });
  add("path", { d, fill: "none", stroke: "#4fc3f7", "stroke-width": 2 });

  // Current operating points. Labels go above the dot, or below it when that
  // would collide with the gauge-zero note running across the chart.
  const marks = [
    { t: current.tEvap, p: current.pLow,  color: getCss("--state-vapor"),  label: "evap" },
    { t: current.tCond, p: current.pHigh, color: getCss("--state-hotgas"), label: "cond" },
  ];
  marks.forEach(m => {
    const x = tX(RefrigModel.clamp(m.t, tMin, tMax));
    const y = gY(U.barTo(U.gaugeBar(m.p)));
    const clash = yZero != null && Math.abs(y - yZero) < 18;
    add("circle", { cx: x, cy: y, r: 4, fill: m.color, stroke: "#0d141c", "stroke-width": 1.5 });
    add("text", {
      x, y: clash ? y + 16 : y - 9,
      fill: m.color, "font-size": 9.5, "font-weight": 700, "text-anchor": "middle",
    }, m.label);
  });

  const src = document.getElementById("ptSource");
  if (src) src.textContent = `${base.label} · ${uLbl}`;
}

/* ---- Target-pressure trainer ---------------------------------------------- */
function ptGenerateQuestion() {
  const base = RefrigData.REFRIGERANTS[state.refrigerant];
  const tbl = base.satTable;
  const types = ["t2p-low", "p2t-low", "t2p-high", "p2t-high"];
  const type = types[Math.floor(Math.random() * types.length)];
  const low = type.endsWith("low");
  const lo = low ? Math.max(tbl[0].T + 4, -28) : 28;
  const hi = low ? 12 : Math.min(55, tbl[tbl.length - 1].T - 6);
  const T = Math.round(lo + Math.random() * (hi - lo));
  PT.q = { type, T, pAbs: RefrigModel.satPress(base, T), refKey: state.refrigerant };
  document.getElementById("ptInput").value = "";
  document.getElementById("ptFeedback").hidden = true;
  ptRenderQuestion();
}

function ptRenderQuestion() {
  if (!PT.q) return;
  const U = RefrigUnits;
  const q = PT.q;
  const label = RefrigData.REFRIGERANTS[q.refKey].label;
  const uP = U.P_UNITS[U.prefs.p].gaugeLabel;
  const texts = {
    "t2p-low":  `A ${label} coil is evaporating at ${U.fmtT(q.T)}. What should the LOW-side gauge read?`,
    "p2t-low":  `The low-side gauge on a ${label} system reads ${U.fmtPGauge(q.pAbs)}. What is the saturation (coil) temperature?`,
    "t2p-high": `A ${label} system is condensing at ${U.fmtT(q.T)}. What head pressure do you expect on the HIGH-side gauge?`,
    "p2t-high": `The high-side gauge on a ${label} system reads ${U.fmtPGauge(q.pAbs)}. What is the condensing temperature?`,
  };
  document.getElementById("ptQuestion").textContent = texts[q.type];
  document.getElementById("ptUnit").textContent = q.type.startsWith("t2p") ? uP : `°${U.prefs.t}`;
}

function ptCheckAnswer() {
  if (!PT.q) return;
  const U = RefrigUnits;
  const q = PT.q;
  const raw = parseFloat(document.getElementById("ptInput").value);
  const fb = document.getElementById("ptFeedback");
  const label = RefrigData.REFRIGERANTS[q.refKey].label;
  const explain = `At ${U.fmtT(q.T)}, ${label} saturates at ${U.fmtPAbs(q.pAbs)} absolute → <b>${U.fmtPGauge(q.pAbs)}</b> on the gauge.`;

  if (!Number.isFinite(raw)) {
    fb.innerHTML = "Enter a number first.";
    fb.className = "pt-feedback bad";
    fb.hidden = false;
    return;
  }

  let good;
  if (q.type.startsWith("t2p")) {
    const expected = U.barTo(U.gaugeBar(q.pAbs));
    const minTol = { kPa: 15, bar: 0.15, psi: 3 }[U.prefs.p];
    good = Math.abs(raw - expected) <= Math.max(Math.abs(expected) * 0.05, minTol);
  } else {
    const expected = U.cTo(q.T);
    good = Math.abs(raw - expected) <= (U.prefs.t === "F" ? 4 : 2);
  }

  fb.innerHTML = good
    ? `<b>✓ Correct.</b> ${explain}`
    : `<b>✗ Not quite.</b> ${explain} That's the PT relationship — while liquid and vapour coexist, pressure fixes temperature.`;
  fb.className = "pt-feedback " + (good ? "good" : "bad");
  fb.hidden = false;
}

function initPtTrainer() {
  document.getElementById("ptCheckBtn").addEventListener("click", ptCheckAnswer);
  document.getElementById("ptNewBtn").addEventListener("click", ptGenerateQuestion);
  document.getElementById("ptInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") ptCheckAnswer();
  });
  ptGenerateQuestion();
}
