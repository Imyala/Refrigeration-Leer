/* =========================================================================
   Thermodynamic model: table interpolation, saturation lookups and the
   operating-point derivation used by the whole app.

   Loaded as a plain script in the browser (exposes `RefrigModel` on
   globalThis) and require()-able in Node for the test suite. Values are
   representative/approximate — for learning the shape and behaviour of the
   cycle, not for engineering design.
   ========================================================================= */
(function (root) {
  "use strict";

  const D = (typeof module !== "undefined" && typeof require !== "undefined")
    ? require("./data.js")
    : root.RefrigData;
  const C = (typeof module !== "undefined" && typeof require !== "undefined")
    ? require("./circuits.js")
    : root.RefrigCircuits;

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // Generic 1-D linear interpolation: look up `outKey` for a given value of `inKey`.
  function interpTable(table, inKey, x, outKey) {
    const asc = table[0][inKey] < table[table.length - 1][inKey];
    for (let i = 0; i < table.length - 1; i++) {
      const a = table[i], b = table[i + 1];
      const lo = Math.min(a[inKey], b[inKey]), hi = Math.max(a[inKey], b[inKey]);
      if (x >= lo && x <= hi) {
        const f = (x - a[inKey]) / (b[inKey] - a[inKey]);
        return a[outKey] + f * (b[outKey] - a[outKey]);
      }
    }
    const first = table[0], last = table[table.length - 1];
    return x <= (asc ? first[inKey] : last[inKey])
      ? (asc ? first : last)[outKey] : (asc ? last : first)[outKey];
  }

  const satTemp  = (base, p) => interpTable(base.satTable, "P", p, "T");
  const satPress = (base, t) => interpTable(base.satTable, "T", t, "P");

  /* ---- Compression work for one stage -------------------------------------
     Shared by the single-stage cycle and by each half of a cascade.          */
  function stageWork(base, tEvapS, tCondS, superheatS, subcoolS, dischargeBoost) {
    const tbl = base.satTable;
    const pE = satPress(base, tEvapS), pC = satPress(base, tCondS);
    const ratioS = pC / pE, baseRatio = base.pHigh / base.pLow;
    const tDisch = tCondS + (base.tDischarge - base.tCond) * (ratioS / baseRatio) * (dischargeBoost || 1);
    const hSuc = interpTable(tbl, "T", tEvapS, "hg") + D.CP_VAP * superheatS;
    const hDis = interpTable(tbl, "T", tCondS, "hg") + D.CP_VAP * Math.max(tDisch - tCondS, 0);
    const hLiq = interpTable(tbl, "T", tCondS - subcoolS, "hf");
    return {
      pE, pC, ratio: ratioS, tDisch,
      hSuc, hDis, hLiq,
      effect: hSuc - hLiq,
      work: Math.max(hDis - hSuc, 0.1),
    };
  }

  /* ---- Derive a full operating point -------------------------------------
     `circuitKey` selects one of the system variations in circuits.js. The
     extra hardware in a variation is not decoration, and it is not a fudge
     factor either — each effect is worked through the enthalpies:

       suction-line HX  heat moves from the liquid line to the suction line.
                        The extra subcooling is real cooling gained; the extra
                        superheat is NOT (it happens after the coil), and it
                        costs compressor work. The net COP change is small,
                        which is the honest and more interesting lesson.
       flash chamber    the flash vapour is separated out, so the coil is fed
                        pure liquid. That buys evaporator effectiveness, not
                        free COP — the compressor still has to pump the gas.
       multi-evaporator a second coil held at its own higher pressure by an EPR.
       cascade          two stages solved separately and coupled through the
                        cascade condenser, with the mass-flow ratio between
                        them worked out from the heat the low stage rejects.  */
  function deriveAt(refKey, speed, load, faultKey, circuitKey) {
    const base = D.REFRIGERANTS[refKey];
    const s = speed / 100, L = load / 100;
    const f = D.FAULTS[faultKey] || D.FAULTS.none;
    const tbl = base.satTable;
    const circuit = (C && C.CIRCUITS[circuitKey]) || null;
    const fx = (circuit && circuit.effects) || {};

    let pLow  = base.pLow  * (1 + 0.30 * (L - 1) - 0.22 * (s - 1)) * f.mLow;
    let pHigh = base.pHigh * (1 + 0.28 * (s - 1) + 0.08 * (L - 1)) * f.mHigh;
    pLow  = clamp(pLow,  tbl[0].P + 0.05, base.pHigh * 0.85);
    pHigh = clamp(pHigh, base.pLow * 1.4, tbl[tbl.length - 1].P - 0.5);

    // Some circuits are a particular kind of plant, not just a drawing: a
    // multi-evaporator pack is pulled down to whatever its freezer needs, and
    // a cascade reaches temperatures a single machine could not.
    if (fx.lowSideMul) pLow = clamp(pLow * fx.lowSideMul, tbl[0].P + 0.02, base.pHigh * 0.85);
    if (fx.cascade)    pLow = clamp(pLow * 0.30, tbl[0].P + 0.02, base.pHigh * 0.85);

    const tEvap = satTemp(base, pLow);
    const tCond = satTemp(base, pHigh);

    // Superheat picked up in the coil is the part that does cooling. A suction
    // line heat exchanger adds more afterwards, which the compressor feels but
    // the cold room never sees.
    const superheatCoil = clamp((base.tSuction - base.tEvap) + f.dSuper, 1, 60);
    const superheat = clamp(superheatCoil + (fx.dSuper || 0), 1, 70);
    const subcool   = clamp((base.tCond - base.tLiquid) + f.dSub + (fx.dSub || 0), 0, 40);
    const tSuction = tEvap + superheat;
    const tLiquid  = tCond - subcool;

    const ratio = pHigh / pLow, baseRatio = base.pHigh / base.pLow;
    // Extra suction superheat arrives at the compressor and leaves it hotter still.
    const tDischarge = tCond + (base.tDischarge - base.tCond) * (ratio / baseRatio) * (0.6 + 0.4 * s)
      + f.dDisch + (fx.dSuper || 0) * 1.25;
    const flow = D.BASE_FLOW * s;

    // Enthalpies straight from the table
    const hf1 = interpTable(tbl, "T", tEvap, "hf");           // saturated liquid at coil pressure
    const hg1 = interpTable(tbl, "T", tEvap, "hg");           // saturated vapour at coil pressure
    const h3  = interpTable(tbl, "T", tLiquid, "hf");         // subcooled liquid ≈ hf(T)
    const h4  = h3;                                           // throttling is isenthalpic
    const hCoilOut = hg1 + D.CP_VAP * superheatCoil;          // what leaves the evaporator
    const h1  = hg1 + D.CP_VAP * superheat;                   // what reaches the compressor
    const h2  = interpTable(tbl, "T", tCond, "hg") + D.CP_VAP * Math.max(tDischarge - tCond, 0);

    // How much of the liquid flashes to vapour crossing the metering device.
    // This is worth showing on every circuit — it is why subcooling matters.
    const flashFraction = clamp((h4 - hf1) / Math.max(hg1 - hf1, 1), 0, 1);

    // Useful cooling is measured across the evaporator, not across the HX.
    let effect  = hCoilOut - h4;
    let work    = Math.max(h2 - h1, 0.1);
    let heatRej = h2 - h3;
    let tInter = null, lowStage = null, highStage = null;

    if (fx.cascade) {
      // Meet in the middle, with a real temperature difference across the
      // cascade condenser — the high stage has to boil colder than the low
      // stage condenses, or no heat would cross.
      tInter = (tEvap + tCond) / 2;
      const hxDT = 5;
      lowStage  = stageWork(base, tEvap, tInter, superheatCoil, 3, 0.6 + 0.4 * s);
      highStage = stageWork(base, tInter - hxDT, tCond, 5, subcool, 0.6 + 0.4 * s);
      // Every kilogram the low stage rejects has to be absorbed by the high
      // stage, which sets how much bigger the high-stage mass flow must be.
      const rejLow = lowStage.effect + lowStage.work;
      const massRatio = rejLow / Math.max(highStage.effect, 1);
      effect  = lowStage.effect;
      work    = lowStage.work + massRatio * highStage.work;
      heatRej = massRatio * (highStage.effect + highStage.work);
      lowStage.massRatio = 1;
      highStage.massRatio = massRatio;
    }

    const cop    = effect / work;
    const capRaw = effect * pLow * flow;   // capacity proxy (effect × density-proxy × flow)

    const out = { base, pLow, pHigh, tEvap, tCond, tSuction, tDischarge, tLiquid,
      superheat, superheatCoil, subcool, ratio, flow,
      h1, h2, h3, h4, hCoilOut, hf1, hg1,
      effect, work, heatRej, cop, capRaw, flashFraction,
      circuit: circuitKey || "basic", circuitNote: fx.note || null };

    // A flash chamber separates the vapour out, so the coil is fed pure liquid.
    // The gas still has to be compressed, so this buys coil effectiveness and
    // even distribution rather than a free jump in COP.
    out.flashBypassed = !!fx.flashBypass;
    out.coilInletQuality = fx.flashBypass ? 0 : flashFraction;

    // A second evaporator running at its own, higher pressure, because an EPR
    // refuses to let it be pulled down with the cold one.
    if (fx.secondEvapDT != null) {
      out.tEvapB = tEvap + fx.secondEvapDT;
      out.pLowB  = satPress(base, out.tEvapB);
    }
    if (tInter != null) {
      out.tInter = tInter;
      out.lowStage = lowStage;
      out.highStage = highStage;
      // The comparison that makes the point: one compressor asked to do the
      // whole lift on its own, at the same evaporating and condensing temps.
      const single = stageWork(base, tEvap, tCond, superheatCoil, subcool, 0.6 + 0.4 * s);
      out.singleStage = {
        cop: single.effect / single.work,
        ratio: single.pC / single.pE,
        tDisch: single.tDisch,
      };
    }
    return out;
  }

  const api = { clamp, interpTable, satTemp, satPress, deriveAt, stageWork };
  root.RefrigModel = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
