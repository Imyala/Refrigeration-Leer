/* =========================================================================
   Fault Diagnosis Workshop UI — the measuring side of fault finding.

   The simulator hands you every number at once. This page deliberately does
   not: a job starts with a hidden fault and an empty machine, and the only
   way to a number is to decide where an instrument goes and fit it. All the
   refrigeration logic lives in RefrigDiagnose and RefrigModel; this file is
   presentation, geometry and the running of a job.

   Two things here are load-bearing and easy to get wrong, so they are called
   out where they happen: RefrigDiagnose.readingAt returns gauge pressures in
   BAR ABSOLUTE and must be shown as gauge pressure, and RefrigData's healthy
   condensing temperatures are high enough that the ambient has to be set
   per refrigerant or a healthy machine reads as a condenser fault.

   Browser-only, like service-ui.js.
   ========================================================================= */
"use strict";

const DG_STORE_KEY = "refrigSim.diagnoseScore";

/* Where each measurement point physically lives on the schematic, in the SVG
   user units of #dgScene. `cx`/`cy` is where its value chip sits; the chip is
   pushed off the marker in whichever direction has empty diagram next to it. */
const DG_SPOTS = {
  dischargeLine: { x: 600, y: 180, cx: 600, cy: 150, anchor: "center" },
  highGauge:     { x: 706, y: 214, cx: 722, cy: 214, anchor: "left" },
  // Air probes sit on the airstream arrows rather than the coil's centre line:
  // at x=415 they landed directly on the CONDENSER / EVAPORATOR captions.
  condAirOn:     { x: 487, y: 126, cx: 510, cy: 126, anchor: "left" },
  condAirOff:    { x: 345, y: 234, cx: 312, cy: 234, anchor: "right" },
  condOutlet:    { x: 265, y: 180, cx: 262, cy: 150, anchor: "center" },
  liquidLine:    { x: 150, y: 258, cx: 172, cy: 258, anchor: "left" },
  evapInlet:     { x: 265, y: 390, cx: 262, cy: 420, anchor: "center" },
  evapAirOn:     { x: 487, y: 446, cx: 510, cy: 446, anchor: "left" },
  evapAirOff:    { x: 345, y: 336, cx: 312, cy: 336, anchor: "right" },
  evapOutlet:    { x: 565, y: 390, cx: 562, cy: 360, anchor: "center" },
  suctionLine:   { x: 612, y: 390, cx: 612, cy: 420, anchor: "center" },
  lowGauge:      { x: 706, y: 362, cx: 722, cy: 362, anchor: "left" },
  ampClamp:      { x: 735, y: 300, cx: 735, cy: 332, anchor: "center" },
};
const DG_VIEW = { w: 820, h: 560 };

/* The four that decide most faults, then the rest in the order a technician
   would reach for them. The hint walks this list. */
const DG_CORE = ["lowGauge", "highGauge", "evapOutlet", "liquidLine"];
const DG_HINT_ORDER = DG_CORE.concat([
  "condAirOn", "evapAirOn", "dischargeLine", "condOutlet",
  "suctionLine", "evapInlet", "condAirOff", "evapAirOff", "ampClamp",
]);

/* A hint is a real help, so it costs — but a job is only worth one mark, so
   a whole mark would make hints pointless rather than expensive. */
const DG_HINT_COST = 0.25;

const DG = {
  refrigerant: "R404A",     // a commercial cold-room fluid — the job this page models
  ambient: 32,
  boxAir: -3,
  fault: "none",
  practice: false,
  placed: [],
  hints: 0,
  answer: null,
  result: null,             // set once the learner commits; also the "revealed" flag
  jobNo: 0,
  coach: null,
  detail: null,             // point whose instrument card is showing
  refocus: null,            // selector to put keyboard focus back on after a re-render
  total: { jobs: 0, points: 0, hints: 0 },
};

/* ---- Running score ------------------------------------------------------
   Nice to have, never load-bearing: a locked-down browser must not break the
   workshop, so every touch of storage is wrapped. */
function dgLoadTotal() {
  try {
    const s = JSON.parse(localStorage.getItem(DG_STORE_KEY) || "{}");
    if (typeof s.jobs === "number") DG.total.jobs = s.jobs;
    if (typeof s.points === "number") DG.total.points = s.points;
    if (typeof s.hints === "number") DG.total.hints = s.hints;
  } catch (e) { /* no history is not an error */ }
}
function dgSaveTotal() {
  try { localStorage.setItem(DG_STORE_KEY, JSON.stringify(DG.total)); }
  catch (e) { /* storage may be unavailable or full */ }
}

/* ---- The job ------------------------------------------------------------ */
const dgCycle = () => RefrigModel.deriveAt(DG.refrigerant, 100, 100, DG.fault);
const dgEnv = () => ({ ambient: DG.ambient, boxAir: DG.boxAir });

/* Site conditions that make a healthy machine read healthy for this fluid.
   The base operating points condense hot (R134a at 58 °C), so a fixed 32 °C
   ambient would put condenser TD off the scale before any fault existed —
   the learner would be told the condenser is at fault on every single job. */
function dgResetConditions() {
  const healthy = RefrigModel.deriveAt(DG.refrigerant, 100, 100, "none");
  DG.ambient = Math.max(5, Math.min(55, Math.round(healthy.tCond - 12)));
  DG.boxAir = Math.max(-30, Math.min(25, Math.round(healthy.tEvap + 8)));
}

function dgPickFault() {
  const keys = Object.keys(RefrigData.FAULTS);
  let k = DG.fault;
  /* Two identical jobs in a row read as a broken shuffle, not as chance. */
  for (let i = 0; i < 12 && k === DG.fault; i++) {
    k = keys[Math.floor(Math.random() * keys.length)];
  }
  return k;
}

function dgNewJob() {
  DG.jobNo += 1;
  DG.fault = DG.practice ? DG.fault : dgPickFault();
  DG.placed = [];
  DG.hints = 0;
  DG.answer = null;
  DG.result = null;
  DG.detail = null;
  DG.coach = DG.practice
    ? "Practice mode: pick a fault and fit instruments to see the signature it leaves on the gauges."
    : "A machine has been reported not holding temperature. Nothing has been measured yet. Where would you start?";
  dgRender();
}

function dgTogglePoint(id) {
  if (DG.result) return;                      // the job is over; leave the machine alone
  const i = DG.placed.indexOf(id);
  if (i >= 0) DG.placed.splice(i, 1);
  else DG.placed.push(id);
  DG.detail = id;
  /* Panels are re-rendered wholesale, which throws away the button the
     keyboard was standing on. Put the caret back where the learner left it. */
  DG.refocus = `.dg-pt[data-id="${id}"]`;
  dgRender();
}

function dgRestoreFocus() {
  if (!DG.refocus) return;
  const el = document.querySelector(DG.refocus);
  DG.refocus = null;
  if (el && el.focus) el.focus();
}

function dgHint() {
  if (DG.result) return;
  const next = DG_HINT_ORDER.find(id => !DG.placed.includes(id));
  if (!next) {
    DG.coach = "There is nothing left to measure — every instrument the kit has is already on the machine. The answer is in the readings you have, not in another probe.";
    dgRender();
    return;
  }
  DG.hints += 1;
  const p = RefrigDiagnose.POINTS[next];
  /* Enough of the point's `why` to be a reason, not a slogan: some of them
     open with three words ("The load.") that help nobody on their own. */
  const parts = p.why.split(". ");
  let why = parts[0];
  for (let i = 1; i < parts.length && why.length < 45; i++) why += ". " + parts[i];
  DG.coach = `Take <b>${p.label}</b> next. ${why.replace(/\.$/, "")}. <span class="dg-cost">(−${DG_HINT_COST} of this job's mark)</span>`;
  dgRender();
}

/* judge() builds its wrong-answer sentence out of the fault's `diag`, and the
   healthy "fault" has none — left alone it prints the word "null" at the
   learner. Patch it here rather than in the engine the tests pin. */
const DG_HEALTHY_NOTE = "There was nothing wrong with this machine. Being willing to say so — and hand it back untouched — is part of the job; fitting gauges to a healthy system and adjusting something is how faults get created.";

function dgSubmit() {
  if (!DG.answer || DG.result) return;
  const j = RefrigDiagnose.judge(DG.answer, DG.fault);
  let text = (j.text || "").replace(/\s*null\s*$/, "").trim();
  if (!text || DG.fault === "none") text = (text ? text + " " : "") + DG_HEALTHY_NOTE;

  const earned = Math.max(0, j.score - DG_HINT_COST * DG.hints);
  DG.result = {
    verdict: j.verdict, score: j.score, earned, text,
    eff: RefrigDiagnose.efficiency(DG.placed),
  };
  DG.total.jobs += 1;
  DG.total.points += earned;
  DG.total.hints += DG.hints;
  dgSaveTotal();
  dgRender();
}

/* ---- Formatting ---------------------------------------------------------
   Everything on this page goes through RefrigUnits so the learner's kPa/bar/
   psi and °C/°F choice, shared with every other page, is honoured. */
function dgValueText(id, v) {
  const kind = RefrigDiagnose.POINTS[id].kind;
  if (kind === "gauge") return RefrigUnits.fmtPGauge(v);   // readingAt gives bar ABSOLUTE
  if (kind === "elec") return `${Math.round(v)}% FLA`;
  return RefrigUnits.fmtT(v);
}

/* The second line of a gauge reading is the whole point of a gauge: pressure
   is what you read, saturation temperature is what you use. */
function dgValueNote(id, v, base) {
  if (RefrigDiagnose.POINTS[id].kind !== "gauge") return "";
  const sat = RefrigModel.satTemp(base, v);
  return `absolute ${RefrigUnits.fmtPAbs(v)} · saturation temperature <b>${RefrigUnits.fmtT(sat)}</b>`;
}

const dgEsc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ---- The machine: instrument overlay ------------------------------------
   The schematic itself is static markup in the page (so the circuit is there
   before any script runs). Only the instruments are generated, as real
   <button>s positioned over the SVG in percentages — a percentage box tracks
   the viewBox exactly, and a button gets keyboard, focus and pressed state
   for free in a way an SVG <g> never does. */
function dgRenderOverlay() {
  const wrap = document.getElementById("dgOverlay");
  const cyc = dgCycle(), env = dgEnv();
  const pct = (v, span) => (v / span * 100).toFixed(3) + "%";

  let html = "";
  for (const [id, p] of Object.entries(RefrigDiagnose.POINTS)) {
    const s = DG_SPOTS[id];
    if (!s) continue;
    const on = DG.placed.includes(id);
    const glyph = p.kind === "gauge" ? "◎" : p.kind === "elec" ? "⌇" : "▮";
    html += `<button type="button" class="dg-pt kind-${p.kind}${on ? " on" : ""}"
        style="left:${pct(s.x, DG_VIEW.w)};top:${pct(s.y, DG_VIEW.h)}"
        data-id="${id}" aria-pressed="${on}" aria-describedby="dgWhy-${id}"
        ${DG.result ? "disabled" : ""}>
        <span aria-hidden="true">${on ? glyph : "+"}</span>
        <span class="dg-sr">${on ? "Remove" : "Fit"} ${dgEsc(p.label)}</span>
        <span class="dg-sr" id="dgWhy-${id}">${dgEsc(p.instrument)}. ${dgEsc(p.why)}</span>
      </button>`;
    if (on) {
      const v = RefrigDiagnose.readingAt(id, cyc, env, DG.fault);
      html += `<span class="dg-chip ${s.anchor}" aria-hidden="true"
          style="left:${pct(s.cx, DG_VIEW.w)};top:${pct(s.cy, DG_VIEW.h)}">${dgValueText(id, v)}</span>`;
    }
  }
  wrap.innerHTML = html;

  wrap.querySelectorAll(".dg-pt").forEach(b => {
    b.addEventListener("click", () => dgTogglePoint(b.dataset.id));
    /* Hover and focus both open the instrument card: the "what is this and why
       would I measure it" is how a learner discovers what is worth measuring. */
    b.addEventListener("mouseenter", () => dgShowDetail(b.dataset.id));
    b.addEventListener("focus", () => dgShowDetail(b.dataset.id));
  });
}

function dgShowDetail(id) {
  DG.detail = id;
  dgRenderDetail();
}

function dgRenderDetail() {
  const el = document.getElementById("dgPointDetail");
  const id = DG.detail;
  if (!id || !RefrigDiagnose.POINTS[id]) {
    el.innerHTML = `<p class="dg-detail-empty">Point at an instrument position on the machine — or tab through them —
      to see what instrument goes there and what it would tell you.</p>`;
    return;
  }
  const p = RefrigDiagnose.POINTS[id];
  const on = DG.placed.includes(id);
  el.innerHTML = `
    <h3>${dgEsc(p.label)} ${on ? '<span class="dg-tag on">fitted</span>' : '<span class="dg-tag">not fitted</span>'}</h3>
    <p class="dg-instrument"><b>Instrument:</b> ${dgEsc(p.instrument)}</p>
    <p class="dg-why">${dgEsc(p.why)}</p>`;
}

/* ---- Readings ----------------------------------------------------------- */
function dgRenderReadings() {
  const el = document.getElementById("dgReadings");
  const count = document.getElementById("dgReadCount");
  const cyc = dgCycle(), env = dgEnv();
  count.textContent = `${DG.placed.length} of ${Object.keys(RefrigDiagnose.POINTS).length} fitted`;

  if (!DG.placed.length) {
    el.innerHTML = `<p class="dg-empty">Nothing is fitted yet, so there is nothing to read.
      That is the honest starting position on every job: the machine tells you nothing until you
      ask it something.</p>`;
    return;
  }

  /* Definition order, not click order — the same order every time, so a
     learner can compare one job against the last. */
  const rows = Object.keys(RefrigDiagnose.POINTS)
    .filter(id => DG.placed.includes(id))
    .map(id => {
      const p = RefrigDiagnose.POINTS[id];
      const v = RefrigDiagnose.readingAt(id, cyc, env, DG.fault);
      const note = dgValueNote(id, v, cyc.base);
      return `<li class="dg-read kind-${p.kind}">
          <span class="dg-read-label">${dgEsc(p.short)}</span>
          <span class="dg-read-value">${dgValueText(id, v)}</span>
          ${note ? `<span class="dg-read-note">${note}</span>` : ""}
        </li>`;
    }).join("");
  el.innerHTML = `<ul class="dg-read-list">${rows}</ul>`;
}

/* ---- Derived values -----------------------------------------------------
   The locked half of this panel is the most valuable thing on the page: a
   number you cannot have yet, and the exact reason you cannot have it. It is
   rendered first, and at full strength, not as a greyed-out footnote. */
function dgRenderDerived() {
  const el = document.getElementById("dgDerived");
  const cyc = dgCycle();
  const res = RefrigDiagnose.derive(DG.placed, cyc, dgEnv(), DG.fault);
  const ready = [], missing = [];

  for (const [key, d] of Object.entries(res)) {
    if (d.available) {
      ready.push(`<li class="dg-derived ok">
          <span class="dg-derived-label">${dgEsc(d.def.label)}</span>
          <span class="dg-derived-value">${RefrigUnits.fmtDT(d.value)}</span>
        </li>`);
      continue;
    }
    const have = d.needs.filter(n => DG.placed.includes(n));
    const gap = d.needs.filter(n => !DG.placed.includes(n));
    const chips = d.needs.map(n => {
      const got = DG.placed.includes(n);
      return `<li class="dg-need ${got ? "got" : "gap"}">
          <span aria-hidden="true">${got ? "✓" : "✗"}</span>
          <span class="dg-sr">${got ? "you have" : "still missing"}:</span>
          ${dgEsc(RefrigDiagnose.POINTS[n].label)}</li>`;
    }).join("");
    /* One-of-two is the teachable moment — say it out loud rather than
       leaving the learner to notice a tick and a cross. */
    const oneAway = have.length === d.needs.length - 1
      ? `<p class="dg-oneaway">One reading away. You have ${dgEsc(RefrigDiagnose.POINTS[have[0]].short)};
         without ${dgEsc(RefrigDiagnose.POINTS[gap[0]].label.toLowerCase())} this number does not exist —
         it cannot be estimated, guessed or read off anything else.</p>`
      : "";
    missing.push(`<li class="dg-derived locked">
        <span class="dg-derived-label">${dgEsc(d.def.label)}</span>
        <span class="dg-derived-value none">not yet</span>
        <ul class="dg-needs">${chips}</ul>
        ${oneAway}
        <p class="dg-needwhy">${dgEsc(d.def.needsWhy)}</p>
      </li>`);
  }

  el.innerHTML =
    (ready.length ? `<h3 class="dg-sub-head">Worked out</h3><ul class="dg-derived-list">${ready.join("")}</ul>` : "") +
    (missing.length ? `<h3 class="dg-sub-head warn">Out of reach — and exactly why</h3>
        <ul class="dg-derived-list">${missing.join("")}</ul>` : "") +
    (missing.length ? "" : `<p class="dg-empty">Every derived value on this machine is now available.
        Whether they were all worth taking is another question.</p>`);
}

/* ---- Evidence ----------------------------------------------------------- */
const DG_STATE_WORD = { good: "Normal", watch: "Watch", bad: "Problem", key: "Key evidence" };

function dgRenderEvidence() {
  const el = document.getElementById("dgEvidence");
  const cyc = dgCycle();
  const res = RefrigDiagnose.derive(DG.placed, cyc, dgEnv(), DG.fault);
  const notes = RefrigDiagnose.interpret(res, cyc, DG.placed);

  if (!notes.length) {
    el.innerHTML = `<p class="dg-empty">No evidence yet — evidence is what readings become once
      there are enough of them to mean something.</p>`;
    return;
  }
  /* A "key" note is the strongest signal the engine produces: it names the
     pattern rather than the number. It goes to the top and it looks like it. */
  const order = { key: 0, bad: 1, watch: 2, good: 3 };
  const sorted = notes.slice().sort((a, b) => order[a.state] - order[b.state]);
  el.innerHTML = `<ul class="dg-ev-list">${sorted.map(n => `
      <li class="dg-ev ${n.state}">
        <span class="dg-ev-tag">${DG_STATE_WORD[n.state] || n.state}</span>
        <span class="dg-ev-text">${dgEsc(n.text)}</span>
      </li>`).join("")}</ul>`;
}

/* ---- Diagnosis and reveal ----------------------------------------------- */
function dgRenderDiagnosis() {
  const el = document.getElementById("dgDiagnosis");
  const line = document.getElementById("dgScoreLine");
  const t = DG.total;
  line.textContent = t.jobs
    ? `${t.points.toFixed(2)} from ${t.jobs} job${t.jobs === 1 ? "" : "s"}${t.hints ? ` · ${t.hints} hint${t.hints === 1 ? "" : "s"}` : ""}`
    : "no jobs finished yet";

  if (DG.practice) {
    const f = RefrigData.FAULTS[DG.fault];
    el.innerHTML = `
      <p class="dg-empty">Practice mode — the fault is on the table, so there is nothing to guess.
      Fit instruments and watch what <b>${dgEsc(f.label)}</b> does to them.</p>
      ${dgFaultDossier(DG.fault, "Studying", true)}`;
    return;
  }

  if (!DG.result) {
    const opts = Object.entries(RefrigData.FAULTS).map(([k, f]) => `
      <button type="button" class="dg-opt${DG.answer === k ? " on" : ""}" data-fault="${k}"
        aria-pressed="${DG.answer === k}">${dgEsc(f.label)}</button>`).join("");
    el.innerHTML = `
      <p class="dg-empty">Name the fault. Committing is the point: a diagnosis you will not
      write on the sheet is not a diagnosis.</p>
      <div class="dg-opts" role="group" aria-label="Candidate faults">${opts}</div>
      <div class="quiz-actions dg-submit-row">
        <button id="dgSubmitBtn" class="btn btn-tour" type="button" ${DG.answer ? "" : "disabled"}>Commit to this diagnosis</button>
      </div>`;
    el.querySelectorAll(".dg-opt").forEach(b => b.addEventListener("click", () => {
      DG.answer = b.dataset.fault;
      DG.refocus = `.dg-opt[data-fault="${b.dataset.fault}"]`;
      dgRender();
    }));
    const sub = document.getElementById("dgSubmitBtn");
    if (sub) sub.addEventListener("click", dgSubmit);
    return;
  }

  const r = DG.result;
  const cls = r.verdict === "correct" ? "correct" : r.verdict === "close" ? "close" : "wrong";
  const word = r.verdict === "correct" ? "Correct" : r.verdict === "close" ? "Half a mark — right family, wrong fault" : "Not this one";
  el.innerHTML = `
    <div class="dg-verdict ${cls}">
      <p class="dg-verdict-head"><b>${word}</b> · you said ${dgEsc(RefrigData.FAULTS[DG.answer].label)}</p>
      <p class="dg-verdict-score">${r.score.toFixed(1)} mark${r.score === 1 ? "" : "s"}${DG.hints ? `, less ${(DG_HINT_COST * DG.hints).toFixed(2)} for ${DG.hints} hint${DG.hints === 1 ? "" : "s"}` : ""} → <b>${r.earned.toFixed(2)}</b></p>
      <p>${r.text}</p>
    </div>
    ${dgFaultDossier(DG.fault, "The fault was", !r.text.includes(RefrigData.FAULTS[DG.fault].diag || DG_HEALTHY_NOTE))}
    <div class="dg-efficiency ${r.eff.rating}">
      <p><b>How you went about it — ${dgEsc(r.eff.rating)}</b></p>
      <p>${dgEsc(r.eff.text)}</p>
    </div>
    <div class="quiz-actions dg-submit-row">
      <button id="dgAgainBtn" class="btn btn-tour" type="button">Next job</button>
    </div>`;
  const again = document.getElementById("dgAgainBtn");
  if (again) again.addEventListener("click", dgNewJob);
}

/* The clues are what the gauges never tell you: what the machine looked,
   sounded and felt like. They belong with the reveal, not with the readings. */
function dgFaultDossier(key, lead, showDiag) {
  const f = RefrigData.FAULTS[key];
  return `
    <div class="dg-dossier">
      <h3>${lead}: ${dgEsc(f.label)}</h3>
      ${showDiag ? `<p>${f.diag ? dgEsc(f.diag) : DG_HEALTHY_NOTE}</p>` : ""}
      <p class="dg-clue-head">At the machine you would have seen, heard and felt:</p>
      <ul class="dg-clues">${f.clues.map(c => `<li>${dgEsc(c)}</li>`).join("")}</ul>
    </div>`;
}

/* ---- Job panel ---------------------------------------------------------- */
function dgRenderJob() {
  const mode = document.getElementById("dgJobMode");
  const line = document.getElementById("dgJobLine");
  mode.textContent = DG.practice ? "Practice · fault visible"
    : DG.result ? "Job closed · fault revealed" : "Live job · fault hidden";
  line.innerHTML = DG.practice
    ? `Studying <b>${dgEsc(RefrigData.FAULTS[DG.fault].label)}</b> on ${dgEsc(RefrigData.REFRIGERANTS[DG.refrigerant].label)} — nothing is scored here.`
    : `Job ${DG.jobNo} · ${dgEsc(RefrigData.REFRIGERANTS[DG.refrigerant].label)} · compressor at rated duty ·
       ${DG.result ? "closed" : "the fault is hidden until you commit"}`;

  document.getElementById("dgAmbientOut").textContent = RefrigUnits.fmtT(DG.ambient);
  document.getElementById("dgBoxAirOut").textContent = RefrigUnits.fmtT(DG.boxAir);
  document.getElementById("dgAmbient").value = String(DG.ambient);
  document.getElementById("dgBoxAir").value = String(DG.boxAir);
  document.getElementById("dgHintBtn").disabled = !!DG.result || DG.practice;
  document.getElementById("dgFaultPick").hidden = !DG.practice;
  document.getElementById("dgPractice").checked = DG.practice;
  /* Only mirror the hidden fault into the picker in practice mode — during a
     live job the answer should not be sitting in the DOM waiting to be read. */
  if (DG.practice) document.getElementById("dgFaultSelect").value = DG.fault;

  const coach = document.getElementById("dgCoach");
  coach.innerHTML = DG.coach ? `<div class="quiz-feedback good"><p>${DG.coach}</p></div>` : "";
}

function dgRender() {
  dgRenderJob();
  dgRenderOverlay();
  dgRenderDetail();
  dgRenderReadings();
  dgRenderDerived();
  dgRenderEvidence();
  dgRenderDiagnosis();
  dgRestoreFocus();
}

/* ---- Boot --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const rSel = document.getElementById("dgRefrigerant");
  rSel.innerHTML = Object.keys(RefrigData.REFRIGERANTS)
    .map(k => `<option value="${k}">${RefrigData.REFRIGERANTS[k].label}</option>`).join("");
  rSel.value = DG.refrigerant;
  rSel.addEventListener("change", () => {
    DG.refrigerant = rSel.value;
    dgResetConditions();     // site conditions belong to the machine, not the last job
    dgNewJob();
  });

  const fSel = document.getElementById("dgFaultSelect");
  fSel.innerHTML = Object.entries(RefrigData.FAULTS)
    .map(([k, f]) => `<option value="${k}">${f.label}</option>`).join("");
  fSel.addEventListener("change", () => { DG.fault = fSel.value; DG.detail = null; dgRender(); });

  const pSel = document.getElementById("dgPUnit");
  const tSel = document.getElementById("dgTUnit");
  pSel.value = RefrigUnits.prefs.p;
  tSel.value = RefrigUnits.prefs.t;
  const onUnits = () => { RefrigUnits.setPrefs(pSel.value, tSel.value); dgRender(); };
  pSel.addEventListener("change", onUnits);
  tSel.addEventListener("change", onUnits);

  document.getElementById("dgAmbient").addEventListener("input", (e) => {
    DG.ambient = +e.target.value; dgRender();
  });
  document.getElementById("dgBoxAir").addEventListener("input", (e) => {
    DG.boxAir = +e.target.value; dgRender();
  });

  document.getElementById("dgNewJobBtn").addEventListener("click", dgNewJob);
  document.getElementById("dgHintBtn").addEventListener("click", dgHint);

  document.getElementById("dgPractice").addEventListener("change", (e) => {
    DG.practice = e.target.checked;
    if (DG.practice) DG.fault = fSel.value || "lowCharge";
    dgNewJob();
  });

  dgLoadTotal();
  dgResetConditions();
  dgNewJob();
});
