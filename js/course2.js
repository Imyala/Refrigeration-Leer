/* =========================================================================
   Course content, modules 6–10: system types, electrical, the diagnostic
   method, repair procedures and safety. Same format as course1.js.
   ========================================================================= */
(function (root) {
  "use strict";

  const MODULES = [

  /* ======================================================================
     Module 6 — System types
     ====================================================================== */
  {
    id: "system-types",
    title: "6 · System types in the field",
    blurb: "The same cycle wears many uniforms: split air conditioners and heat pumps, cool rooms and freezers, supermarket racks and chillers.",
    lessons: [
      {
        id: "split-ac-heat-pumps",
        title: "Split air conditioners and heat pumps",
        minutes: 7,
        simple: "A heat pump is an air conditioner that can run backwards. A special four-way valve flips the flow, so the indoor coil switches from soaking heat up (cooling) to dumping heat in (heating). Even cold winter air still holds heat worth harvesting — that's why heat pumps beat plain electric heaters. In winter the outdoor coil frosts up, so the machine briefly runs backwards to melt itself clean.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — domestic and commercial air conditioning; heat pump systems",
        ],
        content: `
The wall split is the highest-volume refrigeration machine on earth, and the
reverse-cycle version — the heat pump — is the same hardware taught one new
trick.

## The split layout

- **Indoor unit**: evaporator coil, fan, filters, controls.
- **Outdoor unit**: compressor, condenser coil, fan, and (on inverters) the drive electronics.
- Between them: the **liquid line** (small) and the **suction/gas line** (large, insulated), plus interconnecting wiring.

Modern splits are inverter-driven (variable compressor speed), use R410A or
increasingly R32 (A2L — mind the ignition rules), and meter with an EEV in
the outdoor unit.

## The reversing valve: heating mode

A **four-way reversing valve** on the discharge line lets the system swap the
roles of its two coils:

- **Cooling**: indoor coil = evaporator, outdoor coil = condenser.
- **Heating**: the valve redirects discharge gas to the **indoor** coil, which becomes the condenser and heats the room; the **outdoor** coil becomes the evaporator, absorbing heat from outside air — yes, even cold air holds heat.

Because each coil must be fed from either direction, heat pumps use paired
metering devices with check valves (or a single bi-flow EEV), and an
**accumulator** protects the compressor during changeovers.

!FIG[reversing-valve]

## Defrost

In heating mode the outdoor coil runs below ambient and below 0°C in winter —
it frosts up. The cure is a **reverse-cycle defrost**: the valve flips to
cooling for a few minutes, hot gas melts the outdoor ice (with the fans
managed so the room does not notice more than necessary), then normal heating
resumes.

>! Diagnosing a heat pump: always confirm which mode it is in before judging
> the pressures — a healthy heating-mode reading looks like a fault if your
> head is still in cooling mode. The reversing-valve solenoid and its coil
> are themselves classic failure items (stuck mid-way = hot gas bypassing,
> pressures converging, little heating or cooling).

`,
        quiz: [
          {
            q: "In heating mode, a heat pump's indoor coil acts as the…",
            options: ["evaporator", "condenser", "receiver", "accumulator"],
            answer: 1,
            explain: "The reversing valve sends discharge gas to the indoor coil, which condenses there and releases heat into the room. The outdoor coil becomes the evaporator.",
          },
          {
            q: "The component that switches a heat pump between heating and cooling is…",
            options: ["the TXV", "the four-way reversing valve", "the accumulator", "the crankcase heater"],
            answer: 1,
            explain: "The four-way valve redirects the discharge and suction connections between the two coils. Its solenoid or a stuck slide are common faults.",
          },
          {
            q: "A heat pump performs a defrost because…",
            options: [
              "the indoor coil overheats",
              "the outdoor coil runs below 0°C in heating mode and ices up",
              "the compressor needs cooling",
              "the refrigerant expires",
            ],
            answer: 1,
            explain: "In heating mode the outdoor coil is the evaporator, running below ambient. In cold weather it frosts, so the system briefly reverses to melt the ice with hot gas.",
          },
        ],
      },
      {
        id: "commercial-refrigeration",
        title: "Cool rooms, freezers, racks and chillers",
        minutes: 8,
        simple: "Same cycle, bigger jobs. A cool room is a fridge you can walk into. A freezer room needs heaters built into the coil because the room air is too cold to ever melt the frost. Supermarkets gang many compressors together in a plant room to feed all the cases. Really big buildings don't pipe refrigerant everywhere — they chill water and pump that around instead.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — commercial and industrial systems; supermarket refrigeration",
        ],
        content: `
Commercial refrigeration is where most trade work lives: keeping food cold,
around the clock, with consequences when it fails.

## Cool rooms and freezer rooms

A **condensing unit** (compressor + condenser, outside or on the roof) serves
an **evaporator unit cooler** inside an insulated box. Design points:

- **Medium temperature** (cool rooms, 0 to 5°C box): evaporator around −5 to 0°C. Off-cycle defrost is often enough — the air melts the frost while the compressor rests.
- **Low temperature** (freezers, −18 to −25°C): evaporator well below −25°C. The air can never melt frost, so **active defrost is mandatory** — electric elements in the coil, or hot-gas defrost — on a timer or demand controller, with a drain heater so the melt-water leaves before it refreezes.
- **TD selects humidity**: a small coil-to-air TD keeps produce humid; a large TD dries the air. Vegetables get small TDs, packaged goods do not care.
- **Pump-down control** is common: the thermostat closes a liquid-line solenoid, the compressor pumps the low side empty and stops on the low-pressure switch — keeping refrigerant out of the cold evaporator during the off cycle.

## Supermarket racks

A machine room runs **parallel racks**: several compressors on common suction
and discharge headers feeding dozens of display cases and rooms. Compressors
stage on and off (or one runs on a VSD) to follow the load. Expect: oil
management systems, electronic case controls and EEVs, remote air-cooled or
evaporative condensers, and increasingly **CO2 transcritical** plant in place
of the old HFC racks.

## Chillers

Above a few hundred kilowatts, buildings and processes are cooled indirectly:
the refrigeration plant chills **water or glycol**, and the secondary fluid
is pumped to where the cooling is needed. The refrigerant stays in the plant
room (screw or centrifugal compressors, shell-and-tube or plate evaporators),
which simplifies safety and lets one machine serve an entire building.

> Same cycle, every time. A CO2 rack and a bar fridge differ in pressure,
> plumbing and paperwork — but compressor, condenser, metering, evaporator
> and the PT relationship run them both.

!SIM[Run a low-temperature fluid: R404A](r=R404A)
`,
        quiz: [
          {
            q: "Freezer-room evaporators need electric or hot-gas defrost because…",
            options: [
              "the fans are too small to melt frost",
              "room air below freezing can never melt the frost during the off cycle",
              "the coils are aluminium",
              "defrost improves the COP",
            ],
            answer: 1,
            explain: "Off-cycle defrost relies on room air warming the coil above 0°C. In a −20°C freezer that never happens, so heat must be added deliberately — elements or hot gas.",
          },
          {
            q: "In a pump-down control circuit, the compressor is finally stopped by…",
            options: [
              "the room thermostat directly",
              "the low-pressure switch, after the solenoid closes and the low side is pumped out",
              "the high-pressure switch",
              "a defrost timer",
            ],
            answer: 1,
            explain: "The thermostat only closes the liquid solenoid. The compressor keeps running, empties the low side, and the falling suction pressure opens the LP switch to stop it.",
          },
          {
            q: "A chiller cools a building by…",
            options: [
              "piping refrigerant to every room",
              "chilling water or glycol which is pumped to the loads",
              "blowing cold air down risers",
              "evaporating water on the roof",
            ],
            answer: 1,
            explain: "Chillers use a secondary fluid: the refrigeration cycle stays in the plant room and chilled water carries the cooling to air handlers and fan coils.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 7 — Electrical fundamentals
     ====================================================================== */
  {
    id: "electrical",
    title: "7 · Electrical fundamentals for RAC",
    blurb: "Motors and their starting gear, the control and safety devices around them, and how to work through a ladder diagram without guessing.",
    lessons: [
      {
        id: "motors-starting",
        title: "Motors, capacitors and starting gear",
        minutes: 8,
        simple: "Single-phase motors can't start on their own — they need a capacitor (an electrical slingshot) and a relay to fire the starting winding. So when a compressor hums, strains and clicks off instead of starting, it's usually this cheap start gear that has died — not the expensive compressor. Test the capacitor before you condemn anything bigger.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — electric motors, starting components and electrical principles",
          "AS/NZS 3000 Wiring Rules (Standards Australia) — topic-level reference only; consult the current edition",
        ],
        content: `
Half of "refrigeration" faults are electrical. The compressor is a motor
first and a pump second — and single-phase motors need help to start.

## Single-phase motor basics

A single-phase motor has two windings: **run** (main) and **start**
(auxiliary). The start winding, fed through a **capacitor**, creates the
phase shift that gets the rotor turning. The common arrangements:

- **PSC (permanent split capacitor)** — a run capacitor stays in circuit all the time. Simple, common on fans and many compressors.
- **CSIR (capacitor start, induction run)** — a start capacitor and a relay drop the start winding out once up to speed.
- **CSR (capacitor start, capacitor run)** — both: strong starting torque plus running efficiency. Typical on larger single-phase compressors.

**Relays** that remove the start gear: current relays (small hermetics),
potential (voltage) relays (larger CSR motors), and solid-state PTC devices.

## Capacitors: the usual suspect

- **Run capacitors** — oil-filled, continuously rated, a few to ~60 µF.
- **Start capacitors** — electrolytic, high µF, rated for *seconds* of duty. If a start capacitor stays in circuit (welded relay), it explodes or cooks.

A compressor that **hums and trips on overload** without starting is the
classic symptom of failed start gear or a failed capacitor — check them
before condemning the compressor. Capacitors are checked with a capacitance
meter against the µF rating **after being safely discharged**.

## Three-phase

Three-phase motors generate their own rotating field: no capacitors, no
start winding, just a contactor. Two things to respect: **rotation**
(swapping two phases reverses it — scroll compressors must never run
backwards) and **phase loss/imbalance**, which cooks windings fast; larger
plant fits phase-protection relays.

## The compressor terminals: C, S, R

Hermetic compressors expose **Common, Start, Run**. With the power isolated,
winding resistance tells the story: R(C–S) + R(C–R) should equal R(S–R);
open = broken winding, and any winding to earth = burnout territory.

>! Always isolate, lock off and prove dead before touching terminals — and
> discharge capacitors with a proper resistor tool. A charged 60 µF run cap
> bites hard enough to matter.

`,
        quiz: [
          {
            q: "A single-phase compressor hums, does not start, then trips its overload. The first suspects are…",
            options: [
              "the reversing valve",
              "the start capacitor / relay and run capacitor",
              "the filter-drier",
              "low refrigerant charge",
            ],
            answer: 1,
            explain: "Hum-and-trip means the motor cannot develop starting torque — almost always failed start gear or a failed capacitor, not the windings themselves. Check the cheap parts first.",
          },
          {
            q: "The difference between a start capacitor and a run capacitor is…",
            options: [
              "there is none",
              "start caps are high-µF, seconds-rated devices removed after starting; run caps are continuously rated and stay in circuit",
              "run caps are only used on three-phase motors",
              "start caps are always smaller in µF",
            ],
            answer: 1,
            explain: "Start capacitors deliver a big kick briefly and must be switched out by the relay; run capacitors are built for continuous duty. Leaving a start cap in circuit destroys it.",
          },
          {
            q: "Three-phase compressor motors…",
            options: [
              "use the largest start capacitors",
              "need no capacitors or start winding, but rotation direction and phase loss must be respected",
              "cannot drive scroll compressors",
              "run on any two of the three phases",
            ],
            answer: 1,
            explain: "Three-phase power creates its own rotating field. But swap two phases and the motor reverses — fatal for scrolls — and running on two phases (single-phasing) burns windings.",
          },
        ],
      },
      {
        id: "controls-diagnosis",
        title: "Controls, ladder diagrams and electrical diagnosis",
        minutes: 8,
        simple: "The control circuit is a chain of gates in a row — thermostat, pressure switches, overload — and ALL must be closed before the compressor may run. A ladder diagram is just a picture of that chain. To find the broken gate, put a voltmeter across each one: a closed gate reads about zero volts; the open gate shows full voltage. One more thing for Australia: fixed wiring belongs to licensed electricians — know exactly where your part of the job ends.",
        refs: [
          "AS/NZS 3000 Wiring Rules (Standards Australia) — topic-level reference only; consult the current edition",
          "AS/NZS 4836 — Safe working on or near low-voltage electrical installations and equipment",
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — electrical components, controls and wiring",
        ],
        content: `
Around every compressor sits a ring of switches deciding when it may run.
Learn to read them on paper and interrogate them with a meter, in that order.

## The cast of controls

- **Thermostat** — the demand switch: closes on temperature rise.
- **Contactor** — the relay whose coil (fed by the controls) closes the heavy contacts feeding the compressor. Pitted or welded contacts are routine failures.
- **HP cut-out** — opens on dangerously high head pressure (dead condenser fan, blocked coil, air in system). Often a manual-reset device: if it has tripped, *find out why before resetting*.
- **LP cut-out** — opens on collapsed suction pressure (loss of charge, iced coil, closed valve); also the stop device in pump-down circuits.
- **Overloads** — thermal/current protection on the motor itself, internal or external.
- **Defrost timer or controller** — sequences defrost heaters and fan delays on low-temperature systems.

## Ladder diagrams

Control circuits are drawn as a ladder: two vertical **rails** (the supply)
and horizontal **rungs**. Each rung = one load (contactor coil, fan, heater)
with its switches **in series** ahead of it. The logic reads like a
sentence: *"the compressor contactor pulls in when the thermostat AND the LP
switch AND the HP switch AND the overload are all closed."* Find the load,
read right-to-left, and the diagram tells you every device that can stop it.

!FIG[ladder-rung]

## Meter method: find the open switch

With the circuit calling for cooling but the load dead, work the rung with a
voltmeter:

- Across a **closed** switch: ~0 V (no potential difference across a conductor).
- Across the **open** switch: full control voltage appears — the supply is queued up on one side with nowhere to go.

One sweep along the rung and the open device names itself. It beats parts
swapping every time.

## The Australian electrical boundary

Electrical work on RAC equipment sits under two regimes at once, and knowing
where one ends and the other begins is a licence matter:

- **Fixed-wiring electrical work** — installing circuits, isolators,
switchboard work, hard-wiring equipment — is **licensed electrical work under
state and territory law** and must be done by a licensed electrician, with
the installation complying with **AS/NZS 3000 (the Wiring Rules)**.
- **RAC technicians** work up to that boundary: control-circuit diagnosis,
component testing and replacement within the equipment, and plug-connected
equipment. Some hold a **state restricted electrical licence** permitting
defined tasks such as like-for-like disconnect/reconnect of fixed-wired
equipment — the scope varies by state, so know yours.
- Practical AS/NZS 3000 touchpoints you will meet on installs: a **lockable
isolation switch adjacent to the equipment**, RCD protection requirements,
and cable selection/protection — all specified by the electrician's design,
not improvised on the roof.
- Safe-isolation practice ("test for dead") follows **AS/NZS 4836** — the
same ritual described below, formalised.

>! Safety order is not negotiable: isolate, lock off, prove dead with a
> tested meter — then apply power deliberately only for live tests that the
> diagnosis genuinely requires, with everything else clear of the circuit.

`,
        quiz: [
          {
            q: "In an energised control rung that should be running, a voltmeter across a CLOSED switch reads…",
            options: [
              "full control voltage",
              "approximately zero volts",
              "double the supply voltage",
              "it depends on the refrigerant",
            ],
            answer: 1,
            explain: "A closed switch is just a conductor — no potential difference across it. Full voltage appearing across a device marks it as the open point in the rung.",
          },
          {
            q: "A tripped manual-reset high-pressure cut-out should be…",
            options: [
              "reset immediately to restore cooling",
              "bridged out so the system can run",
              "investigated first — it tripped because something drove the head pressure dangerously high",
              "replaced with a lower setting",
            ],
            answer: 2,
            explain: "The HP switch is a safety, not a nuisance. A trip means a real event — dead condenser fan, blocked coil, air in the system. Resetting without diagnosis invites a repeat or a burst.",
          },
          {
            q: "On a ladder diagram, the switches that control a load are drawn…",
            options: [
              "in parallel below the load",
              "in series on the same rung as the load",
              "on a separate page",
              "inside the load symbol",
            ],
            answer: 1,
            explain: "Each rung feeds one load through its chain of series switches — every one of them must be closed for the load to energise. That chain is your diagnostic checklist.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 8 — Fault diagnosis
     ====================================================================== */
  {
    id: "diagnosis",
    title: "8 · Fault diagnosis",
    blurb: "A repeatable diagnostic routine, the gauge signatures of the classic faults, and deliberate practice with the Technician Quiz.",
    lessons: [
      {
        id: "diagnostic-method",
        title: "The diagnostic routine",
        minutes: 7,
        simple: "Diagnose like a doctor. Ask the patient (the owner) what changed. Look, listen and feel before connecting anything. Then measure, and compare your numbers with what a HEALTHY system would show in today's weather. Only then decide — and prove it with one more check before replacing parts. The rookie trap is 'adding gas' to any low reading: that treats the symptom and hides the disease.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — service and maintenance techniques; systematic fault diagnosis",
        ],
        content: `
Good diagnosticians are not lucky — they run the same disciplined loop every
time, and they do the cheap steps first.

## 1. Ask

The customer holds half the diagnosis: *What changed? When did it start? Is
it worse at certain times of day? Any work done recently? Any ice, noises,
trips, smells?* A system that failed the day after a "regas" is a different
investigation from one that faded over a month.

## 2. Look, listen, feel — before gauges

Senses are free and non-invasive:

- **Look**: ice on coils or the suction line; oil stains (oil marks every refrigerant leak); a dirty condenser; the sight glass; fans actually turning; frost lines across a drier.
- **Listen**: compressor knocking (slugging), hissing at the TXV, short-cycling clicks, a contactor chattering.
- **Feel**: suction line should be cold; liquid line warm (not hot, not frosted); discharge line hot; a temperature *drop* across the drier means a restriction.

## 3. Measure

Now the instruments: gauges on, line thermometers on, and derive
**superheat and subcooling**. On small hermetic systems, remember that
connecting gauges disturbs (and loses) part of a tiny charge — weigh the
benefit first.

## 4. Compare with expected

The heart of the method: *what should these numbers be right now?* Use the
PT relationship, ambient and box temperatures: condensing typically ~10–15 K
above ambient; evaporating set by the application. A reading is only high or
low **relative to what today's conditions predict**.

## 5. Hypothesise, then verify

Form the shortest list of faults that explains *all* the readings — then
test it with a targeted check (feel the drier, watch the sight glass, check
the fan current) **before** replacing anything. Change one thing at a time
and re-measure.

> The classic trap is fixing the symptom: topping up gas because the suction
> was low — on a system whose real problem was an iced coil, a blocked
> drier, or a leak that will simply drain the top-up too. Verify, then act.

`,
        quiz: [
          {
            q: "The first diagnostic step at a faulty system is…",
            options: [
              "connect gauges immediately",
              "question the customer and inspect with your senses",
              "recover the charge",
              "replace the start capacitor",
            ],
            answer: 1,
            explain: "History plus look/listen/feel is free, fast and non-invasive — and it frequently identifies the fault before a single hose is connected.",
          },
          {
            q: "A gauge reading is judged high or low compared with…",
            options: [
              "the reading on the last job",
              "what the PT relationship and today's ambient/box conditions predict",
              "the maximum on the dial",
              "the compressor nameplate current",
            ],
            answer: 1,
            explain: "Expected pressures move with conditions. Diagnosis means comparing measured values against what a healthy system would show right now, not against a memorised number.",
          },
          {
            q: "Why is 'topping up the gas' on a low suction reading often the wrong first move?",
            options: [
              "Refrigerant is cheap",
              "Low suction has several causes — airflow, restriction, or a leak — and adding gas treats the symptom, not the fault",
              "Suction pressure cannot be low",
              "Top-ups are only allowed in winter",
            ],
            answer: 1,
            explain: "Low suction is a symptom shared by half the fault library. Add gas to an iced coil or a leaky system and you have masked the fault, overcharged the fix, or fed the leak.",
          },
        ],
      },
      {
        id: "gauge-signatures",
        title: "Gauge signatures of the classic faults",
        minutes: 9,
        simple: "Every fault bends the numbers into its own recognisable footprint. Both pressures low? Something is starving the flow. Both high? Too much heat or refrigerant on the high side. Pressures squeezing toward each other? The pump itself is worn out. Superheat at zero? Liquid is where it shouldn't be — that one's urgent. Learn the footprints and a pair of gauges becomes a lie detector.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — fault diagnosis from operating pressures and temperatures",
        ],
        content: `
Every fault bends the numbers in its own shape. This table is the map — and
every row is available in the simulator to see live.

## The signature table

| Fault | Low side | High side | Superheat | Subcool | Discharge temp |
|-------|----------|-----------|-----------|---------|----------------|
| Low charge | Low | Low | High | Low/zero | Slightly high |
| Overcharge | Slightly high | High | Low | High | Slightly high |
| Dirty condenser | Slightly high | High | ~Normal | High-ish | High |
| Condenser fan failure | High-ish | Very high | ~Normal | Low-ish | Very high |
| Iced/blocked evaporator | Low | Slightly low | Near zero | ~Normal | Low-ish |
| Restricted filter-drier | Low | Slightly low | High | High | Slightly high |
| TXV stuck closed | Very low | Near normal | Very high | Normal-high | Slightly high |
| TXV stuck open | High | Slightly high | Near zero | ~Normal | Low |
| Non-condensables | ~Normal | High vs PT prediction | ~Normal | Reads high | High |
| Compressor valves leaking | High | Low | Moderate | Low-ish | High for the low head |

## Reading the table like a technician

- **Both pressures low** → the low side is being starved: not enough charge, or something upstream of the coil restricting flow. Superheat splits them: with **low subcool** think charge; with **high subcool** think restriction.
- **Both pressures high** → too much heat or too much refrigerant on the high side: condenser airflow, overcharge, non-condensables.
- **Pressures converging** (low up, high down) → the pump itself: leaking compressor valves. The pressure ratio collapses but the discharge runs hot.
- **Superheat at zero** is always urgent — floodback is compressor damage in progress, whatever the cause (iced coil, stuck-open valve, gross overcharge).

## The look-alike families

Two pairs are nearly identical on gauges alone:

- **Dirty condenser vs failed condenser fan** — both spike the head. Eyes and ears settle it: is the fan turning, is the coil filthy?
- **Restricted drier vs TXV stuck closed** — both starve the coil with liquid backed up. The drier gives itself away with a temperature drop (even frost) across its shell.

!SIM[See every row live — pick any fault](fault=lowCharge)
!SIM[Non-condensables: head above the PT prediction](fault=nonCondensables)
`,
        quiz: [
          {
            q: "High and low pressures converging toward each other, with a hot discharge line, points to…",
            options: [
              "low charge",
              "leaking/broken compressor valves",
              "a dirty condenser",
              "an iced evaporator",
            ],
            answer: 1,
            explain: "Leaky valves let gas slip backwards: the compressor can no longer hold the sides apart. Ratio collapses while re-compression heats the discharge.",
          },
          {
            q: "Both pressures low, superheat high and subcooling HIGH indicates…",
            options: [
              "low charge",
              "a liquid-line restriction (e.g. blocked drier) — liquid banks up while the coil starves",
              "overcharge",
              "a failed condenser fan",
            ],
            answer: 1,
            explain: "The starved coil mimics low charge, but the high subcooling betrays liquid stacked behind a restriction. Low charge would show low subcooling.",
          },
          {
            q: "Head pressure much higher than the PT relationship predicts for the actual condensing temperature suggests…",
            options: [
              "non-condensables (air) in the system",
              "low charge",
              "an oversized condenser",
              "a faulty thermometer only",
            ],
            answer: 0,
            explain: "Air collects in the condenser and adds its own partial pressure on top of the refrigerant's. The gauge reads refrigerant + air; the PT chart only accounts for refrigerant.",
          },
        ],
      },
      {
        id: "quiz-practice",
        title: "Deliberate practice with the Technician Quiz",
        minutes: 6,
        simple: "Reading about faults is like reading about swimming — at some point you have to get wet. The Technician Quiz is the safe pool: fifty broken systems in an afternoon, no customer watching, nothing to break. Wrong guesses cost nothing here and teach the most. Read the explanation, spot what you missed, and go again — streaks build the instinct.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — service diagnostics practice",
        ],
        content: `
Knowledge becomes skill through repetitions. The simulator's **Technician
Quiz** gives you unlimited faulty systems to diagnose — here is how to get
the most from it.

## How the quiz works

Each scenario secretly applies a random refrigerant, operating point and
fault (occasionally none at all). The fault selector, diagnosis banner and
performance panel are hidden — you get exactly what a technician gets:
gauges, temperatures, superheat, subcooling, and the P–h picture.

## A repeatable attack plan

1. **Orient**: note the refrigerant and the operating point in the scenario line.
2. **Pressures first**: are they high, low, or converging — *relative to that fluid's normal*? The gauge needles against their PT rings are your quickest read.
3. **Superheat and subcool next**: place the pair on the diagnostic matrix from Module 5.
4. **Discharge temperature** as tie-breaker: unusually hot points at pressure ratio or valve trouble; unusually cool suggests floodback.
5. **Commit, then read the explanation** — right or wrong, the explanation and field clues are the actual lesson.

## Scoring honestly

- Exact answers score 1; a same-family answer (the look-alike pairs from the last lesson) scores half — in the field those pairs are separated by looking and touching, not by gauges.
- **Healthy systems appear** now and then. Learning to say *"nothing is wrong"* — and mean it — prevents the most expensive habit in the trade: condemning healthy parts.
- Use **Show field clues** freely while learning; wean yourself off it as your streak grows.

Aim for streaks, not single wins: ten scenarios a day for a week will do
more for your gauge-reading than any chapter of theory.

!SIM[Start the Technician Quiz now](quiz=1)
`,
        quiz: [
          {
            q: "In the Technician Quiz (as in the field), the recommended first read is…",
            options: [
              "the discharge temperature",
              "the pressures relative to that refrigerant's normal, via the PT rings",
              "the compressor colour",
              "the P–h dome width",
            ],
            answer: 1,
            explain: "Pressures locate the system's operating state fastest. Superheat/subcool then refine the hypothesis, and discharge temperature breaks ties.",
          },
          {
            q: "Why do some quiz scenarios contain no fault at all?",
            options: [
              "To save computing power",
              "Because recognising a healthy system prevents condemning good parts — a core field skill",
              "It is a bug",
              "Healthy systems never occur in real work",
            ],
            answer: 1,
            explain: "Verify before condemning. A technician who can confidently declare a system healthy saves customers from unnecessary parts and refrigerant.",
          },
          {
            q: "Dirty condenser vs failed condenser fan score as a 'family' because…",
            options: [
              "they are the same component",
              "their gauge signatures are nearly identical — the field separates them by looking and listening",
              "both are electrical faults",
              "neither affects head pressure",
            ],
            answer: 1,
            explain: "Both starve the condenser of airflow and spike the head. Gauges alone cannot split them; eyes on the fan and coil can — which is exactly the point of the half-credit rule.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 9 — Repair procedures
     ====================================================================== */
  {
    id: "repair",
    title: "9 · Repair procedures",
    blurb: "The core service procedures in the right order: recovery, evacuation, charging, and leak detection with brazing basics.",
    lessons: [
      {
        id: "recovery",
        title: "Refrigerant recovery",
        minutes: 7,
        simple: "Before opening any system, the refrigerant comes out into a bottle — never into the sky (that's illegal, and it's your licence on the line). The recovery machine is basically a vacuum cleaner for refrigerant. The golden rule: a cylinder is FULL at 80% by weight, because liquid expands as it warms — an overfilled bottle in the sun is a bomb. So everything gets weighed, always.",
        refs: [
          "Australia & New Zealand Refrigerant Handling Code of Practice, Part 2 — systems other than self-contained low charge (ARC/ARCtick, current edition)",
          "Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 (Cth) and its Regulations",
          "ARC licensing information — arctick.org (Refrigerant Handling Licences & Refrigerant Trading Authorisations)",
        ],
        content: `
Before any circuit is opened, the refrigerant comes out — into a cylinder,
not the sky. Recovery is a legal duty, an environmental one, and simply good
practice: recovered gas can often be returned to the same system.

## The kit

- **Recovery machine** — a small compressor/condenser unit that pulls refrigerant from the system and pushes it into a cylinder.
- **Recovery cylinder** — a dedicated, in-test cylinder for recovered gas. Never an unknown or disposable cylinder.
- **Scales** — the cylinder sits on scales for the whole job.
- Hoses as short as practical, with ball valves; a filter-drier ahead of the machine protects it from a contaminated system.

!FIG[recovery-hookup]

## The non-negotiable rule: 80%

A cylinder is **full at 80% of its water capacity by weight** — the space
above the liquid is what saves the cylinder when it warms up. Liquid expands
with temperature; a hydraulically full cylinder becomes a bomb in the sun.
Set the scales, calculate the limit, stop before it.

## Working the recovery

1. Identify the refrigerant (nameplate, tags, pressure sanity-check against PT) — **never mix refrigerants** in one cylinder; mixed gas is usually destruction-only.
2. Recover **liquid first** where the system allows (much faster), then finish on vapour.
3. Pull the system down to the required recovery vacuum level, close up, and let it stand — a pressure rise means liquid still boiling off somewhere (or a leak into the circuit).
4. Weigh, record, label the cylinder with contents and date.

The recovered weight is itself a diagnostic: compare it against the
nameplate charge. A 5 kg system that yields 2.5 kg has told you where the
performance went — and that there is a leak to find before recharging.

## The Australian paperwork side

Under the Ozone Protection and Synthetic Greenhouse Gas Management Act and
the **Refrigerant Handling Code of Practice**, recovery before opening a
circuit is not best practice — it is a **licence condition**. Possessing the
recovered refrigerant requires a **Refrigerant Trading Authorisation**;
recovery cylinders must be approved, in test and correctly labelled; and
recovered quantities are recorded. Contaminated or unwanted refrigerant goes
back through the supplier for reclaim or destruction — never into the air.

>! Cylinders: keep them upright, capped, out of the sun, and never — ever —
> warm one with a flame to speed it up. Warm water is the hottest thing that
> should ever touch a refrigerant cylinder.

`,
        quiz: [
          {
            q: "A recovery cylinder is full at…",
            options: [
              "100% of its water capacity",
              "80% of its water capacity by weight",
              "50% by volume",
              "whenever the machine stalls",
            ],
            answer: 1,
            explain: "The 20% vapour space protects the cylinder from hydraulic rupture as the liquid warms and expands. The scales, not the machine, decide when to stop.",
          },
          {
            q: "The recovered weight compared with the nameplate charge tells you…",
            options: [
              "nothing useful",
              "whether the system had lost charge — evidence of a leak to find before recharging",
              "the oil level",
              "the compressor efficiency",
            ],
            answer: 1,
            explain: "Recovery doubles as a measurement. A big shortfall against the nameplate confirms undercharge and warns you to leak-test before putting gas back in.",
          },
          {
            q: "Mixing two refrigerants in one recovery cylinder…",
            options: [
              "improves the blend",
              "is acceptable if they are both HFCs",
              "ruins the contents — mixed refrigerant generally cannot be reused and must be destroyed",
              "raises the cylinder capacity",
            ],
            answer: 2,
            explain: "Mixed refrigerants cannot be separated economically. Keep dedicated cylinders per fluid, identify the system's gas first, and label everything.",
          },
        ],
      },
      {
        id: "evacuation",
        title: "Evacuation: pulling a proper vacuum",
        minutes: 8,
        simple: "After a repair the pipes hold air and invisible moisture — both poison for the system. A vacuum pump pulls the pressure down so far that water literally boils away at room temperature. Then the micron gauge plays lie detector while you watch: creeps up and keeps going = a leak; rises then levels off = still wet, keep pulling; stays put = clean, dry, and ready to charge.",
        refs: [
          "Australia & New Zealand Refrigerant Handling Code of Practice, Part 2 — systems other than self-contained low charge (ARC/ARCtick, current edition)",
          "ARC technical resource — Evacuation: stationary refrigeration and air-conditioning systems (arcltd.org.au)",
        ],
        content: `
Air and moisture are the enemies inside a refrigeration circuit: air's
non-condensables raise the head pressure, and moisture freezes at the
metering device and brews acid with the oil — the acid that kills hermetic
motors. Evacuation removes both. It is the least glamorous step and the most
skipped, which is why so many "mystery" failures trace back to it.

## Microns: the unit of seriousness

Vacuum work is measured in **microns of mercury** — an absolute scale where
atmospheric pressure is 760,000 microns and a perfect vacuum is 0. Compound
gauges are useless here; only an electronic **micron (vacuum) gauge** can
see the difference between "roughly empty" and "dry".

The working target: pull the system below **500 microns** (many specify
250–300 for low-temp and burnout work) *and prove it holds*.

## Doing it right

1. **Fresh vacuum pump oil** — the pump's ultimate vacuum is only as good as its oil; moisture-saturated oil caps performance. Change it often.
2. **Big, short paths** — evacuate through both service ports with the largest hoses (or dedicated evacuation hoses); remove Schrader valve cores with a **core-removal tool**. Tiny cores throttle a vacuum brutally.
3. **Micron gauge on the system, not the pump** — at the far end if possible. A gauge at the pump measures the pump.
4. Pull down, then **isolate and watch (decay test)**:
- Rises fast and keeps climbing → a **leak**.
- Rises then plateaus (e.g. settles around 1,000–1,500 microns) → **moisture** still boiling off; keep pulling or apply gentle heat.
- Holds below ~500 microns for 10–15 minutes → dry and tight. Charge it.

!FIG[vacuum-decay]

## Triple evacuation

For wet or opened systems: pull a vacuum, break it to a slight positive with
**dry nitrogen** (which soaks up moisture), and repeat twice more. The
nitrogen sweeps water vapour out far faster than a pump alone.

> **Code alignment:** the Australia & NZ Refrigerant Handling Code of
> Practice specifies evacuation by the **deep-evacuation or
> triple-evacuation (oxygen-free nitrogen) methods**, with the vacuum
> measured on a **dedicated vacuum gauge — not a service manifold gauge** —
> through dedicated large-bore, short evacuation hoses. The method is a
> requirement, not a preference; target depths are in the current edition.

> Time spent evacuating is bought back in compressor life. The five-minute
> "vacuum" that stops at 5,000 microns leaves the acid factory installed.

`,
        quiz: [
          {
            q: "System vacuum for dehydration is measured with…",
            options: [
              "the low-side compound gauge",
              "an electronic micron gauge connected at the system, away from the pump",
              "a thermometer",
              "the recovery machine's gauge",
            ],
            answer: 1,
            explain: "Compound gauges cannot resolve deep vacuum. A micron gauge on the system (not at the pump) reads the truth about dryness and tightness.",
          },
          {
            q: "After isolating the pump, the vacuum rises quickly and keeps rising. This indicates…",
            options: ["a dry, tight system", "a leak into the system", "moisture only", "a faulty compressor"],
            answer: 1,
            explain: "A continuous climb means atmosphere is entering — a leak. Moisture shows as a rise that plateaus as vapour pressure equalises. Both fail the decay test, for different fixes.",
          },
          {
            q: "Removing Schrader valve cores before evacuation matters because…",
            options: [
              "the cores are damaged by vacuum",
              "the tiny core orifice throttles flow and multiplies evacuation time",
              "it releases the charge",
              "it is required for leak testing",
            ],
            answer: 1,
            explain: "A vacuum pump moving rarefied gas needs the widest path available. Valve cores are pinholes; core-removal tools take them out of the equation and save hours.",
          },
        ],
      },
      {
        id: "charging",
        title: "Charging methods",
        minutes: 8,
        simple: "There are three honest ways to put refrigerant in: weigh it in (best — the nameplate tells you exactly how much), or fine-tune while watching superheat (fixed-orifice systems) or subcooling (TXV systems). Blends must leave the cylinder as liquid or the mixture changes. Add a little, wait for it to settle, re-read, repeat. Charging by 'that feels cold enough' is guessing, not technique.",
        refs: [
          "Australia & New Zealand Refrigerant Handling Code of Practice, Part 2 — systems other than self-contained low charge (ARC/ARCtick, current edition)",
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — charging methods and system commissioning",
        ],
        content: `
There is a correct amount of refrigerant for every system, and three honest
ways to hit it. Guessing by "beer-can cold" is not one of them.

## 1. Weigh-in: the gold standard

Where the **nameplate charge** is known (plus any line-length allowance from
the installation manual): evacuate, put the cylinder on scales, and weigh
the exact charge in. Fast, accurate, repeatable — the method of choice for
factory-charged splits and any system you have just evacuated.

## 2. Superheat method — fixed-orifice systems

Cap tubes and fixed orifices cannot regulate themselves, so the charge sets
the balance. With the system running at stable conditions, add refrigerant
slowly while watching **superheat** against the manufacturer's target
(often given as a chart against indoor/outdoor conditions). Undercharged
reads high superheat; creep up on the target from the high side.

## 3. Subcooling method — TXV/EEV systems

A healthy TXV holds superheat constant, so superheat stops telling you about
charge. Instead watch **subcooling**: add charge until it reaches the
manufacturer's figure (commonly 8–12 K). Low subcooling = undercharged;
high = overcharged.

## Blends and technique

- **Zeotropic blends (R404A, R410A, R407C) must leave the cylinder as liquid** — vapour charging changes the blend composition. Invert the cylinder or use its liquid port.
- Liquid is charged into the **high side** of a *non-running* system, or throttled carefully into the suction of a running one (a charging valve/orifice flashes it to vapour) — never pour raw liquid into a running suction port.
- Make small changes, let the system stabilise several minutes, re-read SH/SC, repeat. Chasing a moving target wastes gas and patience.

> Whichever method: record what went in. Date, refrigerant, amount, readings
> before and after — the next technician (probably you) will thank the tag
> on the unit.

!SIM[Watch SH and SC respond as conditions change](r=R410A)
`,
        quiz: [
          {
            q: "The correct charging indicator for a TXV system is…",
            options: [
              "superheat",
              "subcooling",
              "discharge temperature",
              "compressor current only",
            ],
            answer: 1,
            explain: "The TXV holds superheat steady regardless of charge (until things are extreme), so subcooling — the liquid stacked in the condenser — is what tracks the charge level.",
          },
          {
            q: "Zeotropic blends like R410A are charged…",
            options: [
              "as vapour, to keep the cylinder cool",
              "as liquid from the cylinder, so the blend composition stays correct",
              "only through the discharge line",
              "by weight of vapour only",
            ],
            answer: 1,
            explain: "The components of a zeotrope boil at different rates; vapour drawn off a cylinder is not the labelled blend. Liquid charging keeps the mixture true — throttled safely if the system is running.",
          },
          {
            q: "The most accurate way to charge a system with a known nameplate charge after evacuation is…",
            options: [
              "add gas until the sight glass clears",
              "weigh the exact charge in on scales",
              "charge until the suction line sweats",
              "fill to 80% of the receiver",
            ],
            answer: 1,
            explain: "Weigh-in removes all judgement: the manufacturer determined the correct charge; scales deliver it. Sight glasses and sweat lines are indicators, not measurements.",
          },
        ],
      },
      {
        id: "leaks-brazing",
        title: "Leak detection and brazing basics",
        minutes: 8,
        simple: "Every 'top-up' escaped through a hole — so find the hole: follow oil stains, spray bubbles, use the sniffer or UV dye. Pressure-test with nitrogen ONLY: never air (it brings moisture) and never oxygen (it can explode on contact with oil). When brazing, run a gentle nitrogen flow through the pipe so the inside doesn't grow black flakes that later choke the valves. Then: test, vacuum, weigh the charge in.",
        refs: [
          "Australia & New Zealand Refrigerant Handling Code of Practice, Part 2 — systems other than self-contained low charge (ARC/ARCtick, current edition)",
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — tubing, brazing and welding practice",
        ],
        content: `
Every kilogram a system needs to be "topped up" escaped through a hole. Find
the hole, fix it properly, prove it — that is the whole discipline.

## Finding leaks

- **Eyes first**: refrigerant carries oil, and oil stains stay at the exit wound. Follow the grime.
- **Soap solution / bubble spray**: cheap, reliable, precise on accessible joints.
- **Electronic detectors**: sniff the heavier-than-air refrigerant (probe *under* joints); modern heated-diode and infrared units are sensitive but must be A2L-rated where required.
- **UV dye**: circulate fluorescent dye and inspect later with a UV lamp — good for intermittent and hidden leaks.
- **Nitrogen pressure test**: for an empty system, pressurise with **oxygen-free dry nitrogen** (to the equipment's rated test pressure, never above), optionally with a trace of refrigerant for the sniffer, and watch the pressure over time. Nitrogen is dry, cheap, inert — and does not become an illegal vent when it escapes.

>! **Never pressure-test with oxygen or compressed air.** Oxygen meeting
> refrigeration oil can detonate, and air introduces moisture and
> non-condensables. Nitrogen only, through a regulator, with a relief
> fitting. In Australia the Refrigerant Handling Code of Practice governs
> leak-test practice, including whether and how a trace of refrigerant may
> be used with nitrogen for electronic detection — work to the current
> edition, and never to a habit.

## Brazing that lasts

Refrigeration joints are brazed (silver alloy, ~600°C+), not soft-soldered:

1. Clean and deburr; correct fit-up clearance.
2. **Purge dry nitrogen through the pipe while brazing** — a gentle flow. Without it, the oxygen inside the tube reacts with hot copper and lines the pipe with black **oxide scale**, which flakes off later and murders TXV screens, EEVs and driers.
3. Protect nearby components from heat: wrap valve bodies and driers with a wet rag or heat paste; remove Schrader cores; point the flame away from anything with a diaphragm.
4. Heat the joint evenly to alloy-flow temperature, feed the ring, let it wick.

## After the repair

Order matters: **pressure-test with nitrogen → release → evacuate to below
500 microns with a decay test → weigh in the charge → run and verify SH/SC.**
Then tag the unit with what was done. Skipping straight from "brazed it" to
"gassed it" leaves nitrogen, air or moisture sealed inside — tomorrow's
mystery fault.

`,
        quiz: [
          {
            q: "Pressure testing a repaired circuit must be done with…",
            options: [
              "compressed air",
              "oxygen",
              "oxygen-free dry nitrogen through a regulator",
              "refrigerant vapour at full cylinder pressure",
            ],
            answer: 2,
            explain: "Air brings moisture; oxygen can explode on contact with refrigeration oil. Dry nitrogen is inert, dry and legal to release — the only correct test gas.",
          },
          {
            q: "Nitrogen is purged through the pipework during brazing to…",
            options: [
              "cool the joint faster",
              "prevent internal oxide scale forming inside the hot copper",
              "check for leaks at the same time",
              "harden the alloy",
            ],
            answer: 1,
            explain: "Hot copper plus the oxygen in ordinary air lines the tube with black scale that later breaks loose and blocks screens, valves and driers. A gentle nitrogen flow displaces that oxygen.",
          },
          {
            q: "The correct sequence after brazing a repair is…",
            options: [
              "charge immediately, then leak test",
              "pressure test with nitrogen, evacuate with a decay test, then charge by weight",
              "evacuate first, then pressure test with the charge",
              "run the compressor to blow out debris, then charge",
            ],
            answer: 1,
            explain: "Prove it tight (nitrogen), prove it dry (deep vacuum + decay), then put the measured charge in. Any other order seals contamination inside or wastes refrigerant.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 10 — Safety
     ====================================================================== */
  {
    id: "safety",
    title: "10 · Safety",
    blurb: "The hazards that actually hurt refrigeration technicians — pressure, cold, asphyxiation, flammables and electricity — and the habits that neutralise them.",
    lessons: [
      {
        id: "refrigerant-pressure-hazards",
        title: "Refrigerant, pressure and cold hazards",
        minutes: 7,
        simple: "Refrigerant is safe inside the pipes. Loose in a room, it can silently push the air out at floor level (it's heavier than air and has no smell), freeze skin on contact, or — with the newer flammable types — find a spark. So: ventilate, wear gloves and glasses, keep cylinders cool, upright and capped, and read the safety data sheet before the emergency, not during it.",
        refs: [
          "Australia & New Zealand Refrigerant Handling Code of Practice, Parts 1 & 2 (ARC/ARCtick, current edition)",
          "AS/NZS 5149 series — Refrigerating systems and heat pumps: safety and environmental requirements",
          "Safety data sheets (SDS) for the specific refrigerant; state/territory WHS regulations",
        ],
        content: `
Refrigerants are safe *in the circuit*. The hazards appear when they get out
— or when you open a path for them.

## Asphyxiation: the quiet one

Most refrigerants are odourless and **heavier than air**. A big leak into a
plant room, cool room or pit displaces the oxygen at floor level with no
warning smell. Rules that keep you breathing:

- Ventilate before and while working in enclosed plant spaces; use fixed refrigerant detectors/alarms where installed and portable monitors where not.
- Never enter a space to investigate a hissing noise or a "chemical smell" without ventilation — and never alone.
- Ammonia announces itself brutally (you will not stay by choice); CO2 gives almost no warning at all and is toxic in its own right at a few percent.

## Cold burns

Liquid refrigerant boils at skin contact temperatures far below zero —
instant **frostbite**. Gloves and safety glasses whenever hoses are
connected, disconnected or purged; liquid in the eye is an emergency. Treat
frostbite with lukewarm (not hot) water and medical attention.

## Pressure

- Systems hold pressure even when "off". **Never unscrew a joint or flare on a charged circuit** — recover first, verify with gauges.
- Respect relief valves and bursting discs: they are not plugs, and their discharge must go somewhere safe.
- **Cylinders**: upright, secured, valve caps on for transport, out of direct sun, and *never* warmed with a flame. Check test dates.
- CO2 plant runs at multiples of HFC pressures — only components and hoses rated for it.

## Flammables (A2L / A3)

With R32, R290 and friends on the vans now: no smoking, no brazing, no
sparking tools until the area is confirmed gas-free; use rated detectors and
rated recovery gear; ventilate low (the gas pools); and control every
ignition source within the work zone before opening the circuit.

>! The SDS (safety data sheet) for the specific refrigerant is the
> authority — exposure limits, first aid, fire behaviour. Know where to find
> it before the day you need it at speed.

`,
        quiz: [
          {
            q: "A large refrigerant leak in a plant room is dangerous chiefly because…",
            options: [
              "the gas is brightly coloured",
              "most refrigerants are odourless, heavier than air, and displace oxygen at low level",
              "it raises the room pressure",
              "it corrodes tools",
            ],
            answer: 1,
            explain: "The vapour pools at floor level and gives no smell warning. Oxygen displacement is exactly what kills in confined refrigeration spaces — ventilate and monitor.",
          },
          {
            q: "Warming a refrigerant cylinder to speed up charging is acceptable with…",
            options: [
              "a gentle blowtorch flame",
              "warm water only — never a flame",
              "the vehicle exhaust",
              "an electric radiator against the shell",
            ],
            answer: 1,
            explain: "A flame creates local hot spots and pressure the cylinder was never designed for. Warm water is the only heat source that belongs near a refrigerant cylinder.",
          },
          {
            q: "Liquid refrigerant contacting skin causes…",
            options: [
              "a mild rash",
              "instant frostbite (cold burn) — treat with lukewarm water and medical attention",
              "nothing if wiped quickly",
              "a chemical tan",
            ],
            answer: 1,
            explain: "Expanding liquid refrigerant boils far below 0°C and freezes tissue on contact. Gloves and eye protection whenever hoses and charge paths are opened.",
          },
        ],
      },
      {
        id: "electrical-site-safety",
        title: "Electrical and site safety",
        minutes: 7,
        simple: "Electricity doesn't give second chances. The ritual is always the same: isolate, lock it off with YOUR OWN lock, and prove the circuit dead with a tester you've just checked on a live source. Watch for capacitors (they keep a bite after the power is off) and machines that restart themselves on timers. Add ladders, hot pipes and heavy gear — and the boring routine is exactly what gets you home.",
        refs: [
          "AS/NZS 3000 Wiring Rules (Standards Australia) — topic-level reference only; consult the current edition",
          "AS/NZS 4836 — Safe working on or near low-voltage electrical installations and equipment",
          "State/territory electrical safety and WHS regulators",
        ],
        content: `
The electrical hazard on refrigeration plant is the same one electricians
face — plus stored charge, remote starts and wet floors.

## Safe isolation: the ritual that saves lives

1. Identify **every** supply to the equipment (mains, control circuits, separate fan or crankcase-heater feeds).
2. Isolate and **lock off** with your own lock and tag.
3. **Prove dead** with a meter you have just tested on a known live source — test, verify the tester, test again.
4. Only then open panels and touch conductors.

Two refrigeration-specific stings:

- **Capacitors store lethal charge after isolation.** Discharge start and run capacitors through a proper bleed resistor (never a screwdriver blade) before handling.
- **Automatic restart**: compressors on thermostats, pressure switches and defrost timers can start *by themselves* — another reason lock-off, not just "switched off", is the standard. Keep hands out of belt drives and fan blades unless isolation is proven.

## The rest of the site

- **Heights**: much of the trade lives on roofs and ladders — three points of contact, tied-off ladders, harnesses where the roof or platform demands them.
- **Hot surfaces**: discharge lines and compressor heads run 70–120°C. The burn is faster than the reflex.
- **Manual handling**: compressors, cylinders and condensing units are dense. Use trolleys, cranes and a second pair of hands; a wrecked back is a career injury.
- **Confined and cold spaces**: cool rooms can auto-close and run below −20°C; know the door release, prop or guard the door, and never work sealed inside a running freezer alone.
- **Housekeeping**: capped cylinders secured upright in the van, brazing gear stowed hot-end safe, and the work area left cleaner than found.

> Skill gets the system running; discipline gets you home. The best
> technicians are boringly consistent about isolation, PPE and cylinders —
> that consistency is the qualification behind the licence.

`,
        quiz: [
          {
            q: "Proving dead correctly means…",
            options: [
              "checking the switch is down",
              "testing with a meter verified on a known live source before and after",
              "asking the customer",
              "watching the fan stop",
            ],
            answer: 1,
            explain: "A broken tester reads dead on a live circuit. Test the meter on a known source, test the circuit, and re-verify the meter — the full ritual, every time.",
          },
          {
            q: "After isolating a compressor circuit, capacitors must be…",
            options: [
              "left alone — isolation empties them",
              "discharged through a proper bleed resistor before handling",
              "shorted with a screwdriver",
              "removed with the power on",
            ],
            answer: 1,
            explain: "Capacitors hold charge after the supply is gone — that is their job. A resistor tool discharges them safely; a screwdriver arc pits contacts and hands.",
          },
          {
            q: "Refrigeration equipment can start without warning because…",
            options: [
              "of static electricity",
              "thermostats, pressure switches and defrost timers switch it automatically — which is why lock-off, not just 'off', is required",
              "compressors store momentum",
              "it cannot — off is off",
            ],
            answer: 1,
            explain: "Automatic controls will restart plant the moment their contacts close. Personal locks and tags are what stand between your hands and a remote start.",
          },
        ],
      },
    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
