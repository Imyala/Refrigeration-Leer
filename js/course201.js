/* =========================================================================
   Course content, module R2.1 — Alternative refrigeration systems.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 1.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const R_SECONDARY = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — secondary refrigerant systems and liquid chillers",
  ];
  const R_BRINE = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — secondary refrigerants, brines and eutectic mixtures",
  ];
  const R_ICE = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — ice storage and partial storage systems",
  ];
  const R_EXPEND = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — expendable refrigerant systems, liquid nitrogen and carbon dioxide",
  ];
  const R_ABS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — absorption refrigeration, the ammonia-water cycle and domestic absorption units",
  ];
  const R_LIBR = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — industrial absorption refrigeration using lithium bromide and water",
  ];
  const R_SOLAR = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — solar air-conditioning, economics of absorption systems and steam-jet refrigeration",
  ];
  const R_MISC = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — air-cycle, vortex tube and thermoelectric refrigeration",
  ];

  const MODULES = [
    {
      id: "v2-alternative-systems",
      stream: "v2",
      title: "R2.1 · Alternative refrigeration systems",
      blurb:
        "Every way of making cold that is not a plain vapour-compression circuit: chilled water and brine, ice storage, cryogenic expendables, absorption, steam-jet, air-cycle, vortex tubes and Peltier modules.",
      lessons: [

        /* ================================================================
           1 — Secondary refrigerant systems and liquid chillers
           ================================================================ */
        {
          id: "secondary-refrigerants-and-chillers",
          title: "Secondary refrigerant systems and liquid chillers",
          minutes: 13,
          simple:
            "Instead of running refrigerant pipes all over a building, you keep the refrigeration plant in one room, use it to chill water, and pump the cold water out to where it is needed. It is the same idea as a house heated by hot-water radiators rather than a fire in every room: one boiler, many pipes. The water is called a secondary refrigerant because it carries the cold but never boils or condenses.",
          refs: R_SECONDARY,
          content: `
Walk into the plant room of a hospital, a shopping centre or a university and
you will not find refrigerant pipes running to every ceiling. You will find one
or two big machines making chilled water, and pumps sending that water out
through the building. That is a **secondary refrigerant system**, and it is the
single most common way large buildings are cooled in Australia.

## What a secondary refrigerant is

A secondary refrigerant system uses some means of refrigeration — almost always
a vapour-compression circuit — to cool a fluid, usually water or a brine. That
fluid is then pumped to the load and does the actual cooling of the product or
the air. The primary refrigerant boils and condenses inside the plant; the
secondary fluid never changes state, it just gets colder and warmer.

The one place the two fluids meet is inside the liquid chiller itself, which is
simply a shell-and-tube (or plate) heat exchanger acting as the evaporator.

Typical applications:

- **Air-conditioning of large buildings** — by far the biggest use. Chilled water is piped to cooling coils in air-handling ducts or to fan-coil units.
- **Beverage "super chillers"** for bulk drink dispensing.
- **Winter sports venues** — ice rinks, bobsleigh runs, indoor ski slopes, where a brine circulates under the ice slab.
- **Supermarkets**, to cut the amount of primary refrigerant in the shop and so cut leakage. In some of these the secondary fluid is liquid CO2.

## Why bother with a second fluid?

- The primary charge stays in the plant room, so a leak is smaller, cheaper and easier to find. That matters under Australia's refrigerant handling rules and for any charge-based reporting.
- Water pipe runs can be long, branched and altered later without touching the refrigeration circuit — you cannot casually extend a DX line set 60 m across a roof.
- Water and brine have thermal mass, which smooths out load swings.
- With an ammonia or hydrocarbon primary charge, the toxic or flammable fluid can be confined to a machinery room built to AS/NZS 5149.

The price you pay is an extra heat exchanger, an extra temperature difference,
and pump power. Every kelvin of approach in the chiller pushes the evaporating
temperature lower, and lower suction temperature costs compressor power. Expect
a secondary loop to cost a few per cent of system efficiency compared with a
well-designed direct-expansion coil.

## Liquid chillers

Liquid-chilling units for air-conditioning fall into two families:

- **compression system units** (a normal vapour-compression circuit), and
- **absorption system units** (heat-driven — the subject of later lessons).

Their job is identical: deliver chilled water at about **5 to 7°C** to the
building. A common design condition is 6°C flow and 12°C return.

Compression chillers are made from about **50 kW** refrigerating capacity up to
machines of **9000 to 12000 kW**. A typical medium-sized packaged machine of
**350 to 1200 kW** uses a centrifugal compressor with a water-cooled condenser
served by a cooling tower. Compressors may equally be reciprocating, screw,
scroll or centrifugal.

### Which compressor, which refrigerant

| Compressor type | Refrigerants commonly seen | Notes |
| Reciprocating | most available refrigerants; R22, R134a common | flexible, smaller duties |
| Screw | R22, R134a, R717 (ammonia) | industrial and larger commercial |
| Scroll | R22, R410A | multiple scrolls in modular chillers |
| Centrifugal | R123, R124, R134a | large duties, low pressure ratio per stage |

For centrifugal machines the choice matters a great deal:

- **R123** is a low-pressure refrigerant. Because operating pressures are low, the vessels need less strength and are cheaper to build. The catch is that the evaporator sits **below atmospheric pressure**, so any leak lets air and moisture *in* rather than refrigerant out.
- **R124** is a medium-pressure refrigerant used mainly for high-ambient air-conditioning.
- **R134a** is relatively high pressure and suits the higher compression ratios of air-cooled machines.

>! R22 and R123 are HCFCs and are being phased out under Australia's Montreal
> Protocol commitments. Bulk imports essentially ceased in 2016, with small
> quantities permitted until 2030 for servicing existing plant; using existing
> stock and recovered, recycled HCFC remains permitted. You will still meet
> these machines in the field for years — recover, do not vent, and log it.

Natural refrigerants — ammonia, CO2 and hydrocarbons — are increasingly offered
in chillers. Chillers are expensive, long-lived assets, so the selection is a
design decision weighing capital cost, efficiency, refrigerant availability and
machinery-room requirements.

## Worked example: chilled water flow

A 350 kW chiller is to be run on a 6 K water temperature rise
(6°C flow, 12°C return). What flow rate is needed?

Q = m x cp x deltaT, so m = Q / (cp x deltaT)

m = 350 / (4.18 x 6) = **13.96 kg/s**

Water is close to 1 kg per litre, so that is about **14 L/s**. If the designer
had chosen a 5 K rise instead, the flow would rise to 350 / (4.18 x 5) =
16.7 L/s — bigger pipes and more pump power for the same cooling. That trade-off
between temperature difference and pumping cost is the heart of chilled-water
design.

## Purging negative-pressure chillers

Any machine whose evaporator runs below 0 kPa gauge will slowly draw in air and
water vapour through minute leaks. Those non-condensables collect in the
condenser, where they raise condensing pressure, increase starting and running
load and power cost, cut cooling capacity, and push a centrifugal machine
towards **surge**.

!SIM[See what non-condensables do to head pressure](fault=nonCondensables)

Two purge arrangements are used:

1. **Compressor-type purge unit.** A small purge compressor draws the mixture of refrigerant vapour, air and water vapour from the system condenser and compresses it into an oil separator tank, where the vapour is kept warm so it does not condense and get carried away with the oil. Oil collects in the bottom and returns to the purge compressor through a float valve. The vapours pass to the purge drum, where cooling coils (mains water, chilled system water or refrigerant) condense the refrigerant and water out. Non-condensable gas collects at the top and, when drum pressure exceeds the relief valve setting, is vented to atmosphere. With R123 that valve typically opens between 200 and 300 kPa and is fully closed below 160 kPa. Condensed refrigerant returns to the evaporator through a float valve; water floats on the refrigerant and is drained through a manual blow-off valve when it shows at the sight glass.
2. **Continuous thermal purge unit.** Vapour is bled continuously from the top of the condenser through a refrigerated purge drum; refrigerant returns to the evaporator and non-condensables are exhausted through a relief valve.

The purger runs on demand — on rising pressure, automatically for a set period
before each start, or manually.

> Australian requirement: new equipment has to carry a high-efficiency purge unit
> that recovers refrigerant, and older plant has to be retro-fitted with one.
> Purge losses are capped at **0.5 kg of refrigerant per 1 kg of air** removed,
> and a monitor that displays the actual purging time is required as well. The
> rule sits in the Refrigerant Handling Code of Practice (Australia and New
> Zealand, 2007) at Part 2, Section 2.8. A purge unit that can operate
> independently of the chiller is also recommended.

A rising purge run-time trend is one of the most useful diagnostics you have on
a low-pressure machine: it means the leak is getting worse, and every kilogram
of air pumped out takes refrigerant with it.

## On the job

- Read the purge monitor at every service and trend it. Hours of purging per week is your leak-rate indicator.
- Chilled water at 5 to 7°C is the target; a rising leaving-water temperature with normal approach usually means load, not fault.
- Check the approach temperature (refrigerant saturation versus leaving water) at both vessels — a widening evaporator approach usually means fouled or scaled tubes.
- Confirm the flow before you condemn the machine. Low water flow looks exactly like low capacity on the gauges.
- Recover HCFCs; never vent. Handle refrigerant only within your ARCtick authorisation.
`,
          quiz: [
            {
              q: "What defines a secondary refrigerant?",
              options: [
                "It is a second charge of the same refrigerant used as a top-up",
                "A fluid such as water or brine that is cooled by the plant and pumped to the load without changing state",
                "The refrigerant used in the low stage of a cascade system",
                "A blend added to the primary refrigerant to lower its boiling point",
              ],
              answer: 1,
              explain:
                "The secondary fluid carries cooling from the chiller to the load and stays liquid the whole time. The low stage of a cascade is still a primary refrigerant — it boils and condenses in its own circuit, so that option is the tempting but wrong one.",
            },
            {
              q: "A centrifugal chiller charged with R123 has an evaporator operating below atmospheric pressure. What is the practical consequence?",
              options: [
                "Refrigerant leaks out quickly, so the charge must be topped up often",
                "Air and moisture leak in, so a purge unit is needed",
                "The vessels must be built to a higher pressure rating",
                "Oil cannot return to the compressor",
              ],
              answer: 1,
              explain:
                "Below atmospheric pressure the pressure difference drives air inwards. That is why low-pressure machines carry purge units. Low pressure is also why the vessels can be built lighter, not heavier — so the pressure-rating option is backwards.",
            },
            {
              q: "A chiller must deliver 420 kW with a 6 K rise in the chilled water. Approximately what water flow is required?",
              options: ["8 L/s", "17 L/s", "42 L/s", "70 L/s"],
              answer: 1,
              explain:
                "m = Q / (cp x deltaT) = 420 / (4.18 x 6) = 16.7 kg/s, about 17 L/s. Dividing the kW by the temperature rise alone (70) forgets the specific heat capacity of water.",
            },
            {
              q: "Under the ANZ Refrigerant Handling Code of Practice, the refrigerant lost during purging must not exceed…",
              options: [
                "0.5 kg of refrigerant per 1 kg of air",
                "5 kg of refrigerant per 1 kg of air",
                "0.5 kg of refrigerant per hour",
                "There is no limit, provided the purge is automatic",
              ],
              answer: 0,
              explain:
                "The limit is expressed as a ratio: 0.5 kg refrigerant per 1 kg of air removed, and a purge monitor showing actual purging time must be fitted. An hourly limit would be meaningless because purge demand depends on how much air is getting in.",
            },
          ],
        },

        /* ================================================================
           2 — Brines, glycols and eutectic mixtures
           ================================================================ */
        {
          id: "brines-glycols-eutectics",
          title: "Brines, glycols and eutectic mixtures",
          minutes: 11,
          simple:
            "Plain water freezes at 0°C, which is useless if you need to carry cold at minus ten. Dissolve salt or antifreeze in it and the freezing point drops, the same way salt on an icy road stops ice forming. There is one exact recipe — the eutectic — that gives the lowest freezing point of all, and a tank of frozen eutectic acts like a big rechargeable ice block that holds one steady temperature while it melts.",
          refs: R_BRINE,
          content: `
Once the secondary fluid has to go below 0°C, water alone will not do. Ice rinks,
freezer plant, brine-cooled process vessels and cold-store eutectic plates all
need a fluid that stays liquid well below zero — or, in the case of eutectic
plates, one that freezes on purpose at a chosen low temperature.

## Brines and other secondary fluids

In a chiller the secondary refrigerant never changes state — it stays liquid,
and a pump drives it around the circuit from the liquid chiller. That chiller is
the single location at which the primary refrigerant and the secondary fluid
meet. Coils carrying brine or chilled water are often a long way from the
machine, and that is exactly why they are chosen ahead of direct refrigerant
coils.

The common families are:

| Secondary fluid | Practical notes |
| Water | cheapest and best heat transfer, but limited to duties above 0°C |
| Sodium chloride brine | cheap, good to around -18°C in service, aggressive to steel if not inhibited |
| Calcium chloride brine | the traditional low-temperature brine for cold stores and rinks |
| Ethylene glycol | good heat transfer and low viscosity, but toxic — not for food contact |
| Propylene glycol | food-safe grade, more viscous, poorer heat transfer, needs more pump head |
| Ethyl alcohol solutions | used where low temperature and food compatibility are both needed |
| Potassium formate / acetate | low-viscosity low-temperature fluids used in modern supermarket loops |
| Liquid CO2 | a volatile secondary — it boils in the case coil, so pipes and pump power are tiny |

The arrival of good low-temperature secondary fluids is exactly what made
secondary systems practical in supermarket refrigeration, where cutting the
primary charge cuts leakage.

## A second job for brine: storing cold

Brine is also used to extend the cooling period available from a plant driven by
an engine or by an intermittent power supply. Enough brine is stored — either as
liquid or frozen solid — to hold refrigeration through the off period, possibly
overnight. The same trick, applied deliberately with off-peak electricity, is
the basis of the ice storage systems in the next lesson.

## Eutectic mixtures

Storing cold as sensible heat in a liquid is inefficient, because you only get
mass x specific heat x temperature rise out of the tank. A far more compact
store uses a **eutectic brine**.

A eutectic brine is a brine at one particular critical concentration of salt in
water — the concentration that gives the **lowest possible freezing point** for
that mixture, and at which both constituents solidify at the same time.

A solution at any other concentration begins to freeze at a temperature *higher*
than the eutectic temperature, because one component separates out first:

- if the salt concentration is **low**, water separates as **ice crystals**
- if the water concentration is **low**, the **salt** crystallises out.

Only at the eutectic point do ice and salt crystals start to form together, and
only there does the mixture behave like a pure substance — freezing and melting
at one flat temperature.

| Salt | Percentage of salt in solution by weight | Eutectic temperature |
| Potassium chloride | 19.7 | -10.5°C |
| Sodium chloride | 23.3 | -21.1°C |
| Potassium carbonate | 35.5 | -37°C |
| Calcium chloride | 32.4 | -51°C |

Sodium chloride and calcium chloride are the two most often used as eutectic or
freezing brines.

## Why a frozen eutectic beats a tank of cold liquid

The whole eutectic charge can be frozen, in a tank or plate inside the
refrigerated space, at a temperature low enough to give freezer conditions. What
you end up with is a low-temperature "ice block" that melts at its freezing
temperature, absorbing latent heat without any rise in temperature. Compared
with a liquid brine allowed a 10 K temperature rise, only about **one tenth of
the volume** is needed for the same stored cooling.

!FIG[latent-plateau]

### Worked example: latent versus sensible storage

Take plain water and ice to show the arithmetic, because the numbers are
standard:

- Storing cold in **liquid** water over a 10 K rise: 4.18 kJ/kg.K x 10 K = **41.8 kJ per kg**.
- Storing cold as **melting ice**: the latent heat of fusion of water is 334 kJ/kg, so **334 kJ per kg**.

334 / 41.8 = **8 times** as much stored energy per kilogram, and the melting ice
delivers it all at one steady temperature rather than drifting upwards. Eutectic
brines behave the same way at their own, much lower, melting temperature — which
is where the "one tenth of the volume" rule of thumb comes from.

That flat temperature is the real selling point for eutectic plates in
refrigerated delivery vans. The plates are frozen overnight from mains power,
the truck runs all day with no compressor at all, and the product sees one
temperature until the plates are spent.

## Field practice with brines and glycols

- **Test the concentration, do not guess it.** A refractometer or a hydrometer plus a temperature correction gives the freeze point. Record it on the service sheet.
- **Never top up with plain water.** Every top-up dilutes the mixture and raises the freeze point — the classic cause of a burst chiller barrel after a cold night.
- Know the difference between **freeze point** and **burst point**. A glycol mixture that starts to form slush at -8°C may not split pipework until much colder, but slush will block a plate exchanger long before that.
- **Inhibitors deplete.** Inhibited glycol has a corrosion package that wears out; check pH (typically kept mildly alkaline) and inhibitor level annually. An untested loop turns acidic and eats the steel.
- Glycol thickens the fluid: heat transfer falls and pump head rises, so a coil selected on water will not deliver its rating on 35 per cent glycol. Derate it.
- Do not mix fluid types, and never use automotive coolant in a food-industry loop — the dyes and additives are not food-grade, and ethylene glycol is toxic.

>! Ethylene glycol is poisonous if swallowed and is readily drunk by animals
> because it tastes sweet. Use propylene glycol anywhere there is a food or
> potable-water risk, contain and dispose of spent glycol properly, and never
> discharge brine or glycol to stormwater.

## What to remember

- Secondary fluid choice is a compromise between freezing point, heat transfer, viscosity, toxicity and cost.
- The eutectic concentration is the one recipe with the lowest freezing point, where both components solidify together.
- Latent storage in a frozen eutectic is roughly ten times as compact as sensible storage in liquid brine over a 10 K rise.
- Concentration, pH and inhibitor testing is a routine maintenance task, not an optional extra.
`,
          quiz: [
            {
              q: "What is special about a eutectic brine concentration?",
              options: [
                "It is the concentration at which the brine will not freeze at all",
                "It is the concentration giving the lowest freezing point, where salt and ice solidify together",
                "It is the concentration at which the salt no longer dissolves",
                "It is the concentration that gives the highest specific heat capacity",
              ],
              answer: 1,
              explain:
                "At the eutectic point both constituents solidify simultaneously at the lowest freezing temperature for that pair. Away from it, one component (ice or salt) precipitates first at a higher temperature — which is why an off-recipe brine turns slushy sooner than expected.",
            },
            {
              q: "A sodium chloride eutectic brine freezes at approximately…",
              options: ["-10.5°C", "-21.1°C", "-37°C", "-51°C"],
              answer: 1,
              explain:
                "Sodium chloride at 23.3 per cent by weight gives -21.1°C. The -51°C figure belongs to calcium chloride at 32.4 per cent, which is why calcium chloride is chosen for genuinely low-temperature brine duty.",
            },
            {
              q: "Why does a frozen eutectic plate hold far more cooling than the same volume of cold liquid brine?",
              options: [
                "Because solids conduct heat better than liquids",
                "Because it absorbs latent heat of fusion at a constant temperature instead of only sensible heat over a temperature rise",
                "Because freezing raises the specific heat capacity of the brine",
                "Because the frozen plate operates at a lower pressure",
              ],
              answer: 1,
              explain:
                "Melting absorbs a large latent heat at one steady temperature; warming a liquid only gives mass x specific heat x temperature rise. For water the ratio is about 334 to 41.8, roughly eight to one over a 10 K rise.",
            },
            {
              q: "A glycol loop that failed a freeze test last winter has been topped up several times with water after leaks. What is the first thing to check?",
              options: [
                "The chiller superheat",
                "The glycol concentration with a refractometer, and the inhibitor level and pH",
                "The pump rotation",
                "The refrigerant charge",
              ],
              answer: 1,
              explain:
                "Water top-ups dilute the mixture and raise the freeze point, and they dilute the corrosion inhibitor package at the same time. Testing concentration and pH tells you whether the loop is at risk of both freezing and internal corrosion.",
            },
          ],
        },

        /* ================================================================
           3 — Ice storage and partial storage
           ================================================================ */
        {
          id: "ice-storage-partial-storage",
          title: "Ice storage and partial storage systems",
          minutes: 11,
          simple:
            "A building might need a huge amount of cooling for three hot hours a day and very little the rest of the time. Instead of buying a giant machine that idles most of the day, you buy a small one, run it all night making ice, and melt the ice during the rush. It is the same logic as filling a rainwater tank slowly and using it fast, and it lets you buy the electricity when it is cheap.",
          refs: R_ICE,
          content: `
Air-conditioning load is not steady. It peaks for a few hours on a hot afternoon
and collapses overnight. Electricity tariffs behave the same way in reverse:
peak-period energy and demand charges are dear, off-peak energy is cheap. Ice
storage exploits both facts by making cold at night and spending it during the
day.

## How an ice storage plant works

An ice storage system makes its own ice and holds it until the air-conditioning
plant calls for chilled water. The refrigeration side is conventional — a
reciprocating or centrifugal compressor with whatever condensing arrangement
suits the site.

One classic evaporator type is a set of **hollow plates submerged in a water
tank**. An expansion valve meters liquid refrigerant into one end of each plate,
the compressor suction is connected to the other end, and the latent heat of
vaporisation is drawn from the water surrounding the plates. Water freezes onto
the outside of the plates, building a slab of ice.

Controls to expect:

- an **ice thickness control** that stops the compressor when the ice reaches the design thickness
- a **float valve** controlling water level in the tank (water expands as it freezes, so level control matters)
- a **three-way mixing valve** for leaving-water temperature control, blending water that has passed the ice with bypassed return water
- tanks of evaporator plates connected in **parallel** to make up any storage capacity required.

## Why do it

- **Lower capital cost** than a plant big enough to ride out the peak unaided. A small machine running many hours does the work of a large machine running few.
- **Lower power cost** — energy bought off-peak, and the site's maximum demand (kVA or kW charge) is trimmed because the big compressor never has to run at the same moment as the building peak.
- The stored cooling is also emergency capacity if the compressor drops out.

The main disadvantage is **lead time before occupancy**: the number of hours of
compressor operation needed to build ice to the thickness required to meet the
peak load. Commission an ice plant on a Monday morning and there is no stored
cooling until it has run a full build cycle — usually overnight.

## Partial storage

Ice storage has come back into favour as an energy-management measure, often
supplementing conventional plant rather than replacing it.

A typical **partial storage** plant uses chillers to cool and circulate brine,
with ice storage tanks building ice during the off-peak period. During the day
the chillers pre-cool the brine and the **latent heat of fusion of the melting
ice** pulls the brine temperature down further before it goes to the load. There
is a wide range of ways the chillers and the melting ice can be combined:

- in winter the melting ice alone may cover the whole demand
- in a summer peak both the chillers and the melting ice run together
- at night the chillers work only on rebuilding ice.

| Strategy | How the peak is met | Plant size | Storage size |
| Full storage | entirely from stored ice; chillers off during the peak period | smallest chiller, largest demand saving | very large |
| Partial (load levelling) | chiller runs flat out all day, ice tops up the peak | moderate | moderate |
| Demand limited | chiller capped to a set kW during peak, ice covers the rest | moderate | sized to the cap |

## Worked example: how much ice?

A building needs 500 kW of cooling for the 5-hour afternoon peak, and the design
calls for **full storage** of that peak.

1. Energy to be stored: 500 kW x 5 h = 2500 kWh. In joules: 2500 x 3600 = **9 000 000 kJ**.
2. Latent heat of fusion of ice: **334 kJ/kg**.
3. Mass of ice: 9 000 000 / 334 = **26 950 kg**, roughly **27 tonnes**.

If instead the plant is sized for **partial storage** covering 40 per cent of
that peak, only 0.4 x 27 = about **11 tonnes** of ice is needed, and the chiller
must still deliver 300 kW during the peak.

Now the build side. If that 27 tonnes has to be made in an 8-hour off-peak
window, the average ice-making duty is
9 000 000 kJ / (8 x 3600 s) = **313 kW**. Note that this is well below the
500 kW peak — that is the whole point — but the chiller must produce it while
running at a *lower* suction temperature to make ice, where its capacity is
typically 30 to 40 per cent below its chilled-water rating. Sizing an ice plant
on the nameplate chilled-water capacity is a classic and expensive mistake.

## Storage types you will meet

- **Ice-on-coil, external melt** — the plate or coil arrangement described above, with warm return water circulated over the ice.
- **Ice-on-coil, internal melt** — glycol circulates inside the coil both to build and to melt the ice from the inside out.
- **Ice harvester** — ice is built on a plate evaporator, then released by a brief hot-gas defrost so it drops into a bin of water below.
- **Encapsulated ice** — plastic spheres or capsules of water sitting in a glycol tank.
- **Chilled water storage** — large stratified tanks storing sensible cooling only; far bulkier, but no low-temperature penalty on the chiller.

## On the job

- Ask which mode the plant is in before judging any reading. Ice build, ice melt and direct cooling all give different, entirely normal, pressures.
- Check glycol concentration in an internal-melt system every year — dilution here means a frozen, split coil.
- Verify the ice inventory sensor and thickness control. A control that stops the build early leaves the building short at 3 pm; one that never stops can bridge ice across the plates and split the tank.
- Air agitation pumps or bubbler systems keep the water moving so ice builds evenly. A failed blower gives lumpy build and poor melt rates.
- Remind the client the payback comes from the tariff. If the site changes to a flat tariff, the economics of the storage change with it.
`,
          quiz: [
            {
              q: "The main capital-cost argument for ice storage is that…",
              options: [
                "ice is a more efficient refrigerant than water",
                "a smaller refrigeration plant can meet a short, high peak by building storage over many hours",
                "the compressor runs at a higher suction temperature when making ice",
                "no condenser is required",
              ],
              answer: 1,
              explain:
                "Storage decouples plant size from peak load. Making ice actually forces a lower suction temperature and therefore lower compressor capacity and efficiency, so the third option is the reverse of the truth — the saving is in plant size and tariff, not cycle efficiency.",
            },
            {
              q: "A 400 kW load must be carried for 6 hours entirely from ice storage. Approximately how much ice is needed?",
              options: ["2.6 tonnes", "8.6 tonnes", "26 tonnes", "86 tonnes"],
              answer: 2,
              explain:
                "400 x 6 = 2400 kWh = 8 640 000 kJ; divided by the 334 kJ/kg latent heat of fusion gives about 25 900 kg, roughly 26 tonnes. Forgetting to convert kWh to kJ (multiplying by 3600) is what produces the 8.6 tonne answer.",
            },
            {
              q: "What is meant by the lead time of an ice storage system?",
              options: [
                "The delay before the compressor unloads on start-up",
                "The hours of compressor operation needed to build ice to the thickness required for the peak load",
                "The time taken for chilled water to reach the far end of the building",
                "The notice period the supply authority requires for off-peak tariffs",
              ],
              answer: 1,
              explain:
                "Lead time is the build time before occupancy. It is the practical disadvantage of ice storage: unlike a conventional chiller, the plant cannot answer a call for cooling immediately from cold.",
            },
            {
              q: "In a partial storage plant, how are the chillers and the ice normally used together on a summer peak day?",
              options: [
                "The ice is used first and the chillers only start when it is exhausted",
                "The chillers pre-cool the brine and the melting ice lowers it further before it reaches the load",
                "The chillers make ice and cool the building at the same time from the same evaporator",
                "The ice is used only as emergency backup",
              ],
              answer: 1,
              explain:
                "In partial storage the chiller does the first stage of cooling and the latent heat of the melting ice does the rest, so both contribute during the peak. Full storage — chillers off during the peak — is the different strategy described in the comparison table.",
            },
          ],
        },

        /* ================================================================
           4 — Expendable refrigerant systems
           ================================================================ */
        {
          id: "expendable-refrigerant-systems",
          title: "Expendable refrigerant systems: liquid nitrogen and CO2",
          minutes: 12,
          simple:
            "Some systems make cold by spraying an extremely cold liquid straight onto the food and letting the vapour blow away — no compressor, no condenser, nothing to recycle. It is like cooling a drink with ice you then throw out, except the liquid boils at minus 196 degrees. It freezes food in minutes, but the refrigerant is a consumable you buy by the kilogram, and it will suffocate you if you walk into the room.",
          refs: R_EXPEND,
          content: `
An expendable refrigerant system is a refrigeration system with the back half
missing. There is no compressor and no condensing unit: a very cold liquid is
released into the space, boils, does its cooling, and the vapour is vented to
atmosphere. The refrigerant is spent, not recycled.

You will meet these systems on refrigerated transport vehicles and shipping
containers carrying perishables, in food-processing plants for snap-freezing,
in large catering kitchens, and as emergency backup for conventional freezer
rooms.

The refrigerants used are non-toxic, low-temperature liquids — almost always
**liquid nitrogen** or **liquid carbon dioxide**.

## The two parts of the system

### 1. The storage vessel

Liquid refrigerant is held in large insulated on-site cylinders, built like
oversized vacuum flasks. Each vessel has an inner pressure vessel and an outer
shell, with the space between them filled with multi-layer insulation and
**evacuated**. Fittings include:

- fill and supply connections with their valves
- a liquid level gauge and pressure gauge
- a vent valve
- pressure-relief valve and a **bursting (rupture) disc** as the second line of protection
- a separate **vacuum rupture disc** protecting the outer jacket.

If the jacket vacuum is lost, the vessel starts boiling off hard and frost
appears on the outer shell — that vessel is finished and must be returned to
the gas supplier.

### 2. The distribution system

The pipework between the vessel and the refrigerated space is no different in
principle from any refrigerant line. What varies is how the refrigerant is
delivered:

1. **Evaporator system.** Refrigerant is fed to an evaporator through a thermostatically operated solenoid valve. As the space warms, the thermostat opens the solenoid and refrigerant enters the evaporator and vaporises. At setpoint the solenoid closes and the liquid left in the coil boils off. Evaporators may be finned forced-draught coils, plates, or eutectic plates.
2. **Refrigerant spray system.** Common on refrigerated transport. Liquid is sprayed directly into the space through a **spray header** fixed to the roof of the compartment, controlled the same way by thermostat and solenoid. A portable variant is not fixed to the container at all: liquid CO2 is discharged manually through an access port onto the load. This is called **snow shooting**.

In snow shooting, pressurised liquid CO2 is sprayed through an expansion nozzle
(a snow horn or snow gun) into the container through a porthole. A high-velocity
stream of dry ice snow and cold CO2 gas leaves the nozzle at about **-78°C**, and
the dry ice absorbs heat as it **sublimes** directly from solid to vapour.

## The two refrigerants

### Liquid nitrogen

Nitrogen is a colourless gas making up 78 per cent of the atmosphere by volume,
and is obtained cheaply by distilling liquid air. It is chemically unreactive,
which is exactly why it can be put in direct contact with foodstuffs. Sprayed
into a space, it flashes off at approximately **-196°C**, and the very cold
vapour expands rapidly to reach all parts of the compartment.

### Carbon dioxide

CO2 is recovered as a by-product of industry — ammonia and hydrogen manufacture
from natural gas and other hydrocarbons, lime production, and large-scale
fermentation. At atmospheric pressure it is a colourless, odourless, tasteless
gas, though a significant concentration produces a biting sensation in the nose,
eyes and mouth.

The behaviour that matters in the field is set by two points on its phase
diagram:

- **Triple point: 417 kPa and -57°C.** Liquid CO2 cannot exist in the open air. Below 417 kPa it flashes straight to solid and vapour — snow and gas. At the triple point all three phases can coexist.
- **Critical temperature: 31°C.** Above this, CO2 cannot be a true liquid no matter what the pressure. On a hot day a cylinder in the sun goes supercritical, which is why storage temperature matters.
- Below 417 kPa, solid CO2 (dry ice) passes slowly and directly to vapour — sublimation.

CO2 vapour is about **53 per cent heavier than air**. It flows downhill, settles
in the bottom of containers, pits and drains, and displaces air. That density is
useful (an open-topped vessel holds it without a seal) and lethal (it pools where
people work).

| Expendable refrigerant | Boiling / sublimation temperature | Heat absorbed per kilogram |
| Carbon dioxide | -78.5°C | 639.65 kJ/kg |
| Nitrogen | -196°C | 402.39 kJ/kg |

Since the refrigerant is thrown away, the selection is an economic one: you must
get the best possible refrigeration effect per dollar spent. In Western
Australia, for example, CO2 is used more than liquid nitrogen because it is a
readily available industrial by-product — even though it boils at a much higher
temperature than nitrogen, its far lower purchase price and higher latent heat
per kilogram win.

Note also that the cold vapour keeps working after the liquid has boiled. Cold
nitrogen vapour warming from -196°C to -20°C picks up roughly another 180 kJ/kg
of sensible heat, so a well-designed tunnel that uses the vapour on its way out
consumes far less liquid than one that vents it immediately.

### Worked example: how much CO2?

A batch freezer must remove 250 kJ/kg from 400 kg of prepared meals per hour.

1. Heat to be removed: 400 x 250 = **100 000 kJ/h**.
2. Ideal CO2 use: 100 000 / 639.65 = **156 kg/h**.
3. Real plant does not capture all of the available effect. At 80 per cent utilisation: 156 / 0.8 = **195 kg/h**.

At roughly half a kilogram of CO2 per kilogram of product, the running cost is
dominated entirely by the gas bill — which is why these plants are chosen for
quality and speed, or where the gas is nearly free, and not for cheap running.

## Cabinet types

- **Freezing tunnels.** Liquid nitrogen is injected through a spray header manifold at a rate set by the product flow through the tunnel. On contact with the product the liquid vaporises, producing large volumes of very cold vapour. Because that vapour is dense it travels towards the lower feed end of the tunnel, and fans on top of the unit maximise contact with the product. So the incoming product is pre-cooled and often crust-frozen before it even reaches the spray header, is frozen under the spray, then passes into a post-cool zone where it equilibrates thermally with the help of a little cold vapour, and is discharged at the pre-selected temperature. An exhaust blower and collection system keep spent nitrogen out of the work area.
- **Spiral freezers.** A variation on the straight-through tunnel using either liquid CO2 or liquid nitrogen. Product travels on a variable-speed spiral belt conveyor, liquid is injected through spray nozzles at the top of the compartment, and fans circulate the vapour around the product. Used for large-scale frozen goods production.
- **Batch freezers.** An insulated cabinet holding many trays on a roll-out rack, with a circulation fan and a refrigerant temperature control system. Product is frozen by forced circulation of the injected vaporised refrigerant, with the freeze cycle run automatically by a temperature controller and timer. Preferred where freezing is seasonal or the volume is too small to justify a continuous freezer.

## Why processors choose them

- Very few moving parts, so low capital cost and simple maintenance — provided cheap refrigerant is available.
- Extremely short freezing times, so small ice crystals form and product quality and storage life are better than in slow mechanical freezing.
- The plant is easily adjusted for different products and production rates.
- In catering and hospital kitchens, meals can be prepared ahead and frozen, taking the pressure off the kitchen at meal times; operators have reported waste cut to around 10 per cent of what conventional preparation produced.
- Installed in conventional freezer rooms as emergency backup: if the compressor fails, CO2 can be sprayed into the room to hold temperature and save the stock while the repair is made.

>! These systems will kill you two ways. **Asphyxiation:** nitrogen and CO2
> displace oxygen, and CO2 is additionally toxic at a few per cent by volume.
> Both are heavier-than-air or cold and dense, so they pool at floor level, in
> pits and in cool rooms. Treat any such room as a confined space, use oxygen
> monitoring, and ventilate before entry. **Cold burns:** these refrigerants
> freeze flesh on contact; a splash into a boot or glove is a serious injury.
>
> Mandatory precautions: fit a **door interlock** that shuts off the refrigerant
> supply when the door is opened; fit a **safety vent** so pressure cannot build
> above atmospheric; if the system has run for an hour or more since the last
> door opening, **wait three minutes with the door open before entering**; and
> make absolutely certain no person or animal is inside before the door is
> closed.

## What to remember

- No compressor, no condenser: the refrigerant does one pass and is vented.
- LN2 boils at about -196°C; CO2 sublimes at -78.5°C but carries more heat per kilogram (639.65 against 402.39 kJ/kg).
- CO2 needs at least 417 kPa to stay liquid, and cannot be liquid at all above 31°C.
- Cost per kilogram of refrigerant, not efficiency, decides these jobs.
- Oxygen depletion is the number one hazard, and it gives no warning.
`,
          quiz: [
            {
              q: "How does an expendable refrigerant system differ from a vapour-compression system?",
              options: [
                "It uses a compressor but no expansion device",
                "It has no condensing unit — the refrigerant vapour is vented to atmosphere instead of being recycled",
                "It uses a secondary refrigerant loop instead of direct expansion",
                "It condenses the refrigerant with water instead of air",
              ],
              answer: 1,
              explain:
                "The refrigerant makes one pass and is lost, which is why there is no compressor or condenser and why running cost is dominated by the price of the gas. It is not a secondary system — the cryogen contacts the product directly.",
            },
            {
              q: "Liquid carbon dioxide sprayed into open air at atmospheric pressure will…",
              options: [
                "remain a liquid and pool on the product",
                "flash into a mixture of dry ice snow and vapour, because it is below the 417 kPa triple point",
                "become a supercritical fluid",
                "freeze into clear ice at -57°C",
              ],
              answer: 1,
              explain:
                "Liquid CO2 cannot exist below 417 kPa; drop the pressure and it flashes to snow and gas. That is exactly the mechanism used in snow shooting, where the dry ice then sublimes at about -78.5°C and absorbs heat from the load.",
            },
            {
              q: "A tunnel freezer must remove 90 000 kJ/h. Assuming 80 per cent of the available effect is captured, roughly how much liquid nitrogen (402.39 kJ/kg) is consumed per hour?",
              options: ["180 kg/h", "224 kg/h", "280 kg/h", "360 kg/h"],
              answer: 2,
              explain:
                "90 000 / 402.39 = 224 kg/h ideally; dividing by 0.8 for real utilisation gives about 280 kg/h. Answering 224 kg/h ignores the fact that no plant recovers the whole theoretical effect.",
            },
            {
              q: "A cool room fitted with a CO2 backup spray has been running for two hours. What must you do before entering?",
              options: [
                "Enter immediately — CO2 is non-toxic",
                "Open the door, confirm the supply is isolated by the door interlock, and wait at least three minutes with the door open, with oxygen monitoring in place",
                "Run the evaporator fans for thirty seconds and enter",
                "Enter wearing a dust mask",
              ],
              answer: 1,
              explain:
                "CO2 is heavier than air, pools at floor level, displaces oxygen and is itself toxic at a few per cent. The door interlock and the three-minute open-door wait are standard requirements; a dust mask supplies no oxygen and is worthless here.",
            },
          ],
        },

        /* ================================================================
           5 — Absorption principles and ammonia-water
           ================================================================ */
        {
          id: "absorption-basics-ammonia-water",
          title: "Absorption refrigeration: the thermal compressor and the ammonia–water cycle",
          minutes: 14,
          simple:
            "An absorption fridge does the same four jobs as a normal fridge, but it replaces the compressor with a chemistry trick: a liquid soaks up the refrigerant vapour like a sponge, a small pump moves that liquid up to high pressure, and a heat source boils the refrigerant back out again. Because squeezing a liquid takes almost no effort, the machine runs on heat — gas flame, waste steam or sunshine — rather than on a motor.",
          refs: R_ABS,
          content: `
Absorption refrigeration is the oldest surviving alternative to the vapour
compression cycle, and it has never gone away. It still runs caravan and remote
outback refrigerators where there is no reliable power, and it runs large
building chillers wherever there is waste heat going begging.

## Why it matters commercially: waste heat

The commercial case is simple. A large hospital or university may generate some
of its own electricity on site with gas or diesel sets, which cuts the
transmission losses inherent in any grid. Generating power makes a lot of waste
heat, and that heat can be captured in heat exchangers and put to work — heating
domestic hot water, heating the building, or driving an **absorption chiller**
to make chilled water. Power plus heat is **co-generation**; power plus heat plus
cooling is **tri-generation**.

That is the absorption machine's real trick: it turns energy that was going up
the flue into cooling, at a time of year when nobody wants heating.

## The working pairs

Absorption systems use two or more substances in physical contact instead of a
single refrigerant. One is the **refrigerant**, the other the **absorbent**:

| Refrigerant | Absorbent | Where used |
| Ammonia (NH3) | Water | domestic units, industrial low-temperature plant |
| Ammonia | Lithium nitrate | specialist units |
| Water | Lithium chloride | some air-conditioning machines |
| Water | Lithium bromide | the standard commercial chiller pair |

Ammonia and water are fluids; the lithium salts are solids at normal conditions,
but they are highly soluble in the fluid they are paired with, so the working
solution is a liquid. Systems may be continuous or intermittent in operation,
and single- or multi-stage, the latter having two or more stages whose
evaporators work at different pressures.

## The four functional steps

A simple absorption system has four vessels, each carrying out one of the four
functional steps:

1. **Evaporator** — liquid refrigerant becomes vapour because of the pressure reduction, absorbing latent heat. This is the useful refrigeration.
2. **Absorber** — refrigerant vapour is condensed at low pressure by being absorbed into the solvent, rejecting latent heat (plus heat of dilution) to cooling water or air.
3. **Generator** (also called the concentrator or boiler) — an external heat source raises the temperature of the solution so refrigerant is driven off as vapour at high pressure, absorbing latent heat.
4. **Condenser** — high-pressure refrigerant vapour is cooled by an external cooling medium and becomes high-pressure liquid, rejecting latent heat.

Between the high and low sides sit two restrictions: an **expansion valve** on
the refrigerant line into the evaporator, and a **pressure-reducing valve** on
the weak solution returning from the generator to the absorber. A small
**solution (aqua) pump** lifts strong solution from the absorber to the
generator.

!FIG[cycle-loop]

### The thermal compressor

Compare that with a mechanical system. In a compressor, the refrigerant is
raised from suction to discharge pressure as a **vapour**, and gas is springy —
compressing it takes a lot of shaft work. In an absorption machine, the vapour
is absorbed into a liquid *at low pressure*, and it is the **liquid** that is
pumped up to high pressure. Liquid is essentially incompressible, so pumping it
takes a tiny fraction of the energy. The generator then unloads the refrigerant
from that liquid using heat.

The absorber, pump and generator together are therefore called the **thermal
compressor**. The energy did not vanish — you pay for it as heat at the
generator instead of as shaft work at a motor.

!FIG[absorption-cycle]

## Refinements on real machines

For better efficiency and performance, real systems add:

- a **solution heat exchanger** between the hot concentrated solution leaving the generator and the cold dilute solution being pumped to it. It preheats what is going in and pre-cools what is coming back, cutting both the generator heat input and the absorber cooling load. This single component is worth a large slice of the machine's efficiency.
- an **analyser** and a **rectifier** (also seen as a bubble column with reflux). These are needed on ammonia–water machines because water is volatile: the vapour boiled off the generator carries water vapour with it. If that water reaches the evaporator it raises the evaporating temperature and dilutes the refrigerant. The analyser is a contacting column at the top of the generator and the rectifier a cooled section that condenses the water out and returns it, leaving nearly anhydrous ammonia vapour.
- a **receiver**, a **liquid pre-cooler**, and on industrial plant a steam-heated generator with condensate return.

In an industrial ammonia–water plant the fluid labels you will see on the
schematic are: anhydrous ammonia liquid, anhydrous ammonia vapour, **strong
liquid solution** (rich in ammonia, going to the generator), **weak liquid
solution** (spent, returning to the absorber), and water–ammonia vapour in the
rectifying section. Get those two solution names straight before you read
anybody's drawing — some manufacturers use "rich" and "poor" instead.

## The domestic absorption refrigerator

The domestic continuous-cycle unit uses **ammonia as refrigerant, water as
absorbent, and hydrogen as a third gas**. Its great advantage is that it will
run from any heat source — LP or natural gas, kerosene, or an electric element
at 240 V or 12 V — which is why it dominates caravans, remote homesteads and
off-grid cabins.

The charge — a small quantity of aqua-ammonia (distilled water and ammonia) plus
hydrogen gas — is hermetically sealed in the unit. There is no pump and no
moving part anywhere. The liquid settles at the lowest levels and the hydrogen
fills the remaining space. Total pressure is high enough (of the order of
1400 kPa) to condense ammonia vapour at ordinary room temperatures.

Three cycles run simultaneously, and the rate at which they run governs the
refrigeration produced.

### The ammonia cycle

Heat applied to the lower part of the generator drives off ammonia vapour along
with a little water vapour. The gases pass through the vapour cooler to the
**water separator**, whose baffles are cooled by fins: the water vapour condenses
on them and drops back to the generator, leaving dry ammonia vapour. That vapour
goes to the lower part of the air-cooled **condenser** and is liquefied, and the
liquid ammonia flows to the **low-temperature radiator** — the evaporator — where
it absorbs heat, evaporates and produces refrigeration.

If not all the vapour condenses in the lower condenser, the remainder rises to
the upper condenser and, if the pressure is high enough, condenses there and
feeds the **high-temperature radiator**, which also assists in cooling the
cabinet.

### The hydrogen cycle — the clever part

There is no compressor, so there is no pressure difference between the
evaporator and the condenser. How can ammonia boil at a low temperature in one
place and condense at room temperature in another when both are at the same
total pressure?

The answer is **partial pressure**. Hydrogen is fed into the top of the
low-temperature radiator and sweeps continuously over the surface of the liquid
ammonia, carrying ammonia vapour away. That keeps the *partial pressure* of
ammonia in the evaporator very low even though total pressure is high, so the
ammonia boils cold. Hydrogen is used because it is light and, crucially,
insoluble in water, so it never gets carried around with the solution.

The cold, heavy mixture of hydrogen and ammonia vapour leaves the radiator,
passes through the **gas heat exchanger** — exchanging heat with the hydrogen
returning from the absorber, which improves efficiency — and enters the bottom of
the absorber.

### The aqua-ammonia cycle

Weak solution from the generator enters the top of the absorber and trickles
down against the rising gas mixture. The ammonia is absorbed into the water,
forming strong solution which drains into the absorber vessel, while the
hydrogen, unable to dissolve, continues upward back to the low-temperature
radiator. Hydrogen circulation is maintained purely by the **density difference**
between pure hydrogen and the ammonia-laden mixture on the two sides of the
circuit — a gravity loop with no fan.

Heat released by absorption is dissipated by the absorber's cooling fins.

Strong solution flows from the absorber vessel through the inner tubes of the
**liquid heat exchanger** (counterflow against the hot weak liquid in the outer
tubes) to the pump coil, where a **thermo-syphon (percolator) pump** — bubbles of
vapour lifting slugs of liquid up a small-bore tube — raises it to the top of the
generator, completing the ammonia and aqua-ammonia cycles.

A **pressure-equalising vessel** holds reserve hydrogen. If the room gets hot and
the unit's pressure is no longer enough to condense ammonia, ammonia vapour
enters that vessel and pushes reserve hydrogen into the absorber and radiator
circuit, raising system pressure. When the room cools again the ammonia in the
vessel condenses and the hydrogen returns. This automatic pressure change means
the unit does not have to be charged high enough for the worst case, so it runs
efficiently at normal room temperature.

Note where the three cycles live: hydrogen circulates only between the
low-temperature radiator and the absorber; ammonia between boiler, condenser,
radiator and absorber; aqua-ammonia between boiler and absorber. All three meet
in the absorber.

## On the job

- A domestic absorption unit that has been laid over on its side may have solution trapped in the wrong leg. The manufacturer's remedy is usually to invert it, then stand it upright for some hours before restarting.
- These units must be **level** — the thermosyphon and gravity circulation depend on it. A caravan fridge that "will not cool on gas" is very often simply not level or badly ventilated.
- The flue and ventilation openings must be clear. A blocked flue gives a yellow, sooty flame, poor cooling and a carbon monoxide risk. Gas work needs the appropriate gasfitting licence in every Australian state.
- The sealed system has no serviceable parts. Yellow staining and a sharp smell at a weld means the charge is gone and the unit is scrap.

>! Ammonia is toxic and the sealed charge is under pressure of the order of
> 1400 kPa. Never drill, cut or braze into an absorption unit's sealed system,
> and never apply a heat source to a unit whose charge condition is unknown.
> Industrial ammonia absorption plant falls under the same machinery-room,
> ventilation and detection requirements as any other R717 plant.
`,
          quiz: [
            {
              q: "In an absorption system, which group of components replaces the compressor?",
              options: [
                "Condenser, receiver and expansion valve",
                "Absorber, solution pump and generator",
                "Analyser, rectifier and vapour cooler",
                "Evaporator, absorber and condenser",
              ],
              answer: 1,
              explain:
                "The absorber takes vapour in at low pressure, the pump raises the liquid solution to high pressure, and the generator boils the refrigerant back out — together the thermal compressor. The analyser and rectifier only purify the vapour; they do not raise its pressure.",
            },
            {
              q: "Why does an absorption machine need so little pump work compared with a compressor's shaft work?",
              options: [
                "Because the solution pump runs only intermittently",
                "Because it raises the pressure of a liquid, which is almost incompressible, instead of a vapour",
                "Because the generator does the pumping with steam pressure",
                "Because absorption machines run at much lower pressure differences",
              ],
              answer: 1,
              explain:
                "Pumping an incompressible liquid over the same pressure rise takes a small fraction of the work of compressing a vapour. The energy is not saved — it is paid for as heat at the generator instead.",
            },
            {
              q: "What is the purpose of the rectifier (and analyser) on an ammonia–water absorption system?",
              options: [
                "To convert AC to DC for the controls",
                "To remove water vapour from the ammonia vapour leaving the generator",
                "To separate hydrogen from the ammonia before the condenser",
                "To reduce the pressure of the weak solution",
              ],
              answer: 1,
              explain:
                "Water is volatile, so vapour boiled off the generator carries water with it; water reaching the evaporator raises the evaporating temperature. The rectifier condenses it out and returns it. Reducing weak-solution pressure is the pressure-reducing valve's job.",
            },
            {
              q: "In a domestic three-fluid absorption refrigerator, what does the hydrogen actually do?",
              options: [
                "It burns to provide the heat input",
                "It lowers the partial pressure of ammonia in the evaporator so the ammonia boils cold, even though total pressure is the same throughout",
                "It absorbs the ammonia vapour to form strong solution",
                "It acts as the lubricant for the solution pump",
              ],
              answer: 1,
              explain:
                "There is no compressor and no total pressure difference, so the cold is produced by partial pressure: hydrogen sweeps ammonia vapour off the liquid surface. Water, not hydrogen, does the absorbing — and hydrogen is chosen precisely because it will not dissolve in that water.",
            },
          ],
        },

        /* ================================================================
           6 — Lithium bromide chillers
           ================================================================ */
        {
          id: "lithium-bromide-chillers",
          title: "Lithium bromide–water chillers: single and double effect",
          minutes: 14,
          simple:
            "The big absorption chillers in Australian buildings use plain water as the refrigerant. Water only boils at 5°C if you pull a very hard vacuum on it, so the whole machine is a sealed vessel under vacuum, and a salt solution called lithium bromide sucks up the vapour as fast as it forms. Heat — usually steam or hot water — boils the water back out of the salt so the cycle can start again.",
          refs: R_LIBR,
          content: `
The absorption machine you are most likely to meet in an Australian plant room
uses **water as the refrigerant and lithium bromide solution as the absorbent**.
It is used for comfort cooling and for any plant needing chilled water, and it
is the machine that co-generation and tri-generation schemes are built around.

## Why it has to run under vacuum

Water is an excellent refrigerant — huge latent heat, zero GWP, zero cost, no
toxicity — with one catch: at atmospheric pressure it boils at 100°C. To make
it boil at about 5°C you must hold the vessel at roughly **0.9 kPa absolute**,
which is close to a full vacuum. The condenser end, condensing at around 40°C,
sits at about **7 kPa absolute**.

Two consequences follow immediately, and they define the whole machine:

- The vessels are large, because a kilogram of water vapour at 0.9 kPa occupies an enormous volume. Absorption chillers are physically bigger than compression machines of the same duty.
- **Air leakage is the enemy.** The whole machine is below atmospheric pressure, so every joint is a potential in-leak, and even a small amount of non-condensable gas blankets the tubes and destroys capacity.

!FIG[vacuum-decay]

## Walking the single-effect cycle

Follow the refrigerant first, using the numbering found on manufacturers'
schematics.

1. Refrigerant (water) from the **condenser pan** expands through an **orifice**. The sudden pressure drop flashes some of it, and that flash cools the rest of the refrigerant entering the evaporator.
2. The refrigerant falls to the **evaporator pan** at about **4°C**, the saturation temperature corresponding to the vapour pressure in the evaporator.
3. The **evaporator pump** takes it from the pan and delivers it to
4. the **evaporator sprays**. How well refrigerant is spread over the outside of the evaporator tubes governs evaporator efficiency, because heat exchange happens on the tube surface and the goal is complete surface wetting. The nozzles throw a conical pattern that fans out to overlap its neighbours, so there are no dead spots. Heat from the system water flowing inside the tubes vaporises the refrigerant.

The vapour is drawn to the absorber by nothing more than the chemical attraction
of the absorbent, passing through **eliminators** which stop droplets of liquid
refrigerant being carried over. The easier that flow, the better: with only a
small pressure loss the evaporator can run at a lower temperature and pressure,
so the temperature difference between the system water inside the tubes and the
refrigerant outside is larger — and heat transfer depends on that difference.

5. In the **absorber**, the vapour meets intermediate solution sprayed from the absorber spray tree nozzles. The diluted solution formed falls over the absorber tube bundle, releasing the heat of condensation and the heat of dilution. Cool water inside those tubes carries it away; that water, normally from a **cooling tower**, rises about **10 K** through the absorber bundle and then continues to the condenser. The cool dilute absorbent collects in the bottom of the absorber.
6. Some of that dilute solution is pumped by the **concentrator pump** to
7. the **solution heat exchanger**, a shell-and-tube unit where dilute solution in the tubes is heated by hot concentrated solution returning to the absorber. Both sides benefit: the dilute solution gains around **40°C**, which cuts the steam energy needed in the concentrator, and the heat given up by the concentrated solution cuts the cooling load in the absorber.

The heated dilute solution then enters the **concentrator (generator)**, where it
is held at a level just above the tube bundle. The bundle is kept flat and close
to the surface to limit hydrostatic head — pressure at depth would raise the
boiling temperature and waste steam. Steam or hot water inside the concentrator
tubes boils the refrigerant water out of the solution, leaving concentrated
absorbent behind.

Part of that concentrated absorbent is drawn off and piped back through the heat
exchanger, then blended with dilute solution near the **absorber pump** inlet to
form the **intermediate solution** that feeds the absorber sprays.

Meanwhile the refrigerant vapour boiled out in the concentrator passes through
its own eliminators to the **condenser**. Any absorbent droplets carried with it
strike the eliminators and drain back. The vapour meets the cool condenser tubes
and condenses; cooling water inside them holds condensing conditions and a lower
pressure than exists in the concentrator, so vapour keeps flowing that way. The
distilled refrigerant falls into the condenser pan, ready to start again.

### Typical water temperatures around a single-effect machine

| Circuit | Entering | Leaving |
| System (chilled) water | about 12°C | about 6°C |
| Condenser water, absorber bundle | about 30°C | about 35°C |
| Condenser water, condenser | about 35°C | about 40°C |
| Driving steam or hot water | 118 to 132°C | condensate about 110 to 114°C |

Note the order of the cooling water: it goes through the **absorber first**, then
the condenser. The absorber needs the coldest water it can get, because
absorption works better cold — a hot absorber is a weak absorber.

## Domestic versus industrial absorption at a glance

| Feature | Domestic unit | Industrial chiller |
| Refrigerant | ammonia | water |
| Absorbent | water | lithium bromide |
| Operating pressure | about 1400 kPa | deep vacuum, under 1 kPa absolute in the evaporator |
| Lowest temperature | about -18°C | about 5°C |
| Condenser cooling | air | water, from a cooling tower |
| Heat source | LP or natural gas, kerosene, electric element | waste heat from steam or flue gas, or low-cost fuel |
| Purpose | domestic refrigeration | chilled water for air-conditioning and process cooling |

The reason the industrial machine stops at about 5°C is fundamental: the
refrigerant is water, and water freezes. Any LiBr chiller taken below about
4°C leaving water risks freezing its evaporator tubes.

## Double effect — using the heat twice

A single-effect machine reaches a coefficient of performance of roughly 0.6 to
0.7. A **double-effect** machine does considerably better by using the heat
input twice:

- A **high-temperature generator** is driven by higher-grade heat — steam at around 800 kPa, hot water near 150 to 180°C, or a direct gas burner.
- The refrigerant vapour boiled off in that high-temperature generator is still hot and at higher pressure. Instead of being sent straight to the condenser, it is piped through the tubes of a **low-temperature generator**, where it condenses and its latent heat boils a second batch of refrigerant out of the solution.
- One unit of heat therefore generates refrigerant twice, and the COP rises to roughly **1.1 to 1.3**.

Double-effect machines come as **indirect-fired** (steam or hot water) and
**direct-fired** (a gas burner in the high-temperature generator, which also
allows the machine to be run in reverse as a heater in winter). Triple-effect
machines, adding a third generator stage, have been developed and push COP
higher again, at the cost of much higher generator temperatures and materials
problems.

The trade-off is the grade of heat available. Solar collectors and low-grade
waste heat at 90 to 95°C can only run a single-effect machine; you need a
genuinely hot source to gain the double-effect advantage.

## Capacity control

Capacity is controlled by throttling the heat input to the generator — a hot
water control valve or steam valve modulated from the leaving chilled water
temperature — and on larger machines by varying solution flow. Because the
machine has huge thermal mass, absorption chillers respond slowly. They do not
like being cycled, and they suit steady base loads far better than sharply
varying ones.

## The two failure modes that matter

### Crystallisation

Lithium bromide is a salt in solution, and there is a limit to how much salt a
given amount of water will hold at a given temperature. If the solution becomes
too concentrated or too cold, **lithium bromide crystallises out** and blocks the
solution heat exchanger — usually on the concentrated side, because that is the
coldest, strongest solution in the machine. Symptoms are loss of capacity, an
abnormal solution level, and a machine that will not restart.

Common causes:

- condenser water supplied **too cold** at part load (this over-concentrates the solution), which is why these machines control minimum entering condenser water temperature rather than simply running the tower flat out
- air in-leakage, which forces the machine to concentrate harder to hold capacity
- a power failure that stops the pumps while hot concentrated solution is sitting in the heat exchanger
- overloading the machine with high generator temperature.

Machines are fitted with decrystallisation arrangements — an overflow line that
lets hot dilute solution wash back through the blocked exchanger — and a
**dilution cycle** that runs the pumps on for several minutes after every
shutdown to mix the charge back to a safe concentration. Never kill the power to
an absorption chiller mid-run if you can shut it down properly instead.

### Non-condensables and vacuum integrity

Air leaking into a machine at 0.9 kPa is inevitable over time. Non-condensables
blanket the absorber and condenser tubes, capacity falls, and — worse — oxygen
attacks the steel and generates hydrogen, which is itself non-condensable, so the
problem accelerates. Countermeasures:

- a **purge unit**, either a vacuum pump or a palladium cell that passes hydrogen out of the machine, run on a schedule
- **corrosion inhibitors** (lithium molybdate or similar) maintained by annual solution analysis
- a **performance additive** such as octyl alcohol, which lowers surface tension and improves wetting of the tubes
- annual leak testing, and solution sampling sent to the laboratory for concentration, pH and inhibitor level.

A rising purge frequency on an absorption machine means the same thing it means
on a low-pressure centrifugal: find the leak.

>! Lithium bromide solution is corrosive to skin and eyes and will damage
> flooring and electrical gear — wear goggles and gloves when sampling.
> The machine is a large vessel under high vacuum, at temperatures over 100°C
> in the generator: never break the vacuum on a hot machine, and follow the
> manufacturer's shutdown and dilution procedure. The cooling tower brings its
> own duty — Legionella risk management under the relevant state public health
> regulations and AS/NZS 3666.

## On the job

- Log leaving chilled water, entering and leaving condenser water, and generator input temperature at every visit. Capacity problems show up as approach temperatures long before they show up as complaints.
- Entering condenser water that is too cold is a fault, not a bonus.
- Always let the dilution cycle finish. Pulling the isolator on a running absorption chiller is how machines are crystallised.
- Purge run-time is your leak indicator. Trend it.
- Sample the solution annually for concentration, pH and inhibitor.
`,
          quiz: [
            {
              q: "Why must a lithium bromide–water chiller operate under a deep vacuum?",
              options: [
                "To stop lithium bromide from crystallising",
                "Because water only boils at around 5°C when the pressure is reduced to about 0.9 kPa absolute",
                "To prevent the solution pump from cavitating",
                "Because the cooling tower cannot supply water cold enough otherwise",
              ],
              answer: 1,
              explain:
                "The refrigerant is water, so the saturation pressure sets the vacuum: about 0.9 kPa absolute for a 5 to 6°C evaporating temperature. Crystallisation is a separate problem caused by solution concentration and temperature, not by vessel pressure.",
            },
            {
              q: "In the single-effect cycle, what does the solution heat exchanger achieve?",
              options: [
                "It condenses the refrigerant vapour before the condenser",
                "It preheats dilute solution going to the concentrator while cooling concentrated solution returning to the absorber, cutting both steam use and absorber cooling load",
                "It removes non-condensable gases from the machine",
                "It sub-cools the chilled water leaving the evaporator",
              ],
              answer: 1,
              explain:
                "The exchanger moves heat from the stream that must be cooled to the stream that must be heated — the dilute solution gains around 40°C. Both effects save energy, which is why it is the single most valuable efficiency component in the machine.",
            },
            {
              q: "A double-effect absorption chiller achieves roughly double the COP of a single-effect machine because…",
              options: [
                "it uses two compressors in series",
                "vapour from a high-temperature generator is condensed inside a low-temperature generator, so the same heat generates refrigerant twice",
                "it operates at a lower vacuum",
                "it uses ammonia instead of water as the refrigerant",
              ],
              answer: 1,
              explain:
                "The high-temperature generator's vapour still carries usable latent heat, and giving it up in a second generator boils out more refrigerant. This needs higher-grade heat — a 95°C solar source can only drive a single-effect machine.",
            },
            {
              q: "An absorption chiller lost power at full load and now will not restart; the solution heat exchanger is cold and solution levels are abnormal. The most likely cause is…",
              options: [
                "loss of refrigerant charge",
                "crystallisation of the lithium bromide in the heat exchanger",
                "a failed evaporator spray nozzle",
                "the purge unit running continuously",
              ],
              answer: 1,
              explain:
                "Losing the pumps with hot, strongly concentrated solution in the exchanger is a textbook crystallisation event; the salt precipitates and blocks the passage. That is exactly why machines run a dilution cycle for several minutes after any normal shutdown.",
            },
            {
              q: "Why is the cooling tower water routed through the absorber before the condenser?",
              options: [
                "To warm the water before it condenses the refrigerant",
                "Because absorption works better when the absorbent is cold, so the absorber gets the coldest water available",
                "To prevent scale forming in the condenser tubes",
                "Because the absorber operates at higher pressure than the condenser",
              ],
              answer: 1,
              explain:
                "A cold absorbent takes up vapour far more readily, which holds evaporator pressure and temperature down. The condenser can tolerate the warmer water because it is condensing at around 40°C anyway.",
            },
          ],
        },

        /* ================================================================
           7 — Solar, cogeneration, economics and steam-jet
           ================================================================ */
        {
          id: "solar-cogeneration-and-steam-jet",
          title: "Heat-driven cooling: solar absorption, economics and the steam-jet system",
          minutes: 13,
          simple:
            "If a machine runs on heat instead of a motor, then sunshine, a gas flame or the waste heat from an engine can all make cold. This lesson looks at solar-powered absorption chillers, at whether these machines are actually worth the money, and at a very old cousin of theirs that uses a jet of steam instead of a compressor to boil water at room temperature.",
          refs: R_SOLAR,
          content: `
An absorption chiller does not care where its heat comes from. That single fact
opens the door to solar cooling, to cogeneration, and to burning things nobody
else wants. It also raises an awkward question that every designer must answer:
given that the coefficient of performance is poor, when is heat-driven cooling
actually the right choice?

## Solar air-conditioning

Industrial-type absorption units using lithium bromide as absorbent and water as
refrigerant have been developed to run on relatively low-temperature hot water at
about **95°C** — comfortably within reach of an efficient solar collector.
Standard package units are built with capacities as low as **11 kW**, small
enough for domestic air-conditioning. Commercial units for shops and offices are
essentially the same machine with refinements added for efficiency and
flexibility.

The circuit has four water loops, and it pays to keep them separate in your head:

1. **Solar loop** — collector, solar pump, storage tanks.
2. **Hot water loop** — hot water pump feeding the generator.
3. **Condenser water loop** — condenser water pump, absorber, condenser, cooling tower.
4. **Chilled water loop** — chilled water pump to the fan-coil units.

### Operation

In the generator, strong lithium bromide solution is heated by the 95°C water
from the solar heater. The heat drives off water vapour — the refrigerant — which
goes to the condenser, where it is cooled by cooling tower water that has already
passed through the absorber vessel. Having given up its latent heat, that liquid
travels down a U-tube to a **flash chamber**; any vapour present is separated off
there, and the liquid left behind is then spread evenly across the chilled water
coils in the evaporator. There it absorbs heat from the circulating water — the heat
collected from the rooms — and vaporises again. Any refrigerant still liquid runs
into a **concentration chamber**, where fitted, to be stored until needed.

The vapour is immediately attracted to the strong lithium bromide in the
absorber, which is being cooled by cooling tower water. The resulting solution of
refrigerant in lithium bromide falls into the **sump**, from which it is pumped
through the **heat exchanger** — picking up heat from the hot absorber liquid
coming from the generator — and enters the generator preheated to begin again.

These systems run at a high vacuum so that water can vaporise at **4 to 6°C**
using nothing hotter than a 95°C energy source.

### The three refinements on larger units

1. **Concentration chamber** — stores liquid to hold the solution at its optimum concentration. If the driving hot water falls below about 75°C the machine can no longer boil off enough refrigerant, and the solution would drift towards crystallisation; a **dump valve** opens and empties this stored refrigerant into the solution to dilute it and stabilise operation.
2. **Solution bypass valve** — opens for a timed interval of a few minutes during each start-up. Absorber liquid goes straight back to the solution sump, which gives the evaporator coil time to become fully wet with liquid refrigerant before absorption begins. Start absorbing on a dry coil and the machine simply over-concentrates.
3. **Hot water control valve** — the on/off device, which also modulates the flow of hot water (the input energy) according to the entering and leaving chilled water temperatures and the building load.

## Are absorption machines worth it?

The honest answer is: only when the heat is cheap or free. Weigh these four
factors.

**(a) Initial cost.** A gas-powered air-cooled absorption machine costs four to
five times an equivalent reciprocating machine to install. A solar-powered
system, once you add collectors, cooling tower and pumps, can reach ten times the
cost of the equivalent reciprocating plant.

**(b) Running cost.** Low if the heat comes from solar collectors or low-cost
natural gas — but remember the evaporator and cooling tower fans and all the
pumps still run on electricity, and there are more of them than on a compression
plant.

**(c) Efficiency.** The COP of an absorption unit is at best about **0.6**,
against **2 to 3** for reciprocating and rotary machines. In plain terms, cooling
output is only about 60 per cent of the energy input, against 200 to 300 per cent
for a compression heat pump. The counter-argument is that absorption plant uses
**low-grade, low-cost fuel** at reasonably high efficiency, whereas the electric
machine's input has already been through a lossy fuel-to-electricity-to-work
conversion. Compare primary energy, not site energy.

**(d) Fuel availability.** The economics generally only stack up where waste
energy is genuinely available — co-generation or tri-generation, biomass from
incinerating industrial waste, or geothermal energy from deep bores. Solar-driven
machines offer low running and maintenance costs, especially where the collector
is designed into the building, for instance a whole roof structure built as a
collector.

### Worked example: primary energy comparison

A building needs 200 kW of cooling.

- **Electric chiller at COP 3.0:** electrical input = 200 / 3.0 = **66.7 kW**. If the generation and transmission chain delivers that electricity at about 33 per cent overall efficiency, the fuel burned somewhere is 66.7 / 0.33 = **202 kW** of primary energy.
- **Absorption chiller at COP 0.7:** heat input = 200 / 0.7 = **286 kW** of heat. If that heat is genuine waste heat from an engine already running to make electricity, the extra fuel burned is **zero** — plus perhaps 15 kW of pumps and fans.

Fire a boiler specially to run that absorption machine and the comparison
reverses instantly, because you now burn 286 kW of fuel (more, allowing for
boiler efficiency) to do what 202 kW did. That is the whole argument in one
calculation: absorption wins on **waste** heat and loses on **bought** heat.

## Steam-jet refrigeration

The steam-jet system is the other heat-driven way of chilling water, and it is
worth knowing even though it is an older technology and not extensively used
today. It has real advantages where condensing water and high-pressure steam are
both available at moderate cost:

- **no moving parts** except the centrifugal pumps that circulate chilled water and return condensate to the boiler
- high overload capacity
- free of vibration
- light floor loading, so it can easily be sited on a roof.

### How it works

The refrigerant is water, exactly as in the lithium bromide machine, and the
cooling is produced the same way — by boiling water at low pressure. What differs
is how the vapour is removed. Instead of an absorbent, a **steam ejector** does
the job:

1. Chilled water is sprayed into a **flash chamber** held at around 0.9 kPa absolute, where a small fraction of it boils. The latent heat for that boiling comes from the rest of the water, which is chilled to about 6 to 7°C and pumped out to the load.
2. High-pressure motive steam from the boiler is expanded through a **converging–diverging nozzle**, reaching very high velocity.
3. That high-velocity jet entrains the vapour flashing off in the chamber and carries it into the **mixing chamber** — this is the "compression" step, achieved by momentum transfer rather than by a piston.
4. The combined flow passes into a **diffuser**, where velocity is converted back into pressure, raising it to the condenser pressure.
5. In the condenser (a surface condenser, or a direct-contact barometric condenser with a long drain leg), both the motive steam and the refrigerant vapour condense. Condensate is pumped back to the boiler; the refrigerant portion returns to the flash chamber.
6. Separate small **air ejectors**, usually two-stage with an intercondenser, continuously pull non-condensable gases out of the vessel — without them the vacuum collapses.

Because the ejector is not an efficient compressor, the steam consumption is
heavy and the COP is low, of the order of 0.2 to 0.3. And because the refrigerant
is water, the system cannot go below 0°C — it is a chilled-water machine only.

The idea is not dead, though. Ejectors are back in modern practice as
**ejector-enhanced transcritical CO2 systems** in supermarkets, where an ejector
recovers expansion work that a plain valve would have thrown away. The physics
you learn here transfers directly.

## What to remember

- A 95°C source is enough to run a single-effect LiBr machine; solar collectors can supply it.
- The concentration chamber and dump valve, the start-up solution bypass and the modulating hot water valve are the three refinements that make a small solar machine stable.
- Absorption COP is around 0.6 to 0.7 single-effect; the case for it rests on cheap or waste heat, not on efficiency.
- Steam-jet plant uses a steam ejector as its compressor, has no moving parts beyond pumps, and chills water only.
`,
          quiz: [
            {
              q: "A solar absorption air-conditioning package is described as running on 95°C hot water. What does that tell you about the machine?",
              options: [
                "It must be a double-effect machine",
                "It is a single-effect lithium bromide machine — double effect needs a considerably hotter source",
                "It uses ammonia and water as its working pair",
                "It does not require a cooling tower",
              ],
              answer: 1,
              explain:
                "Double effect needs a high-temperature generator running on steam or hot water well above 150°C. A 95°C solar source can only drive single effect, with a COP of roughly 0.6 to 0.7. The machine still needs a cooling tower for the absorber and condenser.",
            },
            {
              q: "On a commercial solar absorption unit, what is the purpose of the solution bypass valve at start-up?",
              options: [
                "To bleed non-condensable gases from the machine",
                "To send absorber liquid straight back to the sump for a few minutes so the evaporator coil becomes fully wet before absorption begins",
                "To bypass the cooling tower until the condenser water warms up",
                "To dilute the solution if the hot water temperature falls",
              ],
              answer: 1,
              explain:
                "Absorbing on a dry evaporator coil over-concentrates the solution, so the bypass buys time for wetting. Diluting the solution when the driving temperature falls is the job of the dump valve on the concentration chamber.",
            },
            {
              q: "An absorption chiller has a COP of 0.7 and an electric chiller a COP of 3.0. When is the absorption machine still the better economic choice?",
              options: [
                "Whenever chilled water is required below 0°C",
                "When the driving heat is waste heat that would otherwise be thrown away, or very low-cost fuel",
                "Whenever the building has a cooling tower",
                "When maximum demand charges do not apply",
              ],
              answer: 1,
              explain:
                "On bought fuel the low COP is decisive; on waste heat from co-generation the heat is effectively free and only the pumps and fans cost anything. A LiBr machine cannot make water below 0°C at all, so the first option is impossible.",
            },
            {
              q: "In a steam-jet refrigeration system, what performs the function of the compressor?",
              options: [
                "The centrifugal chilled water pump",
                "The steam ejector — a nozzle, mixing chamber and diffuser",
                "The barometric condenser",
                "The boiler feed pump",
              ],
              answer: 1,
              explain:
                "Motive steam accelerated through a nozzle entrains the flashed vapour and the diffuser recovers pressure up to condenser conditions. The only moving parts in the plant are the centrifugal pumps for chilled water and condensate.",
            },
          ],
        },

        /* ================================================================
           8 — Air-cycle, vortex tube and thermoelectric
           ================================================================ */
        {
          id: "air-vortex-thermoelectric",
          title: "Air-cycle, vortex tube and thermoelectric refrigeration",
          minutes: 14,
          simple:
            "Three ways of making cold with no refrigerant at all. The first squeezes air, cools it, then lets it expand through a turbine so it comes out freezing — this is how aircraft cabins are cooled. The second spins compressed air so fast in a small tube that hot air comes out one end and cold out the other. The third passes DC current through a special pair of semiconductors, which pumps heat from one face of a chip to the other.",
          refs: R_MISC,
          content: `
Not every cooling job suits a refrigerant. Sometimes the fluid must be breathable
(an aircraft cabin), sometimes the device must be tiny and vibration-free (a
laboratory sample cooler), and sometimes there is nothing on site but a
compressed-air line. Three technologies fill those gaps.

## Air-cycle refrigeration

Using air as the working fluid is not efficient and is therefore not economical
for general refrigeration. For particular services it is convenient, though it is
limited to small-dimensional equipment. Air-cycle systems are **once-through**:
fresh air is continuously drawn into the system and rejected back to atmosphere
once it has done its cooling.

Where it earns its place:

- **aircraft cabin cooling**, using compressed air bled from the jet engine compressors together with the cooling capacity of **ram air** (outside air scooped in as the aircraft flies)
- **cooling of instruments and instrument panels** that would otherwise overheat.

### The basic cycle

The process is essentially a reversed Brayton cycle, similar in outline to
cryogenic liquefaction:

1. a **compressor** supplying a sufficient quantity of high-pressure, high-temperature air
2. a **heat exchanger** dissipating the heat picked up during compression
3. an **expander** through which the now relatively cooled air is expanded **while doing work**, as in an air turbine.

Point 3 is the one to understand properly. In a vapour-compression system the
refrigerant drops in pressure through an orifice or expansion valve, which is a
throttling process. Throttle a *gas* and you get almost no temperature drop at
all — air behaves close to an ideal gas, so its temperature barely changes. But
expand it through a **turbine harnessed to a load** — an electrical generator or
a fan — and the air must give up thermal energy to do that shaft work, so it
leaves genuinely cold. In every gas-expansion cooling device, a greater
temperature reduction is obtained when work is performed during the expansion
than when the gas simply expands through an orifice.

The compressed air may come from any available source — a stationary or portable
air compressor sized to the job, or an aircraft jet engine — with cooling systems
ranging in capacity from about **140 to 4000 L/s**.

### Variations

- **Heat exchanger types.** A simple shell-and-coil arrangement, or an evaporative type. Both may be used in series, with the evaporative exchanger upstream of the simple one.
- **Regenerative.** A regenerator is placed in series with the primary heat exchanger and is cooled by cold air bled from the expander discharge line. This drives the air entering the turbine colder, so it leaves colder still.
- **Evaporative.** Adds a heat exchanger of the evaporator type.
- **Bootstrap.** A secondary compressor is placed between two air-cooled heat exchangers, boosting the pressure ratio available for expansion — the standard arrangement in aircraft air-cycle machines.
- Combinations of these, dual equipment served by one compressor, or a primary expansion turbine placed in the fresh air line ahead of the primary heat exchanger.

### Auxiliaries and controls

- A **fan** to move the cooling air — note, that is the air passing over the heat exchanger, not the cycle air itself.
- A **water separator** to remove the condensate that appears in the cycle air as it is cooled. This is not optional: without it, water freezes in the turbine.
- Controls, electronically or pneumatically actuated, comprising compartment temperature controls, air delivery (quantity) regulators, and a **hot air modulator** that bypasses a controlled amount of hot air around the heat exchanger and expander to temper the supply air to suit conditions in the compartment.

The strengths are that the working fluid is free, non-toxic, non-flammable and
already breathable; the machine is very light for its capacity; and the same air
provides ventilation and cabin pressurisation. The weakness is simply
efficiency — a COP far below that of a vapour-compression machine.

## Vortex tube refrigeration

A vortex tube is a mechanical device that splits a supply of compressed air into
a hot stream and a cold stream, so it can be used for heating as well as cooling.
The cold airflow can be more than **70°C below** the inlet air temperature, while
the hot stream can be raised by more than **100°C**.

It was invented by the French physicist **Georges Ranque** in the early 1930s and
modified about a decade later by the German engineer **Rudolf Hilsch** — hence
the name **Ranque–Hilsch tube**, and the **Ranque–Hilsch effect** for the radial
temperature separation it produces. Despite the device's simplicity and its
well-known ability to separate temperatures, the mechanism that actually produces
the difference in the swirling air is complicated and still not fully explained;
several competing theories exist.

### Counter-flow operation

In the common counter-flow form:

1. Compressed air is injected at high speed through one or more **tangential nozzles** near one end of the tube, giving the air a rapid whirling or vortical motion.
2. The spinning air travels along the tube. At the far end, the part near the tube wall — the outer "shell" of the vortex, which is at raised temperature — escapes through a **ring-shaped peripheral outlet**. That is the **hot end**.
3. The remaining air is blocked and turns back, returning as a rotating inner core through the centre of the outer vortex.
4. Part of that inner stream escapes through a **central aperture** in the end wall near the inlet nozzles. This is the **cold end**, because that air has lost heat and leaves colder than the inlet air.

The refrigeration effect is adjusted with a **cone valve** that changes the size
of the ring-shaped opening at the hot end. Letting more air out the hot end
leaves less, but colder, air at the cold end; the balance between cold flow rate
and cold temperature is the tuning the fitter has to get right for the job.

In the **uni-flow** type, both streams leave at the far end from the nozzle: the
hot flow through a peripheral ring and the cold flow through a central aperture
in the same end plate. Uni-flow tubes are generally less efficient and less
commonly used.

### Where they suit, and where they do not

Vortex tubes are simple, compact, lightweight, durable, relatively cheap and
almost maintenance-free. They contain no moving parts, use no refrigerant or
other chemicals, and need no electricity directly. Against that:

- operating efficiency is low
- they are **noisy**
- they need **clean, dry compressed air**, whose availability may itself be the limiting factor
- if no suitable compressed air supply exists, you must run a powered compressor for them — at which point the main advantage over a vapour-compression system disappears.

Typical duties fall under industrial spot cooling and process cooling: chilling
machining operations, holding electrical cabinets and electronic control panels
down in temperature, setting adhesives, taking the heat out of freshly soldered
parts, cooling samples and laboratory gear, and feeding suit-cooling packs worn
by miners and by others who work in hot conditions.

>! Never point a vortex tube's cold outlet, or any compressed air jet, at skin or
> at another person. Fit filtration and a dryer — shop air carrying compressor
> oil will contaminate whatever you are cooling, and moisture will freeze at the
> cold outlet and block it. Compressed air discharge is loud; hearing protection
> may be required.

## Thermoelectric (Peltier) refrigeration

Thermoelectric cooling moves heat out of one space and deposits it in another
using **electric current as the carrier** rather than a refrigerant. The
phenomenon was discovered in the nineteenth century but only became a practical
refrigerator relatively recently. The biggest growth has been in portable
refrigerators for travelling and camping, generally running from a **12 V DC**
supply.

!FIG[heat-flow]

### The Peltier effect

The basis is the **Peltier effect**, described in the 1830s by the French
physicist Jean Peltier. Whenever electric current flows through a junction
between two different types of conductor — the effect is far stronger with
semiconductors — the junction will either absorb or release heat, depending on
the direction of current flow. Reverse the current and the hot and cold faces
swap.

To put the effect to work, a thermoelectric device is built from pellets of two
dissimilar semiconductors — one **N-type**, one **P-type** — set out in pairs
known as **couples**. Each pair is bridged at one end by a plate of copper or
aluminium, and the couples sit in a DC series circuit. The arrangement matters: it results in heat being transported in the
**same direction through both types of pellet**, so heat can be absorbed at one
end of the pellets and dissipated at the other. To get useful capacity, many
couples are connected in series.

### Practical modules and systems

In practice many couples — commonly **127 pairs** — are placed side by side and
sandwiched between two ceramic sheets to form a rectangular **thermoelectric
module**. The outer ceramic faces become the thermal interface between the
Peltier device and its surroundings on each side.

To cool the air in an enclosure such as a portable refrigerator or an electronics
cabinet, a typical system uses:

- a **heat sink inside** the space, collecting heat from the air
- the **module**, carrying that heat across to
- a larger **heat-dissipating sink outside** the box
- a **fan** blowing through the outside sink's fins to get the heat away, and often a second fan to increase pick-up on the cold side.

The critical design point, and the source of most field failures, is that the hot
side must reject **everything**: the heat pumped out of the box *plus* all the
electrical power fed into the module. If the outside sink is dusty, blocked or
its fan has failed, the hot side rises, the temperature difference across the
module grows, and its pumping ability collapses — a Peltier cooler with a dirty
outdoor sink simply stops cooling.

Practical performance is modest. A single-stage module in a real product holds
maybe 20 K below ambient, and COP is well under 1 — far below any
vapour-compression machine. Cascaded (multi-stage) modules achieve much larger
temperature differences for small heat loads.

### Advantages and applications

- No refrigerant, no refrigerant lines, no compressor. Fans are the only moving parts.
- Silent, vibration-free, works in any orientation, and very small capacities are practical — jobs far too small for vapour compression.
- Precise temperature control, and **reversible**: swap the polarity and the same unit heats.

Applications range from domestic and camping coolers to medical and laboratory
sample coolers, cooling of electronic components, imaging sensors and laser
diodes, small drinking-water coolers and dehumidifiers, and military and
industrial equipment.

### Field faults on thermoelectric coolers

| Symptom | Likely cause |
| Box warms up, hot sink very hot | outside sink blocked with dust, or its fan stopped |
| Poor cooling, module warm all over | dried out or missing thermal paste between module and sink |
| Box gets warm instead of cold | supply polarity reversed |
| Weak cooling on a long lead | volt drop in the 12 V cabling |
| Water dripping inside | condensation on the cold sink, drain blocked |

## What to remember

- Air-cycle uses air as refrigerant in a once-through cycle, and gets its cold from **work-producing expansion in a turbine**, not from throttling.
- Bootstrap, regenerative and evaporative are the standard air-cycle variations; a water separator is essential.
- A vortex tube separates compressed air into hot and cold streams with no moving parts; the cone valve at the hot end sets the cold-end temperature.
- Peltier modules pump heat with DC current; the hot-side heat sink must dump the load plus the electrical input, and that is where they fail.
`,
          quiz: [
            {
              q: "Why does an air-cycle system use an expansion turbine rather than a simple orifice or expansion valve?",
              options: [
                "Because a turbine reduces the pressure more quickly",
                "Because air gives almost no temperature drop when throttled; expanding it while it performs work produces a much greater temperature reduction",
                "Because the turbine also compresses the air",
                "Because an orifice would freeze with moisture",
              ],
              answer: 1,
              explain:
                "Throttling an ideal gas gives essentially no temperature change, so a valve would produce no cooling. Extracting shaft work forces the air to give up thermal energy. Moisture freezing is a real problem, but it is solved with a water separator, not the turbine.",
            },
            {
              q: "In an aircraft-style bootstrap air-cycle system, what distinguishes it from the basic cycle?",
              options: [
                "It uses a regenerative heat exchanger cooled by expander discharge air",
                "It has a secondary compressor located between two air-cooled heat exchangers",
                "It recirculates the cycle air instead of venting it",
                "It uses an evaporative heat exchanger only",
              ],
              answer: 1,
              explain:
                "The bootstrap arrangement adds a second compressor between two air-cooled exchangers to raise the pressure available for expansion. The regenerative arrangement — cooling the primary exchanger with bled expander discharge — is the separate variation described alongside it.",
            },
            {
              q: "How is the cold-end temperature of a counter-flow vortex tube adjusted?",
              options: [
                "By varying the DC supply voltage",
                "By a cone valve at the hot end that changes how much air escapes through the peripheral outlet",
                "By throttling the cold outlet",
                "By changing the length of the tube during operation",
              ],
              answer: 1,
              explain:
                "The cone valve sets the split between hot and cold flows: releasing more air at the hot end leaves a smaller but colder cold stream. A vortex tube uses no electricity directly, so supply voltage is irrelevant.",
            },
            {
              q: "A 12 V thermoelectric camping fridge has stopped cooling. The external heat sink is packed with dust and its fan is stalled. Why does that stop the cooling?",
              options: [
                "Because the module needs airflow to complete its electrical circuit",
                "Because the hot side must reject the heat pumped from the box plus all the electrical input; if it cannot, the temperature difference across the module grows until it can no longer pump heat",
                "Because the refrigerant cannot condense",
                "Because the ceramic substrate becomes conductive when hot",
              ],
              answer: 1,
              explain:
                "Q hot equals Q cold plus the electrical power in, so the hot sink always has the bigger job. A blocked sink raises the hot-face temperature, the module's temperature difference grows, and its pumping capacity falls away. There is no refrigerant in the device at all.",
            },
            {
              q: "Which statement about vortex tubes is correct?",
              options: [
                "They are highly efficient, which is why they are used for building air-conditioning",
                "They have no moving parts and need no refrigerant, but are noisy, inefficient and need clean dry compressed air",
                "They produce cold air by the Peltier effect",
                "They require a 12 V DC supply to spin the air",
              ],
              answer: 1,
              explain:
                "Simplicity and the absence of refrigerant are their strengths; low efficiency, noise and dependence on a clean compressed air supply confine them to spot and process cooling. The Peltier effect belongs to thermoelectric modules, which are an entirely different technology.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
