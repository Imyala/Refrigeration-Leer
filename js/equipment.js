/* =========================================================================
   Equipment view — the same circuit drawn as the plant it represents.

   A schematic is the language of the trade and a technician has to be fluent
   in it, but a first-year apprentice does not yet know what a "diamond on the
   liquid line" looks like when they open a condensing unit. So the simulator
   draws the identical circuit two ways and lets the learner flip between them:
   the symbols they must learn to read, and the equipment they will actually
   put their hands on.

   This module only supplies component artwork. Pipe runs, particle flow,
   captions, hit areas, fault flags and the coil phase-fill all come from
   js/schematic.js exactly as before, so nothing downstream knows or cares
   which view is on screen. Two rules make that work:

     · art is drawn inside the component's own box or around its `at` point,
       so pipes still meet it where they always did;
     · every renderer emits exactly one `.comp-box` first, because selection,
       focus, the fault pulse and the coil fill all key off it.

   Browser-only (it touches the DOM); exposes `RefrigEquipment`.
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

  /* ---- Shared materials ---------------------------------------------------
     Four gradients do all the work: painted steel for casings, bare steel for
     pressure vessels, copper for line components and brass for valve bodies.
     Defined once per drawing and referenced by url(), so adding a component
     costs no new paint. */
  const MATERIALS = [
    ["eqSteel",  [[0, "#46525e"], [0.45, "#2b3742"], [1, "#161f28"]]],
    ["eqShell",  [[0, "#6b7885"], [0.4, "#43505c"], [1, "#222c36"]]],
    ["eqCopper", [[0, "#c88a55"], [0.45, "#9a5f36"], [1, "#5d3820"]]],
    ["eqBrass",  [[0, "#d8b878"], [0.45, "#a88748"], [1, "#5f4c26"]]],
  ];

  /* Call once per render, before any component is drawn. */
  function defineMaterials(defs) {
    if (!defs || defs.querySelector("#eqSteel")) return;
    MATERIALS.forEach(([id, stops]) => {
      const g = el("linearGradient", { id, x1: 0, y1: 0, x2: 0, y2: 1 });
      stops.forEach(([offset, color]) => g.appendChild(el("stop", { offset, "stop-color": color })));
      defs.appendChild(g);
    });
  }

  const paint = (id) => `url(#${id})`;

  /* ---- Small parts every machine is made of ------------------------------- */

  /* A pipe stub leaving a body, so the circuit's pipework visibly lands on
     something rather than disappearing under a shape. */
  function stub(g, x1, y1, x2, y2, w) {
    g.appendChild(el("line", { x1, y1, x2, y2, class: "eq-stub", "stroke-width": w || 7 }));
  }

  /* A bolted flange / union: the give-away that a joint is serviceable. */
  function nut(g, x, y, r) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i + Math.PI / 6;
      pts.push(`${(x + Math.cos(a) * r).toFixed(1)},${(y + Math.sin(a) * r).toFixed(1)}`);
    }
    g.appendChild(el("polygon", { points: pts.join(" "), class: "eq-nut", fill: paint("eqBrass") }));
  }

  /* The specular band that makes a cylinder read as round rather than flat. */
  function sheen(g, x, y, w, h, rx) {
    g.appendChild(el("rect", { x, y, width: w, height: h, rx: rx == null ? h / 2 : rx, class: "eq-sheen" }));
  }

  /* A fan: hub plus swept blades, in a guard ring. Drawn rather than animated —
     whether it is turning is the model's business, and js/app.js says so by
     flagging the component when the fan-failure fault is active. */
  function fan(g, cx, cy, r) {
    g.appendChild(el("circle", { cx, cy, r, class: "eq-fan-guard" }));
    // The blades turn, and stop when the fan does — which is the difference
    // between a dirty coil and a failed fan, standing in front of the machine.
    const rotor = el("g", { class: "eq-fan-rotor", style: `transform-origin: ${cx}px ${cy}px` });
    for (let i = 0; i < 5; i++) {
      const a = (Math.PI * 2 / 5) * i;
      const x1 = cx + Math.cos(a) * r * 0.22, y1 = cy + Math.sin(a) * r * 0.22;
      const x2 = cx + Math.cos(a + 0.85) * r * 0.9, y2 = cy + Math.sin(a + 0.85) * r * 0.9;
      const mx = cx + Math.cos(a + 0.3) * r * 0.75, my = cy + Math.sin(a + 0.3) * r * 0.75;
      rotor.appendChild(el("path", { d: `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`, class: "eq-fan-blade" }));
    }
    g.appendChild(rotor);
    g.appendChild(el("circle", { cx, cy, r: r * 0.2, class: "eq-fan-hub", fill: paint("eqSteel") }));
  }

  /* ---- Components ---------------------------------------------------------
     Each takes the same (group, component) the schematic renderer uses, and
     draws inside the geometry that component already declares. */

  /* Hermetic compressor: welded dome on mounting feet, terminal box on the
     side, suction and discharge stubs where the circuit's pipes arrive. */
  function drawCompressor(g, c) {
    const b = c.box;
    const cx = b.x + b.w / 2;
    const footY = b.y + b.h - 34;
    const domeW = 104, domeH = 62;
    const dx = cx - domeW / 2, dy = footY - domeH;

    // The casing outline is the .comp-box: invisible fill, but it is what
    // selection, focus and the fault pulse draw their outline on.
    g.appendChild(el("rect", {
      x: b.x, y: b.y, width: b.w, height: b.h, rx: 12,
      class: `comp-box eq-frame accent-${c.accent}`,
    }));

    // Suction in at the bottom centre, discharge out to the right.
    stub(g, cx, footY, cx, b.y + b.h, 8);
    stub(g, dx + domeW, dy + domeH * 0.42, b.x + b.w, dy + domeH * 0.42, 8);

    // Mounting feet and rail
    g.appendChild(el("rect", { x: cx - 62, y: footY - 4, width: 124, height: 9, rx: 3, class: "eq-foot" }));
    [-52, 44].forEach((o) =>
      g.appendChild(el("rect", { x: cx + o, y: footY + 3, width: 10, height: 8, rx: 2, class: "eq-foot" })));

    // The welded dome: barrel with a domed crown and the girth weld between
    g.appendChild(el("path", {
      d: `M ${dx} ${dy + domeH} L ${dx} ${dy + 22} Q ${dx} ${dy} ${cx} ${dy}`
       + ` Q ${dx + domeW} ${dy} ${dx + domeW} ${dy + 22} L ${dx + domeW} ${dy + domeH} Z`,
      class: "eq-body", fill: paint("eqSteel"),
    }));
    g.appendChild(el("line", {
      x1: dx, y1: dy + 24, x2: dx + domeW, y2: dy + 24, class: "eq-seam",
    }));
    sheen(g, dx + 11, dy + 8, 13, domeH - 18, 6);

    // Terminal box — where the electrical side of every service call starts
    g.appendChild(el("rect", {
      x: dx - 16, y: dy + 26, width: 18, height: 20, rx: 3, class: "eq-terminal",
    }));
    [32, 39].forEach((y) =>
      g.appendChild(el("circle", { cx: dx - 7, cy: dy + y, r: 1.8, class: "eq-pin" })));
  }

  /* Air-cooled coil: fin pack with the tube runs crossing it, and its fan.
     The same drawing serves the condenser and the evaporator — a coil is a
     coil, and which one it is is told by its accent colour and its caption. */
  function drawCoil(g, c) {
    const b = c.box;
    const cold = c.coil !== "cond";
    // Evaporator air blows the other way, so its fan sits at the other end.
    const fanR = 30;
    const fanCx = cold ? b.x + b.w - 38 : b.x + 38;
    const packX = cold ? b.x + 10 : b.x + 72;
    const packW = b.w - 82;
    const packY = b.y + 20, packH = b.h - 46;

    g.appendChild(el("rect", {
      x: b.x, y: b.y, width: b.w, height: b.h, rx: 12,
      class: `comp-box eq-frame accent-${c.accent}`,
    }));

    // Fin pack: closely spaced plate fins, which is what you actually see
    g.appendChild(el("rect", { x: packX, y: packY, width: packW, height: packH, rx: 3, class: "eq-pack" }));
    const finGap = 5;
    const fg = el("g", { class: `eq-fins fins-${c.accent}` });
    for (let x = packX + finGap; x < packX + packW - 1; x += finGap) {
      fg.appendChild(el("line", { x1: x, y1: packY + 2, x2: x, y2: packY + packH - 2 }));
    }
    g.appendChild(fg);

    // Tube runs threading the pack, with the return bends at the ends
    const rows = 3, rowGap = packH / (rows + 1);
    const tg = el("g", { class: `eq-tubes accent-${c.accent}` });
    for (let i = 1; i <= rows; i++) {
      const y = packY + rowGap * i;
      tg.appendChild(el("line", { x1: packX + 2, y1: y, x2: packX + packW - 2, y2: y }));
    }
    for (let i = 1; i < rows; i++) {
      const y1 = packY + rowGap * i, y2 = packY + rowGap * (i + 1);
      const bendX = i % 2 ? packX + packW - 2 : packX + 2;
      const out = i % 2 ? 7 : -7;
      tg.appendChild(el("path", { d: `M ${bendX} ${y1} Q ${bendX + out} ${(y1 + y2) / 2} ${bendX} ${y2}` }));
    }
    g.appendChild(tg);

    fan(g, fanCx, b.y + b.h / 2 - 6, fanR);
    if (c.sub) {
      g.appendChild(el("text", {
        x: b.x + b.w / 2, y: b.y + 13, class: "comp-sub",
      }, c.sub.text));
    }
  }

  /* Thermostatic expansion valve: brass body, adjustment cap, and the sensing
     bulb strapped to the suction line — the part apprentices most often cannot
     picture from the diamond symbol. */
  function drawMetering(g, c) {
    const { x, y } = c.at;
    const w = 26, h = 34;

    g.appendChild(el("rect", {
      x: x - w / 2, y: y - h / 2, width: w, height: h, rx: 4,
      class: `comp-box eq-body accent-${c.accent}`, fill: paint("eqBrass"),
    }));
    // Diaphragm head on top, adjustment stem below
    g.appendChild(el("ellipse", { cx: x, cy: y - h / 2 - 4, rx: 13, ry: 7, class: "eq-cap", fill: paint("eqBrass") }));
    g.appendChild(el("rect", { x: x - 4, y: y + h / 2, width: 8, height: 7, rx: 2, class: "eq-cap", fill: paint("eqBrass") }));
    sheen(g, x - w / 2 + 4, y - h / 2 + 5, 5, h - 10, 2.5);
    nut(g, x - w / 2 - 4, y, 5);
    nut(g, x + w / 2 + 4, y, 5);

    // Capillary out to the sensing bulb
    g.appendChild(el("path", {
      d: `M ${x + 11} ${y - h / 2 - 4} Q ${x + 34} ${y - 26} ${x + 30} ${y - 8}`,
      class: "eq-capillary",
    }));
    g.appendChild(el("rect", {
      x: x + 25, y: y - 8, width: 10, height: 16, rx: 5,
      class: "eq-bulb", fill: paint("eqCopper"),
    }));
  }

  /* Pressure vessel: receiver, accumulator or flash chamber. Rolled shell with
     dished ends, a girth weld, and the liquid level if the model gives one. */
  function drawVessel(g, c) {
    const { x, y } = c.at;
    const w = c.w || 56, h = c.h || 68;
    const bx = x - w / 2, by = y - h / 2, cap = 9;

    g.appendChild(el("rect", {
      x: bx, y: by, width: w, height: h, rx: 12,
      class: `comp-box eq-body accent-${c.accent}`, fill: paint("eqShell"),
    }));
    // Dished ends, top and bottom
    g.appendChild(el("ellipse", { cx: x, cy: by + cap, rx: w / 2 - 1, ry: cap, class: "eq-dish" }));
    g.appendChild(el("ellipse", { cx: x, cy: by + h - cap, rx: w / 2 - 1, ry: cap, class: "eq-dish" }));
    g.appendChild(el("line", { x1: bx, y1: y, x2: bx + w, y2: y, class: "eq-seam" }));
    sheen(g, bx + 7, by + cap, 6, h - cap * 2, 3);

    if (c.liquidLevel != null) {
      const lh = Math.max(6, (h - cap * 2) * c.liquidLevel);
      g.appendChild(el("rect", {
        x: bx + 4, y: by + h - cap - lh, width: w - 8, height: lh, rx: 4,
        class: `vessel-liquid fill-${c.accent}`,
      }));
    }
    // Service valve on the crown
    g.appendChild(el("rect", { x: x - 4, y: by - 7, width: 8, height: 8, rx: 2, class: "eq-cap", fill: paint("eqBrass") }));
  }

  /* Line component in a copper body: the filter drier, and the solenoid valve
     with its coil. Both straddle a run, so both follow the run's direction. */
  function drawPuck(g, c) {
    const { x, y } = c.at;
    const vertical = !!c.vertical;
    const len = c.w || 46, dia = c.h || 22;
    const w = vertical ? dia : len, h = vertical ? len : dia;
    const solenoid = c.id === "solenoid";

    g.appendChild(el("rect", {
      x: x - w / 2, y: y - h / 2, width: w, height: h, rx: Math.min(w, h) / 2,
      class: `comp-box eq-body accent-${c.accent}`,
      fill: paint(solenoid ? "eqBrass" : "eqCopper"),
    }));
    if (vertical) sheen(g, x - w / 2 + 4, y - h / 2 + 5, 5, h - 10, 2.5);
    else sheen(g, x - w / 2 + 5, y - h / 2 + 4, w - 10, 5, 2.5);

    // Flare nuts at both ends: this is a serviceable, replaceable component
    if (vertical) { nut(g, x, y - h / 2 - 3, 6); nut(g, x, y + h / 2 + 3, 6); }
    else { nut(g, x - w / 2 - 3, y, 6); nut(g, x + w / 2 + 3, y, 6); }

    if (solenoid) {
      // The coil sitting on the stem — the reason this valve is electrical
      const cw = 22, ch = 16;
      g.appendChild(el("rect", { x: x - cw / 2, y: y - h / 2 - ch - 3, width: cw, height: ch, rx: 3, class: "eq-coilbox" }));
      g.appendChild(el("rect", { x: x - 3, y: y - h / 2 - 4, width: 6, height: 5, class: "eq-coilbox" }));
      g.appendChild(el("path", {
        d: `M ${x + cw / 2} ${y - h / 2 - ch + 4} q 9 -2 11 -10`, class: "eq-conduit",
      }));
    }
  }

  /* Sight glass: brass fitting with a window, and the bubble that tells you
     there is vapour where there should be liquid. */
  function drawGlass(g, c) {
    const { x, y } = c.at, r = c.r || 13;
    g.appendChild(el("circle", {
      cx: x, cy: y, r: r + 2,
      class: `comp-box eq-body accent-${c.accent}`, fill: paint("eqBrass"),
    }));
    nut(g, x, y, r + 1);
    g.appendChild(el("circle", { cx: x, cy: y, r: r - 4, class: "eq-window" }));
    g.appendChild(el("circle", { cx: x + 3, cy: y - 3, r: 3.2, class: `glass-bubble fill-${c.accent}` }));
    g.appendChild(el("path", { d: `M ${x - 5} ${y - 4} q 3 -3 7 -3`, class: "eq-glint" }));
  }

  /* Regulating valve (EPR and friends): brass body under an adjusting cap with
     a locking nut, which is how you tell it apart from a plain stop valve. */
  function drawValve(g, c) {
    const { x, y } = c.at, r = c.r || 13;
    const w = r * 2, h = r * 1.9;

    g.appendChild(el("rect", {
      x: x - w / 2, y: y - h / 2, width: w, height: h, rx: 5,
      class: `comp-box eq-body accent-${c.accent}`, fill: paint("eqBrass"),
    }));
    sheen(g, x - w / 2 + 4, y - h / 2 + 4, 4, h - 8, 2);
    nut(g, x - w / 2 - 3, y, 5);
    nut(g, x + w / 2 + 3, y, 5);
    // Adjusting cap and its lock nut
    g.appendChild(el("rect", { x: x - 6, y: y - h / 2 - 11, width: 12, height: 11, rx: 2, class: "eq-cap", fill: paint("eqBrass") }));
    g.appendChild(el("rect", { x: x - 8, y: y - h / 2 - 3, width: 16, height: 4, rx: 1, class: "eq-cap", fill: paint("eqBrass") }));
  }

  /* Heat exchanger: a shell with the two streams entering at opposite ends,
     shown counter-flow, because that is the whole point of the device. */
  function drawHx(g, c) {
    const b = c.box;
    g.appendChild(el("rect", {
      x: b.x, y: b.y, width: b.w, height: b.h, rx: 10,
      class: `comp-box eq-body accent-${c.accent}`, fill: paint("eqShell"),
    }));
    g.appendChild(el("ellipse", { cx: b.x + 9, cy: b.y + b.h / 2, rx: 9, ry: b.h / 2 - 1, class: "eq-dish" }));
    g.appendChild(el("ellipse", { cx: b.x + b.w - 9, cy: b.y + b.h / 2, rx: 9, ry: b.h / 2 - 1, class: "eq-dish" }));
    sheen(g, b.x + 12, b.y + 6, b.w - 24, 5, 2.5);

    // The inner tube, doubling back so the two streams run against each other
    const y1 = b.y + b.h * 0.36, y2 = b.y + b.h * 0.68;
    g.appendChild(el("path", {
      d: `M ${b.x + 6} ${y1} L ${b.x + b.w - 14} ${y1}`
       + ` Q ${b.x + b.w - 6} ${(y1 + y2) / 2} ${b.x + b.w - 14} ${y2}`
       + ` L ${b.x + 6} ${y2}`,
      class: "eq-inner-tube",
    }));
    // Sub-labels the schematic view puts on this device still apply
    [c.sub2, c.sub3].forEach((s) => {
      if (s) g.appendChild(el("text", { x: s.x, y: s.y, class: "comp-sub" }, s.text));
    });
  }

  /* By shape, because that is what the circuit data declares. Only the
     solenoid needs to know its own id, and drawPuck asks for it. */
  const DRAW = {
    box: drawCompressor, coil: drawCoil, diamond: drawMetering, vessel: drawVessel,
    puck: drawPuck, glass: drawGlass, valve: drawValve, hx: drawHx,
  };

  const api = { DRAW, defineMaterials };
  root.RefrigEquipment = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
