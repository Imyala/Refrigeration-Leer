# Refrigeration Learning Platform

An interactive **refrigeration training platform**: an animated
vapour-compression simulator with fault diagnosis, plus a structured
**10-module course** (28 lessons with quizzes and saved progress) covering
fundamentals through to repair procedures and safety — all in a plain static
site with no build step.

- **`index.html`** — the simulator: animated cycle, gauge manifold, technician
  quiz, PT trainer.
- **`learn.html`** — the course: lessons, quizzes, final exam & certificate,
  progress tracking, with deep links that open the simulator pre-configured.
- **`teach.html`** — instructor dashboard: cohort progress from student
  exports (with a sample-cohort demo), fully client-side.
- **`about.html`** — "For institutions" landing page: pitch, deployment
  options and the procurement pack.
- **SCORM 1.2 export** — `npm run build:scorm` produces an LMS-importable
  package (Moodle, Canvas, Blackboard, D2L) with gradebook reporting.

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

## The course (learn.html)

A structured curriculum in ten modules / 28 lessons, written for learners
working toward field competence:

1. **Heat, temperature & pressure** — the physics, latent heat, the PT relationship
2. **The vapour-compression cycle** — the four processes, the P–h diagram, a full lap
3. **Components deep-dive** — compressors, metering devices, heat exchangers, accessories
4. **Refrigerants & the environment** — families/numbering, ODP/GWP & law, safety classes
5. **Superheat & subcooling** — measurement technique and the diagnostic matrix
6. **System types** — splits & heat pumps, cool rooms, racks and chillers
7. **Electrical fundamentals** — motors & starting gear, controls, ladder-diagram diagnosis
8. **Fault diagnosis** — the routine, gauge signatures of ten faults, quiz practice
9. **Repair procedures** — recovery, evacuation, charging methods, leaks & brazing
10. **Safety** — refrigerant/pressure/cold hazards, electrical & site safety

Each lesson ends with a **checked quiz** (explanations for every answer);
passing marks the lesson complete, and progress is saved in the browser.
Lessons embed **deep links** that open the simulator pre-configured
(`index.html?r=R404A&fault=lowCharge&speed=120&load=80`, plus `quiz=1`,
`tour=1` and `view=pt`).

### Built for every learner — apprentices to adults

- **Plain-words explanations**: every lesson has a "💡 In plain words" box —
  the same idea retold simply, with analogies (written for readers from
  first-year apprentices up). With the technical text and the live simulator
  demonstrations, every topic is explained at least three ways.
- **Diagrams**: an inline SVG figure library (`js/figures.js`, embedded via
  the `!FIG[id]` directive) illustrates the key ideas — heat flow, the latent
  plateau, the PT curve, gauge reading, cycle loop, P–h legs, TXV balance,
  superheat/subcooling measurement, ladder rungs, recovery hookup, the
  vacuum decay test and more. All captioned and screen-reader labelled.
- **Mark for review**: a "🚩 Confusing? Mark it for review" button on every
  lesson. Flagged lessons collect in **My review list** (sidebar), the
  plain-words box auto-opens on flagged lessons, and un-flagging is a
  one-tap "Got it now ✓". Quizzes started but not yet passed also appear in
  the review list.
- **Supportive quizzes**: framed as practice, not tests. Wrong answers get
  warm, teaching-first feedback ("💡 Not this one — here's the idea…"),
  amber styling instead of red, a one-click fresh try, and encouraging
  progress messages. The exam and Technician Quiz keep the same tone.
- **Spaced repetition (🔁 Practice)**: every question a learner checks in a
  lesson quiz becomes a card in their practice deck, scheduled Anki-style
  (simplified SM-2 in `js/srs.js`): a correct answer pushes the next review
  further out (1 day → 3 days → interval × ease, capped at 6 months); a miss
  brings it back tomorrow and lowers the card's ease. In a session, missed
  cards requeue until answered correctly, answer order is shuffled to defeat
  position memory, and a "Reread the lesson" link is offered on misses. Due
  counts appear in the sidebar and on the course home; when nothing is due,
  the learner is told that waiting *is* the method — with an optional
  "practise ahead". Deliberately calm: no streaks, points or badges.

Lesson content is authored in a small markdown subset (`js/md.js`) directly
inside `js/course1.js` / `js/course2.js` — add a lesson by adding an object
(content, minutes, refs, quiz) to a module's `lessons` array; the navigation,
progress tracking and quizzes pick it up automatically.

**References & alignment:** the course is aligned to Australian practice —
the ARCtick **Refrigerant Handling Code of Practice** (Parts 1 & 2), the
**Ozone Protection and SGG Management Act** licensing scheme (RHL/RTA),
**AS/NZS 3000 / 5149 / 4836** (topic-level citations; standards text is not
reproduced) and the **ARAC manuals** (Boyle, Vols 1 & 2, published by
AIRAH). Every lesson displays its references in an in-lesson panel; the
master bibliography and alignment policy are in `docs/REFERENCES.md`, and
the test suite enforces that every lesson carries references.

### Final exam & certificate

The **Final exam** (sidebar, or the last card on the course home) draws 20
questions — two at random from every module — with an 80% pass mark. Each
attempt is a fresh paper and the best score is kept. Passing unlocks a
**printable certificate of completion** carrying the learner's name, score,
date and a deterministic certificate ID an instructor can verify by
regenerating it. It is evidence of course completion, not a licence.

### For institutions

- **SCORM 1.2** — `npm run build:scorm` builds
  `dist/refrigeration-course-scorm12.zip` for LMS import (Moodle: Add
  activity → SCORM). Completion status and the exam score report to the
  gradebook, and course progress is stored in the LMS (`cmi.suspend_data`)
  so it follows the learner's LMS account across machines.
- **Instructor dashboard** — `teach.html` loads any number of student
  progress exports (Course overview → *Export progress*) into a cohort
  table: per-module completion, exam results, overall %, CSV download.
  Entirely client-side; no student data leaves the browser.
- **Curriculum mapping** — see `docs/CURRICULUM_MAPPING.md` for indicative
  mapping to the UEE training package (Cert III RAC), EPA 608 and typical
  university learning outcomes.
- **Procurement pack** — `docs/` also contains the sales & pricing overview
  with a one-term pilot playbook (`SALES_OVERVIEW.md`), a WCAG 2.1 AA
  conformance statement (`ACCESSIBILITY_CONFORMANCE.md`), a privacy &
  security one-pager (`PRIVACY_SECURITY.md`) and a step-by-step LMS
  integration guide (`LMS_INTEGRATION_GUIDE.md`). The public-facing pitch
  lives at `about.html`.

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
| `index.html` | Simulator page structure + the SVG schematic |
| `learn.html` | Course page (sidebar navigation + lesson view) |
| `styles.css` | Dark theme, layout, state colours, course styles |
| `js/data.js` | Refrigerant tables, base operating points, fault library, schematic viz params |
| `js/model.js` | Interpolation, saturation lookups, operating-point derivation |
| `js/units.js` | kPa/bar/psi and °C/°F display, gauge-vs-absolute, localStorage prefs |
| `js/gauges.js` | Analog gauge manifold with PT rings |
| `js/pt.js` | PT chart + target-pressure trainer |
| `js/quiz.js` | Technician diagnosis quiz |
| `js/app.js` | Schematic animation, readouts, P–h diagram, tour, deep links, wiring |
| `js/md.js` | Markdown-subset renderer for lesson content (incl. !SIM directive) |
| `js/course1.js`, `js/course2.js` | Course content: 10 modules, 28 lessons, quizzes |
| `js/learn.js` | Course UI: routing, progress store, lesson quizzes, exam, certificate, export/import |
| `js/exam.js` | Exam sampling + certificate code (pure, tested) |
| `js/scorm.js` | SCORM 1.2 runtime adapter (LMS reporting + progress in suspend_data) |
| `js/teach.js`, `teach.html` | Instructor cohort dashboard |
| `tools/build-scorm.js` | SCORM 1.2 package builder (`npm run build:scorm`) |
| `tests/` | Node built-in test-runner suites: model, units, markdown, course, exam, SCORM, packaging |
| `docs/REVIEW_AND_ROADMAP.md` | Platform review, phased roadmap and status |
| `docs/CURRICULUM_MAPPING.md` | Indicative mapping to UEE / EPA 608 / university outcomes |
