/* =========================================================================
   Procedure trainers UI — pressure test, evacuation, recovery and charging,
   brazing. Renders one procedure at a time from RefrigProcedures: the job
   brief with its Code of Practice references, the rig's readouts, the
   actions the learner can take (grouped the way the job is organised), the
   coach's last word and the log, and the order of work graded live in the
   Service Bay's style. Browser-only.
   ========================================================================= */
"use strict";

const PR = {
  proc: "pressureTest", scenario: null, state: null,
  log: [], openWhy: {}, stepSeen: {}, refocus: null, recorded: false,
};
/* Opened as a stage of the capstone job? The scenario is the job's, the brief
   shows, and the finished procedure is reported back. */
const PR_CAP = (typeof RefrigCapstone !== "undefined") ? RefrigCapstone.stageFromLocation() : null;

function prEsc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
const prP = () => RefrigProcedures.PROCEDURES[PR.proc];

/* ---- What each procedure's controls look like ---------------------------------
   `choice` renders one button per option (the engine judges the choice);
   `buttons` renders one button per value for a single action; `number` is an
   input with a button; `numberChoice` is an input plus one button per mode. */
const PR_SPEC = {
  pressureTest: {
    groups: [
      { title: "Set up", items: [
        { kind: "choice", action: "chooseMedium", label: "Test medium", options: () => Object.entries(RefrigProcedures.PROCEDURES.pressureTest.MEDIA).map(([k, m]) => [k, m.label]) },
        { kind: "choice", action: "chooseGauge", label: "Regulator and gauge", options: () => Object.entries(RefrigProcedures.PROCEDURES.pressureTest.GAUGES).map(([k, g]) => [k, g.label]) },
        { kind: "number", action: "setPressure", label: "Test pressure", unit: "kPa", placeholder: "from the nameplate", button: "Set" },
      ] },
      { title: "Pressurise", items: [
        { kind: "buttons", action: "pressurise", label: "Pressurise to", options: [["0.25", "25 %"], ["0.5", "50 %"], ["0.75", "75 %"], ["1", "100 %"]] },
        { kind: "button", action: "checkJoints", label: "Check every joint at this pressure" },
      ] },
      { title: "The hold", items: [
        { kind: "button", action: "isolateAndRecord", label: "Isolate the cylinder; record pressure and ambient" },
        { kind: "buttons", action: "wait", label: "Wait", options: [["1", "1 h"], ["6", "6 h"], ["12", "12 h"], ["24", "24 h"]] },
        { kind: "buttons", action: "declare", label: "Declare", options: [["pass", "Pass — tight"], ["fail", "Fail — leaking"]] },
      ] },
      { title: "If it leaks", items: [
        { kind: "button", action: "locate", label: "Find it with the detector" },
        { kind: "button", action: "depressurise", label: "Depressurise" },
        { kind: "button", action: "repair", label: "Repair the joint" },
        { kind: "button", action: "retest", label: "Start the retest" },
      ] },
    ],
    readouts: (s, P) => [
      ["Gauge", `${s.pressure} kPa`], ["Ambient", `${s.ambient} °C`], ["Clock", P.fmtClock(s.clock)],
      ["Target", s.target ? `${s.target} kPa` : "—"],
      ["Recorded", s.recorded ? `${s.recorded.p} kPa at ${s.recorded.t} °C` : "—"],
      ["Held", `${s.held} h of ${s.scenario.holdH} h`],
      ["Cylinder", s.isolated ? "isolated" : s.medium ? "connected" : "—"],
      ["Leak", s.leakFound ? (s.repaired ? "found and repaired" : "found — not yet repaired") : "none found"],
    ],
  },
  evacuation: {
    groups: [
      { title: "Set up", items: [
        { kind: "button", action: "recover", label: "Recover the charge and depressurise" },
        { kind: "choice", action: "chooseHoses", label: "Hoses", options: () => [["dedicated", "Dedicated large-bore evacuation hoses, short, cores removed"], ["service", "The manifold's 1/4-in service hoses"]] },
        { kind: "choice", action: "chooseGauge", label: "Vacuum gauge", options: () => [["micron", "Electronic micron gauge at the system"], ["manifold", "The manifold's compound gauge"]] },
        { kind: "choice", action: "chooseMethod", label: "Method", options: () => [["deep", "Deep evacuation"], ["triple", "Triple evacuation with OFN breaks"]] },
      ] },
      { title: "Pump", items: [
        { kind: "button", action: "startPump", label: "Start the pump" },
        { kind: "buttons", action: "pump", label: "Run for", options: [["5", "5 min"], ["15", "15 min"], ["30", "30 min"]] },
        { kind: "button", action: "breakOFN", label: "Break the vacuum with OFN (triple)" },
        { kind: "button", action: "isolatePump", label: "Isolate the pump — start the decay test" },
      ] },
      { title: "Decay test", items: [
        { kind: "buttons", action: "hold", label: "Hold for", options: [["5", "5 min"], ["15", "15 min"], ["30", "30 min"]] },
        { kind: "buttons", action: "declare", label: "Declare", options: [["pass", "Dry and tight — charge it"], ["moisture", "Moisture — pull again"], ["leak", "Leak — pressure test"]] },
      ] },
    ],
    readouts: (s, P) => [
      ["System", s.recovered ? "recovered, at zero" : `${s.pressure} kPa g of refrigerant`],
      ["Gauge", s.gauge === "micron" ? P.fmtMicrons(s.microns) : s.gauge === "manifold" ? (s.microns < 700000 ? "needle on the vacuum stop" : "0 kPa g") : "—"],
      ["Pump", s.pumping ? (s.isolatedPump ? "running, valved off" : "running, open to the system") : "off"],
      ["Pumped", `${s.pumpMin} min`], ["Decay test", s.isolatedPump ? `${s.decayMin} min of 60` : "—"],
      ["OFN breaks", `${s.broken} of ${s.method === "triple" ? 2 : 0}`],
    ],
  },
  recoverCharge: {
    groups: [
      { title: "Identify", items: [
        { kind: "choice", action: "identify", label: "What is in it?", options: () => [["label", "Read the nameplate and service record"], ["unknown", "Treat it as unknown — flammable and toxic"], ["assume", "Assume from the type of machine"]] },
        { kind: "button", action: "zoneCheck", label: "Assess the area as a flammable zone" },
        { kind: "button", action: "earth", label: "Earth the system" },
      ] },
      { title: "Cylinder", items: [
        { kind: "choice", action: "chooseCylinder", label: "Recovery cylinder", options: () => Object.entries(RefrigProcedures.PROCEDURES.recoverCharge.CYLINDERS).map(([k, c]) => [k, c.label]) },
        { kind: "number", action: "safeFill", label: "Safe fill (fill ratio × water capacity, less 20 % ullage)", unit: "kg", placeholder: "kg", button: "Set the scales" },
      ] },
      { title: "Recover", items: [
        { kind: "button", action: "recoverLiquid", label: "Recover liquid" },
        { kind: "button", action: "recoverVapour", label: "Recover vapour to the required residual" },
        { kind: "button", action: "weighAndRecord", label: "Weigh, label and record" },
      ] },
      { title: "Charge", items: [
        { kind: "button", action: "evacuate", label: "Pressure test and evacuate" },
        { kind: "button", action: "checkHoses", label: "Leak-check the charging hose" },
        { kind: "numberChoice", action: "charge", label: "Charge", unit: "kg", placeholder: "nameplate kg", options: [["liquid", "As liquid"], ["vapour", "As vapour"]] },
        { kind: "button", action: "record", label: "Record it in the logbook" },
      ] },
    ],
    readouts: (s) => [
      ["Refrigerant", s.identified === "unknown" ? "UNKNOWN — treated as flammable and toxic" : s.identified === "assumed" ? "assumed" : s.identified || "not yet identified"],
      ["Nameplate charge", `${s.scenario.charge} kg`],
      ["Cylinder", s.cylinder ? RefrigProcedures.PROCEDURES.recoverCharge.CYLINDERS[s.cylinder].label.split(",")[0] : "—"],
      ["Scales alarm", s.safeFill ? `${s.safeFill} kg` : "not set"],
      ["Recovered", `${s.recoveredKg} kg`], ["Charged", s.charged ? `${s.charged} kg as ${s.chargeMode}` : "—"],
      ["Zone / earth", s.scenario.flammable ? `${s.zoneChecked ? "assessed" : "not assessed"} / ${s.earthed ? "earthed" : "not earthed"}` : "A1 — not required"],
    ],
  },
  brazing: {
    groups: [
      { title: "Before the torch", items: [
        { kind: "button", action: "recover", label: "Recover the charge and depressurise the section" },
        { kind: "button", action: "protect", label: "Remove or shield heat-sensitive parts" },
        { kind: "button", action: "prepare", label: "Cut, deburr, clean bright, dry-fit" },
        { kind: "choice", action: "purge", label: "Nitrogen purge", options: () => [["gentle", "Gentle flow — just enough to feel"], ["high", "Fast flow — you can hear it"], ["none", "No purge"]] },
        { kind: "choice", action: "alloy", label: "Alloy", options: () => [["phos", "Phos-copper (silver-bearing), no flux"], ["silverFlux", "Silver alloy with flux"], ["soft", "Soft solder"]] },
      ] },
      { title: "The joint", items: [
        { kind: "choice", action: "heat", label: "Heat", options: () => [["fitting", "The fitting first, then the tube"], ["tube", "The tube"], ["rod", "The rod"]] },
        { kind: "button", action: "feed", label: "Feed the rod" },
        { kind: "choice", action: "cool", label: "Cool down", options: () => [["on", "Purge kept flowing until cool"], ["off", "Purge off as soon as the rod flowed"]], map: v => v === "on" },
      ] },
      { title: "Finish", items: [
        { kind: "button", action: "clean", label: "Clean the joint" },
        { kind: "button", action: "test", label: "Pressure test the joint" },
      ] },
    ],
    readouts: (s) => [
      ["Line", s.charged ? `charged — ${s.pressure} kPa` : "recovered, at zero"],
      ["Sensitive parts", s.protected ? "protected" : "in place"], ["Joint", s.prepared ? "prepared" : "as cut"],
      ["Purge", s.purge || "—"], ["Alloy", s.alloy || "—"], ["Heat", s.heated || "—"],
      ["Joint", s.tested ? (s.done ? "tested — tight" : "tested — leaking") : s.fed ? "made" : "—"],
    ],
  },
};

/* ---- Job control --------------------------------------------------------------- */
function prReset() {
  const P = prP();
  if (!PR.scenario || !P.scenarios[PR.scenario]) PR.scenario = Object.keys(P.scenarios)[0];
  PR.state = P.newState(PR.scenario);
  PR.log = []; PR.openWhy = {}; PR.stepSeen = {}; PR.recorded = false;
  prRender();
}

/* When the rig closes the job, record it — once — and report a capstone stage. */
function prOnDone() {
  if (!PR.state.done || PR.recorded) return;
  PR.recorded = true;
  const rep = RefrigProcedures.sequenceReport(prP().SEQUENCE, PR.state);
  const outOfOrder = Object.values(PR.stepSeen).filter(Boolean).length;
  const score = Math.max(0, 1 - 0.1 * outOfOrder - 0.05 * PR.state.warns);
  if (typeof RefrigEvidence !== "undefined") {
    RefrigEvidence.record({ tool: "procedures", score, detail: {
      procedure: PR.proc, scenario: PR.scenario, warns: PR.state.warns, outOfOrder, steps: rep.total,
      capstone: PR_CAP ? PR_CAP.id : null } });
  }
  if (PR_CAP && PR_CAP.href.includes("p=" + PR.proc)) {
    const st = RefrigCapstone.complete(PR_CAP.id, { score, detail: { procedure: PR.proc, warns: PR.state.warns, outOfOrder } });
    PR.log.unshift({ kind: "ok", msg: `Capstone stage ${PR_CAP.n} recorded: ${PR_CAP.done} ${st.next ? "Next: " + st.next.title + " — open it from the job overview." : "The job is complete."}` });
  }
}

function prDo(action, ...args) {
  const res = RefrigProcedures.act(PR.proc, PR.state, action, ...args);
  PR.log.unshift({ kind: res.kind, msg: res.msg });
  if (PR.log.length > 30) PR.log.pop();
  /* Once a step is earned it keeps the verdict it earned — see service-ui.js. */
  RefrigProcedures.sequenceReport(prP().SEQUENCE, PR.state).steps.forEach(st => {
    if (st.complete && !(st.id in PR.stepSeen)) PR.stepSeen[st.id] = st.outOfOrder;
  });
  PR.refocus = `[data-action="${action}"]`;
  prOnDone();
  prRender();
}

/* ---- Panels --------------------------------------------------------------------- */
function prRenderBrief() {
  const P = prP();
  const sc = P.scenarios[PR.scenario];
  const refs = P.refs.map(r => {
    const c = (typeof REFDOCS !== "undefined") ? REFDOCS.clause(r) : null;
    const label = (typeof REFDOCS !== "undefined") ? REFDOCS.label(r) : r;
    return c && c.lesson
      ? `<li><a href="learn.html#code-of-practice/${prEsc(c.lesson)}">${prEsc(label)}</a> — ${prEsc(c.title)}</li>`
      : `<li>${prEsc(label)}</li>`;
  }).join("");
  document.getElementById("prBrief").innerHTML = `
    <p class="pr-brief">${prEsc(sc.brief || sc.label)}</p>
    <details class="reveal">
      <summary>Code of Practice references</summary>
      <ul class="pr-refs">${refs}</ul>
    </details>`;
}

function prRenderRig() {
  const P = prP();
  const rows = PR_SPEC[PR.proc].readouts(PR.state, P);
  // Two even rows on a wide screen, whatever the procedure's count.
  document.getElementById("prRig").innerHTML = `<dl class="pr-readouts" style="--cols:${Math.ceil(rows.length / 2)}">${rows.map(([k, v]) => `<div><dt>${prEsc(k)}</dt><dd>${prEsc(v)}</dd></div>`).join("")}</dl>`;
}

function prRenderActions() {
  const spec = PR_SPEC[PR.proc];
  const el = document.getElementById("prActions");
  const done = PR.state.done;
  const btn = (action, value, label, extra) => `<button type="button" class="btn btn-ghost pr-act" data-action="${action}" ${value != null ? `data-value="${prEsc(value)}"` : ""} ${extra || ""} ${done ? "disabled" : ""}>${prEsc(label)}</button>`;
  const item = (it) => {
    if (it.kind === "button") return `<div class="pr-item">${btn(it.action, null, it.label)}</div>`;
    if (it.kind === "buttons" || it.kind === "choice") {
      const opts = typeof it.options === "function" ? it.options() : it.options;
      return `<div class="pr-item"><span class="pr-item-label">${prEsc(it.label)}</span><div class="pr-opts">${opts.map(([v, l]) => btn(it.action, v, l)).join("")}</div></div>`;
    }
    if (it.kind === "number") {
      return `<div class="pr-item"><label class="pr-item-label" for="pr-${it.action}">${prEsc(it.label)}</label>
        <div class="pr-opts"><input type="number" id="pr-${it.action}" class="pr-num" placeholder="${prEsc(it.placeholder || "")}" step="any" ${done ? "disabled" : ""}/> <span class="pr-unit">${prEsc(it.unit)}</span> ${btn(it.action, "", it.button, `data-input="pr-${it.action}"`)}</div></div>`;
    }
    if (it.kind === "numberChoice") {
      return `<div class="pr-item"><label class="pr-item-label" for="pr-${it.action}">${prEsc(it.label)}</label>
        <div class="pr-opts"><input type="number" id="pr-${it.action}" class="pr-num" placeholder="${prEsc(it.placeholder || "")}" step="any" ${done ? "disabled" : ""}/> <span class="pr-unit">${prEsc(it.unit)}</span>
        ${it.options.map(([v, l]) => btn(it.action, v, l, `data-input="pr-${it.action}"`)).join("")}</div></div>`;
    }
    return "";
  };
  /* Unlabelled one-button actions that follow each other ("Find it with
     the detector", "Depressurise", "Repair the joint"...) share one row of
     buttons rather than taking a line each. */
  const groupHtml = (items) => {
    const out = [];
    let run = [];
    const flush = () => {
      if (run.length) out.push(`<div class="pr-item"><div class="pr-opts">${run.map(it => btn(it.action, null, it.label)).join("")}</div></div>`);
      run = [];
    };
    for (const it of items) {
      if (it.kind === "button") { run.push(it); continue; }
      flush();
      out.push(item(it));
    }
    flush();
    return out.join("");
  };
  el.innerHTML = spec.groups.map(g => `<section class="pr-group"><h3>${prEsc(g.title)}</h3>${groupHtml(g.items)}</section>`).join("");

  el.querySelectorAll(".pr-act").forEach(b => b.addEventListener("click", () => {
    const action = b.dataset.action;
    const it = spec.groups.flatMap(g => g.items).find(i => i.action === action);
    const args = [];
    if (b.dataset.input) {
      const input = document.getElementById(b.dataset.input);
      const num = input ? Number(input.value) : NaN;
      if (it && it.kind === "numberChoice") { args.push(b.dataset.value); args.push(num); }
      else args.push(num);
    } else if (b.dataset.value != null && b.dataset.value !== "") {
      const v = b.dataset.value;
      args.push(it && it.map ? it.map(v) : v);
    }
    prDo(action, ...args);
  }));
}

function prRenderCoach() {
  const el = document.getElementById("prCoach");
  const last = PR.log[0];
  const cap = PR_CAP && PR_CAP.href.includes("p=" + PR.proc)
    ? (PR.state.done ? RefrigCapstone.doneHtml(PR_CAP, RefrigCapstone.status()) : RefrigCapstone.introHtml(PR_CAP)) : "";
  if (!last) {
    el.innerHTML = cap + `<div class="quiz-feedback good"><p>Start where the job starts. Every button is an action on the rig; do them in the order you were taught and the order panel will show it. Do them in a different order and the rig will behave the way the real one would.</p></div>`;
    return;
  }
  const cls = last.kind === "warn" ? "partial" : last.kind === "block" ? "bad" : "good";
  el.innerHTML = cap + `<div class="quiz-feedback ${cls}" aria-live="polite"><p>${prEsc(last.msg)}</p></div>
    ${PR.log.length > 1 ? `<ul class="sb-log">${PR.log.slice(1, 7).map(l => `<li class="${l.kind}">${prEsc(l.msg)}</li>`).join("")}</ul>` : ""}`;
}

function prRenderSequence() {
  const P = prP();
  const el = document.getElementById("prSequence");
  const live = RefrigProcedures.sequenceReport(P.SEQUENCE, PR.state);
  const steps = live.steps.map(st => st.id in PR.stepSeen ? Object.assign({}, st, { complete: true, outOfOrder: PR.stepSeen[st.id] }) : st);
  const done = steps.filter(st => st.complete).length;
  const outCount = steps.filter(st => st.complete && st.outOfOrder).length;
  const inOrder = outCount === 0;
  const status = done === live.total
    ? (inOrder ? `All ${live.total} steps done, in the taught order.` : `All ${live.total} steps done, but ${outCount} out of turn.`)
    : `${done} of ${live.total} steps done${outCount ? `, ${outCount} out of turn.` : done ? ", in order so far." : "."}`;
  const item = (st, i) => {
    const cls = !st.complete ? "todo" : st.outOfOrder ? "out" : "done";
    const stateTxt = !st.complete ? "still to do" : st.outOfOrder ? "done — OUT OF ORDER" : "done";
    const mark = !st.complete ? "○" : st.outOfOrder ? "!" : "✓";
    return `<li class="sb-step ${cls}">
      <span class="sb-step-n" aria-hidden="true">${i + 1}</span>
      <div class="sb-step-body">
        <details class="sb-why" data-step="${st.id}"${PR.openWhy[st.id] ? " open" : ""}><summary class="sb-step-head"><span class="sb-step-mark" aria-hidden="true">${mark}</span> <b>${prEsc(st.label)}</b> <span class="sb-step-state">${stateTxt}</span></summary><p>${prEsc(st.why)}</p></details>
        ${st.complete && st.outOfOrder && st.early ? `<p class="sb-step-early"><b>What that cost:</b> ${prEsc(st.early)}</p>` : ""}
      </div></li>`;
  };
  const s = PR.state;
  const verdict = s.done
    ? `<div class="quiz-feedback ${inOrder && !s.warns ? "good" : "partial"} sb-seq-verdict"><b>${inOrder && !s.warns ? "✓ Done, in order, nothing hissed." : "Done — with lessons."}</b>
        <p>${s.warns ? `${s.warns} thing${s.warns === 1 ? "" : "s"} the rig objected to along the way — each one is a lesson banked. ` : ""}${outCount ? `${outCount} step${outCount === 1 ? "" : "s"} out of turn: read the flagged ones for what the shortcut costs. ` : ""}${P.id === "pressureTest" && P.verdict(s).leakLine ? prEsc(P.verdict(s).leakLine) : ""}</p>
        <div class="quiz-controls"><button id="prAgainBtn" class="btn btn-tour" type="button">Run it again</button></div></div>`
    : "";
  el.innerHTML = `<p class="sb-seq-status" aria-live="polite">${status}</p>${verdict}<ol class="sb-seq" style="--rows: ${Math.ceil(steps.length / 2)}">${steps.map(item).join("")}</ol>`;
  el.querySelectorAll("details.sb-why").forEach(d => d.addEventListener("toggle", () => { PR.openWhy[d.dataset.step] = d.open; }));
  const again = document.getElementById("prAgainBtn"); if (again) again.addEventListener("click", prReset);
}

function prRestoreFocus() {
  if (!PR.refocus) return;
  const el = document.querySelector(PR.refocus);
  PR.refocus = null;
  if (el && el.focus) el.focus();
}

function prRender() {
  document.getElementById("prTitle").textContent = prP().title;
  prRenderBrief();
  prRenderRig();
  prRenderActions();
  prRenderCoach();
  prRenderSequence();
  prRestoreFocus();
}

/* ---- Boot ----------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const pSel = document.getElementById("prProcedure");
  const sSel = document.getElementById("prScenario");
  pSel.innerHTML = RefrigProcedures.ORDER.map(id => `<option value="${id}">${prEsc(RefrigProcedures.PROCEDURES[id].title)}</option>`).join("");
  const fillScenarios = () => {
    sSel.innerHTML = Object.entries(prP().scenarios).map(([k, sc]) => `<option value="${k}">${prEsc(sc.label)}</option>`).join("");
    sSel.value = PR.scenario;
  };
  const q = new URLSearchParams(location.search || "");
  if (q.get("p") && RefrigProcedures.PROCEDURES[q.get("p")]) PR.proc = q.get("p");
  if (PR_CAP && PR_CAP.href.includes("p=" + PR.proc) && prP().scenarios[PR_CAP.scenario]) PR.scenario = PR_CAP.scenario;
  pSel.value = PR.proc;
  pSel.addEventListener("change", () => { PR.proc = pSel.value; PR.scenario = null; prReset(); fillScenarios(); });
  sSel.addEventListener("change", () => { PR.scenario = sSel.value; prReset(); });
  document.getElementById("prResetBtn").addEventListener("click", prReset);
  prReset();
  fillScenarios();
});
