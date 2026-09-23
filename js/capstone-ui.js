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

  /* The same rows as the pathway on the front page: the stage to do next is
     open with its brief and its button, every other stage is one line —
     title and state — that opens with a tap. Seven open briefs were four
     screens of scrolling on a phone. */
  const list = document.getElementById("cpStages");
  list.innerHTML = s.stages.map(st => {
    const cls = st.complete ? "done" : (s.next && s.next.id === st.id) ? "next" : "todo";
    const state = st.complete ? `Done · ${Math.round(st.score * 100)}%` : cls === "next" ? "Up next" : "Later";
    return `<li class="stage-card cp-stage ${cls} ${st.complete ? "complete" : ""} ${cls === "next" ? "is-next" : ""}">
      <details class="stage-fold"${cls === "next" ? " open" : ""}>
        <summary class="stage-row">
          <span class="stage-n" aria-hidden="true">${st.complete ? "✓" : st.n}</span>
          <span class="stage-head">
            <span class="stage-title">${cpEsc(st.title)}</span>
            <span class="stage-status ${st.complete ? "done" : cls === "next" ? "going" : ""}">${state}</span>
          </span>
          <span class="stage-caret" aria-hidden="true"></span>
        </summary>
        <div class="stage-body">
          <p class="stage-blurb">${cpEsc(st.brief)}</p>
          <p class="cp-units">${st.units.map(u => `<span class="unit-chip">${u}</span>`).join(" ")}</p>
          <div class="stage-actions"><a class="btn ${cls === "next" ? "btn-tour" : "btn-ghost"}" href="${cpEsc(st.href)}">${st.complete ? "Do it again" : "Open this stage"}</a></div>
        </div>
      </details>
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
