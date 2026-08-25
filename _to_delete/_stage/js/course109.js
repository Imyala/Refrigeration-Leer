/* =========================================================================
   Course content, module 109 — Specialised tools and service equipment.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 9 — Specialised tools.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 9, Specialised tools",
    "AS 1432 — copper tubes for plumbing, gasfitting and drainage applications (tube types and wall thicknesses)",
    "AS 4484 — gas cylinders for industrial, scientific, medical and refrigerant use: labelling and colour identification",
    "Australian Refrigerant Handling Code of Practice, Part 1 — recovery, cylinders, leak testing and evacuation practice",
  ];

  const MODULES = [
    {
      id: "v1-specialised-tools",
      stream: "v1",
      title: "R1.9 · Specialised tools and service equipment",
      blurb: "The kit a refrigeration technician actually carries — from spanners and flaring blocks to gauge sets, leak detectors, vacuum pumps and recovery units — and the technique that makes each one work.",
      lessons: [

        /* ============================================================== */
        {
          id: "kit-spanners-wrenches",
          title: "The service kit, spanners and wrenches",
          minutes: 12,
          simple: "Spanners come in families that match different kinds of nut and thread, and using one family on another chews the corners off. Think of shoes: a size 9 boot will go onto a size 8 foot, but it will not fit properly and something gets damaged. Refrigeration nuts are soft brass, so a sloppy fit ruins them almost instantly.",
          refs: REFS,
          content: `
A refrigeration technician spends the day doing ordinary mechanical and
electrical jobs with ordinary tools — the specialised gear only comes out for
the specialised moments. The problem is that nobody can carry every tool. The
kit you walk to the job with has to be light enough to carry a hundred metres
from a parked van, and complete enough that you are not walking back for a
spanner. Everything else lives in the vehicle: the bigger tools, the spare
parts, the refrigerant for a normal day's work.

Three habits sit underneath the whole trade, and they never change:

1. Know what the job actually needs before you start.
2. Choose the correct tool and the correct material for it.
3. Keep every part of the refrigeration circuit clean and dry.

The third one is the one apprentices underrate. Moisture and dirt do more
long-term damage to a system than almost anything a spanner can do to it.

## Why spanners matter more here than in other trades

Most refrigeration fittings — flare nuts, unions, valve bodies — are forged
brass. Brass is soft. A spanner that is a size too big rounds the corners of a
brass nut on the first hard pull, and once the corners are gone you cannot get
the joint apart without cutting it out. So the rule in this trade is stricter
than in general fitting: only a correctly fitting spanner goes near a brass
fitting.

The single most useful spanner in the kit is the **flare nut spanner** (also
called a tube spanner or crowfoot). It is a ring spanner with a slot cut in one
side. The slot slides over the tube, then the ring wraps around five or six
faces of the flare nut instead of the two faces an open-ender grips. That is
the difference between undoing a tight flare nut and destroying it.

| Spanner type | How it grips | Where it earns its place |
|---|---|---|
| Flare nut (slotted ring) | Nearly all faces, slot passes over tube | Flare nuts, brass unions — the default choice |
| Ring, 6-point or 12-point | All faces, strongest and safest grip | Bolts you can drop a ring over; straight, offset or double-offset |
| Open-end | Two flats only | Tight spots and unions where nothing else fits |
| Socket, with ratchet or extension | All faces, from above | Compressor bolts, fan motors, panels; drives in 1/4, 3/8, 1/2 inch sizes |
| Adjustable | Two flats, jaw can wander | Odd sizes only, and only when nothing better exists |
| Service valve ratchet key | 6 mm square socket on the valve stem | Opening and back-seating compressor service valves |

The **service valve key** is worth knowing by name. Compressor suction and
discharge service valves have a square-milled stem instead of a hand wheel, so
that nobody without a tool can open them. The key is a ratchet at one end and a
fixed socket at the other, with a 6 mm square drive; adaptor sets cover valve
stems that do not match.

## Sizing systems — four families, no mixing

The number stamped on a spanner means different things depending on the thread
system the fastener belongs to.

| System | What the marking means | Typical use |
|---|---|---|
| Metric | Distance across the flats, in mm (a "10 mm" spanner) | Almost all modern equipment |
| Whitworth (BSW and BSF) | The *bolt diameter*, not the head — so a 1/2 in Whitworth spanner fits a much bigger head | Older Australian and British plant |
| Unified (UNF and UNC) | Across flats in inches, marked AF for "across flats" | Imported and automotive fittings, SAE flare nuts |
| BA (British Association) | A number, 0 to 16 — the larger the number, the smaller the fastener | Instruments, small electrical terminals |

A 1/2 inch Whitworth spanner and a 1/2 inch AF spanner are two completely
different tools. Put the wrong one on a fastener and it will feel almost right,
slip under load, and round the head. If a spanner rocks on the nut before you
pull, it is the wrong spanner.

## Using them without hurting yourself or the fitting

The length of the shank of a spanner is roughly **ten times the width of the
jaw opening**. That is not decoration — it is a torque limit built into the
tool. A 10 mm spanner is about 100 mm long, and the hardest pull an average
hand can put on 100 mm of steel is roughly the right tension for a 10 mm nut.
Slip a length of pipe over the handle and you have destroyed the safeguard: you
will strip the thread, shear the bolt, or spring the spanner jaws.

Two more rules that stop injuries:

- With open-end and adjustable spanners, always pull **towards the shorter
  jaw**. Pulled the other way, the load tries to spring the jaws open and the
  spanner jumps off.
- **Pull, do not push.** When the nut suddenly frees, a pull lets you stay
  balanced. A push puts your knuckles into whatever is behind the fitting.

>! Never use a spanner as a hammer, a lever or a drift. A sprung or cracked
>! spanner can let go under full load with your hand behind it. Retire damaged
>! spanners rather than leaving them in the kit for someone else to find.

## On the job

- Carry a full set of flare nut spanners sized for the SAE flare nuts you meet:
  1/4, 3/8, 1/2, 5/8 and 3/4 inch tube.
- Two spanners on every flare — one to hold the fitting body, one to turn the
  nut. Turning the nut against an unheld body twists the tube and cracks the
  flare.
- Keep an adjustable spanner in good repair or leave it home; a worn adjustable
  is the fastest way to ruin brass.
- Match the spanner to the thread system before you match it to the feel.
- Never extend a handle with a pipe to win an argument with a seized fitting —
  use penetrating oil, heat or a bigger correctly sized tool instead.
`,
          quiz: [
            {
              q: "Why is a flare nut spanner preferred over an open-end spanner on a 5/8 inch flare nut?",
              options: [
                "It is longer, so it applies more torque",
                "Its slotted ring passes over the tube yet still grips almost all the faces of the soft brass nut",
                "It is made of a softer metal that cannot damage brass",
                "It fits both metric and imperial nuts",
              ],
              answer: 1,
              explain: "The slot lets the spanner pass over the tube, but the ring still wraps most of the nut's faces. An open-ender only grips two flats, which is exactly how brass flare nuts get their corners rounded off. Extra length is not the point — flare nut spanners are not especially long.",
            },
            {
              q: "A spanner marked 1/2 inch Whitworth is placed on a 1/2 inch AF bolt head. What happens?",
              options: [
                "It fits correctly — the two systems are interchangeable at 1/2 inch",
                "It is far too small to go on the head",
                "It is oversize and sloppy, because Whitworth sizes name the bolt diameter, not the head width",
                "It fits only if the bolt is metric-threaded",
              ],
              answer: 2,
              explain: "Whitworth spanner markings state the diameter of the bolt shank, so the hexagon it fits is considerably larger than half an inch. AF markings state the distance across the flats. The Whitworth spanner is therefore loose on an AF head and will round it.",
            },
            {
              q: "The shank of a spanner is normally about ten times the jaw width. What is the practical significance of that ratio?",
              options: [
                "It makes spanners easier to store in a roll",
                "It sets a rough torque limit so a normal hand pull tightens the fastener correctly without overloading it",
                "It is required by AS 1432 for refrigeration tools",
                "It ensures the spanner will not fit into confined spaces",
              ],
              answer: 1,
              explain: "The proportion is deliberate: the leverage matches what the fastener of that size can take. Adding a cheater pipe defeats it and leads to stripped threads, sheared bolts or sprung jaws. AS 1432 covers copper tube, not spanners.",
            },
            {
              q: "Which tool is used to operate a compressor service valve stem?",
              options: [
                "A 12-point ring spanner",
                "Long-nose pliers",
                "A ratchet valve key with a 6 mm square drive socket",
                "An impact screwdriver",
              ],
              answer: 2,
              explain: "Service valve stems are milled square so they need a square socket — the ratchet valve key, with adaptors available for odd stems. Pliers would round the square immediately, and a ring spanner will not engage a square stem properly.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "drivers-pliers-punches-hex",
          title: "Screwdrivers, pliers, punches and hex keys",
          minutes: 11,
          simple: "These are the everyday tools, and nearly every problem with them comes from using one for a job it was not made for. A screwdriver is not a chisel, pliers are not a spanner, and the plastic on the handle is there to stop shorts, not to save you from a shock. Treat each one as a shape that fits one particular job.",
          refs: REFS,
          content: `
This group of tools looks too basic to teach. It is not. More refrigeration
apprentices hurt themselves with a screwdriver than with a brazing torch,
because a screwdriver slips silently and a torch does not. Every item below has
a correct shape, a correct use, and a failure mode when it is abused.

## Screwdrivers

Screwdrivers are classified by blade length, tip width and tip type, plus any
special purpose built into them. The ones worth carrying:

| Type | What it is for |
|---|---|
| Standard (flat) tip, round blade | General slotted screws |
| Standard tip, square blade | The same, but a spanner can grip the blade for extra turning force |
| Phillips cross-tip, sizes 1, 2 and 3 | Recessed cross-head screws — size 2 covers most panel work |
| Offset | Screws with almost no headroom above them |
| Stumpy (stubby) | Short bodies, inside cabinets and control boxes |
| Impact driver | Large, tight or seized screws — a hammer blow turns the tip |
| Screw-holding | Grips the screw so it can be started in an awkward spot |
| Ratchet | Fast repetitive work, panel screws |

The detail that matters is the shape of a flat tip. It should be **slightly
hollow-ground**, so the faces are very slightly concave and the tip is close to
parallel-sided. A hollow-ground tip bears on the bottom of the screw slot and
tries to stay in it. A rounded, worn or wedge-shaped tip acts like a ramp: it
climbs out of the slot, chews the screw head, and drives the blade into your
other hand. Because a good tip stays put, you also need far less downward
pressure to turn the screw — which is the real safety gain.

You can re-shape a tip with a smooth file or a grinding wheel. On a wheel,
keep dipping the tip in water. If it turns blue you have overheated it and
drawn the temper out of the steel; from then on it will bend and mushroom.

For seized screws, penetrating oil first, then an impact driver. Never a
hammer on an ordinary screwdriver.

>! The plastic sleeve on a screwdriver blade is there to stop the shank
>! bridging two live terminals — it is not personal shock protection. For live
>! work you need properly rated insulated tools, and in Australia you need to
>! be working within your electrical licensing and isolation procedures.

## Pliers

Pliers are classified by type and overall length. The common ones:

- diagonal cutting pliers (side cutters)
- wire-stripping pliers
- long-nose and flat-nose pliers
- slip-joint pliers, two-position and multi-position
- internal and external circlip pliers
- combination pliers
- locking pliers (vice-grips)

Pliers grip, bend, twist and cut. They are **not** spanners. Every apprentice
tries a pair of multigrips on a flare nut once, and every apprentice then buys
a new flare nut and fitting. The jaws only touch two points, they slip, and
brass rounds off.

Two more habits. First, handle insulation on pliers is not shock protection
either. Second — and this one is specific to our trade — never grip a fitting
with your good pliers while it is being brazed. The heat conducts straight into
the jaws and draws the temper, and afterwards they will not hold anything. Keep
one old, sacrificial pair in the brazing kit for exactly that job.

## Punches

| Punch | Point | Use |
|---|---|---|
| Centre punch | 90 degrees | Marking a hole centre so the drill does not wander |
| Prick punch | 60 degrees | Fine layout marks, before deepening with a centre punch |
| Wad punch | Hollow cutting edge | Cutting holes in gaskets and other soft sheet material |
| Letter and number punches | Stamped characters | Marking components, tags and plates |
| Starter (drift) punch | Tapered | Shocking a tight pin loose to start it moving |
| Parallel pin punch | Parallel, long or short | Driving the loosened pin the rest of the way out |

The order matters: a tapered starter punch first, because it is strong enough
to take the shock; then a parallel punch of the right diameter to push the pin
clear. Start with a parallel punch on a tight pin and you will bend it.

Wad punches should be used on the **end grain** of a block of timber. End grain
lets the cutting edge sink in between the fibres rather than being blunted
across them.

## Hex keys

Inset grub screws — headless screws with a hexagon socket — hold pulleys,
flywheels, control knobs, fan hubs and parts of compressor assemblies. The only
tool that will move them is a hex key (commonly called an Allen key, from the
brand name). Carry a **full set in both metric and imperial**, because imported
equipment mixes the two freely and a metric key that is a whisker undersize
will round out an imperial socket on the first firm turn.

Ball-end keys are convenient for starting a screw at an angle, but do the final
tightening and the first loosening with the plain end square in the socket —
the ball end contacts less of the hexagon and rounds it.

## What to remember

- A hollow-ground, square, correctly sized tip is what keeps a screwdriver out
  of your hand.
- Overheating a tip on a grinder ruins its temper — dip it often.
- Handle and blade insulation prevents short circuits, not electrocution.
- Pliers grip; spanners turn. Keep a scrap pair for holding hot work.
- Starter punch to shock a pin loose, parallel pin punch to drive it out.
- Metric *and* imperial hex keys, or you will round a grub screw.
`,
          quiz: [
            {
              q: "Why should the tip of a flat-blade screwdriver be slightly hollow-ground?",
              options: [
                "So it can also be used as a small chisel",
                "So it bears on the bottom of the slot and resists climbing out, needing less downward force",
                "So it fits both Phillips and slotted screws",
                "So the blade flexes and cannot snap",
              ],
              answer: 1,
              explain: "A hollow-ground tip is near parallel-sided at the very end, so it pushes down into the slot rather than wedging out of it. A worn or wedge-shaped tip acts as a ramp, cams out, chews the screw and can drive the blade into your hand.",
            },
            {
              q: "A tip is re-ground on a bench grinder and turns blue. What has happened?",
              options: [
                "Nothing — the colour is only surface oxide",
                "It has been case-hardened and is now stronger",
                "It has been overheated and lost its temper, so it will bend and mushroom in service",
                "It has picked up grinding wheel material and needs cleaning",
              ],
              answer: 2,
              explain: "Blue means the steel got hot enough to draw the temper. The tip is now soft and will deform under load. Dip the tip in water frequently while grinding to keep it cool.",
            },
            {
              q: "You need to drive a tight parallel pin out of a fan hub. What is the correct sequence?",
              options: [
                "Parallel pin punch first, then a starter drift if it will not move",
                "A starter (tapered drift) punch to shock the pin loose, then a parallel pin punch to drive it out",
                "A centre punch, then a wad punch",
                "A prick punch throughout, because it is the finest",
              ],
              answer: 1,
              explain: "The tapered starter punch is stout enough to survive the initial shock; the parallel punch then has the length to push the pin clear. Starting with a slender parallel punch on a tight pin bends the punch.",
            },
            {
              q: "Why should an old, sacrificial pair of pliers be kept for the brazing kit?",
              options: [
                "Because new pliers are too heavy to hold near a flame",
                "Because heat conducted into the jaws draws the temper out of good pliers and ruins their grip",
                "Because brazing flux stains the chrome plating",
                "Because insulated handles melt and expose the user to shock",
              ],
              answer: 1,
              explain: "Gripping a fitting while it is heated puts torch heat straight into the jaws, softening the steel permanently. Flux staining is cosmetic; the real loss is the temper, and a softened jaw will never grip properly again.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "tube-materials-and-hose",
          title: "Tubing materials, sizes and flexible hose",
          minutes: 12,
          simple: "Refrigerant pipe is mostly copper, and copper comes in two personalities: soft, which bends easily, and hard, which stays where you put it. Big systems and ammonia systems use steel instead, because ammonia eats copper. New tube arrives full of dry nitrogen and capped, and your job is to keep it that way.",
          refs: REFS,
          content: `
Most of the technician's real work is pipework: repairing it, extending it,
replacing components in it. Choosing the right tube and keeping it clean is not
a preliminary to the job — it *is* the job, because a system is only as reliable
as the joints in it.

Material choice depends on the size and nature of the installation, the
refrigerant, and the relative cost of materials and labour. The minimum
requirements for refrigerant tubing — material, wall thickness, joining method —
are set by the Australian Standards, and local codes and by-laws apply on top
of them.

## The materials

| Material | Where it is used | Watch out for |
|---|---|---|
| Copper | The default for halocarbon systems up to 100 mm OD | Must never be used with ammonia |
| Steel | Ammonia plant, and large halocarbon lines | Heavier, needs welding, corrodes if unprotected |
| Stainless steel | Food processing — ice cream, milk handling | Often mandated by public health authorities; flares or brazes readily |
| Aluminium | Micro-channel coils and some OEM pipework | Brazes at low temperature, so no nitrogen purge needed |
| Brass | Fittings, valve bodies | Same ammonia restriction as copper |

**Ammonia and copper do not mix.** In the presence of moisture, ammonia attacks
non-ferrous metals — copper and brass most of all. That is why an ammonia plant
is steel from end to end, including the gauges and valve internals.

For every other common refrigerant, lines up to **100 mm OD** may be copper or
steel; above 100 mm, use steel. In practice, if an installation has a lot of
pipe over about 50 mm OD, most contractors change to steel throughout, because
handling and jointing large copper becomes slow and expensive.

Steel pipe should be seamless or lap-welded; butt-welded pipe is acceptable up
to 50 mm. Sizes of 25 mm and smaller should be Schedule 80 (extra heavy). Above
25 mm, Schedule 40 (standard weight) may be used — except liquid lines, which
stay Schedule 80 up to 40 mm because they carry the highest pressures with the
smallest bores.

## Copper tube: soft and hard

**Annealed (soft) copper** has been heated and slowly cooled, which leaves it
flexible. It bends and flares easily, which is why it dominates domestic and
small commercial work and why it is the tube you use with flared fittings. It
comes in rolls, in sizes up to 20 mm OD. Two cautions: it work-hardens if you
keep bending or hammering it, and because it is soft it must be properly
clamped or bracketed or it will sag and vibrate.

**Hard-drawn copper** is stiff. It holds a straight run with few supports,
which makes it the choice for commercial and larger installations. It comes in
6 m straight lengths, in the same diameters and wall thicknesses as the
annealed tube.

Both are processed for refrigeration use: cleaned, dried, filled with dry
nitrogen and capped. That nitrogen charge is not packaging — it stops the bore
oxidising during storage. The moment you cut a length, cap or plug the ends
again. Soft tube can simply be pinched closed.

>! Never use plumbing-grade copper tube on a refrigeration system. It has not
>! been cleaned and dried to refrigeration standard, and the residual drawing
>! oil and moisture inside it will contaminate the oil, block the drier and
>! acidify the system.

## How copper tube is designated

Australian copper tube is called up by its nominal outside diameter and its
wall thickness in millimetres: **20 mm nominal size x 0.9 mm wall**, usually
shortened to "20 x 0.9 copper". AS 1432 defines types A, B, C and D, which are
simply progressively lighter wall thicknesses for the same OD. **Type B suits
most refrigeration applications.**

| Nominal OD (mm) | Type A wall (mm) | Type B wall (mm) | Type C wall (mm) |
|---|---|---|---|
| 10 | 0.9 | 0.7 | — |
| 15 | 1.2 | 0.9 | 0.7 |
| 18 | 1.2 | 1.0 | 0.7 |
| 20 | 1.4 | 1.0 | 0.9 |
| 25 | 1.6 | 1.2 | 0.9 |

Field practice is still stubbornly imperial for the small sizes, because the
fittings and flare tools are imperial. It pays to know both:

| Imperial OD | Millimetres |
|---|---|
| 1/4 in | 6.35 |
| 3/8 in | 9.53 |
| 1/2 in | 12.70 |
| 5/8 in | 15.88 |
| 3/4 in | 19.05 |

Note that refrigeration tube is always sized on **outside** diameter, unlike
water plumbing pipe which is often called up by bore. Order 1/2 inch tube for a
plumbing job and you will get something quite different.

## Flexible hose

Where lines must move — vehicle air-conditioning, vibration isolation on
commercial plant, and the charging lines on your own gauge set — flexible hose
replaces rigid tube. Refrigeration hose is a layered construction: an inner
nylon tube for low permeability, a braid or textile reinforcement for burst
strength, and a polyethylene or rubber cover for abrasion resistance. The
materials are chosen so the hose does not age hard, stays flexible, and can be
fitted with couplings.

Hose end couplings come in a few forms: a straight male 45 degree flare that
screws on and is reusable; a push-on barbed type with an O-ring seal, also
reusable; a barbed push-on with a flare end; and a permanent crimped-on fitting
that cannot be re-used.

>! Hose must be matched to the refrigerant. A hose built for R12 or R134a is not
>! automatically suitable for R410A pressures or for hydrocarbon refrigerants.
>! Check the printed rating on the hose, and remember that R410A work needs
>! hoses and a gauge set rated for its much higher pressures.

## On the job

- Cap or plug tube ends the instant you cut them; the nitrogen charge is doing
  a job.
- Soft copper up to 20 mm OD in rolls for flare work; hard drawn in 6 m lengths
  for commercial runs.
- Copper and brass never touch an ammonia system.
- Call copper up as nominal OD x wall thickness; Type B for most work.
- Refrigeration tube is measured on the outside diameter, not the bore.
- Check hose ratings against the refrigerant before you connect anything.
`,
          quiz: [
            {
              q: "Why is copper tube never used on an ammonia refrigeration system?",
              options: [
                "Ammonia dissolves the tin coating inside copper tube",
                "In the presence of moisture, ammonia attacks non-ferrous metals such as copper and brass",
                "Copper cannot withstand ammonia's operating pressures",
                "Ammonia systems operate at temperatures below copper's brittle point",
              ],
              answer: 1,
              explain: "It is a chemical attack on non-ferrous metals, accelerated by any moisture present — which is why ammonia plant is steel throughout, gauges and valve internals included. Pressure is not the issue; ammonia's operating pressures are comparable to other refrigerants.",
            },
            {
              q: "A roll of refrigeration-grade soft copper arrives capped and pressurised with nitrogen. Why?",
              options: [
                "To prove it has been leak tested at the factory",
                "To keep the bore clean and dry by preventing oxidation during storage and transport",
                "To make it easier to uncoil",
                "Because nitrogen is used later as the brazing purge gas anyway",
              ],
              answer: 1,
              explain: "The tube is cleaned, dried and then filled with dry nitrogen so the inside cannot oxidise or pick up moisture. That is why you re-cap or pinch the ends immediately after cutting — an open end starts undoing the manufacturer's work.",
            },
            {
              q: "What does '20 x 0.9 copper tube' describe?",
              options: [
                "20 mm bore and 0.9 mm bore tolerance",
                "20 mm nominal outside diameter with a 0.9 mm wall thickness",
                "20 mm length in metres and 0.9 kg per metre",
                "A 20 mm inside diameter Type A tube",
              ],
              answer: 1,
              explain: "Australian copper tube is designated by nominal outside diameter followed by wall thickness in millimetres. Refrigeration tube is always sized on OD, unlike much water plumbing pipe which is called up by bore.",
            },
            {
              q: "Which statement about hard-drawn copper tube is correct?",
              options: [
                "It is supplied in rolls up to 20 mm OD and is the usual choice for flared work",
                "It is supplied in 6 m straight lengths, is stiff, and needs fewer supports on long runs",
                "It must be annealed before any brazed joint can be made",
                "It has thinner walls than annealed tube of the same diameter",
              ],
              answer: 1,
              explain: "Hard-drawn tube comes in 6 m lengths in the same diameters and wall thicknesses as annealed tube. Its stiffness is the advantage — long runs stay straight with fewer clamps. Rolls up to 20 mm and easy flaring describe annealed (soft) tube.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "cutting-reaming-bending",
          title: "Cutting, reaming and bending tube",
          minutes: 13,
          simple: "A wheel cutter squeezes copper apart cleanly instead of sawing it, but it leaves a lip of metal turned inwards that must be scraped off. Bending is about patience: sweep it round slowly on the biggest radius you can, or the tube flattens and chokes the gas like a kinked garden hose.",
          refs: REFS,
          content: `
Two operations, done badly, cause more service call-backs than almost anything
else: a cut that leaves swarf inside the tube, and a bend that flattens the
bore. Both are avoidable with technique rather than expensive tools.

## Cutting with a wheel cutter

A tube cutter does not saw — it rolls a hardened wheel around the tube under
increasing pressure until the metal parts. That is why it makes no filings on
the outside and why it is the only acceptable way to cut refrigerant tube. A
hacksaw throws steel and copper particles straight into the bore, and those
particles end up in the compressor.

A good cutter carries several features worth knowing:

- a **cutting wheel** running between two **rollers**, with the **tightening
  knob** feeding the wheel in
- a **fold-away reamer** — a turned cutting edge that removes the internal burr,
  with a flat filing surface for the outside burr
- a **spare cutting wheel** stored under the reamer
- a **flare cut-off groove**, a narrow slot that lets you cut a cracked flare
  off right at its base so you waste almost no tube

Technique: mark the tube, square the cutter on it, and tighten the knob only
until the wheel just bites. Rotate the cutter a full turn, then nip the knob a
fraction more — perhaps a quarter turn. Repeat. Over-tightening does two bad
things: it deforms the tube end out of round, and it forces a thick burr inwards
that partly blocks the bore. Rushing the cut is the single most common apprentice
error.

For tight spaces — the back of a domestic refrigerator, inside a split system
indoor unit — a mini cutter works in as little as about **30 mm of clearance**.
It is slower, but it saves dismantling half the cabinet.

## Reaming and deburring

Every cut leaves a raised lip on the inside of the tube. Leave it there and it
does two things: it restricts flow at exactly the point where a fitting already
narrows the passage, and it produces turbulence that erodes the tube. On a
capillary or small liquid line, a burr can measurably change the system's
performance.

Ream with the tool built into the cutter or with a separate reamer, taking off
only the lip. Then dress the outside edge lightly so the tube slides into a
fitting.

The critical part is what happens to the shavings. **Always point the cut end
down while you ream**, so chips fall out onto the floor rather than into the
line. If you cannot point it down, use these tricks:

- On soft tube, pinch the far end closed before cutting. That keeps chips and
  moisture out of the tube you are not using yet.
- On hard drawn tube, cap or plug the ends.
- After reaming, tap the end and blow it clean with dry nitrogen — never with
  your mouth or with compressed air from a shop compressor, which carries oil
  and water.

>! Copper swarf inside a system does not settle harmlessly. It travels to the
>! compressor suction, scores bearings and valve plates, and turns a two-hour
>! job into a compressor change.

## Bending without kinking

The rules for a good bend are simple and physical. Copper on the outside of the
bend is being stretched thinner; copper on the inside is being compressed and
wants to buckle. The tighter the radius, the worse both effects get, until the
wall on the inside folds over — a kink — and the bore is choked.

The minimum radius to which refrigerant tube may be bent is **five to ten times
its diameter**, and you should always aim at the large end of that range. A
large radius flattens less, chokes less, and is genuinely easier to pull.

**Worked example.** You need to bend 1/2 inch (12.7 mm) soft copper.

- Absolute minimum radius = 5 x 12.7 = **63.5 mm**
- Preferred radius = 10 x 12.7 = **127 mm**

So the centre-line of the bend should sweep an arc of at least 64 mm radius,
and if the layout allows 127 mm, use it. On 5/8 inch (15.88 mm) tube those
figures become 79 mm minimum and 159 mm preferred.

Other habits that produce a clean bend:

- Bend **slowly**, and never try to complete the whole bend in one movement.
  Work round in stages so the metal is not shocked.
- Keep the tube round. Any flattening you can see has already reduced the
  cross-sectional area.
- Finish so that the pipework puts **no strain on the fittings**. A bend that
  has to be sprung into place will fatigue and crack at the flare.
- Where vibration is present, form a horizontal loop in the line. The loop
  absorbs movement that would otherwise work-harden the copper until it cracks.

## Bending tools

**Coil bending springs** are cheap and effective. The spring supports the tube
wall so it cannot collapse. External springs slide over the tube; internal
springs go inside it, which is the version to use when the bend is close to the
tube end, or even after the tube has already been flared. Removing a spring
that has tightened onto the tube is easy once you know the trick: twist it in
the direction that makes it wind down smaller (internal) or open out larger
(external), and it lets go.

**Lever-type benders** give accurate, repeatable bends in annealed tube. They
have two scales: a degree scale on the form wheel giving the angle of bend, and
gain marks (L, R and 0) on the form handle that allow for the gain — the stretch
the tube gains through the bend — so the finished dimension is right.

There are three ways to use one:

1. **Left-side bend.** Line up the pencil mark for the bend centre-line with
   the **L** mark on the forming shoe. Pull the lever smoothly until the **0**
   on the form handle sits opposite the required angle on the form wheel. Up to
   180 degrees is possible in one sweep.
2. **Right-side (hook) bend.** Line the pencil mark up with the **R** mark
   instead, and pull to the required angle.
3. **Offset.** Two bends of equal angle in opposite directions, used to step a
   line sideways around an obstruction.

### Worked example: setting out an offset

You need to step a liquid line 100 mm sideways, using two 45 degree bends.

- The distance between bend centres is the offset divided by the sine of the
  offset angle: x = 100 / sin 45 = 100 / 0.7071 = **141 mm**.
- Mark A at the first bend centre, measure 141 mm along the tube, mark B.
- Align mark A with the **R** mark on the bender, pull to 45 degrees.
- Remove the tube, turn it, align mark B with the **R** mark, and bend 45
  degrees the other way.

Check the result against the actual gap before you cut anything to length. A
dry fit costs a minute; a re-made line costs an hour.

## What to remember

- Wheel cutter only, fed in gently, a fraction of a turn at a time.
- Ream every cut, point the end down, and get the chips out.
- Minimum bend radius is 5 to 10 tube diameters — work at the large end.
- Slow, staged bends; never a single violent pull.
- Springs support the wall; lever benders add accuracy and gain marks.
- Finished pipework must sit in place with no strain on the fittings.
`,
          quiz: [
            {
              q: "Why must a hacksaw not be used to cut refrigerant tube?",
              options: [
                "It work-hardens the copper along the cut line",
                "It produces metal particles that enter the bore and are carried to the compressor",
                "It cannot cut hard-drawn copper",
                "It leaves the tube end out of round",
              ],
              answer: 1,
              explain: "The problem is contamination. Saw swarf goes into the line, travels to the compressor and scores bearings and valves. A wheel cutter parts the metal by rolling pressure and makes no loose filings, which is why it is the only acceptable method.",
            },
            {
              q: "What is the minimum bend radius for 15.88 mm (5/8 inch) copper tube, and what radius would you prefer?",
              options: [
                "Minimum 16 mm, prefer 32 mm",
                "Minimum 79 mm (5 x diameter), prefer 159 mm (10 x diameter)",
                "Minimum 159 mm, prefer 79 mm",
                "There is no minimum provided a bending spring is used",
              ],
              answer: 1,
              explain: "The rule is five to ten tube diameters, and you work at the large end because a bigger radius flattens less and pulls more easily. A spring supports the wall but does not repeal the rule — it still must not be bent tighter than five diameters.",
            },
            {
              q: "You must step a suction line 120 mm sideways with two 30 degree bends. What is the distance between the bend centres?",
              options: [
                "60 mm",
                "104 mm",
                "240 mm",
                "138 mm",
              ],
              answer: 2,
              explain: "The distance between bend centres is the offset divided by the sine of the offset angle: 120 / sin 30 = 120 / 0.5 = 240 mm. The shallower the angle, the longer the travel needed — which is why a 45 degree offset of the same size would need only about 170 mm.",
            },
            {
              q: "Where is an internal bending spring specifically better than an external one?",
              options: [
                "On hard-drawn tube, which an external spring cannot grip",
                "Where the bend is close to the end of the tube, or in tube that has already been flared",
                "On any bend tighter than five diameters",
                "On tube larger than 20 mm OD",
              ],
              answer: 1,
              explain: "An external spring cannot pass over a flare and needs room to sit beyond the bend. An internal spring is pushed down the bore, so it can support a bend right up near the end and works on already-flared tube.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "flaring-and-swaging",
          title: "Flaring and swaging: joints that seal",
          minutes: 14,
          simple: "A flare is a trumpet-shaped bell rolled onto the end of soft copper, and the nut squeezes that bell against a matching 45 degree cone so metal seals against metal. Do it too fast or too hard and the bell splits or thins. Swaging is the opposite trick: stretching one tube end so a second tube slides inside it and can be brazed without a fitting.",
          refs: REFS,
          content: `
Most refrigerant tube is far too thin to thread, so joints are made either by
flaring or by welding and brazing. This lesson is about flares — the joint you
can make, break and remake on site with hand tools — and about swaging, which
prepares tube for brazing without a fitting.

## What a flare actually is

The end of the tube is belled outwards into a cone. The flare **nut**, which
has already been slid onto the tube, pulls that cone hard against the 45 degree
male cone of the fitting. Nothing seals it but metal on metal, so the flare must
be the right size, the right shape, unsplit, unmarked and clean.

The Australian and international standard for refrigeration is a **brass forged
fitting with an SAE 45 degree flare**, on either pipe thread or SAE national
fine thread. Note that 45 degrees is a refrigeration and automotive standard —
plumbing and hydraulic flares use different angles (37 degrees is common in
hydraulics) and the two will never seal against each other even though the nut
will screw on.

Figure-perfect flares and the four ways they go wrong:

| Fault | Cause | What happens in service |
|---|---|---|
| Flare too small | Tube did not protrude far enough from the block | Only part of the seat touches; blows out or weeps |
| Flare too large | Tube protruded too far | The flare fouls the nut thread; the nut will not draw up square |
| Uneven flare | Tube not square in the block, or block jaws worn | Leaks on one side, cannot be cured by tightening |
| Burrs or scoring on the face | Tube not reamed, or grit on the cone | A leak path straight across the seat |
| Split or thinned flare | Spun too hard, or tube work-hardened | Cracks under vibration, often weeks later |

## Making a flare that seals — the method

The classic tool is a **split-block flaring tool**: two hinged bars clamped
together by wing nuts, with tapered holes for each tube size, and a yoke
carrying a **spinner** (a 45 degree cone on a screw).

1. **Cut the tube square** with a wheel cutter, and ream the inside burr. Dress
   the outside edge lightly.
2. **Put the flare nut on the tube first**, facing the right way. Forget this
   and you will make the flare twice. It is the single most common mistake in
   the trade.
3. **Clamp the tube in the block** so it protrudes above the face by about
   **one third of the depth of the flare**. Too little and you get a small
   flare; too much and it will not fit the nut. Clamp tight — a tube that
   creeps down while you spin gives an undersized flare.
4. **Put a drop or two of refrigeration oil** on the spinner cone where it will
   touch the copper. The oil lets the cone slide rather than tear, and it is the
   same oil that will be in the system, so it does no harm.
5. **Work the flare gradually with an oscillating motion.** Screw the spinner
   down half to three-quarters of a turn, then back it off about a quarter turn.
   Advance another three-quarters, back off a quarter. Keep repeating. This
   forward-and-back rhythm forms the copper progressively instead of tearing it,
   and it is why a properly made flare does not crack.
6. **Stop at the right point.** Some technicians deliberately spin only to about
   seven-eighths of the full contour, so that the flare takes its final shape
   against the actual fitting when the nut is tightened. Never keep winding for
   luck: over-spinning thins the wall at the base of the flare and seriously
   weakens it.

A second style of block, now very common, has **no 45 degree chamfer in the
anvil**. Instead a specially shaped cone forms the flare above the face of the
block. Its advantage is that the copper is not squeezed into a chamfer, so the
**original wall thickness is retained at the base of the flare** — the exact
place where an over-spun conventional flare fails. Many of these are eccentric
or ratchet-driven, which makes the oscillating action almost automatic.

### Assembling the joint

- Inspect the flare against the list above. If it is wrong, cut it off using
  the flare cut-off groove on your tube cutter and make it again. A doubtful
  flare never improves.
- A smear of refrigeration oil on the flare face helps the surfaces seat and
  stops the flare turning with the nut.
- Start the nut by hand and run it down by hand. If it will not start by hand,
  something is misaligned.
- Use **two spanners**: one holding the fitting body, one turning the nut.
- Tighten firmly, not brutally. The seal is made by the cones meeting, not by
  torque. Over-tightening extrudes the copper out from under the seat, and the
  joint then leaks no matter how much harder you pull.

>! A flare that still weeps after you have tightened it twice will not be cured
>! by a third pull. Take it apart, look at the seat, and make a new flare. Every
>! extra turn is thinning the copper.

Tools are available for re-facing damaged seats on brass and other non-ferrous
fittings — worth having, because a scored fitting seat ruins every flare you
put on it.

## Swaging

Swaging expands the end of one piece of tube so that a second piece of the same
size slides inside it. The joint is then brazed. It saves the cost of a coupling
and, more importantly, removes two brazed joints and one fitting from the line —
fewer joints means fewer potential leaks and less restriction.

The rule for depth: the socket should be about **one tube diameter deep**, so a
1/2 inch tube is swaged to take about 12 to 13 mm of the inserted tube. The
inserted tube must be a firm sliding fit — brazing alloy is drawn into the gap
by capillary action, and if the gap is too big the capillary action fails.

Three ways to do it:

| Tool | How it works | Comment |
|---|---|---|
| Swaging adaptor in a flaring block | The flare cone is removed and a sized swage punch fitted | Cheapest — most flaring kits include the adaptors |
| Lever-type tube expander | Segmented head expands inside the tube as the lever is squeezed | Fast and accurate, sized adaptors per tube size, more expensive |
| Swaging punch | Driven into the tube end with a hammer | Simple, can be shop-made, needs care to stay round and square |

Whichever tool, the same discipline applies as for flaring: soft (annealed)
tube only, cut square, deburred, work gradually, and keep the swage round. Then
cap the end until you are ready to braze.

## On the job

- Nut on the tube first. Every time.
- Tube protrudes about one third of the flare depth above the block.
- Oil the spinner; oscillate three-quarters forward, a quarter back.
- Stop at full contour or slightly under — never keep spinning.
- SAE 45 degrees for refrigeration; hydraulic and plumbing flares are different
  angles and will not seal.
- Two spanners on every flare joint, firm not savage.
- Swage about one tube diameter deep, to a firm sliding fit for brazing.
`,
          quiz: [
            {
              q: "How far should the tube protrude above the face of a split-block flaring tool?",
              options: [
                "Flush with the face of the block",
                "About one third of the depth of the finished flare",
                "About the full depth of the finished flare",
                "About two tube diameters",
              ],
              answer: 1,
              explain: "One third of the flare depth gives a flare that fills the seat without fouling the nut thread. Flush gives an undersized flare that only partly touches the seat; too much protrusion gives an oversize flare the nut cannot draw up square on.",
            },
            {
              q: "Why is the spinner advanced three-quarters of a turn and then backed off about a quarter turn, repeatedly?",
              options: [
                "To let the copper cool between movements",
                "To form the copper progressively so it does not tear or crack, giving an accurate contour",
                "To measure the depth of the flare in stages",
                "To release trapped oil from under the cone",
              ],
              answer: 1,
              explain: "The oscillating action works the metal in stages rather than forcing it in one pass, which is what prevents cracking and gives an accurate flare contour. Oil on the cone helps it slide, but the rhythm itself is what forms the copper safely.",
            },
            {
              q: "What is the advantage of a flaring block that uses a separate cone forming the flare above the block face, rather than a 45 degree chamfer in the anvil?",
              options: [
                "It produces a 37 degree flare suitable for hydraulic fittings",
                "It retains the original wall thickness at the base of the flare",
                "It can flare hard-drawn tube as well as annealed",
                "It removes the need to ream the tube first",
              ],
              answer: 1,
              explain: "Squeezing copper into a chamfer thins it right at the base of the flare — the place flares fail. The cone type forms the flare above the block, so the wall thickness is preserved. It is still a 45 degree SAE flare and reaming is still essential.",
            },
            {
              q: "A newly made flare joint weeps after being tightened firmly twice. What is the correct action?",
              options: [
                "Tighten it a third time, harder, using a longer spanner",
                "Add thread sealant to the flare nut thread",
                "Undo it, inspect the flare and the fitting seat, and make a new flare if either is faulty",
                "Leave it and check again after the system has run for an hour",
              ],
              answer: 2,
              explain: "A flare seals by metal-to-metal contact of the two cones. If it did not seal at proper tension, the geometry or the surface is wrong, and further tightening only extrudes and thins the copper. Sealant on the thread does nothing — the thread is not the seal.",
            },
            {
              q: "How deep should a swaged socket be for a brazed tube-to-tube joint?",
              options: [
                "About one third of a tube diameter",
                "About one tube diameter",
                "About three tube diameters",
                "As deep as the swaging tool will physically go",
              ],
              answer: 1,
              explain: "Roughly one tube diameter of overlap gives the brazing alloy enough capillary area for a strong joint without wasting tube. The fit also matters: the inserted tube must be a firm sliding fit, because too large a gap defeats capillary action.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "fittings-access-valves-pinch-off",
          title: "Brazed and compression fittings, access valves and pinch-off tools",
          minutes: 12,
          simple: "Once you can cut, bend, flare and swage, you need somewhere to connect. This lesson covers the fittings that join pipe permanently, the little spring-loaded valves that let you plug your gauges in, and the tool that squashes a pipe shut so you can seal a system without losing its charge.",
          refs: REFS,
          content: `
A refrigerant circuit is a sealed pressure vessel with deliberate doors in it.
This lesson covers the doors — the fittings that join the pipe and the valves
that let a technician in without emptying the system.

## Brazed fittings

Brazing fittings are made in almost exactly the same shapes as flare fittings —
elbows, tees, couplings, reducers, adaptors, unions — but with plain sockets
instead of cones and nuts. Most are copper; the ones that carry a thread are
forged brass, because copper threads are too soft.

The socket is sized so the tube is a close sliding fit, because brazing alloy
is pulled into the joint by **capillary action**. The gap is what makes the
joint: too tight and the alloy cannot enter; too loose and it will not be drawn
in and the joint is weak.

Brazed joints are the default in commercial work because they are stronger than
flares, permanently leak-tight, and have no seat to damage. Their drawback is
that they cannot be taken apart, and making them requires heat, a nitrogen purge
through the tube, and a licence-level skill set (covered in the brazing module).

Swaging, from the previous lesson, lets you make a tube-to-tube brazed joint
with no fitting at all — cheaper, and one less potential leak path.

## Compression fittings

A compression fitting seals by squeezing a soft brass or copper ring (an olive
or ferrule) between the tapered nut and the tube. They are quick, need no heat,
and require no flaring tool.

They are also, in refrigeration, a **limited-use fitting**. Refrigerant molecules
are small and the pressures cycle constantly, so an olive joint is more prone to
seeping over time than a flare or braze. Their normal place is:

- on service and gauge equipment
- on nitrogen and regulator plumbing
- on some water and drain connections
- occasionally on temporary or test rigs

They should not be used to make up permanent refrigerant joints on installed
plant where a brazed or flared joint is possible, and never buried in a wall or
anywhere inaccessible. If you do use one: cut square, deburr, do not re-use an
olive, and do not over-tighten — crushing the olive distorts it and creates the
leak you were trying to avoid.

## Schrader valves and access ports

The **Schrader valve** is the small spring-loaded core sitting inside a threaded
access port, exactly like a car tyre valve. Pushing the pin opens it; releasing
it lets the spring and system pressure close it again. It is what allows a
gauge hose to be connected and disconnected under pressure.

Key points a technician has to know:

- A Schrader is a **sealing device of last resort, not the primary seal**. The
  cap on top of the port is the primary seal, and it usually contains a gasket
  or O-ring. Leaving caps off is a slow, guaranteed leak. Always refit them.
- Your charging hoses need a **depressor pin** in the end fitting to open the
  core. A hose without one reads nothing.
- Schrader cores **restrict flow**. That matters for evacuation: pulling a deep
  vacuum through a Schrader takes far longer than through an open valve. Use a
  **core removal tool** — a valve that lets you unscrew the core while the port
  stays sealed — for evacuation and recovery on anything larger than a small
  split system.
- Cores are consumable. They leak when the rubber ages, when they are
  cross-threaded, or when a hose has been screwed on crooked. Replacing a core
  is a two-minute job and cures a surprising number of "mystery" slow leaks.
- The core is brass with a soft seat; do not over-tighten it, and do not
  tighten a hose onto the port with a spanner. Finger tight plus a nip is right.

Other means of access you will meet:

| Access device | Use | Caution |
|---|---|---|
| Schrader access port with cap | Standard on split systems, packaged plant, vehicles | Refit the cap; check the core when chasing slow leaks |
| Compressor service valve (front-seat / back-seat) | Full-bore access on commercial compressors | Back-seat the valve before removing gauges |
| Line tap / piercing (bullet) valve | Emergency access to a sealed system with no port | Temporary only. It clamps on and pierces the tube. It relies on a rubber gasket and *will* leak eventually — braze in a proper port before you leave |
| Process tube (stub) on a hermetic unit | Factory charging point on domestic appliances | Access is made with a piercing valve or by brazing on an adaptor, then pinched off and sealed |

>! A piercing valve is not a permanent repair. Australian practice is to fit a
>! proper brazed access port if the system needs ongoing service. Leaving a
>! bullet valve on a system is the single most common cause of the system being
>! found flat on the next visit.

## Pinch-off tools

A **pinch-off tool** is a heavy clamp with rounded jaws that squeezes a copper
tube flat and closed. It is used on process tubes and small-bore lines when you
need to seal a system without the refrigerant escaping — for example after
charging a domestic hermetic unit through its process tube.

How it is used:

1. Choose a straight, clean section of soft copper of the right diameter for the
   tool.
2. Close the tool progressively until the tube is flattened and cold-welded
   shut. The rounded jaw profile matters: it folds the tube over rather than
   cutting it, so the copper is not sheared.
3. Cut the tube off beyond the pinch **while the tool is still in place**.
4. **Braze the pinched end closed.** The pinch is a temporary seal only — a
   cold-welded pinch will eventually creep and leak. The braze is the permanent
   seal, and the tool stays clamped as a heat sink and gas dam while you do it.
5. Leak test the sealed stub before you call the job finished.

Pinch-off pliers are also useful mid-job: pinching a soft tube before cutting
keeps chips and moisture out of the section you are not using yet, as covered
in the cutting lesson.

>! Never pinch off hard-drawn copper or a tube that has been bent or
>! work-hardened at that point — it will split. And never pinch off a line
>! carrying full high-side pressure without recovering first; you are
>! deliberately weakening a pressurised tube.

## What to remember

- Brazed fittings mirror the flare fitting range but rely on capillary action
  and a close sliding fit.
- Compression fittings are for service gear and temporary work, not permanent
  refrigerant joints.
- Schrader caps are the primary seal; hoses need a depressor pin; cores
  restrict evacuation, so pull them with a core tool.
- Piercing valves are temporary access only.
- A pinch-off seals long enough to braze — the braze is the real seal.
`,
          quiz: [
            {
              q: "A technician evacuates a 14 kW split system through the Schrader port with the core left in. What is the main consequence?",
              options: [
                "The vacuum pump oil will contaminate the system",
                "The restriction through the core greatly extends the time needed to reach a deep vacuum",
                "The core will be blown out of the port by the vacuum",
                "The compound gauge will read a false positive pressure",
              ],
              answer: 1,
              explain: "A Schrader core is a small, spring-loaded restriction. Under deep vacuum there is almost no pressure difference to push gas through it, so evacuation takes far longer and may never reach target. A core removal tool lets you take the core out while the port stays sealed.",
            },
            {
              q: "What is the primary seal on a Schrader access port?",
              options: [
                "The valve core itself",
                "The screwed cap, which normally carries a gasket or O-ring",
                "The charging hose left connected",
                "The depressor pin in the hose fitting",
              ],
              answer: 1,
              explain: "The core is a convenience that lets you connect under pressure, but it is a secondary seal that ages and weeps. The cap with its gasket is the primary seal — which is why a missing cap is a genuine, slow refrigerant loss and not just untidy.",
            },
            {
              q: "After pinching off the process tube of a domestic hermetic system, what must be done next?",
              options: [
                "Nothing — a correct pinch-off is a permanent seal",
                "Remove the tool immediately so the copper can spring back",
                "Cut the tube beyond the pinch and braze the end closed while the tool is still clamped",
                "Fit a Schrader core into the pinched end",
              ],
              answer: 2,
              explain: "A cold-welded pinch holds pressure only long enough to work on. Left alone it creeps and leaks. The tube is cut off beyond the pinch and the end brazed shut with the tool still in place acting as a heat sink and gas dam, then leak tested.",
            },
            {
              q: "Why are compression (olive) fittings not used for permanent joints on installed refrigerant pipework?",
              options: [
                "They cannot be made in copper or brass",
                "They are more likely to seep over time under cycling refrigerant pressures than a flared or brazed joint",
                "They require a nitrogen purge to assemble",
                "They are only available in imperial sizes",
              ],
              answer: 1,
              explain: "The olive is a mechanical squeeze seal that relaxes with pressure and temperature cycling, and refrigerant molecules find the resulting path. They are fine on service gear, nitrogen lines and temporary rigs, but a permanent refrigerant joint should be brazed or flared.",
            },
          ],
        },
        /* ============================================================== */
        {
          id: "cylinders-and-charging-equipment",
          title: "Refrigerant cylinders and charging equipment",
          minutes: 11,
          simple: "Refrigerant travels to the job in steel bottles that are basically liquid under pressure, and a hot van turns them into something dangerous. Read the label rather than trusting the colour, never fill one past three-quarters, and put the charge in by weight on a set of scales rather than by guesswork.",
          refs: REFS,
          content: `
Commercial service work means carrying a range of refrigerants — enough of each
that you can finish the day's jobs. Running out halfway through a charge is not
just embarrassing; it means the customer's plant stays down and someone pays for
a second visit. Cylinder size is chosen to suit the work: a 10 kg or 12 kg
cylinder for general service, larger for installation work, small disposables
for one-off top-ups where they are still legal.

## Knowing what is in the cylinder

Every cylinder must be clearly marked with the refrigerant it contains.
**AS 4484** gives guidance on colour identification, and there is a rough
convention in the trade — but with the number of refrigerants and blends now in
use, colour is only a hint. **Always read the label.** A repainted or
re-purposed cylinder with the wrong colour is a real risk, and charging R404A
into an R134a system, or a hydrocarbon into a system not rated for it, is a
serious and potentially explosive mistake.

Check three things before you connect anything:

1. The label — refrigerant designation, not just the colour.
2. The test date and general condition of the cylinder and its valve.
3. Whether the cylinder has a **dip tube**. Cylinders with a liquid/vapour valve
   pair, or with a dip tube, let you draw liquid without inverting.

**Zeotropic blends must be charged as liquid.** R410A, R404A, R407C and similar
blends are mixtures of components with different boiling points. Draw vapour off
the top of the cylinder and the more volatile component comes out first — the
mixture *fractionates*, so what goes into the system is not the blend on the
label and what stays in the cylinder is not either. Take liquid from the dip
tube (or invert the cylinder) and meter it in through the high side, or throttle
it into the suction side slowly so the compressor never sees liquid.

## Carrying and storing cylinders

>! Refrigerant cylinders have exploded in service vans and killed people. A
>! covered van in an Australian summer readily exceeds 50 degrees Celsius
>! inside, and a cylinder in direct sun can exceed 60 degrees Celsius. The
>! pressure inside rises with it, and a cylinder that is over-filled has no
>! vapour space left to absorb that expansion — so the liquid itself has to be
>! compressed, and the pressure climbs almost vertically.

The rules that follow from that:

- **Never fill a cylinder more than three-quarters full.** The vapour space is
  what keeps the pressure sane when the temperature rises.
- Carry cylinders in a **ventilated compartment or outside the driver's cab**,
  so a leak cannot asphyxiate the driver. Refrigerant vapour is heavier than
  air and collects in footwells.
- **Secure every cylinder** so it cannot roll, fall or be launched forward in a
  collision. Cylinders have caused severe injury and damage in crashes.
- Fit the **valve cap and any valve guard** whenever the cylinder is moved. The
  valve is the weak point; snapping one off turns the cylinder into a rocket.
- Keep cylinders upright unless you are deliberately drawing liquid, and keep
  them out of direct sun.
- Never heat a cylinder with a flame to raise its pressure. If it must be
  warmed, use warm water or a purpose-made cylinder heating blanket with a
  thermostat, and never take it above about 50 degrees Celsius.

Handling refrigerant at all requires an **ARCtick refrigerant handling licence**
in Australia, and deliberately venting refrigerant to atmosphere is an offence.
That single fact shapes every procedure in the rest of this module.

## Charging equipment

Accurate charging means measuring the charge, not guessing it. Two tools do the
job.

**Digital scales.** A flat platform the cylinder stands on, reading in grams,
with a tare function and often a solenoid-controlled charging valve on better
models. This is the standard method today. You weigh the cylinder, charge, and
watch the loss of weight — the reading tells you what has gone in, whether it
went in as liquid or vapour, and it works for every refrigerant.

**Graduated charging cylinder.** An older but still valid tool: a calibrated
glass or plastic sight column inside a metal guard, with scales for different
refrigerants. It is filled from the supply cylinder, then dispensed into the
system, reading the drop in the liquid level. Because liquid density changes
with temperature, the scales are read against the pressure shown on its own
gauge — the cylinder body is often jacketed or fitted with a heater to hold the
charge at a known condition.

### Worked example: charging by weight

A wall-hung split system has a nameplate charge of **1.85 kg of R410A**. The
system has been repaired, evacuated and is ready to charge.

- Cylinder plus contents on the scales at the start: **12.40 kg**
- Charge required: **1.85 kg**
- Target reading when the charge is in: 12.40 - 1.85 = **10.55 kg**

Charge liquid through the manifold into the high side with the system off until
the flow stops, then start the system and meter the rest into the suction line
as liquid, slowly, watching the scales. Stop at 10.55 kg. Then verify with
superheat and subcooling — the nameplate figure assumes standard pipe length,
and long line runs need the manufacturer's extra allowance per metre.

>! Never charge liquid into the suction service valve with the compressor
>! running and the valve wide open. Liquid entering a running compressor
>! hydraulically locks it and breaks valve plates. Meter it in, or charge vapour.

## What to remember

- Read the cylinder label; treat colour as a hint only.
- Three-quarters full is the maximum fill, always.
- Ventilated or external compartment, secured, capped, out of the sun.
- Blends are charged as liquid, or they fractionate.
- Weigh the charge; verify it with superheat and subcooling.
- No venting, and no work on refrigerant without an ARCtick licence.
`,
          quiz: [
            {
              q: "Why must a zeotropic blend such as R410A be charged into a system as a liquid?",
              options: [
                "Liquid charging is faster than vapour charging",
                "Drawing vapour lets the more volatile component leave first, so the composition of both the charge and the remaining cylinder contents changes",
                "The blend will not condense in the system if it is charged as vapour",
                "Vapour charging would overfill the cylinder",
              ],
              answer: 1,
              explain: "The components of a blend boil at different temperatures, so vapour drawn off the top is richer in the more volatile component. That is fractionation: the system gets the wrong mixture and so does whatever is left in the cylinder. Taking liquid keeps the composition correct.",
            },
            {
              q: "What is the maximum permissible fill for a refrigerant cylinder, and why does it matter?",
              options: [
                "Half full, so the cylinder is light enough to carry",
                "Three-quarters full, so a vapour space remains to absorb liquid expansion as the temperature rises",
                "Nine-tenths full, so the vapour space is only there to allow the valve to seat",
                "Completely full, provided the cylinder is kept below 50 degrees Celsius",
              ],
              answer: 1,
              explain: "Three-quarters is the limit. If liquid fills the cylinder there is no vapour space, so when the temperature rises the liquid has nowhere to expand and the pressure rises almost vertically. Van interiors regularly exceed 50 degrees Celsius, and cylinders in sun exceed 60.",
            },
            {
              q: "A cylinder painted the colour you associate with R134a is on the van, but the label says R404A. What do you do?",
              options: [
                "Use it as R134a — the colour code in AS 4484 is mandatory",
                "Treat it as R404A, because the label is the authority and colour is only a guide",
                "Vent a sample to atmosphere and smell it",
                "Weigh it to determine which refrigerant it is",
              ],
              answer: 1,
              explain: "AS 4484 gives colour identification guidance, but with so many refrigerants in use colour is unreliable — cylinders are repainted and re-purposed. The label governs. Venting a sample is both useless for identification and illegal.",
            },
            {
              q: "A system has a nameplate charge of 2.30 kg. The cylinder and contents weigh 14.05 kg on the scales before charging. What reading means the charge is complete?",
              options: [
                "16.35 kg",
                "11.75 kg",
                "2.30 kg",
                "12.30 kg",
              ],
              answer: 1,
              explain: "The cylinder loses exactly the mass that goes into the system: 14.05 - 2.30 = 11.75 kg. Adding the two would be reading the scales backwards. The nameplate figure still needs verifying with superheat and subcooling, and long line runs need the manufacturer's extra allowance.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "gauge-set-manifold-and-lines",
          title: "The service gauge set, manifold and lines",
          minutes: 14,
          simple: "The gauge set is the stethoscope of the trade: two pressure dials joined by a little valve block with three hoses. Because a refrigerant's pressure and its boiling temperature are locked together, a pressure reading is really a temperature reading — which is how you work out superheat without opening anything up.",
          refs: REFS,
          content: `
Nothing else in the kit tells you as much as the gauge set. It is also the item
most often abused: dropped, left uncapped, hoses full of old refrigerant and
moisture. Treat it as a precision instrument, because that is what it is — it
must be kept **clean, sealed and dry**, and the gauges must read true.

## The two gauges

| Gauge | Colour | Typical range | Reads |
|---|---|---|---|
| Compound (low side) | Blue | -100 kPa to +700 kPa | Suction pressure, and vacuum below atmospheric |
| High pressure (high side) | Red | 0 kPa to 2800 kPa | Discharge and liquid pressure |

The compound gauge is the one that reads both sides of atmospheric — that is
what "compound" means. It is why the same gauge can watch a system running and
then watch it being pulled into a vacuum.

Most gauges have a **65 mm dial** and connect with a **1/8 inch male pipe
thread**. Since most sets are imported, imperial threads remain the norm.

## Inside a gauge: the Bourdon tube

Every analogue refrigeration gauge works the same way. A **Bourdon tube** — a
flattened copper-alloy tube, sealed at one end and curved into an arc — is
soldered to the gauge's adaptor fitting at the other end. Raise the pressure
inside it and the flattened cross-section tries to become round, which makes the
curved tube try to **straighten**. That tiny movement of the sealed end is the
measurement.

The mechanism turns it into a needle sweep:

1. The moving end of the Bourdon tube pulls a **link**.
2. The link rotates a **gear sector**.
3. The sector meshes with a small **pointer shaft gear**, which turns the needle.
4. A hairspring, the **calibrating spring**, takes up backlash in the gearing
   and lets the gauge be zeroed.
5. A **restrictor** in the inlet damps out pressure pulsations so the needle
   does not shake itself to pieces on a reciprocating compressor.

All of it lives in a **case**, often liquid-filled on better gauges for extra
damping.

Some gauges include a **retarder**: an extra spring that comes into play above
the normal operating range so that the useful part of the scale can be spread
out. You can recognise these instantly — the graduations change spacing towards
the top of the positive scale.

### The 75 per cent rule, and R410A

A gauge should not be used continuously at more than **75 per cent of its
full-scale range**. Beyond that the Bourdon tube is being worked too hard, it
takes a permanent set, and the gauge quietly starts reading low.

**Worked example.** A standard high-side gauge reads 0 to 2800 kPa.

- Continuous working limit = 0.75 x 2800 = **2100 kPa**

Now consider R410A condensing at 50 degrees Celsius on a hot day: about
**3000 kPa gauge**. That is above the full-scale reading, let alone the 75 per
cent limit. This is exactly why R410A work needs its own gauge set, with a
high-side gauge running to about 5500 kPa and hoses rated to match. Putting a
standard set on R410A wrecks the gauge and can burst the hose.

## Pressure is temperature: the PT ring

Printed inside the pressure scale of a service gauge are one or more coloured
rings marked in degrees Celsius, one per refrigerant. They are not a separate
measurement — they are a pressure-temperature chart wrapped around the dial.
Wherever the needle sits, the inner ring reads off the **saturation temperature**
of that refrigerant at that pressure.

!FIG[gauge-pt-ring]

That only works while the refrigerant is saturated, that is, while liquid and
vapour are both present — inside the evaporator and inside the condenser. It
does not tell you the temperature of superheated vapour in the suction line or
subcooled liquid in the liquid line. Which is precisely what makes it useful:

### Worked example: superheat from a gauge and a thermometer

An R134a system is running. The compound gauge reads **190 kPa**. The
thermometer clamped to the suction line at the evaporator outlet reads
**7 degrees Celsius**.

- 190 kPa gauge is about 291 kPa absolute; the R134a ring shows a saturation
  temperature of about **0 degrees Celsius**.
- Superheat = suction line temperature - saturation temperature
- Superheat = 7 - 0 = **7 K**

Seven kelvin of superheat at the evaporator outlet is healthy for most
direct-expansion systems. Note the unit: a superheat is a temperature
*difference*, so it is written in kelvin, not degrees Celsius.

**Digital gauges and manifolds** do the same job electronically. You select the
refrigerant, and the display shows pressure, saturation temperature, and — with
clamp-on temperature probes — live superheat and subcooling. Many also read
vacuum in microns. No PT chart needed, no ring to misread.

!SIM[Read a manifold on a running system](tour=1)

## The manifold and the hoses

The manifold body carries the two gauges, two hand-wheel valves and three (or
four) ports:

- **Low side (blue)** port to the suction service valve or suction access port
- **High side (red)** port to the discharge or liquid access port
- **Centre (yellow)** general service port for the vacuum pump, refrigerant
  cylinder or recovery unit
- On four-port sets, a second utility port, often with a vacuum gauge

Both gauges read the system whenever their hoses are connected, regardless of
the hand wheels — the gauges tee off ahead of the valves. The hand wheels only
decide whether that side is connected through to the centre hose. Closed on
both, the manifold is just two gauges. Open the blue wheel and the suction side
talks to the centre hose; open the red and the high side does.

Flexible charging lines have largely replaced rigid copper. Keep them clean,
capped at both ends when stored, and with their seals in good condition. **Do
not overtighten the fittings.** Normal sealing pressure on a hose fitting can be
applied with the finger tips — experiment on your own set to learn the least
force that stops a leak, because every extra turn crushes the seal a little and
brings the day it starts weeping closer.

Use hoses with a **depressor pin** where the port has a Schrader core, and
prefer hoses with **ball valves at the machine end**, which let you shut the
hose off before you disconnect and keep its contents out of the atmosphere.

### Fitting and purging a gauge set — the procedure

1. Start with **both hand wheels closed** and all hoses capped. Check that both
   needles sit on zero with the set open to atmosphere; a gauge that will not
   zero is telling you something.
2. Remove the port caps on the system and check the Schrader cores are sound.
3. Connect the blue hose to the low side port and the red to the high side.
   Fingertip-plus-a-nip tight, no spanner.
4. Connect the yellow hose to the cylinder or vacuum pump and open the cylinder
   valve.
5. **Purge the air out of the hoses.** Air trapped in a hose is a
   non-condensable that you are about to push into the system. The
   environmentally correct method is to connect the vacuum pump to the centre
   hose and evacuate the manifold and all three hoses before charging. If you
   must purge with refrigerant, crack the hose at the *manifold* end for the
   briefest possible moment and re-nip it — the loss should be a puff, not a
   hiss.
6. Read, diagnose, charge or evacuate as required.
7. To disconnect: back-seat compressor service valves or shut the hose ball
   valves first, recover the hose contents rather than dumping them, then cap
   the ports and the hoses.

>! Venting refrigerant to atmosphere while purging is both an environmental
>! offence in Australia and a habit that will cost you a licence. Evacuate the
>! hoses with the pump; recover what is left in them at the end.

## Thermometers

Half of the readings above need a temperature as well as a pressure, so a
thermometer is part of the same kit. Liquid-in-glass, dial, air-sensing and
touch types are all used, but digital instruments dominate service work now
because they are quicker and more accurate; the only real drawback is cost,
which the time saved recovers quickly.

Check accuracy in an **ice-and-water bath**: a slurry of crushed ice and water,
stirred, sits at 0 degrees Celsius, and a serviceable thermometer should read
within **one degree** of that.

Infra-red thermometers are convenient but need care. They read the surface,
they average over a spot that grows with distance, and they are badly fooled by
shiny surfaces — which is what a bare copper suction line is. For superheat,
use a clamp-on or strapped probe with insulation over it, not an infra-red gun.

## On the job

- Gauges: clean, sealed, dry, and zeroed before you trust them.
- Never run a gauge above 75 per cent of full scale; R410A needs its own set.
- The inner ring is the refrigerant's saturation temperature, valid only where
  liquid and vapour coexist.
- Superheat = suction line temperature minus saturation temperature, in kelvin.
- Fingertip tension on hose fittings; ball valves and depressor pins earn their
  cost.
- Evacuate hoses rather than venting them.
`,
          quiz: [
            {
              q: "What physically moves the needle in an analogue refrigeration gauge?",
              options: [
                "A diaphragm pressing on a strain gauge",
                "A flattened, curved Bourdon tube that tries to straighten as internal pressure rises",
                "A bellows compressing a calibrated spring",
                "A column of mercury acting on a float",
              ],
              answer: 1,
              explain: "The Bourdon tube is a flattened copper-alloy tube, sealed at one end and curved. Pressure inside makes the flat section try to become round, which straightens the curve; a link and gear sector turn that movement into needle rotation. The calibrating spring only removes backlash.",
            },
            {
              q: "A standard high-side gauge is scaled 0 to 2800 kPa. What is its recommended maximum continuous working pressure, and what does that mean for R410A?",
              options: [
                "2800 kPa — R410A is fine on a standard set",
                "2100 kPa — R410A condensing at 50 degrees Celsius is around 3000 kPa, so a dedicated high-pressure set is needed",
                "1400 kPa — R410A must only be measured with a digital gauge",
                "2400 kPa — R410A is fine provided the hose is rated",
              ],
              answer: 1,
              explain: "Continuous use should stay at or below 75 per cent of full scale: 0.75 x 2800 = 2100 kPa. Above that the Bourdon tube takes a permanent set and the gauge reads low. R410A high-side pressures exceed even full scale on a hot day, so it needs a set rated to around 5500 kPa.",
            },
            {
              q: "An R134a system shows 190 kPa on the compound gauge, whose R134a ring gives about 0 degrees Celsius. The suction line at the evaporator outlet measures 7 degrees Celsius. What is the superheat?",
              options: [
                "0 K — the readings are the same refrigerant",
                "7 K",
                "190 K",
                "It cannot be calculated without the discharge pressure",
              ],
              answer: 1,
              explain: "Superheat is the suction line temperature minus the saturation temperature at that suction pressure: 7 - 0 = 7 K. It is a temperature difference, so the unit is kelvin. The high side is needed for subcooling, not superheat.",
            },
            {
              q: "Why is the pressure-temperature ring on the dial useless for the liquid line temperature?",
              options: [
                "The ring is calibrated only for suction pressures",
                "The ring gives the saturation temperature, which only applies where liquid and vapour coexist — subcooled liquid is colder than saturation",
                "Liquid lines are always at ambient temperature",
                "The high-side gauge has no inner ring",
              ],
              answer: 1,
              explain: "The ring is a pressure-temperature chart on a dial and only reports the saturation condition. Liquid leaving a condenser is subcooled — below saturation — so the ring reads the saturation point, and the difference between it and the measured liquid line temperature is exactly the subcooling.",
            },
            {
              q: "What is the environmentally and legally correct way to remove air from the manifold and hoses before charging?",
              options: [
                "Crack each hose at the system end and let refrigerant blow the air out",
                "Connect the vacuum pump to the centre hose and evacuate the manifold and hoses",
                "Blow the hoses out with the shop air compressor",
                "Leave the air in; it will be absorbed by the refrigerant oil",
              ],
              answer: 1,
              explain: "Evacuating the manifold and hoses removes the non-condensable air without releasing refrigerant, and venting is an offence in Australia. Shop air adds oil and moisture, and air left in the hoses becomes non-condensable gas in the system, raising head pressure.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "leak-testing-evacuation-recovery",
          title: "Leak testing, vacuum pumps and recovery units",
          minutes: 15,
          simple: "Three jobs that decide whether a repair lasts: proving the system is not leaking, sucking out every trace of air and water before charging, and pumping the old refrigerant into a bottle instead of the sky. Each has its own instrument, and each one is only as good as the technique behind it.",
          refs: REFS,
          content: `
Finding and repairing leaks takes up a large slice of a refrigeration
technician's working life, and evacuation and recovery bracket every repair
that opens a system. This lesson covers the three instruments that do that
work.

## Leak-testing instruments

Which method you use depends on the size of the leak and where it is. The usual
approach is two-stage: an instrument to find the general area, then bubbles to
pinpoint the exact spot.

| Method | How it works | Best at | Limits |
|---|---|---|---|
| Non-selective electronic | Measures ionisation or thermal conductivity — responds to any gas | General searching, cheap | False alarms from solvents, exhaust, cleaning agents |
| Selective electronic (infra-red) | Detects the refrigerant's own infra-red absorption | Fewer false alarms, stable | Costlier, needs sensor replacement |
| Halide torch | Refrigerant burning over red-hot copper turns the flame green-blue | Historic method for CFCs | Naked flame — obsolete and dangerous |
| Soap bubbles or leak fluid | Foam forms a growing bubble at the escape point | Pinpointing, factory testing | Needs positive pressure and access |
| Fluorescent (UV) dye | Dye added to the oil glows under ultraviolet light | Intermittent and inaccessible leaks | Slow, needs the system to run, some makers void warranty |
| Ultrasonic | Listens for the high-frequency hiss of gas through an orifice | Any gas, including a nitrogen holding charge; noisy plant rooms | Needs a decent pressure difference |

**Electronic detectors** are the everyday tool and are extremely sensitive —
good ones will find a loss of about **15 grams per year**. Their sensitivity is
also their weakness: with a big leak, or in air already contaminated with a
little refrigerant, the alarm sounds everywhere and you cannot pinpoint
anything. Ventilate the space, zero the instrument in clean air, then move the
probe slowly — around 25 mm per second — and search *underneath* joints, because
refrigerant vapour is heavier than air.

There is a detection problem worth understanding. Older detectors keyed on
**chlorine**. Modern HFCs contain no chlorine at all, only fluorine, and it
takes roughly **120 parts of fluorine to give the same response as one part of
chlorine**. That is why detector sensitivity had to improve enormously for
HFC-era work, and why an old detector may be useless on a modern system.

Be ready for one classic false positive: **polyurethane foam insulation** is
blown with a refrigerant gas, so a detector will always alarm around foam,
whether or not there is a leak.

The **halide torch** is worth knowing even though it is on the way out. A
colourless fuel such as propane-butane burns at a burner, and air is drawn in
through a flexible search hose. The flame heats a copper reaction ring red hot.
Refrigerant drawn up the hose decomposes over the hot copper and colours the
flame **green to green-blue**, more intensely with more refrigerant. It works
only if the copper ring is glowing red, the flame is shielded from wind, and you
are out of bright sunlight — outdoors, technicians used to build a cardboard
tent to see the colour.

>! Never use a halide torch on a system containing a hydrocarbon refrigerant
>! such as R290 or R600a — a naked flame near a flammable refrigerant is an
>! explosion. Halide torches also produce toxic decomposition products.
>! Electronic detection is the modern standard.

For **ammonia** plant the chemistry is different again: damp litmus paper
changes colour in ammonia vapour, and a burning sulphur stick gives off dense
white smoke where the leak is.

**Bubbles remain the champion for pinpointing.** Once an instrument has found
the general area, soap solution or proprietary leak fluid brushed over the joint
shows exactly which face is leaking. In factories, complete components — welded
compressors, condensers, evaporators — are pressurised and immersed in a water
tank, which is still the most reliable production test there is.

>! When leak testing, the pressure must be **positive — above atmospheric — but
>! never above the design limit of the weakest component**. Pressurise with dry
>! nitrogen through a regulator with a relief valve, never with oxygen (which
>! detonates with oil) and never with compressed air (which adds moisture). A
>! system under vacuum cannot be leak tested with a detector, because the leak
>! flows inwards.

## Vacuum pumps and micron gauges

Once the system is tight, everything that is not refrigerant has to come out:
air, which is a non-condensable that raises head pressure, and water, which
freezes at the expansion device and combines with refrigerant and oil to form
acids and sludge.

!SIM[See what leftover air does to head pressure](fault=nonCondensables)

Evacuation is not just sucking; it is **boiling the water off**. Lowering the
pressure lowers water's boiling point until the moisture in the system
evaporates and can be carried away. That is why a deep vacuum matters, and why
a warm system evacuates faster than a cold one.

A refrigeration vacuum pump is a **rotary vane pump**, and for service work it
should be **two-stage**: the first stage discharges into the second, so the
second stage never has to work against full atmospheric pressure. A serviceable
two-stage pump should reach about **50 microns**.

The units take some getting used to:

- 1 micron = one micrometre of mercury = about **0.1333 Pa** absolute
- **133 Pa absolute = 1 mm of mercury = 1000 microns**
- So 50 microns = 50 x 0.1333 = **6.66 Pa absolute**
- Atmospheric pressure is about 101.3 kPa = roughly **760 000 microns**

**Worked example.** Your micron gauge reads 500 microns. In absolute pressure
that is 500 x 0.1333 = **66.7 Pa absolute** — about 0.0007 of an atmosphere. A
typical target before charging is 500 microns or better, held.

Compare that with what the system's own compressor can do: roughly
**6.6 to 10.6 kPa absolute, that is 50 000 to 80 000 microns**. A compressor is
a thousand times worse than a proper vacuum pump, and running one on a deep
vacuum can flash over the motor windings. Never use the system compressor to
evacuate.

Two practical points about the pump itself:

- **Change the oil before each pump-down.** Vacuum pump oil absorbs the water
  it removes; water raises the oil level and turns it milky white and foamy. Left
  in, it forms sludge and the pump will never reach a deep vacuum again. Dirty
  oil is the single most common reason a pump "will not pull down".
- Check the pump periodically against an accurate vacuum gauge, with the pump
  blanked off, to see what it can actually achieve.

You cannot measure any of this on a compound gauge. Its whole vacuum range,
from 0 to -100 kPa, is squeezed into a small arc; the needle sits hard against
the stop anywhere below about 25 000 microns. Use an **electronic (thermistor)
micron gauge**, or the classical mercury manometer, connected at the point
furthest from the pump.

### The standing vacuum test

Evacuate through both service ports with the Schrader cores removed and short,
large-bore hoses. When the micron gauge reaches target, **valve the pump off and
watch the gauge**. What happens next diagnoses the system:

!FIG[vacuum-decay]

- **Level and steady** — the system is dry and tight. Charge it.
- **Rises, then levels out at a higher reading** — the pressure has climbed to
  the saturation point of water still in the system. There is moisture left.
  Keep pumping, or break the vacuum with dry nitrogen and evacuate again.
- **Keeps climbing without levelling** — atmosphere is getting in. You have a
  leak, and no amount of extra pumping will fix it.

For a system that has been open to atmosphere or has burnt out, use **triple
evacuation**: pull down, break the vacuum with dry nitrogen, repeat, and hold
the vacuum on the third pull-down. Each nitrogen break sweeps out moisture that
the vacuum alone would take hours to remove.

## Recovery units

Refrigerant must never be vented. A **recovery unit** is a small oil-less
compressor with its own condenser that pumps refrigerant out of a system and
into an approved recovery cylinder.

!FIG[recovery-hookup]

The essentials:

- **Vapour recovery** draws vapour from the system, condenses it, and pushes
  liquid into the cylinder. Simple, and slow on large charges.
- **Liquid or push-pull recovery** is used on large systems: the machine's
  discharge pushes vapour into the top of the system while liquid is drawn from
  the bottom straight into the cylinder, moving many kilograms quickly. Finish
  with a vapour pull to clear the remainder.
- The cylinder must be an **approved recovery cylinder**, in test date,
  evacuated before use, and **dedicated to one refrigerant**. Never mix
  refrigerants in a recovery cylinder — the contents become unidentifiable and
  can only be destroyed, and you pay for that.
- **Fill to a maximum of 80 per cent by weight**, and it is the **scales** that
  say when to stop, not the machine's float switch. Weigh the cylinder before
  you start, know its tare, and watch the reading.
- Recovery runs faster into a cool cylinder, because the pressure it has to push
  against is lower. Standing the cylinder in a tub of cool water genuinely
  speeds the job.
- **Purge the machine** after use, following its instructions, so the next
  refrigerant is not contaminated by the last one, and keep its filter and oil
  serviced.

>! Recovered refrigerant that is mixed, badly contaminated, or of unknown
>! composition must be sent for destruction or reclaim, not reused. Handling
>! any of this requires an ARCtick licence, and the Refrigerant Handling Code of
>! Practice governs the whole procedure.

## What to remember

- Instrument to find the area, bubbles to pinpoint the leak.
- Test under positive pressure with dry nitrogen, never above the design limit,
  never with oxygen or shop air.
- Foam insulation always sets off an electronic detector.
- 50 microns = 6.66 Pa absolute; 1000 microns = 133 Pa = 1 mm Hg.
- Change vacuum pump oil before each pump-down; use a micron gauge, not a
  compound gauge.
- Standing vacuum: steady means dry and tight, a plateau means moisture, a
  steady climb means a leak.
- Recover to an approved dedicated cylinder, 80 per cent maximum by weight, on
  scales.
`,
          quiz: [
            {
              q: "During a standing vacuum test the micron gauge rises quickly for a few minutes, then levels off and holds at a higher reading. What does this indicate?",
              options: [
                "A leak is admitting atmosphere",
                "Moisture remaining in the system has boiled off and reached its saturation pressure",
                "The micron gauge sensor is contaminated with oil",
                "The system is dry and tight and is ready to charge",
              ],
              answer: 1,
              explain: "A rise that plateaus is the signature of water: the pressure climbs to the saturation pressure of the remaining moisture and then stops. A genuine leak gives a rise that never levels off, because atmosphere keeps entering. Keep pumping, or use a nitrogen break and re-evacuate.",
            },
            {
              q: "Why can a system's own compressor not be used to evacuate it?",
              options: [
                "It can only reach around 6.6 to 10.6 kPa absolute (50 000 to 80 000 microns), and deep vacuum can flash over its windings",
                "It would fill the system with compressor oil",
                "It would pull the vacuum too quickly and freeze the moisture solid",
                "Its discharge valve cannot open below atmospheric pressure",
              ],
              answer: 0,
              explain: "A compressor is roughly a thousand times worse than a two-stage vacuum pump, which reaches about 50 microns (6.66 Pa absolute). It also cannot dehydrate the system, and running a motor-compressor under deep vacuum risks arcing across the terminals or windings.",
            },
            {
              q: "An electronic leak detector alarms constantly all around a foam-insulated evaporator housing. What is the most likely explanation?",
              options: [
                "The evaporator has a large leak somewhere in the coil",
                "The detector sensor needs replacing",
                "Polyurethane foam is blown with a refrigerant gas, so it always triggers a detector",
                "The refrigerant charge has fractionated",
              ],
              answer: 2,
              explain: "Foam insulation contains refrigerant blowing agent, which sets off any halogen detector regardless of system condition. Move away from the foam, ventilate, re-zero and search joints — and confirm any suspected leak with bubbles before cutting anything open.",
            },
            {
              q: "What decides when a recovery cylinder is full?",
              options: [
                "The recovery machine's automatic float switch",
                "The pressure shown on the recovery machine's gauge",
                "The scales — filling stops at 80 per cent of the cylinder's rated capacity by weight",
                "The sight glass on the recovery unit going clear",
              ],
              answer: 2,
              explain: "Weight is the only reliable measure, and the limit is 80 per cent by weight so a vapour space remains for expansion. Float switches are a backup that can stick; pressure tells you about temperature, not contents. Weigh the cylinder before you start and know its tare.",
            },
            {
              q: "Why must leak testing be done with the system at positive pressure rather than under vacuum?",
              options: [
                "Because a detector cannot operate in low ambient pressure",
                "Because under vacuum the leak flows inwards, so no refrigerant escapes for the detector or bubbles to find",
                "Because vacuum makes the copper contract and close the leak",
                "Because moisture in the system would be drawn to the leak site",
              ],
              answer: 1,
              explain: "Detection depends on something escaping. Under vacuum the flow direction reverses and air is drawn in, so nothing reaches the probe or forms a bubble. The pressure must be positive, but must never exceed the design limit of the weakest component in the circuit.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
