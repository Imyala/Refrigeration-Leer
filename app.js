/* =========================================================================
   Refrigeration Cycle Simulator
   -------------------------------------------------------------------------
   A vapour-compression cycle visualised. The refrigerant data is kept in a
   table keyed by fluid name so the simulator is interchangeable between
   refrigerants. R134a is the reference fluid (matching the textbook), with a
   few common alternatives included to demonstrate swapping.

   Values are approximate, representative operating points for a typical
   air-conditioning duty. They are meant for learning the *shape* of the
   cycle, not for engineering calculations.
   ========================================================================= */

/* ---- Refrigerant operating-point library ---------------------------------
   Each entry describes one steady operating state of the cycle:
     pLow / pHigh   : low- & high-side pressures (bar, gauge-ish display)
     tEvap / tCond  : saturation temps in evaporator / condenser (°C)
     tSuction       : compressor inlet temp (evap sat + superheat)
     tDischarge     : compressor outlet temp (hot gas)
     tLiquid        : condenser outlet temp (cond sat - subcooling)
     h1..h4         : approx specific enthalpies (kJ/kg) at cycle points,
                      used only to place the dots on the P-h diagram.
   Cycle points: 1 suction, 2 discharge, 3 liquid (cond out), 4 evap inlet.
--------------------------------------------------------------------------- */
const REFRIGERANTS = {
  R134a: {
    label: "R134a",
    note: "Classic HFC teaching refrigerant — matches the reference textbook.",
    pLow: 3.5, pHigh: 16.0,
    tEvap: 6, tCond: 58, tSuction: 12, tDischarge: 75, tLiquid: 52,
    h1: 402, h2: 432, h3: 280, h4: 280,
  },
  R410A: {
    label: "R410A",
    note: "Modern high-pressure blend used in most newer AC systems.",
    pLow: 9.0, pHigh: 30.0,
    tEvap: 6, tCond: 50, tSuction: 12, tDischarge: 80, tLiquid: 45,
    h1: 430, h2: 462, h3: 280, h4: 280,
  },
  R22: {
    label: "R22",
    note: "Legacy HCFC, being phased out — included for comparison.",
    pLow: 5.0, pHigh: 19.5,
    tEvap: 5, tCond: 50, tSuction: 11, tDischarge: 78, tLiquid: 44,
    h1: 408, h2: 442, h3: 256, h4: 256,
  },
  R404A: {
    label: "R404A",
    note: "Low-temperature commercial refrigeration blend.",
    pLow: 4.2, pHigh: 18.0,
    tEvap: -10, tCond: 45, tSuction: -4, tDischarge: 65, tLiquid: 40,
    h1: 365, h2: 392, h3: 264, h4: 264,
  },
};

/* ---- Component knowledge base -------------------------------------------- */
const STATE_COLORS = {
  hotgas: getCss("--state-hotgas"),
  liquid: getCss("--state-liquid"),
  flash:  getCss("--state-flash"),
  vapor:  getCss("--state-vapor"),
};

function stateChip(color, text) {
  return `<span class="state-chip" style="background:${color}">${text}</span>`;
}

const COMPONENTS = {
  compressor: (r) => ({
    title: "Compressor — the pump of the cycle",
    inState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    outState: stateChip(STATE_COLORS.hotgas, "High-pressure hot gas"),
    inVals: `${r.pLow} bar · ${r.tSuction}°C`,
    outVals: `${r.pHigh} bar · ${r.tDischarge}°C`,
    body: `Draws in cool, low-pressure superheated vapour from the suction line and
      squeezes it into a small, high-pressure, high-temperature gas. This is the only
      point where <b>work is added</b> to the system.`,
    points: [
      "Raises pressure so the refrigerant's boiling/condensing temperature climbs above the outdoor air — that's what lets it dump heat in the condenser.",
      "Refrigerant stays a vapour the whole way through; only its pressure and temperature rise.",
      "Liquid must never reach the compressor (it can't be compressed) — that's why the evaporator superheats the gas first.",
    ],
  }),
  condenser: (r) => ({
    title: "Condenser — rejects heat to the surroundings",
    inState: stateChip(STATE_COLORS.hotgas, "High-pressure hot gas"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${r.pHigh} bar · ${r.tDischarge}°C`,
    outVals: `${r.pHigh} bar · ${r.tLiquid}°C`,
    body: `A heat exchanger (usually fan-cooled) where the hot gas gives up its heat.
      The gas first <b>desuperheats</b>, then <b>condenses</b> at constant temperature
      from vapour into liquid, and finally <b>subcools</b> a little.`,
    points: [
      `Heat leaving = the heat the refrigerant absorbed in the evaporator <i>plus</i> the compressor work.`,
      `Condensing happens at constant pressure & temperature (~${r.tCond}°C here) — this is the latent-heat plateau.`,
      "Subcooling the liquid a few degrees below saturation guarantees a solid liquid feed to the metering device.",
    ],
  }),
  receiver: (r) => ({
    title: "Liquid receiver — the storage buffer",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${r.pHigh} bar · ${r.tLiquid}°C`,
    outVals: `${r.pHigh} bar · ${r.tLiquid}°C`,
    body: `A tank on the high-pressure liquid line that holds a reserve of liquid
      refrigerant. It absorbs changes in charge as the load varies and makes sure a
      <b>solid column of liquid</b> (no flash gas) feeds the metering device.`,
    points: [
      "Doesn't change the refrigerant's state — it's a buffer, not a process step.",
      "Lets the system handle changing demand without starving the evaporator.",
      "Vapour collects at the top; liquid is drawn from the bottom.",
    ],
  }),
  metering: (r) => ({
    title: "Metering device — the pressure divider",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.flash, "Low-pressure flash mix"),
    inVals: `${r.pHigh} bar · ${r.tLiquid}°C`,
    outVals: `${r.pLow} bar · ${r.tEvap}°C`,
    body: `A restriction (expansion valve or capillary tube) that splits the high and
      low sides of the system. Liquid is <b>throttled</b> from high to low pressure.
      As pressure drops, some of it instantly flash-boils, and that flashing chills the
      rest down to the evaporator temperature.`,
    points: [
      "Pressure and temperature both drop sharply across the valve.",
      "Leaves as a cold, low-pressure mixture of liquid + a little vapour (the 'flash gas').",
      "Meters exactly the right amount of refrigerant into the evaporator for the load.",
    ],
  }),
  evaporator: (r) => ({
    title: "Evaporator — where the cooling happens",
    inState: stateChip(STATE_COLORS.flash, "Low-pressure flash mix"),
    outState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    inVals: `${r.pLow} bar · ${r.tEvap}°C`,
    outVals: `${r.pLow} bar · ${r.tSuction}°C`,
    body: `A heat exchanger inside the space being cooled. The cold liquid <b>boils</b>,
      soaking up heat from the air (this is the useful refrigeration effect), then
      <b>superheats</b> slightly so only dry vapour returns to the compressor.`,
    points: [
      `Boiling happens at constant pressure & temperature (~${r.tEvap}°C here) — the refrigerant absorbs latent heat.`,
      "Heat absorbed here is exactly what makes the room/box cold.",
      "The last few degrees of superheat dry out the vapour to protect the compressor.",
    ],
  }),
};

/* ---- Segment → state map (for legend & particles) ------------------------ */
const SEGMENTS = [
  { id: "seg-discharge", state: "hotgas", color: STATE_COLORS.hotgas, label: "Discharge line · high-pressure hot vapour" },
  { id: "seg-liquid",    state: "liquid", color: STATE_COLORS.liquid, label: "Liquid line · high-pressure liquid" },
  { id: "seg-evapfeed",  state: "flash",  color: STATE_COLORS.flash,  label: "After metering · low-pressure flash mix" },
  { id: "seg-suction",   state: "vapor",  color: STATE_COLORS.vapor,  label: "Suction line · low-pressure vapour" },
];

/* ========================================================================= */
/* State                                                                     */
/* ========================================================================= */
const state = {
  running: true,
  refrigerant: "R134a",
  dashOffset: 0,
  phaseT: 0,           // 0..1 position around the P-h cycle for the moving dot
  selected: null,
};

function getCss(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function fluid() { return REFRIGERANTS[state.refrigerant]; }

/* ========================================================================= */
/* Readouts                                                                  */
/* ========================================================================= */
function renderReadouts() {
  const r = fluid();
  const rows = [
    { label: "High Side", value: `${r.pHigh.toFixed(1)} bar`, cls: "amber" },
    { label: "Low Side", value: `${r.pLow.toFixed(1)} bar`, cls: "cold" },
    { label: "Condenser", value: `${r.tCond}°C`, cls: "hot" },
    { label: "Evaporator", value: `${r.tEvap}°C`, cls: "cold" },
    { label: "Discharge Gas", value: `${r.tDischarge}°C`, cls: "hot" },
    { label: "Compressor", value: state.running ? "RUNNING" : "OFF", cls: state.running ? "ok" : "" },
    { label: "Refrigerant", value: r.label, cls: "" },
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
/* Particles flowing along each pipe segment                                 */
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
      dot.setAttribute("fill", "#fff");
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
    p.el.setAttribute("fill", p.color);
  });
}

/* ========================================================================= */
/* P–h (pressure–enthalpy) diagram                                           */
/* ========================================================================= */
const ph = {
  x0: 44, x1: 300, y0: 24, y1: 196,   // plot box
  hMin: 220, hMax: 480,               // enthalpy axis range (kJ/kg)
};

function hToX(h) {
  return ph.x0 + (h - ph.hMin) / (ph.hMax - ph.hMin) * (ph.x1 - ph.x0);
}
// pressure axis is logarithmic (typical for P-h charts)
function pToY(p) {
  const lo = Math.log10(2), hi = Math.log10(40);
  const f = (Math.log10(p) - lo) / (hi - lo);
  return ph.y1 - f * (ph.y1 - ph.y0);
}

function renderPhChart() {
  const r = fluid();
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
  add("line", { x1: ph.x0, y1: ph.y0, x2: ph.x0, y2: ph.y1, stroke: "#2a3b4d", "stroke-width": 1 });
  add("line", { x1: ph.x0, y1: ph.y1, x2: ph.x1, y2: ph.y1, stroke: "#2a3b4d", "stroke-width": 1 });
  add("text", { x: 8, y: 14, fill: "#8aa0b3", "font-size": 10 }, "Pressure");
  add("text", { x: ph.x1, y: 214, fill: "#8aa0b3", "font-size": 10, "text-anchor": "end" }, "Enthalpy →");

  // Saturation dome (representative shape). Liquid line on the left,
  // vapour line on the right, meeting at the critical point on top.
  const domePath =
    `M ${hToX(248)} ${pToY(2.2)} ` +                       // bottom of liquid line
    `C ${hToX(250)} ${pToY(10)}, ${hToX(262)} ${pToY(28)}, ${hToX(300)} ${pToY(40)} ` + // up liquid side to crit
    `C ${hToX(360)} ${pToY(30)}, ${hToX(420)} ${pToY(10)}, ${hToX(422)} ${pToY(2.2)}`;  // down vapour side
  add("path", { d: domePath, fill: "rgba(79,195,247,0.06)", stroke: "#3a5c72", "stroke-width": 1.2 });

  // Cycle points
  const P = {
    p1: { x: hToX(r.h1), y: pToY(r.pLow) },   // suction
    p2: { x: hToX(r.h2), y: pToY(r.pHigh) },  // discharge
    p3: { x: hToX(r.h3), y: pToY(r.pHigh) },  // liquid (cond out)
    p4: { x: hToX(r.h4), y: pToY(r.pLow) },   // evap inlet
  };

  // Cycle path 1→2→3→4→1
  const cycle =
    `M ${P.p1.x} ${P.p1.y} L ${P.p2.x} ${P.p2.y} ` +
    `L ${P.p3.x} ${P.p3.y} L ${P.p4.x} ${P.p4.y} Z`;
  add("path", { d: cycle, fill: "none", stroke: "#e7eef5", "stroke-width": 1.6, "stroke-linejoin": "round" });

  // Point labels
  const labels = [
    { p: P.p1, t: "1", dx: -10, dy: 12 },
    { p: P.p2, t: "2", dx: 6, dy: -4 },
    { p: P.p3, t: "3", dx: 6, dy: -4 },
    { p: P.p4, t: "4", dx: -10, dy: -4 },
  ];
  labels.forEach(l => {
    add("circle", { cx: l.p.x, cy: l.p.y, r: 3, fill: "#e7eef5" });
    add("text", { x: l.p.x + l.dx, y: l.p.y + l.dy, fill: "#8aa0b3", "font-size": 10 }, l.t);
  });

  // store points for the moving dot
  phCyclePoints = [P.p1, P.p2, P.p3, P.p4];

  // moving dot
  movingDot = add("circle", { cx: P.p1.x, cy: P.p1.y, r: 5, fill: STATE_COLORS.vapor, stroke: "#fff", "stroke-width": 1.5 });
}

let phCyclePoints = [];
let movingDot = null;
const DOT_COLORS = [STATE_COLORS.vapor, STATE_COLORS.hotgas, STATE_COLORS.liquid, STATE_COLORS.flash];

function updateMovingDot() {
  if (!movingDot || phCyclePoints.length < 4) return;
  const seg = Math.floor(state.phaseT * 4) % 4;
  const local = (state.phaseT * 4) % 1;
  const a = phCyclePoints[seg];
  const b = phCyclePoints[(seg + 1) % 4];
  movingDot.setAttribute("cx", a.x + (b.x - a.x) * local);
  movingDot.setAttribute("cy", a.y + (b.y - a.y) * local);
  movingDot.setAttribute("fill", DOT_COLORS[seg]);
}

/* ========================================================================= */
/* Component info panel                                                      */
/* ========================================================================= */
function showInfo(key) {
  const data = COMPONENTS[key](fluid());
  document.getElementById("infoTitle").textContent = data.title;
  document.getElementById("infoBody").innerHTML = `
    <div class="phase-row">
      <div class="phase-col">
        <div class="k">In</div>
        <div class="v">${data.inState}</div>
        <div class="k" style="margin-top:6px">${data.inVals}</div>
      </div>
      <div class="arrow">→</div>
      <div class="phase-col">
        <div class="k">Out</div>
        <div class="v">${data.outState}</div>
        <div class="k" style="margin-top:6px">${data.outVals}</div>
      </div>
    </div>
    <p>${data.body}</p>
    <ul>${data.points.map(p => `<li>${p}</li>`).join("")}</ul>`;

  document.querySelectorAll(".component").forEach(c =>
    c.classList.toggle("selected", c.dataset.component === key));
  state.selected = key;
}

/* ========================================================================= */
/* Power button                                                              */
/* ========================================================================= */
function setRunning(run) {
  state.running = run;
  const btn = document.getElementById("powerBtn");
  btn.textContent = run ? "Stop Compressor" : "Start Compressor";
  btn.className = "btn " + (run ? "btn-stop" : "btn-start");
  document.getElementById("particles").style.opacity = run ? "1" : "0.25";
  renderReadouts();
}

/* ========================================================================= */
/* Animation loop                                                            */
/* ========================================================================= */
let targetSpeed = 2.2;     // px per frame at full flow
let currentSpeed = 2.2;

function loop() {
  const want = state.running ? targetSpeed : 0;
  // ease toward target so starting/stopping looks like the system spinning up/down
  currentSpeed += (want - currentSpeed) * 0.05;

  // animated dashed flow on the pipes
  state.dashOffset = (state.dashOffset - currentSpeed) % 1000;
  document.querySelectorAll(".pipes-flow path").forEach(p => {
    p.setAttribute("stroke-dashoffset", state.dashOffset);
  });

  updateParticles(currentSpeed);

  // advance P-h dot proportional to flow
  state.phaseT = (state.phaseT + currentSpeed * 0.0012) % 1;
  updateMovingDot();

  requestAnimationFrame(loop);
}

/* ========================================================================= */
/* Wiring                                                                    */
/* ========================================================================= */
function init() {
  // refrigerant dropdown
  const sel = document.getElementById("refrigerantSelect");
  sel.innerHTML = Object.keys(REFRIGERANTS)
    .map(k => `<option value="${k}">${REFRIGERANTS[k].label}</option>`).join("");
  sel.value = state.refrigerant;
  sel.addEventListener("change", () => {
    state.refrigerant = sel.value;
    renderReadouts();
    renderPhChart();
    if (state.selected) showInfo(state.selected);   // refresh open panel with new values
  });

  // power button
  document.getElementById("powerBtn").addEventListener("click", () => setRunning(!state.running));

  // component clicks + keyboard
  document.querySelectorAll(".component").forEach(c => {
    c.addEventListener("click", () => showInfo(c.dataset.component));
    c.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showInfo(c.dataset.component); }
    });
  });

  renderReadouts();
  renderLegend();
  buildParticles();
  renderPhChart();
  setRunning(true);
  requestAnimationFrame(loop);
}

document.addEventListener("DOMContentLoaded", init);
