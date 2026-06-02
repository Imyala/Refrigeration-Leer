/* =========================================================================
   Refrigeration Cycle Simulator
   -------------------------------------------------------------------------
   A vapour-compression cycle visualised. Each refrigerant is backed by a
   saturation table, so the P-h dome, saturation temperatures and cycle
   enthalpies are all derived from data. Sliders (compressor speed, evaporator
   load) and a fault selector drive an operating-point model so the whole
   system — pressures, temps, flow, COP, capacity — responds live.

   Property values are representative/approximate and meant for learning the
   shape and behaviour of the cycle, not for engineering design.
   ========================================================================= */

/* ---- Saturation tables  [T(°C), P(bar abs), hf, hg (kJ/kg)] ---------------
   Each table is internally consistent (its own enthalpy reference), so
   differences within a fluid — and therefore COP — are meaningful.           */
function toRows(arr) { return arr.map(([T, P, hf, hg]) => ({ T, P, hf, hg })); }

const TABLES = {
  R134a: toRows([
    [-40,0.512,148.1,374.0],[-30,0.844,161.1,380.4],[-20,1.327,173.6,386.6],
    [-10,2.007,186.7,392.7],[0,2.928,200.0,398.6],[10,4.146,213.6,404.2],
    [20,5.717,227.5,409.3],[30,7.702,241.7,414.0],[40,10.166,256.4,418.0],
    [50,13.179,271.6,421.2],[60,16.818,287.5,423.3],[70,21.168,304.3,424.1],
    [80,26.332,322.4,422.9],[90,32.435,342.9,419.0],[100,39.724,369.0,408.0],
  ]),
  R410A: toRows([
    [-40,1.76,137.5,400.0],[-30,2.72,153.0,405.0],[-20,4.00,169.0,410.0],
    [-10,5.73,185.0,414.5],[0,8.00,200.0,421.0],[10,10.9,218.0,425.0],
    [20,14.4,234.0,428.0],[30,18.8,251.0,430.0],[40,24.1,269.0,430.5],
    [50,30.6,289.0,428.0],[60,38.3,311.0,421.0],
  ]),
  R22: toRows([
    [-40,1.05,154.0,388.0],[-30,1.64,166.0,393.0],[-20,2.45,178.0,398.0],
    [-10,3.55,190.0,402.0],[0,4.98,200.0,405.0],[10,6.81,213.0,409.0],
    [20,9.10,224.0,412.0],[30,11.9,237.0,414.0],[40,15.3,250.0,416.0],
    [50,19.4,264.0,416.0],[60,24.3,279.0,414.0],[70,30.2,296.0,409.0],
  ]),
  R404A: toRows([
    [-40,1.32,150.0,358.0],[-30,2.05,165.0,364.0],[-20,3.05,177.0,369.0],
    [-10,4.39,189.0,372.0],[0,6.12,200.0,375.0],[10,8.31,214.0,378.0],
    [20,11.1,229.0,379.0],[30,14.4,245.0,379.0],[40,18.5,262.0,377.0],
    [50,23.2,281.0,372.0],[60,28.8,302.0,362.0],
  ]),
};

// Generic 1-D linear interpolation: look up `outKey` for a given value of `inKey`.
function interpTable(table, inKey, x, outKey) {
  const asc = table[0][inKey] < table[table.length - 1][inKey];
  for (let i = 0; i < table.length - 1; i++) {
    const a = table[i], b = table[i + 1];
    const lo = Math.min(a[inKey], b[inKey]), hi = Math.max(a[inKey], b[inKey]);
    if (x >= lo && x <= hi) {
      const f = (x - a[inKey]) / (b[inKey] - a[inKey]);
      return a[outKey] + f * (b[outKey] - a[outKey]);
    }
  }
  const first = table[0], last = table[table.length - 1];
  return x <= (asc ? first[inKey] : last[inKey])
    ? (asc ? first : last)[outKey] : (asc ? last : first)[outKey];
}

const CP_VAP = 0.90;   // approx vapour specific heat (kJ/kg·K) for superheat
const CP_LIQ = 1.40;   // approx liquid specific heat (kJ/kg·K) for subcool

/* ---- Refrigerant base operating points ----------------------------------- */
const REFRIGERANTS = {
  R134a: { label: "R134a", pLow: 3.5,  pHigh: 16.0, tEvap: 6,  tCond: 58, tSuction: 12, tDischarge: 75, tLiquid: 52 },
  R410A: { label: "R410A", pLow: 9.0,  pHigh: 30.0, tEvap: 6,  tCond: 50, tSuction: 12, tDischarge: 80, tLiquid: 45 },
  R22:   { label: "R22",   pLow: 5.0,  pHigh: 19.5, tEvap: 5,  tCond: 50, tSuction: 11, tDischarge: 78, tLiquid: 44 },
  R404A: { label: "R404A", pLow: 4.2,  pHigh: 20.0, tEvap: -10,tCond: 43, tSuction: -4, tDischarge: 78, tLiquid: 38 },
};
Object.keys(REFRIGERANTS).forEach(k => { REFRIGERANTS[k].satTable = TABLES[k]; });
const BASE_FLOW = 20;  // L/min at 100% compressor speed

/* ---- Fault library -------------------------------------------------------
   Each fault perturbs the operating point (pressure multipliers, superheat /
   subcool / discharge offsets) the way the real fault would, plus a diagnosis. */
const FAULTS = {
  none: { label: "Healthy", mLow: 1, mHigh: 1, dSuper: 0, dSub: 0, dDisch: 0, diag: null },
  lowCharge: {
    label: "Low refrigerant charge", mLow: 0.72, mHigh: 0.88, dSuper: 14, dSub: -8, dDisch: 8,
    diag: "Undercharged. Both pressures sag, suction superheat runs high, and subcooling falls toward zero — there isn't enough liquid to fill the condenser. Capacity and COP drop.",
  },
  dirtyCondenser: {
    label: "Dirty / blocked condenser", mLow: 1.06, mHigh: 1.40, dSuper: -1, dSub: 5, dDisch: 18,
    diag: "The condenser can't reject its heat. Head pressure and discharge temperature climb, subcooling rises, and the compressor works much harder — COP falls.",
  },
  icedEvaporator: {
    label: "Iced / starved evaporator", mLow: 0.60, mHigh: 0.92, dSuper: -7, dSub: 1, dDisch: -4,
    diag: "Poor evaporator airflow. Suction pressure and coil temperature drop, superheat collapses (risking liquid floodback to the compressor), and capacity plummets.",
  },
  overcharge: {
    label: "Overcharge", mLow: 1.08, mHigh: 1.22, dSuper: -4, dSub: 9, dDisch: 6,
    diag: "Too much refrigerant. Head pressure and subcooling run high as liquid backs up into the condenser, raising compressor load and lowering efficiency.",
  },
};

/* ---- State colours -------------------------------------------------------- */
function getCss(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
const STATE_COLORS = {
  hotgas: getCss("--state-hotgas"), liquid: getCss("--state-liquid"),
  flash:  getCss("--state-flash"),  vapor:  getCss("--state-vapor"),
};
function stateChip(color, text) { return `<span class="state-chip" style="background:${color}">${text}</span>`; }

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
};
let current = null;

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const r1 = (v) => Math.round(v * 10) / 10;
const r0 = (v) => Math.round(v);

const satTemp = (base, p) => interpTable(base.satTable, "P", p, "T");

/* ---- Derive a full operating point --------------------------------------- */
function deriveAt(refKey, speed, load, faultKey) {
  const base = REFRIGERANTS[refKey];
  const s = speed / 100, L = load / 100;
  const f = FAULTS[faultKey] || FAULTS.none;
  const tbl = base.satTable;

  let pLow  = base.pLow  * (1 + 0.30 * (L - 1) - 0.22 * (s - 1)) * f.mLow;
  let pHigh = base.pHigh * (1 + 0.28 * (s - 1) + 0.08 * (L - 1)) * f.mHigh;
  pLow  = clamp(pLow,  tbl[0].P + 0.05, base.pHigh * 0.85);
  pHigh = clamp(pHigh, base.pLow * 1.4, tbl[tbl.length - 1].P - 0.5);

  const tEvap = satTemp(base, pLow);
  const tCond = satTemp(base, pHigh);
  const superheat = clamp((base.tSuction - base.tEvap) + f.dSuper, 1, 60);
  const subcool   = clamp((base.tCond   - base.tLiquid) + f.dSub, 0, 40);
  const tSuction = tEvap + superheat;
  const tLiquid  = tCond - subcool;

  const ratio = pHigh / pLow, baseRatio = base.pHigh / base.pLow;
  const tDischarge = tCond + (base.tDischarge - base.tCond) * (ratio / baseRatio) * (0.6 + 0.4 * s) + f.dDisch;
  const flow = BASE_FLOW * s;

  // Enthalpies straight from the table
  const h3 = interpTable(tbl, "T", tLiquid, "hf");          // subcooled liquid ≈ hf(T)
  const h4 = h3;                                            // throttling is isenthalpic
  const h1 = interpTable(tbl, "T", tEvap, "hg") + CP_VAP * superheat;
  const h2 = interpTable(tbl, "T", tCond, "hg") + CP_VAP * (tDischarge - tCond);

  const effect  = h1 - h4;                  // refrigeration effect (kJ/kg)
  const work    = Math.max(h2 - h1, 0.1);   // compressor work (kJ/kg)
  const heatRej = h2 - h3;                  // heat rejected (kJ/kg)
  const cop     = effect / work;
  const capRaw  = effect * pLow * flow;     // capacity proxy (effect × density-proxy × flow)

  return { base, pLow, pHigh, tEvap, tCond, tSuction, tDischarge, tLiquid,
    superheat, subcool, ratio, flow, h1, h2, h3, h4, effect, work, heatRej, cop, capRaw };
}

function recompute() {
  current = deriveAt(state.refrigerant, state.speed, state.load, state.fault);
  const base = current.base;
  if (base._capRef == null) base._capRef = deriveAt(state.refrigerant, 100, 100, "none").capRaw;
  current.capacityPct = current.capRaw / base._capRef * 100;
}

/* ========================================================================= */
/* Component knowledge base (uses live `current`)                            */
/* ========================================================================= */
const COMPONENTS = {
  compressor: (c) => ({
    title: "Compressor — the pump of the cycle",
    inState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    outState: stateChip(STATE_COLORS.hotgas, "High-pressure hot gas"),
    inVals: `${r1(c.pLow)} bar · ${r0(c.tSuction)}°C`,
    outVals: `${r1(c.pHigh)} bar · ${r0(c.tDischarge)}°C`,
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
    inVals: `${r1(c.pHigh)} bar · ${r0(c.tDischarge)}°C`,
    outVals: `${r1(c.pHigh)} bar · ${r0(c.tLiquid)}°C`,
    body: `A heat exchanger (usually fan-cooled) where the hot gas gives up its heat.
      The gas first <b>desuperheats</b>, then <b>condenses</b> at constant temperature
      from vapour into liquid, and finally <b>subcools</b> a little.`,
    points: [
      "Heat leaving = the heat absorbed in the evaporator <i>plus</i> the compressor work.",
      `Condensing happens at constant pressure & temperature (~${r0(c.tCond)}°C now) — the latent-heat plateau.`,
      `Subcooling ~${r0(c.subcool)} K below saturation guarantees a solid liquid feed to the metering device.`,
    ],
  }),
  receiver: (c) => ({
    title: "Liquid receiver — the storage buffer",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${r1(c.pHigh)} bar · ${r0(c.tLiquid)}°C`,
    outVals: `${r1(c.pHigh)} bar · ${r0(c.tLiquid)}°C`,
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
    inVals: `${r1(c.pHigh)} bar · ${r0(c.tLiquid)}°C`,
    outVals: `${r1(c.pLow)} bar · ${r0(c.tEvap)}°C`,
    body: `A restriction (expansion valve or capillary tube) that splits the high and
      low sides. Liquid is <b>throttled</b> from high to low pressure. As pressure
      drops, some flash-boils, and that flashing chills the rest to evaporator
      temperature.`,
    points: [
      `Pressure drops from ${r1(c.pHigh)} to ${r1(c.pLow)} bar across the valve.`,
      "Leaves as a cold, low-pressure mixture of liquid + a little vapour (the 'flash gas').",
      "Meters exactly the right amount of refrigerant into the evaporator for the load.",
    ],
  }),
  evaporator: (c) => ({
    title: "Evaporator — where the cooling happens",
    inState: stateChip(STATE_COLORS.flash, "Low-pressure flash mix"),
    outState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    inVals: `${r1(c.pLow)} bar · ${r0(c.tEvap)}°C`,
    outVals: `${r1(c.pLow)} bar · ${r0(c.tSuction)}°C`,
    body: `A heat exchanger inside the space being cooled. The cold liquid <b>boils</b>,
      soaking up heat from the air (the useful refrigeration effect), then
      <b>superheats</b> slightly so only dry vapour returns to the compressor.`,
    points: [
      `Boiling happens at constant pressure & temperature (~${r0(c.tEvap)}°C now) — absorbing latent heat.`,
      "Heat absorbed here is exactly what makes the room or box cold.",
      `The last ~${r0(c.superheat)} K of superheat dry out the vapour to protect the compressor.`,
    ],
  }),
};

/* ========================================================================= */
/* Readouts                                                                  */
/* ========================================================================= */
function renderReadouts() {
  const c = current;
  const rows = [
    { label: "High Side",     value: `${r1(c.pHigh)} bar`,    cls: "amber" },
    { label: "Low Side",      value: `${r1(c.pLow)} bar`,     cls: "cold" },
    { label: "Condenser",     value: `${r0(c.tCond)}°C`,      cls: "hot" },
    { label: "Evaporator",    value: `${r0(c.tEvap)}°C`,      cls: "cold" },
    { label: "Discharge Gas", value: `${r0(c.tDischarge)}°C`, cls: "hot" },
    { label: "Superheat",     value: `${r0(c.superheat)} K`,  cls: "" },
    { label: "Subcool",       value: `${r0(c.subcool)} K`,    cls: "" },
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
    for (let i = 0; i < PARTICLES_PER_SEGMENT; i++) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "4");
      dot.setAttribute("class", "particle");
      dot.setAttribute("fill", seg.color);
      g.appendChild(dot);
      particles.push({ el: dot, path, len, t: i / PARTICLES_PER_SEGMENT });
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
  const NS = "http://www.w3.org/2000/svg";
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
  add("text", { x: 10, y: 14, fill: "#8aa0b3", "font-size": 10 }, "P (bar)");
  add("text", { x: ph.x1, y: 242, fill: "#8aa0b3", "font-size": 10, "text-anchor": "end" }, "h (kJ/kg) →");

  ph.pTicks.forEach(p => {
    const y = pToY(p);
    add("line", { x1: ph.x0 - 3, y1: y, x2: ph.x0, y2: y, stroke: "#2a3b4d" });
    add("text", { x: ph.x0 - 6, y: y + 3, fill: "#6f8294", "font-size": 9, "text-anchor": "end" }, String(p));
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
    text: "That's one complete cycle. Heat went IN at the evaporator and OUT at the condenser; the compressor did the work to make it flow uphill. Try the sliders and fault selector to see how the cycle reshapes, or pick a different refrigerant." },
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
  document.getElementById("particles").style.opacity = run ? "1" : "0.25";
  renderReadouts();
}

function updateFaultBanner() {
  const f = FAULTS[state.fault];
  const banner = document.getElementById("faultBanner");
  if (state.fault === "none" || !f.diag) { banner.hidden = true; return; }
  banner.hidden = false;
  document.getElementById("faultText").innerHTML = `<b>${f.label}.</b> ${f.diag}`;
}

function refreshAll() {
  recompute();
  renderReadouts();
  renderPerf();
  renderPhChart();
  updateFaultBanner();
  if (state.selected) showInfo(state.selected);
}

/* ========================================================================= */
/* Animation loop                                                            */
/* ========================================================================= */
const BASE_SPEED = 2.2;
let currentSpeed = BASE_SPEED;
function loop() {
  const targetSpeed = (state.running && !state.tourActive) ? BASE_SPEED * (state.speed / 100) : 0;
  currentSpeed += (targetSpeed - currentSpeed) * 0.05;
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
function init() {
  const sel = document.getElementById("refrigerantSelect");
  sel.innerHTML = Object.keys(REFRIGERANTS).map(k => `<option value="${k}">${REFRIGERANTS[k].label}</option>`).join("");
  sel.value = state.refrigerant;
  sel.addEventListener("change", () => { state.refrigerant = sel.value; refreshAll(); });

  const fsel = document.getElementById("faultSelect");
  fsel.innerHTML = Object.keys(FAULTS).map(k => `<option value="${k}">${FAULTS[k].label}</option>`).join("");
  fsel.value = state.fault;
  fsel.addEventListener("change", () => { state.fault = fsel.value; refreshAll(); });

  document.getElementById("powerBtn").addEventListener("click", () => setRunning(!state.running));

  const speed = document.getElementById("speedSlider");
  const load = document.getElementById("loadSlider");
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

  document.querySelectorAll(".component").forEach(c => {
    c.addEventListener("click", () => showInfo(c.dataset.component));
    c.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showInfo(c.dataset.component); }
    });
  });

  document.getElementById("tourBtn").addEventListener("click", () => setTour(true));
  document.getElementById("tourExit").addEventListener("click", () => setTour(false));
  document.getElementById("tourPrev").addEventListener("click", () => gotoTourStep(state.tourIndex - 1));
  document.getElementById("tourNext").addEventListener("click", () => {
    if (state.tourIndex === TOUR.length - 1) setTour(false);
    else gotoTourStep(state.tourIndex + 1);
  });

  recompute();
  renderReadouts();
  renderPerf();
  renderLegend();
  buildParticles();
  renderPhChart();
  updateFaultBanner();
  setRunning(true);
  requestAnimationFrame(loop);
}

document.addEventListener("DOMContentLoaded", init);
