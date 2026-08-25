# Product & Pricing Overview

**Refrigeration Learning Platform** — an interactive training product for
TAFEs, universities, RTOs and corporate training departments teaching
refrigeration and air conditioning.

## The problem

Refrigeration theory is taught from static diagrams while the actual skill —
reading a live system's gauges, superheat and subcooling and reasoning about
what is wrong — is only practised on scarce, expensive workshop plant.
Students get too few diagnostic repetitions before they meet a real customer.

## The product

- **Interactive simulator** — a live vapour-compression cycle backed by
  per-refrigerant saturation data: animated state flow, P–h diagram, analog
  gauge manifold with PT rings, speed/load sliders, four refrigerants,
  kPa/bar/psi and °C/°F.
- **Ten realistic faults** with correct gauge signatures, and **Technician
  Quiz** mode: the fault is hidden and the student must diagnose from the
  instruments — unlimited scored repetitions of the exact skill employers
  want.
- **Structured course** — **64 modules / 516 lessons / 2,094 quiz questions**
  (roughly 706,000 words), grouped into five streams:
  - **Core program** (11 modules, 39 lessons) — the guided pathway:
    fundamentals → cycle → components → refrigerants → superheat/subcooling →
    system types → electrical → diagnosis → repair procedures → safety →
    the Refrigerant Handling Code of Practice taught clause by clause.
  - **Refrigeration & air-conditioning 1** (16 modules, 151 lessons) — the
    full first-year technical syllabus.
  - **Refrigeration & air-conditioning 2** (13 modules, 112 lessons) — the
    second-year / post-trade syllabus.
  - **Electrical principles** (14 modules, 135 lessons) — the electrical
    trade syllabus that underpins every control circuit.
  - **Capstone exam preparation** (10 modules, 79 lessons) — final-stage
    revision for the written knowledge assessment sat at the end of the
    Certificate III: how the assessment works, restricted electrical licence
    and duty of care, the mandatory electrical tests and their acceptance
    values, calculations under exam conditions, installation, pressure
    testing and commissioning, recovery and the Code of Practice, TX valves
    and superheat, components and piping schematics, refrigerant
    classification and site safety, and wiring diagrams and control circuits.
    Written-answer practice questions carry a **model answer the student
    reveals after attempting it**. All original material, written to the
    assessment's published scope — not a copy of any exam paper.

  Every lesson ends in a checked quiz with explanations; core lessons
  deep-link the simulator into the scenario being taught.
- **Assessment** — an exam for each stream (two questions per module: 22, 32,
  26, 28 and 20 questions) plus a whole-program 64-question final exam, all
  drawn at random from the 2,094-question bank, 80% pass, fresh paper every
  attempt,
  and a printable certificate of completion with a verifiable ID that names
  the stream when a stream exam is passed.
- **Instructor tools** — a client-side cohort dashboard with per-module
  completion, exam results and CSV export.
- **LMS delivery** — SCORM 1.2 package with gradebook reporting and
  per-account progress persistence.

## Why it wins

1. **It is a whole syllabus, not a topic.** One platform now carries a full
   **first-year** refrigeration and air-conditioning course, a full
   **second-year** course, and a full **electrical principles** course, on top
   of the guided core program — 516 lessons written from the standard
   Australian trade texts, chapter by chapter, with the source chapter behind
   every module documented in `docs/SOURCE_COVERAGE.md`. Institutions can put
   one product in front of first-years, second-years and electrical cohorts
   instead of buying three.
2. **The syllabus, and then revision for the assessment students actually
   have to pass.** The capstone stream is 10 modules of structured, final-stage
   revision for the written knowledge assessment at the end of the
   Certificate III — the mandatory electrical tests and their acceptance
   values, the limits of a restricted electrical licence, exam-condition
   calculations, commissioning to the standards, and drawing a control circuit
   or piping schematic from a written brief. Students practise **written**
   answers, not just multiple choice, and open a **model answer** once they
   have attempted the question, so they can mark themselves.

   Be precise about what this is when you sell it: it is **original revision
   material written to the assessment's published scope**. It is not a copy
   of an exam paper, it contains no real exam questions, and it does not
   predict the paper. What it does is make sure a student walks into the
   assessment having practised every topic the assessment covers, in the form
   it is asked. The originality position is documented in
   `docs/REFERENCES.md` and `docs/SOURCE_COVERAGE.md` and will stand up to a
   procurement review.
3. **It behaves like a real system.** Faults reshape pressures, superheat,
   subcooling, discharge temperature, COP and the P–h cycle coherently —
   students learn signatures, not slogans.
4. **Diagnosis is practised, not described.** The Technician Quiz gives a
   student fifty faulty systems in an afternoon; a workshop gives them two.
5. **Zero infrastructure.** Static files: no server, no accounts, no student
   data held by the vendor. IT approval is trivial.
6. **Fits how institutions already deliver** — SCORM into the existing LMS,
   or plain web, or classroom with the instructor dashboard.

## Suggested pricing (starting points — validate in pilots)

| Tier | Model | Suggested price (AUD) |
|------|-------|------------------------|
| Instructor evaluation | Single teacher, full product | Free |
| Department licence | One campus department, unlimited students | $2,500–4,000 / year |
| Institution licence | Whole institution, all campuses | $8,000–15,000 / year |
| Individual learner | Self-serve (apprentices, licence-exam prep) | $60–90 / year |

Rationale: per-seat pricing creates counting friction for a product with no
accounts; flat department/institution licences match how teaching software is
actually bought and keep the pilot-to-purchase step simple. Revisit once LTI
(per-seat countable) exists.

## Pilot playbook — one term, one class

**Objective:** evidence that students using the platform diagnose faults
faster/more accurately and that teachers save preparation time.

1. **Week 0 — setup (an hour):** import the SCORM zip into the LMS (or share
   the web link), instructor runs the Technician Quiz themselves, picks the
   stream matching the cohort (core program for first-timers, Refrigeration 1
   or 2 for trade-course delivery, Electrical principles for the electrical
   units, Capstone for a cohort approaching the end-of-apprenticeship
   assessment) and the two modules matching the term's delivery plan.
2. **Weeks 1–2:** assign Module 1–2 lessons as pre-workshop homework; LMS
   shows completion.
3. **Mid-term:** assign the Technician Quiz — e.g. "screenshot a 10-scenario
   streak of 8+". Compare diagnostic confidence against previous cohorts.
4. **Ongoing:** theory-of-procedure lessons (core Module 9, or R1.10 brazing
   and R2.5 service procedure for trade cohorts) before each workshop session,
   freeing bench time for hands-on work.
5. **End of term:** students sit the exam for the stream they studied (or the
   whole-program final exam); instructor exports cohort CSV; teacher and
   students complete a short feedback form.
6. **Review meeting:** results vs. success metrics; decision on licence.

**Success metrics:** lesson completion rate ≥ 70%; exam pass rate; teacher
NPS ("would you use it next term?"); minutes of prep time saved per week;
qualitative: which lessons/faults were most used.

## What's on the roadmap (built against buyer requirements)

- **LTI 1.3** (grade passback, roster sync) — for institutions that require
  it over SCORM.
- **SSO (SAML/OIDC)** and hosted central dashboards.
- **Reference-grade property data** (CoolProp) for university engineering
  units.
- Further expansion: more refrigerants (R32, CO2), electrical circuit
  simulation to sit alongside the electrical stream, and video walkthroughs of
  hands-on procedures. (The syllabus expansion itself has shipped — the
  first-year, second-year, electrical and capstone streams are complete.)

## Contact

Replace with your sales contact details before distributing.
