/* =========================================================================
   Instructor dashboard. Fully client-side: students export their progress
   from the Learn page (a JSON file) and the instructor loads those files
   here to see a cohort table — lessons completed per module, exam scores,
   and who is stuck where. Nothing is uploaded anywhere.
   ========================================================================= */
"use strict";

const students = [];
let teachView = "modules";

function modDoneCount(progress, mod) {
  return mod.lessons.filter(l => {
    const p = progress[mod.id + "/" + l.id];
    return p && p.done;
  }).length;
}

function overallPct(progress) {
  const total = COURSE.reduce((n, m) => n + m.lessons.length, 0);
  const done = COURSE.reduce((n, m) => n + modDoneCount(progress, m), 0);
  return Math.round(done / total * 100);
}

function handleFiles(fileList) {
  const files = Array.from(fileList);
  let pending = files.length;
  const status = document.getElementById("teachStatus");
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (data.format !== "refrig-progress-v1" || typeof data.progress !== "object") throw new Error("bad format");
        students.push({
          name: data.name || file.name.replace(/\.json$/i, ""),
          exported: data.exported ? data.exported.slice(0, 10) : "—",
          progress: data.progress,
          evidence: Array.isArray(data.evidence) ? data.evidence : [],
          placement: data.placement && typeof data.placement === "object" ? data.placement : {},
        });
      } catch (e) {
        status.textContent = `Skipped ${file.name} — not a progress export.`;
      }
      if (--pending === 0) renderTable();
    };
    reader.readAsText(file);
  });
}

function cellFor(progress, mod) {
  const done = modDoneCount(progress, mod);
  const total = mod.lessons.length;
  const cls = done === total ? "all" : done > 0 ? "part" : "none";
  return `<td class="cell-${cls}">${done}/${total}</td>`;
}

/* ---- Units of competency view -------------------------------------------------
   One row per unit, one column per student: lessons passed in the modules
   tagged with the unit, and the workshop jobs recorded against it. */
function renderUnitsTable() {
  const wrap = document.getElementById("cohort");
  const C = RefrigCompetency;
  const per = students.map(s => C.mastery(COURSE, s.progress, s.evidence || []));
  const head = students.map(s => `<th>${RefrigMd.esc(s.name)}</th>`).join("");
  const rows = Object.keys(C.UNITS).map((code, i) => {
    const u = C.UNITS[code];
    const cells = per.map(m => {
      const x = m[i];
      const cls = x.knowledge >= 1 ? "all" : (x.done || x.attempts) ? "part" : "none";
      const know = x.lessons ? `${Math.round(x.knowledge * 100)}%` : "—";
      const ev = x.attempts ? ` · ${x.attempts} job${x.attempts === 1 ? "" : "s"} ${Math.round(x.mean * 100)}%` : "";
      return `<td class="cell-${cls}" title="${x.done}/${x.lessons} lessons">${know}${ev}</td>`;
    }).join("");
    return `<tr><td class="unit-code">${code}</td><td class="unit-title">${RefrigMd.esc(u.title)} <span class="unit-status unit-${u.status === "core" ? "core" : u.status === "elective" ? "elective" : "confirm"}">${u.status}</span></td>${cells}</tr>`;
  }).join("");
  const evTotals = students.map(s => RefrigEvidence.summarise(s.evidence || [], C));
  const toolRow = `<tr><td class="unit-code">—</td><td class="unit-title"><b>Workshop jobs recorded</b></td>${evTotals.map(t =>
    `<td>${t.total ? Object.entries(t.byTool).map(([k, v]) => `${(C.TOOLS[k] || { label: k }).label}: ${v.attempts}`).join("<br>") : "—"}</td>`).join("")}</tr>`;
  wrap.innerHTML = `
    <div class="table-wrap">
      <table class="cohort-table teach-units">
        <tr><th>Unit</th><th>Title</th>${head}</tr>
        ${toolRow}
        ${rows}
      </table>
    </div>
    <p class="module-blurb">Knowledge: lessons passed in the modules tagged with the unit (green = all). Jobs: workshop attempts recorded against the unit, with the mean score. Indicative — the practical evidence is assessed by the RTO on real plant; a job in a simulator is practice, not a performance record.</p>
    <div class="quiz-controls">
      <button id="csvUnitsBtn" class="btn btn-ghost" type="button">Download CSV (units)</button>
      <button id="clearBtn" class="btn btn-ghost" type="button">Clear list</button>
    </div>`;
  document.getElementById("csvUnitsBtn").addEventListener("click", downloadUnitsCsv);
  document.getElementById("clearBtn").addEventListener("click", () => { students.length = 0; renderTable(); document.getElementById("teachStatus").textContent = ""; });
}

function downloadUnitsCsv() {
  const C = RefrigCompetency;
  const per = students.map(s => C.mastery(COURSE, s.progress, s.evidence || []));
  const q = (n) => `"${n.replace(/"/g, "'")}"`;
  const header = ["Unit", "Title", "Status", ...students.map(s => `${q(s.name)} knowledge %`), ...students.map(s => `${q(s.name)} jobs`), ...students.map(s => `${q(s.name)} job mean %`)];
  const lines = [header.join(",")];
  Object.keys(C.UNITS).forEach((code, i) => {
    lines.push([code, q(C.UNITS[code].title), C.UNITS[code].status,
      ...per.map(m => Math.round(m[i].knowledge * 100)), ...per.map(m => m[i].attempts), ...per.map(m => Math.round(m[i].mean * 100))].join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "cohort-units.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

function renderTable() {
  const wrap = document.getElementById("cohort");
  const status = document.getElementById("teachStatus");
  const views = document.getElementById("teachViews");
  views.hidden = !students.length;
  const steps = document.getElementById("teachSteps");
  if (steps) steps.hidden = students.length > 0;
  if (!students.length) { wrap.innerHTML = ""; return; }
  if (teachView === "units") { renderUnitsTable(); status.textContent = `${students.length} student file${students.length === 1 ? "" : "s"} loaded.`; return; }

  const head = COURSE.map((mod, i) =>
    `<th title="${mod.title}">${i + 1}</th>`).join("");
  const rows = students.map(s => {
    const exam = s.progress["exam/final"];
    const examCell = exam
      ? `<td class="cell-${exam.done ? "all" : "part"}">${exam.best}/${exam.total}${exam.done ? " ✓" : ""}</td>`
      : `<td class="cell-none">—</td>`;
    const jobs = (s.evidence || []).length;
    const placed = Object.keys(s.placement || {}).length;
    return `<tr>
      <td class="student-name">${RefrigMd.esc(s.name)}</td>
      ${COURSE.map(mod => cellFor(s.progress, mod)).join("")}
      ${examCell}
      <td><b>${overallPct(s.progress)}%</b></td>
      <td>${jobs || "—"}</td>
      <td>${placed ? placed + " stream" + (placed === 1 ? "" : "s") : "—"}</td>
      <td class="exported">${s.exported}</td>
    </tr>`;
  }).join("");

  wrap.innerHTML = `
    <div class="table-wrap">
      <table class="cohort-table">
        <tr><th>Student</th>${head}<th>Exam</th><th>Overall</th><th>Workshop jobs</th><th>Placement</th><th>Exported</th></tr>
        ${rows}
      </table>
    </div>
    <p class="module-blurb">Green = module complete · amber = in progress (a stuck student shows amber that
    doesn't move between exports) · grey = not started. Column numbers are the modules, in course order. Switch to <b>By unit of competency</b> for the UEE32225 view, with the workshop jobs each student has recorded.</p>
    <div class="quiz-controls">
      <button id="csvBtn" class="btn btn-ghost" type="button">Download CSV</button>
      <button id="clearBtn" class="btn btn-ghost" type="button">Clear list</button>
    </div>`;

  status.textContent = `${students.length} student file${students.length === 1 ? "" : "s"} loaded.`;
  document.getElementById("csvBtn").addEventListener("click", downloadCsv);
  document.getElementById("clearBtn").addEventListener("click", () => { students.length = 0; renderTable(); status.textContent = ""; });
}

function downloadCsv() {
  const header = ["Student", ...COURSE.map(m => m.title.replace(/,/g, " ")), "Exam", "Overall %", "Exported"];
  const lines = [header.join(",")];
  students.forEach(s => {
    const exam = s.progress["exam/final"];
    lines.push([
      `"${s.name.replace(/"/g, "'")}"`,
      ...COURSE.map(mod => `${modDoneCount(s.progress, mod)}/${mod.lessons.length}`),
      exam ? `${exam.best}/${exam.total}${exam.done ? " passed" : ""}` : "-",
      overallPct(s.progress),
      s.exported,
    ].join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "cohort-progress.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

document.addEventListener("DOMContentLoaded", () => {
  const mb = document.getElementById("viewModulesBtn"), ub = document.getElementById("viewUnitsBtn");
  const setView = (v) => { teachView = v; mb.setAttribute("aria-pressed", String(v === "modules")); ub.setAttribute("aria-pressed", String(v === "units")); renderTable(); };
  mb.addEventListener("click", () => setView("modules"));
  ub.addEventListener("click", () => setView("units"));
  document.getElementById("studentFiles").addEventListener("change", (e) => {
    if (e.target.files.length) handleFiles(e.target.files);
    e.target.value = "";
  });
  document.getElementById("sampleBtn").addEventListener("click", () => {
    students.length = 0;
    RefrigDemo.buildSampleCohort(COURSE).forEach(s => students.push({
      name: s.name,
      exported: s.exported.slice(0, 10),
      progress: s.progress,
      evidence: s.evidence || [],
      placement: s.placement || {},
    }));
    renderTable();
    document.getElementById("teachStatus").textContent = "Sample cohort loaded — demonstration data, not real students.";
  });
});
