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

/* Describe an arc path for the PT ring, in the same 135°→405° sweep. */
function gaugeArc(cx, cy, radius) {
  const [sx, sy] = gaugePoint(cx, cy, radius, 0);
  const [ex, ey] = gaugePoint(cx, cy, radius, 1);
  return `M ${sx} ${sy} A ${radius} ${radius} 0 1 1 ${ex} ${ey}`;
}

function drawGauge(svg, cx, cy, r, opts) {
  const U = RefrigUnits, M = RefrigModel;
  const g = gaugeAdd(svg, "g", {});

  gaugeAdd(g, "circle", { cx, cy, r, fill: "#0b1219", stroke: opts.color, "stroke-width": 2.5 });

  // Two scales share this dial, so they need to read as two separate rings:
  // pressure on the outside, saturation temperature on a smaller inner ring
  // with its own arc. They used to sit 13px apart and collide.
  const rPress = r - 21;
  const rSat   = r - 40;
  gaugeAdd(g, "path", {
    d: gaugeArc(cx, cy, rSat + 9), fill: "none",
    stroke: opts.color, "stroke-width": 1, opacity: 0.28,
  });

  const ticks = 5;
  for (let i = 0; i <= ticks; i++) {
    const frac = i / ticks;
    const v = opts.max * frac;
    const [x1, y1] = gaugePoint(cx, cy, r - 3, frac);
    const [x2, y2] = gaugePoint(cx, cy, r - 10, frac);
    gaugeAdd(g, "line", { x1, y1, x2, y2, stroke: "#7f93a5", "stroke-width": 1.5 });
    const [lx, ly] = gaugePoint(cx, cy, rPress, frac);
    gaugeAdd(g, "text", {
      x: lx, y: ly + 3, fill: "#e8eef4", "font-size": 9, "text-anchor": "middle",
    }, String(Math.round(v)));

    // Inner PT ring: saturation temperature at this gauge pressure
    const absBar = U.toBar(v) + U.ATM_BAR;
    const tbl = opts.base.satTable;
    if (absBar >= tbl[0].P && absBar <= tbl[tbl.length - 1].P) {
      const satT = M.satTemp(opts.base, absBar);
      const [tx, ty] = gaugePoint(cx, cy, rSat, frac);
      gaugeAdd(g, "text", {
        x: tx, y: ty + 2.5, fill: opts.color, "font-size": 7.5, "text-anchor": "middle", opacity: 0.95,
      }, `${Math.round(U.cTo(satT))}°`);
    }
  }

  // Needle at the current gauge pressure (clamped to the dial range)
  const gaugeDisp = U.barTo(U.gaugeBar(opts.pAbs));
  const frac = Math.max(0, Math.min(1, gaugeDisp / opts.max));
  const [nx, ny] = gaugePoint(cx, cy, r - 13, frac);
  const [tx2, ty2] = gaugePoint(cx, cy, 9, frac + 0.5);
  gaugeAdd(g, "line", { x1: tx2, y1: ty2, x2: nx, y2: ny, stroke: "#e8eef4", "stroke-width": 2.5, "stroke-linecap": "round" });
  gaugeAdd(g, "circle", { cx, cy, r: 4, fill: opts.color });

  // The dial's open bottom quadrant is the only clear space on the face.
  gaugeAdd(g, "text", {
    x: cx, y: cy + 44, fill: "#5b6d7e", "font-size": 7.5, "text-anchor": "middle", "letter-spacing": .6,
  }, U.P_UNITS[U.prefs.p].gaugeLabel + " / °" + U.prefs.t);
}

function renderGauges(c) {
  const U = RefrigUnits;
  const svg = document.getElementById("manifoldSvg");
  if (!svg) return;
  svg.innerHTML = "";

  const step = { kPa: 200, bar: 2, psi: 50 }[U.prefs.p];
  const niceMax = (bar) => Math.max(step, Math.ceil(U.barTo(bar) / step) * step);
  const base = c.base;
  const CY = 88, R = 76;

  drawGauge(svg, 94, CY, R, {
    base, pAbs: c.pLow, color: getCss("--state-vapor"), title: "LOW",
    max: niceMax(base.pLow * 2.6 - U.ATM_BAR),
  });
  drawGauge(svg, 266, CY, R, {
    base, pAbs: c.pHigh, color: getCss("--state-hotgas"), title: "HIGH",
    max: niceMax(base.pHigh * 1.9 - U.ATM_BAR),
  });

  // Titles and readings live under the dials, where they have room to breathe
  const cap = (x, title, colour, value) => {
    gaugeAdd(svg, "text", {
      x, y: 186, fill: colour, "font-size": 9, "font-weight": 700,
      "text-anchor": "middle", "letter-spacing": 1.2,
    }, title);
    gaugeAdd(svg, "text", {
      x, y: 205, fill: "#e8eef4", "font-size": 12.5, "font-weight": 700, "text-anchor": "middle",
    }, value);
  };
  cap(94, "LOW SIDE", getCss("--state-vapor"),
      `${U.fmtPGauge(c.pLow)} · sat ${U.fmtT(c.tEvap)}`);
  cap(266, "HIGH SIDE", getCss("--state-hotgas"),
      `${U.fmtPGauge(c.pHigh)} · sat ${U.fmtT(c.tCond)}`);
}
