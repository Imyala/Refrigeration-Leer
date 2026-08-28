/* =========================================================================
   Refrigeration Cycle Simulator — main UI.
   Schematic animation, readouts, P–h diagram, component info cards, guided
   tour and control wiring. The data lives in js/data.js, the thermodynamic
   model in js/model.js, unit display in js/units.js; the gauge manifold,
   PT trainer and technician quiz are in their own files.
   ========================================================================= */
"use strict";

const { REFRIGERANTS, FAULTS, VIZ } = RefrigData;
const { CIRCUITS, ORDER: CIRCUIT_ORDER } = RefrigCircuits;
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

/* The pipe key. Each refrigerant state gets one entry however many runs of
   pipe a given circuit draws in that state — the learner needs four colours
   explained, not eleven pipe segments. */
const STATE_KEY = [
  { state: "hotgas", label: "Discharge line", detail: "high-pressure hot vapour" },
  { state: "liquid", label: "Liquid line",    detail: "high-pressure liquid" },
  { state: "flash",  label: "After metering", detail: "low-pressure flash mix" },
  { state: "vapor",  label: "Suction line",   detail: "low-pressure vapour" },
];

/* Filled in by renderCircuit() from whichever circuit is on screen. */
let SEGMENTS = [];

/* ========================================================================= */
/* Live state                                                                */
/* ========================================================================= */
const state = {
  circuit: "basic",
  running: true, refrigerant: "R134a", speed: 100, load: 100, fault: "none",
  dashOffset: 0, phaseT: 0, selected: null, tourActive: false, tourIndex: 0,
  showHealthy: true, level: 1,
};
let current = null;
const capRefs = {};   // per-refrigerant nominal capacity for the % readout

const r1 = (v) => Math.round(v * 10) / 10;
const r0 = (v) => Math.round(v);

function recompute() {
  current = deriveAt(state.refrigerant, state.speed, state.load, state.fault, state.circuit);
  if (!(state.refrigerant in capRefs)) {
    // The nominal reference is always the basic cycle, so "% of nominal" means
    // the same thing across circuits and the extra hardware shows up as a gain.
    capRefs[state.refrigerant] = deriveAt(state.refrigerant, 100, 100, "none", "basic").capRaw;
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

  /* ---- Devices that only some circuits carry ------------------------------
     Each answers the same three questions the core components do: what goes
     in, what comes out, and what it is for. Several change nothing about the
     refrigerant at all — which is itself the lesson, so they say so plainly
     rather than inventing a state change.                                    */

  drier: (c) => ({
    title: "Filter-drier — protects everything downstream",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    outVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    body: `A canister of desiccant and filter mesh in the liquid line. It takes
      <b>moisture and debris out of the refrigerant</b> before they reach the metering
      device. The state is unchanged — a drier is protection, not process.`,
    points: [
      "Water is the enemy: it freezes at the valve orifice and blocks it, and with the oil it forms acids that attack the windings.",
      "Fit a new one every time the system is opened — a saturated drier gives its moisture back.",
      "A blocked one shows as a temperature drop across it: feel for a cold outlet on a warm liquid line.",
    ],
  }),

  sightglass: (c) => ({
    title: "Sight glass — the charge and moisture window",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    outVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    body: `A window into the liquid line with a moisture indicator behind it. Clear
      glass means <b>solid liquid</b> reaching the valve; bubbles mean vapour where
      there should be none.`,
    points: [
      `The liquid is leaving the condenser with ${U.fmtDT(c.subcool)} of subcooling right now, so it should run clear.`,
      "Bubbles usually mean undercharge or a restriction upstream — but they also appear whenever subcooling is low, so read it with the gauges, never on its own.",
      "The indicator ring changes colour with moisture content. Compare it against the printed key, and give it time to settle.",
    ],
  }),

  solenoid: (c) => ({
    title: "Liquid-line solenoid — the pump-down valve",
    inState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    outState: stateChip(STATE_COLORS.liquid, "High-pressure liquid"),
    inVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    outVals: `${U.fmtPGauge(c.pHigh)} · ${U.fmtT(c.tLiquid)}`,
    body: `An electrically operated shut-off valve in the liquid line. The thermostat
      closes it, the compressor keeps running and <b>pulls the low side down</b> until
      a pressure switch stops it — so the machine shuts down with the refrigerant
      parked in the condenser and receiver, not lying in a cold evaporator.`,
    points: [
      "This is what pump-down control means, and it is why the compressor stops on a pressure switch rather than directly on the thermostat.",
      "Refrigerant left in a cold evaporator migrates to the compressor overnight and greets it as liquid on start-up.",
      "A coil that has failed shut starves the system; one stuck open costs you pump-down but the system still cools — so the symptoms are nothing alike.",
    ],
  }),

  accumulator: (c) => ({
    title: "Suction accumulator — the compressor's insurance",
    inState: stateChip(STATE_COLORS.vapor, "Suction vapour, possibly wet"),
    outState: stateChip(STATE_COLORS.vapor, "Dry suction vapour"),
    inVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tSuction)}`,
    outVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tSuction)}`,
    body: `A vessel in the suction line with its outlet taken from the <b>top</b>, so
      only vapour can leave. Any liquid that gets past the evaporator collects in the
      bottom and boils off slowly instead of arriving at the compressor in a slug.`,
    points: [
      "A small metered hole at the bottom of the outlet tube returns oil — and a controlled trickle of liquid — at a rate the compressor can cope with.",
      `The coil is holding ${U.fmtDT(c.superheat)} of superheat now. When superheat collapses toward zero, this vessel is the only thing between the liquid and the valves.`,
      "Fitted wherever floodback is likely: heat pumps coming off defrost, low-temperature systems, and anything with a wildly swinging load.",
    ],
  }),

  suctionHx: (c) => ({
    title: "Suction-line heat exchanger — subcooling paid for in superheat",
    inState: stateChip(STATE_COLORS.liquid, "Warm liquid, cold vapour"),
    outState: stateChip(STATE_COLORS.flash, "Colder liquid, warmer vapour"),
    inVals: `liquid in ${U.fmtT(c.tCond - Math.max(c.subcool - 6, 0))} · vapour in ${U.fmtT(c.tEvap + c.superheatCoil)}`,
    outVals: `liquid out ${U.fmtT(c.tLiquid)} · vapour out ${U.fmtT(c.tSuction)}`,
    body: `The liquid line and the suction line are run against each other so heat
      crosses from one to the other. Nothing is added and nothing is lost — heat is
      simply <b>moved from where it hurts to where it helps</b>.`,
    points: [
      `Liquid reaches the valve about ${U.fmtDT(6)} colder, so less of it flashes: the coil inlet is ${r0(c.flashFraction * 100)} % vapour.`,
      `The vapour reaches the compressor at ${U.fmtT(c.tSuction)} rather than ${U.fmtT(c.tEvap + c.superheatCoil)} — dry gas guaranteed, but a hotter discharge and more work.`,
      "The two effects very nearly cancel in COP terms. The real reasons to fit one are a guaranteed-dry suction and a valve fed with solid liquid.",
    ],
  }),

  flashChamber: (c) => ({
    title: "Flash chamber — separates the gas that does no work",
    inState: stateChip(STATE_COLORS.flash, "Liquid + flash vapour"),
    outState: stateChip(STATE_COLORS.liquid, "Liquid down, vapour off the top"),
    inVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tEvap)}`,
    outVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tEvap)}`,
    body: `A vessel just after the metering device. The mixture separates by gravity:
      liquid falls to the bottom and feeds the evaporator, and vapour is drawn off the
      top and <b>sent straight to the compressor</b>, skipping the coil entirely.`,
    points: [
      `Throttling flashes ${r0(c.flashFraction * 100)} % of the refrigerant to vapour. That vapour is already at coil temperature — it cannot absorb any more heat, so in the coil it does nothing but take up room.`,
      "With it removed, the whole coil surface is wetted with liquid, which is the condition a coil is rated at.",
      "The compressor still has to pump that gas, so this buys evaporator performance rather than efficiency. On two-stage plant the same vessel becomes an economiser — and then it does save work.",
    ],
  }),

  epr: (c) => ({
    title: "EPR — holds one coil up while the rest go down",
    inState: stateChip(STATE_COLORS.vapor, "Vapour at coil pressure"),
    outState: stateChip(STATE_COLORS.vapor, "Vapour at suction pressure"),
    inVals: c.pLowB ? `${U.fmtPGauge(c.pLowB)} · ${U.fmtT(c.tEvapB)}` : "—",
    outVals: `${U.fmtPGauge(c.pLow)} · ${U.fmtT(c.tEvap)}`,
    body: `An evaporator pressure regulator sits in the suction branch of the
      <b>warmer</b> coil and throttles it, so that coil can hold a higher pressure than
      the compressor is pulling everywhere else on the machine.`,
    points: [
      c.tEvapB != null
        ? `The freezer coil is at ${U.fmtT(c.tEvap)}; this valve is holding the chiller coil at ${U.fmtT(c.tEvapB)}. Without it, both would sit at the lower figure.`
        : "Without it, every coil on the machine is dragged down to the lowest coil's pressure.",
      "It regulates its <b>inlet</b> — the pressure upstream of itself. That is exactly why it belongs in the suction line and not the liquid line.",
      "Set too low and the warm room over-cools; set too high and it starves the compressor and the warm room never pulls down.",
    ],
  }),

  cascadeHx: (c) => ({
    title: "Cascade condenser — one vessel, two circuits",
    inState: stateChip(STATE_COLORS.hotgas, "Low-stage discharge"),
    outState: stateChip(STATE_COLORS.vapor, "High-stage suction"),
    inVals: c.tInter != null ? `condensing at ${U.fmtT(c.tInter)}` : "—",
    outVals: c.tInter != null ? `boiling at ${U.fmtT(c.tInter - 5)}` : "—",
    body: `A heat exchanger belonging to both circuits at once: the low stage
      <b>condenses</b> inside it, and that heat is precisely what the high stage
      <b>boils</b> to absorb. The two refrigerants never mix.`,
    points: [
      "The high stage has to boil colder than the low stage condenses, or no heat would cross. That gap is a real loss, and the reason a cascade is not free.",
      "Each circuit can use a refrigerant suited to its own range — CO₂ or a low-temperature blend below, ammonia or an HFC above.",
      "Fouling here shows up as a climbing low-stage head pressure with a high stage that looks perfectly healthy.",
    ],
  }),

  evaporatorB: (c) => ({
    title: "Chiller coil — the warm room's evaporator",
    inState: stateChip(STATE_COLORS.flash, "Low-pressure flash mix"),
    outState: stateChip(STATE_COLORS.vapor, "Low-pressure vapour"),
    inVals: c.pLowB ? `${U.fmtPGauge(c.pLowB)} · ${U.fmtT(c.tEvapB)}` : "—",
    outVals: c.pLowB ? `${U.fmtPGauge(c.pLowB)} · ${U.fmtT(c.tEvapB + 6)}` : "—",
    body: `The same job as any evaporator, but this one has to run <b>warmer</b> than
      the freezer sharing a compressor with it — which only works because an EPR is
      holding its pressure up.`,
    points: [
      c.tEvapB != null
        ? `Boiling at ${U.fmtT(c.tEvapB)} against the freezer's ${U.fmtT(c.tEvap)}, on the same machine.`
        : "Runs at its own pressure, set by the EPR in its suction branch.",
      "It has its own TX valve, so each room is metered for its own load.",
      "If the EPR fails open, this coil is dragged down with the freezer and everything in it freezes.",
    ],
  }),

  compressorB: (c) => COMPONENTS.compressor(c),
  meteringB: (c) => COMPONENTS.metering(c),
};

/* ========================================================================= */
/* Readouts                                                                  */
/* ========================================================================= */
function renderReadouts() {
  const c = current;
  // The dot ties each reading to the line on the schematic it is measured from,
  // so colour teaches the cycle instead of just decorating the number.
  const rows = [
    { label: "High side",  value: U.fmtPGauge(c.pHigh),  dot: STATE_COLORS.liquid },
    { label: "Low side",   value: U.fmtPGauge(c.pLow),   dot: STATE_COLORS.vapor  },
    { label: "Condenser",  value: U.fmtT(c.tCond),       dot: STATE_COLORS.hotgas },
    { label: "Evaporator", value: U.fmtT(c.tEvap),       dot: STATE_COLORS.flash  },
    { label: "Discharge",  value: U.fmtT(c.tDischarge),  dot: STATE_COLORS.hotgas },
    { label: "Superheat",  value: U.fmtDT(c.superheat),  dot: STATE_COLORS.vapor,  level: 2 },
    { label: "Subcool",    value: U.fmtDT(c.subcool),    dot: STATE_COLORS.liquid, level: 2 },
    { label: "Flow",       value: `${r0(c.flow)} L/min` },
  ];
  // A second coil at its own temperature is the whole point of the circuit
  // that has one, so it belongs in the rail from the first detail level.
  if (c.tEvapB != null) {
    rows.splice(4, 0, { label: "Chiller coil", value: U.fmtT(c.tEvapB), dot: STATE_COLORS.flash });
  }
  // Flash gas is the number that explains why subcooling matters
  rows.push({
    label: "Flash gas", dot: STATE_COLORS.flash, level: 2,
    value: c.flashBypassed ? "0 % (bypassed)" : `${r0(c.flashFraction * 100)} %`,
  });
  // Split "1499 kPa g" into number + unit so the unit can sit back visually.
  const split = (v) => String(v).replace(/^([\-\d.,]+)\s*(.*)$/, (m, n, u) =>
    u ? `${n} <span class="unit">${u}</span>` : n);

  document.getElementById("readouts").innerHTML = rows.map(row => `
    <div class="readout"${row.level ? ` data-level="${row.level}"` : ""}>
      <span class="label">${row.dot
        ? `<span class="dot" style="background:${row.dot}"></span>` : `<span class="dot"></span>`}${row.label}</span>
      <span class="value">${split(row.value)}</span>
    </div>`).join("");

  const status = document.getElementById("railStatus");
  if (status) {
    status.textContent = state.running ? "Running" : "Stopped";
    status.className = "rail-status" + (state.running ? "" : " off");
  }
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

/* Figures that only exist on some circuits: the second coil's temperature, the
   flash fraction, the cascade's interstage point and the comparison against a
   single machine. These sit under the performance grid so the variation's
   effect is visible as a number, not just as a different picture. */
function renderCircuitStats() {
  const box = document.getElementById("circuitStats");
  if (!box) return;
  const c = current, cells = [];

  // Flash fraction is worth showing everywhere — it is why subcooling matters
  cells.push({
    k: "Flash gas at the valve",
    v: `${r0(c.flashFraction * 100)} %`,
    n: c.flashBypassed
      ? "separated out in the chamber, so the coil inlet is 0 % vapour"
      : "of the refrigerant boils crossing the valve and does no cooling",
    cls: c.flashBypassed ? "good" : "",
  });

  if (c.tEvapB != null) {
    cells.push({
      k: "Chiller coil", v: U.fmtT(c.tEvapB),
      n: `held up by the EPR while the freezer runs at ${U.fmtT(c.tEvap)}`,
      cls: "good",
    });
  }

  if (c.tInter != null && c.singleStage) {
    cells.push({ k: "Interstage", v: U.fmtT(c.tInter),
      n: "where the two stages hand the heat over" });
    cells.push({ k: "Ratio per stage",
      v: `${c.lowStage.ratio.toFixed(1)} · ${c.highStage.ratio.toFixed(1)}`,
      n: `one machine would need ${c.singleStage.ratio.toFixed(1)} : 1 across the same span`,
      cls: "good" });
    cells.push({ k: "Single stage would give",
      v: c.singleStage.cop.toFixed(2),
      n: `COP, discharging at ${U.fmtT(c.singleStage.tDisch)} — against ${c.cop.toFixed(2)} for the cascade`,
      cls: "warn" });
  }

  box.hidden = cells.length === 0;
  box.innerHTML = cells.map(x => `
    <div class="cstat ${x.cls || ""}">
      <div class="k">${x.k}</div><div class="v">${x.v}</div><div class="n">${x.n}</div>
    </div>`).join("");
}

function renderLegend() {
  document.getElementById("legend").innerHTML = STATE_KEY.map(s => `
    <div class="legend-item"><span class="legend-swatch" style="background:${STATE_COLORS[s.state]}"></span>
      <span><span class="legend-name">${s.label}</span><span class="legend-detail">${s.detail}</span></span>
    </div>`).join("");
}

/* ========================================================================= */
/* Circuit rendering                                                         */
/* ========================================================================= */
/* Draw the active circuit and rebuild everything that keys off the drawing:
   the segment table, the flowing particles, the fault overlays and the click
   handlers. Called on load and whenever the learner changes circuit. */
function renderCircuit() {
  const circuit = CIRCUITS[state.circuit];
  const svg = document.getElementById("diagram");
  // Coil captions can carry live temperatures, so the drawing never contradicts
  // the instrument rail beside it.
  RefrigSchematic.render(svg, circuit, {
    tEvap:  current ? U.fmtT(current.tEvap) : "",
    tEvapB: current && current.tEvapB != null ? U.fmtT(current.tEvapB) : "",
    tCond:  current ? U.fmtT(current.tCond) : "",
  });

  SEGMENTS = circuit.pipes.filter(p => !p.hidden).map(p => ({
    id: p.id, state: p.state, color: STATE_COLORS[p.state],
  }));
  indexSegments();

  buildParticles();
  setupFaultViz();
  bindComponents();

  // The selection and any tour focus belong to the previous drawing
  state.selected = null;
  resetInfoPanel();
  renderCircuitNote();
}

function bindComponents() {
  const onPick = (key) => {
    if (!COMPONENTS[key]) return;
    showInfo(key);
    const panel = document.getElementById("infoPanel");
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    focusSectionSoon(panel);
  };
  document.querySelectorAll(".component").forEach(c => {
    c.addEventListener("click", () => onPick(c.dataset.component));
    c.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPick(c.dataset.component); }
    });
  });
}

/* Live temperatures printed on the coils, updated in place rather than by
   redrawing the whole schematic on every slider move. */
function refreshLiveCaptions() {
  const circuit = CIRCUITS[state.circuit];
  const values = {
    tEvap:  U.fmtT(current.tEvap),
    tEvapB: current.tEvapB != null ? U.fmtT(current.tEvapB) : "",
    tCond:  U.fmtT(current.tCond),
  };
  circuit.components.forEach(c => {
    if (!c.sub || !/\{\w+\}/.test(String(c.sub.text))) return;
    const g = document.querySelector(`[data-component="${c.id}"] .comp-sub`);
    if (g) g.textContent = String(c.sub.text).replace(/\{(\w+)\}/g, (m, k) => values[k] != null ? values[k] : m);
  });
}

function resetInfoPanel() {
  document.getElementById("infoTitle").textContent = "Click a component";
  document.getElementById("infoBody").innerHTML =
    `<p class="info-hint">Select any component in the diagram to learn what it does and how it
     changes the refrigerant. Or just watch the colours flow — each colour is a different
     refrigerant state.</p>`;
}

/* The panel under the picker: what this circuit is, what it teaches, and
   where a technician actually meets it. */
function renderCircuitNote() {
  const c = CIRCUITS[state.circuit];
  const box = document.getElementById("circuitNote");
  if (!box) return;
  box.innerHTML = `
    <p class="circuit-blurb">${c.blurb}</p>
    <p class="circuit-teaches"><b>Why it is built this way.</b> ${c.teaches}</p>
    <p class="circuit-seen"><span class="u-label">Where you meet it</span> ${c.seenIn}</p>`;
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
let SEG_RGB = {};
function indexSegments() {
  SEG_RGB = {};
  SEGMENTS.forEach(s => { SEG_RGB[s.id] = hexToRgb(s.color); });
}
function applyPipeColors(g) {
  SEGMENTS.forEach(s => {
    const p = document.getElementById(s.id);
    if (p) p.style.stroke = mixGrey(SEG_RGB[s.id], g);
  });
  particles.forEach(p => p.el.setAttribute("fill", mixGrey(p.rgb, g)));
  // coil fills and spills fade out as the system greys (off = no refrigerant shown)
  const f = 1 - g;
  [viz.fillCond, viz.fillEvap, viz.fillEvapB].forEach(r => {
    if (r) r.setAttribute("opacity", 0.34 * f);
  });
  [viz.spillLiquid, viz.spillSuction].forEach(p => {
    if (p) p.setAttribute("opacity", (p._op || 0) * f);
  });
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
    rect.setAttribute("fill", `url(#${grad})`); rect.setAttribute("opacity", 0.34);
    // The first child is the invisible hit area and the second is the coil
    // body; the fill belongs above the body and below the fins.
    const body = group.querySelector(".comp-box");
    group.insertBefore(rect, body ? body.nextSibling : group.firstElementChild);
    return rect;
  };
  // Coil fills are placed from the circuit's own component boxes, so a circuit
  // that moves or adds a coil does not need this code changed.
  const circuit = CIRCUITS[state.circuit];
  const coilBox = (which) => {
    const c = circuit.components.find(k => k.coil === which);
    return c ? c.box : null;
  };
  const fillFor = (which, grad) => {
    const b = coilBox(which);
    if (!b) return null;
    return addFill(`[data-component="${circuit.components.find(k => k.coil === which).id}"]`,
      b.x + 4, b.y + 4, b.w - 8, b.h - 8, grad);
  };
  viz.fillCond = fillFor("cond", "gradCond");
  viz.fillEvap = fillFor("evap", "gradEvap");
  viz.fillEvapB = fillFor("evapB", "gradEvap");

  // Spill overlays on the liquid and suction lines (abnormal state carried over)
  const spills = document.createElementNS(NS, "g");
  spills.id = "spills";
  const mkSpill = (refId, color) => {
    const src = document.getElementById(refId);
    if (!src) return null;   // this circuit has no run by that name
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
  if (viz.fillEvapB) viz.fillEvapB.setAttribute("opacity", 0.34);

  // spill overlays: show the first `frac` of the pipe in the wrong-state colour
  const setSpill = (path, frac) => {
    if (!path) return;
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
        <div class="vals">${data.inVals}</div></div>
      <div class="arrow">→</div>
      <div class="phase-col"><div class="k">Out</div><div class="v">${data.outState}</div>
        <div class="vals">${data.outVals}</div></div>
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

/* The tour walks the loop, but not every circuit has every component — the
   basic cycle has no receiver, for instance. Steps whose component is absent
   are dropped rather than pointing at nothing. */
function tourSteps() {
  const ids = new Set(CIRCUITS[state.circuit].components.map(c => c.id));
  const steps = TOUR.filter(s => !s.component || ids.has(s.component));
  const extra = CIRCUIT_TOUR[state.circuit];
  if (!extra) return steps;
  // Circuit-specific stops go in just before the closing step
  return steps.slice(0, -1).concat(extra.filter(s => ids.has(s.component)), steps.slice(-1));
}

/* One extra stop per variation, on the thing that variation exists to teach. */
const CIRCUIT_TOUR = {
  commercial: [{ component: "solenoid", seg: "seg-liquid", phaseT: 0.55, title: "Pump-down",
    text: "The solenoid closes on the thermostat and the compressor keeps running, pulling the low side down until a pressure switch stops it. The machine parks its refrigerant in the condenser and receiver rather than leaving it in a cold coil." }],
  accumulator: [{ component: "accumulator", seg: "seg-suction", phaseT: 0.92, title: "The last defence",
    text: "Anything liquid that gets this far collects in the bottom of the vessel and boils off slowly. The outlet is taken from the top, so only vapour can leave for the compressor." }],
  suctionHx: [{ component: "suctionHx", seg: null, phaseT: 0.55, title: "Swapping heat",
    text: "Heat crosses from the liquid line into the suction line. The liquid arrives at the valve colder so less of it flashes; the vapour arrives at the compressor warmer, which costs work. Watch COP — the net gain is real and small." }],
  flashGas: [{ component: "flashChamber", seg: "seg-bypass", phaseT: 0.66, title: "Losing the dead weight",
    text: "The vapour made by throttling is drawn off the top and sent straight to the compressor. It could not have absorbed any more heat, so all it was doing in the coil was taking up room." }],
  multiEvap: [{ component: "epr", seg: "seg-suctB", phaseT: 0.9, title: "Two temperatures, one compressor",
    text: "The compressor pulls everything down to the freezer's pressure. The EPR sits in the chiller's branch and refuses to let it follow — which is the only reason the produce in that room does not freeze." }],
  cascade: [{ component: "cascadeHx", seg: null, phaseT: 0.4, title: "Where the two circuits meet",
    text: "The low stage condenses in this vessel and the high stage boils in it. Neither compressor has to span the whole temperature range, so neither runs a ruinous pressure ratio." }],
};

function setTour(active) {
  state.tourActive = active;
  document.getElementById("tourBar").hidden = !active;
  document.querySelectorAll(".pipes-flow path").forEach(p => p.classList.remove("tour-dim"));
  document.querySelectorAll(".component").forEach(c => c.classList.remove("tour-focus"));
  if (active) { state.tourIndex = 0; gotoTourStep(0); }
}
function gotoTourStep(i) {
  const steps = tourSteps();
  state.tourIndex = clamp(i, 0, steps.length - 1);
  const step = steps[state.tourIndex];
  document.getElementById("tourStep").textContent = state.tourIndex + 1;
  document.getElementById("tourTotal").textContent = steps.length;
  document.getElementById("tourTitle").textContent = step.title;
  document.getElementById("tourText").textContent = step.text;
  document.getElementById("tourPrev").disabled = state.tourIndex === 0;
  document.getElementById("tourNext").textContent = state.tourIndex === steps.length - 1 ? "Finish" : "Next";
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
  btn.textContent = run ? "Stop compressor" : "Start compressor";
  btn.className = "btn " + (run ? "btn-stop" : "btn-start");
  renderReadouts();
}

function updateFaultBanner() {
  const f = FAULTS[state.fault];
  const field = document.getElementById("faultField");
  if (field) field.classList.toggle("is-active", state.fault !== "none" && !Quiz.active);
  const banner = document.getElementById("faultBanner");
  if (Quiz.active || state.fault === "none" || !f.diag) { banner.hidden = true; return; }
  banner.hidden = false;
  document.getElementById("faultText").innerHTML = `<b>${f.label}.</b> ${f.diag}`;
}

function refreshAll() {
  recompute();
  renderReadouts();
  renderPerf();
  renderCircuitStats();
  renderGauges(current);
  renderPhChart();
  renderPtChart();
  renderFaultViz();
  updateFaultBanner();
  refreshLiveCaptions();
  if (state.selected) showInfo(state.selected);
}

/* ========================================================================= */
/* Animation loop                                                            */
/* ========================================================================= */
/* How fast the refrigerant appears to move, in diagram units per 60 Hz frame.
   This is a teaching animation: a learner has to be able to pick one dash and
   follow it round the loop with their eye, naming what it is doing in each run.
   Anything much quicker reads as a strobe and is tiring to look at. */
const BASE_SPEED = 0.8;
/* If the tab has been in the background the next timestamp can be seconds
   later; clamp the step so the flow resumes rather than jumping round the loop. */
const MAX_FRAME_STEP = 3;
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
const PREVENT_SCROLL_FOCUS = (() => {
  let supported = false;
  try {
    const probe = document.createElement("button");
    probe.focus(Object.defineProperty({}, "preventScroll", {
      get() { supported = true; return true; }
    }));
  } catch (e) { /* old browsers ignore this option */ }
  return supported;
})();
let currentSpeed = BASE_SPEED;
let greyFactor = 0;           // 0 = full colour, 1 = grey (compressor off)
let lastFrameTime = null;

/* Ease a value toward a target by `rate` per 60 Hz frame, over `frames` of
   them, so the easing looks the same whatever the display is doing. */
function ease(value, target, rate, frames) {
  return value + (target - value) * (1 - Math.pow(1 - rate, frames));
}

function loop(now) {
  // requestAnimationFrame runs at the display's refresh rate, so without this a
  // 120 Hz screen would push the refrigerant round twice as fast as a 60 Hz one.
  // Measure the real elapsed time and express it in 60 Hz frames.
  const t = typeof now === "number" ? now : 0;
  const frames = lastFrameTime === null
    ? 1
    : Math.min(Math.max((t - lastFrameTime) / (1000 / 60), 0), MAX_FRAME_STEP);
  lastFrameTime = t;

  const animate = state.running && !state.tourActive && !REDUCED_MOTION.matches;
  const targetSpeed = animate ? BASE_SPEED * (state.speed / 100) : 0;
  currentSpeed = ease(currentSpeed, targetSpeed, 0.05, frames);

  // Fade pipes to grey when the compressor is off (no heat or cooling).
  greyFactor = ease(greyFactor, state.running ? 0 : 1, 0.04, frames);
  applyPipeColors(greyFactor);

  const step = currentSpeed * frames;
  state.dashOffset = (state.dashOffset - step) % 1000;
  document.querySelectorAll(".pipes-flow path").forEach(p => p.setAttribute("stroke-dashoffset", state.dashOffset));
  updateParticles(step);
  if (!state.tourActive) {
    state.phaseT = (state.phaseT + step * 0.0012) % 1;
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
      if (PREVENT_SCROLL_FOCUS) el.focus({ preventScroll: true });
      else el.focus();
    });
  });
}

/* ---- Detail level ----------------------------------------------------------
   The simulator is the densest screen in the program, so it opens showing just
   the cycle. Gauges and the full instrument set are one click away, and the
   choice is remembered. Deep links from a lesson raise the level they need. */
const LEVEL_KEY = "refrigSim.simLevel";
const CIRCUIT_KEY = "refrigSim.circuit";
const MAX_LEVEL = 3;
/* What each level is showing now, and what the next one would add. */
const LEVEL_STEPS = {
  1: { showing: "Showing the cycle on its own.", adds: "add the gauge manifold" },
  2: { showing: "Showing the cycle and the gauges.", adds: "add the P–h diagram, performance figures and PT trainer" },
};

function readLevel() {
  try {
    const n = parseInt(localStorage.getItem(LEVEL_KEY), 10);
    return n >= 1 && n <= MAX_LEVEL ? n : 1;
  } catch (e) { return 1; }
}

function applyLevel(level) {
  state.level = level;
  document.body.classList.remove("sim-level-1", "sim-level-2", "sim-level-3");
  document.body.classList.add("sim-level-" + level);
  document.querySelectorAll(".level-btn").forEach(b => {
    b.setAttribute("aria-pressed", String(+b.dataset.level === level));
  });
  const hint = document.getElementById("levelHint");
  if (hint) {
    const step = LEVEL_STEPS[level];
    hint.hidden = !step;
    if (step) {
      hint.innerHTML = `${step.showing} When you are ready, ` +
        `<button type="button" class="level-more">${step.adds}</button>.`;
    }
  }
}

/* ========================================================================= */
/* Switching circuit                                                         */
/* ========================================================================= */
function setCircuit(key, remember) {
  if (!CIRCUITS[key]) return;
  state.circuit = key;
  // A fault that belongs to hardware this circuit does not have makes no sense
  if (!faultAvailable(state.fault)) state.fault = "none";
  populateFaultSelect();
  renderCircuit();
  refreshAll();
  if (remember !== false) {
    try { localStorage.setItem(CIRCUIT_KEY, key); } catch (e) { /* storage unavailable */ }
  }
}

/* Faults are either universal (they can happen on any vapour-compression
   system) or tied to a device — a stuck liquid-line solenoid needs a circuit
   that actually has one. */
function faultAvailable(key) {
  if (key === "none") return true;
  const f = FAULTS[key];
  if (!f) return false;
  if (!f.needsCircuitDevice) return true;
  return (CIRCUITS[state.circuit].faults || []).includes(key);
}

function populateFaultSelect() {
  const fsel = document.getElementById("faultSelect");
  fsel.innerHTML = Object.keys(FAULTS).filter(faultAvailable).map(k =>
    `<option value="${k}">${FAULTS[k].label}</option>`).join("");
  fsel.value = faultAvailable(state.fault) ? state.fault : "none";
}

function setLevel(level, remember) {
  const lv = Math.min(MAX_LEVEL, Math.max(1, level | 0));
  applyLevel(lv);
  if (remember !== false) {
    try { localStorage.setItem(LEVEL_KEY, String(lv)); } catch (e) { /* storage unavailable */ }
  }
  // Charts are laid out from their container size, so redraw what just appeared.
  renderPhChart();
  renderPtChart();
  updateMovingDot();
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

  // Detail level: stored preference, unless the link asks for more.
  let level = readLevel();
  const uLevel = parseInt(urlq.get("level"), 10);
  if (uLevel >= 1 && uLevel <= MAX_LEVEL) level = uLevel;
  // These deep links are meaningless without the panels they point at.
  if (urlq.get("view") === "pt") level = Math.max(level, 3);
  applyLevel(level);
  document.querySelectorAll(".level-btn").forEach(b => {
    b.addEventListener("click", () => setLevel(+b.dataset.level, true));
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("level-more")) {
      setLevel(state.level + 1, true);
    }
  });

  document.getElementById("tourBtn").addEventListener("click", () => setTour(true));
  document.getElementById("tourExit").addEventListener("click", () => setTour(false));
  document.getElementById("tourPrev").addEventListener("click", () => gotoTourStep(state.tourIndex - 1));
  document.getElementById("tourNext").addEventListener("click", () => {
    if (state.tourIndex === tourSteps().length - 1) setTour(false);
    else gotoTourStep(state.tourIndex + 1);
  });

  // Technician quiz: entered from the practice switcher (?quiz=1) and left
  // from inside the panel, so there is no header toggle to wire.
  document.getElementById("quizHintBtn").addEventListener("click", quizShowClues);
  document.getElementById("quizNextBtn").addEventListener("click", quizNextScenario);
  document.getElementById("quizEndBtn").addEventListener("click", endQuiz);

  // Circuit picker
  const csel = document.getElementById("circuitSelect");
  try {
    const saved = localStorage.getItem(CIRCUIT_KEY);
    if (saved && CIRCUITS[saved]) state.circuit = saved;
  } catch (e) { /* storage unavailable */ }
  if (urlq.get("circuit") && CIRCUITS[urlq.get("circuit")]) state.circuit = urlq.get("circuit");
  csel.innerHTML = CIRCUIT_ORDER.map(k =>
    `<option value="${k}">${CIRCUITS[k].order}. ${CIRCUITS[k].label}</option>`).join("");
  csel.value = state.circuit;
  csel.addEventListener("change", () => setCircuit(csel.value));
  if (!faultAvailable(state.fault)) state.fault = "none";
  populateFaultSelect();

  recompute();
  renderLegend();
  renderCircuit();
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
