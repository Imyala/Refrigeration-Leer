/* =========================================================================
   Course content, module 202 — Refrigeration piping and line sizing.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 2 — Refrigeration piping.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Chapter 2, refrigeration piping",
  ];

  /* Each lesson cites the same chapter, narrowed to its own sub-topic. */
  function ref(topic) {
    return ["Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — " + topic];
  }

  const MODULES = [
    {
      id: "v2-piping",
      stream: "v2",
      title: "R2.2 · Refrigeration piping and line sizing",
      blurb: "Choosing, routing, supporting and sizing refrigerant lines so that oil always returns to the compressor, pressure drop stays small and liquid never slugs back.",
      lessons: [

/* ======================================================================
   1 — Piping materials
   ====================================================================== */
{
  id: "piping-materials",
  title: "Piping materials and how to choose them",
  minutes: 9,
  simple: "Refrigerant pipe is usually copper on small jobs and steel on big ones. Copper is light, does not rust much and is easy to bend and braze, but it must never be used with ammonia, which eats copper the way salt water eats a car body. Whatever you use, it has to arrive clean and capped, because dirt inside a pipe ends up inside the compressor.",
  refs: ref("piping materials and their selection"),
  content: `
Every refrigeration system is really two machines joined by pipe: the pipe is
where the refrigerant spends most of its life, and it is where most avoidable
capacity loss and most avoidable compressor deaths begin. Before you can size
a line you have to decide what it is made of, and that decision is driven by
four things — the size of the plant, the refrigerant in it, what the pipe will
be exposed to, and the cost of the material plus the labour to install it.

## The five materials you will meet

| Material | Where it is used | Watch out for |
| --- | --- | --- |
| Copper | The default for small and medium halocarbon plant, up to about 100 mm OD | Never with ammonia; check the wall thickness suits the pressure |
| Black steel | Large plant, all ammonia work, anything over 100 mm | Heavier, needs welding and a coat of paint or it rusts |
| Brass | Fittings, valve bodies, adaptors | Non-ferrous, so it is out on ammonia for the same reason as copper |
| Aluminium | Some evaporator and condenser circuits, factory-built assemblies | Joining in the field is specialised; watch galvanic contact with copper |
| Stainless steel | Corrosive or hygiene-critical environments, some low-temperature work | Expensive, and needs the right filler and technique |

All five are compatible with the common refrigerants with one large exception:
**copper and brass must not be used with ammonia (R717)**. In the presence of
moisture, ammonia attacks non-ferrous metals, so an ammonia plant is piped in
steel throughout, and even the gauges and valves must be ammonia-rated.

## Copper or steel — where the line is drawn

For every refrigerant except ammonia, refrigerant lines **up to 100 mm OD may
be either copper or steel**. Above 100 mm OD the line should be steel. In
practice the change-over happens earlier: if a job has a considerable amount
of pipe **larger than 50 mm**, most contractors pipe the whole installation in
steel rather than mixing trades, fittings and jointing methods on one site.

Copper wins on small and medium work for very practical reasons:

- It is far lighter, so a two-person crew can hang it without a crane.
- It resists corrosion better than bare steel in ordinary plant rooms.
- It bends, and it is brazed rather than welded, so it is faster to install and easier to modify later.

Steel wins as the pipe gets large because copper of that diameter becomes
expensive, heavy, floppy between supports and awkward to braze reliably.

## Tube grades and wall thickness

Refrigeration copper is sold in several wall thicknesses. **Average-duty tube**
covers the great majority of refrigeration and air conditioning work, but the
grade must be matched to the working pressure of the refrigerant. R410A, R32
and especially R744 (carbon dioxide) run at pressures that demand
**heavier-gauge tube** than an old R22 or R134a job of the same diameter.
Check the manufacturer's pressure rating for the tube, at temperature, before
you assume that what is on the truck will do.

Two habits separate a tradesperson from an amateur here:

1. **Refrigerant lines are sized on outside diameter (OD).** A "16 mm line" means 15.9 mm OD tube. Plumbing habits of quoting nominal bore will get you the wrong pipe.
2. **Use refrigeration-quality tube only.** In Australia that means tube manufactured for air conditioning and refrigeration service (AS/NZS 1571 covers seamless copper tube for this duty) — not water-plumbing tube, which is not degreased and is not capped.

## Cleanliness is not optional

The inside of a refrigerant line must be free of dirt, scale, swarf and oxide.
Anything left inside will be swept into the system on start-up, where it
blocks the filter-drier, jams the expansion valve or scores bearings. Buy tube
that has been cleaned by the manufacturer with **both ends capped**, and keep
the caps on until the moment you braze. When you do braze, purge with dry
oxygen-free nitrogen so you do not manufacture your own black copper-oxide
scale on the inside of a clean pipe.

>! Cutting oil, water and old refrigerant oil left in a line are contaminants
>! too. Never blow a line clear with oxygen — with oil present that is an
>! explosion, not a purge. Use dry nitrogen, regulated, every time.

## Sizes you can actually buy

Sizing tables list a continuous run of diameters, including sizes such as
38.1 mm that exist in the table but are not stocked as refrigeration-grade
tube in Australia. When a calculation lands on an odd size, you go **up** to
the next standard size that is genuinely available (in this example 41.3 mm).
Going down to save money on tube guarantees extra pressure drop for the life
of the plant.

## On the job

- Small halocarbon plant: refrigeration-grade copper, average duty, sized on OD.
- Anything ammonia, or a job with much pipe over 50 mm: steel throughout.
- Confirm the tube's pressure rating suits the refrigerant, not just the diameter.
- Buy capped, clean tube; recap offcuts; braze under a nitrogen purge.
- If the calculated size is not a stock size, select the next size up.
`,
  quiz: [
    {
      q: "A plant room is being piped for an R717 (ammonia) system. Which material choice is acceptable?",
      options: [
        "Copper tube, because it is lighter and easier to braze",
        "Brass fittings on copper tube, because brass is corrosion resistant",
        "Black steel pipe throughout, with steel or ammonia-rated valves",
        "Copper for lines under 50 mm, steel above that",
      ],
      answer: 2,
      explain: "Ammonia attacks non-ferrous metals in the presence of moisture, so copper and brass are ruled out completely — the size of the line makes no difference. Steel is the standard ammonia material. The tempting answer is the last one, because that 50 mm rule is real, but it applies to halocarbon plant, not ammonia.",
    },
    {
      q: "For a halocarbon system, at what outside diameter should refrigerant lines change from copper to steel?",
      options: [
        "Above 25 mm OD",
        "Above 50 mm OD in every case",
        "Above 100 mm OD, though steel is often used throughout when much of the job exceeds 50 mm",
        "Never — copper is suitable at any diameter",
      ],
      answer: 2,
      explain: "The technical limit is 100 mm OD: above that, use steel. The 50 mm figure is a practical rule — when a lot of the job is bigger than 50 mm, contractors usually pipe the whole installation in steel to avoid mixing jointing methods. Neither figure is a hard 25 mm cut-off.",
    },
    {
      q: "Why must refrigeration tube be bought clean and capped rather than using ordinary plumbing tube?",
      options: [
        "Plumbing tube has a smaller bore for the same nominal size",
        "Uncapped tube carries dirt, scale and moisture that end up in the drier, expansion valve and compressor",
        "Plumbing tube cannot be brazed",
        "Capped tube is cheaper per metre",
      ],
      answer: 1,
      explain: "The contaminants are the issue. Anything inside the tube is swept into the circuit at start-up and finishes up blocking the filter-drier or the metering device, or scoring the compressor. Plumbing tube can be brazed and its bore is not the problem — it simply is not supplied degreased and sealed.",
    },
    {
      q: "A suction line calculation gives 38.1 mm as the required size. What should the installer do?",
      options: [
        "Fit 34.9 mm, since the calculation includes a safety margin anyway",
        "Fit 41.3 mm, the next standard refrigeration size available",
        "Fit two 28.6 mm lines in parallel",
        "Fit 38.1 mm water tube, which is stocked by plumbing suppliers",
      ],
      answer: 1,
      explain: "38.1 mm is a table size, not a stocked refrigeration size in Australia, so you go up to 41.3 mm. Dropping to 34.9 mm adds pressure drop for the life of the plant, and water tube is neither clean nor pressure-rated for refrigerant duty.",
    },
  ],
},

/* ======================================================================
   2 — General piping practice
   ====================================================================== */
{
  id: "piping-practice",
  title: "Routing, supporting and de-vibrating pipework",
  minutes: 10,
  simple: "Pipe has to be run where people will not walk into it, held up often enough that it does not sag, and given a little freedom to move as it warms and cools. Because a compressor shakes like a washing machine on spin, the first few metres of pipe are shaped into loops that act like springs and soak the shaking up instead of passing it on.",
  refs: ref("general piping comments, supports, expansion, vibration and noise"),
  content: `
A neatly run system is not vanity. Pipework that is well located, well
supported and free to move is pipework that does not leak, does not fatigue at
the joints and does not sing at three in the morning. Most of the field
failures blamed on "a bad braze" are actually the result of a joint being
worked back and forth by vibration or by thermal movement for a couple of
years.

## Where the pipe goes

Refrigerant piping must not become a safety hazard, must not block the normal
operation or maintenance of the plant, and must not sterilise the space it
runs through. Where the flow requirements allow, keep piping **at least 2.3 m
above the floor** unless it is run tight against a wall or ceiling.

- Run lines plumb, straight and parallel to the building.
- The one deliberate exception is pitch: horizontal **suction, discharge and condenser-to-receiver lines are pitched in the direction of flow** so that oil and liquid drain the way you want them to.
- Leave room to get a spanner on every valve, a clamp meter on every sensor, and a core tool into every drier.

## Supports

| Requirement | Rule of thumb |
| --- | --- |
| Spacing of hangers or brackets | No more than 3 m apart, closer if the tube sags |
| Support near a change of direction | Within 200 mm of the bend, preferably on the longest-run side |
| Valves in horizontal pipe | Install with the stem horizontal wherever possible |
| Valves in copper smaller than 25 mm | Support the valve independently of the tube |
| Risers | Support from the floor or hang from the ceiling |

The 200 mm rule matters more than it looks. A bend is where the pipe converts
axial movement into bending stress, so an unsupported elbow at the end of a
long run is a fatigue crack waiting to happen. Valves in small copper get
their own support because the mass of the valve body hanging on 15.9 mm tube
is enough to work the joints loose.

Where a line passes through a floor, wall or ceiling, fit a **sleeve** of a
suitable material. The sleeve should project about **25 mm beyond each face**
of the opening, and floor sleeves should have a curb around them so that wash
water does not run down the penetration.

## Thermal movement

Refrigerant piping expands and contracts as it changes temperature — roughly
**20 mm of length change per 30 m of pipe**. On most jobs the natural
flexibility of the route absorbs it, which is exactly why offsets and changes
of direction are useful rather than untidy. The one thing you must not do is
**rigidly anchor both ends of a long straight run**: there is nowhere for the
movement to go except into the joints.

## Vibration and noise

Vibration in refrigerant pipe almost never starts in the pipe. It comes from
three places:

1. A **rigid connection to a reciprocating compressor**, which shakes on its mounts.
2. **Gas pulsations** from the opening and closing of the compressor's valves — a series of pressure pulses at cylinder frequency.
3. **Turbulence** where the refrigerant velocity is too high.

Centrifugal and rotary machines rotate smoothly and their vapour flow is
continuous, so only the third cause normally applies to them. Reciprocating
plant suffers all three, and badly designed pipe can *amplify* a small
vibration until supports tear out or a joint fractures.

### Fixes that work

- **Vibration loops.** On small units piped in soft-drawn copper, form a loop in the suction and discharge lines near the compressor. Properly formed, the loop acts as a spring and absorbs the movement.
- **Vibration eliminators (flexible metal hoses).** Used where the pipe is rigid. They must be fitted **free of stress**, with the two connections in line — not offset — and neither stretched nor compressed during fitting or in service. They are not designed to absorb thermal length change; use a proper expansion joint or an expertly fitted metal hose for that.
- **Geometry on large plant.** Run the suction and discharge roughly **30 pipe diameters in each of two or three directions** before the first anchor. That gives the pipe the flexibility to twist and bend rather than transmit.
- **Isolating hangers.** Where pipe is fixed to building structure that could act as a sounding board, use isolation-type hangers and brackets.

>! On cold suction lines, mount a flexible hose **horizontally**. If it is
>! fitted vertically, condensate collects in the lower fitting during repeated
>! start-stop cycles and, when it freezes, it deforms and destroys the hose.
>! Wrap these hoses with waterproof insulation.

### When the pipe sings

Vapour pulsation noise can occur on either side of a reciprocating compressor
but it is far more common and more intense in the **discharge line**. Usually
it is harmless. Occasionally the pulsation frequency matches a natural
frequency of the pipe run, resonance builds like a struck tuning fork, and the
line can literally be shaken off its supports. Three cures exist: change
compressor speed (rarely practical), fit a **discharge muffler**, or change
the **size or length of the discharge line**. The last two work best together,
because you are attacking both the source and the tuning.

Where the noise is turbulence from sheer velocity, the cure is different:
**increase the pipe size** to bring the velocity down, sometimes by running a
supplementary line in parallel with the existing one.

## On the job

- Pitch horizontal suction, discharge and drain lines in the direction of flow; everything else runs plumb and square.
- Support at 3 m maximum, and within 200 mm of every change of direction.
- Sleeve every penetration and leave the run free to grow about 20 mm per 30 m.
- Fit vibration eliminators straight, stress-free, and horizontally on cold lines.
- Discharge line howling usually means resonance — muffler plus a change of line length or size.
`,
  quiz: [
    {
      q: "A long straight discharge run is anchored rigidly at both ends. What is the most likely consequence?",
      options: [
        "The refrigerant velocity will fall below the oil-return minimum",
        "Thermal expansion of roughly 20 mm per 30 m has nowhere to go and stresses the joints",
        "The line will become a resonant tuning fork at all compressor speeds",
        "Nothing — anchoring both ends is the recommended practice",
      ],
      answer: 1,
      explain: "Refrigerant pipe grows about 20 mm for every 30 m as it heats. Anchoring both ends of a long straight length forces that movement into the pipe and joints. Resonance is a real problem but it is caused by gas pulsation matching a pipe frequency, not by anchoring, and velocity is set by pipe size and mass flow.",
    },
    {
      q: "Where should a flexible vibration eliminator be mounted in a cold suction line, and why?",
      options: [
        "Vertically, so condensate drains out of it",
        "Vertically, so it can absorb thermal expansion along its length",
        "Horizontally, so condensate cannot collect in a lower fitting and split the hose when it freezes",
        "Anywhere, provided it is stretched slightly during fitting to take up slack",
      ],
      answer: 2,
      explain: "Fitted vertically, condensate collects in the bottom fitting over repeated cycles and destroys the hose when it freezes, so cold-line hoses go in horizontally and get waterproof insulation. Hoses must never be stretched or compressed on fitting, and they are not the right device for absorbing thermal length change.",
    },
    {
      q: "A reciprocating plant has a discharge line that vibrates so hard it is loosening its brackets. Which pair of remedies is most practical?",
      options: [
        "Reduce the compressor speed and add more brackets",
        "Fit a discharge muffler and change the size or length of the discharge line",
        "Insulate the discharge line and fit a suction accumulator",
        "Fit a larger filter-drier and increase the refrigerant charge",
      ],
      answer: 1,
      explain: "The noise is gas pulsation driving the pipe into resonance. A muffler damps the pulsations while changing the line length or diameter detunes the run — used together they attack source and response. Changing compressor speed also works in theory but is rarely available; more brackets just move the stress somewhere else.",
    },
    {
      q: "How close to a change in direction should a pipe support be placed?",
      options: [
        "Within 200 mm, preferably on the side of the longest run",
        "At least 1 m away, so the bend stays flexible",
        "Exactly at the centreline of the elbow",
        "Supports near bends are not required if spacing elsewhere is under 3 m",
      ],
      answer: 0,
      explain: "A support within 200 mm of the bend, on the longest-run side, stops the elbow being worked as a hinge by the weight and movement of the run. The general 3 m spacing rule applies to straight lengths, and a bend deliberately left unsupported is where fatigue cracks start.",
    },
  ],
},

/* ======================================================================
   3 — Why sizing matters
   ====================================================================== */
{
  id: "line-sizing-why",
  title: "What pressure drop and velocity actually cost you",
  minutes: 10,
  simple: "A pipe that is too small squeezes the refrigerant and the compressor has to work harder for less cooling. A pipe that is too big lets the gas dawdle, and the oil that left with it never gets carried home. Line sizing is the compromise between those two, and getting it wrong can quietly steal a quarter of the plant's capacity.",
  refs: ref("sizing of refrigerant lines — pressure drop, velocity and oil return"),
  content: `
Ask a technician why a cool room "just cannot pull down any more" and you will
usually hear about the compressor, the charge or the condenser. Very often the
real culprit is a suction line one size too small, chosen years ago by
somebody who used what was on the van. Line sizing is where a system's rated
capacity is either delivered or thrown away.

## The two opposing penalties

**Too small** means excessive pressure drop. Every kilopascal lost between the
evaporator and the compressor suction is a kilopascal the compressor never
sees, so it draws vapour at a lower pressure — which means lower density,
lower mass flow per revolution, and a bigger compression ratio for the same
condensing pressure.

**Too big** means low velocity. Refrigerant carries the compressor's oil
around the circuit as a film dragged along the pipe wall. Below a certain
velocity that film stops moving, oil logs in the evaporator and the horizontal
runs, and the compressor slowly starves of lubricant while its suction line
hides a slug waiting to come home all at once.

## What pressure drop costs — the numbers

The chapter tabulates a small R134a plant with a -22 °C evaporator and then
adds suction line pressure drop to it:

| Suction line pressure drop | Gauge pressure reaching the compressor | Saturated suction at the compressor | Capacity retained |
| --- | --- | --- | --- |
| 0 kPa | 32 kPa | -22 °C | 100% |
| 7 kPa | 25 kPa | -23.2 °C | 93.0% |
| 14 kPa | 18 kPa | -24.5 °C | 86.8% |
| 21 kPa | 11 kPa | -26 °C | 80.2% |
| 28 kPa | 4 kPa | -28 °C | 73.8% |

Read the last row again. A 28 kPa loss — which is nothing on a gauge, barely a
needle width — costs more than a quarter of the machine. A plant designed to
do its job in 16 hours a day now needs:

**16 h ÷ 0.738 = 21.7 hours per day.**

That is a compressor running almost around the clock, a defrost schedule that
no longer fits, and an electricity bill a third larger for the same food.

## Design targets

- **Freezers (low temperature):** a suction pressure drop of 7 kPa is already considered excessive; aim lower. Low-temperature refrigerant vapour is thin, so the same kilopascal represents far more kelvin of saturation temperature.
- **Cool rooms and air conditioning:** about 20 kPa can be tolerated and costs a similar percentage — roughly 7% — as 7 kPa does on a freezer.
- The published sizing tables are built so that the selected pipe gives a drop **equivalent to about 1 K of saturation temperature**, which is the sensible target for any job.
- Aim lower than the limit whenever you can, *unless* you need the velocity for oil return. That is the only legitimate reason to accept a smaller pipe.

>! Do not "optimise" a line by going up a size on a riser. Oversized vertical
>! risers are the classic cause of oil logging and, eventually, a wiped
>! compressor bearing. Pressure drop is a capacity problem; lost oil return is
>! a destruction problem.

## Velocity limits you must know

The same three numbers apply to both suction and discharge lines:

| Requirement | Velocity |
| --- | --- |
| Minimum in horizontal runs, to move oil along with the flow | 2.5 m/s |
| Minimum in vertical risers, to carry oil up the wall of the tube | 5 m/s |
| Maximum, above which noise, vibration and pressure drop become objectionable | 20 m/s |

Twenty metres per second is a comfort-application ceiling; it is not a target.
Nothing good happens at high velocity except oil return, and there are better
ways to get that.

## Where else the capacity leaks

Pressure drop in the suction line is only one of a family of related losses.
The chapter's fault summary is worth memorising, because it lets you put a
number on a complaint:

| Fault | Effect on system capacity |
| --- | --- |
| Suction line pressure drop | 3 to 5% lost per 1 K equivalent drop |
| Operating below design evaporating temperature | Compressor capacity falls 3 to 5% per 1 K reduction |
| Suction vapour superheated above saturation | About 2% lost per 5 K of extra superheat |
| Condensing or ambient temperature rise | About 1% lost per 1 K rise |
| Excessive liquid line pressure drop | Flash gas, and the plant behaves as if it is short of gas |
| Liquid subcooled by a heat exchanger before the control | Capacity gained, and flash gas prevented |

Two extra points from the same summary. Hermetic (sealed) compressors suffer
larger suction superheat losses than open machines, because the suction vapour
is used to cool the motor windings before it reaches the cylinders. And
freezers normally need a **crankcase pressure regulator (CPR)** in the suction
line to stop the motor being overloaded on a warm pull-down — that valve is
itself a deliberate pressure drop, and it must be counted when you size the
line.

## What to remember

- Small pipe steals capacity; big pipe steals oil return. Size for both.
- 7 kPa is already too much on a freezer suction; about 20 kPa is tolerable on a cool room or air conditioner.
- Sizing tables target roughly 1 K of equivalent saturation temperature drop.
- 2.5 m/s horizontal, 5 m/s riser, 20 m/s maximum.
- A quarter of a machine can disappear into a line that looks perfectly normal.
`,
  quiz: [
    {
      q: "A -22 °C R134a system suffers 28 kPa of suction line pressure drop and retains 73.8% of its capacity. A job that needed 16 hours of run time per day will now need roughly how long?",
      options: [
        "About 17 hours",
        "About 19 hours",
        "About 21.7 hours",
        "About 24 hours — it can never catch up",
      ],
      answer: 2,
      explain: "16 divided by 0.738 gives 21.7 hours. The arithmetic matters because it converts an abstract 'kilopascals' figure into the thing the customer notices: a compressor that runs almost continuously. It is not quite 24 hours, so the plant still holds temperature, which is exactly why the fault goes unnoticed for years.",
    },
    {
      q: "Why is 7 kPa of suction pressure drop treated as excessive on a freezer but 20 kPa is acceptable on a cool room?",
      options: [
        "Freezer pipes are shorter so there is no excuse",
        "At low temperature the vapour is much less dense, so the same kPa represents far more saturation temperature change and far more lost capacity",
        "Cool rooms run higher velocities that cancel the drop out",
        "Freezer compressors are physically smaller",
      ],
      answer: 1,
      explain: "It is the shape of the pressure-temperature curve. Down at freezer temperatures the curve is flat, so a small pressure loss is a large drop in saturated suction temperature — and capacity follows saturation temperature. Both cases end up costing a similar percentage: about 7%.",
    },
    {
      q: "What is the minimum refrigerant vapour velocity needed to carry oil up a vertical riser?",
      options: ["1 m/s", "2.5 m/s", "5 m/s", "20 m/s"],
      answer: 2,
      explain: "Risers need at least 5 m/s; horizontal runs need only 2.5 m/s because gravity is not fighting the oil film there. 20 m/s is the maximum before noise, vibration and pressure drop become objectionable, not a minimum.",
    },
    {
      q: "A sealed hermetic compressor shows more capacity loss from suction superheat than an equivalent open compressor. Why?",
      options: [
        "Its suction valves are smaller",
        "The suction vapour cools the motor windings before it reaches the cylinders, adding superheat",
        "Hermetic compressors always run at higher condensing pressures",
        "The oil charge is larger, so more heat is stored",
      ],
      answer: 1,
      explain: "In a hermetic machine the return vapour passes over the motor and picks up motor heat, so it enters the cylinders hotter and less dense than in an open machine where the motor is outside the shell. Roughly 2% of capacity is lost per 5 K of extra superheat, so this is not a trivial effect.",
    },
  ],
},

/* ======================================================================
   4 — Sizing method and worked examples
   ====================================================================== */
{
  id: "line-sizing-method",
  title: "Sizing by equivalent length: two worked examples",
  minutes: 13,
  simple: "To pick a pipe size you first work out how long the run really is. Every bend and valve behaves like an extra few metres of straight pipe, so you add those on to get an 'equivalent length'. Then you look up a table using that length, the evaporator temperature and the duty in kilowatts, and it tells you the tube size.",
  refs: ref("sizing of refrigerant lines — equivalent length method and worked examples"),
  content: `
There are several ways to size refrigerant lines, from friction charts to
manufacturers' software. For everyday trade work the **table method** is
recommended, because it is fast, it is hard to get badly wrong, and the
published tables already contain the pressure-drop target. The whole method is
three steps: measure, add fittings, look up.

## Step 1 — measure the actual run

Walk the route with a tape (or scale it off the drawing) and record the true
metres of tube between the evaporator and the compressor, following the path
the pipe will really take, including drops, rises and the dog-leg around the
switchboard.

## Step 2 — convert every fitting into metres

Bends, tees and valves all cost pressure, so each one is given an **equivalent
length**: the length of straight tube of the same size that would produce the
same loss. Add them all to the actual length:

**Equivalent length = actual length + sum of the equivalent lengths of the fittings**

Here is a working extract of the fitting data, rebuilt for the sizes you meet
most often. Values are metres of equivalent straight tube.

| Fitting | 12.7 mm | 15.9 mm | 22.2 mm | 28.6 mm | 34.9 mm | 41.3 mm | 54 mm |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Globe valve (or globe/vertical lift check) | 5.2 | 5.5 | 6.7 | 8.8 | 12 | 13 | 17 |
| 60 degree Y-pattern valve | 2.4 | 2.7 | 3.4 | 4.6 | 6.1 | 7.3 | 9.1 |
| Angle valve, 45 degree Y, angle lift check | 1.8 | 2.1 | — | 3.7 | 4.6 | 5.5 | 7.3 |
| Gate valve (fully open) | 0.2 | 0.2 | 0.3 | 0.3 | 0.5 | 0.5 | 0.7 |
| Swing check valve | 1.5 | 1.8 | 2.4 | 3.0 | 4.3 | 4.9 | 6.1 |
| 90 degree standard elbow | 0.4 | 0.5 | 0.6 | 0.8 | 1.0 | 1.2 | 1.5 |
| 90 degree long-radius elbow | 0.3 | 0.3 | 0.4 | 0.5 | 0.7 | 0.8 | 1.0 |
| 45 degree elbow | 0.2 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.8 |
| 180 degree return bend | 0.7 | 0.8 | 1.0 | 1.2 | 1.7 | 1.9 | 2.5 |
| Tee, flow through the branch | 0.8 | 0.9 | 1.2 | 1.5 | 2.1 | 2.4 | 3.0 |
| Tee, straight through | 0.3 | 0.3 | 0.4 | 0.5 | 0.7 | 0.8 | 1.0 |

Notice how brutal a **globe valve** is: at 34.9 mm it costs 12 m of pipe all by
itself. Notice too that a long-radius elbow is roughly two-thirds of a standard
elbow, and that a fully open gate valve is almost free. That is the whole
argument for using long-radius bends and ball or gate valves on refrigerant
lines wherever you can.

There is a chicken-and-egg problem here: fitting losses depend on pipe size,
and you have not chosen the size yet. So you **estimate** a size first (from
the table, using the actual length), price the fittings at that size, then
confirm or correct.

## Step 3 — read the sizing table

The suction sizing tables are entered with saturated suction temperature,
equivalent length and duty in kilowatts, and give a size that produces about
1.1 K of equivalent pressure drop. Here is an extract of the R22 data around
the region used in the example below (capacity in kW):

| Equivalent length at -40 °C SST | 28.6 mm | 34.9 mm | 38.1 mm | 41.3 mm |
| --- | --- | --- | --- | --- |
| 10 m | 6.96 | 12.5 | 16.0 | 20.1 |
| 30 m | 3.80 | 6.80 | 8.76 | 11.0 |
| 40 m | 3.25 | 5.81 | 7.48 | 9.38 |

Two corrections come with tables like these. First, the capacities assume a
condensing temperature near 41 °C; colder condensing lets a given pipe carry
more, hotter condensing less, with factors running from roughly 1.1 down to
about 0.8 across the usual range. Second, the tables carry a separate
**minimum capacity for oil return up a riser**, based on 8 K of superheat and
32 °C liquid, adjusted about 2% for each 5 K of superheat difference and by a
listed factor for other liquid temperatures. If the plant's minimum load falls
below that figure, a single riser will not carry oil and you need a double
riser.

> R22 is an HCFC being phased out under Australia's Montreal Protocol
> obligations — bulk imports ended and only small servicing quantities plus
> recovered and recycled gas remain in play. The R22 tables are still the
> clearest teaching example of the method, and the method itself is identical
> for R134a, R404A, R448A or R744.

## Worked example 1 — a freezer suction line

**The job.** An "Apex Cold Stores" freezer. Condensing unit 12 m of pipe run
from the evaporator, about 8.7 kW of refrigerating capacity at low-temperature
suction. In the line there are eight 90 degree bends, one angle valve (the
crankcase pressure regulator) and one globe valve.

**Estimate the size.** Entering the R22 table at -40 °C SST and 10 m with
8.7 kW suggests 34.9 mm tube (12.5 kW at that length), so we cost the fittings
at 35 mm.

**Add the fittings, at 34.9 mm:**

| Item | Equivalent metres |
| --- | --- |
| 1 globe valve (manual shut-off) | 12.0 |
| 1 angle valve (CPR) | 4.6 |
| 8 x 90 degree bends at 1.0 m each | 8.0 |
| Straight tube | 12.0 |
| **Total equivalent length** | **36.6** |

Three fittings and a dozen metres of pipe have turned into thirty-seven metres
of pressure drop. That is the single most important lesson in this lesson.

**Look it up again.** At 30 m equivalent length, 34.9 mm carries only 6.80 kW —
not enough for 8.7 kW. At 30 m, 38.1 mm carries 8.76 kW, which just covers it.
But our run is 36.6 m, not 30 m, and at 40 m the 38.1 mm column has fallen to
7.48 kW. Interpolating, 38.1 mm at 36.6 m is around 7.7 kW — short of the
8.7 kW required.

**Select.** Go up. 38.1 mm is not a stocked refrigeration size anyway, so the
line is run in **41.3 mm** tube, which carries 11.0 kW at 30 m and 9.38 kW at
40 m — comfortably above duty at 36.6 m.

## Worked example 2 — the matching liquid line

**The job.** Same freezer, 8.7 kW, liquid line the same length as the suction
line, with a liquid line solenoid valve (count it as a globe valve) and the
same eight bends, this time long-radius.

**Estimate.** The liquid sizing table (built for a pressure drop equivalent to
0.56 K) suggests about 12 mm, so we cost the fittings at 12.7 mm.

| Item | Equivalent metres |
| --- | --- |
| 1 globe-type solenoid valve at 12.7 mm | 5.2 |
| 8 x 90 degree long-radius bends at 0.3 m each | 2.4 |
| Straight tube | 12.0 |
| **Total equivalent length** | **19.6** |

**Confirm.** In the R22 liquid line data at 20 m equivalent length, 12.7 mm
carries 16.0 kW — far more than the 8.7 kW required, so the choice is
confirmed with a healthy margin. Step down to 9.5 mm and the same 20 m row
gives only 7.42 kW: below duty, and the plant would run short of liquid.

| Equivalent length, R22 liquid line | 9.5 mm | 12.7 mm | 15.9 mm | 22.2 mm |
| --- | --- | --- | --- | --- |
| 10 m | 10.4 | 23.4 | 43.5 | 118 |
| 20 m | 7.42 | 16.0 | 29.7 | 80.7 |
| 30 m | 5.70 | 12.8 | 23.8 | 64.6 |
| 40 m | 4.87 | 10.9 | 20.3 | 55.1 |

Notice that the liquid line is far smaller than the suction line for the same
duty — 12.7 mm against 41.3 mm. Liquid is roughly a thousand times denser than
low-pressure vapour, so it needs a fraction of the cross-section.

## The other two lines

**Condenser to receiver (the liquid drain line)** is sized on velocity, not
pressure drop — around 0.5 m/s — because it must drain by gravity while vapour
passes back the other way. Typical capacities are 12.0 kW for 15.9 mm and
24.9 kW for 22.2 mm on R134a; 13.0 kW and 27.4 kW for the same sizes on R22.
If this line is undersized or trapped, the condenser floods and head pressure
climbs.

**Discharge lines** on a factory-built condensing unit are already sized and
piped by the manufacturer; when you build up a split system, size them like a
suction line but check the velocity limits first.

## What to remember

- Equivalent length = measured metres + fitting allowances at the estimated size.
- Estimate a size, cost the fittings, then re-enter the table and confirm.
- Globe valves are enormous; long-radius bends and gate or ball valves are cheap.
- Liquid lines are tiny compared with suction lines of the same duty.
- Always round up to the next stocked size, never down.
`,
  quiz: [
    {
      q: "A 12 m suction run in 34.9 mm tube contains one globe valve (12.0 m), one angle valve (4.6 m) and eight 90 degree bends (1.0 m each). What is the equivalent length?",
      options: ["12.0 m", "24.6 m", "36.6 m", "45.2 m"],
      answer: 2,
      explain: "12.0 straight + 12.0 globe + 4.6 angle + 8.0 for the bends = 36.6 m. The point is that three fittings tripled the effective run — which is why sizing on measured metres alone leaves a plant permanently short of capacity.",
    },
    {
      q: "Why must you estimate a pipe size before you can calculate the equivalent length?",
      options: [
        "Because the sizing table is entered by size, not by duty",
        "Because the equivalent length of every fitting depends on the diameter of that fitting",
        "Because the refrigerant charge must be known first",
        "Because pressure drop is proportional to the square of the length",
      ],
      answer: 1,
      explain: "Fitting allowances are listed per size — a globe valve costs 5.2 m at 12.7 mm but 12 m at 34.9 mm — so you cannot price the fittings until you have assumed a size. That is why the method is estimate, cost the fittings, then confirm or correct.",
    },
    {
      q: "In the worked example, why was 41.3 mm chosen instead of 38.1 mm, even though 38.1 mm carried 8.76 kW at 30 m?",
      options: [
        "Because 38.1 mm gives too much velocity for oil return",
        "Because at the true 36.6 m the 38.1 mm capacity falls to about 7.7 kW, below the 8.7 kW duty, and 38.1 mm is not a stocked refrigeration size",
        "Because the CPR requires a minimum of 41.3 mm",
        "Because R22 tables must always be read one size up",
      ],
      answer: 1,
      explain: "Two reasons stack up: interpolating between the 30 m figure of 8.76 kW and the 40 m figure of 7.48 kW leaves 38.1 mm short at 36.6 m, and 38.1 mm is a table size rather than a stocked refrigeration size in Australia. Going up to 41.3 mm satisfies both.",
    },
    {
      q: "The liquid line for the same 8.7 kW freezer came out at 12.7 mm while the suction line needed 41.3 mm. What explains the difference?",
      options: [
        "Liquid lines are allowed ten times the pressure drop of suction lines",
        "Liquid refrigerant is far denser than low-pressure vapour, so the same mass flow needs much less cross-sectional area",
        "The liquid line carries only part of the refrigerant flow",
        "Liquid lines are not required to return oil, so any size works",
      ],
      answer: 1,
      explain: "Both lines carry the same mass flow, but liquid density is around a thousand times that of low-temperature vapour, so it needs a tiny fraction of the area. Liquid lines are actually held to a tighter pressure drop, not a looser one, because of flash gas — and oil mixes with liquid so oil movement is not the constraint.",
    },
    {
      q: "The condenser-to-receiver liquid drain line is sized on a velocity of about 0.5 m/s rather than on pressure drop. Why?",
      options: [
        "Because it carries vapour, not liquid",
        "Because it must drain by gravity while vapour passes back up the same pipe, so it cannot be allowed to run full and fast",
        "Because pressure drop cannot occur in a vertical pipe",
        "Because the receiver equalises all pressures anyway",
      ],
      answer: 1,
      explain: "The drain line is a gravity line: liquid runs down while vapour finds its way back up. Size it for a low velocity so it never runs full and seals. Undersize it and the condenser floods, backing liquid up into the coil and pushing head pressure up.",
    },
  ],
},

/* ======================================================================
   5 — Discharge lines
   ====================================================================== */
{
  id: "discharge-lines",
  title: "Discharge lines, risers, double risers and mufflers",
  minutes: 12,
  simple: "The discharge line carries hot gas and a mist of oil from the compressor to the condenser. It has to slope away from the compressor so nothing drains back, and if it has to climb, it needs traps at the bottom to catch the oil that runs back down when the plant stops. On compressors that can unload, one pipe is not enough — you fit two of different sizes side by side.",
  refs: ref("discharge lines — pressure drop, velocity, risers, double risers, mufflers and oil separators"),
  content: `
The discharge line carries superheated vapour, at high pressure and high
temperature, from the compressor to the condenser — and with it, a fine mist
of compressor oil. Everything about discharge line design is about two
questions: does the oil keep moving forward, and can anything liquid find its
way back to the compressor when it stops?

## Pitch and pressure drop

Pitch the horizontal discharge **away from the compressor**, at least **12 mm
for every 3 m of run**, so that any liquid condensing in the line during the
off cycle drains towards the condenser rather than into the discharge valves.

Pressure drop in the discharge is normally limited to about **41 kPa** on R22.
Anything that raises the discharge pressure relative to the suction pressure
raises the **compression ratio**, and as the compression ratio rises the
compressor's volumetric efficiency — its ability to actually pump refrigerant —
falls away. A restricted or undersized discharge line therefore costs capacity
and power at both ends of the machine.

## Velocity

| Location | Velocity requirement |
| --- | --- |
| Horizontal runs | At least 2.5 m/s to move oil along |
| Vertical risers | At least 5 m/s to carry oil up |
| Anywhere, comfort applications | No more than 20 m/s |

The tension is obvious. Small pipe gives you velocity for oil return but
pressure drop and noise; large pipe gives you low drop but drops the oil.

## Connecting to the compressor

Reciprocating compressors shake, so the discharge line starts with a **45
degree canted loop**: four 90 degree elbows and four connecting pieces, each
connecting piece at least **10 pipe diameters long**. The loop behaves as a
spring in both the vertical and horizontal planes, absorbing vibration that
would otherwise be fed straight into the pipework.

For the loop to work, the pipe must be **anchored a short distance beyond it**.
An unanchored loop just moves the whole line; the anchor gives the loop
something to flex against.

Where pulsation noise is a nuisance, a **discharge muffler** is fitted just
beyond the anchor point in the horizontal run. It damps the pressure pulses
generated by the pistons and stops them being broadcast down the pipe.

## Risers — the oil problem

If the condenser sits **below** the compressor, life is easy: the line drains
naturally and nothing collects. A condenser **above** the compressor needs
thought, because whatever oil is on the wall of the riser at shutdown runs
straight back down towards the compressor.

| Vertical rise | What is required at the base |
| --- | --- |
| Less than 2.5 m | An elbow only — the pitch of the horizontal run holds the small amount of oil that drains back |
| More than 2.5 m | An oil trap at the foot of the riser |
| More than 7.5 m | One additional trap for each further 7.5 m of rise |

A **trap** is nothing more than three 90 degree elbows forming a U, with the
horizontal dimension held **as short as possible**. It has three jobs: catch
the oil that drains from the riser during the off cycle, help the oil start
its climb at start-up, and let the equipment above drain.

Build the trap long and horizontal and you have made a sump. A large oil
build-up robs the crankcase, so the compressor runs short of lubricant, and
sooner or later the accumulated oil leaves as one large slug that smashes a
valve plate.

For a 12 m rise, a base trap plus one intermediate trap at about the mid-point
lets the upper and lower 6 m sections drain separately. Rely on a single base
trap for a tall riser and, during a long off cycle, the trap floods and passes
oil straight back down to the compressor.

## Double risers — for unloading compressors

A compressor with cylinder unloading matches its pumping capacity to load by
switching cylinders in and out. At minimum capacity it moves far less vapour,
so riser velocity collapses. **When the minimum capacity stage produces a
riser velocity below 5 m/s, a double riser is required.**

A double riser is a **trapped large riser with a smaller riser in parallel**,
both fed from the same base trap:

- The **small riser** is sized to give not less than 5 m/s at the compressor's minimum capacity stage.
- The **large riser** is sized so that, with both risers flowing at full load, the velocity in each is not less than 5 m/s and not more than 20 m/s.

**How it works.** At minimum capacity, velocity falls, oil drains from both
risers and fills the base trap. The sealed trap blocks the large riser, so all
the flow is diverted into the small riser, where the velocity is high enough
to carry oil up. When the load rises again, the extra vapour blows the trap
clear and flow returns to the large riser.

The top of the **large riser re-enters the discharge line through an inverted
trap** — a loop up and over. Without it, oil travelling in the horizontal line
at part load would run back down into the idle large riser and be lost from
circulation, eventually dropping the compressor oil level to the point where
lubrication fails.

A double riser over 7.5 m tall needs the same treatment as a single one: an
extra trap, built the same way, for every 7.5 m of rise, so that upper and
lower sections drain separately.

## Oil separators — the alternative

Instead of a double riser you can fit an **oil separator** in the discharge and
run a single riser sized for normal full-load pressure drop. The separator is a
vessel that catches oil carried over by the compressor and returns it to the
crankcase through a float-operated valve.

Understand its limits. Available separators still pass roughly **1 to 2% of the
oil pumped**, so the rest of the pipework must still be designed to return oil.
A separator is an aid, not a cure.

>! Never let an oil separator sit somewhere colder than the condenser. During
>! the off cycle, refrigerant migrates to the cold spot, condenses inside the
>! separator and is dumped into the crankcase as liquid, diluting the oil. Where
>! that risk exists — typically with air-cooled condensers — fit a
>! solenoid-operated shut-off valve in the oil return line, wired to open only
>! while the compressor runs. On restart, hot discharge gas boils most of the
>! trapped liquid off and the rest returns slowly enough to be harmless.

## Parallel compressors

Multi-compressor plant adds one more requirement: **every machine must get its
oil back and must see the same pressures**.

- **Condenser below two compressors:** pitch each machine's horizontal discharge downwards and join them with a 90 degree tee, forming a free-draining junction. Oil cannot drain towards an idle compressor. Suits unloading and non-unloading machines.
- **Condenser above two non-unloading compressors:** run separate risers, joined by a 90 degree tee, with a base trap on each riser where the net lift is 2.5 m or more, and an extra trap every 7.5 m above that. Below 2.5 m of lift the trap can be left out.
- **Condenser above two unloading compressors:** each machine gets its own double riser, so either compressor can drop to minimum capacity — or shut down entirely — while the other keeps running.
- **Two compressors each with its own condenser:** equalise the discharge lines before the condensers so the two condensers behave as one.

That last equaliser line is more critical than it looks. With only one
compressor running, a mere **3.5 kPa** of pressure difference across the
equaliser is equivalent to about **300 mm of liquid column** in R22. Liquid
from the active condenser will back through the liquid line into the idle
condenser trying to equalise, and if the difference is large enough the idle
condenser floods and the active one starts pumping discharge vapour into the
liquid line. Capacity collapses. So keep the equaliser **level, as short as
possible, and at least as large as the discharge line of the biggest
compressor**.

## What to remember

- Pitch discharge lines away from the compressor, 12 mm per 3 m.
- Riser under 2.5 m: elbow only. Over 2.5 m: base trap. Over 7.5 m: another trap each 7.5 m.
- Traps are three elbows with the horizontal leg as short as you can build it.
- Unloading compressor plus a tall riser equals a double riser, with an inverted trap where the large riser rejoins.
- An oil separator still passes 1 to 2% of the oil; the piping must still return it.
`,
  quiz: [
    {
      q: "A non-unloading compressor discharges into a condenser 9 m above it. What traps are required?",
      options: [
        "None — the pitch of the horizontal run is sufficient",
        "A base trap only",
        "A base trap plus one additional trap, because the rise exceeds 7.5 m",
        "A trap every 2.5 m of rise",
      ],
      answer: 2,
      explain: "Over 2.5 m of rise needs a base trap, and one additional trap is required for every 7.5 m of rise, so a 9 m riser gets a base trap and one intermediate trap. Splitting the drainage means neither trap floods during a long off cycle and dumps oil back to the compressor.",
    },
    {
      q: "In a double riser, what makes the refrigerant flow divert into the small riser at part load?",
      options: [
        "A solenoid valve closes off the large riser",
        "Oil draining from both risers fills the base trap and seals off the large riser",
        "A check valve in the large riser closes on reverse flow",
        "The inverted trap at the top of the large riser blocks the flow",
      ],
      answer: 1,
      explain: "It is purely self-acting. At low velocity the oil drains down and fills the trap, sealing the large riser, so all the vapour must take the small riser where velocity is high enough to lift oil. When load returns, the extra flow blows the trap clear. The inverted trap at the top does something different — it stops oil running back down into the idle large riser.",
    },
    {
      q: "Why must an oil separator not be located somewhere colder than the condenser?",
      options: [
        "The float valve will freeze shut",
        "Refrigerant migrates to the cold separator during the off cycle, condenses, and is returned to the crankcase as liquid, diluting the oil",
        "Cold oil is too viscous to be separated",
        "The separator will lose its refrigerant charge to the condenser",
      ],
      answer: 1,
      explain: "Refrigerant always migrates to the coldest point. If that is the separator, liquid collects there and the float dumps it into the crankcase. The standard defence is a solenoid in the oil return line, wired to open only while the compressor runs, so any condensed liquid is held until hot gas can boil it off at start-up.",
    },
    {
      q: "Two condensing units are piped in parallel with an equaliser line between the discharge lines. Why must this line be level, short and generously sized?",
      options: [
        "To keep the refrigerant velocity above 5 m/s for oil return",
        "Because even 3.5 kPa of difference is worth about 300 mm of R22 liquid head, enough to back liquid into and flood the idle condenser",
        "To allow oil to drain from one crankcase to the other",
        "To prevent the discharge muffler from resonating",
      ],
      answer: 1,
      explain: "The equaliser must let the two condensers act as one. A tiny 3.5 kPa imbalance equates to roughly 300 mm of liquid column, which pushes condensed liquid back into the idle condenser; if it floods, the active unit starts pumping vapour down the liquid line and capacity collapses. Crankcase oil equalisation is a separate line entirely.",
    },
    {
      q: "What is the correct construction of a discharge line oil trap?",
      options: [
        "Three 90 degree elbows with the horizontal dimension as short as possible",
        "A long horizontal U to hold as much oil as possible",
        "Two 45 degree bends with a drain valve at the low point",
        "An inverted loop above the riser",
      ],
      answer: 0,
      explain: "Three elbows, short horizontal leg. A deliberately large trap becomes a sump: it robs the crankcase of oil and eventually returns it as a slug that can break a valve plate. An inverted loop is used at the top of a double riser's large leg, not at the base.",
    },
  ],
},

/* ======================================================================
   6 — Liquid lines
   ====================================================================== */
{
  id: "liquid-lines",
  title: "Liquid lines, flash gas, static head and subcooling",
  minutes: 12,
  simple: "Liquid refrigerant only stays liquid while the pressure stays above its boiling pressure. Friction in the pipe and the effort of climbing up a wall both lower that pressure, so bubbles form and the expansion valve is fed froth instead of liquid. Cooling the liquid a few degrees below its boiling point gives it a buffer, which is why subcooling matters so much.",
  refs: ref("liquid lines — pressure drop, flash gas, static head and subcooling"),
  content: `
Oil and liquid refrigerant mix readily, so oil movement is never a problem in a
liquid line. Pressure is. The single job of a liquid line is to deliver
**pure liquid, with no bubbles, to the metering device**, and everything that
happens along the way is either helping or hurting that.

## Why flash gas is so damaging

Liquid stays liquid only while the pressure acting on it is above the
saturation pressure for its temperature. Drop the pressure below that and the
refrigerant starts boiling **in the pipe** — flash gas — and the expansion
valve receives a mixture of liquid and vapour. Two things follow:

1. **The valve loses capacity.** Thermostatic expansion valves are rated on a supply of pure liquid, usually with about 1 K of subcooling. Every bubble occupies a space that liquid should have filled, so less liquid mass reaches the evaporator. The plant behaves exactly as if it were short of gas: low suction, starved coil, poor pull-down, and a sight glass full of bubbles.
2. **The valve wears out.** Prolonged two-phase flow erodes the valve seat, like sandblasting. Even after the liquid supply is fixed, the damaged seat can no longer meter correctly and the valve has to be replaced.

!SIM[Compare the gauge pattern of a restricted liquid line](fault=restrictedDrier)

## The two sources of pressure loss

**Friction** through tube, bends, driers, solenoid valves and sight glasses.
This is what the equivalent-length method sizes for.

**Static head** on a vertical rise. Liquid has weight. A **300 mm column of
liquid R22 exerts about 3.5 kPa** on the refrigerant beneath it, so a **3 m
rise costs about 35 kPa** — the pressure at the top of the column is 35 kPa
lower than at the bottom. Static head is free of friction and cannot be
engineered away by fitting bigger pipe; the only cure is subcooling or a
different route.

### Worked example — the rise that causes flash gas

R22 condenses at **44 °C, 1610 kPa**. The liquid line has **14 kPa of friction
loss** and a **3 m vertical rise**:

- Static head loss: about **35 kPa**
- Pressure at the expansion valve: 1610 - 14 - 35 = **about 1560 kPa**
- Saturation temperature at 1560 kPa: **about 43 °C**

If the liquid left the condenser saturated at 44 °C, it now finds itself above
its own saturation temperature and some of it must flash to vapour, cooling the
remainder to 43 °C. Result: reduced evaporator capacity and a valve seat being
eroded.

## Subcooling — the buffer that saves it

That example assumed saturated liquid, which is not normally the case. **Most
condensers subcool the liquid by at least 5 K.** Repeat the example with 5 K of
subcooling:

- Liquid leaves the condenser at **39 °C** (44 - 5), still at **1610 kPa**.
- Liquid at 39 °C only boils when the pressure falls below its saturation pressure — a little under **1400 kPa** for R22.
- Our line only pulls the pressure down to 1560 kPa, comfortably above 1400 kPa.

No flash gas. The 5 K of subcooling bought roughly 210 kPa of headroom, which
covered a 49 kPa loss with plenty spare. That is why a sight glass clears when
head pressure is allowed to rise on a cold day, and why chronic bubbles often
mean lost subcooling rather than lost charge.

!FIG[subcool-measure]

### Falling liquid lines gain pressure

Turn the geometry upside down. If the liquid line runs **downwards** from
condenser to evaporator, the same 3 m of height becomes a **static gain**:

- 1610 kPa + 35 kPa static gain - 14 kPa friction = **1631 kPa** at the valve
- Saturation temperature at 1631 kPa: **about 45 °C**
- Liquid temperature is still 39 °C, so subcooling at the valve is 45 - 39 = **6 K**

The refrigerant arrived with *more* subcooling than it left with. In most
systems liquid keeps subcooling as it travels, and that extra subcooling adds
evaporator capacity, provided the heat really is leaving the system.

### How much subcooling does a lift need?

The subcooling needed just to offset static head, per metre of vertical lift:

| Refrigerant | Liquid at 20 °C | 30 °C | 40 °C | 50 °C | 60 °C |
| --- | --- | --- | --- | --- | --- |
| R22 | 0.466 | 0.364 | 0.293 | 0.241 | 0.202 |
| R134a | 0.68 | 0.53 | 0.42 | 0.33 | 0.26 |
| R407C | 0.38 | 0.30 | 0.24 | 0.19 | 0.14 |
| R407B | 0.37 | 0.29 | 0.23 | 0.18 | 0.13 |

Values are kelvin of subcooling per metre of lift. Worked through: a 6 m rise
on R22 with 40 °C liquid needs 6 x 0.293 = **1.76 K** of subcooling just to
break even on the static head, before you have paid for a single elbow of
friction. R134a is the hungriest of the four because its liquid is denser
relative to the slope of its pressure-temperature curve — 6 m at 40 °C costs
6 x 0.42 = **2.5 K**.

## Pressure drop and velocity targets

Keep liquid lines **short and direct**. Low pressure drop also means low
velocity, which is fine here because there is no oil to entrain. For R134a,
hold the drop to no more than about **21 kPa**, which corresponds to roughly
**1 m/s**. R22 and R404A/R507 tolerate slightly more, because a kilopascal is
worth less saturation temperature on those refrigerants.

## Heat gain along the way

A liquid line run through a hot roof space, across a sun-struck wall or past a
boiler flue can **gain** heat instead of losing it, burning off the subcooling
you were relying on. If the route is unavoidable, shade it against radiant heat
and insulate it against conduction. And where liquid and discharge lines run
together to a remote condenser, keep them apart or insulated — a discharge line
strapped to a liquid line is a very effective way of manufacturing flash gas.

## Splitting the liquid line

Where one evaporator is fed by two expansion valves — a horizontally split coil,
for instance — the liquid line must present **equal inlet pressure to each
valve**. Use the same pipe size and the same length for each branch so the
pressure drops match. The same care applies to supermarket cases with several
evaporators on one liquid line: unequal branches mean unequal feed, and one
case will always be the one that "never holds temperature".

## What to remember

- Flash gas starves the coil and erodes the valve seat; it looks exactly like an undercharge.
- Static head is real: about 3.5 kPa per 300 mm of R22 liquid, so 35 kPa per 3 m of lift.
- Around 5 K of condenser subcooling usually covers a normal line; check it against the lift.
- Falling liquid lines gain pressure and arrive with more subcooling than they left with.
- Keep liquid lines short, shaded, and never strapped to a discharge line.
- Branch to multiple valves with equal lengths and equal sizes.
`,
  quiz: [
    {
      q: "R22 leaves a condenser saturated at 44 °C and 1610 kPa. The liquid line has 14 kPa of friction loss and a 3 m rise. What happens at the expansion valve?",
      options: [
        "Nothing changes — the valve sees 1610 kPa",
        "Pressure falls to about 1560 kPa, below saturation for 44 °C liquid, so some refrigerant flashes to vapour",
        "Pressure rises to 1645 kPa because of the vertical lift",
        "The liquid subcools by 3 K on the way up",
      ],
      answer: 1,
      explain: "The 3 m rise costs about 35 kPa of static head plus 14 kPa of friction, leaving about 1560 kPa — a saturation temperature of roughly 43 °C. Saturated 44 °C liquid cannot survive that, so part of it flashes. Static head only becomes a gain when the line runs downwards.",
    },
    {
      q: "The same system is given 5 K of condenser subcooling. Why does the flash gas disappear?",
      options: [
        "Subcooling raises the liquid pressure by 5 kPa per kelvin",
        "The 39 °C liquid can tolerate a fall to just under 1400 kPa before boiling, and the line only takes it to 1560 kPa",
        "Subcooled liquid is denser, so static head is eliminated",
        "Subcooling makes the expansion valve open further",
      ],
      answer: 1,
      explain: "Subcooling buys pressure headroom. Liquid at 39 °C boils only below about 1400 kPa, so the 1560 kPa arriving at the valve is safely above that. The subcooling does not change the static head — the liquid is if anything slightly denser — it simply moves the boiling threshold out of reach.",
    },
    {
      q: "Using the tabulated data, how much subcooling is needed just to offset the static head of a 6 m liquid lift on R134a with 40 °C liquid?",
      options: ["0.42 K", "1.76 K", "2.5 K", "6 K"],
      answer: 2,
      explain: "R134a needs 0.42 K per metre at 40 °C, so 6 x 0.42 = 2.5 K — and that is before any friction loss through tube, drier and solenoid. The 1.76 K answer is the R22 figure for the same lift, which shows how much refrigerant choice matters here.",
    },
    {
      q: "A liquid line is strapped alongside the discharge line on the run to a remote air-cooled condenser. What is the likely result?",
      options: [
        "Improved subcooling from the temperature difference",
        "Heat transfer into the liquid line destroys the subcooling and produces flash gas",
        "Oil logging in the liquid line",
        "Excessive velocity in the discharge line",
      ],
      answer: 1,
      explain: "The discharge line is far hotter than the liquid line, so heat flows the wrong way and burns off the subcooling the plant depends on. Separate or insulate them. Oil logging is not a liquid-line problem at all, since oil and liquid refrigerant mix freely.",
    },
    {
      q: "One evaporator is fed by two expansion valves. How should the liquid line be branched?",
      options: [
        "One branch short and one long, so the coils stage naturally",
        "With identical pipe sizes and identical lengths to each valve, so the pressure drops match",
        "With a globe valve in the longer branch to balance the flow",
        "As a single line with a tee immediately before each valve inlet",
      ],
      answer: 1,
      explain: "Equal size and equal length gives equal pressure drop, so both valves see the same inlet pressure and both coil halves are fed properly. Deliberately unequal branches, or throttling with a globe valve, mean one section is always starved — the classic 'that case never holds temperature' complaint in supermarket work.",
    },
  ],
},

/* ======================================================================
   7 — Suction lines
   ====================================================================== */
{
  id: "suction-lines",
  title: "Suction lines: pitch, traps, risers and manifolds",
  minutes: 13,
  simple: "The suction line is the pipe that brings gas and oil back to the compressor, and it is the easiest one to get wrong. It must slope towards the compressor, drop away from the evaporator, and be trapped wherever it has to climb, so oil never collects in one place long enough to come home as a lump.",
  refs: ref("suction lines — velocity for oil return, risers, traps, pitch and compressor connections"),
  content: `
The suction line is the most critical line in the system. It has to bring back
**dry vapour and entrained oil, uniformly**, over the whole range of load the
plant will ever see. If slugs of liquid refrigerant or oil arrive at the
compressor, you are replacing a compressor.

## Starting at the evaporator

The pipe stub at the evaporator outlet must be long enough to take **both** the
expansion valve's remote bulb and the external equaliser connection, and the
order matters: **the equaliser is connected downstream of the bulb**. Put it
upstream and any small leakage of liquid through the equaliser line lands where
the bulb can feel it, and the valve chases its own tail.

From the outlet, **drop the suction line vertically downwards** so the
evaporator tubes drain freely instead of pooling oil and liquid in the bottom
circuits.

On a horizontally split coil, the lower section is brought into the common
suction line through a **double elbow**. This drains the lower tubes and, just
as importantly, isolates that section's bulb and equaliser from the pressure and
temperature of the upper section, so the two expansion valves cannot fight.

## Pitch

Where the evaporator is above the compressor, pitch the horizontal suction line
**towards the compressor**, at least **12 mm for every 3 m of run**. That is the
same figure used for discharge lines, and it does the same job: it keeps oil
creeping in the direction of flow even when the plant is idle or lightly loaded.

## Velocity and pressure drop targets

| Parameter | Suction line requirement |
| --- | --- |
| Minimum velocity, horizontal | 2.5 m/s |
| Minimum velocity, vertical riser | 5 m/s |
| Maximum velocity | 20 m/s |
| Maximum pressure drop, R22 | About 21 kPa |
| Maximum pressure drop, R134a | About 14 kPa |

The pressure drop limits are tighter than the discharge line's 41 kPa for a
simple reason: down at suction pressures, the same kilopascal is worth far more
saturation temperature and therefore far more capacity. And, exactly as on the
discharge side, excess drop raises the compression ratio and pulls down
volumetric efficiency.

## Suction risers and traps

Where the evaporator sits **below** the compressor, the suction line must climb.
The rules mirror the discharge side:

- Form a **trap** at the base of the riser. It drains both the riser and the coil, and it holds the oil that runs back during the off cycle.
- **One trap will drain up to 7.5 m of riser.** Above that, add one more trap for each further 7.5 m of rise.
- Traps are three 90 degree elbows with the horizontal leg as short as it can be built.

The reason for splitting a tall riser between two traps is what happens at
start-up. Each trap holds only its own share of the drained oil, so when the
compressor restarts the oil leaves the traps in quantities and at a rate the
machine can handle — instead of one deep trap emptying itself into the suction
valves in a single lump.

>! An oil slug is not compressible. A suction line trap built long and lazy,
>! or a riser drained by one trap when it should have two, is a valve-plate
>! failure with a delay fuse on it.

## Suction double risers

Suction double risers are built exactly like discharge double risers, and for
exactly the same reason: **an unloading compressor whose minimum capacity stage
drops the riser velocity below 5 m/s**.

At minimum capacity, oil drains from both risers and fills the base trap,
sealing the large riser and forcing all the flow through the small riser, which
is sized to keep velocity above 5 m/s at that minimum stage. When load returns,
the increased flow clears the trap and the large riser goes back to work. Over
7.5 m of vertical rise, one additional trap is needed for each 7.5 m, so upper
and lower sections drain separately.

!FIG[oil-return-riser]

## Connecting to the compressor

The suction line joins the compressor through an **anchored 45 degree canted
loop**, the same spring-like arrangement used on the discharge side, and for the
same purpose — absorbing compressor vibration before it reaches the pipework.

There is one difference in how it is oriented: the suction line is pitched
towards the compressor and the loop is **canted downwards**, so it drains freely
into the suction connection. That is deliberate. On the discharge side, oil
entering the compressor causes slugging; on the suction side, oil arriving at
the compressor is broken up by the suction strainer screen and simply finds its
way back to the crankcase where it belongs.

## Multiple compressors

Parallel machines must each receive the same suction pressure and a fair share
of the returning oil, or one crankcase will slowly fill while another empties.

**Evaporator above the compressors.** Bring the common suction down to a
**manifold**, and observe the details:

- Keep the manifold **as short as possible and dead level**, so oil cannot pool at one end and feed one machine preferentially.
- Take the individual suction lines off the **top** of the manifold.
- Cut the ends of those branch pipes at **45 degrees** and insert them so the point rests on the bottom of the manifold — that draws oil off the floor of the manifold rather than letting it lie there.
- The inverted loop formed at each compressor connection should be at least **350 mm** high.
- Pitch the horizontal suction runs towards the compressors as much as the building allows.

Because this arrangement drains freely towards the compressors, it suits both
unloading and non-unloading machines.

**Evaporator below the compressors, non-unloading machines.** Pitch the common
suction line downwards as far as the fittings permit, then turn it down and
split it so that two traps about **350 mm** deep are formed. Size the vertical
lines to each compressor for at least **5 m/s**, and hold the riser height to a
maximum of **7.5 m**.

**Evaporator below the compressors, unloading machines.** The same layout, but
each machine gets a **double riser**, fed from the bottom of the manifold into
the base trap of its double riser. The trap formed by the downturn of the common
suction line should measure about **350 mm** from the bottom of that line to the
base of the double riser traps.

## On the job

- Bulb first, equaliser downstream of it, on a stub long enough for both.
- Drop away from the evaporator; pitch 12 mm per 3 m towards the compressor.
- Base trap on any riser, plus one more trap per 7.5 m of rise.
- Unloading compressor with a riser that falls under 5 m/s at minimum capacity: double riser.
- Parallel machines: level manifold, branches off the top with 45 degree cut ends resting on the bottom, 350 mm inverted loops.
`,
  quiz: [
    {
      q: "Where must the external equaliser line be connected relative to the expansion valve's remote bulb?",
      options: [
        "Upstream of the bulb, closer to the evaporator outlet",
        "Downstream of the bulb, so any leakage through the equaliser cannot influence the bulb temperature",
        "At the same point, using a tee",
        "In the liquid line, ahead of the valve",
      ],
      answer: 1,
      explain: "The equaliser goes downstream. If it were upstream, a small leak of liquid refrigerant through the equaliser connection would chill the pipe right where the bulb is sensing, and the valve would hunt. The stub at the evaporator outlet has to be long enough to take both connections in that order.",
    },
    {
      q: "A suction riser from an evaporator below the compressor is 12 m high. What is required?",
      options: [
        "No trap, provided the horizontal run is pitched",
        "A base trap only, since one trap drains any riser",
        "A base trap plus one additional trap, because one trap drains only 7.5 m of riser",
        "A double riser, regardless of the compressor type",
      ],
      answer: 2,
      explain: "One trap drains up to 7.5 m, so a 12 m riser needs a base trap and one more. That divides the drained oil between two traps, so on restart the oil returns in manageable quantities instead of one deep trap dumping a slug. A double riser is only needed when an unloading compressor drops riser velocity below 5 m/s.",
    },
    {
      q: "Why is the 45 degree canted loop at the compressor suction connection canted downwards?",
      options: [
        "To increase vapour velocity into the suction valves",
        "So it drains freely into the compressor, where the strainer breaks up returning oil that then goes to the crankcase",
        "To trap oil and prevent it entering the compressor",
        "To provide a low point for a service valve",
      ],
      answer: 1,
      explain: "Unlike the discharge side, oil arriving at the suction connection is not a threat: the suction strainer screen breaks it up and it returns to the crankcase. So the loop is canted to drain into the compressor. Deliberately trapping oil just before the compressor would starve the crankcase.",
    },
    {
      q: "In a suction manifold serving parallel compressors, why are the branch pipes cut at 45 degrees with the point resting on the bottom of the manifold?",
      options: [
        "To reduce the equivalent length of the connection",
        "To draw oil from the floor of the manifold so each machine gets its share",
        "To create a pressure drop that balances the compressors",
        "To allow the manifold to be pitched",
      ],
      answer: 1,
      explain: "The angled end reaches down into the oil lying in the base of the manifold and picks it up, so oil is shared rather than accumulating at one end. That is also why the manifold is kept short and dead level — a sloping manifold feeds one crankcase and starves the other.",
    },
    {
      q: "Why are suction line pressure drop limits (about 21 kPa on R22) tighter than discharge line limits (about 41 kPa)?",
      options: [
        "Suction lines are always longer",
        "At low suction pressures the same kPa represents a much larger change in saturation temperature, and so a much larger capacity loss",
        "Suction gas carries more oil",
        "Discharge lines are insulated, which offsets the loss",
      ],
      answer: 1,
      explain: "It is the pressure-temperature relationship again. Low in the range, the curve is flat, so a given kPa is worth far more kelvin — and capacity tracks saturated suction temperature. Both drops also raise the compression ratio and cut volumetric efficiency, but the suction side costs more per kilopascal.",
    },
  ],
},

/* ======================================================================
   8 — Accumulators, insulation, accessories, crankcase equalisers
   ====================================================================== */
{
  id: "accumulators-insulation-accessories",
  title: "Accumulators, suction insulation, liquid accessories and crankcase equalisers",
  minutes: 12,
  simple: "Some jobs need extra hardware in the pipe: a tank on the suction line that catches liquid before it reaches the compressor, foam lagging that keeps the cold gas cold, filters and sight glasses on the liquid line, and a small pipe between compressors that keeps their oil levels even. Each one exists because of a specific way systems fail.",
  refs: ref("suction line accumulators, suction line insulation, liquid line accessories and crankcase equalisers"),
  content: `
Line sizing and layout do most of the work of protecting a compressor. The rest
is done by a handful of accessories, each of which answers a very specific
failure mode. Knowing which one to fit — and where — is a large part of what
separates a system that lasts twenty years from one that comes back.

## Suction line accumulators

An accumulator is a vessel in the suction line that catches liquid refrigerant
before it can reach the compressor. Vapour, liquid and oil enter the top;
liquid falls to the bottom; only vapour is drawn from the top of an internal
U-tube and passed on to the compressor.

The clever part is a **very small hole — about a number 80 drill size — in the
bottom of the U-tube**. It continuously meters a trickle of oil, with a little
liquid refrigerant, back into the suction gas stream, at a rate slow enough for
the compressor to digest. Without that hole the accumulator would become an oil
grave and the crankcase would run dry.

Fit an accumulator wherever liquid return is a foreseeable event rather than a
fault:

- **Reverse-cycle systems**, where the changeover dumps whatever is in the idle coil back down the suction line.
- **Hot gas defrost systems**, where the defrost cycle floods the coil.
- **Small split air conditioners**, where manufacturers use accumulators as insurance against the enormous variation in installed line lengths, charges and installation quality.

Locate the accumulator **close to the compressor**, so it protects the last
stretch of pipe as well.

>! An accumulator is not a licence to overcharge. It protects against
>! transients — changeover, defrost, a heavy pull-down — not against a system
>! that is permanently flooding back. Repeated liquid return still washes the
>! bearings and dilutes the oil.

## Suction line insulation

Refrigerant boils in the evaporator at its saturation temperature, often called
the **saturated suction temperature (SST)**. From the moment the vapour leaves
the coil it is colder than everything around it, so it keeps absorbing heat all
the way back — picking up superheat that does the plant no good at all.

Excess return gas temperature causes a long chain of trouble:

- Higher discharge temperature at the compressor terminals
- Higher condensing temperature than necessary
- Greater heat of compression, so more work for the same cooling
- Increased bearing loads and a poorer lubricating film
- Overheated oil, which can coke on hot surfaces
- Lower cycle efficiency across the board

There is a second effect that is easy to miss. The hotter the return vapour,
the **greater its specific volume** — the same cylinder swept volume now
swallows fewer kilograms per revolution, so the refrigerant mass flow rate
falls. Good economy wants the maximum practical mass flow, because that is what
does the cooling inside the cabinet.

So **insulate all suction lines**. Flexible closed-cell foam rubber is the usual
choice and is easy to work with; on large installations the type and thickness
are specified and installed by professional laggers.

!FIG[superheat-measure]

### Choosing thickness

Three factors drive the decision:

1. **Length of line** — the longer the run, the thicker the insulation needed.
2. **Location** — a line in direct sun needs extra thickness and a reflective sunshade.
3. **Saturated suction temperature** — the colder the line, the larger the temperature difference driving heat in, and the greater the risk of condensation forming on the outside of the insulation.

| Application | Short lines | Long lines |
| --- | --- | --- |
| Low temperature (freezers) | 25 mm | 40 mm |
| Medium temperature (cool rooms) | 13 mm | 19 mm |
| Air conditioning | 13 mm | 25 mm |

> Many split air conditioners put the metering device in the **outdoor** unit.
> The pipe you would normally call the liquid line then carries two-phase
> refrigerant and is effectively part of the evaporator during cooling — so it
> must be insulated too. Both lines lagged, not just the fat one.

## Liquid line accessories

### Heat exchangers

To guarantee subcooled liquid at the metering device, designers sometimes fit a
heat exchanger: liquid-to-water, **suction-to-liquid**, or even a dedicated
small refrigeration system to subcool the liquid. The suction-to-liquid type is
the most common, but understand the trade: the heat you take out of the liquid
goes into the suction gas, which reduces compressor efficiency and largely
offsets the extra evaporator capacity. Its real benefit is **preventing flash
gas and the expansion valve wear that comes with it**.

### Liquid line solenoid valve

Used to enable **pump-down** control. The solenoid is wired in series with the
thermostat: when the room is satisfied the valve shuts, the compressor keeps
running and pumps the low side down until the low pressure control cuts out.
The point is that the evaporator is left empty of liquid, so on restart there is
nothing to slug back through the suction line into the compressor.

### Sight glass

A window into the liquid line, fitted **immediately ahead of the expansion
valve** so that what you see is what the valve is being fed.

On small plant, access forces the sight glass up near the condensing unit
instead. Remember what that means: with a long run between the glass and the
valve, a clear glass at the unit does not prove clear liquid at the valve, since
a lift or a hot roof space downstream can still produce flash gas. Some systems
therefore carry more than one sight glass.

### Liquid line filter-drier

Fit one in **every** liquid line. It filters contaminants and holds moisture,
and it belongs **upstream of the expansion valve and of the liquid line solenoid**
so those precision devices are protected from anything the drier can catch.

Driers come brazed, flared or with a **removable core**. Removable-core driers
are normally installed with an angle valve upstream and downstream, so a core
can be changed without pumping the whole plant down — invaluable after a burnout
when several core changes are needed. Pipe a removable-core drier with the
**flange facing down** so the core can actually be dropped out.

## Crankcase equalisers

When compressors are piped in parallel, oil migrates. One machine ends up with a
full crankcase and the other with a bare sight glass, and the starved one
fails. The cure is a **crankcase equaliser line** joining the equalising
tappings the manufacturer provides.

The rules are simple and unforgiving:

- The tappings are positioned so the **bottom of the connection just touches the normal crankcase oil level**. Oil can therefore move from a high crankcase to a low one.
- **Set the compressors so their oil levels are at the same height.** If the machines are different sizes, pack or adjust the bases until the levels line up — otherwise the equaliser simply drains the higher machine.
- The equaliser line should be **the same size as the crankcase tapping**, and installed **as near level as possible**.

Note the difference between this and the vapour equaliser sometimes fitted
between crankcases above the oil level: the oil equaliser only works if the
pressures above the oil are already equal, which is what the level suction
manifold from the previous lesson achieves.

## What to remember

- An accumulator's number 80 drill hole is what returns oil; block it and you kill the compressor.
- Insulate every suction line, and on splits with the valve outdoors insulate both lines.
- 25/40 mm for freezers, 13/19 mm for cool rooms, 13/25 mm for air conditioning.
- Drier before the solenoid and the expansion valve; removable-core flange facing down.
- Crankcase equaliser: same size as the tapping, level, with the machines set to the same oil height.
`,
  quiz: [
    {
      q: "What is the purpose of the very small hole (about a number 80 drill size) in the U-tube of a suction accumulator?",
      options: [
        "To equalise pressure across the accumulator during the off cycle",
        "To meter oil, and a little liquid refrigerant, back into the suction gas at a rate the compressor can handle",
        "To drain water from the shell",
        "To allow the accumulator to be pumped down for service",
      ],
      answer: 1,
      explain: "Oil separates out with the liquid at the bottom of the accumulator, and without a controlled path back it stays there and the crankcase eventually runs dry. The small hole trickles it home slowly enough to be harmless. It is not a pressure equaliser — the vessel is fully in the suction stream already.",
    },
    {
      q: "Beyond the obvious energy waste, why does excessive suction line superheat reduce plant capacity?",
      options: [
        "It raises the evaporating pressure",
        "It increases the specific volume of the vapour entering the compressor, so the same swept volume moves less refrigerant mass",
        "It causes the expansion valve to close",
        "It reduces the condenser subcooling",
        "It increases the oil viscosity in the crankcase",
      ],
      answer: 1,
      explain: "Hotter vapour is less dense. The compressor is a volume pump, so a bigger specific volume means fewer kilograms per revolution and less cooling done in the cabinet. That is on top of the higher discharge temperature, higher heat of compression, greater bearing loads and possible oil coking.",
    },
    {
      q: "A freezer with a long suction run is being lagged. What thickness is appropriate?",
      options: ["9 mm", "13 mm", "19 mm", "40 mm"],
      answer: 3,
      explain: "Low-temperature long lines call for 40 mm; 25 mm covers short low-temperature lines. The 13 and 19 mm figures belong to medium-temperature work. Under-lagging a freezer line not only wastes capacity, it lets moisture condense and eventually freeze on the outside of the insulation.",
    },
    {
      q: "Where should a liquid line filter-drier be installed?",
      options: [
        "Downstream of the expansion valve, in the suction line",
        "In the liquid line ahead of both the expansion valve and the liquid line solenoid valve",
        "Between the compressor discharge and the condenser",
        "Immediately after the receiver outlet only, never near the valve",
      ],
      answer: 1,
      explain: "The drier protects the precision devices, so it must be upstream of both the solenoid and the expansion valve. Putting it downstream of the valve leaves those components exposed to exactly the debris the drier exists to catch. Removable-core types are piped with angle valves either side and the flange facing down.",
    },
    {
      q: "Two parallel compressors of different sizes are to share a crankcase equaliser line. What must be done?",
      options: [
        "Fit a globe valve in the line so oil flow can be throttled",
        "Adjust the height of the compressor bases so both normal oil levels sit at the same height, and run the line level and the same size as the tapping",
        "Run the line from the top of one crankcase to the bottom of the other",
        "Use a line one size smaller than the tapping to slow the transfer",
      ],
      answer: 1,
      explain: "The tappings are positioned at the normal oil level, so the levels themselves must be set to the same height or oil simply drains from the higher machine into the lower one. The line must be full size and as near level as possible; throttling or undersizing it just delays equalisation instead of achieving it.",
    },
  ],
},

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
