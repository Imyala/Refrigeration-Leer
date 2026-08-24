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
- **Structured course** — 11 modules / 39 lessons (fundamentals → cycle →
  components → refrigerants → superheat/subcooling → system types →
  electrical → diagnosis → repair procedures → safety), each with a checked
  quiz; lessons deep-link the simulator into the scenario being taught.
- **Assessment** — a randomised 20-question final exam (80% pass) and a
  printable certificate of completion with a verifiable ID.
- **Instructor tools** — a client-side cohort dashboard with per-module
  completion, exam results and CSV export.
- **LMS delivery** — SCORM 1.2 package with gradebook reporting and
  per-account progress persistence.

## Why it wins

1. **It behaves like a real system.** Faults reshape pressures, superheat,
   subcooling, discharge temperature, COP and the P–h cycle coherently —
   students learn signatures, not slogans.
2. **Diagnosis is practised, not described.** The Technician Quiz gives a
   student fifty faulty systems in an afternoon; a workshop gives them two.
3. **Zero infrastructure.** Static files: no server, no accounts, no student
   data held by the vendor. IT approval is trivial.
4. **Fits how institutions already deliver** — SCORM into the existing LMS,
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
   two modules matching the term's delivery plan.
2. **Weeks 1–2:** assign Module 1–2 lessons as pre-workshop homework; LMS
   shows completion.
3. **Mid-term:** assign the Technician Quiz — e.g. "screenshot a 10-scenario
   streak of 8+". Compare diagnostic confidence against previous cohorts.
4. **Ongoing:** theory-of-procedure lessons (Module 9) before each workshop
   session, freeing bench time for hands-on work.
5. **End of term:** students sit the final exam; instructor exports cohort
   CSV; teacher and students complete a short feedback form.
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
- Content expansion: more refrigerants (R32, CO2), electrical simulations,
  video walkthroughs of hands-on procedures.

## Contact

Replace with your sales contact details before distributing.
