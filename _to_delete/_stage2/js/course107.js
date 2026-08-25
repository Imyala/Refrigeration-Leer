/* =========================================================================
   Course content, module 107 — Domestic, commercial and industrial systems.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 7 — Domestic, commercial and
   industrial systems.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 7, Domestic, commercial and industrial systems",
    "AS/NZS 1677.2 — refrigerating systems: safety requirements for fixed applications (charge limits, relief, machinery rooms)",
    "Australian Refrigerant Handling Code of Practice Part 1 — ARCtick licensed work on sealed and field-piped systems",
  ];

  const MODULES = [
    {
      id: "v1-system-types",
      stream: "v1",
      title: "R1.7 · Domestic, commercial and industrial systems",
      blurb: "How the same vapour-compression cycle is packaged three different ways — the household fridge, the supermarket rack, and the industrial booster plant — and what a technician does with each.",
      lessons: [

        /* ============================================================== */
        {
          id: "domestic-refrigeration-systems",
          title: "Domestic refrigeration and how the cabinets are built",
          minutes: 13,
          simple: "A household fridge is the same cycle you already know, just very small and built to run for years with nobody touching it. This lesson sorts the common cabinet types into three families and shows how each one gets rid of its frost. Think of it as learning the three body shapes before you start diagnosing engines.",
          refs: REFS,
          content: `
There are millions of domestic refrigerators built every year, and every one of
them runs around the clock for a decade or more. Individually they are small.
Collectively they are one of the biggest electrical loads in the country — a
fridge can account for roughly a fifth of a household electricity bill. That is
why energy labelling matters: every appliance sold in Australia carries a star
rating, more stars meaning less energy for the same job, with the fleet average
sitting near the low end of the scale. Newer features push the same way: several
temperature sensors so compartments can be held at different temperatures,
better humidity control, and network-connected cabinets that report their own
temperatures.

## What is inside a domestic system

Sizes run from a single small cabinet with one freezer evaporator and natural
air circulation into the food compartment, right up to forced-draught
multi-compartment cabinets over 600 litres.

The refrigerant is normally HFC **R134a**, which replaced CFC R12, or the
hydrocarbon **R600a** (isobutane). R290 (propane) is used mostly in
air-conditioning but turns up in some domestic and small commercial equipment.

Every one of these uses a **capillary tube** as its refrigerant control. A
capillary has no moving parts and cannot compensate for the wrong quantity of
refrigerant, so the charge is not approximate — it is a specified mass, accurate
to within about 30 grams. On an R600a cabinet the whole charge may be only 40 to
70 grams, so a careless top-up is a large percentage error and the cabinet will
never hold temperature again.

A few cabinets use two complete sealed systems, one for the food compartment and
one for the freezer. They control beautifully because each system has its own
thermostat, but they cost more to build, and refinements to single-system
designs have closed most of the performance gap.

## The three families

| Family | How the freezer coil is defrosted | Typical size | What the learner should notice |
|---|---|---|---|
| Automatic defrost | Hot gas or electric heater, timer or push-button initiated | Up to about 300 litres | One evaporator only, natural air circulation |
| Cyclic (off-cycle) defrost | Food compartment plate defrosts every off cycle; freezer scraped or auto-defrosted | About 400 litres, two doors | One circuit feeding two coils in series |
| Frost-free, forced draught | Always automatic, timer initiated and temperature terminated | Over 400 litres | Fans, ducts and a finned coil serving both compartments |

## The automatic defrost cabinet

A single evaporator sits at the top of the cabinet, holding up to about 100
litres of frozen goods, fed through a capillary tube. Air reaches the food
compartment below by natural circulation.

Hot gas defrost is common on this design. A solenoid valve opens a line from the
compressor discharge straight into the evaporator inlet, and the superheated
vapour melts the ice off from inside the tube. Defrost is started manually or by
a timer, and must always be terminated automatically — by the timer after about
40 to 45 minutes, or by a second thermostat that drops the solenoid out once the
evaporator surface passes roughly 7 °C. The alternative is an electric heater
clamped to the evaporator, started and stopped exactly the same way.

Defrost water either collects in a container inside the cabinet for the owner to
empty, or drains to a tray in the machinery compartment where heat from the
condenser or the sealed unit boils it away.

### Where the discharge vapour goes on its way to the condenser

Follow the discharge line on a typical cabinet and you will see it earns its
keep several times before it reaches the condenser proper:

1. Through the drain tray loop, evaporating the defrost water.
2. Around the door frame and the centre rail (the mullion) so frost and sweat do
   not form where the gaskets seal.
3. Through an oil cooling loop on the compressor shell.
4. Into the main condenser to reject the remaining heat.

That is why a "condenser" fault on a domestic can show up as a wet floor or an
iced-up door frame rather than high head pressure.

### The baffle nobody thinks about

Under the cooling coil is a baffle or drip tray. The gap around it sets how much
cold air spills down into the food compartment, and therefore what temperature
that compartment runs at. It cannot be left out or refitted in the wrong
position after a service. Some models fit an adjustable flap here so the owner
can select a summer or winter setting.

## Cyclic or off-cycle defrost cabinets

This is the simplest two-compartment design. A large food compartment with its
own evaporator is separated from the freezer by 25 to 50 mm of insulation, and
most models have two doors with the small freezer door on top.

There is only one refrigerant circuit. Liquid from the capillary enters the
freezer evaporator first, and whatever is left overflows into the food
compartment coil — the humiplate or humicoil — before returning through an
accumulator to the suction line. One thermostat runs the lot, with its bulb
clamped to the humiplate, so the design of that plate and the exact charge are
critical if both compartments are to sit at the right temperature.

The thermostat has a fixed cut-in: contacts close when the humiplate reaches
about 3 °C, by which time that plate has completely defrosted itself in the off
cycle. Cut-out is around -25 °C, low enough that the freezer compartment stays
below -18 °C continuously.

The freezer coil in these models is not defrosted by the off cycle, so frost
builds up and the owner scrapes it off every few months with the plastic scraper
supplied. Better models add automatic defrost of the freezer only — push-button
or timer, hot gas or electric — typically every eight hours of compressor
running time, while the humiplate keeps cleaning itself every off cycle.

!FIG[frost-spiral]

>! Hydrocarbon cabinets (R600a, R290) are flammable-charge appliances. Check the
>! rating plate before you cut into anything, recover rather than vent, keep
>! ignition sources away, work in ventilated space, and use tooling rated for
>! flammable refrigerants. All refrigerant handling requires an ARCtick licence.

## On the job

- Read the rating plate for refrigerant type and charge mass before you touch a
  sealed system; capillary systems will not tolerate a guessed charge.
- A cyclic cabinet with a warm food compartment and a very cold freezer usually
  has a charge or humiplate problem, not a thermostat problem.
- Never leave a defrost that is only terminated by a timer with no temperature
  back-up; and never refit a baffle or drip tray in the wrong place.
- Frost inside the food compartment of a cyclic model means the plate is not
  reaching 3 °C in the off cycle — check the thermostat cut-in and the bulb clamp.
`,
          quiz: [
            {
              q: "Why must the refrigerant charge in a domestic refrigerator be held to within about 30 grams?",
              options: [
                "Because hydrocarbon refrigerants are sold in 30 gram cylinders",
                "Because a capillary tube cannot adjust flow, so the charge itself sets the balance of the system",
                "Because the compressor overload is calibrated to the charge mass",
                "Because the star rating is measured at that tolerance",
              ],
              answer: 1,
              explain: "A capillary is a fixed restrictor with no feedback. A TX valve would respond to superheat and hide a small charge error, but a capillary system balances only at its design charge — too little starves the coil, too much floods the suction line. The overload responds to current and temperature, not charge mass.",
            },
            {
              q: "On a hot gas defrost domestic cabinet, defrost is started by a timer. What must also be provided?",
              options: [
                "A second timer running in parallel as a back-up",
                "A manual reset button on the compressor",
                "An automatic termination — the timer ending defrost after about 40 to 45 minutes, or a thermostat cutting the solenoid at about 7 °C coil temperature",
                "A pump-down solenoid in the liquid line",
              ],
              answer: 2,
              explain: "Defrost must always end automatically. Termination is by time (40 to 45 minutes) or, better, by evaporator surface temperature around 7 °C. Without termination the food compartment warms and the compressor runs on defrost duty indefinitely.",
            },
            {
              q: "In a cyclic defrost two-compartment cabinet, where is the thermostat bulb fitted and what is its cut-in temperature?",
              options: [
                "On the freezer evaporator, cutting in at -18 °C",
                "In the return air stream, cutting in at 7 °C",
                "On the humiplate in the food compartment, cutting in at about 3 °C",
                "On the suction line at the compressor, cutting in at 0 °C",
              ],
              answer: 2,
              explain: "The bulb sits on the humiplate, and cut-in at about 3 °C guarantees that plate has fully defrosted during the off cycle. Cut-out near -25 °C keeps the freezer below -18 °C. A bulb on the freezer coil would never let the food compartment plate clear itself.",
            },
            {
              q: "A domestic cabinet has water running out onto the kitchen floor and ice bridging the freezer door frame. Which circuit should you suspect first?",
              options: [
                "The evaporator fan motor",
                "The discharge vapour circuit that feeds the drain tray loop and mullion heating before the condenser",
                "The capillary tube",
                "The suction accumulator",
              ],
              answer: 1,
              explain: "On many domestics the discharge vapour evaporates the defrost water and warms the door frame and mullion on its way to the condenser. Lose that heat — restriction, wrong routing after a repair, or an electric mullion heater open circuit on heater-equipped models — and you get exactly those two symptoms together.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "frost-free-freezers-installation",
          title: "Frost-free cabinets, household freezers and installation",
          minutes: 13,
          simple: "Bigger fridges blow air around ducts instead of letting it drift, which means fans, heaters and a defrost timer. Freezers are the same idea with no fresh-food side. And half the complaints a technician gets are really installation faults — a cabinet jammed in a cupboard cannot throw its heat away any more than you can cool a room with the door shut.",
          refs: REFS,
          content: `
Once a cabinet gets past about 400 litres, natural air circulation stops being
good enough. Frost-free cabinets use a fan and ducts to give the close
temperature and humidity control you would expect from a forced-draught
coolroom, and that brings a whole set of extra components with it.

## Frost-free, forced-draught cabinets

These are two-door cabinets with the freezer above the food compartment, or, on
larger models, alongside it. One finned evaporator does all the work, and the
food compartment is supplied with cold air from that same coil.

- The evaporator is a **finned** coil rather than a plate, because it has forced
  air over it.
- Fans must run at freezer temperatures, so they are lubricated with special
  low-temperature greases, and the blade shape must not allow ice to build up on
  it — an iced blade both unbalances the fan and blocks the air.
- Air to the food compartment is metered by a **thermostatically controlled
  baffle plate**. It regulates the return air path and so controls the supply
  air, and its total movement is under ten millimetres. Bending it "to get more
  air" is a good way to ruin the calibration.
- Defrost must be frequent and complete. Electric and hot gas are both used, and
  in every case defrost is **timer initiated and temperature terminated**.
- Defrost water drains to a pan that is either condenser-heated or electrically
  heated. Where the condenser is fan-cooled there is not enough surface heat, so
  the electric pan heater is used.

Heaters appear everywhere frost or condensation could form: door frames and
mullions, drains, and special butter and crisper compartment heaters. The wiring
becomes genuinely complicated because some heaters are energised only while the
compressor runs, some only while it is off, some in parallel with the defrost
heater and some alternating with it.

> Get the service manual. One manufacturer's manual for a single frost-free
> model lists 368 replaceable part numbers. Ordering spares or rewiring heater
> circuits from memory is guesswork, and manuals are free or nearly free from
> the major brands.

## Household freezers

| Type | Evaporator | Defrost | Notes |
|---|---|---|---|
| Upright, static | Shelves themselves are the refrigerant circuit; natural circulation | Manual — cannot be defrosted automatically | Electric mullion heater stops the door freezing to the frame |
| Upright, forced draught | Finned coil and fan, as frost-free without the food compartment | Automatic, timer initiated | Same control complexity as a frost-free fridge |
| Chest | Tubing bonded to the inner liner; condenser tubing inside the outer shell | Manual | Cheapest to build, least convenient to use |

The chest freezer with tubing in the walls solves the cold-spot and surface
condensation problem neatly, because the outer skin is warmed by the condenser
tubing. It is not the most efficient arrangement, and it loses capacity in hot
weather unless the cabinet is installed with at least **50 mm clearance on all
sides** and up to **150 mm at the motor-compressor end**. Larger chest models go
back to a conventional forced-draught condenser in the machinery compartment.

## Dust on condensers

A forced-draught condenser on a domestic appliance will never be cleaned unless
somebody is called out for a fault. Dust settles on the fins, the air side
resistance rises, head pressure and discharge temperature climb, run time
lengthens and the running cost goes up with it.

One neat answer is a sheet-type condenser wound into a coil with the fan at one
end. Dust settles on the upper surfaces, but the undersides and the vertical
faces stay clean, so the coil keeps most of its performance with no maintenance
at all. It is a design response to a service reality: if maintenance will not
happen, design so that it is not needed.

!SIM[Watch head pressure climb on a dirty condenser](fault=dirtyCondenser)

## Installing a domestic refrigerator

Every manufacturer publishes installation rules, and a large share of "faulty
fridge" callouts are installation faults. Some cabinets with ice makers or
chilled water also need a water supply plumbed to the rear.

### Handling

- Use a padded hand trolley that will not foul the mechanism underneath the
  cabinet.
- Pick the cabinet up on the side nearest the door handle, so that if the door
  swings open in transit it does not tear off its hinges.
- Lift by the legs, not between them, or you will distort the base and the
  cabinet will never sit square again.

### Location

Allow at least 50 to 100 mm at the sides and above for air to move over the
condenser. Avoid curtains and drapes that block that air, avoid building the
cabinet into close-fitting joinery on all sides, and keep it away from ovens,
stoves and direct sunlight through a window.

The reasoning is the whole refrigeration cycle in one sentence: a refrigerator
must reject through its condenser every joule it absorbs inside the cabinet plus
the work the compressor puts in. Restrict its ability to reject heat and you
have directly restricted its ability to cool.

!FIG[heat-flow]

### Levelling

Most cabinets have adjustable rollers or levelling screws in the base and
spacing brackets at the back. Level and solid matters for three reasons: the
cabinet must not walk across the floor when a door is slammed; the door should
tend to swing closed rather than drift open; and a cabinet out of level twists
the door so the magnetic gasket cannot seal all round. A gasket that does not
seal means a continuous moisture load, a permanently frosted coil and a
compressor that never stops.

>! Isolate and prove dead before touching any heater circuit in a frost-free
>! cabinet. Mullion, drain, butter and crisper heaters are 240 V elements buried
>! in the cabinet lining, and several of them are live while the compressor is
>! off — the machine being "not running" tells you nothing.

## What to remember

- Frost-free defrost is always timer initiated and temperature terminated.
- The air baffle in the food compartment moves less than 10 mm; it is a
  calibrated part, not an adjustment.
- Chest freezers need 50 mm all round and up to 150 mm at the compressor end.
- Clearance, sunlight and hot appliances are refrigeration faults, not
  housekeeping details.
- Level the cabinet or the door gasket will not seal.
`,
          quiz: [
            {
              q: "In a frost-free cabinet, what does the thermostatically controlled baffle plate actually regulate?",
              options: [
                "The refrigerant flow to the food compartment coil",
                "The return air path, which in turn sets the supply air into the food compartment",
                "The speed of the evaporator fan",
                "The defrost heater duty cycle",
              ],
              answer: 1,
              explain: "There is only one evaporator; food compartment temperature is set by how much air circulates, and the baffle does that by regulating the return air duct. Its full travel is under 10 mm. Nothing about it changes refrigerant flow or fan speed.",
            },
            {
              q: "Why is an electrically heated drain pan used instead of a condenser-heated one on some cabinets?",
              options: [
                "Because electric heating is cheaper to run",
                "Because the condenser is fan-cooled and does not provide enough surface heat to evaporate the water",
                "Because hot gas defrost models cannot use a condenser-heated pan",
                "Because the pan must be heated while the compressor is running",
              ],
              answer: 1,
              explain: "A static (natural draught) condenser runs hot enough to boil off the defrost water in the tray. A fan-cooled condenser runs much cooler and is sized for airflow, so the water will not evaporate and an electric pan heater is fitted instead. Electric heating is the more expensive option, chosen because it works.",
            },
            {
              q: "A chest freezer with liner-mounted condenser tubing is failing to hold -18 °C in summer. What is the most likely installation cause?",
              options: [
                "The cabinet is on a carpeted floor",
                "It is pushed hard against walls with less than 50 mm clearance, especially at the compressor end",
                "The lid gasket is magnetic rather than friction fit",
                "The evaporator tubing is on the inner liner",
              ],
              answer: 1,
              explain: "The whole outer skin is the condenser, so it needs free air on every side — at least 50 mm, and up to 150 mm at the motor-compressor end. Boxed in, the condenser cannot reject heat and capacity falls away exactly when the ambient is highest.",
            },
            {
              q: "What is the service advantage of the coiled sheet-type condenser used on some domestic refrigerators?",
              options: [
                "It can be cleaned without removing the cabinet from its position",
                "Dust settles only on the upper surfaces, so the undersides and vertical faces stay clean and performance holds up without maintenance",
                "It has a lower refrigerant charge than a finned condenser",
                "It removes the need for a condenser fan",
              ],
              answer: 1,
              explain: "It is a design that accepts nobody will ever clean it. Dust falls on the top faces only, leaving the under and vertical surfaces working. It still uses a fan, and the charge is set by the system, not the condenser style.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "supermarket-merchandisers",
          title: "Commercial refrigeration and supermarket merchandisers",
          minutes: 14,
          simple: "Shop cabinets have to keep food cold while leaving it open for customers to grab, so they hold the cold in with a moving sheet of air called an air curtain. This lesson covers the three main cabinet shapes, how much refrigeration each metre of them needs, and why the airflow speed matters. Think of the cold air as water that will slop out of the tray if you tip it.",
          refs: REFS,
          content: `
Commercial refrigeration covers the design, installation and maintenance of the
refrigerated fixtures used by supermarkets, butchers, restaurants, hotels and
institutions to store, display, process and dispense perishable goods. Its
defining difficulty is the display cabinet: it must hold food at a safe
temperature while being deliberately open so customers can reach in.

Cabinets are either **self-contained** (a plug-in unit with compressor and
condenser on board) or **remote**, built to be joined end to end and fed from a
central plant. They fall into three families.

| Cabinet family | Typical product and temperature | How it is cooled | Refrigeration load per metre of length |
|---|---|---|---|
| Multi-deck display case | Dairy, cooked meats, cheese at about 4 °C | Coil in the base, fans blow air up and over the shelves behind an air curtain | Up to about 1700 W/m |
| Single-deck well case | Meat, fruit and vegetables; single or double-width freezers | Cold air held in the well, very little spillage | About 650 W/m for meat; about 960 W/m for double-width freezers |
| Reach-in (glass door) | Anything from florist cases to ice cream | Forced-draught coil, usually in the base with a rear duct | Lowest of the three; doors do the containment |

## The air curtain

An open multi-deck case works only because of a well-directed sheet of air
leaving a discharge duct at the top of the display opening and being caught by
the return grille at the bottom. Everything that goes wrong with these cases
goes wrong at that curtain.

To help it, an electrically heated rail is fitted along the front. It does two
jobs: the warm air rising just outside the curtain shields it from the shop air,
and the heat keeps the metal above the dew point so water does not condense on
the trim. The same anti-sweat heaters are fitted under the stainless rub strips
of well-type cases, where they also keep the edge comfortable for a customer
leaning on it.

Loads on multi-deck cases are enormous — up to about 1700 watts per metre of
case length — which is why many stores fit **night blinds**. Rolling a blind
down over the open front outside trading hours cuts spillage of cold air and
entrainment of shop air, dropping the overnight load and the power bill.

Well-type cases spill much less because the supply air is kept very cold and
therefore dense — heavy air sits in the well instead of mixing with shop air.
Fruit and vegetable versions are simpler, often use a mirror for display, and
may add a water misting system to keep produce looking fresh.

## Reach-in merchandisers

Retailers resisted glass doors for years, believing customers would not open
them. Energy costs and carbon reporting changed that, and reach-ins are now
normal for low-temperature product. They come self-contained or remote, in every
temperature range.

Two practical points on reach-ins:

- Cold air should flow **down over the doors and back up the rear of the
  cabinet**. Get that pattern the wrong way round and you ice the evaporator and
  the fan blades.
- The glass is heated so condensation does not form on it. A customer who cannot
  see the product will not open the door.

Freezer reach-ins need fully automatic defrost with heated drain trays and
pipes, by electric element or hot gas.

## Temperature and air velocity

Air off the coil must be cold — colder than you would run a coolroom coil —
because density is what keeps the air in the cabinet. That means low suction
temperatures and a low relative humidity in the case, which does not matter
because the product is pre-packaged.

Representative manufacturer data looks like this:

| Application | Cabinet temperature | Refrigerants in use | Saturated suction temperature | Curtain air velocity |
|---|---|---|---|---|
| Meat merchandiser | 0 °C | R134a, R22, R404A | about -17 °C | 0.5 m/s |
| Dairy multi-deck | 3 to 5 °C | R407A, R407C, R507 | -7 to -10 °C | 0.5 m/s |
| Double-width freezer | -20 °C | R404A, R507A, R403A, R22 | -34 to -38 °C | 0.5 m/s |
| Reach-in frozen food | -20 °C | R407B, R507 | about -32 °C | — |
| Reach-in ice cream | -25 °C | R507 | about -37 °C | — |

Curtain velocity is measured with an ordinary vane anemometer, the same
instrument used for air-conditioning work, and around 0.5 m/s is the target.
The velocity has to be right in both directions:

- **Too fast** and the curtain overshoots the return grille and spills cold air
  into the aisle.
- **Too slow** and the curtain is dragged apart, pulling warm shop air into the
  display.

## Worked example — sizing the load on an aisle

A store fits out one aisle with 12 m of dairy multi-deck, 6 m of meat well case
and 8 m of double-width freezer well. Estimate the load on each temperature
level.

Medium temperature:

- Dairy multi-deck: 12 m x 1700 W/m = 20 400 W
- Meat merchandiser: 6 m x 650 W/m = 3 900 W
- Total medium temperature = 24 300 W = **24.3 kW**

Low temperature:

- Double-width freezer: 8 m x 960 W/m = 7 680 W = **7.7 kW**

Two things follow immediately. First, the dairy run alone is most of the load,
which is why night blinds are worth fitting there before anywhere else. Second,
the two loads want completely different suction temperatures — roughly -8 °C
against -36 °C — so putting them on one compressor would force every kilogram of
vapour to be compressed from the lower condition. That is the argument for
separate racks, which the multiplex lesson picks up.

## Defrost frequency and the fault-finding order

Manufacturers state a defrost frequency for each cabinet, and it should not be
changed on a hunch. If a case genuinely needs more defrosts than specified,
work through the causes before you touch the timer:

1. Air spillage — curtain velocity, damaged honeycomb, blocked return grille.
2. Draughts in the shop — doorways, air-conditioning outlets aimed at the case.
3. Incorrect loading — product above the load line indicator blocking the ducts.
4. Refrigerant controls out of adjustment — superheat, EPR setting.
5. Incomplete defrost — the previous defrost never cleared the coil, so ice
   accumulates cycle by cycle.

>! Product safety is part of the job. A case that will not hold temperature is a
>! food-safety incident, not just a mechanical fault. Tell the store manager what
>! the temperatures are before you start, log them, and do not leave a cabinet
>! loaded and running out of specification overnight without telling somebody.

## On the job

- Measure the curtain with an anemometer before assuming a refrigeration fault.
- Check the load line indicator; over-stacked product is the most common cause
  of a warm case.
- Anti-sweat heaters and heated glass are part of the refrigeration system, not
  extras — a failed heater shows up as dripping trim or fogged doors.
- Night blinds are the cheapest kilowatt saving available on a multi-deck run.
`,
          quiz: [
            {
              q: "Air velocity across the front of a multi-deck case measures well above 0.5 m/s. What is the consequence?",
              options: [
                "Warm shop air is drawn into the display",
                "The curtain overshoots the return grille and spills cold air into the aisle",
                "The evaporator will run flooded",
                "The anti-sweat heaters will trip",
              ],
              answer: 1,
              explain: "Too high a velocity means the curtain cannot be captured at the return, so cold air falls into the aisle and is lost. Entrainment of warm shop air is the opposite fault, caused by too low a velocity. Both are cured at the airflow, not at the refrigerant controls.",
            },
            {
              q: "Why is the air off the coil of a display case kept much colder than a coolroom coil would be?",
              options: [
                "To reduce the humidity in the shop",
                "Because cold air is denser and dense air stays in the cabinet instead of mixing with shop air",
                "To allow longer intervals between defrosts",
                "Because the product is unwrapped and needs low humidity",
              ],
              answer: 1,
              explain: "Density is the containment mechanism. Cold, heavy air sits in the well or holds the curtain together. The low relative humidity that results is tolerable precisely because the product is pre-packaged.",
            },
            {
              q: "A 15 m dairy multi-deck run is being estimated at 1700 W/m. What refrigeration capacity does the run require?",
              options: [
                "2.55 kW",
                "11.3 kW",
                "25.5 kW",
                "255 kW",
              ],
              answer: 2,
              explain: "15 m x 1700 W/m = 25 500 W = 25.5 kW. Watching the units is the whole exercise: watts per metre times metres gives watts, and dividing by 1000 gives kilowatts.",
            },
            {
              q: "A freezer well case is icing up and needs extra defrosts. What should be checked before increasing defrost frequency?",
              options: [
                "The compressor oil level",
                "Air spillage, shop draughts, loading above the load line, control adjustment and whether the last defrost actually cleared the coil",
                "The condenser fan rotation",
                "The refrigerant type in the cabinet",
              ],
              answer: 1,
              explain: "Extra defrosts add heat to the case and cost energy, so they treat the symptom. The moisture is arriving from somewhere — spillage, draughts, blocked ducts from over-loading — or the previous defrost is incomplete and ice is accumulating each cycle.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "multi-evaporator-systems",
          title: "Multi-evaporator systems and installation accessories",
          minutes: 12,
          simple: "One condensing unit can feed several coolers if the pipework and valves are right. The traps are oil sitting in the wrong place, liquid draining from one coil into another, and refrigerant sneaking backwards when the machine stops. The valves in this lesson are the taps and one-way gates that stop all three.",
          refs: REFS,
          content: `
Running several evaporators from one condensing unit saves plant, space and
money. It also multiplies the number of ways an installation can go wrong,
because the pipework now has to carry oil back from several directions and the
refrigerant has more than one place to hide.

Start with the easy case: two or more evaporators all working at the **same**
temperature.

## Rules for a single-temperature multi-evaporator installation

- Size the suction branch from **each** evaporator for that evaporator's own
  load, so gas velocity stays high enough to carry oil.
- Size the common suction main for the **total** vapour flow, not for the
  largest branch.
- Pipe the connections so liquid spilling out of one evaporator cannot run into
  another and sit on its TX valve bulb — a bulb that sees liquid closes the
  valve and starves a coil that was working perfectly.
- Size the condensing unit for the total load of all cabinets, then fit some
  form of capacity control so it can follow the load down instead of short
  cycling.
- Fit an **oil separator** where suction lines are long, or where the combined
  evaporators can hold more oil than the compressor can safely lose.
- Fit **hand shut-off valves** wherever you may need to close off one evaporator
  for defrost, maintenance or service while the others keep working.
- Where evaporators are widely separated, treat the job as a multi-temperature
  installation even if all the cabinets are nominally the same. Different line
  lengths mean different pressure drops, and different pressure drops mean
  different evaporating temperatures.

That last point is the one people miss. Two identical coolrooms 60 metres apart
on one suction main are not running at the same evaporating temperature, and
whichever one has the longer run will be the warm one.

## What makes a system "multi-temperature"

The difference is not the number of evaporators — it is that in a
multi-temperature system every evaporator carries some device that lets its own
temperature be held independently of the others. Those devices may respond to
system pressure, evaporator temperature or cabinet temperature. Alongside them
sit the accessories below.

## Manual shut-off valves

Two constructions are common. The **packless (diaphragm) valve** seals the stem
with a metal diaphragm rather than packing, and it opens fully with very little
turning and very little pressure drop — the preferred type on small commercial
work and on beverage installations. The **packed valve** uses a conventional
gland and is more usual on larger commercial and industrial plant.

- Two-way valves must be fitted with the flow in the direction of the arrow cast
  into the body.
- Three-way valves close off only the branch at right angles; the two
  straight-through connections stay open and unrestricted, so they are used to
  control a branch off a main.
- Brazed connections are preferred over flares to keep leakage down.
- On big systems, group all the shut-off valves on a panel in the plant room and
  label every one with its purpose and normal position.

Where you fit the valve changes the risk you are carrying:

| Isolation method | What happens | The risk to manage |
|---|---|---|
| Hand valve in the liquid line (pump down) | The evaporator is emptied to the receiver | The receiver must be able to hold the full charge |
| Hand valve in the suction line only | The full charge stays in the evaporator | Liquid flood-back when the valve is reopened, and a leaking TX valve keeps filling the coil while it is shut |
| Valves in both lines | Full isolation for service | Remember to open them again in the right order |

## Non-return (check) valves

When evaporators at different temperatures share a compressor, the vapour in the
warmer evaporator is at a higher pressure than the vapour in the colder one —
whether the compressor is running or not. Vapour always drifts to the lowest
pressure point in the system, and when the compressor stops, that point is the
coldest evaporator.

Let that happen and three things follow:

1. The warm vapour gives up its heat inside the cold evaporator and condenses,
   so the cold cabinet's temperature rises.
2. Liquid accumulates in the cold coil, ready to slug the compressor at the next
   start.
3. Suction pressure stays down at the coldest evaporator's condition instead of
   rising to the warmest, so a low-pressure control never makes its cut-in
   contact. The result is a very long off cycle and wildly varying temperatures.

The cure is trivial and the omission is expensive: fit a **non-return valve** in
the suction line of every evaporator except the warmest, so vapour can leave a
cold coil but nothing can flow back into it. The same applies anywhere gas flow
reverses, including hot gas defrost circuits.

!FIG[txv-balance]

## High-pressure cut-outs

A high-pressure cut-out is mandatory thinking on any system where the condensing
medium can fail: all water-cooled condensers (the water can be shut off) and
large air-cooled condensers (a fan can fail).

Multi-temperature systems add a second reason. If somebody pumps down every
evaporator into a receiver that cannot hold the charge, the receiver and
condenser fill with liquid and the pressure becomes hydraulic — it can rocket
past safe limits above 3000 kPa in seconds, long before a relief device is a
comfortable last line of defence.

**Worked example.** An instantaneous beverage installation has three flooded
coolers, each holding up to 5 kg of refrigerant, and a receiver of 8 kg
capacity. Pump the lot down and you are asking the receiver to swallow 3 x 5 kg
= 15 kg into an 8 kg vessel. It cannot, so the surplus fills the condenser and
the pressure rises hydraulically. That is precisely the case the high-pressure
cut-out exists for.

The cut-out is often combined with the low-pressure control in a dual pressure
control, or wired separately in series with it. Its range is adjustable to suit
the refrigerant, but the differential is usually fixed wide so the system cannot
short cycle on head pressure. Electronic systems replace the switch with a
pressure transducer feeding a controller, which allows remote monitoring and
alarms as well as tripping.

>! A pumped-down section is a pressure vessel full of liquid. Never heat it,
>! never leave a section isolated with liquid trapped between two closed valves,
>! and fit or check the relief arrangements before you isolate anything.

## What to remember

- Branch lines are sized for their own load; the main is sized for the total.
- Fit oil separators on long or multiple suction line runs.
- Non-return valve in every suction except the warmest evaporator.
- Check the receiver can hold the charge before you pump anything down.
- Long, unequal pipe runs turn a single-temperature job into a
  multi-temperature one whether you planned it or not.
`,
          quiz: [
            {
              q: "Why is a non-return valve fitted in the suction line of the colder evaporators but not the warmest one?",
              options: [
                "To balance oil return between the evaporators",
                "To stop vapour from a warmer evaporator migrating to the coldest coil, where it would condense, warm the cabinet and collect as liquid",
                "To prevent the TX valve bulb from losing its charge",
                "So the compressor can pump down each coil in turn",
              ],
              answer: 1,
              explain: "Vapour flows to the lowest pressure, which off cycle is the coldest evaporator. Blocking that path stops cabinet temperature rise, liquid accumulation and the artificially low suction pressure that holds a low-pressure control open for hours. The warmest coil needs no valve because nothing is warmer to flow into it.",
            },
            {
              q: "An installer isolates one evaporator for defrost using only a suction line hand valve. What is the main hazard?",
              options: [
                "The compressor will run in a vacuum",
                "The receiver will overfill",
                "Liquid keeps entering through the TX valve while the coil is shut off, then floods back when the valve is reopened",
                "The oil separator will lose its seal",
              ],
              answer: 2,
              explain: "With the suction shut, the coil holds its charge, and any leakage through the TX valve keeps adding to it. Reopen the valve and that liquid heads straight for the compressor. Isolating in the liquid line and pumping down avoids it — provided the receiver can hold the charge.",
            },
            {
              q: "Two identical coolrooms run from one condensing unit, but one is 60 m from the plant and the other 10 m. What should the designer do?",
              options: [
                "Nothing; they are at the same temperature so the system is simple",
                "Treat the installation as multi-temperature, because unequal pressure drops give unequal evaporating temperatures",
                "Fit a larger compressor",
                "Run both from a single common suction branch sized for one room",
              ],
              answer: 1,
              explain: "Pressure drop along the longer suction run lowers the pressure the far coil sees relative to the compressor, so its evaporating temperature and capacity differ. Widely separated evaporators need individual pressure control, exactly as if their design temperatures were different.",
            },
            {
              q: "Three evaporators each hold up to 5 kg of refrigerant and the receiver holds 8 kg. What does that tell you?",
              options: [
                "The system is undercharged and needs 7 kg added",
                "A full pump-down would exceed the receiver capacity, so a high-pressure cut-out is essential protection",
                "The evaporators must be fitted with check valves",
                "The compressor must be unloaded before pump-down",
              ],
              answer: 1,
              explain: "15 kg of liquid cannot go into an 8 kg vessel. The excess backs up into the condenser and the pressure rises hydraulically with no vapour space to cushion it, which is why the high-pressure cut-out is a required safety control on this kind of system.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "multi-temperature-systems",
          title: "Multi-temperature systems: pressure valves, solenoids and beverage coolers",
          minutes: 13,
          simple: "One compressor, several rooms, all wanting different temperatures. You either hold the warm coil back with a pressure valve, or you switch each coil on and off with a thermostat and solenoid. This lesson works through the actual pressure settings on gauges, in kPa, so the numbers stop being abstract.",
          refs: REFS,
          content: `
A single condensing unit can serve evaporators at different temperatures, and
for decades that was how combination cabinets, hotel cellars and small stores
were built. Two arrangements cover most of what you will meet: the
constant-pressure valve system and the thermostat-and-solenoid system.

## Two-temperature system using a constant-pressure valve

Picture one condensing unit feeding a freezer at -20 °C (evaporating at -30 °C)
and a storage cabinet at +3 °C (evaporating at -10 °C). The compressor pulls the
system down to the freezer's condition, so the warm coil has to be held back.
A **constant-pressure (CP) valve** in the suction line of the storage coil does
that: it throttles to hold its evaporator pressure at the set value regardless
of what the compressor is doing downstream.

Four conditions must all be met for this to work:

1. The heat loads must be such that both compartments warm up at about the same
   rate during the off cycle.
2. The low-pressure control must cut out when the freezer is cold enough, and
   cut in when the storage cabinet has warmed to its highest safe temperature.
3. The CP valve must be set so the storage cabinet cannot be pulled below its
   minimum safe temperature.
4. Each refrigerant control must be able to feed the full capacity of the
   compressor, because at times it will be the only coil running.

### Worked example — turning temperatures into gauge settings on R134a

The settings are made on gauges, in gauge pressure, so every temperature has to
be converted. Remember gauge pressure = absolute pressure - atmospheric
pressure, and take atmospheric as about 101 kPa.

- **CP valve, storage evaporator at -10 °C.** R134a saturated at -10 °C is about
  201 kPa absolute. 201 - 101 = **100 kPa gauge**, so the valve is set to begin
  closing at about 100 kPa gauge.
- **Low-pressure cut-out, freezer evaporator at -26 °C.** R134a saturated at
  -26 °C is about 101 kPa absolute. 101 - 101 = **0 kPa gauge**, so the contacts
  are set to open at about zero on the compound gauge.
- **Low-pressure cut-in.** This depends on the storage coil. On a frosting,
  natural-draught coil, cut in at about **133 kPa gauge** — which is R134a
  saturated at roughly -6 °C — or after an off cycle of about 20 minutes. On a
  defrosting coil, the contacts must stay open until the coil has completely
  cleared, or you will refreeze the melt water.
- **Non-return valve** goes in the suction line from the freezer only, because
  it is the colder of the two.

!FIG[gauge-pt-ring]

### Where this system falls down

- If one compartment warms far faster than the other, temperatures wander and
  the product suffers.
- Automatic defrost is difficult to arrange. Close the storage compartment's
  hand valves for a manual defrost and the compressor cannot restart until the
  freezer has warmed all the way to the -6 °C (133 kPa) cut-in point. A defrost
  timer and solenoid instead of hand valves removes that human error.
- A continuously overloaded storage compartment holds the suction pressure up
  and the freezer never gets refrigerated at all.

## Multi-temperature system using thermostats and liquid line solenoids

The modern arrangement gives each room a thermostat and a liquid line solenoid.
Each room calls for cooling independently; the compressor is started and stopped
by a low-pressure control watching the common suction.

Conditions for good operation:

1. Set the low-pressure control to stop the compressor only when **all**
   compartments are satisfied, and to start it when **any** evaporator calls.
2. Keep the compartment loads reasonably balanced and the temperatures within
   about 10 to 15 kelvins of each other.
3. Fit non-return valves in every suction line except the warmest.
4. Make sure the liquid receiver can hold the charge from all evaporators.
5. Fit hand valves so any evaporator can be isolated.

There is a catch built into the design. When two of three rooms are satisfied,
the entire compressor capacity is available to the one remaining room. It pulls
down fast, the humidity control gets poor, and the compressor short cycles. That
is the argument for compressor capacity control, which the next lessons cover.

## Instantaneous beverage cooling installations

Hotels traditionally ran flooded instantaneous beer coolers from a shared
condensing unit, often together with other, colder evaporators. The mix of
controls is worth studying because each one solves a specific problem.

| Component | Typical setting on R134a | Why |
|---|---|---|
| Constant-pressure valve on each cooler | Not below about 200 kPa | Holds refrigerant temperature above the freezing point of the beverage — frozen beer bursts the cooler |
| Surge drum | About 50 litres per kW of motor power | Extra suction volume slows the pressure rise in the off cycle, so cycles are long |
| Low-pressure cut-out | Cut out about 20 to 30 kPa | Long on and off cycles rather than short cycling |
| Low-pressure cut-in | Equal to or just below the CP valve setting | Guarantees the compressor is already running before a CP valve opens fully, so the beverage never warms |
| High-pressure cut-out | Set to the safe limit for the refrigerant | Protects against a pump-down into a receiver too small for the charge |
| Diaphragm shut-off valves | Fully open with little turning | Lets one cooler be serviced without disturbing the others, with minimal pressure drop |

**Worked example — sizing a surge drum.** The condensing unit has a 4 kW motor.

Surge drum volume = 50 L/kW x 4 kW = **200 litres (0.2 cubic metres)**

Mount it above the suction line and connect it so vapour can build up in it but
returning oil cannot collect in it — commonly with a loop in the suction line
that keeps oil moving past the vessel rather than into it.

The economics have moved on. HFC costs and the demand for many different beers
on tap mean instantaneous coolers have largely been replaced by glycol chillers,
where a single chiller cools a glycol loop and the glycol cools the beer lines.
The control principles are the same; the refrigerant charge is confined to one
packaged machine.

>! A beverage cooler is a flooded vessel in a public bar. If a CP valve is set
>! too low, the beverage freezes, the cooler splits and refrigerant enters a
>! confined space with people in it. Never wind a CP valve down "to get colder
>! beer".

## On the job

- Convert every temperature to a gauge pressure before you touch a control.
- The cut-in setting is the critical one on beverage work, not the cut-out.
- Check the receiver capacity before pumping a multi-temperature system down.
- If one room pulls down and the compressor short cycles, you have a capacity
  control problem, not a thermostat problem.
`,
          quiz: [
            {
              q: "A constant-pressure valve is being set for a storage evaporator running at -10 °C on R134a. What gauge pressure should it be set to?",
              options: [
                "0 kPa gauge",
                "About 100 kPa gauge",
                "About 201 kPa gauge",
                "About 133 kPa gauge",
              ],
              answer: 1,
              explain: "R134a saturated at -10 °C is about 201 kPa absolute. Subtract atmospheric (about 101 kPa) and you get about 100 kPa gauge. Option c is the absolute value — a very common and very expensive mistake to make on a gauge set.",
            },
            {
              q: "On an instantaneous beverage cooler system, why is the low-pressure cut-in setting more critical than the cut-out?",
              options: [
                "Because the compressor cannot start against a high head pressure",
                "Because cut-in equal to or just below the CP valve setting ensures the compressor is running before any CP valve opens fully, so the beverage never warms above its target",
                "Because the cut-out is fixed by the manufacturer",
                "Because cut-in determines the oil return rate",
              ],
              answer: 1,
              explain: "The CP valve opens as the cooler warms. If the compressor has not restarted by then, the beverage temperature keeps climbing. Setting cut-in at or just below the CP setting guarantees refrigeration resumes at the moment the valve begins to open.",
            },
            {
              q: "A condensing unit with a 5 kW motor drives a beverage installation. What surge drum volume is indicated?",
              options: [
                "50 litres",
                "100 litres",
                "250 litres",
                "500 litres",
              ],
              answer: 2,
              explain: "50 L/kW x 5 kW = 250 litres. The vessel adds suction-side volume so pressure rises slowly in the off cycle, giving long on and off cycles instead of the short cycling that wears compressors out.",
            },
            {
              q: "In a thermostat-and-solenoid multi-temperature system, two of three rooms reach temperature. What problem appears?",
              options: [
                "The low-pressure control will trip on the remaining room",
                "The full compressor capacity is thrown at one room, giving poor humidity control and short cycling",
                "Oil returns only from the satisfied rooms",
                "The receiver overfills",
              ],
              answer: 1,
              explain: "The compressor was sized for all three rooms. On one room it pulls down far too fast, dehumidifies the space and then cycles off — repeatedly. The fix is compressor capacity control (unloading, parallel compressors or speed control), not readjusting the thermostats.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "multiplex-rack-systems",
          title: "Multiplex rack systems, oil management and where store design is heading",
          minutes: 13,
          simple: "A supermarket does not fit one condensing unit per cabinet any more. Several compressors sit in a plant room sharing one suction pipe and one condenser, switching on and off like burners on a stove to match how much cooling the shop needs. This lesson covers how they share oil, how cabinets defrost without upsetting the plant, and what the industry is moving to.",
          refs: REFS,
          content: `
Multiplexing means grouping two to eight compressors into a package that shares
a common suction manifold, a common receiver and a common condenser. Compared
with a separate condensing unit for every cabinet, or a shop full of plug-in
cases, a rack is far more efficient: it matches compressor power to the actual
load by cycling machines on and off, by speed control, or by a combination of
the two.

Racks are deliberately kept to a limited size. A smaller rack holds less
refrigerant, so a leak is a smaller loss, and it is easier to arrange some
back-up capacity when a machine fails.

## Two common rack arrangements

**Twin compressors.** Total motor power somewhere between 12 and 50 kW, enough
to carry the whole store's refrigeration at design load. In practice one machine
runs continuously and the second cycles on and off as the load moves. Each
cabinet's temperature is set by an **evaporator pressure regulating (EPR) valve**
— the same constant-pressure valve principle from the last lesson — holding the
evaporator pressure, and so the cabinet temperature, where it belongs.

Running both low- and medium-temperature cabinets from one rack is possible but
wasteful. The suction main has to sit at the lowest cabinet's condition, so
every kilogram of vapour from every cabinet gets compressed from around -35 °C
saturated suction temperature, including the dairy cases that only needed
-8 °C.

**Two racks.** The normal modern arrangement is a medium-temperature rack and a
low-temperature rack, each with two or four compressors in parallel on R404A or
R507, each with its own suction manifold, receiver and condenser, and each
off-cycling compressors in sequence as its load falls. Splitting the load this
way is substantially more efficient than one rack doing both duties.

## Koolgas defrost

Rack systems commonly defrost by the **koolgas** method, which is a
multi-evaporator adaptation of reverse-cycle defrost:

1. Warm vapour is taken from the **top of the liquid receiver** — not from the
   compressor discharge — and fed into the suction line and then the evaporator
   through a flow-reversing valve.
2. That vapour condenses inside the defrosting coil, giving up its latent heat
   to melt the ice.
3. The condensed liquid leaves the coil into the common liquid line, bypassing
   the thermostatic expansion valve.

Two properties make it attractive on a rack. Each cabinet has its own defrost
timer, so cabinets defrost one at a time and no large slug of load hits the plant
when a case comes back on refrigeration. And the heat used comes from the rest of
the system rather than from an electric element.

## Oil return on parallel compressors

Parallel compressors sharing one suction main will not share oil fairly on their
own — whichever machine happens to be running collects it. The standard solution
is a managed oil circuit:

- An **oil separator** in the common discharge line strips the oil out.
- All separated oil goes to a central **oil reservoir**.
- Each compressor carries an **oil level float** in its sump, drawing from the
  reservoir on demand.

That way every machine sits at its correct level regardless of which ones have
been running.

## Heat reclaim

An optional but common addition is a heat reclaimer piped off the discharge
line. Discharge vapour is routed to a coil mounted in the air-conditioning duct,
heating the store in cold weather and bypassing the outdoor condenser. It gives
three benefits at once: free space heating, a useful minimum head pressure in
winter that assists the head pressure control valve, and dehumidification of the
shop air — which reduces the moisture load on the cabinets and so reduces
defrost demand.

## Compressor types on racks

Early supermarket plants used open-drive reciprocating compressors. The industry
has moved away from them, partly for efficiency and mostly because the crankshaft
seal is a permanent leak path. Today you will find semi-hermetic reciprocating
machines (single-stage and two-stage), vertical and horizontal scroll units, and
screw compressors with speed control.

## Where store design is going

| Era | Arrangement | Why it changed |
|---|---|---|
| Early supermarkets | One condensing unit per cabinet | Simple, but inefficient and space hungry as stores grew |
| Growth years | Large multiplex racks, long underground pipe runs | Efficient, but huge refrigerant charge, big leaks, and no flexibility to re-lay the store |
| Now | Smaller systems, less charge; case-mounted condensing units; more single-phase plug-in cabinets | Environmental cost of leaks and the price of high-GWP refrigerant |

Alongside that, cabinets increasingly carry **electronic expansion valves** and
controllers that also handle defrost, alarms and temperature control, and those
controllers are interfaced to a building management system for remote monitoring
and adjustment. Plug-in cabinets have become the norm in hospitality — cake and
dessert display, cafes, convenience stores, lunch bars, retail bakers.

One elegant low-cost layout puts large coolrooms and freezer rooms around the
perimeter of the store and sells product through glass doors fitted in the shop
side of those rooms. Short pipe runs, small charge, low installation cost and
good energy efficiency.

## Natural refrigerants and CO2

The cost and phase-down of high-GWP refrigerants is pushing commercial
refrigeration towards natural refrigerants, and CO2 (R744) appears in three
supermarket architectures:

1. **Transcritical CO2** — CO2 is the working fluid for both medium- and
   low-temperature duty. Because the critical temperature of CO2 is only 31 °C,
   in most Australian ambients the high side operates above the critical point,
   which means heat rejection happens in a **gas cooler** by cooling dense gas
   rather than by condensing it. High-side pressures run in the region of 8000
   to 10 000 kPa, against roughly 5000 kPa when the plant runs subcritically and
   the vapour does condense.
2. **Cascade CO2** — the low-temperature circuit uses CO2, and its condenser is
   cooled by a medium-temperature circuit running on HFC, hydrocarbon or
   ammonia.
3. **Secondary refrigerant** — a pumped chilled fluid is circulated through the
   cabinet coils, cooled in the plant room by a primary circuit on ammonia,
   hydrocarbon, HFC or CO2. The primary charge stays in the plant room.

>! CO2 systems operate at pressures several times those of an HFC plant, and a
>! shut-down CO2 system still sits at its standstill pressure. Use gauges,
>! hoses, valves and recovery equipment rated for CO2, respect the relief
>! arrangements, and never assume a system is safe because it is switched off.
>! Ammonia plant brings toxicity and machinery room requirements of its own.

## What to remember

- Rack size is limited to limit leak losses and to allow back-up.
- One rack serving both temperature levels compresses everything from the lowest
  condition — split the racks.
- Koolgas takes warm vapour off the receiver, defrosts one case at a time and
  returns liquid to the common liquid line past the TX valve.
- Parallel compressors need a separator, a reservoir and level floats to share
  oil.
- Heat reclaim gives heating, winter head pressure and drier shop air together.
`,
          quiz: [
            {
              q: "Why is it inefficient to serve both freezer and dairy cabinets from a single compressor rack?",
              options: [
                "The refrigerant charge would be too large",
                "The suction main must sit at the lowest cabinet condition, so all vapour, including the medium-temperature load, is compressed from about -35 °C SST",
                "EPR valves cannot be used on a rack",
                "Koolgas defrost only works on low-temperature cabinets",
              ],
              answer: 1,
              explain: "The compressors can only pull to one suction pressure, and that pressure is set by the coldest requirement. Every kilogram of medium-temperature vapour then gets a far larger compression ratio than it needs. Dedicated medium- and low-temperature racks remove that penalty.",
            },
            {
              q: "Where does the warm vapour for a koolgas defrost come from?",
              options: [
                "Directly from the compressor discharge line",
                "From the top of the liquid receiver, fed to the evaporator through a flow-reversing valve",
                "From an electric heater in the suction accumulator",
                "From the heat reclaim coil in the air-conditioning duct",
              ],
              answer: 1,
              explain: "Koolgas draws warm vapour off the top of the receiver, condenses it in the defrosting coil and returns the liquid to the common liquid line, bypassing the TX valve. Straight discharge gas is the domestic hot gas method; koolgas is its multi-evaporator adaptation.",
            },
            {
              q: "How is oil shared correctly between four compressors on a common suction manifold?",
              options: [
                "By equalising the crankcases with a pipe between them",
                "By an oil separator in the common discharge, a central oil reservoir, and a level float on each compressor sump",
                "By running all compressors continuously",
                "By fitting an accumulator in each suction branch",
              ],
              answer: 1,
              explain: "Oil is stripped from the discharge, stored centrally and fed to each machine on demand through its own level float. Crankcase equalisation alone cannot keep four machines correct when they run for different lengths of time.",
            },
            {
              q: "Why does a transcritical CO2 system reject heat in a gas cooler rather than a condenser?",
              options: [
                "Because CO2 cannot be liquefied at any pressure",
                "Because the critical temperature of CO2 is 31 °C, so at normal Australian ambients the high side is above the critical point and the CO2 cools as a dense gas without changing state",
                "Because the condenser would freeze at those pressures",
                "Because CO2 has no latent heat",
              ],
              answer: 1,
              explain: "Above the critical point there is no distinction between liquid and vapour, so no condensation occurs and heat rejection is sensible cooling of dense gas. Below the critical point (around 5000 kPa on the high side) the same fluid does condense normally, which is why cascade CO2 low stages behave conventionally.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "unloading-capacity-control",
          title: "Compressor unloading and capacity control",
          minutes: 13,
          simple: "A compressor is only sized for its worst day; most of the time it is too big. Rather than starting and stopping it constantly, which is what wears it out, we make it do less work while it keeps turning. This lesson covers the five ways that is done, from bypassing gas to holding suction valves open to slowing the motor down.",
          refs: REFS,
          content: `
Around 95 per cent of compressor and motor wear happens at start-up: the moment
of no oil film, maximum current and maximum mechanical shock. Take that
seriously and the arithmetic is brutal. A compressor cycling three times an hour
is starting three times as often as one cycling once an hour, so on wear alone
it has roughly a third of the life.

That is the reason capacity control exists. The goal is to reduce the
refrigerating effect of the plant to match a falling load **without** switching
the compressor off. The main methods are:

- diverting hot discharge gas back into the low side
- running several compressors in parallel on one suction main
- staging capacity across a number of independent systems
- holding suction valves open so individual cylinders stop pumping
- varying the compressor speed.

## Hot gas bypass

Used mainly where a single compressor with no other unloading has to hold a
constant evaporator temperature at low load.

The old arrangement bypassed vapour from one or more cylinders through a
solenoid straight into the suction line. It works, but it is a poor method:

- There is **no power saving** — the pistons are still compressing against full
  head pressure, so the motor still draws its current.
- It superheats the suction vapour badly, and high suction superheat means high
  discharge temperature, which breaks down oil and refrigerant.

The modern arrangement discharges the bypassed vapour through a **regulating
valve** into the evaporator inlet, just downstream of the refrigerant control.
The incoming liquid from the expansion device cools the hot gas, so no excessive
suction superheat reaches the compressor, and the valve modulates the bypass
rate to suit the load rather than switching it in and out. Note the oil return
line on these arrangements: bypassing gas around the evaporator also bypasses
the velocity that carries oil back, so it must be returned deliberately.

>! Hot gas bypass is a load-matching device, not a repair. Fitting or opening a
>! bypass to stop a system tripping on low pressure will mask a starved coil, a
>! dirty filter or a lost charge, and will run the discharge temperature up while
>! it does so. Find the fault first.

## Parallel compressors and multiple systems

Two straightforward answers. **Parallel compressors** on a common manifold, as
in the multiplex racks, let you shut down whole machines in steps while the
remaining ones keep running near their best efficiency. **Multiple system
capacity control** splits the job into several complete independent systems —
common where reliability matters, because losing one system loses only part of
the duty.

## Cylinder unloading

Unloading holds the suction valve of selected cylinders off its seat. Vapour is
drawn in and pushed straight back out again without being compressed, so the
cylinder does almost no work. It is the most efficient of the mechanical
methods, because the losses involved in vapour passing in and out through an
open suction valve are smaller than the losses of the alternatives.

### Discharge-pressure-actuated unloaders

A controller watching suction pressure energises a solenoid valve, which admits
high-side pressure to a power element on the cylinder head. The element pushes
push rods down onto the suction valve and holds it open. When suction pressure
rises back to the unloader cut-out setting, the controller de-energises the
solenoid and the piston returns, letting the valve seat and reloading the
cylinder.

### Hydraulic unloaders using oil pressure

The more common industrial design uses the compressor's own lubricating oil
pump. Oil pressure from the pump in the thrust end of the crankshaft acts on a
piston and spindle. On a six-cylinder machine that spindle drives a **shifting
wheel** around each cylinder liner; the top of the wheel is a cam with a
slanting surface, and an **unloader bar** riding on that surface is lifted or
lowered, which raises or seats the ring-type suction reed.

Follow the sequence:

1. **On start-up** there is no oil pressure, so the cylinders are unloaded. The
   compressor starts against almost no load, drawing far less starting current
   and torque.
2. As the oil pump builds pressure it forces the unloader piston down against
   its spring, turning the shifting wheel and lowering the lifting pins so the
   suction valves seat normally. The machine loads up as lubrication is
   established.
3. **When load falls**, the low-pressure switch (or a temperature controller
   doing the same job) energises a solenoid that dumps the oil above the
   unloader spindle back to the crankcase. Oil pressure there collapses, the
   spring reverses the piston and the suction valve is held open again.

Because the unloaders are held loaded by oil pressure, cylinders unload
automatically on any oil pressure failure and on every off cycle — the failure
mode is the safe one. The oil is fed through a capillary tube, and the quantity
involved is small enough that bearing lubrication is never starved.

### Unloading steps

Cylinders are unloaded in blocks, normally two cylinders per block, and in a
sequence set by the manufacturer so the crankshaft stays reasonably balanced.
The number of unloader pistons fitted sets the available steps:

| Compressor | Available capacity steps |
|---|---|
| Six cylinders | 100 %, 66 %, 33 % |
| Eight cylinders | 100 %, 75 %, 50 % |

**Worked example.** An eight-cylinder machine is rated at 60 kW refrigerating
capacity at its design condition. Its unloading steps give:

- Full load: 60 kW
- 75 % step: 0.75 x 60 = **45 kW**
- 50 % step: 0.50 x 60 = **30 kW**

If the store load falls to 38 kW, no step matches it exactly. The machine runs
on the 45 kW step and cycles, or, better, runs on 45 kW with a modest hot gas
bypass or a speed reduction to trim the remaining 7 kW. Note that at the 50 %
step it is still delivering 30 kW — so if the load falls below that, the
compressor still has to cycle. Unloading widens the turndown; it does not make
it infinite.

### Suction-pressure-controlled valving

An alternative arrangement uses suction pressure acting on a bellows. As suction
pressure rises, the bellows contracts and lifts a rod that closes a bleed port
in a valving mechanism. Oil pressure then builds, drives a valving piston up,
and oil is fed in sequence to the cylinder unloaders, pressing the unloader
pistons down and loading the cylinders. When suction pressure falls, the bleed
port opens, oil drains to the crankcase, the return spring lowers the valving
piston and the cylinders unload in reverse order. A spring-loaded ball detent on
the side of the valving piston confines it to definite steps, so it takes a real
change in suction pressure to move to the next step — that is what stops the
mechanism hunting.

## Speed control

Variable speed drives are now the default answer wherever they can be applied.
Compressors, pumps, supply air fans and condenser fans can all have their speed
matched continuously to the load. Compared with fixed-speed machines cycling on
and off, VSD gives smoother operation, no repeated starting damage, and
substantial energy savings — fan and pump power falls roughly with the cube of
speed, so a modest speed reduction is a large power saving.

The limits to remember are minimum speed for oil return and motor cooling, and
the harmonic and cable requirements of the drive itself.

## On the job

- Count starts per hour before you diagnose anything else on a short-cycling
  plant.
- An unloaded compressor draws less starting current: if a machine trips its
  overload on start, check the unloaders are actually unloading.
- Hot gas bypass into the evaporator inlet, never into the suction line, and
  never without an oil return path.
- Unloading gives steps, not infinite turndown; below the lowest step the
  machine must still cycle or be slowed down.
`,
          quiz: [
            {
              q: "Why is bypassing hot gas straight into the suction line considered a poor method of capacity control?",
              options: [
                "It cannot hold a constant evaporator temperature",
                "It saves no power because the pistons still compress against full head pressure, and it raises suction superheat and so discharge temperature",
                "It requires an additional compressor",
                "It floods the evaporator with liquid",
              ],
              answer: 1,
              explain: "The motor keeps doing the same work; only the useful refrigeration falls. On top of that the gas arriving at the suction is hot, so discharge temperature climbs and oil and refrigerant break down. Injecting into the evaporator inlet after the refrigerant control lets the entering liquid cool the bypassed gas.",
            },
            {
              q: "A six-cylinder compressor with hydraulic unloaders starts with its cylinders unloaded. What is the practical benefit?",
              options: [
                "It builds head pressure faster",
                "Starting torque and starting current are much lower, and the cylinders load only as oil pressure establishes lubrication",
                "It prevents liquid flood-back at start",
                "It allows the compressor to start against a closed discharge valve",
              ],
              answer: 1,
              explain: "With no oil pressure the unloaders hold the suction valves open, so the machine spins up almost unloaded. Loading follows oil pressure, which means it only takes up work once it is properly lubricated. It is also the safe failure mode: lose oil pressure at any time and the cylinders unload.",
            },
            {
              q: "An eight-cylinder compressor delivering 60 kW is switched to its 50 % step. What is the capacity, and what happens if the load is only 20 kW?",
              options: [
                "30 kW; the machine will still have to cycle because the load is below the lowest step",
                "30 kW; the machine will modulate down to 20 kW automatically",
                "15 kW; the load is matched exactly",
                "50 kW; the step refers to motor power, not capacity",
              ],
              answer: 0,
              explain: "The 50 % step gives 0.5 x 60 = 30 kW. Unloading provides discrete steps of 100, 75 and 50 % on an eight-cylinder machine, so a 20 kW load is below the lowest step and the compressor must cycle, use hot gas bypass, or be slowed with a VSD.",
            },
            {
              q: "What is the purpose of the spring-loaded ball detent on the valving piston of a suction-pressure-controlled unloading system?",
              options: [
                "It relieves excess oil pressure to the crankcase",
                "It confines the piston to definite steps, so a real pressure change is needed to load or unload the next cylinder and the mechanism does not hunt",
                "It prevents oil entering the cylinder unloader",
                "It sets the minimum suction pressure",
              ],
              answer: 1,
              explain: "Without the detent the piston would drift with every small pressure fluctuation and the compressor would continuously load and unload. The ball forces a decisive pressure change before the next step is taken, which is exactly the behaviour you want from a stepped control.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "commercial-defrost-controls",
          title: "Commercial defrost controls and accessories",
          minutes: 12,
          simple: "Any coil running below zero collects ice, and ice is an insulator that slowly strangles the coil. There are four ways to get rid of it — electric heat, hot gas, running the cycle backwards, and hosing it with water — and each suits a different size of plant. The drain is the part that actually causes most of the trouble.",
          refs: REFS,
          content: `
Frost on a forced-draught evaporator does two things at once: it insulates the
surface so heat transfer falls, and it blocks the air passages between fins so
airflow falls. Capacity drops, suction pressure drops, the coil gets colder, and
it collects frost faster still. Defrost is not maintenance; it is a designed
part of the control system.

!SIM[See what an iced evaporator does to the gauges](fault=icedEvaporator)

## Electric defrost

Electric defrost is the general preference on commercial forced-draught coils,
almost entirely because it is simple to install: a timer and a power supply and
you are done.

Its weaknesses are real. It is wasteful of energy — every joule put into the
coil has to be pumped back out again afterwards — and burnt-out elements are
awkward and expensive to replace.

Heater arrangements differ between manufacturers, and the difference matters
when you are quoting a repair:

- Heater cable woven between the fins, parallel to the refrigerant tubes.
- Heater rods inserted inside a special double-tubed evaporator.

Efficiency, and the cost of replacing a failed element, vary a great deal
between these designs.

### The drain is the weak point

Drain heating gives more trouble than coil heating, especially where the drain is
built into the cabinet lining. It is the most critical part of any defrost
system, because ice will block a drain very quickly unless every defrost is
followed by complete drainage. Two specific failure mechanisms:

- **Electrolysis** corrodes drain heaters where dissimilar metals are used in
  the drain.
- **Plastics distort** with repeated temperature cycling, and eventually burn or
  leak.

### Initiation and termination

Defrost is initiated on time. Termination can be by time, temperature or
pressure, and **pressure termination is generally preferred**, because the
temperature varies widely across the coil surface, especially when the ice
accumulation is uneven — a single termination sensor may sit on a part of the
coil that cleared early. As a rule of thumb, defrosts should not exceed four per
day.

## Hot gas defrost

Hot gas from the top of the condenser is fed directly into the evaporator, and
the ice is melted from inside the tube outwards. It works well when the volumes
of condenser and evaporator and the refrigerant charge have all been balanced
against each other — as they are on a mass-produced domestic cabinet or a
factory-built package system.

Designed carelessly, it produces incomplete or excessive defrost, liquid
flood-back and lubrication problems, and the resulting service costs swamp the
saving. That is why factory-built hot gas systems are thoroughly laboratory
tested before production: the development cost is easily justified across a
production run.

On larger systems, a generously sized **suction line accumulator** solves most
of the flood-back risk, particularly if heat is added to it — for example, by
running the liquid line through it — so that returning liquid is re-evaporated
before it can reach the compressor.

## Reverse-cycle defrost

This is the heat pump principle applied to defrost. An electrically operated
four-way valve reverses refrigerant flow: the evaporator becomes the condenser
and melts its own ice, while the outdoor condenser becomes an evaporator and
absorbs heat from outside air.

!FIG[reversing-valve]

### How the four-way valve is arranged

Three pipes on one side, one on the other. The single line goes directly to the
compressor discharge. Of the three, the centre one goes directly to compressor
suction, and the outer two go to the evaporator and to the condenser. It is a
pilot-operated valve: the solenoid coil directs high-pressure vapour to one side
or the other of a piston assembly, and the piston drags a slide across the three
ports, connecting either the evaporator or the condenser to suction and sending
the hot gas to the other one.

Defrost is timer-actuated for a set period, usually supplemented by thermostatic
or pressure controls that end the defrost as soon as enough ice has melted.
Those controls also protect the compressor from overload during the reversed
cycle.

>! Take care with reverse-cycle defrost on a water-cooled condenser: during
>! defrost that condenser is acting as an evaporator, and the condenser water
>! can freeze and split the tubes.

The **koolgas** system described in the multiplex lesson is this method adapted
for multi-evaporator plant. Its advantages are energy economy and the fact that
only one evaporator defrosts at a time, using heat absorbed by the others.

## Water spray defrost

Water defrost is most often used as a manually initiated method on large plants
where hot gas or electric defrost would create more maintenance than they cure —
big cold stores and abattoirs with a full-time plant attendant.

The reasons are specific to that scale. In a very large store the distance
between condensers and evaporators makes hot gas defrost impractical. A four-way
valve on an ammonia plant is less reliable — brass cannot be used with ammonia,
and there is more dirt and steel corrosion in the system — so its failures mean
downtime with product at risk. Electric elements simply fail, and replacing an
element deep in a large evaporator is a long, costly job.

The operation is simple even though the pipework design is not:

1. Fans stop.
2. A solenoid valve shuts off refrigerant flow to the coil.
3. A second solenoid opens and floods the fins with water.
4. Termination is by time, temperature, or by the operator.

Every water and drain pipe must be arranged so that all water drains out of it
after each defrost, with bleed pipes to deal with taps that weep during the
running cycle. Water left standing in a pipe over a freezer coil turns into an
ice plug. Evaporators in the same room may be defrosted together or
independently, and together is usually preferable so the room comes back to
temperature as one.

## Automatic and electronic control

Electronic controllers now handle cabinet temperature, defrost initiation and
termination, alarms and the temperature display in a single unit, and
computerised systems co-ordinate defrosting, unloading and overall energy
management across a whole store or plant. The running cost saving from
intelligent control is what drives the take-up.

## Comparison

| Method | Best suited to | Main drawback |
|---|---|---|
| Electric | Most commercial forced-draught coils | Energy wasteful; element and drain heater failures |
| Hot gas | Factory-built packages with balanced charge and volumes | Needs careful design; flood-back and lubrication risk |
| Reverse cycle | Systems already fitted with a four-way valve | Water-cooled condenser can freeze; valve reliability |
| Koolgas | Multiplex racks with many cabinets | Needs receiver-fed circuit and reversing valves per case |
| Water spray | Very large ammonia cold stores with an attendant | Complex pipework; must drain completely |

>! Before working on any evaporator, isolate and prove dead. Defrost heaters and
>! drain heaters are mains-voltage elements that a timer can energise at any
>! moment, whether or not the compressor is running.
`,
          quiz: [
            {
              q: "Why is pressure termination generally preferred over temperature termination on electric defrost?",
              options: [
                "Because pressure switches are cheaper than thermostats",
                "Because temperature varies widely across the coil surface when ice is uneven, so a single temperature sensor may end defrost with part of the coil still iced",
                "Because pressure termination also ends the drain heating",
                "Because temperature termination cannot be used with timers",
              ],
              answer: 1,
              explain: "Uneven ice means uneven surface temperature. A sensor on a clear part of the coil reports the coil is clear while another section is still blocked, and incomplete defrosts accumulate ice cycle after cycle. Pressure reflects the condition of the coil as a whole.",
            },
            {
              q: "What is the most troublesome part of a commercial defrost system, and why?",
              options: [
                "The defrost timer, because it loses time",
                "The drain and its heater, because ice blocks a drain quickly, dissimilar metals cause electrolysis of the heater, and plastics distort and eventually leak",
                "The evaporator fan, because it ices up",
                "The suction accumulator, because it fills with oil",
              ],
              answer: 1,
              explain: "Melting ice is only half the job — the water must leave. A blocked or unheated drain refreezes, backs up into the coil, and every subsequent defrost makes it worse. Electrolysis and heat-cycled plastics are the two specific failure mechanisms to look for.",
            },
            {
              q: "Why is water spray defrost used on large ammonia cold stores rather than hot gas or electric defrost?",
              options: [
                "Because ammonia cannot be used with electric heaters",
                "Because the long distance between condensers and evaporators makes hot gas impractical, four-way valves are less reliable on ammonia, and replacing failed elements causes lengthy downtime with product at risk",
                "Because water defrost is faster than any other method",
                "Because ammonia plants have no defrost timers",
              ],
              answer: 1,
              explain: "It is a reliability and scale decision. These plants already have an attendant on duty, so a manually initiated method is acceptable, and it avoids both the long hot gas runs and the failure modes of valves and elements in an ammonia system.",
            },
            {
              q: "During a reverse-cycle defrost on a system with a water-cooled condenser, what specific hazard exists?",
              options: [
                "The compressor will run in a vacuum",
                "The condenser is acting as an evaporator, so the condenser water can freeze and damage the tubes",
                "The four-way valve will stick in mid position and vent refrigerant",
                "The evaporator fans will overload",
              ],
              answer: 1,
              explain: "Reversing the cycle turns the condenser into an evaporator absorbing heat from its medium. With air that is harmless; with water it means the water side can drop below 0 °C and freeze, splitting tubes. Interlocks or an alternative defrost method are needed.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "industrial-multistage-cascade",
          title: "Industrial systems, multi-stage compression and cascade",
          minutes: 14,
          simple: "When you try to make a really low temperature with one compressor, the gas gets so thin and so hot that the machine cannot cope. The answer is to do the squeezing in two goes, cooling the gas in between — like passing a heavy load up a ladder in stages instead of lifting it all at once. This lesson shows how to work out the pressure in the middle.",
          refs: REFS,
          content: `
Industrial refrigeration is not sharply divided from commercial refrigeration,
but as a general rule industrial plant is larger and often has an attendant on
duty. Typical applications are ice plants, cold stores, food packing works,
breweries, creameries, and heavy industry such as oil refineries, gas
liquefaction and chemical plants. It also includes jobs the public never sees,
like supplying constant-temperature water for concrete pours in high ambient
conditions.

## Why one compressor runs out of ability

Capacity and efficiency fall away rapidly as the difference between suction and
condensing temperature grows. Two mechanisms are at work:

- **Specific volume.** The lower the evaporating temperature, the more space
  each kilogram of vapour occupies. The compressor swept volume is fixed, so it
  pumps fewer kilograms per revolution and the mass flow — which is what carries
  the refrigeration — collapses.
- **Compression ratio.** A higher ratio means poorer volumetric efficiency,
  because the gas left in the clearance volume must re-expand further before the
  suction valve can open. It also means a **higher discharge temperature**,
  because the work of compression is done on the gas itself.

The practical limits:

| Situation | Guidance |
|---|---|
| Single-stage, condensing temperature reasonably low | Satisfactory down to about -40 °C evaporating |
| Below -40 °C evaporating | Multi-stage compression is required to avoid excessive discharge temperature and hopeless efficiency |
| Large installations | Consider multi-stage for any evaporating temperature below -18 °C, on running-cost grounds alone |

!FIG[ph-legs]

## Direct staging (compound)

Direct staging uses two or more compressors in series compressing **one**
refrigerant in successive steps: the low-stage machine raises the vapour from
evaporator pressure to an intermediate pressure, and the high-stage machine
takes it from there to condenser pressure. A three-stage plant does it in three
increments, the discharge of each machine feeding the suction of the next.

Two forms of intermediate cooling are needed:

- **Vapour cooling (de-superheating)** between stages. The vapour leaves the
  low stage superheated, and if it is fed to the next machine in that state the
  discharge temperature from the higher stage becomes excessive and the machine
  overheats. The **intercooler** removes that superheat, typically by bubbling
  the discharge through liquid refrigerant at intermediate pressure.
- **Liquid cooling (subcooling)**. Because the temperature difference between
  condenser and evaporator is so large, liquid arriving at the expansion device
  would flash heavily, losing refrigerating effect and dumping a large extra
  volume of vapour on the low-stage compressor. Subcooling the liquid at the
  intercooler avoids both penalties.

!FIG[two-stage-compression]

Practical detail from typical arrangements: a high-side float can be used to
control liquid between stages, and the oil separator on the high stage should be
sized for the capacity of the final-stage compressor.

## Worked example — finding the interstage pressure

For balanced duty and matched discharge temperatures, the intermediate pressure
is taken as the geometric mean of the suction and discharge pressures, using
**absolute** pressures:

**p intermediate = square root of (p suction x p discharge)**

Take an ammonia (R717) cold store: evaporating -40 °C, condensing +35 °C.

- Saturation pressure at -40 °C = about **71.7 kPa absolute**
- Saturation pressure at +35 °C = about **1350 kPa absolute**

Overall compression ratio if a single machine tried it:

1350 / 71.7 = **18.8 to 1** — far beyond sensible reciprocating practice.

Interstage pressure:

p intermediate = square root of (71.7 x 1350) = square root of 96 795 = **311
kPa absolute** (about 210 kPa gauge)

Check each stage:

- Low stage: 311 / 71.7 = **4.34 to 1**
- High stage: 1350 / 311 = **4.34 to 1**

Both stages now sit at a compression ratio a reciprocating machine handles
comfortably, and each produces a moderate discharge temperature. Reading 311 kPa
absolute back off an ammonia pressure-temperature chart gives an intermediate
saturation temperature of roughly **-8 °C**, which is the temperature the
intercooler will sit at and the temperature to which the liquid can be
subcooled.

**Second example, R404A.** Evaporating -35 °C (about 165 kPa absolute),
condensing +40 °C (about 1817 kPa absolute):

p intermediate = square root of (165 x 1817) = square root of 299 805 = **about
548 kPa absolute**, roughly 447 kPa gauge, near -3 to -4 °C saturated.

Stage ratio = square root of (1817 / 165) = square root of 11.0 = **3.3 to 1**
each stage, against 11 to 1 for a single machine.

> The rule of thumb behind the formula: equal pressure ratios per stage give
> equal discharge temperatures and share the work evenly. Real plants shift the
> interstage pressure a little to suit the actual compressors available and any
> intermediate-temperature load being served from the intercooler.

## Compound two-stage compressors

Rather than two separate machines, many compressors are built for two-stage duty
on a single crankshaft. Commonly four of six cylinders, or six of nine, handle
the low stage with its high-specific-volume vapour, and the remaining two or
three cylinders compress that discharge to condenser pressure. The cylinder
split reflects the volume ratio: the low stage is handling a much larger volume
per kilogram than the high stage.

These machines are supplied with water-cooled heads and an oil cooler, an
intercooler connected between the stages, and an internal liquid passage that
routes liquid from the receiver through the accumulator before the evaporator.

## Cascade staging

Cascade staging uses **two or more separate refrigerant circuits**, with
refrigerants of progressively lower boiling point. The compressed vapour from
the low-stage circuit is condensed in a heat exchanger called the **cascade
condenser**, which is simultaneously the evaporator of the higher-stage circuit.
The high stage rejects its heat to air or water in the normal way.

That arrangement lets the low-temperature circuit use a refrigerant that is
still at sensible pressures at, say, -80 °C, while the high-stage circuit uses a
refrigerant suited to normal condensing conditions. The supermarket cascade CO2
system is exactly this idea at a modest temperature level.

Note two details on cascade plants: oil separators on both stages, because oil
that migrates into an ultra-low-temperature evaporator will not come back, and
an **expansion tank** on the low side. When a cascade plant is shut down, the
low-side refrigerant warms to ambient and its pressure would rise past the
design limit; the expansion tank gives it somewhere to go.

## Choosing between them

| | Direct staging (compound) | Cascade |
|---|---|---|
| Refrigerants | One refrigerant throughout | A different refrigerant in each circuit |
| Link between stages | Intercooler, shared piping | Cascade condenser (a heat exchanger) — circuits stay separate |
| Best for | Moderate low temperature, larger plant, ammonia cold stores | Very low temperature, where one refrigerant cannot span the range |
| Oil | One oil circuit to manage | Separate oil in each circuit; separators essential |

The two are not exclusive. On very low-temperature plant it is common to apply
compound (direct) staging to the **low stage of a cascade**, getting the benefit
of both.

>! Ammonia is toxic and flammable at higher concentrations, and industrial plants
>! carry very large charges. Machinery room ventilation, detection, emergency
>! controls and PPE are not optional, and plant attendants are trained for the
>! specific plant. Never work on a large industrial system without the site
>! isolation procedure and permit.

## What to remember

- Below about -40 °C evaporating, single-stage compression stops being viable.
- Interstage pressure = square root of (suction absolute x discharge absolute).
- Intercooling does two jobs: de-superheat the vapour, subcool the liquid.
- A compound compressor splits its cylinders in the ratio of the volumes, not
  equally.
- Cascade keeps the refrigerants and the oils separate; compound does not.
`,
          quiz: [
            {
              q: "An ammonia plant evaporates at -40 °C (71.7 kPa absolute) and condenses at 35 °C (1350 kPa absolute). What is the interstage pressure?",
              options: [
                "About 711 kPa absolute",
                "About 311 kPa absolute",
                "About 639 kPa absolute",
                "About 1278 kPa absolute",
              ],
              answer: 1,
              explain: "The geometric mean: square root of (71.7 x 1350) = square root of 96 795 = 311 kPa absolute. Option a is the arithmetic mean, which would give badly unequal stage ratios. Check the answer by dividing: 311/71.7 = 4.34 and 1350/311 = 4.34 — equal ratios, which is the point.",
            },
            {
              q: "Why is the refrigerant liquid subcooled at the intercooler as well as the vapour being de-superheated?",
              options: [
                "To stop the high-stage compressor from flooding",
                "Because the large condenser-to-evaporator temperature difference would otherwise cause heavy flash gas at the expansion device, losing refrigerating effect and loading the low-stage compressor with extra vapour",
                "Because the intercooler must be kept full of liquid",
                "To raise the discharge temperature of the low stage",
              ],
              answer: 1,
              explain: "Flash gas does no refrigeration but must still be pumped. On a plant spanning 75 kelvins the flash fraction is large, so subcooling the liquid at intermediate pressure both restores refrigerating effect and cuts the volume the low-stage machine has to handle.",
            },
            {
              q: "A compound two-stage compressor has six cylinders. How are they normally divided?",
              options: [
                "Three on the low stage and three on the high stage",
                "Four on the low stage and two on the high stage, because the low-stage vapour has a much higher specific volume",
                "Two on the low stage and four on the high stage, because the high stage does more work",
                "Five on the low stage and one on the high stage",
              ],
              answer: 1,
              explain: "The split follows volume, not work. Low-stage vapour is thin, so it needs more swept volume; by the time it reaches the high stage it has already been compressed and occupies far less space. Nine-cylinder machines follow the same logic with a six-and-three split.",
            },
            {
              q: "What distinguishes cascade staging from direct (compound) staging?",
              options: [
                "Cascade uses two or more separate refrigerant circuits linked by a cascade condenser that is also the higher stage's evaporator",
                "Cascade uses two compressors on one crankshaft",
                "Cascade requires an intercooler between stages of the same refrigerant",
                "Cascade can only be used with ammonia",
              ],
              answer: 0,
              explain: "In compound staging one refrigerant passes from machine to machine. In cascade, the circuits never mix: the low stage condenses inside a heat exchanger that the high stage is boiling refrigerant in. That is what allows each circuit to use a refrigerant suited to its own temperature range.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "liquid-recirculation-return",
          title: "Liquid recirculation and liquid return systems",
          minutes: 13,
          simple: "On a big plant with coils scattered all over a cold store, feeding each one with its own expansion valve becomes a nightmare. Instead we keep a big tank of cold liquid near the plant and pump far more liquid to each coil than can boil off, then bring the leftovers back. It is like watering a garden by flooding the beds rather than dripping into each pot.",
          refs: REFS,
          content: `
Long liquid and suction lines create a specific set of problems on big
industrial plants: liquid line and suction line superheating, oil collecting in
evaporators, poor temperature control at the most distant coils, refrigerant
controls that leak, and liquid flood-back to the compressor. **Liquid
recirculation** — often called pumped liquid overfeed — solves all of them at
once by changing how the evaporators are fed.

## How a liquid recirculation plant works

The heart of the system is one large accumulator vessel, installed as close to
the compressors as possible. On a substantial plant it may be 1.5 metres in
diameter and two or three metres tall, holding something like a tonne of cold
liquid refrigerant.

1. Liquid is fed into this vessel from the receiver, often pre-cooled on the way
   through the intercooler on a two-stage plant.
2. The level in the vessel is held by a level control. Two common arrangements:
   - A **thermal expansion valve with a heated bulb**. A small electric element
     warms the bulb. While the bulb is in vapour, it stays warm and the charge
     pressure holds the valve open. When liquid rises and covers the bulb, the
     heat is conducted away, the bulb cools, its pressure falls and the valve
     closes.
   - A **float switch** energising a solenoid, which admits liquid through an
     expansion valve whenever the level drops. A separate **high-level alarm**
     float warns the operator before the level gets high enough to risk
     flood-back.
3. The vessel is, in effect, one big flooded evaporator. Its liquid temperature
   follows the compressor suction pressure.
4. A liquid pump takes cold liquid from the bottom of the vessel and pumps it
   out to every evaporator in the plant. Discharge pressure depends on the line
   and valve resistance, but is around **200 kPa above suction pressure** on the
   largest plants. The pump is protected against **cavitation** — flashing of
   the liquid inside the pump — by flow switches and a liquid bypass.
5. Each evaporator is fed through a **manual (hand) expansion valve**, set so
   the coil is completely flooded at the heaviest load, which means it is being
   overfed at anything less. Typical practice is to circulate three to four
   times the mass that will actually boil.
6. Room temperature is controlled by a thermostat and a solenoid valve in that
   room's liquid line. Where a constant refrigerant temperature or humidity
   control is required, direct or pilot-operated pressure controls are used
   instead.
7. Vapour and unboiled liquid return together through a common wet suction line
   to the accumulator, where they separate. Vapour goes to the compressors;
   liquid falls back into the vessel and is pumped round again.

**Worked example — pump discharge condition.** A plant runs ammonia rooms at
-35 °C, so suction pressure is about 93 kPa absolute. The pump adds about 200
kPa, so liquid reaches the evaporator hand valves at roughly 293 kPa absolute.
That margin is what drives liquid to the far end of the store and back, and it
is why the pump has to be protected: if the liquid at the pump inlet is not
sufficiently subcooled below its saturation condition, it flashes and the pump
loses its prime.

## Two-stage recirculation

The same idea scales to two-stage plant. First-stage freezer rooms at -35 °C
feed an accumulator connected to **booster compressors** in parallel. Those
boosters discharge into the liquid held in the intercooler, which
de-superheats the booster discharge and simultaneously acts as the accumulator
for the second-stage coolrooms. One vessel therefore does three jobs:
intercooling, liquid subcooling, and liquid separation for the higher
temperature rooms.

## Why it is worth the vessel and the pump

1. Pre-cooled liquid arrives at every evaporator, increasing refrigerating
   effect.
2. Evaporators are fully flooded at all times, so the whole internal surface is
   wetted and heat transfer is at its best.
3. High liquid flow rates flush oil out of the evaporators back to one place,
   improving heat transfer and cutting maintenance.
4. It eliminates individual float or TX valve controls on each evaporator, the
   problems of those controls leaking (the hand valve is simply open all the
   time), a separate accumulator at every coil, and the risk of flood-back to
   the compressor.
5. Room temperature control becomes simple — one thermostat and one liquid line
   solenoid per room.
6. Overall plant size is reduced, through both the eliminated components and the
   better efficiency.

## Liquid return systems — the same idea without a pump

Recirculation has two disadvantages: it needs a mechanical pump, and the
maintenance that pump brings prevents genuinely unattended automatic operation.

A **liquid return** system does the same job using the plant's own high-side
pressure to move the liquid, so there is no pump at all. Returning liquid is
separated and gravitated into a **pump-receiver** vessel, and gas pressure then
pushes it back out into the main liquid line at intervals.

The cycle, following the solenoid numbering used on typical drawings — solenoids
1 and 2 normally open, solenoid 3 normally closed:

1. Liquid and vapour returning from the evaporators separate in the liquid
   separator. Vapour goes straight to the compressor suction; liquid drains down
   into the pump-receiver through a non-return valve.
2. While the pump-receiver is filling, its pressure is continuously equalised to
   the suction line through the normally open solenoid **2**, so liquid can keep
   draining in.
3. When the liquid reaches the **high float**, solenoids **1** and **2** close.
   Closing 2 lets the vessel pressure rise; closing 1 cuts off liquid flow to
   the evaporators from the main line while the transfer happens.
4. At the same moment the normally closed solenoid **3** opens, admitting
   high-pressure vapour at around **300 kPa** into the top of the pump-receiver.
   That pressure forces the cold liquid out into the main liquid line — or, on a
   two-stage plant, intercooler pressure is used instead of full head pressure.
5. When the level falls to the **low float**, solenoids 1 and 2 reopen, solenoid
   3 closes, the vessel re-equalises to suction, and it starts filling again.

| | Direct expansion | Pumped recirculation | Liquid return |
|---|---|---|---|
| Evaporator feed | TX or float valve per coil | Hand valve, overfed by a pump | Hand valve, overfed by gas pressure |
| Moving parts | Valves only | Liquid pump plus valves | Solenoids and floats only |
| Oil in evaporators | Tends to accumulate | Flushed back by high liquid rate | Flushed back by high liquid rate |
| Unattended operation | Yes | Limited by pump maintenance | Suited to it |

>! These vessels hold very large quantities of liquid refrigerant, commonly
>! ammonia. Treat every one as a pressure vessel: know where the relief valves
>! discharge, never trap liquid between closed valves, and follow the site
>! isolation and permit procedure. Ammonia release in a plant room is a
>! life-safety event — detection, ventilation and escape routes are checked
>! before work starts, not after.

## On the job

- Recirculation coils are deliberately overfed; a wet suction line is normal on
  these plants and is not a fault.
- Check the pump protection — flow switch and bypass — before blaming the pump
  for cavitation noise.
- A high-level alarm on the accumulator is the last line of defence against
  slugging the compressors. Test it.
- On a liquid return plant, a stuck solenoid or a failed float shows up as the
  pump-receiver never emptying or never filling; watch the floats through a
  transfer cycle before condemning anything else.
`,
          quiz: [
            {
              q: "In a liquid recirculation system, why is the evaporator fed through a hand expansion valve set to overfeed the coil?",
              options: [
                "To keep the coil fully flooded for best heat transfer and to flush oil out with the returning liquid",
                "To ensure the liquid fully evaporates before the suction line",
                "Because a TX valve cannot be used with ammonia",
                "To subcool the liquid entering the coil",
              ],
              answer: 0,
              explain: "Overfeeding wets the whole internal surface, which is the best heat transfer condition, and the surplus liquid carries oil back to the one vessel where it can be dealt with. The unboiled liquid is separated in the accumulator, so it never reaches the compressor. Dry expansion is exactly what recirculation is designed to avoid.",
            },
            {
              q: "How does a heated-bulb thermal expansion valve control the level in a recirculation accumulator?",
              options: [
                "The heater boils the liquid off until the level falls",
                "While the bulb is in vapour it stays warm and holds the valve open; when liquid covers it the heat is conducted away, the bulb cools, its pressure falls and the valve closes",
                "The heater raises the bulb pressure to open the valve when liquid covers it",
                "The bulb measures suction superheat as it would on a direct expansion coil",
              ],
              answer: 1,
              explain: "It is a level sensor built out of an ordinary TX valve. Vapour is a poor conductor so the small element keeps the bulb warm and the valve open. Liquid conducts the heat away instantly, the charge pressure drops and the valve shuts — so liquid arriving is the signal to stop feeding.",
            },
            {
              q: "On a liquid return system, what happens when the pump-receiver fills to its high float?",
              options: [
                "The compressor stops until the vessel drains",
                "Normally open solenoids 1 and 2 close and normally closed solenoid 3 opens, admitting vapour at about 300 kPa to push the liquid into the main liquid line",
                "The liquid pump starts",
                "Solenoid 3 closes and the vessel equalises to suction",
              ],
              answer: 1,
              explain: "The vessel is pressurised on demand rather than pumped. Closing 2 stops it equalising to suction so pressure can rise, closing 1 isolates the liquid flow, and opening 3 admits high-side vapour that drives the liquid out. The low float reverses the sequence so the vessel can fill again.",
            },
            {
              q: "What are the two disadvantages of liquid recirculation that the liquid return system was designed to remove?",
              options: [
                "High refrigerant charge and poor heat transfer",
                "The mechanical liquid pump and the maintenance it demands, which prevent fully automatic unattended operation",
                "Oil accumulation in the evaporators and flood-back to the compressor",
                "The need for hand expansion valves and thermostats",
              ],
              answer: 1,
              explain: "Recirculation fixes heat transfer, oil return and flood-back very well — those are its advantages. What remains is the pump: one more rotating machine to maintain and protect from cavitation. Liquid return uses system pressure instead, so the plant can run unattended.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
