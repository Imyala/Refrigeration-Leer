/* =========================================================================
   Course content, module 11: the Refrigerant Handling Code of Practice.

   Teaches the Australia and New Zealand Refrigerant Handling Code of Practice
   (2025 edition, AIRAH) — the document an Australian refrigerant licence
   expects you to work to. Requirements are paraphrased for teaching and cited
   at clause level with !CITE[cop:part:clause]; the Code itself remains the
   authority and should be read in its current edition.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const COP_REFS = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, 2025 edition (AIRAH) — Parts 1 & 2",
    "Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 (Cth) and its Regulations 1995",
    "ARC licensing information — arctick.org",
  ];

  const MODULES = [

  /* ======================================================================
     Module 11 — The Refrigerant Handling Code of Practice
     ====================================================================== */
  {
    id: "code-of-practice",
    title: "11 · The Refrigerant Handling Code of Practice",
    blurb: "The rulebook your licence is measured against: what the Code covers, the rules that never bend, and the clause-level procedure for testing, evacuating, charging, recovering and storing refrigerant.",
    lessons: [

      {
        id: "cop-scope",
        title: "What the Code is, and which Part applies",
        minutes: 7,
        simple: "There is one rulebook for handling refrigerant in Australia and New Zealand, and it comes in two Parts. Part 1 is for small sealed appliances — 2 kg of refrigerant or less, nothing to open up. Part 2 is for everything else you will actually work on: split systems, cool rooms, racks, chillers, transport. Cars have their own separate code. Before you start a job, know which Part you are working under.",
        refs: COP_REFS,
        content: `
Every job you do on refrigerant-bearing equipment is done under a document:
the **Australia and New Zealand Refrigerant Handling Code of Practice**. This
module works through it clause by clause. The edition this course is written
against is the **2025 edition**, published by AIRAH.

## Why the Code has teeth

The Code is not advice. A **Determination** made under the *Ozone Protection
and Synthetic Greenhouse Gas Management Regulations 1995* points to it, and
that reference is what gives its mandatory requirements legal force in
Australia — together with the *Ozone Protection and Synthetic Greenhouse Gas
Management Act 1989*, the Regulations that sit under it, and the conditions
attached to your licence. Other requirements
in it come from electrical safety, work health and safety, consumer
protection and building law.

In **New Zealand** the Code does not have mandatory legislative status, but
ozone-depleting substances, HFCs and PFCs are controlled under the *Ozone
Layer Protection Act 1996* and the *Climate Change Response Act 2002*, and
the Code is the industry standard of work.

## The two Parts

| | Part 1 | Part 2 |
|---|---|---|
| Covers | Self-contained low charge systems | Everything else (RAC equipment) |
| Charge | **2 kg or less** | Any |
| Test | No work on the refrigerating system needed at installation | Site-assembled or serviceable systems |
| Examples | Fridges, freezers, ice makers, window/wall and portable room air conditioners, dehumidifiers, vending machines, some heat-pump appliances | Splits and heat pumps, commercial and industrial refrigeration, transport refrigeration |

**Motor vehicle air conditioning is not in either Part** — it has its own
Australian automotive code of practice.

Both Parts carry **word for word the same text** in the places that matter
most day to day: the sections dealing with recovery, recycling and
reclamation, the sections on handling and storage, and Appendices A and B,
which list the refrigerants. So the rules for what you do with the gas once it
is out of the machine do not change with the size of the machine.

## Scheduled and non-scheduled refrigerants

The Code applies to **scheduled refrigerants** — the fluorocarbons listed in
Appendix A. It does **not** apply to non-scheduled refrigerants such as
hydrocarbons, ammonia, carbon dioxide and water.

That is not a loophole, it is a warning. Non-scheduled refrigerants often
carry *greater* hazards — toxicity (ammonia), higher flammability
(hydrocarbons), much higher pressure (CO₂) — and working with them needs
knowledge and skills outside this Code, and sometimes additional licensing.
As Australia phases HFCs down, you will meet them more often, not less.

>! If you cannot positively identify the refrigerant in a system, the Code's
> position is to treat it as if it were flammable and toxic until you know
> otherwise. Non-design refrigerants and mixtures do get used to "top up"
> systems, and their operating pressures can look normal.

## How this module cites the Code

Wherever a rule comes from a specific clause you will see a citation like
!CITE[cop:2:4.9] — the document, the Part, and the clause number. Get used to
reading them: in an audit, in an incident investigation, or in an assessment,
"which clause?" is the question you will be asked.
`,
        quiz: [
          {
            q: "A 1.4 kg charge window-rattler room air conditioner, sealed, nothing to open at installation. Which Part of the Code applies?",
            options: [
              "Part 1 — self-contained low charge systems",
              "Part 2 — systems other than self-contained low charge",
              "The automotive code of practice",
              "None; under 2 kg the Code does not apply",
            ],
            answer: 0,
            explain: "Part 1 covers self-contained equipment of 2 kg or less where no work on the refrigerating system is needed at installation. A sealed room air conditioner is the textbook example.",
          },
          {
            q: "What gives the Code's mandatory requirements legal force in Australia?",
            options: [
              "It is an Australian Standard",
              "A Determination made under the Ozone Protection and Synthetic Greenhouse Gas Management Regulations picks it up, and the Act, the Regulations and licence conditions enforce it",
              "Nothing — it is guidance only",
              "It is enforced by AIRAH as the publisher",
            ],
            answer: 1,
            explain: "A Determination made under the Regulations points to the Code. That reference, plus the Act and your permit conditions, is what turns its 'must' statements into legal obligations.",
          },
          {
            q: "You are asked to service a system charged with propane (R290). What does the Code tell you?",
            options: [
              "Follow Part 2 exactly as written for R290",
              "R290 is non-scheduled, so this Code does not cover it — the work needs knowledge, skills and possibly licensing outside its scope",
              "Recover it into any spare cylinder",
              "It is exempt from all requirements",
            ],
            answer: 1,
            explain: "The Code applies to scheduled refrigerants only. Hydrocarbons are non-scheduled and carry higher flammability risk — out of scope here, and requiring competence (and sometimes licensing) beyond it.",
          },
        ],
      },

      {
        id: "cop-licensing",
        title: "Licensing, supervision and the standard of work",
        minutes: 7,
        simple: "You need a licence to touch refrigerant — not just to charge it, but to do anything that risks letting it out. Apprentices get a trainee licence and must work under someone fully licensed. The business needs its own authorisation to buy and hold refrigerant. And your employer has to actually give you a copy of the Code and let you work to it.",
        refs: COP_REFS.concat([
          "Refrigerant License New Zealand (RLNZ) — rlnz.org.nz; IRHACE — irhace.org.nz",
        ]),
        content: `
## Who must be licensed — Australia

!CITE[cop:1:1.1.1]

Anyone carrying out work that involves **handling a scheduled refrigerant**,
or a component of RAC equipment **with a risk of scheduled refrigerant being
emitted**, must be appropriately licensed under the Regulations.

Read that scope carefully, because it is wider than "charging gas". It
includes:

- decanting scheduled refrigerant
- work on RAC equipment — its manufacture, installation, commissioning,
servicing or modification — where that equipment already holds a scheduled
refrigerant, is due to be charged with one, or is being built with one
incorporated into it, **whether or not refrigerant is present at the time**
- decommissioning equipment in which scheduled refrigerant is present.

The phrase "whether or not refrigerant is present" is the one apprentices
trip over. Brazing up a dry pipe run that will later be charged is licensed
work.

### Trainees

**A trainee licence is compulsory for apprentices and other trainees, and
they may only work while supervised by someone who holds a full
qualification.** There is no informal "helping out" tier.

### The business permit

Separate authorisation is also needed before any individual or business may
**acquire, possess or dispose of bulk scheduled refrigerant**, and that permit
is the Refrigerant Trading Authorisation. Holders of an RTA, and some licence holders, **must show their
permit number on advertising, invoices, receipts and quotes**, as their permit
conditions require.

Permit conditions can be added to or changed under the Regulations, and permit
holders must comply with them as they stand.

## Who must be certified — New Zealand

!CITE[cop:1:1.1.2]

In New Zealand, anyone whose work includes manufacturing, installing,
servicing, modifying or dismantling RAC equipment must ensure that whoever
**charges or recovers refrigerant** holds refrigerant filler and handler
training and certification.

Separately, and more broadly: it is a legal requirement in New Zealand that
**any person filling gas containers with gases under pressure must hold a
current approved filler compliance certificate**. That applies to *all* gases
under pressure — including air.

## The standard of work

!CITE[cop:1:1.1.3]

The obligation runs to the employer as well as the technician. Whoever
carries out this work must make sure **a copy of the Code is put in the hands
of everyone doing it** — themselves and any employee of theirs who handles
scheduled refrigerant — and that **all of them work to the standards it
sets**.

> If you have never been handed a copy of the Code, that is not a small
> administrative gap — it is the clause your employer is not meeting, and it
> is the document your competence will be measured against.

## Competence beyond the Code

The Code is explicit on this point: where refrigerants carry safety risks —
scheduled *or* non-scheduled, it makes no difference — whoever handles them
should be **competent to do so**, and some jurisdictions add further safety or
licensing requirements for particular non-scheduled refrigerants. Holding an RHL does not by itself make you
competent on ammonia, CO₂ or hydrocarbons.
`,
        quiz: [
          {
            q: "You are brazing up the pipe run for a split system. No refrigerant is in the pipework yet. Do you need a licence?",
            options: [
              "No — there is no refrigerant present",
              "Yes — the licensing requirement covers equipment that will be charged with a scheduled refrigerant, whether or not refrigerant is present",
              "Only if the run is longer than 5 m",
              "Only the electrician needs a licence",
            ],
            answer: 1,
            explain: "The Code's scope explicitly covers installing and modifying equipment that already holds a scheduled refrigerant, that will be charged with one, or that is built with one incorporated — whether or not any refrigerant is present at the time.",
          },
          {
            q: "An apprentice on your crew wants to recover refrigerant while you are on another job. Under the Code…",
            options: [
              "That is fine if they have done it before",
              "They need a trainee licence AND a fully qualified licence holder supervising them while they work",
              "Apprentices may handle refrigerant freely for the first year",
              "Only if the charge is under 2 kg",
            ],
            answer: 1,
            explain: "Trainees need a trainee licence, and supervision by a fully qualified licence holder is part of the requirement, not an optional extra.",
          },
          {
            q: "In New Zealand, filling a cylinder with compressed air requires…",
            options: [
              "nothing in particular",
              "a current approved filler compliance certificate — the requirement covers all gases under pressure, including air",
              "only a refrigerant handler certificate",
              "an electrical licence",
            ],
            answer: 1,
            explain: "New Zealand law requires anyone filling gas containers under pressure to be trained and hold a current approved filler compliance certificate, and that applies to all gases under pressure — air included.",
          },
        ],
      },

      {
        id: "cop-discharge",
        title: "The rules that never bend: discharge and prohibited charging",
        minutes: 8,
        simple: "Two rules you can lose your licence over. First: do not let refrigerant out — not by venting, not by using it to blow pipework clean, not by pressure-testing with it, not by charging a system you know leaks. Second: do not put a worse-for-the-climate refrigerant into a system than the one it was designed for, and do not put scheduled refrigerant into a system never designed for it.",
        refs: COP_REFS,
        content: `
Most of the Code is procedure. These two clauses are prohibitions, and they
are the ones that end careers.

## Discharge

!CITE[cop:1:1.2.1]

Under **section 45B** of the Australian Act it is an offence to behave in a
way that **discharges a scheduled substance to the atmosphere — or that is
likely to end in such a discharge**.

The Code then names examples, and the list is worth learning verbatim in
substance because each one is a shortcut somebody has taken:

- releasing refrigerant to the air, whether that release is direct or
indirect
- **putting refrigerant into equipment that is known to leak, or suspected of
leaking**
- blowing refrigerant through refrigerant pipework to clean it out internally
- **pressurising a system with refrigerant in order to carry out leak
tightness testing**
- aiming refrigerant at the fins or coils of a heat exchanger to clean them.

Note the second one. "Gas it up and see how long it lasts" is not a
diagnostic method — it is prohibited conduct. And the fourth is why the leak
test in this module is done with nitrogen and never with refrigerant.

**New Zealand** treats the wilful release of an ozone-depleting substance as
an offence under the *Ozone Layer Protection Act 1996*, and releasing
synthetic greenhouse gases is illegal there under the *Climate Change Response
Act*.

## Prohibited charging

!CITE[cop:1:1.2.2]

Two rules:

1. **A system must not be charged with a higher-GWP refrigerant than the
refrigerant it was designed for** (the design refrigerant) — unless the design
refrigerant was an ozone-depleting **HCFC**. Doing so is an offence under the
Australian Regulations.
2. **Systems not designed to operate with scheduled refrigerants must not be
charged with a scheduled refrigerant.**

The HCFC carve-out exists because there is no lower-GWP drop-in for some old
R22 plant; the rule is not a general licence to go up in GWP.

## Classification

!CITE[cop:1:1.2.3]

Every refrigerant that goes into RAC equipment has to carry a classification
made **under AS/NZS ISO 817** — the safety classification system covered in
the flammability lesson of this module.

## Why this shows up in your gauges

The diagnostic habit this course teaches — read the gauges, compare against
the PT relationship, work out *which* fault fits — exists partly because the
alternative is prohibited. You cannot legally diagnose a suspected leak by
adding gas. You find it, you fix it, you test it, and then you charge it.

!SIM[Practise reading a low-charge signature instead of topping it up](fault=lowCharge&level=2)

>! "It was only a little bit" is not a defence, and neither is "the customer
> asked me to". The obligation sits on the person who handles the refrigerant.
`,
        quiz: [
          {
            q: "A customer's system is low on charge and you suspect a leak. They ask you to just top it up so it lasts the summer. Under the Code you…",
            options: [
              "may top it up if you note it on the invoice",
              "must not — charging refrigerant into equipment with known or suspected leaks is named as prohibited discharge conduct",
              "may top it up once, then repair it next visit",
              "may top it up if the charge is under 2 kg",
            ],
            answer: 1,
            explain: "Charging into equipment with known or suspected leaks is one of the Code's named examples of conduct resulting in discharge. Find the leak, repair it, test it, then charge.",
          },
          {
            q: "Why must leak tightness testing never be done with refrigerant as the pressure medium?",
            options: [
              "Refrigerant is too expensive",
              "It is named as prohibited discharge conduct — the test gas will be released, so oxygen-free nitrogen is used instead",
              "Refrigerant does not hold pressure",
              "It would damage the compressor",
            ],
            answer: 1,
            explain: "Using refrigerant as the pressure medium for leak tightness testing appears in the Code's list of discharge examples. The test is done with OFN, optionally with a tracer gas.",
          },
          {
            q: "An old system was designed for R22 (an HCFC). Charging it with a higher-GWP HFC is…",
            options: [
              "always an offence",
              "permitted under the exception — the prohibition on going up in GWP does not apply where the design refrigerant was an ozone-depleting HCFC",
              "permitted for any system regardless of design refrigerant",
              "permitted only in New Zealand",
            ],
            answer: 1,
            explain: "The rule is that you must not charge a higher-GWP refrigerant than the design refrigerant, unless the design refrigerant was an ozone-depleting HCFC. That carve-out exists because some old HCFC plant has no lower-GWP alternative.",
          },
        ],
      },

      {
        id: "cop-leak-testing",
        title: "Leak tightness testing: nitrogen, pressure, time",
        minutes: 10,
        simple: "Before a site-built system gets any refrigerant, you prove it does not leak — using nitrogen, never refrigerant. Pressurise in stages, watch at every step, then hold it: 24 hours for a new install, 1 hour after a repair. If the pressure drops at all once you allow for temperature, you have a leak and you find it.",
        refs: COP_REFS.concat([
          "AS/NZS 5149 series — Refrigerating systems and heat pumps: safety and environmental requirements",
        ]),
        content: `
!CITE[cop:2:4.9]

**A system must never be pressurised with scheduled refrigerant in order to
leak tightness test it.** Every section of a system built on site has to pass
a leak tightness test **before** the plant is charged.

This test applies to **site-assembled systems**, not to manufactured systems
or components that arrive tested.

>! Pressure testing with oxygen-free nitrogen reaches pressures high enough to
> **cause serious injury or death**, and nitrogen is an asphyxiant. Regulator,
> correct procedure, ventilation.

## When you must test

!CITE[cop:2:4.9.2]

- at initial system commissioning
- once the system has been moved or altered, or its use has changed
- following any repair to it
- whenever the refrigerant type changes
- if a leak or a low charge is **known or suspected**
- after standstill longer than **two years**.

## Test gas and detectors

!CITE[cop:2:4.9.3]

**Oxygen-free nitrogen (OFN)** — high purity, less than 10 ppm moisture.

> Standard-grade nitrogen is **unsafe**: it can carry enough oxygen to cause
> an explosion at high pressure.

**Tracer gas** improves sensitivity — OFN with **under 5% hydrogen**, or
10–30% helium, with a detector specific to that tracer. *For safety, 5%
hydrogen must not be exceeded.*

Detector types: electronic (recommended), ultrasonic, UV fluorescent
additives, and proprietary leak detection spray. Best practice is a
combination — an electronic detector to sweep an area, then spray to pinpoint.

Two hard rules:

- Systems with **flammable refrigerants require a detector designed for
combustible gases**. Traditional halide detectors can create a spark and
**must not be used**.
- Portable detector sensitivity should be at least **5 g per year**, and
detectors should be calibrated periodically.

## Test pressure

!CITE[cop:2:4.9.4]

| Situation | Test pressure |
|---|---|
| Initial commissioning | At maximum system operating pressure — below any pressure limiting or relief device setting, and **never above maximum allowable pressure (PS)** |
| Repair or component replacement | **Above 25% and below 90% of PS**, and below any limiting or relief device setting |

## The procedure

!CITE[cop:2:4.9.5]

1. Evacuate the system; where refrigerant is present, recover it first.
2. Hook the OFN cylinder up to the system, or to the section you have
isolated.
3. **Pressurise in stages.**
4. Check for leakage and pressure loss **at every increment**.
5. At maximum allowable pressure, isolate from the cylinder and **record system pressure and ambient temperature**.
6. Monitor for the required duration.
7. Any pressure drop — adjusted for ambient change per the gas laws — means all leaks must be identified.
8. While holding pressure, test **all** potential leakage points. *The first leak you find may not be the only one.*
9. If a leak is found: vent the OFN, repair, and **repeat the whole test**.

## Duration and acceptance

!CITE[cop:2:4.9.6]

- **24 hours** for initial commissioning
- **1 hour** for a repair or component replacement

!CITE[cop:2:4.9.7]

No pressure drop, having regard to temperature variation. Site-assembled
joints must be tested with equipment capable of **5 g/year or better**.
AS/NZS 5149 sets sensitivity by GWP: refrigerants with **GWP > 150** need
detection to 10⁻⁶ Pa·m³/s or better (a helium sniffer); **GWP < 150** needs
10⁻³ Pa·m³/s or better (leak detection spray on the outer surface).

## Repairs

!CITE[cop:2:4.9.8]

Repairs must be carried out and verified **before** the system is charged, and
**must not be made with the system pressurised**. After repair, the system or
affected part is leak tightness tested again.

Once the system passes, the OFN is evacuated and the system is charged.
`,
        quiz: [
          {
            q: "You have replaced a filter-drier on a system with a maximum allowable pressure (PS) of 4,000 kPa. What is a valid leak tightness test pressure, and for how long?",
            options: [
              "4,000 kPa for 24 hours",
              "Between 1,000 and 3,600 kPa (25–90% of PS), held for 1 hour",
              "Any pressure, for 10 minutes",
              "500 kPa for 24 hours",
            ],
            answer: 1,
            explain: "For a repair or component replacement the test pressure is above 25% and below 90% of PS — here 1,000 to 3,600 kPa — and the hold time is 1 hour. The 24-hour hold is for initial commissioning.",
          },
          {
            q: "Why does the Code specify oxygen-free nitrogen rather than standard-grade nitrogen?",
            options: [
              "OFN is cheaper",
              "Standard-grade nitrogen can contain enough oxygen to cause an explosion at high pressure",
              "OFN holds pressure better",
              "Standard grade damages the compressor",
            ],
            answer: 1,
            explain: "The Code warns that standard-grade nitrogen is unsafe: it may hold enough oxygen for an explosion to occur once the pressure is high. OFN is also specified as high purity, under 10 ppm moisture.",
          },
          {
            q: "You are leak testing a system containing an A2L refrigerant. Which detector must you NOT use?",
            options: [
              "An electronic detector rated for combustible gases",
              "A traditional halide leak detector — it can create a spark",
              "Leak detection spray",
              "An ultrasonic detector",
            ],
            answer: 1,
            explain: "Systems with flammable refrigerants need a detector designed specifically for combustible gases. Traditional halide detectors can create a spark and must not be used.",
          },
          {
            q: "During a commissioning test you find and repair one leak. What next?",
            options: [
              "Charge the system — the leak is fixed",
              "Vent the OFN, repair, then repeat the leak tightness test procedure from the start",
              "Hold pressure for another 10 minutes only",
              "Test only the repaired joint",
            ],
            answer: 1,
            explain: "The Code requires the OFN to be vented, the leak repaired, and the leak tightness test procedure repeated. The first leak found may not be the only one.",
          },
        ],
      },

      {
        id: "cop-leak-inspection",
        title: "In-service leak inspection and how often it is due",
        minutes: 9,
        simple: "This is the leak check you do on a running system with the gas still in it. Three steps: look at it, read its numbers, then sweep it with a detector. If the numbers say the charge is low, you must go on and do a proper leak tightness test. How often you do this depends on how much refrigerant the system holds.",
        refs: COP_REFS.concat([
          "AS/NZS 5149.4 — Refrigerating systems and heat pumps: operation, maintenance, repair and recovery",
        ]),
        content: `
!CITE[cop:2:9.5]

An in-service leak inspection is done **with the refrigerant in place and the
system operating normally**. Its purpose is to find and fix small leaks before
they become a lost charge.

"Inspected for leakage" means the system is examined **primarily for leakage**,
using direct or indirect methods, focusing on the parts most likely to leak.

The inspection has three steps, in order.

## 1 · Visual inspection

!CITE[cop:2:9.5.1]

Start by **reviewing the maintenance records** to see where leaks have been
found before. Then look for:

- visible **oil or dust stains** on joints, components or insulation
- movement or stress from vibration or thermal expansion
- corrosion, thermal stress, wear, or metal-to-metal contact points
- unusual noise or vibration.

Oil stains matter because the oil travels with the refrigerant. Where oil got
out, refrigerant got out.

## 2 · Diagnostic analysis

!CITE[cop:2:9.5.2]

Assess operating temperatures and pressures against the manufacturer's data
to determine whether the charge is low.

- **Fixed-speed compressors** — pressures plus air and refrigerant
temperatures let you assess charge against manufacturer data.
- **Variable speed compressors** — run at maximum output and measure ΔT across
the heat exchanger at steady state, or measure delivered capacity.
- **On-board diagnostics** that pick up leaks automatically are fitted to
some systems.

**A leak tightness test must be performed whenever diagnostic analysis points
to a low charge.** This is the clause that connects your gauge reading to a
legal obligation.

!SIM[Read a low-charge signature on the gauges](fault=lowCharge&level=3)

## 3 · Leak inspection

!CITE[cop:2:9.5.3]

Sweep all joints and components with a detector, focusing on common points and
anything the visual survey flagged. **Electronic leak detectors must be
specific to the refrigerant type.** Record the results.

- **Leak detected** → the system, or the affected section of it, must be
emptied of every gram of refrigerant, and the leak must then be repaired.
- **Leak suspected but not detected** → empty it of refrigerant just the same,
then put the system or affected section through a **leak tightness test**.

### Common leakage points

!CITE[cop:2:9.5.4]

- **Joints** — flare, mechanical, flanged, brazed, catalyst-cured
- **Valves** — Schrader, service, manual, pressure relief, expansion, line tap
- **Coils** — corroded areas, return bends, valves and joints
- **Seals** — shaft seals on open compressors, compressor gaskets, drier and
filter seals, gauge point seals, cap seals
- **Other** — capillary tubes, control bellows, O-rings, pressure switches

> And then: **access valves should have their caps refitted.** The cap is a
> seal, not a dust cover. This is exactly what the Service Bay drills.

### The low-pressure side

!CITE[cop:2:9.5.5]

The low side **must be under positive pressure** before you leak test the
evaporator, heat exchanger, expansion valve or solenoid valve — you cannot
find a leak on a section sitting in a vacuum. Pressure build-up must not
exceed maximum design conditions.

## How often

!CITE[cop:2:9.6.2]

The system's own instruction manual sets the frequency. Where it is silent,
follow AS/NZS 5149.4:

| System type / charge | Inspection frequency |
|---|---|
| Self-contained and unit systems | After repair, or when leakage suspected |
| Hermetic systems ≤ 6 kg | Every 12 months |
| Other systems ≤ 3 kg | After repair, or when leakage suspected |
| Other systems > 3 kg to 30 kg | Every 12 months |
| Other systems > 30 kg to 300 kg | Every 6 months |
| Other systems > 300 kg | Every 3 months |
| Stored refrigerant in cylinders | Every 3 months |

Best practice, which the Code notes, follows the EU F-Gas approach: frequency
set by **tonnes of CO₂ equivalent** (charge mass in tonnes × GWP) and halved
in effect where a **fixed leak detection system** is fitted.
`,
        quiz: [
          {
            q: "Your diagnostic analysis on a running system indicates the charge is low. Under the Code, what must happen?",
            options: [
              "Add refrigerant to restore the charge",
              "A leak tightness test must be performed",
              "Note it and re-check in 12 months",
              "Nothing, if the system is still cooling",
            ],
            answer: 1,
            explain: "Where diagnostic analysis indicates a low refrigerant charge, the Code requires a leak tightness test. Topping up a suspected leaker is separately prohibited.",
          },
          {
            q: "A commercial system holds 45 kg of refrigerant and its manual gives no inspection frequency. How often is an in-service leak inspection due?",
            options: [
              "Every 12 months",
              "Every 6 months",
              "Every 3 months",
              "Only after a repair",
            ],
            answer: 1,
            explain: "Under the AS/NZS 5149.4 recommended frequencies, systems over 30 kg and up to 300 kg are inspected every 6 months.",
          },
          {
            q: "You sweep a system with a detector, find nothing, but the numbers still suggest a leak. The Code says…",
            options: [
              "the system is fine — no detection, no leak",
              "all refrigerant must be removed and the system (or affected section) leak tightness tested",
              "top it up and monitor",
              "re-inspect in 3 months",
            ],
            answer: 1,
            explain: "Suspect a leak that your detector cannot find and the response is the same emptying of refrigerant, followed by a leak tightness test on the system or affected section — the more sensitive test takes over.",
          },
          {
            q: "Why must the low-pressure side be put under positive pressure before leak testing the evaporator?",
            options: [
              "To speed up the detector",
              "A section in vacuum draws air inwards, so refrigerant is not escaping for a detector to find — but pressure must not exceed maximum design conditions",
              "To warm the coil",
              "It is not required",
            ],
            answer: 1,
            explain: "The Code requires the low side to be placed under positive pressure before leak testing those components, while not exceeding maximum design conditions during the test.",
          },
        ],
      },

      {
        id: "cop-evacuation",
        title: "Evacuation: deep, triple, and the drop test",
        minutes: 9,
        simple: "Evacuation pulls the air and moisture out before you charge, and doubles as a final check that the system is tight. Two approved methods: deep (one long pull to 500 microns) or triple (three pulls, breaking vacuum with nitrogen between them). Either way you then shut the pump off and watch the gauge — if it climbs 100 microns in an hour, you have moisture or a leak.",
        refs: COP_REFS,
        content: `
!CITE[cop:2:5.4]

Evacuation is the **final step before charging**, and it does two jobs:
removes air and moisture, and **verifies system tightness one last time**.

Systems must be evacuated before charging:

- at initial commissioning
- **every time** refrigerant is removed, e.g. during repair or replacement.

## Before you start

- **Recover the scheduled refrigerant first.** The system must be completely
depressurised, without letting air into the pipework.
- Plan the job so that **breaking the vacuum with refrigerant does not
introduce contaminants**.

## Equipment

!CITE[cop:2:5.3]

- Dedicated evacuation hoses — **large diameter, as short as practical** — not
service manifold hoses.
- Depth of vacuum must be measured with a **dedicated vacuum gauge**, not a
standard manifold pressure gauge. A manifold gauge cannot resolve microns; the
needle sits on the peg long before you are anywhere near deep enough.

## Method 1 — deep evacuation

!CITE[cop:2:5.4.1]

Suitable for **small, simple systems** where internal contamination is
unlikely or low.

1. Evacuate to at least **500 microns / 67 Pa absolute**.
2. Isolate the vacuum pump.
3. Stand **60 minutes**, holding below **600 microns / 80 Pa**.
4. A rise of **100 microns or more** means a leak or moisture.
5. Leak test if the vacuum is not maintained.

## Method 2 — triple evacuation

!CITE[cop:2:5.4.2]

Suitable for **all** systems, and particularly large or complex ones where
contamination is likely. Use it where pipework has been **open to atmosphere
for any extended period**.

1. Evacuate to at least **4,500 microns / 600 Pa**.
2. Break vacuum with **oxygen-free nitrogen**.
3. Allow the system to stand.
4. **Purge OFN** through the pipework.
5. Re-evacuate to at least 4,500 microns; break with OFN again.
6. Third evacuation, this time to **500 microns / 67 Pa**.
7. Isolate the pump.
8. Stand **60 minutes** below **600 microns / 80 Pa**.
9. A rise of 100 microns or more means a leak or moisture.
10. Leak test if the vacuum is not maintained.

The nitrogen breaks are the point: dry gas sweeps moisture out that a single
long pull would leave clinging to the pipe walls.

## The drop test

!CITE[cop:2:5.4]

After evacuating, **isolate the vacuum pump and watch whether the vacuum
rises**. As a guide, in constant ambient conditions the vacuum should not rise
more than **100 microns (13.33 Pa) in one hour**. A faster rise indicates a
leak or moisture, and the system **must be leak tightness tested and all leaks
repaired**.

>! Evacuating a wet system below 4,500 microns in ambient below 0 °C can turn
> internal moisture to **ice**, which then will not pump out — dehydration
> takes far longer. Warm the equipment where you can, and **never with a
> flame-based method**.
`,
        quiz: [
          {
            q: "What vacuum must the deep evacuation method reach, and what must it hold below during the 60-minute stand?",
            options: [
              "4,500 microns, holding below 5,000 microns",
              "500 microns / 67 Pa absolute, holding below 600 microns / 80 Pa",
              "1,000 microns, holding below 2,000 microns",
              "100 microns, holding below 150 microns",
            ],
            answer: 1,
            explain: "Deep evacuation goes to at least 500 microns (67 Pa absolute); after isolating the pump the system stands 60 minutes and must stay below 600 microns (80 Pa).",
          },
          {
            q: "In the triple evacuation method, what breaks the vacuum between pulls?",
            options: [
              "Refrigerant",
              "Oxygen-free nitrogen",
              "Compressed air",
              "Ambient air through a filter",
            ],
            answer: 1,
            explain: "Vacuum is broken with oxygen-free nitrogen and purged through the pipework. Breaking vacuum with air would reintroduce moisture, and refrigerant would be a discharge.",
          },
          {
            q: "You isolate the pump and the gauge rises 140 microns in an hour. What does the Code require?",
            options: [
              "Charge the system — that is within tolerance",
              "There is a leak or moisture: leak tightness test the system and repair all leaks",
              "Run the pump for 10 more minutes and charge",
              "Break vacuum with refrigerant and retry",
            ],
            answer: 1,
            explain: "A rise of 100 microns or more indicates a leak or the presence of moisture. The Code requires the system to be leak tightness tested and all leaks repaired.",
          },
          {
            q: "Why does the Code say to use a dedicated vacuum gauge rather than the service manifold?",
            options: [
              "The manifold is slower to read",
              "A manifold pressure gauge cannot accurately measure the depth of vacuum required",
              "The manifold leaks",
              "It does not — either is acceptable",
            ],
            answer: 1,
            explain: "The Code requires depth of vacuum to be measured with accurate equipment selected for the application — a dedicated vacuum gauge, not a standard manifold pressure gauge.",
          },
        ],
      },

      {
        id: "cop-charging",
        title: "Charging to the Code",
        minutes: 7,
        simple: "Weigh it in. Weigh it out. Check the hoses hold pressure before you open the cylinder properly. Do not overfill, do not trap liquid between two closed valves, and never hook a cylinder to something hotter or at higher pressure than itself — that pushes gas back into the cylinder and can burst it.",
        refs: COP_REFS.concat([
          "AS/NZS 5149.4 Section C.2 — Handling; AS 4211.3 — refrigerant recovery/recycling equipment",
        ]),
        content: `
## Evacuate first, always

!CITE[cop:2:6.1]

All refrigerant pipework, components and systems **must be evacuated before
charging**. Charge limits must not be exceeded.

## Pure refrigerants and blends

!CITE[cop:2:6.2]

All charging is done to AS/NZS 5149.4 Section C.2. A rule that catches people:
**pure refrigerants can be charged as vapour or liquid, but blends can only be
charged as liquid.** Charge a zeotropic blend as vapour and you take the more
volatile component preferentially out of the cylinder, and the mix that ends
up in the system is not the mix on the label.

## Verify the hoses

!CITE[cop:2:6.3]

Before the cylinder valve is fully opened, the hoses connecting cylinder to
system **must be leak tested**. The method is simple: **partially open the
cylinder valve, close it again** to leave the hoses pressurised, and test for
a leak.

## Weigh it

!CITE[cop:2:6.4]

**Refrigerant must be weighed into and weighed out of the system.** Transfers
are measured accurately with due reference to temperature per AS 4211.3, and
**the system must not be overfilled**. The Code is explicit that charging to a
known mass is the most accurate method — use it whenever you can.

!CITE[cop:2:6.7]

All refrigerant added must be **recorded in the logbook**.

## Precautions

!CITE[cop:2:6.5]

- Charging lines **as short as possible**, with fittings that minimise loss on
disconnection.
- **Do not trap liquid refrigerant between closed valves** — hydraulic
pressures develop fast and go very high.
- **Never connect a cylinder to a system at higher pressure**, or to a
hydraulic leg where pressure could push refrigerant back into the cylinder.
- **Never connect a cylinder to a system or another cylinder at a higher
temperature**, for the same reason.

Back flow contaminates or **overfills** the cylinder, and an overfilled
cylinder can develop enough pressure to burst.

## Flammable refrigerants

!CITE[cop:2:6.6]

Before charging with a flammable refrigerant, the immediate area is treated as
a **temporary flammable zone** and must be assessed: ventilation, ignition
sources, fire hazards, fire safety equipment, detection equipment and PPE.

**The refrigerating system must be earthed prior to charging with a flammable
refrigerant.**
`,
        quiz: [
          {
            q: "You are charging a system with R410A, a blend. How may it be charged?",
            options: [
              "As vapour or liquid, whichever is convenient",
              "As liquid only — blends can only be charged as a liquid",
              "As vapour only",
              "It depends on ambient temperature",
            ],
            answer: 1,
            explain: "Pure refrigerants can be charged as vapour or liquid, but blends can only be charged as a liquid. Charging a blend as vapour changes the composition that reaches the system.",
          },
          {
            q: "How does the Code say to leak-check the hoses between cylinder and system?",
            options: [
              "Open the cylinder valve fully and listen",
              "Partially open the cylinder valve then close it, leaving the hoses pressurised, and test for a leak",
              "Pressurise with refrigerant and use a detector",
              "No check is needed",
            ],
            answer: 1,
            explain: "The hoses must be leak tested before the cylinder valve is fully opened, by partially opening and then closing the valve to pressurise the hoses and testing for a leak.",
          },
          {
            q: "Why must a refrigerant cylinder never be connected to a system at a higher temperature than the cylinder?",
            options: [
              "The refrigerant would degrade",
              "Refrigerant can flow back into the cylinder, contaminating or overfilling it — an overfilled cylinder can develop enough pressure to burst",
              "The hoses would melt",
              "It slows the charge down",
            ],
            answer: 1,
            explain: "Connecting to a higher pressure or higher temperature source risks back flow into the cylinder, which contaminates or overfills it, with the danger of pressure high enough to burst the cylinder.",
          },
        ],
      },

      {
        id: "cop-recovery",
        title: "Recovery, recycling, reclamation and disposal",
        minutes: 9,
        simple: "Every gram that comes out of a machine has to be caught and then either cleaned up for re-use, sent away to be reprocessed properly, or destroyed. Recover into a proper labelled cylinder that is in date — never a bag. Do not mix refrigerants: a mixed cylinder may be impossible to separate and the whole lot becomes waste.",
        refs: COP_REFS.concat([
          "AS 4211.3, ISO 11650, AHRI 740 — recovery and recovery/recycling equipment",
          "AHRI 700 — specification for reclaimed refrigerant",
          "AS 4484, AS 2030.1, AS/NZS 1200 — gas cylinders",
        ]),
        content: `
Recovery and disposal of refrigerant at end of life using appropriate
equipment is **mandatory**, and anyone handling scheduled refrigerant must
hold a Refrigerant Handling Licence.

## Recovery

!CITE[cop:2:12.2]

In Australia, **all scheduled refrigerant removed from equipment must be
recovered** and then recycled, reclaimed or disposed of.

- Recover into an **appropriately labelled cylinder of suitable pressure
rating**. **Refrigerant must not be recovered into a flexible bag.**
- **The entire charge** — vapour as well as liquid — must be recovered when a
system is emptied.
- Use **dedicated recovery equipment for each refrigerant type** to avoid
mixing refrigerants that could otherwise be recycled or re-used.
- Hoses, fittings and procedures must be those that minimise loss.

Recovery and recovery/recycling equipment must conform to **AS 4211.3,
ISO 11650 or AHRI 740**, and be appropriate for the refrigerant recovered.

## Recovery cylinders

!CITE[cop:2:12.2.3]

- Must conform to **AS 4484, AS 2030.1 and AS/NZS 1200**.
- **Must be in date** — set today's date against the expiry date carried by
the newest test station stamp, and today must not fall after it.
- Must not exceed the designed **maximum safe working pressure** in any
filling operation, however temporary.
- **A2L/A2 refrigerant must go into A2L/A2-specific cylinders** with the
correct design pressure ratings.
- Using a third party's cylinder as a temporary receiver needs the **owner's
permission in advance**; the owner must then be given the chance to inspect it
internally, and the cylinder must be labelled to show such use.

> Refrigerant/oil mixtures are **less dense** than refrigerant alone, so a
> cylinder's carrying capacity is **reduced** for a recovered mixture. And
> modern high-pressure refrigerants sit at much higher ambient pressures than
> the previous generation — treat them with more care, not the same care.

## Mixed and contaminated refrigerant

!CITE[cop:2:12.2.5]

**Mixing refrigerants during recovery can render large quantities unable to be
recycled or reclaimed**, because separation may be impossible. One careless
recovery can turn a cylinder of saleable gas into waste.

Cross-contamination of scheduled with non-scheduled refrigerants must not
occur. Where mixtures are found they must be recovered by a competent
technician, **must not be vented**, and **must be reclaimed**.

>! If you meet equipment you do not recognise and cannot positively identify
> the refrigerant, **treat it as flammable and toxic**. Non-design refrigerants
> get used as replacements and top-ups without the system being redesigned or
> relabelled, and their operating pressures can look entirely normal.

## Recycling vs reclamation

!CITE[cop:2:12.3]

These two words are not interchangeable, and assessors ask.

| | Recycled | Reclaimed |
|---|---|---|
| What | Re-used, with or without some cleaning | Reprocessed to the **AHRI 700** specification |
| Where | Can be on site, with portable equipment | **Specialist facility only** |
| Then | Analyse before re-use; may still contain moisture, oil, acid, particulates, non-condensables | Can be re-used in **any** system designed for that refrigerant |

Recovered refrigerant **should be reclaimed before being used in a different
system**. Using unreclaimed refrigerant may void warranty and seriously damage
the system — contaminants corrode copper and aluminium and shorten the life of
coils and compressors.

Recycling blends is harder than recycling pure refrigerants, because
preferential leakage or separation in the system may already have changed the
blend composition.

## Disposal

!CITE[cop:2:12.4]

Unwanted scheduled refrigerant **must not be discharged** and must be returned
to a supplier or collection agent for safe disposal. Australia requires it to be
recovered and then either recycled, or passed to a facility that is
appropriately licensed for reclamation or disposal. Refrigerant that appears
intended for use in RAC equipment **must be accepted when it is surrendered**
to a Refrigerant Trading Authorisation holder.

### Disposable containers

!CITE[cop:2:12.5]

- Any residual refrigerant in a disposable container **must be recovered**.
- A disposable container **must not be refilled**, or used as a temporary
receiver during service.
- It **must not be repaired or modified** in any way.
- Empty disposable containers must be **disposed of at a recycling centre**.
`,
        quiz: [
          {
            q: "You are recovering R410A and the only cylinder on the van already has some R134a in it. What does the Code require?",
            options: [
              "Use it — both are HFCs",
              "Do not mix: use dedicated recovery equipment and a correct cylinder for each refrigerant type, since mixing can render the refrigerant impossible to recycle or reclaim",
              "Use it but label the cylinder 'mixed'",
              "Vent the R134a first, then recover",
            ],
            answer: 1,
            explain: "Dedicated equipment per refrigerant type is required to avoid mixing. Mixing can make large quantities unable to be recycled or reclaimed because separation may be impossible — and venting is separately prohibited.",
          },
          {
            q: "What is the difference between recycled and reclaimed refrigerant?",
            options: [
              "They mean the same thing",
              "Recycled is re-used with or without some cleaning; reclaimed has been reprocessed at a specialist facility to the AHRI 700 specification",
              "Recycled is done at a facility; reclaimed is done on site",
              "Reclaimed refrigerant cannot be re-used",
            ],
            answer: 1,
            explain: "Recycling can be done on site with portable equipment and may involve only simple cleaning. Reclamation happens at a specialist facility and must meet AHRI 700, after which the refrigerant can be used in any system designed for it.",
          },
          {
            q: "A recovery cylinder's most recent test station stamp expired last month. You may…",
            options: [
              "use it for one more job",
              "not recover into it — today's date must not fall after the expiry carried by its newest test stamp",
              "use it if it is under half full",
              "use it for vapour only",
            ],
            answer: 1,
            explain: "Refrigerant must not be recovered into an out-of-date recovery cylinder. Set today's date against the expiry date carried by the newest test station stamp: today must not fall after it.",
          },
          {
            q: "A partly full disposable refrigerant container is left on site. Under the Code you must…",
            options: [
              "refill it for the next job",
              "recover any residual refrigerant, not refill or modify it, and dispose of the empty container at a recycling centre",
              "vent the residue and bin it",
              "use it as a temporary receiver",
            ],
            answer: 1,
            explain: "Residual refrigerant must be recovered; disposable containers must not be refilled, used as temporary receivers, or repaired or modified; and empties go to a recycling centre.",
          },
        ],
      },

      {
        id: "cop-cylinders",
        title: "Cylinders: filling, storage and transport",
        minutes: 8,
        simple: "A cylinder is a pressure vessel, and overfilling one is how they burst. There is a marked maximum gross weight — never go past it, and never use a cylinder that has not got one. Recovered gas needs even more space left over than virgin gas. Never heat a cylinder with a flame. Store them secured, signed, and to the standard.",
        refs: COP_REFS.concat([
          "AS 2030.5 — gas cylinders: filling ratios and safe fill; AS/NZS 4332 — storage of gas cylinders",
          "Australian Code for the Transport of Dangerous Goods by Road and Rail (ADG Code)",
        ]),
        content: `
## Chemical hazards first

!CITE[cop:2:13.1]

Refrigerants are hazardous chemicals classified under the **Globally
Harmonised System (GHS)** — a system entirely separate from the AS/NZS ISO 817
safety classification. Every refrigerant has a **Safety Data Sheet (SDS)**
from its manufacturer or importer, and the SDS should be readily available and
consulted **before** handling.

**Asphyxiation and freeze burns** are the two hazards technicians most often
underestimate.

## Filling

!CITE[cop:2:13.4.3]

In Australia, anyone filling cylinders must hold a **Refrigerant Handling
Licence**, and **refillable containers must be used** for storing scheduled
refrigerant.

The hard limits:

- **Never exceed the marked maximum gross weight.**
- **Do not use a cylinder that is not marked with its maximum gross weight.**

Maximum gross weight depends on the cylinder's internal volume, the
refrigerant composition, oil content and temperature.

### Safe fill capacity

**Safe fill capacity (SFC)** is how much liquid refrigerant can go in without
overstressing the cylinder:

> **SFC = FR × WC**
>
> where **FR** is the fill ratio for that refrigerant (AS 2030.5) and **WC** is
> the water capacity stamped on the cylinder, in litres.

The fill ratio allows for **ullage** — the empty space above the liquid.
AS 2030.5 requires a minimum ullage of **3% at a mean bulk liquid temperature
of 57 °C** for most refrigerants.

For **recovered and recycled** refrigerant, AS 4211.3 requires a much larger
**20% ullage**, so:

> **SFC = 0.80 × FR × WC**

That is the single most useful line in this lesson: **a recovery cylinder
holds noticeably less than a virgin cylinder of the same size.**

Some tabulated fill ratios: R22 1.03 · R32 0.78 · R134a 1.04 · R404A 0.82 ·
R407C 0.94. Note how low R32 is — the same cylinder takes considerably less
R32 by mass than R134a.

### Heating and cooling

- Refilling a cylinder needs the **cylinder owner's permission**.
- Venting refrigerant **from the receiving cylinder is prohibited**.
- Cooling the receiving cylinder **is allowed** — an operating refrigerator or
freezer will do it.
- The discharging cylinder may be warmed, but only **under controlled
conditions**.
- **Cylinders must not be directly heated by flame, radiant heat or
uncontrolled direct contact heat.** Indirect heating (e.g. controlled
temperature airflow) only where the control system is designed to be fail safe.

## Transfer between cylinders

!CITE[cop:2:13.5]

Transfer needs a pressure or height difference, made with a pump or a
temperature differential. Cylinders **should not be manifolded together if
their temperatures may differ** — refrigerant migrates to the cold one and
overfills it. Where they are manifolded:

- keep all cylinders **at the same height** to avoid gravity transfer
- fit **single-direction or check valves** at each cylinder.

## Storage

!CITE[cop:2:13.6.2]

- Store to **AS/NZS 4332**.
- Store **securely, with appropriate signage** so emergency crews can identify
what is there.
- Quantity limits come from **current local legislation**.
- **Remove gauges** from cylinders for storage and transport.

The hazards named are asphyxiation from leakage in confined spaces, and fire —
which can overheat and explode cylinders, or decompose refrigerant into toxic
substances.

In Australia, **Refrigerant Trading Authorisation holders must** regularly
check containers in their possession for leaks and implement a **risk
management plan** for handling and storing refrigerant.

## Transport

!CITE[cop:2:13.7.3]

Flammable scheduled refrigerants transport as **Dangerous Goods Division 2.1
flammable gas** under the ADG Code, and cylinders should carry the **red
flammable-gas diamond**. That is a stricter regime than Division 2.2
non-flammable gases (R134a, R410A, R404A, R744) — and Division 2.3 is toxic
gases, such as ammonia.

>! Burning a fluorinated refrigerant produces **hydrogen fluoride and carbon
> monoxide**. A cylinder in a vehicle fire is not just a pressure hazard.
`,
        quiz: [
          {
            q: "A recovery cylinder has a water capacity of 50 L and you are recovering R134a (fill ratio 1.04). What is the safe fill capacity?",
            options: [
              "52.0 kg — SFC = FR × WC",
              "41.6 kg — recovered refrigerant uses SFC = 0.80 × FR × WC for the 20% ullage",
              "50.0 kg",
              "26.0 kg",
            ],
            answer: 1,
            explain: "For recovered and recycled refrigerant AS 4211.3 requires a minimum 20% ullage, so SFC = 0.80 × 1.04 × 50 = 41.6 kg. The plain SFC = FR × WC (52 kg) applies to virgin refrigerant with 3% ullage.",
          },
          {
            q: "A cylinder is discharging slowly and you are behind schedule. You may…",
            options: [
              "warm it gently with a torch",
              "warm the discharging cylinder under controlled conditions — but never by flame, radiant heat or uncontrolled direct contact heat",
              "place it on a hot plate",
              "not warm it at all under any circumstances",
            ],
            answer: 1,
            explain: "Warming the discharging cylinder is permissible under controlled conditions, but cylinders must not be directly heated by flame, radiant heat or uncontrolled direct contact heat. Indirect heating needs a fail-safe control system.",
          },
          {
            q: "Two cylinders are manifolded together and one sits in the sun. What is the risk?",
            options: [
              "None if the valves are open",
              "Refrigerant transfers to the cooler cylinder and can overfill it",
              "The warm cylinder will empty completely",
              "The hoses will freeze",
            ],
            answer: 1,
            explain: "Cylinders should not be manifolded together where temperatures may differ, because refrigerant transfers to the cold cylinder with the danger of overfilling it.",
          },
          {
            q: "Under the ADG Code, an A2L refrigerant is transported as…",
            options: [
              "Division 2.2 non-flammable gas",
              "Division 2.1 flammable gas, with the red flammable-gas diamond",
              "Division 2.3 toxic gas",
              "not classified as dangerous goods",
            ],
            answer: 1,
            explain: "Flammable scheduled refrigerants are Division 2.1 flammable gases under the ADG Code and require additional handling and storage safeguards compared with Division 2.2 non-flammable gases.",
          },
        ],
      },

      {
        id: "cop-flammable",
        title: "Safety classification and flammable refrigerants",
        minutes: 8,
        simple: "Every refrigerant gets a code like A1 or A2L. The letter is how toxic it is — A is lower, B is higher. The number is how flammable — 1 is no flame spread, then 2L, 2, and 3 getting worse. A2L is the one you will meet most as the industry moves off high-GWP gases, and it needs different tools, not just more care.",
        refs: COP_REFS.concat([
          "AS/NZS ISO 817 — Refrigerants: designation and safety classification",
          "AIRAH Flammable Refrigerants Safety Guide; HWSA Flammable Refrigerant Gases Position Paper",
          "ARC — Handle Class A2/A2L Flammable Refrigerants",
        ]),
        content: `
!CITE[cop:1:1.2.3]

All refrigerants used in RAC equipment must be classified to **AS/NZS ISO
817**. The classification is **two characters**: a capital letter for
**toxicity**, a numeral for **flammability**.

## Toxicity — the letter

| Class | Meaning |
|---|---|
| **A** | Lower chronic toxicity — occupational exposure limit **400 ppm or greater** |
| **B** | Higher chronic toxicity — occupational exposure limit **below 400 ppm** |

## Flammability — the number

| Class | Criteria | Examples |
|---|---|---|
| **1** | No flame propagation when tested in air at 60 °C and 101.3 kPa | R22, R134a, R404A, R410A, R744 |
| **2L** | Flame propagation, **LFL ≥ 3.5%** by volume, heat of combustion **< 19,000 kJ/kg**, **maximum burning velocity < 10 cm/s** at 23 °C | R32, R1234yf, R1234ze, R717 |
| **2** | Flame propagation, LFL ≥ 3.5%, heat of combustion < 19,000 kJ/kg | R152a, R439A |
| **3** | Flame propagation, **LFL < 3.5%**, heat of combustion **≥ 19,000 kJ/kg** | R290, R600, R601, R1270 |

The single thing separating 2L from 2 is **burning velocity below 10 cm/s** —
a 2L flame spreads slowly enough to be a different engineering problem, which
is why standards treat A2L separately rather than lumping it with A2.

Note **R717 (ammonia) is 2L on flammability but B on toxicity** — B2L. Low
flammability does not mean safe.

## Which are flammable

!CITE[cop:1:1.2.4]

Flammable refrigerants are **A2L, A2, A3 and B2L**. Of the *scheduled*
refrigerants, flammable ones are currently **A2L (common)** or **A2
(uncommon)** — A3 hydrocarbons such as R290 are non-scheduled and outside this
Code.

>! **Lubricant/refrigerant mixtures may be flammable even where the
> refrigerant is classified non-flammable.** An A1 system is not automatically
> a no-ignition-source job when you open it up.

## Blends and fractionation

A blend whose flammability or toxicity can change as its composition changes
gets a **dual classification** separated by a slash — for example A1/A2. The
first is the blend **as formulated**; the second is the **worst case of
fractionation**, the composition that gives the highest concentration of the
flammable component.

That is why a leaking blend system is not the same refrigerant it started as,
and why blends are charged as liquid only.

## Tools are not interchangeable

!CITE[cop:2:12.2.2]

A2L and A2 refrigerants are **generally not compatible** with servicing tools
designed for A1 work:

- **vacuum pumps**
- **recovery units**
- **refrigerant cylinders**

New or existing tools must be assessed individually to confirm they conform to
the relevant standards **and** that the manufacturer's specification states
they are designed for flammable refrigerants. "It seems fine" is not an
assessment.

Leak detection follows the same rule: a detector for **combustible gases**,
and **never a traditional halide detector**, which can spark.

## Working practice

- Before charging, the immediate area becomes a **temporary flammable zone** —
assess ventilation, ignition sources, fire hazards, fire equipment, detection
and PPE.
- **Earth the system before charging** with a flammable refrigerant.
- Do not expose flammable refrigerant to open flames or ignition sources.
Burning fluorinated refrigerants produces **hydrogen fluoride and carbon
monoxide**.

The Code points to the **AIRAH Flammable Refrigerants Safety Guide**, the
**HWSA Flammable Refrigerant Gases Position Paper**, and ARC's **Handle Class
A2/A2L Flammable Refrigerants** for the detail. If A2L work is in your scope,
those are required reading beyond this course.
`,
        quiz: [
          {
            q: "What does the classification 'B2L' tell you about a refrigerant?",
            options: [
              "Lower toxicity, no flame propagation",
              "Higher chronic toxicity (exposure limit below 400 ppm) and lower flammability (flame propagation with burning velocity under 10 cm/s)",
              "Lower toxicity, higher flammability",
              "It is non-scheduled",
            ],
            answer: 1,
            explain: "The letter is toxicity — B means an occupational exposure limit below 400 ppm. The number is flammability — 2L means flame propagation but with LFL at or above 3.5%, low heat of combustion and burning velocity under 10 cm/s. Ammonia (R717) is B2L.",
          },
          {
            q: "What single criterion separates Class 2L from Class 2?",
            options: [
              "The lower flammability limit",
              "Maximum burning velocity below 10 cm/s when tested at 23 °C",
              "Heat of combustion",
              "Toxicity",
            ],
            answer: 1,
            explain: "Classes 2L and 2 share the LFL ≥ 3.5% and heat of combustion < 19,000 kJ/kg criteria. Class 2L additionally requires a maximum burning velocity below 10 cm/s.",
          },
          {
            q: "You have an A1-rated recovery unit and vacuum pump. A job comes up on an A2L system. You…",
            options: [
              "use them — recovery is recovery",
              "must assess the tools individually: A2L is generally not compatible with A1 vacuum pumps, recovery units and cylinders, and the manufacturer's specification must state they are designed for flammable refrigerants",
              "use them but ventilate the area",
              "use the vacuum pump but not the recovery unit",
            ],
            answer: 1,
            explain: "The Code lists vacuum pumps, recovery units and refrigerant cylinders as generally not compatible between A1 and A2L/A2 work. Tools must be assessed individually against the standards and the manufacturer's stated design.",
          },
          {
            q: "A blend is classified A1/A2. What does the second classification mean?",
            options: [
              "The classification in New Zealand",
              "The classification at the worst case of fractionation — the composition giving the highest concentration of the flammable component",
              "The classification when mixed with oil",
              "A typographical convention with no meaning",
            ],
            answer: 1,
            explain: "Dual classifications give the 'as formulated' composition first and the 'worst case fractionation' composition second — what the blend can become as it leaks and separates.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
