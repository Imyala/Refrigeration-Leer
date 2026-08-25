/* =========================================================================
   Schematic renderer — turns a circuit definition from js/circuits.js into
   the SVG inside #diagram.

   Everything downstream (particles, fault visualisation, the guided tour,
   component info) keys off what this emits, so the contract matters:

     .pipes-base  path            one per pipe, the dark backing
     .pipes-flow  path#<id>       one per pipe, carries the state colour and
                                  is the path particles are animated along
     .pipe-labels text            state names, so colour is never the only cue
     g.component[data-component]  clickable, focusable component groups
     g#particles                  empty group the animation fills

   Browser-only (it touches the DOM); exposes `RefrigSchematic`.
   ========================================================================= */
(function (root) {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, text) {
    const node = document.createElementNS(NS, tag);
    for (const k in attrs) if (attrs[k] != null) node.setAttribute(k, attrs[k]);
    if (text != null) node.textContent = text;
    return node;
  }

  /* Where a component's caption goes relative to its body. Captions are the
     main source of collisions in a schematic, so each component says which
     side it wants rather than everything defaulting to "underneath". */
  function labelAnchor(pos, cx, cy, w, h) {
    const halfW = w / 2, halfH = h / 2;
    switch (pos) {
      case "left":  return { x: cx - halfW - 16, y: cy + 4,            anchor: "end" };
      case "right": return { x: cx + halfW + 16, y: cy + 4,            anchor: "start" };
      case "above": return { x: cx,              y: cy - halfH - 10,   anchor: "middle" };
      default:      return { x: cx,              y: cy + halfH + 18,   anchor: "middle" };
    }
  }

  /* Multi-line captions: "SUCTION\nACCUMULATOR" becomes two tspans. */
  function caption(text, at, cls) {
    const lines = String(text).split("\n");
    // A two-line caption beside a device would otherwise hang below its centre
    const y0 = at.y - (at.centre === false ? 0 : (lines.length - 1) * 6.5);
    const t = el("text", { x: at.x, y: y0, class: cls, "text-anchor": at.anchor });
    lines.forEach((line, i) => {
      t.appendChild(el("tspan", { x: at.x, dy: i === 0 ? 0 : 13 }, line));
    });
    return t;
  }

  /* ---- Component bodies --------------------------------------------------- */
  function drawBox(g, c) {
    const b = c.box;
    g.appendChild(el("rect", {
      x: b.x, y: b.y, width: b.w, height: b.h, rx: 12,
      class: `comp-box accent-${c.accent}`,
    }));
    if (c.icon && c.icon.type === "circle") {
      g.appendChild(el("circle", {
        cx: c.icon.cx, cy: c.icon.cy, r: c.icon.r, class: `comp-icon accent-${c.accent}`,
      }));
    }
    g.appendChild(caption(c.label, {
      x: b.x + b.w / 2, y: b.y + b.h - 12, anchor: "middle",
    }, "comp-label"));
  }

  function drawCoil(g, c) {
    const b = c.box;
    g.appendChild(el("rect", {
      x: b.x, y: b.y, width: b.w, height: b.h, rx: 12,
      class: `comp-box accent-${c.accent}`,
    }));
    const fg = el("g", { class: `fin-set fins-${c.accent}` });
    (c.fins || []).forEach(f =>
      fg.appendChild(el("line", { x1: f.x, y1: f.y1, x2: f.x, y2: f.y2 })));
    g.appendChild(fg);
    if (c.sub) g.appendChild(el("text", { x: c.sub.x, y: c.sub.y, class: "comp-sub" }, c.sub.text));
    g.appendChild(caption(c.label, {
      x: b.x + b.w / 2, y: b.y + b.h - 12, anchor: "middle",
    }, "comp-label"));
  }

  function drawDiamond(g, c) {
    const { x, y } = c.at, r = c.r || 20;
    g.appendChild(el("path", {
      d: `M ${x} ${y - r} L ${x + r} ${y} L ${x} ${y + r} L ${x - r} ${y} Z`,
      class: `comp-box metering-box accent-${c.accent}`,
    }));
    g.appendChild(caption(c.label, labelAnchor(c.labelPos, x, y, r * 2, r * 2), "comp-label"));
  }

  /* A pressure vessel: rounded body with a liquid level in it. */
  function drawVessel(g, c) {
    const { x, y } = c.at, w = c.w || 56, h = c.h || 68;
    const bx = x - w / 2, by = y - h / 2;
    g.appendChild(el("rect", {
      x: bx, y: by, width: w, height: h, rx: 14, class: `comp-box accent-${c.accent}`,
    }));
    if (c.liquidLevel != null) {
      const lh = Math.max(6, h * c.liquidLevel) - 8;
      g.appendChild(el("rect", {
        x: bx + 7, y: by + h - lh - 7, width: w - 14, height: lh, rx: 4,
        class: `vessel-liquid fill-${c.accent}`,
      }));
    }
    g.appendChild(caption(c.label, labelAnchor(c.labelPos, x, y, w, h), "comp-label"));
  }

  /* A drier / filter: a capsule straddling the line. */
  function drawPuck(g, c) {
    const { x, y } = c.at;
    const w = c.vertical ? (c.h || 22) : (c.w || 46);
    const h = c.vertical ? (c.w || 46) : (c.h || 22);
    g.appendChild(el("rect", {
      x: x - w / 2, y: y - h / 2, width: w, height: h, rx: h / 2,
      class: `comp-box accent-${c.accent}`,
    }));
    g.appendChild(caption(c.label, labelAnchor(c.labelPos, x, y, w, h), "comp-label"));
  }

  /* A sight glass: a circle with a bubble in it. */
  function drawGlass(g, c) {
    const { x, y } = c.at, r = c.r || 13;
    g.appendChild(el("circle", { cx: x, cy: y, r, class: `comp-box accent-${c.accent}` }));
    g.appendChild(el("circle", { cx: x + 3, cy: y - 3, r: 3.2, class: `glass-bubble fill-${c.accent}` }));
    g.appendChild(caption(c.label, labelAnchor(c.labelPos, x, y, r * 2, r * 2), "comp-label"));
  }

  /* A regulating valve: bow-tie body, the standard drawing symbol. */
  function drawValve(g, c) {
    const { x, y } = c.at, r = c.r || 13;
    g.appendChild(el("path", {
      d: `M ${x - r} ${y - r} L ${x + r} ${y + r} L ${x + r} ${y - r} L ${x - r} ${y + r} Z`,
      class: `comp-box accent-${c.accent}`,
    }));
    g.appendChild(caption(c.label, labelAnchor(c.labelPos, x, y, r * 2, r * 2), "comp-label"));
  }

  /* A heat exchanger: a box with the two streams shown crossing inside it. */
  function drawHx(g, c) {
    const b = c.box;
    g.appendChild(el("rect", {
      x: b.x, y: b.y, width: b.w, height: b.h, rx: 10,
      class: `comp-box accent-${c.accent}`,
    }));
    if (c.sub2) g.appendChild(el("text", { x: c.sub2.x, y: c.sub2.y, class: "comp-sub" }, c.sub2.text));
    if (c.sub3) g.appendChild(el("text", { x: c.sub3.x, y: c.sub3.y, class: "comp-sub" }, c.sub3.text));
    // Two-line captions centre on the box; the vertical offset keeps them
    // clear of any "what happens here" sub-labels above and below.
    const lines = String(c.label).split("\n").length;
    g.appendChild(caption(c.label, {
      x: b.x + b.w / 2, y: b.y + b.h / 2 - (lines - 1) * 5, anchor: "middle",
    }, "comp-label"));
  }

  const DRAW = {
    box: drawBox, coil: drawCoil, diamond: drawDiamond, vessel: drawVessel,
    puck: drawPuck, glass: drawGlass, valve: drawValve, hx: drawHx,
  };

  /* The drawn bounds of a component, whatever shape it is. */
  function bounds(c) {
    if (c.box) return { x: c.box.x, y: c.box.y, w: c.box.w, h: c.box.h };
    const r = c.r || 0;
    const w = c.w != null ? (c.vertical ? c.h : c.w) : r * 2;
    const h = c.h != null ? (c.vertical ? c.w : c.h) : r * 2;
    return { x: c.at.x - w / 2, y: c.at.y - h / 2, w, h };
  }

  /* An invisible target over each component.

     Two reasons this is not optional. A bow-tie valve symbol is a
     self-intersecting path, so its geometric centre is *unfilled* and a click
     there hits nothing at all. And a sight glass is a 26-unit circle, which is
     a punishingly small target on a touchscreen. The hit rect gives every
     component the same generous, predictable area. */
  const HIT_PAD = 10;
  const CHAR_W = 7.6;   // 12px bold + 1px letter-spacing, near enough

  function hitArea(c) {
    const b = bounds(c);
    let { x, y } = b, w = b.w, h = b.h;
    x -= HIT_PAD; y -= HIT_PAD; w += HIT_PAD * 2; h += HIT_PAD * 2;

    // The caption is part of the target. People click labels, and without this
    // a component whose caption sits to one side has its bounding-box centre
    // out in empty space, where a click hits the background instead.
    const lines = String(c.label || "").split("\n");
    const labelW = Math.max(...lines.map(l => l.length)) * CHAR_W + 14;
    const labelH = lines.length * 13 + 8;
    switch (c.labelPos) {
      case "left":  x -= labelW; w += labelW; break;
      case "right": w += labelW; break;
      case "above": y -= labelH; h += labelH; break;
      default:      if (c.kind !== "box" && c.kind !== "coil" && c.kind !== "hx") h += labelH;
    }
    return el("rect", { x, y, width: w, height: h, class: "comp-hit" });
  }

  /* Captions may carry {tokens} that the caller resolves to live values. */
  function fill(text, values) {
    if (!values || text == null) return text;
    return String(text).replace(/\{(\w+)\}/g, (m, k) => (k in values ? values[k] : m));
  }

  /* ---- Render ------------------------------------------------------------- */
  function render(svg, circuit, values) {
    svg.setAttribute("viewBox", circuit.viewBox);
    svg.innerHTML = "";

    // defs: the glow filter selection and focus use
    const defs = el("defs");
    const filter = el("filter", {
      id: "glow", x: "-50%", y: "-50%", width: "200%", height: "200%",
    });
    filter.appendChild(el("feGaussianBlur", { stdDeviation: 4, result: "b" }));
    const merge = el("feMerge");
    merge.appendChild(el("feMergeNode", { in: "b" }));
    merge.appendChild(el("feMergeNode", { in: "SourceGraphic" }));
    filter.appendChild(merge);
    defs.appendChild(filter);
    svg.appendChild(defs);

    const visible = circuit.pipes.filter(p => !p.hidden);

    const base = el("g", { class: "pipes-base" });
    visible.forEach(p => base.appendChild(el("path", { d: p.d })));
    svg.appendChild(base);

    // Thermal couplings: a heat exchanger links two runs that are nowhere near
    // each other on the drawing. These lines carry heat, not refrigerant, so
    // they are dashed and thin — they must not read as another pipe.
    const couples = [];
    circuit.components.forEach(c => (c.couples || []).forEach(t => couples.push(t)));
    if (couples.length) {
      const cg = el("g", { class: "heat-couples", "aria-hidden": "true" });
      couples.forEach(t => cg.appendChild(el("path", { d: t.d, class: `heat-couple dir-${t.dir}` })));
      svg.appendChild(cg);
    }

    const flow = el("g", { class: "pipes-flow" });
    visible.forEach(p => flow.appendChild(el("path", {
      id: p.id, d: p.d, "data-state": p.state,
      style: `stroke: var(--state-${p.state})`,
    })));
    svg.appendChild(flow);

    const labels = el("g", { class: "pipe-labels", "aria-hidden": "true" });
    visible.forEach(p => {
      if (!p.label || !p.labelAt) return;
      labels.appendChild(el("text", {
        x: p.labelAt.x, y: p.labelAt.y,
        "text-anchor": p.labelAt.anchor || "middle",
        transform: p.labelAt.rotate || null,
      }, p.label));
    });
    svg.appendChild(labels);

    circuit.components.forEach(c => {
      const g = el("g", {
        class: "component", "data-component": c.id,
        tabindex: "0", role: "button",
        "aria-label": String(c.label).replace(/\n/g, " "),
      });
      g.appendChild(hitArea(c));
      const resolved = c.sub ? Object.assign({}, c, { sub: Object.assign({}, c.sub, { text: fill(c.sub.text, values) }) }) : c;
      (DRAW[resolved.kind] || drawBox)(g, resolved);
      svg.appendChild(g);
    });

    svg.appendChild(el("g", { id: "particles" }));
    return { pipes: visible, components: circuit.components };
  }

  const api = { render };
  root.RefrigSchematic = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
