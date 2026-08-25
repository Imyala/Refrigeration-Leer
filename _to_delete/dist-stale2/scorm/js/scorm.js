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

  /* ---- Progress encoding for cmi.suspend_data --------------------------------
     SCORM 1.2 caps suspend_data at 4096 characters, and the syllabus is now
     437 lessons — writing "moduleId/lessonId:best:total:done" for each one runs
     to about 21,000 characters, so the LMS would silently truncate a learner's
     record part-way through the course.

     Format 2 fixes that by replacing each lesson key with a 4-character token
     (a hash of the key) and each result with a single character holding the
     done flag and the best score; the question total comes from the course
     itself at decode time. That is 5 characters per completed lesson — a
     finished 437-lesson course lands near 2,200 characters, comfortably inside
     the limit.

     Tokens are hashes, not positions, so adding, removing or reordering
     modules does not shift anyone's saved progress: a token that no longer
     matches a lesson is simply dropped, and everything else still loads.
     Non-lesson entries (the exams) keep the original readable triple form.
     Format 1 records still decode, so records written before this change
     survive the upgrade. */

  const V2 = "2|";
  const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

  /* Every lesson key in the course, as "moduleId/lessonId". */
  function lessonKeys(course) {
    const keys = [];
    (course || []).forEach(mod => mod.lessons.forEach(les => keys.push(mod.id + "/" + les.id)));
    return keys;
  }

  /* 24-bit FNV-1a of the key, as four base64url characters. */
  function token(key) {
    let h = 0x811c9dc5;
    for (let i = 0; i < key.length; i++) {
      h ^= key.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    h = h & 0xffffff;
    return B64[(h >>> 18) & 63] + B64[(h >>> 12) & 63] + B64[(h >>> 6) & 63] + B64[h & 63];
  }

  /* done flag + best score (capped at 31) in one character. */
  function packResult(v) {
    const best = Math.max(0, Math.min(31, Math.round(v.best || 0)));
    return B64[(v.done ? 32 : 0) | best];
  }
  function unpackResult(ch, total) {
    const n = B64.indexOf(ch);
    if (n < 0) return null;
    return { done: (n & 32) !== 0, best: n & 31, total };
  }

  /* Lesson key -> its number of quiz questions, so `total` need not be stored. */
  function totalsByKey(course) {
    const map = {};
    (course || []).forEach(mod => mod.lessons.forEach(les => {
      map[mod.id + "/" + les.id] = (les.quiz && les.quiz.length) || 0;
    }));
    return map;
  }

  function legacyEncode(data) {
    return Object.entries(data || {})
      .map(([k, v]) => [k, v.best || 0, v.total || 0, v.done ? 1 : 0].join(":"))
      .join(";");
  }

  function legacyDecode(str) {
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

  /* Without a course to tokenise against, fall back to the readable format. */
  function encodeProgress(data, course) {
    if (!course || !course.length) return legacyEncode(data);
    const totals = totalsByKey(course);
    const packed = [];
    const extras = {};
    for (const [k, v] of Object.entries(data || {})) {
      if (!v) continue;
      if (Object.prototype.hasOwnProperty.call(totals, k)) {
        if (!v.done && !v.best) continue;          // nothing worth storing yet
        packed.push(token(k) + packResult(v));
      } else {
        extras[k] = v;                              // exams and anything else
      }
    }
    return V2 + packed.join("") + "|" + legacyEncode(extras);
  }

  function decodeProgress(str, course) {
    if (!str || typeof str !== "string") return {};
    if (str.slice(0, 2) !== V2) return legacyDecode(str);

    const body = str.slice(2);
    const cut = body.lastIndexOf("|");
    const packed = cut === -1 ? body : body.slice(0, cut);
    const out = cut === -1 ? {} : legacyDecode(body.slice(cut + 1));

    const totals = totalsByKey(course);
    const byToken = {};
    for (const k of Object.keys(totals)) byToken[token(k)] = k;

    for (let i = 0; i + 5 <= packed.length; i += 5) {
      const key = byToken[packed.slice(i, i + 4)];
      if (!key) continue;                           // lesson no longer exists
      const v = unpackResult(packed[i + 4], totals[key]);
      if (v) out[key] = v;
    }
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

    loadProgress(course) {
      if (!this.active) return null;
      try { return decodeProgress(this.api.LMSGetValue("cmi.suspend_data"), course); }
      catch (e) { return null; }
    },

    /* status: "passed" | "completed" | "incomplete"; score: 0–100 */
    saveProgress(data, score, status, course) {
      if (!this.active) return;
      try {
        this.api.LMSSetValue("cmi.suspend_data", encodeProgress(data, course));
        this.api.LMSSetValue("cmi.core.score.min", "0");
        this.api.LMSSetValue("cmi.core.score.max", "100");
        this.api.LMSSetValue("cmi.core.score.raw", String(Math.round(score)));
        this.api.LMSSetValue("cmi.core.lesson_status", status);
        this.api.LMSCommit("");
      } catch (e) { /* keep the course usable even if the LMS API chokes */ }
    },
  };

  const api = { findAPI, encodeProgress, decodeProgress, lessonKeys, token, Scorm };
  root.RefrigScorm = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
