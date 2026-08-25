/* =========================================================================
   Course content, module 102 — Refrigeration and air-conditioning compressors.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 2 — Refrigeration and
   air-conditioning compressors.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Chapter 2, refrigeration and air-conditioning compressors",
  ];

  /* Each lesson cites the same chapter, narrowed to its own sub-topic. */
  function ref(topic) {
    return ["Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Chapter 2, " + topic];
  }

  const MODULES = [
    {
      id: "v1-compressors",
      stream: "v1",
      title: "R1.2 · Compressors",
      blurb: "The pump at the heart of every system: what a compressor must achieve, how the five types do it, and how reciprocating machines are built, controlled and assessed.",
      lessons: [

/* ======================================================================
   1 — What a compressor does
   ====================================================================== */
{
  id: "compressor-function",
  title: "What a compressor does and the conditions it creates",
  minutes: 10,
  simple: "The compressor is the pump that keeps refrigerant moving around the loop. It sucks vapour away from the cold coil so the liquid there can keep boiling, then squeezes that vapour hard so it becomes hot enough to dump its heat outside — a bit like a bicycle pump barrel getting hot when you pump a tyre. Everything else in the system only works because the compressor has already created a low pressure on one side and a high pressure on the other.",
  refs: ref("the function of the compressor in the vapour-compression system"),
  content: `
Almost everything else in a refrigeration system sits still. The evaporator,
the condenser, the drier and the expansion valve have no moving part that
drives anything — they only react to what is done to them. The compressor is
the main moving component of the vapour-compression system, and it is the one
place where electrical energy is turned into refrigerant flow.

## Two jobs

Stated as briefly as possible, a compressor exists to **maintain a pressure
difference between the low side and the high side** of the system, and to
**keep the refrigerant circulating**. Those two statements sound modest, but
between them they create every condition the cycle needs:

- **On the low side** the pressure and therefore the saturation temperature of
  the refrigerant in the evaporator are pulled *down*. The refrigerant can then
  boil at a temperature below that of the space being cooled, so heat flows
  into it.
- **On the high side** the pressure and therefore the saturation temperature in
  the condenser are pushed *up*. The refrigerant can then condense at a
  temperature above that of the outdoor air or the cooling water, so heat flows
  out of it at the temperatures actually available on site.

That is the whole trick of refrigeration. Heat only ever flows from hot to
cold, so if you want heat to leave a 2 °C coolroom and finish up in 35 °C
Brisbane air, you must first make the refrigerant colder than the room and
later make it hotter than the air. Pressure is the lever that does it, and the
compressor is the hand on that lever.

!FIG[cycle-loop]

## Following one parcel of vapour

1. Low-pressure, low-temperature vapour leaves the evaporator carrying the heat
   it absorbed from the load.
2. The compressor's suction stroke lowers the pressure in the cylinder below
   suction-line pressure, so the vapour is pushed into the cylinder by the
   pressure behind it. The compressor does not "suck" in any magical sense — it
   removes pressure, and the system pushes.
3. Compression raises both the pressure and the temperature of that vapour.
4. The hot, high-pressure vapour is discharged to the condenser carrying the
   evaporator heat *plus* the heat added during compression. All of it must be
   rejected in the condenser.

| Where | Pressure | Saturation temperature | What the refrigerant does |
|---|---|---|---|
| Evaporator | Low | Below the load temperature | Boils, absorbing heat |
| Suction line | Low | — | Superheated vapour returning |
| Compressor | Low in, high out | — | Work is added |
| Condenser | High | Above the ambient | De-superheats and condenses, rejecting heat |

## Where the heat in the discharge gas comes from

Discharge gas is much hotter than most apprentices expect, and there are three
separate reasons for it:

- **The work of compression.** Every joule the motor puts into squeezing the
  vapour ends up in the vapour as heat.
- **The compression itself.** Squeezed into a smaller volume, the vapour needs
  less molecular energy to occupy that space, and the surplus appears as
  sensible heat.
- **Heat picked up from the compressor body.** On a hot, hard-working
  air-cooled machine the cylinder walls add heat to the charge. On a
  water-jacketed or liquid-cooled compressor the flow can reverse, with the
  vapour giving heat *to* the walls.

## Why discharge temperature matters

Excessive discharge temperature is one of the classic slow killers of a
refrigeration plant. Above roughly 135 °C at the valve plate, refrigerant and
oil start to break down chemically, producing acid, sludge and carbon that
coats valves, blocks driers and eventually attacks motor insulation. The
recognised ways of holding it down are:

- water-cooling or refrigerant-cooling the cylinder head
- injecting cool oil with the refrigerant, which is how screw compressors
  survive very high compression ratios
- keeping suction superheat modest — insulating the suction line so the vapour
  does not arrive already hot
- in some plants, injecting a metered amount of liquid refrigerant into the
  suction line so the vapour reaches the compressor close to saturation.

>! A compressor is a **vapour** pump, not a liquid pump. Liquid does not
>! compress. If liquid refrigerant or a slug of oil reaches the cylinder, the
>! piston has nowhere to put it and something breaks — a valve reed, a valve
>! plate, a connecting rod or a gasket. Floodback, an overcharge, a flooded
>! start after a shutdown, or defrost water in a hot-gas line are the usual
>! causes.

## On the job

- If the low side will not come down, ask first whether the compressor is
  actually pumping — a broken valve reed, a leaking discharge valve or a worn
  bore will hold a low side up no matter how good the rest of the system is.
- Suction pressure tells you the evaporator temperature; discharge pressure
  tells you the condensing temperature. Both are the compressor's doing.
- Every kilowatt the motor draws has to be rejected by the condenser as well as
  the load heat. Undersized condensers punish the compressor, not the condenser.
- A compressor that is hot to the point where you cannot hold a hand on the
  head is telling you something — high compression ratio, high superheat, or
  low refrigerant flow to carry heat away.
`,
  quiz: [
    {
      q: "A technician says the compressor 'sucks' refrigerant out of the evaporator. What is a more accurate description of what happens?",
      options: [
        "The compressor creates a magnetic pull on the refrigerant molecules",
        "The compressor lowers the pressure in the cylinder, and the higher pressure in the suction line pushes vapour in",
        "The expansion valve pushes vapour through the evaporator into the compressor",
        "The condenser draws vapour through the compressor by capillary action",
      ],
      answer: 1,
      explain: "Compressors remove pressure; the surrounding system supplies the push. Understanding it this way explains why the suction valve cannot open until cylinder pressure has actually fallen below suction-line pressure — which matters when you come to clearance volume and re-expansion.",
    },
    {
      q: "Why must the condenser reject more heat than the evaporator absorbs?",
      options: [
        "Because the condenser is always physically larger",
        "Because some refrigerant is lost through the shaft seal",
        "Because the heat equivalent of the compressor's work is added to the refrigerant during compression",
        "Because the liquid line gains heat on the way to the expansion valve",
      ],
      answer: 2,
      explain: "The discharge gas carries the evaporator load plus the work of compression, so condenser duty is always greater than evaporator duty. Liquid-line heat gain is real but small and it does not change the basic energy balance.",
    },
    {
      q: "Which action would NOT help reduce a high discharge temperature?",
      options: [
        "Insulating the suction line to reduce suction superheat",
        "Water-cooling the cylinder head",
        "Increasing the superheat setting on the expansion valve",
        "Injecting cool oil with the refrigerant, as a screw compressor does",
      ],
      answer: 2,
      explain: "More superheat means the vapour arrives at the compressor hotter, and it leaves hotter still. The other three all remove heat or stop it being added. Note that reducing superheat too far brings its own risk of floodback, so it is a balance, not a free win.",
    },
    {
      q: "What condition does lowering the evaporator pressure create?",
      options: [
        "It raises the refrigerant's boiling point so it condenses in the evaporator",
        "It lowers the refrigerant's saturation temperature so it boils below the temperature of the load",
        "It has no effect on temperature, only on flow rate",
        "It increases the latent heat of the refrigerant",
      ],
      answer: 1,
      explain: "Pressure and saturation temperature move together for any refrigerant — that is what a P–T chart shows. Dropping the pressure drops the boiling point, which is what creates the temperature difference that lets heat flow into the coil.",
    },
  ],
},

/* ======================================================================
   2 — Types of compressor and how they are classified
   ====================================================================== */
{
  id: "compressor-types-and-drives",
  title: "Types of compressor and how they are classified",
  minutes: 12,
  simple: "There are five ways of squeezing a gas that the trade actually uses: a piston in a cylinder, a roller spinning off-centre, a fan-like impeller flinging vapour outwards, two screws meshing together, and two spirals nested inside each other. Separately, compressors are grouped by where the motor lives — outside the housing, bolted inside, or welded inside a sealed can. Both labels matter when you order a replacement.",
  refs: ref("types of compressor, operating principles and open, hermetic and semi-hermetic classification"),
  content: `
Refrigerants differ enormously in the volume of vapour they produce per
kilowatt of cooling and in the pressures they work at. Systems differ just as
much in size, in where they are installed and in what they have to do. One
machine might need to move a huge volume of vapour against a small pressure
rise; another must move a trickle against a very large one. That is why the
trade has five distinct compressor families rather than one.

## Classification by mechanical action

A compressor is classified by what its moving parts physically do. Whatever the
mechanism, the effect on the refrigerant is identical — it leaves at a higher
pressure and temperature than it entered.

| Type | Name | What moves | Typical use in Australia |
|---|---|---|---|
| 1 | Reciprocating | A piston travels back and forth inside a cylinder | Everything from bar fridges to industrial ammonia plant |
| 2 | Rotary | An eccentric rotor turns inside a cylinder | Domestic split systems, small commercial, boosters |
| 3 | Centrifugal | A bladed impeller flings vapour outward at high velocity | Large water chillers for buildings |
| 4 | Screw | Two intermeshing screws squeeze vapour between the lobes | Cold stores, food processing, large chillers, boosters |
| 5 | Scroll | Two identical involute spirals, one fixed, one orbiting | Splits and packaged air conditioning, automotive, heat pumps |

Types 1 and 2 are **positive displacement** machines that trap a fixed volume
and shrink it. Types 4 and 5 are also positive displacement, but continuous
rather than stroke-by-stroke. Type 3 is the odd one out: it is a **dynamic**
machine that adds velocity to the vapour and then converts that velocity into
pressure.

## Classification by drive arrangement

The second, entirely separate label describes where the motor is in relation to
the refrigerant. This is the one you use when ordering parts.

### Open (external drive)

The motor sits outside the compressor housing and drives the crankshaft through
V-belts or a direct coupling. Because the shaft passes out through the
crankcase wall, an **open compressor must have a crankshaft seal**, and that
seal is the single most likely leak point in the machine. Open drive still wins
where you need a non-electric prime mover, an engine drive, precise speed
control by pulley change, or field-rebuildable industrial ammonia plant.

### Hermetic (sealed)

The motor is enclosed with the compressor inside a sealed housing, so the
compressor is driven directly and always runs at motor speed. There is no shaft
seal and therefore no seal leak. The chapter describes three basic
constructions:

1. Motor and compressor in a steel **dome**, with the stator pressed into one
   half of the dome and the compressor bolted to the stator. The whole can is
   carried on external springs or rubber mounts to absorb vibration.
2. Motor and compressor assembly mounted on **internal springs** inside a
   casing made from two pressed-steel halves welded together in the factory.
3. The compressor body itself used as the casing, with the crankcase extended
   to house the motor and the whole thing **bolted** together. This is the
   design the trade calls a *serviceable hermetic* — what most people simply
   call a semi-hermetic.

Construction materials and internal design are otherwise practically identical
to open compressors.

### Semi-hermetic (serviceable hermetic)

The bolted design above. Heads, valve plates, gaskets, pistons, bearings and
even the stator can be replaced in the field or in a workshop. Common in
commercial refrigeration and larger air-conditioning plant, where the machine
is worth rebuilding.

### Rotor-sealed compressors

A less common but clever variation, built in Australia for many years as the
*Rotoseal* and imported from Austria as the *Frigopol*. The stator windings sit
**outside** the sealed dome; only the rotor is inside. A thin paramagnetic
sleeve between them seals the refrigerant in. Electrical efficiency drops
slightly because the magnetic field has to cross that sleeve, but the payoff is
substantial:

- refrigerant and oil never touch the winding insulation, so a burnout cannot
  contaminate the system and the refrigerant cannot attack the windings
- stator heat goes to the ambient air instead of loading the condenser
- after a stator failure the crankcase pressure is brought to 0 kPa, two or
  four nuts are removed and the stator slides off and a new one slides on,
  leaving the refrigerant circuit sealed.

These machines are bolted and gasketed, so they too are "serviceable sealed".

| Feature | Open | Semi-hermetic | Hermetic (welded) |
|---|---|---|---|
| Motor position | Outside | Inside, bolted housing | Inside, welded can |
| Shaft seal | Required | None | None |
| Field repairable | Yes | Yes | No — replace |
| Speed | Set by pulleys or coupling | Motor speed | Motor speed |
| Motor cooling | Ambient air | Suction gas and/or air | Suction gas and/or air |
| Burnout contaminates system | No | Yes | Yes |

## Cooling the motor inside a sealed compressor

Getting heat out of a motor sitting in refrigerant is a real engineering
problem. Two methods dominate: pressing the stator hard into the dome so heat
conducts straight into the steel shell, and routing the returning suction
vapour over the windings before it reaches the cylinders. The second method
works well, but it warms the vapour before compression and so **reduces
volumetric efficiency** — a design trade-off you will meet again in the
efficiency lesson. Where suction-gas cooling is used, the suction service valve
is placed at the motor end of the casing to make sure the gas actually washes
over the windings.

>! Never run a sealed or semi-hermetic compressor on a deep vacuum. With little
>! or no vapour flowing there is nothing to carry heat away from the windings;
>! the motor overheats and the winding insulation flashes over. This is why the
>! low-pressure cut-out must be working, and why you never use the system
>! compressor to pull a vacuum during evacuation.

## Mufflers

Most small hermetics carry sound-deadening mufflers on both the suction and the
discharge connections — small brazed cylinders with baffle plates inside that
break up the pressure pulses each stroke produces. They are part of the
compressor, not an accessory, and a cracked internal muffler shows up as a
sudden change in the noise a unit makes.

## What to remember

- Five mechanical types; the effect on the refrigerant is the same for all.
- Open, hermetic and semi-hermetic describe the motor arrangement, not the
  pumping mechanism — a scroll can be hermetic or open-drive.
- A shaft seal exists only on open machines and is their main leak risk.
- A hermetic burnout puts acid and carbon into the whole circuit; an open-drive
  burnout does not.
`,
  quiz: [
    {
      q: "Which statement correctly separates the two classification systems?",
      options: [
        "Hermetic compressors are always reciprocating and open compressors are always screw",
        "Type 1 to Type 5 describes the pumping mechanism, while open, semi-hermetic and hermetic describes where the motor is",
        "Semi-hermetic is a pumping mechanism halfway between reciprocating and rotary",
        "Only reciprocating compressors can be classified as open drive",
      ],
      answer: 1,
      explain: "The two labels are independent. You can buy an open-drive scroll for a car, a semi-hermetic recip for a coolroom and a hermetic screw for a chiller. Confusing the two is a common way to order the wrong replacement.",
    },
    {
      q: "Why does routing suction vapour over the motor windings of a hermetic compressor reduce its volumetric efficiency?",
      options: [
        "The vapour picks up oil from the windings, which blocks the suction valve",
        "The vapour is heated before it enters the cylinder, so it is less dense and a given cylinder volume holds less mass",
        "The windings create turbulence that stops the suction valve opening fully",
        "The motor magnetically slows the refrigerant flow",
      ],
      answer: 1,
      explain: "Volumetric efficiency is about how much refrigerant mass a fixed swept volume actually takes in. Warmer vapour has a larger specific volume, so the same litres per second carry fewer kilograms per second. It is a deliberate trade-off: cooler windings, slightly less capacity.",
    },
    {
      q: "What is the main service advantage of a rotor-sealed (Rotoseal or Frigopol type) compressor?",
      options: [
        "It has no oil and therefore never needs an oil change",
        "It runs at twice motor speed so it is physically smaller",
        "The stator is outside the sealed dome, so a motor burnout cannot contaminate the refrigerant and the stator can be slid off and replaced",
        "It does not need a suction line",
      ],
      answer: 2,
      explain: "Keeping the windings outside the refrigerant boundary is the whole point: no burnout contamination, no condenser load from stator heat, and a stator change that does not open the refrigerant circuit. The cost is a small loss of electrical efficiency across the sealing sleeve.",
    },
    {
      q: "A welded hermetic compressor has suffered a motor burnout. What must you assume about the rest of the system?",
      options: [
        "Nothing — the windings are isolated from the refrigerant",
        "Only the compressor is affected because the burn is contained in the can",
        "Acid and carbon products have circulated through the whole system and clean-up measures are required",
        "The refrigerant will be unaffected but the oil must be topped up",
      ],
      answer: 2,
      explain: "In a hermetic or semi-hermetic the motor sits in the refrigerant and oil, so burnout products go everywhere. Recovery, a thorough clean-up with suction-line filter-driers, an acid test and follow-up oil checks are standard practice. Only open drive and rotor-sealed designs escape this.",
    },
  ],
},

/* ======================================================================
   3 — Reciprocating compressor construction
   ====================================================================== */
{
  id: "recip-construction",
  title: "Reciprocating compressors: cylinders, pistons and crankshafts",
  minutes: 13,
  simple: "A reciprocating compressor is a small, very accurately made engine running backwards: instead of burning fuel to push a piston, a motor pushes the piston to squeeze gas. The parts are the same familiar ones — cylinder, piston, rings, connecting rod, crankshaft — and they are fitted with clearances measured in thousandths of a millimetre, so guessing at a rebuild does not work.",
  refs: ref("reciprocating (Type 1) compressor construction: cylinders, pistons, rings, connecting rods and crankshafts"),
  content: `
Reciprocating compressors are by far the most widely used machine in the trade,
found in every field of refrigeration from a 60 W domestic sealed unit up to
industrial machines of 150 kW and beyond. They suit refrigerants that need a
relatively small displacement and condense at relatively high pressure —
historically R22, and today R134a, R404A, R407C, R448A and R717 (ammonia),
among others. Most modern designs will run on a range of refrigerants with only
minor changes such as different valve sizes; for ammonia the change is more
fundamental, because **no copper or brass may be used** anywhere in contact
with the refrigerant, so steel components are substituted.

## Turning rotation into reciprocation

An electric motor only knows how to rotate. A piston only knows how to travel
up and down. Something must connect the two, and in a conventional compressor
that something is a crank plus a connecting rod, all housed in a leak-proof
casing called the **crankcase**.

Compression can happen on one side of the piston or on both:

- **Single-acting**: vapour is compressed on one side of the piston only, once
  per revolution of the crankshaft. Vertical single-acting is the standard
  arrangement for refrigeration and has been developed to a high level of
  efficiency.
- **Double-acting**: vapour is compressed alternately on both sides of the
  piston, so compression happens twice per revolution. The swash-plate machines
  used in vehicle air conditioning are the everyday example — a three-cylinder
  swash-plate compressor pumps like a six-cylinder conventional machine of the
  same bore and stroke.

## The design variables

Manufacturers get the flexibility they need by combining choices from a short
list. Knowing the list helps you read a spec sheet:

- how many cylinders there are, and how they are laid out
- the piston type
- the way the valves are arranged
- the speeds of the crank and of the piston
- the stroke and the bore
- the crankshaft type
- the method used to lubricate the machine.

## Cylinders

The number of cylinders runs from one to as many as sixteen. Two- and
three-cylinder machines are almost always in line. With four or more, a V, W or
radial arrangement is usual.

| Arrangement | Advantage |
|---|---|
| In-line | Only a single valve plate is needed, simplifying construction and service |
| V, W or radial | Better running balance, and cylinders can be staggered so the compressor is physically shorter |

Cylinders are cast in good-quality cast iron or aluminium alloy, and the
casting must be dense enough that refrigerant cannot seep through it. Small
compressors usually have cooling fins cast integrally with the cylinder; large
ones may have water jackets around the cylinders. Some designs use a replaceable
cylinder **liner** or sleeve, so a worn bore can be renewed without scrapping
the block.

It is common for part of the crankcase to be cast as one piece with the
cylinder. This cuts the number of joints — and therefore the number of possible
leaks — and lets the main bearings and the bore be aligned very precisely.

The bore itself is bored, then honed and lapped. Some manufacturers lap the
piston and its own cylinder together as a **matched set**. On small cylinders
of around 25 mm diameter, tolerances between 0.002 mm and 0.0002 mm are quoted.
That is the level of precision you are dealing with, which is why compressor
work is a workshop job with the manufacturer's data in front of you.

## Pistons and rings

The piston is machined and ground on its outer surface to fit the bore, and is
drilled and reamed for the **piston pin** (also called the wrist pin or
gudgeon pin) that fastens it to the connecting rod.

- Small pistons, about 35 mm diameter and under, usually have **oil grooves**
  machined around the periphery instead of rings. The oil film in the grooves
  does the sealing.
- Larger pistons carry proper **piston rings** in machined grooves —
  compression rings and oil rings.

Because piston and cylinder temperatures seldom exceed 93 °C, parts can be
fitted with very little clearance. A working figure is about **0.005 mm of
clearance for every 1.0 mm of piston diameter**, so a 60 mm piston gets around
0.3 mm. Pistons using rings are usually given a little more than that. Always
work to the manufacturer's figures rather than the rule of thumb.

Rings are fitted into their grooves as closely as possible while still being
free to move. The ring gap is cut at **45 degrees** (a tapered or angled gap) so
the ring presses outwards against the bore, and the gap is set at roughly
**0.1 mm for each 100 mm of piston diameter**. Oil rings may be vented or
plain, and some are marked so they can only go in one way up — fit a tapered
ring upside down and the compressor will pump oil.

Piston pins are hardened high-carbon steel, made hollow to save weight and
ground perfectly straight. They are normally **full-floating**, meaning the pin
is free to turn both in the connecting-rod bush and in the piston bosses, with
circlips or lock rings to stop it walking into the bore.

Some designs mount the **suction valve in the crown of the piston**. The piston
movement then helps the valve open and close, but overhauling that valve is a
more expensive job.

## Connecting rods

The connecting rod joins piston to crankshaft, and is drop-forged steel or
sometimes cast iron.

- The rod used with a **crank-throw** crankshaft has a split big end that
  clamps around the crankpin journal, fitted to about 0.025 mm clearance. Big
  end bolts or cap screws must be torqued to the manufacturer's figure — a
  guessed torque either crushes the bearing or lets it work loose.
- The rod used with an **eccentric** crankshaft is a solid ring with no split.
  Its own cast iron forms the bearing surface, and it must be slipped over the
  eccentric before the shaft assembly is completed.

In many small hermetics the rod is locked rigidly to an oversized piston pin by
a locking pin, giving a very large bearing area in a small package.

## Crankshafts and other drive mechanisms

A crank is simply a rotating lever. Bolted to a shaft and joined to a
connecting rod, it converts rotation into reciprocation. The main features of a
compressor crankshaft are the **main bearing journals** (two or more), the
**connecting rod journals**, an **end-play bearing or device**, the seal
shoulder where the shaft passes through the crankcase on open machines, and the
flywheel or coupling mounting.

- Wearing surfaces are case-hardened and accurately ground, and journals fit
  their bearings to about **0.025 mm**.
- Bearings and bushes are usually a copper alloy (bronze) or a lead alloy
  (babbitt). Journals are often specially treated so that a brief loss of oil
  does not immediately destroy the bearing.
- Flywheels are commonly held by a taper, a **Woodruff key** and a nut with a
  lock washer. Treat crankshaft threads with respect — damage them and the
  whole crankshaft has to be replaced.

Watch the motions in a crank-throw machine and you will see four different ones
at once: the crankshaft rotates, the piston reciprocates, the piston pin
oscillates as it reciprocates, and the big end both rotates and reciprocates.

Three alternatives to the plain crank throw are common:

- **Eccentric crankshaft** — a steel shaft carrying a cast-iron eccentric disc
  keyed and grub-screwed in place. Cheaper to make, gives a large wearing
  surface, is better balanced and therefore runs more smoothly.
- **Scotch yoke** — the connecting rod disappears altogether. The piston is
  extended down to the crankshaft and joined by a sliding member, so the
  crankpin slides back and forth in a slot as it revolves. Used in small,
  high-speed, direct-drive hermetics.
- **Swash or wobble plate** — an angled plate on the drive shaft wobbles as the
  shaft turns and drives three or more pistons arranged in a circle around it,
  usually through drive balls and shoes. This is the standard automotive
  air-conditioning compressor, and because it is double-acting it does the work
  of twice as many cylinders.

## On the job

- Compressor clearances are in hundredths and thousandths of a millimetre. If
  you do not have the manufacturer's figures and the right measuring gear, do
  not open the machine.
- A compressor that suddenly starts pumping oil is worth suspecting for worn
  rings, a wrongly fitted oil ring, or an excessive ring gap.
- Ammonia plant: no copper, no brass, no bronze in the refrigerant stream.
- Knocking that changes with load usually points to big end or gudgeon
  clearance; a steady knock at all loads more often points to the valve plate.
`,
  quiz: [
    {
      q: "A three-cylinder swash-plate compressor in a car pumps about the same as which conventional machine?",
      options: [
        "A single-cylinder compressor of the same bore and stroke",
        "A three-cylinder compressor of the same bore and stroke",
        "A six-cylinder compressor of the same bore and stroke",
        "A twelve-cylinder compressor of the same bore and stroke",
      ],
      answer: 2,
      explain: "The swash-plate machine is double-acting, compressing on both sides of each double-ended piston, so each cylinder gives two compressions per revolution. Three double-acting cylinders therefore match six single-acting ones — which is how such a compact unit cools a whole car.",
    },
    {
      q: "Why do in-line cylinder arrangements remain popular even though V and W layouts balance better?",
      options: [
        "In-line machines run at higher speeds",
        "In-line machines need only a single valve plate",
        "In-line machines cannot suffer liquid slugging",
        "In-line machines do not need piston rings",
      ],
      answer: 1,
      explain: "One valve plate means one gasket, one set of reeds and a simpler head — cheaper to build and quicker to service. V, W and radial layouts buy smoother running and a shorter overall length instead, which is why they take over at four cylinders and up.",
    },
    {
      q: "A piston of 60 mm diameter is being fitted. Using the general guide of about 0.005 mm clearance per 1.0 mm of piston diameter, roughly what clearance is expected?",
      options: ["0.03 mm", "0.3 mm", "3 mm", "0.003 mm"],
      answer: 1,
      explain: "60 × 0.005 = 0.30 mm. The point of the exercise is the order of magnitude: fractions of a millimetre. Ring-fitted pistons get a little more than this, and in every case the manufacturer's figure overrides the rule of thumb.",
    },
    {
      q: "What is the purpose of the 45-degree angled gap in a piston ring?",
      options: [
        "To let oil drain back to the crankcase",
        "To allow the ring to expand when hot without seizing, while still exerting pressure against the cylinder wall",
        "To lock the ring into the groove so it cannot rotate",
        "To let refrigerant bleed past the piston on the downstroke",
      ],
      answer: 1,
      explain: "The angled gap keeps the ring springy against the bore and gives room for thermal expansion, while presenting a longer leak path than a square butt joint would. The gap is set at roughly 0.1 mm per 100 mm of piston diameter — too little and the ends butt and seize the ring.",
    },
  ],
},

/* ======================================================================
   4 — Valves, the operating cycle and clearance
   ====================================================================== */
{
  id: "recip-valves-and-cycle",
  title: "Valves, the operating cycle and clearance volume",
  minutes: 12,
  simple: "Compressor valves are just thin steel flaps that flop open and shut because of the pressure either side of them — nobody moves them. They open and close hundreds of times a second, and if one cracks or leaks the compressor pumps the same gas back and forth and the system stops cooling. There must also be a small gap left above the piston so it never hits the valve plate, and that gap costs capacity.",
  refs: ref("compressor valves, the reciprocating operating cycle and clearance volume"),
  content: `
Nothing in a compressor opens the valves. There is no cam, no rocker and no
timing chain. Every compressor valve, of every type and in every location,
works on one principle only: **it opens and closes because of the difference in
pressure across it**. Get that idea firmly and valve behaviour, valve faults and
volumetric efficiency all become obvious.

## The operating cycle, stroke by stroke

1. **Downstroke.** The piston moves away from the valve plate. Cylinder
   pressure falls. The discharge valve is held shut by the head pressure above
   it. When cylinder pressure drops below suction-line pressure, that
   difference pushes the suction valve open and vapour flows in.
2. **Bottom dead centre.** The cylinder is full of low-pressure vapour.
3. **Upstroke.** Pressure in the cylinder rises immediately, which snaps the
   suction valve shut. The trapped vapour is compressed.
4. **Discharge.** When cylinder pressure rises just above head pressure, the
   discharge valve is forced open and vapour flows out to the condenser until
   the piston reaches top dead centre. The discharge valve then closes again
   and the next downstroke begins.

To appreciate what the steel is being asked to do: on a sealed unit running at
23.3 revolutions per second, the suction valve is open for less than one
fiftieth of a second per stroke and the discharge valve for less than one
two-hundred-and-fiftieth of a second. Flapper or reed valves also stop vapour
returning to the crankcase.

## The valve assembly

A valve assembly consists of a **valve plate**, an **intake (suction) valve**,
an **exhaust (discharge) valve**, and the **retainers** that hold them.

- Valves are made of accurately ground **spring steel** reeds.
- The suction valve is usually held by small locating pins and by the clamping
  action between the compressor head and the valve plate.
- The discharge valve is clamped the same way, but on some machines it is held
  by small machine screws with a spring and a cage. That arrangement allows a
  wider valve opening, which helps in installations where the compressor pumps
  oil.

### Reed or flexing valves

A reed valve is a thin strip of spring steel that covers a port in the valve
plate. Its own spring tension holds it closed; pressure on the underside opens
it once that pressure exceeds the pressure above plus the spring tension. Reed
valves come in endless variations but the principle never changes.

### Ring plate valves

Four parts make up a ring plate valve: the seat, one or more ring plates, the
valve spring or springs, and a retainer. The springs hold the plates against the seat and give
rapid closure; the retainer holds the springs and, importantly, **limits the
valve lift**. Ring plate valves suit both slow- and high-speed machines and can
be used for suction or discharge. Where both valves sit in the head — common on
larger R717, R134a and R22 machines — they are often contained in the one ring
plate assembly.

## Why valve lift matters

Valve movement is designed, not accidental:

- **Too much movement** and the valve slams — you hear it as valve noise, and
  the reed work-hardens and eventually snaps.
- **Too little movement** and the port is throttled: not enough vapour can get
  in past the suction valve, or out past the discharge valve. Capacity falls.

Never alter valve lift from the manufacturer's setting, and never fit a valve
plate gasket of the wrong thickness — it changes both lift and clearance.

## Which valve gives trouble, and why

The suction valve leads a comparatively easy life. It runs cool and it is
continuously lubricated by the oil carried in the returning vapour. The
discharge valve is the one to watch:

- it works at high temperature
- it must seal against a large pressure difference
- vapour velocities across it are very high.

Those conditions cause the heavy ends of hydrocarbon oils to bake onto the
valve and its seat as **carbon**, and moisture in the system accelerates the
deposit. Carbon holds the valve off its seat, hot gas leaks back, the discharge
temperature climbs, and more carbon forms — a genuine failure spiral.

## Repairing valves

- Discs and reeds must be **perfectly flat**. A departure of only 0.0025 mm to
  0.005 mm is enough to make a valve leak. There is no practical way to repair
  a reed, so a leaking one is replaced.
- The valve **seat** can be repaired: the plate is ground on a surface grinder,
  or lapped by hand on a surface plate with the finest lapping powder you can
  get, then cleaned meticulously.
- Always fit new gaskets, always torque the head down evenly in the
  manufacturer's sequence, and never re-use a distorted valve plate.

!SIM[See what leaking compressor valves do to the gauges](fault=compressorValves)

## Clearance volume

The suction valve does not open the instant the piston starts down, and the
reason is **clearance**.

In every reciprocating compressor there must be a small space between the top
of the piston at top dead centre and the valve plate. Without it, the piston
would strike the valve plate or the suction reed and destroy both. That space
is called the clearance volume and it is typically about **five per cent of the
cylinder volume**.

At the end of the discharge stroke, the clearance space is still full of vapour
at slightly above head pressure. As the piston falls, that trapped vapour
**re-expands** into the cylinder. Fresh vapour cannot enter until cylinder
pressure has fallen below suction pressure — which does not happen until the
clearance gas has expanded a long way down the bore. Everything the clearance
gas occupies is space that fresh vapour cannot use.

Clearance is set by the manufacturer and it is your job to preserve it:

- fit the correct valve plate gasket thickness
- keep bearing, big end, gudgeon and piston wear within limits, because wear
  lets the piston stop short and **increases** clearance
- never try to reduce clearance to gain capacity.

>! Reducing clearance below the design figure causes severe knocking and very
>! likely valve plate and reed damage, up to the piston physically striking the
>! valve plate. Even short of contact, there is not enough room for vapour to
>! escape through the discharge port, and any oil sitting on top of the piston
>! is struck a direct hydraulic blow.

## What to remember

- All compressor valves are opened and closed by pressure difference alone.
- Suction valves fail least; discharge valves fail most, usually via carbon and
  heat.
- Reeds are replaced, not repaired; seats can be ground and lapped.
- Clearance is a necessary evil: about five per cent, deliberately designed in,
  and it is the first of the five things that reduce volumetric efficiency.
`,
  quiz: [
    {
      q: "What actually opens the discharge valve of a reciprocating compressor?",
      options: [
        "A cam on the crankshaft lifts it at the right moment",
        "Cylinder pressure rising just above the pressure in the discharge line",
        "The oil pump supplies pressure to a hydraulic lifter",
        "The suction valve closing pulls it open mechanically",
      ],
      answer: 1,
      explain: "Every compressor valve is opened by differential pressure and nothing else. This is also why a compressor with a leaking discharge valve still turns happily but pumps almost nothing: the gas simply flows back into the cylinder as soon as the piston starts down.",
    },
    {
      q: "Why is the discharge valve far more likely to give trouble than the suction valve?",
      options: [
        "It is made of softer steel",
        "It is opened mechanically and so wears faster",
        "It runs hot, seals against a large pressure difference, and collects carbon from the heavy ends of the oil",
        "It has to open for longer on each stroke",
      ],
      answer: 2,
      explain: "Heat, high differential pressure and high gas velocity are the discharge valve's daily conditions, and carbon deposits build on the valve and seat — moisture in the system speeds this up. The suction valve by contrast runs cool and is constantly washed with oil-laden vapour.",
    },
    {
      q: "A compressor is reassembled with a valve plate gasket thicker than specified. What is the most likely consequence?",
      options: [
        "Increased clearance volume, more re-expansion and reduced capacity",
        "Reduced clearance volume and a risk of the piston striking the valve plate",
        "No effect, since gaskets only seal",
        "The suction valve will fail to close on the upstroke",
      ],
      answer: 0,
      explain: "A thicker gasket lifts the head further from the piston crown, so more clearance gas is trapped and re-expands, admitting less fresh vapour. A gasket that is too thin is the dangerous error — that is what risks contact, knocking and hydraulic shock on trapped oil.",
    },
    {
      q: "Clearance volume in a reciprocating compressor is best described as:",
      options: [
        "The gap between the piston and the cylinder wall",
        "Wear that develops in the big end bearing over time",
        "The deliberate space left between the piston at top dead centre and the valve plate, usually about five per cent of cylinder volume",
        "The volume of oil retained above the piston",
      ],
      answer: 2,
      explain: "It is a designed-in safety space, not a defect — without it the piston would hit the valve plate. The cost of that safety is re-expansion of high-pressure vapour on the downstroke, which is the single biggest reason volumetric efficiency falls as compression ratio rises.",
    },
  ],
},

/* ======================================================================
   5 — Shaft seals, lubrication and cooling
   ====================================================================== */
{
  id: "seals-lubrication-and-cooling",
  title: "Shaft seals, lubrication and compressor cooling",
  minutes: 12,
  simple: "Three things keep a compressor alive: a seal that stops refrigerant escaping where the shaft leaves the case, oil that gets to every rubbing surface, and some way of throwing away the heat that friction and squeezing create. Like a car engine, it can run for years on clean oil and cool air, or die in minutes without them.",
  refs: ref("crankshaft seal construction, compressor lubrication and compressor cooling"),
  content: `
An open-drive compressor has a problem no sealed machine has: the crankshaft
must pass out through the crankcase wall to reach the motor, and refrigerant
must not follow it. The joint has to stay leak-tight while the shaft is
spinning **and** while it is stopped, and it has to do so across a crankcase
pressure that ranges from a vacuum on pull-down to full condensing pressure
after a shutdown.

## Crankshaft seals

Every design uses **two rubbing faces**:

- one face turns with the crankshaft and is sealed to the shaft with a
  synthetic **O-ring** (older designs used a neoprene bellows)
- the other face is stationary, mounted to the housing on leak-proof gaskets.

The faces are machined to optical tolerances and are made from combinations of
hardened steel, bronze, ceramic and carbon — a carbon nose running against a
hardened or ceramic seat is the classic pairing. A spring keeps the faces
together, and there must always be an oil film between them. Run a seal dry
and it wears, scores and starts to leak.

Because of that leak risk, the industry now recommends hermetic or
semi-hermetic machines wherever the application allows. Where an open drive is
unavoidable, remember that **a seal that is not run does not stay sealed**: the
usual cause of a flat vehicle air-conditioning system in spring is the seal
drying out over a winter of no use. Running the air conditioner for ten minutes
a fortnight over winter is genuine, useful advice to give a customer.

## Lubrication

Oil in a refrigeration compressor does four jobs at once: it lubricates, it
seals (rings, and the faces of a shaft seal), it carries heat away, and in some
designs it operates capacity-control unloaders.

### How the oil gets there

- **Splash lubrication.** Used on small compressors. Dippers on the connecting
  rod big ends, slingers or discs throw oil around the crankcase, and oil
  grooves, drillings and mist do the rest. Simple, with no pump to fail, but it
  depends on a correct oil level and on the compressor being level.
- **Forced-feed lubrication.** Used on larger machines. A pump on the end of
  the crankshaft — usually a gear or eccentric-rotor type — draws oil through a
  pick-up tube and strainer and delivers it under pressure through drilled
  galleries in the crankshaft to the main bearings and big ends, and often as a
  spray to the bores.

### Net oil pressure

On a forced-feed machine, what matters is not the gauge reading at the pump but
the **difference** between pump discharge pressure and crankcase pressure,
because the crankcase pressure is what the pump has to work against:

**Net oil pressure = oil pump discharge pressure − crankcase (suction)
pressure**

An oil pressure differential safety switch measures exactly that. It has a
built-in **time delay**, typically 90 to 120 seconds, so the compressor is
allowed time to build pressure at start-up but is tripped and locked out if
pressure is not established or is later lost. Most such switches must be
**manually reset** — and if you reset one without finding out why it tripped,
you are simply arranging a bearing failure for later. Always set the switch to
the manufacturer's figure.

### Crankcase heaters

When a compressor stops, refrigerant migrates to the coldest part of the
system, which is often the crankcase, and dissolves in the oil. On the next
start the pressure drops, the dissolved refrigerant boils out violently and the
oil foams — so the pump picks up froth instead of oil and the bearings run dry.
A **crankcase heater** keeps the oil warm enough that refrigerant will not
condense into it.

- Energise crankcase heaters for at least 12 hours (24 is better) before
  starting a machine that has been off, or after a new installation.
- A crankcase heater that has failed open is invisible until the compressor
  fails, so check it — a clamp meter on the heater circuit takes seconds.

### Oil housekeeping

- Check the level in the sight glass with the machine running and settled;
  between about one quarter and three quarters of the glass is the usual target.
- Match the oil to the refrigerant: mineral oil or alkyl benzene with the older
  CFC/HCFC refrigerants, **polyol ester (POE)** with HFC and HFO blends. POE is
  strongly hygroscopic — leave a drum or a compressor open to atmosphere and it
  will absorb moisture that later becomes acid.
- Dark, smelly or acidic oil is evidence of overheating or a burnout. Take a
  sample and test it rather than guessing.

## Compressor cooling

Compressors get hot for two reasons: friction between moving parts, and the
heat of compression itself. That heat has to leave, both to stop efficiency
falling away and to stop the oil decomposing.

| Method | How it works | Where you see it |
|---|---|---|
| Oil | Picks up heat at the rubbing surfaces and carries it to the outer casing | Every compressor, always |
| Air over the casing | Natural convection from the shell or dome | Small hermetics |
| Cast-on fins | More surface area for the same shell | Small and medium compressors |
| Forced air | A motor-driven fan blowing over the body or head | Semi-hermetics on low-temperature duty, and most modern condensing units |
| Water jackets | Cast-in passages around the cylinders or heads | Large open machines, usually where a water-cooled condenser already exists |
| Suction gas | Return vapour routed over the motor windings | Hermetic and semi-hermetic motors |
| Liquid injection | Metered liquid into the suction line or into the compressor | High compression ratio duties |

Suction-gas cooling deserves the same caution given earlier: it works only
while there is gas flowing. A machine running on a very low suction, on a
restricted suction line or on a deep vacuum has almost no mass flow to carry
heat away.

>! Isolate and lock out before touching a compressor. Discharge lines, heads
>! and the top of a hermetic dome reach temperatures that will give you a
>! serious burn through a glove. Terminal covers stay on while the machine is
>! live — a hermetic terminal that fails under pressure can eject a pin and a
>! jet of hot oil and refrigerant. Recover the charge lawfully before opening
>! any part of the circuit; venting refrigerant is an offence under the Ozone
>! Protection and Synthetic Greenhouse Gas Management Act, and you need an
>! ARCtick licence to handle it at all.

## On the job

- Any lubrication fault shows up as a bearing or a rod, and by then it is a
  rebuild. Check net oil pressure, oil level and oil colour on every service.
- Never reset an oil failure switch without diagnosing the cause.
- Prove the crankcase heater is working before you leave a job.
- On open drives, expect the shaft seal to be the leak, and check the seal area
  for oil staining first — refrigerant carries oil out with it.
`,
  quiz: [
    {
      q: "An oil pressure differential switch on a semi-hermetic compressor is measuring which quantity?",
      options: [
        "Oil pump discharge pressure alone",
        "Oil pump discharge pressure minus crankcase pressure",
        "Discharge pressure minus suction pressure",
        "Crankcase pressure minus atmospheric pressure",
      ],
      answer: 1,
      explain: "The pump has to lift oil against whatever pressure already exists in the crankcase, so only the difference does useful work at the bearings. A machine on a high suction can show a healthy-looking oil gauge while the net pressure is far too low.",
    },
    {
      q: "Why is a crankcase heater fitted, and when should it be energised?",
      options: [
        "To thin the oil for easier pumping; switch it on only in winter",
        "To boil refrigerant out of the oil during running; it operates only while the compressor runs",
        "To keep the oil warm so refrigerant does not migrate and condense into it; energise it for 12 to 24 hours before starting a machine that has been off",
        "To prevent the oil freezing in cold climates; energise it whenever ambient drops below 0 °C",
      ],
      answer: 2,
      explain: "Refrigerant migrates to the coldest point during a shutdown and dissolves in the oil. On start-up it flashes off, the oil foams and the pump picks up froth. Warming the crankcase before start is the cure, which is why the heater is on during the OFF cycle, not the ON cycle.",
    },
    {
      q: "A vehicle air conditioner that worked last summer is flat in spring. What is the most likely cause?",
      options: [
        "The compressor valves have carboned up over winter",
        "The shaft seal has dried out from months of non-use and leaked",
        "The refrigerant has decomposed while stationary",
        "The condenser has become blocked internally",
      ],
      answer: 1,
      explain: "Open-drive compressor seals rely on an oil film between two rubbing faces. Months without running lets that film drain and the faces dry, and the seal leaks. Advising the owner to run the air conditioning briefly every couple of weeks over winter genuinely prevents it.",
    },
    {
      q: "Which cooling method becomes ineffective exactly when the compressor most needs it — on a very low suction pressure?",
      options: [
        "Water jacket cooling of the cylinders",
        "Forced-air cooling by a head fan",
        "Suction-gas cooling of the motor windings",
        "Oil carrying heat to the casing",
      ],
      answer: 2,
      explain: "Suction-gas cooling depends on mass flow, and mass flow collapses as suction pressure falls. That is precisely why a sealed unit must never be run on a deep vacuum, and why a low-pressure cut-out is a motor protection device as much as a control.",
    },
  ],
},

/* ======================================================================
   6 — Piston displacement and volumetric efficiency
   ====================================================================== */
{
  id: "displacement-and-volumetric-efficiency",
  title: "Piston displacement and volumetric efficiency",
  minutes: 14,
  simple: "Work out the volume the pistons sweep every second and you know what the compressor could pump in a perfect world. Measure what it really pumps and divide one by the other, and you have volumetric efficiency — like a bucket that never quite fills to the brim. On a hard-working freezer that bucket may only be filling four-tenths full, which is why the same compressor gives so much less cooling down there.",
  refs: ref("piston displacement, volumetric efficiency and the effect of clearance volume"),
  content: `
A reciprocating compressor is a vapour pump, and like any pump it has a
theoretical output and an actual one. The gap between them is where most of the
useful understanding lives.

## Piston displacement

**Piston displacement** is the total cylinder volume swept through by the
piston or pistons in a chosen time interval — in Australian practice, litres
per second. For any single-acting reciprocating compressor:

**Vp = (π ÷ 4) × D × D × L × N × n**

where:

- **Vp** = piston displacement (cubic metres per second, converted to L/s)
- **π** = 3.1416
- **D** = cylinder bore diameter in metres
- **L** = length of stroke in metres
- **N** = crankshaft revolutions per second (r/s)
- **n** = number of cylinders

The logic behind it is simple. The bore area is π D squared ÷ 4. Multiply by
the stroke and you have the volume swept by one piston in one stroke. Multiply
by revolutions per second and you have the volume swept by that piston each
second. Multiply by the number of cylinders and you have the whole machine.

### Worked example 1 — displacement

A two-cylinder compressor has a bore of 80 mm and a stroke of 60 mm and runs at
23.66 r/s (about 1420 rpm, a four-pole motor on 50 Hz). Find the theoretical
displacement.

1. Convert to metres: D = 0.080 m, L = 0.060 m.
2. Bore area = (3.1416 ÷ 4) × 0.080 × 0.080 = 0.7854 × 0.0064 = **0.005027 m²**
3. Swept volume per stroke = 0.005027 × 0.060 = **0.0003016 m³**
4. Per second, one cylinder = 0.0003016 × 23.66 = **0.007136 m³/s**
5. Two cylinders = 0.007136 × 2 = **0.014271 m³/s**
6. Convert to litres per second by multiplying by 1000:

**Vp = 14.27 L/s**

Notice that displacement depends only on the geometry and the speed. It does
not change with refrigerant, pressure, load or weather. It is a fixed property
of the machine.

## Volumetric efficiency

Under ideal, no-load conditions a compressor could pump its full displacement.
In real operation the actual volume pumped is considerably less. **Volumetric
efficiency** puts a number on the shortfall:

**VE% = (actual volume pumped ÷ piston displacement) × 100**

### Worked example 2 — volumetric efficiency

A compressor is tested and found to pump 3 L/s. Its theoretical displacement is
5 L/s.

**VE% = (3 ÷ 5) × 100 = 60%**

## The five things that reduce it

1. **Clearance volume** — the space between the piston at top dead centre and
   the discharge valve, and the re-expansion of the high-pressure gas trapped
   there.
2. **Valve port efficiency and throttling** — every port is a restriction, and
   gas has to be pushed through it in a fraction of a second. Undersized or
   partly blocked ports, or the wrong valve lift, cost volume.
3. **Heating and expansion of the vapour by the cylinder walls** — cold suction
   vapour entering a hot cylinder expands, so less mass gets in.
4. **Piston fit and the effects of the lubricating oil** — worn bores, worn or
   badly fitted rings and oil films all let gas slip past the piston.
5. **The compression ratio the system is running at** — the big one, dealt with
   in the next lesson.

## Clearance and re-expansion, with numbers

Clearance is normally about **five per cent** of cylinder volume. Refined
designs shave it a little, and on large machines the piston crown may be shaped
to fit into the discharge port to reduce the space further.

Now put a number on the damage it does. Suppose the vapour has been compressed
to one-sixth of its original volume, and five per cent of the cylinder volume
is left full of it at the end of the discharge stroke. On the downstroke that
gas expands back to six times its trapped volume:

- 6 × 5% = **30%** of the cylinder is occupied by re-expanding clearance gas
- so the maximum fresh vapour that can be admitted is 100% − 30% = **70%**

("Fresh vapour" simply means the refrigerant waiting in the suction line to
come in and be compressed.)

Now let wear in the bearings, big ends and gudgeons, or a too-thick valve plate
gasket, push clearance up to ten per cent:

- 6 × 10% = **60%** of the cylinder occupied by re-expanding gas
- maximum fresh vapour = 100% − 60% = **40%**

Doubling the clearance has cut the intake almost in half. That is why clearance
is a manufacturer's setting you preserve, not a dimension you adjust.

| Clearance volume | Re-expanded to | Maximum fresh vapour admitted |
|---|---|---|
| 5% (as designed) | 30% of cylinder volume | 70% |
| 10% (worn or wrong gasket) | 60% of cylinder volume | 40% |

## From volumetric efficiency to cooling capacity

Volumetric efficiency is not an abstraction — it is the number that turns a
compressor's geometry into kilowatts. Take the 14.27 L/s machine above, running
on R134a with a −10 °C evaporator and a 40 °C condenser, at a volumetric
efficiency of 70 per cent.

### Worked example 3 — actual capacity

1. Actual volume pumped = 14.27 × 0.70 = **9.99 L/s** = 0.00999 m³/s
2. From R134a tables, saturated vapour at −10 °C has a specific volume of about
   **0.0993 m³/kg**, so:
   mass flow = 0.00999 ÷ 0.0993 = **0.1006 kg/s**
3. Refrigerating effect: saturated vapour enthalpy at −10 °C is about
   392.7 kJ/kg and saturated liquid enthalpy at 40 °C is about 256.4 kJ/kg, so
   RE = 392.7 − 256.4 = **136.3 kJ/kg**
4. Refrigerating capacity = 0.1006 × 136.3 = **13.7 kW**

Now suppose the same machine is used for a low-temperature duty where its
volumetric efficiency falls to 40 per cent, and take the same refrigerant
conditions for comparison:

- Actual volume = 14.27 × 0.40 = 5.71 L/s = 0.00571 m³/s
- Mass flow = 0.00571 ÷ 0.0993 = 0.0575 kg/s
- Capacity = 0.0575 × 136.3 = **7.8 kW**

Same castings, same motor, same speed — barely more than half the cooling.
Nothing has broken; the compressor is simply not filling its cylinders.

> Volumetric efficiency is the honest translator between what a compressor is
> and what it does. Two identical machines on identical loads will give very
> different capacities if one is working across a much bigger pressure
> difference than the other.

## What to remember

- Displacement is fixed by bore, stroke, speed and cylinder count.
- VE% = actual ÷ theoretical × 100, and it always falls short of 100.
- Clearance re-expansion is the largest single design cause; compression ratio
  is the largest operational cause.
- Wear increases clearance, and increased clearance costs capacity fast.
- Capacity in kilowatts only appears once you combine actual volume, specific
  volume of the suction vapour and refrigerating effect.
`,
  quiz: [
    {
      q: "A single-cylinder compressor has a bore of 50 mm, a stroke of 40 mm and runs at 24 r/s. Which calculation gives its displacement in L/s?",
      options: [
        "0.7854 × 0.050 × 0.050 × 0.040 × 24 × 1000",
        "0.7854 × 0.050 × 0.040 × 24 × 1000",
        "3.1416 × 0.050 × 0.050 × 0.040 × 24 × 1000",
        "0.7854 × 50 × 50 × 40 × 24 ÷ 1000",
      ],
      answer: 0,
      explain: "Vp = (π÷4) × D × D × L × N × n, with every length in metres, then × 1000 to get litres per second. That works out to about 1.88 L/s. Option 3 forgets to divide π by 4 (so it doubles the area twice over) and option 4 mixes millimetres with metres — the classic exam mistake.",
    },
    {
      q: "A compressor with a theoretical displacement of 8 L/s is measured pumping 4.8 L/s. What is its volumetric efficiency?",
      options: ["38%", "60%", "67%", "167%"],
      answer: 1,
      explain: "4.8 ÷ 8 × 100 = 60%. Volumetric efficiency can never exceed 100% on a real machine — if you calculate more than that, you have divided the wrong way round or mixed your units.",
    },
    {
      q: "Wear in the bearings and big ends of a compressor increases the clearance volume from 5% to 10%. Using the chapter's example of vapour compressed to one-sixth of its volume, what happens to the maximum fresh vapour admitted?",
      options: [
        "It rises from 70% to 80% of cylinder volume",
        "It stays at 70% because clearance does not affect intake",
        "It falls from 70% to 40% of cylinder volume",
        "It falls from 95% to 90% of cylinder volume",
      ],
      answer: 2,
      explain: "The trapped gas re-expands to six times its volume: 6 × 5% = 30%, leaving 70% for fresh vapour; 6 × 10% = 60%, leaving only 40%. A worn compressor loses capacity long before it makes any obvious noise, which is why capacity testing beats listening.",
    },
    {
      q: "Which of these does NOT reduce volumetric efficiency?",
      options: [
        "Re-expansion of gas trapped in the clearance volume",
        "Suction vapour being warmed by hot cylinder walls",
        "Throttling through the suction valve ports",
        "Increasing the number of cylinders on the compressor",
      ],
      answer: 3,
      explain: "More cylinders increase displacement and capacity but do not change the percentage efficiency of each cylinder. The other three are three of the five recognised causes, along with piston fit and the operating compression ratio.",
    },
  ],
},

/* ======================================================================
   7 — Compression ratio, motor power and capacity control
   ====================================================================== */
{
  id: "compression-ratio-power-and-capacity-control",
  title: "Compression ratio, motor power and capacity control",
  minutes: 14,
  simple: "Compression ratio is just the high-side pressure divided by the low-side pressure, both measured from a true vacuum. The bigger that number, the harder the compressor works and the less it actually pumps — like climbing a steeper hill in the same gear. Capacity control is how a plant matches a fixed-size compressor to a load that keeps changing, usually by switching cylinders off.",
  refs: ref("compression ratio, motor power variation with operating conditions and compressor capacity control"),
  content: `
Two gauges tell you almost everything about how hard a compressor is working.
Turn those two readings into one number and you have the single most useful
diagnostic figure in refrigeration: the compression ratio.

## Calculating compression ratio

**Compression ratio (CR) = absolute discharge pressure ÷ absolute suction
pressure**

Both pressures must be **absolute**, not gauge. Australian gauges read in kPa
gauge, which is zero at atmospheric pressure, so:

**absolute pressure (kPa) = gauge pressure (kPa) + 101.3**

Use 101 or 101.3 kPa consistently. The answer is a ratio, so it has no units —
it is written as, say, 5.1:1.

!FIG[ph-legs]

### Worked example 1 — a healthy coolroom

An R404A coolroom is running with 250 kPa gauge on the suction and 1700 kPa
gauge on the discharge.

1. Absolute suction = 250 + 101 = **351 kPa**
2. Absolute discharge = 1700 + 101 = **1801 kPa**
3. CR = 1801 ÷ 351 = **5.13, or about 5.1:1**

### Worked example 2 — the same room with a filthy condenser

Condenser fins are choked, and the room has warmed so the evaporator is
starving. Suction now reads 150 kPa gauge, discharge 2100 kPa gauge.

1. Absolute suction = 150 + 101 = **251 kPa**
2. Absolute discharge = 2100 + 101 = **2201 kPa**
3. CR = 2201 ÷ 251 = **8.77, or about 8.8:1**

The compression ratio has risen by about 70 per cent, the volumetric efficiency
has fallen, the discharge temperature has climbed and the machine is doing less
cooling for more power. Nothing inside the compressor has changed — the *system
around it* has changed. That is why compression ratio is a system diagnostic,
not a compressor specification.

!SIM[Watch compression ratio climb on a dirty condenser](fault=dirtyCondenser)

### Worked example 3 — a low-temperature machine

A freezer pack shows 60 kPa gauge suction and 1750 kPa gauge discharge.

CR = (1750 + 101) ÷ (60 + 101) = 1851 ÷ 161 = **11.5:1**

## Why volumetric efficiency collapses as CR rises

The higher the discharge pressure relative to suction, the more tightly the
clearance gas is squeezed and the further it must re-expand before the suction
valve can open. Both effects are on the same side of the ledger:

- at a compression ratio of about **10:1**, volumetric efficiency has fallen to
  roughly **40 per cent**
- at **20:1** with five per cent clearance, the trapped gas would expand to fill
  the entire cylinder before the suction valve could open, so the theoretical
  volumetric efficiency reaches **zero** — in practice a little is still pumped,
  depending on exact clearance and cylinder heating.

| Duty | Typical compression ratio | Practical comment |
|---|---|---|
| Air conditioning | About 2.5 to 4:1 | Easy duty, high volumetric efficiency |
| Medium-temperature coolroom | About 4 to 7:1 | Normal commercial territory |
| Low-temperature freezer, single stage | About 8 to 12:1 | Watch discharge temperature closely |
| Above roughly 12:1 | Two-stage, compound or screw territory | Single-stage recips become uneconomic |

These bands are rules of thumb for reading a set of gauges, not design limits —
always check the manufacturer's application envelope for the compressor and
refrigerant in front of you.

## Motor power under changing conditions

Compressor motor power is often misunderstood. It rises with **suction
pressure**, because higher suction pressure means denser vapour and more mass
per stroke to push:

- Between suction temperatures of −40 °C and +4 °C, the power required by a
  given compressor increases roughly **four-fold**. A machine drawing 1 kW at
  −40 °C would draw close to 4 kW at +4 °C.
- Its refrigerating capacity at +4 °C, however, would be **more than ten times**
  its capacity at −40 °C.

The practical consequences are everywhere in commercial refrigeration:

- After a defrost, a freezer's suction pressure is temporarily high. Without
  protection, the motor is overloaded during the pull-down. A **crankcase
  pressure regulator (CPR)** in the suction line throttles the suction pressure
  until it falls back into range. The alternative is to fit an oversized motor
  that is only needed during pull-down.
- Sealed compressors are therefore sold as **low-, medium- or
  high-temperature** units, with the motor as well as the compressor sized for
  the intended suction range. Fitting a high-temperature compressor to a
  freezer, or a low-temperature compressor to an air conditioner, ends badly in
  both directions.

Head pressure works the other way:

- Raising condensing temperature from **30 °C to 50 °C** increases motor input
  power by about **15 per cent** while cutting refrigerating capacity by almost
  **30 per cent**. To recover the lost capacity you would need a larger
  compressor drawing about **50 per cent more power**.

That single fact justifies almost every condenser clean, every fan replacement
and every head-pressure-control argument you will ever have with a client.

## Capacity control and unloading

A refrigeration load is never constant, but a compressor's displacement is.
Something has to bridge the gap, and the options run from crude to elegant:

| Method | How it works | Notes |
|---|---|---|
| On/off cycling | A thermostat or pressure switch stops and starts the machine | Simplest; hard on motors if cycling is frequent |
| Cylinder unloading | Suction valve reeds are held open on selected cylinders, so those cylinders pump nothing | Steps such as 100/75/50/25%; actuated by oil pressure or by a solenoid |
| Suction port blocking | A plate blocks the suction port of a cylinder bank | Similar effect to valve lifting |
| Hot gas bypass | Discharge gas is fed back to the suction side or to the evaporator inlet | Infinitely variable but wasteful; needs liquid injection or careful placement to control discharge temperature |
| Speed control (VSD) | An inverter varies motor speed, and displacement varies with N | Now the dominant method; excellent part-load efficiency, needs lubrication and cooling checked at low speed |
| Multiple compressors | Racks or packs stage several machines | Standard in supermarkets; also gives redundancy |
| Slide valve | Screw compressors only — returns part of the trapped charge to suction | Gives 20 to 100 per cent capacity |
| Inlet guide vanes | Centrifugal compressors only — pre-swirl the vapour entering the impeller | Efficient down to the surge limit |

Cylinder unloading has a second use worth knowing: **starting unloaded**. With
cylinders held off the line the motor has far less work to do at start-up, so
starting current and starting torque demand drop, and the cylinders load as the
machine comes up to speed.

>! Unloaded operation reduces mass flow, and mass flow is what cools a
>! suction-gas-cooled motor and returns oil from the system. Long periods at
>! minimum capacity can starve a compressor of both. Check the manufacturer's
>! minimum continuous capacity and minimum speed, and make sure suction risers
>! and oil return still work at the lowest step the plant will run at.

## On the job

- Work out the compression ratio before you touch anything. It sorts high-side
  problems from low-side problems in one calculation.
- Always add atmospheric pressure. A ratio worked out from gauge pressures is
  meaningless, and the error is largest exactly where it matters, near the
  bottom of the scale.
- A high compression ratio explains low capacity, high discharge temperature,
  high power and short compressor life all at once.
- Do not blame the compressor for a dirty condenser, a starving expansion valve
  or a blocked drier — but do expect the compressor to be the component that
  eventually dies from them.
`,
  quiz: [
    {
      q: "A system shows 200 kPa gauge suction and 1500 kPa gauge discharge. Taking atmospheric pressure as 101 kPa, what is the compression ratio?",
      options: ["7.5:1", "5.3:1", "6.5:1", "1.3:1"],
      answer: 1,
      explain: "(1500 + 101) ÷ (200 + 101) = 1601 ÷ 301 = 5.32, so about 5.3:1. Dividing the gauge readings instead gives 7.5:1 — a 40 per cent error, and it gets worse the lower the suction pressure goes.",
    },
    {
      q: "Why does volumetric efficiency fall as compression ratio rises?",
      options: [
        "The valves open more slowly at higher pressures",
        "The clearance gas is compressed harder and must re-expand further down the bore before the suction valve can open",
        "The oil becomes thicker and blocks the suction port",
        "The motor slows down under load, reducing displacement",
      ],
      answer: 1,
      explain: "Clearance gas at a higher discharge pressure occupies more of the cylinder when it re-expands, so less room is left for fresh vapour. At about 10:1 volumetric efficiency is down near 40 per cent, and at 20:1 with 5 per cent clearance it theoretically reaches zero.",
    },
    {
      q: "A freezer has just finished a defrost and the suction pressure is unusually high. What is the risk, and what device is normally fitted?",
      options: [
        "Risk of low discharge temperature; fit a head pressure control",
        "Risk of motor overload from the increased mass flow; fit a crankcase pressure regulator",
        "Risk of liquid slugging; fit a suction accumulator only",
        "Risk of loss of oil pressure; fit a larger oil pump",
      ],
      answer: 1,
      explain: "Power rises steeply with suction pressure — about four times between −40 °C and +4 °C suction. A CPR throttles the suction until pressure falls into the compressor's range. The alternative is an oversized motor that is idle most of the time.",
    },
    {
      q: "Raising the condensing temperature of a plant from 30 °C to 50 °C has roughly what effect?",
      options: [
        "Power down 15 per cent, capacity up 30 per cent",
        "Power up 15 per cent, capacity down almost 30 per cent",
        "No change in power, capacity down 15 per cent",
        "Power up 50 per cent, capacity unchanged",
      ],
      answer: 1,
      explain: "You pay more and get less — the worst combination. Recovering the lost capacity would take a compressor drawing about 50 per cent more power. This is the arithmetic behind insisting on clean condensers and working condenser fans.",
    },
    {
      q: "What is the main risk of running a reciprocating compressor for long periods on its minimum unloaded step?",
      options: [
        "The clearance volume increases permanently",
        "The compression ratio falls too low for the valves to open",
        "Reduced mass flow may under-cool a suction-gas-cooled motor and fail to return oil from the system",
        "The crankcase heater will overheat the oil",
      ],
      answer: 2,
      explain: "Unloading cuts mass flow, and mass flow does two jobs besides cooling the load: cooling the motor windings and carrying oil back up suction risers. Always check the manufacturer's minimum continuous capacity and confirm oil return at the lowest step the plant will actually run.",
    },
  ],
},

/* ======================================================================
   8 — Rotary and centrifugal compressors
   ====================================================================== */
{
  id: "rotary-and-centrifugal",
  title: "Rotary (Type 2) and centrifugal (Type 3) compressors",
  minutes: 12,
  simple: "A rotary compressor squeezes gas by rolling a barrel around inside a can, sweeping the vapour into a smaller and smaller crescent. A centrifugal machine works completely differently: it flings vapour outwards with a spinning fan wheel, exactly like a water pump impeller, and turns that speed into pressure. Rotaries are small and quiet; centrifugals are huge and chill whole office towers.",
  refs: ref("rotary (Type 2) and centrifugal (Type 3) compressors"),
  content: `
Between the piston at one end of the scale and the office-tower chiller at the
other sit two very different machines. They share only one thing: neither has a
piston reversing direction, so neither wastes energy stopping and restarting a
mass of metal twice per revolution.

## Rotary (Type 2) compressors

In a rotary compressor an **eccentric rotor turns inside a cylinder**. Rotaries
have come in and out of fashion, but their two strong points have never
changed: they are very compact and they produce very little vibration. That
combination is why rotary compressors now dominate domestic and small
commercial air conditioning, where quietness sells units. In industrial plant,
rotary vane machines were once standard as **boosters** (the low-stage
compressor of a two-stage system), but screw compressors have proved better
suited to that work.

There are two main forms.

### Rotary blade (rolling piston)

A cylindrical steel **roller** is carried on an eccentric shaft mounted
concentrically in the cylinder, so the roller rolls around the bore with a
line contact that moves as the shaft turns. A single **fixed blade**, held
against the roller by a spring, divides the crescent-shaped space into a
suction side and a compression side.

As the shaft turns:

1. Vapour is drawn in behind the roller through the suction port and fills the
   growing crescent.
2. Once the roller passes the suction port, that charge is sealed off.
3. Continued rotation shrinks the space ahead of the roller, so pressure and
   temperature rise.
4. The gas is finally forced past a discharge valve into the high side.

Because the process is continuous and there is no clearance volume to
re-expand, rotary compressors have inherently good volumetric efficiency and
very smooth torque. Small hermetic rotaries of this pattern are what you will
find inside most split-system outdoor units.

### Rotary vane

Here the blades move with the rotor rather than being fixed to the housing. An
eccentrically mounted rotor carries several **vanes** sliding in radial slots.
Centrifugal force, and sometimes springs or oil pressure, throws the vanes out
against the cylinder wall, so each pair of vanes traps a pocket of vapour. As
the rotor turns, the pockets on the discharge side shrink and compression
occurs. Multi-vane machines share the work between several pockets and are
correspondingly smoother again.

| Feature | Rotary blade | Rotary vane |
|---|---|---|
| Blade | One, fixed in the housing | Several, sliding in the rotor |
| Typical size | Small, hermetic | Small to medium; historically industrial boosters |
| Common use today | Domestic and light commercial air conditioning | Boosters, some packaged plant |

>! Almost all small rotaries are high-side-shell machines and are extremely
>! intolerant of liquid floodback and of reverse rotation. They also have very
>! little internal volume to absorb a slug. Never bar or run one backwards, and
>! never start a rotary system without confirming the crankcase or shell has
>! been warmed as the manufacturer requires.

## Centrifugal (Type 3) compressors

A centrifugal compressor does not trap and shrink a volume at all. A **rotor or
impeller** carrying many blades spins at high speed inside a housing. Vapour
enters at the centre (the eye), is flung outward by centrifugal force, and
leaves the blade tips at very high velocity. That velocity is then converted
into pressure in a diffuser and volute, in exactly the same way a centrifugal
water pump builds head. This makes it a **dynamic** machine rather than a
positive-displacement one.

### What that changes in practice

- **Huge volume, modest pressure rise per stage.** One impeller cannot produce
  a large pressure ratio, so machines are built with two or more stages in
  series for higher lifts.
- **Very large capacities.** Centrifugals are the standard prime mover for
  large building water chillers, from a few hundred kilowatts up to many
  megawatts.
- **High shaft speed.** Impellers must run far faster than a 50 Hz motor, so a
  step-up **gear transmission** is usual, though some modern machines use
  direct-drive high-speed motors on magnetic bearings.
- **Refrigerant choice.** Centrifugals suit refrigerants that produce a large
  vapour volume per kilowatt. Older Australian machines used R11 and R113, then
  R123; current machines commonly use R134a and low-pressure HFO refrigerants.

### Circuit features you will meet on a centrifugal chiller

- **Cooler and condenser** are usually shell-and-tube, with chilled water
  through one and condenser water through the other.
- Metering is by **fixed orifice or float valve** rather than a thermostatic
  expansion valve, often with a **subcooler coil** in the condenser to squeeze
  out extra refrigerating effect.
- A **two-stage machine with an economiser** takes flash gas from an
  intermediate-pressure vessel straight into the second-stage suction, so that
  gas is not compressed all the way from evaporator pressure. This is one of
  the reasons large centrifugal plant is so efficient.
- **Purge unit.** Machines using a low-pressure refrigerant run with the cooler
  *below atmospheric pressure*, so any leak lets air and moisture **in** rather
  than refrigerant out. A purge unit continuously removes those
  non-condensables and returns refrigerant to the machine. A purge that is
  running constantly is telling you there is a leak.
- **Capacity control by inlet guide vanes**, which pre-swirl the vapour
  entering the impeller. Motorised vane actuators and an over-temperature
  safety switch on the motor are standard.

### Surge

Because a centrifugal builds pressure by velocity, it can only push against so
much head. If the load falls too far, or the condenser pressure rises too high,
the flow through the impeller becomes unstable and momentarily reverses. The
machine **surges** — a loud, rhythmic thumping, swinging amperage and rapid
bearing damage. Surge is the reason centrifugal capacity control has a hard
lower limit and why condenser water temperature and flow are watched so
closely.

## What to remember

- Rotary: eccentric rotor, no clearance re-expansion, compact and quiet, now
  the default for small air conditioning.
- Two rotary forms — fixed blade with a rolling piston, and sliding vanes in
  the rotor.
- Centrifugal: dynamic, not positive displacement; big volume, staged for
  pressure, geared up in speed.
- Low-pressure centrifugal machines run in a vacuum, so leaks bring air in and
  purge units are essential.
- Surge is the characteristic centrifugal failure mode and it is a condition,
  not a component fault.
`,
  quiz: [
    {
      q: "What fundamentally distinguishes a centrifugal compressor from the other four types?",
      options: [
        "It uses no lubricating oil",
        "It is a dynamic machine that adds velocity to the vapour and converts it to pressure, rather than trapping and shrinking a volume",
        "It can only be used with ammonia",
        "It compresses on both sides of the impeller at once",
      ],
      answer: 1,
      explain: "Reciprocating, rotary, screw and scroll are all positive-displacement machines. A centrifugal accelerates vapour and then converts that kinetic energy to pressure in a diffuser, which is why it moves enormous volumes but needs multiple stages for a high pressure ratio — and why it can surge.",
    },
    {
      q: "Why does a chiller using a low-pressure refrigerant need a purge unit?",
      options: [
        "To remove excess oil from the condenser",
        "Because the cooler runs below atmospheric pressure, so leaks admit air and moisture that must be continuously removed",
        "To bleed off refrigerant when the head pressure gets too high",
        "To keep the impeller bearings supplied with clean refrigerant",
      ],
      answer: 1,
      explain: "Below atmospheric pressure the leak direction reverses: air comes in instead of refrigerant going out. Those non-condensables raise head pressure and carry moisture. A purge unit that runs continuously is a leak indicator, not just a housekeeping device.",
    },
    {
      q: "A rotary blade compressor differs from a rotary vane compressor in that:",
      options: [
        "The rotary blade type has several vanes sliding in the rotor",
        "The rotary blade type has one blade fixed in the housing, bearing against a rolling roller on an eccentric shaft",
        "The rotary blade type has no eccentric",
        "The rotary blade type uses reed valves on both suction and discharge",
      ],
      answer: 1,
      explain: "Fixed blade plus rolling piston is the rotary blade arrangement, and it is what sits inside most small split-system outdoor units. In the vane type the blades travel with the rotor and are thrown out against the bore, dividing the space into several pockets.",
    },
    {
      q: "A large centrifugal chiller starts thumping rhythmically with swinging amperage as the building load drops away. What is happening?",
      options: [
        "The compressor is unloading normally",
        "The oil pump has failed",
        "The machine is surging because flow through the impeller has become unstable",
        "Liquid refrigerant is entering the impeller eye",
      ],
      answer: 2,
      explain: "Surge occurs when the impeller can no longer sustain flow against the head, so flow momentarily reverses. It is destructive to bearings and is why centrifugal capacity control has a firm lower limit — and why high condenser water temperature makes surge more likely at part load.",
    },
  ],
},

/* ======================================================================
   9 — Screw and scroll compressors
   ====================================================================== */
{
  id: "screw-and-scroll",
  title: "Screw (Type 4) and scroll (Type 5) compressors",
  minutes: 13,
  simple: "A screw compressor squeezes vapour between two meshing screws, like a mincer that gets tighter as you go along, and it swims in oil to seal the gaps. A scroll compressor uses two nested spirals — one held still, one wobbling around it — that walk pockets of gas inwards until they pop out of a hole in the middle. Neither has valves or a piston to reverse, so both run smoothly.",
  refs: ref("screw (Type 4) and scroll (Type 5) compressors"),
  content: `
The two newest families in the chapter have taken over opposite ends of the
market. Screws own large commercial and industrial plant; scrolls own packaged
air conditioning. Both are continuous, rotary, valveless machines, and both owe
their efficiency to the same thing: nothing inside them ever has to stop and
reverse.

## Screw (Type 4) compressors

When screw compressors were introduced they were limited to large refrigeration
loads of around 350 kW and up. Acceptance in the industry brought smaller
machines, and in Australia screws are now installed in large food processing
plants and cold stores, supermarkets, passenger ferries and big building air
conditioning. Their compact design and small footprint make screw chillers a
favourite when an existing building plant room has to be upgraded.

**The single major disadvantage that limits their use is noise.**

### How a twin-screw machine pumps

The common helical machine has a **male rotor** and a **female rotor** meshing
inside a close-fitting casing. The spaces between the rotor threads and the
housing are called **interlobe chambers**.

1. Vapour enters at one end of the casing and travels mainly **axially** into
   the interlobe chambers, which are large and open at that point.
2. At a certain point of rotation the next thread cuts the chamber off from the
   inlet, and compression begins.
3. As the threads mesh further, the trapped space shrinks and the charge is
   simultaneously driven towards the high-pressure end of the rotors.
4. When the chamber reaches the **discharge port** at the high-pressure end,
   discharge takes place, finishing as the thread mesh reaches the end face.

**Synchronising gears** keep the rotors from actually touching one another even
though they turn at different speeds.

### Why so much oil

Screw efficiency is limited by **leakage** — compressed vapour escaping back to
the inlet or to lower-pressure spaces through the clearances between the
rotors, between the rotors and the housing, and at the ends. The industry's
answer is to flood the machine with oil. Large machines above about 1000 kW
circulate up to **4.5 litres per second** of oil, pumped in and injected
between the rotors, where it seals every clearance.

The penalties are real: power to pump the oil, oil coolers, and **oil
separators that are often physically larger than the compressor and motor
together**. The efficiency gained more than repays them, and there is a large
bonus — the oil absorbs much of the heat of compression and keeps the discharge
temperature low.

### High compression ratios

A screw compressor can pump efficiently up to compression ratios of about
**20:1**, for three reasons:

- **No re-expansion.** There is no clearance volume at the end of a stroke to
  re-expand, because there is no stroke. Under full-load operation, vapour that
  enters at the suction port is entirely discharged.
- **Built-in volume ratio.** The internal port geometry is set at manufacture to
  suit the compression ratio the machine will actually work at: roughly
  **3:1 to 5:1** for booster duty, and **10:1 to 14:1** for single-stage duty.
  Running a machine far away from its built-in ratio wastes power.
- **Oil cooling.** The large volume of cool injected oil holds the refrigerant
  temperature down. Ammonia discharge temperature should not exceed about
  **89 °C even at 16:1**, where a single-stage reciprocating compressor would
  be discharging ammonia at around **160 °C at only 8:1**.

### Advantages summarised

- almost no wearing parts, because oil prevents metal-to-metal contact between
  rotors
- oil-free delivery when efficient oil separators are used
- high specific output when run at the factory-set compression ratio
- **no compressor valves at all**
- low discharge temperature even at high compression ratio
- pure rotary motion, so little vibration and light foundations
- positive displacement, giving surge-free operation at all conditions
- works with high-pressure refrigerants such as ammonia, R134a and R22
- tolerant of liquid refrigerant passing through
- **capacity control from 20 to 100 per cent**, normally by a hydraulically
  operated slide valve that returns part of the trapped charge to suction.

### The monoscrew

A second form, the **globoid** or **worm** compressor, uses a single rotor
instead of a pair. The idea is credited to Leonardo da Vinci at the end of the
fifteenth century, but the practical machine is modern and very successful.
Externally it looks like any other screw unit, with the very large oil separator
and oil coolers as its most obvious features.

Inside there is one six-thread helically grooved rotor with a cylindrical outer
mantle and a globoid core, and two identical eleven-tooth gate rotors ("gear
wheels") engaging the main rotor from either side, on a single plane through
its axis. The gate rotor teeth seal the grooves and sweep the trapped vapour
towards the discharge ports. Because the two gate rotors work on opposite
sides, the gas loads on the main rotor largely cancel, which is very kind to
the bearings.

## Scroll (Type 5) compressors

A scroll compressor works with **two identical involute spiral scrolls**, set at
a relative angle of 180 degrees to one another. Assembled that way, they make
contact at several points along their wraps, and between those contacts lies a
run of **crescent-shaped pockets**. One scroll is held fixed; the other orbits around the centre of the fixed scroll's wrap, driven by
a simple **short-throw crank**. As the crank turns, the pairs of contact points
travel along the spiral curves. An **anti-rotation coupling** between the back
of the orbiting scroll and the stationary part keeps the two at their correct
relative angle — the orbiting scroll orbits but never spins.

### The compression process

- Vapour is drawn in at the **periphery** of the scrolls.
- It is trapped in a pair of pockets, which shrink as they migrate towards the
  centre of the spiral.
- The compressed vapour is discharged through an outlet port at the **centre**
  of the fixed scroll.
- A new pair of pockets forms with every shaft rotation, so several charges are
  in different stages of compression at once, and discharge is nearly
  continuous. **No valves are needed.**

### Hermetic scroll construction

In a typical hermetic scroll the scroll set sits at the **top** of the
cylindrical shell with a two-pole motor below it. Suction vapour flows straight
to the scroll periphery, is compressed, and is discharged from the centre of
the fixed scroll into the **interior of the shell** — so the whole shell sits at
**discharge pressure**, and the discharged gas flows down over the motor
windings before leaving through the discharge pipe.

Lubrication follows the pressure difference. Oil in the bottom of the shell is
pushed up a path machined in the crankshaft by the difference between shell
pressure and the back-pressure chamber, feeds the bearings, and finally reaches
the spiral walls through back-pressure ports. Most of it separates out in the
shell and drains back to the sump.

Scrolls are also built in **open-drive** form for automotive air conditioning.

### Claimed advantages over an equivalent reciprocating machine

| Measure | Manufacturers' claim |
|---|---|
| Size | About 40 per cent smaller |
| Mass | About 15 per cent lighter |
| Efficiency | About 10 per cent higher |
| Noise | About 5 per cent quieter |

Scrolls are used extensively in automotive air conditioning, are the compressor
of choice for many split-system manufacturers, and larger models cover high-,
medium- and low-temperature refrigeration. They are also used in CO2 heat pump
hot water units.

>! Scroll compressors will only operate in one direction of rotation. On a
>! three-phase machine it is imperative to check rotation direction during
>! commissioning. Run backwards, a scroll makes a loud rattle, pumps nothing,
>! pulls the system into a vacuum and can be destroyed within minutes. Swap two
>! phases and re-check — and remember the same warning applies to three-phase
>! screw compressors.

## What to remember

- Screw: continuous compression between meshing rotors, sealed and cooled by
  injected oil, no valves, no clearance re-expansion, 20 to 100 per cent
  capacity control, efficient to about 20:1. Main drawback is noise.
- Built-in volume ratio must match the duty — booster or single stage.
- Monoscrew uses one main rotor and two gate rotors, balancing the loads.
- Scroll: two involute spirals, one fixed and one orbiting, valveless, pockets
  compressed from periphery to centre.
- Most hermetic scrolls have a shell at discharge pressure and are
  direction-sensitive.
`,
  quiz: [
    {
      q: "Why can a screw compressor work efficiently at compression ratios as high as 20:1 when a reciprocating machine cannot?",
      options: [
        "Because it runs much more slowly",
        "Because there is no clearance volume to re-expand, the port geometry is set for the duty, and injected oil keeps the discharge temperature down",
        "Because it uses much larger suction and discharge valves",
        "Because it compresses in two stages internally",
      ],
      answer: 1,
      explain: "A recip is limited by clearance re-expansion and by discharge temperature; a screw has neither problem. Injected oil seals the clearances and absorbs the heat of compression — ammonia leaves a screw at about 89 °C at 16:1 where a recip would be at 160 °C at only 8:1.",
    },
    {
      q: "What is the purpose of the very large volume of oil circulated through a screw compressor?",
      options: [
        "To lubricate the synchronising gears only",
        "To seal the clearances between the rotors and the housing and to absorb the heat of compression",
        "To act as a refrigerant in its own right",
        "To provide hydraulic power for the discharge valves",
      ],
      answer: 1,
      explain: "Leakage back through the rotor clearances is what limits screw efficiency, and flooding those clearances with oil is the cure. The bonus is a much lower discharge temperature. The cost is oil pumping power, oil coolers and separators often bigger than the compressor itself.",
    },
    {
      q: "A three-phase hermetic scroll compressor has just been installed. It runs, makes a loud rattling noise, draws low current and the suction pressure falls into a vacuum. What should you check first?",
      options: [
        "The thermostatic expansion valve superheat setting",
        "The direction of rotation, by swapping two supply phases",
        "The crankcase oil level",
        "The condenser fan rotation",
      ],
      answer: 1,
      explain: "Those are the classic symptoms of a scroll running backwards. Scrolls compress only in one direction, and reverse rotation will ruin one quickly. Phase rotation must be confirmed at commissioning on every three-phase scroll and screw compressor.",
    },
    {
      q: "In a typical hermetic scroll compressor, what pressure is the shell at, and why does it matter?",
      options: [
        "Suction pressure, because the vapour enters the shell before the scrolls",
        "Discharge pressure, because gas is discharged from the centre of the fixed scroll into the shell before leaving through the discharge pipe",
        "Atmospheric pressure, because the shell is vented",
        "Intermediate pressure, set by a back-pressure valve",
      ],
      answer: 1,
      explain: "It is a high-side shell. The discharged gas passes down over the motor before leaving, and the shell-to-back-pressure-chamber difference is what drives oil up the crankshaft to the bearings. It also means the whole shell is hot and at high pressure — treat it accordingly.",
    },
    {
      q: "What is the main disadvantage that limits the use of screw compressors?",
      options: ["Noise", "Inability to handle liquid refrigerant", "Very high discharge temperature", "The need for compressor valves"],
      answer: 0,
      explain: "Noise is the chapter's stated limitation. Screws are actually tolerant of liquid passing through, run cool because of the injected oil, and have no valves at all — those three are among their advantages, not their problems.",
    },
  ],
},

/* ======================================================================
   10 — Condensing units
   ====================================================================== */
{
  id: "condensing-units",
  title: "Condensing units",
  minutes: 9,
  simple: "A condensing unit is just the hot half of a system bolted onto one frame at the factory: compressor, motor, condenser and often a receiver, ready to wire up and pipe to an evaporator. It saves you assembling those parts on site in the rain, which is why almost every coolroom in the country has one sitting on the roof or against a wall.",
  refs: ref("condensing units and hermetic motor-compressor assemblies"),
  content: `
Walk behind any Australian supermarket, service station or pub and you will
find them: rectangular frames carrying a compressor, a finned coil and a fan.
That package is a **condensing unit**, and it is how most of the trade actually
buys the high side of a refrigeration system.

## What is in the package

A condensing unit combines, on one base or in one housing:

- the **compressor**
- its **driver**, usually an electric motor
- the **discharge line**
- the **condenser**
- very often a **liquid receiver**
- and in practice the service valves, controls, contactor and safety switches
  that go with them.

The name describes its function in the system: it takes the vapour the
evaporator has produced and **condenses it back into liquid**, ready to be
metered into the evaporator again. Everything on the high side, in one delivery.

## How condensing units are classified

The first split is by the medium used to condense the refrigerant.

| Type | Cooling medium | Where you see it | Notes |
|---|---|---|---|
| Air-cooled | Ambient air over a finned coil, moved by a fan | The great majority of Australian commercial installations | Simple; head pressure follows ambient, so summer performance is the design case |
| Water-cooled | Water through a shell-and-tube, tube-in-tube or plate condenser | Plant rooms, larger installations, where a cooling tower already exists | Lower and steadier condensing temperature, but adds water treatment and tower maintenance |

The second split is by the compressor arrangement, which follows the drive
classification from earlier in this module:

- **Open-drive condensing units**, with a belt- or coupling-driven compressor.
- **Semi-hermetic condensing units**, the workhorse of commercial refrigeration.
- **Hermetic condensing units**, which use a hermetically sealed
  motor–compressor assembly: a direct-drive shaft carrying the motor rotor, the
  whole assembly spring-mounted and sealed inside a welded steel shell. These
  cover a very wide range of domestic and commercial applications.

## Why the packaged unit took over

The packaged condensing unit borrowed its logic from the packaged air
conditioner, and the pay-off is the same: **most of the assembly work is done
in the factory, not on site.** For the installer that means

- fewer joints to braze in awkward positions, so fewer leaks
- components already matched to each other and to the intended duty
- factory wiring, factory-fitted controls and factory pressure testing
- a shorter, more predictable installation, which matters most when the site is
  a live shop or a cold store that cannot be shut down for long.

It also widened the range of applications the humble condensing unit could
cover, from a single small coolroom up to multi-compressor packs.

## Selecting and installing one

- **Match the duty, not just the kilowatts.** Condensing units are rated at a
  stated evaporating temperature and a stated ambient. A unit rated at 32 °C
  ambient will not deliver its catalogue capacity on a 42 °C day in western
  Sydney or Perth.
- **Check the temperature classification.** Low-, medium- and high-temperature
  units have different compressors and different motors, as covered in the
  compression ratio lesson.
- **Give the condenser air.** Leave the manufacturer's clearances around the
  coil, do not let discharge air recirculate back into the inlet, and keep the
  unit clear of the kitchen exhaust, the dust and the rubbish bay if you
  possibly can.
- **Think about noise and the neighbours.** Fan and compressor noise from
  rooftop and wall-mounted units is a common complaint, and local council
  requirements apply.
- **Plan the pipe run.** The condensing unit's position sets the suction riser
  height, the oil return arrangement and the liquid line pressure drop.
- **Mount it so it can be serviced.** Someone has to reach the terminals, the
  valves, the sight glass and the coil face.

>! Condensing units sit outdoors and look inert, but the shell, the discharge
>! line and the condenser inlet run hot enough to burn, the fan starts without
>! warning under thermostat control, and the whole high side holds refrigerant
>! at pressure. Isolate and lock out before removing guards, prove dead before
>! touching terminals, and recover the charge lawfully before opening the
>! circuit — handling refrigerant requires an ARCtick licence.

## What to remember

- A condensing unit is the compressor, driver, discharge line, condenser and
  usually a receiver, packaged together.
- Its job is to reclaim the vapour and condense it back to liquid.
- Classified first by condensing medium (air- or water-cooled), then by
  compressor type (open, semi-hermetic, hermetic).
- Packaging shifts labour from the site to the factory, which is where most of
  its value lies.
- Capacity ratings are conditional — always check the evaporating temperature
  and ambient the rating was taken at.
`,
  quiz: [
    {
      q: "Which set of components makes up a condensing unit?",
      options: [
        "Evaporator, expansion valve, drier and suction line",
        "Compressor, driver, discharge line, condenser and usually a receiver",
        "Condenser and cooling tower only",
        "Compressor, evaporator and thermostat",
      ],
      answer: 1,
      explain: "A condensing unit is the whole high side packaged together — everything from the compressor suction connection to the liquid line outlet. The evaporator and metering device are supplied and installed separately and matched to it.",
    },
    {
      q: "A catalogue rates an air-cooled condensing unit at 8.5 kW. What must you check before assuming it will do the job?",
      options: [
        "Only the supply voltage",
        "The evaporating temperature and the ambient temperature the rating was taken at",
        "The colour of the cabinet",
        "Nothing — condensing unit ratings are absolute",
      ],
      answer: 1,
      explain: "Capacity falls as evaporating temperature drops and as ambient rises, and both effects are large. A unit rated at a mild ambient and a medium-temperature evaporator can fall well short on a 42 °C day serving a freezer — which is why derating to the local design ambient is part of selection.",
    },
    {
      q: "What is the principal advantage of a packaged condensing unit over assembling the same components on site?",
      options: [
        "It uses less refrigerant in every case",
        "It cannot suffer a refrigerant leak",
        "Most of the assembly, wiring and testing is completed in the factory, cutting on-site work and the leaks that come with it",
        "It removes the need for an ARCtick licence",
      ],
      answer: 2,
      explain: "Factory assembly means fewer field joints, matched components, factory wiring and factory pressure testing. It does not change the refrigerant charge, does not make the unit leak-proof, and certainly does not remove any licensing obligation.",
    },
    {
      q: "A hermetic condensing unit uses which compressor arrangement?",
      options: [
        "A belt-driven compressor with an external motor and a shaft seal",
        "A direct-drive motor–compressor assembly sealed inside a welded steel shell",
        "A bolted, field-strippable compressor with an accessible stator",
        "A compressor with the motor mounted outside the dome behind a sealing sleeve",
      ],
      answer: 1,
      explain: "That welded, spring-mounted, direct-drive assembly is the definition of a hermetic motor–compressor. Option 1 describes an open drive, option 3 a semi-hermetic, and option 4 a rotor-sealed machine such as the Rotoseal.",
    },
  ],
},

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
