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

  /* On a phone the open steps are a full screen of text between the learner
     and the machine, so there the panel starts as its one-line gist and the
     steps are a tap away. */
  function narrow() {
    return !!(window.matchMedia && window.matchMedia("(max-width: 700px)").matches);
  }

  function init() {
    document.querySelectorAll("details.howto[data-howto]").forEach((panel) => {
      const name = panel.dataset.howto;
      const saved = remembered(name);
      // No memory yet means this is a first visit: leave the markup's own
      // `open` in place so the instructions are there when they are needed —
      // unless the screen is too small to spare the room.
      const want = saved !== null ? saved === "1" : narrow() ? false : panel.open;
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
