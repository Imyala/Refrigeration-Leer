/* =========================================================================
   Learn — the course UI. Hash-routed views (home / module / lesson),
   markdown-rendered lesson content, per-lesson quizzes, and progress
   persisted in localStorage. Browser-only.
   ========================================================================= */
"use strict";

/* ---- Progress store -------------------------------------------------------- */
const Progress = {
  KEY: "refrigSim.progress",
  data: {},
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY) || "{}"); }
    catch (e) { this.data = {}; }
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); }
    catch (e) { /* storage unavailable */ }
  },
  get(modId, lesId) { return this.data[modId + "/" + lesId]; },
  record(modId, lesId, score, total) {
    const key = modId + "/" + lesId;
    const prev = this.data[key] || {};
    const done = prev.done || score >= Math.ceil(total * 2 / 3);
    const best = Math.max(prev.best || 0, score);
    this.data[key] = { done, best, total };
    this.save();
  },
};

const lessonDone = (mod, les) => !!(Progress.get(mod.id, les.id) || {}).done;
const moduleDoneCount = (mod) => mod.lessons.filter(l => lessonDone(mod, l)).length;
const totalLessons = () => COURSE.reduce((n, m) => n + m.lessons.length, 0);
const totalDone = () => COURSE.reduce((n, m) => n + moduleDoneCount(m), 0);

/* ---- Flat lesson order for prev/next navigation ---------------------------- */
const FLAT = [];
function buildFlat() {
  COURSE.forEach(mod => mod.lessons.forEach(les => FLAT.push({ mod, les })));
}
function flatIndex(mod, les) {
  return FLAT.findIndex(f => f.mod.id === mod.id && f.les.id === les.id);
}

/* ---- Routing ---------------------------------------------------------------- */
function parseHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  const [m, l] = h.split("/");
  return { m, l };
}

function route() {
  const { m, l } = parseHash();
  const mod = COURSE.find(x => x.id === m);
  if (!mod) renderHome();
  else {
    const les = l && mod.lessons.find(x => x.id === l);
    if (les) renderLesson(mod, les);
    else renderModule(mod);
  }
  renderSidebar();
  window.scrollTo(0, 0);
}

/* ---- Sidebar ---------------------------------------------------------------- */
function renderSidebar() {
  const { m } = parseHash();
  const nav = document.getElementById("courseNav");
  const overall = `${totalDone()}/${totalLessons()}`;
  nav.innerHTML = `
    <a class="nav-home ${!m ? "active" : ""}" href="#">
      <span>Course overview</span><span class="nav-count">${overall}</span>
    </a>
    ${COURSE.map(mod => {
      const done = moduleDoneCount(mod);
      const all = done === mod.lessons.length;
      return `<a class="nav-mod ${m === mod.id ? "active" : ""}" href="#${mod.id}">
        <span>${mod.title}</span>
        <span class="nav-count ${all ? "all" : ""}">${all ? "✓" : done + "/" + mod.lessons.length}</span>
      </a>`;
    }).join("")}`;
}

/* ---- Views ------------------------------------------------------------------ */
function renderHome() {
  const main = document.getElementById("learnMain");
  const done = totalDone(), total = totalLessons();
  const pct = Math.round(done / total * 100);
  main.innerHTML = `
    <div class="learn-hero">
      <h2>Refrigeration: from first principles to the toolbag</h2>
      <p>A structured course in how refrigeration systems work, how to read their
      gauges, how to diagnose their faults and how to repair them — built around
      the interactive simulator. Work through the modules in order, or jump to
      what you need. Each lesson ends with a short quiz; pass it to mark the
      lesson complete.</p>
      <div class="progress-line">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span>${done} of ${total} lessons complete (${pct}%)</span>
      </div>
    </div>
    <div class="module-grid">
      ${COURSE.map(mod => {
        const mdone = moduleDoneCount(mod);
        const mpct = Math.round(mdone / mod.lessons.length * 100);
        return `<a class="module-card" href="#${mod.id}">
          <h3>${mod.title}</h3>
          <p>${mod.blurb}</p>
          <div class="progress-bar small"><div class="progress-fill" style="width:${mpct}%"></div></div>
          <span class="module-meta">${mod.lessons.length} lessons · ${mdone} complete</span>
        </a>`;
      }).join("")}
    </div>`;
}

function renderModule(mod) {
  const main = document.getElementById("learnMain");
  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> › <span>${mod.title}</span></div>
    <h2>${mod.title}</h2>
    <p class="module-blurb">${mod.blurb}</p>
    <div class="lesson-list">
      ${mod.lessons.map((les, i) => {
        const done = lessonDone(mod, les);
        return `<a class="lesson-row ${done ? "done" : ""}" href="#${mod.id}/${les.id}">
          <span class="lesson-num">${done ? "✓" : i + 1}</span>
          <span class="lesson-title">${les.title}</span>
          <span class="lesson-mins">~${les.minutes} min</span>
        </a>`;
      }).join("")}
    </div>`;
}

function renderLesson(mod, les) {
  const main = document.getElementById("learnMain");
  const idx = flatIndex(mod, les);
  const prev = FLAT[idx - 1], next = FLAT[idx + 1];
  const p = Progress.get(mod.id, les.id);

  main.innerHTML = `
    <div class="crumbs">
      <a href="#">Course</a> › <a href="#${mod.id}">${mod.title}</a> › <span>${les.title}</span>
    </div>
    <div class="lesson-head">
      <h2>${les.title}</h2>
      <span class="lesson-mins">~${les.minutes} min ${lessonDone(mod, les) ? " · <b class=\"done-tag\">completed ✓</b>" : ""}</span>
    </div>
    <article class="lesson-content">${RefrigMd.render(les.content)}</article>
    <section class="lesson-quiz" aria-label="Lesson quiz">
      <h3>Check your understanding</h3>
      ${p && p.done ? `<p class="quiz-status">Completed — best score ${p.best}/${p.total}. Retake it any time.</p>` : ""}
      <div id="lessonQuiz">${renderQuizHtml(les)}</div>
      <div class="quiz-controls">
        <button id="quizCheckBtn" class="btn btn-tour" type="button">Check answers</button>
        <span id="quizResult" class="quiz-result"></span>
      </div>
    </section>
    <nav class="lesson-nav">
      ${prev ? `<a class="btn btn-ghost" href="#${prev.mod.id}/${prev.les.id}">← ${prev.les.title}</a>` : "<span></span>"}
      ${next ? `<a class="btn btn-tour" href="#${next.mod.id}/${next.les.id}">${next.les.title} →</a>`
             : `<a class="btn btn-tour" href="#">Back to course overview</a>`}
    </nav>`;

  document.getElementById("quizCheckBtn").addEventListener("click", () => checkQuiz(mod, les));
}

/* ---- Quiz ------------------------------------------------------------------- */
function renderQuizHtml(les) {
  return les.quiz.map((q, qi) => `
    <fieldset class="quiz-q" data-q="${qi}">
      <legend>${qi + 1}. ${q.q}</legend>
      ${q.options.map((opt, oi) => `
        <label class="quiz-choice">
          <input type="radio" name="q${qi}" value="${oi}" />
          <span>${opt}</span>
        </label>`).join("")}
      <div class="quiz-explain" hidden></div>
    </fieldset>`).join("");
}

function checkQuiz(mod, les) {
  const result = document.getElementById("quizResult");
  const fields = Array.from(document.querySelectorAll("#lessonQuiz .quiz-q"));

  const answers = fields.map(f => {
    const sel = f.querySelector("input:checked");
    return sel ? parseInt(sel.value, 10) : null;
  });
  if (answers.some(a => a === null)) {
    result.textContent = "Answer every question first.";
    result.className = "quiz-result bad";
    return;
  }

  let score = 0;
  fields.forEach((f, qi) => {
    const q = les.quiz[qi];
    const right = answers[qi] === q.answer;
    if (right) score++;
    f.classList.remove("correct", "wrong");
    f.classList.add(right ? "correct" : "wrong");
    const ex = f.querySelector(".quiz-explain");
    ex.innerHTML = (right ? "<b>✓ Correct.</b> " : `<b>✗ The answer is:</b> ${q.options[q.answer]}. `) + q.explain;
    ex.hidden = false;
  });

  const total = les.quiz.length;
  const passed = score >= Math.ceil(total * 2 / 3);
  Progress.record(mod.id, les.id, score, total);
  result.innerHTML = passed
    ? `Score ${score}/${total} — <b>lesson complete ✓</b>`
    : `Score ${score}/${total} — review the explanations and try again (need ${Math.ceil(total * 2 / 3)}).`;
  result.className = "quiz-result " + (passed ? "good" : "bad");
  renderSidebar();
}

/* ---- Boot ------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  Progress.load();
  buildFlat();
  window.addEventListener("hashchange", route);
  route();
});
