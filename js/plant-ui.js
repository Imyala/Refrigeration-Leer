/* =========================================================================
   Plant Simulator — the page.

   One operating point from js/model.js drives everything on screen: the
   drawing (js/plant-art.js), the gauges on it, the readings rail, the P–h
   diagram and the inspector. Click a part and the inspector says what it is,
   what it does and what it looks like right now; click a numbered point on
   the plant or on the diagram and both light up together.
   ========================================================================= */
(function () {
  "use strict";

  const D = window.RefrigData, M = window.RefrigModel, U = window.RefrigUnits;
  const P = window.RefrigPlant, ART = window.RefrigPlantArt;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const state = {
    ref: "R404A", speed: 100, load: 100, fault: "none", running: true,
    colour: true, labels: true, points: true,
    selPoint: null, selPart: null,
  };

  /* Deep links from the course: plant.html?fault=lowCharge&ref=R134a&part=txv */
  function readParams() {
    const q = new URLSearchParams(location.search || "");
    if (D.REFRIGERANTS[q.get("ref")]) state.ref = q.get("ref");
    if (P.faultKeys().includes(q.get("fault"))) state.fault = q.get("fault");
    if (P.PARTS[q.get("part")]) state.selPart = q.get("part");
    if (P.POINTS[q.get("point")]) state.selPoint = q.get("point");
  }

  function compute() {
    const op = M.deriveAt(state.ref, state.speed, state.load, state.fault, "basic");
    const viz = D.VIZ[state.fault] || D.VIZ.none;
    const sym = P.symptoms(state.fault, op, state.running);
    return { op, viz, sym, sp: P.statePoints(op) };
  }

  /* The panel gauges read gauge pressure on a fixed scale for the fluid, so a
     fault moves the needle rather than the scale. */
  function gaugeLevels(op, sym) {
    const b = op.base;
    const loMax = Math.max(U.gaugeBar(b.pLow * 2.6), 1);
    const hiMax = Math.max(U.gaugeBar(b.pHigh * 1.9), 1);
    return {
      lo: Math.max(0, U.gaugeBar(op.pLow)) / loMax,
      hi: Math.max(0, U.gaugeBar(op.pHigh)) / hiMax,
      flutter: sym.gaugeFlutter && state.running,
    };
  }

  /* ---- The drawing -------------------------------------------------------- */
  function drawPlant(c) {
    const svg = $("plantSvg");
    const air = P.airTemps(c.op, state.load);
    svg.innerHTML = ART.render({
      op: c.op, sym: c.sym, viz: c.viz, gaugeLevels: gaugeLevels(c.op, c.sym),
      selectedPoint: state.selPoint,
      air: { room: U.fmtT(air.room), ambient: U.fmtT(air.ambient), roomValue: state.running ? U.cTo(air.room).toFixed(1) : null },
    });
    svg.classList.toggle("is-copper", !state.colour);
    svg.classList.toggle("no-labels", !state.labels);
    svg.classList.toggle("no-points", !state.points);
    svg.classList.toggle("is-stopped", !state.running);
    // Faster compressor, faster refrigerant.
    if (svg.style && svg.style.setProperty) svg.style.setProperty("--pl-dur", (1.1 * 100 / state.speed).toFixed(2) + "s");
    svg.querySelectorAll("[data-part]").forEach((el) => {
      if (el.classList && el.classList.toggle) el.classList.toggle("is-selected", el.dataset.part === state.selPart);
    });
  }

  /* ---- Readings rail --------------------------------------------------------- */
  function readout(label, dot, value, unit, note) {
    return `<div class="readout"><div class="readout-line">` +
      `<span class="label"><span class="dot dot-${dot}"></span>${esc(label)}</span>` +
      `<span class="value">${value}${unit ? ` <span class="unit">${esc(unit)}</span>` : ""}</span></div>` +
      (note ? `<span class="readout-expect ok">${note}</span>` : "") + `</div>`;
  }
  function pVal(absBar) {
    const u = U.P_UNITS[U.prefs.p];
    return { v: U.barTo(U.gaugeBar(absBar)).toFixed(u.decimals), u: u.gaugeLabel };
  }
  const tVal = (c) => Math.round(U.cTo(c)).toString();
  const tUnit = () => "°" + U.prefs.t;
  const dt = (k) => U.prefs.t === "F" ? Math.round(U.dTo(k)).toString() : Math.round(k).toString();
  const dtUnit = () => U.prefs.t === "F" ? "°F" : "K";

  function drawReadouts(c) {
    const op = c.op;
    const lo = pVal(op.pLow), hi = pVal(op.pHigh);
    $("plantReadouts").innerHTML =
      readout("Suction", "vap", lo.v, lo.u, `saturated ${U.fmtT(op.tEvap)}`) +
      readout("Discharge", "hot", hi.v, hi.u, `saturated ${U.fmtT(op.tCond)}`) +
      readout("Suction line", "vap", tVal(op.tSuction), tUnit()) +
      readout("Superheat", "vap", dt(op.superheat), dtUnit()) +
      readout("Liquid line", "liq", tVal(op.tLiquid), tUnit()) +
      readout("Subcooling", "liq", dt(op.subcool), dtUnit()) +
      readout("Discharge line", "hot", tVal(c.sp["2"].t), tUnit()) +
      readout("COP", "none", op.cop.toFixed(1), "");
    const status = $("plantStatus");
    status.textContent = state.running ? "Running" : "Stopped";
    status.className = "rail-status" + (state.running ? "" : " off");
    $("plantReadouts").classList.toggle("is-frozen", !state.running);
  }

  /* ---- The P–h diagram -------------------------------------------------------- */
  function drawPh(c) {
    const svg = $("plantPh");
    const tbl = c.op.base.satTable;
    const W = 620, H = 380, L = 64, R = 18, T = 16, B = 44;
    const sp = c.sp;
    const hs = P.POINT_ORDER.map((k) => sp[k].h);
    const hMin = Math.min(...hs, tbl[0].hf) - 12;
    const hMax = Math.max(...hs) + 26;
    const pLo = Math.max(tbl[0].P, c.op.pLow * 0.42);
    const pHi = Math.min(tbl[tbl.length - 1].P, c.op.pHigh * 2.1);
    const x = (h) => L + (h - hMin) / (hMax - hMin) * (W - L - R);
    const y = (p) => T + (1 - (Math.log(p) - Math.log(pLo)) / (Math.log(pHi) - Math.log(pLo))) * (H - T - B);
    const f = (n) => n.toFixed(1);

    let out = `<defs><clipPath id="phClip"><rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/></clipPath></defs>`;
    // Grid: pressure decades, enthalpy every 50.
    const pTicks = [0.2, 0.5, 1, 2, 5, 10, 20, 50].filter((p) => p >= pLo && p <= pHi);
    pTicks.forEach((p) => {
      const u = U.P_UNITS[U.prefs.p];
      const lbl = U.barTo(p).toFixed(U.prefs.p === "bar" ? (p < 1 ? 1 : 0) : 0);
      out += `<line class="ph-grid" x1="${L}" x2="${W - R}" y1="${f(y(p))}" y2="${f(y(p))}"/>` +
        `<text class="ph-tick" x="${L - 6}" y="${f(y(p) + 4)}" text-anchor="end">${lbl}</text>`;
      void u;
    });
    for (let h = Math.ceil(hMin / 50) * 50; h <= hMax; h += 50) {
      out += `<line class="ph-grid" x1="${f(x(h))}" x2="${f(x(h))}" y1="${T}" y2="${H - B}"/>` +
        `<text class="ph-tick" x="${f(x(h))}" y="${H - B + 16}" text-anchor="middle">${h}</text>`;
    }
    out += `<rect class="ph-frame" x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/>`;
    // Saturation dome from the fluid's own table.
    let dome = `M${f(x(tbl[0].hf))} ${f(y(tbl[0].P))}`;
    tbl.forEach((r) => { dome += ` L${f(x(r.hf))} ${f(y(r.P))}`; });
    for (let i = tbl.length - 1; i >= 0; i--) dome += ` L${f(x(tbl[i].hg))} ${f(y(tbl[i].P))}`;
    out += `<g clip-path="url(#phClip)"><path class="ph-dome" d="${dome}Z"/>`;
    const liqX = x(M.interpTable(tbl, "P", pLo * 1.15, "hf")), vapX = x(M.interpTable(tbl, "P", pLo * 1.15, "hg"));
    out += `<text class="ph-sat" x="${f(liqX + 6)}" y="${f(y(pLo * 1.15) - 4)}">x = 0</text>` +
      `<text class="ph-sat" x="${f(vapX - 6)}" y="${f(y(pLo * 1.15) - 4)}" text-anchor="end">x = 1</text>`;
    // The cycle, segment by segment, in the state colours.
    const segs = [["5", "1", "mix"], ["1", "1'", "vap"], ["1'", "2", "comp"], ["2", "3", "hot"], ["3", "4", "cond"], ["4", "4'", "liq"], ["4'", "5", "exp"]];
    segs.forEach(([a, b, st]) => {
      const d = `M${f(x(sp[a].h))} ${f(y(sp[a].p))} L${f(x(sp[b].h))} ${f(y(sp[b].p))}`;
      out += `<path class="ph-seg-edge" d="${d}"/><path class="ph-seg st-${st}" d="${d}"/>`;
    });
    out += `</g>`;
    // Process names, where the eye expects them.
    const midX = (a, b) => (x(sp[a].h) + x(sp[b].h)) / 2;
    out += `<text class="ph-proc" x="${f(midX("5", "1"))}" y="${f(y(sp["5"].p) + 18)}" text-anchor="middle">Evaporating — heat in</text>` +
      `<text class="ph-proc" x="${f(midX("4", "3"))}" y="${f(y(sp["2"].p) - 12)}" text-anchor="middle">Condensing — heat out</text>` +
      `<text class="ph-proc" x="${f((x(sp["1'"].h) + x(sp["2"].h)) / 2 - 8)}" y="${f((y(sp["1'"].p) + y(sp["2"].p)) / 2)}" text-anchor="end">Compression</text>` +
      `<text class="ph-proc" x="${f(x(sp["5"].h) - 8)}" y="${f((y(sp["5"].p) + y(sp["4'"].p)) / 2)}" text-anchor="end">Expansion</text>`;
    // Numbered points, clickable, offset so the pairs that sit close together
    // (1 and 1′, 4 and 4′) stay readable.
    const off = { "5": [-14, 14], "1": [0, 16], "1'": [12, 14], "2": [12, -10], "3": [0, -14], "4": [2, -14], "4'": [-14, -12] };
    // Liquid coming back: 1 and 1′ are one point, labelled once.
    const merged = sp["1'"].wet;
    P.POINT_ORDER.forEach((k) => {
      if (merged && k === "1") return;
      const px = x(sp[k].h), py = y(sp[k].p);
      const [ox, oy] = off[k];
      const label = merged && k === "1'" ? "1 = 1′" : k.replace("'", "′");
      out += `<g class="ph-pt${state.selPoint === k ? " is-selected" : ""}" data-point="${k}" tabindex="0" role="button" aria-label="State point ${k.replace("'", " prime")}">` +
        `<circle cx="${f(px)}" cy="${f(py)}" r="4.5"/>` +
        `<text x="${f(px + ox)}" y="${f(py + oy + 4)}" text-anchor="middle">${label}</text></g>`;
    });
    out += `<text class="ph-axis" x="${(L + W - R) / 2}" y="${H - 6}" text-anchor="middle">Enthalpy h (kJ/kg)</text>` +
      `<text class="ph-axis" transform="translate(16 ${(T + H - B) / 2}) rotate(-90)" text-anchor="middle">Pressure (${esc(U.P_UNITS[U.prefs.p].label)} abs)</text>`;
    svg.innerHTML = out;
  }

  /* ---- Inspector ------------------------------------------------------------------ */
  function drawInspector(c) {
    const host = $("plantInspector");
    if (state.selPoint) {
      const k = state.selPoint, pt = P.POINTS[k], s = c.sp[k];
      const g = pVal(s.p);
      const sat = M.satTemp(c.op.base, s.p);
      let extra = "";
      if (k === "1'") extra = s.wet
        ? `<div><dt>Superheat</dt><dd>${dt(c.op.superheat)} ${dtUnit()} <small>on the thermometer only: the gas is wet</small></dd></div>`
        : `<div><dt>Superheat</dt><dd>${dt(c.op.superheat)} ${dtUnit()} <small>line ${tVal(s.t)}°, saturated ${tVal(sat)}°</small></dd></div>`;
      if (k === "4'") extra = `<div><dt>Subcooling</dt><dd>${dt(c.op.subcool)} ${dtUnit()} <small>saturated ${tVal(sat)}°, line ${tVal(s.t)}°</small></dd></div>`;
      if (k === "2") extra = `<div><dt>Discharge superheat</dt><dd>${dt(Math.max(0, s.t - sat))} ${dtUnit()}</dd></div>`;
      const phase = P.PHASE_WORDS[s.phase] + (s.phase === "mix" ? ` · ${Math.round(s.x * 100)} % vapour` : "");
      const wetNote = s.wet
        ? `<p class="insp-sign"><b>Liquid is coming back.</b> The refrigerant never finishes boiling: it leaves the coil and reaches the compressor as a wet mix, so 1 and 1′ are the same point, inside the dome. A thermometer on the suction line reads about the evaporating temperature — superheat near zero — because a wet mix sits at saturation.</p>`
        : "";
      host.innerHTML = `<div class="panel-head"><h2 id="inspTitle"><span class="insp-pt">${k.replace("'", "′")}</span> ${esc(pt.name)}</h2>
          <span class="hint">${esc(pt.where)}</span></div>
        ${s.wet ? wetNote : `<p class="insp-what">${esc(pt.what)}</p>`}
        <dl class="insp-vals">
          <div><dt>Pressure</dt><dd>${g.v} ${esc(g.u)} <small>${esc(U.fmtPAbs(s.p))} abs</small></dd></div>
          <div><dt>Temperature</dt><dd>${tVal(s.t)} ${tUnit()}</dd></div>
          <div><dt>Saturation</dt><dd>${tVal(sat)} ${tUnit()}</dd></div>
          <div><dt>Enthalpy</dt><dd>${Math.round(s.h)} kJ/kg</dd></div>
          <div><dt>State</dt><dd>${esc(phase)}</dd></div>
          ${extra}
        </dl>
        <p class="insp-foot">Effect ${Math.round(c.op.effect)} kJ/kg in the evaporator (5→1′), work ${Math.round(c.op.work)} kJ/kg in the compressor (1′→2).</p>`;
      return;
    }
    if (state.selPart) {
      const id = state.selPart, part = P.PARTS[id];
      const sign = P.partSign(id, state.fault, c.sym);
      host.innerHTML = `<div class="panel-head"><h2 id="inspTitle">${esc(part.name)}</h2><span class="hint">${esc(part.kind)}</span></div>
        ${sign ? `<p class="insp-sign"><b>At the plant right now:</b> ${esc(sign)}</p>` : ""}
        <h3 class="insp-h">What it does</h3><p>${esc(part.does)}</p>
        <h3 class="insp-h">What to look for</h3><p>${esc(part.look)}</p>`;
      return;
    }
    host.innerHTML = `<div class="panel-head"><h2 id="inspTitle">Inspector</h2><span class="hint">nothing selected</span></div>
      <p class="insp-empty">Click any part of the plant to see what it is and what to look for on it, or a numbered point to see the refrigerant's pressure, temperature and state there.</p>
      <ul class="insp-parts">${P.PART_ORDER.map((id) => `<li><button type="button" class="insp-part-btn" data-part="${id}">${esc(P.PARTS[id].name)}</button></li>`).join("")}</ul>`;
  }

  function drawBanner() {
    const f = D.FAULTS[state.fault];
    const on = state.fault !== "none" && f && f.diag;
    $("plantBanner").hidden = !on;
    if (on) $("plantFaultText").textContent = f.diag;
  }

  function refresh() {
    const c = compute();
    drawPlant(c);
    drawReadouts(c);
    drawPh(c);
    drawInspector(c);
    drawBanner();
  }

  /* ---- Controls -------------------------------------------------------------------- */
  function select(kind, id) {
    if (kind === "point") { state.selPoint = state.selPoint === id ? null : id; state.selPart = null; }
    else { state.selPart = state.selPart === id ? null : id; state.selPoint = null; }
    refresh();
  }

  function onPick(e) {
    const t = e.target;
    const pt = t && t.closest ? t.closest("[data-point]") : null;
    if (pt) { select("point", pt.dataset.point); return; }
    const part = t && t.closest ? t.closest("[data-part]") : null;
    if (part) select("part", part.dataset.part);
  }
  function onKey(e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const t = e.target;
    if (!t || !t.closest || !(t.closest("[data-point]") || t.closest("[data-part]"))) return;
    e.preventDefault();
    onPick(e);
  }

  function toggle(btnId, key) {
    const btn = $(btnId);
    btn.addEventListener("click", () => {
      state[key] = !state[key];
      btn.setAttribute("aria-pressed", String(state[key]));
      refresh();
    });
  }

  function init() {
    if (!$("plantSvg") || !D || !M || !P || !ART) return;
    readParams();

    $("plantRef").innerHTML = Object.keys(D.REFRIGERANTS)
      .map((k) => `<option value="${k}"${k === state.ref ? " selected" : ""}>${esc(D.REFRIGERANTS[k].label)}</option>`).join("");
    $("plantFault").innerHTML = P.faultKeys()
      .map((k) => `<option value="${k}"${k === state.fault ? " selected" : ""}>${esc(D.FAULTS[k].label)}</option>`).join("");
    $("plantPUnit").value = U.prefs.p;
    $("plantTUnit").value = U.prefs.t;

    $("plantRef").addEventListener("change", (e) => { state.ref = e.target.value; refresh(); });
    $("plantFault").addEventListener("change", (e) => {
      state.fault = e.target.value;
      $("plantFaultField").classList.toggle("is-active", state.fault !== "none");
      refresh();
    });
    $("plantPUnit").addEventListener("change", (e) => { U.setPrefs(e.target.value, null); refresh(); });
    $("plantTUnit").addEventListener("change", (e) => { U.setPrefs(null, e.target.value); refresh(); });
    $("plantSpeed").addEventListener("input", (e) => { state.speed = +e.target.value; $("plantSpeedOut").textContent = state.speed + "%"; refresh(); });
    $("plantLoad").addEventListener("input", (e) => { state.load = +e.target.value; $("plantLoadOut").textContent = state.load + "%"; refresh(); });
    $("plantPower").addEventListener("click", () => {
      state.running = !state.running;
      const b = $("plantPower");
      b.textContent = state.running ? "Stop compressor" : "Start compressor";
      b.className = "btn " + (state.running ? "btn-stop" : "btn-start");
      refresh();
    });
    toggle("tglColour", "colour");
    toggle("tglLabels", "labels");
    toggle("tglPoints", "points");

    ["plantSvg", "plantPh", "plantInspector"].forEach((id) => {
      $(id).addEventListener("click", onPick);
      $(id).addEventListener("keydown", onKey);
    });
    $("plantFaultField").classList.toggle("is-active", state.fault !== "none");
    refresh();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
