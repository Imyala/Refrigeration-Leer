/* =========================================================================
   Technician mode — the fault-diagnosis quiz.

   A random fault (occasionally none), refrigerant and operating point are
   applied secretly: the fault selector, banner, performance panel and the
   warning pulses on the schematic are hidden, so the learner must read the
   gauges, temperatures, superheat/subcool and the P–h cycle like a tech in
   the field, then name the fault. Exact answer = 1 point; a fault from the
   same signature "family" = half credit with a tip on telling them apart.
   Browser-only; relies on state/refreshAll from app.js at call time.
   ========================================================================= */
"use strict";

const Quiz = { active: false, answered: false, fault: null, count: 0, score: 0, streak: 0, level: 2 };

/* Three rungs. Level 1 keeps to faults with a signature of their own, at
   rated conditions, on the two textbook fluids; level 2 is the whole library
   at a random operating point; level 3 is only the look-alikes — the faults
   that share a gauge picture with another — so the half-marks have to be
   earned back by reading the machine, not the needles. */
const QUIZ_LEVELS = {
  1: { label: "Level 1 — clear signatures, rated conditions" },
  2: { label: "Level 2 — any fault, any operating point" },
  3: { label: "Level 3 — look-alike faults only" },
};
const QUIZ_LEVEL_KEY = "refrigSim.quizLevel";
function quizLoadLevel() {
  try { const v = parseInt(localStorage.getItem(QUIZ_LEVEL_KEY), 10); if (QUIZ_LEVELS[v]) Quiz.level = v; } catch (e) { /* ignore */ }
}
function quizSetLevel(v) {
  if (!QUIZ_LEVELS[v]) return;
  Quiz.level = v;
  try { localStorage.setItem(QUIZ_LEVEL_KEY, String(v)); } catch (e) { /* ignore */ }
}
function quizPool() {
  const all = Object.keys(RefrigData.FAULTS).filter(k => k !== "none" && faultAvailable(k));
  if (Quiz.level === 1) return all.filter(k => !RefrigData.FAULTS[k].family);
  if (Quiz.level === 3) return all.filter(k => RefrigData.FAULTS[k].family);
  return all;
}

const QUIZ_FAMILY_HINTS = {
  "cond-airflow": "A dirty coil and a failed fan give nearly the same gauge picture — in the field, look and listen: is the fan actually spinning, and is the coil matted with dirt?",
  "feed-restriction": "A restricted drier and a starved TXV look almost identical on the gauges — feel where the temperature drop happens: across the drier means the drier; at the valve means the TXV.",
};
const QUIZ_PREVENT_SCROLL_FOCUS = (() => {
  let supported = false;
  try {
    const probe = document.createElement("button");
    probe.focus(Object.defineProperty({}, "preventScroll", {
      get() { supported = true; return true; }
    }));
  } catch (e) { /* old browsers ignore this option */ }
  return supported;
})();

function quizFocusSoon(el) {
  if (!el) return;
  requestAnimationFrame(() => {
    // Wait one extra frame so freshly-rendered options/buttons are focusable.
    requestAnimationFrame(() => {
      if (QUIZ_PREVENT_SCROLL_FOCUS) el.focus({ preventScroll: true });
      else el.focus();
    });
  });
}

function quizSetControlsDisabled(disabled) {
  ["refrigerantSelect", "tourBtn", "powerBtn"].forEach(id => {
    document.getElementById(id).disabled = disabled;
  });
}

/* The quiz is a mode of the simulator, not a page of its own — but it is
   entered from the practice switcher as if it were one. Keep the URL and that
   switcher in step so the highlighted tool, a reload and the Back button all
   agree about which of the two you are in. */
function quizSyncLocation(active) {
  try {
    const url = new URL(location.href);
    if (active) url.searchParams.set("quiz", "1");
    else url.searchParams.delete("quiz");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  } catch (e) { /* no history API (file://) — the switcher below still updates */ }
  const sim = document.querySelector('.toolstrip-links a[data-tool="sim"]');
  const quiz = document.querySelector('.toolstrip-links a[data-tool="quiz"]');
  if (!sim || !quiz) return;
  (active ? quiz : sim).setAttribute("aria-current", "page");
  (active ? sim : quiz).removeAttribute("aria-current");
}

function startQuiz() {
  quizLoadLevel();
  const lvlSel = document.getElementById("quizLevel");
  if (lvlSel) {
    lvlSel.innerHTML = Object.entries(QUIZ_LEVELS).map(([k, l]) => `<option value="${k}">${l.label}</option>`).join("");
    lvlSel.value = String(Quiz.level);
  }
  Quiz.active = true;
  Quiz.count = 0; Quiz.score = 0; Quiz.streak = 0;
  document.body.classList.add("quiz-active");
  document.getElementById("quizPanel").hidden = false;
  quizSyncLocation(true);
  quizSetControlsDisabled(true);
  if (!state.running) setRunning(true);
  quizNextScenario();
  document.getElementById("quizPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
  quizFocusSoon(document.querySelector("#quizOptions .quiz-opt"));
}

function endQuiz() {
  Quiz.active = false;
  Quiz.answered = false;
  document.body.classList.remove("quiz-active");
  document.getElementById("quizPanel").hidden = true;
  quizSyncLocation(false);
  quizSetControlsDisabled(false);
  // back to a clean healthy state
  state.fault = "none"; state.speed = 100; state.load = 100;
  document.getElementById("faultSelect").value = "none";
  quizSyncSliders();
  refreshAll();
}

function quizSyncSliders() {
  document.getElementById("speedSlider").value = state.speed;
  document.getElementById("loadSlider").value = state.load;
  document.getElementById("speedOut").textContent = state.speed + "%";
  document.getElementById("loadOut").textContent = state.load + "%";
}

function quizNextScenario() {
  // Only faults this circuit could actually have: a stuck liquid-line solenoid
  // is not a fair answer on a system that was never drawn with one.
  const lvlSel = document.getElementById("quizLevel");
  if (lvlSel && QUIZ_LEVELS[parseInt(lvlSel.value, 10)]) quizSetLevel(parseInt(lvlSel.value, 10));
  const faultKeys = quizPool();
  Quiz.fault = Math.random() < (Quiz.level === 3 ? 0.1 : 0.14) ? "none" : faultKeys[Math.floor(Math.random() * faultKeys.length)];
  Quiz.answered = false;
  Quiz.count += 1;

  const refKeys = Quiz.level === 1 ? ["R134a", "R410A"] : Object.keys(RefrigData.REFRIGERANTS);
  state.refrigerant = refKeys[Math.floor(Math.random() * refKeys.length)];
  document.getElementById("refrigerantSelect").value = state.refrigerant;
  if (Quiz.level === 1) { state.speed = 100; state.load = 100; }
  else {
    state.speed = 60 + 5 * Math.floor(Math.random() * 17);   // 60..140 %
    state.load  = 60 + 5 * Math.floor(Math.random() * 17);
  }
  state.fault = Quiz.fault;
  quizSyncSliders();

  document.getElementById("quizScenario").textContent =
    `Scenario ${Quiz.count} (${QUIZ_LEVELS[Quiz.level].label.split(" — ")[0]}) — ${RefrigCircuits.CIRCUITS[state.circuit].label}, ` +
    `${RefrigData.REFRIGERANTS[state.refrigerant].label} · ` +
    `compressor at ${state.speed}% · load ${state.load}%. ` +
    `Read the gauges, temperatures, superheat/subcool and the P–h cycle, then pick the fault.`;

  document.getElementById("quizClues").hidden = true;
  document.getElementById("quizFeedback").hidden = true;
  document.getElementById("quizNextBtn").hidden = true;
  document.getElementById("quizHintBtn").hidden = false;
  quizRenderOptions();
  quizRenderScore();
  refreshAll();
}

function quizRenderOptions() {
  const wrap = document.getElementById("quizOptions");
  wrap.innerHTML = "";
  Object.entries(RefrigData.FAULTS).filter(([key]) => faultAvailable(key)).forEach(([key, f]) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "quiz-opt";
    b.dataset.key = key;
    b.textContent = f.label;
    b.addEventListener("click", () => quizAnswer(key));
    wrap.appendChild(b);
  });
}

function quizShowClues() {
  const f = RefrigData.FAULTS[Quiz.fault];
  const el = document.getElementById("quizClues");
  el.innerHTML = `<b>Field clues for this system:</b><ul>${f.clues.map(c => `<li>${c}</li>`).join("")}</ul>`;
  el.hidden = false;
}

function quizRenderScore() {
  document.getElementById("quizScore").textContent =
    `Score ${Quiz.score} / ${Quiz.count} · streak ${Quiz.streak}`;
}

function quizAnswer(key) {
  if (Quiz.answered) return;
  Quiz.answered = true;

  const fActual = RefrigData.FAULTS[Quiz.fault];
  const fPicked = RefrigData.FAULTS[key];
  const exact  = key === Quiz.fault;
  const family = !exact && fActual.family != null && fActual.family === fPicked.family;
  Quiz.score += exact ? 1 : family ? 0.5 : 0;
  Quiz.streak = exact ? Quiz.streak + 1 : 0;
  if (typeof RefrigEvidence !== "undefined") {
    RefrigEvidence.record({ tool: "quiz", score: exact ? 1 : family ? 0.5 : 0,
      detail: { fault: Quiz.fault, answer: key, level: Quiz.level, refrigerant: state.refrigerant } });
  }

  document.querySelectorAll("#quizOptions .quiz-opt").forEach(b => {
    b.disabled = true;
    if (b.dataset.key === Quiz.fault) b.classList.add("correct");
    else if (b.dataset.key === key) b.classList.add(family ? "partial" : "wrong");
  });

  // Feed the spaced-repetition deck shared with the Learn course: a missed
  // fault (including a same-family near-miss) resurfaces as a written
  // scenario card tomorrow; an exact diagnosis pushes an existing card out.
  let deckNote = "";
  if (Quiz.fault !== "none") {
    try {
      const KEY = "refrigSim.srs";
      const cards = JSON.parse(localStorage.getItem(KEY) || "{}");
      const cardKey = "fault/" + Quiz.fault;
      if (!exact) {
        cards[cardKey] = RefrigSrs.grade(cards[cardKey], false, Date.now());
        deckNote = `<p><span class="ico ico-repeat" aria-hidden="true"></span> Added to your <a href="learn.html#practice">Practice deck</a> — this one will resurface tomorrow so it sticks.</p>`;
      } else if (cards[cardKey]) {
        cards[cardKey] = RefrigSrs.grade(cards[cardKey], true, Date.now());
        deckNote = `<p><span class="ico ico-repeat" aria-hidden="true"></span> You'd missed this one before — nailing it now pushes its next review ${RefrigSrs.describeWhen(cards[cardKey].due, Date.now())}.</p>`;
      }
      localStorage.setItem(KEY, JSON.stringify(cards));
    } catch (e) { /* storage unavailable */ }
  }

  const verdict = exact
    ? `<b class="good">Correct!</b>`
    : family
      ? `<b class="part">Close — half credit.</b> ${QUIZ_FAMILY_HINTS[fActual.family] || ""}`
      : `<b class="part">Good attempt — it was <i>${fActual.label}</i>.</b> Every miss in here is one you won't make on a real job; here's how to spot it next time:`;
  const diag = fActual.diag
    ? `<p>${fActual.diag}</p>`
    : `<p>The system was healthy — every reading sat where the PT relationship says it should. Always verify before condemning a part.</p>`;
  const fb = document.getElementById("quizFeedback");
  fb.innerHTML = `${verdict}${diag}<p><b>Field clues you'd look for:</b> ${fActual.clues.join(" · ")}</p>${deckNote}`;
  fb.className = "quiz-feedback " + (exact ? "good" : family ? "partial" : "bad");
  fb.hidden = false;

  document.getElementById("quizNextBtn").hidden = false;
  document.getElementById("quizHintBtn").hidden = true;
  quizRenderScore();
  renderFaultViz();   // reveal the warning pulses now that it's answered
  quizFocusSoon(document.getElementById("quizNextBtn"));
}
