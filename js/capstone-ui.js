/* =========================================================================
   Capstone job page — the seven stages, their status, and the record.
   Browser-only; the script of the job lives in js/capstone.js.
   ========================================================================= */
"use strict";

function cpEsc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function cpRender() {
  const s = RefrigCapstone.status();
  const pct = Math.round(s.score * 100);
  const head = document.getElementById("cpStatus");
  head.innerHTML = `
    <div class="progress-line">
      <div class="progress-bar"><div class="progress-fill" style="width:${Math.round(s.done / s.total * 100)}%"></div></div>
      <span>${s.done} of ${s.total} stages done${s.done ? ` · job score so far ${pct}%` : ""}</span>
    </div>
    ${s.complete
      ? `<div class="quiz-feedback good"><p><b>The job is complete.</b> Piped, tested, evacuated, charged, commissioned, diagnosed twice. Overall <b>${pct}%</b>. It is in your evidence record — export your progress from the course page and your instructor can see every stage.</p></div>`
      : s.next
        ? `<div class="continue-line"><a class="btn btn-tour continue-btn" href="${cpEsc(s.next.href)}">${s.done ? "Continue" : "Start the job"} → stage ${s.next.n}: ${cpEsc(s.next.title)}</a></div>`
        : ""}`;

  const list = document.getElementById("cpStages");
  list.innerHTML = s.stages.map(st => {
    const cls = st.complete ? "done" : (s.next && s.next.id === st.id) ? "next" : "todo";
    const scoreTxt = st.complete ? `${Math.round(st.score * 100)}%` : "";
    return `<li class="cp-stage ${cls}">
      <span class="cp-n" aria-hidden="true">${st.complete ? "✓" : st.n}</span>
      <div class="cp-body">
        <p class="cp-head"><b>${cpEsc(st.title)}</b> <span class="cp-state">${st.complete ? `done · ${scoreTxt}` : cls === "next" ? "next" : "later"}</span></p>
        <p class="cp-brief">${cpEsc(st.brief)}</p>
        <p class="cp-units">${st.units.map(u => `<span class="unit-chip">${u}</span>`).join(" ")}</p>
        <p class="cp-actions"><a class="btn ${cls === "next" ? "btn-tour" : "btn-ghost"}" href="${cpEsc(st.href)}">${st.complete ? "Do it again" : cls === "next" ? "Open this stage" : "Open"}</a></p>
      </div>
    </li>`;
  }).join("");

  const reset = document.getElementById("cpResetBtn");
  reset.hidden = !s.done;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cpResetBtn").addEventListener("click", () => {
    RefrigCapstone.reset();
    cpRender();
  });
  cpRender();
});
