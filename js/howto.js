/* =========================================================================
   "How this works" panels.

   Every workshop carries a short block of instructions. It starts folded
   to its one-line gist, so the machine is the first thing on the page and
   the steps are one tap away; once someone opens it, it stays open for that
   tool until they close it. One behaviour, shared by every workshop, keyed
   by the tool's own data-howto name so opening one does not open the others.
   ========================================================================= */
(function () {
  "use strict";

  const KEY = "refrigSim.howto.";

  function remembered(name) {
    try { return localStorage.getItem(KEY + name); }
    catch (e) { return null; }  // private mode, or storage switched off
  }

  function remember(name, open) {
    try { localStorage.setItem(KEY + name, open ? "1" : "0"); }
    catch (e) { /* nothing to do — the panel still works for this visit */ }
  }

  function init() {
    document.querySelectorAll("details.howto[data-howto]").forEach((panel) => {
      const name = panel.dataset.howto;
      const saved = remembered(name);
      // No memory yet: leave the markup's own state (folded) in place.
      const want = saved !== null ? saved === "1" : panel.open;
      // Setting `open` fires a (queued) toggle event of its own; that one is
      // not the learner's choice, so it must not be remembered as theirs.
      if (want !== panel.open) {
        panel.dataset.howtoAuto = "1";
        panel.open = want;
      }
      panel.addEventListener("toggle", () => {
        if (panel.dataset.howtoAuto) { delete panel.dataset.howtoAuto; return; }
        remember(name, panel.open);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
