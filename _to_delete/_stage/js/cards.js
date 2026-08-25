/* =========================================================================
   Extra spaced-repetition card banks, beyond the lesson quizzes:

   - FAULT_CARDS: one written gauge-scenario question per fault. A fault the
     learner misdiagnoses in the simulator's Technician Quiz enters their
     practice deck as one of these, resurfacing the next day.
   - RECALL_CARDS: typed-answer cards (numbers, not multiple choice) for the
     skills that must be automatic — superheat/subcooling arithmetic,
     gauge/absolute conversion, the 80% cylinder rule, COP. Each is tied to
     the lesson that teaches it and joins the deck when that lesson's quiz
     is first checked.

   Requires RefrigData (data.js). Loaded as a plain script (exposes
   `RefrigCards`) and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const D = (typeof module !== "undefined" && typeof require !== "undefined")
    ? require("./data.js")
    : root.RefrigData;

  /* ---- Fault scenario cards ---------------------------------------------- */
  // Written signatures match the table taught in lesson 8.2.
  const STEMS = {
    lowCharge: "Both pressures are low, superheat is high and subcooling is near zero. The sight glass shows bubbles.",
    overcharge: "Head pressure is high with very high subcooling; the suction is slightly high and superheat is low. The condenser is clean and its fan is running.",
    dirtyCondenser: "Head pressure and discharge temperature are both high with raised subcooling; the low side is slightly high. Airflow off the coil feels weak.",
    condFanFail: "Head pressure is climbing fast toward the high-pressure cut-out and the discharge line is very hot. There is no air moving off the condenser.",
    icedEvaporator: "Suction pressure is low and superheat is near zero, with frost creeping down the suction line toward the compressor.",
    restrictedDrier: "Both pressures are low, superheat is high — and yet subcooling is also high. There is a clear temperature drop across the filter-drier.",
    txvStuckClosed: "Suction pressure is very low with very high superheat, while the high side sits near normal. There is no temperature drop across the drier.",
    txvStuckOpen: "Suction pressure is high and superheat has collapsed to nearly zero; the suction line is cold and sweating back to the compressor, and the discharge runs cool.",
    nonCondensables: "Head pressure reads well above what the PT chart predicts for the measured condensing temperature, the gauge needle flutters, and the discharge is hot.",
    compressorValves: "The high and low pressures have converged — low head, high suction — yet the discharge line is hot, and cooling is weak.",
  };

  const faultKeys = Object.keys(D.FAULTS).filter(k => k !== "none");

  function distractorsFor(key) {
    const fam = D.FAULTS[key].family;
    const out = [];
    if (fam) {
      const sib = faultKeys.find(o => o !== key && D.FAULTS[o].family === fam);
      if (sib) out.push(sib);
    }
    for (const o of faultKeys) {
      if (out.length >= 3) break;
      if (o !== key && !out.includes(o)) out.push(o);
    }
    return out.slice(0, 3);
  }

  const FAULT_CARDS = {};
  for (const key of faultKeys) {
    const f = D.FAULTS[key];
    const stem = STEMS[key] || `A system shows: ${f.clues.slice(0, 2).join("; ").toLowerCase()}.`;
    FAULT_CARDS[key] = {
      q: `A technician reads: ${stem} What is the most likely fault?`,
      options: [f.label, ...distractorsFor(key).map(k => D.FAULTS[k].label)],
      answer: 0,
      explain: f.diag,
      module: "Fault diagnosis practice",
    };
  }

  /* ---- Typed recall cards ------------------------------------------------- */
  const RECALL_CARDS = {
    "sh-basic": {
      type: "input", lesson: "superheat-subcooling/measuring-sh-sc",
      q: "The low-side gauge converts to a saturation temperature of 5°C, and the suction-line thermometer reads 12°C. What is the superheat?",
      answer: 7, tolerance: 0, unit: "K",
      explain: "Superheat = line temperature − saturation temperature = 12 − 5 = 7 K. Two readings, one subtraction.",
    },
    "sc-basic": {
      type: "input", lesson: "superheat-subcooling/measuring-sh-sc",
      q: "The high-side gauge converts to a condensing temperature of 56°C, and the liquid line reads 47°C. What is the subcooling?",
      answer: 9, tolerance: 0, unit: "K",
      explain: "Subcooling = saturation temperature − liquid-line temperature = 56 − 47 = 9 K.",
    },
    "sh-collapsed": {
      type: "input", lesson: "superheat-subcooling/interpreting-sh-sc",
      q: "Saturation temperature is 2°C and the suction line also reads 2°C. What is the superheat?",
      answer: 0, tolerance: 0, unit: "K",
      explain: "2 − 2 = 0 K — no superheat at all. The vapour may still carry liquid, and liquid heads straight for the compressor: treat zero superheat as urgent.",
    },
    "abs-pressure": {
      type: "input", lesson: "fundamentals/pressure-and-pt",
      q: "A gauge reads 350 kPa. Taking atmospheric pressure as 101 kPa, what is the absolute pressure?",
      answer: 451, tolerance: 2, unit: "kPa",
      explain: "Absolute = gauge + atmospheric = 350 + 101 = 451 kPa. Gauges read zero at atmospheric pressure; thermodynamic charts start from a true vacuum.",
    },
    "gauge-pressure": {
      type: "input", lesson: "fundamentals/pressure-and-pt",
      q: "A PT table gives an absolute pressure of 701 kPa. What should the gauge read?",
      answer: 600, tolerance: 2, unit: "kPa",
      explain: "Gauge = absolute − atmospheric = 701 − 101 = 600 kPa g. Converting between the two is everyday gauge work.",
    },
    "cylinder-fill": {
      type: "input", lesson: "repair/recovery",
      q: "A recovery cylinder has a water capacity of 40 kg. What is the maximum weight of refrigerant it may hold?",
      answer: 32, tolerance: 0, unit: "kg",
      explain: "Cylinders are full at 80% of water capacity by weight: 40 × 0.8 = 32 kg. The vapour space above the liquid is what saves the cylinder when it warms.",
    },
    "cop-calc": {
      type: "input", lesson: "cycle/ph-diagram",
      q: "A cycle absorbs 120 kJ/kg in the evaporator while the compressor adds 40 kJ/kg of work. What is the COP?",
      answer: 3, tolerance: 0.1, unit: "",
      explain: "COP = cooling effect ÷ compressor work = 120 ÷ 40 = 3. Three units of cooling for every unit of electricity — that's the whole appeal of the vapour-compression cycle.",
    },
  };

  const api = { FAULT_CARDS, RECALL_CARDS, STEMS };
  root.RefrigCards = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
