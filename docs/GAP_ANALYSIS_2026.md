# Gap Analysis — the platform against the "amazing RAC learning platform" vision

**Date:** September 2026
**Scope:** every live file in the repository (the `_to_delete/` tree is
excluded from the assessment and flagged below), read against a five-pillar
vision for a TAFE / RTO-grade refrigeration and air-conditioning platform —
immersive simulation, adaptive learning, a comprehensive current content
library, assessment and certification readiness, and collaborative and
institutional features — with an explicit requirement that everything is
taught to **current standards, the ARCtick Codes of Practice and the AIRAH
texts**.

This document does two things. Section 1 is an honest scorecard: what the
vision asks for, what exists today, and how far apart they are. Section 2 is
the standards-currency audit, with file-level findings. Section 3 turns the
gaps into a ranked, sequenced plan that respects what the platform is — a
zero-dependency static site that already ships to GitHub Pages and as a
SCORM package — rather than proposing a rewrite.

The short version: **the content pillar is largely delivered and the
simulation pillar is well ahead of the market; the adaptive, evidence-mapping
and institutional pillars are where the gaps are, and there are a handful of
currency fixes that should land before anything else.**

**Progress since this was written (same day):** groups 3.1 and 3.2 below
have landed. The 2007 citations are gone and an **edition register** with a
CI test now guards against them; module 11 has a lesson on what the **2025
edition changed**; the `_to_delete` tree is out of the repository; the
curriculum mapping is rewritten to **UEE32225** (which superseded UEE32220
in March 2025, a fact the original audit below missed) and every module
carries `units:` tags checked by tests; **R32, R454B and R290** are in the
tools with CoolProp-derived tables; and the Service Bay and Diagnosis
Workshop carry a graded **flammable-zone** step on A2L/A3 charges. The
scorecard and §2 are left as written, as the record of what was found.

---

## 1. Scorecard — the vision against what exists

Status key: **Done** = delivered and tested · **Partial** = a real version
exists but short of the vision · **Missing** = nothing yet · **Out of scope
(static)** = needs a server or a different medium; recommend leaning on the
host LMS instead.

### Pillar 1 — Immersive and realistic simulation

| Vision item | What exists today | Status | Gap |
|---|---|---|---|
| Interactive animated schematics with live pressures/temperatures | `simulator.html`: animated SVG cycle, seven circuit variations (`js/circuits.js`), schematic **or** equipment view (`js/equipment.js`), live P–h dot, gauge manifold with PT rings, healthy-cycle overlay | **Done** | Only four refrigerants, none of them A2L (see §2.3) |
| Fault injection and diagnostics with virtual instruments | 15 faults in `js/data.js` (11 universal + 4 circuit-specific); Technician Quiz hides the fault; **Diagnosis Workshop** (`diagnose.html`) gives no numbers — the learner chooses 13 measurement points, fits the instrument, derives superheat/subcooling/TDs and commits, scored on method as well as answer | **Done** — this is the strongest part of the platform | No electrical fault injection (no wiring or control-circuit diagnosis), no intermittent or compound faults, no difficulty ladder |
| Virtual hands-on procedures (evacuate, charge, braze, wire, leak-test) | **Service Bay** (`service.html`) covers gauge hook-up and service-valve work, graded on order of work with realistic consequences (venting counter, HP trip). Recovery, evacuation, charging, pressure testing and brazing are taught as lessons only | **Partial** | The procedure-trainer pattern exists and is proven; it has been applied to one procedure out of the six the Code of Practice governs |
| Realistic equipment models (3D, disassemble/reassemble) | 2D equipment artwork of the same circuit, drawn from data | **Out of scope (static)** | Recommend against 3D/VR in this codebase; see §3.6 for the cheaper substitute |

### Pillar 2 — Adaptive and personalised learning

| Vision item | What exists today | Status | Gap |
|---|---|---|---|
| Pre-assessment and gap analysis | None. Every learner starts at lesson 1 of the pathway | **Missing** | The 2,098-question bank makes a placement quiz per stream cheap to build client-side |
| Progress tracking and feedback | Per-lesson progress, per-stream and final exams, review list, "next up", export/import; instant explanations on every quiz answer | **Done** | Progress is per-lesson, not per-competency; nothing tells a learner *which unit of competency* they are ready for |
| Spaced repetition | `js/srs.js`: simplified SM-2, due counts, review-ahead, typed-recall cards | **Done** | — |
| Differentiated instruction | "In plain words" box on every lesson; Guided Tour; the simulator "starts simple" | **Partial** | No "go deeper" layer, and no way to skip what a placement quiz shows is known |

### Pillar 3 — Comprehensive, current content library

| Vision item | What exists today | Status | Gap |
|---|---|---|---|
| Modular units | 64 modules / 517 lessons across five streams, markdown-authored, validated by tests | **Done** | — |
| Rich media (diagrams, models) | 30+ original SVG figures (`js/figures.js`), equipment view, animated cycle | **Done** for diagrams | No photographs or video; acceptable for a static site but worth an image library of real plant (own photos, licensed) |
| Manufacturer data (specs, wiring diagrams, manuals) | Generic wiring-diagram reading in R1.13, R2.13 and C.10; nothing manufacturer-specific | **Partial** | Copyright means manuals cannot be bundled; the fix is a curated **link-out library** plus original "read this diagram" exercises drawn in the house style |
| Standards and regulations integrated | Reference library (`js/refdocs.js`) indexes the **2025 Code of Practice** clause by clause with `!CITE` links; AS/NZS 3000, 3017, 3760, 4836, 5149 cited at topic level; RHL/RTA licensing taught | **Done**, with currency defects | See §2 — stale 2007 reference, UEE11 unit codes, no A2L refrigerant in the tools |
| Troubleshooting flowcharts / searchable fault library | The data is all there (`FAULTS` with signature, diagnosis and field clues; `interpret()` in `js/diagnose.js` names the classic signatures) but there is no page that presents it as a browsable symptom → cause → test library | **Partial** | A read-only "Fault library" page generated from existing data is a small job with high classroom value |

### Pillar 4 — Assessment and certification readiness

| Vision item | What exists today | Status | Gap |
|---|---|---|---|
| Formative and summative assessment | Lesson quizzes, stream exams, final exam at 80%, certificate with verifiable ID | **Done** | Multiple-choice only, apart from seven typed-recall cards and the capstone's self-marked written answers |
| Performance-based (process) evaluation | Service Bay grades order of work; Diagnosis Workshop rates measurement efficiency; System Builder grades placement | **Done** for three tools | Not aggregated into anything an instructor can read as evidence |
| Capstone projects (multi-stage) | The **capstone stream** is exam revision, not a project | **Missing** | The engines to chain build → commission → fault → repair already exist as separate pages |
| Alignment to Cert III outcomes (UEE32220) | `docs/CURRICULUM_MAPPING.md` maps to **superseded UEE11 codes** (UEENEEJ102A/103A/104A/108A) by skills area | **Partial** | Needs remapping to UEE32220 units at knowledge-evidence level, and the mapping needs to live in code (tags on modules/questions), not only in a document |

### Pillar 5 — Collaborative, community and institutional features

| Vision item | What exists today | Status | Gap |
|---|---|---|---|
| Instructor dashboard | `teach.html`: cohort table from student progress exports, CSV, sample cohort; fully client-side | **Partial** | No assignment, no custom quizzes, no live view, no per-unit reporting |
| Peer learning, forums, live Q&A | None | **Out of scope (static)** | Use the host LMS's forums; do not build a second one |
| Reporting and analytics for accreditation | CSV of module completion | **Partial** | Needs per-unit-of-competency and per-tool evidence export |
| Branding / customisation | CSS tokens in `styles.css`; no configuration surface | **Partial** | A small `config.js` (logo, RTO name, colours, which streams are on) covers most asks |
| SCORM / LTI | SCORM 1.2 package (`npm run build:scorm`) with gradebook reporting and 4 KB-safe suspend data | **Done** for SCORM 1.2; LTI 1.3 **out of scope (static)** | xAPI statements from the tools would carry process evidence that SCORM 1.2 cannot |
| Administrator controls, SSO | None | **Out of scope (static)** | Delegate to the LMS |
| Mobile responsiveness | Done in the August 2026 series of commits | **Done** | — |
| Offline access | None (no service worker, no web-app manifest) | **Missing** | A service worker is a few dozen lines and makes the whole site work in a workshop with no signal |
| Gamification | Deliberately omitted ("no streaks, points or badges") | **Design decision** | See §3.7 — keep it calm, but add optional mastery signals |
| Plain language | "In plain words" on every lesson | **Done** | — |

---

## 2. Standards-currency audit

The user's requirement is that everything is to *current* standards, the
ARCtick Codes of Practice and the AIRAH texts. Findings, most important first.

### 2.1 Refrigerant Handling Code of Practice — 2025 edition

**Current position:** the Australian Refrigeration Council published the
2025 editions of Parts 1 and 2 (facilitated by AIRAH, ARC and DCCEEW), the
first revision since 2007, now delivered digitally; the changes track updated
standards and regulations and add focus on leak inspection, leak detection and
leak testing. The reference library in `js/refdocs.js` is already built on the
2025 edition (ISBN, chapter list, clause index), and core module 11 teaches it
clause by clause. **This is in good shape.**

**Defects found:**

- `js/course101.js:1654` still tells the learner that licensed handlers must
  comply with "the Refrigerant Handling Code of Practice **2007**, Parts 1
  and 2". This contradicts core module 11 and `docs/REFERENCES.md`. One-line
  fix, and it is exactly the kind of drift the platform should catch
  automatically (see §3.1, "edition register").
- `docs/REFERENCES.md:80` describes the Code as "First published 2007;
  revised edition current — always use the latest" rather than naming the
  2025 edition. Name it.
- There is no lesson that explains **what changed between 2007 and 2025**.
  Every technician who trained before 2025 learned the old code; a
  "what's new" lesson (leak inspection and testing emphasis, A2L provisions,
  updated referenced standards) is the single most useful currency addition.

### 2.2 UEE training package — the mapping uses superseded codes

`docs/CURRICULUM_MAPPING.md` maps by skills area against **UEE11 codes**
(UEENEEJ102A, 103A, 104A, 108A) and defers UEE32220 to "map with your RTO".
*(Correction found while acting on this: UEE32220 is itself superseded —
**UEE32225** was released on 24 March 2025 and teach-out under UEE32220 ended
on 23 March 2026. The rewritten mapping targets UEE32225.)* UEE32220's core
included, per the released qualification structure: UEECD0007 (apply WHS regulations, codes and
practices), UEECD0016 (document and apply measures to control WHS risks),
UEECD0019 (fabricate, assemble and dismantle utilities industry components),
UEECD0020 (fix and secure electrotechnology equipment), UEECD0042 (solve
problems in ELV single path circuits), UEECD0051 (use drawings, diagrams,
schedules, standards, codes and specifications), UEECO0010 (participate in
refrigeration and air-conditioning work and competency development) and
**UEERA0031 (diagnose and rectify faults in air-conditioning and
refrigeration control systems)**, plus a points-weighted elective set
(the UEERA units for vapour-compression systems, tubing, recovery/charging,
installation and commissioning). The codes and the current release number
should be confirmed against training.gov.au when the mapping is rewritten.

Two consequences:

- The document mapping should be **rewritten to UEE32220 units**, at the
  level of each unit's knowledge evidence, keeping the "indicative, validate
  with your RTO" caveat.
- More importantly, **UEERA0031 is a core unit and the platform has no
  control-system fault-finding tool.** The Diagnosis Workshop is
  refrigerant-side only. An electrical/control-circuit diagnosis workshop is
  the largest single alignment gap in the simulation layer (see §3.3).

### 2.3 AS/NZS 5149 and A2L refrigerants — the tools lag the lessons

AS/NZS 5149.1–4:2016 (with amendments 1 and 2, 2018) remains the referenced
safety standard, and its charge-limit rules are what make A2L handling
different. The **lessons** are current: R32, R290, R744, R717, A2L classes,
charge-cap factors, Kigali and the HFC phase-down all appear across dozens of
files, and AS/NZS ISO 817 classification is taught.

The **tools** are not. `js/data.js` carries saturation tables for R134a,
R410A, R22 and R404A only — two of which are legacy fluids and none of which
is A2L. A learner cannot put R32 on the gauges, cannot practise a PT trainer
question on R454B, and cannot see the Service Bay treat a flammable charge
differently. Since R32 is the dominant split-system refrigerant sold in
Australia today and R454B is the R410A successor for ducted and packaged
plant, this is the most visible currency gap a TAFE teacher will notice.

### 2.4 AIRAH texts

The content streams are written from the ARAC manuals (Boyle, Vols 1 and 2,
AIRAH) and *Electrical Principles for the Electrical Trades*, 8th ed. AIRAH's
current ARAC editions are the fifth editions of both volumes; the README names
the edition for Vol 2 only. State the edition for Vol 1 in
`docs/REFERENCES.md` and `docs/SOURCE_COVERAGE.md`, and record it in the
edition register (§3.1) so a sixth edition triggers a review.

Two AIRAH resources the vision implies but the platform does not yet use:
the **AIRAH DA manuals** (DA09 air-conditioning load estimation, DA19 HVAC&R
maintenance, DA20 humid tropical design, etc.) are cited only a handful of
times and only by name. They cannot be reproduced, but R2.6 (load
estimating) and R2.9/R2.10 (maintenance and commissioning) should cite them
at topic level the way AS/NZS standards are cited.

### 2.5 Other currency notes

- AS/NZS 3000:2018 is correctly named throughout; `js/course113.js:47` even
  explains the 2007-to-2018 shift. Good model for the COP lesson proposed
  above.
- AS/NZS 3666 (cooling towers, Legionella) is taught in C.9. Good.
- No mention of AS 1677 (the pre-5149 refrigerating systems standard) or
  AS/NZS 60335.2.40 (appliance safety, which is where A2L charge limits for
  factory-sealed splits actually come from). The latter belongs in the A2L
  lesson.
- Content flagged as **safety-critical numbers** (test pressures, hold times,
  vacuum depths) is taught with method plus "read the current edition" —
  the correct policy. Keep it.

---

## 3. Ranked improvements

Ordered by learning value per unit of effort, and grouped so each group is
shippable on its own. Everything in groups 1–5 fits the current static
architecture and its test suite.

### 3.1 Currency and hygiene first (days)

1. **Fix the 2007 reference** in `js/course101.js` and name the 2025 edition
   in `docs/REFERENCES.md`.
2. **Add an edition register** to `js/refdocs.js`: every cited document with
   its current edition and a review date, and a test that fails if lesson
   text names a superseded edition string (e.g. "Code of Practice 2007",
   "AS/NZS 3000:2007"). This turns "keep it current" from a promise into a
   CI check.
3. **Write the "Code of Practice 2025 — what changed" lesson** in core
   module 11, cited to the 2025 clauses already in the reference library.
4. **Remove `_to_delete/`** from the repository. It is 45 MB and 532 tracked
   files of stale staging copies, zips and lock files. It ships with every
   GitHub Pages deploy and clone, and it will confuse anyone who greps the
   repo for content. Git history keeps it if it is ever needed.
5. **Rewrite `docs/CURRICULUM_MAPPING.md` to UEE32220 units**, and add a
   `units:` tag to each module (and, over time, to each question) so the
   mapping is data the dashboard and exports can use.

### 3.2 Bring A2L into the tools (1–2 weeks)

1. Add **R32 and R454B** saturation tables to `js/data.js` (R32 first: it is
   a pure fluid, so no glide handling is needed). Add **R290** with a
   flammability flag. Extend the PT trainer question generator to them.
2. Make the Service Bay and Diagnosis Workshop **refrigerant-aware for A2L**:
   a flammable charge should require the learner to state the detector type
   and ventilation check before cracking a port, mirroring COP clauses
   already summarised in `refdocs.js` (halide detectors prohibited, combustible
   gas detector required).
3. Defer **R744 (CO₂)**: a transcritical cycle needs a different model and
   P–h dome. Teach it in lessons (already done) and put it on the roadmap
   behind CoolProp-grade properties.

### 3.3 Electrical and control-circuit diagnosis workshop (3–5 weeks)

This closes the UEERA0031 gap and is the highest-value new tool.

- A drawn control circuit (ladder and wiring views, as the System Builder
  draws schematic and equipment views) for a packaged unit: contactor,
  overload, HP/LP switches, thermostat, defrost timer, fan relay, run and
  start capacitors, crankcase heater.
- Hidden faults: open coil, welded contacts, failed capacitor, HP switch
  open, thermostat calling but no contactor pull-in, earth fault, high
  resistance joint.
- Instruments: multimeter (V, Ω, continuity), clamp meter, insulation tester.
  Readings are only available at points the learner probes, in the Diagnosis
  Workshop pattern, and **test-for-dead before touching** is graded the way
  order of work is graded in the Service Bay (AS/NZS 4836 practice).
- Scoring on method: isolation proved first, half-split searching, no
  measuring across a live contactor coil with the meter on ohms.
- Content already exists to hang it on: R1.15 (electrical testing and
  fault-finding), E.13 (control circuits), C.3 (mandatory tests) and C.10
  (wiring diagrams, safeties and control circuits).

### 3.4 Procedure trainers for the rest of the Code (2 weeks each)

Reuse the Service Bay state machine pattern (`js/servicebay.js`: pure rules,
order-of-work grading, consequences) for the procedures the Code of Practice
actually governs:

1. **Pressure and leak-tightness test** — OFN only, stages, isolate, record
   pressure and ambient, temperature-adjust, hold 24 h (commissioning) or 1 h
   (repair), 25–90 % of PS for a repair test; detector sensitivity 5 g/year.
   Every rule is already a clause summary in `refdocs.js`.
2. **Evacuation** — deep vacuum with a dedicated micron gauge, triple
   evacuation with OFN breaks, vacuum decay test with a pass/fail curve.
3. **Recovery and charging** — cylinder arithmetic (80 % rule), liquid vs
   vapour charging for blends, weigh-in, superheat and subcooling charging
   methods, record keeping.
4. **Brazing** — nitrogen purge flow, joint fit-up, heat pattern; graded on
   sequence and on whether the purge was running.

Each maps directly to a UEE32220 elective and to the licence theory.

### 3.5 Adaptive layer (2–3 weeks)

1. **Placement quiz per stream**: 20 questions sampled across the stream's
   modules (the exam sampler in `js/exam.js` already does this), producing a
   recommended path that marks modules as "ready to test out", "revise" or
   "start here". Store the result beside progress; no server needed.
2. **Mastery per unit of competency**: with `units:` tags from §3.1, compute
   and show mastery per UEE32220 unit on the course home and in the
   instructor export.
3. **Difficulty ladder** in the Technician Quiz and Diagnosis Workshop: level
   1 single fault and healthy ambient, level 2 random ambient and load,
   level 3 compound faults (a dirty condenser *and* a slight undercharge) and
   near-signature families only.
4. **"Go deeper" links** from core lessons to the R1/R2 module that treats
   the same topic at trade depth (the inverse of "In plain words").

### 3.6 Capstone project and evidence (2–3 weeks)

- A **multi-stage scenario** that chains the existing tools with one shared
  state: build the circuit to a brief (System Builder) → pressure test and
  evacuate (new trainers) → commission and record readings (Diagnosis
  Workshop with no fault) → return six months later to a hidden fault →
  diagnose and state the repair. One score, one evidence record.
- An **evidence export** per learner: for each tool attempt, what was done,
  in what order, what was measured, what was answered — as a JSON the
  instructor dashboard can render per UEE32220 unit. This is what an RTO
  auditor would want to see, and it is what SCORM 1.2 cannot carry (a later
  xAPI adapter can).
- On 3D and VR: the cost is high and the pedagogy is unproven relative to
  the interactive 2D the platform already does well. The cheaper substitute
  is an **image library of real plant** — photographs of service valves,
  driers, sight glasses, contactors, taken by the team or licensed — shown
  beside the drawn component in the equipment view and the click-to-learn
  cards.

### 3.7 Ease-of-use and delivery (1 week total)

1. **Offline**: a service worker and web-app manifest so the whole site is
   installable and works without signal in a workshop. The site is static
   and self-contained; this is a small job.
2. **Load time**: `learn.html` loads 68 scripts and about 6.6 MB of course
   JavaScript on every visit. Load content per stream on demand; keep the
   test that checks file order.
3. **Fault library page**: a browsable symptom → likely causes → what to
   measure → how to tell them apart page generated from `FAULTS`, the
   family tips and `interpret()`; searchable; printable.
4. **Gamification**: keep the calm, no-leaderboard design (it is a considered
   choice and suits adult learners), but add optional **mastery signals**:
   per-unit mastery, tool "sharp" ratings collected over time, and a personal
   best on the Technician Quiz. Nothing social.
5. **Configuration surface**: `config.js` for RTO name, logo, colours and
   which streams are enabled, read by the nav and certificate.

### 3.8 Institutional (server-side; only against a pilot's requirements)

Unchanged from `docs/REVIEW_AND_ROADMAP.md`: LTI 1.3, SSO, live cohort
dashboards, assignment and custom quizzes need a backend. Add **xAPI** to
that list, because it is the only standard route to reporting the process
evidence the tools produce. Forums and webinars should stay in the LMS.

---

## 4. Suggested sequence

| When | Deliver | Why first |
|---|---|---|
| Next two weeks | §3.1 (currency fixes, edition register, COP 2025 lesson, repo cleanup, UEE32220 mapping) and §3.2 (R32/R454B/R290 in the tools) | These are the things a TAFE teacher will check on day one |
| Weeks 3–8 | §3.3 electrical/control diagnosis workshop; first two procedure trainers from §3.4 (pressure test, evacuation) | Closes the core-unit gap and turns the Code into practice |
| Weeks 9–12 | §3.5 placement quiz and unit mastery; §3.7 offline, lazy loading, fault library | Adaptive pillar and workshop usability |
| Term 2 | §3.6 capstone scenario and evidence export; remaining §3.4 trainers | Assessment-readiness for an RTO pilot |
| After a pilot signs | §3.8 | Build against a real buyer's requirements |

## 5. What to protect

- The **pure-engine plus UI** split (`servicebay.js`, `circuit.js`,
  `diagnose.js`, `model.js`) with unit tests and a page-boot test. Every new
  tool above should follow it.
- The **originality and citation policy** in `docs/REFERENCES.md`: cite paid
  standards and texts at topic level, paraphrase public codes with clause
  citations, never reproduce tables. It is what makes the platform sellable
  to an RTO.
- The **"teach the method, point to the current edition"** rule for
  safety-critical numbers.
- The calm learning design: supportive feedback, spaced repetition, no
  leaderboards.
