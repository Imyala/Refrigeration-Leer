# Platform Review & Roadmap

**Goal:** Grow the Refrigeration Cycle Simulator into a complete learning platform —
how refrigeration systems work, how to identify and diagnose faults, what to do to
repair them, and how to recognise correct running pressures — packaged so it can be
sold to universities, TAFEs and other higher-education institutions.

**Date:** July 2026

## Status

- **Phase 1 — done.** Technician diagnosis quiz, virtual gauge manifold with PT
  rings, PT chart + target-pressure trainer, kPa/bar/psi + °C/°F units, fault
  library grown to 10, accessibility pass, code modularised with tests + CI.
- **Phase 2 — done, and since expanded.** Structured course (`learn.html`):
  **64 modules / 516 lessons / 2,094 quiz questions**, grouped into five
  streams — Core program (11 modules / 39 lessons), Refrigeration &
  air-conditioning 1 (16 / 151), Refrigeration & air-conditioning 2 (13 / 112),
  Electrical principles (14 / 135) and Capstone exam preparation (10 / 79).
  Per-lesson quizzes, explanations, saved progress and simulator deep links
  throughout; content authored in a markdown subset with validation tests. The
  capstone stream adds written practice questions with model answers the
  learner reveals after attempting them (the `>?` markdown prefix, rendered as
  native `<details>`), used 237 times across the stream. Full breakdown and
  source audit trail in docs/SOURCE_COVERAGE.md.
- **Phase 3 — static-feasible parts done.**
  - **SCORM 1.2 package** (`npm run build:scorm`): imports into Moodle/Canvas/
    Blackboard/D2L; reports completion + exam score to the gradebook and stores
    progress in the LMS (suspend_data), so it follows the learner's account.
    Progress is encoded compactly (5 characters per lesson), so the largest
    record a learner can produce — all 516 lessons, all five stream exams and
    the final exam, 522 entries — occupies 2,691 of SCORM 1.2's
    4,096-character suspend_data budget, where the old readable format would
    have needed 25,218. The earlier overflow concern is resolved, and the size
    is covered by a test against the whole syllabus.
  - **Exams**: a whole-program final exam (64 questions, one random question
    per module) plus one exam per stream (two per module of that stream — 20
    questions for the ten-module capstone stream), all at an 80% pass mark,
    and a printable **certificate of completion** with a verifiable integrity
    code.
  - **Instructor dashboard** (`teach.html`): aggregates student progress
    exports into a cohort table (module completion, exam, overall %, CSV) —
    fully client-side.
  - **Progress export/import** on the course page; learner name field.
  - **Curriculum mapping** (docs/CURRICULUM_MAPPING.md): UEE/Cert III RAC,
    EPA 608, university outcomes, delivery options.
  - Accessibility round 2: skip links, aria-live feedback, focus management
    on route changes, aria-current navigation.
- **Phase 3 — remaining items that genuinely require a server** (build against
  a pilot institution's requirements, not speculatively):
  - **LTI 1.3 tool** (OIDC login + grade passback) — needs a hosted backend
    with key management; SCORM covers LMS delivery until then.
  - **Central accounts / SSO (SAML/OIDC)** and live instructor dashboards —
    needs a database + auth provider; the file-based dashboard covers pilots.
  - **CoolProp-grade property data** (WASM) — an accuracy upgrade for
    university sales; current tables are honest and disclosed as approximate.
- **Phase 4 — collateral & go-to-market assets done.**
  - **"For institutions" landing page** (`about.html`): the pitch, feature
    grid, deployment options, procurement-pack index, pilot invitation.
  - **Procurement pack** in docs/: sales & pricing overview with a one-term
    pilot playbook (SALES_OVERVIEW.md), WCAG 2.1 AA conformance statement
    (ACCESSIBILITY_CONFORMANCE.md), privacy & security one-pager
    (PRIVACY_SECURITY.md), LMS integration guide (LMS_INTEGRATION_GUIDE.md),
    plus the existing curriculum mapping.
  - **Sample cohort demo** on the instructor dashboard, so prospects see the
    cohort view without real student data.
  - Remaining Phase 4 work is **business, not code**: run the pilot
    (playbook in SALES_OVERVIEW.md), validate pricing, add real contact
    details to about.html and SALES_OVERVIEW.md, and commission the
    independent accessibility audit before contractual commitments.

---

## 1. Review of the current app

### What it is

A single-page, zero-dependency static site (HTML + CSS + vanilla JS, ~1,300 lines
total) with:

- An animated SVG schematic of a vapour-compression cycle (compressor, condenser,
  receiver, metering device, evaporator) with colour-coded, flowing pipes.
- A live P–h diagram built from per-refrigerant saturation tables (R134a, R410A,
  R22, R404A), with a moving state dot.
- Compressor-speed and evaporator-load sliders driving a qualitative
  operating-point model (pressures, superheat, subcool, discharge temp, COP,
  capacity all respond).
- Four simulated faults (low charge, dirty condenser, iced/starved evaporator,
  overcharge) with gauge-signature diagnostics, on-schematic visualisation
  (phase-front movement, wrong-state "spill" into adjacent lines), and a
  healthy-cycle overlay on the P–h chart.
- A 7-step guided tour and click-to-learn component cards.

### Strengths (worth protecting)

1. **The pedagogy of the simulator is genuinely good.** Colour-coded state flow,
   the live P–h dot, fault signatures that reshape the whole system, and the
   healthy-cycle overlay are exactly how this subject should be taught. Most
   commercial competitors are static diagrams or video; this is interactive.
2. **Data-driven design.** Refrigerants are swappable table-backed entries; the
   fault library is declarative (`FAULTS` + `VIZ`). Adding content is cheap.
3. **Clean, readable code** with honest accuracy disclaimers in the README.
4. **Zero infrastructure** — deploys to GitHub Pages, runs offline, no build step.
   Great for demos and classroom use behind institutional firewalls.
5. Basic accessibility groundwork exists (tabindex, roles, aria-labels, keyboard
   activation of components).

### Weaknesses / gaps against the stated goal

| Area | Gap |
|------|-----|
| **Learning content** | One simulator, no structured curriculum. No fundamentals (heat, latent heat, pressure–temperature relationship), no system types (split AC, cool rooms, supermarket racks, chillers, heat pumps), no electrical, no safety. |
| **Diagnosis practice** | The app *shows* faults; it never *asks the learner to find one*. There is no "here are the gauge readings — what's wrong?" exercise, which is the core skill you're targeting. |
| **Repair** | Nothing. No recovery/evacuation/charging procedures, no brazing, no leak detection, no TXV adjustment. |
| **Running pressures** | No pressure–temperature (PT) chart tool, no target-pressure exercises ("given 35 °C ambient and a 4 °C box, what should the gauges read for R134a?"), no gauge-manifold representation. |
| **Assessment & progress** | No quizzes, no scoring, no accounts, no progress tracking, no certificates — all mandatory for institutional sale. |
| **Units** | Pressures are bar-only. Australian industry and TAFE teach kPa (and legacy psi); US market needs psi/°F. Needs a unit-system toggle. |
| **Fault coverage** | 4 faults. Field-relevant missing ones: restricted filter-drier, TXV failed open/closed, non-condensables in the system, compressor valve failure, condenser/evaporator fan failure, undersized/oversized metering. |
| **Accuracy ceiling** | Property tables are approximate; fine for intuition, but universities will probe. Needs either clearly-scoped "teaching mode" framing or real property data (CoolProp compiled to WASM runs fully client-side). |
| **Compression model** | h2 is derived from discharge temperature heuristics, not isentropic efficiency — acceptable now, but an isentropic model with an efficiency slider is itself a teachable feature. |
| **Accessibility for procurement** | Refrigerant state is encoded by colour alone (fails colour-blind users), no `prefers-reduced-motion` support, dark-theme-only (a light theme with a nav switch has since been added; see ACCESSIBILITY_CONFORMANCE.md). WCAG 2.1 AA is a hard procurement requirement at most institutions. |
| **Engineering** | Single 770-line JS file, no modules, no tests, no CI. Fine today; will not survive a platform build-out. |
| **LMS integration** | None. Universities/TAFEs run Moodle, Canvas, Blackboard, D2L. Without LTI 1.3 (and/or SCORM packages) the product is nearly unsellable to them regardless of quality. |

### Minor technical notes

- The P–h moving dot traverses all four legs in equal time rather than in
  proportion to residence time — cosmetic, but worth fixing when touched.
- `deriveAt()` caches `_capRef` on the refrigerant object — works, but global
  mutable state like this should be isolated when the code is modularised.
- Info-panel HTML is assembled with string interpolation — fine while all content
  is authored in-repo; must be revisited before any user-generated or
  server-delivered content exists.

---

## 2. Where this needs to go — the product shape

A complete platform has four pillars, and the current app is ~40% of pillar 1:

1. **Understand** — interactive simulators + structured lessons (fundamentals →
   components → whole systems → system types → electrical → refrigerants &
   environment → safety/licensing).
2. **Diagnose** — scenario engine: the system presents symptoms (gauges,
   temperatures, sight glass, frost patterns, sounds, electrical readings) and the
   learner must identify the fault, with hints, scoring and worked explanations.
3. **Repair** — procedure walkthroughs (recovery, evacuation to target microns,
   weighing in charge, superheat/subcool charging method, brazing, leak detection,
   component replacement) as illustrated/video step-by-steps with checkpoint
   questions. Hands-on can't be simulated honestly — position this as pre-lab /
   theory-of-procedure, which is exactly what institutions want to free up
   workshop time.
4. **Assess & administer** — quizzes per module, question banks, progress
   tracking, instructor dashboards, class/cohort management, LMS integration,
   curriculum mapping (for Australia: UEE training-package units for Cert III
   Air-conditioning & Refrigeration; ARCtick licence theory).

---

## 3. Phased roadmap

### Phase 1 — Deepen the simulator into a training tool (stay static, 100% client-side)

Highest learning value per unit of effort; everything here fits the current
architecture.

1. **Diagnosis quiz mode** ("Technician mode") — the app secretly applies a fault
   (optionally randomised speed/load too); learner sees only realistic
   instrumentation (gauges, line temps, superheat/subcool) and must name the
   fault. Score, streaks, explanation on reveal. *This is the killer feature for
   the fault-finding goal.*
2. **Unit system toggle** — kPa / bar / psi and °C / °F, persisted in
   `localStorage`. (kPa default for the AU market.)
3. **PT chart & target-pressure trainer** — interactive pressure–temperature
   chart per refrigerant; exercises like "R410A system, 6 °C evap — what suction
   pressure do you expect?"
4. **Virtual gauge manifold** — render high/low sides as analog gauges with
   PT-scale rings; learners must learn to *read gauges*, not digital readouts.
5. **Expanded fault library** — restricted drier, TXV failed open/closed,
   non-condensables, compressor valves, condenser fan failure, evaporator fan
   failure. The declarative `FAULTS`/`VIZ` structure makes each one cheap.
6. **Accessibility pass** — pattern/texture or labels in addition to colour on
   pipes and chips, `prefers-reduced-motion`, light theme (done: light is
   now the default, dark by choice), contrast audit.
7. **Code restructure + tests** — split `app.js` into ES modules
   (`properties.js`, `model.js`, `faults.js`, `viz/*.js`), add unit tests for the
   thermodynamic model (Vitest), simple CI. Do this *before* Phase 2 content lands.

### Phase 2 — Curriculum layer (still deployable as a static site) — **delivered**

Shipped and then expanded well past the original plan: the syllabus is now
64 modules / 516 lessons / 2,094 questions across five streams, written from
the source library (see docs/SOURCE_COVERAGE.md). Every item below is done.

1. **Lesson framework** — *done*: markdown-authored lessons rendered into a
   course-outline UI with embedded live simulator states (a lesson can deep-link
   the simulator into a specific refrigerant/fault/slider configuration).
2. **Module plan** — *done, and superseded by the five-stream syllabus.* The
   planned topics below are all covered, most of them by several modules each:
   - Fundamentals: heat, temperature, pressure, latent/sensible heat, the PT relationship
   - The vapour-compression cycle (existing simulator, extended)
   - Components deep-dive: compressor types, metering devices (cap tube vs TXV vs EEV), condensers/evaporators, accessories (driers, sight glasses, accumulators, receivers)
   - Refrigerants & the environment: ODP/GWP, phase-outs, A2L flammables, CO₂/ammonia, ARCtick / F-gas licensing context
   - Superheat & subcooling: measurement technique and what the numbers mean
   - System types: split AC, cool rooms, supermarket racks, chillers, heat pumps
   - Electrical fundamentals for RAC: motors, capacitors, contactors, pressure switches, basic ladder diagrams
   - Fault diagnosis (Phase 1 quiz engine, graduated difficulty)
   - Repair procedures: recovery, evacuation, charging (weigh-in, superheat, subcool methods), brazing, leak detection
   - Safety: refrigerant handling, pressure hazards, electrical safety, PPE
3. **Per-module quizzes** with a shared question-bank format (JSON), local
   scoring — *done*; 2,094 questions, which also feed the stream and final exams.
4. **Licence/exam revision** — *done, added after the original plan*: the
   **Capstone exam preparation** stream (10 modules / 79 lessons), aimed at the
   end-of-apprenticeship knowledge assessment — mandatory electrical tests and
   their acceptance values, the limits of a restricted electrical licence,
   reading manufacturer wiring diagrams, exam-condition calculations,
   installation and commissioning, recovery and cylinder arithmetic, TX valve
   superheat, and piping schematics from a written brief. It is written
   practice with model answers, not a copy of any real paper.

### Phase 3 — Platform & institutional readiness

Only start once Phases 1–2 have validated demand (see §4).

1. **Web app migration** (e.g. Next.js/SvelteKit): accounts, cohort/class
   management, progress persistence, instructor dashboards (who's stuck on what),
   assignment of modules.
2. **LMS integration — the sales gate**: LTI 1.3 tool (grade passback to Moodle/
   Canvas/Blackboard) and/or SCORM 1.2/xAPI export of modules. Institutions buy
   things that plug into what they run.
3. **Curriculum mapping** — map modules/quizzes to UEE training-package units of
   competency (Cert III RAC) for TAFE, and to typical uni thermo/HVAC course
   outcomes. Put the mapping in the sales deck.
4. **Accuracy upgrade** — swap approximate tables for CoolProp (WASM) so P–h
   plots, superheat and COP are reference-grade; keep a "simplified teaching
   mode" toggle.
5. **Compliance** — WCAG 2.1 AA audit, student-data privacy (AU Privacy Act /
   FERPA-equivalents), SSO (SAML/OIDC) since institutions will require it.

### Phase 4 — Commercialisation

1. **Pilot first, sell second** — get the Phase 1/2 product in front of one TAFE
   RAC teacher and one university lecturer; a semester-long free pilot with
   feedback rights is worth more than any feature.
2. **Pricing model** — per-seat annual site licence (institutional norm), with an
   instructor free tier to seed adoption bottom-up.
3. **Sales collateral** — curriculum-mapping matrix, WCAG conformance statement
   (VPAT-style), privacy/security one-pager, LMS-integration guide. Procurement
   asks for all four.
4. **Consider the individual-learner channel** (apprentices, licence-exam prep)
   as a parallel revenue stream — same content, self-serve subscription. The
   *content* side of this is now in place: the Capstone exam preparation stream
   is licence/knowledge-assessment revision. The channel itself (self-serve
   sign-up, billing) is still business work, not built.

---

## 4. Recommended immediate next steps (in order)

1. **Validate before building big:** demo the current simulator to 2–3 RAC
   teachers/trainers this month. Ask: "would a diagnosis-quiz version of this be
   assignable homework?" Their answer shapes everything after Phase 1.
2. **Build Phase 1 items 1–4** (diagnosis quiz, unit toggle, PT trainer, gauge
   manifold) — they directly serve the stated learning goals and are feasible in
   the current codebase.
3. **Restructure the code + add model tests** immediately after, before content
   volume grows.
4. Defer accounts/backend/LMS until a pilot institution says yes — those are
   expensive and only worth building against a real buyer's requirements.
