/* =========================================================================
   Course content, module 312 — Alternating current rotating machines and
   motor protection.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 12 — Alternating current rotating
   machines and motor protection.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — alternating current rotating machines and motor protection",
  ];

  const REFS_CONSTRUCTION = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — construction of the three-phase induction motor: frame, stator core and windings",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — squirrel cage and wound rotors, skewed bars and slip-rings",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — motor terminal block arrangements and star or delta bridging",
    "AS/NZS 1359 series — rotating electrical machines: general requirements, cooling and enclosures",
  ];

  const REFS_RMF = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — production of the rotating magnetic field by three windings at 120 degrees electrical",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — synchronous speed n = 120f/p and speeds for common pole numbers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phase sequence, direction of field rotation and reversal",
  ];

  const REFS_SLIP = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — induction, torque production and Fleming's rules applied to the rotor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — slip speed, percentage slip and rotor frequency fr = s f",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — rotor impedance, back EMF and generator action within a motor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — rotor bar shapes, double cage and high-resistance rotors",
  ];

  const REFS_TORQUE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — current/speed and torque/speed characteristics of the squirrel cage motor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — locked rotor torque, breakdown torque and AS/NZS 1359.41 minimum values",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — abnormal operating conditions: unbalance, single phasing, phase reversal, voltage and frequency variation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — overloading, repetitive starting and driven-load faults",
  ];

  const REFS_STARTING = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — starting currents of induction motors and direct on line starting",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — star-delta, autotransformer, primary resistance and part-winding starting",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — wound-rotor rheostatic starting and its effect on current and torque",
    "AS/NZS 3000:2018 Wiring Rules — Section 4, control and protection of motors",
  ];

  const REFS_VSD = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electronic soft starting of induction motors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — speed control of induction motors and the frequency/speed relationship",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effects of frequency variation on motor speed, torque, power factor and efficiency",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — force-ventilated motors for variable speed duty",
  ];

  const REFS_SPLIT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — single-phase induction motors: pulsating field and cross-field theory",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — split-phase motor construction, start and run windings and phase displacement",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitor-start motors and the centrifugal switch",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — abnormal operating conditions caused by centrifugal switch failure",
  ];

  const REFS_1PH2 = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitor-start/capacitor-run and permanent split capacitor motors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — shaded pole motors and the shifting pole-face flux",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the a.c. series (universal) motor: construction, operation and reversal",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — summary of single-phase motor types and comparison with three-phase motors",
  ];

  const REFS_ALT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase synchronous machine construction, salient pole and cylindrical rotors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — excitation, exciters and brushless excitation systems",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — generated voltage equation, effect of load power factor and voltage regulation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — alternator ratings, parallel operation, synchronising, hunting and standby supplies",
  ];

  const REFS_SYNCMOT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase synchronous motors: construction and operating principle",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — torque angle, effect of load and effect of varying d.c. field excitation (V curves)",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — synchronous condensers, power factor correction and starting methods",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — single-phase synchronous motors: reluctance and hysteresis types",
  ];

  const REFS_NAMEPLATE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — motor nameplate information and correct motor selection",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — insulation classes, temperature rise, hot-spot allowance and the resistance method",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — motor enclosures, cooling methods and high-humidity protection",
    "AS/NZS 1359.5 and the GEMS Act — minimum energy performance standards for three-phase induction motors",
  ];

  const REFS_PROT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — overload current versus fault current, short-duration and sustained overload, locked rotor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — HRC fuses, C and D type circuit-breakers, thermal, magnetic and electronic overloads",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — PTC thermistor protection, single-phasing and reverse-phase-sequence protection",
    "AS/NZS 3000:2018 Wiring Rules — protection of motors against overload, fault current, under-voltage and over-temperature",
  ];

  const REFS_TEST = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — safe testing methods for locating faults in low voltage a.c. machines",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — continuity, insulation-to-earth and between-winding tests on motor windings",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitor testing, mechanical tests, growler and Prufrex testers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — dismantling three-phase induction motors and witness marking",
  ];

  const MODULES = [
    {
      id: "elec-ac-machines",
      stream: "elec",
      title: "E.12 · AC machines and motor protection",
      blurb: "How three-phase and single-phase a.c. motors, alternators and synchronous machines work, how they are started, controlled, rated, protected and tested in the field.",
      lessons: [
      {
        id: "ac-machine-construction",
        title: "Inside an a.c. machine: frames, stators and rotors",
        minutes: 12,
        simple: "An a.c. motor is really only two parts that never touch: a fixed set of coils called the stator, and a spinning part called the rotor. The stator makes a magnetic field that sweeps around like the beam of a lighthouse, and the rotor is dragged along behind it. Nothing rubs, nothing sparks, which is why these motors run for years without attention.",
        refs: REFS_CONSTRUCTION,
        content: `
Walk through any plant room, cool room, factory or pump station in Australia
and most of the shaft power you see is coming from one machine: the
three-phase squirrel cage induction motor. It has no brushes, no commutator,
no starting switch and no electrical connection at all to its moving part.
That is why it is rugged, cheap and reliable, and why a fitter can hang one on
a pump for twenty years and never open it.

The name comes from how it works. Current in the rotor is **induced** by
transformer action from the stator, not fed in through wires. Everything else
about the machine follows from that one idea.

## The parts you will actually handle

| Part | What it is | Why it matters to you |
|---|---|---|
| Frame or body | Cast iron or aluminium housing, usually finned | Carries the stator core, dissipates heat, provides the mounting feet or flange |
| Stator core | Thin insulated steel laminations with slots on the inner face | Laminating limits eddy currents; slots hold the three windings |
| Stator windings | Three identical coil groups spread 120 degrees electrical apart | Create the rotating field; these are what you megger |
| Rotor | Laminated iron core on the shaft, with bars or windings | The moving part that produces torque |
| End shields (end caps) | Bolted to each end of the frame | Hold the bearings that centre the rotor in the bore |
| Fan and shroud | Fitted to the non-drive end | Blows air over the frame fins; blocked shrouds cook motors |
| Terminal box | Six studs plus earth on most machines | Where you select star or delta and land the supply |

The air gap between stator and rotor is deliberately tiny, often well under a
millimetre on small machines. A small gap means less magnetising current. It
also means a worn bearing that lets the rotor drop can put the rotor against
the stator bore, and the motor is then scrap.

## The stator

The core is punched from sheet steel and stacked, each lamination varnished or
oxide-coated so that current cannot circulate axially through the stack. In
large machines the slots are open so that big pre-formed, pre-insulated coils
can be dropped in. In small machines the slots are semi-closed to keep the
magnetic gap as small as possible, and the winding is threaded in as loose
wire and then wedged and varnish-impregnated.

Each phase is a set of coils in series, physically distributed around the bore
to form the number of poles the machine is designed for. A four-pole machine
has four coil groups per phase.

## Rotors: cage and wound

**Squirrel cage rotor.** Uncoated aluminium or copper bars sit in slots in the
rotor laminations and are shorted together at both ends by end rings. Small and
medium rotors are die cast in one operation, complete with cooling fins, so the
bars, rings and fan are one piece of aluminium. Larger machines use copper bars
brazed or fusion welded into copper end rings, which can be repaired. Strip the
laminations away and what is left looks like a rodent exercise wheel, which is
where the name comes from. Standards simply call it a cage rotor.

The bars are usually **skewed** — set at a slight angle to the shaft rather
than parallel to it. Skewing stops the bars lining up with stator slots all at
once, which smooths the torque pulses, cuts magnetic noise and gives steady
acceleration.

The shape and depth of the bars is a design lever, not an accident. Bars buried
deep in the iron have more leakage inductance, which lowers starting current
but also lowers pull-out torque; such a rotor suits a centrifugal pump that
needs almost no torque to break away.

**Wound rotor (slip-ring rotor).** Instead of bars, the rotor carries a proper
three-phase insulated winding with the same number of poles as the stator. It
is connected in star inside the rotor, and the three free ends go to three
slip-rings on the shaft. Brushes on those rings connect to an external
star-connected variable resistor, the rotor rheostat.

Adding external resistance during starting does three things at once: rotor
current falls (so stator current falls), the rotor current comes more into
phase with the rotor voltage so starting torque rises, and slip increases. As
the machine accelerates, the resistance is progressively shorted out until the
rotor is running as an ordinary cage machine. Wound-rotor motors cost more,
need brush and slip-ring maintenance, and have poorer running characteristics,
but they are unbeatable for grinding a huge flywheel-driven load up to speed —
quarry crushers, metal presses, large air compressors.

## Terminal block: why there are six studs

Most three-phase motors bring both ends of all three windings out to a
six-stud block, labelled U1 V1 W1 for the starts and U2 V2 W2 for the ends.
Only small dedicated motors that will always run in one connection have three
studs plus earth.

The studs are arranged so that straight shorting links produce the connection
you want:

- **Star:** one pair of links bridges the three winding ends together to form the star point, and the lines land on the three winding starts. Each winding then sees only 58 per cent of the line voltage (1 divided by root 3).
- **Delta:** three links join the end of one phase to the start of the next. Every winding then sees full line voltage. There is only one way to do it.

Because the phase ends are deliberately offset on the block rather than sitting
opposite their own starts, the links go on straight. For a star-delta starter
all links come off and all six ends go to the starter.

>! Never assume a motor is wired for the voltage on its nameplate until you
>! have opened the terminal box and looked at the links. A 400 V delta motor
>! left in star will crawl and overheat; a 400 V star motor linked in delta
>! draws roughly three times its rated current and will burn out in minutes.

On a wound-rotor machine the stator is usually connected internally, and the
six studs you see are three stator lines plus three rotor terminals. They are
normally separated or use a different connector style. Putting line voltage on
the rotor terminals destroys the rotor winding.

## Enclosures

The installer, not the manufacturer, decides where the motor ends up, so the
same electrical machine is sold in many housings: open, protected, drip proof,
duct or force ventilated, totally enclosed fan cooled (TEFC), weatherproof,
submersible and flameproof. A fan-coil motor in a clean plant room may only
need mechanical protection and free air flow; a bore pump motor standing in the
weather must be sealed, with heat passing out through the housing. AS/NZS 1359
sets out the classification codes for cooling, mounting and degree of
protection, which we take apart in the nameplate lesson.

## What to remember

- Stator and rotor never touch; all rotor current is induced.
- Laminated cores and skewed cage bars exist to cut losses, noise and vibration.
- Cage rotors are maintenance free; wound rotors buy high starting torque at low starting current, and cost you brushes and rings.
- Six terminal studs let one machine be star or delta — check the links before you energise.
- Bar shape and depth set the starting current and torque of a cage motor.
`,
        quiz: [
          {
            q: "Why are the conductor bars of a cage rotor usually skewed rather than parallel to the shaft?",
            options: [
              "To increase the rotor resistance and therefore the slip",
              "To stop bars and stator slots aligning all at once, smoothing torque and reducing noise and vibration",
              "To make room for the cooling fins on the end rings",
              "To allow the rotor to be removed without splitting the end shields",
            ],
            answer: 1,
            explain: "Skewing spreads the interaction between rotor bars and stator teeth over the rotation, so torque pulsations, magnetic noise and vibration all fall and acceleration is smoother. Rotor resistance is set by bar material and cross-section, not by the skew angle.",
          },
          {
            q: "A three-phase motor is connected in star to a 400 V supply. What voltage appears across each stator winding?",
            options: ["400 V", "692 V", "231 V, about 58 per cent of the line voltage", "133 V, one third of the line voltage"],
            answer: 2,
            explain: "In star each winding sees line voltage divided by root 3: 400/1.732 = 231 V, which is 58 per cent of 400 V. The one-third answer confuses the star-delta current ratio with the voltage ratio.",
          },
          {
            q: "What is the practical advantage of a wound rotor with an external rheostat over a cage rotor?",
            options: [
              "It runs at synchronous speed with no slip",
              "It gives high starting torque at reduced starting current, suiting high-inertia loads",
              "It needs no starter or protection because the rotor limits its own current",
              "It has better full-load efficiency and speed regulation than a cage motor",
            ],
            answer: 1,
            explain: "External rotor resistance lowers rotor and stator current while bringing rotor current into phase with rotor voltage, so torque is high while current is low. Its running characteristics are actually worse than a cage motor because of the extra rotor resistance, and it still needs full protection.",
          },
          {
            q: "Why is the air gap between stator and rotor made as small as mechanically possible?",
            options: [
              "To reduce the magnetising current needed to set up the flux",
              "To increase the rotor frequency at full load",
              "To allow the rotor bars to be skewed",
              "To keep the winding insulation cool",
            ],
            answer: 0,
            explain: "The air gap is the high-reluctance part of the magnetic circuit, so a wider gap means more magnetising current and worse power factor. It is also why an induction motor draws a much higher no-load current than a transformer of similar rating.",
          },
        ],
      },
      {
        id: "rotating-field-synchronous-speed",
        title: "The rotating magnetic field and synchronous speed",
        minutes: 12,
        simple: "Three coils fed by three currents that peak one after another make a magnetic field that appears to spin around inside the motor, even though nothing has moved yet. It is the same trick as chasing lights on a theatre sign: no bulb moves, but the pattern travels. How fast it travels depends only on the supply frequency and how many poles the motor is wound with.",
        refs: REFS_RMF,
        content: `
Everything a three-phase motor does starts with one fact: three windings spaced
120 degrees apart and fed with three currents 120 degrees apart in time produce
a magnetic field of constant strength that rotates. No moving part is needed to
make it rotate, and that is why three-phase induction motors are inherently
self-starting while single-phase ones are not.

## How the field is built

Take a two-pole machine. Windings U, V and W are laid in the stator 120 degrees
electrical apart, and their ends U2, V2 and W2 are joined to form the star
point. Assume that current flowing into a winding start makes the adjacent iron
a north pole; reverse the current and that pole becomes south.

Now step through one cycle of the supply in 60 degree steps:

- **Step 1.** The current in U is zero, so U produces nothing. V is negative and W is positive, so those two windings produce equal and opposite fields. Add the two field vectors and you get one resultant pointing in a definite direction.
- **Step 2.** Sixty degrees later, U has gone positive, V is still negative and W has fallen to zero. Add the vectors again — the resultant has the same length but has swung 60 degrees clockwise.
- **Step 3.** Another 60 degrees on, U is at its positive peak, V is zero and W is negative. The resultant has swung another 60 degrees.

Follow all six steps of a cycle and the resultant has turned a complete
revolution. Two useful results fall out of the geometry:

1. The magnitude of the resultant stays constant. It is **1.5 times** the peak
   flux that any one phase alone can produce.
2. For a two-pole winding the field turns exactly one revolution per cycle of
   supply.

That constant-strength rotating flux is what distinguishes three-phase machines.
In single-phase machines the field pulsates rather than rotates, which is why
they vibrate at twice supply frequency and need starting tricks.

## Synchronous speed

The speed of the rotating field is called **synchronous speed**. It depends on
two things only, and neither of them is the load, the voltage or the rotor:

**n(syn) = 120 f / p**

where n(syn) is in revolutions per minute, f is the supply frequency in hertz
and p is the number of poles. Transposing gives the number of poles:

**p = 120 f / n(syn)**

The logic is simple. A two-pole winding needs one full cycle for one
revolution. A four-pole winding covers only half a revolution per cycle,
because 360 degrees electrical now equals 180 degrees mechanical, so it turns
at half the speed. Six poles gives a third, and so on.

### Worked example 1 — a two-pole machine

A two-pole three-phase motor is supplied at 50 Hz. Find the speed of the
rotating field.

- n(syn) = 120 f / p = 120 x 50 / 2
- n(syn) = 6000 / 2 = **3000 rpm**

### Worked example 2 — a four-pole machine

Same supply, four poles:

- n(syn) = 120 x 50 / 4 = 6000 / 4 = **1500 rpm**

### Worked example 3 — finding the pole number from a nameplate

A nameplate reads 960 rpm at 50 Hz. How many poles has the machine?

The nameplate gives full-load speed, which is always a little below
synchronous speed, so first pick the nearest synchronous speed above it: 1000
rpm. Then:

- p = 120 f / n(syn) = 120 x 50 / 1000
- p = 6000 / 1000 = **6 poles**

Pole numbers are always even, so if your arithmetic gives an odd number you
have used the actual speed instead of the synchronous speed.

## Standard 50 Hz speeds worth memorising

| Poles | Synchronous speed at 50 Hz (rpm) | Typical full-load nameplate speed (rpm) |
|---|---|---|
| 2 | 3000 | 2850 to 2900 |
| 4 | 1500 | 1420 to 1450 |
| 6 | 1000 | 940 to 960 |
| 8 | 750 | 700 to 720 |
| 10 | 600 | 570 |
| 12 | 500 | 480 |

At 60 Hz every one of those synchronous speeds rises by 20 per cent, which is
why imported 60 Hz equipment runs slow here and why a fan imported for a 60 Hz
market shifts far less air on our 50 Hz supply.

## Direction of rotation and how to reverse it

The direction the field turns depends only on the **phase sequence** of the
three currents. Connect red, white and blue to U, V and W and the field turns
one way. Swap any two of the three line connections and the sequence at the
motor reverses, so the field reverses, so the shaft reverses. Any two will do,
and swapping all three changes nothing.

This is one of the great advantages of the three-phase motor: reversing is done
outside the machine with two conductors, or with two contactors in a reversing
starter, and never involves opening the motor.

>! Before proving rotation, make sure nobody is at the driven end and that
>! reverse rotation cannot damage the load. Screw compressors, some pumps and
>! gearbox oil pumps can be wrecked by running backwards even briefly. Use a
>! phase rotation meter on the supply and a bumped start rather than guessing.

## What to remember

- Three currents 120 degrees apart in three windings 120 degrees apart make a constant-strength field that rotates at synchronous speed.
- The resultant field is 1.5 times the peak flux of one phase.
- n(syn) = 120 f / p; poles p = 120 f / n(syn), and p is always even.
- The rotor always runs slower than this; the nameplate speed is not the synchronous speed.
- Swap any two lines to reverse rotation — never open the motor to do it.
`,
        quiz: [
          {
            q: "A three-phase induction motor has 8 poles and is supplied at 50 Hz. What is its synchronous speed?",
            options: ["375 rpm", "750 rpm", "1000 rpm", "1500 rpm"],
            answer: 1,
            explain: "n(syn) = 120 x 50 / 8 = 750 rpm. Dividing 3000 by the pole number instead of applying the formula gives 375 rpm, a common slip of the pencil.",
          },
          {
            q: "A motor nameplate reads 2850 rpm at 50 Hz. How many poles does it have?",
            options: ["2", "4", "6", "It cannot be determined from the nameplate speed"],
            answer: 0,
            explain: "2850 rpm is just under the 3000 rpm synchronous speed of a two-pole machine at 50 Hz. Nameplates state full-load speed, which sits a few per cent below synchronous speed because of slip.",
          },
          {
            q: "How is the direction of rotation of a three-phase induction motor reversed?",
            options: [
              "By reversing the connections of one phase winding inside the terminal box",
              "By interchanging any two of the three supply lines",
              "By reconnecting the motor from delta to star",
              "By reversing all three supply lines",
            ],
            answer: 1,
            explain: "Swapping any two lines reverses the phase sequence and therefore the direction of the rotating field. Reversing one winding internally unbalances the machine badly and gives a growling motor with little torque; reversing all three restores the original sequence.",
          },
          {
            q: "What happens to the strength of the resultant rotating field as it turns?",
            options: [
              "It pulsates between zero and maximum twice per cycle",
              "It stays constant at 1.5 times the peak flux of one phase",
              "It stays constant at the peak flux of one phase",
              "It rises and falls with the slip of the motor",
            ],
            answer: 1,
            explain: "Vector addition of the three phase fluxes at any instant gives a resultant of constant magnitude equal to 1.5 times the peak of one phase. A pulsating field of varying strength is what a single-phase machine produces, which is why it cannot self-start.",
          },
        ],
      },
      {
        id: "slip-rotor-frequency",
        title: "Slip, rotor frequency and how the rotor makes torque",
        minutes: 14,
        simple: "The spinning magnetic field always has to stay a little bit ahead of the rotor, the way a sheepdog has to keep moving to keep the mob moving. If the rotor ever caught up there would be no relative movement, nothing would be induced, and the push would vanish. That small speed difference is called slip, and everything the motor does depends on it.",
        refs: REFS_SLIP,
        content: `
The stator gives you a field rotating at synchronous speed. Now we need to
turn that into shaft torque, and to understand why the rotor can never quite
catch the field.

## Torque, step by step

1. The rotating flux crosses the air gap and cuts the rotor bars. Because there
   is relative motion between a magnetic field and a conductor, a voltage is
   induced in every bar (Fleming's right-hand rule gives its direction).
2. The bars are shorted by the end rings, so that induced voltage drives a very
   large current — hundreds of amperes even in a small motor, because the bar
   circuit resistance is tiny.
3. That rotor current sets up its own flux around each bar.
4. Rotor flux and stator flux interact. The combined field is distorted on one
   side of the bar and weakened on the other; it tries to straighten itself out
   and in doing so pushes the bar sideways (Fleming's left-hand rule).
5. Every bar gets the same push, so the rotor accelerates in the same direction
   as the field.

The stator flux is essentially constant, so the torque a motor makes is set by
the rotor current and by how closely rotor flux lines up with stator flux.

## Why the rotor cannot reach synchronous speed

Imagine the rotor did reach synchronous speed. There would be no relative
motion, so no induced voltage, no rotor current, no rotor flux and no torque.
The rotor would immediately slow down. An induction motor therefore always runs
below synchronous speed. It is an **asynchronous** machine by nature.

The gap is the **slip speed**, and expressed as a fraction of synchronous speed
it is the **slip**:

**slip speed = n(syn) minus n**

**slip per cent = (n(syn) minus n) / n(syn) x 100**

At standstill the rotor is doing nothing, so slip is 100 per cent. At true
synchronous speed slip would be zero. In practice a loaded general purpose
motor sits between about 2 and 6 per cent slip, small motors slipping more than
large ones.

### Worked example 1 — slip of a four-pole motor

A four-pole induction motor runs at 1440 rpm on a 50 Hz supply. Find the slip.

- n(syn) = 120 f / p = 120 x 50 / 4 = 1500 rpm
- slip speed = 1500 minus 1440 = 60 rpm
- slip per cent = 60 / 1500 x 100 = **4 per cent**

### Worked example 2 — actual speed from a stated slip

A six-pole 50 Hz motor is quoted at 5 per cent slip at full load. What speed
does the shaft actually turn?

- n(syn) = 120 x 50 / 6 = 1000 rpm
- slip speed = 5 / 100 x 1000 = 50 rpm
- n = 1000 minus 50 = **950 rpm**

## Rotor frequency

The frequency of the voltage induced in the rotor is not supply frequency once
the rotor is moving — it is set by the *relative* speed, which is the slip:

**f(rotor) = s x f** , or in percentage form **f(rotor) = (s per cent / 100) x f**

At standstill the rotor is cut 50 times a second by a 50 Hz field, so rotor
frequency equals supply frequency. At half synchronous speed the relative speed
has halved, so rotor frequency is 25 Hz. At synchronous speed it would be zero.

### Worked example 3 — rotor frequency

A two-pole 50 Hz motor runs at 2850 rpm. Find the rotor frequency.

- n(syn) = 120 x 50 / 2 = 3000 rpm
- slip per cent = (3000 minus 2850) / 3000 x 100 = 150 / 3000 x 100 = 5 per cent
- f(rotor) = 5 / 100 x 50 = **2.5 Hz**

### Worked example 4 — the same motor at the instant of starting

At the moment the contactor closes the rotor is stationary, so slip is 100 per
cent:

- f(rotor) = 100 / 100 x 50 = **50 Hz**

That number matters enormously, as the next section shows.

## Why starting torque is poor and running torque is good

Rotor inductive reactance follows the standard relationship X(L) = 2 pi f L,
and the f in that expression is the **rotor** frequency.

- **At standstill**, rotor frequency is 50 Hz, so rotor reactance is at its maximum. The rotor circuit is far more inductive than resistive, so rotor current lags rotor voltage by nearly 90 degrees. The rotor flux therefore lags almost 90 degrees behind the stator flux, and two fluxes that far out of step produce poor torque despite the huge current.
- **As speed rises**, slip falls, rotor frequency falls, and rotor reactance falls with it. The rotor circuit becomes mainly resistive, so rotor current comes into phase with rotor voltage and rotor flux lines up with stator flux. Torque per ampere improves dramatically.
- **Maximum torque** occurs at the speed where rotor resistance equals rotor reactance in ohms. That is the design rule behind every rotor bar shape.

So the motor draws its worst current at the moment it produces its worst
torque. That single sentence explains why starting methods exist at all.

## Back EMF: the self-regulating loop

As the rotor turns, its bars also cut the stator field in the generating sense,
producing a back EMF that opposes the current which created the torque
(Lenz's law again). Back EMF is proportional to speed:

- At standstill there is no back EMF, so rotor current is maximum.
- Near synchronous speed the back EMF is high, so rotor current settles to just enough to carry the load.
- Add load, the rotor slows a little, back EMF falls, more rotor current flows, more torque is produced until it matches the load. The motor finds its own operating point.

The same thing happens on the stator side. On no load the stator back EMF is
almost equal to the supply, so only a small magnetising current flows. Load the
shaft, the back EMF falls, the difference across the winding rises and the motor
draws more current from the supply. That is *how* a motor draws more power when
you load it — you are not switching anything, you are unbalancing an EMF.

## Rotor bar design: choosing your compromise

For a given stator, only rotor impedance can change what the rotor does. Bar
cross-section controls resistance; bar depth and shape control leakage
reactance. Manufacturers use that to build very different machines from the
same stator.

| Rotor style | Starting torque (per cent of rated) | Starting current | Typical use |
|---|---|---|---|
| Shallow, small section bars | about 150 | 6 to 7 x full load | Very low breakaway loads |
| Standard deeper bars | about 150 | about 5 x full load | Fans, blowers, light machinery |
| Double cage, high resistance outer, low resistance inner | about 225 | about 5 x full load | Air compressors, crushers, reciprocating pumps |
| High-resistance bars | about 275 | low | Presses, punches, hoists where load is greatest at breakaway |

The double cage is elegant: at standstill the rotor frequency is high, so the
deep inner cage is choked by its own reactance and current is forced into the
high-resistance outer cage, giving high starting torque. At running speed the
rotor frequency is only a couple of hertz, reactance is negligible and the
current shifts into the low-resistance inner cage, giving good efficiency and
low slip. The rotor changes its own character as it accelerates.

High-resistance rotors buy their torque with permanently increased slip, so
rated speed is lower and running losses higher. Aluminium bars need a larger
cross-section than copper for the same resistance because aluminium's
resistivity is higher.

>! Rotor faults are quiet killers. Broken or loose cage bars give reduced
>! torque, a rhythmic growl, current swinging around the full-load value and
>! long run-up times. Cast aluminium cages cannot be repaired; fabricated
>! copper cages sometimes can be re-brazed.

## What to remember

- An induction motor must slip; without relative motion there is no torque.
- slip per cent = (n(syn) minus n) / n(syn) x 100, and f(rotor) = s x f.
- Rotor reactance is high at standstill and nearly zero at running speed, which is why starting torque is poor and starting current is high.
- Maximum torque happens where rotor resistance equals rotor reactance.
- Bar shape and material are how the designer sets the starting torque and current you have to live with.
`,
        quiz: [
          {
            q: "A six-pole 50 Hz induction motor runs at 960 rpm. What is its percentage slip?",
            options: ["2 per cent", "4 per cent", "5 per cent", "6 per cent"],
            answer: 1,
            explain: "n(syn) = 120 x 50 / 6 = 1000 rpm, slip speed = 1000 minus 960 = 40 rpm, and 40/1000 x 100 = 4 per cent. Using 1500 rpm as the synchronous speed (a four-pole value) is the usual mistake here.",
          },
          {
            q: "A four-pole 50 Hz motor runs at 1425 rpm. What is the frequency of the current in its rotor bars?",
            options: ["50 Hz", "25 Hz", "2.5 Hz", "1.25 Hz"],
            answer: 2,
            explain: "Slip = (1500 minus 1425)/1500 = 5 per cent, so f(rotor) = 0.05 x 50 = 2.5 Hz. Rotor frequency equals supply frequency only at standstill, when slip is 100 per cent.",
          },
          {
            q: "Why does a stationary induction motor produce relatively poor torque even though it is drawing six or seven times full-load current?",
            options: [
              "The stator flux is weaker at standstill",
              "Rotor frequency equals supply frequency, so rotor reactance is high and rotor current lags rotor voltage by nearly 90 degrees",
              "The back EMF in the rotor is at its maximum at standstill",
              "The air gap flux cannot cross to a stationary rotor",
            ],
            answer: 1,
            explain: "At 100 per cent slip the rotor sees 50 Hz, so X(L) = 2 pi f L is at its largest. The rotor current is large but badly out of phase with rotor voltage, so rotor and stator fluxes are almost 90 degrees apart and torque per ampere is poor. Back EMF is actually zero at standstill, which is why the current is so high.",
          },
          {
            q: "In a double cage rotor, why does the outer high-resistance cage carry most of the current during starting?",
            options: [
              "It is closer to the stator so it links more flux",
              "The inner cage is open-circuited by the starter until the motor is up to speed",
              "At 50 Hz rotor frequency the deep inner cage has high leakage reactance, so current takes the outer path",
              "Centrifugal force pushes the current outwards",
            ],
            answer: 2,
            explain: "At standstill the rotor frequency is supply frequency, so the deeply embedded inner cage is choked by its own reactance and the current uses the high-resistance outer cage, giving high starting torque. Once running, rotor frequency drops to a couple of hertz, reactance almost disappears and the low-resistance inner cage takes over for efficient running.",
          },
        ],
      },
      {
        id: "torque-speed-and-abnormal-conditions",
        title: "Torque and current curves, and what upsets them",
        minutes: 14,
        simple: "Every motor has two graphs that tell its whole story: how much current it pulls at each speed and how much twist it makes at each speed. Learn the shape of those two curves and you can predict what a motor will do when it starts, when it is loaded, and when the supply is not what it should be.",
        refs: REFS_TORQUE,
        content: `
When the contactor closes on a stationary motor, the stator behaves exactly
like a transformer primary and the shorted rotor behaves like a shorted
secondary. That is why the current is enormous: you have effectively switched a
transformer onto a bolted short. As the rotor accelerates, the induced rotor
voltage falls, rotor current falls, and stator current falls with it.

## The two curves

**Current against speed.** Current starts at 5 to 8 times full-load current
(the *locked rotor current*, typically quoted around 6 or 7 times), stays
stubbornly high through most of the run-up, then collapses to the running value
in the last 15 or 20 per cent of speed. Learners consistently expect the current
to fall steadily from the start; it does not. That flat top is why fuses and
overloads must be selected for the run-up time, not just the final current.

**Torque against speed.** The curve starts at the **locked rotor torque** (also
called starting or breakaway torque), dips slightly, climbs to a peak called
the **breakdown torque** or pull-out torque somewhere around 75 to 85 per cent
of synchronous speed, then falls steeply and almost linearly to zero at
synchronous speed.

For a general purpose cage motor:

| Point on the curve | Typical value | Meaning on the job |
|---|---|---|
| Locked rotor torque | about 1.5 x rated torque | What it has available to break the load away |
| Breakdown torque | about 2 x rated torque | The most it can ever produce; beyond this it stalls |
| Rated (full load) torque | 1.0 x rated torque | At the nameplate speed and current |
| High-torque design | 2.5 x rated starting, 2 x breakdown | Ordered specially for hard-starting loads |

AS/NZS 1359.41 tabulates minimum torque values by frame size and recognises
only two standard rotor types, normal and high torque; anything else is a
special order.

On the steep, useful part of the curve (small slip) **torque is very nearly
proportional to slip**. Load the motor a little more and it slows a little
more, producing more torque until it balances the load. That balance point,
where motor torque equals load torque, is where the machine settles.

## Stalling

If the load torque ever exceeds breakdown torque, the operating point falls off
the top of the curve. Torque and speed then both collapse together and the
motor stops in a fraction of a second. It now sits at locked rotor conditions:
full voltage, no back EMF, four to eight times full-load current, no shaft fan
cooling. Protection has to disconnect it quickly or the windings will be
destroyed.

## Power factor and current against load

On no load the stator current is almost pure magnetising current, so the power
factor is very poor — 0.1 to 0.3 is normal. Because of the air gap, an
induction motor's no-load current is a much bigger fraction of full load than a
transformer's, often 25 to 40 per cent.

The magnetising component stays constant from no load to full load. Load adds a
nearly in-phase working component on top of it, so as the load rises the total
current grows and the phase angle shrinks. This is why:

- power factor **improves** with load, approaching about 0.85 to 0.9 at full load;
- slip **increases** with load;
- speed **falls** slightly with load;
- an oversized motor running lightly loaded is an expensive mistake — it drags site power factor down and never reaches its rated efficiency.

## Voltage variation: the square law

**Torque is proportional to the square of the applied voltage.** This one
relationship explains most field complaints about motors.

### Worked example 1 — a 10 per cent voltage drop

A 10 kW motor is fed through a long run of undersized cable and receives only
90 per cent of nominal voltage.

- Torque factor = 0.9 squared = 0.81
- Available torque = **81 per cent** of rated, so the motor can only be worked to about 8.1 kW without exceeding its temperature rise.

### Worked example 2 — a 10 per cent voltage rise

- Torque factor = 1.1 squared = 1.21
- Available torque = **121 per cent** of rated, equivalent to about 12.1 kW.

A rise sounds like a bonus, and the increased torque does reduce slip slightly
— a motor turning 1450 rpm might lift to about 1455 rpm — but if the extra
torque is used the machine runs hotter, and iron losses climb because the flux
is higher. Beyond about 10 per cent variation either way, the motor must be
derated. Under low volts the real danger is stalling a loaded machine.

## Frequency variation

Speed follows frequency directly. Raising the frequency raises the speed,
slightly improves power factor and efficiency, and reduces torque (because
flux per volt falls). Lowering the frequency does the reverse: more torque,
worse power factor, and a real risk of saturating the iron if the voltage is
not lowered as well. This is exactly why a variable speed drive varies volts
and hertz together, which the next lesson covers.

## Unbalanced supply voltages

A three-phase motor is a balanced load and expects three equal voltages at 120
degrees. Small voltage unbalance produces disproportionate current unbalance:
a **2 per cent voltage unbalance can produce 10 to 15 per cent current
unbalance**. Circulating currents flow, heating rises sharply in the most
loaded winding and torque falls. Unbalance is one of the most common causes of
premature winding failure on sites with large single-phase loads.

## Phase reversal of one winding

If one winding is connected back to front, two of the three currents end up
only 60 degrees apart and the machine is badly unbalanced. Symptoms: little or
no starting torque, will not start against even a light load, very slow
rotation if it turns at all, unequal and high phase currents near starting
values, and a distinctive growl with heavy vibration.

## Single phasing

Single phasing means one line has opened — a blown fuse, a burnt contactor tip,
a broken conductor — or one winding has gone open circuit.

- In a **star** motor, a break in a line or a winding leaves a single series path through two windings.
- In a **delta** motor with an open line, one winding sits directly across the two live lines while the other two are in series across the same lines.

In every case the rotating field is destroyed or badly distorted. If the motor
is already running it usually keeps turning at reduced speed on the remaining
supply and the sound changes from a hum to a higher whine; the two remaining
line currents rise by roughly **73 per cent**. If it is stopped it will not
start, it growls, and it draws near starting current. The normal line-to-phase
ratios no longer apply, so meter readings will not make sense until you realise
what you are looking at.

## Overloading, repetitive starting and the driven load

Manufacturers build in a short-term overload capability. AS/NZS 1359.41 in
general terms requires a motor to carry **1.5 times full load for 15 seconds**
without excessive heating or a marked speed change, which also means its
breakdown torque must exceed that test figure.

Heating follows H proportional to I squared t, so a modest overload held for a
long time does far more damage than a big one held briefly. Sustained overload
gives slower speed, higher temperature, reduced efficiency and power factor,
the smell of hot varnish and eventually smoke.

Repetitive starting is its own hazard. Each start dumps a burst of heat into
the windings that the shaft fan normally clears once the motor is up to speed.
Start, reverse or plug-brake often enough and the heat accumulates faster than
it can be removed. The repeated magnetic forces also work the coils against
each other until the insulation rubs through.

Finally, do not assume an electrical fault. Belt tension and alignment,
coupling alignment, loose mounts, failed load bearings, lost lubricant and a
load that is simply too big all show up as a motor that runs hot, trips out or
will not accelerate.

>! Never simply reset an overload and walk away. The overload tripped for a
>! reason. Measure all three line currents and compare them with the nameplate,
>! check the supply voltages for unbalance, and turn the shaft by hand before
>! restarting. Resetting repeatedly is how a nuisance trip becomes a fire.

## On the job

- Expect 6 to 7 times full-load current at start, and expect it to stay high most of the way up to speed.
- Breakdown torque is roughly twice rated torque; exceed it and the motor stalls at locked rotor current.
- Torque follows voltage squared; 10 per cent low volts costs you 19 per cent of the torque.
- A growling motor with unequal, high line currents is either single phasing or has a reversed or open winding.
- Light loading is not kind to a motor: it just means poor power factor and a wasted machine.
`,
        quiz: [
          {
            q: "A motor with a rated torque of 60 Nm is supplied at 90 per cent of nominal voltage. Approximately what torque can it now produce?",
            options: ["54 Nm", "48.6 Nm", "60 Nm", "66 Nm"],
            answer: 1,
            explain: "Torque varies with the square of voltage: 0.9 squared = 0.81, and 0.81 x 60 = 48.6 Nm. Answering 54 Nm assumes torque falls in direct proportion to voltage, which understates the loss.",
          },
          {
            q: "What happens if the load torque on an induction motor exceeds its breakdown torque?",
            options: [
              "The motor draws less current and runs at reduced speed",
              "The motor speed and torque both collapse and it stalls, drawing locked rotor current",
              "The slip increases until the torque matches the load",
              "The power factor improves and the motor continues at rated speed",
            ],
            answer: 1,
            explain: "Beyond the peak of the torque curve, more slip gives less torque, so the operating point runs away downhill and the motor stops. It then sits at locked rotor current, typically four to eight times full load, with no fan cooling, so protection must act fast.",
          },
          {
            q: "A three-phase motor running normally loses one supply line. What typically happens to the current in the two remaining lines?",
            options: [
              "It falls to about half, since only two phases now share the load",
              "It stays the same because the motor slows down",
              "It rises by roughly 73 per cent",
              "It rises to the locked rotor value immediately",
            ],
            answer: 2,
            explain: "With one line open, the same power has to flow through the remaining path, and the line currents rise by about 73 per cent while one winding carries roughly twice the current of the others. The motor usually keeps turning, which is what makes single phasing so damaging if there is no protection.",
          },
          {
            q: "Why does the power factor of an induction motor improve as load is applied?",
            options: [
              "The magnetising current falls as the load rises",
              "The constant magnetising current is joined by a nearly in-phase working current, so the phase angle shrinks",
              "The slip increases, which reduces the rotor reactance to zero",
              "The stator windings warm up and become more resistive",
            ],
            answer: 1,
            explain: "Stator flux and therefore magnetising current stay constant from no load to full load. Loading adds a working component almost in phase with the voltage, so the resultant current grows but its phase angle to the voltage reduces. That is also why a lightly loaded oversized motor has a poor power factor.",
          },
        ],
      },
      {
        id: "starting-methods",
        title: "Starting three-phase motors: DOL, star-delta and reduced voltage",
        minutes: 15,
        simple: "A motor switched straight onto the supply pulls six or seven times its normal current for a few seconds. On a small motor nobody notices; on a big one the lights dim across the site. So we use starters that feed the motor less voltage or less current for the first few seconds. The catch is that anything which halves the current takes away three quarters of the twist.",
        refs: REFS_STARTING,
        content: `
Starting is the hardest few seconds of a motor's life, and the hardest few
seconds for the supply feeding it. Everything in this lesson trades one problem
against the other, and one relationship governs the whole trade:

**Motor current is proportional to applied voltage, but torque is proportional
to voltage squared.**

Cut the voltage to half and you halve the current the motor draws — but the
torque falls to a quarter. There is no starter that reduces current without
reducing torque; the only choice is how badly.

## The reference motor for this lesson

We will carry one machine through every method:

- 15 kW, 400 V, 50 Hz, 4 pole, star-delta wound
- Full-load current (FLC) 28 A, full-load torque (FLT) 100 Nm
- DOL starting current 6.5 x FLC = **182 A**
- DOL starting torque 1.8 x FLT = **180 Nm**

## Direct on line (DOL)

One contactor, one overload, three conductors. The motor gets full voltage from
standstill, so it produces its full available starting torque and draws its full
locked rotor current.

- Line current at start: 6.5 x 28 = **182 A**
- Starting torque: 1.8 x 100 = **180 Nm**

DOL is the cheapest, most reliable and most common starter. It is also the
hardest on the supply, on belts, couplings and gearboxes, and on the driven
machinery. Distributors limit how large a motor may be started DOL on a given
supply; the practical ceiling on suburban three-phase supply is often a few
kilowatts, with larger machines on rural or weak supplies needing assisted
starting to keep voltage dip within limits.

## Star-delta

The classic assisted starter for a delta-connected motor. The motor is
connected in star for the run-up, then switched to delta.

In star, each winding sees only 58 per cent (1/root 3) of line voltage, so:

- Phase (and therefore winding) current is 1/root 3 of its delta value
- Line current in star is another 1/root 3 lower again
- Net effect: **line current and torque are both one third of the DOL values**

### Worked example — star-delta on the reference motor

- Star starting line current = 182 / 3 = **60.7 A**, about 2.2 x FLC
- Star starting torque = 180 / 3 = **60 Nm**, only 0.6 x FLT

Sixty per cent of full-load torque is enough for a fan, an unloaded compressor
or a centrifugal pump against a closed valve, and hopeless for a loaded conveyor
or a mixer full of product. If the load has not reached about 80 per cent of
speed before the changeover, the machine effectively starts DOL from wherever
it got to, and the current transient can be worse than a plain DOL start.

Two transition types exist. **Open transition** disconnects the motor for a few
tens of milliseconds while the contactors swap, and the collapsing field can
produce a nasty current and torque spike on reconnection. **Closed transition**
inserts resistors so the motor is never disconnected, at extra cost.

Star-delta needs all six winding ends brought to the starter, so it needs six
conductors to the motor plus earth, and a motor whose **delta** rating matches
the supply voltage — a 400 V delta / 690 V star machine on our 400 V supply.

>! Star-delta timers matter. Set too short, the motor is thrown into delta
>! while still slow and the resulting current surge can exceed the DOL inrush.
>! Set too long, the motor sits in star producing weak torque and heating its
>! windings. Time the changeover to happen when the current has clearly settled.

## Primary resistance (or reactance) starting

Resistors are put in series with the stator lines and shorted out once the motor
is up to speed. The volt drop across the resistors reduces motor voltage. If the
resistors are sized to give 70 per cent of line voltage at the motor:

- Line current = 0.7 x 182 = **127 A** (0.7 x DOL)
- Torque = 0.7 squared x 180 = 0.49 x 180 = **88 Nm** (0.49 x DOL)

Note that unlike star-delta, the *line* current only falls in proportion to
voltage, not to voltage squared, so you get the worst current-to-torque bargain
of any method. Its saving grace is very smooth acceleration, since the volt drop
falls automatically as current falls. The resistors dissipate serious heat and
limit how often you can start.

## Autotransformer (compensator) starting

A three-phase autotransformer feeds the motor from a tapping, commonly 50, 65
or 80 per cent. Because a transformer changes current as well as voltage, the
**line** current is reduced by the square of the tap ratio while the motor
current is reduced only in proportion. That makes it the most efficient use of
supply current of the electromechanical methods.

If the tap ratio is k:

- Motor voltage = k x V, motor current = k x DOL current
- **Line current = k squared x DOL current**
- **Torque = k squared x DOL torque**

### Worked example — 70 per cent tap

- Motor current = 0.7 x 182 = **127 A**
- Line current = 0.49 x 182 = **89 A**
- Torque = 0.49 x 180 = **88 Nm**

Compare that with star-delta, which is effectively a fixed 58 per cent tap: it
gives 60.7 A and 60 Nm. The autotransformer at 70 per cent gives more torque for
a bit more current, and unlike star-delta the tap can be chosen to suit the
load. Taps are also switchable in stages. The penalties are cost, size and the
open-circuit transition unless a Korndorffer (closed transition) sequence is
used.

### Worked example — 50 per cent tap on the same motor

- Line current = 0.5 squared x 182 = 0.25 x 182 = **45.5 A**
- Torque = 0.25 x 180 = **45 Nm**, well under half full-load torque

Only a genuinely unloaded machine will accelerate on that.

## Part-winding starting

Some motors are wound as two parallel half-windings. The starter energises one
half at full voltage, then brings in the second half a second or two later.
Roughly, the first step draws about 60 to 65 per cent of DOL current and
produces about 45 to 50 per cent of DOL torque.

### Worked example

- First step current = 0.65 x 182 = about **118 A**
- First step torque = 0.48 x 180 = about **86 Nm**

It needs a specially wound motor, gives an uneven noisy first step, and heats
the energised half harder than normal — but it is simple, cheap and common on
packaged refrigeration compressors, where the supply authority only wants the
inrush trimmed a little.

## Wound-rotor (rheostatic) starting

The only electromechanical method that gives you **more** torque for **less**
current. External resistance in the rotor circuit brings rotor current into
phase with rotor voltage, so the machine can develop close to breakdown torque
right from standstill while drawing far less than DOL current. The resistance is
cut out in stages as speed builds, each stage handing over to the next before
torque falls away. Cost, brushes, slip-rings and rotor rheostat maintenance are
the price, and it is now often replaced by a VSD.

## Comparison

| Method | Line current (x DOL) | Torque (x DOL) | Needs | Typical use |
|---|---|---|---|---|
| DOL | 1.0 | 1.0 | 3 conductors, cheapest | Most motors up to the limit the supply allows |
| Star-delta | 0.33 | 0.33 | 6 conductors, delta-rated motor | Fans, unloaded pumps and compressors |
| Primary resistance | 0.7 (at 70 per cent V) | 0.49 | Resistor bank, heat | Smooth acceleration of light loads |
| Autotransformer 70 per cent | 0.49 | 0.49 | Bulky autotransformer | Large motors on limited supply |
| Part-winding | about 0.65 | about 0.48 | Specially wound motor | Packaged compressors |
| Wound rotor | low | high | Slip-rings, rheostat | High-inertia loads, crushers, presses |

## On the job

- Work out the load's breakaway torque before choosing a starter; the current limit means nothing if the machine will not turn.
- Star-delta gives you exactly one third of everything, current and torque.
- Autotransformer taps reduce line current by the square of the tap ratio.
- Every reduced-voltage start makes the run-up longer, which means more heat in the windings; check the overload trip class covers it.
- Six-core plus earth to the motor tells you it is a star-delta or part-winding installation before you even open the box.
`,
        quiz: [
          {
            q: "A motor draws 210 A and produces 150 Nm when started DOL. What will it draw and produce on a star-delta starter, in star?",
            options: ["105 A and 75 Nm", "70 A and 50 Nm", "121 A and 87 Nm", "70 A and 150 Nm"],
            answer: 1,
            explain: "Star-delta gives one third of both the DOL line current and the DOL torque: 210/3 = 70 A and 150/3 = 50 Nm. Halving both values confuses the 58 per cent winding voltage with the resulting line current.",
          },
          {
            q: "An autotransformer starter is set to the 65 per cent tap. What fraction of the DOL line current will the supply see?",
            options: ["0.65", "0.42", "0.35", "0.80"],
            answer: 1,
            explain: "An autotransformer transforms current as well as voltage, so line current falls with the square of the tap ratio: 0.65 squared = 0.42. The motor itself draws 0.65 of DOL current, which is the figure people mistakenly quote for the supply.",
          },
          {
            q: "Why does primary resistance starting give the poorest current-to-torque bargain?",
            options: [
              "Because the resistors waste power as heat",
              "Because line current falls only in proportion to voltage while torque falls with voltage squared",
              "Because it can only be used on delta-connected motors",
              "Because the resistors increase the rotor frequency",
            ],
            answer: 1,
            explain: "With series resistors the supply sees the same current as the motor, so current reduces in direct proportion to voltage while torque reduces with the square. An autotransformer at the same motor voltage draws far less line current because it transforms the current down as well.",
          },
          {
            q: "A star-delta starter changes over to delta while the motor is still at only half speed. What is the likely result?",
            options: [
              "A smooth transition with no effect on current",
              "A large current surge, possibly worse than a DOL start, and a torque shock to the drive",
              "The motor will stall because delta gives less torque than star",
              "The overload will fail to operate because the windings are in delta",
            ],
            answer: 1,
            explain: "At half speed the motor still has high slip, so applying full winding voltage produces a surge close to locked rotor current plus a transient from the open transition. Delta always gives more torque than star, so stalling is not the issue; the shock and the surge are.",
          },
        ],
      },
      {
        id: "soft-starters-and-vsds",
        title: "Soft starters, variable speed drives and speed control",
        minutes: 14,
        simple: "Electronics let us ramp a motor up gently instead of slamming it on, and let us choose any speed we like instead of the one the winding was built for. A drive does it by rebuilding the supply: it turns the mains into d.c., then chops that d.c. into a new a.c. supply at whatever voltage and frequency the motor needs.",
        refs: REFS_VSD,
        content: `
Contactor starters can only pick between a few fixed voltages. Power electronics
removed that limit, and on new installations the soft starter and the variable
speed drive (VSD, also called a VFD or inverter) have replaced most
autotransformer, primary resistance and wound-rotor starters.

## Soft starters

A soft starter puts a pair of back-to-back thyristors (an SCR pair, or a triac
on small units) in each line. By delaying the firing angle, the starter lets
through only part of each half cycle, so the RMS voltage at the motor rises
smoothly from a chosen starting level up to full voltage over a set ramp time.

Because it is still a reduced-voltage method, the same square law applies:

**T(start) / T(DOL) = (I(start) / I(DOL)) squared**

### Worked example — a current-limited soft start

Take the same 15 kW motor: FLC 28 A, DOL current 182 A, DOL torque 180 Nm. The
soft starter is set to a current limit of 3.5 x FLC.

- Current limit = 3.5 x 28 = **98 A**
- Ratio to DOL current = 98 / 182 = 0.538
- Torque = 0.538 squared x 180 = 0.29 x 180 = about **52 Nm**, which is 0.52 x FLT

So a 98 A limit buys you barely half of full-load torque. If the load needs
more than that to break away, the motor will sit at the current limit, not
accelerate, and either the starter or the overload will trip. That is the most
common soft starter callout in the field.

Typical features: adjustable initial torque (pedestal) voltage, ramp time,
current limit, kick start pulse, soft stop ramp for pumps to avoid water hammer,
and a bypass contactor that closes once the motor is at speed so the thyristors
do not have to carry running current or dissipate heat.

Soft starters control **starting** only. Once the ramp finishes the motor runs
at full line frequency, so they do nothing for running speed or energy use.

## Variable speed drives

A VSD has three stages:

1. **Rectifier** — a three-phase diode bridge converts the incoming a.c. to
   pulsating d.c.
2. **DC bus (link)** — a large capacitor bank (and often a choke) smooths it to
   a steady d.c. rail of roughly 1.35 x the line voltage; on a 400 V supply that
   is around 540 V d.c.
3. **Inverter** — six IGBTs switch the d.c. bus on and off thousands of times a
   second in a pulse width modulated (PWM) pattern, so the average current in
   each motor winding traces out a sine wave at whatever frequency is asked for.

Because the drive builds the output waveform from scratch, it can change the
frequency and the voltage together.

## Constant volts per hertz

Flux in the stator iron depends on volts divided by hertz. Drop the frequency
without dropping the voltage and the iron saturates, magnetising current
explodes and the motor overheats. So a VSD holds V/f constant up to base speed.

### Worked example — running a 400 V 50 Hz motor at 30 Hz

- V/f ratio = 400 / 50 = **8 V per Hz**
- Output voltage at 30 Hz = 8 x 30 = **240 V**
- Synchronous speed (4 pole) = 120 x 30 / 4 = **900 rpm**
- At 4 per cent slip, shaft speed = 900 minus (0.04 x 900) = 900 minus 36 = **864 rpm**

Flux is unchanged, so full torque is still available at 864 rpm. This is the
big advantage over every other method: a VSD gives full rated torque from a
standstill while drawing little more than full-load current, typically 1.0 to
1.5 x FLC.

### Worked example — above base speed

Take the same motor to 75 Hz. The drive cannot produce more than 400 V, so
above 50 Hz the V/f ratio falls and the flux weakens.

- Available torque = 50 / 75 x rated = about **67 per cent** of rated torque
- Synchronous speed = 120 x 75 / 4 = **2250 rpm**

Below base speed you have constant torque; above it, constant power and falling
torque. Never over-speed a machine without checking the load, the bearings and
the balance of what it drives.

At very low frequency the winding resistance drop becomes significant compared
with the applied voltage, so drives add a **torque boost** (extra volts at low
speed), and better drives use sensorless vector control to hold flux precisely
and produce full torque at near-zero speed.

## Fan and pump laws — where the money is

For centrifugal fans and pumps, flow varies with speed, pressure with speed
squared and **shaft power with speed cubed**. Slowing a fan to 80 per cent speed
takes its power to 0.8 cubed = 0.51, roughly half. That is why VSDs on air
handling units and variable-flow chilled water systems pay for themselves, and
why throttling with a damper or valve is such an expensive way to control flow.

## Other ways to change speed

| Method | How it works | Limits |
|---|---|---|
| VSD | Varies frequency and voltage | Best control; cost, harmonics, motor stress |
| Pole changing (Dahlander) | Reconnects windings for two pole numbers | Only two or three fixed speeds |
| Rotor resistance (wound rotor) | Increases slip | Small range, wasteful, poor speed holding |
| Stator voltage reduction | Increases slip on high-resistance rotors | Only for fans and PSC/shaded pole motors |
| Series inductance | Drops volts to a small single-phase motor | Small fan and blower duty only |

## What a VSD does to the motor and the installation

- **Cooling.** A shaft fan turns slower at reduced speed, so cooling falls just as fast as the speed. A constant-torque load run continuously at low speed needs a force-ventilated motor with its own separately supplied blower, or a derated selection.
- **Insulation stress.** Fast IGBT switching produces steep dv/dt fronts, and on long cable runs voltage reflections can nearly double the peak at the motor terminals. Specify inverter-duty motors, keep cables short, or fit output filters or dv/dt reactors.
- **Bearing currents.** Common mode voltage can drive currents through the bearings, pitting and fluting the races. Remedies are shaft earthing brushes, insulated non-drive-end bearings and proper 360 degree screened cable terminations.
- **Harmonics.** The rectifier draws non-sinusoidal current rich in the 5th and 7th harmonics, which heats neutrals, transformers and capacitor banks. Line reactors, DC chokes, 12-pulse rectifiers or active front ends reduce it; supply authority limits apply.
- **Motor protection.** A drive's electronic overload protects the motor it is programmed for, so its FLC parameter must be set from the nameplate.
- **Power factor correction capacitors must never be connected to a drive output.** They will destroy the output stage.

>! A VSD DC bus stays charged after isolation. Wait for the manufacturer's
>! stated discharge time, commonly five minutes or more, then prove the bus is
>! dead at the DC terminals before touching anything. Test and tag as isolated,
>! and never megger a motor with the drive still connected — the test voltage
>! will destroy the output transistors.

## On the job

- Soft starters ramp voltage; torque still follows current squared.
- VSDs hold V/f constant to base speed, giving full torque at low speed with near full-load current.
- 8 V per Hz on a 400 V 50 Hz motor: check the drive output voltage against frequency if a motor is running hot.
- Above base speed you lose torque in proportion to frequency.
- Slowing a centrifugal load is a cube-law saving, which is where the payback is.
`,
        quiz: [
          {
            q: "A 400 V 50 Hz motor is run from a VSD at 25 Hz on constant volts per hertz. What output voltage should the drive be producing?",
            options: ["400 V", "283 V", "200 V", "100 V"],
            answer: 2,
            explain: "V/f = 400/50 = 8 V per Hz, so at 25 Hz the drive outputs 8 x 25 = 200 V. Holding 400 V at 25 Hz would double the flux, saturate the iron and cook the motor.",
          },
          {
            q: "A soft starter is set so the motor draws 40 per cent of its DOL starting current. Roughly what fraction of DOL starting torque is available?",
            options: ["40 per cent", "63 per cent", "16 per cent", "80 per cent"],
            answer: 2,
            explain: "Torque follows the square of the current ratio: 0.4 squared = 0.16, so only about 16 per cent of DOL torque. This is why an aggressive current limit setting leaves a loaded machine sitting at the limit without accelerating.",
          },
          {
            q: "Why does a motor driven continuously at low speed on a constant-torque load often need forced ventilation?",
            options: [
              "Because the drive adds harmonic heating to the windings only",
              "Because the shaft-mounted fan turns at motor speed, so cooling falls with speed while the load current stays high",
              "Because the insulation class changes when supplied from a drive",
              "Because the rotor frequency rises at low speed",
            ],
            answer: 1,
            explain: "On constant torque the current stays near full load, but the shaft fan slows down with the rotor and moves far less air. A separately powered blower (a force-ventilated motor) or a derated selection is the fix. Harmonic and switching losses add to the problem but the fan is the main cause.",
          },
          {
            q: "A centrifugal fan is slowed from 100 per cent to 70 per cent speed by a VSD. Approximately what shaft power does it now need?",
            options: ["70 per cent", "49 per cent", "34 per cent", "85 per cent"],
            answer: 2,
            explain: "Shaft power on a centrifugal load varies with the cube of speed: 0.7 cubed = 0.343, so about 34 per cent. Flow falls in proportion (70 per cent) and pressure with the square (49 per cent), which are the other two fan laws.",
          },
        ],
      },
      {
        id: "single-phase-split-phase",
        title: "Single-phase motors 1: why they will not start, split phase and capacitor start",
        minutes: 13,
        simple: "One winding on a single-phase supply makes a magnetic field that flips back and forth instead of going around, so the rotor just sits there and hums. Give it a second winding whose current is out of step with the first and the field starts to sweep around, giving the rotor a shove. Once it is spinning, that second winding is switched out and the motor keeps going on its own.",
        refs: REFS_SPLIT,
        content: `
Three-phase motors start themselves because three currents in three windings
make a field that genuinely rotates. Put a single winding across a single-phase
supply and the field it produces simply grows, collapses, reverses and grows
again along one axis. It is a **pulsating** field, not a rotating one. It pulls
the rotor equally hard in both directions, so the net starting torque is zero:
the motor hums, gets hot and does not turn. Spin the shaft by hand and it will
run up in whichever direction you pushed it.

## Why it runs once it is moving: the cross field

Once the rotor is turning, its bars cut the pulsating stator flux and generate
their own EMF. Rotor bars are low resistance and high inductance, so the
resulting rotor current lags nearly 90 degrees behind, and the rotor flux it
produces sits at roughly right angles to the stator flux. This is the
**cross field**. Two fluxes at 90 degrees in space and roughly 90 degrees in
time add up to something that sweeps around, and the motor keeps running.

Two consequences follow. First, single-phase motors vibrate at twice supply
frequency because the field strength is not uniform as it sweeps, so they are
noisier than three-phase machines. Second, they produce a small negative torque
component and so have a high no-load current at a poor power factor.

The synchronous speed of a single-phase motor is calculated exactly as for
three-phase: **n = 120 f / p**. A two-pole machine on 50 Hz is 3000 rpm and a
four-pole is 1500 rpm, with the rotor running some way below that.

## Splitting the phase

Every practical single-phase induction motor gets its start by creating a
second winding current out of phase with the first. The types are named after
how they do it.

## The split-phase motor

The stator carries two windings, physically 90 degrees electrical apart:

| Winding | Wire | Turns | Slot position | Result |
|---|---|---|---|---|
| Run (main) | Heavier gauge, low resistance | More turns | Deep in the slots, high inductance | Current lags the voltage by a large angle |
| Start (auxiliary) | Fine gauge, higher resistance | Fewer turns | Near the slot surface, low inductance | Current more nearly in phase with the voltage |

Both windings are connected in parallel across the supply during starting. The
difference in their resistance-to-reactance ratio pulls their currents apart by
around **25 to 30 degrees** — enough to make the resultant flux sweep around and
give a modest starting torque, but nowhere near the ideal 90 degrees, so the
field is very elliptical and the start is noisy and buzzy.

At roughly **75 per cent of rated speed** a shaft-mounted **centrifugal switch**
flies open and disconnects the start winding. From there the machine runs on the
run winding alone using cross-field action. When the motor stops, the centrifugal
mechanism drops back in ready for the next start.

The torque/speed curve therefore has a step in it, at the point where the switch
operates: starting torque of roughly 150 to 200 per cent of rated torque falls
onto the lower running curve.

Reverse a split-phase motor by swapping the two connections of **one** winding
only, usually the start winding — swap both and nothing changes. That means
reversing is an internal job, unlike the three-phase machine.

Applications: washing machines, blowers, bench grinders, buffing machines, small
machine tools — moderate starting torque, cheap.

>! The start winding is designed for a duty of a few seconds. If the centrifugal
>! switch welds shut or the motor is stalled with the switch closed, the start
>! winding will overheat in twenty to thirty seconds and burn out, often taking
>! the run winding with it.

## The capacitor-start motor

Physics limits the split-phase angle to about 30 degrees. Put a capacitor in
series with the start winding and its current can be pushed to lead the run
winding current by close to the ideal **90 degrees**. Now the rotating field is
almost circular in shape, its strength is far more uniform, and the starting
torque is much higher — commonly 250 to 400 per cent of rated torque.

Everything else is the same as the split-phase motor: the capacitor and the
start winding are still disconnected by the centrifugal switch at about 75 per
cent of speed, so the *running* curve is identical to a split-phase machine of
the same size. Only the starting end of the curve changes.

The start capacitor is an electrolytic type, physically small for its
capacitance (typically 70 to 400 microfarad on fractional and small integral
kilowatt motors), and rated for **intermittent duty** only — a handful of
seconds per start and a limited number of starts per hour.

Choose a capacitor larger than the strictly ideal value rather than smaller,
because a value that puts the start winding circuit near resonance produces
dangerous overvoltages within the winding.

Reversal is the same as for split phase: swap the two ends of one winding.

Applications: refrigeration and air conditioning compressors, air compressors,
pumps, conveyors, and anything else that has to break away against pressure or
load.

## Failure modes you will actually meet

| Symptom | Likely cause | What to check |
|---|---|---|
| Hums, will not start, gets hot fast | Start winding open, capacitor failed, switch stuck open, or stalled load | Capacitor test, resistance of both windings, turn shaft by hand |
| Starts, runs, then trips after a minute | Centrifugal switch contacts welded closed, start winding cooking | Listen for the click on run-down; measure current |
| Starts only if the shaft is spun by hand | Start circuit dead: capacitor, switch or auxiliary winding | Continuity of auxiliary circuit |
| Runs backwards after a rewind or repair | Auxiliary winding connections swapped | Compare with the wiring diagram in the terminal box |
| Bulging or leaking capacitor | Capacitor at end of life, or too many starts per hour | Replace with same capacitance and at least the same voltage rating |

The relay-and-capacitor arrangement used on hermetic refrigeration compressors
does the same job as a centrifugal switch, using a current relay, a potential
relay or a PTC starting device, because there is no shaft accessible to carry a
mechanical switch inside a sealed compressor.

>! Motor start and run capacitors hold a charge after the supply is removed and
>! a large one can hold enough energy to kill. Isolate, lock off, then discharge
>! through a resistor or an insulated screwdriver blade across the terminals of
>! small units, and confirm zero volts before handling. AS/NZS 3000:2018 Clause
>! 4.15.3 covers discharge requirements for capacitor equipment.

## What to remember

- A single winding makes a pulsating field, so there is no starting torque.
- Once turning, cross-field action keeps the motor running on one winding.
- Split phase gets 25 to 30 degrees of displacement from winding design alone; a start capacitor gets close to 90 degrees and much more torque.
- The centrifugal switch opens at about 75 per cent speed; its failure explains a huge share of single-phase motor burnouts.
- Reverse a single-phase motor by swapping one winding only, inside the machine.
`,
        quiz: [
          {
            q: "Why does a single-phase induction motor with only a run winding fail to start?",
            options: [
              "The winding has too much resistance to draw starting current",
              "The field pulsates along one axis instead of rotating, so torque in the two directions cancels",
              "The rotor bars are not skewed",
              "The supply frequency is too low to induce rotor current",
            ],
            answer: 1,
            explain: "One winding alone produces a field that alternates in strength and direction along a fixed axis. It pulls the rotor equally both ways, giving zero net starting torque, which is why the motor hums but sits still until it is spun or given a second phase-displaced winding.",
          },
          {
            q: "At approximately what speed does the centrifugal switch in a split-phase or capacitor-start motor open?",
            options: ["25 per cent of rated speed", "50 per cent of rated speed", "75 per cent of rated speed", "Just below synchronous speed"],
            answer: 2,
            explain: "The switch is set for about 75 per cent of rated speed, by which point cross-field action can sustain rotation. Leaving the start winding in beyond a few seconds overheats it, because it is wound for a very short duty cycle.",
          },
          {
            q: "What does adding a start capacitor achieve compared with a plain split-phase motor?",
            options: [
              "It increases the running efficiency and power factor",
              "It increases the phase displacement between the two winding currents from about 30 degrees to nearly 90 degrees, giving much higher starting torque",
              "It allows the motor to run without a centrifugal switch",
              "It reduces the starting current to below full-load current",
            ],
            answer: 1,
            explain: "The capacitor pushes the start winding current to lead by close to the ideal 90 degrees, producing a far more uniform rotating field and much higher starting torque. It is switched out with the start winding, so it does nothing for running performance, and the machine still needs its centrifugal switch.",
          },
          {
            q: "A capacitor-start motor starts, runs normally, then trips its protection about a minute later. What is the most likely cause?",
            options: [
              "The run capacitor has failed short circuit",
              "The centrifugal switch contacts have welded closed, so the start winding stays energised",
              "The supply voltage is 10 per cent high",
              "The rotor bars are broken",
            ],
            answer: 1,
            explain: "A start winding left connected overheats within twenty to thirty seconds because it is rated for intermittent duty only, and the rising current trips the protection. A capacitor-start motor has no run capacitor, and high supply volts would not cause a delayed trip like this.",
          },
        ],
      },
      {
        id: "single-phase-capacitor-shaded-universal",
        title: "Single-phase motors 2: CSCR, PSC, shaded pole and universal",
        minutes: 13,
        simple: "Once you understand that every single-phase motor is just a different way of faking a second phase, the whole family makes sense. Some keep the capacitor in permanently for smooth quiet running, some cheat with a copper ring around part of the pole, and one has brushes and will run on d.c. as happily as a.c.",
        refs: REFS_1PH2,
        content: `
The split-phase and capacitor-start machines from the last lesson both throw
away their auxiliary winding once running. The rest of the single-phase family
either keeps it, or uses a completely different trick.

## Capacitor-start, capacitor-run (CSCR)

Both windings — now called **main** and **auxiliary** — stay connected across
the supply permanently. A **run capacitor** is permanently in series with the
auxiliary winding, and a much larger **start capacitor** is paralleled with it
for starting only, being disconnected by the centrifugal switch at about 75 per
cent of speed.

The result is a motor that starts like a capacitor-start machine and runs with a
genuine two-phase rotating field of constant strength. Compared with the
capacitor-start, induction-run machine, adding the run capacitor:

- increases breakdown torque
- improves full-load efficiency and power factor
- reduces noise and vibration
- increases locked rotor torque

The two capacitors have very different jobs and very different construction:

| Capacitor | Typical value | Duty | Construction |
|---|---|---|---|
| Start | large, tens to hundreds of microfarad | Intermittent, seconds per start | Electrolytic, small case |
| Run | small, typically 2 to 60 microfarad | Continuous, energised whenever the motor runs | Metallised polypropylene or oil-filled, larger case for its value |

Never substitute an electrolytic start capacitor for a run capacitor; it will
fail, sometimes violently, within minutes.

Applications: wall-mounted and packaged air conditioners, heavier duty
refrigeration where high head pressures must be started against and quiet
running matters.

## Permanent split capacitor (PSC)

Simplest of the capacitor family. Both windings are identical in wire size and
turns, both stay connected, and one run capacitor is permanently in series with
the auxiliary winding. There is no start capacitor and no centrifugal switch —
so there is nothing mechanical to fail.

Because the run capacitor is sized for running rather than starting, the phase
displacement at standstill is modest and the **starting torque is low**. That is
fine for the loads it is used on. Being symmetrical, a PSC motor is reversed
simply by moving the line connection so the capacitor sits in series with the
*other* winding: the two windings swap roles and the field rotates the other
way. That makes it the natural choice where frequent reversal is wanted.

Its speed can also be trimmed over a limited range with a series inductance or
by tapping the winding, because a fan load falls away so quickly with speed.

Applications: fans and blowers, ceiling fans, evaporator and condenser fan
motors, unit heaters, damper and induction regulator actuators, air conditioning
air-flow controls.

## Shaded pole motor

The cheapest motor ever made. The stator has **salient poles** with a single
main coil, and a slot is cut across one side of each pole face carrying a short
circuited turn of heavy copper — the **shading ring**.

As the main flux rises rapidly, it induces a current in the low-resistance
shading ring. By Lenz's law that current opposes the rise, so flux is pushed
into the unshaded part of the pole. Around the peak of the wave the flux is
barely changing, almost nothing is induced in the ring, and the flux spreads
evenly across the whole pole face. As the flux collapses, the ring current now
opposes the collapse, so flux is concentrated in the **shaded** part.

The magnetic axis therefore sweeps across the pole face from the unshaded side
to the shaded side, once each half cycle. It is a poor imitation of a rotating
field, but it is enough: the rotor turns towards the shaded portion of the pole.

Characteristics: extremely low starting torque, slip higher than other
single-phase types, poor efficiency, but no switch, no capacitor, no brushes and
no slip-rings to maintain. That combination restricts it to small ratings, and
its speed can be varied with a series resistor or inductor.

Reversal is awkward: the field direction is fixed by which side of the pole
carries the ring. Some designs provide slots on both sides so the rings can be
moved; on many the only option is to remove the stator and refit it the other
way around in the frame.

Applications: small fans inside appliances, fan heaters, advertising signs, hair
dryers, damper controllers, small pumps in domestic appliances.

## The universal (a.c. series) motor

This one is not an induction motor at all. It is a d.c. series motor built to
work on a.c. as well, which is why it is called universal.

**Construction.** A wound armature with commutator and carbon brushes, like a
d.c. machine, and two field coils of concentrated winding on laminated salient
poles. Field and armature are in **series**, so the same current flows through
both.

**Operation.** Because field current and armature current are the same current,
their fluxes are always in phase. When the supply reverses, *both* fluxes
reverse, and the product of two reversed quantities gives torque in the same
direction as before. So the machine develops unidirectional torque on a.c.
supply, at powerline frequencies, as well as on d.c.

**Characteristics.** A steeply falling speed/load curve: heavy load means low
speed, light load means very high speed. Domestic units reach 15 000 rpm and
higher, restrained mainly by their own friction and windage losses; larger units
need governors, because a series machine run with no load can destroy itself.
Excellent torque for its size and weight, which is why every hand tool uses one.

**Reversal** is by swapping the connections to either the armature or the field
— not both. Reversing both leaves the direction unchanged.

Applications: drills, angle grinders, circular saws, vacuum cleaners, food
mixers, sewing machines, small washing machines, business machines.

Their weak point is the brushgear: brushes wear, the commutator glazes or
grooves, and brush sparking creates radio interference and eventually
commutator damage.

## Summary of the family

| Type | Starting torque | Reversal method | Typical application |
|---|---|---|---|
| Split phase | Moderate | Swap one winding's connections | Washing machines, blowers, bench grinders |
| Capacitor start | High | Swap one winding's connections | Pumps, small compressors |
| Capacitor start / capacitor run | High, plus better running | Swap one winding's connections | Air conditioning units |
| Permanent split capacitor | Very low | Move line so capacitor feeds the other winding | Fans, ceiling fans, frequently reversed light loads |
| Shaded pole | Very low | Move shading rings, or turn the stator around | Appliance fans, fan heaters |
| Universal series | Good for its size | Swap either field or armature connections | Hand tools, domestic appliances |

## Single phase against three phase

| Three-phase advantages | Single-phase advantages |
|---|---|
| Smaller and lighter for the same power output | Only two windings, one of light construction |
| Better use of the iron core, higher efficiency | Suits automatic machine winding, cheaper to make |
| Lower line current for the same output | Runs on a single-phase supply, available everywhere |
| Self-starting; no switch, capacitor or start winding | |
| Less vibration, because field strength is constant | |
| Reversed externally by swapping two lines | |
| Starting current more easily controlled without losing torque | |
| Suits sealed and submersible applications with fewer complications | |

The three-phase disadvantages are that it needs three identical windings, a
three-phase supply and more winding labour. The single-phase disadvantages are
higher line current for the same power, distributors limiting the starting
current of larger single-phase motors, and reversal being an internal job.

## On the job

- CSCR = both windings permanently connected, start capacitor switched out, run capacitor stays.
- PSC has no switch and no start capacitor, so low starting torque but long life and easy reversal.
- Shaded pole: no switch, no capacitor, poor efficiency, tiny torque, very cheap.
- Universal motors run on a.c. or d.c., go dangerously fast unloaded, and live or die by their brushes.
- Match a replacement capacitor for microfarads, voltage rating and duty type.
`,
        quiz: [
          {
            q: "What distinguishes a permanent split capacitor motor from a capacitor-start, capacitor-run motor?",
            options: [
              "The PSC has no start capacitor and no centrifugal switch, so its starting torque is low",
              "The PSC uses an electrolytic capacitor for continuous running",
              "The PSC disconnects its auxiliary winding once running",
              "The PSC has salient poles with shading rings",
            ],
            answer: 0,
            explain: "A PSC keeps one run capacitor permanently in series with the auxiliary winding and has nothing to switch, which makes it reliable and easy to reverse but leaves it with low starting torque. A CSCR adds a large intermittent-duty start capacitor that a centrifugal switch removes at about 75 per cent of speed.",
          },
          {
            q: "In a shaded pole motor, which way does the rotor turn?",
            options: [
              "Towards the unshaded portion of the pole",
              "Towards the shaded portion of the pole",
              "In whichever direction the rotor is first pushed",
              "It depends on the supply phase sequence",
            ],
            answer: 1,
            explain: "The magnetic axis sweeps across the pole face from the unshaded side towards the shaded side, and the rotor follows that sweep. Reversal therefore requires the shading rings to be on the other side of the pole, or the stator to be turned around in its frame.",
          },
          {
            q: "Why does a universal motor develop torque in a constant direction on an a.c. supply?",
            options: [
              "A commutator rectifies the supply to d.c. before it reaches the field",
              "Field and armature are in series, so both fluxes reverse together and the torque direction is unchanged",
              "The field coils are laminated so their flux cannot reverse",
              "The brushes disconnect the armature during each negative half cycle",
            ],
            answer: 1,
            explain: "The same series current produces both fluxes, so when the supply reverses both reverse at once and their interaction still pushes the same way. Reversal is achieved by swapping the connections of the field or the armature but not both.",
          },
          {
            q: "A run capacitor in a PSC fan motor is replaced with an electrolytic start capacitor of the same microfarad value. What is the likely outcome?",
            options: [
              "The motor will run with higher efficiency",
              "The capacitor will overheat and fail, possibly violently, because it is rated only for intermittent duty",
              "Nothing, provided the voltage rating is correct",
              "The motor will run in reverse",
            ],
            answer: 1,
            explain: "Start capacitors are electrolytic and rated for a few seconds of energisation per start. A PSC energises its capacitor continuously, so an electrolytic in that position overheats and fails. Run capacitors are metallised polypropylene or oil-filled types built for continuous duty.",
          },
        ],
      },
      {
        id: "alternators",
        title: "Synchronous generators: alternators from the shaft to the switchboard",
        minutes: 15,
        simple: "An alternator is a motor run backwards: instead of feeding it electricity to get a spinning shaft, you spin the shaft to get electricity. A d.c.-fed magnet spins inside three fixed coils, and each coil gets its turn under the magnet, one after the other, which is exactly what three-phase means.",
        refs: REFS_ALT,
        content: `
A machine built to run at synchronous speed is a **synchronous machine**, and
the same machine works as a motor or a generator. As a generator it is called an
alternator or a.c. generator; as an unloaded motor used for power factor
correction it is called a synchronous condenser.

Every synchronous machine has two windings: a three-phase a.c. winding (the
**armature**) and a d.c. winding that supplies the magnetic field (the
**excitation** or field winding).

## Rotating field, not rotating armature

In theory it makes no difference whether the armature spins inside fixed poles
or the poles spin inside a fixed armature. In practice virtually all alternators
are **rotating field** machines: the d.c. field is on the rotor, the a.c.
winding sits in the stator. The reasons are entirely practical:

- The stator has room for heavy, well-insulated a.c. windings; generator terminal voltages run up to 33 kV, which cannot be taken out through slip-rings.
- Output can be megawatts; only solid bolted connections can carry it.
- The rotating winding carries only modest d.c. voltage and current.
- A simple, strong rotor suits the high speeds of turbine drives.

### Stator

A slotted laminated core carrying three identical distributed windings 120
degrees electrical apart, each made of coil groups in series forming the
required number of poles. The three phases are terminated in star or delta.

### Rotor: two shapes for two speeds

| Rotor type | Shape | Speed range | Driven by |
|---|---|---|---|
| Salient pole | Large diameter, short axial length, bolted poles on a spider, shaped pole faces | Low, many poles | Diesel engines, hydro turbines |
| Cylindrical (high speed) | Small diameter, long axial length, windings in slots | High, 2 or 4 poles | Steam and gas turbines |

Salient poles cannot be used at high speed because the peripheral (centrifugal)
force on bolted poles would tear them off. Hydro sets run vertically and need
special thrust bearings to carry the weight of the rotating mass.

## Generating the voltage

The principle is unchanged from first-year theory: relative motion between a
conductor and a field induces an EMF, its direction given by Fleming's
right-hand rule, and its instantaneous value by

**e = B l v sin(theta)**

where B is flux density, l is the conductor length in the field, v is velocity
and theta is the angle at which the conductor cuts the field.

Three windings 120 degrees apart in the stator therefore produce three EMFs 120
degrees apart in time — a three-phase output.

## Frequency and speed

The same relationship as for motors, seen from the other side:

**f = p n / 120** , and transposed, **n = 120 f / p**

### Worked example 1 — governor setting for a diesel set

At what speed must a 12-pole diesel-driven alternator run to generate 50 Hz?

- n = 120 f / p = 120 x 50 / 12 = 6000 / 12 = **500 rpm**

Most diesel prime movers run between 500 and 1000 rpm, which is why engine-driven
alternators have many pole pairs.

### Worked example 2 — a turbo-alternator

A steam turbine runs efficiently at 3000 rpm. How many poles must its alternator
have for 50 Hz?

- p = 120 f / n = 120 x 50 / 3000 = **2 poles**

A 24-pole machine at 50 Hz gives 120 x 50 / 24 = 250 rpm; low speed means a
large diameter, short machine, while high speed means a small diameter, long
machine.

## Excitation

The rotor field needs d.c. Traditionally each machine had its own small d.c.
generator, the **exciter**, usually direct coupled to the rotor shaft, and its
output was taken to the rotor through slip-rings. A rheostat in the exciter field
circuit sets the strength of the main field, and therefore the output voltage.
Very large machines need a pilot exciter to excite the exciter.

**Brushless excitation** removed the brushgear entirely. The exciter is turned
inside out: its armature is a small three-phase winding on the main shaft, and
its field is stationary. The three-phase output of that rotating exciter armature
is rectified by diodes that also rotate on the shaft, and the d.c. is fed
directly to the main rotor field — no brushes, no rings, no carbon dust. A
voltage regulator senses the machine's output voltage and current and controls
the stationary exciter field to hold the output steady.

## The generated voltage equation

**Vg = 4.44 x flux x f x N x kd x kp**

where flux is the flux per pole in webers, f the frequency in hertz, N the turns
per phase, kd a distribution factor and kp a coil pitch factor.

### Worked example 3 — output of a star-connected alternator

A 50 Hz star-connected alternator has 0.67 Wb per pole, 36 turns per phase, kd =
0.85 and kp = 0.98. Find its line voltage.

- Vg (per phase) = 4.44 x 0.67 x 50 x 36 x 0.85 x 0.98
- 4.44 x 0.67 = 2.975; x 50 = 148.7; x 36 = 5354
- 5354 x 0.85 = 4551; x 0.98 = **4460 V per phase**
- Line voltage = root 3 x phase voltage = 1.732 x 4460 = 7725 V = **7.73 kV**

In an operating machine, frequency is fixed by the speed the system needs, and
the turns and winding factors cannot change. That reduces the whole equation to
**Vg = k x flux x f**, which tells you the only two things an operator can adjust
are the excitation (flux) and the speed (frequency). Set the speed first, then
the voltage — do it the other way and every speed adjustment moves the voltage
again.

## What load does to the output voltage

An alternator behaves like an ideal source in series with a resistance
(representing copper and iron losses) and an inductance (winding inductance and
leakage). Load current therefore drops volts inside the machine, and the load
current in the stator also produces an **armature reaction** flux that interacts
with the main field:

| Load power factor | Armature reaction effect | Terminal voltage |
|---|---|---|
| Unity | Distorts the main field only | Falls slightly, from impedance drop |
| Lagging | Opposes the rotor field, weakening it | Falls significantly |
| Leading | Assists the rotor field | Can rise above the no-load value |

That is why an alternator feeding a big inductive load needs far more excitation
to hold its voltage than the same alternator feeding lamps.

## Voltage regulation

**VR per cent = (V no load minus V full load) / V full load x 100**

### Worked example 4 — regulation of a 3300 V machine

A three-phase star-connected alternator gives 3300 V at full load, unity power
factor. Remove the load, leave the excitation untouched, and the voltage rises to
3350 V. Find the regulation.

- VR = (3350 minus 3300) / 3300 x 100
- VR = 50 / 3300 x 100 = **1.5 per cent at unity power factor**

Regulation must always be quoted with the power factor it was measured at,
because at a lagging power factor the same machine would show a much larger
figure.

## Ratings

An alternator is rated by frequency, voltage and current. Frequency fixes the
driven speed, and voltage and current together give the **kVA** rating. It is
never rated in kilowatts, because the power factor of the load is chosen by the
customer, not the manufacturer, and can change hour to hour.

### Worked example 5 — kW and full-load current

A three-phase 400 V 50 Hz alternator is rated 150 kVA at 0.8 power factor. Find
its true power output at 0.8 and at 0.6 power factor, and its full-load current.

- At 0.8 pf: P = 150 x 0.8 = **120 kW**
- At 0.6 pf: P = 150 x 0.6 = **90 kW**
- Full-load current: I = P / (root 3 x V x cos phi) = 120 000 / (1.732 x 400 x 0.8)
- I = 120 000 / 554.3 = **217 A**

That 217 A is the winding limit and it applies whatever the power factor,
because it is heating, not power, that limits the machine. This is why a
generator supplying a poor power factor load runs out of amps long before it runs
out of kilowatts.

## Alternators in parallel

Power stations run several machines in parallel because efficiency peaks near
full load, so it is better to run two machines fully loaded than four at half
load. Before an alternator can be paralleled, five conditions must be met:

1. Identical waveform (a design matter — all machines generate sinusoidal).
2. Same phase sequence (checked at commissioning, not every time).
3. Same voltage — adjusted with the field excitation.
4. Voltages in phase — checked with synchronising lamps on small sets, or a
   synchroscope or check-synchronising relay on large ones.
5. Same frequency — adjusted with the prime mover governor.

Once paralleled, the controls change meaning:

- **Governor set points share the kilowatts.** Raise one governor and lower the other to shift load between machines; raise both together to lift system frequency.
- **Field current sets the power factor**, not the voltage. Raise the excitation on one and lower it on the other to shift reactive load; raise both together to lift system voltage.

Against a large grid — an **infinite bus** — the operator has no influence on
voltage or frequency at all. The governor then simply decides how many kilowatts
that machine exports, and the field current decides its power factor.

## Hunting and damper windings

A piston engine does not deliver constant torque through a revolution, so the
shaft speed varies slightly, and the machine oscillates about its average speed.
This **hunting** causes small voltage fluctuations, waveform distortion and
circulating currents between paralleled machines. The cures are a heavy flywheel
and **amortisseur (damper) windings**: copper bars set into the pole faces and
shorted at each end, so any swing induces currents that oppose it. High-speed
turbine sets suffer far less, their oscillation usually coming from governor
adjustments as load changes.

## Cooling

Low-speed machines are large in diameter and short, with plenty of surface area
and a natural fanning action from the rotating poles, so cooling is easy. A large
high-speed machine is long and slim, so heat from the middle of the core cannot
escape. Those machines are totally enclosed with forced ventilation, the air
filtered and sometimes washed (which cools it as well as cleaning it, allowing a
higher rating). The largest machines are **hydrogen cooled**: hydrogen absorbs
heat far better than air and creates less windage, and the machine is completely
sealed so no explosive hydrogen/air mixture can form. Bearing oil is kept at a
higher pressure than the hydrogen so the seals leak oil inwards, and the oil is
vacuum treated before reuse.

## Standby supplies and engine-driven sets

Two categories exist. **Uninterruptible power supplies** (UPS) tolerate no break
at all — computers, hospital and aircraft equipment. A UPS keeps a battery
floating on charge from a rectifier, with an inverter permanently producing the
a.c. output, so loss of mains changes nothing except where the energy comes from.
Critical installations add an engine-driven alternator to keep the battery
charged; the battery only has to carry the load while the engine starts and runs
up to speed, plus a margin for a failed start.

The second category tolerates a break of some seconds: emergency lighting,
theatres, lifts, ventilation for intensive agriculture. An automatic changeover
contactor drops out on mains failure, cranks the engine and connects the load
once the set is up to speed.

When choosing an engine-driven set, weigh purchase price (small sets cost more
per kVA and run less efficiently), the prime mover (diesel costs more to buy and
maintain but is cheaper per hour and prefers full load; petrol is cheap, tolerant
of poorer fuel and suits small portable intermittent duty), the starting method,
and the load profile — especially motor starting currents, since the set must
hold both voltage and frequency through the surge.

## Induction generators

An ordinary cage induction motor becomes a generator with no internal
modification: drive it **above** synchronous speed and slip goes negative, so the
machine exports real power instead of absorbing it. It still needs an excitation
source for the magnetising flux, either from the grid it is connected to or from
capacitors plus residual rotor magnetism. Output power is proportional to the
negative slip. Small wind and micro-hydro installations use exactly this.

## What to remember

- Alternators are rotating field machines: d.c. on the rotor, a.c. on the stator.
- n = 120 f / p works for generators exactly as for motors.
- Vg = 4.44 x flux x f x N x kd x kp; in service only flux and frequency change.
- Rated in kVA, never kW; full-load current is a heating limit.
- Paralleling: governors move kilowatts, excitation moves power factor.
`,
        quiz: [
          {
            q: "A 500 kVA three-phase alternator is rated at 0.8 power factor. What true power can it deliver into a 0.6 power factor load without exceeding its rated current?",
            options: ["500 kW", "400 kW", "300 kW", "It cannot deliver into a 0.6 power factor load"],
            answer: 2,
            explain: "The kVA rating is a heating limit, so the current stays the same and P = 500 x 0.6 = 300 kW. This is why alternators are rated in kVA: the customer chooses the power factor, and a poor one uses up the amps without delivering kilowatts.",
          },
          {
            q: "Two alternators run in parallel sharing a load. What happens if the governor set point on one machine only is increased?",
            options: [
              "That machine takes more of the kilowatt load and the system frequency rises",
              "That machine's power factor becomes more lagging",
              "The system voltage rises",
              "Nothing changes, because the grid fixes both machines",
            ],
            answer: 0,
            explain: "Governor set points control real power sharing, so raising one alone shifts load onto it and lifts system frequency. To shift load without changing frequency you raise one governor and lower the other; power factor sharing is adjusted with the field excitation instead.",
          },
          {
            q: "Why are virtually all alternators built as rotating field machines rather than rotating armature machines?",
            options: [
              "Because a rotating armature cannot generate three-phase output",
              "Because the high-voltage, high-current a.c. windings can then be stationary with solid connections, leaving only modest d.c. on the rotor",
              "Because the field winding is heavier than the armature winding",
              "Because slip-rings cannot carry direct current",
            ],
            answer: 1,
            explain: "Terminal voltages up to 33 kV and outputs in megawatts cannot be taken out through slip-rings and brushes. Putting the a.c. winding in the stator gives room for insulation and solid connections, leaving only low-voltage d.c. excitation on the rotating part.",
          },
          {
            q: "An alternator supplies 415 V at full load with a lagging power factor. When the load is removed with the excitation unchanged, the voltage rises to 448 V. What is the voltage regulation?",
            options: ["7.4 per cent", "7.9 per cent", "8.0 per cent", "33 per cent"],
            answer: 1,
            explain: "VR = (448 minus 415)/415 x 100 = 33/415 x 100 = 7.9 per cent. The full-load value is always the denominator; dividing by the no-load voltage gives 7.4 per cent, which is the classic error.",
          },
        ],
      },
      {
        id: "synchronous-motors",
        title: "Synchronous motors, V curves and power factor correction",
        minutes: 12,
        simple: "A synchronous motor locks its rotor magnets onto the spinning stator field and turns at exactly that speed, no slip at all, no matter what the load is. It has one trick no other motor has: by turning its d.c. field up or down you can make it draw a leading current and improve the power factor of the whole factory.",
        refs: REFS_SYNCMOT,
        content: `
Feed a synchronous machine at its rated voltage and frequency instead of driving
it, and it runs as a **synchronous motor**. Because the supply frequency is
fixed, its speed is fixed — it turns at synchronous speed regardless of load,
right up to the moment it can no longer cope and falls out of step.

## Construction

The stator is exactly as in an alternator or induction motor: a three-phase
winding producing a field rotating at n = 120 f / p. The rotor is usually a
salient pole design, and when it is fed with d.c. it becomes a set of alternating
north and south poles.

## Operating principle

There is no induction, no slip and no rotor current from transformer action. The
rotor poles are simply **magnetically locked** to the poles of the rotating
stator field, north following south around the bore. Magnetic attraction, not
induced current, produces the torque.

That has one awkward consequence: a synchronous motor has **no starting torque**.
At standstill the stator field sweeps past the stationary rotor poles so quickly
that it alternately pulls and pushes, averaging zero. The rotor must be brought
close to synchronous speed by other means before the d.c. field is applied and
the poles can lock in.

## Torque angle

On no load the rotor poles sit almost exactly opposite the stator poles. Apply
load and the rotor cannot slow down — it must still turn at synchronous speed —
so instead it drops back in *position*, lagging the stator poles by a **torque
angle** (or load angle). The greater the load, the greater the angle, as if the
two sets of poles were joined by a springy magnetic coupling that stretches.

Push the load past the machine's limit and the coupling breaks: the motor pulls
out of synchronism and stops dead. There is no graceful decline as with slip in
an induction motor.

Meanwhile the excited rotor induces a back EMF in the stator windings. On no
load with an ideal machine, that induced voltage is equal and opposite to the
applied voltage, the resultant across the winding is nearly zero and almost no
current flows. Load the shaft, the torque angle grows, the induced voltage swings
round in phase, a resultant voltage appears across the winding and current flows
— larger current at a larger phase angle as the load increases. That is how a
synchronous motor draws power without any change of speed.

## V curves: the useful trick

The line current and power factor of a synchronous motor depend on the **d.c.
field excitation**, and with the mechanical load held constant the power input
must stay constant. That forces the current phasor to move in a very particular
way:

| Excitation | Induced voltage | Line current | Power factor |
|---|---|---|---|
| Under-excited | Low | Higher than minimum | Lagging |
| Normal excitation | Matched | Minimum | Unity |
| Over-excited | High | Higher than minimum | Leading |

Plot the stator current against field current for a fixed load and you get a
V-shaped curve — high on both sides, minimum at unity power factor. One curve
for no load, another for full load, hence the family of **V curves**.

This is unique among motors: no induction motor can be made to draw leading
current. It is why synchronous machines earn their keep in large installations.

>! Excitation has limits in both directions. Under-excite too far and the
>! magnetic bond weakens until the load exceeds pull-out torque and the machine
>! drops out of synchronism. Over-excite too far and line current and mechanical
>! stiffness both exceed the machine's design values, so shaft stresses rise with
>! every load change. Adjust excitation within the manufacturer's limits, watching
>! the stator ammeter.

## Applications

**Power factor correction.** An over-excited synchronous motor draws leading
current, which offsets the lagging current of every induction motor around it.
It can be doing useful work at the same time — driving air or hydraulic
compressors, large fans and blowers, high-pressure water pumps. Run with no
mechanical load at all, purely to supply leading kVAr, it is called a
**synchronous condenser** or synchronous capacitor. Since distributors reward
installations that hold power factor above a set figure, that can be worth real
money on the electricity account.

**Transmission voltage control.** Synchronous machines installed along a
transmission line can be excited to draw leading or lagging current on demand,
raising or lowering line voltage and improving system stability.

**Low-speed drives.** Efficiency of an induction motor falls away at low speed;
a synchronous machine keeps its efficiency, so its higher purchase price is paid
back in running cost.

**Rock and ore crushers.** Slow-moving crushing heads with heavy flywheels, where
constant speed and the ability to absorb shock loads both matter.

## Starting methods

**Pony (auxiliary) motor.** A small motor accelerates the machine to near
synchronous speed, at which point it is synchronised and connected to the supply.
Expensive, and useless if the load needs starting torque.

**Induction motor starting.** The usual method. Reduced voltage is applied to the
stator and the rotor d.c. winding is short-circuited. The **amortisseur
(damper) windings** in the pole faces act as a cage rotor, so the machine
accelerates as an induction motor to just below synchronism. The short is then
removed, d.c. is applied to the field and full voltage to the stator, and the
rotor pulls into step.

## Hunting

A load change makes the torque angle change, but rotor inertia carries the rotor
past its new equilibrium position, so it swings back and forth around it. The
average speed is still synchronous, but the line current fluctuates
unpleasantly. The cure is again the amortisseur winding: copper bars in the pole
faces, shorted at each end, so any swing induces currents that oppose it. Those
same bars, often extended right around the rotor into a cage, do double duty as
the starting winding.

## Single-phase synchronous motors

Small constant-speed machines, low efficiency, used where speed accuracy matters
and torque demand is tiny — timers, clocks, chart recorders, small drives.

**Reluctance motor.** The stator is wound like a split-phase or capacitor-start
motor. The rotor is a cage rotor with teeth cut away from some of the
laminations to leave definite salient poles, often of unequal spacing to help
starting. It starts as an ordinary single-phase induction motor and then pulls
into synchronism because the salient poles prefer to align with the field — the
path of least reluctance. The rotor pole count need not match the stator's.

**Hysteresis motor.** The rotor is a plain cylinder of magnetically hard,
high-hysteresis-loss material with high resistance to limit eddy currents. The
stator has main and auxiliary windings. Torque comes from hysteresis loss in the
rotor material, and as the rotor nears synchronous speed it magnetises and locks
to the field. Very smooth and quiet, which is why they were the standard turntable
and clock motor.

## What to remember

- No slip, no speed change with load: speed is n = 120 f / p, full stop.
- Load shows up as an increased torque angle, not reduced speed; exceed pull-out and it stops immediately.
- Under-excited draws lagging current, over-excited draws leading current, minimum current at unity power factor — the V curves.
- An over-excited synchronous machine is a power factor correction device that can also drive a load; unloaded it is a synchronous condenser.
- It cannot start itself; damper windings let it start as an induction motor.
`,
        quiz: [
          {
            q: "What happens to the speed of a synchronous motor as mechanical load is increased?",
            options: [
              "It falls in proportion to the load, as slip increases",
              "It stays at synchronous speed while the torque angle increases",
              "It rises slightly because the excitation increases",
              "It oscillates around synchronous speed permanently",
            ],
            answer: 1,
            explain: "The rotor is magnetically locked to the stator field, so it cannot slow down; it instead drops back in position, increasing the torque angle. Slip belongs to induction motors, and a synchronous motor that is overloaded past its pull-out torque simply stops rather than slowing.",
          },
          {
            q: "A synchronous motor driving a constant load has its d.c. field excitation increased beyond the value that gives minimum stator current. What is the result?",
            options: [
              "Stator current falls further and the power factor stays at unity",
              "Stator current rises and the power factor becomes leading",
              "Stator current rises and the power factor becomes lagging",
              "The motor speeds up above synchronous speed",
            ],
            answer: 1,
            explain: "Over-excitation raises the induced voltage, and because the power input is fixed by the load, the current must increase with a leading phase angle. That leading current is exactly what makes an over-excited synchronous machine useful for power factor correction.",
          },
          {
            q: "How is a large three-phase synchronous motor usually started?",
            options: [
              "By applying d.c. to the rotor and full voltage to the stator simultaneously",
              "With the rotor winding short-circuited so the amortisseur windings let it accelerate as an induction motor, then applying d.c.",
              "By using its own V curves to develop starting torque",
              "By reducing the supply frequency to zero and ramping it up",
            ],
            answer: 1,
            explain: "A synchronous motor has no starting torque of its own, so the damper bars in the pole faces are used as a cage winding to accelerate it to near synchronous speed. Only then is the field short removed, d.c. applied and the rotor pulled into step. A VSD ramp is possible on modern drives but is not the classic method.",
          },
          {
            q: "What is a synchronous condenser?",
            options: [
              "A capacitor bank switched in step with a synchronous motor",
              "An over-excited synchronous motor run without mechanical load purely to supply leading reactive current",
              "The run capacitor fitted to a single-phase synchronous motor",
              "A synchronous generator operating at leading power factor",
            ],
            answer: 1,
            explain: "Run unloaded and over-excited, a synchronous machine draws a leading current and behaves like a large adjustable capacitor, correcting the power factor of an installation. Unlike a fixed capacitor bank its output is continuously adjustable through the field current.",
          },
        ],
      },
      {
        id: "nameplate-ratings-efficiency",
        title: "Nameplate data, insulation, duty types, enclosures and efficiency",
        minutes: 14,
        simple: "The metal plate riveted to the side of a motor tells you everything you need to select it, protect it and replace it. Learn to read it and you can work out the running current, the correct overload setting, how hot the windings are allowed to get, and whether the motor is suitable for where it is going.",
        refs: REFS_NAMEPLATE,
        content: `
Correct motor selection decides whether a machine runs for twenty years or
twenty months, and everything you need to make that decision is stamped on the
nameplate. It is also the first thing to photograph on any callout.

## What is on the plate

| Item | What it tells you |
|---|---|
| Model or type, serial number, date | Identification for spares and warranty |
| Rated voltage and frequency | The supply it is designed for, e.g. 400 V 50 Hz |
| Winding connection | Star or delta, often as 400 V delta / 690 V star |
| Rated output | Shaft power in kilowatts, not input power |
| Full-load current | The number your overload is set from |
| Rated speed | Full-load rpm, from which you deduce the pole number |
| Power factor | cos phi at full load |
| Efficiency | Full-load efficiency, sometimes with part-load figures |
| Insulation class | A, B, F or H — how hot the windings may get |
| Duty type | S1, S2, S3 and so on |
| Enclosure and IP rating | Degree of protection against solids and water |
| Cooling and mounting codes | IC and IM designations under AS/NZS 1359 |

### Worked example 1 — full-load current from nameplate data

A 15 kW 400 V 50 Hz three-phase motor has an efficiency of 0.90 and a power
factor of 0.85. Confirm the nameplate full-load current.

Output is shaft power, so the input power is higher:

- P(in) = P(out) / efficiency = 15 000 / 0.90 = **16 667 W**
- I = P(in) / (root 3 x V x cos phi) = 16 667 / (1.732 x 400 x 0.85)
- Denominator = 1.732 x 400 = 692.8; x 0.85 = 588.9
- I = 16 667 / 588.9 = **28.3 A**

A useful field check on a 400 V supply is roughly 2 A per kilowatt of rated
output for a typical four-pole motor. Our 15 kW motor at 28.3 A fits neatly.

### Worked example 2 — efficiency and losses from measurements

The same motor is measured on load: 400 V, 28.3 A, power factor 0.85, and the
driven machine needs 15 kW at the shaft.

- P(in) = root 3 x V x I x cos phi = 1.732 x 400 x 28.3 x 0.85
- 1.732 x 400 x 28.3 = 19 606 VA; x 0.85 = **16 665 W**
- Efficiency = P(out) / P(in) = 15 000 / 16 665 = 0.90 = **90 per cent**
- Losses = 16 665 minus 15 000 = **1665 W**, all of it heat inside the frame

Those losses are not one thing but five:

| Loss | Where | How it is reduced |
|---|---|---|
| Stator copper (I squared R) | Stator winding | More copper, larger slot fill, avoid overloading |
| Rotor copper | Cage bars and end rings | Lower resistance bars, low slip design |
| Iron (hysteresis and eddy current) | Stator and rotor core | Thin, high grade, insulated laminations |
| Friction and windage | Bearings, seals, fan | Good bearings, correct grease, efficient fan design |
| Stray load loss | Leakage flux, harmonics | Better slot design and manufacture |

## Insulation classes and temperature

Winding insulation, not copper, is what fails. The governing rule of thumb is
that **every 10 degrees C of continuous over-temperature halves the life of the
insulation**. The book's own illustration is stark: insulation designed for
90 degrees C might last 25 years; run it at 180 degrees C and its life falls to
about 1.25 years.

| Class | Maximum temperature rise (K) | Hot-spot allowance (K) | Maximum winding temperature |
|---|---|---|---|
| A | 60 | 5 | 105 degrees C |
| B | 80 | 10 | 130 degrees C |
| F | 105 | 10 | 155 degrees C |
| H | 125 | 15 | 180 degrees C |

Those rise figures are referenced to a standard ambient of 40 degrees C. Add the
three columns and you get the class limit: 40 + 80 + 10 = 130 for class B. It
follows that in a hotter room you get less permitted rise, and the motor must be
derated. A machine that copes happily in a 25 degrees C plant room may cook in a
45 degrees C roof space doing exactly the same work.

**Temperature rise** is the difference between the winding temperature and the
ambient. The winding temperature itself is not measured with a thermometer — you
cannot get to the hot part — so it is calculated by the **resistance method**,
using the fact that copper resistance changes linearly with temperature. The
extrapolated temperature at which copper would have zero resistance is
**minus 234.5 degrees C**, which is the constant in the formula:

**R2 / R1 = (234.5 + t2) / (234.5 + t1)**

### Worked example 3 — winding temperature by the resistance method

A motor winding measures 16.5 ohms at 25 degrees C. After two hours at full
load it measures 20 ohms. Find the winding temperature.

- t2 = (R2 / R1) x (234.5 + t1) minus 234.5
- t2 = (20 / 16.5) x (234.5 + 25) minus 234.5
- t2 = 1.212 x 259.5 minus 234.5
- t2 = 314.5 minus 234.5 = **80 degrees C**

### Worked example 4 — temperature rise and the hot-spot allowance

Same machine, same figures, but the ambient stayed at 25 degrees C throughout.

- Rise = ((R2 minus R1) / R1) x (234.5 + t1)
- Rise = ((20 minus 16.5) / 16.5) x 259.5 = (3.5 / 16.5) x 259.5
- Rise = 0.2121 x 259.5 = **55 degrees C (55 K)**

Because the resistance method gives an *average* temperature, add the hot-spot
allowance:

- Corrected rise = 55 + 10 = **65 K**
- Winding temperature = rise + ambient = 65 + 25 = **90 degrees C**

For class A insulation with a 105 degrees C limit, this motor is inside its safe
range — but only by 15 K, so a hotter day or a blocked shroud would put it over.

## Duty types

A motor rated for one duty may be entirely wrong for another. IEC/AS duty
designations describe the load pattern the rating assumes:

| Duty | Meaning |
|---|---|
| S1 | Continuous running at constant load until thermal equilibrium |
| S2 | Short time: run for a stated period from cold, then long enough off to cool |
| S3 | Intermittent periodic, starting current not significant |
| S4 | Intermittent periodic including starting |
| S5 | Intermittent periodic including starting and electric braking |
| S6 | Continuous operation with intermittent load, no off period |
| S7 | Continuous with starting and electric braking |
| S8 | Continuous with periodic speed changes |
| S9 | Non-periodic load and speed variations |
| S10 | Discrete constant loads and speeds |

A short-time-rated motor is deliberately overloaded for a defined period and
then must be allowed to cool right down. Run one continuously and it must be
derated to a lower kilowatt value.

## Enclosures, IP and cooling codes

**IP rating** is two digits: the first is protection against solid objects and
dust (0 to 6), the second against water (0 to 8, plus 9 for high-pressure hot
water jets). IP55, dust protected and protected against water jets, is the common
industrial motor; IP23 suits a clean indoor switch room; IP66 or IP68 covers wash
down and submersible duty.

The main enclosure families you will meet:

| Enclosure | Description | Typical use |
|---|---|---|
| Open | Both ends open, free air through the windings | Clean dry indoor locations |
| Protected | Openings covered by mesh or perforated metal | Guarded indoor machines |
| Drip proof | Hoods stop vertically falling water and debris | Plant rooms, laundries |
| Duct or force ventilated | External blower supplies air at a constant rate | Variable speed drives, dirty or hot atmospheres |
| Totally enclosed fan cooled (TEFC) | No air exchange; external fan blows over a ribbed frame | The industrial standard |
| Weatherproof, submersible | Sealed variants of TEFC | Outdoor plant, bore and sump pumps |
| Flameproof | Enclosure withstands an internal explosion and stops flame escape; sealed glands | Hazardous areas with flammable gas |

AS/NZS 1359 also gives cooling method codes (IC, for example IC411 for a
standard TEFC machine) and mounting codes (IM, for example IM B3 foot mounted or
IM B5 flange mounted). Quoting IP, IC and IM correctly is how you order a
replacement that actually bolts up.

## High humidity and corrosive atmospheres

Where a motor swings between 20 and 40 degrees C in air near 100 per cent
relative humidity, condensation forms on the internal surfaces whenever the
frame is below the dew point of the surrounding air. Over time that ruins the
windings, and poor ventilation makes it worse. The remedies are tropicalised
windings — extra impregnation with moisture-resistant varnish — rust-inhibiting
paint on internal metal surfaces, and **anti-condensation heaters** energised
whenever the motor is stopped. Corrosive fumes, dust, steam, salt air, ambients
below about 10 degrees C or above 40 degrees C and altitudes over 1000 m all
need to be specified at purchase, because they are enclosure and rating
decisions, not things you can fix later.

## Efficiency and MEPS

Motors consume a very large share of Australian industrial electricity, and a
motor typically costs many times its purchase price in energy every year. Since
2001 Australia has regulated minimum efficiency for three-phase induction motors
from 0.73 kW up to (but not including) 185 kW under **Minimum Energy Performance
Standards (MEPS)**, now administered under the Greenhouse and Energy Minimum
Standards (GEMS) Act 2012 with test and level requirements in **AS/NZS 1359.5**.
A non-compliant motor cannot lawfully be sold or imported.

Internationally, **IEC 60034-30-1** defines efficiency classes IE1 (standard),
IE2 (high), IE3 (premium) and IE4 (super premium), and these are the marks you
will see on modern nameplates.

### Worked example 5 — what two efficiency points are worth

A 15 kW motor runs 6000 hours a year at full load. Compare a 90.0 per cent
efficient machine with a 93.0 per cent one at 25 cents per kWh.

- Input at 90.0 per cent = 15 / 0.90 = 16.67 kW
- Input at 93.0 per cent = 15 / 0.93 = 16.13 kW
- Saving = 16.67 minus 16.13 = 0.54 kW
- Annual energy saving = 0.54 x 6000 = **3240 kWh**
- Annual cost saving = 3240 x 0.25 = **810 dollars a year**

The higher efficiency motor might cost a few hundred dollars more. Over a
fifteen-year life the arithmetic is not close.

Note the trap: high efficiency motors run at slightly lower slip, so they turn
slightly faster. On a centrifugal fan or pump, where power varies with speed
cubed, a slightly faster motor can absorb more power and swallow the saving.
Check the pulley ratio or trim the impeller when you swap.

>! Never select a replacement motor on kilowatts alone. Match the voltage and
>! connection, speed and pole count, frame and mounting, shaft diameter, IP
>! rating, duty type and insulation class. A physically identical 15 kW motor
>! with the wrong IP rating or wrong duty will fail in its first wet season.

## On the job

- Nameplate FLC is the basis for cable sizing, overload setting and diagnosis.
- Insulation class fixes the maximum winding temperature; every extra 10 K halves insulation life.
- Temperature rise is found from winding resistance, then a hot-spot allowance is added.
- Duty type, IP, IC and IM matter as much as kilowatts when ordering.
- Efficiency is regulated by MEPS under the GEMS Act; IE classes appear on the plate.
`,
        quiz: [
          {
            q: "A three-phase 400 V motor has a rated output of 11 kW, efficiency 0.88 and power factor 0.86. What is its approximate full-load current?",
            options: ["18.5 A", "21.0 A", "16.8 A", "24.5 A"],
            answer: 1,
            explain: "Input power = 11 000/0.88 = 12 500 W, and I = 12 500/(1.732 x 400 x 0.86) = 12 500/595.8 = 21 A. Forgetting to divide by efficiency first gives about 18.5 A, and the motor would then be under-protected.",
          },
          {
            q: "A winding measures 20 ohms cold at 20 degrees C and 24 ohms after a full-load run. What is the average winding temperature?",
            options: ["44 degrees C", "51 degrees C", "71 degrees C", "24 degrees C"],
            answer: 2,
            explain: "t2 = (R2/R1)(234.5 + t1) minus 234.5 = (24/20)(254.5) minus 234.5 = 1.2 x 254.5 = 305.4 minus 234.5 = 70.9, so about 71 degrees C. The temperature rise here is 51 K, which is the tempting wrong answer because it omits the ambient.",
          },
          {
            q: "What is the maximum permitted winding temperature for a motor with class F insulation?",
            options: ["105 degrees C", "130 degrees C", "155 degrees C", "180 degrees C"],
            answer: 2,
            explain: "Class F allows a 105 K rise plus a 10 K hot-spot allowance above a 40 degrees C ambient, giving 155 degrees C. 130 degrees C is class B and 180 degrees C is class H.",
          },
          {
            q: "Why must a motor be derated when the ambient temperature is higher than 40 degrees C?",
            options: [
              "Because the supply voltage falls in hot weather",
              "Because the insulation class limit is a total winding temperature, so a higher ambient leaves less permitted rise",
              "Because the bearings need more grease at high ambient",
              "Because the power factor falls with temperature",
            ],
            answer: 1,
            explain: "The class limit is an absolute winding temperature, and rise limits are quoted from a 40 degrees C ambient reference. In a hotter environment the same rise would exceed the class limit, so the load must be reduced or a higher class or larger frame selected.",
          },
        ],
      },
      {
        id: "motor-protection",
        title: "Motor protection: overloads, thermistors, phase failure and short circuits",
        minutes: 15,
        simple: "A motor cannot tell you it is too hot, so we give it devices that watch its current and its temperature and pull the plug for it. The trick is that a motor legitimately draws six times its normal current for a few seconds at every start, so the protection has to ignore that but still act on a much smaller overload that lasts a few minutes.",
        refs: REFS_PROT,
        content: `
A motor runs unattended for years, and during that time it will be overloaded,
stalled, single phased or faulted at some point. The starter and its associated
protection are what decide whether that ends in a trip or a fire.

## Overload current is not fault current

| | Overload current | Fault current |
|---|---|---|
| Cause | The machine is being worked too hard: too much material on the conveyor, a seized bearing, a blocked filter | A short circuit between live conductors, or between a live conductor and earth |
| Magnitude | A little above rated, up to locked rotor value | Hundreds or thousands of amperes, limited only by supply impedance |
| Condition of the equipment | Nothing is wrong with the motor or the cable — the usage is wrong | Something has failed, usually the insulation |
| Protection needed | Time-delayed device that follows the heating curve | Very fast device that limits let-through energy |

You need both, and one device rarely does both jobs well. This is the single
most important idea in motor protection.

## How heat accumulates

Heating in a winding follows Joule's law:

**H = I squared R t**

Heat rises with the *square* of current but only in proportion to time. Two
worked cases show why that matters:

### Worked example 1 — a two-times overload

A motor rated at 10 A is drawing 20 A.

- Heat ratio = (20 / 10) squared = 2 squared = **4 times** the normal heating

Worse, an overloaded induction motor slows down, so its shaft-mounted fan moves
less air exactly when more cooling is needed.

### Worked example 2 — a locked rotor

The same 10 A motor stalls and draws its locked rotor current of 70 A (seven
times full load).

- Heat ratio = (70 / 10) squared = 7 squared = **49 times** the normal heating

with zero fan cooling. A motor can be destroyed in seconds under those
conditions, which is why stall protection has to be fast.

## What the Wiring Rules require

AS/NZS 3000:2018 requires motor circuits to be protected against overload
current and fault current. Any **unattended** motor must additionally be
protected against:

- overloads
- fault currents
- under-voltage
- over-temperature

Every motor must also have a means of starting and stopping, and an isolator.
In practice that is fuses or a circuit-breaker at the switchboard, a starter
with overload and control circuit, and a lockable isolator within sight of the
machine. Modern proprietary starters combine several of these functions.

!FIG[ladder-rung]

## Short-circuit protection: fuses and circuit-breakers

**HRC fuses.** A silver element inside a ceramic tube packed with quartz sand.
Under fault conditions the restricted sections of the element vaporise in
milliseconds and the sand quenches the arc, so an HRC fuse is about the fastest
protective device you can fit and it limits the let-through energy. A **eutectic
bead** on the element gives it a controlled response to prolonged overloads, and
the mass of that bead is how manufacturers shape the time/current curve.

A fuse for a motor circuit must pass a starting current of six or seven times
rated current for several seconds and still protect the cable, so it can never
be a close overload protection as well. Use fuse links marked **M** for motor
duty (the aM class) and keep correct spares — replacing an HRC fuse with the
wrong rating destroys the discrimination and the protection.

**Circuit-breakers.** The magnetic (instantaneous) element must be set above the
starting current or you get nuisance tripping every time the motor starts:

| Type | Magnetic trip setting | Suitability |
|---|---|---|
| Type B | About 3 to 5 times rating | Resistive and lighting circuits, not motors |
| Type C | About 7.5 times rating (5 to 10 range) | Small motors with modest inrush |
| Type D | About 12.5 times rating (10 to 20 range) | Motors, transformers, high inrush loads |

The thermal portions of C and D characteristics are identical, so a 20 A type C
and a 20 A type D trip in the same time for a steady overload; only their
response to inrush differs. Purpose-made **motor protection circuit-breakers**
(MPCBs) combine an adjustable thermal overload, a fixed magnetic trip and an
isolating function in one device.

## Overload relays

**Magnetic (instantaneous) overcurrent relays.** A coil in one motor line pulls
an armature in when the current exceeds a set value, and the armature operates
contacts in the control circuit. On its own it is far too quick for motor
starting, so it either needs an oil dashpot delay or must be set above the
starting current.

**Thermal overload relays.** The workhorse. Motor current passes through a small
heater beside a **bimetal strip** made from two metals of different expansion
rates bonded together. Heat bends the strip and it eventually trips a contact.
Because the strip has thermal mass, a starting current of a few seconds does not
bend it far enough to trip, while a modest overload sustained for minutes does —
it mimics the heating of the motor itself. Ideally there is a sensing element in
each of the three lines.

The trip contact goes in the **control circuit**, in series with the contactor
coil, so a single overload dropping out disconnects all three phases. Overload
relays are selected in **trip classes** — class 10 (trips within 10 seconds at
7.2 times setting), class 20 and class 30 — with the higher classes used for
long run-up, high-inertia loads.

**Combined thermal-magnetic relays** give the best of both: the magnetic
section acts almost instantly on very high currents, the thermal section gives
inverse-time delay on modest overloads. This combination is regarded as ideal
motor protection.

**Electronic overloads.** The modern equivalent, the same physical size as a
bimetal unit but using inbuilt current transformers to measure current. In
addition to the usual trip and alarm contacts they offer selectable trip class
and run-up time via DIL switches, single-phasing and unbalance protection, earth
fault detection, and clip-on modules for remote tripping, PTC thermistor input
and network communications such as DeviceNet or Ethernet.

## Coordination

Fuse or circuit-breaker, contactor and overload must be chosen as a set to work
together — this is **coordination** under AS/NZS 60947-4-1:

- **Type 1 coordination:** under short circuit, the starter may be damaged but must not endanger people or damage anything outside its enclosure. Contactor and overload may need replacing.
- **Type 2 coordination:** under short circuit, no damage is permitted other than light contact welding that can be easily separated. The starter is serviceable afterwards.

Manufacturers publish coordination tables giving the fuse or MPCB, contactor and
overload combinations that achieve each type. Mixing brands from memory is how
you end up with a starter blown apart inside its enclosure.

## Over-temperature: thermistors

Current-sensing protection infers temperature; a thermistor measures it.

A **PTC (positive temperature coefficient) thermistor** has a resistance that
climbs only gently with temperature until it reaches a critical value, above
which it rises very steeply — from a few hundred ohms to tens of kilohms in a
few degrees. That critical temperature is set by the material composition and
chosen to match the insulation class.

Three thermistors, one buried in each phase winding at the hottest point during
manufacture, are connected in series to a thermistor relay, typically supplied
through an isolating transformer and bridge rectifier. While the total resistance
is low the relay is held in, and its contact in the control circuit lets the
contactor pull in. Let any one winding exceed its critical temperature and the
resistance soars, relay current collapses, the relay drops out and the contactor
opens.

Thermistors protect where current sensing cannot: blocked ventilation, high
ambient, excessive starts per hour, or a motor run slowly on a drive with its own
fan starved of air.

>! A thermistor is not stall protection. When a rotor locks, the copper heats
>! far faster than the heat can travel to the thermistor buried in the slot, and
>! the winding can be destroyed before the critical temperature is reached at the
>! sensor. Always keep thermal and magnetic overload protection as well.
>! Thermistors also reset only as fast as the winding cools, which is slow.

## Single phasing and unbalance protection

A three-phase motor should draw three equal currents, but supply voltages are
never perfectly equal, and a 2 per cent voltage unbalance can produce 10 to 15
per cent current unbalance.

### Worked example 3 — currents after a lost phase

Our 15 kW motor is drawing its full-load 28 A per line when one supply line
opens while it keeps running. The remaining line currents rise by about 73 per
cent:

- New line current = 28 x 1.73 = about **48 A**

That is only about 1.7 times full load — not enough for a magnetic trip, and
survivable for a while by a fuse — but sustained it will destroy the windings,
and in a delta motor one winding carries roughly twice the current of the other
two.

Protection options:

- **Three overload elements**, one in each line, is the basic requirement; two elements cannot see all single-phasing conditions.
- **Differential tripping** thermal overloads compare the movement of the three bimetal strips and accelerate the trip lever when they diverge, so a lost phase trips far faster than the plain overload curve would.
- **Phase failure and unbalance relays** monitor all three voltages (and often the sequence too) and trip the control circuit if any phase deviates beyond set limits. On small motors the cost is hard to justify; on large or critical machines it is cheap insurance.

Remember what an overload relay is and is not: it protects against defined
current conditions over time. It cannot protect the motor against an internal
fault, and it cannot clear a short circuit — which is why fuses or a
circuit-breaker must always sit ahead of the contactor.

## Reverse phase sequence protection

Some machinery is damaged if driven backwards — screw and scroll compressors,
some pumps and gearbox lube systems. A **phase sequence relay** is fed from all
three phases and will not allow the control circuit to energise unless the
sequence is correct. It is essential after any switchboard work, because a
supply authority repair can leave the sequence swapped.

## Under-voltage and over-voltage

**No-volt protection** is inherent in any contactor starter: lose the supply and
the coil drops out, so the motor cannot restart by itself when power returns.
Someone must press start again. That is a safety feature, not a nuisance —
unexpected restarts injure people.

Where an unexpected stop is more dangerous than an unexpected restart, a control
circuit can be arranged to ride through momentary dips and restore full power if
the supply returns before the motor has coasted down appreciably.

**Over-voltage** is rare on distribution systems and mainly a concern on long
rural lines exposed to lightning, and on engine-driven mobile generating plant
where speed varies widely. One self-inflicted cause is worth knowing: power
factor correction capacitors connected directly across an individual motor can
**self-excite** the machine as it coasts down after switch-off, and the generated
voltage can reach twice line voltage. Size such capacitors so that the load
remains slightly lagging, and never leave capacitors on the load side of a drive.
Submersible bore pumps, being excellent earth electrodes at the end of long
overhead lines, are frequently fitted with surge suppressors, though protection
against a 500 kV lightning surge is never certain.

## Generator loss of excitation

Synchronous generators need their own special protection. Loss of excitation
(LoE) — from an open or shorted field winding, slip-ring flashover, loss of
supply to the exciter, an accidental field breaker trip or an AVR failure — makes
the machine start absorbing reactive power from the system instead of supplying
it, and can lead to an area-wide voltage collapse. Partial field loss unbalances
the rotor magnetically, causing damaging vibration and heating. Small machines
may use field over/under-current relays or reactive current measurement, but the
standard scheme is an **offset mho relay** at the generator terminals, which
calculates impedance from terminal voltage and current and trips when the
impedance enters a defined characteristic. It trips the generator breaker, the
field breaker and the unit auxiliaries.

## On the job

- Overload devices protect against usage; fuses and breakers protect against faults. You need both, coordinated.
- Heat goes with current squared: a 7 times locked rotor current means 49 times the heating with no fan.
- Set the overload from the nameplate FLC and choose the trip class to suit the run-up time.
- Three sensing elements, differential tripping or a phase failure relay is what saves a motor from single phasing.
- Thermistors catch cooling and ambient problems that current sensing cannot, but they will not catch a locked rotor.
`,
        quiz: [
          {
            q: "A 25 A motor stalls and draws its locked rotor current of 150 A. By what factor does the heating in the windings increase compared with full load?",
            options: ["6 times", "36 times", "12 times", "150 times"],
            answer: 1,
            explain: "Heat follows I squared t, so (150/25) squared = 6 squared = 36 times the heating rate, and with the shaft fan stopped there is no extra cooling. That is why stalled motors are destroyed in seconds without fast protection.",
          },
          {
            q: "Why is a type D circuit-breaker often specified for a motor circuit instead of a type C?",
            options: [
              "Its thermal element trips faster on sustained overload",
              "Its magnetic element is set at about 12.5 times rating instead of about 7.5, so it will not nuisance trip on starting inrush",
              "It has a higher continuous current rating for the same frame",
              "It provides earth fault protection as well",
            ],
            answer: 1,
            explain: "The thermal characteristics of C and D types are identical; only the instantaneous magnetic setting differs. A motor drawing six or seven times FLC at start can trip a type C instantly, whereas the type D setting rides through it.",
          },
          {
            q: "A motor running at full-load current of 40 A per line loses one supply phase but keeps turning. Roughly what current will the two remaining lines carry?",
            options: ["20 A", "40 A", "69 A", "280 A"],
            answer: 2,
            explain: "The remaining line currents rise by about 73 per cent, so 40 x 1.73 is about 69 A. That is well under the magnetic trip level, which is why the thermal element, differential tripping or a phase failure relay is what protects against single phasing.",
          },
          {
            q: "Why can a PTC thermistor embedded in the windings not be relied on for locked rotor protection?",
            options: [
              "Thermistors only work when the motor is running",
              "The copper heats far faster than the heat reaches the sensor, so damage can occur before the critical temperature is reached",
              "A locked rotor produces no current for the thermistor to sense",
              "Thermistors are wired in the power circuit, not the control circuit",
            ],
            answer: 1,
            explain: "In a stall the winding temperature rises almost instantly while the thermistor buried in the slot lags behind, so the winding can be destroyed before the relay drops out. Thermistors excel at slow thermal problems such as blocked ventilation or too many starts, but conventional thermal and magnetic protection must remain.",
          },
          {
            q: "What does type 2 coordination of a motor starter mean under AS/NZS 60947-4-1?",
            options: [
              "The starter must be replaced completely after any short circuit",
              "After a short circuit no damage is permitted except easily separated contact welding, and the starter remains serviceable",
              "The overload relay must have three sensing elements",
              "The fuse must be rated at twice the motor full-load current",
            ],
            answer: 1,
            explain: "Type 2 keeps the starter usable after a fault, allowing only light contact welding that can be separated. Type 1 permits damage to the starter provided the danger stays inside the enclosure; both require the fuse or MPCB, contactor and overload to be a manufacturer-verified combination.",
          },
        ],
      },
      {
        id: "motor-testing-and-faults",
        title: "Testing, fault finding and maintenance of a.c. machines",
        minutes: 14,
        simple: "Most motor faults can be found at the terminal box with a multimeter and an insulation tester, before anything is pulled apart. You are looking for three things: is the winding continuous, is it still insulated from earth, and are the three phases equal to each other. Everything else is mechanical, and your hands and ears will find most of it.",
        refs: REFS_TEST,
        content: `
Testing a machine is part electrical and part visual, and the electrical part
comes first because it can usually be done at the terminal box without
dismantling anything. Only if the electrical results point inside do you pull
the motor down.

>! Every test in this lesson starts the same way: isolate, lock out and tag,
>! prove the tester on a known source, prove the circuit dead at the point of
>! work, then prove the tester again. Motor terminal boxes are frequently still
>! live from a control circuit or from a back-feed through an interlocked
>! machine. Discharge any capacitors before touching their terminals.

## The faults you are looking for

Stator windings (and rotor windings on a wound-rotor machine) fail in a limited
number of ways:

- open circuit, or partially open — a high-resistance joint
- short circuit of a whole winding, or shorted turns within a coil
- winding shorted to earth through the frame or another metal part
- insulation partly melted, or the winding burnt out entirely
- a winding reconnected the wrong way round after a repair

## Continuity and winding resistance

An ordinary multimeter on ohms is fine for continuity, but be careful about
treating low readings as absolute. If a winding should read 1 ohm and the meter
says 0.7 ohm, that tells you very little; the meter's own accuracy and the lead
resistance are of the same order. What the reading does prove is that there is a
path.

Two rules make continuity testing meaningful:

1. **Know the circuit before you test it.** A delta-connected motor with one
   phase open circuit still gives a reading between every pair of terminals,
   because the other two windings are in series across that pair. You must
   remove the delta links and test each winding on its own.
2. **Compare, do not judge in isolation.** The three phase resistances should be
   within a few per cent of each other. An imbalance of more than about 5 per
   cent points to shorted turns or a bad joint even when every phase shows
   continuity.

For single-phase motors, know before you test whether the two windings are in
parallel, whether a capacitor is in circuit, and whether there is a centrifugal
switch and what position it is in. Otherwise the readings will mislead you.

## Insulation resistance to earth

Use an insulation tester at a voltage appropriate to the machine. A 400 V motor
is properly tested at 500 V d.c.; testing it with a 3 V multimeter's ohms range
proves nothing. Equally, do not put 500 V into a 24 V exciter circuit or into
electronics.

Test each winding separately to the frame and compare the three results. All
three low means a general problem such as moisture or age; one much lower than
the other two localises the fault. AS/NZS 3000 sets 1 megohm as the minimum
insulation resistance for a low voltage circuit, and a healthy dry motor will
usually read very much higher — tens or hundreds of megohms. A machine reading
just over the minimum is telling you it is damp or deteriorating, even though it
technically passes.

Where a motor has been standing in a damp location, dry it out (space heaters,
a low-voltage current through the windings, or a warm-air blower) and re-test;
readings that climb steadily as it dries confirm moisture rather than damage.

>! Disconnect the motor from any variable speed drive, soft starter, electronic
>! overload, PFC capacitor or PLC input before applying an insulation test. The
>! test voltage will destroy semiconductors. Discharge the winding after the test
>! — the capacitance of a large winding holds a surprising charge.

## Insulation between windings

Disconnect the windings from each other and from the supply, then test between
phases with a suitable voltage. Again, compare the three readings. A low value
between two phases indicates breakdown between coils, which typically shows up
in service as one phase drawing far more current than the other two.

## Visual inspection

If the electrical results are inconclusive, or confirm an internal fault, the
machine comes apart. On very large machines you may be able to lift covers and
look inside without full dismantling.

What to look for:

- **Smell.** A burnt-out winding has an unmistakable odour. It is not infallible — protection may have cleared the fault before much burning occurred.
- **Charring and bare copper.** Insulation burnt away leaving bare wire.
- **Colour.** With light-coloured varnishes, faulty coils are visibly darker than their neighbours.
- **Globules and pinholes.** Small holes with copper beads mark where a winding has arced to the core or frame.
- **Feel and sound.** Press the winding with your hand and listen: healthy insulation is silent, embrittled insulation crackles. Rub the bindings — they should not crumble. On large machines, tapping the coil groups lightly gives a flatter note over a faulty group.

## Capacitor testing on single-phase motors

A faulty capacitor gives a motor that will not start, or that runs rough.

1. **Visual.** A bulged case or any sign of leakage means replace it. Match the
   replacement for capacitance, voltage rating and duty (start or run).
2. **Charging test with an ohmmeter.** Isolate, lock out and **discharge the
   capacitor first**. Select a high range, 10 kilohm to 1 megohm, and observe
   polarity on polarised types. A good capacitor first reads low (it is charging,
   so current flows freely), then the reading climbs steadily towards infinity as
   it charges. A capacitor that stays at zero is short circuit; one that reads
   infinity immediately is open circuit. An analogue meter shows this far better
   than a digital one. The test tells you functional or not — it does not grade
   a capacitor.
3. **Capacitance measurement.** A capacitance meter, or the capacitance function
   of a good multimeter, gives an actual microfarad value to compare with the
   marked figure. Run capacitors that have lost more than about 10 per cent of
   their marked value should be replaced.
4. **Voltage test.** After disconnection, a healthy capacitor holds a d.c.
   voltage that falls slowly. No voltage, or a charge that will not hold, means
   a faulty unit.

>! Large capacitors used at 230/400 V hold enough energy to kill. Discharge
>! deliberately through a resistor or, for small units, by shorting the terminals
>! with an insulated screwdriver, and confirm zero volts before handling.
>! AS/NZS 3000:2018 Clause 4.15.3 covers discharge and control of capacitor
>! equipment.

## Mechanical checks

Plenty of "motor faults" are not electrical at all. Check:

1. Shaft bearings — roughness, play, noise, excessive heat, discolouration.
2. The driven load itself — gearboxes, pulleys, fans, impellers.
3. A bent shaft.
4. Misalignment between motor and load, or between an alternator and its prime
   mover; shims under the feet correct it.
5. A locked rotor: can you turn the shaft by hand?
6. Blocked air vents, a clogged fan shroud or an impacted cooling fin gap.
7. Seized or broken centrifugal switches on single-phase machines.

Also check belt tension and alignment, loose mounts and worn coupling elements.
Excess vibration destroys bearings, and bearing failure destroys motors.

## Specialised test equipment

**Growler.** The stator or armature under test is used as the secondary of a
transformer. The growler is placed against the winding and energised, and its
name comes from the noise it makes. On an armature, a steel blade held over a
shorted coil vibrates and buzzes; on a stator, the growler reveals shorted turns
that ohmmeter readings will never show.

**Prufrex.** Plugged into an a.c. supply and moved around inside a stator bore.
Circulating currents from a shorted turn upset the tester's field and a lamp
flashes, showing where the fault is.

Larger workshops add surge comparison testers (which find turn-to-turn faults
under realistic voltage stress), polarisation index measurements over ten
minutes, and current signature analysis for broken rotor bars.

## Dismantling and reassembly

The point of dismantling is to be able to reassemble the machine exactly as it
was.

- **Witness marks.** Before splitting anything, mark the frame and both end shields with a centre punch — a common convention is two punch marks at the drive end and three at the non-drive end, on adjacent surfaces so they line up again. Some technicians prefer a light chisel line across the joint. Keep the marks light, keep them off machined surfaces, and never make deep marks in a casing.
- **Photograph** the machine before and during disassembly, including terminal connections and link positions.
- **Keep subassemblies separate** in labelled containers. Tipping every part into one tray is how motors get rebuilt wrongly.
- **Withdraw the rotor carefully.** Sliding a heavy rotor out of the bore is the most likely moment to damage stator end windings or scrape the core.
- **Bearings**: check for wear, replace as a pair where fitted, and re-grease on assembly with the correct grade and the correct quantity — over-greasing churns and overheats a bearing just as surely as under-greasing starves it.
- Matching the witness marks on rebuild guarantees the shaft protrudes from the right end and the terminal box faces the right way.

## Fault-finding summary

| Symptom | Likely causes | First checks |
|---|---|---|
| Will not start, hums, trips quickly | Single phasing, stalled load, locked rotor, open winding | All three supply volts, turn shaft by hand, winding resistances |
| Starts slowly, growls, high unequal currents | Reversed winding, single phasing, broken rotor bars | Compare line currents, check terminal links, listen for rhythmic growl |
| Runs hot, trips after some minutes | Overload, high ambient, blocked ventilation, voltage unbalance | Measure current against nameplate, check volts on all phases, clean shroud |
| Runs but low speed and low output | Low supply voltage, star connection where delta needed, overload | Confirm links, measure terminal volts under load |
| Trips instantly on start | Short circuit or earth fault, wrong breaker type, seized load | Insulation test, check breaker type C or D, free the shaft |
| Single-phase motor hums, needs a spin | Start capacitor, centrifugal switch or start winding open | Capacitor test, auxiliary winding continuity |
| Noisy bearings, vibration | Worn bearings, misalignment, loose mounts, bent shaft | Feel and listen, check alignment and mounting bolts |

## What to remember

- Isolate, lock out, prove dead, discharge capacitors. Every time.
- Test each winding separately; comparison between phases is what reveals faults.
- 500 V insulation testing on a 400 V machine, and never with electronics connected.
- Judge low ohm readings by balance between phases, not by absolute value.
- Witness marks and photographs before dismantling save hours on rebuild.
`,
        quiz: [
          {
            q: "An ohmmeter shows a reading between every pair of terminals on a delta-connected motor. What has this proved?",
            options: [
              "All three windings are healthy",
              "Very little — with the delta links in place, two windings in series still give a reading even if the third is open circuit",
              "That the motor is connected in star",
              "That there is an earth fault on one phase",
            ],
            answer: 1,
            explain: "In delta, each pair of terminals has one winding directly across it and the other two in series in parallel with it, so an open winding is masked. The links must be removed and each winding tested individually, then the three resistances compared.",
          },
          {
            q: "What test voltage is appropriate for an insulation resistance test on the windings of a 400 V motor?",
            options: ["9 V from a multimeter ohms range", "24 V d.c.", "500 V d.c. from an insulation tester", "1000 V a.c."],
            answer: 2,
            explain: "500 V d.c. is the standard test voltage for low voltage circuits up to 500 V; a multimeter ohms range applies only a few volts and proves nothing about insulation. The motor must be disconnected from any drive, soft starter or electronics first.",
          },
          {
            q: "Using an analogue ohmmeter on a high range, a discharged motor capacitor gives a low reading that climbs steadily towards infinity. What does this indicate?",
            options: [
              "The capacitor is short circuit and must be replaced",
              "The capacitor is open circuit",
              "The capacitor is charging normally and is functional",
              "The capacitor has lost most of its capacitance",
            ],
            answer: 2,
            explain: "A functional capacitor initially draws charging current, which the ohmmeter sees as a low resistance, and the reading rises as it charges. A permanent zero means short circuit and an immediate infinity means open circuit; the test shows functional or not, but does not grade the capacitance value.",
          },
          {
            q: "Why are witness marks made on the frame and end shields before dismantling a motor?",
            options: [
              "To record the winding resistance readings",
              "So the machine can be reassembled in its original orientation, with the shaft and terminal box in the correct positions",
              "To identify the insulation class of the windings",
              "To indicate where the bearings should be greased",
            ],
            answer: 1,
            explain: "Light punch or chisel marks across matching surfaces, commonly two at the drive end and three at the non-drive end, guarantee the end shields go back the way they came off. Get it wrong and the terminal box or shaft ends up facing the wrong way, and bearing housings may not align.",
          },
        ],
      },
    ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
