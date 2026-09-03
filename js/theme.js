/* Theme: light by default, dark by choice.

   Loaded in <head>, before the page paints, so the theme is settled before
   anything is drawn — a page that flashes light and then goes dark is worse
   than either theme. Runs in two steps: stamp data-theme on <html> now, from
   the learner's saved choice or, failing that, the OS setting; then, once the
   nav exists, wire the switch in it.

   The switch is a toggle button ("Dark theme", pressed or not), so a screen
   reader hears one control with a state rather than a label that keeps
   changing. The choice is kept in localStorage alongside course progress and
   applies to every page of the site. */
(function () {
  "use strict";

  const KEY = "refrigSim.theme";
  const root = document.documentElement;

  function saved() {
    try {
      const v = localStorage.getItem(KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) { return null; }  // private mode, or storage switched off
  }

  function save(theme) {
    try { localStorage.setItem(KEY, theme); }
    catch (e) { /* the page still switches for this visit */ }
  }

  function fromOS() {
    try {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark" : "light";
    } catch (e) { return "light"; }
  }

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const dark = theme === "dark";
    btn.setAttribute("aria-pressed", String(dark));
    btn.title = dark ? "Switch to the light theme" : "Switch to the dark theme";
  }

  function toggle() {
    const next = current() === "dark" ? "light" : "dark";
    save(next);
    apply(next);
  }

  function followOS() {
    // Until the learner has chosen, a change of OS setting changes the page.
    try {
      const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
      if (!mq || !mq.addEventListener) return;
      mq.addEventListener("change", () => { if (!saved()) apply(fromOS()); });
    } catch (e) { /* no media queries: nothing to follow */ }
  }

  function wire() {
    apply(current());  // the button exists now; give it its state
    const btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", toggle);
    followOS();
  }

  apply(saved() || fromOS());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }

  window.RefrigTheme = { current, apply, toggle, KEY };
})();
