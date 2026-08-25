/* =========================================================================
   Course content, module 406 — Recovery, evacuation and the Code of
   Practice (capstone exam revision).

   Source: the Australia and New Zealand Refrigerant Handling Code of
   Practice (Parts 1 and 2); the Ozone Protection and Synthetic Greenhouse
   Gas Management legislation and the Refrigerant Trading Authorisation /
   Refrigerant Handling Licence scheme administered by the Australian
   Refrigeration Council; AS/NZS 5149.4; AS 4332; the ADG Code;
   Australian Refrigeration and Air-conditioning (ARAC) Vols 1 and 2,
   Boyle — pub. AIRAH.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority, and the
   current edition of every standard and code governs. Every practice
   question, scenario and number here is written for this module.

   This module is exam revision. Module 11 of this course teaches the Code
   of Practice clause by clause and is the place to go for the requirement
   itself; here we drill the answers the knowledge assessment asks for.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_KIT = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — refrigerant recovery: equipment, cylinders and recovering the whole charge",
    "AS/NZS 5149.4 — refrigerating systems and heat pumps: operation, maintenance, repair and recovery",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — specialised service equipment: recovery units, manifolds, hoses and scales",
  ];

  const REFS_TECHNIQUE = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — recovery of the entire charge, liquid and vapour",
    "Recovery unit manufacturer operating instructions — vapour, liquid and push-pull modes and their limits",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — service procedure: removing a charge from a commercial system",
  ];

  const REFS_CYL = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — recovery cylinders, cylinder filling, storage and transport",
    "AS 4332 — the storage and handling of gases in cylinders",
    "Australian Code for the Transport of Dangerous Goods by Road and Rail (ADG Code) — Division 2.1 and 2.2 gases in cylinders",
  ];

  const REFS_PROHIB = [
    "Ozone Protection and Synthetic Greenhouse Gas Management Act and Regulations — the prohibition on conduct that discharges a scheduled substance",
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 1 and Part 2 — refrigerant discharge and prohibited charging",
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — leak repairs verified before the system is charged",
  ];

  const REFS_ROUTES = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — recovery, recycling, reclamation and disposal",
    "Refrigerant Trading Authorisation and Refrigerant Handling Licence conditions administered by the Australian Refrigeration Council",
    "AHRI 700 — specification for single-component and blended refrigerants, the purity standard reclaimed refrigerant is processed to",
  ];

  const REFS_EVAC = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — evacuation equipment and the deep and triple evacuation methods",
    "AS/NZS 5149.4 — evacuation and dehydration before charging",
    "Manufacturer operating instructions for two-stage rotary-vane vacuum pumps and thermistor / Pirani micron gauges",
  ];

  const REFS_DECAY = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — the standing vacuum (decay) test and its acceptance criterion",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — dehydration, moisture in systems and vacuum measurement",
    "Water vapour saturation data — the pressure at which water boils or ice sublimes at deep vacuum",
  ];

  const REFS_HC = [
    "Australia and New Zealand Refrigerant Handling Code of Practice, Part 2 — flammable refrigerants: tools, equipment and handling precautions",
    "AS/NZS 5149.1 and AS/NZS ISO 817 — refrigerant safety classification, including class A3 hydrocarbons",
    "AIRAH and industry guidance on the safe handling of hydrocarbon refrigerants in Australia; refrigerant supplier Safety Data Sheets",
  ];

  const MODULES = [
    {
      id: "cap-recovery-and-code",
      stream: "capstone",
      title: "C.6 · Recovery, evacuation and the Code of Practice",
      blurb:
        "Exam revision on emptying and re-preparing a system: the recovery kit and why each item is on the list, recovery technique, cylinder rules, the prohibitions, the two evacuation methods, disposal routes and hydrocarbons.",
      lessons: [

/* ------------------------------------------------------------------ 1 */
{
  id: "recovery-equipment",
  title: "The equipment needed to recover a commercial charge",
  minutes: 12,
  simple:
    "To take the gas out of a fridge system safely you need a machine that pumps it, a strong bottle approved to hold it, a set of scales so you know how much is in the bottle, and hoses with self-sealing ends so nothing escapes when you pull them off. Think of it as a pump, a drum, a weighbridge and a tap that shuts itself.",
  refs: REFS_KIT,
  content: `Asked to name the gear you would take to a job to get a charge out of a system safely and without wasting half a day, most candidates write three nouns. Three nouns is half an answer. When a question pairs the words *safe* and *efficient*, those two words are the marking criteria: for every item you name, say what it protects and what it speeds up.

This module is exam revision. **Module 11 · The Refrigerant Handling Code of Practice** teaches the Code clause by clause and is where the requirement itself lives; work to the current edition of the Code, because clause numbers and some values move between editions.

## The recovery kit

!FIG[recovery-hookup]

| Item | Why it must be there | Safe, efficient, or both |
|---|---|---|
| Recovery unit rated for the refrigerant | It is the only thing that can pull refrigerant out of a system whose own compressor may be seized, burnt out or isolated, and push it into a cylinder that is already at higher pressure than the system | Both |
| Approved, in-test recovery cylinder | A pressure vessel certified to hold that refrigerant, refillable, fitted with liquid and vapour valves and marked with its tare weight and water capacity | Safe |
| Accurate electronic scales | The only way to know the mass recovered, to stop before the fill limit, and to write a true figure in the logbook | Both |
| Gauge manifold and hoses with low-loss fittings | Lets you read what the system is doing, connect to both sides, and break connections without venting the hose contents | Both |
| Recovery-unit inlet filter-drier | Stops acid, carbon and moisture from a burnout being carried into the machine and the cylinder | Safe (and it protects your machine) |
| Core removal tools | Take the Schrader cores out so the full port area is available, roughly doubling the flow through a 1/4 inch connection | Efficient |
| Refrigerant identifier | Proves what is actually in the system before you put it in a cylinder with a label on it | Safe |
| PPE — gloves and eye protection, ventilation | Liquid refrigerant on skin is a freeze burn; vapour in a plant room displaces oxygen | Safe |

Three items, chosen well, would be the recovery unit, the approved cylinder and the scales. But learn the whole list, because the same knowledge gets asked as "list four" and as "what is the purpose of X" in different sittings.

### The recovery unit

A recovery unit is a small, self-contained refrigeration machine built to run backwards from what you are used to: it draws from the system, compresses, condenses what it can, and discharges into your cylinder. It is nearly always oil-less, so no compressor oil is fed into the refrigerant you are trying to keep clean, and it is rated for a group of refrigerants and a maximum working pressure. You cannot substitute the system's own compressor. On a commercial job the compressor may be the reason you are there — seized, burnt out, or with its service valves front-seated — and even a healthy compressor cannot pump itself down into a cylinder without discharging somewhere.

Match the machine to the refrigerant. A unit rated for A1 fluorocarbons is not rated for a class A3 hydrocarbon or, generally, for an A2L. That is a safety matter, not a warranty one, and it is covered in the hydrocarbon lesson later in this module.

### The approved recovery cylinder

Not a disposable cylinder, not a bottle you found in the yard, not a "temporary receiver". It must be refillable, approved and pressure-rated for the refrigerant, still inside its periodic test date, and labelled for what is in it. Disposable single-trip containers must never be refilled or used as a receiver. The cylinder lesson in this module deals with the fill limit, the in-test date and labelling in detail.

### Accurate scales

The scales are the instrument that turns recovery from guesswork into a measured job. They tell you:

- how much refrigerant is in the cylinder now, so you know whether there is room for this charge;
- when to stop, because the fill limit is a mass limit and there is no other way to see it;
- how much came out of the system, which is the number that goes in the logbook and, on a leaking system, tells you how much was lost.

A cylinder full of liquid gives no warning. Its pressure sits at saturation right up until the moment the last vapour space fills, and then it climbs a hundred kilopascals for every fraction of a degree. Your gauges cannot see an overfill coming. Only the scales can.

### The manifold and low-loss hoses

Hoses must be rated for the pressures, in good condition, and as short and as large in bore as the job allows — a long, thin hose is a restriction, and a restriction is what makes a recovery take all afternoon. **Low-loss fittings** are self-sealing couplings that close the hose when you disconnect, so the refrigerant standing in the hose stays in the hose instead of going to atmosphere.

That is not a trivial saving. Three 900 mm hoses of about 5 mm bore hold roughly 53 mL between them. Full of liquid R404A at about 1.045 kg/L that is:

- 0.053 L x 1.045 kg/L = **0.055 kg, or 55 g, per disconnection**

Break your hoses twenty times over a busy week and you have vented more than a kilogram — which is both a reportable emission and, under the legislation, a discharge you are not allowed to cause.

## Reading the word "efficient"

An efficient recovery is one that gets the whole charge out in a sensible time. That is why the list includes core removal tools and large-bore short hoses, why the machine matters, and why you connect to both the liquid and vapour sides. If the question says *safe and efficient*, give at least one item whose justification is speed, and say so.

### Written practice 1

**A 24 kg R404A charge has to come out of a two-compressor coolroom pack at a country pub before the condenser is replaced. Name three pieces of equipment you would take, and for each one say what it protects and what it speeds up.**

>? **Model answer.**
>?
>? 1. **A recovery unit rated for R404A.** It is a self-contained machine that draws refrigerant from the system, compresses it and discharges it into the recovery cylinder. The system compressors cannot do this themselves — one may be the failed component — and the cylinder is at a higher pressure than the system, so something has to do the pumping.
>? 2. **An approved, in-test recovery cylinder with liquid and vapour valves.** It is a pressure vessel certified for R404A and refillable, so the charge is contained rather than vented. Liquid and vapour connections let the charge be taken out in liquid form for speed and finished as vapour.
>? 3. **Accurate electronic scales.** The fill limit on a recovery cylinder is a mass limit, and pressure gauges give no warning of an overfill. The scales show how much is already in the cylinder, when to stop, and how much came out of the system for the logbook record.
>?
>? Also acceptable, with the same style of justification: a gauge manifold and hoses with low-loss fittings, a filter-drier on the recovery unit inlet, and core removal tools.

### Written practice 2

**Explain what a low-loss fitting does, and why the Code's prohibition on discharging refrigerant makes it more than a convenience.**

>? **Model answer.** A low-loss fitting is a self-sealing hose coupling. When it is disconnected, a valve in the fitting closes and traps the refrigerant standing in the hose instead of letting it blow to atmosphere.
>?
>? Every disconnection of an ordinary hose vents whatever the hose is holding. A set of three short 1/4 inch hoses holds roughly 50 mL, which is about 55 g if they are full of liquid R404A. Repeated over a working week that is more than a kilogram of refrigerant released.
>?
>? The legislation prohibits conduct that discharges, or is likely to discharge, a scheduled substance. Venting hose contents is a discharge, however small each one is, so low-loss fittings are how a technician meets that obligation while still doing normal service work.

### Written practice 3

**Why is a filter-drier fitted to the inlet of a recovery unit when the charge is being removed from a system with a burnt-out compressor?**

>? **Model answer.** A motor burnout produces acid, moisture, carbon and sludge, all of which travel with the refrigerant. Without a filter-drier at the recovery unit inlet, that contamination is drawn straight into the recovery machine, where it attacks the valves, seals and heat exchanger, and then into the recovery cylinder, where it contaminates whatever refrigerant is already stored there.
>?
>? The drier protects the machine, keeps the recovered refrigerant closer to a condition that can be reclaimed, and avoids spoiling a part-full cylinder. It is a consumable on a burnout job — fit a fresh one, and expect to change it partway through a badly contaminated recovery.

## What to remember

- Name the item **and** its purpose. Three nouns is half an answer.
- Core kit: recovery unit, approved in-test cylinder, accurate scales, manifold and hoses with low-loss fittings.
- Supporting kit: inlet filter-drier, core removal tools, refrigerant identifier, PPE and ventilation.
- The scales are the only instrument that can see an overfill coming.
- Match the machine and the cylinder to the refrigerant class — A1 gear is not A2L or A3 gear.`,
  quiz: [
    {
      q: "Why can the system's own compressor not be used to recover the charge into a cylinder?",
      options: [
        "It would contaminate the refrigerant with compressor oil",
        "It may be the failed component, and in any case it cannot discharge into a cylinder already at a higher pressure without venting somewhere",
        "The Code prohibits running a compressor during recovery",
        "It would draw the system into too deep a vacuum",
      ],
      answer: 1,
      explain: "On a commercial job the compressor is often exactly why you were called — seized, burnt out, or valved off. Even a healthy one has no path into a recovery cylinder. Oil carry-over is a genuine secondary reason a purpose-built oil-less recovery unit is used, but it is not the reason the system compressor cannot do the job.",
    },
    {
      q: "A recovery cylinder's gauge pressure gives no warning that it is close to overfilled. Why?",
      options: [
        "Because recovery cylinders are not fitted with a pressure gauge port",
        "Because the pressure stays at the saturation value for the temperature until the last vapour space is gone, then rises almost vertically",
        "Because the recovery unit isolates the cylinder from the gauge manifold",
        "Because liquid refrigerant has a lower pressure than vapour",
      ],
      answer: 1,
      explain: "While any vapour space remains, the cylinder sits at the saturation pressure for its temperature no matter how much liquid is in it. Once it is liquid-full, a fraction of a degree of warming produces a huge pressure rise because liquid is nearly incompressible. That is why the fill limit is a mass limit read on scales.",
    },
    {
      q: "Which item of recovery equipment is justified mainly on the grounds of efficiency rather than safety?",
      options: [
        "The approved recovery cylinder",
        "Core removal tools and short, large-bore hoses",
        "The inlet filter-drier on a burnout job",
        "Eye protection and gloves",
      ],
      answer: 1,
      explain: "Taking the Schrader cores out and keeping hoses short and fat removes the biggest restriction in the recovery path, which is what turns an all-day job into a couple of hours. The cylinder, the drier and the PPE are all there because of a hazard, not because of speed.",
    },
    {
      q: "Three 900 mm hoses of about 5 mm bore hold roughly 53 mL. If they are full of liquid R404A (about 1.045 kg/L), how much refrigerant is released each time they are disconnected without low-loss fittings?",
      options: ["About 5 g", "About 55 g", "About 550 g", "About 1.05 kg"],
      answer: 1,
      explain: "0.053 L x 1.045 kg/L = 0.055 kg, so about 55 g. The distractors come from slipping a decimal place. It sounds small until you count the disconnections in a week: twenty of them is over a kilogram vented, and every one of them is a prohibited discharge.",
    },
  ],
},

/* ------------------------------------------------------------------ 2 */
{
  id: "recovery-technique",
  title: "Recovery technique: vapour, liquid and push-pull",
  minutes: 13,
  simple:
    "Sucking gas out of a system is slow, like emptying a swimming pool with a straw. Taking the liquid out first is much faster, like tipping the pool out through a hose. On very big systems you make the recovery machine blow into one end and suck from the other so the liquid is pushed along by itself. The last little bit is always slow, no matter what you do.",
  refs: REFS_TECHNIQUE,
  content: `The Code requires the **entire charge** to be recovered — liquid and vapour, not just what comes out easily. How long that takes is almost entirely down to technique, and the difference between a good technique and a poor one on a commercial charge is measured in hours.

## Three methods, one job

| Method | What flows through the machine | Typical rate | Where it suits |
|---|---|---|---|
| Vapour recovery | Vapour from the vapour side of the system | roughly 2–5 kg/h | Small charges, final clean-up on every job, systems with no liquid access |
| Liquid recovery | Liquid drawn from a liquid line or receiver, through the machine's liquid mode | roughly 15–25 kg/h | Any system with a liquid access point and a charge above a few kilograms |
| Push-pull | Liquid flows system-to-cylinder directly; only vapour goes through the machine | roughly 30–100 kg/h | Large charges, conventionally above about 7 kg and clearly worthwhile above 15 kg |

Rates vary widely with the machine, the ambient, the hose sizes and the refrigerant. Take them as an indication of the shape of the problem, and read your own machine's data.

## Why vapour recovery is so slow

The machine is a positive-displacement compressor. Each revolution swallows a fixed *volume*. What you are paid to move is *mass*. Mass equals volume times density, and vapour is roughly a thousand times less dense than the liquid it came from. Pull a 34 kg charge out as vapour and the machine has to swallow around a thousand times the volume it would have to move if that charge were liquid.

It gets worse as you go. As system pressure falls, the vapour left in it becomes thinner still, so the same swept volume carries less and less mass per stroke — which is exactly the reason the last part of a recovery crawls, and we come back to it below.

## Liquid recovery — the ordinary commercial method

1. Fit the scales, put the cylinder on them, and record the starting gross weight.
2. Connect the recovery unit inlet to a **liquid** access point: the receiver outlet service valve, the king valve, or a liquid-line access valve. Use core removal tools and short large-bore hoses.
3. Connect the recovery unit outlet to the **liquid** valve on the recovery cylinder (the dip-tube valve), so liquid goes in at the bottom and vapour space stays at the top.
4. Set the machine to its liquid or "purge" mode as the maker instructs. Most machines pass liquid through a heat exchanger so the compressor never sees a slug.
5. Open up and run, watching the scales continuously.
6. When liquid stops flowing — the sight glass clears to vapour, the rate collapses, the machine note changes — switch to vapour mode and change the cylinder connection to the vapour valve.
7. Finish on vapour recovery.

Note the cylinder connection changes between the two stages. Liquid goes into the liquid valve. Vapour goes into the vapour valve. Pushing vapour in through the liquid dip tube just bubbles it up through the liquid you already have, and pushing liquid in through the vapour valve builds a liquid level from the top down.

## Push-pull

Push-pull uses the recovery machine as a pressure difference generator rather than as a refrigerant path. It only works on a system that has a substantial body of liquid — a receiver or a flooded evaporator — and enough of it to be worth the setup.

1. Cylinder on the scales; record the starting gross weight; confirm there is room for the whole charge.
2. **Pull:** the recovery unit **inlet** connects to the **vapour** valve of the recovery cylinder.
3. **Push:** the recovery unit **outlet** connects to a **vapour** point on the system — the suction service valve or a receiver vapour connection.
4. A separate large-bore liquid hose runs from the system's **liquid** access point straight to the cylinder's **liquid** valve, with a sight glass in that line.
5. Start the machine. It lowers the cylinder pressure and raises the system pressure. That pressure difference pushes liquid out of the system, along the liquid hose and into the cylinder without passing through the machine at all.
6. Watch the sight glass. Bubbles, then a clear vapour-only glass, mean the liquid body is gone.
7. Close the liquid line, reconfigure to conventional vapour recovery, and clean up the remainder.

>! Push-pull moves refrigerant fast enough to overfill a cylinder before you can react. Never leave the scales unwatched, set a mass alarm if the scales have one, and stop and change cylinders with room in hand rather than pushing to the limit. A liquid-full cylinder left in the sun is a bomb.

Push-pull also has a trap at the end: because the machine is drawing on the cylinder and pushing into the system, it is possible to keep circulating without ever emptying anything if the liquid path has stopped flowing. That is why the sight glass in the liquid line is not optional.

## Worked comparison — a 34 kg charge

A supermarket pack holds 34 kg of R404A, of which about 30 kg sits as liquid in the receiver and condenser and about 4 kg as vapour and dissolved in oil.

**Vapour only, at 3 kg/h:**

- 34 kg / 3 kg/h = **11.3 hours**

**Liquid then vapour, at 20 kg/h and 2 kg/h:**

- liquid: 30 kg / 20 kg/h = 1.5 h
- clean-up: 4 kg / 2 kg/h = 2.0 h
- total = **3.5 hours**

**Push-pull then vapour, at 60 kg/h and 2 kg/h:**

- liquid: 30 kg / 60 kg/h = 0.5 h
- clean-up: 4 kg / 2 kg/h = 2.0 h
- total = **2.5 hours**

Two things fall out of that arithmetic. First, choosing the right method is the difference between one day and one morning. Second, the **clean-up dominates** once you have picked a fast method for the liquid — which is why push-pull is only about an hour better than plain liquid recovery here, and why nobody ever finishes a recovery as quickly as they hoped.

## Why the end takes forever

Four separate effects pile up at the tail of a recovery:

- **Falling vapour density.** At 1,000 kPa the vapour the machine swallows might be 50 kg/m3. Near atmospheric it is a few kg/m3, and below atmospheric less again. The same machine at the same speed is moving a small fraction of the mass per hour it was moving at the start.
- **Rising compression ratio.** The machine has to lift from a near-vacuum suction to a cylinder pressure of maybe 1,200 kPa absolute. Volumetric efficiency collapses at high ratio, so the machine loses swept volume as well as density.
- **Refrigerant dissolved in the oil.** Compressor oil holds a surprising mass of refrigerant in solution, and it comes out of solution slowly, at a rate set by temperature and surface area, not by how hard you pull.
- **Evaporative cooling.** As the system boils itself dry it gets cold, which lowers the pressure of the remaining refrigerant and slows the boil-off further. Warming the compressor body and the receiver with a heat blanket — never a flame — genuinely speeds up the last stage.

## Knowing when you are finished

Do not judge it by the clock and do not judge it by the gauge while the machine is running, because a running machine will hold a system in vacuum whether the refrigerant is out or not.

1. Recover until the system reaches the level the equipment maker and the Code require, and the rate has essentially stopped.
2. **Isolate the machine at the valves** and switch it off.
3. Leave the system standing for several minutes — five to ten is realistic on a commercial pack.
4. Watch the system pressure. If it climbs back up, refrigerant is still coming out of the oil and out of the cold parts of the system. That is not "finished".
5. Re-recover, and repeat the stand test until the pressure holds.
6. Record the mass recovered from the scales in the logbook.

That rise-and-re-recover cycle is normal on a big system with a lot of oil, and it is the reason a recovery is quoted in half-days.

### Written practice 1

**Describe the push-pull recovery method and state the type of system it suits. Include what the sight glass is for.**

>? **Model answer.** Push-pull uses the recovery machine to create a pressure difference rather than to carry the refrigerant. The machine's inlet is connected to the vapour valve of the recovery cylinder and its outlet to a vapour point on the system, so it lowers the cylinder pressure and raises the system pressure. A separate large-bore liquid hose runs directly from the system's liquid access point to the cylinder's liquid valve. The pressure difference pushes the body of liquid from the system into the cylinder without it passing through the machine, which is why the rate is so high.
>?
>? It suits systems with a large liquid charge and a receiver or other liquid access — commercial and industrial plant, conventionally charges above about 7 kg, and clearly worth setting up above about 15 kg.
>?
>? The sight glass is fitted in the liquid line so the operator can see when liquid stops flowing. Bubbles followed by a clear vapour-only glass mean the liquid body has transferred; the liquid line is then closed and the remaining vapour is recovered conventionally. Without the sight glass you cannot tell whether the method is still working, and the scales must be watched throughout because push-pull can overfill a cylinder very quickly.

### Written practice 2

**A recovery that started at over 20 kg per hour has slowed to almost nothing with the system still slightly above atmospheric pressure. Explain why, and state what you would do.**

>? **Model answer.** The rate has collapsed because the liquid is gone and only vapour is left. A recovery machine is a positive-displacement compressor: it moves a fixed volume per revolution, and vapour at low pressure has a very low density, so each stroke carries a tiny mass. On top of that the compression ratio from a near-atmospheric suction up to cylinder pressure is very high, so volumetric efficiency is poor, and refrigerant still dissolved in the compressor oil is releasing slowly.
>?
>? What to do: change the cylinder connection to the vapour valve if that has not been done, switch the machine to vapour mode, and keep going. Apply gentle heat to the compressor crankcase and receiver with a heat blanket — never a naked flame — to drive refrigerant out of the oil and out of the cold parts. Accept that the final stage is slow, then isolate, stand the system, and check for a pressure rise before calling it finished.

### Written practice 3

**How do you prove a recovery is complete? Why is watching the gauge with the recovery unit running not good enough?**

>? **Model answer.** A running recovery unit will hold a system down whether or not the refrigerant is all out, because it is actively pumping against whatever is boiling off. The gauge is reading the machine's effort, not the state of the system.
>?
>? To prove it: recover to the level required, then close the valves to isolate the machine and shut it off. Leave the system standing for several minutes — five to ten on a commercial pack. If the pressure rises, refrigerant is still coming out of solution in the oil and out of the colder parts of the system, and the recovery is not complete. Re-recover and repeat the stand until the pressure holds steady.
>?
>? Finish by reading the scales and recording the mass recovered in the equipment logbook, because that figure is both a compliance record and, on a leaking system, evidence of how much was lost.

## On the job

- Weigh the cylinder before you start and confirm the whole charge will fit.
- Liquid into the cylinder's liquid valve, vapour into its vapour valve — swap the connection when you swap modes.
- Cores out, hoses short and fat: the restriction is nearly always the connection, not the machine.
- Keep the cylinder cooler than the system if you can. A hot cylinder is a high back-pressure on your machine.
- The clean-up dominates the total time, so plan the day around it.
- Isolate, stand, watch for a rise. Then, and only then, you are finished.`,
  quiz: [
    {
      q: "In push-pull recovery, where is the recovery unit's inlet connected?",
      options: [
        "To the system's liquid line",
        "To the vapour valve of the recovery cylinder",
        "To the liquid valve of the recovery cylinder",
        "To the system's suction service valve",
      ],
      answer: 1,
      explain: "The machine pulls vapour out of the cylinder and pushes it into the system. That drops cylinder pressure and raises system pressure, and the resulting difference drives liquid along a separate hose from the system straight into the cylinder's liquid valve. The machine never handles the liquid — which is the whole point of the method.",
    },
    {
      q: "A 34 kg charge is recovered as vapour only at 3 kg/h. Roughly how long does that take, and what is the main reason it is so slow?",
      options: [
        "About 11 hours — the machine moves a fixed volume per revolution and vapour has a very low density",
        "About 11 hours — the recovery cylinder cannot accept refrigerant any faster",
        "About 3 hours — the hoses are the restriction",
        "About 34 hours — the compression ratio limits the machine to 1 kg/h",
      ],
      answer: 0,
      explain: "34 / 3 = 11.3 hours. The machine is a positive-displacement compressor: it swallows a fixed volume each revolution, and vapour is roughly a thousand times less dense than liquid, so the mass carried per stroke is tiny. Taking the liquid out as liquid is what changes the answer, not a bigger cylinder.",
    },
    {
      q: "Why does system pressure often climb back up after a recovery unit is isolated and switched off?",
      options: [
        "Air is leaking into the system through the service valves",
        "Refrigerant still dissolved in the compressor oil, and in the colder parts of the system, is continuing to come out of solution",
        "The recovery cylinder is feeding back through the hoses",
        "The system is warming up and the metal is expanding",
      ],
      answer: 1,
      explain: "Compressor oil holds a substantial mass of refrigerant in solution and releases it slowly. A rise after isolation means the recovery is not finished — re-recover and repeat the standing check until it holds. A genuine leak is possible, but on a system you have just been running the oil is the usual culprit, and gentle warming speeds it up.",
    },
    {
      q: "During liquid recovery, the recovery unit's outlet should be connected to which cylinder valve?",
      options: [
        "The vapour valve, so the cylinder pressure stays low",
        "The liquid valve, so liquid enters through the dip tube at the bottom and the vapour space stays at the top",
        "Either — the cylinder valves are interchangeable",
        "The relief valve port",
      ],
      answer: 1,
      explain: "Liquid goes in through the liquid (dip-tube) valve so it fills from the bottom and leaves a proper vapour space above it. Feed liquid in through the vapour valve and you build a liquid level from the top down; feed vapour in through the liquid valve and you just bubble it up through the liquid already there.",
    },
  ],
},

/* ------------------------------------------------------------------ 3 */
{
  id: "recovery-cylinders",
  title: "Recovery cylinder rules and the 80% fill calculation",
  minutes: 14,
  simple:
    "A recovery bottle is a pressure vessel with rules. It must be the right kind of bottle, still inside its test date, labelled with what is in it, and never filled past 80% by weight. Fill it right to the top with liquid and a warm day will burst it, because liquid has nowhere to expand to.",
  refs: REFS_CYL,
  content: `The cylinder is the part of the recovery kit that can kill someone. Everything else fails safe: a bad hose leaks, a tired machine is slow. An overfilled cylinder in the back of a hot van is a stored energy release with no warning, and the calculation that prevents it is one the assessment asks you to do.

## The rules, in the order you meet them

| Rule | What it means in practice |
|---|---|
| Approved, refillable recovery cylinder only | A certified pressure vessel rated for the refrigerant, with liquid and vapour valves. Never a disposable single-trip container, never an improvised receiver |
| In test date | Cylinders are periodically inspected and re-stamped. The stamp is on the collar or shoulder. An out-of-test cylinder must not be filled, and most wholesalers will not accept one |
| Correct pressure rating for the refrigerant | An R134a-era cylinder is not rated for R410A. Check the marked working pressure against the refrigerant you are recovering |
| Correct class rating | Class A2L and A3 refrigerants require cylinders specifically approved for flammable refrigerant |
| Fill limit — 20% ullage, i.e. 80% by weight | Never exceed the marked maximum gross weight, and never fill past the safe fill capacity calculated for the refrigerant |
| Labelled | The label must say what is in it, that it is recovered refrigerant, and be updated when the contents change |
| One refrigerant per cylinder | Never mix refrigerants, and never put a refrigerant into a cylinder holding a different one |
| Stored and transported correctly | Upright, secured, valve protection fitted, out of the sun, ventilated, and to the ADG Code where it is a dangerous good |

## Why the fill limit exists

Liquid refrigerant expands as it warms, and it is almost incompressible. While there is any vapour space above the liquid, that expansion is absorbed: the liquid level rises and the pressure follows the saturation curve for the temperature, which is a gentle, predictable climb. The moment the cylinder is liquid-full, there is nothing left to compress. Another degree of warming has nowhere to go, and pressure rises hydraulically — hundreds of kilopascals per degree — straight past the cylinder's working pressure and towards its burst pressure.

The 20% ullage exists to guarantee that vapour space is still there at the highest temperature the cylinder is likely to see. That is why the limit is 80% **by weight** and not "until it looks full", and why the only instrument that can enforce it is a set of scales.

>! An overfilled recovery cylinder is the single most dangerous thing on a refrigeration ute. Liquid-full at 25 degrees Celsius, then left in a closed vehicle on a summer day at 55 degrees Celsius, and the pressure runs far beyond the cylinder's rating with no relief path. Weigh every fill. Stop with room in hand. Never top up a cylinder you did not weigh yourself.

## The calculation

The safe fill mass is the mass of refrigerant that occupies 80% of the cylinder's internal volume as liquid:

**Safe fill mass = water capacity (L) x liquid density (kg/L) x 0.80**

The cylinder is stamped with two numbers you need:

- **WC** — water capacity in litres, the cylinder's internal volume.
- **TARE** — the empty weight of the cylinder in kilograms, valves and all.

And you need the liquid density of the refrigerant at a reference temperature, from the supplier data. Working figures at 25 degrees Celsius:

| Refrigerant | Liquid density at 25 degrees Celsius (kg/L) |
|---|---|
| R134a | 1.21 |
| R410A | 1.06 |
| R404A | 1.045 |
| R32 | 0.96 |
| R290 (propane) | 0.49 |

Note how low the hydrocarbon figure is. A cylinder that safely holds 50 kg of R404A holds only about 23 kg of propane, because propane liquid is less than half as dense. Never work a hydrocarbon fill off a fluorocarbon number.

Then:

- **Maximum gross weight = safe fill mass + tare**
- **Current contents = current gross weight − tare**
- **Room remaining = safe fill mass − current contents**

### Worked example 1 — R404A, part-full cylinder

A recovery cylinder is stamped **WC 61.0 L**, **TARE 22.6 kg**. It reads **68.4 kg** on the scales and holds R404A. You have 7.5 kg of R404A to recover from a display case. Can you use it?

Safe fill mass:

- 61.0 L x 1.045 kg/L = 63.75 kg (the mass if it were liquid-full)
- 63.75 x 0.80 = **51.0 kg safe fill**

Maximum gross weight:

- 51.0 + 22.6 = **73.6 kg**

Current contents:

- 68.4 − 22.6 = **45.8 kg already in the cylinder**

Room remaining:

- 51.0 − 45.8 = **5.2 kg**

**Answer: no.** There is room for 5.2 kg and the job has 7.5 kg. Recovering it all would put the cylinder at 53.3 kg of contents, above the 51.0 kg limit and above the 73.6 kg maximum gross weight. Take a second cylinder, or start with an empty one.

### Worked example 2 — R134a, plenty of room

A cylinder is stamped **WC 26.5 L**, **TARE 13.8 kg**, and reads **24.1 kg** gross. It holds R134a. You need to recover 6.2 kg of R134a from a chiller.

- 26.5 x 1.21 = 32.07 kg liquid-full
- 32.07 x 0.80 = **25.7 kg safe fill**
- Maximum gross = 25.7 + 13.8 = **39.5 kg**
- Current contents = 24.1 − 13.8 = **10.3 kg**
- Room remaining = 25.7 − 10.3 = **15.4 kg**

**Answer: yes.** 6.2 kg fits comfortably. The finishing gross weight will be 24.1 + 6.2 = **30.3 kg**, which is below the 39.5 kg maximum. Set the scales alarm at 30.3 kg and watch it.

Two habits are worth building. Always work in gross weights at the end, because that is the number the scales actually show you. And always check the answer against the maximum gross weight as a second, independent test — if the two disagree you have made an arithmetic slip.

## Never mix refrigerants

>! A cylinder containing a mixture is refrigerant nobody can use. It cannot be reclaimed to specification economically, so the entire contents go to destruction, and the cylinder itself may need professional decanting before it goes back into service. Worse, a mixture has unknown pressure and temperature behaviour, so the fill calculation you did is meaningless, and a flammable refrigerant accidentally added to an A1 cylinder turns a routine bottle into an explosion hazard.

That is the reason a refrigerant identifier is on the kit list. On any system where you cannot positively confirm what is inside — no nameplate, a system that has been "topped up" by someone unknown, a hydrocarbon "drop-in" of doubtful origin — identify it before you connect. Where a refrigerant genuinely cannot be identified, the Code's position is to treat the system as flammable and toxic until proved otherwise, recover into a dedicated cylinder, and send it for reclamation, never venting it.

## Labelling, storage and transport

- **Label** every cylinder with the refrigerant it holds and the fact that it is recovered, and change the label when the contents change. An unlabelled cylinder is, in practice, contaminated refrigerant, because nobody downstream will trust it.
- **Store** upright, secured against falling, in a ventilated area, out of direct sun, with valve protection fitted and clear signage so emergency services can identify what is there. Storage to AS 4332; quantity limits come from local legislation.
- **Transport** upright and restrained, never loose in a passenger compartment or a sealed van without ventilation. Refrigerants are dangerous goods: non-flammable refrigerants transport as Division 2.2, and flammable ones such as hydrocarbons as Division 2.1 with the red flammable-gas diamond, both under the ADG Code.
- **Never heat a cylinder with a flame** to raise its pressure. Warm water or a proper cylinder blanket only.

### Written practice 1

**A recovery cylinder is stamped WC 47.0 L and TARE 18.4 kg. It currently reads 44.0 kg on the scales and contains R410A (liquid density 1.06 kg/L at 25 degrees Celsius). You need to recover 9.0 kg of R410A. Show your workings and state whether this cylinder may be used.**

>? **Model answer.**
>?
>? Safe fill mass = water capacity x liquid density x 0.80:
>?
>? - 47.0 x 1.06 = 49.82 kg (the mass if the cylinder were liquid-full)
>? - 49.82 x 0.80 = **39.9 kg safe fill**
>?
>? Then:
>?
>? - Maximum gross weight = 39.9 + 18.4 = **58.3 kg**
>? - Current contents = 44.0 − 18.4 = **25.6 kg**
>? - Room remaining = 39.9 − 25.6 = **14.3 kg**
>?
>? **Yes, the cylinder may be used.** 9.0 kg is well inside the 14.3 kg of room available. The finishing gross weight will be 44.0 + 9.0 = 53.0 kg, which is below the 58.3 kg maximum gross weight — the two checks agree.

### Written practice 2

**Explain, in terms of what happens inside the cylinder, why a recovery cylinder must never be filled beyond 80% by weight.**

>? **Model answer.** While a vapour space remains above the liquid, warming is absorbed by the liquid expanding into that space, and the cylinder pressure simply follows the saturation curve for its temperature — a gradual, predictable rise.
>?
>? Once the cylinder is liquid-full there is no vapour space left. Liquid refrigerant is almost incompressible, so any further warming has nowhere to expand to and the pressure rises hydraulically — hundreds of kilopascals for a single degree. A cylinder that is liquid-full at 25 degrees Celsius and then left in a closed vehicle that reaches 55 degrees Celsius can be driven far past its working pressure and towards burst, with no warning and no relief path.
>?
>? The 20% ullage guarantees the vapour space is still there at the worst temperature the cylinder will realistically see. Because the limit is a mass limit, only accurate scales can enforce it — the pressure gauge shows nothing unusual right up to the point of danger.

### Written practice 3

**A technician recovers a small amount of R134a into a cylinder that already holds R404A, reasoning that "it is all going to be destroyed anyway". List three things that are wrong with this.**

>? **Model answer.**
>?
>? 1. **The whole cylinder is now waste.** A mixture cannot be reclaimed to the AHRI 700 specification economically, so refrigerant that could have been reprocessed and reused is now destined for destruction. That includes the R404A that was already in there.
>? 2. **The fill calculation is void.** The safe fill mass was worked out using the liquid density of one refrigerant. A mixture has different density and different saturation pressure behaviour, so the limit the technician is working to no longer means anything.
>? 3. **It breaches the Code and the licence conditions.** Cross-contamination of refrigerants is prohibited, the cylinder label is now false, and the technician has no way to declare the contents honestly when the cylinder is handed in — which is itself a condition of the business's trading authorisation.
>?
>? A fourth point worth making: had the unidentified refrigerant been flammable, mixing it into an A1 cylinder would have created an explosion hazard in a vessel nobody expects to be flammable.

## What to remember

- Safe fill = water capacity x liquid density x 0.80. Check the answer against the marked maximum gross weight too.
- Contents = gross − tare. Room = safe fill − contents.
- The 20% ullage is there so a vapour space still exists on the hottest day.
- Approved, in-test, correctly rated and correctly labelled — four separate checks before you connect.
- One refrigerant per cylinder, always. Identify before you recover if there is any doubt.
- Upright, secured, ventilated, out of the sun, and to the ADG Code on the road.`,
  quiz: [
    {
      q: "A recovery cylinder is stamped WC 40.0 L and TARE 16.0 kg, and holds R404A (1.045 kg/L). What is its maximum gross weight?",
      options: ["57.8 kg", "41.8 kg", "49.4 kg", "33.4 kg"],
      answer: 2,
      explain: "Safe fill = 40.0 x 1.045 x 0.80 = 33.4 kg. Maximum gross = 33.4 + 16.0 = 49.4 kg. The 57.8 kg distractor comes from forgetting the 0.80 factor and adding the tare, and 33.4 kg is the contents limit rather than the gross — a very common slip when the question asks for gross weight.",
    },
    {
      q: "Why does the pressure in an overfilled cylinder rise so steeply with a small temperature increase?",
      options: [
        "Because refrigerant vapour expands rapidly when heated",
        "Because there is no vapour space left, and liquid refrigerant is almost incompressible so its expansion has nowhere to go",
        "Because the relief valve closes above a certain temperature",
        "Because the liquid changes to a supercritical state",
      ],
      answer: 1,
      explain: "With a vapour space present, expansion is absorbed and pressure follows the saturation curve gently. Liquid-full, the expansion is resisted by a nearly incompressible fluid in a rigid vessel, so pressure climbs hydraulically — hundreds of kilopascals per degree. The 20% ullage exists precisely to guarantee that space survives a hot day.",
    },
    {
      q: "A cylinder safely holds about 50 kg of R404A. Roughly how much R290 (propane) would the same cylinder safely hold?",
      options: ["About 50 kg", "About 23 kg", "About 75 kg", "About 40 kg"],
      answer: 1,
      explain: "Fill limits are volume-based, converted to mass by liquid density. Propane liquid is about 0.49 kg/L against R404A's 1.045 kg/L — less than half. So the same volume holds roughly 50 x (0.49 / 1.045) = about 23 kg. Working a hydrocarbon fill off a fluorocarbon figure would overfill the cylinder by more than double.",
    },
    {
      q: "Two refrigerants have accidentally been recovered into the same cylinder. What happens to that refrigerant?",
      options: [
        "It can be separated on site by fractional distillation through the recovery unit",
        "It must go for destruction at a licensed facility, because a mixture cannot be economically reclaimed to specification",
        "It can be recycled and used in either of the two original system types",
        "It may be vented, since mixed refrigerant is exempt from the discharge prohibition",
      ],
      answer: 1,
      explain: "Reclamation means reprocessing to the AHRI 700 purity specification, and separating a mixture back to that standard is not economic, so the whole cylinder goes to destruction. Nothing about a mixture makes it ventable — the discharge prohibition still applies, and mixtures of unknown composition must be handled as if flammable and toxic.",
    },
  ],
},

/* ------------------------------------------------------------------ 4 */
{
  id: "prohibitions",
  title: "The prohibitions that never bend",
  minutes: 11,
  simple:
    "There are a few things you must never do with refrigerant, no matter how convenient: let it out into the air, put more into a system you know is leaking, blow it through pipework to clean it, or use it to pressure-test for leaks. These are not workshop customs, they are against the law and the licence.",
  refs: REFS_PROHIB,
  content: `Most of what a technician does is judgement: which method, which order, what is good enough. A small number of things are not judgement at all. They are prohibitions, they carry legal penalties and licence consequences, and they turn up in the assessment as short-answer questions with no partial credit for "it depends".

In Australia the Ozone Protection and Synthetic Greenhouse Gas Management legislation prohibits conduct that discharges, or is likely to discharge, a scheduled substance !CITE[cop:1:1.2.1]. The Code of Practice restates that prohibition and gives the named examples. This is exam revision — **Module 11 · The Refrigerant Handling Code of Practice** carries the clause-level detail — and the current edition of the Code and the current Regulations govern.

## The named prohibitions

| Prohibited | Why it is prohibited | The excuse you will hear |
|---|---|---|
| Venting or discharging refrigerant to atmosphere | Every scheduled refrigerant released is either an ozone-depleting substance or a greenhouse gas with a global warming potential in the hundreds or thousands | "It was only a little bit in the hoses" |
| Charging a system with a known or suspected leak | Gas charged into a leaking system is gas released to atmosphere on a delay. It also hides the fault instead of fixing it | "The customer just wants it running for the weekend" |
| Flushing pipework with refrigerant | Flushing means deliberately blowing refrigerant through pipe and letting it out the far end — a discharge by definition, and an expensive one | "It's the only thing that shifts burnout sludge" |
| Using refrigerant as the pressure medium for leak testing | The test only works because gas escapes at the leak, so a refrigerant leak test is a deliberate release. Oxygen-free nitrogen is the required medium | "You can hear it, and the detector finds it straight away" |
| Using refrigerant to clean coils or blow out lines | Same reasoning: the refrigerant ends up in the atmosphere, and it is doing a job compressed air or nitrogen does better | "It dries the coil quicker" |

Learn the list as five behaviours, not as five clause numbers. In the exam you will be asked what a technician may not do, not where it is written.

## Charging a leaking system — the one people argue about

This is the prohibition that gets rationalised most often, so be clear on the reasoning.

A system that has lost its charge has lost it somewhere. Putting more refrigerant in does not repair anything: it buys days or weeks, and at the end of that period exactly as much refrigerant is in the atmosphere as if you had opened a valve and let it go, just more slowly and with the customer paying for the privilege twice.

The correct sequence when a system is found low:

1. Diagnose. A low charge is a symptom. Compare running pressures and temperatures against the manufacturer's data to confirm the charge really is low rather than the system being restricted, undersized or badly controlled !CITE[cop:2:9.5.2].
2. Leak inspection. Visual first — oil stains, dust patches at joints, corrosion at return bends, evidence of vibration and rubbing — then a sweep of every joint and component with a detector suited to that refrigerant !CITE[cop:2:9.5.3].
3. If a leak is found, **recover the remaining charge** and repair it. Repairs are not made on a pressurised system !CITE[cop:2:4.9.8].
4. Verify the repair by leak tightness testing with oxygen-free nitrogen before recharging.
5. Evacuate, then charge the weighed design charge, and record it in the logbook.

The step that gets skipped is step 3. Recovering the remaining charge before repair is not optional and is not a matter of how much is left — a system with 200 g in it still has 200 g that must not go to atmosphere.

Where a leak is suspected but not yet located, the system stays off refrigerant until it is found. "Suspected" is deliberately in the prohibition: you do not need proof to be barred from charging it.

## Nitrogen, not refrigerant

Leak testing is done with **oxygen-free nitrogen** of high purity !CITE[cop:2:4.9.3], optionally with a hydrogen or helium tracer. Two separate reasons, and the assessment likes both:

- **Environmental and legal.** A pressure test with refrigerant works precisely because refrigerant escapes at the leak. That is a discharge, and it is prohibited !CITE[cop:2:4.9].
- **Safety.** Standard industrial-grade nitrogen can carry enough oxygen with it to support combustion, and at the pressures and temperatures inside a system under test that is an explosion risk in the presence of oil. Oxygen-free nitrogen is specified for that reason as well as for its dryness — under 10 ppm moisture, so the test medium does not wet the system you are about to evacuate.

And nitrogen always goes in through a **regulator**. Cylinder pressure on a nitrogen bottle is tens of thousands of kilopascals; a system's maximum allowable pressure is a small fraction of that.

>! Never connect a nitrogen cylinder to a refrigeration system without a pressure regulator fitted and set. A full nitrogen cylinder holds enough pressure to burst a receiver, split a coil, or launch a component across a plant room. Pressurise in stages, check at each increment, and never exceed the maximum allowable pressure of the part with the lowest rating.

## Flushing, and what to do instead

After a serious burnout, the argument for flushing is real: there is acid and carbon in the pipe and it has to come out. The prohibition is on using **refrigerant** as the flushing medium, not on cleaning the pipework. Legitimate options are a proprietary flushing solvent used to its instructions with the residue captured and disposed of correctly, a nitrogen blow-through, replacement of the affected pipe, or a suction-line burnout drier followed by an oil-acid test programme and drier changes. The choice depends on the severity of the burnout and the manufacturer's guidance.

## Consequences

The penalties sit at three levels, and it is worth being able to name all three:

- **Legal.** The Act and Regulations carry substantial penalties for discharge offences, applied to the individual and to the business.
- **Licensing.** Your Refrigerant Handling Licence and the business's Refrigerant Trading Authorisation can both be suspended or cancelled. Without them you cannot legally buy refrigerant or work on the equipment.
- **Professional.** Charging a leaking system is documented in a logbook that the next technician, the auditor and the customer's insurer will all read.

### Written practice 1

**A customer's coolroom is 3 K above set point. Your gauges and superheat readings confirm a low charge, and there is oil staining on a flare joint at the evaporator. The customer asks you to "just gas it up" today and come back after the long weekend to fix it. State what the legislation and the Code require, and what you will actually do.**

>? **Model answer.** Charging a system with a known or suspected leak is prohibited. The oil staining plus the confirmed low charge is a known leak, so gassing it up is not something I can agree to regardless of the customer's operational pressure — the refrigerant added would end up in the atmosphere, which is the discharge the legislation prohibits.
>?
>? What I will do:
>?
>? 1. Complete the leak inspection with a detector to confirm the flare joint and to check nothing else is leaking as well.
>? 2. Recover the remaining charge into an approved recovery cylinder and record the mass — repairs are not made on a pressurised system.
>? 3. Remake or replace the flare joint.
>? 4. Leak tightness test with oxygen-free nitrogen and verify the repair before charging.
>? 5. Evacuate to the required vacuum and prove it with a standing vacuum test.
>? 6. Charge the weighed design charge, run and check the system, and record the refrigerant added in the logbook.
>?
>? I will explain to the customer that the leak repair is the only thing that actually restores the coolroom, and offer whatever interim measure is practical — hire refrigeration, moving stock, or scheduling the repair immediately.

### Written practice 2

**State two reasons why oxygen-free nitrogen, and not refrigerant, is used as the pressure medium for a leak tightness test.**

>? **Model answer.**
>?
>? **Reason 1 — it would be a prohibited discharge.** A pressure leak test works because the test gas escapes at the leak. Using refrigerant therefore means deliberately releasing it to atmosphere, which the legislation prohibits and which the Code names specifically as an example of prohibited conduct.
>?
>? **Reason 2 — safety and dryness.** Oxygen-free nitrogen is specified rather than standard industrial nitrogen because standard grade can carry enough oxygen to support combustion, and oxygen at high pressure in the presence of compressor oil is an explosion risk. Oxygen-free nitrogen is also very dry, under 10 ppm moisture, so the test does not introduce water into a system that is about to be evacuated and charged.
>?
>? Nitrogen must always be applied through a pressure regulator, in stages, and never above the maximum allowable pressure of the lowest-rated part.

### Written practice 3

**List the prohibited uses of refrigerant named in the legislation and the Code, and give a one-line reason for each.**

>? **Model answer.**
>?
>? 1. **Venting or discharging refrigerant to atmosphere** — every scheduled refrigerant released damages the ozone layer, contributes to global warming, or both.
>? 2. **Charging equipment with a known or suspected leak** — the refrigerant added is released to atmosphere on a delay, and the fault is hidden rather than repaired.
>? 3. **Flushing pipework with refrigerant** — the refrigerant is deliberately blown through and released at the far end.
>? 4. **Using refrigerant as the pressure medium for leak testing** — the test depends on the gas escaping at the leak, so it is a deliberate release; oxygen-free nitrogen is the required medium.
>? 5. **Using refrigerant to clean coils or blow out lines** — the refrigerant ends up in the atmosphere doing a job that compressed air or nitrogen does better.
>?
>? All of these attract penalties under the Act and Regulations and can cost the technician their handling licence and the business its trading authorisation.

## What to remember

- Five prohibitions: venting, charging a leaker, flushing with refrigerant, leak testing with refrigerant, cleaning with refrigerant.
- "Suspected" is enough. You do not need to have found the leak to be barred from charging.
- Recover before repair, every time, however little is left in the system.
- Oxygen-free nitrogen through a regulator, in stages, never above the lowest-rated part's PS.
- Consequences run at three levels: legal penalty, licence, and professional record.`,
  quiz: [
    {
      q: "A system is 40% low on charge and there is oil staining at a joint, but the leak has not been confirmed with a detector. May the system be charged?",
      options: [
        "Yes, provided the charge is recorded in the logbook",
        "Yes, provided the customer accepts responsibility in writing",
        "No — the prohibition covers a known or suspected leak, and the evidence already amounts to a suspicion",
        "Yes, but only up to 50% of the design charge",
      ],
      answer: 2,
      explain: "The word 'suspected' is in the prohibition deliberately. Low charge plus oil staining is a suspicion, and nobody's written acceptance can authorise conduct the legislation prohibits. Find it, recover, repair, verify with nitrogen, evacuate, then charge the weighed design charge.",
    },
    {
      q: "Standard industrial-grade nitrogen is not acceptable for a leak tightness test. Why?",
      options: [
        "It is not dry enough to be sold for refrigeration work",
        "It can carry enough oxygen to support combustion, which at high pressure in the presence of compressor oil is an explosion risk",
        "It contains argon, which reacts with refrigerant oils",
        "Its cylinder pressure is too low to reach test pressure",
      ],
      answer: 1,
      explain: "Oxygen-free nitrogen is specified for two reasons: it is very dry, under 10 ppm moisture, so it does not wet a system about to be evacuated; and it does not carry the oxygen that makes a high-pressure oil-bearing system an explosion hazard. Dryness alone would not be enough to rule standard grade out on safety.",
    },
    {
      q: "Which of these is a legitimate way to deal with contaminated pipework after a compressor burnout?",
      options: [
        "Blow refrigerant vapour through the pipe until it runs clean",
        "Fit a suction-line burnout drier and run an oil-acid test programme with drier changes, or replace the affected pipework",
        "Charge the system and let the ordinary filter-drier clean it up over time",
        "Flush the pipe with liquid refrigerant, capturing the vapour in a bag",
      ],
      answer: 1,
      explain: "The prohibition is on using refrigerant as the flushing medium, not on cleaning the pipe. Burnout driers with an acid-test programme, a proprietary solvent used to its instructions with the residue disposed of correctly, a nitrogen blow-through, or replacing the pipe are all legitimate. Recovering into a flexible bag is separately prohibited.",
    },
    {
      q: "What are the three levels of consequence for a discharge offence?",
      options: [
        "A warning, a fine, and a court appearance",
        "Legal penalty under the Act and Regulations, suspension or cancellation of handling licence and trading authorisation, and the professional record left in the logbook",
        "Loss of employment, loss of insurance, and loss of trade qualification",
        "An EPA notice, a WHS notice, and a customer complaint",
      ],
      answer: 1,
      explain: "The penalties under the Act apply to the individual and the business; the Australian Refrigeration Council can suspend or cancel the Refrigerant Handling Licence and the business's Refrigerant Trading Authorisation, without which refrigerant cannot legally be bought; and the logbook entry is read by the next technician, the auditor and the insurer.",
    },
  ],
},

/* ------------------------------------------------------------------ 5 */
{
  id: "recycle-reclaim-dispose",
  title: "Recycling, reclamation, disposal and trading authorisation",
  minutes: 11,
  simple:
    "Once refrigerant is out of a system it has to go somewhere legitimate. Cleaned up and put back in the same machine is recycling. Sent away to a factory that reprocesses it to a purity standard is reclamation. Burnt at a licensed plant because it is too far gone is disposal. And the business, not just you, needs a permit to hold and hand on refrigerant.",
  refs: REFS_ROUTES,
  content: `Four words get used loosely on site and precisely in the assessment. Getting them wrong costs marks and, in the field, costs a cylinder of refrigerant.

## The four terms

| Term | What it actually means | Where it happens | Purity outcome |
|---|---|---|---|
| Recovery | Removing refrigerant from equipment in whatever condition it is in, and storing it in a container | On site, by you | Unchanged — whatever came out |
| Recycling | Reducing contamination by basic means: oil separation and one or more passes through filter-driers | On site or in a workshop, with recycling equipment | Improved, but not certified |
| Reclamation | Reprocessing to meet the AHRI 700 purity specification, with chemical analysis to prove it | A specialist licensed facility | Certified equivalent to new |
| Disposal | Destruction, normally by high-temperature incineration or plasma-arc, at a licensed facility | A licensed destruction facility | None — the refrigerant no longer exists |

The single most useful distinction: **recycling improves refrigerant, reclamation certifies it.** Only reclaimed refrigerant carries a laboratory test result behind it, which is why recovered refrigerant should be reclaimed before it is put into a *different* system !CITE[cop:2:12.3].

## Choosing the route

- **Recycle** where the refrigerant is going back into the same system, or the same owner's equipment, and its condition is known and reasonable. Typical case: a coolroom pack whose condenser fan motor is being replaced. The charge comes out, sits in a cylinder for an afternoon, and goes back in.
- **Reclaim** where the refrigerant is destined for a different system, where its history is unknown, or where the quantity makes it worth the freight. Reclamation is the route that lets refrigerant genuinely re-enter the supply chain.
- **Dispose** where the refrigerant is mixed, badly contaminated by a burnout, of a type that is being phased down and is not worth reprocessing, or simply cannot be identified. Unwanted scheduled refrigerant must never be discharged: it goes back to a supplier or a collection agent, or to an appropriately licensed facility !CITE[cop:2:12.4].

In Australia the collection and destruction end of this is organised as a national product stewardship scheme funded by a levy on imported refrigerant. Unwanted refrigerant is handed in through participating wholesalers, a small rebate is paid on the quantity, and the refrigerant goes to high-temperature destruction. The practical consequence for you is that there is always a legitimate route — cost is never a defence for venting.

## Disposable containers

Small non-refillable containers are still around, and the rules on them are absolute !CITE[cop:2:12.5]. Residual refrigerant must be recovered out of them. They must never be refilled, never used as a temporary receiver during a recovery, and never repaired or modified. Once empty and de-valved as the supplier instructs, they go to a metal recycling centre.

## Trading authorisation — the permit you probably do not hold

This is where candidates come unstuck, because the two permits get confused.

| Permit | Held by | What it covers |
|---|---|---|
| Refrigerant Handling Licence (commonly called ARCtick) | The individual technician | Handling scheduled refrigerant: recovering, charging, working on components with a risk of emission. Comes in full and restricted forms |
| Refrigerant Trading Authorisation (RTA) | The business | Acquiring, possessing, storing, selling and disposing of scheduled refrigerant |

Your licence lets you *handle* refrigerant. It does not let you *hold* it. The cylinder in the back of your ute is held under your employer's trading authorisation, not under the card in your wallet. The obligations that come with that authorisation are the business's, and they fall on you because you are the one doing the work:

- Refrigerant may only be acquired from, and supplied to, an appropriately authorised person or business. You cannot buy a cylinder from an unauthorised seller and you cannot hand recovered refrigerant to one.
- **Accepting recovered refrigerant from another party is trading.** If a customer, a builder or another trade offers you cylinders of recovered refrigerant to take away, that transaction sits under the trading authorisation. It needs the business's agreement, an honest declaration of the contents, and a record.
- Records must be kept of refrigerant acquired, held and disposed of — type, quantity, date and where it went. Those records are what an audit examines.
- A cylinder handed in must be honestly labelled. A wrongly declared cylinder contaminates a wholesaler's collection stock and is traceable back to whoever handed it in.

Both permit types are administered under the Ozone Protection and Synthetic Greenhouse Gas Management Regulations; check the current requirements, because scheme details change.

## Records that follow the refrigerant

Three separate records exist and the assessment can ask about any of them:

1. **The equipment logbook** — what was recovered from and charged into that system, when, and by whom.
2. **The cylinder label and contents record** — what is in each cylinder and whether it is virgin, recovered or mixed.
3. **The business's trading records** — what refrigerant the business acquired, holds and disposed of.

### Written practice 1

**Explain the difference between recycled and reclaimed refrigerant, and state which one may be charged into a system other than the one it came out of.**

>? **Model answer.** **Recycled** refrigerant has been cleaned up by basic means — separating out the oil and passing it through filter-driers, either on site or in a workshop. It is better than it was, but nothing has measured it, so its purity is not known.
>?
>? **Reclaimed** refrigerant has been sent to a specialist licensed facility and reprocessed until it meets the AHRI 700 purity specification, with chemical analysis to prove it. It is certified as equivalent to new refrigerant.
>?
>? Recovered refrigerant should be **reclaimed** before it is charged into a different system. Recycled refrigerant is appropriate for returning to the same system, or to other equipment belonging to the same owner, where its history and condition are known — for example, taking a charge out to change a condenser fan motor and putting it straight back. Putting refrigerant of unproven purity into someone else's plant risks carrying acid, moisture or a foreign refrigerant into it.

### Written practice 2

**A builder on a demolition site offers you four cylinders of refrigerant recovered from air conditioners by an unnamed contractor, and asks you to dispose of them. Explain what obligations apply before you can accept them.**

>? **Model answer.** Accepting refrigerant from another party is trading, not just handling. My personal Refrigerant Handling Licence does not cover it — it sits under my employer's Refrigerant Trading Authorisation, so the business has to agree to the transaction and it has to be recorded.
>?
>? Before accepting anything I would need to establish:
>?
>? - **Who recovered it and whether they were authorised.** Refrigerant may only be acquired from an appropriately authorised person, so an unnamed contractor is a problem in itself.
>? - **What is actually in each cylinder.** The contents must be declared honestly, and I would identify the refrigerant rather than trust a label, because mixed or unidentified refrigerant changes what can be done with it and how it must be handled.
>? - **That the cylinders themselves are legitimate** — approved, refillable, in test date, correctly rated and not overfilled. Cylinders that are out of test or overfilled cannot lawfully be transported.
>?
>? If those checks pass, the cylinders can be accepted, recorded in the business's trading records, and handed in to a wholesaler or collection agent for reclamation or licensed destruction. If they do not pass — unknown provenance, undeclared contents, out-of-test cylinders — I decline and refer the builder to a licensed contractor, because I would be taking on the compliance liability for someone else's work.

### Written practice 3

**Name the three routes that unwanted recovered refrigerant may lawfully take in Australia, and state the one thing it may never do.**

>? **Model answer.**
>?
>? 1. **Recycled** — cleaned by oil separation and filter-drier passes and returned to the same system or the same owner's equipment.
>? 2. **Reclaimed** — sent to a licensed specialist facility and reprocessed to the AHRI 700 purity specification so it can re-enter general use.
>? 3. **Disposed of** — returned to a supplier or collection agent and destroyed at an appropriately licensed facility, typically by high-temperature incineration or plasma arc.
>?
>? What it may never do is be **discharged to atmosphere**. There is a national collection scheme funded by a levy on imported refrigerant, so there is always a legitimate route and cost is not a defence. Refrigerant that is mixed, badly contaminated by a burnout, or that cannot be identified goes down the disposal route rather than being vented.

## What to remember

- Recovery takes it out. Recycling cleans it. Reclamation certifies it to AHRI 700. Disposal destroys it.
- Reclaim before putting recovered refrigerant into a different system.
- Disposable containers: recover the residual, never refill, never use as a receiver, scrap the empty.
- The licence is yours and covers handling; the trading authorisation is the business's and covers holding, buying, selling and disposing.
- Accepting someone else's recovered refrigerant is a trading transaction with records attached.`,
  quiz: [
    {
      q: "What distinguishes reclaimed refrigerant from recycled refrigerant?",
      options: [
        "Reclaimed refrigerant has been passed through a filter-drier and recycled refrigerant has not",
        "Reclaimed refrigerant has been reprocessed at a licensed facility to meet the AHRI 700 purity specification, verified by chemical analysis",
        "Recycled refrigerant is destroyed and reclaimed refrigerant is reused",
        "Reclaimed refrigerant may only be used in the system it came from",
      ],
      answer: 1,
      explain: "Recycling improves refrigerant by basic means but nothing measures the result; reclamation certifies it against a purity specification with a laboratory analysis behind it. That certification is exactly why reclaimed refrigerant can go into a different system and recycled refrigerant should not.",
    },
    {
      q: "Which permit allows a business to acquire, store and dispose of scheduled refrigerant?",
      options: [
        "The individual technician's Refrigerant Handling Licence",
        "The business's Refrigerant Trading Authorisation",
        "A dangerous goods storage licence issued by the state regulator",
        "No permit is required if the refrigerant is only being held temporarily",
      ],
      answer: 1,
      explain: "The two permits do different jobs. The handling licence is personal and covers working with refrigerant; the trading authorisation is held by the business and covers acquiring, possessing, selling and disposing of it. The cylinder in your ute is held under your employer's authorisation, not your card.",
    },
    {
      q: "A charge is recovered so a condenser fan motor can be replaced on the same coolroom pack, then put straight back. What has happened to that refrigerant?",
      options: [
        "It has been reclaimed",
        "It has been recovered and, at most, recycled — it goes back into the same system, whose condition and history are known",
        "It has been disposed of and replaced",
        "Nothing — refrigerant that never leaves the site is not covered by the Code",
      ],
      answer: 1,
      explain: "It was recovered, and if it was passed through a drier or had oil separated out it was also recycled. Reclamation requires a licensed facility and an AHRI 700 analysis, which clearly has not happened. Returning it to the same system is the case where recycled refrigerant is appropriate.",
    },
    {
      q: "A small non-refillable refrigerant container is empty on the truck. What must be done with it?",
      options: [
        "It may be used as a temporary receiver during a small recovery",
        "It may be refilled with the same refrigerant only",
        "Any residual refrigerant must be recovered, and the empty container goes to a metal recycling centre — it must never be refilled, reused as a receiver, repaired or modified",
        "It may be vented, since the residual quantity is negligible",
      ],
      answer: 2,
      explain: "Disposable containers are single-trip pressure vessels with no periodic inspection behind them, so refilling or reusing one as a receiver is prohibited outright. The residual is still refrigerant and must be recovered — 'negligible quantity' is not an exemption from the discharge prohibition.",
    },
  ],
},

/* ------------------------------------------------------------------ 6 */
{
  id: "evacuation-methods",
  title: "The two evacuation methods in the Code of Practice",
  minutes: 14,
  simple:
    "After the gas is out you have to pull everything else out too — the air and, more importantly, the water. There are two approved ways: pull one very deep vacuum and hold it, or pull three shallower ones with dry nitrogen blown in between to sweep the moisture out. Both finish at the same deep vacuum and both are proved by a standing test.",
  refs: REFS_EVAC,
  content: `Evacuation is the step that decides whether the system you just repaired lasts ten years or eighteen months. The Code recognises exactly **two** methods — the **deep evacuation method** and the **triple evacuation method** — and a question asking you to name them and give the procedure for each is a standard piece of the assessment !CITE[cop:2:5.4]. This is exam revision; **Module 11 · The Refrigerant Handling Code of Practice** carries the clause detail, and the current edition governs.

## What you are removing, and why it matters

**Air (non-condensable gas).** Air that enters with a repair does not condense in the condenser. It collects in the top of the condenser and the receiver, occupying volume that should be condensing surface, and it adds its own partial pressure on top of the refrigerant's. The result is high head pressure, high discharge temperature, reduced capacity and increased power draw — and, in the long run, oil breakdown from the discharge heat.

!SIM[See what non-condensables do to the gauges](fault=nonCondensables)

**Moisture.** Water is the worse of the two. It freezes at the metering device and blocks it intermittently — the classic fault that clears when you warm the valve and returns twenty minutes later. It reacts with the refrigerant and the lubricant to form acids, which attack the motor windings of a hermetic or semi-hermetic compressor and eventually cause a burnout. In a polyolester system, which is what a modern HFC system uses, the oil is hygroscopic and holds moisture tenaciously, so the drying job is harder than it looks and the system must not be left open to the air any longer than necessary.

## The equipment the Code requires

Getting this wrong is why so many evacuations "will not pull down".

- **A two-stage rotary-vane vacuum pump** with clean oil. Vacuum pump oil absorbs the moisture you are pulling out and its condition sets the ultimate vacuum the pump can reach. Change it before a big job and again during a wet one.
- **Dedicated evacuation hoses** — large diameter, as short as practical. Not the service manifold hoses !CITE[cop:2:5.3]. A standard 1/4 inch manifold hose is a serious restriction at deep vacuum, where gas flow is molecular rather than viscous and conductance falls away with the fourth power of the diameter. This is the single biggest reason a system takes six hours to reach a vacuum it should reach in one.
- **A dedicated vacuum gauge** — thermistor or Pirani type, reading in microns !CITE[cop:2:5.4]. A compound manifold gauge cannot resolve the region that matters: the last needle-width on the gauge covers everything from a useless 25,000 microns to a perfect 50 microns.
- **Core removal tools**, so the Schrader cores come out and the full port is available.
- **Connection to both sides**, high and low, so you are not evacuating the whole system through the metering device orifice.

The gauge goes on the **system**, on its own port, as far from the pump as practical. A micron gauge teed in next to the pump reads the pump's inlet and will show you a beautiful number while the system sits at ten times that pressure behind a restriction.

## Deep evacuation method

The default for most work, and the faster of the two on a clean, dry, accessible system !CITE[cop:2:5.4.1].

1. Recover the refrigerant and **fully depressurise** the system. A vacuum pump must never be started against a system still under pressure.
2. Remove the Schrader cores with core removal tools.
3. Connect short, large-bore dedicated evacuation hoses to both the high and low sides.
4. Fit the micron gauge to a separate system port, away from the pump.
5. Open every valve, energise every solenoid and open every service valve so the whole system is being evacuated, including sections that would otherwise be isolated.
6. Check the vacuum pump oil, and start the pump.
7. Pull down to at least **500 microns (67 Pa absolute)**.
8. **Isolate the pump at a valve** — do not simply switch it off, or pump oil can be drawn back into the system.
9. Stand for **60 minutes**. The system must stay below **600 microns (80 Pa)**.
10. A rise of **100 microns or more** means a leak or remaining moisture. Find it, fix it, and do the evacuation again.

## Triple evacuation method

Suits all systems, and is specifically the method for large, complex or contaminated ones !CITE[cop:2:5.4.2].

1. Prepare exactly as for the deep method — recover, depressurise, cores out, both sides, micron gauge on the system.
2. Evacuate to at least **4,500 microns (600 Pa)**.
3. Break the vacuum with **oxygen-free nitrogen** and purge, bringing the system up to a small positive pressure.
4. Evacuate a second time to at least **4,500 microns (600 Pa)**.
5. Break with oxygen-free nitrogen and purge a second time.
6. Evacuate a third time, now down to **500 microns (67 Pa)**.
7. Isolate the pump and stand **60 minutes** below **600 microns (80 Pa)**, exactly as for the deep method.

### Why the nitrogen breaks work

Two mechanisms, and the assessment likes to hear both.

**Dilution.** Each pump-down removes the great majority of what is in the system, and each nitrogen break refills it with dry gas. The contaminant that survives the first pull is diluted by the nitrogen, then the majority of *that* is pulled out, and so on. Three cycles reduce the residual air fraction to a tiny number that a single pull-down through a restricted system would struggle to match.

**Sweeping and the ice problem.** Moisture at deep vacuum is not a passive passenger. As water evaporates it cools itself, and at 500 microns the boiling point of water is around −24 degrees Celsius. In a cold system, free water can freeze, and ice sublimes very slowly indeed — so the pump can sit there for hours making no progress while a lump of ice quietly refuses to leave. Breaking the vacuum with dry nitrogen raises the pressure and temperature back up, lets the ice melt and the water evaporate normally, and gives the dry nitrogen a chance to pick up water vapour and carry it out on the next pull-down.

Compare the two target pressures against the vapour pressure of water and the design becomes obvious:

| System pressure | Water boils at about |
|---|---|
| 4,500 microns (600 Pa) | 0 degrees Celsius |
| 500 microns (67 Pa) | −24 degrees Celsius |

At 4,500 microns you are barely below the point where water boils at room temperature and ice is a real risk. At 500 microns any liquid water anywhere in the system is boiling hard at any normal ambient. That is the whole reason 500 microns is the target and not, say, 2,000.

## Converting the units

The relationship worth memorising is **1,000 microns = 1 torr = 133.3 Pa**, and atmospheric pressure is about 760,000 microns or 101.3 kPa.

- 500 microns x 0.1333 Pa/micron = **66.7 Pa**, rounded to 67 Pa
- 600 microns x 0.1333 Pa/micron = **80.0 Pa**
- 4,500 microns x 0.1333 Pa/micron = **600 Pa**

If a question gives you pascals and you think in microns, or the reverse, that one conversion factor gets you there.

## Choosing between them

| Situation | Method |
|---|---|
| Small to medium system, clean, both sides accessible, dry conditions | Deep evacuation |
| Large or complex system, long pipe runs, multiple circuits | Triple evacuation |
| After a compressor burnout, or any system known to be contaminated | Triple evacuation |
| System that has stood open to the air, or been worked on in the rain | Triple evacuation |
| A deep evacuation that will not pull below 500 microns despite a proven-tight rig | Triple evacuation |

Triple evacuation is never wrong. It costs time and a nitrogen cylinder, and it buys certainty on exactly the jobs where a failed evacuation is most expensive to discover.

### Written practice 1

**Name the two evacuation methods in the Refrigerant Handling Code of Practice and give the full procedure for the deep evacuation method, including the vacuum levels and the standing test.**

>? **Model answer.** The two methods are the **deep evacuation method** and the **triple evacuation method**.
>?
>? **Deep evacuation procedure:**
>?
>? 1. Recover the refrigerant charge and fully depressurise the system — the vacuum pump must never be started on a pressurised system.
>? 2. Remove the Schrader cores using core removal tools so the full port area is available.
>? 3. Connect dedicated evacuation hoses — large diameter, as short as practical, not the service manifold hoses — to both the high side and the low side.
>? 4. Fit a dedicated thermistor or Pirani micron gauge to a separate port on the system, away from the pump.
>? 5. Open all service valves and energise all solenoid valves so the whole system is evacuated with nothing isolated.
>? 6. Check the vacuum pump oil is clean, then start a two-stage vacuum pump.
>? 7. Evacuate to at least **500 microns (67 Pa absolute)**.
>? 8. **Isolate the pump at a valve**, then stop it — switching off without isolating can draw pump oil back into the system.
>? 9. Stand for **60 minutes**; the system must remain below **600 microns (80 Pa)**.
>? 10. A rise of **100 microns or more** indicates a leak or remaining moisture. Locate and correct the cause, then repeat the evacuation.
>?
>? Only when the standing test passes may the system be charged.

### Written practice 2

**Give the procedure for the triple evacuation method, and state when it should be chosen in preference to the deep method.**

>? **Model answer.** Prepare as for the deep method: recover and fully depressurise, remove the cores, fit short large-bore dedicated hoses to both sides, and fit the micron gauge on the system away from the pump.
>?
>? 1. Evacuate to at least **4,500 microns (600 Pa)**.
>? 2. Break the vacuum with **oxygen-free nitrogen** and purge, bringing the system to a small positive pressure.
>? 3. Evacuate a second time to at least **4,500 microns (600 Pa)**.
>? 4. Break and purge with oxygen-free nitrogen a second time.
>? 5. Evacuate a third time to at least **500 microns (67 Pa)**.
>? 6. Isolate the pump and stand for **60 minutes**, holding below **600 microns (80 Pa)**.
>?
>? **When to choose it:** it suits all systems, and is specifically preferred for large, complex or contaminated ones — long pipe runs, multiple circuits, after a compressor burnout, after a system has stood open to the atmosphere, or whenever a deep evacuation will not pull down despite a rig proved tight. It is never the wrong choice; it simply costs time and nitrogen.

### Written practice 3

**Explain why breaking the vacuum with oxygen-free nitrogen removes moisture more effectively than continuing to run the pump.**

>? **Model answer.** Two things are happening.
>?
>? **Dilution.** Each pump-down removes most of what is in the system and each nitrogen break refills it with dry gas. Whatever contaminant survived the first pull is diluted by the nitrogen, then most of that is removed on the next pull, and so on. Three cycles get the residual down to a level a single pull-down through a restricted system would struggle to reach.
>?
>? **The ice problem.** Evaporating water cools itself, and at 500 microns water boils at around −24 degrees Celsius. Free water in a cold system can therefore freeze, and ice sublimes extremely slowly — the pump then runs for hours achieving nothing. Breaking the vacuum with dry nitrogen raises the pressure and lets the temperature recover, so the ice melts and the water can evaporate normally. The dry nitrogen also picks up water vapour and carries it out on the following pull-down.
>?
>? Running the pump longer does neither of those things. It cannot dilute, and it cannot warm a system it is actively refrigerating by evaporation.

## What to remember

- Two methods only: **deep** and **triple**. Both finish at 500 microns and both are proved by a 60-minute standing test below 600 microns.
- Triple uses 4,500 microns twice with an oxygen-free nitrogen break each time, then 500 microns.
- A rise of 100 microns or more in the standing test is a fail: leak or moisture.
- Dedicated hoses, dedicated micron gauge on the system, cores out, both sides, clean pump oil.
- 1,000 microns = 133.3 Pa. 500 microns = 67 Pa. 4,500 microns = 600 Pa.
- Recover and fully depressurise first, always.`,
  quiz: [
    {
      q: "In the triple evacuation method, what vacuum is reached on the first two pull-downs, and what is used to break each one?",
      options: [
        "500 microns, broken with refrigerant vapour",
        "4,500 microns (600 Pa), broken and purged with oxygen-free nitrogen",
        "1,000 microns, broken with dry compressed air",
        "600 microns, broken with the system's own residual charge",
      ],
      answer: 1,
      explain: "The first two evacuations go to at least 4,500 microns (600 Pa) and each is broken and purged with oxygen-free nitrogen; only the third goes to 500 microns. Breaking with refrigerant would be a prohibited discharge, and compressed air carries the moisture you are trying to remove.",
    },
    {
      q: "Why must the micron gauge be fitted to the system on its own port rather than teed in near the vacuum pump?",
      options: [
        "Because vacuum pump vibration damages the gauge sensor",
        "Because a gauge at the pump reads the pump inlet, and will show a good vacuum while the system sits at a much higher pressure behind the restriction of the hoses",
        "Because the gauge would draw pump oil into its sensor",
        "Because the Code requires the gauge to be within one metre of the compressor",
      ],
      answer: 1,
      explain: "At deep vacuum the hoses are a severe restriction — conductance falls away with the fourth power of the diameter — so there can be a large pressure difference between the pump inlet and the system. A gauge at the pump reports the pump's success, not the system's condition, which is exactly the wrong question.",
    },
    {
      q: "At 500 microns (67 Pa), water boils at roughly −24 degrees Celsius. What does that tell you about why 500 microns is the target?",
      options: [
        "That the system must be cooled below −24 degrees Celsius before evacuating",
        "That at any normal ambient temperature, liquid water anywhere in the system is boiling hard and will be pumped out as vapour",
        "That refrigerant will freeze at that pressure",
        "That the pump must be a two-stage type to avoid freezing",
      ],
      answer: 1,
      explain: "The point of a deep vacuum is to put the system far below the vapour pressure of water at ambient temperature, so water changes to vapour and is removed. At 4,500 microns water boils around 0 degrees Celsius, which is barely enough and risks ice forming; at 500 microns the margin is comfortable.",
    },
    {
      q: "A standing vacuum test shows a rise from 480 microns to 640 microns over 60 minutes. What does the Code's criterion say, and what is the likely cause?",
      options: [
        "Pass — it is still close to 600 microns",
        "Fail — a rise of 100 microns or more indicates a leak or remaining moisture, and it has also broken the 600 micron limit",
        "Pass — only a rise above 1,000 microns is a failure",
        "Inconclusive — the test must be run for 24 hours to be valid",
      ],
      answer: 1,
      explain: "The rise is 160 microns, well over the 100 micron criterion, and the final reading of 640 is above the 600 micron limit as well — a fail on both counts. Find the cause, correct it, and evacuate again. A 24-hour hold is the leak tightness test on a new installation, a different test entirely.",
    },
  ],
},

/* ------------------------------------------------------------------ 7 */
{
  id: "standing-vacuum-test",
  title: "The standing vacuum test and reading what it tells you",
  minutes: 11,
  simple:
    "After pulling a vacuum you shut the valve, walk away for an hour and watch the reading. If it stays put, the system is dry and tight. If it creeps up and then stops, there is still water inside. If it keeps climbing and never stops, air is getting in through a leak.",
  refs: REFS_DECAY,
  content: `Reaching 500 microns proves the pump can pull the system down. It does not prove the system is dry, and it does not prove it is tight — a system with a leak will reach 500 microns quite happily while the pump is running, because the pump is removing air faster than the leak lets it in. The **standing vacuum test**, also called the decay or blank-off test, is what turns a reading into evidence.

## The procedure

1. Evacuate to at least 500 microns (67 Pa), by either the deep or triple method.
2. **Isolate the pump with a valve**, then switch it off. The order matters: switching off first lets atmospheric pressure push pump oil back through the hose into the system.
3. Leave the micron gauge connected to the system and start timing.
4. Stand for **60 minutes**.
5. The system passes if it stays below **600 microns (80 Pa)** and rises by less than **100 microns**.
6. Record the start reading, the finish reading and the elapsed time. That record is part of the handover documentation.

## Reading the curve

!FIG[vacuum-decay]

The shape of the rise, not just its size, tells you the cause. This is the diagnostic skill the figure is teaching.

| What the gauge does | What it means | What to do |
|---|---|---|
| Flat, stays under 600 microns for the hour | Dry and tight | Charge it |
| Rises, then flattens off at some level below atmospheric | Moisture still boiling off. It levels because water vapour pressure is limited by the temperature of the water | Evacuate again, warm the system, and consider switching to the triple method |
| Rises steadily and does not level off, heading for atmospheric | A leak. Air is being drawn in from outside, and there is an unlimited supply of it | Find the leak. Re-test with nitrogen if you have to |
| Jumps up almost instantly | A large leak, or an open valve, or a hose fitting that has not seated | Check the rig first, then the system |

The distinction between the second and third rows is the whole point of standing for a full hour rather than five minutes. Moisture and a small leak look identical in the first few minutes. Only the flattening tells them apart, and flattening takes time to become visible.

## Test the rig before you blame the system

The most common "system leak" found on a standing vacuum test is the test equipment. Before you start pulling apart a system that was tight yesterday:

1. Blank off the ends of your evacuation hoses with the appropriate caps or a blanking plug.
2. Pull the hoses and manifold down on their own.
3. Isolate and stand them for fifteen minutes.

If the rig will not hold, the problem is a perished hose gasket, a tired manifold valve stem, a core depressor seal or a cracked hose ferrule — all cheap, all common, and all far quicker to find this way than by chasing them around a plant room.

## Things that make a vacuum test fail for no good reason

- **Cold ambient.** Water evaporates slowly when it is cold. A system in a cool room in winter can take several times as long to dry as the same system in summer. Warm the compressor body and any suspected low point with heat blankets or lamps — never a flame.
- **Dirty pump oil.** Vacuum pump oil absorbs the moisture it removes. Once it is loaded, the pump's ultimate vacuum degrades and it may not reach 500 microns at all. Change the oil before a big job and again mid-job on a wet system, while the pump is still warm.
- **Restricted hoses.** Long, thin service hoses with the cores still in can make an hour's job into a day's, and can leave the system well above the pressure your gauge is reporting if the gauge is in the wrong place.
- **Trapped sections.** A liquid-line solenoid that is not energised, a service valve that is back-seated, a closed ball valve on a branch — each isolates part of the system, which then leaks its own contents back into the evacuated part after you isolate the pump and looks exactly like a leak.
- **Oil outgassing.** A polyolester oil that has been exposed to air holds moisture and releases it slowly. This shows as a slow rise that eventually levels, and it is a real reason to use the triple method on a system that has stood open.

>! Do not use a refrigerant recovery unit as a vacuum pump, and do not run a vacuum pump on a system that still holds pressure. Neither machine is built for the other job, and pumping a pressurised system through a vacuum pump can blow the pump's shaft seal out and spray hot oil.

## A worked judgement

A supermarket cabinet circuit is evacuated after a valve change. The gauge reaches 420 microns after two hours. The pump is isolated and the readings are:

| Elapsed time | Reading |
|---|---|
| 0 min | 420 microns |
| 10 min | 610 microns |
| 20 min | 720 microns |
| 40 min | 790 microns |
| 60 min | 810 microns |

Rise over the hour = 810 − 420 = **390 microns**, which is a fail against the 100 micron criterion, and the reading is above 600 microns from ten minutes onward.

But look at the shape. The first ten minutes gained 190 microns; the last twenty gained only 20. It is flattening, and it is flattening well below atmospheric. That is **moisture**, not a leak. A leak would still be climbing at the same rate at 60 minutes as it was at 10.

The right response is to evacuate again — this time with the triple method and some gentle heat on the compressor and the low points — not to spend the afternoon looking for a leak that is not there. Then repeat the standing test.

### Written practice 1

**Describe the standing vacuum test, including how the pump is isolated, how long the test runs and the acceptance criterion.**

>? **Model answer.** The standing (decay) test proves the system is both dry and tight after evacuation, which a running pump cannot prove.
>?
>? After evacuating to at least 500 microns (67 Pa), the pump is **isolated at a valve and then switched off** — in that order, because switching off an unisolated pump lets atmospheric pressure push pump oil back into the system. The micron gauge stays connected to the system.
>?
>? The system then stands for **60 minutes**. It passes if it remains below **600 microns (80 Pa)** and rises by less than **100 microns** over the hour. A rise of 100 microns or more means either a leak or remaining moisture, and the system must not be charged until the cause is found and corrected and the evacuation repeated.
>?
>? The start reading, finish reading and elapsed time are recorded as part of the handover documentation.

### Written practice 2

**Two systems both fail a standing vacuum test. On system A the reading climbs quickly at first, then almost stops rising at 900 microns. On system B the reading climbs steadily throughout the hour and is still climbing at the same rate at 60 minutes. Explain what each result means and what you would do about it.**

>? **Model answer.** **System A — moisture.** Water in the system is still boiling off. The rise slows and levels because the pressure water vapour can produce is limited by the temperature of the water, so it approaches a ceiling well below atmospheric rather than continuing upward. The action is to evacuate again, this time using the triple evacuation method with oxygen-free nitrogen breaks, and to apply gentle heat to the compressor body and any low points with a blanket or lamp — never a flame — to speed the evaporation. Change the vacuum pump oil, since it will have absorbed water. Then repeat the standing test.
>?
>? **System B — a leak.** Air is being drawn in from outside, and the atmosphere is an unlimited supply, so the rise does not level off; left long enough the system would reach atmospheric pressure. The action is to find the leak. First blank off and vacuum-test the hoses and manifold on their own, because the test rig is the commonest culprit. If the rig holds, pressurise the system with oxygen-free nitrogen and leak test properly, repair what is found, verify the repair, then evacuate and re-test.
>?
>? Both fail the same acceptance criterion, but the shape of the curve separates them, which is why the test runs a full hour rather than a few minutes.

### Written practice 3

**Why must a vacuum pump be isolated at a valve before it is switched off, and why must a system be fully depressurised before a vacuum pump is started on it?**

>? **Model answer.** **Isolating before switching off:** a stopped vacuum pump is open to atmosphere on its exhaust side while the system it is connected to is at deep vacuum. That pressure difference pushes air, and pump oil, backwards through the hose into the system. The system you have just spent hours drying is then contaminated with oil and with wet air, and the standing test result is meaningless. Closing a valve first breaks that path.
>?
>? **Depressurising first:** a vacuum pump is designed to move very small quantities of gas at very low pressure. Feeding system pressure into it forces oil past the shaft seal and out of the exhaust, can blow the seal out entirely, and sprays hot oil. It also means refrigerant is being discharged through the pump exhaust to atmosphere, which is a prohibited discharge. The charge must be recovered and the system fully depressurised before the pump is connected and started.

## On the job

- Isolate at a valve, then stop the pump. Never the other way around.
- Sixty minutes, under 600 microns, less than a 100 micron rise.
- Rises and levels = moisture. Rises and keeps rising = leak. Learn the two shapes.
- Blank off and test your own hoses before you accuse the system.
- Fresh pump oil is the cheapest performance upgrade in the van.
- Warm the system to speed drying — heat blanket or lamp, never a flame.`,
  quiz: [
    {
      q: "During a standing vacuum test the reading climbs from 450 to 880 microns in the first fifteen minutes, then only reaches 940 microns by the end of the hour. What does this indicate?",
      options: [
        "A leak, because the reading rose above 600 microns",
        "Moisture still boiling off, because the rise is levelling off well below atmospheric pressure",
        "A faulty micron gauge",
        "A pass, because the last 45 minutes rose by less than 100 microns",
      ],
      answer: 1,
      explain: "The levelling-off is the giveaway: water vapour pressure is limited by the temperature of the water, so a moisture curve approaches a ceiling. A leak has the atmosphere behind it and keeps climbing at a steady rate. It is still a fail, but the correct response is a triple evacuation with heat, not a leak hunt.",
    },
    {
      q: "Why is the vacuum pump isolated at a valve before it is switched off?",
      options: [
        "To stop the pump motor from running backwards",
        "Because a stopped pump is open to atmosphere on its exhaust, so the pressure difference pushes air and pump oil back into the evacuated system",
        "To allow the micron gauge to stabilise",
        "Because the Code requires the pump to be isolated for the whole evacuation",
      ],
      answer: 1,
      explain: "The system is at deep vacuum and the stopped pump is effectively vented to atmosphere. Without a closed valve between them, air and pump oil migrate backwards into the system, undoing hours of drying and making the standing test meaningless.",
    },
    {
      q: "A system that was tight last week fails a standing vacuum test. What should be checked first?",
      options: [
        "The compressor terminal gasket",
        "The test rig — blank off the hoses and manifold and vacuum-test them on their own",
        "The evaporator return bends",
        "The receiver relief valve",
      ],
      answer: 1,
      explain: "Hose gaskets, manifold valve stems, core depressor seals and cracked ferrules fail constantly and are the commonest cause of a mystery vacuum leak. Fifteen minutes proving the rig can save a day of chasing a leak that is in your own hand.",
    },
    {
      q: "Why does dirty vacuum pump oil stop a system reaching 500 microns?",
      options: [
        "It increases friction and slows the pump motor",
        "It has absorbed the moisture the pump removed, and that moisture re-evaporates inside the pump, limiting the ultimate vacuum it can reach",
        "It blocks the pump inlet filter",
        "It changes the pump's displacement",
      ],
      answer: 1,
      explain: "A rotary-vane pump seals on its oil. Once that oil is loaded with water, the water flashes off inside the pump and sets a floor on the vacuum achievable, no matter how long it runs. Change the oil while the pump is warm, before a big job and again partway through a wet one.",
    },
  ],
},

/* ------------------------------------------------------------------ 8 */
{
  id: "hydrocarbon-refrigerants",
  title: "Hydrocarbon refrigerants: disposal, ignition sources and ventilation",
  minutes: 13,
  simple:
    "Hydrocarbon refrigerants are basically LPG doing a fridge's job. They do almost no harm to the atmosphere, so the rules about not letting them out are different — but they burn, and they sink to the floor and pool there. The whole safety effort moves from protecting the environment to keeping sparks and flames away.",
  refs: REFS_HC,
  content: `Hydrocarbon refrigerants — R290 propane, R600a isobutane, R1270 propylene and the HC blends — behave like good refrigerants and like a serious fire hazard at the same time. Everything you learned about handling a fluorocarbon has to be re-examined, and the assessment asks specifically about **the preferred disposal methods for hydrocarbons** and about the precautions that go with handling them.

## Why hydrocarbons are treated differently

| Property | Typical fluorocarbon (R404A, R134a) | Hydrocarbon (R290, R600a) |
|---|---|---|
| Safety class (AS/NZS ISO 817) | A1 — low toxicity, no flame propagation | A3 — low toxicity, higher flammability |
| Ozone depletion potential | Zero for HFCs, above zero for HCFCs | Zero |
| Global warming potential | Hundreds to thousands | Around 3 |
| Scheduled substance under the Australian legislation | Yes | No |
| Controlling hazard | Environmental release | Fire and explosion |
| Vapour density relative to air | Heavier than air | Heavier than air |

The key line is the fifth one. A fluorocarbon is a scheduled substance, so releasing it is prohibited by law and the whole recovery, recycling and reclamation system exists to stop that happening. A hydrocarbon is not scheduled — its ozone depletion potential is zero and its global warming potential is around 3, so the environmental case for mandatory recovery is not there in the same way.

That does **not** make hydrocarbons casual. It moves the risk. The controlling hazard is now flammability, and work health and safety law, AS/NZS 5149, the equipment manufacturer's instructions and the Safety Data Sheet all still apply with full force.

## The preferred disposal methods

For a hydrocarbon refrigerant, the preferred routes are:

1. **Recovery for re-use.** Recover into a cylinder specifically approved for flammable refrigerant, using a recovery unit rated for class A3, and return it to the supplier or re-use it in the same system. This is the first choice wherever it is practicable.
2. **Destruction by controlled combustion.** Because a hydrocarbon is a fuel, it can simply be burned — at a licensed facility or through an approved controlled burner — leaving carbon dioxide and water. That option does not exist for a fluorocarbon.

Where neither is practicable, any release must be done as a controlled, risk-assessed operation into the open air, well away from ignition sources, drains, pits and confined spaces, and only where the Code and the local jurisdiction permit it. Treat that as a last resort with a permit and a plan behind it, not as a routine.

**Why a fluorocarbon cannot be burned the same way.** Combustion of a fluorinated refrigerant produces hydrogen fluoride, carbonyl fluoride and other highly toxic and corrosive products. Hydrogen fluoride attacks glass, concrete and lung tissue, and the injury it causes is delayed. That chemistry is why fluorocarbon destruction requires a licensed high-temperature facility with scrubbing, and why a hydrocarbon can be dealt with by a controlled burn that a fluorocarbon never can. It is also the reason you never braze near a fluorocarbon leak: the same decomposition happens on a hot brazing torch.

## Equipment must be rated for the class

>! Never use A1 service equipment on a hydrocarbon system. A standard recovery unit, vacuum pump, leak detector or refrigerant cylinder contains a motor, a switch, a relay or a heated element that is a competent ignition source, and it is being asked to fill itself with a flammable gas. A vacuum pump exhausting propane vapour past its own motor is a plain explosion waiting to happen. Recovery units, vacuum pumps, detectors and cylinders must be individually rated for class A3, and cylinders must be flammable-refrigerant cylinders, never an A1 bottle.

The Code makes the same point for A2L and A2 refrigerants: they are generally not compatible with A1 servicing tools, and every tool has to be assessed individually against the relevant standards and the manufacturer's stated design !CITE[cop:2:12.2.2].

## Ignition sources — the ones people forget

An ignition source is anything that can supply the energy to start combustion. The obvious ones are easy. The list below is the one that catches people:

- Naked flame: brazing torch, pilot light on a nearby water heater, cigarette.
- Electrical switching: a light switch, a thermostat contact closing, a contactor, a fan starting, a fridge in the same room cycling.
- Hand tools: an angle grinder, a drill, a hammer on steel, a cordless tool's switch.
- Hot surfaces: a heater element, an exhaust manifold, a work light.
- Static discharge: synthetic clothing, plastic sheeting, an unearthed vacuum cleaner hose.
- The electrical enclosure of the equipment you are working on.

Practical control: isolate and lock out the equipment and everything else in the space before you break into the system, do not switch anything on or off inside the zone while refrigerant may be present, use a gas detector rather than your nose, and keep an appropriate extinguisher at hand. Before any hot work, recover the charge, purge the pipework with oxygen-free nitrogen, and **prove the pipework gas-free with a detector** — not by assumption.

## Ventilation and where the gas goes

Hydrocarbon vapour is heavier than air. It does not disperse upward and vanish. It flows downhill, pools at floor level, and collects in pits, sumps, trenches, lift wells, basement plant rooms and drains — sometimes a long way from where it leaked.

The flammable range matters because it is startlingly wide at the bottom end:

| Refrigerant | Lower flammable limit in air | Upper flammable limit |
|---|---|---|
| R290 propane | about 2.1% by volume | about 9.5% |
| R600a isobutane | about 1.8% by volume | about 8.4% |

Work out what that means in real volumes. 100 g of propane is 0.1 / 0.044 = 2.27 mol, which at room conditions is about 2.27 x 24.5 = 55.7 litres of vapour. To sit at the lower flammable limit of 2.1%:

- 55.7 L / 0.021 = **2,650 litres, or about 2.65 cubic metres of flammable atmosphere**

A hundred grams — a tenth of a small charge, the sort of quantity in a set of hoses — can fill a cupboard-sized volume to the point where a spark ignites it. And because it is heavier than air, that volume is at floor level, exactly where the power points and the vacuum cleaner are.

Ventilation controls:

- Work outdoors or in a genuinely well-ventilated space wherever possible.
- Use forced ventilation, exhausting from **low level**, in any enclosed plant room.
- Keep a calibrated gas detector running, alarming well below the lower flammable limit — a setting of 20% of LFL is a common industry target.
- Keep the area clear of others, and control entry.
- Never work on a hydrocarbon system in a pit, a basement or a confined space without a specific risk assessment and a confined-space procedure.
- Do not let vapour enter drains or floor wastes, where it can travel to another part of the building.

## Cylinders and transport

Flammable refrigerant cylinders must be approved for flammable refrigerant, carry the red flammable-gas diamond, and travel as **Dangerous Goods Division 2.1** under the ADG Code !CITE[cop:2:13.7.3]. That brings placarding, segregation and quantity requirements the non-flammable refrigerants do not. Never carry them in a passenger compartment or in a sealed van without ventilation, and never put a hydrocarbon into an A1 cylinder.

Remember also the fill calculation from the cylinder lesson: propane liquid is about 0.49 kg/L, less than half the density of R404A liquid. Working a hydrocarbon fill off a fluorocarbon figure would overfill the cylinder by more than double.

>! A "drop-in hydrocarbon replacement" charged into equipment designed for a fluorocarbon is one of the more dangerous things you will meet in the field. The equipment's electrical components are not rated for a flammable atmosphere, its charge limits were never assessed for a flammable refrigerant, and nothing on the nameplate warns you. If a system's contents cannot be positively identified, treat it as flammable and toxic until an identifier proves otherwise.

### Written practice 1

**State the preferred disposal methods for hydrocarbon refrigerants, and explain why they differ from those for a fluorocarbon such as R404A.**

>? **Model answer.** The preferred methods are:
>?
>? 1. **Recovery for re-use** — recovering into a cylinder approved for flammable refrigerant, using a recovery unit rated for class A3, and returning it to the supplier or putting it back into the same system. This is the first choice wherever it is practicable.
>? 2. **Destruction by controlled combustion** — burning it at a licensed facility or through an approved controlled burner, which leaves only carbon dioxide and water.
>?
>? Where neither is practicable, any release must be a controlled, risk-assessed operation in the open air well away from ignition sources, drains, pits and confined spaces, and only where the Code and the local jurisdiction permit it.
>?
>? **Why they differ.** R404A is a scheduled substance with a global warming potential in the thousands, so its release is prohibited by law and it must be recycled, reclaimed or destroyed at an appropriately licensed facility. A hydrocarbon has zero ozone depletion potential and a global warming potential of about 3, so it is not scheduled and the legal driver for mandatory recovery is not the same. Its controlling hazard is fire, not atmospheric damage.
>?
>? Burning is also chemically available to a hydrocarbon and not to a fluorocarbon: burning a fluorinated refrigerant produces hydrogen fluoride and other highly toxic, corrosive products, which is why fluorocarbon destruction needs a licensed high-temperature facility with scrubbing.

### Written practice 2

**List the ignition-source and ventilation precautions you would take before opening the refrigeration circuit of an R290 coolroom pack located in an enclosed plant room.**

>? **Model answer.**
>?
>? **Ignition sources**
>?
>? - Isolate and lock out the pack and any other electrical equipment in the plant room before breaking into the system, so nothing can switch while refrigerant may be present.
>? - No naked flame, no smoking, no brazing or grinding until the charge is recovered, the pipework is purged with oxygen-free nitrogen and proved gas-free with a detector.
>? - Do not operate switches, lights, cordless tools or phones inside the zone while refrigerant may be present — a switching contact is an ignition source.
>? - Check for hidden sources: pilot lights, water heaters, other refrigeration cycling, work lights and hot surfaces.
>? - Control static — avoid synthetic clothing and plastic sheeting, and earth equipment.
>? - Use recovery equipment, vacuum pump, detector and cylinders all rated for class A3.
>? - Keep a suitable extinguisher at hand and know the escape route.
>?
>? **Ventilation**
>?
>? - Provide forced ventilation exhausting from **low level**, because hydrocarbon vapour is heavier than air and pools at floor level.
>? - Run a calibrated gas detector, alarming well below the lower flammable limit — commonly at 20% of LFL, which for propane is about 0.4% by volume against an LFL of about 2.1%.
>? - Keep vapour out of pits, sumps, drains and floor wastes where it can travel elsewhere in the building.
>? - Exclude other people from the area and control entry.
>? - If the plant room is a confined space, apply a confined-space risk assessment and procedure before entry.

### Written practice 3

**A technician plans to recover an R290 charge using the standard A1-rated recovery unit and vacuum pump from the van, into an ordinary refrigerant recovery cylinder. Explain what is wrong and what the consequences could be.**

>? **Model answer.** Three separate problems, each of them serious.
>?
>? **The recovery unit.** An A1-rated machine has a motor, switchgear and relays that are not designed to be surrounded by, or to contain, a flammable atmosphere. Filling it with propane vapour puts a competent ignition source inside the flammable range. It also may not be rated for the pressures or compatible with the seals and lubricant used.
>?
>? **The vacuum pump.** A standard pump exhausts what it removes straight past its own motor and out into the room, so it both creates a flammable atmosphere at floor level and provides the spark to light it.
>?
>? **The cylinder.** An ordinary A1 recovery cylinder is not approved for flammable refrigerant, will not carry the red flammable-gas diamond required for Division 2.1 transport, and if it already holds a fluorocarbon the propane also cross-contaminates it. The fill calculation would be wrong too: propane liquid is about 0.49 kg/L against R404A's 1.045 kg/L, so filling to a fluorocarbon mass figure overfills the cylinder by more than double.
>?
>? The consequences range from a contaminated cylinder and a destroyed recovery machine through to an explosion in an enclosed plant room. The correct approach is A3-rated recovery equipment, an A3-rated vacuum pump, a flammable-refrigerant cylinder, low-level forced ventilation, a gas detector, and isolation of all ignition sources before the system is opened.

## What to remember

- Hydrocarbons are class A3: low toxicity, high flammability, zero ODP, GWP of about 3, and not scheduled substances.
- Preferred disposal: recover into an A3 cylinder for re-use, or destroy by controlled combustion. Fluorocarbons cannot be burned — the products are hydrogen fluoride and worse.
- A1 tools are not A3 tools. Recovery unit, vacuum pump, detector and cylinder must all be rated for the class.
- Heavier than air: it pools at floor level, in pits and drains. Ventilate from low level.
- 100 g of propane can make about 2.65 cubic metres of flammable atmosphere at the lower flammable limit.
- Recover, purge with oxygen-free nitrogen and prove gas-free with a detector before any hot work.
- Division 2.1 dangerous goods on the road, with the red flammable-gas diamond.`,
  quiz: [
    {
      q: "Why can a hydrocarbon refrigerant be disposed of by controlled combustion when a fluorocarbon cannot?",
      options: [
        "Because hydrocarbons burn at a lower temperature",
        "Because burning a hydrocarbon yields carbon dioxide and water, while burning a fluorinated refrigerant produces hydrogen fluoride and other highly toxic, corrosive products",
        "Because hydrocarbons are not classified as dangerous goods",
        "Because fluorocarbons will not ignite at any temperature",
      ],
      answer: 1,
      explain: "It is a chemistry difference. A hydrocarbon is a fuel and burns cleanly to carbon dioxide and water; a fluorinated refrigerant decomposes to hydrogen fluoride, carbonyl fluoride and similar, which is why its destruction needs a licensed high-temperature facility with scrubbing — and why you never braze near a fluorocarbon leak.",
    },
    {
      q: "Forced ventilation for a hydrocarbon plant room should exhaust from which level, and why?",
      options: [
        "High level, because refrigerant vapour rises",
        "Low level, because hydrocarbon vapour is heavier than air and pools at floor level, in pits and drains",
        "Either, because forced ventilation mixes the room thoroughly",
        "High level, because that is where the gas detector is mounted",
      ],
      answer: 1,
      explain: "Propane and isobutane vapour are denser than air, so a leak flows downhill and accumulates at floor level and in pits, sumps and lift wells. Extracting from high level leaves the flammable layer sitting exactly where the power points, the vacuum cleaner and your feet are.",
    },
    {
      q: "Roughly what volume of flammable atmosphere can 100 g of propane produce at its lower flammable limit of about 2.1% by volume?",
      options: ["About 0.26 cubic metres", "About 2.65 cubic metres", "About 26 cubic metres", "About 265 cubic metres"],
      answer: 1,
      explain: "100 g is 0.1/0.044 = 2.27 mol, which is about 55.7 L of vapour at room conditions. At 2.1% by volume that fills 55.7/0.021 = about 2,650 L, or 2.65 cubic metres — a cupboard-sized space, at floor level. The point is how little refrigerant it takes.",
    },
    {
      q: "Which statement about hydrocarbon refrigerants and the Australian legislation is correct?",
      options: [
        "They are scheduled substances, so venting them carries the same penalty as venting R404A",
        "They are not scheduled substances, because their ozone depletion potential is zero and their global warming potential is about 3 — but work health and safety law, AS/NZS 5149 and the manufacturer's instructions still apply in full",
        "They are exempt from all regulation because they occur naturally",
        "They may be recovered into any approved refrigerant cylinder",
      ],
      answer: 1,
      explain: "Not scheduled does not mean unregulated. The environmental driver is weak because ODP is zero and GWP is about 3, but the flammability hazard is severe, so WHS duties, the refrigeration safety standards, the dangerous goods rules and the manufacturer's instructions all bind. And the cylinder must be one specifically approved for flammable refrigerant, never an A1 bottle.",
    },
  ],
},

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
