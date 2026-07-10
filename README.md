# Refrigeration Cycle Simulator

An interactive, animated **vapour-compression refrigeration training tool**.
Watch the refrigerant flow around the loop, change colour as it changes state,
read the gauges like a technician, diagnose hidden faults, and practise the
pressure–temperature relationship — all in a plain static site.

## What it teaches

- **The four core components** — compressor, condenser, metering device, evaporator — plus a liquid receiver.
- **How refrigerant changes state** as it flows: low-pressure vapour → hot high-pressure gas → high-pressure liquid → cold flash mixture → back to vapour.
- **Where heat moves**: absorbed at the evaporator, rejected at the condenser, work added at the compressor.
- **The P–h (pressure–enthalpy) diagram** with a live dot showing exactly where the refrigerant is in its cycle.
- **How to read gauges**: an analog gauge manifold with saturation-temperature PT rings, plus a PT chart and trainer for learning correct running pressures.
- **Fault diagnosis**: eleven system conditions with realistic gauge signatures, and a technician quiz mode that hides the fault and makes you find it.

## Interactive features

- **Guided tour** — the "Guided Tour" button walks step-by-step through the
  whole cycle. Each step highlights one component, dims the rest of the loop,
  fills in its data card, and parks the P–h dot at that stage.
- **Live sliders** — *Compressor speed* and *Evaporator load* drive a small
  operating-point model. Every readout, the gauges, the info cards, and the
  P–h cycle update in real time. "Reset" returns to the nominal point.
- **Gauge manifold** — low- and high-side analog gauges with an inner
  saturation-temperature ring, like the PT ring on a real gauge set. Readouts
  are **gauge pressure** (above atmospheric), the way field instruments read.
- **Unit system** — pressures in **kPa, bar or psi**; temperatures in **°C or
  °F**. Your choice is remembered. The P–h chart stays absolute, as
  thermodynamic charts are.
- **Fault simulation** — pick from **ten faults** (low charge, overcharge,
  dirty condenser, condenser fan failure, iced evaporator, restricted
  filter-drier, TXV stuck closed, TXV stuck open, non-condensables,
  leaking compressor valves) and the whole system reacts the way it would in
  the field: pressures, superheat, subcooling, discharge temperature, COP and
  capacity all shift, and a banner explains the diagnostic signature. The
  fault also shows on the schematic: phase-change fronts move inside the
  coils, the wrong state spills into the next line (e.g. floodback up the
  suction line), and affected components pulse.
- **Technician Quiz** — the core skill-builder. A random fault (sometimes
  none!), refrigerant and operating point are applied **secretly**: the fault
  selector, banner and performance panel are hidden, so you must read the
  gauges, superheat/subcool and the P–h cycle and name the fault. Exact
  answers score 1 point; a fault with a nearly identical gauge signature (e.g.
  dirty coil vs. failed fan) scores half, with a tip on how you'd tell them
  apart in the field. "Show field clues" reveals what you'd see, hear and feel
  at the machine.
- **PT chart & target-pressure trainer** — an interactive saturation curve for
  the selected refrigerant with the current operating points marked, plus a
  question generator: *"An R134a coil is evaporating at 2 °C — what should the
  low-side gauge read?"* Answers are checked with a tolerance and explained.
- **Compare to healthy** — when a fault is active, the P–h chart can overlay
  the healthy cycle at the same speed/load (dashed green) so you can see
  exactly how the fault reshapes the cycle.
- **Performance panel** — live COP, capacity (relative to the fluid's nominal
  point), refrigeration effect, compressor work, heat rejected and pressure
  ratio, all computed from the cycle enthalpies.
- **Click any component** for a detailed explanation and its in/out states.
- **Start / Stop compressor** eases the flow up and down like the real thing.
- **Accessibility** — pipe states are labelled with text (not colour alone),
  controls are keyboard-operable with visible focus, and animation respects
  `prefers-reduced-motion`.

## Accuracy notes

- **Every refrigerant is backed by its own saturation table**, so each P–h
  dome is that fluid's real shape, and saturation temperatures and cycle
  enthalpies are computed from data rather than hardcoded.
- The property tables are **representative/approximate** (close to standard
  references, embedded for a self-contained static site). R134a is the
  best-calibrated; treat absolute COP comparisons *between* fluids as
  indicative rather than exact. Trends within a fluid — and the fault
  signatures — are the reliable, teachable part.
- The slider and fault models are **directionally correct but qualitative** —
  tuned for intuition, not for engineering design.

## Refrigerants

The numbers are driven by a swappable refrigerant table, so the simulator is
**interchangeable between fluids**. Included presets:

| Fluid | Notes |
|-------|-------|
| **R134a** | Reference fluid — matches the teaching textbook |
| R410A | Modern high-pressure AC blend |
| R22 | Legacy HCFC (phased out) |
| R404A | Low-temperature commercial refrigeration |

> Values are approximate, representative operating points for learning the
> *shape* of the cycle — not for engineering design.

To add another refrigerant, add a saturation table to `TABLES` and an entry to
`REFRIGERANTS` in `js/data.js`. To add a fault, add an entry to `FAULTS`
(gauge signature, diagnosis, field clues) and `VIZ` (how it looks on the
schematic) — the fault selector, quiz and visualisation pick it up
automatically.

## Running it

It's a plain static site — no build step. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder: `python3 -m http.server` then visit `http://localhost:8000`.

## Development & tests

The thermodynamic model, data and unit conversions are plain scripts that are
also `require()`-able in Node, so they're unit-tested without any dependencies:

```sh
npm test          # runs node --test tests/*.test.js — no install needed
```

Tests cover interpolation, saturation lookups, sanity of every fault ×
refrigerant × operating-point combination, fault gauge-signature directions,
and unit conversion/formatting. CI runs them on every push
(`.github/workflows/ci.yml`).

## Deploying to GitHub Pages

1. Push to your default branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**, pick
   the branch and the `/ (root)` folder, and save.
4. Your site will be published at `https://<user>.github.io/<repo>/`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure + the SVG schematic |
| `styles.css` | Dark theme, layout, state colours |
| `js/data.js` | Refrigerant tables, base operating points, fault library, schematic viz params |
| `js/model.js` | Interpolation, saturation lookups, operating-point derivation |
| `js/units.js` | kPa/bar/psi and °C/°F display, gauge-vs-absolute, localStorage prefs |
| `js/gauges.js` | Analog gauge manifold with PT rings |
| `js/pt.js` | PT chart + target-pressure trainer |
| `js/quiz.js` | Technician diagnosis quiz |
| `js/app.js` | Schematic animation, readouts, P–h diagram, tour, wiring |
| `tests/` | Node built-in test-runner suites for model, data and units |
| `docs/REVIEW_AND_ROADMAP.md` | Platform review and the phased roadmap |
