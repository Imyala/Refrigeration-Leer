/* =========================================================================
   Refrigeration Cycle Simulator — main UI.
   Schematic animation, readouts, P–h diagram, component info cards, guided
   tour and control wiring. The data lives in js/data.js, the thermodynamic
   model in js/model.js, unit display in js/units.js; the gauge manifold,
   PT trainer and technician quiz are in their own files.
   ========================================================================= */
"use strict";

const { REFRIGERANTS, FAULTS, VIZ } = RefrigData;
const { clamp, deriveAt, satTemp } = RefrigModel;
const U = RefrigUnits;

/* ---- State colours -------------------------------------------------------- */
function getCss(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
const STATE_COLORS = {
  hotgas: getCss("--state-hotgas"), liquid: getCss("--state-liquid"),
  flash:  getCss("--state-flash"),  vapor:  getCss("--state-vapor"),
};
function stateChip(color, text) { return `<span class="state-chip" style="background:${color}">${text}</span>`; }

// Colour the pipes go to when the compressor is off (no heat/flow).
const OFF_GREY = [108, 120, 134];
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
// Blend a colour toward the off-grey by factor g (0 = full colour, 1 = grey).
function mixGrey(rgb, g) {
  const r = Math.round(rgb[0] + (OFF_GREY[0] - rgb[0]) * g);
  const gr = Math.round(rgb[1] + (OFF_GREY[1] - rgb[1]) * g);
  const b = Math.round(rgb[2] + (OFF_GREY[2] - rgb[2]) * g);
  return `rgb(${r},${gr},${b})`;
}

const SEGMENTS = [
  { id: "seg-discharge", state: "hotgas", color: STATE_COLORS.hotgas, label: "Discharge line · high-pressure hot vapour" },
  { id: "seg-liquid",    state: "liquid", color: STATE_COLORS.liquid, label: "Liquid line · high-pressure liquid" },
  { id: "seg-evapfeed",  state: "flash",  color: STATE_COLORS.flash,  label: "After metering · low-pressure flash mix" },
  { id: "seg-suction",   state: "vapor",  color: STATE_COLORS.vapor,  label: "Suction line · low-pressure vapour" },
];

/* ========================================================================= */
/* Live state                                                                */
/* ========================================================================= */
const state = {
  running: true, refrigerant: "R134a", speed: 100, load: 100, fault: "none",
  dashOffset: 0, phaseT: 0, selected: null, tourActive: false, tourIndex: 0,
  showHealthy: true,
};
let current = null;
const capRefs = {};   // per-refrigerant nominal capacity for the % readout

const r1 = (v) => Math.round(v * 10) / 10;
const r0 = (v) => Math.round(v);

function recompute() {
  current = deriveAt(state.refrigerant, state.speed, state.load, state.fault);
  if (!(state.refrigerant in capRefs)) {
    capRefs[state.refrigerant] = deriveAt(state.refrigerant, 100, 100, "none").capRaw;
  }
  current.capacityPct = current.capRaw / capRefs[state.refrigerant] * 100;
}

/* ========================================================================= */
/* Component knowledge base (uses live `current`)                            */
/* ========================================================================= */
const COMPONENTS = {
  compressor: (c) => ({
    title: "Compressor — the pump of the cycle",
    inState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    outState: stateChip(STATE_COLORS.hotgas, "High-pressure hot gas"),
    inVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tSuction)}`,
    outVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tDischarge)}`,
    body: `Draws in cool, low-pressure superheated vapour from the suction line and
      squeezes it into a small, high-pressure, high-temperature gas. This is the only
      point where <b>work is added</b> to the system.`,
    points: [
      "Raises pressure so the refrigerant's condensing temperature climbs above the outdoor air — that's what lets it dump heat in the condenser.",
      "Refrigerant stays a vapour the whole way through; only its pressure and temperature rise.",
      "Liquid must never reach the compressor — that's why the evaporator superheats the gas first.",
    ],
  }),
  condenser: (c) => ({
    title: "Condenser — rejects heat to the surroundings",
    inState: stateChip(STATE_COLORS.hotgas, "High-pressure hot gas"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tDischarge)}`,
    outVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    body: `A heat exchanger (usually fan-cooled) where the hot gas gives up its heat.
      The gas first <b>desuperheats</b>, then <b>condenses</b> at constant temperature
      from vapour into liquid, and finally <b>subcools</b> a little.`,
    points: [
      "Heat leaving = the heat absorbed in the evaporator <i>plus</i> the compressor work.",
      `Condensing happens at constant pressure & temperature (~${U.fmtT(c.tCond)} now) — the latent-heat plateau.`,
      `Subcooling ~${U.fmtDT(c.subcool)} below saturation guarantees a solid liquid feed to the metering device.`,
    ],
  }),
  receiver: (c) => ({
    title: "Liquid receiver — the storage buffer",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    outVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    body: `A tank on the high-pressure liquid line holding a reserve of liquid
      refrigerant. It absorbs changes in charge as the load varies and makes sure a
      <b>solid column of liquid</b> (no flash gas) feeds the metering device.`,
    points: [
      "Doesn't change the refrigerant's state — it's a buffer, not a process step.",
      "Lets the system handle changing demand without starving the evaporator.",
      "Vapour collects at the top; liquid is drawn from the bottom.",
    ],
  }),
  metering: (c) => ({
    title: "Metering device — the pressure divider",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.flash, "Low-pressure flash mix"),
    inVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    outVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tEvap)}`,
    body: `A restriction (expansion valve or capillary tube) that splits the high and
      low sides. Liquid is <b>throttled</b> from high to low pressure. As pressure
      drops, some flash-boils, and that flashing chills the rest to evaporator
      temperature.`,
    points: [
      `Pressure drops from ${U.fmtPGauge(c.pHigh)} to ${U.fmtPGauge(c.pLow)} across the valve.`,
      "Leaves as a cold, low-pressure mixture of liquid + a little vapour (the 'flash gas').",
      "Meters exactly the right amount of refrigerant into the evaporator for the load.",
    ],
  }),
  evaporator: (c) => ({
    title: "Evaporator — where the cooling happens",
    inState: stateChip(STATE_COLORS.flash, "Low-pressure flash mix"),
    outState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    inVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tEvap)}`,
    outVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tSuction)}`,
    body: `A heat exchanger inside the space being cooled. The cold liquid <b>boils</b>,
      soaking up heat from the air (the useful refrigeration effect), then
      <b>superheats</b> slightly so only dry vapour returns to the compressor.`,
    points: [
      `Boiling happens at constant pressure & temperature (~${U.fmtT(c.tEvap)} now) — absorbing latent heat.`,
      "Heat absorbed here is exactly what makes the room or box cold.",
      `The last ~${U.fmtDT(c.superheat)} of superheat dry out the vapour to protect the compressor.`,
    ],
  }),
};

/* ========================================================================= */
/* Readouts                                                                  */
/* ========================================================================= */
function renderReadouts() {
  const c = current;
  const rows = [
    { label: "High Side",     value: U.fmtPGauge(c.pHigh),    cls: "amber" },
    { label: "Low Side",      value: U.fmtPGauge(c.pLow),     cls: "cold" },
    { label: "Condenser",     value: U.fmtT(c.tCond),         cls: "hot" },
    { label: "Evaporator",    value: U.fmtT(c.tEvap),         cls: "cold" },
    { label: "Discharge Gas", value: U.fmtT(c.tDischarge),    cls: "hot" },
    { label: "Superheat",     value: U.fmtDT(c.superheat),    cls: "" },
    { label: "Subcool",       value: U.fmtDT(c.subcool),      cls: "" },
    { label: "Flow",          value: `${r0(c.flow)} L/min`,   cls: "" },
    { label: "Compressor",    value: state.running ? "RUNNING" : "OFF", cls: state.running ? "ok" : "" },
  ];
  document.getElementById("readouts").innerHTML = rows.map(row => `
    <div class="readout"><div class="label">${row.label}</div>
      <div class="value ${row.cls}">${row.value}</div></div>`).join("");
}

/* ---- Performance panel ---------------------------------------------------- */
function renderPerf() {
  const c = current;
  const cells = [
    { k: "COP (cooling)",   v: c.cop.toFixed(2), u: "", cls: "cop" },
    { k: "Capacity",        v: r0(c.capacityPct), u: "% of nominal", cls: "cap" },
    { k: "Cooling effect",  v: r0(c.effect), u: "kJ/kg" },
    { k: "Compressor work", v: r0(c.work),   u: "kJ/kg" },
    { k: "Heat rejected",   v: r0(c.heatRej),u: "kJ/kg" },
    { k: "Pressure ratio",  v: c.ratio.toFixed(1), u: ": 1" },
  ];
  document.getElementById("perfGrid").innerHTML = cells.map(c2 => `
    <div class="perf-cell ${c2.cls || ""}">
      <div class="k">${c2.k}</div>
      <div class="v">${c2.v} <span class="u">${c2.u}</span></div>
    </div>`).join("");
}

function renderLegend() {
  document.getElementById("legend").innerHTML = SEGMENTS.map(s => `
    <div class="legend-item"><span class="legend-swatch" style="background:${s.color}"></span>${s.label}</div>`).join("");
}

/* ========================================================================= */
/* Flowing particles                                                         */
/* ========================================================================= */
const PARTICLES_PER_SEGMENT = 5;
let particles = [];
function buildParticles() {
  const g = document.getElementById("particles");
  g.innerHTML = "";
  particles = [];
  SEGMENTS.forEach(seg => {
    const path = document.getElementById(seg.id);
    const len = path.getTotalLength();
    const rgb = hexToRgb(seg.color);
    for (let i = 0; i < PARTICLES_PER_SEGMENT; i++) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "4");
      dot.setAttribute("class", "particle");
      dot.setAttribute("fill", seg.color);
      g.appendChild(dot);
      particles.push({ el: dot, path, len, t: i / PARTICLES_PER_SEGMENT, rgb });
    }
  });
}
function updateParticles(speed) {
  particles.forEach(p => {
    p.t = (p.t + speed / p.len) % 1;
    const pt = p.path.getPointAtLength(p.t * p.len);
    p.el.setAttribute("cx", pt.x);
    p.el.setAttribute("cy", pt.y);
  });
}

// Blend the pipe and particle colours toward grey by factor g (0..1).
const SEG_RGB = {};
SEGMENTS.forEach(s => { SEG_RGB[s.id] = hexToRgb(s.color); });
function applyPipeColors(g) {
  SEGMENTS.forEach(s => document.getElementById(s.id).setAttribute("stroke", mixGrey(SEG_RGB[s.id], g)));
  particles.forEach(p => p.el.setAttribute("fill", mixGrey(p.rgb, g)));
  // coil fills and spills fade out as the system greys (off = no refrigerant shown)
  const f = 1 - g;
  if (viz.fillCond) {
    viz.fillCond.setAttribute("opacity", 0.5 * f);
    viz.fillEvap.setAttribute("opacity", 0.5 * f);
    viz.spillLiquid.setAttribute("opacity", (viz.spillLiquid._op || 0) * f);
    viz.spillSuction.setAttribute("opacity", (viz.spillSuction._op || 0) * f);
  }
}

/* ========================================================================= */
/* Fault visualisation on the schematic                                      */
/* ========================================================================= */
const NS = "http://www.w3.org/2000/svg";
const viz = {};   // holds gradient + fill + spill element refs

function mkStop(offset, color) {
  const s = document.createElementNS(NS, "stop");
  s.setAttribute("offset", offset); s.setAttribute("stop-color", color);
  return s;
}
function setupFaultViz() {
  const svg = document.getElementById("diagram");
  const defs = svg.querySelector("defs");

  // Two horizontal gradients: condenser (hot→liquid) and evaporator (vapour→wet)
  const gradCond = document.createElementNS(NS, "linearGradient");
  gradCond.id = "gradCond"; gradCond.setAttribute("x1", "0"); gradCond.setAttribute("x2", "1");
  gradCond.append(mkStop(0, STATE_COLORS.hotgas), mkStop(0.5, STATE_COLORS.hotgas),
                  mkStop(0.6, STATE_COLORS.liquid), mkStop(1, STATE_COLORS.liquid));
  const gradEvap = document.createElementNS(NS, "linearGradient");
  gradEvap.id = "gradEvap"; gradEvap.setAttribute("x1", "0"); gradEvap.setAttribute("x2", "1");
  gradEvap.append(mkStop(0, STATE_COLORS.vapor), mkStop(0.4, STATE_COLORS.vapor),
                  mkStop(0.5, STATE_COLORS.flash), mkStop(1, STATE_COLORS.flash));
  defs.append(gradCond, gradEvap);
  viz.condStops = gradCond.querySelectorAll("stop");
  viz.evapStops = gradEvap.querySelectorAll("stop");

  // Refrigerant phase-fill rects inside the two coils (sit above box, below fins)
  const addFill = (selector, x, y, w, h, grad) => {
    const group = document.querySelector(selector);
    const rect = document.createElementNS(NS, "rect");
    rect.setAttribute("x", x); rect.setAttribute("y", y);
    rect.setAttribute("width", w); rect.setAttribute("height", h);
    rect.setAttribute("rx", 8); rect.setAttribute("class", "coil-fill");
    rect.setAttribute("fill", `url(#${grad})`); rect.setAttribute("opacity", 0.5);
    group.insertBefore(rect, group.firstElementChild.nextSibling);
    return rect;
  };
  viz.fillCond = addFill('[data-component="condenser"]', 549, 109, 142, 82, "gradCond");
  viz.fillEvap = addFill('[data-component="evaporator"]', 109, 389, 142, 82, "gradEvap");

  // Spill overlays on the liquid and suction lines (abnormal state carried over)
  const spills = document.createElementNS(NS, "g");
  spills.id = "spills";
  const mkSpill = (refId, color) => {
    const src = document.getElementById(refId);
    const path = document.createElementNS(NS, "path");
    path.setAttribute("d", src.getAttribute("d"));
    path.setAttribute("class", "spill-pipe");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", 10);
    path.setAttribute("opacity", 0);
    path._len = src.getTotalLength();
    spills.appendChild(path);
    return path;
  };
  viz.spillLiquid = mkSpill("seg-liquid", STATE_COLORS.hotgas);
  viz.spillSuction = mkSpill("seg-suction", STATE_COLORS.flash);
  const flow = svg.querySelector(".pipes-flow");
  flow.parentNode.insertBefore(spills, flow.nextSibling);
}

function renderFaultViz() {
  const v = VIZ[state.fault] || VIZ.none;
  const dL = (state.load - 100) / 100;
  // healthy fronts breathe a little with load so the sliders also show movement
  const condFront = clamp(v.condFront + dL * 0.15, 0.08, 0.97);
  const evapFront = clamp(v.evapFront + dL * 0.12, 0.08, 0.97);

  // condenser gradient: hot from 0→condFront, then blend to liquid
  viz.condStops[1].setAttribute("offset", condFront);
  viz.condStops[2].setAttribute("offset", Math.min(condFront + 0.14, 1));
  // evaporator gradient: vapour on the left (outlet), wet on the right (inlet)
  const bb = 1 - evapFront;
  viz.evapStops[1].setAttribute("offset", Math.max(bb - 0.07, 0));
  viz.evapStops[2].setAttribute("offset", Math.min(bb + 0.07, 1));

  // spill overlays: show the first `frac` of the pipe in the wrong-state colour
  const setSpill = (path, frac) => {
    if (frac <= 0.001) { path._op = 0; path.setAttribute("opacity", 0); return; }
    const vis = path._len * frac;
    path.setAttribute("stroke-dasharray", `${vis} ${path._len + vis}`);
    path._op = 0.85;
  };
  setSpill(viz.spillLiquid, v.liquidSpill);
  setSpill(viz.spillSuction, v.suctionSpill);

  // warning pulse on affected components (suppressed while a quiz scenario is live)
  const flags = (Quiz.active && !Quiz.answered) ? [] : v.flags;
  document.querySelectorAll(".component").forEach(c =>
    c.classList.toggle("fault-flag", flags.includes(c.dataset.component)));
}

/* ========================================================================= */
/* P–h diagram                                                               */
/* ========================================================================= */
const ph = { x0: 50, x1: 320, y0: 22, y1: 196, hMin: 130, hMax: 445,
  pTicks: [0.5, 1, 2, 5, 10, 20, 40] };
const hToX = (h) => ph.x0 + (clamp(h, ph.hMin, ph.hMax) - ph.hMin) / (ph.hMax - ph.hMin) * (ph.x1 - ph.x0);
function pToY(p) {
  const lo = Math.log10(0.5), hi = Math.log10(45);
  const f = (Math.log10(clamp(p, 0.5, 45)) - lo) / (hi - lo);
  return ph.y1 - f * (ph.y1 - ph.y0);
}
let phCyclePoints = [];
let movingDot = null;
const DOT_COLORS = [STATE_COLORS.hotgas, STATE_COLORS.liquid, STATE_COLORS.flash, STATE_COLORS.vapor];

function renderPhChart() {
  const c = current, tbl = c.base.satTable;
  const svg = document.getElementById("phChart");
  svg.innerHTML = "";
  const add = (tag, attrs, text) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (text != null) el.textContent = text;
    svg.appendChild(el);
    return el;
  };

  // auto-scale enthalpy axis to this fluid's table
  ph.hMin = Math.min(...tbl.map(r => r.hf)) - 8;
  ph.hMax = Math.max(...tbl.map(r => r.hg)) + 12;

  add("line", { x1: ph.x0, y1: ph.y0, x2: ph.x0, y2: ph.y1, stroke: "#2a3b4d" });
  add("line", { x1: ph.x0, y1: ph.y1, x2: ph.x1, y2: ph.y1, stroke: "#2a3b4d" });
  add("text", { x: 6, y: 14, fill: "#8aa0b3", "font-size": 10 }, `P (${U.P_UNITS[U.prefs.p].label} abs)`);
  add("text", { x: ph.x1, y: 242, fill: "#8aa0b3", "font-size": 10, "text-anchor": "end" }, "h (kJ/kg) →");

  const fmtTick = (bar) => {
    const v = U.barTo(bar);
    return String(v >= 100 ? Math.round(v) : Math.round(v * 10) / 10);
  };
  ph.pTicks.forEach(p => {
    const y = pToY(p);
    add("line", { x1: ph.x0 - 3, y1: y, x2: ph.x0, y2: y, stroke: "#2a3b4d" });
    add("text", { x: ph.x0 - 6, y: y + 3, fill: "#6f8294", "font-size": 9, "text-anchor": "end" }, fmtTick(p));
  });
  const span = ph.hMax - ph.hMin;
  [0, 0.34, 0.67, 1].map(f => Math.round((ph.hMin + f * span) / 10) * 10).forEach(h => {
    const x = hToX(h);
    add("line", { x1: x, y1: ph.y1, x2: x, y2: ph.y1 + 3, stroke: "#2a3b4d" });
    add("text", { x: x, y: ph.y1 + 14, fill: "#6f8294", "font-size": 9, "text-anchor": "middle" }, String(h));
  });

  // saturation dome from this fluid's real table
  let dome = "M " + hToX(tbl[0].hf) + " " + pToY(tbl[0].P);
  tbl.forEach(r => { dome += ` L ${hToX(r.hf)} ${pToY(r.P)}`; });
  for (let i = tbl.length - 1; i >= 0; i--) dome += ` L ${hToX(tbl[i].hg)} ${pToY(tbl[i].P)}`;
  dome += " Z";
  add("path", { d: dome, fill: "rgba(79,195,247,0.06)", stroke: "#3a5c72", "stroke-width": 1.1 });

  // Healthy reference cycle (same speed & load, no fault) for comparison.
  // Hidden while a quiz scenario is unanswered — it would give the game away.
  const quizHide = Quiz.active && !Quiz.answered;
  const showCompare = state.showHealthy && state.fault !== "none" && !quizHide;
  document.getElementById("compareToggle").hidden = state.fault === "none" || quizHide;
  if (showCompare) {
    const h = deriveAt(state.refrigerant, state.speed, state.load, "none");
    const H = [
      { x: hToX(h.h1), y: pToY(h.pLow) }, { x: hToX(h.h2), y: pToY(h.pHigh) },
      { x: hToX(h.h3), y: pToY(h.pHigh) }, { x: hToX(h.h4), y: pToY(h.pLow) },
    ];
    add("path", {
      d: `M ${H[0].x} ${H[0].y} L ${H[1].x} ${H[1].y} L ${H[2].x} ${H[2].y} L ${H[3].x} ${H[3].y} Z`,
      fill: "none", stroke: "#6fe0a0", "stroke-width": 1.4, "stroke-dasharray": "4 3",
      "stroke-linejoin": "round", opacity: 0.8,
    });
    H.forEach(p => add("circle", { cx: p.x, cy: p.y, r: 2, fill: "#6fe0a0", opacity: 0.8 }));
    add("text", { x: H[0].x + 4, y: H[0].y - 5, fill: "#6fe0a0", "font-size": 9, opacity: 0.9 }, "healthy");
  }

  const P = {
    p1: { x: hToX(c.h1), y: pToY(c.pLow) },
    p2: { x: hToX(c.h2), y: pToY(c.pHigh) },
    p3: { x: hToX(c.h3), y: pToY(c.pHigh) },
    p4: { x: hToX(c.h4), y: pToY(c.pLow) },
  };
  add("path", {
    d: `M ${P.p1.x} ${P.p1.y} L ${P.p2.x} ${P.p2.y} L ${P.p3.x} ${P.p3.y} L ${P.p4.x} ${P.p4.y} Z`,
    fill: "none", stroke: "#e7eef5", "stroke-width": 1.6, "stroke-linejoin": "round",
  });
  [[P.p1, "1", -11, 12], [P.p2, "2", 6, -4], [P.p3, "3", -11, -4], [P.p4, "4", -11, -4]].forEach(([p, t, dx, dy]) => {
    add("circle", { cx: p.x, cy: p.y, r: 3, fill: "#e7eef5" });
    add("text", { x: p.x + dx, y: p.y + dy, fill: "#8aa0b3", "font-size": 10 }, t);
  });

  phCyclePoints = [P.p1, P.p2, P.p3, P.p4];
  movingDot = add("circle", { cx: P.p1.x, cy: P.p1.y, r: 5, fill: STATE_COLORS.hotgas, stroke: "#fff", "stroke-width": 1.5 });
  updateMovingDot();

  document.getElementById("phSource").textContent = c.base.label + " data";
}

function updateMovingDot() {
  if (!movingDot || phCyclePoints.length < 4) return;
  const seg = Math.floor(state.phaseT * 4) % 4;
  const local = (state.phaseT * 4) % 1;
  const a = phCyclePoints[seg], b = phCyclePoints[(seg + 1) % 4];
  movingDot.setAttribute("cx", a.x + (b.x - a.x) * local);
  movingDot.setAttribute("cy", a.y + (b.y - a.y) * local);
  movingDot.setAttribute("fill", DOT_COLORS[seg]);
}

/* ========================================================================= */
/* Component info panel                                                      */
/* ========================================================================= */
function showInfo(key) {
  const data = COMPONENTS[key](current);
  document.getElementById("infoTitle").textContent = data.title;
  document.getElementById("infoBody").innerHTML = `
    <div class="phase-row">
      <div class="phase-col"><div class="k">In</div><div class="v">${data.inState}</div>
        <div class="k" style="margin-top:6px">${data.inVals}</div></div>
      <div class="arrow">→</div>
      <div class="phase-col"><div class="k">Out</div><div class="v">${data.outState}</div>
        <div class="k" style="margin-top:6px">${data.outVals}</div></div>
    </div>
    <p>${data.body}</p>
    <ul>${data.points.map(p => `<li>${p}</li>`).join("")}</ul>`;
  document.querySelectorAll(".component").forEach(comp =>
    comp.classList.toggle("selected", comp.dataset.component === key));
  state.selected = key;
}

/* ========================================================================= */
/* Guided tour                                                               */
/* ========================================================================= */
const TOUR = [
  { component: null, seg: null, phaseT: 0, title: "The vapour-compression cycle",
    text: "This loop moves heat from a cold space to a warmer one. The refrigerant is pumped around continuously, absorbing heat in one place and releasing it in another by changing state. Step through to follow one trip around the loop." },
  { component: "compressor", seg: "seg-discharge", phaseT: 0.12, title: "1 · Compressor",
    text: "Cool low-pressure vapour is squeezed into hot high-pressure gas. Pressure and temperature shoot up so the refrigerant is now hotter than the outside air — watch point 1 climb to point 2 on the P–h chart." },
  { component: "condenser", seg: "seg-liquid", phaseT: 0.40, title: "2 · Condenser",
    text: "The hot gas blows across the fins and dumps its heat to the air. It condenses from vapour to liquid at constant temperature (the flat top of the cycle, 2 → 3) and subcools slightly." },
  { component: "receiver", seg: "seg-liquid", phaseT: 0.50, title: "3 · Liquid receiver",
    text: "A reservoir of high-pressure liquid sits on the liquid line, smoothing out changes in load and ensuring only solid liquid (no bubbles) reaches the metering device." },
  { component: "metering", seg: "seg-evapfeed", phaseT: 0.62, title: "4 · Metering device",
    text: "The liquid is throttled through a tiny restriction. Pressure crashes, some of it flash-boils, and the mixture chills to evaporator temperature — the vertical drop 3 → 4 on the P–h chart." },
  { component: "evaporator", seg: "seg-suction", phaseT: 0.88, title: "5 · Evaporator",
    text: "Cold liquid boils inside the space being cooled, soaking up heat (this is the actual cooling, 4 → 1). It superheats slightly to dry out, then heads back to the compressor to start again." },
  { component: null, seg: null, phaseT: 0, title: "Full circle",
    text: "That's one complete cycle. Heat went IN at the evaporator and OUT at the condenser; the compressor did the work to make it flow uphill. Try the sliders and fault selector to see how the cycle reshapes — then test yourself with the Technician Quiz." },
];

function setTour(active) {
  state.tourActive = active;
  document.getElementById("tourBar").hidden = !active;
  document.querySelectorAll(".pipes-flow path").forEach(p => p.classList.remove("tour-dim"));
  document.querySelectorAll(".component").forEach(c => c.classList.remove("tour-focus"));
  if (active) { state.tourIndex = 0; gotoTourStep(0); }
}
function gotoTourStep(i) {
  state.tourIndex = clamp(i, 0, TOUR.length - 1);
  const step = TOUR[state.tourIndex];
  document.getElementById("tourStep").textContent = state.tourIndex + 1;
  document.getElementById("tourTotal").textContent = TOUR.length;
  document.getElementById("tourTitle").textContent = step.title;
  document.getElementById("tourText").textContent = step.text;
  document.getElementById("tourPrev").disabled = state.tourIndex === 0;
  document.getElementById("tourNext").textContent = state.tourIndex === TOUR.length - 1 ? "Finish" : "Next";
  document.querySelectorAll(".component").forEach(c => c.classList.toggle("tour-focus", c.dataset.component === step.component));
  document.querySelectorAll(".pipes-flow path").forEach(p => p.classList.toggle("tour-dim", step.seg != null && p.id !== step.seg));
  if (step.component) showInfo(step.component);
  state.phaseT = step.phaseT;
  updateMovingDot();
}

/* ========================================================================= */
/* Power + faults                                                            */
/* ========================================================================= */
function setRunning(run) {
  state.running = run;
  const btn = document.getElementById("powerBtn");
  btn.textContent = run ? "Stop Compressor" : "Start Compressor";
  btn.className = "btn " + (run ? "btn-stop" : "btn-start");
  renderReadouts();
}

function updateFaultBanner() {
  const f = FAULTS[state.fault];
  const banner = document.getElementById("faultBanner");
  if (Quiz.active || state.fault === "none" || !f.diag) { banner.hidden = true; return; }
  banner.hidden = false;
  document.getElementById("faultText").innerHTML = `<b>${f.label}.</b> ${f.diag}`;
}

function refreshAll() {
  recompute();
  renderReadouts();
  renderPerf();
  renderGauges(current);
  renderPhChart();
  renderPtChart();
  renderFaultViz();
  updateFaultBanner();
  if (state.selected) showInfo(state.selected);
}

/* ========================================================================= */
/* Animation loop                                                            */
/* ========================================================================= */
const BASE_SPEED = 2.2;
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentSpeed = BASE_SPEED;
let greyFactor = 0;           // 0 = full colour, 1 = grey (compressor off)
function loop() {
  const animate = state.running && !state.tourActive && !REDUCED_MOTION.matches;
  const targetSpeed = animate ? BASE_SPEED * (state.speed / 100) : 0;
  currentSpeed += (targetSpeed - currentSpeed) * 0.05;

  // Fade pipes to grey when the compressor is off (no heat or cooling).
  const greyTarget = state.running ? 0 : 1;
  greyFactor += (greyTarget - greyFactor) * 0.04;
  applyPipeColors(greyFactor);

  state.dashOffset = (state.dashOffset - currentSpeed) % 1000;
  document.querySelectorAll(".pipes-flow path").forEach(p => p.setAttribute("stroke-dashoffset", state.dashOffset));
  updateParticles(currentSpeed);
  if (!state.tourActive) {
    state.phaseT = (state.phaseT + currentSpeed * 0.0012) % 1;
    updateMovingDot();
  }
  requestAnimationFrame(loop);
}

/* ========================================================================= */
/* Wiring                                                                    */
/* ========================================================================= */
function focusSectionSoon(el) {
  if (!el) return;
  // tabindex=-1 keeps the section out of the normal tab order while allowing
  // programmatic focus after we scroll it into view.
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      try { el.focus({ preventScroll: true }); }
      catch (e) { el.focus(); }
    });
  });
}

function init() {
  // Deep links (used by the Learn course): index.html?r=R404A&fault=lowCharge
  // &speed=120&load=80, plus quiz=1 / tour=1 / view=pt.
  const urlq = new URLSearchParams(location.search);
  if (urlq.get("r") && REFRIGERANTS[urlq.get("r")]) state.refrigerant = urlq.get("r");
  if (urlq.get("fault") && FAULTS[urlq.get("fault")]) state.fault = urlq.get("fault");
  const uSpeed = parseInt(urlq.get("speed"), 10);
  if (uSpeed >= 50 && uSpeed <= 150) state.speed = uSpeed;
  const uLoad = parseInt(urlq.get("load"), 10);
  if (uLoad >= 50 && uLoad <= 150) state.load = uLoad;

  const sel = document.getElementById("refrigerantSelect");
  sel.innerHTML = Object.keys(REFRIGERANTS).map(k => `<option value="${k}">${REFRIGERANTS[k].label}</option>`).join("");
  sel.value = state.refrigerant;
  sel.addEventListener("change", () => { state.refrigerant = sel.value; refreshAll(); });

  const fsel = document.getElementById("faultSelect");
  fsel.innerHTML = Object.keys(FAULTS).map(k => `<option value="${k}">${FAULTS[k].label}</option>`).join("");
  fsel.value = state.fault;
  fsel.addEventListener("change", () => { state.fault = fsel.value; refreshAll(); });

  // Unit preferences
  const pSel = document.getElementById("pUnitSelect");
  const tSel = document.getElementById("tUnitSelect");
  pSel.value = U.prefs.p;
  tSel.value = U.prefs.t;
  const onUnitChange = () => {
    U.setPrefs(pSel.value, tSel.value);
    refreshAll();
    ptRenderQuestion();
  };
  pSel.addEventListener("change", onUnitChange);
  tSel.addEventListener("change", onUnitChange);

  document.getElementById("comparePh").addEventListener("change", (e) => {
    state.showHealthy = e.target.checked;
    renderPhChart();
  });

  document.getElementById("powerBtn").addEventListener("click", () => setRunning(!state.running));

  const speed = document.getElementById("speedSlider");
  const load = document.getElementById("loadSlider");
  speed.value = state.speed;
  load.value = state.load;
  document.getElementById("speedOut").textContent = state.speed + "%";
  document.getElementById("loadOut").textContent = state.load + "%";
  speed.addEventListener("input", () => {
    state.speed = +speed.value;
    document.getElementById("speedOut").textContent = state.speed + "%";
    refreshAll();
  });
  load.addEventListener("input", () => {
    state.load = +load.value;
    document.getElementById("loadOut").textContent = state.load + "%";
    refreshAll();
  });
  document.getElementById("resetBtn").addEventListener("click", () => {
    state.speed = 100; state.load = 100; state.fault = "none";
    speed.value = 100; load.value = 100; fsel.value = "none";
    document.getElementById("speedOut").textContent = "100%";
    document.getElementById("loadOut").textContent = "100%";
    refreshAll();
  });

  const onPick = (key) => {
    showInfo(key);
    const panel = document.getElementById("infoPanel");
    // bring the info panel (just under the diagram) into view on small screens
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    focusSectionSoon(panel);
  };
  document.querySelectorAll(".component").forEach(c => {
    c.addEventListener("click", () => onPick(c.dataset.component));
    c.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPick(c.dataset.component); }
    });
  });

  document.getElementById("tourBtn").addEventListener("click", () => setTour(true));
  document.getElementById("tourExit").addEventListener("click", () => setTour(false));
  document.getElementById("tourPrev").addEventListener("click", () => gotoTourStep(state.tourIndex - 1));
  document.getElementById("tourNext").addEventListener("click", () => {
    if (state.tourIndex === TOUR.length - 1) setTour(false);
    else gotoTourStep(state.tourIndex + 1);
  });

  // Technician quiz
  document.getElementById("quizBtn").addEventListener("click", () => Quiz.active ? endQuiz() : startQuiz());
  document.getElementById("quizHintBtn").addEventListener("click", quizShowClues);
  document.getElementById("quizNextBtn").addEventListener("click", quizNextScenario);
  document.getElementById("quizEndBtn").addEventListener("click", endQuiz);

  recompute();
  renderLegend();
  buildParticles();
  setupFaultViz();
  refreshAll();
  setRunning(true);
  initPtTrainer();
  requestAnimationFrame(loop);

  // Deep-link actions, once everything is wired
  if (urlq.get("quiz") === "1") startQuiz();
  else if (urlq.get("tour") === "1") setTour(true);
  if (urlq.get("view") === "pt") {
    const ptSection = document.querySelector(".pt-section");
    ptSection.scrollIntoView({ behavior: "smooth", block: "start" });
    focusSectionSoon(ptSection);
  }
}

document.addEventListener("DOMContentLoaded", init);
