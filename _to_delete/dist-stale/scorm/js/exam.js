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
        q: q.q, options: q.options, answer: q.answer, explain: q.explain, module: mod.title,
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

  const api = { pickExamQuestions, certificateCode };
  root.RefrigExam = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
