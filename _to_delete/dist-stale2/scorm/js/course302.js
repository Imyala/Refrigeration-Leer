/* =========================================================================
   Course content, module 302 — Electrical fundamentals.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 2 — Electrical fundamentals.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Ch 2, electrical fundamentals",
  ];

  const REFS_ATOM = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — atomic structure, electron shells and valence electrons",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — conductors, insulators and charged particles",
  ];

  const REFS_STATIC = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — static electricity, electrostatic charge and potential difference",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electrostatic sources and industrial applications of static charge",
  ];

  const REFS_CURRENT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — current (dynamic) electricity and the coulomb",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electron flow versus conventional current flow",
  ];

  const REFS_EMF = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electromotive force, voltage and potential difference",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electrical resistance and resistivity",
  ];

  const REFS_GEN = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — production of electricity from renewable and non-renewable sources",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power generation, alternators and fuel cells",
  ];

  const REFS_TX = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transmission and distribution of electrical energy",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — early and modern power-distribution systems",
  ];

  const REFS_LOAD = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — utilisation of electricity and electrical appliances",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistors, inductors and capacitors as loads",
  ];

  const REFS_SI = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — SI base units, derived units and electrical quantities",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — basic calculations, distance, displacement, speed and velocity",
  ];

  const MODULES = [

  /* ======================================================================
     Module E.2 — Electrical fundamentals
     ====================================================================== */
  {
    id: "elec-fundamentals",
    stream: "elec",
    title: "E.2 · Electrical fundamentals",
    blurb: "Where electricity comes from and what it actually is: atoms and electrons, static and current electricity, EMF, resistance, generation and supply, and the SI units and calculations the trade runs on.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "atoms-and-materials",
        title: "Matter, atoms and why copper conducts",
        minutes: 14,
        simple: "Everything around you is made of atoms, and every atom has tiny particles called electrons whirling around the outside. In some materials, like copper, the outermost electrons are held so loosely that they wander off and drift along the wire — that drifting is electricity. In other materials, like plastic, the electrons are locked in tight, so nothing moves and we use them for insulation.",
        refs: REFS_ATOM,
        content: `
Every switch you throw, every cable you terminate and every fault you chase
comes down to one thing: whether electrons in a material will move when you push
on them. That is not a philosophical point — it decides why cable cores are
copper and cable sheaths are PVC, why an overloaded conductor gets hot, why a
thermistor changes value with temperature, and why insulation eventually breaks
down. Get the picture of the atom straight now and the rest of the electrical
trade stops being a list of rules to memorise.

## Matter, molecules and atoms

All matter is built from atoms. When two or more atoms bond chemically they form
a molecule, and a molecule is the smallest piece of a pure substance you can
have while still keeping that substance's identity and chemical behaviour. Split
a water molecule and you no longer have water — you have hydrogen and oxygen,
which behave nothing like it.

An element is a substance made from one kind of atom only. Copper, aluminium,
silver, carbon and silicon are all elements, and each one behaves electrically
the way it does because of how its atoms are built.

## Bohr's model: the atom as a tiny solar system

Atoms are far too small to look at directly, so most of what we know about them
came from experiment plus a working mental model. The one the electrical trade
still uses was published by the Danish physicist Niels Bohr, and it is
deliberately planetary: a nucleus sits in the middle like the sun, and electrons
orbit it like planets.

The nucleus contains **protons**, which carry a positive charge, and
**neutrons**, which carry no charge at all. Almost the entire mass of the atom is
in that nucleus. Orbiting around it are the **electrons**, which carry a negative
charge and are far lighter than a proton — roughly one eighteen-hundredth of its
mass.

Two effects keep an electron in orbit rather than either falling into the nucleus
or flying away:

1. the momentum of the orbiting electron, which throws it outwards and stops it collapsing into the nucleus
2. the attraction between the negative electron and the positive nucleus, which stops it escaping into space.

An atom in its natural state has exactly as many electrons as protons, so the
negative and positive charges cancel and the atom is electrically neutral. The
**atomic number** of an element is simply its number of protons, and that number
is what identifies the element on the Periodic Table. Copper — the best
general-purpose conductor the trade uses — has atomic number 29, so a copper atom
has 29 protons and 29 electrons.

## Shells and energy levels

Once an atom has more than two electrons, they arrange themselves into separate
orbits called shells, each at a different distance from the nucleus and each with
its own energy level. Shells are numbered outwards from the nucleus, or lettered
K, L, M, N and so on, and each has a maximum population.

| Shell letter | Shell number | Maximum electrons |
|---|---|---|
| K | 1 | 2 |
| L | 2 | 8 |
| M | 3 | 18 |
| N | 4 | 32 |

Shells fill from the inside out: fill K, then L, then M, then N. So copper's 29
electrons sit as 2 in K (full), 8 in L (full), 18 in M (full) and **1 lonely
electron in N**. Add those up: 2 + 8 + 18 + 1 = 29. That single outer electron is
the whole reason copper is a superb conductor.

The closer a shell is to the nucleus, the more tightly its electrons are held and
the more external energy it takes to shift them. Electrons far out have a weak
grip on the nucleus and need very little energy to be knocked loose.

## Valence electrons and free electrons

The outermost occupied shell is the **valence shell** and its occupants are
**valence electrons**. The number of valence electrons decides almost everything
electrical about the material:

- one valence electron — the atom lets it go readily and just as readily accepts one from a neighbour
- a full valence shell — the atom neither gives nor takes, so charge cannot move

When an outer electron is knocked out of its orbit by an external force it
becomes a **free electron**, leaving a vacancy that another electron can drop
into. The force that frees it is usually an electromotive force (a voltage)
applied across the material, but friction will do it too. The general movement of
free electrons through a material is called **electron flow**, or **drift**, and
that movement of charge is exactly what we call electric current.

Drift itself is slow — individual electrons crawl along a conductor at
millimetres per second. What travels near the speed of light is the *push*. Think
of a garden hose already full of water: open the tap and water comes out the far
end instantly, even though any single molecule takes ages to make the trip.

## Ions

If an external force strips an electron from an atom, or forces an extra one on
to it, the atom is no longer balanced and now carries a net charge. That process
is **ionisation** and the charged atom is an **ion**.

- lose an electron and protons outnumber electrons — a **positive ion**
- gain an electron and electrons outnumber protons — a **negative ion**

Every atom can be ionised. Ionisation is behind static charge, behind battery
chemistry, behind arcing in air and behind the operation of a fluorescent lamp.

## Conductors, insulators and semiconductors

Materials sort into three electrical families based on that valence count.

| Family | Valence electrons | Behaviour | Typical materials |
|---|---|---|---|
| Conductor | 1 to 3 | Plenty of free electrons; current flows easily | Silver, copper, gold, aluminium, brass, steel |
| Semiconductor | 4 | Neither, until you modify or energise it | Silicon, germanium |
| Insulator | 5 to 8 (or full) | Almost no free electrons; opposes current flow | PVC, XLPE, rubber, glass, porcelain, mica, dry air |

**Conductors.** Copper is the trade default because it combines low resistivity
with good mechanical strength and easy termination. Its resistivity is about
1.72 × 10 to the power of minus 8 ohm metres; silver is slightly better but the
price rules it out for cable. Aluminium (about 2.83 × 10 to the power of minus 8
ohm metres) is roughly 60 per cent as conductive as copper but much lighter and
cheaper, which is why it dominates overhead lines and large mains. Aluminium
grows an insulating oxide film almost instantly in air, so its terminations need
the correct lugs, compound and torque or they run hot.

**Insulators.** An insulator does not refuse current absolutely — it refuses
until the voltage across it is high enough to tear electrons out of their shells.
That point is the material's dielectric strength; dry air, for instance, breaks
down at roughly 3 kV per millimetre, which is what an arc across a gap actually
is. Ageing, heat, moisture and mechanical damage all lower it, which is why
insulation resistance testing is a standard part of verifying an installation.

**Semiconductors.** With four valence electrons, silicon sits exactly halfway.
Left pure it conducts poorly, but deliberately adding minute amounts of another
element — doping — creates n-type material (spare electrons) or p-type material
(spare vacancies, called holes). Join the two and you have a junction, which is
the basis of diodes, transistors, LEDs, solar cells and every variable-speed
drive in a modern plant room.

>! Insulation is a consumable, not a permanent property. Heat from overload,
>! sunlight, vibration, rodents and moisture all degrade it. AS/NZS 3000 requires
>! insulation resistance of a new low-voltage installation to be at least 1 MΩ
>! measured at 500 V d.c. A reading falling toward that figure is a warning, not
>! a pass mark to celebrate.

## What to remember

- Matter is made of molecules; molecules are made of atoms; atoms are protons (+), neutrons (neutral) and electrons (−)
- A neutral atom has equal protons and electrons; the atomic number is the proton count, and copper's is 29
- Shells fill 2, 8, 18, 32 from the nucleus outward; copper ends up with one valence electron
- Few valence electrons means a conductor; a full valence shell means an insulator; four means a semiconductor
- Gaining or losing an electron makes an ion — negative if it gained, positive if it lost
- Current is the drift of free electrons, and the push travels far faster than the electrons themselves
`,
        quiz: [
          {
            q: "A copper atom has 29 electrons. How are they distributed through its shells?",
            options: [
              "2, 8, 18 and 1 — the fourth shell holds a single valence electron",
              "8, 8, 8 and 5 — the shells share the electrons evenly",
              "18, 8, 2 and 1 — the largest shell is closest to the nucleus",
              "29 electrons all orbit together in a single outer shell",
            ],
            answer: 0,
            explain: "Shells fill from the nucleus outwards to their maximum of 2, 8, 18 and 32, so copper fills K, L and M and is left with one electron in N. That single loosely held valence electron is why copper conducts so well. The largest shells are the outer ones, not the inner ones, which rules out the reversed answer.",
          },
          {
            q: "An atom is described as a positive ion. What happened to it?",
            options: [
              "It gained a proton from a neighbouring atom",
              "It gained an electron, so electrons now outnumber protons",
              "It lost an electron, so protons now outnumber electrons",
              "It lost a neutron, unbalancing the nucleus",
            ],
            answer: 2,
            explain: "Ionisation involves electrons only — protons and neutrons stay in the nucleus. Losing an electron leaves more positive protons than negative electrons, so the atom reads positive. Gaining an electron would make it a negative ion, which is the tempting opposite.",
          },
          {
            q: "Why is a material with a completely full valence shell a good insulator?",
            options: [
              "Its atoms contain no electrons at all, so nothing can move",
              "Its atoms neither give up nor accept electrons easily, so there are almost no free electrons to drift",
              "Its nucleus is positively charged and repels current",
              "It has too many protons for current to pass",
            ],
            answer: 1,
            explain: "Conduction needs free electrons. A full valence shell is a stable arrangement, so the atom has no reason to release an electron or accept one, and drift cannot get started. The material still has plenty of electrons — they are simply locked in place, so the first option is wrong.",
          },
          {
            q: "A technician insists that electrons travel from the switchboard to the light at close to the speed of light. What is the accurate correction?",
            options: [
              "Electrons do travel at the speed of light in copper but slow down in aluminium",
              "Individual electrons drift only millimetres per second; it is the electrical push that propagates almost instantly",
              "Electrons do not move at all — only the voltage moves",
              "Electrons travel at the speed of light only in d.c. circuits",
            ],
            answer: 1,
            explain: "Drift velocity in a loaded conductor is on the order of millimetres per second, but the conductor is already packed with free electrons, so a push applied at one end produces movement at the other almost immediately. Saying electrons do not move at all is also wrong — their drift is precisely what current is.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "static-electricity",
        title: "Static electricity, charge and potential difference",
        minutes: 12,
        simple: "Rub two different materials together and one of them steals electrons from the other, leaving one side with too many and the other with too few. That imbalance sits there doing nothing until it gets a path to escape — then you feel the zap off the car door. The size of the imbalance between two objects is what we call potential difference, measured in volts.",
        refs: REFS_STATIC,
        content: `
Static electricity is the version of electricity people meet before they ever
pick up a multimeter: the crack off a car door, the pop when you pull off a
fleece, lightning across a summer sky. For an electrical worker it matters for
two very practical reasons. First, it is the cleanest demonstration of charge,
attraction and potential difference. Second, a static discharge you cannot even
feel will quietly destroy the electronics inside a variable-speed drive or an
inverter air-conditioner board.

## What "static" actually means

Static electricity is electrical energy that has gathered in one place, creating
an imbalance of charge inside a material or on its surface. The key word is
gathered. There is no continuous flow — the electrons are parked on the surface
and stay parked until something gives them a path away. The moment they get that
path, the charge discharges, often as a visible spark.

## Charging by friction

The Greeks noticed that amber rubbed with cloth would pick up feathers. Their
word for amber, *elektros*, is where our word electricity comes from. The same
effect appears when glass is rubbed with silk, or when ebonite (vulcanite) is
rubbed with fur or flannel.

What actually happens is a transfer of electrons out of the outermost orbits of
the surface atoms. Rub fur on an ebonite rod and electrons move from the fur on
to the rod:

- the rod now has more electrons than it should — it is **negatively charged**
- the fur has lost electrons — it is **positively charged**

Both surfaces are left full of ions, and those ions pull on the electrons of
neighbouring atoms as they try to get back to neutral. The charge stays put
because both materials are very poor conductors. On a copper rod held in your
hand the charge would leak away instantly.

By convention from these classic experiments, glass-like materials rubbed with
silk take a positive charge, and resinous materials such as ebonite rubbed with
fur take a negative charge.

## The rod experiments and the fundamental rule

Suspend a charged ebonite rod on a dry silk thread and bring a second,
identically charged ebonite rod near it: the suspended rod swings away — it is
**repelled**. Bring a glass rod that has been rubbed with silk near it instead
and the suspended rod swings toward it — **attracted**. Repeat the whole thing
with a suspended glass rod and you get the mirror image: glass repels glass, and
ebonite attracts glass.

Now hang an *uncharged* rod and bring either charged rod near it. It is attracted
to both. A neutral body has electrons free to shuffle to one end, so it always
gets pulled toward a charge of either sign.

Out of those three simple results comes the rule that runs through all of
electrical theory:

> **Like charges repel. Unlike charges attract. A neutral body is attracted by
> a charge of either polarity.**

## Electrostatic fields and electrical potential

Displaced electrons and their abandoned parent ions set up an electrostatic
field between them. The more electrons that have been displaced, the stronger
that field. A charged material is said to possess **electrical potential** —
literally, the potential to drive electron flow if it is ever given the chance.

Compare two bodies at different potentials and the gap between them is the
**potential difference**, or **pd**, measured in **volts**. Potential difference
is the electrical equivalent of a height difference in a water system: it is what
makes flow happen, and it is always a comparison between two points, never a
property of one point on its own.

Let electrons return from the negative body to the positive body and the
potential difference falls to zero. Both bodies are neutral again, equilibrium is
restored, and nothing more will happen.

## Partial charge and local equilibrium

In the real world, bodies rarely discharge to perfectly neutral. What they do is
share what they have until both sit at the same charge — **local equilibrium**.
Bring a body charged at plus 6 near a neutral one and they will not end at 0 and
plus 6; they will settle at plus 3 each.

That explains the double zap off a car. Driving through hot dry air charges the
body of the car. You touch it, and the first spark equalises the charge between
you and the car. But you are standing on the ground, so your share of the charge
promptly drains away into the earth. Touch the car a second time and there is a
fresh imbalance between the still-charged car and the now-discharged you, so you
get a second spark. Note the direction has reversed relative to what most people
assume — the second discharge goes from the vehicle to the person.

If the imbalance is only an electron or two, nothing happens at all. There is
just not enough potential difference to force a transfer.

## Making static on purpose

Electrostatic generators produce very high voltages at tiny currents and store
the charge on a surface or in Leyden jars, then release it abruptly.

| Machine | How it works | Typical use |
|---|---|---|
| Wimshurst machine | Two insulating plates counter-rotate; contacts collect the charge | Demonstration, laboratory work |
| Van de Graaff generator | A motor-driven rubber belt rubs a conducting comb and carries charge to a hollow sphere | High-voltage effects, testing insulators |

Industry puts the same physics to work:

- **Dust precipitation.** Flue dust is driven through a charged grid so the particles pick up a negative charge, then past a positively charged collector that attracts and holds them. The collected mass is periodically shaken down into a hopper instead of going up the stack.
- **Electrostatic spray painting.** The workpiece is made negative with respect to earth and the paint droplets are attracted to it. The coating wraps around edges and into recesses that a spray gun could never reach directly, and very little paint is wasted.

>! Electrostatic industrial plant typically runs at around 50 kV. Isolate,
>! prove dead and physically discharge the electrodes before opening a
>! precipitator or spray booth — the capacitance of the plant can hold a lethal
>! charge long after the supply is switched off.

>! Electrostatic discharge destroys electronics silently. A discharge too small
>! for you to feel can still puncture the gate of a semiconductor in an inverter
>! or drive board. Wear an earthed wrist strap, keep boards in their antistatic
>! bags until the moment of fitting, and touch the earthed chassis before you
>! touch the board.

## What to remember

- Static electricity is stored charge with no current flow; it lasts until it is given a discharge path
- Friction transfers electrons: the material that gains them goes negative, the one that loses them goes positive
- Like charges repel, unlike charges attract, and a neutral body is attracted by either
- Potential difference is the charge imbalance between two points, measured in volts
- Real bodies equalise to a shared charge — local equilibrium — not to zero
- Static that you cannot feel can still kill an electronic board
`,
        quiz: [
          {
            q: "An ebonite rod is rubbed with fur. What is the state of the fur afterwards?",
            options: [
              "Negatively charged, because friction always adds electrons",
              "Positively charged, because it has given up electrons to the rod",
              "Neutral, because only the rod can hold a charge",
              "Negatively charged, because fur is a conductor",
            ],
            answer: 1,
            explain: "Electrons move from the fur to the ebonite, so the rod goes negative and the fur, now short of electrons, goes positive. Friction does not create charge — it only relocates it, so one side must go positive whenever the other goes negative.",
          },
          {
            q: "An uncharged metal rod is suspended, and a positively charged glass rod is brought near it. What happens?",
            options: [
              "Nothing, because an uncharged body cannot respond to a charge",
              "It is repelled, because unlike charges repel",
              "It is attracted, because a neutral body is attracted by a charge of either polarity",
              "It is attracted only if it was previously charged negative",
            ],
            answer: 2,
            explain: "The electrons in a neutral body are free to shift toward or away from the approaching charge, leaving the near face oppositely charged, so attraction results whichever polarity is presented. That is exactly why the neutral-rod experiment cannot be used to identify the sign of a charge.",
          },
          {
            q: "Why do you often get a second spark when you touch a car a second time on a hot dry day?",
            options: [
              "The car recharges itself from the air between the two touches",
              "The first spark equalised you with the car, then your charge drained to earth, leaving a fresh imbalance",
              "Static always discharges in pairs",
              "The second spark travels from you to the car, unlike the first",
            ],
            answer: 1,
            explain: "Charged bodies equalise rather than fully neutralise, so after the first spark you and the car sit at the same potential. Standing on the ground, you then lose your share to earth, so a new potential difference exists between the still-charged car and you. The car has not gained any new charge in the meantime.",
          },
          {
            q: "In electrostatic spray painting, why does paint reach the sides and recesses of the object?",
            options: [
              "The high air pressure of the gun forces it around the object",
              "The charged paint particles are attracted to the oppositely charged workpiece, so they curve toward every surface of it",
              "The paint is heated so it flows around corners",
              "The object is rotated at high speed during spraying",
            ],
            answer: 1,
            explain: "The workpiece is held at a potential opposite to the charged droplets, and electrostatic attraction acts in every direction toward the object, not just along the line the gun is pointed. Air pressure alone would leave shadowed areas uncoated, which is the whole problem the technique solves.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "current-charge-coulomb",
        title: "Current electricity, charge and the coulomb",
        minutes: 13,
        simple: "Static electricity is a one-off zap. Useful electricity is a steady stream, and for that you need three things: something to keep pushing (a supply), a path for the electrons (wires) and something for them to do work in (a load). We count the electrons in bundles called coulombs, and one amp simply means one coulomb passing every second.",
        refs: REFS_CURRENT,
        content: `
A static discharge proves electricity exists but is useless for running anything:
the flow stops the instant the charge runs out. Turning that one-off spark into
something that will run a coolroom for ten years means solving three problems at
once, and those three problems are effectively the definition of an electrical
circuit.

## From static to current

Electricity is the movement of electrons from a place with a surplus of them to a
place with a shortage — negative to positive. A big electrostatic charge can sit
on a surface indefinitely without any flow at all. Flow only begins when two
conditions are satisfied together:

1. a **conducting path** exists between the two bodies, and
2. a **sufficient potential difference** exists across that path.

The force doing the pushing is **electromotive force (EMF)**, and its strength is
measured as a potential difference in volts between two points. Join two points
of different potential with a conductor and electrons are driven from the surplus
end toward the deficient (positive) end.

## The three things a working circuit needs

| Requirement | What it does | Examples |
|---|---|---|
| Source | Maintains a continuous EMF so the flow does not die away | Alternator, battery, solar array, generator |
| Path | Guides the energy where it is wanted and stops it going where it is not | Copper conductors, with insulation confining the flow |
| Load | Converts the electrical energy into another useful form | Motor, element, lamp, compressor, solenoid |

Miss any one of the three and nothing happens. Miss the load and you have a short
circuit — a path with almost nothing to limit the current — which is why
protection devices exist. Lose the path and you have an open circuit. Lose the
source and everything stops.

## Charge and the coulomb

The charge on one electron is far too small to work with: about 1.602 × 10 to the
power of minus 19 coulombs. So charge is counted in bundles.

The **coulomb (C)** is the unit of electrical charge, symbol **Q**. One coulomb
is the amount of charge that passes a point in a circuit when a current of one
amp is maintained for one second — and that works out to about 6.24 × 10 to the
power of 18 electrons.

Check that the two definitions agree: divide 1 by 1.602 × 10 to the power of
minus 19 and you get 6.24 × 10 to the power of 18. Those two numbers are simply
each other upside down.

## Current and the ampere

**Electric current**, symbol **I**, is the rate at which charge passes a point.
Its unit is the **ampere (A)**, one of the seven SI base units. One ampere is one
coulomb per second.

That gives the relationship connecting charge, current and time:

**Q = I × t**

where Q is charge in coulombs, I is current in amps, and t is time in seconds.
Time in electrical formulas is always in seconds unless you are explicitly told
otherwise.

### Worked example 1 — finding charge

A defrost heater draws 6 A for 5 minutes. How much charge passes through it?

- First convert the time: t = 5 × 60 = 300 s
- Formula: Q = I × t
- Substitute: Q = 6 × 300
- **Q = 1800 C**

And how many electrons is that? Multiply by the electrons per coulomb:

- 1800 × 6.24 × 10 to the power of 18 = **1.12 × 10 to the power of 22 electrons**

### Worked example 2 — finding current

A charge of 90 coulombs passes through a contactor coil in 30 seconds. What is
the current?

- Rearrange Q = I × t to make I the subject: I = Q ÷ t
- Substitute: I = 90 ÷ 30
- **I = 3 A**

### Worked example 3 — finding time

How long must a 8 A current flow to move 1200 coulombs of charge?

- Rearrange to make t the subject: t = Q ÷ I
- Substitute: t = 1200 ÷ 8
- **t = 150 s**, which is 2 minutes 30 seconds

Notice all three examples used the same formula. Being able to shuffle it into
whichever form you need is a skill worth practising — it is covered properly in
the calculations lesson at the end of this module.

## Electron flow versus conventional current flow

Here is the trade's oldest inconsistency, and you need to be comfortable with it.

- **Electron flow** is what physically happens: electrons move from negative to positive.
- **Conventional current flow** is what we draw and calculate with: current is taken as flowing from positive to negative.

Conventional flow comes from Benjamin Franklin, who in 1752 guessed the direction
before anyone knew electrons existed. He guessed wrong, but by the time that was
established the convention was embedded in every circuit diagram, every
instrument and every textbook, and it is still what the electrical trades use.

Does the mismatch matter? For practical circuit work, no. Every calculation of
current, voltage, power and protection comes out identically either way. The only
rule is to pick one convention and stay with it inside a given piece of work.
Some areas — semiconductor theory and electron-tube work in particular — are
easier to follow using electron flow, which is why both survive.

## Current in the field

- Current is measured with an ammeter **in series** with the load, or far more commonly with a **clamp meter** around a single conductor
- A clamp around a whole flex reads zero, because the active and neutral currents are equal and opposite and cancel — clamp one core only
- Nameplate full-load current on a motor is the figure you compare a measured running current against; a locked rotor draws many times that

>! Never break a live circuit to insert an ammeter in series. Use a clamp meter
>! on a single conductor instead. Low-voltage work in Australia is restricted to
>! licensed electrical workers — an ARCtick refrigerant handling licence does not
>! authorise electrical work.

## What to remember

- Useful electricity needs a source, a path and a load
- Charge Q is measured in coulombs; one coulomb is about 6.24 × 10 to the power of 18 electrons
- One ampere is one coulomb per second
- Q = I × t, and it rearranges to I = Q ÷ t and t = Q ÷ I, with time in seconds
- Electron flow is negative to positive; conventional current is positive to negative; the arithmetic is unaffected
`,
        quiz: [
          {
            q: "A contactor coil carries 0.5 A for 4 minutes. How much charge has passed through it?",
            options: [
              "2 C",
              "120 C",
              "480 C",
              "8 C",
            ],
            answer: 1,
            explain: "Q = I × t with time in seconds: 4 minutes is 240 s, so Q = 0.5 × 240 = 120 C. The common trap is leaving the time in minutes, which gives 2 C — always convert to seconds before substituting.",
          },
          {
            q: "Which statement about electron flow and conventional current flow is correct?",
            options: [
              "Conventional flow is correct and electron flow is a myth",
              "Electron flow is negative to positive; conventional flow is positive to negative; circuit calculations come out the same either way",
              "The two conventions give different answers, so you must always use electron flow",
              "Conventional flow applies to a.c. and electron flow applies to d.c.",
            ],
            answer: 1,
            explain: "Electrons genuinely move negative to positive, but Franklin's positive-to-negative convention was fixed in the drawings and instruments long before that was known. Both give identical results provided you do not mix them mid-problem, and neither is tied to a.c. or d.c.",
          },
          {
            q: "A circuit has a healthy supply and sound wiring, but no load is connected between active and neutral — instead the two conductors touch each other. What is this?",
            options: [
              "An open circuit, so no current flows",
              "A normal circuit, since a source and a path are present",
              "A short circuit — a path with almost nothing to limit the current, which is why protection is fitted",
              "A static discharge",
            ],
            answer: 2,
            explain: "A working circuit needs a source, a path and a load; the load is what limits the current to a sensible value. Remove it and the current is limited only by the very low resistance of the conductors, so it rises until protection operates. An open circuit is the opposite fault — a break in the path.",
          },
          {
            q: "Why does clamping a meter around a complete two-core flex read approximately zero?",
            options: [
              "The flex is insulated, which blocks the meter",
              "The active and neutral currents are equal and in opposite directions, so their magnetic effects cancel",
              "Clamp meters only work on d.c.",
              "The current is too small to detect through a sheath",
            ],
            answer: 1,
            explain: "A clamp meter responds to the net current enclosed by the jaws. With both conductors inside, the go and return currents cancel and the reading collapses to near zero — which is also the principle an RCD uses. You must clamp one conductor only to read load current.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "emf-voltage-resistance",
        title: "EMF, voltage, resistance and conductance",
        minutes: 13,
        simple: "Voltage is the electrical push — the difference in energy between two points that makes electrons move. Six different things can create that push, from a battery's chemistry to a spinning generator to sunlight on a solar cell. Resistance is what fights the push, and it turns electrical energy into heat as it does.",
        refs: REFS_EMF,
        content: `
Once you accept that current is drifting electrons, two questions follow
immediately: what pushes them, and what holds them back. The answers are
electromotive force and resistance, and every measurement you will ever take with
a multimeter is one of those two or the current that results from them.

## Electromotive force

**Electromotive force (EMF)** is the electrical pressure between two points that
causes current to flow. It is the force that moves electrons, and it is measured
in **volts (V)**, named after Alessandro Volta.

The symbol for EMF is strictly **E**, but because E is also the standard symbol
for energy, the trade generally writes EMF in full, or uses V where there is any
risk of confusion.

There is a fine distinction worth knowing:

- **EMF** is what a *source* produces — the pressure it can generate with nothing connected
- **Potential difference (voltage)** is what actually appears *across two points* in a circuit, such as the terminals of a load

They are not always the same number. A battery with an EMF of 12 V may deliver
only 11.4 V at its terminals under heavy load, because some of the EMF is used up
pushing current through the battery's own internal resistance. That gap is the
first thing to think about when a healthy-looking battery collapses under load.

## The volt, defined two ways

When electrons are stored, the quantity of charge is measured in coulombs and the
energy needed to store them is measured in joules. Voltage is the ratio of the
two — the energy per unit of charge:

**V = W ÷ Q** (joules per coulomb)

So one volt means one joule of energy for every coulomb of charge moved. The more
energy it takes to move a given quantity of charge, the higher the voltage.

The trade also uses a power-based definition that says the same thing from the
other direction: **one volt is the EMF that causes one watt to be dissipated in a
circuit when one amp is flowing.**

### Worked example — volts from joules and coulombs

A source expends 24 joules of energy moving 2 coulombs of charge through a
circuit. What is the potential difference?

- Formula: V = W ÷ Q
- Substitute: V = 24 ÷ 2
- **V = 12 V**

## The six sources of EMF

Every practical supply on earth generates its EMF by one of six mechanisms.

| Source of EMF | How the EMF is produced | Where you meet it |
|---|---|---|
| Magnetism | A conductor is moved through a magnetic field (electromagnetic induction) | Alternators, generators, transformers — over 99 per cent of grid supply |
| Chemical | A chemical reaction between electrodes and an electrolyte transfers electrons | Batteries, cells, fuel cells |
| Light | Photons free charge carriers at a semiconductor junction | Solar PV arrays, photodiodes, light sensors |
| Heat | Two dissimilar metals joined at a heated junction develop a small EMF (Seebeck effect) | Thermocouples in service thermometers, flame-failure devices |
| Pressure | Squeezing certain crystals displaces charge (piezoelectric effect) | Gas igniters, pressure transducers, ultrasonic sensors |
| Friction | Rubbing dissimilar materials transfers electrons | Static electricity, Van de Graaff generators |

Magnetism is by far the most important commercially — Faraday's induction is what
runs the grid. Chemical sources dominate portable and standby power. The other
four are mostly used for *measurement and sensing* rather than power: a type K
thermocouple, for example, generates only tens of microvolts per degree, which is
plenty for an instrument and useless for a load.

## Resistance

As electrons drift between the atoms of a conductor, some of them collide with
ionised atoms and surrender energy, which leaves the material as heat (and, if
enough energy is released, as light). The source then has to supply more energy
to free further electrons and keep the flow going. Different materials need
different amounts of energy to do this, and that difference is what we call
resistance.

**Resistance** is the property that opposes current flow. Its symbol is **R** and
its unit is the **ohm**, written with the Greek letter omega, Ω. One ohm is the
resistance that allows one amp to flow under a pressure of one volt.

Four things fix the resistance of a conductor:

1. **Material** — its resistivity, symbol ρ (rho), in ohm metres
2. **Length** — resistance is directly proportional to length; double the run, double the resistance
3. **Cross-sectional area** — resistance is inversely proportional to area; double the csa, halve the resistance
4. **Temperature** — in metals, resistance rises as temperature rises; in carbon, semiconductors and most insulators it falls

That first three combine into:

**R = ρ × l ÷ A**

### Worked example — resistance of a cable run

Find the resistance of a 100 m length of 2.5 mm² copper conductor. Take the
resistivity of copper as 1.72 × 10 to the power of minus 8 ohm metres.

- Convert the area to square metres: 2.5 mm² = 2.5 × 10 to the power of minus 6 m²
- Formula: R = ρ × l ÷ A
- Substitute: R = (1.72 × 10 to the power of minus 8 × 100) ÷ (2.5 × 10 to the power of minus 6)
- Numerator: 1.72 × 10 to the power of minus 6
- Divide: R = 1.72 ÷ 2.5 = **0.688 Ω**

That is one conductor. A two-way circuit has active and neutral, so the loop
resistance is about 1.38 Ω — which is exactly why long sub-circuits suffer
voltage drop and why cable size is calculated, not guessed.

## Conductance

Conductance is simply resistance viewed from the other end: how easily a material
passes current rather than how hard it opposes it. Its symbol is **G** and its
unit is the **siemens (S)**.

**G = 1 ÷ R**

### Worked example — conductance

A heating element measures 50 Ω. What is its conductance?

- Formula: G = 1 ÷ R
- Substitute: G = 1 ÷ 50
- **G = 0.02 S**, which is more neatly written as **20 mS**

And the cable from the previous example, at 0.688 Ω:

- G = 1 ÷ 0.688 = **1.45 S**

Conductance is handy for parallel circuits, where conductances simply add, and it
is the unit your insulation tester is implicitly working against when it reports
resistance in megohms.

>! Resistance measurements are only valid on a de-energised, isolated and proven
>! dead circuit. Connecting an ohmmeter or insulation tester to a live circuit
>! will at best destroy the instrument and at worst injure you. Prove the tester
>! on a known source before and after the test.

## On the job

- Measure supply voltage at the load, not at the board — the difference is the volt drop, and AS/NZS 3000 limits total drop to 5 per cent of nominal
- A connection that reads a few ohms where it should read milliohms is a loose or corroded termination, and it will run hot
- Motor windings should read low and *balanced* between phases; an imbalance points to a partially shorted winding
- Insulation resistance should read in megohms; a reading falling toward 1 MΩ means moisture or degraded insulation
- Terminal voltage sagging heavily under load points to internal resistance in the source or a high-resistance joint upstream
`,
        quiz: [
          {
            q: "A 12 V battery reads 12.6 V off load but only 10.8 V when the starter is engaged. What does that indicate?",
            options: [
              "The starter motor is faulty and drawing no current",
              "Some of the EMF is being dropped across the battery's internal resistance under heavy load",
              "The battery voltage rating is wrong",
              "The meter is misreading because the circuit is now a.c.",
            ],
            answer: 1,
            explain: "EMF is what the source generates; terminal potential difference is what remains after the current has been pushed through the source's own internal resistance. A heavy load exaggerates that loss, so a sagging terminal voltage under load is the classic sign of a tired cell or a high-resistance connection.",
          },
          {
            q: "A 50 m run of 1.5 mm² copper has some resistance R. What happens if it is replaced with 100 m of the same cable?",
            options: [
              "Resistance halves, because the current has further to spread",
              "Resistance doubles, because resistance is directly proportional to length",
              "Resistance stays the same, because the material has not changed",
              "Resistance quadruples, because length has a squared effect",
            ],
            answer: 1,
            explain: "In R = ρl ÷ A, resistance is directly proportional to length and inversely proportional to cross-sectional area, so doubling the run doubles the resistance. Length has a straight linear effect, not a squared one; it is the current that has a squared effect on power loss.",
          },
          {
            q: "A thermocouple in a service thermometer is an example of which source of EMF?",
            options: [
              "Chemical",
              "Pressure (piezoelectric)",
              "Heat (thermoelectric)",
              "Friction",
            ],
            answer: 2,
            explain: "Two dissimilar metals joined at a heated junction develop a small EMF proportional to temperature — the Seebeck effect. The output is in the microvolt-per-degree range, which is why thermoelectric sources are used for measurement rather than for supplying loads. A piezoelectric source needs mechanical pressure, not heat.",
          },
          {
            q: "An element of 25 Ω is replaced with one of 100 Ω. What has happened to its conductance?",
            options: [
              "It has risen from 0.04 S to 0.01 S",
              "It has fallen from 0.04 S to 0.01 S",
              "It is unchanged, because conductance depends only on voltage",
              "It has fallen from 25 S to 100 S",
            ],
            answer: 1,
            explain: "Conductance is the reciprocal of resistance: 1 ÷ 25 = 0.04 S and 1 ÷ 100 = 0.01 S. More resistance always means less conductance, so a rise in ohms must show as a fall in siemens. The two quantities are not the same number expressed differently.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "generating-electricity",
        title: "Generating electricity: renewable and non-renewable sources",
        minutes: 12,
        simple: "Nearly all electricity is made the same way: something spins a magnet inside coils of wire. What differs is what does the spinning — burning coal to make steam, falling water, wind, or hot gas. Solar panels are the odd one out: they have no moving parts and turn sunlight straight into electricity.",
        refs: REFS_GEN,
        content: `
Electricity is not a fuel, it is a carrier. Something else — chemical energy in
coal, gravitational energy in a dam, sunlight — has to be converted into it. For
most of the last century that conversion has been dominated by one principle, and
knowing which conversion is in front of you tells you a great deal about how the
plant behaves, how fast it can start and what can go wrong with it.

## Renewable and non-renewable

- A **non-renewable** source will eventually be used up. Coal, oil, natural gas and uranium are non-renewable.
- A **renewable** source is replenished naturally, or draws on something that will not run out within our lifetimes. Solar, wind, hydro, bio-fuel and geothermal are renewable.

Nuclear sits awkwardly in between: it is non-renewable, but it emits little or no
carbon dioxide, so it is sometimes called clean. A small number of severe
accidents, plus the unresolved question of long-term waste storage, has made it
publicly unpopular, and fission plants are being decommissioned in many
countries. Australia has abundant renewable resources, so nuclear generation here
remains unlikely in the foreseeable future.

## The one principle behind nearly all of it

Michael Faraday's experiments with electromagnetic induction led directly to
rotating machines. The early machines — called **dynamos** — were open-framed and
crude by modern standards, yet the fundamentals have barely changed: an armature
rotates within a magnetic field and an EMF is induced in its conductors.

Nikola Tesla recognised that alternating current had decisive advantages over
direct current for both generating and transmitting power. The changeover took
years and the two systems ran side by side for a long time, but a.c. won. A
generator that produces alternating current is called an **alternator**, and
essentially all grid generation today is by alternator.

What changed over the century is not the electrical principle but the **prime
mover** — the machine that supplies the rotation.

## Non-renewable generation

**Thermal steam turbines.** Fuel is burnt to boil water; the steam drives a
turbine; the turbine drives an alternator. Reciprocating steam engines were slow
and inefficient and gave way to steam turbines, which behave more like a jet
engine, with hot gas spinning stages of blades at high speed. This is still the
most common generation method in mainland Australia. Coal-fired stations are
sited next to the coalfield and near large volumes of cooling water, because
moving coal and condensing steam are the two big logistical costs.

**Nuclear.** A reactor replaces the furnace, but everything downstream is the
same: steam, turbine, alternator. It offers high output, high reliability and no
combustion greenhouse gases. Reactors already power stations, ships and
submarines around the world; public concern centres on safety and waste storage.

**Engine-driven alternators.** In remote areas, diesel or gas engines drive
alternators directly — a large version of a portable generator set. It is an
expensive way to make electricity, so it is used where there is no water, coal or
gas to raise steam economically. Many small communities run diesel sets during
peak periods and battery storage at other times.

**Gas turbine engines.** Effectively a jet engine driving a shaft. Gas turbines
start fast and can bring an alternator online in minutes, which makes them ideal
for peak-demand and emergency standby duty. Being high-speed machines they drive
high-speed alternators efficiently, with good speed regulation.

**Electrochemical sources.** Most are batteries of cells. Secondary
(rechargeable) cells store energy from other sources when it is plentiful and
give it back when those sources drop out — a wind generator charges the bank
while it blows and the bank carries the load when the wind dies.

A less common electrochemical route is chemical bonding, in which elements such
as hydrogen, carbon and oxygen combine into compounds like water, methane or
carbon dioxide, with ions and electrons transferring and energy being released or
absorbed. This is the basis of the **fuel cell**. One common design has two
chambers with porous electrodes separated by an electrolyte; hydrogen and oxygen
are supplied and, with a catalyst, react to produce ions, free electrons and
water as a by-product. Fuel cells powered the moon missions and many later
spacecraft: high efficiency, no moving parts, no noxious exhaust, and in some
designs drinkable water. Their drawback is the extensive and expensive auxiliary
plant some systems require.

## Renewable generation

**Hydroelectric.** Water is stored in the highest practical reservoir and the
power station is built as low as possible, to extract the maximum energy from the
fall. The water drives low-speed turbines — vastly more efficient descendants of
the waterwheel. Output is controllable almost instantly, which makes hydro
valuable for following demand. The Snowy Mountains Scheme in New South Wales,
including the Murray 1 station, is the best-known Australian example.

**Geothermal.** Italy and New Zealand have generated from naturally emerging
steam for many years. The steam is cleaned and fed to low-pressure turbines
driving alternators. Because the available temperature and pressure are
relatively low, large steam volumes are needed, and fine solids or wet steam must
be kept away from the blades or they erode rapidly.

**Tidal.** Propellers driven directly by water moving in and out of a channel, or
seawater collected behind a barrage and released through hydro turbines. Output
peaks at maximum tidal flow and falls to nothing at the top and bottom of the
tide. France and the United Kingdom have pioneered this, with tidal ranges of
6 m to 9 m. Parts of north-west Australia have a comparable range, but the
population density is too low to justify the plant at present.

**Photoelectric (solar-electric).** A solar cell is essentially a large
semiconductor diode: light striking the junction is converted directly into
electrical energy. Cells are assembled into panels and panels into arrays. They
have no moving parts and an effectively unlimited life, but output drops if the
glass is not kept clean.

At midday with the sun at its zenith, solar energy arriving at the earth's
surface is around **1000 W/m²**. Commercial panels are typically 15 to 25 per
cent efficient, so they deliver roughly 150 to 250 W for every square metre of
array. Cells above 40 per cent efficiency exist but are complex and cost
prohibitive.

### Worked example — sizing a rooftop array

A roof carries 18 m² of panels rated at 20 per cent efficiency. What output
should they make at midday, and what daily energy at 4.5 peak-sun-hours?

- Incident power: 18 m² × 1000 W/m² = 18 000 W
- Output: P = 18 000 × 0.20 = 3600 W = **3.6 kW**
- Daily energy: W = P × t = 3.6 kW × 4.5 h = **16.2 kWh per day**

## Comparing the options

| Source | Prime mover | Start-up | Output control |
|---|---|---|---|
| Coal or gas steam turbine | Steam turbine | Hours | Slow to change |
| Nuclear | Steam turbine | Very slow | Best run at steady output |
| Gas turbine | Jet-type turbine | Minutes | Fast, ideal for peaks |
| Diesel or gas engine | Reciprocating engine | Minutes | Fast, small scale |
| Hydro | Water turbine | Minutes | Very fast and precise |
| Solar PV | None — direct conversion | Instant with sunlight | Follows the sun, not demand |
| Wind | Wind turbine | Instant with wind | Follows the wind, not demand |
| Fuel cell | None — direct conversion | Fast | Follows fuel supply |

The pattern that matters: the fuel-burning plant is efficient but slow, the
renewables are clean but not dispatchable, and the fast-responding plant (gas
turbine, hydro, battery) is what fills the gap between them.

>! A solar array cannot be switched off. Whenever there is light on the panels
>! the d.c. strings are live, often at several hundred volts, even with the
>! inverter and the main switch off. Isolate at both ends, follow AS/NZS 5033,
>! and treat every string cable as live until you have proved otherwise.

## What to remember

- Non-renewable sources deplete; renewable sources replenish
- Almost all commercial generation is electromagnetic — an armature turning in a magnetic field, driven by some prime mover
- Steam turbines, mostly coal-fired, still supply the bulk of mainland Australian generation; gas turbines and hydro provide the fast response
- Fuel cells and solar cells convert directly, with no rotating machinery
- Full midday solar irradiance is about 1000 W/m², and a 15 to 25 per cent panel turns that into roughly 150 to 250 W/m²
`,
        quiz: [
          {
            q: "What do coal, nuclear, gas-turbine and hydro generation all have in common?",
            options: [
              "They all burn a fuel to raise steam",
              "They all use a prime mover to spin an alternator, generating by electromagnetic induction",
              "They all convert energy directly to electricity with no moving parts",
              "They are all classified as renewable",
            ],
            answer: 1,
            explain: "The prime mover differs — furnace and boiler, reactor and boiler, combusting gas, falling water — but every one of them ends in a rotating machine inducing an EMF in conductors moving through a magnetic field. Hydro raises no steam and is renewable, so the other options each fail for at least one of the four.",
          },
          {
            q: "A network operator needs plant that can be brought online within minutes to cover a demand peak. Which is the most suitable?",
            options: [
              "A coal-fired steam turbine station",
              "A nuclear station",
              "A gas turbine or hydro station",
              "A rooftop solar array",
            ],
            answer: 2,
            explain: "Gas turbines run up and synchronise in minutes, and hydro can go from standstill to full output almost immediately, which is exactly why both are used for peaking and standby duty. Coal and nuclear plant take hours and prefer steady output, and solar produces only what the sun offers at that moment.",
          },
          {
            q: "A 24 m² array of 15 per cent efficient panels sits in full midday sun at 1000 W/m². What is the approximate output?",
            options: [
              "24 kW",
              "3.6 kW",
              "360 W",
              "1.5 kW",
            ],
            answer: 1,
            explain: "Incident power is 24 × 1000 = 24 000 W, and 15 per cent of that is 3600 W, or 3.6 kW. The 24 kW answer forgets the efficiency entirely — that figure is the sunlight landing on the roof, not what the panels can convert.",
          },
          {
            q: "Why is a fuel cell attractive for spacecraft in particular?",
            options: [
              "It generates high current at very low cost",
              "It has no moving parts, gives off no noxious fumes and can produce drinkable water as a by-product",
              "It runs indefinitely without any fuel supply",
              "It stores energy from other sources like a rechargeable battery",
            ],
            answer: 1,
            explain: "Hydrogen and oxygen react across an electrolyte to produce electricity and water, so the crew get power and drinking water from the same device with nothing to wear out mechanically. It still consumes fuel, and unlike a secondary cell it generates rather than stores — that is the distinction the other options blur.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "transmission-distribution",
        title: "Getting power to the load: transmission and distribution",
        minutes: 12,
        simple: "Power stations are a long way from the houses they supply, and pushing a big current down a long wire wastes energy as heat. The trick is transformers: push the voltage way up for the long trip so the current is small, then step it back down near the customer. That is why the wires overhead run at hundreds of thousands of volts and your power point runs at 230.",
        refs: REFS_TX,
        content: `
Generation is only half the problem. The energy has to reach a supermarket in a
suburb or a pump on a farm, sometimes hundreds of kilometres away, without losing
most of itself as heat on the way. The answer the industry arrived at — high
voltage a.c. and transformers — was fought over bitterly before it was settled,
and understanding why it won explains the voltages you see on every pole and
every substation fence.

## The early d.c. systems and why they failed

The first distribution systems supplied direct current. The simplest was two
conductors: current out from the generator on one, back on the other. Because
every conductor has resistance, the voltage sagged further and further the longer
the run — customers close to the station got a healthy supply and those at the
end got a dim glow.

Street lighting made it worse. To keep conductor size and length down, some towns
wired their street lamps **in series**. That needed only one conductor, run up one
street and back down another, but the circuit voltage had to be high enough to
light every lamp in the chain, and it had two crippling faults: one lamp failing
blacked out the entire block, and adding a lamp meant raising the voltage again to
cover the extra volt drop.

Some systems used the ground itself as the return path. That produced serious
side effects — buried metal pipes corroded early, and unwanted voltages appeared
between things like iron fences and pipework entering the ground. The two-wire
d.c. series system had to go.

## The current war

The late nineteenth century race was really a race to replace gas and oil
lighting. Thomas Edison got there first on the lamp, producing a workable
incandescent globe for indoor use in 1878, and built a distribution system to go
with it. But his was direct current: losses forced him to place many small
stations close to customers and to use large, expensive distribution conductors.
It worked for dense city blocks and nowhere else.

Nikola Tesla, a Serbian-American engineer who had previously worked for Edison,
developed a.c. power systems and later the a.c. induction motor. His work let
Edison's competitor George Westinghouse build a system that used high voltage and
a network of transformers to step it back down for consumers — long distances,
thinner and cheaper wire, far lower losses. In 1892 the argument was effectively
settled when Edison lost control of Edison General Electric to its stockholders;
the company became part of the new General Electric later that year.

## Why high voltage wins

Power delivered is voltage times current, so the same power can be sent as a big
current at low voltage or a small current at high voltage. But the heat wasted in
the line depends on the **square** of the current — the loss is I² × R. Halve the
current and you quarter the loss.

### Worked example — the same 100 kW, two ways

Take a line whose total resistance is 0.5 Ω and send 100 kW along it.

**At 415 V:**

- Current: I = P ÷ V = 100 000 ÷ 415 = 240.96 A
- Line loss: P = I² × R = 240.96² × 0.5 = 58 062 × 0.5
- **Loss = 29 031 W, about 29 kW — 29 per cent of everything sent**

**At 11 kV:**

- Current: I = P ÷ V = 100 000 ÷ 11 000 = 9.09 A
- Line loss: P = I² × R = 9.09² × 0.5 = 82.6 × 0.5
- **Loss = 41.3 W — about 0.04 per cent**

Raising the voltage by a factor of 26.5 cut the loss by a factor of about 700.
That single calculation is the entire justification for the transmission network,
and it is only practical with a.c., because transformers can change a.c. voltage
cheaply and with no moving parts.

## The modern system

Almost without exception, electrical energy now reaches consumers through a
**three-phase, four-wire** system, with distribution transformers changing voltage
at each stage. The four wires are three actives (phases) and a neutral: between
any two actives you measure 400 V, and between any active and the neutral 230 V.
A house takes one phase and the neutral; a plant room takes all four.

The network splits into two parts:

1. **Transmission networks** carry electricity from power stations to the distribution networks. In Australia these operate above 220 kV — typical levels are 275 kV, 330 kV and 500 kV. Europe and parts of the USA go higher.
2. **Distribution networks**, regional or metropolitan, are the interconnected substations and lines that let end customers connect to the grid.

A typical voltage chain looks like this:

| Stage | Typical voltage | What happens |
|---|---|---|
| Generator terminals | 6.6 kV to 33 kV | Alternator output at the station |
| Switching yard, step-up | Up to 220 kV and above | Raised for long-distance transport |
| Transmission line | 220 kV to 500 kV | Small current, low loss, long distance |
| Transmission substation | Stepped down to about 66 kV or 11 kV | Handover to distribution |
| Distribution feeders | 11 kV typical | Around suburbs and towns |
| Distribution substation or pole transformer | 400/230 V | Supply to premises |

Because voltage is raised so high for transport, comparatively few power stations
are needed, but many substations are — and they are usually cross-linked so that
if one route fails, supply can be re-routed around it. That meshing is why a
single line fault rarely blacks out a suburb.

## Who owns and runs it in Australia

Transmission and distribution assets are mostly owned by state government
businesses, with some privatised, and the whole sector is economically regulated
by the **Australian Energy Regulator**.

| State or territory | Transmission network operator |
|---|---|
| Queensland | Powerlink |
| New South Wales and ACT | TransGrid |
| Victoria | AusNet Services |
| South Australia | ElectraNet |
| Tasmania | TasNetworks |
| Western Australia | Western Power |
| Northern Territory | Power and Water Corporation |

Distribution is separate again. In New South Wales, for example, three businesses
own and operate the distribution assets: Ausgrid, Endeavour Energy and Essential
Energy.

Two terms get confused constantly:

- A **wholesaler** is the network business whose distribution assets physically deliver power to the customer, selling at wholesale price.
- A **retailer** buys at wholesale and sells to the end customer. This part of the market has been opened to competition, so customers can choose their retailer, which pushes retailers to compete on tariffs and discounts.

Change your retailer and not a single wire changes. The poles, the transformer
and the service main still belong to the network business.

>! High-voltage apparatus is not the province of an electrician without specific
>! authorisation. Approach distances to overhead lines and to live HV equipment
>! are mandatory, and clearances for cranes, tippers, scaffold and ladders must be
>! planned before the job starts. Never open a substation, pillar or pole
>! transformer enclosure. Treat every overhead conductor as live.

## What to remember

- Early d.c. systems suffered severe volt drop, series street lighting failed as a block, and earth returns corroded buried pipework
- Line loss is I² × R, so raising voltage and lowering current cuts losses dramatically — the reason for the entire transmission network
- Transformers only work on a.c., which is why a.c. won the current war
- Australian generation is 6.6 to 33 kV, transmission above 220 kV, distribution typically 11 kV, and supply 400/230 V three-phase four-wire
- Networks are meshed so that supply can be re-routed around a fault
- Network businesses own the wires; retailers only sell the energy
`,
        quiz: [
          {
            q: "The current in a transmission line is halved by doubling the voltage. What happens to the heat lost in the line?",
            options: [
              "It halves, because loss is proportional to current",
              "It falls to one quarter, because loss is proportional to the square of the current",
              "It stays the same, because the power transmitted is unchanged",
              "It doubles, because the higher voltage stresses the line",
            ],
            answer: 1,
            explain: "Line loss is I² × R, so halving the current reduces the loss by a factor of four. The power delivered to the customer is unchanged — that is precisely the point — but the waste heat in the conductor is not, which is why transmission voltages are pushed as high as insulation practically allows.",
          },
          {
            q: "Why could Edison's d.c. distribution system not compete over long distances?",
            options: [
              "Direct current cannot flow through overhead conductors",
              "There was no cheap way to transform d.c. voltage up, so losses forced many small stations close to customers and very large conductors",
              "His incandescent lamps consumed too much current to be practical",
              "Direct current systems were illegal outside cities",
            ],
            answer: 1,
            explain: "Transformers work by electromagnetic induction and therefore need a changing current, so a.c. could be stepped up for transport and back down for use while d.c. could not. Edison was stuck at utilisation voltage, which meant huge currents, big losses, expensive copper and a station every few blocks.",
          },
          {
            q: "In a 400/230 V three-phase four-wire supply, what does the 230 V refer to?",
            options: [
              "The voltage between any two active conductors",
              "The voltage between any active conductor and the neutral",
              "The voltage between the neutral and earth",
              "The average of the three phase voltages",
            ],
            answer: 1,
            explain: "The higher figure is the line-to-line voltage between actives and the lower figure is the line-to-neutral voltage that a single-phase load such as a house circuit uses. Neutral to earth should read close to zero on a healthy installation — a significant reading there indicates a neutral problem.",
          },
          {
            q: "A customer switches electricity retailers. What physically changes in their supply?",
            options: [
              "The distribution network business replaces the service main",
              "Nothing physical changes — the network business still owns and operates all the wires and the transformer",
              "The supply voltage changes to the new retailer's standard",
              "The meter is rewired to the new retailer's network",
            ],
            answer: 1,
            explain: "Retail competition applies to the sale of energy only; the poles, transformers, service main and network assets remain with the distribution business regardless of who sends the bill. Confusing the retailer with the network business is a common source of misdirected fault calls.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "using-electricity",
        title: "Using electricity: loads, resistors, inductors and capacitors",
        minutes: 12,
        simple: "A load is anything that turns electricity into something useful — heat, light or movement. Every load makes at least a little heat whether you want it to or not. Beyond the appliances themselves, three basic components turn up everywhere: resistors that oppose current, inductors that are coils using magnetism, and capacitors that store charge.",
        refs: REFS_LOAD,
        content: `
Everything from the switchboard outward exists to feed loads, and a load is
simply a device that converts electrical energy into some other useful form.
Knowing which conversion a device performs tells you what its current will look
like, what will fail on it, and how to test it.

## Appliances: how they are classified

Domestic appliances are mostly labour-saving devices or entertainment and
security equipment, and they split into two installation types:

- **Portable appliances** connect by a flexible lead and plug into a socket-outlet (power point). They can be moved and used anywhere there is an outlet — vacuum cleaners, toasters, kettles, televisions, computers.
- **Fixed appliances** are permanently wired to the supply and cannot be relocated — ovens, cooktops, range hoods, hot water systems, heated towel rails, pool pumps.

**White goods** are the large heavy appliances that plug in but do not get moved
around: refrigerators, washing machines, clothes dryers.

Commercial and industrial sites add specialised machines built for a process —
food and beverage production, refining, transport and logistics, server halls and
data storage. The variety is enormous, but every one of them is still converting
electrical energy into heat, light or motion.

Three conversions cover essentially every load you will ever connect.

| Energy produced | Conversion device | Typical appliances | Usual failure mode |
|---|---|---|---|
| Heat | Resistive element | Toaster, oven, cooktop, hot water system, defrost heater | Open-circuit element, or element to earth |
| Light | Filament, gas discharge or LED junction | Lamps, downlights, fluorescent and LED fittings | Failed driver or ballast as often as failed lamp |
| Kinetic (motion) | Motor, solenoid or relay coil | Fans, compressors, pumps, washing machines, contactors | Winding fault, seized bearing, failed capacitor |

## Converting electricity to heat

Whenever current flows, heat is produced — always, even if too little to detect.
That heat is the I² × R loss you met in the transmission lesson, and in a circuit
it is usually a nuisance: excess heat damages accessories, degrades insulation and
starts fires. Correct cable sizing, correct derating and tight terminations exist
to keep it under control.

Deliberately, though, heat is useful. To produce it on purpose, the supply is
connected to a resistance called an **element**. Hair dryers, toasters, ovens,
cooktops, hot water systems and defrost heaters all work this way. An element is
about the simplest possible load: it draws a steady current, it has no inrush and
no power factor problem, and it either reads its expected resistance or it is
open-circuit.

### Worked example — element power, energy and cost

An oven element is connected to 230 V and draws 4.6 A. Find its resistance,
its power, and the energy it uses in 2 hours.

- Resistance: R = V ÷ I = 230 ÷ 4.6 = **50 Ω**
- Power: P = V × I = 230 × 4.6 = **1058 W, or 1.058 kW**
- Energy: W = P × t = 1.058 kW × 2 h = **2.116 kWh**
- In joules: 2.116 kWh × 3.6 MJ per kWh = **7.62 MJ**
- At a tariff of 33 cents per kWh: 2.116 × 0.33 = **about 70 cents**

Note the unit discipline. The joule is the SI unit of electrical work and energy —
one joule is one watt for one second — but it is far too small for billing, so
energy is sold in **kilowatt-hours**, and **1 kWh = 3.6 MJ**. When you use the kWh
form, power must be in kilowatts and time in hours.

## Converting electricity to light

Street lighting was among the very first uses of electricity. The traditional
globe held a resistive filament in a glass envelope; current flowing through it
heated it white-hot and it glowed. It works, but it is dreadfully inefficient —
most of the input becomes heat, not light.

Lamp technology moved on through halogen, fluorescent and compact fluorescent
(CFL) to the **LED**. LEDs produce far more light per watt than anything before
them and are now the default choice in essentially all new installations. For the
technician the change matters: LED and CFL fittings contain electronic drivers, so
they behave differently on dimmers, have inrush characteristics filament lamps
never had, and fail in the driver as often as in the light source.

## Converting electricity to kinetic energy

Kinetic energy is movement. Most electrical devices that produce motion are
**motors**, though **solenoids** and **relays** do the same conversion in a
straight line. Motors are everywhere in industry, and in homes they run washing
machines, vacuum cleaners, hair dryers and refrigerators.

A **generator** performs the same conversion backwards, turning motion into
electricity, which is why a motor spun by an external force will generate.

## The three fundamental components

### Resistors

A resistor opposes current flow, develops a voltage drop across itself and
radiates heat. Given enough heat it will glow — which is exactly what a lamp
filament and a radiant element are.

Resistors are used to:

- restrict current flow
- develop a deliberate voltage drop
- generate heat
- generate light

Construction is usually a length of conductor, often wound into a coil or laid
into a grid so heat can escape. Electronic chip resistors can be a couple of
millimetres across and dissipate only a fraction of a watt; microelectronic ones
are smaller still; industrial braking and load-bank resistors are as large as the
duty requires.

Variable resistors let an operator adjust a circuit by hand. A **rheostat** is
connected as a two-terminal variable resistance to control current; a
**potentiometer** is a three-terminal device tapping off a proportion of an
applied voltage. The volume and tone controls on an amplifier are the classic
example.

### Inductors

An inductor is, at heart, a coil of wire that works by magnetism. Passing current
through the coil creates a magnetic field, and a changing field induces a voltage.
That principle builds solenoids, relays, contactors, transformers and fluorescent
ballasts, and inductors appear throughout electronics as filters and chokes.

The practical consequence you meet on site: an inductive load resists a *change*
in current. That is why contactor coils produce a voltage spike when de-energised,
why motors draw a large inrush at start, and why inductive circuits need
suppression across switching contacts.

### Capacitors

A capacitor stores electrical charge. It is built from two conductive surfaces
separated by an insulator (the dielectric), so charge can be held between them.
They come in an enormous range of sizes and types.

In refrigeration and air-conditioning, two kinds show up constantly:

- **Start capacitors** — high capacitance, short duty, used only during starting
- **Run capacitors** — lower capacitance, continuously rated, improving the running performance and power factor of single-phase motors

A bulged, leaking or open-circuit run capacitor is one of the most common causes
of a single-phase compressor or fan that hums but will not start.

>! A capacitor holds its charge after the supply is isolated, and a motor-start or
>! power-factor capacitor can hold a dangerous charge for a long time. Isolate,
>! prove dead, then discharge the capacitor through an appropriate resistor —
>! never by shorting the terminals with a screwdriver, which welds the tool,
>! damages the capacitor and throws molten metal.

## On the job

- Every load makes heat; the question is only whether it is wanted
- An element fault is almost always open circuit or an earth fault — measure resistance and insulation resistance, both isolated
- A motor drawing well above nameplate current is mechanically loaded, low on voltage, or has a winding fault
- Suspect the run capacitor first on a single-phase motor that hums and trips
- Convert to kWh for energy and cost; keep power in kilowatts and time in hours
`,
        quiz: [
          {
            q: "A 2.4 kW element runs for 3 hours. How much energy has it used, and what is that in megajoules?",
            options: [
              "7.2 kWh, which is 25.92 MJ",
              "0.8 kWh, which is 2.88 MJ",
              "7.2 kWh, which is 7.2 MJ",
              "720 kWh, which is 2592 MJ",
            ],
            answer: 0,
            explain: "W = P × t = 2.4 kW × 3 h = 7.2 kWh, and since 1 kWh is 3.6 MJ, that is 7.2 × 3.6 = 25.92 MJ. The trap is treating a kilowatt-hour as a megajoule — they differ by a factor of 3.6, which matters whenever you convert between billing units and SI energy.",
          },
          {
            q: "A single-phase condenser fan motor hums but will not start, and the run capacitor is visibly bulged. What is the most likely cause?",
            options: [
              "The motor windings have failed open circuit",
              "The failed capacitor is unable to provide the phase shift the motor needs to develop starting torque",
              "The supply voltage is too high",
              "The motor bearings have seized, which caused the capacitor to bulge",
            ],
            answer: 1,
            explain: "A single-phase motor relies on its capacitor to create the phase-shifted auxiliary winding current that produces starting torque; without it the motor sits stalled, humming and drawing locked-rotor current. Open windings would give no hum at all, and a bulged capacitor is a symptom of the capacitor's own failure rather than of a seized bearing.",
          },
          {
            q: "Which statement about heat in electrical circuits is correct?",
            options: [
              "Heat is only produced in circuits that are overloaded",
              "Heat is always produced when current flows, and it is a nuisance in wiring but the useful output in an element",
              "Heat is produced only by inductive loads",
              "Modern cable insulation prevents heat being produced in conductors",
            ],
            answer: 1,
            explain: "Any current through any resistance produces I² × R heating, whether or not the circuit is overloaded — it may simply be too small to notice. Design work is about keeping that heat harmless in the wiring while deliberately concentrating it in the element where it is wanted.",
          },
          {
            q: "What is the difference between a rheostat and a potentiometer?",
            options: [
              "A rheostat is fixed and a potentiometer is variable",
              "A rheostat is a two-terminal variable resistance controlling current; a potentiometer is a three-terminal device tapping a proportion of an applied voltage",
              "A rheostat works only on d.c. and a potentiometer only on a.c.",
              "A potentiometer stores charge while a rheostat dissipates it",
            ],
            answer: 1,
            explain: "Both are variable resistors, but they are connected differently: the rheostat sits in series and limits current, while the potentiometer has the full voltage across its ends and picks off a fraction at the wiper. Neither stores charge — that is the capacitor's job.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "si-units-and-calculations",
        title: "SI units, prefixes and basic calculations",
        minutes: 15,
        simple: "The whole world of measurement is built on seven base units, and everything electrical is derived from them. Prefixes like kilo, milli and micro are just shorthand for moving the decimal point, and getting them wrong is how a technician turns 47 microfarads into 47 farads. This lesson also covers rearranging formulas and working with powers of ten.",
        refs: REFS_SI,
        content: `
Every number you write on a job sheet is meaningless without its unit, and half
the arithmetic mistakes made in the trade are unit mistakes rather than errors in
the maths. The electrotechnology industry uses one agreed set of measurements —
the **International System of Units**, or **SI units**, part of the metric system
and the international standard for measurement.

## The seven base units

Everything else is derived from these seven.

| Quantity | Unit name | Symbol | Basis of the definition |
|---|---|---|---|
| Length | metre | m | Originally one ten-millionth of the equator-to-pole distance; now the distance light travels in a vacuum in 1/299 792 458 of a second |
| Mass | kilogram | kg | Originally the mass of a 0.1 m cube of pure water at freezing point; later the international prototype kilogram |
| Time | second | s | Originally 1/86 400 of a day; now based on energy-level transitions of the caesium-133 atom |
| Electric current | ampere | A | Defined from the force between two parallel conductors one metre apart |
| Temperature | kelvin | K | Zero kelvin is the point at which molecular movement ceases, about −273°C |
| Amount of substance | mole | mol | Based on the number of atoms in 0.012 kg of carbon-12 |
| Luminous intensity | candela | cd | The intensity of a defined light source measured one metre away |

Note the temperature base unit: the kelvin, not the degree Celsius. A kelvin and
a degree Celsius are the same *size* of interval, so a temperature **difference**
of 20 K equals a difference of 20°C, but the scales start in different places. Use
K for differences and calculations, °C for stated temperatures.

## The electrical quantities you will use

| Quantity | Symbol | Unit | Unit symbol |
|---|---|---|---|
| Time | t | second | s |
| Electric charge | Q | coulomb | C |
| Electric current | I | ampere | A |
| Electromotive force / voltage | E or V | volt | V |
| Resistance | R | ohm | Ω |
| Conductance | G | siemens | S |
| Power | P | watt | W |
| Work / energy | W | joule | J |
| Length / distance | l, d or s | metre | m |
| Velocity | v | metres per second | m/s |

And the relationships between them:

- **Q = I × t** — charge equals current times time
- **P = V × I** — electrical power equals voltage times current
- **W = P × t** — work equals power times time
- **P = W ÷ t** — power is the rate of doing work
- **G = 1 ÷ R** — conductance is the reciprocal of resistance

Watch the symbol clash: capital W is both the *quantity* work and the *unit*
watt, and E means both EMF and energy. Context decides, which is why this
material usually writes EMF in full.

## Prefixes

A prefix multiplies the unit by a power of ten. Learn this table cold.

| Prefix | Symbol | Multiplier | Power of ten |
|---|---|---|---|
| tera | T | 1 000 000 000 000 | 10 to the 12 |
| giga | G | 1 000 000 000 | 10 to the 9 |
| mega | M | 1 000 000 | 10 to the 6 |
| kilo | k | 1000 | 10 to the 3 |
| (none) | — | 1 | 10 to the 0 |
| milli | m | 0.001 | 10 to the minus 3 |
| micro | µ | 0.000 001 | 10 to the minus 6 |
| nano | n | 0.000 000 001 | 10 to the minus 9 |
| pico | p | 0.000 000 000 001 | 10 to the minus 12 |

Case matters. **M** is mega and **m** is milli — a factor of a thousand million
between them. Writing 5 mA when you mean 5 MA is not a typo, it is a different
world.

>! A misread prefix is a safety issue, not just an arithmetic one. Reading an
>! insulation result of 0.5 MΩ as 500 MΩ passes a circuit that should have been
>! condemned, and treating a 1.5 mΩ joint resistance as 1.5 Ω hides a connection
>! that is about to overheat. Always read the multiplier on the instrument
>! display before you write the figure on the test sheet.

Common conversions in the trade:

- 15 000 Ω = **15 kΩ**
- 0.0025 A = **2.5 mA**
- 0.000 047 F = **47 µF** (a typical motor run capacitor)
- 2 500 000 Ω = **2.5 MΩ** (a healthy insulation reading)
- 0.75 kW = **750 W**

## Scientific and engineering notation

**Scientific notation** writes a number as a value between 1 and 10 multiplied by
a power of ten. So 15 000 becomes 1.5 × 10 to the power of 4, and 0.000 047
becomes 4.7 × 10 to the power of minus 5.

**Engineering notation** does the same thing but restricts the exponent to
multiples of three, so it lines up exactly with the prefixes. The same two numbers
become 15 × 10 to the power of 3 (15 kΩ) and 47 × 10 to the power of minus 6
(47 µF). Engineering notation is what your calculator's ENG key produces and what
the trade actually uses, because the answer arrives already wearing its prefix.

## Working with indices

Three rules cover nearly everything:

1. **Multiplying:** add the exponents. 10 to the 3 × 10 to the 2 = 10 to the 5
2. **Dividing:** subtract the exponents. 10 to the 6 ÷ 10 to the 2 = 10 to the 4
3. **Raising to a power:** multiply the exponents. (10 to the 3) squared = 10 to the 6

### Worked example — indices in practice

Confirm that one coulomb really is 6.24 × 10 to the power of 18 electrons, given
that one electron carries 1.602 × 10 to the power of minus 19 coulombs.

- Number of electrons = 1 ÷ (1.602 × 10 to the power of minus 19)
- Divide the numbers: 1 ÷ 1.602 = 0.624
- Divide the powers: 10 to the 0 ÷ 10 to the minus 19 = 10 to the 19
- Result: 0.624 × 10 to the 19 = **6.24 × 10 to the power of 18 electrons**

## Transposing formulas

Transposition means rearranging an equation to make a different quantity the
subject. The only rule is that whatever you do to one side, you must do to the
other.

Take **P = V × I**:

- To find V, divide both sides by I: **V = P ÷ I**
- To find I, divide both sides by V: **I = P ÷ V**

Take **W = P × t**:

- **P = W ÷ t** and **t = W ÷ P**

### Worked example — transposition

A 2400 W heater is supplied at 230 V. What current does it draw, and what
resistance does that imply?

- Start with P = V × I and make I the subject: I = P ÷ V
- Substitute: I = 2400 ÷ 230
- **I = 10.43 A**
- Then R = V ÷ I = 230 ÷ 10.43 = **22.05 Ω**

## Ratios and percentages

A **ratio** compares two quantities of the same kind. A distribution transformer
stepping 11 000 V down to 400 V has a turns ratio of 11 000 : 400, which
simplifies by dividing both sides by 400 to **27.5 : 1**.

A **percentage** is a ratio expressed out of one hundred: divide the part by the
whole and multiply by 100.

### Worked example — percentage voltage drop

Nominal supply at the switchboard is 230 V, but the measured voltage at a machine
at the end of a long sub-circuit is 219 V. What is the percentage volt drop, and
does it comply?

- Volt drop: 230 − 219 = 11 V
- Percentage: (11 ÷ 230) × 100 = **4.78 per cent**
- AS/NZS 3000 limits total volt drop from the point of supply to any point in the installation to 5 per cent, so this just complies — with nothing in hand if another load is added

### Worked example — efficiency as a percentage

A motor takes 2.3 kW of electrical input and delivers 1.84 kW of mechanical
output. What is its efficiency?

- Efficiency = (output ÷ input) × 100
- Substitute: (1.84 ÷ 2.3) × 100
- **Efficiency = 80 per cent** — the other 460 W leaves as heat, noise and friction

## Distance, displacement, speed and velocity

Two pairs of terms that are casually treated as synonyms but are not.

**Distance** is a scalar: magnitude only. **Displacement** is a vector: magnitude
*and* direction. A runner completing one lap of a 400 m track has covered a
distance of 400 m but has a displacement of 0 m, because they finished where they
started.

Distance or displacement is normally given the symbol d, sometimes s (from the
Latin *spatium*, meaning space), or l for length. Rotating systems use degrees or
radians. The base unit is the metre.

**Speed** is a scalar; **velocity** is a vector — you can think of velocity as
directional speed. Velocity is distance divided by time:

**v = d ÷ t**, measured in metres per second.

### Worked example — speed and velocity

The runner covers the 400 m lap in 100 seconds.

- Speed: v = d ÷ t = 400 ÷ 100 = **4 m/s**
- In km/h: 4 × 3.6 = **14.4 km/h**
- Average velocity: displacement is 0 m, so v = 0 ÷ 100 = **0 m/s**

Run the same 400 m in a straight line instead and the displacement equals the
distance, so the velocity is 4 m/s in the direction of travel.

## What to remember

- Seven SI base units underpin every electrical unit you use
- Prefixes are powers of ten; M is mega, m is milli, and mixing them is a thousand-fold error
- Engineering notation keeps exponents in multiples of three so they match the prefixes
- Multiplying powers adds exponents; dividing subtracts them
- Transpose by doing the same operation to both sides
- Percentage = part ÷ whole × 100; volt drop is limited to 5 per cent by AS/NZS 3000
- Distance and speed are scalars; displacement and velocity are vectors and carry direction
`,
        quiz: [
          {
            q: "A capacitor is marked 0.000 047 F. How is that normally written?",
            options: [
              "47 mF",
              "47 µF",
              "47 nF",
              "4.7 µF",
            ],
            answer: 1,
            explain: "Micro means 10 to the power of minus 6, and 0.000 047 is 47 × 10 to the power of minus 6, so the value is 47 µF — a typical motor run capacitor. Writing 47 mF would claim a value a thousand times larger, and 47 nF a thousand times smaller.",
          },
          {
            q: "A 3600 W load is supplied at 240 V. Transposing P = V × I, what current flows?",
            options: [
              "15 A",
              "0.067 A",
              "864 A",
              "150 A",
            ],
            answer: 0,
            explain: "Making I the subject gives I = P ÷ V = 3600 ÷ 240 = 15 A. Dividing the wrong way round gives 0.067 A and multiplying gives 864 A — both are quick to spot as nonsense if you sanity-check the answer against what a 15 A outlet is rated for.",
          },
          {
            q: "The voltage measured at a machine is 218 V against a nominal 230 V supply. What is the percentage volt drop, and does it meet the AS/NZS 3000 limit?",
            options: [
              "12 per cent, which fails the limit",
              "5.2 per cent, which just exceeds the 5 per cent limit",
              "5.5 per cent, which complies",
              "1.2 per cent, which complies easily",
            ],
            answer: 1,
            explain: "The drop is 230 − 218 = 12 V, and (12 ÷ 230) × 100 = 5.2 per cent, which is just over the 5 per cent total volt drop allowed from the point of supply. Quoting the 12 V drop as 12 per cent confuses the volts with the percentage — the percentage must always be referred back to the nominal voltage.",
          },
          {
            q: "A cyclist rides 2 km around a circular park track and returns to the starting point in 400 seconds. What are the average speed and the average velocity?",
            options: [
              "Speed 5 m/s and velocity 5 m/s",
              "Speed 5 m/s and velocity 0 m/s",
              "Speed 0 m/s and velocity 5 m/s",
              "Speed 2 m/s and velocity 2 m/s",
            ],
            answer: 1,
            explain: "Speed uses distance travelled: 2000 ÷ 400 = 5 m/s. Velocity uses displacement, and finishing where you started makes the displacement zero, so the average velocity is 0 m/s. That distinction between the scalar and the vector is the whole point of keeping the two terms separate.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
