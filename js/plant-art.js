/* =========================================================================
   Plant Simulator — the drawing.

   Every component is drawn to look like the thing a technician would find on
   site: a semi-hermetic compressor with its service valves and oil sight
   glass, a TXV with its power head, capillary and bulb, a sight glass you can
   see bubbles in, a receiver you can see the liquid level of. Faults show at
   the part — ice on the coil, a fan that has stopped, frost on the drier —
   because reading the machine comes before reading the gauges.

   Pure string building, no DOM: render() returns the SVG's inner markup, so
   the drawing can be checked in Node. Material colours (copper, brass, paint)
   are literal because they are the colour of the metal, not of the theme; the
   page, labels and refrigerant state colours come from CSS tokens.

   Exposes `RefrigPlantArt`; require()-able in Node.
   ========================================================================= */
(function (root) {
  "use strict";

  const node = typeof module !== "undefined" && typeof require !== "undefined";
  const P = node ? require("./plant.js") : root.RefrigPlant;

  const INK = "#262c32";
  const f1 = (n) => (Math.round(n * 10) / 10).toString();
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---- Materials ------------------------------------------------------------ */
  function lin(id, stops, vertical) {
    const dir = vertical === false ? 'x1="0" y1="0" x2="1" y2="0"' : 'x1="0" y1="0" x2="0" y2="1"';
    return `<linearGradient id="${id}" ${dir}>${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient>`;
  }
  function defs() {
    return `<defs>
      ${lin("plg-paint", [[0, "#8aa797"], [0.45, "#5d7b6d"], [1, "#3a5046"]])}
      ${lin("plg-paint-h", [[0, "#3f574c"], [0.3, "#6c8a7b"], [0.7, "#5d7b6d"], [1, "#3a5046"]], false)}
      ${lin("plg-head", [[0, "#9db6a8"], [1, "#4b6558"]])}
      ${lin("plg-brass", [[0, "#f3d894"], [0.5, "#c89c47"], [1, "#8a6627"]])}
      ${lin("plg-brass-h", [[0, "#8a6627"], [0.35, "#f0d18a"], [1, "#9a742e"]], false)}
      ${lin("plg-copper", [[0, "#f5bf9c"], [0.5, "#c9804f"], [1, "#8d4b2b"]])}
      ${lin("plg-copper-h", [[0, "#8d4b2b"], [0.35, "#f1b58f"], [1, "#9e5a36"]], false)}
      ${lin("plg-steel", [[0, "#f2f4f6"], [0.5, "#bcc5cc"], [1, "#8b969e"]])}
      ${lin("plg-steel-h", [[0, "#8b969e"], [0.35, "#f2f4f6"], [1, "#98a3ab"]], false)}
      ${lin("plg-dark", [[0, "#5b646c"], [1, "#262c31"]])}
      ${lin("plg-dark-h", [[0, "#262c31"], [0.35, "#6e7881"], [1, "#2c3238"]], false)}
      ${lin("plg-grey-h", [[0, "#8b949c"], [0.35, "#e0e5e9"], [1, "#8e979f"]], false)}
      ${lin("plg-grey", [[0, "#e4e8eb"], [0.55, "#b4bdc4"], [1, "#89939b"]])}
      ${lin("plg-casing", [[0, "#fcfdfd"], [0.6, "#dde3e7"], [1, "#b8c1c7"]])}
      ${lin("plg-galv", [[0, "#e6eaed"], [1, "#b3bcc3"]])}
      ${lin("plg-coilface", [[0, "#e3e8eb"], [1, "#c7ced3"]])}
      ${lin("plg-black", [[0, "#4b5259"], [1, "#1d2226"]])}
      <radialGradient id="plg-glass" cx="0.38" cy="0.35" r="0.75">
        <stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#d6ecf5"/><stop offset="1" stop-color="#8fb4c4"/>
      </radialGradient>
      <radialGradient id="plg-dome" cx="0.4" cy="0.3" r="0.8">
        <stop offset="0" stop-color="#ffffff"/><stop offset="0.55" stop-color="#c3cbd1"/><stop offset="1" stop-color="#7f8a93"/>
      </radialGradient>
      <pattern id="plp-fins" width="4" height="8" patternUnits="userSpaceOnUse">
        <rect width="4" height="8" fill="#dfe4e8"/><line x1="0.5" y1="0" x2="0.5" y2="8" stroke="#a9b2b9" stroke-width="1"/>
      </pattern>
      <pattern id="plp-wall" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="10" height="10" fill="#e9edf0"/><line x1="0" y1="0" x2="0" y2="10" stroke="#b9c2c9" stroke-width="3"/>
      </pattern>
      <pattern id="plp-frost" width="7" height="7" patternUnits="userSpaceOnUse">
        <rect width="7" height="7" fill="#f4fbff" opacity="0.55"/>
        <circle cx="1.5" cy="1.5" r="1.1" fill="#ffffff"/><circle cx="5" cy="4.5" r="0.9" fill="#ffffff"/>
        <path d="M4 1h2M5 0v2" stroke="#ffffff" stroke-width="0.6"/>
      </pattern>
      <pattern id="plp-dirt" width="9" height="9" patternUnits="userSpaceOnUse">
        <rect width="9" height="9" fill="#8b6a45" opacity="0.38"/>
        <circle cx="2" cy="3" r="1.4" fill="#5e4428" opacity="0.7"/><circle cx="6.5" cy="7" r="1.1" fill="#6d5132" opacity="0.6"/>
      </pattern>
      <clipPath id="plc-sg"><circle cx="0" cy="0" r="9.5"/></clipPath>
      <clipPath id="plc-oil"><circle cx="0" cy="0" r="7.5"/></clipPath>
      <clipPath id="plc-receiver"><rect x="830" y="290" width="230" height="58" rx="29"/></clipPath>
      <clipPath id="plc-acc"><rect x="534" y="530" width="48" height="118" rx="14"/></clipPath>
    </defs>`;
  }

  /* ---- Pipework --------------------------------------------------------------
     A tube is four strokes along the same path: a dark edge, the body, a
     highlight nudged up and left (light from the top left, whichever way the
     pipe runs), and the moving beads of refrigerant. */
  function tube(pts, state, extra) {
    const d = P.toPath(pts);
    if (!d) return "";
    return `<g class="pl-tube st-${state}${extra ? " " + extra : ""}">` +
      `<path class="pl-t-edge" d="${d}"/><path class="pl-t-body" d="${d}"/>` +
      `<path class="pl-t-hi" d="${d}"/><path class="pl-t-flow" d="${d}"/></g>`;
  }
  const thin = (pts, cls) => `<path class="pl-thin ${cls}" d="${P.toPath(pts)}"/>`;
  const frostAlong = (pts) => pts.length ? `<path class="pl-frost-line" d="${P.toPath(pts)}"/>` : "";

  /* ---- A fan: shroud, blades that turn, hub, and the wire guard in front ---- */
  function fan(cx, cy, r, turning, blades) {
    const n = blades || 4;
    const blade = `M0 0 C${f1(r * 0.3)} ${f1(-r * 0.12)} ${f1(r * 0.36)} ${f1(-r * 0.62)} ${f1(r * 0.1)} ${f1(-r * 0.9)} ` +
      `C${f1(-r * 0.14)} ${f1(-r * 0.78)} ${f1(-r * 0.2)} ${f1(-r * 0.36)} 0 0Z`;
    let bl = "";
    for (let i = 0; i < n; i++) bl += `<path d="${blade}" transform="rotate(${(360 / n) * i})" fill="#46505a" stroke="${INK}" stroke-width="0.8"/>`;
    let guard = "";
    [0.34, 0.62, 0.9].forEach((k) => { guard += `<circle r="${f1(r * k)}" fill="none" stroke="#7d8790" stroke-width="1.2"/>`; });
    for (let i = 0; i < 8; i++) {
      const a = (i * 45 + 22.5) * Math.PI / 180;
      guard += `<line x1="${f1(Math.cos(a) * r * 0.18)}" y1="${f1(Math.sin(a) * r * 0.18)}" x2="${f1(Math.cos(a) * r * 0.97)}" y2="${f1(Math.sin(a) * r * 0.97)}" stroke="#7d8790" stroke-width="1"/>`;
    }
    return `<g class="pl-fan${turning ? " is-turning" : ""}" transform="translate(${f1(cx)} ${f1(cy)})">` +
      `<circle r="${f1(r)}" fill="#2d343a" stroke="${INK}" stroke-width="1.5"/>` +
      `<g class="pl-spin"><circle r="${f1(r * 0.95)}" fill="none"/>${bl}</g>` +
      `<circle r="${f1(r * 0.15)}" fill="url(#plg-steel)" stroke="${INK}" stroke-width="1"/>` +
      `<g opacity="0.85">${guard}</g></g>`;
  }

  function airArrows(pts, dir, cls) {
    return pts.map(([x, y]) => {
      const [dx, dy] = dir;
      const len = 16;
      const x2 = x + dx * len, y2 = y + dy * len;
      const hx = -dy * 4, hy = dx * 4;
      return `<g class="pl-air ${cls || ""}"><line x1="${x}" y1="${y}" x2="${f1(x2)}" y2="${f1(y2)}"/>` +
        `<path d="M${f1(x2 + dx * 5)} ${f1(y2 + dy * 5)} L${f1(x2 + hx)} ${f1(y2 + hy)} L${f1(x2 - hx)} ${f1(y2 - hy)}Z"/></g>`;
    }).join("");
  }

  const hexNut = (x, y, w, h, vertical) => vertical
    ? `<rect x="${f1(x - h / 2)}" y="${f1(y - w / 2)}" width="${f1(h)}" height="${f1(w)}" rx="1.5" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1"/>`
    : `<rect x="${f1(x - w / 2)}" y="${f1(y - h / 2)}" width="${f1(w)}" height="${f1(h)}" rx="1.5" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1"/>`;

  /* ---- The parts ---------------------------------------------------------- */

  // Semi-hermetic reciprocating compressor, side elevation.
  function compressor(at, sym) {
    const fins = [];
    for (let x = 34; x <= 108; x += 9) fins.push(`<line x1="${x}" y1="44" x2="${x}" y2="124"/>`);
    const headFins = [];
    for (let y = 30; y <= 62; y += 6) headFins.push(`<line x1="152" y1="${y}" x2="242" y2="${y}"/>`);
    const oil = sym.accumulatorLevel > 0.5 ? 0.85 : 0.5;  // liquid washing in foams the oil level up
    return `<g class="pl-part pl-comp${sym.running ? " is-running" : ""}" data-part="compressor" transform="translate(${at.x} ${at.y})">
      <g class="pl-shake">
      <rect x="8" y="138" width="244" height="9" rx="2" fill="url(#plg-dark)" stroke="${INK}" stroke-width="1.2"/>
      <rect x="22" y="146" width="16" height="6" rx="2" fill="#2a2f34"/><rect x="220" y="146" width="16" height="6" rx="2" fill="#2a2f34"/>
      <rect x="112" y="68" width="136" height="70" rx="14" fill="url(#plg-paint)" stroke="${INK}" stroke-width="1.6"/>
      <rect x="16" y="36" width="108" height="98" rx="20" fill="url(#plg-paint)" stroke="${INK}" stroke-width="1.6"/>
      <g stroke="#34473e" stroke-width="2.2" opacity="0.55">${fins.join("")}</g>
      <rect x="4" y="48" width="16" height="74" rx="6" fill="url(#plg-paint-h)" stroke="${INK}" stroke-width="1.4"/>
      <rect x="148" y="20" width="98" height="50" rx="8" fill="url(#plg-head)" stroke="${INK}" stroke-width="1.6"/>
      <g stroke="#3b5046" stroke-width="2" opacity="0.6">${headFins.join("")}</g>
      <rect x="144" y="66" width="106" height="6" rx="2" fill="#40574c" stroke="${INK}" stroke-width="1"/>
      <rect x="64" y="16" width="44" height="24" rx="3" fill="url(#plg-grey)" stroke="${INK}" stroke-width="1.3"/>
      <rect x="104" y="22" width="12" height="8" rx="2" fill="#9aa4ac" stroke="${INK}" stroke-width="1"/>
      <rect x="128" y="86" width="40" height="18" rx="2" fill="#dfe4e8" stroke="${INK}" stroke-width="1"/>
      <g stroke="#8a949c" stroke-width="1"><line x1="133" y1="92" x2="162" y2="92"/><line x1="133" y1="97" x2="155" y2="97"/></g>
      <g class="pl-oilglass" transform="translate(206 108)">
        <circle r="11" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1.2"/>
        <circle r="7.5" fill="url(#plg-glass)" stroke="${INK}" stroke-width="0.8"/>
        <rect x="-7.5" y="${f1(7.5 - 15 * oil)}" width="15" height="${f1(15 * oil)}" fill="#d9a23b" opacity="0.8" clip-path="url(#plc-oil)"/>
        <path d="M-5 -3 a6 6 0 0 1 5 -4" fill="none" stroke="#fff" stroke-width="1.3" opacity="0.8"/>
      </g>
      <g><rect x="31" y="6" width="18" height="30" rx="3" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1.2"/>
        <rect x="46" y="12" width="14" height="10" rx="2" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1"/>
        <rect x="26" y="30" width="28" height="7" rx="2" fill="#7f8a92" stroke="${INK}" stroke-width="1"/></g>
      <g><rect x="191" y="2" width="18" height="18" rx="3" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1.2"/>
        <rect x="206" y="6" width="14" height="10" rx="2" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1"/>
        <rect x="186" y="16" width="28" height="6" rx="2" fill="#7f8a92" stroke="${INK}" stroke-width="1"/></g>
      ${sym.compressorFrost ? `<rect x="4" y="36" width="96" height="98" rx="18" fill="url(#plp-frost)" class="pl-frost-fill"/>` : ""}
      </g>
    </g>`;
  }

  // Oil separator: a vertical shell with the float and oil return at the foot.
  function oilSeparator(at) {
    return `<g class="pl-part" data-part="oilSeparator" transform="translate(${at.x} ${at.y})">
      <rect x="10" y="-2" width="8" height="16" fill="url(#plg-copper-h)" stroke="${INK}" stroke-width="1"/>
      <rect x="32" y="-2" width="8" height="16" fill="url(#plg-copper-h)" stroke="${INK}" stroke-width="1"/>
      <rect x="2" y="10" width="46" height="152" rx="16" fill="url(#plg-dark-h)" stroke="${INK}" stroke-width="1.6"/>
      <rect x="0" y="54" width="50" height="7" rx="2" fill="#7c868e" stroke="${INK}" stroke-width="1"/>
      <rect x="0" y="118" width="50" height="7" rx="2" fill="#7c868e" stroke="${INK}" stroke-width="1"/>
      <rect x="11" y="74" width="28" height="30" rx="2" fill="#e9edf0" stroke="${INK}" stroke-width="0.8"/>
      <g stroke="#8b959d" stroke-width="1.2"><line x1="15" y1="82" x2="35" y2="82"/><line x1="15" y1="88" x2="31" y2="88"/><line x1="15" y1="94" x2="33" y2="94"/></g>
      <rect x="18" y="160" width="14" height="12" rx="2" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1"/>
    </g>`;
  }

  // Air-cooled condenser: galvanised casing, fin pack, fan behind the coil.
  function condenser(box, sym, coilSvg) {
    const { x, y, w, h } = box;
    const cx = x + w / 2 + 2, cy = y + h / 2 + 2;
    const turning = sym.condFanTurning;
    const out = [[x + w * 0.28, y - 6], [x + w * 0.5, y - 6], [x + w * 0.72, y - 6]];
    return `<g class="pl-part" data-part="condenser">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="url(#plg-galv)" stroke="${INK}" stroke-width="1.6"/>
      <rect x="${x + 16}" y="${y + 10}" width="${w - 32}" height="${h - 20}" fill="url(#plp-fins)" stroke="#8b959d" stroke-width="1"/>
      ${fan(cx, cy, 86, turning, 4)}
      ${sym.condDirty ? `<rect x="${x + 16}" y="${y + 10}" width="${w - 32}" height="${h - 20}" fill="url(#plp-dirt)"/>` : ""}
      <rect x="${x + 24}" y="${y + 10}" width="6" height="${h - 20}" fill="url(#plg-galv)" stroke="${INK}" stroke-width="0.8"/>
      <rect x="${x + w - 30}" y="${y + 10}" width="6" height="${h - 20}" fill="url(#plg-galv)" stroke="${INK}" stroke-width="0.8"/>
      ${coilSvg}
      ${turning && !sym.condDirty ? airArrows(out, [0, -1], "warm") : ""}
    </g>`;
  }

  // Liquid receiver: horizontal vessel on saddles, shown cut away so the
  // level inside can be read.
  function receiver(box, sym) {
    const { x, y, w, h } = box;
    const lvl = Math.max(0.04, Math.min(0.98, sym.receiverLevel));
    const ly = y + h - h * lvl;
    return `<g class="pl-part" data-part="receiver">
      <path d="M${x + 36} ${y + h} v12 h18 v-12 M${x + w - 56} ${y + h} v12 h18 v-12" fill="#6f7a82" stroke="${INK}" stroke-width="1.2"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="url(#plg-grey)" stroke="${INK}" stroke-width="1.6"/>
      <g clip-path="url(#plc-receiver)"><rect class="pl-liquid" x="${x}" y="${f1(ly)}" width="${w}" height="${f1(y + h - ly)}"/>
        <line x1="${x}" y1="${f1(ly)}" x2="${x + w}" y2="${f1(ly)}" class="pl-liquid-top"/></g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M${x + 30} ${y + 9} H${x + w - 30}" stroke="#fff" stroke-width="3" opacity="0.5" stroke-linecap="round"/>
      <g transform="translate(${x + 18} ${y - 6})"><rect x="-8" y="0" width="16" height="10" rx="2" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1"/></g>
      <g transform="translate(${x + w - 26} ${y - 10})"><rect x="-5" y="4" width="10" height="8" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1"/>
        <rect x="-7" y="-2" width="14" height="7" rx="2" fill="#c0392b" stroke="${INK}" stroke-width="1"/></g>
      <g transform="translate(${x - 2} ${y + 40})"><rect x="-14" y="-9" width="16" height="18" rx="3" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1.2"/>
        <rect x="-11" y="-20" width="10" height="12" rx="2" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1"/></g>
    </g>`;
  }

  // Filter-drier, standing on the liquid riser, flow upward.
  function filterDrier(at, sym) {
    return `<g class="pl-part" data-part="filterDrier" transform="translate(${at.x} ${at.y})">
      ${hexNut(0, -46, 16, 10, false)}${hexNut(0, 46, 16, 10, false)}
      <path d="M-5 -41 L-12 -30 V30 L-5 41 H5 L12 30 V-30 L5 -41Z" fill="url(#plg-copper-h)" stroke="${INK}" stroke-width="1.4"/>
      <rect x="-9" y="-12" width="18" height="30" rx="2" fill="#f3efe3" stroke="${INK}" stroke-width="0.8"/>
      <path d="M0 12 V-6 M-4 -2 L0 -7 L4 -2" stroke="#b33b2e" stroke-width="1.6" fill="none"/>
      ${sym.drierFrost ? `<path d="M-6 -44 L-13 -30 V2 H13 V-30 L6 -44Z" fill="url(#plp-frost)" class="pl-frost-fill"/>` : ""}
    </g>`;
  }

  // Liquid-line solenoid valve: brass body, coil and plug on top.
  function solenoid(at, sym) {
    const on = sym.solenoidEnergised;
    return `<g class="pl-part" data-part="solenoid" transform="translate(${at.x} ${at.y})">
      ${hexNut(-26, 0, 10, 16, true)}${hexNut(26, 0, 10, 16, true)}
      <rect x="-21" y="-9" width="42" height="20" rx="5" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1.4"/>
      <rect x="-7" y="-16" width="14" height="9" fill="url(#plg-steel-h)" stroke="${INK}" stroke-width="1"/>
      <rect x="-16" y="-46" width="32" height="32" rx="4" fill="url(#plg-black)" stroke="${INK}" stroke-width="1.4"/>
      <g stroke="#5c646b" stroke-width="1"><line x1="-12" y1="-38" x2="12" y2="-38"/><line x1="-12" y1="-30" x2="12" y2="-30"/><line x1="-12" y1="-22" x2="12" y2="-22"/></g>
      <rect x="15" y="-42" width="15" height="22" rx="2" fill="#5a636b" stroke="${INK}" stroke-width="1.2"/>
      <circle cx="22.5" cy="-35" r="3" class="pl-led${on ? " is-on" : ""}"/>
      <path d="M30 -28 C40 -28 42 -40 52 -46" fill="none" stroke="#222" stroke-width="3"/>
      <path d="M-10 4 H8 M4 0 L9 4 L4 8" stroke="#6b4e1c" stroke-width="1.4" fill="none"/>
    </g>`;
  }

  // Sight glass with moisture indicator.
  function sightGlass(at, sym) {
    let inside = `<rect x="-10" y="-10" width="20" height="20" class="pl-sg-liquid"/>`;
    if (sym.sightGlass === "bubbles" && sym.running) {
      const bubbles = [[-6, 3, 2.2, 0], [-1, -4, 1.6, 0.3], [4, 2, 2.6, 0.6], [-3, 6, 1.4, 0.9], [2, -6, 1.9, 1.2]];
      inside += `<g class="pl-bubbles">${bubbles.map(([x, y, r, d]) => `<circle cx="${x}" cy="${y}" r="${r}" style="animation-delay:-${d}s"/>`).join("")}</g>`;
    }
    return `<g class="pl-part" data-part="sightGlass" transform="translate(${at.x} ${at.y})">
      ${hexNut(-24, 0, 10, 16, true)}${hexNut(24, 0, 10, 16, true)}
      <path d="M-19 -9 L-11 -16 H11 L19 -9 V9 L11 16 H-11 L-19 9Z" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1.4"/>
      <circle r="12.5" fill="url(#plg-steel)" stroke="${INK}" stroke-width="1.2"/>
      <g clip-path="url(#plc-sg)">${inside}</g>
      <circle r="9.5" fill="url(#plg-glass)" opacity="0.35"/>
      <circle r="3.4" class="pl-moisture"/>
      <path d="M-6 -4 a7 7 0 0 1 5 -4.5" fill="none" stroke="#fff" stroke-width="1.4" opacity="0.9"/>
    </g>`;
  }

  // TXV: brass body, stainless power head, adjusting stem, capillary coil.
  function txv(at) {
    let helix = "";
    for (let i = 0; i < 4; i++) helix += `<ellipse cx="0" cy="${-40 - i * 4}" rx="7" ry="2.2" fill="none" stroke="#b86f43" stroke-width="1.6"/>`;
    return `<g class="pl-part" data-part="txv" transform="translate(${at.x} ${at.y})">
      <g>${helix}</g>
      <rect x="-5" y="-22" width="10" height="11" fill="url(#plg-steel-h)" stroke="${INK}" stroke-width="1"/>
      <path d="M-21 -22 Q-21 -34 0 -35 Q21 -34 21 -22Z" fill="url(#plg-dome)" stroke="${INK}" stroke-width="1.4"/>
      <rect x="-22" y="-24" width="44" height="5" rx="2" fill="url(#plg-steel)" stroke="${INK}" stroke-width="1"/>
      <path d="M-14 -11 H14 V10 Q14 15 9 15 H-9 Q-14 15 -14 10Z" fill="url(#plg-brass)" stroke="${INK}" stroke-width="1.4"/>
      ${hexNut(20, 0, 9, 14, true)}
      <rect x="-5" y="14" width="10" height="7" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1"/>
      ${hexNut(0, 22, 14, 7, false)}
      <rect x="-24" y="-4" width="11" height="10" rx="2" fill="url(#plg-brass-h)" stroke="${INK}" stroke-width="1"/>
      <path d="M-24 -1 h-4 v4 h4" fill="#8a6627" stroke="${INK}" stroke-width="0.8"/>
    </g>`;
  }

  // TXV sensing bulb, strapped to the suction line.
  function bulb(at) {
    return `<g class="pl-part" data-part="bulb" transform="translate(${at.x} ${at.y})">
      <rect x="-20" y="-22" width="13" height="46" rx="6.5" fill="url(#plg-copper-h)" stroke="${INK}" stroke-width="1.3"/>
      <rect x="-23" y="-12" width="32" height="5" rx="1.5" fill="url(#plg-steel)" stroke="${INK}" stroke-width="1"/>
      <rect x="-23" y="10" width="32" height="5" rx="1.5" fill="url(#plg-steel)" stroke="${INK}" stroke-width="1"/>
      <circle cx="6" cy="-9.5" r="1.8" fill="#6d7780"/><circle cx="6" cy="12.5" r="1.8" fill="#6d7780"/>
    </g>`;
  }

  // Unit cooler: casing, fin pack, two fans, the coil, the drip tray.
  function evaporator(box, sym, coilSvg) {
    const { x, y, w, h } = box;
    const faceY = y + 22, faceH = h - 46;
    const fanY = faceY + faceH / 2 + 4;
    const iced = sym.evapIced;
    return `<g class="pl-part" data-part="evaporator">
      <path d="M${x + 30} ${y - 18} V${y} M${x + w - 30} ${y - 18} V${y}" stroke="#7f8a92" stroke-width="3"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="url(#plg-casing)" stroke="${INK}" stroke-width="1.6"/>
      <rect x="${x + 12}" y="${faceY}" width="${w - 24}" height="${faceH}" fill="url(#plp-fins)" stroke="#8b959d" stroke-width="1"/>
      ${fan(x + w * 0.3, fanY, 74, true, 5)}${fan(x + w * 0.72, fanY, 74, true, 5)}
      <rect x="${x + 20}" y="${faceY}" width="6" height="${faceH}" fill="url(#plg-galv)" stroke="${INK}" stroke-width="0.8"/>
      <rect x="${x + w - 26}" y="${faceY}" width="6" height="${faceH}" fill="url(#plg-galv)" stroke="${INK}" stroke-width="0.8"/>
      ${coilSvg}
      ${iced ? `<rect x="${x + 12}" y="${faceY}" width="${w - 24}" height="${faceH}" fill="url(#plp-frost)" class="pl-ice"/>` : ""}
      <path d="M${x - 4} ${y + h - 18} H${x + w + 4} L${x + w - 6} ${y + h} H${x + 6}Z" fill="url(#plg-grey)" stroke="${INK}" stroke-width="1.3"/>
      <rect x="${x + 26}" y="${y + h}" width="8" height="14" fill="#6f7a82" stroke="${INK}" stroke-width="1"/>
      ${!iced ? airArrows([[x + w * 0.35, y + h + 10], [x + w * 0.5, y + h + 10], [x + w * 0.65, y + h + 10]], [0, 1], "cold") : ""}
    </g>`;
  }

  // Suction accumulator, shown cut away to read the liquid in it.
  function accumulator(at, sym) {
    const lvl = Math.max(0, Math.min(0.9, sym.accumulatorLevel));
    const top = 530, bottom = 648;
    const ly = bottom - (bottom - top) * lvl;
    return `<g class="pl-part" data-part="accumulator">
      <rect x="${at.x + 10}" y="${at.y - 2}" width="8" height="14" fill="url(#plg-copper-h)" stroke="${INK}" stroke-width="1"/>
      <rect x="${at.x + 34}" y="${at.y - 2}" width="8" height="14" fill="url(#plg-copper-h)" stroke="${INK}" stroke-width="1"/>
      <rect x="${at.x + 2}" y="${top}" width="48" height="${bottom - top}" rx="14" fill="url(#plg-dark-h)" stroke="${INK}" stroke-width="1.6"/>
      ${lvl > 0 ? `<g clip-path="url(#plc-acc)"><rect class="pl-liquid-low" x="${at.x}" y="${f1(ly)}" width="54" height="${f1(bottom - ly)}"/></g>` : ""}
      <rect x="${at.x + 2}" y="${top}" width="48" height="${bottom - top}" rx="14" fill="none" stroke="${INK}" stroke-width="1.6"/>
      <path d="M${at.x + 14} ${top + 4} V${bottom - 18} Q${at.x + 26} ${bottom - 6} ${at.x + 38} ${bottom - 18} V${top + 4}" fill="none" stroke="#9aa4ac" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.8"/>
      <rect x="${at.x + 8}" y="${top + 34}" width="36" height="22" rx="2" fill="#e9edf0" stroke="${INK}" stroke-width="0.8"/>
      <g stroke="#8b959d" stroke-width="1.1"><line x1="${at.x + 12}" y1="${top + 41}" x2="${at.x + 38}" y2="${top + 41}"/><line x1="${at.x + 12}" y1="${top + 48}" x2="${at.x + 33}" y2="${top + 48}"/></g>
      ${lvl > 0.3 ? `<rect x="${at.x + 2}" y="${top}" width="48" height="${bottom - top}" rx="14" fill="url(#plp-frost)" class="pl-frost-fill"/>` : ""}
    </g>`;
  }

  // A panel gauge: coloured bezel, white dial, needle, saturation ring.
  function gauge(cx, cy, r, side, frac, flutter) {
    const ticks = [];
    for (let i = 0; i <= 20; i++) {
      const a = (135 + 270 * i / 20) * Math.PI / 180;
      const r1 = r * 0.8, r2 = i % 5 === 0 ? r * 0.64 : r * 0.72;
      ticks.push(`<line x1="${f1(cx + Math.cos(a) * r1)}" y1="${f1(cy + Math.sin(a) * r1)}" x2="${f1(cx + Math.cos(a) * r2)}" y2="${f1(cy + Math.sin(a) * r2)}"/>`);
    }
    const angle = -135 + 270 * Math.max(0, Math.min(1, frac));
    return `<g class="pl-gauge pl-gauge-${side}">
      <circle cx="${cx}" cy="${cy}" r="${r}" class="pl-bezel"/>
      <circle cx="${cx}" cy="${cy}" r="${f1(r * 0.86)}" fill="#fbfcfc" stroke="${INK}" stroke-width="1"/>
      <path d="${arcPath(cx, cy, r * 0.5)}" class="pl-satring"/>
      <g stroke="${INK}" stroke-width="1.2">${ticks.join("")}</g>
      <text x="${cx}" y="${f1(cy + r * 0.42)}" class="pl-gauge-word">${side === "lo" ? "SUCTION" : "DISCHARGE"}</text>
      <g transform="translate(${cx} ${cy})"><g class="pl-needle" transform="rotate(${f1(angle)})"><g class="pl-needle-in${flutter ? " is-flutter" : ""}">
        <path d="M-2 6 L0 ${f1(-r * 0.78)} L2 6Z" fill="#c0392b" stroke="${INK}" stroke-width="0.6"/></g></g>
        <circle r="4" fill="${INK}"/></g>
    </g>`;
  }
  function arcPath(cx, cy, r) {
    const p = (fr) => { const a = (135 + 270 * fr) * Math.PI / 180; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
    const [sx, sy] = p(0), [ex, ey] = p(1);
    return `M${f1(sx)} ${f1(sy)} A${f1(r)} ${f1(r)} 0 1 1 ${f1(ex)} ${f1(ey)}`;
  }

  function gauges(at, gl) {
    return `<g class="pl-part" data-part="gauges">
      <rect x="${at.x + 6}" y="${at.y - 16}" width="200" height="100" rx="8" fill="url(#plg-grey)" stroke="${INK}" stroke-width="1.4"/>
      <circle cx="${at.x + 16}" cy="${at.y - 6}" r="2.2" fill="#6d7780"/><circle cx="${at.x + 196}" cy="${at.y - 6}" r="2.2" fill="#6d7780"/>
      <circle cx="${at.x + 16}" cy="${at.y + 74}" r="2.2" fill="#6d7780"/><circle cx="${at.x + 196}" cy="${at.y + 74}" r="2.2" fill="#6d7780"/>
      ${gauge(at.x + 60, at.y + 34, 40, "lo", gl.lo, false)}
      ${gauge(at.x + 160, at.y + 34, 40, "hi", gl.hi, gl.flutter)}
    </g>`;
  }

  // Dual pressure control: two range scales and a manual reset on the HP side.
  function pressureControl(at, sym) {
    return `<g class="pl-part" data-part="pressureControl" transform="translate(${at.x} ${at.y})">
      <rect x="0" y="0" width="76" height="70" rx="5" fill="url(#plg-grey)" stroke="${INK}" stroke-width="1.4"/>
      <rect x="7" y="8" width="26" height="40" rx="2" fill="#f7f8f9" stroke="${INK}" stroke-width="0.8"/>
      <rect x="43" y="8" width="26" height="40" rx="2" fill="#f7f8f9" stroke="${INK}" stroke-width="0.8"/>
      <g stroke="${INK}" stroke-width="0.8">${[14, 20, 26, 32, 38, 44].map((y) => `<line x1="11" y1="${y}" x2="18" y2="${y}"/><line x1="47" y1="${y}" x2="54" y2="${y}"/>`).join("")}</g>
      <path d="M26 30 L14 30 M62 20 L50 20" stroke="#c0392b" stroke-width="2"/>
      <text x="20" y="60" class="pl-mini">LP</text><text x="56" y="60" class="pl-mini">HP</text>
      <circle cx="56" cy="-4" r="6" class="pl-reset${sym.hpTrip ? " is-tripped" : ""}"/>
      ${sym.hpTrip ? `<text x="72" y="-16" class="pl-trip" text-anchor="start">HP TRIP</text>` : ""}
      ${sym.lpTrip ? `<text x="4" y="-8" class="pl-trip" text-anchor="end">LP OPEN</text>` : ""}
    </g>`;
  }

  // Room temperature controller: a panel-mount digital thermostat.
  function controller(at, sym, roomValue) {
    const shown = roomValue == null ? "--" : roomValue;
    return `<g class="pl-part" data-part="controller" transform="translate(${at.x} ${at.y})">
      <rect x="0" y="0" width="84" height="54" rx="6" fill="url(#plg-casing)" stroke="${INK}" stroke-width="1.4"/>
      <rect x="8" y="8" width="68" height="24" rx="3" fill="#161a1d" stroke="${INK}" stroke-width="1"/>
      <text x="70" y="26" class="pl-digits" text-anchor="end">${esc(shown)}</text>
      <circle cx="16" cy="43" r="3.5" fill="#9aa4ac" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="30" cy="43" r="3.5" fill="#9aa4ac" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="44" cy="43" r="3.5" fill="#9aa4ac" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="70" cy="43" r="3" class="pl-led${sym.solenoidEnergised && sym.running ? " is-on" : ""}"/>
      <path d="M42 54 V70 Q42 78 50 78 H70" fill="none" stroke="#5a636b" stroke-width="2"/>
      <rect x="70" y="74" width="16" height="8" rx="3" fill="#7d878f" stroke="${INK}" stroke-width="0.8"/>
    </g>`;
  }

  // Stock on the cool-room floor: what the plant is there to keep cold.
  function stock() {
    const box = (x, y, w, h) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#cfa66a" stroke="#6e5230" stroke-width="1.2"/>` +
      `<line x1="${x}" y1="${y + 8}" x2="${x + w}" y2="${y + 8}" stroke="#a9834a" stroke-width="1.5"/>` +
      `<rect x="${x + w / 2 - 9}" y="${y + h / 2 - 3}" width="18" height="10" rx="1" fill="#efe2c6" stroke="#8c6a3e" stroke-width="0.8"/></g>`;
    return `<g class="pl-stock" aria-hidden="true">
      <rect x="44" y="628" width="190" height="10" rx="1" fill="#9c7a4c" stroke="#5c4424" stroke-width="1"/>
      <rect x="50" y="638" width="14" height="6" fill="#7a5c34"/><rect x="132" y="638" width="14" height="6" fill="#7a5c34"/><rect x="214" y="638" width="14" height="6" fill="#7a5c34"/>
      ${box(50, 584, 58, 44)}${box(112, 584, 58, 44)}${box(174, 584, 56, 44)}
      ${box(80, 540, 58, 44)}${box(142, 540, 58, 44)}${box(110, 496, 58, 44)}
    </g>`;
  }

  /* ---- Labels and markers ------------------------------------------------- */
  const LABELS = {
    compressor:      { x: 766, y: 694, a: "middle", t: "Compressor" },
    oilSeparator:    { x: 1018, y: 548, a: "start", t: "Oil separator" },
    condenser:       { x: 1030, y: 256, a: "middle", t: "Condenser" },
    receiver:        { x: 945, y: 380, a: "middle", t: "Receiver" },
    filterDrier:     { x: 774, y: 154, a: "end", t: "Filter-drier" },
    solenoid:        { x: 690, y: 96, a: "middle", t: "Solenoid valve" },
    sightGlass:      { x: 590, y: 96, a: "middle", t: "Sight glass" },
    txv:             { x: 382, y: 142, a: "end", t: "TXV" },
    bulb:            { x: 416, y: 512, a: "end", t: "Sensing bulb" },
    evaporator:      { x: 225, y: 140, a: "middle", t: "Evaporator (unit cooler)" },
    accumulator:     { x: 558, y: 672, a: "middle", t: "Accumulator" },
    controller:      { x: 368, y: 548, a: "middle", t: "Room controller" },
    pressureControl: { x: 650, y: 382, a: "middle", t: "Pressure controls" },
    gauges:          { x: 650, y: 154, a: "middle", t: "Gauges" },
  };

  function labels(flags) {
    return Object.keys(LABELS).map((id) => {
      const l = LABELS[id];
      const flagged = flags.includes(id);
      return `<g class="pl-label-g${flagged ? " is-flagged" : ""}" data-part="${id}">` +
        `<text x="${l.x}" y="${l.y}" text-anchor="${l.a}" class="pl-label">${esc(l.t)}</text>` +
        (flagged ? flagBadge(l) : "") + `</g>`;
    }).join("");
  }
  function flagBadge(l) {
    // A warning tag just above the end of the label, pulsing: above rather
    // than beside, so it can never land on a neighbouring label.
    const w = l.t.length * 7;
    const x = l.a === "middle" ? l.x + w / 2 : l.a === "end" ? l.x : l.x + w;
    return `<g class="pl-flag" transform="translate(${f1(x + 4)} ${l.y - 17})"><circle r="8"/><text y="4" text-anchor="middle">!</text></g>`;
  }

  function points(pos, selected) {
    return P.POINT_ORDER.map((k) => {
      const [x, y] = pos[k];
      return `<g class="pl-pt${selected === k ? " is-selected" : ""}" data-point="${k}" transform="translate(${f1(x)} ${f1(y)})" tabindex="0" role="button" aria-label="State point ${k.replace("'", " prime")}">` +
        `<circle r="11.5"/><text y="4">${k.replace("'", "′")}</text></g>`;
    }).join("");
  }

  /* ---- The whole drawing ------------------------------------------------------ */
  function render(state) {
    const { op, sym, viz, gaugeLevels, selectedPoint, air } = state;
    const Z = P.ZONES, A = P.PARTS_AT, R = P.RUNS, T = P.THIN;
    const running = sym.running;

    const evapDone = Math.max(0.08, Math.min(0.96, viz.evapFront));
    const condDone = Math.max(0.25, Math.min(0.97, viz.condFront));
    const condStart = Math.min(0.14, condDone - 0.08);

    const condCoil =
      tube(P.slice(P.COILS.condenser, 0, condStart), "hot", "pl-coil") +
      tube(P.slice(P.COILS.condenser, condStart, condDone), "cond", "pl-coil") +
      tube(P.slice(P.COILS.condenser, condDone, 1), "liq", "pl-coil");
    const evapCoil =
      tube(P.slice(P.COILS.evaporator, 0, evapDone), "mix", "pl-coil") +
      tube(P.slice(P.COILS.evaporator, evapDone, 1), "vap", "pl-coil") +
      (sym.evapFrostLight && !sym.evapIced ? `<path class="pl-frost-light" d="${P.toPath(P.slice(P.COILS.evaporator, 0, evapDone))}"/>` : "");

    // The liquid line runs dead beyond a solenoid that will not open.
    const solAt = 50 / P.totalLength(R.liquidLine.pts);
    const liquid = sym.liquidStopsAtSolenoid
      ? tube(P.slice(R.liquidLine.pts, 0, solAt), "liq") + tube(P.slice(R.liquidLine.pts, solAt, 1), "liq", "is-still")
      : tube(R.liquidLine.pts, "liq");
    const starved = sym.liquidStopsAtSolenoid ? "is-still" : "";

    // Liquid coming back up the suction line (floodback) is wet, and frosts it.
    const sucLen = P.totalLength(R.suction.pts);
    const wet = Math.min(1, (sym.suctionFrost || 0) * 1.5);
    const suction = (wet > 0.05 ? tube(P.slice(R.suction.pts, 0, wet), "mix", starved) : "") +
      tube(P.slice(R.suction.pts, wet > 0.05 ? wet : 0, 1), "vap", `pl-insulated ${starved}`);
    const suctionFrost = wet > 0.05 ? frostAlong(P.slice(R.suction.pts, 0, wet)) +
      (sym.compressorFrost ? frostAlong(R.suctionOut.pts) : "") : "";
    void sucLen;

    const pos = P.pointPositions(viz);

    return defs() +
      `<g class="pl-zones">
        <rect class="pl-zone-room" x="${Z.room.x}" y="${Z.room.y}" width="${Z.room.w}" height="${Z.room.h}" rx="10"/>
        <rect class="pl-zone-out" x="${Z.outside.x}" y="${Z.outside.y}" width="${Z.outside.w}" height="${Z.outside.h}" rx="10"/>
        <rect x="${Z.wall.x}" y="${Z.wall.y}" width="${Z.wall.w}" height="${Z.wall.h}" fill="url(#plp-wall)" stroke="#8b959d" stroke-width="1"/>
        <text x="30" y="${Z.room.y + Z.room.h - 30}" class="pl-zone-label">COOL ROOM</text>
        <text x="30" y="${Z.room.y + Z.room.h - 12}" class="pl-zone-temp">Room air about ${esc(air.room)}</text>
        <text x="${Z.outside.x + Z.outside.w - 14}" y="${Z.outside.y + Z.outside.h - 30}" text-anchor="end" class="pl-zone-label">CONDENSING UNIT · OUTSIDE</text>
        <text x="${Z.outside.x + Z.outside.w - 14}" y="${Z.outside.y + Z.outside.h - 12}" text-anchor="end" class="pl-zone-temp pl-zone-temp-out">Ambient about ${esc(air.ambient)}</text>
        ${stock()}
      </g>` +
      `<g class="pl-thinlines">
        ${thin(T.oilReturn, "pl-oil")}${thin(T.capillary, "pl-cap pl-capillary")}
        <text class="pl-note" transform="translate(21 290) rotate(-90)" text-anchor="middle">TXV capillary to the bulb</text>
        ${thin(T.gaugeLow, "pl-gline")}${thin(T.gaugeHigh, "pl-gline")}
        ${thin(T.controlLow, "pl-cap")}${thin(T.controlHigh, "pl-cap")}
      </g>` +
      `<g class="pl-pipes${running ? "" : " is-stopped"}">
        ${tube(R.discharge.pts, "hot")}${tube(R.dischargeUp.pts, "hot")}
        ${tube(R.condOut.pts, "liq")}${tube(R.liquidRiser.pts, "liq")}${liquid}
        ${tube(R.txvOut.pts, "mix", starved)}${suction}${tube(R.suctionOut.pts, "vap", `pl-insulated ${starved}`)}
        ${suctionFrost}
      </g>` +
      `<g class="pl-parts${running ? "" : " is-stopped"}">
        ${evaporator(A.evaporator, sym, `<g class="pl-coiltube${running ? "" : " is-stopped"} ${starved}">${evapCoil}</g>`)}
        ${condenser(A.condenser, sym, `<g class="pl-coiltube${running ? "" : " is-stopped"}">${condCoil}</g>`)}
        ${receiver(A.receiver, sym)}
        ${oilSeparator(A.oilSeparator)}
        ${compressor(A.compressor, sym)}
        ${accumulator(A.accumulator, sym)}
        ${filterDrier(A.filterDrier, sym)}
        ${solenoid(A.solenoid, sym)}
        ${sightGlass(A.sightGlass, sym)}
        ${txv(A.txv)}
        ${bulb(A.bulb)}
        ${gauges(A.gauges, gaugeLevels)}
        ${pressureControl(A.pressureControl, sym)}
        ${controller(A.controller, sym, air.roomValue)}
      </g>` +
      `<g class="pl-labels">${labels(sym.flags || [])}</g>` +
      `<g class="pl-points">${points(pos, selectedPoint)}</g>`;
  }

  /* Every part is a button: it opens in the inspector, by click or keyboard. */
  function focusable(svg) {
    return svg.replace(/<g class="(pl-part[^"]*)" data-part="(\w+)"/g, (m, cls, id) => {
      const part = P.PARTS[id];
      return `<g class="${cls}" data-part="${id}" tabindex="0" role="button" aria-label="${esc(part ? part.name : id)}"`;
    });
  }

  const api = { render: (state) => focusable(render(state)), LABELS, fan, tube };
  root.RefrigPlantArt = api;
  if (node && module.exports) module.exports = api;
})(globalThis);
