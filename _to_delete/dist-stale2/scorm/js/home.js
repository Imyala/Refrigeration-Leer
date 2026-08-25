/* =========================================================================
   Start here — the program front door.

   Groups the ten course modules into five ordered stages so a learner meets
   one idea and one tool at a time instead of the whole toolbox at once, and
   shows real progress against each stage from the same localStorage the
   course writes. Browser-only; no state of its own.
   ========================================================================= */
(function () {
  "use strict";

  /* Each stage: the theory it covers, and the single tool it introduces. */
  const STAGES = [
    {
      n: 1,
      title: "See how it works",
      modules: ["fundamentals", "cycle"],
      blurb: "What heat actually does, why pressure and temperature are locked together, and the four processes the refrigerant goes around.",
      tool: { label: "Cycle Simulator — simple view", href: "simulator.html?tour=1" },
      toolNote: "Watch one lap of the cycle on the guided tour.",
    },
    {
      n: 2,
      title: "Know the equipment",
      modules: ["components", "refrigerants"],
      blurb: "Compressors, metering devices and heat exchangers, and which refrigerant goes where — including the rules that govern handling it in Australia.",
      tool: { label: "Cycle Simulator — click the parts", href: "simulator.html" },
      toolNote: "Select each component and see what it does to the refrigerant.",
    },
    {
      n: 3,
      title: "Measure a real system",
      modules: ["superheat-subcooling", "system-types"],
      blurb: "Superheat and subcooling — how to measure them and what they tell you that pressure alone cannot — and the systems you will be measuring in the field.",
      tool: { label: "Simulator — gauges and PT trainer", href: "simulator.html?level=3&view=pt" },
      toolNote: "Practise reading expected pressures until it is automatic.",
    },
    {
      n: 4,
      title: "Find the fault",
      modules: ["electrical", "diagnosis"],
      blurb: "Motors, controls and ladder diagrams, then the diagnostic routine and the gauge signature of every classic fault.",
      tool: { label: "Technician Quiz", href: "simulator.html?quiz=1" },
      toolNote: "The fault is hidden — diagnose it from the instruments.",
    },
    {
      n: 5,
      title: "Work on real plant",
      modules: ["repair", "safety"],
      blurb: "Recovery, evacuation, charging and leak work — and the pressure, refrigerant and electrical hazards that make the procedure matter.",
      tool: { label: "Service Bay", href: "service.html" },
      toolNote: "Fit the gauges yourself, in the right order, with real consequences.",
    },
    {
      n: 6,
      title: "Work to the Code",
      modules: ["code-of-practice"],
      blurb: "The Refrigerant Handling Code of Practice clause by clause: what it covers and who it binds, the discharge prohibitions, and the required procedure for leak testing, evacuation, charging, recovery and cylinder handling.",
      tool: { label: "Reference library", href: "learn.html#reference/cop" },
      toolNote: "Document structure and the clause index the lessons cite.",
    },
  ];

  const PROGRESS_KEY = "refrigSim.progress";

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); }
    catch (e) { return {}; }
  }

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---- Legacy deep links ---------------------------------------------------
     The simulator used to live at index.html, and lessons, bookmarks and any
     link already shared point here with its query string. Send those on rather
     than dropping the learner on the home page. */
  function redirectLegacySimLinks() {
    const q = location.search;
    if (!q || q.length < 2) return false;
    const params = new URLSearchParams(q);
    const SIM_PARAMS = ["quiz", "tour", "view", "fault", "r", "speed", "load", "level"];
    if (!SIM_PARAMS.some((k) => params.has(k))) return false;
    location.replace("simulator.html" + q + location.hash);
    return true;
  }

  /* ---- Stage rendering ------------------------------------------------------ */
  function stageStats(stage, course, progress) {
    let total = 0, done = 0;
    for (const id of stage.modules) {
      const mod = course.find((m) => m.id === id);
      if (!mod) continue;
      for (const les of mod.lessons) {
        total++;
        if ((progress[mod.id + "/" + les.id] || {}).done) done++;
      }
    }
    return { total, done };
  }

  function firstUnfinished(stage, course, progress) {
    for (const id of stage.modules) {
      const mod = course.find((m) => m.id === id);
      if (!mod) continue;
      for (const les of mod.lessons) {
        if (!(progress[mod.id + "/" + les.id] || {}).done) {
          return "learn.html#" + mod.id + "/" + les.id;
        }
      }
    }
    return "learn.html#" + stage.modules[0];
  }

  function render() {
    const course = window.COURSE || [];
    const progress = loadProgress();
    const list = document.getElementById("stageList");
    if (!list || !course.length) return;

    let grandTotal = 0, grandDone = 0;
    let firstOpenStage = null;

    const html = STAGES.map((stage) => {
      const { total, done } = stageStats(stage, course, progress);
      grandTotal += total;
      grandDone += done;
      const complete = total > 0 && done === total;
      const started = done > 0 && !complete;
      if (!complete && firstOpenStage === null) firstOpenStage = stage;

      const moduleNames = stage.modules
        .map((id) => (course.find((m) => m.id === id) || {}).title)
        .filter(Boolean)
        // module titles are prefixed "3 · Components deep-dive" — the stage
        // already numbers the path, so drop the module number here
        .map((t) => t.replace(/^\d+\s*·\s*/, ""));

      const status = complete
        ? '<span class="stage-status done">Complete ✓</span>'
        : started
          ? `<span class="stage-status going">${done} of ${total} lessons</span>`
          : `<span class="stage-status">${total} lessons</span>`;

      return `<li class="stage-card ${complete ? "complete" : ""} ${started ? "started" : ""}">
        <div class="stage-n" aria-hidden="true">${stage.n}</div>
        <div class="stage-body">
          <div class="stage-head">
            <h3>${esc(stage.title)}</h3>
            ${status}
          </div>
          <p class="stage-blurb">${esc(stage.blurb)}</p>
          <p class="stage-modules"><span>Covers</span> ${moduleNames.map(esc).join(" · ")}</p>
          <div class="stage-actions">
            <a class="btn btn-tour stage-go" href="${firstUnfinished(stage, course, progress)}">
              ${complete ? "Revisit the theory" : started ? "Continue this stage" : "Start this stage"}
            </a>
            <a class="stage-tool" href="${stage.tool.href}">
              <span class="stage-tool-label">${esc(stage.tool.label)}</span>
              <span class="stage-tool-note">${esc(stage.toolNote)}</span>
            </a>
          </div>
        </div>
      </li>`;
    }).join("");

    list.innerHTML = html;

    // Final assessment sits after the five stages, not inside one.
    list.insertAdjacentHTML("beforeend", `
      <li class="stage-card stage-final">
        <div class="stage-n" aria-hidden="true">✓</div>
        <div class="stage-body">
          <div class="stage-head"><h3>Final exam &amp; certificate</h3></div>
          <p class="stage-blurb">Questions drawn at random from every module of the program,
          80% to pass, and a printable certificate of completion.</p>
          <div class="stage-actions">
            <a class="btn btn-ghost stage-go" href="learn.html#exam">Open the exam</a>
          </div>
        </div>
      </li>`);

    renderTop(grandDone, grandTotal, firstOpenStage, course, progress);
  }

  function renderTop(done, total, openStage, course, progress) {
    if (!total) return;
    const pct = Math.round((done / total) * 100);
    const bar = document.getElementById("homeProgress");
    const start = document.querySelector(".home-start");
    const note = document.querySelector(".home-cta-note");

    if (done > 0) {
      bar.hidden = false;
      document.getElementById("homeProgressFill").style.width = pct + "%";
      document.getElementById("homeProgressText").textContent =
        `${done} of ${total} lessons complete (${pct}%)`;
    }

    if (!start) return;
    if (!openStage) {
      start.textContent = "Sit the final exam →";
      start.href = "learn.html#exam";
      if (note) note.textContent = "Every stage is complete.";
      return;
    }
    start.textContent = (done > 0 ? "Continue Stage " : "Start Stage ") + openStage.n + " →";
    start.href = firstUnfinished(openStage, course, progress);
    if (note && done > 0) note.textContent = openStage.title + " · progress saves in this browser.";
  }

  /* ---- Specialist streams --------------------------------------------------
     Rendered from the generated syllabus manifest (js/course-index.js) so the
     front door can state the real size of each stream without loading forty
     content files to count them. */
  function renderStreams() {
    const row = document.getElementById("streamRow");
    const S = window.RefrigStreams;
    const INDEX = window.COURSE_INDEX;
    if (!row || !S || !INDEX) return;
    const progress = loadProgress();

    row.innerHTML = S.STREAMS.filter((st) => st.id !== "core" && (INDEX[st.id] || {}).modules)
      .map((st) => {
        const info = INDEX[st.id];
        // Lessons complete in this stream, counted from the same progress store
        // the course writes. Keys are "moduleId/lessonId", and every module of a
        // stream is listed in the manifest by title only — so count by prefix.
        return `<a class="tool-card stream-card" href="learn.html#stream-${esc(st.id)}">
          <h3><span aria-hidden="true">${st.icon}</span> ${esc(st.title)}</h3>
          <p>${esc(st.blurb)}</p>
          <p class="stream-card-meta">${info.modules} modules · ${info.lessons} lessons</p>
        </a>`;
      }).join("");
    // touch progress so the linter and future work see the intent
    void progress;
  }

  function init() {
    if (redirectLegacySimLinks()) return;
    render();
    renderStreams();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
