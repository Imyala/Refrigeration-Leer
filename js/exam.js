/* =========================================================================
   Final exam helpers: question sampling from the course bank and the
   certificate integrity code. Pure functions — loaded as a plain script
   (exposes `RefrigExam`) and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  /* Draw `perModule` random questions from every module's lesson quizzes.
     `rand` is injectable for deterministic tests. */
  function pickExamQuestions(course, perModule, rand) {
    const rng = rand || Math.random;
    const picked = [];
    course.forEach(mod => {
      const pool = [];
      mod.lessons.forEach(les => les.quiz.forEach(q => pool.push({
        q: q.q, options: q.options, answer: q.answer, explain: q.explain, module: mod.title, moduleId: mod.id,
      })));
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      picked.push(...pool.slice(0, Math.min(perModule, pool.length)));
    });
    return picked;
  }

  /* Deterministic integrity code printed on certificates: re-generating a
     certificate with the same name, score and date reproduces the same ID,
     so an instructor can spot-check a printout. Not cryptographic — evidence
     of completion, not a credential. */
  function certificateCode(text) {
    let h1 = 5381, h2 = 52711;
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i);
      h1 = (Math.imul(h1, 33) ^ c) >>> 0;
      h2 = (Math.imul(h2, 37) ^ c) >>> 0;
    }
    return (h1.toString(16).padStart(8, "0") + h2.toString(16).padStart(8, "0")).toUpperCase();
  }

  /* ---- Placement -----------------------------------------------------------
     A short paper across a stream's modules, read per module: every question
     right means the module is probably known and can be tested out of at the
     exam; some right means revise; none right means start there. The verdict
     is a recommendation — it marks nothing complete. `answers[i]` is the
     option index chosen for `questions[i]`, or null. */
  function placementReport(modules, questions, answers) {
    const per = {};
    (modules || []).forEach(m => { per[m.id] = { id: m.id, title: m.title, correct: 0, total: 0 }; });
    (questions || []).forEach((q, i) => {
      const m = per[q.moduleId]; if (!m) return;
      m.total += 1;
      if (answers && answers[i] === q.answer) m.correct += 1;
    });
    const list = Object.values(per).map(m => Object.assign(m, {
      verdict: !m.total ? "start" : m.correct === m.total ? "known" : m.correct > 0 ? "revise" : "start",
    }));
    const count = (v) => list.filter(m => m.verdict === v).length;
    const score = list.reduce((n, m) => n + m.correct, 0), total = list.reduce((n, m) => n + m.total, 0);
    return { modules: list, known: count("known"), revise: count("revise"), start: count("start"), score, total,
      at: new Date().toISOString() };
  }

  const api = { pickExamQuestions, certificateCode, placementReport };
  root.RefrigExam = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
