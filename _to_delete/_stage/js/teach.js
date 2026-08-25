/* =========================================================================
   Instructor dashboard. Fully client-side: students export their progress
   from the Learn page (a JSON file) and the instructor loads those files
   here to see a cohort table — lessons completed per module, exam scores,
   and who is stuck where. Nothing is uploaded anywhere.
   ========================================================================= */
"use strict";

const students = [];

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

function renderTable() {
  const wrap = document.getElementById("cohort");
  const status = document.getElementById("teachStatus");
  if (!students.length) { wrap.innerHTML = ""; return; }

  const head = COURSE.map((mod, i) =>
    `<th title="${mod.title}">${i + 1}</th>`).join("");
  const rows = students.map(s => {
    const exam = s.progress["exam/final"];
    const examCell = exam
      ? `<td class="cell-${exam.done ? "all" : "part"}">${exam.best}/${exam.total}${exam.done ? " ✓" : ""}</td>`
      : `<td class="cell-none">—</td>`;
    return `<tr>
      <td class="student-name">${RefrigMd.esc(s.name)}</td>
      ${COURSE.map(mod => cellFor(s.progress, mod)).join("")}
      ${examCell}
      <td><b>${overallPct(s.progress)}%</b></td>
      <td class="exported">${s.exported}</td>
    </tr>`;
  }).join("");

  wrap.innerHTML = `
    <div class="table-wrap">
      <table class="cohort-table">
        <tr><th>Student</th>${head}<th>Exam</th><th>Overall</th><th>Exported</th></tr>
        ${rows}
      </table>
    </div>
    <p class="module-blurb">Green = module complete · amber = in progress (a stuck student shows amber that
    doesn't move between exports) · grey = not started. Column numbers are the modules, in course order.</p>
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
    }));
    renderTable();
    document.getElementById("teachStatus").textContent = "Sample cohort loaded — demonstration data, not real students.";
  });
});
