/* =========================================================================
   Course content, module 209 — Installation and maintenance.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 9 — Installation and
   maintenance.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Ch 9, installation and maintenance",
  ];

  const REFS_ELEC = REFS.concat([
    "AS/NZS 3000 Wiring Rules — circuit capacity, protection and safe isolation of equipment",
    "Australian Refrigeration Council (ARC) — refrigerant handling and split-system installation licensing",
  ]);

  const REFS_WATER = REFS.concat([
    "AS/NZS 3666 Air-handling and water systems of buildings: microbial control — Parts 1, 2 and 3",
  ]);

  const REFS_DRIVE = REFS.concat([
    "AS 2784 Endless wedge belt and endless V-belt drives — belt selection, tensioning and alignment",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R2.9 — Installation and maintenance
     ====================================================================== */
  {
    id: "v2-installation",
    stream: "v2",
    title: "R2.9 · Installation and maintenance",
    blurb: "How plant is sited, piped, mounted, fixed and then kept alive: installation practice for coolrooms and air-conditioners, planned maintenance, cooling-water hygiene and compressor drives.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "site-selection",
        title: "Choosing and preparing the installation site",
        minutes: 12,
        simple: "A fridge can only take heat out of a room if it can dump that heat somewhere else outside. So the single biggest decision on an install is where the outdoor half of the machine sits. Think of a runner in a sealed cupboard: no matter how fit they are, they overheat, because the heat they make has nowhere to go. Give the condenser clear, cool, moving air and half your future service calls disappear.",
        refs: REFS,
        content: `
Design and equipment selection happen on paper. **Installation is where the
paper meets the building**, and it is the stage at which most avoidable
failures are created. A plant that was correctly sized and correctly piped on
the drawing will still run badly, or fail early, if the condensing unit ends up
in a hot corner with no airflow, or bolted to a hollow wall that turns the
whole house into a loudspeaker. The client suffers, the warranty argument
starts, and the company loses goodwill it took years to build.

Jobs range from plug-in packaged equipment that anybody can position sensibly,
to large field-assembled plant that needs a thorough understanding of the whole
system. The thinking below applies to all of them, scaled to size.

## Before you touch the building

**Construction sites.** You are a visitor on someone else's job. Obey the site
rules, carry the site inductions and safety gear your employer is required to
provide, and report to the site supervisor before starting — plans change, and
the change may be to your work. Find out which areas you are allowed to work
in, because other trades already in progress can block your access.

Never drill or core a penetration until you have checked what is behind the
wall or slab: existing cables, hydraulic services, gas lines, structural
reinforcement and other trades' pipework all live in the places we want to put
holes. Secure your tools and gas equipment; do not leave gear where it can be
damaged, stolen or fall on someone.

Walk the job with the plans and physically confirm that the marked equipment
positions and penetrations are workable, that you have condensate drainage
available and that electrical supply will be there when you need it. Access
changes fast on a construction site: the plant deck that is wide open today may
be behind a curtain wall next week.

**Occupied premises.** Here you are balancing two forces that pull against each
other — the customer wants their business to keep running, and your employer
wants the job done quickly and profitably. Warn people before you make dust,
noise or smells, protect stock and floor coverings, and clean up as you go. A
few minutes of courtesy is cheap advertising.

## The site-selection checklist

When the instruction is nothing more detailed than *the cabinet goes inside and
the condensing unit goes in the best spot outside*, work through these nine
questions before you commit to a position:

1. How will heat actually get away from the condenser?
2. Is the compressor and condenser protected from weather?
3. What will the unit be mounted on?
4. Where will compressor, motor and fan noise go?
5. How far is it from the evaporator?
6. Can pipework realistically be run between the two?
7. How far is it to the switchboard or sub-board?
8. Is there a drain for condensate or defrost water?
9. Can a technician physically get to it to service it?

## Getting the heat away from air-cooled equipment

A system can only absorb heat at the evaporator if it can reject heat at the
condenser. So the condenser site must satisfy all of the following:

- **No direct sun during the hottest part of the day.** Sun on the coil raises
  condensing temperature exactly when the load is highest.
- **No air recirculation with prevailing winds.** Discharge air must be free to
  leave, preferably downwind. Be very wary of squeezing a unit into a gap
  between two walls less than **2 m** apart — the hot air simply comes back
  around.
- **Clearance.** At least **100 mm** at the rear and at both sides. A housing
  must offer at least as much free air area at the back as at the front, and any
  louvre or air slot narrower than about **20 mm** starts to choke the airflow.
- **Plant rooms** must either force their air out through the condenser or have
  a separate path to take the hot air off the top of the room.

Recirculation is the classic hidden fault: nothing looks wrong, but head
pressure sits high all summer, capacity falls and the compressor runs hot.

!SIM[See what a starved, hot condenser does on the gauges](fault=dirtyCondenser)

## Weather protection and site cleanliness

Protect the coil from leaves and rubbish that will blanket it, but treat
**protecting the electrical components from water as the priority**. Rain is
only part of it — think about water pooling in the base of the housing,
splashing up off a slab, or tracking into the enclosure along tubing, conduits
or the frame. Drip loops and correctly sealed penetrations cost nothing at
installation.

Manufacturers spend real money keeping moisture, air and dirt out of coils and
condensing units through cleaning, dehydration and evacuation before the unit
is capped and shipped. All of that is wasted if caps are pulled off on site and
left off overnight. Keep components sealed until the moment you braze.

## Mounting the condensing unit

- The base must be **level**. On some compressors this is what makes the
  lubrication system work; on others it stops the frame walking across the slab
  as it runs.
- Where noise or vibration matter, bolt the unit down to a concrete plinth or a
  solid steel frame rather than letting it sit loose.
- Rubber-in-shear mounts or steel springs between the frame and the base solve
  most stubborn vibration problems; proper isolators are stock items at the
  wholesaler.

## Noise: the complaint that costs money

Noisy condensing units in residential areas can breach local government
by-laws, and some jobs have needed expensive rework — often a solid masonry
barrier, which then has to be built with the unit's ventilation needs in mind.
It is far cheaper to choose a quiet position than to fix a complaint.

Noise comes from two places:

| Source | What it is | Fix |
|---|---|---|
| Mechanical | Physical movement of the machine and its parts | Solid level base, correct isolators, tight fasteners |
| Vapour pulsation | Each discharge stroke of a reciprocating compressor sends a pressure pulse down the discharge line | Discharge muffler, oil separator acting as an attenuator |

A discharge muffler does the same job as a car muffler: it absorbs each pulse,
drops vapour velocity and turns a pulsing flow into a steady one. Long
discharge lines to remote condensers are the worst offenders. An oil separator
also damps pulsation, which is a useful second argument for fitting one when
the cost is being questioned.

## On the job

- Stand where the discharge air will go, and ask what it will hit.
- Measure the clearances before you set the feet, not after.
- Photograph wall cavities before you core them.
- Assume every complaint about noise will come from the neighbour, not the
  client.
- If the only available position is a bad one, say so in writing before you
  install.
`,
        quiz: [
          {
            q: "An outdoor condensing unit is installed in a 1.5 m wide side passage between two brick walls. What is the most likely consequence?",
            options: [
              "Low suction pressure from restricted evaporator airflow",
              "Recirculation of discharge air, raising condensing temperature and head pressure",
              "Excess subcooling in the liquid line",
              "Compressor short-cycling on the low-pressure control",
            ],
            answer: 1,
            explain: "Discharge air cannot escape a narrow passage, so the fan re-ingests its own hot air. Condensing temperature climbs, capacity falls and the compressor runs hot. Suction-side symptoms are secondary — the primary fault is on the heat-rejection side, which is why the chapter warns against gaps under about 2 m.",
          },
          {
            q: "Why is at least 100 mm clearance required at the back and sides of an air-cooled condensing unit?",
            options: [
              "To leave room for the electrical conduit",
              "To meet noise by-laws in residential areas",
              "So the fan can draw its full air quantity without the housing choking the inlet",
              "To allow the refrigerant charge to be adjusted",
            ],
            answer: 2,
            explain: "The clearance is an airflow requirement: the free air area behind the coil must be at least equal to that at the discharge, or the fan is throttled. Conduit space and noise are real issues but they are not what sets the 100 mm figure.",
          },
          {
            q: "A remote air-cooled condenser 30 m from a reciprocating compressor produces an audible thumping in the discharge line. The best remedy is to:",
            options: [
              "Fit a discharge muffler, and consider an oil separator which also attenuates pulses",
              "Increase the refrigerant charge to damp the pulse",
              "Change the compressor mounts to hard rubber",
              "Reduce the discharge line size to raise velocity",
            ],
            answer: 0,
            explain: "The noise is vapour pulsation from each discharge stroke, not mechanical vibration, so mounts will not cure it. A muffler absorbs the pulses and steadies the flow; an oil separator does much the same and earns its cost twice. Reducing line size raises pressure drop and makes matters worse.",
          },
          {
            q: "On a construction site, before coring a 100 mm penetration through a block wall you should first:",
            options: [
              "Notify the client's insurer",
              "Check with the site supervisor and confirm nothing — cables, hydraulics, structure — is behind the wall",
              "Pressure-test the pipework",
              "Wait until all other trades have finished on site",
            ],
            answer: 1,
            explain: "Plans change and services get installed ahead of you. Reporting to the supervisor and physically confirming what is behind the wall prevents cutting a live cable or a structural member. Waiting for every other trade to finish is not practical — access usually gets worse, not better.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "tubing-layout-support",
        title: "Refrigerant tubing: location, layout and support",
        minutes: 13,
        simple: "Refrigerant pipe is not garden hose. It has to be short, clean, sloped the right way so oil drains home, kept out of the sun, and held up often enough that it never sags or shakes itself apart. Think of it like guttering: the fall decides whether things drain away or sit and cause trouble, and the brackets decide whether it is still up there in ten years.",
        refs: REFS,
        content: `
Line sizing is a design calculation, but line **routing and support** are
installation skills, and a badly routed line will spoil a correctly sized one.
Suction line size depends on suction pressure, equivalent length, oil return and
the refrigerant in use — and equivalent length is where installers change the
answer without realising. Every bend counts as at least one metre of extra
straight tube.

Two systems, both with the evaporator 20 m from the compressor: the one with
eight bends has roughly 28 m of equivalent length, the one with four bends
about 24 m. Squeeze the same eight bends into a 15 m separation and you get
about 23 m. Extra bends can force you up a tube size — or, if you do not go up
a size, cost you capacity.

## Layout rules

Start with **dry, clean, internally descaled tube**. Any sign of powder, green
corrosion or internal scale means the tube is scrap, not a bargain.

- Keep lines **as short and direct as practical**.
- Route so components remain accessible and so pipe does not foul doors,
  windows or hatches.
- Avoid positions where copper can be knocked, stepped on or hit by a forklift.
  If exposure is unavoidable, sleeve or box the tube.
- Fix at regular intervals — roughly **1 m** for annealed or small-diameter
  tube, wider for hard-drawn. Insert a barrier where galvanised clamps meet
  copper, or you will get chafing and dissimilar-metal corrosion.
- Never run tubing where condensation can drip onto electrical equipment.
- Keep tube away from external heat: furnace rooms, flues, roof spaces and
  direct sun. Insulate with closed-cell elastomeric where needed, and where
  insulation sees sunlight it must be UV-resistant or clad. **Excessive suction
  superheat is not a small loss — a hot, uninsulated suction line can cost up to
  50 per cent of capacity in summer.**
- Pitch horizontal suction lines toward the compressor at **at least 10 mm in
  every 3 m** (about 1 in 300).
- Stop liquid draining into the compressor on the off cycle: a U-bend or trap
  just before the compressor keeps liquid out of the head (from the discharge
  line) and out of the crankcase (from a suction riser).
- Sleeve tubing wherever it passes through a floor or wall — PVC conduit is
  adequate — and seal the sleeve ends so the tube cannot chafe.
- Make it look like a tradesman did it. Vertical runs plumbed with a level or
  plumb-bob, horizontal runs following the building lines (allowing for the
  fall), machine-formed bends or fittings rather than kinked tube, and saddles
  close enough that nothing sags.

## Why support matters

Good support is not tidiness. A properly supported system gives you:

- no sagging and no fatigue cracking at fittings
- predictable oil movement, because the designed fall is maintained
- vibration that goes nowhere
- longer service life for the pipe and its insulation
- less risk of damage from liquid hammer.

The support system has to do three separate jobs: carry the **deadweight**
(pipe plus insulation plus the mass of refrigerant or water inside it), absorb
**expansion and contraction**, and resist **vibration**. Common hardware
includes rod-type clevis hangers, double-bolt pipe clamps, steel-band hangers,
U-bolts, long clips, saddles, adjustable band hangers, swivel ring hangers,
variable spring hangers and base supports.

## Support spacing

| Pipe | Size | Typical support spacing |
|---|---|---|
| Steel | 25 mm | about 2 m |
| Steel | 100 mm | about 4 m |
| Copper | 16 mm | about 2 m |
| Copper | 150 mm | about 4 m |

Anchor supports to something permanent — steel or concrete structure, not
sheeting or a stud you hope is there. Beam clamps are available for taper
flange steel. Where a pipe sits in a roller hanger, fit a metal shield so the
roller cannot chew through the insulation.

## Horizontal runs and thermal movement

Short runs — say **6 m or less** — barely move. Over a normal temperature
swing, a 6 m copper line grows a little over **3 mm** and a steel line a little
under 3 mm. A plain rod hanger or a perforated metal strap has enough give to
absorb that, and one 90-degree bend in the run absorbs it entirely. That is not
an invitation to add bends: every extra bend adds pressure drop.

Long runs — **15 m and above** — can move close to **25 mm**. Now you need
spring hangers to keep the load constant and roller hangers so the pipe can
slide. On very long runs, build in the movement with an expansion loop, a pipe
bend or a swivel joint. A 30 m copper line tied between two vertical risers
must be given loops to swallow its 25 mm, otherwise it will push the risers out
of line and load every flange in between.

## Vertical runs

A cold vertical line shares its weight between all its supports. When it warms
and expands, the **lowest** support ends up carrying most of the weight, and
that load is transmitted straight into the equipment flange at the bottom
unless a base support takes it. Two rules follow:

- Fit a base support under a long vertical riser.
- **Never hang horizontal pipe off a vertical line**, and always support the
  horizontal branch properly where it leaves the riser.

## Vibration isolation

Vibration is rapid shaking of a machine — a running reciprocating compressor
that you can see, feel and hear. Rotating gear contributes too, through bent
shafts and out-of-balance fan or pump impellers.

Left alone, vibration loosens bolts and clamps, work-hardens and cracks
refrigerant lines, wrecks sight glasses and shakes delicate controls and valves
apart. Any one of those is a breakdown call.

Isolation means putting the machine on resilient mounts — steel springs, rubber
mounts, or spring-and-rubber combinations — so vibrational energy is not handed
to the building. Pipe connected to an isolated machine needs a flexible
connector or a soft loop, otherwise the pipe becomes the path the vibration
takes.

> The type and degree of isolation should come from the job specification. If
> there is no specification, ring the manufacturer's representative. Fitting the
> right isolator during installation costs an hour; returning to fix a
> complaint costs a day and your reputation.

## What to remember

- Bends are not free: each one is worth about a metre of pipe.
- Slope suction lines home at 10 mm per 3 m minimum.
- Insulate the suction line properly and protect the insulation from UV.
- Support copper at roughly 2 m for small sizes, up to 4 m for large.
- Design for movement on any run over about 15 m.
`,
        quiz: [
          {
            q: "An installer routes a 20 m suction line with eight bends instead of the four shown on the drawing. What has changed?",
            options: [
              "Nothing — bends have no effect on line sizing",
              "The equivalent length has grown by roughly 4 m, which may require the next tube size up",
              "The refrigerant charge must be halved",
              "The line now needs no fall toward the compressor",
            ],
            answer: 1,
            explain: "Each bend is counted as at least one metre of equivalent straight length, so four extra bends add about 4 m. That extra pressure drop either has to be absorbed by a larger tube or paid for in lost capacity and poorer oil return.",
          },
          {
            q: "A horizontal suction line 12 m long must fall toward the compressor by at least:",
            options: [
              "10 mm in total",
              "40 mm (10 mm per 3 m)",
              "120 mm (10 mm per metre)",
              "No fall is needed if the line is insulated",
            ],
            answer: 1,
            explain: "The rule is 10 mm in every 3 m, so 12 m needs about 40 mm of fall. The fall is what keeps oil moving back to the compressor; insulation deals with heat gain, which is a different problem entirely.",
          },
          {
            q: "Why are spring and roller hangers specified on a 20 m horizontal refrigerant line rather than plain rod hangers?",
            options: [
              "They are cheaper than rod hangers",
              "Long runs can move close to 25 mm with temperature, so the supports must hold the load while allowing the pipe to slide",
              "They reduce the refrigerant pressure drop",
              "They are required to earth the pipework",
            ],
            answer: 1,
            explain: "Thermal movement on runs of 15 m or more approaches 25 mm. Spring hangers keep the supporting force constant as the pipe rises and falls, and rollers let it move along its axis. Rigid hangers would simply transfer that strain into fittings and equipment flanges.",
          },
          {
            q: "An uninsulated suction line runs 8 m through a roof space that reaches 60 degrees C. The most serious result is:",
            options: [
              "The liquid line will flash",
              "Large suction superheat, with capacity losses of up to about 50 per cent in summer and a hotter compressor",
              "The oil will thicken and stop circulating",
              "The low-pressure control will trip on high pressure",
            ],
            answer: 1,
            explain: "Superheating the returning vapour lowers its density, so the compressor pumps less mass per revolution and loses capacity — the chapter puts the summer loss as high as 50 per cent — and the hot vapour also cools the motor windings of a hermetic less effectively. Liquid-line flashing is a separate fault caused by heat gain or pressure drop on the liquid side.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "commercial-evaporators",
        title: "Installing commercial evaporators and their drains",
        minutes: 11,
        simple: "Hanging a coolroom coil is not just about bolting it up. It has to blow air over the goods without blasting them, its weight must go into the walls rather than sagging the roof panels, and the melted frost has to get out of the room before it freezes solid again. A drain that freezes is like a blocked downpipe in a storm: the water has to go somewhere, and it will be somewhere you do not want.",
        refs: REFS,
        content: `
Commercial evaporators are mounted, levelled and firmly fastened — in that
order. The mounting method depends on the coil type: blower (forced-draught)
evaporators normally come with hanging brackets, while coils in florist
cabinets and walk-in coolrooms are usually fixed to the ceiling. Make a
cardboard template of the bracket hole pattern before you go up the ladder; it
turns an awkward measure-in-mid-air job into a two-minute mark-out.

## Where the coil goes

In a small room with one coil you have some freedom, and the shape of the coil
often decides for you. Whatever position you choose, check it against three
airflow faults:

1. The discharge air must not **blow directly onto stored product** — a
   constant draught dries out unwrapped goods and causes weight loss.
2. There must be no **stagnant pockets**. Air has to circulate over everything
   in the room, not just the aisle in front of the coil.
3. The coil must not **fire refrigerated air straight out of the doorway**, or
   pull a slug of warm outside air in every time the door opens.

Then check the service and drainage consequences:

- The drain run inside the room should be as short as possible.
- Coil face cleaning and fan replacement must be possible without unbolting the
  coil.
- **Electric defrost coils need clear space of at least the coil's own width on
  the side the heater rods withdraw from.** A rod you cannot pull out is a coil
  you cannot repair in place.

## Carrying the weight

Most modern coolrooms are built from insulated sandwich panel, and panel roofs
are not designed to carry point loads. Hanging a heavy blower coil straight off
the roof panels produces permanent sag, which then breaks the seal and lets
warm moist air in.

The correct method transfers the load into the **walls**:

- **Runners** span the room above the coil and take the coil's weight.
- **Bearers** sit across the top of the wall panels and spread the runner loads
  over a length of wall edge rather than a point.
- Runners and bearers are bolted together so the assembly behaves as one frame.
- Every bolt that passes through the external skin must be **sealed**, or you
  have created a moisture path straight into the panel core.

Where a small condensing unit is mounted on the same runners, the bearers must
be longer still, because there is now more weight to spread. And when you climb
up there to service it, lay a plank across the panels and work off that — your
own weight is a point load too.

## Condensate and defrost drains

Keep the drain inside the refrigerated space as short as it can be, and get it
out through the wall close to the coil. Give it as steep a fall as the room
allows; **better than 1 in 100** is the working minimum for a normal drain.
Use 45-degree sweeps rather than square 90-degree turns wherever you can, so
sludge and ice do not get a ledge to build on.

The trap goes on the **warm side only**. A trap inside a coolroom is a small
reservoir of water sitting in cold air, and it will freeze and block. Outside
the room, the trap does its real job: stopping room air being pulled out
through the drain, or drain smells being pulled in.

Below-zero rooms make this harder. In a freezer at **-18 degrees C**, every
metal fitting in the room is also at -18 degrees C unless something heats it,
so meltwater re-freezes as soon as it enters the pipe. Options:

| Method | How it works | Watch out for |
|---|---|---|
| Electric drain heater tape or rod | Heats the drain pipe directly | Needs enough wattage, and the pipe should be insulated; a heater inside an insulated line can reach dangerous temperatures |
| Liquid-line heat exchanger jacket | The liquid line is run in contact with, or wrapped around, the drain | Makes clearing a blockage more awkward |
| Short, steep, well-lagged run | Least to freeze in the first place | Only works if the geometry allows it |

Jacketing the drain with the liquid line is elegant: it uses heat that the
system is throwing away anyway, and even on a cold winter day with an
air-cooled condensing unit the drain sits around **5 degrees C** — comfortably
above freezing.

>! An insulated drain line with a high-wattage heater inside it can become
>! dangerously hot if the room is switched off and allowed to warm to ambient.
>! Where a room is shut down for cleaning or a holiday period, the drain
>! heaters must be switched off too. Fit the heater circuit so it cannot be
>! energised with the room off, and label it.

## On the job

- Template the bracket holes on the ground, not overhead.
- Transfer coil weight to the walls through runners and bearers, never to bare
  roof panels.
- Seal every penetration through the external skin.
- Leave a coil-width of clear space on the heater-rod side of a defrost coil.
- Trap the drain outside the room, never inside.
- Get the drain through the wall as close to the coil as possible.
`,
        quiz: [
          {
            q: "A blower coil is hung directly from the ceiling panels of a sandwich-panel coolroom. What is the likely outcome?",
            options: [
              "Improved air distribution over the product",
              "Roof panel sag, which breaks the vapour seal and lets warm moist air into the panel core",
              "Faster defrost cycles",
              "Lower suction pressure",
            ],
            answer: 1,
            explain: "Sandwich panel is not designed for point loads. The panels sag, joints open and moisture tracks into the core, permanently ruining the insulation. The weight must be carried by runners onto bearers that spread the load along the wall edge.",
          },
          {
            q: "Why must the condensate trap on a coolroom drain be located outside the refrigerated space?",
            options: [
              "So it can be inspected without entering the room",
              "Because a trap inside the room holds standing water in below-zero air and will freeze and block",
              "Because traps are not permitted inside food storage areas",
              "To reduce the pressure drop in the drain",
            ],
            answer: 1,
            explain: "The trap is a deliberate water seal, and water sitting in cold air freezes. Outside the room it stays warm enough to work and still stops air movement through the drain. Access is a convenience, not the reason.",
          },
          {
            q: "An electric defrost evaporator is installed 200 mm from the coolroom side wall on the end where the heater rods withdraw. What problem has been created?",
            options: [
              "The fans will short-cycle air",
              "Defrost water will not drain",
              "The heater rods cannot be withdrawn, so they cannot be replaced without removing the coil",
              "The coil will run flooded",
            ],
            answer: 2,
            explain: "The rule of thumb is a clear space at least equal to the coil's own width on the rod extraction side. Without it, a five-minute element change becomes a full coil removal. Airflow and drainage are unaffected — the fault only appears the day it needs service.",
          },
          {
            q: "In a -18 degrees C freezer room, jacketing the condensate drain with the liquid line achieves what?",
            options: [
              "It subcools the liquid to increase capacity, and freezes the drain harder",
              "It uses waste heat from the liquid line to hold the drain above freezing, typically around 5 degrees C",
              "It replaces the need for any fall on the drain line",
              "It removes the need for a trap altogether",
            ],
            answer: 1,
            explain: "The liquid line is warm and its heat is otherwise rejected anyway, so it makes an ideal low-cost drain heater — the drain sits near 5 degrees C even on a cold day with an air-cooled condensing unit. It does not remove the need for fall or for a trap on the warm side, and its slight subcooling effect is incidental.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "rac-wall-splits",
        title: "Room air-conditioners and wall-hung splits",
        minutes: 13,
        simple: "Small air-conditioners look like plug-in appliances, but they still have to be sited, mounted, drained and wired properly or they will be noisy, wet, weak or unsafe. The commonest failure is not the machine at all: it is asking a small unit to fight full afternoon sun through a big window, which is like trying to cool a room with the fridge door open.",
        refs: REFS_ELEC,
        content: `
Manufacturers of room air-conditioners (RACs) and wall-hung splits supply
extremely detailed installation instructions, because they know that
installation, not manufacture, is where the performance is won or lost. In
Australia, installing a split system means handling refrigerant, so the
installer must hold the appropriate **Australian Refrigeration Council (ARC)
licence** — which in turn means holding the qualification behind it.

## 1. Location

**Indoors**, the position is usually decided by window positions and by the
customer's decor, and it is not especially critical: supply-air deflection
vanes are adjustable, so you can get good distribution without blowing cold air
straight onto someone's neck.

**Outdoors** the choices matter much more:

- Keep the unit out of direct **afternoon sun**; a small awning pays for itself
  at peak load — as long as it does not block the airflow.
- Do not restrict heat radiation and airflow away from the condenser. Keep the
  condenser air discharge **at least 0.5 m** from any wall or fence.
- Think about the **neighbours**. An outdoor unit directly opposite a
  neighbour's bedroom window, with no solid barrier between them, is an
  invitation to a complaint — and councils can order a unit to be silenced,
  moved or switched off. Noise limits differ between local governments and
  change over time, so check the rules that apply to that address.
- On a wall-hung split, obey the manufacturer's limits on **pipe run length and
  vertical lift** between indoor and outdoor units. If the job cannot be done
  within them, ring the manufacturer before you buy the pipe: you may need
  different line sizes, additional refrigerant charge and additional oil.
  Exceeding the limits without approval will void the warranty, which becomes
  very expensive if the compressor later fails.

## 2. Mounting

Mount on a solid base — ideally a structural frame or a brick wall. Vibration
cannot be eliminated, only managed: a solid mounting damps it, while a light
timber frame or a window sash amplifies it and turns it into a complaint. A
window unit belongs at the **base of the window**, not high up, unless you are
prepared to properly reinforce the frame. Fascia units are best sat on the
ground on a level pad, but the same principles apply.

## 3. Solar heat

No air-conditioner can cancel direct sunlight falling on people and furniture.
One side of a sunlit room will always feel hot while the far side feels cold,
and you must not try to fix that by oversizing the machine.

The right approach is to tell the owner **before** installation that awnings,
blinds or window film are part of the solution, and to get that acceptance in
writing. The chapter records a north-west WA coastal town where west-facing
sea-view homes generated endless complaints simply because owners refused to
close blinds against the afternoon sun — homes without the view had no
problems at all.

## 4. Load calculation

Sizing from floor area alone produces unhappy customers. Real loads that are
routinely missed:

| Load | Typical magnitude |
|---|---|
| Solar gain through glass | about 1 kW per square metre of glass |
| Cooking stove and oven | 4 to 6 kW |
| Other kitchen appliances | up to 1 kW each |
| Uninsulated ceiling below a hot roof space | large; roof spaces often exceed 60 degrees C in summer |

Ceiling insulation is not optional when air-conditioning is installed — without
it you are cooling against a 60-plus degree attic all afternoon.

**Worked example.** A living area has 6 square metres of west-facing glass and
an open kitchen with a 5 kW cooktop in use at the peak hour. Solar through
glass is about 6 x 1 = 6 kW, cooking about 5 kW, plus a couple of appliances at
roughly 1 kW each — around 13 kW of load that a floor-area rule of thumb would
never have shown. Fitting external shading to that glass removes most of the
6 kW, which is far cheaper than the extra machine capacity needed to fight it.

## 5. Water disposal

In humid weather a unit condenses a surprising amount of water and all of it
has to go somewhere harmless. Most RACs are installed with a deliberate slope
toward the rear (condenser) end so water runs away from the room. Many units
then throw that water through the condenser using a slinger ring on the
condenser fan blade tips, which also improves condenser performance. Whatever
the method, the installation has to make it work, and routine service has to
keep the tray and drain clear.

## 6. Power supply

A standard household power point is rated at **10 A**. Before plugging anything
in, the installer must:

1. Confirm the point's rating exceeds the unit's maximum current draw.
2. Confirm the normal load of everything else on that circuit will not exceed
   the rating of the protective device.
3. Call in a **licensed electrical worker** to run a new dedicated circuit
   whenever there is any doubt about the size or condition of the existing
   wiring. Treat a wiring check as automatic on any house more than about 20
   years old.

Units above **3.5 kW single phase** generally need 15 A wiring, a 15 A
protective device and a 15 A outlet. Many will also need a **soft starter** to
keep starting current within the supply authority's limits — check with the
local supply authority, because the rules vary.

>! Electrical connection and circuit work is licensed work. Refrigeration
>! technicians must not extend circuits, change protective devices or connect
>! fixed wiring unless they hold the relevant electrical licence. Isolate,
>! lock out and prove dead before opening any electrical enclosure.
>!
>! Wall-hung indoor units and outdoor units on brackets mean working at
>! height. Use a rated platform or scaffold rather than balancing on the top
>! step of a ladder, secure the ladder, and never lift a heavy indoor unit
>! above shoulder height on your own.

## What to remember

- ARC licence for anything involving refrigerant.
- 0.5 m minimum clear discharge from any wall or fence.
- Manufacturer's pipe-length and lift limits are warranty conditions.
- Solar gain is about 1 kW per square metre of glass — shade it, do not chase it.
- 10 A point, 3.5 kW threshold, 15 A above it, and an electrician for anything
  fixed.
`,
        quiz: [
          {
            q: "A customer wants a 6 kW split installed to cool a west-facing lounge with 8 square metres of unshaded glass. The correct professional response is to:",
            options: [
              "Fit a much larger unit so it can overcome the solar gain",
              "Explain that about 8 kW of solar gain enters through that glass, recommend shading, and get the owner's written acknowledgement that performance depends on it",
              "Install as requested and adjust the charge upward",
              "Refuse the job, as west-facing rooms cannot be air-conditioned",
            ],
            answer: 1,
            explain: "Solar gain runs at roughly 1 kW per square metre of glass, so 8 square metres is around 8 kW — more than the machine. No air-conditioner offsets direct sun on people and surfaces, and sizing for it is wasteful, so shading plus a written acceptance is the standard practice.",
          },
          {
            q: "A 4.2 kW single-phase split is to be connected in a 1970s house. What does the installer need to arrange?",
            options: [
              "Nothing — a 10 A general power outlet is adequate for all domestic splits",
              "At least 15 A wiring, protection and outlet, installed by a licensed electrical worker, plus a check of the existing wiring and possibly a soft starter",
              "A three-phase supply",
              "A second 10 A outlet on the same circuit",
            ],
            answer: 1,
            explain: "Above 3.5 kW single phase the rule of thumb is 15 A wiring, protection and outlet. In a house that old the existing wiring should be checked as a matter of course, and the circuit work must be done by a licensed electrical worker. Two 10 A outlets on one circuit does nothing about the circuit's rating.",
          },
          {
            q: "The installation manual for a wall-hung split allows 15 m of pipe and 7 m of vertical lift, but the job needs 22 m. What should the installer do?",
            options: [
              "Proceed and add extra refrigerant by feel",
              "Proceed, because manufacturer's figures include a large safety margin",
              "Contact the manufacturer before proceeding — line sizes, additional charge and additional oil may be required, and unapproved deviation voids the warranty",
              "Install two indoor units to share the pipe run",
            ],
            answer: 2,
            explain: "Length and lift limits are set by oil return and pressure drop, and going past them changes the charge and oil requirements. Only the manufacturer can specify what is needed, and unapproved deviations void the warranty — a costly outcome if the compressor fails.",
          },
          {
            q: "Why should a window-type room air-conditioner be mounted at the base of the window rather than higher in the frame?",
            options: [
              "Cold air falls, so a low position distributes air better",
              "The window sash and light framing amplify vibration; the base of the window is far more rigid unless the frame is specially reinforced",
              "It shortens the drain run",
              "It keeps the condenser out of the sun",
            ],
            answer: 1,
            explain: "The mounting issue is structural: light glazing and sashes act like a sounding board and turn normal machine vibration into a noise complaint. High mounting is only acceptable if the frame is adequately reinforced. Air distribution is handled by the adjustable vanes.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "ducted-residential",
        title: "Residential and small commercial ducted systems",
        minutes: 15,
        simple: "Once a system gets past about 7 kW you cannot just blow air out of a box on the wall — you have to pipe the air around the building in ducts. That brings a new set of rules: air must move slowly enough to be quiet, outlets must be big enough not to whistle, filters must be there, and the fan has to be able to push against whatever the ductwork resists. It is plumbing, but with air.",
        refs: REFS,
        content: `
Air-conditioning has moved from luxury to expectation, and the middle of the
market — roughly **7 kW to 30 kW** — now covers most homes, shops and small
offices. At those capacities the air volumes are large enough that blowing them
into a room from one grille would be draughty and noisy, so the air is
distributed through **ductwork** from a remotely mounted unit.

A typical domestic arrangement is a **ceiling-mounted fan-coil (ducted split)**
in the roof space, supplying several rooms through flexible duct and returning
air through one central return-air grille. Commercially, 10 to 20 per cent
outside air is normally introduced at the return; in houses it is unusual,
because natural infiltration already supplies enough.

Other arrangements include roof-mounted packaged units and every combination of
split: wall-hung, under-ceiling console, flush ceiling cassette, floor console,
in-ceiling ducted and direct-blow indoor units. **Multi-splits** run several
indoor units from one outdoor unit, and larger systems multiplex several
outdoor units together for better part-load capacity control.

Split systems are popular in homes for one very practical reason: the noisiest
component — the compressor and condenser — ends up in the garden, out of sight
and hopefully out of earshot of both owner and neighbour.

**The heat pump angle.** Reverse-cycle operation is now the cheapest way to
heat most Australian homes, and heat-pump technology has spread into domestic
hot water as well, so a single package can supply heating, cooling and hot
water. Ducted systems are usually **zoned** — day/night or multi-zone — so a
smaller, more efficient machine can serve the whole house by serving only part
of it at a time.

## Siting the indoor unit

- Respect the **maximum interconnecting tubing length** for the model.
- Make the tubing run convenient and concealed, with **no dips or hollows** in
  which oil can pool in the suction line. Shorter is better; runs within about
  **10 m** rarely cause trouble.
- Put wall or floor consoles **away from doorways**, so they are not
  continuously handling air leaking in from adjacent spaces.
- **Drainage must go outside the building** — never into an underfloor space.
  Ceiling units often struggle for fall, and a condensate pump is an acceptable
  answer; what is not acceptable is water finding the plasterboard. Condensate
  lines into a drain must be **trapped**, and suction lines must be insulated,
  or the pipe itself will drip on the ceiling.

## Siting the outdoor unit

Bigger units need more room around them. Most are weatherproof, but you must
still provide:

1. shade from the afternoon sun where possible
2. completely free airflow with no recirculation — not in walkways or carports
3. a position where noise will not be a nuisance
4. a level, solid base, with the unit **bolted down**; vertical-discharge units
   need **2 m** of clear space above
5. elimination of vibration in the tubing entering the building
6. an elevated base so the unit is not standing in water after heavy rain
7. pipework and cable run in a duct or under a metal top-hat cover, which looks
   professional and protects the pipe insulation from **UV** breakdown.

## Ducting and air velocity

Flexible duct removed most of the need for custom sheet metal in houses, and
took a lot of cost out of ducted systems, but it did not remove the need to
**size** the duct. Velocity is what makes duct noisy; these are the working
limits:

| Application | Duct | Recommended | Maximum |
|---|---|---|---|
| Residential | Main duct | 3.5 to 4.5 m/s | 6 m/s |
| Residential | Branch ducts | 3.0 m/s | 3.5 to 5 m/s |
| Residential | Branch risers | 2.5 m/s | 3.3 to 4 m/s |
| Commercial | Main duct | 5 to 6.5 m/s | 5.5 to 8 m/s |
| Commercial | Branch ducts | 3 to 3.5 m/s | 4 to 6.5 m/s |
| Commercial | Branch risers | 3 to 3.5 m/s | 4 to 6 m/s |
| Both | Return air intakes | 2 to 2.5 m/s | 3 m/s |

## Supply air outlets

Outlets are sized to the air quantity passing through them. As a first
approximation:

| Air quantity | Approximate outlet size |
|---|---|
| 100 L/s | 250 mm x 250 mm |
| 200 L/s | 300 mm x 300 mm |
| 300 L/s | 400 mm x 400 mm |
| 400 L/s | 500 mm x 500 mm |

Those sizes give face velocities in the region of **1.6 to 1.9 m/s**, which is
where outlets are quiet. Undersize the outlet and it whistles; oversize it and
the throw is short but draughts are reduced. For a large space, two or more
smaller outlets beat one big one — better distribution, and less noise from
each.

## Filters

**Never run a unit without a filter in the return airflow.** Filters keep dust
out of the room, and just as importantly keep the evaporator fins and the
blower wheel clean. A huge share of "the air-conditioning is not working"
service calls come down to a filter that was never cleaned, or dust dragged
past a filter that no longer sealed — you open the unit and find mud and lint
packed between the fins and caked in the curve of every blower blade. Both
strangle the airflow, capacity drops, and the customer calls it inefficiency.
Keep the face velocity through the filter at or below **2 m/s**, or fine
particles are driven straight through the media.

## Fan capacity and external static pressure

The volume a fan delivers depends on the pressure it is working against — the
**external static pressure (ESP)**. ESP is the total resistance of everything
downstream: duct length, duct size, number and shape of bends, registers,
diffusers, and the coil itself if it sits after the fan. The duct designer
calculates the expected ESP and selects the fan and drive to suit. Change the
duct design on site and the fan no longer performs as designed, so the air
volume changes — and with it the refrigerating capacity of the whole system.

Measure duct pressure with a manometer and read the delivered volume from the
manufacturer's fan curve.

**Worked example.** A fan with a 127 mm pulley driven from a 76 mm motor pulley
is rated to deliver 855 L/s at 80 Pa. As installed, the ductwork measures
100 Pa ESP, and the fan curve shows only **760 L/s** at that pressure — a
shortfall of 95 L/s, or about 11 per cent.

The fix is to speed the fan up by fitting a smaller driven pulley — 122 mm in
this case — which the manufacturer's curve family shows will restore 855 L/s at
100 Pa. Check what that does mechanically. With a 1440 r/min (24 r/s) motor:

- Original fan speed = 76 / 127 x 24 = **14.36 r/s** (about 862 r/min)
- New fan speed = 76 / 122 x 24 = **14.95 r/s** (about 897 r/min)
- Speed ratio = 14.95 / 14.36 = **1.041**, a 4.1 per cent increase
- Fan power varies as the cube of speed: 1.041 cubed = **1.128**

So a 4 per cent speed increase demands roughly **13 per cent more shaft power**.
That may be more than the existing motor can deliver, which is why you always
clamp an ammeter on the fan motor after changing a pulley and confirm it is
within its rated current. In this example the fan should be kept between about
650 and 1050 L/s; run it outside its recommended range and you get noise or
unstable airflow.

## Interconnecting tubing, condensing unit below the fan-coil

**Suction line.** Do not exceed the rated length and diameter for the model
unless the drive is re-engineered — typical published limits look like 14 m at
19 mm OD, 17 m at 22 mm OD, and 20 m at 28 mm OD. Support the lines properly.

Insulate the suction line over its **entire** length and keep it separated from
the liquid line. That insulation prevents three separate problems:

- heat absorption that loads the compressor unnecessarily
- high suction-vapour temperature that overheats the motor windings of a sealed
  compressor
- condensation dripping from the line into ceilings and walls.

Where the evaporator has no built-in trap, form a **suction loop** at the coil
outlet so refrigerant cannot drain down to the compressor on the off cycle. Be
clear about the limit of that loop: it stops liquid running downhill, but it
does **not** stop refrigerant vapour migrating to the compressor whenever the
compressor is colder than the evaporator. That is why a **crankcase (sump)
heater is essential on every such compressor.**

**Liquid line.** Run it separated from the suction line so it does not warm the
suction vapour, and insulate it wherever it passes through hot spaces — wall
cavities, roof spaces, or an exposed sunny wall.

> Modern split systems usually put the refrigerant control in the **outdoor**
> unit. In cooling, that puts both interconnecting pipes on the low side: the
> small pipe you would instinctively call the liquid line is actually carrying
> a two-phase mixture and is effectively part of the evaporator, so it must be
> insulated too. Always check the manufacturer's instructions before deciding
> which line gets lagged.

## What to remember

- Duct velocity is the noise control; outlet size is the second one.
- No filter, no run — and keep filter face velocity at or below 2 m/s.
- Fan volume follows ESP; power follows the cube of speed. Always re-check
  motor amps after a pulley change.
- Insulate the whole suction line, trap or loop it, and fit a crankcase heater.
- On outdoor-metering splits, insulate both interconnecting lines.
`,
        quiz: [
          {
            q: "A fan rated at 855 L/s at 80 Pa is installed on ductwork measuring 100 Pa and delivers only 760 L/s. The fan pulley is changed from 127 mm to 122 mm. What must be checked afterwards?",
            options: [
              "The refrigerant charge, because volume affects the charge",
              "The fan motor current, because a 4 per cent speed rise needs about 13 per cent more shaft power",
              "The duct velocity, which is unchanged by fan speed",
              "The filter type, which must be upgraded",
            ],
            answer: 1,
            explain: "Fan power varies with the cube of speed: 1.041 cubed is 1.128, about 13 per cent more power for a 4 per cent speed increase. That can push the existing motor past its rated current, so an ammeter check is mandatory. Duct velocity certainly does change when volume increases.",
          },
          {
            q: "Return-air intake velocity should not exceed:",
            options: ["1 m/s", "3 m/s", "6 m/s", "8 m/s"],
            answer: 1,
            explain: "Return air intakes are sited near occupants and are the easiest place to generate noise, so they are held to 2 to 2.5 m/s recommended with 3 m/s as the maximum. The 6 and 8 m/s figures belong to residential and commercial main ducts respectively.",
          },
          {
            q: "On a modern split with the expansion device in the outdoor unit, why must the small-diameter interconnecting pipe be insulated during cooling?",
            options: [
              "To prevent UV damage to the copper",
              "Because it carries hot discharge gas",
              "Because metering happens outdoors, so that pipe carries a low-temperature two-phase mixture and is effectively part of the evaporator",
              "Because it is required for warranty on the electrical wiring",
            ],
            answer: 2,
            explain: "With the metering device outdoors, both pipes are on the low side in cooling. The small pipe is cold and will sweat and lose capacity if bare — it is doing evaporator duty. Insulation for UV protection applies to the lagging itself, not the copper.",
          },
          {
            q: "An indoor fan-coil has a suction loop at the coil outlet but no crankcase heater. What can still happen on a long off cycle?",
            options: [
              "Liquid will drain down the suction riser to the compressor",
              "Refrigerant vapour will migrate to and condense in the cold compressor, diluting the oil",
              "The condensate drain will freeze",
              "The liquid line will flash",
            ],
            answer: 1,
            explain: "The loop is a physical barrier to liquid running downhill, but vapour migrates to wherever it is coldest and condenses there. If the compressor is the cold spot, refrigerant collects in the crankcase and the oil is diluted, giving a violent, poorly lubricated start. Only a crankcase heater keeps the sump the warmest point.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "masonry-fixings",
        title: "Masonry tools and fixings",
        minutes: 10,
        simple: "Half of installing air-conditioning is hanging heavy things on walls and ceilings. Different walls need completely different fixings: solid brick, hollow block, plasterboard and concrete each want their own type of anchor. Using the wrong one is like using a drawing pin to hang a bookshelf — it looks fine right up until it does not.",
        refs: REFS,
        content: `
Refrigeration and air-conditioning technicians spend a surprising amount of the
day fixing brackets, saddles, trays and whole machines to concrete and
brickwork. Knowing the range of fixings and the tools that install them saves
labour, and it is the difference between a bracket that is still solid in
fifteen years and one that pulls out of the wall.

Fixings divide into two families:

- **Expansion (mechanical) anchors** work in a drilled hole in the base
  material. Tightening a screw, nut or pin drives a sleeve, plug or shell
  outward so it grips the wall of the hole.
- **Chemical (resin) anchors** bond a stud to the base material with an
  adhesive rather than squeezing the hole.

## Fixing systems

| Fixing | Suits | Notes |
|---|---|---|
| Plastic or nylon wall plug | Light duty in brick, concrete, masonry | Colour-coded to screw size; sold in packs or on rolls to be cut to length |
| Nylon pin-drive anchor | Light duty in timber, concrete, steel, masonry | Ribbed nylon body plus a steel drive pin; hammer in, unscrew to remove |
| Hollow wall anchor | Plasterboard and other hollow walls | Metal strips buckle into an umbrella behind the sheet, spreading the load |
| Masonry anchor (expansion bolt) | Medium and heavy duty in brick and concrete | Split shield expands as the bolt or nut is tightened |
| Chemical or resin anchor | Near edges, or where compression would crack the base | Two-part resin; bond is often stronger than the base material |
| Spring or gravity toggle | Hollow or thin sheet: plasterboard, hardboard, ply, fibre cement | Wings open behind the sheet |

**Wall plugs.** The colour code tells you the screw size. In soft brick or
low-strength concrete, drill **1 mm smaller** than the nominal hole size so the
plug still has something to grip.

**Nylon pin-drive anchors** are popular because they install fast — drill,
push through the fixture, drive the pin with a hammer — yet can be backed out
with a screwdriver if you need to move something. They come in mushroom, round,
countersunk and flush head styles, and with stainless pins where corrosion is
a concern (anywhere near the coast, or on a cooling tower deck).

**Masonry anchors** should be set into the **body of the brick**, not into the
mortar perp or bed joint. Mortar is much weaker and often poorly filled.
Self-drilling types exist that cut their own hole in brick or concrete. Fixing
procedures differ from brand to brand, so read the manufacturer's instructions
before you set the first one — the required hole depth, torque and edge
distances are not interchangeable.

**Chemical anchors** solve the edge problem. A conventional expansion anchor
close to an edge can crack or spall the masonry as it expands, because the
compression has nowhere to go. A resin anchor applies no expansion force; it
just glues the stud in. Most systems work by mixing a resin with a hardener as
the cartridge is dispensed, so the working time is short and the hole must be
clean and dust-free for the bond to develop.

**Toggles.** A spring toggle is a bolt with sprung wings that fold for
insertion and snap open behind the sheet. A gravity toggle uses a weighted bar
that swings open, which means it works **only in vertical surfaces** — for a
ceiling fixing you must use a spring toggle. Note that the sheet is doing the
work: for anything heavy in a plasterboard ceiling, find the joist or add a
timber noggin.

## Tools

**Rotary hammers and hammer drills** with carbide-tipped bits make short work
of concrete and brick. Fitted with the right **core bit**, a rotary hammer is
also the standard way of putting the wall penetration through for split-system
pipework and cabling. For a cavity brick wall you need the **long series**
bits — a standard-length masonry bit simply will not reach through both
leaves and the cavity.

**Powder-actuated fastening tools** are nail guns driven by a small explosive
charge. They are quick where there is a lot of repetitive fixing — conduit
clips, steel railings and the like onto concrete, solid brick or steel — and
they need no drilling or plugging. There are two types:

- **High-velocity** tools, where the charge acts directly on the pin. Operators
  must be **licensed**; your distributor can tell you which authority issues
  it in your state.
- **Low-velocity** tools, which are indirect-acting: the charge drives a piston
  which drives the pin. No licence is required, but you still need proper
  training and the correct charge power for the material you are fixing into.

>! A powder-actuated tool is a firearm in everything but name. A pin can pass
>! straight through thin or unsuitable material and injure someone on the other
>! side. Never fire into brittle, thin or unknown material, always use the
>! correct power load for the base, wear eye and hearing protection, and
>! isolate the area on the far side.
>!
>! Drilling masonry produces respirable crystalline **silica dust** — use
>! on-tool dust extraction or water suppression and appropriate respiratory
>! protection.
>!
>! Most of this work happens up a ladder or on a roof. Use a rated platform,
>! never work off the top step, and never core-drill overhead one-handed while
>! holding onto a ladder — a jammed core bit will twist a heavy rotary hammer
>! out of your grip. And before any hole is drilled, confirm what services run
>! behind the wall.

## On the job

- Match the fixing to the base material, then to the load — in that order.
- Body of the brick, not the mortar joint.
- Spring toggles for ceilings; gravity toggles for walls only.
- Chemical anchors near edges and in old, soft masonry.
- Long-series bits for cavity walls; core bit for pipe penetrations.
- Read the manufacturer's data for hole size, depth and edge distance.
`,
        quiz: [
          {
            q: "A bracket must be anchored 40 mm from the edge of a concrete slab. Why is a chemical anchor preferred over an expansion anchor?",
            options: [
              "It cures faster than an expansion anchor can be tightened",
              "An expansion anchor's outward force close to an edge can crack or spall the concrete, while a resin anchor applies no expansion force",
              "Chemical anchors do not require a drilled hole",
              "Expansion anchors cannot be used in concrete",
            ],
            answer: 1,
            explain: "Mechanical anchors work by compressing the surrounding material, and near an edge that compression has nowhere to go, so the concrete breaks out. A resin anchor bonds instead of squeezing, and the bond is often stronger than the base material. It still needs a clean drilled hole.",
          },
          {
            q: "Which fixing is suitable for hanging a light condensate pump from a plasterboard ceiling?",
            options: [
              "A gravity toggle",
              "A spring toggle",
              "A plastic wall plug",
              "A self-drilling masonry anchor",
            ],
            answer: 1,
            explain: "Gravity toggles rely on a weighted bar swinging down, so they only work in vertical surfaces. A spring toggle's wings are pushed open by a spring and work in any orientation, including overhead. Wall plugs and masonry anchors need solid material to grip.",
          },
          {
            q: "Which statement about powder-actuated fastening tools is correct?",
            options: [
              "Both high- and low-velocity tools require a licensed operator",
              "Neither type requires any licence or training",
              "High-velocity tools require a licensed operator; low-velocity (indirect, piston-driven) tools do not, but still require training and the correct power load",
              "Low-velocity tools cannot be used on concrete",
            ],
            answer: 2,
            explain: "The distinction is how the charge acts. Direct-acting high-velocity tools drive the pin with the charge itself and are licensed; low-velocity tools interpose a piston and are unlicensed — but selecting the wrong power load can still drive a pin clean through the material.",
          },
          {
            q: "Why should a masonry anchor be set into the body of a brick rather than the mortar joint?",
            options: [
              "Mortar joints are usually weaker and inconsistently filled, giving a much lower holding capacity",
              "Mortar cannot be drilled with a carbide bit",
              "Anchors will corrode faster in mortar",
              "Building codes prohibit any fixing into mortar",
            ],
            answer: 0,
            explain: "The anchor relies on the strength of the material around the hole. Mortar is softer than fired brick and joints are often only partly filled, so an anchor in a joint can pull out under load. It is possible to fix into mortar, just far weaker — which is why it is the fallback, not the target.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "maintenance-shutdown-startup",
        title: "Maintenance programmes, seasonal shutdown and start-up",
        minutes: 14,
        simple: "Plant that is looked after on a schedule lasts longer and uses less power than plant that is only fixed when it stops. This lesson is the routine: what to check weekly, what to check yearly, how to safely shut a seasonal system down for winter, and how to wake it up again in spring without wrecking the compressor.",
        refs: REFS_ELEC,
        content: `
When a system is handed over for continuous service, the installing contractor
should hand over a **detailed operating manual** for the owner. Manuals for
different plants follow much the same pattern, differing only in the specific
models fitted. Alongside it should come the thing that actually gets used: a
**maintenance checklist** — on paper or in maintenance software — listing every
service task and the interval at which it is due.

## Two kinds of maintenance

| Type | What it is | Typical tasks |
|---|---|---|
| **Preventive** | A planned series of tasks that keeps equipment at its specified performance and stops failures happening | Inspection, cleaning, lubrication, filter and bearing replacement, belt checks, water testing |
| **Corrective** | Work done in response to a failure, to restore specified performance | System analysis, fault isolation, repair or replacement of components, adjustment and re-alignment |

A good preventive programme aims to **minimise the complexity and frequency**
of servicing while protecting performance, energy efficiency and operating
life. The alternative — run it until it breaks — looks cheaper on the invoice,
but it ignores the energy that a dirty, badly adjusted, badly lubricated
machine wastes every hour of every day, and the carbon that goes with it. A
condenser that has lost 20 per cent of its airflow to dirt does not stop; it
just quietly costs money.

> Even where the client will not pay for a full planned programme, **safety
> controls must still be inspected periodically**. High-pressure cut-outs,
> pressure-relief devices, oil-failure switches and the like protect the plant
> and the people near it, and they are not self-testing.

## An example service schedule

**Weekly**

1. Check compressor oil level. If it looks low, run the machine continuously at
   full load for 3 to 4 hours and check the level every 30 minutes; only add
   oil if it is still low — much apparent low oil is oil out in the system that
   comes back once conditions are steady.
2. Check oil pressure. On a pressure-lubricated compressor the oil gauge should
   read about **140 to 240 kPa above the suction gauge reading** — the net oil
   pressure is the difference, not the absolute figure.
3. Stop the compressor and check the shaft seal for excessive oil leakage on an
   open compressor, and confirm with an electronic leak detector.
4. Check air filters and air-handling gear; clean or replace filters.
5. Check general operating conditions: system pressures, liquid sight glass,
   temperatures.
6. Lubricate fan and motor bearings as required, using the lubricant the
   manufacturer specifies — not whatever is on the van.
7. Check fan belt tension and alignment.
8. Tighten fan sheaves and pulleys; if one is loose, re-check alignment
   **before** tightening it.
9. Check the condensing equipment. Air-cooled: inspect and clean the coil.
   Water-cooled: check the cooling water — algae or scale means water treatment
   is needed — and clean the tower sump strainer screen.

**Annually** (repeat all of the above, then)

10. Drain the water circuits and inspect the condenser piping; clean scale and
    sludge out of the condenser tubes.
11. On a cooling tower or evaporative condenser, flush the pumps and sump tank,
    remove rust and corrosion and repaint.
12. Inspect all motor and fan shaft bearings for wear, and check shaft end-play.
13. Replace any belt that is worn or frayed.
14. Strip and clean every water strainer.
15. Inspect the ductwork for damage and deterioration.
16. Examine the electrical contacts on all contactors, starters and controls.

> **AS/NZS 3666.2** requires cooling water systems to be inspected **monthly**
> and cleaned whenever necessary, and the interval between cleans must not
> exceed **six months**. That is a legal obligation, not a recommendation.

!SIM[Watch head pressure climb as a condenser fouls up](fault=dirtyCondenser)

## Seasonal shutdown

Plant that will sit idle for months — comfort cooling over winter, seasonal
process plant — is best shut down by **pumping the charge into the condenser
and receiver and valving it off**. If a small leak then develops on the low
side, you lose far less refrigerant, and less air and moisture are drawn in.

**Hermetic or semi-hermetic system**

1. Close the liquid line shut-off valve at the condenser and start the system.
   The compressor draws the low side down until the low-pressure control cuts
   out and stops it.
2. Open the compressor electrical disconnect so it cannot restart, then
   **front-seat** the discharge and suction service valves.

**Open compressor**

1. If there are no permanent gauges, fit one to the back-seat port of the
   suction service valve and crack the valve off its back seat.
2. Shut the condenser liquid line stop valve.
3. Open the liquid line solenoid valve(s) by hand. Where no manual lifter is
   fitted, wind the temperature controller down so they are held open through
   the pump-down.
4. Fit a jumper across the low-pressure switch terminals — you are deliberately
   pumping below its cut-out, so it must be bypassed to keep the compressor
   running.
5. Start the compressor, watch the suction gauge, and stop it by opening the
   electrical disconnect when the gauge reaches about **14 kPa**.
6. Remove the jumper from the low-pressure control.
7. Remove the gauge, refit the port plug and front-seat the suction valve.

>! **Never pump a system into a vacuum.** Leave a slight positive pressure, or
>! air and moisture will be drawn in through minor leaks and past the
>! now-stationary shaft seal — and on an open compressor a vacuum in the
>! crankcase draws air straight past the seal.
>!
>! Leaving a jumper on a low-pressure control is one of the classic
>! service-caused failures. Remove it the moment the pump-down is finished, and
>! never leave the site with a safety control bypassed.

**All systems, then**

1. Leak-test the condenser and the liquid receiver with an electronic detector
   — that is where the whole charge is now sitting.
2. Valve off the supply and return water connections of a water-cooled
   condenser and **leave the shell full of water**. A drained shell rusts and
   corrodes faster than a full one. If it can freeze, drain it and refill with
   an antifreeze solution.
3. Drain the cooling tower or evaporative condenser, flush the sump, and paint
   any rusted or corroded areas.
4. Open the master electrical disconnect and **padlock it open**.

## Seasonal start-up

1. Carry out all the annual maintenance on the air-handling system and related
   equipment first — do not start a machine into a dirty, unchecked system.
2. Fill the cooling tower or evaporative condenser sump.
3. Open the shut-off valves on a water-cooled condenser.
4. Confirm the liquid line solenoid valves are back on **automatic** control.
5. Open the liquid line shut-off valve.
6. **Back-seat** the compressor suction and discharge service valves.
7. Close the master electrical disconnect.
8. Start the system.
9. After 15 to 20 minutes of running, check the compressor oil level sight
   glass, the oil pressure and the liquid line sight glass. If all three are
   satisfactory, reset the temperature controller to its proper setting.

The order matters. Every one of steps 3 to 6 is something that, if forgotten,
either starves the compressor or lets it run against a closed valve. A pump-down
that ends with front-seated valves and begins with the technician assuming
they are open is how compressors get destroyed in the first minute of the
season.

## What to remember

- Preventive maintenance protects efficiency, not just reliability.
- Net oil pressure is 140 to 240 kPa **above** suction pressure.
- Cooling water systems: monthly inspection, cleaning interval never more than
  six months.
- Pump down to about 14 kPa positive, never into a vacuum.
- Remove every jumper; padlock every isolator.
- Back-seat the service valves before restarting, and check oil level, oil
  pressure and sight glass after 15 to 20 minutes.
`,
        quiz: [
          {
            q: "During a weekly check the oil pressure gauge reads 420 kPa and the suction gauge reads 250 kPa. Is the oil pressure acceptable?",
            options: [
              "No — 420 kPa is far too high",
              "Yes — the net oil pressure is 170 kPa, within the normal 140 to 240 kPa band",
              "No — the net oil pressure is only 170 kPa, which is below minimum",
              "It cannot be assessed without the discharge pressure",
            ],
            answer: 1,
            explain: "Oil pump output is read as the difference above suction pressure, because the pump takes suction from a crankcase already at suction pressure. 420 minus 250 gives 170 kPa net, comfortably inside 140 to 240 kPa. Reading the gauge absolutely is the classic beginner error.",
          },
          {
            q: "Why is a jumper fitted across the low-pressure control during an open-compressor pump-down?",
            options: [
              "To protect the control from the vacuum",
              "Because the suction pressure is deliberately taken below the control's cut-out setting, and the compressor must keep running",
              "To speed up the pump-down",
              "To prevent the liquid line solenoid closing",
            ],
            answer: 1,
            explain: "The target of about 14 kPa is well below a normal cut-out setting, so without the jumper the compressor would stop early. The jumper must be removed as soon as the pump-down finishes — leaving a safety control bypassed is a serious and common service fault.",
          },
          {
            q: "A water-cooled condenser is being shut down for the off season. What should be done with the water in the shell?",
            options: [
              "Always drain it to prevent stagnation",
              "Leave the shell full of water, as a drained shell corrodes faster — unless freezing is possible, in which case drain and refill with antifreeze",
              "Replace the water with compressor oil",
              "Leave the water circulating continuously",
            ],
            answer: 1,
            explain: "A wet-then-dry surface with air present corrodes far faster than one kept permanently submerged, so the shell stays full. Freezing is the one exception, because ice will split the tubes — then you drain and refill with an antifreeze solution.",
          },
          {
            q: "Which start-up step, if forgotten after a seasonal shutdown, would leave the compressor unable to pump?",
            options: [
              "Filling the cooling tower sump",
              "Cleaning the ductwork",
              "Back-seating the compressor suction and discharge service valves that were front-seated at shutdown",
              "Resetting the temperature controller",
            ],
            answer: 2,
            explain: "The shutdown ended with the service valves front-seated to isolate the compressor. Starting with them still closed means the compressor runs against closed valves with no refrigerant flow and no return oil — a fast way to destroy it. The other steps matter, but not in the first minute.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "water-legionella",
        title: "Cooling water treatment and Legionnaires' disease",
        minutes: 12,
        simple: "A cooling tower is a warm, wet, dusty box that sprays fine droplets into the air. That is close to ideal conditions for growing bacteria, and one of them, Legionella, causes a severe pneumonia people can catch by breathing the mist. Treating and bleeding the water is partly about protecting the metal, but mostly about keeping the water clean enough that nobody gets sick.",
        refs: REFS_WATER,
        content: `
Any time water is recirculated through a cooling tower or evaporative
condenser, two things are guaranteed: the water will concentrate whatever is
dissolved in it, and it will collect whatever the air brings with it. Left
alone it becomes corrosive, scaling, and biologically alive. So every
recirculating system needs both **chemical treatment** and **bleed-off**.

## Why bleed-off is not optional

The tower cools by evaporating water. Pure water leaves as vapour and every
dissolved salt it was carrying stays behind, so the concentration in the sump
climbs steadily. **Bleed-off** (blowdown) is a continuous, deliberate discharge
of a proportion of the circulating water, roughly matched to the evaporation
rate, so that fresh make-up water dilutes the salts back down. Without it,
scale forms on the hottest surfaces — the condenser tubes — and condensing
temperature and power consumption climb.

Chemical treatment then deals with what dilution cannot: **inhibitors** slow
corrosion and electrolysis, **scale inhibitors** and dispersants keep hardness
in suspension, and **biocides** control algae, fungi and bacteria.

## What the treatment has to suit

Treatment is not a standard recipe. It depends on:

- **The supply water** — its dissolved solids, dissolved oxygen and carbon
  dioxide content. This alone can vary enormously: solids can more than double
  when a site switches from reservoir water to bore water.
- **What the air brings in** — a tower is an extremely efficient air scrubber.
  Exhaust and industrial fumes, dust, bacteria, algae and fungal spores all end
  up in the sump.
- **The materials of construction** — condenser tubes, tower fill and casing,
  pipework and pump internals. A chemical that protects steel may attack copper
  or galvanising.

Site conditions change the answer too. A tower in sea winds picks up salt; one
low in a city street picks up vehicle exhaust; one near a factory, boiler or
furnace picks up whatever comes off that stack. Because the wind changes, so
does the loading, which is why **testing must be frequent — daily, or weekly at
the very longest.** Anyone who has owned a swimming pool knows how fast clear
water can go milky or grow something; a tower takes in far more contamination
than a pool ever does.

Selecting a treatment properly needs a **chemical analysis of the water** and a
balance of chemicals chosen to offset it.

## The "no treatment" option, and why careless dosing is worse

Some plants have run for long periods with no chemical treatment at all, simply
by running a high bleed rate. That only works where water is cheap and
plentiful, and it does nothing about biological control. The important point is
comparative: **no treatment at all is better than careless treatment.** Dosing
chemicals without regular testing to regulate them can cause far more corrosion
than leaving the water alone would have.

## Water treatment contractors

Most major chemical companies sell a treatment service: supply of chemicals,
scheduled inspections and testing, and installation of an **automatic dosing
pump** controlled from conductivity and other measurements. Maintenance
contractors routinely use them. Unless you are genuinely expert in water
chemistry, that is the sensible route — you remain responsible for the plant,
but the dosing is being managed by someone who does it every day.

## Legionnaires' disease

Legionnaires' disease is a severe pneumonia caused by *Legionella*, a bacterium
that lives naturally in warm water environments. Both the illness and the
organism were identified after an outbreak at a 1976 American Legion convention
in Philadelphia. The same organisms also cause **Pontiac fever**, a much milder
flu-like illness from which most people recover in about five days without
hospital treatment.

**How it presents.** Symptoms appear **2 to 10 days** after exposure. Early
signs include loss of energy, headache, nausea, aching muscles, a high fever
often above **40 degrees C**, and chest pain. As it progresses it can affect
many body systems and mental function, and without effective treatment it can
kill. Survivors may live with fatigue, weakness, joint pain and concentration
problems for many months.

**How it is caught.** By **inhaling airborne water droplets** containing the
bacteria. It is **not contagious** — it does not pass from person to person.
That is why it is classed as an environmental disease, and why the control
strategy is to keep the bacteria out of the water in the first place.

**Who is most at risk.** The risk depends on the number of organisms reaching
the lungs and the resistance of the person. Healthy young people do get
Legionnaires' disease, but the higher-risk groups are:

- people whose immune systems are suppressed by illness or by treatment such
  as chemotherapy or anti-rejection medication
- people with chronic lung, kidney or heart disease, cancer, diabetes or HIV
- smokers
- people over 50.

**Where it lives.** *Legionella* is widespread in nature — deep wells, lakes,
mud, the moisture on rainforest leaves, and potting mix. In buildings, cases
are most often traced to **plumbing systems and air-conditioning systems**,
particularly in large buildings, where long pipe networks and cooling towers
offer plenty of warm stagnant water. Growth is supported at temperatures
**above about 20 degrees C and below about 50 degrees C**, given sediment,
nutrients from decaying matter, other micro-organisms and corrosion products to
feed on. Because infection comes from inhalation, anything that makes an
aerosol is the risk: **active cooling towers, evaporative coolers, spa pools
and misting devices**.

>! **Working on a cooling tower is the highest-exposure task a refrigeration
>! technician does.** Wear a HEPA-filtering respirator when cleaning a tower or
>! taking samples unless the tower fans are shut down — and especially if
>! contamination is suspected or hyperchlorination is under way. A full-face
>! mask leaks less than a half-mask, and fit is critical on either; a HEPA
>! filter still does not stop every organism. Add gloves, goggles and body
>! covering. Shut down and lock out the fans before entering the airstream.
>!
>! **AS/NZS 3666 Air-handling and water systems of buildings: microbial
>! control** sets the requirements for these systems, including the
>! recommended safety equipment. Part 2 drives the monthly inspection and
>! six-month maximum cleaning interval for cooling water systems, and in most
>! states cooling towers must also be registered with the local authority and
>! risk-managed under public health legislation.

## What to remember

- Bleed-off controls dissolved solids; chemicals control corrosion, scale and
  biology. You need both.
- Test daily, or weekly at the outside — conditions change with the wind.
- Careless dosing is worse than no dosing.
- Legionella grows between roughly 20 and 50 degrees C in water with sediment
  and nutrients.
- It is caught by breathing aerosol and is not passed person to person.
- HEPA respirator, goggles and gloves for tower work; fans off and locked out
  wherever possible.
`,
        quiz: [
          {
            q: "Why must bleed-off be maintained on a recirculating cooling tower even when chemicals are dosed correctly?",
            options: [
              "To keep the sump level constant",
              "Because evaporation leaves dissolved salts behind, so their concentration climbs until they scale the condenser tubes unless a proportion of water is continuously discharged and replaced",
              "To cool the water more effectively",
              "Because chemicals only work in flowing water",
            ],
            answer: 1,
            explain: "Only pure water evaporates; everything dissolved in it stays and concentrates. Bleed roughly matched to the evaporation rate holds that concentration down. Chemical inhibitors slow corrosion and scale formation but cannot remove salts from the system.",
          },
          {
            q: "Legionnaires' disease is contracted by:",
            options: [
              "Drinking contaminated water",
              "Contact with an infected person",
              "Inhaling airborne water droplets containing the bacteria; it is not transmitted person to person",
              "Skin contact with cooling tower sludge",
            ],
            answer: 2,
            explain: "It is an environmental disease: the route is inhalation of aerosol, which is why cooling towers, evaporative coolers, spa pools and misting devices are the equipment of concern. It is not contagious, so isolating a patient does nothing — cleaning the water source does.",
          },
          {
            q: "Which water temperature range best supports proliferation of Legionella when sediment and nutrients are present?",
            options: [
              "Below 5 degrees C",
              "Above about 20 degrees C and below about 50 degrees C",
              "Between 55 and 70 degrees C",
              "Only above 60 degrees C",
            ],
            answer: 1,
            explain: "The organism multiplies in warm water roughly between 20 and 50 degrees C, which is exactly the range a cooling tower sump sits in. Above about 55 to 60 degrees C the organism is killed, which is why hot water systems are stored hot; below 20 degrees C growth is very slow.",
          },
          {
            q: "A technician must clean a cooling tower on an occupied building while the fans are running. The minimum sensible precaution is:",
            options: [
              "A dust mask and safety glasses",
              "A HEPA-filtering respirator (preferably full-face), goggles, gloves and body covering — with fans shut down and locked out wherever possible",
              "Working upwind of the tower",
              "Hyperchlorinating first, then working without respiratory protection",
            ],
            answer: 1,
            explain: "Cleaning generates aerosol, which is the exact infection route, so HEPA-level respiratory protection with a good fit is the requirement — a nuisance dust mask does not filter bacteria-carrying droplets. Hyperchlorination increases the hazard rather than removing it, because it drives contaminated aerosol into the air.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "drives-and-couplings",
        title: "Alternative drives and drive couplings",
        minutes: 13,
        simple: "Not every compressor is turned by an electric motor bolted to the wall. Trucks, ships and remote sites use diesel engines, gas engines or hydraulics, and the power still has to get into the compressor shaft through a coupling and a key. Think of it as the drivetrain of a car: the engine is useless unless everything between it and the wheels is lined up and locked together properly.",
        refs: REFS_DRIVE,
        content: `
Most refrigeration compressors are driven by an electric motor. Where mains
power is not available — a truck, a trailer, a ship, a remote site — the
practical alternatives are **diesel engines, gas engines and hydraulic drives**.
Petrol engines were once used on small transport and mobile freezer units but
have been abandoned because petrol is always a fire hazard.

## Alternative drives

| Drive | Where it is used | Key points |
|---|---|---|
| **Diesel engine** | Transport refrigeration, some fixed plant | High flash point (about 80 degrees C) makes it far safer than petrol; thermal efficiency around 35 per cent; engine and compressor on a common frame, usually V-belt driven |
| **Gas engine** | Fixed plant, cogeneration and trigeneration | Runs on LPG, natural gas, butane or propane; cleaner exhaust, so preferred where ventilation is poor; jacket heat can be recovered for water heating |
| **Hydraulic drive** | Refrigerated transport, shipboard plant | Engine-driven pump feeds a hydraulic motor at the compressor through high-pressure lines; extremely flexible routing |
| **Diesel-electric combination** | Refrigerated vehicles | Both an engine and an electric motor in one package: standby if either fails, and the unit runs off mains overnight instead of idling the engine |

A transport diesel unit is supplied as a complete package — engine,
compressor, condenser, evaporator, evaporator fan and all temperature and
safety controls — designed to bolt into a prepared opening above the truck cab
in the insulated body.

In a **hydraulic** system the pump is driven mechanically from the vehicle's
main engine, often by belt off the tail shaft. It draws fluid from a reservoir
and pushes it out at high pressure, converting mechanical force into fluid
force. That fluid enters the hydraulic motor, forces its internals to rotate,
turns the compressor shaft, and is discharged at low pressure back to the pump.
Few power sources are as flexible as a confined liquid, which can be routed
anywhere a hose can go yet transmits force like a solid steel shaft.

**Magnetic clutch drive.** Automotive air-conditioners disengage the compressor
using an electromagnetic clutch. On the common **stationary field** type, the
field coil is mounted on the compressor body and fed from the vehicle battery
through a switch or thermostat. The rotor-and-pulley assembly turns
continuously on a bearing, while the armature is keyed to the compressor
crankshaft. Energise the coil and magnetic force pulls the armature into the
rotor so the two turn as one and the compressor runs; de-energise it and the
armature snaps back, stopping while the rotor keeps spinning. The **rotating
field** type works the same way but the field turns with the rotor and is fed
through brushes. Coils are voltage-specific (typically 6 V or 12 V), and the
air gaps between field and rotor and between armature and rotor must be set to
the service manual figures — too wide and it slips, too tight and it drags.

## Getting the power into the compressor: couplings

Two methods dominate: **V-belts** and **direct couplings**.

**Solid (rigid) couplings** are only used where shafts can be aligned very
accurately. A **compression coupling** uses a slotted sleeve over both shaft
ends; one saw cut runs the full length and others run alternately from each
end, so that when conical flange bores are drawn together by four bolts, the
sleeve grips both shafts. A **flanged coupling** bolts two shaft flanges
together, with either fitted bolts or spigotted faces for location, and
recessed or shrouded bolt heads for safety.

**Flexible couplings** absorb vibration, tolerate a small amount of
misalignment and make it far easier to remove either machine. Common types:

- rubber "spider" between two metal flanges — torque goes through oil-resistant
  rubber
- flexible disc couplings
- hose type, clamped, only used on small machines
- detachable duplex chain, for quick disconnection
- pin-and-bush, where studs carrying rubber bushes engage clearance holes in
  the mating disc, so either shaft can be lifted clear once the bushes are out
- universal joints, where shafts sit at an angle to one another, or where the
  angle changes while running.

> Flexible does not mean forgiving. Even flexible couplings are not designed to
> absorb misalignment you could see by eye — they exist to absorb vibration and
> tiny errors, not sloppy setting up.

## Keys

A key stops the hub of a pulley or coupling slipping on the shaft. Light drives
may use grub screws or collets instead; heavy intermittent drives use both.

| Key type | Shape and fit | Typical use |
|---|---|---|
| **Woodruff** | Semi-circular, sits in a milled slot; firm in the shaft, easier in the hub | Small pulleys and couplings, alternators |
| **Square** | Keyway depth half the key width; small top clearance, minimal side clearance | General couplings and pulleys |
| **Feather** | Like a square key but in a stopped slot, fitted with top clearance | Fixed or sliding drives — gears, levers, machine spindles |
| **Gib-headed taper** | Taper of 1:100 in the hub keyway; fitted with bearing blue and filed for contact on four faces; head aids extraction | Large or heavy drives |

>! An over-tight key driven home can split a pulley or coupling hub, which then
>! bursts at speed. A loose key wears its keyway and lets the hub work off.
>! Keys must never project past the end of the shaft. If two keys or grub
>! screws are used in one hub, set them **90 degrees apart, not 180 degrees**,
>! or they will loosen each other. Never run a belt or coupling drive without
>! its guard.

## Coupling alignment

Misalignment causes vibration, noise, coupling failure, bearing failure and
eventually a bent or broken shaft. A typical method:

1. Level and firmly bolt down the machine with the **higher** shaft centre.
2. Shim the feet of the lower machine until the coupling rims are at the same
   height and parallel (assuming equal coupling diameters). Use as few, as
   thick, as flat and as smooth shims as possible, and prefer **steel** shims
   to brass. Check the outer edges with a straight edge.
3. Check the gap between coupling faces at several points with a feeler gauge,
   then rotate **one shaft only** through 180 degrees and re-check. Any change
   means a bent shaft or a defective coupling, not a shimming problem.

A dial indicator on a magnetic base is better still: take readings all round,
adjust, and repeat until the readings are equal at every position.

**Alignment tolerances: solid coupling 0.02 mm, flexible coupling 0.15 mm.**

## What to remember

- Diesel is preferred over petrol for its high flash point (about 80 degrees C)
  and roughly 35 per cent thermal efficiency.
- Gas engines give a cleaner exhaust and their jacket heat can be recovered.
- Hydraulic drives buy routing flexibility: a pump, high-pressure lines and a
  motor at the compressor.
- Rigid couplings demand near-perfect alignment; flexible couplings absorb
  vibration and *small* errors only.
- Align to 0.02 mm on a solid coupling, 0.15 mm on a flexible one.
- Two keys or grub screws in one hub go 90 degrees apart, never 180.
`,
        quiz: [
          {
            q: "Why has petrol been abandoned as a drive for transport refrigeration in favour of diesel?",
            options: [
              "Petrol engines cannot produce enough torque",
              "Petrol is a constant fire hazard, whereas diesel has a high flash point of about 80 degrees C",
              "Petrol engines cannot be belt-coupled to a compressor",
              "Petrol is not available at truck depots",
            ],
            answer: 1,
            explain: "The decision is a safety one: petrol vapour ignites readily at ambient temperature, while diesel's flash point near 80 degrees C makes it far safer around an insulated load and a running refrigeration unit. Diesel also gives around 35 per cent thermal efficiency, so it is economical as well.",
          },
          {
            q: "A refrigerated truck unit has both a diesel engine and an electric motor. The main operational advantage is that:",
            options: [
              "The two drives share the load, halving wear on each",
              "The unit can run from mains power overnight instead of idling the engine, and either drive acts as standby if the other fails",
              "The electric motor charges the truck batteries while the engine runs",
              "It removes the need for a temperature controller",
            ],
            answer: 1,
            explain: "Combination units exist for standby and for cheap, quiet, low-wear operation on mains power when the vehicle is parked. They do not run both drives together, and battery charging is done by the alternator, not by the drive motor.",
          },
          {
            q: "When aligning a direct-coupled compressor and motor, the coupling gap is checked with a feeler gauge, then one shaft is rotated 180 degrees and the gap changes. This indicates:",
            options: [
              "The machines need more shims under the lower one",
              "A bent shaft or a defective coupling — not a shimming problem",
              "The coupling is a flexible type and this is normal",
              "The gap should always be measured with the shafts stationary",
            ],
            answer: 1,
            explain: "Shimming errors are fixed in space, so they produce a constant gap variation around the coupling. A gap that changes as one shaft turns means that shaft or its coupling half is running out of true, and no amount of shimming will correct it.",
          },
          {
            q: "Two grub screws are to be fitted in a pulley hub. They should be positioned:",
            options: [
              "180 degrees apart, so their clamping forces balance",
              "90 degrees apart, because screws set 180 degrees apart tend to loosen each other",
              "Side by side on the keyway",
              "At any spacing, provided both are tight",
            ],
            answer: 1,
            explain: "Directly opposed fasteners work against one another and back off in service. Setting them 90 degrees apart makes each one bear on a different part of the shaft and locks the hub far more reliably. The same rule applies to a pair of keys.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "belts-bearings-lubricants",
        title: "Belt drives, bearings and lubricants",
        minutes: 14,
        simple: "Belts and bearings are what most maintenance work actually consists of. A belt has to be the right size, lined up, and tensioned just enough — too loose it slips and burns, too tight it destroys the bearings either side. Bearings are precision parts that hate dirt and hammers, and every one of them lives or dies on having the right oil or grease in the right amount.",
        refs: REFS_DRIVE,
        content: `
Most of the work that comes out of a maintenance inspection is not exotic. It
is replacing V-belts, replacing bearings, re-aligning pulleys and couplings,
and putting the right lubricant back in. These are the mechanical skills that
decide whether a fan, pump or open compressor runs for a decade or comes back
in six months, and every one of them is done wrong more often than it is done
right.

## V-belt drives

The V-belt is the standard drive for open compressors and large fans: cheap,
quiet, easy to fit, low maintenance, and it cushions shock between driver and
driven machine.

**How the wedge works.** The included belt angle is **40 degrees** and the
pulley groove angle is made slightly less. As the belt bends around the pulley
its section is squeezed, it widens, and it wedges into the groove; as it
straightens on the way out it relaxes and releases. Loading it makes it wedge
harder, which is why there must always be **clearance between the bottom of the
belt and the root of the groove** — a belt riding on the bottom of a worn
groove has lost its wedge and will slip.

The load is carried by non-stretching cords lying on the belt's pitch line, in
rayon, nylon, polyester, steel or fibreglass, inside a rubberised fabric
jacket. That jacket is easily wrecked by levering a belt over a pulley land —
always slacken the adjuster instead.

**Sections and sizes.** Belts and pulleys are dimensioned on **pitch width**,
not top width. A pulley's **pitch circle diameter (PCD)** is measured at the
groove pitch width, and a belt's **pitch length (PL)** at its own pitch width.
Pitch widths run about 80 to 90 per cent of top widths, and PCDs about 90 per
cent of outside diameters.

| Section | Pitch width (mm) | Top width (mm) | Height (mm) | Angle | Usual power |
|---|---|---|---|---|---|
| Y | 5.3 | 6.5 | 4 | 40 degrees | very small drives |
| Z | 8.5 | 10 | 6 | 40 degrees | very small drives |
| A | 11 | 13 | 8 | 40 degrees | 0.3 to 4 kW |
| B | 14 | 17 | 11 | 40 degrees | 1.5 to 20 kW |
| C | 19 | 22 | 14 | 40 degrees | 10 to 55 kW |
| D | 27 | 32 | 19 | 40 degrees | 35 to 75 kW |

Y and Z suit single-belt domestic and light machinery; A, B, C and D are the
industrial sections used singly or in matched sets.

A belt is specified by section and pitch length in millimetres, for example
**B 1760**. A pulley is specified by number of grooves, section and PCD: **3A
150** is a three-groove A-section pulley of 150 mm PCD (about 157 mm outside
diameter). Metric and imperial belts and pulleys of equivalent size
interchange.

**Matched sets.** To carry more power without jumping to a huge section, use a
multi-groove pulley and several belts — but they must be a **matched set**, or
the shortest belt takes all the load and fails. Matching is by a code number
after the size, as in **B 1760-50**. Code 50 means the belt measures exactly
its nominal pitch length; every unit away from 50 is 2 mm, so code 48 is 4 mm
**under**-length and 52 is 4 mm over. All belts in a set must carry the same
code. A "common back" belt — several V sections joined by a single backing —
is the alternative.

**Pitch length formula** (for information; use the manufacturer's tables in
practice):

L = 2C + 1.57(D + d) + (D - d) squared / (4C)

where L is belt pitch length, D the PCD of the larger pulley, d the PCD of the
smaller, and C the centre distance. Selection charts for section, length, power
and speed come from the belt manufacturer's catalogue or **AS 2784**.

**Tension.** Use the *minimum* tension that transmits full power without
slipping. Over-tensioning kills bearings and belts early; under-tensioning
causes slip, power loss, overheating, rapid belt wear and groove wear — worst
of all in aluminium pulleys. AS 2784 gives the proper method: apply a measured
force with a spring scale at the centre of the span and measure the deflection,
with the required force taken from a table based on section, length, speed
range and pulley diameter. Re-check after the run-in period, because new belts
seat and lose tension.

**Alignment.** Use a straight edge, or a taut line (wire, string or fishing
line) touching all four pulley rims with equal pressure. Pulleys can be out
parallel or angular; a carelessly used taut line can also give a false reading.
If the two machines are not on a common or parallel base there can be
**vertical** misalignment that a check at one point will not reveal, so repeat
the check at a second point. When sighting on outside rims, make sure the land
widths are equal. **Tolerance is 1 mm per metre of span** unless specified
otherwise.

**Limits.** Centrifugal force limits belt speed to about **50 m/s**, and belt
life falls off sharply above **80 degrees C** or below **-15 degrees C**.

### Speed calculation

For any belt drive:

**diameter A x speed A = diameter B x speed B**

*Example 1 — check.* A 100 mm pulley running at 16.66 r/s drives a 50 mm
pulley: 100 x 16.66 = 1666, and 50 x 33.33 = 1666. The small pulley therefore
runs at **33.33 r/s** — halve the diameter, double the speed.

*Example 2 — sizing.* A 200 mm driver runs at 24 r/s and the driven machine
must run at 33.33 r/s. Rearranging:

diameter B = (diameter A x speed A) / speed B = (200 x 24) / 33.33 = **144 mm
PCD**.

### Belt drive fault-finding

| Symptom | Likely causes | Action |
|---|---|---|
| Rapid belt wear | Rubbing guard, worn grooves, mismatched belts, slip, abrasive dust, misalignment, wrong section | Check guard and grooves, replace worn pulleys, fit matched belts of correct section, tension, shield the drive, realign |
| Belts turning over | Broken cords from prying belts on, misalignment, overload, slack belts on a vibrating drive, stones under the belt | Never lever belts on, realign, redesign the drive, replace belts, fit guards |
| Belts slipping | Insufficient tension, overload, belts bottoming in worn grooves, oil from leaking bearings | Tension correctly, redesign, replace pulleys, fix the leak |
| Squeal | Overload, too little arc of contact, low tension | Redesign, increase centre distance, tension |
| Split or cracked belts | Undersized pulleys, slipping, heat above 80 degrees C | Redesign, cure the slip, ventilate the drive |
| Belts swollen and soft | Oil, solvent or vapour attack on the rubber | Find and remove the contaminant |
| Some belts tight, others loose | Mixed codes or manufacturers, worn or unevenly machined grooves | Fit one matched set from one maker; check grooves |
| Belt whipping | Shaft deflection, uneven load, faulty section, low tension on long centres | Check shaft and load, re-tension |

## Bearings, briefly

Bearings support and guide moving parts with minimum friction. Two families
appear in this trade:

- **Sleeve (plain) bearings** — a bush of bronze, sintered metal or plastic
  pressed into a housing. Bronze bushes usually need reaming to size after
  fitting and oil holes drilled. **Sintered** bushes are porous and are soaked
  in oil for 24 hours before fitting; they must **never** be reamed or
  machined, because that closes the pores and destroys their self-lubricating
  action.
- **Anti-friction bearings** — ball and roller types, made of an inner and
  outer hardened race, rolling elements, and usually a cage. Ball types include
  deep-groove (radial plus a little thrust), angular contact (combined loads,
  often in back-to-back pairs), pure thrust and self-aligning. Roller types
  include cylindrical (line contact, higher load, no thrust capacity), tapered
  (heavy combined loads), spherical or barrel (severe duty, tolerates 2 to 3
  degrees of misalignment) and needle (where radial space is tight).

Sleeve bearings are cheap, quiet, immune to storage damage and cannot brinell.
Anti-friction bearings have lower friction, are easy to replace, seal and
lubricate, and handle high speeds and heavy loads.

**Brinelling** is the pitting of races that happens when a machine stands
stationary and vibrates — a standby unit next to a running one, or a machine
being trucked. The full rotor weight sits on a few tiny contact points instead
of being spread around the track. Large machines have their rotors blocked or
packed for transport for this reason.

**Handling and fitting.** Careless handling causes most bearing failures.
Store dry and clean, do not unwrap until the moment of fitting, never handle
with dirty hands or use contaminated grease, and **never spin a bearing with
compressed air** — that permanently damages it. Grease no more than about half
the free space in the housing, or churning will overheat it.

To remove a bearing, apply force **only to the ring that is tight**: the inner
ring when pulling off a shaft, the outer ring when pulling from a housing.
Never press on the loose ring. To fit, the preferred order is **induction
heating, oil bath heating, chilling the shaft, arbor or hydraulic press, drive
on with a sleeve, and finally drive on with a soft punch.** Heat only to
**80 to 90 degrees C** — an induction heater reaches that in around 25 seconds
on a typical 50 mm bore bearing — and slide the hot bearing home firmly against
its abutment before it cools.

>! A bearing race under press load can shatter and throw fragments. If a press
>! seems to need very high force, stop and find out why. Wear eye protection.
>! Chilling shafts with dry ice (-79 degrees C) or liquid nitrogen
>! (-196 degrees C) causes severe freeze burns on contact; liquid nitrogen
>! splashed in the eye can freeze the eyeball and blind you. Gloves and eye
>! protection are mandatory, and work only in ventilated space.

## Lubricant properties

A lubricant has four jobs: **reduce friction and wear, carry heat away from the
working surfaces, seal out contamination, and prevent rust and corrosion.**

Viscosity is the property to get right. An oil too light for the duty breaks
down quickly and the film fails; an oil too heavy runs hot and wastes power
because the film cannot get into the friction zone. Temperature swings the
same way — an oil that is stiff on a cold morning will not reach the bearing,
and an oil that is too thin will run out of it on a hot afternoon. Gear oils
are heavy and carry anti-foam, anti-wear, extreme-pressure, corrosion and
oxidation additives.

**Refrigeration compressor lubricants are a special class.** They must be
wax-free, dehydrated, still flow at low temperature, and be chemically
compatible with both the refrigerant and every material inside the compressor.
Never put anything but a refrigeration lubricant into a sealed system. Keep the
container closed whenever it is not in use, and be especially careful with
synthetics such as **polyol ester (POE)**, which are strongly hygroscopic and
can absorb enough atmospheric moisture in a short time to be unusable.

## What to remember

- A V-belt grips by wedging on the groove flanks at 40 degrees — it must never
  touch the bottom of the groove.
- Belts are sized on pitch length and pulleys on PCD, and matched sets must all
  carry the same length code.
- Tension to the minimum that transmits full power, then re-check after run-in.
- Pulley alignment tolerance is 1 mm per metre of span; check at two points to
  catch vertical misalignment.
- Speed law: diameter A x speed A = diameter B x speed B.
- Fit bearings with heat (80 to 90 degrees C), not hammers, and never load the
  loose ring.
- Only refrigeration-grade lubricant goes in a sealed system, and POE must be
  kept sealed against moisture.
`,
        quiz: [
          {
            q: "Two belts on a matched pair drive are marked B 1760-50 and B 1760-48. What is wrong?",
            options: [
              "Nothing — the codes are batch numbers",
              "The 48-coded belt is about 4 mm shorter, so it will carry most of the load and fail early; all belts in a set must share the same code",
              "The 48-coded belt is a different section",
              "The 48-coded belt has a 48 degree included angle",
            ],
            answer: 1,
            explain: "Each unit of code represents 2 mm, so code 48 is 4 mm under nominal pitch length. In a set, the shortest belt takes up the drive first and carries a disproportionate share of the torque. Matching by code is the whole point of the system.",
          },
          {
            q: "A V-belt is found to be riding on the bottom of the pulley groove. What does this mean?",
            options: [
              "The tension is too high",
              "The pulley grooves are worn, so the belt has lost its wedge action and will slip regardless of tension",
              "The belt section is too small in height only",
              "The alignment is out by more than 1 mm per metre",
            ],
            answer: 1,
            explain: "A V-belt grips because it wedges against the groove flanks, which requires clearance under the belt. Once wear lets the belt bottom out, the flanks no longer grip and adding tension only destroys bearings. The pulley must be replaced.",
          },
          {
            q: "A 250 mm driver pulley on a 24 r/s motor drives a fan that must run at 40 r/s. What driven PCD is required?",
            options: ["150 mm", "417 mm", "96 mm", "180 mm"],
            answer: 0,
            explain: "Using diameter A x speed A = diameter B x speed B: (250 x 24) / 40 = 6000 / 40 = 150 mm. The driven pulley must be smaller than the driver to run faster — 417 mm would slow the fan down, which is the sign of dividing the wrong way round.",
          },
          {
            q: "Which method of fitting a bearing to a shaft is most preferred, and what temperature limit applies?",
            options: [
              "Driving on with a punch, no temperature limit",
              "Induction heating, with the bearing heated to no more than 80 to 90 degrees C",
              "Oxy-acetylene heating to about 200 degrees C",
              "Pressing on the outer race with a hydraulic press",
            ],
            answer: 1,
            explain: "The preferred order is induction heating, oil bath, chilled shaft, press, sleeve, then punch as the last resort. Heating past 80 to 90 degrees C risks tempering the hardened races. Pressing on the outer race when fitting to a shaft forces load through the rolling elements and brinells the bearing.",
          },
          {
            q: "Why must polyol ester (POE) lubricant containers be kept tightly closed?",
            options: [
              "The oil evaporates rapidly",
              "POE is strongly hygroscopic and absorbs atmospheric moisture quickly, which contaminates the system and can form acids",
              "It becomes flammable when exposed to air",
              "Open containers lose their additives to sunlight",
            ],
            answer: 1,
            explain: "POE pulls moisture out of the air far faster than mineral oil, and moisture in a sealed system means acid formation, copper plating and eventually a burnout. An open POE container on the van is contaminated stock, whatever it looks like.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
