/* =========================================================================
   Learn — the course UI. Hash-routed views (home / module / lesson / exam),
   markdown-rendered lesson content, per-lesson quizzes, a final exam with a
   printable certificate, and progress persisted in localStorage — and in
   the LMS via SCORM (cmi.suspend_data) when running as a SCORM package.
   Browser-only.
   ========================================================================= */
"use strict";

/* ---- Progress store -------------------------------------------------------- */
function mergeProgress(a, b) {
  const out = Object.assign({}, a);
  for (const [k, v] of Object.entries(b || {})) {
    const cur = out[k];
    out[k] = cur
      ? { done: !!(cur.done || v.done), best: Math.max(cur.best || 0, v.best || 0), total: v.total || cur.total }
      : v;
  }
  return out;
}

const Progress = {
  KEY: "refrigSim.progress",
  data: {},
  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY) || "{}"); }
    catch (e) { this.data = {}; }
    const lms = RefrigScorm.Scorm.loadProgress(typeof COURSE !== "undefined" ? COURSE : null);
    if (lms) this.data = mergeProgress(this.data, lms);
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this.data)); }
    catch (e) { /* storage unavailable */ }
    // Report to the LMS when running as SCORM content
    const lessons = totalLessons(), done = totalDone();
    const exam = this.data["exam/final"];
    const score = exam && exam.total
      ? Math.round(exam.best / exam.total * 100)
      : Math.round(done / lessons * 100);
    const status = done === lessons
      ? (exam && exam.done ? "passed" : "completed")
      : "incomplete";
    RefrigScorm.Scorm.saveProgress(this.data, score, status, typeof COURSE !== "undefined" ? COURSE : null);
  },
  get(modId, lesId) { return this.data[modId + "/" + lesId]; },
  record(modId, lesId, score, total, passScore) {
    const key = modId + "/" + lesId;
    const need = passScore != null ? passScore : Math.ceil(total * 2 / 3);
    const prev = this.data[key] || {};
    this.data[key] = {
      done: prev.done || score >= need,
      best: Math.max(prev.best || 0, score),
      total,
    };
    this.save();
  },
};

/* ---- "Mark for review" flags -------------------------------------------------- */
const Flags = {
  KEY: "refrigSim.flags",
  set: new Set(),
  load() {
    try { this.set = new Set(JSON.parse(localStorage.getItem(this.KEY) || "[]")); }
    catch (e) { this.set = new Set(); }
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify([...this.set])); }
    catch (e) { /* storage unavailable */ }
  },
  has(modId, lesId) { return this.set.has(modId + "/" + lesId); },
  toggle(modId, lesId) {
    const k = modId + "/" + lesId;
    if (this.set.has(k)) this.set.delete(k); else this.set.add(k);
    this.save();
  },
};

/* ---- Spaced-repetition practice deck ------------------------------------------ */
function lessonTitleByHash(hash) {
  const [m, l] = hash.split("/");
  const mod = COURSE.find(x => x.id === m);
  const les = mod && mod.lessons.find(x => x.id === l);
  return les ? `${mod.title} › ${les.title}` : hash;
}

/* Resolve a card key to its question + source. Keys:
   "mod/les/qi" (lesson quiz), "fault/<key>" (Technician Quiz misses),
   "recall/<id>" (typed recall cards). */
function questionByKey(key) {
  if (key.startsWith("fault/")) {
    const c = RefrigCards.FAULT_CARDS[key.slice(6)];
    return c ? { q: c, srcTitle: "From the Technician Quiz — fault diagnosis", srcHash: "diagnosis/gauge-signatures" } : null;
  }
  if (key.startsWith("recall/")) {
    const c = RefrigCards.RECALL_CARDS[key.slice(7)];
    return c ? { q: c, srcTitle: lessonTitleByHash(c.lesson), srcHash: c.lesson } : null;
  }
  const [m, l, qi] = key.split("/");
  const mod = COURSE.find(x => x.id === m);
  const les = mod && mod.lessons.find(x => x.id === l);
  const q = les && les.quiz[parseInt(qi, 10)];
  return q ? { q, srcTitle: `${mod.title} › ${les.title}`, srcHash: `${mod.id}/${les.id}` } : null;
}

const Srs = {
  KEY: "refrigSim.srs",
  cards: {},
  load() {
    try { this.cards = JSON.parse(localStorage.getItem(this.KEY) || "{}"); }
    catch (e) { this.cards = {}; }
    // drop cards whose question no longer exists (content updates)
    for (const k of Object.keys(this.cards)) if (!questionByKey(k)) delete this.cards[k];
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this.cards)); }
    catch (e) { /* storage unavailable */ }
  },
  record(key, correct) {
    this.cards[key] = RefrigSrs.grade(this.cards[key], correct, Date.now());
    this.save();
  },
  // add an unseen card, first due tomorrow (used for typed recall cards)
  enqueueNew(key) {
    if (this.cards[key]) return;
    const c = RefrigSrs.newCard(Date.now());
    c.int = 1;
    c.due = Date.now() + RefrigSrs.DAY;
    this.cards[key] = c;
    this.save();
  },
  dueKeys() { return RefrigSrs.dueKeys(this.cards, Date.now()); },
  aheadKeys(limit) { return RefrigSrs.aheadKeys(this.cards, Date.now(), limit); },
  total() { return Object.keys(this.cards).length; },
  nextDueText() {
    const t = RefrigSrs.nextDue(this.cards, Date.now());
    return t ? RefrigSrs.describeWhen(t, Date.now()) : null;
  },
};

const NAME_KEY = "refrigSim.learnerName";
function getLearnerName() {
  try { return localStorage.getItem(NAME_KEY) || ""; } catch (e) { return ""; }
}
function setLearnerName(name) {
  try { localStorage.setItem(NAME_KEY, name); } catch (e) { /* ignore */ }
}

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
/* ---- Streams ---------------------------------------------------------------
   The syllabus has four streams (see js/streams.js). Modules authored before
   streams existed carry no `stream` field and belong to "core", so every old
   progress key and deep link keeps working. */
const Streams = globalThis.RefrigStreams;

function streamModules(sid) { return Streams.modulesIn(COURSE, sid); }
function activeStreams() { return Streams.present(COURSE); }
function streamOfModuleId(modId) {
  const mod = COURSE.find(x => x.id === modId);
  return mod ? Streams.streamIdOf(mod) : null;
}
function streamLessonCount(sid) {
  return streamModules(sid).reduce((n, m) => n + m.lessons.length, 0);
}
function streamDoneCount(sid) {
  return streamModules(sid).reduce((n, m) => n + moduleDoneCount(m), 0);
}

/* Which stream sections are expanded in the sidebar. Remembered per browser
   so a learner working through one stream is not re-opening it every visit. */
const NavOpen = {
  KEY: "refrigSim.openStreams",
  set: new Set(),
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      this.set = new Set(raw ? JSON.parse(raw) : ["core"]);
    } catch (e) { this.set = new Set(["core"]); }
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify([...this.set])); }
    catch (e) { /* storage unavailable */ }
  },
  has(id) { return this.set.has(id); },
  toggle(id) {
    if (this.set.has(id)) this.set.delete(id); else this.set.add(id);
    this.save();
  },
  open(id) { if (!this.set.has(id)) { this.set.add(id); this.save(); } },
};

function parseHash() {
  const h = decodeURIComponent(location.hash.slice(1));
  const [m, l] = h.split("/");
  return { m, l };
}

function route() {
  const { m, l } = parseHash();
  const sid = streamOfModuleId(m);
  if (sid) NavOpen.open(sid);
  if (m === "exam") renderExam(l && Streams.BY_ID[l] ? l : null);
  else if (m === "review") renderReview();
  else if (m === "practice") renderPractice();
  else if (m === "reference") renderReference(l);
  else {
    const mod = COURSE.find(x => x.id === m);
    if (!mod) renderHome();
    else {
      const les = l && mod.lessons.find(x => x.id === l);
      if (les) renderLesson(mod, les);
      else renderModule(mod);
    }
  }
  renderSidebar();
  window.scrollTo(0, 0);
  // Move focus to the freshly rendered view for keyboard/screen-reader users
  const main = document.getElementById("learnMain");
  main.setAttribute("tabindex", "-1");
  main.focus({ preventScroll: true });
}

/* ---- Sidebar ----------------------------------------------------------------
   The module list is the main way around the course, so it does three things:
   filters as you type, expands the lessons of whichever module you are in (so a
   lesson is one click away, not two), and shows progress against each entry. */
let navFilter = "";

function navMatches(text) {
  return !navFilter || text.toLowerCase().includes(navFilter.toLowerCase());
}

function navLessonList(mod) {
  const lessons = navFilter
    ? mod.lessons.filter(l => navMatches(l.title) || navMatches(mod.title))
    : mod.lessons;
  if (!lessons.length) return "";
  const { m, l: curLes } = parseHash();
  return `<ul class="nav-lessons">
    ${lessons.map(les => {
      const done = lessonDone(mod, les);
      const here = m === mod.id && curLes === les.id;
      return `<li><a class="nav-les ${here ? "active" : ""} ${done ? "done" : ""}"
        href="#${mod.id}/${les.id}" ${here ? 'aria-current="page"' : ""}>
        <span class="nav-les-mark" aria-hidden="true">${done ? "✓" : "•"}</span>
        <span>${les.title}</span>
      </a></li>`;
    }).join("")}
  </ul>`;
}

function navModuleList(mods) {
  const { m } = parseHash();
  const filtering = !!navFilter;
  return mods.map(mod => {
    const lessonHit = mod.lessons.some(l => navMatches(l.title));
    if (filtering && !navMatches(mod.title) && !lessonHit) return "";
    const done = moduleDoneCount(mod);
    const all = done === mod.lessons.length;
    const active = m === mod.id;
    // Expand the module you are in, and every module a filter matched.
    const expanded = active || filtering;
    return `<a class="nav-mod ${active ? "active" : ""}" href="#${mod.id}" ${active ? 'aria-current="page"' : ""}>
        <span>${mod.title}</span>
        <span class="nav-count ${all ? "all" : ""}">${all ? "\u2713" : done + "/" + mod.lessons.length}</span>
      </a>
      ${expanded ? navLessonList(mod) : ""}`;
  }).join("");
}

function renderNavList() {
  const list = document.getElementById("navList");
  if (!list) return;
  const { m } = parseHash();
  const overall = `${totalDone()}/${totalLessons()}`;
  const exam = Progress.get("exam", "final");
  const filtering = !!navFilter;
  const here = streamOfModuleId(m);

  const streamsHtml = activeStreams().map(st => {
    const mods = streamModules(st.id);
    const inner = navModuleList(mods);
    if (filtering && !inner.trim()) return "";
    // A filter opens everything; otherwise the stream you are working in is
    // always open, and the rest remember whatever you last chose.
    const open = filtering || here === st.id || NavOpen.has(st.id);
    const done = streamDoneCount(st.id), total = streamLessonCount(st.id);
    return `<div class="nav-stream ${open ? "open" : ""}">
      <button class="nav-stream-head" type="button" data-stream="${st.id}"
              aria-expanded="${open ? "true" : "false"}">
        <span class="nav-stream-caret" aria-hidden="true">\u25b8</span>
        <span class="nav-stream-icon" aria-hidden="true">${st.icon}</span>
        <span class="nav-stream-title">${st.title}</span>
        <span class="nav-count ${done === total ? "all" : ""}">${done}/${total}</span>
      </button>
      ${open ? `<div class="nav-stream-body">${inner}</div>` : ""}
    </div>`;
  }).join("");

  const extras = filtering ? "" : `
    <a class="nav-mod nav-exam ${m === "exam" ? "active" : ""}" href="#exam" ${m === "exam" ? 'aria-current="page"' : ""}>
      <span>Final exam &amp; certificate</span>
      <span class="nav-count ${exam && exam.done ? "all" : ""}">${exam ? (exam.done ? "\u2713" : exam.best + "/" + exam.total) : "\u2014"}</span>
    </a>
    <a class="nav-mod nav-review ${m === "review" ? "active" : ""}" href="#review" ${m === "review" ? 'aria-current="page"' : ""}>
      <span>\ud83d\udea9 My review list</span>
      <span class="nav-count">${Flags.set.size}</span>
    </a>
    <a class="nav-mod nav-reference ${m === "reference" ? "active" : ""}" href="#reference" ${m === "reference" ? 'aria-current="page"' : ""}>
      <span>\ud83d\udcd5 Reference library</span>
      <span class="nav-count">${(window.REFDOCS ? window.REFDOCS.docs.length : 0)}</span>
    </a>
    <a class="nav-mod nav-practice ${m === "practice" ? "active" : ""}" href="#practice" ${m === "practice" ? 'aria-current="page"' : ""}>
      <span>\ud83d\udd01 Practice</span>
      <span class="nav-count ${Srs.dueKeys().length ? "due" : ""}">${Srs.dueKeys().length ? Srs.dueKeys().length + " due" : (Srs.total() ? "\u2713" : "\u2014")}</span>
    </a>`;

  list.innerHTML = `
    ${filtering ? "" : `<a class="nav-home ${!m ? "active" : ""}" href="#" ${!m ? 'aria-current="page"' : ""}>
      <span>Course overview</span><span class="nav-count">${overall}</span>
    </a>`}
    ${streamsHtml || `<p class="nav-empty">No lesson matches \u201c${RefrigMd.esc(navFilter)}\u201d.</p>`}
    ${extras}`;

  list.querySelectorAll(".nav-stream-head").forEach(btn => {
    btn.addEventListener("click", () => {
      NavOpen.toggle(btn.dataset.stream);
      renderNavList();
    });
  });
}

function renderSidebar() {
  const nav = document.getElementById("courseNav");
  // Build the filter box once; re-rendering it would drop what is being typed.
  if (!nav.querySelector(".nav-filter")) {
    nav.innerHTML = `
      <input class="nav-filter" id="navFilter" type="search" autocomplete="off"
             placeholder="Filter modules &amp; lessons…" aria-label="Filter modules and lessons" />
      <div id="navList" class="nav-list"></div>`;
    nav.querySelector("#navFilter").addEventListener("input", (e) => {
      navFilter = e.target.value.trim();
      renderNavList();
    });
  }
  renderNavList();
}

/* The lesson to pick up next: the first one not yet completed. */
function nextUpLesson() {
  return FLAT.find(f => !lessonDone(f.mod, f.les)) || null;
}

/* ---- Views ------------------------------------------------------------------ */
function renderHome() {
  const main = document.getElementById("learnMain");
  const done = totalDone(), total = totalLessons();
  const pct = Math.round(done / total * 100);
  /* The stream a link brought you to opens; the core program is open on a
     first visit. Everything else is one line — name, size, how far along —
     until it is asked for. */
  const wanted = (location.hash.match(/^#stream-([a-z0-9-]+)/) || [])[1];
  const due = Srs.dueKeys().length;
  main.innerHTML = `
    <div class="learn-hero learn-hero-compact">
      <h2>Refrigeration: from first principles to the toolbag</h2>
      <p>Five streams, ${COURSE.length} modules, ${total} short lessons. Each lesson ends in a
      quiz; pass it and the lesson is done. Work in order, or jump to what you need.</p>
      ${due ? `<p class="practice-due-note">🔁 <b>${due}</b> practice question${due === 1 ? " is" : "s are"} due — <a href="#practice">a few minutes now keeps it all fresh</a>.</p>` : ""}
      <div class="progress-line">
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span>${done} of ${total} lessons complete (${pct}%)</span>
      </div>
      ${(() => {
        const up = nextUpLesson();
        if (!up) {
          return `<div class="continue-line">
            <a class="btn btn-tour continue-btn" href="#exam">All ${total} lessons done — sit the final exam →</a>
          </div>`;
        }
        return `<div class="continue-line">
          <a class="btn btn-tour continue-btn" href="#${up.mod.id}/${up.les.id}">
            ${done ? "Continue" : "Start the course"} → ${up.les.title}
          </a>
          <span class="continue-meta">${up.mod.title} · ~${up.les.minutes} min</span>
        </div>`;
      })()}
      <details class="fold">
        <summary>How the course works <span class="fold-hint">plain words, diagrams, the simulator, references</span></summary>
        <p>Written for every learner — from first-year apprentices to career changers.
        Each lesson has a <b>plain-words version</b>, <b>diagrams</b>, and <b>live
        demonstrations</b> in the simulator; if something doesn't click, mark it
        🚩 for your review list — and the <a href="#practice">🔁 Practice deck</a>
        brings questions back at spaced intervals so it truly sticks. When you're
        ready to get your hands dirty, the <a href="service.html">🔧 Service Bay</a>
        has you fitting gauges, purging hoses and working the service valves yourself.
        Sit the final exam at the end for a certificate.</p>
        <p class="align-note">Aligned to Australian practice: every lesson lists its references —
        the ARCtick Refrigerant Handling Code of Practice, the AS/NZS standards
        (3000, 5149, 4836) and the ARAC manuals (Boyle, Vols 1 &amp; 2, pub. AIRAH) —
        cited at topic level; always work to the current editions.</p>
      </details>
      <details class="fold">
        <summary>Your progress file <span class="fold-hint">name, export, import${Flags.set.size ? ", review list" : ""}</span></summary>
        <div class="hero-actions">
          <label class="name-field">Your name
            <input id="learnerName" value="${RefrigMd.esc(getLearnerName())}" placeholder="used on exports &amp; certificate" />
          </label>
          <button id="exportBtn" class="btn btn-ghost" type="button">Export progress</button>
          <label class="btn btn-ghost file-btn">Import progress
            <input id="importFile" type="file" accept=".json,application/json" hidden />
          </label>
          <a class="btn btn-ghost" href="teach.html">Instructor dashboard</a>
          ${Flags.set.size ? `<a class="btn btn-ghost" href="#review">🚩 Review list (${Flags.set.size})</a>` : ""}
          <span id="ioStatus" class="io-status" aria-live="polite"></span>
        </div>
      </details>
    </div>
    ${activeStreams().map(st => {
      const mods = streamModules(st.id);
      const sdone = streamDoneCount(st.id), stotal = streamLessonCount(st.id);
      const spct = stotal ? Math.round(sdone / stotal * 100) : 0;
      const sx = Progress.get("exam", st.id);
      const open = wanted && Streams.BY_ID[wanted] ? wanted === st.id : st.id === "core";
      return `<details class="stream-section" id="stream-${st.id}"${open ? " open" : ""}>
        <summary class="stream-head">
          <span class="stream-caret" aria-hidden="true"></span>
          <h3><span class="stream-icon" aria-hidden="true">${st.icon}</span> ${st.title}</h3>
          <span class="stream-meta">${mods.length} modules · ${stotal} lessons · ${spct}%</span>
          <span class="progress-bar small stream-bar"><span class="progress-fill" style="width:${spct}%"></span></span>
        </summary>
        <p class="stream-blurb">${st.blurb} <span class="stream-audience">${st.audience}</span></p>
        <div class="module-grid">
          ${mods.map(mod => {
            const mdone = moduleDoneCount(mod);
            const mpct = Math.round(mdone / mod.lessons.length * 100);
            return `<a class="module-card" href="#${mod.id}">
              <h4>${mod.title}</h4>
              <p>${mod.blurb}</p>
              <div class="progress-bar small"><div class="progress-fill" style="width:${mpct}%"></div></div>
              <span class="module-meta">${mod.lessons.length} lessons · ${mdone} complete</span>
            </a>`;
          }).join("")}
          <a class="module-card exam-card" href="#exam/${st.id}">
            <h4>${st.short} exam</h4>
            <p>${mods.length * EXAM.perModule} questions, ${EXAM.perModule} per module. Pass to add this stream to your certificate.</p>
            <span class="module-meta">${sx ? (sx.done ? "passed ✓ · best " + sx.best + "/" + sx.total : "best " + sx.best + "/" + sx.total) : "not attempted"}</span>
          </a>
        </div>
      </details>`;
    }).join("")}
    <div class="module-grid">
      <a class="module-card exam-card final-card" href="#exam">
        <h4>Final exam &amp; certificate</h4>
        <p>${COURSE.length * EXAM.perProgramModule} questions from the whole program, ${EXAM.perProgramModule} per module. ${Math.round(EXAM.passPct * 100)}% to pass, then a printable certificate.</p>
        <span class="module-meta">${(() => {
          const e = Progress.get("exam", "final");
          return e ? (e.done ? "passed ✓ · best " + e.best + "/" + e.total : "best " + e.best + "/" + e.total) : "not attempted";
        })()}</span>
      </a>
    </div>`;

  document.getElementById("learnerName").addEventListener("change", (e) => setLearnerName(e.target.value.trim()));
  document.getElementById("exportBtn").addEventListener("click", exportProgress);
  document.getElementById("importFile").addEventListener("change", importProgress);
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
  const flagged = Flags.has(mod.id, les.id);

  main.innerHTML = `
    <div class="crumbs">
      <a href="#">Course</a> › <a href="#${mod.id}">${mod.title}</a> › <span>${les.title}</span>
    </div>
    <div class="lesson-head">
      <h2>${les.title}</h2>
      <span class="lesson-mins">~${les.minutes} min ${lessonDone(mod, les) ? " · <b class=\"done-tag\">completed ✓</b>" : ""}</span>
    </div>
    <div class="lesson-tools">
      <button id="flagBtn" class="flag-btn ${flagged ? "on" : ""}" type="button" aria-pressed="${flagged}">
        ${flagged ? "🚩 On your review list — tap again when it clicks" : "🚩 Confusing? Mark it for review"}
      </button>
    </div>
    ${les.simple ? `
    <details class="plain-words" ${flagged ? "open" : ""}>
      <summary>💡 In plain words — a simpler way to say it</summary>
      <p>${les.simple}</p>
      <p class="plain-hint">Still foggy after the full lesson? Mark it for review and try the
      demonstrations — seeing it move often does what words can't.</p>
    </details>` : ""}
    <article class="lesson-content">${RefrigMd.render(les.content)}</article>
    ${les.refs && les.refs.length ? `
    <aside class="lesson-refs" aria-label="References">
      <h3>References &amp; alignment</h3>
      <ul>${les.refs.map(r => `<li>${RefrigMd.inline(r)}</li>`).join("")}</ul>
      <p>Topic-level alignment: this lesson paraphrases publicly available requirements and
      general trade knowledge — it does not reproduce standards text. Always work to the
      current editions.</p>
    </aside>` : ""}
    <section class="lesson-quiz" aria-label="Lesson quiz">
      <h3>Check your understanding</h3>
      <p class="quiz-note">This is practice, not a test — a wrong pick here costs nothing and
      shows you exactly what to look at again.</p>
      ${p && p.done ? `<p class="quiz-status">Completed — best score ${p.best}/${p.total}. Retake it any time.</p>` : ""}
      <div id="lessonQuiz">${renderQuizHtml(les.quiz)}</div>
      <div class="quiz-controls">
        <button id="quizCheckBtn" class="btn btn-tour" type="button">Check answers</button>
        <button id="quizRetryBtn" class="btn btn-ghost" type="button" hidden>Fresh try</button>
        <span id="quizResult" class="quiz-result" aria-live="polite"></span>
      </div>
      <p class="quiz-note">Checked questions join your <a href="#practice">🔁 Practice deck</a> and
      come back at growing intervals — a few minutes a day beats cramming, and it's how this
      really sticks.</p>
    </section>
    <nav class="lesson-nav">
      ${prev ? `<a class="btn btn-ghost" href="#${prev.mod.id}/${prev.les.id}">← ${prev.les.title}</a>` : "<span></span>"}
      ${next ? `<a class="btn btn-tour" href="#${next.mod.id}/${next.les.id}">${next.les.title} →</a>`
             : `<a class="btn btn-tour" href="#exam">Sit the final exam →</a>`}
    </nav>`;

  document.getElementById("quizCheckBtn").addEventListener("click", () => checkQuiz(mod, les));
  document.getElementById("quizRetryBtn").addEventListener("click", () => {
    document.getElementById("lessonQuiz").innerHTML = renderQuizHtml(les.quiz);
    document.getElementById("quizResult").textContent = "";
    document.getElementById("quizRetryBtn").hidden = true;
  });
  document.getElementById("flagBtn").addEventListener("click", () => {
    Flags.toggle(mod.id, les.id);
    renderLesson(mod, les);
    renderSidebar();
  });
}

/* ---- Reference library --------------------------------------------------------
   The documents the course teaches to. Rendered from js/refdocs.js, so adding
   a new document there makes it appear here with no changes to this file. */
function renderReference(docId) {
  const main = document.getElementById("learnMain");
  const R = window.REFDOCS;
  if (!R || !R.docs.length) {
    main.innerHTML = `<div class="crumbs"><a href="#">Course</a> › <span>Reference library</span></div>
      <div class="learn-hero"><p>No reference documents are loaded.</p></div>`;
    return;
  }

  const doc = docId ? R.byId(docId) : null;
  if (!doc) return renderReferenceIndex(R);

  // Group the clause index by the lesson that teaches it.
  const byLesson = {};
  for (const [key, c] of Object.entries(doc.clauses)) {
    (byLesson[c.lesson] = byLesson[c.lesson] || []).push({ key, c });
  }
  const mod = COURSE.find(m => m.id === doc.module);
  const lessonTitle = (id) => {
    const les = mod && mod.lessons.find(l => l.id === id);
    return les ? les.title : id;
  };
  const sortNum = (k) => k.split(":")[1].split(".").map(n => String(n).padStart(3, "0")).join(".");

  main.innerHTML = `
    <div class="crumbs">
      <a href="#">Course</a> › <a href="#reference">Reference library</a> › <span>${RefrigMd.esc(doc.short)}</span>
    </div>
    <div class="learn-hero">
      <h2>${RefrigMd.esc(doc.title)}</h2>
      <p class="doc-meta">${RefrigMd.esc(doc.edition)} · ${RefrigMd.esc(doc.publisher)}${doc.isbn ? " · ISBN " + RefrigMd.esc(doc.isbn) : ""}</p>
      <p>${RefrigMd.esc(doc.blurb)}</p>
      ${mod ? `<div class="hero-actions"><a class="btn btn-tour" href="#${doc.module}">Study this document — ${mod.lessons.length} lessons</a></div>` : ""}
    </div>

    <h3 class="review-heading">What each Part covers</h3>
    <div class="module-grid">
      ${doc.parts.map(p => `<div class="module-card doc-part">
        <h3>Part ${RefrigMd.esc(p.id)} — ${RefrigMd.esc(p.title)}</h3>
        <p>${RefrigMd.esc(p.scope)}</p>
        <span class="module-meta">${p.chapters.length} chapters</span>
      </div>`).join("")}
    </div>

    <h3 class="review-heading">Structure</h3>
    <p class="module-blurb">The Parts are numbered independently — they share chapters 1 to 4 in
    substance and then diverge, so Part 1 §5 and Part 2 §5 are different chapters. Always quote
    the Part with the clause.</p>
    <div class="doc-structure">
      ${doc.parts.map(p => `<div class="doc-part-toc">
        <h4>Part ${RefrigMd.esc(p.id)}</h4>
        <ol>${p.chapters.map(ch => `<li>${RefrigMd.esc(ch)}</li>`).join("")}</ol>
      </div>`).join("")}
    </div>
    ${doc.appendices ? `<p class="module-blurb">Appendices: ${doc.appendices.map(a =>
      `<b>${RefrigMd.esc(a.id)}</b> ${RefrigMd.esc(a.title)}`).join(" · ")}</p>` : ""}

    <h3 class="review-heading">Clause index</h3>
    <p class="module-blurb">The clauses this course teaches and cites, grouped by the lesson
    that covers them. Summaries paraphrase the requirement — the Code itself is the authority.</p>
    ${Object.keys(byLesson).sort().map(lesId => `
      <section class="clause-group">
        <h4><a href="#${doc.module}/${lesId}">${RefrigMd.esc(lessonTitle(lesId))}</a></h4>
        <dl class="clause-list">
          ${byLesson[lesId].sort((a, b) => sortNum(a.key).localeCompare(sortNum(b.key))).map(({ key, c }) => {
            const part = key.split(":")[0], num = key.split(":")[1];
            const where = part === "both" ? "Pt 1 &amp; 2" : "Pt " + part;
            return `<dt><span class="clause-num">${where} §${RefrigMd.esc(num)}</span> ${RefrigMd.esc(c.title)}</dt>
              <dd>${RefrigMd.esc(c.summary)}</dd>`;
          }).join("")}
        </dl>
      </section>`).join("")}

    <aside class="lesson-refs" aria-label="Source acknowledgement">
      <h3>Source &amp; acknowledgement</h3>
      <p>${RefrigMd.esc(doc.acknowledgement)}</p>
    </aside>`;
}

function renderReferenceIndex(R) {
  const main = document.getElementById("learnMain");
  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> › <span>Reference library</span></div>
    <h2>📕 Reference library</h2>
    <p class="module-blurb">The authoritative documents this course teaches to. Open one to see
    how it is structured, what each Part covers, and the clause index the lessons cite.</p>
    <div class="module-grid">
      ${R.docs.map(d => {
        const mod = COURSE.find(m => m.id === d.module);
        return `<a class="module-card" href="#reference/${d.id}">
          <h3>${RefrigMd.esc(d.short)}</h3>
          <p>${RefrigMd.esc(d.title)} — ${RefrigMd.esc(d.edition)}.</p>
          <span class="module-meta">${d.parts.length} parts · ${Object.keys(d.clauses).length} clauses indexed${mod ? " · " + mod.lessons.length + " lessons" : ""}</span>
        </a>`;
      }).join("")}
    </div>`;
}

/* ---- Review list -------------------------------------------------------------- */
function renderReview() {
  const main = document.getElementById("learnMain");
  const flagged = [];
  const unfinished = [];
  COURSE.forEach(mod => mod.lessons.forEach(les => {
    if (Flags.has(mod.id, les.id)) flagged.push({ mod, les });
    const p = Progress.get(mod.id, les.id);
    if (p && !p.done && !Flags.has(mod.id, les.id)) unfinished.push({ mod, les, p });
  }));

  const row = ({ mod, les }, extra) => `
    <div class="lesson-row review-row">
      <a class="lesson-title" href="#${mod.id}/${les.id}">${les.title}</a>
      <span class="lesson-mins">${mod.title}</span>
      ${extra || ""}
    </div>`;

  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> › <span>My review list</span></div>
    <h2>🚩 My review list</h2>
    <p class="module-blurb">Everything you've marked as "not clicked yet", in one place. Revisit a
    lesson, open its plain-words box, run the demonstrations — and un-flag it when it makes sense.
    Marking things you don't get is what good learners do.</p>
    ${flagged.length ? `
      <h3 class="review-heading">Marked as confusing (${flagged.length})</h3>
      <div class="lesson-list">
        ${flagged.map(f => row(f, `<button class="btn btn-ghost unflag-btn" data-key="${f.mod.id}/${f.les.id}" type="button">Got it now ✓</button>`)).join("")}
      </div>` : `
      <div class="learn-hero"><p>Nothing marked right now. If a lesson ever feels foggy, hit
      <b>🚩 Confusing? Mark it for review</b> at the top of the lesson and it will wait for you here.</p></div>`}
    ${unfinished.length ? `
      <h3 class="review-heading">Quizzes started but not finished (${unfinished.length})</h3>
      <div class="lesson-list">
        ${unfinished.map(f => row(f, `<span class="lesson-mins">best ${f.p.best}/${f.p.total} — nearly there</span>`)).join("")}
      </div>` : ""}`;

  main.querySelectorAll(".unflag-btn").forEach(b => b.addEventListener("click", () => {
    const [m, l] = b.dataset.key.split("/");
    Flags.toggle(m, l);
    renderReview();
    renderSidebar();
  }));
}

/* ---- Quiz (shared markup for lessons and the exam) -------------------------- */
function renderQuizHtml(questions, withModule) {
  return questions.map((q, qi) => `
    <fieldset class="quiz-q" data-q="${qi}">
      <legend>${qi + 1}. ${q.q}${withModule ? ` <span class="q-module">— ${q.module}</span>` : ""}</legend>
      ${q.options.map((opt, oi) => `
        <label class="quiz-choice">
          <input type="radio" name="q${qi}" value="${oi}" />
          <span>${opt}</span>
        </label>`).join("")}
      <div class="quiz-explain" hidden></div>
    </fieldset>`).join("");
}

function markQuiz(container, questions) {
  const fields = Array.from(container.querySelectorAll(".quiz-q"));
  const answers = fields.map(f => {
    const sel = f.querySelector("input:checked");
    return sel ? parseInt(sel.value, 10) : null;
  });
  if (answers.some(a => a === null)) return { incomplete: true };

  let score = 0;
  const results = [];
  fields.forEach((f, qi) => {
    const q = questions[qi];
    const right = answers[qi] === q.answer;
    results.push(right);
    if (right) score++;
    f.classList.remove("correct", "learn");
    f.classList.add(right ? "correct" : "learn");
    const ex = f.querySelector(".quiz-explain");
    ex.innerHTML = right
      ? "<b>✓ Got it.</b> " + q.explain
      : `<b>💡 Not this one — here's the idea:</b> the answer is <b>${q.options[q.answer]}</b>. ${q.explain}`;
    ex.hidden = false;
  });
  return { incomplete: false, score, results };
}

function checkQuiz(mod, les) {
  const result = document.getElementById("quizResult");
  const marked = markQuiz(document.getElementById("lessonQuiz"), les.quiz);
  if (marked.incomplete) {
    result.textContent = "Answer every question first.";
    result.className = "quiz-result bad";
    return;
  }
  const total = les.quiz.length;
  const passed = marked.score >= Math.ceil(total * 2 / 3);
  Progress.record(mod.id, les.id, marked.score, total);
  // every checked question joins (or updates) the spaced-repetition deck
  marked.results.forEach((right, qi) => Srs.record(`${mod.id}/${les.id}/${qi}`, right));
  // typed recall cards tied to this lesson join too, due tomorrow
  Object.entries(RefrigCards.RECALL_CARDS).forEach(([id, c]) => {
    if (c.lesson === `${mod.id}/${les.id}`) Srs.enqueueNew(`recall/${id}`);
  });
  result.innerHTML = passed
    ? (marked.score === total
        ? `${marked.score}/${total} — perfect. <b>Lesson complete ✓</b>`
        : `${marked.score}/${total} — <b>lesson complete ✓</b> nice work.`)
    : `${marked.score}/${total} — good practice! The tips above show exactly what to
       revisit. Have another go when you're ready (${Math.ceil(total * 2 / 3)} completes the lesson).`;
  result.className = "quiz-result " + (passed ? "good" : "keep-going");
  document.getElementById("quizRetryBtn").hidden = passed;
  renderSidebar();
}

/* ---- Exams --------------------------------------------------------------------
   Two shapes of paper. A stream exam draws `perModule` questions from every
   module of one stream — the natural end-point of finishing that stream. The
   final exam draws `perProgramModule` from every module in the whole program,
   so it stays a sittable length however many modules the syllabus grows to.
   Progress is stored under "exam/final" and "exam/<streamId>". */
const EXAM = { questions: null, stream: null, perModule: 2, perProgramModule: 1, passPct: 0.8 };

function examScope(streamId) {
  return streamId ? streamModules(streamId) : COURSE;
}
function examPerModule(streamId) {
  return streamId ? EXAM.perModule : EXAM.perProgramModule;
}
function examKey(streamId) { return streamId || "final"; }
function examTitle(streamId) {
  const st = streamId && Streams.BY_ID[streamId];
  return st ? `${st.short} exam` : "Final exam";
}

function startExam(streamId) {
  EXAM.stream = streamId || null;
  EXAM.questions = RefrigExam.pickExamQuestions(examScope(streamId), examPerModule(streamId));
  renderExam(streamId);
}

function renderExam(streamId) {
  const main = document.getElementById("learnMain");
  const key = examKey(streamId);
  const p = Progress.get("exam", key);
  const scope = examScope(streamId);
  const st = streamId && Streams.BY_ID[streamId];
  const nQuestions = scope.reduce(
    (n, mod) => n + Math.min(examPerModule(streamId), mod.lessons.reduce((k, l) => k + l.quiz.length, 0)), 0);
  const passMark = Math.ceil(nQuestions * EXAM.passPct);
  const heading = examTitle(streamId);

  if (!EXAM.questions || EXAM.stream !== (streamId || null)) {
    main.innerHTML = `
      <div class="crumbs"><a href="#">Course</a> \u203a <span>${heading}</span></div>
      <h2>${heading}</h2>
      <div class="learn-hero exam-intro">
        <p><b>${nQuestions} questions</b>, ${examPerModule(streamId) === 1 ? "one drawn at random from" : "two drawn at random from"}
        every module ${st ? `in <b>${st.title}</b>` : "in the program"}. Pass mark
        <b>${passMark}/${nQuestions}</b> (${Math.round(EXAM.passPct * 100)}%). Every attempt draws a fresh paper, your best
        score is kept, and passing unlocks a printable certificate.</p>
        <p class="module-blurb">${p ? `Best score so far: <b>${p.best}/${p.total}</b>${p.done ? " \u2014 passed \u2713" : ""}` : "Not attempted yet."}</p>
        <div class="quiz-controls">
          <button id="examStartBtn" class="btn btn-tour" type="button">${p ? "Sit a new paper" : "Start the exam"}</button>
          ${st ? '<a class="btn btn-ghost" href="#exam">Whole-program final exam</a>' : ""}
        </div>
        ${!st ? `<p class="module-blurb">Prefer to finish one stream at a time? Sit a stream exam:
          ${activeStreams().map(x => `<a href="#exam/${x.id}">${x.short}</a>`).join(" \u00b7 ")}</p>` : ""}
      </div>
      ${p && p.done ? certificateSectionHtml(p, streamId) : ""}`;
    document.getElementById("examStartBtn").addEventListener("click", () => startExam(streamId));
    if (p && p.done) wireCertificate(p, streamId);
    return;
  }

  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> \u203a <span>${heading}</span></div>
    <h2>${heading} \u2014 ${EXAM.questions.length} questions</h2>
    <p class="module-blurb">Pass mark ${passMark}/${EXAM.questions.length}. Take your time \u2014 the explanations appear after you submit.</p>
    <section class="lesson-quiz" aria-label="${heading}">
      <div id="examQuiz">${renderQuizHtml(EXAM.questions, true)}</div>
      <div class="quiz-controls">
        <button id="examSubmitBtn" class="btn btn-tour" type="button">Submit exam</button>
        <button id="examCancelBtn" class="btn btn-ghost" type="button">Cancel</button>
        <span id="quizResult" class="quiz-result" aria-live="polite"></span>
      </div>
      <div id="examOutcome"></div>
    </section>`;

  document.getElementById("examCancelBtn").addEventListener("click", () => {
    EXAM.questions = null; renderExam(streamId); renderSidebar();
  });
  document.getElementById("examSubmitBtn").addEventListener("click", () => {
    const result = document.getElementById("quizResult");
    const marked = markQuiz(document.getElementById("examQuiz"), EXAM.questions);
    if (marked.incomplete) {
      result.textContent = "Answer every question first.";
      result.className = "quiz-result bad";
      return;
    }
    const total = EXAM.questions.length;
    const mark = Math.ceil(total * EXAM.passPct);
    const passed = marked.score >= mark;
    Progress.record("exam", key, marked.score, total, mark);
    result.innerHTML = passed
      ? `Score ${marked.score}/${total} \u2014 <b>passed \u2713</b> well earned.`
      : `Score ${marked.score}/${total} \u2014 the pass mark is ${mark}, and you're on the way.
         Every paper is different, your best score is always kept, and the explanations above
         are the study list. Sit a fresh one whenever you're ready.`;
    result.className = "quiz-result " + (passed ? "good" : "keep-going");
    document.getElementById("examSubmitBtn").disabled = true;
    const rec = Progress.get("exam", key);
    document.getElementById("examOutcome").innerHTML =
      `<div class="quiz-controls" style="margin-top:14px">
         <button id="examAgainBtn" class="btn btn-ghost" type="button">Sit a new paper</button>
       </div>` + (rec && rec.done ? certificateSectionHtml(rec, streamId) : "");
    document.getElementById("examAgainBtn").addEventListener("click", () => startExam(streamId));
    if (rec && rec.done) wireCertificate(rec, streamId);
    renderSidebar();
  });
}

/* ---- Certificate -------------------------------------------------------------- */
function certificateSectionHtml(examRec, streamId) {
  const st = streamId && Streams.BY_ID[streamId];
  const done = st ? streamDoneCount(streamId) : totalDone();
  const total = st ? streamLessonCount(streamId) : totalLessons();
  return `
    <section class="cert-section" aria-label="Certificate">
      <h3>Certificate of completion</h3>
      <p class="module-blurb">${st ? st.title + " lessons" : "Lessons"} complete: ${done}/${total} · ${examTitle(streamId)} best score: ${examRec.best}/${examRec.total}.</p>
      <div class="quiz-controls">
        <label class="name-field">Name on certificate
          <input id="certName" value="${RefrigMd.esc(getLearnerName())}" placeholder="your full name" />
        </label>
        <button id="certBtn" class="btn btn-tour" type="button">Generate certificate</button>
      </div>
      <div id="certOut"></div>
    </section>`;
}

function wireCertificate(examRec, streamId) {
  const st = streamId && Streams.BY_ID[streamId];
  document.getElementById("certBtn").addEventListener("click", () => {
    const name = document.getElementById("certName").value.trim();
    if (!name) { document.getElementById("certName").focus(); return; }
    setLearnerName(name);
    const date = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    const pct = Math.round(examRec.best / examRec.total * 100);
    const code = RefrigExam.certificateCode([name, st ? st.id : "final", examRec.best, examRec.total, date].join("|"));
    const cdone = st ? streamDoneCount(streamId) : totalDone();
    const ctotal = st ? streamLessonCount(streamId) : totalLessons();
    const what = st ? st.title : "the program";
    const allLessons = cdone === ctotal;
    const achievement = allLessons
      ? `for completing all ${ctotal} lessons of ${what} and passing the ${st ? "stream" : "final"} examination`
      : `for passing the ${examTitle(streamId).toLowerCase()} (lessons completed: ${cdone}/${ctotal})`;
    document.getElementById("certOut").innerHTML = `
      <div class="certificate">
        <div class="cert-border">
          <p class="cert-course">Refrigeration Learning Course${st ? " — " + RefrigMd.esc(st.title) : ""}</p>
          <h4>Certificate of Completion</h4>
          <p class="cert-awarded">awarded to</p>
          <p class="cert-name">${RefrigMd.esc(name)}</p>
          <p class="cert-detail">${achievement}
          with a score of <b>${examRec.best}/${examRec.total} (${pct}%)</b></p>
          <div class="cert-foot">
            <span>${date}</span>
            <span>Certificate ID: ${code}</span>
          </div>
          <p class="cert-note">Evidence of course completion — regenerate with the same name, score and date to verify the ID. Not a refrigerant-handling licence or trade qualification.</p>
        </div>
      </div>
      <div class="quiz-controls">
        <button id="certPrintBtn" class="btn btn-tour" type="button">Print / save as PDF</button>
      </div>`;
    document.getElementById("certPrintBtn").addEventListener("click", () => {
      document.body.classList.add("print-cert");
      const cleanup = () => document.body.classList.remove("print-cert");
      window.addEventListener("afterprint", cleanup, { once: true });
      window.print();
      setTimeout(cleanup, 2000);
    });
  });
}

/* ---- Progress export / import -------------------------------------------------- */
function exportProgress() {
  const name = getLearnerName();
  const payload = {
    format: "refrig-progress-v1",
    name: name || null,
    exported: new Date().toISOString(),
    progress: Progress.data,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  const slug = (name || "learner").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "learner";
  a.download = `refrig-progress-${slug}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
  document.getElementById("ioStatus").textContent = "Progress exported — send the file to your instructor.";
}

function importProgress(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const status = document.getElementById("ioStatus");
    try {
      const data = JSON.parse(reader.result);
      if (data.format !== "refrig-progress-v1" || typeof data.progress !== "object") {
        throw new Error("not a progress file");
      }
      Progress.data = mergeProgress(Progress.data, data.progress);
      Progress.save();
      if (data.name && !getLearnerName()) setLearnerName(data.name);
      route();
      document.getElementById("ioStatus").textContent = "Progress imported and merged.";
    } catch (err) {
      status.textContent = "Could not import that file — it isn't a progress export.";
    }
  };
  reader.readAsText(file);
  e.target.value = "";
}

/* ---- Practice (spaced repetition) sessions ------------------------------------ */
const PRACTICE = { active: false, queue: [], pos: 0, firstTry: null, ahead: false };

function startPractice(keys, ahead) {
  const shuffled = [...keys];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  PRACTICE.active = true;
  PRACTICE.queue = shuffled;
  PRACTICE.pos = 0;
  PRACTICE.firstTry = {};
  PRACTICE.ahead = !!ahead;
  renderPractice();
}

function endPractice() {
  PRACTICE.active = false;
  PRACTICE.queue = [];
  PRACTICE.firstTry = null;
}

function renderPractice() {
  const main = document.getElementById("learnMain");
  if (!PRACTICE.active) { renderPracticeHome(main); return; }
  if (PRACTICE.pos >= PRACTICE.queue.length) { renderPracticeSummary(main); return; }
  renderPracticeCard(main);
}

function renderPracticeHome(main) {
  const due = Srs.dueKeys();
  const total = Srs.total();
  const nextTxt = Srs.nextDueText();
  const mins = Math.max(1, Math.round(due.length * 0.5));

  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> › <span>Practice</span></div>
    <h2>🔁 Practice — spaced repetition</h2>
    <div class="learn-hero">
      <p>Questions you've met in lesson quizzes come back here just before you'd
      naturally forget them — after a day, then a few days, then weeks. Get one
      right and it retreats further into the future; miss one and it returns
      tomorrow. A few minutes a day is all it takes, and it's the difference
      between <i>recognising</i> the material and <i>knowing</i> it.</p>
      <div class="practice-stats">
        <div class="p-stat"><b>${due.length}</b><span>due now</span></div>
        <div class="p-stat"><b>${total}</b><span>in your deck</span></div>
        <div class="p-stat"><b>${due.length ? "~" + mins + " min" : (nextTxt || "—")}</b><span>${due.length ? "today's review" : "next review"}</span></div>
      </div>
      <div class="quiz-controls">
        ${due.length
          ? `<button id="practiceStartBtn" class="btn btn-tour" type="button">Start today's review (${due.length})</button>`
          : total
            ? `<span class="quiz-status">All caught up ✓ — nothing is due. Coming back ${nextTxt || "soon"} is exactly how this works.</span>
               <button id="practiceAheadBtn" class="btn btn-ghost" type="button">Practise ahead anyway</button>`
            : `<span class="module-blurb">Your deck is empty — finish any lesson quiz and its questions join automatically.</span>
               <a class="btn btn-tour" href="#fundamentals/heat-and-temperature">Start the first lesson</a>`}
      </div>
    </div>`;

  const startBtn = document.getElementById("practiceStartBtn");
  if (startBtn) startBtn.addEventListener("click", () => startPractice(Srs.dueKeys(), false));
  const aheadBtn = document.getElementById("practiceAheadBtn");
  if (aheadBtn) aheadBtn.addEventListener("click", () => startPractice(Srs.aheadKeys(10), true));
}

function renderPracticeCard(main) {
  const key = PRACTICE.queue[PRACTICE.pos];
  const found = questionByKey(key);
  if (!found) { PRACTICE.pos++; renderPractice(); return; }
  const { q, srcTitle, srcHash } = found;
  const typed = q.type === "input";

  // shuffle option display order, remembering the mapping to original indexes
  const order = typed ? [] : q.options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const remaining = PRACTICE.queue.length - PRACTICE.pos;
  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> › <a href="#practice">Practice</a> › <span>${PRACTICE.ahead ? "practising ahead" : "today's review"}</span></div>
    <div class="practice-progress">${remaining} card${remaining === 1 ? "" : "s"} to go</div>
    <section class="lesson-quiz practice-card" aria-label="Practice question">
      <p class="practice-src">${srcTitle}</p>
      <h3 class="practice-q">${q.q}</h3>
      ${typed ? `
      <div class="pt-answer practice-input">
        <input id="practiceInput" type="number" step="any" inputmode="decimal" aria-label="Your answer" />
        <span class="pt-unit">${q.unit || ""}</span>
        <button id="practiceCheckBtn" class="btn btn-tour" type="button">Check</button>
      </div>` : `
      <div class="quiz-options practice-options">
        ${order.map(oi => `<button class="quiz-opt" data-orig="${oi}" type="button">${q.options[oi]}</button>`).join("")}
      </div>`}
      <div id="practiceFeedback" class="quiz-explain" hidden></div>
      <div class="quiz-controls">
        <button id="practiceNextBtn" class="btn btn-tour" type="button" hidden>Next</button>
        <a class="btn btn-ghost" href="#${srcHash}" target="_blank" rel="noopener" id="practiceLessonLink" hidden>Reread the lesson ↗</a>
        <button id="practiceStopBtn" class="btn btn-ghost" type="button">Finish for now</button>
      </div>
    </section>`;

  const answered = (right, correctText) => {
    // scheduling counts the FIRST attempt in this session only
    if (!(key in PRACTICE.firstTry)) {
      PRACTICE.firstTry[key] = right;
      Srs.record(key, right);
    }
    if (!right) PRACTICE.queue.push(key);     // requeue until answered correctly

    const fb = document.getElementById("practiceFeedback");
    fb.innerHTML = right
      ? `<b>✓ Got it.</b> ${q.explain} <span class="practice-sched">This one retreats ${RefrigSrs.describeWhen(Srs.cards[key].due, Date.now())}.</span>`
      : `<b>💡 Not this one — here's the idea:</b> the answer is <b>${correctText}</b>. ${q.explain} <span class="practice-sched">It'll come around again shortly, and tomorrow too — that's the method, not a penalty.</span>`;
    fb.hidden = false;
    document.getElementById("practiceNextBtn").hidden = false;
    if (!right) document.getElementById("practiceLessonLink").hidden = false;
    // defer the focus move: if the answer arrived via the Enter key, focusing
    // Next inside the same key event lets that Enter activate the button and
    // skip straight past the feedback
    setTimeout(() => {
      const btn = document.getElementById("practiceNextBtn");
      if (btn && !btn.hidden) btn.focus();
    }, 80);
  };

  if (typed) {
    const input = document.getElementById("practiceInput");
    const checkTyped = () => {
      const v = parseFloat(input.value);
      if (!Number.isFinite(v)) { input.focus(); return; }
      input.disabled = true;
      document.getElementById("practiceCheckBtn").disabled = true;
      const right = Math.abs(v - q.answer) <= (q.tolerance || 0);
      answered(right, `${q.answer}${q.unit ? " " + q.unit : ""}`);
    };
    document.getElementById("practiceCheckBtn").addEventListener("click", checkTyped);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") { e.preventDefault(); checkTyped(); }
    });
    input.focus();
  } else {
    main.querySelectorAll(".practice-options .quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const picked = parseInt(btn.dataset.orig, 10);
        const right = picked === q.answer;
        main.querySelectorAll(".practice-options .quiz-opt").forEach(b => {
          b.disabled = true;
          const orig = parseInt(b.dataset.orig, 10);
          if (orig === q.answer) b.classList.add("correct");
          else if (orig === picked) b.classList.add("partial");
        });
        answered(right, q.options[q.answer]);
      });
    });
  }
  document.getElementById("practiceNextBtn").addEventListener("click", () => { PRACTICE.pos++; renderPractice(); });
  document.getElementById("practiceStopBtn").addEventListener("click", () => { endPractice(); renderPractice(); renderSidebar(); });
}

function renderPracticeSummary(main) {
  const tried = Object.keys(PRACTICE.firstTry).length;
  const rightFirst = Object.values(PRACTICE.firstTry).filter(Boolean).length;
  const back = tried - rightFirst;
  const nextTxt = Srs.nextDueText();
  main.innerHTML = `
    <div class="crumbs"><a href="#">Course</a> › <span>Practice</span></div>
    <h2>Session done ✓</h2>
    <div class="learn-hero">
      <p>You worked through <b>${tried}</b> question${tried === 1 ? "" : "s"} —
      <b>${rightFirst}</b> right first go${back ? `, and <b>${back}</b> will visit again tomorrow to finish the job` : ""}.
      ${back ? "Seeing a card again sooner isn't a setback — it's the schedule doing its work." : "Everything retreated further into the future — exactly what knowing it looks like."}</p>
      <p class="module-blurb">${nextTxt ? `Next review due ${nextTxt}.` : ""} Come back when it's due — short and regular beats long and rare.</p>
      <div class="quiz-controls">
        <a class="btn btn-tour" href="#">Back to the course</a>
        ${Srs.aheadKeys(10).length ? `<button id="practiceMoreBtn" class="btn btn-ghost" type="button">Practise ahead a little more</button>` : ""}
      </div>
    </div>`;
  endPractice();
  const more = document.getElementById("practiceMoreBtn");
  if (more) more.addEventListener("click", () => startPractice(Srs.aheadKeys(10), true));
  renderSidebar();
}

/* ---- Boot ------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  RefrigScorm.Scorm.init();
  Progress.load();
  Flags.load();
  Srs.load();
  NavOpen.load();
  buildFlat();
  window.addEventListener("hashchange", route);
  route();
});
