/* =========================================================================
   Procedure trainers — the Code of Practice procedures as state machines.

   The Service Bay proved the pattern: every step is the learner's own
   action, the rig behaves the way a real one would when a step is skipped,
   and the ORDER of work is graded against the taught sequence. This applies
   the same pattern to the four procedures the 2025 Refrigerant Handling Code
   of Practice actually governs, with the Code's own numbers in the rules:

     pressureTest  — leak-tightness test with OFN (Part 2 §4.9): medium,
                     pressure against PS and the limiting device, stages,
                     isolate and record, hold 24 h / 1 h, temperature-correct.
     evacuation    — deep or triple evacuation (Part 2 §5.3–5.4): dedicated
                     hoses and micron gauge, 500 / 600 microns, 60-minute
                     decay, what a rise means.
     recoverCharge — recovery and charging (Part 2 §6, §12.2, §13.4.3):
                     identify, cylinder checks and safe fill, liquid then
                     vapour, weigh, blends as liquid, record.
     brazing       — a joint on a system (ARAC Vol 1 ch 10, and the Code):
                     never on a charged line, nitrogen purge, heat the
                     fitting, purge until cool, test afterwards.

   Each procedure is data: a state, a set of actions (each returning
   {kind, msg} — ok / info / warn / block), a taught SEQUENCE graded by the
   shared sequenceReport(), and a verdict. Simulated time is explicit: the
   learner advances it, and the rig's numbers move.

   Pure logic — no DOM. Loaded as a plain script (exposes `RefrigProcedures`)
   and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const ok = (msg) => ({ kind: "ok", msg });
  const info = (msg) => ({ kind: "info", msg });
  const block = (msg) => ({ kind: "block", msg });
  function warn(s, msg) { s.warns += 1; return { kind: "warn", msg }; }

  function base(extra) {
    return Object.assign({ warns: 0, trail: [], done: false, clock: 0 }, extra);
  }
  function step(s, id) { s.trail.push(id); }

  /* ---- Shared: order-of-work grading (the Service Bay's, generalised) ------ */
  function sequenceReport(seq, s) {
    const firstAt = {};
    seq.forEach(st => { firstAt[st.id] = s.trail.findIndex(st.matches); });
    const steps = seq.map((st, n) => {
      const at = firstAt[st.id];
      const complete = st.test(s);
      let outOfOrder = false;
      if (complete && at >= 0) {
        for (let k = n + 1; k < seq.length; k++) {
          const other = firstAt[seq[k].id];
          if (other >= 0 && other < at) { outOfOrder = true; break; }
        }
      }
      return { id: st.id, label: st.label, why: st.why, early: st.early || null, complete, at, outOfOrder };
    });
    const done = steps.filter(st => st.complete).length;
    return { steps, done, total: seq.length, inOrder: !steps.some(st => st.complete && st.outOfOrder) };
  }

  /* =========================================================================
     1. Leak-tightness (pressure) test — Part 2 §4.9
     ========================================================================= */
  const PT = {
    id: "pressureTest",
    title: "Pressure test",
    short: "Pressure test",
    refs: ["cop:2:4.9", "cop:2:4.9.3", "cop:2:4.9.4", "cop:2:4.9.5", "cop:2:4.9.6", "cop:2:4.9.7", "cop:2:4.9.8"],
    scenarios: {
      commissioning: {
        label: "Commissioning — new site-assembled split (R32)",
        brief: "A new R32 split system, pipework site-assembled with four flare joints and two brazed joints, not yet charged. Nameplate: maximum allowable pressure PS 4,300 kPa; HP cut-out set at 4,000 kPa; manufacturer's stated maximum operating pressure 3,800 kPa. Leak-tightness test it before it is charged.",
        PS: 4300, limiter: 4000, maxOp: 3800, holdH: 24, min: 3800, max: 4000, kind: "commissioning",
      },
      repair: {
        label: "After a repair — replaced drier on a cool room (R404A)",
        brief: "A cool room's liquid-line drier has been replaced; the charge was recovered and the section is open. PS 2,800 kPa; HP cut-out 2,500 kPa. Test the repair before evacuating and recharging.",
        PS: 2800, limiter: 2500, maxOp: 2200, holdH: 1, min: 700, max: 2500, kind: "repair",
      },
    },
    newState(scenarioKey) {
      const sc = PT.scenarios[scenarioKey] || PT.scenarios.commissioning;
      return base({
        scenario: sc, medium: null, gauge: null, target: null, pressure: 0, stages: 0,
        checkedAt: [], isolated: false, recorded: null, held: 0, ambient: 24,
        leak: Math.random() < 0.5, leakFound: false, repaired: false, depressurised: true,
        declared: null, retested: false,
      });
    },
    MEDIA: {
      ofn: { label: "Oxygen-free nitrogen, high purity (< 10 ppm moisture)", ok: true },
      nitrogen: { label: "Standard-grade nitrogen from the welding supplier", ok: false, severity: "block",
        note: "Standard-grade nitrogen can carry enough oxygen to be dangerous at test pressure in a system with oil in it. The Code specifies high-purity oxygen-free nitrogen." },
      refrigerant: { label: "A charge of refrigerant, so the detector can find the leak", ok: false, severity: "block",
        note: "Refrigerant is never the pressure medium for a leak test — using it that way is discharge under the Act, and it is prohibited by the Code. Test with OFN; a tracer (under 5 % hydrogen in OFN) is the lawful way to make a leak detectable." },
      co2: { label: "CO₂ from a drinks-gas cylinder", ok: false, severity: "warn",
        note: "Not what the Code specifies. CO₂ carries moisture and is not the inert, dry medium a refrigeration system wants inside it. Use OFN." },
    },
    GAUGES: {
      ok: { label: "0–6,000 kPa gauge with a regulator rated for the cylinder", ok: true },
      low: { label: "0–1,000 kPa gauge off the manifold", ok: false,
        note: "Under-ranged. It will be pinned long before test pressure, and an over-pressured gauge is a gauge you cannot trust afterwards. Use a gauge that reads comfortably past the test pressure." },
      none: { label: "Straight off the cylinder, no regulator", ok: false, severity: "block",
        note: "A nitrogen cylinder holds around 15,000 kPa. Without a regulator the first thing that happens is a burst joint, or a gauge, or worse. Never." },
    },
    actions: {
      chooseMedium(s, p) {
        step(s, "medium:" + p);
        const m = PT.MEDIA[p]; if (!m) return block("No such medium.");
        if (m.severity === "block") return warn(s, m.note);
        s.medium = p;
        if (!m.ok) return warn(s, m.note);
        return ok("High-purity OFN on the trolley. Dry, inert, and what the Code specifies — with a tracer if you want the detector to see it.");
      },
      chooseGauge(s, p) {
        step(s, "gauge:" + p);
        const g = PT.GAUGES[p]; if (!g) return block("No such gauge.");
        if (g.severity === "block") return warn(s, g.note);
        s.gauge = p;
        if (!g.ok) return warn(s, g.note);
        return ok("Regulator on the cylinder, a gauge that reads past the test pressure on the system side. Now the number.");
      },
      setPressure(s, kPa) {
        step(s, "setPressure");
        const sc = s.scenario, v = Number(kPa);
        if (!Number.isFinite(v) || v <= 0) return block("Enter the test pressure in kPa.");
        if (v > sc.PS) { return warn(s, `${v} kPa is above PS (${sc.PS} kPa). The test pressure may never exceed the maximum allowable pressure — that is the pressure the system is built to, not a target.`); }
        if (v > sc.limiter) { return warn(s, `${v} kPa is above the HP cut-out setting (${sc.limiter} kPa). The Code has the commissioning test below any pressure-limiting or relief device setting — and a repair test between 25 % and 90 % of PS.`); }
        if (sc.kind === "repair" && (v < sc.PS * 0.25 || v > sc.PS * 0.9)) {
          return warn(s, `${v} kPa is outside 25–90 % of PS (${Math.round(sc.PS * 0.25)}–${Math.round(sc.PS * 0.9)} kPa), which is the band the Code gives for testing a repair or replaced component.`);
        }
        if (sc.kind === "commissioning" && v < sc.maxOp) {
          return warn(s, `${v} kPa is below the maximum operating pressure (${sc.maxOp} kPa). A commissioning test is at maximum system operating pressure — a joint that holds 2,000 kPa has not been tested for a system that will see 3,800.`);
        }
        s.target = v;
        return ok(`Test pressure set: ${v} kPa — ${sc.kind === "repair" ? "inside 25–90 % of PS" : "at maximum operating pressure"}, below the cut-out, below PS.`);
      },
      pressurise(s, fraction) {
        step(s, "pressurise");
        if (!s.medium) return block("Choose the test medium first.");
        if (!s.gauge) return block("Fit the regulator and gauge first.");
        if (!s.target) return block("Set the test pressure first.");
        if (s.isolated) return block("The cylinder is isolated. Open it again if you need more pressure — but then the hold starts over.");
        const f = Math.max(0.1, Math.min(1, Number(fraction) || 1));
        const before = s.pressure;
        s.pressure = Math.round(s.target * f);
        if (s.pressure <= before) return info("Already at or above that pressure.");
        s.stages += 1;
        s.depressurised = false;
        const jump = (s.pressure - before) / s.target;
        if (jump > 0.55) return warn(s, `Straight to ${s.pressure} kPa in one go. The Code has you pressurise in stages and check at every increment — a joint that is going to let go does it more safely at 1,000 kPa than at 4,000, and a leak found early saves the rest of the test.`);
        return ok(`${s.pressure} kPa on the system. Stop here and check the joints before the next stage.`);
      },
      checkJoints(s) {
        step(s, "check");
        if (s.pressure <= 0) return block("Nothing to check — the system is not under pressure.");
        s.checkedAt.push(s.pressure);
        if (s.leak && !s.leakFound && s.pressure >= s.target * 0.45) {
          s.leakFound = true;
          return warn(s, `Bubbles at the second flare on the liquid line at ${s.pressure} kPa — a leak, found at a stage check rather than after a 24-hour wait. Depressurise before touching it.`);
        }
        return ok(`Every joint bubble-tested at ${s.pressure} kPa: nothing. Carry on.`);
      },
      isolateAndRecord(s) {
        step(s, "isolate");
        if (s.pressure < (s.target || 1)) return block(`The system is at ${s.pressure} kPa, not yet at the test pressure of ${s.target || "—"} kPa.`);
        s.isolated = true;
        s.recorded = { p: s.pressure, t: s.ambient, at: s.clock };
        s.held = 0;
        return ok(`Cylinder isolated. Recorded: ${s.pressure} kPa at ${s.ambient} °C ambient, ${PT.fmtClock(s.clock)}. Both numbers — the pressure means nothing later without the temperature it was taken at.`);
      },
      wait(s, hours) {
        step(s, "wait");
        if (!s.isolated) return block("Isolate the cylinder and record pressure and ambient before the hold starts — otherwise the cylinder is quietly making up for any leak.");
        const h = Number(hours) || 1;
        s.clock += h; s.held += h;
        /* Ambient drifts with the day; the gas follows it. A leak bleeds off. */
        s.ambient = Math.round(24 + 6 * Math.sin((s.clock / 24) * 2 * Math.PI - 1.2));
        const pAbs0 = s.recorded.p + 101.3, T0 = s.recorded.t + 273.15;
        let pAbs = pAbs0 * (s.ambient + 273.15) / T0;
        if (s.leak && !s.repaired) pAbs -= s.recorded.p * 0.035 * s.held;   // 3.5 % of test pressure per hour
        s.pressure = Math.max(0, Math.round(pAbs - 101.3));
        return ok(`${PT.fmtClock(s.clock)}, ${s.held} h into the hold. Gauge: ${s.pressure} kPa at ${s.ambient} °C ambient (recorded ${s.recorded.p} kPa at ${s.recorded.t} °C).`);
      },
      declare(s, verdict) {
        step(s, "declare:" + verdict);
        if (!s.isolated || !s.recorded) return block("There is no hold to declare on yet.");
        const need = s.scenario.holdH;
        const expected = Math.round((s.recorded.p + 101.3) * (s.ambient + 273.15) / (s.recorded.t + 273.15) - 101.3);
        const drop = expected - s.pressure;
        const leaking = s.leak && !s.repaired;
        s.declared = verdict;
        if (s.held < need) {
          return warn(s, `Declared after ${s.held} h. The Code's hold is ${need} h for ${s.scenario.kind === "repair" ? "a repair" : "a commissioning test"}. A slow leak shows nothing in an hour and 40 kPa in a day.`);
        }
        if (verdict === "pass") {
          if (leaking) { return warn(s, `Declared a pass — but temperature-corrected, the pressure should be ${expected} kPa and it is ${s.pressure} kPa: a ${drop} kPa drop that the ambient does not explain. That is a leak, and it was about to be charged over.`); }
          s.done = true;
          return ok(`Pass. Temperature-corrected expectation ${expected} kPa, gauge ${s.pressure} kPa — no drop the ambient does not account for, held the full ${need} h. Record it; the system can be evacuated.`);
        }
        if (!leaking) { return warn(s, `Declared a fail — but the corrected expectation is ${expected} kPa and the gauge reads ${s.pressure} kPa. The change is the ambient, not a leak. Correct for temperature before condemning a tight system.`); }
        return ok(`Fail — correctly. Corrected expectation ${expected} kPa, gauge ${s.pressure} kPa: a ${drop} kPa drop the ambient does not explain. Find it with the detector, depressurise, repair, and test the whole thing again.`);
      },
      locate(s) {
        step(s, "locate");
        if (s.pressure <= 0) return block("Nothing to find at zero pressure — a leak needs pressure behind it to show.");
        if (!s.leak) return ok("Detector over every joint, valve and the coil return bends: nothing. There is no leak to find — which, if the corrected pressure held, is the answer.");
        s.leakFound = true;
        return ok("Electronic detector (5 g/year sensitivity or better) over every potential leakage point — not just until the first hit: the second flare on the liquid line is leaking. Keep going; the first leak found is not always the only one. Nothing else. Depressurise before it is touched.");
      },
      depressurise(s) {
        step(s, "depressurise");
        s.pressure = 0; s.depressurised = true; s.isolated = false;
        return ok("Nitrogen vented — to atmosphere, which is fine, it is nitrogen. The system is at zero. Now the joint can be worked on.");
      },
      repair(s) {
        step(s, "repair");
        if (!s.leakFound) return block("No leak has been found to repair.");
        if (!s.depressurised) return warn(s, "You went at a flare under test pressure. Repairs are never made on a pressurised system: a fitting under 3,800 kPa lets go in your face. Depressurise first.");
        s.repaired = true; s.isolated = false; s.target = s.target; s.recorded = null; s.held = 0;
        return ok("Flare remade — new flare, torqued, oil on the face. The Code has the whole test repeated after a repair: back to the start of the hold.");
      },
      retest(s) {
        step(s, "retest");
        if (!s.repaired) return block("There is no repair to retest.");
        s.retested = true;
        s.pressure = 0; s.stages = 0; s.checkedAt = []; s.isolated = false; s.recorded = null; s.held = 0; s.declared = null;
        return ok("Retest: pressurise in stages, isolate, record, hold the full duration again. A repair is not proven until the test that failed has been passed.");
      },
    },
    SEQUENCE: [
      { id: "medium", label: "Choose high-purity OFN as the test medium", test: s => s.medium === "ofn", matches: e => e.startsWith("medium:"),
        early: "You pressurised before the medium was chosen.", why: "Refrigerant is prohibited as the pressure medium and standard nitrogen is unsafe at pressure. High-purity OFN, with a tracer if wanted." },
      { id: "gauge", label: "Fit a regulator and a gauge rated past the test pressure", test: s => s.gauge === "ok", matches: e => e.startsWith("gauge:"),
        early: "Pressure went on before a regulator and a suitable gauge were fitted.", why: "The cylinder is at fifteen thousand kPa; the regulator is what stands between that and the system. The gauge has to read past the test pressure or it is pinned before you get there." },
      { id: "target", label: "Set the test pressure from PS, the cut-out and the maximum operating pressure", test: s => !!s.target, matches: e => e === "setPressure",
        early: "You pressurised with no target set.", why: "Commissioning: at maximum operating pressure, below the limiting device, never above PS. Repair: between 25 % and 90 % of PS. The number comes from the nameplate, not from habit." },
      { id: "stages", label: "Pressurise in stages, checking joints at each increment", test: s => s.stages >= 2 && s.checkedAt.length >= 1, matches: e => e === "check",
        early: "The joints were first checked after the pressure was already at the target.", why: "A joint that fails at 4,000 kPa fails more safely at 1,000, and a leak found at the first stage saves the hold. Stop, check, then the next stage." },
      { id: "isolate", label: "Isolate the cylinder; record pressure and ambient temperature", test: s => !!s.recorded || s.done, matches: e => e === "isolate",
        early: "The hold started before the cylinder was isolated and the starting numbers recorded.", why: "With the cylinder still connected a leak is topped up as fast as it leaks. And a pressure recorded without its temperature cannot be corrected later." },
      { id: "hold", label: "Hold the full duration (24 h commissioning, 1 h repair)", test: s => s.held >= s.scenario.holdH || s.done, matches: e => e === "wait",
        early: "The verdict came before the hold.", why: "Slow leaks are slow. The Code's durations are the minimum in which a real leak shows through the temperature noise." },
      { id: "declare", label: "Temperature-correct the reading and declare pass or fail", test: s => !!s.declared || s.done, matches: e => e.startsWith("declare:"),
        early: "", why: "Pressure follows absolute temperature. A drop the ambient explains is not a leak; a drop it does not explain is one, however small." },
    ],
    verdict(s) {
      const seq = sequenceReport(PT.SEQUENCE, s);
      const leakLine = s.leak
        ? (s.repaired ? "There was a leak; it was found, the system depressurised, the joint remade" + (s.retested ? " and the test repeated." : " — but the test was not repeated, and the Code requires it.") : s.leakFound ? "A leak was found and is still there." : "There was a leak that was never found.")
        : "The system was tight.";
      return { seq, leakLine, done: s.done, warns: s.warns };
    },
    fmtClock(h) { const d = Math.floor(h / 24), r = h % 24; return d ? `day ${d + 1}, ${r} h` : `${r} h`; },
  };

  /* =========================================================================
     2. Evacuation — Part 2 §5.3–5.4
     ========================================================================= */
  const EV = {
    id: "evacuation",
    title: "Evacuation",
    short: "Evacuation",
    refs: ["cop:2:5.3", "cop:2:5.4", "cop:2:5.4.1", "cop:2:5.4.2"],
    DEEP_TARGET: 500, HOLD_LIMIT: 600, HOLD_MIN: 60, TRIPLE_TARGET: 4500, RISE_LIMIT: 100,
    scenarios: {
      dry: { label: "Tight, dry system after a component change", condition: "dry" },
      wet: { label: "System that was open for a week — moisture inside", condition: "wet" },
      leak: { label: "System with a small leak nobody has found", condition: "leak" },
    },
    newState(scenarioKey) {
      const sc = EV.scenarios[scenarioKey] || EV.scenarios.dry;
      return base({
        scenario: sc, condition: sc.condition, pressure: 350,      // kPa g of residual refrigerant
        recovered: false, hoses: null, gauge: null, method: null, pumping: false,
        microns: 760000, pumpMin: 0, isolatedPump: false, decayMin: 0, decayStart: null,
        pulls: 0, deepPulls: 0, broken: 0, declared: null,
      });
    },
    actions: {
      recover(s) {
        step(s, "recover");
        if (s.recovered) return info("Already recovered and at zero.");
        s.recovered = true; s.pressure = 0; s.microns = 760000;
        return ok("Charge recovered into a cylinder, system fully depressurised, hoses off. Only now does a vacuum pump go anywhere near it.");
      },
      chooseHoses(s, p) {
        step(s, "hoses:" + p);
        if (p === "dedicated") { s.hoses = p; return ok("Dedicated evacuation hoses — large bore, as short as they can be, Schrader cores out of the way. Flow through a hose goes with the fourth power of its diameter: this is most of the speed."); }
        if (p === "service") { s.hoses = p; return warn(s, "Standard 1/4-in service hoses through the manifold. It will get there — eventually. The Code calls for dedicated large-diameter evacuation hoses, as short as practical; you have just made the job three times longer and the manifold's every seat a leak path."); }
        return block("No such hose set.");
      },
      chooseGauge(s, p) {
        step(s, "vacgauge:" + p);
        if (p === "micron") { s.gauge = p; return ok("Electronic micron gauge, connected at the system — not at the pump, where it reads the pump and not the machine."); }
        if (p === "manifold") { s.gauge = p; return warn(s, "The manifold's compound gauge. Its whole vacuum scale is one small arc, and 500 microns and 5,000 microns are the same needle position on it. The Code requires depth of vacuum to be measured on a dedicated vacuum gauge."); }
        return block("No such gauge.");
      },
      chooseMethod(s, p) {
        step(s, "method:" + p);
        if (p !== "deep" && p !== "triple") return block("Deep or triple.");
        s.method = p;
        return ok(p === "deep"
          ? "Deep evacuation: pull to at least 500 microns, isolate the pump, and stand 60 minutes holding below 600. One rise of 100 microns or more is a leak or moisture."
          : "Triple evacuation: two pulls to at least 4,500 microns each broken with OFN to a slight positive pressure, then the deep pull to 500 and the 60-minute hold below 600. The nitrogen carries moisture out that a single pull cannot.");
      },
      startPump(s) {
        step(s, "startPump");
        if (!s.recovered && s.pressure > 0) return warn(s, "Vacuum pump started against 350 kPa of refrigerant. The pump is now a discharge machine: it is pumping refrigerant out of its exhaust, which is venting under the Act, and it will not survive the liquid. Recover first.");
        if (!s.hoses || !s.gauge) return block("Hoses and gauge first.");
        if (!s.method) return block("Choose the method first — deep or triple.");
        s.pumping = true; s.isolatedPump = false; s.decayMin = 0;
        return ok("Pump running, gas ballast closed once the bulk is out. Watch the micron gauge, not the clock.");
      },
      pump(s, minutes) {
        step(s, "pump");
        if (!s.pumping) return block("The pump is not running.");
        const m = Number(minutes) || 15;
        s.pumpMin += m;
        const speed = s.hoses === "dedicated" ? 1 : 0.35;
        /* Where the system can get to: dry and tight → deep; wet → stalls at the
           water's vapour pressure; leaking → stalls where the leak matches the
           pump. The bulk gas goes in minutes; the last few hundred microns take
           the rest of the time, which is what the floor models. */
        const floor = s.condition === "dry" ? 180 : s.condition === "wet" ? (s.broken >= 2 ? 220 : 1800) : 900;
        const k = 0.3 * speed;
        s.microns = Math.round(floor + (s.microns - floor) * Math.exp(-k * m));
        const read = s.gauge === "micron" ? `${EV.fmtMicrons(s.microns)}` : `needle hard against the 30 inHg stop — the manifold cannot tell you more than "somewhere in vacuum"`;
        s.pulls = Math.max(s.pulls, 1);
        return ok(`${s.pumpMin} min pumping. Gauge: ${read}.` + (s.condition === "wet" && s.microns < 2500 && s.microns > 1200 ? " It has stopped falling — parked in the low thousands. That is water boiling off at its own vapour pressure; the pump cannot go lower until it is gone." : ""));
      },
      breakOFN(s) {
        step(s, "break");
        if (!s.pumping) return block("The pump is not connected and running.");
        if (s.method !== "triple") return warn(s, "Breaking the vacuum with nitrogen is the triple-evacuation method. On a deep evacuation it just starts you again.");
        if (s.gauge === "micron" && s.microns > EV.TRIPLE_TARGET) return warn(s, `Broken at ${EV.fmtMicrons(s.microns)} — the Code's triple method pulls to at least 4,500 microns before each break. A break from a shallow vacuum carries little out.`);
        s.broken += 1; s.microns = 760000 * 0.15;
        return ok(`Vacuum broken with OFN to a slight positive pressure, held, and vented. Break ${s.broken} of 2. The nitrogen has taken moisture with it; pull again.`);
      },
      isolatePump(s) {
        step(s, "isolatePump");
        if (!s.pumping) return block("The pump is not running.");
        s.isolatedPump = true; s.decayStart = s.microns; s.decayMin = 0;
        if (s.gauge === "micron" && s.microns > EV.DEEP_TARGET) return warn(s, `Isolated at ${EV.fmtMicrons(s.microns)}. The deep target is 500 microns or better; a hold from here proves less than it should.`);
        return ok(`Pump valved off at ${s.gauge === "micron" ? EV.fmtMicrons(s.microns) : "an unknown depth"}. Now the gauge is reading the system alone — the decay test starts.`);
      },
      hold(s, minutes) {
        step(s, "hold");
        if (!s.isolatedPump) return block("Isolate the pump first — with the pump still on, the gauge reads the pump.");
        const m = Number(minutes) || 15;
        s.decayMin += m;
        const start = s.decayStart;
        if (s.condition === "dry") s.microns = Math.round(start + 40 * (1 - Math.exp(-s.decayMin / 20)));
        else if (s.condition === "wet") s.microns = Math.round(s.broken >= 2 ? start + 60 * (1 - Math.exp(-s.decayMin / 20)) : Math.min(2200, start + (2200 - start) * (1 - Math.exp(-s.decayMin / 25))));
        else s.microns = Math.round(start + 180 * s.decayMin);           // steady climb, no ceiling
        const read = s.gauge === "micron" ? EV.fmtMicrons(s.microns) : "needle still on the stop — a manifold gauge will not show you a rise of a few hundred microns";
        return ok(`${s.decayMin} min into the hold. Gauge: ${read}.`);
      },
      declare(s, verdict) {
        step(s, "declare:" + verdict);
        if (!s.isolatedPump) return block("There is no hold to judge yet.");
        s.declared = verdict;
        const truth = s.condition === "dry" || (s.condition === "wet" && s.broken >= 2) ? "pass" : s.condition === "wet" ? "moisture" : "leak";
        if (s.gauge !== "micron") return warn(s, "Declared from a manifold gauge. Whatever you decided, you could not have seen the numbers the Code asks for. Fit a micron gauge.");
        if (s.decayMin < EV.HOLD_MIN) return warn(s, `Declared after ${s.decayMin} min. The hold is 60 minutes, holding below 600 microns. A leak that rises 100 microns in an hour rises 15 in ten minutes.`);
        if (verdict === truth) {
          s.done = verdict === "pass";
          return ok(verdict === "pass"
            ? `Pass. Pulled to ${EV.fmtMicrons(s.decayStart)}, held ${s.decayMin} min, finishing at ${EV.fmtMicrons(s.microns)} — a small rise that levelled off, never past 600. Dry and tight; charge it.`
            : verdict === "moisture"
              ? `Right — moisture. The gauge rose and then levelled off in the low thousands: water boiling to its own vapour pressure and stopping there. A leak never stops rising. Break with OFN and pull again (triple), or warm the system, and repeat.`
              : `Right — a leak. The gauge climbed steadily through 600, through 1,000, and kept going without levelling. Moisture plateaus; a leak does not. Pressure test and find it before another minute of pumping.`);
        }
        return warn(s, truth === "pass" ? "Called a fault on a system that held: the rise levelled off well under 600 microns. That is a tight, dry system."
          : truth === "moisture" ? "The rise levelled off in the low thousands — that is water, not a leak. A leak climbs without stopping. Triple-evacuate it."
          : "The gauge never levelled — it climbed straight through. That is a leak, not moisture; more pumping will not fix it.");
      },
    },
    SEQUENCE: [
      { id: "recover", label: "Recover and fully depressurise first", test: s => s.recovered, matches: e => e === "recover",
        early: "The pump was started against refrigerant pressure.", why: "A vacuum pump on a charged system pumps refrigerant to atmosphere. Recovery comes first, every time." },
      { id: "hoses", label: "Dedicated large-bore evacuation hoses, as short as practical", test: s => s.hoses === "dedicated", matches: e => e.startsWith("hoses:"),
        early: "Pumping started on the wrong hoses.", why: "Conductance rises with the fourth power of bore. Service hoses through a manifold triple the time and add leak paths." },
      { id: "gauge", label: "Dedicated micron gauge at the system", test: s => s.gauge === "micron", matches: e => e.startsWith("vacgauge:"),
        early: "Pumping started with no way to read microns.", why: "The Code requires the depth of vacuum on a dedicated vacuum gauge. A manifold gauge cannot see the difference between 500 and 5,000 microns." },
      { id: "method", label: "Choose deep or triple evacuation", test: s => !!s.method, matches: e => e.startsWith("method:"),
        early: "", why: "Deep: 500 microns, isolate, 60 min under 600. Triple: two pulls to 4,500 broken with OFN, then the deep pull. Wet or contaminated systems want triple." },
      { id: "pull", label: "Pull to at least 500 microns (4,500 for each triple stage)", test: s => s.pumpMin > 0 && (s.microns <= EV.DEEP_TARGET || s.done || s.declared), matches: e => e === "pump",
        early: "", why: "500 microns (67 Pa) is the Code's deep target. Where the gauge stops falling tells you what is in the system." },
      { id: "isolate", label: "Isolate the pump before the decay test", test: s => s.isolatedPump || s.done, matches: e => e === "isolatePump",
        early: "The hold was read with the pump still pulling.", why: "With the pump on, the gauge reads the pump. Valve it off and the gauge reads the system — that is the test." },
      { id: "hold", label: "Hold 60 minutes below 600 microns and read the shape of the rise", test: s => s.decayMin >= EV.HOLD_MIN || s.done, matches: e => e === "hold",
        early: "", why: "A rise of 100 microns or more is a leak or moisture. A rise that levels is moisture; one that keeps climbing is a leak." },
      { id: "declare", label: "Declare: dry and tight, moisture, or leak", test: s => !!s.declared, matches: e => e.startsWith("declare:"),
        early: "", why: "The gauge's shape is the diagnosis. Reading it right is the difference between charging a system and charging a leak." },
    ],
    verdict(s) { return { seq: sequenceReport(EV.SEQUENCE, s), done: s.done, warns: s.warns }; },
    fmtMicrons(m) { return m >= 100000 ? `${Math.round(m / 1000)} 000 microns (atmospheric)` : m >= 10000 ? `${Math.round(m / 100) * 100} microns` : `${m} microns`; },
  };

  /* =========================================================================
     3. Recovery and charging — Part 2 §6, §12.2, §13.4.3
     ========================================================================= */
  const RC = {
    id: "recoverCharge",
    title: "Recovery & charging",
    short: "Recover & charge",
    refs: ["cop:2:12.2", "cop:2:12.2.3", "cop:2:12.2.5", "cop:2:13.4.3", "cop:2:6.1", "cop:2:6.2", "cop:2:6.3", "cop:2:6.4", "cop:2:6.5", "cop:2:6.7"],
    scenarios: {
      r404a: { label: "Compressor change on a cool room — R404A, 12.5 kg nameplate", refrigerant: "R404A", blend: true, flammable: false, charge: 12.5, fillRatio: 0.85 },
      r32: { label: "Coil change on a split — R32 (A2L), 1.9 kg nameplate", refrigerant: "R32", blend: false, flammable: true, charge: 1.9, fillRatio: 0.78 },
      unknown: { label: "Abandoned display cabinet — label missing", refrigerant: null, blend: true, flammable: false, charge: 3.0, fillRatio: 0.7 },
    },
    CYLINDERS: {
      good: { label: "Recovery cylinder, test stamp 14 months old, rated for the refrigerant, water capacity 47.6 L, tare 15.2 kg, marked maximum gross", ok: true, wc: 47.6 },
      expired: { label: "Recovery cylinder, test stamp 6 years old", ok: false, severity: "block", note: "Out of test. A recovery cylinder must be in date against its most recent test stamp. It goes back for testing, not onto the job." },
      disposable: { label: "An empty disposable refrigerant cylinder", ok: false, severity: "block", note: "A disposable container must never be refilled or used as a temporary receiver. It has no relief device and no re-test regime; overfilled it bursts." },
      mixed: { label: "Recovery cylinder part-full of R134a", ok: false, severity: "block", note: "Refrigerants must not be cross-contaminated. A mixture cannot be recycled, only reclaimed or destroyed — and you would have made 20 kg of it. One refrigerant per cylinder." },
      unmarked: { label: "Recovery cylinder, in date, but no maximum gross weight marked", ok: false, severity: "block", note: "Do not use a cylinder that is not marked with its maximum gross weight. Without it there is no safe fill, only a guess." },
    },
    newState(scenarioKey) {
      const sc = RC.scenarios[scenarioKey] || RC.scenarios.r404a;
      return base({
        scenario: sc, identified: null, zoneChecked: false, earthed: false, cylinder: null,
        safeFill: null, liquidRecovered: false, vapourRecovered: false, recoveredKg: 0, weighed: false,
        evacuated: false, hosesChecked: false, chargeMode: null, charged: 0, recorded: false,
      });
    },
    safeFillKg(sc, wc) { return Math.round(wc * sc.fillRatio * 0.8 * 10) / 10; },
    actions: {
      identify(s, p) {
        step(s, "identify:" + p);
        const sc = s.scenario;
        if (p === "label") {
          if (!sc.refrigerant) { s.identified = "unknown"; return warn(s, "There is no label, and no service record. You do not know what is in it. The Code's answer: treat it as flammable AND toxic until it is positively identified, recover into a dedicated cylinder for unknown refrigerant, and never mix it with anything."); }
          s.identified = sc.refrigerant;
          return ok(`Nameplate: ${sc.refrigerant}, ${sc.charge} kg.${sc.blend ? " A blend — it will be charged as liquid." : ""}${sc.flammable ? " Class A2L — the area becomes a temporary flammable zone for the charging work." : ""}`);
        }
        if (p === "assume") { s.identified = "assumed"; return warn(s, "Assumed from the look of the machine. The refrigerant a system was built for and the one it holds are not always the same, and a wrong assumption contaminates a cylinder or over-pressures it. Read the label, or the service record, or identify it."); }
        if (p === "unknown") { s.identified = "unknown"; return ok("Treated as unknown: flammable and toxic until identified, dedicated cylinder, no mixing. That is the Code's rule, and it is the safe one."); }
        return block("Read the label, treat it as unknown, or assume.");
      },
      zoneCheck(s) {
        step(s, "zone");
        s.zoneChecked = true;
        if (!s.scenario.flammable) return info("A1 refrigerant — no flammable zone to declare. On an unknown refrigerant, or an A2L one, this is not optional.");
        return ok("Temporary flammable zone: ventilation confirmed, no ignition sources, combustible-gas detector running, extinguisher to hand, PPE on. Now the system is earthed before charging.");
      },
      earth(s) {
        step(s, "earth");
        s.earthed = true;
        if (!s.scenario.flammable) return info("Earthing is required before charging a flammable refrigerant. Harmless here.");
        return ok("System earthed. Static and a flammable vapour do not belong together.");
      },
      chooseCylinder(s, p) {
        step(s, "cylinder:" + p);
        const c = RC.CYLINDERS[p]; if (!c) return block("No such cylinder.");
        if (c.severity === "block") return warn(s, c.note);
        s.cylinder = p;
        return ok(`${c.label}. Now work out what it may hold.`);
      },
      safeFill(s, kg) {
        step(s, "safeFill");
        if (!s.cylinder) return block("Choose the cylinder first.");
        const c = RC.CYLINDERS[s.cylinder];
        const v = Number(kg);
        const right = RC.safeFillKg(s.scenario, c.wc);
        if (!Number.isFinite(v) || v <= 0) return block("Enter the safe fill in kilograms.");
        if (Math.abs(v - right) <= 0.6) { s.safeFill = right; return ok(`Safe fill ${right} kg: fill ratio ${s.scenario.fillRatio} × ${c.wc} L water capacity = ${Math.round(c.wc * s.scenario.fillRatio * 10) / 10} kg, less the 20 % ullage the Code applies to recovered refrigerant. Set the scales to alarm at tare plus that.`); }
        if (v > right) return warn(s, `${v} kg is over. Fill ratio × water capacity is ${Math.round(c.wc * s.scenario.fillRatio * 10) / 10} kg, and recovered refrigerant takes a further 20 % ullage: ${right} kg. An overfilled cylinder goes hydraulic on a warm day and bursts.`);
        s.safeFill = right;
        return info(`${v} kg is safe — conservative. The Code's figure is fill ratio × water capacity less 20 %: ${right} kg.`);
      },
      recoverLiquid(s) {
        step(s, "recoverLiquid");
        if (!s.identified) return block("Identify the refrigerant before you put any of it in a cylinder.");
        if (!s.cylinder) return block("No cylinder connected.");
        if (!s.safeFill) return warn(s, "Recovering with no safe fill worked out and no alarm set on the scales. You will find out the cylinder is full when the relief valve tells you.");
        s.liquidRecovered = true; s.recoveredKg = Math.round(s.scenario.charge * 0.85 * 10) / 10;
        return ok(`Liquid recovery first — fastest, and it takes the bulk: ${s.recoveredKg} kg on the scales. Then vapour.`);
      },
      recoverVapour(s) {
        step(s, "recoverVapour");
        if (!s.identified) return block("Identify the refrigerant first.");
        if (!s.cylinder) return block("No cylinder connected.");
        if (!s.liquidRecovered) { s.vapourRecovered = true; s.recoveredKg = Math.round(s.scenario.charge * 0.4 * 10) / 10; return warn(s, "Vapour recovery from a system full of liquid — slow, and the recovery unit is working hard to boil the liquid off through the pipework. Liquid first, then vapour: same result in a third of the time."); }
        s.vapourRecovered = true; s.recoveredKg = Math.round(s.scenario.charge * 0.98 * 10) / 10;
        return ok(`Vapour recovery to the required residual vacuum. ${s.recoveredKg} kg total on the scales — the entire charge, liquid and vapour, as the Code requires.`);
      },
      weighAndRecord(s) {
        step(s, "weigh");
        if (!s.vapourRecovered) return block("Nothing finished recovering yet.");
        s.weighed = true;
        return ok(`Recorded: ${s.recoveredKg} kg of ${s.identified === "unknown" ? "unidentified refrigerant" : s.scenario.refrigerant} recovered, cylinder labelled and marked, weight against its maximum gross checked. Refrigerant weighed out is the first half of the logbook entry; weighed in is the second.`);
      },
      evacuate(s) {
        step(s, "evacuate");
        if (!s.vapourRecovered) return block("Recover first — there is still refrigerant in the system.");
        s.evacuated = true;
        return ok("New compressor fitted, pressure tested, evacuated to 500 microns and held. (The evacuation trainer covers the detail.) Ready to charge.");
      },
      checkHoses(s) {
        step(s, "checkHoses");
        if (!s.evacuated) return block("Nothing to charge into yet.");
        s.hosesChecked = true;
        return ok("Cylinder valve cracked to pressurise the charging hose, closed, hose checked with the detector: tight. Now the valve can be opened properly.");
      },
      charge(s, mode, kg) {
        step(s, "charge:" + mode);
        const sc = s.scenario;
        if (!s.evacuated) return warn(s, "Charging a system that has not been evacuated: air and moisture are now sealed in with the refrigerant. The Code has every system evacuated before charging, no exceptions.");
        if (!s.hosesChecked) return warn(s, "The charging hose was never leak-checked before the cylinder valve was opened. A weeping hose loses refrigerant for the whole charge.");
        if (sc.flammable && (!s.zoneChecked || !s.earthed)) return warn(s, "Charging a flammable refrigerant with the zone unassessed or the system not earthed. Both come before the cylinder valve opens.");
        const v = Number(kg);
        if (!Number.isFinite(v) || v <= 0) return block("Enter the charge in kilograms.");
        if (mode === "vapour" && sc.blend) return warn(s, "Vapour-charging a blend. The components boil off at different rates, so what goes in is not the refrigerant on the label — and what is left in the cylinder is not either. Blends are charged as liquid, into the high side or through a metering device.");
        if (v > sc.charge * 1.06) return warn(s, `${v} kg into a system with a ${sc.charge} kg nameplate charge — overfilled. Charge limits are not exceeded; they are the reason the nameplate exists.`);
        s.chargeMode = mode; s.charged = v;
        if (v < sc.charge * 0.94) return info(`${v} kg in, ${sc.charge} kg on the plate. Short. Weigh in the rest; do not top up by sight glass on a blend.`);
        return ok(`${v} kg weighed in as ${mode}, against a ${sc.charge} kg nameplate. That is charging to a known mass — the most accurate method, and the one the Code prefers.`);
      },
      record(s) {
        step(s, "record");
        if (!s.charged) return block("Nothing charged yet.");
        s.recorded = true; s.done = true;
        return ok(`Logbook: ${s.recoveredKg} kg recovered, ${s.charged} kg charged, refrigerant, date, licence number, cylinder identification. Both halves of the arithmetic on the record, as the Code requires.`);
      },
    },
    SEQUENCE: [
      { id: "identify", label: "Identify the refrigerant (or treat it as unknown)", test: s => !!s.identified && s.identified !== "assumed", matches: e => e.startsWith("identify:"),
        early: "Refrigerant went into a cylinder before it was identified.", why: "Which cylinder, what pressure it will reach, whether it is flammable, whether it may be mixed — all of it depends on knowing what it is. Unknown means flammable and toxic until proven otherwise." },
      { id: "zone", label: "Flammable zone and earthing (A2L / unknown)", test: s => !s.scenario.flammable || (s.zoneChecked && s.earthed), matches: e => e === "zone" || e === "earth",
        early: "Refrigerant was handled before the zone was assessed.", why: "For a flammable refrigerant the working area is a temporary flammable zone: ventilation, ignition sources, detection, PPE, and the system earthed before charging." },
      { id: "cylinder", label: "Choose a recovery cylinder: in date, rated, marked, clean", test: s => !!s.cylinder, matches: e => e.startsWith("cylinder:"),
        early: "", why: "In test date, rated for the refrigerant, marked with its maximum gross weight, and holding nothing else. Disposables are never refilled." },
      { id: "fill", label: "Work out the safe fill and set the scales", test: s => !!s.safeFill, matches: e => e === "safeFill",
        early: "Recovery started with no safe-fill limit.", why: "Fill ratio × water capacity, less 20 % ullage for recovered refrigerant. Never past the marked maximum gross weight." },
      { id: "liquid", label: "Recover liquid first, then vapour", test: s => s.liquidRecovered && s.vapourRecovered, matches: e => e === "recoverLiquid",
        early: "Vapour recovery was started with the system full of liquid.", why: "Liquid moves the bulk quickly; vapour finishes the job to the required residual. Together they are the entire charge — which is what the Code requires recovered." },
      { id: "weigh", label: "Weigh, label and record what was recovered", test: s => s.weighed, matches: e => e === "weigh",
        early: "", why: "Refrigerant is weighed out and weighed in. The record is a legal one." },
      { id: "evacuate", label: "Evacuate before charging", test: s => s.evacuated, matches: e => e === "evacuate",
        early: "", why: "All pipework, components and systems are evacuated before charging. No exceptions in the Code." },
      { id: "hoses", label: "Leak-check the charging hose before opening the cylinder fully", test: s => s.hosesChecked, matches: e => e === "checkHoses",
        early: "The cylinder valve was opened before the hose was checked.", why: "Crack the valve, close it, check the hose. A hose that weeps loses refrigerant the whole time you are charging." },
      { id: "charge", label: "Charge to the nameplate mass — blends as liquid", test: s => s.charged > 0, matches: e => e.startsWith("charge:"),
        early: "", why: "Weighing in to a known mass is the most accurate method. Blends go in as liquid so the composition stays right." },
      { id: "record", label: "Record it in the logbook", test: s => s.recorded, matches: e => e === "record",
        early: "", why: "Every gram in and out is recorded — that is the Code, and it is also the licence." },
    ],
    verdict(s) { return { seq: sequenceReport(RC.SEQUENCE, s), done: s.done, warns: s.warns }; },
  };

  /* =========================================================================
     4. Brazing a joint on a system — ARAC Vol 1 ch 10; Code of Practice
     ========================================================================= */
  const BR = {
    id: "brazing",
    title: "Brazing",
    short: "Brazing",
    refs: ["cop:2:4.9.8", "cop:2:12.2", "cop:2:4.9"],
    scenarios: {
      drier: { label: "Replace a liquid-line filter-drier (copper to copper)", joint: "copper-copper", nearby: "the sight glass and a solenoid coil" },
      valve: { label: "Fit a new brass service valve (copper to brass)", joint: "copper-brass", nearby: "the valve's own seat and packing" },
    },
    newState(scenarioKey) {
      const sc = BR.scenarios[scenarioKey] || BR.scenarios.drier;
      return base({
        scenario: sc, charged: true, pressure: 1400, recovered: false, protected: false, prepared: false,
        purge: null, alloy: null, heated: null, fed: false, cooled: false, purgeStoppedEarly: false, cleaned: false, tested: false,
      });
    },
    actions: {
      recover(s) {
        step(s, "recover");
        if (s.recovered) return info("Already recovered and at zero.");
        s.recovered = true; s.charged = false; s.pressure = 0;
        return ok("Charge recovered, section at atmospheric pressure, both service valves confirmed open to the section. A torch never goes near a line with refrigerant or pressure in it.");
      },
      protect(s) {
        step(s, "protect");
        s.protected = true;
        return ok(`Heat-sensitive parts dealt with: ${s.scenario.nearby} removed or wrapped in a wet rag and shielded. The new drier's own desiccant stays cool the same way — brazing heat is the one thing a new drier cannot survive.`);
      },
      prepare(s) {
        step(s, "prepare");
        s.prepared = true;
        return ok("Tube cut square, deburred inside and out, cleaned bright with abrasive cloth, dry-fitted to full socket depth. Capillary action needs a clean, close, full-depth fit — the alloy will not bridge a gap or wet a dirty surface.");
      },
      purge(s, p) {
        step(s, "purge:" + p);
        if (p === "gentle") { s.purge = "gentle"; return ok("OFN flowing through the joint at a gentle rate — just enough that you can feel it at the open end, no pressure building. Displaces the oxygen so no black cupric-oxide scale forms inside the tube."); }
        if (p === "high") { s.purge = "high"; return warn(s, "Nitrogen at a fast flow — you can hear it at the far end. Pressure builds behind the joint and blows the molten alloy out of the capillary gap; the joint will be porous. A purge is a gentle displacement, not a pressure."); }
        if (p === "none") { s.purge = "none"; return warn(s, "No purge. Heating copper in air forms black oxide scale on the inside of the tube — flakes of it end up in the drier, the TX valve orifice and the compressor. This is the single most common cause of a restriction on a freshly repaired system."); }
        return block("Gentle, high, or none.");
      },
      alloy(s, p) {
        step(s, "alloy:" + p);
        const cuCu = s.scenario.joint === "copper-copper";
        if (p === "phos") { s.alloy = p; if (!cuCu) return warn(s, "Phosphorus-copper alloy on a copper-to-brass joint. The phosphorus is the flux on copper-to-copper only; on brass it needs a separate flux, and on steel it forms brittle iron phosphide. Use a silver alloy with flux for brass."); return ok("Phos-copper (silver-bearing) rod: self-fluxing on copper-to-copper. No flux needed, so nothing corrosive left in the joint."); }
        if (p === "silverFlux") { s.alloy = p; if (cuCu) return info("Silver alloy with flux on copper-to-copper: it works, and it is the right choice for brass or steel, but on copper-to-copper the flux is unnecessary and its residue has to be cleaned off — phos-copper does the job without it."); return ok("Silver alloy with flux: the right choice for copper-to-brass — the flux does what phosphorus cannot on brass."); }
        if (p === "soft") { s.alloy = p; return warn(s, "Soft solder on a refrigerant line. It melts below 300 °C and will not hold at the discharge-line temperatures or pressures a refrigeration system sees. Refrigeration joints are brazed, above 450 °C."); }
        return block("Choose an alloy.");
      },
      heat(s, where) {
        step(s, "heat:" + where);
        if (s.charged || s.pressure > 0) return warn(s, "Torch on a line with refrigerant in it. Refrigerant and oil at brazing temperatures make phosgene and other decomposition products; pressure behind a softening joint makes a burst. The torch does not go near a charged line — ever.");
        if (!s.prepared) return warn(s, "Heating a joint that was never cleaned and fitted. The alloy will not wet a dirty surface, and it will not bridge a loose fit.");
        if (!s.purge) return warn(s, "Heating with no purge running. Oxide scale is forming inside the tube as it heats.");
        if (where === "fitting") { s.heated = "fitting"; return ok("Heat on the fitting first, moved round evenly, then across to the tube — the socket is heavier and needs it first. Heat the base metal, not the rod: the joint melts the alloy, not the flame."); }
        if (where === "rod") { s.heated = "rod"; return warn(s, "Flame on the rod. The alloy melts and drips onto a cold joint, balls up, and does not flow in. The base metal has to be hot enough to melt the rod on contact — heat the fitting."); }
        if (where === "tube") { s.heated = "tube"; return warn(s, "Heat on the tube only. The heavier fitting stays cold; the alloy is drawn towards the heat and away from the socket. Fitting first, then the tube, then feed."); }
        return block("Fitting, tube, or rod.");
      },
      feed(s) {
        step(s, "feed");
        if (!s.heated) return block("The joint is not hot.");
        s.fed = true;
        if (s.heated !== "fitting") return warn(s, "Rod fed to a joint heated the wrong way: it did not flow into the gap. Expect a leak on test.");
        if (s.purge === "high") return warn(s, "The rod flowed — and the nitrogen pressure behind the joint pushed it back out of the capillary. Porous joint; expect a leak on test.");
        return ok("Rod touched to the joint opposite the flame, drawn in by capillary action all the way round — a clean fillet with no lumps. Flame away as soon as it has flowed.");
      },
      cool(s, purgeOn) {
        step(s, "cool:" + (purgeOn ? "purgeOn" : "purgeOff"));
        if (!s.fed) return block("No joint made yet.");
        s.cooled = true;
        if (!purgeOn) { s.purgeStoppedEarly = true; return warn(s, "Purge stopped while the joint was still hot. Oxygen got to hot copper — scale has formed on the inside during the cool-down. The purge stays on until the joint is cool enough to touch."); }
        return ok("Purge kept flowing until the joint was cool enough to touch, then off. Inside the tube stays bright.");
      },
      clean(s) {
        step(s, "clean");
        if (!s.cooled) return block("Let it cool first.");
        s.cleaned = true;
        return ok(s.alloy === "silverFlux" ? "Flux residue cleaned off with hot water and a brush — left on, it corrodes the joint from outside." : "No flux to clean. A wipe and a look at the fillet — complete, no pinholes.");
      },
      test(s) {
        step(s, "test");
        if (!s.fed) return block("No joint to test.");
        s.tested = true;
        const bad = s.heated !== "fitting" || s.purge === "high" || s.alloy === "soft" || (s.alloy === "phos" && s.scenario.joint !== "copper-copper");
        if (bad) return warn(s, "Pressure test with OFN: bubbles at the new joint. Back to the start — depressurise, cut it out, prepare it again. Better here than after the charge goes in.");
        s.done = true;
        return ok("Pressure tested with OFN, held, detector over the joint: tight. Now evacuate, and then it can be charged. A joint is not finished when the flame goes out; it is finished when the test passes.");
      },
    },
    SEQUENCE: [
      { id: "recover", label: "Recover the charge and depressurise the section", test: s => s.recovered, matches: e => e === "recover",
        early: "A torch went near a charged or pressurised line.", why: "Refrigerant and oil decompose in a flame into toxic gases, and pressure behind a softening joint bursts it. No torch on a charged line." },
      { id: "protect", label: "Remove or shield heat-sensitive components", test: s => s.protected, matches: e => e === "protect",
        early: "Heat went on with sensitive parts in place.", why: "Sight glasses, valve seats, solenoid coils, the new drier's desiccant — none of them survive brazing heat. Out, or wet-ragged." },
      { id: "prepare", label: "Cut square, deburr, clean bright, dry-fit to full depth", test: s => s.prepared, matches: e => e === "prepare",
        early: "The joint was heated before it was prepared.", why: "Capillary action wants a clean, close, full-depth fit. The alloy cannot bridge a gap or wet a dirty surface." },
      { id: "purge", label: "Gentle OFN purge flowing through the joint", test: s => s.purge === "gentle", matches: e => e.startsWith("purge:"),
        early: "Heat went on before the purge was flowing.", why: "Displaces oxygen so no oxide scale forms inside. Gentle — enough to feel, never enough to build pressure." },
      { id: "alloy", label: "Choose the alloy for the metals being joined", test: s => s.alloy === (s.scenario.joint === "copper-copper" ? "phos" : "silverFlux") || (s.alloy === "silverFlux"), matches: e => e.startsWith("alloy:"),
        early: "", why: "Phos-copper is self-fluxing on copper-to-copper. Brass or steel needs a silver alloy with flux. Soft solder is never used." },
      { id: "heat", label: "Heat the fitting first, then the tube — never the rod", test: s => s.heated === "fitting", matches: e => e.startsWith("heat:"),
        early: "", why: "The base metal melts the rod, not the flame. The heavier fitting needs heat first so the alloy is drawn into the socket." },
      { id: "feed", label: "Feed the rod opposite the flame and let capillary action draw it in", test: s => s.fed, matches: e => e === "feed",
        early: "", why: "A good joint is a thin, complete fillet drawn all the way round — not a lump on the outside." },
      { id: "cool", label: "Keep the purge flowing until the joint is cool", test: s => s.cooled && !s.purgeStoppedEarly, matches: e => e.startsWith("cool:"),
        early: "", why: "Hot copper oxidises in air. The purge stays on until the joint can be touched." },
      { id: "test", label: "Pressure test the joint before it is charged", test: s => s.tested, matches: e => e === "test",
        early: "", why: "Every repair is leak-tightness tested after it is made and before the system is charged. Better to find a pinhole now than after 12 kg of refrigerant is behind it." },
    ],
    verdict(s) { return { seq: sequenceReport(BR.SEQUENCE, s), done: s.done, warns: s.warns }; },
  };

  const PROCEDURES = { pressureTest: PT, evacuation: EV, recoverCharge: RC, brazing: BR };
  const ORDER = ["pressureTest", "evacuation", "recoverCharge", "brazing"];

  const api = { PROCEDURES, ORDER, sequenceReport,
    /* run one action on a procedure's state */
    act(procId, s, actionId, ...args) {
      const p = PROCEDURES[procId];
      if (!p || !p.actions[actionId]) return block("Unknown action.");
      /* A blocked action did not happen — the rig refused it — so it must
         not appear in the trail the order-of-work grade is read from. A
         warned action did happen, consequences and all, and stays. */
      const before = s.trail.length;
      const res = p.actions[actionId](s, ...args);
      if (res.kind === "block") s.trail.length = before;
      return res;
    },
  };
  root.RefrigProcedures = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
