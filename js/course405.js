/* =========================================================================
   Course content, module 405 — Installation, pressure testing and
   commissioning (capstone exam revision).

   Source: AS/NZS 5149 series (parts 1, 2 and 4); the Australia and New
   Zealand Refrigerant Handling Code of Practice; AS/NZS 3000 Section 8;
   Australian Refrigeration and Air-conditioning (ARAC) Vols 1 and 2,
   Boyle — pub. AIRAH.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority, and the
   current edition of every standard and code governs. Every practice
   question, scenario and number here is written for this module.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_MANDATORY = [
    "AS/NZS 5149.2 — Refrigerating systems and heat pumps, safety and environmental requirements: design, construction, testing, marking and documentation",
    "AS/NZS 5149.4 — Refrigerating systems and heat pumps: operation, maintenance, repair and recovery",
    "AS/NZS 3000 Wiring Rules — Section 8, verification of an electrical installation before it is placed in service",
  ];

  const REFS_PRESSURE = [
    "AS/NZS 5149.2 — strength pressure test and tightness test of a completed refrigerating system",
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — leak tightness testing: medium, pressure, duration and acceptance",
    "AS/NZS 5149.1 — definitions and classification, including maximum allowable pressure (PS)",
  ];

  const REFS_OFN = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — prohibition on using refrigerant as a leak-test medium",
    "AS 4332 — The storage and handling of gases in cylinders",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — pressure testing practice and cylinder gas equipment",
  ];

  const REFS_DESIGN = [
    "AS/NZS 5149.2 — specified design temperatures used to determine the maximum allowable pressure of each part of a system",
    "AS/NZS 5149.1 — maximum allowable pressure PS for the high-pressure and low-pressure sides",
    "Refrigerant saturation (pressure–temperature) data published by the refrigerant supplier",
  ];

  const REFS_VAC = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — evacuation equipment and the two evacuation methods",
    "AS/NZS 5149.2 — evacuation and dehydration of a completed installation before charging",
    "Manufacturer operating instructions for thermistor and Pirani micron vacuum gauges",
  ];

  const REFS_CHARGE = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — refrigerant charging procedure and charging precautions",
    "AS/NZS 5149.4 — charging, marking and the documentation handed over on completion",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — charging and start-up practice",
  ];

  const REFS_ELEC = [
    "AS/NZS 3000 Wiring Rules — Section 8 verification: earth continuity, insulation resistance, polarity, correct circuit connections and RCD operation",
    "AS/NZS 3760 — in-service safety inspection and testing of electrical equipment",
    "AS/NZS 4836 — safe working on or near low-voltage electrical installations and equipment",
  ];

  const REFS_COMM = [
    "AS/NZS 5149.2 — commissioning, marking and the documentation given to the owner",
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — commissioning and charging records",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — commissioning and system balancing",
  ];

  const REFS_AIR = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — air measurement, traversing and system balancing",
    "AS 1668.2 — the use of ventilation and air-conditioning in buildings: air quantities and their measurement",
    "Instrument manufacturer instructions for rotating-vane and thermal anemometers, capture hoods and pitot-static tubes",
  ];

  const MODULES = [
    {
      id: "cap-install-commission",
      stream: "capstone",
      title: "C.5 · Installation, pressure testing and commissioning",
      blurb:
        "Exam revision on the mandatory tests that close out a new installation: strength, tightness, safety-device function and electrical verification, plus nitrogen practice, design-pressure tables, evacuation, charging and airflow measurement.",
      lessons: [

/* ------------------------------------------------------------------ 1 */
{
  id: "mandatory-tests",
  title: "The mandatory tests at the end of a new installation",
  minutes: 12,
  simple:
    "When a new fridge system is finished there are four safety tests you must do before anyone uses it: prove the pipework will not burst, prove it does not leak, prove the safety switches actually switch off, and prove the electrics are safe. Checking that it cools well is a different job called commissioning.",
  refs: REFS_MANDATORY,
  content: `The pipework is brazed, the plant is bolted down, the wiring is pulled in and the customer wants their coolroom. What stands between those two facts is a defined set of tests that AS/NZS 5149.2 requires before a new refrigerating system is handed over. They are not optional, they are not a matter of workshop preference, and an examiner asking you to *name the mandatory tests required at the end of a new installation* is asking for a four-part answer.

## The four tests

| Test | What it proves | How it is done | Evidence |
|---|---|---|---|
| Strength pressure test | The pressure envelope will not rupture or permanently deform at a pressure above the maximum allowable pressure | Pressurising above PS by the factor the standard sets, usually hydraulically, on components and assemblies rather than on a live site system | Manufacturer certificate for factory items; a written test record for site-fabricated pressure parts |
| Tightness (leak) test | Every joint, valve and connection you or the factory made is gas-tight | The assembled system held at test pressure with oxygen-free nitrogen for a defined period, plus a physical search of every joint | Test record: medium, pressure, ambient, start and finish time, result |
| Functional test of safety switching devices | The protective devices actually operate, at their set point, and actually shut the plant down | Each device tripped in turn — by adjusting its setting onto the running pressure, by isolating a sensor, or by the manufacturer's simulated-trip method | Commissioning sheet listing every device, its setting and the value at which it tripped |
| Electrical verification tests | The installation is electrically safe to energise and to touch | The Section 8 sequence: continuity of the earthing system, insulation resistance, polarity, correct circuit connections, verification of operation including RCDs | Signed electrical test record or certificate of compliance |

Learn them as four *purposes*, not as four words. Strength is about bursting. Tightness is about escaping. Functional testing is about the machine protecting itself. Electrical verification is about the machine not killing anyone. If you can say the purpose you will never mix up the order or lose a mark for vagueness.

## Mandatory tests versus commissioning checks

This is the distinction the exam is really probing, and it is where candidates throw marks away. Superheat, subcooling, evaporator TD, air-on and air-off temperatures, airflow in litres per second, running current against nameplate FLA, condenser water flow, defrost termination — every one of those is a **commissioning performance check**. They tell you the plant does the duty it was sold to do. None of them is a mandatory installation test.

| | Mandatory installation tests | Commissioning checks |
|---|---|---|
| Question being answered | Is it safe? | Does it work properly? |
| Pass/fail set by | The standard and the design | The design duty and the manufacturer's data |
| Consequence of failing | The system must not be put into service | The system must be adjusted, rebalanced or re-selected |
| Typical result | Held pressure, held vacuum, device tripped at set point, insulation resistance in megohms | Superheat in kelvin, airflow in litres per second, current in amps |

Both are required work. Only one set is the answer to "name the mandatory tests".

## The order you actually do them in

1. Visual inspection of the completed pipework, supports, insulation and labelling.
2. Strength pressure test where the site work requires one, before the system is closed up and insulated.
3. Tightness test on the complete assembled system with oxygen-free nitrogen.
4. Release the nitrogen, then evacuate and dehydrate to the required vacuum, and prove it with a standing-vacuum test.
5. Electrical verification while the installation is de-energised — continuity, insulation resistance, polarity and correct connections are dead tests.
6. Energise, verify supply voltage, phase rotation and RCD operation.
7. Charge the system with the weighed design charge.
8. Functional-test every safety switching device.
9. Run the plant and carry out the commissioning performance checks and records.

Steps 5 and 6 sit before charging for a reason: you want to find a crossed neutral or a failed insulation reading while the system is empty and nothing has been started against a reversed rotation.

>! Never leave a system pressurised with nitrogen and unattended without a warning tag and the regulator wound off. A forgotten test pressure has killed people who later cut into what they assumed was an empty line.

## Where the requirement comes from

AS/NZS 5149.2 is the design, construction and testing part of the AS/NZS 5149 series. The tests it sets are given legal weight through work health and safety law, through plant registration requirements for larger systems in some jurisdictions, and through the contractual requirement to install to standard. The electrical verification tests come from AS/NZS 3000 Section 8, not from the refrigeration standard, which is why they are often the ones a refrigeration candidate forgets. Work to the current edition of every one of these documents — clause numbers and some values move between editions.

## Answering a "list four" question

Write four lines. Each line names the test and states its purpose in one clause. Do not pad with a fifth item hoping something sticks: a wrong item can cost you the mark you would otherwise have earned, and a list of eight vague things reads as a candidate who does not know which four matter.

### Written practice 1

**A new 18 kW R404A coolroom pack has just been installed at a regional bakery. Name the mandatory tests that must be completed before the system is placed into service, and state the purpose of each in one sentence.**

>? **Model answer.**
>?
>? 1. **Strength pressure test** — proves the pressure-containing parts will withstand a pressure above the maximum allowable pressure without rupturing or taking a permanent set.
>? 2. **Tightness (leak) test** — proves the assembled system, including every joint made on site, holds pressure and will not leak refrigerant.
>? 3. **Functional testing of the safety switching devices** — proves the high-pressure cut-out, low-pressure cut-out, oil differential switch and any other protective device operate at their set points and shut the plant down.
>? 4. **Electrical verification tests** — the AS/NZS 3000 Section 8 sequence (earth continuity, insulation resistance, polarity, correct circuit connections and verification of operation including RCDs) proving the installation is safe to energise.
>?
>? All four must be recorded, and the results handed over with the system documentation.

### Written practice 2

**Your supervisor says: "I checked the superheat and the airflow, so the mandatory installation tests are done." Explain what is wrong with that statement.**

>? **Model answer.** Superheat and airflow are commissioning performance checks. They confirm the system is achieving its design duty — that the evaporator is being fed correctly and the fan is delivering the design air quantity. They say nothing about whether the pressure envelope is strong, whether it is gas-tight, whether the safety switching devices operate, or whether the electrical installation is safe.
>?
>? The mandatory installation tests are the strength pressure test, the tightness test, the functional test of the safety switching devices and the electrical verification tests. A system can have perfect superheat and still have an unproven high-pressure cut-out and a failed insulation resistance reading — which is exactly the combination that causes an incident.

### Written practice 3

**Explain why the electrical verification tests are carried out before the system is charged, rather than at the end of commissioning.**

>? **Model answer.** Most of the Section 8 tests are dead tests: continuity of the earthing system, insulation resistance, polarity and correct circuit connections are all done with the installation de-energised. Doing them first means faults are found while the system is empty, unpressurised and stopped, so a fault can be corrected without recovering a charge or stripping insulation.
>?
>? It also protects the plant. Energising before verification risks starting a scroll or screw compressor against reversed phase rotation, or running a motor with a lost neutral or a bad earth, either of which can destroy the machine and injure the person standing next to it. Once the electrics are verified and the supply proved, the system can be charged and the running checks done safely.

## What to remember

- Four mandatory tests: strength, tightness, functional test of safety switching devices, electrical verification.
- Learn each by its purpose — bursting, escaping, self-protection, electrical safety.
- Superheat, subcooling, airflow and running current are commissioning checks, not mandatory tests.
- Dead electrical tests come before energising; charging comes after the vacuum is proved.
- Every test needs a record, and the records go to the owner with the handover documentation.`,
  quiz: [
    {
      q: "Which of these is NOT one of the mandatory tests required at the end of a new refrigeration installation?",
      options: [
        "Tightness (leak) test of the assembled system",
        "Measurement of evaporator superheat at design load",
        "Functional test of the safety switching devices",
        "Electrical verification testing to AS/NZS 3000 Section 8",
      ],
      answer: 1,
      explain: "Superheat is a commissioning performance check — it proves the metering device is feeding the coil correctly, which is about duty, not safety. The mandatory tests are strength, tightness, functional testing of safety switching devices, and electrical verification. Candidates lose marks by listing commissioning checks because they are the tests they do most often.",
    },
    {
      q: "What does the strength pressure test prove that the tightness test does not?",
      options: [
        "That every brazed joint is gas-tight",
        "That the pressure envelope will not rupture or permanently deform above the maximum allowable pressure",
        "That the high-pressure cut-out operates at its set point",
        "That the system is dry enough to charge",
      ],
      answer: 1,
      explain: "Strength is about mechanical integrity of the containing envelope under pressure; tightness is about whether gas escapes from it. A system can be perfectly tight at working pressure and still have a component that would burst above PS, which is why the two tests exist separately.",
    },
    {
      q: "Why are continuity, insulation resistance and polarity tests done before the installation is energised?",
      options: [
        "Because the test instruments cannot read while the supply is connected and they are dead tests that find faults before anything is started",
        "Because AS/NZS 5149.2 forbids energising a charged system",
        "Because the refrigerant charge would affect the insulation resistance reading",
        "Because the vacuum pump must be running during the tests",
      ],
      answer: 0,
      explain: "They are dead tests — an insulation resistance tester injects 500 V d.c. and would be damaged, and give a meaningless result, on a live circuit. Doing them first also finds a reversed polarity or lost earth before a compressor is started against it. The refrigerant charge has no bearing on insulation resistance.",
    },
    {
      q: "In what order should these four steps be carried out on a new installation?",
      options: [
        "Charge, tightness test, evacuate, electrical verification",
        "Electrical verification, charge, tightness test, evacuate",
        "Tightness test, evacuate, electrical verification, charge",
        "Evacuate, charge, tightness test, electrical verification",
      ],
      answer: 2,
      explain: "Pressure-test with nitrogen first, because a leak found now is cheap. Release the nitrogen and evacuate to remove air and moisture. Verify the electrics while everything is dead. Only then charge the weighed quantity of refrigerant. Any order that charges before the tightness test risks venting the charge, which is itself prohibited.",
    },
  ],
},

/* ------------------------------------------------------------------ 2 */
{
  id: "strength-and-tightness",
  title: "Strength pressure test and tightness test in practice",
  minutes: 12,
  simple:
    "Two different pressure tests. One pushes the pipework harder than it will ever see in service to show it will not burst. The other holds it at working pressure for hours to show that nothing leaks. Think of testing a water tank: first you check it will not split, then you check it does not drip.",
  refs: REFS_PRESSURE,
  content: `Two pressure tests, two different questions, two different pressures and two different durations. Candidates who treat them as one test lose marks on every question that asks about either.

## Maximum allowable pressure — the number everything hangs off

Every part of a refrigerating system has a **maximum allowable pressure**, written **PS**. It is the highest pressure the designer permits that part to see. A system normally has two: one for the high-pressure side and one for the low-pressure side, because the two sides are exposed to different conditions and are built from different components. PS appears on the nameplate, on the pressure-vessel data plate and in the technical file. Every test pressure, every relief-device setting and every pressure-limiting switch setting is derived from it.

## The strength pressure test

The strength test asks: *will this hold together?* It is applied at a pressure above PS, by the multiplier the standard specifies, and the part must show no rupture, no leak and no permanent deformation afterwards.

In real life you rarely perform a strength test on a completed site installation. Compressors, vessels, valves, coils and factory-assembled packs arrive with the test already done and certified. What you must know is:

- The test is done by the maker of the pressure part, and the certificate is part of the system documentation you hand over.
- Where **you** fabricate pressure-containing parts on site, or where the standard calls for the assembly to be tested, the strength test becomes your responsibility.
- A liquid (hydraulic) medium is preferred because water is nearly incompressible: if something lets go, it lets go without storing much energy. A pneumatic strength test stores enormous energy in the compressed gas and is done only where liquid testing is impracticable, at a lower multiplier of PS and with the area cleared and controlled.
- The exact multipliers of PS are given in the standard and are revised between editions. Read them from the current edition of AS/NZS 5149.2 rather than from memory or from a note in someone's toolbox.

>! A pneumatic strength test is one of the highest-energy things done on a refrigeration site. The stored energy in a gas-filled system at test pressure is thousands of times that of the same system filled with water. Barricade the area, keep everyone out, pressurise in steps and never stand over a joint while pressure is rising.

## The tightness test

The tightness test asks: *does anything escape?* It is applied to the whole assembled system, including every joint made on site, with oxygen-free nitrogen as the test medium.

The Refrigerant Handling Code of Practice sets out the practice for this test, and it is the authority on it. In summary, for an initial test on a new installation the system is tested at the maximum system operating pressure — below the setting of any pressure-limiting or pressure-relief device, and never above PS — and the pressure is held for **24 hours**. For a test after a repair or a component replacement, the test pressure sits above 25% and below 90% of PS, and the hold is **1 hour**. See !CITE[cop:2:4.9.4] and !CITE[cop:2:4.9.6], and work to the current edition.

Holding pressure is only half the test. You also physically search every joint. Options, roughly in order of sensitivity:

| Method | Where it earns its place | Limitations |
|---|---|---|
| Soap solution or proprietary bubble fluid | Every brazed joint, flare and flange you can reach with nitrogen in the system | Needs access and light; will not find a leak inside insulation or in a buried line |
| Electronic leak detector with a nitrogen–refrigerant trace mixture | Large systems where a full physical search is impractical | Needs a trace gas, which brings the discharge prohibition into play unless the mixture is permitted for the job |
| Ultrasonic detector | Noisy plant rooms, large leaks, inaccessible runs | Poor on very small leaks; confused by other ultrasonic sources |
| Pressure decay against a calibrated gauge | The whole system, over the hold period | Cannot locate the leak, only prove one exists |

## Reading the gauge honestly: temperature

A sealed system full of nitrogen obeys the gas laws. If the pressure at the start of the hold was taken at 8 am on a 14 °C morning and you read it again at 3 pm at 34 °C, the pressure will have *risen* even if the system leaks. Read it the other way — pressurised in the afternoon heat, checked at dawn — and a perfectly tight system appears to have lost pressure.

The rule: **record the ambient temperature at the start and at the end of the hold, and correct for it.** As a working approximation, for a fixed volume of gas, pressure and absolute temperature move together:

P2 = P1 x (T2 / T1), with both temperatures in kelvin.

### Worked example — is that a leak?

A supermarket suction line is nitrogen tested. At 07:00 the gauge reads 2 100 kPa gauge and the plant room is 16 °C. At 15:00 the gauge reads 2 180 kPa gauge and the plant room is 31 °C. Has it leaked?

1. Work in absolute pressure and absolute temperature. P1 = 2 100 + 101 = 2 201 kPa absolute. T1 = 16 + 273 = 289 K. T2 = 31 + 273 = 304 K.
2. Expected pressure if perfectly tight: P2 = 2 201 x (304 / 289) = 2 201 x 1.0519 = **2 315 kPa absolute**, which is 2 214 kPa gauge.
3. Actual reading: 2 180 kPa gauge = 2 281 kPa absolute.
4. The system is 34 kPa below where a tight system would sit. It has leaked, despite the gauge going *up*.

### Worked example — the same sum the other way

A cool-room evaporator circuit is pressurised to 1 500 kPa gauge at 33 °C in the afternoon. At 06:00 the next morning it reads 1 405 kPa gauge at 18 °C. Leak or not?

1. P1 = 1 601 kPa absolute, T1 = 306 K, T2 = 291 K.
2. Expected: P2 = 1 601 x (291 / 306) = 1 601 x 0.9510 = **1 522 kPa absolute** = 1 421 kPa gauge.
3. Actual: 1 405 kPa gauge = 1 506 kPa absolute — 16 kPa low.
4. That is a small loss but a real one. Search again before you accept the system; on a long overnight hold with a good gauge, a consistent shortfall is a leak, not instrument error.

>! Do not chase this arithmetic with a manifold gauge that reads to the nearest 50 kPa. A tightness test needs a calibrated gauge with resolution fine enough to see the loss you are looking for, and a thermometer you trust.

### Written practice 1

**State the purpose of the strength pressure test and the purpose of the tightness test, and explain why the strength test is normally not carried out on a completed site installation.**

>? **Model answer.** The strength pressure test proves the pressure-containing envelope will withstand a pressure above the maximum allowable pressure without rupturing or permanently deforming. The tightness test proves the assembled system, including every joint made on site, does not leak.
>?
>? The strength test is normally not carried out on the completed site system because the pressure parts — compressor, vessels, coils, valves, factory-assembled packs — have already been strength tested and certified by their manufacturers, and their certificates form part of the system documentation. Repeating the test on site would mean pressurising a large assembly well above PS, which is high-energy and hazardous, and could damage components not intended to be re-tested. Where pressure-containing parts are fabricated on site, or the standard calls for the assembly to be tested, the strength test does apply and becomes the installer's responsibility.

### Written practice 2

**A pipework alteration on an R134a chiller is pressure tested with nitrogen. The gauge reads 1 850 kPa gauge at 12 °C when the hold begins, and 1 905 kPa gauge at 26 °C one hour later. Show your workings and state whether the alteration passes.**

>? **Model answer.**
>?
>? - P1 = 1 850 + 101 = 1 951 kPa absolute. T1 = 12 + 273 = 285 K. T2 = 26 + 273 = 299 K.
>? - Expected tight pressure: P2 = 1 951 x (299 / 285) = 1 951 x 1.0491 = **2 047 kPa absolute** = 1 946 kPa gauge.
>? - Actual: 1 905 kPa gauge = 2 006 kPa absolute.
>? - Shortfall = 2 047 − 2 006 = **41 kPa**.
>?
>? The system has lost pressure once the temperature rise is accounted for, so it **fails** the tightness test. Re-search the new joints with bubble fluid, repair, and re-test for the full period. Note also that this is a repair test, so the test pressure must sit above 25% and below 90% of PS and the hold is one hour.

### Written practice 3

**Explain why a pneumatic strength test is treated as more hazardous than a hydraulic one, and list three controls you would apply if a pneumatic test were unavoidable.**

>? **Model answer.** Gas is compressible, so a pneumatically pressurised system stores a very large amount of energy. If a joint or vessel fails, that energy is released instantly and propels fragments. Water is effectively incompressible, so a hydraulic failure releases very little stored energy — the pressure simply collapses.
>?
>? Controls for an unavoidable pneumatic test:
>?
>? - Barricade and sign the area, and exclude everyone not performing the test.
>? - Raise the pressure in steps, holding and inspecting at each step, rather than going straight to test pressure.
>? - Use a regulator with a relief device set below the test pressure, and a calibrated gauge, so the system cannot be over-pressurised.
>? - Stand clear of joints, sight glasses and vessel ends while pressure is rising, and never leave the system unattended at test pressure without a warning tag.

## On the job

- PS is the anchor. Every test pressure, relief setting and cut-out setting is derived from it.
- Strength test: above PS, usually factory, usually hydraulic, proves it will not burst.
- Tightness test: at working pressure, on site, with oxygen-free nitrogen, proves it does not leak.
- The Code sets 24 hours for an initial commissioning test and 1 hour for a repair test — check the current edition.
- Record start and finish pressure *and* temperature. Without the temperature, the pressure reading proves nothing.`,
  quiz: [
    {
      q: "A system is nitrogen tested and the gauge pressure is higher at the end of the hold than at the start. What can you conclude?",
      options: [
        "The system is definitely tight",
        "Nothing yet — you must correct for the change in ambient temperature before judging it",
        "The regulator is leaking nitrogen into the system",
        "The test is invalid and must be restarted",
      ],
      answer: 1,
      explain: "Pressure in a sealed fixed volume rises and falls with absolute temperature. A system that leaked overnight can still read higher at 3 pm than it did at 7 am. Correct the start pressure to the finish temperature using P2 = P1 x (T2 / T1) in kelvin, then compare.",
    },
    {
      q: "Why is a hydraulic (liquid) medium preferred for a strength pressure test?",
      options: [
        "Water finds smaller leaks than nitrogen",
        "Liquid is nearly incompressible, so very little energy is stored and a failure is not explosive",
        "Water is cheaper than oxygen-free nitrogen",
        "The standard prohibits pneumatic testing entirely",
      ],
      answer: 1,
      explain: "The hazard in a strength test is stored energy, not leak detection. Compressed gas stores enormous energy that is released violently if a part fails; liquid stores almost none, so a failure is a squirt rather than a detonation. Pneumatic testing is permitted where liquid is impracticable, but with extra controls.",
    },
    {
      q: "According to the Refrigerant Handling Code of Practice, how long is the tightness test held for an initial test on a new installation, and how long after a component replacement?",
      options: [
        "1 hour initial, 24 hours after a repair",
        "24 hours initial, 1 hour after a repair",
        "8 hours in both cases",
        "15 minutes initial, 1 hour after a repair",
      ],
      answer: 1,
      explain: "A new system gets the long hold — 24 hours — because it has the most new joints and the most to lose. A repair or component replacement is tested for 1 hour. Always confirm against the current edition of the Code, since durations and pressures are the sort of detail that gets revised.",
    },
    {
      q: "What is PS?",
      options: [
        "The pressure setting of the high-pressure cut-out",
        "The maximum allowable pressure the designer permits for that part of the system",
        "The saturation pressure of the refrigerant at the design ambient",
        "The standing pressure after the system has equalised",
      ],
      answer: 1,
      explain: "PS is the maximum allowable pressure — a design limit, usually stated separately for the high side and the low side. The high-pressure cut-out setting, the relief-device setting and the test pressures are all derived from PS; they are not PS itself.",
    },
  ],
},

/* ------------------------------------------------------------------ 3 */
{
  id: "ofn-practice",
  title: "Pressure testing with oxygen-free nitrogen",
  minutes: 12,
  simple:
    "Nitrogen is the only gas you put in a system to test it. It is dry, it does not burn and it does not react with the oil. Oxygen would set the oil on fire like a diesel engine, acetylene can explode on its own, and using refrigerant is against the law because it ends up in the atmosphere.",
  refs: REFS_OFN,
  content: `A nitrogen cylinder, a two-gauge regulator, a relief device, a good hose and a calibrated test gauge. That is the whole kit for a pressure test, and every part of it exists for a reason you should be able to state.

## Why oxygen-free nitrogen

**Nitrogen** is inert. It will not burn, it will not support combustion, it does not react with refrigeration oil, and it does not attack copper or steel. **Oxygen-free** grade matters because ordinary industrial nitrogen can carry a small residual oxygen content and traces of moisture; OFN is dry and effectively oxygen-free, so it leaves nothing behind in the system. Nitrogen is also used as a purge while brazing, because it displaces the air inside the tube and stops the copper oxidising into the black flaking scale that later blocks a metering device.

It is supplied at very high pressure. A full cylinder can sit above 15 000 kPa, which is many times the maximum allowable pressure of any system you will test. That single fact drives all the equipment rules below.

## What you must never use, and why

>! **Never use oxygen.** Oxygen and hydrocarbon refrigeration oil react violently. Compressing oxygen into an oily system produces the same effect as a diesel engine's compression stroke: the temperature rise ignites the oil and the system detonates. People have been killed doing this. Oxygen equipment is also never to be used on any other gas — the residual oil in a nitrogen regulator is enough to cause an oxygen fire.

>! **Never use acetylene.** Acetylene is chemically unstable and can decompose explosively without any oxygen present once its pressure rises much above about 100 kPa gauge. That is far below any useful test pressure. Acetylene also forms explosive compounds with copper, and refrigeration pipework is copper.

>! **Never use refrigerant as the test medium.** Using refrigerant to pressure-test or leak-test is expressly prohibited: the test gas ends up in the atmosphere, which is a discharge, and in Australia discharging a scheduled refrigerant is an offence. See !CITE[cop:both:1.2.1]. It is also poor practice — refrigerant is a worse test gas than nitrogen because it is denser, more expensive and contaminates the system if the test fails.

**Never use compressed air** from a shop compressor either. It carries moisture and oil mist, and it is roughly a fifth oxygen — the oxygen hazard in a diluted but still real form.

A small quantity of refrigerant added to nitrogen as a **trace gas** for electronic leak detection is a different matter and is permitted for certain work, but it must be justified, it must be recovered where it can be, and it never turns into a licence to pressurise the whole system with refrigerant.

## Regulator and cylinder practice

The regulator has **two gauges**. The right-hand (inlet) gauge reads cylinder contents pressure — how much gas is left. The left-hand (outlet) gauge reads delivery pressure — what you are sending to the system. Confusing them is the classic apprentice error, and it is the one that over-pressurises systems.

1. Stand the cylinder upright and secure it with a chain or strap. A cylinder that falls and snaps its valve becomes a projectile.
2. Check the cylinder is nitrogen, not something else. Read the label, not the paint.
3. With the regulator adjusting screw wound fully **out** (no delivery), crack the cylinder valve momentarily to blow dust from the outlet, standing to the side.
4. Fit the regulator, tighten the nut properly, and connect a **pressure-relief device set below the maximum allowable pressure of the part being tested** downstream of the regulator. This is what protects the system if the regulator creeps or fails.
5. Open the cylinder valve **slowly**, standing to one side of the regulator. Opening it fast can shock-heat the regulator body.
6. Wind the adjusting screw in gradually to raise delivery pressure. Watch the *outlet* gauge.
7. Pressurise the system in steps, not in one push. Stop at an intermediate pressure, inspect, then continue.
8. Isolate at the system service valve, then close the cylinder valve and vent the regulator before disconnecting.

>! Never connect a nitrogen cylinder to a refrigeration system without a regulator and a relief device. Cylinder pressure exceeds the burst pressure of most system components. A single moment of "I will just crack it open carefully" has split receivers and blown out sight glasses in the face of the person holding the hose.

!FIG[gauge-pt-ring]

## Holding times and what you are actually watching

The Code sets the durations — 24 hours for an initial commissioning tightness test, 1 hour after a repair or component replacement. During the hold:

- Record the start pressure and the start ambient temperature together.
- Physically search every joint with bubble fluid while the system is up, rather than waiting for the gauge to tell you.
- Tag the system: what is in it, at what pressure, who pressurised it, and when.
- Record the finish pressure and finish ambient temperature, and correct for temperature before you judge the result.

A common site shortcut is a 15-minute "she'll hold" test. It finds gross leaks only. A joint that loses a few grams a day will pass a 15-minute test and fail the customer six months later, which is exactly the kind of slow loss the standard's hold time is designed to catch.

## Getting the nitrogen out afterwards

Release the test pressure through a service valve to atmosphere — nitrogen is inert and this is not a discharge of a scheduled substance. Do it in a controlled way, in a ventilated space, and remember that a large volume of nitrogen released in a small enclosed plant room displaces oxygen and can asphyxiate. Then evacuate; the vacuum pump removes the residual nitrogen along with the air and moisture.

### Written practice 1

**State why oxygen-free nitrogen is used as the pressure-testing medium, and give a specific reason why each of oxygen, acetylene and refrigerant must not be used.**

>? **Model answer.** OFN is used because it is inert, dry and effectively free of oxygen: it will not burn or support combustion, will not react with the refrigeration oil or the copper, and leaves no moisture or contaminant behind in the system.
>?
>? - **Oxygen** — compressing oxygen into a system containing refrigeration oil causes the oil to ignite in the same way fuel ignites in a diesel engine, producing an explosion. Fatalities have occurred.
>? - **Acetylene** — it is chemically unstable and can decompose explosively at pressures only slightly above atmospheric, far below any useful test pressure, and it forms explosive compounds with copper.
>? - **Refrigerant** — using refrigerant as the pressure or leak-test medium is prohibited, because the gas is released to atmosphere at the end of the test, which is a discharge of a scheduled substance and an offence. It also contaminates the system and costs money.
>?
>? Compressed air is likewise unsuitable: it carries moisture and oil mist and contains oxygen.

### Written practice 2

**Describe, in order, how you would connect a nitrogen cylinder to a system and raise it to test pressure safely. Include the item that protects the system from over-pressure.**

>? **Model answer.**
>?
>? 1. Stand the cylinder upright and secure it against falling; confirm from the label that it is oxygen-free nitrogen.
>? 2. With the regulator adjusting screw wound fully out, crack the cylinder valve briefly to blow out dust, standing to one side.
>? 3. Fit the regulator squarely and tighten the connection.
>? 4. Fit a **pressure-relief device downstream of the regulator, set below the maximum allowable pressure of the part being tested** — this is the item that protects the system if the regulator creeps or fails.
>? 5. Connect the hose to the system service valve.
>? 6. Open the cylinder valve slowly, standing to the side of the regulator.
>? 7. Wind the adjusting screw in gradually, watching the **outlet** gauge (not the cylinder-contents gauge), and raise the system in steps, inspecting at each step.
>? 8. At test pressure, isolate at the system valve, close the cylinder valve, record pressure and ambient temperature, and tag the system.

### Written practice 3

**A trainee has pressurised a small R134a system to test pressure and is checking joints with a soap solution. There is no relief device in the line and the regulator outlet gauge reads slightly higher than it did ten minutes ago. What is happening, what is the risk, and what should be done?**

>? **Model answer.** The regulator is creeping — its seat is not sealing fully, so cylinder pressure is bleeding past and slowly raising the delivery pressure. With cylinder pressure above 15 000 kPa behind it and no relief device fitted, the pressure can keep climbing until it exceeds the maximum allowable pressure of the system, risking a burst component and serious injury to the person leaning over the joints.
>?
>? Action: close the cylinder valve immediately, bleed the system back to a safe pressure through a service valve, and remove the faulty regulator from service and tag it. Refit a serviceable regulator **with a relief device set below the maximum allowable pressure** before continuing, and re-check the system for any damage caused by the over-pressure.

## What to remember

- Oxygen-free nitrogen only. Never oxygen, never acetylene, never refrigerant, never shop air.
- Inlet gauge = what is left in the cylinder. Outlet gauge = what you are sending. Watch the outlet gauge.
- Regulator plus a relief device set below PS. Never cylinder-direct.
- Secure the cylinder, open the valve slowly, pressurise in steps, stand to one side.
- Record pressure and temperature at both ends of the hold, and tag the system while it is under test.`,
  quiz: [
    {
      q: "Why must oxygen never be used to pressure-test a refrigeration system?",
      options: [
        "It is more expensive than nitrogen",
        "It reacts violently with the refrigeration oil when compressed, causing an explosion",
        "It dissolves into the refrigerant and cannot be evacuated",
        "It corrodes copper tubing",
      ],
      answer: 1,
      explain: "Compressing oxygen into an oily system produces the same rapid temperature rise as a diesel engine's compression stroke, and the oil ignites. This has killed technicians. The cost of the gas is irrelevant next to that; the hazard is the reason for the rule.",
    },
    {
      q: "Which gauge on a nitrogen regulator tells you the pressure being applied to the system?",
      options: [
        "The inlet (cylinder contents) gauge",
        "The outlet (delivery) gauge",
        "Either — they read the same once the valve is open",
        "Neither; only the manifold gauge on the system reads test pressure",
      ],
      answer: 1,
      explain: "The inlet gauge reads cylinder contents — how much gas is left. The outlet gauge reads what the regulator is delivering. Reading the wrong one is how systems get pressurised to cylinder pressure. The manifold gauge on the system should agree with the outlet gauge, and is what you record.",
    },
    {
      q: "What single item downstream of the regulator protects the system if the regulator creeps or fails?",
      options: [
        "A filter drier",
        "A pressure-relief device set below the maximum allowable pressure of the part being tested",
        "A low-loss fitting on the hose",
        "A schrader core depressor",
      ],
      answer: 1,
      explain: "A regulator is a control, not a protection. With cylinder pressure above 15 000 kPa behind it, the only thing standing between a creeping regulator and a burst component is a relief device sized and set below PS. It is required practice, not a refinement.",
    },
    {
      q: "Adding a small amount of refrigerant to nitrogen as a trace gas for electronic leak detection is:",
      options: [
        "Always prohibited under any circumstances",
        "Permitted for certain work, but never a justification for pressure-testing with refrigerant alone",
        "The preferred method for all commissioning tightness tests",
        "Only allowed on systems containing hydrocarbon refrigerants",
      ],
      answer: 1,
      explain: "A trace-gas mixture is a recognised technique for finding leaks electronically on large systems, and is permitted for certain work. What is prohibited is using refrigerant as the pressure medium — pressurising and then venting a system full of refrigerant is a discharge and an offence.",
    },
  ],
},

/* ------------------------------------------------------------------ 4 */
{
  id: "design-temp-table",
  title: "Reading the design temperature table to get the test pressure",
  minutes: 14,
  simple:
    "The standard has a table that says how hot each part of a system is assumed to get. You find your row and your column, read off a temperature, then look up what pressure the refrigerant makes at that temperature. That pressure is the limit you design and test to. It is a two-step lookup, nothing more.",
  refs: REFS_DESIGN,
  content: `A question that reads *"using the table, determine the maximum allowable pressure for the low-pressure side of an R404A system with the evaporator mounted outdoors, in a region with a design ambient of 38 °C"* is not a memory test. It is a navigation test. The examiner wants to see you find the right row, the right column, read the temperature, and then convert that temperature into a pressure. Get the method automatic and the arithmetic is trivial.

## What the table actually does

The maximum allowable pressure of a part of a refrigerating system is not plucked out of the air. It is set by the worst pressure that part can reach when the plant is standing idle on the hottest day of the year, with the refrigerant inside it sitting at whatever temperature the surroundings drive it to. So the standard specifies, for each part of a system and each exposure, a **specified design temperature**. Convert that temperature to the refrigerant's saturation pressure and you have the pressure that part must be built and tested for.

Two things drive the specified temperature:

- **Which part of the system, and how it is cooled.** A high-pressure side served by an air-cooled condenser sits hotter than one served by a water-cooled or evaporative condenser, because air is a poorer cooling medium and the condenser must run well above ambient to reject heat.
- **Where the region sits on the ambient scale.** A plant in a mild coastal city and a plant in a hot inland town do not face the same worst case, so the table has a column per ambient band.

## The five-step method

1. **Identify the part of the system.** High-pressure side, or low-pressure side? The high side is everything from the compressor discharge to the metering device. The low side is everything from the metering device to the compressor suction.
2. **Identify its exposure.** For the high side: air-cooled, water-cooled or evaporatively-cooled condenser. For the low side: is a heat exchanger exposed to outdoor ambient, or is the whole low side indoors?
3. **Identify the regional design ambient.** This comes from the project documents or the design data for the location, not from today's weather.
4. **Read the specified design temperature** at that row and column intersection.
5. **Convert that temperature to the saturation pressure of the actual refrigerant**, using a PT chart, saturation table or the refrigerant supplier's data. State whether your answer is absolute or gauge — and say which.

!FIG[gauge-pt-ring]

## The table extract used in the examples below

The practice table below has the **shape** of the one the standard gives, but its numbers are illustrative and deliberately not the standard's. That is on purpose: the skill being tested is navigation, and an exam always supplies the table you are to work from, so there is nothing to memorise and a great deal to get wrong by memorising it. **Read the real specified temperatures from the table in the current edition of AS/NZS 5149.2**, which your RTO or employer holds — the ambient bands there are set by the standard as well.

| Part of the system and its exposure | Design ambient up to 32 °C | Design ambient over 32 up to 38 °C | Design ambient over 38 up to 43 °C |
|---|---|---|---|
| High-pressure side, air-cooled condenser | 54 °C | 58 °C | 62 °C |
| High-pressure side, water-cooled condenser | 42 °C | 42 °C | 42 °C |
| High-pressure side, evaporatively-cooled condenser | 42 °C | 42 °C | 42 °C |
| Low-pressure side, heat exchanger exposed to outdoor ambient | 34 °C | 39 °C | 44 °C |
| Low-pressure side, entirely within indoor ambient | 28 °C | 34 °C | 39 °C |

Two patterns worth noticing, because they help you sanity-check an answer:

- The **air-cooled high side is always the hottest row.** If your answer for an air-cooled condenser comes out lower than your answer for the low side, you have read the wrong row.
- **Water-cooled and evaporative high sides do not climb with air ambient** in the same way, because their heat sink is water or the wet-bulb, not the dry-bulb air temperature.

## Worked example 1 — air-cooled high side, mild region

*An R134a chiller with an air-cooled condenser, in a region with a design ambient of 30 °C. Find the specified design temperature and the corresponding maximum allowable pressure.*

- Row: high-pressure side, air-cooled condenser. Column: up to 32 °C.
- Specified design temperature = **54 °C**.
- R134a saturation data: at 50 °C the saturation pressure is 1 318 kPa absolute; at 60 °C it is 1 682 kPa absolute.
- Interpolate for 54 °C: 1 318 + (54 − 50) / (60 − 50) x (1 682 − 1 318) = 1 318 + 0.4 x 364 = **1 464 kPa absolute**.
- As a gauge pressure: 1 464 − 101 = **1 363 kPa gauge**, call it 1 360 kPa gauge.

## Worked example 2 — low side, evaporator outdoors

*An R404A cool-room system with the evaporator inside the room but the suction accumulator, receiver and part of the suction line running outdoors on the roof, in a region with a design ambient of 36 °C.*

- Row: low-pressure side with a heat exchanger exposed to outdoor ambient. Column: over 32 up to 38 °C.
- Specified design temperature = **39 °C**.
- R404A saturation data: at 30 °C, 1 440 kPa absolute; at 40 °C, 1 850 kPa absolute.
- Interpolate for 39 °C: 1 440 + (9 / 10) x (1 850 − 1 440) = 1 440 + 0.9 x 410 = 1 440 + 369 = **1 809 kPa absolute**.
- Gauge: 1 809 − 101 = **1 708 kPa gauge**.

That is the number the low-pressure side must be rated for and the number every low-side pressure limit is checked against. Notice how high it is: people think of the low side as the "low pressure" side and forget that on a hot Saturday with the plant off, the low side sits at ambient saturation just like everything else.

## Worked example 3 — water-cooled high side

*An R22 water-cooled plant being assessed in a region with a design ambient of 41 °C.*

- Row: high-pressure side, water-cooled condenser. Column: over 38 up to 43 °C.
- Specified design temperature = **42 °C** — unchanged across the columns, because the condenser rejects to water.
- R22 saturation data: at 40 °C, 1 530 kPa absolute; at 50 °C, 1 940 kPa absolute.
- Interpolate for 42 °C: 1 530 + 0.2 x 410 = 1 530 + 82 = **1 612 kPa absolute** = **1 511 kPa gauge**.

Compare that with what an air-cooled machine in the same town would need: the air-cooled row gives 62 °C, and R22 at 62 °C is around 2 530 kPa absolute. Same refrigerant, same town, very different pressure envelope — which is exactly why the table splits by condenser type.

## Worked example 4 — low side entirely indoors

*An R410A split system where the whole low-pressure side is inside a conditioned building, design ambient 30 °C.*

- Row: low-pressure side entirely within indoor ambient. Column: up to 32 °C.
- Specified design temperature = **28 °C**.
- R410A saturation data: at 20 °C, 1 440 kPa absolute; at 30 °C, 1 880 kPa absolute.
- Interpolate for 28 °C: 1 440 + 0.8 x 440 = 1 440 + 352 = **1 792 kPa absolute** = **1 691 kPa gauge**.

## The interpolation, once, properly

Every one of those examples used the same straight-line interpolation. Learn it as a formula and stop re-deriving it under exam pressure:

P = P(low) + (t − t(low)) / (t(high) − t(low)) x (P(high) − P(low))

where t(low) and t(high) are the table temperatures either side of your specified temperature, and P(low) and P(high) are their saturation pressures. If your specified temperature lands exactly on a table row, skip the arithmetic and read it off.

> Saturation pressure rises faster than a straight line, so linear interpolation across a 10 K gap slightly under-reads. That is acceptable for an exam answer if you show the method, but on real design work use finer data or the supplier's software.

## Absolute or gauge?

Refrigerant saturation tables are usually published in absolute pressure. Service gauges read gauge pressure. The difference is one atmosphere, taken as 101 kPa. Whichever you give, **write the unit and say which** — "1 890 kPa gauge" or "1 991 kPa absolute". An unlabelled number is worth very little in a marked answer, and on site it is the difference between a correct relief-valve setting and a wrong one.

### Written practice 1

**A supermarket R404A pack has a remote air-cooled condenser on the roof. The regional design ambient is 41 °C. Using the table extract in this lesson, determine the specified design temperature for the high-pressure side and the corresponding saturation pressure. Show all workings and state your answer in kPa gauge. R404A saturation data: 50 °C = 2 320 kPa absolute, 60 °C = 2 880 kPa absolute.**

>? **Model answer.**
>?
>? 1. Part of system: high-pressure side. Exposure: air-cooled condenser.
>? 2. Design ambient 41 °C falls in the "over 38 up to 43 °C" column.
>? 3. Specified design temperature = **62 °C**.
>? 4. Interpolate between the 50 °C and 60 °C rows — 62 °C is above the 60 °C row, so extend the same slope: slope = (2 880 − 2 320) / 10 = 56 kPa per K.
>? 5. P = 2 880 + (62 − 60) x 56 = 2 880 + 112 = **2 992 kPa absolute**.
>? 6. Gauge = 2 992 − 101 = **2 891 kPa gauge**, say 2 890 kPa gauge.
>?
>? (Extending a straight line beyond the last data point under-reads the true saturation pressure, so on real work take the value from finer supplier data. State that in your answer and you show the examiner you understand the limitation.)

### Written practice 2

**Two identical R134a chillers are installed in the same town, design ambient 35 °C. One has an air-cooled condenser, the other a water-cooled condenser. Using the table extract, explain why their high-pressure sides have different maximum allowable pressures, and calculate both. R134a saturation data: 40 °C = 1 017 kPa absolute, 50 °C = 1 318 kPa absolute, 60 °C = 1 682 kPa absolute.**

>? **Model answer.** The table splits the high-pressure side by condenser type because the cooling medium sets how far above ambient the condenser must run. An air-cooled condenser rejects to dry-bulb air and must run well above it, so its specified temperature climbs with ambient. A water-cooled condenser rejects to circulating water, so its specified temperature is fixed and does not climb with air ambient.
>?
>? **Air-cooled**, column "over 32 up to 38 °C" → specified temperature **58 °C**.
>? Interpolate between 50 °C and 60 °C: slope = (1 682 − 1 318) / 10 = 36.4 kPa per K.
>? P = 1 318 + (58 − 50) x 36.4 = 1 318 + 291.2 = **1 609 kPa absolute = 1 508 kPa gauge**.
>?
>? **Water-cooled**, same column → specified temperature **42 °C**.
>? Interpolate between 40 °C and 50 °C: slope = (1 318 − 1 017) / 10 = 30.1 kPa per K.
>? P = 1 017 + 2 x 30.1 = 1 017 + 60.2 = **1 077 kPa absolute = 976 kPa gauge**.
>?
>? The air-cooled machine's high side must be rated for roughly 55% more gauge pressure than the water-cooled one — same refrigerant, same town, different heat sink.

### Written practice 3

**Explain, in your own words, why the low-pressure side of a system with an outdoor heat exchanger is assigned a higher specified design temperature than one entirely indoors, and why the low-pressure side needs a design pressure at all when it runs at low pressure in service.**

>? **Model answer.** The specified design temperature represents the worst temperature the refrigerant inside that part can be driven to. A low-pressure component sitting on a roof is exposed to full outdoor ambient and solar gain, so the refrigerant inside it can reach a higher temperature than the same component in a conditioned indoor space. The table therefore assigns the exposed low side a higher temperature.
>?
>? The low side needs a design pressure because the pressures that matter are the *standstill* pressures, not the running ones. When the plant is off, the refrigerant in the low side equalises and sits at the saturation pressure corresponding to its surroundings. On a hot day that can be nearly 2 000 kPa gauge — far above anything the low side sees while the compressor is running. Components, relief settings and pressure limits on the low side must be chosen for that standstill condition, not for the suction pressure on the gauges at design load.

## What to remember

- Two steps: table lookup gives a **temperature**; refrigerant data turns that temperature into a **pressure**.
- Row = part of the system plus its exposure. Column = the regional design ambient.
- Air-cooled high side is always the hottest row; water-cooled and evaporative do not climb with air ambient.
- Interpolate with P = P(low) + (t − t(low)) / (t(high) − t(low)) x (P(high) − P(low)).
- Always state absolute or gauge, and always use the table in the current edition of the standard.`,
  quiz: [
    {
      q: "The design temperature table gives you a temperature. What must you do with it to get the maximum allowable pressure?",
      options: [
        "Add the evaporator TD and read the result as a pressure",
        "Convert it to the saturation pressure of the refrigerant in that system",
        "Multiply it by the compression ratio",
        "Use it directly as a pressure in kPa",
      ],
      answer: 1,
      explain: "The table is refrigerant-independent — it says how hot that part of the system is assumed to get. The pressure that temperature produces depends entirely on which refrigerant is inside, so the second step is a saturation lookup. R410A at 55 °C and R134a at 55 °C give very different pressures.",
    },
    {
      q: "Why does the high-pressure side of an air-cooled system get a higher specified design temperature than an otherwise identical water-cooled system in the same location?",
      options: [
        "Because air-cooled condensers use more refrigerant",
        "Because an air-cooled condenser rejects to dry-bulb air and must run well above it, while a water-cooled condenser rejects to circulating water",
        "Because water-cooled systems always use lower-pressure refrigerants",
        "Because air-cooled condensers are mounted outdoors and water-cooled ones are not",
      ],
      answer: 1,
      explain: "The heat sink sets the condensing temperature. Air is a poor sink, so the condenser must sit well above the ambient dry-bulb to reject heat, and that gap grows as ambient rises. Water — or the wet-bulb, for an evaporative condenser — is a far better sink, so the specified temperature is lower and does not climb with air ambient.",
    },
    {
      q: "A system's low-pressure side is entirely indoors. Which row of the design temperature table applies?",
      options: [
        "High-pressure side, air-cooled condenser",
        "Low-pressure side with a heat exchanger exposed to outdoor ambient",
        "Low-pressure side entirely within indoor ambient",
        "Whichever row gives the highest pressure, to be safe",
      ],
      answer: 2,
      explain: "You use the row that matches the actual part and its actual exposure. Deliberately choosing the worst row is not conservatism, it is a wrong answer — it would give an over-specified design pressure and, in an exam, a lost mark for not reading the table.",
    },
    {
      q: "Why does the low-pressure side need a maximum allowable pressure at all, when it runs at low pressure in service?",
      options: [
        "Because the suction pressure spikes at start-up",
        "Because when the plant stands idle the low side equalises and sits at the saturation pressure of its surroundings, which can be very high on a hot day",
        "Because the compressor can pump backwards",
        "Because the standard requires both sides to have the same rating",
      ],
      answer: 1,
      explain: "The governing case is standstill, not running. A stopped system on a 40 °C rooftop has refrigerant in the low side sitting at ambient saturation — for R404A that is about 1 750 kPa gauge. Components and relief settings on the low side must handle that, not the 200 kPa the gauge shows at design load.",
    },
  ],
},

/* ------------------------------------------------------------------ 5 */
{
  id: "evacuation-dehydration",
  title: "Evacuation, dehydration and the standing-vacuum test",
  minutes: 12,
  simple:
    "Before refrigerant goes in you must suck out all the air and moisture with a vacuum pump. Water inside a system is poison: it freezes in the valve and turns into acid in the oil. You then shut the pump off and watch the vacuum gauge — if the reading climbs, something is still wrong.",
  refs: REFS_VAC,
  content: `A newly installed system is full of air, and air carries water vapour. Both have to come out before a gram of refrigerant goes in. Evacuation is how, dehydration is why, and the standing-vacuum test is how you prove it worked.

## What you are actually removing, and why it matters

| Contaminant | What it does in service |
|---|---|
| Air (mainly nitrogen and oxygen) | Non-condensable: it collects in the top of the condenser, raises head pressure and discharge temperature, cuts capacity and cooks the oil |
| Water vapour | Freezes at the metering device and blocks it intermittently; combines with the refrigerant and oil to form acids that attack windings and copper-plate the bearings |
| Nitrogen left from the pressure test | Same non-condensable behaviour as air |

The acid path is the one that kills compressors. Moisture plus a POE or mineral oil plus heat produces organic and inorganic acids, and acid in a hermetic system attacks the motor winding insulation until the motor goes to earth. The burnout is blamed on the compressor; the cause was a lazy evacuation two years earlier.

!SIM[See what non-condensables do to the gauges](fault=nonCondensables)

## Boiling water out at room temperature

Water only leaves the system as vapour, and a vacuum pump can only remove vapour. Reduce the absolute pressure inside the system far enough and liquid water boils at room temperature. That is the whole principle of dehydration: you are not sucking water out, you are lowering the pressure until it boils, then removing the vapour.

At about 5 000 microns absolute, water boils near 0 °C. Pull down to 500 microns and any liquid water in the system boils vigorously at ordinary room temperature. This is also why a cold system is hard to dry — if the pipework is at 5 °C on a winter morning, the water hardly boils at all and the pump seems to stall. Warm the system, or accept a much longer pull-down.

## The equipment, and why manifold gauges will not do

- **A two-stage vacuum pump**, sized for the system, with clean oil. Vacuum pump oil absorbs moisture and loses its ability to reach a deep vacuum, so change it between jobs and after any wet system.
- **Dedicated evacuation hoses** — large bore and as short as practical. A standard 6 mm service hose is a straw; it can take hours to do what a 10 mm hose does in minutes. See !CITE[cop:2:5.3].
- **A dedicated vacuum (micron) gauge**, thermistor or Pirani type, connected to the system at a point away from the pump. A manifold compound gauge cannot resolve the range that matters: everything from 25 000 microns down to 100 microns sits within the last needle-width of the dial. Using a manifold gauge to judge a vacuum is the most common reason systems are charged wet.
- **Core removal tools** on the service ports, so the schrader cores are not throttling the whole evacuation.
- **Valves to isolate the pump** from the system without disturbing the gauge, so the standing test can be started cleanly.

>! Never use a vacuum pump to evacuate a system that still contains refrigerant. Recover first. Pumping refrigerant through the pump vents it to atmosphere, which is a prohibited discharge, and it destroys the pump oil.

## The two methods, in one paragraph each

The Refrigerant Handling Code of Practice sets out two acceptable methods, and they are taught in full in the recovery module of this course.

- **Deep evacuation** — one continuous pull-down to at least 500 microns (67 Pa absolute), then isolate the pump and hold for 60 minutes below 600 microns (80 Pa). See !CITE[cop:2:5.4.1].
- **Triple evacuation** — two pull-downs to at least 4 500 microns (600 Pa), each broken by a purge with oxygen-free nitrogen, then a third pull-down to 500 microns held for 60 minutes below 600 microns. Suits large, complex or contaminated systems. See !CITE[cop:2:5.4.2].

The nitrogen breaks in the triple method do the real work on a wet system: the dry nitrogen sweeps moisture-laden vapour out of dead legs and blind pockets that a straight pull-down never reaches.

## The standing-vacuum (decay) test

This is the test that tells you whether you are done. Pull down to the required level, **isolate the pump**, and watch the micron gauge for 60 minutes.

!FIG[vacuum-decay]

| What the gauge does | What it means | What to do |
|---|---|---|
| Sits flat below 600 microns for the full hour | System is dry and tight | Proceed to charge |
| Rises steadily and keeps rising past atmospheric pressure over time | A leak — air is being drawn in from outside | Pressure-test with nitrogen again and find it |
| Rises, then levels out and stops at some higher value | Moisture still boiling off inside a sealed system | Keep pumping; consider the triple method, warmth, or a change of pump oil |
| Rises fast to atmospheric in minutes | A large leak, an open valve or a hose left uncapped | Check the obvious before you blame the pipework |

A rise of **100 microns or more** during the standing test is a fail. That is the number to quote. Note the logic of the two shapes: a leak has an infinite supply of air outside, so the pressure keeps climbing; moisture has a finite supply, so the pressure climbs then plateaus at the vapour pressure of water at the system temperature.

>! A deep vacuum is not a safe place to run electricity. Never energise a compressor, and never megger a hermetic or semi-hermetic motor, while the system is under vacuum. The rarefied gas inside will not insulate, and the winding can flash over to the shell and be destroyed.

## Practical points that decide how long the job takes

- Pull the vacuum from **both** the high side and the low side. Pulling from one port only means the whole evacuation is throttled through the metering device.
- Remove schrader cores. A core can double or triple the pull-down time on its own.
- Open every solenoid valve, service valve and isolating valve, including ones that will normally be shut. A closed valve leaves a pocket of wet air that will equalise into the system the moment it is opened.
- Break the vacuum with the system's own refrigerant or with dry nitrogen — never with air.
- If the pump stalls at a few thousand microns and will not go lower, the usual culprits are wet pump oil, a leaking hose gasket, or a leak. Change the oil first: it is the cheapest test.

### Written practice 1

**Explain why moisture in a refrigeration system is a problem, naming two distinct mechanisms of damage, and explain the principle by which a vacuum pump removes it.**

>? **Model answer.** Two mechanisms:
>?
>? 1. **Freezing at the metering device.** Water carried around with the refrigerant reaches the expansion valve or capillary, where the temperature drops below 0 °C, and freezes. The restriction blocks intermittently, giving a system that cools normally then starves, then recovers when it thaws.
>? 2. **Acid formation.** Water reacts with the refrigerant and the lubricating oil, particularly at the high discharge temperatures around the compressor, forming acids. The acids attack the motor winding insulation and the metals in the system, leading eventually to a burnout, and they contaminate the whole system with sludge.
>?
>? **Principle of removal.** A vacuum pump can only remove vapour, not liquid. Lowering the absolute pressure inside the system lowers the boiling point of water, so at a deep enough vacuum any liquid water boils at ordinary room temperature and is drawn out as vapour. That is why the required vacuum level is specified in microns and why a warm system dries much faster than a cold one.

### Written practice 2

**A system is pulled down to 480 microns. The pump is isolated and the micron gauge is watched. Over 45 minutes the reading rises to 1 900 microns and then holds steady there for a further 30 minutes. What does this indicate, and what would you do next? How would your interpretation differ if the reading had continued climbing past 5 000 microns and kept going?**

>? **Model answer.** A rise that then **levels off and stays** indicates **moisture still in the system**, not a leak. The water boiling off has a finite supply, and the pressure stabilises at the vapour pressure of water at the system's temperature. The rise is well over the 100-micron allowance, so the system fails the standing test.
>?
>? Next steps: reconnect and continue evacuating; check and change the vacuum pump oil, which absorbs moisture and limits the achievable vacuum; consider switching to the triple evacuation method so that dry nitrogen purges sweep moisture out of dead legs; and gently warm the pipework if it is cold. Then repeat the standing test.
>?
>? If instead the reading **kept climbing without levelling off**, and continued rising toward atmospheric pressure, that indicates a **leak** — outside air has an unlimited supply, so the pressure never plateaus. The response is different: stop evacuating, pressurise with oxygen-free nitrogen and carry out a tightness test to locate and repair the leak before evacuating again.

### Written practice 3

**List five practical steps that will shorten the time taken to evacuate a new commercial installation, and give the reason for each.**

>? **Model answer.**
>?
>? 1. **Use large-bore, short evacuation hoses instead of standard manifold hoses** — the flow of gas at deep vacuum is governed by the bore of the passage; a small hose throttles the pump badly.
>? 2. **Remove the schrader cores with a core removal tool** — a core is a severe restriction that can multiply the pull-down time on its own.
>? 3. **Evacuate from both the high side and the low side** — otherwise everything must be drawn through the metering device, which is deliberately a restriction.
>? 4. **Open every valve, including solenoids and isolating valves** — a closed valve leaves a pocket of wet air that later equalises into the evacuated system.
>? 5. **Start with clean vacuum pump oil, and change it on wet systems** — pump oil absorbs moisture and quickly loses its ability to reach a deep vacuum.
>?
>? Also worth listing: warm the pipework, because water boils off far faster at 25 °C than at 5 °C, and connect the micron gauge remote from the pump so you are reading the system rather than the pump inlet.

## What to remember

- Air and moisture out, or the compressor pays for it later — non-condensables raise head pressure, moisture makes acid.
- A vacuum pump removes vapour; the vacuum is what turns liquid water into vapour.
- Micron gauge, dedicated large-bore hoses, cores out, both sides — that is the difference between an hour and a day.
- Standing test: isolate the pump, 60 minutes, below 600 microns, and a rise of 100 microns or more is a fail.
- Keeps rising = leak. Rises then plateaus = moisture. Never megger or energise under vacuum.`,
  quiz: [
    {
      q: "During a standing-vacuum test the micron gauge rises for 30 minutes and then holds steady. What is the most likely cause?",
      options: [
        "A leak drawing air into the system",
        "Moisture still boiling off inside a sealed system",
        "The vacuum gauge is faulty",
        "The pump was left running",
      ],
      answer: 1,
      explain: "Moisture has a finite supply, so once the water vapour reaches its vapour pressure at the system temperature the reading plateaus. A leak has an unlimited supply of outside air, so the reading would keep climbing toward atmospheric. The shape of the curve, not just the number, tells you which fault you have.",
    },
    {
      q: "Why must a dedicated micron gauge be used rather than the manifold's compound gauge?",
      options: [
        "The manifold gauge is not rated for vacuum",
        "The whole meaningful range, from thousands of microns down to hundreds, falls within a needle-width on a manifold gauge",
        "Manifold gauges are only calibrated for refrigerant, not nitrogen",
        "The Code prohibits connecting a manifold during evacuation",
      ],
      answer: 1,
      explain: "A compound gauge reads down to about 0 kPa absolute with a resolution of a few kPa. 500 microns is about 0.067 kPa — the needle cannot distinguish that from 5 000 microns. A thermistor or Pirani micron gauge measures in the range that actually decides whether the system is dry.",
    },
    {
      q: "What is the largest rise permitted during the standing-vacuum test before the system is judged to have failed?",
      options: ["10 microns", "100 microns", "600 microns", "1 500 microns"],
      answer: 1,
      explain: "A rise of 100 microns or more indicates a leak or remaining moisture and the system fails. Note the related numbers: pull down to at least 500 microns, isolate, and hold for 60 minutes below 600 microns. Confirm all three against the current edition of the Code.",
    },
    {
      q: "Why must a hermetic compressor motor never be meggered while the system is under a deep vacuum?",
      options: [
        "The reading will be too high to be useful",
        "The rarefied gas inside will not insulate, so the test voltage can flash over to the shell and destroy the winding",
        "The vacuum pump would be damaged by the test voltage",
        "Moisture in the winding gives a false low reading",
      ],
      answer: 1,
      explain: "Gas at very low pressure ionises easily, so its dielectric strength collapses. Applying 500 V d.c. across a winding in that environment can strike an arc to the shell. Bring the system back to at least atmospheric pressure with dry nitrogen or refrigerant before any insulation resistance testing.",
    },
  ],
},

/* ------------------------------------------------------------------ 6 */
{
  id: "charging-new-system",
  title: "Charging a newly evacuated system",
  minutes: 12,
  simple:
    "Put the refrigerant in as liquid, into the high side, while the machine is stopped. Never push liquid into the suction of a running compressor — a compressor cannot squash liquid, and it breaks. Think of trying to compress a bucket of water with a piston.",
  refs: REFS_CHARGE,
  content: `The vacuum has held, the standing test passed, and the system is dry and tight. Now comes the step where a good installation can be ruined in thirty seconds.

!FIG[recovery-hookup]

## Where the charge goes: liquid, into the high side, with the compressor stopped

On a newly evacuated system the correct procedure is to charge **liquid refrigerant into the high-pressure side — the liquid line or the receiver — through the liquid-line service valve or king valve, while the compressor is not running**.

There are four reasons, and you should be able to give all four:

1. **The system is in a deep vacuum, so it will draw the charge in by itself.** The pressure difference between a cylinder at ambient saturation and a system at 500 microns is the whole cylinder pressure. Liquid flows in fast with nothing running.
2. **Liquid is dense, so the bulk of the charge goes in quickly.** Charging a 12 kg commercial charge as vapour would take hours and would stall as the cylinder chilled itself down.
3. **The high side is where liquid belongs.** Liquid entering the receiver, liquid line and condenser is exactly where the system stores liquid in normal operation. Nothing is being asked to do something it was not built for.
4. **Zeotropic blends must be charged as liquid to keep their composition correct.** A blend such as R404A or R410A has components with different boiling points. Draw vapour from the top of the cylinder and you take the more volatile components preferentially, leaving the cylinder — and putting into the system — a mixture that is no longer the refrigerant on the label. Liquid charging takes all components in their correct proportions. See !CITE[cop:2:6.2].

Weigh the charge in on **scales**, against the manufacturer's stated charge plus any calculated allowance for extra pipe run. Record what went in — the mass charged is part of the commissioning record and, for many systems, a legal record.

## What happens if liquid goes into the suction of a running compressor

>! Never charge liquid refrigerant into the suction line of a running compressor. A compressor is a vapour pump. Liquid is essentially incompressible, so when a slug of liquid reaches the cylinder on the compression stroke the pressure spikes instantly and something has to give — bent or broken valve reeds, a broken valve plate, a bent connecting rod, a smashed discharge valve, or on a scroll, damaged or unloaded scroll flanks. On top of the mechanical damage, liquid refrigerant washes the oil film off the bearings and dilutes the oil in the sump, so even a compressor that survives the slug is now running on thin, foamy oil. This is one of the most common self-inflicted compressor failures in the trade.

The gentler version of the same fault is **flood-back**: liquid arriving continuously but not as a slug. It does not break anything in one hit but it dilutes the oil, causes foaming at start-up, cools the motor windings unevenly and eventually destroys the bearings.

## If you must add refrigerant with the compressor running

Topping up an operating system is a different job from charging an evacuated one, and it comes up constantly on service work. Two acceptable approaches:

- **Vapour charge into the suction**, drawing vapour from an upright cylinder. Slow, and unacceptable for zeotropic blends because of fractionation.
- **Metered liquid into the suction**, from an inverted cylinder, through a valve or a purpose-made charging device that throttles the liquid so it flashes to vapour before it reaches the compressor. The manifold valve is cracked open a little at a time while the suction pressure and the compressor's sound are watched. This is the standard way to add a blend to a running system, and it demands attention, not a wedged-open valve.

>! Never leave a liquid charging line open and walk away, and never leave a cylinder inverted and connected to a running system unattended. That is the classic path to a slug.

## The sequence, start to finish

1. Confirm the standing-vacuum test passed and the system is still under vacuum.
2. Purge the charging hose at the cylinder before connecting, so no air enters. Low-loss fittings on the hoses keep the purge loss to a minimum.
3. Place the cylinder on calibrated scales and record the starting weight.
4. Connect to the liquid-line or receiver service valve, with the compressor isolated and locked out.
5. Open the cylinder liquid valve and let the vacuum draw the charge in until the pressures equalise.
6. Weigh in as much of the calculated charge as the system will take standing.
7. Close the cylinder valve, restore the compressor supply, and start the plant.
8. Add the balance as **metered liquid into the suction** or as vapour, watching the sight glass, suction superheat and liquid subcooling, until the charge matches the calculated figure.
9. Record the final mass charged, the refrigerant type and the cylinder details on the commissioning sheet.

## Keeping the cylinder honest

- **Never connect a cylinder to a system or another cylinder at a higher pressure or temperature.** Back-flow will contaminate the cylinder with the system's refrigerant and oil, or overfill it. See !CITE[cop:2:6.5].
- **Never trap liquid between two closed valves.** A hose full of liquid refrigerant with a shut valve at each end becomes hydraulically full as it warms in the sun, and the pressure rise is enormous. Bleed or recover the hose contents before disconnecting.
- **Keep charging lines short**, and recover what is in them rather than venting.
- **Never heat a cylinder with a flame** to raise its pressure. If you need cylinder pressure, use a warm-water bath at a controlled temperature or a purpose-made cylinder heater.

## Worked example — how much goes in

*A packaged R404A condensing unit has a factory charge of 6.2 kg for the base 8 m of interconnecting pipe. The installed run is 23 m, and the manufacturer specifies an additional 32 g per metre beyond the base length.*

1. Extra pipe = 23 − 8 = **15 m**.
2. Additional charge = 15 x 32 = 480 g = **0.48 kg**.
3. Total charge = 6.2 + 0.48 = **6.68 kg**, call it 6.68 kg.
4. Cylinder starting weight 24.60 kg, so charging is complete when the scales read 24.60 − 6.68 = **17.92 kg**.

Note the sign: the *cylinder* loses the mass the *system* gains. Candidates routinely add the charge to the cylinder weight instead of subtracting it.

### Written practice 1

**A new R410A split system has been evacuated and passed its standing-vacuum test. State where the refrigerant should be charged into the system, in what state, with the compressor in what condition — and give three reasons for that method.**

>? **Model answer.** The charge should be introduced as **liquid**, into the **high-pressure side** (the liquid line or receiver, through the liquid-line or king service valve), with the **compressor stopped and isolated**.
>?
>? Reasons:
>?
>? 1. The system is under a deep vacuum, so it draws the charge in by itself — the full cylinder pressure is available as the driving pressure difference, and the charge goes in quickly with nothing running.
>? 2. Liquid is far denser than vapour, so most or all of the charge can be weighed in rapidly; vapour charging a full charge would take hours and would stall as the cylinder self-cooled.
>? 3. R410A is a blend, and blends must be charged as liquid. Taking vapour from the cylinder removes the more volatile component preferentially, so both the cylinder contents and the system charge end up off-specification.
>?
>? A fourth reason: the high side is where the system normally stores liquid, so liquid entering the receiver and liquid line is in its correct place and nothing is exposed to liquid it was not designed for.

### Written practice 2

**Describe what happens inside a reciprocating compressor if liquid refrigerant is charged into its suction while it is running, and describe two separate kinds of damage that result.**

>? **Model answer.** A compressor is a vapour pump. Liquid refrigerant is effectively incompressible, so when a slug of liquid is drawn into the cylinder and the piston rises, the liquid cannot be squeezed into a smaller volume. The pressure in the cylinder spikes almost instantaneously.
>?
>? **Mechanical damage:** the spike breaks or bends the valve reeds, cracks the valve plate, can bend a connecting rod or break the crankshaft, and can blow the head gasket. On a scroll compressor the fixed and orbiting scrolls are forced apart or damaged.
>?
>? **Lubrication damage:** liquid refrigerant washes the oil film off the bearings and journals, and dilutes the oil in the sump. The oil foams and loses its load-carrying ability, so the bearings run metal to metal. A compressor that survives the initial slug is then destroyed more slowly by oil starvation and by the debris circulating from the first impact.
>?
>? The continuous, lower-level version of this is flood-back, which produces the lubrication damage without the immediate mechanical shock.

### Written practice 3

**You need to add 1.4 kg of R404A to a running commercial system. Explain how you would do it safely, and state two things you must never do.**

>? **Model answer.** R404A is a blend, so it must be taken from the cylinder as **liquid**. Because the compressor is running, that liquid must be metered so it flashes to vapour before it reaches the compressor.
>?
>? Method: place the cylinder on calibrated scales and record the start weight; purge the hose at the cylinder; connect to the suction service port; invert the cylinder (or use its liquid valve) so liquid is drawn from it; then crack the manifold valve open a small amount at a time, allowing the liquid to throttle across the valve or through a purpose-made charging device and flash to vapour in the suction line. Watch the suction pressure, the suction line temperature and superheat, and listen to the compressor. Add in small increments until the scales show 1.4 kg has gone in, then close the cylinder valve and recover the hose contents.
>?
>? Never: (1) open the liquid charging valve fully, or wedge it open and walk away — that sends a slug of liquid to the compressor; (2) charge the blend as vapour from an upright cylinder, which fractionates the mixture and leaves both cylinder and system off-specification. Also never connect the cylinder to a system at higher pressure or temperature than the cylinder, because refrigerant and oil can back-flow into it.

## What to remember

- New system: liquid, high side, compressor stopped, weighed on scales.
- Blends are always charged as liquid, whether the system is stopped or running.
- Running system: metered liquid into the suction, a crack at a time, or vapour for a pure refrigerant.
- Liquid into a running suction breaks valves and washes out the bearings. There is no gentle version of this.
- Record the mass charged, the refrigerant type and the cylinder details on the commissioning sheet.`,
  quiz: [
    {
      q: "Into which part of a newly evacuated system should the refrigerant charge be introduced, and in what state?",
      options: [
        "As vapour into the suction line, with the compressor running",
        "As liquid into the high-pressure side, with the compressor stopped",
        "As liquid into the suction line, with the compressor running",
        "As vapour into the discharge line, with the compressor stopped",
      ],
      answer: 1,
      explain: "The deep vacuum draws liquid in quickly through the liquid-line or king valve, the high side is where the system normally holds liquid, and liquid charging keeps a blend's composition correct. Nothing needs to be running, and nothing is exposed to liquid it was not designed for.",
    },
    {
      q: "Why must a zeotropic blend such as R404A always be charged as a liquid?",
      options: [
        "Liquid charging is faster",
        "Drawing vapour removes the more volatile components preferentially, so both cylinder and system end up with the wrong mixture",
        "Vapour charging would overfill the receiver",
        "The Code prohibits vapour charging of any refrigerant",
      ],
      answer: 1,
      explain: "This is fractionation. The components of a blend boil at different temperatures, so the vapour above the liquid is richer in the volatile ones. Take vapour and you shift the composition of what stays behind and of what goes in. Pure refrigerants can be charged either way; blends cannot.",
    },
    {
      q: "A slug of liquid refrigerant reaches the cylinder of a running reciprocating compressor. What is the immediate mechanical consequence?",
      options: [
        "The compressor stalls and the overload trips harmlessly",
        "The liquid cannot be compressed, so the pressure spikes and breaks valve reeds, the valve plate or a connecting rod",
        "The liquid flashes to vapour and passes through with no effect",
        "The discharge temperature rises slowly over several hours",
      ],
      answer: 1,
      explain: "Liquid is essentially incompressible. The piston meets a volume it cannot reduce, and the shock load goes into whatever is weakest — usually the valve reeds and plate. Separately, the liquid strips the oil film off the bearings, so even a survivor is then damaged by poor lubrication.",
    },
    {
      q: "A condensing unit has a base charge of 5.4 kg for the first 6 m of pipe, and the manufacturer specifies 28 g per extra metre. The installed run is 19 m. What is the total charge?",
      options: ["5.76 kg", "5.93 kg", "6.13 kg", "6.53 kg"],
      answer: 0,
      explain: "Extra pipe = 19 − 6 = 13 m. Additional charge = 13 x 28 = 364 g = 0.364 kg. Total = 5.4 + 0.364 = 5.76 kg. The tempting wrong answer is 5.93 kg, which comes from applying 28 g/m to the full 19 m instead of only the length beyond the base run.",
    },
  ],
},

/* ------------------------------------------------------------------ 7 */
{
  id: "functional-safety-tests",
  title: "Functional testing of safety devices, and the electrical verification tests",
  minutes: 13,
  simple:
    "Two of the four mandatory tests are about protection. One proves the pressure and oil switches really do stop the machine when things go wrong. The other proves the wiring is safe: earth connected, insulation good, wires the right way round, and the safety switch works.",
  refs: REFS_ELEC,
  content: `Two of the four mandatory tests exist to prove the plant can protect itself and cannot hurt anybody. They are the two most often skimped, because neither one makes the coolroom colder.

## Functional testing of safety switching devices

A safety switching device is any device whose job is to stop the plant, or stop part of it, when a measured condition goes outside safe limits. Fitting one is not the same as proving it works. The mandatory test is a **functional test**: each device is made to operate, and you observe the plant actually shut down.

| Device | What it protects against | How it is functionally tested |
|---|---|---|
| High-pressure cut-out | Over-pressure from condenser fouling, fan failure, blocked airflow or a closed valve | Wind the setting down onto the running head pressure until it trips, or block the condenser under control, then restore the setting and verify the trip point |
| Low-pressure cut-out | Loss of charge, blocked liquid line, running into a deep vacuum | Slowly close the liquid-line valve, or wind the setting up onto running suction, until it trips |
| Oil differential pressure switch | Loss of lubrication | Simulate loss of oil differential by the manufacturer's method, and confirm the timing element and lockout behave as specified |
| Discharge temperature limiter | Overheated discharge gas cooking the oil | By the manufacturer's method, usually simulation at the sensor |
| Motor overloads and thermistor protection modules | Winding overheating and locked rotor | Simulate by the module's test function, or by interrupting the sensor circuit |
| Pressure-relief device (relief valve or burst disc) | Catastrophic over-pressure | Not tripped on site. Verify identification, set pressure, size, discharge routing and in-date certification |
| Refrigerant gas detection and alarms, where fitted | Charge released into an occupied space or plant room | Apply test gas at the sensor and confirm alarm, ventilation start and shutdown as designed |
| Emergency stop and isolation | People | Operate it and confirm everything it should kill actually stops |

Three points that separate a real test from a tick in a box:

- **Record the value at which it tripped, not just "OK".** A high-pressure cut-out that trips 300 kPa above its nameplate setting is a fault, and only a recorded number reveals it.
- **Restore every setting you changed.** A cut-out left wound down is a nuisance trip waiting to happen and, worse, is evidence you did not finish.
- **Verify the reset behaviour.** Manual reset devices must stay locked out until a person resets them. An auto-reset device where the design called for manual reset is a defect, however well it trips.

>! Winding a high-pressure cut-out setting down onto a running head pressure is a live, pressurised test. Know where the relief device discharges, keep clear of the condenser and receiver, and never defeat a cut-out to "see how high it goes".

## The electrical verification tests

These come from AS/NZS 3000 Section 8, and they are done in a defined order because each one depends on the ones before it. Most are **dead** tests carried out before the installation is energised.

1. **Visual inspection** — the right equipment, correctly selected, correctly installed, undamaged, correctly identified and labelled, enclosures closed, glands and terminations sound.
2. **Continuity of the earthing system** — every exposed conductive part is connected back to the main earthing terminal by a conductor of low enough resistance. This includes protective earthing conductors, bonding conductors and the earthing of the plant frame.
3. **Insulation resistance** — measured with a 500 V d.c. insulation tester between live conductors and earth. The AS/NZS 3000 minimum acceptance value is **1 MΩ**.
4. **Polarity** — every switch, circuit breaker, fuse and control device is in the **active** conductor, and every socket-outlet and lampholder is connected the right way round.
5. **Correct circuit connections** — the circuits are connected as the drawings say, phase sequence is correct, and neutrals belong to the circuits they are labelled for.
6. **Verification of operation** — with the supply on: supply voltage, phase rotation, and the operation of every RCD, tested with an RCD tester for trip current and trip time.
7. **Earth fault-loop impedance**, where the installation design requires it, to confirm the protective device will operate fast enough on a fault.

### The values you should be able to state

- **Insulation resistance, AS/NZS 3000: minimum 1 MΩ, tested at 500 V d.c.**
- **Insulation resistance, AS/NZS 3760, for a flexible-cord connected appliance: minimum 1 MΩ**, with the earth continuity resistance of a Class I appliance not exceeding **1 Ω** from the earth pin to accessible conductive parts.
- **Earthing conductor resistance, AS/NZS 3000: not exceeding 0.5 Ω** for the consumer's earthing conductor and protective earthing conductors.
- **The one insulation-resistance exemption in Section 8**: where connected equipment — typically electronic controls, variable-speed drives, surge protection or electronic ballasts — would be damaged by the 500 V d.c. test, that equipment may be disconnected and the rest of the circuit tested; where it cannot be disconnected, the standard permits a **leakage-current measurement** to be substituted for the insulation resistance test on that part.

Every one of these values comes from a standard that gets revised. State the value **and** name the standard, and work to the current edition.

## Why frame-to-earth-pin resistance must be low

If a live conductor touches the frame of a condensing unit, the fault current must be large enough to operate the circuit protection **immediately**. Fault current is governed by the impedance of the loop it must travel, and the protective earthing conductor is part of that loop. A high-resistance earth path limits the fault current, so the fuse or breaker takes a long time to operate — or never operates. In the meantime the frame sits at a dangerous voltage relative to earth, and anyone touching it becomes a parallel path to earth. A low frame-to-earth-pin resistance guarantees a large fault current, a fast disconnection, and a frame that never rises far above earth potential in the moments before the protection clears.

!FIG[ladder-rung]

## Before any of it: de-energise and prove it

AS/NZS 4836 requires that work be treated as live until it has been proved dead, and the electrical safety regulations require that testing on or near energised parts is only done when there is no reasonable alternative, with a risk assessment and controls in place. The steps that prove a system de-energised:

1. Identify the correct isolation point for the circuit and the equipment.
2. Open the isolator and lock it off with a personal lock and a danger tag.
3. **Prove the tester works** on a known live source or a proving unit.
4. **Test the circuit** at the point of work — between all conductors and between each conductor and earth.
5. **Prove the tester again** on the known source, to show it did not fail between the first two steps.
6. Where required, apply earths, and only then begin work.

Steps 3 and 5 are the ones people skip, and they are the ones that make the test mean anything. A tester that failed silently reads zero volts on everything.

### Written practice 1

**A packaged rooftop unit has just had its compressor contactor replaced. Name the mandatory tests you must complete on that circuit before returning the unit to service, and state the acceptance value for each where one applies.**

>? **Model answer.**
>?
>? 1. **Visual inspection** — the correct contactor, correctly rated, correctly installed, terminations tight, no damage, enclosure secure and labelled.
>? 2. **Continuity of the earthing system** — confirm the protective earthing conductor and any bonding to the frame are intact. Acceptance: earthing conductor resistance not exceeding **0.5 Ω** (AS/NZS 3000).
>? 3. **Insulation resistance** — tested at **500 V d.c.**, minimum **1 MΩ** between live conductors and earth (AS/NZS 3000). Electronic components that would be damaged must be disconnected first, or a leakage-current test substituted.
>? 4. **Polarity and correct circuit connections** — switching in the active, connections as per the diagram, correct phase sequence.
>? 5. **Verification of operation** — supply voltage, phase rotation, and RCD operation where an RCD protects the circuit.
>?
>? Work to the current edition of AS/NZS 3000; the values above are the ones it presently states.

### Written practice 2

**A refrigeration technician is asked why the resistance between the frame of a condensing unit and the earth pin of its supply plug must be very low. Explain, and state the value AS/NZS 3760 applies to a flexible-cord connected appliance.**

>? **Model answer.** If a live conductor contacts the frame, the fault current returns through the protective earthing conductor. The size of that fault current is set by the impedance of the fault loop, and the earth conductor is part of it. A low resistance means a large fault current, which operates the fuse, circuit breaker or RCD almost immediately and disconnects the supply.
>?
>? A high resistance limits the fault current, so the protective device operates slowly or not at all. During that time the frame sits at a dangerous voltage relative to earth, and anyone touching it provides a parallel path to earth through their body. A low earth resistance also keeps the touch voltage on the frame low in the instant before the protection clears.
>?
>? **AS/NZS 3760** requires the earth resistance of a Class I flexible-cord connected appliance, measured from the earth pin to accessible conductive parts, to be **not more than 1 Ω**, and the insulation resistance to be **not less than 1 MΩ**. Work to the current edition.

### Written practice 3

**AS/NZS 3000 Section 8 allows one exemption from the insulation resistance test. Describe it, explain why it exists, and state what is done instead.**

>? **Model answer.** The exemption applies where connected equipment would be **damaged by the 500 V d.c. test voltage** — typically electronic controls, variable-speed drives, electronic ballasts, surge protection devices and similar solid-state equipment. Such devices contain components that break down well below 500 V d.c. and would be destroyed by the test.
>?
>? Where the equipment can be disconnected, it is disconnected and the remainder of the circuit is tested normally. Where it cannot practically be disconnected, the standard permits a **measurement of leakage current** to be made in place of the insulation resistance test on that part of the installation, with the measured leakage assessed against the limit the standard sets.
>?
>? The exemption exists because the purpose of the test is to prove the insulation of the *installation*, not to destroy the equipment connected to it. Confirm the present wording and limits in the current edition of AS/NZS 3000.

## What to remember

- Every safety switching device must be made to operate, and the trip value recorded — then every setting you changed must be restored.
- Relief devices are verified by identification, setting, sizing, discharge routing and certification, not by tripping them.
- Section 8 order: inspect, earth continuity, insulation resistance, polarity, correct connections, then energised verification and RCD test.
- 1 MΩ at 500 V d.c. (AS/NZS 3000); 1 MΩ and 1 Ω earth resistance for a flexible-cord appliance (AS/NZS 3760); 0.5 Ω for earthing conductors.
- Prove dead means: prove the tester, test the circuit, prove the tester again.`,
  quiz: [
    {
      q: "What is the minimum insulation resistance and the test voltage required by AS/NZS 3000?",
      options: [
        "0.5 MΩ at 250 V d.c.",
        "1 MΩ at 500 V d.c.",
        "1 MΩ at 1 000 V d.c.",
        "10 MΩ at 500 V d.c.",
      ],
      answer: 1,
      explain: "1 MΩ measured at 500 V d.c. is the acceptance value. 250 V is used on some ELV circuits and 1 000 V on higher-voltage installations, and 10 MΩ is a figure some equipment makers prefer, but the standard's minimum is 1 MΩ. Always confirm against the current edition.",
    },
    {
      q: "Which insulation-resistance exemption does AS/NZS 3000 Section 8 allow?",
      options: [
        "Circuits protected by an RCD may be omitted",
        "Equipment that would be damaged by the 500 V d.c. test may be disconnected, or a leakage-current measurement substituted",
        "Lighting circuits under 10 A may be omitted",
        "Circuits already tested by the manufacturer may be omitted",
      ],
      answer: 1,
      explain: "The exemption exists to protect electronic equipment — drives, controls, surge protection — that would be destroyed by 500 V d.c. Disconnect it and test the rest, or where that is impractical, measure leakage current instead. RCD protection and circuit rating have nothing to do with it.",
    },
    {
      q: "Why must the resistance between an appliance frame and its earth pin be very low?",
      options: [
        "To reduce the appliance's running current",
        "So that a live-to-frame fault draws enough current to operate the protective device immediately and keeps the touch voltage low",
        "To prevent static build-up on the casing",
        "To satisfy the polarity test",
      ],
      answer: 1,
      explain: "The earth conductor is part of the fault loop. Low resistance means high fault current, which means fast disconnection by the fuse, breaker or RCD, and a frame that never sits at a dangerous voltage for long. A high-resistance earth is worse than no earth in some ways, because it looks connected.",
    },
    {
      q: "Which of these correctly describes proving a circuit de-energised?",
      options: [
        "Test the circuit, then test a known live source",
        "Prove the tester on a known source, test the circuit, then prove the tester again",
        "Open the isolator and observe that the equipment has stopped",
        "Test the circuit with a neon screwdriver at two points",
      ],
      answer: 1,
      explain: "The tester must be proved before and after. If it failed silently between the two, you would have read zero volts on a live circuit and had no way to know. Watching the plant stop proves nothing about which conductors are still live, and a neon screwdriver is not an acceptable test instrument.",
    },
  ],
},

/* ------------------------------------------------------------------ 8 */
{
  id: "commissioning-checks",
  title: "Commissioning checks, performance verification and records",
  minutes: 12,
  simple:
    "Once the system is safe and charged you prove it actually does the job: the right temperatures, the right pressures, the right currents and the right air and water flows. Then you write it all down, because the numbers you record today are what the next technician compares against in three years.",
  refs: REFS_COMM,
  content: `The mandatory tests proved the system is safe. Commissioning proves it works, and produces the baseline record that every future service call will be measured against.

## The pre-start walk

Before the plant runs for the first time:

- Charge weighed in and recorded, refrigerant type confirmed against the nameplate.
- All service and isolating valves in their correct running positions — the number of first-start failures caused by a closed liquid-line valve is embarrassing.
- Crankcase heaters energised for the manufacturer's stated period, typically several hours, so liquid refrigerant is driven out of the oil before the compressor turns.
- Oil level at the correct mark in the sight glass, with the plant stopped.
- Fan and pump rotation confirmed by momentary start, before continuous running.
- Belt tension, coupling alignment, guards fitted, drain traps filled and running the right way.
- Control set points entered and recorded, including safety cut-out settings.
- Water side proved: strainers clean, air purged, flow established, tower basin filled and treated.

## The running checks and the numbers behind them

| Check | Instrument | What good looks like | What a bad reading tells you |
|---|---|---|---|
| Suction pressure and saturation temperature | Manifold gauge or digital gauges | Consistent with the design evaporating temperature and the room load | Low = starved coil, restriction, undercharge, low load; high = overfeeding, high load, compressor not pumping |
| Discharge pressure and condensing temperature | Manifold gauge | Design condensing temperature above the entering air or water | High = dirty condenser, fan failure, non-condensables, overcharge; low = cold ambient, head-pressure control not set |
| Evaporator superheat | Clamp thermometer plus suction gauge at the coil outlet | Within the range the metering device and application require | Too high = starved coil or undercharge; too low = flooding, bulb problem, risk to the compressor |
| Liquid subcooling | Clamp thermometer plus liquid gauge at the condenser outlet | Enough to guarantee a solid liquid column to the metering device | Low = undercharge or liquid-line restriction upstream; high = overcharge or restricted flow out of the condenser |
| Evaporator TD (air-on minus saturated suction) | Thermometer and gauge | Matches the coil selection for the humidity required | Large TD = low airflow or starved coil; small TD = high airflow or overfed coil |
| Running current, each phase | Clamp meter | At or below nameplate FLA, balanced across phases | High = overload or supply problem; imbalance over a few per cent = supply or winding fault |
| Supply voltage under load, phase to phase | Multimeter | Within the equipment's stated tolerance | Low volts at load = undersized supply cable or loose termination |
| Airflow across the coil | Anemometer or capture hood | Design litres per second | See the airflow lesson |
| Water flow and temperature rise | Flow meter, thermometers, or pressure drop across the vessel | Design flow and design rise | Low flow = fouled tubes, closed valve, air locked, pump problem |
| Defrost operation | Timer or controller, thermometers | Initiates, terminates and drains correctly, with the fan delay working | Ice building at the coil face or a flooded drain pan |
| Safety controls | Recorded from the functional tests | Trips at the recorded value, resets as designed | See the safety-device lesson |

!SIM[Compare a healthy machine with a dirty condenser](fault=dirtyCondenser)

## Balancing, not just measuring

On an air-conditioning installation, commissioning includes balancing: adjusting dampers and fan speeds so each branch delivers its design air quantity, then re-measuring the total. The order matters — set the total airflow first with the main damper or fan speed, then proportion the branches, then re-check the total, because every branch adjustment shifts the others.

## The records

AS/NZS 5149.2 requires documentation to be provided with the system, and the Refrigerant Handling Code of Practice requires charging records. Between them, a proper handover pack contains:

- **System identification** — manufacturer, model, serial numbers, location, duty.
- **Refrigerant details** — type, total mass charged, GWP, and the equivalent carbon dioxide of the charge where required. Recorded on the system label as well as in the paperwork. See !CITE[cop:2:6.7].
- **Pressure test records** — medium, test pressure, ambient temperature, duration, result, who performed it.
- **Evacuation record** — method used, vacuum achieved, standing-test result.
- **Electrical test results** — the Section 8 values, signed.
- **Safety device schedule** — every device, its set point, the value at which it tripped, its reset type.
- **Commissioning data sheet** — every running reading above, with the ambient conditions they were taken in. Readings without their ambient conditions are almost useless later.
- **As-installed drawings**, control set points, and the operating and maintenance manuals.
- **Owner's instructions** — how to operate it, what to watch, who to call, and the owner's own legal obligations for leak inspection and record-keeping.
- **Licence details** — the ARCtick licence number of the person who handled the refrigerant.

>! Do not hand over a system with a safety cut-out still wound off its correct setting from testing, or with a service valve back-seated so a gauge port is dead. Both are common, both are discovered by the next technician at 2 am, and both are your name on the commissioning sheet.

## Why the baseline record matters more than any single reading

Three years later, someone will stand at this plant with a complaint about capacity. The only way to know whether a 62 °C condensing temperature is a fault or normal for this machine on a 38 °C day is to have the commissioning sheet that says it ran at 55 °C condensing on a 31 °C day. Commissioning data is a **fingerprint**. Record ambient conditions, load conditions and the readings together, or the numbers mean nothing.

### Written practice 1

**List five running checks you would carry out during the commissioning of a new commercial refrigeration system, and state what each one tells you.**

>? **Model answer.**
>?
>? 1. **Evaporator superheat** — confirms the metering device is feeding the coil correctly; too high starves the coil and overheats the compressor, too low risks liquid returning to the compressor.
>? 2. **Liquid subcooling at the condenser outlet** — confirms there is a solid column of liquid reaching the metering device and gives an indication of charge; low subcooling suggests undercharge or a restriction.
>? 3. **Suction and discharge pressures, converted to saturated temperatures** — confirms the system is evaporating and condensing at its design temperatures for the load and ambient present.
>? 4. **Running current on each phase, against nameplate FLA** — confirms the compressor and motors are not overloaded and that the supply is balanced.
>? 5. **Airflow across the evaporator, in litres per second** — confirms the coil is getting the design air quantity, which sets the TD and the humidity in the space.
>?
>? Also acceptable: evaporator TD, condenser water flow and temperature rise, supply voltage under load, defrost initiation and termination, and control set points.

### Written practice 2

**Explain why the ambient conditions must be recorded alongside every commissioning reading, and give an example of a wrong conclusion that could be drawn without them.**

>? **Model answer.** Almost every reading a refrigeration system produces depends on the conditions it is working in. Condensing pressure depends on the entering air or water temperature. Suction pressure and superheat depend on the load in the space and on the temperature of the product. Running current depends on both. A reading without its conditions is a number with no reference.
>?
>? Example: a commissioning sheet records a condensing temperature of 55 °C. Three years later a technician measures 62 °C and calls the condenser dirty. In fact the commissioning reading was taken at 31 °C ambient and today it is 38 °C — a 7 K higher ambient produces roughly a 7 K higher condensing temperature, so the machine is behaving exactly as it did on day one. Without the ambient recorded, the technician cleans a clean condenser, charges for it, and never finds the real complaint.

### Written practice 3

**A newly installed system has passed all four mandatory tests. State four items of documentation that must be handed to the owner at completion, and explain why each matters.**

>? **Model answer.**
>?
>? 1. **Refrigerant charging record and system label** — type of refrigerant, total mass charged and its GWP. This is required by the Code, it fixes the owner's leak-inspection obligations, and it tells the next technician what is in the system before they connect gauges.
>? 2. **Pressure test and evacuation records** — medium, test pressure, ambient, duration and result, plus the vacuum achieved and the standing-test result. These are the evidence that the mandatory tests were done, and the reference point if the system later loses charge.
>? 3. **Electrical verification test results** — the AS/NZS 3000 Section 8 values, signed. Proves the installation was safe to energise and is the baseline for future in-service testing.
>? 4. **Commissioning data sheet with ambient conditions** — the fingerprint of how the plant ran when new, without which no future performance complaint can be judged.
>?
>? Also expected: the safety device schedule with set points and trip values, as-installed drawings and control set points, operating and maintenance manuals, owner's operating instructions, and the licence details of the person who handled the refrigerant.

## On the job

- Crankcase heaters on for the stated period before the first start, every time.
- Confirm rotation on a momentary start before you let anything run.
- Take every reading with its ambient and load conditions written next to it.
- Restore every setting you altered during safety-device testing, and confirm valve positions before you leave.
- The handover pack is part of the job, not paperwork after the job.`,
  quiz: [
    {
      q: "Why must crankcase heaters be energised for the manufacturer's stated period before a compressor is first started?",
      options: [
        "To warm the oil so it flows more easily through the pump",
        "To drive liquid refrigerant out of the oil so the compressor does not start on a foaming, diluted sump",
        "To prevent condensation forming on the terminal box",
        "To bring the system up to its design condensing temperature",
      ],
      answer: 1,
      explain: "Refrigerant migrates to and dissolves in cold oil. On start-up the sump pressure drops, the dissolved refrigerant boils out violently and the oil foams, so the pump delivers gas instead of oil and the bearings run dry. The heater drives that refrigerant off beforehand. Oil viscosity is a side benefit, not the reason.",
    },
    {
      q: "A commissioning sheet records condensing temperature but not ambient temperature. Why is that record nearly worthless?",
      options: [
        "Because condensing temperature is not a useful measurement",
        "Because condensing temperature depends directly on the entering air or water temperature, so without it there is nothing to compare a future reading against",
        "Because the standard requires ambient to be recorded on every page",
        "Because condensing temperature changes with the refrigerant type",
      ],
      answer: 1,
      explain: "An air-cooled condenser sits a fairly fixed number of kelvin above the air entering it. A 62 °C reading on a 38 °C day and a 55 °C reading on a 31 °C day describe the same healthy machine. Strip the ambient out and a future technician cannot tell a fault from a hot afternoon.",
    },
    {
      q: "When balancing an air-conditioning system, what is the correct order of work?",
      options: [
        "Set each branch to design first, then adjust the total",
        "Set the total airflow first, then proportion the branches, then re-check the total",
        "Adjust the fan speed last, after all dampers are locked",
        "Measure only the total, since branch flows self-balance",
      ],
      answer: 1,
      explain: "Branches interact — closing one damper pushes air into the others. Setting the total first gives you the quantity to divide up; proportioning then distributes it; and the total must be re-checked because the branch adjustments change the system resistance. Starting with branches means doing the whole job twice.",
    },
    {
      q: "Which of these belongs in the handover documentation as a legal record rather than as good practice?",
      options: [
        "The brand of bubble fluid used for leak testing",
        "The type and total mass of refrigerant charged, recorded on the system label and in the charging record",
        "The name of the crane hire company",
        "The colour code of the insulation",
      ],
      answer: 1,
      explain: "The Code requires charging records, and the refrigerant type, quantity and GWP on the system determine the owner's ongoing leak-inspection and record-keeping obligations. It is also the first thing the next technician needs to know before opening the system.",
    },
  ],
},

/* ------------------------------------------------------------------ 9 */
{
  id: "airflow-instruments",
  title: "Measuring airflow: the instruments and how to use them",
  minutes: 12,
  simple:
    "Air is invisible, so you need an instrument to know how much of it is moving. A vane anemometer counts a little propeller turning, a hot-wire probe measures how fast air cools a heated wire, and a capture hood catches everything coming out of a grille and reads the total directly.",
  refs: REFS_AIR,
  content: `Half the "not cooling" calls in air conditioning are airflow problems, and every commissioning sheet has an airflow line on it. Yet airflow is the reading technicians are least confident about, because you cannot see it and the instruments each have a job they are good at and jobs they are hopeless at.

## The instruments

| Instrument | What it measures | Best used for | Watch out for |
|---|---|---|---|
| Rotating-vane anemometer | Air velocity, from the speed of a small propeller | Grilles, coil faces, open duct ends, larger areas at moderate velocity | Poor at low velocity, where friction stalls the vane; the vane must be square to the flow; needs an effective-area correction on a grille |
| Thermal (hot-wire) anemometer | Air velocity, from the cooling effect of the air on a heated element | Low velocities, duct traverses through a small test hole, tight spaces | Very directional — the probe orientation mark must face the flow; dirt on the element shifts calibration |
| Capture hood (balometer) | Volume flow directly, in litres per second | Supply and return grilles and diffusers, quickly and repeatably | The hood must seal to the ceiling or wall; it adds resistance, so back-pressure compensation must be used; too large a flow for the hood gives a poor reading |
| Pitot-static tube with a manometer | Velocity pressure, converted to velocity | Duct traverses, high velocities, dirty or hot airstreams where an electronic probe would not survive | Needs a proper traverse and a straight run of duct; the pressure differences are small, so the manometer must be sensitive and levelled |
| Inclined or digital manometer | Static pressure and pressure difference | Pressure drop across a filter, coil or fan; total static pressure for fan curve work | Tapping location and tube condition matter; a kinked or wet tube reads nonsense |
| Fan-curve method | Volume flow, inferred | A quick cross-check when the fan curve and the measured total static pressure are both known | Only as good as the curve, the speed and the static pressure measurement |

## The relationship everything rests on

Volume flow is area times velocity:

**Q = A x v**

- Q is the volume flow in cubic metres per second (multiply by 1 000 for litres per second).
- A is the free area the air passes through, in square metres.
- v is the average velocity, in metres per second.

Two traps live in that little formula. First, **A is the free area, not the outside dimensions** — a grille with bars has an effective area well below its face area, and the manufacturer's free-area factor must be applied. Second, **v must be the average velocity**, and velocity is never uniform across a duct or a coil face. It is fastest in the middle and near zero at the wall.

### Worked example 1 — coil face by traverse

*An evaporator coil face measures 1.20 m wide by 0.55 m high. Nine readings taken evenly across the face with a rotating-vane anemometer give, in metres per second: 1.8, 2.1, 2.3, 2.2, 2.4, 2.2, 2.0, 1.9, 1.7.*

1. Average velocity = (1.8 + 2.1 + 2.3 + 2.2 + 2.4 + 2.2 + 2.0 + 1.9 + 1.7) / 9 = 18.6 / 9 = **2.07 m/s**.
2. Face area = 1.20 x 0.55 = **0.66 m²**.
3. Q = 0.66 x 2.07 = **1.366 m³/s** = **1 366 L/s**.

Average the *velocities* and then multiply by the area. Do not average nine separate flow calculations, and never take one reading in the middle and call it the average — a single centre reading on this coil would have given 2.4 m/s and an answer 16% high.

### Worked example 2 — a grille with a free-area factor

*A supply grille is 600 mm x 300 mm with a manufacturer's free-area factor of 0.72. The average measured velocity at the face is 3.4 m/s.*

1. Gross area = 0.600 x 0.300 = **0.18 m²**.
2. Free area = 0.18 x 0.72 = **0.1296 m²**.
3. Q = 0.1296 x 3.4 = **0.4406 m³/s** = **441 L/s**.

Ignoring the free-area factor would have given 612 L/s — nearly 40% too high, and enough to make a badly performing system look correct on paper.

### Worked example 3 — velocity from velocity pressure

*A pitot-static tube in a duct reads a velocity pressure of 42 Pa. Standard air density is taken as 1.2 kg/m³.*

Velocity pressure and velocity are related by pv = 0.5 x ρ x v², so:

v = square root of (2 x pv / ρ) = square root of (2 x 42 / 1.2) = square root of 70 = **8.37 m/s**.

If the duct is 400 mm x 250 mm, then A = 0.4 x 0.25 = 0.10 m² and Q = 0.10 x 8.37 = 0.837 m³/s = **837 L/s** — provided that 8.37 m/s is the *average* from a proper traverse and not a single centreline reading.

## Doing a traverse properly

- Choose a measuring position in a straight length of duct, well downstream of any bend, damper or fitting — the usual guidance is several duct diameters downstream and at least one upstream.
- Divide the duct into equal areas and take one reading at the centre of each. Rectangular ducts are divided into a grid; round ducts use readings at set radii on two or three diameters.
- Keep the probe square to the flow, and the pitot tube nose facing directly into it. A few degrees off costs accuracy.
- Take enough points. Nine to sixteen on a rectangular duct is typical; three points is not a traverse.
- Record the readings, not just the average, so someone can see the profile later.

## Common errors that make an airflow reading useless

1. Holding a vane anemometer at a slight angle, so it under-reads.
2. Using the grille's outside dimensions instead of its free area.
3. Taking one reading in the middle of a coil and treating it as the average.
4. Using a capture hood without back-pressure compensation on a high-flow diffuser, so the hood's own resistance reduces the flow it is trying to measure.
5. Measuring downstream of a partly closed damper and reporting the result as the branch's capability.
6. Forgetting that a dirty filter and a clean filter give different answers — record which one was fitted.

### Written practice 1

**Name three instruments used to measure airflow in an air-conditioning system, state what each one actually measures, and give one situation where each is the best choice.**

>? **Model answer.**
>?
>? 1. **Rotating-vane anemometer** — measures air *velocity* from the rotational speed of a small propeller. Best for measuring across a coil face or an open duct end at moderate velocity, where there is room for the vane head.
>? 2. **Thermal (hot-wire) anemometer** — measures air *velocity* from the rate at which air cools a heated element. Best for low velocities and for duct traverses through a small drilled test hole, where a vane head will not fit.
>? 3. **Capture hood (balometer)** — measures *volume flow* directly in litres per second by capturing everything leaving a diffuser or entering a return grille. Best for balancing supply and return outlets quickly and repeatably.
>?
>? A fourth: the **pitot-static tube with a manometer**, which measures *velocity pressure*, from which velocity is calculated. It is the best choice for duct traverses at high velocity and in dirty or hot airstreams that would damage an electronic probe.

### Written practice 2

**An evaporator coil face is 1.5 m wide by 0.6 m high. A traverse gives average face velocity of 2.4 m/s. Calculate the airflow in litres per second, showing your workings. The design airflow is 2 400 L/s — comment on the result.**

>? **Model answer.**
>?
>? - Face area A = 1.5 x 0.6 = **0.90 m²**.
>? - Q = A x v = 0.90 x 2.4 = **2.16 m³/s**.
>? - In litres per second: 2.16 x 1 000 = **2 160 L/s**.
>?
>? **Comment.** The measured flow is 2 160 L/s against a design of 2 400 L/s — a shortfall of 240 L/s, or 10%. That is outside the tolerance most specifications allow and must be investigated before the system is accepted. Likely causes: a dirty or incorrectly fitted filter, a partly closed damper, incorrect fan speed or pulley setting, a fan running in reverse rotation, excess system static pressure from ductwork not as designed, or a blocked coil face. Reduced airflow lowers the coil temperature, increases the TD and increases the risk of coil icing and of liquid returning to the compressor.

### Written practice 3

**Explain why a single velocity reading taken at the centre of a duct will overstate the airflow, and describe how a traverse avoids the problem.**

>? **Model answer.** Air in a duct does not move at a uniform velocity. Friction at the duct wall slows the air near the surface, so the velocity profile is highest at the centre of the duct and falls away toward the walls, approaching zero at the wall itself. A single centreline reading therefore captures the fastest air in the duct, and multiplying it by the full duct area assumes every part of the cross-section is moving that fast. The result is always high — often by 10 to 20%.
>?
>? A traverse avoids this by dividing the duct cross-section into a number of **equal areas** and taking one reading at the centre of each. Because the areas are equal, the arithmetic mean of the readings is a genuine area-weighted average velocity for the whole cross-section. That average is then multiplied by the total duct area to give the volume flow. The traverse must be taken in a straight section of duct, several duct diameters downstream of any bend, damper or fitting, so the profile has settled and is not distorted by swirl.

## What to remember

- Q = A x v, with A as the *free* area and v as the *average* velocity.
- Vane anemometer and hot-wire measure velocity; a capture hood measures volume flow directly; a pitot-static tube measures velocity pressure.
- Traverse by equal areas and average the velocities, not the flows.
- Apply the manufacturer's free-area factor to any grille or diffuser.
- Record the conditions: filter state, damper positions and fan speed, or the reading cannot be repeated.`,
  quiz: [
    {
      q: "Which instrument reads volume flow in litres per second directly, without needing an area calculation?",
      options: [
        "Rotating-vane anemometer",
        "Thermal (hot-wire) anemometer",
        "Capture hood (balometer)",
        "Pitot-static tube and manometer",
      ],
      answer: 2,
      explain: "A capture hood encloses the whole diffuser and measures everything passing through it, so it reports volume flow directly. The other three measure velocity or velocity pressure at a point, which must then be averaged over a traverse and multiplied by the free area.",
    },
    {
      q: "A grille measures 500 mm x 250 mm with a free-area factor of 0.65. Average face velocity is 3.0 m/s. What is the airflow?",
      options: ["244 L/s", "375 L/s", "188 L/s", "577 L/s"],
      answer: 0,
      explain: "Gross area = 0.5 x 0.25 = 0.125 m². Free area = 0.125 x 0.65 = 0.08125 m². Q = 0.08125 x 3.0 = 0.24375 m³/s = 244 L/s. Skipping the free-area factor gives 375 L/s — the distractor that catches most people, and a 54% overstatement of the real flow.",
    },
    {
      q: "Why must a duct traverse divide the cross-section into equal areas?",
      options: [
        "So the readings can be taken in a convenient grid pattern",
        "So the simple average of the point velocities is a genuine area-weighted average for the whole duct",
        "Because the standard specifies a fixed number of points",
        "To keep the probe clear of the duct walls",
      ],
      answer: 1,
      explain: "Each reading represents its own equal slice of the cross-section, so every reading carries equal weight and the arithmetic mean is the true average velocity. Unequal areas would need each reading weighted by its area, which nobody does correctly under site conditions.",
    },
    {
      q: "A thermal (hot-wire) anemometer is preferred over a rotating-vane anemometer when:",
      options: [
        "The airstream is very dirty",
        "Velocities are low and the probe must pass through a small drilled test hole",
        "The duct is very large",
        "A direct volume flow reading is needed",
      ],
      answer: 1,
      explain: "A vane needs enough velocity to overcome bearing friction and enough room for its head, so it is poor at low velocity and cannot enter a small test hole. A thermal probe is slim and reads accurately at low velocity — but it is very directional and its element is easily fouled by a dirty airstream.",
    },
  ],
},

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
