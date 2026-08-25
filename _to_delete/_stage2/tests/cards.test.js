const test = require("node:test");
const assert = require("node:assert");
const C = require("../js/cards.js");
const D = require("../js/data.js");
const COURSE = [...require("../js/course1.js"), ...require("../js/course2.js")];

test("every fault (except healthy) has a scenario card with the right answer", () => {
  const faultKeys = Object.keys(D.FAULTS).filter(k => k !== "none");
  for (const key of faultKeys) {
    const card = C.FAULT_CARDS[key];
    assert.ok(card, `card for ${key}`);
    assert.ok(card.q.length > 60, `${key}: substantive scenario`);
    assert.strictEqual(card.options.length, 4, `${key}: four options`);
    assert.strictEqual(card.options[card.answer], D.FAULTS[key].label, `${key}: answer is the fault's label`);
    assert.strictEqual(new Set(card.options).size, 4, `${key}: options unique`);
    assert.ok(card.explain, `${key}: explanation (diagnosis)`);
  }
  assert.ok(!C.FAULT_CARDS.none, "no card for the healthy state");
});

test("same-family faults appear as distractors for each other", () => {
  // dirty condenser vs failed fan, restricted drier vs stuck-closed TXV
  assert.ok(C.FAULT_CARDS.dirtyCondenser.options.includes(D.FAULTS.condFanFail.label));
  assert.ok(C.FAULT_CARDS.condFanFail.options.includes(D.FAULTS.dirtyCondenser.label));
  assert.ok(C.FAULT_CARDS.restrictedDrier.options.includes(D.FAULTS.txvStuckClosed.label));
});

test("recall cards are well-formed and tied to real lessons", () => {
  const lessonHashes = new Set();
  COURSE.forEach(mod => mod.lessons.forEach(les => lessonHashes.add(mod.id + "/" + les.id)));
  const ids = Object.keys(C.RECALL_CARDS);
  assert.ok(ids.length >= 5, `recall cards: ${ids.length}`);
  for (const id of ids) {
    const c = C.RECALL_CARDS[id];
    assert.strictEqual(c.type, "input", `${id}: typed card`);
    assert.ok(lessonHashes.has(c.lesson), `${id}: lesson exists (${c.lesson})`);
    assert.ok(Number.isFinite(c.answer), `${id}: numeric answer`);
    assert.ok(c.tolerance >= 0, `${id}: tolerance`);
    assert.ok(c.explain && c.q, `${id}: question and explanation`);
  }
});

test("recall card arithmetic is actually correct", () => {
  assert.strictEqual(C.RECALL_CARDS["sh-basic"].answer, 12 - 5);
  assert.strictEqual(C.RECALL_CARDS["sc-basic"].answer, 56 - 47);
  assert.strictEqual(C.RECALL_CARDS["abs-pressure"].answer, 350 + 101);
  assert.strictEqual(C.RECALL_CARDS["gauge-pressure"].answer, 701 - 101);
  assert.strictEqual(C.RECALL_CARDS["cylinder-fill"].answer, 40 * 0.8);
  assert.strictEqual(C.RECALL_CARDS["cop-calc"].answer, 120 / 40);
});
