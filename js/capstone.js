/* =========================================================================
   The capstone job — one plant, seven stages, one record.

   The tools each teach one thing. A job is all of them in order: pipe the
   circuit, pressure test it, evacuate it, charge it, commission it and
   record the healthy readings, come back six months later to a fault, and
   fix the electrics when it stops altogether. This module holds the script
   of that job and the record of how it went. Each stage opens the tool that
   does that work with a `capstone=<stage>` parameter; when the tool finishes
   the job it reports the stage complete here, and the learner is pointed
   back to the next one.

   Loaded as a plain script (exposes `RefrigCapstone`) and require()-able in
   Node for the test suite; storage is guarded so the pure parts run without
   a browser.
   ========================================================================= */
(function (root) {
  "use strict";

  const KEY = "refrigSim.capstone";

  const STAGES = [
    {
      id: "build", n: 1, title: "Pipe the circuit", tool: "builder",
      href: "build.html?capstone=build", scenario: "commercial",
      brief: "A new walk-in cool room for a butcher: a single medium-temperature condensing unit, one evaporator, pump-down control. Pipe the circuit to the brief — every accessory in the run where it does its work.",
      done: "Correct circuit, to the brief.",
      units: ["UEERA0050", "UEERA0081", "UEECD0051"],
    },
    {
      id: "pressureTest", n: 2, title: "Pressure test the installation", tool: "procedures",
      href: "procedures.html?p=pressureTest&capstone=pressureTest", scenario: "commissioning",
      brief: "The pipework is in and brazed. Leak-tightness test it with OFN before a gram of refrigerant goes in: the right medium, the right pressure for the nameplate, in stages, isolated and recorded, held for the full duration, temperature-corrected.",
      done: "Test held and declared correctly.",
      units: ["UEERA0094", "UEERA0062", "UEERA0059"],
    },
    {
      id: "evacuation", n: 3, title: "Evacuate", tool: "procedures",
      href: "procedures.html?p=evacuation&capstone=evacuation", scenario: "dry",
      brief: "Tight. Now evacuate it: dedicated hoses, a micron gauge at the system, 500 microns, the pump isolated, an hour under 600.",
      done: "Dry and tight, declared from the micron gauge.",
      units: ["UEERA0062", "UEERA0053"],
    },
    {
      id: "charge", n: 4, title: "Charge it", tool: "procedures",
      href: "procedures.html?p=recoverCharge&capstone=charge", scenario: "r404a",
      brief: "Charge to the nameplate mass — as liquid, it is a blend — after the hose has been leak-checked, and record it. (The recovery half of this trainer is the same job run backwards; do it too.)",
      done: "Charged to mass and recorded.",
      units: ["UEERA0062", "UEERA0079"],
    },
    {
      id: "commission", n: 5, title: "Commission and record the healthy readings", tool: "diagnose",
      href: "diagnose.html?capstone=commission", scenario: "none",
      brief: "Running. Fit the instruments a commissioning sheet needs — both gauges, evaporator outlet, liquid line, air on to both coils — read superheat, subcooling and condenser TD, and confirm the plant is healthy. Being willing to say so is the point.",
      done: "Declared healthy from the readings.",
      units: ["UEERA0036", "UEERA0053", "UEERA0094"],
    },
    {
      id: "callback", n: 6, title: "The call-back", tool: "diagnose",
      href: "diagnose.html?capstone=callback", scenario: "hidden",
      brief: "Six months later: \"it's not holding temperature\". Nothing has been measured. Decide what to measure, work the numbers, commit to the fault — and compare with the commissioning readings you recorded.",
      done: "Fault diagnosed.",
      units: ["UEERA0036", "UEERA0031", "UEERA0053"],
    },
    {
      id: "electrical", n: 7, title: "It has stopped altogether", tool: "control",
      href: "electrical.html?capstone=electrical", scenario: "hidden",
      brief: "A year on, the unit is dead. Ladder diagram, meter, safe isolation. Look before you measure; isolate before anything on ohms.",
      done: "Electrical fault found, safely.",
      units: ["UEERA0031", "UEERA0044", "UEERA0092"],
    },
  ];

  function blank() { return { startedAt: null, stages: {} }; }

  function load() {
    try {
      if (typeof localStorage === "undefined") return blank();
      const d = JSON.parse(localStorage.getItem(KEY) || "null");
      return d && typeof d.stages === "object" ? d : blank();
    } catch (e) { return blank(); }
  }
  function save(d) {
    try { if (typeof localStorage !== "undefined") localStorage.setItem(KEY, JSON.stringify(d)); }
    catch (e) { /* storage unavailable */ }
  }

  const byId = (id) => STAGES.find(s => s.id === id) || null;

  /* Pure: the job's status for a stored record. */
  function statusOf(d) {
    const rec = d || blank();
    const stages = STAGES.map(st => {
      const r = rec.stages[st.id];
      return Object.assign({}, st, { complete: !!r, score: r ? r.score : null, at: r ? r.at : null, detail: r ? r.detail : null });
    });
    const done = stages.filter(s => s.complete).length;
    const scored = stages.filter(s => s.complete);
    const score = scored.length ? scored.reduce((n, s) => n + s.score, 0) / STAGES.length : 0;
    const next = stages.find(s => !s.complete) || null;
    return { stages, done, total: STAGES.length, complete: done === STAGES.length, score, next, startedAt: rec.startedAt };
  }

  const status = () => statusOf(load());

  /* A tool reports a stage finished. Best score is kept if repeated. */
  function complete(stageId, result) {
    const st = byId(stageId);
    if (!st) return null;
    const d = load();
    if (!d.startedAt) d.startedAt = new Date().toISOString();
    const prev = d.stages[stageId];
    const score = Math.max(0, Math.min(1, Number(result && result.score) || 0));
    if (!prev || score >= prev.score) {
      d.stages[stageId] = { score, at: new Date().toISOString(), detail: (result && result.detail) || null };
    }
    save(d);
    const s = statusOf(d);
    /* The whole job done is one piece of evidence in its own right. */
    if (s.complete && !d.recorded && root.RefrigEvidence) {
      d.recorded = true; save(d);
      root.RefrigEvidence.record({ tool: "capstone", score: s.score,
        units: [...new Set(STAGES.flatMap(x => x.units))],
        detail: { stages: STAGES.map(x => ({ id: x.id, score: d.stages[x.id].score })) } });
    }
    return s;
  }

  function reset() { save(blank()); }

  /* Which stage a tool page was opened for, from its query string. */
  function stageFromLocation(search) {
    try {
      const q = new URLSearchParams(search || (typeof location !== "undefined" ? location.search : ""));
      return byId(q.get("capstone"));
    } catch (e) { return null; }
  }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  /* The banner a tool shows while it is running a capstone stage. */
  function introHtml(stage) {
    return `<div class="quiz-feedback good capstone-intro"><p><b>Capstone job · stage ${stage.n} of ${STAGES.length}: ${esc(stage.title)}.</b> ${esc(stage.brief)}</p>
      <p><a href="capstone.html">Back to the job overview</a></p></div>`;
  }

  /* The banner a tool shows once the stage is recorded. */
  function doneHtml(stage, s) {
    const next = s && s.next;
    return `<div class="quiz-feedback good capstone-done"><p><b>Stage ${stage.n} recorded: ${esc(stage.done)}</b> ${s ? `${s.done} of ${s.total} stages done.` : ""}</p>
      <p>${next ? `<a class="btn btn-tour" href="${esc(next.href)}">Next: ${esc(next.title)} →</a> ` : `<a class="btn btn-tour" href="capstone.html">The job is complete — see the record →</a> `}<a class="btn btn-ghost" href="capstone.html">Job overview</a></p></div>`;
  }

  const api = { KEY, STAGES, byId, load, save, statusOf, status, complete, reset, stageFromLocation, introHtml, doneHtml };
  root.RefrigCapstone = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
