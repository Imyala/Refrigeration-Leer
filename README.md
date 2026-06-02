# Refrigeration Cycle Simulator

An interactive, animated **vapour-compression refrigeration cycle** built for
learning. Watch the refrigerant flow around the loop, change colour as it
changes state, and click any component to learn what it does and how it
transforms the refrigerant.

## What it teaches

- **The four core components** — compressor, condenser, metering device, evaporator — plus a liquid receiver.
- **How refrigerant changes state** as it flows: low-pressure vapour → hot high-pressure gas → high-pressure liquid → cold flash mixture → back to vapour.
- **Where heat moves**: absorbed at the evaporator, rejected at the condenser, work added at the compressor.
- **The P–h (pressure–enthalpy) diagram** with a live dot showing exactly where the refrigerant is in its cycle.

Each pipe segment is colour-coded by refrigerant state, with flowing
particles and animated flow lines so the movement is easy to follow visually.

## Interactive features

- **Guided tour** — the "Guided Tour" button walks step-by-step through the
  whole cycle. Each step highlights one component, dims the rest of the loop,
  fills in its data card, and parks the P–h dot at that stage.
- **Live sliders** — *Compressor speed* and *Evaporator load* drive a small
  operating-point model. Push the speed up and the pressure split widens, the
  discharge gas gets hotter, and flow increases; add evaporator load and the
  low side warms up. Every readout, the info cards, and the P–h cycle update
  in real time. "Reset" returns to the nominal point.
- **Fault simulation** — pick a fault (low charge, dirty/blocked condenser,
  iced/starved evaporator, overcharge) and the whole system reacts the way it
  would in the field: pressures, superheat, subcooling, discharge temperature,
  COP and capacity all shift, and a banner explains the diagnostic signature.
  Great for learning *how to read the gauges*.
- **Performance panel** — live COP, capacity (relative to the fluid's nominal
  point), refrigeration effect, compressor work, heat rejected and pressure
  ratio, all computed from the cycle enthalpies.
- **Click any component** for a detailed explanation and its in/out states.
- **Start / Stop compressor** eases the flow up and down like the real thing.

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

To add another refrigerant, add an entry to the `REFRIGERANTS` object in
`app.js` (pressures, temperatures, and four enthalpy points for the P–h plot).

## Running it

It's a plain static site — no build step. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder: `python3 -m http.server` then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this branch / merge to your default branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**, pick
   the branch and the `/ (root)` folder, and save.
4. Your site will be published at `https://<user>.github.io/<repo>/`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure + the SVG schematic |
| `styles.css` | Dark theme, layout, state colours |
| `app.js` | Refrigerant data + R134a table, operating-point model, animation, P–h diagram, tour, interactivity |
