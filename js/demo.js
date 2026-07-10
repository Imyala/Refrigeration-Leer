/* =========================================================================
   Demo data: a synthetic sample cohort for the instructor dashboard, so
   prospects and new instructors can see the cohort view without real
   student files. Pure function — loaded as a plain script (exposes
   `RefrigDemo`) and require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  const SAMPLE_NAMES = [
    "Alex Nguyen", "Priya Sharma", "Jack O'Brien",
    "Mia Chen", "Tom Williams", "Sofia Rossi",
  ];

  /* Students are spread across the course: the first has barely started,
     the last has finished everything and passed the exam. `rand` is
     injectable for deterministic tests. */
  function buildSampleCohort(course, rand) {
    const rng = rand || Math.random;
    const totalLessons = course.reduce((n, m) => n + m.lessons.length, 0);

    return SAMPLE_NAMES.map((name, i) => {
      const frac = (i + 1) / SAMPLE_NAMES.length;
      const target = Math.max(1, Math.round(totalLessons * frac));
      const progress = {};
      let done = 0;

      outer:
      for (const mod of course) {
        for (const les of mod.lessons) {
          if (done >= target) break outer;
          const total = les.quiz.length;
          const best = rng() < 0.75 ? total : Math.max(2, total - 1);
          progress[mod.id + "/" + les.id] = { done: true, best, total };
          done++;
        }
      }

      if (frac === 1) {
        progress["exam/final"] = { done: true, best: 17 + Math.floor(rng() * 4), total: 20 };
      } else if (frac > 0.8) {
        progress["exam/final"] = { done: false, best: 10 + Math.floor(rng() * 5), total: 20 };
      }

      const day = 1 + Math.floor(rng() * 9);
      return {
        format: "refrig-progress-v1",
        name,
        exported: `2026-07-0${day}T00:00:00Z`,
        progress,
      };
    });
  }

  const api = { buildSampleCohort, SAMPLE_NAMES };
  root.RefrigDemo = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
