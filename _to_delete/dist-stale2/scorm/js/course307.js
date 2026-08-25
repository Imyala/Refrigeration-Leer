/* =========================================================================
   Course content, module 307 — Direct current machines.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 7 — Direct current machines.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_CONSTRUCTION = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — components of a d.c. machine: yoke, end-shields, field poles, field coils, armature, commutator and brush gear",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — machine nameplates and rating data",
  ];

  const REFS_GEN_PRINCIPLE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — basic operating principle of a d.c. generator and Fleming's right-hand rule",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — calculation of generated and terminal voltage, and voltage regulation",
  ];

  const REFS_COMMUTATION = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the commutator as an automatic reversing switch and brush gear operation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — d.c. machines with interpoles and improved commutation under all loads",
  ];

  const REFS_GEN_TYPES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — methods of excitation and types of d.c. generator",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — importance of residual magnetism for a self-excited generator",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — connecting and testing a d.c. generator on no load and on load",
  ];

  const REFS_MOTOR_PRINCIPLE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — basic operating principle of a d.c. motor and Fleming's left-hand rule",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — calculation of force, torque and output power developed by a motor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the effect of back EMF in d.c. motors",
  ];

  const REFS_MOTOR_TYPES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — types of d.c. motor and their applications",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — summary of the characteristics of d.c. motors",
  ];

  const REFS_STARTING = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — back EMF, armature current and starting of d.c. motors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — speed control by field current and armature voltage, base speed and field weakening",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — reversing the direction of rotation of a d.c. motor",
  ];

  const REFS_EFFICIENCY = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — losses that occur in a d.c. machine and the equivalent circuit",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — calculation of losses and efficiency, and conditions for maximum efficiency",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Minimum Energy Performance Standards (MEPS) and methods used to maintain high efficiency",
  ];

  const REFS_MAINTENANCE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — care and maintenance processes for rotating machines",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — identification of faults in a machine from electrical measurements",
    "Safe Work Australia — Code of Practice: Managing the risks of plant in the workplace",
  ];

  const MODULES = [
    {
      id: "elec-dc-machines",
      stream: "elec",
      title: "E.7 · Direct current machines",
      blurb: "How d.c. generators and motors are built and behave: construction, generated EMF, commutation, machine types, starting, speed control, efficiency and maintenance.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "dc-machine-construction",
          title: "Inside a d.c. machine: what every part does",
          minutes: 12,
          simple: "A d.c. machine is a magnet ring with a spinning wire drum inside it. Think of a hand-cranked torch: turn the handle and it makes power, feed it power and it turns itself. The same lump of iron and copper works both ways, and every part in it exists either to make magnetism, to carry the moving wires, or to get current in and out of them.",
          refs: REFS_CONSTRUCTION,
          content: `## One machine, two jobs

A direct current machine either produces or consumes electricity as direct
current, so it is properly described as an energy converter. Drive the shaft
with something mechanical and it generates electrical power. Feed it electrical
power and it produces torque and turns. The construction of a d.c. generator
and a d.c. motor is identical — a machine on the bench cannot be identified as
one or the other by looking at it. Manufacturers do optimise a design towards
one duty, but the physics and the parts list are the same.

That symmetry is worth holding on to, because almost every fault, test and
calculation you meet later in this module applies to both. What changes is only
the direction of energy flow.

| Machine | Energy in | Energy out |
|---|---|---|
| d.c. generator | Mechanical (a prime mover turns the shaft) | Electrical (d.c. at the terminals) |
| d.c. motor | Electrical (d.c. supplied to the terminals) | Mechanical (torque at the shaft) |

## The six main parts

Every conventional d.c. machine is built from the same group of components:
the field frame or yoke, the end-shields and bearings, the field poles, the
field coils, the armature and commutator, and the brush gear and brushes.

### Field frame or yoke

The yoke is the outer body. It does two jobs at once. Mechanically it holds
the field poles in place and carries the mounting feet, so it needs real
strength. Magnetically it is part of the flux path, joining one pole to the
next, so it must be made of a material with high permeability — cast iron or
cast steel. A useful side effect of using iron or steel is that the yoke and
poles retain **residual magnetism** after the machine is shut down, and that
leftover magnetism is what allows a self-excited generator to start generating
next time it runs.

### End-shields and bearings

The end-shields bolt to each end of the yoke and carry the bearings that the
armature shaft rotates in. One end-shield normally also carries the brush gear.
End-shield design follows the duty: a machine for a wet or dusty site is built
enclosed and sealed, while a machine in a clean, cool switchroom may be almost
completely open for ventilation.

### Field poles

The poles are the magnets that produce the main field. That field is what an
EMF is induced against in a generator, and what armature current pushes against
in a motor. Poles may be permanent magnets or, far more commonly on wound
machines, electromagnets made from a laminated iron pole body wrapped in a coil.

Pole shaping matters more than it looks. The outer face is curved to sit tightly
against the inside of the yoke so there is no unwanted gap in the magnetic
circuit. The inner face is curved to follow the armature closely, keeping the
air gap small and even. The pole tips are extended sideways to gather in the
magnetic fringe. All of this increases the cross-sectional area of the flux path
near the armature and reduces the reluctance of the air gap, which is by far the
highest-reluctance part of the circuit. The extended tips also conveniently trap
the field coil in place when the pole is bolted into the yoke.

The magnetic circuit of a four-pole machine is a series-parallel arrangement:
flux leaves a north pole, crosses the air gap, passes through the armature iron,
crosses the second air gap into a south pole, and returns through the yoke. The
magnetomotive force produced by the coils must be large enough to drive the
required flux through all of that iron and both air gaps.

### Field coils

Field coils are wound from insulated copper and turn the pole into an
electromagnet. How they are connected to the armature is what defines the
machine type:

| Coil type | Connection to armature | Winding | Current carried |
|---|---|---|---|
| Series field | In series | Few turns of heavy wire or copper bar | Full armature current |
| Shunt field | In parallel | Many turns of fine wire | Small field current only |
| Compound | Both a series and a shunt coil on each pole | Both of the above | Both |

A series coil has to carry everything the armature carries, so it is wound in
heavy section with few turns. A shunt coil sits across the supply and only needs
to pass a couple of amps, so it uses many turns of fine wire to build the same
ampere-turns. On circuit diagrams the convention is a small number of loops for
a series field and a slightly larger number for a shunt field, so that you can
tell them apart at a glance rather than by wire thickness.

### Armature and commutator

The armature is the rotating part that holds the conductors in which voltage is
induced or on which force is exerted. Its core is not solid iron: it is stacked
from many thin steel laminations, insulated from one another, which chokes off
eddy currents. The steel used is *electrical steel*, alloyed with a little
silicon to cut hysteresis loss. Slots are stamped evenly around the rim of each
lamination to take the conductors, and the slot shape influences which winding
method can be used. Larger armatures also have ventilating holes punched through
the laminations so cooling air can pass through the core.

The commutator sits on the same shaft, next to the winding. It is a cylinder of
hard-drawn copper segments, each insulated from its neighbours, from the shaft
and from the clamping rings by mica. Micanite vee rings and clamping rings pull
the tapered segments together into a rigid drum; on very small commutators the
segments are simply clamped and the edges of the rings crimped over. Each pair
of segments is connected to the ends of one armature coil, and the more segments
(and therefore coils) a machine has, the smoother and more efficient it is. The
commutator may be pressed straight onto the shaft or bolted to an armature
spider.

### Brush gear and brushes

Brushes carry current into or out of the rotating armature through a sliding
contact on the commutator. They are made from graphite or carbon, sometimes
loaded with copper dust to lower the contact resistance. Each brush sits in a
holder, is pushed onto the commutator by a spring, and is connected electrically
by a flexible braided copper lead known as a **pigtail** — never rely on the
holder itself to carry current.

The brush must slide freely in its holder so it can follow small irregularities
in the commutator surface and keep feeding down as it wears. Brush gear must be
insulated from the frame, and on most machines the whole brush assembly is
mounted on a rocker ring so its position around the commutator can be adjusted.

### Interpoles

Many machines above small sizes also carry **interpoles** (commutating poles)
midway between the main poles. They are wound with a few turns of heavy wire and
are always connected in series with the armature, so their strength tracks load
current automatically. Their job is to give clean commutation at every load, and
they are covered properly in the commutation lesson.

## Reading the nameplate

The nameplate is your reference for every test you do. A typical d.c. machine
plate gives the manufacturer, year, serial number, output rating, rated speed,
armature voltage and current, field excitation voltage and current, and mass.
For example, a plate reading 495 V and 29.9 A armature with a 300 V, 2.18 A
excitation field tells you the field winding should measure about
300 / 2.18 = 137 ohms cold, and that the armature draws about 14.8 kW at full
load. Those two numbers are what you compare your meter readings against.

>! Never assume a d.c. machine is dead because the supply is switched off. A
>! machine still coasting is a live generator, and shunt field windings are
>! highly inductive — breaking field current produces a substantial voltage
>! spike. Isolate, lock, tag and prove dead before opening the terminal box.

## What to remember

- The same construction serves as a motor or a generator; only the energy flow direction changes
- The yoke is both the mechanical body and the magnetic return path, and holds residual magnetism
- Pole shaping and pole tips exist to reduce air-gap reluctance and contain fringing flux
- Series fields are few turns of heavy wire, shunt fields are many turns of fine wire
- The armature core is laminated silicon steel to fight eddy currents and hysteresis
- The commutator is a mica-insulated copper cylinder; brushes are carbon with a pigtail lead`,
          quiz: [
            {
              q: "Why is the yoke of a d.c. machine made from cast iron or cast steel rather than aluminium?",
              options: [
                "Aluminium cannot be cast into a cylinder",
                "It must have high permeability to complete the magnetic circuit between poles, and it retains residual magnetism",
                "Steel is a better electrical conductor for armature current",
                "Aluminium would melt at normal machine operating temperature",
              ],
              answer: 1,
              explain: "The yoke is part of the flux path from one pole to the next, so it needs high magnetic permeability, and its residual magnetism is what lets a self-excited generator build up. Aluminium is a fine conductor and casts easily, but it is non-magnetic, so it would break the magnetic circuit.",
            },
            {
              q: "A field coil is wound with a small number of turns of heavy copper bar. What does that tell you?",
              options: [
                "It is a shunt field, carrying only field current",
                "It is a series field, wound to carry full armature current",
                "It is an armature coil that has been rewound",
                "It is a permanent-magnet keeper winding",
              ],
              answer: 1,
              explain: "Series fields sit in the main current path and must carry full armature current, so they are wound in heavy section with few turns. A shunt field carries only a couple of amps and therefore uses many turns of fine wire to build the same ampere-turns.",
            },
            {
              q: "The armature core is built from thin insulated laminations of silicon-bearing steel. What are the two losses this attacks?",
              options: [
                "Copper loss and windage loss",
                "Friction loss and brush contact loss",
                "Eddy current loss (from the laminations) and hysteresis loss (from the silicon content)",
                "Magnetic leakage and stray load loss",
              ],
              answer: 2,
              explain: "Laminating the core breaks up the circulating eddy current paths, and adding silicon to the steel reduces the hysteresis loss of the magnetic material. Copper, friction and windage losses are real but are not affected by core lamination.",
            },
            {
              q: "What is the pigtail on a carbon brush for?",
              options: [
                "To hold the brush down against the commutator",
                "To carry the current between the brush and the holder terminal with a flexible low-resistance connection",
                "To sense brush temperature",
                "To scrape carbon dust off the commutator",
              ],
              answer: 1,
              explain: "The pigtail is a flexible braided copper lead that carries the current so it does not have to pass through the loose sliding fit of the brush in its holder. The spring, not the pigtail, provides the down-force.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-generator-principle",
          title: "Generator action and generated EMF",
          minutes: 12,
          simple: "Move a wire past a magnet and a voltage appears in it. That is all a generator does — it just does it with hundreds of wires spinning past several magnets, over and over. Make the magnet stronger, add more wires, or spin faster, and the voltage goes up in direct proportion.",
          refs: REFS_GEN_PRINCIPLE,
          content: `## Three ingredients, no exceptions

To generate a voltage you need exactly three things: a magnetic flux,
conductors, and relative movement between them. Take away any one and nothing
happens. A d.c. generator supplies all three continuously and neatly — the field
poles supply the flux, the armature holds the conductors, and the prime mover
supplies the movement by spinning the armature.

For a single straight conductor moving at right angles through a field, the
induced EMF is:

- e = B l v

where B is the flux density in tesla, l is the effective length of the conductor
lying in the field in metres, and v is the velocity in metres per second. Every
sensible design decision in a d.c. generator comes back to raising one of those
three terms.

### Which way does the current flow?

Use **Fleming's right-hand rule** for generators. Hold the thumb, first finger
and second finger of the right hand at right angles: first finger points along
the flux (north to south), thumb points in the direction of motion of the
conductor, and the second finger then gives the direction of induced
conventional current.

Apply it to one armature loop. As the conductor on one side sweeps past the
north pole the current in it is driven one way; half a revolution later that
same conductor is passing the south pole, the direction of motion relative to
the flux has reversed, and the current in it reverses. **The EMF generated
inside the armature of a d.c. machine is always alternating.** It is the
commutator that turns it into d.c. at the terminals, which is the subject of the
next lesson.

## What sets the size of the generated voltage

Three factors decide how many volts an armature winding produces:

1. The strength of the field flux
2. The number of effective armature conductors connected in series, which
   depends on how many coils there are and how many turns are in each
3. The relative speed between the conductors and the field

Rolled into one formula for a complete machine:

- Eg = (p x flux x n x Z) / (60 x a)

| Symbol | Meaning | Unit |
|---|---|---|
| Eg | Generated EMF | volts |
| p | Number of poles | — |
| flux | Magnetic flux per pole | webers (Wb) |
| n | Speed | revolutions per minute |
| Z | Number of effective armature conductors | — |
| a | Number of parallel paths through the armature | — |

The number of parallel paths depends on how the armature is wound. A
**lap-wound** armature has as many parallel paths as the machine has poles
(a = p). A **wave-wound** armature always has two parallel paths (a = 2),
whatever the pole count. Lap windings therefore suit low-voltage, high-current
machines, and wave windings suit higher-voltage, lower-current machines built
from the same iron.

### Worked example — generated EMF

A four-pole d.c. generator has a lap-wound armature with 500 effective
conductors. The flux per pole is 25 mWb and the machine is driven at 1500 rpm.
Find the generated EMF.

- Lap wound, so a = p = 4
- Flux per pole = 25 mWb = 0.025 Wb
- Eg = (p x flux x n x Z) / (60 x a)
- Eg = (4 x 0.025 x 1500 x 500) / (60 x 4)
- Numerator: 4 x 0.025 = 0.1; 0.1 x 1500 = 150; 150 x 500 = 75 000
- Denominator: 60 x 4 = 240
- **Eg = 75 000 / 240 = 312.5 V**

Now rewind the same iron as a wave winding. Nothing changes except a, which
becomes 2:

- Eg = 75 000 / (60 x 2) = 75 000 / 120 = **625 V**

Same machine, same speed, same flux — twice the voltage and half the current
capacity, because the conductors are now in two long series paths instead of
four short ones. This is a good sanity check when a rewound armature comes back
from the shop reading double or half what the nameplate says.

## Terminal voltage is less than generated voltage

Off load, no current flows in the armature, so the full generated EMF appears at
the terminals. Connect a load and armature current flows through the resistance
of the armature winding itself, and Ohm's Law produces an internal voltage drop
Ia x Ra. That drop is inside the machine and cannot be avoided; what is left
over reaches the terminals:

- Eg = Ia Ra + Vt

so the terminal voltage Vt = Eg − Ia Ra. Because the drop is proportional to
load current, the terminal voltage of a generator falls steadily as load is
applied. That falling line is the load characteristic you will see for every
generator except the series and over-compounded types.

### Worked example — terminal and generated voltage

A shunt generator is required to deliver 200 V to a load drawing 20 A. The
armature resistance is 0.5 ohm and the shunt field circuit measures 100 ohm.
What EMF must the armature actually generate?

- Field current If = Vt / Rf = 200 / 100 = 2 A
- The armature has to supply the load and the field: Ia = 20 + 2 = **22 A**
- Armature volt drop = Ia x Ra = 22 x 0.5 = **11 V**
- Eg = Ia Ra + Vt = 11 + 200 = **211 V**

Notice the field current is part of the armature current in a shunt machine. If
you forget it you under-estimate the drop — here by 1 V, but on a large machine
with a heavier field it matters.

## Voltage regulation

Voltage regulation puts a number on how much a generator's output sags between
no load and full load, expressed as a percentage of the full-load value:

- Regulation % = ((Vnl − Vfl) / Vfl) x 100

where Vnl is the no-load terminal voltage and Vfl the full-load terminal voltage.

### Worked example — voltage regulation

A generator measures 240 V on no load and settles to 220 V at rated full load.

- Regulation = ((240 − 220) / 220) x 100
- Regulation = (20 / 220) x 100 = **9.1 %**

A smaller percentage means a stiffer supply. A separately excited machine
typically regulates better than a plain shunt machine, because in a shunt
machine the falling terminal voltage also weakens its own field.

## The open-circuit characteristic

The open-circuit characteristic (OCC), also called the magnetisation or no-load
saturation characteristic, is a plot of generated EMF against field current at
constant speed and zero load current. It has the same shape for every type of
generator because it is really a plot of the machine's iron:

1. At zero field current there is still a small EMF, produced purely by residual
   magnetism in the poles
2. Through the working region the curve is close to a straight line — more field
   current gives proportionally more volts
3. In the saturation region the iron is full, and a large increase in field
   current buys only a tiny increase in voltage

A machine may be designed to work in either the linear region (better control
range) or up near saturation (more stable output). Sitting hard in saturation
tells you there is not enough iron in the machine for that level of excitation.

## Driving the generator

A generator produces nothing until something turns it. The prime mover may be a
diesel or gas engine, or an electric motor coupled to the shaft. Increasingly,
smaller installations use hydro, geothermal, tidal or wind energy to provide the
same mechanical input. Whatever the source, the energy flow is the same:
fuel or resource energy, to mechanical energy at the shaft, to electrical energy
at the terminals, minus losses at each step.

## On the job

- Generated EMF is directly proportional to flux, speed and conductor count, so a slow-running or weak-field machine will never make rated volts
- Confirm whether an armature is lap or wave wound before you predict its voltage: a is p for lap, always 2 for wave
- Always include shunt field current in armature current when calculating the internal drop
- Poor regulation that suddenly gets worse usually means a weakening field or rising armature circuit resistance, not a faulty prime mover`,
          quiz: [
            {
              q: "A four-pole wave-wound armature has 400 conductors, flux of 20 mWb per pole and runs at 1200 rpm. What is the generated EMF?",
              options: ["80 V", "160 V", "320 V", "640 V"],
              answer: 2,
              explain: "Wave wound means a = 2 regardless of pole count. Eg = (4 x 0.02 x 1200 x 400) / (60 x 2) = 38 400 / 120 = 320 V. The 160 V answer comes from wrongly using a = 4 as if the machine were lap wound.",
            },
            {
              q: "Why does the terminal voltage of a loaded d.c. generator fall below the generated EMF?",
              options: [
                "The prime mover always slows down under load",
                "Load current flowing through the armature winding resistance creates an internal Ia x Ra volt drop",
                "The commutator loses efficiency as current increases",
                "Brush pigtails have too much inductance",
              ],
              answer: 1,
              explain: "The armature winding has real resistance, so load current produces an internal drop of Ia x Ra that is subtracted from the generated EMF. Prime mover droop can add to the effect but is not the reason the characteristic falls even at perfectly constant speed.",
            },
            {
              q: "A generator gives 250 V off load and 230 V at full load. What is its voltage regulation?",
              options: ["8.0 %", "8.7 %", "9.2 %", "20 %"],
              answer: 1,
              explain: "Regulation = ((Vnl − Vfl) / Vfl) x 100 = (20 / 230) x 100 = 8.7 %. Dividing by the no-load value instead of the full-load value gives 8.0 %, which is the most common mistake in this calculation.",
            },
            {
              q: "The EMF induced in the armature conductors of a d.c. generator is:",
              options: [
                "direct, because the field poles are d.c. excited",
                "alternating, because each conductor passes a north pole then a south pole",
                "direct only when the machine is lap wound",
                "alternating only above base speed",
              ],
              answer: 1,
              explain: "Each conductor reverses its direction of motion relative to the flux every half revolution, so the EMF inside the armature is always alternating. The commutator, not the field excitation or the winding style, is what converts it to d.c. in the external circuit.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "commutation-armature-reaction",
          title: "Commutation, armature reaction and interpoles",
          minutes: 11,
          simple: "The wires inside a spinning armature make alternating current, but we want steady d.c. outside. The commutator is a rotating switch that flips the connection at exactly the right instant, so the outside world always sees current going the same way. If the flip happens at the wrong instant, the brushes spark and burn.",
          refs: REFS_COMMUTATION,
          content: `## The problem the commutator solves

The armature of a d.c. machine generates alternating EMF — every conductor
swings from maximum positive to maximum negative once per revolution as it
passes alternate poles. If you simply brought those coil ends out to slip rings
you would have an a.c. machine. The commutator is the piece of engineering that
makes the machine a *direct* current machine.

Mechanically it is a cylinder of copper segments, insulated from each other by
mica, mounted on the armature shaft with each pair of segments connected to the
ends of one armature coil. Electrically it acts as an automatic changeover
switch that rotates with the winding. Stationary brushes press on its surface.
As the armature turns, the commutator swaps which coil ends are connected to
which brush at precisely the moment the EMF in that coil is about to reverse.
The result is that current in the external circuit always leaves the same brush,
even though current inside every coil is still alternating.

The same mechanism works in reverse for a motor: it accepts d.c. from the supply
and delivers alternating current to each armature coil in the correct sense to
keep torque acting the same way round.

> A useful mental picture: the commutator does not stop the a.c. inside the
> machine. It simply re-labels which conductor is connected to the positive
> brush at every instant, so the outside circuit only ever sees one polarity.

## Commutation itself

Commutation is the brief interval when a coil is short-circuited by a brush
bridging two adjacent segments, and the current in that coil has to reverse from
full value one way to full value the other. Two things fight that reversal:

- The coil has **inductance**, and inductance opposes a change of current. The
  faster the reversal has to happen, the larger the self-induced (reactance)
  voltage opposing it.
- If the current has not fully reversed by the time the brush leaves the
  trailing segment, the remaining current is forced to break through air, and
  you get an arc at the brush edge.

That arcing is what burns and pits commutator segments, wears brushes rapidly
and eventually produces the ring of blackened bars a technician finds on a
neglected machine.

## Armature reaction

There is a second, less obvious problem. Armature current produces its own
magnetic field, at right angles to the main field. The two fields add
vectorially, and the resultant field is distorted — strengthened at one pole tip
and weakened at the other, exactly as shown by the crowded and thinned flux
lines drawn either side of a current-carrying conductor lying in a field. This
is **armature reaction**, and it has three consequences:

1. **The magnetic neutral axis shifts.** The plane where flux density is zero —
   which is where the brushes need to sit for sparkless commutation — moves away
   from the geometric neutral. It shifts forward in the direction of rotation on
   a generator, and backwards on a motor.
2. **The main flux is slightly reduced.** Because the strengthened pole tip is
   working further into saturation than the weakened tip is being relieved, the
   net flux per pole falls a little. On a generator that means slightly lower
   volts as load rises; on a motor it means a small rise in speed.
3. **Sparking gets worse with load**, because the neutral axis shift is
   proportional to armature current.

### Three ways to deal with it

| Method | How it works | Where used |
|---|---|---|
| Shifting the brush gear | The rocker ring is rotated until the brushes sit on the true neutral axis | Small machines, and only correct at one value of load |
| Interpoles (commutating poles) | Small poles between the main poles, wound with a few heavy turns in series with the armature | Standard on almost all medium and large machines |
| Compensating windings | Conductors set into the main pole faces, also in series with the armature, cancelling armature MMF directly under the pole | Large machines with rapidly varying loads, such as rolling mills |

Brush shifting is a compromise. Because the neutral axis moves with load, a
brush position set for full load sparks at light load and vice versa. It is why
brush gear is mounted on an adjustable ring on many older machines — and why
somebody who does not understand the reason will move it, make one condition
better and everything else worse.

## Interpoles: the proper fix

An interpole is a narrow auxiliary pole placed midway between the main poles,
directly over the coil that is undergoing commutation. It carries **a few turns
of heavy wire connected in series with the armature**, so its strength rises and
falls exactly in step with load current. That is the whole trick: the reactance
voltage that resists current reversal is also proportional to armature current,
so an interpole whose flux tracks armature current can cancel it at every load,
not just at one setting.

The interpole induces a small EMF in the commutating coil that drives the
current reversal to completion in the time available. A machine fitted with
interpoles commutates cleanly from no load to full load without touching the
brush gear, which is why the summary charts for d.c. motors list interpoles
simply as giving better commutation under all loads.

>! When reversing a machine that has interpoles, the interpole winding must stay
>! in its original relationship with the armature. Reverse the armature and
>! interpoles together as one unit, or reverse the field instead — never reverse
>! the armature alone and leave the interpoles connected as they were. Get it
>! wrong and the interpoles will add to armature reaction instead of cancelling
>! it, and the machine will spark viciously.

## Reading a commutator

The surface of a healthy commutator tells you a lot. A machine that has been
commutating well for months develops an even, glossy chocolate-brown **patina**
across all segments. This film is a normal and desirable oxide-graphite layer
that lubricates the brush and lowers contact wear. Do not polish it off.

| What you see | Likely meaning |
|---|---|
| Even mid-brown glaze over the whole surface | Normal, healthy commutation — leave alone |
| Bright, clean copper with no film | Brush pressure too high, or an abrasive brush grade, or oil-free air blasting |
| Blackened or burnt bars in a regular pattern | Open or short-circuited armature coil connected to those bars |
| General blackening plus visible sparking at the brush edge | Commutation problem: worn brushes, wrong grade, weak springs, or interpole fault |
| Threading, grooving or ridges | Abrasive dust or copper drag from a badly worn brush |
| Mica standing proud of the copper | Undercutting overdue — the copper has worn and the harder mica has not |

## On the job

- The commutator does not remove a.c. from the armature; it re-routes it so the external circuit sees d.c.
- Sparking that gets worse as load increases points at armature reaction, interpoles or brush position — not at the load
- Interpoles are always in series with the armature so their correction is automatic at any load
- Brush shifting only fixes commutation at one load point; interpoles fix it at all loads
- Never sand off a good brown commutator film hunting for shiny copper — you are removing the thing that makes brushes last`,
          quiz: [
            {
              q: "Why is the interpole winding always connected in series with the armature rather than across the supply?",
              options: [
                "Series connection uses less copper",
                "So that interpole flux rises and falls with armature current, cancelling the reactance voltage at every load",
                "Because a shunt-connected interpole would saturate",
                "So the interpole can be switched out at full load",
              ],
              answer: 1,
              explain: "The voltage that resists current reversal in a commutating coil is proportional to armature current, so the correcting flux must be too. Putting the interpole in series makes the correction automatic and self-scaling; a shunt-connected interpole would give a fixed correction that is right at only one load.",
            },
            {
              q: "A d.c. generator commutates cleanly at light load but sparks badly at full load, and it has no interpoles. What is the most likely explanation?",
              options: [
                "The prime mover is over-speeding",
                "Armature reaction has shifted the magnetic neutral axis away from where the brushes are set",
                "The shunt field has gone open circuit",
                "The mica insulation has failed between all segments",
              ],
              answer: 1,
              explain: "Neutral axis shift is proportional to armature current, so a brush position that suits light load is wrong at full load. An open shunt field would collapse the output voltage entirely rather than just causing load-dependent sparking.",
            },
            {
              q: "You find an even chocolate-brown glaze across the whole commutator surface. What should you do?",
              options: [
                "Sand it back to bright copper with emery cloth",
                "Leave it — it is the normal protective film that lubricates the brushes",
                "Undercut the mica immediately",
                "Replace the brushes with a copper-loaded grade",
              ],
              answer: 1,
              explain: "An even brown patina is the sign of correct commutation and it reduces brush and copper wear. Removing it, especially with emery (whose abrasive grit is conductive and embeds in the brush), does real harm. Uneven or burnt patches are a different story and do need investigation.",
            },
            {
              q: "In a d.c. machine, armature reaction reduces the net flux per pole slightly. What effect does that have on a shunt motor?",
              options: [
                "Speed falls sharply as load is applied",
                "Speed tends to rise slightly, partly offsetting the drop caused by armature volt drop",
                "The direction of rotation reverses at high load",
                "The back EMF becomes larger than the supply voltage",
              ],
              answer: 1,
              explain: "Motor speed is roughly proportional to back EMF divided by flux, so weakening the flux tends to raise speed. That is why a shunt motor's speed/load curve is so flat: the Ia x Ra drop pulls speed down while armature reaction nudges it back up.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-generator-types",
          title: "Types of d.c. generator and their characteristics",
          minutes: 13,
          simple: "Generators differ only in where the magnet coils get their current from — an outside supply, the generator's own output, the load current, or a mix of both. That one choice decides whether the output voltage sags, holds steady or climbs as you load the machine up.",
          refs: REFS_GEN_TYPES,
          content: `## Excitation is what defines the type

Every wound-field d.c. generator makes voltage the same way. What separates one
type from another is simply where the field winding gets its current:

| Type | Field supplied from | Self-excited? |
|---|---|---|
| Permanent magnet | No winding at all | Not applicable |
| Separately excited | An independent external d.c. supply | No |
| Shunt | The machine's own terminals, in parallel with the armature | Yes |
| Series | The load current itself, in series with the armature | Yes |
| Compound | Both a shunt and a series winding | Yes |

Everything else — the shape of the load curve, the method of voltage control,
what the machine is good for — follows from that choice.

## Permanent magnet generators

With no field winding there is nothing to excite, no field copper loss, and the
output voltage is directly proportional to speed. Output drops only slightly as
load is applied, because only the armature drop is at work. Control of output,
where it is needed at all, is by fitting magnetic shunts of soft iron across the
poles to divert flux away from the air gap. Their classic use is as instruments
rather than power sources: a tachogenerator producing a voltage directly
proportional to shaft speed is a permanent-magnet generator.

## Separately excited generators

The field winding is fed from its own d.c. source, so field current is
completely independent of what the armature is doing. The field may be many
turns at low current or fewer turns at higher current, depending on the supply
available.

Because the field is held constant, the terminal voltage versus speed
characteristic is a straight line, exactly like the permanent-magnet machine.
The voltage/load characteristic is a gentle downward slope, produced only by the
Ia x Ra drop in the armature. Voltage is controlled by a resistance in series
with the field to set field current: more field current gives more flux and a
higher output voltage at the same speed. The excitation curve is the OCC —
residual voltage at zero field current, a linear working region, then saturation.

Applications are process control work and rotary amplifiers, where predictable,
independently adjustable output is worth the extra supply.

## Shunt generators

The field is connected straight across the armature, so the machine excites
itself from its own output. It is cheap, simple and needs no separate supply,
but it needs residual magnetism to get started.

Its load characteristic droops more steeply than the separately excited machine
because the effect is cumulative: load current causes armature volt drop, the
terminal voltage falls, the falling terminal voltage reduces the field current,
the weaker field reduces the generated EMF, and the terminal voltage falls
further still.

That same feedback produces one useful oddity. If a shunt generator is loaded
right down to a short circuit, the field is short-circuited too, because it is
in parallel with the armature. Excitation collapses to residual magnetism alone,
so only a small voltage remains and only a modest circulating current flows.
**The shunt generator is the only type of d.c. generator that can be run safely
into a short circuit.**

Voltage control is by a rheostat in series with the field. The control range is
limited at the top by pole saturation and at the bottom by residual magnetism.
Speed control is theoretically possible but is limited by maximum design speed,
the physical size of the machine and the need for a variable-speed prime mover.
Shunt generators are mostly used for smaller, cheaper machines or where load and
speed are close to constant; they are rarely chosen for large machines.

## Series generators

The field winding is in the main current path, so the load current *is* the
field current. The winding must therefore be low resistance — a few turns of
heavy conductor — otherwise it would restrict load current and cause excessive
terminal voltage drop.

Off load, no current flows, so the field is unexcited and the only voltage is
that due to residual magnetism. As load is applied the field current grows and
the terminal voltage climbs. The voltage/load characteristic is therefore a
*rising* curve, and it is at the same time the excitation curve for the machine,
with the same familiar shape as any OCC. Once the poles saturate, further
loading brings the voltage back down again, because flux can no longer grow but
losses keep increasing.

Output control is by a **diverter resistor** — a resistor in parallel with the
series field that bypasses some current around it. Speed variation also works
within limits. Practical use of a plain series generator is close to nil today;
its value to you is as the building block of the compound machine.

## Compound generators

A compound generator carries both a shunt and a series field on the same poles.
It builds up from residual magnetism through its shunt field, so its no-load
excitation curve is identical to a shunt machine's. The series field contributes
nothing until load is applied — and that is exactly the point. The falling
characteristic of the shunt field is compensated by the rising characteristic of
the series field.

**Short-shunt** means the shunt field is connected directly across the armature;
**long-shunt** means it is connected across the output terminals. Theoretically
the losses and voltages differ slightly. In practice the performance difference
is negligible, as a motor or as a generator, and either connection can be used.

How far the series field is allowed to push determines the family of
characteristics:

| Compounding | Series field effect | Terminal voltage as load rises | Typical use |
|---|---|---|---|
| Under-compounded | Series field only partly compensates | Still falls, but less than a shunt machine | Rarely used |
| Level (critically) compounded | Series field exactly compensates | Essentially flat from no load to full load | Shipboard supplies, rolling mills, lift installations — loads close to the generator |
| Over-compounded | Series field over-compensates | Rises with load | Long feeder runs, so the far end stays at rated volts despite line drop |
| Differentially compounded | Series field opposes the shunt field | Falls sharply | Very rare deliberately; welding sets historically |

An over-compounded machine is set up so the voltage at the *load* end of a long
feeder stays about constant from no load to full load, with the extra volts at
the generator making up the line drop. Final trimming is by a diverter resistor
across the series field, adjusted on the actual installation; initial adjustment
is with the shunt field rheostat, sometimes combined with a degree of speed
control.

Differential compounding is mostly something that happens by accident. Reconnect
one field winding backwards after a repair and a cumulative machine becomes a
differential machine, and the terminal voltage will collapse as soon as load is
applied. If a rebuilt generator behaves like that, suspect the series field
polarity before anything else.

## Residual magnetism and self-excitation

Shunt, series and compound generators are all self-excited, which means each one
must bootstrap itself using the magnetism left in the poles from the last run.
That leftover flux exists because of hysteresis in the iron.

The armature conductors cut the residual flux, generating a small voltage, which
drives a small current through the field, which strengthens the flux, which
raises the voltage — and the cycle repeats until the poles saturate and output
settles at its design value.

Self-excitation happens only if **all three** of these are true:

1. A residual field exists in the poles
2. The wound field's flux acts in the same magnetic direction as the residual
   flux, so the two add rather than cancel
3. The machine is rotated in the correct direction for the excitation to build

Get any one wrong and the machine will simply not generate. If the residual flux
and the field flux oppose, they cancel and nothing builds up. It also assumes
the machine is connected correctly and is electrically sound. Lost residual
magnetism is restored by *flashing the field* — applying a d.c. supply to the
field winding briefly to re-magnetise the poles.

## Reversing generator polarity

To reverse the output polarity of a d.c. generator, reverse **either** the field
leads **or** the armature leads — not both. Reversing both simply restores the
original polarity. The same rule reappears for motor reversal.

## Testing a generator

Two tests establish that a generator is fit for service:

- **Open circuit test.** Run the machine at constant rated speed with no load
  and record generated EMF against field current. That gives the OCC, telling
  you the excitation needed for any required no-load voltage, and confirming the
  magnetic condition of the machine.
- **Load test.** Load the machine to establish its rating. Losses become heat,
  and if too much heat is produced the machine's operation suffers and it will
  eventually fail. The load test proves it can run within its temperature limit.

>! Rotating plant is a leading cause of serious workplace injury. Guard couplings
>! and shaft ends before any run-up, keep loose clothing and lanyards clear, and
>! follow the Safe Work Australia code of practice for managing the risks of
>! plant in the workplace. A generator on test is also a live source with no
>! upstream isolator — the only way to make it dead is to stop the prime mover.

## What to remember

- Excitation source defines the type; the load curve follows from the excitation
- Shunt output droops more than separately excited because the field weakens along with the terminal voltage
- The shunt generator is the only one safe on a sustained short circuit
- Series output rises with load until saturation, then falls away
- Cumulative compounding can be set under, level or over compounded; differential compounding usually means a winding is connected backwards
- Self-excitation needs residual magnetism, correct field polarity and correct direction of rotation`,
          quiz: [
            {
              q: "A shunt generator is run up but produces only a few volts. The machine is mechanically sound and turning at rated speed. What are the three conditions to check?",
              options: [
                "Brush grade, bearing clearance and ambient temperature",
                "Residual magnetism present, field connected to assist that residual flux, and correct direction of rotation",
                "Load resistance, feeder length and cable size",
                "Commutator undercut depth, brush spring tension and pigtail resistance",
              ],
              answer: 1,
              explain: "Self-excitation requires all three: residual flux to start from, a field whose flux adds to it rather than cancels it, and rotation in the direction that makes the build-up regenerative. Lost residual magnetism is fixed by flashing the field with a d.c. supply.",
            },
            {
              q: "Which type of d.c. generator can be safely operated into a short-circuited load, and why?",
              options: [
                "The series generator, because the field current is limited by the load",
                "The separately excited generator, because its field is independent",
                "The shunt generator, because a short circuit also shorts its field, so excitation collapses to residual level",
                "The over-compounded generator, because the series field takes over",
              ],
              answer: 2,
              explain: "In a shunt machine the field sits in parallel with the armature, so a short across the terminals removes the field excitation as well, and only a small residual-driven circulating current flows. A separately excited machine keeps full field during a short and would deliver a destructive fault current.",
            },
            {
              q: "A generator supplies a load at the end of a long feeder, and the voltage at the load end must stay constant from no load to full load. Which characteristic is required?",
              options: ["Under-compounded", "Level compounded", "Over-compounded", "Differentially compounded"],
              answer: 2,
              explain: "An over-compounded machine raises its terminal voltage as load increases, so the extra volts cancel the rising volt drop in the feeder and the load end stays constant. A level-compounded machine holds constant volts at the generator terminals, which is right only when the load is close by.",
            },
            {
              q: "A rebuilt compound generator holds correct voltage off load but the voltage collapses as soon as load is applied. What should you suspect first?",
              options: [
                "The armature is wave wound instead of lap wound",
                "The series field has been reconnected in reverse, making the machine differentially compounded",
                "The prime mover is undersized",
                "The brushes are the wrong grade",
              ],
              answer: 1,
              explain: "A reversed series field opposes the shunt field, so the more load current flows the more excitation is destroyed — the classic signature of accidental differential compounding after a repair. An undersized prime mover would show as speed droop, and brush grade would show as commutation problems, not a collapsing characteristic.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-motor-principle-torque",
          title: "Motor action, torque and back EMF",
          minutes: 13,
          simple: "Put a current-carrying wire in a magnetic field and the wire gets pushed sideways. Do that with hundreds of wires on a drum and the drum spins. Once it is spinning it also acts as a generator, pushing back against the supply — and that push-back is what stops a running motor from drawing enormous current.",
          refs: REFS_MOTOR_PRINCIPLE,
          content: `## Turning current into torque

A motor and a generator are the same machine. What makes a machine useful as a
motor is that it develops **torque** — a turning effect at the shaft.

When d.c. is applied to a machine, current flows in the armature conductors and
each conductor produces its own circular magnetic field. That field interacts
with the main pole field. On one side of the conductor the two fields point the
same way and reinforce, so the flux is strengthened and crowded; on the other
side they oppose and the flux is weakened. Flux lines behave like stretched
elastic bands, so the conductor is pushed from the strong side towards the weak
side. Every conductor under a pole face gets the same push, and because the
conductors are held in slots at a fixed radius from the shaft centre, the
combined push becomes a turning moment.

### Fleming's left-hand rule

For motors, use the **left** hand:

1. Hold the thumb, first finger and second finger of the left hand at right
   angles to one another
2. Point the first finger along the lines of force (flux), north to south
3. Point the second finger in the direction of conventional current in the
   conductor
4. The thumb now points in the direction of the force on the conductor

Apply it to a simple two-conductor loop and you find one side is pushed up and
the other pushed down. The pair creates rotation. In a real machine there are
hundreds of conductors, and the torque produced is more than enough to drive the
connected load unless the load is severely excessive.

## The force and torque equations

The thrust on a single conductor carrying current in a magnetic field is:

- F = B I l

where F is force in newtons, B is flux density of the main field in tesla, l is
the length of conductor in the field in metres and I is the conductor current in
amperes.

A real armature has many conductors and several parallel current paths, so with
total armature current I, Z conductors and a parallel paths:

- F = (B I l Z) / a

Torque is force times radius (T = F r), so:

- T = (B I l Z r) / a

Working that through in terms of pole flux gives the practical form used for d.c.
machines:

- T = (p x flux x I x Z) / (2 pi a)

| Symbol | Meaning | Unit |
|---|---|---|
| T | Torque | newton metres (Nm) |
| p | Number of poles | — |
| flux | Flux per pole | webers (Wb) |
| I | Total armature current | amperes |
| Z | Number of armature conductors | — |
| a | Number of parallel paths | — |

For any one machine p, Z, a and 2 pi are fixed, so the whole thing collapses to
a rule worth memorising: **torque is proportional to flux multiplied by armature
current.** Everything a d.c. motor does — why a series motor starts so hard, why
field weakening speeds a shunt motor up, why a starved field is dangerous — is a
consequence of that single relationship.

### Worked example — torque

A four-pole lap-wound d.c. motor has 500 armature conductors and a flux of
25 mWb per pole. It is drawing 30 A of armature current. Find the torque
developed.

- Lap wound, so a = p = 4
- T = (p x flux x I x Z) / (2 pi a)
- T = (4 x 0.025 x 30 x 500) / (2 x 3.1416 x 4)
- Numerator: 4 x 0.025 = 0.1; 0.1 x 30 = 3; 3 x 500 = 1500
- Denominator: 2 x 3.1416 x 4 = 25.13
- **T = 1500 / 25.13 = 59.7 Nm**

## Output power from torque

Mechanical output power at the shaft is found from torque and speed:

- P = (2 pi N T) / 60

where P is output power in watts, N is speed in rpm and T is torque in Nm.

### Worked example — output power

The motor above runs at 1500 rpm while developing 59.7 Nm.

- P = (2 x 3.1416 x 1500 x 59.7) / 60
- 2 x 3.1416 x 1500 = 9425
- 9425 x 59.7 = 562 700
- **P = 562 700 / 60 = 9378 W, or about 9.4 kW**

## Back EMF: the motor that generates while it motors

Here is the idea that ties the whole module together. When the armature of a
motor rotates, its conductors are moving through the main field — which is
precisely the condition for generator action. So a running motor generates an
EMF in its own armature. By Lenz's Law that EMF opposes the applied voltage, and
it is called **back EMF** or counter EMF, written Eb. It is always smaller than
the applied voltage, because if it were equal no current could flow and no
torque would be produced.

For a motor the voltage equation is therefore:

- Vt = Ia Ra + Eb

which is the generator equation with the sign of the armature drop flipped —
the drop is subtracted from the supply instead of added to the output. Rearrange
it and you get the equation that governs everything a d.c. motor does:

- Ia = (Vt − Eb) / Ra

Armature current is set by the *difference* between the supply voltage and the
back EMF, divided by armature resistance. And because Eb obeys the same
generated EMF formula as before, Eb rises with speed and with flux.

This gives the motor its automatic self-regulation. Load the shaft, the motor
slows a little, back EMF falls, the difference (Vt − Eb) grows, armature current
rises, and torque rises to match the new load. Remove the load and the reverse
happens. Nobody has to control it; the machine does it itself.

### Worked example — back EMF

A 240 V d.c. shunt motor has an armature resistance of 0.4 ohm and draws 25 A of
armature current at full load. Find the back EMF.

- Eb = Vt − Ia Ra
- Armature volt drop = 25 x 0.4 = 10 V
- **Eb = 240 − 10 = 230 V**

So 230 of the 240 supply volts are being balanced by generator action, and only
10 V are actually pushing current through the armature resistance.

### The consequence at standstill

At the instant of switch-on the armature is not turning, so there is no back EMF
at all. Put Eb = 0 into the same equation:

- Ia = (240 − 0) / 0.4 = **600 A**

That is 24 times the full-load armature current, on a machine whose windings are
sized for 25 A. This single number is the reason a d.c. motor above the smallest
sizes must never be connected direct-on-line, and it is dealt with in the
starting lesson.

>! A d.c. motor with a shunt or separately excited field must never be run with
>! the field open-circuited. With flux almost gone, back EMF collapses, armature
>! current climbs and the machine races away to a destructive speed. On larger
>! machines the armature can literally throw its windings. Field-failure
>! protection exists for exactly this reason and must never be bridged out.

## What to remember

- Torque is proportional to flux times armature current, always
- Fleming's left hand is for motors, right hand for generators
- P = 2 pi N T / 60 converts shaft torque and speed into mechanical watts
- Back EMF is generator action inside a running motor and always opposes the supply
- Armature current is (Vt − Eb) / Ra, so it is the shortfall between supply and back EMF that drives current
- At standstill Eb is zero, so starting current is limited only by armature resistance`,
          quiz: [
            {
              q: "A 200 V d.c. motor has an armature resistance of 0.5 ohm and a back EMF of 185 V at full load. What armature current is flowing?",
              options: ["15 A", "30 A", "370 A", "400 A"],
              answer: 1,
              explain: "Ia = (Vt − Eb) / Ra = (200 − 185) / 0.5 = 15 / 0.5 = 30 A. Dividing the full supply voltage by armature resistance (400 A) gives the standstill current, not the running current — that is exactly the mistake a starter exists to prevent.",
            },
            {
              q: "A four-pole lap-wound motor has 400 conductors, 20 mWb per pole and draws 40 A. What torque is developed?",
              options: ["25.5 Nm", "50.9 Nm", "101.9 Nm", "203.7 Nm"],
              answer: 1,
              explain: "T = (p x flux x I x Z) / (2 pi a) with a = p = 4: (4 x 0.02 x 40 x 400) / (2 pi x 4) = 1280 / 25.13 = 50.9 Nm. Using a = 2 as if the machine were wave wound would wrongly double the answer.",
            },
            {
              q: "Why does the armature current of a d.c. motor rise automatically when a mechanical load is applied to the shaft?",
              options: [
                "The supply voltage increases to compensate",
                "The motor slows slightly, back EMF falls, so the difference between supply and back EMF grows and drives more current",
                "The field resistance drops as the machine warms up",
                "The commutator adds segments under load",
              ],
              answer: 1,
              explain: "Back EMF depends on speed, so a small drop in speed reduces Eb, increases (Vt − Eb) and therefore increases Ia and torque until the motor balances the new load. Nothing external adjusts this — the machine self-regulates.",
            },
            {
              q: "A motor develops 40 Nm at 1200 rpm. What is its mechanical output power?",
              options: ["2.5 kW", "5.0 kW", "6.3 kW", "48 kW"],
              answer: 1,
              explain: "P = 2 pi N T / 60 = (2 x 3.1416 x 1200 x 40) / 60 = 301 600 / 60 = 5027 W, about 5.0 kW. Multiplying torque by speed in rpm without the 2 pi / 60 conversion gives a meaningless number.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-motor-types",
          title: "Types of d.c. motor, their characteristics and the universal motor",
          minutes: 14,
          simple: "Motors are named after how their magnet coils are wired. A shunt motor holds one speed like a cruise control. A series motor pulls like a tractor from standstill but runs away if you unhook the trailer. A compound motor is the compromise most machines use. Add a laminated frame and one of these will run on a.c. too, which is what is in your power drill.",
          refs: REFS_MOTOR_TYPES,
          content: `## The family, at a glance

d.c. motors are classified by their field connection, just like generators. The
five basic types are permanent magnet, separately excited, shunt, series and
compound. Everything about their behaviour comes back to the torque and speed
relationships from the previous lesson: torque is proportional to flux times
armature current, and speed is roughly proportional to back EMF divided by flux.

| Type | Speed as load rises | Torque versus load | Starting torque | Runaway on no load? |
|---|---|---|---|---|
| Permanent magnet | Drops slightly | Roughly proportional to load | Moderate | No |
| Separately excited | Drops slightly | Roughly linear | Moderate | Only if field is lost |
| Shunt | Drops slightly — best speed regulation | Roughly linear | Moderate | Only if field is lost |
| Series | Drops sharply | Rises steeply, roughly as current squared | Very high | Yes — dangerous |
| Cumulative compound | Drops more than shunt, less than series | Rises faster than shunt, less than series | High | No — shunt field holds it |

## Permanent-magnet motors

The most common d.c. motor of any type is the permanent-magnet motor. There is
no field winding at all; the poles are magnets. That means no field copper loss,
lower unit cost and higher efficiency, and it is why they dominate small
applications — the vibrating motor in a phone, cordless tools, toys, model
aircraft and boats.

Magnet material sets the size limit. Machines up to roughly 7.5 kW use ceramic
(ferrite) magnets, which resist demagnetisation very well but have a relatively
low flux level, which caps their output. Larger machines use Alnico magnets,
which take the design into demanding duties such as furnace electrode drives and
live table drives in steel mills. Magnets are typically moulded into the frame
and fixed with a high-temperature bonding agent, and the resulting machines suit
low-speed work such as machine tool drives.

Speed control is traditionally by electronically varying the armature voltage,
which works extremely well, and torque is comparatively linear across the normal
load range.

### Printed circuit motors

A printed circuit motor is a permanent-magnet variant with an **air-cored**
armature — a flat disc with no iron in it at all. Circular magnets are fastened
to a casting that acts as both field support and end-shield; the opposite
end-shield is magnetic material to concentrate the flux path and carries the
brush and bearing mountings. For more torque, magnets can be fitted on both
sides of the disc.

The armature conductors are photo-etched. A non-conducting substrate, often
Bakelite or fibreglass, is electroplated with pure copper on one or both sides,
the conductor shapes are outlined, and the copper between them is etched away.
Double-sided material allows coils of more than one turn.

These motors are light, have a very short shaft length and run at low speed and
low voltage. Because there is no iron in the armature, output torque is limited
and efficiency is low — but coil inductance is so low that commutation problems
essentially never occur.

## Separately excited motors

The field has its own supply, independent of the armature. There is no size
limit on this construction and it is used mainly in process control. It gives a
very wide range of speed control and its torque is linear with applied load.

The **base speed** of a separately excited motor is the speed it runs at with
rated voltage on both the field and the armature. From that reference point:

- **Below base speed**, reduce the armature voltage. Flux stays at full value so
  full torque is still available.
- **Above base speed**, reduce the field voltage — **field weakening**. Speed
  rises, but available torque falls because flux has been reduced.

Field-current control has traditionally been preferred because the control
device handles only the small field current and wastes little power, though
modern electronic armature voltage control is also very efficient.

The mechanism is worth walking through slowly, because it catches people out.
Put a rheostat in the field circuit and reduce its resistance. Field current
rises, flux rises. At the speed the machine is currently running, more flux
means more back EMF, which reduces (Vt − Eb) and therefore reduces armature
current and torque. The motor cannot hold the load, so it slows down; as it
slows, back EMF falls again and armature current recovers, and the machine
settles at a new, lower speed. **More field, slower. Less field, faster.**

Its independent field also makes it the machine of choice for Ward-Leonard
control systems and rotary amplifiers, where a small change in field current
produces a large change in speed, and in positioning applications such as remote
anemometer readouts and engine speed governors.

>! Because less field means more speed, the field current of a separately
>! excited or shunt motor must never be allowed to fall below its design minimum.
>! An open or badly weakened field lets armature current and speed climb to
>! dangerous values.

## Shunt motors

The shunt field sits in parallel with the armature, so it sees the full supply
voltage and its current is essentially constant. Of all the d.c. motor
connections, the shunt motor has the **best speed regulation** through the normal
range — its speed/load curve is very nearly flat, drooping only slightly as load
is applied. That is why it is chosen where constant speed matters, and it is
common in smaller machines and still used in larger ones for the same reason.

Speed is set with a field rheostat under normal operating conditions, exactly as
for the separately excited machine. For speeds below the normal range, a series
resistor in the armature circuit is used to vary the armature voltage. The same
warning applies: field current must never be reduced below its design minimum.

Torque increases approximately in proportion to load current, which makes shunt
motor performance easy to predict.

Reversal is by reversing **either** the armature connections **or** the field
connections — not both.

## Series motors

The field is in series with the armature and the supply, so field current equals
armature current. That single fact produces the most distinctive behaviour in
the whole d.c. family.

Since T is proportional to flux times armature current, and in a series machine
flux is itself proportional to armature current, torque is proportional to
armature current **squared** below saturation. Double the current and you get
roughly four times the torque. That is why the series motor is unbeatable for
starting against heavy loads, and it is the machine's most common application.

Speed behaves the opposite way. Under full load, both armature and field current
are high, so flux is high and speed is low. As mechanical load is removed the
current falls, the field weakens, and the motor speeds up. On no load there is
almost no flux and the machine will accelerate to a speed high enough to destroy
itself — larger series motors have been known to burst. **A series motor must
always have a minimum load permanently connected by direct coupling or an
equivalent method**; never belt-drive one where the belt could be thrown.

Typical applications are traction motors in electric trains, cranes, anchor
winches, lifts, and the near-universal one: the starter motor of a motor
vehicle, which needs enormous torque for a few seconds against a stationary
engine.

Conventional speed control is not really applicable, because the machine
inherently varies its speed over a wide range with load. At any one load and
voltage, though, speed can be raised by fitting a **diverter resistor** to
bypass part of the current around the field, weakening it. Reversal is again by
reversing either the field or the armature, but not both.

## Compound motors

The compound motor is the general workhorse of the d.c. world. It carries both a
series and a shunt winding, and is used wherever a load needs a reasonably high
starting torque but does not justify a series motor. The shunt winding is what
makes it civilised: it lets the machine run safely at very light load, which a
series motor cannot do.

In the **cumulatively compounded** connection the series and shunt fields assist
each other, increasing the total field strength. This is the connection normally
used, and like compound generators it can be under, level or over compounded.
Its speed regulation is worse than a shunt motor's but far better than a series
motor's, and its torque rises more steeply than a shunt motor's — though not as
steeply as a series motor's — at the cost of some speed.

Applications are punches, shears, rolling mills, large metal-planing machines
and any drive subject to sudden shock loads and reversals.

**Differential compounding** on a motor is possible but has almost no practical
use, and it is genuinely hazardous. Load a differentially compounded motor
beyond a certain point and the series field cancels more and more of the shunt
field; current increases rapidly and the machine abruptly reverses its direction
of rotation. Depending on its size, that sudden reversal can wreck couplings and
gearboxes or twist a shaft clean off.

### Reversing a compound machine

A cumulative compound motor has two field windings, and very likely interpoles
as well. To reverse it, **reverse both the shunt and the series windings
together**, leaving the armature and interpoles alone. Reversing only one of the
two field windings does not reverse the motor at all — it converts the machine
from cumulative to differential compounding, with all the danger that implies.

## Traction practice

On large traction drives — diesel-electric ships and especially diesel-electric
locomotives with multiple bogie drives — the drive motor is referred to as a
series motor. In reality it is usually a compound motor with the shunt field
open-circuited during starting, so it starts with series characteristics.
Several motors may also be connected in series with one another to share the
supply voltage while starting. Once the load is moving they are reconnected in
parallel, and the field connection is changed over to shunt or cumulative
compound for running.

The same flexibility allows a machine in motion to be reconnected as a
**generator** feeding a resistive load, turning the motor into a brake. This is
dynamic braking, and on an electric train descending a grade it saves enormous
wear on brake shoes. One form of emergency braking reverses the motors and
applies full voltage — effective, but brutally hard on the machine and the
mechanical drive.

## The universal motor

A **universal motor** is a series motor built so it will run on either d.c. or
single-phase a.c. It works because reversing the supply polarity reverses the
current in *both* the field and the armature at the same instant, so the torque
direction is unchanged. Torque is produced on both halves of the a.c. cycle.

Two construction changes are needed compared with a plain d.c. series machine:

- The **entire magnetic circuit is laminated**, including the yoke and poles, not
  just the armature, because the field flux now alternates and would otherwise
  produce large eddy current losses in solid iron
- The field has fewer turns and lower reactance, to limit the volt drop and the
  poor power factor that inductance would cause on a.c.

It keeps all the series motor characteristics: very high starting torque, speed
that falls steeply with load, and a serious tendency to race on no load. That
last point is managed by permanently coupling the load — which is why the
universal motor is used in appliances where the load can never be disconnected:
hand power tools, angle grinders, vacuum cleaners, food mixers and small
domestic appliances. Speeds of 10 000 rpm and more are normal, which is what
gives a small, light universal motor its high power-to-weight ratio compared
with an induction motor of the same output.

Speed control is simple and cheap — a triac or thyristor phase-angle control, or
a tapped field — which is why almost every variable-speed hand tool uses one.
The trade-off is brush and commutator wear, and radio-frequency interference
from brush sparking, which is why these motors carry suppression capacitors.

## On the job

- Field connection decides everything: shunt for constant speed, series for starting torque, compound for both
- A series motor or universal motor must never be run uncoupled
- Never reverse only one field winding on a compound machine — you will create a differentially compounded machine
- More field current means less speed; less field current means more speed
- Below base speed use armature voltage control, above base speed use field weakening
- A universal motor is a fully laminated series motor, and it is what is inside almost every corded power tool`,
          quiz: [
            {
              q: "Why must a large d.c. series motor never be run without a load coupled to it?",
              options: [
                "The brushes will not bed in without load",
                "With no load the current and therefore the field flux fall away, and the motor accelerates to a destructive speed",
                "The commutator overheats at low current",
                "The series field will go open circuit",
              ],
              answer: 1,
              explain: "In a series machine flux depends on armature current, so removing the load removes the field. Speed is roughly back EMF divided by flux, so a collapsing flux means runaway. This is why series motors are direct-coupled to their load and never belt driven where the belt could come off.",
            },
            {
              q: "A cumulative compound motor must be reversed. What do you change?",
              options: [
                "Reverse the armature and the interpoles together, leaving both fields alone",
                "Reverse the series field only",
                "Reverse both the shunt and series field windings together, leaving armature and interpoles alone",
                "Reverse the shunt field, the series field and the armature",
              ],
              answer: 2,
              explain: "Both fields must change together, or reverse the armature-plus-interpole group instead. Reversing only one field converts the machine from cumulative to differential compounding, which can cause a sudden reversal under load and wreck the drive train. Reversing everything gives no change of direction at all.",
            },
            {
              q: "Which motor type gives the best speed regulation across its normal operating range?",
              options: ["Series", "Shunt", "Differentially compounded", "Universal"],
              answer: 1,
              explain: "The shunt motor's field current is held nearly constant by the supply voltage, so its speed droops only slightly with load. Series and universal motors vary their speed widely with load because their flux depends on load current.",
            },
            {
              q: "Why is the whole magnetic circuit of a universal motor laminated, not just the armature?",
              options: [
                "To make the motor lighter",
                "Because on a.c. supply the field flux alternates, and solid iron poles and yoke would suffer heavy eddy current losses",
                "To allow the field to be reversed electronically",
                "Because laminations increase the starting torque",
              ],
              answer: 1,
              explain: "A universal motor must run on a.c., where the field flux reverses every half cycle. Any solid iron in that path would carry large circulating eddy currents and overheat, so the yoke and poles are laminated as well as the armature. Weight saving is incidental, not the reason.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-motor-starting-speed-control",
          title: "Starting, speed control, reversing and braking",
          minutes: 13,
          simple: "A stopped motor is just a low-resistance coil across the supply, so switching one straight on draws a huge current. A starter adds resistance for the first few seconds and takes it out again as the motor picks up speed and starts pushing back. After that, the same maths tells you how to make it run faster or slower.",
          refs: REFS_STARTING,
          content: `## Why a d.c. motor needs a starter

Everything here follows from one equation you already know:

- Ia = (Vt − Eb) / Ra

A running motor is protected by its own back EMF. At standstill there is no
rotation, therefore no back EMF, therefore nothing standing between the supply
voltage and the very low resistance of the armature winding.

### Worked example — starting current without a starter

Take the 240 V shunt motor from the previous lesson: armature resistance 0.4 ohm,
full-load armature current 25 A.

- At full speed: Eb = 240 − (25 x 0.4) = 230 V, and Ia = 25 A
- At the instant of switching on: Eb = 0
- Ia = (240 − 0) / 0.4 = **600 A**

600 A through windings and brush gear rated for 25 A. That current would blow
the protection, weld or destroy brushes and commutator segments, and apply a
torque impulse of twenty-plus times normal to the coupling and gearbox. It is
why any d.c. motor beyond fractional sizes must be started through a starter.

### Worked example — sizing the starting resistance

The same motor is to be started with the armature current limited to 1.5 times
full-load value.

- Permitted starting current = 1.5 x 25 = **37.5 A**
- Total armature circuit resistance needed = Vt / Ia = 240 / 37.5 = **6.4 ohm**
- The armature already contributes 0.4 ohm
- External starting resistance = 6.4 − 0.4 = **6.0 ohm**

That 6.0 ohm is the total value in circuit at the moment of switch-on. As the
motor accelerates, back EMF builds, so the resistance is progressively cut out
in steps until the motor is running with the full 240 V across the armature. A
face-plate starter does this with a hand-operated arm moving across brass studs;
an automatic starter does it with time-delay or current-sensing contactors; a
modern drive does it electronically by ramping the armature voltage.

>! Never hold a manual face-plate starter arm part-way across the studs to run a
>! motor slowly. The starting resistors are rated for seconds of duty, not
>! continuous running, and will overheat and fail — often with the arm still in
>! the operator's hand.

## Protection built into a starter

A traditional d.c. starter is more than a resistance bank. It also carries:

- A **no-volt release** (undervoltage release): an electromagnet, energised from
  the supply, that holds the starter arm at the run position. Lose the supply
  and the arm springs back to off, so the motor cannot restart across full
  voltage when power returns. It also drops out if the shunt field goes open
  circuit, because on many designs the coil is in series with the field.
- An **overload release**: trips the holding circuit if armature current exceeds
  a set value, releasing the arm to off.

Both are safety devices. Bridging either one out to get a machine running is
never acceptable.

## Speed control

Speed of a d.c. motor follows from rearranging the motor voltage equation:

- Eb = Vt − Ia Ra, and Eb is proportional to flux x speed

so speed is proportional to (Vt − Ia Ra) divided by flux. There are only three
things on the right-hand side you can change, which gives exactly three families
of speed control.

| Method | What is changed | Speed range | Effect on torque | Efficiency |
|---|---|---|---|---|
| Field control (field weakening) | Field current, via a field rheostat or reduced field voltage | Above base speed | Available torque falls as flux falls | Good — the control device carries only small field current |
| Armature voltage control | Voltage applied to the armature, via a variable supply or electronic drive | Zero up to base speed | Full torque available throughout | Very good with modern electronics |
| Armature resistance control | Resistance in series with the armature | Below base speed | Torque retained, but speed varies badly with load | Poor — wasted as heat in the resistor |

### Field control in detail

Adding resistance in the field circuit reduces field current and flux, so back
EMF at a given speed falls, armature current rises, torque rises, and the motor
accelerates until the back EMF again balances. Field weakening is the standard
way to get speeds *above* base speed. Removing field resistance does the
opposite and slows the machine.

The limit is at the weak-field end. Reduce the field too far and armature
current and speed both climb dangerously, so field circuits are protected
against open circuit and rheostats are built with a minimum resistance stop.

### Armature voltage control in detail

Reduce the voltage applied to the armature and the motor slows, with flux still
at full value so full torque remains available. This is the preferred way to get
speeds *below* base speed. Historically it was done with a motor-generator set
(the Ward-Leonard system), in which a separately excited generator's field
current sets the armature voltage supplied to the motor — giving smooth control
from zero to base speed in either direction. Today the same job is done far more
compactly by a thyristor or transistor drive, and modern electronic armature
voltage control is very efficient.

### Armature resistance control in detail

A resistor in series with the armature drops voltage and slows the motor. It is
simple and it retains full flux, but the volt drop depends on load current, so
speed regulation becomes very poor — the motor slows sharply whenever the load
increases. All the dropped voltage becomes heat, so efficiency at low speed is
bad. Use it for short-term or intermittent duty only.

### Series motors are different

Speed control methods as such are not really applicable to a series motor,
because its speed already varies widely with load. At any one load and voltage,
however, its speed can be raised by fitting a **diverter resistor** in parallel
with the field to bypass part of the current around it, weakening the field.

## Reversing

The rule is the same for every d.c. machine, motor or generator:

**Reverse either the field or the armature — but never both.**

Reversing both reverses the current in the field and the armature at the same
time, and the torque direction is unchanged. That is not a fault, it is exactly
why a universal motor runs on a.c.

Two practical cautions:

1. If the machine has interpoles, the interpoles and armature form one group.
   Reverse them together, or reverse the field instead.
2. On a compound machine, reverse both field windings together, or you convert
   cumulative compounding to differential compounding.

## Braking

A d.c. motor in motion can be reconnected to act as a generator, and that is the
basis of electrical braking:

- **Dynamic (rheostatic) braking.** Disconnect the armature from the supply and
  connect it across a resistor bank while the field stays excited. The machine
  generates, the resistors absorb the energy as heat, and the braking torque
  slows the drive. Widely used on trains descending grades to save brake shoe
  wear.
- **Regenerative braking.** Same idea, but the generated energy is returned to
  the supply instead of being burnt in resistors. It only works while the
  machine is turning faster than the speed corresponding to the supply voltage.
- **Plugging.** Reverse the supply to the motor while it is still running
  forwards. Very rapid stopping, and one form of emergency braking on electric
  trains applies full reversed voltage. It is extremely severe on the machine
  and drive train and should not be used routinely.

## On the job

- Standstill armature current is supply voltage divided by armature resistance — always work it out before energising an unfamiliar machine
- Size starting resistance from the current you are prepared to allow, then subtract the armature resistance
- Never park a face-plate starter arm mid-travel to run slowly
- Field weakening gives speeds above base speed; armature voltage gives speeds below it
- Reverse either field or armature, never both; keep interpoles with the armature and both compound fields together
- Do not defeat a no-volt or overload release to get a machine running`,
          quiz: [
            {
              q: "A 400 V d.c. motor has an armature resistance of 0.25 ohm. What current would flow if it were switched direct on line at standstill?",
              options: ["100 A", "400 A", "1000 A", "1600 A"],
              answer: 3,
              explain: "At standstill there is no back EMF, so Ia = Vt / Ra = 400 / 0.25 = 1600 A. Once running, back EMF absorbs most of the supply voltage and the current falls to a normal value — but the starter has to survive that first instant.",
            },
            {
              q: "The same 400 V, 0.25 ohm motor has a full-load armature current of 50 A and must be started at no more than twice full load. What external starting resistance is required?",
              options: ["3.75 ohm", "4.0 ohm", "7.75 ohm", "8.0 ohm"],
              answer: 0,
              explain: "Permitted current = 2 x 50 = 100 A. Total circuit resistance = 400 / 100 = 4.0 ohm. The armature already provides 0.25 ohm, so the external resistance is 4.0 − 0.25 = 3.75 ohm. Forgetting to subtract the armature resistance gives the 4.0 ohm answer.",
            },
            {
              q: "A shunt motor must run at 130 % of its base speed. Which control method is appropriate?",
              options: [
                "Add resistance in series with the armature",
                "Reduce the armature voltage",
                "Weaken the field by adding resistance in the field circuit",
                "Reverse the field connections",
              ],
              answer: 2,
              explain: "Speeds above base speed are obtained by field weakening, since speed is roughly proportional to back EMF divided by flux. Armature voltage control and armature resistance can only give speeds below base speed. Note that torque capability falls as the field is weakened.",
            },
            {
              q: "What is the purpose of the no-volt release on a d.c. starter?",
              options: [
                "To limit starting current to a safe value",
                "To release the starter arm to the off position on loss of supply or loss of field, so the motor cannot restart across full voltage",
                "To short out the starting resistors once the motor is up to speed",
                "To indicate that the machine is dead before work begins",
              ],
              answer: 1,
              explain: "The no-volt release holds the arm in the run position only while the supply and field are healthy. If either is lost, the arm returns to off, protecting the machine from a direct-on-line restart when power returns. Current limiting is done by the starting resistors, not by the release.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-machine-losses-efficiency",
          title: "Losses and efficiency in d.c. machines",
          minutes: 12,
          simple: "No machine gives back everything you put in. Some energy turns into heat in the copper, some into heat in the iron, and some is eaten by friction and by fanning air around. Efficiency is just what comes out divided by what goes in, and knowing where the losses hide tells you where to look when a machine runs hot.",
          refs: REFS_EFFICIENCY,
          content: `## Where the energy goes

A d.c. machine converts energy, and no conversion is perfect. In a motor,
electrical power goes in and mechanical power comes out; in a generator it is
the other way round. Either way:

- Input power = Output power + Losses

The losses in a rotating machine fall into two groups.

**Mechanical losses** are friction and windage. Friction is present in every
bearing and at every brush sliding on the commutator. Windage is air resistance
against the rotating parts, and it includes the power taken by any fan fitted to
force cooling air through the machine. Both depend on speed and are essentially
independent of load.

**Electrical losses** are copper losses, iron losses, magnetic leakage and
various smaller stray losses:

| Loss | Cause | Varies with |
|---|---|---|
| Armature copper loss | Resistance of the armature winding | Armature current squared |
| Field copper loss | Resistance of the field winding | Roughly constant on a shunt field; with load squared on a series field |
| Iron (core) loss | Hysteresis and eddy currents in the armature core | Speed and flux — nearly constant from no load to full load |
| Brush contact loss | Volt drop across the sliding carbon contact | Load current |
| Friction and windage | Bearings, brush drag, air resistance, cooling fan | Speed |
| Magnetic leakage and stray load loss | Flux that misses the useful path, distortion effects | Load |

Copper loss and iron loss are the two main electrical losses in a machine, and
adding them gives the total electrical power loss.

## Why copper loss is the one that bites

Copper loss follows P = I squared x R. That square term is everything. At light
load the current is small and copper loss is at a minimum. **Double the armature
current and the copper loss becomes four times as great** — and four times as
much heat has to be got rid of, usually by air circulation, which itself costs a
bit more windage loss. It is a compounding problem, and it is the reason
machines are rated by temperature rise rather than by any single electrical
limit.

Iron loss behaves quite differently: it is almost constant from no load to full
load, because it depends on flux and speed rather than on load current.

In a typical machine, copper losses account for up to around **60 %** of the
total losses, and iron losses for approximately **20 %**. The remainder is
mechanical and stray.

## The equivalent circuit

For analysis it is normal to assume that all the armature resistance is
concentrated into one lumped component, rather than distributed through the
winding. Drawing a shunt machine that way gives a clear picture: an EMF source
in series with the armature resistance Ra, with the field circuit resistance Rf
in parallel across the terminals, feeding the load.

For a **generator**, the armature current supplies both the field and the load:

- Ia = If + Iload
- Eg = Ia Ra + Vt

For a **motor**, the applied voltage supplies the armature drop and is opposed
by the back EMF:

- Vt = Ia Ra + Eb
- Ia = (Vt − Eb) / Ra

The two equations differ only in the sign of the Ia Ra term, because in a
generator the armature drop is subtracted from what the machine makes, and in a
motor it is subtracted from what the supply provides. Where the machine has a
series field winding, the resistance of that winding must be added to the
armature resistance before working out the drop.

### A quick illustration

A generator is designed to hold 200 V at its terminals and has an armature
resistance of 0.5 ohm. Every ampere the armature supplies costs 0.5 V of
internal drop, so every 2 A costs 1 V. At 10 A of armature current the internal
drop is 5 V, so the armature must actually generate 205 V for 200 V to appear at
the terminals.

## Worked example — full efficiency calculation

A 240 V d.c. shunt motor draws 30 A from the supply at full load and runs at
1200 rpm. The shunt field circuit resistance is 80 ohm and the armature
resistance is 0.4 ohm. Iron, friction and windage losses together amount to
300 W. Find the output power, the efficiency and the shaft torque.

**Step 1 — input power**

- Pin = Vt x Iline = 240 x 30 = **7200 W**

**Step 2 — split the current**

- Field current If = Vt / Rf = 240 / 80 = **3 A**
- Armature current Ia = 30 − 3 = **27 A**

**Step 3 — copper losses**

- Field copper loss = Vt x If = 240 x 3 = **720 W**
- Armature copper loss = Ia squared x Ra = 27 x 27 x 0.4 = 729 x 0.4 = **291.6 W**

**Step 4 — total losses**

- Total = 720 + 291.6 + 300 = **1311.6 W**

**Step 5 — output power**

- Pout = Pin − losses = 7200 − 1311.6 = **5888.4 W, about 5.9 kW**

**Step 6 — efficiency**

- Efficiency = (Pout / Pin) x 100 = (5888.4 / 7200) x 100 = **81.8 %**

**Step 7 — shaft torque**, from P = 2 pi N T / 60 rearranged as
T = 60 P / (2 pi N):

- T = (60 x 5888.4) / (2 x 3.1416 x 1200)
- T = 353 300 / 7540 = **46.9 Nm**

A useful cross-check on step 2 and step 3: back EMF here is
Eb = 240 − (27 x 0.4) = 229.2 V, so the power converted to mechanical form in
the armature is 229.2 x 27 = 6188 W. Subtract the 300 W of iron, friction and
windage and you get 5888 W — the same output, reached a different way.

## Efficiency changes with load

Efficiency is not a single number for a machine; it varies with load. At very
light load the constant losses (iron, friction, windage, shunt field) are still
being paid in full while very little useful output is produced, so efficiency is
poor. As load increases, output climbs faster than the losses and efficiency
improves. At heavy overload the current-squared copper loss takes over and
efficiency falls again.

**Maximum efficiency occurs when the variable losses are equal to the constant
losses.** Variable losses are the load-dependent ones, principally armature
copper loss; constant losses are iron, friction, windage and shunt field. Most
machines are designed so this crossover point lands a little below rated full
load, because that is where they spend most of their working life.

## MEPS and d.c. machines

Minimum Energy Performance Standards set the minimum energy performance a
product must meet before it can be sold or used commercially in Australia. For
rotating machines, MEPS applies to three-phase squirrel cage induction motors
above 0.75 kW. **d.c. motors are not currently subject to MEPS requirements** —
which does not mean their efficiency does not matter, only that it is not
regulated the same way.

## Keeping efficiency up in service

Losses are largely a design matter, but a surprising amount of a machine's
efficiency is in the technician's hands:

- **Cooling.** The frame is designed to shed heat via forced air movement, and
  the fan design is part of that calculation. Blocked vents, a machine pushed up
  against a wall, or a screen packed with lint will raise the winding
  temperature, raise resistance and therefore raise copper loss.
- **Copper losses** are attacked at the design stage by properly sizing the field
  windings and the field system for the I squared R they will carry — but in
  service they are attacked by keeping loads within rating and connections tight.
  A loose or corroded terminal adds resistance exactly where the full current
  flows.
- **Iron losses** are reduced by using high-grade silicon steel laminations, which
  is a manufacturing choice; in service, the equivalent is not to let anyone
  overspeed the machine or over-flux it.
- **Mechanical losses** respond directly to preventative maintenance. Check
  bearings and brushes regularly and keep the machine free of grit and dirt.
  Over-tight brush springs, dry bearings and a fouled fan all show up as heat
  and lost output.

## On the job

- Input equals output plus losses, whichever direction the machine is converting
- Copper loss goes with current squared, so overload heat rises far faster than overload current
- Iron loss is roughly constant with load; copper loss is not
- Maximum efficiency happens where variable losses equal constant losses
- Copper accounts for roughly 60 % and iron for roughly 20 % of a machine's total losses
- d.c. motors sit outside MEPS, but blocked vents and worn bearings still cost real money`,
          quiz: [
            {
              q: "The armature current of a d.c. machine is doubled. What happens to the armature copper loss?",
              options: [
                "It stays the same",
                "It doubles",
                "It becomes four times as great",
                "It halves",
              ],
              answer: 2,
              explain: "Copper loss follows I squared x R, so doubling current quadruples the loss and quadruples the heat that must be removed. This square-law behaviour is why a modest overload produces such a large temperature rise.",
            },
            {
              q: "A 240 V shunt motor draws 25 A total, with a field circuit of 120 ohm and armature resistance of 0.5 ohm. What is the armature copper loss?",
              options: ["144.5 W", "264.5 W", "312.5 W", "480 W"],
              answer: 1,
              explain: "Field current = 240 / 120 = 2 A, so armature current = 25 − 2 = 23 A. Armature copper loss = 23 squared x 0.5 = 529 x 0.5 = 264.5 W. Using the full 25 A line current instead of the armature current gives 312.5 W, which is the common error.",
            },
            {
              q: "At what load does a d.c. machine reach its maximum efficiency?",
              options: [
                "At no load, where current is lowest",
                "Where the variable losses equal the constant losses",
                "At the maximum current the windings can carry",
                "At exactly half of rated speed",
              ],
              answer: 1,
              explain: "Efficiency peaks where the load-dependent losses (mainly armature copper loss) equal the load-independent ones (iron, friction, windage, shunt field). At no load the constant losses are being paid with almost no useful output, so efficiency is very poor there.",
            },
            {
              q: "Which statement about Minimum Energy Performance Standards is correct in Australia?",
              options: [
                "MEPS applies to all rotating machines over 0.75 kW including d.c. motors",
                "MEPS applies to three-phase squirrel cage induction motors over 0.75 kW; d.c. motors are not currently covered",
                "MEPS applies only to generators, not motors",
                "MEPS sets the maximum efficiency a motor is permitted to have",
              ],
              answer: 1,
              explain: "MEPS sets a minimum performance level products must meet before sale or commercial use, and for motors it targets three-phase squirrel cage machines above 0.75 kW. d.c. motors currently fall outside those requirements — MEPS is a floor on performance, never a ceiling.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "dc-machine-maintenance-testing",
          title: "Testing, fault finding and maintenance of d.c. machines",
          minutes: 12,
          simple: "Most d.c. machine faults show up in three places: the brushes, the commutator, or a winding that has gone open or shorted. A meter and a good look will find nearly all of them, provided you make the machine dead and prove it first.",
          refs: REFS_MAINTENANCE,
          content: `## Start with the nameplate

You cannot decide whether a reading is wrong without knowing what it should be.
The nameplate gives you the manufacturer, year of manufacture, serial number,
output power rating, rated speed, field excitation voltage, rated armature
current and mass — and from those figures you can predict what your meter should
show.

Take a machine plated at 495 V and 29.9 A for the armature, with a 300 V, 2.18 A
excitation field:

- Expected field circuit resistance = 300 / 2.18 = **137 ohm** (measured cold,
  with the machine isolated)
- Expected field power = 300 x 2.18 = **654 W**
- Expected armature input at full load = 495 x 29.9 = **14 800 W, about 14.8 kW**

Now a resistance reading of 137 ohm on the field means what it should. A reading
of, say, 30 ohm means a large part of the winding is being bypassed — turns are
short-circuited. An infinite reading means the winding is open circuit.

## A safe testing sequence

Work through this in order. The first three steps are about making sure the
machine will not hurt you.

1. **Prove the frame is safe to touch.** With a voltmeter, test from the machine
   frame to a known earth. Then prove your meter still works on a known live
   source — a meter that has failed since you used it last will happily read
   zero volts on a live frame.
2. **Prove the earthing.** With the supply isolated, measure resistance from the
   frame to the known earth point to confirm the frame is properly earthed.
3. **Isolate, lock and tag** the supply before opening anything further.
4. **Check for supply at the terminals.** Open the terminal box and test
   positive to negative, and positive to earth. If supply is present and the
   machine is not running, the fault is in the machine. If there is no supply,
   the fault lies between the machine and the switchboard — go and look there
   rather than dismantling a healthy machine.
5. **Measure winding resistances** with the supply isolated and tagged. Identify
   the armature and the field windings, and measure each one separately. Compare
   with the nameplate-derived values.
6. **Measure running values** with a d.c. voltmeter and a d.c. ammeter once the
   machine is safely energised again, and compare with rated armature and field
   voltages and currents.

>! A shunt field is a large inductor. Breaking field current while the machine is
>! energised generates a very high induced voltage across the winding and across
>! whatever opened the circuit. Discharge and isolate properly rather than
>! yanking a field lead, and remember that a machine coasting to a stop with its
>! field still excited is a live generator.

## Interpreting the readings

| Measurement | Result | Most likely cause |
|---|---|---|
| Field winding resistance | Infinite | Open circuit winding, broken connection or failed joint |
| Field winding resistance | Well below nameplate value | Shorted turns within the winding |
| Field winding resistance | At nameplate value | Field circuit healthy — look elsewhere |
| Armature resistance between commutator segments | One pair reads high or open | Open armature coil or unsoldered riser connection |
| Armature resistance between segments | One pair reads low | Shorted coil, or copper or carbon dust bridging segments |
| Winding to frame | Low or zero resistance | Insulation failure to earth |
| Terminal voltage present, machine will not run | — | Brushes worn or hung up, so no contact with the commutator |

Worn brushes that no longer reach the commutator, or brushes stuck in their
holders by carbon dust, are one of the most common reasons for a machine that
has volts at the terminals and does nothing at all.

## Preventative maintenance

Every rotating machine deserves a written preventative maintenance program. How
often it is done depends on how much the machine runs and on the environment it
lives in — a machine in a clean, dry plant room needs far less attention than
one in a dusty workshop or an outdoor installation.

The core tasks are:

1. **Visual inspection** for condition, safety and fitness for purpose — guards
   in place, terminal box closed, no signs of overheating or physical damage
2. **General clean** of the machine body, vents and cooling screens, so the
   designed airflow is not obstructed
3. **Check commutator and brushes**
4. **Test the field coils and armature windings**, including insulation
   resistance
5. **Lubricate the bearings** to the manufacturer's schedule — over-greasing is
   as damaging as under-greasing

## Brushes and commutator

This is where a d.c. machine differs from every other machine you maintain, and
where most of the routine attention goes.

**Brush wear.** Carbon brushes are consumable. Check the length against the wear
limit and replace before the pigtail or spring can touch the commutator, because
that will cut deep grooves in the copper in minutes. Replace brushes as a
complete set, in the correct grade for the machine — mixing grades makes some
brushes carry more than their share of current. New brushes must be **bedded**
to the commutator curvature so they seat over their full face; a brush contacting
on only part of its face will overheat and spark.

**Spring pressure.** Too little and the brush bounces, arcs and burns. Too much
and both the brush and the commutator wear rapidly and friction loss rises.
Check springs are intact and set to the manufacturer's pressure.

**Free movement.** Brushes must slide easily in their holders so they follow
surface irregularities and feed down as they wear. Carbon dust packs the holders
solid over time — clean them out.

**Commutator surface.** A healthy commutator carries an even brown film. Look
for burnt or blackened bars in a repeating pattern, which point to a faulty
armature coil, and for grooving, threading, high bars or flat spots. Light
scoring can be polished with a commutator stone; serious damage means skimming
the commutator in a lathe. **Never use emery cloth** — the abrasive is conductive
and embeds itself in the brushes and the mica slots.

**Undercutting.** The copper segments wear away in service but the mica between
them does not, so eventually the mica stands proud of the copper. That lifts the
brushes off the copper, destroys contact, and produces heavy sparking and rapid
brush wear. The remedy is **undercutting**: cutting the mica down below the
copper surface, typically to a depth of around 1 to 1.5 mm on a medium machine,
with a slot of clean square section and the edges of the segments lightly
chamfered afterwards to remove burrs. Undercutting is essential after any
commutator skim.

**Cleanliness.** Blow or vacuum out carbon dust regularly. Conductive dust
bridging segments or tracking across the brush gear insulation causes flashover.

## Common faults, quickly

| Symptom | Look at |
|---|---|
| Machine hums but will not start | Worn or hung-up brushes, open armature circuit, jammed load, no field |
| Sparking that worsens with load | Brush position, interpole fault, armature reaction, wrong brush grade |
| Sparking at one point per revolution | Faulty armature coil or a high or low commutator bar |
| Motor runs away on light load | Open or weak shunt field, or a series machine uncoupled from its load |
| Motor runs slow and hot | Overload, low supply voltage, excessive field current, shorted armature coils |
| Generator will not build up voltage | Lost residual magnetism, reversed field connection, wrong direction of rotation |
| Rapid brush wear | Wrong grade, over-tension springs, rough or proud-mica commutator, abrasive dust |
| Bearing noise or heat | Lubrication, misalignment, belt over-tension, bearing failure |

## Safety around rotating plant

Plant is a leading cause of death and serious injury in Australian workplaces.
The hazards specific to rotating machines include:

- Limbs amputated or drawn into unguarded moving parts
- Crushing injuries caused by mobile plant
- Broken bones from a fall while climbing on, running or servicing plant
- Electric shock where plant is not properly isolated or otherwise guarded
  against contact
- Burns and scalds caused by hot surfaces, naked flame or hot fluids

Longer-term hazards include noise-induced hearing loss and musculoskeletal
injury from manual handling or poorly designed plant.

Safe Work Australia publishes a code of practice for managing the risks of plant
in the workplace, covering the whole life cycle from installation and
commissioning through use to decommissioning and dismantling. It is available at
[safeworkaustralia.gov.au](https://www.safeworkaustralia.gov.au) and you should
be familiar with it before working on rotating d.c. machines.

>! Guards go back on before the machine is run — not afterwards. A coupling or
>! shaft key running at 1500 rpm will take a hand off, and a machine that is
>! merely switched off at a local isolator is not isolated. Lock, tag and prove
>! dead every time, and treat a coasting machine as live.

## On the job

- Work out expected resistances from the nameplate before you pick up the meter
- Infinite field resistance means open circuit; a reading well below expected means shorted turns
- Volts at the terminals with no rotation usually means brushes, not windings
- Replace brushes as a matched set, bed them properly and clean the holders out
- Undercut the mica whenever it stands proud, and always after a commutator skim
- Emery cloth has no place anywhere near a commutator`,
          quiz: [
            {
              q: "A nameplate shows a field excitation of 300 V, 2.18 A. Your ohmmeter reads 30 ohm across the isolated field winding. What does that indicate?",
              options: [
                "The field is healthy",
                "The field winding is open circuit",
                "A large number of turns are short-circuited within the winding",
                "The armature is earthed",
              ],
              answer: 2,
              explain: "The expected value is 300 / 2.18 = about 137 ohm. A reading far below that means much of the winding is being bypassed by shorted turns, which will produce weak flux, high field current and overheating. An open circuit would read infinite, not low.",
            },
            {
              q: "Why must the mica between commutator segments be undercut as a machine ages?",
              options: [
                "To increase the creepage distance between segments",
                "Because copper wears away in service while the harder mica does not, so proud mica lifts the brushes off the copper and causes sparking",
                "To allow carbon dust to escape from the machine",
                "To reduce the inductance of the armature coils",
              ],
              answer: 1,
              explain: "Brush contact wears the copper but barely touches the mica, so the insulation eventually stands above the segments and breaks brush contact. Undercutting the mica below the copper surface restores proper contact. It is also mandatory after skimming a commutator in a lathe.",
            },
            {
              q: "You have volts at the terminals of a d.c. motor but the machine does nothing. Which fault should you check first?",
              options: [
                "The prime mover coupling",
                "Worn or hung-up brushes not making contact with the commutator",
                "The nameplate rating",
                "The no-volt release setting",
              ],
              answer: 1,
              explain: "If supply is present at the terminals and the machine is dead, the fault is inside the machine, and brushes that have worn short or jammed in their holders with carbon dust are the classic cause. If there had been no volts at the terminals, the problem would lie between the machine and the switchboard instead.",
            },
            {
              q: "Which of these is acceptable practice when cleaning up a lightly scored commutator?",
              options: [
                "Emery cloth, because it cuts quickly",
                "A commutator stone, followed by removal of dust and a check that the mica is not proud",
                "A file, working across the segments",
                "Wet-and-dry paper with light oil",
              ],
              answer: 1,
              explain: "A commutator stone is the correct abrasive for light scoring. Emery is conductive and its grit embeds in the brushes and mica slots, causing continuing damage. Filing or oiling a commutator ruins the surface and destroys the protective film that makes brushes last.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
