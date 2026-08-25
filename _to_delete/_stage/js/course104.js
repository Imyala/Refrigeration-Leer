/* =========================================================================
   Course content, module R1.4 — Evaporators.
   Source: Australian Refrigeration and Air-conditioning, Volume 1 (Graham
   Boyle, pub. AIRAH), Chapter 4 — Evaporators.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BOOK = "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — ";
  const REFS = [BOOK + "Chapter 4, Evaporators"];
  function ref() {
    return Array.prototype.slice.call(arguments).map(function (t) { return BOOK + t; });
  }

  const MODULES = [
  {
    id: "v1-evaporators",
    stream: "v1",
    title: "R1.4 · Evaporators",
    blurb: "The component that actually does the cooling: how evaporators are classified and built, how air and liquid coolers differ, and how to size one with Qh = A x U x TD.",
    lessons: [

      /* ================================================================
         1 — What an evaporator does
         ================================================================ */
      {
        id: "what-an-evaporator-does",
        title: "What the evaporator actually does",
        minutes: 10,
        simple: "The evaporator is the only part of a fridge that does the job the customer is paying for: it soaks up heat. Think of it as a wet sponge that is always colder than the room, so heat keeps soaking into it, and the liquid inside boils away carrying that heat off to the compressor. Everything else in the machine exists to keep that sponge cold and keep it wet.",
        refs: ref("Chapter 4, introduction and definition of evaporators", "Chapter 4, evaporators as heat-transfer vessels"),
        content: `
Every other component in a refrigeration system is support staff. The compressor
raises pressure, the condenser dumps heat outside, the metering device controls
the liquid supply — but none of them cool anything the customer cares about. The
evaporator is where the machine earns its keep, and it is the one place where
heat actually leaves the product.

## The definition, and why the wording matters

An evaporator is a **heat-transfer vessel in which refrigerant is vaporised in
order to remove heat from a refrigerated space or material**. Read that
definition again and notice what it does *not* say. It says nothing about size,
nothing about shape, nothing about whether air or water or a block of fish goes
past it. That silence is deliberate. An evaporator is simply a vessel with cold
boiling refrigerant on one side and a load on the other, so designers are free to
shape it however the product demands: a hairpin coil with fins for a coolroom, a
flat stainless plate for the bottom of a milk vat, a shell full of tubes for a
chilled-water plant, or a bank of hollow plates that clamp onto cartons of prawns.

## Where it sits in the cycle

The vapour-compression cycle is four jobs, not four boxes:

1. compress the vapour to a high pressure and temperature
2. condense that high-pressure vapour back to liquid by cooling it
3. evaporate the liquid at low pressure and low temperature
4. control the supply of liquid into step 3

!FIG[cycle-loop]

Steps 1 and 2 you have already met. This module is step 3, and step 4 is the
expansion device that feeds it. The evaporator and the metering device are always
studied as a pair, because a coil is only as good as the liquid supply it gets.

## Why boiling, instead of just blowing cold liquid through a pipe?

Because latent heat is enormous compared with sensible heat. When a refrigerant
boils, it absorbs a large quantity of heat per kilogram at an essentially
constant temperature. Two consequences follow, and they shape everything a
technician does at a coil:

- **The coil surface stays at roughly one temperature end to end**, because while
  liquid and vapour coexist, pressure fixes temperature. That is why you can read
  a suction gauge and know the coil temperature.
- **A small mass flow removes a large amount of heat**, so the pipework and the
  compressor stay a sensible size.

Contrast that with a water or brine coil, which we will meet later in this
module. Chilled water gets *warmer* all the way through the coil, because it only
carries sensible heat. That difference — constant temperature versus a rising
temperature — is the single clearest way to tell a real evaporator from a coil
that merely looks like one.

## Heat only flows downhill

Heat moves from hot to cold, so the coil must be colder than whatever it is
cooling. The gap between the two is the **temperature difference (TD)**, and it
is one of only three things that decide how much heat a coil can move. The other
two are the **surface area (A)** in contact with the load and the **coefficient
of heat transfer (U)** of the vessel itself. The whole of the calculation work
later in this module is built on this one relationship, so it is worth meeting it
early:

Qh = A x U x TD

A big coil at a small TD and a small coil at a big TD can shift exactly the same
number of watts — but as you will see, they produce completely different
humidities in the room, which is why coil selection is a design decision and not
just an arithmetic one.

## Evaporator and condenser are the same animal

There is no fundamental design difference between an evaporator and a condenser.
Both are heat-transfer vessels; one boils refrigerant and the other condenses it.
The proof sits on the wall of half the houses in Australia. In a reverse-cycle
split system the indoor coil absorbs heat in summer, then in winter the reversing
valve swaps the direction of refrigerant flow and that same indoor coil rejects
heat into the room while the outdoor coil absorbs heat from cold outside air. The
hardware did not change — only the job did.

!FIG[reversing-valve]

## What a healthy evaporator looks like

The tube walls should be **wet with liquid refrigerant over essentially the whole
circuit**, with the refrigerant in a saturated condition, boiling and turbulent.
Only the last short length of the circuit should be dry vapour, picking up the
superheat that protects the compressor.

> If liquid refrigerant only reaches 75 per cent of the way through a coil, that
> coil cannot deliver more than about 75 per cent of its rated capacity. Nothing
> you do to the fan, the thermostat or the room will get that missing 25 per cent
> back — the surface has to be wetted to work.

A coil under a decent load is actually *more* efficient than a lightly loaded
one, because vigorous boiling keeps the refrigerant churning against the tube
wall. A lazy, half-starved coil transfers heat poorly and frosts unevenly, and
that uneven frost pattern is one of the most useful diagnostic clues you will
ever get for free.

## On the job

- The evaporator is the load-facing component: every complaint about temperature,
  humidity, ice or product quality lands here first.
- Coil temperature comes from suction pressure, because the coil is saturated.
- Uneven frost or partial cooling means the liquid is not reaching all of the
  coil — suspect the metering device, charge, distribution or oil before blaming
  the coil itself.
- Evaporators and condensers obey the same three variables: area, U factor and TD.
`,
        quiz: [
          {
            q: "A technician insists an evaporator must always be a finned coil with a fan. Why is that wrong?",
            options: [
              "Because fins are only permitted on condensers",
              "Because the definition of an evaporator sets no limit on size, shape or construction — it is any vessel in which refrigerant is vaporised to remove heat",
              "Because fans always reduce heat transfer",
              "Because evaporators must always be made of steel",
            ],
            answer: 1,
            explain: "The definition is deliberately open: an evaporator is a heat-transfer vessel in which refrigerant is vaporised to remove heat from a space or material. Finned fan coils are common, but flat plates, bare pipes, shells full of tubes and cascade plates are all evaporators too. Fins are simply one way of increasing area when the load is air.",
          },
          {
            q: "What is the clearest operational difference between a refrigerant evaporator and a chilled-water coil that looks identical to it?",
            options: [
              "The evaporator carries no oil",
              "The chilled-water coil always has more fins",
              "The refrigerant stays at essentially one temperature while it boils, whereas the water rises in temperature continuously through the coil",
              "The chilled-water coil operates at a higher pressure",
            ],
            answer: 2,
            explain: "Boiling refrigerant absorbs latent heat at a constant saturation temperature, so the surface temperature is nearly uniform. Water carries only sensible heat, so it gets steadily warmer as it travels through. Fin count and pressure vary with the design and prove nothing.",
          },
          {
            q: "A coil is only being wetted with liquid refrigerant for about three-quarters of its circuit length. What is the best estimate of its capacity?",
            options: [
              "Full capacity, because the dry part still superheats",
              "About 75 per cent of rating, because heat transfer needs a wetted primary surface",
              "About 50 per cent, because dry tube reverses heat flow",
              "Slightly above rating, because superheat adds cooling",
            ],
            answer: 1,
            explain: "Heat transfer into a dry, superheated section of tube is a small fraction of what a wetted, boiling section achieves, so capacity falls roughly in step with the wetted fraction. Superheat is necessary to protect the compressor but it contributes very little cooling, so it never makes up the shortfall.",
          },
          {
            q: "Why does a reverse-cycle split system prove that evaporators and condensers are fundamentally the same device?",
            options: [
              "Because the reversing valve changes the refrigerant into a different fluid",
              "Because both coils are always the same physical size",
              "Because reversing the refrigerant flow makes the indoor coil condense and the outdoor coil boil, using the identical hardware",
              "Because heat pumps do not need a compressor",
            ],
            answer: 2,
            explain: "Both are heat-transfer vessels; only the direction of flow and the pressure they see decide whether the refrigerant boils or condenses inside. That is why the same coil can do either job in a heat pump. Outdoor coils are often physically larger, but that is a selection choice, not a difference in kind.",
          },
        ],
      },

      /* ================================================================
         2 — Classification
         ================================================================ */
      {
        id: "classifying-evaporators",
        title: "How evaporators are classified",
        minutes: 12,
        simple: "There are hundreds of evaporator designs, so the trade sorts them into families by asking five simple questions: what are you cooling, what shape is it, what moves the load past it, will it ice up, and how is the liquid fed in? Like sorting tools into drawers, the drawers matter more than remembering every single tool.",
        refs: ref("Chapter 4, general classification of evaporators", "Chapter 4, direct expansion and flooded evaporators"),
        content: `
Manufacturers' catalogues throw a lot of names at you: DX coil, flooded chiller,
gravity coil, plate freezer, IDC, liquid overfeed bank. They are not random. Every
evaporator can be placed on five separate scales at once, and a single coil has a
position on all five. Learn the scales and the names stop being vocabulary and
start being a description.

## (1) By the job it does

| Classification | What is being cooled | Typical example |
|---|---|---|
| Air cooling | Air in a room, cabinet or duct | Coolroom fan coil, A/C indoor coil |
| Liquid cooling | Water, brine, milk, beer, glycol | Shell-and-tube chiller, milk vat |
| Contact cooling and freezing | The product itself, touching the metal | Plate freezer, ice maker |

## (2) By physical construction

| Type | Where it is used |
|---|---|
| Bare tube | Mainly liquid cooling; also freezer air cooling where frost is heavy |
| Plate surface | Domestic refrigerators and freezers, contact cooling, commercial and industrial plate banks |
| Finned | Mostly air cooling, natural or forced convection |
| Shell and tube | Refrigerant in a tank-like shell with the cooled liquid inside straight or coiled tubes (or the reverse) |

## (3) By how the cooled medium circulates

- **Natural or gravity convection** — nothing drives the air or liquid except its
  own change in density. Cooled air gets heavier and sinks, warm air rises to
  take its place, and the cabinet stirs itself.
- **Forced convection** — a fan or a pump pushes or draws the medium across the
  surface. Far more heat per square metre, at the cost of energy, noise and
  moisture loss from the product.

## (4) By whether it frosts

This one drives fin spacing more than anything else, so it is worth memorising.

| Class | Operating condition | Typical fin spacing |
|---|---|---|
| Frosting | Coil runs below 0 degrees C and frost is accepted between manual defrosts | Bare pipe, plate, or widely spaced fins |
| Defrosting | Frost is allowed to build to under about 1 mm during the on cycle, then removed in the off cycle or at set intervals | Closer fins, around 150 fins per metre for automatic-defrost freezers |
| Non-frosting | Coil is warm enough that ice never forms | Very close, roughly 300 to 550 fins per metre as in air-conditioners |

Defrosting is entirely a function of the control devices fitted. It may rely on
nothing but room air during the off cycle, or it may be heat assisted with
electric elements or hot gas — the fin spacing simply has to suit whichever
method the designer chose.

## (5) By refrigerant control and the state of refrigerant inside

This is the classification that changes how the system is piped, charged and
serviced.

### Direct expansion (DX, or dry expansion)

Liquid enters one end of the tube through a restriction — a thermostatic
expansion valve, a capillary or an orifice — and boils progressively as it
travels along. Correctly controlled, the last of the liquid disappears just
before the tube outlet, so the suction line receives dry, slightly superheated
vapour and nothing else. DX coils hold a small refrigerant charge, need no pumps
and no level controls, and are by far the most common arrangement in commercial
work.

!FIG[txv-balance]

### Flooded

The evaporator is a tank, or a header feeding a bank of tubes, and a level
control — usually a float valve, sometimes a level-controlling expansion valve or
a restrictor — maintains a set depth of liquid refrigerant in it. The tubes are
submerged, so the wetted-surface problem solves itself. Vapour boils off the
liquid surface and leaves from the top of the vessel, generally through a spray
eliminator or a surge drum so that liquid droplets do not reach the compressor.

> Flooded evaporators are often *assumed* to be more efficient than DX types.
> There are so many variables involved that there is little hard evidence for
> this in general — the clear exception is liquid cooling, where flooded
> shell-and-tube chillers really are outstanding performers.

The price of a flooded design is a large refrigerant charge, a level control to
maintain, and an oil-return problem: oil that arrives with the refrigerant has
nowhere to go and accumulates in the vessel, so purpose-built oil rectification
or draining is essential.

### Liquid overfeed (liquid recirculation)

A third arrangement sits between the two and dominates large industrial ammonia
plants. A pump — or in pumpless designs, gas pressure — deliberately feeds each
evaporator with **several times more liquid than it can boil**. Typical
recirculation rates are around three to four times the evaporated quantity for
ammonia, and a little lower for halocarbons. The surplus liquid returns with the
vapour to a low-pressure receiver (accumulator), where liquid and vapour separate;
vapour goes to the compressor, liquid is pumped around again.

Why bother? Because every tube in every coil is guaranteed wet, all the time, at
any load, with no superheat penalty and no valve hunting. Hand (manual) expansion
valves are commonly used instead of TX valves to set the feed rate on these
systems, and they are adjusted so that little or no flood-back occurs at maximum
load — which means that at part load, surplus liquid floods back to the
accumulator, exactly as intended.

| Feature | DX | Flooded | Liquid overfeed |
|---|---|---|---|
| Liquid feed | Metered, just enough to boil | Level maintained in vessel | 3 to 4 times what boils |
| Suction leaving the coil | Superheated vapour | Saturated vapour | Wet vapour plus liquid |
| Refrigerant charge | Small | Large | Large |
| Wetted surface at part load | Falls away | Maintained | Maintained |
| Typical use | Commercial DX coils and chillers | Shell-and-tube chillers, industrial banks | Large ammonia cold stores and freezers |

>! Flooded and overfeed vessels contain a substantial liquid charge, and with
>! ammonia that charge is toxic and flammable. Never break into a flooded vessel,
>! surge drum or low-pressure receiver without isolating and pumping down under a
>! documented procedure, and never assume a vessel is empty because the sight
>! glass looks clear.

## What to remember

- Five scales: job, construction, circulation, frosting, and refrigerant control.
- Fin spacing follows the frosting class, not the other way round.
- DX means metered feed and superheated suction; flooded means a maintained
  liquid level; overfeed means deliberate surplus liquid returned to a receiver.
- Overfeed and flooded designs guarantee a wet surface but pay for it in charge
  size and oil management.
`,
        quiz: [
          {
            q: "An air-cooling coil is described as 'non-frosting'. What fin spacing would you expect, and why?",
            options: [
              "Very wide, around 40 fins per metre, so ice cannot block it",
              "Very close, around 300 to 550 fins per metre, because ice never forms so blockage is not a risk",
              "Around 80 fins per metre, matching a natural-convection freezer coil",
              "Fin spacing is unrelated to frosting class",
            ],
            answer: 1,
            explain: "Non-frosting means the coil operates above freezing, so the designer can pack fins as tightly as airflow allows and get maximum area in minimum volume — typically 300 to 550 fins per metre in air-conditioning duty. Wide spacing of 40 to 80 fins per metre is what you use when ice is expected and must not bridge the gaps.",
          },
          {
            q: "What most clearly distinguishes a liquid overfeed evaporator from a DX evaporator?",
            options: [
              "Overfeed coils use no expansion device at all",
              "Overfeed coils are deliberately fed with far more liquid than they can boil, and the surplus returns to a low-pressure receiver",
              "Overfeed coils operate with much higher superheat",
              "Overfeed coils have no fins",
            ],
            answer: 1,
            explain: "Overfeed circulates roughly three to four times the evaporated mass so every tube stays wet at any load; the excess liquid separates out in the low-pressure receiver and is pumped round again. DX meters just enough liquid to boil dry by the coil outlet. Overfeed coils leave the evaporator with wet vapour, so superheat is essentially zero — the opposite of option three.",
          },
          {
            q: "A trainee says flooded evaporators are always more efficient than DX. What is the accurate position?",
            options: [
              "Correct — flooded is always more efficient in every application",
              "It is a common assumption with little supporting evidence in general, although flooded designs do excel in liquid-cooling duty",
              "Wrong — flooded evaporators are always less efficient",
              "It depends only on the refrigerant used",
            ],
            answer: 1,
            explain: "The wetted-surface argument sounds convincing, but with so many variables in play the general claim is not well supported. Liquid cooling is the recognised exception, where flooded shell-and-tube chillers genuinely perform very well. Blanket statements in either direction are unsafe.",
          },
          {
            q: "On an ammonia liquid recirculation system, how should the manual expansion valve feeding a coil be set?",
            options: [
              "So that no liquid ever returns to the accumulator at any load",
              "So that the coil superheats by 5 K at full load",
              "So that little or no flood-back occurs at maximum load, which allows flood-back at lower loads",
              "Fully open at all times",
            ],
            answer: 2,
            explain: "Setting it at the maximum-load condition means the coil is never starved, and as load drops the surplus liquid simply returns to the accumulator where it belongs — which is the whole point of an overfeed system. Aiming for zero flood-back at all loads would starve the coil at full load, and a wide-open valve floods the suction line uncontrollably.",
          },
        ],
      },

      /* ================================================================
         3 — Types of construction
         ================================================================ */
      {
        id: "construction-types",
        title: "Bare-tube, plate-surface and finned construction",
        minutes: 11,
        simple: "Evaporators come in three basic builds. A bare tube is just cold pipe. A plate is two sheets of metal with a refrigerant path squeezed between them. A finned coil is bare tube with metal collars pressed onto it, like a radiator, so it can grab heat out of the air in the gaps. Fins are cheap extra surface, but only if they are pressed on tightly enough to conduct heat.",
        refs: ref("Chapter 4, types of construction", "Chapter 4, bare-tube, plate-surface and finned evaporators"),
        content: `
Whatever the application, evaporators are built in one of three principal ways —
bare tube, plate surface or finned. Knowing which you are looking at tells you how
it will behave when it frosts, how easy it will be to clean, and how much surface
you are actually paying for.

## Primary and secondary surface

Bare-tube and plate-surface evaporators are grouped together as **primary surface**
evaporators, because essentially every square metre of their outside skin has
boiling refrigerant directly behind it.

A finned coil is different. Only the refrigerant-carrying tubes are primary
surface. The fins carry no refrigerant at all — they are **secondary surface**
whose only job is to collect heat from air that would otherwise sail through the
gaps between tubes, and conduct it back to the tube wall.

!FIG[heat-flow]

That distinction explains the single most important number in air-coil design: to
cool air properly, the outside area normally has to be increased by fins to
roughly **five to ten times the primary tube area**. Air is a poor conductor and a
sparse carrier of heat, so unless the outside surface is multiplied, the air side
cannot deliver heat as fast as the boiling refrigerant inside is able to absorb it.

## Bare-tube evaporators

Bare-tube coils are made from steel pipe, aluminium pipe or copper tubing, and are
usually custom built for a job in whatever shape, size and pattern suits it.

- **Steel** is used for large evaporators and for anything working with ammonia
  (R717), which attacks copper and its alloys.
- **Copper or aluminium** is used for smaller coils on refrigerants other than
  ammonia.

Bare tube is the answer where frost is unavoidable and heavy. Because there are no
fin gaps to bridge, frost on a bare pipe does not strangle the coil the way it does
on a finned one — capacity slides gradually rather than falling off a cliff.

## Plate-surface evaporators

Two main constructions are common:

1. **Two embossed metal sheets welded together**, with the embossing forming the
   refrigerant path between them. This is the classic domestic refrigerator and
   home freezer evaporator: cheap to make, easy to clean, and it can be pressed
   into whatever shape the cabinet needs.
2. **Tubing bonded to a metal plate**, where the plate may itself be the inner
   lining of the refrigerated cabinet, or the floor of a milk vat.

Both give a smooth, hygienic, easily wiped surface, which is why they dominate
food-contact work.

## Where primary-surface coils earn their place

Bare-tube and plate evaporators will work in any temperature range, but they are
most often chosen where the space is held **below about 1 degree C and frost cannot
be prevented**. Their virtues in that duty are practical rather than thermal:

- frost costs them proportionally less capacity than it costs a finned coil
- they are easy to clean, and plates especially so
- frost can be brushed or scraped off manually while the plant keeps running, so
  the product never gets a warm-up

Their weaknesses are equally practical: they are expensive per kilowatt and they
are bulky. In a coolroom, bulk is not a neutral cost — every cubic metre the
evaporator occupies is a cubic metre of product the customer cannot store.

## Finned evaporators

A finned coil is a bare-tube coil with metal plates threaded onto the tubes. The
fins reach out into the open spaces between tubes and act as heat collectors,
grabbing heat from air that would never have touched the primary surface, then
conducting it back to the tubing.

That last word — *conducting* — is the whole game. A fin that is not in intimate
thermal contact with the tube is a decoration. Manufacturers achieve contact in
three ways:

- soldering the fins directly to the tubing
- slipping the fins over the tube and then expanding the tube mechanically or
  hydraulically so the fin collar bites into the tube surface
- flaring the fin hole slightly so the fin slips on easily, then straightening the
  flare afterwards so the fin locks onto the tube

### Fin size and spacing

Fin size is set by tube size — small tubes take small fins, and as tube diameter
grows the fins can usefully grow with it. Spacing across the whole industry runs
from about **2 mm to 25 mm**, which is roughly **500 fins per metre down to
40 fins per metre**, and the choice is driven almost entirely by operating
temperature.

| Duty | Typical spacing | Fins per metre |
|---|---|---|
| Air-conditioning and other non-frosting coils | under 2 mm | up to about 550 |
| Automatic-defrost freezer coils | around 6 to 7 mm | about 150 |
| Low-temperature coils where frost is expected | 8 to 12 mm | 80 to 120 |
| Natural-draught (gravity) coils | 8 to 15 mm, never closer than about 12 mm without penalty | 40 to 80 |

Low-temperature coils must have wide spacing because frost on a finned coil
narrows the air passages and chokes the airflow. Get that wrong and the coil ices
solid between defrosts.

## Materials and their cost in size

Metals conduct at different rates, and that shows up directly in the size of the
coil you need for a given duty.

- All-copper (copper tube, copper fins) is the most effective.
- Copper tube with aluminium fins is next, and is the commercial norm.
- All-aluminium, and steel, are less effective again — a steel evaporator has to
  be roughly **10 to 50 per cent larger** than the copper coil it replaces for the
  same heat-transfer rate.

Tubing is generally copper for the common halocarbons, and steel for ammonia. Fins
may be aluminium, plated steel, copper or brass.

## Why fins and fans go together

Because a finned coil carries far more surface per unit of length and width than a
primary-surface coil, it can be built much more compactly. A finned coil of a given
capacity occupies less room than either a bare-tube or a plate evaporator of the
same rating — a real saving in a cold store.

Put a fan on it and the gain compounds: **forced air transfers heat at roughly two
and a half to four times the rate of natural convection**, and it lets the designer
close the fins right down to about 2 mm on non-frosting duty because the fan has
the pressure to push air through the narrow gaps.

## What to remember

- Primary surface has refrigerant behind it; fins do not, and only work if bonded
  tightly to the tube.
- Air-cooling coils need about 5 to 10 times the primary area in fin surface.
- Fin spacing is chosen for frost, not for capacity: 40 to 80 fins per metre on
  gravity coils, about 150 on defrost freezer coils, up to 550 on air-conditioning.
- Ammonia means steel; halocarbons usually mean copper.
- A steel coil must be 10 to 50 per cent bigger than the copper equivalent.
`,
        quiz: [
          {
            q: "Why does frost cost a finned coil far more capacity than it costs a bare-tube evaporator?",
            options: [
              "Because frost sticks only to fins, never to bare pipe",
              "Because frost narrows the air passages between fins and strangles the airflow, while bare pipe has no passages to block",
              "Because fins conduct heat better when wet",
              "Because bare-tube coils always have more surface area",
            ],
            answer: 1,
            explain: "The finned coil depends on air getting through the gaps; a millimetre or two of frost closes those gaps and airflow collapses. A bare pipe simply grows a slightly thicker insulating layer, so its capacity declines gradually. This is why frosting duty at low temperature is often given to bare-tube or plate evaporators.",
          },
          {
            q: "A finned evaporator has fins that fit loosely on the tubes. What is the consequence?",
            options: [
              "No consequence, since fins are secondary surface anyway",
              "Improved performance, because air can flow around the tube",
              "Poor performance, because heat collected by the fin cannot conduct into the tube without good thermal contact",
              "The refrigerant will leak into the fin",
            ],
            answer: 2,
            explain: "A fin's only function is to collect heat and conduct it to the tube. Break the conduction path and the fin becomes decorative metal. That is exactly why manufacturers solder fins, expand the tube into the fin collar, or flare and re-straighten the fin hole.",
          },
          {
            q: "Roughly how much more heat does a fan-forced coil transfer compared with the same style of coil relying on natural convection?",
            options: [
              "About 10 per cent more",
              "About the same, but quieter",
              "About two and a half to four times as much",
              "About twenty times as much",
            ],
            answer: 2,
            explain: "Moving the air mechanically brings far more molecules into contact with the surface, giving roughly a two-and-a-half to fourfold increase and allowing much closer fin spacing. That is the whole reason forced-draught coils are so much smaller than gravity coils of the same rating.",
          },
          {
            q: "An old copper evaporator must be replaced and only a steel coil is available. What should you allow for?",
            options: [
              "The steel coil can be smaller because steel is stronger",
              "The steel coil must be about 10 to 50 per cent larger for the same heat-transfer rate",
              "Steel and copper perform identically",
              "The steel coil will need no fins",
            ],
            answer: 1,
            explain: "Steel conducts heat far less readily than copper, so more surface area is needed to move the same watts — commonly 10 to 50 per cent more. Choosing a same-size steel replacement leaves the room short of capacity and the plant running at a lower suction temperature than intended.",
          },
        ],
      },

      /* ================================================================
         4 — Natural draught and baffles
         ================================================================ */
      {
        id: "natural-draught-and-baffles",
        title: "Natural-draught evaporators and the rules for baffles",
        minutes: 11,
        simple: "Some cabinets have no fan at all: cold air is heavy, so it falls out of the coil, sweeps across the food and rises back up warm. A baffle is the sloping tray under the coil that steers that flow. Most people think it is only there to catch drips — get its shape and position wrong and you can halve the cooling without a single thing being faulty in the refrigeration system.",
        refs: ref("Chapter 4, natural-draught evaporators", "Chapter 4, rules for baffles and air circulation"),
        content: `
A natural- or gravity-convection evaporator has no fan. It relies entirely on the
fact that air contracts and gets denser when it is cooled, so cold air slides
downwards out of the coil, travels along the cabinet, absorbs heat, becomes lighter
and rises back to the coil. It is silent, has nothing to fail, adds no fan heat to
the load, and is gentle on unwrapped produce. It is also slow, bulky and utterly
dependent on the airflow being properly shaped.

## What gravity convection demands

Because the driving force is weak, everything must be arranged not to obstruct it:

- **Fins must be widely spaced**, typically 40 to 80 per metre. Closer than about
  12 mm and the airflow chokes: instead of flowing *through* the coil, air simply
  flows *around* it. Ice makes this dramatically worse.
- Fin area is therefore only about **five to ten times the primary tube area**,
  which is at the low end of the range for air cooling.
- The evaporator has to sit **at the top of the space**, or against or in the upper
  walls, because cold air falls and must have somewhere to fall to.
- A **baffle or drip tray** is needed under a top-mounted coil.

The result is bulky. A gravity coil takes far more of the customer's storage volume
than a closely finned fan coil of the same capacity, and its mounting position eats
more of the space still.

## The real purpose of a baffle

The insulated tray under a gravity evaporator is widely misunderstood as nothing
more than a drip tray. Catching and draining defrost water is certainly one of its
jobs — but it is the secondary one.

> The prime purpose of a baffle is to shape the airflow. Correctly designed and
> positioned, it directs cold air down one flue, along the cabinet and back up the
> other side, so that every part of the storage space is swept and no dead or warm
> pockets remain.

### Horizontal versus vertical baffles

**Horizontal baffles must be insulated**, or made from a material of low thermal
conductivity such as plastic. Most commercial baffles are sheet metal with an
insulating sandwich inside. The reason is straightforward: an uninsulated
horizontal baffle would chill to the same temperature as the evaporator directly
above it. Warm cabinet air would then circulate underneath it, deposit its moisture
as drips on the underside — destroying its usefulness as a drip tray — and generate
turbulence where you want smooth flow.

**Vertical baffles are normally not insulated.** They lie along the direction of
airflow rather than across it, so they do not become a cold surface in the middle of
a warm air stream.

## Getting the flue dimensions right

There are definite proportions between the width of the cabinet and the flues.
Working from the cabinet width W:

| Dimension | Rule |
|---|---|
| A, cold air flue (single baffle) | about W divided by 7 |
| B, warm air flue | about W divided by 6 |
| C | equal to B |
| D, clearance around the evaporator | 36 mm to 100 mm depending on evaporator size |
| E | C plus 25 mm |
| Baffle slope | 80 mm to 160 mm fall per metre |

With a double-baffle arrangement the same logic applies, but the warm air returns
up **both** sides, so each warm flue is sized for roughly half the return air.

Note that the cold outlet flue A is deliberately **narrower** than the warm inlet
flue B. That is not a mistake: as air passes over the evaporator it cools and
contracts to something like 80 per cent of its warm volume, so less cross-section
is needed to carry it away than was needed to bring it in.

The baffle slope of 80 to 160 mm per metre serves both functions at once — it keeps
the air moving in one direction, and it makes sure condensate and defrost water
actually run to the drain instead of pooling and re-evaporating into the cabinet.

## What bad baffling looks like on a service call

Restrict the airflow anywhere in that loop and a predictable set of symptoms
appears:

- **Hot spots** in the cabinet, because circulation is inadequate and part of the
  load never gets swept
- **Excessively cold air at the coil outlet and excessively warm air at the inlet**,
  because the small amount of air that does circulate is being over-cooled
- **Heavy icing or frosting of the evaporator**, which then fails to clear during
  the defrost period it was designed for
- **Low humidity and dehydrated product**, because the slow-moving air spends longer
  in contact with the coil, gives up more moisture, and drags the suction pressure
  down with it

> The capacity of a gravity evaporator can easily be halved by poor baffling. Many
> service calls for poor cabinet temperatures, food spoilage, bottles freezing and
> display glass fogging are baffle problems, not refrigeration faults — and
> technicians can waste hours chasing a system fault that does not exist.

This applies just as much to a domestic refrigerator as to a shop display cabinet.
With a correctly positioned horizontal baffle, a typical cabinet holds a fairly
constant 3 degrees C through the main storage area, colder directly under the cold
air flue and warmer on the far side. Good operators use that gradient deliberately,
stacking product to suit the zones.

## On the job

- Before condemning a gravity system, look at the baffle: is it there, is it the
  right shape, is it sloped to the drain, and is it insulated if horizontal?
- Never leave a baffle out after cleaning, and never replace an insulated baffle
  with a bare metal tray.
- Cold flue narrower than warm flue is correct — cooled air occupies less volume.
- Check that stacked product has not been jammed into the flues; customers will do
  this every time if you do not explain the zoning to them.
- Wide fin spacing on a gravity coil is a design requirement, not a manufacturing
  economy.
`,
        quiz: [
          {
            q: "Why must a horizontal baffle under a gravity evaporator be insulated?",
            options: [
              "To stop the baffle rusting",
              "To stop the baffle chilling to evaporator temperature, which would cause warm air to condense moisture on its underside and create turbulence",
              "To increase the weight so it does not move",
              "To raise the cabinet temperature",
            ],
            answer: 1,
            explain: "An uninsulated horizontal baffle becomes as cold as the coil above it. Warm air circulating under it then drips condensate from the wrong side and disturbs the flow the baffle exists to organise. Vertical baffles are in line with the airflow, so they do not need insulating.",
          },
          {
            q: "In a single-baffle cabinet, why is the cold air outlet flue made narrower than the warm air return flue?",
            options: [
              "To increase air velocity for better cooling",
              "Because cooled air contracts to roughly 80 per cent of its warm volume, so it needs less cross-section",
              "To reduce the amount of frost on the coil",
              "Because the drain must fit in the remaining space",
            ],
            answer: 1,
            explain: "Cooling the air shrinks it, so the same mass needs less flue area on the cold side. Sizing both flues the same wastes cabinet space on the cold side and can starve the warm return. It is not about deliberately raising velocity — high velocity in a gravity cabinet dehydrates product.",
          },
          {
            q: "A gravity coolroom shows warm spots, a heavily iced coil and dried-out produce, yet superheat and charge check out fine. What should you examine first?",
            options: [
              "The compressor valves",
              "The condenser fan",
              "The baffle arrangement and anything blocking the air flues",
              "The refrigerant type",
            ],
            answer: 2,
            explain: "That exact symptom set — hot spots, over-icing, low humidity and dehydration — is the classic signature of restricted or missing baffling, because the small amount of air still circulating is over-cooled and spends too long on the coil. Poor baffling can halve effective capacity while every refrigeration reading looks normal.",
          },
          {
            q: "Why are fins on natural-draught evaporators spaced no closer than about 12 mm?",
            options: [
              "To reduce the cost of manufacture",
              "Because closer spacing restricts the weak gravity airflow so air bypasses the coil instead of passing through it",
              "Because closer fins would freeze the refrigerant",
              "Because the fins would fall off",
            ],
            answer: 1,
            explain: "Gravity convection has very little driving pressure, so any real resistance sends the air around the coil rather than through it — and ice makes the restriction far worse. Fan coils can use much closer fins precisely because the fan supplies the pressure to force air through.",
          },
        ],
      },

      /* ================================================================
         5 — Forced and induced draught
         ================================================================ */
      {
        id: "forced-and-induced-draught",
        title: "Forced-draught and induced-draught evaporators",
        minutes: 13,
        simple: "Put a fan on a coil and you can cool three or four times as much with the same metal. The fan can push air into the coil (forced draught) or suck it through (induced draught) — both work. What matters is that nobody changes the fan, the blade angle or its position in the ring, because the fan and the coil were matched to each other at the factory.",
        refs: ref("Chapter 4, forced-draught and induced-draught evaporators", "Chapter 4, efficiency factors, refrigerant control and pressure drop"),
        content: `
Almost every commercial coolroom, freezer room and air-conditioner in Australia
uses a fan-assisted evaporator, for one blunt reason: moving the air mechanically
multiplies the heat transfer by roughly two and a half to four times, which makes
the coil smaller, cheaper and far less of an intrusion into the customer's storage
space.

## Forced or induced?

- **Forced draught** — the fan sits *before* the coil and blows air into it.
- **Induced draught** — the fan sits *after* the coil and draws air through it.
  Wall-mounted induced-draught coolers (IDCs) are extremely common.

Manufacturers argue endlessly about which is better. In practice the only thing
that matters is whether the airflow is transferring the maximum amount of heat to
the coil. Both arrangements do that when they are designed properly.

Fin densities are far higher than on gravity coils, running from about **150 fins
per metre** on automatic-defrost freezer coils up to **550 fins per metre** on
non-frosting air-conditioning coils.

## The five things that decide a fan coil's efficiency

1. air velocity over the coil surface
2. the effectiveness of the liquid refrigerant control in supplying the whole coil
3. the amount of ice accumulation
4. the metals used in the tubes and fins
5. the ratio of fin (secondary) area to tube (primary) area

### 1. Air velocity — and why you must not fiddle with the fan

The airflow must not be altered in any way unless the manufacturer authorises it.
Three field habits do real damage:

**Bending fan blades to increase the pitch.** It feels like it should move more
air. It generally moves *less*, because the extra load slows the fan down. Current
draw rises, the motor may burn out, and the blade often ends up out of balance and
vibrating.

**Moving the blade within the cowl ring.** Maximum air volume is obtained with the
blade centred in the cowl.

| Blade position in the cowl | Effect |
|---|---|
| Centred | Maximum air volume — the design condition |
| Forward of the cowl | Volume reduced, static pressure increased |
| Back from the cowl centre | Both volume and pressure reduced — all loss, no gain |

**Swapping fan motors between evaporators.** Different coils have different
resistance to airflow, so a motor is chosen for the coil it lives on. A four-bank
coil resists airflow far more than a two-bank coil and needs a more powerful motor;
a coil with 300 fins per metre needs a stronger fan than one with 150 fins per metre
to move the same air. Changing the blade as well does not fix the mismatch. This is
especially critical on air-conditioners, where airflow is tied to both capacity and
coil temperature.

Frost and dust also restrict airflow, so coils that are expected to accumulate frost
must be fitted with fans designed to keep working against that rising resistance.

### 2. Liquid refrigerant control and distribution

A coil can only work properly when its primary tubing is fully wet with liquid
refrigerant. Feed only 75 per cent of the circuits and you have bought a coil that
can never exceed roughly 75 per cent of its rating.

Refrigerant flow is reduced by:

- the wrong type or size of refrigerant control
- incorrect adjustment of the control
- system faults — short of charge, restricted filter or drier, or oil logging
- excessive pressure drop through the evaporator, when no compensating control such
  as an externally equalised TX valve has been fitted
- failure to subcool the liquid before the refrigerant control, so flash gas arrives
  at the valve and eats into its capacity

!SIM[See what a starved evaporator does to the gauges](fault=lowCharge)

### 3. Ice accumulation

A thin layer of frost actually *increases* performance slightly at first, because
it roughens and extends the surface. The moment its thickness starts to restrict the
airflow, capacity falls away.

Ice building specifically in the **corners, and sometimes the centre**, of a
forced-draught cooler is a message: the defrost arrangement is not doing its job. In
most cases lengthening the defrost period fixes it, but the technician should also
check whether somebody has changed fan blade shape or position, because a distorted
air pattern leaves parts of the coil starved of warm air during defrost.

### 4. Metals in tubes and fins

Heat conduction differs between metals. All-copper coils outperform
copper-and-aluminium, all-aluminium and all-steel coils. For the same heat-transfer
rate a steel coil must be roughly 10 to 50 per cent larger than the copper
equivalent.

### 5. Secondary to primary area ratio

Just as with gravity coils, the balance between fin area and tube area matters. A
generous fin area collects heat from air that would otherwise bypass the coil, but a
coil with too little primary tube area for its fin area cannot keep the fin roots
cold and the temperature distribution across the face becomes uneven.

## Refrigerant control on fan coils

These evaporators are generally designed around **thermostatic expansion (TX)
valves, capillary tubes or float valves**. On ammonia liquid recirculation systems,
manual expansion valves take the place of TX valves. In some systems any of these
may be interchanged, provided the coil stays fully supplied and the technician
understands what has been given up.

Correct sizing is essential. Every control has a fixed orifice restricting flow, and
an undersized orifice cannot pass enough refrigerant at maximum load — the coil is
then starved exactly when the customer needs it most.

### Adjustment

- **TX valves.** Superheat setting is critical. Typical settings are about **5
  kelvins**, but they can be reduced to as low as **3 K** where the temperature
  difference between refrigerant and entering air is under 5 K (as in high-humidity
  fruit and vegetable rooms), where an efficient liquid-to-suction heat exchanger is
  fitted, or where a thermo-electric expansion valve is used.
- **Manual valves on recirculation systems.** Set for little or no flood-back at
  maximum load.
- **Float valves.** Normally pre-set by the manufacturer.

## Pressure drop and distribution

Some pressure drop happens in every evaporator — it is an accepted design feature.
Well-designed coils use **numerous parallel refrigerant circuits fed from a liquid
distributor**, so that each circuit is short, the pressure drop stays small, and the
distribution stays even.

Pressure drop matters because it lowers the pressure — and therefore the saturation
temperature — at the coil outlet relative to the inlet. A TX valve with an internal
equaliser senses inlet pressure and outlet temperature, so a big pressure drop makes
it read a false superheat and throttle the coil.

> **Externally equalised TX valves should be used whenever the evaporator is fitted
> with a distributor and feed tubes, or wherever the pressure drop through the coil
> is significant.**

Uneven temperatures measured carefully at the coil U-bends are your evidence of poor
distribution or excessive pressure drop. Partial frosting or partial cooling always
indicates a system fault, and correcting those is a large part of the job.

Oil logging — oil accumulating in the coil where refrigerant velocity cannot sweep
it out — is most frequent in ammonia systems but is not uncommon with other
refrigerants, particularly in flooded evaporators.

## On the job

- Never bend blades, never reposition a blade in its cowl, never swap fan motors
  between different coils.
- Ice in the corners of a fan coil is a defrost fault, not a refrigerant fault.
- Distributor fitted? Then the TX valve must be externally equalised.
- Check superheat before condemning a coil: 5 K is the usual target, 3 K only for
  the specific cases listed above.
- Uneven U-bend temperatures mean poor distribution — check the distributor, feed
  tubes and valve sizing.
`,
        quiz: [
          {
            q: "A technician bends the blades of an evaporator fan to a steeper pitch, hoping for more airflow. What is the likely outcome?",
            options: [
              "More airflow and a cooler room",
              "Less airflow, higher current draw and possible motor burn-out, plus vibration",
              "The same airflow at lower power",
              "Higher airflow but higher noise only",
            ],
            answer: 1,
            explain: "Steeper pitch loads the motor, the fan slows, and net airflow usually falls while current rises — with motor burn-out and vibration as bonus consequences. Airflow must not be altered without the manufacturer's authorisation.",
          },
          {
            q: "An evaporator is fitted with a liquid distributor and feed tubes. What type of TX valve should it have?",
            options: [
              "An internally equalised valve, because the distributor removes pressure drop",
              "An externally equalised valve, because the distributor and feed tubes introduce pressure drop that an internal equaliser would misread",
              "Either type — the equaliser makes no difference",
              "A manual expansion valve",
            ],
            answer: 1,
            explain: "A distributor deliberately drops pressure to split the flow evenly. An internally equalised valve senses inlet pressure and would read a falsely high superheat, throttling the coil and starving it. The external equaliser senses pressure at the coil outlet where it belongs.",
          },
          {
            q: "Ice is forming in the corners and centre of a forced-draught cooler while the rest of the coil stays clear. What does this indicate?",
            options: [
              "The system is overcharged",
              "The evaporator is too large for the room",
              "Incorrect defrost — most often too short a defrost period, possibly worsened by altered fan blade shape or position",
              "The refrigerant is contaminated",
            ],
            answer: 2,
            explain: "Localised ice that survives from cycle to cycle means the defrost is not reaching those areas. Lengthening the defrost period usually cures it, but check that nobody has changed the fan blades or their position, since a distorted air pattern leaves cold pockets during defrost.",
          },
          {
            q: "Under what circumstance is a TX valve superheat setting as low as 3 K appropriate?",
            options: [
              "On any freezer coil, to increase capacity",
              "Where the TD between refrigerant and entering air is under 5 K, where an efficient liquid-to-suction heat exchanger is fitted, or with a thermo-electric expansion valve",
              "Whenever the compressor is short cycling",
              "Whenever the coil is fed by a capillary tube",
            ],
            answer: 1,
            explain: "About 5 K is the normal target. Dropping to 3 K is only safe in those specific cases, where either the small TD leaves no room for more superheat or a heat exchanger provides extra protection against liquid reaching the compressor. Cutting superheat to chase capacity on an ordinary system risks flood-back.",
          },
        ],
      },

      /* ================================================================
         6 — Liquid-cooling evaporators
         ================================================================ */
      {
        id: "liquid-cooling-evaporators",
        title: "Liquid-cooling evaporators and chillers",
        minutes: 13,
        simple: "When the thing being cooled is a liquid — water, brine, milk, beer — the coil is wet on both sides, so it transfers heat far better than an air coil and hardly needs fins. The main risk changes too: instead of ice on the outside blocking airflow, the danger is freezing the liquid solid inside and splitting the tubes.",
        refs: ref("Chapter 4, liquid-cooling evaporators", "Chapter 4, shell-and-tube, shell-and-coil and Baudelot coolers"),
        content: `
Air is a terrible heat-transfer medium; water and brine are excellent ones. Because
a liquid cooler is wet on both sides of the vessel wall, the heavy finning that air
coils depend on is simply not needed — although some form of extended surface is
sometimes used to lift performance or shrink the vessel. You will see this in the
U factors later in this module: a liquid cooler with moving liquid can run an order
of magnitude higher than an air coil.

## The same three classification questions

**By construction:** bare pipe, plate surface, finned (sometimes internally as well
as externally) and shell-and-tube or shell-and-coil.

**By how the product circulates:** natural convection, forced convection using a
pump, or fully immersed and cascade flow.

**By refrigerant control and state:**

- **Flooded** — the liquid refrigerant level in the shell is held by a float or
  similar level control, and the liquid to be cooled is circulated through tubes
  running through it.
- **Direct expansion** — the refrigerant is in the tubes, fed by an expansion valve
  or restrictor, and the liquid to be cooled flows over and around those tubes.

Note the neat reversal: in a **flooded** chiller the refrigerant is in the shell and
the product is in the tubes. In a **DX** chiller the refrigerant is in the tubes and
the product is in the shell. Get that the wrong way round when diagnosing and every
conclusion you draw will be backwards.

## The main types you will meet

### Double-pipe evaporators

Refrigerant flows in an inner tube; the liquid being cooled flows in the annulus of
an outer tube. Simple, but rarely used today — the efficiency is low and there is a
real risk of the product freezing, blocking and then bursting the pipe.

### Baudelot coolers

Refrigerant (or sometimes chilled brine or water) flows through a vertical bank of
tubes, and the product cascades down the *outside* of the bank in a thin film,
collecting in a tray at the bottom. The tubes are often heart-shaped in section to
spread the film. Because the product is at atmospheric pressure and in the open, it
can never be trapped and frozen solid, and it is easy to inspect.

Cascade coolers of the tube type have largely given way to vat coolers and to the
much easier-to-clean **ripple plate** cascade cooler, which does the same job over a
corrugated plate — the standard approach for full-flooded milk and beverage chilling.

### Tank and immersion coolers

Refrigerant in tubes, product in a tank, with either natural or forced circulation.
With natural circulation the refrigerant tubes must be grouped **near the top** of
the tank, because chilled liquid sinks and the coil needs warmer liquid rising to it.
Control may be a float valve (flooded) or a direct-expansion device. Many domestic
and commercial storage-type liquid coolers are still built this way — a small DX
shell-and-tube water cooler of this style is what sits inside a drinking water
cooler.

A **bulk milk vat** is the same idea done at scale: a stainless steel vat with a
large plate-type evaporator forming the bottom, a mechanical agitator to even out the
temperature and speed cooling, rounded corners for cleaning, and foamed-in-place
insulation. The agitator matters thermally as well as hygienically — still milk next
to a cold plate would freeze at the surface while the bulk stayed warm.

### Flooded shell-and-coil coolers

The best-known example is the instantaneous beverage cooler, widely known in the
trade by the Temprite name. Refrigerant sits in the shell; the beverage runs through
a coil inside it. Because the beer or soft drink is inside a coil with no escape, a
**constant-pressure valve is an essential component** — it holds the suction pressure
up so the refrigerant temperature can never drop far enough to freeze the product and
split the coil.

### Flooded shell-and-tube liquid chillers

Usually multipass. These are extremely efficient and are used extensively to produce
chilled water for air-conditioning and cold water or brine for process work such as
brewery cooling. Refrigerant boils in the shell around a bundle of water tubes and
the vapour leaves through a suction header at the top.

Refrigerant controls used with them include high-side floats, level-controlling
thermostatic expansion valves, and restrictor or capillary tubes.

Two practical details are worth knowing:

- When the machine is **off**, the liquid refrigerant level does not cover more than
  about half of the water tube bank. When it is **running**, boiling is violent
  enough to splash refrigerant over all of the tubes, and **spray eliminators** are
  fitted to stop liquid droplets being carried back to the compressor.
- A major maintenance advantage is that the **end plates can be removed** so the
  straight tubes can be cleaned right through, end to end.

### DX shell-and-tube chillers

Here the refrigerant circulates in the tubes and the liquid to be cooled fills the
shell around them. Feed is by expansion valve or restrictor capillary. Efficiency is
high and — the big attraction — the refrigerant charge is much smaller than a flooded
shell-and-tube of the same duty. **Internal baffles** direct the product back and
forth across the tube bundle so it cannot short-circuit from inlet to outlet; baffle
spacing is varied along the shell to control velocity and cut-off.

| | Flooded shell-and-tube | DX shell-and-tube |
|---|---|---|
| Refrigerant | In the shell | In the tubes |
| Product | In the tubes | In the shell |
| Charge | Large | Much smaller |
| Level control | Float or level-controlling valve | TX valve or restrictor |
| Freeze risk | Product trapped in tubes — controls essential | Product in shell, can expand |
| Cleaning | Remove end plates, clean straight tubes | Shell side, baffled |

## Freezing: the failure mode that defines liquid cooling

Every liquid chiller lives close to a hazard that an air coil never faces. Water
expands as it freezes, with enough force to split copper, steel or stainless. If the
suction temperature falls below the freezing point of the product while flow is low
or stopped, tubes burst — and on a flooded machine that means refrigerant into the
water circuit and water into the refrigeration system.

>! Freeze protection is not optional on a liquid chiller. Low water-temperature
>! cut-outs, flow switches or differential pressure switches proving flow, and
>! constant-pressure or crankcase-pressure-regulating valves where fitted, are
>! safety controls. Never bridge one out to keep a plant running, and never leave a
>! chiller commissioned without proving that the flow switch actually stops the
>! compressor when flow stops.

Where freezing cannot be safely prevented by controls, designers avoid the risk
altogether by choosing a **cascade type over refrigerated plates** — where the
product is an open film that can never be trapped — or a **DX shell-and-tube**, where
the product is in the shell and has room to expand.

## What to remember

- Flooded: refrigerant in the shell, product in the tubes, big charge, float control.
- DX: refrigerant in the tubes, product in the shell, small charge, TX valve, internal
  baffles.
- Baudelot and ripple-plate cascade coolers put the product in an open film — no
  freeze-burst risk and easy cleaning.
- Natural-circulation tank coolers put the tubes near the top; agitators are used in
  milk vats to prevent surface freezing.
- The constant-pressure valve on a beverage cooler exists to stop freeze-up.
`,
        quiz: [
          {
            q: "In a flooded shell-and-tube chiller, where are the refrigerant and the chilled water?",
            options: [
              "Refrigerant in the tubes, water in the shell",
              "Refrigerant in the shell, water in the tubes",
              "Both in the shell, separated by a baffle",
              "Both in tubes, in a double-pipe arrangement",
            ],
            answer: 1,
            explain: "Flooded means a maintained level of liquid refrigerant in the shell with the water tube bundle running through it. The DX shell-and-tube is the reverse — refrigerant in the tubes, water in the shell — which is why its charge is much smaller.",
          },
          {
            q: "Why is a constant-pressure valve essential on an instantaneous beverage cooler?",
            options: [
              "To limit compressor discharge pressure",
              "To hold the suction pressure up so the refrigerant cannot get cold enough to freeze the beverage in the coil",
              "To maintain oil pressure in the compressor",
              "To equalise pressures at shutdown for easier starting",
            ],
            answer: 1,
            explain: "The beverage is trapped in a coil with nowhere to expand, so freezing would split it. The constant-pressure valve throttles the suction to keep the evaporating temperature above the freezing point of the drink. It has nothing to do with discharge pressure or oil.",
          },
          {
            q: "Why are spray eliminators fitted at the top of a flooded shell-and-tube evaporator?",
            options: [
              "To keep water spray off the refrigerant tubes",
              "To stop violent boiling from carrying liquid refrigerant droplets back to the compressor",
              "To distribute refrigerant evenly along the shell",
              "To remove oil from the returning vapour",
            ],
            answer: 1,
            explain: "When running, the boiling is vigorous enough to splash liquid over the whole tube bank — good for heat transfer, bad for the compressor if droplets reach the suction line. Eliminators separate that carry-over. Note that when off, the level sits at only about half the tube bank height.",
          },
          {
            q: "A designer must chill a product where freeze-up cannot be reliably prevented by controls. Which arrangements avoid the burst-tube risk?",
            options: [
              "A double-pipe cooler or a flooded shell-and-tube",
              "A cascade cooler over refrigerated plates, or a DX shell-and-tube where the product is in the shell",
              "Any tank cooler with the coil at the bottom",
              "A shell-and-coil beverage cooler without a pressure control",
            ],
            answer: 1,
            explain: "Cascade and Baudelot coolers keep the product as an open film that can never be trapped, and a DX shell-and-tube leaves the product in the shell with room to expand. Double-pipe and flooded shell-and-tube both trap the product inside tubes, which is exactly the configuration that bursts.",
          },
        ],
      },

      /* ================================================================
         7 — Contact cooling, ice makers, brine coils
         ================================================================ */
      {
        id: "contact-plates-and-brine-coils",
        title: "Contact cooling and freezing plates, ice makers, and water or brine coils",
        minutes: 11,
        simple: "Some evaporators do not bother with air or water in between — the product is clamped straight onto the cold metal, which freezes it far faster. Ice makers are the fanciest version of this idea. Right at the end of the chapter is a warning: some coils that look exactly like evaporators are actually just carrying chilled water or brine, and are not evaporators at all.",
        refs: ref("Chapter 4, contact cooling and freezing plates", "Chapter 4, ice makers and water or brine coils"),
        content: `
If you want heat out of a carton of prawns in a hurry, do not blow air at it. Air is
a poor conductor, and a still film of it clings to every surface. Clamp the carton
between two refrigerated plates instead and the heat has a direct metal path out.
That is contact freezing, and it is the fastest practical way to freeze packaged
product.

## Contact cooling and freezing plates

A plate freezer is a bank of hollow refrigerated plates — plate-surface evaporators
in the sense we met earlier — arranged so that product sits between them. The
simplest versions are fixed plates; the more capable ones are far more interesting.

In a **hydraulically adjusted plate freezer**, the refrigerant lines connecting the
plates are flexible, and hydraulic pressure closes the plates onto the product. The
plate spacing can be adjusted to whatever thickness the product happens to be, so
each carton or block is gripped rather than merely rested on. Freezing then happens
**from both faces at once**, roughly halving the distance the heat has to travel and
dramatically shortening freezing time.

That grip creates a problem at the end of the cycle: a thin ice film forms between
the plate and the packaging and effectively glues them together. The solution is
elegant — when freezing is complete, **hot gas is circulated through the plates** to
melt that film so the plates release the product without tearing the packaging or
damaging the produce.

The refrigeration system serving plate freezers is usually **ammonia (R717)**,
because plate freezers belong to industrial plants, but any refrigerant or even a
cold brine could be used with minor modification.

>! Hydraulic plate freezers close with enough force to crush a hand. Isolate hydraulic
>! power and follow the plant lock-out and tag-out procedure before reaching between
>! plates. On the ammonia side, hot-gas defrost raises pressure in vessels that were
>! at deep vacuum moments earlier — never work on a plate bank being hot-gassed.

## Ice makers — the most specialised contact freezers

Ice makers are contact freezers with a harvesting mechanism bolted on, and they are
mechanically complicated: water pumps, agitators or sprays, ice-thickness sensors,
hot gas or electric defrost, storage bins, and on larger machines crushers and
coin-operated dispensers as well. Most of your service time on an ice maker is spent
on those mechanisms rather than on the refrigeration.

### Block ice

The simplest design: steel cans of water immersed in a brine tank of calcium chloride
or sodium chloride solution which is itself cooled by the evaporator. For **clear**
blocks, an air pipe is connected to the bottom of each can — the rising bubbles agitate
the water and carry out dissolved gases, so the ice freezes from the walls inwards
without the cloudy core that trapped air produces.

### Cube ice

Complex-shaped evaporators with tips extending down into a water tray. Ice builds on
the tips until the set thickness is reached, then a micro-switch drains the remaining
water and energises the defrost. The cubes release, slide into the storage bin, defrost
terminates, the tray refills with cold water and the cycle restarts. Some designs raise
and lower the water tray; others raise and lower the evaporator itself.

### Flake ice

Circular, screw-shaped or plate evaporators with water trickled or sprayed over them.
Ice builds gradually on the surface and is removed continuously by a scraper travelling
over it, dropping flakes into a bin while unfrozen water drains back to a reservoir for
recirculation.

### Tube (crushed) ice

Industrial machines using vertical shell-type flooded evaporators. Water is circulated
down through large-diameter tubes and ice forms on the tube walls to about **9 mm
thick**. Hot gas is then fed into the evaporator, which forces the cold liquid
refrigerant back into a header tank and warms the tube walls just enough to release the
ice cylinders. They drop into a crusher and the broken ice is directed to the bin. The
hot gas solenoid then closes, the evaporator refills with cold liquid refrigerant, the
water pump restarts and the freezing cycle resumes.

| Ice type | Evaporator form | Harvest method |
|---|---|---|
| Block | Cans immersed in a cooled brine tank | Cans lifted and warmed; air agitation gives clear ice |
| Cube | Shaped evaporator tips over a water tray | Drain, then defrost drops cubes into the bin |
| Flake | Drum, screw or plate with water trickled over it | Continuous mechanical scraper |
| Tube / crushed | Vertical shell-type flooded evaporator | Hot gas release, then a crusher |

## Water and brine coils — the impostors

In large air-conditioning plants and many food-processing installations you will find
heat-exchange coils that are **physically identical** to evaporators: same tubes, same
fins, same headers, same look, often the same manufacturer. They are not evaporators,
and calling them evaporators is a mistake with consequences.

Cold water, brine or glycol — at much the same temperature you would have run a
refrigerant — is pumped through the coil, and heat transfers exactly as before. The
difference is inside:

| | Refrigerant evaporator | Water or brine coil |
|---|---|---|
| Heat absorbed as | Latent heat of vaporisation | Sensible heat only |
| Temperature along the coil | Essentially constant while boiling | Rises continuously from inlet to outlet |
| Surface temperature | Nearly uniform | Warmer at the outlet end |
| Pressure and temperature relationship | Locked together by saturation | Independent |
| Diagnosis by gauge | Suction pressure gives coil temperature | Pressure tells you nothing about temperature |

Practically, this means you cannot take a pressure reading on a chilled-water coil and
convert it to a coil temperature — you must measure water in and water out. It also
means the coil face is not at one temperature, so frost, condensation and capacity vary
across it, and the mean temperature difference has to be worked out from the entering
and leaving conditions. We do that calculation in the next lesson.

## What to remember

- Contact freezing beats air freezing because metal conducts and still air insulates.
- Hydraulic plate freezers freeze from two faces and use hot gas to release the ice
  film at the end of the cycle.
- Ice makers are contact freezers plus a harvest mechanism; know block, cube, flake and
  tube types and how each releases its ice.
- Air agitation in block ice cans drives out dissolved gas and gives clear ice.
- A coil carrying water or brine is not an evaporator: its temperature rises through the
  coil because it carries only sensible heat.
`,
        quiz: [
          {
            q: "Why is hot gas circulated through the plates of a contact freezer at the end of the freezing cycle?",
            options: [
              "To dry the product before packing",
              "To melt the thin ice film that has bonded the plate to the packaging, so the plates can separate without damaging the produce",
              "To pre-heat the plates for the next batch",
              "To purge oil from the plate circuits",
            ],
            answer: 1,
            explain: "Clamped plates freeze a film of ice against the package, effectively gluing them together. A brief hot-gas circulation releases the bond. Pre-heating for the next batch would be self-defeating, and oil purging is a separate maintenance operation.",
          },
          {
            q: "What is the purpose of the air pipe fitted to the bottom of a block ice can?",
            options: [
              "To speed up freezing by cooling the water",
              "To agitate the water and carry dissolved gas out, so the ice freezes from the walls inwards and stays clear",
              "To stop the brine entering the can",
              "To equalise pressure as the water expands",
            ],
            answer: 1,
            explain: "Dissolved gas coming out of solution as the ice front advances is what makes a block cloudy. Bubbling air keeps the water stirred and drives the gas off, so the ice freezes clear from the walls inwards. It does not speed freezing — if anything it adds a small heat load.",
          },
          {
            q: "How is ice harvested from a tube ice maker using a vertical shell-type flooded evaporator?",
            options: [
              "A scraper travels continuously over the tube surface",
              "The tubes are lifted out of a brine tank and washed",
              "Hot gas is fed to the evaporator, forcing the cold liquid back to a header tank and releasing the ice tubes, which fall to a crusher",
              "The water pump reverses and pushes the ice out",
            ],
            answer: 2,
            explain: "The hot gas both displaces the liquid refrigerant into the header and warms the tube wall enough to break the bond, so the ice cylinders drop into the crusher. Continuous scraping is how flake ice is made, and lifting cans from brine is the block ice method.",
          },
          {
            q: "You find a finned coil in a large air-conditioning plant that looks exactly like an evaporator. What would confirm that it is actually a chilled-water coil?",
            options: [
              "It has more fins per metre than a refrigerant coil",
              "The fluid temperature rises steadily from inlet to outlet because only sensible heat is absorbed",
              "It has no insulation on its connections",
              "It is made of steel rather than copper",
            ],
            answer: 1,
            explain: "The defining behaviour is the rising temperature: water carries sensible heat only, so it gets warmer all the way through, whereas boiling refrigerant holds an almost constant temperature. Fin count, insulation and materials vary with the design and prove nothing either way.",
          },
        ],
      },

      /* ================================================================
         8 — Calculations
         ================================================================ */
      {
        id: "heat-transfer-calculations",
        title: "Calculations for heat-transfer vessels: area, U factor and Qh",
        minutes: 15,
        simple: "Every heat exchanger obeys one small equation: heat moved equals area times a heat-transfer number times the temperature gap. If you know any three of those, you can work out the fourth. That lets you measure an unlabelled coil with a tape and a thermometer and say roughly how many watts it is worth.",
        refs: ref("Chapter 4, calculations for heat-transfer vessels", "Chapter 4, surface area, U factors and heat transfer examples"),
        content: `
Evaporators and condensers are both vessels for moving heat into or out of a
refrigerant, and designers calculate their performance from first principles or from
prepared tables. A technician needs enough of the same skill to answer three questions
on site:

- is this evaporator or condenser performing up to its capacity?
- was it correctly selected in the first place, and is it matched to the rest of the
  plant?
- what capacity should I assume for an old or damaged coil I have to replace when no
  exact equivalent exists?

That last one comes up constantly. Components get thrown together because they were
in stock and looked near enough, and then somebody wastes days trying to make the
plant work. Running mismatched components is like driving a car with a
different-sized wheel at each corner.

## The one equation

The heat-transfer ability of any vessel depends on exactly three things: the surface
area in contact with the medium, the coefficient of heat transfer of the vessel, and
the temperature difference between refrigerant and medium.

**Qh = A x U x TD**

| Symbol | Meaning | Unit |
|---|---|---|
| Qh | Rate of heat flow | watts (W), where 1 W = 1 joule per second |
| A | Surface area | square metres (m2) |
| U | Coefficient of heat transfer | watts per square metre kelvin (W/m2.K) |
| TD | Temperature difference | kelvins (K) |

Check the units and the equation explains itself: m2 x W/m2.K x K leaves watts.

**Worked example — the simplest case.** An evaporator has 5 m2 of surface, a U factor
of 15 W/m2.K, and runs at a TD of 10 K.

Qh = A x U x TD = 5 x 15 x 10 = **750 watts**

## 1. Finding the surface area

### Bare tubing

We are normally only interested in the outside area. A tube is a flat sheet rolled
into a circle, so its area is the circumference times the length:

**Area = pi x D x L x N**

where D is the outside diameter in metres, L the length of each tube in metres, N the
number of tubes, and pi taken as 3.14 is accurate enough for this work.

**Worked example.** A bare-pipe condenser in an evaporative condenser has 40 tubes,
each 25 mm outside diameter and 2 m long.

Area = 3.14 x 0.025 x 2 x 40 = **6.28 m2**

### Finned coils

Total area = primary area + secondary area. The primary area is the tubing, worked out
exactly as above, but counting only the straight tube between the end shields — the
U-bends sit outside the airflow, carry no fins and transfer very little, so they are
omitted.

The secondary (fin) area needs two steps, because the net fin area is the gross fin
area minus the holes the tubes pass through. Where the metal has been punched out,
there is no heat transfer.

- Gross fin area = l x w x n x 2, where l is fin length, w is fin width, n is the
  number of fins, and the 2 is because both faces of every fin transfer heat.
- Hole area = (pi x D squared divided by 4) x n x N x 2, using the area of one hole,
  the number of fins, the number of tubes (so, holes per fin) and again 2 for both
  faces.

**Total area = primary + gross fin - holes**

**Worked example — an induced-draught cooler.** The coil is 0.8 m long, has 300 fins
per metre, each fin 0.6 m high by 0.15 m deep, with 16 mm OD tubing in 4 banks, so 32
tubes. First, the number of fins: 300 fins/m x 0.8 m = 240 fins.

Primary area = 3.14 x 0.016 x 0.8 x 32 = **1.29 m2**

Gross fin area = 0.6 x 0.15 x 240 x 2 = **43.2 m2**

Hole area = (3.14 x 0.016 x 0.016 / 4) x 240 x 32 x 2 = 0.000201 x 240 x 32 x 2 =
**3.09 m2**

Total area = 1.29 + 43.2 - 3.09 = **41.4 m2**

Look at the shape of that answer. On a closely finned coil the primary area (1.29) and
the hole area (3.09) are both small and nearly cancel each other out, so for
identifying a coil in the field or estimating its capacity, **the gross fin area alone
is good enough** — here it gives "a little over 40 m2", right to within a few per cent.

## 2. The coefficient of heat transfer — the U factor

The U factor is the rate at which heat flows through each square metre of the surface
for every kelvin of temperature difference across it, in W/m2.K.

Four things move it:

**(a) Flow rate and turbulence of the medium outside.** Heat transfers only when
molecules actually strike the cold metal. Too slow and few arrive; too fast and many
shoot straight through untouched. There is an optimum, found by the manufacturer in
testing, and your job is to maintain that design flow in the field. It is why makers
stagger tube rows front to back and emboss or corrugate fins — turbulence forces
contact. Deeper coils give less bypass, though the extra airflow resistance works
against that.

**(b) Flow, turbulence and wetness inside.** The refrigerant should be saturated
throughout, with liquid clinging to the tube walls, and boiling turbulently — which is
why a loaded coil outperforms a lightly loaded one. Condensers are less predictable:
up to 25 per cent of a condenser may hold superheated vapour rather than liquid,
condenser temperatures are not uniform along their length the way evaporator surfaces
are, and subcooled liquid can pool in the lower tubes, particularly on capillary
systems in cold weather.

**(c) Resistance of the metal, plus anything foreign on it.** Copper-to-copper
conducts best, copper-to-aluminium next, steel worst — but the metal matters far less
than the ice, oil, dust or dirt sitting on it. On condensers, use only
manufacturer-recommended metal-based paints; plastic-based paints insulate the coil
and gut its performance.

**(d) Ratio of secondary fin area to primary tube area.** Enough primary area is
needed to keep the temperature even across the coil face. Given two coils of identical
total area, the one with four times more tube area performs markedly better.

> A U factor is only true for one particular vessel under one particular set of
> operating conditions. Change the icing, the airflow or the refrigerant flow and the
> U factor changes with it. Manufacturers' data always beats a table.

### Typical U factors for evaporators

| Evaporator condition | U factor (W/m2.K) |
|---|---|
| Natural convection, heavily iced | 3.0 to 4.5 |
| Natural convection, moderate icing | 5.5 |
| Natural convection, no icing | 7.0 |
| Forced convection, moderate icing | 10 to 15 |
| Forced convection, defrosting type | 20 |
| Forced convection, non-icing, 500 fins/m | 20 to 25 |
| Liquid-cooling coil in still liquid | 85 to 100 |
| Liquid-cooling coil, liquid moving at 0.2 m/s | 120 to 150 |
| Shell-and-tube or shell-and-coil, liquid at 0.5 m/s | 400 to 500 |
| Shell-and-tube or shell-and-coil, liquid at 1.0 m/s | 800 to 1000 |
| Baudelot or plate cascade chiller, direct expansion | 350 to 600 |

Notice the pattern: air duty is worth single figures to low twenties, liquid duty is
worth hundreds, and icing a gravity coil roughly halves its U factor.

No equivalent table exists for condensers, because of the superheat, varying
temperatures and standing liquid described above. As a guide, water-cooled condensers
at a normal water velocity of about 1.0 m/s give U factors of roughly 550 to 750
W/m2.K with normal scale formation — and scale alone can halve a water-cooled
condenser's heat transfer between cleans.

## 3. Rearranging the equation

Knowing any three quantities gives you the fourth:

- Area = Qh divided by (U x TD)
- U factor = Qh divided by (A x TD)
- TD = Qh divided by (A x U)

**Example 1 — estimating capacity.** A defrosting-type coil of 42 m2 area, assumed U
of 20 W/m2.K, running at 5 K TD.

Qh = 42 x 20 x 5 = **4200 W**

**Example 2 — sizing a plate evaporator.** A freezer plate is quoted at U = 12
W/m2.K, natural convection at 15 K TD, and the compressor delivers 400 W at a
saturated suction temperature of -30 degrees C.

A = Qh / (U x TD) = 400 / (12 x 15) = 400 / 180 = **2.2 m2**

**Example 3 — measuring the U factor of a coil in service.** A forced-draught
evaporator measures 16 m2. Air on the coil is at 4 degrees C, and the suction pressure
converts to a saturated suction temperature of -4 degrees C, so TD = 4 - (-4) = 8 K.
The manufacturer's capacity chart for that compressor, at that suction temperature,
gives 2300 W.

U = Qh / (A x TD) = 2300 / (16 x 8) = 2300 / 128 = **18.0 W/m2.K**

That example is the most useful of the lot, because every input is available on a job:
suction and head pressures give the saturated temperatures, a thermometer gives
air-on, a tape gives the area, and the compressor chart gives the watts. Once you have
a believable U factor for a manufacturer's range you can reuse it across that range to
expose an inefficient compressor, oil logging in a coil, or a modification such as a
fan change that quietly made things worse.

**Example 4 — building a replacement condenser.** A tube-in-tube water-cooled
condenser must be made up to replace a leaking one on a sealed unit. The compressor
delivers 1200 W at a saturated evaporating temperature of 2 degrees C and draws 600 W
of electrical input (fan excluded). The condenser must therefore reject:

1200 + 600 = **1800 W**

That relationship is worth remembering in its own right: **condenser capacity =
evaporator capacity + mechanical input energy**. At a mean TD of 8 K, with U estimated
from the table at 400 W/m2.K:

A = 1800 / (400 x 8) = 1800 / 3200 = **0.56 m2**

Now convert that area into a length of 10 mm tube running inside 20 mm tube. Length =
A / (pi x D) = 0.56 / (3.14 x 0.010) = 17.8 m. Working instead from the trade rule of
about 33 m of 10 mm tube per square metre gives 18.5 m; either way the answer is
**around 18 metres of tubing**, and you cut a little extra rather than a little less.

## 4. Mean temperature difference

When the medium changes temperature as it passes through — as water always does, and
air does too — the TD is not one number. Design engineers must use the **logarithmic
mean temperature difference (LMTD)**. For quick field work, provided the temperature
rise is under about 10 kelvins, an arithmetic approximation is close enough:

**A = ((t3 - t1) + (t3 - t2)) / 2**

where t1 is the medium entering, t2 the medium leaving, and t3 the refrigerant
temperature (condensing temperature for a condenser, evaporating temperature for an
evaporator).

**Worked example.** Water enters a condenser at 20 degrees C, leaves at 32 degrees C,
and the refrigerant condenses at 34 degrees C.

A = ((34 - 20) + (34 - 32)) / 2 = (14 + 2) / 2 = 16 / 2 = **8 K**

The same formula works for air-cooling evaporators and air-cooled condensers — just put
the air temperatures in place of the water temperatures. It deviates slightly from the
true logarithmic mean, which is acceptable at this level but not for design work.

## 5. Water flow and temperature rise

For water-cooled condensers you often need to convert between heat, flow rate and
temperature rise:

**Qh = M x C x (t2 - t1)**

where Qh is in kilowatts (kJ/s), M is the mass flow in kg/s (and 1 kg/s of water = 1
L/s), C is the specific heat capacity of water, 4.1868 kJ/kg.K, and (t2 - t1) is the
temperature rise through the condenser.

**Example A — how much water?** A water-cooled condenser has an 18 kW load and an 8 K
water temperature rise.

M = Qh / (C x (t2 - t1)) = 18 / (4.1868 x 8) = 18 / 33.49 = 0.537 kg/s = **0.537 L/s**

**Example B — what rise?** The load is 50 kW and 1.1 kg/s is circulated.

(t2 - t1) = Qh / (C x M) = 50 / (4.1868 x 1.1) = 50 / 4.605 = **10.8 K**

**Example C — what load?** 2.7 kg/s circulated with an 8 K rise.

Qh = M x C x (t2 - t1) = 2.7 x 4.1868 x 8 = **90.43 kW**

Water-cooled condensers are often selected independently of the compressor, so
manufacturers' tables and their scaling factors must be used. Select for a water
temperature rise of only about **5 to 6 kelvins**: a bigger rise means a higher
condensing temperature, lower compressor capacity and faster scale build-up.

## Condenser TD, for completeness

For an air-cooled condensing unit the condensing temperature is set by the condenser
supplied with the compressor, the operating suction temperature and the ambient air
temperature. Condensing TD is **saturated condensing temperature minus entering air
temperature**, and recommended values are published against ambient as the best
compromise between cost, compression ratio and performance.

**Worked example.** An open-drive R22 system evaporating at -5 degrees C in a 32
degrees C ambient has a recommended TD of 12.5 K from the design chart.

Condensing temperature = 32 + 12.5 = **44.5 degrees C**

When selecting a remote or unmatched condenser from tables, remember the capacity
relationship from Example 4 and keep the selection TD within the recommended limits.

## What to remember

- Qh = A x U x TD, and you can rearrange it to find any missing term.
- Gross fin area alone is a good field estimate of a finned coil's area.
- U factors are single figures for gravity air coils, tens for fan coils, hundreds for
  liquid coolers — and they change with icing and flow.
- Condenser capacity = evaporator capacity + compressor input power.
- Use the arithmetic mean TD only for rises under about 10 K; design work uses LMTD.
- 1 kg/s of water = 1 L/s, and C = 4.1868 kJ/kg.K.
`,
        quiz: [
          {
            q: "A finned evaporator is measured as 1.29 m2 primary tube area, 43.2 m2 gross fin area and 3.09 m2 of fin hole area. What is its total heat-transfer area?",
            options: [
              "43.2 m2",
              "41.4 m2",
              "47.6 m2",
              "38.8 m2",
            ],
            answer: 1,
            explain: "Total = primary + gross fin - holes = 1.29 + 43.2 - 3.09 = 41.4 m2. Note how the primary area and the hole area nearly cancel, which is exactly why gross fin area alone is a good quick estimate for a closely finned coil.",
          },
          {
            q: "A forced-draught coil of 16 m2 runs with air on at 4 degrees C and a saturated suction temperature of -4 degrees C, and the compressor chart gives 2300 W at that suction. What is the coil's U factor?",
            options: [
              "8.0 W/m2.K",
              "18.0 W/m2.K",
              "36.0 W/m2.K",
              "143.8 W/m2.K",
            ],
            answer: 1,
            explain: "TD = 4 - (-4) = 8 K, so U = Qh / (A x TD) = 2300 / (16 x 8) = 2300 / 128 = 18.0 W/m2.K. That figure sits sensibly in the forced-convection band of 10 to 25 W/m2.K. Dividing by area alone, or forgetting that the suction temperature is negative, produces the wrong answers offered.",
          },
          {
            q: "A compressor delivers 1200 W of refrigerating effect and draws 600 W of electrical input. What heat must the condenser reject?",
            options: [
              "600 W",
              "1200 W",
              "1800 W",
              "2400 W",
            ],
            answer: 2,
            explain: "Condenser capacity = evaporator capacity + mechanical input energy = 1200 + 600 = 1800 W. The compressor's work does not vanish; it ends up in the refrigerant and must leave through the condenser. Sizing a condenser on evaporator duty alone guarantees high head pressure.",
          },
          {
            q: "Water enters a condenser at 20 degrees C, leaves at 32 degrees C, and the refrigerant condenses at 34 degrees C. What is the approximate mean TD?",
            options: [
              "2 K",
              "8 K",
              "12 K",
              "14 K",
            ],
            answer: 1,
            explain: "Using the arithmetic approximation, ((34 - 20) + (34 - 32)) / 2 = (14 + 2) / 2 = 8 K. Taking only the inlet difference gives 14 K and only the outlet difference gives 2 K — both are the extremes, not the mean. Design engineers use the logarithmic mean, but this approximation is acceptable for rises under about 10 K.",
          },
          {
            q: "A water-cooled condenser rejects 18 kW with an 8 K water temperature rise. What flow rate is required?",
            options: [
              "0.24 L/s",
              "0.537 L/s",
              "2.15 L/s",
              "4.19 L/s",
            ],
            answer: 1,
            explain: "M = Qh / (C x rise) = 18 / (4.1868 x 8) = 0.537 kg/s, and 1 kg/s of water is 1 L/s. Remember also that condensers should be selected for a rise of only about 5 to 6 K — bigger rises push up condensing temperature and accelerate scaling.",
          },
        ],
      },

      /* ================================================================
         9 — TD selection, humidity, frost, defrost, oil
         ================================================================ */
      {
        id: "evaporator-td-frost-and-defrost",
        title: "Choosing the design TD: humidity, frost, defrost and oil return",
        minutes: 15,
        simple: "Two coils can remove exactly the same heat but leave a room at completely different humidities. A big coil that is only a few degrees colder than the room barely dries the air, so lettuce stays crisp; a small, very cold coil wrings the moisture out and the produce shrivels. That choice also decides how much frost you get, and frost is the thing that eventually strangles the coil.",
        refs: ref("Chapter 4, evaporator temperature difference and relative humidity", "Chapter 4, design temperature differences and frosting"),
        content: `
Here is the fact that turns coil selection from arithmetic into engineering: **for a
given load, the size of the evaporator decides the humidity of the room.** The
temperature difference between the entering air and the boiling refrigerant is what
the designer actually chooses, and the coil area follows from it.

## The same load, three different coils

Take three identical coolrooms, each with a 3 kW load and each held at 2 degrees C.
Assume a U factor of 15 W/m2.K in every case. Using Qh = A x U x TD:

| Product | Design TD | Coil area | Check | Resulting RH |
|---|---|---|---|---|
| Vegetables | 5 K | 40 m2 | 40 x 15 x 5 = 3000 W | about 93% |
| Carcase meat | 8 K | 25 m2 | 25 x 15 x 8 = 3000 W | about 85% |
| Cheese | 10 K | 20 m2 | 20 x 15 x 10 = 3000 W | about 78% |

Same room, same load, same room temperature, same watts — and coils that differ by a
factor of two in size and produce three different storage environments. The lower the
TD, the larger the coil and the higher the humidity.

## Why a colder coil dries the air

Relative humidity is the amount of water vapour in the air compared with the maximum
that air could hold at that temperature, expressed as a percentage. Warm air holds far
more moisture than cold air:

- air at 35 degrees C can hold about 36 grams of moisture per kilogram of dry air
- air at 23 degrees C can hold only about 18 g/kg

So a room at 23 degrees C and 50 per cent RH contains about 9 g/kg, and a coolroom at
4 degrees C at 80 per cent RH holds 80 per cent of the roughly 5 g/kg possible — about
4 g/kg.

Humidity is controlled by choosing, at design time, how much the air is cooled as it
passes over the coil. The colder the coil surface relative to the air, the more water
or ice condenses out on it, and the drier the air leaving. A big coil at a small TD
barely reaches below the air's dew point, so it removes heat without removing much
water. A small, cold coil at a large TD strips moisture out.

> Where a food can lose moisture through its skin, the room RH must be kept high to
> stop it dehydrating — while staying below the conditions that let bacteria and mould
> flourish. That balance is the whole reason design TD tables exist.

## Design temperature differences by product

These are design TDs between the air entering the evaporator and the vaporising
refrigerant, for short-term storage of roughly three to five days.

| Product | Storage temp | Moisture condition | Forced convection | Natural convection |
|---|---|---|---|---|
| Eggs, dairy produce, vegetables | 2 to 4 C | 90 to 95% | 3 to 6 K | 8 to 10 K |
| Fruit | 2 C | 90% | 6 K | 10 to 12 K |
| Cut meats | 1 C | 85 to 90% | 5 to 7 K | 10 to 12 K |
| Carcase meats | 2 to 3 C | 82 to 86% | 7 to 9 K | 12 to 14 K |
| Cheese, packaged or bottled goods | 3 to 4 C | 70 to 80% | 9 to 12 K | 14 to 16 K |
| Frozen goods | -20 C | about 90% | 5 to 7 K | 11 to 14 K |
| Air-conditioning | +23 C | 50% | 20 K | not applicable |

Two patterns are worth learning rather than memorising line by line. First, **the lower
the TD, the higher the humidity.** Second, **natural-convection coils always run a
larger TD than forced-convection coils** — because the slow-moving air passes over the
surface gently and removes less moisture from the goods, so the designer can afford a
colder coil for the same storage humidity.

## From TD to a suction pressure you can actually measure

This is where the table stops being theory. Subtract the design TD from the entering air
temperature and you have the saturated evaporating temperature; convert that to pressure
and you have the suction gauge reading you should see, assuming no suction line pressure
drop.

- **Fruit coolroom**, air entering at 2 degrees C, design TD 6 K. Evaporating temperature
  = 2 - 6 = **-4 degrees C**, which on R134a is about **151 kPa** gauge.
- **Meat coolroom**, air entering at 2 degrees C, design TD 8 K. Evaporating temperature
  = 2 - 8 = **-6 degrees C**, about **133 kPa** gauge on R134a.
- **Air-conditioner** holding 23 degrees C at 50 per cent RH, TD 20 K. Evaporating
  temperature = 23 - 20 = **3 degrees C**, about **224 kPa** gauge on R134a.

!FIG[pt-curve]

If a vegetable room's gauge is sitting where the cheese room's should be, you have just
found the reason the customer's lettuce is limp — and no amount of thermostat adjustment
will fix it, because the coil is the wrong size for the duty.

## Freezers and liquid coolers

For freezers, humidity usually matters much less, because most frozen product is
prepackaged. There is a different reason to keep the design TD low: **compressor
capacity falls sharply as suction pressure drops.** A larger evaporator running a small
TD holds the suction pressure up, and can allow a *smaller* compressor to do the same
job — cheaper to buy and cheaper to run.

For liquid coolers, two rules set the TD:

- the suction temperature must stay high enough that the liquid being cooled cannot
  freeze
- where humidity control is irrelevant, the suction temperature should be as high as
  possible, for maximum cooling power

## Frost, and why it wins if you let it

Any air-cooling coil running below 0 degrees C will frost. A little frost is harmless
and even slightly helpful, but past that point it becomes an insulating blanket and, on
a finned coil, a blockage in the air passages. Both effects push the coil colder, and a
colder coil frosts faster.

!FIG[frost-spiral]

That feedback loop is why defrost is a designed function of the system and not an
occasional chore. Left alone it ends with a block of ice, no airflow, a very low suction
pressure, a wet floor when the room finally warms, and often a liquid-flooded compressor
when the coil eventually clears.

!SIM[Watch an iced-up evaporator on the gauges](fault=icedEvaporator)

## Defrost methods

| Method | How it works | Typical use |
|---|---|---|
| Off-cycle (air) defrost | Fans run with the compressor off; room air above about 2 degrees C melts the frost | Coolrooms and cabinets above freezing |
| Manual brush or scrape | Frost removed by hand without stopping the plant | Bare-tube and plate primary-surface coils |
| Electric | Resistance elements in the coil block and drain pan | Commercial freezer rooms and cabinets |
| Hot gas | Discharge gas is diverted into the coil, which briefly becomes a condenser | Larger commercial and industrial plant, ice makers, plate freezers |
| Reverse cycle | The reversing valve makes the indoor coil a condenser | Heat pump air-conditioners |
| Water or brine spray | Water sprayed over the coil melts frost and washes it away | Some industrial and marine applications |

Whatever the method, the same practical points decide whether it works:

- **Termination should be on temperature, with time as a back-up**, so the defrost ends
  when the coil is clear rather than running on and heating the room.
- **Fans must be held off** until the coil has cooled back down after defrost, otherwise
  they blow melt water into the room as fog which promptly refreezes on the coil.
- **The drain must be heated and trapped outside the room** on freezer applications, or
  the melt water simply refreezes in the pan and the pipe.
- Ice appearing in the corners or centre of a fan coil means the defrost is not reaching
  those spots — usually the defrost period is too short.

>! Electric defrost elements sit inside a metal coil block that is earthed and often wet.
>! Treat every defrost circuit as live until proven dead, test before you touch, and never
>! reinstate a heater whose insulation resistance you have not checked. Hot-gas defrost
>! raises pressure rapidly in a coil that was at low suction pressure — never work on the
>! coil or its valves during a hot-gas cycle.

## Oil return

Oil leaves the compressor with the discharge gas whether you want it to or not. In the
evaporator it faces cold, viscous conditions, and if the refrigerant velocity cannot
sweep it along, it stays there. That is **oil logging**: a film of oil on the tube wall
that insulates the surface, plus a pool that reduces the volume available for
refrigerant. Capacity drops, and the compressor slowly runs itself short of oil.

It is most frequently seen on ammonia systems, because ammonia and mineral oil do not
mix and the oil settles out — which is why ammonia plants have oil drain pots at the low
points of vessels and a documented draining routine. It is also common in flooded
halocarbon evaporators, where the low-velocity liquid pool cannot carry oil out and
purpose-built oil rectifiers or heat exchangers are needed to recover it.

For ordinary DX systems, oil return is a piping and velocity problem:

- Keep suction gas velocity high enough to carry oil along horizontal runs and up
  vertical risers — commonly quoted minimums are around 2.5 m/s in horizontal lines and
  around 3.5 m/s in vertical risers, at *minimum* load, not full load.
- Slope horizontal suction lines back towards the compressor.
- Use a properly sized trap at the foot of a suction riser, and consider a double riser
  where capacity control means the velocity would otherwise collapse at part load.
- Never leave a suction line oversized because the fitting happened to be in the van;
  an oversized line kills the velocity and the oil never comes home.

## On the job

- The design TD sets the humidity, and the humidity is why the customer's product keeps
  or spoils.
- Lower TD equals bigger coil equals higher humidity; gravity coils always run a higher
  TD than fan coils.
- Convert the design TD into a target suction pressure before you start diagnosing.
- Keep freezer TDs low to hold suction pressure up and let a smaller compressor do the
  work.
- Defrost is designed, not optional: check termination, fan delay and drain heating
  before blaming the refrigeration circuit.
- Uneven ice, low capacity and a compressor short of oil all point back at the same
  place — the evaporator.
`,
        quiz: [
          {
            q: "Two coolrooms hold the same 3 kW load at 2 degrees C. Room A uses a 40 m2 coil at 5 K TD; Room B uses a 20 m2 coil at 10 K TD. What differs between them?",
            options: [
              "Room A removes twice as much heat",
              "Room B holds a higher humidity",
              "Room A holds a much higher humidity, around 93% compared with about 78% in Room B",
              "Nothing differs, since both remove 3000 W",
            ],
            answer: 2,
            explain: "Both remove 3000 W — that is the point of the comparison. The colder coil in Room B condenses far more moisture out of the air, leaving it drier at about 78% RH, suitable for cheese but ruinous for vegetables. Room A's large, gentle coil holds about 93% RH.",
          },
          {
            q: "A fruit coolroom is designed for air entering the coil at 2 degrees C with a 6 K design TD on R134a. What suction pressure should you expect, ignoring line pressure drop?",
            options: [
              "About 133 kPa, corresponding to -6 degrees C",
              "About 151 kPa, corresponding to -4 degrees C",
              "About 224 kPa, corresponding to +3 degrees C",
              "About 320 kPa, corresponding to +8 degrees C",
            ],
            answer: 1,
            explain: "Evaporating temperature = air on minus TD = 2 - 6 = -4 degrees C, which is about 151 kPa gauge on R134a. The 133 kPa figure is the -6 degrees C meat-room condition (8 K TD) and 224 kPa is the air-conditioning condition at 3 degrees C.",
          },
          {
            q: "Why do natural-convection evaporators use a larger design TD than forced-convection coils for the same product?",
            options: [
              "Because gravity coils have a higher U factor",
              "Because slow-moving air removes less moisture from the product, so a colder coil can be tolerated at the same storage humidity",
              "Because gravity coils never frost",
              "Because the compressor runs at higher suction pressure",
            ],
            answer: 1,
            explain: "Air velocity drives moisture loss from unwrapped product. Because gravity air moves gently, the designer can run a bigger TD without dehydrating the goods. Gravity coils actually have far lower U factors, which is why they must also be physically much larger.",
          },
          {
            q: "Why should the design TD on a freezer be kept as low as practical, even though humidity is less critical there?",
            options: [
              "To reduce the amount of frost enough to eliminate defrost",
              "Because compressor capacity falls sharply as suction pressure drops, so a larger coil at low TD holds suction up and may allow a smaller compressor",
              "Because a low TD prevents oil logging",
              "Because low TD reduces the refrigerant charge required",
            ],
            answer: 1,
            explain: "A bigger evaporator running a small TD keeps the evaporating temperature and suction pressure higher, where the compressor is far more productive — often enough to select a smaller, cheaper machine. Defrost is still required, and TD does not eliminate oil-logging or set the charge.",
          },
          {
            q: "Why must the evaporator fans be held off for a period after an electric defrost terminates?",
            options: [
              "To let the elements cool so they are not damaged by airflow",
              "To save energy during the off cycle",
              "To stop the fans blowing melt water and warm moist air into the room, which refreezes on the coil and in the product",
              "To allow the expansion valve to equalise",
            ],
            answer: 2,
            explain: "Immediately after defrost the coil and drain pan are wet and warm; running the fans throws that water into the room as fog which then refreezes on the coil and frosts the product. A fan delay lets the coil re-chill and the water drain first. Element cooling and valve equalisation are not the reason.",
          },
        ],
      },

    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
