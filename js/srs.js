/* =========================================================================
   Spaced-repetition scheduler (simplified SM-2, the Anki family).

   Each quiz question the learner has met becomes a card. Answering it
   correctly pushes the next review further out (1 day → 3 days → interval ×
   ease); answering incorrectly brings it back tomorrow and slightly lowers
   the card's ease. Reviewing just before forgetting is what turns
   familiarity into durable knowledge.

   Pure functions — loaded as a plain script (exposes `RefrigSrs`) and
   require()-able in Node for the test suite. Time is passed in explicitly.
   ========================================================================= */
(function (root) {
  "use strict";

  const DAY = 86400000;
  const START_EASE = 2.5;
  const MIN_EASE = 1.3;
  const MAX_INTERVAL_DAYS = 180;

  function newCard(now) {
    return { ease: START_EASE, int: 0, due: now, reps: 0, lapses: 0 };
  }

  /* Grade one answer and return the card's new state. */
  function grade(card, correct, now) {
    const c = Object.assign({}, card || newCard(now));
    if (correct) {
      c.reps += 1;
      if (c.int <= 0) c.int = 1;                                   // first success → tomorrow
      else if (c.int === 1) c.int = 3;                             // then 3 days
      else c.int = Math.min(MAX_INTERVAL_DAYS, Math.round(c.int * c.ease));
      c.due = now + c.int * DAY;
    } else {
      c.lapses += 1;
      c.ease = Math.max(MIN_EASE, Math.round((c.ease - 0.2) * 100) / 100);
      c.int = 1;                                                   // back to tomorrow
      c.due = now + DAY;
    }
    return c;
  }

  const isDue = (card, now) => !!card && card.due <= now;

  /* Keys due for review now, soonest-overdue first. */
  function dueKeys(cards, now) {
    return Object.keys(cards)
      .filter(k => isDue(cards[k], now))
      .sort((a, b) => cards[a].due - cards[b].due);
  }

  /* Review-ahead: not-yet-due keys, soonest first (for "practice anyway"). */
  function aheadKeys(cards, now, limit) {
    return Object.keys(cards)
      .filter(k => cards[k].due > now)
      .sort((a, b) => cards[a].due - cards[b].due)
      .slice(0, limit || 10);
  }

  /* Timestamp of the next future review, or null. */
  function nextDue(cards, now) {
    let best = null;
    for (const c of Object.values(cards)) {
      if (c.due > now && (best === null || c.due < best)) best = c.due;
    }
    return best;
  }

  /* Human description of when `ts` falls relative to `now`. */
  function describeWhen(ts, now) {
    const days = Math.ceil((ts - now) / DAY);
    if (days <= 0) return "now";
    if (days === 1) return "tomorrow";
    if (days < 7) return `in ${days} days`;
    if (days < 28) return `in about ${Math.round(days / 7)} week${days >= 11 ? "s" : ""}`;
    return `in about ${Math.round(days / 30)} month${days >= 45 ? "s" : ""}`;
  }

  const api = { DAY, START_EASE, MIN_EASE, MAX_INTERVAL_DAYS, newCard, grade, isDue, dueKeys, aheadKeys, nextDue, describeWhen };
  root.RefrigSrs = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
