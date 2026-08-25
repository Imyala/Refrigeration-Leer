/* =========================================================================
   Course content, module 303 — Electrical circuits.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 3 — Electrical circuits.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Ch 3, electrical circuits",
  ];

  const REFS_PARTS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — circuit components, symbols and circuit labelling",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — sources of electromotive force",
  ];

  const REFS_UNITS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — voltage, current and resistance in a d.c. circuit",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electrical measuring devices: galvanometers, ammeters, voltmeters and wattmeters",
  ];

  const REFS_FAULT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — open circuit, closed circuit and short-circuit",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — fundamental principles of AS/NZS 3000:2018, basic protection and fault protection",
    "AS/NZS 3000:2018 Wiring Rules — Clauses 1.5, 1.5.4.2 and 1.5.5.2",
  ];

  const REFS_EFFECTS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — heating, magnetic, chemical and electrostatic effects of current and their uses",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electrolytic corrosion, stray currents and cathodic protection",
  ];

  const REFS_OHM = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Ohm's Law and its application to simple d.c. circuits",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — multiple and sub-multiple units, scientific and engineering notation",
  ];

  const REFS_POWER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — force, work, energy and power in electrical circuits",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power ratings, efficiency, losses and the kilowatt hour",
  ];

  const REFS_SERIES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — series circuit analysis and Kirchhoff's Voltage Law",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — primary cells, secondary cells, fuel cells and the voltaic cell",
  ];

  const REFS_PARALLEL = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — parallel circuit analysis and Kirchhoff's Current Law",
  ];

  const REFS_COMPOUND = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — compound (series/parallel) circuits and equivalent resistance",
  ];

  const MODULES = [

  /* ======================================================================
     Module E.3 — Electrical circuits
     ====================================================================== */
  {
    id: "elec-circuits",
    stream: "elec",
    title: "E.3 · Electrical circuits",
    blurb: "How a circuit is built, drawn, calculated and faulted: source, path and load, Ohm's law, power and energy, series, parallel and compound circuits, Kirchhoff's laws and circuit protection.",
    lessons: [

      /* ---------------------------------------------------------------- */
      {
        id: "circuit-anatomy",
        title: "The parts of a circuit and how it is drawn",
        minutes: 10,
        simple: "Every electric circuit needs three things: something to push (the source), somewhere for the push to go (the wires, or path) and something that does the work (the load). Think of a water pump, a hose loop and a sprinkler. Switches, fuses and meters get added to control it, protect it and check on it. On paper we replace all of it with standard symbols so any tradesperson can read the drawing.",
        refs: REFS_PARTS,
        content: `
The single most valuable skill an electrical worker has is being able to work
out what a circuit will do **before** the power is switched on. That starts
with knowing what the pieces are, what each piece is for, and how the whole
thing is drawn on paper so that the next person can read it.

## The three things every circuit must have

A circuit is a loop. The word comes from the Latin for going around, and that
is exactly what has to happen — charge leaves the source, travels through the
load, and returns. Break the loop anywhere and everything stops.

| Part | What it does | Typical examples |
|---|---|---|
| Source | Supplies the electromotive force (EMF) that pushes current | Battery, solar cell, generator, the distribution network at a socket-outlet |
| Path | Carries the current out to the load and back again | Copper conductors, terminals, joints, the switch contacts |
| Load | Converts electrical energy into something useful | Lamp, heating element, motor, compressor, solenoid coil |

Nothing else is compulsory. A torch is exactly this: a cell, a lamp and a
strip of metal with a switch in it. A desk lamp is the same circuit with the
supply network standing in for the cell. Strictly the socket-outlet is not
the source — the generator at the far end of the network is — but everyone in
the trade treats the outlet as the source once the plug is in.

## The three things nearly every real circuit adds

- **Control devices.** A switch is a mechanical device that opens or closes
  the loop. Open means no current and the circuit is *off*; closed means
  current flows and the circuit is *on*. Relays, contactors, thermostats and
  electronic switching devices all do the same job — they are neither the
  source nor the load, they just decide when current is allowed.
- **Protective devices.** Fuses and circuit-breakers. The circuit works
  perfectly well without them; they exist to protect people, livestock and
  the installation itself. While a fuse is intact or a breaker is closed the
  circuit runs normally. When the fuse blows or the breaker trips, the loop
  is opened and current stops.
- **Measuring instruments.** Ammeters are drawn in line with a conductor
  because the current has to pass *through* them. Voltmeters are drawn across
  two points because they compare the potential at one point with the other.

## Where the EMF comes from

The source can be built in six different ways. They all convert some other
form of energy into electrical potential difference.

| Method | Energy converted | Everyday example |
|---|---|---|
| Electromagnetic | Motion in a magnetic field | Alternators, all large-scale generation |
| Electrochemical | Chemical reaction | Torch cells, car batteries, fuel cells |
| Electrostatic | Friction between materials | Very high voltage at tiny power; precipitators |
| Photoelectric | Light | Solar (photovoltaic) panels |
| Thermoelectric | Heat across dissimilar metals | Thermocouples in ovens and flame-failure devices |
| Piezoelectric | Mechanical stress on a crystal | Gas barbecue igniters, piezo microphones |

Most of the electricity you will ever work with is electromagnetic in origin,
but the other five turn up constantly as sensors and small sources.

## Reading and drawing a circuit diagram

A circuit diagram is not a picture of the job. It is a shorthand record of
what is connected to what, drawn with standard symbols so that someone who
has never seen the equipment can still follow it. The symbols represent an
idea, not an appearance — a resistor symbol looks nothing like a heating
element, but everybody knows what it means.

Conventions that make a drawing readable:

1. **Label components left to right, then top to bottom.** A capital letter
   plus a subscript: R1, R2, R3 for resistors, S1 for a switch, F1 for a
   fuse, E for the supply EMF.
2. **Mark polarity.** A d.c. source is drawn with a plus and a minus, and an
   arrow beside it showing the direction it pushes.
3. **Mark current direction** with a filled arrowhead on the conductor, and
   name the current beside it — I total for the supply current, I1 for the
   current in branch 1.
4. **Show meters where the values matter**, in series for current and across
   the component for voltage.

Once the labels are on, the drawing feeds straight into your calculations:
V2 means the voltage across R2, and there is no ambiguity about which
component you mean.

### Abbreviations you will see constantly

| Symbol | Means |
|---|---|
| V | Voltage, in volts (V) |
| E, EMF | Electromotive force — the source voltage. E is also used for energy; context tells you which |
| p.d. | Potential difference between two points |
| VD | Voltage drop, usually across one component |
| I | Current, in amperes (A) — the letter stands for intensity |
| R | Resistance, in ohms |
| P | Power, in watts (W) |
| +ve / -ve | Positive and negative terminal |
| cct | Circuit |

## The five kinds of circuit

Circuits are classified by how many loads, how many current paths and how
many sources they contain.

| Type | Paths | Description |
|---|---|---|
| Simple | One | One source, one load, one path — a torch |
| Series | One | Several loads in one unbroken path; the same current in all of them |
| Parallel | Many | Each load on its own path across the same two nodes |
| Compound | Many | Series and parallel sections combined — by far the most common |
| Complex | Many | More than one source, or paths that cannot be reduced by series/parallel rules; needs mesh or nodal analysis |

Three-phase circuits, with three a.c. sources, are a separate family again and
are dealt with in their own right later in the course.

## On the job

- If you cannot point to the source, the path and the load on a drawing, you
  do not yet understand the circuit.
- Protection devices are not part of the working circuit — but the circuit is
  illegal and unsafe without them.
- Draw and label before you calculate. Half of all calculation mistakes are
  really labelling mistakes.
- The socket-outlet is the practical source for portable equipment; treat
  everything upstream of it as live at all times.
`,
        quiz: [
          {
            q: "A technician tells you a circuit consists of a battery, a lamp, wiring, a switch and a fuse. Which of these are the three parts that are essential for any circuit to work?",
            options: [
              "Battery, switch and fuse",
              "Battery, wiring and lamp",
              "Lamp, switch and fuse",
              "Wiring, switch and fuse",
            ],
            answer: 1,
            explain: "Source (battery), path (wiring) and load (lamp) are the three compulsory parts. The switch is a control device and the fuse is a protective device — the circuit will still function without either, though it should never be installed without protection.",
          },
          {
            q: "Why are standard symbols used on circuit diagrams instead of drawings of the actual components?",
            options: [
              "Because symbols show the physical size and mounting of each part",
              "Because a symbol records the connection and function in a way any trained person can read quickly",
              "Because the standards prohibit pictorial drawings on any job",
              "Because symbols avoid having to label components",
            ],
            answer: 1,
            explain: "Symbols convey the concept — what the part does and what it connects to — not its appearance. That is why a drawing made by one person can be read by anyone who knows the standard. Labelling is still required in addition to symbols.",
          },
          {
            q: "A thermocouple in an oven produces a few millivolts when its junction is heated. Which method of producing an EMF is it using?",
            options: ["Piezoelectric", "Photoelectric", "Thermoelectric", "Electrostatic"],
            answer: 2,
            explain: "Thermoelectric generation uses two dissimilar metals joined at a hot junction; the small EMF produced is read by a meter calibrated in degrees. Piezoelectric sources need mechanical stress on a crystal, as in a gas igniter.",
          },
          {
            q: "A circuit has three lamps, each on its own path across the same supply, and a heating element in series with the supply feeding all of them. How is that circuit classified?",
            options: ["Simple", "Series", "Parallel", "Compound"],
            answer: 3,
            explain: "It contains both a parallel group and a series element, which makes it a compound (series/parallel) circuit — the most common type in practice. It is not a plain parallel circuit because the element carries the total current, not a branch current.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "quantities-and-instruments",
        title: "Voltage, current and resistance — and the meters that read them",
        minutes: 10,
        simple: "Current is how much charge is moving, voltage is the push that makes it move, and resistance is what holds it back. Water in a pipe is the usual comparison: flow, pressure and pipe friction. An ammeter has to be cut into the pipe to measure flow, while a voltmeter just touches two points to compare pressure — connect either one the wrong way and you can wreck the meter.",
        refs: REFS_UNITS,
        content: `
Three quantities describe what is happening at any point in a d.c. circuit,
and every calculation in this module uses them. Get the definitions clear now
and the arithmetic later is straightforward.

## Current — charge on the move

Electric current is charge flowing through a conductive material, from a
point of higher potential to a point of lower potential. Charge is measured
in **coulombs (C)**, and one coulomb is the charge of about
6.24 x 10 to the power 18 electrons — roughly 6 240 000 000 000 000 000 of
them. Individual electrons carry an extraordinarily small charge, so it takes
that many to make one useful unit.

Current uses the symbol **I** (for *intensity*) and the unit **ampere (A)**.
One ampere is one coulomb passing a point every second:

- I = Q / t  (coulombs per second)

So 3 A flowing for 10 s moves Q = I x t = 3 x 10 = **30 C** of charge.

### Why the light comes on instantly

Individual electrons crawl. Their average **drift velocity** in a copper
conductor is in the order of millimetres per hour. But the *effect* travels at
close to the speed of light — about 300 000 km/s — because each electron only
has to nudge its neighbour. One electron shifts orbit, repels the next, and
the disturbance runs down the conductor almost instantly. Nobody waits for the
electron that left the switchboard to arrive at the lamp.

## Voltage — the pressure that makes it happen

Electrons will not move round a circuit unless something pushes them. Voltage
is that push: a difference in electrical charge between two points, which is
why it is also called **potential difference (p.d.)**. The difference has the
potential to do work, but nothing happens until you connect a path.

The unit is the **volt (V)**. One volt is the pressure needed to drive one
ampere through one ohm. Depending on context you will see the symbols V, E, U
or EMF used for it.

Two points to hold on to:

- **Voltage is always between two points.** "The voltage at that terminal" is
  meaningless until you say what it is measured *with respect to*. This is the
  whole basis of fault-finding by voltage drop.
- **Polarity matters on d.c.** The plus and minus marks on a source show the
  direction it will try to push current.

## Resistance — opposition to flow

Resistance is the opposition a material offers to current. Think of it as
friction: as electrons move from atom to atom they are held back by the
attraction of the positive nuclei and they collide constantly. The unit is the
**ohm**, symbol R, written with the Greek letter omega.

Two consequences matter on the job:

1. **Current through resistance always makes heat.** Always — sometimes too
   little to feel, sometimes enough to run an oven element. The element gets
   red hot and the supply cable does not, purely because the element has far
   more resistance than the cable.
2. **Everything has some resistance.** A conductor is not zero ohms, a
   terminal is not zero ohms, and a switch contact is not zero ohms. When you
   test continuity you are looking for a *low* reading, not a zero one, and a
   joint whose resistance has crept up is a joint that is heating.

## Measuring instruments

### The galvanometer

The ancestor of every analogue meter, dating from 1820 and named after Luigi
Galvani, was a compass needle inside a coil of wire. Deflection of the needle
showed that current was flowing in the coil. Laboratory versions replaced the
needle with a tiny mirror and read the deflection from a light beam thrown
across a darkened room. Modern ammeters and voltmeters descend from the
moving-coil galvanometer, but electronic amplification has replaced most of
them.

### Ammeters — always in series

An ammeter has to pass the circuit current through itself to measure it, so it
is connected **in series**, taking the place of a section of conductor. Two
rules follow:

- An ammeter is built with **very low internal resistance**, so that inserting
  it does not add a voltage drop and change the very current you are trying to
  measure.
- Because its resistance is low, connecting an ammeter **across** two points
  that have a potential difference between them is close to bolting a short
  across those points. The meter, its fuse, or the circuit will be damaged.

On an analogue ammeter the positive (red) terminal must go to the positive
side of the circuit, or the needle drives backwards against its stop and can
bend.

### Voltmeters — always in parallel

A voltmeter compares two points, so it is connected **across** them. To avoid
disturbing the circuit it must have **very high internal resistance** — a
common digital instrument is at least 10 megohms, and many are 200 megohms.

If a voltmeter is accidentally connected in series with a load, it behaves
like a very high resistance joint: almost the whole supply voltage appears
across the meter, the load gets almost nothing, and the circuit simply does
not work.

### Full-scale deflection

Every meter has a maximum it can read, called **full-scale deflection (FSD)**.
If a pointer slams across the scale and past the highest marked division, kill
the power immediately — before the movement is damaged. The same idea applies
to a digital instrument showing an over-range indication: you are outside the
meter's capacity and the reading means nothing.

### Measuring power

The simplest way to find d.c. power is to measure volts with a voltmeter,
measure amps with an ammeter, and multiply the two. A **wattmeter** does it in
one instrument: it has a current circuit (terminals I+ and I-) wired in series
with the load and a voltage circuit (V+ and V-) wired across the supply, and
the two together position the pointer to indicate watts directly.

>! Never connect an ammeter, or a multimeter still set to a current range,
>! across a live supply. The meter's low resistance means the fault current is
>! limited only by the supply — the result is an arc flash, not just a blown
>! meter fuse. Check the range and the lead sockets before every measurement.

## What to remember

- I = Q / t; one amp is one coulomb per second.
- Voltage is always a difference between two points.
- Ammeter: in series, low resistance. Voltmeter: in parallel, high resistance.
- Current through resistance always produces heat, and every real conductor
  and joint has resistance.
- Respect FSD; an over-range meter is a damaged meter.
`,
        quiz: [
          {
            q: "A charge of 24 C passes a point in a conductor in 8 seconds. What is the current?",
            options: ["0.33 A", "3 A", "8 A", "192 A"],
            answer: 1,
            explain: "I = Q / t = 24 / 8 = 3 A. The tempting wrong answer, 0.33 A, comes from inverting the fraction — remember the ampere is defined as coulombs per second, so charge goes on top.",
          },
          {
            q: "Why must a voltmeter have a very high internal resistance?",
            options: [
              "So it can withstand a short-circuit current",
              "So that connecting it across the circuit draws almost no current and does not change the reading",
              "So it can be safely connected in series with a load",
              "So the pointer moves further up the scale",
            ],
            answer: 1,
            explain: "A voltmeter is connected in parallel, so any current it draws is current the circuit did not have before. Ten megohms or more keeps that current negligible. It still must not be placed in series — there it acts like an open circuit and stops the load working.",
          },
          {
            q: "An apprentice reports that a lamp lit 'instantly' even though electrons drift through copper at only millimetres per hour. What explains this?",
            options: [
              "Electrons accelerate to near light speed once the switch closes",
              "The energy transfer passes from electron to neighbouring electron at close to the speed of light, even though individual electrons drift slowly",
              "The lamp stores enough charge to light before the current arrives",
              "Drift velocity only applies to a.c. circuits",
            ],
            answer: 1,
            explain: "Each electron only needs to displace its neighbour, and that disturbance runs along the conductor at roughly 300 000 km/s. Drift velocity describes the slow average movement of the electrons themselves, which is a different thing from the speed of the effect.",
          },
          {
            q: "A multimeter left on a current range is connected across a live 230 V circuit. What is the most likely result?",
            options: [
              "The meter reads the supply voltage correctly",
              "The meter reads zero because current ranges ignore voltage",
              "A very large current flows through the meter's low-resistance shunt, causing an arc flash or destroying the meter",
              "The circuit protection prevents any current from flowing at all",
            ],
            answer: 2,
            explain: "On a current range the meter is a near short-circuit. Placed across a supply, the only thing limiting the current is the supply itself, so the energy released can cause an arc flash. Circuit protection may eventually operate, but not before serious damage or injury.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "open-closed-short",
        title: "Open, closed and short circuits — and protecting against them",
        minutes: 11,
        simple: "A closed circuit is one where the loop is complete and things work. An open circuit has a break in it, so nothing flows — a switch turned off, or a wire snapped. A short circuit is a fault where current finds a shortcut with almost no resistance, so a huge current flows and something has to stop it fast. Fuses, circuit-breakers and safety switches are what stop it.",
        refs: REFS_FAULT,
        content: `
Circuits have three conditions. Two of them are normal and one is a fault, and
telling them apart from meter readings is most of what fault-finding is.

## Closed circuit

The loop is complete, current flows and the load works. This is the switched-
on state. For the current to keep flowing you need a continuous source of
electrical energy and an unbroken path — a static charge built up by friction
cannot do it, which is why cells, generators and the supply network exist.

## Open circuit

The path is not continuous between two points that have a potential difference
between them. No current flows and the load is dead. An open circuit is
normal when a switch is off, and it is a fault when a conductor is broken, a
terminal has come loose, a fuse element has blown, or a joint has burnt out.

What the meters say tells you which is which:

| Measurement | Closed and healthy | Open circuit |
|---|---|---|
| Ammeter in the loop | Reads the expected load current | Reads zero |
| Voltmeter across the load | Reads full supply voltage | Reads zero (nothing is getting to it) |
| Voltmeter across the break or open switch | Reads about 0 V | Reads full supply voltage |
| Ohmmeter across the break (isolated) | Low resistance | Very high or over-range |

That third row is the fault-finder's favourite. In a series string, the full
supply voltage appears across the *open* component and almost nothing appears
across the good ones. Walk a voltmeter along the string and the reading tells
you exactly which device is open.

!FIG[ladder-rung]

## Short-circuit

A short-circuit is a fault: current has found a path with far less resistance
than it should have, usually bypassing the load altogether. The name is
literal — the current path has become shorter.

- A **dead short** is a near-zero-resistance fault, such as a conductor
  connected straight from one terminal of the supply to the other.
- A **partial short** has low but not negligible resistance — some load
  current still flows, but the circuit behaves badly and the wiring runs hot.

With the load bypassed, nothing is limiting the current except the resistance
of the conductors and the source. Currents of hundreds or thousands of amps
can flow. Unless a protective device operates, cables melt, insulation burns,
and a battery can rupture or explode. If a load is shorted out in a series
string, the remaining components now share the whole supply voltage, so they
are over-volted and over-currented as well.

>! A dead short across a car battery, a UPS battery bank or a solar string can
>! deliver thousands of amps with no fuse in the way. Metal tools, watch bands
>! and rings vaporise. Isolate, prove dead, and remove jewellery before working
>! anywhere near battery terminals.

## The short-circuit you *want*

Not every short is a mistake. Circuit protection depends on one. If a live
conductor inside an appliance breaks loose and touches the metal frame, the
frame becomes live and anyone touching it is a path to earth. The earthing
conductor bonded to that frame deliberately provides a very low resistance
path back to the supply, so the fault current is enormous — and that is what
makes the circuit-breaker trip or the fuse blow in a fraction of a second. A
high fault current is the *mechanism* that disconnects the danger.

This is why earthing and protection are designed together: the fault loop must
be low enough in resistance to let enough current flow to operate the device
quickly.

## Protective devices

| Device | What it responds to | What it protects |
|---|---|---|
| Fuse | Current above rating, for long enough to melt the element | Cables and equipment from overload and short-circuit |
| Circuit-breaker | Overload (thermal) and short-circuit (magnetic, near-instant) | Cables and equipment; resettable |
| RCD (safety switch) | Imbalance between active and neutral current, typically 30 mA | People — current leaking to earth through a body |

An RCD is an *additional* measure. Under AS/NZS 3000:2018 it does not replace
insulation, enclosures or earthing, though RCD protection is now required on
all final subcircuits in domestic installations.

## What AS/NZS 3000:2018 is built on

AS/NZS 3000:2018 — the Wiring Rules — is called up by electrical safety
legislation in Australia and New Zealand, which makes compliance a legal
requirement, not a preference. Clause 1.5 sets out the fundamental principles,
which are about protecting persons, livestock and property from three dangers:

1. **Electric shock**, both from parts live in normal service and from parts
   that become live only under fault conditions.
2. **Excessive temperature**, where current heats conductors enough to damage
   insulation, burn nearby materials, cause fire and smoke, or burn people.
3. **Explosive atmospheres**, where electricity or its heat ignites gas or
   dust — service stations, mines and grain silos being the classic cases.

### Basic protection (Clause 1.5.4.2)

Keeping people away from parts that are live in normal service:

1. **Insulation** of live conductors — the ordinary case.
2. **Barriers or enclosures**, such as a switchboard that needs a key or tool
   to open.
3. **Obstacles**, such as fencing around high-power transformers.
4. **Placing out of reach**, as with overhead lines.

### Fault protection (Clause 1.5.5.2)

Protecting against parts that become live only when something fails:

1. **Automatic disconnection of supply** by circuit-breakers and/or fuses —
   the method used almost everywhere. Rewireable fuses are now prohibited in
   new work, though they survive in old installations.
2. **Class II (double-insulated) equipment**, marked with the double-square
   symbol, so a fault cannot make an exposed part live.
3. **Electrical separation**, where an isolating transformer or battery
   supplies the equipment and a connection to earth does not complete a
   circuit.
4. **Limiting the shock current** electronically so it can never reach a
   dangerous value.

## What current does to a person

Electric shock disrupts the function of living tissue. Breathing can stop, and
the heart can stop or fall into **ventricular fibrillation** — rapid,
uncoordinated spasm with no pumping action. Blood flow stops and brain damage
begins within about four minutes. Death from shock is electrocution.

A defibrillator charges a capacitor and discharges it through electrodes on
the chest in an attempt to restore a coordinated rhythm. Every worker in this
industry is trained in CPR for exactly this reason, and full first-aid
training is strongly recommended.

>! Symptoms of an electric shock can be delayed. Internal burns, muscle damage
>! and heart-rhythm problems may not show for hours. Anyone who has taken a
>! shock — even one that "felt like nothing" — goes to hospital and the
>! incident gets reported.

## On the job

- Voltage across the break, zero volts across the good components: that is how
  you find an open circuit in a series string without pulling anything apart.
- A short-circuit is defined by the missing resistance, not by sparks — a
  partial short can hide for months as a hot cable.
- Protection works *because* an earth fault is a deliberate low-resistance
  short back to the supply.
- Basic protection keeps you off normally-live parts; fault protection deals
  with parts that only go live when something breaks.
`,
        quiz: [
          {
            q: "Four switches are in series with a contactor coil and the coil will not pull in. A voltmeter across the third switch reads full supply voltage while the others read about 0 V. What does that tell you?",
            options: [
              "The third switch is short-circuited",
              "The third switch is open — it is the break in the circuit",
              "The coil is short-circuited",
              "The supply voltage is too high",
            ],
            answer: 1,
            explain: "In a series path with no current flowing, the whole supply voltage appears across the open device and almost nothing across the closed ones. A shorted switch would read close to 0 V, like the healthy closed ones.",
          },
          {
            q: "Why is an earth fault to the metal frame of an appliance deliberately made a very low resistance path?",
            options: [
              "To keep the fault current small so nothing is damaged",
              "To make the frame safe to touch even while the fault persists",
              "So a large fault current flows and forces the protective device to disconnect quickly",
              "To reduce the voltage of the supply during the fault",
            ],
            answer: 2,
            explain: "Automatic disconnection relies on a high fault current. A low-resistance earth path guarantees that current, so the breaker or fuse operates in a fraction of a second. A high-resistance earth path is dangerous precisely because the device may not trip.",
          },
          {
            q: "Which of these is normally a fault condition rather than a normal operating state?",
            options: ["Open circuit", "Closed circuit", "Short-circuit", "All three are faults"],
            answer: 2,
            explain: "Open and closed are the everyday off and on states of a switched circuit. A short-circuit means current has bypassed the load through an unintended low-resistance path — always a fault, even though protection systems make deliberate use of the same effect.",
          },
          {
            q: "An RCD is fitted to a final subcircuit that already has a circuit-breaker. What does the RCD add?",
            options: [
              "It replaces the need for insulation and earthing",
              "It detects current leaking out of the circuit, typically at 30 mA, protecting people rather than cables",
              "It protects the cable against overload that the breaker cannot see",
              "It limits the supply voltage to a safe value",
            ],
            answer: 1,
            explain: "A circuit-breaker protects the wiring from overload and short-circuit; an RCD compares active and neutral current and trips on the small imbalance caused by current flowing to earth through a person. AS/NZS 3000 treats it as additional protection, not a substitute for basic protection.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "effects-of-current",
        title: "What electric current actually does",
        minutes: 10,
        simple: "Electricity is only useful because of the effects it produces: it makes heat, light, movement, chemical change, magnetism and static charge. Two of those, heat and magnetism, happen every single time current flows whether you want them or not. The same chemical effect that plates a bumper bar also eats away at copper-to-aluminium joints.",
        refs: REFS_EFFECTS,
        content: `
Nobody buys electricity. What people buy is what electricity *does* — a warm
room, a lit workshop, a compressor that turns. Every load in every circuit is
a converter, and there are only six effects to convert into.

## The two effects you always get

**Heating.** When a voltage overcomes the resistance of a conductor and
current flows, work is done and energy is spent. Some of it always appears as
heat in the conductor. Concentrate high resistance into a small space with
proper insulation and you have a radiator element. Spread the same current
through a long supply cable buried in a wall cavity and you have a fire risk.
The cure is to reduce the current or increase the conductor's cross-sectional
area — both reduce the power lost in the cable. Note also that heating raises
the conductor's temperature, which raises its resistance, which produces more
heat: a joint that has started to run hot tends to get worse, not better.

**Magnetism.** A magnetic field exists around every current-carrying
conductor. Where the field is unwanted, conductors are rerouted or kept away
from compasses and sensitive instruments; with large currents, the mechanical
force between adjacent conductors is big enough to need bracing. Where the
field is wanted, the conductor is wound into a coil — a **solenoid** — and
many turns concentrate the effect. Every relay, contactor, solenoid valve and
motor lives on this.

Heat and magnetism are always present when current flows. The other four
effects only appear when the circuit is built for them.

## The other four

| Effect | What happens | Where you see it |
|---|---|---|
| Light | Current heats a filament to incandescence, excites a gas, or drives a semiconductor junction | Incandescent lamps, fluorescent and sodium discharge lamps, LEDs |
| Motion | A current-carrying conductor in a magnetic field experiences a force | Motors, servos, relays, contactors, solenoid valves and locks |
| Chemical | Current drives ions through an electrolyte | Charging and discharging cells, electroplating, anodising, electro-erosion machining |
| Electrostatic | Charged particles are attracted to a charged surface | Electrostatic precipitators on power-station stacks, powder-coat painting, sandpaper manufacture |

Precipitators are a good example of a small effect doing serious work: the
smoke particles are charged and collected on a grid, then dropped into a chute
as pozzolanic ash for cement making, which cuts both pollution and acid rain.

## Typical uses

- **Heating.** Radiant panels, oil-filled heaters, fan heaters, industrial
  furnaces. Electric resistance heating is essentially 100 per cent efficient
  at the appliance — every watt lost in the process still ends up as heat in
  the room. What makes refrigeration and air conditioning more *cost*
  efficient for heating and cooling is that they do not create the heat, they
  move it, using a refrigerant, a compressor and fans to shift far more heat
  than the electrical energy they consume.
- **Lighting.** A century of incandescent lamps, then gas discharge
  (fluorescent, sodium, neon), now overwhelmingly LED. Each step has cut the
  proportion of the input that is wasted as heat.
- **Motion.** Anything from a servo in a disc drive to a mine winder. The same
  physics opens and closes relay and contactor contacts, and moves the
  plungers in solenoid valves and door locks.
- **Sound and radio.** A coil on a diaphragm turns an oscillating current into
  sound and, run backwards, turns sound into current. The piezoelectric effect
  does the same job in phone microphones, ultrasonic cleaners, echo sounders
  and medical ultrasound.

## The chemical effect biting back: electrolytic corrosion

The best known destructive form of the chemical effect happens when two
different metals are in contact with an electrolyte between them. In Australia
the common case is a copper conductor terminated to aluminium. Condensation or
rain containing dissolved sulphur compounds forms an electrolyte in the joint,
the two metals become electrodes, and you have accidentally built a cell — one
that is short-circuited on itself.

The metal at the higher potential becomes the anode and goes into solution,
which is a polite way of saying it corrodes away, often leaving pit holes.
The joint gets progressively worse: higher resistance, more heat, more damage,
until it fails altogether. Heat from a deteriorating joint has started fires,
so this is far more than a connection problem.

Controls:

1. Minimise the number of dissimilar-metal joints in the first place.
2. Keep moisture out — paint the joint, or use a jointing paste applied to
   both metals before termination.
3. Electroplate the parts being joined with a common metal, such as cadmium,
   so like meets like.

### Stray currents

Buried pipes and cables corrode from stray underground currents, which come
from adjacent dissimilar metals in damp ground or from a faulty installation
nearby. Bonding the tracks of electric traction systems reduces stray
currents; plastic sheathing on buried pipes and conductors limits the damage.
Corrosion concentrates at sharp bends in buried pipework, so those points get
particular attention.

### Sacrificial anodes and cathodic protection

Two established defences:

- **Sacrificial anodes.** A block of zinc bolted inside a boiler or to a
  ship's hull near the bronze propeller corrodes preferentially. Replacing a
  zinc block on a maintenance schedule is cheap; replacing a hull is not.
- **Cathodic protection.** An external d.c. supply holds the protected
  structure at a lower potential than the surrounding soil. In practice most
  corrosion is prevented when the buried metalwork sits about 0.5 V negative
  with respect to the soil around it.

AS/NZS 3000:2018 Clause 1.5.14 requires that every part of an installation be
protected against the external influences it will meet in normal service, and
corrosion and galvanic action are named among them.

## What to remember

- Heat and magnetism accompany every current; the other effects are designed
  in.
- Heat in a supply cable is waste and a hazard; heat in an element is the
  product.
- A hot joint is a failing joint — resistance rises with temperature, so the
  fault accelerates.
- Copper to aluminium plus moisture equals a self-destructing cell. Paste it,
  seal it, or avoid it.
`,
        quiz: [
          {
            q: "Which two effects of electric current are present every time current flows, whether they are wanted or not?",
            options: [
              "Light and heat",
              "Heat and magnetism",
              "Magnetism and chemical action",
              "Chemical action and electrostatic attraction",
            ],
            answer: 1,
            explain: "Current through resistance always produces heat, and a magnetic field always exists around a current-carrying conductor. Light, chemical action and electrostatic effects only appear in circuits designed to produce them.",
          },
          {
            q: "A cable inside a wall cavity is running hot. Which two measures actually reduce the heating in that cable?",
            options: [
              "Increase the supply voltage or add more insulation around the cable",
              "Reduce the current drawn or increase the conductor cross-sectional area",
              "Increase the current and shorten the run",
              "Fit a larger fuse and increase the load",
            ],
            answer: 1,
            explain: "Power lost in a cable is I squared times R. Less current, or more copper (which lowers R), both cut the loss. Extra thermal insulation makes it worse by trapping the heat, and a larger fuse simply removes the protection.",
          },
          {
            q: "A copper conductor terminated into an aluminium busbar in a damp switchroom has developed pitting and a hot joint. What is happening?",
            options: [
              "The aluminium is melting because of overload current alone",
              "Moisture has formed an electrolyte, making the two metals a short-circuited cell so the anodic metal corrodes away",
              "The copper is work-hardening and cracking",
              "Stray magnetic fields are heating the joint",
            ],
            answer: 1,
            explain: "Two dissimilar metals plus an electrolyte make a galvanic cell that is shorted through the joint itself. The higher-potential metal goes into solution, resistance climbs, and the joint heats — which is why jointing paste or plating with a common metal is specified.",
          },
          {
            q: "Why is a reverse-cycle air conditioner a more cost-efficient way to heat a room than a resistive fan heater, even though the fan heater turns nearly all its input into heat?",
            options: [
              "Because the air conditioner has a higher power rating",
              "Because the air conditioner moves existing heat from outside into the room rather than creating all of it electrically",
              "Because resistance heating wastes most of its input as light",
              "Because the air conditioner runs at a lower voltage",
            ],
            answer: 1,
            explain: "A resistance heater is limited to the heat equivalent of its electrical input. A vapour-compression system uses its electrical input to transfer heat that already exists, so the heat delivered can be several times the electrical energy consumed.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "ohms-law",
        title: "Ohm's law, and the numbers you work in",
        minutes: 12,
        simple: "Ohm's law is the one rule that ties voltage, current and resistance together: push harder and more current flows, add resistance and less flows. Written as V = I x R it can be rearranged to find whichever value you are missing. Before that, you need to be comfortable with prefixes like kilo and milli, because real values are rarely tidy whole numbers.",
        refs: REFS_OHM,
        content: `
Ohm's law is the most important single rule an electrical worker owns. It is
the reason you can predict what a circuit will do on paper, size a cable, pick
a protective device or spot an impossible meter reading. Everything later —
a.c. theory, electronics, machines — is built on it.

## First: working with very large and very small numbers

Textbook circuits use 5 ohms and 10 volts. Real ones use 1.5 megohms and 250
microamps. Three notations handle that.

### Prefixes and multipliers

| Prefix | Symbol | Multiplier |
|---|---|---|
| pico | p | 10 to the power -12 |
| nano | n | 10 to the power -9 |
| micro | u (Greek mu) | 10 to the power -6 |
| milli | m | 10 to the power -3 |
| kilo | k | 10 to the power 3 |
| mega | M | 10 to the power 6 |
| giga | G | 10 to the power 9 |
| tera | T | 10 to the power 12 |

So 1000 watts becomes 1 kilowatt, written 1 kW. 0.000 002 farads becomes
2 microfarads. Note the case: a capital M is mega and a lower-case m is
milli, a factor of a thousand million apart. Writing 250 MA when you meant
250 mA is not a typo anyone laughs at.

### Scientific notation

The digits are written with the decimal point after the first digit, followed
by a power of ten that puts the point back where it belongs.

- 200 m becomes 2 x 10 to the power 2 m
- 0.02 m becomes 2 x 10 to the power -2 m
- 25 000 m becomes 2.5 x 10 to the power 4 m

### Engineering notation

Same idea, but only powers of ten that are multiples of three are allowed, so
the result always translates straight into a prefix. The digits in front are
always between 1 and 999.

- 2000 m becomes 2 x 10 to the power 3 m, which is 2 km
- 0.002 m becomes 2 x 10 to the power -3 m, which is 2 mm
- 25 000 m becomes 25 x 10 to the power 3 m, which is 25 km

That last one shows the difference: scientific notation gives 2.5 x 10 to the
power 4, engineering notation gives 25 x 10 to the power 3. Engineers use the
second because it maps onto kilo, mega and milli without further thought.

### On a calculator

The exponent key is labelled EXP, EE, or x10 to the power x depending on the
brand. To enter 4.15 x 10 to the power 6: key the digits 4.15, press EXP, key
6. Do **not** press the multiply key first — the EXP key already means "times
ten to the power of". Use the +/- key to make the exponent negative. Most
calculators also have SCI and ENG display modes, usually reached through a
SHIFT key, that convert an answer between plain, scientific and engineering
form.

## Ohm's law

In 1826 Georg Simon Ohm connected different materials into a simple circuit,
measured the current through each one and the voltage needed to produce it,
and plotted the results. Every plot came out as a straight line through the
origin; only the *slope* changed when he changed the material. From that he
stated:

**The current flowing between two points in a circuit is directly
proportional to the potential difference between those points, and inversely
proportional to the resistance between them.**

*Directly proportional* means that when voltage goes up, current goes up in
step. *Inversely proportional* means that when resistance goes up, current
goes down.

| Quantity | Symbol | Unit | Unit symbol | Role in the circuit |
|---|---|---|---|---|
| Voltage | V | volt | V | Electrical pressure |
| Current | I | amp | A | Rate of charge flow |
| Resistance | R | ohm | Greek omega | Opposition to flow |

The three forms:

- I = V / R
- V = I x R
- R = V / I

Know all three by transposition, not by memory — you will need to transpose
far more complicated expressions later, and this is where the habit starts.

### The proportional relationships in words

- Fixed voltage, resistance increased: current falls.
- Fixed resistance, voltage increased: current rises in proportion.
- Fixed resistance, current increased: the voltage drop across that resistance
  rises in proportion. This is why pushing more current down a conductor makes
  the voltage drop along it worse — V = I x R applies to the cable just as
  much as to the load.

## Worked examples

### Example 1 — find the resistance

A lamp draws 3 A from a 6 V battery. What is its resistance?

- Known: V = 6 V, I = 3 A. Unknown: R.
- Formula: I = V / R, transposed to R = V / I
- Substitute: R = 6 / 3
- **R = 2 ohms**

### Example 2 — size a resistance for an allowable current

A 12 V circuit must not draw more than 2 A. What resistance is required?

- R = V / I = 12 / 2
- **R = 6 ohms**

### Example 3 — find the voltage

A heating element of 20 ohms is to carry 3 A. What voltage must be applied?

- V = I x R = 3 x 20
- **V = 60 V**

### Example 4 — find the current

A 10 ohm resistor has 24 V across it.

- I = V / R = 24 / 10
- **I = 2.4 A**

### Example 5 — working in prefixes

A relay coil has 240 ohms of resistance and 2 V is measured across it. What
current flows, expressed in milliamps?

- I = V / R = 2 / 240 = 0.008 33 A
- Convert: 0.008 33 A x 1000 = **8.33 mA**

### Example 6 — a job-sized number

An electric heater is rated 3.6 kW at 230 V. What current does it draw, and
what is the resistance of the element?

- Convert first: 3.6 kW = 3600 W
- I = P / V = 3600 / 230 = **15.65 A**
- R = V / I = 230 / 15.65 = **14.7 ohms**

A 15.65 A load will not sit on a 16 A circuit-breaker for long in warm
weather. Calculations like this one decide the circuit before anyone lifts a
tool.

### Example 7 — checking a suspect reading

A technician measures 230 V across a motor winding and 0.05 A through it, and
says the winding is fine. Check it:

- R = V / I = 230 / 0.05 = **4600 ohms**

A low-voltage motor winding is normally a few ohms to a few tens of ohms.
4.6 kilohms means a partly open winding or a high-resistance connection, not a
healthy motor. Ohm's law just told you the fault without dismantling anything.

## On the job

- Convert to base units before you calculate, and convert back afterwards.
- Watch the case of prefixes: M is a million times m.
- If a calculated value looks absurd, it usually is — trust the arithmetic and
  go looking for the fault it is pointing at.
- V = I x R applies to conductors, joints and switch contacts, not just to
  loads. That is the whole basis of voltage-drop testing.
`,
        quiz: [
          {
            q: "A 24 V supply is connected across a 100 ohm resistor. What current flows?",
            options: ["0.24 A", "2.4 A", "0.42 A", "4.17 A"],
            answer: 0,
            explain: "I = V / R = 24 / 100 = 0.24 A. The 2.4 A answer comes from a misplaced decimal point — always check the size of your answer against the size of the resistance.",
          },
          {
            q: "The current through a fixed resistance is doubled. What happens to the voltage drop across it?",
            options: [
              "It halves",
              "It stays the same because the resistance did not change",
              "It doubles",
              "It increases four times",
            ],
            answer: 2,
            explain: "V = I x R, so with R fixed the voltage drop is directly proportional to current — double the current, double the drop. Power, by contrast, would go up four times, because power depends on current squared.",
          },
          {
            q: "Which of these is 0.000 47 A written in engineering notation with the correct prefix?",
            options: ["4.7 x 10 to the power -4 A, or 4.7 mA", "470 microamps", "47 milliamps", "4.7 microamps"],
            answer: 1,
            explain: "Engineering notation uses powers of ten in multiples of three: 0.000 47 A = 470 x 10 to the power -6 A = 470 microamps. The first option gets the scientific notation right but then converts it wrongly, since 4.7 mA is 0.0047 A — ten times too big.",
          },
          {
            q: "An element rated 3.6 kW at 230 V reads 60 ohms on an ohmmeter. Roughly what resistance should it have?",
            options: ["5 ohms", "15 ohms", "64 ohms", "150 ohms"],
            answer: 1,
            explain: "R = V squared / P = 230 x 230 / 3600 = about 15 ohms, which agrees with I = P / V = 15.65 A and R = V / I. A reading of 60 ohms means the element or its connections are damaged; 64 ohms is what you would get by dividing 230 by 3.6 and forgetting to convert kilowatts to watts.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "power-energy-cost",
        title: "Power, energy, efficiency and what it costs",
        minutes: 13,
        simple: "Power is how fast a circuit uses energy, measured in watts. Energy is power multiplied by how long it runs, which is what the bill is based on — one kilowatt for one hour is one kilowatt hour. Nothing is perfect, so some of what goes in comes out as waste heat, and efficiency is just the fraction that made it through to the useful output.",
        refs: REFS_POWER,
        content: `
Ohm's law tells you how much current a circuit draws. Power tells you how hard
it is working, how hot it will get, what size cable and protective device it
needs, and what it costs to run. Every one of those is a decision you have to
justify.

## Where power comes from: force, work and energy

The electrical formulas make more sense if the mechanical ones behind them are
clear.

- **Force** is what changes an object's motion: F = m x a, where m is mass in
  kilograms and a is acceleration in metres per second squared. The unit is
  the **newton (N)**. When an object is being raised or lowered, the
  acceleration is gravity, a constant 9.81 m/s squared, given its own symbol
  g — so F = m x g.
- **Work and energy** are the same quantity, whether the context is
  mechanical, chemical or electrical. Work done is force multiplied by the
  distance moved: W = F x d, in **joules (J)**. Energy can be spent doing work
  or stored — pumping water uphill into a dam takes work, and the full dam is
  then a store of energy to be released later.
- **Power** is the *rate* of doing work: P = W / t, in **watts (W)**. One watt
  is one joule per second.

## Electrical power

Current is already a rate — coulombs per second — so multiplying it by the
pressure driving it gives the rate of energy conversion directly:

- **P = V x I**

Often you know resistance instead of one of those. Substitute Ohm's law:

- Since I = V / R, then P = V x (V / R), so **P = V squared / R**
- Since V = I x R, then P = (I x R) x I, so **P = I squared x R**

Practise deriving those two rather than memorising them. It is the same
substitution skill you will use on every formula from here on.

What the three forms tell you:

- With R fixed, doubling the voltage doubles the current, so power goes up
  **four times** — power follows voltage squared.
- With R fixed, doubling the current also multiplies power by four — power
  follows current squared.
- Increase R and current falls, so power falls. Power is inversely
  proportional to resistance for a fixed applied voltage.

### Example 1 — power from voltage and resistance

A 12 V circuit has a 4 ohm load.

- P = V squared / R = 12 x 12 / 4 = 144 / 4 = **36 W**

Double the load resistance to 8 ohms:

- P = 144 / 8 = **18 W**
- Check with Ohm's law: I = V / R = 12 / 8 = 1.5 A, then P = V x I = 12 x 1.5
  = 18 W. The two methods agree.

### Example 2 — current drawn by two headlamps

A car has a 12 V battery and two 50 W headlamps. What current flows with both
alight?

- Total power P = 2 x 50 = 100 W
- P = V x I, transposed: I = P / V = 100 / 12
- **I = 8.33 A**

### Example 3 — a heater with four elements

A 12 V portable cabin heater has four 45 W elements. Find (a) the circuit
resistance and (b) the current drawn.

(a) Total power:

- P total = 4 x 45 = 180 W
- P = V squared / R, transposed: R = V squared / P = 144 / 180
- **R = 0.8 ohms**

(b) Current:

- I = P / V = 180 / 12
- **I = 15 A**
- Check: P = I squared x R = 15 x 15 x 0.8 = 225 x 0.8 = 180 W. Correct.

## Power ratings of devices

Every device carries a rating — the power it can convert, or dissipate as
heat, without destroying itself. The rating tells you two things: the rate at
which it does its work, and how much heat per second it can shed. Exceed it
and the device burns out, and the time to failure shortens dramatically as the
overload grows. A resistor 10 per cent over rating may run for years; the same
resistor at four times rating lasts seconds.

### Example 4 — rating and time

A 1 kW motor lifts a 1000 kg load 1 metre. How long does it take?

- F = m x g = 1000 x 9.81 = 9810 N
- W = F x d = 9810 x 1 = 9810 J
- P = W / t, transposed: t = W / P = 9810 / 1000
- **t = 9.81 s**

Fit a 2 kW motor and it takes half as long. The energy moved is identical —
only the rate changed. That is the difference between energy and power in one
line.

## Electrical energy

Energy is power multiplied by time: W = P x t. In joules, t is in seconds. But
appliances are rated in watts and run for hours, so the trade unit is the
**kilowatt hour (kWh)** — kilowatts multiplied by hours.

- 1 kWh = 3.6 x 10 to the power 6 J = **3.6 MJ**

### Example 5 — a lamp over a month

A 100 W lamp runs 6 hours a day for 30 days. Find the energy used in joules
and in kilowatt hours.

- Time in seconds: 30 x 6 x 60 x 60 = 648 000 s
- W = P x t = 100 x 648 000 = 64 800 000 J = **64.8 MJ**
- In kWh: 64 800 000 / 3 600 000 = **18 kWh**
- Cross-check the easy way: 0.1 kW x (30 x 6) hours = 0.1 x 180 = 18 kWh.

### Example 6 — a heater over winter

A 2400 W heater runs an average of 6 hours a day from 1 June to 31 August.

- Days: 30 + 31 + 31 = 92
- Hours: 92 x 6 = 552 h
- Power in kilowatts: 2400 / 1000 = 2.4 kW
- W = P x t = 2.4 x 552 = **1324.8 kWh**

At an assumed tariff of 30 cents per kilowatt hour:

- Cost = 1324.8 x 0.30 = **$397.44 for the winter**

Tariffs vary by retailer, state and time of day, so always use the customer's
actual rate from their bill. The method does not change.

### Example 7 — energy wasted in a cable

A motor draws 15 A through a 2.5 mm squared circuit run 80 m each way, using
cable with a resistance of 0.7 ohms per 100 m. Over a 24 hour period, how much
energy does that cable waste?

- Total conductor length: 80 x 2 = 160 m
- Cable resistance: R = 1.6 x 0.7 = 1.12 ohms
- Power lost: P = I squared x R = 15 x 15 x 1.12 = 225 x 1.12 = **252 W**
- Energy in 24 h: 0.252 kW x 24 = **6.05 kWh per day**

That 252 W is pure heat in a wall or conduit, paid for and useless, and it also
means a voltage drop of V = I x R = 15 x 1.12 = 16.8 V that the motor never
sees. Sizing cable is an energy decision, not just a safety one.

## Efficiency and losses

Every conversion loses something, nearly always as heat from friction — the
friction of electrons in a conductor, bearings in a motor, air drag and noise.

- Output = input - losses, or **P out = P in - P losses**
- **Efficiency % = (output / input) x 100**

Output is never greater than input, so efficiency is never 100 per cent.

### Example 8 — motor input and running energy

A motor is rated 5 kW output and is 89 per cent efficient. Find the input
power, and the energy used in 4 hours at full load.

- P in = P out x (100 / efficiency) = 5 x (100 / 89)
- **P in = 5.62 kW**
- Losses = 5.62 - 5 = 0.62 kW, all of it heat
- Energy = 5.62 x 4 = **22.5 kWh**

### Why the losses matter beyond the bill

Low efficiency means more input power for the same output, which at a fixed
voltage means more current. More current in the wiring means more heat, and
heat is what breaks down insulation — first causing short-circuits between
conductors, and eventually open circuits when conductors melt. The same chain
applies inside machines: a motor or transformer with damaged bearings or
blocked cooling runs hotter, its insulation degrades, and it fails. High
efficiency is cheaper, cooler, longer-lived and lower in emissions.

## Measuring power in practice

Multiply a voltmeter reading by an ammeter reading, or use a wattmeter, which
has a current circuit in series with the load and a voltage circuit across the
supply and indicates watts directly.

## What to remember

- P = V x I, P = V squared / R, P = I squared x R — derive, do not memorise.
- Power depends on the *square* of current, which is why a small overload
  heats a cable so much more than you would expect.
- Energy = power x time. 1 kWh = 3.6 MJ.
- Efficiency = output / input x 100, always less than 100 per cent, and the
  losses always turn up as heat somewhere you have to manage.
`,
        quiz: [
          {
            q: "A 230 V element draws 8 A. What power does it convert, and what energy does it use in 5 hours?",
            options: [
              "1840 W and 9.2 kWh",
              "1840 W and 1.84 kWh",
              "28.75 W and 0.144 kWh",
              "1.84 kW and 9200 kWh",
            ],
            answer: 0,
            explain: "P = V x I = 230 x 8 = 1840 W = 1.84 kW. Energy = 1.84 kW x 5 h = 9.2 kWh. The second option confuses power with energy by forgetting to multiply by the running time.",
          },
          {
            q: "The current in a cable rises from 10 A to 20 A. What happens to the power wasted as heat in that cable?",
            options: ["It doubles", "It stays the same", "It rises four times", "It halves"],
            answer: 2,
            explain: "Cable loss is P = I squared x R, so doubling the current multiplies the loss by four. This is why a modest-looking overload can cook a cable, and why voltage drop and cable heating are always calculated from current squared.",
          },
          {
            q: "A pump motor delivers 3 kW of shaft power and is 80 per cent efficient. What is its electrical input power?",
            options: ["2.4 kW", "3.0 kW", "3.75 kW", "4.8 kW"],
            answer: 2,
            explain: "P in = P out x 100 / efficiency = 3 x 100 / 80 = 3.75 kW, with 0.75 kW appearing as heat. Multiplying output by 0.8 instead (giving 2.4 kW) would mean the motor produced more than it consumed, which is impossible.",
          },
          {
            q: "Why is the kilowatt hour, rather than the joule, used for selling electricity?",
            options: [
              "Because a joule is not an SI unit",
              "Because appliances are rated in watts and run for hours, so kW multiplied by hours gives a number of workable size",
              "Because the kilowatt hour measures power rather than energy",
              "Because joules cannot be measured by a meter",
            ],
            answer: 1,
            explain: "Both units measure energy — 1 kWh is 3.6 MJ. The kWh simply matches the way equipment is rated and used, keeping the numbers manageable; the winter heater example was 1324.8 kWh, which in joules would be nearly 4.8 thousand million.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "series-circuits",
        title: "Series circuits, Kirchhoff's voltage law and real sources",
        minutes: 13,
        simple: "In a series circuit everything is joined end to end like carriages in a train, so the same current passes through every part. Each part takes a share of the supply voltage, and the shares always add up to what the supply provided. Break one part and everything stops, which is exactly how old Christmas lights used to fail.",
        refs: REFS_SERIES,
        content: `
A series circuit has one path. Components sit one after the other like
carriages on a train, and the current that leaves the source must pass through
every one of them before it returns. That single fact generates all the rules.

## The four series rules

**Current is the same everywhere.** There is nowhere else for it to go:

- I total = I1 = I2 = I3 = ... In

So 5 A entering a series circuit is 5 A in every component and 5 A back at the
source.

**Voltages add up to the supply.** Since current flows through every
component, Ohm's law says every component must have a voltage drop across it.
The circuit cannot drop more than it was given, so the drops must total the
applied EMF. Gustav Kirchhoff wrote this down in 1845, and it is now
**Kirchhoff's Voltage Law (KVL)**: in any circuit, the algebraic sum of the
applied EMFs equals the algebraic sum of the voltage drops.

- E total = V1 + V2 + V3 + ... Vn

**Resistances add.** From KVL and Ohm's law:

- R total = R1 + R2 + R3 + ... Rn

The equivalent resistance of a series group is always **larger** than the
biggest single resistor in it.

**Powers add.**

- P total = P1 + P2 + P3 + ... Pn

## Worked example — a full VIRP solution

Four resistors of 2, 4, 6 and 8 ohms are connected in series. The potential
difference measured across the 4 ohm resistor is 10 V. Find the current, all
the voltage drops, the supply voltage, and the power in each resistor.

**Step 1 — current.** The 4 ohm resistor gives us a complete pair of values:

- I = V2 / R2 = 10 / 4 = **2.5 A**

Because it is a series circuit, that 2.5 A is the current everywhere.

**Step 2 — the other voltage drops.** V = I x R for each:

- V1 = 2.5 x 2 = 5 V
- V3 = 2.5 x 6 = 15 V
- V4 = 2.5 x 8 = 20 V

**Step 3 — supply voltage.** By KVL:

- E = 5 + 10 + 15 + 20 = **50 V**
- Check the other way: R total = 2 + 4 + 6 + 8 = 20 ohms, so
  E = I x R total = 2.5 x 20 = 50 V. Agrees.

**Step 4 — power.** P = I squared x R for each:

- P1 = 2.5 x 2.5 x 2 = 12.5 W
- P2 = 6.25 x 4 = 25 W
- P3 = 6.25 x 6 = 37.5 W
- P4 = 6.25 x 8 = 50 W
- P total = 12.5 + 25 + 37.5 + 50 = **125 W**
- Check: P = E x I = 50 x 2.5 = 125 W. Agrees.

| Component | R (ohms) | I (A) | V (V) | P (W) |
|---|---|---|---|---|
| R1 | 2 | 2.5 | 5 | 12.5 |
| R2 | 4 | 2.5 | 10 | 25 |
| R3 | 6 | 2.5 | 15 | 37.5 |
| R4 | 8 | 2.5 | 20 | 50 |
| Total | 20 | 2.5 | 50 | 125 |

Notice the pattern: the largest resistance takes the largest share of voltage
and dissipates the most power. In a series circuit, voltage divides in
proportion to resistance.

## The voltage divider

That proportion is worth a formula of its own. For a resistor Rx in a series
string across a supply Vt:

- **Vx = Vt x (Rx / R total)**

### Worked example

A 12 V supply feeds a 1 kilohm resistor in series with a 3 kilohm resistor.
What voltage appears across each?

- R total = 1000 + 3000 = 4000 ohms
- I = V / R = 12 / 4000 = 0.003 A = 3 mA
- V1 = 3 mA x 1 kilohm = 0.003 x 1000 = 3 V
- V2 = 0.003 x 3000 = 9 V
- Or directly: V2 = 12 x (3000 / 4000) = **9 V**
- Check: 3 + 9 = 12 V, as KVL requires.

Dividers are everywhere: setting a reference voltage for a control board,
scaling a signal down so a meter can read it, and every resistive sensor —
a thermistor or a potentiometer in series with a fixed resistor produces a
voltage that varies with temperature or position.

## A real source: EMF, internal resistance and terminal voltage

An ideal source holds its voltage no matter what you draw. Real ones do not,
because the source itself has resistance — the electrolyte and plates of a
cell, the windings of a generator. That **internal resistance (r)** sits in
series inside the source, so:

- **V terminal = E - (I x r)**

### Worked example 1 — a car battery on start

A battery has an EMF of 12.6 V and an internal resistance of 0.02 ohms. The
starter motor draws 150 A.

- Volts dropped inside the battery: I x r = 150 x 0.02 = 3 V
- V terminal = 12.6 - 3 = **9.6 V**

That is why headlights dim while cranking, and why a battery with a rising
internal resistance will read a healthy 12.6 V at rest and collapse the moment
it is loaded. A voltage test under load tells you far more than an open-circuit
test.

### Worked example 2 — a torch cell

A 1.5 V cell with 0.5 ohms internal resistance feeds a 4 ohm lamp.

- Total circuit resistance: 4 + 0.5 = 4.5 ohms
- I = E / R total = 1.5 / 4.5 = 0.333 A
- V terminal = 1.5 - (0.333 x 0.5) = 1.5 - 0.167 = **1.33 V**
- Power in the lamp: I squared x R = 0.111 x 4 = 0.444 W
- Power wasted inside the cell: 0.111 x 0.5 = 0.056 W, which is why cells get
  warm in a heavily loaded torch.

## Cells and batteries

A cell converts chemical energy into electrical energy. A battery is cells
connected together — in series to add voltage, in parallel to share current.
Six 2 V lead-acid cells in series give the familiar 12 V battery, and their
internal resistances add too.

| Type | Behaviour | Examples |
|---|---|---|
| Primary cell | Fully charged when assembled, cannot be recharged; stops when the chemicals are used up | Alkaline and zinc-carbon cells descended from the Leclanche cell |
| Secondary cell | Assembled with little or no potential difference, must be charged, and can be recharged by reversing the current | Lead-acid, nickel-metal-hydride, lithium-ion |
| Fuel cell | Has an anode, cathode and electrolyte like a cell, but is fed a fuel — hydrogen, methane or LPG — and runs as long as fuel is supplied | Proton exchange membrane cells used for peak levelling, cogeneration and fuel-cell electric vehicles |

### The voltaic cell, and why it fades

A simple voltaic (galvanic) cell is a copper electrode and a zinc electrode in
a dilute acid electrolyte in a non-conducting container. Only two conditions
are needed for a potential difference: the electrodes must be different metals,
and they must sit in an acid, alkali or salt solution.

In dilute hydrochloric acid, the acid separates into positive hydrogen ions
and negative chlorine ions. The chlorine combines with zinc atoms, leaving
spare electrons on the zinc, so the zinc electrode becomes negative; the zinc
chloride formed sinks to the bottom. Hydrogen ions travel to the copper
electrode and take electrons from it, so the copper becomes positive, and the
neutralised hydrogen bubbles off. The difference between the two charges is
the cell potential, typically about **1.1 V**.

It is not a practical cell, because hydrogen bubbles blanket the copper
electrode and stop the reaction. This is **polarisation**, and it raises the
cell's internal resistance and drops its output voltage — the same internal
resistance you just calculated with.

## Faults in series circuits

- **One component goes open circuit and the whole circuit stops.** There is
  only one path, so a broken lamp, a burnt joint, a tripped overload or an
  open coil kills everything downstream. Fault-find with a voltmeter: the full
  supply appears across the open component.
- **One component shorts out and every other component gets more.** With less
  total resistance, current rises and the remaining components must share the
  whole supply voltage. They are then over-volted and over-current, so series
  components must be chosen to survive fault conditions as well as normal ones.
- Series connection is not used for distribution, because adding or removing
  one load changes the voltage on every other load.

Where series *is* used: control circuits. Every safety and control contact in
a rung — thermostat, high and low pressure switches, overload contacts — sits
in series with the contactor coil, so any one of them opening stops the plant.

## On the job

- Find a complete pair of values for one component and you can solve the whole
  series circuit from it.
- Voltage divides in proportion to resistance; current does not divide at all.
- Always cross-check: the drops must total the supply, and the powers must
  total P = E x I.
- Test batteries under load. Internal resistance only shows itself when
  current flows.
`,
        quiz: [
          {
            q: "Three resistors of 10, 20 and 30 ohms are in series across a 120 V supply. What is the voltage across the 20 ohm resistor?",
            options: ["20 V", "24 V", "40 V", "60 V"],
            answer: 2,
            explain: "R total = 60 ohms, so I = 120 / 60 = 2 A, and V = I x R = 2 x 20 = 40 V. The divider formula gives the same result: 120 x 20/60 = 40 V. Note the drops 20 V, 40 V and 60 V total the 120 V supply, as Kirchhoff's voltage law requires.",
          },
          {
            q: "A battery reads 12.6 V with nothing connected but falls to 8 V when the starter draws current. What does that indicate?",
            options: [
              "The battery EMF has dropped permanently",
              "The internal resistance of the battery is high, so a large I x r drop appears inside it under load",
              "The starter motor is short-circuited",
              "The voltmeter is faulty because it read correctly before",
            ],
            answer: 1,
            explain: "Terminal voltage = EMF - I x r. A healthy open-circuit reading with a collapse under load is the classic signature of a rising internal resistance, which is why batteries are tested under load. A shorted starter would normally operate the protection or show other obvious symptoms.",
          },
          {
            q: "In a series circuit of four lamps, one lamp is accidentally short-circuited by a wiring fault. What happens to the remaining three?",
            options: [
              "Nothing changes, because the supply voltage is unchanged",
              "They go out, because the circuit is now incomplete",
              "They each receive a higher voltage and carry more current, and may be damaged",
              "They each receive a lower voltage because the supply is loaded more heavily",
            ],
            answer: 2,
            explain: "Shorting one component reduces total resistance, so current rises, and the remaining components must share the entire supply voltage between fewer of them. Both effects push them beyond their ratings, which is why series components must be rated for fault conditions too.",
          },
          {
            q: "Why does a simple copper-zinc voltaic cell lose output after a short time in use?",
            options: [
              "The electrolyte freezes",
              "Hydrogen bubbles coat the copper electrode, a process called polarisation, which raises the internal resistance",
              "The zinc electrode becomes positively charged and reverses the cell",
              "The container becomes conductive",
            ],
            answer: 1,
            explain: "Hydrogen collecting on the copper electrode blocks further ions from taking electrons there. That is polarisation: internal resistance rises and terminal voltage falls. The zinc does corrode away over time, but it stays the negative electrode throughout.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "parallel-circuits",
        title: "Parallel circuits, Kirchhoff's current law and current division",
        minutes: 12,
        simple: "In a parallel circuit each load gets its own path across the same two connection points, so every load sees the full supply voltage and takes whatever current it needs. Like several taps off the one water main: opening another tap does not change the pressure at the others, it just increases the total flow. That is why houses are wired this way.",
        refs: REFS_PARALLEL,
        content: `
Every power circuit you will ever install is a parallel circuit. Each load
hangs across the same two points, gets the full supply voltage, and draws the
current its own resistance allows. Understanding why is the difference between
wiring by rote and wiring by design.

## The four parallel rules

**Voltage is the same across every branch.** A parallel circuit needs only two
connection points, called nodes. Everywhere on a node is at the same
potential, so anything connected between the two nodes has the same voltage
across it, no matter where you measure.

- V total = V1 = V2 = V3 = ... Vn

**Currents add.** Each branch draws its own current according to Ohm's law,
and they recombine at the node to make the total. Kirchhoff stated it as
**Kirchhoff's Current Law (KCL)**: the sum of the currents entering a junction
equals the sum of the currents leaving it. Current cannot pile up at a
junction — what goes in must come out.

- I total = I1 + I2 + I3 + ... In

**Resistances combine reciprocally.** Every extra branch offers another path,
so more current flows for the same voltage, which means *less* total
resistance.

- 1 / R total = 1 / R1 + 1 / R2 + 1 / R3 + ... 1 / Rn

The equivalent resistance of a parallel group is always **smaller than the
smallest branch**. If your answer is not, you have made a mistake — usually by
forgetting to invert at the end.

**Powers still add.**

- P total = P1 + P2 + P3 + ... Pn

### Two shortcuts worth knowing

- **Two resistors only:** R total = (R1 x R2) / (R1 + R2), the product over
  the sum. For 6 ohms and 3 ohms: (6 x 3) / (6 + 3) = 18 / 9 = **2 ohms**.
- **N equal resistors:** R total = R / N. Four 100 ohm resistors in parallel
  give 100 / 4 = **25 ohms**.

## Worked example 1 — total resistance

Find the equivalent resistance of 36 ohms, 24 ohms and 18 ohms in parallel.

- 1 / R total = 1/36 + 1/24 + 1/18
- 1 / R total = 0.027 78 + 0.041 67 + 0.055 56 = 0.125
- R total = 1 / 0.125 = **8 ohms**

Sanity check: 8 ohms is less than 18 ohms, the smallest branch. Correct.

## Worked example 2 — current division

A 12 V supply feeds two branches, 6 ohms and 3 ohms.

- I1 = V / R1 = 12 / 6 = **2 A**
- I2 = V / R2 = 12 / 3 = **4 A**
- I total = 2 + 4 = **6 A** (Kirchhoff's current law)
- Check with equivalent resistance: R total = 2 ohms, so
  I total = 12 / 2 = 6 A. Agrees.

The lower-resistance branch takes the larger share of the current — the exact
opposite of a series circuit, where the larger resistance takes the larger
share of the voltage. Current divides in inverse proportion to resistance.

## Worked example 3 — a full four-branch solution

A parallel circuit is supplied with a total current of 1.5 A. What is known:
branch 1 has a resistance of 12 ohms, branch 2 carries 300 mA, branch 3 uses
1.5 W, and branch 4 has 10 V across it. Find every value.

**Step 1 — the supply voltage.** Branch 4 has 10 V across it, and in a
parallel circuit every branch has the same voltage. So the supply is **10 V**
and every branch has 10 V across it.

**Step 2 — branch 1.**

- I1 = V / R1 = 10 / 12 = **0.833 A**
- P1 = V x I1 = 10 x 0.833 = **8.33 W**

**Step 3 — branch 2.** I2 = 300 mA = 0.3 A.

- R2 = V / I2 = 10 / 0.3 = **33.3 ohms**
- P2 = V x I2 = 10 x 0.3 = **3 W**

**Step 4 — branch 3.** P3 = 1.5 W.

- I3 = P3 / V = 1.5 / 10 = **0.15 A**
- R3 = V / I3 = 10 / 0.15 = **66.7 ohms**

**Step 5 — branch 4 by KCL.** The four branch currents must total 1.5 A.

- I4 = 1.5 - (0.833 + 0.3 + 0.15) = 1.5 - 1.283 = **0.217 A**
- R4 = V / I4 = 10 / 0.217 = **46.1 ohms**
- P4 = V x I4 = 10 x 0.217 = **2.17 W**

**Step 6 — totals and checks.**

- R total = V / I total = 10 / 1.5 = **6.67 ohms** (less than 12 ohms, the
  smallest branch — correct)
- P total = 8.33 + 3 + 1.5 + 2.17 = **15 W**
- Check: P = V x I total = 10 x 1.5 = 15 W. Agrees.

| Branch | R (ohms) | V (V) | I (A) | P (W) |
|---|---|---|---|---|
| 1 | 12 | 10 | 0.833 | 8.33 |
| 2 | 33.3 | 10 | 0.3 | 3 |
| 3 | 66.7 | 10 | 0.15 | 1.5 |
| 4 | 46.1 | 10 | 0.217 | 2.17 |
| Total | 6.67 | 10 | 1.5 | 15 |

The method is always the same: use the shared voltage to fill in one value per
branch, then Ohm's law across each branch, then KCL to pick up whatever is
left.

## Worked example 4 — a domestic circuit

Three appliances are plugged into a 230 V circuit: a 2400 W heater, a 600 W
fridge and a 60 W lamp.

- Heater: I = P / V = 2400 / 230 = 10.43 A
- Fridge: I = 600 / 230 = 2.61 A
- Lamp: I = 60 / 230 = 0.26 A
- I total = 10.43 + 2.61 + 0.26 = **13.3 A**
- Equivalent resistance: R = V / I = 230 / 13.3 = **17.3 ohms**

Add another appliance and the voltage on the others does not change — only the
total current climbs, which is exactly what the circuit-breaker is watching.

## Why distribution is parallel

- Each load gets the same voltage, so every appliance in the country can be
  built for the one rated voltage. In Australia the nominal supply is
  **230 V a.c.**
- Loads can be added or removed without disturbing the others, as long as the
  supply capacity and the protective device rating are not exceeded.
- One load failing open circuit does not stop the rest.

## Faults in parallel circuits

- **A branch goes open circuit.** Only that branch stops. The others still
  have the same voltage across them and keep working. The total current falls
  by the amount the dead branch used to draw — which is how you spot the fault
  from the switchboard: less current than the plant should be drawing.
- **A branch short-circuits.** The voltage on every branch initially collapses,
  because the fault current pulls the supply down. Provided each branch has
  its own protection, the faulty branch is disconnected by its own fuse or
  breaker and everything else recovers. That is the argument for individual
  circuit protection rather than one big device.
- **Total current is the diagnostic.** Because branch currents add, a clamp
  meter on the supply conductor tells you whether the whole system is drawing
  what it should.

## What to remember

- Same voltage, currents add, resistance combines reciprocally and always
  comes out lower than the smallest branch.
- Current divides in inverse proportion to resistance.
- A parallel branch failing open is invisible to its neighbours but visible on
  the total current.
- Individual protection on each branch is what stops one fault taking out the
  whole installation.
`,
        quiz: [
          {
            q: "Three resistors of 20, 30 and 60 ohms are connected in parallel. What is the equivalent resistance?",
            options: ["110 ohms", "36.7 ohms", "10 ohms", "3.7 ohms"],
            answer: 2,
            explain: "1/RT = 1/20 + 1/30 + 1/60 = 0.05 + 0.0333 + 0.0167 = 0.1, so RT = 10 ohms. The 110 ohm answer comes from adding as if in series; 3.7 ohms comes from forgetting to invert only once. Any correct answer must be below 20 ohms, the smallest branch.",
          },
          {
            q: "Two branches, 4 ohms and 12 ohms, are connected across the same 24 V supply. Which branch carries more current and why?",
            options: [
              "The 12 ohm branch, because higher resistance means higher voltage",
              "The 4 ohm branch, because with the same voltage across both, current is inversely proportional to resistance",
              "They carry equal current, because it is a parallel circuit",
              "It depends on which branch is connected first",
            ],
            answer: 1,
            explain: "Both have 24 V across them, so I = 24/4 = 6 A and 24/12 = 2 A. Current divides in inverse proportion to resistance. Equal currents happen only when the branch resistances are equal.",
          },
          {
            q: "A lighting circuit with six luminaires in parallel loses one lamp to an open-circuit filament. What is measured at the switchboard?",
            options: [
              "Zero current, because the circuit is now open",
              "The same current as before, because the supply voltage has not changed",
              "A slightly lower total current, while the other five lamps operate normally",
              "A higher current, because the remaining lamps share the load",
            ],
            answer: 2,
            explain: "Each branch is independent and still has full voltage across it, so the other five are unaffected. Only the failed branch's current disappears from the total, which is why an unexpectedly low supply current is a useful clue that something has dropped off.",
          },
          {
            q: "Why does adding another appliance to a 230 V power circuit not reduce the voltage available to the appliances already connected?",
            options: [
              "Because each appliance has its own transformer",
              "Because the appliances are in parallel across the same two nodes, so they all sit at the supply voltage; only the total current increases",
              "Because the circuit-breaker compensates for the extra load",
              "Because voltage divides equally between all appliances in a circuit",
            ],
            answer: 1,
            explain: "In parallel, every branch bridges the same two nodes and therefore has the same potential difference across it. The extra load simply draws extra current. In practice a small extra volt drop appears in the supply cable, which is precisely why cable size and volt drop are calculated.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "compound-circuits",
        title: "Compound (series-parallel) circuits and equivalent resistance",
        minutes: 12,
        simple: "Most real circuits are a mixture: some parts in series, some in parallel. The trick is to replace each group with one resistor that behaves the same way, keep simplifying until only one resistor is left, work out the total current, then expand back out step by step to find the voltage and current in each original part.",
        refs: REFS_COMPOUND,
        content: `
Real circuits are rarely purely series or purely parallel. A compound circuit —
also called a series-parallel or combination circuit — has both, and it is by
far the most common type you will meet. The good news is that no new laws are
needed: Ohm's law, KVL and KCL still do all the work. What you need is a
method.

## Equivalent resistance

Any group of resistors can be replaced, on paper, by one resistor drawing the
same current from the same voltage. That stand-in is the **equivalent
resistance**, usually written R E. Simplifying a circuit means repeatedly
finding equivalent resistances until the whole thing is one resistor across
the supply.

Two rules do the reducing:

- Components clearly in series: add them.
- Components clearly across the same two nodes: combine them reciprocally, or
  use product over sum for a pair.

## The method

1. Redraw the circuit if it is not obvious what is in series with what. Follow
   the wires, not the layout of the page.
2. Reduce the deepest group first — usually a parallel pair — to an equivalent
   resistance.
3. Combine that result with anything in series with it.
4. Repeat until one resistor remains. That is R total.
5. Find the total current: I total = E / R total.
6. Work back outwards. The total current flows through every *series* element,
   so use V = I x R to find its voltage drop. Whatever supply voltage is left
   appears across the parallel group.
7. Use the parallel group's voltage with each branch's own resistance to find
   each branch current.
8. Check: branch currents must sum to the current entering the group, and all
   the voltage drops must sum to the supply.

## Worked example 1

A 12 V supply feeds R1 = 4 ohms in series with a parallel pair, R2 = 6 ohms and
R3 = 12 ohms.

**Reduce the parallel pair:**

- R P = (R2 x R3) / (R2 + R3) = (6 x 12) / (6 + 12) = 72 / 18 = **4 ohms**

**Total resistance:**

- R total = R1 + R P = 4 + 4 = **8 ohms**

**Total current:**

- I total = E / R total = 12 / 8 = **1.5 A**

**Expand back out:**

- Drop across R1: V1 = I total x R1 = 1.5 x 4 = **6 V**
- Voltage across the parallel group: V P = 12 - 6 = **6 V** (or V P = 1.5 x 4)
- I2 = V P / R2 = 6 / 6 = **1 A**
- I3 = V P / R3 = 6 / 12 = **0.5 A**
- Check by KCL: 1 + 0.5 = 1.5 A, the total current. Correct.

**Power:**

- P1 = I squared x R1 = 1.5 x 1.5 x 4 = 9 W
- P2 = V P squared / R2 = 36 / 6 = 6 W
- P3 = 36 / 12 = 3 W
- P total = 9 + 6 + 3 = **18 W**
- Check: P = E x I total = 12 x 1.5 = 18 W. Correct.

| Component | R (ohms) | V (V) | I (A) | P (W) |
|---|---|---|---|---|
| R1 (series) | 4 | 6 | 1.5 | 9 |
| R2 (branch) | 6 | 6 | 1 | 6 |
| R3 (branch) | 12 | 6 | 0.5 | 3 |
| Total | 8 | 12 | 1.5 | 18 |

## Worked example 2

A 24 V supply feeds R1 = 10 ohms in series with a parallel combination of
R2 = 30 ohms and R3 = 60 ohms.

- R P = (30 x 60) / (30 + 60) = 1800 / 90 = **20 ohms**
- R total = 10 + 20 = **30 ohms**
- I total = 24 / 30 = **0.8 A**
- V1 = 0.8 x 10 = **8 V**
- V P = 24 - 8 = **16 V**
- I2 = 16 / 30 = **0.533 A**
- I3 = 16 / 60 = **0.267 A**
- KCL check: 0.533 + 0.267 = 0.8 A. Correct.
- P total = E x I = 24 x 0.8 = **19.2 W**, made up of 6.4 W in R1, 8.53 W in
  R2 and 4.27 W in R3.

Notice how the answers move: the parallel group is 20 ohms, twice R1, so it
takes twice the voltage. Compound circuits are still governed by the same
proportional thinking.

## Worked example 3 — the one you meet on site

A supply of 230 V feeds two heating elements in parallel through a long cable
whose total resistance (both conductors) is 1 ohm. Each element is 46 ohms.

- Elements in parallel: R P = 46 / 2 = **23 ohms**
- R total = 1 + 23 = **24 ohms**
- I total = 230 / 24 = **9.58 A**
- Volt drop in the cable: V cable = 9.58 x 1 = **9.58 V**
- Voltage actually reaching the elements: 230 - 9.58 = **220.4 V**
- Power in the elements: P = V squared / R = 220.4 x 220.4 / 23 = **2112 W**
- Power wasted heating the cable: P = I squared x R = 9.58 x 9.58 x 1 =
  **91.8 W**
- Total drawn from the supply: 2112 + 92 = 2204 W, and as a check
  P = V x I = 230 x 9.58 = 2203 W. Agrees within rounding.

Two lessons out of one calculation. First, the load never gets the nameplate
voltage — the cable takes its share, and at 220.4 V instead of 230 V the
elements deliver about 8 per cent less heat than their rating. Second, 92 W is
being spent heating a cable inside a wall. This is precisely why volt drop is
calculated before a long run is installed.

## Checks that catch mistakes

- Every parallel equivalent must be smaller than its smallest branch.
- Every series total must be larger than its largest component.
- Voltage drops around any loop must add up to the supply.
- Branch currents must add up to the current entering the node.
- Individual powers must add up to E x I total.

If all five agree, your solution is almost certainly right. If one disagrees,
you have found where the error is.

## Beyond compound: complex circuits

When a circuit cannot be untangled by series and parallel rules — typically
because it has more than one source, or a bridge arrangement — it is called a
**complex** circuit, and it needs mesh or nodal analysis built on the same two
Kirchhoff laws. Recognising that a circuit is complex, rather than forcing
series-parallel rules onto it, is a skill in itself.

## Where you meet compound circuits

- Any final subcircuit: cable resistance in series with parallel loads.
- Control circuits: a series safety string feeding parallel coils and
  indicator lamps.
- Motor control: contactor coil in series with its holding contacts, in
  parallel with other rungs across the control supply.
- Electronic power supplies: dividers loaded by parallel circuitry.

## On the job

- Redraw before you calculate. Most compound-circuit errors are drawing errors.
- Reduce inwards, then expand outwards, and write each intermediate value down.
- Total current flows through the series elements; only the branch currents
  divide.
- Do the five checks. They cost thirty seconds and they catch nearly everything.
`,
        quiz: [
          {
            q: "A 20 ohm resistor is in series with two 40 ohm resistors that are in parallel with each other, across a 60 V supply. What is the total current?",
            options: ["0.6 A", "1.5 A", "3 A", "0.75 A"],
            answer: 1,
            explain: "The parallel pair is 40/2 = 20 ohms, so R total = 20 + 20 = 40 ohms and I = 60/40 = 1.5 A. Adding all three resistances in series (100 ohms, giving 0.6 A) is the usual mistake — the parallel pair must be reduced first.",
          },
          {
            q: "In the circuit above, what is the voltage across the parallel pair?",
            options: ["60 V", "40 V", "30 V", "20 V"],
            answer: 2,
            explain: "The series resistor drops V = I x R = 1.5 x 20 = 30 V, leaving 60 - 30 = 30 V across the parallel group. Equal resistances in series always split the supply equally, and here the parallel pair reduces to the same 20 ohms as the series resistor.",
          },
          {
            q: "You reduce a parallel group of 15 ohms and 10 ohms and get 25 ohms. What does that tell you?",
            options: [
              "The answer is right, because resistances always add",
              "The answer is wrong, because a parallel equivalent must be less than the smallest branch",
              "The answer is right only if the supply voltage is known",
              "The answer is wrong because parallel resistances always equal their average",
            ],
            answer: 1,
            explain: "The correct value is (15 x 10)/(15 + 10) = 6 ohms — always less than the smallest branch, because every added path lets more current flow. Getting 25 ohms means the series rule was applied by mistake.",
          },
          {
            q: "Two 46 ohm elements in parallel are fed through a cable of 1 ohm total resistance from a 230 V supply. Why do the elements deliver less heat than their nameplate rating?",
            options: [
              "Because parallel connection halves the voltage across each element",
              "Because the cable resistance is in series with the load, so part of the supply voltage is dropped in the cable and the elements see only about 220 V",
              "Because the elements share the current, so each gets half the power",
              "Because power is independent of voltage in a resistive load",
            ],
            answer: 1,
            explain: "The cable and the load form a series-parallel circuit, so the cable takes its share of the supply voltage: about 9.6 V at 9.58 A. Element power follows V squared / R, so a voltage about 4 per cent low costs roughly 8 per cent of the heat output — and the missing energy heats the cable.",
          },
        ],
      },
    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
