/* =========================================================================
   Course content, module R1.1 — Refrigeration: basic principles.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 1.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const R_HISTORY = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — history of refrigeration, scope of the industry and classification of applications",
  ];
  const R_FOOD = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — food preservation, spoilage agents and refrigerated storage",
  ];
  const R_HEAT = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — matter, molecular theory, heat and the three modes of heat transfer",
  ];
  const R_UNITS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — temperature scales, work, power and energy",
  ];
  const R_LATENT = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — heat quantity, specific heat, sensible and latent heat",
  ];
  const R_PRESSURE = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — pressure, atmospheric pressure, gauge and absolute pressure",
  ];
  const R_PT = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — the pressure-temperature relationship, saturation, superheat and subcooling",
  ];
  const R_SYSTEM = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — the standard refrigeration system and its component parts",
  ];
  const R_CYCLE = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — the standard refrigeration cycle, compression, discharge, condensing and suction conditions",
  ];
  const R_REFRIG = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerants, numbering, selection characteristics and safety classification",
  ];
  const R_ENV = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — environmental effects of refrigerants, Montreal Protocol and refrigerant licensing",
  ];
  const R_PERF = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerant properties and performance, temperature glide, lubricants and system considerations",
  ];

  const MODULES = [
    {
      id: "v1-basic-principles",
      stream: "v1",
      title: "R1.1 · Refrigeration: basic principles",
      blurb:
        "The foundation chapter: where refrigeration came from, what it is used for, and the physics of heat, pressure, change of state and the vapour-compression cycle every technician works with.",
      lessons: [

        /* ================================================================
           1 — History, scope and classification
           ================================================================ */
        {
          id: "history-scope-and-applications",
          title: "History of refrigeration, the scope of the industry and how applications are classified",
          minutes: 13,
          simple:
            "Long before machines, people cut ice from frozen lakes in winter and stored it to keep food cold in summer. Machines that make cold on demand are only about 190 years old, and they now sit behind nearly everything you eat, buy and work in. The trade splits that huge field into six family groups so it can be studied and priced.",
          refs: R_HISTORY,
          content: `## Cold has always been valuable, machines are recent

Every job you will ever do in this trade rests on one idea: heat can be moved from a place where it is not wanted to a place where nobody minds it. For most of human history that was done by harvesting cold rather than making it. Snow, ice and cold spring water were used to keep food edible for as far back as records go. Refrigeration became a commercial business in the 18th century, when ice cut from frozen lakes and ponds in winter was packed into insulated stores and sold through summer. Ice was then shipped from cold climates to hot ones, which worked poorly at first because so much of the cargo melted on the way. The insulated icebox in the home followed, and became common through the 19th century.

The machine age of refrigeration starts with a handful of dates worth remembering.

| When | What happened |
|---|---|
| about 1820 | Ice first made artificially, as a laboratory curiosity |
| 1824 | Michael Faraday describes the principle behind absorption refrigeration |
| 1834 | Jacob Perkins patents the vapour-compression apparatus that is the ancestor of every system you will service |
| 1855 | First practical absorption refrigerating machine introduced in Germany |
| 1857 | James Harrison begins developing a refrigerating machine in Australia using a Perkins compressor |
| 1870s | Harrison attempts a refrigerated meat shipment from Australia to England |
| about 1910 | Mechanical domestic refrigeration appears |
| 1918 | Kelvinator produces the first automatic domestic refrigerator |
| about 1923 | Fast freezing developed, starting the frozen food industry |
| 1928 | General Electric introduces the first sealed (hermetic) unit |
| late 1920s | Refrigeration plant first coupled to heating plant to give summer cooling |
| by 1940 | Practically all domestic units are hermetic; large commercial plant is established |
| late 1930s on | Vehicle air-conditioning begins its rapid growth |

Australia's part in this was not small. Harrison's plants in Victoria refrigerated breweries and perishable stores, and although his first sea shipment of meat failed when the ship broke down, the idea he proved was later carried by others and built the export trade this country still lives on.

The refrigerants tell their own story. Early machines used what we now call natural refrigerants: ammonia, carbon dioxide, methyl chloride and sulphur dioxide. They worked, but some were poisonous, some smelled appalling and some were flammable. When chlorofluorocarbons (CFCs) arrived in the 1930s they were treated as wonder chemicals — stable, non-toxic, non-flammable — and the industry expanded on the back of them. Half a century later those same properties turned out to be the problem, which is the subject of a later lesson.

## Why the industry got so big

In the early years the equipment was bulky, expensive, inefficient and needed an attendant on duty, so it was confined to ice plants, meat works and large stores. Three things changed that: precision manufacturing made small equipment possible, the safe refrigerants of the 1930s removed the fear factor, and the small sealed refrigerating unit made a domestic appliance practical. Today there is hardly a home or business in Australia without at least one refrigeration system.

The obvious uses — food processing, freezing, storage, transport and display, and comfort air-conditioning — are only part of it. Mechanical refrigeration also makes possible:

- freezing unstable ground so tunnels, mine shafts and dam foundations can be excavated
- manufacture of plastics and synthetic rubber
- controlled dough temperatures, so a baker gets more loaves from a bag of flour
- higher machine speeds in textile and paper mills
- cryogenic hardening treatments for tool steels.

The scale also explains why efficiency matters so much. The Australian Government report *Cold Hard Facts 2* found that refrigeration and air-conditioning equipment used around 22 per cent of all electricity generated in Australia in 2012. A trade that consumes a fifth of the nation's electricity cannot ignore how well its equipment runs.

## The six classes of application

For study and for describing your own work, applications are grouped into six families. The boundaries overlap, and plenty of jobs sit in two groups at once.

| Class | What it covers | Typical distinguishing feature |
|---|---|---|
| Domestic | Household refrigerators and freezers | Huge numbers of small sealed units; often more electronics than you expect |
| Commercial | Retail, restaurant, hotel and institutional fixtures for storing, displaying, processing and dispensing perishables | Merchandising matters as much as temperature |
| Industrial | Ice plants, meat and fish works, breweries, creameries, oil refineries, chemical and rubber plants | Larger plant, traditionally with a licensed operating engineer on duty |
| Marine and transport | Fishing vessels, ships' stores, refrigerated containers, truck bodies, rail cars | Rugged, weatherproof, self-contained, exposed to the elements |
| Comfort air-conditioning | Homes, offices, schools, shops, vehicles, aircraft | Primary purpose is human comfort |
| Industrial air-conditioning | Server and equipment rooms, process spaces, laboratories | Conditions the space for a product or process, not for people |

A few notes on the boundaries. Domestic units look simple and often are not: multiple independently controlled compartments, automatic defrost and automatic ice-making all sit behind a plain white door. Commercial refrigeration is being reshaped by two pressures — energy cost and environmental exposure — which is why you see smaller primary charges, secondary refrigerant loops and computerised control. The old test for industrial work was that an attendant was required; automatic control and remote plant monitoring have eroded that, but the size and the licensing expectations remain. Refrigerated containers earned marine and transport its own category, because a standard-size box can be loaded at a factory, trucked, railed, shipped and delivered without ever being opened.

Air-conditioning is worth one extra caution. It is refrigeration first, and control and distribution of air second. Within it there are four fields deep enough to specialise in: hydronics (chilled and heated water circulation), air distribution (ducting the right air quantity at the right velocity, temperature and humidity), the control system (electric, electronic, pneumatic or managed by a building management system), and the refrigeration plant itself. A qualified technician may specialise in one, but needs working knowledge of all four.

## What to remember

- Refrigeration moves heat; harvesting natural ice did the same job before machines existed.
- Perkins (1834) is the ancestor of vapour compression; Harrison put Australia into that story from 1857.
- The industry grew because equipment got small, safe and cheap, not because the physics changed.
- Six application classes: domestic, commercial, industrial, marine and transport, comfort air-conditioning, industrial air-conditioning — with fuzzy borders.
- Refrigeration and air-conditioning consumed roughly 22 per cent of Australia's electricity in 2012, which is why efficiency is now a design and service obligation, not a bonus.`,
          quiz: [
            {
              q: "A supermarket has a plant room feeding display cases, a cool room and a small office split system. Which classification best fits the display cases?",
              options: [
                "Industrial refrigeration, because the plant room is centralised",
                "Commercial refrigeration, because they store and display perishables for retail sale",
                "Comfort air-conditioning, because the store is occupied",
                "Transport refrigeration, because stock arrives by refrigerated truck",
              ],
              answer: 1,
              explain: "Commercial refrigeration is defined by the duty — storing, displaying, processing and dispensing perishables in retail and hospitality. A centralised plant room does not make it industrial: industrial work is distinguished by scale and, traditionally, an operating engineer on duty.",
            },
            {
              q: "Why did the arrival of CFCs in the 1930s matter so much to the growth of the industry?",
              options: [
                "They were the first refrigerants that could produce temperatures below 0 °C",
                "They were much cheaper to manufacture than ice",
                "They were stable, non-toxic and non-flammable, so refrigeration could safely be put into homes and small businesses",
                "They allowed compressors to be made hermetic for the first time",
              ],
              answer: 2,
              explain: "Ammonia, sulphur dioxide and methyl chloride all made cold perfectly well; what stopped them going into kitchens was odour, toxicity and flammability. CFCs removed that objection. The later ozone and global warming problems came from the very stability that made them attractive.",
            },
            {
              q: "A plant serves a computer room. It also happens to keep the adjoining office comfortable. How is it classified?",
              options: [
                "Comfort air-conditioning, because people benefit from it",
                "Industrial air-conditioning, because its primary purpose is conditioning air for equipment rather than for people",
                "Industrial refrigeration, because it runs continuously",
                "It cannot be classified until the room load is calculated",
              ],
              answer: 1,
              explain: "Classification follows the primary purpose. If people are conditioned incidentally while the design intent is to protect a process or equipment, it is industrial air-conditioning. The same plant can serve both, but the intent decides the class.",
            },
            {
              q: "Which statement about the scope of the industry is correct?",
              options: [
                "Refrigeration is used almost entirely for food and comfort cooling",
                "Refrigeration accounted for roughly 22 per cent of Australian electricity use in 2012, and is also used in ground freezing, plastics manufacture, baking and steel treatment",
                "Industrial applications no longer exist in Australia",
                "Air-conditioning is a separate industry with no refrigeration content",
              ],
              answer: 1,
              explain: "The Cold Hard Facts 2 figure of about 22 per cent of national electricity in 2012 shows the scale, and the process uses — freezing unstable ground, plastics, bakery dough control, cryogenic treatment of tool steel — show the breadth. Air-conditioning is refrigeration first and air handling second.",
            },
          ],
        },

        /* ================================================================
           2 — Food preservation and refrigerated storage
           ================================================================ */
        {
          id: "food-preservation-and-refrigerated-storage",
          title: "Food preservation and refrigerated storage",
          minutes: 14,
          simple:
            "Food goes off because of chemical reactions inside it and tiny organisms growing on it, and both of those slow right down when they get cold. Cold does not kill them, it just puts them to sleep — so the chilling has to start early and never stop. Getting the temperature, the humidity and the air movement right is the whole job.",
          refs: R_FOOD,
          content: `## Refrigeration preserves; it does not repair

Preserving perishables is still the largest single use of mechanical refrigeration, so a technician who understands what is happening inside the room makes better decisions about temperature settings, coil selection and defrost. The great advantage of refrigeration over salting, drying, canning or chemical preservation is that it keeps food in its original fresh state. Its great disadvantage is that the process must start soon after harvesting or slaughter and must run unbroken until the food is eaten. That means expensive, bulky equipment and an unbroken cold chain. No single preservation method wins in every case, and food is often preserved by two or three methods at once.

Two points that beginners get wrong: refrigeration cannot improve a product, and quality is a sliding scale rather than a switch. Food passes through many stages of deterioration long before it becomes unsafe. Wilted vegetables and over-ripe fruit are still edible but have already lost commercial value, and they are close enough to spoilage that they must be sold or processed immediately. The aim is to get the product under refrigeration at its peak.

## What actually spoils food

Deterioration is a chain of chemical changes driven by two kinds of agent.

- **Internal agents — enzymes.** These occur naturally in all organic material and keep working after harvest or slaughter.
- **External agents — micro-organisms.** Bacteria, yeasts and moulds grow in and on the surface of the food.

Either one alone can destroy a product; usually both are at work. Preservation of any kind is simply a matter of eliminating or controlling them.

| Spoilage agent | Favours | Held back or destroyed by |
|---|---|---|
| Enzymes (internal) | Warmth, free oxygen, moisture, slight acidity | Low temperature, boiling temperature, strong acidity, strong alkalinity, absence of moisture |
| Bacteria | Warmth, moisture, slight alkalinity, low enzyme activity | Low temperature, high temperature, strong acidity, strong alkalinity, concentrated salt or sugar solutions, dryness, sunlight or ultraviolet, antiseptics |
| Yeasts | Warmth, free oxygen, moisture, sugar present | Low temperature, high temperature |
| Moulds | Dampness, stagnant air, darkness, slight acidity | Sunlight or ultraviolet, high temperature, dryness |

Notice that low temperature appears in every "held back" column and in no "favours" column. Notice also that high temperature appears in both — heat destroys spoilage agents, cold only slows them. That is why a thawed product does not go back to being a fresh one.

Food also splits into two groups for storage purposes: products that are still alive at the time of storage, and products that are not. Fruit and vegetables are as alive after picking as before; cut off from the plant, they keep respiring using stored food reserves, which is what eventually causes decay. Refrigerating them slows enzyme activity and stretches that living period. Meat, poultry and fish are not alive, are far more open to microbial contamination and need tighter conditions.

## The three categories of refrigerated storage

| Category | What it means | Typical temperature |
|---|---|---|
| Short-term or temporary | Days, holding before sale or processing | Above the freezing point of the product, conditions relatively flexible |
| Long-term | Weeks or months of controlled holding | Usually just above the product's freezing point, conditions tightly held |
| Frozen | Months to a year or more | Between −12 °C and −24 °C, with −20 °C the usual choice |

For chilled storage the optimum temperature is normally just above the freezing point of the product itself — but there are famous exceptions, and getting them wrong costs a customer their stock.

- Bananas suffer peel injury below about 13 °C, so they are held at 13–15 °C.
- Celery develops soggy breakdown above 1 °C.
- Onions sprout above 0 °C, while potatoes turn sweet below about 4 °C.
- Squash, green beans and capsicum pit at or near 0 °C.
- Citrus develops rind pitting if held too warm, and scald or watery breakdown if held below its critical temperature.
- Most apple varieties keep best at −1 °C to 0 °C, but some varieties suffer soft scald, brown core or internal browning below 2 °C to 4 °C.

These are called cold storage diseases, and they are the reason you never simply set every room to the coldest setting that will not freeze the load.

## Humidity, air movement and desiccation

Unpackaged produce loses moisture from its surface by evaporation, which is called desiccation or dehydration. In fruit and vegetables it shows as shrivelling, wilting and lost weight; in meat and cheese as discolouration, shrinkage, trim loss and faster oxidation; eggs lose weight straight through the porous shell.

Moisture leaves the product whenever the vapour pressure at the product surface is higher than the vapour pressure of the surrounding air, at a rate proportional to that difference and to the exposed surface area. Low relative humidity and high air velocity both increase the difference, so both increase the loss. That suggests 100 per cent relative humidity and dead-still air would be perfect — except that those conditions grow mould and surface slime on meat, and stagnant air cannot carry heat away from the product at all. So the practical answer is a high but not saturated humidity, with enough air movement to refrigerate the load.

Here is the connection to the equipment you will select and service. **Room relative humidity is controlled mainly by the temperature difference (TD) between the room air and the boiling refrigerant in the evaporator.** The bigger that TD, the colder the coil surface, the more moisture it condenses out, and the drier the room.

| Requirement | Coil choice | Effect |
|---|---|---|
| High room RH (unwrapped meat, most vegetables) | Larger evaporator, small TD, typically around 4–6 K | Coil surface stays close to room temperature, little dehumidification |
| Low room RH (dried fruit, packaged goods, some processing rooms) | Smaller evaporator, larger TD, 8–12 K or more | Colder surface, more moisture removed |

When the product is stored in vapour-proof packaging, humidity and air velocity become far less critical. Hygroscopic products such as dried fruit actually want low humidity.

> A customer complaining that their unwrapped meat is drying out and losing saleable weight usually does not have a temperature problem. They have too much TD, too much fan velocity, or both. Fitting an evaporator with more surface running a smaller TD fixes what a thermostat adjustment never will.

## Freezing and frozen storage

For long preservation the product is frozen and held at about −20 °C or below. The storage life and final quality depend on four things: the nature and composition of the product, the care taken in selecting, handling and preparing it, the freezing method, and the storage conditions. Only good product frozen at its peak comes out good — freezing preserves the quality that was there when the door shut.

Some practice worth knowing:

- Variety matters for fruit and vegetables; some varieties simply do not freeze well.
- Produce should be harvested at peak maturity and frozen as fast as possible after harvest.
- Pork and fish are frozen soon after chilling because their fatty tissue is relatively unstable.
- Beef is often aged in a chiller for several days, which tenderises it by enzyme action — but ageing beyond six or seven days shortens its frozen storage life.
- Poultry frozen 12 to 24 hours after killing is more tender than poultry frozen immediately; going past 24 hours reduces storage life without adding tenderness.

## Product data you will meet in load calculations

Storage tables list, for each product, the storage temperature and humidity, the specific heat above and below freezing, the latent heat of freezing, the freezing point and the respiration heat. A few examples of the kind of data used:

| Product | Storage | RH (%) | Specific heat above freezing (kJ/kg·K) | Specific heat below freezing (kJ/kg·K) | Latent heat (kJ/kg) |
|---|---|---|---|---|---|
| Water and ice | 0 °C | — | 4.187 | 2.110 | 335 |
| Apples | −1 to 4 °C | 85–88 | 3.60 | 1.88 | 281 |
| Potatoes | 10 °C long term | 85–90 | 3.43 | 1.80 | 258 |
| Milk | 1.75 °C | — | 3.89 | 2.05 | 288 |
| Lettuce | 0 to 1 °C | 90–95 | 4.02 | 2.01 | 316 |
| Bananas | 13 to 15 °C | 85–95 | 3.35 | 1.76 | 251 |
| Ice-cream | −18 to −12 °C | — | 2.93 | 1.88 | 223 |

Note how high the specific heat of most fresh produce is — it is mostly water, so its figure sits close to that of water. Note too that the figure below freezing is roughly half the figure above it, for the same reason ice has about half the specific heat of water.

>! Never rely on a room thermostat alone to prove a cold chain. Product core temperature, not air temperature, decides whether food is safe and saleable. Where you are servicing food storage, treat a room found warm as a food safety event: tell the site contact in writing, record the time and temperatures, and let them decide about the stock. Never dispose of, or advise on the fitness of, someone else's food yourself.

## On the job

- Cold slows spoilage; it never reverses it. Product goes in at its peak or not at all.
- Chilled rooms sit just above the product freezing point, except for chill-sensitive items such as bananas, potatoes and some apple varieties.
- Frozen storage is −12 °C to −24 °C, most commonly −20 °C.
- Room humidity is set mainly by evaporator TD: big coil, small TD, wet room; small coil, big TD, dry room.
- Weight loss on unwrapped product is a design symptom, not a thermostat symptom.`,
          quiz: [
            {
              q: "A butcher complains of heavy trim loss and discolouration on unwrapped carcasses in a room that holds 1 °C correctly. What is the most likely cause?",
              options: [
                "The room is too cold and should be reset to 4 °C",
                "The evaporator TD is too large and the air velocity too high, so the room RH is low and the product is desiccating",
                "The product was frozen before it arrived",
                "The condenser is undersized",
              ],
              answer: 1,
              explain: "Desiccation is driven by the vapour pressure difference between product and air, which grows as RH falls and air velocity rises. A large evaporator TD condenses more moisture out of the room and drops the RH. Raising the room temperature would not fix it and would shorten storage life.",
            },
            {
              q: "Why is low temperature described as retarding spoilage agents rather than destroying them?",
              options: [
                "Because enzymes and micro-organisms are destroyed only by high temperature, strong acidity or alkalinity, dryness and similar conditions — cold merely slows their activity",
                "Because cold destroys bacteria but not enzymes",
                "Because freezing kills all micro-organisms but chilling does not",
                "Because spoilage agents are not present in fresh food",
              ],
              answer: 0,
              explain: "Cold appears only in the unfavourable column as a retardant. Heat, extreme pH, salt or sugar concentration, dryness and UV are the destroying conditions. This is why thawed food deteriorates quickly — the agents were only asleep.",
            },
            {
              q: "A room is being designed for storing dried fruit. What conditions suit it?",
              options: [
                "Very high humidity with almost no air movement",
                "The same conditions as unwrapped fresh meat",
                "Relatively low humidity, because dried fruit is hygroscopic and would absorb moisture",
                "Frozen storage between −12 °C and −24 °C",
              ],
              answer: 2,
              explain: "Hygroscopic products take up moisture from the air and go sticky and mouldy in a humid room. They are stored at low relative humidity — the opposite requirement to unwrapped fresh produce.",
            },
            {
              q: "Which storage temperature is correct for a frozen store holding packaged vegetables for long-term keeping?",
              options: [
                "0 °C to −5 °C",
                "About −20 °C, within a normal band of −12 °C to −24 °C",
                "−40 °C, since colder is always better",
                "Just above the freezing point of the product",
              ],
              answer: 1,
              explain: "Frozen storage runs between −12 °C and −24 °C with −20 °C the usual figure. Going far colder costs a great deal of energy for little added storage life; just above freezing point describes chilled, not frozen, storage.",
            },
          ],
        },

        /* ================================================================
           3 — Matter, molecules, heat and heat transfer
           ================================================================ */
        {
          id: "matter-molecules-and-heat-transfer",
          title: "Matter, molecules, heat and how heat travels",
          minutes: 13,
          simple:
            "Everything is made of tiny particles that are always jiggling, and heat is just how hard they jiggle. Heat always slides from the hotter thing to the colder thing, never the other way, and it does that by touching, by being carried along in moving air or water, or by radiating across empty space. A fridge does not make cold; it gives heat somewhere else to go.",
          refs: R_HEAT,
          content: `## Matter and the three states

Matter is anything that occupies space and has mass, and it appears in three states: solid, liquid and vapour. Water is the standard demonstration because you can see all three — ice, water and steam are the same substance with the same molecules, arranged and moving differently.

All matter is built from molecules, a molecule being the smallest particle that still has all the properties of the original material. Molecules are never still. That constant motion is **kinetic energy** — energy of motion — and how vigorous it is determines what we measure as temperature.

- In a **solid**, molecules are locked in position and vibrate about a fixed point. The material holds its shape.
- In a **liquid**, molecules have broken free of their fixed positions and slide over one another. The material takes the shape of its container.
- In a **vapour**, molecules move rapidly and independently, and fill whatever volume they are given.

Add heat to a solid and the molecules vibrate harder — kinetic energy rises and so does temperature. But at a certain temperature something different happens: the added heat stops increasing the molecular motion and instead breaks the molecules free of each other. The temperature stops rising even though heat is still going in. That energy has gone into **potential energy** — the freedom of the molecules — not into motion. That is a change of state, and it is the single most useful fact in refrigeration. The whole compression system exists to exploit the enormous energy absorbed and released when a substance changes state.

## Heat, cold and absolute zero

Heat is a form of energy — specifically, the energy of molecular motion. Take heat out of a substance and its molecules slow. Take all of it out and molecular motion ceases altogether; that temperature is **absolute zero**, 0 K, about −273 °C. Nothing can be colder because there is no motion left to remove.

Two consequences follow, and both are commonly misunderstood by learners and customers.

- **Cold is not a substance.** It is a word for low temperature. Nothing produces cold; heat is extracted and we describe the result as cold. A refrigerator does not push cold into food, it pulls heat out of food.
- **Heat is not destroyed.** It is picked up in one place and dumped in another. Heat leaks into a fridge through the walls, through the door seals, when the door is opened and when warm food is put inside. All of it, plus the heat the compressor motor adds, comes back out at the condenser.

!FIG[heat-flow]

Heat always travels from the warmer body to the cooler one, never the reverse. At the molecular level, fast-moving molecules collide with slow ones, giving up a little energy: the fast slow down a little, the slow speed up a little. Left alone, everything drifts to the same temperature.

The rate at which that happens is the technician's lever: **heat transfer rate is directly proportional to the temperature difference between the two bodies.** Double the temperature difference and you roughly double the heat flow through the same surface. That single sentence explains why a coil with a big TD dehumidifies more, why a dirty condenser drives head pressure up until the difference is large enough to shift the heat again, and why a room full of warm stock pulls the evaporator pressure up.

## The three modes of heat transfer

### Conduction

Conduction is energy passed by direct contact — between molecules within one body, or between two bodies in good thermal contact. Put one end of a steel rod in a fire and the other end soon becomes too hot to hold. In our work, conduction is what carries heat through a coil tube wall, through a coolroom panel, and out of a compressor body into the air.

Materials differ enormously in how well they conduct. Copper, aluminium and iron conduct well, which is why heat exchangers are made from them. Cork, timber, plastic foam and still air conduct badly; we call those poor conductors **insulators** and build coolroom panels out of them.

### Convection

Convection moves heat by physically carrying it in a moving fluid — air, water, brine or refrigerant. Warm air near a heater expands, becomes less dense and rises; colder, denser air moves in to replace it, and the loop set up is a convection current. Every fan-coil evaporator, every air-cooled condenser and every chilled water circuit is forced convection: we use a fan or pump to move the fluid far faster than natural buoyancy would.

### Radiation

Radiation transmits energy as waves, similar to light, and needs no contact and no medium — which is how the sun burns your skin on a cold day. Radiant energy travels in straight lines, can be blocked (the shade of a tree), absorbed (rough dark surfaces such as rock get very hot in sun), or reflected (light and shiny surfaces). It passes through transparent materials such as glass without heating them much, which is why a car with the windows up bakes in a car park.

## Controlling heat flow

Each mode can be encouraged where you want heat to move and obstructed where you do not.

| Mode | Encourage it by | Obstruct it by |
|---|---|---|
| Conduction | Large contact area, thin walls, good conductors such as copper and aluminium, clean surfaces | Insulating materials — foam, cork, timber, trapped still air; keeping surfaces separated |
| Convection | Moving the fluid faster: fans on coils, pumps on water circuits, correct air throw over the load | Sealing gaps, stopping air movement, dead air spaces in insulation, door seals and strip curtains |
| Radiation | Dark rough surfaces that radiate and absorb well | Light, shiny, reflective surfaces; shading; reflective foil in building fabric |

Field examples worth carrying with you:

- A condenser with dust and lint in the fins has lost conducting surface and blocked convection at the same time — head pressure climbs until the temperature difference grows enough to reject the same heat.
- Frost on an evaporator is an insulator sitting on a heat exchanger, and it also blocks the air path. Both effects push the coil colder, which makes more frost.
- Insulating a suction line is not cosmetic; it stops conduction and convection adding heat to the vapour before the compressor gets it.
- A coolroom in western sun with a dark roof absorbs radiant heat all afternoon; the same roof painted light reflects a good part of it.

>! Bare copper carrying hot discharge gas can sit above 100 °C, and a discharge line can exceed 130 °C in service. Conduction works perfectly well through skin. Treat every discharge line and compressor body as hot until you have measured it.

## What to remember

- Molecules move constantly; how hard they move is temperature, and stopping them completely would be 0 K or about −273 °C.
- Heat added at a change of state increases molecular freedom, not molecular speed — no temperature rise.
- Cold is not produced; heat is removed and relocated.
- Heat flows only from warm to cool, and its rate is proportional to the temperature difference.
- Conduction, convection and radiation — every fault you diagnose involves helping or hindering one of them.`,
          quiz: [
            {
              q: "A customer says their new freezer 'is not making enough cold'. What is the technically correct description of what the freezer does?",
              options: [
                "It generates cold in the evaporator and blows it into the cabinet",
                "It destroys heat inside the cabinet using electrical energy",
                "It removes heat from the cabinet and rejects it, plus the compressor's work, at the condenser",
                "It converts the heat inside the cabinet into cold air",
              ],
              answer: 2,
              explain: "Cold is not a substance and heat is not destroyed. The system transports heat from a low-temperature place to a higher-temperature place, and the condenser has to reject both the heat absorbed in the cabinet and the energy the compressor put in.",
            },
            {
              q: "An air-cooled condenser has heavy dust in the fins. Why does head pressure rise?",
              options: [
                "Dust adds mass to the coil which raises the refrigerant pressure",
                "Heat transfer is impaired, so the condensing temperature must rise until the temperature difference is large enough to reject the same heat",
                "Dust makes the refrigerant condense at a lower temperature",
                "The compressor automatically increases pressure when it senses a dirty coil",
              ],
              answer: 1,
              explain: "Heat transfer rate is proportional to temperature difference. If the coil's ability to transfer is reduced, the only way to shift the same quantity of heat is a bigger difference — a hotter condensing temperature, which shows on the gauge as higher head pressure.",
            },
            {
              q: "Which is an example of heat transfer by radiation?",
              options: [
                "Warm air rising off a heater and circulating around a room",
                "The far end of a steel rod becoming hot when one end is in a fire",
                "The sun heating a dark coolroom roof on a cool, still day",
                "A fan blowing room air across an evaporator",
              ],
              answer: 2,
              explain: "Radiation needs no contact and no medium, and dark rough surfaces absorb it well — hence the hot roof even when the ambient air is cool. Rising warm air is convection and the steel rod is conduction.",
            },
            {
              q: "During a change of state, heat is added but the thermometer does not move. Where is that energy going?",
              options: [
                "It is lost to the surroundings",
                "Into potential energy — increasing the freedom of the molecules from one another rather than their speed",
                "Into raising the pressure only",
                "Nowhere; the thermometer is faulty",
              ],
              answer: 1,
              explain: "Kinetic energy (molecular speed) is what a thermometer reads. At a change of state the added energy breaks molecules apart from one another instead of speeding them up, so it becomes potential energy — this is latent heat, and it is what a refrigerant uses to carry heat.",
            },
          ],
        },

        /* ================================================================
           4 — Temperature scales, work, power and energy
           ================================================================ */
        {
          id: "temperature-work-power-and-energy",
          title: "Temperature scales, work, power and energy",
          minutes: 12,
          simple:
            "Temperature tells you how hot something is, not how much heat it holds — a lit match is hotter than a bathtub but will not warm your bath. The Kelvin scale is just Celsius shifted so zero means no heat at all. Work, energy and heat are all measured with the same unit, the joule, and power is simply how fast you use them.",
          refs: R_UNITS,
          content: `## Temperature is intensity, not quantity

Temperature measures the heat *level* or intensity of a substance — the thermal kinetic energy of its molecules. It says nothing about how much heat is stored there. A lit match may be hot enough to burn you but contains nowhere near enough energy to boil a kettle of water at a far lower temperature. Confusing intensity with quantity is behind a lot of muddled fault-finding, so keep them separate: *temperature* is measured in °C or K, *quantity of heat* in kJ, and *rate of heat flow* in kW.

**Ambient temperature** is the temperature of the surroundings of a particular object. The air entering a condenser is the ambient for that condenser. A motor rated to deliver full power up to 40 °C ambient must have surrounding air no hotter than 40 °C to reach its rating — which is exactly why a plant room without ventilation cooks its own equipment.

Temperature is measured with a thermometer. The classic instrument uses the uniform expansion of a liquid — mercury or spirit — in a sealed glass tube with a bulb at the bottom. Others use expansion of a solid metal element (bimetal dial thermometers). In the field today, the common instrument is an electronic sensor — thermistor, thermocouple, RTD or infrared — with a digital display. Clamp-on probes for pipe temperature and calibrated digital thermometers for air and product are standard service kit.

## The Celsius and Kelvin scales

The Celsius scale sets zero at the freezing point of water at standard atmospheric pressure and 100 at its boiling point, dividing the interval into 100 equal degrees.

The Kelvin scale uses divisions of exactly the same size but places its zero at absolute zero, where molecular motion ceases and no heat remains. That point is 273 degrees below zero on the Celsius scale, so:

- K = °C + 273
- °C = K − 273

| Kelvin | Celsius | Point |
|---|---|---|
| 373 K | 100 °C | Water boils at standard atmospheric pressure |
| 293 K | 20 °C | Comfortable room |
| 273 K | 0 °C | Water freezes |
| 233 K | −40 °C | The one temperature where °C and °F agree |
| 0 K | −273 °C | Absolute zero |

Absolute temperature in kelvins must be used whenever a formula deals with a fundamental gas law — anything with pressures and volumes of gases in it. Using °C in those equations gives nonsense.

**Worked example 1.** A gas is at 100 °C. What is that in kelvins?
K = 100 + 273 = **373 K**

**Worked example 2.** Vapour enters a compressor suction port at −30 °C. What is the absolute temperature?
K = −30 + 273 = **243 K**

### Degrees versus kelvins for differences

A *difference* in temperature is written in kelvins, never in degrees Celsius, because the size of the division is identical on both scales. Superheat of 6 K, subcooling of 8 K, a coil TD of 5 K. If a coil boils at 2 °C and the pipe reads 8 °C, the superheat is 6 K — you do not write 6 °C, because 6 °C is a temperature, not a difference. Getting this right on a service report marks you as someone who understands what they are measuring.

## Work

Work is done when a force moves through a distance:

Work = force × distance = newtons × metres

One joule is the work done when a force of one newton moves its point of application one metre. So 1 J = 1 N·m.

**Worked example 3.** A car is driven along a road while the motor produces a force of 300 N. How much work is done over 20 km?

- Work = F × d = 300 N × 20 km
- Convert to metres: 20 km = 20 000 m
- Work = 300 × 20 000 = 6 000 000 N·m = 6 000 000 J = **6 MJ**

The unit of force needs one note: one newton accelerates one kilogram at one metre per second per second. A body falling freely under gravity accelerates at 9.807 m/s² (usually rounded to 9.8), so lifting a mass of m kilograms needs a force of m × 9.8 newtons.

## Power

Power is the rate of doing work — work divided by time. The unit is the watt, and one watt is one joule per second:

Power = (force × distance) / time, in watts

1 W = 1 J/s, and 1 kW = 1000 W.

**Worked example 4.** What power is needed to lift a mass of 300 kg at 5 metres per second?

- Force = mass × acceleration = 300 × 9.8 = 2940 N
- Distance = 5 m, in a time of 1 second
- Power = (2940 × 5) / 1 = 14 700 W = **14.7 kW**

The same unit measures the rate of heat flow, so a coil absorbing heat at 14.7 kW and a motor delivering 14.7 kW of shaft power are describing energy moving at the same rate. This is why refrigeration duty and motor input are both quoted in kW and can be compared directly — which is exactly what a coefficient of performance does.

**Worked example 5.** A plant produces 12 kW of refrigeration for 3 kW of electrical input.

- COP = useful cooling / energy input = 12 / 3 = **4.0**
- Every kilowatt bought at the switchboard moves four kilowatts of heat out of the room.

## Energy forms and where they appear in a plant

Three forms of energy matter in this trade — mechanical, electrical and heat — and all three are measured in joules.

Follow the energy through a normal vapour-compression unit:

1. **Electrical energy** flows into the motor from the switchboard.
2. The motor turns it into **mechanical energy** at the shaft.
3. The shaft drives the compressor, which does mechanical work on the refrigerant vapour, raising its pressure and temperature. That work appears in the refrigerant as **heat energy** — the heat of compression.
4. The condenser rejects both that heat of compression and the heat the evaporator picked up.

Nothing was destroyed anywhere in that chain; it was converted and moved. It also shows why the condenser must always reject more heat than the evaporator absorbed.

### Energy costs money

Electrical energy is billed in kilowatt hours: one kilowatt drawn for one hour.

**Worked example 6.** A compressor draws 5 kW and runs 10 hours a day. At an assumed 30 cents per kWh:

- Daily energy = 5 kW × 10 h = 50 kWh
- Daily cost = 50 × $0.30 = $15.00
- Annual cost = $15.00 × 365 = **$5475**

Now suppose a dirty condenser raises the running power by 15 per cent. The extra is 0.15 × $5475 = about $820 a year — from a fault a technician can clear in twenty minutes. This arithmetic is the strongest maintenance argument you will ever make to a customer.

## What to remember

- Temperature is intensity; quantity of heat is kJ; rate of heat flow is kW.
- K = °C + 273, and differences are always written in kelvins.
- Work = force × distance, measured in joules; power = work ÷ time, measured in watts.
- 1 W = 1 J/s, so a kW of cooling and a kW of motor input are directly comparable — that ratio is the COP.
- Electrical energy becomes mechanical work becomes heat, and all of it ends up at the condenser.`,
          quiz: [
            {
              q: "A technician records suction saturation 2 °C and suction line temperature 9 °C. How should the superheat be written?",
              options: [
                "7 °C, because both readings were in Celsius",
                "7 K, because it is a temperature difference",
                "280 K, by converting to absolute",
                "9 K, using the higher of the two readings",
              ],
              answer: 1,
              explain: "Differences are stated in kelvins because a kelvin division and a Celsius degree are the same size. 9 − 2 = 7 K of superheat. Writing 7 °C would describe a temperature, not a difference.",
            },
            {
              q: "Why can a lit match not boil a kettle of water even though the flame is far hotter than boiling point?",
              options: [
                "Because heat only flows from cold to hot at high temperatures",
                "Because temperature measures heat intensity, not the quantity of heat available",
                "Because the water has a lower specific heat than the flame",
                "Because the flame is at a different pressure",
              ],
              answer: 1,
              explain: "Intensity and quantity are separate things. The match has a high temperature but only a tiny quantity of heat energy; the kettle needs a large quantity, delivered at any temperature above 100 °C.",
            },
            {
              q: "A hoist lifts a 200 kg load at 2 m/s. What power is required?",
              options: [
                "400 W",
                "1.96 kW",
                "3.92 kW",
                "19.6 kW",
              ],
              answer: 2,
              explain: "Force = 200 × 9.8 = 1960 N. Power = force × distance ÷ time = 1960 × 2 ÷ 1 = 3920 W = 3.92 kW. Multiplying mass by velocity alone (400) forgets that force needs the acceleration due to gravity.",
            },
            {
              q: "A plant delivers 24 kW of cooling for 6 kW of input power. What is its COP, and what does it mean?",
              options: [
                "COP 0.25 — the plant is 25 per cent efficient",
                "COP 4 — each kilowatt of input moves four kilowatts of heat",
                "COP 18 — the difference between output and input",
                "COP 144 — the product of the two figures",
              ],
              answer: 1,
              explain: "COP is useful cooling divided by energy input: 24 ÷ 6 = 4. It is greater than one because the plant is not creating energy, it is moving heat that is already there using the input energy as the pump.",
            },
          ],
        },

        /* ================================================================
           5 — Sensible and latent heat
           ================================================================ */
        {
          id: "sensible-and-latent-heat",
          title: "Heat quantity, specific heat, sensible heat and latent heat",
          minutes: 14,
          simple:
            "Some heat changes the temperature of a thing and you can feel it — that is sensible heat. Other heat changes it from solid to liquid or liquid to gas without the thermometer moving at all — that is latent heat, and it is huge by comparison. Boiling a liquid inside a coil is how a refrigeration system swallows so much heat in such a small pipe.",
          refs: R_LATENT,
          content: `## Measuring a quantity of heat

The SI unit of heat is the joule, but joules are tiny for our purposes, so refrigeration works in kilojoules (1 kJ = 1000 J) and rates of heat flow in kilowatts. The benchmark quantity to memorise: **adding 4.187 kJ raises the temperature of 1 kg of water by 1 K**, and removing 4.187 kJ lowers it by 1 K.

## Specific heat capacity

Different materials need different amounts of heat to shift the same mass by the same number of degrees. The specific heat capacity of a substance is the heat, per unit mass, needed to change its temperature by a given amount, measured in kJ/kg·K.

| Material | Specific heat capacity (kJ/kg·K) |
|---|---|
| Water | 4.187 |
| Ice | 2.110 |
| Alcohol | 2.575 |
| Glycerine | 2.411 |
| Wood | 1.369 |
| Brick | 0.837 |
| Sulphur | 0.741 |
| Graphite | 0.710 |
| Iron | 0.540 |
| Glass | 0.494 |
| Copper | 0.397 |
| Mercury | 0.138 |
| Liquid ammonia (R717) at −15 °C | 4.605 |
| Liquid carbon dioxide (R744) at −15 °C | 2.512 |
| Liquid R22 at −15 °C | 1.088 |

Water is remarkable — it takes more heat per kilogram than almost anything else on the list, which is why water is such a good heat-carrying medium in chilled water systems, and why food (mostly water) has a high specific heat. Note also that the same substance has different values in different states: water 4.187, ice 2.110. Always use the value for the state the material is actually in.

## Sensible heat and the mcΔT calculation

**Sensible heat is heat that causes a change in temperature.** It is called sensible because you can sense the change — a thermometer registers it, your hand registers it. The general expression is:

Qh = m × c × ΔT

where Qh is the quantity of heat added or removed (kJ), m is mass (kg), c is specific heat capacity (kJ/kg·K) and ΔT is the temperature difference (K).

**Worked example 1.** How much heat must be removed from 30 kg of water to cool it from 95 °C to 20 °C?

- Qh = m × c × ΔT
- Qh = 30 × 4.187 × (95 − 20)
- Qh = 30 × 4.187 × 75
- Qh = **9420.75 kJ**

**Worked example 2.** A coolroom receives 500 kg of potatoes at 20 °C. They must be pulled down to 4 °C over 24 hours. Specific heat above freezing is 3.43 kJ/kg·K.

- Qh = 500 × 3.43 × (20 − 4) = 500 × 3.43 × 16 = **27 440 kJ**
- As a rate: 24 hours = 24 × 3600 = 86 400 seconds
- Load = 27 440 ÷ 86 400 = 0.318 kJ/s = **0.32 kW of product load**

That second step is worth practising, because a kilojoule figure means nothing to a plant until you divide it by the pull-down time to get kilowatts.

## Latent heat and change of state

**Latent heat is heat that brings about a change of state with no change in temperature.** Latent means hidden: the thermometer cannot see it. Two kinds matter:

- **Latent heat of fusion** — melting a solid to liquid, or freezing a liquid to solid. For water it is **335 kJ/kg** at 0 °C.
- **Latent heat of vaporisation** — boiling a liquid to vapour, or condensing vapour to liquid. For water at atmospheric pressure it is **2260 kJ/kg** at 100 °C.

Change of state runs both ways at the same temperature, and the quantity of heat is the same in each direction. Ice melts at 0 °C and water freezes at 0 °C; the 335 kJ you add to melt a kilogram is exactly the 335 kJ you must take out to freeze it again. The temperature at which a liquid begins to boil is called its **saturation** temperature, and while liquid and vapour coexist, further heating boils more liquid instead of raising the temperature.

!FIG[latent-plateau]

### The whole journey for 1 kg of water

Take 1 kg of ice at −50 °C at atmospheric pressure (100 kPa) and heat it until it is all steam.

| Stage | What is happening | Heat added |
|---|---|---|
| −50 °C to 0 °C | Sensible heat warming ice (about 2 kJ/kg·K × 50 K) | about 100 kJ |
| 0 °C ice to 0 °C water | Latent heat of fusion | 335 kJ |
| 0 °C to 100 °C | Sensible heat warming water (4.187 × 100) | about 420 kJ |
| 100 °C water to 100 °C steam | Latent heat of vaporisation | 2260 kJ |
| Total | | about 3115 kJ |

Look at the proportions. Of the whole 3115 kJ, more than 2500 kJ went in with no movement of the thermometer at all. The energy involved in changing state dwarfs the energy involved in changing temperature. Another way to say the same thing: freezing 1 kg of water at 0 °C removes as much heat as cooling 1 kg of water by 80 K (335 ÷ 4.187 = 80).

**This is the reason refrigeration systems boil a liquid.** If the evaporator merely warmed up a circulating liquid, you would need an enormous mass flow. Because it boils the refrigerant instead, a small mass of refrigerant absorbs a very large quantity of heat in a coil that fits inside a cabinet.

## A combined worked example

**Worked example 3.** An ice plant must turn 250 kg of water at 20 °C into ice at −18 °C in 8 hours. Find the load.

Break it into the three parts — you can never mix sensible and latent in one line.

1. Cool the water 20 °C to 0 °C: Q = 250 × 4.187 × 20 = **20 935 kJ**
2. Freeze the water at 0 °C: Q = 250 × 335 = **83 750 kJ**
3. Cool the ice 0 °C to −18 °C: Q = 250 × 2.110 × 18 = **9495 kJ**

- Total = 20 935 + 83 750 + 9495 = **114 180 kJ**
- Time = 8 h = 28 800 s
- Load = 114 180 ÷ 28 800 = **3.96 kW**

Notice that the freezing step alone is 73 per cent of the total. Any load calculation that forgets the latent term will be wildly undersized.

**Worked example 4.** How much heat must be removed to freeze 40 kg of ice-cream mix from 4 °C to −18 °C? Use specific heat above freezing 2.93, latent heat 223 kJ/kg, specific heat below freezing 1.88, and take the freezing point as −3 °C.

1. Sensible, 4 °C to −3 °C: 40 × 2.93 × 7 = **820.4 kJ**
2. Latent at −3 °C: 40 × 223 = **8920 kJ**
3. Sensible, −3 °C to −18 °C: 40 × 1.88 × 15 = **1128 kJ**
- Total = **10 868.4 kJ**

> Product freezing points are not 0 °C. Sugars, salts and dissolved solids depress the freezing point — ice-cream around −3 °C, lamb about −1.7 °C, cheese as low as −8 °C. Use the product's own figure, and change specific heat values at that point.

## On the job

- Sensible heat moves the thermometer; latent heat does not, and latent is much the larger.
- Qh = m × c × ΔT, with c chosen for the state the material is in.
- Water 4.187, ice 2.110, latent heat of fusion 335 kJ/kg, latent heat of vaporisation 2260 kJ/kg.
- Divide kilojoules by the pull-down time in seconds to get the kilowatts a plant must deliver.
- Refrigeration boils a liquid because change of state carries far more heat per kilogram than any temperature change could.`,
          quiz: [
            {
              q: "How much heat must be removed to cool 120 kg of water from 30 °C to 5 °C?",
              options: [
                "3000 kJ",
                "12 561 kJ",
                "502 kJ",
                "40 200 kJ",
              ],
              answer: 1,
              explain: "Qh = m × c × ΔT = 120 × 4.187 × 25 = 12 561 kJ. Option 4 uses the latent heat of fusion instead — but nothing is freezing here, so only the sensible term applies.",
            },
            {
              q: "Why does a refrigeration system boil its refrigerant rather than simply circulating a cold liquid?",
              options: [
                "Because boiling makes the refrigerant travel faster through the pipe",
                "Because the latent heat absorbed at a change of state is far greater per kilogram than any sensible heat change, so a small mass flow carries a large heat load",
                "Because liquids cannot absorb heat unless they boil",
                "Because vapour is easier to pump than liquid",
              ],
              answer: 1,
              explain: "For water, boiling absorbs 2260 kJ/kg against 4.187 kJ per kilogram per kelvin. The same principle holds for refrigerants, which is why a coil the size of a cabinet drawer can absorb kilowatts of load.",
            },
            {
              q: "A load calculation for freezing 500 kg of a product includes only the sensible heat above and below its freezing point. What is the consequence?",
              options: [
                "The plant will be slightly oversized",
                "No effect, because latent heat cancels out during freezing",
                "The calculated load will be far too small, because the latent heat of freezing is normally the largest single term",
                "The calculation will be correct if the room is held at −20 °C",
              ],
              answer: 2,
              explain: "In the worked ice example the latent term was 83 750 kJ of a 114 180 kJ total — nearly three-quarters. Leaving latent heat out grossly undersizes the plant and the product never reaches temperature.",
            },
            {
              q: "Ice at 0 °C is being melted into water at 0 °C. What is happening to the added heat?",
              options: [
                "It is raising the temperature very slowly",
                "It is being lost to the surroundings",
                "It is going in as latent heat of fusion — 335 kJ per kilogram — increasing molecular freedom rather than molecular speed",
                "It is being stored as pressure",
              ],
              answer: 2,
              explain: "During a change of state, added heat becomes potential energy, breaking the solid structure apart, so temperature stays put. Water needs 335 kJ/kg to melt and gives up exactly the same amount when it refreezes.",
            },
          ],
        },

        /* ================================================================
           6 — Pressure, atmospheric pressure, gauge and absolute
           ================================================================ */
        {
          id: "pressure-gauge-absolute-and-vacuum",
          title: "Pressure: atmospheric, gauge, absolute and vacuum",
          minutes: 12,
          simple:
            "Pressure is just force spread over an area. The air above us presses down at about 100 kPa everywhere, and a service gauge is built to ignore that and read zero in open air. So the number on your gauge is always about 100 kPa less than the real pressure inside the pipe, and you have to add it back for any calculation.",
          refs: R_PRESSURE,
          content: `## Pressure is force per unit area

Pressure = force ÷ area. A refrigerator standing on four legs presses down through those legs; remove them and it falls. A liquid presses on the sides and bottom of its container, and that pressure increases with depth. A gas is different again: the pressure it exerts depends on how much of it is in the container and how hot it is — which is the whole basis of reading a refrigerant's condition from a gauge.

The SI unit is the **pascal (Pa)**: the pressure produced when a force of one newton is applied to one square metre, so 1 Pa = 1 N/m². A pascal is a very small pressure, so refrigeration works in kilopascals (kPa) and occasionally megapascals. One bar equals 100 kPa, and 1 psi equals about 6.895 kPa — you will still meet both on imported equipment and older gauges.

## Atmospheric pressure

Atmospheric pressure is the force per unit area exerted on the Earth's surface by the weight of the column of air above it. At sea level, taken as the standard, it is **101.3 kPa**, which for trade calculations is usually rounded to **100 kPa**.

Altitude matters. The higher you go, the shorter the column of air above you and the lower the atmospheric pressure. A gauge set that reads zero at sea level will read slightly positive at the top of a mountain range before anything is connected, and any absolute-pressure conversion you do on an inland or elevated site should allow for it. In Australian practice, plant at 1000 m is sitting in about 90 kPa of atmosphere, not 100.

### The mercury barometer

Take a glass tube sealed at one end, fill it and invert the open end into a bowl of mercury so that a perfect vacuum sits above the mercury inside. Atmospheric pressure pushing on the mercury in the bowl supports a column about **760 mm** high in the tube. Rising atmospheric pressure raises the column and falling pressure lowers it — a barometer.

Any fluid can be used, but mercury is so dense that the column is conveniently short. If water were used, the same atmospheric pressure would support a column about **10.33 metres** high. That is also, incidentally, the theoretical maximum lift of any suction pump.

Because 101.3 kPa supports 760 mm of mercury, the working conversion is:

**7.6 mm Hg ≈ 1 kPa**

!FIG[gauge-pt-ring]

## Gauge pressure and absolute pressure

A refrigeration service gauge reads **zero when it is open to atmosphere**. It is measuring the difference between the pressure in the system and the atmospheric pressure surrounding it. That reading is **gauge pressure**, written kPa G. It ignores the 100 kPa of atmosphere that is always present.

**Absolute pressure** counts from a perfect vacuum, so it includes the atmosphere:

**gauge pressure + 100 kPa = absolute pressure** (or + 101.3 kPa where precision is wanted)

| Gauge reading | Absolute pressure |
|---|---|
| 900 kPa G | 1000 kPa A |
| 0 kPa G | 100 kPa A |
| −1 kPa G | 99 kPa A |
| −49 kPa G | 51 kPa A |
| −100 kPa G | 0 kPa A (a perfect vacuum) |

Pressures below atmospheric are shown as negative kilopascals gauge. Notice that the scale runs out at −100 kPa G: you cannot pull below a perfect vacuum, so any gauge claiming −120 kPa is lying to you.

Which do you use? **Gauge for what you read and report; absolute for anything you calculate.** Compression ratios, gas law calculations and P–h chart work all need absolute pressure. Getting this wrong is the single most common arithmetic error apprentices make.

## Worked examples

**Worked example 1.** A barometric column stands at 342 mm Hg. What is the absolute pressure?
- P = 342 ÷ 7.6 = **45 kPa A**
- As a gauge reading: 45 − 100 = **−55 kPa G**

**Worked example 2.** A mercury column stands at 456 mm. Express it as a gauge pressure.
- P = 456 ÷ 7.6 = 60 kPa A
- 60 − 100 = **−40 kPa G**

**Worked example 3.** A pressure of 50 kPa A will support what height of mercury?
- 50 × 7.6 = **380 mm Hg**

**Worked example 4.** A suction gauge reads 191 kPa G and a discharge gauge reads 858 kPa G. What is the compression ratio?
- Suction absolute = 191 + 100 = 291 kPa A
- Discharge absolute = 858 + 100 = 958 kPa A
- Ratio = 958 ÷ 291 = **3.3 : 1**
- Doing that with gauge figures would have given 858 ÷ 191 = 4.5 : 1, which is simply wrong.

**Worked example 5.** A system is being evacuated and the vacuum gauge shows −99.5 kPa G. What is the absolute pressure?
- 100 − 99.5 = **0.5 kPa A (500 Pa)**
- This is why deep evacuation is measured on an electronic vacuum gauge in pascals or microns, not on a compound gauge: the whole useful range of an evacuation lives inside the last needle-width of the analogue scale.

## Vacuum in the real system

Pressures below atmospheric appear in three places you will meet regularly:

1. **Evacuation.** Removing air and moisture before charging means pulling the system down to a few hundred pascals absolute and proving it holds.
2. **Low-temperature operation.** A refrigerant whose saturation pressure at the required evaporating temperature is below atmospheric will run the low side in a vacuum. R134a, for example, boils at about −26 °C at atmospheric pressure, so a system asked to run colder than that will be in a vacuum on the low side.
3. **Fault conditions.** A restricted drier, a starved evaporator or a badly undercharged system will pull the suction gauge into the negative range.

>! Any system running below atmospheric pressure will draw air and moisture inward through the smallest leak, instead of leaking refrigerant outward. Air brings water vapour, water plus refrigerant and heat produces acid, and acid destroys motor windings. Leaks on a low side that runs in a vacuum are also almost impossible to find with a normal electronic leak detector, since nothing is coming out. Pressurise with dry nitrogen to test — never with oxygen, and never with the system's own refrigerant used as a search gas beyond what the code of practice allows.

>! Never exceed a component's rated test pressure when pressure-testing with nitrogen, and always use a regulator with a relief. A nitrogen cylinder can hold over 15 000 kPa; releasing that into low-side pipework rated for a fraction of it turns a copper joint into shrapnel.

## What to remember

- Pressure = force ÷ area; 1 Pa = 1 N/m²; 1 bar = 100 kPa.
- Atmospheric pressure at sea level is 101.3 kPa, usually rounded to 100 kPa, and falls with altitude.
- 760 mm Hg or 10.33 m of water equals one atmosphere; 7.6 mm Hg ≈ 1 kPa.
- Gauge + 100 = absolute. Read in gauge, calculate in absolute.
- The bottom of the scale is −100 kPa G = 0 kPa A; below-atmospheric operation lets air and moisture in, not refrigerant out.`,
          quiz: [
            {
              q: "A suction gauge reads −30 kPa G. What is the absolute pressure in the low side?",
              options: [
                "130 kPa A",
                "70 kPa A",
                "−130 kPa A",
                "30 kPa A",
              ],
              answer: 1,
              explain: "Absolute = gauge + 100, so −30 + 100 = 70 kPa A. Absolute pressure can never be negative; the reading simply means the system is 30 kPa below the surrounding atmosphere.",
            },
            {
              q: "Why must absolute pressures be used when calculating compression ratio?",
              options: [
                "Because gauges are inaccurate at low pressures",
                "Because a ratio is only meaningful between pressures measured from the same true zero — a perfect vacuum",
                "Because compression ratio is expressed in bar",
                "Because the atmosphere adds nothing to the discharge side",
              ],
              answer: 1,
              explain: "Gauge pressure hides a constant 100 kPa offset. A ratio of two numbers each missing the same 100 kPa is not the ratio of the real pressures — in the worked example the difference was 3.3:1 against a false 4.5:1.",
            },
            {
              q: "A mercury barometer column stands at 608 mm. What is this in absolute pressure?",
              options: [
                "80 kPa A",
                "608 kPa A",
                "46 kPa A",
                "180 kPa A",
              ],
              answer: 0,
              explain: "608 ÷ 7.6 = 80 kPa A — the sort of reading you would expect at altitude. The other options misuse the 7.6 mm Hg per kPa conversion.",
            },
            {
              q: "Why is a leak on a low side that runs in a vacuum more serious than a leak on the high side?",
              options: [
                "Because refrigerant escapes faster under vacuum",
                "Because air and moisture are drawn into the system, forming acids that attack the compressor, and the leak cannot be found with a normal detector because nothing is coming out",
                "Because vacuum leaks always occur at the compressor",
                "It is less serious, because no refrigerant is lost",
              ],
              answer: 1,
              explain: "Below atmospheric, the pressure gradient points inward. Moisture with refrigerant and heat forms acid that destroys windings and driers, and an electronic detector has nothing to sniff. Pressurising with dry nitrogen is how you find it.",
            },
          ],
        },

        /* ================================================================
           7 — Saturation, P-T relationship, superheat, subcooling
           ================================================================ */
        {
          id: "saturation-superheat-and-subcooling",
          title: "Saturation, the pressure-temperature relationship, superheat and subcooling",
          minutes: 14,
          simple:
            "While a liquid and its vapour are together in a pipe, the pressure and the temperature are locked to each other: fix one and the other has to follow. That is why a pressure gauge can tell you how cold a coil is without ever touching it. Once all the liquid has boiled away, or before any of it has boiled, that link breaks and you need a thermometer as well.",
          refs: R_PT,
          content: `## One pressure, one temperature — while both phases are present

Water boils at 100 °C at sea level, and lower up a mountain. That is the pressure-temperature relationship, and it applies to every refrigerant. The precise statement is this: **while liquid and vapour are both present and in contact, the temperature of the mixture is fixed by its pressure.** That condition is called **saturation**; the temperature is the saturation temperature, and the pressure is the saturation pressure.

!FIG[pt-curve]

The consequences are enormous for a technician. In an evaporator with liquid boiling in it, the refrigerant temperature is fixed by the suction pressure. In a condenser with vapour condensing in it, the refrigerant temperature is fixed by the head pressure. So a gauge on the low side reads coil temperature, and a gauge on the high side reads condensing temperature, provided you know which refrigerant is in there. That is the entire reasoning behind the PT ring on a service gauge and the PT charts in your toolbox.

Here is part of the saturated pressure-temperature data for R134a, rebuilt in the form you will use it:

| Saturation temp (°C) | Gauge pressure (kPa G) | Absolute pressure (kPa A) |
|---|---|---|
| −50 | −70 | 30 |
| −40 | −48 | 52 |
| −30 | −17 | 83 |
| −25 | 7 | 107 |
| −20 | 33 | 133 |
| −15 | 64 | 164 |
| −10 | 101 | 201 |
| −5 | 143 | 243 |
| 0 | 193 | 293 |
| 5 | 250 | 350 |
| 10 | 315 | 415 |
| 15 | 388 | 488 |
| 20 | 472 | 572 |
| 25 | 565 | 665 |
| 30 | 670 | 770 |
| 35 | 787 | 887 |
| 40 | 916 | 1016 |
| 45 | 1060 | 1160 |
| 50 | 1218 | 1318 |
| 55 | 1391 | 1491 |
| 60 | 1581 | 1681 |

Different refrigerants sit at different pressures for the same temperature, which is exactly why you must know the charge before you interpret a gauge. At about 10 kPa G, R134a boils at roughly −24 °C, while R22 at the same gauge pressure boils near −38 °C. Put an R22 chart against an R134a system and every conclusion you draw will be wrong.

!SIM[Watch pressure and saturation temperature track each other](view=pt)

## Controlling the boiling temperature — the idea the whole trade is built on

Picture a simple open evaporator: a vessel of liquid R134a inside a 4 °C space, with a vent to atmosphere. At 100 kPa absolute the R134a boils at about −26 °C. Heat floods in from the 4 °C space because the difference is 30 K, the liquid boils, and the vapour carries the heat out through the vent. The space is cooled — wastefully, because the refrigerant is thrown away, and far too cold, because we cannot control it.

Now fit a hand valve in the vent line and close it part way. Vapour cannot escape freely, so it builds up over the liquid, the pressure rises, and the saturation temperature rises with it. Adjust the valve and you can make the R134a boil at any temperature you like between about −26 °C and the space temperature. Close the valve completely and the pressure rises until the saturation temperature equals the space temperature of 4 °C; now there is no temperature difference, no heat flows, boiling stops and cooling stops.

Want colder than −26 °C? Put a pump on the vent and pull the pressure below atmospheric. Lower pressure, lower saturation temperature — down to whatever the pump and the refrigerant will allow.

That thought experiment contains the whole of refrigeration control:

- **Throttle the vapour leaving and the evaporating temperature rises.**
- **Pump the vapour away harder and the evaporating temperature falls.**
- **No temperature difference means no heat flow means no refrigeration.**

The vapour pump is the compressor. Add automatic control of the pump — a thermostat that starts it when the space warms and stops it when the space is cold enough — and you have described a domestic refrigerator.

## Superheated vapour

**A vapour at any temperature above its saturation temperature is superheated.** To superheat a vapour you must first separate it from the liquid it came from, because while vapour is in contact with liquid, any heat added simply boils more liquid and nothing gets hotter.

In a refrigeration system, superheat happens at the end of the evaporator, once the last of the liquid has boiled away, and continues along the suction line. It happens again, far more dramatically, in the compressor, so the discharge line carries heavily superheated vapour.

> The critical rule: **there is no fixed relationship between pressure and temperature in superheated vapour.** Once the liquid is gone, a gauge alone tells you nothing about the vapour's temperature. You need a pressure reading *and* a thermometer. That is why measuring superheat always takes two instruments.

### Measuring superheat

!FIG[superheat-measure]

1. Read the suction gauge pressure at the point of interest.
2. Convert it to saturation temperature using the PT chart for that refrigerant.
3. Measure the actual pipe temperature at the same point with a clamp probe, under insulation, on a clean pipe.
4. Superheat = measured temperature − saturation temperature, expressed in kelvins.

**Worked example 1.** An R134a system: suction gauge 193 kPa G, suction line temperature at the evaporator outlet 8 °C.
- 193 kPa G corresponds to a saturation temperature of 0 °C
- Superheat = 8 − 0 = **8 K**

Low superheat means liquid is getting too far down the coil and may reach the compressor. High superheat means the coil is starved and part of it is doing no work. Both are diagnosed with the same two readings.

## Subcooled liquid

The mirror image of superheat. **Subcooled liquid is liquid at a temperature below its saturation temperature for the pressure it is at.** Cooling condensed liquid further, without dropping its pressure, subcools it.

In a real system, subcooling happens in the last passes of the condenser and continues in the receiver and liquid line if those run through cooler surroundings. It matters because liquid arriving at the metering device must be solid liquid: any vapour bubbles (flash gas) rob capacity, and the valve cannot meter a mixture properly.

!FIG[subcool-measure]

**Worked example 2.** An R134a system: liquid line gauge 858 kPa G, liquid line temperature 30 °C.
- 858 kPa G corresponds to a saturation temperature of about 38 °C
- Subcooling = 38 − 30 = **8 K**

## Rules of thumb for reading a system with gauges

These approximations let you sanity-check a gauge reading against a thermometer:

| Situation | Expected relationship |
|---|---|
| Refrigerant in an operating evaporator | Boils roughly 1 K to 20 K colder than the coil surface or entering air, depending on the application (about 4–6 K TD for high-humidity rooms, 8–12 K for air-conditioning) |
| Refrigerant in an evaporator, compressor stopped | Equalises to the coil and space temperature |
| Refrigerant in a fan-cooled air-cooled condenser | Condenses roughly 6 K to 20 K above the entering air temperature |
| Refrigerant in a natural-draught condenser (domestic) | 20 K to 30 K above ambient |
| Refrigerant in a water-cooled condenser | About 6 K to 9 K above the leaving water temperature |
| Any condenser, 15 to 30 minutes after shutdown | Equalises to the cooling medium temperature |
| Actual boiling and condensing temperatures | Can only be determined from suction and head pressures — never from pipe temperatures alone |

Also remember: on a PT chart, the temperature quoted is the temperature of the *liquid* refrigerant, the higher pressure column is the condensing side and the lower is the evaporating side.

## On the job

- Saturation means liquid and vapour together; only then does one pressure mean one temperature.
- A low-side gauge reads evaporating temperature; a high-side gauge reads condensing temperature — for the refrigerant actually in the system.
- Throttle the vapour off and the boiling temperature rises; pump it away and the boiling temperature falls.
- Superheat and subcooling each need two readings: a pressure converted to saturation temperature, and a real temperature.
- No temperature difference, no heat flow — which is why a coil that has equalised with the room does nothing at all.`,
          quiz: [
            {
              q: "An R134a evaporator shows 33 kPa G on the suction gauge with the compressor running and liquid feeding the coil. What is the refrigerant boiling at?",
              options: [
                "33 °C",
                "About −20 °C",
                "About 0 °C",
                "It cannot be determined from pressure",
              ],
              answer: 1,
              explain: "With liquid and vapour both present the coil is at saturation, so the PT data applies: 33 kPa G for R134a is −20 °C. It could not be read from pressure alone only if the refrigerant in the coil were entirely superheated vapour.",
            },
            {
              q: "Why does measuring superheat require both a gauge and a thermometer?",
              options: [
                "Because gauges are not accurate enough on their own",
                "Because superheated vapour has no fixed pressure-temperature relationship, so pressure gives only the saturation temperature, not the actual vapour temperature",
                "Because the thermometer measures the condensing temperature",
                "Because the two instruments cross-check one another",
              ],
              answer: 1,
              explain: "Once the last liquid boils away, pressure and temperature are no longer locked together. The gauge gives the reference point (saturation temperature) and the thermometer gives the actual temperature; the difference between them is the superheat.",
            },
            {
              q: "A hand valve in the vent line of an open evaporator is closed further. What happens to the boiling temperature of the liquid inside?",
              options: [
                "It falls, because less vapour can escape",
                "It rises, because vapour collects over the liquid, raising the pressure and therefore the saturation temperature",
                "It stays the same, since the liquid quantity has not changed",
                "It rises only if the space is warmer than 4 °C",
              ],
              answer: 1,
              explain: "Restricting the vapour outlet raises the pressure over the liquid, and saturation temperature follows pressure. Closed fully, the pressure rises until the saturation temperature equals the space temperature — at which point the temperature difference, and therefore the cooling, disappears.",
            },
            {
              q: "An R134a system reads 916 kPa G in the liquid line with a liquid line temperature of 40 °C. What is the subcooling?",
              options: [
                "0 K — the liquid is exactly at saturation, so there is no subcooling",
                "8 K",
                "40 K",
                "It cannot be calculated without the suction pressure",
              ],
              answer: 0,
              explain: "916 kPa G is the saturation pressure for 40 °C in R134a, so the liquid is at its saturation temperature — no subcooling at all. That is a warning sign: flash gas is likely at the metering device.",
            },
          ],
        },

        /* ================================================================
           8 — The standard refrigeration system and its parts
           ================================================================ */
        {
          id: "standard-refrigeration-system",
          title: "The standard refrigeration system and its parts",
          minutes: 13,
          simple:
            "A working system is just four jobs joined in a loop: boil the liquid where you want cooling, pump the vapour away, squeeze it hot enough to dump the heat outside, and let the liquid back in at a controlled trickle. Everything else on a plant is there to help one of those four things happen reliably.",
          refs: R_SYSTEM,
          content: `## Building the system one problem at a time

The best way to understand a refrigeration system is to build one in your head from the open evaporator of the previous lesson, solving one problem at a time.

**Problem 1: we cannot control the temperature.** Liquid boiling in an open vessel takes whatever temperature its pressure gives it. Fitting a throttling valve in the vent lets us hold the pressure, and therefore the boiling temperature, where we want it.

**Problem 2: we cannot get cold enough, and stopping and starting is clumsy.** Fitting a vapour pump on the vent pulls the pressure down and gives lower temperatures, and because the vent now goes to the pump, stopping the pump stops the refrigeration. A thermostat can start and stop it automatically.

**Problem 3: the liquid runs out.** Continuous boiling needs continuous replenishment, at a rate that keeps the liquid level in the evaporator constant. That is the job of a **refrigerant flow control** (also called a metering device or expansion device) — an essential part of every mechanical refrigerating system. There are several types: hand expansion valves, low-side and high-side floats, automatic expansion valves, thermostatic expansion valves, electronic valves and capillary tubes, each covered in detail later.

**Problem 4: we are throwing the refrigerant away.** Venting expensive refrigerant into the air is neither economical nor legal. We must catch the vapour and turn it back into liquid to use again — which needs a **condenser**.

**Problem 5: the vapour is too cold to condense.** Heat only flows from hot to cold, so to make the vapour give up its latent heat to outdoor air or to water, the vapour must be hotter than that condensing medium. The vapour leaving the evaporator is at coil temperature and nowhere near hot enough. The **compressor** solves this: by compressing the vapour it raises its pressure and, with it, its saturation temperature, so the same refrigerant that boiled at −5 °C in the coil can condense at 45 °C on the roof.

Notice what the compressor is really doing. It is not adding much heat from outside — vapour is in contact with the cylinder for perhaps a hundredth of a second. It concentrates the heat already in the vapour into a smaller volume at higher pressure, and adds the mechanical work of compression. That is enough to lift the temperature above ambient so the heat can flow out.

## The loop

!FIG[cycle-loop]

| Component | What it does | Refrigerant enters as | Refrigerant leaves as |
|---|---|---|---|
| Evaporator | Absorbs heat from the space or product by boiling the refrigerant | Low-pressure, low-temperature liquid–vapour mixture | Low-pressure, low-temperature saturated (then superheated) vapour |
| Suction line | Carries vapour to the compressor and returns oil | Cold superheated vapour | Slightly warmer superheated vapour |
| Compressor | Raises pressure and temperature so heat can be rejected; circulates the refrigerant | Low-pressure superheated vapour | High-pressure, high-temperature superheated vapour |
| Discharge line | Carries hot gas to the condenser | Hot superheated vapour | Hot superheated vapour |
| Condenser | Rejects heat to air or water; desuperheats, condenses, then subcools | High-pressure superheated vapour | High-pressure liquid, usually subcooled |
| Receiver | Stores liquid so the charge can vary with load | High-pressure liquid | High-pressure liquid |
| Liquid line | Delivers solid liquid to the metering device | Subcooled liquid | Subcooled liquid |
| Refrigerant flow control | Meters liquid into the evaporator and drops the pressure | High-pressure liquid | Low-pressure liquid–vapour mixture |

The **condensing medium** is whatever absorbs the heat in the condenser — most often outdoor air, sometimes water, often from a cooling tower. It must be plentiful, cheap and as cool as practical.

The most important sentence in this lesson: **the refrigerant is only a heat transfer agent.** It picks heat up in the evaporator, carries it out of the space, and hands it to the condensing medium. It is not consumed. A system that has lost refrigerant has a leak, not an appetite.

!SIM[Take a guided tour of the four components on a live system](tour=1)

## High side and low side

The loop divides into two pressure zones, and the change from one to the other happens at only two points: the compressor and the metering device.

| | Low side | High side |
|---|---|---|
| Also called | Suction side, low pressure | Discharge side, head pressure |
| Runs from | Metering device outlet through evaporator and suction line to the compressor suction valve | Compressor discharge valve through discharge line, condenser, receiver and liquid line to the metering device |
| Pressure | Suction pressure | Discharge or head pressure |
| Refrigerant temperature | Cold | Hot at the top, warm at the bottom |

There is one point of confusion worth clearing up now. The compressor is generally regarded as part of the high side, but the pressure at its suction port is the low-side pressure. The change of pressure happens inside it, during the compression stroke. Where you connect a gauge on a compressor therefore matters entirely: suction service valve reads the low side, discharge service valve reads the high side.

## What the technician actually does with this

- **Gauges tell you the two pressures**, and through the PT relationship, the two saturation temperatures. Almost all diagnosis starts there.
- **A restriction between the receiver and the coil** — a blocked drier, a kinked liquid line, a stuck valve — starves the low side and shows up as low suction pressure with high superheat.
- **A condenser that cannot reject heat** raises the high side, raises the compression ratio, raises the discharge temperature and costs power.
- **Liquid arriving at the compressor** is the classic system killer. The evaporator must be sized and fed so the last of the liquid boils inside the coil, leaving a few kelvins of superheat before the suction line.
- **Oil goes around with the refrigerant.** The compressor is the only place it is wanted, so suction line design (velocity, traps, slopes) exists to bring it back.

>! A liquid receiver and a liquid line are full of liquid refrigerant at high pressure. Liquid does not compress; a line valved shut at both ends with liquid trapped inside can burst if it warms up, and that is why liquid lines are never isolated at both ends without a relief. Wear eye protection and gloves: liquid refrigerant escaping onto skin causes an instant freeze burn, and into the eye it can cause permanent injury.

## What to remember

- Four jobs: boil (evaporator), pump (compressor), reject (condenser), meter (flow control). Everything else supports them.
- The compressor makes the heat rejectable by lifting the vapour's temperature above ambient.
- The refrigerant is a carrier, not a fuel.
- Low side runs from the metering device to the compressor suction; high side from the compressor discharge to the metering device.
- Pressure changes only at two points in the whole loop, and gauges at those two points are your primary diagnostic tools.`,
          quiz: [
            {
              q: "Why must the vapour be compressed before it enters the condenser?",
              options: [
                "To increase its velocity so it moves through the coil faster",
                "To raise its pressure and temperature above the condensing medium's temperature, so heat can flow out of it",
                "To turn it directly into liquid inside the compressor",
                "To remove the oil carried with it",
              ],
              answer: 1,
              explain: "Heat flows only from hot to cold. Vapour leaving the evaporator is near coil temperature, far cooler than outdoor air, so it cannot reject heat. Compression raises its saturation temperature so that condensing at, say, 45 °C becomes possible against 35 °C ambient.",
            },
            {
              q: "A technician connects a gauge to the compressor suction service valve. Which pressure is being read?",
              options: [
                "High-side pressure, because the compressor is part of the high side",
                "Low-side pressure, because the pressure rise happens inside the compressor during compression",
                "The average of the two pressures",
                "Atmospheric pressure until the compressor starts",
              ],
              answer: 1,
              explain: "The compressor is usually counted as part of the high side, but the suction port sits at low-side pressure — the change occurs during the compression stroke. This is why gauge connection point, not component ownership, decides what you read.",
            },
            {
              q: "What is the function of the refrigerant flow control?",
              options: [
                "To raise the pressure of the liquid before it enters the evaporator",
                "To meter liquid into the evaporator at the rate it is boiling away, and to drop it from high-side to low-side pressure",
                "To separate oil from the refrigerant",
                "To store surplus refrigerant during light load",
              ],
              answer: 1,
              explain: "Continuous boiling needs continuous replenishment at a matched rate; the flow control both meters and drops the pressure. Storing surplus charge is the receiver's job, and oil separation is a separate ancillary component.",
            },
            {
              q: "Which statement about refrigerant in a sealed system is correct?",
              options: [
                "Refrigerant is gradually consumed and must be topped up at each service",
                "Refrigerant is only a heat transfer agent, so a system that is short of charge has a leak",
                "Refrigerant is destroyed in the compressor and regenerated in the condenser",
                "Refrigerant is used up faster in hot weather",
              ],
              answer: 1,
              explain: "The refrigerant carries heat around a closed loop and is not consumed. Any loss of charge is a leak, which must be found and repaired — under Australian regulation, topping up without repairing is not acceptable practice.",
            },
          ],
        },

        /* ================================================================
           9 — The standard refrigeration cycle in numbers
           ================================================================ */
        {
          id: "standard-refrigeration-cycle",
          title: "The standard refrigeration cycle in numbers",
          minutes: 14,
          simple:
            "Words like high pressure and low pressure mean nothing until you put real numbers on them. Following one refrigerant right around a real coolroom system — with the actual pressures and temperatures at every corner — turns four vague components into a set of readings you can check against the plant in front of you.",
          refs: R_CYCLE,
          content: `## A real cycle with real numbers

Take a 4 °C vegetable coolroom with an induced-draught evaporator and an air-cooled condenser, running on R134a on a 27 °C day with normal loading. These are the sort of figures a healthy plant would show.

| Point | Location | Condition | Temperature | Pressure (kPa G) |
|---|---|---|---|---|
| A | Leaving the liquid line, entering the flow control | Subcooled liquid | 30 °C | 858 |
| B | Leaving the flow control, entering the evaporator | Low-pressure liquid–vapour mixture | 0 °C | 191 |
| C | End of the evaporator | Saturated vapour, last liquid just boiled off | 0 °C | 191 |
| C1 | Compressor suction | Superheated vapour | 20 °C | 191 |
| D | Compressor discharge | Highly superheated vapour | 50 °C | 858 |
| E | Entering the condenser coil proper | Saturated vapour | 38 °C | 858 |
| E1 | Leaving the condensing section | Saturated liquid | 38 °C | 858 |

!FIG[ph-legs]

Walk it through, and notice what changes at each leg.

**A to B — through the flow control.** Pressure collapses from 858 to 191 kPa G, and temperature drops with it from 30 °C to 0 °C. No heat has been removed; some of the liquid flashes to vapour and takes its own latent heat out of the rest, which is what chills the mixture. What enters the coil is mostly liquid with some flash gas.

**B to C — through the evaporator.** The refrigerant passes through the coil **without a change in temperature or pressure**, boiling steadily as it absorbs heat from the room air. This is the whole point of the saturated section: 0 °C from one end of the coil to the other. At C the last liquid has gone and only saturated vapour remains.

**C to C1 — the superheat leg.** With no liquid left, added heat raises the vapour temperature. In this system the vapour reaches 20 °C by the time it gets to the compressor. Pressure does not rise — in fact it falls very slightly because of suction line friction. This is superheat: 20 K of it, which is a lot, and typical of a system where the suction line runs through warm ambient.

**C1 to D — compression.** Pressure goes from 191 to 858 kPa G and the temperature is driven to 50 °C. Little heat came from the cylinder walls; vapour is in contact with them for a hundredth of a second or less and the temperature difference is small. What raised the temperature and the total heat content (enthalpy) was mechanical work done on the vapour.

**D to E — desuperheating in the condenser.** The vapour arrives far hotter than it will condense at. The first part of the condenser simply removes that superheat, bringing it down to the 38 °C saturation temperature for 858 kPa G.

**E to E1 — condensing.** Temperature and pressure now stay put while latent heat pours out into the air. At E1 it is saturated liquid.

**E1 to A — subcooling.** In the last condenser passes, the receiver and the liquid line, the liquid cools further without any pressure change: 38 °C down to 30 °C, which is **8 K of subcooling**.

## The four numbers a technician reads and what they mean

### The suction pressure

The suction pressure is directly related to the evaporating temperature. Lower the pressure and the coil runs colder. A freezer runs a much lower suction pressure than an air-conditioner on the same refrigerant. In the interests of efficiency, the suction pressure should be kept as **high** as is practical while still holding the space temperature, because higher suction pressure means denser vapour, more mass pumped per revolution and more capacity for the same motor. That is why evaporators are kept clear of frost, dirt and anything else that blocks them.

### The suction temperature (evaporating temperature)

The temperature at which the refrigerant vaporises, found by putting a gauge on the low side and converting through the PT chart. It depends on the heat flowing into the coil and the compressor's ability to pump the vapour away. The coil must be cold enough to drive heat out of the space at the rate needed.

> Two terms that sound the same and are not: the **suction temperature** (properly, the *saturated suction temperature* or *saturated evaporator temperature*) is what the pressure tells you. The **suction vapour temperature** is what a thermometer on the pipe tells you — the temperature of the superheated vapour entering the compressor. In the example above they are 0 °C and 20 °C. Confuse them and your superheat calculation collapses.

### The condensing temperature and head pressure

The condensing temperature is the temperature at which refrigerant is turning to liquid — read from the high-side gauge through the PT chart, not from a thermometer on the discharge line. It is best represented by the pipe temperature in the middle area of a normally operating condenser.

Everything the refrigerant absorbed — in the evaporator, in the suction line and in the compressor — must leave through the condenser or the cycle stops. Because heat flow can only increase by increasing temperature difference, anything that adds heat or hinders rejection pushes the condensing temperature and head pressure up. Three things move it:

1. **The amount of heat to be rejected** — a heavily loaded room raises head pressure; a lightly loaded one lowers it.
2. **The temperature of the cooling medium** — a hot day or hot condenser air raises it. A dirty, blocked or fan-failed condenser has the same effect as a hot day.
3. **The suction pressure** — a higher suction pressure means denser vapour, more mass flow, and more heat arriving at the condenser.

Keep the condensing temperature as low as practical: keep good airflow or water flow, keep fins clear of dust, lint and scale. Every kelvin of unnecessary condensing temperature costs power.

!SIM[See what a dirty condenser does to head pressure and discharge temperature](fault=dirtyCondenser)

### The discharge temperature

The temperature of the vapour leaving the compressor discharge valve, which depends on the temperature of the vapour entering plus the heat of compression. **The more the vapour is superheated in the suction line and compressor, the higher the discharge temperature.** Discharge temperatures can exceed 130 °C, at which point the refrigerant and the oil start to break down, forming acids and carbon.

Do not confuse discharge temperature with condensing temperature. In our example, discharge is 50 °C and condensing is 38 °C; on a hard-run freezer, discharge could be 120 °C while condensing is 45 °C.

Sealed units where suction vapour also cools the motor are especially exposed, because the vapour picks up motor heat before it is compressed. The defences are an insulated suction line and a generously sized condenser to keep head pressure down.

## Compression ratio and the heat of compression

Compression ratio = absolute discharge pressure ÷ absolute suction pressure.

**Worked example 1 — our coolroom.**
- Suction = 191 + 100 = 291 kPa A
- Discharge = 858 + 100 = 958 kPa A
- Ratio = 958 ÷ 291 = **3.3 : 1**

**Worked example 2 — a low-temperature system.** An R404A freezer evaporating at −25 °C (about 145 kPa G) and condensing at 45 °C (about 1943 kPa G).
- Suction = 145 + 100 = 245 kPa A
- Discharge = 1943 + 100 = 2043 kPa A
- Ratio = 2043 ÷ 245 = **8.3 : 1**

The heat of compression per kilogram of vapour pumped grows with the compression ratio. A freezer running near 10:1 puts far more heat into each kilogram of vapour than an air-conditioner running near 3:1 — which is exactly why freezer discharge temperatures are so much higher and why low-temperature work often needs two-stage compression. The energy to do that work comes from the motor, and later in the course you will calculate the required motor power directly from the heat of compression.

**Worked example 3 — mass flow.** Suppose the tables give a refrigerating effect of 145 kJ/kg for R134a between our 0 °C evaporating and 38 °C condensing conditions, and the room needs 12 kW.
- Mass flow = duty ÷ refrigerating effect = 12 kJ/s ÷ 145 kJ/kg = **0.083 kg/s**
- That is 0.083 × 60 = about **5 kg per minute** circulating.
- A refrigerant with a larger refrigerating effect would need less mass flow for the same duty — the argument for high latent heat in a refrigerant.

## Reading a plant against the standard

| Reading | Healthy pattern in the example | What a departure suggests |
|---|---|---|
| Suction pressure | Steady 191 kPa G, giving 0 °C | Low: starved coil, restriction, undercharge, iced coil. High: excess load, oversized valve, compressor not pumping |
| Superheat at compressor | 20 K in this layout; typically 5–8 K at coil outlet | Very low: flooding risk. Very high: starved coil, undercharge |
| Head pressure | 858 kPa G, 38 °C condensing, about 11 K above 27 °C ambient | High: dirty coil, fan fault, overcharge, non-condensables. Low: cold ambient, condenser flooded |
| Subcooling | 8 K | Zero: flash gas, undercharge. Very high: overcharge, restriction |
| Discharge temperature | 50 °C | Above 130 °C: oil and refrigerant breakdown imminent |

>! A discharge line running above 130 °C is not a reading to note and move on from. Oil breaks down, acid forms, and the compressor is being destroyed while you watch. Find the cause — excessive superheat, high compression ratio, non-condensables, low charge — before restarting the plant.

## What to remember

- The refrigerant crosses the evaporator at constant temperature and pressure while it boils; it superheats only after the liquid is gone.
- Pressure changes only at the compressor and at the flow control.
- Suction pressure sets evaporating temperature; head pressure sets condensing temperature; both are read from gauges, not thermometers.
- Discharge temperature is not condensing temperature, and it climbs with suction superheat and compression ratio.
- Compression ratio uses absolute pressures: about 3:1 for air-conditioning, up to 10:1 for low temperature.`,
          quiz: [
            {
              q: "In the coolroom example, the refrigerant is at 0 °C at both the inlet and the outlet of the evaporator. Why does the temperature not change across the coil?",
              options: [
                "Because the coil is well insulated so no heat enters",
                "Because the refrigerant is saturated — liquid and vapour together — so all the heat absorbed goes into boiling liquid rather than raising temperature",
                "Because the flow control keeps the temperature constant",
                "Because the air off the coil is also at 0 °C",
              ],
              answer: 1,
              explain: "Across the boiling section the refrigerant is at saturation, so absorbed heat is latent heat and the thermometer does not move. Temperature only begins to climb after the last liquid boils away, in the superheat section.",
            },
            {
              q: "A system evaporates at 205 kPa G and condenses at 1400 kPa G. What is the compression ratio?",
              options: [
                "6.8 : 1",
                "4.9 : 1",
                "1195 : 1",
                "7.8 : 1",
              ],
              answer: 1,
              explain: "Convert to absolute first: 305 kPa A and 1500 kPa A, so 1500 ÷ 305 = 4.9:1. Using gauge pressures (1400 ÷ 205 = 6.8) overstates the ratio, which is the classic error.",
            },
            {
              q: "Why does the condensing temperature rise when a coolroom is loaded with a large quantity of warm stock?",
              options: [
                "Because the refrigerant becomes denser in the receiver",
                "Because more heat is being absorbed, so more heat must be rejected — and heat flow can only be increased by increasing the temperature difference at the condenser",
                "Because the flow control opens further and raises head pressure directly",
                "Because the compressor motor slows under load",
              ],
              answer: 1,
              explain: "The condenser must reject everything absorbed plus the heat of compression. With a fixed coil and fixed ambient, the only way to move more heat is a larger temperature difference, which means a higher condensing temperature and head pressure.",
            },
            {
              q: "A technician measures 135 °C on the discharge line of a low-temperature system. What is the significance?",
              options: [
                "It is normal for low-temperature work and needs no action",
                "It indicates the condensing temperature is 135 °C",
                "It is above the point where refrigerant and oil begin to break down and form acid, so the cause must be found before further running",
                "It shows the system is overcharged",
              ],
              answer: 2,
              explain: "Discharge temperatures over about 130 °C break down oil and refrigerant. It is not the condensing temperature — that is read from the high-side gauge. Likely causes are excessive suction superheat, a high compression ratio, non-condensables or low charge.",
            },
          ],
        },

        /* ================================================================
           10 — Refrigerants: naming, selection, characteristics, safety
           ================================================================ */
        {
          id: "refrigerants-naming-and-selection",
          title: "Refrigerants: numbering, selection characteristics and safety classification",
          minutes: 14,
          simple:
            "A refrigerant is just a fluid that changes easily from liquid to gas and back again at useful pressures. Every one is given an R number so that the same chemical is not sold under six brand names. Choosing one is a balancing act between the temperatures you need, the pressures your equipment can stand, safety, cost and the environment.",
          refs: R_REFRIG,
          content: `## What a refrigerant has to do

To move heat out of a cabinet or a room you need a heat carrier. In a standard mechanical system that carrier absorbs heat by evaporating in the evaporator and gives it up by condensing in the condenser. Fluids that change readily between liquid and vapour at pressures and temperatures we can build equipment around are the ones we use as refrigerants — and some do the job far better than others.

## Refrigerant names and numbers

Before 1956, the same chemical was sold under a fistful of brand names. Dichlorodifluoromethane was Freon 12 to one supplier, Arcton 6, Frigen 12 or Monsanto 12 to others — all the same fluid. DuPont, who developed the Freon group, introduced a numbering system to end the confusion. Today all refrigerants are classified under **ANSI/ASHRAE Standard 34**, which assigns a number and a composition-designating prefix.

| Group | Numbers used |
|---|---|
| Derived from methane | R10 – R50 |
| Derived from ethane | R110 – R170 |
| Derived from propane | R216ca – R290 |
| Cyclic organics | RC316 – RC318 |
| Blends of the zeotropic (non-azeotropic) kind | R400 series |
| Blends of the azeotropic kind | R500 series |
| Other organic compounds | R600 – R620 |
| Compounds of nitrogen | R630 – R631 |
| Inorganics | R702 – R764 |
| Unsaturated organics, the HFO refrigerants among them | R1112a – R1270 |

Two habits worth forming. First, the chemical family prefix tells you the environmental story at a glance: **CFC** (chlorine, fluorine, carbon), **HCFC** (with hydrogen), **HFC** (no chlorine), **HFO** (unsaturated HFC), **HC** (hydrocarbon), and the inorganics. Second, in the R700 series the last two digits are the molar mass — R717 is ammonia (17), R744 is carbon dioxide (44), R718 is water (18).

## What governs the choice

A refrigerant must have physical, chemical, environmental and physiological properties such that a practical machine can be built that runs efficiently and safely. The choice also depends on the machine: reciprocating, rotary and centrifugal compressors, and direct-expansion or flooded systems with floats, expansion valves or capillaries, all place different demands.

The characteristics that decide it:

1. **Condensing and boiling temperatures and pressures.** This eliminates most candidate fluids immediately. Too high a boiling point and you cannot reach the temperature you need, or you must run a deep vacuum to do it. Too low a boiling point and you need very high head pressures to condense. Low suction pressures force high-volume compressors, which cost more to build and to run; high head pressures are limited by the tensile strength of the copper, brass and steel in the system.
2. **Latent heat of vaporisation and liquid specific heat.** Latent heat should be high: the higher it is, the less refrigerant must be circulated per kilowatt of refrigeration.
3. **Suitability for the condensing medium.** Air-cooled work requires a refrigerant that condenses readily at 26 °C to 44 °C without excessive head pressure; water-cooled work usually condenses at 15 °C to 30 °C.
4. **Displacement volume needed per kilowatt of refrigeration.** Vapour density should be high — a low-density refrigerant needs a physically larger compressor for the same duty. A refrigerant needing sub-atmospheric pressure to reach its design temperature also lets air in through any leak.
5. **Toxicity.** Two mechanisms: true poisoning, which is remote for common refrigerants, and asphyxiation, which is not. Most refrigerants are heavier than air and collect in low spaces — a pit, a plant room floor, a boat's bilge. That bilge becomes lethal without breathing apparatus.
6. **Flammability and explosiveness.** Almost every volatile gas containing hydrogen is flammable, and some become highly explosive when broken down or heated in the presence of carbon compounds. Flammable refrigerants often carry real environmental advantages, and with proper training and compliance with the standards they are used successfully.
7. **Fire hazard**, which follows from the above.
8. **Odour.** An odour helps you find leaks but must not cause panic; it should be unpleasant enough to demand action. Ammonia's smell is why it stayed mostly in industrial plants where staff know it — although attitudes to ammonia are far more positive now.
9. **Cost.** Rarely decisive, except on large plant. Ammonia costs less than a tenth of comparable HFCs, which matters when the charge is ten tonnes.
10. **Stability.** The refrigerant must not decompose at any temperature the system can reach.
11. **Action on metals.** Ammonia attacks copper and copper alloys, so ammonia controls use steel diaphragms; fluorocarbons tolerate copper bellows, which makes sensitive automatic controls possible.
12. **Compatibility with the lubricant.** The refrigerant must not form destructive compounds with the oil or destroy its lubricating quality, and the oil must not congeal at low temperature.
13. **Critical temperature.** Above this temperature no amount of pressure will condense the refrigerant. At the critical point the latent heat is zero and the liquid and vapour densities are equal. This sets the highest condensing temperature the refrigerant can ever reach.
14. **Leak behaviour.** Outward leaks are preferable to inward leaks of air — provided the refrigerant is non-toxic, non-flammable, harmless to stored product and not an environmental problem. A refrigerant that runs below atmospheric makes low-side leaks nearly impossible to find.
15. **Environmental properties.** Zero or low ozone depletion potential (ODP), low global warming potential (GWP) and a short atmospheric life.

### The wish list, in short

- High latent heat, for a large refrigerating effect per kilogram
- Low boiling point at atmospheric pressure, to reach low temperatures without deep vacuum
- Low condensing temperature at a modest head pressure
- Low specific volume of vapour per kilowatt, for a small compressor
- High critical temperature
- No corrosive action on the metals used, chemically stable in service, no attack on lubricants
- Non-flammable, non-explosive, non-poisoning, inoffensive odour
- Easy to leak-detect, cheap to produce, no affinity for air or water
- Low environmental impact

No fluid ticks every box; every refrigerant in service is a compromise.

## Safety classification

ANSI/ASHRAE Standard 15 (and, in Australia, AS/NZS ISO 817 and AS/NZS 5149 for system safety) classify refrigerants by hazard. The letter is toxicity — **A** lower, **B** higher — and the number is flammability, 1 being no flame propagation and 3 being highly flammable. Group A1 is the least hazardous and B3 the most.

| Group | Examples |
|---|---|
| A1 | R11, R12, R13, R13B1, R14, R22, R113, R114, R134a, R500, R503, R744 |
| B1 | R123, R764 (sulphur dioxide) |
| B2 | R40 (methyl chloride), R611 (methyl formate), R717 (ammonia) |
| A2L (modern addition) | R32, R1234yf, R1234ze — mildly flammable, low burning velocity |
| A3 | R290 (propane), R600a (isobutane), R1270 (propylene) |

The A2L class did not exist when the older tables were written, and it now matters a great deal: many of the low-GWP replacements for R410A and R134a fall into it. Mildly flammable is not non-flammable — charge limits, ventilation, leak detection and ignition-source control all apply under AS/NZS 5149.

>! Refrigerants that contain chlorine and fluorine decompose over a flame or a very hot surface into far more dangerous products, including hydrogen fluoride, hydrogen chloride and phosgene. Never braze on a system that still holds refrigerant, never use a torch-type leak detector in an occupied space, and never smoke around a leak. Purge with dry nitrogen before applying heat.

>! Because most refrigerants are heavier than air, a leak in a plant room, cool room, pit or bilge displaces oxygen at floor level while the air above still seems fine. Ventilate and test before entry, never work alone in a plant room with a known leak, and treat any confined space with a refrigerant charge as an oxygen-deficiency risk.

## Choosing in practice: the retrofit problem

Ideally a system runs on its design refrigerant for life. With the pace of refrigerant change, that is rarely possible, so technicians are constantly asked whether a system can be converted. Five questions must be answered before any change:

1. Is the new refrigerant compatible with all the metals, elastomers, plastics, motor windings, lubricants and insulation in the system?
2. Will capacity increase enough to overload the motor?
3. Will the expansion valve or capillary be the right size for the new refrigerant?
4. Is the control system adequate?
5. Will the evaporator and condenser be the right size?

There is a lot of overlap between refrigerants in service, and a general rule holds: a refrigerant with a lower boiling point gives more capacity in a given compressor than one with a higher boiling point. Capacity is only one consideration, though — operating temperatures, the size of readily available equipment and stability all count.

> Because so many alternatives exist, every system must be **clearly labelled with the refrigerant and the lubricant it contains.** A technician who charges R410A into a system labelled nothing, that turns out to hold R22 and mineral oil, has created a mixed-refrigerant mess that cannot be recovered to a reusable grade.

## What to remember

- ASHRAE 34 numbering exists so one fluid has one name; number ranges identify the chemical family, and R700-series digits are the molar mass.
- The choice is a compromise across pressure range, latent heat, vapour density, safety, materials, oil, cost and environment.
- Critical temperature sets the ceiling; above it, nothing condenses at any pressure.
- Safety group letter = toxicity, number = flammability; A2L is now a working reality, not a curiosity.
- Answer all five compatibility questions before any retrofit, and label the system afterwards.`,
          quiz: [
            {
              q: "What does the critical temperature of a refrigerant tell you?",
              options: [
                "The temperature at which it will freeze in the liquid line",
                "The highest temperature at which it can still be condensed to a liquid by raising the pressure — above it, latent heat is zero and only vapour exists",
                "The temperature at which its oil breaks down",
                "The saturation temperature at atmospheric pressure",
              ],
              answer: 1,
              explain: "Above the critical temperature no pressure will condense the fluid; liquid and vapour densities become equal and latent heat falls to zero. This is why CO2 systems, with a critical temperature near 31 °C, often run transcritical in Australian ambients.",
            },
            {
              q: "Why is a high latent heat of vaporisation desirable in a refrigerant?",
              options: [
                "It allows a lower condensing pressure",
                "It reduces the mass of refrigerant that must be circulated per kilowatt of refrigeration",
                "It makes the refrigerant less flammable",
                "It raises the critical temperature",
              ],
              answer: 1,
              explain: "Refrigerating effect per kilogram rises with latent heat, so less mass flow is needed for the same duty — smaller pipework and less refrigerant in the system. It has no direct bearing on flammability or critical temperature.",
            },
            {
              q: "A refrigerant that must run below atmospheric pressure to reach its design evaporating temperature has which disadvantage?",
              options: [
                "It cannot be used with a reciprocating compressor",
                "Air and moisture are drawn in through any low-side leak, and low-side leaks are nearly impossible to detect",
                "It always has a high GWP",
                "It requires a smaller compressor for the same duty",
              ],
              answer: 1,
              explain: "Below atmospheric, leaks run inward. Air brings moisture, moisture makes acid, and nothing escapes for a detector to find. It also needs a larger compressor, not a smaller one, because the vapour is less dense.",
            },
            {
              q: "Ammonia (R717) is classified B2. What does that classification mean for the technician?",
              options: [
                "Higher toxicity and lower flammability — so ventilation, detection and trained handling are essential",
                "Lower toxicity and no flammability, so it can be used anywhere",
                "It is a blend of two refrigerants",
                "It has a B-grade ozone depletion potential",
              ],
              answer: 0,
              explain: "The letter is toxicity (B = higher) and the number is flammability (2 = lower flammability, but still flammable). Ammonia also attacks copper, so its controls use steel diaphragms — a further practical consequence of the same choice.",
            },
          ],
        },

        /* ================================================================
           11 — Environmental effects and licensing
           ================================================================ */
        {
          id: "environmental-effects-and-licensing",
          title: "Environmental effects of refrigerants: ozone, global warming and licensing",
          minutes: 14,
          simple:
            "The chemicals that made refrigeration cheap and safe turned out to eat the ozone layer, and their replacements turned out to be powerful greenhouse gases. World agreements now control both, and in Australia you need a licence to touch refrigerant at all. Every gram you let escape is somebody's problem later.",
          refs: R_ENV,
          content: `## Two separate environmental problems

Refrigerants cause two distinct kinds of harm, and confusing them is common. **Ozone depletion** is caused by chlorine and bromine reaching the stratosphere. **Global warming** is caused by gases that trap heat in the lower atmosphere. A refrigerant can be innocent of one and guilty of the other: R134a has zero ODP and a GWP over a thousand.

## The ozone layer

About 20 to 30 kilometres above the Earth, in the stratosphere, sits a band of concentrated ozone. It absorbs most of the sun's harmful ultraviolet radiation. Depletion of that layer means more UV reaching the surface, and the consequences identified include:

- In people: higher rates of skin cancer, eye cataracts, sunburn and immune system damage.
- Environmentally: reduction in phytoplankton, which is the base of the marine food chain.

### How the destruction works

1. High in the atmosphere, ultraviolet light splits a very reactive chlorine atom (Cl) away from a chlorofluorocarbon molecule.
2. That chlorine atom attacks an ozone molecule (O3), splitting it apart and attaching itself to one of the oxygen atoms to form chlorine monoxide (ClO), leaving an oxygen molecule (O2).
3. A free oxygen atom then splits the chlorine monoxide, forming another O2 and releasing the chlorine atom again.
4. The chlorine atom is now free to repeat the whole process — one atom destroys ozone molecules over and over.

Bromine monoxide does the same job, and more aggressively. CFCs are the source of about 80 per cent of atmospheric chlorine. The conditions that make polar depletion so severe are the still air inside the polar vortex, the reservoirs of chlorine that accumulate there, and the return of ultraviolet radiation in the polar spring.

**Ozone depletion potential (ODP)** measures a refrigerant's ability to do this, on a scale where R11 is 1.0. It reflects the proportion of chlorine by weight in the molecule and how long the compound survives in the atmosphere. R12 is 1.0, R22 about 0.055, and HFCs, HCs, ammonia and CO2 are all zero — they contain no chlorine.

## The Montreal Protocol

Australia is a signatory to the Montreal Protocol, which sets a mandatory timetable for phasing out ozone-depleting substances. Its original 1987 requirements were tightened by the 1990 London and 1992 Copenhagen revisions.

| Substance | Montreal 1987 | London 1990 | Copenhagen 1992 |
|---|---|---|---|
| CFCs (R11, R12, R113, R114, R115, R500, R502 and others) | Freeze production at 1986 levels by 1989; 20% cut by mid-1993; further 30% cut by mid-1998 | 50% cut by 1995; complete phase-out by 2000 other than essential uses | 75% cut by 1994; 100% phase-out by 1996 |
| HCFCs (R22 and others) | Not included | Not included, but to be reviewed in 1992 | Freeze in 1996 at 1989 levels, then progressive cuts of 35%, 65%, 90% and 99.5%, with complete phase-out by 2030 |

Australia went further and faster than the Protocol required on HCFCs: import of bulk HCFCs including R22 ended on 1 January 2020. Existing R22 plant may keep running on recovered or reclaimed gas, but no new HCFC comes into the country. That is why R22 changeovers are still routine service work.

## Global warming

The atmosphere is a thin film of gases, some of which — carbon dioxide, methane, nitrous oxide — trap part of the heat the Earth radiates back to space. Two centuries of industrialisation have measurably changed its composition. The source text quotes increases over pre-industrial levels of about 28 per cent for carbon dioxide, 145 per cent for methane and 13 per cent for nitrous oxide; the carbon dioxide figure has climbed further since. Fluorinated compounds — CFCs, HCFCs and HFCs — are present in far smaller concentrations but are extremely potent and long-lived.

Potential effects include reduced yields of some food and cereal crops, rising sea levels and flooding as polar ice melts, and shifts in global weather patterns.

**Global warming potential (GWP)** compares the warming caused by one kilogram of a gas with one kilogram of carbon dioxide over a set period, usually 100 years. Carbon dioxide is 1 by definition.

| Refrigerant | Type | ODP | GWP (100-year, AR4 basis) |
|---|---|---|---|
| R12 | CFC | 1.0 | 10 900 |
| R22 | HCFC | 0.055 | 1810 |
| R134a | HFC | 0 | 1430 |
| R410A | HFC blend | 0 | 2088 |
| R404A | HFC blend | 0 | 3922 |
| R32 | HFC | 0 | 675 |
| R1234yf | HFO | 0 | 4 |
| R290 propane | HC | 0 | 3 |
| R717 ammonia | Inorganic | 0 | 0 |
| R744 carbon dioxide | Inorganic | 0 | 1 |

### Direct and indirect effects, and TEWI

Refrigeration warms the planet two ways.

- **Direct**: refrigerant leaking to atmosphere from equipment, from poor service practice or from decommissioning.
- **Indirect**: carbon dioxide produced generating the electricity that runs the plant. Given that the sector uses around a fifth of Australia's electricity, this is the larger term for most systems.

**Total equivalent warming impact (TEWI)** adds the two together: the direct effect of leakage and recovery rate, plus the indirect effect of the carbon produced to power the plant over its life. The more efficient the plant, the lower the TEWI. A low-GWP refrigerant helps the direct term; good maintenance, tight containment and renewable energy help both.

That is the practical message for a technician: a well-charged, clean, correctly controlled plant with no leaks is an environmental measure, not just a mechanical one.

## Kyoto, Doha and Kigali

- **Kyoto Protocol.** An agreement under the UN Framework Convention on Climate Change, adopted in Kyoto on 11 December 1997 and entering into force on 16 February 2005, with implementation rules agreed at Marrakesh in 2001. It set binding emission reduction targets, placing a heavier burden on developed nations under the principle of common but differentiated responsibilities. Its first commitment period ran 2008 to 2012, during which 37 industrialised countries and the European Community committed to an average five per cent reduction against 1990 levels.
- **Doha Amendment.** Adopted in Doha on 8 December 2012. It created a second commitment period from 1 January 2013 to 31 December 2020, revised the list of greenhouse gases to be reported, and updated Protocol articles written for the first period. Parties committed to reduce emissions by at least 18 per cent below 1990 levels over those eight years.
- **Kigali Amendment.** Agreed in Kigali, Rwanda, in October 2016 and in force from 1 January 2019. This one is aimed squarely at our industry: it brings HFCs under the Montreal Protocol and requires a **phase-down** — a stepped reduction in production and consumption, not a complete phase-out. Developed countries began reducing in 2019, working towards about 15 per cent of their baseline by 2036. Australia ratified Kigali and had already begun its own HFC phase-down on 1 January 2018, using an import quota that steps down over the same period.

The practical result of Kigali is that high-GWP HFCs become progressively scarcer and dearer. R404A, at a GWP near 3900, is the obvious casualty; supermarkets and cold storage have been moving to CO2, ammonia and lower-GWP blends for exactly this reason.

## Refrigerant licensing in Australia

On 1 July 2005 the Australian Government introduced a licensing scheme supporting the regulations under the **Ozone Protection and Synthetic Greenhouse Gas Management Act 1989**, to cut emissions of harmful refrigerant gases. The **Australian Refrigeration Council (ARC)** administers it on the government's behalf — the scheme most people call ARCtick.

There are two kinds of authorisation.

| Authorisation | Who needs it | What it covers |
|---|---|---|
| Refrigerant Handling Licence (RHL) | An individual doing work on RAC equipment | Decanting, manufacturing, installing, commissioning, servicing and maintaining equipment — whether or not refrigerant is present — and decommissioning equipment that contains refrigerant |
| Refrigerant Trading Authorisation (RTA) | A business or individual dealing in refrigerant | Purchasing, selling, storing, disposing of and recovering refrigerant |

Three kinds of RTA are issued:

1. The common one, for acquiring, storing and disposing of refrigerant other than halon — wholesalers, RAC and automotive businesses, sole traders and contractors.
2. **RAEMA** — for businesses acquiring refrigerant to manufacture RAC equipment.
3. **RRTA** (Restricted) — for businesses authorised to recover, store and dispose of refrigerant only: metal recyclers, auto parts recyclers, waste management operators.

Licensed handlers must be qualified and must comply with the industry codes of practice: the **Refrigerant Handling Code of Practice 2007, Parts 1 and 2**, and the **Automotive Code of Practice**.

>! Acquiring, possessing or storing refrigerant without a current RTA is an offence of **strict liability**, and so is handling refrigerant when you hold no current RHL. Strict liability means the prosecution does not need to prove you intended to break the rule — doing it is enough. Businesses and individuals operating without the authorisation are referred to the relevant federal department. Check the ARC website for current licence requirements; the scheme is periodically revised.

## On the job

- Ozone depletion comes from chlorine and bromine; global warming comes from heat-trapping gases. A zero-ODP refrigerant can still be a serious greenhouse gas.
- One chlorine atom destroys ozone molecules repeatedly — that is why small leaks mattered so much.
- Montreal killed CFCs and is finishing HCFCs; Kigali is phasing down HFCs from 2019, and Australia started its quota step-down in 2018.
- TEWI = leakage plus the carbon cost of the energy used. Efficiency is an environmental control.
- You need an RHL to handle refrigerant and an RTA to buy or store it, and the offence is strict liability.`,
          quiz: [
            {
              q: "R134a has an ODP of zero. What does that tell you about its environmental acceptability?",
              options: [
                "It is environmentally harmless and can be vented safely",
                "It does not deplete ozone because it contains no chlorine, but it has a GWP over 1400 and is being phased down under Kigali",
                "It has a zero GWP as well, since the two are linked",
                "It is exempt from Australian licensing requirements",
              ],
              answer: 1,
              explain: "ODP and GWP are independent. R134a is chlorine-free, so it does not attack ozone, but each kilogram released warms the atmosphere as much as roughly 1400 kg of carbon dioxide. Venting any fluorocarbon refrigerant is illegal in Australia regardless of ODP.",
            },
            {
              q: "What is the essential difference between the Montreal Protocol's treatment of CFCs and the Kigali Amendment's treatment of HFCs?",
              options: [
                "Montreal was voluntary and Kigali is binding",
                "Montreal phased CFCs out completely, while Kigali requires a stepped phase-down of HFC production and consumption rather than elimination",
                "Kigali applies only to developing countries",
                "Montreal dealt with global warming and Kigali deals with ozone",
              ],
              answer: 1,
              explain: "CFCs were eliminated because any chlorine release damages ozone. HFCs do not touch ozone, so Kigali reduces them in steps toward about 15 per cent of baseline — a phase-down, which is why high-GWP HFCs become scarce and expensive rather than illegal overnight.",
            },
            {
              q: "A plant leaks 2 per cent of its charge a year but runs 20 per cent below its design efficiency because of a fouled condenser. In TEWI terms, what is likely to dominate?",
              options: [
                "The direct effect of the leak, since refrigerant GWPs are high",
                "The indirect effect of the extra electricity consumed, since energy use is the larger term for most systems",
                "Neither — TEWI only counts refrigerant emissions",
                "It cannot be assessed without knowing the refrigerant's ODP",
              ],
              answer: 1,
              explain: "TEWI combines direct leakage with the carbon produced generating the plant's electricity. For most systems the indirect term dominates over the life of the plant, which is why cleaning a condenser is genuinely an environmental job.",
            },
            {
              q: "An apprentice without a Refrigerant Handling Licence recovers refrigerant from a system while unsupervised. What is the legal position?",
              options: [
                "It is acceptable because they are employed by a licensed business",
                "It is an offence of strict liability under the Ozone Protection and Synthetic Greenhouse Gas Management Act regulations — intent does not need to be proven",
                "It is acceptable provided the refrigerant is not vented",
                "It only becomes an offence if a leak occurs",
              ],
              answer: 1,
              explain: "Handling refrigerant requires a current RHL held by the individual, and the offence is one of strict liability. A trainee works under the licence arrangements their employer and the ARC scheme allow — not on the strength of the company's RTA alone.",
            },
          ],
        },

        /* ================================================================
           12 — Performance, glide, lubricants, system considerations
           ================================================================ */
        {
          id: "refrigerant-performance-glide-and-lubricants",
          title: "Refrigerant performance, temperature glide, lubricants and system considerations",
          minutes: 14,
          simple:
            "Refrigerants are not interchangeable. Two of them at the same temperature can sit at completely different pressures, need different oils, and some blends do not even boil at a single temperature. Knowing which numbers to compare, and which oil belongs with which gas, is what stops a retrofit turning into a burnt-out compressor.",
          refs: R_PERF,
          content: `## Compare refrigerants on equal terms

Every refrigerant performs differently, so any comparison must be made at identical operating conditions — the same evaporating and condensing temperatures — and must cover coefficient of performance, compression ratio, mass flow rate and temperature glide, not just pressure. Comparative data of this kind is published in refrigerant selection guides.

| Refrigerant | Family | Boiling point at 101.3 kPa (°C) | Evaporator pressure (kPa A) | Condensing pressure (kPa A) | Compression ratio | COP | Glide (K) |
|---|---|---|---|---|---|---|---|
| R11 | CFC | 23.82 | 20 | 126 | 6.19 | 4.99 | 0 |
| R12 | CFC | −29.79 | 183 | 745 | 4.08 | 4.73 | 0 |
| R502 | CFC blend | −45.4 | 349 | 1319 | 3.78 | 4.41 | 0 |
| R22 | HCFC | −40.76 | 296 | 1192 | 4.03 | 4.61 | 0 |
| R123 | HCFC | 27.85 | 20 | 110 | 6.96 | 4.95 | 0 |
| R401A | HCFC blend | −32.97 | 168/214 | 768/888 | 4.46 | 4.68 | 5 |
| R409A | HCFC blend | −34.3 | 165/225 | 770/933 | 4.31 | 4.80 | 8 |
| R125 | HFC | −48.6 | 400 | 1570 | 3.93 | 3.68 | 0 |
| R134a | HFC | −26.16 | 160 | 770 | 4.81 | 4.42 | 0 |
| R404A | HFC blend | −46.5 | 344/355 | 1409/1428 | 3.92 | 4.28 | 1 |
| R407C | HFC blend | −44 to −36.8 | 293/334 | 1241/1341 | 4.46 | 4.54 | 6 |
| R410A | HFC blend | −50.5 | 481 | 1883 | 3.87 | 4.31 | 0 |
| R507 | HFC blend | −46.7 | 380 | 1465 | 3.87 | 4.32 | 0 |
| R717 ammonia | Inorganic | −33.3 | 236 | 1164 | 4.94 | 4.84 | 0 |

Read across the table and the trade-offs jump out. R123 and R11 operate at pressures close to and below atmospheric — low-pressure refrigerants for large centrifugal chillers, needing enormous vapour volumes but giving high COP. R410A works at nearly four times the pressure of R134a for a similar COP, which is why R410A pipework, components and gauges are rated differently. Ammonia has the best COP on the list and one of the highest compression ratios. Freezing points also matter for low-temperature work: R12 freezes at −158 °C, R22 at −160 °C, R134a at −97 °C.

Where two pressures are shown, such as 293/334, the first is the absolute vapour (dew) pressure and the second the absolute liquid (bubble) pressure. That difference is the fingerprint of a blend with glide.

## Temperature glide

A single-component refrigerant such as R134a boils at one constant temperature for a given pressure. Blends do not all behave that way.

- **Azeotropes** are mixtures that behave as if they were a single substance: they boil at a constant temperature for a given pressure. R502 and R507 are examples, and they carry R500-series numbers.
- **Zeotropes** (non-azeotropic blends, the R400 series) change composition as they boil. As the mixture evaporates, the vapour coming off is richer in the more volatile, lower-boiling component, so the remaining liquid becomes richer in the less volatile component and boils at a progressively higher temperature.
- **Near-azeotropes** behave almost, but not quite, like a single substance — a small glide.

That rise in boiling temperature as the refrigerant travels through the evaporator is **temperature glide**, and the reverse happens during condensation. The mixture returns to its original composition once fully evaporated or fully condensed.

Glide has four consequences you meet on the job:

1. **Two saturation temperatures exist for one pressure.** The bubble point (where the liquid starts to boil) and the dew point (where the last liquid disappears) differ by the glide. R407C, with about 6 K of glide, is the classic example.
2. **Superheat must be calculated from the dew point**, and subcooling from the bubble point. Use the wrong column and every superheat figure is out by the glide.
3. **Blends with glide must be charged as liquid.** Taking vapour from the cylinder draws off the more volatile component first and leaves the wrong mixture behind in both cylinder and system.
4. **A leak fractionates the charge.** After a significant leak on a zeotropic blend, topping up does not restore the original composition. The correct repair is to recover, fix, evacuate and recharge with new refrigerant.

The glide figures quoted for R400-series blends usually give the evaporating glide first and the condensing glide second.

## Using pressure-temperature tables in the field

To use a PT table, find the temperature in the left column and read across to the column for your refrigerant; or work backwards from a gauge pressure to a saturation temperature. The temperature quoted is always the temperature of the liquid refrigerant, and the same table gives both condensing and evaporating values — condensing being the higher figures. Keep these points in mind:

1. Refrigerant in an operating cooling coil sits roughly 1 K to 20 K below the coil surface temperature, depending on the application.
2. With the compressor stopped, coil refrigerant temperature equals coil surface temperature.
3. Refrigerant in an operating fan-cooled air-cooled condenser runs about 6 K to 20 K above the entering air temperature; a natural-draught condenser, as on a domestic unit, runs 20 K to 30 K above.
4. Refrigerant in a water-cooled condenser runs about 6 K to 9 K above the leaving water temperature.
5. Fifteen to thirty minutes after shutdown, condenser refrigerant temperature equals the cooling medium temperature.
6. **Actual boiling and condensing temperatures can only be determined from the suction and head pressures** — never guessed from pipe temperatures.

## Refrigerants and lubricants

New-generation refrigerants depend far more heavily on the correct oil than the old CFCs did. Get this wrong and the compressor either loses lubrication or gains acid.

| Lubricant | Used with | Handling notes |
|---|---|---|
| Mineral oil | CFCs, HCFCs such as R12, R22, R502, and some HCFC blends (R403A, R405A, R406A, R408A, R409A) | Traditional, does not absorb moisture readily |
| Alkyl benzene (AB) | HCFC service blends such as R401A, R401B, R401C, R402A; often 50 per cent replacement of the mineral charge | Does not readily absorb moisture, so it is handled like mineral oil |
| Polyol ester (POE) | HFCs and HFC blends: R134a, R404A, R407A/B/C, R410A, R507 | Strongly hygroscopic — never leave a container or a system open to atmosphere. Also dissolves system debris, so driers matter |
| PAG (polyalkylene glycol) | Automotive air-conditioning compressors, usually with R134a | Absorbs moisture about ten times more readily than POE; not generally compatible with mineral oil or CFC-12, so not usually suitable for retrofits |

Specific cases worth knowing:

- **R134a** operates at pressures similar to R12 and suits most CFC-12 materials, but it will **not** work with conventional mineral oil. New systems normally use POE. Different driers are required. Existing R12 and mineral oil systems can be retrofitted to R134a with POE because R12 and mineral oil are compatible with POE.
- **R404A** replaces R502 but will not run on the old mineral oil. POE is specified, and residual mineral oil must be flushed down to less than 5 per cent.
- **R410A** is a near-azeotropic HFC blend replacing R22, requiring POE. It is a high-pressure refrigerant for **new equipment only** — it is not a retrofit gas.
- **R507** is an azeotropic HFC blend replacing R502; POE again.
- **R123** is a low-pressure refrigerant replacing R11 in centrifugal chillers, compatible with most R11 materials including the oil, except motor windings and gaskets. Its toxicity testing led manufacturers to set acceptable exposure limits for long-term workplace exposure.
- **R401A** replaces R12 where evaporating temperatures are −23 °C to −7 °C, **R401B** where they are −40 °C to −23 °C. Both call for about half the mineral oil to be replaced with alkyl benzene, and drier cores usually need upgrading.
- **R417A** replaces R22 and works with mineral, AB or POE oil, but is not suitable for flooded evaporators or centrifugal compressors.

## Application and replacement, in outline

| Sector and original refrigerant | Typical service retrofit | Typical new equipment choice |
|---|---|---|
| Domestic refrigerators, R12 | R134a, R401A, R409A, R413A | R134a, or hydrocarbon (R600a) |
| Commercial medium temperature, R12 | R134a, R401A, R409A, R413A | R134a, R404A, R407A, R507 |
| Commercial low temperature, R502 | R402A, R402B, R403A, R408A | R404A, R407B, R507, R744 |
| Air-conditioning and heat pumps, R22 | R407C, R417A | R410A, R32, R407C |
| Large commercial and industrial, R12 or R502 | R134a, R404A, R507 | R717 ammonia, R744 CO2, R134a, absorption |
| Centrifugal chillers, R11 or R113 | R123 | R123, R134a, R717 |
| Mobile air-conditioning, R12 | R134a, R413A | R134a, moving to R1234yf |

>! Never mix refrigerants in a system or a cylinder. A mixed charge cannot be reclaimed to a usable grade, will not follow any PT chart you own, and turns a repairable system into an expensive disposal job. Always confirm what is in a system before connecting: read the label, and if there is no label, recover a sample and test it.

## Natural refrigerants

The push away from high-GWP synthetics has brought the original refrigerants back.

- **R290 propane.** A hydrocarbon used industrially for many years. Not ozone-depleting, negligible GWP, good thermodynamics, and flammable (A3). Charge limits and ignition-source control govern its use.
- **R600a isobutane.** Used in domestic refrigeration where charges are small, and in hydrocarbon blends. A3 flammable; systems must be built to flameproof requirements.
- **R1270 propylene (propene).** Similar to propane, also A3, proposed as an R22 and R502 substitute.
- **R717 ammonia.** Long history in industrial plant. Zero ODP, no direct GWP, very efficient with a high latent heat. Against it: high discharge temperatures, corrosive to copper-bearing materials, toxic and flammable — but the smell warns you long before the concentration is dangerous.
- **R723**, a blend of ammonia and dimethyl ether, offering better oil transport and heat transmission with conventional lubricants and lower discharge temperatures than plain ammonia.
- **R744 carbon dioxide.** Cheap, non-flammable, non-toxic in the ordinary sense, zero ODP and a GWP of 1. Its characteristics change the way systems are built:
  - Operating pressures are very high — higher than R410A — so components and pipework must be rated for it. High-wall-thickness copper as used for R410A suits most commercial CO2 work.
  - It is heavier than air and collects in low areas; in high concentration in an enclosed space it will asphyxiate, so monitoring is required even though it is not classed as toxic.
  - Oil solubility is good, so direct expansion applications are straightforward.
  - Its critical temperature is low — near 31 °C — so in many Australian applications the system runs transcritical, with both benefits and design challenges.
  - **Below about 520 kPa, liquid CO2 cannot exist and solid dry ice forms.** That governs charging procedure and the design and siting of relief valves.
  - It suits low-temperature duty especially well: industrial freezing, blast, spiral and plate freezers, supermarket freezer cases, cold storage large and small, and heat pumps. It also cascades neatly with any high-stage refrigerant.

>! Dry ice forming in a CO2 system during service is not a curiosity — it will block a valve or a line solid, and it forms at −78 °C, cold enough to cause immediate frostbite. Follow the manufacturer's charging and pressure-relief procedures for CO2 exactly; the habits you learned on fluorocarbon plant do not transfer.

## What to remember

- Compare refrigerants only at matched evaporating and condensing conditions, and look at COP, compression ratio, mass flow and glide together.
- Azeotropes act like a single fluid; zeotropes (R400 series) glide, so they have separate bubble and dew points, must be liquid-charged, and cannot be topped up after a significant leak.
- Superheat comes off the dew point, subcooling off the bubble point.
- Oil follows refrigerant: mineral with CFC/HCFC, alkyl benzene with the HCFC service blends, POE with HFCs, PAG in automotive. POE and PAG absorb water greedily.
- R410A is new equipment only; R404A needs residual mineral oil under 5 per cent; CO2 needs its own pressure ratings and its own service habits.`,
          quiz: [
            {
              q: "A technician measures superheat on an R407C system using the bubble-point column of the PT chart. What is the effect?",
              options: [
                "No effect, because bubble and dew point are the same",
                "The calculated superheat is wrong by roughly the glide — about 6 K — because superheat must be referenced to the dew point",
                "The superheat reads correctly but the subcooling reads wrong",
                "The gauge must be recalibrated",
              ],
              answer: 1,
              explain: "R407C is a zeotrope with about 6 K of glide, so one pressure gives two saturation temperatures. Superheat is measured from the dew point, where the last liquid vanishes; subcooling from the bubble point. Using the wrong column shifts every reading by the glide.",
            },
            {
              q: "An R404A system has lost 40 per cent of its charge through a leak. What is the correct repair?",
              options: [
                "Top up with R404A vapour from the cylinder until the pressures look right",
                "Top up with liquid R404A only",
                "Recover the remaining charge, repair the leak, evacuate and recharge with new refrigerant, because the remaining charge has fractionated",
                "Change the system to R22",
              ],
              answer: 2,
              explain: "A blend that leaks loses more of its volatile components, so the charge left behind is no longer the design mixture. Topping up cannot restore the composition. Blends are always charged as liquid for the same reason — vapour draw fractionates the cylinder.",
            },
            {
              q: "Why can an R12 system with mineral oil not simply be charged with R134a?",
              options: [
                "R134a operates at far higher pressures than R12",
                "R134a will not circulate or return conventional mineral oil, so the lubricant must be changed to polyol ester and the driers changed as well",
                "R134a attacks copper tubing",
                "R134a has a much higher ODP than R12",
              ],
              answer: 1,
              explain: "R134a runs at pressures similar to R12 and suits most of the same materials, but it does not work with mineral oil. POE is used, different driers are required, and POE must not be left open to atmosphere because it absorbs moisture rapidly.",
            },
            {
              q: "Which statement about carbon dioxide (R744) as a refrigerant is correct?",
              options: [
                "It has a high critical temperature, so it always condenses normally in Australian ambients",
                "It operates at very high pressures, has a low critical temperature near 31 °C so systems often run transcritical, and forms dry ice below about 520 kPa",
                "It is toxic and must never be used in occupied buildings",
                "It cannot be used with copper pipework under any circumstances",
              ],
              answer: 1,
              explain: "CO2's low critical temperature is what forces transcritical operation in warm climates, and its high working pressure drives component selection — high-wall-thickness copper as used for R410A is generally suitable. Below about 520 kPa liquid CO2 cannot exist and dry ice forms, which affects charging and relief valve design.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
