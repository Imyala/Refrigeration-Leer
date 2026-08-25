/* =========================================================================
   Unit system: pressure (kPa / bar / psi) and temperature (°C / °F) display
   preferences, persisted in localStorage.

   Internally the whole app works in bar absolute and °C; only display goes
   through these helpers. Field gauges read GAUGE pressure (above atmospheric)
   so readouts, the manifold and the trainers use fmtPGauge; the P–h diagram
   stays absolute, as thermodynamic charts are.

   Loaded as a plain script in the browser (exposes `RefrigUnits`) and
   require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const ATM_BAR = 1.01325;

  const P_UNITS = {
    kPa: { factor: 100,     decimals: 0, label: "kPa", gaugeLabel: "kPa g" },
    bar: { factor: 1,       decimals: 2, label: "bar", gaugeLabel: "bar g" },
    psi: { factor: 14.5038, decimals: 0, label: "psi", gaugeLabel: "psig" },
  };

  const KEY = "refrigSim.units";
  const prefs = { p: "kPa", t: "C" };

  function loadPrefs() {
    try {
      if (typeof localStorage === "undefined") return;
      const s = JSON.parse(localStorage.getItem(KEY) || "{}");
      if (P_UNITS[s.p]) prefs.p = s.p;
      if (s.t === "C" || s.t === "F") prefs.t = s.t;
    } catch (e) { /* ignore corrupt prefs */ }
  }
  function savePrefs() {
    try {
      if (typeof localStorage !== "undefined") localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch (e) { /* storage may be unavailable */ }
  }
  loadPrefs();

  function setPrefs(p, t) {
    if (p && P_UNITS[p]) prefs.p = p;
    if (t === "C" || t === "F") prefs.t = t;
    savePrefs();
  }

  const barTo    = (bar, unit) => bar * P_UNITS[unit || prefs.p].factor;
  const toBar    = (v, unit)   => v / P_UNITS[unit || prefs.p].factor;
  const gaugeBar = (absBar)    => absBar - ATM_BAR;
  const cTo      = (c, unit)   => (unit || prefs.t) === "F" ? c * 9 / 5 + 32 : c;
  const dTo      = (k, unit)   => (unit || prefs.t) === "F" ? k * 1.8 : k;

  function fmtPAbs(absBar) {
    const u = P_UNITS[prefs.p];
    return `${barTo(absBar).toFixed(u.decimals)} ${u.label}`;
  }
  function fmtPGauge(absBar) {
    const u = P_UNITS[prefs.p];
    return `${barTo(gaugeBar(absBar)).toFixed(u.decimals)} ${u.gaugeLabel}`;
  }
  function fmtT(c)  { return `${Math.round(cTo(c))}°${prefs.t}`; }
  function fmtDT(k) { return prefs.t === "F" ? `${Math.round(dTo(k))}°F` : `${Math.round(k)} K`; }

  const api = { ATM_BAR, P_UNITS, prefs, setPrefs, barTo, toBar, gaugeBar, cTo, dTo, fmtPAbs, fmtPGauge, fmtT, fmtDT };
  root.RefrigUnits = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
