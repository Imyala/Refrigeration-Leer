/* =========================================================================
   Evidence record — what the learner did in the tools, kept for the
   instructor.

   Lesson progress says which quizzes were passed. It says nothing about
   how a learner hooked up a manifold, which readings they took before
   committing to a diagnosis, or whether they isolated before putting a
   meter on ohms — and that is the evidence an RTO's practical units are
   about. Every tool records one entry per finished job here: the tool, a
   score in 0..1, and the detail that job produced. Entries carry the units
   of competency the tool supports (from js/competency.js) so the
   instructor dashboard and the course home can report by unit.

   Storage is the browser's; the course page's export includes the record
   and the instructor dashboard reads it from the export. Nothing leaves the
   machine on its own.

   Loaded as a plain script (exposes `RefrigEvidence`) and require()-able in
   Node for the test suite; the pure functions take the entry list as an
   argument so they run without a browser.
   ========================================================================= */
(function (root) {
  "use strict";

  const KEY = "refrigSim.evidence";
  const MAX = 400;

  function load() {
    try {
      if (typeof localStorage === "undefined") return [];
      const a = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(a) ? a : [];
    } catch (e) { return []; }
  }
  function save(list) {
    try { if (typeof localStorage !== "undefined") localStorage.setItem(KEY, JSON.stringify(list.slice(-MAX))); }
    catch (e) { /* storage unavailable */ }
  }

  function makeId(entry, at) {
    let h = 0x811c9dc5;
    const s = `${entry.tool}|${at}|${JSON.stringify(entry.detail || {})}|${Math.random()}`;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(16).padStart(8, "0");
  }

  /* Normalise one entry: a tool, a score clamped to 0..1, a timestamp, an id. */
  function make(entry, now) {
    const at = now || new Date().toISOString();
    const score = Math.max(0, Math.min(1, Number(entry.score) || 0));
    return Object.assign({}, entry, { at, score, id: entry.id || makeId(entry, at) });
  }

  /* Record a finished job. Returns the stored entry. */
  function record(entry) {
    const e = make(entry);
    const list = load();
    list.push(e);
    save(list);
    return e;
  }

  /* The units an entry counts towards: its own list if it carries one,
     otherwise its tool's units from the competency data. */
  function unitsFor(entry, C) {
    if (Array.isArray(entry.units) && entry.units.length) return entry.units;
    const comp = C || root.RefrigCompetency;
    const t = comp && comp.TOOLS && comp.TOOLS[entry.tool];
    return t ? t.units : [];
  }

  /* Merge two lists by id, newest last, without duplicates. */
  function merge(a, b) {
    const seen = new Set();
    const out = [];
    (a || []).concat(b || []).forEach(e => {
      if (!e || !e.id || seen.has(e.id)) return;
      seen.add(e.id);
      out.push(e);
    });
    out.sort((x, y) => String(x.at).localeCompare(String(y.at)));
    return out.slice(-MAX);
  }

  /* Per-tool and per-unit summary of a list of entries. */
  function summarise(entries, C) {
    const byTool = {}, byUnit = {};
    (entries || []).forEach(e => {
      const t = byTool[e.tool] = byTool[e.tool] || { attempts: 0, sum: 0, best: 0, last: null };
      t.attempts += 1; t.sum += e.score; t.best = Math.max(t.best, e.score); t.last = e.at;
      unitsFor(e, C).forEach(code => {
        const u = byUnit[code] = byUnit[code] || { attempts: 0, sum: 0, best: 0, last: null, tools: {} };
        u.attempts += 1; u.sum += e.score; u.best = Math.max(u.best, e.score); u.last = e.at;
        u.tools[e.tool] = (u.tools[e.tool] || 0) + 1;
      });
    });
    const finish = (o) => { o.mean = o.attempts ? o.sum / o.attempts : 0; delete o.sum; return o; };
    Object.values(byTool).forEach(finish);
    Object.values(byUnit).forEach(finish);
    return { byTool, byUnit, total: (entries || []).length };
  }

  const api = { KEY, MAX, load, save, make, record, unitsFor, merge, summarise, all: load,
    clear() { save([]); } };
  root.RefrigEvidence = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
