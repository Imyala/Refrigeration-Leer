/* Site navigation behaviour.
   The nav markup is static in every page (so it works before scripts run and
   without JavaScript at all); this only adds the small-screen menu toggle and
   the one piece of "where am I" state that can't be baked into the HTML —
   the Technician Quiz is a mode of the simulator page, not a page of its own,
   so the simulator's own markup can't know which of the two you opened. */
(function () {
  "use strict";

  function markCurrent() {
    if (!/(^|[?&])quiz=1(&|$)/.test(location.search)) return;
    // Only the simulator carries quiz mode, and only it marks "sim" current.
    const sim = document.querySelector('.toolstrip-links a[data-tool="sim"][aria-current]');
    const quiz = document.querySelector('.toolstrip-links a[data-tool="quiz"]');
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

  /* On a phone the tool switcher is one row that scrolls sideways, so the
     current tool can open off the right-hand edge. Bring it into view —
     scrolling only the strip, never the page. */
  function revealCurrentTool() {
    const strip = document.querySelector(".toolstrip-links");
    if (!strip || !(strip.scrollWidth > strip.clientWidth)) return;
    const cur = strip.querySelector("a[aria-current]");
    if (!cur) return;
    const li = cur.parentElement;
    const left = li.offsetLeft - strip.offsetLeft;
    const right = left + li.offsetWidth;
    if (left < strip.scrollLeft || right > strip.scrollLeft + strip.clientWidth) {
      strip.scrollLeft = Math.max(0, left - (strip.clientWidth - li.offsetWidth) / 2);
    }
  }

  function init() {
    markCurrent();
    wireToggle();
    revealCurrentTool();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
