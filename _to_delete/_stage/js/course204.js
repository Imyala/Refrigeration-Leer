/* =========================================================================
   Course content, module R2.4 — Air-conditioning systems.
   Source: Australian Refrigeration and Air-conditioning, Volume 2 (Graham
   Boyle, 5th edition, pub. AIRAH), Chapter 4 — Air-conditioning systems.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BOOK = "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — ";
  const REFS = [BOOK + "Chapter 4, Air-conditioning systems"];
  function ref() {
    return Array.prototype.slice.call(arguments).map(function (t) { return BOOK + t; });
  }

  const MODULES = [
  {
    id: "v2-ac-systems",
    stream: "v2",
    title: "R2.4 · Air-conditioning systems",
    blurb: "How conditioned air actually reaches people: unitary and split equipment for homes, and the central station all-air, air-water, VAV and VRF systems used in commercial buildings.",
    lessons: [

      /* ================================================================
         1 — Self-contained systems and their formats
         ================================================================ */
      {
        id: "self-contained-formats",
        title: "Self-contained air-conditioning systems and their formats",
        minutes: 15,
        simple: "A self-contained air-conditioner is like a kettle rather than a kitchen: everything it needs is already inside the box when it leaves the factory, so nobody has to build a plant on site. The different shapes it comes in — window box, wall unit, wall-hung split, ducted ceiling unit, rooftop package — are all the same machine wearing different clothes, chosen to suit where the air has to come out and where the noisy bits can live.",
        refs: ref("self-contained air-conditioning systems", "residential and light commercial air-conditioning systems"),
        content: `
Walk into any Australian suburb and almost every air-conditioner you can see is
self-contained. The trade also calls this unitary equipment: the manufacturer
assembles, charges, wires and tests the whole refrigeration system in the
factory, and the most that happens on site is joining two pieces of copper,
running a drain and connecting power. That is the whole commercial logic of the
format — the expensive engineering happens once, in a factory, instead of being
rebuilt by hand at every job.

## Where unitary equipment sits

Self-contained equipment is single-zone equipment. One machine, one thermostat,
one set of conditions. Capacities for single-zone work generally run from about
2 kW up to around 30 kW of refrigerating capacity, and that band covers
everything from a bedroom to a small shop or office suite.

Once you get past roughly 25 kW, the unit is nearly always connected to ductwork
rather than blowing straight into the room, because a machine that size is too
noisy and moves far too much air to be discharged directly at people. Large
unitary systems are also frequently broken into separate packages so that each
part can go where it belongs:

- a remote condenser, outside where it can reject heat and make noise
- a compressor and controls package, in a plant room or external enclosure
- a fan-coil (air handling) package, close to the ductwork it serves.

That split is a compromise between the factory-built ideal and the reality of
buildings. It keeps the factory assembly, but lets the installer put the noise
somewhere it will not annoy the owner or the neighbours.

## The five common formats

| Format | Typical capacity | Where the mechanism sits | Zoning ability | Main strength | Main weakness |
|---|---|---|---|---|---|
| Window / room unit (RAC) | 2–6 kW | All in one box in the window or wall opening | None — one room | Cheapest to buy and install | Noisiest indoors, needs an external wall or window |
| Wall fascia unit | 2–8 kW | Entirely outside, two short ducts through the wall | None — one room or a few outlets | Nothing but a grille panel inside | Fixed location, limited air throw |
| Split system | 2–15 kW | Indoor fan-coil, outdoor condensing unit | One indoor unit per zone (multi-split) | Quietest indoors, flexible indoor position | Needs pipe run, drain and interconnecting wiring |
| Ducted split with ceiling fan-coil | 6–20 kW | Fan-coil in the roof space, condensing unit outside | Day/night or multi-zone dampers | Conditions a whole house from concealed plant | Duct cost, needs a return-air path and roof space |
| Packaged unit | 7–30 kW+ | Everything in one cabinet, usually on the roof | Single zone unless zone dampers added | No refrigeration work on site at all | Weatherproofing, roof access, duct penetrations |

### 1. Window and through-wall room air-conditioners

The room air-conditioner is sold over the counter like any appliance, often with
nothing more than a self-installation leaflet. Inside, the cabinet is divided by
a bulkhead into two compartments. The outdoor compartment holds the compressor,
the condenser and its fan; the indoor compartment holds the evaporator, the
supply fan and the return-air filter. One double-shafted motor commonly drives
both fans.

Winter operation is either reverse cycle, resistance element heating, or nothing
at all beyond room-air circulation. Reverse-cycle models add a reversing valve
and often an outdoor thermostat.

!FIG[reversing-valve]

Two practical points bite installers. First, single-phase models above about
5 kW of refrigerating capacity must be fed from a 15 A outlet, because an
ordinary domestic point is only rated 10 A. Second, a heavy unit needs solid
support, preferably in a wall above head height, so that vibration is not
transmitted into the room and the discharge does not blow straight down onto
somebody sitting under it.

### 2. Wall fascia units

The wall fascia unit is mounted almost entirely outdoors, with only a fascia
panel carrying two grilles visible inside. Two short ducts pass through the
wall — one drawing return air out of the room, one pushing conditioned air back
in. Larger models can extend the supply duct to several outlets, at which point
they are effectively small commercial packaged units. Some are built with two
compressors so that capacity can be staged.

### 3. Split systems

A split system is at least two factory-assembled pieces. The indoor unit carries
the fan, indoor coil, air filter, microprocessor board and sensors, usually
operated by an infrared remote. The outdoor unit carries the compressor, outdoor
coil, refrigerant control and (on reverse-cycle machines) the reversing valve,
and leaves the factory pre-charged.

Indoor units come as wall-hung, under-ceiling, ceiling cassette, floor console
and bulkhead types. Choosing between them is an air-distribution decision:

- Cassettes throw air in four directions and distribute well, but need ceiling
  space and a large ceiling penetration.
- Wall-hung units are the simplest to install where an outside wall is handy,
  and must be positioned so the throw reaches the whole room.
- Under-ceiling units suit rooms with no usable wall space.
- Floor consoles distribute poorly and consume floor area, but sometimes they
  are the only option.
- Bulkhead units are hidden in a ceiling recess and blow through a short grille
  without full ductwork.

Configurations run from a single split (one indoor, one outdoor) to multi-splits
with several indoor units on one or more outdoor units. Multi-splits demand
design care: the connected indoor capacity has to balance sensibly against the
outdoor unit, or performance suffers when everything runs at once.

Interconnection is copper tubing plus control and power wiring. The indoor unit
must be able to drain condensate to outside by gravity; where it cannot, a
condensate pump is fitted. Pipe runs on domestic equipment are commonly limited
to around 10–15 m, and manufacturers also state a maximum vertical separation
between indoor and outdoor units — on some small models as little as 4 m. Always
work from the installation manual, not from habit.

!SIM[Run the cycle on R32, the refrigerant in most new splits](r=R410A)

### 4. Ducted splits with a ceiling fan-coil

Mechanically this is the same machine, but the fan-coil is built to sit in the
roof space and feed a duct system. Conditioning a whole house at once is
expensive, so residential ducted systems are usually zoned. The classic
Australian arrangement is day/night: the bedrooms form the night zone and the
kitchen, lounge and family room form the day zone. The controller drives a
motorised splitter damper that sends the whole airflow to one zone or the other,
so a smaller machine can do the job.

The same idea extends to multi-zone systems with a damper actuator for each
outlet or room. This is where customers get disappointed, so it must be
explained at the sale: there is a minimum number of zones that has to stay open
to avoid starving the fan and freezing the coil, and a maximum number that can
run at once before capacity is spread too thin.

Duct layout is usually simple — two or three ducts each side of the fan-coil —
but the house must offer a central return plenum such as a hall or passage, and
every room must be able to return air to it. Commercial buildings use door,
wall or ceiling return grilles for this; homes normally rely on door undercuts
and open doorways.

### 5. Packaged units

A packaged unit contains the cooling coil, supply fan, compressor and condenser
in a single factory-built cabinet, usually installed on or beside the roof in a
weatherproof case to keep noise out of the conditioned space. Compressors are
typically reciprocating or scroll, coils are direct expansion, and the
refrigerant control is a capillary tube on small units and a thermostatic
expansion valve on larger commercial ones.

Condensers are usually air-cooled. Water-cooled condensers appear where many
packaged units serve one building — each unit then takes condenser water from a
common cooling tower circuit. Heating, where fitted, is by reverse cycle.

>! Electrical connection, isolating switches and circuit protection are
>! licensed electrical work. Refrigerant handling — brazing, evacuating,
>! charging and recovery — requires an ARCtick licence under the Ozone
>! Protection and Synthetic Greenhouse Gas regulations, even on a
>! factory-charged split. Venting refrigerant to atmosphere is an offence.

## On the job

- Noise is the number one complaint driver. Council noise limits apply at the
  neighbour's boundary, and if a unit breaches them the installer can end up
  paying to relocate it.
- Check the electrical supply before you quote: a 10 A point will not carry a
  5 kW-plus single-phase machine.
- Condensate has to go somewhere legal and visible. A blocked drain in a ceiling
  fan-coil damages plasterboard long before anyone notices the temperature.
- On multi-splits and ducted zone systems, write the zone limitations on the
  handover sheet and show the customer.
- Above about 25 kW, expect to duct the unit and to separate the packages so
  noise and airflow can each be dealt with properly.
`,
        quiz: [
          {
            q: "Why are self-contained units above about 25 kW almost always connected to ductwork?",
            options: [
              "Ductwork is required by AS/NZS 3000 above that capacity",
              "Because the noise and the volume of air discharged make direct free blow into the space unacceptable",
              "Because larger compressors cannot be fitted with capillary tubes",
              "Because refrigerant charge limits force the coil away from the space",
            ],
            answer: 1,
            explain: "A machine that size moves a great deal of air and makes a great deal of noise; ducting it lets the air be distributed at acceptable velocities and lets the noisy parts sit away from occupants. Charge limits and wiring rules matter, but they are not what drives the ducting decision at this size.",
          },
          {
            q: "A customer wants a 5.5 kW single-phase window unit plugged into an existing bedroom power point. What is the problem?",
            options: [
              "Window units are not made above 4 kW",
              "A standard domestic outlet is rated 10 A and units of this size need a dedicated 15 A supply with its own protection",
              "Single-phase supply cannot start a compressor above 5 kW",
              "The unit will run but the warranty is void on any power point",
            ],
            answer: 1,
            explain: "Single-phase room air-conditioners above roughly 5 kW draw enough running current to require a 15 A outlet or dedicated supply with an isolating switch and its own fuse or breaker. Plugging one into a 10 A general outlet risks nuisance tripping, overheated wiring and a fire.",
          },
          {
            q: "In a residential ducted system using day/night zoning, what does the zone controller actually operate?",
            options: [
              "A second compressor for the unused zone",
              "A motorised damper that directs the fan-coil airflow to one group of ducts or the other",
              "A changeover valve in the refrigerant circuit",
              "The speed of the outdoor fan",
            ],
            answer: 1,
            explain: "Day/night zoning is purely an air-side trick: a splitter damper sends the whole airflow to the bedrooms or to the living areas, so a smaller machine can serve the house. Nothing in the refrigeration circuit changes, which is why zone limits must be respected — closing too much of the system starves the fan and can ice the coil.",
          },
          {
            q: "Which indoor unit type gives the best air distribution but the most difficult installation in an existing house?",
            options: [
              "Wall-hung",
              "Floor console",
              "Ceiling cassette",
              "Bulkhead",
            ],
            answer: 2,
            explain: "Cassettes discharge on all four sides and distribute very well, but they need adequate ceiling void and a sizeable hole cut in the ceiling. A floor console is easy to place but distributes poorly and takes floor space; a wall-hung unit is easy but depends on a suitable outside wall.",
          },
        ],
      },

      /* ================================================================
         2 — Operating conditions and selection
         ================================================================ */
      {
        id: "selecting-residential",
        title: "Operating conditions and selecting a residential air-conditioner",
        minutes: 14,
        simple: "A catalogue capacity is a promise made under test-lab weather, not the weather at your customer's house. It is like a car's fuel figure: real conditions always cost you something. This lesson shows what those test conditions are, how much capacity you lose when the day gets hot, and how to pick a machine from a table of numbers instead of guessing by room size.",
        refs: ref("operating conditions for residential air-conditioners", "selecting residential air-conditioners and selection data"),
        content: `
Selling and installing small air-conditioners looks simple until the first
40-degree day, when the undersized or wrongly rated machine trips on overload
and the customer rings. Everything in this lesson exists to stop that call.

## The catalogue number is a rated number

Manufacturers publish capacity at standard rating conditions. For small
Australian equipment those conditions are:

| Mode | Indoor air on | Outdoor air on |
|---|---|---|
| Cooling | 27°C dry bulb, 19°C wet bulb | 35°C dry bulb, 24°C wet bulb |
| Heating | 20°C dry bulb, 15°C wet bulb | 7°C dry bulb, 6°C wet bulb |

Both the dry bulb and the wet bulb are quoted because the wet bulb fixes the
moisture content. A coil doing latent work — condensing water out of the air —
is doing work you cannot see on a thermometer, and it comes out of the same
total capacity. Two rooms at 27°C can present very different loads if one is
humid.

Small-unit catalogues, especially under about 8 kW, often list the capacity
without stating the conditions at all. If the conditions are not stated,
find them before you commit.

## Efficiency: EER and COP

Efficiency is simply capacity divided by electrical input, both in watts, so the
answer is dimensionless (W/W):

- EER = cooling capacity ÷ power input
- COP = heating capacity ÷ power input

Worked from typical split-system data:

| Model pairing | Cooling capacity | Power input | EER | Heating capacity | Power input | COP |
|---|---|---|---|---|---|---|
| Small (2.8 class) | 2.77 kW | 0.57 kW | 4.86 | 3.75 kW | 0.71 kW | 5.03 |
| Medium (4.2 class) | 4.20 kW | 1.07 kW | 3.93 | 5.08 kW | 1.17 kW | 4.34 |
| Large (5.0 class) | 4.88 kW | 1.47 kW | 3.32 | 5.91 kW | 1.49 kW | 3.97 |

Check the arithmetic yourself: 4.88 ÷ 1.47 = 3.32, and 5.91 ÷ 1.49 = 3.97. Two
things jump out. Efficiency falls as the model gets bigger within a range, and
heating COP is higher than cooling EER, because in heating you get the
compressor's own input work delivered into the room as a bonus.

## Capacity falls away in the heat

Like every vapour-compression machine, a small air-conditioner loses capacity as
the condensing temperature rises. On a 42°C day the machine is producing less
cooling and drawing more current at exactly the moment the building needs most.

Testing shows many standard units begin to exceed their rated running amperage
above about 40°C ambient. Run like that day after day and the outcome is
predictable: overload trips at first, then motor burnout, often within twelve
months.

>! A unit that is merely oversized is not a hot-climate unit. Equipment for
>! tropical and sub-tropical service must be rated by the manufacturer for that
>! ambient — larger coils, higher-rated motors and different controls. Get the
>! manufacturer's written endorsement before committing a model to a hot or
>! humid location.

For hot, humid locations, allow for capacity 5–10% below the rated figure when
you select.

## Method of selection

1. Calculate the room load properly, using an air-conditioning survey form or an
   approved load-estimating program — never room floor area alone.
2. Choose the model whose capacity is closest to the calculated load, normally
   the nearest size above it.
3. Re-read the survey before grossly oversizing. An oversized machine satisfies
   the thermostat quickly, short-cycles, and never runs long enough to
   dehumidify, so the room ends up cold and clammy.
4. Derate for climate if the location is hot or humid, and check the model is
   endorsed for that ambient.

## Worked example: one living room

A living room is surveyed at **5.02 kW cooling load** with 50 mm of ceiling
insulation installed, and **3.2 kW heating load**. Reverse-cycle operation is
wanted.

**Step 1 — candidates.** Two machines come close: a reverse-cycle window unit of
5.2 kW cooling and 4.8 kW heating, and a wall-hung split of 4.88 kW cooling and
5.91 kW heating.

**Step 2 — check the cooling margin.** The window unit gives 5.2 ÷ 5.02 = 1.04,
a 4% margin. The split gives 4.88 ÷ 5.02 = 0.97, about 3% short. Three per cent
short is not a disaster; it means the machine runs continuously on the worst
afternoon of the year and pulls the room down slowly, which is often better for
humidity than an oversized machine.

**Step 3 — check the climate derating.** If the house is on a humid subtropical
coast, apply 10%: 5.2 × 0.90 = 4.68 kW, and 4.88 × 0.90 = 4.39 kW. Both are now
below the load, so in that climate a larger, ambient-endorsed model is required.
In a temperate southern capital, no derating is needed.

**Step 4 — check the heating.** Both cover 3.2 kW easily. The split's 5.91 kW at
COP 3.97 draws 1.49 kW of power; a resistance element giving the same 3.2 kW
would draw 3.2 kW. The heat pump therefore does the same job for roughly a third
of the electricity.

**Step 5 — running cost.** Assume the split runs an average 8 hours a day for a
90-day summer at its rated input: 1.47 kW × 8 h × 90 = 1058 kWh. At an assumed
30 c/kWh that is about $317 for the season. Compare it with an otherwise similar
machine of EER 2.90: input = 4.88 ÷ 2.90 = 1.68 kW, so 1.68 × 8 × 90 = 1210 kWh,
about $363. The better unit saves roughly $46 each summer, every summer.

**Step 6 — sanity-check the airflow.** The split is rated at 221 L/s in cooling.
Taking a sensible heat ratio of 0.75, sensible capacity is 0.75 × 4.88 =
3.66 kW. Air-side sensible heat is approximately Q = 1.2 × V × dT ÷ 1000 with V
in L/s, so dT = 3660 ÷ (1.2 × 221) = 13.8 K. Off a 27°C return, supply air
leaves at about 13°C — a normal figure for a domestic DX coil, which confirms
the airflow and capacity data belong together.

## Comparing the two candidates

| Factor | Window unit 5.2 kW | Split 4.88 kW |
|---|---|---|
| Purchase and install cost | Lowest of any type | Higher — two units, pipe, wiring, drain |
| Installation work | Window opening or hole through the wall | Small penetration for pipe and drain |
| Electrical | 15 A single-phase | 15 A single-phase |
| Indoor position | Fixed by the opening, must be an outside wall | Indoor unit anywhere reachable by pipework |
| Indoor noise | Compressor noise is in the room | Fan noise only |
| Outdoor noise | At the wall of the room served | Condensing unit can be sited away from bedrooms and boundaries |
| Air distribution | Limited by the opening position | Chosen for best throw |

## Advising the customer honestly

- The best result is maximum comfort with minimum noise, minimum draught and
  minimum energy — not the biggest machine.
- Reducing the load is cheaper than buying capacity. Ceiling insulation lowers
  the heat flow through the roof, so a better R-value shrinks the machine you
  need and the bill forever after.
- Cheapest is rarely best once running costs and noise complaints are counted.
- If outdoor noise disturbs a neighbour, the installer may have to carry the
  cost of relocating the unit, and disputes can end up in front of council.
- A bad installation damages the reputation of the whole trade, not just the
  business that did it.
`,
        quiz: [
          {
            q: "A split system is rated 4.88 kW cooling for 1.47 kW input. What is its EER, and what does that number mean?",
            options: [
              "3.32 — it moves 3.32 kW of heat for every kW of electricity drawn",
              "0.30 — it converts 30% of the electricity into cooling",
              "6.35 — the sum of capacity and input divided by input",
              "3.32 kW — the net cooling after fan power",
            ],
            answer: 0,
            explain: "EER = capacity ÷ input = 4.88 ÷ 1.47 = 3.32 W/W. It is a ratio, not a percentage or a capacity: the machine pumps 3.32 units of heat for each unit of electrical energy, which is possible because it moves heat rather than creating it.",
          },
          {
            q: "Why is it poor practice to fix a hot-climate application by simply fitting a much larger standard unit?",
            options: [
              "Larger units always cost more to run at part load",
              "The larger unit still exceeds its rated amperage above about 40°C ambient, so it will overload and eventually burn out",
              "Larger units cannot be fitted with reverse cycle",
              "The refrigerant charge would exceed the room charge limit",
            ],
            answer: 1,
            explain: "Oversizing does nothing about the real problem, which is condensing temperature and motor current at high ambient. Standard units begin drawing over their rated current above roughly 40°C; hot-climate service needs models the manufacturer has specifically rated for it.",
          },
          {
            q: "A surveyed load is 5.02 kW and the available split is rated 4.88 kW at standard conditions. In a temperate southern capital, what is the sensible response?",
            options: [
              "Reject it — the unit must always exceed the calculated load",
              "Accept it, knowing it will run continuously on the hottest afternoons, which also helps dehumidification",
              "Fit two of them for redundancy",
              "Accept it and raise the thermostat setting by 3 K to compensate",
            ],
            answer: 1,
            explain: "A 3% shortfall means full-load running on a handful of design days, which is acceptable and gives better moisture removal than a machine that short-cycles. In a hot, humid climate the answer changes, because a 5–10% derating would put the unit well below the load.",
          },
          {
            q: "Cooling capacity is rated at 27°C DB / 19°C WB indoor. Why is the wet bulb quoted as well as the dry bulb?",
            options: [
              "It sets the airflow rate used for the test",
              "It fixes the moisture content of the entering air, and hence how much of the coil's capacity goes into latent cooling",
              "It is the temperature the supply air must reach",
              "It determines the condensing temperature",
            ],
            answer: 1,
            explain: "Wet bulb pins down the humidity of the air entering the coil. Wetter entering air means more condensation on the coil, more latent load, and less of the total capacity available as sensible cooling — so two tests at the same dry bulb but different wet bulbs are not comparable.",
          },
        ],
      },

      /* ================================================================
         3 — Central station systems and the economy cycle
         ================================================================ */
      {
        id: "central-station",
        title: "Central station systems, the elements of air-conditioning and the economy cycle",
        minutes: 14,
        simple: "In a big building the machinery does not live in the rooms. It sits in one plant room and sends either cold air or cold water out to where people are, like a kitchen sending meals to tables. This lesson covers what that central plant has to do to the air, how such systems are grouped, and the trick of using cool outside air instead of running the chiller.",
        refs: ref("central station systems", "the purpose and elements of air-conditioning", "the economy cycle and enthalpy control", "systems and applications classification"),
        content: `
A central station system is one where the major equipment — compressors, water
chillers or DX evaporators, condensers, boilers, cooling towers, main fans,
pumps and air handling units — all live in or immediately around one plant area.
From there, either conditioned air or chilled and heated water is distributed to
the occupied spaces. Every multistorey office block, shopping centre, hospital
and university campus in Australia works this way.

The distances involved are the point. A person on level 18 may be a hundred
metres of duct and pipe away from the machine that is cooling them, and the
system still has to deliver air of the right temperature, moisture content,
cleanliness and quantity to their desk.

## What the plant actually has to do

It is easy to get lost in machinery and forget the purpose. Air-conditioning
exists to provide comfort for people, or to hold the conditions a process or a
piece of equipment needs. That breaks into five jobs:

| Element | Why it is needed | Typical plant item |
|---|---|---|
| Temperature control | Remove or add sensible heat from solar gain, occupants, lights and equipment | Cooling coil, heating coil, chiller, boiler |
| Humidity control | People and appliances add moisture; ventilating air adds or removes it | Cooling coil below dew point, humidifier |
| Ventilation | Dilute and remove odours and carbon dioxide, restore oxygen | Outside air intake, dampers, relief or exhaust fan |
| Filtration | Remove dust, particles and in some cases bacteria; also cuts cleaning and redecorating costs | Filter bank, HEPA in critical areas |
| Air distribution | Deliver the right quantity of the right air to the right place, without draught | Fans, ducts, terminals, diffusers |

An air-conditioning system is therefore an engineered integration: the designer
combines accepted techniques to cool or heat, humidify or dehumidify, filter,
purify and distribute air so that a lot of different needs in one building are
satisfied at once. Increasingly, one of those needs is a good energy rating for
the building itself, since tenants use ratings as evidence that they occupy
sustainable premises.

A system that suits an open-plan office may be entirely wrong for a hospital or
a laboratory. And a system that looks wasteful on paper can turn out to be the
most economical choice for a particular building once it is properly controlled.
In the ideal world the designer compares every option by calculation; in
practice the choice is limited by budget, by the building the architect has
already drawn, and by the designer's own experience. What has changed is that
owners now weigh whole-of-life running cost and sustainability against capital
cost, not capital cost alone.

## How the systems are classified

Central systems differ mainly in their air-handling arrangements. They fall into
two families and four practical classes:

| Class | Family | Arrangement | Example covered later |
|---|---|---|---|
| (a) | Constant volume, variable temperature | All plant central, including the air handling unit; air ducted to the spaces | Central fan all-air system |
| (b) | Constant volume, variable temperature | Central chiller and boiler, with terminal air-handling units in each zone fed with chilled or heated water | Fan-coil and induction systems |
| (c) | Constant volume, variable temperature | Central plant plus zone units that further cool or reheat the air | Zone reheat, multi-zone mixing, dual duct |
| (d) | Variable volume, constant temperature | Central plant, DX or chilled water, with terminals that vary the air volume | Variable air volume |

Variable refrigerant flow, covered at the end of this module, sits outside this
air-side classification: it keeps the air volume constant at each terminal and
varies the refrigerant flow instead.

## The economy cycle

Fuel and electricity costs mean that systems are now judged over twenty years of
operation, not on their purchase price. Most of the load is fixed by the
architect, the building fabric and the occupants — but savings can still be made
in how the plant is operated, without changing conditions in the building at
all.

The term economy cycle applies to central all-air plants in which the quantity
of outside air can be varied between the ventilation minimum of about 15–20% of
the total circulated and 100%. The reasoning is simple. For much of the year a
commercial building needs cooling because of lights, people, equipment and sun,
while the air outside is cooler than the air coming back from the building. With
fixed dampers that cooler air is wasted. With modulating outside air, return air
and relief dampers, the plant can dump warm return air and pull in cool outside
air, and the mechanical cooling load falls or disappears.

A return air fan is normally required, because the plant must be able to push
the exhausted return air out of the building against duct resistance while the
supply fan is pulling in a nearly equal quantity of outside air.

### Why temperature alone is not enough

Outside air carries latent heat as well as sensible heat, and the coil must deal
with both. Compare two possible outside conditions at sea level:

| Outside air | Moisture content | Approximate enthalpy |
|---|---|---|
| 20°C DB, 80% RH | about 11.7 g/kg | about 50 kJ/kg |
| 27°C DB, 40% RH | about 8.9 g/kg | about 50 kJ/kg |

Work the first one through: saturation pressure at 20°C is 2.339 kPa, so at 80%
RH the vapour pressure is 1.871 kPa. Moisture content W = 0.622 × 1.871 ÷
(101.325 − 1.871) = 0.0117 kg/kg. Enthalpy h = 1.005 × 20 + 0.0117 × (2501 +
1.86 × 20) = 20.1 + 29.7 = 49.8 kJ/kg. The 27°C air at 40% RH works out at
essentially the same figure.

So the air that is 7 K cooler on a thermometer brings in exactly as much heat
energy per kilogram, and at higher humidity it would bring in more. A controller
that switched on dry bulb alone would open the dampers and increase the load.
That is why modern control is enthalpy control: the building management system
compares the total heat of outside and return air, using temperature and
humidity sensors, and picks whichever is genuinely cheaper to cool.

Where only dry-bulb changeover is available, a common schedule is to increase
outside air as ambient falls below about 24°C, holding maximum free cooling down
to around 20°C, then reducing the outside air volume again as ambient falls
towards 17°C so the supply air does not become too cold.

### Sprays in hot, dry weather

When the ambient is high but very dry, water sprays in the air handling unit can
provide useful evaporative cooling as well as humidification, provided the
building humidity stays inside its limits. In genuinely dry conditions, running
on full outside air with sprays can delay the start of the chiller by two or
three hours on a summer morning.

>! Any wetted surface in an air path — spray chamber, water tray, humidifier,
>! and above all the cooling tower serving the condenser — is a legionella risk.
>! Registration, cleaning, water treatment and maintenance obligations under
>! AS/NZS 3666 and state public health regulations are not optional, and the
>! penalties for ignoring them are severe.

## What to remember

- Central station means all the heavy plant in one place, distributing air or
  water to distant spaces.
- The plant has five jobs: temperature, humidity, ventilation, filtration and
  distribution. Neglect any one and occupants complain.
- Systems divide into constant-volume variable-temperature and variable-volume
  constant-temperature families.
- Economy cycle uses outside air as free cooling between the ventilation minimum
  and 100%, and needs modulating dampers plus a relief or return air fan.
- Judge outside air on enthalpy, not dry bulb — 20°C at 80% RH is no bargain.
- Outside air must never fall below the ventilation rate required by AS 1668.2,
  no matter what the energy strategy says.
`,
        quiz: [
          {
            q: "An economy cycle controller working on dry bulb alone opens to 100% outside air at 20°C and 85% RH, while return air is 24°C at 50% RH. What happens?",
            options: [
              "The cooling load falls because outside air is 4 K cooler",
              "The cooling load rises, because the humid outside air carries more total heat per kilogram than the drier return air",
              "Nothing changes, since enthalpy depends only on dry bulb",
              "The coil sensible load rises but the total load falls",
            ],
            answer: 1,
            explain: "Enthalpy counts moisture as well as temperature. Air at 20°C and 85% RH holds around 51 kJ/kg, more than 24°C air at 50% RH, so the coil must remove more heat, not less. This is exactly why enthalpy control replaced dry-bulb changeover.",
          },
          {
            q: "Why does an economy cycle normally need a return air fan?",
            options: [
              "To increase the supply air temperature",
              "To push the surplus return air out of the building while a nearly equal volume of outside air is drawn in",
              "To keep the chilled water flowing at low load",
              "To prevent the filters loading up",
            ],
            answer: 1,
            explain: "If the plant brings in up to 100% outside air, an equal mass must leave. The return or relief fan overcomes the resistance of the return ductwork and relief path; without it the building over-pressurises, doors bind and the intended free cooling never actually flows.",
          },
          {
            q: "A hospital ward system must not recirculate air between rooms. Which classification is least suitable?",
            options: [
              "Central chiller and boiler with terminal units in each room",
              "A single central all-air plant recirculating return air from all wards through one coil",
              "Terminal units supplied with preconditioned outside air",
              "Variable refrigerant flow with dedicated outdoor air supply",
            ],
            answer: 1,
            explain: "Recirculating air from many wards through a common plant is the classic route for transferring odours, and potentially bacteria, from one area to another. Terminal arrangements that condition each space separately and supply only outside air centrally avoid the cross-transfer.",
          },
          {
            q: "Filtration in a commercial air-conditioning system is justified on which grounds?",
            options: [
              "Only on occupant health grounds",
              "Only to protect the cooling coil",
              "Occupant health and comfort, protection of plant, and the economics of reduced cleaning and redecoration",
              "It is only required in hospitals and laboratories",
            ],
            answer: 2,
            explain: "Filters remove dust, particles and in some cases bacteria, which matters for health, but the economic argument is also real: a building whose air is filtered needs less internal cleaning and repainting, and its coils stay clean and efficient for longer.",
          },
        ],
      },

      /* ================================================================
         4 — Central fan (all-air) systems
         ================================================================ */
      {
        id: "central-fan-all-air",
        title: "Central fan (all-air) systems and their add-ons",
        minutes: 13,
        simple: "This is the simplest big-building system: one fan, one coil, one set of ducts, one air temperature for everybody. Think of a single tap of cold water feeding every basin in a building — cheap and reliable, but nobody gets their own setting. The extra bits bolted on to it, like heating coils, bypass dampers and water sprays, exist to buy back some of that lost control.",
        refs: ref("central fan all-air systems", "heating, bypass and humidification in central plants", "applications of central fan systems"),
        content: `
The central fan or all-air system is the ancestor of every commercial system in
this module. Return air comes back from the building, mixes with a proportion of
outside air, passes through filters and a coil, and one fan pushes the whole
conditioned airflow out to the spaces through ductwork. Everything happens in
the plant room; the occupied space contains nothing but ducts and diffusers.

## The base system

The order of components in the air handling unit matters and is nearly always
the same:

1. Mixing box, where return air meets outside air across modulating dampers.
2. Filter bank, before the coil so that the coil stays clean.
3. Cooling coil — either a chilled water coil fed from a central water chiller
   and circulating pump, or a bank of direct expansion coils fed from a
   refrigeration compressor.
4. Heating coil, where fitted.
5. Supply fan.
6. Distribution ductwork to the diffusers, then a return path back to the
   mixing box.

Low-velocity duct systems of this kind run at fan static pressures of roughly
150–300 Pa. That figure is worth memorising, because the high-velocity systems
later in this module run at five times as much.

Chilled water and DX each have their place. Chilled water lets one refrigeration
plant serve several air handling units and allows the machine room to sit far
from the coils; DX removes the water circuit and its pumps and heat exchange
losses, but ties the compressor to that one coil.

### Adding heating

A heating coil in the same casing turns the cooler into a year-round machine.
Steam can be used, but hot water at around 85°C is far more common, because a
steam boiler requires a full-time attendant. On smaller plants, electric element
heaters are used instead, which are simple but expensive to run.

### Face and bypass dampers

For closer control of both temperature and humidity, air can be diverted around
the coil instead of through it. Face dampers in front of the coil close as
bypass dampers open, so the supply air becomes a mixture of fully treated air
and untreated air.

Notice on any real unit that the bypass opening is much smaller in area than the
coil face. That is not a mistake: a finned coil offers high resistance to
airflow, so it needs a large face area to pass a given volume at an acceptable
face velocity, while the open bypass passes the same volume through a much
smaller hole.

Why bother, when you could simply cycle the compressor? Because a coil kept
fully cold and fully wet keeps dehumidifying, and the amount of cooling
delivered is trimmed by how much air you send through it. Cycling the coil off
instead lets the room humidity climb. A heating coil can be given its own face
and bypass dampers for the same reason.

### Water sprays: humidity and free cooling

Where relative humidity indoors falls too low, water sprays fitted before the
cooling coil add moisture to the airstream. Evaporating that water also cools
the air, and plant operators exploit this: in hot, dry summer weather the plant
can be run on 100% fresh air with the sprays doing both the humidifying and a
useful share of the cooling, delaying the start of the chiller by two or three
hours.

Spray eliminators — banks of hooked plates — must be fitted downstream so that
water droplets are not carried into the duct.

### Humidification in critical applications

Hospitals, operating theatres, computer rooms, laboratories and museum
conservation areas often need a specified relative humidity, commonly in the
range 60–70%, held all year:

- In hospitals, dry air aggravates respiratory conditions.
- In computer and equipment rooms, humidity in that band controls static
  electricity and keeps paper, tape and components in equilibrium.
- Laboratories and museums vary: living specimens and plants want high humidity,
  while books, paintings and archaeological material want low humidity.

Sprays are not ideal for these duties because dissolved solids in the water
deposit on the coil. Specialised humidifiers that inject steam or an atomised
mist are used instead, and are kept clear of the coil face.

## Strengths and weaknesses

| | Central fan all-air system |
|---|---|
| Cost | Simplest and cheapest of the central station systems |
| Space in occupied areas | Very little — ducts and diffusers only |
| Noise and maintenance | Plant room only, away from occupants |
| Economy cycle | Fully available if dampers are controlled |
| Zoning | Single zone only — one air temperature for everything served |
| Heating | Not provided in the base arrangement; must be added |
| Humidity | Only dehumidification, unless humidifiers are added |
| Recirculation | Air is shared between all spaces served |
| Duct space | Needs large supply and return ducts |

The single-zone limitation is the one that matters. One supply temperature
cannot suit a west-facing office at 3 pm and an interior meeting room at the
same time, and it cannot handle a zone that needs heating while another needs
cooling. The system is also unsuitable where air must not be recirculated, such
as hospitals, and where the building simply has no room for large ducts.

## Where it is used

Central fan systems suit spaces where the load is reasonably uniform and no part
of the area is hit by extreme solar or process loads: department stores, open
office floors, restaurants and many process plants. Capacity control of the
compressor is essential for economical operation of large units, and economy
cycle control of the outside and return dampers is worth fitting to most plants.

In large buildings, these systems rarely stand alone. They are combined with
zone reheat, mixing dampers, terminal units or variable air volume — all covered
in the lessons that follow — to give the economy of a central plant with some
measure of local control.

>! Never enter an air handling unit without isolating and locking out the fan.
>! Supply fans in central plants carry enough stored energy to keep windmilling
>! after power is removed, access doors on the suction side can be held shut by
>! negative pressure, and a fan that restarts on an automatic control while
>! someone is inside the casing is a fatal event, not an injury.

## On the job

- Filters before the coil, always. A fouled coil costs capacity and raises
  condensing pressure.
- Check the bypass damper linkage when a plant cannot hold humidity; a bypass
  stuck open explains cold, clammy complaints better than any refrigerant fault.
- Confirm the hot water flow temperature before chasing a heating complaint —
  about 85°C is normal, and a boiler running low will look like a coil fault.
- Spray eliminators and water trays need scheduled cleaning; they are a
  microbial risk and a carryover risk at the same time.
- If a client asks for a single all-air plant to serve zones with different
  loads, the answer is another system, not a bigger fan.
`,
        quiz: [
          {
            q: "Why is the bypass damper opening in an air handling unit much smaller than the coil face area?",
            options: [
              "To limit how much untreated air can ever reach the space",
              "Because a finned coil has high airflow resistance and needs a large face area, while an open bypass passes the same volume through a small opening",
              "To keep the air velocity through the bypass below 2 m/s",
              "Because the bypass only ever carries outside air",
            ],
            answer: 1,
            explain: "It is a pressure-drop argument. The coil must be large in face area so the air can get through it at a sensible velocity; the empty bypass has almost no resistance, so a small opening passes the same airflow. Sizing them equal would make the bypass path dominate as soon as it cracked open.",
          },
          {
            q: "A central all-air plant holds temperature but the space is humid and clammy at part load. Which arrangement addresses this best?",
            options: [
              "Cycling the compressor off more often",
              "Raising the chilled water temperature",
              "Keeping the coil fully cold and modulating face and bypass dampers to trim the supply temperature",
              "Increasing the supply airflow",
            ],
            answer: 2,
            explain: "A cold, wet coil keeps condensing moisture; trimming capacity by passing less air over it preserves that dehumidification. Cycling the compressor or raising the water temperature warms the coil, so it stops removing latent heat and the space goes damp — exactly the fault described.",
          },
          {
            q: "Hot water at around 85°C is preferred over steam for heating coils in most commercial plants because:",
            options: [
              "Steam cannot reach a high enough temperature",
              "A steam boiler needs a full-time attendant, adding cost and complication",
              "Steam coils cannot be fitted with face and bypass dampers",
              "Hot water gives higher heat transfer per square metre of coil",
            ],
            answer: 1,
            explain: "The deciding factor is operational: steam plant carries an attendance and licensing burden that hot-water plant does not. Steam coils work perfectly well and in fact transfer heat readily; it is the boiler that makes them unattractive for an ordinary office building.",
          },
        ],
      },

      /* ================================================================
         5 — Zone control in all-air systems
         ================================================================ */
      {
        id: "zone-control",
        title: "Zoning all-air systems: mixing dampers, zone reheat and dual duct",
        minutes: 14,
        simple: "A building does not warm up evenly — the east side bakes in the morning, the west in the afternoon, and the middle stays the same all day. So one air temperature cannot keep everyone happy. These systems all solve that the same way: make hot air and cold air centrally, then let each area decide, by dampers or by a heater in its own duct, what mixture it gets.",
        refs: ref("multi-zone mixing dampers for zone control", "central system with zone reheat", "dual-duct high-velocity systems with mixing boxes", "combination central recirculation and zone units"),
        content: `
Zoning is the response to a simple fact: the load on one part of a building has
almost nothing to do with the load on another part at the same moment. The sun
strikes the east face in the morning, the north around the middle of the day and
the west in the afternoon. Meanwhile the interior of a deep floor plate sees no
sun at all and is heated by lights, people and equipment continuously — it needs
cooling in mid-winter.

## How buildings get divided

| Building type | Sensible zoning | Reason |
|---|---|---|
| Heavy walls, small glass area, low infiltration | One perimeter zone plus one interior zone | Wall gains and losses are slow and similar all round |
| High glass on north and south, low-conductivity walls elsewhere | Interior zone plus four perimeter zones | Each face sees a different solar load through the glass at a different hour |
| Long, narrow building with glass on the two long faces | Three air handling units: north perimeter, south perimeter, interior | The narrow east and west ends collect little solar load |

In the four-perimeter case, in mild weather the southern face may need heating
at the same moment the northern face needs cooling. That is the situation no
single-zone system can serve.

## Multi-zone mixing dampers

One air handling unit can serve several zones if it makes two air streams and
lets each zone blend them. A heating coil and a cooling coil are stacked one
above the other in the casing, and each zone duct leaves the unit through a pair
of opposed dampers driven by one actuator, controlled by a temperature sensor in
that zone. Three zone ducts means three sets of dampers.

Each zone's dampers can select:

- all heated air
- all cooled air
- any proportion of the two.

In warm weather the heating system is shut down and the top path becomes a plain
bypass, so a zone gets all cooled air, a blend of cooled and bypassed air, or
all bypassed air.

Worked through with three zones: zone 1 in full sun demands cooling, so its cold
damper opens fully and its hot damper closes. Zone 2 on the shaded side demands
heat, so its hot damper opens fully. Zone 3 is satisfied, so both its dampers
sit part open and it receives air at close to room temperature.

The system gives real zone control from one machine, but it can be very wasteful
of energy — you are heating air that you have just paid to cool. It only makes
sense where zone loads do not differ much at any one time, and where the control
strategy prevents both coils from operating together. Running a heating coil and
a cooling coil simultaneously is indefensible at modern energy prices; if the
building genuinely needs simultaneous heating and cooling, choose a different
system.

## Central system with zone reheat

Zone reheat takes the opposite approach. The central plant cools all the air to
whatever temperature the worst zone requires — in summer, cold enough to satisfy
the zone with the heaviest cooling load — and then every other zone raises its
own supply temperature with a heating coil in its branch duct, controlled by a
thermostat on that floor or zone.

The arrangement is often combined with face and bypass dampers on the air
handling unit and economy cycle control of the outside and return dampers. In a
tall building, each major zone gets its own air handling unit, and the main duct
from each unit branches to every floor through a reheat coil with its own
thermostat. Where bypass dampers are fitted, most of the summer load can be
handled by bypassing air, with only a small amount of reheat trimming each
floor.

| | Zone reheat |
|---|---|
| Zoning ability | Positive control of every zone temperature |
| Energy use | Poor unless zone loads are reasonably balanced and reheat is minimal |
| Space | Large supply and return ducts, plus space for a heating coil in each zone |
| Suitability | Not suitable where air must not be recirculated, such as hospitals |
| Other advantages | Everything a central system offers: plant room noise, easy maintenance, economy cycle |

The most common large-office arrangement in practice is a combination:
a central recirculating plant providing the bulk of the conditioning, with zone
units — reheaters, mixing units, or variable volume boxes — providing local
control, and a purpose-chosen system for any special area such as a computer
room or a kitchen.

## Dual-duct high-velocity systems

The dual-duct system gives the closest zone control of any all-air arrangement,
and has been used in a number of significant Australian public buildings.

One supply fan, usually a backward-curved centrifugal chosen for high pressure,
discharges into two ducts. One duct contains a heating coil, the other a cooling
coil. Both run at high pressure — around 1.0 to 1.5 kPa, against the
150–300 Pa of a normal low-velocity system — so the ducts can be small, round
and easy to route through a building. Both are carried to mixing boxes serving
each area.

### Inside the mixing box

The box has two inlets, each with a damper and its own actuator, and it does two
jobs: it proportions hot and cold air to satisfy the room, and it keeps the
total volume constant.

Follow a call for cooling. The room is being heated, so the hot damper is open
and the cold damper closed. The room thermostat senses the temperature rising
and opens the cold damper. Air now enters from both ducts, so the volume rises —
say by 20% — and the pressure inside the box rises with it. A static pressure
regulator senses that rise and closes the hot damper by the corresponding
amount, restoring the original volume at a lower mixed temperature. As the call
for cooling continues, the thermostat opens the cold damper further and the
pressure regulator keeps trimming the hot one.

A pressure-reducing baffle in the middle of the box mixes the two streams
thoroughly and drops the downstream velocity, so that the box discharges at
around 100 Pa and ordinary ceiling diffusers can be used. One box may serve a
single outlet or up to about six, depending on how large an area the one sensor
controls.

### Getting the economics right

Supply temperatures are scheduled seasonally rather than left at design values.
In summer the hot duct may carry air at only 24–26°C with 10°C air in the cold
duct — enough difference to trim any zone, without wasting energy making air
genuinely hot. In winter the refrigeration plant can be shut down: the hot duct
carries 45°C air and the cold duct simply carries return air mixed with outside
air. In warmer parts of Australia a preheater in the outside air path is usually
unnecessary.

## Comparing the three

| System | Zone control quality | Energy use | Duct space | Best suited to |
|---|---|---|---|---|
| Multi-zone mixing dampers | Good, limited by the number of zone ducts leaving one unit | Poor if loads differ; acceptable if they track together | Several full-size ducts from one unit | Single-storey buildings with a handful of zones close to the plant |
| Zone reheat | Very good, zone by zone or floor by floor | Poor when heavy reheat is needed; good when reheat is small | Large main ducts plus zone coils | Multistorey offices with separate air handling units per facade |
| Dual duct high velocity | Excellent and fast-responding | Moderate, provided duct temperatures are scheduled; high fan power | Small round high-velocity ducts | Buildings needing close control where duct space is tight |

>! High-velocity ductwork at 1.0–1.5 kPa is a physical hazard as well as an
>! acoustic one. Never open an access panel, disconnect a flexible or remove a
>! mixing box cover while the supply fan is running. Isolate and lock out first,
>! and let the system pressure decay before working on it.

## What to remember

- Zoning exists because solar and internal loads differ across a building at the
  same hour.
- Mixing dampers blend centrally made hot and cold air at the unit; zone reheat
  makes cold air centrally and warms it in the branch; dual duct carries both
  streams to the room and blends them there.
- Every one of these arrangements can waste energy by heating air it has just
  cooled. Scheduling duct temperatures and minimising reheat is what makes them
  defensible.
- A dual-duct mixing box holds volume constant using a static pressure regulator
  while the thermostat sets the mixture.
- Most real buildings use a combination of systems, chosen zone by zone.
`,
        quiz: [
          {
            q: "In a dual-duct mixing box, the room thermostat opens the cold air damper. What keeps the total air volume to the room constant?",
            options: [
              "The supply fan speeds up to compensate",
              "A static pressure regulator senses the pressure rise in the box and closes the hot damper by a matching amount",
              "The diffuser throttles automatically",
              "The hot duct damper is mechanically linked to the cold one at a fixed ratio",
            ],
            answer: 1,
            explain: "Two independent actuators are used: the thermostat drives the cold damper for temperature, and a static pressure regulator drives the hot damper to hold volume. A fixed mechanical link would not work, because the two ducts are at different pressures and the required ratio changes with load.",
          },
          {
            q: "A zone reheat system supplies air to eight zones. At what temperature does the central plant deliver air in summer?",
            options: [
              "At the average temperature required across the eight zones",
              "At the temperature required by the zone with the heaviest cooling load",
              "At a fixed 16°C regardless of load",
              "At the temperature required by the lightest-load zone, with the rest topped up by extra airflow",
            ],
            answer: 1,
            explain: "The central plant must satisfy the worst case, so it cools to whatever the heaviest-load zone needs; every other zone then reheats its own branch back up. That is precisely why reheat is wasteful when one zone has a much heavier load than the rest — the other seven pay for it.",
          },
          {
            q: "Why can dual-duct systems use much smaller ducts than a conventional low-velocity system?",
            options: [
              "Because they supply less air overall",
              "Because they operate at about 1.0–1.5 kPa instead of 150–300 Pa, so air is carried at much higher velocity",
              "Because round ducts have less resistance than rectangular ones",
              "Because the mixing boxes recirculate ceiling air",
            ],
            answer: 1,
            explain: "Higher fan pressure means higher duct velocity, and a given mass flow then fits into a smaller cross-section. The trade-off is fan power and noise, which is why the velocity and pressure must be knocked down inside the mixing box before the air reaches a ceiling diffuser.",
          },
          {
            q: "Which building would gain least from multi-zone mixing dampers?",
            options: [
              "A single-storey library with several reading rooms of similar orientation",
              "A small office with three zones whose loads rise and fall together",
              "A deep multistorey tower where south-facing offices need heating while north-facing offices need cooling all afternoon",
              "A shop with a front-of-house and a back-of-house zone",
            ],
            answer: 2,
            explain: "Mixing dampers are wasteful exactly when zone demands oppose each other, because both coils must then run and every zone is blending heated and cooled air. That is the case in the tall tower described; a separate air handling unit per facade, or a VAV or VRF system, is the better answer there.",
          },
        ],
      },

      /* ================================================================
         6 — Air-water systems: fan-coil terminals and primary air
         ================================================================ */
      {
        id: "fan-coil-terminals",
        title: "Air–water systems: terminal fan-coil units and primary ventilating air",
        minutes: 14,
        simple: "Instead of sending cold air a long way through big ducts, you send cold water through small pipes and put a small fan and coil in each room. Water carries heat far better than air for the same pipe size, so this is like delivering concentrate instead of soft drink. The catch is that every room now contains a machine that needs filters, drains and servicing.",
        refs: ref("central plant with terminal air-conditioning units", "the fan-coil system of terminal units", "terminal units with ventilating air supply"),
        content: `
The simplest way to give every zone its own control is to give every zone its
own air handling unit. Do that with water instead of air as the distribution
medium and you have an air-water system: a central chiller and boiler in the
plant room, small pipes running through the building, and a fan-coil unit in
each space with its own controller.

Water is a far denser carrier of heat than air. To shift the same kilowatts you
need a pipe of a few tens of millimetres where you would need a duct of a few
hundred, which is exactly why this approach wins in existing buildings and in
buildings with no room for ducts.

## The fan-coil unit

Each unit contains a fan, a finned coil, a filter, a control valve on the water
circuit, a drain pan and a controller. Units are installed under windows, in
ceilings, in cupboards outside the space, or in small local plant rooms.

Because each unit is independently controlled and can be switched off when the
room is unoccupied, this arrangement suits hotels, motels, hospital wards and
areas where food is processed. Just as important, no air is recirculated from
one zone to another, so odours and airborne organisms are not carried between
rooms.

## Pipe arrangements

| Arrangement | How it works | Control quality | Cost | Notes |
|---|---|---|---|---|
| Two-pipe | One flow and one return; the whole building gets either chilled or heated water, changed over manually or automatically | Degrees of cooling, or degrees of heating, but not both at once | Lowest | Facades can be split with separate pumps and piping so sunny faces get cold water while shaded faces get hot |
| Three-pipe | Common return, separate hot and cold flows, valves selecting either | Good in theory | Middling | Effectively abandoned — mixed returns, high running cost, and hot return water reaching the chiller evaporator caused violent pressure problems |
| Four-pipe | Separate hot and cold flow and return, both coils in every unit | Excellent — any unit can heat or cool at any moment | Highest | The standard where genuine simultaneous heating and cooling is required |
| Two-pipe plus electric heat | Chilled water only, with a resistance element in each unit for heating | Good | Low capital, high heating running cost | Common in warm Australian climates where heating hours are few and a boiler plus piping cannot be justified |

## What the fan-coil system is good at

- A high level of individual control in every zone, especially with four-pipe or
  element heating.
- Practically no limit on how far the water can be piped, vertically or
  horizontally. The principle has been extended to whole city blocks, university
  campuses, hospital complexes and district cooling schemes.
- Few limits on unit size, so the area each unit serves is flexible.
- No large supply and return air ducts.
- Easy to install in an existing building where running ducts would mean
  structural work.
- No shared recirculated air between zones.
- Units can be turned off when a room is not in use, which is why the system
  suits hotels and motels.

## What it is bad at

- Capital cost of many small units is high.
- Fresh air has to reach every unit somehow. A perimeter-only installation
  cannot ventilate the interior of the building, and the outside air quantity
  drawn in through a wall opening at each unit is difficult to measure or
  control.
- Each unit must be sized for the whole load of its room, since nothing else is
  helping it.
- Filters, fans, valves, coils and drain pans must be serviced inside the
  occupied space — expensive, disruptive, and often deferred until something
  fails.
- Fan noise is generated in the room itself and almost always affects comfort.
- Fresh air quantities are usually fixed, and effective economy cycle operation
  is limited.

## Terminal units with primary ventilating air

Most of those disadvantages come back to ventilation, and the fix is to
precondition the entire outside air requirement centrally and duct it to the
terminals. That outside air — usually 10–30% of the total air circulated — is
filtered, cooled or heated and dehumidified at the central plant, then delivered
either directly into each fan-coil or into a corridor plenum above a false
ceiling from which the units draw it. The fan-coil then mixes primary and room
air and trims the mixture to suit the zone.

The primary air temperature is scheduled against the outside condition or the
average zone demand:

| Outside ambient | Typical primary air supply temperature | Duty |
|---|---|---|
| 38°C | 12–14°C | Cooling and full dehumidification |
| 25°C | 15°C or higher | Light cooling |
| Below 20°C | Heating begins |  |
| 10°C | Up to about 40°C | Offsetting fabric losses |

In warmer climates it is common to supply all the ventilating air at the
condition demanded by the zone with the greatest load, and to fit only a heating
coil in each terminal — but whether that works depends on the building and how
it is used.

Air brought in must be able to get out again. Every room served this way needs
exhaust dampers or door relief grilles so that used air leaves at the same rate
fresh air enters; otherwise the rooms pressurise, the primary air stops flowing
and the ventilation exists only on the drawing.

### Why primary air helps

- Terminal units can be smaller and cheaper, because the central plant does most
  of the work — in particular all of the dehumidification.
- Terminals no longer need an outside wall, so they can serve interior spaces.
- Filter and fan maintenance falls, because the outside air has already been
  filtered centrally.
- The primary air ducts are one-way and small, which simplifies installation.
- Zone control is very good with no recirculation between zones, which is why
  the arrangement suits hospitals, dormitories, hotels and laboratories.

### Compared with a straight all-air system

- Many terminal units cost more than one central plant.
- Running costs are higher unless unnecessary reheating and re-cooling is
  designed out.
- Noise and maintenance still occur inside occupied spaces.
- Economy cycle cannot be used effectively: the free cooling available is
  limited to the fraction of the air that is outside air, which may be only
  10–30%.

>! Every fan-coil unit contains a wet coil and a drain pan sitting above a
>! ceiling or beside a bed. Blocked drains, dirty pans and neglected filters
>! grow microbial slime, stain ceilings and generate complaints that get blamed
>! on the refrigeration. Condensate lines must be trapped correctly for the fan
>! pressure, and filter changes must actually be scheduled and recorded.

## On the job

- Ask what pipe arrangement you are working on before diagnosing a heating
  complaint. A two-pipe system in cooling changeover physically cannot heat.
- Balance matters: an unbalanced water circuit starves the units furthest from
  the pump, and the occupants there complain forever.
- Check the primary air is actually arriving. A crushed flexible into a corridor
  plenum kills the ventilation for a whole floor with no alarm anywhere.
- Confirm relief paths — door grilles or undercuts — exist and are not blocked
  by carpet or furniture.
- Log every unit's filter change. In a 300-room hotel the filters are the
  maintenance program.
`,
        quiz: [
          {
            q: "Why did three-pipe fan-coil systems fall out of use?",
            options: [
              "They could not provide simultaneous heating and cooling",
              "Mixed hot and cold return water raised running costs and service problems, and hot return reaching the chiller evaporator caused severe pressure problems",
              "The extra pipe would not fit in ceiling voids",
              "The control valves were not available in sufficient sizes",
            ],
            answer: 1,
            explain: "Three-pipe systems did give simultaneous heating and cooling, but the shared return blended hot and cold water and wasted the energy in both. The practical killer was hot return water arriving at the chiller evaporator faster than it could be diverted, producing violent pressure excursions.",
          },
          {
            q: "Primary (ventilating) air in an air-water system is typically what proportion of the total air circulated in the building?",
            options: [
              "1–5%",
              "10–30%",
              "40–60%",
              "100%",
            ],
            answer: 1,
            explain: "The central plant conditions only the outside air requirement, normally 10–30% of the total circulated, while each fan-coil recirculates room air locally. That ratio is also why the economy cycle is nearly useless on these systems: free cooling is limited to that fraction of the air.",
          },
          {
            q: "A hotel fan-coil system supplies preconditioned primary air to each room, but guests on one floor report stuffiness and the doors are hard to push open. What is the most likely cause?",
            options: [
              "The chilled water temperature is too high",
              "There is no adequate relief path, so the rooms are pressurised and the primary air cannot enter at the design rate",
              "The fan-coil filters are blocked",
              "The primary air is being supplied too cold",
            ],
            answer: 1,
            explain: "Doors that resist opening are the classic sign of over-pressurised rooms. If used air cannot escape through relief grilles or door undercuts at the same rate fresh air is introduced, the ventilation flow chokes itself off — no fault in the refrigeration plant at all.",
          },
          {
            q: "Which claim about terminal fan-coil systems is TRUE?",
            options: [
              "Fan noise is confined to the plant room",
              "Water can be piped almost any distance vertically or horizontally, so one central chiller can serve a whole campus or district",
              "Maintenance is cheaper than an all-air system because there are fewer filters",
              "Each unit can be undersized because the central plant handles the room load",
            ],
            answer: 1,
            explain: "Piping distance is the great strength — district cooling schemes serve entire city blocks from one plant. The other options are the system's known weaknesses: fan noise is in the room, filters and maintenance multiply with the number of units, and each unit must be sized for its own full room load unless primary air is doing part of the work.",
          },
        ],
      },

      /* ================================================================
         7 — Induction units and chilled beams
         ================================================================ */
      {
        id: "induction-chilled-beams",
        title: "Terminal induction units and chilled beams",
        minutes: 12,
        simple: "These terminals have no fan of their own. A jet of air from the central plant squirts through small nozzles and drags room air along with it, the way a shower jet pulls the curtain inwards, and that dragged-along air is pulled across a cold water coil on the way. Fewer moving parts in the ceiling means less noise and less maintenance — but the coil must never get cold enough to drip.",
        refs: ref("terminal induction units", "chilled beams, active and passive", "application of induction unit systems"),
        content: `
An induction unit is a terminal with no fan in it. All the air-moving energy
comes from the central supply fan, delivered as a small quantity of
high-velocity, high-pressure primary air. That makes the terminal itself simple,
silent apart from air noise, and almost free of maintenance beyond a lint
screen.

## How induction works

Primary air arrives at between about 1.0 and 1.5 kPa — far above the 150 to
300 Pa of an ordinary low-velocity system — and is released through a row of
small nozzles inside the unit. A fast jet leaving a nozzle drops the static
pressure around itself, and the surrounding room air is pushed into that
low-pressure region by the higher pressure elsewhere in the room. That induced
secondary air is drawn through a small finned coil, where it is further cooled
or heated, and leaves mixed with the primary air through the discharge grille.

The ratio is generous: primary air from the central fan can induce roughly three
times its own volume of room air. So a modest primary duct produces a large
supply of conditioned air at the terminal.

## The perimeter application

Induction units are typically installed under windows around the perimeter of a
multistorey office building, two to three metres apart, with a thermostat on
each unit or on each small group of units controlling the secondary water valve.
The deflector grille is set to throw the discharge up across the glass at about
five degrees off vertical, which sweeps away heat flowing in through the window
in summer and the cold downdraught in winter.

Do that all the way around the building and something useful happens to the
rest of the plant. The perimeter units maintain a curtain of roughly 23°C air
against the wall, so the interior of the floor never sees a transmission gain or
loss. The interior zone is then driven only by lights, people and equipment,
which means it needs cooling all year, even in winter, and can be served by a
simple cooling-only central system.

The central plant preconditions the primary air exactly as it would for any
ventilating-air system: down to around 12°C in summer, up to around 40°C in
winter, scheduled against ambient, with zone reheat coils in the high-velocity
branches if the design calls for them.

>! Induction units are not fitted with a condensate drain. The primary air must
>! therefore be dry enough to carry all of the latent load of the space, so that
>! the secondary coil runs completely dry. If the primary air is allowed to
>! arrive too humid, or the secondary water is allowed to run too cold, the coil
>! condenses moisture and water runs onto the floor and the ceiling below.

## Strengths and weaknesses of induction

| | Induction unit system |
|---|---|
| Simplicity of terminal | High — no fan, no motor, no drain |
| Zone control | Excellent at the perimeter, unit by unit or in small groups |
| Duct size | Small, because the air is carried at high velocity |
| Plant room | Needs a large, costly, high-pressure supply fan |
| Space in the room | Units occupy the area under every window |
| Commissioning | Design, balancing and commissioning are genuinely difficult |
| Capital cost | High, for both the units and the high-velocity ductwork |
| Maintenance | Regular cleaning of lint screens and attention to each water control valve |

Office buildings with heavy solar loads or large areas of glass curtain wall are
the classic application: perimeter induction handles the fabric loads, and a
simpler central system, cooling only or cooling plus zone reheat, handles the
core.

## Chilled beams

A chilled beam works on the same physical principle and has become popular for
the same reason induction did — it moves less air, so it uses less fan energy
and takes less space. Beams come in two forms.

**Passive chilled beams** are simply a finned cooling coil in a housing mounted
at or near the ceiling. They have no air connection at all. Room air warms,
rises, meets the cold coil, is cooled, becomes denser and falls back into the
room, and natural convection keeps a slow circulation going. Because a passive
beam does no ventilating, a separate air system must deliver outside air to the
space through its own diffusers.

**Active chilled beams** are connected to the central air handling unit. Primary
ventilating air is delivered into a plenum inside the beam and discharged
through nozzles, inducing room air up through the beam's cooling battery exactly
as an induction unit does. Primary and induced air mix and leave through slots
along the length of the beam, hugging the ceiling by the Coanda effect. A
typical active beam delivers something like one part primary air to five parts
recirculated room air, so it conditions several times as much air as it is
supplied with.

| Feature | Passive beam | Active beam | Induction unit | Fan-coil unit |
|---|---|---|---|---|
| Air movement source | Natural convection only | Primary air jets | Primary air jets | Local fan |
| Connected to ventilation | No | Yes | Yes | Sometimes |
| Local fan and motor | None | None | None | Yes |
| Noise in the space | Almost none | Low, air noise only | Low, air noise only | Fan noise |
| Typical position | Ceiling | Ceiling | Under windows | Ceiling, cupboard or under window |
| Condensate drain | Not fitted — must run dry | Not fitted — must run dry | Not fitted — must run dry | Drain pan and trap |

## Keeping the coil dry

Everything in this family stands or falls on one number: the chilled water flow
temperature must stay above the dew point of the room air. Where a conventional
fan-coil runs 6–7°C water and drains what it condenses, a beam or induction coil
typically runs water at about 14–16°C and must never condense at all. Two things
protect it:

1. The central plant dehumidifies the primary air, so the room dew point is held
   low — typically around 10–12°C.
2. A dew point sensor in the space or in the return air raises the secondary
   water temperature, or closes the valve, if humidity climbs.

That is why a chilled beam building is vulnerable to anything that dumps
moisture into a space — an open loading door in humid weather, a failed primary
air fan, a shutdown restarted on a muggy Monday morning. The first sign is
condensation dripping from the ceiling, and the fix is always on the air side,
not the water side.

## What to remember

- Induction units and active beams have no fan: the central supply fan does all
  the work, and the terminal multiplies its effect by inducing room air.
- Primary air pressure for induction is 1.0–1.5 kPa, roughly five times a
  conventional low-velocity system.
- Induced-to-primary ratios of about 3:1 for induction units and around 5:1 for
  active beams are typical.
- Perimeter induction creates a thermal barrier at the glass and lets the
  interior be served by a cooling-only system.
- None of these terminals drain. Primary air must handle all latent load, and
  secondary water must stay above room dew point.
`,
        quiz: [
          {
            q: "What makes room air flow through the coil of an active chilled beam or an induction unit?",
            options: [
              "A small fan inside the terminal",
              "A jet of primary air through nozzles lowers the local static pressure, and higher room pressure pushes room air into the terminal",
              "The buoyancy of air warmed by the coil",
              "A negative-pressure return duct connected to the beam",
            ],
            answer: 1,
            explain: "It is induction: a high-velocity jet creates a low-pressure region and the surrounding room air is pushed in behind it. There is no fan in the terminal at all — which is the whole point, since it removes the motor, the noise and most of the maintenance from the occupied space.",
          },
          {
            q: "Chilled beam secondary water is run at about 14–16°C rather than 6–7°C. Why?",
            options: [
              "To reduce pumping power",
              "Because the beam has no condensate drain, so the coil surface must stay above the room dew point and never condense moisture",
              "Because beams have less surface area than fan-coils",
              "To allow the chiller to run at part load",
            ],
            answer: 1,
            explain: "A beam coil is a dry coil by design. If its surface fell below the room dew point it would condense water it has no way to collect, and that water drips into the space. The higher water temperature also lets the chiller run more efficiently, but avoiding condensation is the governing reason.",
          },
          {
            q: "Perimeter induction units maintain a curtain of about 23°C air against the glass. What does that allow the designer to do with the interior zone?",
            options: [
              "Serve it with a cooling-only central system, since it sees no fabric gain or loss and is driven by internal gains all year",
              "Leave it unconditioned",
              "Serve it with a heating-only system in winter",
              "Use the same induction units at half spacing",
            ],
            answer: 0,
            explain: "Once transmission through the walls and glass is intercepted at the perimeter, the core load is lights, people and equipment, which produce heat every day of the year. So the core needs cooling even in winter and a simple cooling-only central plant will serve it.",
          },
          {
            q: "A passive chilled beam differs from an active one chiefly in that:",
            options: [
              "It uses warm water instead of chilled water",
              "It has no connection to the ventilation system and relies on natural convection, so ventilation air must be delivered by separate diffusers",
              "It contains a fan",
              "It can only be used in perimeter zones",
            ],
            answer: 1,
            explain: "A passive beam is just a cold coil in a housing: warm room air rises to it, is cooled and falls back. Because no primary air passes through it, the building still needs a separate air system to deliver outside air, which is a design cost that is easy to forget when comparing the two types.",
          },
        ],
      },

      /* ================================================================
         8 — Variable air volume
         ================================================================ */
      {
        id: "vav",
        title: "Variable-air-volume systems",
        minutes: 15,
        simple: "Older systems keep blowing the same amount of air and change how cold it is. A VAV system does the opposite: the air stays one temperature and each room gets more or less of it, like turning a tap down instead of adding hot water to cool tea. Because fan power falls away steeply as you slow a fan down, sending less air is where the savings come from.",
        refs: ref("variable-air-volume systems and energy efficiency", "variable-air-volume terminal units", "the Coanda effect and air distribution at low volume", "fan-modulation techniques"),
        content: `
Variable air volume is the most widely used air delivery method in central
station systems, and the reason is energy. Every other system in this module
holds the airflow constant and varies the temperature; VAV holds the supply
temperature roughly constant and varies the quantity delivered to each zone.

## Why the fan is worth attacking

It is easy to dismiss the fan as a minor consumer — it only pushes air around.
Put a number on it. A room 6 m by 5 m by 3 m contains 90 m³ of air, which at
about 1.2 kg/m³ weighs a little over 100 kg. A fan serving that room may be
circulating some 50 kg of air every minute — three tonnes an hour. That is not
free.

Fan input power depends heavily on duct resistance, but typically accounts for
15–20% of the total power drawn by an operating conditioner, and the supply fan
runs all day, every occupied day, all year while the compressor cools for only
part of that time. Over a year in a typical multistorey building, total fan
energy can approach the energy used to heat and cool the air.

### The fan laws make the argument

For a given fan and system:

- volume flow varies directly with speed
- pressure varies with the square of the speed
- power varies with the cube of the speed

So reducing flow to 70% by slowing the fan gives power of 0.70³ = 0.343 — a
theoretical 66% saving. Real systems do not achieve the cube law, because the
duct static pressure must be held up for the terminals to work and because motor
and drive efficiency falls at low speed. The practical figure quoted for
variable-speed VAV is a power reduction of up to about 55% where the year-round
average load is 70% of design maximum, which is not an unrealistic average. That
translates to something approaching 25% off total operating power for buildings
where VAV is appropriate.

The design consequence is the important part: **a VAV plant must be designed
around the low-load condition**, with air volume rising to meet higher loads,
not designed at maximum load and throttled afterwards.

## How the system works

The supply air is delivered at a constant, cool temperature — typically 12–14°C.
A terminal unit, or VAV box, in each zone carries a damper, a controller and a
thermostat. As the zone cools towards set point the box throttles its damper
down, sometimes as low as 20% of its maximum volume.

As terminals close, static pressure in the duct rises. A static pressure sensor
in the duct picks this up and drives the fan modulation device — inlet vanes,
speed drive or dampers — to reduce airflow and power. That closed loop is the
heart of every VAV system.

There are two broad categories. Bypass systems dump surplus air back to the
return instead of reducing fan output; reduced-airflow systems genuinely cut the
air moved, and only these save fan energy. Either may be fed by a single or a
dual duct, with a constant or variable primary side.

## Terminal units

**Pressure-independent** boxes contain a volume regulator that holds the airflow
between its set maximum and minimum regardless of inlet static pressure, as long
as that pressure is within the box's design range. These are the common type.

**Pressure-dependent** boxes have no volume regulator, so whatever airflow the
inlet pressure produces at the current damper position is what the zone gets.
They are cheaper, and defensible only where loads are stable and the duct system
is low-pressure and low-velocity.

Boxes also differ in configuration:

| Type | How primary air is handled | Fan operation | Why choose it |
|---|---|---|---|
| Single duct, with or without reheat | Damper throttles primary air straight into the distribution duct | No fan | Simplest and cheapest; standard interior-zone box |
| Fan-assisted parallel, with or without reheat | Primary air flows directly to the duct; a fan draws ceiling air alongside it at low primary volume | Intermittent | Restores air movement at low load without running a fan all day |
| Fan-assisted series, with or without reheat | Primary air enters the mixing plenum, blends with ceiling air, then passes through the fan into the duct | Continuous while conditioning is required | Constant discharge volume and constant room air movement |

Both fan-assisted types include a primary air valve and a recirculation fan, and
both draw their secondary air from the ceiling space. That second point is
useful: the ceiling plenum is full of waste heat from lights and from the floor
below, and a fan-assisted terminal can use that heat instead of energising a
reheat coil, which cuts heating running costs substantially.

Fan-assisted terminals are chosen where primary-only VAV cannot meet the
conditions — chiefly where air movement must be maintained during light cooling
or reheat periods, and where plenum heat can be harvested.

## The Coanda effect and why VAV failed in 1931

Variable air volume was tried in the earliest days of air-conditioning and
abandoned. Reducing the volume through an ordinary diffuser reduces the
discharge velocity, and below a certain velocity the cold supply air stops
mixing with the room air and falls straight down — the fault known as dumping.
Occupants underneath sit in a cold draught while the far corner of the room gets
nothing. Throttling at the outlet was tried instead and produced whistling as
static pressure built up behind the register.

The solution came from aviation. Henri Coandă flew a jet-propelled aeroplane in
1910 and noticed the exhaust flames clinging to the plywood fuselage instead of
streaming clear; he survived the resulting crash and published the explanation
in 1932. A fluid moving faster than the fluid around it is held against an
adjacent solid surface by the higher static pressure of the surrounding fluid.
You can show it with a tilted plate and a stream of water, which follows the
underside of the plate until the plate is nearly horizontal.

Applied to a ceiling, a slot diffuser discharging air along the ceiling keeps
the airstream attached even as the volume and velocity fall, so the air travels
across the room, entrains room air along the way and mixes before it descends.
Entrainment depends on discharge velocity and on the length of the perimeter the
air discharges through, which is why a long slot diffuser mixes far better than
a round diffuser of the same area.

Slot diffusers plus fan volume control are what made VAV practical.

## Fan modulation techniques

| Method | How it works | Advantages | Watch out for |
|---|---|---|---|
| Riding the fan curve | The fan simply moves back along its constant-speed curve as duct static rises | Cheapest, no extra hardware, efficient with backward-curved centrifugal fans | Rising pressure is felt throughout the ductwork, over-pressurising terminals and causing excess flow and noise |
| Discharge dampers | A damper after the fan absorbs the excess pressure | Prevents terminal over-pressurisation; simple | Must be installed at least three fan wheel diameters downstream, or the airflow is disturbed |
| Inlet guide vanes | Vanes swirl the air entering the impeller, reducing both flow and power | Greater power saving and a broader modulating range than dampers | Fan surge if vanes and fan are not carefully matched; the vane linkages need maintenance |
| Adjustable speed (VSD) | A variable-speed drive changes motor speed | Best theoretical and practical savings, follows the cube law most closely | Higher capital cost; drive harmonics and motor insulation need consideration |
| Variable-pitch axial | Blade pitch angle is altered while running | Wide range, used on large axial installations | Complex, found only on large systems; most axial fans use speed control instead |

Inlet vanes, variable-speed drives and variable-pitch fans give broadly similar
performance; the choice is usually made on capital cost and maintenance.

Where a return air fan is fitted, it must be controlled in parallel with the
supply fan. If it is not, supply fan inlet pressure changes as the system
modulates, and the building either over-supplies or goes negative and pulls
unconditioned air in around doors.

## Design considerations

1. Design for the low-load condition first; higher loads are met by increasing
   air volume.
2. The system is most efficient with an independent perimeter control system,
   and using recirculated air where wall loads are high.
3. Economy cycle applies readily and efficiently, but at low load the outside
   air fraction must be increased so the full fresh air requirement is still
   met.
4. Humidity control can be a problem at low load, because a throttled airflow
   spends longer in contact with the coil and the coil may be modulated warm.
5. Return air fans are advisable where return duct losses are high, controlled
   in parallel with the supply fan.
6. Maximum savings come from variable-speed supply fans, at higher initial cost.

## Advantages and disadvantages

| Advantages | Disadvantages |
|---|---|
| Lower operating cost and power bills | Difficult to guarantee minimum ventilation air to every zone at low load |
| Little or no equipment in occupied zones | Reasonably high initial cost |
| Unoccupied floors can be turned down or off, saving power | Changeover between cooling and heating, and morning warm-up, can cause control problems, since volume must rise again when more heating is needed |
| No changeover problems between cooling and heating in normal operation | Air volumes are difficult to balance |
| Independent control of each floor or zone | Room air movement can fall below comfortable levels at very low load |
| Refrigeration, fans and coils can be sized on block load rather than the sum of all zone peaks | Humidity control is weaker at low load |

VAV can be applied to any ducted system, from the largest multistorey building
down to packaged units.

>! At low load a VAV box may sit at 20% of design flow. If minimum outside air
>! is set as a fixed percentage of supply air, the outside air delivered to that
>! zone falls with it and can drop below the rate required by AS 1668.2. Poor
>! indoor air quality is the result, and it is invisible without measurement.
>! Minimum box settings and outside air control must be set and verified at
>! commissioning, not assumed.

## On the job

- The complaint "the office is stuffy but the temperature is fine" on a VAV
  floor almost always means the boxes are at minimum and ventilation has gone
  with them.
- Dumping and cold-draught complaints under a diffuser point to a diffuser
  selection problem at low volume, not a plant fault.
- Check the duct static pressure sensor location and set point before touching
  the fan. A set point higher than necessary throws away the whole saving.
- Verify the return fan tracks the supply fan; door and lift-lobby problems are
  usually pressurisation problems.
- Record maximum and minimum box settings during commissioning; nobody can
  troubleshoot the system later without them.
`,
        quiz: [
          {
            q: "A VAV supply fan is slowed to deliver 70% of design airflow. What does the fan law predict for its power, and why is the real saving smaller?",
            options: [
              "70% of design power; losses in the ductwork account for the difference",
              "About 34% of design power; real systems must maintain duct static pressure and lose drive and motor efficiency at low speed, so the practical saving is nearer 55%",
              "49% of design power; the pressure law governs power",
              "About 34%, and real systems normally beat this figure",
            ],
            answer: 1,
            explain: "Power varies as the cube of speed, so 0.70³ = 0.343, a theoretical 66% saving. Practical VAV plants must hold a minimum duct static so the terminals can regulate, and drive efficiency falls, so the quoted achievable figure is around 55% power reduction at a 70% average load.",
          },
          {
            q: "What is the essential difference between a pressure-independent and a pressure-dependent VAV terminal?",
            options: [
              "Pressure-independent boxes contain a fan",
              "Pressure-independent boxes contain a volume regulator that holds the set airflow despite changes in inlet static pressure",
              "Pressure-dependent boxes cannot be fitted with reheat",
              "Pressure-independent boxes are only used on dual-duct systems",
            ],
            answer: 1,
            explain: "The volume regulator is the whole distinction. Without it, whatever flow the current inlet pressure and damper position produce is what the zone receives, so airflow wanders every time another box moves. Pressure-dependent boxes are only acceptable on stable, low-pressure systems.",
          },
          {
            q: "Occupants under a ceiling diffuser complain of a cold draught only in mild weather, when the VAV boxes are near minimum. What is happening?",
            options: [
              "The supply air temperature has been reset too low",
              "The reduced discharge velocity has broken the Coanda attachment, so cold air dumps straight down instead of hugging the ceiling and mixing",
              "The box volume regulator has failed open",
              "The return air path is blocked",
            ],
            answer: 1,
            explain: "This is the classic dumping fault that stopped VAV working in the 1930s. Below a certain discharge velocity the airstream separates from the ceiling and falls. The cure is diffuser selection — a slot type with a long discharge perimeter maintains attachment and entrainment down to low volumes.",
          },
          {
            q: "In a series fan-assisted VAV terminal, what does the terminal fan do?",
            options: [
              "It runs only when primary airflow drops below a set point",
              "It runs continuously while conditioning is required, drawing primary and ceiling air through a mixing plenum and delivering a constant volume to the space",
              "It exhausts ceiling plenum air out of the building",
              "It boosts the primary air pressure back into the main duct",
            ],
            answer: 1,
            explain: "In a series terminal the fan is in series with the primary air path and runs continuously, so the room sees constant air movement while the primary air volume varies. A parallel terminal is the intermittent one: primary air bypasses the fan, which only starts at reduced primary flow.",
          },
        ],
      },

      /* ================================================================
         9 — VRV / VRF
         ================================================================ */
      {
        id: "vrv-vrf",
        title: "Variable-refrigerant-volume and variable-refrigerant-flow systems",
        minutes: 14,
        simple: "This is a very big split system: one or more outdoor units feeding many indoor units through refrigerant pipe instead of ducts or water pipes. Each indoor unit has its own electronic valve, so it takes exactly the refrigerant it needs, and the compressor changes speed to match the total. It is the same trick as a modern car engine that only burns what the road demands.",
        refs: ref("variable-refrigerant-volume and variable-refrigerant-flow systems", "VRV/VRF operation, capacity control and oil management", "VRV/VRF installation and piping practice"),
        content: `
VRV and VRF are two manufacturers' names for essentially the same product:
variable refrigerant volume and variable refrigerant flow. They are direct
expansion systems used in medium and large commercial buildings as an
alternative to central plant, and they are the biggest change in commercial
air-conditioning practice in the last thirty years.

On the air side these systems are normally constant volume: each indoor fan-coil
runs at a set airspeed. Capacity is controlled on the refrigerant side, by
varying how much refrigerant flows to each indoor unit and how hard the
compressors work.

## What the system is made of

One or more outdoor units, sized to the building load and often multiplexed
together, connect to many indoor terminals. The indoor units are, in essence,
the same terminals used on ordinary split systems: round-flow ceiling cassettes,
flat cassettes, under-ceiling units, wall-hung units, floor consoles, and ducted
units concealed in ceiling spaces or bulkheads. A designer can pick a different
terminal type for every room in a building and run them all from one refrigerant
circuit.

The connections between them are only refrigerant pipe, control cabling and a
condensate drain. There is no chilled water, no pumps, no cooling tower, no air
handling unit and no supply ductwork of any size. Manufacturers therefore claim
savings both in energy and in the building space that would otherwise be
committed to plant rooms and duct risers — space a developer can lease instead.

!SIM[Watch head pressure climb as a condenser fouls](fault=dirtyCondenser)

## How capacity control works

Follow a zone whose load falls:

1. A temperature sensor in the zone reports the reduced load to the controller.
2. The electronic expansion valve serving that indoor unit throttles down,
   reducing refrigerant flow through its coil.
3. Across the system, less refrigerant is being evaporated, so suction pressure
   starts to fall.
4. The inverter-driven compressor reduces speed to match, and where several
   compressors are fitted, one may be shut down entirely.

When load rises the sequence runs in reverse: valves open, the inverter speeds
up and additional compressors are brought on line.

A common outdoor unit arrangement pairs an inverter-driven scroll compressor,
operating over a range of about 30 to 116 Hz, with a fixed-speed scroll running
on the mains supply, in one refrigerant circuit. The combination gives very fine
capacity control — one manufacturer's design achieves 21 discrete steps — and
allows individual, near-linear control of the indoor units.

### Heat recovery

Three-pipe heat recovery models allow some indoor units to cool while others
heat, from the same outdoor unit and at the same time. Heat rejected by the
units in cooling is diverted to the units calling for heating, so the compressor
only has to make up the difference. In a building with a sunny facade and a
shaded facade, or a server room next to an office, the compressor energy saved
is considerable — this is the single biggest efficiency argument for VRF.

## Inside the outdoor unit

A VRF outdoor unit contains a lot more than a compressor and a coil, and a
technician needs to recognise what each item is doing:

| Component | Function |
|---|---|
| Inverter and standard scroll compressors | Staged and modulated capacity control in one circuit |
| Four-way reversing valve | Changeover between cooling and heating operation |
| Electronic expansion valve, outdoor | Acts as the expansion device in heating, controlling superheat from suction pressure and pipe temperature |
| Oil separators on the discharge | Catch oil leaving the compressors and return it through capillary tubes |
| Liquid injection solenoids | Inject liquid to stop discharge temperature running away at high compression ratios |
| Pressure-equalising solenoid | Balances high and low side when off, so the compressor starts unloaded |
| Hot gas bypass solenoid | Opens on low-pressure safety control to keep suction pressure up |
| Subcooling heat exchange pipe | Subcools the liquid line so flash gas does not cause refrigerant to distribute unevenly between indoor units |
| High and low pressure sensors and switches | Sensors report operating state for control; switches provide protection |
| Check valve | Stops liquid refrigerant collecting in the idle fixed-speed compressor |
| Accumulator | Protects the compressors from liquid returning up the suction line |

## Oil return: the thing that kills VRF systems

VRF pipe runs are long — often well over a hundred metres of small-bore
tubing — and every metre of that pipe is somewhere oil can be left behind. Oil
that does not come back is oil the compressor does not have. Manufacturers deal
with it in layers:

- Oil separators on the discharge return most of the oil before it leaves the
  outdoor unit.
- Minimum refrigerant velocities are built into the pipe sizing tables, which is
  why you must not substitute a larger pipe size to make a joint easier.
- An oil flush cycle runs periodically. After a set number of compressor hours,
  the electronic expansion valves drive fully open and the compressors go to
  full speed for a few minutes, sweeping oil out of the coils and pipework back
  to the outdoor unit.
- Oil level equalisation lines connect multiplexed outdoor units so one
  compressor cannot end up starved while another holds a surplus.

## Installation practice

Manufacturers' instructions on VRF are not advisory. Follow them exactly:

- Use the manufacturer's branch joints and headers. The internal geometry of a
  refnet joint splits the two-phase flow correctly; a fabricated tee will not.
- Observe the orientation rules for joints, and support pipework properly.
- Insulate both liquid and suction lines over their full length, including the
  joints.
- Size pipe from the tables using actual equivalent lengths, and record them:
  additional charge is calculated from liquid line length.
- Braze under a flowing nitrogen purge, pressure test with dry nitrogen, then
  evacuate deeply and verify with a decay test before charging.
- Set up condensate drainage for every indoor unit, including the trap depth the
  fan pressure requires, and test it with water at commissioning.

!FIG[vacuum-decay]

Control integration is a normal part of the job: these systems are designed so
that many units can report to a common controller or a building management
system, which is often how faults are first noticed.

>! A VRF system may hold tens of kilograms of refrigerant in one circuit, and
>! that circuit runs directly into occupied rooms. A leak from an indoor unit
>! releases refrigerant into the space, and AS/NZS 5149 sets charge limits based
>! on the volume of the smallest room served. Small rooms, hotel bedrooms and
>! basement areas are where the calculation bites. Refrigerant is heavier than
>! air, displaces oxygen at floor level, and A2L refrigerants add a flammability
>! limit as well. Work must be done under an ARCtick licence, leak testing is
>! part of commissioning, and recovered refrigerant must be reclaimed, never
>! vented.

## Where VRF fits

| | VRF/VRV | Central chilled water | Ducted split |
|---|---|---|---|
| Distribution medium | Refrigerant | Water plus air | Air |
| Zoning | Per indoor unit, full modulation | Per terminal or VAV box | Damper zones only |
| Simultaneous heat and cool | Yes, with heat recovery models | Yes, with four-pipe | No |
| Plant space needed | Minimal, outdoor units only | Plant room, risers, cooling tower | Roof space or a plant deck |
| Ventilation air | Not provided — needs a separate outdoor air system | Built into the air handling plant | Can be built into the return |
| Refrigerant in occupied space | Yes, so charge limits apply | No, water only | Only at the indoor coil |
| Typical application | Medium to large offices, hotels, mixed-use fitouts | Large buildings, campuses, hospitals | Houses, small suites |

The last two rows are where designers get caught. VRF delivers no ventilation on
its own, so a dedicated outdoor air system is still needed, and the refrigerant
charge in an occupied space has to be justified against the standard. There are
many variants that address these points — water-cooled condensing units, ice
storage arrangements, and outdoor air treatment units that temper the ventilation
air to room temperature before it enters the space.

## What to remember

- Constant air volume at the terminal, variable refrigerant flow to it.
- Electronic expansion valves at each indoor unit plus inverter compressors give
  fine, near-linear capacity control.
- Heat recovery models move heat between zones and save the most energy.
- Long, small-bore pipe makes oil return the dominant design and service issue.
- Pipe sizing, branch fittings, nitrogen purging, evacuation and charge
  calculation must follow the manufacturer exactly.
- Ventilation and refrigerant charge limits are the two things VRF does not
  solve for you.
`,
        quiz: [
          {
            q: "In a VRF system, how is capacity matched to a falling load in one zone?",
            options: [
              "The indoor fan slows down and the compressor is unaffected",
              "The electronic expansion valve for that indoor unit throttles refrigerant flow, and the inverter compressor reduces speed as total demand falls",
              "A damper closes in the refrigerant line to that unit",
              "The outdoor fan speed is reduced to lower condensing pressure",
            ],
            answer: 1,
            explain: "Control is on the refrigerant side: each indoor unit's EEV meters exactly what its own coil needs, and the inverter compressor changes speed to match the sum of all the units. Air volume at the terminal stays essentially constant, which is what distinguishes VRF from VAV.",
          },
          {
            q: "Why do VRF systems run a periodic oil flush cycle?",
            options: [
              "To purge non-condensable gases from the receiver",
              "To drive the EEVs fully open and the compressors to full speed for a few minutes, sweeping oil that has settled in long small-bore pipe runs back to the compressors",
              "To defrost all indoor coils simultaneously",
              "To equalise refrigerant charge between indoor units",
            ],
            answer: 1,
            explain: "Long runs of small pipe at part load can leave oil stranded in coils and horizontal runs. Periodically forcing full flow and full velocity sweeps it back. It is also why substituting a larger pipe than the table specifies is dangerous: the velocity needed to carry oil is lost.",
          },
          {
            q: "A designer proposes VRF for a hotel and lists 'no ventilation ductwork required' as a saving. What is wrong with that?",
            options: [
              "Nothing — VRF indoor units draw their own outside air",
              "VRF conditions recirculated room air only, so a separate outdoor air system is still required to meet ventilation requirements",
              "VRF cannot be used in hotels",
              "Ventilation is only required in commercial kitchens",
            ],
            answer: 1,
            explain: "A VRF indoor unit is a recirculating fan-coil with a DX coil in it. It heats and cools, and it dehumidifies, but it introduces no outside air. Ventilation to AS 1668.2 still has to be provided, commonly by a dedicated outdoor air system, and leaving it out of the budget is a common and expensive mistake.",
          },
          {
            q: "Which factor most directly limits how much refrigerant a VRF circuit may hold when it serves small rooms?",
            options: [
              "The rating of the outdoor unit compressor",
              "The volume of the smallest room served, because a leak of the full charge into that space must not exceed the practical limit set in AS/NZS 5149",
              "The maximum equivalent pipe length in the manufacturer's table",
              "The number of indoor units on the circuit",
            ],
            answer: 1,
            explain: "The charge limit calculation compares circuit charge against the volume of the smallest occupied space it can leak into. Hotel bedrooms and small offices are the tight cases. Pipe length and unit count affect the required charge, but the room volume sets the ceiling the design must not cross.",
          },
        ],
      },

    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
