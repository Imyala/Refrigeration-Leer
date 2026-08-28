/* =========================================================================
   "How this works" panels.

   Every workshop opens with a short block of instructions. A learner needs it
   the first time and resents it every time after, so the block is a disclosure:
   open on a first visit, and once someone closes it, it stays closed for that
   tool. One behaviour, shared by all four workshops, keyed by the tool's own
   data-howto name so closing one does not close the others.
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
      // No memory yet means this is a first visit: leave the markup's own
      // `open` in place so the instructions are there when they are needed.
      if (saved !== null) panel.open = saved === "1";
      panel.addEventListener("toggle", () => remember(name, panel.open));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
