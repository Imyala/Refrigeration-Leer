/* =========================================================================
   Course content, module 308 — Apply environmentally sustainable procedures
   in the energy sector.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 8 — Apply environmentally sustainable
   procedures in the energy sector.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_MEANING = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — sustainability, the three pillars and the UN Sustainable Development Goals",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — finite resources, copper and gold, and substitute materials",
  ];

  const REFS_PRACTICE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — sustainable work practices: reduce, reuse, recycle, repair",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — responsible consumption, production and waste management",
  ];

  const REFS_NEGLECT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effects of neglecting sustainable work practices and causes of pollution",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the greenhouse effect: definition, causes and consequences",
  ];

  const REFS_LAW = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — national and international greenhouse imperatives",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the role of regulators and similar bodies",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — legislative requirements: EPBC, GEMS and ozone protection",
  ];

  const REFS_ECON = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — economic benefits of sustainable initiatives and the HFC refrigerant levy",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Minimum Energy Performance Standards and Energy Rating Labels",
  ];

  const REFS_REDUCE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — techniques for reducing carbon-produced energy and greenhouse gases",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — copper, electricity, and oil and gas in the electrotechnology industry",
  ];

  const REFS_TECH = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — trade-related technologies and methods of reducing energy consumption",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — trade-related energy-efficiency retrofits",
  ];

  const REFS_RENEW = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — renewable energy: solar, wind, hydro, geothermal, marine and bioenergy",
  ];

  const REFS_GRID = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — battery storage, distributed energy resources and grid-strengthening technologies",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — workplace documentation, policies, procedures and environmental reporting",
  ];

  const MODULES = [
    {
      id: "elec-sustainability",
      stream: "elec",
      title: "E.8 · Sustainable practice in the energy sector",
      blurb: "Why sustainability matters to an electrical worker, the law and targets behind it, how to cut energy and waste on the job, and how renewables and storage work.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "what-sustainability-means",
          title: "What sustainability actually means",
          minutes: 10,
          simple: "Sustainability just means not using things up faster than they can be replaced. A rainwater tank is sustainable if the rain refills it as fast as you empty it. The same test applies to copper, coal and the atmosphere.",
          refs: REFS_MEANING,
          content: `## A word that gets used loosely

Sustainability means the ability of something to be kept going at a certain level. That is the whole idea, and it is worth holding onto because the word gets thrown around so freely that it stops meaning anything.

Test it on something small. A stand-alone solar installation is sustainable if the panels put enough charge into the battery bank each day to cover what the loads pull out. If the bank drifts down week after week, the system is not sustainable no matter how green the hardware looks. A household on tank water is sustainable if rainfall refills the tanks at least as fast as the family empties them. Same logic, different resource.

Now scale it up. The environment we live in is the tank. Sustainability at global scale means the Earth can keep supporting our quality of life and way of life indefinitely. The United Nations definition of *sustainable development* is development that meets the needs of the present without damaging the ability of future generations to meet their own needs. It is a debt test: are we spending capital or living off the interest?

## The three pillars — people, planet, profit

Sustainability is usually drawn as three overlapping circles, and true sustainability sits where all three overlap.

| Pillar | The 'P' | What it asks |
|---|---|---|
| Social | People | Is this fair to workers, communities and future generations? |
| Environmental | Planet | Does this protect habitats, air, water, soil and climate? |
| Economic | Profit | Can the business actually survive doing this? |

The economic pillar is not a cynical add-on. A contractor who bankrupts themselves buying the greenest of everything stops trading, employs nobody and changes nothing. A practice only counts as sustainable if it can be kept up — which means it has to pay for itself over a sensible period.

## Where this sits in the global picture

In 2015 the UN member states adopted 17 Sustainable Development Goals as part of the 2030 Agenda — a 15-year push to end poverty, protect the planet and improve people's prospects. Four of them land squarely on the electrotechnology trades:

- affordable and clean energy
- industry, innovation and infrastructure
- responsible consumption and production
- climate action

Everything in this module is one of those four goals expressed as something a licensed worker actually does on a job.

## Finite resources: the copper and gold problem

The electrical trades run on two metals that will not last forever.

Copper carries nearly everything we install. It has the highest electrical conductivity of any metal apart from silver, which is why roughly 70% of world copper production goes into electrical and communications applications, and about 60% of total copper use is for electricity and heat. Gold plates the contacts inside connectors and electronic assemblies because it does not corrode.

Both are finite. Ask the honest questions:

- What do we do when the economically minable copper runs out?
- How do we do the job of a copper cable with no copper left to mine or recycle?
- How do we make microprocessors when there is no gold left to plate the contacts?

There are partial answers, and every one of them is a trade-off:

| Substitute | Replaces | The catch |
|---|---|---|
| Wireless links | Copper data cabling | Bandwidth, interference and security limits; not allowed for safety-critical circuits |
| Aluminium | Copper conductors | Lower conductivity so a larger cross-section is needed; aluminium is finite too |
| Silver, tin | Gold plating | Both corrode more readily, so contact life and reliability drop |

Notice that no substitute is free. That is the normal shape of a sustainability decision — you are choosing which cost to carry, not escaping cost.

## Why this is not optional

The decade 2010 to 2020 was the hottest in the instrumental record, and the seven years 2014 to 2020 were all in the top seven. 2016 stands as the hottest year measured, with 2020 second. That is not weather; that is a trend line.

Our industry is directly involved. Generating electricity from coal, gas and oil is Australia's single biggest source of greenhouse gas. Mining and refining copper and gold is energy-hungry and produces waste gases. And the refrigerants used in the air-conditioning and refrigeration plant that electrical workers install and service are potent pollutants in their own right — older ozone-depleting types thinned the ozone layer and let more ultraviolet through, and today's synthetic replacements are powerful greenhouse gases. Chemicals that leak into waterways damage plants and animals a long way from the site they escaped from.

> Sustainability strategies mostly do one of two things: cut the harm, or cut the resource used. Neither is a final answer on its own. What they buy is time — time for renewable generation, natural refrigerants and better materials to become genuinely capable of replacing what we use now.

## What to remember

- Sustainability = the rate you consume something is no greater than the rate it is replaced.
- The three pillars are social, environmental and economic — people, planet and profit.
- Sustainable development meets today's needs without robbing future generations.
- Copper and gold are finite and central to our trade; substitutes exist but all carry penalties.
- The warming record is the reason this is now regulated work, not a personal preference.`,
          quiz: [
            {
              q: "A remote site has a 5 kW solar array charging a battery bank. Over six months the bank's state of charge at dawn has fallen steadily from 90% to 45%. Is the installation sustainable?",
              options: [
                "Yes — it uses solar, which is a renewable source",
                "No — the loads are withdrawing energy faster than the array replaces it",
                "Yes — battery state of charge is not a measure of sustainability",
                "No — solar can never be sustainable without a generator",
              ],
              answer: 1,
              explain: "Sustainability is a rate comparison, not a badge on the technology. The array is renewable, but the withdrawal rate exceeds the replenishment rate, so the system is drawing down its reserve and will eventually fail. Choosing a renewable source does not by itself make an installation sustainable.",
            },
            {
              q: "Which statement best captures why the economic pillar belongs in the definition of sustainability?",
              options: [
                "Because profit matters more than the environment",
                "Because environmental measures are always cheap",
                "Because a practice that sends the business broke cannot be continued, and sustainability means being able to keep going",
                "Because economics is the only pillar that can be measured",
              ],
              answer: 2,
              explain: "The three pillars all have to hold. A measure that is environmentally excellent but financially fatal stops the moment the business closes, which is the opposite of sustaining anything. Profit is not ranked above planet — it is the condition that lets the practice continue.",
            },
            {
              q: "Aluminium is sometimes proposed as a substitute for copper conductors. What is the main technical penalty?",
              options: [
                "Aluminium cannot carry alternating current",
                "Aluminium has lower conductivity, so a larger cross-sectional area is needed for the same current",
                "Aluminium is more expensive than copper per kilogram",
                "Aluminium is a fully renewable resource",
              ],
              answer: 1,
              explain: "Aluminium's conductivity is well below copper's, so the conductor has to be physically bigger to carry the same current at the same volt drop — which drives up conduit and support sizes. It also is not an unlimited resource, so it only partly solves the problem.",
            },
            {
              q: "About what proportion of world copper production goes into electrical and communications applications?",
              options: ["About 20%", "About 45%", "About 70%", "About 95%"],
              answer: 2,
              explain: "Roughly 70% of copper produced worldwide goes to electrical and conductivity applications and communications, with about 60% of total use tied to electricity and heat. That is why copper supply is an electrotechnology issue and not just a mining issue.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "sustainable-work-practices",
          title: "Sustainable work practices on the job",
          minutes: 12,
          simple: "There is a pecking order for dealing with stuff: first avoid buying it, then use less, then reuse it, then repair it, and only recycle when none of those work. Throwing it in the skip is last, not first.",
          refs: REFS_PRACTICE,
          content: `## The hierarchy, and why order matters

Sustainable work practices are minimisation and replacement strategies — deliberate changes to how work is done so that the same job consumes less and wastes less. They are about behaviour, not equipment: choosing lower-impact materials, cutting offcuts, sorting waste, and picking efficient tools.

You will meet the idea in several forms:

- **3 Rs** — reduce, reuse, recycle
- **5 Rs of waste management** — refuse, reduce, reuse, recycle, repair
- **5 Rs to save the environment** — refuse, reduce, reuse, repurpose, recycle
- **Extended hierarchy** — avoid, reduce, reuse, repurpose, recover, recycle, repair

They differ in wording, not in intent. The order is the point: each step down costs more energy and money than the one above it. Avoiding a purchase costs nothing; recycling a product costs a truck, a sorting plant and a furnace.

## Avoid and refuse — the step people skip

Avoiding waste happens in planning, procurement and the supply chain, long before anyone picks up a pair of side cutters. It means specifying products with little or no packaging, refusing disposable cups and bags, choosing appliances that are frugal with water and energy, and — importantly — refusing to buy items that are inferior, short-lived or simply not fit for purpose.

Be sceptical of goods sold as recycled or environmentally friendly when you cannot verify the quality. Cheap recycled paper and off-brand print cartridges that the equipment maker does not recommend can wreck the printer they go into. Then you have a repair bill, lost production, an early disposal and a replacement to buy — worse for the planet *and* the profit pillar. Check the manufacturer's specification before you commit.

Paper is worth a mention because the paper industry is the world's fifth-largest energy consumer. Recycled paper production creates about half the waste of conventional paper-making and uses around 45% less energy — so choosing it, and using less of it, both count.

## Reduce

Construction and maintenance sites consume resources at above-average rates. Reduction on site looks like:

- Turning things off — vehicle engines, taps, lighting, compressors and motors that are idling for nobody.
- Using low-energy settings on tools and plant.
- Letting thermostatic control hold a temperature instead of switching refrigeration, cooling and space heating hard on and off. Steady thermostatic operation is more efficient than repeated start-stop cycling.
- Cutting paper: print double-sided, use recycled stock, run a paper recycling scheme, and move job sheets and manuals to electronic files.
- Only running washing machines and dishwashers with a full load, and on cold settings wherever hygiene rules allow.

Expect a trade-off. An organisation starting out on sustainability often finds tension between practicality, operational efficiency, cost and the environment. Balance the short-term inconvenience against the long-term benefit rather than pretending the tension does not exist.

## Reuse

When a site is upgraded, plenty of removed material is still perfectly good. Cabling, cable tray, ducting, saddles and fixings can be cleaned up and used again on the next job. Surplus equipment can be donated to another organisation instead of going to the tip.

PVC conduit deserves special attention. It is worth reusing precisely because it is hard to recycle — although it is mostly plastic it contains additives including lead, cadmium, tin, barium and zinc that cannot readily be separated out. And like all plastics, making new conduit consumes oil.

## Recycle — and the three kinds of it

Most materials our trade handles are recyclable. Copper and aluminium go to the scrap yard; paper, glass and plastic go to a recycling plant. The resource saving compared with making the material from scratch is large.

| Type | What happens | Example |
|---|---|---|
| Primary (closed loop) | The item becomes more of the same thing | Paper into new paper |
| Secondary | The material becomes a different product of the same material | Tyres and fluorescent tubes reprocessed into other goods |
| Tertiary | The product is chemically broken down into a new material | Feedstock recycling of plastics |

Recycling itself uses energy — which is exactly why it sits below avoid, reduce and reuse in the hierarchy.

### Fluorescent tubes

Recycling a fluorescent tube separates the glass, aluminium end caps, phosphor powder and mercury, and all four are recovered as usable material. Done properly it is a closed loop with nothing going to landfill. That matters because mercury in landfill is converted to methylmercury, which spreads through air, water and soil and accumulates in the food chain. In Australia an estimated 95% of mercury-containing lamps still go to landfill, so the single easiest win available to a lighting maintenance crew is boxing spent tubes for a lamp recycler instead of skipping them.

>! Never break fluorescent or discharge lamps deliberately to save skip space. Breaking them releases mercury vapour into the breathing zone and destroys any chance of recovery. Transport tubes in their cartons or a purpose-made tube bin.

### Batteries

Batteries dumped in landfill leak chemicals that contaminate groundwater and create a hazard for people and animals. They are hazardous waste, but they also contain recoverable material such as lead, so the trip to a collection point is worth making. The Australian Battery Recycling Initiative (ABRI) was set up to promote responsible battery disposal and publishes where batteries can be dropped off.

## Repair, or replace?

Plenty of products are cheaper to replace than to repair, and that is where the profit pillar pulls against the planet. In a larger business, accrual accounting and depreciation can make disposal look like the better financial option. Smaller businesses that manage assets differently often find repair stacks up.

Repair is usually the environmentally responsible answer, and reselling or recycling both beat the skip. But not always: an item can be too old, too inefficient or simply not designed to be modified. A fleet of thirsty vehicles, an ageing chiller or a rack of high-consumption devices costs more to run every year, and at some point replacement with an efficient model is both the cheaper and the greener call.

A good middle path is the manufacturer's repair-and-exchange program. Removable printed circuit cards, for example, are commonly exchanged at a flat fee — on the order of $500 a card against $2000 to $5000 for a new one — with the faulty card returned for test, repair and refurbishment under warranty. Whether the card you fit is new or refurbished is irrelevant; what matters is that it works, the plant is back on line quickly and a card that had years of life left did not become waste.

## Recover, and the pack-up

Recover links recycling to avoiding and reducing waste: before buying new, look at what already exists and is fit for purpose. Refurbished office equipment, salvaged cable tray, ducting and accessories all qualify. On site, recovery is part of the pack-up and clean-up at the end of the day — sorting what can go to the next job instead of the bin.

## Water counts too

Water is a resource like any other. Full loads only in washing machines and dishwashers, cold cycles where hygiene permits, fixing dripping taps and leaking hose fittings, and choosing water-efficient appliances (Australian appliances carry a water rating label alongside the energy one) all reduce both water use and the energy used to heat and pump it.

## On the job

- Work down the hierarchy: avoid, reduce, reuse, repurpose, recover, recycle, repair — landfill last.
- Keep separate site bins for copper, steel, cardboard and general waste; mixed waste cannot be recycled.
- Box spent lamps for a recycler; never break them.
- Send batteries to an ABRI-listed collection point.
- Ask about a repair-and-exchange program before quoting a new circuit card or drive.
- Check that a 'recycled' consumable is actually approved for the equipment before buying it.`,
          quiz: [
            {
              q: "Why does 'avoid' sit above 'recycle' in the waste hierarchy?",
              options: [
                "Because recycling is illegal for most electrical materials",
                "Because recycling itself consumes energy and resources, while not creating the waste consumes none",
                "Because recycled materials are always poor quality",
                "Because avoiding waste is the only step a tradesperson controls",
              ],
              answer: 1,
              explain: "Every step down the hierarchy costs more energy. Collecting, sorting, transporting and reprocessing a material all burn energy, so the material never bought is always the cheapest and cleanest. Recycling is good — it is just not as good as not generating the waste.",
            },
            {
              q: "A maintenance crew has 200 spent fluorescent tubes. What is the environmental argument for sending them to a lamp recycler rather than the skip?",
              options: [
                "Glass is a scarce resource in Australia",
                "Mercury in landfill converts to methylmercury and spreads through air, water and soil",
                "Fluorescent tubes are classified as radioactive waste",
                "Landfill operators charge more for glass than for metal",
              ],
              answer: 1,
              explain: "The hazard is the mercury. In landfill it is converted to methylmercury, which disperses through the environment and accumulates in living things. Recycling separates glass, aluminium, phosphor and mercury into reusable streams, which is why it is described as a closed loop.",
            },
            {
              q: "PVC conduit is singled out as something worth reusing rather than recycling. Why?",
              options: [
                "It is made of a single pure polymer that degrades in sunlight",
                "It contains additives such as lead, cadmium, tin, barium and zinc that cannot easily be separated from the plastic",
                "It is banned from Australian landfill",
                "It cannot be cut or rejoined once installed",
              ],
              answer: 1,
              explain: "PVC conduit is mostly plastic but carries additives including lead, cadmium, tin, barium and zinc, and separating them is impractical — so it is a poor recycling candidate. Since making new conduit also consumes oil, pulling lengths out carefully and reusing them is the better outcome.",
            },
            {
              q: "A plant has a faulty control card. A new card is $3800; the manufacturer offers a refurbished exchange card at a flat $500. What makes the exchange a sustainable work practice?",
              options: [
                "Refurbished cards are always more reliable than new ones",
                "The faulty card is repaired and returned to service instead of becoming waste, and downtime and cost are both cut",
                "Exchange cards do not need to be tested before fitting",
                "It avoids the need to keep any spares on site",
              ],
              answer: 1,
              explain: "The exchange extends the life cycle of the card — the faulty one goes back for test, repair and refurbishment rather than to landfill — while the site pays a fraction of the new price and gets running sooner. Whether the fitted card is new or refurbished is irrelevant provided function and warranty are intact.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "neglect-and-the-greenhouse-effect",
          title: "What goes wrong when we neglect it",
          minutes: 12,
          simple: "The atmosphere works like the glass in a greenhouse: sunlight gets in, some heat cannot get back out. Adding more of the gases that trap heat makes the planet warmer, and once ice melts or water vapour rises the warming feeds on itself.",
          refs: REFS_NEGLECT,
          content: `## The consequences, near and far

The long-run consequence of ignoring sustainable practice is simple and brutal: we consume the Earth's resources faster than they can be replaced, and some of them cannot be replaced at all. Combine shortage with a damaged environment and you get the possibility of widespread famine and disease. Habitat loss is already driving species to extinction and reshaping ecosystems in ways nobody can fully predict.

The near-term consequences are far less speculative. Neglect produces measurable increases in:

- **air pollution** — worse air quality, more respiratory illness
- **water pollution** — water that is no longer fit to drink
- **contaminated land** — sickness risk and less usable land
- **global warming** — a steadily harder environment to live in

## What causes the pollution

Poor work practice causes pollution through a fairly short list of mechanisms, most of which an electrical or refrigeration worker will meet at some point:

- chemical and oil spills
- generation and inappropriate disposal of waste
- asbestos disturbance during handling and removal
- air emissions, both toxic and greenhouse gases
- noise and vibration
- dust generation
- polychlorinated biphenyl (PCB) management
- electromagnetic radiation from electric and magnetic fields
- greenhouse gas emissions

>! Two of these bite hard in older buildings. Asbestos backing boards behind switchboards and asbestos-cement conduit must never be drilled, cut or broken — stop work and get a licensed removalist. PCBs were used as capacitor and transformer dielectric fluid up to the 1970s and 80s; a leaking old capacitor from a fluorescent fitting or a power-factor bank is hazardous waste, not skip material. Refrigerant deliberately vented to atmosphere is both an environmental offence and, for a licensed technician, a licence issue.

One person's waste will not doom anybody. The problem is cumulative: every squandered resource adds to the bill, and the resources we take for granted now may simply not be available in five or fifty years. If nothing changes, future generations inherit a reduced quality of life, fewer resources and more health problems.

## The greenhouse effect, defined properly

A greenhouse is a glass or plastic structure that stays warm because sunlight passes in through the transparent skin and some of the resulting heat cannot easily get back out.

The atmosphere does the same job. Water vapour and greenhouse gases let short-wavelength sunlight through to the surface, but they absorb and re-radiate much of the longer-wavelength heat the surface emits, sending part of it back down. That is the **greenhouse effect**, and it is entirely natural. Without it the planet would average roughly 33 K colder and be uninhabitable. The problem is not that the effect exists; it is that we have thickened the blanket.

Water vapour is the most abundant greenhouse gas of all, but its concentration is governed by temperature rather than set directly by us — it responds to warming instead of causing it in the first place. Carbon dioxide is the gas human activity adds directly and in the largest quantity, which is why it is the one every target and every inventory is written around.

## What we have added

Human activity strengthens the natural effect, mainly by:

- burning fossil fuels to generate electricity and move vehicles
- making concrete, which releases large amounts of carbon dioxide
- land clearing, which removes carbon sinks
- releasing manufactured chemicals such as synthetic refrigerants

Australia reports its major greenhouse gases quarterly. They are:

| Gas | Symbol | Typical source |
|---|---|---|
| Carbon dioxide | CO2 | Burning coal, gas, oil; cement manufacture |
| Methane | CH4 | Livestock, landfill, coal seam and gas fugitives |
| Nitrous oxide | N2O | Fertiliser, some combustion |
| Perfluorocarbons | PFCs | Aluminium smelting, electronics manufacture |
| Hydrofluorocarbons | HFCs | Refrigerants, foam blowing, aerosols |
| Sulphur hexafluoride | SF6 | Insulating and arc-quenching gas in HV switchgear |

Nitrogen trifluoride (NF3) emissions are treated as negligible in Australia and are not estimated. Note that two entries on that list — HFCs and SF6 — are squarely electrotechnology gases. HFCs are the refrigerants in almost every split system and cool room installed in the last twenty-five years, and SF6 fills high-voltage circuit breakers and gas-insulated switchgear. Handling both without losses is trade work.

## Where Australia's emissions come from

For the year to March 2021 the share of national emissions by sector ran roughly like this:

| Sector | Share of national emissions |
|---|---|
| Electricity | 33.2% |
| Stationary energy excluding electricity | 20.4% |
| Transport | 17.5% |
| Agriculture | 14.9% |
| Fugitive emissions | 10.0% |
| Waste | 2.7% |
| Land use, land-use change and forestry (LULUCF) | −4.0% |

Industrial processes and product use makes up most of the balance. LULUCF is negative because growing vegetation absorbs more carbon than land-use change releases — it is a net sink.

The headline for our trade is the first row. Electricity generation is the single largest emitting sector in the country, which means every kilowatt hour an installation does *not* consume is an emissions reduction, and it is why energy efficiency work is treated as climate work.

## Feedback loops: why it does not stay gradual

The dangerous part of the system is not the direct warming but the loops that amplify it.

**The ice-albedo loop:**

1. Burning fossil fuel puts more CO2 into the atmosphere.
2. More CO2 traps more heat, so the Earth warms.
3. Warming melts polar ice.
4. White ice reflected sunlight away; dark ocean and rock absorb it instead.
5. More absorbed heat means more warming — back to step 3, now running on its own.

**The water-vapour loop**, which is the biggest of them: a warmer atmosphere holds more water vapour, water vapour is itself a greenhouse gas, so it traps more heat, which warms the air further, which lets it hold still more vapour.

Loops like these are why change may not stay gradual. Instead of the slow creep observed since the Industrial Revolution began in the late 1700s, a system with strong positive feedback can shift suddenly — an avalanche rather than a slide.

## The consequences of a warmer planet

Some warmth is essential. Too much produces:

- higher atmospheric temperature
- changed patterns and amounts of rainfall
- less ice and snow
- rising sea levels
- more acidic oceans
- extreme weather events that are more frequent, more intense or longer lasting
- ecosystems shifting in character, with species moving or failing

All of these raise health risks for people and animals, and drive migration as places become harder to live in. The ten warmest years on record are 1998, 2005 and every year from 2013 to 2020, with eight of them since 2005.

## What to remember

- Neglect shows up first as dirty air, dirty water, contaminated land and warming.
- Asbestos, PCBs and vented refrigerant are the three pollution traps most likely to catch an electrical worker.
- The greenhouse effect is natural; the enhanced greenhouse effect from added gases is the problem.
- The six reported Australian greenhouse gases are CO2, CH4, N2O, PFCs, HFCs and SF6.
- Electricity generation is Australia's largest emitting sector at about a third of the total.
- Feedback loops — melting ice and rising water vapour — can turn gradual warming into sudden change.`,
          quiz: [
            {
              q: "Which two greenhouse gases on Australia's reported list are most directly handled by electrical and refrigeration trades?",
              options: [
                "Methane and nitrous oxide",
                "Hydrofluorocarbons and sulphur hexafluoride",
                "Carbon dioxide and nitrogen trifluoride",
                "Perfluorocarbons and methane",
              ],
              answer: 1,
              explain: "HFCs are the refrigerants in most modern air-conditioning and refrigeration plant, and SF6 is the insulating and arc-quenching gas inside high-voltage switchgear. Both are released by the way equipment is serviced and decommissioned, so trade practice directly controls those emissions. Methane and nitrous oxide come mainly from agriculture, landfill and fugitive gas.",
            },
            {
              q: "Describe the ice-albedo feedback loop.",
              options: [
                "Melting ice cools the ocean, which slows further warming",
                "Warming melts reflective white ice, exposing darker surfaces that absorb more heat, causing more warming and more melting",
                "Ice absorbs CO2 as it melts, reducing the greenhouse effect",
                "Melting ice increases cloud cover, which blocks all incoming sunlight",
              ],
              answer: 1,
              explain: "Ice has high albedo — it reflects sunlight back out. When it melts, the darker ocean or rock underneath absorbs that energy instead, so the region warms faster and more ice melts. The loop reinforces itself, which is what makes it dangerous rather than self-correcting.",
            },
            {
              q: "Which sector is the largest single source of Australia's greenhouse gas emissions?",
              options: ["Transport", "Agriculture", "Electricity generation", "Waste"],
              answer: 2,
              explain: "Electricity accounts for roughly a third of national emissions — about 33% — well ahead of stationary energy excluding electricity at around 20% and transport at around 17.5%. That is the reason energy-efficiency work counts as emissions-reduction work.",
            },
            {
              q: "In the national inventory, the LULUCF sector is reported as a negative number. What does that mean?",
              options: [
                "The data for that sector is unavailable",
                "The sector is a net carbon sink — vegetation absorbs more carbon than land-use change releases",
                "The sector's emissions are measured in different units",
                "The sector's emissions are exported to other countries",
              ],
              answer: 1,
              explain: "Land use, land-use change and forestry can go either way. When regrowth and plantings absorb more carbon than clearing releases, the sector's net contribution is negative and it subtracts from the national total — a sink rather than a source.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "targets-regulators-and-law",
          title: "Targets, regulators and the law",
          minutes: 13,
          simple: "Governments have signed international promises to cut emissions, and turned them into Australian laws, schemes and watchdogs. Some of those laws reach right down to your toolbox — for instance, you need a licence to touch refrigerant.",
          refs: REFS_LAW,
          content: `## Why a tradesperson needs to know any of this

Two reasons. First, the schemes below are where the money is: rebates, certificates and credits that make an efficiency job pay for itself. Second, some of this legislation regulates what you personally are allowed to do — most obviously that only licensed people may handle synthetic refrigerants.

## The international framework

| Year | Agreement | What it did |
|---|---|---|
| 1992 | UN Framework Convention on Climate Change (UNFCCC) | Australia and 153 other nations agreed to protect the atmosphere, accepting that human greenhouse gas emissions were changing the climate |
| 1997 | Kyoto Protocol | Binding emission-reduction targets for developed countries; developing countries could join voluntarily |
| 2015 | Paris Agreement | Binds developed *and* developing countries; replaced Kyoto in practice |

The Kyoto design carried a flaw. Because large, fast-growing emitters such as China and India counted as developing and joined voluntarily, several developed countries — including the USA and Canada — walked away arguing it was unfair. Paris fixed that by binding everyone, which is why participation is far broader.

The two agreements set Australia two headline targets:

1. Emissions 5% below 2000 levels by 2020 (Kyoto).
2. Emissions 26–28% below 2005 levels by 2030 (Paris).

Paris also set the temperature goal: hold warming well below 2°C above pre-industrial levels and pursue efforts to limit it to 1.5°C. As of 2018 the world was around 1°C above pre-industrial, and unchecked emissions were projected to reach about 4°C by 2100. That is a global mean — some regions would rise far more.

Half a degree sounds trivial until the impacts are compared:

| Impact | At 1.5°C | At 2°C |
|---|---|---|
| Plant species losing half their habitable range | 8% | 16% |
| Insect species losing half their habitable range | 6% | 18% |
| Further decline in coral reefs | 70–90% | 99% |
| World population exposed to severe heat one year in five | 14% | 37% |

Australia's own position has been criticised — the Climate Council's 2018 working paper argued national emissions were rising and that the target was inadequate, noting that if every country matched Australia's ambition the global rise could reach 3°C to 4°C. At COP26 in Glasgow in 2021 the Australian Government announced a target of net zero carbon emissions by 2050.

## Australian schemes worth knowing

### Renewable Energy Target (RET)

The RET pays incentives for renewable generation and has two arms:

- **Small-scale Renewable Energy Scheme (SRES)** — small and residential generation: rooftop PV and solar hot water. This is the mechanism behind the certificates that discount a domestic solar installation.
- **Large-scale Renewable Energy Target (LRET)** — commercial-scale generation: wind farms and solar farms.

In 2015 the LRET was cut from 45 000 GWh to 33 000 GWh of renewable generation by 2020. That target was met in 2019.

### Emissions Reduction Fund (ERF)

The ERF pays businesses, landholders, government bodies, community groups and individuals to cut emissions using new technology or practices. You have to create a project that reduces emissions *beyond* business as usual. The Clean Energy Regulator then issues one **Australian Carbon Credit Unit (ACCU)** per tonne of carbon dioxide equivalent (CO2-e) stored or avoided. ACCUs can be sold to the Government or to private buyers who want to offset their own emissions, and ownership is tracked in the Australian National Registry of Emissions Units.

### National Greenhouse and Energy Reporting (NGER) scheme

A mandatory framework under which companies report greenhouse gas emissions, energy production and energy consumption. It feeds policy and Australia's international reporting obligations.

### Clean Energy Innovation Fund

Backs emerging clean-energy technology and businesses — large-scale solar with storage, offshore energy, biofuels and smart grids.

### The rest of the national toolkit

- **Carbon Neutral Program** — certifies organisations against carbon offset standards.
- **HFC management** — controls the manufacture, import and export of ozone-depleting substances and synthetic greenhouse gases.
- **Taxation measures** — for example, higher tax penalties on luxury vehicles that are not fuel efficient.
- **20 Million Trees** — planting to build a carbon sink.
- **Solar Communities Program** — funding for community groups to install rooftop PV, solar hot water and battery systems.
- **State and territory energy efficiency schemes** — the ACT's Energy Efficiency Improvement Scheme, the NSW Energy Savings Scheme, South Australia's retailer energy efficiency scheme and the Victorian Energy Upgrades program. These are the schemes that discount LED upgrades and efficient motors for your customers.
- **Carbon Farming Initiative** — lets farmers who store carbon or cut emissions earn ACCUs to sell.
- **Product Stewardship (Oil) Scheme** — pays incentives to collect and re-refine used oil. Australia generates about 250 million litres of used oil a year; cleaned and re-refined base oil goes back into lubricants, hydraulic oil and transformer oil, and can be recycled repeatedly.
- **Minimum Energy Performance Standards (MEPS)** — mandatory minimum efficiency that a product must meet before it can legally be sold in Australia.
- **Energy Rating Labels** — the star label that lets a buyer compare running costs on fridges, freezers, washing machines and air-conditioners.

Australia is a comparatively small contributor to global emissions in absolute terms, but its emissions per head of population are among the highest in the world.

## The regulators and advisory bodies

| Body | Role |
|---|---|
| Climate Change Authority | Expert advice on climate policy; reviews the Carbon Farming Initiative and NGER |
| Clean Energy Regulator | Administers NGER, the ERF, the RET and the emissions units registry |
| Environment Protection Authority (one per state/territory) | Acts on pollution and waste; assesses works applications against the legislation |
| Department responsible for environment and energy | Protects environment, water and heritage; policy for affordable, reliable, sustainable energy |
| Australian Energy Regulator (AER) | Economic regulator of wholesale electricity and gas markets |
| Australian Renewable Energy Agency (ARENA) | Funds renewable innovation and shares the knowledge |
| Intergovernmental Panel on Climate Change (IPCC) | Formed 1988; the peak world body, coordinating thousands of experts to assess climate impacts |
| Climate Council | Independent public climate information in Australia |
| Smart Energy Council | Peak body for solar, storage and smart energy — formed in 2017 from the Australian Solar Council and the Energy Storage Council |
| Solar Energy Industries Association | Installers, retailers, researchers, manufacturers and importers in solar |
| Australian Photovoltaic Institute | PV data, analysis and collaborative research; participates in the IEA's PV Power Systems and Solar Heating and Cooling programs |

## The legislation

**Ozone Protection and Synthetic Greenhouse Gas Management Act 1989.** Controls the manufacture, import and export of all ozone-depleting substances and synthetic greenhouse gases. This is the Act behind refrigerant licensing in Australia: only licensed people may handle synthetic refrigerant, and only licensed businesses may buy or sell it. For a refrigeration and air-conditioning technician this is the piece of environmental law that touches every working day.

**Environment Protection and Biodiversity Conservation (EPBC) Act 1999.** The single biggest piece of Commonwealth environmental legislation, applying across all states and territories. It provides the legal framework for protecting and managing significant flora, fauna, ecological communities, heritage places, wetlands, threatened species and marine areas, and it governs environmental assessment and approvals.

**Greenhouse and Energy Minimum Standards (GEMS) Act 2012.** In force from 1 October 2012, it replaced the patchwork of state regulators with a single GEMS Regulator. GEMS is the legal backbone of MEPS and energy labelling. The Regulator oversees the Equipment Energy Efficiency program — known as **E3** — a joint Australian, state, territory and New Zealand program covering energy efficiency standards and product labelling.

**State climate change legislation.** Every state and territory has its own Acts, regulations and policies. Victoria's Climate Change Act 2017, for example, is aligned with the Paris Agreement and is built around managing climate risk.

## How it is enforced

Each state or territory EPA administers that jurisdiction's Acts, regulations and policies. When a business, government department or landholder lodges an application for works, the EPA weighs the likely impacts against every relevant legislative requirement. If the works would breach or fail to meet those requirements, they are not approved and cannot proceed.

## On the job

- Only handle refrigerant if you hold the correct licence; the authority is the Ozone Protection and Synthetic Greenhouse Gas Management Act 1989.
- Before quoting an efficiency upgrade, check the state scheme — ESS, VEU, EEIS or the SA scheme — for available certificates.
- MEPS is mandatory: a non-compliant product cannot legally be supplied, so check compliance before you import or specify equipment.
- ACCU = one tonne of CO2-e avoided or stored, issued by the Clean Energy Regulator.
- Australia's targets: 5% below 2000 by 2020, 26–28% below 2005 by 2030, net zero by 2050.`,
          quiz: [
            {
              q: "Which piece of Australian legislation is the basis for requiring a licence to handle synthetic refrigerants?",
              options: [
                "The EPBC Act 1999",
                "The GEMS Act 2012",
                "The Ozone Protection and Synthetic Greenhouse Gas Management Act 1989",
                "The Victorian Climate Change Act 2017",
              ],
              answer: 2,
              explain: "The Ozone Protection and Synthetic Greenhouse Gas Management Act 1989 controls ozone-depleting substances and synthetic greenhouse gases, and the licensing of people who handle refrigerant flows from it. The EPBC Act covers biodiversity and environmental approvals; GEMS covers minimum efficiency standards and labelling.",
            },
            {
              q: "What exactly is one Australian Carbon Credit Unit?",
              options: [
                "One megawatt hour of renewable electricity generated",
                "One tonne of carbon dioxide equivalent stored or avoided by an eligible project",
                "One dollar of government rebate for an efficiency upgrade",
                "One year of compliance with the NGER scheme",
              ],
              answer: 1,
              explain: "An ACCU represents one tonne of CO2-e stored or avoided beyond business as usual, issued by the Clean Energy Regulator and tradeable to the Government or private buyers. Renewable generation is credited separately through the RET's certificate schemes, which is a different mechanism.",
            },
            {
              q: "Why did the Kyoto Protocol lose several major developed-country participants, and how did the Paris Agreement address it?",
              options: [
                "Kyoto had no targets at all; Paris introduced them",
                "Kyoto bound only developed countries while large developing emitters joined voluntarily; Paris binds both groups",
                "Kyoto applied only to refrigerant gases; Paris covers all gases",
                "Kyoto expired in 1997; Paris extended it",
              ],
              answer: 1,
              explain: "Kyoto's split between binding obligations for developed countries and voluntary participation for developing ones — including very large emitters — was seen as unfair, and countries such as the USA and Canada withdrew. Paris binds developed and developing nations alike, which is why far more countries signed on.",
            },
            {
              q: "A customer asks why an efficient product they saw overseas is not sold here. Which mandatory Australian regulation is the most likely reason?",
              options: [
                "The National Greenhouse and Energy Reporting scheme",
                "The Renewable Energy Target",
                "Minimum Energy Performance Standards under the GEMS Act",
                "The Emissions Reduction Fund",
              ],
              answer: 2,
              explain: "MEPS sets a mandatory minimum efficiency a product must meet before it can be supplied or sold in Australia, and it is administered under the GEMS Act 2012. NGER is a reporting framework for companies, and the RET and ERF are incentive schemes — none of them block a product from sale.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "economics-levies-and-labels",
          title: "The money side: levies, labels and audits",
          minutes: 13,
          simple: "Saving energy saves money, and that is usually what convinces a customer. Star labels, minimum standards and a levy on high-warming refrigerants all exist to push the price of a product closer to its real cost to the planet.",
          refs: REFS_ECON,
          content: `## Sustainability has to pay to survive

The electrotechnology industry is a large part of the Australian economy and a large part of its emissions. Sustainable practice in this industry is not only about the environment — it is also about the economic welfare of electrical businesses and their customers. Reducing waste cuts purchasing costs; reducing energy cuts operating costs; and a set of government schemes pays people to do both.

Here is the national emissions picture the money is aimed at, comparing the year to March 2019 with the year to March 2020, in millions of tonnes of CO2-e:

| Sector | 2019 | 2020 | Change |
|---|---|---|---|
| Energy — electricity | 180.5 | 172.9 | −4.2% |
| Energy — stationary, excluding electricity | 100.0 | 102.7 | +2.7% |
| Energy — transport | 100.1 | 99.7 | −0.4% |
| Energy — fugitive emissions | 55.7 | 55.8 | +0.2% |
| Industrial processes and product use | 34.8 | 34.6 | −0.6% |
| Agriculture | 72.0 | 68.0 | −5.6% |
| Waste | 13.0 | 13.1 | +1.0% |
| Land use, land-use change and forestry | −19.7 | −18.1 | — |
| **National inventory total** | **536.4** | **528.7** | **−1.4%** |

Electricity is both the biggest number and the one falling fastest, driven by renewables displacing coal generation and by efficiency work of exactly the kind described in this module.

## Getting paid to be efficient

Direct incentives available to businesses, landholders, governments, community groups and individuals include:

- **The Emissions Reduction Fund** — ACCUs for verified emissions reductions, sellable for cash.
- **The Small-scale Renewable Energy Scheme** — certificates that come off the price of a rooftop PV or solar hot water installation up front.
- **The Large-scale Renewable Energy Target** — certificate revenue that underpins wind and solar farm project finance.
- **State efficiency schemes** — certificates for lighting, motor, HVAC and appliance upgrades.

For an electrical contractor these are quoting tools. A lighting upgrade that looks expensive at list price often looks very different once scheme certificates are applied.

## The HFC refrigerant levy — a price on warming

Under the Clean Energy Future Plan of 2012, synthetic greenhouse gas refrigerants attract a levy, and the size of the levy is **proportional to the gas's Global Warming Potential (GWP)**. Importers pay it, but the cost passes straight down the supply chain to the end customer.

GWP is a ratio: how much warming one kilogram of a gas causes over 100 years compared with one kilogram of carbon dioxide. CO2 is the yardstick, so its GWP is 1 by definition.

| Refrigerant | Type | 100-year GWP (AR4 basis) |
|---|---|---|
| R744 (carbon dioxide) | Natural | 1 |
| R717 (ammonia) | Natural | 0 |
| R290 (propane) | Natural hydrocarbon | 3 |
| R32 | HFC | 675 |
| R134a | HFC | 1430 |
| R410A | HFC blend | 2088 |
| R404A | HFC blend | 3922 |

Those numbers are why the levy has teeth. Losing a kilogram of R404A does the atmospheric damage of nearly four tonnes of CO2; losing a kilogram of R744 does the damage of one kilogram of CO2.

The levy is designed to produce four outcomes:

1. Less leakage, through better system design.
2. Fewer emissions, through better maintenance.
3. A preference for systems that need a smaller refrigerant charge.
4. A shift to lower-GWP refrigerants and the systems built for them.

### Worked example — what a leak really costs

A supermarket pack running on R404A loses 5 kg of refrigerant over a year through a weeping flare joint.

- Direct cost of gas: 5 kg at, say, $120/kg = **$600**
- Climate cost: 5 kg × GWP 3922 = 19 610 kg CO2-e = **19.6 tonnes CO2-e**
- For comparison, at roughly 0.7 kg CO2-e per kilowatt hour of grid electricity, 19.6 tonnes is about 28 000 kWh — around the annual electricity use of four average homes

That leak also degrades performance. Undercharge lowers evaporating pressure and suction density, so the compressor moves less refrigerant per revolution and the cabinet takes longer to pull down — energy consumption rises at the same time the gas escapes. Sustainability and good refrigeration practice point the same way: find the leak, fix it, weigh the charge in.

!SIM[See what an undercharged system does on the gauges](fault=lowCharge)

## MEPS: the floor under the market

**Minimum Energy Performance Standards** make it illegal to supply or sell a product in Australia unless it meets a defined minimum efficiency. MEPS is a mandatory regulation made under the GEMS Act 2012, and it covers a long list of equipment including refrigerators and freezers, air-conditioners, three-phase electric motors, distribution transformers, water heaters and commercial refrigerated display cabinets.

MEPS works by simply removing the worst products from the market. A buyer cannot make a bad choice from the bottom of the range because the bottom of the range has been deleted.

## Energy Rating Labels: the ceiling people can see

The Energy Rating Label, part of the E3 program, has to be attached to covered appliances — washing machines, refrigerators, freezers, air-conditioners and more. It gives the buyer two things:

- **Stars** — more stars means less energy for the same service. The scale is comparative *within a category and size class*, so a 6-star 300 L fridge and a 6-star 600 L fridge are not the same consumption.
- **A consumption number** — kilowatt hours per year for the appliance under the standard test. This is the figure to use for real comparisons because it is absolute.

Air-conditioner labels in Australia use a zoned format with separate heating and cooling star ratings for hot, average and cold climate zones, because a machine that is excellent in Brisbane may be mediocre in Canberra.

### Worked example — reading past the stars

A customer is choosing between two similar-capacity fridges:

- Fridge A: 400 kWh per year, purchase price $900
- Fridge B: 280 kWh per year, purchase price $1150

Annual saving = 400 − 280 = 120 kWh. At $0.30/kWh that is **$36 a year**.

Extra purchase cost = $1150 − $900 = $250, so simple payback = 250 ÷ 36 = **about 7 years**.

Over a 12-year fridge life the customer is ahead by (12 × 36) − 250 = **$182**, and has avoided about 120 × 12 × 0.7 = 1008 kg, roughly **1 tonne of CO2-e**. Marginal financially, clearly positive environmentally — and that is an honest answer to give a customer, rather than pretending every efficient product pays back in two years.

## Energy audits and monitoring

You cannot manage what you have not measured. An **energy audit** is a structured survey of a site's energy use that identifies where energy goes and what it would cost to use less.

What an audit involves in practice:

1. Pull 12 months of billing data — kWh, peak demand in kVA or kW, tariff structure and power factor penalties.
2. Walk the site and inventory the loads: lighting, HVAC, refrigeration, motors, compressed air, water heating, office equipment.
3. Log the big ones. A clamp-on data logger or a metered sub-circuit gives a real load profile instead of a nameplate guess.
4. Compare consumption against a benchmark — kWh per square metre per year for a building, or kWh per tonne of product for a factory.
5. Rank the opportunities by simple payback and write them up.

Many utilities offer free home energy assessments and rebates towards efficient upgrades, and larger sites use permanent **energy monitoring systems** that trend consumption circuit by circuit. Continuous monitoring catches drift — a chiller quietly using 15% more than it did last summer is a fault report, not a mystery.

The measurement to make on any motor, chiller or lighting circuit is real power in kW over time, not just current. Current alone hides power factor and hides part-load behaviour.

## What to remember

- Energy and waste reductions show up as lower operating costs, which is what sells the job.
- The HFC levy is proportional to GWP, so high-GWP gas costs more and leaking it costs a lot more.
- GWP is warming per kilogram relative to CO2 over 100 years: R404A 3922, R410A 2088, R134a 1430, R32 675, R290 3, R744 1, R717 0.
- MEPS is a mandatory floor; the star label is a comparative tool — always check the kWh/year figure too.
- Audit before you spend: 12 months of bills, a load inventory, logged data, a benchmark, then a ranked list.`,
          quiz: [
            {
              q: "The HFC refrigerant levy is set in proportion to which property of the gas?",
              options: [
                "Its ozone depletion potential",
                "Its global warming potential",
                "Its critical temperature",
                "Its latent heat of vaporisation",
              ],
              answer: 1,
              explain: "The levy scales with GWP, so a kilogram of a high-GWP blend such as R404A attracts far more than a kilogram of a low-GWP gas. Ozone depletion potential is controlled by a separate mechanism aimed at ozone-depleting substances rather than by this levy.",
            },
            {
              q: "A system loses 3 kg of R410A (GWP 2088). What is the approximate CO2-equivalent released?",
              options: ["3 kg", "696 kg", "6.3 tonnes", "2088 tonnes"],
              answer: 2,
              explain: "3 kg × 2088 = 6264 kg, so about 6.3 tonnes of CO2-e. Multiplying mass by GWP is the whole calculation. Note this is a mass ratio, not a volume one — every kilogram lost carries the full multiplier.",
            },
            {
              q: "Two air-conditioners both show 4 stars on their Energy Rating Labels. What can you safely conclude?",
              options: [
                "They consume the same amount of energy per year",
                "They are equally efficient relative to others in their own category and size class, but their actual kWh per year may differ",
                "They have the same cooling capacity",
                "They cost the same to buy",
              ],
              answer: 1,
              explain: "Stars are a comparative rating within a category and size class, so a larger machine and a smaller one can share a star rating while consuming very different amounts of energy. The consumption figure in kWh per year on the label is the absolute number to compare, and for air-conditioners you also have to compare the right climate zone.",
            },
            {
              q: "A fridge using 120 kWh/year less costs $250 more to buy. Electricity is $0.30/kWh. What is the simple payback?",
              options: ["About 2 years", "About 7 years", "About 12 years", "About 21 years"],
              answer: 1,
              explain: "The annual saving is 120 kWh × $0.30 = $36. Payback = $250 ÷ $36 per year ≈ 7 years. Simple payback ignores discount rates and rising tariffs, so it is a conservative screening tool — a genuinely useful, honest number to quote a customer.",
            },
            {
              q: "Why is a permanent energy monitoring system useful beyond the initial audit?",
              options: [
                "It replaces the need for a licensed electrician",
                "It trends consumption over time, so gradual drift caused by a developing fault is detected",
                "It automatically claims scheme certificates",
                "It measures current only, which is sufficient for billing",
              ],
              answer: 1,
              explain: "An audit is a snapshot; monitoring shows the trend. A chiller or compressor drawing steadily more kWh for the same duty is reporting a fault — fouled coil, low charge, failing valves — long before anyone complains about temperature. Measuring real power in kW, not just current, is what makes that trend meaningful.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "reducing-carbon-produced-energy",
          title: "Cutting carbon-produced energy",
          minutes: 12,
          simple: "Nearly all of Australia's carbon comes from burning something. Every unit of energy you avoid using is fuel that never gets burned, so switching things off, insulating, and buying efficient gear are climate actions.",
          refs: REFS_REDUCE,
          content: `## The chain from switch to smokestack

Burning natural gas, coal and oil raises atmospheric CO2, which drives the enhanced greenhouse effect. In Australia most electricity still comes from burning coal and gas, so a load reduction at the switchboard is a fuel reduction at the power station. Individuals and businesses reduce demand; the fuel burn follows.

## Ten practical methods, and what they are worth

| Method | What it achieves |
|---|---|
| Reduce, reuse, recycle, repair | Recycling half of one person's household waste can avoid over 1000 kg of CO2 a year |
| Use less heating and cooling | Insulation and double glazing can cut heating costs by more than 25%; setting back at night and when the building is empty adds more |
| Moderate the thermostat | In winter, cap the setting at 19°C; through summer, hold it at 25°C or above. Australian businesses could between them save around $100 million and 300 000 tonnes of carbon a year |
| Replace lamps | Incandescent lamps have been phased out; LEDs and compact fluorescents replace them. The phase-out is saving the average household about 300 kWh and $75 a year |
| Drive less and drive well | Public transport and carpooling cut trips; every litre of petrol saved keeps about 10 kg of CO2 out of the atmosphere |
| Buy energy-efficient products | Appliances now come in a wide efficiency range — the label lets you choose |
| Use less hot water | Water heating can be around 25% of a household's total energy, so an efficient system moves a big number |
| Switch lights and appliances off | Turn off when leaving a room, use only the light needed, shut down idle televisions and computers |
| Plant a tree | One tree absorbs roughly one tonne of CO2 over its lifetime |
| Get an energy audit | Many utilities offer free home assessments and rebates towards efficient upgrades |
| Encourage others | Share what works with colleagues, neighbours and decision-makers — behaviour spreads |

### Worked example — the vehicle numbers

Tyres matter more than most people think. Running tyres 1 bar (about 15 psi) above or below the recommended pressure changes rolling resistance by about 5%. A 10% reduction in a whole vehicle's rolling resistance yields roughly 3% lower fuel consumption.

Take a service van using 2000 L of fuel a year:

- Correcting chronically under-inflated tyres recovers perhaps 5% of rolling resistance, worth about 1.5% of fuel = **30 L a year**
- At 10 kg CO2 per litre that is **300 kg CO2 a year**, per van
- Across a ten-van fleet, **3 tonnes CO2 a year** for the cost of a tyre gauge

It is a small percentage of a large number, which is where most real savings live.

## The three levers our industry actually controls

### 1. Copper

The electrotechnology industry consumes enormous quantities of copper, so recycling and moderating its use is our biggest single materials lever.

Copper recycles beautifully. It can be recycled over and over with no loss of quality, and electrolytic refining can even upgrade it. The facts behind that:

- Copper mined since 1900 comes to 550 million tonnes, and about two-thirds of that metal is still doing useful work today.
- Recycling copper uses up to 85% less energy than primary production, saving around 40 million tonnes of CO2 worldwide — the emissions of about 16 million cars.
- About 34% of world copper demand is met by recycling (41% in Europe), and copper products average about 35% recycled content.
- Recycling copper could cut the world's carbon footprint by about 16% by 2030.
- Copper demand is projected to grow — one estimate puts the increase at 43% by 2035 against today's roughly 22-million-tonne demand — partly because renewable energy systems use up to 12 times more copper than conventional systems, and an electric vehicle uses about four times the copper of a combustion vehicle.

Reducing copper use is harder, because conductor size is a safety and functionality requirement. Australian Standards mandate minimum conductor sizes for good reason, and you never undersize a conductor to save copper. What you can do is:

- Avoid gratuitous oversizing. Larger-than-required cables are sometimes specified in commercial lighting work out of habit; size for the actual current, volt drop, fault loop impedance and installation conditions, then stop.
- Use wireless where a data link is genuinely suitable — an external IP camera on a wireless link instead of a long structured-cabling run, or a whole small network. It is cheaper for the customer as well.
- Separate copper cleanly at strip-out so it goes to the scrap merchant, not to landfill in a mixed skip.

The payoff is less environmental damage, less landfill, conserved copper resource and money in the business's pocket.

### 2. Electricity

Australia is among the world's largest coal exporters and a top-five coal producer. In 2019 about 76% of Australia's electricity came from fossil fuels and 24% from renewables; by 2020 renewables had risen to 27.7%. Around 14% of Australia's electricity in 2018–19 was generated outside the electricity sector — by businesses and households, largely rooftop solar.

Renewable share of generation by state and territory in 2020, with 2019 in brackets:

| ACT | NSW | Vic | Tas | SA | WA | Qld |
|---|---|---|---|---|---|---|
| 100% (100) | 21% (17.1) | 27.1% (23.9) | 99.2% (95.6) | 59.7% (52.7) | 24.2% (20.9) | 16.6% (14.1) |

Strategies for cutting electricity consumption:

- Switch appliances off at the wall rather than leaving them on standby.
- Replace standard devices and lamps with efficient ones — LEDs for fluorescents, laptops or tablets for desktops.
- Switch lights off when not needed, and fit motion detectors in rooms used intermittently.
- Fit blinds and shutters to block summer sun and admit winter sun and light.
- Keep doors closed so conditioned air stays in, and hold setpoints at 19°C winter and 25°C summer.
- Turn air-conditioning off for the last hour or so of the working day and coast on the building's thermal mass.
- Clean air-conditioning filters and condenser coils regularly — this is maintenance that pays for itself in energy.
- Use signs, posters and stickers so people keep thinking about it.
- Make building improvements that maximise natural heating, cooling and daylight.
- Bring in an energy-efficiency specialist to analyse the site and write an energy savings plan.

Beyond consuming less, the supply side can change: move to renewable sources, buy a green energy plan from the retailer, or install solar generation on site.

### 3. Oil and gas

Oil and gas are major greenhouse contributors — oil is distilled into petrol and diesel, and gas is burned for heat. Note that gas heating behaves like electric heating for efficiency purposes, so the same rules apply: improve the building, keep doors shut, do not overheat the space.

Ways to reduce oil and gas consumption:

- Use fuel-efficient vehicles, including hybrids and vehicles that burn less petroleum fuel.
- Buy fewer plastic products — crude oil is the feedstock for plastic.
- Wear natural-fibre work clothing and footwear where it is safe to do so, rather than oil-based nylon and polyester.
- Use soy-based printing inks rather than petroleum inks.
- Use natural cleaners rather than oil-based ones.
- Where plastic is unavoidable, choose products made from recycled plastic that can be recycled again.
- Drink tap water rather than bottled, to avoid petroleum-based bottles.
- Buy locally made products to cut long-distance freight.

Of that list, cutting vehicle fuel and cutting plastic use deliver by far the biggest results — the rest are worth doing but are smaller.

## On the job

- The largest savings usually come from small percentages of very large loads — HVAC, refrigeration, lighting and vehicles.
- Never undersize a conductor to save copper; eliminate *unjustified* oversizing instead.
- Separate copper, steel and cardboard at strip-out; mixed skips destroy the value.
- Filters and condenser coils are an energy job as much as a service job.
- Setpoints of 19°C in winter and 25°C in summer are the standard target — every degree beyond that is bought fuel.`,
          quiz: [
            {
              q: "Recycling copper rather than producing it from ore saves roughly how much energy?",
              options: ["About 10%", "About 35%", "Up to 85%", "About 99%"],
              answer: 2,
              explain: "Recycled copper takes up to 85% less energy than primary production, which is why it saves around 40 million tonnes of CO2 globally — the emissions of about 16 million cars. Copper also recycles with no loss of quality, so recycled metal is not a lesser product.",
            },
            {
              q: "A customer wants smaller cables installed on a lighting circuit 'to save copper'. What is the correct response?",
              options: [
                "Agree — reducing copper use is a sustainable work practice",
                "Refuse — conductor size is set by current, volt drop, fault loop impedance and installation conditions, and minimum sizes are mandated by the Standards",
                "Agree, provided the circuit is protected by an RCD",
                "Refuse, because copper cannot be recycled",
              ],
              answer: 1,
              explain: "Sustainability never overrides safety or the Wiring Rules. The legitimate saving is eliminating oversizing that has no technical justification — sizing properly and stopping there — not going below what the design calculation and the Standards require.",
            },
            {
              q: "What thermostat setpoints does the chapter recommend as the sustainable target for conditioned spaces?",
              options: [
                "No higher than 19°C in winter, no lower than 25°C in summer",
                "22°C all year round",
                "No higher than 25°C in winter, no lower than 19°C in summer",
                "As low as possible in summer to reduce run time",
              ],
              answer: 0,
              explain: "19°C winter and 25°C summer keeps the machine working against the smallest temperature difference that still gives acceptable comfort. Option 2 has the seasons backwards, which would drive both heating and cooling loads up. Australian businesses could collectively save around $100 million and 300 000 tonnes of carbon a year on these setpoints.",
            },
            {
              q: "A service van burns 2000 L of fuel a year. Roughly how much CO2 does that represent?",
              options: ["200 kg", "2 tonnes", "20 tonnes", "200 tonnes"],
              answer: 2,
              explain: "Every litre of petrol saved keeps about 10 kg of CO2 out of the atmosphere, so 2000 L corresponds to roughly 20 000 kg, or 20 tonnes, a year. That scale is why fuel use and plastics are the two oil-and-gas levers with the biggest payoff.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "efficient-buildings-lighting-motors-hvac",
          title: "Trade technologies, retrofits and efficient plant",
          minutes: 14,
          simple: "This is the hands-on part: better lamps, drives that slow motors down instead of throttling them, controls that only run plant when it is needed, and air-conditioning that is clean and set correctly. A heat pump moves heat rather than making it, which is why it beats a bar heater.",
          refs: REFS_TECH,
          content: `## Retrofitting is the trade's main contribution

Retrofitting means replacing old technology with newer technology to improve energy efficiency. Most electrical work on an existing building is a retrofit of some kind, and the sustainability content of the job is usually decided by what you specify, not by how you install it.

## The technology list

| Technology | What it does |
|---|---|
| Programmable timer clocks | Switch loads on and off at set times, including holiday periods |
| Motion and occupancy sensors | Run lighting and ventilation only when people are present |
| LED lighting | More light per watt than fluorescent or incandescent, with long life |
| Building design and orientation | Uses sun, shade and prevailing breeze to reduce the load in the first place |
| Solar energy systems | Generate on site, displacing purchased energy |
| Energy monitoring systems | Measure how efficient an installation actually is, and trend it |
| Building management systems (BMS) | Coordinate plant — for example running an economy cycle on outside air instead of mechanically cooling |
| C-Bus and similar microprocessor control systems | Integrate lighting, security, air-conditioning and other functions in homes and commercial buildings |
| Variable speed drives | Match motor speed to actual demand instead of throttling a constant-speed machine |

## Methods that cost nothing but attention

- Switch machines and devices off when not in use — and automate it with sensors and timers so it does not depend on memory.
- Match generators to load; a large set running lightly loaded is inefficient and wet-stacks.
- Replace ageing low-efficiency equipment rather than nursing it.
- Fit blinds and window shutters.
- Put a jumper on before touching the thermostat.
- Move the air-conditioning setpoint one degree warmer in summer and one cooler in winter.
- Use induction cooktops rather than gas.
- Use renewable generation and batteries rather than diesel sets where practical.
- Install variable speed drives.
- Service plant regularly — no control strategy rescues a dirty, worn machine.

## Lighting

Lighting is usually the easiest retrofit to sell because the savings are simple to calculate and the payback is short.

Efficacy — lumens delivered per watt consumed — is the number that matters:

| Lamp type | Rough efficacy | Notes |
|---|---|---|
| Incandescent (phased out) | Very low | Most of the input became heat |
| Halogen | Low | Slightly better than incandescent, still mostly heat |
| Compact fluorescent | Moderate | Contains mercury; must be recycled |
| Linear fluorescent with electronic control gear | Good | Still the installed base in much commercial work |
| LED | Highest in general use | Long life, dimmable, directional, no mercury |

Beyond swapping lamps: use only the light actually needed for the task, switch by zone rather than by floor, add occupancy sensing in store rooms, corridors and toilets, and use daylight sensing near windows and skylights.

### Worked example — a lighting retrofit

An office has 60 twin 36 W fluorescent battens. With control gear each fitting draws about 80 W. They run 3000 hours a year and energy costs $0.30/kWh.

Existing: 60 × 80 W = 4800 W = 4.8 kW
Annual energy = 4.8 kW × 3000 h = **14 400 kWh**, costing 14 400 × 0.30 = **$4320**

Replacement LED panels draw 32 W each:
New load = 60 × 32 W = 1920 W = 1.92 kW
Annual energy = 1.92 × 3000 = **5760 kWh**, costing **$1728**

Saving = 14 400 − 5760 = **8640 kWh a year**, worth **$2592 a year**
Emissions avoided at 0.7 kg CO2-e/kWh = 8640 × 0.7 = 6048 kg ≈ **6 tonnes CO2-e a year**

If the supplied-and-installed cost is $130 a fitting, the project costs 60 × 130 = $7800, and simple payback = 7800 ÷ 2592 = **about 3 years** — before any state scheme certificates, which often cut it to under two.

There is a second-order benefit in a conditioned building: 2.88 kW of lighting heat removed from the space is 2.88 kW the air-conditioning no longer has to reject, which at a system COP of 3 saves nearly another kilowatt of compressor power while the plant is running.

## Motors

Motors are the biggest electrical load in most industrial and commercial sites, so a small efficiency gain moves a big number. Three-phase motors in Australia are covered by MEPS, with high-efficiency levels defined in the AS/NZS 1359.5 series and internationally by the IE efficiency classes.

Practical points:

- **Size correctly.** A motor loaded to 40% of its rating runs at reduced efficiency and poor power factor. Oversizing 'for safety' costs energy every hour of every year.
- **Rewind or replace?** Each rewind of a burnt-out motor typically loses a little efficiency. For a motor that runs continuously, replacing an old standard-efficiency machine with a premium-efficiency one usually beats a rewind on whole-of-life cost.
- **Fix the driven system first.** Blocked filters, worn belts, throttled valves and choked dampers waste more than the motor ever will.
- **Correct the power factor** where the tariff penalises it, and keep harmonic distortion under control — poor power quality from cheap lighting drivers and drives increases losses in cables and transformers and adds electromagnetic disturbance.

### Worked example — a variable speed drive

A 15 kW supply-air fan runs 4000 hours a year against a system that only needs 80% airflow most of the time. Balancing dampers are currently used to throttle it.

Fan laws: flow varies with speed, pressure with speed squared, and **shaft power with speed cubed**.

Power at 80% speed = 15 kW × 0.8³ = 15 × 0.512 = **7.7 kW**

Saving = 15 − 7.7 = **7.3 kW** while running
Annual saving = 7.3 kW × 4000 h = **29 200 kWh**, worth 29 200 × $0.30 = **$8760 a year**
Emissions avoided ≈ 29 200 × 0.7 = **20 tonnes CO2-e a year**

That cube law is why variable speed drives can cut energy by up to 50% compared with constant-speed operation in pumping, fan and HVAC applications, and why throttling a constant-speed fan is such a waste — the damper burns the energy the fan already made.

## HVAC and refrigeration

Air-conditioning and refrigeration are where an electrical or refrigeration worker has the most direct influence on a site's energy bill.

**Why a heat pump wins.** A resistive heater converts 1 kW of electricity into 1 kW of heat, and that is the ceiling. A reverse-cycle air-conditioner does not make heat — it moves it, collecting low-grade heat from outdoor air and pumping it indoors. Because it is moving rather than creating, 1 kW of input can deliver 3 to 4 kW of heat. That single fact makes reverse-cycle air-conditioning and heat pump water heaters two of the highest-value retrofits available.

!FIG[heat-flow]

**Where HVAC energy leaks away:**

| Condition | Effect on energy |
|---|---|
| Dirty air filters | Reduced airflow, lower evaporating temperature, longer run times, risk of coil icing |
| Fouled condenser coil | Higher condensing pressure and temperature, so the compressor works harder for the same cooling |
| Low refrigerant charge | Reduced mass flow and capacity; the plant runs longer for the same effect |
| Non-condensable gases in the system | Raised head pressure and wasted compressor work |
| Setpoints too aggressive | Every extra degree of temperature difference is bought energy |
| Doors and windows open to conditioned space | Continuous load the plant can never satisfy |
| No time control | Plant conditioning an empty building overnight and at weekends |

!SIM[See what a fouled condenser does to head pressure and power](fault=dirtyCondenser)

A blocked condenser is worth understanding properly: raising condensing temperature raises the pressure the compressor must discharge against, which increases the work per kilogram of refrigerant while the cooling per kilogram falls. Efficiency drops from both ends at once. Washing a condenser coil is one of the cheapest energy savings in the trade.

## The retrofit menu

- **Solar PV and battery storage** — generate and store on site so less fossil-fuelled grid energy is bought.
- **Electric vehicles** — displace liquid fuel and its emissions.
- **Variable speed drives matched to the duty** — up to 50% energy reduction against constant-speed operation in pumps, fans and HVAC.
- **Low-power LEDs** replacing compact fluorescent and linear fluorescent lighting.
- **Programmable controllers** so plant runs only when time, temperature or occupancy says it should.
- **Efficient electric water heating and induction cooktops** in place of standard electric appliances.
- **Improved power quality** — less electromagnetic disturbance from poor-quality lighting and motor equipment, and lower power and energy losses.
- **Natural refrigerants replacing synthetics** — ammonia (R717), carbon dioxide (R744) and hydrocarbons (R290 propane, R600a isobutane) all have negligible GWP compared with HFCs.

>! Natural refrigerants carry real hazards and are not a like-for-like swap. Ammonia is toxic and irritant; CO2 systems run at very high pressures and need components rated for them; hydrocarbons are flammable and are limited by charge size and room volume under the relevant standards. Never charge a system with a refrigerant it was not designed and labelled for. Always follow the manufacturer's advice and the applicable standard.

## Evaluating an installation

Sustainable work on site aims at three things at once: minimise waste, reduce energy, avoid environmental damage. In practice that means:

- Survey the plant and air-conditioning equipment and measure actual power consumption before proposing anything.
- Repair or replace visible faults — leaks, damaged switches, failed seals.
- Replace worn or damaged cables and seals.
- Select the most efficient appliance appropriate to each installation.
- Fit electronic timers so equipment is not left running in an empty building.
- Evaluate proposed as well as existing installations, and test the installation before you leave site.

## On the job

- Fan and pump power follows the cube of speed — that is where VSD savings come from.
- A heat pump delivers three to four times more heat than a resistive element for the same input.
- Clean filters and condenser coils; it is energy work, not just service work.
- Specify LEDs plus controls, not LEDs alone — sensors and timers often save as much again.
- Size motors to the load; oversized motors waste energy and power factor continuously.
- Natural refrigerants cut GWP dramatically but bring toxicity, pressure or flammability hazards with them.`,
          quiz: [
            {
              q: "A 22 kW pump motor is slowed to 70% speed by a VSD. Approximately what shaft power does it now draw?",
              options: ["15.4 kW", "10.8 kW", "7.5 kW", "4.4 kW"],
              answer: 2,
              explain: "Shaft power varies with the cube of speed: 22 × 0.7³ = 22 × 0.343 = 7.5 kW. The tempting wrong answer is 15.4 kW, which assumes power falls in direct proportion to speed. The cube law is exactly why variable speed drives can cut energy by up to 50% in pump, fan and HVAC duties.",
            },
            {
              q: "Why can a reverse-cycle air-conditioner deliver more heat energy than the electrical energy it consumes?",
              options: [
                "It creates energy in the compressor",
                "It moves existing heat from outdoor air into the building rather than generating heat",
                "It runs at a higher voltage than a resistive heater",
                "Its energy rating label is measured differently",
              ],
              answer: 1,
              explain: "Nothing is created — the machine is a heat pump. The electrical input drives a compressor that transports low-grade heat from outside to inside, so the heat delivered is the heat collected plus the work input. A resistive heater can only ever convert 1 kW in to 1 kW out.",
            },
            {
              q: "A fouled condenser coil raises condensing temperature and pressure. Why does that increase energy consumption?",
              options: [
                "The compressor must work harder against higher discharge pressure while cooling capacity per kilogram falls",
                "The evaporator freezes solid, stopping the fan",
                "The refrigerant becomes non-condensable",
                "The condenser fan draws less current",
              ],
              answer: 0,
              explain: "Raising head pressure increases the compression work per kilogram of refrigerant, and the higher liquid temperature entering the metering device reduces the useful cooling per kilogram. Efficiency falls at both ends, so the plant runs longer and draws more. Coil icing is an evaporator-side symptom with different causes.",
            },
            {
              q: "Which statement about replacing an HFC system with a natural refrigerant is correct?",
              options: [
                "Natural refrigerants can be charged into any existing system as a drop-in replacement",
                "Natural refrigerants have very low GWP but bring toxicity, high-pressure or flammability hazards that must be designed for",
                "Natural refrigerants have no environmental benefit",
                "Ammonia is preferred for domestic split systems because it is non-toxic",
              ],
              answer: 1,
              explain: "R717, R744, R290 and R600a all have negligible GWP compared with HFCs, which is the attraction. But ammonia is toxic, CO2 operates at very high pressures needing rated components, and hydrocarbons are flammable and charge-limited by room volume — so the system must be designed, labelled and serviced for that refrigerant, never converted casually.",
            },
            {
              q: "In a conditioned office, replacing 4.8 kW of lighting with 1.92 kW of LEDs saves more than the lighting energy alone. Why?",
              options: [
                "LEDs produce more lumens per watt at night",
                "The 2.88 kW of heat no longer released into the space is load the air-conditioning no longer has to remove",
                "LED drivers correct the building's power factor",
                "The lighting circuit can then be downsized to save copper",
              ],
              answer: 1,
              explain: "Lighting energy ends up as heat inside the conditioned space, so removing 2.88 kW of lighting removes 2.88 kW of cooling load. At a system COP of about 3 that saves close to another kilowatt of compressor power whenever cooling is running — a genuine bonus that is often left out of the payback calculation.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "renewable-energy-technologies",
          title: "Renewable energy: how each one works",
          minutes: 14,
          simple: "Renewable energy comes from something that keeps refilling itself — sun, wind, falling water, heat in the ground, the sea, or growing plants. Almost all of them end up doing the same thing: spinning a generator. Solar panels are the odd one out because they make electricity directly.",
          refs: REFS_RENEW,
          content: `## What counts as renewable

Renewable energy is energy from a source that replenishes itself, can be used again, or is effectively limitless — the sun being the obvious example. These are sometimes called green energy technologies: they use natural resources that are continually replaced.

The sector is usually grouped in three:

| Common technologies | Energy-harnessing technologies | Grid-strengthening technologies |
|---|---|---|
| Solar | Geothermal | Battery storage |
| Wind | Marine (ocean thermal, tidal, wave) | Smart technology |
| Hydro | Bioenergy | |

Keep one mechanical idea in mind as you read: apart from photovoltaics, every technology below ends up spinning a turbine coupled to a generator. Only the thing doing the spinning changes.

## Solar

**Photovoltaic (PV).** A PV cell is a large semiconductor junction. Photons striking it free charge carriers, and the junction's built-in field pushes them one way, producing d.c. at the terminals. Cells are wired into modules, modules into strings, and an inverter converts the d.c. to grid-synchronised a.c. There are no moving parts.

**Solar thermal.** Instead of making electricity directly, collectors concentrate sunlight to heat water or oil. In a concentrated solar thermal plant the hot fluid raises steam, and the steam drives a turbine and generator. The same principle at domestic scale is the solar hot water system on a roof.

Australia has the highest rate of household rooftop solar uptake in the world. In 2019 small-scale solar produced 22.3% of Australia's clean energy and 5.3% of its total electricity, and PV is installed at every scale from a few kilowatts on a house to utility-scale farms of hundreds of megawatts.

- **Strengths:** no fuel, no moving parts, silent, modular from watts to megawatts, generates near the load on rooftops, output peaks with summer air-conditioning demand.
- **Limits:** nothing at night, much less on heavily overcast days, output falls as cell temperature rises, needs area, and high penetration creates voltage-rise and minimum-demand problems for the distribution network.

## Wind

Moving air passing the aerofoil blades of a turbine produces lift, which turns the rotor. The rotor drives a generator, usually through a gearbox or as a direct-drive machine. Output is fed through power electronics to match grid voltage and frequency.

Wind is currently the cheapest source of large-scale renewable energy in Australia. In 2020 wind farms produced 35.9% of Australia's clean energy and 9.9% of its total electricity, up from 35.4% and 8.5% in 2019. Australian wind generation grew from roughly 19 500 GWh in 2019 to about 22 600 GWh in 2020, with Victoria and South Australia the biggest generators. Eight wind farms totalling 837 MW were commissioned in 2019, with another 30 under construction or financially committed.

- **Strengths:** lowest cost per MWh at large scale, high capacity factors at good sites, land underneath stays farmable, often generates strongly at night when solar cannot.
- **Limits:** variable and not dispatchable, best sites are often far from load and need transmission, visual and noise objections, and turbine blades are difficult to recycle.

## Hydro

Water flowing from a high level to a lower one spins a turbine coupled to a generator, converting the mechanical energy of the moving water into electrical energy. In a large scheme, water is released from a dam down a penstock to a river below.

**Pumped hydro** turns the same equipment into storage. When surplus renewable energy is available, it pumps water from a lower reservoir back up to a higher one; when the grid needs power, the water runs back down through the turbines. It is effectively a very large battery. The proposed expansion of the Snowy Mountains Scheme works on this principle and could increase the scheme's energy-producing capacity by around 50%. Hydro supplied roughly 23.3% of Australia's renewable generation in 2020.

- **Strengths:** fully dispatchable, very fast response, huge storage capacity, long asset life, decades of proven operation.
- **Limits:** needs specific topography and reliable water, high capital cost and long build times, drought-sensitive, and significant impact on river ecosystems and land use.

## Geothermal

Heat from deep underground is used to raise steam, and the steam drives turbines. Where the resource is hot and shallow, this is cheap, continuous, weather-independent generation. Iceland generates about 25% of its energy geothermally and the Philippines about 17%; El Salvador, Kenya, the Philippines, Iceland, New Zealand and Costa Rica all exceed 15% of electricity from geothermal.

Australia lacks significant volcanic activity, so large-scale geothermal generation is not commercially viable here. Smaller-scale geothermal for residential heating and cooling — ground-coupled heat pumps that use stable ground temperature as the heat source and sink — is in early development and is genuinely promising, because ground temperature is far more stable than air temperature, which lifts heat pump efficiency at both ends of the year.

- **Strengths:** continuous baseload output regardless of weather or time of day, small surface footprint.
- **Limits:** depends entirely on geology, deep drilling is expensive and risky, and in Australia large-scale projects have not proven commercial.

## Marine energy

Marine energy covers three quite different resources.

**Ocean thermal.** In tropical regions surface water can be as much as 20°C warmer than deep water. A heat-exchange process between the warm and cold streams runs a low-temperature power cycle to generate electricity. It is essentially a heat engine working on a small temperature difference, which is why the efficiency is low and the equipment is large.

**Tidal.** Tides move enormous volumes of water, and coastal topography can accelerate the flow through narrows. Tidal generators take energy from these regular flows. The great advantage is predictability — tides are known years ahead. Australia's biggest tides are on the Kimberley and Pilbara coasts of northern Western Australia, with other prospects in the Torres Strait, Broad Sound in Queensland and Bass Strait.

**Wave.** Wind blowing across the ocean builds waves, and wave-power plants convert the undulating motion into electricity. Wave energy is strongest where trade winds and ocean swells are — in Australia, along the southern coastline.

- **Strengths:** very high energy density, tidal output is precisely predictable, resource is close to many coastal population centres.
- **Limits:** seawater is brutally corrosive and storms destroy equipment, maintenance access is difficult and costly, marine environmental impacts must be managed, and the technologies are far less commercially mature than wind or solar.

## Bioenergy

Biomass means all plant and animal material — wood, straw, grain crops, manure and organic waste. Bioenergy extracts the energy in that material in one of three ways:

1. **Combustion** — burn the biomass and use the heat to raise steam that drives a turbine and generator.
2. **Anaerobic digestion** — bacteria break down organic matter such as manure, wastewater and food waste in the absence of oxygen, producing a methane-rich biogas that is burned in an engine or turbine.
3. **Aerobic digestion** — bacteria and oxygen break down organic and biological waste.

Newer processes convert biomass directly into petrol and diesel substitutes — biofuel.

Common Australian bioenergy sources are sugar cane residue (bagasse), landfill gas, agricultural crop and livestock waste, household garbage, sewage gas, wood waste, and black liquor from paper-making. The Australian bioenergy sector generates roughly 3314 GWh a year, about 1.4% of total electricity generation and around 5% of clean energy generation.

- **Strengths:** dispatchable and controllable like a conventional thermal plant, turns a waste stream into a resource, captures landfill methane that would otherwise escape.
- **Limits:** combustion still produces emissions and air pollutants, fuel must be collected and transported, and the carbon balance only works if the biomass is genuinely a residue or is regrown.

## Hybrid schemes

Renewables are often combined. Biomass with wind, or solar with wind, use two resources whose availability patterns differ so the combined output is steadier. A hybrid scheme can also pair a renewable with a conventional source — solar plus a diesel generator is a common remote-area configuration, where the solar carries the day and the set covers the gaps.

## The Australian generation picture

Electricity generation in 2020 by fuel:

| Source | Share |
|---|---|
| Coal | 62.0% |
| Renewables | 27.7% |
| Gas | 9.9% |
| Waste coal mine gas | 0.4% |
| Liquids | 0.1% |

And within that renewable share:

| Technology | Share of renewable generation |
|---|---|
| Wind | 35.9% |
| Small-scale solar | 23.5% |
| Hydro | 23.3% |
| Large-scale solar | 10.9% |
| Bioenergy | 5.0% |
| Medium-scale solar | 1.4% |

Renewables supplied 24% of Australian electricity in 2019 and 27.7% in 2020.

Large-scale renewable projects under way or financially committed between 2017 and August 2021 give a sense of the investment involved:

| State/territory | Capacity (MW) | Investment | Jobs created |
|---|---|---|---|
| ACT and NSW | 3778 | $5841 million | 4324 |
| Victoria | 2987 | $4518 million | 2821 |
| Queensland | 2661 | $4185 million | 3294 |
| South Australia | 1517 | $2396 million | 992 |
| Western Australia | 328 | $1854 million | 1661 |
| Northern Territory | 64 | $119 million | 272 |

State and territory renewable electricity targets:

| Jurisdiction | Target |
|---|---|
| ACT | 100% by 2019 — achieved, aiming for zero net emissions by 2045 |
| NSW | No target |
| Victoria | 50% by 2030 |
| Tasmania | 200% by 2040 |
| South Australia | 100% by 2030 |
| Western Australia | No target |
| Northern Territory | 50% by 2030 |
| Queensland | 50% by 2030 |

Tasmania's 200% target is not a misprint — it means generating twice its own consumption, with the surplus exported. Apart from the ACT's 2045 date, the states and territories have set zero net emission targets for 2050.

## What to remember

- Every renewable except PV works by spinning a turbine; only the driver changes.
- Solar PV converts light directly to d.c.; solar thermal makes heat and then steam.
- Wind is the cheapest large-scale renewable and the largest contributor to Australia's clean energy.
- Pumped hydro is storage, not generation — it is a very large rechargeable battery.
- Geothermal is continuous but geology-dependent, and not commercial at scale in Australia.
- Marine energy covers ocean thermal, tidal and wave; tidal is uniquely predictable.
- Bioenergy is dispatchable and turns waste into energy, but it still burns something.`,
          quiz: [
            {
              q: "What makes photovoltaic generation fundamentally different from the other renewable technologies?",
              options: [
                "It is the only one that produces alternating current directly",
                "It converts light straight into electricity in a semiconductor, with no turbine or generator involved",
                "It is the only one that works at night",
                "It is the only one covered by the Renewable Energy Target",
              ],
              answer: 1,
              explain: "Wind, hydro, geothermal, marine and bioenergy all end up turning a turbine coupled to a generator. A PV cell has no moving parts at all — photons free charge carriers in a semiconductor junction and the cell delivers d.c., which an inverter then converts to a.c.",
            },
            {
              q: "Why is pumped hydro described as a battery rather than a generator?",
              options: [
                "It uses lithium-ion cells to store the water's energy",
                "It consumes surplus energy to pump water uphill and returns it later by letting the water fall through turbines",
                "It generates continuously with no input",
                "It stores electricity directly in the dam wall",
              ],
              answer: 1,
              explain: "A pumped hydro scheme is a net consumer of energy — it spends surplus renewable generation lifting water to a high reservoir, then recovers most of it when demand rises. It shifts energy in time rather than creating it, which is exactly what a battery does. The proposed Snowy expansion works this way.",
            },
            {
              q: "Ocean thermal energy conversion depends on which physical condition?",
              options: [
                "The regular rise and fall of the tide",
                "A temperature difference of up to about 20°C between warm surface water and cooler deep water in tropical regions",
                "Wind blowing across the ocean surface",
                "Salinity differences between river mouths and open ocean",
              ],
              answer: 1,
              explain: "Ocean thermal runs a heat-exchange power cycle between warm surface water and cold deep water, which in the tropics can differ by as much as 20°C. Tidal energy uses the tide's flow, and wave energy uses wind-driven surface motion — three separate marine resources that are often lumped together.",
            },
            {
              q: "Which renewable technology contributed the largest share of Australia's clean energy generation in 2020?",
              options: ["Hydro", "Small-scale solar", "Wind", "Bioenergy"],
              answer: 2,
              explain: "Wind supplied about 35.9% of renewable generation and 9.9% of total electricity in 2020, ahead of small-scale solar at 23.5% and hydro at 23.3%. Bioenergy was around 5%. Wind is also currently the cheapest source of large-scale renewable energy.",
            },
            {
              q: "Why is large-scale geothermal generation not commercially viable in Australia?",
              options: [
                "Australian law prohibits deep drilling",
                "Australia has no significant volcanic activity, so accessible high-temperature resources are scarce",
                "Geothermal plants cannot connect to the National Electricity Market",
                "Geothermal output is too variable to be useful",
              ],
              answer: 1,
              explain: "Geothermal depends entirely on geology, and Australia lacks the shallow high-temperature resources that make it cheap in Iceland, New Zealand or the Philippines. Small-scale ground-coupled systems for residential heating and cooling are a different matter and are in early development here. Variability is not the issue — geothermal is one of the steadiest sources there is.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "storage-grid-and-your-responsibilities",
          title: "Storage, the grid and the technician's duty",
          minutes: 13,
          simple: "Batteries and smart controls let a grid full of sun and wind stay steady. Connecting them is licensed work with its own standards. And on every job you have paperwork and reporting duties if something goes wrong environmentally.",
          refs: REFS_GRID,
          content: `## Why storage is the missing piece

Solar generates when the sun is up and wind generates when the wind blows, neither of which matches when people want power. Storage decouples generation from demand, which is why batteries are classed as a **grid-strengthening technology** alongside smart technology rather than as generation.

A battery absorbs energy chemically and releases it when needed. Two chemistries worth distinguishing:

| Type | Characteristics |
|---|---|
| Lithium-ion | High energy density, mature and widely deployed, but capacity degrades with cycling and the cells are flammable |
| Vanadium flow (VFB) | Stores energy in a non-flammable liquid electrolyte in external tanks; does not degrade with cycling, so cycle life is very long; lower energy density and larger footprint |

The distinction is practical. Cycle-life degradation and fire risk drive the design of a lithium-ion installation — enclosure, separation, ventilation and location. Flow batteries trade energy density for durability and a much lower fire hazard, which suits sites where space is cheap and cycle count is high.

### The scale that has arrived

- The Moss Landing facility in Monterey, California — 300 MW / 1200 MWh — was the world's largest battery energy storage system in early 2021, with the first stage connected to the US grid in December 2020.
- In Australia, the first stage of a 700 MW / 2800 MWh system at the Eraring Power Station in New South Wales was scheduled for commissioning by late 2022 — more than double Moss Landing's capacity.
- The Hornsdale Power Reserve in South Australia, Australia's largest lithium-ion battery, began a 50 MW / 64.5 MWh expansion in 2020. The original installation was reported to have saved consumers over $150 million in its first two years, mainly by providing frequency control services faster and cheaper than thermal plant could.
- Around 7 GW of battery projects have been proposed or are in planning for connection by 2024, including about 900 MW committed or significantly progressed.
- ARENA has funded large-scale battery storage projects in Australia since 2012.

Note the two numbers used for every battery: **megawatts** is how fast it can deliver, **megawatt hours** is how much it holds. A 300 MW / 1200 MWh battery can run at full output for four hours. Confusing the two is the most common error in discussing storage.

## Distributed energy resources and virtual power plants

Small battery installations in homes give the householder backup power, but they can do much more when aggregated. A **distributed energy resource (DER)** is any small generation or storage unit at a customer's premises. DERs include:

- rooftop solar PV
- battery storage
- thermal energy storage
- electric vehicles and their chargers
- smart meters
- home energy management systems

When thousands of DERs are coordinated by a central controller so they act like a single dispatchable plant, the result is a **virtual power plant (VPP)**. The grid sees one controllable resource; the households see their own solar and battery working as normal, with a payment for participating.

Coupling many batteries together at one site is called grid-scale or **large-scale battery storage (LSBS)**. Same technology, different scale and different connection standard.

## Connecting generation to the grid

Embedded generation — anything a customer connects that can export into the network — is licensed electrical work governed by a specific set of Australian standards:

| Standard | Covers |
|---|---|
| AS/NZS 3000 | The wiring rules that apply to the installation as a whole |
| AS/NZS 5033 | Installation and safety requirements for photovoltaic arrays |
| AS/NZS 4777.1 | Grid connection of energy systems via inverters — the installation requirements |
| AS/NZS 4777.2 | Inverter requirements, including protection settings |
| AS/NZS 5139 | Safety of battery systems for use with power conversion equipment |

Points that matter on every grid-connect job:

- **Network approval first.** The distribution network service provider must approve the connection, and will often set an export limit or require the inverter to be capable of remote curtailment. Installing first and asking later can mean disconnection.
- **Anti-islanding protection.** If the grid supply fails, the inverter must disconnect and stop exporting. Without it, a line worker could be working on a circuit that a customer's inverter is still energising. This is a life-safety function, not a formality.
- **Accreditation and incentives.** Small-scale certificates under the SRES are only available where the installation is done by an appropriately accredited installer to the relevant standards. Cutting that corner costs the customer the rebate.
- **Labelling and isolation.** Multiple sources of supply mean multiple isolation points. Switchboard labelling, clear shutdown procedures and correct signage are what keep the next person alive.

>! A PV array is live whenever there is daylight. There is no isolator between the sun and the module. Treat d.c. strings as energised at all times, respect the d.c. arc hazard, and never assume that opening the a.c. main switch has made the array safe. Battery systems store energy that no isolator removes — follow the manufacturer's shutdown sequence exactly.

## Smart technology

The other grid-strengthening technology is the control layer: smart meters that measure and communicate interval by interval, demand response that shifts flexible loads away from peaks, and load management that charges vehicles and heats water when generation is plentiful. It is cheaper to move a load than to build generation for it — which is the whole logic of demand management.

## Workplace policies, documents and records

Employers commonly have policies requiring staff to minimise environmental impact — managers factor sustainability into planning, promote environmental awareness, and make sure employees know their responsibilities. As a licence-holder you work to the wiring rules and standards *and* apply environmentally sustainable procedures.

National energy market oversight sits with three bodies under the energy council arrangements between governments:

| Body | Role |
|---|---|
| Australian Energy Market Commission (AEMC) | Rule-maker and market development adviser |
| Australian Energy Market Operator (AEMO) | System operator |
| Australian Energy Regulator (AER) | Economic regulator and rule enforcer |

### Your responsibilities as an employee

- Dispose of waste in an environmentally safe way.
- Follow energy-efficient work practices.
- Follow the recycling procedures your workplace has set up.
- Reuse work resources where you can.
- Use renewable energy sources where they are available.
- Improve work practices in ways that maintain or improve the ecosystem, the workplace and the community.
- Complete the required reports and workplace documentation.

### The paperwork that carries the evidence

Records can be kept electronically in databases and spreadsheets, or on paper. The documents relevant here include:

- safety data sheets (SDS)
- reports from hazard inspections
- checklists of materials
- the manufacturer's instructions for installing the product and for maintaining it
- manufacturer literature covering specifications and product features, energy efficiency figures included
- reports and job sheets
- meter readings, together with records of energy used
- wastage reports that record how much waste was generated

These are not busywork. Meter readings before and after a retrofit are what prove the saving; wastage reports are what show a waste-reduction program is working; the SDS is what tells you how to deal with the chemical you just spilled.

## Reporting an environmental incident

If something goes wrong — a spill, a refrigerant release, a breach of a licence condition — reporting is part of the job.

**Internally**, report to whichever applies:

- the person named in the workplace reporting procedure
- your supervisor or manager
- the organisation's CEO

**Externally**, a report may need to go to:

- **industry associations**, which know the legislative requirements for the industry and can advise on how to report the event
- **the state or territory EPA**, the legal body that enforces environmental and biodiversity law and publishes the reporting process

Report promptly and factually: what was released, how much, where it went, when, what was done to contain it, and who was told. An honest early report is treated very differently from one that emerges later.

## Ongoing checks

Sustainable practice is verified, not assumed. Checks that keep work honest:

1. Inspect and test the installation before leaving site, and record the results.
2. Take meter readings or log power after a change so the saving is measured, not claimed.
3. Confirm waste has been separated and sent to the right stream — scrap metal, lamp recycler, battery collection, licensed waste contractor.
4. Confirm recovered refrigerant is in a labelled recovery cylinder and goes to a licensed destruction or reclaim facility.
5. Check the job against the client's and your employer's environmental policy before sign-off.
6. Complete the job sheet, wastage report and any energy readings while you are still on site.
7. Audit periodically — spot-check jobs against the procedure rather than waiting for an incident.

## On the job

- MW is power, MWh is energy — a battery needs both figures to be described.
- Lithium-ion degrades with cycling and is flammable; vanadium flow does not degrade and uses a non-flammable electrolyte.
- DERs plus coordination equals a virtual power plant.
- Grid-connect work needs network approval, anti-islanding, accreditation and correct labelling.
- A PV array cannot be switched off — treat it as live in daylight.
- Report environmental incidents internally first, then externally to the EPA or industry association as required.
- Measure and record; an unmeasured saving is only an opinion.`,
          quiz: [
            {
              q: "A battery energy storage system is rated 300 MW / 1200 MWh. What does that tell you?",
              options: [
                "It can deliver 300 MW for 1200 hours",
                "It can deliver 300 MW for four hours before it is discharged",
                "It stores 300 MWh and delivers 1200 MW",
                "It has an efficiency of 300 divided by 1200",
              ],
              answer: 1,
              explain: "The MW figure is the rate of delivery and the MWh figure is the quantity stored, so 1200 MWh ÷ 300 MW = 4 hours at full output. Mixing the two up is the most common mistake in discussing storage — a battery with big MW and small MWh is a sprinter, not a marathon runner.",
            },
            {
              q: "What is the safety purpose of anti-islanding protection in a grid-connected inverter?",
              options: [
                "It prevents the customer's battery from overcharging",
                "It disconnects the inverter when grid supply is lost, so the inverter cannot energise a network that line workers believe is dead",
                "It limits the amount of energy exported to the grid",
                "It protects the inverter from lightning strikes",
              ],
              answer: 1,
              explain: "Without anti-islanding, a customer's inverter could keep energising a section of network during an outage, putting anyone working on that line at risk. It is a life-safety function required by AS/NZS 4777.2. Export limiting is a separate network requirement, and surge protection is different again.",
            },
            {
              q: "Which best describes a virtual power plant?",
              options: [
                "A computer simulation of a power station used for training",
                "Many distributed energy resources — rooftop PV, home batteries, EV chargers — coordinated so they behave like a single dispatchable plant",
                "A large battery installed at a substation",
                "A power station that generates only during peak demand",
              ],
              answer: 1,
              explain: "A VPP aggregates customer-owned DERs under central control so the grid can dispatch them as one resource, while each household keeps using its own solar and battery normally. A single large battery at a substation is large-scale battery storage, which is a different arrangement.",
            },
            {
              q: "You spill several litres of compressor oil into a stormwater drain on a commercial site. What is the correct reporting path?",
              options: [
                "Clean up quietly and say nothing, since nobody saw it",
                "Report internally to the person named in the reporting procedure or your supervisor, and externally to the EPA or industry association as required",
                "Report only to the customer, since it happened on their property",
                "Report it on the next scheduled monthly return",
              ],
              answer: 1,
              explain: "An unplanned event or environmental breach triggers internal reporting to the nominated person, supervisor or CEO, and may require external reporting to the state or territory EPA, with industry associations able to advise on the process. Stormwater goes to waterways, so this is exactly the kind of release that must be reported promptly and factually.",
            },
            {
              q: "Why is a vanadium flow battery sometimes chosen over lithium-ion for a high-cycle installation?",
              options: [
                "It has much higher energy density for the same footprint",
                "It does not degrade with cycling and stores energy in a non-flammable liquid electrolyte",
                "It requires no inverter or power conversion equipment",
                "It can be installed without complying with AS/NZS 5139",
              ],
              answer: 1,
              explain: "Flow batteries hold their energy in liquid electrolyte in external tanks, so cycling does not consume the cells the way it does in lithium-ion, and the electrolyte is not flammable. The trade-off is lower energy density and a bigger footprint — and every battery installation still has to meet the applicable standards.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
