/* =========================================================================
   Course content, module R2.3 — Air-conditioning: ventilation, psychrometrics
   and air treatment.
   Source: Australian Refrigeration and Air-conditioning, Volume 2 (Graham
   Boyle, 5th edition, pub. AIRAH), Chapter 3 — Air-conditioning.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const BOOK = "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — ";
  const REFS = [BOOK + "Chapter 3, Air-conditioning"];
  function ref() {
    return Array.prototype.slice.call(arguments).map(function (t) { return BOOK + t; });
  }

  const MODULES = [
  {
    id: "v2-air-conditioning",
    stream: "v2",
    title: "R2.3 · Air-conditioning: ventilation, psychrometrics and air treatment",
    blurb: "From opening a window to full climate control: ventilation, the psychrometric properties of moist air, and the seven things a plant does to air — heat, cool, humidify, dehumidify, filter, purify and distribute.",
    lessons: [

      /* ================================================================
         1 — Ventilation, natural and mechanical
         ================================================================ */
      {
        id: "ventilation",
        title: "Ventilation: natural and mechanical",
        minutes: 12,
        simple: "Before anyone had machines, buildings were kept liveable by opening windows and letting the wind push air through. It works like blowing through a straw: air only moves if there is a push at one end and a way out at the other. When the weather cannot be relied on, a fan does the pushing instead — and whether it blows air in or sucks it out decides whether heat and fumes get driven over the people in the room.",
        refs: ref("natural ventilation, window types and the effect of wind on buildings", "mechanical ventilation systems and applications"),
        content: `
Comfort in a building is a sliding scale. At one end you open a window; at the
other you run a fully controlled air-conditioning plant that holds temperature,
moisture, cleanliness and air movement to a set point all year. A technician who
understands the cheap end of that scale makes better decisions at the expensive
end, because a great many "air-conditioning complaints" are really ventilation
complaints.

## What ventilation is actually for

Ventilation has one job: remove air that has been used up or contaminated and
replace it with acceptable outside air, so indoor air quality stays acceptable.
That is a different job from cooling — a fan bringing in 35°C outside air is
ventilating perfectly and cooling not at all.

Discomfort comes from two directions. Temperature extremes can only be fixed by
heating or cooling. But the "stuffy" feeling that most occupants actually
complain about usually comes from still air, high relative humidity and a
build-up of odours. Moving fresh air through a space fixes stuffiness without a
kilowatt of refrigeration.

## Energy management starts with the building

Every air-conditioning process costs energy, which is why HVAC plant is such a
visible target in the greenhouse debate. The cheapest kilowatt is the one the
building never demands: correct orientation, shading, insulation and sealing;
then correct sizing and intelligent controls; and finally maintenance. The best
design on paper still fails if nobody cleans the filters, checks the charge or
calibrates the controls. That last part is your job.

## Natural ventilation — the four deciding factors

### (a) Size and type of window

A **double-hung sash** window gives two openings in one frame: cool air enters
under the lower sash while warm buoyant room air spills out over the top sash.
**Side-hinged casements** can be swung to scoop a breeze that is not square-on
to the wall. **Side-pivoting windows and louvres** are set to throw entering air
downward in summer, and upward in winter so cold air mixes into the ceiling
layer before it reaches anyone.

### (b) Location of the openings

Wind striking a building creates a **high-pressure region on the windward face
and low pressure on the leeward face**. Air enters where pressure is high
(infiltration) and leaves where it is low (exfiltration).

| Opening arrangement | Result |
|---|---|
| Windward and leeward walls both open | Best — genuine cross-flow through the space |
| Openings on adjacent walls | Marginally useful, very dependent on wind angle |
| Openings on one wall only | Almost no through-flow; the room just sloshes |

### (c) Wind velocity and direction

The driving pressure is the wind, and the wind is not under your control. Too
little and nothing moves; too much and you get draughts and damage, so openings
need constant adjustment. A 90° wind shift can turn comfortable ventilation into
an unusable draught, or into nothing at all.

### (d) Window treatments

The pressure difference between windward and leeward faces is *tiny* — a
fraction of a kilopascal. Flywire, heavy drapes and security screens therefore
throttle natural ventilation badly, because there is no fan pressure available
to push through them.

> Natural ventilation is free and silent, but **unreliable**: it depends on
> weather, wind direction and how the building happens to be built. Wherever the
> result must be guaranteed — plant room, kitchen, laboratory, office tower —
> the air has to be moved mechanically.

## Mechanical ventilation — the three arrangements

The principle has not changed since the punkah, a canvas-on-timber ceiling fan
swung on a rope in colonial India; only the prime mover has. Today an electric
motor drives a propeller or centrifugal fan.

| Arrangement | How it works | Room pressure | Typical use |
|---|---|---|---|
| **Forced** | A fan pushes outside air *into* the space; air escapes through door grilles, windows and leaks | Positive | Halls, offices, workshops where dust or fumes must be kept *out* |
| **Induced (exhaust)** | A fan high on a wall or in the ceiling throws air *out*; replacement air enters through doors, windows and louvres | Negative | Kitchens, plant rooms, toilets, welding bays — anywhere with heat or fumes |
| **Combined** | Separate supply and exhaust fans | Set by design | Large or deep-plan spaces where leakage paths are not good enough |

The choice is not arbitrary. **Induced ventilation is generally preferred where
heat or fumes are generated**, because a supply fan blowing into such a space
drives the contaminated, heated air across the occupants on its way out. An
exhaust fan pulls it away from them. The same pressure logic controls
cross-contamination between rooms: positive pressure keeps dirt out of a clean
space, negative pressure keeps fumes inside a dirty one.

Places that normally need mechanical ventilation include occupied workrooms;
machine and plant rooms where heat is released — including your own compressor
and switch rooms; process areas needing rapid cooling of food, confectionery or
print; and any space where toxic or unpleasant fumes accumulate. Laboratories
handling highly toxic or radioactive materials go further, with purpose-built
**fume cupboards** of non-corrodible materials, glazed on all sides so the work
can be watched while it stays inside the exhausted enclosure.

## Designing for people, not just for air changes

Safety comes first in an industrial installation, but where people stand in the
airstream six things must be considered: **noise**, **draughts** (perceptible
above about 0.2 m/s), **turbulence**, **temperature**, **moisture content** of
the incoming air, and **purity** of the air being circulated.

> **Ventilation air is a load.** Sensible load in kW is roughly
> 1.2 × (L/s) × ΔT ÷ 1000. Bring in 500 L/s of 35°C air to a 24°C space and that
> is 1.2 × 500 × 11 ÷ 1000 = **6.6 kW before the room has done anything at
> all**, plus the latent load of the moisture that air carries.

>! A ventilating fan is not a substitute for gas detection or for a
>! purpose-designed exhaust in a refrigerant plant room. Plant rooms holding
>! A2L, A3 or ammonia charges have specific ventilation and alarm requirements
>! under AS/NZS 5149 and the relevant safety standards. Fitting "a fan that
>! seems big enough" is not compliance.

## Points to remember on site

- Use a top and a bottom opening together where only windows are available, and
  set pivoting sashes for downward deflection in summer, upward in winter.
- Warn the customer that flywire and heavy curtains will cut natural airflow.
- Provide the make-up path. An exhaust fan in a sealed room works against a
  dead-end system: it draws current, makes noise and moves very little air.
  Admit replacement air at low level when exhausting high.
- Keep intakes well away from exhaust discharges, flues, cooling tower plumes
  and loading docks.
- Clean supply and exhaust grilles regularly — resistance is the enemy of any
  low-pressure ventilation system.
- A circulating or destratification fan provides no ventilation at all; it only
  stirs the air already there.
- Check fan rotation against the arrow on the scroll. A fan running backwards
  after a phase change still moves some air and still sounds like a fan.
- Run ventilating fans overnight in hot weather to purge the building's stored
  heat before the next day.
`,
        quiz: [
          {
            q: "A tenant complains their office is stuffy. Windows are open on the western wall only, and the prevailing breeze is from the west. What is the most likely cause of the poor result?",
            options: [
              "The windows are too small to admit enough air",
              "There are no openings on the leeward side, so there is no path for the air to leave",
              "The wind is too strong and is being deflected around the building",
              "Warm air cannot enter a building on the windward side",
            ],
            answer: 1,
            explain: "Cross-ventilation needs a pressure difference across the space: high pressure windward in, low pressure leeward out. With openings on one wall only, air has nowhere to exit, so almost no through-flow occurs no matter how big the windows are. Window size only matters once a flow path exists.",
          },
          {
            q: "Why do flywire screens and heavy curtains reduce natural ventilation so much more than they would reduce ducted airflow?",
            options: [
              "They block the sunlight that drives thermal buoyancy",
              "They increase the dew point of the entering air",
              "The wind pressure driving natural ventilation is very small, so any added resistance stops the flow",
              "They cause the air to become turbulent and reverse direction",
            ],
            answer: 2,
            explain: "Wind pressure across a building is only a fraction of a kilopascal. A fan in a duct can develop hundreds of pascals and push through a screen or filter; the wind cannot. Added resistance therefore takes a much larger share of the available pressure in a naturally ventilated room.",
          },
          {
            q: "A welding bay generates heat and fumes at bench level. Which ventilation arrangement is preferred, and why?",
            options: [
              "Forced supply, because pressurising the bay dilutes the fumes fastest",
              "Induced (exhaust), because supplying air into the bay would push heat and fumes across the operators",
              "Neither — natural ventilation is always adequate for welding",
              "Forced supply, because it prevents outside dust from entering",
            ],
            answer: 1,
            explain: "Exhaust ventilation draws the contaminant away from the people. A supply fan blowing into the bay pressurises it and sends the fume-laden air out past whoever stands between the fan and the leakage path. Positive pressure is for keeping contaminants out of clean spaces, not for removing them from dirty ones.",
          },
          {
            q: "An exhaust fan rated at 400 L/s is running in a room with all doors and windows closed. What is the most likely result?",
            options: [
              "The fan delivers its full rated airflow because it is rated for the room",
              "The room pressure rises and airflow increases",
              "Airflow is far below rating because there is no make-up air path",
              "The motor draws far more current than normal and trips",
            ],
            answer: 2,
            explain: "With no replacement air path the fan works against a near dead-end system: static pressure rises and flow collapses. A centrifugal fan typically draws LESS power at low flow, so the motor usually does not trip — which is why this fault is so often missed. Provide a low-level inlet and the airflow returns.",
          },
          {
            q: "500 L/s of 33°C outside air is ventilated into a space held at 23°C. Approximately what sensible load does that ventilation air impose?",
            options: [
              "0.6 kW",
              "6 kW",
              "60 kW",
              "None — ventilation air imposes only a latent load",
            ],
            answer: 1,
            explain: "Sensible load in kW is roughly 1.2 × L/s × ΔT ÷ 1000 = 1.2 × 500 × 10 ÷ 1000 = 6 kW. The ventilation air also brings a latent load with its moisture, but the sensible part alone is substantial — which is why outdoor-air rates are set to what is needed, not to what is convenient.",
          },
        ],
      },

      /* ================================================================
         2 — Air-conditioning defined
         ================================================================ */
      {
        id: "ac-defined",
        title: "Air-conditioning defined, and the five things it controls",
        minutes: 8,
        simple: "Air-conditioning is not just cooling. A true air-conditioning plant looks after five things at once: how warm the air is, how much moisture it holds, how clean it is, how fresh it is, and how it is delivered around the room. Think of it as looking after the whole recipe of the air, not just its temperature.",
        refs: ref("air-conditioning defined, comfort and process applications, and the air-conditioning process"),
        content: `
Ask most people what air-conditioning is and they will say "cooling". The trade
definition is much wider: air-conditioning is the business of supplying and
maintaining a chosen indoor condition **regardless of what the outside weather
is doing**. That means one machine, or one set of plant, doing several jobs at
once — heating, cooling, cleaning, moving and moisture control — all year round,
under automatic control.

## Comfort versus process

- **Comfort air-conditioning** targets human beings: roughly 22–24°C at about
  50% relative humidity, with gentle, draught-free air movement. There is
  tolerance in it, because people are adaptable.
- **Process air-conditioning** targets a product or an activity. A measuring
  laboratory, a drug manufacturing suite, a printing works, a computer room, a
  mushroom-growing shed or an astronaut's suit all have conditions dictated by
  the process, not by anyone's comfort — and the tolerance can be very tight.

Where every requirement for human comfort is held closely, the result is often
called **complete air-conditioning** or internal climate control: full
temperature, humidity, cleanliness, purity and distribution control. The
buildings that normally justify it are high-rise apartments, office towers,
multistorey department stores, theatres and entertainment centres, large
shopping complexes and hospitals.

## The occupancy sets the design

Two buildings with identical loads can need completely different systems,
because of what happens inside them:

| Building | Fresh/recirculated air approach |
|---|---|
| Office block | Large proportion of recirculated air with controlled outdoor air — cheapest to run |
| Department store | Mostly recirculated, conditioned to an "average" comfort level |
| Hospital ward or theatre | Recirculation restricted or prohibited; airborne pathogens must not be moved from patient to patient |
| Laboratory | Purity or a specific stable condition may be critical; often full outdoor air |

## Centralised, VRF, and everything between

A **centralised system** makes hot and chilled water or conditioned air at one
plant and distributes it. The refrigeration and heating plant may be much the
same from building to building; what differs is how the conditioned air is
distributed, because that is dictated by the building's shape and use.

A **VRV/VRF system** (the name depends on the manufacturer) takes a different
route: many small indoor fan–coil units in the conditioned spaces are piped to a
few outdoor condensing units on the roof or in a plant room. Because these units
are multiplexed and controlled together, one zone can be heating while another
is cooling, with the system recovering heat between them, and capacity is
matched closely to the actual load rather than switched on and off in one large
step.

## When full air-conditioning is not the answer

Total climate control is expensive, and in a big industrial space it can be
neither feasible nor necessary. **Spot cooling** conditions only where the
people are: a duct delivers cool, fresh or evaporatively cooled air onto a
workstation, and that air is not returned — it is simply diluted into the
factory air and expelled. It is used heavily in hostile environments such as
smelters and welding booths, where conditioning the whole building would be
absurd.

## The five factors, and the seven functions

Everything in the rest of this module hangs off these two lists. The factors an
air-conditioning system controls are:

1. Air temperature
2. Air humidity
3. Air cleanliness
4. Air purity
5. Air distribution

To hold those factors under all internal and external loads, the plant plus its
controls must be able to perform seven functions on the air:

1. **Heating**
2. **Cooling**
3. **Humidifying**
4. **Dehumidifying**
5. **Filtering**
6. **Purifying**
7. **Distributing**

A window box that only cools and filters is doing two of the seven. A hospital
plant with chillers, boilers, steam humidifiers, HEPA filtration, full outdoor
air and variable-volume distribution is doing all of them, and the control
system is what makes them work together instead of fighting each other — a
humidifier running while a coil dehumidifies is not a theoretical problem, it is
a real and expensive fault you will meet.

## What to remember

- Air-conditioning holds a chosen condition regardless of outside weather; it is
  not the same as cooling.
- Comfort work is forgiving; process work is not.
- The occupancy — especially infection control and product purity — decides how
  much air may be recirculated.
- Spot cooling is a legitimate engineering answer, not a cheap dodge.
- Five factors, seven functions: everything else in this module is detail
  hanging off those lists.
`,
        quiz: [
          {
            q: "Which combination best describes what a full air-conditioning system must be able to do?",
            options: [
              "Cool, filter and distribute air",
              "Heat, cool, humidify, dehumidify, filter, purify and distribute air",
              "Heat and cool air while maintaining a fixed outdoor-air rate",
              "Maintain dry-bulb temperature within ±1 K at all times",
            ],
            answer: 1,
            explain: "The seven functions are heating, cooling, humidifying, dehumidifying, filtering, purifying and distributing — which between them control the five factors of temperature, humidity, cleanliness, purity and distribution. A machine doing only some of them is providing partial conditioning.",
          },
          {
            q: "Why is a high proportion of recirculated air acceptable in an office block but not in a hospital ward?",
            options: [
              "Office air has a lower moisture content than hospital air",
              "Recirculation would overload the office chiller",
              "Recirculated air can carry airborne pathogens from patient to patient",
              "Hospitals are legally required to run without any filtration",
            ],
            answer: 2,
            explain: "The driver is infection control: recirculation moves airborne organisms between occupied areas. Hospitals therefore restrict or prohibit recirculation in critical areas and rely on outdoor air plus high-grade filtration, accepting the much larger energy cost.",
          },
          {
            q: "A smelter wants relief for operators at three workstations. Full air-conditioning of the building is out of the question. What is the appropriate approach?",
            options: [
              "Spot cooling — conditioned or evaporatively cooled air ducted to the workstations and not returned",
              "Sealing the building and installing a chilled water plant",
              "Natural ventilation through roof vents only",
              "A VRF system with cassette units above each workstation",
            ],
            answer: 0,
            explain: "Spot cooling delivers treated air only where the people are and lets it dilute into the general factory air. Sealing a smelter is impossible, and refrigerated indoor units in that environment would foul and fail rapidly.",
          },
          {
            q: "What is the distinguishing feature of a VRV/VRF system compared with a conventional split system installation?",
            options: [
              "It uses chilled water instead of refrigerant to the indoor units",
              "Multiple indoor units connect to multiplexed outdoor units, allowing simultaneous heating and cooling of different zones with capacity matched to load",
              "It has no outdoor unit at all",
              "It cannot provide heating, only cooling",
            ],
            answer: 1,
            explain: "The multiplexing of many indoor units onto shared outdoor units, with variable capacity, is the point: different zones can call for heating and cooling at the same time and the system modulates rather than cycling. Refrigerant, not water, is distributed to the indoor units.",
          },
        ],
      },

      /* ================================================================
         3 — Psychrometric properties
         ================================================================ */
      {
        id: "psychrometric-properties",
        title: "Reading moist air: dry-bulb, wet-bulb, dew point and humidity",
        minutes: 12,
        simple: "Air is really two things mixed together: dry air and invisible water vapour. To describe a sample of air you need two numbers, not one — how hot it is and how much water it is carrying. A normal thermometer gives you the first; a thermometer with a wet sock over it gives you the second, because evaporation cools the sock more when the air is drier.",
        refs: ref("air humidity, dew point and comfort conditions", "psychrometric properties of moist air"),
        content: `
Air-conditioning is impossible to understand — and impossible to fault-find —
until you stop thinking of air as one substance at one temperature. What flows
through a duct is a **mixture of dry air and water vapour**, and every process
in a plant either changes its temperature, changes its moisture, or both.
Psychrometry is the set of properties used to describe that mixture. All of them
are quoted **per kilogram of dry air**, because the dry air is the part that
never changes as moisture is added or removed.

## The seven properties you must know

| Property | Symbol / unit | What it tells you |
|---|---|---|
| Dry-bulb temperature | t, °C | Ordinary temperature, from a plain thermometer |
| Wet-bulb temperature | t(wb), °C | Temperature of a wetted, ventilated thermometer — a measure of the air's evaporating power |
| Dew point | t(dp), °C | The temperature at which this air becomes saturated; cool it further and water drops out |
| Relative humidity | RH, % | How much vapour the air holds compared with the most it could hold at that dry-bulb |
| Humidity ratio (moisture content) | g/kg dry air | The actual mass of water vapour carried per kilogram of dry air |
| Specific volume | m³/kg dry air | Space occupied; about 0.83–0.86 m³/kg at normal room conditions |
| Enthalpy | kJ/kg dry air | Total heat content, sensible plus latent, measured from a 0°C datum |

Fix any two independent properties and every other one is determined. That is
what the psychrometric chart does for you: it is simply a graph with dry-bulb on
the bottom axis and moisture content up the right-hand side, with saturation
(100% RH) as the curved boundary along the top left.

!FIG[psychrometric-skeleton]

### Wet-bulb: why a wet sock tells you the humidity

Wrap a wick over the bulb of a thermometer, wet it, and whirl it through the air
at a few metres per second (a sling psychrometer) or draw air over it with a
fan. Water evaporates from the wick, and the latent heat needed to evaporate it
comes out of the wick, cooling it. Dry air evaporates a lot and the reading
drops a long way; saturated air evaporates nothing and the wet-bulb equals the
dry-bulb. The gap between them is the **wet-bulb depression**, and it is a
direct measure of how dry the air is. This is the same physics that makes an
evaporative cooler work, and the same physics that makes you feel cold stepping
out of a pool on a windy day.

### Dew point: where condensation lives

Cool a sample without changing its moisture content and its relative humidity
climbs. When it reaches 100% it is saturated; cool it any further and the
surplus vapour must leave the air as liquid — dew on grass, condensate on a
coil, sweat on an uninsulated suction line. **Room air at 24°C and 50% RH
carries about 9.3 g/kg and has a dew point close to 13°C.** That single figure
explains an enormous amount of field work: any surface in that room below about
13°C will run wet.

!FIG[latent-plateau]

## Sensible and latent heat in air

- **Sensible heat** changes the dry-bulb temperature. On the chart you move
  horizontally.
- **Latent heat** changes the moisture content. On the chart you move
  vertically. Adding moisture adds heat to the air even though the thermometer
  does not move.

The three working formulae, in the form Australian technicians actually use with
airflow in L/s:

- Sensible: **Q(s) kW = 1.2 × L/s × ΔT ÷ 1000**
- Latent: **Q(l) kW = 3.0 × L/s × Δg ÷ 1000**  (Δg in g/kg)
- Total: **Q(t) kW = 1.2 × L/s × Δh ÷ 1000**  (Δh in kJ/kg)

The 1.2 comes from air density (about 1.2 kg/m³) times the specific heat of
moist air (about 1.02 kJ/kg·K). The 3.0 comes from that same density times the
latent heat of vaporisation of water (about 2450 kJ/kg), divided by 1000 to suit
grams.

## Worked example — splitting a room load

A meeting room has a calculated load of **12 kW sensible and 3 kW latent** at
24°C, 50% RH. Supply air is delivered at 13°C.

**Step 1 — total load and sensible heat ratio.**
Q(t) = 12 + 3 = 15 kW.
SHR = Q(s) ÷ Q(t) = 12 ÷ 15 = **0.80**.

**Step 2 — airflow needed to carry the sensible load.**
Rearranging Q(s) = 1.2 × L/s × ΔT ÷ 1000, with ΔT = 24 − 13 = 11 K:
L/s = (12 × 1000) ÷ (1.2 × 11) = 12 000 ÷ 13.2 = **909 L/s**, call it 900 L/s.

**Step 3 — check the moisture the supply air must absorb.**
Q(l) = 3.0 × L/s × Δg ÷ 1000, so Δg = (3 × 1000) ÷ (3.0 × 909) = **1.1 g/kg**.
The supply air must leave the coil about 1.1 g/kg drier than the room, so at
about 9.3 − 1.1 = 8.2 g/kg. At 13°C that is close to saturation — exactly what a
real cooling coil delivers.

> **Sensible heat ratio is the shape of the load.** A room full of people,
> kitchens, or a humid coastal outdoor-air intake pushes SHR down (more latent).
> A computer room full of dry electronic load pushes SHR up towards 1.0. Plant
> selected for the wrong SHR will hold temperature and miss humidity, or hold
> humidity and overcool.

## On the job

- Carry a sling psychrometer or a calibrated hygrometer; a dry-bulb reading
  alone cannot diagnose a humidity complaint.
- Every property is per kilogram of **dry** air — that is why moisture content,
  not relative humidity, is the honest way to track water through a plant.
- Relative humidity changes when you only change temperature. "The RH went up"
  does not mean water was added.
- Room dew point tells you which surfaces will sweat. Insulation specifications
  come from it.
- Learn to place a point on a psychrometric chart from dry-bulb and wet-bulb.
  Everything in the next lesson is drawn from that skill.
`,
        quiz: [
          {
            q: "Air at 24°C dry-bulb and 50% RH is cooled to 18°C without adding or removing any moisture. What happens to its relative humidity and its moisture content?",
            options: [
              "RH rises, moisture content unchanged",
              "RH unchanged, moisture content falls",
              "Both RH and moisture content fall",
              "RH falls, moisture content rises",
            ],
            answer: 0,
            explain: "Cooling with no dehumidification is a horizontal move on the chart: the actual grams of water per kilogram of dry air are unchanged, but cooler air can hold less, so the ratio — relative humidity — rises. It only reaches 100% at the dew point, about 13°C for this air.",
          },
          {
            q: "A sling psychrometer reads 30°C dry-bulb and 29.5°C wet-bulb. What does the small wet-bulb depression tell you?",
            options: [
              "The air is very dry and would suit an evaporative cooler",
              "The air is close to saturated, so very little evaporative cooling is available",
              "The instrument is faulty, since wet-bulb cannot approach dry-bulb",
              "The dew point must be below 10°C",
            ],
            answer: 1,
            explain: "Wet-bulb depression is the evaporating power of the air. Half a kelvin of depression means the wick can barely evaporate, so the air is nearly saturated — the dew point is close to 29°C, and an evaporative cooler would achieve almost nothing.",
          },
          {
            q: "A room needs 9 kW of sensible cooling and is held at 23°C with supply air at 12°C. What airflow is required?",
            options: [
              "About 340 L/s",
              "About 680 L/s",
              "About 1360 L/s",
              "About 7500 L/s",
            ],
            answer: 1,
            explain: "L/s = Q × 1000 ÷ (1.2 × ΔT) = 9000 ÷ (1.2 × 11) = 682 L/s. Answers around 340 L/s come from doubling ΔT by mistake; 1360 L/s from halving it. Note that only the sensible load sets the airflow — the latent load sets how dry the supply air must be.",
          },
          {
            q: "Why are psychrometric properties always quoted per kilogram of DRY air rather than per kilogram of the mixture?",
            options: [
              "Because water vapour has no measurable mass",
              "Because the mass of dry air stays constant while moisture is added or removed, giving a fixed basis for comparison",
              "Because instruments cannot measure the mixture directly",
              "Because dry air and water vapour have the same specific heat",
            ],
            answer: 1,
            explain: "Through humidification, dehumidification, heating and cooling, the dry air passing through the plant is the one quantity that does not change. Using it as the basis means a change in the moisture content figure is a true measure of water added or removed.",
          },
        ],
      },

      /* ================================================================
         4 — Psychrometric processes
         ================================================================ */
      {
        id: "psychrometric-processes",
        title: "Processes on the chart: mixing, coils, apparatus dew point and bypass factor",
        minutes: 13,
        simple: "Every job an air-conditioner does can be drawn as a line on one chart. Mixing return air with outside air lands you somewhere on the line between them. A cooling coil drags the air towards the cold, wet metal surface — but only some of the air actually touches the fins, and the rest slips past untreated, which is why the air leaving is never as cold as the coil.",
        refs: ref("the air-conditioning process: mixing, cooling and dehumidifying air", "dehumidification by refrigeration"),
        content: `
The psychrometric chart earns its keep the moment you start drawing processes on
it. Each piece of plant moves the air's state point in a characteristic
direction, and the whole system is a chain of those moves: outside air mixes
with return air, the mixture crosses a coil, a fan adds a little heat, the
supply air enters the room and picks up the room load, and you are back where
you started.

## The basic moves

| Process | Direction on the chart | Moisture content |
|---|---|---|
| Sensible heating (hot water, electric, heat pump) | Right, horizontal | Unchanged |
| Sensible cooling (coil above dew point) | Left, horizontal | Unchanged |
| Cooling and dehumidifying (coil below dew point) | Down and left | Falls |
| Humidifying with water spray (adiabatic) | Up along the wet-bulb line, dry-bulb falls | Rises |
| Humidifying with steam | Up, near-vertical | Rises |
| Evaporative cooling | Up along the wet-bulb line | Rises |
| Chemical (desiccant) dehumidification | Down and right, dry-bulb rises | Falls |

!FIG[ac-process-arrows]

Two of those surprise people. Spraying water into air **cools** it because the
latent heat of evaporation comes out of the air itself; and drying air with a
desiccant **heats** it because the latent heat is released into the air as the
vapour is absorbed.

## Mixing two airstreams

Mixed air always lands on the straight line joining the two states, at the point
that divides it in proportion to the two mass flows. Strictly it is a mass
balance, but at ordinary air-conditioning densities you can work in volume flow
with negligible error.

### Worked example — a 25% outside air system

A plant handles **1200 L/s total**: 900 L/s of return air at 24°C / 50% RH
(9.3 g/kg, 47.8 kJ/kg) and 300 L/s of outside air at 35°C / 40% RH (14.1 g/kg,
71.5 kJ/kg).

Fractions: return = 900 ÷ 1200 = 0.75; outside = 300 ÷ 1200 = 0.25.

**Mixed dry-bulb** = (0.75 × 24) + (0.25 × 35) = 18.0 + 8.75 = **26.8°C**
**Mixed moisture** = (0.75 × 9.3) + (0.25 × 14.1) = 6.98 + 3.53 = **10.5 g/kg**
**Mixed enthalpy** = (0.75 × 47.8) + (0.25 × 71.5) = 35.9 + 17.9 = **53.7 kJ/kg**

The mixed air's dew point at 10.5 g/kg is about 15°C. That is the number the
coil has to beat: any coil surface colder than about 15°C will start stripping
water out of this airstream.

## The cooling coil, apparatus dew point and bypass factor

A cooling coil does not treat all the air equally. Some of the air makes real
contact with the wet fin surface and leaves at very nearly the surface
condition; the rest slides through the passages between fins and leaves almost
unchanged. What comes off the coil is a mixture of those two lots.

- **Apparatus dew point (ADP)** is the effective average surface condition of
  the coil — the point on the saturation curve reached if you extend the coil's
  process line until it hits 100% RH. It is the coldest state the air could
  reach if the coil were perfect.
- **Bypass factor (BF)** is the fraction of the air that behaves as though it
  never touched the coil.
- **Contact factor** = 1 − BF, the fraction effectively treated.

BF = (t leaving − ADP) ÷ (t entering − ADP)

### Worked example — coil performance

Take that mixed air at 26.8°C entering a coil, leaving at 13.0°C, with an ADP of
10.0°C.

BF = (13.0 − 10.0) ÷ (26.8 − 10.0) = 3.0 ÷ 16.8 = **0.18**
Contact factor = 1 − 0.18 = **0.82**

That is a typical result for a deep coil at a sensible face velocity. Rules of
thumb worth carrying:

| Coil | Typical bypass factor |
|---|---|
| 2 rows, wide fin spacing, high face velocity | 0.30 – 0.40 |
| 4 rows, normal spacing, 2.5 m/s face velocity | 0.15 – 0.25 |
| 6–8 rows, close fins, 2.0–2.5 m/s | 0.05 – 0.10 |

**More rows, closer fins and lower face velocity all reduce bypass factor.**
That is precisely why the chapter specifies deep coils and face velocities not
exceeding about 2.5 m/s for dehumidifying duty, and shallow coils with higher
velocities where only sensible cooling is wanted — a shallow, fast coil with a
high bypass factor working above the dew point removes heat without touching the
moisture.

## Worked example — total, sensible and latent coil load

Continue with 1200 L/s (1.2 m³/s, so 1.2 × 1.2 = **1.44 kg/s of air**), entering
at 26.8°C / 10.5 g/kg / 53.7 kJ/kg, leaving at 13.0°C / 8.6 g/kg / 34.8 kJ/kg.

**Total load** = 1.44 × (53.7 − 34.8) = 1.44 × 18.9 = **27.2 kW**
**Sensible** = 1.44 × 1.02 × (26.8 − 13.0) = 1.44 × 1.02 × 13.8 = **20.3 kW**
**Latent** = 27.2 − 20.3 = **6.9 kW**
**Coil SHR** = 20.3 ÷ 27.2 = **0.75**

Cross-check the latent figure from the moisture removed:
1.44 kg/s × (10.5 − 8.6) ÷ 1000 × 2450 = **6.7 kW** — the same within chart
reading accuracy.

That moisture removal is also your condensate: 1.44 × 1.9 = 2.7 g/s, which is
**about 9.8 kg/h, near enough to 10 litres an hour** running out of the drain
tray. Now you know why a blocked trap floods a ceiling so quickly, and why the
standard air-conditioner is designed to leave air at around 12–13°C: that is the
condition that both cools the space and dries it to roughly 50% RH at 22–24°C.

## Reheat and the room ratio line

If a space has a low SHR — a laboratory, a restaurant, an indoor pool viewing
area — the coil may have to overcool the air to strip enough moisture, and the
supply air then has to be warmed back up before it enters the room. That is
**reheat**: effective, precise, and thermodynamically wasteful, so it is used
where close humidity control genuinely matters and avoided elsewhere. Modern
practice prefers heat recovery for the reheat duty rather than an element.

The line from the supply air point to the room point is the **room ratio line**,
and its slope is the room's SHR. Selecting a coil is really the exercise of
finding an off-coil condition that sits on that line at a workable airflow.

!SIM[See what happens on the gauges when the evaporator ices up](fault=icedEvaporator)

>! An iced coil is a psychrometric failure as well as a refrigeration one: once
>! the fins block, airflow collapses, the coil runs colder still, and liquid can
>! return to the compressor. Never "just defrost it and go" — find why the coil
>! went below freezing: low airflow, low charge, a restriction, or a coil
>! selected with too low an ADP for the duty.

## What to remember

- Mixed air sits on the line between the two states, in proportion to the flows.
- ADP is the coil's effective surface condition; bypass factor is how much air
  dodges it.
- Deep coil, close fins, slow face velocity = low bypass factor = more
  dehumidification.
- Off-coil air near 12–13°C at high RH is the normal target for comfort duty.
- Condensate flow is a direct measure of latent work being done — no condensate
  on a humid day means no dehumidification.
`,
        quiz: [
          {
            q: "600 L/s of return air at 24°C mixes with 200 L/s of outside air at 36°C. What is the mixed dry-bulb temperature?",
            options: [
              "26°C",
              "27°C",
              "30°C",
              "32°C",
            ],
            answer: 1,
            explain: "The mixture sits on the line between the states in proportion to the flows: (0.75 × 24) + (0.25 × 36) = 18 + 9 = 27°C. The common error is to average the two temperatures (30°C), which would only be right if the two flows were equal.",
          },
          {
            q: "A coil has air entering at 27°C and leaving at 14°C, with an apparatus dew point of 11°C. What is its bypass factor?",
            options: [
              "0.19",
              "0.52",
              "0.81",
              "0.11",
            ],
            answer: 0,
            explain: "BF = (t leaving − ADP) ÷ (t entering − ADP) = (14 − 11) ÷ (27 − 11) = 3 ÷ 16 = 0.19. The value 0.81 is the contact factor, the fraction of air actually treated — a useful cross-check that the two must sum to 1.",
          },
          {
            q: "A coil must remove moisture as well as heat. Which selection gives the lowest bypass factor?",
            options: [
              "Two rows, wide fin spacing, 4 m/s face velocity",
              "Six rows, close fin spacing, 2.2 m/s face velocity",
              "Two rows, close fin spacing, 4 m/s face velocity",
              "Six rows, wide fin spacing, 4 m/s face velocity",
            ],
            answer: 1,
            explain: "Depth, fin density and low face velocity all increase the chance that a given air molecule touches wet fin surface. Deep and slow wins. High face velocity also risks carrying condensate off the fins into the duct, which is why dehumidifying coils are held at or below about 2.5 m/s.",
          },
          {
            q: "On a humid summer day a split system is holding room temperature but the space feels clammy and there is no condensate at the drain. What is the most useful conclusion?",
            options: [
              "The coil is doing no latent work — its surface is running above the room dew point",
              "The condensate trap is blocked",
              "The refrigerant charge is excessive",
              "The room sensible load has increased",
            ],
            answer: 0,
            explain: "No condensate means no moisture is being condensed, so the coil surface is above the entering air's dew point — typically caused by excessive airflow, a coil running too warm, or an oversized system short-cycling before it gets wet. A blocked trap would produce water somewhere else, usually through the ceiling, not a dry drain.",
          },
        ],
      },

      /* ================================================================
         5 — Heating air
         ================================================================ */
      {
        id: "heating-air",
        title: "Heating air: coils, elements, heat pumps and the boiler plant",
        minutes: 13,
        simple: "There are only a few ways to warm the air in a duct: run hot water or steam through a coil, put an electric element in the duct, squirt steam straight into the airstream, or run the refrigeration system backwards so the indoor coil becomes the condenser. The last one is by far the cheapest to run, because it moves heat instead of making it.",
        refs: ref("heating air: hot water and steam coils, electric heaters, steam injection and heat pumps", "coefficient of performance", "the heating plant: boilers, fuels and burners"),
        content: `
In most of Australia heating is the smaller half of an air-conditioning plant's
year — but it is still half the plant, and the half technicians most often
ignore as "someone else's trade". It is not. Whether the heat comes from a
reversed refrigeration cycle, an element or a boiler, it is part of the system
you are being paid to keep working.

## The five ways to heat an airstream

### (a) and (b) Hot water and steam coils

A finned coil in the duct, fed from a boiler. Steam and hot water coils look
almost identical; the differences are mostly in the external pipework, because a
steam coil needs traps and condensate handling. Hot water is generally preferred
for air-conditioning:

- Water at about **80°C is hot enough** for any comfort heating coil.
- Capital and running costs are lower.
- A hot water boiler does not require a full-time attendant, whereas a steam
  boiler generally does.

### (c) Electric elements in the duct

Mineral-insulated, metal-sheathed elements, finned or bare, mounted in the duct.
Simple, cheap to install, expensive to run — every kilowatt of heat costs a
kilowatt of electricity.

- Non-combustible lining is required inside the duct, with a **minimum of
  255 mm of protected duct upstream and downstream** of the elements.
- Protection is always fitted: current type, thermal type, and an airflow (or
  draught) type. The **airflow switch cuts the elements if the air quantity
  falls below the set minimum** — because an element in still air will glow and
  set fire to the duct.
- Building and fire regulations plus the relevant Australian Standards govern
  the safety controls.

>! Never bypass or "temporarily" strap out a duct heater airflow switch or
>! thermal cut-out to prove a fault. An electric duct heater with no airflow is
>! an ignition source inside a building's air distribution system. Prove
>! airflow first, then energise.

### (d) Steam injected into the airstream

Steam is blown straight into the duct; the air picks up heat from it and gains
moisture at the same time. Rare in Australia, but attractive where waste steam
is already available and the atmosphere needs humidifying anyway — a single
process doing two jobs.

### (e) Reverse-cycle heat pump

The most important method for our industry. A four-way reversing valve sends
compressor discharge gas to the **indoor** coil instead of the outdoor one, so
the indoor coil becomes the condenser and the outdoor coil becomes the
evaporator, absorbing heat from outside air even at low ambient.

!FIG[reversing-valve]

Heat pumps are built as air-to-air (the common one), water-to-water, air-to-water
and air-to-ground. In extreme climates the water and ground versions are
preferred, because the source temperature is far more stable than outside air.

## Coefficient of performance — why heat pumps win

COP is the ratio of useful heat moved to energy put in. From a pressure–enthalpy
chart, using the cycle's own figures:

**Cooling COP** = refrigerating effect ÷ heat of compression

If refrigerating effect = 110 kJ/kg and heat of compression = 23 kJ/kg:
COP = 110 ÷ 23 = **4.8**. Every 1 kW into the compressor delivers 4.8 kW of
cooling.

**Heating COP** = heat rejected in the condenser ÷ heat of compression

The condenser rejects both the heat absorbed and the heat of compression:
110 + 23 = 133 kJ/kg, so COP = 133 ÷ 23 = **5.8**.

Compare that with a 1 kW resistance element: 1 kW in, 1 kW out, COP = 1.0. Real
installed heat pumps typically achieve **COPs of 3 to 4** over a season, still
three to four times better than direct electric heating.

The drawbacks are real:

- Higher capital and maintenance cost.
- Efficiency falls as saturated suction temperature falls — and with air-to-air,
  the coldest weather is exactly when the heating demand is highest.
- The outdoor coil can ice up at low ambient, degrading heat transfer further
  and forcing defrost cycles that cost capacity.

## The heating plant: boilers

Large plants that use chilled water for cooling normally use a boiler for
heating. Four types are common:

| Type | Typical duty | Notes |
|---|---|---|
| Cast-iron sectional | Up to about 4000 MJ/h (≈1100 kW) | Old solid-fuel design now gas- or oil-fired; firebox and baffles direct gases over the heating surfaces; suits smaller loads |
| Fire-tube, non-coded | Unpressurised water up to 90°C | The common air-conditioning boiler; combustion gases make two, three or four passes through tube bundles surrounded by water; large water content damps fluctuations. Not for high-sulphur fuels |
| Fire-tube, coded | Up to 2000 kPa, water to 200°C, up to about 27 000 MJ/h (≈7500 kW) | Units under 10 m² heating surface do not need a full-time attendant |
| Water-tube, coded | Largest outputs, high pressures and temperatures | Water inside vertical tube bundles with forced circulation, furnace gases outside; large units built on site |

### Fluing, fuels and firing

Combustion gases must be cleared safely: stack design matters, and so does
keeping heat-transfer surfaces free of scale and carbon and the baffles intact
so the gases follow their intended spiral path. Fuels range from wood and
sawdust through all grades of coal to fuel oils, natural gas, town gas and LPG;
air-conditioning boilers almost always use gas or light-to-medium fuel oil.

Fuel passes through a regulator and control valve to a multi-port burner and is
mixed with combustion air, usually supplied by a blower fan. Oil must be fully
**atomised**; a good oil or dual-fuel burner adjusts the oil–air ratio
automatically as the firing rate follows the load.

>! **Photoelectric flame detection is the primary safety control.** If ignition
>! does not occur within the set time, the fuel is cut off and the fan purges
>! the chamber, and a purge also runs automatically before every light-up.
>! Unburnt fuel left in a boiler is an explosion waiting for the next spark.
>! Never defeat a flame-failure device or shorten a purge cycle.

### Boiler water — the rule that surprises people

Water temperatures from about 77°C up to 210°C are possible depending on the
boiler, but **the return water must be kept above about 76°C**. Below that,
water vapour in the flue gases condenses on the boiler's cool surfaces and forms
highly corrosive acids that will eat the boiler out. This is why leaving water
is often bypassed into the return to temper it up above that limit.

Constant circulation is also essential — it prevents stratification and
minimises thermal stress from cold water hitting hot metal. System water must be
monitored and treated to control scale, corrosion and fungal growth.

### Control and maintenance

Efficient operation depends on **modulating** the fuel flow as the load falls,
and the shut-off point must sit below the minimum modulation point so the boiler
runs briefly at minimum fire before cutting out, clearing fuel from the chamber.

- Most faults are electrical — controls, fans, solenoids — or in the fuel
  modulating valve and regulator.
- Root causes are usually power surges or contaminated fuel; trace them the same
  way you would a refrigeration fault.
- Pre-winter service, strip-down, inspection and cleaning prevent peak-season
  breakdowns.
- **Programmed maintenance** — replacing components before their known life
  expires — pays off here. If the manufacturer knows a burner fails at about
  12 000 hours, change it before then rather than after the failure.
`,
        quiz: [
          {
            q: "A cycle shows a refrigerating effect of 120 kJ/kg and a heat of compression of 30 kJ/kg. What are the cooling and heating COPs?",
            options: [
              "4.0 cooling and 4.0 heating",
              "4.0 cooling and 5.0 heating",
              "5.0 cooling and 4.0 heating",
              "0.25 cooling and 0.2 heating",
            ],
            answer: 1,
            explain: "Cooling COP = 120 ÷ 30 = 4.0. In heating, the condenser rejects the refrigerating effect plus the heat of compression: (120 + 30) ÷ 30 = 5.0. Heating COP is always exactly 1.0 greater than cooling COP for the same cycle, which is why heat pumps beat elements so comfortably.",
          },
          {
            q: "Why must an electric duct heater have an airflow-proving switch?",
            options: [
              "To stop the elements running when the air is already warm enough",
              "To prevent the elements from overheating the duct and starting a fire if airflow falls below the minimum",
              "To modulate element output in proportion to airflow",
              "To protect the fan motor from overload",
            ],
            answer: 1,
            explain: "The air is what carries heat away from the elements. Without it they glow, and the duct — not just the heater — becomes the fire risk, which is also why non-combustible lining is required for at least 255 mm upstream and downstream. It is a safety interlock, not a comfort control.",
          },
          {
            q: "Boiler return water is running at 65°C. Why is this a problem?",
            options: [
              "The boiler cannot transfer heat below 70°C",
              "Flue gas moisture condenses on cool surfaces and forms corrosive acids that attack the boiler",
              "The circulating pump will cavitate",
              "The water will stratify and boil locally",
            ],
            answer: 1,
            explain: "Below roughly 76°C, water vapour in the products of combustion condenses on the boiler surfaces and the resulting acidic condensate corrodes the boiler from the fireside. The usual fix is to bypass some hot leaving water into the return to temper it. (Purpose-built condensing boilers are a different design, built to handle that condensate.)",
          },
          {
            q: "An air-to-air heat pump loses capacity on the coldest nights of the year. What is the primary reason?",
            options: [
              "The reversing valve leaks only in cold weather",
              "Falling saturated suction temperature reduces mass flow and capacity, and the outdoor coil ices, just when heating demand is greatest",
              "The compressor oil becomes too thin",
              "Condenser pressure rises excessively at low ambient",
            ],
            answer: 1,
            explain: "Low outdoor temperature means low saturated suction temperature, low suction density and therefore reduced refrigerant mass flow and heating capacity — and the outdoor coil frosts, further cutting heat transfer and stealing capacity for defrosts. Demand rises as capacity falls, which is why supplementary heat is often fitted.",
          },
        ],
      },

      /* ================================================================
         6 — Cooling air: DX and chilled water
         ================================================================ */
      {
        id: "cooling-air-coils",
        title: "Cooling air (1): direct refrigeration and chilled water coils",
        minutes: 12,
        simple: "There are two normal ways to cool air with refrigeration. Either the refrigerant boils inside the coil the air passes over, or the refrigeration plant chills water somewhere else and that cold water is pumped through the coil. Water is easier to move a long way around a big building than refrigerant is.",
        refs: ref("cooling air: direct refrigeration and chilled water coils in the airstream", "water valves and water pumps in air-conditioning"),
        content: `
Cooling is the main function of air-conditioning plant in most of Australia, and
the chapter divides it three ways: direct refrigeration, chilled water coils,
and evaporative cooling. This lesson covers the first two — the refrigerated
options.

## (a) Direct refrigeration (DX)

A closely finned evaporator sits in the airstream and refrigerant boils inside
it, absorbing heat straight from the air. Vapour-compression is by far the most
common form, but absorption plant belongs under this heading too.

DX is simple, efficient at short distances and dominates packaged units, splits
and VRF. Its limits are practical: pipe runs, oil return, refrigerant charge
size, and the fact that every zone you serve needs refrigerant piped to it.

## (b) Chilled water coils

For a large or spread-out building, it is easier to make chilled water in one
place and pump it. Water leaves the chiller at about **5–7°C**, is pumped to
finned coils in air handling units, and returns warmer to be re-chilled.

The coils look essentially like DX evaporators, with **fin spacing typically
between 300 and 550 fins per metre**. Air temperature off the coil is controlled
either by:

- **modulating water flow** with a control valve, or
- **face and bypass dampers**, which vary how much of the air goes through the
  coil and how much goes around it.

### Coils are designed for their job

| Duty | Design characteristics |
|---|---|
| Dehumidifying coil | Deep, with **face velocity not exceeding about 2.5 m/s**; drip tray and trapped drain essential; all surfaces cleanable; spray eliminators may be needed |
| Sensible cooling coil | Must run **above the air dew point** so no moisture is removed; shallow, with higher air velocity |
| Pre-heat / pre-cool coil | Installed in the outside air duct to cut the load on the main coil in extreme weather; essential for close humidity or wet-bulb control |
| Heating coil | Usually single pass — the much larger temperature difference means less surface is needed for the same duty |

Face velocity is not a detail. Above about 2.5 m/s on a wet coil, condensate is
torn off the fins and carried into the duct, where it wets insulation and grows
mould.

### What every water coil needs to work properly

1. **All air removed from the water circuit.** Coils are normally bottom-fed and
   self-venting, with vent plugs at the high points. An air-locked coil passes
   almost no water and reads as "no cooling" with a perfectly healthy chiller.
2. **Enough pressure drop** for good water distribution across the circuits —
   but not so much that the pump head becomes wasteful.
3. **Removable tube ends** so the tubes can be cleaned, and the coil pitched so
   it drains completely.
4. **Counterflow** water to air, in a serpentine circuit.
5. **Construction matched** to the actual temperatures, pressures and flow rates.

### Why counterflow matters

With parallel flow, the coldest water meets the coldest (already cooled) air at
the same end, so the temperature difference collapses along the coil. With
counterflow, the coldest water meets the leaving air and the warmest water meets
the entering air, so a useful temperature difference is maintained the whole way
through. The result is colder leaving air and warmer return water — which is
exactly what you want, because a bigger water temperature rise means less water
has to be pumped for the same duty.

### Worked example — chilled water flow

Take the 27 kW coil from the psychrometrics lesson, on 6°C flow and 12°C return
(ΔT = 6 K). For water, cp = 4.19 kJ/kg·K:

m = Q ÷ (cp × ΔT) = 27 ÷ (4.19 × 6) = **1.07 kg/s ≈ 1.07 L/s** (about 3.9 m³/h).

Now halve the ΔT to 3 K because a valve is hunting or a coil is fouled: the same
duty needs 2.15 L/s — double the flow, roughly **eight times the pumping power**
for that circuit. Low delta-T syndrome is a real and expensive plant fault.

## Water control valves

| Type | Purpose |
|---|---|
| Single-seated | Simple throttling of one flow path |
| Three-way mixing or diverting | Mixes two supplies (say hot and chilled) to the coil, or diverts flow through or around it |
| Double-seated | Used where the pressure difference across the valve is large — the balanced seats let it open and close with far less actuator force |

Actions are described by their de-energised state: **normally open (NO)** valves
close when the actuator is powered, **normally closed (NC)** valves open when
powered. Choosing which way a valve fails is a design decision — a heating coil
in a cold climate is usually NO so a control failure cannot freeze it.

### Valve sizing

Sizing matters more than most people expect. The factors are the pressure across
the valve, the pressure drop through it, the travel coefficient (how flow varies
with stem position) and the **rangeability** — the ratio of maximum to minimum
controllable flow.

Here is the trap: a half-open valve may already pass **75% or more of full
flow**. Fit a valve twice the size it should be and at half travel it could pass
around **150% of the design flow** — the loop then has almost no controllable
range, hunts badly, and the room swings between too cold and too warm no matter
how the controller is tuned.

## Water pumps

Circulation is almost always by centrifugal pump: smooth, simple, valveless and
low-maintenance. Selection is by flow rate against the system head — the static
lift plus all the flow resistances. Oversizing wastes power and pushes excess
flow through the plant.

Where the pump sits in the circuit matters:

- Coils, evaporators and condensers normally sit on the **discharge** side.
- Cooling towers and boilers sit on the **suction** side.
- Boilers and their expansion tanks **must** be on the suction side, so the
  boiler is not subjected to pump discharge pressure and air is less likely to
  be drawn into the system.

**Cavitation** — water flashing to vapour at the impeller eye and the bubbles
collapsing violently — erodes impellers and destroys pumps. It happens when
there is insufficient suction head, so suction arrangements and accumulator
provision must be right.

### Static head and seal life

Static head does not add to the pumping load, but it does sit permanently on the
pump seal, at roughly **one atmosphere (about 100 kPa) per 10 m of height**. Put
the condenser water pump in the basement of a 100 m tower with the cooling tower
on the roof and the seal carries about **1000 kPa continuously** — which is why
those pumps eat seals and why pump location is a design decision, not a
convenience.

## On the job

- No cooling from a chilled water coil, chiller running fine? Vent the coil
  before you condemn anything.
- Check face velocity and fin condition before blaming capacity: a fouled coil
  and a fouled filter look identical on a thermometer.
- Always trap a condensate drain, and check the trap depth suits the fan static
  — a negative-pressure drain without a deep enough trap will not drain.
- Record water flow and return temperature: a small ΔT at full load points to
  over-pumping, a bypassing three-way valve or a fouled coil.
`,
        quiz: [
          {
            q: "A chilled water air handling unit delivers almost no cooling, yet the chiller is running normally and the control valve is fully open. What should you check first?",
            options: [
              "That the coil has been vented — trapped air will stop water circulating through it",
              "The refrigerant charge in the air handling unit",
              "The fin spacing of the coil",
              "The building's outdoor-air rate",
            ],
            answer: 0,
            explain: "An air-locked coil passes almost no water while everything upstream looks healthy. Coils are bottom-fed and self-venting for exactly this reason, with vent plugs at the high points. There is no refrigerant in a chilled water AHU coil to check.",
          },
          {
            q: "Why is counterflow preferred to parallel flow between water and air in a coil?",
            options: [
              "It reduces the water pressure drop through the coil",
              "It maintains a useful temperature difference along the whole coil, giving colder leaving air and a larger water temperature rise",
              "It prevents condensate from forming on the fins",
              "It allows the coil to be single-pass",
            ],
            answer: 1,
            explain: "In counterflow the coldest water meets the coldest air and the warmest water meets the entering air, so the temperature difference does not collapse partway along. That yields colder off-coil air and warmer return water — meaning less water pumped for the same kW.",
          },
          {
            q: "A chilled water control valve has been replaced with one twice the required size. What symptom would you expect?",
            options: [
              "The coil will never reach full duty",
              "The water pressure drop across the coil will rise sharply",
              "Poor control and hunting, because a small stem movement passes far more than the design flow",
              "The pump will cavitate",
            ],
            answer: 2,
            explain: "A half-open valve can already pass 75% or more of full flow. Double the size and half travel could pass around 150% of design flow, so the controllable range collapses and the loop hunts. Oversized control valves are a very common cause of unstable zone temperatures.",
          },
          {
            q: "A condenser water pump is in the basement of a 60 m high building with the cooling tower on the roof. Approximately what static pressure sits on the pump seal?",
            options: [
              "About 60 kPa",
              "About 600 kPa",
              "About 6000 kPa",
              "None — static head only acts when the pump is running",
            ],
            answer: 1,
            explain: "Static head is roughly 100 kPa per 10 m of height, so 60 m gives about 600 kPa, and it sits on the seal continuously whether the pump runs or not. It does not add to the pumping load — the water coming back down balances it — but it is what shortens seal life.",
          },
        ],
      },

      /* ================================================================
         7 — Evaporative cooling, humidifying, dehumidifying
         ================================================================ */
      {
        id: "evaporative-and-moisture",
        title: "Cooling air (2): evaporative cooling, humidifying and dehumidifying",
        minutes: 12,
        simple: "Water takes a lot of heat with it when it evaporates, so blowing hot dry air through a wet pad makes it cooler but wetter. That works brilliantly inland and badly on the coast. Controlling moisture is the other half of air-conditioning: adding it when the air is too dry, and freezing it out on a cold coil when the air is too damp.",
        refs: ref("evaporative cooling, direct and indirect", "humidifying air", "dehumidifying air"),
        content: `
Refrigeration is not the only way to cool air, and temperature is not the only
thing an air-conditioning plant controls. This lesson deals with water: using it
to cool air, adding it when the air is too dry, and taking it out when the air
is too wet.

## Direct evaporative cooling

Air is drawn through a constantly wetted porous pad — plastic media, or the
older cotton-covered straw type. Some of the water evaporates, and the latent
heat required to evaporate it is taken **out of the air itself**. The air leaves
cooler and wetter. On a psychrometric chart the process runs up the constant
wet-bulb line: sensible heat is converted to latent heat, with total heat
essentially unchanged.

How much cooling you get depends entirely on how dry the entering air is. The
best you could ever achieve is the wet-bulb temperature; a real pad achieves
some fraction of that, the **saturation efficiency**, typically 80–90% for a
good deep pad.

**Worked example — inland**
Outside air at 38°C dry-bulb, 18°C wet-bulb, pad efficiency 85%:
Off-pad temperature = 38 − 0.85 × (38 − 18) = 38 − 17 = **21°C**. A 17 K drop —
which is why evaporative cooling is so effective in inland Australia, where
reductions up to about 15 K are routine.

**Worked example — coastal**
Outside air at 30°C dry-bulb, 25°C wet-bulb, same pad:
Off-pad = 30 − 0.85 × (30 − 25) = 30 − 4.25 = **25.8°C**. Barely 4 K of cooling,
and the supply air is now nearly saturated — the occupants will feel worse, not
better, because their own sweat can no longer evaporate.

### The rules that make or break an evaporative system

- **Never recirculate air through an evaporative cooler.** Each pass adds
  moisture; recirculating drives the space towards saturation and the cooling
  stops.
- It must run on **100% outside air**, and that air must be **exhausted at the
  same rate** through open windows, doors, ventilators or relief grilles. An
  evaporative cooler in a sealed building simply pressurises it and stops.
- Air volumes are much higher than for refrigerated systems, so noise and
  draughts are more likely.
- The performance the customer gets depends on the day's **humidity**, not on
  the day's temperature — that has to be explained before the sale, not after
  the complaint.

They are cheap to buy and cheap to run, pair naturally with industrial
ventilation systems, and are widely used domestically and in small commercial
work. Some large plants also use sprays in hot dry weather to pre-cool air and
take load off the chillers.

>! Any system that atomises or sprays water and warms it — evaporative coolers,
>! cooling towers, spray humidifiers — can breed and disperse *Legionella*.
>! Follow the maintenance, cleaning, bleed-off and water treatment requirements
>! in AS/NZS 3666 and your state's public health regulations. Bleed-off exists
>! to stop salts concentrating, not to waste water.

## Indirect evaporative cooling — the plate heat exchanger

The clever answer to "cooling without wetting". A heat exchanger built from thin
vacuum-formed plastic sheets, dimpled and stacked so alternate passages carry
two separate airstreams:

- The **secondary** airstream (usually room exhaust air) passes over wetted
  plate surfaces and is evaporatively cooled. It carries the water vapour away
  outside.
- The **primary** airstream — the fresh air going into the room — passes through
  the adjacent dry passages and is cooled **sensibly** by contact with the cold
  plates.

The supply air therefore gets colder without gaining a gram of moisture. The
plates are thin and heavily dimpled, so heat transfer is high. Running costs are
similar to a comparable direct evaporative cooler and can be around a third of a
refrigerated unit of the same capacity.

## Humidifying air

People need a certain moisture level for the same reason stored food does: to
allow normal evaporation from skin, lips, nose and lungs without discomfort.
Most people are comfortable at **22–24°C with about 50% RH**, and the two trade
off against each other — 18°C at 80% RH is acceptable, so is 26°C at 35% RH.

Dry indoor air is not merely uncomfortable. In heated buildings when the outside
ambient falls below about 5°C, room air heated to 24°C becomes very dry, which
shrinks timber, splits joinery and lets a genuinely dangerous **static
electricity** charge build up.

The methods:

| Method | How it works | Watch out for |
|---|---|---|
| **(a) Increased recirculation** | Uses vapour generated by the occupants and appliances (urns, cooking, hair dryers) | Odours build up with the moisture; only fresh air fixes those, and fresh air is dry |
| **(b) Water sprays in the duct** | Sprays upstream of the cooling coil; surplus water is caught on the coil fins | If fitted downstream, spray eliminators are essential or water carries into the duct |
| **(c) Direct steam injection** | Steam injected into the duct; simple, no eliminators needed | Best where steam already exists and heating is also wanted |
| **(d) Heater–humidifier units** | Room units that boil water (heating the air too) or fling water onto a spinning disc | Common in cold climates; scale and hygiene maintenance |
| **(e) Evaporative cooling** | Adds moisture as a by-product of cooling | Only suits dry climates |

In cold climates sprays are placed **downstream of the outside air preheater**,
because very cold air cannot absorb much moisture until it has been warmed —
roughly to at least 10°C.

**Worked example — humidifier duty.** 1000 L/s of supply air must be raised by
4 g/kg. Air mass flow = 1.0 m³/s × 1.2 kg/m³ = 1.2 kg/s. Water needed =
1.2 × 4 = 4.8 g/s = **17.3 kg/h**. And the latent load that puts on the plant:
Q = 3.0 × 1000 × 4 ÷ 1000 = **12 kW**.

## Dehumidifying air

Comfort wants roughly 22–25°C with RH between 40 and 60%. Warmer air can hold
more vapour, so as air is cooled at constant moisture its RH climbs until it
saturates — the **dew point** — and further cooling forces water out as
condensate. This is exactly the mechanism that makes cloud and rain when warm
moist air is lifted over a mountain range or meets cold air, and it is the
mechanism a cooling coil uses.

The three methods:

**(a) Refrigeration below the dew point.** The standard approach. Air cooled to
about **12°C** can hold just enough vapour to give about **50% RH when it warms
back to 22°C** in the room; everything else runs off the coil as condensate.
That is why comfort plant is designed around an off-coil condition near
12–13°C — it cools and dries in one operation. Humidification is only needed
when the incoming air was too dry to start with.

**(b) Bringing in more outside air when it is drier than the room air.** A large
plant that measures both inside and outside conditions can vary the fresh-air
proportion to hit the target humidity at the lowest energy cost. It only works
when the outside air genuinely carries less moisture, and it must not be allowed
to blow out the sensible load — but as an energy-saving strategy it is
underused.

**(c) Chemical (desiccant) dehumidification.** Moisture is absorbed by a
desiccant rather than condensed. Rarely justified in comfort work, but the
answer where the required dew point is below what a coil can reach, and the
classic example is a closed life-support system in a spacecraft or submarine
where water and oxygen must be regenerated completely.

## What to remember

- Evaporative cooling converts sensible heat to latent heat: cooler, wetter air,
  along a constant wet-bulb line.
- The wet-bulb temperature is the limit; saturation efficiency decides how close
  you get.
- 100% outside air, always exhausted — never recirculated.
- Indirect (plate) evaporative cooling gives sensible cooling with no added
  moisture.
- Comfort sits near 22–24°C and 50% RH, and temperature and humidity trade
  against each other.
- A comfort coil leaving air at about 12°C both cools and dehumidifies to about
  50% RH in the room.
`,
        quiz: [
          {
            q: "Outside air at 36°C dry-bulb, 20°C wet-bulb passes through a pad of 85% saturation efficiency. What is the approximate off-pad dry-bulb temperature?",
            options: [
              "20.0°C",
              "22.4°C",
              "28.0°C",
              "31.8°C",
            ],
            answer: 1,
            explain: "Off-pad = 36 − 0.85 × (36 − 20) = 36 − 13.6 = 22.4°C. The wet-bulb (20°C) is the theoretical limit at 100% efficiency, which no real pad achieves; assuming it would over-promise the result by more than 2 K.",
          },
          {
            q: "Why must air never be recirculated through a direct evaporative cooler?",
            options: [
              "The pads would clog with dust from the room",
              "Each pass adds moisture, driving the space toward saturation until no further cooling is possible",
              "The recirculated air would be too cold for the pump",
              "Recirculation would overload the supply fan motor",
            ],
            answer: 1,
            explain: "Direct evaporative cooling works by evaporating water into the air, so every pass raises the moisture content. Recirculating drives the room to near saturation, at which point the wet-bulb depression is gone and so is the cooling. The system must run on 100% outside air with an equal exhaust path.",
          },
          {
            q: "What is the key advantage of an indirect (plate heat exchanger) evaporative cooler over a direct one?",
            options: [
              "It uses no water at all",
              "It cools the supply air without adding moisture to it",
              "It achieves temperatures below the outside wet-bulb every time",
              "It can be used with recirculated air only",
            ],
            answer: 1,
            explain: "The wetted surfaces are on the secondary (exhaust) side, and the supply air is cooled sensibly through the plates, so it enters the room dry. Water is still used and evaporated — just into the airstream that goes outside.",
          },
          {
            q: "A standard comfort air-conditioner leaves air off the coil at about 12°C. Why that value?",
            options: [
              "It is the lowest temperature the refrigerant can produce",
              "Air at 12°C holds about the right amount of vapour to give roughly 50% RH once it warms to room temperature, so the coil cools and dehumidifies in one step",
              "It prevents the coil from freezing",
              "It is the dew point of outside air in most of Australia",
            ],
            answer: 1,
            explain: "The moisture content of near-saturated air at 12°C corresponds to about 50% RH at 22°C. That is what makes a single coil handle both the sensible and latent parts of the comfort load. Freeze protection matters, but it is not what sets the 12°C target.",
          },
        ],
      },

      /* ================================================================
         8 — Filtering and purifying air
         ================================================================ */
      {
        id: "filtering-purifying",
        title: "Filtering and purifying air: from wet pads to absolute filters",
        minutes: 11,
        simple: "Dust sticks to a wet cooling coil like flour on butter, so every plant needs filters just to protect itself. Beyond that, filters decide how clean the room is — from catching visible fluff in a home, up to trapping bacteria in an operating theatre. Purifying is a different job again: it means bringing in enough fresh air to replace the oxygen people use.",
        refs: ref("filtering of air and filter types", "purifying air and outdoor air requirements"),
        content: `
Filtration is the function technicians touch most often and respect least. Three
reasons a plant must filter its air:

1. **Self-protection.** Airborne dust lands on a wet coil, sticks, and builds
   into a felt mat that blocks airflow. A blocked coil starves the evaporator,
   drops suction pressure, freezes, and floods liquid back to the compressor.
2. **Outside air is dirty.** Every plant brings in a proportion of outdoor air
   carrying dust, pollen, smoke and traffic fumes.
3. **Recirculation moves contamination.** A ducted system that draws return air
   from one zone and blows it into another will transport smoke, odours and
   particles unless they are removed on the way.

## Choosing a grade — cost against consequence

The grade required is set by what the space needs, not by what is available. An
industrial area may only need the coarse dust removed. A house or shop needs
fine dust caught, or it shows on polished surfaces. A commercial landlord is
really making a financial trade: better filtration costs more up front but cuts
cleaning and redecorating bills — cheap filters and more cleaners is a valid, if
short-sighted, alternative. Hospitals, laboratories and operating theatres are
in another class again, needing bacteria and particles well below a micrometre
removed, with the equipment cost to match.

## The filter types, in increasing order of efficiency

| Type | How it works | Typical use and cautions |
|---|---|---|
| **(a) Water sprays / wet pads** | Particles are washed out of the airstream | The only filtration in an evaporative cooler; effective, but raises space humidity |
| **(b) Dry filters** | Synthetic cloth media; washable pads, disposable panels, roll and deep-bed forms | Domestic pads get cleaned long past the point where they should have been replaced |
| **(c) Cloth viscous filters** | Dry-type media coated with an adhesive fluid | Big efficiency gain for the same media. **Not washable** — replace at the recommended pressure drop |
| **(d) Metal viscous filters** | Honeycomb of twisted metal passages; particles travelling in a straight line strike the oiled metal and stick | Cleanable, often automatic; the panel form is the standard commercial kitchen grease filter |
| **(e) Electrostatic** | Particles are ionised, then collected on charged plates | Domestic to hospital use; high voltages |
| **(f) Absolute (HEPA class)** | Extremely fine media capturing virtually all particle sizes including bacteria | Operating theatres, clean laboratories; cannot be cleaned |

### Roll and deep-bed filters

Commercial dry filters often come as a **roll**: a spool of media that unwinds
across the airway. A differential pressure switch senses the resistance and runs
a motor to wind fresh media into the airstream when it dirties, so the filter is
effectively self-renewing until the roll runs out.

**Deep-bed filters** — V-form, cube, divided cube or multi-pocket bag — increase
the *area* of media in a given face. Understand what that buys you: more area
means a longer time between changes and a lower face velocity, **not a better
grade of filtration**. The media quality decides efficiency.

> The filter adhesive on viscous filters is called "oil" because that is what it
> looks like. It is not lubricating oil, and lubricating oil must never be
> substituted — use only the manufacturer's recommended filter adhesive.

### Electrostatic filters in detail

High-voltage wires in the airstream ionise particles as they pass, giving them a
positive charge. The charged particles then pass through a bank of collector
plates charged alternately positive and negative: the positive plates repel them
and they are driven onto the negative plates, where they stick.

- **Dry types** let the deposit build until it flakes off, and a cloth filter
  downstream catches the flakes.
- **Oil-coated types** must be washed and re-coated on a regular cycle.

Small electronic air cleaners run from desktop units to ceiling-mounted units
that replace a domestic return-air grille, usually combining a pre-filter for
large particles, the ioniser and collector cell, and an activated charcoal stage
for odours.

>! Electrostatic filters use around **13 000 volts** on the ionising section.
>! They must be fully enclosed from operators and fitted with safety switches
>! that isolate the supply as the access door is unlocked. Treat the collector
>! cell as live until you have isolated it and proved it dead — the plates can
>! hold a charge after switch-off.

### Absolute filters

Very costly, very specialised, and non-serviceable. They are replaced on a set
schedule or when the pressure drop shows they are loaded. Critically, they must
be **leak-tested after installation**, because any air bypassing the media
around the seal or frame defeats the entire installation — in a theatre or a
containment laboratory that is a safety failure, not just an inefficiency.

## Purifying air — the fresh-air question

Filtering removes particles. It does not put back what people take out. Exhaled
air may contain only about **16% oxygen** against roughly 20% in fresh air, plus
carbon dioxide, water vapour and body odours. The only cure is dilution with
outdoor air, filtered before it enters.

- Offices and homes: a minimum of about **5 L/s per person**.
- More active or contaminated areas: up to about **20 L/s per person**.
- The governing document in Australia is **AS 1668.2**, which sets the required
  outdoor air rates and mechanical ventilation requirements for buildings.

In operating theatres and similar spaces, **only outside air is supplied — no
recirculation** — and the contaminated air is exhausted away from occupied
areas. Just as importantly, the fresh air intake must be located well away from
any source of fumes: exhaust discharges, flues, loading docks, cooling tower
plumes, car parks.

Where fresh air alone cannot deliver the required purity, the options are higher
filtration grades, chemical purifiers or sprays, and — at the extreme — the
regenerative purifiers used in submarines and spacecraft.

### Noise counts as pollution too

A well-designed system adds as little sound as possible to the space. Sealing
and insulating a building for thermal reasons helps acoustically as well, and
outdoor unit noise is a genuine consideration for the neighbours: local
councils and state regulations set limits on the noise a condensing unit may
emit at a boundary, particularly at night.

## On the job

- Change filters on differential pressure, not on the calendar alone, and record
  the clean and dirty readings.
- A coil that keeps fouling means the filters are undersized, bypassed or fitted
  badly — check the seals and holding frames, not just the media.
- Never run a plant without filters "just for a day". That day's dust stays on
  the coil for the life of the machine.
- Grease filters in kitchen exhaust are a fire-safety item on a cleaning
  schedule, not an air-quality nicety.
- Check the outdoor-air intake location on every service. Intakes get blocked,
  taped over, or find themselves next to a new exhaust after a tenancy fitout.
`,
        quiz: [
          {
            q: "A deep-bed (multi-pocket bag) filter is fitted in place of a flat panel filter of the same media grade. What does this achieve?",
            options: [
              "Finer particles are captured",
              "More media area, so lower face velocity and longer life between changes — but the same filtration grade",
              "Higher initial pressure drop and shorter life",
              "The airflow through the plant increases permanently",
            ],
            answer: 1,
            explain: "Extending the media into pockets or a V-form increases the area presented to the same duct face. That lowers the velocity through the media and extends service life; the grade of filtration is a property of the media itself and is unchanged.",
          },
          {
            q: "How does an electrostatic filter capture particles?",
            options: [
              "Particles are ionised positively, then repelled by positive collector plates onto negative plates where they adhere",
              "Particles are attracted to an adhesive oil coating on the ioniser wires",
              "A high-frequency field vibrates particles until they fall out of the airstream",
              "Charged water droplets wash particles from the air",
            ],
            answer: 0,
            explain: "The ioniser wires charge the particles positively; the collector section has alternately charged plates, so the positive plates push and the negative plates attract, capturing the particles. That ioniser section runs at around 13 000 V, which is why interlocked, sealed enclosures are mandatory.",
          },
          {
            q: "An absolute filter has just been installed in a laboratory. Why must it be leak-tested in place?",
            options: [
              "To verify the media grade stated by the manufacturer",
              "Because any air bypassing the media at the seal or frame defeats the filtration entirely",
              "To measure the fan power required",
              "Because absolute filters must be washed before first use",
            ],
            answer: 1,
            explain: "An absolute filter is only as good as its seal. Unfiltered air leaking around the frame goes straight into the clean space, and no amount of media efficiency compensates. Absolute filters are never washed — they are replaced on schedule or on pressure drop.",
          },
          {
            q: "What outdoor air rate is the accepted minimum for an office under normal occupancy, and which standard governs it in Australia?",
            options: [
              "About 1 L/s per person, AS/NZS 3666",
              "About 5 L/s per person, AS 1668.2",
              "About 20 L/s per person, AS/NZS 5149",
              "About 50 L/s per person, AS 1668.2",
            ],
            answer: 1,
            explain: "About 5 L/s per person is the accepted office/home minimum, rising toward 20 L/s per person in more active or contaminated spaces. AS 1668.2 is the Australian Standard for the use of ventilation and air-conditioning in buildings; AS/NZS 3666 covers microbial control (cooling towers and warm water systems) and AS/NZS 5149 covers refrigerating systems safety.",
          },
        ],
      },

      /* ================================================================
         9 — Distributing air
         ================================================================ */
      {
        id: "distributing-air",
        title: "Distributing air: zones, outlets, fans and the fan laws",
        minutes: 13,
        simple: "Getting the air right is only half the job — you still have to deliver it without blowing papers off desks, making a whistle, or leaving a corner that never gets any. Different sides of a building heat up at different times of day, so they are split into zones and controlled separately. And if you speed a fan up to fix a duct problem, the motor power goes up by the cube of the speed — double the speed and you need eight times the power.",
        refs: ref("distributing air, air velocities and outlet positions", "zones in air-conditioning", "air distribution equipment: fan types, fan curves and fan laws"),
        content: `
Conditioned air is worth nothing until it reaches the people. The whole aim of
air distribution is to move air through the occupied space so that:

- turbulence is avoided,
- noise is kept low,
- there are no draughts at occupied level, and
- there are no stagnant pockets.

Missing any one of those produces a complaint, and no amount of correct
refrigeration will fix it.

## Velocities that matter

| Location | Velocity | Meaning |
|---|---|---|
| Occupied level | 0.1 – 0.2 m/s | The recommended range for comfort |
| Occupied level | Above 0.2 m/s | Perceived as a draught; also blows loose paper about |
| Outlet face | Above 3 m/s | Noise becomes objectionable, with a characteristic whistle |

A simple field check for room air movement is a **smoke test**: watch the smoke
drift horizontally and time it. Between one and two metres in ten seconds
corresponds to roughly 0.1–0.2 m/s — the target band.

**Worked example — sizing an outlet.** A diffuser must pass 500 L/s without
exceeding 2.5 m/s at the face. Free area required = 0.5 m³/s ÷ 2.5 m/s =
**0.2 m²**. Note that "free area" is not the same as the neck size: vanes and
bars typically leave only 70–80% of the gross area open, so the physical
diffuser must be correspondingly larger.

## Where the outlets go

In Australia, where cooling dominates, outlets — registers, diffusers or slot
diffusers — are normally in the ceiling or high on the walls. Cold supply air is
denser than room air: it hugs the ceiling until the jet slows to about 0.2 m/s,
then drops into the occupied zone, gently and already mixed. That is exactly the
behaviour you want.

In heating-dominated climates, low-level or floor outlets often work better,
letting warm air rise through the space. Heating from ceiling outlets risks
**stratification** — layers of warm air trapped at the ceiling with cold air at
the floor. The cure is enough outlet velocity to drive the warm jet down and mix
the room properly.

### Package units, splits and ducted

- **Window/wall package units (room air-conditioners)** break most of the
  distribution rules: one high-velocity outlet, compressor noise in the room,
  and airflow shaped only by the vanes. They work acceptably only when mounted
  high, correctly sized and carefully set — and their use has declined as splits
  have taken over.
- **Split systems** separate the noisy half: the condensing unit can sit up to
  about 15 m from the indoor unit, and the indoor unit is placed where the air
  distribution is best. Common forms are wall-hung (the most popular),
  under-ceiling, ceiling cassette, multi-split and floor console.
- **Ducted systems** distribute best: many outlets from one fan, low velocities,
  low noise, and air delivered to the far corners of every room without draughts
  or turbulence. A ducted split needs a proper return path from each conditioned
  room — undercut doors or transfer grilles — or the system fights itself.

## Zones

Any building big enough to need ducts and multiple outlets will have areas whose
load changes differently through the day. Those areas are **zones**: parts of a
building that need independent control of temperature, humidity and air
distribution.

The main driver in an office building is solar load, and in Australia the sun
strikes the **east wall first, then the north, then the west**. So the logical
division of a floor plate is five zones: north, south, east and west perimeter
zones, plus a central (core) zone. Perimeter zones can need cooling while
adjacent zones need heating — on a winter morning the east face can be in full
sun while the south face is not, and the core, driven by lights, people and
equipment, needs cooling almost all the time.

A **multi-zone air handler** answers this with a hot deck and a cold deck and a
pair of mixing dampers per zone, blending to whatever supply temperature each
zone duct requires. It is one solution among many — VAV boxes with reheat, VRF
indoor units and zone dampers all attack the same problem.

Additional zones are usually needed for ground and first floors, canteens,
theatrettes, and computer and conference rooms. Hospitals are zoned by health
hazard level instead: some areas full outside air, some allowed recirculation,
some completely isolated.

> Good building design reduces the number of zones. Sensible window placement,
> shading and reflective surfaces flatten the differences between faces, which
> simplifies the system and cuts energy without costing comfort.

## Fan types

| Fan | Efficiency (fan static) | Suits | Watch |
|---|---|---|---|
| **Propeller** | Under 40% | Condensers, wall ventilators, free air movement; better in a cowl ring | Useless against duct resistance |
| **Forward-curved centrifugal (multi-vane)** | 50–60% | Low and medium pressure air-conditioning; most packaged units below about 0.5 kPa | Quiet and compact, but power rises with airflow, so the motor must be oversized |
| **Backward-curved (limit load) centrifugal** | 70–75% | Large systems with high duct or terminal resistance; will work against 1.5 kPa; suits VAV | High tip speed, so noisier |
| **Axial flow** | 60–65% | Straight-through, fits inside a duct run; variable pitch available | Relatively high tip noise |

Variations worth knowing: an **aerofoil backward-curved** fan reaches 80–85% but
costs more; an **axial fan with guide vanes** smooths the flow and reaches
70–75%, ideal for vertical-axis and tunnel work; and a **straight- or
paddle-bladed (radial) centrifugal** fan is inefficient but is the right choice
in dirty airstreams where material would build up in curved blades.

### Fan curves

A fan curve plots pressure, power and efficiency against airflow.

- On a **forward-curved** fan, the power rises as flow approaches wide open. Pull
  the filters out and the motor can overload — a real failure mode.
- On a **backward-curved limit-load** fan, power peaks and then falls again
  toward free air. That is the "non-overloading" characteristic, and it is why
  these fans suit variable-volume systems.

Fans should be selected to run near peak efficiency; below that point the flow
becomes unstable. Maintenance keeps them there: bearings serviced, and on
forward-curved wheels, the dirt cleaned from inside the curve of every blade
just behind the leading edge. That build-up changes the blade shape and quietly
destroys performance.

## The fan laws

For a given fan in a given system:

1. **Airflow varies directly with speed.** New m³/s = old m³/s × (new rpm ÷ old
   rpm)
2. **Static pressure varies as the square of speed.** New SP = old SP × (new rpm
   ÷ old rpm)²
3. **Power varies as the cube of speed.** New power = old power × (new rpm ÷ old
   rpm)³

**Worked example.** A fan at 1000 rpm delivers 1000 L/s at 300 Pa, absorbing
0.75 kW. Speed it up to 1200 rpm (a ratio of 1.2):

- Airflow = 1000 × 1.2 = **1200 L/s**
- Static pressure = 300 × 1.2² = 300 × 1.44 = **432 Pa**
- Power = 0.75 × 1.2³ = 0.75 × 1.728 = **1.30 kW**

A 20% gain in air costs a 73% gain in power. Double the speed and the power
becomes 2³ = **8 times** the original.

>! This is why "put a bigger pulley on it" is such a dangerous fix for undersized
>! ductwork. A modest speed increase to chase airflow can push the motor past its
>! rating and burn it out, and it will run happily for weeks before it does.
>! Check the absorbed current against the motor nameplate after any speed change,
>! and fix the ductwork rather than the fan wherever you can.

## What to remember

- Target 0.1–0.2 m/s at occupied level; over 0.2 m/s reads as a draught.
- Keep outlet face velocity under about 3 m/s or you will hear it.
- Cooling suits high outlets, heating suits low ones; ceiling heating risks
  stratification.
- Zones exist because solar load walks around the building through the day.
- Forward-curved fans overload toward free air; backward-curved limit-load fans
  do not.
- Flow with speed, pressure with speed squared, power with speed cubed.
`,
        quiz: [
          {
            q: "A fan is sped up from 900 rpm to 1080 rpm to increase airflow. If it originally absorbed 1.5 kW, what will it now absorb?",
            options: [
              "1.8 kW",
              "2.16 kW",
              "2.59 kW",
              "3.0 kW",
            ],
            answer: 2,
            explain: "Power varies as the cube of speed. The ratio is 1080 ÷ 900 = 1.2, so power = 1.5 × 1.2³ = 1.5 × 1.728 = 2.59 kW. Answers of 1.8 kW (direct ratio) and 2.16 kW (square) are the classic errors — and picking either is how motors get burnt out.",
          },
          {
            q: "A technician removes the filters from a packaged unit with a forward-curved centrifugal fan to 'check the airflow'. Why is this risky?",
            options: [
              "Forward-curved fan power rises as airflow approaches wide open, so the motor can overload",
              "The fan will stall and overheat at low flow",
              "The static pressure will rise and burst the duct",
              "Backward-curved fans are the only type affected by system resistance",
            ],
            answer: 0,
            explain: "Removing resistance lets a forward-curved fan run out toward free delivery, where its absorbed power is highest — it is a non-limit-load characteristic. A backward-curved limit-load fan is safe in this respect because its power peaks and then falls off toward free air.",
          },
          {
            q: "In Australia, why are supply air outlets usually placed in the ceiling or high on walls?",
            options: [
              "Because ductwork is cheaper in a ceiling space",
              "Because cooling dominates: cold air hugs the ceiling, slows to about 0.2 m/s, then drops into the occupied zone already mixed",
              "Because ceiling outlets always produce less noise than floor outlets",
              "To prevent condensation on the outlets",
            ],
            answer: 1,
            explain: "The physics of the cold jet is the reason: denser cool air runs along the ceiling until the jet decays, then falls gently and pre-mixed. In heating-dominated climates the reverse logic applies and low or floor outlets work better, since ceiling heating risks stratification.",
          },
          {
            q: "An office floor plate is divided into north, south, east, west and central zones. What is the principal reason?",
            options: [
              "Fire compartmentation requirements",
              "Because the solar load moves around the building through the day, so different faces need different treatment at the same time",
              "Because each zone needs its own outdoor air intake",
              "To allow each zone to run a different refrigerant",
            ],
            answer: 1,
            explain: "The sun hits the east face in the morning, the north around midday and the west in the afternoon, while the core is driven by internal gains and needs cooling almost continuously. One face may need cooling while another needs heating at the same moment, and only independent zone control can serve both.",
          },
          {
            q: "A supply diffuser must deliver 400 L/s. What free area keeps the face velocity at or below 2.5 m/s?",
            options: [
              "0.016 m²",
              "0.16 m²",
              "1.6 m²",
              "10 m²",
            ],
            answer: 1,
            explain: "Area = volume flow ÷ velocity = 0.4 m³/s ÷ 2.5 m/s = 0.16 m². Remember to convert L/s to m³/s first, and remember that free area is less than gross area — vanes and bars block 20–30% of it, so the diffuser itself must be larger.",
          },
        ],
      },

    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
