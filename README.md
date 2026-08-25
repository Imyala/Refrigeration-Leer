# Refrigeration Learning Platform

An interactive **refrigeration training platform**: an animated
vapour-compression simulator with fault diagnosis, a service-procedure
trainer, a circuit builder and a diagnostic workshop, plus a structured
**64-module course** (516 lessons and 2,094 quiz questions with saved
progress) that runs from first principles through to full trade-course depth
in refrigeration, air conditioning and electrical principles — all in a plain
static site with no build step.

The course is organised into five **streams**: a guided **core program**, two
technical refrigeration and air-conditioning streams, an **electrical
principles** stream, and a **capstone** stream that revises for the
end-of-apprenticeship knowledge assessment. See [The course](#the-course-learnhtml) below, and
`docs/SOURCE_COVERAGE.md` for the module-by-module breakdown.

- **`index.html`** — "Start here": the front door. The staged pathway through
  the core program, plus cards for the four specialist streams and the tools.
- **`simulator.html`** — the simulator: animated cycle, gauge manifold,
  technician quiz, PT trainer.
- **`service.html`** — the Service Bay: a hands-on service-procedure trainer
  (choose and prove your gauges, fit and purge hoses, work the service valves),
  graded on the order of work.
- **`build.html`** — the System Builder: pipe a circuit yourself, component by
  component in flow order, and be told whether it would run and where each
  accessory belongs.
- **`diagnose.html`** — the Fault Diagnosis Workshop: a machine with a hidden
  fault and no numbers given. Choose what to measure, fit the instrument, work
  the numbers, commit to a diagnosis.
- **`learn.html`** — the course: lessons, quizzes, per-stream and
  whole-program exams & certificate, progress tracking, with deep links that
  open the simulator pre-configured.
- **`teach.html`** — instructor dashboard: cohort progress from student
  exports (with a sample-cohort demo), fully client-side.
- **`about.html`** — "For institutions" landing page: pitch, deployment
  options and the procurement pack.
- **SCORM 1.2 export** — `npm run build:scorm` produces an LMS-importable
  package (Moodle, Canvas, Blackboard, D2L) with gradebook reporting.

## What it teaches

The **core program** teaches the system itself, hands-on with the simulator:

- **The four core components** — compressor, condenser, metering device, evaporator — plus a liquid receiver.
- **How refrigerant changes state** as it flows: low-pressure vapour → hot high-pressure gas → high-pressure liquid → cold flash mixture → back to vapour.
- **Where heat moves**: absorbed at the evaporator, rejected at the condenser, work added at the compressor.
- **The P–h (pressure–enthalpy) diagram** with a live dot showing exactly where the refrigerant is in its cycle.
- **How to read gauges**: an analog gauge manifold with saturation-temperature PT rings, plus a PT chart and trainer for learning correct running pressures.
- **Fault diagnosis**: eleven system conditions with realistic gauge signatures, and a technician quiz mode that hides the fault and makes you find it.

The four **specialist streams** then carry the syllabus to trade-course
depth:

- **Refrigeration & air-conditioning 1** — principles and thermodynamics,
  compressors, condensers and cooling towers, evaporators, metering devices,
  ancillary equipment, domestic/commercial/industrial systems, hand, power and
  specialised tools, brazing and welding, electrical principles, components,
  wiring, motors, electrical testing and measuring instruments.
- **Refrigeration & air-conditioning 2** — alternative refrigeration systems,
  piping and line sizing, psychrometrics and air treatment, air-conditioning
  systems, service procedure, load estimating and equipment selection, service
  charts and cycle analysis, diagnosis and repair, installation and
  maintenance, commissioning and balancing, technical communication, drawing
  interpretation, and controls and control drawings.
- **Electrical principles** — working safely in the energy sector, electrical
  fundamentals and circuits, resistors, capacitors, magnetism and
  electromagnetism, DC machines, sustainable practice, single- and three-phase
  AC, transformers, AC machines and motor protection, control circuits, and
  trade calculations.
- **Capstone exam preparation** — final-stage revision for the written
  knowledge assessment sat at the end of an Australian Certificate III in
  Refrigeration and Air Conditioning: how the assessment works, the limits of
  a restricted electrical licence and duty of care, the mandatory electrical
  tests and their acceptance values, calculations under exam conditions,
  installation, pressure testing and commissioning, recovery and the Code of
  Practice, TX valves and superheat, components and piping schematics,
  refrigerant classification and site safety, and wiring diagrams, safeties
  and control circuits. Written practice questions with model answers you
  reveal after attempting them — all original material written to the
  assessment's published scope, not a copy of any real paper.

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

## The Service Bay (service.html)

The simulator's hands-on sibling: instead of watching a system, the learner
**works on one**. A running compressor with two stem-type service valves and
a gauge manifold, where every step is the learner's own action — starting
where the job really starts, at the van:

- **Choose the hoses** — four sets are offered and only one is right. The
  others fail for a reason worth learning: no low-loss shut-off ends (every
  hose full of refrigerant goes to atmosphere on disconnection), a perished
  set with a weeping fitting, and a light-duty automotive set that is
  under-rated for the system's high side and will not fit the ports anyway.
- **Prove the gauges** — check them open to atmosphere before they go near
  the system. A gauge that is out reads wrong all day, and every number taken
  from it is wrong with it.
- **Remove/refit caps** — spindle caps and gauge-port caps, clickable on the
  rig or via buttons.
- **Connect hoses** — only onto an uncapped port, hand-tight, and they hold
  air until purged.
- **Work the spindles** — back-seat (port isolated), crack (pressure to the
  gauge port), front-seat (line closed). The spindle cap must come off first.
- **Purge hoses** — a brief puff at the manifold nut, only possible with
  pressure behind the hose; skipping it leaves "air in hose" flagged.
- **Take readings** — the gauges only read once hoses are on and valves
  cracked; values come from the thermodynamic model with live PT saturation
  temperatures.
- **Realistic consequences** — cracking a bare open port vents refrigerant
  (hissing, and a gram counter the Code of Practice would care about);
  breaking a hose off a live port hisses; **front-seating the discharge on a
  running compressor trips the HP cut-out**; front-seating the suction
  demonstrates a pump-down.
- **Pack up as found** — the job isn't complete until valves are
  back-seated, hoses off and every cap refitted. The summary is honest about
  grams lost and reframes mistakes as lessons banked.
- **The order of work is graded**, against the eight taught steps: choose
  hoses → prove the gauges → fit the high-side hose → crack the discharge
  port → connect the low-side hose → check the gauges → purge the low hose →
  crack the suction port last. Doing the same actions in a different order
  still gets you readings — and still puts air in the system or vents
  refrigerant — so any step done out of turn is marked and explained.
  Purging the low side while the high side is already live sweeps the
  manifold and both hoses in one puff, which is the reason the order is worth
  teaching at all.

The procedure rules live in a pure, unit-tested state machine
(`js/servicebay.js`); the UI (`js/service-ui.js`) renders the rig and wires
the clicks.

## The System Builder (build.html)

Instead of reading a schematic, the learner **draws one**. Components are
dragged from a palette of **30** into a closed loop in flow order, starting at
the compressor — because that is where a circuit is always read from — and a
rules engine decides whether that circuit would actually run.

- **Four runs of pipe** — discharge line, liquid line, distribution and
  suction line — and two questions asked of every accessory: is it in the
  right run, and is it on the right side of its neighbours? Nearly every real
  placement mistake is one of those two.
- **Three severities.** An **error** means the system would not run. A
  **warning** means it would run, but the component is not where it does its
  best work. A **tip** is good practice worth knowing.
- **Every finding explains itself**, the way a teacher would rather than the
  way a validator would: a sight glass ahead of the drier is told it is
  reading moisture the drier has not removed yet; an accumulator in the liquid
  line is told it can only intercept floodback in the suction line.
- **Five scenarios with written briefs** — the simplest system that works, a
  commercial cool room, a pump-down circuit, a reverse-cycle heat pump, and a
  low-temperature system with capacity protection — plus a **free-build** mode
  with no brief. A build is graded on correctness first, then completeness
  against the brief.
- **"Explain this circuit"** walks the loop in flow order and says what the
  refrigerant is doing in each run and what each component is there for.
- **Keyboard equivalent of the drag** — every placed component carries
  move-earlier / move-later / remove buttons, so the loop can be built and
  reordered entirely from the keyboard.

The rules are pure and unit-tested (`js/circuit.js`); the UI (`js/build-ui.js`,
`styles-build.css`) handles the palette, the drag-and-drop and the analysis
panel.

## The Fault Diagnosis Workshop (diagnose.html)

The simulator can apply a fault and show you the answer. This page models the
part that matters on site: **you do not get the numbers**. A system is given a
hidden fault, and the learner has to decide what to measure, fit the
instrument, and work out what the reading means.

- **13 measurement points** are placeable on the schematic — clamp-on
  temperature probes on the pipe runs and in both airstreams, gauges on the
  two service valves, and a clamp meter on the compressor supply. Each names
  the instrument you would actually use and why the reading is worth taking
  ("measure superheat at the coil outlet, not at the compressor, or you are
  measuring suction line gain as well").
- **7 derived values** — superheat, total (compressor) superheat, subcooling,
  condenser TD, evaporator TD, air split across the evaporator and condenser
  air rise — are calculated **only once the readings they depend on have
  actually been taken**. Until then the panel says exactly which half is
  missing and why that reading is needed: superheat is two numbers, and one
  without the other tells you nothing.
- **An evidence panel** reads the instruments the way a technician narrates a
  job, and names the classic signatures: high superheat with low subcooling is
  undercharge; high superheat with high subcooling is a restriction.
- **Commit to a diagnosis, then be marked.** A full mark for the exact fault,
  half for one from the same gauge-signature family (a dirty coil and a failed
  fan read the same — you have to look at the machine, and the feedback says
  how you would tell them apart), nothing for a miss. **Sometimes the system
  is healthy**, and being willing to say so is part of the exercise.
- **How you went about it is rated too** — measuring the four readings that
  decide most faults (both gauges, the evaporator outlet, the liquid line)
  beats measuring everything the kit can measure: field time is real, and so
  is disturbing a system that is running.

The diagnostic logic is pure and unit-tested (`js/diagnose.js`), driven by the
same refrigerant tables and cycle model as the simulator; the UI lives in
`js/diagnose-ui.js` and `styles-diagnose.css`.

## The course (learn.html)

A structured curriculum of **64 modules / 516 lessons / 2,094 quiz
questions**, written for learners working toward field competence. Modules
are grouped into five **streams**, declared in `js/streams.js`:

| Stream | Id | Modules | Lessons | What it is |
|--------|----|--------:|--------:|------------|
| **Core program** | `core` | 11 | 39 | The guided pathway — start here |
| **Refrigeration & air-conditioning 1** | `v1` | 16 | 151 | The first-year technical stream, from *Australian Refrigeration and Air-conditioning*, Vol 1 (Boyle, AIRAH), chapters 1–16 |
| **Refrigeration & air-conditioning 2** | `v2` | 13 | 112 | The second-year / post-trade stream, from Vol 2 (Boyle, 5th ed., AIRAH), chapters 1–13 |
| **Electrical principles** | `elec` | 14 | 135 | The electrical trade stream, from *Electrical Principles for the Electrical Trades*, 8th ed. (McGraw-Hill Australia), chapters 1–14 |
| **Capstone exam preparation** | `capstone` | 10 | 79 | Final-stage revision for the end-of-apprenticeship knowledge assessment — original practice questions with model answers, written to the assessment's published scope |

The sidebar groups modules under **collapsible stream headings** (which
stream is open is remembered per browser), and the course overview page has a
section per stream with its own progress and exam. A module with no `stream`
field belongs to `core`, so every progress key and deep link that predates
streams still works untouched.

The **core program** is the guided pathway, unchanged by the expansion:

1. **Heat, temperature & pressure** — the physics, latent heat, the PT relationship
2. **The vapour-compression cycle** — the four processes, the P–h diagram, a full lap
3. **Components deep-dive** — compressors, metering devices, heat exchangers, accessories
4. **Refrigerants & the environment** — families/numbering, ODP/GWP & law, safety classes
5. **Superheat & subcooling** — measurement technique and the diagnostic matrix
6. **System types in the field** — splits & heat pumps, cool rooms, racks and chillers
7. **Electrical fundamentals for RAC** — motors & starting gear, controls, ladder-diagram diagnosis
8. **Fault diagnosis** — the routine, gauge signatures of ten faults, quiz practice
9. **Repair procedures** — recovery, evacuation, charging methods, leaks & brazing
10. **Safety** — refrigerant/pressure/cold hazards, electrical & site safety
11. **The Refrigerant Handling Code of Practice** — Parts 1 & 2, taught clause by clause

`docs/SOURCE_COVERAGE.md` lists all 64 modules with the source chapter each
was written from and its lesson and question counts.

Each lesson ends with a **checked quiz** (explanations for every answer);
passing marks the lesson complete, and progress is saved in the browser.
Lessons embed **deep links** that open the simulator pre-configured
(`simulator.html?r=R404A&fault=lowCharge&speed=120&load=80`, plus `quiz=1`,
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
  vacuum decay test and more — plus the psychrometric chart and its process
  arrows, star/delta, the power triangle, three-phase waveforms, oil-return
  risers, the absorption cycle, transformer turns ratio, two-stage
  compression and duct pressures. All captioned and screen-reader labelled.
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
inside the `js/courseN.js` files — `course1–3.js` (core), `course101–116.js`
(Refrigeration 1), `course201–213.js` (Refrigeration 2), `course301–314.js`
(Electrical) and `course401–410.js` (Capstone). Add a lesson by adding an
object (content, minutes, refs, quiz) to a module's `lessons` array; the
navigation, progress tracking and quizzes pick it up automatically.

The subset covers `##`/`###` headings, paragraphs, `-` and `1.` lists, `|`
tables, `**bold**`, `*italic*`, `[links](url)`, the `!SIM[label](params)`
directive (a button that opens the simulator pre-configured), `!FIG[id]`
(an inline SVG from the figure library) and `!CITE[doc:part:clause]` (a
citation linking to the lesson that teaches that clause). Blocks prefixed
with `>` become callouts:

| Prefix | Renders as |
|--------|------------|
| `>` | A callout — an aside, a rule of thumb, a worked note |
| `>!` | A **warning** callout — safety, legal or damage-risk material |
| `>?` | A **model answer**, hidden inside a `<details>` element the learner opens ("Show a model answer") after attempting the question themselves |

`>?` is what makes written-answer practice work: a question can be posed in
the lesson text and genuinely attempted before the answer is visible. The
capstone stream uses it 237 times.

#### Adding a content module

1. Create `js/courseNNN.js`, following the shape of an existing content file
   (a module object with `id`, `title`, `stream`, `blurb` and a `lessons`
   array; content, minutes, refs and quiz on each lesson). Pick a number in
   the range of the stream it belongs to.
2. Add its `<script>` tag to `learn.html`, **in numeric order** with the other
   content files — that order is the syllabus order.
3. Run `npm run build:index` to regenerate `js/course-index.js`, and commit
   the result.
4. Run `npm test`. The suite checks that every content file on disk is loaded
   by `learn.html` in the right order, that the manifest is not stale, that
   every module belongs to a declared stream, and that every lesson carries
   references and a quiz.

**References & alignment:** the course is aligned to Australian practice —
the ARCtick **Refrigerant Handling Code of Practice** (Parts 1 & 2), the
**Ozone Protection and SGG Management Act** licensing scheme (RHL/RTA),
**AS/NZS 3000 / 5149 / 4836** (topic-level citations; standards text is not
reproduced), the **ARAC manuals** (Boyle, Vols 1 & 2, published by AIRAH) and
**Electrical Principles for the Electrical Trades**, 8th ed. (McGraw-Hill
Australia). Lessons are **written from** those sources, not copied from them:
terminology, standard values, procedures, formulae and data are carried across
as facts, but the prose is new — see the originality statement in
`docs/REFERENCES.md` and the audit trail in `docs/SOURCE_COVERAGE.md`. Every
lesson displays its references in an in-lesson panel, and the test suite
enforces that every lesson carries references.

### Exams & certificate

- **Stream exams** (`#exam/<streamId>`) — each stream has its own exam drawing
  **two questions at random from every module of that stream**: 22 questions
  for the core program, 32 for Refrigeration 1, 26 for Refrigeration 2, 28
  for Electrical principles and 20 for the capstone stream.
- **Final exam** (`#exam`, sidebar or the last card on the course home) — the
  whole-program paper, **one question per module**, 64 in all, so it stays a
  sittable length as the syllabus grows.

Both use an **80% pass mark**. Each attempt is a fresh paper and the best
score is kept; progress is stored under `exam/final` and `exam/<streamId>`.
Passing unlocks a **printable certificate of completion** carrying the
learner's name, score, date and a deterministic certificate ID an instructor
can verify by regenerating it — and the certificate names the stream when a
stream exam is what was passed. It is evidence of course completion, not a
licence.

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
  mapping of all five streams to the UEE training package (Cert III RAC),
  EPA 608 and typical university learning outcomes, and
  `docs/SOURCE_COVERAGE.md` for the source chapter behind every module.
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
npm run build:index   # regenerate js/course-index.js after content changes
npm run build:scorm   # build the SCORM 1.2 package into dist/
```

Tests cover interpolation, saturation lookups, sanity of every fault ×
refrigerant × operating-point combination, fault gauge-signature directions,
unit conversion/formatting, the markdown subset, the exam sampler, the
SCORM adapter and packaging. `tests/circuit.test.js` and
`tests/diagnose.test.js` pin the refrigeration rules behind the builder and
the fault signatures behind the workshop, and `tests/pages.test.js` boots each
script-rendered page against a DOM stub so a broken reference cannot ship as a
blank panel. Then the syllabus itself: every lesson has
references and a quiz, every module belongs to a declared stream,
`learn.html` loads every `js/courseN.js` on disk in numeric order, and
`js/course-index.js` matches the real course (run `npm run build:index` if
that one fails). CI runs them on every push (`.github/workflows/ci.yml`).

## Deploying to GitHub Pages

1. Push to your default branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**, pick
   the branch and the `/ (root)` folder, and save.
4. Your site will be published at `https://<user>.github.io/<repo>/`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | "Start here" front door: the staged pathway, stream cards, tool cards |
| `simulator.html` | Simulator page structure; the schematic itself is drawn from data |
| `service.html` | The Service Bay rig |
| `build.html` | The System Builder: palette, loop and analysis panel |
| `diagnose.html` | The Fault Diagnosis Workshop: schematic, instruments, evidence and diagnosis panels |
| `learn.html` | Course page (sidebar navigation + lesson view); loads every content file |
| `styles.css` | Dark theme, layout, state colours, course styles |
| `styles-build.css` | System Builder layout: palette, loop rows, drag states, findings |
| `styles-diagnose.css` | Diagnosis Workshop layout: schematic overlay, instrument buttons, readings and evidence |
| `js/data.js` | Refrigerant tables, base operating points, fault library, schematic viz params |
| `js/circuits.js` | The seven system variations: pipe runs, components, captions, and what each adds to the cycle |
| `js/schematic.js` | Draws a circuit definition into the SVG (pipes, components, hit areas, captions) |
| `js/model.js` | Interpolation, saturation lookups, operating-point derivation, per-circuit effects, two-stage cascade |
| `js/units.js` | kPa/bar/psi and °C/°F display, gauge-vs-absolute, localStorage prefs |
| `js/gauges.js` | Analog gauge manifold with PT rings |
| `js/pt.js` | PT chart + target-pressure trainer |
| `js/quiz.js` | Technician diagnosis quiz |
| `js/app.js` | Schematic animation, readouts, P–h diagram, tour, deep links, wiring |
| `js/md.js` | Markdown-subset renderer for lesson content (incl. !SIM and !FIG directives, and the `>` / `>!` / `>?` block prefixes) |
| `js/figures.js` | Inline SVG figure library used by `!FIG[id]` |
| `js/streams.js` | The five stream definitions; a module with no `stream` is `core` |
| `js/course1.js` … `js/course410.js` | Course content: 64 modules, 516 lessons, 2,094 questions (`course1–3` core, `course101–116` Refrigeration 1, `course201–213` Refrigeration 2, `course301–314` Electrical, `course401–410` Capstone) |
| `js/course-index.js` | **Generated** syllabus manifest (per-stream counts and titles) — `npm run build:index` |
| `js/home.js` | Front-door pathway, stream cards and progress |
| `js/refdocs.js` | Reference-document library behind `!CITE[…]` and the `#reference` view |
| `js/srs.js`, `js/cards.js` | Spaced-repetition scheduler and the extra card banks |
| `js/servicebay.js`, `js/service-ui.js` | Service Bay state machine (pure, tested), including hose selection, the gauge zero check and order-of-work grading — and its UI |
| `js/circuit.js`, `js/build-ui.js` | System Builder rules engine (component library, pipe runs, placement findings, scenarios — pure, tested) and its drag-and-drop UI |
| `js/diagnose.js`, `js/diagnose-ui.js` | Diagnosis Workshop engine (measurement points, derived values, evidence, scoring — pure, tested) and its UI |
| `js/learn.js` | Course UI: routing, progress store, lesson quizzes, stream & final exams, certificate, export/import |
| `js/exam.js` | Exam sampling + certificate code (pure, tested) |
| `js/scorm.js` | SCORM 1.2 runtime adapter (LMS reporting + progress in suspend_data) |
| `js/teach.js`, `teach.html` | Instructor cohort dashboard |
| `tools/build-scorm.js` | SCORM 1.2 package builder (`npm run build:scorm`); discovers the course content files automatically |
| `tools/build-course-index.js` | Writes `js/course-index.js` (`npm run build:index`) |
| `tests/` | Node built-in test-runner suites: model, units, markdown, course, course index, exam, SCORM, packaging, Service Bay, circuit rules, diagnosis, script-rendered pages, SRS, figures, nav |
| `docs/SOURCE_COVERAGE.md` | Which source chapter every module was written from, and how the content was produced and originality-checked |
| `docs/REFERENCES.md` | Bibliography, alignment policy and the originality statement |
| `docs/REVIEW_AND_ROADMAP.md` | Platform review, phased roadmap and status |
| `docs/CURRICULUM_MAPPING.md` | Indicative mapping to UEE / EPA 608 / university outcomes |
