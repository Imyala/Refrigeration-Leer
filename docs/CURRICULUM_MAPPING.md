# Curriculum Mapping

How the course's 64 modules and seven interactive tools relate to formal
training frameworks — first and foremost the current Australian
qualification, **UEE32225 Certificate III in Air Conditioning and
Refrigeration**.

This mapping is **indicative**: a planning aid for an RTO, not a compliance
document. The platform carries **knowledge evidence**; every unit below is
also assessed on practical performance on real plant, which a simulation
does not and cannot provide. Training organisations must validate coverage
against the current release of the training package on training.gov.au —
unit codes and placements change between releases, and the sources reachable
when this mapping was written (September 2026) did not all agree on every
placement. Where the mapping is unsure, it says so.

**Standards alignment:** every lesson cites its references (the 2025 edition
of the ARCtick Refrigerant Handling Code of Practice, AS/NZS 3000, 3017,
3760, 4836 and the 5149 series, AS/NZS ISO 817, the ARAC manuals Vols 1 & 2
and *Electrical Principles for the Electrical Trades*) in an in-lesson
references panel. `docs/REFERENCES.md` holds the master bibliography and the
originality statement; `docs/SOURCE_COVERAGE.md` the source chapter behind
every module; and the **edition register** in `js/refdocs.js` names the
edition of each document the course is written to, with a test that fails
the build if a lesson cites a superseded one.

## The qualification: UEE32225, not UEE32220

| | |
|---|---|
| **Current qualification** | UEE32225 Certificate III in Air Conditioning and Refrigeration (UEE Electrotechnology Training Package) |
| **Released** | 24 March 2025 |
| **Supersedes** | UEE32220. Training and assessment of apprentices under UEE32220 could not continue past **23 March 2026**; apprentices had to commence in, or be transitioned to, UEE32225 |
| **Structure** | 27 core units and 8 elective units (as published) |
| **Earlier mappings** | This document used to map by skills area against UEE11-era codes (UEENEEJ102A/103A/104A/108A). Those are two releases out of date and have been removed |

The mapping now lives in **data**, not only in this document: every module
carries a `units:` tag in its content file, the registry of units is
`js/competency.js`, and `tests/competency.test.js` checks that every tag
names a real unit and that every core unit has at least one module or tool
behind it. The course page shows a module's units under its title.

## The course at a glance

**64 modules · 517 lessons · 2,098 quiz questions**, grouped into five
streams. Module-by-module lesson and question counts are in
`docs/SOURCE_COVERAGE.md`.

| Stream | Modules | Lessons | Questions | What it is |
|--------|--------:|--------:|----------:|------------|
| **Core program** | 11 | 40 | 127 | The guided pathway, simulator-linked throughout |
| **Refrigeration & air-conditioning 1** | 16 | 151 | 633 | First-year technical stream (ARAC Vol 1, ch 1–16) |
| **Refrigeration & air-conditioning 2** | 13 | 112 | 466 | Second-year / post-trade stream (ARAC Vol 2, ch 1–13) |
| **Electrical principles** | 14 | 135 | 556 | Electrical trade stream (*Electrical Principles for the Electrical Trades*, 8th ed., ch 1–14) |
| **Capstone exam preparation** | 10 | 79 | 316 | Final-stage revision for the end-of-apprenticeship knowledge assessment |
| **Total** | **64** | **517** | **2,098** | |

## UEE32225 units — what supports each

Bare numbers are **core-program** modules; `R1.x` / `R2.x` / `E.x` / `C.x`
are modules of the Refrigeration 1, Refrigeration 2, Electrical principles
and Capstone streams. Tools are the seven interactive workshops (see *The
interactive tools* below). The **status** column is what the sources
checked said about the unit's placement in UEE32225: *core* and *elective*
where a source stated it; *confirm* where the unit is known to sit in the
qualification or the training package but its placement could not be
verified from the sources reachable when this was written.

### Common and core-skill units (UEECD / UEECO)

| Unit | Title | Status | Modules and tools |
|---|---|---|---|
| UEECD0007 | Apply work health and safety regulations, codes and practices in the workplace | core | 4, 10, R1.8, R1.10, E.1, C.2, C.9 |
| UEECD0016 | Document and apply measures to control WHS risks associated with electrotechnology work | confirm (was core in the superseded UEE32220) | 10, E.1 |
| UEECD0019 | Fabricate, assemble and dismantle utilities industry components | confirm (was core in the superseded UEE32220) | R1.8, R1.10 |
| UEECD0020 | Fix and secure electrotechnology equipment | confirm (was core in the superseded UEE32220) | R1.8, R2.9 |
| UEECD0042 | Solve problems in ELV single path circuits | confirm (was core in the superseded UEE32220) | 7, R1.11, E.2 |
| UEECD0043 | Solve problems in direct current circuits | confirm | R1.11, E.3, E.4, E.5, E.7 |
| UEECD0044 | Solve problems in multiple path circuits | confirm | E.3 |
| UEECD0046 | Solve problems in single path circuits | confirm | R1.11, E.2, E.3, E.4 |
| UEECD0048 | Undertake computations in an energy sector environment | confirm | 1, R1.1, E.9, E.10, E.14, C.4 |
| UEECD0051 | Use drawings, diagrams, schedules, standards, codes and specifications | confirm (was core in the superseded UEE32220) | 3, R1.13, R2.11, R2.12, R2.13, C.8, C.10 + **System Builder** |
| UEECO0010 | Participate in refrigeration and air conditioning work and competency development activities | core | 4, 11, R2.5, R2.11, E.8, C.1, C.2 + **Service Bay** |

### Refrigeration and air conditioning units (UEERA)

| Unit | Title | Status | Modules and tools |
|---|---|---|---|
| UEERA0031 | Diagnose and rectify faults in air conditioning and refrigeration control systems | core | 5, 7, 8, R1.12, R1.13, R1.15, R1.16, R2.8, R2.13, E.13, C.3, C.10 + **Diagnosis Workshop** |
| UEERA0032 | Diagnose and rectify faults in complex air conditioning/refrigeration systems | elective | 8, R2.8 + Diagnosis Workshop |
| UEERA0034 | Establish heat loads for commercial refrigeration and/or air conditioning applications | elective | R2.6 |
| UEERA0035 | Establish the basic operating conditions of air conditioning systems | core | 2, 6, R1.3, R1.7, R2.3, R2.4 + Simulator |
| UEERA0036 | Establish the basic operating conditions of vapour compression systems | core | 1, 2, 3, 5, 8, R1.1–R1.5, R1.16, R2.7, C.4, C.7 + **Simulator**, **PT trainer**, Diagnosis Workshop |
| UEERA0038 | Establish the thermodynamic parameters of refrigeration and air conditioning systems | elective | R2.7 + Simulator (P–h diagram, performance panel) |
| UEERA0044 | Find and rectify faults in single phase motors and associated controls | core | 7, R1.12, R1.14, R1.15, E.5, E.6, E.9, E.12, C.3 |
| UEERA0045 | Find and rectify faults in three phase motors and associated controls | core | R1.14, R1.15, E.6, E.10, E.11, E.12 |
| UEERA0046 | Install and commission ammonia refrigeration systems, components and associated equipment | elective | R2.1 |
| UEERA0047 | Install and commission carbon dioxide refrigeration systems, components and associated equipment | elective | R2.1 |
| UEERA0048 | Install and commission flammable refrigerant air conditioning and refrigeration systems | elective | 4, 11 (safety classification and flammable refrigerants; the 2025 edition), R2.1, C.9 + Service Bay and Diagnosis Workshop on an A2L/A3 refrigerant |
| UEERA0049 | Install and start up single head split air conditioning and water heating heat pump systems | confirm | 6, R2.4 |
| UEERA0050 | Install refrigerant pipe work, flow controls and accessories | core | 3, 9, R1.5, R1.6, R2.2, C.7, C.8 + **System Builder** |
| UEERA0051 | Install, commission, service and maintain air conditioning systems | confirm | R2.4, R2.9, R2.10, C.5 |
| UEERA0052 | Install, commission, service and maintain low temperature systems | core | 6, R1.4, R1.7, R2.9, R2.10, C.5 |
| UEERA0053 | Install, commission, service and maintain medium temperature systems | core | 6, R1.2, R1.4, R1.6, R1.7, R2.8, R2.9, R2.10, C.5 |
| UEERA0054 | Maintain microbial control of refrigeration and air conditioning systems | elective | R2.3, C.9 (AS/NZS 3666, cooling towers) |
| UEERA0059 | Prepare and connect refrigerant tubing and fittings | core | 9, R1.8, R1.9, R1.10, R2.2 |
| UEERA0060 | Produce HVAC/R control system diagrams | confirm | R2.13, E.13 + System Builder |
| UEERA0062 | Recover and charge refrigerants | confirm | 9, 11, R1.9, R2.5, C.6 + **Service Bay** |
| UEERA0064 | Recover, pressure test, evacuate, charge and leak test refrigerants – split systems | confirm (named as a UEE32225 requirement) | 9, 11, R1.9, R2.5, C.5, C.6 + **Service Bay** |

### How the unit list was verified

The 39 units above are the 35 printed on a real UEE32225 Record of Results
(TAFE Queensland, 2026 — the 27 core units plus that RTO's eight electives,
which a record does not distinguish) and four electives of the training
package that a module maps to. Where a source named a unit as core it is
marked *core*; the rest of the record's units are *listed*. Nothing in the
platform holds any learner's personal details — only the unit codes and
titles were used. UEERA0031 (control-system fault-finding) is served by the
Control Circuit Workshop and the recover/charge units by the procedure
trainers, so every core unit now has both lessons and a tool behind it.

## The streams, module by module

### Core program — the guided pathway

Assessment throughout: lesson quizzes, the core-program exam and the final
exam, plus the interactive tools noted below.

| # | Module | Lessons | Tools it uses |
|---|--------|--------:|---------------|
| 1 | Heat, temperature & pressure | 3 | PT trainer |
| 2 | The vapour-compression cycle | 3 | Simulator, guided tour |
| 3 | Components deep-dive | 4 | Simulator, **System Builder** |
| 4 | Refrigerants & the environment | 4 | — |
| 5 | Superheat & subcooling | 2 | Simulator readouts, Service Bay, **Diagnosis Workshop** |
| 6 | System types in the field | 2 | System Builder (scenario briefs) |
| 7 | Electrical fundamentals for RAC | 2 | — |
| 8 | Fault diagnosis | 3 | **Technician Quiz** and **Diagnosis Workshop** (unlimited scenarios, scored) |
| 9 | Repair procedures | 4 | Service Bay (gauge hook-up, order of work) |
| 10 | Safety | 2 | — |
| 11 | The Refrigerant Handling Code of Practice (2025 edition), including *what changed from 2007* | 11 | Reference library; Service Bay and Diagnosis Workshop on an A2L/A3 refrigerant |

### Refrigeration & air-conditioning 1 — 16 modules, 151 lessons

R1.1 Refrigeration: basic principles (12) · R1.2 Compressors (10) ·
R1.3 Condensers and cooling towers (9) · R1.4 Evaporators (9) ·
R1.5 Refrigerant controls and metering devices (9) ·
R1.6 Ancillary equipment (9) ·
R1.7 Domestic, commercial and industrial systems (10) ·
R1.8 Hand and power tools (9) ·
R1.9 Specialised tools and service equipment (9) ·
R1.10 Brazing and welding (11) ·
R1.11 Electrical principles for refrigeration (10) ·
R1.12 Electrical components (10) · R1.13 Electrical wiring (8) ·
R1.14 Electric motors (9) · R1.15 Electrical testing and fault-finding (8) ·
R1.16 Measuring and test instruments (9)

### Refrigeration & air-conditioning 2 — 13 modules, 112 lessons

R2.1 Alternative refrigeration systems (8) ·
R2.2 Refrigeration piping and line sizing (8) ·
R2.3 Air-conditioning: ventilation, psychrometrics and air treatment (9) ·
R2.4 Air-conditioning systems (9) · R2.5 Service procedure (9) ·
R2.6 Load estimating and equipment selection (10) ·
R2.7 Service charts, tables and cycle analysis (10) ·
R2.8 Service diagnosis and repair (8) ·
R2.9 Installation and maintenance (10) ·
R2.10 Commissioning and system balancing (9) ·
R2.11 Technical communication (6) · R2.12 Drawing interpretation (7) ·
R2.13 Controls and control drawings (9)

### Electrical principles — 14 modules, 135 lessons

E.1 Working safely in the energy sector (9) · E.2 Electrical fundamentals (8) ·
E.3 Electrical circuits (9) · E.4 Resistors and resistance measurement (9) ·
E.5 Capacitors (8) · E.6 Magnetism and electromagnetism (10) ·
E.7 Direct current machines (9) ·
E.8 Sustainable practice in the energy sector (9) ·
E.9 Alternating current: single phase (12) ·
E.10 Alternating current: three phase (9) ·
E.11 Single- and three-phase transformers (9) ·
E.12 AC machines and motor protection (13) ·
E.13 Develop and connect electrical control circuits (11) ·
E.14 Trade calculations (10)

### Capstone exam preparation — 10 modules, 79 lessons

Final-stage revision for the written knowledge assessment sat at the end of an
Australian Certificate III in Refrigeration and Air Conditioning. Lessons pose
written-answer questions and carry a **model answer the learner reveals after
attempting it**. All of it is original material written to the assessment's
published scope — it is not a copy of, and does not reproduce, any real
assessment paper (see `docs/SOURCE_COVERAGE.md`).

C.1 How the knowledge assessment works (6) ·
C.2 Restricted electrical licence, duty of care and the law (7) ·
C.3 Mandatory electrical tests and verification (9) ·
C.4 Calculations under exam conditions (8) ·
C.5 Installation, pressure testing and commissioning (9) ·
C.6 Recovery, evacuation and the Code of Practice (8) ·
C.7 TX valves, superheat and operating conditions (8) ·
C.8 Components, applications and piping schematics (8) ·
C.9 Refrigerant classification and site safety (8) ·
C.10 Wiring diagrams, safeties and control circuits (8)

**The capstone stream** maps to **assessment preparation**, not to any
unit's knowledge evidence: it revises knowledge the learner has already met
in the other streams, in the form and at the depth of the written knowledge
assessment sat at the end of the qualification. Its modules carry unit tags
so an instructor can see which units a revision module touches, but an RTO
should schedule it *after* delivery, not count it as coverage.

### Assessment

- **Stream exams** — one per stream, two questions drawn at random from every
  module of that stream: 22 questions (core), 32 (Refrigeration 1),
  26 (Refrigeration 2), 28 (Electrical principles), 20 (Capstone).
- **Final exam** — the whole-program paper: one question per module, 64 in
  all, so it stays a sittable length as the syllabus grows.
- All exams use an **80% pass mark**, draw a fresh random paper each attempt,
  keep the best score, and unlock a printable certificate of completion —
  which names the stream when a stream exam is what was passed.

## The interactive tools

Seven tools sit alongside the lessons. All of them are open at any time and can
be set as activities in their own right.

| Tool | What the learner does | Skill it drills | Units |
|------|----------------------|-----------------|-------|
| **Simulator** (`simulator.html`) | Drives a live vapour-compression cycle on seven refrigerants — including R32 and R454B (A2L) and R290 (A3) — applies faults, reads gauges and the P–h diagram | Cycle behaviour, instrument reading, off-design behaviour | UEERA0036, UEERA0035, UEERA0038 |
| **Technician Quiz** (simulator, quiz mode) | Names a hidden fault from the gauge picture | Signature recognition, scored repetition | UEERA0036 |
| **PT trainer** (simulator) | Answers target-pressure and saturation-temperature questions on the selected refrigerant | The PT relationship on the gauge | UEERA0036 |
| **Service Bay** (`service.html`) | Chooses a hose set off the van, proves the gauges read zero, **assesses the area as a flammable zone when the charge is A2L or A3**, fits, cracks, purges, reads and packs up — graded on the order of work against the taught steps | Service-procedure discipline, emission control, flammable-refrigerant practice, gauge hook-up | UEERA0064, UEERA0062, UEERA0048, UEECO0010 |
| **System Builder** (`build.html`) | Pipes a circuit from a palette of thirty components in flow order, to a written brief or free-build; every misplacement is explained | Reading and producing a piping schematic; where accessories belong and why | UEERA0050, UEECD0051, UEERA0060 |
| **Control Circuit Workshop** (`electrical.html`) | Finds a hidden electrical fault in a packaged unit from a ladder diagram: voltage tests live, dead tests only after isolate → prove → test for dead → prove, scored on the diagnosis and on the method | Control-circuit fault-finding, safe isolation (AS/NZS 4836), reading a ladder diagram | UEERA0031, UEERA0044, UEERA0092, UEERL0005, UEECD0042 |
| **Procedure trainers** (`procedures.html`) | Works the four Code of Practice procedures — pressure test, evacuation, recovery and charging, brazing — on a rig that follows the Code's numbers and grades the order of work | Leak-tightness testing, evacuation, recovery and charging, brazing practice | UEERA0062, UEERA0079, UEERA0059, UEERA0094, UEERA0007, UEECO0010 |
| **Capstone job** (`capstone.html`) | One plant through seven stages in the tools above — pipe, pressure test, evacuate, charge, commission, diagnose a call-back, find the electrical fault — scored into one evidence record | Working a job end to end, in order | UEERA0050, UEERA0094, UEERA0062, UEERA0036, UEERA0053, UEERA0031, UEECO0010 |
| **Diagnosis Workshop** (`diagnose.html`) | Chooses which of thirteen measurement points to instrument, works superheat, subcooling and TDs from readings actually taken, then commits to a diagnosis — scored on method as well as answer, **including whether the flammable zone was assessed before a gauge went on an A2L/A3 machine** | Systematic fault-finding with instruments; measurement technique | UEERA0036, UEERA0031, UEERA0032, UEERA0048 |

**Where the hands-on tools sit against a training package.** The Service Bay,
the System Builder and the Diagnosis Workshop are not knowledge-evidence
activities in the way a lesson quiz is. What they generate is closer to
**practical evidence-style activity**: drawing and interpreting a piping
schematic, hooking up a manifold in the taught order, working a fault
methodically with instruments. The tools record how the learner did them —
which components went where and why the placement was wrong, which step was
taken out of turn, which readings were taken before a diagnosis was
committed to. They therefore map to the **practical side** of a unit rather
than to its knowledge evidence, and are worth listing as such when planning
delivery.

**The evidence record and the instructor's unit view.** Every finished
workshop job is recorded with the units its tool practises (`js/evidence.js`),
the course home shows the learner's standing per unit, and the instructor
dashboard's *By unit of competency* view puts knowledge (lessons passed in
the tagged modules) and workshop evidence (jobs recorded, mean score) side by
side for every student, with a CSV. The **placement quiz** per stream reads
each module as known, revise or start here and is stored with progress.

Two cautions. These are simulations: they do not replace supervised workshop
time, they do not demonstrate psychomotor competence on real plant, and no
RTO should treat their output as practical assessment evidence on its own.
And the mapping remains **indicative** — a planning aid, not a compliance
document. What the tools do well is give a learner the repetitions and the
reasoning *before* scarce bench time, and give an instructor something
concrete to talk about when the learner reaches the bench.

## ARCtick — the refrigerant handling licence

Core modules 4, 9, 10 and especially **11** (the 2025 edition of the
Refrigerant Handling Code of Practice, Parts 1 & 2, taught clause by clause
over 11 lessons, including a lesson on what changed from the 2007 code),
plus R2.5, R2.9, C.6 and C.9, cover the environmental, recovery, charging,
flammable-refrigerant and safety knowledge that the licence theory draws on.
The Service Bay's flammable-zone step and the Diagnosis Workshop's
flammable-zone check practise the A2L/A3 handling the Code now requires.

## United States — EPA Section 608

| 608 area | Course modules |
|----------|----------------|
| Core (ozone, Montreal Protocol, recovery basics, safety, PT relationships) | 1, 4, 9, 10, 11 |
| Type I / II content (recovery, evacuation, leak repair for small and high-pressure appliances) | 9 + R2.5, R2.9, R1.10 |
| Type II / III equipment context (commercial and industrial plant, chillers, low-pressure systems) | 6 + R1.7, R2.1, R2.4 |

Note that the course teaches **Australian** practice and law; the 608 mapping
covers shared technical content, not US regulatory specifics.

## Universities / higher education

For introductory applied-thermodynamics and HVAC&R units, the platform maps
to typical learning outcomes:

| Typical outcome | Course support |
|-----------------|----------------|
| Explain the vapour-compression cycle and its energy flows | Modules 1–2, R1.1, simulator, guided tour |
| Analyse cycles on the P–h diagram; compute refrigeration effect, work, COP | Module 2, R2.7, performance panel, healthy-cycle overlay |
| Relate saturation pressure and temperature; use property data | Module 1, R2.7, PT chart & trainer, per-fluid saturation tables (R32, R454B and R290 are CoolProp-derived) |
| Evaluate off-design and fault behaviour | Modules 5, 8, R2.8, fault simulation, Technician Quiz, Diagnosis Workshop |
| Refrigerant selection, environmental and safety constraints | Module 4, 11, R2.1 |
| Represent a plant as a circuit: components, accessories and where they belong | Module 3, R1.6, R2.12, System Builder |
| Apply psychrometrics to air-conditioning processes | R2.3, R2.4 |
| Estimate cooling loads and select plant | R2.6 |
| Analyse AC circuits, power and power factor | E.9, E.10, E.14 |
| Explain electrical machines, transformers and their protection | E.6, E.7, E.11, E.12, R1.14 |

## Delivery options for institutions

- **LMS (Moodle, Canvas, Blackboard, D2L)**: import the SCORM 1.2 package
  (`npm run build:scorm` → `dist/refrigeration-course-scorm12.zip`).
  Completion status and the exam score report to the gradebook; learner
  progress is stored against their LMS account.
- **Web**: host the static site (e.g. GitHub Pages) — progress stays in the
  learner's browser, with export/import for handing progress to instructors.
- **Classroom**: the instructor dashboard (`teach.html`) aggregates student
  progress exports into a cohort view with CSV download — no server needed.

## Keeping this current

When the training package is re-released: update `QUALIFICATION` and
`UNITS` in `js/competency.js`, re-check every module's `units:` tag, and
update the edition register in `js/refdocs.js` so the tests flag any lesson
or document still naming the old code.
