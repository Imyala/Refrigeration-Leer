/* =========================================================================
   Circuit rules engine — the refrigeration knowledge behind the system
   builder.

   The learner drags components into the loop in flow order, starting at the
   compressor. This module decides whether that circuit would actually work,
   and — when it would not — says why, and where the component belongs
   instead. It is deliberately pure: no DOM, no state. The UI lives in
   js/build-ui.js.

   The model is a single loop of four anchors:

       compressor -> [discharge line] -> condenser -> [liquid line]
                  -> metering device -> [distribution] -> evaporator
                  -> [suction line] -> back to the compressor

   Everything else is an accessory that belongs in one of those runs. Nearly
   every real placement mistake is a component in the wrong run, or in the
   right run but on the wrong side of another component, so those are the two
   things the engine checks — and it explains each one the way a teacher
   would, not as a validation error.

   Loaded as a plain script (exposes `RefrigCircuit`) and require()-able in
   Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  /* ---- Zones, in flow order ----------------------------------------------
     A zone is a run of pipe between two anchors. Naming them lets a message
     say "that belongs in the liquid line" rather than "index 4 is invalid". */
  const ZONES = {
    discharge: { label: "discharge line", desc: "hot high-pressure vapour, compressor outlet to condenser inlet" },
    liquid:    { label: "liquid line",    desc: "warm high-pressure liquid, condenser outlet to the metering device" },
    distrib:   { label: "distribution",   desc: "cold low-pressure flash mixture, metering device to evaporator inlet" },
    suction:   { label: "suction line",   desc: "cold low-pressure vapour, evaporator outlet back to the compressor" },
  };

  /* ---- The anchors -------------------------------------------------------- */
  const METERING = ["txv", "eev", "aev", "captube", "handvalve", "lsf", "hsf"];

  /* ---- Component library --------------------------------------------------
     zone      : the run(s) this component may legitimately sit in
     after/before : other components it must follow or precede within the loop
     why       : what it does, in one line — shown when it is placed correctly
     wrongZone : what actually goes wrong if it lands in the wrong run
     tips      : good-practice notes that are not errors                      */
  const COMPONENTS = {
    /* --- anchors --- */
    compressor: {
      label: "Compressor", icon: "⚙", short: "Compressor", anchor: true, group: "Core",
      why: "The pump of the system: it draws low-pressure vapour from the evaporator and raises its pressure and temperature so the condenser can reject the heat.",
    },
    condenser: {
      label: "Condenser", icon: "▤", short: "Condenser", anchor: true, group: "Core",
      why: "Rejects heat to air or water. Hot vapour desuperheats, condenses to liquid, and usually leaves slightly subcooled.",
    },
    evaporator: {
      label: "Evaporator", icon: "▥", short: "Evaporator", anchor: true, group: "Core",
      why: "Where the useful cooling happens: liquid refrigerant boils, absorbing latent heat from the air or liquid being cooled.",
    },
    txv: {
      label: "TX valve", icon: "◈", short: "TX valve", anchor: true, metering: true, group: "Metering",
      why: "Meters liquid into the evaporator and holds superheat steady as the load changes. Its bulb senses the suction line at the evaporator outlet.",
    },
    eev: {
      label: "Electronic expansion valve", icon: "◈", short: "EEV", anchor: true, metering: true, group: "Metering",
      why: "A stepper- or PWM-driven metering valve. A controller reads pressure and temperature and drives superheat to a setpoint far more tightly than a TX valve.",
    },
    aev: {
      label: "Automatic expansion valve", icon: "◈", short: "AEV", anchor: true, metering: true, group: "Metering",
      why: "Holds evaporator PRESSURE constant rather than superheat. Suits a constant, light load; it starves the coil as load rises.",
    },
    captube: {
      label: "Capillary tube", icon: "∿", short: "Cap tube", anchor: true, metering: true, group: "Metering",
      why: "A fixed restriction sized to balance the system at design conditions. Cheap and reliable, but it cannot adjust to load, and the charge is critical.",
    },
    handvalve: {
      label: "Hand expansion valve", icon: "◈", short: "Hand valve", anchor: true, metering: true, group: "Metering",
      why: "A manually set needle valve. It cannot respond to load at all, so it is used where conditions are steady or as a bypass around an automatic valve.",
    },
    lsf: {
      label: "Low-side float", icon: "◐", short: "Low-side float", anchor: true, metering: true, group: "Metering",
      why: "Maintains a liquid level in a flooded evaporator, feeding in as much liquid as boils off. Used on flooded and liquid-overfeed plant.",
    },
    hsf: {
      label: "High-side float", icon: "◑", short: "High-side float", anchor: true, metering: true, group: "Metering",
      why: "Passes liquid on as fast as the condenser makes it. The charge is critical because the system has no receiver to hold a reserve.",
    },

    /* --- discharge line --- */
    oilseparator: {
      label: "Oil separator", icon: "◍", short: "Oil separator", zone: ["discharge"], before: ["condenser"], group: "Discharge line",
      why: "Catches oil leaving with the discharge gas and returns it straight to the crankcase, so it never has to find its way around the whole circuit.",
      wrongZone: "An oil separator only works in hot discharge gas, right at the compressor outlet. Anywhere else there is no oil mist to separate and it just adds pressure drop.",
      tips: ["Fit it as close to the compressor discharge as practical, and make sure the return line to the crankcase is trapped or fitted with a solenoid so hot gas cannot migrate back on the off-cycle."],
    },
    muffler: {
      label: "Discharge muffler", icon: "◫", short: "Muffler", zone: ["discharge"], before: ["condenser"], group: "Discharge line",
      why: "Damps the pulsation from a reciprocating compressor so the discharge line does not sing or shake the pipework apart.",
      wrongZone: "The pulsation a muffler is there to damp exists only in the discharge line, close to the compressor.",
      tips: ["Mount it so it cannot trap oil — horizontal or with the outlet down — and support it independently."],
    },
    reversingvalve: {
      label: "Reversing (4-way) valve", icon: "⇄", short: "4-way valve", zone: ["discharge"], before: ["condenser"], group: "Discharge line",
      why: "Swaps which coil is the condenser and which is the evaporator, so the same machine can cool in summer and heat in winter.",
      wrongZone: "The reversing valve has to sit in the discharge gas, immediately off the compressor — that is the port it switches.",
      tips: ["Once you fit one, both coils see flow in both directions: you need a bi-directional metering arrangement (or a check-valve pair) and a bi-directional drier."],
    },
    hpswitch: {
      label: "High-pressure switch", icon: "◎", short: "HP switch", zone: ["discharge"], group: "Discharge line",
      why: "Stops the compressor before head pressure reaches a dangerous level — a blocked condenser, a failed fan or a closed valve.",
      wrongZone: "A high-pressure switch has to sense the high side. Sensing the suction line it would never see the pressure it exists to protect against.",
      tips: ["Pipe it to the high side ahead of any stop valve, so it can never be isolated from the pressure it is protecting."],
    },
    dischargevalve: {
      label: "Discharge service valve", icon: "⊢", short: "Discharge valve", zone: ["discharge"], group: "Discharge line",
      why: "The high-side connection point for your gauges, and the valve that lets you isolate the compressor from the rest of the system.",
      wrongZone: "The discharge service valve bolts to the compressor discharge. The suction side has its own.",
    },

    /* --- liquid line --- */
    receiver: {
      label: "Liquid receiver", icon: "▬", short: "Receiver", zone: ["liquid"], after: ["condenser"],
      before: ["filterdrier", "sightglass", "solenoid"], group: "Liquid line",
      why: "Stores the charge the system does not need at the moment, so the charge can vary with load and the whole charge can be pumped down into it for service.",
      wrongZone: "A receiver must sit in the liquid line, taking drained liquid from the condenser outlet. In any other run it fills with vapour and does nothing.",
      tips: ["Feed it from the condenser outlet with a falling drain line, and take liquid from the bottom via a dip tube so you draw liquid and not vapour."],
    },
    filterdrier: {
      label: "Filter drier", icon: "▮", short: "Filter drier", zone: ["liquid", "suction"], orderZones: ["liquid"],
      before: ["txv", "eev", "aev", "captube", "handvalve", "lsf", "hsf"],
      group: "Liquid line",
      why: "Removes moisture, acid and debris before they reach the metering device — where a trace of water freezes and blocks the orifice.",
      zoneNote: {
        suction: "In the suction line this becomes a SUCTION filter drier, which is a burnout clean-up tool, not standard practice. It protects the compressor from acid and debris after a motor burnout, and it must be removed once the system is proved clean, because it is a permanent pressure drop on the suction side.",
      },
      tips: ["Fit it upstream of the sight glass, so the glass shows you what the drier is delivering, not what it still has to fix.", "Note the flow arrow — a drier fitted backwards dumps its desiccant into the system."],
    },
    sightglass: {
      label: "Sight glass & moisture indicator", icon: "◉", short: "Sight glass", zone: ["liquid"],
      after: ["filterdrier"], before: ["txv", "eev", "aev", "captube", "handvalve", "lsf", "hsf"],
      group: "Liquid line",
      why: "Lets you see whether the liquid reaching the metering device is solid liquid, and whether the system is dry.",
      wrongZone: "A sight glass belongs in the liquid line. In the suction or discharge line you are looking at vapour, which tells you nothing about the charge.",
      afterNote: "Put the sight glass AFTER the drier. Ahead of it you are reading moisture the drier has not had a chance to remove yet, and a flash of bubbles there tells you nothing useful.",
      tips: ["Bubbles are not automatically 'low charge'. A restriction, a hot liquid line or a big static lift will flash liquid too — check subcooling before you condemn the charge."],
    },
    solenoid: {
      label: "Liquid line solenoid", icon: "⊡", short: "Solenoid", zone: ["liquid"],
      before: ["txv", "eev", "aev", "captube", "handvalve", "lsf", "hsf"], group: "Liquid line",
      why: "Shuts the liquid feed on demand so the compressor can pump the evaporator down before it stops — which is what keeps liquid out of the crankcase on the off-cycle.",
      wrongZone: "A liquid line solenoid has to be in the liquid line ahead of the metering device. That is the only place where closing it stops the feed to the coil.",
      tips: ["Mount the coil upright and fit it close to the evaporator, so the pump-down leaves as little liquid as possible in the coil.", "Pump-down needs a low-pressure switch to stop the compressor once the coil is empty."],
    },
    kingvalve: {
      label: "King valve (receiver outlet)", icon: "⊣", short: "King valve", zone: ["liquid"], after: ["receiver"], group: "Liquid line",
      why: "The receiver outlet valve. Front-seat it and the compressor pumps the whole charge into the receiver — the standard way to isolate a charge for service.",
      wrongZone: "The king valve is the receiver's own outlet valve, so it lives in the liquid line immediately downstream of the receiver.",
    },
    liquidhandvalve: {
      label: "Liquid line shut-off valve", icon: "⊤", short: "Shut-off valve", zone: ["liquid"], group: "Liquid line",
      why: "A manual isolating valve so a section can be worked on without losing the whole charge.",
      wrongZone: "This is a liquid-line isolating valve — that is where it earns its place.",
    },
    heatexchanger: {
      label: "Liquid–suction heat exchanger", icon: "⧉", short: "Liquid–suction HX", zone: ["suction", "liquid"], group: "Both lines",
      why: "Runs the cold suction line against the warm liquid line: it subcools the liquid (more refrigeration effect, less flash gas) and adds superheat to the suction (drier vapour to the compressor).",
      tips: ["It touches both lines by definition — place it in either run and the other side is understood.", "It raises discharge temperature. On a fluid that already runs hot, that can be the wrong trade."],
    },

    /* --- distribution --- */
    distributor: {
      label: "Refrigerant distributor", icon: "❋", short: "Distributor", zone: ["distrib"], group: "After the metering device",
      why: "Splits the flash mixture evenly between the parallel circuits of a multi-circuit evaporator, so every circuit gets the same share of liquid.",
      wrongZone: "A distributor's job is to divide the flow leaving the metering device between the evaporator circuits, so it sits between the two — nowhere else.",
      tips: ["A distributor has a real pressure drop (often around 200 kPa), which is exactly why a TX valve feeding one needs an EXTERNAL equaliser.", "Keep the nozzle and the tubes equal length, and mount it vertically down where you can."],
    },

    /* --- suction line --- */
    epr: {
      label: "Evaporator pressure regulator (EPR)", icon: "◨", short: "EPR", zone: ["suction"],
      after: ["evaporator"], before: ["cpr", "compressor"], group: "Suction line",
      why: "Stops an evaporator running colder than you want it to, by holding its pressure UP. On a multi-temperature system it is what lets a high-temperature coil share a compressor with a lower one.",
      wrongZone: "An EPR throttles the vapour leaving an evaporator, so it belongs in the suction line at that evaporator's outlet.",
      tips: ["It is an inlet-pressure regulator: it senses the pressure upstream of itself, which is the evaporator it is protecting.", "Fit it at the outlet of the WARMEST coil. The coldest coil runs straight to the common suction."],
    },
    cpr: {
      label: "Crankcase pressure regulator (CPR)", icon: "◧", short: "CPR", zone: ["suction"],
      before: ["compressor"], after: ["evaporator"], group: "Suction line",
      why: "Limits the suction pressure the compressor sees during a hot pull-down, so the motor is not overloaded by dense vapour.",
      wrongZone: "A CPR protects the compressor motor, so it goes in the suction line close to the compressor inlet.",
      tips: ["It is an outlet-pressure regulator — it senses downstream of itself, which is the compressor suction.", "Set it against an ammeter to the compressor's full-load current, not to a pressure guessed off the gauge."],
    },
    accumulator: {
      label: "Suction accumulator", icon: "◯", short: "Accumulator", zone: ["suction"], after: ["evaporator"],
      before: ["compressor"], group: "Suction line",
      why: "Catches liquid that gets past the evaporator and meters it back as vapour, with the oil, at a rate the compressor can swallow. It is the last defence against floodback.",
      wrongZone: "An accumulator has to sit in the suction line between the evaporator and the compressor. That is the only place liquid floodback can be intercepted.",
      tips: ["Its oil-return orifice is tiny and blocks easily — that is a classic cause of oil starvation.", "It is not a receiver. Fitting one in the liquid line does nothing useful."],
    },
    suctionfilter: {
      label: "Suction line filter", icon: "▯", short: "Suction filter", zone: ["suction"], before: ["compressor"], group: "Suction line",
      why: "Protects the compressor from debris — normally fitted after a burnout, with a pressure-drop check across it.",
      wrongZone: "A suction filter protects the compressor from what the suction line is carrying to it.",
      tips: ["Measure the pressure drop across it. A blocked suction filter looks exactly like a starved evaporator on the gauges."],
    },
    lpswitch: {
      label: "Low-pressure switch", icon: "◉", short: "LP switch", zone: ["suction"], group: "Suction line",
      why: "Stops the compressor on loss of charge or a blocked feed — and, on a pump-down system, it is the control that stops the machine once the coil is empty.",
      wrongZone: "A low-pressure switch has to sense the low side, so it is piped to the suction line.",
    },
    suctionvalve: {
      label: "Suction service valve", icon: "⊢", short: "Suction valve", zone: ["suction"], group: "Suction line",
      why: "The low-side gauge connection, and the valve you front-seat to pump the system down.",
      wrongZone: "The suction service valve bolts to the compressor suction. The discharge side has its own.",
    },
    crankcaseheater: {
      label: "Crankcase heater", icon: "≋", short: "Crankcase heater", zone: [], attachTo: "compressor", group: "Suction line",
      why: "Keeps the oil warm while the compressor is off, so refrigerant does not migrate to it and dissolve in it — which is what causes a foaming, oil-free start.",
      wrongZone: "A crankcase heater is not in the refrigerant path at all. It is strapped to, or inserted in, the compressor crankcase.",
    },
  };

  /* ---- Helpers ------------------------------------------------------------ */
  const isMetering = (id) => !!(COMPONENTS[id] && COMPONENTS[id].metering);
  const meteringIn = (seq) => seq.filter(isMetering);
  const labelOf = (id) => (COMPONENTS[id] ? COMPONENTS[id].label : id);

  /* Where does each position in the sequence sit, given the anchors?
     Returns null when the four anchors are not all present and in order. */
  function zoneMap(seq) {
    const iComp = seq.indexOf("compressor");
    const iCond = seq.indexOf("condenser");
    const iEvap = seq.indexOf("evaporator");
    const met = meteringIn(seq);
    if (iComp < 0 || iCond < 0 || iEvap < 0 || met.length !== 1) return null;
    const iMet = seq.indexOf(met[0]);
    if (!(iComp < iCond && iCond < iMet && iMet < iEvap)) return null;

    const zones = seq.map(() => null);
    for (let i = 0; i < seq.length; i++) {
      if (i > iComp && i < iCond) zones[i] = "discharge";
      else if (i > iCond && i < iMet) zones[i] = "liquid";
      else if (i > iMet && i < iEvap) zones[i] = "distrib";
      else if (i > iEvap) zones[i] = "suction";
      else if (i < iComp) zones[i] = "suction";   // before the compressor = still the suction run
    }
    return { zones, iComp, iCond, iMet, iEvap, meteringId: met[0] };
  }

  /* ---- Analysis ----------------------------------------------------------- */
  const ERR = "error", WARN = "warning", TIP = "tip";

  function analyse(seq) {
    const issues = [];
    const add = (severity, component, message, fix, pair) =>
      issues.push({ severity, component, message, fix: fix || null, pair: pair || null });

    const list = (seq || []).filter(id => COMPONENTS[id]);
    const counts = {};
    list.forEach(id => { counts[id] = (counts[id] || 0) + 1; });

    /* 1. The four things without which there is no cycle. */
    const met = meteringIn(list);
    const missing = [];
    if (!counts.compressor) missing.push(["compressor", "Nothing raises the pressure, so nothing circulates and no heat can be rejected at a higher temperature than it was absorbed."]);
    if (!counts.condenser) missing.push(["condenser", "The heat absorbed in the evaporator has nowhere to go. Without somewhere to reject it, the refrigerant never turns back into liquid."]);
    if (!met.length) missing.push(["metering device", "Nothing divides the high side from the low side. With no restriction there is no pressure drop, so the liquid never flashes and never boils cold."]);
    if (!counts.evaporator) missing.push(["evaporator", "There is nowhere for the refrigerant to boil, so no heat is absorbed and the system does no useful cooling."]);
    missing.forEach(([what, why]) => add(ERR, null, `There is no ${what} in this circuit.`, why));

    /* 2. Duplicates that do not make sense in a single loop. */
    ["compressor", "condenser", "evaporator"].forEach(id => {
      if (counts[id] > 1) {
        add(ERR, id, `You have placed ${counts[id]} ${labelOf(id).toLowerCase()}s in one loop.`,
          `Real plant does run multiple ${labelOf(id).toLowerCase()}s, but they sit in parallel branches, not one after another around a single loop. Build the single-loop version first.`);
      }
    });
    if (met.length > 1) {
      add(ERR, met[1], `This loop has ${met.length} metering devices in series.`,
        "One metering device divides the high side from the low side. A second one in series just drops the pressure again on refrigerant that has already flashed — and starves the coil. Two metering devices belong on two evaporators, in parallel.");
    }

    /* 3. Anchor order. */
    const zm = zoneMap(list);
    if (!zm && !issues.some(i => i.severity === ERR)) {
      add(ERR, null, "The four main components are not in flow order.",
        "Follow the refrigerant: the compressor sends hot vapour to the condenser, the condensed liquid goes to the metering device, the metering device feeds the evaporator, and the evaporator returns vapour to the compressor. Order them that way and the accessories fall into place.");
    }
    if (!zm) {
      return { ok: false, issues, zones: null, verdict: verdictFor(false, issues) };
    }

    /* 4. Every accessory: right run, and right side of its neighbours. */
    list.forEach((id, i) => {
      const c = COMPONENTS[id];
      if (c.anchor) return;
      const zone = zm.zones[i];

      /* attachTo components are not in the refrigerant path at all */
      if (c.attachTo) {
        add(TIP, id, `${c.label} is not a pipeline component.`, c.wrongZone || c.why);
        return;
      }

      const allowed = c.zone || [];
      if (allowed.length && !allowed.includes(zone)) {
        const where = allowed.map(z => ZONES[z].label).join(" or ");
        add(ERR, id, `${c.label} is in the ${ZONES[zone].label}. It belongs in the ${where}.`,
          c.wrongZone || `${c.label} only does its job in the ${where}.`);
        return;
      }
      if (c.zoneNote && c.zoneNote[zone]) add(WARN, id, `${c.label} is in the ${ZONES[zone].label}.`, c.zoneNote[zone]);

      /* Ordering within the loop. Some components are legitimate in more
         than one run and their ordering rule only makes sense in one of them
         — a suction filter drier is downstream of the metering device by
         definition, and that is not a mistake. */
      if (c.orderZones && !c.orderZones.includes(zone)) return;
      (c.after || []).forEach(other => {
        const j = list.indexOf(other);
        if (j >= 0 && j > i) {
          add(WARN, id, `${c.label} is upstream of the ${labelOf(other).toLowerCase()}.`,
            c.afterNote || `Follow the flow: the ${labelOf(other).toLowerCase()} comes first, then ${c.label.toLowerCase()}.`,
            [id, other].sort().join("~"));
        }
      });
      (c.before || []).forEach(other => {
        /* The loop closes: the compressor is drawn at the start of the
           sequence but the suction line runs back into it, so anything in the
           suction run is already upstream of the compressor. */
        if (other === "compressor" && zone === "suction") return;
        const j = list.indexOf(other);
        if (j >= 0 && j < i) {
          const sev = COMPONENTS[other] && COMPONENTS[other].metering ? ERR : WARN;
          add(sev, id, `${c.label} is downstream of the ${labelOf(other).toLowerCase()}.`,
            `${c.label} has to be upstream of the ${labelOf(other).toLowerCase()} to do its job.`,
            [id, other].sort().join("~"));
        }
      });
    });

    /* 5. Good-practice notes that are worth saying even on a correct build. */
    if (zm) {
      const has = (id) => list.includes(id);
      const idx = (id) => list.indexOf(id);

      if (has("oilseparator") && idx("oilseparator") !== zm.iComp + 1) {
        add(TIP, "oilseparator", "The oil separator is not the first thing after the compressor.",
          "It works on oil mist in hot discharge gas, so the closer to the discharge port the better.");
      }
      if (has("distributor") && !has("txv") && !has("eev")) {
        add(WARN, "distributor", "A distributor is fitted, but the metering device is not a TX or electronic valve.",
          "A distributor is normally fed by a valve that can be sized for the extra pressure drop. A capillary tube feeding a distributor is unusual — a multi-circuit capillary system uses one tube per circuit instead.");
      }
      if (has("txv") && has("distributor")) {
        add(TIP, "txv", "TX valve feeding a distributor — remember the external equaliser.",
          "The distributor's pressure drop sits between the valve and the coil. Without an external equaliser the valve reads a pressure the coil never sees and starves it.");
      }
      if (has("receiver") && has("captube")) {
        add(WARN, "receiver", "A receiver with a capillary tube system.",
          "A capillary system is charge-critical by design and normally has no receiver — the charge is metered exactly. Adding a receiver gives it somewhere to hide charge and upsets the balance.");
      }
      if (has("sightglass") && !has("filterdrier")) {
        add(TIP, "sightglass", "Sight glass fitted with no drier ahead of it.",
          "The moisture indicator is telling you about a system that has nothing removing moisture. Normal practice is drier first, then glass.");
      }
      if (has("solenoid") && !has("lpswitch")) {
        add(TIP, "solenoid", "A liquid line solenoid, but no low-pressure switch.",
          "The solenoid is how you pump down; the low-pressure switch is what stops the compressor once the coil is empty. Without it the compressor keeps running into a vacuum.");
      }
      if (has("reversingvalve") && has("filterdrier")) {
        add(TIP, "filterdrier", "Reverse-cycle system — the drier has to be bi-directional.",
          "Flow through the liquid line reverses when the machine changes mode. A standard one-way drier fitted here will be backwards half the time.");
      }
      if (has("epr") && has("accumulator") && idx("epr") > idx("accumulator")) {
        add(WARN, "epr", "The EPR is downstream of the accumulator.",
          "The EPR holds up the pressure in the coil it is protecting, so it goes at that coil's outlet — before the common suction line and anything in it.");
      }
      if (has("cpr") && has("accumulator") && idx("cpr") < idx("accumulator")) {
        add(TIP, "cpr", "The CPR sits ahead of the accumulator.",
          "Usual order is evaporator, accumulator, then CPR right at the compressor — the accumulator catches liquid first, and the CPR protects the motor last.");
      }
      if (!has("accumulator") && has("reversingvalve")) {
        add(TIP, null, "Reverse-cycle plant almost always has a suction accumulator.",
          "At changeover the coil that was full of liquid dumps into the suction line. Without an accumulator that goes straight to the compressor.");
      }
    }

    /* A rule written on both components would otherwise say the same thing
       twice, from each end. Keep the first, which carries the better note. */
    const seenPair = new Set();
    const deduped = issues.filter(it => {
      if (!it.pair) return true;
      if (seenPair.has(it.pair)) return false;
      seenPair.add(it.pair);
      return true;
    });

    const ok = !deduped.some(i => i.severity === ERR);
    return { ok, issues: deduped, zones: zm, verdict: verdictFor(ok, deduped) };
  }

  function verdictFor(ok, issues) {
    const errs = issues.filter(i => i.severity === ERR).length;
    const warns = issues.filter(i => i.severity === WARN).length;
    if (!ok) {
      return errs === 1
        ? "This system would not run. There is one thing to put right."
        : `This system would not run. There are ${errs} things to put right.`;
    }
    if (warns) {
      return warns === 1
        ? "This system would run — but one component is not where it does its best work."
        : `This system would run — but ${warns} components are not where they do their best work.`;
    }
    return "This is a correct circuit. Refrigerant leaves the compressor, rejects its heat, is metered, boils off the load and returns as vapour — and every accessory is where it earns its place.";
  }

  /* ---- Scenarios ----------------------------------------------------------
     A brief the learner builds to, and the set of parts it should contain.
     `required` must be present; `expected` is the full good answer. */
  const SCENARIOS = [
    {
      id: "basic",
      title: "The simplest system that works",
      brief: "Build the four components every vapour-compression system must have, in flow order. Nothing else.",
      required: ["compressor", "condenser", "evaporator"],
      requireMetering: true,
      expected: ["compressor", "condenser", "captube", "evaporator"],
      note: "Every system you ever work on is this, plus accessories.",
    },
    {
      id: "commercial",
      title: "A commercial cool room",
      brief: "A single-temperature cool room on a remote condensing unit. Include a receiver so the charge can be pumped down, full liquid-line protection, a TX valve, and protection for the compressor against floodback.",
      required: ["compressor", "condenser", "receiver", "filterdrier", "sightglass", "txv", "evaporator", "accumulator"],
      requireMetering: true,
      expected: ["compressor", "condenser", "receiver", "filterdrier", "sightglass", "solenoid", "txv", "evaporator", "accumulator"],
      note: "This is the arrangement you will meet more than any other.",
    },
    {
      id: "pumpdown",
      title: "A pump-down circuit",
      brief: "Build the cool room again, but add what it needs to pump down: the valve that stops the liquid feed, and the control that stops the compressor once the coil is empty.",
      required: ["compressor", "condenser", "receiver", "filterdrier", "solenoid", "txv", "evaporator", "lpswitch"],
      requireMetering: true,
      expected: ["compressor", "condenser", "receiver", "filterdrier", "sightglass", "solenoid", "txv", "evaporator", "accumulator", "lpswitch"],
      note: "Pump-down is how you keep liquid out of the crankcase on the off-cycle.",
    },
    {
      id: "reversecycle",
      title: "A reverse-cycle heat pump",
      brief: "Build a heat pump: the valve that swaps the coils over, a bi-directional drier, and the accumulator that catches what the changeover throws at the compressor.",
      required: ["compressor", "reversingvalve", "condenser", "filterdrier", "evaporator", "accumulator"],
      requireMetering: true,
      expected: ["compressor", "reversingvalve", "condenser", "filterdrier", "txv", "evaporator", "accumulator"],
      note: "In heating the two coils swap jobs — which is why so much of the circuit has to work both ways round.",
    },
    {
      id: "lowtemp",
      title: "A low-temperature system with capacity protection",
      brief: "A freezer room where a warm pull-down would overload the compressor motor. Include the regulator that limits suction pressure to the compressor, a distributor on the multi-circuit coil, and an oil separator.",
      required: ["compressor", "oilseparator", "condenser", "receiver", "filterdrier", "txv", "distributor", "evaporator", "accumulator", "cpr"],
      requireMetering: true,
      expected: ["compressor", "oilseparator", "condenser", "receiver", "filterdrier", "sightglass", "solenoid", "txv", "distributor", "evaporator", "accumulator", "cpr"],
      note: "Low-temperature plant works the compressor hardest, so it gets the most protection.",
    },
  ];

  /* Grade a build against a scenario: correctness first, then completeness. */
  function grade(seq, scenarioId) {
    const sc = SCENARIOS.find(s => s.id === scenarioId);
    const res = analyse(seq);
    if (!sc) return Object.assign({ scenario: null, missing: [], extra: [] }, res);

    const list = (seq || []).filter(id => COMPONENTS[id]);
    const missing = (sc.required || []).filter(id => !list.includes(id));
    if (sc.requireMetering && !meteringIn(list).length && !missing.includes("metering")) {
      // already reported by analyse(); nothing to add
    }
    const expected = sc.expected || [];
    const extra = list.filter(id => expected.length && !expected.includes(id));
    const optionalMissing = expected.filter(id => !list.includes(id) && !missing.includes(id));

    const issues = res.issues.slice();
    missing.forEach(id => issues.push({
      severity: ERR, component: id,
      message: `The brief asks for a ${labelOf(id).toLowerCase()}, and there isn't one.`,
      fix: COMPONENTS[id] ? COMPONENTS[id].why : null,
    }));
    optionalMissing.forEach(id => issues.push({
      severity: TIP, component: id,
      message: `Most systems of this kind also carry a ${labelOf(id).toLowerCase()}.`,
      fix: COMPONENTS[id] ? COMPONENTS[id].why : null,
    }));

    const ok = res.ok && missing.length === 0;
    return {
      ok, issues, zones: res.zones, scenario: sc, missing, extra,
      verdict: ok
        ? (issues.some(i => i.severity === WARN)
            ? "The brief is met and the system would run — with a couple of placements worth improving."
            : "The brief is met and the circuit is correct. That is exactly how it is piped in the field.")
        : verdictFor(false, issues),
    };
  }

  const api = { COMPONENTS, ZONES, METERING, SCENARIOS, analyse, grade, zoneMap, isMetering, labelOf,
    SEVERITY: { ERR, WARN, TIP } };
  root.RefrigCircuit = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
