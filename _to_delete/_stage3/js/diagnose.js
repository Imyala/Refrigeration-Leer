/* =========================================================================
   Diagnostic engine — the measurement side of fault finding.

   The simulator can already apply a fault and show you the answer. This
   module models the part that matters on site: you do not get given the
   numbers. You have to decide where to put an instrument, fit it, read it,
   and work out what the reading means.

   It knows:
     - every point on a system a technician can actually measure, and what
       instrument measures it;
     - the temperature or pressure that point would read for a given
       operating point;
     - which readings are needed before superheat or subcooling can be
       calculated at all;
     - what a set of readings is evidence for, and what it rules out.

   Pure logic — no DOM. Loaded as a plain script (exposes `RefrigDiagnose`)
   and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const D = (typeof module !== "undefined" && typeof require !== "undefined")
    ? require("./data.js") : root.RefrigData;
  const M = (typeof module !== "undefined" && typeof require !== "undefined")
    ? require("./model.js") : root.RefrigModel;

  /* ---- Measurement points -------------------------------------------------
     `kind` decides the instrument: a clamp-on temperature probe, or a gauge
     on a service port. `needs` is what a learner has to have measured before
     a derived value can be worked out. */
  const POINTS = {
    suctionLine: {
      label: "Suction line at the compressor", short: "Suction line", kind: "temp", zone: "suction",
      instrument: "Clamp-on probe, insulated, on a clean straight run",
      why: "Tells you how hot the vapour arriving at the compressor is. Compared with the evaporator outlet it shows how much heat the suction line has picked up on the way.",
    },
    evapOutlet: {
      label: "Evaporator outlet", short: "Evap outlet", kind: "temp", zone: "suction",
      instrument: "Clamp-on probe at the coil outlet, next to the TX valve bulb",
      why: "One of the two numbers superheat is made of. It must be measured at the coil outlet, not at the compressor, or you are measuring suction line gain as well.",
    },
    evapInlet: {
      label: "Evaporator inlet (after the metering device)", short: "Evap inlet", kind: "temp", zone: "distrib",
      instrument: "Clamp-on probe just downstream of the valve or distributor",
      why: "Should be close to the saturated suction temperature. A big split between inlet and outlet on a starved coil tells you the liquid is boiling off far too early.",
    },
    liquidLine: {
      label: "Liquid line at the metering device", short: "Liquid line", kind: "temp", zone: "liquid",
      instrument: "Clamp-on probe on the liquid line near the valve",
      why: "One of the two numbers subcooling is made of. Take it near the metering device so it includes any heat the liquid line has picked up.",
    },
    condOutlet: {
      label: "Condenser outlet", short: "Cond outlet", kind: "temp", zone: "liquid",
      instrument: "Clamp-on probe at the condenser outlet or receiver inlet",
      why: "Subcooling measured right at the coil. Compared with the liquid line at the valve it shows what the liquid line itself is doing to the refrigerant.",
    },
    dischargeLine: {
      label: "Discharge line", short: "Discharge", kind: "temp", zone: "discharge",
      instrument: "Clamp-on probe about 150 mm from the discharge service valve",
      why: "The compressor's temperature alarm. A high discharge temperature is the first sign of a high compression ratio or a starved, superheated suction.",
    },
    condAirOn: {
      label: "Air on to the condenser", short: "Cond air on", kind: "temp", zone: "air",
      instrument: "Air probe at the coil face, out of the discharge stream",
      why: "The condenser's heat sink. Condensing temperature minus air-on is the condenser TD, and that single number tells you whether the condenser is doing its job.",
    },
    condAirOff: {
      label: "Air off the condenser", short: "Cond air off", kind: "temp", zone: "air",
      instrument: "Air probe in the discharge airstream",
      why: "The rise across the condenser. Little rise with a hot coil means the air is not moving; a big rise means airflow is short.",
    },
    evapAirOn: {
      label: "Air on to the evaporator", short: "Evap air on", kind: "temp", zone: "air",
      instrument: "Air probe at the return, before the coil",
      why: "The load. Evaporator TD is air-on minus saturated suction temperature, and it is how you judge whether the coil is matched to the box.",
    },
    evapAirOff: {
      label: "Air off the evaporator", short: "Evap air off", kind: "temp", zone: "air",
      instrument: "Air probe in the supply airstream",
      why: "The split across the coil. A small split with a cold coil means airflow trouble; a small split with a warm coil means a refrigerant-side problem.",
    },
    lowGauge: {
      label: "Low-side gauge (suction service valve)", short: "Low gauge", kind: "gauge", zone: "suction",
      instrument: "Gauge manifold on the suction service port",
      why: "Suction pressure, which converts through the PT relationship to the saturated suction temperature — the other half of superheat.",
    },
    highGauge: {
      label: "High-side gauge (discharge or liquid service valve)", short: "High gauge", kind: "gauge", zone: "discharge",
      instrument: "Gauge manifold on the high-side service port",
      why: "Discharge pressure, which converts to the condensing temperature — the other half of subcooling, and the basis of condenser TD.",
    },
    ampClamp: {
      label: "Compressor running current", short: "Amps", kind: "elec", zone: "elec",
      instrument: "Clamp meter around one supply conductor",
      why: "Cross-checks the gauges. Current follows mass flow and compression ratio, so a compressor that is barely pumping draws low current even with the contactor pulled in.",
    },
  };

  /* Which points a derived value needs before it can be worked out at all. */
  const DERIVED = {
    superheat: {
      label: "Superheat", unit: "K", needs: ["lowGauge", "evapOutlet"],
      needsWhy: "Superheat is the evaporator outlet temperature minus the saturated suction temperature. You need the low-side gauge for one and a probe on the coil outlet for the other — one without the other tells you nothing.",
    },
    totalSuperheat: {
      label: "Total (compressor) superheat", unit: "K", needs: ["lowGauge", "suctionLine"],
      needsWhy: "Measured at the compressor rather than the coil, so it includes everything the suction line picked up on the way.",
    },
    subcooling: {
      label: "Subcooling", unit: "K", needs: ["highGauge", "liquidLine"],
      needsWhy: "Subcooling is the condensing temperature minus the liquid line temperature. The high-side gauge gives the first, a probe on the liquid line the second.",
    },
    condenserTd: {
      label: "Condenser TD", unit: "K", needs: ["highGauge", "condAirOn"],
      needsWhy: "Condensing temperature minus the air going on to the coil. It is the cleanest single test of whether a condenser is doing its job.",
    },
    evaporatorTd: {
      label: "Evaporator TD", unit: "K", needs: ["lowGauge", "evapAirOn"],
      needsWhy: "Air on to the coil minus the saturated suction temperature. It tells you whether the coil is matched to its load.",
    },
    airSplit: {
      label: "Air split across the evaporator", unit: "K", needs: ["evapAirOn", "evapAirOff"],
      needsWhy: "The temperature drop the coil is actually delivering to the space.",
    },
    condRise: {
      label: "Air rise across the condenser", unit: "K", needs: ["condAirOn", "condAirOff"],
      needsWhy: "How much heat the air is carrying away. Read with condenser TD it separates an airflow problem from a refrigerant-side one.",
    },
  };

  /* ---- Reading a point for a given operating point -------------------------
     `cyc` is a RefrigModel.deriveAt() result. Air temperatures are derived
     from the cycle so they move with the fault the way they would on site. */
  function readingAt(pointId, cyc, env, faultKey) {
    const f = D.FAULTS[faultKey] || D.FAULTS.none;
    const ambient = (env && env.ambient != null) ? env.ambient : 32;
    const boxAir = (env && env.boxAir != null) ? env.boxAir : cyc.tEvap + 8;

    /* A fault that chokes condenser airflow raises air-off and cuts the flow;
       one that ices the evaporator cuts the air split the same way. */
    const condAirflow = (faultKey === "condFanFail") ? 0.12
      : (faultKey === "dirtyCondenser") ? 0.45 : 1;
    const evapAirflow = (faultKey === "icedEvaporator") ? 0.3 : 1;

    switch (pointId) {
      case "suctionLine":   return cyc.tSuction + 3;                 // line gain on the way back
      case "evapOutlet":    return cyc.tSuction;
      case "evapInlet":     return cyc.tEvap + 0.5;
      case "liquidLine":    return cyc.tLiquid + 1.5;                // liquid line pick-up
      case "condOutlet":    return cyc.tLiquid;
      case "dischargeLine": return cyc.tDischarge;
      case "condAirOn":     return ambient;
      case "condAirOff": {
        /* Less airflow does not make the air hotter than the coil — it makes
           the little air that does pass leave closer to the condensing
           temperature. The approach rises as flow falls, and stops at the
           coil: air off a condenser can never exceed what it is cooling. */
        const approach = Math.min(0.9, 0.9 - 0.35 * condAirflow);
        return ambient + (cyc.tCond - ambient) * approach;
      }
      case "evapAirOn":     return boxAir;
      case "evapAirOff":    return boxAir - (boxAir - cyc.tEvap) * 0.62 * evapAirflow;
      case "lowGauge":      return cyc.pLow;                          // bar absolute
      case "highGauge":     return cyc.pHigh;
      case "ampClamp":      return 100 * (cyc.flow / D.BASE_FLOW) * (0.55 + 0.45 * (cyc.ratio / (cyc.base.pHigh / cyc.base.pLow))) * (f.ampScale || 1);
      default:              return null;
    }
  }

  /* Work out every derived value the placed instruments make possible. */
  function derive(placed, cyc, env, faultKey) {
    const has = (id) => placed.includes(id);
    const r = (id) => readingAt(id, cyc, env, faultKey);
    const out = {};
    for (const [key, d] of Object.entries(DERIVED)) {
      if (!d.needs.every(has)) { out[key] = { available: false, needs: d.needs, def: d }; continue; }
      let value = null;
      switch (key) {
        case "superheat":      value = r("evapOutlet") - M.satTemp(cyc.base, r("lowGauge")); break;
        case "totalSuperheat": value = r("suctionLine") - M.satTemp(cyc.base, r("lowGauge")); break;
        case "subcooling":
          /* Below zero is not subcooling, it is flash gas — the liquid line is
             already boiling. Report it as none, and let interpret() say so. */
          value = Math.max(0, M.satTemp(cyc.base, r("highGauge")) - r("liquidLine"));
          break;
        case "condenserTd":    value = M.satTemp(cyc.base, r("highGauge")) - r("condAirOn"); break;
        case "evaporatorTd":   value = r("evapAirOn") - M.satTemp(cyc.base, r("lowGauge")); break;
        case "airSplit":       value = r("evapAirOn") - r("evapAirOff"); break;
        case "condRise":       value = r("condAirOff") - r("condAirOn"); break;
      }
      out[key] = { available: true, value, def: d };
    }
    return out;
  }

  /* ---- What the evidence says ---------------------------------------------
     Not a diagnosis — a reading of the instruments, the way a technician
     narrates what they have in front of them before naming a fault. */
  function interpret(derived, cyc, placed) {
    const notes = [];
    const say = (state, text) => notes.push({ state, text });
    const sh = derived.superheat, sc = derived.subcooling;
    const td = derived.condenserTd, etd = derived.evaporatorTd;

    if (sh && sh.available) {
      if (sh.value < 2) say("bad", `Superheat is ${sh.value.toFixed(1)} K — effectively none. Liquid is reaching the compressor. Whatever else is wrong, that is the thing that will destroy it.`);
      else if (sh.value < 4) say("watch", `Superheat is ${sh.value.toFixed(1)} K — low. The coil is being overfed and the compressor is close to floodback.`);
      else if (sh.value > 15) say("bad", `Superheat is ${sh.value.toFixed(1)} K — very high. The coil is being starved: either it is not being fed enough liquid, or there is not enough liquid to feed it.`);
      else if (sh.value > 10) say("watch", `Superheat is ${sh.value.toFixed(1)} K — high. The last part of the coil is doing no useful work.`);
      else say("good", `Superheat is ${sh.value.toFixed(1)} K — in the normal band. The coil is being fed about right.`);
    }
    if (sc && sc.available) {
      if (sc.value < 1) say("bad", "Subcooling is zero. There is no solid column of liquid leaving the condenser — the liquid line is already flashing, so the valve is being fed a mixture of liquid and vapour instead of liquid.");
      else if (sc.value < 3) say("watch", `Subcooling is ${sc.value.toFixed(1)} K — low. Either the charge is short or the liquid is not being held back long enough to subcool.`);
      else if (sc.value > 12) say("watch", `Subcooling is ${sc.value.toFixed(1)} K — high. Liquid is stacking up in the condenser instead of moving on: too much charge, or something downstream is holding it back.`);
      else say("good", `Subcooling is ${sc.value.toFixed(1)} K — normal. Solid liquid is arriving at the metering device.`);
    }
    if (sh && sh.available && sc && sc.available) {
      const hi = sh.value > 10, lo = sc.value < 3;
      if (hi && lo) say("key", "High superheat with low subcooling is the classic undercharge picture: there is not enough refrigerant in the system to both fill the condenser and feed the coil.");
      else if (hi && sc.value > 8) say("key", "High superheat with HIGH subcooling is the signature of a restriction between the condenser and the coil: liquid is backing up behind it and the evaporator is starved in front of it.");
      else if (sh.value < 4 && sc.value > 8) say("key", "Low superheat with high subcooling points to overfeeding — an overcharge, or a metering device passing too much.");
    }
    if (td && td.available) {
      if (td.value > 20) say("bad", `Condenser TD is ${td.value.toFixed(1)} K — far too wide. The condenser cannot get rid of its heat: airflow, a dirty coil, or something in there that will not condense.`);
      else if (td.value > 14) say("watch", `Condenser TD is ${td.value.toFixed(1)} K — wider than it should be. Start looking at the condenser itself.`);
      else say("good", `Condenser TD is ${td.value.toFixed(1)} K — the condenser is rejecting its heat normally.`);
    }
    if (etd && etd.available) {
      if (etd.value > 18) say("watch", `Evaporator TD is ${etd.value.toFixed(1)} K — wide. The coil is running much colder than the load needs, which usually means it is not getting the airflow or the load it was sized for.`);
      else if (etd.value < 6) say("watch", `Evaporator TD is ${etd.value.toFixed(1)} K — narrow. The coil is barely colder than the air going through it, which is what you see when the load has gone or the coil is being overfed.`);
      else say("good", `Evaporator TD is ${etd.value.toFixed(1)} K — a normal split between the coil and the air it is cooling, so the coil is matched to its load.`);
    }
    if (!placed.includes("lowGauge") || !placed.includes("highGauge")) {
      say("watch", "You are working without both gauges. Superheat and subcooling each need one, and almost nothing can be concluded from temperatures alone.");
    }
    return notes;
  }

  /* ---- Scoring a diagnosis ------------------------------------------------- */
  const FAMILY_TIP = {
    "cond-airflow": "A blocked coil and a dead fan produce almost the same gauge picture. The instruments cannot separate them — you have to look at the machine: is the fan turning, and can you see daylight through the coil?",
    "feed-restriction": "A restricted drier and a starved TX valve read the same on gauges. Feel along the liquid line for the temperature drop: across the drier means the drier; right at the valve means the valve.",
  };

  function judge(answerKey, actualKey) {
    const actual = D.FAULTS[actualKey], answer = D.FAULTS[answerKey];
    if (!actual || !answer) return { score: 0, verdict: "unknown", text: "Unknown fault." };
    if (answerKey === actualKey) {
      return {
        score: 1, verdict: "correct",
        text: actual.diag || "Correct — there is nothing wrong with this system. Being willing to say so is part of the job: the pressure to find a fault is exactly how good machines get parts thrown at them.",
      };
    }
    if (actual.family && actual.family === answer.family) {
      return {
        score: 0.5, verdict: "close",
        text: `Half a mark — ${answer.label} and ${actual.label} share a gauge signature, and the fault here was ${actual.label}. ` + (FAMILY_TIP[actual.family] || ""),
      };
    }
    return {
      score: 0, verdict: "wrong",
      text: actual.diag
        ? `Not this time — the fault was ${actual.label}. ${actual.diag}`
        : `Not this time — there was no fault. This system was running normally, and the readings were telling you so. Calling a healthy machine faulty costs a customer a part they did not need.`,
    };
  }

  /* Efficiency of the diagnosis: did they measure what they needed, or
     everything they could? Field time is real, and so is disturbing a system
     that is running. */
  function efficiency(placed) {
    const n = placed.length;
    const core = ["lowGauge", "highGauge", "evapOutlet", "liquidLine"];
    const gotCore = core.every(id => placed.includes(id));
    if (!gotCore) return { rating: "incomplete", text: "You reached a diagnosis without the four readings that decide most faults: both gauges, the evaporator outlet and the liquid line. Sometimes you get lucky. It is not a method." };
    if (n <= 5) return { rating: "sharp", text: `${n} readings, and the four that matter were among them. That is how an experienced technician works: measure what will change your mind, not everything the kit can measure.` };
    if (n <= 8) return { rating: "thorough", text: `${n} readings — thorough, and everything you needed was in there. Worth asking which of those actually changed your diagnosis.` };
    return { rating: "scattergun", text: `${n} readings. Every probe you fit takes time and disturbs the machine. Superheat, subcooling and condenser TD would have got you there.` };
  }

  const api = { POINTS, DERIVED, readingAt, derive, interpret, judge, efficiency, FAMILY_TIP };
  root.RefrigDiagnose = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
