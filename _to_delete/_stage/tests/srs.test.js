const test = require("node:test");
const assert = require("node:assert");
const S = require("../js/srs.js");

const NOW = 1_800_000_000_000; // fixed reference time
const DAY = S.DAY;

test("first correct answer schedules for tomorrow, second for three days", () => {
  const first = S.grade(undefined, true, NOW);
  assert.strictEqual(first.int, 1);
  assert.strictEqual(first.due, NOW + DAY);
  const second = S.grade(first, true, NOW + DAY);
  assert.strictEqual(second.int, 3);
  assert.strictEqual(second.due, NOW + DAY + 3 * DAY);
});

test("intervals grow by the ease factor after the learning steps", () => {
  let c = S.grade(undefined, true, NOW);        // 1 day
  c = S.grade(c, true, NOW);                    // 3 days
  c = S.grade(c, true, NOW);                    // 3 * 2.5 ≈ 8
  assert.strictEqual(c.int, 8);
  c = S.grade(c, true, NOW);                    // 8 * 2.5 = 20
  assert.strictEqual(c.int, 20);
});

test("a wrong answer brings the card back tomorrow and lowers ease", () => {
  let c = S.grade(undefined, true, NOW);
  c = S.grade(c, true, NOW);
  c = S.grade(c, true, NOW);                    // interval 8
  const lapsed = S.grade(c, false, NOW);
  assert.strictEqual(lapsed.int, 1);
  assert.strictEqual(lapsed.due, NOW + DAY);
  assert.strictEqual(lapsed.lapses, 1);
  assert.ok(lapsed.ease < c.ease, "ease reduced");
});

test("ease never drops below the floor; interval never exceeds the cap", () => {
  let c = S.newCard(NOW);
  for (let i = 0; i < 20; i++) c = S.grade(c, false, NOW);
  assert.strictEqual(c.ease, S.MIN_EASE);
  for (let i = 0; i < 30; i++) c = S.grade(c, true, NOW);
  assert.ok(c.int <= S.MAX_INTERVAL_DAYS, `interval capped (got ${c.int})`);
});

test("dueKeys returns overdue cards soonest-first; aheadKeys the opposite side", () => {
  const cards = {
    a: { ...S.newCard(NOW), due: NOW - 2 * DAY },
    b: { ...S.newCard(NOW), due: NOW - 5 * DAY },
    c: { ...S.newCard(NOW), due: NOW + DAY },
    d: { ...S.newCard(NOW), due: NOW + 3 * DAY },
  };
  assert.deepStrictEqual(S.dueKeys(cards, NOW), ["b", "a"]);
  assert.deepStrictEqual(S.aheadKeys(cards, NOW, 10), ["c", "d"]);
  assert.strictEqual(S.nextDue(cards, NOW), NOW + DAY);
});

test("describeWhen gives human-friendly horizons", () => {
  assert.strictEqual(S.describeWhen(NOW + DAY, NOW), "tomorrow");
  assert.strictEqual(S.describeWhen(NOW + 3 * DAY, NOW), "in 3 days");
  assert.match(S.describeWhen(NOW + 14 * DAY, NOW), /week/);
  assert.match(S.describeWhen(NOW + 60 * DAY, NOW), /month/);
});
