/* Site navigation behaviour.
   The nav markup is static in every page (so it works before scripts run and
   without JavaScript at all); this only adds the small-screen menu toggle and
   the one piece of "where am I" state that can't be baked into the HTML —
   Technician Quiz is a mode of the simulator page, not a page of its own. */
(function () {
  "use strict";

  function markCurrent() {
    if (!/(^|[?&])quiz=1(&|$)/.test(location.search)) return;
    // Only the simulator page carries quiz mode, and only it marks "sim" current.
    const sim = document.querySelector('.sitenav-links a[data-nav="sim"][aria-current]');
    const quiz = document.querySelector('.sitenav-links a[data-nav="quiz"]');
    if (!sim || !quiz) return;
    sim.removeAttribute("aria-current");
    quiz.setAttribute("aria-current", "page");
  }

  function wireToggle() {
    const btn = document.getElementById("navToggle");
    const list = document.getElementById("sitenavLinks");
    if (!btn || !list) return;

    const setOpen = (open) => {
      list.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    };

    btn.addEventListener("click", () => {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });

    // Escape closes the menu and returns focus to the button that opened it.
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        btn.focus();
      }
    });

    // A tap outside the bar closes it, the way a menu is expected to behave.
    document.addEventListener("click", (e) => {
      if (btn.getAttribute("aria-expanded") !== "true") return;
      if (!e.target.closest(".sitenav")) setOpen(false);
    });
  }

  function init() {
    markCurrent();
    wireToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
