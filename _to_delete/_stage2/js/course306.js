/* =========================================================================
   Course content, module 306 — Electromagnetism.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 6 — Electromagnetism: solve problems in
   magnetic and electromagnetic devices.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_MATERIALS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — common magnetic and non-magnetic materials and their groupings",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — domain theory, residual magnetism and hard and soft magnetic materials",
  ];

  const REFS_FIELDS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic field patterns of bar and horse-shoe magnets",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — permeability, reluctance and the principle of magnetic screening (shielding)",
  ];

  const REFS_CURRENT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — conventions representing direction of current flow and the right-hand (grip) rule",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — force between adjacent current-carrying conductors and busbar fault forces",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic field around coils and electromagnets, magnetomotive force (MMF)",
  ];

  const REFS_CIRCUIT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic circuit types and associated terminology",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — reluctance, air gaps, magnetic leakage and magnetic fringing",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic circuit properties: flux density and magnetising force",
  ];

  const REFS_BH = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetisation and magnetic characteristic curves (the B/H curve)",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic saturation, hysteresis loops and core losses",
  ];

  const REFS_INDUCTION = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — electromagnetic induction and Fleming's right-hand rule",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Faraday's Law of Induction and induced EMF calculations",
  ];

  const REFS_LENZ = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Lenz's Law and forces on a conductor in a magnetic field",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — eddy currents, eddy current sensors and magnetic arc suppression",
  ];

  const REFS_INDUCTANCE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — inductors, inductance and induction",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — self-inductance, mutual inductance and inductor construction",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — energy stored in a magnetic field and inductive time constants",
  ];

  const REFS_DEVICES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic devices: relays, contactors and solenoids",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — practical applications of electromagnets and magnetic arc extinction",
  ];

  const REFS_INSTRUMENTS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic principles in measurement instruments",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — magnetic sensing devices: Hall effect, eddy current and magnetostriction",
    "AS 1428.5 Design for access and mobility, Part 5: Communication for people who are deaf or hearing impaired",
  ];

  const MODULES = [

  /* ======================================================================
     Module E.6 — Magnetism and electromagnetism
     ====================================================================== */
  {
    id: "elec-electromagnetism",
    stream: "elec",
    title: "E.6 · Magnetism and electromagnetism",
    blurb: "How magnetism and electricity produce each other: fields, flux, magnetic circuits, B/H curves, induction, inductance, and the relays, solenoids, motors and meters that depend on them.",
    lessons: [

      /* ---------------------------------------------------------------- */
      {
        id: "magnetism-and-materials",
        title: "Magnetism and magnetic materials",
        minutes: 11,
        simple: "Some metals, mostly iron, nickel and cobalt, have tiny internal magnets that can all be lined up to point the same way. Think of a crowd of people who can either mill about randomly or all face the same direction. When they all face the same way the material is a magnet; when they are scrambled it is not. Heat, hammering and time scramble them again.",
        refs: REFS_MATERIALS,
        content: `
Almost every device an electrician touches that moves, switches, measures or
transforms depends on magnetism. Motors, generators, transformers, contactors,
relays, solenoid valves, loudspeakers, clamp meters and residual current
devices all work because a magnetic field can be created, controlled and made
to exert a force. Before any of that makes sense, you need to know which
materials respond to a magnetic field and why.

## What a magnet actually is

A magnet is a piece of material that produces a magnetic field outside itself.
Every magnet has two poles, a north and a south, which is why it is called a
**dipole**. No one has ever found a magnetic monopole in nature — break a bar
magnet in half and you get two shorter magnets, each with its own north and
south, not a separate north piece and south piece.

The naming convention comes from navigation. A compass needle is a small bar
magnet free to pivot, and the end that swings towards geographic north is
called the **north-seeking pole**, shortened to north pole. Since unlike poles
attract, the thing it is being attracted to — the Earth's magnetic pole up near
the geographic North Pole — is magnetically a *south* pole. The Earth behaves
as though a huge bar magnet were buried in it upside down. Lodestone
(magnetite) is a naturally magnetic mineral, and lodestone compasses have been
used for well over two thousand years.

## Domain theory: why iron can be magnetised

Inside a ferromagnetic material, the electrons are not just orbiting their
nuclei — they are also spinning, and a spinning charge produces a tiny magnetic
field. In most substances those spins point every which way and cancel out. In
iron, nickel and cobalt the spins in a small region naturally lock together and
point the same way. That region is a **magnetic domain** — a microscopic
region that is already fully magnetised.

An unmagnetised piece of iron is full of domains pointing in random directions,
so the material as a whole has no external field. Apply an external magnetic
field and the domains progressively swing into line with it. Once enough of
them are aligned the bar has a definite north end and a definite south end and
behaves as a magnet. That process is called **magnetic induction**, and it is
why a magnet picks up a nail that was not itself a magnet a moment before: the
nail becomes a temporary magnet with a south pole facing the magnet's north.

Several people arrived at this idea in stages — Weber and Ewing with a
molecular theory in the late 1800s, Weiss with domain theory in 1906, and the
modern electron-spin explanation after that. For trade purposes, the picture of
domains swinging into line is the one you want in your head.

## Hard, soft and residual magnetism

- **Magnetically soft** materials magnetise easily and lose most of it again as
  soon as the magnetising force is removed. Soft iron, mild steel and silicon
  steel are the classic examples. This is exactly what you want in a relay
  armature, a transformer core or a solenoid frame, because the device has to
  let go when you switch it off.
- **Magnetically hard** materials are difficult to magnetise but equally
  difficult to demagnetise, so they make permanent magnets. Magnetically hard
  usually also means mechanically hard — many cannot be machined at all and are
  cast to shape, or ground.
- **Residual magnetism** is the magnetism left behind after the magnetising
  force is removed. In a relay core a little residual magnetism is a nuisance
  because it can hold the armature in; that is why some relays have a thin
  non-magnetic shim on the pole face.

Every ferromagnetic material has a **Curie temperature** — the temperature above
which it loses its magnetic properties entirely. Below that point magnets still
weaken as they get hotter, which matters for magnets working near a compressor
discharge line or a brake disc.

## The three material groups

| Group | Behaviour in a field | Relative permeability | Examples |
|---|---|---|---|
| Ferromagnetic | Strongly attracted; can be magnetised | Hundreds to many thousands | Iron, nickel, cobalt, silicon steel, alnico, ferrite, neodymium alloys |
| Paramagnetic | Very weakly attracted | Slightly greater than 1 | Aluminium, platinum, chromium, magnesium, tungsten, sodium, lithium, caesium |
| Diamagnetic | Very weakly repelled | Slightly less than 1 | Copper, brass, zinc, silver, gold, bismuth, antimony, wood, paper, glass, plastic |

In everyday trade language paramagnetic and diamagnetic materials are simply
called *non-magnetic*, because at normal temperatures their net effect is
nothing you could measure with a magnet in your hand. That property is useful:
brass, copper, aluminium and plastic are chosen for cable glands, couplings and
switchboard fittings precisely because they will not become part of a magnetic
circuit or heat up in one.

## The materials used to build magnetic devices

| Material | Type | Where you meet it |
|---|---|---|
| Soft iron / mild steel | Soft | Relay and contactor cores, solenoid frames, pole pieces |
| Silicon steel (an iron-silicon alloy) | Soft | Stamped laminations for transformer and motor cores |
| Alnico (aluminium, nickel, cobalt) | Hard | Older permanent magnets, meter movements, magnetos |
| Sintered ferrite (powdered magnetic material plus a ceramic binder, pressed and fired) | Hard or soft grades | Loudspeaker magnets, small motors, high-frequency cores |
| Rare-earth (lanthanide group), especially neodymium | Very hard | Cordless-tool motors, servo motors, headphones, sensors |

Ferrites are made by **sintering**: powdered magnetic material is mixed with a
ceramic binder and pressed under heat and pressure. Rare-earth magnets take
their name from the difficulty of separating those elements from their ores.
Neodymium (element 60) makes the strongest magnets in common use — roughly ten
times the field effect of an equivalent ferrite magnet — needing an enormous
force to magnetise and an even larger one to demagnetise. They are increasingly
replacing electromagnets in servo drives and actuators.

>! Neodymium magnets are brittle and shatter into sharp splinters if they snap
>! together. Large ones can crush fingers with no warning as they jump the last
>! few millimetres. Keep them away from pacemakers, hard drives, credit cards
>! and anyone wearing rings. Iron filings that get onto a magnet are almost
>! impossible to remove and turn into metal splinters in your fingertips.

## Where permanent magnets do the work

- Compasses, and the magnetic tape stripe on older credit cards.
- Loudspeaker and headphone motors, microphones, and moving-coil meters, where
  a constant field is needed for the coil to push against.
- Permanent-magnet motors in cordless tools, and a.c. servo motors.
- Fridge door seals, proximity switches, alarm sensors and debris-collecting
  sump plugs.
- **Magnetic chucks**, which clamp steel work to a machine table with no
  electrical supply at all — so a power failure cannot release the job. Because
  you cannot switch a permanent magnet off, the chuck releases the work by
  moving internal low-reluctance bridges that shunt the flux internally instead
  of through the workpiece.
- **Reed switches**: two ferromagnetic contact blades sealed in a glass capsule
  filled with inert gas. Bring a magnet (or an energised coil) near and the
  blades magnetise with opposite polarities, attract, and close the circuit.
  Move the magnet away and the blades spring apart. They are the standard door
  and window sensor in alarm systems and are widely used as position sensors.

## What to remember

- Iron, nickel and cobalt and their alloys are the ferromagnetic materials;
  everything else is effectively non-magnetic.
- Domains that line up make a magnet; scrambled domains make plain iron.
- Soft materials are for anything that must switch off; hard materials are for
  permanent magnets.
- Residual magnetism is what stays behind, and it is sometimes a fault cause.
- Heat weakens magnets, and above the Curie temperature they stop being magnets
  altogether.
`,
        quiz: [
          {
            q: "A contactor armature is specified in magnetically soft steel rather than a hard magnetic alloy. Why?",
            options: [
              "Soft steel produces a stronger magnetic field for the same coil current",
              "Soft steel magnetises readily but keeps almost none of that magnetism, so the contactor drops out reliably when the coil is de-energised",
              "Soft steel has a higher reluctance, which limits the coil current",
              "Hard magnetic alloys cannot be magnetised by an a.c. coil",
            ],
            answer: 1,
            explain: "The armature has to let go the instant the coil is de-energised. A magnetically hard armature would keep a large residual field and stay stuck to the pole face. Field strength for a given MMF depends on the magnetic circuit as a whole, not on hard versus soft, and a hard alloy magnetises perfectly well — it just refuses to demagnetise.",
          },
          {
            q: "Which statement about magnetic domains is correct?",
            options: [
              "Domains only exist once a material has been magnetised",
              "Domains are regions that are already magnetised; magnetising the material lines them up in a common direction",
              "Domains are the individual atoms of iron, each of which acts as a monopole",
              "Domains appear in diamagnetic materials such as copper when current flows",
            ],
            answer: 1,
            explain: "Each domain is a small region already magnetised by aligned electron spins. In unmagnetised iron the domains point randomly and cancel; an external field swings them into line. Monopoles do not exist, and copper has no domain structure of this kind.",
          },
          {
            q: "A brass cable gland is used where a steel one would be a problem. Which property makes brass suitable?",
            options: [
              "Brass is diamagnetic, so it does not become part of the magnetic circuit around the cable",
              "Brass has a very high relative permeability so it concentrates flux safely",
              "Brass is ferromagnetic but has a low Curie temperature",
              "Brass has zero electrical resistance",
            ],
            answer: 0,
            explain: "Brass, copper, aluminium and plastic are effectively non-magnetic, so a single-core a.c. cable passing through them does not drive flux around a magnetic ring and cause circulating currents and heating. A high permeability would make the problem worse, not better, and brass is certainly not ferromagnetic or a superconductor.",
          },
          {
            q: "Above its Curie temperature, a ferromagnetic material:",
            options: [
              "Becomes a permanent magnet without any magnetising force",
              "Doubles its relative permeability",
              "Loses its magnetic properties",
              "Becomes diamagnetic and is repelled strongly",
            ],
            answer: 2,
            explain: "The Curie temperature is the point at which thermal agitation destroys domain alignment and the material stops behaving magnetically. Even below it, magnets get weaker as they get hotter — which is why permanent-magnet devices carry temperature limits.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "fields-permeability-shielding",
        title: "Magnetic fields, permeability, reluctance and shielding",
        minutes: 11,
        simple: "A magnet is surrounded by invisible loops of force that leave the north end and come back into the south end. Those loops always take the easiest route, the way water finds the easiest path downhill. Iron is an easy route and air is a hard one, so putting iron nearby drags the loops through it. That is exactly how magnetic shielding works: you give the field a better road around the thing you want to protect.",
        refs: REFS_FIELDS,
        content: `
You cannot see a magnetic field, so the whole trade works with a mental model
of it. Getting that model right — where the flux goes, what it prefers, and
what happens when you put material in its way — is what lets you predict how a
relay, a transformer or a shielded data cable will behave.

## Lines of force and what they represent

Sprinkle iron filings on a card laid over a bar magnet and they arrange
themselves in curved lines running from one pole to the other. Michael Faraday
called these **lines of force**, and the region they occupy is the **magnetic
field**. They are a drawing convention, not physical strings, but they encode
real rules:

1. By convention a line of force leaves the north pole and enters the south
   pole outside the magnet, completing the loop inside the material. Every line
   is a closed loop — flux never starts or stops anywhere.
2. Lines never cross each other.
3. Lines behave as if they are under tension along their length, so they try to
   shorten — that is the pull of attraction.
4. Lines running in the same direction repel each other sideways, so a bundle
   of flux spreads out when it is free to. That is why a field expands to fill
   the space available to it.

Rule 3 explains attraction and rule 4 explains repulsion. Put two bar magnets
end to end with a north facing a south and the lines join up into single long
loops that shorten and pull the magnets together. Turn one around so two norths
face each other and the two sets of lines are running the same way in the gap,
so they push apart and refuse to merge. A horse-shoe magnet is just a bar
magnet bent so that both poles are close together, giving a short, strong flux
path across the gap.

## Permeability: how easily flux is established

**Permeability** is the property that describes how readily a material lets a
magnetic flux be set up in it. The term was coined by Oliver Heaviside in 1885.
Three symbols matter:

| Symbol | Name | Value or meaning |
|---|---|---|
| mu-zero | Permeability of free space | 4 x pi x 10 to the power minus 7, about 12.57 x 10 to the power minus 7 H/m |
| mu-r | Relative permeability | How many times better than free space a material is; a pure number |
| mu | Actual (absolute) permeability | mu = mu-zero multiplied by mu-r |

Air and all non-magnetic materials have a relative permeability of essentially
1. Cast iron might be a few hundred; silicon steel is a few thousand; special
nickel-iron alloys reach the tens of thousands. Importantly, relative
permeability is **not a constant** for a ferromagnetic material — it changes
with how hard the material is being driven, which is the subject of the B/H
curve lesson.

## Reluctance: the opposition to flux

**Reluctance** (symbol R-m, sometimes S) is the magnetic equivalent of
resistance. It depends on the geometry and material of the path:

R-m = l / (mu-zero x mu-r x A)

where l is the mean length of the path in metres and A its cross-sectional area
in square metres. Look at the form of that expression: it is exactly the same
shape as the resistance of a conductor, R = rho x l / A. Longer path, more
opposition; bigger cross-section, less opposition; better material, less
opposition. High permeability always means low reluctance, and vice versa.

> A useful picture: you spill milk on the kitchen table and it just runs
> everywhere, because the table will not absorb it. Lay a cloth on the table and
> the milk soaks straight into the cloth instead. The table is the non-magnetic
> material — the flux passes over it unchanged. The cloth is the ferromagnetic
> material — it takes the flux up eagerly because it is highly permeable.

## Flux takes the path of least reluctance

Just as current divides between parallel paths in inverse proportion to their
resistances, flux crowds into whichever path has the least reluctance. Two
consequences you will see on the job:

- Put a piece of steel near a magnet and the field **distorts** so it can pass
  through the steel, even if that makes the path longer. The steel becomes
  magnetised in the process (magnetic induction) and gains its own poles.
- Put a piece of paper, glass, plastic or aluminium in the same place and the
  field passes straight through it unchanged. There is no such thing as a
  magnetic insulator — you cannot block a magnetic field, you can only give it
  a better route.

**Magnet keepers** are a working example: a soft iron bar laid across the poles
of a stored horse-shoe magnet gives the flux a short, low-reluctance path and
stops the magnet weakening itself over time.

## Air gaps, leakage and fringing

Real magnetic circuits are not perfect loops of iron.

- **Magnetic leakage** is flux that strays out through the surrounding air and
  never reaches the intended part of the circuit. It is wasted, so the flux
  density in the working part of the circuit is lower than the design figure.
- **Magnetic fringing** is the bulging of flux outwards at the edges of an air
  gap, because the lines crossing the gap are running the same way and repel
  each other sideways. The effective area of the gap is therefore larger than
  the iron area, and the flux density in the gap is lower.

Both effects appear in every relay and contactor, and both get worse as the air
gap gets bigger. That is why machine designers spend real money on precision to
keep motor air gaps small, and why a contactor with a dirty or damaged pole
face buzzes and runs hot — the gap it cannot close is costing it flux.

## Magnetic screening (shielding)

Shielding does **not** stop a magnetic field, because nothing does. What a
shield does is offer the field a much more attractive route than the space you
want protected. Wrap a sensitive instrument in a highly permeable box and the
flux runs around inside the walls of the box, leaving a field-free region in the
middle.

| Interference | Typical frequency | Usual shield material |
|---|---|---|
| Magnetic fields from magnets, motors, VSDs and 50/60 Hz power equipment | Roughly 30-300 Hz | Ferromagnetic sheet: mild steel, or nickel-iron alloy for sensitive work |
| Radio frequency interference | Above about 100 kHz | Aluminium, metallised plastic, foil or braid |

The premium shielding material is a nickel-iron alloy sold as MuMETAL, typically
around 80% nickel, 15.5% iron and 4.5% molybdenum. Its permeability is
enormous, but it saturates at only about 0.76 T — once saturated it stops being
a good shield, so shields are often built as several nested thin layers rather
than one thick one.

A word of warning about steel: not all stainless steel is magnetic. Austenitic
grades such as 304 contain nickel and are essentially non-magnetic; type 316,
a molybdenum-alloyed grade, likewise responds only negligibly. Martensitic
grades have a ferritic microstructure and are magnetic. If you need a shield,
check it with a magnet before you rely on it.

## On the job

- Segregate power and data or ELV cabling. A changing field around a power
  conductor induces voltage into anything running parallel to it; spacing them
  apart cuts the induced voltage dramatically.
- Where cables must cross, cross them at 90 degrees. A conductor lying along the
  direction of the field has no relative motion with respect to it and picks up
  next to nothing.
- Screened cable works on the same principle: a foil or braid screen, earthed at
  one end only, gives interference a path to earth instead of into the signal
  pair.
- If a shield is not working, the two usual causes are that it is saturated or
  that its permeability is no better than what it is protecting.
`,
        quiz: [
          {
            q: "A sensitive instrument must be protected from a nearby motor's stray field. What does a MuMETAL enclosure actually do?",
            options: [
              "It blocks the magnetic field, since MuMETAL is a magnetic insulator",
              "It cancels the field by generating an equal and opposite field",
              "It offers a much lower-reluctance path than the space inside, so the flux travels around in the shield walls",
              "It reflects the magnetic field back towards the motor",
            ],
            answer: 2,
            explain: "There are no magnetic insulators. A shield works by being far more permeable than air, so the flux prefers to run through the shield material and the enclosed volume is left almost field-free. That also explains why a saturated shield stops working — once saturated its permeability collapses.",
          },
          {
            q: "The reluctance of an iron path is given by R-m = l / (mu-zero x mu-r x A). Doubling the cross-sectional area of the core while keeping everything else the same will:",
            options: [
              "Double the reluctance",
              "Halve the reluctance",
              "Leave the reluctance unchanged, since only length matters",
              "Square the reluctance",
            ],
            answer: 1,
            explain: "Area is in the denominator, so doubling A halves R-m — exactly as doubling a conductor's cross-section halves its resistance. Length is in the numerator, so a longer path increases reluctance.",
          },
          {
            q: "Why does the flux density in the air gap of a contactor work out lower than in the iron either side of it?",
            options: [
              "Because air has a lower permeability, so some flux is destroyed in the gap",
              "Because fringing spreads the flux over a larger effective area than the iron cross-section",
              "Because the flux reverses direction as it crosses the gap",
              "Because air gaps carry no flux at all",
            ],
            answer: 1,
            explain: "Flux is not destroyed — the same flux crosses the gap — but the lines bulge outwards (fringing) because parallel lines repel sideways, so it is spread over a bigger area and B = flux divided by area falls. Leakage is a separate effect, where flux bypasses the intended path entirely.",
          },
          {
            q: "Two bar magnets are laid side by side with both north poles at the same end. What happens and why?",
            options: [
              "They attract, because the lines of force join into single longer loops",
              "They repel, because lines of force running in the same direction push each other apart sideways",
              "Nothing, because side-by-side magnets do not interact",
              "They attract, because flux always takes the shortest path",
            ],
            answer: 1,
            explain: "Like poles together means the flux in the space between them runs in the same direction, and parallel lines of force repel laterally, so the fields refuse to merge and the magnets push apart. Attraction happens with unlike poles, where the lines join and then shorten under tension.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "current-and-magnetic-fields",
        title: "The magnetic effect of a current: grip rules, coils and MMF",
        minutes: 12,
        simple: "Every wire carrying current is wrapped in rings of magnetism, like ripples around a stick in a pond. Grip the wire in your right hand with the thumb pointing the way the current goes and your fingers curl the way the magnetism goes. Wind the wire into a coil and all those rings add up into one strong field, so the coil behaves just like a bar magnet you can switch on and off.",
        refs: REFS_CURRENT,
        content: `
In 1820 Hans Christian Oersted noticed a compass needle twitch when he switched
a current on in a nearby wire. Until then electricity and magnetism were
thought to be separate subjects. That single observation is the foundation of
every motor, transformer, relay and solenoid you will ever work on.

## The field around a straight conductor

Whenever current flows in a conductor, a magnetic field exists around it.
Oersted's observations for a steady direct current still hold:

1. The lines of force are concentric circles around the conductor.
2. They lie at right angles to the conductor.
3. Reverse the current and the field reverses.
4. The field is proportional to the current — double the current, double the
   field strength.
5. The field weakens with distance from the conductor.

Run 100 A vertically through a hole in a card, sprinkle iron filings on the
card and you get a clean set of rings around the wire. Small compasses placed
on the card all swing to line up with those rings.

### Dot and cross convention

Drawings show a conductor end-on, so we need a way to say which way current is
going into the page. Think of an arrow:

- A **dot** in a circle is the point of the arrow coming towards you — current
  flowing out of the page towards the viewer.
- A **cross** in a circle is the feathers of the arrow going away from you —
  current flowing into the page.

### The right-hand (grip) rule for a conductor

Grip the conductor in your right hand with the **thumb pointing in the
direction of conventional current** (positive to negative). Your **fingers then
curl in the direction of the magnetic field**, and the fingertips are north
seeking. It is a rule about conventional current, not electron flow, so keep
your circuit conventions straight.

>! Only ever demonstrate the grip rule on a conductor you have proved to be
>! isolated and de-energised. The rule is a drawing aid, not an invitation to
>! wrap your hand around a live conductor.

## Forces between parallel conductors

Two conductors side by side each sit in the other's field, so they exert a
force on each other:

- **Currents in the same direction**: between the conductors the two fields
  oppose, the flux merges into one loop around both, and the loop shortens.
  The conductors are pulled **together**.
- **Currents in opposite directions**: in the gap the two fields run the same
  way, repel sideways, and the conductors are pushed **apart**.

This is not a laboratory curiosity — it is the basis of the definition of the
ampere. One ampere is the current which, flowing in two infinitely long
parallel conductors of negligible cross-section spaced one metre apart in a
vacuum, produces a force of 2 x 10 to the power minus 7 newtons per metre
between them. From that definition:

F = (2 x 10 to the power minus 7 x I1 x I2) / s

where F is the force in newtons per metre of length, I1 and I2 are the two
currents in amperes and s is the spacing in metres.

### Worked example 1 — two conductors carrying load current

Two long parallel conductors 0.1 m apart each carry 100 A in opposite
directions. Find the force between them.

- F = (2 x 10 to the power minus 7 x 100 x 100) / 0.1
- Numerator: 2 x 10 to the power minus 7 x 10 000 = 2 x 10 to the power minus 3
- F = 2 x 10 to the power minus 3 / 0.1 = **0.02 N per metre, repelling**

Two hundredths of a newton per metre is nothing — about the weight of two grams.
Under normal load, conductor forces are irrelevant.

### Worked example 2 — a submain to a d.c. motor

Two conductors 10 mm apart carry 35 A to and from a motor 50 m away.

- s = 10 mm = 0.01 m
- F = (2 x 10 to the power minus 7 x 35 x 35) / 0.01
- 35 x 35 = 1225, so the numerator is 2.45 x 10 to the power minus 4
- F = 2.45 x 10 to the power minus 4 / 0.01 = **0.0245 N per metre**

The currents are in opposite directions (out and back), so the conductors
**repel**. Still trivial.

### Worked example 3 — the same busbars under fault

Now suppose a fault puts 10 kA through the same pair of busbars, spaced 100 mm
apart in a switchboard.

- F = (2 x 10 to the power minus 7 x 10 000 x 10 000) / 0.1
- 10 000 x 10 000 = 1 x 10 to the power 8
- Numerator: 2 x 10 to the power minus 7 x 1 x 10 to the power 8 = 20
- F = 20 / 0.1 = **200 N per metre**

Two hundred newtons per metre is roughly the weight of a 20 kg bag hanging off
every metre of bar, applied as a violent impulse in a few milliseconds. Because
the force goes with the *square* of the current, a 20 kA fault would give
800 N/m. This is why busbars are clamped in insulated supports at close
intervals and why switchboards carry a short-circuit withstand rating.

>! Never modify busbar bracing, spacing or support spacing in a switchboard.
>! The bracing is engineered for the prospective fault current at that point in
>! the installation, and a fault on unbraced bars can turn them into projectiles.

The same effect is used deliberately in moving-iron instruments, motors and
loudspeakers, where the force between fields is the useful output.

## Coils, solenoids and electromagnets

Bend a conductor into a single loop and the field lines are squeezed together
inside the loop and spread out outside it, so the flux density inside is much
higher. For a single circular loop the flux density at the centre is:

B = (mu-zero x I) / (2 x r)

**Worked example 4.** A loop of radius 50 mm carries 10 A.

- B = (4 x pi x 10 to the power minus 7 x 10) / (2 x 0.05)
- Numerator: 1.2566 x 10 to the power minus 6 x 10 = 1.2566 x 10 to the power minus 5
- Denominator: 0.1
- B = 1.2566 x 10 to the power minus 4 T = **126 microtesla**

Wind many turns on top of each other and each turn contributes its own flux in
the same direction. A multi-turn coil wound on a former is a **solenoid**; a
solenoid with a ferromagnetic core is an **electromagnet**. The whole assembly
behaves like a bar magnet: flux leaves one end (the north pole), loops around
outside and re-enters the other end.

### The right-hand (grip) rule for a coil

Wrap your right hand around the coil with the **fingers pointing the way the
current runs in the windings**. Your **thumb, held out along the axis, points
to the north end** of the coil. Reverse the supply polarity and the poles swap
over — which is why a d.c. relay coil with a diode across it must be connected
the right way round, and why an a.c. coil's poles reverse 100 times a second on
a 50 Hz supply.

## Magnetomotive force (MMF)

The driving force that sets up flux in a magnetic circuit is the
**magnetomotive force**, symbol F-m. It depends on two things only: the current
and the number of turns.

F-m = I x N

In strict SI the unit is the ampere, because a turn is dimensionless, but the
trade universally writes it as **ampere-turns (At)** to make clear where the
number came from.

**Worked example 5.** A coil of 120 turns carries 5 A. Find the MMF.

- F-m = I x N = 5 x 120 = **600 At**

**Worked example 6.** An electromagnet has 150 turns and carries 12 A.

- F-m = 150 x 12 = **1800 At**

Notice what this tells you about design. 600 At can be produced by 5 A through
120 turns, or by 0.5 A through 1200 turns, or by 60 A through 10 turns. The
magnetic result is the same; what changes is the conductor size, the coil
resistance, the voltage needed and the heat produced. A 24 V d.c. relay coil is
many turns of fine wire; a starter-motor solenoid is few turns of heavy strap.

## What to remember

- Every current-carrying conductor is surrounded by a circular magnetic field.
- Right-hand grip rule, straight conductor: thumb = current, fingers = flux.
- Right-hand grip rule, coil: fingers = current in the turns, thumb = north.
- Same-direction currents attract; opposite-direction currents repel.
- Conductor force is proportional to the product of the currents, so it becomes
  destructive only under fault conditions.
- MMF = ampere-turns; it is what drives flux, and turns and amps trade off
  against each other freely.
`,
        quiz: [
          {
            q: "A pair of busbars 100 mm apart normally carries 400 A and is subjected to a prospective fault current of 10 kA. By what factor does the force per metre between them increase during the fault?",
            options: [
              "25 times",
              "50 times",
              "625 times",
              "About 25 times, since force is proportional to current",
            ],
            answer: 2,
            explain: "Force is proportional to the product of the two currents, so with both rising from 400 A to 10 000 A the multiplier is 25 x 25 = 625. Treating force as proportional to current alone (the tempting answer) badly under-estimates fault forces and is why busbar bracing exists.",
          },
          {
            q: "Using the right-hand grip rule on a solenoid, you point your fingers in the direction of current in the windings. What does the thumb indicate?",
            options: [
              "The direction of the flux around each individual turn",
              "The north pole of the solenoid",
              "The direction of electron flow",
              "The direction the plunger will move",
            ],
            answer: 1,
            explain: "For a coil, fingers follow the current in the turns and the extended thumb points to the north-seeking end. The straight-conductor version of the rule is the other way round: thumb on the current, fingers on the flux. Plunger direction is set by the mechanics, not by polarity — a d.c. solenoid pulls in whichever way you connect it.",
          },
          {
            q: "Two conductors 0.2 m apart each carry 50 A in the same direction. The force per metre between them is:",
            options: [
              "2.5 x 10 to the power minus 3 N/m, attracting",
              "2.5 x 10 to the power minus 3 N/m, repelling",
              "5 x 10 to the power minus 2 N/m, attracting",
              "0.5 N/m, repelling",
            ],
            answer: 0,
            explain: "F = (2 x 10 to the power minus 7 x 50 x 50) / 0.2 = (2 x 10 to the power minus 7 x 2500) / 0.2 = 5 x 10 to the power minus 4 / 0.2 = 2.5 x 10 to the power minus 3 N/m. Currents in the same direction produce a single merged flux loop that shortens, so the conductors attract.",
          },
          {
            q: "A 24 V relay coil of 1200 turns draws 0.5 A. A contactor coil of 10 turns carries 60 A. Comparing their magnetomotive forces:",
            options: [
              "The relay produces far more MMF because it has more turns",
              "The contactor produces far more MMF because it carries more current",
              "Both produce 600 At, because MMF depends on the product of current and turns",
              "MMF cannot be compared unless the core material is known",
            ],
            answer: 2,
            explain: "MMF = I x N, so 0.5 x 1200 = 600 At and 60 x 10 = 600 At. Ampere-turns is the driving quantity; core material determines the reluctance and therefore how much flux that MMF produces, but it does not change the MMF itself.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "magnetic-circuits",
        title: "Magnetic circuits: flux, flux density, magnetising force and reluctance",
        minutes: 14,
        simple: "A magnetic circuit works a lot like an electric one. Ampere-turns are the push, flux is the flow and reluctance is the opposition, so there is a magnetic version of Ohm's law. Iron is the copper wire of this circuit and an air gap is a huge resistor. That is why closing the gap in a contactor makes it grab so much harder.",
        refs: REFS_CIRCUIT,
        content: `
Every relay, contactor, transformer, motor and solenoid has a **magnetic
circuit**: a loop of iron, usually with a gap in it, in which flux is deliberately
established and steered. Because the maths mirrors d.c. circuit theory almost
exactly, everything you already know about Ohm's law transfers straight across.

## The analogy with an electric circuit

| Role | Electric circuit | Magnetic circuit |
|---|---|---|
| The push | Electromotive force, EMF, in volts | Magnetomotive force, MMF (F-m or IN), in ampere-turns |
| The flow | Current I, in amperes | Flux, symbol phi, in webers (Wb) |
| The opposition | Resistance R, in ohms | Reluctance R-m, in ampere-turns per weber (At/Wb) |
| The law | I = V / R | phi = IN / R-m |
| Physical form | R = rho x l / A | R-m = l / (mu-zero x mu-r x A) |

The analogy is close but not perfect, and the differences matter:

- An EMF can sit there producing no current at all if the circuit is open. An
  MMF **cannot** exist without producing flux — there is no such thing as an
  open magnetic circuit, because flux will always find a route through air.
- Nothing is consumed by flux the way energy is consumed by current in a
  resistor. Reluctance is not a loss mechanism in the same sense.
- Flux happily jumps an air gap. Current will not jump an air gap.

## Flux and flux density

**Flux (phi)** is the total amount of magnetism passing through a section of
the circuit, measured in webers (Wb). Practical values in trade equipment are
small — milliwebers and microwebers.

**Flux density (B)** is the flux packed into each square metre of cross-section:

B = phi / A, measured in tesla (T), where 1 T = 1 Wb per square metre

Density here means quantity per unit area — it is not a measure of field
strength on its own. Typical working flux densities in electrical steel are
around 1.0 to 1.6 T.

**Worked example 1.** A magnetic circuit has a cross-sectional area of
100 square millimetres and a flux density of 0.01 T. Find the total flux.

- Transpose B = phi / A to give phi = B x A
- A = 100 mm squared = 100 x 10 to the power minus 6 = 1 x 10 to the power minus 4 square metres
- phi = 0.01 x 1 x 10 to the power minus 4
- phi = **1 x 10 to the power minus 6 Wb, that is 1 microweber**

**Worked example 2.** A contactor coil has an iron core 20 mm x 30 mm in
section and the flux density in the magnetic circuit is 1.2 T. Find the total
flux.

- A = 20 x 30 = 600 mm squared = 600 x 10 to the power minus 6 = 6 x 10 to the power minus 4 square metres
- phi = B x A = 1.2 x 6 x 10 to the power minus 4
- phi = **7.2 x 10 to the power minus 4 Wb = 720 microwebers**

Always convert millimetres to metres *before* squaring, or you will be out by a
factor of a million. This is the single most common arithmetic error in
magnetic circuit work.

## Magnetising force H

MMF tells you the total push. **Magnetising force H** tells you how much of
that push is applied per metre of magnetic path:

H = IN / l, measured in ampere-turns per metre (At/m)

Do not confuse H (ampere-turns **per metre**) with MMF (ampere-turns). H
applies only to the particular section of path whose length you used for l.
Nor is H the same as B: H is the cause, B is the effect, and permeability is
the link between them.

**Worked example 3.** A coil 0.2 m long has 500 turns and carries 1.5 A. Find
the magnetising force.

- IN = 500 x 1.5 = 750 At
- H = IN / l = 750 / 0.2
- H = **3750 At/m**

**Worked example 4.** A solenoid 0.8 m long has 2000 turns carrying 2 A.

- IN = 2000 x 2 = 4000 At
- H = 4000 / 0.8 = **5000 At/m**

## Permeability from B and H

For any operating point, actual permeability is:

mu = B / H, and relative permeability mu-r = mu / mu-zero

**Worked example 5.** The magnetising force in an iron ring is 1500 At/m and it
produces a flux density of 0.95 T. Find the relative permeability.

- mu = B / H = 0.95 / 1500 = 6.333 x 10 to the power minus 4 H/m
- mu-r = mu / mu-zero = 6.333 x 10 to the power minus 4 / (4 x pi x 10 to the power minus 7)
- mu-zero = 1.2566 x 10 to the power minus 6
- mu-r = **about 504**

> Calculator tip: some calculators throw a syntax error if you key
> 4 pi x 10 to the minus 7 directly. Enter it as 4 x 10 to the power minus 7,
> then multiply by pi, or use the approximation 12.57 x 10 to the power minus 7.

## Reluctance calculations

R-m = l / (mu-zero x mu-r x A)

**Worked example 6.** An iron core has a mean path length of 200 mm and a
rectangular section 15 mm x 10 mm. At the design flux density its relative
permeability is 830. Find the reluctance.

- l = 0.2 m
- A = 15 x 10 = 150 mm squared = 1.5 x 10 to the power minus 4 square metres
- Denominator: 1.2566 x 10 to the power minus 6 x 830 = 1.043 x 10 to the power minus 3
- Times area: 1.043 x 10 to the power minus 3 x 1.5 x 10 to the power minus 4 = 1.565 x 10 to the power minus 7
- R-m = 0.2 / 1.565 x 10 to the power minus 7
- R-m = **1.278 x 10 to the power 6 At/Wb**

**Worked example 7.** A magnetic path is 600 mm long with a cross-section of
800 square millimetres and a relative permeability of 600.

- Denominator: 1.2566 x 10 to the power minus 6 x 600 x 8 x 10 to the power minus 4 = 6.03 x 10 to the power minus 7
- R-m = 0.6 / 6.03 x 10 to the power minus 7 = **9.95 x 10 to the power 5 At/Wb**

## The magnetic Ohm's law in use

phi = IN / R-m, which rearranges to IN = phi x R-m and R-m = IN / phi.

**Worked example 8.** What MMF is needed to establish 0.2 Wb in a core of
reluctance 2000 At/Wb?

- IN = phi x R-m = 0.2 x 2000 = **400 At**

**Worked example 9.** A magnetic circuit has a reluctance of 750 At/Wb. Its
coil of 800 turns carries 0.5 A. Find the total flux.

- IN = 800 x 0.5 = 400 At
- phi = IN / R-m = 400 / 750 = **0.533 Wb**

## Air gaps dominate everything

With the exception of transformers, every magnetic device needs a gap in the
iron so something can move and do work. Contactors and relays have one working
gap; motors, generators and moving-coil meters have two. Reluctances in series
simply add:

R-m total = R-m iron + R-m air gap

**Worked example 10 — why a relay pulls in harder than it holds.** Take the
contactor core from example 2 (area 6 x 10 to the power minus 4 square metres),
with an iron path of 200 mm at mu-r = 830, and a working air gap of 1 mm.

Iron path:
- Denominator: 1.2566 x 10 to the power minus 6 x 830 x 6 x 10 to the power minus 4 = 6.26 x 10 to the power minus 7
- R-m iron = 0.2 / 6.26 x 10 to the power minus 7 = 3.20 x 10 to the power 5 At/Wb

Air gap (mu-r = 1, and we use the iron cross-sectional area for the gap, as is
standard practice):
- Denominator: 1.2566 x 10 to the power minus 6 x 1 x 6 x 10 to the power minus 4 = 7.54 x 10 to the power minus 10
- R-m gap = 0.001 / 7.54 x 10 to the power minus 10 = 1.33 x 10 to the power 6 At/Wb

Total with the gap open: 3.20 x 10 to the power 5 + 1.33 x 10 to the power 6 =
**1.65 x 10 to the power 6 At/Wb**

MMF needed to drive 720 microwebers with the gap open:
- IN = 7.2 x 10 to the power minus 4 x 1.65 x 10 to the power 6 = **about 1190 At**

MMF needed once the armature has closed and the gap is gone:
- IN = 7.2 x 10 to the power minus 4 x 3.20 x 10 to the power 5 = **about 230 At**

One millimetre of air has roughly four times the reluctance of 200 mm of iron.
That single fact explains a great deal of practical behaviour:

- Contactors draw a large inrush current while the gap is open and settle to a
  much smaller sealed current once closed. On large a.c. contactors this is
  handled by the coil's own impedance changing; on some d.c. coils an economy
  resistor is switched in.
- A contactor held part-way open by mechanical obstruction, or with muck on the
  pole faces, never reaches its sealed current and cooks its coil.
- Air gaps are also where leakage and fringing occur, further reducing usable
  flux, so designers keep gaps as small as machining allows.

## What to remember

- phi = IN / R-m is the magnetic Ohm's law; learn it alongside I = V / R.
- B = phi / A in tesla; H = IN / l in At/m; mu = B / H.
- Convert mm to m before squaring an area.
- Reluctance rises with path length and falls with area and permeability.
- Series reluctances add, and the air gap almost always dominates the total.
`,
        quiz: [
          {
            q: "A core of cross-section 25 mm x 40 mm carries a flux of 1.0 mWb. What is the flux density?",
            options: [
              "1.0 T",
              "0.001 T",
              "1000 T",
              "0.1 T",
            ],
            answer: 0,
            explain: "A = 25 x 40 = 1000 mm squared = 1 x 10 to the power minus 3 square metres. B = phi / A = 1 x 10 to the power minus 3 Wb / 1 x 10 to the power minus 3 square metres = 1.0 T. The classic error is to leave the area in square millimetres, which throws the answer out by a factor of a million.",
          },
          {
            q: "A magnetic circuit has a reluctance of 500 At/Wb and its 400-turn coil carries 0.25 A. The flux produced is:",
            options: [
              "0.2 Wb",
              "50 kWb",
              "5 Wb",
              "0.0005 Wb",
            ],
            answer: 0,
            explain: "IN = 400 x 0.25 = 100 At, and phi = IN / R-m = 100 / 500 = 0.2 Wb. The magnetic version of Ohm's law puts MMF on top and reluctance underneath, exactly as V over R gives current.",
          },
          {
            q: "In a relay, roughly what proportion of the total circuit reluctance does a 1 mm air gap typically represent compared with the whole iron path?",
            options: [
              "A negligible fraction — iron dominates because it is far longer",
              "About half, since the two are usually designed to be equal",
              "More than the iron path, often several times as much, because air has a relative permeability of only 1",
              "None, because flux cannot cross an air gap",
            ],
            answer: 2,
            explain: "With mu-r of 830 for the iron, one millimetre of air is magnetically equivalent to roughly 830 mm of that iron. A short gap therefore outweighs a long iron path, which is why pull-in MMF is several times the sealed MMF and why contactors draw a big inrush and then settle.",
          },
          {
            q: "A coil of 250 turns carrying 2 A is wound on a magnetic path 0.5 m long. What is the magnetising force H?",
            options: [
              "500 At",
              "1000 At/m",
              "250 At/m",
              "1000 At",
            ],
            answer: 1,
            explain: "IN = 250 x 2 = 500 At, then H = IN / l = 500 / 0.5 = 1000 At/m. Ampere-turns alone is the MMF; dividing by path length converts it to magnetising force in ampere-turns per metre, and the units are the giveaway.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "bh-curves-hysteresis",
        title: "B/H curves, saturation, hysteresis and core losses",
        minutes: 12,
        simple: "Iron only lets you push so much magnetism into it. Plot how much magnetism you get against how hard you push and the graph bends over and flattens, like a sponge that is already full of water. Iron also lags behind, keeping some magnetism when you stop pushing, and that lag turns into heat every cycle. Slicing the core into thin sheets stops another kind of heating.",
        refs: REFS_BH,
        content: `
Relative permeability is not a fixed number for iron. It depends entirely on
how hard the material is being driven, and the graph that shows this — the
**B/H curve** — is behind a huge number of practical effects: why a transformer
buzzes and draws a huge inrush current, why motor cores are laminated, why
chokes go non-linear, and why oversized flux is a waste of money.

## The magnetisation (B/H) curve

Take a sample of iron, wind a coil on it, increase the magnetising force H step
by step and measure the resulting flux density B. Plot B against H. Typical
figures for an iron sample look like this:

| H (At/m) | B (T) | mu = B/H (H/m) | Relative permeability mu-r |
|---|---|---|---|
| 100 | 0.04 | 0.00040 | 318 |
| 200 | 0.12 | 0.00060 | 477 |
| 300 | 0.40 | 0.00133 | 1058 |
| 400 | 0.90 | 0.00225 | 1790 |
| 500 | 1.00 | 0.00200 | 1591 |
| 600 | 1.06 | 0.00177 | 1408 |
| 800 | 1.15 | 0.00144 | 1146 |
| 1000 | 1.21 | 0.00121 | 963 |
| 1400 | 1.29 | 0.00092 | 732 |
| 2000 | 1.36 | 0.00068 | 541 |

Two curves come out of that table. The **B/H curve** climbs steeply and then
flattens off. The **permeability curve** rises to a sharp peak and then falls
away just as sharply.

**Worked example 1 — permeability at the peak.** At H = 400 At/m, B = 0.90 T.

- mu = B / H = 0.90 / 400 = 2.25 x 10 to the power minus 3 H/m
- mu-r = mu / mu-zero = 2.25 x 10 to the power minus 3 / 1.2566 x 10 to the power minus 6
- mu-r = **about 1790**

**Worked example 2 — permeability well past the knee.** At H = 2000 At/m,
B = 1.36 T.

- mu = 1.36 / 2000 = 6.8 x 10 to the power minus 4 H/m
- mu-r = 6.8 x 10 to the power minus 4 / 1.2566 x 10 to the power minus 6 = **about 541**

Five times the magnetising force has produced only about 1.5 times the flux
density, and the permeability has dropped to under a third of its peak. That is
saturation setting in.

## The four regions of a B/H curve

| Region | What is happening | Practical meaning |
|---|---|---|
| 1 — the ankle | Small increases in flux for increases in H | Domains just beginning to swing; permeability still low |
| 2 — the straight portion | Large flux gain for small H increase | The useful design range for nearly all magnetic devices |
| 3 — the knee | Flux gain per unit of H falling away | The saturation point; permeability is past its peak |
| 4 — saturation | Almost no further flux for large increases in current | All domains aligned; extra current only makes heat |

**Magnetic saturation** occurs around the centre of the knee. Beyond it, driving
more current into the coil is uneconomic: you pay for copper losses and get
almost no extra flux. A magnetic material has a hard ceiling — every domain is
already aligned, so there is nothing left to align.

Different materials saturate at different points:

- **Silicon steel** gives much greater flux density than plain steels at low
  values of H and, on typical trade curves, starts saturating in the region of
  0.8 to 0.9 T on the graphed sample.
- **Cast steel** carries on a little further, saturating near about 1 T.
- **Cast iron** saturates at a much lower flux density than either, and needs
  far more magnetising force to get there.

A non-magnetic material has no curve at all in this sense — its B/H
relationship is a straight line of very low slope, because mu-r is 1 at any
value of H and it cannot saturate.

## Hysteresis: the lag

Hysteresis simply means lag. Now take the sample past the knee, then reduce H
back to zero and drive it negative, then positive again, and plot the whole
journey.

1. **O to A**: the initial magnetisation curve, from an unmagnetised state up
   into saturation.
2. **A to B**: reduce H back to zero. B does **not** return to zero. What is
   left at H = 0 is the **residual flux density (B-r)** — the residual
   magnetism.
3. **B to C**: to force B to zero you must apply a reverse magnetising force.
   That reverse value is the **coercive force (H-c)**.
4. **C to D and D to E to F to A**: continue into reverse saturation and back,
   and the return path mirrors the outward one.

The closed shape ABCDEFA is the **hysteresis loop**. Its width tells you about
the material: a magnetically hard material has a fat loop with a large residual
flux and a large coercive force (good permanent magnet, terrible transformer
core); a magnetically soft material has a thin loop (poor permanent magnet,
excellent transformer core).

## The two core losses

### Hysteresis loss

Every time the material is taken once around the loop, energy is spent dragging
the domains back and forth, and that energy comes out as heat. The **area
enclosed by the loop is proportional to the energy lost per cycle**, so
hysteresis loss rises with the loop area, the frequency and the volume of iron.
At 50 Hz an a.c. core goes round the loop 50 times a second, every second it is
energised. This is why transformer and motor cores use soft, thin-loop
materials such as grain-oriented silicon steel.

### Eddy current loss

The core is itself a conductor sitting in a changing magnetic field, so by
Faraday's law voltages are induced in the iron and circulating currents — **eddy
currents** — flow in it. They obey Lenz's law, opposing the flux that caused
them, and they dissipate power as heat in the core.

The cure is **lamination**. Instead of a solid core, the core is built from thin
sheets, each varnished or oxide-coated so it is insulated from its neighbours,
stacked to make up the full cross-section. The flux still runs the length of the
laminations happily, but the eddy current loops are broken into many small
high-resistance loops, and the loss falls dramatically.

| Core type | Where it is used | Loss behaviour |
|---|---|---|
| Solid iron | d.c. magnetic pole pieces only; useless above roughly 5 Hz | Very high eddy losses if the flux alternates |
| Laminated silicon steel | Transformers, motors, contactor and relay cores on a.c. | Low losses at 50 Hz; higher flux density permitted, so a smaller core |
| Iron powder / ferrite (sintered) | Switch-mode supplies, RF chokes, tuning inductors | Fine insulated particles almost eliminate eddy currents; usable well above 30 MHz |
| Air core | RF work, Rogowski coils | No core loss at all, but very low inductance for the size |

Plain iron sheet is adequate for small, low-energy transformers, but
distribution transformers use an expensive silicon-steel alloy because it
permits a higher flux density (a smaller, cheaper core for the same output) and
has lower iron losses, so it runs cooler.

> Practical clue: a transformer or contactor that runs hot with no load
> connected is losing that heat in the iron, not the copper. Suspect core
> problems — shorted laminations, an over-voltage pushing the core into
> saturation, or a d.c. component in the supply.

## Saturation in the field

- **Inrush current.** Energise a transformer at the wrong point in the a.c.
  waveform and the core saturates for the first few cycles. With permeability
  collapsed, the winding looks like little more than its own resistance and
  draws an inrush many times the rated current. It is why transformer and
  motor circuits use type C or D breakers rather than type B.
- **Clamp meter jaws.** A deliberate air gap is built into d.c. clamp meter
  jaws partly to keep the core out of saturation.
- **Shields.** MuMETAL saturates at about 0.76 T; a shield in too strong a field
  simply stops shielding.
- **Chokes and ballasts.** An iron-cored choke that saturates on current peaks
  loses inductance exactly when it is needed, distorting the current waveform.

## What to remember

- B/H curve: flux density against magnetising force, with a distinct knee.
- Permeability peaks near the knee and falls away sharply beyond it.
- Saturation means no useful extra flux for more current — only heat.
- Hysteresis is the lag; residual flux and coercive force define the loop.
- Loop area is proportional to hysteresis loss per cycle.
- Eddy currents are cured by laminating the core; hysteresis is cured by
  choosing a soft, thin-loop material.
`,
        quiz: [
          {
            q: "A core is being operated in region 4 of its B/H curve. What is the consequence of increasing coil current further?",
            options: [
              "Flux density rises in proportion to the current, as it does in region 2",
              "Almost no extra flux is produced, and the additional current simply generates heat",
              "The permeability rises to its maximum value",
              "The core becomes a permanent magnet",
            ],
            answer: 1,
            explain: "Region 4 is saturation — the domains are already aligned, so there is nothing left to align. Permeability has already peaked back near the knee and is falling, and the extra current only produces I squared R heating in the winding.",
          },
          {
            q: "Laminating a transformer core primarily reduces which loss, and how?",
            options: [
              "Hysteresis loss, by reducing the area of the hysteresis loop",
              "Copper loss, by shortening the winding",
              "Eddy current loss, by breaking the circulating current paths into small high-resistance loops",
              "Leakage loss, by keeping the flux inside the iron",
            ],
            answer: 2,
            explain: "Insulated laminations interrupt the circulating currents induced in the core, which is an eddy current effect. Hysteresis loss depends on the material's loop area and is addressed by choosing silicon steel, not by slicing it up. Copper loss lives in the windings.",
          },
          {
            q: "On a hysteresis loop, the coercive force H-c is:",
            options: [
              "The flux density remaining when the magnetising force is removed",
              "The reverse magnetising force needed to reduce the flux density to zero",
              "The maximum flux density the material can reach",
              "The magnetising force at which permeability peaks",
            ],
            answer: 1,
            explain: "Residual flux B-r is what remains at H = 0; the coercive force is the reverse H needed to wipe it out. A large coercive force is exactly what you want in a permanent magnet and exactly what you do not want in a relay armature or a transformer core.",
          },
          {
            q: "From the tabulated iron sample, permeability at H = 400 At/m is mu-r = 1790 but at H = 2000 At/m it is mu-r = 541. What does this tell a designer?",
            options: [
              "The iron has been damaged by the higher magnetising force",
              "Relative permeability is a fixed material constant and the readings must be in error",
              "Relative permeability depends on the operating point, so reluctance calculations must use the mu-r at the design flux density",
              "The material has changed from ferromagnetic to paramagnetic",
            ],
            answer: 2,
            explain: "Permeability is a function of where you are on the curve, which is why reluctance problems always specify mu-r 'at the design flux density'. Nothing is damaged and the material has not changed group — it is simply running out of unaligned domains.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "electromagnetic-induction",
        title: "Electromagnetic induction, Faraday's law and the generator principle",
        minutes: 12,
        simple: "Move a wire across a magnetic field, or move a field across a wire, and a voltage appears in the wire. Nothing has to touch. That is how every generator and alternator in the country makes electricity, and it is also why a power cable running alongside a data cable can inject noise into it. Move faster, or use more turns, and you get more volts.",
        refs: REFS_INDUCTION,
        content: `
In 1831 Michael Faraday showed the reverse of Oersted's discovery: if a
magnetic field can be made by a current, then a moving magnetic field can make a
current. That single idea generates virtually all of the electricity in the
grid and underlies transformers, alternators, current transformers, inductive
sensors and every kind of induced interference you will ever have to design out
of an installation.

## The three requirements

To induce an EMF you need all three of these at once:

1. A conductor, or a coil of conductors — an inductor.
2. A magnetic field.
3. **Relative motion** between the two.

Relative motion is the part people forget. It does not matter whether the
conductor moves, the magnet moves, or the conductor and magnet both stand still
while the field grows and collapses because the current making it is changing.
All three count as relative motion, and the third one is how transformers work.

If the conductor forms part of a complete circuit, the induced EMF drives a
current. If the circuit is open, the EMF is still there — you can measure it —
but no current flows.

## Fleming's right-hand rule (generators)

Hold the thumb, first finger and second finger of your **right** hand mutually
at right angles:

| Digit | Represents |
|---|---|
| First finger | **F**ield — from north to south |
| Thu**M**b | **M**otion of the conductor |
| Se**C**ond finger | **C**urrent, that is the direction of the induced EMF |

Right hand for generators, left hand for motors — a distinction worth
memorising early, because the two rules produce opposite answers and a great
many exam marks hang on it.

## Induced EMF in a moving conductor

e = B x l x v x sin(theta)

where e is the induced EMF in volts, B the flux density in tesla, l the active
length of conductor in the field in metres, v the velocity in metres per second
and theta the angle between the direction of motion and the field. Cutting the
field at right angles gives sin 90 = 1 and the maximum EMF; sliding along the
lines of force gives sin 0 = 0 and no EMF at all.

**Worked example 1.** A 200 mm conductor moves in a field of 1 T at 10 m/s, at
60 degrees to the field. Find the generated voltage.

- e = B x l x v x sin(theta)
- e = 1 x 0.2 x 10 x sin 60
- sin 60 = 0.866
- e = 1 x 0.2 x 10 x 0.866
- e = **1.73 V**

**Worked example 2.** The same conductor at 85 degrees.

- sin 85 = 0.9962
- e = 1 x 0.2 x 10 x 0.9962 = **1.99 V**

**Worked example 3.** The same conductor at 90 degrees.

- sin 90 = 1
- e = 1 x 0.2 x 10 x 1 = **2 V**, the maximum for this conductor

Those three answers are the generator principle in miniature. As a conductor is
rotated in a field, the angle changes continuously, so the induced EMF traces
out a sine wave — maximum when the conductor sweeps across the poles, zero
twice per revolution as it moves momentarily parallel to the flux. That is
where the sinusoidal a.c. waveform physically comes from.

## Faraday's law of induction

For a coil, what matters is the rate at which the flux linking it changes and
how many turns are linked:

E = N x (change in flux) / (change in time)

with E in volts, N the number of turns, flux change in webers and time change in
seconds. Faraday's finding in words: the induced voltage is directly
proportional to the change in flux and inversely proportional to the time the
change takes. Adding turns has the same multiplying effect as adding current.

**Worked example 4.** A coil of 500 turns has a permanent magnet moved into it
such that 0.2 Wb of flux cuts across the coil in 4 seconds. Find the average
induced voltage.

- E = N x (change in flux) / (change in time)
- E = 500 x (0.2 / 4)
- 0.2 / 4 = 0.05 Wb per second
- E = 500 x 0.05 = **25 V**

**Worked example 5.** A coil of 600 turns has a flux of 80 microwebers passing
through it. The flux falls to 30 microwebers in 15 ms. Find the average induced
voltage.

- Change in flux = 80 - 30 = 50 microwebers = 50 x 10 to the power minus 6 Wb
- Change in time = 15 ms = 15 x 10 to the power minus 3 s
- Rate of change = 50 x 10 to the power minus 6 / 15 x 10 to the power minus 3 = 3.333 x 10 to the power minus 3 Wb/s
- E = 600 x 3.333 x 10 to the power minus 3 = **2 V**

Note how small a flux change produces a usable voltage when it happens fast
enough. Squeeze the same 50 microweber change into 1.5 ms instead of 15 ms and
you get 20 V. Squeeze it into 15 microseconds and you get 2000 V — which is
precisely how an ignition coil makes a spark.

## The Oersted and Faraday experiments

The classic bench demonstration puts both discoveries side by side. A compass
sits under a straight conductor lined up north-south; a coil, a bar magnet and a
meter sit beside it.

- Switch current on in the conductor and the compass needle deflects — Oersted:
  current makes a field.
- Push the bar magnet into the coil and the meter deflects one way; hold it
  still and the reading falls to zero; pull it out and the meter deflects the
  other way — Faraday: a changing field makes an EMF.
- Reverse the magnet so the south pole leads and every deflection reverses.

Note the two things the demonstration proves that catch people out: **holding
the magnet stationary inside the coil produces nothing**, and the **direction**
of the induced EMF depends on whether the flux is growing or collapsing.

## Why this matters for cabling

Oersted's experiment is directly relevant to installation practice. Two cables
run parallel means the changing field around one is continually cutting the
other, inducing a voltage into it. Between a power cable and a data or ELV
cable, that induced voltage is interference.

- **Separate them.** Induced voltage falls off with distance, so segregating
  power from data on separate trays or with a divider is the first defence, and
  AS/NZS wiring practice requires separation of LV and ELV wiring anyway.
- **Cross at right angles.** If they must cross, cross at 90 degrees. A
  conductor lying along the direction of the field has effectively no relative
  motion with respect to it and almost nothing is induced.
- **Twist and screen.** Twisted pairs make successive induced voltages cancel;
  a screen earthed at one end diverts interference to earth.

A neat field trick from the same principle: lay a compass across a vehicle's
battery cable and start the engine. The needle deflects when the alternator
starts pushing charging current, which tells you the charging system is doing
something without breaking into the circuit.

## What to remember

- Conductor, field and relative motion — all three, or nothing is induced.
- e = Blv sin(theta): maximum at 90 degrees, zero at 0 degrees.
- E = N x (flux change) / (time change): more turns, more flux or less time all
  mean more volts.
- A rotating conductor in a uniform field naturally produces a sine wave.
- Induction does not care about physical contact, which is both the basis of
  transformers and the cause of interference.
`,
        quiz: [
          {
            q: "A bar magnet is pushed into a coil, held still inside it for five seconds, then withdrawn. What does a centre-zero meter across the coil show?",
            options: [
              "A steady deflection all the way through, in one direction",
              "A deflection one way going in, zero while stationary, and a deflection the other way coming out",
              "Zero throughout, because the circuit is not connected to a supply",
              "A deflection one way going in and the same deflection again coming out",
            ],
            answer: 1,
            explain: "Induction requires relative motion. While the magnet is stationary the flux linking the coil is constant, so no EMF exists. Reversing the motion reverses the direction of flux change and therefore the polarity of the induced EMF.",
          },
          {
            q: "A 400-turn coil experiences a flux change of 20 mWb in 0.1 s. The average induced EMF is:",
            options: [
              "8 V",
              "80 V",
              "0.08 V",
              "800 V",
            ],
            answer: 1,
            explain: "E = N x (flux change / time change) = 400 x (0.02 / 0.1) = 400 x 0.2 = 80 V. Watch the milliweber conversion: 20 mWb is 0.02 Wb, not 20 Wb, and dropping that prefix is the usual source of a factor-of-1000 error.",
          },
          {
            q: "A 0.5 m conductor moves at 4 m/s through a 0.6 T field, at 30 degrees to the field. The induced EMF is:",
            options: [
              "1.2 V",
              "0.6 V",
              "2.4 V",
              "1.04 V",
            ],
            answer: 1,
            explain: "e = Blv sin(theta) = 0.6 x 0.5 x 4 x sin 30 = 1.2 x 0.5 = 0.6 V. The tempting answer of 1.2 V is what you get if you forget the angle — that would be the value at 90 degrees, the maximum for this conductor.",
          },
          {
            q: "Data cabling must cross a power circuit on a tray. Best practice is to:",
            options: [
              "Run them parallel and touching, so the fields cancel",
              "Cross them at 90 degrees, so there is minimal relative motion between the data conductor and the power cable's field",
              "Cross them at a shallow angle to spread the coupling over a longer distance",
              "Bond the data screen to the power cable armour at the crossing point",
            ],
            answer: 1,
            explain: "A conductor lying along the direction of a field has essentially no relative motion with respect to it, so almost nothing is induced. Running parallel gives the maximum coupling length, a shallow crossing is a partial version of the same problem, and bonding screens to power armour creates a new noise path rather than removing one.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "lenz-law-and-motor-principle",
        title: "Lenz's law, eddy currents and the motor principle",
        minutes: 12,
        simple: "Nature pushes back. Whenever a magnetic field induces a current, that current makes its own field that fights the change that created it. It is like water resisting a paddle. Turn the idea around and you get the motor: put a current-carrying wire in a magnetic field and the two fields shove each other, so the wire moves.",
        refs: REFS_LENZ,
        content: `
Faraday's law tells you how big an induced EMF is. Lenz's law tells you which
way it points, and the answer is always the same: whichever way opposes what
caused it. From that one principle come back EMF, inductive kick, eddy current
braking, arc blowout coils and half the odd behaviour of inductive circuits.

## Lenz's law

**The direction of an induced EMF is always such that the current it produces
sets up a magnetic field opposing the change that produced it.**

Heinrich Lenz published this in 1834, and it is the electrical counterpart of
Newton's third law — action and reaction, equal and opposite. It has to be true,
because if the induced effect assisted the change instead of opposing it, the
smallest disturbance would run away and create energy from nothing.

In the induced-voltage equation this is why a minus sign is often written:

V = minus N x (change in flux) / (change in time)

The number tells you the size; the minus sign tells you the polarity opposes the
change. In practical calculations you work out the magnitude and then use
Lenz's law to reason about direction.

## The classic ring demonstration

Two aluminium rings are pivoted on a frame — one continuous, one with a saw cut
through it.

- Push a bar magnet into the **continuous** ring. An EMF is induced, a
  circulating current flows around the ring, that current creates its own field
  opposing the approaching magnet, and the ring swings away. Pull the magnet out
  and the ring follows it, because now the induced field opposes the flux
  *leaving*.
- Push the magnet into the **split** ring and nothing happens. The saw cut is an
  air gap in the electrical path, so no current can circulate, so no opposing
  field exists.

Aluminium is not even magnetic, which makes the point neatly: it is the induced
**current**, not the material, that produces the force. The same principle is
used on switchboards, where a slot in a metal gland plate stops circulating
currents from forming a loop around single-core cable entries.

## What Lenz's law tells you about current in a coil

1. A **rising** current induces an opposing EMF, so the rise is slower than a
   purely resistive circuit would give.
2. A **steady** current maintains a steady field, which stores energy but
   induces nothing.
3. A **falling** current induces an EMF that *assists* the applied voltage,
   trying to keep the current going, so the fall is slower than expected — and
   if you break the circuit fast, that EMF becomes enormous.

That third point is worth respecting.

>! Opening a highly inductive circuit quickly — a contactor coil, a solenoid, a
>! large choke, a d.c. motor field — produces a self-induced voltage many times
>! the supply voltage. It will draw an arc across the switch contacts, punch
>! through insulation, destroy semiconductors and can deliver a serious shock
>! from a nominally 12 V or 24 V circuit. Fit the suppression the manufacturer
>! specifies: a flywheel diode across a d.c. coil, an RC snubber or varistor on
>! a.c., and discharge large inductors through a resistor before working on them.

## Forces on a conductor in a field

Take a conductor being pushed **down** through a magnetic field. An EMF is
induced, current flows, and that current wraps its own circular field around the
conductor. On one side of the conductor the two fields add and on the other they
subtract, so the main field is **compressed in front of the moving conductor and
stretched out behind it**. The compressed side pushes harder than the stretched
side, and the resultant force opposes the motion — exactly as Lenz requires.
That opposing force is what you feel as mechanical load on a generator: draw
more current from an alternator and it becomes harder to turn.

## The motor principle: F = BIl

Now run the argument the other way. Instead of moving the conductor to make a
current, force a current through a conductor lying in a magnetic field. The same
field distortion occurs, and the conductor is pushed out of the strong side
towards the weak side. That is the **motor principle**, and the force is:

F = B x I x l

where F is the force in newtons, B the flux density in tesla, I the current in
amperes and l the length of conductor in the field in metres. If the conductor
lies at an angle theta to the field, F = B x I x l x sin(theta), so the force is
maximum when the conductor is at right angles to the flux and zero when it lies
along it.

**Worked example 1.** A conductor 250 mm long lies at right angles in a field of
0.8 T and carries 15 A. Find the force on it.

- F = B x I x l
- F = 0.8 x 15 x 0.25
- 0.8 x 15 = 12
- F = 12 x 0.25 = **3 N**

**Worked example 2.** The armature of a small d.c. motor has 200 such
conductors in the field at any instant, under the same conditions.

- Total force = 200 x 3 = **600 N**

**Worked example 3.** The same single conductor, but lying at 30 degrees to the
flux.

- F = B x I x l x sin(theta) = 0.8 x 15 x 0.25 x sin 30
- sin 30 = 0.5
- F = 3 x 0.5 = **1.5 N**

**Worked example 4 — sizing a lifting magnet coil's field.** Suppose a
loudspeaker voice coil of total conductor length 4 m sits in a 1.2 T gap and
carries 2 A peak.

- F = 1.2 x 2 x 4 = **9.6 N**

Reverse the current and the force reverses — which is exactly what an audio
signal does thousands of times a second, driving the cone in and out and
producing sound.

**Fleming's left-hand rule (motors)** gives the direction: left hand, first
finger for field, second finger for current, and the thumb then shows the
direction of motion. Right hand for generators, left hand for motors.

## Eddy currents: the same law in solid metal

A changing field passing through any conductive lump induces circulating
currents inside it. They obey Lenz's law, so they oppose the change. Depending
on the application they are a curse or a tool:

| Where | Effect | Response |
|---|---|---|
| Transformer and motor cores | Wasted heat | Laminate the core; use iron powder or ferrite at high frequency |
| Eddy current brakes and retarders | Controlled, wear-free braking force | Deliberately induced in a rotating disc |
| Induction hobs and induction heating | Heat generated directly in the pot or workpiece | Deliberate |
| Metal detectors, traffic loops, ferrous separators | Detection of nearby metal | Deliberate |
| Eddy current NDT probes | Cracks and thickness variation change the induced current pattern | Deliberate |
| Switchboard gland plates and cable entries | Circulating currents and heating around single-core cables | Slot the plate, or use a non-ferrous plate |

**Eddy current sensors** deserve a note because they turn up in condition
monitoring. An a.c. coil produces a primary field; near a conductive target,
eddy currents are induced which produce a secondary field opposing the primary
(Lenz again), and the resulting change in coil impedance is measured. They see
through oil, dirt, dust and moisture because those are non-conductive, which
makes them robust in industrial settings, but they cannot see through metal.
The depth eddy currents penetrate depends on frequency, conductivity and
permeability: high frequency, high conductivity and high permeability all
concentrate the currents near the surface, while low frequency reaches deeper.
Practically, the field technician chooses a low frequency to find sub-surface
flaws and a high frequency for surface cracking.

## Magnetic arc extinction

When switching contacts open under load, the current tries to keep flowing and
draws an arc. An **arc-suppression blowout coil** carries the load current
through a coil wound on steel pole pieces either side of the contacts,
producing a magnetic field roughly perpendicular to the arc. The arc is itself a
current in a magnetic field, so F = BIl applies to it: the force drives the arc
sideways and upwards into an **arc chute**, stretching it, cooling it against the
chute plates and extinguishing it. Because the blowout field is produced by the
load current itself, the harder the circuit is working the harder the arc is
blown out. This is standard practice in d.c. contactors and circuit-breakers,
where there is no current zero to help quench the arc.

## What to remember

- Lenz: the induced effect always opposes the change that caused it.
- Rising current is slowed, falling current is sustained — and interrupting an
  inductive circuit produces dangerous voltage spikes.
- F = BIl (times sin theta if not at right angles) is the motor principle.
- Left hand for motors, right hand for generators.
- Eddy currents are Lenz's law in a solid conductor: a loss to be laminated
  away, or a tool to be exploited.
`,
        quiz: [
          {
            q: "A continuous aluminium ring swings away when a magnet is pushed towards it, but an identical ring with a saw cut in it does not move at all. Why?",
            options: [
              "The saw cut changes the aluminium from paramagnetic to diamagnetic",
              "The saw cut breaks the circuit so no eddy current can circulate, so no opposing field is created",
              "The split ring has a higher reluctance so the flux avoids it",
              "The split ring is attracted and repelled equally, so the forces cancel",
            ],
            answer: 1,
            explain: "The force comes from a circulating induced current, not from the aluminium being magnetic — aluminium is effectively non-magnetic either way. Break the electrical loop and there is no current, hence no opposing field and no force. The same trick is used with slotted gland plates on switchboards.",
          },
          {
            q: "A conductor 0.4 m long carries 20 A at right angles in a flux density of 0.5 T. The force on it is:",
            options: [
              "4 N",
              "10 N",
              "40 N",
              "0.4 N",
            ],
            answer: 0,
            explain: "F = BIl = 0.5 x 20 x 0.4 = 4 N. If the conductor lay at an angle to the field you would multiply by sin(theta), reducing the force; along the field lines the force would be zero.",
          },
          {
            q: "Why does a d.c. contactor coil need a flywheel diode or other suppression across it?",
            options: [
              "To limit the inrush current when the coil is first energised",
              "Because interrupting the current collapses the field and induces a voltage many times the supply, which arcs contacts and destroys electronics",
              "To hold the armature in when the supply dips",
              "To prevent the coil from saturating its core",
            ],
            answer: 1,
            explain: "Lenz's law says a falling current induces an EMF that tries to maintain it. With a fast interruption the rate of change is enormous, so the self-induced voltage can be hundreds of volts from a 24 V supply. Suppression gives that current a path to decay through. Inrush and saturation are separate issues and are not what the diode addresses.",
          },
          {
            q: "An arc blowout coil extinguishes an arc by:",
            options: [
              "Cooling the contacts with a magnetic refrigerant effect",
              "Cancelling the load current so the arc has nothing to carry",
              "Applying a magnetic field across the arc so that the F = BIl force drives it into an arc chute where it is stretched and cooled",
              "Attracting the moving contact back into position faster",
            ],
            answer: 2,
            explain: "The arc is a current path in a magnetic field, so it experiences the same force as any current-carrying conductor. Driving it into the chute lengthens and cools it until it cannot sustain itself. This matters most on d.c., where there is no natural current zero to help.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "inductance-and-inductors",
        title: "Inductance, self and mutual induction, stored energy and time constants",
        minutes: 14,
        simple: "A coil resists changes to the current through it, the way a heavy flywheel resists changes of speed. It does this by storing energy in its magnetic field and giving it back when the current tries to fall. If a second coil sits nearby it picks up the changing field too, and that is a transformer.",
        refs: REFS_INDUCTANCE,
        content: `
An **inductor** is a passive component — usually a coil, often on a magnetic
core — whose defining behaviour is that it opposes any *change* in the current
through it. Chokes, ballasts, ignition coils, relay and contactor coils, motor
windings and transformer windings are all inductors, and understanding
inductance explains their inrush, their kick, their heat and their time delays.

Two words that get muddled: **inductance** is the property; **induction** is the
process by which that property does its work.

## The henry

The unit of inductance is the **henry (H)**, symbol L. One henry is the
inductance of a closed circuit in which an EMF of one volt is produced when the
current changes uniformly at the rate of one ampere per second. In equation
form:

V = L x (change in current) / (change in time)

**Worked example 1.** The current in a 1.5 H inductor falls uniformly from 5 A
to 1 A in 0.5 s. Find the induced EMF.

- Change in current = 5 - 1 = 4 A
- V = L x (change in current) / (change in time) = 1.5 x (4 / 0.5)
- 4 / 0.5 = 8 A per second
- V = 1.5 x 8 = **12 V**

**Worked example 2.** A 10 H inductor carrying 5 A has its current taken to zero
in 0.2 s.

- V = 10 x (5 / 0.2) = 10 x 25 = **250 V**

Note that this 250 V appears across the terminals of a coil that might be fed
from a 24 V supply. Do it in 2 ms instead of 0.2 s and it is 25 000 V. That is
an ignition coil.

## Inductance from flux and current

L = N x (change in flux) / (change in current)

**Worked example 3.** A coil of 100 turns carries a current that falls from
5 A to zero, and the flux alters by 300 mWb. Find the inductance.

- L = N x (change in flux) / (change in current)
- L = 100 x (300 x 10 to the power minus 3) / 5
- 100 x 0.3 = 30
- L = 30 / 5 = **6 H**

**Worked example 4.** A 200-turn coil, current 5 A to 0 A, flux change 200 mWb.

- L = 200 x 0.2 / 5 = 40 / 5 = **8 H**

## Inductance from physical construction

L = (N squared x mu-zero x mu-r x A) / l

where N is turns, A the core area in square metres and l the coil length in
metres. The same relationship can be written using reluctance, which is often
tidier:

L = N squared / R-m

Four factors, therefore, determine inductance:

1. The **core material** (through mu-r) — by far the biggest lever.
2. The **number of turns**, which enters as N **squared** — double the turns and
   you quadruple the inductance.
3. The **cross-sectional area** of the coil — bigger area, more inductance.
4. The **length** of the coil — a short, fat coil has more inductance than a
   long, thin one with the same number of turns.

**Worked example 5.** A coil of 500 turns is wound over a length of 100 mm on a
core of area 400 square millimetres with mu-r = 800.

- N squared = 500 x 500 = 250 000
- 250 000 x 1.2566 x 10 to the power minus 6 = 0.3142
- Times mu-r: 0.3142 x 800 = 251.3
- Times area: 251.3 x 4 x 10 to the power minus 4 = 0.1005
- Divide by length: 0.1005 / 0.1 = **about 1.0 H**

## Self-inductance

**Self-inductance** is a conductor or coil inducing a voltage in *itself*.

- Steady current, steady field, no relative motion, no induced voltage.
- Increasing current: the field expands outwards past the conductor. That is
  relative motion, so a voltage is induced — and by Lenz's law it opposes the
  increase. This is **back EMF**.
- Decreasing current: the field collapses inwards past the conductor, inducing a
  voltage that tries to maintain the current.

The behaviour at switch-on and switch-off is not symmetrical, and the difference
is what catches people out:

- At **switch-on**, the maximum self-induced voltage is always **less** than the
  applied voltage — otherwise no current could ever start.
- At **switch-off**, the self-induced voltage can be **many times** the applied
  voltage, because the rate of collapse is set by how fast the switch opens, not
  by the supply. In theory it is limited only by the resistance of the coil and
  whatever the arc or the insulation will stand.
- The largest induced voltages occur where the current curve is steepest, that
  is where the rate of change is greatest.
- Where the current is not changing, there is no self-induced voltage at all.

## Mutual inductance and the transformer effect

**Mutual inductance** is one conductor or coil inducing a voltage in a *separate*
one, with no electrical connection between them. Two parallel conductors, AB
with a battery and switch and CD with a centre-zero millivoltmeter, demonstrate
it exactly:

1. **Close the switch.** Current builds in AB and its field expands outwards
   across CD. Relative motion exists, so a voltage is induced in CD and the
   meter kicks positive.
2. **Steady current.** The field around AB is fixed, there is no relative motion
   and the meter reads zero, even though a large current is still flowing.
3. **Open the switch.** The field collapses back across CD, the relative motion
   reverses, and the meter kicks the other way.

AB is the **primary winding** because it is connected to the source; CD is the
**secondary** because its EMF is induced. Swap the supply and the names swap
with it. Replace the two conductors with two coils on a common core and you have
a transformer — and if the primary current is continuously reversing, as it is
on a.c., the secondary current never stops. That is why transformers work on
a.c. and do nothing at all on steady d.c.

## Energy stored in the magnetic field

W = 0.5 x L x I squared

with W in joules, L in henrys and I in amperes.

**Worked example 6.** A 10 H electromagnet carries 5 A. Find the stored energy.

- W = 0.5 x 10 x 5 squared
- 5 squared = 25
- W = 0.5 x 10 x 25 = **125 J**

**Worked example 7.** A 12 H electromagnet carries 3 A.

- W = 0.5 x 12 x 9 = **54 J**

That energy is real and it comes back out very fast if the circuit is broken.

>! A large inductor fed from something as ordinary as a vehicle battery can
>! produce a lethal voltage across its terminals when the circuit is opened.
>! Treat charged inductors — d.c. machine fields, large chokes, lifting magnets —
>! as stored-energy hazards. Isolate, discharge through the manufacturer's
>! discharge resistor, and prove dead before touching terminals.

## Time constants

Put an inductor in series with a resistor across a d.c. supply and the current
cannot jump to its final value. The final value is set by Ohm's law, but the
approach to it is exponential with a time constant:

tau = L / R, in seconds

| Time constant | Percentage of final current | Cumulative behaviour |
|---|---|---|
| 1 | 63.2% | The standard definition of tau |
| 2 | 86.5% | |
| 3 | 95.0% | |
| 4 | 98.2% | |
| 5 | 99.3% | Treated as fully charged |

**Worked example 8.** A 1 H choke has an internal resistance of 25 ohms. Find
the time constant.

- tau = L / R = 1 / 25 = 0.04 s = **40 ms**
- Five time constants: 5 x 40 ms = **200 ms** to reach full current

**Worked example 9.** A 10 H electromagnet with an internal resistance of
50 ohms carries 5 A. Find the time to discharge fully.

- tau = 10 / 50 = 0.2 s
- 5 tau = 5 x 0.2 = **1 second**

**Worked example 10.** An inductor with a d.c. resistance of 35 ohms takes 0.8 s
to reach 63.2% of full current. Find its inductance.

- 63.2% in 0.8 s means tau = 0.8 s
- L = tau x R = 0.8 x 35 = **28 H**

**Worked example 11.** A 0.8 H inductor with 10 ohms internal resistance is
connected to a 12 V battery. Find the maximum current.

- Once the current is steady the inductance has no effect, so I = V / R
- I = 12 / 10 = **1.2 A**
- It reaches that in 5 x (0.8 / 10) = 5 x 0.08 = 0.4 s

Greater inductance or lower resistance means a longer time constant. If the
maximum current is 10 A, the current at each time constant is 6.32 A, 8.64 A,
9.5 A, 9.82 A and 9.93 A.

## Inductor types, cores and symbols

| Form | Description | Typical use |
|---|---|---|
| Straight or line type | A straight conductor of chosen length | UHF antennas and radio circuitry |
| Loop | A single turn; field concentrated inside the loop | Sensing loops, small chokes |
| Air-core solenoid | Multi-turn coil, no magnetic core, no core losses | Any frequency, but limited energy at low frequency |
| Magnetic-core solenoid | Coil with an iron or ferrite core, much higher L | Relays, plunger solenoids, chokes, ballasts |
| Toroidal core | Closed ring core; almost no external field | Efficient, compact, low-noise transformers and chokes |
| Multi-coil | Two or more coils sharing a core — mutual inductance | Transformers, ignition coils, instrument transformers |

Core choices follow from the B/H lesson: air cores have no core losses but low
inductance for their size; ferrite or iron-powder cores keep eddy losses tiny at
high frequency and are often adjustable for tuning; laminated iron is the
workhorse at 50 Hz; solid iron is limited to d.c. pole pieces below about 5 Hz.

On Australian standard drawings the general coil symbol is used for all of
them. A solid bar drawn beside the coil indicates a magnetic core and a dashed
bar indicates a ferrite core; with no bar it is normally an air core, though the
bar is strictly only added when a drawing needs to distinguish cored from
uncored coils. A **bifilar** winding — two closely spaced insulated windings
wound together — is drawn as two parallel coils; connect them so the fields aid
and you magnify the effect, connect them so the fields oppose and they cancel,
which is how bifilar windings are used to suppress back EMF.

Relays and plunger solenoids use magnetic cores for two reasons: more force for
a given coil, and lower current once the plunger is home.

## What to remember

- L opposes change in current, not current itself.
- V = L x (change in I) / (change in t); the fast changes make the big voltages.
- L = N squared / R-m, so turns count double and the core does the heavy lifting.
- W = 0.5 L I squared joules of stored energy come back out on interruption.
- tau = L / R; five time constants to settle, either way.
- Mutual inductance between coils on a shared core is the transformer.
`,
        quiz: [
          {
            q: "A coil is rewound with twice the number of turns on the same core, over the same length. Its inductance becomes:",
            options: [
              "Twice the original",
              "Four times the original",
              "Half the original",
              "Unchanged, because the core is the same",
            ],
            answer: 1,
            explain: "L = N squared / R-m, so inductance goes with the square of the turns — doubling N quadruples L. This is also why a few shorted turns in a winding change its behaviour so dramatically.",
          },
          {
            q: "A 2 H inductor carrying 4 A has its supply interrupted, the current falling to zero in 10 ms. The average induced EMF is:",
            options: [
              "8 V",
              "80 V",
              "800 V",
              "0.8 V",
            ],
            answer: 2,
            explain: "V = L x (change in I / change in t) = 2 x (4 / 0.01) = 2 x 400 = 800 V. From an ordinary low-voltage supply this is exactly the kind of spike that welds contacts and destroys electronics, which is why inductive loads need suppression.",
          },
          {
            q: "A 0.5 H coil with 20 ohms resistance is switched onto a 40 V d.c. supply. Which statement is correct?",
            options: [
              "The current reaches 2 A instantly, then decays",
              "The time constant is 0.025 s and the current reaches about 1.26 A after one time constant, settling at 2 A in about 0.125 s",
              "The time constant is 40 s because L x R = 10",
              "No current flows until the field has fully expanded",
            ],
            answer: 1,
            explain: "Final current is set by Ohm's law: 40 / 20 = 2 A. tau = L / R = 0.5 / 20 = 0.025 s, and one time constant gives 63.2% of 2 A = 1.26 A. Five time constants (0.125 s) is treated as fully charged. Inductance delays the rise, it does not block it.",
          },
          {
            q: "Two coils share a laminated core. The primary carries a large but perfectly steady d.c. current. What voltage appears at the secondary?",
            options: [
              "A large d.c. voltage proportional to the turns ratio",
              "None, because a steady current gives a steady field and there is no relative motion",
              "A voltage equal to the primary voltage, since the coils are magnetically coupled",
              "An alternating voltage at the core's natural frequency",
            ],
            answer: 1,
            explain: "Mutual induction needs a changing flux. Steady d.c. gives a steady field, so nothing is induced once the initial build-up is over — the meter kicks at switch-on and again at switch-off, and reads zero in between. That is precisely why transformers require a.c.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "relays-contactors-solenoids",
        title: "Relays, contactors, solenoids and industrial electromagnets",
        minutes: 12,
        simple: "Feed current into a coil wrapped round iron and you get a magnet you can switch. Use it to drag a hinged lever and you have a relay or contactor that turns other circuits on. Use it to suck a sliding rod into the middle of the coil and you have a solenoid that opens valves, releases brakes or lifts scrap steel.",
        refs: REFS_DEVICES,
        content: `
Electromagnets do almost everything permanent magnets do, with one enormous
advantage: you can switch them on and off, vary their strength with current, and
even make their poles alternate at 50 Hz. Everything in this lesson is an
application of the magnetic circuit you have already learned to calculate.

## The three families of electromagnetic device

| Family | How it works | Typical examples |
|---|---|---|
| Tractive | The electromagnet attracts a hinged armature, which operates attached contacts | Relays, contactors, a.c. bells and buzzers |
| Solenoid | The coil surrounds a sliding plunger that is drawn into the coil | Solenoid valves, starter solenoids, brake and clutch actuators, linear actuators |
| Lifting | Pole faces attract ferrous material for transport or separation | Scrap-handling magnets, magnetic separators, magnetic chucks |

## Relays and contactors

Relays and contactors work identically. The difference is duty: relays switch
small control currents, while contactors switch load currents to motors, heaters
and other plant. Both consist of:

- A **coil** wound on a former.
- A fixed iron core, the **stator**, on which the coil sits.
- A moving iron part, the **armature**.
- A **return spring** holding the armature clear of the stator when de-energised.
- One or more sets of **contacts**, some fixed and some carried on the armature.

Energise the coil and flux is established around the iron circuit, through the
armature and across the air gap. The stator and armature become magnetised with
opposite polarities facing each other, so they attract. The force overcomes the
spring, the armature slams closed and the contacts change state — normally open
contacts close and normally closed contacts open. De-energise, and the spring
returns everything.

The magnetic-circuit arithmetic from the earlier lesson explains the behaviour
completely. With the armature open there is a large air gap and therefore a very
high reluctance, so a given MMF produces relatively little flux and only a modest
pull. Once the armature closes, the gap disappears, the reluctance falls to that
of the iron alone, and the force at the pole face becomes many times greater
than it was in the open position. That is why a contactor needs far more MMF to
pull in than to hold in.

!FIG[ladder-rung]

Practical points that follow from this:

- **Contacts and coils are different circuits.** The coil is the control
  circuit; the contacts carry the load. Contactor coils are commonly 24 V, 110 V
  or 230 V, and auxiliary contacts are used for hold-in (latching) circuits and
  interlocks.
- **N.O. and N.C.** — normally open and normally closed always refer to the
  de-energised, at-rest state. Contactors are mostly N.O. main contacts plus
  auxiliaries of both kinds.
- **Shading rings.** An a.c. coil's flux passes through zero 100 times per
  second, so the pull-in force does too and the armature would buzz and chatter.
  A copper shading ring set into part of the pole face carries an induced
  current that lags the main flux, keeping some flux in that part of the face at
  every instant. A cracked or missing shading ring is the classic cause of a
  loudly buzzing contactor.
- **Dirty pole faces.** Rust, paint, grit or a bent armature leave a residual
  air gap. The reluctance stays high, the contactor never seals, and the coil
  draws its high pull-in current continuously and burns out.
- **Coil failure modes.** Undervoltage (fails to pull in, or chatters),
  overvoltage and overheating (open circuit or shorted turns), and mechanical
  obstruction.
- **Leakage and fringing** are always present at the working gap and are part of
  the reason real devices need more MMF than a first-pass calculation suggests.

>! Always isolate and prove dead before working on a contactor. Control circuits
>! are frequently fed from a different source than the load, so a de-energised
>! motor circuit can still have live control wiring at the contactor terminals.
>! Never defeat a contactor's mechanical interlock or hold an armature in by
>! hand to test a circuit.

## Solenoids and solenoid valves

A solenoid converts electrical energy into straight-line mechanical work. Its
parts are a coil wound on a tube, a ferrous housing that concentrates the flux
around the coil, and a movable plunger that is pulled into the coil when it is
energised. Rotary solenoids do the same thing through a helical cam to give
angular movement, and linear electromechanical actuators do it over longer
strokes.

The commonest example on site is the **solenoid valve**: valve body, inlet and
outlet ports, coil and windings, plunger, spring, orifice and lead wires. With
the coil de-energised, the spring drives the plunger onto the seat and the valve
is shut. Energise the coil and the plunger is drawn up off the orifice, letting
line pressure push the fluid through. Washing machine and dishwasher water
valves, refrigeration liquid-line solenoids and pneumatic control valves all
work this way.

Points that matter in the field:

- Most solenoid valves need a minimum pressure differential to operate, and many
  are direction-sensitive — fit them the way the arrow points.
- The plunger seals the orifice; the coil only moves it. A valve that hums but
  will not open is usually a mechanical or pressure problem, not a coil problem.
- A coil can be tested for continuity and resistance off-load; a solenoid coil
  removed from its plunger and left energised will overheat quickly, because the
  air gap keeps the current high.

## Industrial electromagnets

- **Lifting magnets.** A large d.c. electromagnet on a crane picks up scrap
  steel — sometimes many tonnes, including whole vehicles — and drops it by
  being de-energised. Safer than slings, which jagged scrap would destroy.
- **Magnetic separators.** A conveyor discharge drum is magnetised, so ferrous
  material clings around the underside of the drum and drops into a separate
  bin while non-ferrous material flies off into the main bin. A variant uses an
  alternating field to induce eddy currents in non-ferrous metals such as
  aluminium, brass and copper, so those are thrown clear instead.
- **Electromagnetic brakes.** On a crane hoist, a solenoid releases a spring-
  applied brake when the lifting motor is energised. Cut the power and the
  spring re-applies the brake automatically, so a supply failure cannot drop the
  load. This fail-safe arrangement is the norm for lifting. Other brakes work the
  opposite way, applying only when energised, for service braking duty.
- **Electromagnetic clutches.** A motor keeps a heavy flywheel spinning and the
  clutch engages the load for one revolution — a guillotine or press is the
  classic example, where the flywheel supplies the energy for the cut and the
  motor restores the speed afterwards. One motor can drive several functions
  through separate clutches.
- **Electromagnetic chucks.** Work is held to a machine table by an energised
  magnet, giving consistent clamping and reduced vibration for drilling, milling,
  turning and grinding. The great disadvantage is that the supply must be
  utterly reliable, because losing the magnet during a cut can wreck the machine.
  For that reason they tend to be used to add security to a job that would not
  move much anyway.
- **Bells and buzzers.** A tractive electromagnet attracts an armature carrying
  a striker; on a trembler bell the movement opens a contact in the coil circuit,
  the armature falls back, the contact remakes, and the cycle repeats rapidly.
- **Loudspeakers.** A permanent magnet supplies a fixed radial field in an air
  gap; the voice coil attached to the cone sits in that gap. The amplifier drives
  a varying audio current through the coil, and F = BIl produces a force that
  reverses as the signal swings positive and negative, so the cone moves in and
  out and pushes air. Same physics as a motor, and the same physics as two
  current-carrying conductors attracting and repelling.

## On the job

- Pull-in MMF is high and sealed MMF is low because of the air gap — so anything
  that stops the armature closing cooks the coil.
- Fail-safe design puts the spring where you want the safe state: brakes applied
  and valves shut with the power off.
- Always check the coil voltage rating and whether the coil is a.c. or d.c.
  before replacing it; a d.c. coil on a.c. will overheat and an a.c. coil on d.c.
  draws far too much current because only its resistance limits it.
- Buzzing usually means a mechanical gap or a failed shading ring, not a
  "noisy coil".
`,
        quiz: [
          {
            q: "A 230 V a.c. contactor buzzes loudly and its coil runs very hot, though the contacts do appear to close. What is the most likely cause?",
            options: [
              "The supply voltage is too high",
              "A damaged shading ring or dirt on the pole faces, leaving a residual air gap so the armature never seals",
              "The load current is too low for the contactor rating",
              "The contacts are welded closed",
            ],
            answer: 1,
            explain: "A contactor that cannot fully close keeps a high-reluctance gap, so the coil never drops to its sealed current and overheats; the a.c. flux zero crossings then produce chatter. A failed shading ring gives the same buzz. Welded contacts would not stop the armature sealing, and low load current is irrelevant to the coil.",
          },
          {
            q: "On a crane hoist, the holding brake is spring-applied and released by a solenoid. Why is it arranged this way?",
            options: [
              "It uses less energy than a spring-released brake",
              "It gives smoother braking than an electrically applied brake",
              "So that any loss of supply automatically applies the brake and the load cannot fall",
              "Because solenoids can only push, not pull",
            ],
            answer: 2,
            explain: "This is fail-safe design: the safe state must be the de-energised state. The spring is the energy source that is always available, and the solenoid only holds the brake off while power is present. Energy consumption and braking smoothness are secondary to the safety requirement.",
          },
          {
            q: "The force between the stator and armature of a relay is much greater when the armature is closed than when it is fully open. Why?",
            options: [
              "The coil current increases once the armature closes",
              "Closing the armature removes the air gap, sharply reducing the total reluctance so the same MMF drives much more flux",
              "The armature becomes a permanent magnet once it touches the stator",
              "Fringing increases as the gap closes, concentrating the flux",
            ],
            answer: 1,
            explain: "Flux equals MMF divided by reluctance, and one millimetre of air can outweigh the entire iron path. Removing the gap collapses the reluctance and multiplies the flux. On a.c. coils the current actually falls once sealed, because the winding impedance rises; and fringing decreases, not increases, as the gap closes.",
          },
          {
            q: "In a solenoid valve for a washing machine, what actually holds the valve shut when it is de-energised?",
            options: [
              "Residual magnetism in the plunger",
              "The return spring pressing the plunger onto the orifice",
              "The weight of the water above the valve",
              "The coil, which is energised in the closed position",
            ],
            answer: 1,
            explain: "The spring is the de-energised, fail-safe state: it seats the plunger on the orifice. The coil only lifts the plunger clear when energised. Residual magnetism in a well-designed valve is deliberately kept small so the valve closes reliably.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "magnetic-sensing-and-instruments",
        title: "Magnetic sensing devices and measuring instruments",
        minutes: 12,
        simple: "Because a magnetic field can be felt without touching anything, it is perfect for sensing and measuring. Meters use a coil pushing against a magnet to swing a needle; a clamp meter reads the field around a cable without breaking the circuit; and hearing loops send sound to a hearing aid through a magnetic field in the floor.",
        refs: REFS_INSTRUMENTS,
        content: `
Every instrument an electrician carries relies on magnetism somewhere. The
analogue movements still found on panel meters, the clamp meter in your bag and
the current transformers in every switchboard are all applications of the
principles in this module. So is a whole family of solid-state sensors that keep
industry running.

## Analogue meter movements

### Moving-coil (D'Arsonval) movement

A light rectangular coil is pivoted between the poles of a permanent magnet, on
jewelled bearings or a taut band, with a hairspring to provide restoring torque
and a pointer attached. Current through the coil creates its own field; that
field reacts with the permanent magnet's field and the coil rotates until the
deflecting torque equals the spring torque.

- Deflection is directly proportional to current, so the **scale is linear**.
- It is inherently a **d.c. instrument**. Apply a.c. and the movement tries to
  swing both ways 100 times per second, so the pointer sits still. To read a.c.
  the input must be rectified first, and the meter then indicates **average**
  values.
- The magnetic circuit has two air gaps, one at each pole face.
- Extremely sensitive — the same movement as a galvanometer, which is why it was
  the standard laboratory detector for induced currents.

### Moving-iron movement

Two magnetically soft iron vanes sit inside a fixed coil, one anchored and one
on the spindle with the pointer. Current in the coil magnetises both vanes with
**like poles adjacent**, so they repel and the moving vane swings against a
restraining spring.

- Because both vanes reverse together when the current reverses, the repulsion
  is always in the same direction — so a moving-iron meter works on **a.c. or
  d.c.** without a rectifier and indicates rms values.
- Force depends on the square of the current, so the **scale is non-linear**,
  crowded at the low end.
- Robust and cheap, which is why it was the standard panel ammeter for decades.

### Dynamometer movement

Two circuits instead of one: a fixed low-resistance current coil (often on a
soft iron core, sometimes air-cored) producing a flux proportional to load
current, and a moving coil in series with a high resistance producing a flux
proportional to load voltage. Deflection is proportional to the product of the
two, which is power — and because both fields reverse together, it works on a.c.
and d.c. Crucially, it takes account of any phase displacement between voltage
and current, so it reads **true power**, not the product of voltmeter and
ammeter readings. That is the wattmeter movement.

## Instrument transformers

Voltage (potential) transformers, VTs or PTs, step the supply voltage down to a
safe standard level for metering and protection, typically 110 V. Current
transformers, CTs, step the line current down to a standard secondary of 1 A or
5 A. Both work purely on mutual inductance, with the ratio set by the turns.

>! Never open-circuit the secondary of a live current transformer. With no
>! secondary current there is no opposing MMF, the core is driven hard into
>! saturation and dangerously high voltages appear across the open terminals.
>! Short the CT secondary before disconnecting a meter from it.

## Clamp meters

A clamp meter measures current without breaking the circuit. The cable under
test acts as a one-turn primary; the hinged ferrite or iron jaws, wound with a
secondary coil, close to form the magnetic circuit.

| Type | Measures | Principle |
|---|---|---|
| Current transformer jaws | a.c. only | The jaws form a transformer core around the conductor |
| Flexible coil (Rogowski) | a.c. only | An air-cored helical coil; no iron, so no saturation, and it can wrap large or awkward busbars |
| Hall-effect jaws | a.c. and d.c. | A Hall element in a deliberate air gap in the jaws produces a voltage proportional to the flux |

Older instruments used either a moving-iron repulsion movement with plug-in
range modules (usable on a.c. and d.c.) or a transformer with tapped windings
and a range switch (a.c. only, since a transformer will not respond to steady
d.c.). Adding a rectifier and a moving-coil indicator gave the transformer type
a linear scale.

Practical points:

- The jaw faces must be **clean and fully closed**. Any residual gap adds
  reluctance and reads low; grit on the mating faces is the commonest cause of
  odd readings.
- Clamp **one conductor only**. Clamp both the active and neutral of a single
  phase circuit and the two fields nearly cancel, giving almost zero — which is,
  incidentally, exactly how a residual current device detects earth leakage.
- The Hall-effect type needs a zero adjustment on d.c. ranges before use.
- For very small currents, wrap several turns of the conductor through the jaws
  and divide the reading by the number of turns.

## Voltage testers

Two different physical effects are used:

- **Inductively coupled** testers have a sensor winding in the tip. A changing
  electromagnetic field induces a voltage in it, so they respond to circuits that
  are actually carrying current. They will not detect a live conductor that is
  carrying no current, because there is no moving charge to make a field.
- **Capacitively coupled** testers respond to the electric field around a
  conductor at a.c. voltage, so they detect a live but unloaded conductor. This
  is the basis of the non-contact "volt stick" and of cable finders that locate
  conductors buried in walls to a depth of a couple of centimetres. Most give
  both audible and visual indication.

>! Non-contact testers are indicators, not proving devices. They can be fooled by
>! screened cable, by capacitively coupled dead conductors and by flat batteries.
>! Prove dead with an approved two-pole tester, using the prove-test-prove
>! sequence, before touching conductors.

## Solid-state magnetic sensors

### Hall-effect devices

Discovered by Edwin Hall in 1879. A Hall element is a transducer that produces a
voltage proportional to the flux density passing through it and sensitive to
polarity. A practical Hall IC packages the element with a linear amplifier and
an output stage, so the output is a usable signal or a clean switching action
once a preset flux threshold is exceeded. Uses include:

- Position, proximity and end-of-travel sensing.
- Speed sensing from a toothed wheel. A **notch sensor** detects the presence of
  ferrous material; a **gear tooth sensor** detects the gaps between teeth, and
  the two use opposite magnet polarities.
- Brushless d.c. motor commutation, ABS wheel speed, ignition timing, seat and
  seat-belt position for airbag control, tachometers.
- Contactless current measurement in clamp meters and current sensors.

### Magnetostriction devices

Magnetostriction is the small change of shape a ferromagnetic material undergoes
when it is magnetised, caused by domain boundaries shifting. The changes may be
longitudinal (along the applied field), transverse (across it) or volumetric.
Terfenol-D, a terbium-iron compound, is the best known magnetostrictive
material. Applications include audio-frequency oscillators, actuators,
transducers and position sensors, and the ferromagnetic anti-theft labels on
shop goods and library books, which resonate against a transmitted pulse (around
58 kHz) to trip the alarm.

### Reed switches and magnetic sensing generally

Reed switches remain the cheapest magnetic sensor: contacts sealed in an inert
gas capsule, closed by an approaching permanent magnet or coil. Alarm door and
window contacts, level switches and position sensors all use them. Magnetic and
inductive sensors as a family are popular because they are non-contact, fast,
sensitive, cheap and tolerant of dirty environments.

## Induction loops

An induction loop is a large single-turn (or few-turn) inductor laid in or under
a floor or road.

- **Vehicle detection and traffic-light control**: a car chassis entering the
  loop changes the loop's inductance, and the change is detected. Metal
  detectors use the same idea, as did the submarine detection loops laid across
  harbour entrances in both world wars — one gave the first warning of the
  midget submarine attack on Sydney Harbour in 1942.
- **Hearing augmentation**: an audio-frequency induction loop (AFIL), or hearing
  loop, drives an audio signal as current around a loop of flat copper tape or
  wire run around a room. The resulting magnetic field induces a signal directly
  into the **telecoil** — a tiny coil on an iron core, also called a T-coil or
  T-switch — inside a hearing aid or cochlear implant, with no background noise
  and no line of sight. Field strength depends on the current in the loop,
  which is the same current-and-flux relationship as everywhere else in this
  module.

A hearing loop system has four parts: an audio source, a loop amplifier, the
loop itself, and the listener's hearing device. Loops are installed in theatres,
lecture halls, places of worship, meeting rooms, transport terminals, lifts,
taxis, help points and service counters. Steel reinforcement in the floor
absorbs the field and is the main installation problem — areas more than about
6 m wide over reinforced concrete need multiple loops and a phase shifter.
Design, installation and testing of hearing augmentation systems in Australia
follow **AS 1428.5**, and the two competing technologies are radio-frequency
(FM) and infrared systems.

## What to remember

- Moving coil: d.c. only, linear scale, permanent magnet plus pivoted coil.
- Moving iron: a.c. or d.c., non-linear scale, repulsion between two vanes.
- Dynamometer: two coils, reads true power on a.c. or d.c.
- CT secondaries must never be opened while energised.
- Clamp meters: CT and Rogowski for a.c., Hall effect for a.c. and d.c.
- Hall, magnetostrictive, eddy current and reed sensors all turn a magnetic
  condition into an electrical signal without contact.
`,
        quiz: [
          {
            q: "Why does a plain moving-coil movement read nothing when connected directly to a 50 Hz a.c. supply?",
            options: [
              "The coil impedance is too high at 50 Hz",
              "The permanent magnet demagnetises on a.c.",
              "The deflecting torque reverses 100 times per second and the movement cannot follow, so the pointer stays put",
              "The hairspring resonates and cancels the deflection",
            ],
            answer: 2,
            explain: "The torque direction depends on the current direction, so on a.c. it alternates faster than the mechanism can respond and the average deflection is zero. To read a.c., the input is rectified first, and the instrument then indicates average values. A moving-iron meter has no such problem because both vanes reverse together.",
          },
          {
            q: "A technician clamps a Rogowski coil around a busbar carrying steady d.c. and reads zero. What is happening?",
            options: [
              "The coil is faulty and should be replaced",
              "Rogowski coils respond only to a changing field, so they measure a.c. only; a Hall-effect instrument is needed for d.c.",
              "The busbar is too large for the coil",
              "The coil must be closed around both the outgoing and return conductors",
            ],
            answer: 1,
            explain: "A Rogowski coil is an air-cored coil that works by induction, so it needs a changing flux. Steady d.c. produces a steady field and no induced voltage. Only the Hall-effect type, which senses flux density directly in an air gap, reads d.c. Clamping both conductors would give a near-zero reading on any type.",
          },
          {
            q: "A current transformer's secondary must never be open-circuited while the primary is energised because:",
            options: [
              "The secondary current would rise to a dangerous level",
              "With no secondary MMF to oppose it, the core saturates and very high voltages appear at the open secondary terminals",
              "The primary would draw excessive current from the supply",
              "The core would demagnetise permanently",
            ],
            answer: 1,
            explain: "In normal operation the secondary current produces an opposing MMF that keeps the core flux low. Open the secondary and nothing opposes the primary MMF, so the core is driven hard into saturation and the flux changes violently at each zero crossing, inducing dangerous peak voltages. Short the secondary before disconnecting a meter.",
          },
          {
            q: "A hearing loop delivers sound to a hearing aid by:",
            options: [
              "Radio transmission at 58 kHz to a receiver in the aid",
              "An infrared beam from the ceiling",
              "A magnetic field from a current-carrying loop, inducing a signal in the telecoil inside the hearing device",
              "Ultrasonic vibration of the floor structure",
            ],
            answer: 2,
            explain: "The loop amplifier drives an audio-frequency current around a loop of wire; the resulting changing magnetic field induces a corresponding voltage in the tiny iron-cored telecoil in the aid. RF (FM) and infrared systems are the alternative hearing augmentation technologies, but they are not how a loop works. Steel reinforcement in floors absorbs the field and is the main installation obstacle.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
