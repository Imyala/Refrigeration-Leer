/* =========================================================================
   Course content, modules 1–5: fundamentals, the cycle, components,
   refrigerants, superheat & subcooling.

   Lessons are authored in the markdown subset rendered by js/md.js.
   The !SIM[label](params) directive opens the simulator pre-configured.
   Quiz answers are the index into options. Loaded as a plain script
   (extends the COURSE array) and require()-able in Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const MODULES = [

  /* ======================================================================
     Module 1 — Fundamentals
     ====================================================================== */
  {
    id: "fundamentals",
    title: "1 · Heat, temperature & pressure",
    blurb: "The physics every refrigeration mechanic uses daily: what heat actually is, why change of state moves so much of it, and how pressure controls boiling point.",
    lessons: [
      {
        id: "heat-and-temperature",
        title: "Heat, temperature and how heat moves",
        minutes: 6,
        simple: "Heat is energy on the move; temperature just says how concentrated it is. Think of temperature as how loud one speaker is, and heat as the total sound in the room. Heat always slides from hotter things to colder things — so a fridge doesn't 'make cold': it quietly carries heat from inside the box to the air outside, like a bucket brigade for warmth.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — basic refrigeration principles: heat, temperature and heat transfer",
        ],
        content: `
Heat and temperature are related but they are not the same thing, and keeping
them separate in your head is the first step to understanding refrigeration.

**Temperature** measures how fast the molecules of a substance are vibrating —
their average kinetic energy. **Heat** is the energy itself, flowing from one
place to another. A bathtub of warm water holds far more heat than a cup of
boiling water, even though the cup is at a higher temperature.

## The one rule that runs everything

Heat always flows from **hot to cold** — never the other way — and the bigger
the temperature difference, the faster it flows. Every heat exchanger in a
refrigeration system is designed around that rule:

- The **evaporator** runs *colder* than the space, so heat flows from the space into the refrigerant.
- The **condenser** runs *hotter* than the outdoor air, so heat flows out of the refrigerant.

!FIG[heat-flow]

## Three ways heat travels

- **Conduction** — through a material by contact: heat through a copper tube wall.
- **Convection** — carried by a moving fluid: air blown across a coil, refrigerant flowing through pipes.
- **Radiation** — by infrared waves: sunshine loading a roof or a condensing unit.

A refrigeration system uses all three, but the coils live on conduction and
convection — which is why airflow problems (a dirty coil, a failed fan, an
iced evaporator) are behind so many service calls.

> **"Cold" is not a thing.** Cold is just the absence of heat. A refrigerator
> does not add cold to the box — it *removes heat* from the box and dumps it
> outside. Refrigeration is heat *transport*, not cold *production*.

!SIM[Watch heat being moved around the cycle](tour=1)
`,
        quiz: [
          {
            q: "Heat naturally flows…",
            options: [
              "from hot to cold, faster when the temperature difference is bigger",
              "from cold to hot when pressures are equal",
              "in whichever direction the fan blows",
              "only through metals",
            ],
            answer: 0,
            explain: "Heat always moves from higher temperature to lower temperature, and the rate rises with the temperature difference. Refrigeration works by making one coil colder and one hotter than their surroundings.",
          },
          {
            q: "Which statement about heat and temperature is correct?",
            options: [
              "They are two words for the same thing",
              "Temperature measures molecular kinetic energy; heat is the energy that flows",
              "Heat is measured in degrees",
              "Temperature can flow from one object to another",
            ],
            answer: 1,
            explain: "Temperature is a measure of how energetic the molecules are; heat is the energy transferred between substances at different temperatures.",
          },
          {
            q: "A refrigeration system makes a cool room cold by…",
            options: [
              "generating cold at the evaporator",
              "converting heat into refrigerant",
              "absorbing heat inside the room and rejecting it outside",
              "lowering the air pressure in the room",
            ],
            answer: 2,
            explain: "There is no such thing as adding cold. The evaporator absorbs heat from the room, the refrigerant carries it, and the condenser rejects it outdoors.",
          },
        ],
      },
      {
        id: "sensible-latent",
        title: "Sensible heat, latent heat and change of state",
        minutes: 7,
        simple: "Warming something up is 'sensible' heat — you can feel the change on a thermometer. But turning liquid into vapour swallows a giant gulp of energy with NO temperature change at all — that's 'latent' (hidden) heat. Fridges exploit it: they boil a liquid inside the cold box (soaking up a huge gulp of heat) and squeeze the vapour back to liquid outside (dumping the same gulp). Boiling and un-boiling, around and around.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — change of state, sensible and latent heat",
        ],
        content: `
Matter exists as solid, liquid or gas, and moving between those states takes
(or releases) large amounts of energy. Refrigeration is built on that fact.

## Sensible heat — you can sense it

Add heat to water and its temperature rises: that is **sensible heat**, heat
that changes temperature. It takes about 4.2 kJ to warm one kilogram of water
by one degree.

## Latent heat — hidden heat

Keep heating that water and at 100°C something different happens: the
temperature *stops rising* and the water boils. Every kilogram of water needs
about **2,257 kJ** to turn from liquid to vapour — over 500 times the energy
of a one-degree sensible change — and all of it is absorbed **at constant
temperature**. That is **latent heat** (from the Latin for *hidden*: your
thermometer cannot see it).

The same happens in reverse: when vapour condenses back to liquid it *gives
up* the same huge amount of heat, again at constant temperature.

!FIG[latent-plateau]

## Why refrigeration cares

A refrigeration system is a latent-heat machine:

- In the **evaporator**, liquid refrigerant *boils*, absorbing a large amount of latent heat from the space — that is the useful cooling.
- In the **condenser**, the vapour *condenses*, releasing that latent heat to the outdoor air.

The small sensible portions at each end have names you will use every day:

- **Superheat** — sensible heating of the vapour *after* the coil has finished boiling (protects the compressor).
- **Subcooling** — sensible cooling of the liquid *after* the condenser has finished condensing (guarantees solid liquid to the metering device).

> Latent heat is why refrigerant flow rates can be modest while moving
> kilowatts of heat: each kilogram of boiling refrigerant soaks up a huge
> parcel of energy without changing temperature.

!SIM[See boiling and condensing zones inside the coils](r=R134a)
`,
        quiz: [
          {
            q: "During a change of state (boiling or condensing), the temperature of the substance…",
            options: [
              "rises quickly",
              "falls quickly",
              "stays constant while latent heat is absorbed or released",
              "depends on the fan speed",
            ],
            answer: 2,
            explain: "Latent heat is absorbed or released at constant temperature — the energy goes into changing state, not changing temperature. That is the flat plateau you see in the coils.",
          },
          {
            q: "Which process moves the most heat per kilogram of refrigerant?",
            options: [
              "Warming vapour by 5 K (superheat)",
              "Boiling liquid into vapour (latent heat)",
              "Cooling liquid by 5 K (subcooling)",
              "They are all about the same",
            ],
            answer: 1,
            explain: "Change of state moves vastly more energy than sensible temperature changes — hundreds of kJ/kg versus a few kJ/kg. That is why the evaporator and condenser work by boiling and condensing.",
          },
          {
            q: "Superheat is…",
            options: [
              "latent heat added in the condenser",
              "sensible heat added to the vapour after all the liquid has boiled off",
              "the temperature of the discharge line",
              "heat added by the fan motor",
            ],
            answer: 1,
            explain: "Once the last droplet has boiled, further heat raises the vapour's temperature above saturation — sensible heating called superheat. It proves the vapour is dry before it reaches the compressor.",
          },
        ],
      },
      {
        id: "pressure-and-pt",
        title: "Pressure and the PT relationship",
        minutes: 8,
        simple: "Put a liquid under more pressure and it needs more heat to boil; drop the pressure and it boils colder — that's why water boils cooler up a mountain. While liquid and vapour sit together in a coil, pressure and temperature are locked like two ends of a see-saw: know one and you know the other. That's the whole trick behind your gauges — reading a pressure IS reading the coil's temperature.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — the pressure–temperature relationship and saturation",
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — the P–h diagram and PT data as diagnostic tools",
        ],
        content: `
Here is the trick that makes the whole vapour-compression cycle possible:
**the boiling point of a liquid depends on its pressure.**

Water boils at 100°C at sea level, but at around 70°C on top of Mount Everest
where the air pressure is lower. Squeeze a vapour and it condenses more
easily; lower the pressure over a liquid and it boils more easily.

## Saturation: the locked relationship

While liquid and vapour exist **together** — as they do inside the evaporator
and condenser — pressure and temperature are locked to each other. For any
refrigerant, one pressure means one temperature and vice versa. This is the
**pressure–temperature (PT) relationship**, and it is printed on PT charts,
gauge dials and app tables that technicians use every day.

!FIG[pt-curve]

That lock is what your gauges exploit:

- Measure the **low-side pressure** and the PT chart tells you the temperature the evaporator coil is boiling at.
- Measure the **high-side pressure** and it tells you the condensing temperature.

!FIG[gauge-pt-ring]

## Gauge pressure vs absolute pressure

The atmosphere presses on everything at about **101.3 kPa** (1 atmosphere).
Field gauges read **zero at atmospheric pressure** — they show *gauge
pressure*, written kPa g or psig. Scientific charts (like the P–h diagram)
use *absolute pressure*, which starts from a true vacuum.

- absolute = gauge + 101.3 kPa
- A gauge reading below zero is a **vacuum** (shown in kPa vacuum or inches of mercury).

## Why this is the daily bread of service work

A refrigeration system is really a **pressure-control machine**. The
compressor and metering device create two pressure zones, and those pressures
*choose* the boiling and condensing temperatures. Diagnosis usually starts
with: *"What does the PT relationship say these pressures should be — and
what do I actually see?"*

>! Always know which refrigerant you are working on before trusting a PT
> value — every fluid has its own curve. R410A pressures are roughly 60%
> higher than R22 at the same temperature.

!SIM[Practise reading pressures on the PT trainer](view=pt)
`,
        quiz: [
          {
            q: "If the pressure over a liquid refrigerant rises, its boiling (saturation) temperature…",
            options: ["falls", "rises", "stays the same", "becomes zero"],
            answer: 1,
            explain: "Higher pressure means a higher boiling point. The compressor raises pressure precisely so the refrigerant will condense at a temperature above the outdoor air.",
          },
          {
            q: "A field gauge reads zero when connected to…",
            options: [
              "a perfect vacuum",
              "a system at atmospheric pressure",
              "a system at 101.3 kPa above atmospheric",
              "a fully charged system",
            ],
            answer: 1,
            explain: "Gauges read pressure above atmospheric (gauge pressure). Zero on the gauge is atmospheric pressure; absolute pressure = gauge + 101.3 kPa.",
          },
          {
            q: "Inside a coil where liquid and vapour are present together, knowing the pressure tells you…",
            options: [
              "the exact temperature (via the PT relationship)",
              "the refrigerant charge in kilograms",
              "the compressor speed",
              "nothing useful",
            ],
            answer: 0,
            explain: "During change of state, pressure and temperature are locked together. That is why a pressure gauge doubles as a coil thermometer through the PT chart.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 2 — The vapour-compression cycle
     ====================================================================== */
  {
    id: "cycle",
    title: "2 · The vapour-compression cycle",
    blurb: "The four processes that move heat uphill, how to read the P–h diagram, and a full lap around the loop with the simulator.",
    lessons: [
      {
        id: "four-processes",
        title: "The four processes around the loop",
        minutes: 7,
        simple: "The cycle is a delivery loop with four stops: SQUEEZE (the compressor makes the vapour hot), COOL (the condenser dumps heat outside and the gas turns to liquid), DROP (the metering device lets the pressure crash so the liquid gets freezing cold), SOAK (the cold liquid boils in the evaporator, soaking heat out of the room). Then back to the start. Only the squeeze costs electricity — the rest is heat flowing downhill by itself.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — the vapour-compression cycle",
        ],
        content: `
Every vapour-compression system — from a bar fridge to a supermarket rack —
performs the same four processes in an endless loop.

!FIG[cycle-loop]

## 1. Compression (work in)

The **compressor** draws in cool, low-pressure vapour and squeezes it into a
hot, high-pressure gas. This is the only place energy is *added* to the
refrigerant, and it is what your electricity bill pays for. Raising the
pressure raises the saturation temperature, so the refrigerant is now hotter
than the outdoor air and can give up heat.

## 2. Condensation (heat out)

In the **condenser**, the hot gas first sheds its superheat, then condenses to
liquid at constant temperature, releasing its latent heat to the air, and
finally subcools slightly. Everything the evaporator absorbed — plus the
compressor's work — leaves here.

## 3. Expansion (pressure drop)

The **metering device** (expansion valve or capillary tube) is a deliberate
restriction. Liquid is throttled from high to low pressure; a little of it
flash-boils, and that flashing chills the remaining liquid down to evaporator
temperature. No heat is added or removed — the process is isenthalpic.

## 4. Evaporation (heat in)

In the **evaporator**, the cold liquid boils at low pressure, soaking up
latent heat from the space — the useful refrigeration effect. The vapour
picks up a few degrees of superheat to make sure it is dry, then returns to
the compressor to go around again.

## The two-sides picture

The compressor and the metering device split the circuit into a
**high-pressure side** (discharge line, condenser, receiver, liquid line) and
a **low-pressure side** (evaporator, suction line). Fix that split in your
head — every gauge reading you ever take belongs to one side or the other.

!SIM[Watch all four processes live](r=R134a)
`,
        quiz: [
          {
            q: "Where is work added to the refrigerant?",
            options: ["Evaporator", "Condenser", "Compressor", "Metering device"],
            answer: 2,
            explain: "The compressor is the only component that adds energy to the refrigerant — everything else exchanges heat or drops pressure.",
          },
          {
            q: "The heat rejected at the condenser equals…",
            options: [
              "only the heat absorbed in the evaporator",
              "the evaporator heat plus the compressor work",
              "only the compressor work",
              "the superheat",
            ],
            answer: 1,
            explain: "Energy in = energy out: the condenser must reject everything the evaporator absorbed plus the work the compressor added. That is why condensers are physically larger than the evaporators they serve.",
          },
          {
            q: "Which two components divide the system into its high and low pressure sides?",
            options: [
              "Evaporator and condenser",
              "Receiver and sight glass",
              "Compressor and metering device",
              "Suction line and liquid line",
            ],
            answer: 2,
            explain: "The compressor raises pressure and the metering device drops it — between them they create and maintain the two pressure zones.",
          },
        ],
      },
      {
        id: "ph-diagram",
        title: "Reading the P–h diagram",
        minutes: 8,
        simple: "The P–h chart is a map of how much energy each kilogram of refrigerant carries (left–right) at what pressure (up–down). The running cycle draws a squashed rectangle on it. A wider bottom edge means more cooling for the same flow; a taller shape means the compressor is working harder. Healthy systems draw wide, shortish loops; struggling ones draw narrow, tall ones.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — the pressure–enthalpy diagram and plant efficiency",
        ],
        content: `
The **pressure–enthalpy (P–h) diagram** is the map of the refrigeration
cycle. Learn to read it and every fault becomes a shape you can recognise.

## The axes and the dome

- **Vertical axis** — pressure (absolute, usually on a log scale).
- **Horizontal axis** — enthalpy: the energy content of each kilogram of refrigerant, in kJ/kg.
- The **saturation dome** in the middle: left boundary = pure liquid, right boundary = pure vapour, inside = a boiling mixture of both.

Move to the right on the chart and the refrigerant is carrying more energy.
That is the whole trick of reading it.

!FIG[ph-legs]

## The four legs of the cycle

The running cycle draws a loop with four corner points:

1. **Point 1 → 2 (compression)** — up and slightly right: pressure rises, and the compressor's work adds enthalpy.
2. **Point 2 → 3 (condensing)** — straight left along the high pressure: desuperheat, condense, subcool. The distance travelled is the heat rejected.
3. **Point 3 → 4 (expansion)** — straight *down*: pressure crashes but enthalpy is unchanged (throttling adds no energy), which is why the line is vertical.
4. **Point 4 → 1 (evaporating)** — right along the low pressure, absorbing latent heat. The **width of this leg is the refrigeration effect** — the useful cooling per kilogram.

## What the widths mean

- **Refrigeration effect** = h1 − h4 (the wider, the more cooling per kg).
- **Compressor work** = h2 − h1.
- **COP** = effect ÷ work. A tall, skinny cycle (big pressure lift, small effect) is an inefficient one.

When a fault squeezes the cycle — say low charge shrinking the effect, or a
blocked condenser stretching the lift — the P–h loop visibly changes shape.
That is why the simulator shows the healthy cycle as a dashed overlay for
comparison.

!SIM[Compare a faulty cycle to the healthy overlay](fault=dirtyCondenser)
`,
        quiz: [
          {
            q: "On a P–h diagram, the horizontal axis shows…",
            options: ["temperature", "enthalpy (energy per kilogram)", "volume", "time"],
            answer: 1,
            explain: "P–h plots pressure against enthalpy. Moving right means each kilogram of refrigerant is carrying more energy.",
          },
          {
            q: "The expansion (metering) process appears on the P–h diagram as…",
            options: [
              "a vertical drop — pressure falls at constant enthalpy",
              "a horizontal line to the right",
              "a diagonal climb",
              "it does not appear",
            ],
            answer: 0,
            explain: "Throttling adds and removes no energy, so enthalpy is constant while pressure falls: a vertical line from the high side down to the low side.",
          },
          {
            q: "The refrigeration effect — the useful cooling per kilogram — is…",
            options: ["h2 − h1", "h1 − h4", "h2 − h3", "the height of the cycle"],
            answer: 1,
            explain: "The evaporating leg from point 4 to point 1 is the heat absorbed from the space. Its width, h1 − h4, is the refrigeration effect.",
          },
        ],
      },
      {
        id: "follow-the-refrigerant",
        title: "Follow the refrigerant: one full lap",
        minutes: 7,
        simple: "Ride along for one lap: cool blue vapour gets squeezed into hot red gas → it sheds its heat through the condenser and leaves as warm orange liquid → it squirts through a tiny gap and comes out as freezing teal froth → the froth boils away in the evaporator, stealing heat from the room, and returns as cool blue vapour to go again. If you ever see the wrong colour in the wrong pipe on the simulator, that's exactly how real faults behave.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — cycle components and refrigerant states",
        ],
        content: `
Put the last two lessons together and ride one kilogram of refrigerant around
the loop. The colours below match the simulator's pipes.

## Suction line (blue) — cool, low-pressure vapour

Leaving the evaporator the refrigerant is a dry vapour a few degrees above
its boiling point — that margin is the **superheat**. It is drawn down the
suction line into the compressor. Liquid here would be dangerous: compressors
pump vapour, not liquid.

## Discharge line (red) — hot, high-pressure gas

Compression packs the same vapour into a fraction of the volume. Pressure and
temperature jump — the discharge line is the hottest pipe on the system,
often 70–100°C. The gas is now hotter than the outside air, so heat can flow
outward.

## Through the condenser to the liquid line (amber)

Across the condenser coil the gas desuperheats, condenses at constant
temperature, and subcools a few degrees. Out comes warm, high-pressure
**liquid**, collected in the **receiver** — the buffer tank that keeps a
solid column of liquid available whatever the load.

## Through the metering device to the evaporator feed (teal)

The expansion valve throttles the liquid to low pressure. Part of it
instantly **flash-boils**, and that flash chills the rest to the evaporator's
saturation temperature. The teal pipe carries this cold, foamy
liquid-plus-vapour mixture into the coil.

## Around again

In the evaporator the mixture boils away, absorbing heat from the space; the
last section of coil adds the superheat; and our kilogram is back where it
started — several hundred kilojoules of heat richer, ready to hand the load
to the condenser on the next lap.

> A well-running system is just these states in the right places. Most faults
> announce themselves as the *wrong state in the wrong pipe*: liquid in the
> suction line (floodback), vapour in the liquid line (flash gas), and so on.

!SIM[Take the guided tour of the loop](tour=1)
`,
        quiz: [
          {
            q: "What should be flowing in the suction line of a healthy system?",
            options: [
              "Superheated (dry) low-pressure vapour",
              "Saturated liquid",
              "A liquid/vapour mixture",
              "Subcooled liquid",
            ],
            answer: 0,
            explain: "The evaporator finishes its job by superheating the vapour a few degrees, guaranteeing no liquid droplets reach the compressor.",
          },
          {
            q: "Immediately after the metering device the refrigerant is…",
            options: [
              "hot high-pressure gas",
              "a cold low-pressure mixture of liquid and flash vapour",
              "pure subcooled liquid",
              "superheated vapour",
            ],
            answer: 1,
            explain: "Throttling flashes off part of the liquid, and the flash chills the remainder to evaporator temperature — a cold two-phase mixture enters the coil.",
          },
          {
            q: "The purpose of the liquid receiver is to…",
            options: [
              "boil the refrigerant",
              "store a buffer of high-pressure liquid so the metering device is always fed solid liquid",
              "remove moisture from the system",
              "cool the compressor",
            ],
            answer: 1,
            explain: "The receiver is a storage buffer on the liquid line. It absorbs changes in operating charge and prevents flash gas reaching the metering device.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 3 — Components deep-dive
     ====================================================================== */
  {
    id: "components",
    title: "3 · Components deep-dive",
    blurb: "Compressors, metering devices, heat exchangers and the supporting cast — what each one does, the main types, and how they fail.",
    lessons: [
      {
        id: "compressors",
        title: "Compressors",
        minutes: 8,
        simple: "The compressor is the pump that drives the whole loop — a motor squeezing vapour into a smaller space so it comes out hot and high-pressure. Different designs (pistons, scrolls, screws) suit different sizes, but they all obey one rule: they pump VAPOUR only. Liquid doesn't squash, so liquid reaching a running compressor is like dropping a spoon in a blender.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — compressors: types, applications and protection",
        ],
        content: `
The compressor is the heart of the system: it creates the pressure difference
that everything else depends on, and it is usually the most expensive part to
replace. Treat it kindly.

## The main types

| Type | How it works | Where you meet it |
|------|-------------|-------------------|
| Reciprocating | Pistons, valves and a crankshaft | Fridges, cool rooms, older AC |
| Rotary | A rolling piston in a cylinder | Small split systems |
| Scroll | Two spiral scrolls, one orbiting | Modern residential & light commercial AC |
| Screw | Two meshing helical rotors | Large commercial / industrial |
| Centrifugal | A high-speed impeller | Large chillers |

## Hermetic, semi-hermetic, open

- **Hermetic** — motor and pump welded inside one steel shell. Cheap, sealed for life; a burnout means replacement.
- **Semi-hermetic** — bolted casing, can be opened and rebuilt. Common in commercial plant.
- **Open drive** — motor outside, connected by shaft and seal. Industrial and ammonia plant.

In hermetics and semi-hermetics the cool suction vapour flows over the motor
windings to cool them — one more reason correct superheat matters.

## The golden rule: vapour only

Liquid does not compress. Liquid refrigerant or a slug of oil entering a
running compressor can bend valves, break rods and wreck scrolls in seconds —
called **liquid slugging**. Persistent mild floodback dilutes the oil and
wears bearings quietly instead. That is why:

- The evaporator superheats the vapour before it leaves.
- Accumulators are fitted on flood-prone systems.
- A TXV stuck open or an iced coil (superheat near zero) is an emergency for the compressor, not just a performance issue.

## Capacity control

Systems rarely need full capacity all day. Older plant cycles compressors on
and off or unloads cylinders; modern equipment uses **variable-speed (inverter)
drives** — the compressor slows down instead of stopping, which is exactly
what the speed slider in the simulator models.

!SIM[See how compressor speed reshapes the cycle](speed=140)
`,
        quiz: [
          {
            q: "Why must liquid refrigerant never enter a running compressor?",
            options: [
              "Liquid is incompressible and can smash valves and scrolls (slugging), and it washes out the oil",
              "Liquid is too cold for the motor",
              "It would increase the superheat",
              "Liquid raises the discharge pressure slightly",
            ],
            answer: 0,
            explain: "Compressors pump vapour. Liquid cannot be squeezed, so it hammers the mechanism, and it dilutes the lubricating oil — both destroy compressors.",
          },
          {
            q: "A hermetic compressor is one where…",
            options: [
              "the motor is mounted outside and drives through a shaft seal",
              "the motor and pump are sealed inside a welded steel shell",
              "there are no valves",
              "the casing can be unbolted for rebuild",
            ],
            answer: 1,
            explain: "Hermetics are welded shut with the motor inside, cooled by suction vapour. Semi-hermetics bolt together; open drives have external motors.",
          },
          {
            q: "An inverter (variable-speed) compressor controls capacity by…",
            options: [
              "bypassing hot gas",
              "changing its rotational speed to match the load",
              "opening its shell to the atmosphere",
              "switching refrigerants",
            ],
            answer: 1,
            explain: "Variable-speed drives slow the compressor when load falls, saving energy and avoiding constant stop/start cycling.",
          },
        ],
      },
      {
        id: "metering-devices",
        title: "Metering devices: cap tube, TXV, EEV",
        minutes: 8,
        simple: "The metering device is a tiny adjustable doorway between the high- and low-pressure sides. Too small an opening starves the coil (weak cooling); too wide floods it (liquid heads for the compressor — dangerous). A TXV is a self-adjusting doorway: a little temperature feeler on the outlet pipe opens and closes it so the coil gets exactly as much liquid as it can boil.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerant flow controls: capillary tubes, TXVs and EEVs",
        ],
        content: `
The metering device has two jobs: hold back the high-side pressure, and feed
the evaporator *exactly* as much liquid as the load can boil off. Too little
and the coil starves; too much and liquid floods back to the compressor.

## Capillary tube (and fixed orifice)

A long, very fine tube — no moving parts, nothing to adjust, almost nothing
to fail. The catch: it cannot adapt. Flow is fixed by the tube's bore and
length, so the system only runs correctly at one design condition, and the
**refrigerant charge becomes critical** — a few grams over or under shows up
immediately. Used on fridges, freezers and small AC.

## Thermostatic expansion valve (TXV)

The workhorse of commercial refrigeration. A TXV *measures superheat* at the
evaporator outlet and adjusts flow to hold it steady (typically 4–8 K):

- A **sensing bulb** clamped to the suction line at the coil outlet contains a fluid that tracks line temperature — warmer bulb, higher bulb pressure, valve opens.
- Evaporator pressure and a spring push the other way.
- The balance point keeps the coil as full as possible *without* letting liquid escape.

!FIG[txv-balance]

Because it controls superheat, a healthy TXV automatically compensates for
load changes. Failure modes you will meet: bulb loses its charge (valve
slams shut — starved coil), bulb loses contact with the pipe (valve overfeeds
— floodback), valve **hunting** (over-and-back swings from an oversized valve
or poor bulb location), and blockage at the inlet screen.

## Electronic expansion valve (EEV)

A stepper-motor valve driven by a controller reading pressure and temperature
sensors. Faster and more precise than a TXV, works over a huge load range,
and essential for inverter systems and transcritical CO2. Diagnosis shifts
from mechanics to electronics: check sensors, wiring and drive signals.

>! When replacing a TXV bulb, position matters: clamp it firmly to a clean
> horizontal section of suction line at the coil outlet (roughly 4 or 8
> o'clock on the pipe), and insulate it. A loose or badly placed bulb reads
> the air, not the pipe — and floods the coil.

!SIM[Simulate a TXV stuck closed](fault=txvStuckClosed)
!SIM[Simulate a TXV stuck open](fault=txvStuckOpen)
`,
        quiz: [
          {
            q: "A TXV adjusts its opening to hold a steady…",
            options: ["subcooling", "superheat at the evaporator outlet", "discharge temperature", "compressor speed"],
            answer: 1,
            explain: "The sensing bulb and equalisation balance the valve so evaporator-outlet superheat stays near its setting — the coil stays fed but never floods.",
          },
          {
            q: "Why is refrigerant charge critical on a capillary-tube system?",
            options: [
              "The tube corrodes if overcharged",
              "A fixed restriction cannot adapt, so any extra or missing charge directly shifts the operating balance",
              "Cap tubes contain a sensing bulb",
              "It is not — cap tubes self-adjust",
            ],
            answer: 1,
            explain: "With no ability to modulate flow, the system balance is set entirely by the charge and the tube. That is why fridges specify charge to the gram.",
          },
          {
            q: "A TXV whose sensing bulb has lost its charge will…",
            options: [
              "overfeed and flood the compressor",
              "close down and starve the evaporator",
              "hold perfect superheat",
              "raise the condensing pressure",
            ],
            answer: 1,
            explain: "Bulb pressure is what pushes the valve open. Lose it and the spring wins: the valve closes, suction pressure drops and superheat runs very high — a starved coil.",
          },
        ],
      },
      {
        id: "heat-exchangers",
        title: "Condensers and evaporators",
        minutes: 7,
        simple: "The two coils are just radiators: one soaks heat up indoors (evaporator), one sheds it outdoors (condenser). Both live and die by airflow — a coil blocked with dirt or ice is like breathing through a straw. And frost is sneaky: it insulates the coil, which makes it run colder, which grows MORE frost. That runaway loop is why freezers defrost themselves on a schedule.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — condensers and evaporators; defrost fundamentals",
        ],
        content: `
The two coils are where the system actually touches the world. Both live or
die by **surface area, temperature difference and airflow**.

## The condenser: three jobs in one coil

Hot discharge gas enters one end; warm liquid leaves the other. In between,
three zones:

1. **Desuperheating** — the gas cools from discharge temperature down to condensing temperature.
2. **Condensing** — the long middle section: vapour turns to liquid at constant temperature, rejecting latent heat.
3. **Subcooling** — the finished liquid cools a few degrees below saturation.

Air-cooled condensers are the norm; water-cooled (shell-and-tube, plate) and
evaporative types serve larger plant. A condenser typically runs **10–15 K
above the entering air temperature** — that gap is the condensing TD. Anything
that steals surface or airflow (dirt, leaves, a dead fan, recirculating hot
air) raises the TD, the head pressure and the power bill together.

## The evaporator

The same physics in reverse: refrigerant boils inside while air (or water)
gives up heat outside. In a **direct-expansion (DX)** coil the metering device
feeds just enough liquid that the last of it boils near the outlet, leaving a
few degrees of superheat.

Evaporator TD matters for humidity too: a big air-to-coil TD wrings more
moisture out of the air. Cool rooms for vegetables use small TDs to keep
produce from drying out; freezers do not care.

## Frost: the slow strangler

!FIG[frost-spiral]

Any coil running below 0°C grows frost. Frost is an insulator **and** an
airflow blocker, so heat transfer falls, suction pressure drops, the coil
runs colder, and frost grows faster — a feedback loop that ends in an iced
solid coil, collapsed superheat and floodback risk. That is why freezer-room
evaporators are defrosted on a schedule (next module) and why "iced-up coil"
is one of the classic faults in the simulator.

!SIM[Watch an iced evaporator strangle the system](fault=icedEvaporator)
`,
        quiz: [
          {
            q: "In order, the three zones of a condenser are…",
            options: [
              "subcooling → condensing → desuperheating",
              "desuperheating → condensing → subcooling",
              "condensing → desuperheating → subcooling",
              "boiling → superheating → condensing",
            ],
            answer: 1,
            explain: "The entering gas first sheds its superheat, then condenses at constant temperature through most of the coil, then the liquid subcools slightly before leaving.",
          },
          {
            q: "A healthy air-cooled condenser typically condenses at…",
            options: [
              "the same temperature as the entering air",
              "about 10–15 K above the entering air temperature",
              "about 30–40 K below ambient",
              "exactly 40°C regardless of ambient",
            ],
            answer: 1,
            explain: "Heat needs a temperature difference to flow. The condensing TD is normally around 10–15 K; a bigger gap signals a heat-rejection problem.",
          },
          {
            q: "Frost on an evaporator hurts performance because it…",
            options: [
              "adds weight to the coil",
              "insulates the surface and blocks airflow, and the effect feeds on itself",
              "increases the refrigerant charge",
              "raises the suction pressure",
            ],
            answer: 1,
            explain: "Frost is trapped air and ice — an insulator — and it chokes the air path. Less heat in → colder coil → more frost: a runaway that ends with an iced-solid coil.",
          },
        ],
      },
      {
        id: "accessories",
        title: "The supporting cast: receivers, driers, sight glasses and friends",
        minutes: 7,
        simple: "Around the four big parts is a pit crew. The receiver is a tank of spare liquid. The filter-drier is a water-and-dirt trap (moisture is poison inside the pipes). The sight glass is a little window — bubbles mean trouble. The accumulator is a catch-pot that stops liquid slugging the compressor. None of them change the refrigerant — they keep the main act on stage.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — system accessories: receivers, driers, sight glasses, accumulators and controls",
        ],
        content: `
Around the four main components sits a cast of smaller parts. None of them
changes the refrigerant's state in the cycle sense, but systems do not run
long or safely without them.

## On the liquid line

- **Receiver** — the liquid storage buffer after the condenser. Handles charge variation with load and seasons; provides a place to *pump down* the charge for service.
- **Filter-drier** — a canister of desiccant and mesh that traps **moisture, acid and debris**. Moisture is refrigeration's poison: it freezes into ice at the metering device and reacts with oil and refrigerant to form acids that eat motor windings. Replace the drier every time the circuit is opened.
- **Sight glass** — a window in the liquid line, usually with a moisture indicator dot. A clear glass means solid liquid; **bubbles or foam mean flash gas** — undercharge, a restriction upstream, or not enough subcooling. The dot changes colour (green = dry, yellow = wet) as a moisture warning.
- **Solenoid valve** — an electrically operated stop valve, the key player in pump-down circuits (close the solenoid, let the compressor empty the low side, then stop it on the low-pressure switch).

## On the suction line

- **Accumulator** — a trap that catches liquid floodback before it reaches the compressor, letting it boil off safely. Standard on heat pumps and systems that defrost.
- **Suction filter** — protects the compressor after a burnout or contamination event.

## Around the compressor

- **Oil separator** — on the discharge of larger plant: catches oil leaving the compressor and returns it, keeping the heat exchangers oil-free and the crankcase full.
- **Crankcase heater** — a warm belt or element that keeps refrigerant from condensing into the oil on the off-cycle (cold oil full of refrigerant foams violently at start-up).
- **HP/LP safety switches** — cut the compressor on dangerous head pressure or a collapsed suction (loss of charge). They are the last line of defence, not a control strategy.

> On the simulator schematic you will find the receiver on the liquid line;
> restricted-drier and low-charge faults both show their signatures around it.

!SIM[Simulate a restricted filter-drier](fault=restrictedDrier)
`,
        quiz: [
          {
            q: "The filter-drier's most important job is to…",
            options: [
              "store excess refrigerant",
              "trap moisture (plus acid and debris) that would form ice and acids in the system",
              "add oil to the refrigerant",
              "control superheat",
            ],
            answer: 1,
            explain: "Moisture freezes at the metering device and breeds acid. The drier's desiccant captures it — and a new drier is fitted every time the circuit is opened.",
          },
          {
            q: "Bubbles in the liquid-line sight glass usually mean…",
            options: [
              "the system is perfectly charged",
              "flash gas — undercharge, an upstream restriction, or insufficient subcooling",
              "too much oil",
              "the compressor is off",
            ],
            answer: 1,
            explain: "The sight glass should show a solid column of liquid. Bubbles mean some of it has flashed to vapour — there is not a full feed of liquid reaching the metering device.",
          },
          {
            q: "A suction-line accumulator protects the compressor by…",
            options: [
              "raising the suction pressure",
              "trapping liquid floodback and letting it boil off before it reaches the compressor",
              "filtering acid from the oil",
              "storing high-pressure liquid",
            ],
            answer: 1,
            explain: "The accumulator is a catch-pot on the suction line. Liquid that would have slugged the compressor collects there and evaporates safely.",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 4 — Refrigerants & the environment
     ====================================================================== */
  {
    id: "refrigerants",
    title: "4 · Refrigerants & the environment",
    blurb: "The refrigerant families and numbering, the environmental rules that reshaped the industry, and the safety classes that decide how each fluid must be handled.",
    lessons: [
      {
        id: "families-numbering",
        title: "Refrigerant families and numbering",
        minutes: 7,
        simple: "Refrigerant names work like number plates — the number tells you the family. The old chlorine ones (R12, R22) chewed the ozone layer and are gone. Today's HFCs (R134a, R410A) are ozone-safe but strong greenhouse gases, so they're being wound down too. The new crowd: mildly flammable synthetics like R32, and naturals like propane, CO2 and ammonia. Blends (the R4xx ones) are cocktails — charge them as liquid so the recipe stays right.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerants: families, blends and natural refrigerants",
          "Australia & New Zealand Refrigerant Handling Code of Practice, Parts 1 & 2 (ARC/ARCtick, current edition)",
        ],
        content: `
Hundreds of fluids have been used as refrigerants. The R-number system tames
the zoo — and the family a refrigerant belongs to tells you its history and
its future.

## The families

| Family | Chemistry | Examples | Status |
|--------|-----------|----------|--------|
| CFC | Chlorine + fluorine + carbon | R12, R11 | Banned (ozone) |
| HCFC | Adds hydrogen, less chlorine | R22 | Phased out (ozone) |
| HFC | No chlorine | R134a, R404A, R410A | Being phased *down* (warming) |
| HFO | Unsaturated HFC | R1234yf, R1234ze | Current low-GWP synthetics |
| Naturals | Not synthetic | R717 ammonia, R744 CO2, R290 propane, R600a isobutane | Growing fast |

## Reading the numbers

- **R7xx = naturals**: the last two digits are the molecular weight — R717 is ammonia (17), R744 is CO2 (44).
- **R4xx = zeotropic blends** — mixtures whose components boil at slightly different temperatures. R404A, R410A and R407C live here.
- **R5xx = azeotropic blends** — mixtures that behave like a single fluid.
- Lower numbers (R12, R22, R134a) encode the molecule's carbon/hydrogen/fluorine counts — you do not need to decode them in the field, just recognise them.

## Glide: the blend catch

Because a zeotropic blend's components boil at different temperatures, the
blend does not boil at *one* temperature — it slides across a small range
called **temperature glide**. Practical consequences:

- PT charts for blends show two values: **bubble point** (use for subcooling) and **dew point** (use for superheat).
- Blends must be **charged as liquid** from the cylinder, or the mixture that leaves the bottle will not match the label.
- R410A's glide is tiny (near-azeotropic); R407C's is large (over 5 K) — know your fluid.

> The four refrigerants in the simulator span the story: R22 (the HCFC
> workhorse, now banned from new equipment in most countries), R134a and
> R404A (HFCs being phased down), and R410A (the high-pressure HFC blend of
> the modern AC fleet, itself now giving way to R32 and HFOs).

!SIM[Compare the four fluids' P–h domes](r=R404A)
`,
        quiz: [
          {
            q: "R717 is…",
            options: ["propane", "carbon dioxide", "ammonia", "an HFC blend"],
            answer: 2,
            explain: "The 700 series is the naturals, numbered by molecular weight: ammonia's molecular weight is 17, so R717. CO2 (44) is R744.",
          },
          {
            q: "400-series refrigerants (R404A, R410A, R407C) are…",
            options: [
              "single pure fluids",
              "zeotropic blends whose components boil at slightly different temperatures (glide)",
              "all flammable naturals",
              "obsolete CFCs",
            ],
            answer: 1,
            explain: "The 400 series are zeotropic mixtures. Their temperature glide means bubble/dew PT values and liquid charging.",
          },
          {
            q: "Why do HFCs like R134a have zero ozone depletion potential?",
            options: [
              "They contain no chlorine",
              "They are heavier than air",
              "They have no fluorine",
              "They break down instantly in sunlight",
            ],
            answer: 0,
            explain: "Ozone destruction was driven by chlorine. HFCs replaced the chlorine with hydrogen and fluorine — solving the ozone problem, though many still have high global-warming potential.",
          },
        ],
      },
      {
        id: "environment-law",
        title: "ODP, GWP and the rules of the game",
        minutes: 7,
        simple: "Two report cards decide a refrigerant's fate: ODP (does it damage the ozone layer?) and GWP (how strongly does it warm the planet?). What it means at the toolbag is simple: never let refrigerant escape, always recover it into a cylinder, and you need a licence to handle it — plus your business needs an authorisation to buy it. Venting gas isn't just sloppy, it's illegal.",
        refs: [
          "Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 (Cth) and its Regulations",
          "ARC licensing information — arctick.org (Refrigerant Handling Licences & Refrigerant Trading Authorisations)",
          "Australia & New Zealand Refrigerant Handling Code of Practice, Parts 1 & 2 (ARC/ARCtick, current edition)",
        ],
        content: `
Two numbers decided the fate of every refrigerant of the last forty years —
and they explain most of what is on the van today.

## ODP — ozone depletion potential

CFCs and HCFCs carry chlorine. Released high in the stratosphere, one
chlorine atom destroys thousands of ozone molecules, thinning the layer that
filters ultraviolet light. ODP measures that damage (R11 = 1.0 by
definition). The **Montreal Protocol (1987)** — the most successful
environmental treaty in history — phased out CFCs, then HCFCs like R22.

## GWP — global warming potential

GWP compares a gas's warming effect to CO2 over 100 years (CO2 = 1). The
HFCs that replaced the ozone-depleters turned out to be potent greenhouse
gases: R134a is about 1,430; R404A about 3,900. One kilogram of leaked R404A
warms like nearly four tonnes of CO2.

The **Kigali Amendment (2016)** added an HFC *phase-down* — a shrinking cap
on the amount (weighted by GWP) that can be produced and imported. That
pressure is what drives the industry toward R32 (GWP ≈ 675), the HFOs
(GWP < 10) and the naturals.

## What the rules mean at the tools

- **Venting refrigerant is illegal** in virtually every jurisdiction. Recover it — always.
- **Handling licences are mandatory.** In Australia, the Ozone Protection and
Synthetic Greenhouse Gas Management Act 1989 and its Regulations create the
scheme administered by the **Australian Refrigeration Council (ARC)** — the
ARCtick scheme. Individuals need a **Refrigerant Handling Licence (RHL)**:
the full refrigeration and air-conditioning licence, or a restricted class
(such as split-system installation and decommissioning, automotive air
conditioning, or restricted refrigerant recovery), with supervised **trainee
licences** for students. Businesses need a **Refrigerant Trading
Authorisation (RTA)** to acquire, possess and dispose of refrigerant — you
cannot buy fluorocarbon refrigerant without one. In the US it is EPA Section
608 certification; in Europe, F-gas certification.
- **The Codes of Practice are a licence condition** in Australia — the next lesson covers them.
- Systems must be **leak-tight and leak-tested**; larger plant has mandatory periodic leak inspection.
- Recovered refrigerant is reused, reclaimed, or destroyed — never released.

>! The cheapest kilogram of refrigerant is the one that never leaks.
> Leak-checking is not bureaucracy: a system that needs regular top-ups is
> both an environmental offence in progress and an unsolved service fault.

`,
        quiz: [
          {
            q: "GWP measures…",
            options: [
              "a refrigerant's ozone damage",
              "a refrigerant's warming effect compared with CO2",
              "the pressure at 20°C",
              "toxicity",
            ],
            answer: 1,
            explain: "Global-warming potential compares the greenhouse effect of 1 kg of the gas to 1 kg of CO2 over 100 years. R404A's ≈ 3,900 is why it is being abandoned.",
          },
          {
            q: "What must you do with refrigerant when opening a system for repair?",
            options: [
              "Vent it outdoors away from people",
              "Recover it into an approved cylinder with recovery equipment",
              "Burn it off",
              "Dissolve it in oil",
            ],
            answer: 1,
            explain: "Venting is illegal. Refrigerant is recovered into approved cylinders for reuse, reclaim or destruction — and handling it requires a licence.",
          },
          {
            q: "The Kigali Amendment targets…",
            options: [
              "a phase-down of high-GWP HFCs",
              "the banning of ammonia",
              "compulsory use of R22",
              "the end of the Montreal Protocol",
            ],
            answer: 0,
            explain: "Kigali extends the Montreal Protocol to greenhouse-gas refrigerants: a stepwise cap-and-reduce on HFC production and import, weighted by GWP.",
          },
        ],
      },
      {
        id: "safety-classes",
        title: "Safety classes: A1, A2L, A3, B2L",
        minutes: 7,
        simple: "Every refrigerant wears a safety badge: a letter for toxicity (A = kinder, B = nastier) and a number for flammability (1 = won't burn, 2L = lights reluctantly, 3 = basically BBQ gas). R32 is a 2L — keep sparks and flames away. Propane is a 3 — treat every leak like a gas leak. Ammonia is the B — toxic, but at least it announces itself with a stink you can't ignore.",
        refs: [
          "AS/NZS 5149 series — Refrigerating systems and heat pumps: safety and environmental requirements",
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerant safety groups and handling",
          "Australia & New Zealand Refrigerant Handling Code of Practice, Parts 1 & 2 (ARC/ARCtick, current edition)",
        ],
        content: `
As GWP limits push out the old HFCs, their replacements bring new hazards —
mild flammability, real flammability, toxicity, or extreme pressure. The
safety classification tells you which, at a glance.

## The two-part code

- **Letter — toxicity**: **A** = lower toxicity, **B** = higher toxicity.
- **Number — flammability**: **1** = no flame propagation, **2L** = mildly flammable (low burning velocity), **2** = flammable, **3** = highly flammable.

| Class | Meaning | Examples |
|-------|---------|----------|
| A1 | Non-flammable, lower toxicity | R134a, R410A, R404A, R744 (CO2) |
| A2L | Mildly flammable | R32, R1234yf, R454B |
| A3 | Highly flammable | R290 (propane), R600a (isobutane) |
| B2L | Toxic and mildly flammable | R717 (ammonia) |

## What each class demands

- **A1** — the familiar rules: ventilation against asphyxiation, pressure discipline, recovery.
- **A2L** — no open flames or sparking tools near a possible leak; leak-check with tools rated for A2L; charge-size limits tied to room size; purge with nitrogen before brazing (which you should do anyway).
- **A3 (hydrocarbons)** — small charges only, strict charge limits, sealed electrical components, dedicated (often compact) equipment. Treat every leak as an ignition risk.
- **B2L (ammonia)** — industrial territory: pungent (self-alarming), toxic at height of exposure, mildly flammable. Plant rooms carry detection, ventilation and emergency procedures. Ammonia attacks copper — its systems are steel.
- **R744 (CO2)** — non-flammable and cheap, but operates at brutal pressures (transcritical systems exceed 100 bar) with equipment engineered specifically for it, and a large leak can displace oxygen fast.

>! Never assume the fluid. Check the nameplate and the service tags, and if a
> system smells of hydrocarbons or the label says A2L/A3, control ignition
> sources *before* connecting anything. The gauges do not care — you should.

`,
        quiz: [
          {
            q: "An A2L refrigerant such as R32 is…",
            options: [
              "highly toxic",
              "mildly flammable with lower toxicity",
              "non-flammable",
              "only used in chillers",
            ],
            answer: 1,
            explain: "A = lower toxicity, 2L = mildly flammable with low burning velocity. It demands ignition-source control and A2L-rated tools, though it is far less volatile than propane.",
          },
          {
            q: "R290 (propane) belongs to safety class…",
            options: ["A1", "A2L", "A3", "B2L"],
            answer: 2,
            explain: "Hydrocarbons are highly flammable — class A3 — which is why propane systems carry strict charge limits and sealed electrics.",
          },
          {
            q: "The letter B in a safety class (e.g. B2L ammonia) indicates…",
            options: ["a blend", "higher toxicity", "higher pressure", "biodegradable"],
            answer: 1,
            explain: "The letter grades toxicity: A lower, B higher. Ammonia is toxic (and mildly flammable), hence B2L — with detection and ventilation requirements to match.",
          },
        ],
      },
      {
        id: "australian-rulebook",
        title: "The Australian rulebook: ARCtick, the Code of Practice and the standards",
        minutes: 8,
        simple: "Think of the Australian rules as layers. The LAW says you need a licence and must never vent refrigerant. The CODE OF PRACTICE is the how-to rulebook your licence expects you to follow. The STANDARDS (like AS/NZS 3000 for wiring) are the engineering fine print. And the ARAC volumes are the trade's textbooks. You don't memorise them all — you learn which book answers which question, and you always use the current edition.",
        refs: [
          "Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 (Cth) and its Regulations",
          "Australia & New Zealand Refrigerant Handling Code of Practice, Parts 1 & 2 (ARC/ARCtick, current edition)",
          "ARC licensing information — arctick.org (Refrigerant Handling Licences & Refrigerant Trading Authorisations)",
          "AS/NZS 5149 series — Refrigerating systems and heat pumps: safety and environmental requirements",
          "AS/NZS 3000 Wiring Rules (Standards Australia) — topic-level reference only; consult the current edition",
          "Australian Refrigeration and Air-conditioning (ARAC) Vols 1 & 2, Boyle — pub. AIRAH — the standard trade texts",
        ],
        content: `
Australian refrigeration work sits inside a specific legal and technical
framework. Knowing which document governs what is itself an assessable
competency — and it keeps your licence.

## The law: the Ozone Act and its Regulations

The **Ozone Protection and Synthetic Greenhouse Gas Management Act 1989
(Cth)** and its Regulations control the import, manufacture, use and disposal
of ozone-depleting substances and synthetic greenhouse gases — which is to
say, fluorocarbon refrigerants. The Regulations create the licensing scheme
that the **Australian Refrigeration Council (ARC)** administers on behalf of
the Australian Government — the scheme you know by its brand, **ARCtick**.

## The licences

- **Refrigerant Handling Licence (RHL)** — personal. The **full refrigeration
and air-conditioning licence** covers stationary RAC work generally;
**restricted classes** cover defined scopes such as split-system installation
and decommissioning, automotive air conditioning, and restricted refrigerant
recovery. **Trainee licences** allow supervised handling while studying, for
a limited period.
- **Refrigerant Trading Authorisation (RTA)** — business-level. Required to
**acquire, possess and dispose** of refrigerant; suppliers may only sell to
RTA holders, and the RTA carries record-keeping conditions.
- "Handling" is defined broadly: anything with a fluorocarbon refrigerant or
RAC component that **risks an emission** — decanting, installing,
commissioning, servicing, decommissioning.

## The Code of Practice

The **Australia & New Zealand Refrigerant Handling Code of Practice** is the
how-to that licence holders are expected to work to:

- **Part 1 — self-contained low charge systems** (small hermetic equipment).
- **Part 2 — everything else**: stationary and transport systems generally — recovery, evacuation, charging, leak testing, brazing practice and record keeping.

First published in 2007 and since updated (a revised edition was released in
the mid-2020s) — **always work to the current edition**, because equipment,
refrigerants (A2Ls especially) and methods have moved.

## The standards around the trade

- **AS/NZS 5149 series** — refrigerating systems and heat pumps: safety and environmental requirements (safety classes, charge limits, occupancy categories, machinery rooms).
- **AS/NZS 3000 (the Wiring Rules)** — electrical installations. The boundary matters: **fixed-wiring electrical work must be done by a licensed electrician under state and territory law**; RAC technicians work up to that boundary (and some hold state restricted electrical licences for defined tasks such as like-for-like disconnect/reconnect). Module 7 covers the working relationship.
- **AS/NZS 4836** — safe working on or near low-voltage electrical installations: the safe-isolation practices behind "test for dead".

## The trade texts

**Australian Refrigeration and Air-conditioning, Volumes 1 and 2** (Graham
Boyle, published by AIRAH) are the standard Australian teaching texts — Vol 1
for principles, components and systems; Vol 2 for the P–h diagram,
diagnostics, service techniques and heat-load work. This course's lessons
list them (and the Code and standards) in each lesson's references so you can
go deeper in the authoritative source.

>! Standards and the Code are living documents, and paid standards are
> copyright — this course aligns with them and cites them at topic level, but
> the current editions themselves are the authority you work (and are
> assessed) against. Your RTO or employer should hold current copies.
`,
        quiz: [
          {
            q: "A Refrigerant Trading Authorisation (RTA) is…",
            options: [
              "a personal licence to handle refrigerant",
              "a business-level authorisation required to acquire, possess and dispose of refrigerant",
              "a licence to perform electrical wiring work",
              "an import permit for equipment",
            ],
            answer: 1,
            explain: "The RTA is the business permit — suppliers may only sell refrigerant to RTA holders. The personal permit is the Refrigerant Handling Licence (RHL).",
          },
          {
            q: "Part 1 of the Refrigerant Handling Code of Practice covers…",
            options: [
              "self-contained low charge systems",
              "automotive air conditioning only",
              "ammonia plant",
              "electrical wiring",
            ],
            answer: 0,
            explain: "Part 1 covers small self-contained low-charge equipment; Part 2 covers other stationary and transport systems — recovery, evacuation, charging and leak-test practice.",
          },
          {
            q: "Fixed electrical wiring on an air-conditioning installation must be carried out by…",
            options: [
              "any ARCtick licence holder",
              "a licensed electrician under state/territory law, with the installation complying with AS/NZS 3000",
              "the equipment supplier",
              "anyone, if the power is off",
            ],
            answer: 1,
            explain: "The refrigerant licence and the electrical licence are separate regimes. Fixed wiring is licensed electrical work under state law, installed to the Wiring Rules (AS/NZS 3000).",
          },
        ],
      },
    ],
  },

  /* ======================================================================
     Module 5 — Superheat & subcooling
     ====================================================================== */
  {
    id: "superheat-subcooling",
    title: "5 · Superheat & subcooling",
    blurb: "The two numbers that turn gauge readings into diagnosis: how to measure them properly, and what every combination is telling you.",
    lessons: [
      {
        id: "measuring-sh-sc",
        title: "Measuring superheat and subcooling",
        minutes: 8,
        simple: "Superheat and subcooling sound fancy, but each is just a subtraction. Superheat: how many degrees warmer is the vapour than its boiling point? (pipe temperature minus the gauge's saturation temperature). Subcooling: how many degrees cooler is the liquid than its condensing point? Each needs two readings — a pressure from the gauge and a pipe temperature from a clamp thermometer. That's it.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — service diagnostics: superheat and subcooling measurement",
        ],
        content: `
Pressures alone tell you *where* the system is operating. Superheat and
subcooling tell you *what the refrigerant is doing* inside the coils — they
are the difference between guessing and diagnosing.

## The definitions

- **Superheat (SH)** = actual suction-line temperature − saturation temperature for the suction pressure. It measures how far past *finished boiling* the vapour is.
- **Subcooling (SC)** = saturation temperature for the head pressure − actual liquid-line temperature. It measures how far past *finished condensing* the liquid is.

Both are **differences**, measured in kelvin (K) — a superheat of 6 K means
the vapour is 6 degrees above its boiling point at that pressure.

## Measuring superheat, step by step

1. Read the **suction pressure** at the evaporator outlet (or service valve).
2. Convert it to **saturation temperature** with the PT chart (the gauge's inner ring, or the app).
3. Clamp a good **thermometer probe** to the suction line at the same point — clean pipe, firm contact, insulated over the probe.
4. **SH = line temperature − saturation temperature.**

!FIG[superheat-measure]

## Measuring subcooling

1. Read the **head pressure** and convert to saturation (condensing) temperature.
2. Measure the **liquid-line temperature** near the condenser outlet or receiver.
3. **SC = saturation temperature − line temperature.**

!FIG[subcool-measure]

## What healthy looks like

- Coil superheat: roughly **4–8 K** on a TXV system (the valve's setting); total superheat back at the compressor a little higher.
- Subcooling: roughly **4–10 K** on most air-cooled systems.

Exact targets vary by equipment — manufacturers' data wins — but *zero* and
*wild* are always wrong: 0 K superheat means liquid is reaching the
compressor; 25 K superheat means a starving coil.

> For blends with glide (R407C especially): use the **dew point** PT values
> for superheat and the **bubble point** values for subcooling.

!SIM[Read SH and SC live on the readout bar](r=R134a)
`,
        quiz: [
          {
            q: "Superheat is calculated as…",
            options: [
              "suction line temperature − saturation temperature at suction pressure",
              "head pressure − suction pressure",
              "condensing temperature − liquid line temperature",
              "discharge temperature − ambient",
            ],
            answer: 0,
            explain: "SH = measured suction-line temperature minus the saturation temperature the PT chart gives for the measured suction pressure.",
          },
          {
            q: "Measuring superheat requires…",
            options: [
              "a pressure reading only",
              "a temperature reading only",
              "both a pressure reading (converted via PT) and a line temperature at the same point",
              "a sight glass",
            ],
            answer: 2,
            explain: "Superheat and subcooling are differences between a PT-derived saturation temperature and an actual line temperature — you need both instruments.",
          },
          {
            q: "A subcooling of 0 K tells you…",
            options: [
              "the condenser has plenty of spare liquid",
              "the liquid line contains saturated liquid, likely with flash gas — no reserve of finished liquid",
              "the system is overcharged",
              "the TXV is perfectly adjusted",
            ],
            answer: 1,
            explain: "Zero subcooling means the liquid leaves the condenser right at saturation — any pressure drop will flash it to vapour. Classic sign of undercharge.",
          },
        ],
      },
      {
        id: "interpreting-sh-sc",
        title: "Interpreting SH & SC: the diagnostic matrix",
        minutes: 8,
        simple: "Those two numbers are a compass. High superheat = the coil is starving (not enough refrigerant arriving). Superheat near zero = the coil is flooding (liquid escaping toward the compressor — act fast). Low subcooling = almost no liquid in reserve. High subcooling = liquid piling up behind something. Put the pair together and the system practically names its own fault.",
        refs: [
          "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — diagnosing system condition from operating readings",
        ],
        content: `
Once you can measure superheat and subcooling, the pair becomes a fault
compass. Each combination points somewhere specific.

## The matrix

| Superheat | Subcooling | Points to |
|-----------|-----------|-----------|
| High | Low / zero | **Low charge** — not enough refrigerant anywhere |
| High | High | **Liquid-line restriction** (blocked drier, TXV underfeeding) — liquid backs up while the coil starves |
| Low / zero | Normal–low | **Overfeeding** (TXV stuck open, bulb loose) — floodback risk |
| Low | High | **Overcharge** on TXV systems — liquid backing into the condenser |
| Normal | Normal, but poor cooling | Look elsewhere: airflow, compressor valves, non-condensables |

## Why the logic works

Superheat answers: *is the evaporator getting the right amount of liquid?*

- **High SH** = the coil boiled off its feed too early → starved (by low charge or a restriction).
- **Low SH** = liquid is making it to the end of the coil → overfed (or airflow is too poor to boil what arrives — check the coil and fans before condemning the valve).

Subcooling answers: *how much finished liquid is stacked in the condenser?*

- **Low SC** = little liquid inventory → low charge (or extreme demand).
- **High SC** = liquid backing up → overcharge, a restriction downstream holding it back, or non-condensables squatting in the condenser.

## Discharge temperature: the tie-breaker

When SH/SC leave two candidates, the discharge line often splits them: a high
pressure ratio or leaking compressor valves runs the discharge *hot*;
floodback runs it *cool*. The simulator models this — watch the Discharge Gas
readout as you switch faults.

!SIM[Low charge: high SH, low SC](fault=lowCharge)
!SIM[Restricted drier: high SH, high SC](fault=restrictedDrier)
!SIM[Overcharge: low SH, high SC](fault=overcharge)

> Learn the matrix, but treat it as the *shortlist generator*. The field
> checks — look, listen, feel, temperature-drop tests — pick the final
> answer. That is exactly the workflow the Technician Quiz trains.
`,
        quiz: [
          {
            q: "High superheat together with low subcooling is the classic signature of…",
            options: ["overcharge", "low refrigerant charge", "a dirty condenser", "a stuck-open TXV"],
            answer: 1,
            explain: "With too little refrigerant the coil starves (high SH) and there is no liquid inventory in the condenser (low SC). Both ends run empty.",
          },
          {
            q: "High superheat together with HIGH subcooling suggests…",
            options: [
              "low charge",
              "a liquid-line restriction such as a blocked drier or underfeeding TXV",
              "a failed condenser fan",
              "normal operation",
            ],
            answer: 1,
            explain: "A restriction starves the coil (high SH) while liquid backs up behind the blockage (high SC). Feel for the temperature drop across the drier to localise it.",
          },
          {
            q: "Superheat near zero is dangerous because…",
            options: [
              "the discharge gets too hot",
              "liquid refrigerant may be reaching the compressor (floodback)",
              "the condenser will freeze",
              "subcooling must also be zero",
            ],
            answer: 1,
            explain: "Zero superheat means the vapour may still contain liquid at the coil outlet — and liquid in the suction line heads straight for the compressor.",
          },
        ],
      },
    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
