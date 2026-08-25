/* =========================================================================
   Circuit library — the system variations the simulator can draw.

   The schematic used to be hand-authored markup in simulator.html, which
   allowed exactly one circuit. Here each variation is data: its pipe runs,
   its components, the labels that sit on them, and what the extra hardware
   does to the cycle. js/schematic.js turns one of these into SVG.

   The variations are modelled on real published circuit drawings — a
   domestic unit with a suction-line heat exchanger, a commercial liquid
   line with receiver / drier / sight glass / solenoid, a flash chamber with
   its vapour bypassed to suction, a multi-evaporator plant held apart by an
   EPR, and a two-stage cascade. They are simplified for teaching: correct in
   arrangement and in what each device does, not to plant-design accuracy.

   Loaded as a plain script in the browser (exposes `RefrigCircuits`) and
   require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  /* ---- Shared loop geometry ----------------------------------------------
     Every single-stage circuit is drawn on the same rectangle so a learner
     stepping up a variation sees the familiar loop with something added,
     not a completely new picture. Verticals sit on component centres.       */
  const G = {
    compressor: { x: 55,  y: 40,  w: 180, h: 96 },   // centre 145, 88
    condenser:  { x: 705, y: 40,  w: 190, h: 96 },   // centre 800, 88
    evaporator: { x: 55,  y: 248, w: 180, h: 96 },   // centre 145, 296
    yTop: 88, yBottom: 296, xLeft: 145, xRight: 800,
    viewBox: "30 18 900 362",
  };

  /* ---- Small helpers used by the definitions ------------------------------ */
  const hLine = (x1, x2, y) => `M ${x1} ${y} L ${x2} ${y}`;
  const vLine = (x, y1, y2) => `M ${x} ${y1} L ${x} ${y2}`;

  /* A standard fin block for a coil, as fractions of the box. */
  function fins(box, n) {
    const out = [];
    const step = 15, x0 = box.x + 22;
    for (let i = 0; i < (n || 4); i++) {
      out.push({ x: x0 + i * step, y1: box.y + 16, y2: box.y + box.h - 24 });
    }
    return out;
  }

  /* ---- The four pipe runs of the standard loop ---------------------------- */
  function loopPipes(opts) {
    const o = opts || {};
    return [
      { id: "seg-discharge", state: "hotgas", d: hLine(235, 705, 88),
        label: o.dischargeLabel || "hot gas", labelAt: { x: 470, y: 72 } },
      { id: "seg-liquid", state: "liquid", d: vLine(800, 136, 276),
        label: "liquid", labelAt: { x: 848, y: 164, anchor: "start" } },
      { id: "seg-evapfeed", state: "flash", d: hLine(770, 235, 296),
        label: o.feedLabel || "flash mix", labelAt: { x: 500, y: 280 } },
      { id: "seg-suction", state: "vapor", d: vLine(145, 248, 136),
        label: "suction vapour", labelAt: { x: 158, y: 196, anchor: "start" } },
    ];
  }

  /* ---- The three components every circuit has ----------------------------- */
  function loopCore(extra) {
    const e = extra || {};
    return [
      { id: "compressor", kind: "box", box: G.compressor, label: "COMPRESSOR",
        accent: "hotgas", icon: { type: "circle", cx: 145, cy: 80, r: 20 } },
      { id: "condenser", kind: "coil", box: G.condenser, label: "CONDENSER",
        accent: "hotgas", coil: "cond", sub: { text: "heat OUT", x: 828, y: 88 },
        fins: fins(G.condenser, 4) },
      { id: "evaporator", kind: "coil", box: G.evaporator, label: e.evapLabel || "EVAPORATOR",
        accent: "vapor", coil: "evap", sub: { text: "heat IN", x: 180, y: 296 },
        fins: fins(G.evaporator, 4) },
      { id: "metering", kind: "diamond", at: e.meteringAt || { x: 800, y: 296 }, r: 20,
        label: e.meteringLabel || "METERING DEVICE", accent: "flash",
        labelPos: e.meteringLabelPos || "below" },
    ];
  }

  /* Inline devices are drawn as a small body straddling a pipe run. */
  const vessel = (id, x, y, label, opts) => Object.assign({
    id, kind: "vessel", at: { x, y }, w: 56, h: 68, label,
    labelPos: (opts && opts.labelPos) || "below",
  }, opts || {});

  const puck = (id, x, y, label, opts) => Object.assign({
    id, kind: "puck", at: { x, y }, w: 46, h: 22, label,
    labelPos: (opts && opts.labelPos) || "below",
  }, opts || {});

  const glass = (id, x, y, label, opts) => Object.assign({
    id, kind: "glass", at: { x, y }, r: 13, label,
    labelPos: (opts && opts.labelPos) || "below",
  }, opts || {});

  const coilValve = (id, x, y, label, opts) => Object.assign({
    id, kind: "valve", at: { x, y }, r: 13, label,
    labelPos: (opts && opts.labelPos) || "below",
  }, opts || {});

  /* =======================================================================
     The circuits

     Geometry rules that keep these readable, learned the hard way:
       · captions never default to "below" — each device says which side it
         wants, and neighbours on the same run alternate above/below;
       · a pipe label and a device caption never share a band of y;
       · devices need room, so a circuit with four things on its liquid line
         runs that line along the bottom instead of cramming the short
         vertical drop.
     ======================================================================= */
  const CIRCUITS = {

    /* -- 1 ---------------------------------------------------------------- */
    basic: {
      label: "Basic cycle",
      short: "Basic",
      order: 1,
      blurb: "The four components every vapour-compression system has, and nothing else.",
      teaches: "Compression, condensing, throttling, evaporating — one lap of the loop. Everything else in this list is hardware bolted around these four.",
      seenIn: "Every textbook cycle diagram. Real machines add to this, but never take any of it away.",
      viewBox: G.viewBox,
      pipes: loopPipes(),
      components: loopCore(),
      effects: {},
      faults: [],
    },

    /* -- 2 ----------------------------------------------------------------
       The liquid line gets four devices, so it runs along the bottom of the
       drawing where there is room for them, with the TX valve moved left to
       where the liquid line ends. That is also the real arrangement: the
       liquid line runs to the valve, and the flash mix only exists after it. */
    commercial: {
      label: "Commercial liquid line",
      short: "Liquid line",
      order: 2,
      blurb: "The same cycle with the liquid line a real machine actually has: receiver, filter-drier, sight glass and a liquid-line solenoid.",
      teaches: "None of these change the thermodynamics. They are there so the metering device is fed clean, dry, bubble-free liquid, and so the system can be pumped down and worked on. Notice they all sit before the valve — everything downstream of it is a mixture, and none of these devices would work in it.",
      seenIn: "The standard commercial circuit drawing: condenser → receiver → drier → sight glass → solenoid → TX valve.",
      viewBox: G.viewBox,
      pipes: [
        { id: "seg-discharge", state: "hotgas", d: hLine(235, 705, 88),
          label: "hot gas", labelAt: { x: 470, y: 72 } },
        { id: "seg-liquid", state: "liquid", d: "M 800 136 L 800 296 L 500 296",
          label: "liquid", labelAt: { x: 846, y: 168, anchor: "start" } },
        { id: "seg-evapfeed", state: "flash", d: hLine(440, 235, 296),
          label: "flash mix", labelAt: { x: 338, y: 280 } },
        { id: "seg-suction", state: "vapor", d: vLine(145, 248, 136),
          label: "suction vapour", labelAt: { x: 158, y: 196, anchor: "start" } },
      ],
      components: loopCore({ meteringAt: { x: 470, y: 296 }, meteringLabel: "TX VALVE",
                             meteringLabelPos: "below" }).concat([
        Object.assign(vessel("receiver", 800, 196, "RECEIVER", { labelPos: "left" }),
          { accent: "liquid", liquidLevel: 0.55, w: 56, h: 64 }),
        Object.assign(puck("drier", 700, 296, "FILTER-DRIER", { labelPos: "above" }),
          { accent: "liquid" }),
        Object.assign(glass("sightglass", 620, 296, "SIGHT GLASS", { labelPos: "below" }),
          { accent: "liquid" }),
        Object.assign(puck("solenoid", 540, 296, "SOLENOID", { labelPos: "above" }),
          { accent: "liquid" }),
      ]),
      effects: {},
      faults: ["restrictedDrier", "solenoidShut"],
    },

    /* -- 3 ---------------------------------------------------------------- */
    accumulator: {
      label: "Suction accumulator",
      short: "Accumulator",
      order: 3,
      blurb: "A trap in the suction line that catches liquid before it can reach the compressor.",
      teaches: "Compressors pump vapour. Liquid does not compress, so a slug of it breaks valves — and worse, it washes the oil out of the bearings. The accumulator holds any liquid back and feeds it out slowly through a small orifice, along with the oil.",
      seenIn: "Low-temperature and heat-pump circuits, and anything with a load that swings — the vessel stands vertically in the suction line close to the compressor.",
      viewBox: G.viewBox,
      pipes: [
        { id: "seg-discharge", state: "hotgas", d: hLine(235, 705, 88),
          label: "hot gas", labelAt: { x: 470, y: 72 } },
        { id: "seg-liquid", state: "liquid", d: vLine(800, 136, 276),
          label: "liquid", labelAt: { x: 846, y: 168, anchor: "start" } },
        { id: "seg-evapfeed", state: "flash", d: hLine(770, 235, 296),
          label: "flash mix", labelAt: { x: 500, y: 280 } },
        { id: "seg-suction", state: "vapor", d: vLine(145, 248, 136),
          label: "suction vapour", labelAt: { x: 166, y: 162, anchor: "start" } },
      ],
      components: loopCore().concat([
        Object.assign(vessel("receiver", 800, 196, "RECEIVER", { labelPos: "left" }),
          { accent: "liquid", liquidLevel: 0.55, w: 56, h: 64 }),
        Object.assign(vessel("accumulator", 145, 212, "SUCTION\nACCUMULATOR", { labelPos: "right" }),
          { accent: "vapor", liquidLevel: 0.24, w: 52, h: 56 }),
      ]),
      effects: {},
      faults: ["restrictedDrier", "floodback"],
    },

    /* -- 4 ----------------------------------------------------------------
       The heat exchanger couples two runs that sit on opposite corners of the
       loop. Rather than dragging the pipework across the drawing, it is shown
       as a block in the middle with a thermal coupling to each line — the
       dashed ties carry heat, not refrigerant, and are drawn to say so.      */
    suctionHx: {
      label: "Suction-line heat exchanger",
      short: "Suction HX",
      order: 4,
      blurb: "The warm liquid line is run against the cold suction line so the two swap heat.",
      teaches: "This is the one addition that genuinely moves the numbers. The liquid reaches the valve colder, so less of it flashes and more of each kilogram is left to do cooling. The vapour reaches the compressor warmer, which guarantees no liquid gets there — but costs work and pushes the discharge up. Watch COP: the gain is real, and small.",
      seenIn: "Domestic fridges, where the capillary tube is simply soldered along the suction line, and as a purpose-built coaxial exchanger on larger plant.",
      viewBox: G.viewBox,
      pipes: [
        { id: "seg-discharge", state: "hotgas", d: hLine(235, 705, 88),
          label: "hot gas", labelAt: { x: 470, y: 72 } },
        { id: "seg-liquid", state: "liquid", d: vLine(800, 136, 276),
          label: "liquid", labelAt: { x: 846, y: 250, anchor: "start" } },
        { id: "seg-evapfeed", state: "flash", d: hLine(770, 235, 296),
          label: "flash mix", labelAt: { x: 560, y: 280 } },
        { id: "seg-suction", state: "vapor", d: vLine(145, 248, 136),
          label: "suction vapour", labelAt: { x: 162, y: 158, anchor: "start" } },
      ],
      components: loopCore().concat([
        { id: "suctionHx", kind: "hx", box: { x: 330, y: 176, w: 190, h: 54 },
          label: "SUCTION-LINE\nHEAT EXCHANGER", accent: "flash",
          couples: [
            // Heat leaves the liquid line and enters the suction line
            { d: "M 800 203 L 520 203", dir: "in" },
            { d: "M 330 203 L 145 203", dir: "out" },
          ],
        },
      ]),
      effects: { dSub: 6, dSuper: 6,
        note: "About 6 K moves out of the liquid line and into the suction line." },
      faults: ["restrictedDrier"],
    },

    /* -- 5 ---------------------------------------------------------------- */
    flashGas: {
      label: "Flash chamber & gas bypass",
      short: "Flash gas",
      order: 5,
      blurb: "The vapour made by throttling is separated out and sent straight back to the compressor, so only liquid enters the evaporator.",
      teaches: "Throttling always boils some refrigerant off, and that flash gas does no cooling — it just takes up room in the coil and blankets the surface. Separate it out and every part of the coil is wetted with liquid. Watch the coil-inlet figure go to zero while COP barely moves: what you bought is a coil that does its rated duty, not free efficiency.",
      seenIn: "Flash-chamber circuits in refrigeration texts, and as economiser vessels on larger screw plant.",
      viewBox: G.viewBox,
      pipes: [
        { id: "seg-discharge", state: "hotgas", d: hLine(235, 705, 88),
          label: "hot gas", labelAt: { x: 470, y: 72 } },
        { id: "seg-liquid", state: "liquid", d: vLine(800, 136, 276),
          label: "liquid", labelAt: { x: 846, y: 168, anchor: "start" } },
        // Valve to chamber: still a mixture
        { id: "seg-evapfeed", state: "flash", d: hLine(770, 588, 296),
          label: "flash mix", labelAt: { x: 679, y: 278 } },
        // Chamber to coil: liquid only, which is the whole point of the vessel
        { id: "seg-liquidfeed", state: "liquid", d: hLine(532, 235, 296),
          label: "liquid only", labelAt: { x: 384, y: 278 } },
        // Vapour taken off the top and returned across the middle of the loop
        { id: "seg-bypass", state: "vapor", d: "M 560 262 L 560 226 L 145 226",
          label: "flash gas bypassed", labelAt: { x: 372, y: 216 } },
        { id: "seg-suction", state: "vapor", d: vLine(145, 248, 136),
          label: "suction", labelAt: { x: 162, y: 172, anchor: "start" } },
      ],
      components: loopCore().concat([
        Object.assign(vessel("flashChamber", 560, 296, "FLASH CHAMBER", { labelPos: "below" }),
          { accent: "flash", liquidLevel: 0.42, w: 56, h: 68 }),
      ]),
      effects: { flashBypass: true,
        note: "The coil inlet is now pure liquid. COP barely moves — the compressor still has to pump that gas." },
      faults: ["restrictedDrier"],
    },

    /* -- 6 ----------------------------------------------------------------
       Two coils at different temperatures on one compressor. Needs a taller
       frame, so the drawing grows downward and the loop stays where it was.  */
    multiEvap: {
      label: "Multi-evaporator with EPR",
      short: "Multi-evap",
      order: 6,
      blurb: "One compressor and one condenser serving two rooms at different temperatures, held apart by an evaporator pressure regulator.",
      teaches: "A compressor pulls every coil connected to it down to the same suction pressure — the lowest one. Left alone, the chiller coil would be dragged down to freezer pressure and everything in it would freeze. The EPR sits in the warm coil's branch and refuses to let its pressure fall below setpoint. It regulates what is upstream of it, which is exactly why it belongs in the suction line and not the liquid line.",
      seenIn: "Supermarket packs, cold stores and marine provision rooms: freezer, meat room and vegetable room on one machine, each with its own solenoid and TX valve.",
      // The whole loop shifts right so the chiller's return has a clear column
      // down the far left — no branch crosses another anywhere on this drawing.
      viewBox: "30 18 900 500",
      pipes: [
        { id: "seg-discharge", state: "hotgas", d: hLine(260, 705, 88),
          label: "hot gas", labelAt: { x: 482, y: 72 } },
        { id: "seg-liquid", state: "liquid", d: "M 800 136 L 800 296 L 560 296",
          label: "liquid header", labelAt: { x: 676, y: 280 } },
        { id: "seg-evapfeed", state: "flash", d: hLine(452, 260, 296),
          label: "flash mix", labelAt: { x: 340, y: 280 } },
        // Branch down to the second circuit
        { id: "seg-liquidB", state: "liquid", d: "M 560 296 L 560 448 L 488 448",
          label: null },
        { id: "seg-feedB", state: "flash", d: hLine(452, 260, 448),
          label: "flash mix", labelAt: { x: 340, y: 432 } },
        // Chiller return: down the far-left column, through the EPR, into the
        // common suction line. It passes nothing else on the way.
        { id: "seg-suctB", state: "vapor", d: "M 80 448 L 44 448 L 44 196 L 170 196",
          label: "+2 °C branch", labelAt: { x: 104, y: 184, anchor: "start" } },
        { id: "seg-suction", state: "vapor", d: vLine(170, 248, 136),
          label: "suction vapour", labelAt: { x: 188, y: 168, anchor: "start" } },
      ],
      components: [
        { id: "compressor", kind: "box", box: { x: 80, y: 40, w: 180, h: 96 },
          label: "COMPRESSOR", accent: "hotgas",
          icon: { type: "circle", cx: 170, cy: 80, r: 20 } },
        { id: "condenser", kind: "coil", box: G.condenser, label: "CONDENSER",
          accent: "hotgas", coil: "cond", sub: { text: "heat OUT", x: 828, y: 88 },
          fins: fins(G.condenser, 4) },
        { id: "evaporator", kind: "coil", box: { x: 80, y: 248, w: 180, h: 96 },
          label: "FREEZER COIL", accent: "vapor", coil: "evap",
          sub: { text: "{tEvap}", x: 212, y: 292 },
          fins: fins({ x: 80, y: 248, w: 180, h: 96 }, 4) },
        { id: "evaporatorB", kind: "coil", box: { x: 80, y: 400, w: 180, h: 96 },
          label: "CHILLER COIL", accent: "flash", coil: "evapB",
          sub: { text: "{tEvapB}", x: 212, y: 444 },
          fins: fins({ x: 80, y: 400, w: 180, h: 96 }, 4) },
        { id: "metering", kind: "diamond", at: { x: 470, y: 296 }, r: 18,
          label: "TX VALVE · FREEZER", accent: "flash", labelPos: "above" },
        { id: "meteringB", kind: "diamond", at: { x: 470, y: 448 }, r: 18,
          label: "TX VALVE · CHILLER", accent: "flash", labelPos: "above" },
        Object.assign(coilValve("epr", 44, 220, "EPR", { labelPos: "right" }),
          { accent: "vapor" }),
        Object.assign(vessel("receiver", 800, 196, "RECEIVER", { labelPos: "left" }),
          { accent: "liquid", liquidLevel: 0.55, w: 56, h: 64 }),
      ],
      effects: { lowSideMul: 0.62, secondEvapDT: 22,
        note: "The EPR holds the chiller coil 22 K above the freezer it shares a compressor with." },
      faults: ["eprMisadjusted", "restrictedDrier"],
    },

    /* -- 7 ----------------------------------------------------------------
       Two complete loops. The low stage's condenser and the high stage's
       evaporator are the same vessel — that is what "cascade" means, so the
       two circuits are drawn meeting in one box in the middle.

       The low stage is mirrored (compressor on the right, evaporator on the
       left) purely so no run has to cross another: liquid leaves the cascade
       vessel on the left and drops down the far side, while discharge climbs
       to it on the right.                                                    */
    cascade: {
      label: "Two-stage cascade",
      short: "Cascade",
      order: 7,
      blurb: "Two complete circuits, thermally coupled: the low stage's condenser is the high stage's evaporator.",
      teaches: "One compressor cannot span −40 °C to +40 °C. The pressure ratio would be enormous, the discharge would come out hot enough to break the oil down, and the machine would pump almost nothing. Split the lift in two and each stage runs a sane ratio. The performance panel shows what a single machine would have managed over the same span — compare them.",
      seenIn: "Industrial ammonia and CO₂ plant, blast freezers, and low-temperature process cooling.",
      viewBox: "20 10 900 505",
      pipes: [
        /* ---- High stage: takes heat from the cascade vessel, rejects to air */
        { id: "seg-discharge", state: "hotgas", d: hLine(225, 690, 74),
          label: "hot gas · high stage", labelAt: { x: 458, y: 58 } },
        { id: "seg-liquid", state: "liquid", d: vLine(785, 118, 200),
          label: "liquid", labelAt: { x: 802, y: 150, anchor: "start" } },
        { id: "seg-evapfeed", state: "flash", d: "M 785 236 L 785 262 L 660 262",
          label: null },
        { id: "seg-hs-suction", state: "vapor", d: "M 420 262 L 135 262 L 135 118",
          label: "suction · high stage", labelAt: { x: 300, y: 252 } },
        /* ---- Low stage: rejects into the cascade vessel */
        { id: "seg-ls-discharge", state: "hotgas", d: "M 365 400 L 365 372 L 700 372 L 700 306 L 660 306",
          label: "hot gas · low stage", labelAt: { x: 528, y: 362 } },
        { id: "seg-ls-liquid", state: "liquid", d: "M 420 306 L 110 306 L 110 332",
          label: "liquid", labelAt: { x: 276, y: 296 } },
        { id: "seg-ls-feed", state: "flash", d: vLine(110, 368, 400),
          label: "flash mix", labelAt: { x: 126, y: 386, anchor: "start" } },
        { id: "seg-ls-suction", state: "vapor", d: hLine(225, 280, 442),
          label: "suction", labelAt: { x: 252, y: 392 } },
      ],
      components: [
        /* High stage */
        { id: "compressor", kind: "box", box: { x: 45, y: 30, w: 180, h: 88 },
          label: "HIGH-STAGE\nCOMPRESSOR", accent: "hotgas",
          icon: { type: "circle", cx: 135, cy: 58, r: 15 } },
        { id: "condenser", kind: "coil", box: { x: 690, y: 30, w: 190, h: 88 },
          label: "CONDENSER", accent: "hotgas", coil: "cond",
          sub: { text: "heat OUT to air", x: 812, y: 62 },
          fins: fins({ x: 690, y: 30, w: 190, h: 88 }, 4) },
        { id: "metering", kind: "diamond", at: { x: 785, y: 218 }, r: 16,
          label: "TX VALVE · HIGH", accent: "flash", labelPos: "left" },
        /* The shared vessel: the low stage condenses in it, the high stage boils */
        { id: "cascadeHx", kind: "hx", box: { x: 420, y: 236, w: 240, h: 96 },
          label: "CASCADE\nCONDENSER", accent: "flash",
          sub2: { text: "high stage boils here", x: 540, y: 250 },
          sub3: { text: "low stage condenses here", x: 540, y: 324 } },
        /* Low stage, mirrored so nothing crosses */
        { id: "evaporator", kind: "coil", box: { x: 45, y: 400, w: 180, h: 84 },
          label: "EVAPORATOR", accent: "vapor", coil: "evap",
          sub: { text: "heat IN", x: 178, y: 438 },
          fins: fins({ x: 45, y: 400, w: 180, h: 84 }, 4) },
        { id: "meteringB", kind: "diamond", at: { x: 110, y: 350 }, r: 16,
          label: "TX VALVE · LOW", accent: "flash", labelPos: "right" },
        { id: "compressorB", kind: "box", box: { x: 280, y: 400, w: 180, h: 84 },
          label: "LOW-STAGE\nCOMPRESSOR", accent: "hotgas",
          icon: { type: "circle", cx: 370, cy: 428, r: 15 } },
      ],
      effects: { cascade: true,
        note: "Each stage does part of the lift, so neither runs a punishing pressure ratio." },
      faults: ["cascadeFouled", "restrictedDrier"],
    },
  };

  const ORDER = Object.keys(CIRCUITS).sort((a, b) => CIRCUITS[a].order - CIRCUITS[b].order);

  const api = { CIRCUITS, ORDER, GEOM: G };
  root.RefrigCircuits = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
