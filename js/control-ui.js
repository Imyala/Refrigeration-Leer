/* =========================================================================
   Control Circuit Workshop UI — the electrical side of fault finding.

   Draws the ladder diagram of a single-phase packaged unit with its test
   points, and wires the meter, the isolation controls and the diagnosis to
   the RefrigControl engine. Every reading comes from the engine; this file
   is presentation and the running of a job. Browser-only.
   ========================================================================= */
"use strict";

const CT_STORE_KEY = "refrigSim.controlScore";
const CT_HINT_ORDER = [
  { text: "Look at the machine first: is the contactor in, is the compressor running, humming or silent, is the fan turning?" },
  { text: "Voltage to neutral along the control chain, live. Every node up to the open contact reads 230 V; every node after it reads 0. One reading halfway along halves the suspects." },
  { text: "Voltage ACROSS each component: the one open contact in a series circuit has the full 230 V across it; closed ones read 0." },
  { text: "If the contactor pulls in and nothing runs: T1 to N tells you whether the main contacts carry; the clamp meter tells you whether the motor is turning, humming, or open." },
  { text: "Before any ohms, capacitance or insulation test: isolate, prove the tester, test for dead, prove again." },
];

/* Opened as a stage of the capstone job? Then the brief shows, and the
   result is reported back to the job when the diagnosis is committed. */
const CT_CAP = (typeof RefrigCapstone !== "undefined") ? RefrigCapstone.stageFromLocation() : null;

const CT = {
  fault: "none", state: null, practice: false, jobNo: 0,
  instrument: "volts", probeA: "n0", probeB: "N", conductor: "compressor", gaugeSide: "low",
  log: [], answer: null, result: null, hints: 0, coach: "",
  total: { jobs: 0, points: 0, hints: 0 },
  refocus: null,
};

function ctEsc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

function ctLoadTotal() {
  try {
    const t = JSON.parse(localStorage.getItem(CT_STORE_KEY) || "null");
    if (t && Number.isFinite(t.jobs)) CT.total = t;
  } catch (e) { /* ignore */ }
}
function ctSaveTotal() {
  try { localStorage.setItem(CT_STORE_KEY, JSON.stringify(CT.total)); } catch (e) { /* ignore */ }
}

function ctPickFault() {
  const keys = Object.keys(RefrigControl.FAULTS);
  let k = CT.fault;
  for (let i = 0; i < 12 && k === CT.fault; i++) k = keys[Math.floor(Math.random() * keys.length)];
  return k;
}

function ctNewJob() {
  CT.jobNo += 1;
  CT.fault = CT.practice ? CT.fault : ctPickFault();
  CT.state = RefrigControl.newState(CT.fault);
  CT.log = [];
  CT.answer = null; CT.result = null; CT.hints = 0;
  if (CT_CAP && !CT.practice && CT.fault === "none") CT.fault = ctPickFault();   // the capstone's dead unit has a fault
  CT.coach = CT.practice
    ? "Practice mode: pick a fault and take readings to see the signature it leaves on the meter."
    : CT_CAP ? RefrigCapstone.introHtml(CT_CAP)
    : "Call-out: the cool room is warm and the customer says the unit \"just stopped\". The isolator is closed and the unit is live. Where would you start?";
  ctRender();
}

function ctPush(res) {
  CT.log.unshift({ kind: res.kind, msg: res.msg });
  if (CT.log.length > 40) CT.log.pop();
  CT.coach = "";
}

function ctDo(fn) {
  if (CT.result) return;
  ctPush(fn(CT.state));
  ctRender();
}

function ctMeasure() {
  if (CT.result) return;
  const K = RefrigControl;
  let res;
  if (CT.instrument === "volts") res = K.measure(CT.state, "volts", CT.probeA, CT.probeB);
  else if (CT.instrument === "ohms") res = K.measure(CT.state, "ohms", CT.probeA, CT.probeB);
  else if (CT.instrument === "amps") res = K.measure(CT.state, "amps", CT.conductor);
  else if (CT.instrument === "gauge") res = K.measure(CT.state, "gauge", CT.gaugeSide);
  else res = K.measure(CT.state, CT.instrument);
  ctPush(res);
  CT.refocus = "#ctReadBtn";
  ctRender();
}

function ctHint() {
  if (CT.result) return;
  const h = CT_HINT_ORDER[Math.min(CT.hints, CT_HINT_ORDER.length - 1)];
  CT.hints += 1;
  CT.coach = `${h.text} <span class="dg-cost">(−${RefrigControl.HINT_COST} of this job's mark)</span>`;
  ctRender();
}

function ctSubmit() {
  if (!CT.answer || CT.result) return;
  const K = RefrigControl;
  const j = K.judge(CT.answer, CT.fault);
  const m = K.method(CT.state);
  const earned = Math.max(0, j.score - K.HINT_COST * CT.hints - m.penalty);
  CT.result = { verdict: j.verdict, score: j.score, earned, text: j.text, method: m };
  CT.total.jobs += 1; CT.total.points += earned; CT.total.hints += CT.hints;
  ctSaveTotal();
  if (typeof RefrigEvidence !== "undefined") {
    RefrigEvidence.record({ tool: "control", score: earned, detail: {
      fault: CT.fault, answer: CT.answer, verdict: j.verdict, readings: CT.state.measurements.length,
      hints: CT.hints, liveOhms: CT.state.liveOhms, provenDead: K.provenDead(CT.state) || CT.state.unprovedOhms === 0,
      capstone: CT_CAP ? CT_CAP.id : null } });
  }
  if (CT_CAP) {
    const st = RefrigCapstone.complete(CT_CAP.id, { score: earned, detail: { fault: CT.fault, verdict: j.verdict } });
    CT.coach = RefrigCapstone.doneHtml(CT_CAP, st);
  }
  ctRender();
}

/* ---- Ladder diagram ---------------------------------------------------------
   Built as a string so the page can boot without an SVG DOM. Test points are
   buttons; the current probes are highlighted. Colours are attributes on an
   instrument-face background, the same convention as the other schematics. */
function ctLadderSvg() {
  const s = CT.state;
  const p = RefrigControl.picture(s);
  const m = RefrigControl.machine(s);
  const INK = "#c9d6e2", DIM = "#4d6275", LIVE = "#ff8a5c", DEAD = "#4fc3f7", HI = "#ffd166";
  const L = 46, N = 474;
  const y1 = 70, y2 = 170, y3 = 250, yCap = 215;

  const wire = (x1, y1_, x2, y2_, live) => `<line x1="${x1}" y1="${y1_}" x2="${x2}" y2="${y2_}" stroke="${live ? LIVE : DIM}" stroke-width="${live ? 2.2 : 1.6}"/>`;
  const box = (x, y, w, label, closed, id) => `
    <rect x="${x}" y="${y - 12}" width="${w}" height="24" rx="4" fill="none" stroke="${INK}" stroke-width="1.3"/>
    <text x="${x + w / 2}" y="${y - 16}" fill="${INK}" font-size="9" text-anchor="middle">${label}</text>
    ${closed ? `<line x1="${x + 6}" y1="${y}" x2="${x + w - 6}" y2="${y}" stroke="${INK}" stroke-width="2"/>`
             : `<line x1="${x + 6}" y1="${y}" x2="${x + w - 9}" y2="${y - 9}" stroke="${HI}" stroke-width="2"/>`}`;
  const tp = (id, x, y) => {
    const sel = CT.probeA === id ? "A" : CT.probeB === id ? "B" : "";
    const v = p.v[id];
    return `<g class="ct-tp${sel ? " on" : ""}" data-node="${id}" role="button" tabindex="0" aria-label="Test point ${ctEsc(RefrigControl.NODES[id].label)}">
      <circle cx="${x}" cy="${y}" r="7" fill="${sel ? HI : "#0d141c"}" stroke="${v === 230 ? LIVE : DEAD}" stroke-width="2"/>
      <text x="${x}" y="${y + 20}" fill="${sel ? HI : INK}" font-size="9" text-anchor="middle" font-weight="${sel ? 700 : 400}">${RefrigControl.NODES[id].short}${sel ? " · " + sel : ""}</text>
    </g>`;
  };
  const closed = p.closed;
  const on = (k) => p.v[k] === 230;

  return `<svg viewBox="0 0 520 300" role="img" aria-label="Ladder diagram: control circuit through fuse, thermostat, HP and LP switches and overload to the contactor coil; power circuit through the contactor to the compressor with its run capacitor, and to the condenser fan">
    <rect x="0" y="0" width="520" height="300" fill="#0d141c"/>
    <!-- rails -->
    <text x="${L}" y="22" fill="${INK}" font-size="10" text-anchor="middle">L</text>
    <text x="${N}" y="22" fill="${INK}" font-size="10" text-anchor="middle">N</text>
    <text x="${N}" y="292" fill="${INK}" font-size="9" text-anchor="middle">E ⏚</text>
    <!-- isolator -->
    <line x1="${L}" y1="26" x2="${L}" y2="36" stroke="${INK}" stroke-width="2"/>
    ${s.isolated ? `<line x1="${L}" y1="36" x2="${L + 12}" y2="50" stroke="${HI}" stroke-width="2"/>` : `<line x1="${L}" y1="36" x2="${L}" y2="52" stroke="${LIVE}" stroke-width="2"/>`}
    <text x="${L + 16}" y="44" fill="${s.isolated ? HI : INK}" font-size="9">${s.isolated ? "ISOLATOR OPEN · locked off" : s.supplyTripped ? "SUPPLY TRIPPED" : "isolator closed"}</text>
    ${wire(L, 52, L, 280, on("n0"))}
    ${wire(N, 40, N, 280, false)}
    <!-- control rung -->
    ${wire(L, y1, 62, y1, on("n0"))} ${box(62, y1, 38, "F1", closed.F1)} ${wire(100, y1, 128, y1, on("n1"))}
    ${box(128, y1, 40, "TH", closed.TH)} ${wire(168, y1, 196, y1, on("n2"))}
    ${box(196, y1, 40, "HP", closed.HPS)} ${wire(236, y1, 264, y1, on("n3"))}
    ${box(264, y1, 40, "LP", closed.LPS)} ${wire(304, y1, 332, y1, on("n4"))}
    ${box(332, y1, 40, "OL", closed.OL)} ${wire(372, y1, 396, y1, on("n5"))}
    <circle cx="416" cy="${y1}" r="16" fill="none" stroke="${p.coilEnergised ? LIVE : INK}" stroke-width="1.6"/>
    <text x="416" y="${y1 + 4}" fill="${INK}" font-size="9" text-anchor="middle">K1</text>
    <text x="416" y="${y1 - 22}" fill="${INK}" font-size="9" text-anchor="middle">coil ${p.coilEnergised ? "energised" : "off"}</text>
    ${wire(432, y1, N, y1, false)}
    ${tp("n0", L, 96)} ${tp("n1", 114, y1)} ${tp("n2", 182, y1)} ${tp("n3", 250, y1)} ${tp("n4", 318, y1)} ${tp("n5", 384, y1)}
    <!-- power rung: contactor mains, compressor -->
    ${wire(L, y2, 70, y2, on("n0"))}
    <text x="92" y="${y2 - 18}" fill="${INK}" font-size="9" text-anchor="middle">K1 mains</text>
    ${p.mainsClosed ? `<line x1="70" y1="${y2}" x2="114" y2="${y2}" stroke="${LIVE}" stroke-width="2.4"/>` : `<line x1="70" y1="${y2}" x2="108" y2="${y2 - 12}" stroke="${INK}" stroke-width="2"/>`}
    ${wire(114, y2, 250, y2, on("T1"))}
    ${tp("T1", 150, y2)}
    <circle cx="290" cy="${y2}" r="30" fill="none" stroke="${m.compressor === "running" ? LIVE : INK}" stroke-width="1.6"/>
    <text x="290" y="${y2 - 4}" fill="${INK}" font-size="9" text-anchor="middle">COMP</text>
    <text x="290" y="${y2 + 9}" fill="${INK}" font-size="8" text-anchor="middle">${m.compressor.split(" ")[0]}</text>
    ${tp("C", 260, y2)} ${tp("R", 320, y2)} ${tp("S", 290, y2 + 30)}
    ${wire(320, y2, N, y2, false)}
    ${wire(290, y2 + 30, 290, yCap + 26, false)} ${wire(290, yCap + 26, 360, yCap + 26, false)}
    <rect x="360" y="${yCap + 14}" width="34" height="24" rx="3" fill="none" stroke="${INK}"/>
    <text x="377" y="${yCap + 30}" fill="${INK}" font-size="8" text-anchor="middle">35 µF</text>
    ${wire(394, yCap + 26, N, yCap + 26, false)}
    ${tp("CAP", 377, yCap + 52)}
    <text x="240" y="${y2 + 46}" fill="${INK}" font-size="8" text-anchor="middle">shell ⏚</text>
    ${tp("E", 240, y2 + 60)}
    <!-- fan rung -->
    ${wire(L, y3 + 26, 70, y3 + 26, on("n0"))}
    ${p.mainsClosed ? `<line x1="70" y1="${y3 + 26}" x2="114" y2="${y3 + 26}" stroke="${LIVE}" stroke-width="2.4"/>` : `<line x1="70" y1="${y3 + 26}" x2="108" y2="${y3 + 14}" stroke="${INK}" stroke-width="2"/>`}
    ${wire(114, y3 + 26, 130, y3 + 26, on("FAN"))}
    ${tp("FAN", 140, y3 + 26)}
    ${wire(150, y3 + 26, 178, y3 + 26, on("FAN"))}
    <circle cx="196" cy="${y3 + 26}" r="16" fill="none" stroke="${m.fan === "turning" ? LIVE : INK}" stroke-width="1.6"/>
    <text x="196" y="${y3 + 30}" fill="${INK}" font-size="9" text-anchor="middle">FAN</text>
    ${wire(212, y3 + 26, N, y3 + 26, false)}
    ${tp("N", N, 120)}
  </svg>`;
}

/* ---- Panels ------------------------------------------------------------------ */
function ctRenderMachine() {
  const s = CT.state;
  const m = RefrigControl.machine(s);
  const el = document.getElementById("ctMachine");
  const chip = (label, val, good) => `<span class="ct-chip ${good ? "good" : "watch"}"><b>${label}</b> ${ctEsc(val)}</span>`;
  el.innerHTML = `
    <div class="ct-chips">
      ${chip("Supply", s.isolated ? "isolated and locked off" : s.supplyTripped ? "tripped (RCD / breaker)" : "live", !s.isolated && !s.supplyTripped)}
      ${chip("Contactor", s.isolated ? "—" : m.contactor, m.contactor === "pulled in")}
      ${chip("Compressor", s.isolated ? "—" : m.compressor, m.compressor === "running")}
      ${chip("Fan", s.isolated ? "—" : m.fan, m.fan === "turning")}
    </div>
    <div class="quiz-controls">
      <button type="button" class="btn btn-ghost ct-act" data-act="observe">Look and listen</button>
      <button type="button" class="btn btn-ghost ct-act" data-act="${s.isolated ? "restore" : "isolate"}">${s.isolated ? "Close the isolator (re-energise)" : "Isolate and lock off"}</button>
      <button type="button" class="btn btn-ghost ct-act" data-act="proveTester">Prove the tester</button>
      <button type="button" class="btn btn-ghost ct-act" data-act="testForDead">Test for dead</button>
      ${s.supplyTripped ? `<button type="button" class="btn btn-ghost ct-act" data-act="resetSupply">Reset the RCD</button>` : ""}
    </div>
    <p class="ct-iso">Safe isolation: ${s.isolated ? "isolated" : "not isolated"} ·
      tester proved ${s.provedBefore ? "✓" : "○"} · tested for dead ${s.testedDead ? "✓" : "○"} · proved again ${s.provedAfter ? "✓" : "○"}
      ${RefrigControl.provenDead(s) ? '<b class="good">— proven dead</b>' : ""}</p>`;
  el.querySelectorAll(".ct-act").forEach(b => b.addEventListener("click", () => {
    const K = RefrigControl;
    const fn = { observe: K.observe, isolate: K.isolate, restore: K.restore, proveTester: K.proveTester, testForDead: K.testForDead, resetSupply: K.resetSupply }[b.dataset.act];
    if (fn) ctDo(fn);
  }));
}

function ctRenderLadder() {
  const el = document.getElementById("ctLadder");
  el.innerHTML = ctLadderSvg();
  el.querySelectorAll(".ct-tp").forEach(g => {
    const pick = () => {
      const id = g.dataset.node;
      /* First click sets probe A, second sets probe B; clicking a selected point clears it. */
      if (CT.probeA === id) CT.probeA = null;
      else if (CT.probeB === id) CT.probeB = null;
      else if (!CT.probeA) CT.probeA = id;
      else CT.probeB = id;
      ctRender();
    };
    g.addEventListener("click", pick);
    g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
  });
}

function ctRenderMeter() {
  const el = document.getElementById("ctMeter");
  const nodes = Object.keys(RefrigControl.NODES);
  const opt = (id, cur) => `<option value="${id}" ${cur === id ? "selected" : ""}>${ctEsc(RefrigControl.NODES[id].short)} — ${ctEsc(RefrigControl.NODES[id].label)}</option>`;
  const inst = (id, label, note) => `<label class="ct-inst ${CT.instrument === id ? "on" : ""}"><input type="radio" name="ctInst" value="${id}" ${CT.instrument === id ? "checked" : ""}/> <span><b>${label}</b> <small>${note}</small></span></label>`;
  const twoProbe = CT.instrument === "volts" || CT.instrument === "ohms";
  el.innerHTML = `
    <div class="ct-insts">
      ${inst("volts", "Volts AC", "live — between two points")}
      ${inst("ohms", "Ohms / continuity", "dead only — across one component")}
      ${inst("cap", "Capacitance", "dead only — the run capacitor")}
      ${inst("ir", "Insulation resistance", "dead only — windings to earth at 500 V")}
      ${inst("amps", "Clamp meter", "live — one conductor")}
      ${inst("gauge", "Gauges", "the refrigeration side")}
    </div>
    ${twoProbe ? `
      <div class="ct-probes">
        <label><span>Probe A</span><select id="ctProbeA"><option value="">—</option>${nodes.map(n => opt(n, CT.probeA)).join("")}</select></label>
        <label><span>Probe B</span><select id="ctProbeB"><option value="">—</option>${nodes.map(n => opt(n, CT.probeB)).join("")}</select></label>
      </div>
      <p class="hint">Or click two test points on the diagram.</p>` : ""}
    ${CT.instrument === "amps" ? `
      <div class="ct-probes"><label><span>Conductor</span><select id="ctConductor">
        <option value="compressor" ${CT.conductor === "compressor" ? "selected" : ""}>Compressor common (C)</option>
        <option value="fan" ${CT.conductor === "fan" ? "selected" : ""}>Condenser fan active</option>
        <option value="supply" ${CT.conductor === "supply" ? "selected" : ""}>Supply active at the isolator</option>
      </select></label></div>` : ""}
    ${CT.instrument === "gauge" ? `
      <div class="ct-probes"><label><span>Side</span><select id="ctGauge">
        <option value="low" ${CT.gaugeSide === "low" ? "selected" : ""}>Low side (suction)</option>
        <option value="high" ${CT.gaugeSide === "high" ? "selected" : ""}>High side (discharge)</option>
      </select></label></div>` : ""}
    <div class="quiz-controls">
      <button type="button" id="ctReadBtn" class="btn btn-tour" ${CT.result ? "disabled" : ""}>Take the reading</button>
    </div>`;
  el.querySelectorAll('input[name="ctInst"]').forEach(r => r.addEventListener("change", () => { CT.instrument = r.value; ctRender(); }));
  const a = document.getElementById("ctProbeA"), b = document.getElementById("ctProbeB");
  if (a) a.addEventListener("change", () => { CT.probeA = a.value || null; ctRenderLadder(); });
  if (b) b.addEventListener("change", () => { CT.probeB = b.value || null; ctRenderLadder(); });
  const c = document.getElementById("ctConductor"); if (c) c.addEventListener("change", () => { CT.conductor = c.value; });
  const g = document.getElementById("ctGauge"); if (g) g.addEventListener("change", () => { CT.gaugeSide = g.value; });
  document.getElementById("ctReadBtn").addEventListener("click", ctMeasure);
}

function ctRenderLog() {
  const el = document.getElementById("ctReadings");
  const count = document.getElementById("ctReadCount");
  count.textContent = `${CT.state.measurements.length} reading${CT.state.measurements.length === 1 ? "" : "s"}`;
  if (!CT.log.length) {
    el.innerHTML = `<p class="dg-empty">Nothing measured yet. The machine will tell you a lot before a meter goes on it — look and listen first.</p>`;
    return;
  }
  el.innerHTML = `<ul class="ct-log">${CT.log.map(l => `<li class="${l.kind}">${ctEsc(l.msg)}</li>`).join("")}</ul>`;
}

function ctRenderJob() {
  const mode = document.getElementById("ctJobMode");
  const line = document.getElementById("ctJobLine");
  mode.textContent = CT.practice ? "Practice · fault visible" : CT.result ? "Job closed · fault revealed" : "Live job · fault hidden";
  line.innerHTML = CT.practice
    ? `Studying <b>${ctEsc(RefrigControl.FAULTS[CT.fault].label)}</b> — nothing is scored here.`
    : `Job ${CT.jobNo} · single-phase packaged condensing unit, 230 V · ${CT.result ? "closed" : "the fault is hidden until you commit"}`;
  document.getElementById("ctHintBtn").disabled = !!CT.result || CT.practice;
  document.getElementById("ctFaultPick").hidden = !CT.practice;
  document.getElementById("ctPractice").checked = CT.practice;
  if (CT.practice) document.getElementById("ctFaultSelect").value = CT.fault;
  const coach = document.getElementById("ctCoach");
  coach.innerHTML = CT.coach ? `<div class="quiz-feedback good"><p>${CT.coach}</p></div>` : "";
}

function ctRenderDiagnosis() {
  const el = document.getElementById("ctDiagnosis");
  const line = document.getElementById("ctScoreLine");
  const t = CT.total;
  line.textContent = t.jobs ? `${t.points.toFixed(2)} from ${t.jobs} job${t.jobs === 1 ? "" : "s"}` : "no jobs finished yet";
  const F = RefrigControl.FAULTS;
  if (CT.practice) {
    el.innerHTML = `<p class="dg-empty">Practice mode — the fault is on the table. Take readings and see what <b>${ctEsc(F[CT.fault].label)}</b> does to them.</p>
      <div class="dg-dossier"><p class="dg-clue-head">At the machine you would notice:</p><ul class="dg-clues">${F[CT.fault].clues.map(c => `<li>${ctEsc(c)}</li>`).join("")}</ul></div>`;
    return;
  }
  if (!CT.result) {
    const opts = Object.entries(F).map(([k, f]) => `<button type="button" class="dg-opt${CT.answer === k ? " on" : ""}" data-fault="${k}" aria-pressed="${CT.answer === k}">${ctEsc(f.label)}</button>`).join("");
    el.innerHTML = `
      <p class="dg-empty">Name the fault. A diagnosis you will not write on the sheet is not a diagnosis.</p>
      <div class="dg-opts" role="group" aria-label="Candidate faults">${opts}</div>
      <div class="quiz-actions dg-submit-row"><button id="ctSubmitBtn" class="btn btn-tour" type="button" ${CT.answer ? "" : "disabled"}>Commit to this diagnosis</button></div>`;
    el.querySelectorAll(".dg-opt").forEach(b => b.addEventListener("click", () => { CT.answer = b.dataset.fault; CT.refocus = `.dg-opt[data-fault="${b.dataset.fault}"]`; ctRender(); }));
    const sub = document.getElementById("ctSubmitBtn"); if (sub) sub.addEventListener("click", ctSubmit);
    return;
  }
  const r = CT.result;
  const cls = r.verdict === "correct" ? "correct" : r.verdict === "close" ? "close" : "wrong";
  const word = r.verdict === "correct" ? "Correct" : r.verdict === "close" ? "Half a mark — same picture, different part" : "Not this one";
  const deductions = [];
  if (CT.hints) deductions.push(`${(RefrigControl.HINT_COST * CT.hints).toFixed(2)} for ${CT.hints} hint${CT.hints === 1 ? "" : "s"}`);
  if (r.method.penalty) deductions.push(`${r.method.penalty.toFixed(2)} for the method`);
  el.innerHTML = `
    <div class="dg-verdict ${cls}">
      <p class="dg-verdict-head"><b>${word}</b> · you said ${ctEsc(F[CT.answer].label)}</p>
      <p class="dg-verdict-score">${r.score.toFixed(1)} mark${r.score === 1 ? "" : "s"}${deductions.length ? ", less " + deductions.join(" and ") : ""} → <b>${r.earned.toFixed(2)}</b></p>
      <p>${ctEsc(r.text)}</p>
    </div>
    <div class="dg-dossier"><h3>The fault was: ${ctEsc(F[CT.fault].label)}</h3>
      <p class="dg-clue-head">At the machine you would have seen and heard:</p>
      <ul class="dg-clues">${F[CT.fault].clues.map(c => `<li>${ctEsc(c)}</li>`).join("")}</ul></div>
    <div class="dg-efficiency ${r.method.penalty ? "incomplete" : "sharp"}">
      <p><b>How you went about it</b></p>
      ${r.method.notes.map(n => `<p class="ct-note ${n.state}">${ctEsc(n.text)}</p>`).join("")}
    </div>
    <div class="quiz-actions dg-submit-row"><button id="ctAgainBtn" class="btn btn-tour" type="button">Next job</button></div>`;
  const again = document.getElementById("ctAgainBtn"); if (again) again.addEventListener("click", ctNewJob);
}

function ctRestoreFocus() {
  if (!CT.refocus) return;
  const el = document.querySelector(CT.refocus);
  CT.refocus = null;
  if (el && el.focus) el.focus();
}

function ctRender() {
  ctRenderJob();
  ctRenderMachine();
  ctRenderLadder();
  ctRenderMeter();
  ctRenderLog();
  ctRenderDiagnosis();
  ctRestoreFocus();
}

/* ---- Boot --------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const fSel = document.getElementById("ctFaultSelect");
  fSel.innerHTML = Object.entries(RefrigControl.FAULTS).map(([k, f]) => `<option value="${k}">${ctEsc(f.label)}</option>`).join("");
  fSel.addEventListener("change", () => { CT.fault = fSel.value; ctNewJob(); });
  document.getElementById("ctNewJobBtn").addEventListener("click", ctNewJob);
  document.getElementById("ctHintBtn").addEventListener("click", ctHint);
  document.getElementById("ctPractice").addEventListener("change", (e) => {
    CT.practice = e.target.checked;
    if (CT.practice) CT.fault = fSel.value || "fuseBlown";
    ctNewJob();
  });
  ctLoadTotal();
  ctNewJob();
});
