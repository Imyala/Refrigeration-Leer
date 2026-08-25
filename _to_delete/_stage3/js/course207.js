/* =========================================================================
   Course content, module 207 — Service charts, tables and cycle analysis.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 7 — Service charts,
   tables and analysis.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Ch 7, Service charts, tables and analysis",
    "AIRAH pressure–temperature chart and AIRAH psychrometric chart (101.325 kPa barometric)",
  ];

  const MODULES = [
    {
      id: "v2-service-charts",
      stream: "v2",
      title: "R2.7 · Service charts, tables and cycle analysis",
      blurb: "Reading pressure–temperature charts, pressure–enthalpy diagrams and psychrometric charts, then using them to plot a real cycle and prove whether a plant is performing.",
      lessons: [

        /* ============================================================== */
        {
          id: "pt-charts",
          title: "Pressure–temperature charts and what a gauge really tells you",
          minutes: 10,
          simple: "A pressure gauge on a refrigeration system is really a thermometer in disguise. While liquid and vapour sit together in the evaporator or condenser, one pressure can only mean one temperature, the way a boiling kettle at sea level can only be at 100 degrees. The pressure–temperature chart is the lookup table that turns the gauge reading into that temperature.",
          refs: REFS,
          content: `
A technician does not fit gauges to admire the pressures. Gauges are fitted to
find out **what temperature the refrigerant is at** in the two places that
matter: boiling in the evaporator, and condensing in the condenser. Everything
else in fault-finding hangs off those two numbers.

The link between the two is the **pressure–temperature relationship**: for any
pure liquid, at a given pressure there is only one temperature at which it will
boil. Raise the pressure and the boiling point rises. Drop the pressure and it
falls. So long as liquid and vapour are present together — the *saturated*
condition — pressure and temperature are locked to each other.

!FIG[pt-curve]

## What the chart contains

A pressure–temperature (PT) chart is nothing more than that relationship
tabulated, refrigerant by refrigerant, usually in **kPa gauge** down one axis
and **°C** down the other. Australian charts such as the AIRAH one cover
everything from about -100°C to +70°C in 2.5 K steps, and print CFC, HCFC and
HFC refrigerants side by side so a replacement can be compared with what it
replaced.

Here is the shape of the data, rebuilt for five refrigerants you will meet in
the field. All pressures are **kPa gauge** — that is, what a manifold gauge
actually reads.

| Saturation temp (°C) | R134a | R22 | R404A | R507 | R717 (ammonia) |
|---|---|---|---|---|---|
| -20 | 33 | 145 | 197 | 217 | 90 |
| -10 | 101 | 254 | 326 | 353 | 190 |
| 0 | 193 | 397 | 494 | 528 | 328 |
| +30 | 670 | 1092 | 1309 | 1365 | 1063 |
| +40 | 916 | 1433 | 1712 | 1779 | 1453 |
| +50 | 1218 | 1842 | — | — | 1928 |

Two things jump out. First, at the same temperature the refrigerants sit at
wildly different pressures — R134a at 33 kPa where R507 is at 217 kPa. Second,
some of the low-temperature figures for R134a run into **vacuum** (negative
gauge pressure), which is why a compound gauge is essential on low-temperature
R134a work.

## Gauge, absolute and bar

- **Gauge pressure** is measured above atmosphere. It is what the needle shows.
- **Absolute pressure** = gauge + atmospheric (take **101.3 kPa** at sea level).
- **1 bar = 100 kPa**, and 1 psi = 6.895 kPa.

PT charts are printed in gauge because that is what you read. Pressure–enthalpy
diagrams are printed in **bar absolute**, because the thermodynamics only works
in absolute units. Converting between the two is the single most common
arithmetic slip in cycle analysis, so do it deliberately every time.

## Worked example 1 — finding saturated suction temperature

A plant runs on **R507**. The compound gauge reads **10 kPa**.

Lay a straight edge across the chart at 10 kPa in the R507 column and read the
temperature at the left: **-45°C**. That is the *saturated suction temperature*
(SST) — the temperature at which liquid refrigerant is boiling in the
evaporator. It is not the suction line temperature, and it is not the air
temperature. It is the boiling point the compressor is holding.

## Worked example 2 — identifying an unmarked cylinder

A cylinder has lost its label. A gauge is fitted and reads **810 kPa**. The
cylinder has been sitting in the workshop, and its skin temperature measures
**20°C**.

The refrigerant inside is saturated (liquid and vapour together), so at 20°C
its pressure must match its own PT curve. Read across the chart at 20°C and
look for 810 kPa. It falls in the **R22** column, so the cylinder is R22.

>! Never trust this test alone before charging a system. A cylinder holding a
>! mixture, or one contaminated with air, will still show *a* pressure. Confirm
>! with a refrigerant identifier before the gas goes into a customer's plant,
>! and remember that under the Refrigerant Handling Code of Practice an
>! unidentified refrigerant is treated as contaminated and recovered, not used.

## Blends, glide and the two columns

Look at a modern chart and you will see zeotropic blends such as R404A, R407C,
R410A and R401A printed with **two** columns, headed something like "liquid"
and "vapour". A blend does not boil at one temperature — its components boil
at slightly different ones, so the saturation temperature slides as the mixture
evaporates. That slide is **temperature glide**.

- The **liquid** column is the **bubble point** — the temperature at which the
  liquid first starts to boil. Use it for **subcooling** calculations.
- The **vapour** column is the **dew point** — the temperature at which the last
  droplet vaporises. Use it for **superheat** calculations.

R410A and R404A have glide small enough (well under 1 K for R410A, around 0.5 K
for R404A) to ignore in the field. R407C has around 5 to 7 K of glide, and using
the wrong column there will put your superheat out by several kelvins.

!FIG[gauge-pt-ring]

## Where else the same data lives

- **Printed pocket charts** — laminated, refrigerant-specific, still the fastest
  tool on a ladder.
- **The scales on an analogue gauge face** — the coloured rings around the dial
  are PT curves for two or three common refrigerants. Handy, but the ring is
  only as accurate as the printing and it will not cover blends properly.
- **Digital manifolds** — you select the refrigerant and the instrument displays
  SST and SCT (saturated condensing temperature), plus superheat and subcooling,
  directly. Check that the refrigerant selected matches the label on the plant.
- **The pressure–enthalpy diagram** — carries the same saturation data plus
  everything else about the refrigerant, but for one refrigerant at a time.

## What to remember

- Gauge pressure only means a temperature while liquid and vapour coexist.
- SST comes from the low-side gauge, SCT from the high-side gauge.
- Always know whether you are working in gauge or absolute; add 101.3 kPa to get
  absolute.
- On a blend, pick the dew-point column for superheat and the bubble-point
  column for subcooling.
- New refrigerants appear faster than charts get reprinted; check with the
  wholesaler or the manufacturer's data if your chart does not list it.
`,
          quiz: [
            {
              q: "A digital manifold on an R404A system shows 353 kPa on the low side. What does the corresponding -10°C tell you?",
              options: [
                "The suction line is at -10°C",
                "Liquid refrigerant is boiling in the evaporator at about -10°C",
                "The air leaving the evaporator is -10°C",
                "The compressor discharge is -10°C",
              ],
              answer: 1,
              explain: "A saturation temperature read from pressure applies only where liquid and vapour coexist — inside the evaporator. The suction line is superheated vapour and will be warmer; the air is warmer still.",
            },
            {
              q: "Why are pressure–enthalpy diagrams printed in bar absolute while PT charts are printed in kPa gauge?",
              options: [
                "Because P–h diagrams were developed in Europe",
                "Because gauge pressure cannot be negative",
                "Because thermodynamic property relationships and compression ratio only work in absolute pressure, whereas gauge is what a manifold reads",
                "Because bar is a larger unit and keeps the chart small",
              ],
              answer: 2,
              explain: "Compression ratio and property data need absolute pressure — a ratio taken on gauge readings is meaningless. The PT chart is a field tool, so it is printed in the units the needle shows.",
            },
            {
              q: "On an R407C system you want to calculate superheat. Which column of the PT chart do you use?",
              options: [
                "The liquid (bubble point) column",
                "The vapour (dew point) column",
                "The average of both columns",
                "Either — the difference is negligible",
              ],
              answer: 1,
              explain: "Superheat is measured from the point where the last liquid has vaporised, which is the dew point. R407C has roughly 5 to 7 K of glide, so using the bubble-point column would overstate superheat by that much.",
            },
            {
              q: "A gauge on an unmarked cylinder at 20°C reads 810 kPa, matching R22 on the chart. What is the correct next step?",
              options: [
                "Charge the system with it, the pressure confirms R22",
                "Vent a little to check the smell",
                "Confirm with a refrigerant identifier before using it, or recover it as unknown",
                "Warm the cylinder and re-check the pressure",
              ],
              answer: 2,
              explain: "A single pressure point is a clue, not proof — mixtures and air-contaminated gas can read the same. Under the Refrigerant Handling Code of Practice, refrigerant of unproven identity must not be charged into a customer's system.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "expected-saturation",
          title: "Working out what the pressures should be",
          minutes: 13,
          simple: "Before you can say a pressure is wrong, you have to know what it should have been. Two simple tables do that: one says how far below the room air the refrigerant must boil, and one says how far above the outdoor air it must condense. It is like knowing a healthy pulse before you decide someone is unwell.",
          refs: REFS,
          content: `
Fitting gauges gives you two saturation temperatures. On their own they mean
nothing. The skill is knowing what those two temperatures *ought* to be for this
room, this product and today's ambient — then judging the difference.

## The evaporator side: temperature difference to air

An evaporator is sized so the refrigerant boils a set number of kelvins below
the air entering the coil. That gap — usually written **TD** — is a design
decision, and it is chosen mainly to control **humidity**. A big TD makes a very
cold coil, which pulls a lot of moisture out of the air and dries the produce
out. A small TD keeps the coil closer to the room temperature, holds humidity up
and keeps unwrapped produce from dehydrating — but it needs more coil surface.

The rule is:

**Saturated suction temperature = storage temperature − TD**

Typical design differences, in kelvins:

| Application | Room temp | Target RH | TD, forced draught | TD, natural draught |
|---|---|---|---|---|
| Eggs, dairy, vegetables | 3°C | 90–95% | 5 K | 9 K |
| Fruit | 2°C | 85–90% | 6 K | 11 K |
| Cut meats | 1°C | 85–90% | 6 K | 11 K |
| Carcase meat | 3°C | 80–85% | 8 K | 14 K |
| Cheese, packaged and bottled goods | 3°C | 70–80% | 10 K | 16 K |
| Frozen goods store | -20°C | 85–90% | 6 K | 13 K |
| Room air-conditioner | 24°C | 50% | 20 K | — |
| Frozen food merchandiser | -20°C | — | 15–17 K | — |
| Meat merchandiser | 0°C | — | 12 K | — |
| Dairy merchandiser | 3°C | — | 12 K | — |

Notice the pattern: the higher the humidity the product needs, the *smaller* the
TD. Notice too that natural-draught (gravity coil) evaporators need roughly
double the TD of a fan coil, because still air transfers heat so much less
readily.

### Worked example — the butcher's coolroom

A carcase-meat coolroom is meant to hold **3°C** but is sitting at **6°C**. The
evaporator is forced draught, refrigerant **R134a**, and the suction gauge reads
**101 kPa**, which the PT chart says is **-10°C**.

1. Carcase meat, forced draught → TD ≈ **8 K**.
2. SST = room − TD = 3°C − 8 K = **-5°C**.
3. From the PT chart, R134a at -5°C = **143 kPa**.

So when the room finally pulls down to 3°C the gauge should settle near 143 kPa.
Right now it reads 101 kPa with the room 3 K *warmer* than design — the suction
is far lower than it should be for that load. That is a starved evaporator, and
you go looking for a restriction, a shortage of charge or an airflow problem.

### Worked example — the freezer cabinet

A freezer with plate (natural draught) evaporators runs at **-17°C** on
**R507**. What suction should you expect?

1. Frozen goods, natural draught → TD ≈ **13 K**.
2. SST = -17°C − 13 K = **-30°C**.
3. R507 at -30°C = **114 kPa** gauge.

## Why suction reads low, and why it reads high

| Suction lower than expected | Suction higher than expected |
|---|---|
| Short of refrigerant | Room or cabinet temperature is high (heavy load, door left open, hot loading) |
| Restricted filter drier or metering device | Head pressure higher than normal — badly felt on capillary systems, where the capillary feeds more when head pressure rises |
| Oil-logged evaporator | Evaporator over-fed with liquid (TX valve set too open, or hunting) |
| Suction line too long, undersized or restricted | Compressor inefficient — worn or leaking valves, so it cannot pull the suction down |
| Airflow over the coil restricted: heavy frost, close-stacked stock, failed or reversed fan | |
| Room temperature has pulled down below setpoint | |
| Evaporator undersized for the duty | |
| Head pressure low in cold weather — less pressure difference across the metering device, so it starves the coil | |

!FIG[frost-spiral]

!SIM[Watch suction fall as the evaporator ices up](fault=icedEvaporator)

> Three field notes worth memorising. First, the **surface** of the evaporator
> normally sits 2 to 4 K warmer than the refrigerant, so where you cannot fit
> gauges the coldest fin temperature is a fair estimate of SST. Second, the
> **suction line temperature has no direct relationship to SST** — it is
> superheated vapour and depends on superheat, not pressure. Third, maximum
> capacity comes when the SST actually equals the figure the TD table predicts;
> running colder than that does not make the room colder faster.

## The condenser side: temperature difference to ambient

The same logic applies at the high side. An air-cooled condenser is sized to
reject heat with a set difference between the condensing temperature and the
air entering it:

**Condensing temperature = ambient air temperature + TD**

The condenser TD is not a single number — it depends on the **design ambient**
the unit was selected for and on the **suction temperature**, because a
low-temperature plant rejects proportionally more heat per kilowatt of cooling.
Manufacturers publish this as a family of curves (one per design ambient) with
SST along the bottom. Read down from your SST to the curve for the design
ambient, and read the TD off the side. Broadly, TD runs around **5 K** at very
low suction temperatures and **10 to 15 K** at air-conditioning suction
temperatures.

### Worked example — freezer, R507

Cabinet at **-30°C** SST, unit selected for a **30°C** design ambient, actual
ambient **35°C**.

1. At -30°C suction, TD from the curve ≈ **5 K**.
2. SCT = 35°C + 5 K = **40°C**.
3. R507 at 40°C = **1779 kPa** gauge.

### Worked example — coolroom, R134a

Packaged goods room, **-10°C** SST, unit selected for **35°C** ambient, actual
ambient **40°C**.

1. At -10°C suction on the 35°C design curve, TD ≈ **10 K**.
2. SCT = 40°C + 10 K = **50°C**.
3. R134a at 50°C = **1218 kPa** gauge.

### Worked example — air-conditioner, R22

**+5°C** SST, actual ambient **35°C**, unit selected for **40°C** ambient.

1. At +5°C suction on the 40°C design curve, TD ≈ **10 K**.
2. SCT = 35°C + 10 K = **45°C**.
3. R22 at 45°C = **1629 kPa** gauge.

In much of inland Australia, ambients above 45°C mean condensing temperatures of
60°C and higher are perfectly normal in summer. Judge the reading against the
day, not against a number you memorised in a workshop in June.

## Why condensing temperature matters so much

**Capacity falls by roughly 1% for every 1 K rise in condensing temperature.**
A condenser fouled enough to push SCT up 10 K has quietly stolen a tenth of the
plant. That is why the causes are worth knowing cold.

| Condensing too high | Condensing too low |
|---|---|
| Recirculating hot air, or air off another unit's condenser | Suction temperature lower than normal, or condenser oversized for the day |
| Fins blocked with dust, leaves, paper, lint | System short of refrigerant (not always — it can show normal head) |
| Fan faulty, running backwards, or cowl removed so air short-circuits | Compressor inefficient: worn or leaking valves, so less vapour is being pumped |
| Suction temperature higher than design, so the condenser is undersized for the heat it now has to reject | |
| Air, nitrogen or foreign gas in the condenser | |
| Overcharge — liquid backing up and flooding condenser surface | |

!SIM[See a blocked condenser on the gauges](fault=dirtyCondenser)

Two more notes. **Water-cooled condensers** behave the same way but with a much
smaller TD, typically **5 to 8 K** above entering water, and they are affected
by water flow rate and scale as well as by water temperature. And the
**condenser surface** in the middle U-bends runs about 2 to 4 K colder than the
condensing refrigerant, which lets you estimate head pressure with a contact
thermometer when you cannot fit gauges. The discharge line and the top of the
condenser are much hotter than SCT and must never be used this way.

## On the job

- Work out the expected SST and SCT *before* you look at the gauges, so the
  reading cannot bias you.
- Write down room temperature, ambient temperature and the two saturation
  temperatures on the job sheet — they are the plant's vital signs.
- A low suction with a warm room is a supply problem; a low suction with a cold
  room is often just the plant catching up.
- Keep condensing temperature down: a hosed-out condenser is the cheapest
  capacity increase in refrigeration.
`,
          quiz: [
            {
              q: "A fruit coolroom is designed for 2°C with a forced-draught evaporator. What saturated suction temperature would you expect?",
              options: ["-9°C", "-4°C", "+2°C", "-13°C"],
              answer: 1,
              explain: "Fruit at 85–90% RH uses a TD of about 6 K on a fan coil, so SST = 2 − 6 = -4°C. The -9°C figure would be right for a natural-draught coil (11 K), which would also dry the fruit out.",
            },
            {
              q: "Why does a product needing high relative humidity get a small evaporator TD?",
              options: [
                "Because a small TD means less refrigerant is needed",
                "Because a colder coil condenses and freezes more moisture out of the air, drying the produce",
                "Because high humidity products are always stored above 0°C",
                "Because a small TD lowers the head pressure",
              ],
              answer: 1,
              explain: "The coil surface temperature sets how much water is stripped from the air. A big TD gives a very cold surface, heavy dehumidification and dehydrated produce; a small TD needs more coil area but keeps the room humid.",
            },
            {
              q: "In cold weather a capillary-tube system runs with an unusually low suction pressure. What is the most likely mechanism?",
              options: [
                "The refrigerant has become thicker in the cold",
                "Low head pressure reduces the pressure difference across the capillary, so it feeds less liquid and starves the evaporator",
                "The compressor speeds up in cold weather",
                "The evaporator has become oversized",
              ],
              answer: 1,
              explain: "Flow through any metering device depends on the pressure difference across it. Low ambient lowers head pressure, the capillary feeds less, and the coil starves — which is exactly why head pressure control is fitted on plants that must run through winter.",
            },
            {
              q: "A condenser is fouled enough to raise condensing temperature by 8 K. Roughly what happens to system capacity?",
              options: ["No change", "Falls by about 8%", "Falls by about 30%", "Rises by about 8%"],
              answer: 1,
              explain: "As a working rule, capacity changes by about 1% per kelvin of condensing temperature, so 8 K of extra head costs about 8% of the duty — before you count the extra power the compressor draws.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "ph-anatomy",
          title: "Anatomy of the pressure–enthalpy diagram",
          minutes: 12,
          simple: "The pressure–enthalpy chart is a map of everything a refrigerant can do. Height on the map is pressure, distance across is how much heat each kilogram is carrying. A big dome in the middle marks where liquid and gas live together, and a set of guide lines lets you read temperature, volume and other properties anywhere you land.",
          refs: REFS,
          content: `
A PT chart tells you one thing: the saturation temperature. The
**pressure–enthalpy (P–h) diagram** tells you everything else — temperature,
specific volume, enthalpy, entropy and quality — at *any* point in the system,
whether the refrigerant there is subcooled liquid, a liquid-vapour mixture or
superheated vapour. It handles one refrigerant at a time, and that is the price
of the extra detail.

!FIG[ph-legs]

## The vocabulary you need first

- **Sensible heat** — heat that changes temperature without changing state.
- **Saturated liquid** — liquid that cannot take any more heat without some of
  it flashing to vapour.
- **Latent heat of vaporisation** — the heat needed to turn one kilogram of
  saturated liquid into vapour, at constant temperature. It depends on the
  refrigerant and on the pressure.
- **Saturated vapour** — vapour with the last of the liquid just gone; remove
  any heat and some condenses back.
- **Enthalpy (h)** — total heat content per kilogram, in **kJ/kg**, measured
  above an arbitrary base. Different charts use different bases (-40°C on some
  older charts, 0°C on air-conditioning work). The charts used here take a base
  low enough that all values stay positive, so only *differences* in h matter.
- **Entropy (s)** — in **kJ/(kg·K)**; at this level, treat it as the line the
  vapour follows when it is compressed with no heat gained or lost.
- **Specific volume (v)** — the space one kilogram of refrigerant occupies, in
  **m³/kg**.
- **Isothermal** — a process at constant temperature.
- **Adiabatic** — a process with no heat transferred to or from the
  surroundings. Compression in a compressor is *assumed* adiabatic when a cycle
  is plotted, which is why the compression line follows constant entropy.
- **Work, energy, power** — the joule is the SI unit of energy: one newton
  moving through one metre. The watt is one joule per second, so power is the
  rate of doing the work.

## Reading the axes

- **Vertical axis: absolute pressure**, printed in **bar absolute** and almost
  always on a **logarithmic** scale, so the low-pressure end is not squashed
  flat. Remember 1 bar = 100 kPa, and gauge + 1.013 bar = absolute.
- **Horizontal axis: enthalpy** in **kJ/kg**, on a linear scale.

Everything else on the chart is a family of guide lines drawn over those axes.

## The saturation dome

Plot the saturated liquid states and you get a curve rising to the left. Plot
the saturated vapour states and you get a curve falling away to the right. The
two meet at the top, at the **critical point**.

- **Left of the dome**: subcooled liquid.
- **Inside the dome**: liquid and vapour together — this is where the PT chart's
  world lives, and where a horizontal line means constant temperature *and*
  constant pressure.
- **Right of the dome**: superheated vapour.

The width of the dome at any pressure is the latent heat at that pressure. Trace
up the chart and you will see the dome narrow: as pressure rises, the boiling
temperature rises but the latent heat *shrinks*. At the **critical temperature**
the width has gone to zero — the liquid contains so much energy that it flashes
to vapour with no further heat added, and above that point no amount of pressure
will liquefy the vapour. For R134a the critical point is around 101°C, for R22
about 96°C; for R744 (CO2) it is only about 31°C, which is why CO2 plant runs
transcritical on a hot day.

!FIG[latent-plateau]

## Quality lines

Inside the dome, ten lines split the width into equal parts. These are
**quality** lines, and the number on them is the **fraction that is vapour**:
0.1 means 10% vapour and 90% liquid by mass, 0.5 means half and half. They are
the only way to describe a mixture, and you will use them for two jobs — reading
how much flash gas the metering device produces, and showing the damage an
undercharge does.

## Constant temperature lines

Inside the dome, temperature and pressure are the same thing, so constant
temperature lines run horizontally. But watch what happens when they leave the
dome:

- To the **left** of the saturated liquid line they turn almost vertical — a
  subcooled liquid barely changes enthalpy when you squeeze it.
- To the **right** of the saturated vapour line they bend down and fall away
  steeply — a superheated vapour gains enthalpy fast as it warms.

So if refrigerant boils at 0°C and then keeps absorbing heat, the plot runs
horizontally across the dome, and the moment it crosses the saturated vapour
line it starts cutting the constant temperature lines and climbing in
temperature. That crossing point is where **superheat** begins.

## Constant entropy lines

These run up and to the right from the saturated vapour line, only in the
superheat region. Compression with no heat lost or gained follows one of them.
That is why plotting compression means "start at the suction point and run
parallel to the nearest constant entropy line up to the condensing pressure".
A real compressor is not perfectly adiabatic, but the assumption is close enough
for service analysis and it is what makes the chart usable.

## Constant volume lines

These also live outside the dome, running gently up to the right, labelled in
**m³/kg**. They obey the gas laws you already know, combined as:

**(p1 × V1) / T1 = (p2 × V2) / T2**

Their practical value is at one point only: the compressor suction. The specific
volume there tells you **how many cubic metres the compressor has to swallow for
every kilogram it moves**. Superheat the suction vapour and v rises; a fixed
compressor then moves fewer kilograms per second and the plant loses capacity.
That single idea is behind most of the cycle analysis in this module.

## What a plotted cycle will give you

Once you have plotted a cycle — and you only need **two pressures** (suction and
discharge) and **two temperatures** (liquid entering the metering device and
vapour entering the compressor) — you can read off:

- net refrigerating effect (kJ/kg) — the useful cooling from each kilogram
- heat of compression (kJ/kg) — the work the compressor adds
- heat of rejection (kJ/kg) — what the condenser must get rid of
- discharge temperature
- specific volume at suction, and hence how much vapour must be pumped
- compression ratio = absolute discharge pressure ÷ absolute suction pressure
- latent heat available at any temperature
- the effect of head pressure, subcooling and superheat on all of the above
- mass of refrigerant to circulate for each kilowatt of cooling
- theoretical power input, and from it the motor size

## What to remember

- Height is absolute pressure (bar), width is enthalpy (kJ/kg).
- Inside the dome, horizontal means constant temperature and constant pressure.
- Quality lines measure the vapour fraction of a mixture.
- Compression follows constant entropy; expansion through the metering device is
  drawn vertical, because no heat is added or removed.
- Specific volume at the suction point is the number that decides compressor
  capacity.
`,
          quiz: [
            {
              q: "On a P–h diagram, why does a line drawn inside the saturation dome run horizontally for a constant-temperature process?",
              options: [
                "Because enthalpy cannot change inside the dome",
                "Because liquid and vapour coexist there, so pressure and temperature are locked together",
                "Because the chart uses a logarithmic pressure scale",
                "Because entropy is constant inside the dome",
              ],
              answer: 1,
              explain: "In the two-phase region a single pressure fixes the temperature. Enthalpy changes a great deal across the dome — that change is the latent heat — but temperature and pressure do not.",
            },
            {
              q: "A point plots on the 0.2 quality line. What does that mean?",
              options: [
                "The refrigerant is 20% liquid and 80% vapour",
                "The refrigerant is 20% vapour and 80% liquid by mass",
                "The refrigerant is at 20% of critical pressure",
                "20% of the latent heat has been rejected",
              ],
              answer: 1,
              explain: "Quality is the vapour fraction. At 0.2 quality, one fifth of each kilogram is already vapour — for refrigerant entering an evaporator that is flash gas, which does no cooling.",
            },
            {
              q: "Why does the saturation dome get narrower as pressure rises?",
              options: [
                "Because the chart scale compresses at high pressure",
                "Because latent heat of vaporisation falls as saturation temperature rises, vanishing at the critical point",
                "Because specific volume increases with pressure",
                "Because entropy lines converge",
              ],
              answer: 1,
              explain: "The dome width at any pressure is the latent heat. Higher pressure means a higher boiling point and less latent heat per kilogram, until at the critical point there is no distinction between liquid and vapour at all.",
            },
            {
              q: "Which property read at the compressor suction point most directly limits how much cooling a fixed-displacement compressor can deliver?",
              options: ["Entropy", "Quality", "Specific volume", "Enthalpy of the liquid"],
              answer: 2,
              explain: "The compressor sweeps a fixed volume per revolution. The larger the specific volume of the vapour it is handed, the fewer kilograms per second it moves, and mass flow multiplied by refrigerating effect is the duty.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "plotting-cycle",
          title: "Plotting a real cycle and reading it",
          minutes: 13,
          simple: "With just the two gauge pressures you can draw the whole journey of the refrigerant as a rectangle-ish loop on the chart. Once it is drawn, you can measure with a ruler how much cooling each kilogram does, how much work the compressor puts in, and how hot the discharge gets. It is like an X-ray of the plant.",
          refs: REFS,
          content: `
This is the core skill of the module. Everything else is a variation on it.

!FIG[cycle-loop]

## The information you need

For a simple cycle with no subcooling and no superheating, all you need is the
two pressures — or, better, the two saturation temperatures the PT chart gives
you from those pressures, because the temperature lines on the P–h chart are
easier to follow than the pressure scale.

Take a working R134a plant reading:

- Suction: **33 kPa gauge** → 1.3 bar absolute → **-20°C** SST
- Discharge: **1218 kPa gauge** → 13.2 bar absolute → **+50°C** SCT

## Step 1 — evaporation (A to B)

Draw a horizontal line at -20°C from the saturated liquid line across to the
saturated vapour line. Call the ends **A** (saturated liquid) and **B**
(saturated vapour). Drop verticals to the enthalpy scale:

- At A: h = **176 kJ/kg**
- At B: h = **380 kJ/kg**
- Latent heat at -20°C = 380 − 176 = **204 kJ/kg**

That 204 kJ/kg is the *total* latent heat available at that temperature. It is
not the refrigerating effect, because in a real cycle the refrigerant does not
arrive at the evaporator as saturated liquid.

## Step 2 — compression (B to C)

From B, follow a line parallel to the nearest constant entropy line (about
s = 1.72 kJ/kg·K here) upward until it meets the 50°C / 13.2 bar pressure level.
Call that point **C**. Drop a vertical:

- At C: h = **429 kJ/kg**

**Heat of compression = h(C) − h(B) = 429 − 380 = 49 kJ/kg**

This is the work the compressor puts into every kilogram, and it is what the
motor has to pay for.

C also sits between the 50°C and 60°C constant temperature lines, closer to the
50 line, so the **discharge temperature is about 58°C**.

>! Keep discharge temperature below about 100°C. Above that, oil and refrigerant
>! start breaking down chemically, forming acid and sludge. In a hermetic or
>! semi-hermetic machine that ends as a motor burnout. If a plotted or measured
>! discharge temperature is near 100°C, find out why before you leave site.

## Step 3 — condensation (C to D)

From C draw horizontally left at 50°C until it meets the saturated liquid line.
Call that **D**, and drop a vertical:

- At D: h = **268 kJ/kg**

**Heat of rejection = h(C) − h(D) = 429 − 268 = 161 kJ/kg**

That is what the condenser must throw away for every kilogram circulated —
desuperheating, condensing and any subcooling all together. It is always larger
than the refrigerating effect, because it includes the compressor's work.

## Step 4 — expansion (D to E)

From D drop a **vertical** line down to the -20°C evaporating pressure. Call the
landing point **E**. Vertical means no change in enthalpy: nothing has been
added or removed, the metering device only drops the pressure.

So why does the refrigerant get cold? Because some of it boils immediately to
cool the rest — the sensible heat of the warm liquid is spent as latent heat on
itself. E therefore lands *inside* the dome, on a quality line, and the vapour
formed is **flash gas**. The same physics cools water in a cooling tower.

## Step 5 — read the refrigerating effect

The cycle is now **B–C–D–E**, closed by the line E–B along the evaporator.

**Net refrigerating effect (NRE) = h(B) − h(E) = 380 − 268 = 112 kJ/kg**

Every kilogram of R134a pumped around this plant removes 112 kJ from the room.
Compare that with the 204 kJ/kg of latent heat that existed at -20°C: about 45%
of it was thrown away producing flash gas, because the liquid arrived at 50°C
and had to cool itself to -20°C first. That single comparison is the argument
for subcooling.

## Step 6 — the derived numbers

**Compression ratio** uses absolute pressures:

CR = 13.2 bar abs ÷ 1.3 bar abs = **10.15 : 1**

**Specific volume at suction**, read from the constant volume lines at B:
**v = 0.14 m³/kg**.

**Coefficient of performance** is the useful output divided by the work put in.
From the chart:

COP = NRE ÷ heat of compression = 112 ÷ 49 = **2.29**

Meaning: for every kilowatt of work the compressor does on the gas, 2.29 kW of
heat is pulled out of the room. Note that this is the *theoretical* COP of the
cycle — it says nothing about motor losses, fan power or drive losses yet.

A useful cross-check: heat of rejection should equal refrigerating effect plus
heat of compression. 112 + 49 = 161 kJ/kg. It does. If your three numbers do not
add up, you have misread the chart.

## Summary of the plotted cycle

| Quantity | Read from | Value |
|---|---|---|
| Net refrigerating effect | E to B | 112 kJ/kg |
| Heat of compression | B to C | 49 kJ/kg |
| Heat of rejection | C to D | 161 kJ/kg |
| Discharge temperature | position of C | ≈ 58°C |
| Specific volume at suction | volume line at B | 0.14 m³/kg |
| Compression ratio | 13.2 ÷ 1.3 | 10.15 : 1 |
| Theoretical COP | 112 ÷ 49 | 2.29 |

## Different refrigerant, same cycle

Plot the same -20°C / +50°C cycle on an **R22** chart and the shape is similar
but one number changes dramatically: the **discharge temperature reaches about
90°C** instead of 58°C. Add a normal 20 K of suction superheat and R22 discharge
climbs past 110°C — straight into the chemical breakdown range.

That is why, on low-temperature R22 plant, suction superheat has to be kept
tight, and why such systems are built with **two-stage (compound) compression**,
liquid injection into the low side, or head cooling fans. It is exactly the kind
of conclusion the chart is for: you can see the problem before you build the
plant.

## On the job

- Convert gauge to absolute before you touch the chart.
- Plot in the order evaporate, compress, condense, expand — it stops you
  guessing.
- Expansion is always drawn vertical; compression always follows entropy.
- Cross-check that NRE + heat of compression = heat of rejection.
- Chart readings are approximate; where the numbers matter for design, use
  tabulated refrigerant property tables instead.
`,
          quiz: [
            {
              q: "Why is the line through the expansion valve drawn vertically on a P–h diagram?",
              options: [
                "Because pressure does not change through the valve",
                "Because no heat is added or removed, so enthalpy is unchanged even though pressure falls",
                "Because temperature is constant through the valve",
                "Because the refrigerant is still fully liquid",
              ],
              answer: 1,
              explain: "The valve does no work and exchanges no heat with its surroundings, so h stays the same. Temperature falls sharply, but only because part of the liquid flashes and cools the rest.",
            },
            {
              q: "In the worked cycle the latent heat at -20°C is 204 kJ/kg but the net refrigerating effect is only 112 kJ/kg. Where did the difference go?",
              options: [
                "It was lost as friction in the suction line",
                "It was used flashing part of the liquid to cool the 50°C liquid down to -20°C",
                "It was rejected in the condenser as superheat",
                "The chart was misread — the two should be equal",
              ],
              answer: 1,
              explain: "Liquid arriving at the metering device at 50°C must cool itself to -20°C, and it does that by boiling off part of itself. That flash gas has already used its latent heat before it reaches the room.",
            },
            {
              q: "A cycle shows NRE 112 kJ/kg and heat of compression 49 kJ/kg. What should the heat of rejection be?",
              options: ["63 kJ/kg", "112 kJ/kg", "161 kJ/kg", "224 kJ/kg"],
              answer: 2,
              explain: "The condenser must reject everything the refrigerant picked up: the heat from the room plus the compressor's work. 112 + 49 = 161 kJ/kg — a handy arithmetic check on your chart reading.",
            },
            {
              q: "Plotting a -20°C / +50°C cycle on R22 rather than R134a mainly changes which result?",
              options: [
                "The compression ratio, which becomes far lower",
                "The discharge temperature, which rises to around 90°C",
                "The net refrigerating effect, which halves",
                "The direction of the expansion line",
              ],
              answer: 1,
              explain: "R22 has a much steeper superheat region, so the same compression ratio produces around 90°C discharge instead of 58°C. Add normal suction superheat and it exceeds 110°C, which is why low-temperature R22 needs compounding or liquid injection.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "capacity-calcs",
          title: "From the chart to kilowatts: mass flow, swept volume and power",
          minutes: 13,
          simple: "The chart gives you how much heat one kilogram of refrigerant carries. To size or check real equipment you need kilograms per second, litres per second of gas the compressor must swallow, and kilowatts at the motor. All of it comes from a handful of divisions.",
          refs: REFS,
          content: `
A plotted cycle gives you kilojoules per kilogram. A customer buys kilowatts.
The bridge between the two is **mass flow rate**, and once you have it every
other number in the plant falls out.

## The four working formulae

1. **Mass flow:**  m = Q ÷ NRE  (kg/s = kW ÷ kJ/kg)
2. **Suction volume flow:**  V = m × v  (m³/s = kg/s × m³/kg)
3. **Swept volume required:**  Vs = V ÷ ηv  (where ηv is volumetric efficiency)
4. **Theoretical power:**  P = m × heat of compression  (kW)

The chapter states the same power relationship in the form technicians use on
site:

**Theoretical power (kW) = (compressor capacity kW × heat of compression kJ/kg) ÷ net refrigerating effect kJ/kg**

which is only formulae 1 and 4 rolled together.

## Volumetric efficiency — why the compressor never gets it all

A reciprocating compressor cannot sweep its cylinder completely empty. A small
**clearance volume** at the top of the stroke stays full of high-pressure gas at
the end of discharge, and that gas has to re-expand before the suction valve can
open. The higher the compression ratio, the more it re-expands and the less
fresh vapour gets in.

**ηv ≈ 1 + C − C × r^(1/n)**

where C is the clearance ratio (typically 0.03 to 0.05 of swept volume), r is
the compression ratio, and n is the polytropic index (around 1.1 for common
refrigerants).

Taking C = 0.045 and r = 10.15 from our plotted cycle:

- r^(1/1.1) = 10.15^0.909 ≈ 8.22
- ηv = 1 + 0.045 − (0.045 × 8.22) = 1.045 − 0.370 = **0.675, or about 68%**

Real machines also lose a few per cent to valve pressure drop, suction gas
heating in the cylinder head and blow-by past the rings, so measured volumetric
efficiency is lower again. The trend is what matters on site:

| Compression ratio | Typical volumetric efficiency |
|---|---|
| 3 : 1 | around 85–90% |
| 6 : 1 | around 75–80% |
| 10 : 1 | around 65–70% |
| 14 : 1 and above | below 55%, and falling steeply |

This is the mathematical proof of something you already knew: **anything that
raises head pressure or lowers suction pressure costs you capacity twice** —
once through a poorer refrigerating effect, and again through a compressor that
can no longer fill its own cylinders.

## Worked example — sizing from a plotted cycle

The same R134a cycle: NRE **112 kJ/kg**, heat of compression **49 kJ/kg**, heat
of rejection **161 kJ/kg**, suction specific volume **0.14 m³/kg**, compression
ratio **10.15 : 1**. The coolroom load is **5 kW**.

**(a) Mass flow**

m = 5 kW ÷ 112 kJ/kg = **0.0446 kg/s** (44.6 g/s)

Put another way, this plant needs 1 ÷ 112 = **0.0089 kg/s of refrigerant
circulated per kilowatt of cooling**. That figure — kilograms per second per
kilowatt — is worth calculating on every cycle you plot, because it is the
number that changes when the cycle changes.

**(b) Volume the compressor must actually handle**

V = 0.0446 kg/s × 0.14 m³/kg = 0.00625 m³/s = **6.25 L/s**

**(c) Swept volume needed**

Vs = 6.25 ÷ 0.675 = 9.26 L/s = **0.00926 m³/s**

At 1450 rev/min (24.2 rev/s) the compressor displacement must be
0.00926 ÷ 24.2 = 0.000383 m³/rev = **383 cm³ per revolution**. You now have a
number you can take straight to a compressor selection table.

**(d) Theoretical power**

P = 0.0446 kg/s × 49 kJ/kg = **2.19 kW**

**(e) Actual motor power**

Theoretical power ignores motor and drive losses, and ignores the fact that a
plant is selected to pull down as well as hold. The chapter gives service
multipliers:

- Coolrooms: theoretical power **× 1.4**
- Freezers: theoretical power **× 1.8**

For our coolroom: 2.19 × 1.4 = **3.07 kW**, so select a 3 kW class motor and
check the starting arrangement against it.

**(f) Condenser duty**

Heat of rejection = 0.0446 kg/s × 161 kJ/kg = **7.18 kW**

Check: 5 kW cooling + 2.19 kW work = 7.19 kW. The condenser must be selected for
around 7.2 kW at the chosen ambient — not for 5 kW. Undersizing here is one of
the most common causes of chronic high head pressure on site-built plant.

**(g) COP**

COP = 5 ÷ 2.19 = **2.28** (matching 112 ÷ 49 as it must).

## Checking a compressor in the field

Turn the calculation around and you have a compressor test that needs nothing
but gauges, a thermometer and a clamp meter:

1. Measure suction and discharge pressures; convert to SST and SCT.
2. Measure suction line and liquid line temperatures.
3. Plot the cycle and read NRE and specific volume at suction.
4. Take the compressor's published swept volume and speed.
5. Estimate ηv from the compression ratio, and calculate the expected duty:
   **Q = (Vs × ηv ÷ v) × NRE**

For our machine running as designed:
Q = (0.00926 m³/s × 0.675 ÷ 0.14 m³/kg) × 112 kJ/kg = 0.0446 × 112 = **5.0 kW**.

If measured duty from the air side (see the psychrometric lessons) comes out far
below this, the compressor itself is suspect — worn rings, leaking valves or a
broken discharge reed. If it matches, the fault is somewhere else in the system.

## Units discipline

| Quantity | Unit | Common slip |
|---|---|---|
| Refrigerating effect | kJ/kg | Mixing it with kJ/s |
| Mass flow | kg/s | Quoting kg/h without converting (÷ 3600) |
| Specific volume | m³/kg | Confusing with density (kg/m³ — it is the reciprocal) |
| Volume flow | m³/s or L/s | 1 m³/s = 1000 L/s |
| Capacity and power | kW | Quoting horsepower off an old nameplate |
| Compression ratio | none | Calculating it on gauge pressure |

## What to remember

- Mass flow = duty ÷ refrigerating effect. Everything else follows.
- Volume flow, not mass flow, is what the compressor is sized on — so specific
  volume at suction matters as much as the refrigerating effect.
- Volumetric efficiency falls hard as compression ratio rises.
- Condenser duty = cooling duty + compressor power, always.
- Multiply theoretical power by 1.4 for coolrooms, 1.8 for freezers, to get a
  realistic motor size.
`,
          quiz: [
            {
              q: "A cycle gives a net refrigerating effect of 140 kJ/kg. What mass flow is needed for a 7 kW duty?",
              options: ["0.05 kg/s", "0.02 kg/s", "20 kg/s", "0.98 kg/s"],
              answer: 0,
              explain: "m = Q ÷ NRE = 7 kW ÷ 140 kJ/kg = 0.05 kg/s. Watch the units: kW divided by kJ/kg gives kg/s directly, because a kilowatt is a kilojoule per second.",
            },
            {
              q: "Two systems have the same net refrigerating effect, but one has twice the suction specific volume. What follows?",
              options: [
                "Both need the same size compressor",
                "The one with the larger specific volume needs roughly twice the swept volume for the same duty",
                "The one with the larger specific volume has twice the COP",
                "The one with the larger specific volume needs half the swept volume",
              ],
              answer: 1,
              explain: "Volume flow = mass flow × specific volume. Same mass flow with twice the specific volume means twice the cubic metres per second through the suction valves, so twice the displacement.",
            },
            {
              q: "Why does volumetric efficiency fall as compression ratio rises?",
              options: [
                "The suction gas becomes denser",
                "Gas trapped in the clearance volume re-expands further on the suction stroke, delaying the suction valve opening",
                "The motor slows down under load",
                "The discharge valve leaks more at high ratio",
              ],
              answer: 1,
              explain: "The clearance volume stays full of high-pressure gas at the end of discharge. The higher the ratio, the more of the stroke that gas occupies as it re-expands, and the less fresh vapour can be drawn in.",
            },
            {
              q: "A freezer cycle needs 3.5 kW of theoretical compressor power. What motor power would you plan for?",
              options: ["3.5 kW", "4.9 kW", "6.3 kW", "2.5 kW"],
              answer: 2,
              explain: "For freezers the working multiplier is 1.8, giving 3.5 × 1.8 = 6.3 kW. The 1.4 multiplier (4.9 kW) applies to coolrooms; using it on a freezer would leave the motor short during pull-down.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "cycle-variations",
          title: "Subcooling, superheat and what moves the cycle",
          minutes: 13,
          simple: "Small changes to the corners of the cycle make big changes to the result. Cooling the liquid a bit more before the valve is free money; letting the suction gas warm up too much costs you. This lesson puts numbers on each of those moves so you can argue with a chart rather than a hunch.",
          refs: REFS,
          content: `
The plotted cycle in the last lesson was the *ideal* one — no subcooling, no
superheat, no pressure drop. Real plant never looks like that. Here is what each
practical deviation does, using the same R134a cycle (-20°C / +50°C,
NRE 112 kJ/kg, heat of compression 49 kJ/kg, heat of rejection 161 kJ/kg,
v = 0.14 m³/kg, CR 10.15 : 1) as the baseline every time.

## 1. Lower head pressure — the biggest free gain

Drop the condensing pressure from 13.2 bar abs (50°C) to **11 bar abs (42°C)** —
a cooler day, a bigger or cleaner condenser, better airflow, or purging
incondensables. The liquid line now leaves the condenser at 42°C, h = 256 kJ/kg.

| Quantity | Baseline | 42°C condensing | Change |
|---|---|---|---|
| Net refrigerating effect | 112 kJ/kg | 380 − 256 = 124 kJ/kg | **+11%** |
| Heat of compression | 49 kJ/kg | 425 − 380 = 45 kJ/kg | **−8%** |
| Discharge temperature | 58°C | ≈ 50°C | cooler |
| Heat of rejection | 161 kJ/kg | 425 − 256 = 169 kJ/kg | +8 kJ/kg |
| Specific volume at suction | 0.14 m³/kg | no change | — |
| Compression ratio | 10.15 : 1 | 11 ÷ 1.3 = 8.5 : 1 | better ηv |

More cooling from every kilogram *and* less work to move it: the plant runs
fewer hours and draws less power while it runs. This is why condenser
maintenance pays for itself.

## 2. Liquid subcooling

Now leave head pressure alone at 13.2 bar but cool the liquid in the liquid line
to **42°C** — an oversized condenser, a run of liquid line through a cool space,
or a mechanical subcooler.

On the chart, the vertical line down from the subcooled point crosses the
saturated liquid curve at 42°C but keeps going up to the operating head
pressure. The result:

| Quantity | Baseline | With 8 K subcooling | Change |
|---|---|---|---|
| Net refrigerating effect | 112 kJ/kg | 380 − 256 = 124 kJ/kg | **+11%** |
| Heat of compression | 49 kJ/kg | unchanged | — |
| Discharge temperature | 58°C | unchanged | — |
| Heat of rejection | 161 kJ/kg | 429 − 256 = 173 kJ/kg | +12 kJ/kg |
| Specific volume | 0.14 m³/kg | unchanged | — |
| Compression ratio | 10.15 : 1 | unchanged | — |

Same 11% capacity gain, but no power saving, because head pressure has not
moved. Still worth having — the plant does its job in less running time. Note
that subcooling also guarantees a solid liquid column at the metering device,
which is what stops flash gas in the liquid line.

!FIG[subcool-measure]

**Measuring subcooling in the field:** read the head pressure, convert to SCT
(bubble point on a blend), and subtract the liquid line temperature measured at
the condenser outlet or at the receiver drain. Typical design values are around
3 to 8 K. Zero subcooling with normal head pressure usually means the charge is
low; very high subcooling usually means overcharge, or liquid backing up behind
a restriction.

## 3. Suction superheating — the one that costs

Let the suction vapour warm from **-20°C to +20°C** before it reaches the
compressor. Point B moves right along the -20°C pressure line to h = 418 kJ/kg,
and compression from there ends much higher up the chart.

| Quantity | Baseline | Superheated to +20°C | Change |
|---|---|---|---|
| Net refrigerating effect | 112 kJ/kg | still 112 kJ/kg | — |
| Heat of compression | 49 kJ/kg | 475 − 418 = 57 kJ/kg | **+16.3%** |
| Discharge temperature | 58°C | **100°C** | breakdown territory |
| Heat of rejection | 161 kJ/kg | 475 − 268 = 207 kJ/kg | **+29%** |
| Specific volume at suction | 0.14 m³/kg | 0.175 m³/kg | **+25%** |
| Compression ratio | 10.15 : 1 | unchanged | — |

That 25% rise in specific volume is the killer. The compressor still sweeps the
same cubic metres per second, so it now moves 25% fewer kilograms — and capacity
falls with it. Meanwhile power is up, discharge temperature has reached the
chemical breakdown threshold, and the condenser has 29% more heat to reject,
which will push head pressure up as well.

So why allow any superheat at all?

- **It stops liquid flood-back** to the compressor, which is the fastest way to
  wreck one.
- Superheating that happens *inside* the refrigerated space is still useful
  cooling.
- It stops the suction line sweating or icing outside the room, which is a
  nuisance and a slip hazard.

The rule that follows: superheat should be **enough to protect the compressor
and no more**. Compressor manufacturers publish maximum suction superheat
figures for exactly this reason.

!FIG[superheat-measure]

**Measuring superheat in the field:** read suction pressure, convert to SST
(dew point on a blend), and subtract it from the suction line temperature.
Measure at the evaporator outlet for TX valve adjustment (typically 4 to 8 K on
a DX coil), and at the compressor suction for compressor protection (typically
in the region of 10 to 20 K on air-conditioning plant, less on low-temperature
plant where discharge temperature is critical).

## 4. Lower suction pressure

Drop the suction from 1.3 bar abs (-20°C) to **1 bar abs, that is 0 kPa gauge,
about -25°C** — caused by undersized lines, a restricted drier, an iced coil, a
shortage of charge or an undersized evaporator.

| Quantity | Baseline | Suction at -25°C | Change |
|---|---|---|---|
| Net refrigerating effect | 112 kJ/kg | 378 − 268 = 110 kJ/kg | −1.8% |
| Heat of compression | 49 kJ/kg | 436 − 378 = 58 kJ/kg | **+18.4%** |
| Discharge temperature | 58°C | ≈ 60°C | up |
| Heat of rejection | 161 kJ/kg | 436 − 268 = 168 kJ/kg | up |
| Specific volume at suction | 0.14 m³/kg | **0.187 m³/kg** | +34% |
| Compression ratio | 10.15 : 1 | **13.2 : 1** | ηv collapses |

The refrigerating effect barely moved — which is exactly why a technician
looking only at kJ/kg can be fooled. The damage is in the last two rows: 34%
more volume to pump for each kilogram, and a compression ratio that has driven
volumetric efficiency down. The plant loses a third of its capacity while the
power per kilogram climbs 18%.

**Never chase a low suction pressure by throttling something.** Find out why it
is low.

## 5. The suction–liquid heat exchanger

A heat exchanger uses the cold suction vapour to subcool the liquid line, so you
get the gain of subcooling and pay with superheat. In our example, the 38 kJ/kg
that warmed the suction vapour to +20°C came out of the liquid, which is enough
to subcool it by roughly 20 K.

Whether it is worth it depends on the refrigerant and the application. Where the
suction vapour would have picked up that heat anyway from a warm plant room —
useless heat gain from ambient — routing it through a heat exchanger turns a
pure loss into a gain. Where the suction line is short and well insulated, and
the refrigerant already runs hot on discharge (R22 or ammonia at low
temperature), a heat exchanger can do more harm than good.

## 6. Pressure drops, and the practical cycle

- **Suction line pressure drop** — every valve, bend and fitting adds equivalent
  length. Correct pipe sizing keeps the whole line's drop equivalent to about
  **1 K** of saturation temperature. Measuring it needs a gauge at the
  evaporator outlet as well as at the compressor, which most systems cannot
  offer without special fittings.
- **Evaporator pressure drop** — multiple parallel circuits fed by a distributor
  keep this small. A simple single-circuit coil rarely does better than
  **30 kPa**, and tired old evaporators have been measured at **100 kPa**.

Plot all of it together and you have the practical cycle: the evaporation line
sloping slightly down to the right (evaporator pressure drop), continuing to
slope through the suction line drop, extending to the right at the end
(superheat), with the liquid line pulled left of the saturated liquid curve
(subcooling). Every real system is some version of this shape.

## What to remember

- Lower head pressure gains capacity *and* saves power. Subcooling gains
  capacity only. Both are worth having.
- Superheat costs capacity through specific volume, costs power, and raises
  discharge temperature — but a little is compulsory for compressor safety.
- Low suction hurts mainly through specific volume and compression ratio, not
  through refrigerating effect.
- Superheat is measured from the dew point at the low side; subcooling from the
  bubble point at the high side.
`,
          quiz: [
            {
              q: "Excessive suction superheat reduces system capacity mainly because:",
              options: [
                "The net refrigerating effect per kilogram falls sharply",
                "Specific volume of the suction vapour rises, so the compressor moves fewer kilograms per second",
                "The compression ratio increases",
                "The condenser cannot reject the extra heat",
              ],
              answer: 1,
              explain: "In the worked example, NRE per kilogram did not change at all — but specific volume rose 25%, so a fixed-displacement compressor moved 25% less mass. Compression ratio is set by the two pressures and is unchanged.",
            },
            {
              q: "What is the key difference in outcome between lowering head pressure and subcooling the liquid, if both move the liquid to 42°C?",
              options: [
                "Subcooling gives a bigger capacity gain",
                "Lowering head pressure also reduces the compressor work, while subcooling alone does not",
                "Subcooling raises discharge temperature",
                "There is no difference",
              ],
              answer: 1,
              explain: "Both give the same 11% capacity gain because the liquid enthalpy entering the valve is the same. Only the lower head pressure shortens the compression line, cutting heat of compression by about 8% and improving volumetric efficiency.",
            },
            {
              q: "Suction pressure falls from 1.3 bar abs to 1.0 bar abs. Which pair of consequences is most damaging?",
              options: [
                "Net refrigerating effect drops 1.8% and discharge temperature rises 2 K",
                "Specific volume rises about 34% and compression ratio rises to 13.2:1",
                "Heat of rejection rises and subcooling is lost",
                "Superheat falls and the TX valve hunts",
              ],
              answer: 1,
              explain: "The refrigerating effect barely changes, which is the trap. The real losses are the extra volume per kilogram and the higher compression ratio, which together gut both mass flow and volumetric efficiency.",
            },
            {
              q: "A technician measures 0 K subcooling at the condenser outlet with normal head pressure. What is the most likely cause?",
              options: [
                "Overcharge",
                "Undercharge — there is not enough liquid to build a subcooled column",
                "Restricted suction line",
                "TX valve set too tight",
              ],
              answer: 1,
              explain: "Subcooling requires liquid to sit in the bottom of the condenser or receiver long enough to give up more heat. No subcooling with normal head pressure points to a shortage of charge; overcharge produces the opposite, with high subcooling and high head pressure.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "faults-on-ph",
          title: "Reading faults off the cycle",
          minutes: 12,
          simple: "Two very common faults — air trapped in the condenser and a system a bit short of gas — show up clearly once you draw the cycle. The chart also explains why a shortage that looks trivial can steal nearly a third of the cooling.",
          refs: REFS,
          content: `
Anything that changes a pressure or a temperature changes the plotted cycle, so
the P–h diagram doubles as a fault-finding tool. Two faults deserve their own
treatment because they are common, misdiagnosed and easy to see on the chart.

## Air and incondensables in the condenser

The physics is **Dalton's law of partial pressures**: in a mixture of gases,
each gas exerts the pressure it would exert if it were alone in the vessel, and
the total pressure is the sum of them.

So suppose foreign gas trapped at the top of a condenser exerts **200 kPa** and
the refrigerant at its condensing temperature exerts **1200 kPa**. The gauge
will read **1400 kPa**. But the refrigerant is still condensing at the
temperature that goes with 1200 kPa — its own partial pressure.

That is the diagnostic signature: **head pressure reads higher than the
condensing temperature justifies**. Measure the condenser mid-coil surface
temperature (roughly 2 to 4 K below the true condensing temperature) or the
liquid line, convert your head pressure with the PT chart, and compare. A gap of
tens of kilopascals that cannot be explained by ambient means non-condensables.

Plotted on the chart, the effects stack up:

1. The compression line runs higher, so **compression ratio increases** and
   volumetric efficiency drops.
2. The condensing temperature usually rises too, because the extra heat of
   compression has to go somewhere and the non-condensable gas has taken up
   condenser volume that liquid and vapour needed.
3. The liquid leaves warmer, so the expansion line lands further right on a
   higher quality line, and **refrigerating effect falls**.
4. **Motor power rises considerably** — enough to trip overloads or cook the
   motor on a hot day.

!SIM[Compare gauges with and without non-condensables](fault=nonCondensables)

>! Air in a system almost always arrived with moisture. Moisture plus
>! refrigerant plus heat forms acids that attack winding insulation. Recover the
>! charge, replace the drier, evacuate properly to below 500 microns with a
>! decay test, and only then recharge. Purging from the top of a condenser is a
>! stopgap that vents refrigerant and is not permitted as routine practice under
>! the Refrigerant Handling Code of Practice.

## Refrigerant undercharge

The chart makes an argument that a set of gauges cannot make on its own.

When the charge is short, vapour reaches the metering device mixed with the
liquid. Two things follow immediately:

- **Subcooling becomes impossible.** Any heat removed from the mixture simply
  condenses some of the vapour back to liquid at the same temperature, rather
  than lowering the liquid's temperature.
- **The vapour that passes the valve is warm and useless.** It cannot absorb
  latent heat from the product; worse, it must itself be cooled, so it *adds*
  to the load on the evaporator.

Now put a number on it. Suppose only **20% by mass** of what enters the metering
device is already vapour — a shortage a technician might shrug at. The entry
point now sits on the **0.2 quality line** instead of on the saturated liquid
line, at about h = 300 kJ/kg instead of 268 kJ/kg.

- Net refrigerating effect = 380 − 300 = **80 kJ/kg**
- Baseline was 380 − 268 = **112 kJ/kg**
- Loss = 32 ÷ 112 = **29% of the plant's capacity**

Nearly a third of the machine gone, from a fault that shows as slightly low
suction pressure and a few bubbles in a sight glass. That is why "she is only a
little bit low" is a phrase worth arguing with.

!SIM[Watch a low charge starve the evaporator](fault=lowCharge)

## Building a fault picture from readings

You rarely get one symptom. Analysis means combining the low side, the high
side, superheat, subcooling and the amps into one story.

| Fault | SST | SCT | Superheat | Subcooling | Discharge temp | Current |
|---|---|---|---|---|---|---|
| Short of refrigerant | Low | Low or normal | High | Nil | High | Low |
| Overcharge | High | High | Low | High | Normal or low | High |
| Dirty or blocked condenser | Normal to high | High | Normal | Normal to high | High | High |
| Condenser fan failed | High | Very high | Normal | High | Very high | High |
| Non-condensables in condenser | Normal | High for the ambient | Normal | Normal | High | High |
| Restricted drier or liquid line | Low | Low or normal | High | High at the condenser, drop across the restriction | High | Low |
| TX valve starving (closed) | Low | Low | High | Normal | High | Low |
| TX valve flooding (open) | High | Normal to high | Low or nil | Normal | Low | High |
| Iced or airflow-blocked evaporator | Low | Low | Low, then high | Normal | Normal | Low |
| Leaking compressor valves | High | Low | High | Normal | High | Low |

Two entries deserve comment. A **restriction** and a **shortage of charge** both
give low suction and high superheat, which is why so many restrictions get
charged with gas instead of being fixed. The separator is subcooling and
temperature drop: a restriction leaves normal-to-high subcooling ahead of it and
usually a measurable temperature drop or frost spot across the drier, while a
shortage leaves none at all.

!SIM[Feel the difference: restricted drier](fault=restrictedDrier)

**Leaking compressor valves** give the classic pattern of high suction, low
head, low current and a compressor that runs and runs. On the P–h chart, the
plotted cycle collapses toward a short flat loop: the machine simply is not
lifting the gas.

## Comparing refrigerants on the chart

Because the chart is refrigerant-specific, plotting the same operating
conditions on two charts is the cleanest way to compare candidates for a
retrofit or a new plant. Plot -20°C / +50°C on R134a and on R22 and you can read
straight off:

| | R134a | R22 |
|---|---|---|
| Discharge temperature, no superheat | ≈ 58°C | ≈ 90°C |
| Discharge temperature, 20 K suction superheat | ≈ 100°C | over 110°C |

The R22 discharge figures explain the whole design tradition around
low-temperature R22: minimise suction superheat, and where the duty demands it,
go to two-stage (compound) compression, liquid injection in the low side, or
head cooling fans. The same reasoning applies today when you plot a modern
low-GWP replacement — check discharge temperature before you commit.

## On the job

- Head pressure that does not match a measured condensing temperature means
  non-condensables until proven otherwise.
- A 20% vapour fraction at the valve costs nearly 30% of the duty — no shortage
  is trivial.
- Never diagnose from one gauge; combine both saturation temperatures with
  superheat, subcooling and running current.
- Restriction versus undercharge is decided by subcooling and by temperature
  drop across the suspect component.
- When comparing refrigerants, look at discharge temperature first — it is the
  number that limits what a compressor can survive.
`,
          quiz: [
            {
              q: "A condenser holds refrigerant at 1200 kPa partial pressure plus 200 kPa of trapped air. What will happen?",
              options: [
                "The refrigerant will condense at the temperature matching 1400 kPa",
                "The gauge will read 1200 kPa because air is not measured",
                "The gauge will read 1400 kPa but the refrigerant still condenses at the 1200 kPa temperature",
                "The air will dissolve into the refrigerant and have no effect",
              ],
              answer: 2,
              explain: "Dalton's law: total pressure is the sum of the partial pressures. The compressor must pump against 1400 kPa while the refrigerant condenses at its own 1200 kPa temperature — extra work for no extra heat rejection.",
            },
            {
              q: "Why can a system short of refrigerant never show subcooling?",
              options: [
                "Because the liquid line is too hot",
                "Because any heat removed condenses vapour back to liquid at the same temperature instead of lowering liquid temperature",
                "Because the condenser is too small",
                "Because the metering device is closed",
              ],
              answer: 1,
              explain: "Where liquid and vapour coexist, removing heat changes state, not temperature. Only once all vapour has condensed can further cooling drop the liquid below its saturation temperature.",
            },
            {
              q: "Twenty per cent of the refrigerant entering the metering device is already vapour. Refrigerating effect falls from 112 to 80 kJ/kg. What percentage of capacity has been lost?",
              options: ["About 5%", "About 20%", "About 29%", "About 50%"],
              answer: 2,
              explain: "The loss is 32 ÷ 112 = 29%. The loss is bigger than the vapour fraction because that flash gas has already spent its latent heat and now has to be pumped around for nothing.",
            },
            {
              q: "Low suction, high superheat and nil subcooling versus low suction, high superheat and high subcooling. What separates these two?",
              options: [
                "The first is a restriction, the second is undercharge",
                "The first is undercharge, the second is a restriction",
                "Both are undercharge at different severities",
                "Neither can be told apart without recovering the charge",
              ],
              answer: 1,
              explain: "Undercharge cannot build subcooling at all. A restriction holds liquid back ahead of itself, so subcooling stays normal or high and there is often a temperature drop or frost spot across the drier or valve.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "psychro-chart",
          title: "The psychrometric chart and the properties of air",
          minutes: 13,
          simple: "Air is a mixture of dry gases plus some water vapour, and how much water it can hold depends strongly on its temperature. The psychrometric chart lets you take two easy measurements with a sling psychrometer and read off five more properties you could not measure directly.",
          refs: REFS,
          content: `
Refrigeration cools refrigerant. Air-conditioning conditions **air**, and air is
a more complicated substance because it carries water vapour. Psychrometrics is
the study of the properties of that moist air, and the psychrometric chart is
the tool that makes it usable on site.

## What air is made of

Dry air is roughly **78% nitrogen, 21% oxygen** and about **1%** argon, carbon
dioxide and traces of neon, helium and methane. On top of that, real air always
carries water vapour — anywhere from about **0.01% to over 4%** by mass. Four per
cent is not exotic: air above 35°C at saturation during the wet season in
northern Australia gets there.

Air also carries pollutants, so an air-conditioning system has three jobs
besides temperature: maintain oxygen content by ventilating, remove impurities
by filtration, and control moisture content.

Air obeys the gas laws of **Boyle, Charles and Dalton** — the volume, pressure
and temperature of the mixture are interrelated, and each gas in the mixture
behaves as if the others were not there. That last point is why we can treat the
water vapour separately from the dry air.

## The seven properties

Measure any **two** of these — most conveniently the dry bulb and wet bulb
temperatures — and the chart gives you the other five.

- **Dry bulb temperature (DBT), °C** — what an ordinary thermometer reads.
- **Wet bulb temperature (WBT), °C** — what a thermometer reads with a wetted
  wick over the bulb, moved rapidly through the air. Evaporation from the wick
  cools it; the drier the air, the more evaporation and the lower the reading.
  At 100% RH there is no evaporation and WBT equals DBT.
- **Enthalpy (h), kJ/kg** — total heat content, sensible plus latent, measured
  on these charts from a base of 0 kJ/kg at 0°C.
- **Dew point (DP), °C** — the temperature at which moisture starts to condense
  on a colder surface. Cool air below its dew point and it must give up water:
  that is **dehumidification**.
- **Specific volume (SV), m³/kg** — the space one kilogram of air occupies. This
  is really a density measure, and it is essential for converting an airflow in
  m³/s to a mass flow in kg/s. A fan moving 1 m³/s moves about **1.25 kg/s at
  8°C** but only about **1.11 kg/s at 40°C** — same fan, same duct, 11% less air
  by mass.
- **Relative humidity (RH), %** — how much moisture the air holds compared with
  the most it *could* hold at that temperature.
- **Humidity ratio, g/kg** — the actual mass of water vapour per kilogram of dry
  air. Also called moisture content or mixing ratio.

!FIG[psychrometric-skeleton]

### Humidity ratio versus relative humidity

This distinction trips people up, so it is worth being blunt. **Relative
humidity depends on temperature; humidity ratio does not.** Humidity ratio is a
count of grams of water per kilogram of dry air — like the number of spoons of
sugar in a cup of coffee. Relative humidity is that amount expressed as a
percentage of what the air could hold at its current temperature.

(Strictly, *specific humidity* is a different quantity again — grams of water
per kilogram of the *total* moist air mixture rather than per kilogram of dry
air. Charts use humidity ratio, and specific humidity is rarely used in
air-conditioning work, but the two names get swapped carelessly.)

Warm the air without adding water and humidity ratio stays fixed while RH falls.
Cool it and RH climbs until it hits 100% — the dew point — after which further
cooling *does* reduce the humidity ratio, because water is condensing out.

Here is the same idea as data:

| Dry bulb | Max moisture at saturation | Actual moisture | RH | Wet bulb |
|---|---|---|---|---|
| 35°C | 36 g/kg | 36 g/kg | 100% | 35°C |
| 35°C | 36 g/kg | 18 g/kg | 50% | 26.3°C |
| 35°C | 36 g/kg | 4 g/kg | 11% | 15.4°C |
| 23°C | 18 g/kg | 18 g/kg | 100% | 23°C |
| 23°C | 18 g/kg | 9 g/kg | 50% | 16.3°C |
| 12°C | 9 g/kg | 9 g/kg | 100% | 12°C |
| 12°C | 9 g/kg | 4.5 g/kg | 50% | 7.5°C |
| 2°C | 4.5 g/kg | 4.5 g/kg | 100% | 2°C |
| 2°C | 4.5 g/kg | 3.0 g/kg | 66% | 0°C |
| 0°C | 4 g/kg | 4 g/kg | 100% | 0°C |
| 0°C | 4 g/kg | 2 g/kg | 50% | -3°C |

Read the first and third rows together: **4 g/kg is saturation at 0°C and only
11% RH at 35°C**. Same water, wildly different relative humidity. And notice how
the saturation capacity roughly doubles for every 10 K rise — 4 g/kg at 0°C,
9 at 12°C, 18 at 23°C, 36 at 35°C.

That table also explains summer air-conditioning in one line: cool 35°C outside
air, or 23°C room air, down to about **12°C**, and only 9 g/kg of moisture can
remain. Let that air warm back to 23°C in the room and it sits at 9 g/kg out of
a possible 18 — **50% RH**, which is where people are comfortable.

## Reading the chart

The chart's layout, in the directions you read each property:

| Property | Lines run | Read the scale |
|---|---|---|
| Dry bulb | Vertically from the base | Along the bottom |
| Wet bulb | Sloping down to the right from the saturation curve | On the curved left edge |
| Enthalpy | Almost parallel to wet bulb, slightly different slope | On the diagonal scales at both edges |
| Dew point | Horizontally to the left | On the saturation curve |
| Humidity ratio | Horizontally to the right | Up the right-hand side |
| Relative humidity | Curves sweeping up to the right, 100% being the saturation curve | Labelled on the curves |
| Specific volume | Steep lines sloping up to the left, only about seven of them | Labelled on the lines |

### Worked example 1 — a room reading

A sling psychrometer used in an air-conditioned space reads **25°C DB, 18°C WB**.
Pencil the 25°C vertical and the 18°C wet bulb line; where they cross is your
point.

- **Enthalpy:** lay a rule through the point aligned with the enthalpy scales at
  both edges — just above the 50 line, so **h = 50.5 kJ/kg**.
- **Dew point:** run left to the saturation curve — just over 14, so
  **DP = 14.2°C**.
- **Specific volume:** the point falls between the 0.850 and 0.875 lines, about
  a quarter of the way across. A quarter of 0.025 is about 0.006, so
  **SV = 0.856 m³/kg**.
- **Relative humidity:** the point sits exactly on the 50% curve, so **RH = 50%**.
- **Humidity ratio:** run right to the base scale — **10 g/kg** exactly, which
  agrees with the dew point of 14.2°C.

That point at 25°C and 50% RH is the traditional "centre of the chart" used
later for sensible heat ratio work.

### Worked example 2 — outside air on a summer day

Ambient is **36°C DB and 40% RH**. Pencil the 36°C vertical up to the 40% curve.

- **Enthalpy** = **75 kJ/kg** (a line through the point passes exactly through
  the 75 mark).
- **Wet bulb** — just below the 25°C wet bulb line, so **24.8°C**.
- **Dew point** — running left, just above 20, so **20.3°C**.
- **Specific volume** — between the 0.875 and 0.900 lines, roughly nine tenths of
  the way, so 0.875 + 0.022 = **0.897 m³/kg**.
- **Humidity ratio** — running right, **15.4 g/kg**.

Compare that with the room reading: the outside air carries 15.4 g/kg against
the room's 10 g/kg, and 75 kJ/kg against 50.5. Every kilogram of outside air you
bring in costs you 24.5 kJ, and most of it is latent.

## Taking readings that are worth plotting

- Check the psychrometer first: with a dry wick, both thermometers must read the
  same.
- Fill the reservoir with **distilled water**. Tap water leaves salts and
  carbonates in the wick that ruin readings. Otherwise, replace or wash the wick
  regularly.
- Swing at **two to three revolutions per second for about two minutes**.
- Stop gently and read the **wet bulb first**, quickly — it rises fast once the
  air stops moving. Then the dry bulb. Record both to 0.5 K or better.
- Take the room reading in a representative spot — ideally where the person
  complaining actually sits.

## What to remember

- Two properties fix the air; the chart gives the rest.
- Humidity ratio is an absolute amount; relative humidity is a percentage of
  capacity and changes with temperature alone.
- Warm air holds far more moisture — roughly double for every 10 K.
- Specific volume is what converts m³/s to kg/s, and it changes noticeably with
  temperature.
- Wet bulb accuracy takes practice; a dry or dirty wick makes the whole plot
  worthless.
`,
          quiz: [
            {
              q: "Air at 35°C holds 4 g/kg of moisture. Roughly what is its relative humidity?",
              options: ["100%", "50%", "11%", "4%"],
              answer: 2,
              explain: "At 35°C saturated air holds about 36 g/kg, so 4 g/kg is about 11% of capacity. That same 4 g/kg would be 100% RH at 0°C — which is why RH alone never tells you how much water is present.",
            },
            {
              q: "Why does a fan moving a constant 1 m³/s deliver less cooling capacity when handling 40°C air than 8°C air?",
              options: [
                "The fan slows down in hot air",
                "Specific volume is higher at 40°C, so the same volume is a smaller mass — about 1.11 kg/s instead of 1.25 kg/s",
                "Hot air has a lower specific heat",
                "The duct expands and leaks",
              ],
              answer: 1,
              explain: "Capacity depends on mass flow multiplied by enthalpy change. Hot air is less dense, so a fixed volume flow carries roughly 11% less mass, and the duty falls with it.",
            },
            {
              q: "Air is cooled steadily with no moisture added or removed. What happens on the chart before dew point is reached?",
              options: [
                "Humidity ratio falls and RH stays constant",
                "Humidity ratio stays constant and RH rises",
                "Both fall together",
                "Enthalpy stays constant",
              ],
              answer: 1,
              explain: "Sensible cooling moves the point horizontally to the left at constant humidity ratio. Because colder air can hold less, RH climbs until it reaches 100% at the dew point, after which moisture starts condensing out.",
            },
            {
              q: "A wet bulb reading is taken but the wick was wetted with tap water and has been in use for months. What is the likely error?",
              options: [
                "The wet bulb reads too low, exaggerating humidity",
                "Salt and carbonate deposits suppress evaporation, so the wet bulb reads too high and the air looks more humid than it is",
                "No error — only wick wetness matters",
                "The dry bulb reads too high",
              ],
              answer: 1,
              explain: "Mineral deposits slow evaporation from the wick, so it does not cool as far as it should. The wet bulb reads high, the plotted point moves toward saturation, and the calculated humidity and enthalpy are both wrong.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "psychro-processes",
          title: "Air-conditioning cycles, bypass factor and capacity from the air side",
          minutes: 14,
          simple: "Plot four air conditions around an air-conditioner — supply, return, outside and mixed — and you have drawn the whole cycle. From the same plot you can work out the mix of fresh air, how well the coil is working, and the actual kilowatts the machine is delivering, all without touching a gauge.",
          refs: REFS,
          content: `
Everything an air-conditioner does to air can be drawn as a movement on the
psychrometric chart. Learn the seven possible directions, then use them to plot
a real machine and measure it.

## The seven processes

| Process | Direction on the chart | Where it is used |
|---|---|---|
| Cooling and dehumidifying | Down and to the left | The normal refrigerated air-conditioning process |
| Evaporative cooling | Down-left along a constant wet bulb line | Hot dry inland Australia |
| Heating | Straight right, humidity ratio unchanged | Any sensible heater |
| Heating and humidifying | Up and to the right | Winter comfort, hospitals, labs, coolrooms |
| Cooling (sensible only) | Straight left, humidity ratio unchanged | Plate heat exchanger between airstreams |
| Cooling and humidifying | Up and to the left | Rare — desert conditions |
| Chemical dehumidification | Right and down: moisture out, temperature up | Silica gel or activated alumina desiccants |

!FIG[ac-process-arrows]

Notes worth having:

- **Cooling and dehumidifying** does not truly follow the straight line drawn on
  the chart: the air cools sensibly to about 90% RH first, and only then does
  dehumidification begin along the saturation curve. The straight line shows the
  net result. The colder the final air, the less moisture can remain in it.
- **Evaporative cooling** needs dry air and **fresh** air only — not recirculated
  — exhausted through balanced fixed openings. On a humid coastal day the effect
  collapses because evaporation slows.
- **Heating alone** is a winter trap. Comfort needs about **8 to 10 g/kg**; heat
  5°C air to 25°C and you reach only about 30% RH — dry eyes, lips and nostrils.
  Houses get away with it because most air is recirculated, but buildings drawing
  20% to 100% outside air need humidification by water spray, steam injection or
  a purpose-built humidifier.
- **Chemical dehumidification** generates heat as the desiccant absorbs moisture,
  which is why it sits outside normal comfort air-conditioning.

## Plotting a real air-conditioner

A commercial unit with fixed outside air needs **four** air conditions measured:
**A** supply (leaving the coil), **B** return (leaving the room), **C** outside
(at the fresh air intake) and **D** mixed (entering the coil). Take a worked set
and plot each point from its dry and wet bulb pair:

| | A supply 13/11 | B return 26/17 | C outside 36/26 |
|---|---|---|---|
| Enthalpy | 32 kJ/kg | 48 kJ/kg | 80 kJ/kg |
| Humidity ratio | 7.4 g/kg | 8.4 g/kg | 17 g/kg |
| Dew point | 9.5°C | 11.6°C | 22.4°C |
| Specific volume | 0.820 m³/kg | 0.859 m³/kg | 0.900 m³/kg |
| Relative humidity | 80% | 40% | 46% |

A to B is the room load per kilogram of air: a gain of **16 kJ/kg**, of which
**1.0 g/kg** is added moisture. The line rises — sensible plus latent heating.
With nobody in the room and nothing evaporating it would run horizontal: pure
**sensible heating** at constant humidity ratio.

**Point D** must lie on the straight line between B and C, so measuring just one
of its temperatures fixes the other: a measured **28°C DB** puts D on B–C where
the wet bulb reads **19°C**.

Read the mixing proportions off that geometry. B is 26°C, C is 36°C, so the span
is **10 K**; D sits 2 K above B, two tenths of the way along, so the mixture is
**20% outside air and 80% return air**. The general rule: **a mixture lands
closest to whichever component makes up more of it.** Half and half would put D
at 31°C, exactly halfway. Think of a cup of tea — the less cold milk you add,
the closer the result stays to boiling.

Joining **D to A** closes the cycle: A–B is supply air travelling through the
room picking up heat and moisture, B–D is return air mixing with outside air,
and D–A is mixed air passing through the coil and giving up both sensible and
latent heat.

## Bypass factor and apparatus dew point

Not every molecule of air touches a fin. Air that slips through untouched leaves
the coil at its entering temperature and mixes downstream with the fully cooled
air. The proportion that escapes is the **bypass factor (BF)**.

**BF = (leaving air temp − coil temp) ÷ (entering air temp − coil temp)**

Worked example: air enters at **26°C**, the mean coil surface is **10°C**, air
leaves at **14°C**. Entering minus coil = 16 K; leaving minus coil = 4 K; so
BF = 4 ÷ 16 = **0.25**. One quarter of the air went through unchanged, which is
why the supply air is 14°C rather than 10°C.

What controls bypass: **air velocity** (faster air, more bypass), **fin spacing**
(more fins per metre, less bypass), **coil depth** (more rows, less bypass) and
**turbulence** (ripple or zig-zag fins increase contact, so less bypass).

| Application | Normal bypass factor |
|---|---|
| Residential, low latent load | 0.2 to 0.3 |
| Commercial, higher latent load | 0.1 to 0.2 |
| Very high humidity, high latent load | 0.05 to 0.1 |

If measured BF is **too high**, look for air velocity too high, a coil too
shallow for the duty, air leaking around the coil casing, a metering device not
fully feeding the coil, or a badly designed coil with excessive pressure drop.
If BF is **too low**, air velocity is probably too low — a failing fan, blocked
filters or restricted return air ducts.

The coil temperature used in that calculation is the **apparatus dew point
(ADP)** — the mean coil surface temperature. On the chart you find it by
extending the D–A process line until it cuts the saturation curve. In normal
summer service with air entering at 24°C to 26°C, ADP runs about **9°C to 11°C**.
Colder air on gives a lower ADP, exactly as it gives a lower suction temperature.

## Sensible heat ratio

Down the right-hand edge of a standard chart is a **sensible heat ratio** scale:

**SHR = sensible heat ÷ total heat**

The designer sets the slope of a process line from calculated loads; the
technician works it backwards from measured conditions. To read it, draw a line
through the chart's centre point (25°C, 50% RH) **parallel to the process line
you care about**, and read where it cuts the SHR scale.

- Parallel to **A–B** gives the **room SHR** — about **0.86** here. If the total
  room load is 10 000 W, the sensible portion is 0.86 × 10 000 = **8 600 W**,
  leaving 1 400 W latent.
- Parallel to **D–A** gives the **coil SHR** — about **0.70** here, lower because
  the coil carries the latent load of the outside air as well as the room's.

## What to remember

- Four points — supply, return, outside, mixed — describe the whole cycle.
- Mixed air always lies on the straight line between return and outside, in
  proportion to the mix.
- Bypass factor compares the coil's actual leaving temperature with its surface
  temperature; ADP is that surface temperature.
- Cooling and dehumidifying is the only process that satisfies a hot, humid
  climate; everything else is a compromise.
- SHR read parallel to A–B is the room's; parallel to D–A is the coil's, and the
  coil's is lower whenever outside air is introduced.
`,
          quiz: [
            {
              q: "Return air is 26°C, outside air is 36°C, and the mixed air measures 28°C dry bulb. What proportion of outside air is being introduced?",
              options: ["10%", "20%", "28%", "80%"],
              answer: 1,
              explain: "The span B to C is 10 K and D sits 2 K above B, so D is two tenths of the way along: 20% outside air, 80% return air. A mixture always lies closest to whichever component dominates.",
            },
            {
              q: "Air enters a coil at 26°C, the mean coil surface is 10°C, and air leaves at 14°C. What is the bypass factor?",
              options: ["0.15", "0.25", "0.40", "0.54"],
              answer: 1,
              explain: "BF = (14 − 10) ÷ (26 − 10) = 4 ÷ 16 = 0.25. A quarter of the air passes through without touching a fin and mixes back in downstream, which is why supply air is 14°C and not 10°C.",
            },
            {
              q: "Why does simply heating 5°C outside air to 25°C give an uncomfortable result?",
              options: [
                "The air becomes too heavy to circulate",
                "Humidity ratio is unchanged, so relative humidity falls to around 30% — well under the 8 to 10 g/kg comfort range",
                "Heating always adds moisture, raising humidity too far",
                "The dew point rises above room temperature",
              ],
              answer: 1,
              explain: "Sensible heating moves the point horizontally: the grams of water per kilogram do not change, but the air's capacity does, so RH collapses. That is why buildings on high outside-air rates need humidification.",
            },
            {
              q: "A system's room SHR reads 0.86 while its coil SHR reads 0.70. Why is the coil figure lower?",
              options: [
                "The coil is oversized",
                "The coil handles the latent load of the introduced outside air on top of the room's own latent load",
                "The coil SHR is always read on a different scale",
                "Bypass air raises the room SHR",
              ],
              answer: 1,
              explain: "Room SHR describes only what happens between supply and return. The coil also has to deal with the moisture brought in with the outside air, so a larger share of its total load is latent and the ratio falls.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "psychro-performance",
          title: "Proving an air-conditioner's performance on site",
          minutes: 11,
          simple: "A customer says the unit is not cooling. With a psychrometer and an air-velocity meter you can put a number on it: measure the air in and out, measure how much air is moving, and multiply. That gives you the machine's actual kilowatts, which you can hold up against what it is supposed to deliver.",
          refs: REFS,
          content: `
Gauges tell you what the refrigerant is doing. The **air side** tells you what
the customer is actually getting. Being able to measure duty from air readings
is what turns "it seems weak" into "it is delivering 2.6 kW against a rated
3.5 kW, so let us find the missing kilowatt".

## What "normal" looks like

Normal psychrometric conditions are as slippery as normal pressures, but for a
typical package air-conditioner in a 35°C ambient recirculating room air at
about 23°C:

| Reading | Typical value |
|---|---|
| Air on the coil | about 25°C |
| Air off the coil | about 13°C |
| TD across the coil | about 12 K |
| Suction temperature | 3°C to 4°C (445–465 kPa on R22) |
| Condensing temperature | 52°C to 56°C (1950–2150 kPa on R22) |
| Air volume per kW of cooling | 60 to 70 L/s |

With cooler conditions everything scales down together while the TD stays much
the same. A **dry** day (high SHR) can stretch the coil TD to 15 or 16 K; a
**humid** day (low SHR) pulls it back toward 10 K, because more coil capacity is
going into condensing water. A unit running **without filters** circulates too
much air and shows a reduced TD.

## Measuring capacity from the air side

This is the payoff. It gives you the machine's actual duty in kilowatts, on
site, with a psychrometer and an anemometer.

**Q = mass flow of air (kg/s) × enthalpy change (kJ/kg)**

where mass flow = volume flow (m³/s) ÷ specific volume (m³/kg) *at the point
where the velocity was measured*.

### Worked example — room air-conditioner, no outside air

Air off the coil **13°C DB / 11°C WB**; air returning to the filter **25°C DB /
17°C WB**. Filter face **0.4 m × 0.25 m**, measured velocity **1.5 m/s**.

(a) From the chart: return h = 47 kJ/kg, supply h = 32 kJ/kg
→ enthalpy change = **15 kJ/kg**

(b) Air volume = 0.4 × 0.25 × 1.5 = **0.150 m³/s**

(c) Specific volume at the measuring point (return air) = 0.855 m³/kg
→ mass = 0.150 ÷ 0.855 = **0.175 kg/s**

(d) Capacity = 15 kJ/kg × 0.175 kg/s = **2.63 kJ/s = 2.63 kW**

Cross-check against the rule of thumb: 0.150 m³/s is 150 L/s, and 150 ÷ 2.63 =
57 L/s per kW — a little tight against the 60 to 70 L/s guideline, which is what
you would expect on a fairly humid day.

### Worked example — ducted system with outside air

Supply air **11°C DB / 9°C WB**; return air **24°C DB / 15.5°C WB**; outside air
**34°C DB / 24°C WB**; **30% outside air** continuously. Supply duct **0.8 m ×
0.5 m**, velocity **8 m/s** measured downstream of the fan.

(a) Find the mixed air. Return to outside spans 24°C to 34°C = **10 K**; 30% of
10 K = 3 K, so mixed air DB = 24 + 3 = **27°C**. Plotted on line B–C its wet
bulb is **18.4°C**.

(b) Enthalpy change across the coil, D to A: mixed h ≈ 52 kJ/kg, supply
h ≈ 27 kJ/kg → **25 kJ/kg**.

(c) Duct area = 0.8 × 0.5 = 0.4 m²; volume = 0.4 × 8 = **3.2 m³/s**

(d) Velocity was measured in the supply duct, so use the specific volume at
condition A = 0.812 m³/kg:
mass = 3.2 ÷ 0.812 = **3.94 kg/s**

(e) Capacity = 25 kJ/kg × 3.94 kg/s = **98.5 kJ/s = 98.5 kW**

Note the discipline in step (d): specific volume must be taken at the condition
of the air where the velocity was measured, not somewhere else in the system.
Getting that wrong shifts the answer by several per cent.

## Practical service method

1. Prepare the psychrometer — distilled water in the wick — and take a room
   reading where the complainant actually sits.
2. Read the return air grille (point B), or the filter face if no outside air is
   introduced (point D). Do not stand in front of the supply outlet: your body
   reflects cold air back into the return grille.
3. Read the supply **inside** the grille or duct (point A) — room air mixes with
   supply air immediately outside it. On small units, check with thermocouples
   that no temperature rise occurs between the coil and your chosen point.
4. Read outside air at the intake (point C), shaded from sun and clear of
   condenser discharge — unless that air really is being drawn in, in which case
   you have found the fault.
5. Where mixed air cannot be read cleanly, take **dry bulb only** at four points
   across the coil face and average; the mixed point must lie on line B–C anyway.
   Keep the plant running continuously throughout.

Plot it, compare with the designer's expected cycle, and the deviation tells you
whether the problem is airflow, refrigeration capacity, outside air proportion
or coil condition.

>! Working around live air-handling plant means spinning fans, belts and
>! electrical terminals. Isolate and lock out before opening any access panel
>! that exposes a fan or a terminal box, and never rotate a psychrometer where
>! it can reach a fan inlet.

## What to remember

- Capacity from the air side = volume ÷ specific volume × enthalpy change.
- Take specific volume at the condition where the velocity was measured.
- Enthalpy change is read across the coil: D to A with outside air, B to A
  without.
- Read the wet bulb first and read it fast; a dry or dirty wick makes every
  derived number wrong.
- Compare the plotted operating cycle with the designer's expected cycle — the
  deviation names the fault.
`,
          quiz: [
            {
              q: "Velocity is measured in the supply duct at condition A. Which specific volume must be used to convert m³/s to kg/s?",
              options: [
                "The specific volume of the return air",
                "The specific volume at condition A, where the velocity was measured",
                "The specific volume of outside air",
                "Standard air at 1.2 kg/m³ regardless",
              ],
              answer: 1,
              explain: "Specific volume changes with temperature and humidity, so it must be taken at the actual condition of the air passing the measuring point. Using return air specific volume on a supply duct traverse introduces several per cent of error.",
            },
            {
              q: "A room air-conditioner moves 0.150 m³/s of return air at 0.855 m³/kg, with a 15 kJ/kg enthalpy drop across the coil. What is its refrigerating capacity?",
              options: ["2.25 kW", "2.63 kW", "9.0 kW", "0.175 kW"],
              answer: 1,
              explain: "Mass flow = 0.150 ÷ 0.855 = 0.175 kg/s; capacity = 0.175 × 15 = 2.63 kW. The 2.25 figure comes from multiplying volume by enthalpy without converting to mass — a very common slip.",
            },
            {
              q: "On a very humid day the coil sensible heat ratio falls. What happens to the temperature drop across the cooling coil?",
              options: [
                "It increases to 15 or 16 K because the coil works harder",
                "It falls toward about 10 K because more of the coil capacity goes into condensing moisture",
                "It stays at exactly 12 K regardless",
                "It becomes negative",
              ],
              answer: 1,
              explain: "A low SHR means a large latent share of the load. Capacity spent condensing water is not available to lower dry bulb temperature, so the sensible TD shrinks — the opposite of a dry, high-SHR day.",
            },
            {
              q: "Return air is 24°C DB, outside air is 34°C DB, and 30% outside air is introduced. What dry bulb should the mixed air be?",
              options: ["25°C", "27°C", "29°C", "31°C"],
              answer: 1,
              explain: "The span is 10 K and 30% of 10 K is 3 K, so mixed air = 24 + 3 = 27°C. Plotting that on the line between return and outside then gives the wet bulb, and with it the mixed-air enthalpy for the capacity calculation.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
