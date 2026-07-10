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

  };

  const api = { FIGURES, ids: Object.keys(FIGURES) };
  root.RefrigFigures = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
