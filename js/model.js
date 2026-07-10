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

  /* ---- Derive a full operating point ------------------------------------- */
  function deriveAt(refKey, speed, load, faultKey) {
    const base = D.REFRIGERANTS[refKey];
    const s = speed / 100, L = load / 100;
    const f = D.FAULTS[faultKey] || D.FAULTS.none;
    const tbl = base.satTable;

    let pLow  = base.pLow  * (1 + 0.30 * (L - 1) - 0.22 * (s - 1)) * f.mLow;
    let pHigh = base.pHigh * (1 + 0.28 * (s - 1) + 0.08 * (L - 1)) * f.mHigh;
    pLow  = clamp(pLow,  tbl[0].P + 0.05, base.pHigh * 0.85);
    pHigh = clamp(pHigh, base.pLow * 1.4, tbl[tbl.length - 1].P - 0.5);

    const tEvap = satTemp(base, pLow);
    const tCond = satTemp(base, pHigh);
    const superheat = clamp((base.tSuction - base.tEvap) + f.dSuper, 1, 60);
    const subcool   = clamp((base.tCond   - base.tLiquid) + f.dSub, 0, 40);
    const tSuction = tEvap + superheat;
    const tLiquid  = tCond - subcool;

    const ratio = pHigh / pLow, baseRatio = base.pHigh / base.pLow;
    const tDischarge = tCond + (base.tDischarge - base.tCond) * (ratio / baseRatio) * (0.6 + 0.4 * s) + f.dDisch;
    const flow = D.BASE_FLOW * s;

    // Enthalpies straight from the table
    const h3 = interpTable(tbl, "T", tLiquid, "hf");          // subcooled liquid ≈ hf(T)
    const h4 = h3;                                            // throttling is isenthalpic
    const h1 = interpTable(tbl, "T", tEvap, "hg") + D.CP_VAP * superheat;
    const h2 = interpTable(tbl, "T", tCond, "hg") + D.CP_VAP * (tDischarge - tCond);

    const effect  = h1 - h4;                  // refrigeration effect (kJ/kg)
    const work    = Math.max(h2 - h1, 0.1);   // compressor work (kJ/kg)
    const heatRej = h2 - h3;                  // heat rejected (kJ/kg)
    const cop     = effect / work;
    const capRaw  = effect * pLow * flow;     // capacity proxy (effect × density-proxy × flow)

    return { base, pLow, pHigh, tEvap, tCond, tSuction, tDischarge, tLiquid,
      superheat, subcool, ratio, flow, h1, h2, h3, h4, effect, work, heatRej, cop, capRaw };
  }

  const api = { clamp, interpTable, satTemp, satPress, deriveAt };
  root.RefrigModel = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
