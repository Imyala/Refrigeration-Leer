/* =========================================================================
   SCORM 1.2 runtime adapter.

   When the course runs inside an LMS (Moodle, Canvas, Blackboard, D2L…)
   as a SCORM package, the LMS exposes a window.API object. This adapter
   finds it, reports completion status and score to the gradebook, and
   stores course progress in cmi.suspend_data so a learner's progress
   follows their LMS account across machines. Outside an LMS it stays
   inactive and the course falls back to localStorage alone.

   Loaded as a plain script (exposes `RefrigScorm`) and require()-able in
   Node for the test suite (the pure encode/decode/find functions).
   ========================================================================= */
(function (root) {
  "use strict";

  /* Standard SCORM 1.2 API discovery: walk up the frame ancestry, then
     check the opener. `win` is injectable for tests. */
  function findAPI(win) {
    let tries = 0;
    let w = win;
    while (w && tries < 10) {
      if (w.API) return w.API;
      if (w.parent && w.parent !== w) { w = w.parent; tries++; continue; }
      break;
    }
    try { if (win && win.opener && win.opener.API) return win.opener.API; } catch (e) { /* cross-origin opener */ }
    return null;
  }

  /* Compact progress encoding for cmi.suspend_data (4096-char limit in
     SCORM 1.2). One entry per lesson: key:best:total:doneFlag  */
  function encodeProgress(data) {
    return Object.entries(data || {})
      .map(([k, v]) => [k, v.best || 0, v.total || 0, v.done ? 1 : 0].join(":"))
      .join(";");
  }
  function decodeProgress(str) {
    const out = {};
    if (!str || typeof str !== "string") return out;
    str.split(";").forEach(part => {
      const bits = part.split(":");
      if (bits.length !== 4 || !bits[0]) return;
      const best = parseInt(bits[1], 10), total = parseInt(bits[2], 10);
      if (!Number.isFinite(best) || !Number.isFinite(total)) return;
      out[bits[0]] = { best, total, done: bits[3] === "1" };
    });
    return out;
  }

  const Scorm = {
    api: null,
    active: false,

    init() {
      if (typeof window === "undefined") return false;
      this.api = findAPI(window);
      if (!this.api) return false;
      try {
        this.api.LMSInitialize("");
        this.active = true;
      } catch (e) { this.api = null; return false; }
      window.addEventListener("beforeunload", () => {
        try { this.api.LMSCommit(""); this.api.LMSFinish(""); } catch (e) { /* LMS gone */ }
      });
      return true;
    },

    loadProgress() {
      if (!this.active) return null;
      try { return decodeProgress(this.api.LMSGetValue("cmi.suspend_data")); }
      catch (e) { return null; }
    },

    /* status: "passed" | "completed" | "incomplete"; score: 0–100 */
    saveProgress(data, score, status) {
      if (!this.active) return;
      try {
        this.api.LMSSetValue("cmi.suspend_data", encodeProgress(data));
        this.api.LMSSetValue("cmi.core.score.min", "0");
        this.api.LMSSetValue("cmi.core.score.max", "100");
        this.api.LMSSetValue("cmi.core.score.raw", String(Math.round(score)));
        this.api.LMSSetValue("cmi.core.lesson_status", status);
        this.api.LMSCommit("");
      } catch (e) { /* keep the course usable even if the LMS API chokes */ }
    },
  };

  const api = { findAPI, encodeProgress, decodeProgress, Scorm };
  root.RefrigScorm = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
