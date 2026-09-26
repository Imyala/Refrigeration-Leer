/* =========================================================================
   Plant Simulator — the logic behind the plant drawing.

   The Cycle Simulator draws the cycle as four boxes on a loop. This draws the
   machine a technician actually walks up to: a cool room with a unit cooler
   and its TXV, and outside it a condensing unit with a semi-hermetic
   compressor, oil separator, condenser, receiver, filter-drier, solenoid,
   sight glass, accumulator, pressure controls and gauges.

   This file holds everything that is not drawing, so the test suite can check
   it in Node: where every pipe runs, the seven P–h state points worked out
   from the same operating point the rest of the site uses (js/model.js), what
   each fault does to the parts you can see, and what each part is.

   Loaded as a plain script in the browser (exposes `RefrigPlant`) and
   require()-able in Node.
   ========================================================================= */
(function (root) {
  "use strict";

  const node = typeof module !== "undefined" && typeof require !== "undefined";
  const D = node ? require("./data.js") : root.RefrigData;
  const M = node ? require("./model.js") : root.RefrigModel;

  /* ---- Polyline geometry ---------------------------------------------------
     Every pipe and coil is a polyline, corners and return bends included as
     short runs of points. One representation serves the drawing (a path), the
     flow animation (its direction) and the fault overlays (a slice of it:
     "frost on the first 40 % of the suction line").                          */
  function arc(cx, cy, r, a0, a1, n) {
    const pts = [];
    const steps = n || 8;
    for (let i = 0; i <= steps; i++) {
      const a = (a0 + (a1 - a0) * (i / steps)) * Math.PI / 180;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    return pts;
  }

  /* An orthogonal run through `corners`, each corner rounded with radius r. */
  function run(corners, r) {
    const rad = r == null ? 12 : r;
    if (corners.length < 3) return corners.map((p) => p.slice());
    const out = [corners[0].slice()];
    for (let i = 1; i < corners.length - 1; i++) {
      const [px, py] = corners[i - 1], [cx, cy] = corners[i], [nx, ny] = corners[i + 1];
      const inLen = Math.hypot(cx - px, cy - py), outLen = Math.hypot(nx - cx, ny - cy);
      const k = Math.min(rad, inLen / 2, outLen / 2);
      const ax = cx - ((cx - px) / inLen) * k, ay = cy - ((cy - py) / inLen) * k;
      const bx = cx + ((nx - cx) / outLen) * k, by = cy + ((ny - cy) / outLen) * k;
      // A quadratic through the corner, sampled: close enough to a bend.
      for (let s = 0; s <= 6; s++) {
        const t = s / 6;
        out.push([
          (1 - t) * (1 - t) * ax + 2 * (1 - t) * t * cx + t * t * bx,
          (1 - t) * (1 - t) * ay + 2 * (1 - t) * t * cy + t * t * by,
        ]);
      }
    }
    out.push(corners[corners.length - 1].slice());
    return out;
  }

  /* A coil: `passes` straight tubes joined by return bends, starting at
     (xStart, y0) and running toward xEnd on the first pass. */
  function serpentine(xStart, xEnd, y0, pitch, passes, lead) {
    const r = pitch / 2;
    const dirFirst = Math.sign(xEnd - xStart);
    const pts = [];
    const l = lead || 0;
    pts.push([xStart + (-dirFirst) * l, y0]);
    let x = xStart, dir = dirFirst;
    for (let i = 0; i < passes; i++) {
      const y = y0 + i * pitch;
      const endX = dir > 0 ? Math.max(xStart, xEnd) : Math.min(xStart, xEnd);
      pts.push([x, y]);
      pts.push([endX, y]);
      if (i < passes - 1) {
        // Return bend: a half circle outward past the end of the pass.
        const cy = y + r;
        const a = dir > 0 ? arc(endX, cy, r, -90, 90, 10) : arc(endX, cy, r, 270, 90, 10);
        pts.push(...a.slice(1, -1));
        x = endX;
        dir = -dir;
      } else {
        pts.push([endX + dir * l, y]);
      }
    }
    return pts;
  }

  function lengths(pts) {
    const L = [0];
    for (let i = 1; i < pts.length; i++) {
      L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    }
    return L;
  }
  const totalLength = (pts) => lengths(pts)[pts.length - 1];

  function pointAt(pts, frac) {
    const L = lengths(pts), total = L[L.length - 1];
    const target = Math.max(0, Math.min(1, frac)) * total;
    for (let i = 1; i < pts.length; i++) {
      if (L[i] >= target) {
        const seg = L[i] - L[i - 1] || 1;
        const t = (target - L[i - 1]) / seg;
        return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t];
      }
    }
    return pts[pts.length - 1].slice();
  }

  /* The part of a polyline between two fractions of its length. */
  function slice(pts, f0, f1) {
    const a = Math.max(0, Math.min(1, f0)), b = Math.max(0, Math.min(1, f1));
    if (b <= a) return [];
    const L = lengths(pts), total = L[L.length - 1];
    const s = a * total, e = b * total;
    const out = [pointAt(pts, a)];
    for (let i = 1; i < pts.length - 1; i++) if (L[i] > s && L[i] < e) out.push(pts[i].slice());
    out.push(pointAt(pts, b));
    return out;
  }

  const toPath = (pts) => pts.length
    ? "M" + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L")
    : "";

  /* ---- The layout ----------------------------------------------------------
     One drawing, 1240 × 720. The cool room is on the left behind an insulated
     panel wall; the condensing unit is outside on the right. Pipes are listed
     in the direction the refrigerant flows, which is the direction the flow
     animation runs.                                                          */
  const VIEW = { w: 1240, h: 720 };

  const ZONES = {
    room:    { x: 14,  y: 14, w: 446, h: 692 },
    wall:    { x: 460, y: 14, w: 16,  h: 692 },
    outside: { x: 476, y: 14, w: 750, h: 692 },
  };

  /* Where each part sits: the anchor its drawing is placed at. */
  const PARTS_AT = {
    evaporator:     { x: 44,  y: 164, w: 362, h: 250 },
    txv:            { x: 410, y: 150 },
    bulb:           { x: 440, y: 462 },
    compressor:     { x: 636, y: 522 },
    oilSeparator:   { x: 960, y: 450 },
    condenser:      { x: 852, y: 30,  w: 356, h: 206 },
    receiver:       { x: 830, y: 290, w: 230, h: 58 },
    filterDrier:    { x: 790, y: 150 },
    solenoid:       { x: 690, y: 60 },
    sightGlass:     { x: 590, y: 60 },
    accumulator:    { x: 532, y: 520 },
    gauges:         { x: 540, y: 180 },
    pressureControl:{ x: 612, y: 292 },
    controller:     { x: 326, y: 560 },
  };

  // Coil tubes. Seven passes in the condenser, entering at the top right and
  // draining out of the bottom left; eight in the evaporator, fed at the top
  // right by the TXV and leaving at the bottom right.
  const COILS = {
    condenser: serpentine(1186, 874, 56, 24, 7, 10),
    evaporator: serpentine(386, 72, 206, 24, 8, 12),
  };
  const condIn = COILS.condenser[0], condOut = COILS.condenser[COILS.condenser.length - 1];
  const evapIn = COILS.evaporator[0], evapOut = COILS.evaporator[COILS.evaporator.length - 1];

  const RUNS = {
    // Compressor discharge valve, up and across to the oil separator.
    discharge:   { state: "hot", pts: run([[836, 522], [836, 432], [974, 432], [974, 452]]) },
    // Oil separator outlet, up the right-hand side to the top of the condenser.
    dischargeUp: { state: "hot", pts: run([[996, 452], [996, 412], [1216, 412], [1216, 56], [condIn[0], condIn[1]]]) },
    // Condenser outlet, down into the top of the receiver.
    condOut:     { state: "liq", pts: run([[condOut[0], condOut[1]], [848, condOut[1]], [848, 292]], 10) },
    // Receiver king valve, up through the filter-drier to the top of the unit.
    liquidRiser: { state: "liq", pts: run([[830, 330], [790, 330], [790, 60], [740, 60]]) },
    // Across the top: solenoid, sight glass, through the wall to the TXV.
    liquidLine:  { state: "liq", pts: run([[740, 60], [446, 60], [446, 150], [432, 150]], 10) },
    // TXV outlet down into the coil inlet.
    txvOut:      { state: "mix", pts: run([[410, 174], [410, evapIn[1]], [evapIn[0], evapIn[1]]], 8) },
    // Coil outlet, past the TXV bulb, out through the wall to the accumulator.
    suction:     { state: "vap", pts: run([[evapOut[0], evapOut[1]], [440, evapOut[1]], [440, 500], [546, 500], [546, 522]]) },
    // Accumulator outlet to the compressor's suction service valve.
    suctionOut:  { state: "vap", pts: run([[570, 522], [570, 492], [676, 492], [676, 522]], 10) },
  };

  // Small-bore lines: no refrigerant state of their own worth colouring.
  const THIN = {
    // Oil return from the separator's float valve to the crankcase.
    oilReturn: run([[985, 626], [985, 682], [860, 682], [860, 664]], 8),
    // TXV capillary: a service coil at the power head, then over the top of
    // the unit cooler, down the room side and under it to the bulb.
    capillary: run([[410, 118], [410, 96], [26, 96], [26, 452], [430, 452]], 8),
    // Gauge lines, teed off the service valves.
    gaugeLow:  run([[600, 262], [600, 492]], 6),
    gaugeHigh: run([[700, 262], [700, 412], [836, 412], [836, 432]], 8),
    // The dual pressure control's two capillaries, to the gauge lines.
    controlLow:  run([[612, 318], [600, 318]], 0),
    controlHigh: run([[688, 338], [700, 338]], 0),
  };

  /* ---- State points --------------------------------------------------------
     Numbered as on a P–h diagram in a textbook: 5 after the expansion valve,
     1 where the last liquid boils off in the evaporator, 1′ at the compressor
     suction, 2 at the discharge, 3 where the vapour starts to condense, 4
     where the last of it has condensed, 4′ subcooled at the valve inlet.     */
  const POINT_ORDER = ["5", "1", "1'", "2", "3", "4", "4'"];

  const POINTS = {
    "5":  { name: "Evaporator inlet", where: "After the TXV, entering the coil",
            what: "Low pressure, cold, and part liquid part flash gas. The valve has dropped the pressure; some of the liquid flashed to vapour doing it, and that flash gas cools the rest." },
    "1":  { name: "Saturated vapour in the evaporator", where: "Inside the coil, where the last liquid boils off",
            what: "Still at the evaporating temperature, but now all vapour. Everything between 5 and 1 is the refrigerant boiling and taking heat out of the room." },
    "1'": { name: "Compressor suction", where: "Suction line at the compressor",
            what: "Superheated vapour: warmer than the evaporating temperature by the superheat. The superheat is what proves no liquid is coming back to the compressor." },
    "2":  { name: "Compressor discharge", where: "Discharge line leaving the compressor",
            what: "High pressure, and the hottest point in the system. The work the compressor put in is here as heat." },
    "3":  { name: "Condensing starts", where: "Inside the condenser, near the inlet",
            what: "The hot gas has been cooled down to the condensing temperature (desuperheated) and begins to condense." },
    "4":  { name: "Saturated liquid in the condenser", where: "Inside the condenser, near the outlet",
            what: "The last of the vapour has condensed. From here on it is all liquid at condensing pressure." },
    "4'": { name: "TXV inlet", where: "Liquid line at the expansion valve",
            what: "Subcooled liquid: cooler than the condensing temperature by the subcooling. Subcooling is what keeps it liquid all the way to the valve." },
  };

  /* Where each numbered marker sits on the drawing. 1, 3 and 4 are inside the
     coils and move with the fault: a starved coil finishes boiling early, a
     backed-up condenser finishes condensing early. */
  function pointPositions(viz) {
    const v = viz || D.VIZ.none;
    const evapDone = Math.max(0.08, Math.min(0.96, v.evapFront));
    const condDone = Math.max(0.25, Math.min(0.97, v.condFront));
    const condStart = Math.min(0.14, condDone - 0.08);
    return {
      "5":  pointAt(RUNS.txvOut.pts, 0.72),
      "1":  pointAt(COILS.evaporator, evapDone),
      "1'": pointAt(RUNS.suctionOut.pts, 0.55),
      "2":  pointAt(RUNS.discharge.pts, 0.22),
      "3":  pointAt(COILS.condenser, condStart),
      "4":  pointAt(COILS.condenser, condDone),
      "4'": pointAt(RUNS.liquidLine.pts, 0.78),
    };
  }

  /* The thermodynamic state at each point, from one operating point. */
  function statePoints(op) {
    const tbl = op.base.satTable;
    const hg = (t) => M.interpTable(tbl, "T", t, "hg");
    const hf = (t) => M.interpTable(tbl, "T", t, "hf");
    const quality = (h, t) => {
      const f = hf(t), g = hg(t);
      return Math.max(0, Math.min(1, (h - f) / Math.max(g - f, 1)));
    };
    /* Liquid coming back (floodback, an overfeeding valve, an iced coil): the
       refrigerant never finishes boiling. It leaves the coil and reaches the
       compressor as a wet mix, so 1 and 1′ are one point, inside the dome.
       A trace of mist (quality above 0.99) still reads as saturated vapour. */
    const wet = op.suctionQuality != null && op.suctionQuality < 0.99;
    const suction = wet
      ? { p: op.pLow, t: op.tEvap, h: op.h1, phase: "mix", x: op.suctionQuality, wet: true }
      : null;
    return {
      "5":  { p: op.pLow,  t: op.tEvap,      h: op.h4,          phase: "mix", x: quality(op.h4, op.tEvap) },
      "1":  wet ? Object.assign({}, suction)
                : { p: op.pLow, t: op.tEvap, h: Math.min(hg(op.tEvap), op.h1), phase: "satVap", x: 1 },
      "1'": wet ? Object.assign({}, suction)
                : { p: op.pLow, t: op.tSuction, h: op.h1, phase: op.h1 > hg(op.tEvap) + 0.5 ? "vap" : "satVap" },
      // With liquid coming back (floodback) the discharge is driven down
      // toward saturation, never below it. The model floors it just above
      // (MIN_DISCHARGE_SUPERHEAT); this guard stays in case that changes.
      "2":  op.tDischarge > op.tCond + 0.5
        ? { p: op.pHigh, t: op.tDischarge, h: op.h2, phase: "vap" }
        : { p: op.pHigh, t: op.tCond, h: op.h2, phase: "wetDisch", x: 1 },
      "3":  { p: op.pHigh, t: op.tCond,      h: hg(op.tCond),   phase: "satVap", x: 1 },
      "4":  { p: op.pHigh, t: op.tCond,      h: hf(op.tCond),   phase: "satLiq", x: 0 },
      "4'": { p: op.pHigh, t: op.tLiquid,    h: op.h3,          phase: "liq" },
    };
  }

  const PHASE_WORDS = {
    mix: "Liquid and vapour mix",
    satVap: "Saturated vapour",
    vap: "Superheated vapour",
    satLiq: "Saturated liquid",
    wetDisch: "At saturation: liquid is being carried through the compressor",
    liq: "Subcooled liquid",
  };

  /* ---- The fault list --------------------------------------------------------
     Every fault in the library that this plant has the hardware for: it has a
     liquid-line solenoid and a suction accumulator, but no second evaporator
     and no cascade. */
  const PLANT_DEVICES = ["solenoid", "accumulator"];
  const DEVICE_FOR = { solenoidShut: "solenoid", floodback: "accumulator", eprMisadjusted: "epr", cascadeFouled: "cascadeHx" };
  function faultKeys() {
    return Object.keys(D.FAULTS).filter((k) => {
      const f = D.FAULTS[k];
      return !f.needsCircuitDevice || PLANT_DEVICES.includes(DEVICE_FOR[k]);
    });
  }

  /* ---- What each fault does to the parts you can see ------------------------
     The gauges tell you something is wrong; the plant tells you where. Each
     symptom here is something a technician sees, hears or feels at the part,
     and the drawing shows it at that part.                                   */
  function symptoms(faultKey, op, running) {
    const fk = D.FAULTS[faultKey] ? faultKey : "none";
    const v = D.VIZ[fk] || D.VIZ.none;
    const base = op.base;
    const s = {
      running: running !== false,
      condFanTurning: running !== false && fk !== "condFanFail",
      condDirty: fk === "dirtyCondenser",
      evapIced: fk === "icedEvaporator",
      // Frost on the cold end of the coil is normal below freezing.
      evapFrostLight: op.tEvap < -2 && fk !== "icedEvaporator" && fk !== "txvStuckClosed" && fk !== "solenoidShut",
      evapWetted: v.evapFront,
      condLiquidFrom: v.condFront,
      receiverLevel: 0.5,
      accumulatorLevel: 0,
      sightGlass: "clear",
      drierFrost: fk === "restrictedDrier",
      suctionFrost: v.suctionSpill,
      compressorFrost: v.suctionSpill >= 0.45,
      solenoidEnergised: fk !== "solenoidShut",
      liquidStopsAtSolenoid: fk === "solenoidShut",
      gaugeFlutter: fk === "nonCondensables",
      // The cut-outs: a condenser with no air goes to the high-pressure
      // cut-out, a solenoid that will not open pumps down to the low-pressure
      // switch; anything else that pushes that far trips them too.
      hpTrip: fk === "condFanFail" || op.pHigh > base.pHigh * 1.5,
      lpTrip: fk === "solenoidShut" || op.pLow < base.pLow * 0.5,
      flags: (v.flags || []).map((id) => (id === "metering" ? "txv" : id)),
    };
    if (fk === "lowCharge") { s.receiverLevel = 0.12; s.sightGlass = "bubbles"; }
    else if (fk === "overcharge") s.receiverLevel = 0.92;
    else if (fk === "restrictedDrier") { s.receiverLevel = 0.72; s.sightGlass = "bubbles"; }
    else if (fk === "solenoidShut") s.receiverLevel = 0.86;
    else if (fk === "nonCondensables") s.receiverLevel = 0.46;
    else if (fk === "condFanFail") s.receiverLevel = 0.36;
    if (fk === "floodback") s.accumulatorLevel = 0.62;
    else if (fk === "txvStuckOpen") s.accumulatorLevel = 0.34;
    else if (fk === "icedEvaporator") s.accumulatorLevel = 0.18;
    // Any fault that leaves no liquid seal shows gas in the glass.
    if (op.subcool < 1.5 && s.sightGlass === "clear") s.sightGlass = "bubbles";
    if (fk === "solenoidShut") s.sightGlass = "clear";
    // The filter-drier is on the riser: when it restricts, frost forms on
    // its outlet and flash gas shows downstream.
    if (s.drierFrost) s.flags = s.flags.concat("filterDrier", "sightGlass");
    if (fk === "lowCharge") s.flags = s.flags.concat("sightGlass");
    if (s.hpTrip || s.lpTrip) s.flags = s.flags.concat("pressureControl");
    s.flags = Array.from(new Set(s.flags));
    return s;
  }

  /* What a technician would notice at each part, for the part inspector:
     the fault library's own words where it has them, and the plant's own
     plainer words for the parts only this drawing has. */
  function partSign(partId, faultKey, sym) {
    const v = D.VIZ[faultKey] || D.VIZ.none;
    const signs = v.signs || {};
    const key = partId === "txv" ? "metering" : partId;
    if (signs[key]) return signs[key];
    if (partId === "sightGlass") {
      if (sym.sightGlass === "bubbles") return "Bubbles streaming through the glass: there is vapour in the liquid line.";
      if (sym.liquidStopsAtSolenoid) return "Full and still: liquid is sitting behind the closed solenoid, not moving.";
    }
    if (partId === "filterDrier" && sym.drierFrost) return "Cold, sweating or frosted on its outlet end: the refrigerant is flashing inside it because it is restricted.";
    if (partId === "pressureControl" && sym.hpTrip) return "High-pressure cut-out lamp: head pressure has reached the cut-out setting.";
    if (partId === "pressureControl" && sym.lpTrip) return "Low-pressure switch open: the low side has pulled down to the cut-out.";
    if (partId === "accumulator" && sym.accumulatorLevel > 0.3) return "Liquid standing in it, and the shell cold and sweating.";
    if (partId === "gauges" && sym.gaugeFlutter) return "The high-side needle flutters, and reads above what the condensing temperature says it should.";
    return null;
  }

  /* ---- The parts ----------------------------------------------------------- */
  const PARTS = {
    compressor: {
      name: "Compressor", kind: "Semi-hermetic reciprocating",
      does: "Draws low-pressure vapour out of the suction line and squeezes it up to condensing pressure, which makes it hot. The motor is sealed inside the same casing and is cooled by the suction gas flowing over it.",
      look: "Oil visible in the crankcase sight glass. Discharge line hot, suction line cool. It should run smoothly — a knock means liquid or a mechanical fault.",
    },
    oilSeparator: {
      name: "Oil separator", kind: "Discharge-line vessel with float",
      does: "Catches the oil that leaves the compressor with the discharge gas and returns it to the crankcase through a float valve, so less oil travels round the system.",
      look: "The oil return line runs warm while it is returning oil; it should not stay hot all the time.",
    },
    condenser: {
      name: "Condenser", kind: "Air-cooled, finned coil and fan",
      does: "Rejects the heat picked up in the cool room plus the heat of compression. The hot gas cools to its condensing temperature, condenses to liquid, and leaves slightly subcooled.",
      look: "Clean fins, fan turning, warm air coming off the coil. Hot at the top where the gas enters, cooler at the bottom where the liquid leaves.",
    },
    receiver: {
      name: "Liquid receiver", kind: "Storage vessel with king valve",
      does: "Holds liquid refrigerant so there is always a liquid seal at its outlet, and gives the charge somewhere to go when the system pumps down or is serviced. The king valve on the outlet isolates it.",
      look: "Some liquid in it at all times. Level very low suggests short of charge; brim-full suggests overcharge or a restriction downstream.",
    },
    filterDrier: {
      name: "Filter-drier", kind: "Liquid-line, replaceable",
      does: "Takes moisture, acid and debris out of the liquid before it reaches the solenoid and TXV.",
      look: "Inlet and outlet at the same temperature. A temperature drop across it — cold, sweating or frosted on the outlet — means it is restricted.",
    },
    solenoid: {
      name: "Liquid-line solenoid valve", kind: "Normally closed",
      does: "Opens when the thermostat calls for cooling and closes when the room is satisfied. With it shut, the compressor pumps the refrigerant into the condenser and receiver and stops on the low-pressure switch (pump-down control).",
      look: "The coil is warm and holds a steel screwdriver when energised; you may hear it click as it opens and closes.",
    },
    sightGlass: {
      name: "Sight glass & moisture indicator", kind: "Liquid-line",
      does: "Shows what is reaching the TXV. The centre element changes colour if there is moisture in the system.",
      look: "Clear and full of liquid. Bubbles usually mean vapour in the liquid line — short of charge or a restriction upstream. Check the indicator colour against the chart on the fitting.",
    },
    txv: {
      name: "Thermostatic expansion valve (TXV)", kind: "With power head and sensing bulb",
      does: "Drops the pressure and meters liquid into the evaporator to hold a steady superheat at the coil outlet. The bulb's pressure pushes down on the diaphragm in the power head to open it; the spring and the evaporator pressure push the other way.",
      look: "A steady frost or sweat line on the outlet. Hissing but starving the coil, or flooding liquid through, are the two ways it goes wrong.",
    },
    bulb: {
      name: "TXV sensing bulb", kind: "Clamped on the suction line",
      does: "Senses the suction-line temperature at the coil outlet and sends the matching pressure down the capillary to the power head. Where and how it is fitted decides what superheat the valve actually holds.",
      look: "Clamped tight on clean pipe, in good contact, and insulated so it reads the pipe, not the room air.",
    },
    evaporator: {
      name: "Evaporator (unit cooler)", kind: "Finned coil and fans in the cool room",
      does: "The refrigerant boils in the coil and takes heat out of the air the fans blow through it. By the outlet it should be all vapour, with a few degrees of superheat.",
      look: "An even, light frost pattern on a low-temperature coil; fans turning; air off the coil colder than the air on. Solid ice means an airflow or defrost problem.",
    },
    accumulator: {
      name: "Suction accumulator", kind: "Suction-line vessel",
      does: "Catches any liquid coming back up the suction line and lets it boil off before it can reach the compressor. A small metered hole in its outlet tube returns oil.",
      look: "Dry and at suction temperature. Cold and sweating with liquid standing in it means floodback.",
    },
    pressureControl: {
      name: "Dual pressure control", kind: "High-pressure cut-out and low-pressure switch",
      does: "Stops the compressor if head pressure climbs past the high-pressure cut-out, and when the low side pulls down below the low-pressure setting — which is how the system stops at the end of a pump-down.",
      look: "Settings suit the refrigerant and the job. A tripped high-pressure cut-out usually needs a manual reset — find out why it tripped before you reset it.",
    },
    controller: {
      name: "Room temperature controller", kind: "Digital thermostat with a room probe",
      does: "Reads the room air through its probe and switches the liquid-line solenoid: open while the room is above setpoint, shut when it gets there. It usually runs the evaporator fans and the defrost as well.",
      look: "The display agrees with a thermometer in the room. A room that never reaches setpoint with the solenoid open is a refrigeration problem, not a controller one.",
    },
    gauges: {
      name: "Suction & discharge gauges", kind: "Compound (blue) and high-pressure (red)",
      does: "Read the suction and discharge pressures. The inner scale gives the saturation temperature for the refrigerant, which is the evaporating or condensing temperature.",
      look: "Suction pressure matching the coil temperature, head pressure matching the ambient plus the condenser's design difference.",
    },
  };
  const PART_ORDER = ["compressor", "oilSeparator", "condenser", "receiver", "filterDrier", "solenoid",
    "sightGlass", "txv", "bulb", "evaporator", "controller", "accumulator", "pressureControl", "gauges"];

  /* Air temperatures around the plant, for the labels on the two zones.
     Representative: the room sits about 10 K above the coil, and the outside
     air about 15 K below condensing, at the refrigerant's design point. */
  function airTemps(op, load) {
    const base = op.base;
    const L = (load == null ? 100 : load) - 100;
    return { room: base.tEvap + 10 + L / 10, ambient: base.tCond - 15 };
  }

  const api = {
    VIEW, ZONES, PARTS_AT, COILS, RUNS, THIN, POINTS, POINT_ORDER, PHASE_WORDS, PARTS, PART_ORDER,
    arc, run, serpentine, lengths, totalLength, pointAt, slice, toPath,
    pointPositions, statePoints, faultKeys, symptoms, partSign, airTemps,
  };
  root.RefrigPlant = api;
  if (node && module.exports) module.exports = api;
})(globalThis);
