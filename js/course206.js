/* =========================================================================
   Course content, module 206 — Load estimating and equipment selection.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 6 — Load estimating
   and equipment selection.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Ch 6, Load estimating and equipment selection",
    "AIRAH DA09 Load Estimation; AREMA/CSIRO air-conditioning survey form",
    "AS 1668.2 — mechanical ventilation, minimum outdoor air requirements",
  ];

  const MODULES = [
    {
      id: "v2-load-estimating",
      stream: "v2",
      title: "R2.6 · Load estimating and equipment selection",
      blurb: "How to build a refrigeration heat load from wall, air change, product and miscellaneous components, then use it to select a condensing unit, an evaporator and an air-conditioner.",
      lessons: [

        /* ============================================================== */
        {
          id: "why-load-estimating",
          title: "What a heat load estimate decides",
          minutes: 10,
          simple: "Before anyone buys a coolroom plant, somebody has to work out how much heat leaks into the room every second, because that is exactly how much heat the machine has to pump out again. It is like sizing a bilge pump for a leaking boat: measure the leak first, then buy the pump. Guess it and you either sink or you pay for a pump you never needed.",
          refs: REFS,
          content: `
Matching plant capacity to the load is the single decision that most affects
whether a refrigeration or air-conditioning installation works, and whether the
job is profitable. Get the load right and the only service calls you will get
are ordinary wear and tear. Get it wrong and no amount of clever servicing will
fix it — an undersized compressor cannot be persuaded to hold temperature in
February, and an oversized one will short-cycle, control humidity badly and cost
the customer money every hour it runs.

Load estimating is not just a designer's job. Any technician who quotes on work
— and most self-employed technicians do — has to calculate a load and select
equipment. Quote on oversized plant and you lose the job to a competitor who
calculated properly. Quote on undersized plant and you win the job, then own the
problem for its whole life.

## Repair or replace?

Good service work depends on knowing when a component has failed and when it was
simply never big enough. A room that will not pull down in summer may have:

- a customer loading far more warm product each day than the room was designed for
- insulation that has taken up water and lost most of its resistance
- a door left open, or strip curtains stripped out
- a design that was wrong from day one.

Only the first three are service problems. The fourth is a redesign, and the way
you tell them apart is by re-running the load estimate against what is actually
happening in the room.

## The same physics, different emphasis

The heat sources are the same everywhere; only their relative size changes. You
need the heat flow through a freezer wall for the same reason you need the heat
flow through an office wall. But an office with a glass frontage is dominated by
radiant solar gain, while a cold store with no glass is dominated by wall
leakage and product. Because the emphasis differs so much, refrigeration and
air-conditioning loads are estimated on separate forms with different factors.

Most design offices now use software, and it is faster and neater. But every
program deals with exactly the same variables the paper form does, so learning
the form teaches you what the program is doing — and lets you sanity-check an
answer that looks wrong.

## Cabinet and coolroom design today

Display cabinets and coolrooms can be almost any shape. Once the dominant design
driver was product display; today running cost carries equal weight. Current
commercial cabinet design tends towards:

- sleek presentation so the product sells
- heavier and better insulation to cut energy loss
- customer access to product without discomfort (no cold aisle)
- glass-door cabinets instead of open multi-decks
- efficient refrigeration design, with energy-efficient defrost and EC fan motors
- enough storage volume with easy restocking access.

Every one of those choices changes the load you are about to calculate, which is
why the estimate starts with the cabinet, not the compressor.

## The four load components

For a refrigerated space, everything you calculate falls into four buckets:

| Symbol | Component | What it is | How it is found |
|---|---|---|---|
| Qh1 | Wall (transmission) leakage | Heat conducted through walls, ceiling and floor | Qh = A × U × TD, per wall or averaged |
| Qh2 | Air change load | Warm moist air entering on door openings and infiltration | Volume × air changes × kJ per cubic metre |
| Qh3 | Product load | Heat taken out of the goods stored, in the time allowed | Sensible, latent of freezing, and respiration |
| Qh4 | Miscellaneous load | Lights, evaporator fans, people, machinery, defrost | Watts × hours of operation ÷ 24 |

Total load = Qh1 + Qh2 + Qh3 + Qh4.

Wall leakage is a rate (watts) straight away. Air change and product loads are
naturally worked out as kilojoules over 24 hours, so they are converted to a rate
by dividing by the seconds in a day:

kJ per 24 hours ÷ (3600 × 24) = kJ/s = kW

Miscellaneous loads are watts multiplied by their running hours and divided by 24
to get an average over the day. Then the whole total is scaled up, because a
compressor is not meant to run 24 hours — typically 16 or 18 — so it has to shift
the day's heat in fewer hours.

## Design information you must collect first

| Item | Why you need it |
|---|---|
| Outside dimensions, and wall thickness | Surface area and internal volume |
| Construction and insulation type/thickness | The U factor of each surface |
| Ambient on each surface (and ground temperature) | The TD on each surface |
| Room design temperature and RH | TD, and later the evaporator TD |
| Product, mass loaded per day, entering temperature | The product load and the time allowed |
| Usage — how busy, how often the door opens | The air change multiplier |
| Lights, fan watts, people, shift hours | Miscellaneous load |
| Town and site (in sun, in a roof space, inside a shop) | Design ambient and solar allowance |

Design ambients come from published data. These are representative Australian
summer and winter design conditions; refrigeration work normally uses the summer
dry bulb, while air-conditioning needs the wet bulb and the winter figure too.

| Town | Summer DB (°C) | Summer WB (°C) | Winter DB (°C) |
|---|---|---|---|
| Sydney | 31.1 | 22.7 | 7.2 |
| Newcastle | 30.4 | 22.6 | 6.6 |
| Melbourne | 34.0 | 20.5 | 3.5 |
| Mildura | 39.5 | 21.4 | 0.8 |
| Brisbane | 30.8 | 24.9 | 9.2 |
| Cairns | 32.8 | 26.7 | 15.1 |
| Adelaide | 37.0 | 21.4 | 4.9 |
| Perth | 36.6 | 22.4 | 7.4 |
| Port Hedland | 39.5 | 28.0 | 14.4 |
| Hobart | 27.1 | 18.5 | 1.5 |
| Launceston | 28.4 | 19.4 | -1.5 |
| Canberra | 34.3 | 19.6 | -2.2 |
| Darwin | 34.4 | 27.7 | 18.1 |

Local knowledge beats the table. A condensing unit on a black roof behind a
parapet sees an ambient well above the town figure, and a coolroom inside an
unventilated roof space can see 50°C on the ceiling.

> An estimate is a stack of educated guesses: how often the door opens, how much
> product arrives, how warm it is when it does, how hot the day really gets. The
> designer is not responsible for the customer's habits — but they are
> responsible for writing the assumptions down, so that if the room later fails
> to hold temperature, everyone can see which guess was wrong.

>! Before any sale is confirmed, the design specification and the price must be
>! given to the purchaser in writing and agreed by both parties. Verbal
>! assumptions about product loading are the single most common cause of disputes
>! over an underperforming room.

## On the job

- Sketch the room before you calculate anything, with dimensions, orientation and the ambient on each surface written on it.
- Ask what goes in the room each day, not what the room holds in total — turnover drives the product load.
- Record the assumptions on the form: usage factor, entering temperature, running hours.
- Remember the four buckets. If a load will not add up, one bucket has been forgotten — usually fans or air changes.
- Treat the load estimate as a service tool too: re-run it when a room stops performing and compare it with what the customer is actually doing.
`,
          quiz: [
            {
              q: "Why is total load multiplied by 24 and divided by the compressor running hours?",
              options: [
                "To convert kilojoules into kilowatts",
                "Because the plant only runs 16 to 18 hours a day, so it must remove the whole day's heat in that time",
                "To add a safety factor for extreme ambients",
                "Because compressor capacity is rated over 24 hours",
              ],
              answer: 1,
              explain: "The room gains heat for all 24 hours, but the machine is only running for 16 hours (off-cycle defrost) or 18 (automatic defrost). While running it must therefore remove heat faster than the average rate. The kJ-to-kW conversion is a separate step, done by dividing by 3600 × 24.",
            },
            {
              q: "A busy takeaway shop's coolroom never pulls down in summer. Which finding would mean this is a design fault rather than a service fault?",
              options: [
                "The condenser is blocked with lint",
                "The door is propped open at lunchtime",
                "Re-running the load shows 400 kg/day of warm product arriving against a design of 100 kg/day",
                "The TXV superheat is set at 12 K",
              ],
              answer: 2,
              explain: "A blocked condenser, an open door and bad superheat are all serviceable faults. Four times the design product load is an overload the customer created — no adjustment fixes it; the room needs re-designing or the loading pattern must change. The load estimate is what lets you prove which it is.",
            },
            {
              q: "Which load component is normally calculated straight away as a rate in watts, rather than as kilojoules per 24 hours?",
              options: ["Product load", "Air change load", "Wall transmission load", "Respiration load"],
              answer: 2,
              explain: "Qh = A × U × TD gives watts directly, because U is defined in watts per square metre per kelvin. Product and air change loads come out as kilojoules for the day and must be divided by 3600 × 24 (or by the allowed cooling time) to become kilowatts.",
            },
            {
              q: "Why do refrigeration and air-conditioning loads use different estimate forms?",
              options: [
                "Because air-conditioning uses different units",
                "Because the same heat sources have very different emphasis — glass solar gain dominates a building, product and air change dominate a coolroom",
                "Because refrigeration loads ignore conduction",
                "Because only air-conditioning loads include people",
              ],
              answer: 1,
              explain: "The physics is identical; the weighting is not. A cold store has no glass and huge product loads, while an office has large solar gain through glass, ventilation air and latent load from people. Both forms use Qh = A × U × TD, and both count people — the coolroom form just uses far higher watts per person for cold rooms.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "insulation-materials",
          title: "Insulation: materials, thickness and why heat gets in",
          minutes: 11,
          simple: "Insulation does not block heat, it slows it down. The trick every insulation uses is to trap gas in millions of tiny bubbles so the gas cannot circulate and carry heat across. The best insulated vessel ever built is the vacuum flask, and every coolroom panel is a cheap, practical attempt at the same idea.",
          refs: REFS,
          content: `
The job of insulation is to reduce the rate of heat flow from one place to
another. It never stops it. Choosing insulation sensibly means understanding the
three ways heat travels, because a good insulator has to defeat all three.

!FIG[heat-flow]

## The three paths

**Conduction.** Heat is molecular vibration. Where molecules touch — inside a
solid, or where one body touches another — fast-vibrating molecules speed up
their slower neighbours, and the energy is passed along. Different materials
pass it at very different rates: copper moves heat far faster than lead, lead far
faster than polyurethane foam. Metals conduct, timber and foamed plastics resist.

**Convection.** When a fluid molecule (liquid or gas) picks up energy it moves
faster, needs more room, becomes less dense than its neighbours and rises, giving
up energy to whatever it collides with along the way. Cold molecules take its
place and a circulating current is set up, so heat is carried bodily from one
place to another. Convection is the reason a big open air cavity is a poor
insulator and a foam full of sealed cells is a good one.

**Radiation.** Radiant energy crosses space and vacuum, needing no medium at all.
Solar radiation delivers close to one kilowatt on every square metre of surface,
and even out of direct sun, reflected radiation matters — every warm object
radiates to its surroundings continuously.

## The ideal — the vacuum flask

The Dewar or vacuum flask is as close to perfect as insulation gets, and it beats
all three paths at once:

1. The internal surfaces are silvered, so radiant heat is reflected back.
2. The space between the walls is evacuated. With almost no gas molecules to move
   between hot and cold walls there is almost no convection or conduction — though
   a perfect vacuum is never achieved in practice.
3. The two walls touch only at the neck, so the conduction path is a long, thin
   one.

Building a coolroom like a vacuum flask is not practical, but the idea survives:
evacuated double-glazed panels are used for the glass doors and display panels of
commercial cabinets. Note that glass does not stop radiation, which is why solar
gain through display glass is still significant.

## Real insulants

Practical insulation resists conduction, then adds a cellular or foamed structure
that traps air — or better still, a gas of lower conductivity than air — in cells
small enough to prevent the trapped gas convecting. Resistance to radiation is
improved by keeping the surface light in colour, which in practice is done by
painting the protective metal skin white or silver.

| Material | Typical k (W/m·K) | Strengths | Watch out for |
|---|---|---|---|
| Expanded polystyrene (EPS) | 0.032 | Light, strong, cheap, machine-rolled into metal-clad panels | Flammable; dissolves in petrol and diesel fumes; soaks up water in freezers unless perfectly sealed |
| Polyurethane (PUR) | 0.026 | Best k value; can be poured/foamed in place; self-adhering; hard skin resists water; resists oils and petrol | Burns and gives off toxic gases in a fire; needs controlled mixing and temperature |
| Glass wool / rock wool | 0.036 | Non-combustible, cheap, fine for above 0°C and duct work | Not recommended for cold rooms today; relies on a perfect vapour seal, and is ruined by water |
| Corkboard | 0.043 | Traditional, stable | Superseded; poor k for the thickness |
| Caneite | 0.052 | Building board | Not a refrigeration insulant |

Expanded polystyrene was the first synthetic insulant to be fully accepted. It is
made by pre-expanding polystyrene beads with steam to the right density, letting
them cool and harden, then re-heating them in a mould so they expand again and
fuse together. Sheets cut from block and used in freezers should have the cut
faces sealed with adhesive.

Polyurethane's big advantage is that it can be poured and foamed on site, filling
awkward shapes and voids that a slab cannot reach. It sticks to metal with real
strength — panels up to about 4 m × 2 m with metal both sides will carry normal
coolroom wall and ceiling loads — and its tight closed cells insulate better than
the air-filled cells of polystyrene. Its hard surface skin also keeps water out.

Fibreglass was used extensively in the 1960s and early 70s, even in -20°C
cabinets, and it worked only where every joint and screw hole was sealed
faultlessly. Countless cabinets in both polystyrene and fibreglass were ruined
later by technicians drilling for tubing, flex or a nameplate and failing to seal
the hole with mastic.

## Choosing a thickness

Two competing arguments decide thickness:

- The cost of extra insulation against the cost of the larger plant, longer
  running time and higher energy consumption it saves — plus the environmental
  cost of that energy.
- The physical penalties of under-insulating: sweating or ice forming on the
  outside of the cabinet, and the liner heaters needed to prevent it.

This table is a working guide to minimum thicknesses, based on a 32.5°C ambient.
Manufacturers routinely achieve less with high-quality foam, good vapour sealing,
plastic liners and no metal fittings bridging between the skins.

| Application and room temperature | Polystyrene (mm) | Polyurethane (mm) | Glass wool (mm) |
|---|---|---|---|
| Air-conditioning ceilings, 22°C | Fire risk | Fire risk | 100–200 |
| Cabinets and coolrooms, 4 to 6°C | 125 | 100 | Not recommended |
| Cabinets and coolrooms, 0°C | 150 | 125 | Not recommended |
| Freezer storage, -20°C | 200 | 150 | Not recommended |
| Freezer processing, -40°C | 250 | 200 | Not recommended |

A metal fitting that runs from the inside skin to the outside skin — a through
bolt, a steel frame, a badly detailed door frame — is a thermal bridge. It will
carry more heat than a large area of foam and will sweat or frost on the warm
side, which is exactly where the water gets in.

>! Both EPS and PUR panels burn. Polyurethane in particular feeds a fire with
>! dense, highly toxic smoke, and sandwich panel fires spread inside the panel
>! where you cannot see them. Never braze, grind or use a hot air gun against a
>! panel face without cutting the skin back, protecting the foam and having an
>! extinguisher and a fire watch. Check the site fire safety requirements before
>! any hot work on panel construction.

## On the job

- Insulation value is destroyed by water long before it is destroyed by age — treat every penetration as a potential failure.
- White or bright metal skins on sun-exposed walls cut the radiant part of the load for nothing.
- Cut polystyrene faces in freezers must be sealed; the foam will otherwise drink water and ice up internally.
- If you cannot find a nameplate, identify the foam: polyurethane is yellow-brown with a hard skin, polystyrene is white and beady.
- More insulation is usually cheaper than more compressor over the life of the room; say so when you quote.
`,
          quiz: [
            {
              q: "Why does a foamed plastic insulate better than the same thickness of still air in an open cavity?",
              options: [
                "The plastic has a lower conductivity than air",
                "The tiny sealed cells stop the trapped gas convecting, so it cannot carry heat across the cavity",
                "The plastic reflects radiation",
                "The cells are under vacuum",
              ],
              answer: 1,
              explain: "Still air is actually a better conductor-resister than most solids, but air in a large cavity circulates and moves heat by convection. Chopping it into millions of sealed cells kills the convection. The plastic itself conducts more than air does, and the cells contain gas, not vacuum.",
            },
            {
              q: "Which insulation would you specify for a -35°C processing freezer, and roughly how thick?",
              options: [
                "Glass wool, 200 mm",
                "Polyurethane, about 200 mm",
                "Polystyrene, 100 mm",
                "Corkboard, 75 mm",
              ],
              answer: 1,
              explain: "For freezer processing near -40°C the guide is 250 mm of polystyrene or 200 mm of polyurethane. Glass wool is not recommended for cold rooms at all, and 100 mm of polystyrene is a chiller thickness, not a low-temperature one.",
            },
            {
              q: "A refrigerated transport body is being insulated. Why is polyurethane usually preferred over polystyrene?",
              options: [
                "It is lighter",
                "It is non-combustible",
                "It resists oils and petrol, which dissolve polystyrene, and it can be foamed in place around the frame",
                "It has a higher k value",
              ],
              answer: 2,
              explain: "Polystyrene is attacked by petrol and diesel fumes, which is fatal in transport work, and cannot fill an awkward chassis void. Polyurethane resists oils and foams in place. It is slightly heavier, not lighter, and it is combustible — a lower k value is better, not higher.",
            },
            {
              q: "A technician drills a coolroom panel for a drain line and leaves the hole unsealed. What is the real consequence?",
              options: [
                "Nothing, the hole is far smaller than the wall area",
                "Only a small direct air leak equal to the hole area",
                "Moist air is drawn into the foam as the wall breathes, wetting or icing the insulation and progressively destroying its value",
                "The panel skin will corrode from the inside only",
              ],
              answer: 2,
              explain: "The direct leak through the hole is trivial. The damage is that the hole becomes a permanent path for water vapour into the insulation, where it condenses or freezes. Wet insulation loses most of its resistance and, in a freezer, expanding ice bulges the panels apart.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "wall-heat-leakage",
          title: "k, U and R values, and the wall transmission load",
          minutes: 13,
          simple: "Every wall leaks heat at a rate you can calculate from three numbers: how big it is, how good it is, and how hard the heat is pushing. Multiply area by the U factor by the temperature difference and you get watts. The rest is looking up the right numbers and adding up the walls.",
          refs: REFS,
          content: `
The heat that leaks through the fabric of a coolroom is the first of the four
load components, and it is the one you can calculate most precisely. Everything
rests on one equation:

**Qh = A × U × TD**

where A is area in square metres, U is the coefficient of heat transfer in
W/m²·K, and TD is the temperature difference in kelvins across the surface.

## The three numbers manufacturers quote

**(a) Thermal conductivity, the k value (W/m·K).** The heat that will pass
through a slab of one homogeneous material, one square metre in area and one
metre thick, for each kelvin of temperature difference. The unit falls out of the
arithmetic: watts × thickness ÷ (area × K) = (W × m) ÷ (m² × K) = W/m·K.
Conductivity lets you compare insulants fairly, even though a one-metre thickness
is unrealistic.

**(b) Coefficient of heat transfer, the U factor (W/m²·K).** The rate at which
heat flows through each square metre of an actual wall for each kelvin of
temperature difference between the two sides. Unlike k, U describes a particular
wall in a particular condition, and it is affected by:

- the air velocity over the outside surface
- the air velocity over the inside surface
- the colour of the surface, if it sees radiant heat
- any moisture that has entered the insulation
- the sealing of joints, and any timber framing or bolts through the wall
- above all, the insulation thickness.

For coolrooms and cabinets, published U factors usually assume about 8 m/s of air
over one side and still air on the other. The effect of doors and small openings
is neglected provided they are well sealed.

Converting k to U for a single homogeneous layer:

U = k ÷ thickness in metres

**(c) Thermal resistance, the R value (m²·K/W).** The reciprocal of U — the area
and temperature difference needed to let one watt through. Higher is better, and
resistances of layers can simply be added, which is why R is used when comparing
constructions.

R = 1 ÷ U, and for a layer, R = thickness ÷ k

### Worked example — U and R of polystyrene

A wall is 100 mm of polystyrene, k = 0.032 W/m·K.

U = 0.032 ÷ 0.100 = **0.32 W/m²·K**

R = 1 ÷ 0.32 = **3.125 m²·K/W**

Halve the thickness to 50 mm and:

U = 0.032 ÷ 0.050 = **0.64 W/m²·K**, R = 1 ÷ 0.64 = **1.56 m²·K/W**

Half the insulation, double the heat flow. That single line explains most
under-performing coolrooms.

## Conductivity data

| Material | k (W/m·K) |
|---|---|
| Polyurethane | 0.026 |
| Polystyrene | 0.032 |
| Glass wool | 0.036 |
| Onozote (expanded rubber) | 0.040 |
| Corkboard | 0.043 |
| Caneite | 0.052 |
| Particle board | 0.108 |
| Pine | 0.113 |
| Jarrah | 0.21 |
| Brickwork, fired clay | 1.15 (variable) |
| Concrete, structural | 1.44 |

Note the range: jarrah conducts about eight times as fast as polyurethane, and
concrete more than fifty times as fast.

## Compound walls and air films

Real walls are layers. Where a surface is rough, a film of air clings in the
crevices and adds resistance. The outside air film is called f-o and the inside
film f-i, and both are quoted as U factors or as resistances. Published building
U factors already include them.

To find U for any built-up wall: add the R values of every layer including the
air films, then take the reciprocal.

U = 1 ÷ (R1 + R2 + R3 …)

### Worked example — double brick plus insulation

A wall is double brick with an air space, lined with 50 mm of polystyrene.

- R of double brick with air space = 0.51 m²·K/W
- R of 50 mm polystyrene = 1.56 m²·K/W
- Total R = 0.51 + 1.56 = 2.07 m²·K/W

U = 1 ÷ 2.07 = **0.483 W/m²·K**

Use published, tested U factors whenever they exist. These are typical values for
building elements, air films included:

| Element | U (W/m²·K) | R (m²·K/W) |
|---|---|---|
| Single glass, 6 mm | 6.10 | 0.164 |
| Double glass, 12 mm cavity | 3.2 | 0.302 |
| Single brick, 90 mm clay | 4.20 | 0.238 |
| Double brick with air space | 1.90 | 0.513 |
| Brick veneer (brick, cavity, plaster) | 2.2 | 0.457 |
| Internal wall, plaster–brick–plaster | 2.55 | 0.392 |
| Fibre cement sheet, cavity, 10 mm gypsum | 2.63 | 0.398 |
| 40 mm door to outside | 2.70 | 0.36 |
| Concrete slab floor 100 mm, room below, heat flow up | 3.5 | 0.286 |
| Concrete slab floor 100 mm, room below, heat flow down | 2.6 | 0.385 |
| 10 mm gypsum ceiling, heat flow up (winter) | 0.95 | 1.06 |
| 10 mm gypsum ceiling, heat flow down (summer) | 0.5 | 1.99 |
| Gypsum ceiling + 50 mm insulation + tiled roof, flow down | 0.36 | 2.7 |
| Ground surface conductance | 12.5 | 0.08 |
| Inside air film f-i | 8.3 | 0.12 |
| Outside air film f-o (moving air) | about 25 | 0.04 |

## Worked example 1 — a cork-insulated wall

A coolroom wall is 3 m long by 2 m high, made of 75 mm corkboard. Ambient is
36°C, the room is at 2°C.

- U = k ÷ thickness = 0.043 ÷ 0.075 = 0.573 W/m²·K
- TD = 36 - 2 = 34 K
- A = 3 × 2 = 6 m²

Qh = 6 × 0.573 × 34 = **117 W**

## Worked example 2 — converting it to a freezer

The same room is to run at -20°C, and 50 mm of polystyrene is added inside the
existing cork.

- R of cork = 0.075 ÷ 0.043 = 1.74 m²·K/W
- R of polystyrene = 0.050 ÷ 0.032 = 1.56 m²·K/W
- Total R = 3.30 m²·K/W, so U = 1 ÷ 3.30 = 0.303 W/m²·K
- TD = 36 - (-20) = 56 K

Qh = 6 × 0.303 × 56 = **102 W**

The temperature difference has jumped by 65 per cent, yet the heat flow has gone
*down*, because the added resistance more than compensated. That is the
insulation-versus-plant trade-off in one calculation.

## Surface area of a room

Coolrooms have six surfaces. For prefabricated transportable rooms the
construction, thickness and surrounding air temperature can usually be taken as
the same all round, and the **outside** dimensions are used.

Total area = 2(w × l) + 2(w × h) + 2(l × h)

For a room 8 m long × 4 m wide × 2.8 m high:

- floor and ceiling: 4 × 8 × 2 = 64.0 m²
- front and rear: 4 × 2.8 × 2 = 22.4 m²
- both sides: 8 × 2.8 × 2 = 44.8 m²
- **Total = 131.2 m²**

## When the surfaces are not all alike

A room built into the corner of a building might have two walls against outside
ambient (possibly in the sun), two walls inside an air-conditioned space perhaps
15 K cooler, a ceiling under an enclosed roof space that can exceed 50°C, and a
floor on ground at about 20°C. Those TDs are wildly different.

Good design varies the insulation thickness so the leakage per square metre comes
out comparable, and then a single averaged calculation is fair. If it has not
been varied, or the room is large and accuracy matters, calculate each surface
separately and add the results.

## Allowing for solar gain

A wall in the sun runs hotter than the shade-air temperature, so the TD across it
is larger than ambient minus room. The correction is made by adding kelvins to
the TD, not by changing U.

| Surface | East wall | North wall | West wall | Flat roof |
|---|---|---|---|---|
| Dark: black paint, black tile | 5 | 3 | 5 | 11 |
| Medium: brick, red tile, dark cement, red/grey/green paint | 3.5 | 2 | 3.5 | 8 |
| Light: white paint, white cement, white stone | 2 | 1 | 2 | 5 |

Example: a brick coolroom wall faces east, room 3°C, ambient 36°C.

Corrected TD = (36 - 3) + 3.5 = **36.5 K**

## Full worked example — transmission load of a coolroom

A prefabricated coolroom is 6 m long × 5 m wide × 3 m high (outside). Walls and
ceiling are 75 mm polyurethane between metal skins. The floor is the same 75 mm
polyurethane panel with 25 mm jarrah flooring and a metal top over it. The room
stands inside a building on a concrete floor. Ambient 37°C, ground surface 27°C,
room temperature 2°C.

**1. Area of walls and ceiling**

- 6 × 3 × 2 = 36 m²
- 5 × 3 × 2 = 30 m²
- ceiling 6 × 5 = 30 m²
- total = 96 m²

**2. Area of floor** = 6 × 5 = 30 m²

**3. U of walls and ceiling**

U = 0.026 ÷ 0.075 = 0.346 W/m²·K

**4. U of the compound floor**

- R of the polyurethane = 1 ÷ 0.346 = 2.89 m²·K/W
- R of 25 mm jarrah = 0.025 ÷ 0.21 = 0.119 m²·K/W
- total R = 3.009 m²·K/W
- U = 1 ÷ 3.009 = 0.332 W/m²·K

**5. Walls and ceiling heat flow** (TD = 37 - 2 = 35 K)

Qh = 96 × 0.346 × 35 = 1163 W = **1.163 kW**

**6. Floor heat flow** (TD = 27 - 2 = 25 K)

Qh = 30 × 0.332 × 25 = 249 W = **0.249 kW**

**7. Total transmission load** = 1.163 + 0.249 = **1.412 kW**

> Because of variables you cannot calculate — timber framing, metal-to-metal
> joints, leakage past door seals, bolts and tubing through the wall — a
> transmission figure is an estimate at best. Working to the nearest 0.01 kW is
> more than adequate; quoting four decimal places just hides the guesswork.

## On the job

- U up, heat up: double the insulation thickness and you halve the leakage, near enough.
- Add resistances, never U factors, when layers are in series.
- Always use outside dimensions for area and inside dimensions for volume.
- Check the ceiling: an enclosed roof space is often the hottest surface on the job and is easy to forget.
- Wet insulation invalidates every U factor on the form — if a panel is damp, the room is under-insulated no matter what the drawings say.
`,
          quiz: [
            {
              q: "A panel is 60 mm of polyurethane (k = 0.026 W/m·K). What is its U factor?",
              options: ["0.43 W/m²·K", "0.23 W/m²·K", "1.56 W/m²·K", "2.31 W/m²·K"],
              answer: 0,
              explain: "U = k ÷ thickness in metres = 0.026 ÷ 0.060 = 0.433 W/m²·K. The 2.31 answer is the R value (1 ÷ 0.433), and 0.23 comes from dividing thickness by k incorrectly scaled — always check the units: U is watts per square metre per kelvin.",
            },
            {
              q: "A wall is 100 mm polystyrene (R = 3.125) lined internally with 25 mm particle board (k = 0.108). What is the overall U?",
              options: ["0.32 W/m²·K", "0.29 W/m²·K", "0.44 W/m²·K", "3.36 W/m²·K"],
              answer: 1,
              explain: "R of the board = 0.025 ÷ 0.108 = 0.231. Total R = 3.125 + 0.231 = 3.356, so U = 1 ÷ 3.356 = 0.298 W/m²·K. You must add the resistances then invert; adding or averaging U factors gives the wrong answer, and 3.36 is the resistance, not the coefficient.",
            },
            {
              q: "A 20 m² white-painted flat roof over a 0°C coolroom sits in a 35°C ambient. What TD should be used?",
              options: ["35 K", "40 K", "46 K", "35 K plus 11 K for a dark surface"],
              answer: 1,
              explain: "TD = (35 - 0) = 35 K, plus the solar allowance for a light-coloured flat roof, which is 5 K, giving 40 K. The 11 K allowance is for a dark roof; using it on white paint would oversize the plant, and ignoring solar altogether would undersize it.",
            },
            {
              q: "Why can a freezer conversion end up with LESS wall heat flow than the original chiller, even though the TD nearly doubles?",
              options: [
                "Because cold air conducts less heat",
                "Because the added layer of insulation raises total R by more than the TD rises in proportion",
                "Because the U factor falls as the room gets colder",
                "Because the outside air film increases at low temperature",
              ],
              answer: 1,
              explain: "In the worked example, TD rose from 34 K to 56 K (a factor of 1.65) but total R rose from 1.74 to 3.30 (a factor of 1.90), so Qh fell from 117 W to 102 W. U is a property of the construction, not the room temperature, and the air films barely change.",
            },
            {
              q: "For a 6 × 5 × 3 m prefabricated room, why is the floor calculated separately from the walls and ceiling?",
              options: [
                "Floors are always uninsulated",
                "The floor has both a different construction (extra jarrah layer) and a different TD (ground temperature, not air ambient)",
                "Floors use R values while walls use U factors",
                "Because floor area is not part of the total surface area",
              ],
              answer: 1,
              explain: "The floor panel has an added timber layer, so its U is lower, and it faces ground at 27°C rather than air at 37°C, so its TD is 25 K rather than 35 K. Both differences matter; lumping it in with the walls would overstate the load.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "vapour-sealing-floors",
          title: "Vapour sealing, breathing walls and freezer floors",
          minutes: 11,
          simple: "Insulation works because of the dry gas trapped in its cells. Let water in and it turns into a wet sponge that conducts heat, and in a freezer that water turns to ice and jacks the walls and floor apart. Sealing the vapour out is not a finishing touch — it is the difference between a room that lasts twenty years and one that fails in three.",
          refs: REFS,
          content: `
An insulant relies on gas trapped in cells, with the thin cell walls and the
still gas together resisting heat flow. Water is a good conductor, so any water
drawn into the material destroys that resistance. A cabinet with wet insulation
runs longer and longer cycles and eventually stops holding temperature at all —
and no service adjustment will bring it back.

In a freezer it is worse. Water that reaches the insulation freezes, expands, and
bulges the panels outward. Brick walls have been cracked and concrete floors
broken by ice forming inside the structure, writing off whole rooms.

## How the water gets in

Almost all of it arrives as **water vapour**, not liquid. Warm ambient air can
carry a large mass of vapour — of the order of 12 g in every cubic metre on a hot
day, and up to about 20 g/m³ in extreme conditions. Air inside a -20°C freezer
holds around 0.5 g/m³. That difference is a difference in **vapour pressure**,
and vapour pressure pushes moisture from the warm side towards the cold side of
every wall, all day, every day.

Air's ability to carry vapour falls as it cools, so somewhere inside the wall the
vapour reaches a surface cold enough to condense on. Below 0°C it does not just
condense — it freezes and stays.

## Why unsealed walls "breathe"

Over 24 hours the average temperature in the middle of an insulated wall can swing
by around 10 K. That is enough to make the air inside the wall expand and contract:

- **By day,** the wall warms, the air inside expands and is pushed out through
  screw holes, joints and cracks. It leaves behind, as condensate, whatever
  moisture it could no longer carry.
- **By night,** the wall cools, the air inside contracts and moist ambient air is
  drawn back in through the same holes.

Each cycle deposits a little more water. The wall pumps itself full of moisture,
which is why an unsealed freezer panel can be dripping wet inside after a couple
of summers.

The classic leakage paths are all things a technician creates:

- unsealed screw holes
- joints in the metal skins
- joints between insulation slabs
- holes drilled for evaporator mounting bolts
- holes for refrigerant lines, drain lines, defrost and electrical wiring — which
  must also be cleaned of corrosive metal swarf before sealing.

## Methods of vapour sealing

- Seal the inside of every metal joint and around every screw with silicone or an
  approved odourless mastic — applied **before** the screw is tightened, not
  smeared over the head afterwards.
- Bed the joints between insulation slabs with mastic paste.
- Interlock or overlap the insulation so that shrinkage cannot open a straight
  path through the wall. Common details are overlapped smaller sheets, keyed
  (tongue-and-groove) joints, and plug-sealed joints.
- Use a continuous waterproof sealing sheet on the warm face where slab
  insulation is built up in situ.
- Where polyurethane is foamed onto the metal it forms its own seal, because it
  bonds and skins over as it cures.

Machine-rolled panels — polystyrene bonded between pre-painted metal skins with a
strong adhesive — arrive sealed, but every site joint, screw and penetration is
back in the technician's hands.

> The vapour barrier always belongs on the **warm** side of the insulation. On a
> coolroom that is the outside; on an air-conditioned ceiling in a hot roof space
> it is the top. Put it on the cold side and you trap incoming vapour against a
> cold surface, which is exactly what you were trying to prevent.

## Freezer floors and frost heave

The greatest danger in building a freezer is not the insulation — it is the
ground underneath.

Over months and years, the earth beneath a freezer floor gets colder no matter
how good the insulation and the vapour seal, because some heat always flows down
and there is nothing to warm it back up. Ground moisture migrates towards the
cold, freezes, and expands. Any plumbing leak or surface water finding its way
under the slab speeds it up enormously.

The ice can only expand in one direction — up. The floor begins to lift; the
gaps that open let more water in; the concrete cracks; the crack pierces the
vapour seal, and water pours into the insulation and freezes there too. Freezer
floors have been lifted as much as a metre above floor line, wrecking the room.

There are only two real answers:

1. **Heat the ground** under the floor to keep it just above the normal dew point
   of air, about 10°C. Practical methods are fans circulating warmed air through
   pipes cast under the slab, controlled by a ground thermostat, or electric
   heating elements buried in the ground — which work, but are very difficult to
   repair when an element burns out. Glycol loops served from the plant's heat
   rejection are the modern version and can be maintained.
2. **Ventilate under the floor** — leave a wide, freely ventilated air space
   between the structural slab and the ground across the whole floor area.

A freezer floor build-up therefore ends up far more complicated than the walls,
typically: ground, under-floor heating or ventilated void, structural slab,
vapour barrier, insulation, second vapour barrier, then a reinforced wear slab
that takes the traffic. Coolroom floors above 0°C are simpler — slab, vapour
barrier, insulation, wear slab — and are finished with concrete coving and cove
flashing at the wall junction so wash-down water cannot get under the panels.

Wall-to-floor and wall-to-wall junctions are normally closed with aluminium
angles — typically a 40 × 70 mm external angle and a 40 × 40 mm internal angle —
bedded in non-setting flexible mastic so the seal survives thermal movement.

>! A lifting freezer floor is a structural hazard, not just a refrigeration
>! fault. Racking becomes unstable and forklifts can tip. If you find a floor
>! that is heaving or a slab that is cracked and icing, report it in writing and
>! get the room off-loaded — do not simply add gas and walk away.

## On the job

- Every hole you drill in a panel is a vapour leak until you seal it. Carry mastic and use it before the screw goes in.
- Suspect wet insulation when a room runs long cycles, the panels sweat in patches or a wall sounds dull and heavy when tapped.
- Frost or ice appearing on the outside of a panel means the vapour seal has already failed at that point.
- Never mount an evaporator with through-bolts to the outer skin — you create a thermal bridge and a moisture path in one action.
- On freezer work, check that the under-floor heating system exists and is running; a burnt-out ground element is invisible until the floor moves.
`,
          quiz: [
            {
              q: "What actually drives moisture into a coolroom panel?",
              options: [
                "Air pressure from the room fans",
                "The difference in water vapour pressure between the warm, humid outside and the cold, dry inside",
                "Capillary action in the metal skins",
                "Condensate blowing off the evaporator",
              ],
              answer: 1,
              explain: "Warm ambient air might hold 12 g/m³ of vapour while a freezer holds about 0.5 g/m³. That vapour pressure difference pushes moisture through every unsealed path continuously. Fan pressure and evaporator condensate are inside-the-room effects and are trivial by comparison.",
            },
            {
              q: "On which face of a freezer panel must the vapour barrier go?",
              options: ["The cold (inside) face", "The warm (outside) face", "Both faces equally", "Neither, if the panel is foamed in place"],
              answer: 1,
              explain: "The barrier goes on the warm side, where the vapour pressure is high, so vapour is stopped before it can travel to a cold surface and condense. A barrier on the cold face traps incoming moisture inside the insulation. Foamed-in-place polyurethane skins itself but still needs joints and penetrations sealed.",
            },
            {
              q: "Why does an unsealed wall get progressively wetter rather than reaching a balance?",
              options: [
                "Because the insulation absorbs water from the room air",
                "Because the daily 10 K temperature swing makes the wall breathe out dry air by day and draw in moist air by night, leaving condensate behind each cycle",
                "Because the metal skin corrodes and lets liquid through",
                "Because defrost water is drawn back into the panel",
              ],
              answer: 1,
              explain: "Each breathing cycle brings in moist air and expels air that has already dropped its moisture as condensate inside the wall. The process is one-way for the water, so it accumulates. Corrosion and defrost water are secondary problems that follow, not the cause.",
            },
            {
              q: "The correct engineering fix for frost heave under a freezer is to:",
              options: [
                "Add more floor insulation",
                "Improve the floor vapour barrier only",
                "Keep the ground under the floor just above about 10°C with under-floor heating, or provide a ventilated air space",
                "Run the room at a warmer temperature during winter",
              ],
              answer: 2,
              explain: "The ground will get cold eventually no matter how much insulation or how good the barrier — insulation only slows it. The only cures are to add heat to the ground under thermostat control, or to ventilate the space beneath the slab so ambient air keeps it above freezing.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "air-change-load",
          title: "The air change load",
          minutes: 10,
          simple: "Every time the door opens, a slug of warm damp air falls into the room and has to be cooled all over again. Nobody can count door openings for the next ten years, so the industry uses tables of average air changes per day based on room size, then a judgement factor for how busy the place is.",
          refs: REFS,
          content: `
Open a coolroom door and outside air walks in. That air carries sensible heat
which must be removed to bring it down to room temperature, and it carries water
vapour, which condenses on the evaporator as water or frost — so the air change
load also drives your defrost requirement and your evaporator sizing.

For short-term storage rooms and cabinets — a shop coolroom, a bar cellar, a
takeaway freezer — this component can be the largest single item on the form. For
a long-term store that is opened twice a day it is almost nothing.

## The designer's judgement

Nobody can calculate how often a door will open, so the estimate rests on
judgement about:

- the type of business — a supermarket, a beach kiosk in January, a quiet corner
  shop, a bulk store
- how hard it will be used in the hottest weather, when it matters most
- the temperature of the premises the door opens into — a hot shop, an
  air-conditioned shop, a chilled processing room
- the staff and their door-closing habits.

## Step 1 — room volume

Calculate the **internal** volume in cubic metres. Either measure inside, or take
the outside dimensions and subtract twice the overall wall thickness from each
one.

## Step 2 — average air changes per 24 hours

Small rooms change their air far more times per day than large ones, because one
door opening is a much bigger fraction of a small room's volume.

**Rooms above 0°C**

| Volume (m³) | Changes/24 h | Volume (m³) | Changes/24 h | Volume (m³) | Changes/24 h |
|---|---|---|---|---|---|
| 6 | 44 | 45 | 14 | 425 | 4.0 |
| 7.5 | 38 | 60 | 12 | 560 | 3.5 |
| 10 | 34 | 95 | 9.5 | 700 | 3.0 |
| 12 | 30 | 115 | 8.2 | 850 | 2.7 |
| 15 | 26 | 140 | 7.2 | 1140 | 2.3 |
| 18 | 23 | 170 | 6.5 | 1400 | 2.0 |
| 24 | 20 | 225 | 5.5 | 2100 | 1.6 |
| 30 | 17.5 | 280 | 5.0 | 2800 | 1.4 |

**Rooms below 0°C**

| Volume (m³) | Changes/24 h | Volume (m³) | Changes/24 h | Volume (m³) | Changes/24 h |
|---|---|---|---|---|---|
| 6 | 34.8 | 24 | 15 | 140 | 5.5 |
| 7.5 | 29 | 30 | 13 | 170 | 5.0 |
| 10 | 26 | 45 | 11 | 225 | 4.5 |
| 12 | 22 | 60 | 9 | 280 | 3.8 |
| 15 | 20 | 85 | 7.5 | 560 | 2.6 |
| 18 | 18 | 115 | 6.5 | 850 | 2.1 |

Read across from the listed volume nearest to yours, or interpolate between two
lines. Multiply the actual room volume by the number of changes to get the **air
change volume** in cubic metres per 24 hours.

## Step 3 — the usage factor

- **Average** usage: use the table value as it stands.
- **Heavy** usage: multiply by up to 2 — a very busy shop with the door open most
  of the day.
- **Medium to heavy**: 1.5 is the usual working figure.
- **Light usage or long-term storage** with little more than ventilation:
  multiply by down to 0.6.

## Step 4 — heat removed per cubic metre

Cooling one cubic metre of outside air down to room conditions — and condensing
its moisture — takes a quantity of heat that depends on both the outside
condition and the room temperature.

**Rooms above 0°C — heat removed, kJ/m³**

| Room temp (°C) | 29°C / 50% RH | 32°C / 50% RH | 35°C / 40% RH | 35°C / 50% RH | 38°C / 50% RH |
|---|---|---|---|---|---|
| 10 | 49 | 60 | 60 | 72 | 81 |
| 7 | 56 | 67 | 66 | 79 | 88 |
| 4 | 62 | 75 | 74 | 88 | 97 |
| 1.5 | 69 | 81 | 80 | 93 | 101 |
| 0 | 75 | 84 | 83 | 98 | 105 |

**Rooms below 0°C — heat removed, kJ/m³**

| Room temp (°C) | 10°C / 70% RH | 35°C / 40% RH | 35°C / 50% RH | 38°C / 50% RH |
|---|---|---|---|---|
| -12 | 44.3 | 119 | 128 | 136 |
| -18 | 55.1 | 127 | 136 | 150 |
| -20 | 59.2 | 132 | 141 | 155 |
| -23 | 64.5 | 138 | 147 | 161 |
| -30 | 74.5 | 148 | 157 | 171 |
| -35 | 85.5 | 160 | 170 | 183 |

The 4°C and 10°C ambient columns for freezers are not misprints: they apply when
the freezer opens into an anteroom or a chilled meat-packing room rather than into
the weather. Always ask what the door actually opens into.

## Step 5 — convert to kilowatts

Air change load (kJ per 24 h) = air change volume × kJ per m³

Load in kW = kJ per 24 hours ÷ (3600 × 24)

## Worked example — a Canberra coolroom

A room with **internal** dimensions 4.0 m × 3.0 m × 2.4 m runs at 4°C in
Canberra. Usage is more than average but less than heavy.

**1. Volume** = 4.0 × 3.0 × 2.4 = 28.8 m³

**2. Air changes.** Nearest listed volume above 0°C is 30 m³, giving 17.5 changes
per 24 hours.

Average air change volume = 28.8 × 17.5 = 504 m³ per 24 hours

**3. Usage factor.** Medium-to-heavy, so multiply by 1.5:

504 × 1.5 = 756 m³ per 24 hours

**4. Heat removed.** Canberra design ambient is 34.3°C, so use the 35°C / 40% RH
column, reading across from 4°C room temperature: **74 kJ/m³**.

Air change load = 756 × 74 = 55 944 kJ per 24 hours

**5. Convert:**

55 944 ÷ (3600 × 24) = 55 944 ÷ 86 400 = **0.648 kW**

## Second example — a meat freezer inside a process room

A freezer of 36.3 m³ internal volume runs at -30°C, opening into a process room
air-conditioned to 10°C. Interpolating the below-0°C table between 30 m³ (13
changes) and 45 m³ (11 changes) gives about 12 changes per 24 hours. From the
freezer table at 10°C ambient and -30°C room, heat removed = 74.5 kJ/m³.

Load = (36.3 × 12 × 74.5) ÷ 86 400 = 32 452 ÷ 86 400 = **0.38 kW**

Note how much smaller this is than it would be if that door opened into a 35°C
loading dock: the factor would be 157 instead of 74.5, more than doubling the
load. Putting a freezer behind a chiller anteroom is a design decision worth real
money.

## Reducing the air change load in practice

- Strip curtains, air curtains or a well-fitted rapid-roll door on high-traffic openings.
- Self-closers and door alarms; a door alarm is the cheapest energy measure in refrigeration.
- Anteroom or vestibule construction for freezers, so the door opens into chilled air.
- Correct door heater operation, so staff are not fighting a frozen-shut door and leaving it open.
- Sensible layout so stock can be picked in one trip rather than five.

> Air changes bring in moisture as well as heat. A room with a heavy air change
> load frosts its coil faster, needs more defrosts, and every defrost puts heat
> back into the room. Under-estimating air changes therefore under-estimates the
> load twice over.

## On the job

- Measure the internal volume, not the external — and take the wall thickness off both sides.
- Check what the door opens into before choosing the heat-removed factor.
- Judge the usage factor honestly and write it on the form; 1.0 versus 1.5 can be half a kilowatt.
- Where air change dominates, spend money on the doorway before you spend it on compressor capacity.
`,
          quiz: [
            {
              q: "A 60 m³ coolroom at 4°C in Adelaide (37°C design) is used lightly for long-term storage. Which figures apply?",
              options: [
                "12 changes/24 h × 0.6, with about 88–97 kJ/m³",
                "12 changes/24 h × 2, with 62 kJ/m³",
                "9 changes/24 h × 1.5, with 74 kJ/m³",
                "17.5 changes/24 h × 0.6, with 105 kJ/m³",
              ],
              answer: 0,
              explain: "60 m³ above 0°C gives 12 air changes per 24 hours, and light or long-term storage takes the multiplier down to 0.6. At a 37–38°C ambient and a 4°C room the heat removed is in the 88–97 kJ/m³ range. The 9-changes and 17.5-changes figures belong to a freezer of that size and a 30 m³ room respectively.",
            },
            {
              q: "Why do small rooms show far more air changes per 24 hours than large ones?",
              options: [
                "Small rooms have thinner insulation",
                "One door opening exchanges a much larger fraction of a small room's volume",
                "Small rooms run at higher temperatures",
                "Large rooms have better door seals by law",
              ],
              answer: 1,
              explain: "The tables express infiltration as multiples of room volume. A door opening dumps a roughly similar slug of air regardless of room size, so it represents many changes of a 6 m³ cabinet but a fraction of a change in a 2800 m³ store.",
            },
            {
              q: "The air change load works out at 43 200 kJ per 24 hours. What is that in kilowatts?",
              options: ["0.50 kW", "1.80 kW", "12.0 kW", "0.012 kW"],
              answer: 0,
              explain: "43 200 ÷ (3600 × 24) = 43 200 ÷ 86 400 = 0.50 kW. Dividing by 24 alone gives 1800 kJ/h, not kilowatts; dividing by 3600 alone gives the load as if it all happened in one hour.",
            },
            {
              q: "Building an anteroom so a freezer door opens into a 10°C chilled space instead of a 35°C dock mainly reduces the load because:",
              options: [
                "It reduces the number of door openings",
                "The heat removed per cubic metre of infiltrating air drops from about 157 to about 74.5 kJ/m³",
                "It lowers the wall U factor",
                "It removes the need for defrost",
              ],
              answer: 1,
              explain: "The number of openings is unchanged; what changes is the enthalpy of each cubic metre entering. Cooling air from 10°C and modest moisture content is roughly half the job of cooling air from 35°C and 50% RH. Defrost is reduced, not eliminated, because the drier air deposits less frost.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "product-load",
          title: "The product load: sensible, latent and respiration",
          minutes: 13,
          simple: "The product load is the heat you have to take out of the goods themselves. Above freezing it is just mass times specific heat times temperature drop, plus a small allowance because fruit and vegetables are alive and give off heat. Freeze the goods and you add the big one: the latent heat of turning their water into ice.",
          refs: REFS,
          content: `
The product load is all the heat that must be removed from the food or material
stored to bring it from its entering temperature to storage temperature, in the
time allowed. In a processing or freezing room it is usually the largest item on
the form.

It has up to four parts:

1. **Sensible heat above freezing** — cooling the product down to its freezing point (or to storage temperature, if the room is above freezing).
2. **Latent heat of freezing** — turning the water in the product into ice at constant temperature.
3. **Sensible heat below freezing** — cooling the frozen product down to storage temperature.
4. **Heat of respiration** — the heat living produce generates as it breathes and ripens. Unfrozen produce only.

!FIG[latent-plateau]

## Product data

Every calculation needs data for the specific product. This is a working extract;
a full product data sheet covers hundreds of items.

| Product | Storage (°C) | RH (%) | Specific heat above freezing (kJ/kg·K) | Specific heat below freezing (kJ/kg·K) | Latent heat of fusion (kJ/kg) | Freezing point (°C) | Respiration (kJ/kg per day) |
|---|---|---|---|---|---|---|---|
| Apples | -1 to 0 | 85–88 | 3.60 | 1.88 | 281 | -2.3 | 1.67 |
| Bananas | 13–15 | 85–95 | 3.35 | 1.76 | 251 | -2.2 | — |
| Beef, fresh lean | 0 to 1 | 85 | 3.22 | 1.67 | 233 | -1.7 | — |
| Lamb | 1 to 3 | 82 | 2.81 | 1.26 | 195 | -1.7 | — |
| Pork | 2 to 4 | 85 | 2.85 | 1.26 | 201 | -2.2 | — |
| Poultry, dressed | -2 to -1 | — | 3.31 | 1.55 | 247 | -2.8 | — |
| Fish, fresh iced | -1 | — | 3.26 | 1.72 | 235 | -1.0 | — |
| Eggs, fresh | 3 to 7 | — | 3.18 | 1.67 | 233 | -2.8 | — |
| Milk | 1.75 | — | 3.89 | 2.05 | 288 | -0.6 | 1.16 |
| Cheese | 0 to 7 | — | 2.68 | 1.51 | 184 | -8.3 | — |
| Ice cream | -18 to -12 | — | 2.93 | 1.88 | 223 | -3.0 | — |
| Lettuce | 0 to 1 | 90–95 | 4.02 | 2.01 | 316 | -0.5 | 8.58 |
| Strawberries | 0 | 80–85 | 3.85 | 1.97 | 300 | -1.1 | 7.68 |
| Tomatoes, ripe | 12–15 | 85–90 | 3.98 | 2.01 | 312 | -0.9 | 1.47 |
| Oranges | 0 to 10 | 85–90 | 3.77 | 1.93 | 288 | -2.2 | 1.63 |
| Potatoes | 10 | 85–90 | 3.43 | 1.80 | 258 | -1.7 | 1.67 |
| Vegetables, mixed | 4 to 7 | 90–95 | 3.77 | 1.88 | 302 | -1.0 | 4.65 |
| Water / ice | 0 | — | 4.187 | 2.110 | 335 | 0 | — |

Two patterns are worth noticing. First, specific heat below freezing is about
half that above freezing, because ice has roughly half the specific heat of
water. Second, latent heat of fusion is enormous compared with sensible heat —
233 kJ/kg for beef against 3.22 kJ/kg for each kelvin of cooling. Freezing beef
through its latent plateau costs the same as cooling it about 72 K.

## Rooms above 0°C

Only sensible heat is removed, using the specific heat above freezing:

**Qh = mass × specific heat × temperature change**

Living produce also needs respiration heat, which is quoted per kilogram per day
and applies for as long as the produce is in the room and unfrozen:

**Qh = mass × heat of respiration per day**

The temperature change is measured from the **entering** temperature, which is
often not ambient: much produce is pre-cooled at the packing shed. Beer kegs may
leave the brewery at 3 or 4°C, but what arrives depends on the truck and the trip.

### Time base

Normally the product must reach room temperature within 24 hours, so the
kilojoule total is divided by 24 hours (and 3600 s). But:

- If the product is allowed **two days** to cool, divide the kilojoules by 48
  hours instead. Respiration still runs per 24 hours and must be added separately.
- If it must be cooled in **less than 24 hours**, divide by the hours allowed —
  for 8 hours, divide by 8 (and 3600). This is what happens when the owner runs
  three shifts through the room; the same daily tonnage arrives in a third of the
  time and the instantaneous load triples.

### Worked example 1 — beef into a chiller

400 kg of beef enters a store at 34°C and must reach 4°C within 24 hours.
Specific heat above freezing = 3.22 kJ/kg·K.

Qh = 400 × 3.22 × (34 - 4) = 400 × 3.22 × 30 = **38 640 kJ per 24 hours**

Load in kW = 38 640 ÷ (3600 × 24) = 38 640 ÷ 86 400 = **0.447 kW**

### Worked example 2 — lettuce in 12 hours, with respiration

200 kg of lettuce must be cooled from 38°C to 7°C in 12 hours.

**(a) Cooling load**

Qh = 200 × 4.02 × (38 - 7) = 200 × 4.02 × 31 = 24 924 kJ

Load = 24 924 ÷ (3600 × 12) = 24 924 ÷ 43 200 = **0.58 kW**

**(b) Respiration**, always on a 24-hour basis while the produce sits in the room:

Qh = 200 × 8.58 = 1716 kJ per 24 hours

Load = 1716 ÷ 86 400 = **0.02 kW**

**Total product load = 0.58 + 0.02 = 0.60 kW (600 W)**

Respiration is small here, but for a room full of lettuce, beans or mushrooms
held for days it is not: 8.58 kJ/kg per day against 4.65 for mixed vegetables and
1.67 for apples is a nearly fivefold spread, and it never switches off.

## Rooms below 0°C

Product entering a freezer is either:

**(a) already frozen**, needing only to be cooled to storage temperature, using
the specific heat *below* freezing in the same Qh = m × c × TD equation; or

**(b) unfrozen**, which needs three separate calculations:

1. cool from entering temperature down to the product's freezing point (specific heat above freezing)
2. freeze it at that temperature: Qh = mass × latent heat of fusion
3. cool the frozen product from its freezing point down to storage temperature (specific heat below freezing).

Respiration is not counted below freezing: fruit and vegetables go dormant once
frozen.

If the freezing job must be finished in less than 24 hours, divide the kilojoule
total by the hours allowed, not by 24.

### Worked example 3 — freezing beef

Cool, freeze and lower 500 kg of fresh beef entering at 30°C to a storage
temperature of -20°C, all within 24 hours. From the data table: specific heat
above freezing 3.22, freezing point -1.7°C, latent heat 233 kJ/kg, specific heat
below freezing 1.67.

**Step 1 — cool 30°C to -1.7°C** (TD = 31.7 K)

Qh = 500 × 3.22 × 31.7 = **51 037 kJ**

**Step 2 — freeze at -1.7°C**

Qh = 500 × 233 = **116 500 kJ**

**Step 3 — cool -1.7°C to -20°C** (TD = 18.3 K)

Qh = 500 × 1.67 × 18.3 = **15 280 kJ**

**Total** = 51 037 + 116 500 + 15 280 = **182 817 kJ per 24 hours**

Load = 182 817 ÷ 86 400 = **2.116 kW**

Look at the proportions: the latent step is 64 per cent of the whole job. Anyone
who forgets it will size a freezer at about a third of what is needed, and the
room will never pull down.

>! Watch the sign convention on temperature differences below zero. Cooling from
>! -1.7°C to -20°C is a TD of 18.3 K, not 21.7 K. Sketch a number line if you
>! have to; sign errors here are the most common mistake on freezer load forms.

## Practical points

- Use the mass **loaded per day**, not the total mass the room holds. Once the
  product is down to room temperature it contributes nothing but respiration.
- Check the entering temperature by measurement if you can. A 10 K error in
  entering temperature on 2 tonnes of vegetables is over 75 000 kJ per day —
  nearly a kilowatt.
- Where several products share a room, either average them or use the mixed
  vegetables line; the error is small compared with the guesswork elsewhere.
- Packaging counts too: a tonne of product in cardboard cartons carries cartons
  that also have to be cooled, and cartons slow the pull-down badly.

## On the job

- Three steps for anything being frozen; one step for anything already frozen.
- Latent heat dominates freezing loads — always check it is in there.
- Respiration applies only above freezing, and only to living produce.
- Divide by the hours actually allowed, not automatically by 24.
- If the customer talks about adding a second shift, ask now — it changes the compressor, not just the form.
`,
          quiz: [
            {
              q: "1000 kg of apples enters a store at 25°C and must reach 0°C in 24 hours. Ignoring respiration, what is the load? (c = 3.60 kJ/kg·K)",
              options: ["1.04 kW", "0.42 kW", "25.0 kW", "3.60 kW"],
              answer: 0,
              explain: "Qh = 1000 × 3.60 × 25 = 90 000 kJ. Divided by 86 400 s gives 1.04 kW. The 0.42 answer would come from a 10 K temperature drop, and dividing by 3600 alone would give 25 kW — the load as if it all had to happen in one hour.",
            },
            {
              q: "Which three calculations are needed for 500 kg of unfrozen product entering a -25°C freezer?",
              options: [
                "Sensible above freezing, respiration, sensible below freezing",
                "Sensible above freezing, latent heat of fusion, sensible below freezing",
                "Latent heat of fusion only, since freezing dominates",
                "Sensible below freezing, latent heat, respiration",
              ],
              answer: 1,
              explain: "Cool to the freezing point with the above-freezing specific heat, freeze at that temperature with the latent heat of fusion, then cool the frozen product to storage with the below-freezing specific heat. Respiration stops once product is frozen, and leaving out either sensible step under-sizes the plant.",
            },
            {
              q: "Why does respiration heat get divided by 24 hours even when the product must be cooled in 8 hours?",
              options: [
                "Because respiration is negligible",
                "Because respiration is a continuous daily heat output, not a one-off quantity that has to be removed in the pull-down time",
                "Because the tables are published per 24 hours only",
                "Because respiration stops once the product is cold",
              ],
              answer: 1,
              explain: "The cooling load is a fixed quantity of heat that must be shifted within the time allowed, so a shorter time raises the rate. Respiration is a rate already — so many kilojoules per kilogram every day for as long as the produce is there — so it is always spread over 24 hours.",
            },
            {
              q: "In the 500 kg beef freezing example, the latent step was 116 500 kJ of a 182 817 kJ total. What does that tell a designer?",
              options: [
                "That the sensible steps can safely be ignored",
                "That freezing loads are dominated by latent heat, so a missed latent step under-sizes the plant catastrophically",
                "That the beef must enter colder",
                "That the storage temperature should be raised",
              ],
              answer: 1,
              explain: "Nearly two-thirds of the job is changing water to ice at constant temperature. Missing it would give a load of about 0.77 kW instead of 2.12 kW. The sensible steps still matter — together they are a third of the load — and neither entering nor storage temperature is the point here.",
            },
            {
              q: "Cooling frozen product from its freezing point of -1.7°C down to -20°C storage represents a temperature difference of:",
              options: ["21.7 K", "18.3 K", "20 K", "1.7 K"],
              answer: 1,
              explain: "From -1.7 down to -20 is 18.3 K. Adding the two magnitudes (21.7) is the classic sign error and would overstate that step by nearly 20 per cent. Using 20 K ignores the fact that cooling below freezing starts at the freezing point, not at zero.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "misc-loads-and-power",
          title: "Miscellaneous loads, safety factor and refrigerating power",
          minutes: 10,
          simple: "Lights, fans, people and defrost heaters all dump heat inside the room, and every watt has to be pumped out again. Add them up, add a ten per cent margin for the things you could not know, then scale the whole total up because the compressor only runs sixteen or eighteen hours a day.",
          refs: REFS,
          content: `
The miscellaneous load is everything that generates heat inside the refrigerated
space and does not belong in the wall, air change or product buckets. In most
rooms only two items matter — the electrical load from lights and evaporator
fans, and the heat given off by people working inside. Occasionally machinery
counts too: a band saw in a boning room, or forklifts working a large store.

The method is the same for all of them: find the power in watts, multiply by the
hours of operation, and average over the day.

**Load in watts = (watts × hours of operation) ÷ 24**

## Lights

Use the actual lamp wattage and a realistic burning time. A room light on a door
switch might burn 4 hours a day in a lightly used room and 12 hours in a busy
one. Lights left on continuously because the switch is faulty are a real and
common overload — worth checking on any room that will not hold temperature.

## Evaporator fans

Fan motor watts appear on the motor nameplate and in the evaporator selection
tables. Multiply by the normal running hours. Fans that run continuously are
counted for 24 hours; if the fans off-cycle with the room thermostat, about 20
hours per day is the practical maximum.

Fans are a bigger item than beginners expect, because their heat is delivered
100 per cent into the room, 24 hours a day, right where the coil has to pick it
up again.

> If the fan wattage is not yet known — and it is not, until you have selected
> the evaporator — take fan watts as **10 per cent of the required refrigerating
> power**, or 10 per cent of the sum of the wall, air change and product loads
> plus the safety factor. Correct it once the evaporator is chosen.

## People

A working body puts out more heat in a cold room than a warm one, because the
temperature difference driving heat out of the body is greater.

| Room temperature (°C) | Heat per person (W) |
|---|---|
| 10 | 210 |
| 5 | 245 |
| 0 | 275 |
| -10 | 330 |
| -20 | 390 |
| -30 | 450 |

## Worked example — miscellaneous load in a meat processing room

A 10°C meat processing coolroom has four 100 W lights, two 0.3 kW evaporator fan
motors, and four people working a 10-hour shift. Lights are switched off at the
end of the shift; fans run continuously.

**Lights**

(4 × 100 × 10) ÷ 24 = 4000 ÷ 24 = **167 W (0.167 kW)**

**Fans** (continuous, so 24 hours)

(2 × 300 × 24) ÷ 24 = **600 W (0.600 kW)**

**People**, at 210 W each for a 10°C room

(4 × 210 × 10) ÷ 24 = 8400 ÷ 24 = **350 W (0.350 kW)**

**Total miscellaneous load = 0.167 + 0.600 + 0.350 = 1.117 kW**

That is a substantial load — bigger than the wall leakage of many small rooms —
and two-thirds of it is fan motors that run whether the room is busy or not.

> If the plant has the rest of the day to catch up, this daily average is fair.
> But if a second or third shift is ever introduced, the operating hours for
> lights, fans, people and product all rise together. Ask the question before you
> quote.

## Defrost heat

How much defrost heat belongs in the room load is a matter of judgement, and the
arguments are:

- Some heater heat does enter the room, but most is absorbed by the melting frost
  as latent heat and leaves down the drain with the water.
- Defrost rarely exceeds one hour a day in total, and far less on lightly used
  freezers.
- Evaporator fans are off during defrost, so that heat source stops.

A defensible allowance is **20 per cent of the defrost heater input**, based on
heater watts (or volts × amps) times the defrost hours per day.

Example: a 2400 W heater running a total of 1 hour per day.

(2400 × 20% × 1) ÷ 24 = 480 ÷ 24 = **20 W (0.02 kW)**

Twenty watts is inside the noise of the estimate, so many designers simply omit
it. What you must not omit is the effect of defrost on **running time** — that is
handled next.

## Total load and the safety factor

Add the four components:

Total room load = Qh1 + Qh2 + Qh3 + Qh4

Then add a safety factor, normally **10 per cent**, to cover peak loads,
short-term higher ambients, part-load inefficiencies and the general
imprecision of the whole exercise.

The safety factor is optional and it is the designer's call:

- Where the input figures were already generous, the total may be adequate without it.
- Where the customer has hinted at growth, a bigger room fill or an extra shift,
  a designer may deliberately go well above 10 per cent.
- Where the job is fiercely competitive, trimming it may win the contract — and
  will lose money if the room then fails to hold temperature.

## Required refrigerating power

The total load is the heat that must be removed each second, averaged over the
whole day. But compressors are not sized to run 24 hours:

- rooms with **off-cycle (air) defrost**: design for 16 hours per day
- rooms with **automatic (electric or hot gas) defrost**: design for 18 hours per day

Those allowances give time for defrosting plus reserve capacity for extreme days.
So the machine has to shift the day's heat in fewer hours:

**Required refrigerating power = (total load × 24) ÷ compressor running hours**

### Worked example A — coolroom on off-cycle defrost

Sum of loads = 5.680 kW. Add 10 per cent safety factor = 0.568 kW.

Total load = 6.248, say **6.250 kW**

Required power = (6.250 × 24) ÷ 16 = 150 ÷ 16 = **9.375 kW**

### Worked example B — freezer on automatic defrost

Sum of loads = 6.14 kW. Add 10 per cent = 0.62 kW. Total = **6.76 kW**

Required power = (6.76 × 24) ÷ 18 = 162.2 ÷ 18 = **9.01 kW**

Notice the multipliers: 24/16 = 1.5 and 24/18 = 1.33. The running-time allowance
adds far more capacity than the safety factor does, which is why some designers
argue the two together over-provide. Few are willing to leave both out.

>! Do not stack margins carelessly. A generous entering temperature, a heavy
>! usage factor, a 10 per cent safety factor and a 16-hour running time together
>! can deliver a machine twice the size the room needs. Oversized plant
>! short-cycles, controls humidity badly, wears contactors and valves, and costs
>! the customer money every day of its life. Humidity is only controlled while
>! the unit is running.

## On the job

- Fan and light watts are real load — count them, and count them for the hours they actually run.
- Use the cold-room people figures, not the air-conditioning ones: a person in a -20°C freezer rejects 390 W, nearly double the 210 W figure at 10°C.
- If the evaporator is not selected yet, use the 10 per cent rule for fans and revisit it.
- Defrost heat is usually negligible in the load, but defrost time is not — it drives the 16 or 18 hour choice.
- Write the safety factor you used on the form, so the next person can see the margin you left.
`,
          quiz: [
            {
              q: "A freezer has two 400 W evaporator fans running continuously, and a 200 W light burning 6 hours a day. What is the miscellaneous load?",
              options: ["0.85 kW", "0.80 kW", "1.00 kW", "0.60 kW"],
              answer: 0,
              explain: "Fans: (2 × 400 × 24) ÷ 24 = 800 W. Light: (200 × 6) ÷ 24 = 50 W. Total 850 W = 0.85 kW. Forgetting to average the light over 24 hours gives 1.0 kW; ignoring the light gives 0.80 kW.",
            },
            {
              q: "Total room load after the safety factor is 8.0 kW, and the room uses automatic defrost. What refrigerating power should you select?",
              options: ["8.0 kW", "10.67 kW", "12.0 kW", "9.0 kW"],
              answer: 1,
              explain: "Automatic defrost means designing on 18 hours running: (8.0 × 24) ÷ 18 = 10.67 kW. The 12.0 kW answer uses 16 hours, which is the off-cycle defrost figure, and 8.0 kW assumes 24-hour running with no defrost or reserve time at all.",
            },
            {
              q: "Two people will work a 6-hour shift in a -20°C freezer store. What is their contribution to the load?",
              options: ["0.11 kW", "0.20 kW", "0.78 kW", "0.39 kW"],
              answer: 1,
              explain: "At -20°C each person rejects about 390 W, so (2 × 390 × 6) ÷ 24 = 4680 ÷ 24 = 195 W, about 0.20 kW. Using the 210 W figure for a 10°C room would give 0.11 kW and understate it; 0.78 kW is the instantaneous rate while they are inside, not the daily average.",
            },
            {
              q: "Most defrost heater energy is usually excluded from the room load because:",
              options: [
                "The heaters are outside the insulated envelope",
                "Most of it is absorbed as latent heat by the melting frost and leaves the room in the drain water, and fans are off during defrost",
                "Defrost only happens at night",
                "Defrost heat is offset by the compressor being off",
              ],
              answer: 1,
              explain: "The heat mostly goes into melting ice and then leaves with the water, and the fan load stops while defrost runs. A 20 per cent allowance on heater input is a defensible figure and usually works out at a few tens of watts. The heaters are certainly inside the room, and the compressor being off does not remove heat.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "load-estimate-form",
          title: "Using the load estimate form: two complete jobs",
          minutes: 13,
          simple: "The load form is a checklist that makes sure you do not forget anything and puts the numbers in an order anyone can follow. Work down it: walls, air changes, product, odds and ends, safety factor, then scale up for running hours. Here are two real jobs done end to end, one chiller and one freezer.",
          refs: REFS,
          content: `
Whether you use a spreadsheet, a manufacturer's program or a paper form, the
structure is identical: four load components, a safety factor, then the running
time correction. There are two versions of the refrigeration form — one for rooms
**above 0°C** and one for rooms **below 0°C** — because the product section and
the air change tables differ.

The header of the form captures the design information: customer and address,
date, estimator, application, outside ambient, room temperature, temperature
difference, outside dimensions, insulation type and thickness, overall wall
thickness, estimated usage, product mass and entering temperature, and the
miscellaneous loads. Fill that in properly and the arithmetic almost writes
itself.

## Job 1 — fruit and vegetable room, above 0°C

**Design information.** Prefabricated room erected on site, 6 m long × 6 m wide ×
3 m high (outside), 50 mm polyurethane, overall wall thickness 0.050 m. Outside
ambient 35°C, room temperature 2°C, so TD = 33 K. Usage average. Product: 2000 kg
of mixed vegetables per day entering at 20°C. Miscellaneous: two 250 W evaporator
fans running continuously. No people working in the room.

**Areas and volume**

- 6 × 6 = 36 m²; 6 × 3 = 18 m²; 6 × 3 = 18 m²; sum 72 m², × 2 = **144 m² outside surface area**
- Internal dimensions = outside less twice the wall thickness: 5.9 × 5.9 × 2.9 = **101 m³**

**1. Wall load**

- Area A = 144 m²
- U = k ÷ thickness = 0.026 ÷ 0.050 = 0.52 W/m²·K
- TD = 33 K

Load = (144 × 0.52 × 33) ÷ 1000 = 2471 ÷ 1000 = **2.470 kW**

**2. Air change load**

- Volume 101 m³, above 0°C table, nearest listed 95 m³ → 9.5 changes per 24 hours
- Usage average, so no multiplier
- Heat removed, 35°C ambient at 50% RH, room at about 2°C → 93 kJ/m³

Load = (101 × 9.5 × 93) ÷ 86 400 = 89 234 ÷ 86 400 = **1.030 kW**

**3. Product load**

(i) Cooling to storage temperature. Mixed vegetables, c = 3.77 kJ/kg·K, entering
20°C, room 2°C, so TD = 18 K, 2000 kg per day, cooled in 24 hours:

Load = (2000 × 18 × 3.77) ÷ 86 400 = 135 720 ÷ 86 400 = **1.570 kW**

(ii) Respiration. Mixed vegetables, 4.65 kJ/kg per day:

Load = (2000 × 4.65) ÷ 86 400 = 9300 ÷ 86 400 = **0.110 kW**

**4. Miscellaneous load**

Two 250 W fans, continuous: (500 × 24) ÷ (1000 × 24) = **0.500 kW**

**5. Sum and safety factor**

| Line | kW |
|---|---|
| 1. Wall load | 2.470 |
| 2. Air change load | 1.030 |
| 3(i). Product cooling | 1.570 |
| 3(ii). Respiration | 0.110 |
| 4. Miscellaneous | 0.500 |
| **Sum of loads** | **5.680** |
| Safety factor, 10% | 0.568 |
| **Total load** | **6.250** |

**6. Required refrigerating power.** Off-cycle defrost, so 16 hours running:

(6.250 × 24) ÷ 16 = **9.375 kW**

Select a condensing unit with capacity equal to or slightly above 9.375 kW at the
design saturated suction temperature, then select evaporators to balance it.

## Job 2 — meat freezer, below 0°C

**Design information.** Room built inside a process room air-conditioned to 10°C.
Outside dimensions 4.6 m × 4.0 m × 2.8 m. Insulation 100 mm polystyrene, plus a
100 mm timber frame, so overall wall thickness 0.200 m. Room temperature -30°C,
ambient 10°C, TD = 40 K. Product: 1000 kg per day of beef, lamb and pork in
varying proportions, entering at 10°C — averaged data used. Miscellaneous: three
400 W fans running continuously.

**Areas and volume**

- 4.6 × 4.0 = 18.4 m²; 4.6 × 2.8 = 12.9 m²; 4.0 × 2.8 = 11.2 m²; sum 42.5 m², × 2 = **85 m²**
- Internal: (4.6 - 0.4) × (4.0 - 0.4) × (2.8 - 0.4) = 4.2 × 3.6 × 2.4 = **36.3 m³**

**1. Wall load.** The timber frame is assumed to contribute no insulating value —
a deliberately conservative assumption — so U is that of 100 mm polystyrene:

U = 0.032 ÷ 0.100 = 0.32 W/m²·K

Load = (85 × 0.32 × 40) ÷ 1000 = 1088 ÷ 1000 = **1.088 kW**

**2. Air change load.** 36.3 m³ in the below-0°C table falls between 30 m³ (13
changes) and 45 m³ (11 changes) — take 12 changes per 24 hours. The door opens
into the 10°C process room, and the room is at -30°C, so heat removed = 74.5
kJ/m³:

Load = (36.3 × 12 × 74.5) ÷ 86 400 = 32 452 ÷ 86 400 = **0.380 kW**

**3. Product load** — three steps, using averaged meat data: specific heat above
freezing 3.1 kJ/kg·K, freezing point about -2°C, latent heat 220 kJ/kg, specific
heat below freezing 1.50 kJ/kg·K.

(i) Cooling to freezing temperature, 10°C down to -2°C, TD = 12 K:

(1000 × 12 × 3.1) ÷ 86 400 = 37 200 ÷ 86 400 = **0.43 kW**

(ii) Freezing at -2°C:

(1000 × 220) ÷ 86 400 = 220 000 ÷ 86 400 = **2.55 kW**

(iii) Cooling below freezing, -2°C down to -30°C, TD = 28 K:

(1000 × 28 × 1.50) ÷ 86 400 = 42 000 ÷ 86 400 = **0.49 kW**

**4. Miscellaneous load.** Three 400 W fans continuous = 1200 W:

(1200 × 24) ÷ (1000 × 24) = **1.200 kW**. Defrost watts ignored.

**5. Sum and safety factor**

| Line | kW |
|---|---|
| 1. Wall load | 1.088 |
| 2. Air change load | 0.380 |
| 3(i). Cooling to freezing point | 0.430 |
| 3(ii). Freezing (latent) | 2.550 |
| 3(iii). Cooling below freezing | 0.490 |
| 4. Miscellaneous (fans) | 1.200 |
| **Sum of loads** | **6.14** |
| Safety factor, 10% | 0.62 |
| **Total load** | **6.76** |

**6. Required refrigerating power.** Automatic defrost, so 18 hours running:

(6.76 × 24) ÷ 18 = **9.01 kW at the design saturated suction temperature**

Note how different the two jobs look: the chiller is dominated by wall leakage
and product cooling, the freezer by latent heat of freezing and fan motors. The
form does not care — it just refuses to let you forget a component.

## Working the form properly

1. Get the design information from the customer, the coolroom manufacturer or the
   supplier of the goods. Do not invent it.
2. Where the walls are complex, do the detailed calculation in the margin or on
   the back and carry only the total onto the form. Where several walls differ
   modestly in construction or ambient, averaging with judgement is acceptable.
3. List every other load, but keep the figures realistic — this is not the place
   for defensive padding.
4. Estimate the evaporator fan watts now. For most coolrooms and freezers, fan
   watts of about 10 per cent of items 1 + 2 + 3 plus the safety factor is a
   sound first pass.
5. The safety factor may be used, varied or omitted at the estimator's
   discretion — but say which you did.
6. The total load is the refrigerating power in kilowatts needed to remove heat
   continuously. Convert it to required capacity with the 24 ÷ running-hours
   factor before you open a selection table.

## When the form does not fit

Only two situations really force you off the standard form:

- **Construction and temperatures vary greatly** across walls, floor and ceiling —
  then calculate each surface separately, though an average is often defensible.
- **A variety of products is stored** — but even here the mixed vegetables line
  covers a lot of ground, and averaging two or three meats introduces less error
  than the guess about entering temperature.

## Advising the customer

An experienced estimator reads the brief as well as filling in the boxes, and the
advice is often worth more than the price:

- The product the customer wants to store may not physically fit the room they
  have asked for. Recommend a larger room or review the loading.
- If the customer is building their own room, offer construction advice early —
  especially on freezer floors and vapour sealing. It avoids a dispute later when
  the unit is blamed for a badly built room.
- The conditions the customer asks for may not be right for the product. State
  agriculture departments and CSIRO publish current storage recommendations.
- Check entering temperatures hard. Beer kegs might leave the brewery at 3 or 4°C
  but arrive much warmer after a long trip in summer.
- Ask whether the load is seasonal. A room used only in cool months does not need
  the same plant as one used in February.

>! Before the sale is confirmed, the design specification and price must be given
>! to the purchaser in writing and agreed by both parties. That written
>! specification — including your assumed product loading, entering temperature
>! and usage — is what protects you when the room is later loaded with three
>! times the design tonnage.

## On the job

- Fill in the header first; most errors come from missing design information, not bad arithmetic.
- Outside dimensions for area, inside dimensions for volume — every time.
- Show your working for compound walls somewhere on the form.
- Convert to required refrigerating power before you touch a catalogue.
- Keep a copy. A signed load estimate is the best evidence you have if the room is later abused.
`,
          quiz: [
            {
              q: "On the fruit and vegetable form, why is the wall U factor 0.52 W/m²·K?",
              options: [
                "It is the published U for a polyurethane panel of any thickness",
                "It is k ÷ thickness = 0.026 ÷ 0.050 for 50 mm polyurethane",
                "It includes the inside and outside air films",
                "It is the reciprocal of the room volume",
              ],
              answer: 1,
              explain: "U comes from the conductivity of polyurethane divided by the thickness in metres. Air films are neglected for a metal-clad panel because they are trivial next to the foam's resistance. Doubling the thickness to 100 mm would halve U to 0.26.",
            },
            {
              q: "The meat freezer form deliberately assumes the 100 mm timber frame has no insulating value. Why is that reasonable?",
              options: [
                "Timber really has no thermal resistance",
                "It is a conservative simplification that slightly overstates the load, covering the thermal bridging at frames and joints",
                "The frame is outside the vapour barrier",
                "Timber resistance is included in the air change tables",
              ],
              answer: 1,
              explain: "Pine does have resistance (k about 0.113), so ignoring it overstates the wall load a little. That deliberate conservatism offsets the bridging, fixings and joints that the simple calculation cannot capture. It is not related to the vapour barrier or the air change tables.",
            },
            {
              q: "In the freezer job the total load is 6.76 kW but the selected refrigerating power is 9.01 kW. The difference is:",
              options: [
                "The 10 per cent safety factor",
                "An allowance for the fans",
                "The running time correction — 24 hours of heat must be removed in 18 hours of running",
                "A correction for the low saturated suction temperature",
              ],
              answer: 2,
              explain: "The 10 per cent safety factor was already inside the 6.76 kW figure. The step from 6.76 to 9.01 kW is 24 ÷ 18 = 1.33, allowing for defrost time and off-cycle. Suction temperature corrections come later, when a specific unit is selected from a catalogue.",
            },
            {
              q: "A 6 m × 4 m × 2.7 m outside coolroom has 100 mm walls. What internal volume goes on the form?",
              options: ["64.8 m³", "55.1 m³", "60.0 m³", "48.6 m³"],
              answer: 1,
              explain: "Subtract twice the wall thickness from every dimension: 5.8 × 3.8 × 2.5 = 55.1 m³. Using the outside dimensions gives 64.8 m³ and would overstate the air change load by about 18 per cent; the volume is always taken inside the insulation.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "equipment-selection",
          title: "Selecting the condensing unit and the evaporator",
          minutes: 14,
          simple: "The load tells you how many watts you must move; the catalogue tells you what each machine can move, but only at its rated conditions. Real selection is a series of corrections: work out the actual suction temperature, then adjust for ambient, subcooling and return gas, and finally pick an evaporator that balances the unit.",
          refs: REFS,
          content: `
Load calculations exist for one of two reasons: to select equipment, or to check
equipment already installed. Selection is constrained by more than physics —
company policy, customer preference, stock availability — but a designer who
understands how capacity varies can usually satisfy the duty from standard lines.

## What a condensing unit selection depends on

1. **The load per running hour** — the required refrigerating power you calculated.
2. **The saturated suction temperature (SST)** the compressor will actually see.
3. **The condensing temperature** it will actually work against.

Two more factors modify all three:

- the liquid temperature at the expansion device
- the return vapour temperature at the compressor.

### Load per running hour

Normal storage runs 16 to 18 hours a day, but the best temperature and humidity
control comes from a unit that runs almost continuously. Be too generous with
both the running-time allowance and the load itself and the plant may end up
running 8 to 10 hours a day in average weather, with almost no control left in
winter.

> Humidity is controlled only while the unit is running. On the off cycle there
> is no dehumidification at all, and in a produce room the moisture the product
> loses on the off cycle is weight the customer cannot sell.

### Saturated suction temperature

SST is the saturation temperature corresponding to the pressure of the vapour at
the compressor suction inlet. Do not confuse it with the suction vapour
temperature, which is the temperature of the superheated gas arriving at the
compressor and is not related to the pressure at that point.

**SST = room temperature - evaporator TD - suction line pressure drop (in K)**

Example: carcase meat is stored at 82 to 85% RH, which calls for a forced-draught
evaporator TD of 7 to 9 K. With a room averaging 3°C and an 8 K TD:

SST = 3 - 8 = **-5°C**

If the condensing unit is 20 m away and the suction line pressure drop is
estimated at 15 kPa — about 2 K for R134a — then:

SST = 3 - 8 - 2 = **-7°C**

That 2 K matters: it costs roughly **8 per cent of unit capacity** and adds almost
1.5 hours a day of running time. Some pressure drop is unavoidable, and indeed
necessary for oil return, but oversized capacity cannot be bought back cheaply.

Think of the compressor as a person bailing a boat with a bucket. How much water
each swing shifts depends on the weight in the bucket. Lower suction pressure
means less dense vapour, so less mass per stroke — a lighter bucket every time.

### Condensing temperature

The condensing temperature is the saturation temperature matching the head
pressure. Capacity falls by roughly **1 per cent for every 1 K** that condensing
temperature rises above the rating. In the bailing analogy, that is how high the
gunwale is: the higher the lift, the more work per bucket and the fewer buckets
per minute.

Water-cooled condensing is relatively stable; air-cooled capacity falls as
ambient rises, which is why units are rated at a stated ambient and corrected for
others.

!SIM[See what a dirty condenser does to head pressure and capacity](fault=dirtyCondenser)

### Liquid temperature and return vapour

- **Colder liquid, more capacity.** Liquid entering the evaporator warm has to
  cool itself down before it can absorb useful heat from the room, so that part of
  its capacity is wasted. Units are rated at a stated subcooling.
- **Cooler return vapour, more capacity.** The volume of a given mass of vapour
  rises with absolute temperature, so heavily superheated suction gas means the
  compressor pumps the same volume with less mass in it. Excessive return gas
  temperature is also a leading cause of hermetic motor burnout, through lost
  efficiency and high discharge temperatures that break down oil and refrigerant.
  Keep suction lines short, cool and insulated.

## Selection tables

Manufacturers publish capacity against SST. The tables below are representative
(model numbers are fictitious) and are used for the worked examples.

**Air-cooled open units — R134a, medium temperature.** Rated at 30°C ambient,
18°C return vapour, 5 K liquid subcooling. Capacities in watts.

| Model | Max r/min | -20°C | -15°C | -10°C | -5°C | 0°C | +5°C |
|---|---|---|---|---|---|---|---|
| 100M | 800 | 900 | 1100 | 1300 | 1560 | 1850 | 2200 |
| 300M | 700 | 2550 | 3200 | 3900 | 4800 | 5800 | 7120 |
| 450M | 700 | 4100 | 5100 | 6300 | 7600 | 9000 | 10600 |
| 600M | 1000 | 7200 | 8600 | 10200 | 11800 | 14000 | 16500 |
| 700M | 1400 | 8300 | 10400 | 12600 | 14800 | 17200 | 19900 |

**Air-cooled open units — R507, low temperature.** Same rating conditions.

| Model | Max r/min | -40°C | -35°C | -30°C | -25°C | -20°C | -15°C |
|---|---|---|---|---|---|---|---|
| 100F | 700 | 410 | 580 | 760 | 980 | 1240 | 1540 |
| 300F | 600 | 1500 | 2000 | 2600 | 3300 | 4150 | 4900 |
| 600F | 1000 | 3800 | 5000 | 6300 | 7700 | 9250 | 10900 |
| 850F | 600 | 4840 | 6300 | 7800 | 9400 | 11220 | 13200 |
| 1000F | 800 | 6360 | 8400 | 10600 | 12900 | 15300 | 18000 |

**Air-cooled sealed (hermetic) units — R134a.** Rated at 32°C ambient with no
liquid subcooling.

| Model | -15°C | -10°C | -5°C | 0°C | +5°C | +10°C |
|---|---|---|---|---|---|---|
| AR20M | 2300 | 2900 | 3500 | 4100 | 4700 | 5500 |
| AR30M | 2800 | 4000 | 5300 | 6600 | 8000 | 9500 |
| TB250 | 5600 | 7100 | 8600 | 10300 | 12200 | 14200 |
| TB300 | 6600 | 8400 | 10200 | 12300 | 14700 | 17300 |

**Correction rules** (check the application notes for the actual product):

- Decrease capacity 1% for every 1°C the ambient exceeds the rating.
- Decrease capacity 2% for every 5°C the return vapour temperature exceeds the rating.
- Increase capacity 1% for every 1 K of liquid subcooling above the rated figure.
- Open compressor speed can be reduced in 100 r/min steps by changing the motor
  pulley, down to about 70% of nominal, with capacity falling in proportion.
- Fit R507 low-temperature units with crankcase pressure regulators and insulated
  suction lines; keep return gas superheat under about 20 K.

## Worked selection 1 — open unit for a fruit and vegetable room

Required capacity **9220 W**. Room 2°C, design ambient 35°C, humidity requirement
90–95% RH. Unit 20 m from the room, so assume 2 K equivalent pressure drop.
Insulated suction line, so return vapour not above 18°C. A heat exchanger and a
cool liquid line run should give at least 8 K subcooling. Recommended evaporator
TD for fruit and vegetables is 3 to 6 K — use 5 K.

**Step 1 — suction temperature**

SST = 2 - 5 - 2 = **-5°C**

**Step 2 — first pick.** Reading down the -5°C column of the R134a open unit
table, the nearest above 9220 W is model **600M at 11 800 W** — oversized as it
stands.

**Step 3 — correct for ambient.** Rated at 30°C, actual 35°C, so 5% less:

11 800 × 0.95 = **11 200 W**

**Step 4 — correct for subcooling.** 8 K against a rated 5 K is 3 K extra, so 3% more:

11 200 × 1.03 = **11 530 W**

**Step 5 — correct the speed.** Drop the compressor from 1000 to 800 r/min by
changing the motor pulley:

11 530 × (800 ÷ 1000) = **9220 W**

The 600M at 800 r/min balances the required capacity exactly, at 16 hours a day
running.

> Open-drive compressors allow this neat speed trim, but there is a general move
> away from them because the crankshaft seal is a leak path. On a sealed unit you
> cannot change speed, which actually makes selection simpler.

## Worked selection 2 — sealed unit for the same room

Sealed units here are rated at 32°C ambient with no subcooling, so:

- ambient 35°C is 3°C above rating: **-3%**
- 8 K of subcooling against a zero-subcooling rating: **+8%**
- return vapour comparable with the rating: no change

Net correction = **+5%**

Two candidates at -5°C SST:

- TB250: 8600 × 1.05 = **9030 W**
- TB300: 10 200 × 1.05 = **10 710 W**

Against 9220 W required, the TB250 is slightly small and the TB300 is oversized.
The decision turns on judgement:

1. **How real is the load?** If the entering temperatures, usage factor and 10 per
   cent safety factor were generous, the TB250 will do — running time only
   stretches to about 16 hours 35 minutes, still with reserve.
2. **How competitive is the quote?** The TB300 costs more. If you have doubts
   about performance, quote it anyway and sell the spare capacity as future-proofing.
3. **What evaporator can you match to it?** Final choice waits until the
   evaporator is settled, because evaporator capacity varies with TD and that
   changes the suction temperature.

## Evaporator selection

Evaporator tables quote capacity at 5 K and 10 K TD for above-zero coils, and at
5 K only for freezer coils. Capacity is directly proportional to TD, so a coil at
10 K TD does exactly twice what it does at 5 K. In many ranges the model number
is the capacity per kelvin of TD: model XA238 gives 1190 W at 5 K (238 × 5) and
2380 W at 10 K.

**Induced-draught coolers for rooms above 0°C** (off-cycle defrost, 311 fins/m):

| Model | W at 5 K TD | W at 10 K TD | Fan motor (W) |
|---|---|---|---|
| XA238 | 1190 | 2380 | 130 |
| XA306 | 1530 | 3060 | 140 |
| XA459 | 2300 | 4590 | 260 |
| XA713 | 3560 | 7130 | 380 |
| XA1215 | 6070 | 12150 | 720 |
| XA1795 | 8980 | 17950 | 730 |
| XA2320 | 11600 | 23200 | 1110 |
| XA3170 | 15850 | 31700 | 1460 |
| XA4220 | 21100 | 42200 | 1825 |

**Induced-draught coolers with electric defrost, below 0°C** (233 fins/m):

| Model | W at 5 K TD | Fan motor (W) |
|---|---|---|
| DF160 | 792 | 125 |
| DF315 | 1580 | 250 |
| DF630 | 3170 | 590 |
| DF1270 | 6340 | 730 |
| DF1900 | 9510 | 1110 |
| DF2550 | 12670 | 1480 |

Freezer coils have wider fin spacing (233 against 311 fins per metre) so they
hold more frost before they choke. Note also that these tables give you the fan
motor watts you needed back at the miscellaneous load — the 1200 W estimate used
in the meat freezer job came from an educated guess at a DF-size coil.

### Choosing evaporator TD

Evaporator TD sets the humidity in the room: a lower TD gives a warmer, wetter
coil surface and higher room RH. Typical design TDs are 3 to 6 K for fruit and
vegetables, 7 to 9 K for carcase meat, 9 to 12 K for packaged goods where
humidity does not matter, and 5 to 7 K for freezers.

### Worked selection 3 — evaporator for the fruit and vegetable room

Required 9220 W at 5 K TD. Two candidates:

- **XA1795**: 8980 W at 5 K. At 5.1 K TD it gives 8980 × (5.1 ÷ 5) = **9160 W** —
  a negligible TD increase and a good match.
- **XA2320**: 11 600 W at 5 K. At 4 K TD it gives 11 600 × (4 ÷ 5) = **9280 W**,
  which also matches. The lower TD gives slightly higher room humidity (still
  inside the 3 to 6 K band) and lifts the suction temperature by 1 K, which adds
  about 4 per cent to unit capacity, roughly 9650 W.

The XA2320 is the better room but the dearer coil. The decision comes down to
whether the extra capacity is useful, whether it is a sales advantage, stock and
delivery, and whether the larger coil physically fits with service access.

### Worked selection 4 — the meat freezer

Basic data: ambient outside the process room 35°C, storage -30°C, humidity as
high as possible, required capacity **8720 W at the design SST**. Unit 12 m from
the room, so pressure drop about 0.5 K. Good heat exchanger and pre-cooling in
the process room should give about 15 K subcooling. Insulated suction line keeps
return vapour at or below 18°C. Evaporator design TD for freezers, 5 to 7 K — use
5 K.

SST = -30 - 5 - 0.5 = **-35.5°C**

From the R507 table, model **1000F** gives 8400 W at -35°C and 6360 W at -40°C.
The 5 K span is 2040 W, so 0.5 K is about 204 W:

Capacity at -35.5°C = 8400 - 204 = **8200 W**

Ambient 35°C against a 30°C rating: -5%.

8200 × 0.95 = **7790 W**

Subcooling 15 K against 5 K rated: +10%.

7790 × 1.10 = **8570 W**

That is still just under the 8720 W required, so look at the coil before deciding.
Model **DF1900** gives 9510 W at 5 K TD, so at 4.5 K TD:

9510 × (4.5 ÷ 5) = **8550 W**

The lower evaporator TD raises the suction temperature by 0.5 K, lifting unit
capacity by roughly 200 W to about **8750 W** — an acceptable balance point.

If you want more margin there are three options: the larger DF2550 coil; two
600F condensing units in parallel, de-rated by running at 900 r/min; or simply
accepting a longer daily running time.

### Worked selection 5 — a small packaged coolroom

Store cheese and packaged goods at 4°C and 75% RH. Calculated load **2800 W**.
North-west location with 40°C maximum ambient, no liquid subcooling expected,
short lines with about 1 K equivalent pressure drop. Packaged goods allow a high
evaporator TD — use 10 K.

SST = 4 - 10 - 1 = **-7°C**

From the sealed unit table, AR20M gives 3500 W at -5°C and 2900 W at -10°C.
Interpolating for -7°C, which is 2 K below -5°C in a 5 K span:

3500 - (2 ÷ 5)(3500 - 2900) = 3500 - 240 = **3260 W**

Ambient 40°C against a 32°C rating is 8 higher, so -8%:

3260 × 0.92 = **3000 W**

The AR20M covers 2800 W with a small margin. The evaporator must deliver about
3000 W at 10 K TD, and **XA306** is rated 3060 W at 10 K. Selection:
**AR20M condensing unit with XA306 evaporator.**

## Balance point

What you are really doing in every one of these examples is finding a **balance
point** — the operating condition where the evaporator's ability to absorb heat
at a given TD equals the compressor's ability to pump it at the resulting suction
temperature. Fit a coil that is too small and the system balances at a lower
suction temperature: less capacity, colder coil, more frost, lower room humidity.
Fit a coil that is too large and it balances at a higher suction temperature, with
more capacity and higher humidity — good for produce, and the reason a generous
coil is rarely wasted money.

## On the job

- Always work out the actual SST first: room temperature, minus evaporator TD, minus line pressure drop.
- Correct catalogue capacity for ambient, subcooling and return gas before you compare it with your load.
- Remember the direction of each correction: hotter ambient down, more subcooling up, hotter return gas down.
- Match the evaporator to the unit, not to the room: capacity scales directly with TD.
- Pick evaporator TD for the humidity the product needs, then live with the suction temperature it gives you.
`,
          quiz: [
            {
              q: "A coolroom runs at 2°C with a 6 K evaporator TD, and the suction line drop is worth 1.5 K. What SST do you select on?",
              options: ["-4°C", "-5.5°C", "-7.5°C", "+2°C"],
              answer: 1,
              explain: "SST = room - evaporator TD - pressure drop = 2 - 6 - 1.5 = -5.5°C. Ignoring the line loss gives -4°C and overstates capacity by several per cent; -7.5°C would double-count the drop.",
            },
            {
              q: "A unit is rated 10 200 W at 30°C ambient and 5 K subcooling. On a job with 38°C ambient and 12 K subcooling, what is its capacity?",
              options: ["9384 W", "10 041 W", "10 914 W", "11 016 W"],
              answer: 1,
              explain: "Two corrections apply. Ambient is 8°C above the rating, so -8%: 10 200 × 0.92 = 9384 W. Subcooling is 7 K above the rated 5 K, so +7%: 9384 × 1.07 = 10 041 W. Applying only the ambient correction gives 9384 W and only the subcooling correction gives 10 914 W.",
            },
            {
              q: "Why does dropping the SST by 2 K cost roughly 8 per cent of capacity?",
              options: [
                "Because the compressor slows down at lower pressure",
                "Because suction vapour is less dense at lower pressure, so each stroke pumps less mass",
                "Because the condensing temperature rises",
                "Because the TXV closes down",
              ],
              answer: 1,
              explain: "A compressor is a volume pump. Lower suction pressure means lower vapour density, so the same swept volume carries less refrigerant mass and therefore less heat. Speed is unchanged, and the TXV is simply following the load.",
            },
            {
              q: "An XA1215 coil is rated 6070 W at 5 K TD. What will it do at 8 K TD?",
              options: ["6070 W", "9712 W", "12 140 W", "3794 W"],
              answer: 1,
              explain: "Evaporator capacity is directly proportional to TD: 6070 × (8 ÷ 5) = 9712 W. The 12 140 figure is the 10 K rating, and the coil would only give 3794 W if TD dropped to about 3 K.",
            },
            {
              q: "Fitting a larger evaporator than strictly needed usually results in:",
              options: [
                "A lower suction temperature and drier room air",
                "A higher suction temperature, slightly more unit capacity and higher room humidity",
                "No change, because the compressor sets the capacity",
                "Higher head pressure and shorter compressor life",
              ],
              answer: 1,
              explain: "A bigger coil absorbs the same load at a smaller TD, so it balances at a higher suction temperature. Compressor capacity rises with suction pressure, and the warmer coil surface removes less moisture, so room RH goes up — usually a benefit in produce storage.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "aircon-load-estimation",
          title: "Air-conditioning load estimation",
          minutes: 14,
          simple: "An air-conditioning load is built the same way as a coolroom load, but the list of heat sources is longer: sun through glass, people, fresh air, lights and appliances. It is also split into sensible heat, which changes temperature, and latent heat, which is just moisture — because the fan is sized on one and the refrigeration plant on the other.",
          refs: REFS,
          content: `
Comfort cooling means holding conditions in which people feel comfortable, so the
plant has to deal with the heat and moisture generated inside the space as well as
what flows in from outside. The estimating method used in Australia follows the
survey form developed by AREMA with CSIRO, and every factor on that form comes
from Qh = A × U × TD or from simple watts-per-litre and watts-per-person data.

## Why we condition people

The body is a fuel-burning engine that must reject heat to hold 37°C, and it does
so three ways at once: **convection** into cooler surrounding air, **radiation**
to cooler surfaces (dark surfaces absorb and emit more, light ones reflect), and
**evaporation** from the lungs and from perspiration on the skin.

As air temperature approaches 37°C, convection stops working; near or above it,
the body starts gaining heat instead. High humidity then removes the last escape
route by making evaporation difficult, which is why hot humid conditions cause
distress so quickly. In a workplace, discomfort costs productivity long before it
becomes dangerous — people loosen clothing, fan themselves, fetch drinks, look
for a cooler spot.

For offices the accepted target is **23 to 25°C, about 50% RH, with air movement
of 0.1 to 0.2 m/s**. Below about 40% RH lips, eyes and nostrils dry out and static
becomes a nuisance; above about 60% skin moisture accumulates. More active people
tolerate lower temperature and higher velocity; audiences sitting still need the
opposite.

## Sensible and latent, and why they are separated

Sensible heat changes air temperature; latent heat is water vapour that changes
humidity without changing temperature. They are kept apart because:

- the **supply air fan** is sized to circulate enough air to remove the **room
  sensible** heat, and
- the **refrigeration plant** must be sized for the **total** heat, sensible plus
  latent, including the load from outside air.

Latent heat is invisible to the room thermostat but can be 10 to 30 per cent of
the total load.

## 1. People

| Activity | 26°C: sensible / latent (W) | 24°C: sensible / latent (W) | 22°C: sensible / latent (W) |
|---|---|---|---|
| Seated at rest | 60 / 40 | 67 / 33 | 72 / 28 |
| Seated, very light work | 60 / 60 | 70 / 50 | 78 / 42 |
| Seated, standing, walking slowly | 60 / 70 | 70 / 60 | 78 / 52 |
| Sedentary work | 68 / 92 | 80 / 80 | 90 / 70 |
| Light bench work | 70 / 150 | 85 / 135 | 100 / 120 |
| Moderate dancing | 78 / 172 | 94 / 156 | 110 / 140 |
| Walking at 1.5 m/s | 96 / 204 | 110 / 190 | 130 / 170 |
| Heavy work | 144 / 286 | 154 / 276 | 170 / 260 |

Note how the split shifts: warmer rooms push more of the body's output into
latent heat, because the body has to sweat more to get rid of it.

**Example.** An office with 15 staff at 24°C, office activity:

- Sensible = 70 × 15 = **1050 W**
- Latent = 60 × 15 = **900 W**

## 2. Infiltration and ventilation

Fresh air arrives either deliberately through the plant's outside air intake, or
by **infiltration** through doors, window cracks and gaps on the windward side.

| Item | Litres per second |
|---|---|
| Swing door, medium use (about 1 person/min) | number of people × 1.0 |
| Swing door, heavy use (2–4 people/min) | number of people × 4.0 |
| Revolving door | number of people × 1.0 |
| Open doorway | 282 |
| Windows, tight fitting (one wall only) | window area m² × 0.5 |
| Windows, average fitting | window area m² × 1.0 |
| Windows, poor fitting | window area m² × 3.5 |
| Exhaust canopy | manufacturer's rating |

**Example.** An office with one outside swing door in heavy use, 15 occupants,
and six windows of 1.5 m² each with average fitting:

- Door: 15 × 4.0 = 60 L/s
- Windows: (6 × 1.5) × 1.0 = 9 L/s
- **Total infiltration = 69 L/s**

Ventilation minimums come from AS 1668.2. Typical values:

| Application | Floor area per person (m²) | Minimum outdoor air |
|---|---|---|
| Office areas | 10 | 10 L/s per person |
| Boardrooms, conference rooms | 1 | 10 L/s per person |
| Dining rooms, cafeterias, bars | 1 to 1.5 | 10 L/s per person |
| Libraries | 5 | 10 L/s per person |
| Malls, showrooms | 3.5 to 5 | 10 L/s per person |
| Patient rooms | 10 | 10 L/s per person |
| Operating and delivery rooms | 5 | 20 L/s per person |
| Corridors, foyers | — | 1 L/s per m² of floor |

In every room the ventilation rate must also be at least **room volume × 0.5**.

**Example.** Office 10 m × 8 m × 2.6 m, 15 occupants:

- (a) People method: 15 × 10 = **150 L/s**
- (b) Volume method: (10 × 8 × 2.6) × 0.5 = 208 × 0.5 = **104 L/s**
- (c) Infiltration from above: **69 L/s**

Take the **largest**, so 150 L/s of outside air is introduced through the plant.
Because that exceeds the infiltration, the room runs at slight positive pressure
and infiltration can be ignored. Had infiltration been, say, 180 L/s, the surplus
of 30 L/s would have to be added to the room load — or better, designed out with
weatherstripping, door closers, air curtains, revolving doors or a vestibule.

### Outside air sensible load

Watts = litres per second × factor:

| Design TD (K) | 8 | 10 | 12 | 14 | 16 |
|---|---|---|---|---|---|
| Factor | 9.6 | 12.0 | 14.4 | 16.8 | 19.2 |

**Example** (Perth: 36°C DB ambient, room 24°C, so TD = 12 K, factor 14.4), with
150 L/s of outside air and 30 L/s of surplus infiltration:

- Surplus infiltration: 30 × 14.4 = **432 W**
- Outside air: 150 × 14.4 = **2160 W**

### Outside air latent load

The latent factor is found by taking the ambient figure and subtracting the room
figure.

**Ambient factors**

| WB temp | 32°C DB | 34°C DB | 36°C DB | 38°C DB | 40°C DB |
|---|---|---|---|---|---|
| 20°C | 28.8 | 26.1 | 23.7 | 21.0 | 18.6 |
| 22°C | 37.2 | 34.5 | 32.1 | 29.4 | 27.0 |
| 24°C | 46.2 | 43.8 | 41.1 | 38.4 | 36.0 |
| 26°C | 56.4 | 54.0 | 51.3 | 48.6 | 45.9 |
| 28°C | 67.2 | 64.8 | 61.1 | 59.4 | 56.7 |

**Room condition factors**

| WB temp | 22°C DB | 24°C DB | 26°C DB |
|---|---|---|---|
| 14°C | 20.1 | 17.4 | 15.0 |
| 16°C | 26.7 | 24.0 | 21.6 |
| 18°C | 33.9 | 31.2 | 28.8 |
| 20°C | 41.4 | 39.0 | 36.3 |

**Example.** Perth summer is about 36°C DB / 22°C WB, giving an ambient factor of
32.1. The room at 24°C DB and 45% RH reads 16°C WB on a psychrometric chart,
giving a room factor of 24.0.

Latent factor = 32.1 - 24.0 = **8.1**

- Surplus infiltration: 30 × 8.1 = **243 W**
- Outside air: 150 × 8.1 = **1215 W**

Interpolate for conditions between table values — for a room at 24°C DB / 17°C WB
use 27.6, midway between the 16°C and 18°C rows.

## 3. Solar heat through glass

Direct sun can deliver nearly a kilowatt per square metre on east or west glass at
10 am and 4 pm. It is handled as an equivalent temperature difference:

**Qh = area × U of glass × solar TD × shade factor**

| Glass facing | Solar TD at 10 am (K) | Solar TD at 4 pm (K) |
|---|---|---|
| South | 9 | 9 |
| South-east | 26 | 9 |
| East | 59 | 8 |
| North-east | 86 | 8 |
| North | 57 | 18 |
| North-west | 8 | 68 |
| West | 8 | 97 |
| South-west | 8 | 80 |
| Horizontal (skylight) | 77 | 82 |

Shade factors: unshaded 1.0; inside curtains or venetian blinds **0.65**; outside
awnings that eliminate direct rays **0.25**. Calculate the whole building at
10 am and again at 4 pm and use the higher total; if all glass faces east or
north, 10 am obviously governs.

**Example.** Six windows of 1.5 m² each, U of glass 6.1 W/m²·K, at 4 pm: two
south unshaded, two north with inside shades, two west with awnings.

- South: 3.0 × 6.1 × 9 = **165 W**
- North: 3.0 × 6.1 × 18 × 0.65 = **214 W**
- West: 3.0 × 6.1 × 97 × 0.25 = **444 W**
- **Total solar = 823 W**

## 4. Conduction through the fabric

Same equation as a coolroom, using outside areas, published U factors and the
design TD. Subtract window area from gross wall area, group like constructions,
and treat floors on ground or over conditioned space as no load.

Design TD is the outside design DB minus the room DB. Textbooks have long
recommended it should not exceed about 10 K, originally to avoid thermal shock as
people walk in from the street, and now also for energy cost. Do not inflate it:
choosing 12 K where 10 K was honest simply buys oversized plant that short-cycles.

Ceilings and floors need their own equivalent TDs:

| Element | Equivalent TD |
|---|---|
| Ceiling under pitched roof | about 28 K |
| Ceiling under flat roof with reflective foil | about 40 K |
| Ceiling under flat roof, no foil or insulation | about 100 K |
| Ceiling under unconditioned rooms | about 8 K |
| Floor over unconditioned rooms or open crawl space | 8 K |
| Floor over basement, enclosed crawl space or slab on ground | 0 K |

**Example** (office 10 × 8 m, 2.6 m high, design TD 12 K):

- Windows: 9 m² × 6.1 × 12 = **659 W**
- Walls: gross (2 × 10 × 2.6) + (2 × 8 × 2.6) = 93.6 m², less 9 m² glass = 84.6 m²; cavity brick U 1.9: 84.6 × 1.9 × 12 = **1929 W**
- Ceiling: 80 m² × 0.5 × 40 K (metal deck, foil, gypsum) = **1600 W**
- Floor over a partly enclosed crawl space at 26°C: 80 × 3.5 × 2 = **560 W**

## 5. Lights, appliances and fan heat

Electrical appliances turn their input watts into heat. Mechanical equipment is
assessed as output power ÷ efficiency. Incandescent lamps count their marked
wattage; **fluorescent lamps count tube watts × 1.25** because the control gear
adds heat.

| Source | Sensible (W) | Latent (W) |
|---|---|---|
| Electronic equipment, motors, refrigerators | input watts | nil |
| Incandescent lighting | input watts | nil |
| Fluorescent lighting | rated tube watts × 1.25 | nil |
| Coffee maker, small unit | 260 | 65 |
| Coffee maker rated at 5 kW | 1900 | 600 |
| Plate and food warmer, per m² of surface | 1000 | 1000 |
| Hair dryer, helmet type | 550 | 100 |
| Medical instrument steriliser | 200 | 350 |
| Air-conditioner fan | input watts | nil |

Fan heat, where the fan input is not yet known, is taken as a percentage of room
sensible heat: about 1.1 to 2.4% for fans under 250 Pa total pressure, 2.4 to
5.2% between 250 and 500 Pa, and 5.2 to 8.4% above that — add roughly a quarter
more if the motor itself sits inside the conditioned airstream.

**Example.** 20 fluorescent tubes of 40 W, a 5 kW coffee machine, a 300 W
refrigerator, 400 W of electronic equipment, and a 0.2 m² food warmer:

| Item | Sensible | Latent |
|---|---|---|
| Fluorescent lights, 20 × 40 × 1.25 | 1000 W | — |
| Coffee machine | 1900 W | 600 W |
| Refrigerator | 300 W | — |
| Electronic equipment | 400 W | — |
| Food warmer, 0.2 m² | 200 W | 200 W |
| **Total** | **3800 W** | **800 W** |

If the sensible total so far is about 13 000 W and the fan factor 1.8%, fan heat
is 13 000 × 0.018 = 235 W, so appliance sensible becomes 3800 + 235 = **4035 W**.

Duct gain, where supply ducts run outside the conditioned space, is commonly
allowed at 5% of room sensible heat for short well-insulated runs and 10% for
long ones.

## 6. Totalling the load

- **Room sensible heat (RSH)** — people, surplus infiltration, solar, conduction,
  lights and appliances, fan and duct gain. This sizes the fan and the ductwork.
- **Total sensible heat (TSH)** = RSH + outside air sensible.
- **Total latent heat** = room latent (people, surplus infiltration, appliances) + outside air latent.
- **Grand total heat** = TSH + total latent, and this sizes the refrigeration plant.

For the office used throughout the examples:

| Room sensible heat | W |
|---|---|
| People, 15 × 70 | 1050 |
| Surplus infiltration | 432 |
| Solar through glass | 823 |
| Conduction, windows | 659 |
| Conduction, walls | 1929 |
| Conduction, ceiling | 1600 |
| Conduction, floor | 560 |
| Lights and appliances incl. fan | 4035 |
| **Total RSH** | **11 088** |
| Outside air sensible | 2160 |
| **Total sensible heat** | **13 248** |

| Latent heat | W |
|---|---|
| People, 15 × 60 | 900 |
| Surplus infiltration | 243 |
| Appliances | 800 |
| Room latent subtotal | 1943 |
| Outside air latent | 1215 |
| **Total latent heat** | **3158** |

**Grand total plant load = 13 248 + 3158 = 16 406 W**

The **sensible heat ratio** is what shapes the cooling coil:

SHR = sensible heat ÷ (sensible + latent heat)

## The AREMA survey form and a shop example

The survey form turns all of the above into a single-page checklist of numbered
items, with pre-calculated factors per square metre or per litre per second for
each construction and TD. Its value is that it makes omissions obvious.

**Delicatessen, Perth.** 10 m deep × 6 m wide × 3 m high, west-facing all-glass
front under an awning, cavity brick outside walls, one 1.2 m² window in each of
the north and east walls with inside shades, flat uninsulated roof, slab on
ground, unconditioned shop on one side. Six occupants, two self-contained
refrigerators totalling 1.4 kW, eight 40 W fluorescent tubes, other appliances at
800 W sensible and 400 W latent, front door in heavy use, room 24°C.

**Solar check, 10 am against 4 pm:**

| Glass | Area | 10 am | 4 pm |
|---|---|---|---|
| East window, inside shades | 1.2 m² | 1.2 × 246 = 295 W | 1.2 × 32 = 38 W |
| North window, inside shades | 1.2 m² | 1.2 × 230 = 276 W | 1.2 × 72 = 86 W |
| West front, outside awning | 18 m² | 18 × 13 = 234 W | 18 × 154 = 2772 W |
| **Total** | | **805 W** | **2896 W** |

So 4 pm governs, and the whole form is worked at 4 pm.

**Ceiling.** 60 m² of flat uninsulated roof at the form's factor of 77 W/m² gives
4620 W. With 50 mm of insulation the factor drops to 19 W/m², giving 1140 W — a
saving of **3480 W**, about a quarter of the total load. Insulation is not an
optional extra; modern practice is R4, around 190 mm, rather than the 50 mm the
old form assumed.

**Outside air.** Volume 10 × 6 × 3 = 180 m³, so the volume method gives 90 L/s;
that exceeds the infiltration estimate of about 25 L/s, so infiltration is
ignored and 90 L/s of outside air is used.

**Result.** Grand total heat about **13 390 W**, with room SHR = 10 000 ÷ (10 000
+ 880) = **0.92** and equipment SHR = 11 300 ÷ 13 390 = **0.844**. Left
uninsulated, the load would be 13 390 + 3480 = 16 870 W — a 25 per cent penalty.

## Supply air quantity

Once the load is known, the air volume follows from the room total sensible heat
and how cold the supply air will be:

**L/s = room total sensible heat ÷ ((room DB - supply air DB) × 1.213)**

Find the supply condition by drawing a line of the room SHR through the room
condition on a psychrometric chart to the saturation curve — that intersection is
the **apparatus dew point** — and taking the leaving air condition where the line
crosses about 90% RH. For the delicatessen, room 24°C DB / 17°C WB with SHR 0.92
gives an ADP of about 11.8°C and a leaving air condition of about 13.6°C:

L/s = 10 000 ÷ ((24 - 13.6) × 1.213) = 10 000 ÷ 12.615 = **793 L/s**

## Check factors

Two quick sanity checks before you quote:

- **Watts per square metre of floor.** Typical results fall between **100 and 160
  W/m²**. Far outside that range means an error or an unusual building.
- **Litres per second per cubic metre of room.** Should not be below about **5**
  (poor air movement) or above about **12** (draughts).

>! Winter matters too. For heating, only the reversible components count —
>! conduction, infiltration and ventilation. Solar gain, people, lights and
>! appliances all help in winter and are left out of the heating calculation, so
>! a heating load is not simply the cooling load with the sign changed.

## On the job

- Split every heat source into sensible and latent as you go; sorting it out afterwards is painful.
- Do the solar calculation at both 10 am and 4 pm and use the worse one.
- Take the largest of the three outside-air figures — people rate, volume × 0.5, or excess infiltration.
- Recommend ceiling insulation, shading and weatherstripping before quoting bigger plant; it is nearly always cheaper.
- Sanity-check with watts per square metre before the quote leaves the office.
`,
          quiz: [
            {
              q: "An office of 12 people at 24°C, seated and walking slowly, contributes what heat?",
              options: [
                "840 W sensible, 720 W latent",
                "1560 W all sensible",
                "720 W sensible, 840 W latent",
                "804 W sensible, 396 W latent",
              ],
              answer: 0,
              explain: "At 24°C that activity gives 70 W sensible and 60 W latent per person: 12 × 70 = 840 W sensible and 12 × 60 = 720 W latent. Treating it as all sensible would undersize the coil's dehumidification, and the 67/33 split belongs to people seated at rest.",
            },
            {
              q: "Infiltration is calculated at 120 L/s, the people-based ventilation requirement is 150 L/s and room volume × 0.5 gives 95 L/s. What outside air quantity is used, and what happens to infiltration?",
              options: [
                "95 L/s; infiltration added separately",
                "150 L/s; infiltration ignored because the room runs at positive pressure",
                "365 L/s; all three added",
                "120 L/s; ventilation ignored",
              ],
              answer: 1,
              explain: "You select the largest of the three, which is 150 L/s. Because the plant introduces more air than could infiltrate, the room is slightly pressurised and infiltration is not counted again. Only the surplus above the introduced air would ever be added.",
            },
            {
              q: "Three square metres of west-facing glass (U = 6.1) with an outside awning, at 4 pm. What is the solar gain?",
              options: ["1775 W", "444 W", "1154 W", "97 W"],
              answer: 1,
              explain: "Qh = 3.0 × 6.1 × 97 × 0.25 = 444 W. Leaving out the 0.25 awning factor gives 1775 W and would badly oversize the plant; using the 0.65 inside-shade factor instead gives 1154 W, which would apply only to curtains or blinds inside the glass.",
            },
            {
              q: "Why is the room sensible heat, rather than the grand total heat, used to size the supply air fan?",
              options: [
                "Because latent heat does not exist in the supply air",
                "Because the air volume is what changes room temperature, and latent heat is removed at the coil without changing room temperature",
                "Because the fan cannot handle moist air",
                "Because outside air is delivered separately",
            ],
              answer: 1,
              explain: "The airflow needed is set by how much sensible heat must be carried out of the room per degree of supply air temperature difference. Latent heat is condensed out at the coil and does not affect the room temperature, though it definitely loads the refrigeration plant — which is why the plant is sized on the grand total.",
            },
            {
              q: "A completed estimate gives 40 kW for a 150 m² office. What should you do?",
              options: [
                "Accept it and quote a 40 kW unit",
                "Check the work: 267 W/m² is far above the typical 100–160 W/m² band, so something is probably wrong or unusual",
                "Halve it as a rule of thumb",
                "Add 10 per cent for safety and quote",
              ],
              answer: 1,
              explain: "The watts per square metre check is there exactly for this. At 267 W/m² either a load has been double-counted, a solar or ceiling factor misused, or the building genuinely is unusual — a full-glass west facade or a computer room. Find out which before quoting; do not scale the answer arbitrarily.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
