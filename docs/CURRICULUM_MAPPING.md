# Curriculum Mapping

How the course's eleven modules relate to formal training frameworks. This
mapping is **indicative** — it is a sales and planning aid, not a compliance
document. Training organisations must validate coverage against the current
version of their training package / certification scheme; unit codes change
between training-package releases.

**Standards alignment:** every lesson cites its references (ARCtick
Refrigerant Handling Code of Practice, AS/NZS 3000/5149/4836, and the ARAC
manuals Vols 1 & 2) in an in-lesson references panel — see
`docs/REFERENCES.md` for the master bibliography and the alignment policy.

## The course at a glance

| # | Module | Lessons | Assessment available |
|---|--------|---------|----------------------|
| 1 | Heat, temperature & pressure | 3 | Lesson quizzes, final exam, PT trainer |
| 2 | The vapour-compression cycle | 3 | Lesson quizzes, final exam, guided tour |
| 3 | Components deep-dive | 4 | Lesson quizzes, final exam |
| 4 | Refrigerants & the environment | 3 | Lesson quizzes, final exam |
| 5 | Superheat & subcooling | 2 | Lesson quizzes, final exam, simulator readouts |
| 6 | System types in the field | 2 | Lesson quizzes, final exam |
| 7 | Electrical fundamentals for RAC | 2 | Lesson quizzes, final exam |
| 8 | Fault diagnosis | 3 | Lesson quizzes, final exam, **Technician Quiz** (unlimited scenarios, scored) |
| 9 | Repair procedures | 4 | Lesson quizzes, final exam |
| 10 | Safety | 2 | Lesson quizzes, final exam |

Plus: a 20-question final exam (2 randomly drawn per module, 80% pass mark)
and a printable certificate of completion.

## Australia — Certificate III in Air-conditioning and Refrigeration (UEE training package)

The course covers **underpinning knowledge** for the theory components of
common units. Codes below are from the superseded UEE11 release, shown
because they are widely recognised — **map to the current UEE
training-package equivalents (UEE32220 and successors) with your RTO**.
This platform teaches knowledge evidence; it does not and cannot deliver the
practical/workshop assessment those units require.

| Skills area (indicative superseded unit) | Course modules |
|-------------------------------------------|----------------|
| Establish basic operating conditions of vapour-compression systems (UEENEEJ104A) | 1, 2, 5 + simulator & PT trainer |
| Establish basic operating conditions of air-conditioning systems (UEENEEJ103A) | 2, 6 |
| Prepare and connect refrigerant tubing and fittings (UEENEEJ102A) | 9 (brazing theory, nitrogen purge) |
| Recover, pressure test, evacuate, charge and leak test refrigerants (UEENEEJ108A) | 9 (all four lessons) + 4 |
| Fault-finding in vapour-compression systems | 5, 8 + Technician Quiz |
| Electrical fundamentals / motor starting for RAC | 7 |
| WHS / safe work practices | 10 (+ safety callouts throughout) |

**ARCtick (refrigerant handling licence)** — modules 4, 9 and 10 cover the
environmental, recovery, charging and safety knowledge that the licence
theory draws on.

## United States — EPA Section 608

| 608 area | Course modules |
|----------|----------------|
| Core (ozone, Montreal Protocol, recovery basics, safety, PT relationships) | 1, 4, 9, 10 |
| Type I / II content (recovery, evacuation, leak repair for small and high-pressure appliances) | 9 |

## Universities / higher education

For introductory applied-thermodynamics and HVAC&R units, the platform maps
to typical learning outcomes:

| Typical outcome | Course support |
|-----------------|----------------|
| Explain the vapour-compression cycle and its energy flows | Modules 1–2, simulator, guided tour |
| Analyse cycles on the P–h diagram; compute refrigeration effect, work, COP | Module 2, performance panel, healthy-cycle overlay |
| Relate saturation pressure and temperature; use property data | Module 1, PT chart & trainer, per-fluid saturation tables |
| Evaluate off-design and fault behaviour | Modules 5, 8, fault simulation, Technician Quiz |
| Refrigerant selection, environmental and safety constraints | Module 4 |

## Delivery options for institutions

- **LMS (Moodle, Canvas, Blackboard, D2L)**: import the SCORM 1.2 package
  (`npm run build:scorm` → `dist/refrigeration-course-scorm12.zip`).
  Completion status and the exam score report to the gradebook; learner
  progress is stored against their LMS account.
- **Web**: host the static site (e.g. GitHub Pages) — progress stays in the
  learner's browser, with export/import for handing progress to instructors.
- **Classroom**: the instructor dashboard (`teach.html`) aggregates student
  progress exports into a cohort view with CSV download — no server needed.
