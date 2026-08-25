/* =========================================================================
   Service Bay procedure engine — the pure state machine behind the
   interactive gauge-fitting exercise.

   Models two stem-type service valves (suction & discharge), each with a
   spindle cap, a gauge-port cap, three spindle positions (back-seated /
   cracked / front-seated) and a hose connection that must be purged.
   Mistakes have realistic consequences: cracking a bare port vents
   refrigerant, breaking a hose off a live port hisses, front-seating the
   discharge against a running compressor trips the HP cut-out.

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
    };
  }

  const ok = (msg) => ({ kind: "ok", msg });
  const info = (msg) => ({ kind: "info", msg });
  const block = (msg) => ({ kind: "block", msg });

  function warn(s, msg) { s.warns += 1; return { kind: "warn", msg }; }
  function startLeak(s, side) { s.leaks[side] = true; s.emissionG += VENT_G; }

  const SIDE_NAME = { suction: "suction", discharge: "discharge" };

  /* Apply one action; mutates `s`, returns {kind, msg}.
     Actions: {type:"spindleCap"|"portCap"|"hose"|"purge", side}
              {type:"spindle", side, pos:"back"|"crack"|"front"} */
  function act(s, a) {
    const v = s.valves[a.side];
    const name = SIDE_NAME[a.side];

    switch (a.type) {
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

      case "purge":
        if (!v.hose) return block(`No hose on the ${name} side to purge.`);
        if (v.spindle === "back") return block("There's no pressure behind that hose yet — crack the service valve off its back seat first, then purge.");
        if (v.purged) return info("That hose is already purged.");
        v.purged = true;
        s.emissionG += PURGE_G;
        return ok(`Short puff at the manifold nut — the air is out of the ${name} hose. Keep purges brief: every gram counts under the Code.`);

      default:
        return block("Unknown action.");
    }
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

  const api = { newState, act, checklist, packedUp, reading, VENT_G, PURGE_G };
  root.RefrigService = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
