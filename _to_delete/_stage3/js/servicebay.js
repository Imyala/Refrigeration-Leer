/* =========================================================================
   Service Bay procedure engine — the pure state machine behind the
   interactive gauge-fitting exercise.

   Models two stem-type service valves (suction & discharge), each with a
   spindle cap, a gauge-port cap, three spindle positions (back-seated /
   cracked / front-seated) and a hose connection that must be purged.
   Mistakes have realistic consequences: cracking a bare port vents
   refrigerant, breaking a hose off a live port hisses, front-seating the
   discharge against a running compressor trips the HP cut-out.

   It also grades the ORDER of the hook-up, because the order is the skill.
   The sequence a technician is taught is: choose the right hoses, prove the
   gauges read zero, fit the high-side hose and crack that port first (so
   there is system pressure behind the manifold to purge WITH), connect the
   low side, purge the low hose at the manifold, then crack the low port.
   Doing the same actions in a different order still gets you readings — and
   still puts air in the system, or vents refrigerant, or leaves you purging
   with nothing behind the hose.

   Pure logic — loaded as a plain script (exposes `RefrigService`) and
   require()-able in Node for the test suite. The UI lives in service-ui.js.
   ========================================================================= */
(function (root) {
  "use strict";

  const VENT_G = 20;   // grams lost per venting event
  const PURGE_G = 2;   // grams lost per (correct, brief) hose purge

  function newValve() {
    return { spindleCap: true, portCap: true, spindle: "back", hose: false, purged: false };
  }
  function newState() {
    return {
      valves: { suction: newValve(), discharge: newValve() },
      leaks: { suction: false, discharge: false },
      tripped: false,     // HP cut-out (discharge front-seated while running)
      emissionG: 0,
      warns: 0,
      hoseSet: null,      // which set of hoses was selected off the van
      zeroChecked: false, // gauges proved to read zero before fitting
      checked: false,     // gauges looked at once both hoses were connected
      trail: [],          // ordered record of what was done, for grading
    };
  }

  /* ---- Hose sets ----------------------------------------------------------
     What is on the van. Only one set is right for the job: rated for the
     refrigerant's pressures, fitted with low-loss shut-offs, and the correct
     fittings. The others each fail for a reason worth learning. */
  const HOSE_SETS = {
    correct: {
      label: "Standard set, low-loss fittings",
      detail: "Blue / red / yellow, 800 psi working and 4000 psi burst, low-loss shut-off ends, correct 1/4 in flare.",
      ok: true,
      note: "Right choice. Rated well above anything this system will show you, and the low-loss ends mean the hose contents are not dumped to atmosphere when you break the connection.",
    },
    noLowLoss: {
      label: "Standard set, plain ends",
      detail: "Correct pressure rating, but no shut-off valves on the ends.",
      ok: false, severity: "warn",
      note: "Rated correctly, but with no low-loss ends every hose full of refrigerant goes to atmosphere when you disconnect. The Code expects emissions kept to a practical minimum, and a hose set is the easiest place to lose refrigerant without noticing.",
    },
    perished: {
      label: "The old set in the bottom of the van",
      detail: "Cracked outer cover, one fitting weeping, unknown age.",
      ok: false, severity: "block",
      note: "No. A perished hose on the high side of an R410A system is a burst waiting to happen, and a weeping fitting is a leak you are adding to the job. Bin it.",
    },
    lowRated: {
      label: "Light-duty set from an automotive kit",
      detail: "300 psi working pressure, R134a automotive couplers.",
      ok: false, severity: "block",
      note: "Under-rated. High side on this system will go well past what those hoses are built for, and the couplers will not fit the service ports anyway. Use hoses rated for the system in front of you.",
    },
  };

  const ok = (msg) => ({ kind: "ok", msg });
  const info = (msg) => ({ kind: "info", msg });
  const block = (msg) => ({ kind: "block", msg });

  function warn(s, msg) { s.warns += 1; return { kind: "warn", msg }; }
  function startLeak(s, side) { s.leaks[side] = true; s.emissionG += VENT_G; }

  const SIDE_NAME = { suction: "suction", discharge: "discharge" };

  /* Apply one action; mutates `s`, returns {kind, msg}.
     Actions: {type:"spindleCap"|"portCap"|"hose"|"purge", side}
              {type:"spindle", side, pos:"back"|"crack"|"front"}
              {type:"hoseSet", set}   {type:"zeroCheck"} */
  function act(s, a) {
    const v = s.valves[a.side] || null;
    const name = SIDE_NAME[a.side];
    s.trail.push(a.type === "spindle" ? `spindle:${a.side}:${a.pos}`
      : a.side ? `${a.type}:${a.side}` : a.type);

    switch (a.type) {
      case "hoseSet": {
        const set = HOSE_SETS[a.set];
        if (!set) return block("No such hose set.");
        if (set.severity === "block") { s.warns += 1; return warn(s, set.note); }
        s.hoseSet = a.set;
        if (set.ok) return ok(set.note);
        s.warns += 1;
        return warn(s, set.note);
      }

      case "check": {
        const bothOn = s.valves.suction.hose && s.valves.discharge.hose;
        if (!bothOn) return block("Both hoses need to be on before there is anything to check.");
        s.checked = true;
        const live = s.valves.discharge.spindle !== "back";
        return ok(live
          ? "High side is live and reading; the low needle has not moved yet because its port is still back-seated. That is exactly what you should see at this point — if the low gauge were already reading, a port is open that should not be."
          : "Both hoses on, both ports still isolated, both needles still at rest. Nothing is reading yet, and nothing should be.");
      }

      case "zeroCheck": {
        if (s.zeroChecked) return info("You have already proved the gauges.");
        s.zeroChecked = true;
        return ok("Both needles sit on zero with the hoses open to atmosphere. A gauge that reads two bar before you start will have you chasing a fault that is not there — and one that reads low will have you overcharging. Prove them every time.");
      }

      case "spindleCap":
        if (v.spindleCap) { v.spindleCap = false; return ok(`Spindle cap off the ${name} valve — the stem is accessible.`); }
        v.spindleCap = true;
        return v.spindle === "back"
          ? ok(`Spindle cap refitted on the ${name} valve.`)
          : info(`Spindle cap refitted — but the ${name} valve isn't back-seated. Cap it properly when you pack up.`);

      case "portCap":
        if (!v.portCap) {
          if (v.hose) return block("The hose is connected to that port — disconnect it before refitting the cap.");
          v.portCap = true;
          if (s.leaks[a.side]) { s.leaks[a.side] = false; return ok(`Port cap on — the hiss from the ${name} port stops.`); }
          return ok(`Gauge-port cap refitted on the ${name} valve.`);
        }
        v.portCap = false;
        if (v.spindle !== "back") {
          startLeak(s, a.side);
          return warn(s, `Refrigerant hisses from the open ${name} port — the valve is off its back seat! Back-seat it or get a hose on, fast.`);
        }
        return ok(`Gauge-port cap off the ${name} valve. The port is dead while the valve stays back-seated.`);

      case "hose":
        if (!s.hoseSet) return block("You have not chosen a hose set yet. Pick the hoses off the van first — the wrong ones will not fit, or will not hold the pressure.");
        if (v.hose) {
          v.hose = false;
          v.purged = false;
          if (v.spindle !== "back") {
            startLeak(s, a.side);
            return warn(s, `You broke the hose off a live ${name} port — it's hissing. Back-seat the valve BEFORE removing hoses.`);
          }
          return ok(`Hose off the ${name} port.`);
        }
        if (v.portCap) return block(`The ${name} gauge port still has its cap on — remove it first.`);
        v.hose = true;
        if (s.leaks[a.side]) {
          s.leaks[a.side] = false;
          return warn(s, `Hose connected onto a hissing ${name} port — it's sealed now, but that cost refrigerant. Connect before you crack, next time.`);
        }
        return ok(`Hose connected hand-tight to the ${name} port. It still holds air — it will need purging once there's pressure behind it.`);

      case "spindle": {
        if (v.spindleCap) return block("The spindle cap is still on — remove it to reach the stem.");
        if (a.pos === v.spindle) return info("The spindle is already there.");
        v.spindle = a.pos;

        if (a.pos === "back") {
          const sealed = s.leaks[a.side];
          s.leaks[a.side] = false;
          if (s.tripped && a.side === "discharge") {
            s.tripped = false;
            return ok("Back-seated — pressure relieved, the HP cut-out resets and the compressor restarts. Lesson banked.");
          }
          return ok(sealed
            ? `Back-seated — the hiss from the ${name} port stops.`
            : `The ${name} valve is fully back-seated — its gauge port is isolated again.`);
        }

        // leaving the back seat with an open, bare port = venting
        if (!v.hose && !v.portCap) {
          startLeak(s, a.side);
          return warn(s, `The ${name} port is open to atmosphere and you just opened the valve to it — refrigerant is venting! Back-seat it.`);
        }

        if (a.pos === "front") {
          if (a.side === "discharge") {
            s.tripped = true;
            return warn(s, "Discharge valve front-seated against the running compressor — head pressure spikes instantly and the HP cut-out trips. NEVER front-seat a discharge valve with the machine running.");
          }
          return info("Suction valve front-seated — the compressor is pumping the low side down (this is how a pump-down works). Watch the low gauge fall away.");
        }

        if (s.tripped && a.side === "discharge") s.tripped = false;
        return ok(`The ${name} valve is cracked one turn off its back seat — system pressure now reaches the gauge port.`);
      }

      case "purge": {
        if (!v.hose) return block(`No hose on the ${name} side to purge.`);
        if (v.purged) return info("That hose is already purged.");

        const own = v.spindle !== "back";                       // pressure from this side
        const other = s.valves[a.side === "suction" ? "discharge" : "suction"];
        const viaManifold = other.hose && other.spindle !== "back";  // pressure from the other side

        if (!own && !viaManifold) {
          return block("There is no pressure behind that hose yet. Crack the high-side port first — that is what gives you something to purge WITH.");
        }
        v.purged = true;
        s.emissionG += PURGE_G;
        if (!own && viaManifold) {
          /* The refrigerant sweeps out of the live side, through the manifold
             body and along this hose, so it clears both on the way. */
          other.purged = true;
          return ok(`Short puff at the ${name} connection: high-side refrigerant sweeps through the manifold and out along the ${name} hose, carrying the air with it. Manifold and both hoses are now full of refrigerant instead of air — which is the whole point of purging before you open the low port.`);
        }
        return ok(`Short puff at the manifold nut — the air is out of the ${name} hose. Keep purges brief: every gram counts under the Code.`);
      }

      default:
        return block("Unknown action.");
    }
  }

  /* ---- The taught sequence, and how the learner's order compares ----------
     Each step knows how to recognise itself in the trail, and what goes wrong
     when it is done out of turn. */
  const SEQUENCE = [
    { id: "hoses",     label: "Choose the right hoses",
      test: (s) => !!s.hoseSet,
      matches: (e) => e === "hoseSet",
      early: "You are connecting hoses you have not chosen yet.",
      why: "Rated for the system in front of you, in good condition, with low-loss ends. Everything after this depends on it." },
    { id: "zero",      label: "Prove the gauges read zero",
      test: (s) => s.zeroChecked,
      matches: (e) => e === "zeroCheck",
      early: "You fitted the gauges before you proved them.",
      why: "A gauge that is out reads wrong all day, and every number you take from it is wrong with it. Check it open to atmosphere, before it goes anywhere near the system." },
    { id: "highHose",  label: "Fit the high-side hose to the discharge port",
      test: (s) => s.valves.discharge.hose,
      matches: (e) => e === "hose:discharge",
      early: "The high-side hose went on late.",
      why: "The high side goes on first because it is the pressure you will purge the rest of the manifold with." },
    { id: "crackHigh", label: "Crack the discharge port",
      test: (s) => s.valves.discharge.spindle === "crack",
      matches: (e) => e === "spindle:discharge:crack",
      early: "You cracked the discharge port before its hose was on.",
      why: "Cracking a port with a hose on it feeds pressure to the manifold. Cracking a bare one vents refrigerant into the workshop." },
    { id: "lowHose",   label: "Connect the low-side gauge hose",
      test: (s) => s.valves.suction.hose,
      matches: (e) => e === "hose:suction",
      early: "The low-side hose went on before the high side was live.",
      why: "With high-side pressure already in the manifold, the low hose can be purged the moment it is on." },
    { id: "check",     label: "Check the gauges",
      test: (s) => s.checked,
      matches: (e) => e === "check",
      early: "You checked the gauges before both hoses were on.",
      why: "Look at what the needles are telling you before you go further. High side live and low side still at rest is what you want to see; a low gauge already reading means a port is open that should not be." },
    { id: "purgeLow",  label: "Purge the low-side hose",
      test: (s) => s.valves.suction.purged,
      matches: (e) => e === "purge:suction",
      early: "You purged before there was anything behind the hose.",
      why: "Purging pushes the air out of the hose with refrigerant. Do it before you open the low port, or that air goes into the system." },
    { id: "crackLow",  label: "Crack the suction port",
      test: (s) => s.valves.suction.spindle === "crack",
      matches: (e) => e === "spindle:suction:crack",
      early: "The suction port was opened before the low hose was purged.",
      why: "Last step, deliberately: by now the manifold and both hoses hold refrigerant, not air, so opening the low side cannot push air into the machine." },
  ];

  /* Compare the order things actually happened in against the taught order.
     Only the FIRST occurrence of each step counts — repeating an action later
     is not what we are grading. */
  function sequenceReport(s) {
    const firstAt = {};
    SEQUENCE.forEach(step => {
      const i = s.trail.findIndex(step.matches);
      firstAt[step.id] = i;
    });
    const done = SEQUENCE.filter(st => st.test(s));
    const steps = SEQUENCE.map((step, n) => {
      const at = firstAt[step.id];
      const complete = step.test(s);
      /* out of order = some later step in the taught list happened first */
      let outOfOrder = false;
      if (complete && at >= 0) {
        for (let k = n + 1; k < SEQUENCE.length; k++) {
          const other = firstAt[SEQUENCE[k].id];
          if (other >= 0 && other < at) { outOfOrder = true; break; }
        }
      }
      return { id: step.id, label: step.label, why: step.why, early: step.early || null,
        complete, at, outOfOrder };
    });
    const inOrder = steps.filter(st => st.complete && st.outOfOrder).length === 0;
    return { steps, done: done.length, total: SEQUENCE.length, inOrder };
  }

  /* Progress through the hookup procedure. */
  function checklist(s) {
    const both = (fn) => fn(s.valves.suction) && fn(s.valves.discharge);
    const capsOff = both(v => !v.portCap || v.hose);
    const hoses = both(v => v.hose);
    const cracked = both(v => v.spindle === "crack");
    const purged = both(v => v.purged);
    return {
      capsOff, hoses, cracked, purged,
      hoseSet: !!s.hoseSet, zeroChecked: s.zeroChecked,
      readings: hoses && cracked && purged && !s.tripped,
    };
  }

  /* Left the machine as found: valves back-seated, hoses off, all caps on. */
  function packedUp(s) {
    const done = (v) => v.spindle === "back" && !v.hose && v.portCap && v.spindleCap;
    return done(s.valves.suction) && done(s.valves.discharge);
  }

  /* Gauge pressure to display (bar absolute), or null for "no reading".
     `pressures` = {pLow, pHigh} from the thermodynamic model. */
  function reading(s, side, pressures) {
    const v = s.valves[side];
    if (!v.hose || v.spindle === "back") return null;
    if (s.tripped) return (pressures.pLow + pressures.pHigh) / 2;   // trip → system equalising
    if (side === "suction" && v.spindle === "front") return 0.72;   // pumped down, near vacuum
    return side === "suction" ? pressures.pLow : pressures.pHigh;
  }

  const api = { newState, act, checklist, packedUp, reading, sequenceReport,
    SEQUENCE, HOSE_SETS, VENT_G, PURGE_G };
  root.RefrigService = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
