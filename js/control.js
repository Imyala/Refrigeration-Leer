/* =========================================================================
   Control-circuit diagnosis engine — the electrical side of fault finding.

   The Diagnosis Workshop hands the learner a refrigeration circuit and no
   numbers. This does the same for the electrics: a single-phase packaged
   condensing unit with a hidden fault, a ladder diagram with test points,
   and a meter that only reads where it is put. The engine knows:

     - the control chain (fuse → thermostat → HP → LP → overload → coil)
       and the power chain (contactor main contacts → compressor and fan),
       and what each node reads to neutral for a given fault;
     - what a resistance, capacitance or insulation-resistance test reads
       across each component — and that none of those may be taken live;
     - what the machine looks and sounds like before any meter goes on;
     - safe-isolation practice: isolate, prove the tester, test for dead,
       prove the tester again, before treating a circuit as dead.

   Faults are chosen to teach the classic signatures: 230 V everywhere with
   an open coil, 230 V across the one open contact, a hum and locked-rotor
   current with failed start gear, silence with an open winding, a safety
   switch that is open because it is doing its job.

   Pure logic — no DOM. Loaded as a plain script (exposes `RefrigControl`)
   and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const V_SUPPLY = 230;
  const HINT_COST = 0.25;
  const LIVE_OHMS_PENALTY = 0.25;   // ohms or IR attempted on a live circuit
  const NOT_PROVED_PENALTY = 0.25;  // treated as dead without testing for dead

  /* ---- The machine ----------------------------------------------------------
     Nodes are the wires a probe can touch. The control chain runs n0 → n5
     through one contact each; the coil sits n5 → N. The power chain runs
     from n0 through the contactor's main contacts to T1, which feeds the
     compressor common and the condenser fan. */
  const NODES = {
    n0:  { label: "L — isolator load side",         short: "L",    zone: "control" },
    n1:  { label: "Control fuse F1, load side",     short: "F1",   zone: "control" },
    n2:  { label: "Thermostat, load side",          short: "TH",   zone: "control" },
    n3:  { label: "HP switch, load side",           short: "HP",   zone: "control" },
    n4:  { label: "LP switch, load side",           short: "LP",   zone: "control" },
    n5:  { label: "Overload aux contact, load side (coil A1)", short: "A1", zone: "control" },
    N:   { label: "Neutral (coil A2, motor neutrals)", short: "N", zone: "supply" },
    E:   { label: "Earth",                          short: "E",    zone: "supply" },
    T1:  { label: "Contactor T1 — compressor supply", short: "T1", zone: "power" },
    C:   { label: "Compressor C (common)",          short: "C",    zone: "power" },
    R:   { label: "Compressor R (run)",             short: "R",    zone: "power" },
    S:   { label: "Compressor S (start)",           short: "S",    zone: "power" },
    FAN: { label: "Condenser fan motor, active terminal", short: "FAN", zone: "power" },
    CAP: { label: "Run capacitor terminals",        short: "CAP",  zone: "power" },
  };

  /* Components, in ladder order, with the pair of nodes they sit between. */
  const CONTROL_CHAIN = [
    { id: "F1",  label: "Control fuse F1",          a: "n0", b: "n1" },
    { id: "TH",  label: "Thermostat (call for cool)", a: "n1", b: "n2" },
    { id: "HPS", label: "HP cut-out switch",        a: "n2", b: "n3" },
    { id: "LPS", label: "LP cut-out switch",        a: "n3", b: "n4" },
    { id: "OL",  label: "Overload auxiliary contact", a: "n4", b: "n5" },
    { id: "K1",  label: "Contactor coil K1 (A1–A2)", a: "n5", b: "N" },
  ];

  /* ---- Faults ---------------------------------------------------------------
     `family` groups faults the instruments cannot separate without the
     refrigeration side or the machine itself; the workshop gives half credit
     inside a family. */
  const FAULTS = {
    none: {
      label: "No fault — the unit is running normally",
      diag: null,
      clues: ["Contactor pulled in, compressor running, condenser fan turning.", "Box temperature coming down normally."],
    },
    fuseBlown: {
      label: "Control fuse F1 blown",
      diag: "230 V on the line side of F1 and nothing on its load side — every node beyond it reads zero to neutral. Nothing in the control circuit can pull in. Before replacing it, ask why it blew: a shorted coil or a wiring fault will take the new one too.",
      clues: ["Contactor not pulled in. Compressor and fan silent.", "Box warm; thermostat is calling.", "Nothing hums, nothing clicks."],
    },
    thermostatOpen: {
      label: "Thermostat contacts failed open",
      diag: "230 V into the thermostat, 0 V out, with the box warm and the stat turned well below box temperature. The one open contact in a series chain is the one with full supply voltage across it; everything else reads zero across it.",
      clues: ["Contactor not pulled in, everything silent.", "Box warm; the thermostat dial is set well below the box temperature.", "No click from the stat when the setpoint is turned down."],
    },
    hpTrippedFanOpen: {
      label: "HP switch open — condenser fan motor winding open circuit",
      diag: "The HP switch is open because head pressure climbed to its setting, and it climbed because the condenser fan is not running: the fan winding reads open circuit. The switch is doing its job. Replacing it would put the unit back on the same path to the same trip.",
      clues: ["Contactor drops out shortly after pull-in; the unit short-cycles on the HP switch (or sits locked out on it).", "Condenser fan not turning, coil hot to the touch.", "High-side gauge well above normal head pressure."],
      family: "safety-open",
      gauges: { low: 800, high: 4100 },
    },
    lpOpenLowCharge: {
      label: "LP switch open on low pressure — refrigerant-side fault (switch is fine)",
      diag: "The LP switch is open because suction pressure is below its cut-in. Electrically it looks exactly like a failed switch: 230 V in, 0 V out. The low-side gauge is what separates them — here it reads far below normal. The fault is a low charge or a restriction, and the switch is protecting the compressor.",
      clues: ["Contactor not pulled in. Silent.", "Box warm.", "Low-side gauge reads well below the normal suction pressure — near the LP cut-out setting.", "Sight glass, if there is one, bubbling."],
      family: "lp-open",
      gauges: { low: 180, high: 1900 },
    },
    lpSwitchFailed: {
      label: "LP switch contacts failed open (pressure normal)",
      diag: "230 V in, 0 V out across the LP switch — but the low-side gauge reads normal suction pressure, well above the cut-in. A switch that is open with pressure above its setting has failed. Replace it; the refrigerant side is fine.",
      clues: ["Contactor not pulled in. Silent.", "Box warm.", "Low-side gauge reads a normal standing pressure for the box temperature."],
      family: "lp-open",
      gauges: { low: 820, high: 1950 },
    },
    overloadOpen: {
      label: "Compressor overload tripped and not resetting (aux contact open)",
      diag: "230 V into the overload's auxiliary contact and nothing out. The overload has tripped and failed to reset, or has failed open. Check the compressor's windings and running current before you reset or replace it — an overload that keeps tripping is telling you about the motor.",
      clues: ["Contactor not pulled in. Silent.", "Box warm.", "Compressor body warm from earlier attempts."],
    },
    coilOpen: {
      label: "Contactor coil open circuit",
      diag: "230 V at every node of the control chain — right through to A1 — and the contactor still not pulled in. With no path to neutral through the coil, nothing pulls any node down, so the whole chain floats at supply voltage. Isolated, the coil reads open circuit instead of a few hundred ohms.",
      clues: ["Contactor not pulled in. No hum from the coil.", "Box warm.", "Every safety looks closed and the thermostat is calling."],
    },
    contactsWelded: {
      label: "Contactor main contacts welded closed",
      diag: "The compressor runs with the thermostat satisfied — the control chain is open at the stat, the coil is de-energised, and T1 is still live. Isolated, the main contacts read closed when they should read open. The box over-cools and product freezes.",
      clues: ["Compressor and fan running with the thermostat satisfied (open).", "Box far too cold — below setpoint and still falling.", "Contactor armature does not release when the control circuit is opened."],
    },
    contactsBurnt: {
      label: "Contactor main contacts burnt open",
      diag: "The coil pulls in — you can hear the armature — but T1 reads 0 V with L live. The main contacts are burnt away and no longer carry. Replace the contactor; the control circuit was never the problem.",
      clues: ["Contactor pulls in with an audible clunk; compressor and fan silent.", "Box warm.", "Contact faces pitted and black."],
    },
    runCapFailed: {
      label: "Run capacitor failed (open)",
      diag: "Contactor pulls in, the compressor hums at locked-rotor current and trips the overload after a few seconds, resets, and tries again. The run winding is getting supply but the start winding has no capacitor to give it a phase shift, so the rotor never turns. The capacitor reads near zero microfarads.",
      clues: ["Contactor pulls in; compressor hums loudly, does not start, trips out after a few seconds.", "Cycles like that every couple of minutes.", "Capacitor case may be bulged or leaking."],
      family: "start-gear",
    },
    startRelayFailed: {
      label: "Start relay contacts failed open",
      diag: "Same picture as a failed capacitor — hum, locked-rotor current, overload trip — but the capacitor measures its rated microfarads. The relay that puts the start winding in circuit has failed, so the start winding is never energised. A hard-start test across the relay would spin it up.",
      clues: ["Contactor pulls in; compressor hums and trips on overload.", "Capacitor looks and measures fine.", "Cycles on the overload."],
      family: "start-gear",
    },
    windingOpen: {
      label: "Compressor run winding open circuit (C–R open)",
      diag: "Contactor pulls in, T1 and C are live, and the compressor is silent — not even a hum — drawing no current at all. Isolated, C–R reads open circuit while C–S still reads a few ohms. The motor is finished.",
      clues: ["Contactor pulls in; fan runs; compressor completely silent.", "No current on the compressor common.", "Compressor body cold."],
    },
    earthFault: {
      label: "Compressor winding to earth",
      diag: "The RCD or breaker trips the instant the contactor pulls in. With the unit isolated, an insulation-resistance test from the compressor windings to earth reads well under 1 MΩ. A winding has broken down to the shell; the compressor must be replaced, and the oil and system checked for burn-out.",
      clues: ["Supply trips the moment the contactor pulls in.", "Resetting it, it trips again immediately.", "Faint burnt smell at the compressor terminal cover."],
    },
  };

  /* ---- State ---------------------------------------------------------------- */
  function newState(faultKey) {
    return {
      fault: faultKey || "none",
      isolated: false,        // isolator open and locked off
      supplyTripped: false,   // RCD / breaker tripped (earth fault)
      provedBefore: false,    // tester proved on a known live source, before
      testedDead: false,      // tested for dead at the point of work
      provedAfter: false,     // and proved again afterwards
      liveOhms: 0,            // ohms / IR attempted on a live circuit
      unprovedOhms: 0,        // ohms / IR taken isolated but never proved dead
      measurements: [],       // {kind, a, b, value, text}
      observed: false,
      hints: 0,
      trail: [],
    };
  }

  const startGear = (f) => f === "runCapFailed" || f === "startRelayFailed";

  /* Is each element of the control chain closed, for this fault? */
  function chainClosed(f) {
    return {
      F1:  f !== "fuseBlown",
      TH:  f !== "thermostatOpen" && f !== "contactsWelded",   // welded: box cold, stat satisfied
      HPS: f !== "hpTrippedFanOpen",
      LPS: f !== "lpOpenLowCharge" && f !== "lpSwitchFailed",
      OL:  f !== "overloadOpen",
    };
  }

  /* The live picture of the machine: which nodes are at supply potential,
     whether the coil is energised, whether the main contacts carry. */
  function picture(s) {
    const f = s.fault;
    const closed = chainClosed(f);
    const coilOK = f !== "coilOpen";
    const live = !s.isolated && !s.supplyTripped;
    const v = { N: 0, E: 0, R: 0, S: 0, CAP: null };
    if (!live) {
      ["n0", "n1", "n2", "n3", "n4", "n5", "T1", "C", "FAN"].forEach(k => { v[k] = 0; });
      return { v, coilEnergised: false, mainsClosed: false, live, closed, coilOK };
    }
    const order = ["F1", "TH", "HPS", "LPS", "OL"];
    const nodes = ["n0", "n1", "n2", "n3", "n4", "n5"];
    let open = -1;
    for (let i = 0; i < order.length; i++) if (!closed[order[i]]) { open = i; break; }
    if (open < 0 && !coilOK) {
      nodes.forEach(k => { v[k] = V_SUPPLY; });          // nothing pulls the chain down
    } else {
      nodes.forEach((k, i) => { v[k] = (open < 0 || i <= open) ? V_SUPPLY : 0; });
    }
    const coilEnergised = open < 0 && coilOK;
    const mainsClosed = (coilEnergised && f !== "contactsBurnt") || f === "contactsWelded";
    v.T1 = mainsClosed ? V_SUPPLY : 0;
    v.C = v.T1;
    v.FAN = v.T1;
    return { v, coilEnergised, mainsClosed, live, closed, coilOK };
  }

  /* What the compressor and fan are doing, given the picture. */
  function machine(s) {
    const p = picture(s);
    const f = s.fault;
    let compressor = "silent", amps = 0;
    if (p.mainsClosed) {
      if (f === "windingOpen") { compressor = "silent"; amps = 0; }
      else if (startGear(f)) { compressor = "humming — locked rotor, trips on overload after a few seconds"; amps = 38; }
      else { compressor = "running"; amps = 7.5; }
    }
    const fanOpen = f === "hpTrippedFanOpen";
    const fan = p.mainsClosed && !fanOpen ? "turning" : "still";
    const fanAmps = p.mainsClosed && !fanOpen ? 1.1 : 0;
    return { compressor, amps, fan, fanAmps, contactor: p.mainsClosed && f !== "contactsWelded" ? "pulled in"
      : p.coilEnergised && f === "contactsBurnt" ? "pulled in (armature closed)"
      : f === "contactsWelded" ? "armature closed, coil de-energised" : "not pulled in",
      supplyTripped: s.supplyTripped };
  }

  /* ---- Actions ---------------------------------------------------------------- */
  const ok = (msg) => ({ kind: "ok", msg });
  const info = (msg) => ({ kind: "info", msg });
  const warn = (msg) => ({ kind: "warn", msg });
  const block = (msg) => ({ kind: "block", msg });

  function observe(s) {
    s.trail.push("observe");
    s.observed = true;
    const m = machine(s);
    const f = FAULTS[s.fault];
    if (s.isolated) return info("Isolated: nothing is running and nothing will. Observations of a dead machine tell you only that it is dead.");
    if (s.supplyTripped) return info("The supply is tripped — the RCD or breaker has opened. Nothing is running. Reset it and the machine will tell you immediately whether the fault is still there.");
    const lines = [
      `Contactor: ${m.contactor}.`,
      `Compressor: ${m.compressor}.`,
      `Condenser fan: ${m.fan}.`,
    ].concat(f.clues.filter(c => !/gauge|sight glass|capacitor|current|smell|faces/i.test(c)));
    return ok(lines.join(" "));
  }

  function isolate(s) {
    s.trail.push("isolate");
    if (s.isolated) return info("Already isolated and locked off.");
    s.isolated = true;
    s.testedDead = false; s.provedBefore = false; s.provedAfter = false;
    return ok("Isolator open, locked off, tag on. Nothing in this unit is proven dead yet — a locked isolator is a claim, not a test. Prove the tester, test for dead, prove the tester again.");
  }

  function restore(s) {
    s.trail.push("restore");
    if (!s.isolated) return info("The unit is already energised.");
    s.isolated = false;
    s.testedDead = false;
    /* An earth fault takes the supply out the moment the contactor closes. */
    if (s.fault === "earthFault" && picture(s).coilEnergised) {
      s.supplyTripped = true;
      return warn("Isolator closed — the contactor pulls in and the RCD trips instantly. The supply is off again. Something downstream of the contactor is going to earth.");
    }
    return ok("Isolator closed, unit re-energised. Everything below the isolator is live again.");
  }

  function resetSupply(s) {
    s.trail.push("resetSupply");
    if (!s.supplyTripped) return info("The supply has not tripped.");
    s.supplyTripped = false;
    if (s.fault === "earthFault" && !s.isolated && picture(s).coilEnergised) {
      s.supplyTripped = true;
      return warn("Reset — and it trips again the instant the contactor pulls in. Stop resetting it: the fault is downstream of the contactor and it is going to earth. Isolate and test.");
    }
    return ok("Supply reset and holding.");
  }

  function proveTester(s) {
    s.trail.push("prove");
    if (!s.testedDead) { s.provedBefore = true; return ok("Tester proved on a known live source — it reads 230 V where 230 V is. Now it can be trusted to read zero where zero is."); }
    s.provedAfter = true;
    return ok("Tester proved again after the test for dead — it still reads. The zero you saw was a real zero. The circuit is proven dead.");
  }

  function testForDead(s) {
    s.trail.push("testDead");
    if (!s.isolated) return block("The isolator is still closed. Testing for dead on a circuit you have not isolated proves nothing except that it is live.");
    const p = picture(s);
    const readings = `L–N ${p.v.n0} V, L–E ${p.v.n0} V, N–E 0 V at the isolator load side; T1–N ${p.v.T1} V.`;
    s.testedDead = true;
    if (!s.provedBefore) return warn(`${readings} Zero everywhere — but you did not prove the tester first. A dead tester also reads zero on a live circuit. Prove, test, prove.`);
    return ok(`${readings} Dead at every point of work. Prove the tester once more and the circuit is proven dead.`);
  }

  const provenDead = (s) => s.isolated && s.testedDead && s.provedBefore;

  /* Ohms table: what a resistance test reads across a component, isolated. */
  function ohms(s, a, b) {
    const f = s.fault;
    const pair = [a, b].sort().join("-");
    const closed = chainClosed(f);
    const OL = Infinity;
    switch (pair) {
      case "n0-n1": return closed.F1 ? 0.1 : OL;
      case "n1-n2": return closed.TH ? 0.1 : OL;
      case "n2-n3": return closed.HPS ? 0.1 : OL;
      case "n3-n4": return closed.LPS ? 0.1 : OL;
      case "n4-n5": return closed.OL ? 0.1 : OL;
      case "N-n5":  return f === "coilOpen" ? OL : 420;                   // coil A1–A2
      case "T1-n0": return f === "contactsWelded" ? 0.1 : OL;           // main contacts, de-energised
      case "C-R":   return f === "windingOpen" ? OL : 1.4;
      case "C-S":   return 3.6;
      case "R-S":   return f === "windingOpen" ? OL : 5.0;
      case "FAN-N": return f === "hpTrippedFanOpen" ? OL : 55;
      case "C-T1":  return 0.1;
      default:      return null;
    }
  }

  function measure(s, kind, a, b) {
    s.trail.push(`measure:${kind}:${a || ""}:${b || ""}`);
    const p = picture(s);
    const m = machine(s);
    const rec = (value, text, kindOut) => {
      s.measurements.push({ kind, a, b, value, text });
      return { kind: kindOut || "ok", msg: text, value };
    };

    if (kind === "volts") {
      if (!NODES[a] || !NODES[b]) return block("Choose two test points for a voltage reading.");
      if (a === "CAP" || b === "CAP") return info("The capacitor terminals are not a voltage test point worth taking — measure it isolated, on capacitance.");
      const va = p.v[a], vb = p.v[b];
      const val = Math.abs((va == null ? 0 : va) - (vb == null ? 0 : vb));
      let text = `${NODES[a].short}–${NODES[b].short}: ${val} V AC.`;
      if (!p.live) text += s.isolated ? " (Isolated — a zero here is what test-for-dead is for.)" : " (Supply tripped.)";
      return rec(val, text);
    }

    if (kind === "amps") {
      const which = a;   // conductor: compressor | fan | supply
      if (!p.live) return rec(0, "0 A — nothing is running.");
      const val = which === "compressor" ? m.amps : which === "fan" ? m.fanAmps : which === "supply" ? m.amps + m.fanAmps + 0.1 : null;
      if (val == null) return block("Clamp one conductor: the compressor common, the fan active, or the supply active.");
      let text = `${which} conductor: ${val} A.`;
      if (which === "compressor" && val >= 30) text += " That is locked-rotor current — the motor is being fed and is not turning. Expect the overload to open within seconds.";
      if (which === "compressor" && val === 0 && p.mainsClosed) text += " Supply is reaching the compressor and it is drawing nothing at all.";
      return rec(val, text);
    }

    if (kind === "gauge") {
      const g = FAULTS[s.fault].gauges || { low: 820, high: 2350 };
      const val = a === "high" ? g.high : g.low;
      return rec(val, `${a === "high" ? "High" : "Low"}-side gauge: ${val} kPa g. (Normal for this unit: about 820 kPa g suction, 2,350 kPa g head; LP cut-in 300 kPa g, HP cut-out 3,900 kPa g.)`);
    }

    /* Everything below is a dead test. */
    if (!s.isolated) {
      s.liveOhms += 1;
      return { kind: "block", msg: `Meter on ${kind === "ir" ? "insulation resistance" : kind === "cap" ? "capacitance" : "ohms"} across a live circuit. On a real meter that is a blown fuse at best and a flash at worst — and the reading would be meaningless anyway. Isolate first, prove it dead, then measure.` };
    }
    if (!provenDead(s)) s.unprovedOhms += 1;

    if (kind === "cap") {
      const val = s.fault === "runCapFailed" ? 0.3 : 35;
      return rec(val, `Run capacitor: ${val} µF (rated 35 µF ±5 %).${val < 5 ? " Failed — no capacitance to speak of." : " Within rating."}`);
    }
    if (kind === "ir") {
      const val = s.fault === "earthFault" ? 0.08 : 250;
      return rec(val, `Insulation resistance, compressor windings to earth at 500 V DC: ${val} MΩ.${val < 1 ? " Below the 1 MΩ minimum — the winding has broken down to the shell." : " Sound."}`);
    }
    if (kind === "ohms") {
      if (!NODES[a] || !NODES[b]) return block("Choose two test points for a resistance reading.");
      const val = ohms(s, a, b);
      if (val == null) return info(`${NODES[a].short}–${NODES[b].short}: no single component sits between those two points, so the reading would be of the paths through everything else. Put the probes either side of one component.`);
      const text = val === Infinity
        ? `${NODES[a].short}–${NODES[b].short}: open circuit (OL).`
        : `${NODES[a].short}–${NODES[b].short}: ${val < 1 ? val.toFixed(1) : Math.round(val)} Ω.`;
      return rec(val, text);
    }
    return block("Unknown instrument.");
  }

  /* ---- Scoring ---------------------------------------------------------------- */
  const FAMILY_TIP = {
    "start-gear": "A failed capacitor and a failed start relay both leave the compressor humming at locked-rotor current. The capacitance test separates them: rated microfarads means the capacitor is fine and the relay is the suspect.",
    "lp-open": "A healthy LP switch open on genuinely low pressure and a failed switch open on normal pressure read identically on the meter. The low-side gauge is the deciding reading — and replacing a switch that was protecting the compressor is how the next call becomes a compressor.",
    "safety-open": "A safety that is open is usually doing its job. Before condemning the switch, find out why it operated.",
  };

  function judge(answerKey, actualKey) {
    const actual = FAULTS[actualKey], answer = FAULTS[answerKey];
    if (!actual || !answer) return { score: 0, verdict: "unknown", text: "Unknown fault." };
    if (answerKey === actualKey) {
      return { score: 1, verdict: "correct", text: actual.diag || "Correct — the unit is running normally. Being willing to say so is part of the job." };
    }
    if (actual.family && actual.family === answer.family) {
      return { score: 0.5, verdict: "close", text: `Half a mark — ${answer.label} and ${actual.label} present the same way on the meter; the fault here was ${actual.label}. ` + (FAMILY_TIP[actual.family] || "") };
    }
    return { score: 0, verdict: "wrong", text: actual.diag ? `Not this time — the fault was ${actual.label}. ${actual.diag}` : "Not this time — there was no fault. The unit was running normally, and the readings were saying so." };
  }

  /* How the job was done: safe isolation, and economy of measurement. */
  function method(s) {
    const notes = [];
    let penalty = 0;
    if (s.liveOhms) {
      penalty += LIVE_OHMS_PENALTY;
      notes.push({ state: "bad", text: `${s.liveOhms} resistance or insulation test${s.liveOhms === 1 ? "" : "s"} attempted on a live circuit. Nothing on ohms goes near a circuit that has not been isolated and proven dead.` });
    }
    const deadTests = s.measurements.filter(m => m.kind === "ohms" || m.kind === "cap" || m.kind === "ir").length;
    if (deadTests && s.unprovedOhms) {
      penalty += NOT_PROVED_PENALTY;
      notes.push({ state: "bad", text: `Dead tests taken after isolating but before the circuit was proven dead (prove the tester, test for dead, prove the tester). An isolator you have not tested behind is a claim, not a proof — the one you locked off may not feed this unit.` });
    } else if (deadTests) {
      notes.push({ state: "good", text: "Isolated, proved the tester, tested for dead, proved it again — then measured. That is the AS/NZS 4836 order, and it is the only order." });
    }
    if (!s.observed) notes.push({ state: "watch", text: "You never looked at the machine before reaching for the meter. Contactor in or out, hum or silence, fan turning or not — thirty seconds of looking rules out half the list." });
    const n = s.measurements.length;
    if (n <= 4) notes.push({ state: "good", text: `${n} readings. Measure what will change your mind, not everything the meter can measure.` });
    else if (n <= 8) notes.push({ state: "good", text: `${n} readings — thorough. Worth asking which of them actually decided it.` });
    else notes.push({ state: "watch", text: `${n} readings. Half-split the chain: one voltage reading in the middle of a series circuit halves the list of suspects.` });
    return { notes, penalty };
  }

  const api = { V_SUPPLY, HINT_COST, LIVE_OHMS_PENALTY, NOT_PROVED_PENALTY,
    NODES, CONTROL_CHAIN, FAULTS, FAMILY_TIP,
    newState, picture, machine, observe, isolate, restore, resetSupply, proveTester, testForDead,
    provenDead, ohms, measure, judge, method };
  root.RefrigControl = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
