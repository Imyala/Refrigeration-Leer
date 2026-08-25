/* =========================================================================
   Course content, module R1.3 — Condensers and cooling towers.
   Source: Australian Refrigeration and Air-conditioning, Volume 1 (Graham
   Boyle, pub. AIRAH), Chapter 3 — Condensers.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BOOK = "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — ";
  const REFS = [BOOK + "Chapter 3, Condensers"];
  function ref() {
    return Array.prototype.slice.call(arguments).map(function (t) { return BOOK + t; });
  }

  const MODULES = [
  {
    id: "v1-condensers",
    stream: "v1",
    title: "R1.3 · Condensers and cooling towers",
    blurb: "How a system throws away the heat it collected: air-cooled, water-cooled and evaporative condensers, cooling towers, water treatment, head-pressure control and heat-rejection sums.",
    lessons: [

      /* ================================================================
         1 — What the condenser does
         ================================================================ */
      {
        id: "condenser-job",
        title: "What the condenser does and the three stages of heat rejection",
        minutes: 12,
        simple: "A fridge does not make cold, it moves heat from one place to another — and the condenser is the place where that heat finally gets dumped outside. Think of carrying buckets of hot water out of a house: the evaporator fills the bucket, the compressor carries it, and the condenser tips it out. If you cannot tip the bucket out fast enough, everything upstream backs up and the whole system struggles.",
        refs: ref("Chapter 3, introduction and the function of the condenser", "Chapter 3, the condensing temperature"),
        content: `
Every kilojoule the evaporator absorbs has to leave the system somewhere, and
the condenser is the only place it can go. Hot, high-pressure vapour arrives
from the compressor discharge, gives up its heat to air or water, and leaves the
bottom of the condenser as liquid ready to be metered back into the evaporator.
Get the condenser wrong and nothing else in the plant can be right — head
pressure climbs, capacity falls, current draw rises and the compressor
eventually pays for it.

!FIG[heat-flow]

## Why the condenser is bigger than the evaporator

A beginner's instinct is that the two heat exchangers should match. They cannot.
The condenser has to reject everything the evaporator collected **plus** the
energy the compressor put in as it squeezed the vapour. Motor windings, friction
and the work of compression all end up in the discharge gas.

That gives the single most useful equation in this chapter:

**Heat rejected at the condenser = refrigeration effect at the evaporator +
power absorbed by the compressor**

Written as symbols, Q(cond) = Q(evap) + W(comp), with everything in kW.

The ratio between the two is called the **heat-rejection factor**. For a typical
air-conditioning plant it lands around 1.2 to 1.3; for a low-temperature freezer
pack, where the compressor is working across a much bigger pressure difference
for each kilogram of refrigerant, it can reach 1.4 or more. That is why a
freezer condenser looks enormous next to its evaporator.

### Worked example — sizing the heat load

A coolroom plant has a design refrigeration duty of 12 kW. The compressor
absorbs 4 kW of electrical power at design conditions.

1. Q(cond) = Q(evap) + W(comp)
2. Q(cond) = 12 + 4 = **16 kW**
3. Heat-rejection factor = 16 ÷ 12 = **1.33**

So the condenser must be selected for 16 kW of rejection, not 12 kW. Choosing a
12 kW condenser because the room load is 12 kW is one of the classic apprentice
mistakes, and the plant will run permanently at high head pressure.

## Two things a condenser must have

The chapter makes a point that is easy to skate past. A condenser needs both:

- **Enough internal volume** to hold the vapour being forced in while
  condensation is taking place. Vapour occupies a lot of space; the liquid it
  becomes occupies very little.
- **Enough heat-dissipating surface** to move the heat out to the cooling medium
  fast enough. Surface area is what sets the *rate*.

Miss either one and the pressure inside simply rises until the temperature
difference is big enough to force the heat out — which is exactly what high head
pressure is.

## The three stages of heat rejection

Refrigerant does not arrive at the condenser inlet ready to condense. It arrives
superheated, often 40 to 70 K above its saturation temperature. So the condenser
does three jobs in sequence along its length.

| Stage | What is happening | Heat type | Roughly where |
|---|---|---|---|
| Desuperheating | Discharge vapour is cooled down to its saturation temperature | Sensible | The first tubes, at the top / inlet end |
| Condensing | Vapour changes to liquid at constant temperature and pressure | Latent | About 80% of the coil |
| Subcooling | Liquid is cooled further below saturation temperature | Sensible | The last tubes, at the bottom / outlet |

Most of the work is latent. Changing state releases far more energy per kilogram
than cooling the vapour does, which is why the middle section carries the bulk of
the duty even though it sits at one steady temperature.

!FIG[ph-legs]

### What that feels like with your hand

This is a genuinely useful field check. On a healthy air-cooled condenser:

- The discharge line and the top tubes feel **hot** — commonly 20 to 40 K above
  ambient air temperature.
- About 80% of the coil below that sits at one fairly constant surface
  temperature, typically 5 to 15 K above ambient depending on whether the plant
  is an air-conditioner, a cabinet or a freezer.
- The bottom tubes and liquid line are cooler again — that is your subcooling.

A coil that is hot all the way to the bottom is not subcooling. A coil that goes
cold a third of the way down is probably flooded with liquid, or the plant is
overcharged, or non-condensables are blanketing part of the surface.

## Subcooling is not a bonus, it is insurance

Liquid leaving at saturation temperature will flash to vapour at the smallest
pressure drop — a vertical lift, a long liquid line, a hot roof space, a partly
blocked drier. Vapour in the liquid line ruins the metering device's capacity.
Every kelvin of subcooling buys margin, and also adds directly to the
refrigeration effect: roughly 1.0 to 1.3% more capacity per kelvin, for free,
because the liquid arrives at the expansion valve carrying less heat.

!FIG[subcool-measure]

Typical field values are 4 to 8 K of subcooling on a system with a receiver, and
often more on a receiverless split system. Measure it the same way every time:
read the discharge pressure, convert to saturation temperature, and subtract the
actual liquid line temperature.

## What to remember

- The condenser must reject the evaporator load plus the compressor work — it is
  always the larger heat exchanger.
- Q(cond) = Q(evap) + W(comp); the heat-rejection factor runs about 1.2 to 1.3
  for air-conditioning and higher for low-temperature work.
- Three stages along the coil: desuperheat (sensible), condense (latent, about
  80% of the surface), subcool (sensible).
- Hot top, warm and steady middle, cooler bottom is the healthy hand-feel
  pattern.
- Subcooling protects the liquid line from flash gas and adds capacity at no
  running cost.
`,
        quiz: [
          {
            q: "A plant has an evaporator duty of 30 kW and the compressor absorbs 9 kW. What must the condenser be selected to reject?",
            options: ["21 kW", "30 kW", "39 kW", "270 kW"],
            answer: 2,
            explain: "Q(cond) = Q(evap) + W(comp) = 30 + 9 = 39 kW. Selecting for 30 kW ignores the compressor work, which all appears as heat in the discharge gas; the condenser would be undersized and head pressure would run high all summer.",
          },
          {
            q: "Which stage of condenser heat rejection accounts for the largest share of the heat moved?",
            options: ["Desuperheating the discharge vapour", "Condensing the vapour to liquid", "Subcooling the liquid", "Cooling the compressor oil"],
            answer: 1,
            explain: "Latent heat of condensation dominates — around 80% of the coil sits at the constant condensing temperature doing this work. Desuperheating looks dramatic because the gas is so hot, but sensible heat per kilogram is small compared with a change of state.",
          },
          {
            q: "You feel an air-cooled condenser and the tubes are cool only a quarter of the way down from the top, then cold below that. What does this most likely indicate?",
            options: ["Normal operation with good subcooling", "The coil is partly flooded with liquid — for example overcharge or restricted liquid flow", "The fan is running too fast", "The evaporator is starved"],
            answer: 1,
            explain: "A healthy coil holds one steady condensing temperature over about 80% of its surface. If it goes cold high up, liquid is backing up and occupying condensing surface. Excess subcooling with high head pressure points to overcharge or a liquid-side restriction, not to good performance.",
          },
          {
            q: "Why does the condenser need generous internal volume as well as surface area?",
            options: ["To store oil returning from the evaporator", "To hold the vapour being forced in while condensation proceeds", "To allow refrigerant to expand and cool", "To reduce the noise of the compressor"],
            answer: 1,
            explain: "Vapour occupies far more space than the liquid it becomes, and the compressor keeps pushing more in while condensing is under way. Surface area sets the rate of heat transfer; volume gives the vapour somewhere to be while that happens.",
          },
        ],
      },

      /* ================================================================
         2 — Condensing temperature, TD and sizing
         ================================================================ */
      {
        id: "condensing-temperature-td",
        title: "Condensing temperature, TD and condenser sizing",
        minutes: 13,
        simple: "Heat only moves from hot to cold, so a condenser has to run hotter than the air or water cooling it. The size of that temperature gap is called TD, and it behaves like the slope of a hill: a steeper slope pushes more heat down it. A small condenser has to run a steep slope, which means high pressure and a hard-working compressor; a big condenser does the same job on a gentle slope.",
        refs: ref("Chapter 3, the condensing temperature and typical condensing temperature above ambient"),
        content: `
Ask an experienced technician what head pressure "should" be and you will not get
a number — you will get a question back: what is the ambient, and what sort of
plant is it? Condensing pressure is not a fixed value. It is whatever pressure
corresponds to the temperature the refrigerant must reach in order to push its
heat into the surrounding air or water.

## TD: the temperature difference that does the work

**TD** is the difference between the saturated condensing temperature (read from
the discharge gauge through the PT relationship) and the temperature of the
cooling medium entering the condenser.

TD = saturated condensing temperature − entering air (or water) temperature

Everything about condenser performance follows from this. Heat transfer through
the coil is roughly proportional to TD:

Q = U × A × TD

where A is surface area in square metres and U is the overall heat transfer
coefficient for that construction in kW per square metre per kelvin. A designer
picks A. A technician cannot change A — so if Q must go up or U falls away
through fouling, the only variable left is TD, and TD rises by raising the
condensing temperature. That is why every condenser problem shows up as high head
pressure.

## Typical condensing temperature above ambient

The design TD is not the same for every plant. Lower-temperature systems run
relatively larger condensers, because their heat-rejection factor is higher and
because high head pressure hurts them more. The chapter gives these guides for
air-cooled plant, based on the suction (evaporating) temperature:

| Application | Typical evaporating temperature | Condensing temperature above ambient |
|---|---|---|
| Freezers | −40 °C to −25 °C | ambient + 5 to 8 K |
| Frozen-food cabinets | −20 °C to −10 °C | ambient + 8 to 12 K |
| Coolrooms and chilled cabinets | −10 °C to 0 °C | ambient + 12 to 15 K |
| Air-conditioning | 0 °C to +15 °C | ambient + 15 to 17 K |

### Worked example — turning TD into a head pressure

An air-conditioner is running on a 38 °C day. From the table, expect a TD of
about 15 to 17 K.

1. Condensing temperature = 38 + 16 = **54 °C**
2. Look 54 °C up on the PT relationship for the refrigerant. On R22 that is
   about **2050 kPa gauge**.

Now the same day, a freezer running R507 with a suction temperature of −35 °C
would be expected to condense near 46 °C, which on R507 is around 2063 kPa
gauge. Notice the trap: two very different plants, two very different condensing
temperatures, and almost the same gauge reading, because the refrigerants have
different pressure-temperature curves. Never diagnose from the pressure alone —
always convert to a temperature first.

!FIG[gauge-pt-ring]

## Reading it the other way: is this condenser dirty?

TD is the field diagnostic, and it does not need any manufacturer's data.

1. Measure the air temperature entering the condenser (in the shade of the coil,
   not in the discharge stream).
2. Read discharge pressure, convert to saturated condensing temperature.
3. Subtract.

If a coolroom condenser designed for a 14 K TD is showing 24 K, roughly 40% of
its effective performance has gone missing. Causes, in order of how often you
will find them: a dirty coil, a failed or reversed fan, recirculating discharge
air, non-condensables in the system, or an overcharge flooding the bottom tubes.

!SIM[Watch TD and head pressure climb on a dirty condenser](fault=dirtyCondenser)

## Sizing and selecting a condenser

Manufacturers publish air-cooled condenser capacity as kilowatts of heat
rejection at a stated TD — commonly 15 K — and at a stated altitude and air
density. Selection is a three-step job.

### Worked example — selecting an air-cooled condenser

A packaged coolroom plant has an evaporator duty of 18 kW and a compressor
absorbing 6.5 kW. Design ambient for the site is 38 °C and we want a condensing
temperature no higher than 52 °C.

1. Heat rejection required: Q(cond) = 18 + 6.5 = **24.5 kW**
2. Available TD: 52 − 38 = **14 K**
3. A catalogue condenser is rated 27 kW at 15 K TD. Its capacity per kelvin is
   27 ÷ 15 = **1.8 kW/K**.
4. At our 14 K TD it will reject 1.8 × 14 = **25.2 kW** — just above the 24.5 kW
   required, so it suits.

If instead we had chosen a coil rated 24 kW at 15 K TD (1.6 kW/K), at 14 K it
would only manage 22.4 kW. The plant would find its own balance point by letting
the condensing temperature drift up to about 38 + (24.5 ÷ 1.6) = 53.3 °C and
beyond, and every degree costs capacity and power.

## Derating: the fine print that catches people out

Catalogue figures assume standard air. Real installations often are not.

- **Altitude.** Thinner air carries less heat per cubic metre. Above roughly
  600 m, capacity must be derated; check the manufacturer's factor.
- **High ambient.** Australian design ambients of 40 to 45 °C are common inland.
  Selecting on a 35 °C ambient guarantees summer trouble.
- **Recirculation.** A coil that breathes its own discharge air is effectively
  operating at a much higher entering-air temperature than the weather station
  says.
- **Refrigerant.** Different refrigerants have different pressure-temperature
  curves and different capacities per unit of coil surface.

>! High head pressure is not just an efficiency problem. Every high-pressure
>! cut-out trip, every relief-valve lift and every burst discharge line begins
>! with a condenser that cannot reject its heat. Never defeat a high-pressure
>! switch to "get the plant running" — find the reason the pressure is high.

## On the job

- Always convert pressures to saturation temperatures before you judge them.
- Measure entering-air temperature at the coil face, not from the weather app.
- TD tells you condenser health without any manufacturer data.
- Select condensers for the heat rejection duty and the site's real design
  ambient, then derate for altitude and airflow restriction.
- Low-temperature plant is given a bigger condenser (smaller TD) on purpose.
`,
        quiz: [
          {
            q: "Entering air is 32 °C and the discharge pressure converts to a saturated condensing temperature of 54 °C on an air-conditioning plant. What is the TD, and what does it suggest?",
            options: ["22 K — normal for air-conditioning", "22 K — high; the condenser is not rejecting heat properly", "86 K — the sensor is faulty", "16 K — normal"],
            answer: 1,
            explain: "TD = 54 − 32 = 22 K. Air-conditioning plant is normally designed around 15 to 17 K, so 22 K says roughly a third of the condenser's effectiveness has been lost — dirt, airflow, non-condensables or overcharge. Simply noting that 54 °C sounds 'about right for summer' misses the fault.",
          },
          {
            q: "A condenser is rated 30 kW of heat rejection at 15 K TD. What will it reject at a 12 K TD, assuming the same airflow?",
            options: ["30 kW", "24 kW", "37.5 kW", "12 kW"],
            answer: 1,
            explain: "Capacity per kelvin is 30 ÷ 15 = 2 kW/K, so at 12 K it rejects 2 × 12 = 24 kW. Heat transfer follows Q = U × A × TD, so halving the driving temperature difference roughly halves the duty — the coil does not keep its catalogue rating at any TD you like.",
          },
          {
            q: "Why do two plants on a 38 °C day — an R22 air-conditioner and an R507 freezer — show very similar head pressures despite very different condensing temperatures?",
            options: ["Head pressure is a fixed value on hot days", "Different refrigerants have different pressure–temperature relationships", "The freezer condenser is dirty", "The gauges read differently on each refrigerant"],
            answer: 1,
            explain: "Each refrigerant has its own saturation curve, so the same gauge pressure means a different saturation temperature on each. The air-conditioner near 54 °C and the freezer near 46 °C can both land around 2050 to 2065 kPa gauge. Always convert pressure to temperature before judging.",
          },
          {
            q: "Which application is normally designed with the SMALLEST TD (largest condenser for its duty)?",
            options: ["Comfort air-conditioning", "Chilled-water plant", "A low-temperature freezer pack", "A domestic refrigerator"],
            answer: 2,
            explain: "Freezer plant runs about ambient + 5 to 8 K. Its heat-rejection factor is higher because the compressor works across a bigger pressure ratio, and its capacity suffers badly from raised head pressure, so the designer buys a relatively larger condenser to keep condensing temperature low.",
          },
        ],
      },

      /* ================================================================
         3 — Air-cooled condenser construction
         ================================================================ */
      {
        id: "air-cooled-construction",
        title: "Air-cooled (Type 1) condensers: construction and mounting",
        minutes: 11,
        simple: "The simplest way to get rid of heat is to blow air over hot pipes, and that is all an air-cooled condenser is. Small fridges just let the warm air drift up by itself, like the warmth rising off a radiator; anything bigger uses a fan. Where you put the thing matters as much as how big it is — a condenser breathing its own hot air is like trying to cool down by standing in front of a heater.",
        refs: ref("Chapter 3, air-cooled (Type 1) condensers", "Chapter 3, natural convection and forced-draught condensers"),
        content: `
Air-cooled condensers are by far the most common type you will meet. Air is free,
it never needs treating, it cannot freeze in the coil and it does not need a
licensed water connection. The price you pay is a higher condensing temperature,
because air is a poor heat transfer medium and is usually hotter than available
water.

Condensers are classified by their cooling medium into three types: air-cooled
(Type 1), water-cooled (Type 2) and evaporative (Type 3). This lesson covers the
first, and it splits again by how the air is moved: **natural convection** or
**forced draught**.

## Natural convection (static) condensers

Also called static condensers. Nothing moves the air except the buoyancy of the
air that the coil itself has warmed. That gives a very small air quantity per
square metre of surface, so the surface has to be large and the duty stays small.
You will find them on domestic refrigerators and freezers, and nowhere much else.

Two constructions dominate:

- **Finned-tube (wire-and-tube).** Steel tubing with wire rods welded across it,
  or plate strips punched with holes and bonded to the tubes. Typically mounted
  flat on the back of the cabinet, or tilted underneath it.
- **Plate surface.** Refrigerant tubing set into or bonded to a flat metal plate.
  It is the cheapest to make and the easiest to wipe clean, but it is bulky for
  its duty. Common on older refrigerators.

The design rule for static condensers is **wide fin spacing**. The air is barely
moving, so any resistance stops it altogether, and wide spacing also makes the
coil far less likely to clog with lint and kitchen grease.

### Skin (shell) condensers

A neat variation, used on chest freezers and some domestic refrigerators, runs
the condenser tubing against the inside of the outer cabinet shell — the whole
cabinet skin becomes the condenser — with the evaporator tubing on the outside of
the inner liner. It is cheap to build and it has a genuine bonus: the warm
cabinet skin stays above the dew point of room air, so the outside of the cabinet
never sweats.

The catches are real, though:

- Air can only wash the outside of the cabinet, so pushing the appliance hard up
  against a wall or into a cupboard recess raises head pressure sharply.
- A refrigerant leak buried inside the insulation is effectively unrepairable.
  The fix is a new cabinet, or fitting an external condenser and abandoning the
  buried one.

## Forced-draught condensers

Once a fan moves the air, the same coil can reject many times the heat, so the
whole coil gets smaller and closely finned. Forced-draught air-cooled condensers
divide by where they sit:

| Arrangement | Description | Where you see it |
|---|---|---|
| Chassis-mounted | Coil, fan, compressor and controls on one frame as a packaged condensing unit | Small commercial refrigeration, coolroom packs |
| Remote | Condenser mounted away from the compressor, connected by discharge and liquid lines | Split systems, plant with the compressor indoors, larger plant |

A **condensing unit** is simply the packaged version: hermetic or semi-hermetic
compressor, condenser coil, fan, and often an oil separator, liquid receiver and
the electrical controls, all on one chassis. It is a complete high side ready to
be piped to an evaporator.

**Remote condensers** exist because they let a plant room sit somewhere
convenient while the heat is rejected somewhere sensible. They use few
accessories and need little maintenance beyond cleaning.

## Where to put a remote condenser

This is where installations succeed or fail, and it is the part of the job a
technician actually controls.

**Indoors.** Only smaller condensers are mounted inside, because of the sheer air
quantity involved. If a condenser is in a plant room or any warm space, ducts
must bring outside air to it and take the hot discharge air back out. Recycling
plant-room air through the condenser is a guaranteed high-head-pressure call-back.

**Outdoors.** Ground, wall or roof mounting are all used, and roof is generally
best: unrestricted air movement, less dirt thrown up from the ground, and less
risk of physical damage.

Whichever location, the coil must be arranged so that the **prevailing wind helps
the fan rather than fights it**. A wind blowing into the discharge of a
horizontal-discharge condenser can stall the airflow completely. Where the
orientation cannot be changed, fit a deflector or a discharge stack to lift the
air clear of the wind.

**Vertical-discharge condensers** largely solve that problem: they blow upward,
they are far less sensitive to wind direction, and their low profile keeps them
out of sight from the street — which matters more than you would think when
councils and body corporates get involved.

> Clearance rule of thumb from the chapter: the free air space between a
> condenser and a wall — or the total area of the inlet openings in a unit's
> casing — must be **at least equal to the face area of the condenser coil**.
> Less than that and the coil is being throttled before the air even reaches it.

## Fin and tube design

Forced-draught coils use close fin spacing, typically **250 to 400 fins per
metre** (that is roughly 2.5 to 4 mm apart). Copper tube with aluminium fins is
the usual combination, mechanically expanded so the tube grips the fin collar.

Two design refinements are worth knowing because they appear in modern
selections:

- **More, smaller-diameter tubes** for a given coil face. More internal surface
  per unit of volume, better refrigerant-side heat transfer, less charge.
- **Inner-grooved (rifled) tube.** Fine helical grooves in the bore increase
  wetted surface and keep liquid and oil moving as a film rather than a slug,
  which raises the heat transfer rate noticeably at higher flow rates.

Coastal and marine sites need extra thought: aluminium fin on copper tube in salt
air suffers galvanic corrosion, so specify coated coils (epoxy or similar) or an
all-aluminium microchannel construction where the manufacturer offers it.

## What to remember

- Type 1 = air-cooled; natural convection for domestic-size loads, forced draught
  for everything else.
- Static condensers need wide fin spacing and clear space around them.
- Skin condensers stop cabinet sweating but punish poor ventilation and cannot be
  repaired if they leak.
- Chassis-mounted = condensing unit; remote = condenser away from the compressor.
- Roof mounting, wind-assisted orientation and vertical discharge all reduce
  trouble.
- Free air space around a coil must be at least equal to its face area.
`,
        quiz: [
          {
            q: "Why must the fins on a natural convection (static) condenser be widely spaced?",
            options: ["To reduce the cost of manufacture", "Because the air is barely moving and any resistance stops it altogether", "To allow the refrigerant to expand", "To increase the number of fins per metre"],
            answer: 1,
            explain: "Buoyancy provides only a very weak driving force, so close fins would choke the airflow and the surface area gained would be wasted. Wide spacing also makes the coil far less prone to clogging with lint and grease. Forced-draught coils can use 250 to 400 fins per metre precisely because a fan supplies the pressure to push air through.",
          },
          {
            q: "A chest freezer with its condenser tubing bonded inside the outer cabinet shell is pushed hard against a wall in a small pantry. What is the likely consequence?",
            options: ["Improved efficiency because heat is trapped", "The cabinet will sweat on the outside", "High head pressure, since air can no longer wash the cabinet skin", "The evaporator will freeze up"],
            answer: 2,
            explain: "The cabinet skin is the condenser, so restricting air over it directly restricts heat rejection and head pressure climbs. Sweating is what the warm skin actually prevents — the outer surface is deliberately kept above the dew point of room air.",
          },
          {
            q: "A remote condenser must be installed on a wall exposed to a strong prevailing wind that blows straight into its horizontal discharge. What is the appropriate response?",
            options: ["Ignore it — wind always helps a condenser", "Fit a deflector or discharge stack, or use a vertical-discharge unit so the wind assists rather than opposes the fan", "Fit a larger fan motor and increase the speed", "Reduce the fin spacing to catch more wind"],
            answer: 1,
            explain: "Wind blowing into the discharge can stall a propeller fan and stop airflow altogether. The fix is to redirect the air — a deflector, a discharge stack, or a vertical-discharge coil, which is much less sensitive to wind direction. Simply adding fan power fights the problem instead of removing it.",
          },
          {
            q: "What is the minimum free air space recommended between a condenser coil and an adjacent wall?",
            options: ["50 mm regardless of coil size", "At least equal in area to the face of the condenser", "Twice the depth of the coil", "Whatever the fan cowl diameter is"],
            answer: 1,
            explain: "The inlet opening must not be a smaller flow path than the coil face, or the air is throttled before it reaches the fins. Fixed clearances like 50 mm mean nothing on their own, because a large coil needs a proportionally large inlet area.",
          },
        ],
      },

      /* ================================================================
         4 — Air-cooled condenser performance and fouling
         ================================================================ */
      {
        id: "air-cooled-performance",
        title: "What makes an air-cooled condenser work — and what kills it",
        minutes: 13,
        simple: "Five things decide whether an air-cooled condenser does its job: how fast the air goes over it, how clean it is, how hot the incoming air is, whether there is air trapped inside the refrigerant circuit, and how well it was built. Four of those five are things a technician can fix on site — usually with a brush and a vacuum cleaner. A dirty condenser is the single most common cause of summer breakdowns.",
        refs: ref("Chapter 3, forced-draught condenser efficiency", "Chapter 3, air velocity, fouling, entering air temperature and non-condensables"),
        content: `
The chapter lists five factors that decide how well a forced-draught air-cooled
condenser performs. Learn them as a checklist, because between them they explain
almost every high-head-pressure call you will attend.

1. Air velocity over the coil surface
2. Dust and fluff accumulation
3. The temperature of the air entering the condenser
4. Air or other non-condensable gas inside the condenser
5. The operating heat transfer coefficient (the design itself)

## 1. Air velocity — and why fans usually pull, not push

Most air-cooled condensers are **induced draught**: the fan sits after the coil
and draws air through it. A minority are **forced draught**, with the fan
blowing onto the coil face. Induced draught wins for two reasons.

- Drawing air away from the far side creates a slight depression that pulls air
  evenly across the **whole** coil face.
- Propeller fans lose efficiency the moment they meet resistance. Blowing
  straight into a mass of fins bounces air back into the centre of the blade,
  where it is simply recirculated instead of moving on.

The practical result is that a blow-through propeller fan produces a very uneven
pattern: a strong ring of airflow matching the blade tips, and near-dead zones at
the centre and in the corners. You can read that pattern directly off a dirty
coil — fluff builds where the air is moving fastest, so the fluff pattern maps
the airflow.

Forced draught is not wrong; it is just harder to do well. With a properly
designed cowl and a better (and dearer) fan, it can match induced draught.
Manufacturers use it deliberately in two places:

- **Room air-conditioners**, where the fan sits between coil and wall and the hot
  air has to be thrown well clear so it is not drawn straight back in.
- **Commercial refrigeration cabinets** pushed close to a wall, where the airflow
  must be reversed to dump heat away from the machine compartment.

### Cowls matter

Fan position in the cowl ring changes the delivered air volume significantly, and
the greatest volume in all directions comes from blades centred in the ring. If a
cowl is fitted, it must stay fitted. Remove it and air simply takes the easy path
around the outside of the coil rather than through a deep, close-finned block
that resists it — the fan still sounds busy while the coil gets almost nothing.

### How fast should the air go?

Normal face velocities are **1.5 to 3.0 m/s**. Pushing beyond that gives
diminishing returns: the extra capacity is paid for in fan power and noise, and
the airflow over the tubes becomes turbulent enough to blanket much of the fin
area. The exception is automotive condensers, where road speed can drive well
over 25 m/s past the coil; those use streamlined, internally finned tube profiles
specifically to keep the flow attached and reduce turbulence.

## 2. Dirt — the number one service call

Dust and fluff on a condenser are as damaging as ice on an evaporator, and far
more common. A great many of the service calls on the first hot days of summer
could be cleared with nothing but a brush and a vacuum cleaner.

The knock-on damage list is long, and every item traces back to the high head
pressure and high discharge temperature that a blocked coil produces:

- Slipping and worn belts on open drives
- Blown head gaskets and broken compressor valves
- Oil breakdown, acid formation, moisture reaction and eventually motor burnout

Grease is the worst fouling agent, because it makes dust stick and then bakes on.
Fish-and-chip shops, commercial kitchens and takeaway extraction zones are the
classic problem sites, and their condensers need a cleaning schedule rather than
a yearly glance.

### Cleaning properly

1. Isolate and lock off the power. A thermostat or pressure switch can start a
   fan while your hand is in the cowl.
2. Brush or vacuum **so the dirt comes out**, not so it is driven deeper between
   the fins. Work with the fin direction.
3. Blow or wash from the discharge side back through the coil where access
   allows, so debris exits the way it came in.
4. Check the result with a light held on the far side of the coil — if you cannot
   see light through the fins, it is not clean.
5. Straighten bent fins with a fin comb; a flattened patch is a blocked patch.
6. Re-measure TD afterwards. That is your proof the clean actually worked.

>! Never work inside a fan cowl without isolating and locking off the supply, and
>! never rely on switching the plant off at the thermostat. Wear eye protection
>! and gloves for coil cleaning: fins cut deeply, and chemical coil cleaners are
>! typically strongly alkaline or acidic. Rinse thoroughly — residual cleaner
>! corrodes fins and destroys the coil far faster than the dirt did.

## 3. Entering air temperature

The temperature of the air entering the coil sets the condensing temperature,
and therefore the head pressure — this is just TD again, seen from the other end.
Two site problems dominate:

- **Recirculation.** Discharge air finding its way back to the inlet. Common in
  courtyards, between close-set units and under low awnings.
- **Neighbouring plant.** One unit blowing its hot discharge onto another's
  inlet. Rows of condensing units on a plant deck need to be arranged and spaced
  so this cannot happen.

Both raise the effective entering air temperature by several kelvin, and neither
shows up on a weather forecast. Measure at the coil face.

## 4. Air and non-condensables inside the system

Air, nitrogen and other non-condensable gases will not condense at condenser
conditions, so with fluorocarbon refrigerants they collect in the top of the
condenser. There they do two things at once:

- They occupy space that refrigerant vapour should be using, cutting the
  effective condensing surface.
- They add their own partial pressure on top of the refrigerant's saturation
  pressure.

The diagnostic signature is distinctive: head pressure that is high **relative to
the actual condensing temperature**. Convert the head pressure to a saturation
temperature and compare it with the temperature you measure on the condenser
tubes in the condensing section; if the gauge says a higher temperature than the
metal does, you have non-condensables. The cure is recovery, evacuation and
recharge, not purging to atmosphere.

Large plants may be fitted with automatic purgers that vent non-condensables
while trapping and returning the refrigerant.

**Ammonia plants are the exception to purge-point logic.** Ammonia vapour is
lighter than air, so with the compressor stopped, air settles to the *bottom* of
the condenser and ammonia sits on top. Large ammonia plants should therefore be
purged **while the compressor is running**, unless they are specifically fitted
with a bottom purge point designed for off-cycle purging.

!SIM[Non-condensables in the condenser](fault=nonCondensables)

## 5. The heat transfer coefficient

The U factor comes from the construction: tube material, wall thickness, fin
material and bond, tube diameter and internal surface treatment. It is fixed at
the factory, but it degrades in service through fouling on the air side, oil
logging and scale on the refrigerant side, and corrosion of the fin-to-tube bond.
That is why an old coil can be perfectly clean on the outside and still not make
its rated duty.

## On the job

- Induced draught pulls air evenly; a missing cowl lets air bypass the coil
  entirely.
- Keep face velocity in the 1.5 to 3.0 m/s band — more airflow is not free.
- Clean coils properly: pull the dirt out, check with a light, then re-measure TD.
- Grease-laden sites need scheduled condenser cleaning, not annual inspection.
- Gauge saturation temperature higher than measured coil temperature means
  non-condensables.
- Purge ammonia plants with the compressor running, unless a bottom purge is
  fitted.
`,
        quiz: [
          {
            q: "Why are most air-cooled condensers arranged as induced draught (fan after the coil) rather than forced draught?",
            options: ["Because the fan motor stays cooler in the discharge air", "Because drawing air through gives even flow across the whole coil face, while a propeller blowing into the fins loses efficiency and delivers an uneven pattern", "Because it is quieter at every airflow", "Because forced draught cannot be used with propeller fans"],
            answer: 1,
            explain: "The slight depression on the leaving side pulls air uniformly through all of the coil. A propeller blowing into a block of fins meets resistance, loses efficiency and produces a strong ring of flow with dead spots at the centre and corners. Forced draught is still used deliberately where the hot air must be thrown clear of a wall, but it needs a better fan and a good cowl.",
          },
          {
            q: "The head pressure on a fluorocarbon plant converts to a saturated condensing temperature of 55 °C, but the tubes in the condensing section measure 45 °C. What does this indicate?",
            options: ["A dirty condenser coil", "Non-condensable gas in the condenser", "Undercharge", "A faulty thermometer, since the two must always agree"],
            answer: 1,
            explain: "Non-condensables add their own partial pressure on top of the refrigerant's saturation pressure, so the gauge reads a higher saturation temperature than the metal actually is. A dirty coil raises both the pressure and the metal temperature together, so they would still agree. The cure is recovery, evacuation and recharge.",
          },
          {
            q: "Normal face velocity over a forced-draught condenser coil is about:",
            options: ["0.2 to 0.5 m/s", "1.5 to 3.0 m/s", "8 to 12 m/s", "over 25 m/s"],
            answer: 1,
            explain: "1.5 to 3.0 m/s is the practical band. Going higher buys some capacity but costs fan power and noise, and the flow turns turbulent enough to blanket fin area. Velocities over 25 m/s only occur on automotive condensers driven by road speed, and those use streamlined tube profiles to cope.",
          },
          {
            q: "Why should a large ammonia plant normally be purged of non-condensables with the compressor RUNNING?",
            options: ["Because the purge valve only opens under pressure", "Because when the compressor stops, air settles to the bottom of the condenser leaving ammonia vapour on top of the purge point", "Because ammonia is heavier than air", "Because running the compressor dissolves the air into the oil"],
            answer: 1,
            explain: "Ammonia vapour is lighter than air, so on the off cycle the air sinks and a top purge point would simply vent ammonia. Purging while running keeps the non-condensables where the purge point can reach them. Plants designed for off-cycle purging place the purge connection at the bottom instead.",
          },
        ],
      },

      /* ================================================================
         5 — Over-condensing and head-pressure control
         ================================================================ */
      {
        id: "head-pressure-control",
        title: "Over-condensing and head-pressure control",
        minutes: 11,
        simple: "You would think a cold winter day is a gift to a condenser, but a system can actually condense too well. The pressure difference across the expansion valve is what pushes liquid through it, like water pressure at a tap — if the pressure falls too far, not enough refrigerant gets through and the evaporator starves. So in cold weather we deliberately make the condenser worse at its job.",
        refs: ref("Chapter 3, over-condensing", "Chapter 3, water regulating valves and recirculating water systems"),
        content: `
Everything so far has been about head pressure being too high. Now the opposite
problem, and it catches people out because it does not feel like a fault: the
plant is quiet, the pressures are low, the power bill looks good — and the
refrigeration is terrible.

## What over-condensing actually does

When ambient falls, the condenser has far more surface than it needs. Condensing
temperature drops toward ambient, and several things go wrong at once.

- **Liquid accumulates in the condenser.** With little vapour to condense, liquid
  backs up and floods condensing surface. That refrigerant is now sitting in the
  condenser instead of being available to the rest of the system, so the receiver
  and the evaporator are starved.
- **The pressure difference across the metering device collapses.** A TXV or
  capillary is sized on a design pressure drop. Halve that and the valve cannot
  pass its rated mass flow no matter how far it opens, so the evaporator runs
  starved with high superheat and low suction pressure — a genuinely confusing
  fault, because it looks like undercharge.
- **The compressor is over-capacity for the conditions.** Low head pressure means
  high volumetric efficiency, so it pumps down quickly and short-cycles.
- **Oil return suffers.** Short cycling plus low mass flow means oil sits in the
  evaporator instead of returning.

!FIG[txv-balance]

Remote air-cooled condensers, water-cooled units and evaporative condensers are
all vulnerable, because they are all sized for a hot summer day and none of them
know it is now July.

## Controlling head pressure on air-cooled plant

| Method | How it works | Typical use |
|---|---|---|
| Fan cycling | A pressure switch stops one or more fans as head pressure falls | Multi-fan remote condensers |
| Fan speed control | A pressure-sensing controller varies the fan motor speed continuously | Almost all modern plant; also cuts noise and energy |
| Damper control | Motorised dampers throttle the airflow through the coil | Large or specialised installations |
| Condenser flooding (receiver pressure regulation) | A valve holds pressure by backing liquid up into the condenser, with a second valve feeding discharge gas to the receiver | Cold-climate installations, remote condensers |
| Hot gas bypass to the receiver | Discharge gas is admitted directly to the receiver to keep liquid pressure up | Where liquid line pressure must be maintained |

Fan cycling is the crude version: as the temperature or head pressure falls, fans
are switched off one at a time, effectively shrinking the condenser. Speed control
is the refined version and now the default — it holds a steady condensing pressure
instead of hunting between steps, and it saves fan energy the rest of the year.

Condenser flooding deserves a note because it surprises people the first time
they meet it. A three-way or two-valve arrangement deliberately restricts liquid
leaving the condenser, so liquid fills the coil, reduces the active condensing
surface and forces the pressure back up. The system needs extra charge to do this
— enough to flood a good share of the condenser volume — which is why you cannot
simply retrofit the valve and walk away.

## Controlling head pressure on water-cooled plant

### The water regulating valve

On smaller water-cooled units, a **water regulating valve** in the water inlet
line does the job. It is a pressure-actuated modulating valve: compressor
discharge pressure is fed to a bellows which works against a range spring.

- Rising condensing pressure collapses the bellows further, opening the valve and
  admitting more water.
- Falling condensing pressure lets the spring close the valve, reducing flow.

When the compressor stops, the valve closes and stops water flowing to waste on
the off cycle. On restart it stays shut until condenser pressure rises to the
opening point, which is around **50 kPa above the shut-off pressure**.

Setting it up has two constraints, and both matter:

1. The shut-off pressure must be **high enough that the valve cannot stay open on
   the off cycle**. Since the refrigerant in the condenser can never be colder
   than the ambient at the condenser, set shut-off at the saturation pressure
   corresponding to the highest summer ambient at that location.
2. The shut-off pressure must also be high enough that the **winter condensing
   pressure still gives the metering device the pressure differential it needs**.

An electrically operated solenoid, opening with the compressor contactor, is a
cheaper alternative — but it is on/off only, so it does not regulate head
pressure the way a pressure-actuated valve does.

### On cooling tower and evaporative condenser systems

Here the concern is the water temperature, not just the flow. Condenser water
should not be allowed to fall below about **20 °C**. Two controls are used:

- **Cycle the tower or condenser fans off** as the water temperature falls to
  around **25 °C**, letting natural draught do the remaining work; or use fan
  speed control to modulate.
- **Bypass water around the tower.** An automatic bypass valve returns water
  straight to the condenser or the basin without passing it through the airflow,
  so it is not cooled. On air-conditioning loads this typically operates when
  condenser water temperature falls below about **21 °C**.

>! Do not "fix" a low-head-pressure complaint by adding refrigerant. Extra charge
>! raises pressure while the weather is cold, then becomes a dangerous overcharge
>! on the first hot day — high discharge temperature, liquid floodback and a
>! high-pressure trip. Fit or repair proper head-pressure control instead.

## Recognising it in the field

The pattern to look for in cold weather:

- Low head pressure **and** low suction pressure together
- High evaporator superheat with a hunting or starved TXV
- Poor refrigeration despite the compressor running
- Frequent short cycling on the low-pressure control
- Sight glass showing flash bubbles even though the charge is correct

Check the condenser fans first. A fan that has been left off, a failed fan speed
controller or a pressure switch stuck open produces exactly this picture.

## What to remember

- Over-condensing starves the system by flooding the condenser and killing the
  pressure differential across the metering device.
- It looks like undercharge; do not chase it with refrigerant.
- Air-cooled: fan cycling, fan speed control, dampers, condenser flooding, hot
  gas to the receiver.
- Water-cooled: water regulating valve modulated by discharge pressure; opening
  pressure sits about 50 kPa above shut-off.
- Tower and evaporative systems: keep condenser water above about 20 °C by fan
  control near 25 °C or by bypassing water around the tower below about 21 °C.
`,
        quiz: [
          {
            q: "In cold weather a plant shows low head pressure, low suction pressure, high superheat and poor refrigeration. What is the most likely explanation?",
            options: ["Undercharge — add refrigerant", "Over-condensing, so the metering device has too little pressure differential to pass its rated flow", "A blocked evaporator air filter", "A faulty compressor discharge valve"],
            answer: 1,
            explain: "Low ambient makes the condenser oversized, condensing pressure falls, and the TXV or capillary cannot pass design mass flow with a reduced pressure drop across it. The symptoms mimic undercharge exactly, which is why adding refrigerant is such a common and damaging mistake — it becomes an overcharge on the next hot day.",
          },
          {
            q: "A water regulating valve is actuated by which signal?",
            options: ["Water outlet temperature", "Suction pressure", "Compressor discharge (condensing) pressure", "The compressor contactor coil"],
            answer: 2,
            explain: "Discharge pressure is fed to a bellows working against a range spring: rising pressure opens the valve for more water, falling pressure closes it. A solenoid wired to the contactor is the cheap alternative, but it is on/off and gives no head-pressure regulation at all.",
          },
          {
            q: "How should the shut-off pressure of a water regulating valve be selected?",
            options: ["As low as possible to save water", "At the saturation pressure for the maximum summer ambient at the condenser, so the valve cannot stay open on the off cycle", "At the design condensing pressure for the plant", "50 kPa below the high-pressure cut-out setting"],
            answer: 1,
            explain: "Refrigerant in the condenser can never be colder than the surrounding ambient, so a shut-off set below the summer ambient saturation pressure will let water run continuously while the plant is off. It must also stay high enough that winter condensing pressure still gives the metering device its required differential. The valve reopens about 50 kPa above shut-off.",
          },
          {
            q: "On a cooling tower system, what is the usual reason for cycling the tower fan off as water temperature falls to about 25 °C?",
            options: ["To reduce drift losses", "To prevent the condenser water falling below about 20 °C and causing over-condensing", "To reduce the bleed-off rate", "To allow the water treatment chemicals to mix"],
            answer: 1,
            explain: "Below roughly 20 °C the condensing pressure gets too low for reliable metering-device operation and liquid backs up in the condenser. Fan cycling — or better, fan speed control — and water bypass around the tower are the standard ways of holding it up. Drift and bleed are water-loss concerns, not head-pressure controls.",
          },
        ],
      },

      /* ================================================================
         6 — Water-cooled condensers
         ================================================================ */
      {
        id: "water-cooled-condensers",
        title: "Water-cooled (Type 2) condensers",
        minutes: 13,
        simple: "Water carries heat away from metal far better than air does — think how much faster you cool down in a pool than standing in a breeze. That lets a water-cooled condenser be small and run at a much lower pressure than an air-cooled one, which makes the compressor's life easier. The catch is that water is precious and it leaves scale behind, so it has to be recirculated through a cooling tower and looked after.",
        refs: ref("Chapter 3, water-cooled (Type 2) condensers", "Chapter 3, shell-and-coil, tube-within-a-tube and shell-and-tube condensers", "Chapter 3, common faults and testing"),
        content: `
Once a plant gets past a certain size, water-cooled condensing starts to look
very attractive. Water is usually cooler than summer air, so condensing
temperature and head pressure fall; lower head pressure means higher volumetric
efficiency, more capacity from the same compressor, and less power drawn.

The chapter puts the physical advantage bluntly: heat transfer from metal to a
liquid runs up to **50 times faster** than from metal to air. Put in numbers, the
same area of surface that could pass around 600 kJ per hour to moving air can
pass up to about 30 000 kJ per hour to moving water. That is why a water-cooled
chiller condenser is a barrel you could put your arms around, while its air-cooled
equivalent covers a roof.

Condensing temperatures on water-cooled plant can sit as much as **20 K below**
an equivalent air-cooled unit, which the chapter notes is worth at least a 20%
increase in cooling capacity.

## The water problem

The reason water-cooled plant is not universal is supply. A single
air-conditioning plant for a large office building could get through **160 000
litres of water per hour** in summer if the water ran to waste. No Australian
city could sustain that, and running water to waste is restricted by law in most
places.

So the rule in practice is: **water-cooled plant recirculates its water through a
cooling tower.** Only very small units — and then usually only where the water is
being used for something else afterwards — run to waste with a water regulating
valve.

Water-cooled condensers are built mostly from copper tubing, for corrosion
resistance and heat transfer, and larger units use integrally finned tube (fins
machined into the outside of the tube itself) to add refrigerant-side surface.

## The four constructions

| Type | Construction | Typical capacity | Cleaning |
|---|---|---|---|
| Shell-and-coil | Steel shell with a continuous copper coil inside; water in the coil, refrigerant in the shell | Small, generally not above about 35 kW refrigeration | Chemical only — the coil cannot be rodded |
| Tube-in-tube (double-tube) | One tube inside another; water inside, refrigerant in the annulus, usually counterflow | Small to medium | Chemical circulation; some designs allow rodding of straight sections |
| Double-pipe / trombone | Tube-in-tube built as a bank of straight runs with return bends, often the same principle at larger scale | Medium | Chemical; return bends can sometimes be removed |
| Shell-and-tube (multi-pass) | Cylindrical shell with a bundle of straight tubes between tube sheets and bolted end covers with pass partitions | Medium to very large | Mechanically rodded or brushed with end covers removed — the big advantage |

### Shell-and-coil

A steel tank with copper tubing coiled inside it. Water flows through the tubing;
hot refrigerant vapour fills the shell, condenses on the outside of the coil and
collects in the bottom, so **the shell doubles as the liquid receiver**. That is
the great attraction: compact, no separate receiver, no fans, no separate
condenser. A variation gives the receiver a double wall and circulates the cooling
water in the jacket.

The limitation is cleaning. There is no way to get a brush into a coiled tube, so
descaling is a chemical circulation job. Shell-and-coil condensers are not
normally used above about 35 kW of refrigeration capacity.

### Tube-in-tube and double-pipe

Water travels through the inner tube while refrigerant condenses in the space
between the two tubes, normally flowing in the opposite direction — **counterflow**
— so the coldest water meets the coolest refrigerant at the outlet end. That
arrangement is what allows genuinely good subcooling in the last section.

Compact, cheap, mechanically robust, and available in coiled or straight-run
(double-pipe, sometimes called trombone) forms. The weakness is the same as
shell-and-coil: mostly chemical cleaning only.

### Shell-and-tube multi-pass

The workhorse of medium and large plant. A cylindrical steel shell holds a bundle
of straight tubes running between tube sheets at each end. Water flows inside the
tubes; refrigerant condenses on the outside of the bundle and drains to the bottom
of the shell, which usually acts as the receiver. Bolted end covers carry
partitions that route the water back and forth — two-pass, four-pass and six-pass
arrangements are common. More passes means a longer water path, higher velocity
and better heat transfer, at the cost of pump pressure.

The decisive advantage: unbolt the end covers and every tube is a straight bore
you can push a brush or a rotary cleaning tool through. On a plant with average
water quality, that is the difference between a condenser you can maintain and
one you replace.

## Water flow and temperature rise

Two rules of thumb, and the physics behind them.

**Flow rate.** Roughly **0.2 L/s for every 3.5 kW of refrigeration capacity.**

**Temperature rise.** The water leaving the condenser should be about — but not
more than — **6 K above** the water entering it.

The physics is the sensible heat equation:

Q = m × c × ΔT

where Q is the heat rejected in kW, m is the water mass flow in kg/s (and 1 litre
of water is near enough to 1 kg), c is the specific heat capacity of water,
4.19 kJ/kg·K, and ΔT is the temperature rise in kelvin.

### Worked example — water flow for a chiller

A water-cooled plant has an evaporator duty of 70 kW and the compressor absorbs
18 kW. Design water temperature rise through the condenser is 5 K.

1. Heat rejection: Q(cond) = 70 + 18 = **88 kW**
2. Rearrange: m = Q ÷ (c × ΔT)
3. m = 88 ÷ (4.19 × 5) = 88 ÷ 20.95 = **4.2 kg/s, so about 4.2 L/s**

Cross-check with the rule of thumb: 70 kW ÷ 3.5 kW = 20 units, at 0.2 L/s each =
**4.0 L/s**. The two agree closely, which is exactly why the rule of thumb has
survived.

### Worked example — is this condenser fouled?

The same plant is measured on site: water in 30 °C, water out 39 °C, flow
unchanged, condensing temperature 48 °C.

1. Temperature rise = 39 − 30 = 9 K, well above the 5 to 6 K expected. Less water
   is passing, or the water is picking up more heat per litre than it should.
2. Approach to condensing = 48 − 39 = 9 K, where about 5 K is expected.
3. Both numbers point the same way: **restricted water flow or a fouled tube
   bundle.** Check the strainer, the pump, air in the water lines, the valve
   positions and then the tube internals.

Note how the two checks work together. A high rise with a *normal* approach means
the flow is low. A normal rise with a *high* approach means the heat is not
getting through the tube wall — scale.

## Water velocity and erosion

Flow must be fast enough to keep the tubes scoured and the film coefficient high,
but not so fast that suspended solids erode the tube ends, the tube sheets and the
return bends. Typical design water velocities inside condenser tubes sit around
1 to 2.5 m/s. Over-pumping a condenser to fix a fouling problem is a false
economy — it thins the tube ends until one splits and puts water into the
refrigerant circuit.

>! Water in a refrigerant circuit is a serious event. A split condenser tube
>! floods the system with water, which reacts with the refrigerant and oil to form
>! acids and will destroy a hermetic motor. If a water-cooled condenser has leaked
>! internally, the system must be recovered, thoroughly cleaned, the drier
>! changed, and the oil tested for acid before recommissioning. Refrigerant
>! recovery is licensed work under ARCtick.

## On the job

- Water-cooled means lower condensing temperature, lower head pressure and more
  capacity — but only while the water side is clean.
- Shell-and-coil under about 35 kW; shell-and-tube for anything you want to be
  able to brush out.
- Counterflow tube-in-tube gives good subcooling in the last section.
- Design flow near 0.2 L/s per 3.5 kW; rise about 5 to 6 K; condensing about 5 K
  above water out.
- Use rise and approach together to separate a flow problem from a fouling
  problem.
`,
        quiz: [
          {
            q: "A water-cooled condenser rejects 88 kW. If the design water temperature rise is 5 K and water has a specific heat of 4.19 kJ/kg·K, what water flow is required?",
            options: ["1.05 L/s", "4.2 L/s", "17.6 L/s", "21 L/s"],
            answer: 1,
            explain: "m = Q ÷ (c × ΔT) = 88 ÷ (4.19 × 5) = 4.2 kg/s, which is about 4.2 L/s since 1 L of water is close to 1 kg. Dividing 88 by 5 alone (17.6) forgets the specific heat capacity — the commonest slip in this calculation.",
          },
          {
            q: "Which water-cooled condenser type can have its tubes mechanically brushed or rodded clean?",
            options: ["Shell-and-coil", "Coiled tube-in-tube", "Shell-and-tube multi-pass", "Double-wall receiver type"],
            answer: 2,
            explain: "Removing the bolted end covers of a shell-and-tube condenser exposes straight tube bores that take a brush or rotary cleaner. Coiled constructions — shell-and-coil and coiled tube-in-tube — can only be cleaned chemically, which is a real limitation on poor water.",
          },
          {
            q: "You measure water in at 30 °C, water out at 39 °C and a saturated condensing temperature of 48 °C. What is the most likely problem?",
            options: ["Non-condensable gas in the refrigerant circuit", "Restricted water flow or a fouled tube bundle", "Too much water flow through the condenser", "Refrigerant undercharge"],
            answer: 1,
            explain: "The 9 K rise is well above the expected 5 to 6 K, and the 9 K gap between water out and condensing temperature is well above the expected 5 K. Both point at the water side — restricted flow or scale. Non-condensables would raise the gauge saturation temperature without raising the water temperature rise.",
          },
          {
            q: "Why is running condenser water to waste effectively ruled out for large air-conditioning plant in Australia?",
            options: ["Waste water corrodes the condenser", "The water is too cold and causes over-condensing", "The consumption is enormous — a large office building plant could use around 160 000 L/h — and running water to waste is restricted by law", "Mains water pressure is not high enough"],
            answer: 2,
            explain: "The quantity is the issue: a single large plant could get through about 160 000 litres per hour in summer. That is why practically all water-cooled plant recirculates through a cooling tower, with make-up replacing only the water evaporated, bled and drifted away.",
          },
        ],
      },

      /* ================================================================
         7 — Evaporative condensers
         ================================================================ */
      {
        id: "evaporative-condensers",
        title: "Evaporative (Type 3) condensers",
        minutes: 10,
        simple: "Wet your arm and stand in a breeze and it feels cold — evaporating water pulls a lot of heat out of whatever it is sitting on. An evaporative condenser uses exactly that trick: it sprays water over the refrigerant coil and blows air through, so the coil is cooled by evaporation instead of just by air. It gets the condensing temperature down close to the wet bulb temperature, using only a few litres of water.",
        refs: ref("Chapter 3, evaporative condensers", "Chapter 3, latent heat of vaporisation of water and bleed-off"),
        content: `
The evaporative condenser is the third classification, and it is the clever one:
it combines the condenser and the cooling tower into a single machine. Instead of
condensing refrigerant into water and then cooling that water in a separate tower,
it wets the refrigerant coil directly and lets the water evaporate off it.

## How it is built and how it works

Inside a weatherproof casing you will find, from the bottom up:

- A **water basin (sump)** with a float-operated make-up valve and a bleed line
- A **circulating pump** that lifts water to the top of the unit
- A **spray header or distribution tray** that wets the coil evenly
- The **refrigerant coil**, usually bare (unfinned) tube, since fins would trap
  scale and dirt
- **Drift eliminators** to strip entrained droplets out of the leaving air
- A **fan**, drawing or forcing air through the wetted coil

Hot discharge gas enters the coil at the top. Water is pumped over the coil and
trickles down through the airflow. A fraction of that water evaporates, and here
is the whole point: evaporating water absorbs its **latent heat of vaporisation,
approximately 2250 kJ/kg**, plus whatever sensible heat change occurs. Enormous
amounts of heat can be moved by a very small quantity of water.

The unevaporated water falls back into the basin and is recirculated. The fan
runs whenever the plant runs, and the pump normally runs continuously as well —
though, as with a cooling tower, the fan may be slowed or cycled off if the water
gets too cold.

### Worked example — how much water?

Compare 88 kW of heat rejection thrown into water in the two possible ways.

If the water is simply heated (as in a water-cooled condenser with a 5 K rise),
we showed earlier that it takes 4.2 L/s — about 15 100 litres per hour, all of
which has to be circulated and cooled again.

If instead that heat evaporates water:

1. m = Q ÷ latent heat = 88 kJ/s ÷ 2250 kJ/kg
2. m = **0.039 kg/s**, which is about **141 litres per hour**

That is the entire evaporative loss for 88 kW of rejection. Add bleed-off to keep
the dissolved solids under control and the total consumption for such a plant
lands around **3 to 4 litres per hour for every kilowatt of refrigeration** — a
figure worth committing to memory, because it is the number a client will ask you
about.

## Why it performs so well

An air-cooled condenser can only ever approach the **dry bulb** temperature of the
air. An evaporative condenser approaches the **wet bulb**, which on a hot
Australian day may be 10 to 15 K lower. On a 38 °C day at 24 °C wet bulb, an
air-cooled condenser might condense at 53 °C while an evaporative condenser
condenses in the mid 30s.

Lower condensing temperature means lower head pressure, more capacity from the
same compressor, less power, and less stress on everything in the discharge line.
That is why evaporative condensing dominates industrial ammonia plant — cold
stores, abattoirs, breweries and process refrigeration.

## Weighing it up

| Aspect | Air-cooled (Type 1) | Water-cooled (Type 2) + tower | Evaporative (Type 3) |
|---|---|---|---|
| Cooling medium | Ambient air | Recirculated water | Water evaporated in an airstream |
| Approaches which temperature | Dry bulb | Wet bulb (via the tower) | Wet bulb, directly |
| Typical condensing temperature | Highest | Low | Lowest |
| Water used | None | Evaporation, bleed and drift | Evaporation, bleed and drift |
| Refrigerant piping | Long lines to a remote coil | Short — condenser is at the plant | Long lines to the roof-mounted unit |
| Water treatment needed | None | Yes | Yes |
| Legionella risk management | No | Yes | Yes |
| Maintenance burden | Low | Moderate | Highest — pump, fan, sprays, coil, water |

Two practical drawbacks are worth stating plainly. First, the refrigerant coil is
usually up on the roof, so long discharge and liquid lines are needed with all the
pressure drop, oil return and charge implications that brings. Second, scale forms
directly on the refrigerant coil rather than on a tower's fill, and scale on the
condensing surface goes straight to head pressure. Water treatment on an
evaporative condenser is not optional.

>! An evaporative condenser is a heat-rejection device that produces a warm, wet
>! aerosol — it carries the same **Legionella** risk as a cooling tower, and it is
>! covered by the same public-health requirements. It must be registered where
>! state law requires it, maintained to AS/NZS 3666, cleaned and disinfected on
>! schedule, and never left as a warm stagnant sump. Wear appropriate respiratory
>! protection when cleaning, and shut the fan down before working in the airstream.

## Cold weather and shutdowns

In cold conditions the sump and the coil can freeze. Standard measures are a basin
heater, a remote sump located indoors, or draining the water and running the unit
dry as an air-cooled coil at greatly reduced capacity. Fan cycling or speed control
handles head pressure the same way it does on a tower.

For a seasonal shutdown, the basin must be drained rather than left standing —
stagnant warm water is both a corrosion problem and a biological one.

## What to remember

- Type 3 combines condenser and cooling tower in one machine.
- Heat is rejected mainly as latent heat, about 2250 kJ/kg of water evaporated.
- It approaches wet bulb, not dry bulb, so it gives the lowest condensing
  temperature of the three types.
- Total water use is roughly 3 to 4 litres per hour per kilowatt of refrigeration,
  including bleed.
- Scale forms on the refrigerant coil itself, so water treatment directly protects
  head pressure.
- Same Legionella and AS/NZS 3666 obligations as a cooling tower.
`,
        quiz: [
          {
            q: "An evaporative condenser rejects 45 kW. Approximately how much water evaporates per hour, taking the latent heat of vaporisation as 2250 kJ/kg?",
            options: ["About 20 L/h", "About 72 L/h", "About 720 L/h", "About 2250 L/h"],
            answer: 1,
            explain: "m = 45 kJ/s ÷ 2250 kJ/kg = 0.02 kg/s, and 0.02 × 3600 = 72 kg/h, so about 72 litres per hour of evaporation. Bleed-off adds to the total consumption, which is why the practical figure is quoted as 3 to 4 litres per hour per kilowatt of refrigeration.",
          },
          {
            q: "Why can an evaporative condenser reach a lower condensing temperature than an air-cooled condenser on the same day?",
            options: ["Because the fan is larger", "Because it approaches the wet bulb temperature rather than the dry bulb temperature", "Because water is sprayed into the refrigerant", "Because the coil is finned more closely"],
            answer: 1,
            explain: "Evaporating water cools the coil toward the ambient wet bulb, which on a dry hot day is 10 to 15 K below the dry bulb an air-cooled coil is limited to. The water never contacts the refrigerant — it wets the outside of the coil only.",
          },
          {
            q: "Why is the refrigerant coil in an evaporative condenser usually bare tube rather than finned?",
            options: ["Fins would be too expensive at that size", "Fins would trap scale and dirt in a continuously wetted airstream", "Bare tube transfers heat better than finned tube in every case", "Fins would corrode the drift eliminators"],
            answer: 1,
            explain: "The coil is permanently wet, so closely spaced fins would silt up with scale, sludge and airborne dirt, and the fouling would sit directly on the condensing surface. Bare tube keeps the surface washable. Fins do add surface, but only where they can be kept clean.",
          },
          {
            q: "Which maintenance requirement applies to an evaporative condenser but NOT to an air-cooled condenser?",
            options: ["Cleaning of the heat transfer surface", "Registration and Legionella risk management under public-health requirements", "Checking fan operation", "Measuring condensing temperature"],
            answer: 1,
            explain: "An evaporative condenser generates a warm wet aerosol, so it falls under the same cooling tower public-health regime — registration where required, AS/NZS 3666 maintenance, scheduled cleaning and disinfection. Cleaning, fan checks and condensing temperature apply to every condenser type.",
          },
        ],
      },

      /* ================================================================
         8 — Cooling towers
         ================================================================ */
      {
        id: "cooling-towers",
        title: "Cooling towers: operation, approach and range",
        minutes: 13,
        simple: "A cooling tower is not part of the refrigeration system at all — it is just a machine for cooling down the warm water coming out of a water-cooled condenser so the same water can be used again. It works by letting a small amount of the water evaporate, which chills what is left, exactly like sweating. Two numbers describe how well it is doing: how far it cools the water, and how close it gets to the best temperature the weather will allow.",
        refs: ref("Chapter 3, cooling towers", "Chapter 3, recirculating water systems, bleed and make-up water"),
        content: `
Strictly speaking, a cooling tower is not a refrigeration component. Its job is to
take the heat-laden water leaving a water-cooled condenser and cool it down enough
to be sent back through the condenser again. But since virtually every water-cooled
plant in the country depends on one, and since technicians are the ones who get
called when the head pressure is high, you need to know how they work.

Because running water to waste is restricted by law in most places, and because
the volumes involved are so large, recirculation through a tower is standard. One
tower on a building roof may serve many separate refrigeration and
air-conditioning systems around the building, though small towers of a few
kilowatts of refrigeration capacity are also made.

## Classification

Broadly, towers divide by how the air is moved:

- **Natural-draught (wind) towers** — airflow depends on natural wind movement,
  or on the stack effect in very large hyperbolic towers.
- **Forced- or induced-draught towers** — a fan pushes or draws air through.

In practice most towers are a combination. Fans are controlled from a water
temperature sensor and only run when water temperature exceeds a set limit,
usually around **25 °C**, or the fan is speed-controlled to follow the load. When
the fans are off, the roof-mounted tower simply relies on natural breezes.

Towers also divide by airflow direction relative to the falling water:

| Configuration | Airflow | Notes |
|---|---|---|
| Counterflow | Air travels upward against the falling water | Compact footprint, better thermal performance per square metre, higher fan pressure |
| Crossflow | Air travels horizontally across the falling water | Lower fan power, easier access to the fill and distribution, taller footprint |

Very large plants — think office towers above about 1750 kW of refrigeration —
generally use towers with end-mounted or overhead fans and plastic fill, with the
water cascading slowly down against the incoming air.

## How the water circuit works

Regardless of type, the water circuit is the same.

1. Water collects in a **basin** (reservoir) at the bottom of the tower.
2. A **pump** draws from the basin and pushes the water through the water-cooled
   condenser, where it picks up the heat of condensation.
3. The warmed water is piped to the **top of the tower** and released through
   **spray nozzles** or a distribution pan over the **fill**.
4. The water trickles down over the fill against the incoming airflow, exposing
   as much surface as possible to the air.
5. Part of it evaporates, cooling what remains, and the cooled water lands back
   in the basin ready to be pumped again.

The **fill** (or packing) is the heart of it — plastic sheets or splash bars that
spread the water into thin films and slow its descent, maximising both surface
area and contact time.

Two more components complete the picture:

- **Drift eliminators** — baffles that catch water droplets carried along by the
  air. Drift is untreated, entrained water, and it is both a water loss and, more
  importantly, the aerosol route by which bacteria leave the tower. Modern
  eliminators keep drift below about 0.02% of the circulating flow, and
  high-efficiency types an order of magnitude better.
- **Make-up water float valve** — a float control admits mains water to the basin
  to replace what has been lost.

## Approach and range: the two numbers that matter

These two terms describe tower performance, and they are frequently confused.

**Range** = temperature of water entering the tower − temperature of water leaving
the tower. This is how far the tower cooled the water, and it is set by the heat
load and the water flow rate, not by the tower's ability.

**Approach** = temperature of water leaving the tower − ambient **wet bulb**
temperature. This is how close to the theoretical limit the tower managed to get,
and it is the real measure of tower performance. A tower can never cool water
below the wet bulb temperature of the entering air; approach can only get small,
never zero.

### Worked example — range, approach and evaporation

A tower serves the 88 kW plant from the water-cooled lesson. On site you measure:
water into the tower 34 °C, water out of the tower 29 °C, ambient wet bulb 24 °C,
circulating flow 4.2 L/s.

1. **Range** = 34 − 29 = **5 K**
2. **Approach** = 29 − 24 = **5 K** — a typical design figure; 3 to 5 K is good,
   and towers are rarely selected below about 3 K because the tower gets very
   large very fast.
3. **Check the heat balance:** Q = m × c × ΔT = 4.2 × 4.19 × 5 = **88 kW**. That
   agrees with the plant's heat rejection, so the flow and the range are
   consistent.
4. **Evaporation:** m = Q ÷ latent heat = 88 ÷ 2250 = 0.039 kg/s ≈ **141 L/h**.
   As a fraction of circulating flow that is 0.039 ÷ 4.2 = **0.93%** — the origin
   of the old rule that a tower evaporates roughly 1% of its circulating flow for
   each 5 to 6 K of range.

### Why humidity decides everything

Because the limit is the wet bulb, climate matters enormously. In Perth, on a
35 °C day, the wet bulb averages around 24 °C, so tower water will come down to
roughly 24 to 29 °C and can be recirculated straight away. In a humid coastal
climate the same dry bulb might come with a 27 °C wet bulb, the achievable water
temperature is far higher, and the tower has to be physically much larger for the
same duty.

The irony the chapter points out is real: the dry inland areas where evaporative
cooling works best are exactly the places least able to spare the water.

## Make-up, bleed-off and drift

Three streams leave a tower, and make-up water replaces all three.

**Make-up = evaporation + bleed-off + drift**

Only pure water evaporates. Every dissolved solid that came in with the make-up
water stays behind, so the concentration in the basin climbs steadily. Left
alone, that produces scale on the condenser tubes and corrosion in the circuit.
**Bleed-off** (also called blowdown) is a deliberate, continuous discharge of
basin water to waste to hold the concentration down.

The ratio of dissolved solids in the circulating water to that in the make-up
water is the **cycles of concentration**, C. The bleed rate follows from it:

Bleed = Evaporation ÷ (C − 1)

### Worked example — bleed and make-up

Take the tower above, evaporating 141 L/h, operated at 3 cycles of concentration.

1. Bleed = 141 ÷ (3 − 1) = **70 L/h**
2. Drift, at 0.02% of 4.2 L/s (15 120 L/h) = **about 3 L/h**
3. Make-up = 141 + 70 + 3 = **about 214 L/h**

Notice what happens if the bleed valve gets shut to "save water": evaporation
keeps concentrating the solids, scale forms on the condenser tubes, TD rises, head
pressure rises, and the plant loses far more in energy than the water was worth.
Notice also that a bleed rate set too high wastes treated water and dumps the
treatment chemicals with it.

The chapter is direct about this: bleed-off is costly, because the chemicals go
down the drain with it, and the correct amount depends on the quality of the mains
supply and the rise in water temperature. It is a balance, not a maximum.

>! Cooling towers are the classic source of **Legionnaires' disease**. Warm water
>! between roughly 20 and 45 °C, nutrients from airborne dirt, biofilm on the fill
>! and an aerosol blowing off the top are everything the organism needs. In
>! Australia, cooling tower systems are regulated under state public-health law
>! built on **AS/NZS 3666**: registration with the local authority, a documented
>! risk management plan, routine inspection and testing, and scheduled cleaning
>! and disinfection. Never enter or work in a tower without shutting down the fan
>! and pump, isolating and locking off, and wearing suitable respiratory
>! protection — high-pressure cleaning of a fouled tower generates exactly the
>! aerosol that causes infection.

## On the job

- Range is set by the load and flow; approach is set by the tower and the wet
  bulb.
- A tower can never beat the wet bulb temperature — check the wet bulb before you
  condemn a tower.
- Make-up = evaporation + bleed + drift; bleed = evaporation ÷ (C − 1).
- Roughly 1% of circulating flow evaporates for every 5 to 6 K of range.
- Fans off around 25 °C, and keep condenser water above about 20 °C.
- Never shut the bleed off to save water — scale costs more than water does.
`,
        quiz: [
          {
            q: "Water enters a cooling tower at 35 °C and leaves at 29 °C. The ambient wet bulb is 25 °C. What are the range and the approach?",
            options: ["Range 10 K, approach 6 K", "Range 6 K, approach 4 K", "Range 4 K, approach 6 K", "Range 6 K, approach 10 K"],
            answer: 1,
            explain: "Range is the drop across the tower: 35 − 29 = 6 K. Approach is how close the leaving water gets to the wet bulb: 29 − 25 = 4 K. Range depends on load and flow rate; approach is the true measure of the tower's ability, because the wet bulb is the theoretical floor.",
          },
          {
            q: "A tower evaporates 180 L/h and is operated at 4 cycles of concentration. What is the required bleed-off rate?",
            options: ["45 L/h", "60 L/h", "180 L/h", "720 L/h"],
            answer: 1,
            explain: "Bleed = evaporation ÷ (C − 1) = 180 ÷ (4 − 1) = 60 L/h. Dividing by C instead of C − 1 gives 45 L/h and is the classic error. Running at higher cycles of concentration reduces bleed and chemical loss, but leaves the circulating water more concentrated and so more likely to scale and corrode.",
          },
          {
            q: "A building manager shuts the tower bleed valve to reduce water consumption. What is the most likely outcome?",
            options: ["Lower running costs with no downside", "Dissolved solids concentrate, scale forms on the condenser tubes, TD and head pressure rise and energy use increases", "The tower approach improves", "Drift losses increase"],
            answer: 1,
            explain: "Only pure water evaporates, so every dissolved solid stays behind and concentrates. The result is scale on the condenser tubes, which raises the condensing temperature and the compressor power far beyond the value of the water saved. Bleed also carries treatment chemicals away, so it must be balanced, not maximised or eliminated.",
          },
          {
            q: "What limits how cold a cooling tower can make the water?",
            options: ["The ambient dry bulb temperature", "The ambient wet bulb temperature", "The condenser water flow rate", "The size of the tower fan motor"],
            answer: 1,
            explain: "Evaporative cooling drives the water toward the wet bulb, which is the theoretical floor — the approach can get small but never reaches zero. That is why humid climates need much larger towers for the same duty, and why you check the wet bulb before condemning a tower for poor performance.",
          },
          {
            q: "What is the purpose of drift eliminators in a cooling tower?",
            options: ["To stop the water freezing in winter", "To remove entrained water droplets from the leaving air, reducing water loss and the aerosol that can carry bacteria", "To distribute the water evenly over the fill", "To filter dust out of the incoming air"],
            answer: 1,
            explain: "Drift is untreated water carried out with the airstream, so it is both a loss and the main route by which Legionella-bearing aerosol can escape the tower. Good eliminators hold drift below about 0.02% of circulating flow. Water distribution is the job of the nozzles or distribution pan, not the eliminators.",
          },
        ],
      },

      /* ================================================================
         9 — Water treatment, fouling and fault-finding
         ================================================================ */
      {
        id: "water-treatment-and-faults",
        title: "Water treatment, fouling and fault-finding on condensers",
        minutes: 12,
        simple: "Water that keeps evaporating leaves everything it was carrying behind, like the ring in a kettle. That deposit sticks to the inside of condenser tubes, where it acts like a blanket and stops heat getting through, so pressures and power bills climb. Add corrosion and slime and you have the three enemies of a water-cooled system, all of which are managed by chemical treatment plus a bit of controlled waste.",
        refs: ref("Chapter 3, water treatment", "Chapter 3, common faults and testing", "Chapter 3, over-condensing and condenser cleanliness"),
        content: `
Water-side maintenance is where water-cooled and evaporative plant is won or lost.
A condenser that is 3 mm out of adjustment mechanically is a nuisance; a condenser
with 1 mm of scale in the tubes is losing the client thousands of dollars a year
in compressor power.

## What attacks a water system

The inside of a cooling tower or condenser is under attack from two directions at
once — from the air being drawn through it (smog, chemical fumes, dust, spores)
and from the water itself.

### Scale

Calcium and magnesium salts come in with the make-up water. Only pure water
evaporates, so those salts concentrate until they exceed their solubility and
deposit on the hottest surface available — which is the condenser tube wall.

Scale is a thermal insulator. A thin layer raises the resistance to heat transfer
noticeably, and the effect compounds: higher condensing temperature raises tube
wall temperature, which precipitates scale faster.

The chain of consequences is always the same:

1. Scale raises the required TD
2. TD is raised by raising the condensing temperature
3. Higher condensing temperature means higher head pressure and higher compressor
   power per kilowatt of refrigeration
4. Capacity falls, run time increases, discharge temperature rises, oil degrades
5. Eventually the high-pressure control trips and the plant stops on a hot day

Controls: chemical scale inhibitors, pH control, adequate bleed-off, and softening
of the make-up water where the supply is hard.

### Corrosion

Corrosion continues even with treatment if the water drifts acid or alkaline, so
pH is monitored continuously on any serious installation.

**Galvanic corrosion (electrolysis)** between dissimilar metals is the vicious
one. Copper tubing and steel shells or steel tower panels in the same wet circuit
form a cell, and the chapter records this eating right through **12 mm steel
condensing plates in six months**. That is not a slow-decade problem; it is a
this-year problem.

Controls: corrosion inhibitors, correct material selection, sacrificial anodes,
isolation of dissimilar metals, and the move to all-fibreglass and plastic towers
and components specifically to sidestep the expense.

### Biological fouling

Algae, bacteria and the slime they build coat the fill and the tube walls. Biofilm
insulates like scale, it shelters organisms from disinfectant, and it feeds
corrosion underneath it. This is also the Legionella pathway.

Controls: biocides, alternated so organisms do not adapt, plus physical cleaning
of surfaces where the biofilm can be scrubbed away.

## The treatment reality

The chapter makes a point worth being honest about with clients: treatment is
awkward, expensive and site-specific. Treating one contamination problem often
requires another chemical to deal with the by-products of the first, and no single
programme suits two different plants. Water quality, air quality, materials, load
profile and local regulation all differ.

And the two things people try instead do not work:

- **Regular draining alone** is not the answer. Algae and scale form perfectly
  well in relatively fresh water.
- **Excessive bleed-off** is not the answer either. It flushes out the treatment
  chemicals along with the solids, so you pay twice — in water and in chemicals —
  while still not controlling biology.

The right answer is a properly designed treatment programme, run by a water
treatment specialist, with monitoring, plus disciplined mechanical cleaning and
inspection. On any tower or water-cooled condenser, regular inspection for rust,
scale and deterioration is a permanent operating cost, and it is a significant one
on large plant.

>! **Chemical safety.** Cooling tower treatment chemicals include strong acids,
>! alkalis and oxidising biocides. Read the Safety Data Sheet, use the specified
>! PPE, never mix products, and never dose by guesswork. Descaling with acid
>! releases gas and heat and must never be done on a system under pressure or
>! without ventilation. Isolate and lock off the pump and fan before opening any
>! part of a tower or condenser.

## Fault-finding with nothing but thermometers

This is the most useful part of the chapter for a service technician. High head
pressure on a water-cooled plant is nearly always one of three things:

- Air or non-condensable gas in the condenser
- Restricted water flow — pump problems, air in the lines, a closed or partly
  closed valve, a blocked strainer, or scale in the supply pipe or tubes
- High wet bulb (high humidity) onto the cooling tower, giving a high supply water
  temperature

You can separate them with a thermometer and a set of gauges, using three
benchmark figures.

| Check | Expected value | What a failure tells you |
|---|---|---|
| Water from the tower, into the condenser | Should not exceed **30 °C** | Tower problem: high wet bulb, tower fouled, fan off, poor airflow, or the tower is undersized |
| Water out compared with water in | Approximately **6 K rise**, and not more | A bigger rise means low water flow; a much smaller rise with high pressures means excess flow or a heat balance error |
| Condensing temperature compared with water out | About **5 K above** water out | A bigger gap means fouled tubes, scale, or non-condensables in the refrigerant circuit |

### Worked example — running the three checks

A plant with high head pressure. Measurements: water in 29 °C, water out 35 °C,
discharge pressure on R22 reading 1430 kPa gauge.

1. **Water in: 29 °C.** Under 30 °C, so the tower is doing its job. Rule out the
   tower.
2. **Rise: 35 − 29 = 6 K.** Right on expectation, so water flow is correct. Rule
   out flow restriction.
3. **Condensing temperature:** 1430 kPa gauge on R22 corresponds to about
   **40 °C**. Approach = 40 − 35 = **5 K**, exactly as expected.

Conclusion: this plant is actually healthy. The "high" head pressure is a normal
water-cooled head pressure and someone was comparing it against air-cooled
experience. That is a genuinely common call-out.

Now change one figure. If the same plant showed water in 29 °C, water out 35 °C
but a condensing temperature of 48 °C, the approach becomes 13 K. Water flow is
correct and the tower is fine, so the heat is not getting through the tube wall or
the top of the condenser is blanketed: **scale in the tubes, or non-condensables**.
Check the condenser tube surface temperature against the gauge saturation
temperature to decide which.

## Why water-cooled plant is worth the trouble

Condensing temperatures on water-cooled systems can be as much as **20 K below**
an equivalent air-cooled unit. That translates to at least a **20% increase in
cooling capacity** from the same compressor, plus a corresponding drop in power
per kilowatt of refrigeration. All of that advantage disappears if the water side
is neglected — which is exactly why the maintenance regime exists.

## On the job

- Scale, corrosion and biofilm are the three enemies; each needs a different
  chemical control and none is fixed by draining alone.
- Galvanic corrosion between copper and steel can destroy plate steel in months.
- Three thermometer checks: water in ≤30 °C, rise about 6 K, condensing about 5 K
  above water out.
- Water in high = tower problem. Rise high = flow problem. Approach high = fouling
  or non-condensables.
- Log the readings every service. Trending TD and approach over a year finds
  fouling long before a breakdown does.
- Refrigerant recovery and charging on any of this work is licensed activity under
  ARCtick.
`,
        quiz: [
          {
            q: "On a water-cooled plant you measure water in 28 °C, water out 34 °C and a saturated condensing temperature of 47 °C. Which fault does this point to?",
            options: ["The cooling tower is not performing", "Restricted condenser water flow", "Fouled condenser tubes or non-condensables in the refrigerant circuit", "Refrigerant overcharge"],
            answer: 2,
            explain: "Water in is under 30 °C, so the tower is fine. The 6 K rise is exactly as expected, so flow is fine. But the 13 K gap between water out and condensing temperature, where about 5 K is expected, says heat is not crossing the tube wall — scale, sludge, or non-condensable gas blanketing the top of the condenser.",
          },
          {
            q: "Why is regular draining of a cooling tower, on its own, an inadequate substitute for water treatment?",
            options: ["Draining is more expensive than treatment", "Algae and scale form readily even in relatively fresh water", "Draining removes the drift eliminators' effectiveness", "It cools the water below 20 °C"],
            answer: 1,
            explain: "Fresh water still supports algal growth and still deposits scale as it evaporates and concentrates, so draining does not address the mechanisms. Excessive bleed-off has the same problem and additionally flushes away the treatment chemicals, so you pay twice for a partial result.",
          },
          {
            q: "What is the mechanism by which scale on condenser tubes raises the compressor's power consumption?",
            options: ["It restricts the refrigerant flow through the condenser", "It insulates the surface, so a higher TD — and therefore a higher condensing temperature and head pressure — is needed to reject the same heat", "It increases the water pump load only", "It causes the refrigerant to subcool excessively"],
            answer: 1,
            explain: "Scale adds thermal resistance. Since Q = U × A × TD and both U and A have effectively fallen, TD must rise to move the same heat, and TD rises by the condensing temperature climbing. Higher head pressure means more work per kilogram pumped and less capacity, so power per kilowatt of refrigeration goes up.",
          },
          {
            q: "Which of these is the classic sign that the COOLING TOWER, rather than the condenser, is the problem?",
            options: ["Water leaving the condenser is 6 K above water entering it", "Water entering the condenser from the tower exceeds 30 °C", "Condensing temperature is 5 K above water-out temperature", "The compressor draws its rated current"],
            answer: 1,
            explain: "Water supplied from the tower should not exceed about 30 °C. When it does, look at the tower: high wet bulb, fouled or blocked fill, a fan that is not running, restricted airflow, or an undersized tower. The other readings listed are all within normal expectations.",
          },
        ],
      },

    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
