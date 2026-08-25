/* =========================================================================
   Shared data: refrigerant property tables, base operating points, the
   fault library (with field clues for the technician quiz) and the
   per-fault schematic visualisation parameters.

   Loaded as a plain script in the browser (exposes `RefrigData` on
   globalThis) and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  /* ---- Saturation tables  [T(°C), P(bar abs), hf, hg (kJ/kg)] -------------
     Each table is internally consistent (its own enthalpy reference), so
     differences within a fluid — and therefore COP — are meaningful.        */
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

  const CP_VAP = 0.90;     // approx vapour specific heat (kJ/kg·K) for superheat
  const CP_LIQ = 1.40;     // approx liquid specific heat (kJ/kg·K) for subcool
  const ATM_BAR = 1.01325; // standard atmosphere — gauges read pressure above this
  const BASE_FLOW = 20;    // L/min at 100% compressor speed

  /* ---- Refrigerant base operating points --------------------------------- */
  const REFRIGERANTS = {
    R134a: { label: "R134a", pLow: 3.5,  pHigh: 16.0, tEvap: 6,  tCond: 58, tSuction: 12, tDischarge: 75, tLiquid: 52 },
    R410A: { label: "R410A", pLow: 9.0,  pHigh: 30.0, tEvap: 6,  tCond: 50, tSuction: 12, tDischarge: 80, tLiquid: 45 },
    R22:   { label: "R22",   pLow: 5.0,  pHigh: 19.5, tEvap: 5,  tCond: 50, tSuction: 11, tDischarge: 78, tLiquid: 44 },
    R404A: { label: "R404A", pLow: 4.2,  pHigh: 20.0, tEvap: -10,tCond: 43, tSuction: -4, tDischarge: 78, tLiquid: 38 },
  };
  Object.keys(REFRIGERANTS).forEach(k => { REFRIGERANTS[k].satTable = TABLES[k]; });

  /* ---- Fault library ------------------------------------------------------
     Each fault perturbs the operating point (pressure multipliers, superheat /
     subcool / discharge offsets) the way the real fault would.
     `clues` are the field observations a technician would gather; `family`
     groups faults whose gauge signatures are nearly indistinguishable (the
     quiz gives half credit within a family).                                 */
  const FAULTS = {
    none: {
      label: "Healthy — no fault", mLow: 1, mHigh: 1, dSuper: 0, dSub: 0, dDisch: 0,
      family: null, diag: null,
      clues: [
        "Sight glass clear and full",
        "Superheat and subcooling both in the normal band",
        "Pressures agree with the PT relationship for the conditions",
      ],
    },
    lowCharge: {
      label: "Low refrigerant charge", mLow: 0.72, mHigh: 0.88, dSuper: 14, dSub: -8, dDisch: 8,
      family: null,
      diag: "Undercharged. Both pressures sag, suction superheat runs high, and subcooling falls toward zero — there isn't enough liquid to fill the condenser. Capacity and COP drop.",
      clues: [
        "Bubbles or flashing in the sight glass",
        "Subcooling near zero",
        "Evaporator only partly cold; long run times",
      ],
    },
    overcharge: {
      label: "Overcharge", mLow: 1.08, mHigh: 1.22, dSuper: -4, dSub: 9, dDisch: 6,
      family: null,
      diag: "Too much refrigerant. Head pressure and subcooling run high as liquid backs up into the condenser, raising compressor load and lowering efficiency.",
      clues: [
        "Very high subcooling",
        "Condenser clean and fan running, yet head pressure high",
        "System recently topped up with refrigerant",
      ],
    },
    dirtyCondenser: {
      label: "Dirty / blocked condenser coil", mLow: 1.06, mHigh: 1.40, dSuper: -1, dSub: 5, dDisch: 18,
      family: "cond-airflow",
      diag: "The condenser can't reject its heat. Head pressure and discharge temperature climb, subcooling rises, and the compressor works much harder — COP falls.",
      clues: [
        "Coil visibly dirty, fins matted",
        "Weak airflow off the condenser",
        "Head pressure and discharge temperature both high",
      ],
    },
    condFanFail: {
      label: "Condenser fan failure", mLow: 1.12, mHigh: 1.60, dSuper: 0, dSub: -2, dDisch: 25,
      family: "cond-airflow",
      diag: "The condenser fan has failed, so almost no heat is rejected. Head pressure and discharge temperature climb fast — expect a high-pressure trip. Unlike a dirty coil, the fix is electrical or mechanical: motor, capacitor or blade.",
      clues: [
        "Condenser fan not turning — no air off the coil",
        "Head pressure climbing rapidly toward the high-pressure cut-out",
        "Compressor and liquid line very hot",
      ],
    },
    icedEvaporator: {
      label: "Iced / blocked evaporator", mLow: 0.60, mHigh: 0.92, dSuper: -7, dSub: 1, dDisch: -4,
      family: null,
      diag: "Poor evaporator airflow. Suction pressure and coil temperature drop, superheat collapses (risking liquid floodback to the compressor), and capacity plummets.",
      clues: [
        "Coil blocked with ice or frost",
        "Frost creeping down the suction line",
        "Superheat near zero — floodback risk",
      ],
    },
    restrictedDrier: {
      label: "Restricted filter-drier", mLow: 0.68, mHigh: 0.95, dSuper: 12, dSub: 6, dDisch: 6,
      family: "feed-restriction",
      diag: "A blocked filter-drier throttles the liquid line before the metering device. Suction pressure falls and superheat climbs (the coil is starved) while liquid backs up behind the restriction, so subcooling reads high. The tell-tale: a temperature drop — even frost — across the drier itself.",
      clues: [
        "Temperature drop (or frost) across the filter-drier",
        "High superheat together with high subcooling",
        "Bubbles in the sight glass after the drier",
      ],
    },
    txvStuckClosed: {
      label: "TXV stuck closed (underfeeding)", mLow: 0.58, mHigh: 0.93, dSuper: 18, dSub: 3, dDisch: 8,
      family: "feed-restriction",
      diag: "The expansion valve is underfeeding. The evaporator is starved: suction pressure sags and superheat runs very high, while the high side stays near normal. Capacity collapses even though the compressor is fine.",
      clues: [
        "Very high superheat — coil starved",
        "Low suction pressure with a near-normal high side",
        "No temperature drop across the drier (the valve is the restriction)",
      ],
    },
    txvStuckOpen: {
      label: "TXV stuck open (overfeeding)", mLow: 1.18, mHigh: 1.05, dSuper: -5, dSub: -1, dDisch: -10,
      family: null,
      diag: "The expansion valve is overfeeding. Suction pressure runs high and superheat collapses to nothing — liquid can flood back and slug the compressor. Discharge temperature drops as wet vapour returns.",
      clues: [
        "Superheat near zero at the coil outlet",
        "Suction line cold, sweating or frosting back to the compressor",
        "Compressor may knock — liquid slugging",
      ],
    },
    nonCondensables: {
      label: "Non-condensables (air) in system", mLow: 1.03, mHigh: 1.28, dSuper: 2, dSub: 7, dDisch: 12,
      family: null,
      diag: "Air or nitrogen trapped in the system collects in the condenser and adds its own partial pressure. Head pressure reads higher than the PT relationship predicts for the condensing temperature, and discharge runs hot. Cure: recover, evacuate properly, recharge.",
      clues: [
        "Head pressure above what the PT chart predicts",
        "Gauge needle may flutter",
        "History of poor evacuation, or the system was opened to air",
      ],
    },
    compressorValves: {
      label: "Compressor valves leaking", mLow: 1.30, mHigh: 0.78, dSuper: 4, dSub: -3, dDisch: 15,
      family: null,
      diag: "Broken or leaking compressor valves let gas slip backwards. The pressures converge — high side low, low side high — the pressure ratio shrinks, and despite the gentle pressures the discharge gas runs hot from re-compression. Cooling is weak.",
      clues: [
        "High and low pressures unusually close together",
        "Compressor runs but cooling is weak",
        "Hot discharge line despite a low head pressure",
      ],
    },

    /* ---- Faults that need hardware only some circuits have -----------------
       `needsCircuitDevice` keeps these out of the fault list on a circuit that
       has no such device: you cannot have a stuck liquid-line solenoid on a
       system that was never drawn with one.                                  */
    solenoidShut: {
      label: "Liquid-line solenoid stuck shut", needsCircuitDevice: true,
      mLow: 0.42, mHigh: 0.86, dSuper: 22, dSub: 9, dDisch: 6,
      family: "starved",
      diag: "The solenoid has failed closed, so no liquid is reaching the metering device at all. The compressor keeps pulling the low side down into a deep vacuum while the high side falls away for want of flow. On a machine with pump-down control this is exactly what a normal shutdown looks like — the difference is that it never opens again and the room never pulls down.",
      clues: [
        "Low side pulls down into a vacuum and stays there",
        "Superheat enormous, subcooling high — the charge is stacked upstream",
        "Nothing at all is passing the valve; the liquid line is warm right up to the solenoid",
        "Check the coil for voltage before condemning the valve",
      ],
    },
    floodback: {
      label: "Floodback — liquid returning to the compressor", needsCircuitDevice: true,
      mLow: 1.36, mHigh: 1.06, dSuper: -9, dSub: -4, dDisch: -26,
      family: "flooded",
      diag: "Liquid refrigerant is leaving the evaporator and travelling up the suction line. Superheat has collapsed to nothing, the suction line is cold and sweating right back to the compressor, and the discharge is unnaturally cool because the compressor is cooling itself on the liquid it is trying to pump. The accumulator is the only thing holding the damage off.",
      clues: [
        "Superheat at or near zero",
        "Suction line frosted or sweating all the way to the compressor",
        "Discharge temperature far lower than the pressure ratio would predict",
        "Compressor may knock audibly on start-up",
      ],
    },
    eprMisadjusted: {
      label: "EPR set too low", needsCircuitDevice: true,
      mLow: 0.86, mHigh: 0.98, dSuper: -3, dSub: 0, dDisch: -4,
      family: "flooded",
      diag: "The evaporator pressure regulator is passing too freely, so the warm coil is being dragged down toward the cold coil's pressure. The room it serves over-cools and its produce starts to freeze, while the compressor sees more load than it was sized for. Nothing here looks like a fault on the gauges — you find it by comparing the two coils.",
      clues: [
        "The warm room runs colder than its setpoint and will not come up",
        "Both coils sitting at nearly the same pressure",
        "Compressor running far longer than expected",
        "Freezer side looks entirely normal",
      ],
    },
    cascadeFouled: {
      label: "Cascade condenser fouled", needsCircuitDevice: true,
      mLow: 1.02, mHigh: 1.24, dSuper: 2, dSub: -3, dDisch: 20,
      family: "high-side",
      diag: "The cascade heat exchanger is not passing heat properly — oil logging on the low-stage side, or non-condensables in it. The low stage cannot reject its heat, so its head pressure climbs and its discharge runs hot, while the high stage looks entirely healthy because nothing is wrong with it. Reading only the high stage will send you the wrong way.",
      clues: [
        "Low-stage head pressure high and climbing",
        "Low-stage discharge temperature high",
        "High stage completely normal on its own gauges",
        "Temperature difference across the cascade vessel much larger than design",
      ],
    },
  };

  /* ---- How each fault looks on the schematic ------------------------------
     condFront / evapFront: 0..1 position of the phase-change front inside the
     condenser / evaporator coil. liquidSpill / suctionSpill: 0..1 length of
     the *wrong* state spilling into the next pipe (hot gas down the liquid
     line; wet refrigerant up the suction line = floodback). flags: components
     to mark with a warning pulse.                                            */
  const VIZ = {
    none:             { condFront: 0.55, evapFront: 0.65, liquidSpill: 0.00, suctionSpill: 0.00, flags: [] },
    lowCharge:        { condFront: 0.80, evapFront: 0.30, liquidSpill: 0.38, suctionSpill: 0.00, flags: ["receiver", "evaporator"] },
    overcharge:       { condFront: 0.45, evapFront: 0.78, liquidSpill: 0.00, suctionSpill: 0.16, flags: ["condenser"] },
    dirtyCondenser:   { condFront: 0.93, evapFront: 0.58, liquidSpill: 0.16, suctionSpill: 0.00, flags: ["condenser"] },
    condFanFail:      { condFront: 0.97, evapFront: 0.60, liquidSpill: 0.30, suctionSpill: 0.00, flags: ["condenser"] },
    icedEvaporator:   { condFront: 0.40, evapFront: 0.95, liquidSpill: 0.00, suctionSpill: 0.42, flags: ["evaporator", "compressor"] },
    restrictedDrier:  { condFront: 0.50, evapFront: 0.30, liquidSpill: 0.00, suctionSpill: 0.00, flags: ["receiver", "metering"] },
    txvStuckClosed:   { condFront: 0.50, evapFront: 0.18, liquidSpill: 0.00, suctionSpill: 0.00, flags: ["metering", "evaporator"] },
    txvStuckOpen:     { condFront: 0.50, evapFront: 0.92, liquidSpill: 0.00, suctionSpill: 0.50, flags: ["metering", "compressor"] },
    nonCondensables:  { condFront: 0.85, evapFront: 0.60, liquidSpill: 0.12, suctionSpill: 0.00, flags: ["condenser", "receiver"] },
    compressorValves: { condFront: 0.35, evapFront: 0.50, liquidSpill: 0.00, suctionSpill: 0.00, flags: ["compressor"] },
    solenoidShut:     { condFront: 0.35, evapFront: 0.10, liquidSpill: 0.00, suctionSpill: 0.00, flags: ["solenoid", "evaporator"] },
    floodback:        { condFront: 0.45, evapFront: 0.98, liquidSpill: 0.00, suctionSpill: 0.72, flags: ["accumulator", "compressor"] },
    eprMisadjusted:   { condFront: 0.52, evapFront: 0.82, liquidSpill: 0.00, suctionSpill: 0.20, flags: ["epr", "evaporatorB"] },
    cascadeFouled:    { condFront: 0.60, evapFront: 0.58, liquidSpill: 0.10, suctionSpill: 0.00, flags: ["cascadeHx", "compressorB"] },
  };

  const api = { toRows, TABLES, CP_VAP, CP_LIQ, ATM_BAR, BASE_FLOW, REFRIGERANTS, FAULTS, VIZ };
  root.RefrigData = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
