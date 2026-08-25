/* =========================================================================
   Figure library: inline SVG teaching diagrams embedded in lessons via the
   !FIG[id] markdown directive. Each figure carries a role/aria-label and a
   caption. Loaded as a plain script (exposes `RefrigFigures`) and
   require()-able in Node for the test suite.
   ========================================================================= */
(function (root) {
  "use strict";

  // shared palette (hex — SVG attributes, resolved without CSS)
  const HOT = "#ff5a3c", LIQ = "#f5a623", FLASH = "#6fe0c5", VAP = "#4fc3f7";
  const TXT = "#e7eef5", MUT = "#8aa0b3", LINE = "#3a5068", GOOD = "#6fe0a0", BAD = "#e0405a";

  const FIGURES = {

    "heat-flow": {
      caption: "A refrigerator doesn't make cold — it moves heat. The evaporator runs colder than the room so heat flows in; the condenser runs hotter than outside so heat flows out.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Diagram: heat flows from a cold room into the evaporator, is carried by the refrigerant loop, and flows out of the condenser to the warmer outside air">
<rect x="10" y="20" width="170" height="150" rx="10" fill="none" stroke="${VAP}" stroke-dasharray="5 4"/>
<text x="95" y="40" fill="${VAP}" font-size="11" text-anchor="middle">COLD ROOM · 3°C</text>
<rect x="55" y="70" width="80" height="44" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="95" y="96" fill="${TXT}" font-size="10" text-anchor="middle">EVAPORATOR</text>
<text x="95" y="130" fill="${MUT}" font-size="9" text-anchor="middle">colder than the room</text>
<path d="M 30 92 L 50 92" stroke="${VAP}" stroke-width="2" marker-end="url(#fh-a)"/>
<text x="32" y="84" fill="${VAP}" font-size="9">heat in</text>
<rect x="280" y="20" width="170" height="150" rx="10" fill="none" stroke="${HOT}" stroke-dasharray="5 4"/>
<text x="365" y="40" fill="${HOT}" font-size="11" text-anchor="middle">OUTSIDE · 35°C</text>
<rect x="325" y="70" width="80" height="44" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="365" y="96" fill="${TXT}" font-size="10" text-anchor="middle">CONDENSER</text>
<text x="365" y="130" fill="${MUT}" font-size="9" text-anchor="middle">hotter than outside</text>
<path d="M 410 92 L 430 92" stroke="${HOT}" stroke-width="2" marker-end="url(#fh-b)"/>
<text x="412" y="84" fill="${HOT}" font-size="9">heat out</text>
<path d="M 140 78 C 200 60, 260 60, 320 78" stroke="${HOT}" stroke-width="2.5" fill="none" marker-end="url(#fh-b)"/>
<path d="M 320 108 C 260 126, 200 126, 140 108" stroke="${VAP}" stroke-width="2.5" fill="none" marker-end="url(#fh-a)"/>
<text x="230" y="56" fill="${TXT}" font-size="10" text-anchor="middle">refrigerant carries the heat →</text>
<text x="230" y="140" fill="${MUT}" font-size="10" text-anchor="middle">← and comes back for more</text>
<defs>
<marker id="fh-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
<marker id="fh-b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker>
</defs></svg>`,
    },

    "latent-plateau": {
      caption: "Heating water: the temperature climbs (sensible heat), then sits flat at 100°C while it boils — all that energy is latent heat, hidden from the thermometer.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Graph of temperature against heat added: temperature rises, then stays flat during boiling while latent heat is absorbed, then rises again">
<line x1="45" y1="20" x2="45" y2="155" stroke="${LINE}"/>
<line x1="45" y1="155" x2="440" y2="155" stroke="${LINE}"/>
<text x="14" y="30" fill="${MUT}" font-size="10">temp</text>
<text x="438" y="172" fill="${MUT}" font-size="10" text-anchor="end">heat added →</text>
<polyline points="45,140 140,60 340,60 420,28" fill="none" stroke="${VAP}" stroke-width="2.5"/>
<line x1="140" y1="60" x2="340" y2="60" stroke="${HOT}" stroke-width="4"/>
<line x1="38" y1="60" x2="45" y2="60" stroke="${LINE}"/>
<text x="34" y="64" fill="${MUT}" font-size="9" text-anchor="end">100°C</text>
<text x="92" y="110" fill="${VAP}" font-size="9" transform="rotate(-38 92 110)">water warming (sensible)</text>
<text x="240" y="48" fill="${HOT}" font-size="10" text-anchor="middle">boiling — latent heat (a huge gulp, no temp change)</text>
<text x="385" y="55" fill="${VAP}" font-size="9" transform="rotate(-20 385 55)">steam warming</text>
<path d="M 150 60 L 150 80 M 330 60 L 330 80" stroke="${MUT}" stroke-dasharray="3 3"/>
<path d="M 150 80 L 330 80" stroke="${MUT}" stroke-dasharray="3 3" marker-end="url(#lp-m)" marker-start="url(#lp-m)"/>
<text x="240" y="96" fill="${MUT}" font-size="9" text-anchor="middle">≈ 5× more energy than heating it 0→100°C</text>
<defs><marker id="lp-m" markerWidth="8" markerHeight="8" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${MUT}"/></marker></defs></svg>`,
    },

    "pt-curve": {
      caption: "The saturation curve: while liquid and vapour share the coil, one pressure means one temperature. Gauges use this to read coil temperature from pressure.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Graph of pressure against temperature showing the boiling line: a point on the curve links one pressure to one temperature">
<line x1="50" y1="15" x2="50" y2="155" stroke="${LINE}"/>
<line x1="50" y1="155" x2="440" y2="155" stroke="${LINE}"/>
<text x="14" y="28" fill="${MUT}" font-size="10">pressure</text>
<text x="438" y="172" fill="${MUT}" font-size="10" text-anchor="end">temperature →</text>
<path d="M 55 148 C 180 140, 300 105, 420 25" fill="none" stroke="${VAP}" stroke-width="2.5"/>
<text x="150" y="120" fill="${MUT}" font-size="10">liquid side</text>
<text x="330" y="140" fill="${MUT}" font-size="10">vapour side</text>
<text x="255" y="70" fill="${TXT}" font-size="10">the boiling line</text>
<circle cx="285" cy="112" r="5" fill="${LIQ}" stroke="#fff" stroke-width="1.5"/>
<line x1="285" y1="112" x2="285" y2="155" stroke="${LIQ}" stroke-dasharray="4 3"/>
<line x1="50" y1="112" x2="285" y2="112" stroke="${LIQ}" stroke-dasharray="4 3"/>
<text x="44" y="108" fill="${LIQ}" font-size="9" text-anchor="end">read one…</text>
<text x="285" y="170" fill="${LIQ}" font-size="9" text-anchor="middle">…know the other</text>
</svg>`,
    },

    "gauge-pt-ring": {
      caption: "A service gauge: the needle reads pressure on the outer scale, and the inner PT ring converts it straight to the refrigerant's boiling temperature.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="An analog refrigeration gauge with an outer pressure scale, an inner saturation temperature ring, and a needle pointing at 500 kilopascals which equals 15 degrees on the inner ring">
<circle cx="150" cy="95" r="80" fill="none" stroke="${VAP}" stroke-width="2.5"/>
<g fill="${TXT}" font-size="10" text-anchor="middle">
<text x="94" y="150">0</text><text x="76" y="86">250</text><text x="118" y="36">500</text><text x="192" y="42">750</text><text x="218" y="106">1000</text>
</g>
<g fill="${VAP}" font-size="8.5" text-anchor="middle">
<text x="107" y="136">-26°</text><text x="96" y="90">-4°</text><text x="126" y="52">15°</text><text x="180" y="58">28°</text><text x="198" y="104">39°</text>
</g>
<line x1="150" y1="95" x2="122" y2="42" stroke="${TXT}" stroke-width="3" stroke-linecap="round"/>
<circle cx="150" cy="95" r="5" fill="${VAP}"/>
<text x="150" y="128" fill="${MUT}" font-size="9" text-anchor="middle">kPa gauge</text>
<path d="M 262 60 L 190 52" stroke="${MUT}" stroke-width="1.5" marker-end="url(#gp-m)"/>
<text x="268" y="58" fill="${TXT}" font-size="10">needle → pressure (500 kPa g)</text>
<path d="M 262 92 L 196 78" stroke="${MUT}" stroke-width="1.5" marker-end="url(#gp-m)"/>
<text x="268" y="92" fill="${VAP}" font-size="10">inner ring → boiling temp (15°C)</text>
<text x="268" y="122" fill="${MUT}" font-size="9.5">one glance = pressure AND</text>
<text x="268" y="136" fill="${MUT}" font-size="9.5">coil temperature, no chart needed</text>
<defs><marker id="gp-m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${MUT}"/></marker></defs></svg>`,
    },

    "cycle-loop": {
      caption: "The four stops of the loop: squeeze (compressor), cool & condense (condenser), pressure drop (metering device), boil & absorb (evaporator).",
      svg: `<svg viewBox="0 0 460 210" role="img" aria-label="The vapour compression cycle as a loop of four components with coloured arrows: hot gas from compressor to condenser, liquid to the metering device, cold mixture to the evaporator, and cool vapour back to the compressor">
<rect x="30" y="25" width="120" height="40" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="90" y="49" fill="${TXT}" font-size="10" text-anchor="middle">COMPRESSOR</text>
<text x="90" y="16" fill="${MUT}" font-size="9" text-anchor="middle">work in (your power bill)</text>
<rect x="310" y="25" width="120" height="40" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="370" y="49" fill="${TXT}" font-size="10" text-anchor="middle">CONDENSER</text>
<text x="370" y="16" fill="${HOT}" font-size="9" text-anchor="middle">heat OUT</text>
<rect x="310" y="145" width="120" height="40" rx="8" fill="none" stroke="${FLASH}" stroke-width="2"/>
<text x="370" y="169" fill="${TXT}" font-size="10" text-anchor="middle">METERING DEVICE</text>
<rect x="30" y="145" width="120" height="40" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="90" y="169" fill="${TXT}" font-size="10" text-anchor="middle">EVAPORATOR</text>
<text x="90" y="200" fill="${VAP}" font-size="9" text-anchor="middle">heat IN (the cooling!)</text>
<path d="M 155 45 L 305 45" stroke="${HOT}" stroke-width="3" marker-end="url(#cl-h)"/>
<text x="230" y="38" fill="${HOT}" font-size="9" text-anchor="middle">hot gas</text>
<path d="M 370 70 L 370 140" stroke="${LIQ}" stroke-width="3" marker-end="url(#cl-l)"/>
<text x="380" y="108" fill="${LIQ}" font-size="9">liquid</text>
<path d="M 305 165 L 155 165" stroke="${FLASH}" stroke-width="3" marker-end="url(#cl-f)"/>
<text x="230" y="158" fill="${FLASH}" font-size="9" text-anchor="middle">freezing-cold mix</text>
<path d="M 90 140 L 90 70" stroke="${VAP}" stroke-width="3" marker-end="url(#cl-v)"/>
<text x="80" y="108" fill="${VAP}" font-size="9" text-anchor="end">cool vapour</text>
<defs>
<marker id="cl-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker>
<marker id="cl-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="cl-f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${FLASH}"/></marker>
<marker id="cl-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
</defs></svg>`,
    },

    "ph-legs": {
      caption: "The cycle on the P–h chart: the width of the bottom leg is the cooling you get per kilogram; the slanted leg is the compressor work you pay for.",
      svg: `<svg viewBox="0 0 460 210" role="img" aria-label="Pressure enthalpy chart showing the saturation dome and the four legs of the cycle rectangle with labels for compression, condensing, expansion and evaporation">
<line x1="45" y1="15" x2="45" y2="175" stroke="${LINE}"/>
<line x1="45" y1="175" x2="445" y2="175" stroke="${LINE}"/>
<text x="14" y="26" fill="${MUT}" font-size="10">P</text>
<text x="443" y="192" fill="${MUT}" font-size="10" text-anchor="end">energy per kg (h) →</text>
<path d="M 110 170 C 150 60, 290 60, 330 170" fill="rgba(79,195,247,0.05)" stroke="${LINE}" stroke-width="1.2"/>
<path d="M 355 130 L 395 55" stroke="${HOT}" stroke-width="2.5" marker-end="url(#pl-h)"/>
<path d="M 395 55 L 140 55" stroke="${LIQ}" stroke-width="2.5" marker-end="url(#pl-l)"/>
<path d="M 140 55 L 140 130" stroke="${FLASH}" stroke-width="2.5" marker-end="url(#pl-f)"/>
<path d="M 140 130 L 355 130" stroke="${VAP}" stroke-width="2.5" marker-end="url(#pl-v)"/>
<g fill="${TXT}" font-size="10">
<circle cx="355" cy="130" r="3.5" fill="${TXT}"/><text x="362" y="143">1</text>
<circle cx="395" cy="55" r="3.5" fill="${TXT}"/><text x="402" y="52">2</text>
<circle cx="140" cy="55" r="3.5" fill="${TXT}"/><text x="124" y="52">3</text>
<circle cx="140" cy="130" r="3.5" fill="${TXT}"/><text x="124" y="143">4</text>
</g>
<text x="398" y="100" fill="${HOT}" font-size="9">1→2 squeeze</text>
<text x="268" y="45" fill="${LIQ}" font-size="9" text-anchor="middle">2→3 dump heat outside</text>
<text x="133" y="96" fill="${FLASH}" font-size="9" text-anchor="end">3→4 pressure drop</text>
<text x="248" y="122" fill="${VAP}" font-size="9" text-anchor="middle">4→1 soak up heat = COOLING</text>
<path d="M 140 152 L 355 152" stroke="${GOOD}" stroke-dasharray="4 3" marker-end="url(#pl-g)" marker-start="url(#pl-g)"/>
<text x="248" y="166" fill="${GOOD}" font-size="9" text-anchor="middle">wider = more cooling per kg</text>
<defs>
<marker id="pl-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker>
<marker id="pl-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="pl-f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${FLASH}"/></marker>
<marker id="pl-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
<marker id="pl-g" markerWidth="8" markerHeight="8" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${GOOD}"/></marker>
</defs></svg>`,
    },

    "txv-balance": {
      caption: "A TXV is a self-adjusting doorway: bulb pressure (from the coil-outlet temperature) pushes it open; spring and coil pressure push it shut. The balance holds superheat steady.",
      svg: `<svg viewBox="0 0 460 200" role="img" aria-label="Thermostatic expansion valve diagram: the sensing bulb on the suction line pushes the valve open when the outlet warms, while the spring and evaporator pressure push it closed">
<path d="M 230 70 L 258 98 L 230 126 L 202 98 Z" fill="none" stroke="${FLASH}" stroke-width="2.5"/>
<text x="230" y="103" fill="${TXT}" font-size="9" text-anchor="middle">TXV</text>
<line x1="120" y1="98" x2="198" y2="98" stroke="${LIQ}" stroke-width="5"/>
<text x="155" y="88" fill="${LIQ}" font-size="9" text-anchor="middle">liquid in</text>
<line x1="262" y1="98" x2="340" y2="98" stroke="${FLASH}" stroke-width="5"/>
<text x="300" y="88" fill="${FLASH}" font-size="9" text-anchor="middle">cold mix out</text>
<rect x="330" y="120" width="100" height="46" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="380" y="147" fill="${TXT}" font-size="9.5" text-anchor="middle">EVAPORATOR</text>
<line x1="380" y1="120" x2="380" y2="52" stroke="${VAP}" stroke-width="5"/>
<text x="392" y="80" fill="${VAP}" font-size="9">coil outlet</text>
<circle cx="380" cy="40" r="9" fill="none" stroke="${LIQ}" stroke-width="2.5"/>
<text x="398" y="44" fill="${LIQ}" font-size="9.5">sensing bulb</text>
<path d="M 371 36 C 300 20, 240 30, 231 62" fill="none" stroke="${LIQ}" stroke-width="1.6" stroke-dasharray="4 3"/>
<text x="290" y="18" fill="${LIQ}" font-size="9">bulb pressure</text>
<path d="M 230 56 L 230 68" stroke="${LIQ}" stroke-width="2.5" marker-end="url(#tx-l)"/>
<text x="146" y="52" fill="${LIQ}" font-size="9.5">warmer outlet → pushes OPEN</text>
<path d="M 230 142 L 230 130" stroke="${MUT}" stroke-width="2.5" marker-end="url(#tx-m)"/>
<text x="146" y="160" fill="${MUT}" font-size="9.5">spring + coil pressure → push SHUT</text>
<text x="230" y="188" fill="${GOOD}" font-size="9.5" text-anchor="middle">the tug-of-war balances at a steady superheat (≈ 4–8 K)</text>
<defs>
<marker id="tx-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="tx-m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${MUT}"/></marker>
</defs></svg>`,
    },

    "frost-spiral": {
      caption: "The frost feedback loop: frost insulates and blocks air, the coil runs colder, so frost grows faster. Defrost exists to break the loop before it wins.",
      svg: `<svg viewBox="0 0 460 200" role="img" aria-label="Circular diagram of the frost feedback loop: frost grows, insulates the coil and blocks airflow, the coil gets colder, more moisture freezes, and the loop repeats">
<g fill="${TXT}" font-size="10" text-anchor="middle">
<rect x="170" y="14" width="120" height="30" rx="15" fill="none" stroke="${VAP}"/>
<text x="230" y="33">frost grows</text>
<rect x="310" y="80" width="140" height="42" rx="15" fill="none" stroke="${VAP}"/>
<text x="380" y="98">insulates the coil</text><text x="380" y="112">+ blocks airflow</text>
<rect x="170" y="152" width="120" height="30" rx="15" fill="none" stroke="${VAP}"/>
<text x="230" y="171">coil runs colder</text>
<rect x="10" y="80" width="140" height="42" rx="15" fill="none" stroke="${VAP}"/>
<text x="80" y="98">more moisture</text><text x="80" y="112">freezes on it</text>
</g>
<path d="M 295 40 C 340 50, 365 60, 378 76" fill="none" stroke="${MUT}" stroke-width="2" marker-end="url(#fs-m)"/>
<path d="M 372 126 C 350 145, 320 158, 296 164" fill="none" stroke="${MUT}" stroke-width="2" marker-end="url(#fs-m)"/>
<path d="M 165 164 C 140 158, 110 145, 88 126" fill="none" stroke="${MUT}" stroke-width="2" marker-end="url(#fs-m)"/>
<path d="M 82 76 C 95 60, 120 50, 165 40" fill="none" stroke="${MUT}" stroke-width="2" marker-end="url(#fs-m)"/>
<text x="230" y="95" fill="${GOOD}" font-size="10" text-anchor="middle">break the loop:</text>
<text x="230" y="110" fill="${GOOD}" font-size="10" text-anchor="middle">DEFROST</text>
<defs><marker id="fs-m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${MUT}"/></marker></defs></svg>`,
    },

    "superheat-measure": {
      caption: "Measuring superheat: gauge says the coil boils at 9°C; the clamp thermometer reads the pipe at 15°C. Superheat = 15 − 9 = 6 K. Two readings, one subtraction.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Measuring superheat at the evaporator outlet: a pressure gauge converts to 9 degrees saturation, a clamp thermometer reads 15 degrees, superheat equals six kelvin">
<rect x="15" y="70" width="110" height="50" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="70" y="99" fill="${TXT}" font-size="10" text-anchor="middle">EVAPORATOR</text>
<line x1="125" y1="95" x2="440" y2="95" stroke="${VAP}" stroke-width="6"/>
<text x="420" y="84" fill="${MUT}" font-size="9" text-anchor="end">suction line →</text>
<circle cx="205" cy="45" r="26" fill="none" stroke="${VAP}" stroke-width="2"/>
<line x1="205" y1="71" x2="205" y2="92" stroke="${MUT}" stroke-width="2"/>
<line x1="205" y1="45" x2="216" y2="30" stroke="${TXT}" stroke-width="2"/>
<text x="205" y="50" fill="${VAP}" font-size="8" text-anchor="middle">400 kPa g</text>
<text x="248" y="30" fill="${VAP}" font-size="9.5">gauge → PT ring:</text>
<text x="248" y="43" fill="${VAP}" font-size="9.5">boiling at 9°C</text>
<rect x="318" y="103" width="30" height="20" rx="4" fill="none" stroke="${LIQ}" stroke-width="2"/>
<line x1="333" y1="123" x2="333" y2="140" stroke="${LIQ}" stroke-width="2"/>
<text x="333" y="156" fill="${LIQ}" font-size="9.5" text-anchor="middle">clamp thermometer: 15°C</text>
<text x="230" y="180" fill="${GOOD}" font-size="11" text-anchor="middle">Superheat = 15 − 9 = 6 K → the vapour is safely dry ✓</text>
</svg>`,
    },

    "subcool-measure": {
      caption: "Measuring subcooling: gauge says condensing happens at 56°C; the liquid line reads 48°C. Subcooling = 56 − 48 = 8 K of solid liquid in reserve.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Measuring subcooling at the condenser outlet: a high side gauge converts to 56 degrees saturation, the liquid line thermometer reads 48 degrees, subcooling equals eight kelvin">
<rect x="15" y="70" width="110" height="50" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="70" y="99" fill="${TXT}" font-size="10" text-anchor="middle">CONDENSER</text>
<line x1="125" y1="95" x2="440" y2="95" stroke="${LIQ}" stroke-width="6"/>
<text x="420" y="84" fill="${MUT}" font-size="9" text-anchor="end">liquid line →</text>
<circle cx="205" cy="45" r="26" fill="none" stroke="${HOT}" stroke-width="2"/>
<line x1="205" y1="71" x2="205" y2="92" stroke="${MUT}" stroke-width="2"/>
<line x1="205" y1="45" x2="220" y2="35" stroke="${TXT}" stroke-width="2"/>
<text x="205" y="50" fill="${HOT}" font-size="8" text-anchor="middle">1500 kPa g</text>
<text x="248" y="30" fill="${HOT}" font-size="9.5">gauge → PT ring:</text>
<text x="248" y="43" fill="${HOT}" font-size="9.5">condensing at 56°C</text>
<rect x="318" y="103" width="30" height="20" rx="4" fill="none" stroke="${LIQ}" stroke-width="2"/>
<line x1="333" y1="123" x2="333" y2="140" stroke="${LIQ}" stroke-width="2"/>
<text x="333" y="156" fill="${LIQ}" font-size="9.5" text-anchor="middle">liquid line thermometer: 48°C</text>
<text x="230" y="180" fill="${GOOD}" font-size="11" text-anchor="middle">Subcooling = 56 − 48 = 8 K → a healthy liquid reserve ✓</text>
</svg>`,
    },

    "reversing-valve": {
      caption: "One machine, two directions: in cooling the indoor coil soaks heat up; flip the reversing valve and the hot gas goes indoors instead — the same coils swap jobs.",
      svg: `<svg viewBox="0 0 460 200" role="img" aria-label="Heat pump modes side by side: in cooling mode the indoor coil is the evaporator and heat flows out through the outdoor coil; in heating mode the valve reverses the flow so the indoor coil becomes the condenser and heats the room">
<text x="115" y="20" fill="${TXT}" font-size="11" text-anchor="middle">COOLING mode</text>
<rect x="30" y="40" width="80" height="36" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="70" y="62" fill="${VAP}" font-size="9" text-anchor="middle">indoor coil</text>
<text x="70" y="92" fill="${MUT}" font-size="8.5" text-anchor="middle">soaks heat from room</text>
<rect x="130" y="40" width="80" height="36" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="170" y="62" fill="${HOT}" font-size="9" text-anchor="middle">outdoor coil</text>
<text x="170" y="92" fill="${MUT}" font-size="8.5" text-anchor="middle">dumps it outside</text>
<path d="M 112 58 L 126 58" stroke="${HOT}" stroke-width="2.5" marker-end="url(#rv-h)"/>
<text x="115" y="130" fill="${MUT}" font-size="9" text-anchor="middle">room gets colder</text>
<line x1="230" y1="15" x2="230" y2="185" stroke="${LINE}" stroke-dasharray="4 4"/>
<text x="345" y="20" fill="${TXT}" font-size="11" text-anchor="middle">HEATING mode</text>
<rect x="260" y="40" width="80" height="36" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="300" y="62" fill="${HOT}" font-size="9" text-anchor="middle">indoor coil</text>
<text x="300" y="92" fill="${MUT}" font-size="8.5" text-anchor="middle">now heats the room!</text>
<rect x="360" y="40" width="80" height="36" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="400" y="62" fill="${VAP}" font-size="9" text-anchor="middle">outdoor coil</text>
<text x="400" y="92" fill="${MUT}" font-size="8.5" text-anchor="middle">harvests outdoor heat</text>
<path d="M 356 58 L 342 58" stroke="${HOT}" stroke-width="2.5" marker-end="url(#rv-h)"/>
<text x="345" y="130" fill="${MUT}" font-size="9" text-anchor="middle">room gets warmer</text>
<text x="230" y="165" fill="${GOOD}" font-size="10" text-anchor="middle">the 4-way reversing valve swaps the coils' jobs</text>
<defs><marker id="rv-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker></defs></svg>`,
    },

    "ladder-rung": {
      caption: "One rung of a ladder diagram: every switch must be closed for the contactor coil to pull in. A voltmeter across a closed switch reads ≈0 V — full voltage appears across the open one.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Ladder diagram rung: thermostat, low pressure switch, high pressure switch and overload in series feeding a contactor coil; a voltmeter shows full voltage across the open high pressure switch">
<line x1="30" y1="20" x2="30" y2="170" stroke="${TXT}" stroke-width="2.5"/>
<line x1="430" y1="20" x2="430" y2="170" stroke="${TXT}" stroke-width="2.5"/>
<text x="30" y="14" fill="${MUT}" font-size="9" text-anchor="middle">Active</text>
<text x="430" y="14" fill="${MUT}" font-size="9" text-anchor="middle">Neutral</text>
<line x1="30" y1="80" x2="66" y2="80" stroke="${TXT}" stroke-width="2"/>
<line x1="66" y1="80" x2="88" y2="66" stroke="${TXT}" stroke-width="2"/><circle cx="66" cy="80" r="2.5" fill="${TXT}"/><circle cx="92" cy="80" r="2.5" fill="${TXT}"/>
<text x="79" y="104" fill="${MUT}" font-size="8.5" text-anchor="middle">thermostat</text>
<line x1="92" y1="80" x2="146" y2="80" stroke="${TXT}" stroke-width="2"/>
<line x1="146" y1="80" x2="168" y2="66" stroke="${TXT}" stroke-width="2"/><circle cx="146" cy="80" r="2.5" fill="${TXT}"/><circle cx="172" cy="80" r="2.5" fill="${TXT}"/>
<text x="159" y="104" fill="${MUT}" font-size="8.5" text-anchor="middle">LP switch</text>
<line x1="172" y1="80" x2="226" y2="80" stroke="${TXT}" stroke-width="2"/>
<line x1="226" y1="80" x2="252" y2="60" stroke="${BAD}" stroke-width="2.5"/><circle cx="226" cy="80" r="2.5" fill="${BAD}"/><circle cx="252" cy="80" r="2.5" fill="${BAD}"/>
<text x="239" y="104" fill="${BAD}" font-size="8.5" text-anchor="middle">HP switch (OPEN)</text>
<line x1="252" y1="80" x2="306" y2="80" stroke="${TXT}" stroke-width="2"/>
<line x1="306" y1="80" x2="328" y2="66" stroke="${TXT}" stroke-width="2"/><circle cx="306" cy="80" r="2.5" fill="${TXT}"/><circle cx="332" cy="80" r="2.5" fill="${TXT}"/>
<text x="319" y="104" fill="${MUT}" font-size="8.5" text-anchor="middle">overload</text>
<line x1="332" y1="80" x2="368" y2="80" stroke="${TXT}" stroke-width="2"/>
<circle cx="388" cy="80" r="18" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="388" y="84" fill="${VAP}" font-size="8" text-anchor="middle">COIL</text>
<line x1="406" y1="80" x2="430" y2="80" stroke="${TXT}" stroke-width="2"/>
<path d="M 226 128 C 232 118, 246 118, 252 128" fill="none" stroke="${LIQ}" stroke-width="1.6"/>
<circle cx="239" cy="136" r="12" fill="none" stroke="${LIQ}" stroke-width="2"/>
<text x="239" y="140" fill="${LIQ}" font-size="8" text-anchor="middle">V</text>
<text x="239" y="166" fill="${LIQ}" font-size="9" text-anchor="middle">reads FULL voltage → found the open switch</text>
</svg>`,
    },

    "recovery-hookup": {
      caption: "Recovery: the machine pulls refrigerant from the system into an approved cylinder sitting on scales — and the scales, not the machine, say when to stop (80% by weight).",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Recovery hookup: hoses from the system to the recovery machine and into a recovery cylinder standing on scales, with the eighty percent fill limit marked">
<rect x="20" y="50" width="110" height="70" rx="10" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="75" y="82" fill="${TXT}" font-size="10" text-anchor="middle">SYSTEM</text>
<text x="75" y="98" fill="${MUT}" font-size="8.5" text-anchor="middle">being emptied</text>
<rect x="180" y="55" width="110" height="60" rx="10" fill="none" stroke="${LIQ}" stroke-width="2"/>
<text x="235" y="82" fill="${TXT}" font-size="9.5" text-anchor="middle">RECOVERY</text>
<text x="235" y="96" fill="${TXT}" font-size="9.5" text-anchor="middle">MACHINE</text>
<path d="M 132 85 L 176 85" stroke="${VAP}" stroke-width="3" marker-end="url(#rh-v)"/>
<path d="M 292 85 L 336 85" stroke="${LIQ}" stroke-width="3" marker-end="url(#rh-l)"/>
<path d="M 340 60 L 340 145 A 10 10 0 0 0 350 155 L 390 155 A 10 10 0 0 0 400 145 L 400 60 A 30 14 0 0 0 340 60" fill="none" stroke="${TXT}" stroke-width="2"/>
<rect x="362" y="38" width="16" height="14" rx="3" fill="none" stroke="${TXT}" stroke-width="2"/>
<line x1="342" y1="98" x2="398" y2="98" stroke="${BAD}" stroke-width="2" stroke-dasharray="5 3"/>
<text x="410" y="101" fill="${BAD}" font-size="9">80% MAX</text>
<rect x="345" y="100" width="50" height="52" fill="rgba(245,166,35,0.25)"/>
<text x="370" y="176" fill="${TXT}" font-size="9" text-anchor="middle">cylinder</text>
<rect x="330" y="158" width="80" height="12" rx="3" fill="none" stroke="${GOOD}" stroke-width="2"/>
<text x="290" y="180" fill="${GOOD}" font-size="9">SCALES — weigh everything, always</text>
<defs>
<marker id="rh-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
<marker id="rh-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
</defs></svg>`,
    },

    "vacuum-decay": {
      caption: "The standing-vacuum test tells the truth: steady = dry and tight; rises then levels = moisture still boiling off; keeps climbing = a leak letting air in.",
      svg: `<svg viewBox="0 0 460 190" role="img" aria-label="Graph of vacuum level over time after isolating the pump: a steady line means tight and dry, a line that rises then plateaus means moisture, a line that keeps rising means a leak">
<line x1="50" y1="15" x2="50" y2="155" stroke="${LINE}"/>
<line x1="50" y1="155" x2="440" y2="155" stroke="${LINE}"/>
<text x="12" y="26" fill="${MUT}" font-size="10">microns</text>
<text x="438" y="172" fill="${MUT}" font-size="10" text-anchor="end">time after pump isolated →</text>
<path d="M 55 135 L 435 130" stroke="${GOOD}" stroke-width="2.5" fill="none"/>
<text x="360" y="122" fill="${GOOD}" font-size="9.5">holds ✓ dry &amp; tight — charge it</text>
<path d="M 55 135 C 150 105, 220 88, 300 84 L 435 82" stroke="${LIQ}" stroke-width="2.5" fill="none"/>
<text x="330" y="72" fill="${LIQ}" font-size="9.5">rises, then levels = moisture</text>
<path d="M 55 135 C 160 100, 300 55, 435 22" stroke="${BAD}" stroke-width="2.5" fill="none"/>
<text x="330" y="26" fill="${BAD}" font-size="9.5">keeps climbing = LEAK</text>
<line x1="44" y1="135" x2="50" y2="135" stroke="${LINE}"/>
<text x="40" y="139" fill="${MUT}" font-size="8.5" text-anchor="end">500</text>
</svg>`,
    },

    "psychrometric-skeleton": {
      caption: "The psychrometric chart is just a graph of moist air: dry-bulb across the bottom, moisture up the right-hand side, and the saturation curve as the wall the air can never climb over. Fix any two properties and the state point is pinned.",
      svg: `<svg viewBox="0 0 460 210" role="img" aria-label="Skeleton psychrometric chart: dry-bulb temperature runs along the bottom axis and humidity ratio up the right-hand axis, the saturation curve forms the left-hand boundary of the chart, a fifty percent relative humidity curve lies inside it, and a state point at 24 degrees dry-bulb and 9.3 grams per kilogram is located by dashed lines dropped to both axes">
<line x1="50" y1="175" x2="405" y2="175" stroke="${LINE}"/>
<line x1="405" y1="20" x2="405" y2="175" stroke="${LINE}"/>
<text x="228" y="200" fill="${MUT}" font-size="10" text-anchor="middle">dry-bulb temperature (°C) →</text>
<text x="0" y="0" fill="${MUT}" font-size="10" text-anchor="middle" transform="translate(448 98) rotate(-90)">humidity ratio (g/kg dry air) ↑</text>
<path d="M 55 172 C 200 165, 310 135, 400 25" fill="none" stroke="${VAP}" stroke-width="2.5"/>
<text x="278" y="112" fill="${VAP}" font-size="9.5" text-anchor="end">saturation curve — 100% RH</text>
<path d="M 55 173 C 200 169, 315 153, 400 100" fill="none" stroke="${MUT}" stroke-width="1.6" stroke-dasharray="5 4"/>
<text x="360" y="148" fill="${MUT}" font-size="9.5" text-anchor="end">50% RH</text>
<text x="86" y="52" fill="${MUT}" font-size="9" text-anchor="middle">air cannot exist up here:</text>
<text x="86" y="65" fill="${MUT}" font-size="9" text-anchor="middle">the curve is the most water</text>
<text x="86" y="78" fill="${MUT}" font-size="9" text-anchor="middle">air can carry at that temperature</text>
<line x1="250" y1="155" x2="250" y2="175" stroke="${LIQ}" stroke-dasharray="4 3"/>
<line x1="250" y1="155" x2="405" y2="155" stroke="${LIQ}" stroke-dasharray="4 3"/>
<circle cx="250" cy="155" r="5" fill="${LIQ}" stroke="#fff" stroke-width="1.5"/>
<text x="250" y="189" fill="${LIQ}" font-size="9" text-anchor="middle">24 °C dry-bulb</text>
<text x="399" y="148" fill="${LIQ}" font-size="9" text-anchor="end">9.3 g/kg</text>
<text x="258" y="140" fill="${LIQ}" font-size="9">the state point</text>
</svg>`,
    },

    "ac-process-arrows": {
      caption: "Every job an air-conditioning plant does is a direction of travel on the chart: heat and you go right, cool and you go left, add moisture and you go up, take it out and you go down — a real cooling coil does both at once, so it heads down and to the left.",
      svg: `<svg viewBox="0 0 460 210" role="img" aria-label="A psychrometric chart reduced to a plain box with a state point at its centre and five labelled arrows leaving it: sensible heating to the right, sensible cooling to the left, humidifying upward, dehumidifying downward, and cooling with dehumidifying down and to the left">
<rect x="110" y="30" width="240" height="140" rx="8" fill="none" stroke="${LINE}" stroke-width="1.5"/>
<path d="M 114 166 C 128 148, 134 130, 138 112" fill="none" stroke="${VAP}" stroke-width="1.8"/>
<text x="146" y="160" fill="${VAP}" font-size="8.5">saturation</text>
<text x="336" y="163" fill="${MUT}" font-size="8.5" text-anchor="end">dry-bulb →</text>
<text x="0" y="0" fill="${MUT}" font-size="8.5" text-anchor="middle" transform="translate(340 62) rotate(-90)">moisture ↑</text>
<circle cx="230" cy="100" r="4.5" fill="${TXT}"/>
<text x="240" y="122" fill="${MUT}" font-size="9">the air's state now</text>
<path d="M 240 100 L 358 100" stroke="${HOT}" stroke-width="2.5" marker-end="url(#apa-h)"/>
<text x="364" y="104" fill="${HOT}" font-size="9.5">sensible heating</text>
<path d="M 220 100 L 102 100" stroke="${VAP}" stroke-width="2.5" marker-end="url(#apa-v)"/>
<text x="96" y="104" fill="${VAP}" font-size="9.5" text-anchor="end">sensible cooling</text>
<path d="M 230 90 L 230 24" stroke="${FLASH}" stroke-width="2.5" marker-end="url(#apa-f)"/>
<text x="230" y="16" fill="${FLASH}" font-size="9.5" text-anchor="middle">humidifying</text>
<path d="M 230 110 L 230 176" stroke="${LIQ}" stroke-width="2.5" marker-end="url(#apa-l)"/>
<text x="230" y="192" fill="${LIQ}" font-size="9.5" text-anchor="middle">dehumidifying</text>
<path d="M 222 108 L 152 178" stroke="${GOOD}" stroke-width="2.5" marker-end="url(#apa-g)"/>
<text x="146" y="192" fill="${GOOD}" font-size="9.5" text-anchor="end">cooling + dehumidifying</text>
<defs>
<marker id="apa-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker>
<marker id="apa-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
<marker id="apa-f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${FLASH}"/></marker>
<marker id="apa-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="apa-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${GOOD}"/></marker>
</defs></svg>`,
    },

    "star-delta": {
      caption: "Star and delta are the same three windings wired two ways. In star the windings share a common point, so the line voltage is 1.732 times the winding voltage; in delta each winding sits straight across two lines, so the line current is 1.732 times the winding current.",
      svg: `<svg viewBox="0 0 460 238" role="img" aria-label="Star and delta windings side by side: the star has three windings joined at a common neutral point so line voltage is 1.732 times phase voltage while line and phase current are equal, and the delta has three windings in a closed triangle so line voltage equals phase voltage while line current is 1.732 times phase current">
<text x="112" y="18" fill="${TXT}" font-size="11" text-anchor="middle">STAR (WYE)</text>
<line x1="235" y1="26" x2="235" y2="228" stroke="${LINE}" stroke-dasharray="4 4"/>
<text x="348" y="18" fill="${TXT}" font-size="11" text-anchor="middle">DELTA (MESH)</text>
<g stroke="${VAP}" stroke-width="3" fill="none">
<path d="M 115 110 L 115 48"/><path d="M 115 110 L 62 146"/><path d="M 115 110 L 168 146"/>
</g>
<circle cx="115" cy="110" r="4" fill="${VAP}"/>
<circle cx="115" cy="46" r="3.5" fill="${TXT}"/><circle cx="60" cy="148" r="3.5" fill="${TXT}"/><circle cx="170" cy="148" r="3.5" fill="${TXT}"/>
<text x="115" y="36" fill="${TXT}" font-size="10" text-anchor="middle">L1</text>
<text x="50" y="142" fill="${TXT}" font-size="10" text-anchor="end">L2</text>
<text x="180" y="142" fill="${TXT}" font-size="10">L3</text>
<text x="104" y="106" fill="${MUT}" font-size="9" text-anchor="end">N</text>
<path d="M 131 108 L 131 52" stroke="${LIQ}" stroke-dasharray="4 3" marker-start="url(#std-l)" marker-end="url(#std-l)"/>
<text x="137" y="84" fill="${LIQ}" font-size="9.5">V(P) 230 V</text>
<path d="M 64 164 L 166 164" stroke="${LIQ}" stroke-dasharray="4 3" marker-start="url(#std-l)" marker-end="url(#std-l)"/>
<text x="115" y="180" fill="${LIQ}" font-size="9.5" text-anchor="middle">V(L) 400 V</text>
<path d="M 96 74 L 96 56" stroke="${FLASH}" stroke-width="2" marker-end="url(#std-f)"/>
<text x="90" y="70" fill="${FLASH}" font-size="9" text-anchor="end">I</text>
<text x="112" y="202" fill="${GOOD}" font-size="10" text-anchor="middle">V(L) = 1.732 × V(P)</text>
<text x="112" y="218" fill="${GOOD}" font-size="10" text-anchor="middle">I(L) = I(P)</text>
<g stroke="${VAP}" stroke-width="3" fill="none">
<path d="M 350 52 L 298 148"/><path d="M 350 52 L 402 148"/><path d="M 298 148 L 402 148"/>
</g>
<path d="M 350 52 L 350 32" stroke="${VAP}" stroke-width="3"/>
<path d="M 298 148 L 280 166" stroke="${VAP}" stroke-width="3"/>
<path d="M 402 148 L 420 166" stroke="${VAP}" stroke-width="3"/>
<circle cx="350" cy="30" r="3.5" fill="${TXT}"/><circle cx="278" cy="168" r="3.5" fill="${TXT}"/><circle cx="422" cy="168" r="3.5" fill="${TXT}"/>
<text x="360" y="34" fill="${TXT}" font-size="10">L1</text>
<text x="270" y="174" fill="${TXT}" font-size="10" text-anchor="end">L2</text>
<text x="430" y="174" fill="${TXT}" font-size="10">L3</text>
<path d="M 344 36 L 286 162" stroke="${LIQ}" stroke-dasharray="4 3" marker-start="url(#std-l)" marker-end="url(#std-l)"/>
<text x="300" y="76" fill="${LIQ}" font-size="9.5" text-anchor="end">V(L) = V(P)</text>
<path d="M 336 140 L 364 140" stroke="${FLASH}" stroke-width="2" marker-end="url(#std-f)"/>
<text x="350" y="134" fill="${FLASH}" font-size="9" text-anchor="middle">I(P)</text>
<path d="M 410 158 L 424 172" stroke="${FLASH}" stroke-width="2" marker-end="url(#std-f)"/>
<text x="434" y="148" fill="${FLASH}" font-size="9" text-anchor="middle">I(L)</text>
<text x="348" y="202" fill="${GOOD}" font-size="10" text-anchor="middle">V(L) = V(P)</text>
<text x="348" y="218" fill="${GOOD}" font-size="10" text-anchor="middle">I(L) = 1.732 × I(P)</text>
<defs>
<marker id="std-l" markerWidth="8" markerHeight="8" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="std-f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${FLASH}"/></marker>
</defs></svg>`,
    },

    "power-triangle": {
      caption: "The power triangle: only the base does work. Reactive power stands the triangle up, stretching the kVA the supply must deliver — power factor is simply how flat the triangle is, cos φ = P ÷ S.",
      svg: `<svg viewBox="0 0 460 214" role="img" aria-label="The a.c. power triangle: true power of 8 kilowatts along the base, reactive power of 6 kilovolt-amperes reactive rising vertically, apparent power of 10 kilovolt-amperes as the hypotenuse, and the angle phi at the corner giving a power factor of cos phi equal to P divided by S, which is 0.8">
<path d="M 90 170 L 290 170 L 290 20 Z" fill="rgba(79,195,247,0.05)" stroke="none"/>
<line x1="90" y1="170" x2="290" y2="170" stroke="${GOOD}" stroke-width="3"/>
<line x1="290" y1="170" x2="290" y2="20" stroke="${LIQ}" stroke-width="3"/>
<line x1="90" y1="170" x2="290" y2="20" stroke="${VAP}" stroke-width="3"/>
<text x="190" y="188" fill="${GOOD}" font-size="9.5" text-anchor="middle">true power P = 8 kW — the part that does work</text>
<text x="298" y="86" fill="${LIQ}" font-size="9.5">reactive power</text>
<text x="298" y="99" fill="${LIQ}" font-size="9.5">Q = 6 kVAr</text>
<text x="298" y="114" fill="${MUT}" font-size="8.5">magnetises the coils,</text>
<text x="298" y="126" fill="${MUT}" font-size="8.5">does no useful work</text>
<text x="0" y="0" fill="${VAP}" font-size="9.5" text-anchor="middle" transform="translate(190 88) rotate(-37)">apparent power S = 10 kVA</text>
<path d="M 138 170 A 48 48 0 0 0 128 141" fill="none" stroke="${TXT}" stroke-width="1.6"/>
<text x="146" y="160" fill="${TXT}" font-size="12">φ</text>
<text x="100" y="36" fill="${MUT}" font-size="9">φ is the angle between P and S.</text>
<text x="100" y="49" fill="${MUT}" font-size="9">Shrink Q (add capacitors) and</text>
<text x="100" y="62" fill="${MUT}" font-size="9">cos φ climbs towards 1.0.</text>
<text x="230" y="206" fill="${TXT}" font-size="11" text-anchor="middle">power factor = cos φ = P ÷ S = 8 ÷ 10 = 0.8</text>
</svg>`,
    },

    "three-phase-waves": {
      caption: "Three phases are one generator with three windings set 120° apart, so each voltage peaks a third of a cycle after the one before it. As one phase falls away another is rising, which is why three-phase power arrives smooth rather than in pulses.",
      svg: `<svg viewBox="0 0 460 200" role="img" aria-label="Three sine waves on one set of axes labelled L1, L2 and L3, each starting its positive half cycle 120 degrees after the previous one, with the 120 degree spacing between the rising zero crossings marked below the axis">
<line x1="40" y1="30" x2="40" y2="168" stroke="${LINE}"/>
<line x1="40" y1="100" x2="440" y2="100" stroke="${LINE}"/>
<text x="12" y="34" fill="${MUT}" font-size="10">volts</text>
<text x="36" y="104" fill="${MUT}" font-size="9" text-anchor="end">0</text>
<text x="438" y="192" fill="${MUT}" font-size="10" text-anchor="end">one cycle = 360° = 20 ms at 50 Hz →</text>
<polyline fill="none" stroke="${VAP}" stroke-width="2.5" points="45,100 55,90.4 65,81.2 75,72.5 85,64.6 95,57.9 105,52.4 115,48.3 125,45.8 135,45 145,45.8 155,48.3 165,52.4 175,57.9 185,64.6 195,72.5 205,81.2 215,90.4 225,100 235,109.6 245,118.8 255,127.5 265,135.4 275,142.1 285,147.6 295,151.7 305,154.2 315,155 325,154.2 335,151.7 345,147.6 355,142.1 365,135.4 375,127.5 385,118.8 395,109.6 405,100"/>
<polyline fill="none" stroke="${LIQ}" stroke-width="2.5" points="45,147.6 55,151.7 65,154.2 75,155 85,154.2 95,151.7 105,147.6 115,142.1 125,135.4 135,127.5 145,118.8 155,109.6 165,100 175,90.4 185,81.2 195,72.5 205,64.6 215,57.9 225,52.4 235,48.3 245,45.8 255,45 265,45.8 275,48.3 285,52.4 295,57.9 305,64.6 315,72.5 325,81.2 335,90.4 345,100 355,109.6 365,118.8 375,127.5 385,135.4 395,142.1 405,147.6"/>
<polyline fill="none" stroke="${GOOD}" stroke-width="2.5" points="45,52.4 55,57.9 65,64.6 75,72.5 85,81.2 95,90.4 105,100 115,109.6 125,118.8 135,127.5 145,135.4 155,142.1 165,147.6 175,151.7 185,154.2 195,155 205,154.2 215,151.7 225,147.6 235,142.1 245,135.4 255,127.5 265,118.8 275,109.6 285,100 295,90.4 305,81.2 315,72.5 325,64.6 335,57.9 345,52.4 355,48.3 365,45.8 375,45 385,45.8 395,48.3 405,52.4"/>
<text x="135" y="38" fill="${VAP}" font-size="10" text-anchor="middle">L1</text>
<text x="255" y="38" fill="${LIQ}" font-size="10" text-anchor="middle">L2</text>
<text x="375" y="38" fill="${GOOD}" font-size="10" text-anchor="middle">L3</text>
<g stroke="${MUT}" stroke-dasharray="3 3">
<line x1="45" y1="100" x2="45" y2="176"/><line x1="165" y1="100" x2="165" y2="176"/><line x1="285" y1="100" x2="285" y2="176"/><line x1="405" y1="100" x2="405" y2="176"/>
</g>
<path d="M 45 172 L 165 172" stroke="${MUT}" marker-start="url(#tpw-m)" marker-end="url(#tpw-m)"/>
<path d="M 165 172 L 285 172" stroke="${MUT}" marker-start="url(#tpw-m)" marker-end="url(#tpw-m)"/>
<path d="M 285 172 L 405 172" stroke="${MUT}" marker-start="url(#tpw-m)" marker-end="url(#tpw-m)"/>
<text x="105" y="167" fill="${MUT}" font-size="9" text-anchor="middle">120°</text>
<text x="225" y="167" fill="${MUT}" font-size="9" text-anchor="middle">120°</text>
<text x="345" y="167" fill="${MUT}" font-size="9" text-anchor="middle">120°</text>
<defs><marker id="tpw-m" markerWidth="8" markerHeight="8" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${MUT}"/></marker></defs></svg>`,
    },

    "oil-return-riser": {
      caption: "Oil only gets home if the gas is moving fast enough to drag it up the riser. A trap at the base gathers oil into slugs the gas can lift, and a double riser keeps the velocity up when the load — and the gas flow — falls away.",
      svg: `<svg viewBox="0 0 460 254" role="img" aria-label="Two suction risers compared: a single riser with a trap at its base where refrigerant vapour drags the oil film upward and needs about five metres per second to do it, and a double riser alongside where the trap fills at part load and seals the large riser so all the vapour goes up the small one">
<text x="112" y="16" fill="${TXT}" font-size="11" text-anchor="middle">SINGLE RISER</text>
<line x1="225" y1="24" x2="225" y2="248" stroke="${LINE}" stroke-dasharray="4 4"/>
<text x="348" y="16" fill="${TXT}" font-size="11" text-anchor="middle">DOUBLE RISER</text>
<rect x="20" y="170" width="60" height="34" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="50" y="191" fill="${TXT}" font-size="9.5" text-anchor="middle">EVAP</text>
<path d="M 80 187 L 104 187 L 104 204 L 130 204 L 130 46 L 196 46" fill="none" stroke="${VAP}" stroke-width="5" stroke-linejoin="round"/>
<rect x="107" y="198" width="20" height="6" rx="2" fill="rgba(245,166,35,0.55)"/>
<text x="140" y="208" fill="${MUT}" font-size="9">trap at the base</text>
<path d="M 142 170 L 142 70" stroke="${LIQ}" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#orr-l)"/>
<text x="150" y="116" fill="${LIQ}" font-size="9">oil is dragged</text>
<text x="150" y="128" fill="${LIQ}" font-size="9">up by the gas</text>
<text x="26" y="100" fill="${VAP}" font-size="9">gas velocity</text>
<text x="26" y="112" fill="${VAP}" font-size="9">must stay</text>
<text x="26" y="124" fill="${VAP}" font-size="9">≈ 5 m/s</text>
<text x="150" y="36" fill="${TXT}" font-size="9" text-anchor="middle">to compressor</text>
<path d="M 250 200 L 292 200" fill="none" stroke="${VAP}" stroke-width="5"/>
<path d="M 292 200 L 292 62" fill="none" stroke="${VAP}" stroke-width="5" stroke-linejoin="round"/>
<path d="M 292 200 L 322 200 L 322 216 L 346 216 L 346 200 L 376 200 L 376 62" fill="none" stroke="${VAP}" stroke-width="5" stroke-linejoin="round"/>
<path d="M 292 62 L 376 62" fill="none" stroke="${VAP}" stroke-width="5"/>
<path d="M 334 62 L 334 44 L 398 44" fill="none" stroke="${VAP}" stroke-width="5" stroke-linejoin="round"/>
<rect x="324" y="209" width="20" height="7" rx="2" fill="rgba(245,166,35,0.55)"/>
<text x="240" y="190" fill="${MUT}" font-size="8.5">suction in</text>
<text x="366" y="34" fill="${TXT}" font-size="9" text-anchor="middle">to compressor</text>
<text x="0" y="0" fill="${MUT}" font-size="9" text-anchor="middle" transform="translate(283 130) rotate(-90)">small riser</text>
<text x="0" y="0" fill="${MUT}" font-size="9" text-anchor="middle" transform="translate(387 130) rotate(-90)">large riser</text>
<text x="392" y="206" fill="${LIQ}" font-size="9">oil seal forms</text>
<text x="392" y="218" fill="${LIQ}" font-size="9">at part load</text>
<text x="112" y="228" fill="${MUT}" font-size="8.5" text-anchor="middle">keep the riser above ≈5 m/s, or the oil</text>
<text x="112" y="239" fill="${MUT}" font-size="8.5" text-anchor="middle">film slides back down and starves the</text>
<text x="112" y="250" fill="${MUT}" font-size="8.5" text-anchor="middle">compressor of lubrication</text>
<text x="348" y="228" fill="${GOOD}" font-size="8.5" text-anchor="middle">at part load the trap seals the large riser,</text>
<text x="348" y="239" fill="${GOOD}" font-size="8.5" text-anchor="middle">so all the gas goes up the small one —</text>
<text x="348" y="250" fill="${GOOD}" font-size="8.5" text-anchor="middle">velocity, and oil return, restored</text>
<defs><marker id="orr-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker></defs></svg>`,
    },

    "absorption-cycle": {
      caption: "An absorption machine runs the same evaporator, condenser and expansion device as any other system — but the compressor is replaced by a thermal one: the absorber soaks the vapour into a liquid, a small pump raises its pressure, and heat in the generator boils it back out.",
      svg: `<svg viewBox="0 0 460 240" role="img" aria-label="The absorption cycle drawn as a loop: heat entering the generator boils refrigerant vapour off to the condenser, the liquid passes through an expansion device to the evaporator where it absorbs the useful cooling load, and the vapour is then soaked up in the absorber and pumped back to the generator, so the absorber, pump and generator together form a thermal compressor in place of a mechanical one">
<rect x="16" y="30" width="148" height="172" rx="12" fill="none" stroke="${GOOD}" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="48" y="102" fill="${GOOD}" font-size="8.5" text-anchor="middle">THERMAL</text>
<text x="48" y="114" fill="${GOOD}" font-size="8.5" text-anchor="middle">COMPRESSOR</text>
<text x="48" y="128" fill="${MUT}" font-size="8" text-anchor="middle">absorber + pump</text>
<text x="48" y="139" fill="${MUT}" font-size="8" text-anchor="middle">+ generator</text>
<rect x="40" y="40" width="110" height="42" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="95" y="66" fill="${TXT}" font-size="10" text-anchor="middle">GENERATOR</text>
<rect x="310" y="40" width="110" height="42" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="365" y="66" fill="${TXT}" font-size="10" text-anchor="middle">CONDENSER</text>
<rect x="310" y="152" width="110" height="42" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="365" y="178" fill="${TXT}" font-size="10" text-anchor="middle">EVAPORATOR</text>
<rect x="40" y="152" width="110" height="42" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="95" y="178" fill="${TXT}" font-size="10" text-anchor="middle">ABSORBER</text>
<path d="M 95 18 L 95 36" stroke="${HOT}" stroke-width="2.5" marker-end="url(#abs-h)"/>
<text x="95" y="13" fill="${HOT}" font-size="9.5" text-anchor="middle">HEAT IN — steam, gas or solar</text>
<path d="M 155 61 L 305 61" stroke="${HOT}" stroke-width="3" marker-end="url(#abs-h)"/>
<text x="230" y="54" fill="${HOT}" font-size="9" text-anchor="middle">refrigerant vapour boiled out</text>
<path d="M 380 38 L 380 20" stroke="${HOT}" stroke-width="2.5" marker-end="url(#abs-h)"/>
<text x="380" y="14" fill="${HOT}" font-size="9" text-anchor="middle">heat out</text>
<path d="M 365 86 L 365 104" stroke="${LIQ}" stroke-width="3" marker-end="url(#abs-q)"/>
<text x="372" y="98" fill="${LIQ}" font-size="8.5">liquid</text>
<path d="M 365 108 L 377 118 L 365 128 L 353 118 Z" fill="none" stroke="${FLASH}" stroke-width="2"/>
<text x="382" y="122" fill="${FLASH}" font-size="9">expansion</text>
<path d="M 365 132 L 365 148" stroke="${FLASH}" stroke-width="3" marker-end="url(#abs-f)"/>
<path d="M 442 173 L 426 173" stroke="${VAP}" stroke-width="2.5" marker-end="url(#abs-v)"/>
<text x="365" y="210" fill="${VAP}" font-size="9" text-anchor="middle">heat IN — the useful cooling</text>
<path d="M 305 173 L 155 173" stroke="${VAP}" stroke-width="3" marker-end="url(#abs-v)"/>
<text x="230" y="166" fill="${VAP}" font-size="9" text-anchor="middle">vapour drawn into the absorber</text>
<text x="95" y="210" fill="${HOT}" font-size="9" text-anchor="middle">heat OUT as vapour is absorbed</text>
<path d="M 95 148 L 95 132" stroke="${GOOD}" stroke-width="3" marker-end="url(#abs-g)"/>
<circle cx="95" cy="117" r="12" fill="none" stroke="${GOOD}" stroke-width="2"/>
<text x="95" y="121" fill="${GOOD}" font-size="10" text-anchor="middle">P</text>
<path d="M 95 102 L 95 86" stroke="${GOOD}" stroke-width="3" marker-end="url(#abs-g)"/>
<path d="M 138 86 L 138 148" stroke="${MUT}" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#abs-m)"/>
<text x="0" y="0" fill="${MUT}" font-size="8" text-anchor="middle" transform="translate(148 120) rotate(-90)">weak solution</text>
<text x="230" y="230" fill="${GOOD}" font-size="9.5" text-anchor="middle">no mechanical compressor — heat and a small pump do the work</text>
<defs>
<marker id="abs-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker>
<marker id="abs-q" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="abs-f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${FLASH}"/></marker>
<marker id="abs-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
<marker id="abs-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${GOOD}"/></marker>
<marker id="abs-m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${MUT}"/></marker>
</defs></svg>`,
    },

    "transformer-core": {
      caption: "A transformer has no moving parts: the primary makes a changing flux in the laminated core, the core carries it to the secondary, and the turns ratio decides everything — volts up means amps down, because the kVA on both sides is very nearly the same.",
      svg: `<svg viewBox="0 0 460 222" role="img" aria-label="A transformer: a laminated rectangular core with a primary winding of Np turns on the left limb and a secondary winding of Ns turns on the right limb, magnetic flux circulating in the core links both windings, and the ratio Vp over Vs equals Np over Ns equals Is over Ip">
<rect x="150" y="45" width="170" height="125" fill="none" stroke="${MUT}" stroke-width="2.5"/>
<rect x="182" y="72" width="106" height="71" fill="none" stroke="${MUT}" stroke-width="2.5"/>
<g stroke="${LINE}" stroke-width="1">
<line x1="200" y1="145" x2="200" y2="168"/><line x1="225" y1="145" x2="225" y2="168"/><line x1="250" y1="145" x2="250" y2="168"/><line x1="275" y1="145" x2="275" y2="168"/>
</g>
<g stroke="${VAP}" stroke-width="3.5" stroke-linecap="round">
<line x1="138" y1="80" x2="194" y2="80"/><line x1="138" y1="92" x2="194" y2="92"/><line x1="138" y1="104" x2="194" y2="104"/><line x1="138" y1="116" x2="194" y2="116"/><line x1="138" y1="128" x2="194" y2="128"/>
</g>
<g stroke="${LIQ}" stroke-width="3.5" stroke-linecap="round">
<line x1="276" y1="80" x2="332" y2="80"/><line x1="276" y1="92" x2="332" y2="92"/><line x1="276" y1="104" x2="332" y2="104"/><line x1="276" y1="116" x2="332" y2="116"/><line x1="276" y1="128" x2="332" y2="128"/>
</g>
<text x="68" y="62" fill="${VAP}" font-size="10" text-anchor="middle">PRIMARY</text>
<text x="68" y="80" fill="${MUT}" font-size="9" text-anchor="middle">Np turns</text>
<text x="68" y="94" fill="${MUT}" font-size="9" text-anchor="middle">Vp volts</text>
<text x="68" y="108" fill="${MUT}" font-size="9" text-anchor="middle">Ip amps</text>
<path d="M 98 140 L 130 140" stroke="${VAP}" stroke-width="2" marker-end="url(#trf-v)"/>
<text x="66" y="144" fill="${MUT}" font-size="8.5" text-anchor="middle">a.c. supply in</text>
<text x="392" y="62" fill="${LIQ}" font-size="10" text-anchor="middle">SECONDARY</text>
<text x="392" y="80" fill="${MUT}" font-size="9" text-anchor="middle">Ns turns</text>
<text x="392" y="94" fill="${MUT}" font-size="9" text-anchor="middle">Vs volts</text>
<text x="392" y="108" fill="${MUT}" font-size="9" text-anchor="middle">Is amps</text>
<path d="M 336 140 L 368 140" stroke="${LIQ}" stroke-width="2" marker-end="url(#trf-l)"/>
<text x="404" y="144" fill="${MUT}" font-size="8.5" text-anchor="middle">out to the load</text>
<path d="M 196 58 L 274 58" stroke="${GOOD}" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#trf-g)"/>
<text x="282" y="62" fill="${GOOD}" font-size="10">Φ</text>
<text x="235" y="100" fill="${MUT}" font-size="9" text-anchor="middle">the same flux</text>
<text x="235" y="113" fill="${MUT}" font-size="9" text-anchor="middle">links both windings</text>
<text x="235" y="182" fill="${MUT}" font-size="8.5" text-anchor="middle">laminated core: thin insulated plates cut eddy currents</text>
<text x="230" y="200" fill="${TXT}" font-size="11.5" text-anchor="middle">Vp ÷ Vs = Np ÷ Ns = Is ÷ Ip</text>
<text x="230" y="216" fill="${GOOD}" font-size="9.5" text-anchor="middle">step the volts up and the amps step down — the kVA barely changes</text>
<defs>
<marker id="trf-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
<marker id="trf-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="trf-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${GOOD}"/></marker>
</defs></svg>`,
    },

    "two-stage-compression": {
      caption: "Ask one compressor to span a huge pressure range and it overheats and loses volumetric efficiency. Split the lift in two, cool the gas between the stages, and each compressor only has to manage a modest compression ratio.",
      svg: `<svg viewBox="0 0 460 238" role="img" aria-label="A two-stage booster system: the evaporator feeds a low-stage compressor, its discharge is cooled in an intercooler or flash vessel at the interstage pressure, a high-stage compressor lifts it to the condenser, and the liquid returns through two expansion stages, so each compressor only handles part of the total pressure lift">
<rect x="24" y="40" width="96" height="40" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="72" y="58" fill="${TXT}" font-size="9.5" text-anchor="middle">LOW-STAGE</text>
<text x="72" y="71" fill="${TXT}" font-size="9.5" text-anchor="middle">(BOOSTER)</text>
<rect x="170" y="40" width="120" height="40" rx="8" fill="none" stroke="${FLASH}" stroke-width="2"/>
<text x="230" y="58" fill="${TXT}" font-size="9.5" text-anchor="middle">INTERCOOLER /</text>
<text x="230" y="71" fill="${TXT}" font-size="9.5" text-anchor="middle">FLASH VESSEL</text>
<rect x="340" y="40" width="96" height="40" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="388" y="58" fill="${TXT}" font-size="9.5" text-anchor="middle">HIGH-STAGE</text>
<text x="388" y="71" fill="${TXT}" font-size="9.5" text-anchor="middle">COMPRESSOR</text>
<rect x="340" y="118" width="96" height="38" rx="8" fill="none" stroke="${HOT}" stroke-width="2"/>
<text x="388" y="141" fill="${TXT}" font-size="9.5" text-anchor="middle">CONDENSER</text>
<rect x="24" y="176" width="96" height="38" rx="8" fill="none" stroke="${VAP}" stroke-width="2"/>
<text x="72" y="199" fill="${TXT}" font-size="9.5" text-anchor="middle">EVAPORATOR</text>
<path d="M 72 172 L 72 84" stroke="${VAP}" stroke-width="3" marker-end="url(#tsc-v)"/>
<text x="0" y="0" fill="${VAP}" font-size="8.5" text-anchor="middle" transform="translate(62 128) rotate(-90)">low-pressure vapour</text>
<path d="M 124 60 L 166 60" stroke="${HOT}" stroke-width="3" marker-end="url(#tsc-h)"/>
<text x="145" y="32" fill="${HOT}" font-size="8.5" text-anchor="middle">hot gas</text>
<path d="M 294 60 L 336 60" stroke="${VAP}" stroke-width="3" marker-end="url(#tsc-v)"/>
<text x="315" y="32" fill="${VAP}" font-size="8.5" text-anchor="middle">cooled gas</text>
<path d="M 388 84 L 388 114" stroke="${HOT}" stroke-width="3" marker-end="url(#tsc-h)"/>
<text x="396" y="102" fill="${HOT}" font-size="8.5">hot discharge</text>
<path d="M 336 137 L 314 137" stroke="${LIQ}" stroke-width="3" marker-end="url(#tsc-l)"/>
<path d="M 300 128 L 310 137 L 300 146 L 290 137 Z" fill="none" stroke="${FLASH}" stroke-width="2"/>
<path d="M 286 137 L 272 137 L 272 84" fill="none" stroke="${FLASH}" stroke-width="3" stroke-linejoin="round" marker-end="url(#tsc-f)"/>
<text x="300" y="164" fill="${FLASH}" font-size="8.5" text-anchor="middle">1st expansion → interstage pressure</text>
<path d="M 150 84 L 150 118" stroke="${LIQ}" stroke-width="3" marker-end="url(#tsc-l)"/>
<path d="M 150 123 L 160 132 L 150 141 L 140 132 Z" fill="none" stroke="${FLASH}" stroke-width="2"/>
<path d="M 150 146 L 150 195 L 124 195" fill="none" stroke="${FLASH}" stroke-width="3" stroke-linejoin="round" marker-end="url(#tsc-f)"/>
<text x="136" y="136" fill="${FLASH}" font-size="8.5" text-anchor="end">2nd expansion</text>
<text x="214" y="100" fill="${GOOD}" font-size="8.5" text-anchor="middle">the interstage pressure</text>
<text x="214" y="112" fill="${GOOD}" font-size="8.5" text-anchor="middle">splits the squeeze into</text>
<text x="214" y="124" fill="${GOOD}" font-size="8.5" text-anchor="middle">two smaller steps</text>
<text x="230" y="230" fill="${GOOD}" font-size="9" text-anchor="middle">one stage at 20:1 becomes two stages near 4.5:1 — cooler discharge, better volumetric efficiency</text>
<defs>
<marker id="tsc-h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${HOT}"/></marker>
<marker id="tsc-l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${LIQ}"/></marker>
<marker id="tsc-f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${FLASH}"/></marker>
<marker id="tsc-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker>
</defs></svg>`,
    },

    "duct-static-velocity": {
      caption: "Air in a duct carries its pressure in two pockets: static pressure pushing outward on the walls, and velocity pressure carried in the movement. A pitot tube faces the flow to catch both, taps the wall for static alone, and the difference is the velocity pressure.",
      svg: `<svg viewBox="0 0 460 226" role="img" aria-label="A duct section with a pitot tube facing into the airflow and a static tapping in the wall, both piped to a manometer, with a stacked bar below showing that total pressure is static pressure plus velocity pressure at that one section">
<line x1="40" y1="58" x2="420" y2="58" stroke="${LINE}" stroke-width="2.5"/>
<line x1="40" y1="142" x2="420" y2="142" stroke="${LINE}" stroke-width="2.5"/>
<text x="404" y="72" fill="${MUT}" font-size="9" text-anchor="end">duct</text>
<path d="M 58 118 L 128 118" stroke="${VAP}" stroke-width="3" marker-end="url(#dsv-v)"/>
<text x="93" y="110" fill="${VAP}" font-size="9" text-anchor="middle">airflow</text>
<path d="M 250 30 L 250 108 L 232 108" fill="none" stroke="${TXT}" stroke-width="3" stroke-linejoin="round"/>
<circle cx="254" cy="92" r="3" fill="none" stroke="${MUT}" stroke-width="1.5"/>
<path d="M 250 30 L 250 20 L 296 20" fill="none" stroke="${TXT}" stroke-width="1.4"/>
<path d="M 257 92 L 276 92 L 276 36 L 296 36" fill="none" stroke="${MUT}" stroke-width="1.4"/>
<rect x="296" y="14" width="104" height="32" rx="6" fill="none" stroke="${MUT}" stroke-width="1.8"/>
<text x="348" y="28" fill="${TXT}" font-size="9" text-anchor="middle">manometer</text>
<text x="348" y="40" fill="${MUT}" font-size="8.5" text-anchor="middle">difference = Pv</text>
<text x="282" y="74" fill="${MUT}" font-size="8">static tap</text>
<text x="228" y="132" fill="${TXT}" font-size="8" text-anchor="end">tip faces the flow → catches Pt</text>
<text x="292" y="136" fill="${MUT}" font-size="8.5" text-anchor="middle">pitot tube</text>
<line x1="250" y1="146" x2="250" y2="160" stroke="${MUT}" stroke-dasharray="3 3"/>
<text x="140" y="180" fill="${MUT}" font-size="9" text-anchor="end">at this section:</text>
<path d="M 150 164 L 334 164" stroke="${GOOD}" stroke-width="1.4"/>
<line x1="150" y1="164" x2="150" y2="170" stroke="${GOOD}" stroke-width="1.4"/>
<line x1="334" y1="164" x2="334" y2="170" stroke="${GOOD}" stroke-width="1.4"/>
<text x="242" y="158" fill="${GOOD}" font-size="9.5" text-anchor="middle">total pressure Pt = 170 Pa</text>
<rect x="150" y="172" width="130" height="12" rx="2" fill="rgba(245,166,35,0.55)" stroke="${LIQ}"/>
<rect x="280" y="172" width="54" height="12" rx="2" fill="rgba(79,195,247,0.35)" stroke="${VAP}"/>
<line x1="215" y1="186" x2="215" y2="194" stroke="${LIQ}"/>
<text x="215" y="206" fill="${LIQ}" font-size="8.5" text-anchor="middle">static Ps = 120 Pa</text>
<line x1="307" y1="186" x2="307" y2="194" stroke="${VAP}"/>
<text x="330" y="206" fill="${VAP}" font-size="8.5" text-anchor="middle">velocity Pv = 50 Pa</text>
<text x="230" y="222" fill="${TXT}" font-size="10.5" text-anchor="middle">Pt = Ps + Pv</text>
<defs><marker id="dsv-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${VAP}"/></marker></defs></svg>`,
    },

  };

  const api = { FIGURES, ids: Object.keys(FIGURES) };
  root.RefrigFigures = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
