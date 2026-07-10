/* =========================================================================
   Virtual gauge manifold — low- and high-side analog gauges with an inner
   saturation-temperature ring (like the PT ring on a real gauge set).
   Browser-only; called from refreshAll() in app.js.
   ========================================================================= */
"use strict";

const GAUGE_NS = "http://www.w3.org/2000/svg";

function gaugeAdd(parent, tag, attrs, text) {
  const el = document.createElementNS(GAUGE_NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  if (text != null) el.textContent = text;
  parent.appendChild(el);
  return el;
}

/* Needle sweep: 0 → 135° (lower-left), max → 405° (lower-right), 270° total. */
function gaugePoint(cx, cy, radius, frac) {
  const a = (135 + 270 * frac) * Math.PI / 180;
  return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)];
}

function drawGauge(svg, cx, cy, r, opts) {
  const U = RefrigUnits, M = RefrigModel;
  const g = gaugeAdd(svg, "g", {});

  gaugeAdd(g, "circle", { cx, cy, r, fill: "#0c131b", stroke: opts.color, "stroke-width": 2.5 });

  const ticks = 5;
  for (let i = 0; i <= ticks; i++) {
    const frac = i / ticks;
    const v = opts.max * frac;
    const [x1, y1] = gaugePoint(cx, cy, r - 4, frac);
    const [x2, y2] = gaugePoint(cx, cy, r - 12, frac);
    gaugeAdd(g, "line", { x1, y1, x2, y2, stroke: "#8aa0b3", "stroke-width": 1.5 });
    const [lx, ly] = gaugePoint(cx, cy, r - 22, frac);
    gaugeAdd(g, "text", {
      x: lx, y: ly + 3, fill: "#e7eef5", "font-size": 9, "text-anchor": "middle",
    }, String(Math.round(v)));

    // Inner PT ring: saturation temperature at this gauge pressure
    const absBar = U.toBar(v) + U.ATM_BAR;
    const tbl = opts.base.satTable;
    if (absBar >= tbl[0].P && absBar <= tbl[tbl.length - 1].P) {
      const satT = M.satTemp(opts.base, absBar);
      const [tx, ty] = gaugePoint(cx, cy, r - 35, frac);
      gaugeAdd(g, "text", {
        x: tx, y: ty + 3, fill: opts.color, "font-size": 8, "text-anchor": "middle", opacity: 0.9,
      }, `${Math.round(U.cTo(satT))}°`);
    }
  }

  // Needle at the current gauge pressure (clamped to the dial range)
  const gaugeDisp = U.barTo(U.gaugeBar(opts.pAbs));
  const frac = Math.max(0, Math.min(1, gaugeDisp / opts.max));
  const [nx, ny] = gaugePoint(cx, cy, r - 14, frac);
  const [tx2, ty2] = gaugePoint(cx, cy, 10, frac + 0.5);
  gaugeAdd(g, "line", { x1: tx2, y1: ty2, x2: nx, y2: ny, stroke: "#e7eef5", "stroke-width": 2.5, "stroke-linecap": "round" });
  gaugeAdd(g, "circle", { cx, cy, r: 4.5, fill: opts.color });

  gaugeAdd(g, "text", { x: cx, y: cy + 26, fill: "#8aa0b3", "font-size": 10, "text-anchor": "middle", "letter-spacing": 1 }, opts.title);
  gaugeAdd(g, "text", { x: cx, y: cy + 52, fill: "#6f8294", "font-size": 8, "text-anchor": "middle" },
    U.P_UNITS[U.prefs.p].gaugeLabel);
}

function renderGauges(c) {
  const U = RefrigUnits;
  const svg = document.getElementById("manifoldSvg");
  if (!svg) return;
  svg.innerHTML = "";

  const step = { kPa: 200, bar: 2, psi: 50 }[U.prefs.p];
  const niceMax = (bar) => Math.max(step, Math.ceil(U.barTo(bar) / step) * step);
  const base = c.base;

  drawGauge(svg, 92, 92, 70, {
    base, pAbs: c.pLow, color: getCss("--state-vapor"), title: "LOW",
    max: niceMax(base.pLow * 2.6 - U.ATM_BAR),
  });
  drawGauge(svg, 268, 92, 70, {
    base, pAbs: c.pHigh, color: getCss("--state-hotgas"), title: "HIGH",
    max: niceMax(base.pHigh * 1.9 - U.ATM_BAR),
  });

  gaugeAdd(svg, "text", { x: 92, y: 190, fill: "#e7eef5", "font-size": 12, "font-weight": 700, "text-anchor": "middle" },
    `${U.fmtPGauge(c.pLow)} · sat ${U.fmtT(c.tEvap)}`);
  gaugeAdd(svg, "text", { x: 268, y: 190, fill: "#e7eef5", "font-size": 12, "font-weight": 700, "text-anchor": "middle" },
    `${U.fmtPGauge(c.pHigh)} · sat ${U.fmtT(c.tCond)}`);
}
