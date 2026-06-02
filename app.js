/* =========================================================================
   Refrigeration Cycle Simulator
   -------------------------------------------------------------------------
   A vapour-compression cycle visualised. Refrigerant data is kept in a table
   keyed by fluid name so the simulator is interchangeable between fluids.
   R134a is the reference fluid and is backed by a real saturation table
   (used to draw an accurate P-h dome and compute cycle enthalpies). The
   compressor-speed and evaporator-load sliders drive a small operating-point
   model so pressures, temperatures and flow respond live.

   Values are representative of a typical air-conditioning duty and are meant
   for learning the shape of the cycle, not for engineering design.
   ========================================================================= */

/* ---- Real R134a saturation table (ASHRAE-style) --------------------------
   P in bar (absolute), T in °C, hf/hg in kJ/kg (ref: hf = 200 at 0 °C).      */
const R134A_SAT = [
  { T: -40, P: 0.512, hf: 148.1, hg: 374.0 },
  { T: -30, P: 0.844, hf: 161.1, hg: 380.4 },
  { T: -20, P: 1.327, hf: 173.6, hg: 386.6 },
  { T: -10, P: 2.007, hf: 186.7, hg: 392.7 },
  { T:   0, P: 2.928, hf: 200.0, hg: 398.6 },
  { T:  10, P: 4.146, hf: 213.6, hg: 404.2 },
  { T:  20, P: 5.717, hf: 227.5, hg: 409.3 },
  { T:  30, P: 7.702, hf: 241.7, hg: 414.0 },
  { T:  40, P: 10.166, hf: 256.4, hg: 418.0 },
  { T:  50, P: 13.179, hf: 271.6, hg: 421.2 },
  { T:  60, P: 16.818, hf: 287.5, hg: 423.3 },
  { T:  70, P: 21.168, hf: 304.3, hg: 424.1 },
  { T:  80, P: 26.332, hf: 322.4, hg: 422.9 },
  { T:  90, P: 32.435, hf: 342.9, hg: 419.0 },
  { T: 100, P: 39.724, hf: 369.0, hg: 408.0 },
];
const R134A_PMIN = R134A_SAT[0].P, R134A_PMAX = R134A_SAT[R134A_SAT.length - 1].P;

// Generic 1-D linear interpolation over the table: look up `outKey` for a
// given value of `inKey` (e.g. find T or hf/hg for a pressure P, or vice-versa).
function interpTable(table, inKey, x, outKey) {
  const asc = table[0][inKey] < table[table.length - 1][inKey];
  for (let i = 0; i < table.length - 1; i++) {
    let a = table[i], b = table[i + 1];
    let lo = asc ? a[inKey] : b[inKey];
    let hi = asc ? b[inKey] : a[inKey];
    if (x >= lo && x <= hi) {
      const f = (x - a[inKey]) / (b[inKey] - a[inKey]);
      return a[outKey] + f * (b[outKey] - a[outKey]);
    }
  }
  // clamp outside range
  const first = table[0], last = table[table.length - 1];
  return x <= (asc ? first[inKey] : last[inKey])
    ? (asc ? first : last)[outKey]
    : (asc ? last : first)[outKey];
}
const r134aTsatFromP = (p) => interpTable(R134A_SAT, "P", p, "T");
const r134aHf = (t) => interpTable(R134A_SAT, "T", t, "hf");
const r134aHg = (t) => interpTable(R134A_SAT, "T", t, "hg");

const CP_VAP = 0.90;   // approx vapour specific heat (kJ/kg·K) for superheat
const CP_LIQ = 1.40;   // approx liquid specific heat (kJ/kg·K) for subcool

/* ---- Refrigerant base operating points ----------------------------------- */
const REFRIGERANTS = {
  R134a: {
    label: "R134a", note: "HFC reference fluid — backed by a real saturation table.",
    pLow: 3.5, pHigh: 16.0, tEvap: 6, tCond: 58, tSuction: 12, tDischarge: 75, tLiquid: 52,
    h1: 402, h2: 432, h3: 280, h4: 280, table: true,
  },
  R410A: {
    label: "R410A", note: "Modern high-pressure AC blend.",
    pLow: 9.0, pHigh: 30.0, tEvap: 6, tCond: 50, tSuction: 12, tDischarge: 80, tLiquid: 45,
    h1: 430, h2: 462, h3: 280, h4: 280, table: false,
  },
  R22: {
    label: "R22", note: "Legacy HCFC, being phased out.",
    pLow: 5.0, pHigh: 19.5, tEvap: 5, tCond: 50, tSuction: 11, tDischarge: 78, tLiquid: 44,
    h1: 408, h2: 442, h3: 256, h4: 256, table: false,
  },
  R404A: {
    label: "R404A", note: "Low-temperature commercial refrigeration blend.",
    pLow: 4.2, pHigh: 18.0, tEvap: -10, tCond: 45, tSuction: -4, tDischarge: 65, tLiquid: 40,
    h1: 365, h2: 392, h3: 264, h4: 264, table: false,
  },
};
const BASE_FLOW = 20;  // L/min at 100% compressor speed

/* ---- State colours -------------------------------------------------------- */
function getCss(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
const STATE_COLORS = {
  hotgas: getCss("--state-hotgas"),
  liquid: getCss("--state-liquid"),
  flash:  getCss("--state-flash"),
  vapor:  getCss("--state-vapor"),
};
function stateChip(color, text) {
  return `<span class="state-chip" style="background:${color}">${text}</span>`;
}

/* ---- Segment → state map -------------------------------------------------- */
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
  running: true,
  refrigerant: "R134a",
  speed: 100,          // compressor speed %
  load: 100,           // evaporator load %
  dashOffset: 0,
  phaseT: 0,
  selected: null,
  tourActive: false,
  tourIndex: 0,
};
let current = null;    // derived operating point (see recompute)

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const r1 = (v) => Math.round(v * 10) / 10;
const r0 = (v) => Math.round(v);

/* ---- Saturation temperature from pressure -------------------------------- */
function satTemp(base, p) {
  if (base.table) return r134aTsatFromP(p);
  // linear fit  T = a·ln(p) + b  through the two known base points
  if (base._a == null) {
    base._a = (base.tCond - base.tEvap) / (Math.log(base.pHigh) - Math.log(base.pLow));
    base._b = base.tEvap - base._a * Math.log(base.pLow);
  }
  return base._a * Math.log(p) + base._b;
}

/* ---- Derive the operating point from sliders ----------------------------- */
function recompute() {
  const base = REFRIGERANTS[state.refrigerant];
  const s = state.speed / 100;
  const L = state.load / 100;

  // Operating-point model (qualitative but directionally correct):
  // faster compressor pulls the low side down and pushes the high side up;
  // more evaporator load raises the low side.
  let pLow  = base.pLow  * (1 + 0.30 * (L - 1) - 0.22 * (s - 1));
  let pHigh = base.pHigh * (1 + 0.28 * (s - 1) + 0.08 * (L - 1));
  const pCeil = base.table ? R134A_PMAX - 0.5 : base.pHigh * 1.8;
  pLow  = clamp(pLow, base.table ? R134A_PMIN + 0.1 : 0.6, base.pHigh * 0.85);
  pHigh = clamp(pHigh, base.pLow * 1.6, pCeil);

  const tEvap = satTemp(base, pLow);
  const tCond = satTemp(base, pHigh);
  const superheat = base.tSuction - base.tEvap;     // fixed degrees of superheat
  const subcool   = base.tCond   - base.tLiquid;    // fixed degrees of subcool
  const tSuction = tEvap + superheat;
  const tLiquid  = tCond - subcool;

  const ratio = pHigh / pLow, baseRatio = base.pHigh / base.pLow;
  let tDischarge = tCond + (base.tDischarge - base.tCond) * (ratio / baseRatio) * (0.6 + 0.4 * s);

  const flow = BASE_FLOW * s;

  // Enthalpies for the P-h plot
  let h1, h2, h3, h4;
  if (base.table) {
    h3 = r134aHf(tLiquid);
    h1 = r134aHg(tEvap) + CP_VAP * (tSuction - tEvap);
    h2 = r134aHg(tCond) + CP_VAP * (tDischarge - tCond);
  } else {
    h3 = base.h3 + CP_LIQ * (tLiquid - base.tLiquid);
    h1 = base.h1 + CP_VAP * (tSuction - base.tSuction);
    h2 = base.h2 + CP_VAP * (tDischarge - base.tDischarge);
  }
  h4 = h3;  // throttling is isenthalpic

  current = {
    base, pLow, pHigh, tEvap, tCond, tSuction, tDischarge, tLiquid,
    superheat, subcool, ratio, flow, h1, h2, h3, h4, hasTable: base.table,
  };
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
    { label: "High Side",     value: `${r1(c.pHigh)} bar`, cls: "amber" },
    { label: "Low Side",      value: `${r1(c.pLow)} bar`,  cls: "cold" },
    { label: "Condenser",     value: `${r0(c.tCond)}°C`,   cls: "hot" },
    { label: "Evaporator",    value: `${r0(c.tEvap)}°C`,   cls: "cold" },
    { label: "Discharge Gas", value: `${r0(c.tDischarge)}°C`, cls: "hot" },
    { label: "Superheat",     value: `${r0(c.superheat)} K`, cls: "" },
    { label: "Flow",          value: `${r0(c.flow)} L/min`,  cls: "" },
    { label: "Compressor",    value: state.running ? "RUNNING" : "OFF", cls: state.running ? "ok" : "" },
  ];
  document.getElementById("readouts").innerHTML = rows.map(row => `
    <div class="readout">
      <div class="label">${row.label}</div>
      <div class="value ${row.cls}">${row.value}</div>
    </div>`).join("");
}

/* ========================================================================= */
/* Legend                                                                    */
/* ========================================================================= */
function renderLegend() {
  document.getElementById("legend").innerHTML = SEGMENTS.map(s => `
    <div class="legend-item">
      <span class="legend-swatch" style="background:${s.color}"></span>${s.label}
    </div>`).join("");
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
      particles.push({ el: dot, path, len, t: i / PARTICLES_PER_SEGMENT, color: seg.color });
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
const ph = {
  x0: 50, x1: 320, y0: 22, y1: 196,
  hMin: 130, hMax: 445,
  pTicks: [0.5, 1, 2, 5, 10, 20, 40],
  hTicks: [150, 250, 350, 450],
};
const hToX = (h) => ph.x0 + (clamp(h, ph.hMin, ph.hMax) - ph.hMin) / (ph.hMax - ph.hMin) * (ph.x1 - ph.x0);
function pToY(p) {
  const lo = Math.log10(0.5), hi = Math.log10(41);
  const f = (Math.log10(clamp(p, 0.5, 41)) - lo) / (hi - lo);
  return ph.y1 - f * (ph.y1 - ph.y0);
}

let phCyclePoints = [];
let movingDot = null;
const DOT_COLORS = [STATE_COLORS.hotgas, STATE_COLORS.liquid, STATE_COLORS.flash, STATE_COLORS.vapor];

function renderPhChart() {
  const c = current;
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

  // Axes
  add("line", { x1: ph.x0, y1: ph.y0, x2: ph.x0, y2: ph.y1, stroke: "#2a3b4d" });
  add("line", { x1: ph.x0, y1: ph.y1, x2: ph.x1, y2: ph.y1, stroke: "#2a3b4d" });
  add("text", { x: 10, y: 14, fill: "#8aa0b3", "font-size": 10 }, "P (bar)");
  add("text", { x: ph.x1, y: 242, fill: "#8aa0b3", "font-size": 10, "text-anchor": "end" }, "h (kJ/kg) →");

  // Pressure ticks (log)
  ph.pTicks.forEach(p => {
    const y = pToY(p);
    add("line", { x1: ph.x0 - 3, y1: y, x2: ph.x0, y2: y, stroke: "#2a3b4d" });
    add("text", { x: ph.x0 - 6, y: y + 3, fill: "#6f8294", "font-size": 9, "text-anchor": "end" }, String(p));
  });
  // Enthalpy ticks
  ph.hTicks.forEach(h => {
    const x = hToX(h);
    add("line", { x1: x, y1: ph.y1, x2: x, y2: ph.y1 + 3, stroke: "#2a3b4d" });
    add("text", { x: x, y: ph.y1 + 14, fill: "#6f8294", "font-size": 9, "text-anchor": "middle" }, String(h));
  });

  // Saturation dome from the real R134a table (liquid line up, vapour line down)
  let dome = "M " + hToX(R134A_SAT[0].hf) + " " + pToY(R134A_SAT[0].P);
  R134A_SAT.forEach(r => { dome += ` L ${hToX(r.hf)} ${pToY(r.P)}`; });
  for (let i = R134A_SAT.length - 1; i >= 0; i--) {
    dome += ` L ${hToX(R134A_SAT[i].hg)} ${pToY(R134A_SAT[i].P)}`;
  }
  dome += " Z";
  add("path", { d: dome, fill: "rgba(79,195,247,0.06)", stroke: "#3a5c72", "stroke-width": 1.1 });

  // Cycle points (1 suction, 2 discharge, 3 liquid, 4 evap inlet)
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

  document.getElementById("phSource").textContent =
    c.hasTable ? "R134a data" : "illustrative · dome = R134a";
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
      <div class="phase-col">
        <div class="k">In</div><div class="v">${data.inState}</div>
        <div class="k" style="margin-top:6px">${data.inVals}</div>
      </div>
      <div class="arrow">→</div>
      <div class="phase-col">
        <div class="k">Out</div><div class="v">${data.outState}</div>
        <div class="k" style="margin-top:6px">${data.outVals}</div>
      </div>
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
  { component: null, seg: null, phaseT: 0,
    title: "The vapour-compression cycle",
    text: "This loop moves heat from a cold space to a warmer one. The refrigerant is pumped around continuously, absorbing heat in one place and releasing it in another by changing state. Step through to follow one trip around the loop." },
  { component: "compressor", seg: "seg-discharge", phaseT: 0.12,
    title: "1 · Compressor",
    text: "Cool low-pressure vapour is squeezed into hot high-pressure gas. Pressure and temperature shoot up so the refrigerant is now hotter than the outside air — watch point 1 climb to point 2 on the P–h chart." },
  { component: "condenser", seg: "seg-liquid", phaseT: 0.40,
    title: "2 · Condenser",
    text: "The hot gas blows across the fins and dumps its heat to the air. It condenses from vapour to liquid at constant temperature (the flat top of the cycle, 2 → 3) and subcools slightly." },
  { component: "receiver", seg: "seg-liquid", phaseT: 0.50,
    title: "3 · Liquid receiver",
    text: "A reservoir of high-pressure liquid sits on the liquid line, smoothing out changes in load and ensuring only solid liquid (no bubbles) reaches the metering device." },
  { component: "metering", seg: "seg-evapfeed", phaseT: 0.62,
    title: "4 · Metering device",
    text: "The liquid is throttled through a tiny restriction. Pressure crashes, some of it flash-boils, and the mixture chills to evaporator temperature — the vertical drop 3 → 4 on the P–h chart." },
  { component: "evaporator", seg: "seg-suction", phaseT: 0.88,
    title: "5 · Evaporator",
    text: "Cold liquid boils inside the space being cooled, soaking up heat (this is the actual cooling, 4 → 1). It superheats slightly to dry out, then heads back to the compressor to start again." },
  { component: null, seg: null, phaseT: 0,
    title: "Full circle",
    text: "That's one complete cycle. Heat went IN at the evaporator and OUT at the condenser; the compressor did the work to make it flow uphill. Try the sliders to see how speed and load reshape the cycle, or pick a different refrigerant." },
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
  document.getElementById("tourNext").textContent =
    state.tourIndex === TOUR.length - 1 ? "Finish" : "Next";

  // highlight component + dim non-active pipes
  document.querySelectorAll(".component").forEach(c =>
    c.classList.toggle("tour-focus", c.dataset.component === step.component));
  document.querySelectorAll(".pipes-flow path").forEach(p =>
    p.classList.toggle("tour-dim", step.seg != null && p.id !== step.seg));

  if (step.component) showInfo(step.component);

  // freeze the P-h dot at this stage
  state.phaseT = step.phaseT;
  updateMovingDot();
}

/* ========================================================================= */
/* Power + sliders                                                           */
/* ========================================================================= */
function setRunning(run) {
  state.running = run;
  const btn = document.getElementById("powerBtn");
  btn.textContent = run ? "Stop Compressor" : "Start Compressor";
  btn.className = "btn " + (run ? "btn-stop" : "btn-start");
  document.getElementById("particles").style.opacity = run ? "1" : "0.25";
  renderReadouts();
}

function refreshAll() {
  recompute();
  renderReadouts();
  renderPhChart();
  if (state.selected) showInfo(state.selected);
}

/* ========================================================================= */
/* Animation loop                                                            */
/* ========================================================================= */
const BASE_SPEED = 2.2;     // px/frame at 100% compressor speed
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
  sel.innerHTML = Object.keys(REFRIGERANTS)
    .map(k => `<option value="${k}">${REFRIGERANTS[k].label}</option>`).join("");
  sel.value = state.refrigerant;
  sel.addEventListener("change", () => { state.refrigerant = sel.value; refreshAll(); });

  document.getElementById("powerBtn").addEventListener("click", () => setRunning(!state.running));

  // sliders
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
    state.speed = 100; state.load = 100;
    speed.value = 100; load.value = 100;
    document.getElementById("speedOut").textContent = "100%";
    document.getElementById("loadOut").textContent = "100%";
    refreshAll();
  });

  // components
  document.querySelectorAll(".component").forEach(c => {
    c.addEventListener("click", () => showInfo(c.dataset.component));
    c.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showInfo(c.dataset.component); }
    });
  });

  // tour
  document.getElementById("tourBtn").addEventListener("click", () => setTour(true));
  document.getElementById("tourExit").addEventListener("click", () => setTour(false));
  document.getElementById("tourPrev").addEventListener("click", () => gotoTourStep(state.tourIndex - 1));
  document.getElementById("tourNext").addEventListener("click", () => {
    if (state.tourIndex === TOUR.length - 1) setTour(false);
    else gotoTourStep(state.tourIndex + 1);
  });

  recompute();
  renderReadouts();
  renderLegend();
  buildParticles();
  renderPhChart();
  setRunning(true);
  requestAnimationFrame(loop);
}

document.addEventListener("DOMContentLoaded", init);
