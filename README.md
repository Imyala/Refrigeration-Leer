# Refrigeration Learning Platform

An interactive **refrigeration training platform**: an animated
vapour-compression simulator with fault diagnosis, a service-procedure
trainer, a circuit builder and a diagnostic workshop, plus a structured
**64-module course** (517 lessons and 2,098 quiz questions with saved
progress) that runs from first principles through to full trade-course depth
in refrigeration, air conditioning and electrical principles — all in a plain
static site with no build step.

The course is organised into five **streams**: a guided **core program**, two
technical refrigeration and air-conditioning streams, an **electrical
principles** stream, and a **capstone** stream that revises for the
end-of-apprenticeship knowledge assessment. See [The course](#the-course-learnhtml) below, and
`docs/SOURCE_COVERAGE.md` for the module-by-module breakdown.

The site nav offers three destinations — **Home**, **Learn** and **Practice** —
with the instructor and institutional pages kept visibly secondary, and a
theme switch: the site is light by default (it is read on classroom
projectors and phones in daylight), dark by choice, and the drawn instruments
keep a dark face in both. The eight
hands-on workshops sit behind Practice, and carry a switcher strip so they stay
one click from each other.

The look is taken from the trade itself: service-manual paper and navy ink,
the gauge manifold's low-side blue and high-side red, and charging-hose yellow
for the one main action on a page. Headings are set in Bricolage Grotesque,
reading text in Atkinson Hyperlegible Next (drawn for legibility, with
unmistakable 0/O and 1/l/I), and readings in Atkinson Hyperlegible Mono. All
three are bundled in `fonts/` under the SIL Open Font Licence, so the site
still makes no third-party requests. Icons are one drawn set in
`styles.css`, not emoji.

- **`index.html`** — the front door: the staged pathway through the core
  program, one pointer to Practice, and the specialist streams named and sized.
- **`practice.html`** — the Practice hub: what each of the eight workshops is
  for, in the order a technician grows into the work.
- **`simulator.html`** — the simulator: animated cycle drawn either as a trade
  schematic or as the equipment it represents (`?draw=equipment`), every reading
  compared against what the same machine would read without the fault, the
  field symptoms of the active fault, gauge manifold, technician quiz
  (`?quiz=1`) and PT trainer.
- **`plant.html`** — the Plant Simulator: the same cycle drawn as a real
  cool-room plant — every component drawn as it looks — with faults that show
  at the part and the P–h diagram beside it, point for point.
- **`service.html`** — the Service Bay: a hands-on service-procedure trainer
  (choose and prove your gauges, fit and purge hoses, work the service valves),
  graded on the order of work.
- **`build.html`** — the System Builder: pipe a circuit yourself, component by
  component in flow order, and be told whether it would run and where each
  accessory belongs.
- **`diagnose.html`** — the Fault Diagnosis Workshop: a machine with a hidden
  fault and no numbers given. Choose what to measure, fit the instrument, work
  the numbers, commit to a diagnosis.
- **`electrical.html`** — the Control Circuit Workshop: a packaged unit that
  has stopped, a ladder diagram with test points, a meter that only reads
  where you put it, safe isolation graded the way it is taught, and a hidden
  electrical fault to name.
- **`procedures.html`** — the Procedure Trainers: pressure test, evacuation,
  recovery and charging, and brazing as rigs you work on, with the 2025 Code
  of Practice's numbers in the rules and the order of work graded.
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

## The Plant Simulator (plant.html)

The Cycle Simulator teaches the cycle as four boxes on a loop. The Plant
Simulator is the machine a technician walks up to: a cool room with a unit
cooler, its TXV (power head, capillary and sensing bulb on the suction line)
and a room temperature controller, and outside it a condensing unit with a
semi-hermetic compressor (service valves, oil sight glass), oil separator and
oil return, finned condenser and fan, receiver with king valve, filter-drier,
liquid-line solenoid, sight glass with moisture indicator, suction
accumulator, dual pressure control and panel gauges.

- **One operating point drives everything.** It comes from `js/model.js`, as
  on every other page, so the plant, the gauges on it, the readings strip and
  the P–h diagram always agree with the rest of the site.
- **Seven numbered state points** — 5, 1, 1′, 2, 3, 4, 4′, as a textbook P–h
  diagram numbers them — sit on the pipework and on the diagram. Click one in
  either place and both light up, and the inspector gives its pressure (gauge
  and absolute), temperature, saturation temperature, enthalpy and state.
  Points 1, 3 and 4 are inside the coils and move with the fault: a starved
  coil finishes boiling early, a backed-up condenser finishes condensing early.
- **Faults show at the part.** Low charge bubbles in the sight glass and
  empties the receiver; an iced coil ices; a failed condenser fan stops and
  takes the head pressure to the high-pressure cut-out; a restricted drier
  frosts; floodback fills the accumulator and frosts back to the compressor; a
  solenoid that will not open leaves the line past it dead and pumps down to
  the low-pressure switch. The part the fault shows at carries a warning badge.
- **Click any part** for what it is, what it does, what to look for on it, and
  what it looks like right now.
- **Show switches**: refrigerant state colours or plain copper with the suction
  line lagged, as installed; labels on or off (name every part yourself);
  numbered points on or off.
- Deep links: `plant.html?fault=lowCharge&ref=R134a&part=sightGlass&point=1'`.

The drawing is built as a string (`js/plant-art.js`) from the layout and logic
in `js/plant.js`, so both are tested in Node (`tests/plant.test.js`): the loop
is unbroken, every state point sits where a P–h diagram puts it for every
refrigerant and fault, every fault shows at the plant, and every part drawn is
one the inspector can explain.

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
- **Flammable charges** — put R32, R454B or R290 in the machine and the job
  gains a step: **assess the area as a flammable zone** (ventilation,
  ignition sources, a combustible-gas detector, an extinguisher) before
  anything can release refrigerant. A purge or a vent on an unassessed A2L/A3
  charge is called out and counted, and the step is graded in order like the
  rest.
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

The rig is drawn the way the machine actually stands in front of you: a
running condensing unit with a stem-type service valve bolted to each side of
the compressor, and the gauge manifold below it with its hoses run up to the
two gauge ports. Every part you can act on is drawn where it is on the real
thing — spindle cap on top of the stem, gauge-port cap on the side stub — so
clicking the picture teaches the layout as well as the procedure.

The procedure rules live in a pure, unit-tested state machine
(`js/servicebay.js`); the UI (`js/service-ui.js`) renders the rig and wires
the clicks.

## The System Builder (build.html)

Instead of reading a schematic, the learner **draws one**. Components are
dragged from a palette of **30** onto a piped circuit diagram — the four main
components at the corners, the four runs of pipe between them — starting at
the compressor, because that is where a circuit is always read from, and a
rules engine decides whether that circuit would actually run.

- **It is a drawing, not a list.** Each run is coloured for what the
  refrigerant is in it, the flow animates round the loop, a dashed diagonal
  splits the high side from the low side, and a part is dropped onto the join
  in the pipework where it belongs. The pipes are drawn in SVG and the parts
  sit on top as ordinary HTML, so dragging, clicking and keyboard editing all
  behave the way they do everywhere else on the site.
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
  move-earlier / move-later / remove buttons, which appear on the part as soon
  as it is hovered or focused, so the circuit can be built and reordered
  entirely from the keyboard.

The rules are pure and unit-tested (`js/circuit.js`); the UI (`js/build-ui.js`,
`styles-build.css`) computes the drawing's geometry, places the parts and the
drop targets on it, and renders the analysis panel.

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
- **Flammable refrigerants change the method** — on an A2L or A3 machine the
  job carries a "flammable zone assessed" check; a gauge fitted to a service
  port before it costs a quarter mark, because connecting to a port is a
  potential release and the walk-round comes first.
- **How you went about it is rated too** — measuring the four readings that
  decide most faults (both gauges, the evaporator outlet, the liquid line)
  beats measuring everything the kit can measure: field time is real, and so
  is disturbing a system that is running.

The diagnostic logic is pure and unit-tested (`js/diagnose.js`), driven by the
same refrigerant tables and cycle model as the simulator; the UI lives in
`js/diagnose-ui.js` and `styles-diagnose.css`.

## The Control Circuit Workshop (electrical.html)

The Diagnosis Workshop's electrical sibling, built for the core unit
UEERA0031 (diagnose and rectify faults in control systems). A single-phase
packaged condensing unit has stopped; the learner gets a **ladder diagram**
of its control chain (fuse → thermostat → HP → LP → overload → contactor
coil) and power chain (contactor → compressor with its run capacitor, and
the condenser fan), fourteen **test points**, and a meter.

- **Look and listen first** — contactor in or out, compressor running,
  humming or silent, fan turning: the machine's own evidence, free.
- **Voltage tests, live** — between any two points. The engine computes what
  every node reads to neutral for the hidden fault, so the classic pictures
  come out the way the trade teaches them: 230 V across the one open contact
  in a series chain; 230 V everywhere with an open coil; T1 dead with the
  coil pulled in on burnt contacts.
- **Dead tests need safe isolation** — ohms, capacitance and insulation
  resistance are refused on a live circuit (and counted against the method),
  and are only proven safe after **isolate → prove the tester → test for dead
  → prove again**, the AS/NZS 4836 order. Skipping it costs a quarter mark.
- **Thirteen faults** including the ones that look alike: a run capacitor and
  a start relay (both hum at locked-rotor current — the capacitance test
  separates them), an LP switch open on genuinely low pressure and one that
  has failed (the low-side gauge separates them), an HP switch open because
  the condenser fan winding is open. A safety that is open is usually doing
  its job.
- Scored like the Diagnosis Workshop: full mark, half within a family, hints
  cost a quarter, and the method is rated.

The engine is pure and tested (`js/control.js`); the UI is `js/control-ui.js`
with `styles-control.css`.

## The Procedure Trainers (procedures.html)

The Service Bay's pattern — every step is the learner's action, the rig
behaves the way a real one would when a step is skipped, the order of work
is graded — applied to the four procedures the 2025 Code of Practice
governs (`js/procedures.js`, pure and tested; UI in `js/procedure-ui.js`).
Each cites the clauses it follows, linked into the reference library.

| Procedure | What the rig checks | The Code's numbers in the rules |
|---|---|---|
| **Pressure test** | Medium (refrigerant and standard nitrogen refused), regulator and gauge range, test pressure against PS, the cut-out and the maximum operating pressure, pressurising in stages with joint checks, isolate and record pressure *and* ambient, the full hold, temperature-corrected verdict; leak found, depressurise before repair, retest | 24 h commissioning / 1 h repair holds; 25–90 % of PS for a repair test; 5 g/year detector; a hidden leak on half the jobs |
| **Evacuation** | Recover first (a pump against refrigerant is venting), dedicated hoses and a micron gauge, deep or triple method, isolate the pump before the decay test, and reading the shape of the rise | 500 microns, hold 60 min under 600, 100-micron rise; 4,500 microns per triple stage; moisture plateaus, a leak keeps climbing |
| **Recovery & charging** | Identify (or treat as unknown: flammable and toxic), cylinder checks (in date, rated, marked, clean), safe fill, liquid then vapour, weigh and record, evacuate before charging, leak-check the hose, blends as liquid, charge to mass, logbook; flammable zone and earthing on an A2L job | fill ratio × water capacity less 20 % ullage; entire charge recovered; disposables never refilled |
| **Brazing** | Never on a charged line, protect heat-sensitive parts, prepare the joint, gentle nitrogen purge, the right alloy for the metals, heat the fitting not the rod, purge until cool, test before charging | Phos-copper self-fluxes on copper-to-copper; brass needs silver with flux; a high-flow purge blows the alloy out |

## The Capstone Job (capstone.html)

One plant, seven stages, one record. A butcher's cool room goes from empty
pipework to its second call-back, and every stage opens in the workshop
that does that work, with the job's brief showing and the result reported
back: pipe the circuit (System Builder), pressure test it and evacuate it
and charge it (Procedure Trainers), commission it and record the healthy
readings (Diagnosis Workshop, where the learner has to be willing to call a
healthy machine healthy), come back six months later to a hidden fault
(Diagnosis Workshop), and fix the electrics when it stops altogether
(Control Circuit Workshop). Each stage is scored by its tool; the best
score is kept; the finished job is one entry in the evidence record. The
script lives in `js/capstone.js` (pure, tested); the tools read a
`?capstone=<stage>` parameter and report through it.

## The evidence record

Lesson progress says which quizzes were passed. It says nothing about how a
learner hooked up a manifold, which readings they took before committing to
a diagnosis, or whether they isolated before putting a meter on ohms — and
that is what an RTO's practical units are about. Every workshop now records
one entry per finished job (`js/evidence.js`): the tool, a score in 0..1,
and the detail that job produced (the fault and the answer, readings taken,
hints used, steps out of order, refrigerant lost, whether the circuit was
proven dead). Entries carry the **units of competency** their tool
practises, so:

- the course home shows the learner's standing **per UEE32225 unit**:
  lessons passed in the modules tagged with the unit, and the jobs recorded
  against it;
- the progress export carries the record, and the **instructor dashboard**
  has a **By unit of competency** view — one row per unit, one column per
  student, knowledge and workshop jobs side by side, with a CSV.

Storage is the browser's and nothing leaves the machine on its own. The
record is practice, not assessment: the RTO assesses the practical side on
real plant.

## The course (learn.html)

A structured curriculum of **64 modules / 517 lessons / 2,098 quiz
questions**, written for learners working toward field competence. Modules
are grouped into five **streams**, declared in `js/streams.js`:

| Stream | Id | Modules | Lessons | What it is |
|--------|----|--------:|--------:|------------|
| **Core program** | `core` | 11 | 40 | The guided pathway — start here |
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

### Adaptive: placement, difficulty, go deeper

- **Placement quiz per stream** (`#placement/<stream>`): two questions from
  every module of the stream, read **module by module** — both right and the
  module is probably *known*; one right, *revise*; neither, *start here*.
  It marks nothing complete: the verdict badges the module cards and names
  a starting point, and the stream exam is where a known module is tested
  out of. The report is stored beside progress and travels in the export.
- **Difficulty ladder.** The Diagnosis Workshop has three levels: clear
  signatures at rated conditions; any fault with site conditions varying
  job to job; and look-alike faults plus **two faults at once** (compound
  faults, built from two library faults — multipliers multiplied, offsets
  added — so every reading is the honest sum), where the learner may name
  up to two faults and is marked on both. The Technician Quiz has the same
  three rungs: distinct faults on the two textbook fluids at rated
  conditions, everything at a random operating point, or only the
  look-alike families.
- **Go deeper.** Every core-program lesson ends with links to the
  trade-depth modules on the same topic in the Refrigeration 1 and 2,
  Electrical and Capstone streams (the `deeper:` tag on the module) — the
  inverse of "In plain words".

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
the ARCtick **Refrigerant Handling Code of Practice, 2025 edition** (Parts 1 & 2,
including a lesson on what changed from the 2007 code), the
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
  table: per-module completion, exam results, overall %, workshop jobs,
  placement, CSV download — and a **By unit of competency** view (UEE32225
  units as rows, students as columns, knowledge and workshop evidence side
  by side). Entirely client-side; no student data leaves the browser.
- **Curriculum mapping** — see `docs/CURRICULUM_MAPPING.md` for indicative
  mapping of all five streams to **UEE32225** Certificate III in Air
  Conditioning and Refrigeration (the release that superseded UEE32220 in
  March 2025), EPA 608 and typical university learning outcomes. Every module
  carries `units:` tags (`js/competency.js`), shown on its course page, and
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
- **The discharge never reads below the condensing temperature.** Liquid
  coming back to the compressor (floodback, an overfeeding valve) drives the
  discharge down toward saturation — a collapsed discharge superheat is the
  tell — and the model floors it 2 K above, since gas at discharge pressure
  cannot be colder than its own saturation temperature. Near the top of a
  fluid's dome the simplified discharge enthalpy can still sit level with the
  suction's under floodback (R32 most of all); COP is guarded against it.

## Refrigerants

The numbers are driven by a swappable refrigerant table, so the simulator is
**interchangeable between fluids**. Included presets:

| Fluid | Class | Notes |
|-------|-------|-------|
| **R134a** | A1 | Reference fluid — matches the teaching textbook |
| R410A | A1 | The installed base of split and ducted AC; being replaced by R32 and R454B |
| R22 | A1 | Legacy HCFC (phased out) — service only |
| R404A | A1 | Low-temperature commercial refrigeration; very high GWP |
| **R32** | **A2L** | The current split-system refrigerant: R410A pressures, hotter discharge, mildly flammable |
| **R454B** | **A2L** | R410A successor for ducted and packaged plant; zeotropic blend (about 1.5 K glide, tabulated on the dew line) |
| **R290** (propane) | **A3** | Self-contained cabinets, heat pumps, some splits; highly flammable, small charges |

The four A1 tables are representative; **R32, R454B and R290 are generated
from CoolProp 8** (IIR reference state) and are reference-grade. Every
refrigerant carries its ISO 817 safety class, GWP and a `flammable` flag:
put an A2L or A3 fluid in the Service Bay or the Diagnosis Workshop and the
order of work gains a **flammable-zone assessment** step, graded like every
other step, as the 2025 Code of Practice requires.

> Values are approximate, representative operating points for learning the
> *shape* of the cycle — not for engineering design.

To add another refrigerant, add a saturation table to `TABLES` and an entry to
`REFRIGERANTS` in `js/data.js` (with its `safety` class, `gwp` and `flammable`
flag; `cpVap` where the fluid's vapour heat capacity is far from an HFC's). To add a fault, add an entry to `FAULTS`
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
| `index.html` | Front door: the staged pathway, the Practice pointer, the stream chips |
| `practice.html` | Practice hub: the eight workshops, what each is for |
| `plant.html`, `styles-plant.css` | The Plant Simulator page and its drawing styles |
| `js/plant.js` | Plant layout (pipe runs, coils, parts), the seven P–h state points, fault symptoms at the plant, the parts catalogue (pure, tested) |
| `js/plant-art.js` | The plant drawing: every component drawn as it looks, built as SVG markup (pure, tested) |
| `js/plant-ui.js` | The Plant Simulator page: controls, readings, P–h diagram, inspector |
| `simulator.html` | Simulator page structure; the schematic itself is drawn from data |
| `service.html` | The Service Bay rig |
| `build.html` | The System Builder: palette, loop and analysis panel |
| `diagnose.html` | The Fault Diagnosis Workshop: schematic, instruments, evidence and diagnosis panels |
| `learn.html` | Course page (sidebar navigation + lesson view); loads every content file |
| `styles.css` | Typefaces, theme tokens (light default, dark by choice), icon set, layout, state colours, course styles |
| `fonts/` | The three bundled typefaces (woff2, Latin subset) and their licence |
| `js/theme.js` | Stamps the theme on `<html>` before first paint and wires the switch in the nav |
| `styles-build.css` | System Builder layout: palette, the circuit drawing, drag states, findings |
| `styles-diagnose.css` | Diagnosis Workshop layout: schematic overlay, instrument buttons, readings and evidence |
| `js/data.js` | Refrigerant tables (seven fluids, incl. R32/R454B/R290 from CoolProp), safety classes, base operating points, fault library, schematic viz params |
| `js/circuits.js` | The seven system variations: pipe runs, components, captions, and what each adds to the cycle |
| `js/schematic.js` | Draws a circuit definition into the SVG (pipes, components, hit areas, captions) in either view |
| `js/equipment.js` | Equipment artwork: the same circuit drawn as the plant it represents |
| `js/model.js` | Interpolation, saturation lookups, operating-point derivation, per-circuit effects, two-stage cascade |
| `js/units.js` | kPa/bar/psi and °C/°F display, gauge-vs-absolute, localStorage prefs |
| `js/gauges.js` | Analog gauge manifold with PT rings |
| `js/pt.js` | PT chart + target-pressure trainer |
| `js/quiz.js` | Technician diagnosis quiz |
| `js/app.js` | Schematic animation, readouts, P–h diagram, tour, deep links, wiring |
| `js/md.js` | Markdown-subset renderer for lesson content (incl. !SIM and !FIG directives, and the `>` / `>!` / `>?` block prefixes) |
| `js/figures.js` | Inline SVG figure library used by `!FIG[id]` |
| `js/streams.js` | The five stream definitions; a module with no `stream` is `core` |
| `js/course1.js` … `js/course410.js` | Course content: 64 modules, 517 lessons, 2,098 questions (`course1–3` core, `course101–116` Refrigeration 1, `course201–213` Refrigeration 2, `course301–314` Electrical, `course401–410` Capstone) |
| `js/course-index.js` | **Generated** syllabus manifest (per-stream counts and titles) — `npm run build:index` |
| `js/home.js` | Front-door pathway, stream chips and progress |
| `js/nav.js` | Site-nav menu toggle, and the quiz/simulator state of the practice switcher |
| `js/howto.js` | The "How this works" disclosure each workshop opens with, remembered per tool |
| `js/refdocs.js` | Reference-document library behind `!CITE[…]` and the `#reference` view, and the **edition register** (`tests/editions.test.js` fails the build if a lesson or public document cites a superseded edition of the Code, a standard or the training package) |
| `js/competency.js` | The UEE32225 units of competency the modules are tagged with (`units:` on each module), and what each tool contributes; `tests/competency.test.js` checks the tags |
| `js/srs.js`, `js/cards.js` | Spaced-repetition scheduler and the extra card banks |
| `js/servicebay.js`, `js/service-ui.js` | Service Bay state machine (pure, tested), including hose selection, the gauge zero check and order-of-work grading — and its UI |
| `js/circuit.js`, `js/build-ui.js` | System Builder rules engine (component library, pipe runs, placement findings, scenarios — pure, tested) and the drawn circuit it is edited on |
| `js/diagnose.js`, `js/diagnose-ui.js` | Diagnosis Workshop engine (measurement points, derived values, evidence, scoring — pure, tested) and its UI |
| `js/evidence.js` | The evidence record: one entry per finished workshop job, with the units it counts towards; summaries and merge (pure, tested) |
| `js/capstone.js`, `js/capstone-ui.js`, `capstone.html` | The capstone job: seven stages, each opened in its tool with `?capstone=<stage>`, and the record of how it went (pure, tested) |
| `js/control.js`, `js/control-ui.js`, `styles-control.css`, `electrical.html` | Control Circuit Workshop engine (ladder nodes, faults, what every instrument reads, safe-isolation grading — pure, tested) and its UI |
| `js/procedures.js`, `js/procedure-ui.js`, `styles-procedure.css`, `procedures.html` | The four Code of Practice procedure trainers (pressure test, evacuation, recovery and charging, brazing — pure, tested) and their UI |
| `js/learn.js` | Course UI: routing, progress store, lesson quizzes, stream & final exams, certificate, export/import |
| `js/exam.js` | Exam sampling + certificate code (pure, tested) |
| `js/scorm.js` | SCORM 1.2 runtime adapter (LMS reporting + progress in suspend_data) |
| `js/teach.js`, `teach.html` | Instructor cohort dashboard |
| `tools/build-scorm.js` | SCORM 1.2 package builder (`npm run build:scorm`); discovers the course content files automatically |
| `tools/build-course-index.js` | Writes `js/course-index.js` (`npm run build:index`) |
| `tests/` | Node built-in test-runner suites: model, units, markdown, course, course index, exam, SCORM, packaging, Service Bay, circuit rules, diagnosis, control circuit, procedures, editions, competency, script-rendered pages, SRS, figures, nav |
| `docs/SOURCE_COVERAGE.md` | Which source chapter every module was written from, and how the content was produced and originality-checked |
| `docs/REFERENCES.md` | Bibliography, alignment policy and the originality statement |
| `docs/REVIEW_AND_ROADMAP.md` | Platform review, phased roadmap and status |
| `docs/CURRICULUM_MAPPING.md` | Indicative mapping to UEE / EPA 608 / university outcomes |
