/* =========================================================================
   Course content, module 210 — Commissioning and system balancing.
   Source: Australian Refrigeration and Air-conditioning, Volume 2
   (Graham Boyle, 5th edition, pub. AIRAH), Chapter 10 — Commissioning.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — Ch 10, commissioning, duct design and balancing",
    "AIRAH DA27 Building Commissioning and DA03 Duct Design — Australian commissioning and air distribution practice",
  ];

  const REFS_ELEC = REFS.concat([
    "AS/NZS 3000 Wiring Rules — isolation, insulation-resistance testing and safe work on electrical equipment",
  ]);

  const REFS_DUCT = REFS.concat([
    "AS 4254.1 and AS 4254.2 Ductwork for air-handling systems in buildings — construction, sealing and support",
  ]);

  const REFS_HYD = REFS.concat([
    "IMI Hydronic Engineering (Tour and Andersson) — Balancing of distribution systems, manual balancing valve practice",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R2.10 — Commissioning and system balancing
     ====================================================================== */
  {
    id: "v2-commissioning",
    stream: "v2",
    title: "R2.10 · Commissioning and system balancing",
    blurb: "Bringing a finished installation up to specification: pre-start checks, start-up and control settings, duct design and pressures, outlet selection, air and water balancing, and chiller performance tests.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "what-commissioning-is",
        title: "What commissioning is and why it exists",
        minutes: 10,
        simple: "A plant is not finished when the last screw goes in. Commissioning is the stage where you test everything, adjust it, and prove it does what the designer promised. It is like tuning a new guitar: all the parts can be perfect and correctly assembled, and it will still sound wrong until somebody sits down and tunes it properly.",
        refs: REFS_ELEC,
        content: `
Installation ends with the last bracket and the last solder joint. The job does
not. Between "it runs" and "it works" sits **commissioning** — the systematic
testing, adjusting and balancing of every part of the plant until it delivers
what the design promised.

This matters because a beautifully designed, beautifully installed plant will
still disappoint if nobody tunes it. Poorly commissioned systems produce a
very recognisable set of complaints: rooms that never hold temperature, energy
bills far above the estimate, compressors that short-cycle, and a customer who
rings your office every second week. The equipment is not faulty. It has simply
never been set up.

## Where trade work stops

Every new plant needs commissioning at some level, from a bar fridge in a
service station to a 2 MW chiller plant. The scale of the job varies enormously.
Large air-conditioning and refrigeration installations involve specialist
commissioning agents, witnessed performance tests and formal reporting — that
work sits above trade level. What a licensed refrigeration technician is
expected to do competently is commission small to medium plant: split and
ducted air-conditioning, coolrooms and freezer rooms, packaged units, small
water-cooled systems.

## The shape of a commissioning job

| Stage | What happens | Typical instruments |
|---|---|---|
| Inspection | Checklist walk-over of every component before power is applied | Eyes, torch, tape, insulation tester |
| Electrical proving | Insulation resistance, earthing, supply voltage, overload settings | Insulation tester, multimeter, clamp meter |
| Start-up | First run, rotation, pressures, current, settling in | Gauge manifold, clamp meter, thermometers |
| Control setting | Thermostats, pressure controls, defrost, safety cut-outs | Gauges, thermometers, timer |
| Balancing | Proportioning air or water so each outlet gets its design flow | Anemometer, pitot and manometer, flow hood |
| Performance test | Proving capacity and power against specification | Flow meters, thermometers, power meter |
| Handover | Records, demonstration, manuals, service agreement | Paperwork |

Notice that the order is not negotiable. There is no point balancing air
outlets before the fan has been proved, and no point setting a pressure control
before the charge is correct.

## Start with a checklist

The first step in any commissioning procedure is an **initial inspection
checklist**. Most companies have a standard form; if yours does not, build one,
because memory is a poor substitute for a printed list at seven in the morning
on a roof.

### Condensing unit

- Transit bolts, shipping brackets and packaging removed, and the unit properly
  fixed down. Compressors are shipped with their internal springs locked or the
  unit strapped to a pallet — leaving that in place transmits every vibration
  into the building structure.
- On open-drive machines, V-belts and pulleys checked for alignment and tension.
- Condenser clean, fins straight, and a clear air path in *and* out. A wall or
  a fence too close to a discharge is a head-pressure problem you will never fix
  later with a gauge set.
- Unit evacuated and charged, with the charge amount recorded.
- All service and isolating valves in their correct running position — a
  back-seated king valve or a closed liquid line valve wrecks a compressor in
  minutes.
- Electrical connections tight, correct terminations, glands sealed.
- Insulation resistance measured between every winding (including solenoid
  coils and fan motors) and earth. The accepted minimum is **1 megohm** on a
  500 V DC insulation tester.
- Earthing proved at the unit, and at the power point if the machine plugs in.
- Supply voltage matches the compressor nameplate, and the overload rating
  matches the motor full-load current.

### Evaporator

- Fan motor mounts secure, transit packaging removed.
- Condensate drain installed with fall, correctly trapped, and with clearance
  to discharge properly. A drain that runs uphill or is not trapped is the
  single most common callback on a new evaporator.
- Coil mounting secure, coil face clean and unobstructed by stock or packaging.
- Electrical connections at fan motors and defrost heaters checked.

### Pipework

- Pipework properly installed, supported and secured so it cannot chafe or
  vibrate against structure.
- Suction line insulation complete and vapour-sealed.
- Expansion valve sensing bulb clamped to a clean horizontal suction line in
  the correct position, with good metal-to-metal contact and insulated over.

>! Insulation-resistance testing puts 500 V DC on the windings. Isolate and lock
>! out the supply first, disconnect any electronic controller, inverter drive or
>! soft starter before testing — that voltage will destroy solid-state boards —
>! and discharge the circuit afterwards.

## Paperwork is part of the trade

Commissioning finishes on paper. Record the readings you took, not just a tick:
the charge weight, suction and discharge pressures, superheat, running current,
control settings, and the balancing figures. The National Construction Code
requires mechanical services in commercial buildings to be commissioned and the
results documented, and any refrigerant work you do during commissioning falls
under your ARCtick refrigerant handling licence and its record-keeping
obligations. Then demonstrate the plant to the owner, hand over the operating
instructions, discuss a service agreement, and get a signature.

## What to remember

- Commissioning is testing, adjusting and balancing until the plant meets the
  design intent — not just "it started".
- Work in order: inspect, prove electrically, start up, set controls, balance,
  performance test, hand over.
- 1 megohm minimum insulation resistance at 500 V DC, with electronics
  disconnected.
- The three checklist groups on refrigeration plant are condensing unit,
  evaporator and pipework.
- A commissioning record with real numbers is worth more to the next technician
  than any amount of memory.
`,
        quiz: [
          {
            q: "Why is commissioning treated as a separate stage rather than part of installation?",
            options: [
              "Because it is only required on plant above 30 kW",
              "Because a correctly installed plant still has to be tested, adjusted and balanced before it delivers the designed performance",
              "Because installers are not licensed to run equipment",
              "Because the manufacturer's warranty starts when the unit is uncrated",
            ],
            answer: 1,
            explain: "Installation gets the parts in place; commissioning proves and tunes them. Poor commissioning shows up as bad temperature control, wasted energy and complaints on plant that is otherwise perfectly built. It is not a size threshold — all new plant needs commissioning at some level.",
          },
          {
            q: "During the inspection you measure 0.4 megohm between a fan motor winding and earth on a 500 V DC insulation tester. What does that tell you?",
            options: [
              "It is acceptable because it is above zero",
              "It is below the accepted 1 megohm minimum, so the winding or its wiring must be investigated before energising",
              "It only matters on three-phase motors",
              "The reading proves the earth conductor is faulty",
            ],
            answer: 1,
            explain: "One megohm at 500 V DC is the accepted minimum for windings, solenoid coils and fan motors. A reading below that means moisture or damaged insulation and must be resolved first — energising it risks a fault to earth. The reading is between winding and earth, so it says nothing directly about the earth conductor itself.",
          },
          {
            q: "Which of these is the correct order of commissioning activities?",
            options: [
              "Balance the outlets, then start the fan, then check the charge",
              "Set the pressure controls, then charge the system, then inspect the pipework",
              "Inspect and prove electrically, start up, set controls, balance, performance test, hand over",
              "Performance test first so you know how far out the plant is",
            ],
            answer: 2,
            explain: "Each stage depends on the one before. Controls cannot be set until the charge and refrigerant control are right, and outlets cannot be balanced until the fan has been proved to deliver near its design volume. Working out of order means doing everything twice.",
          },
          {
            q: "Before using a 500 V insulation tester on a unit fitted with an electronic controller, you must:",
            options: [
              "Set the tester to 1000 V for a better reading",
              "Leave everything connected so the whole circuit is tested at once",
              "Isolate and lock out the supply and disconnect the electronic controller or drive",
              "Run the plant for ten minutes first to warm the windings",
            ],
            answer: 2,
            explain: "500 V DC applied through a solid-state board destroys it. Isolate, lock out, disconnect electronics, test the windings, then discharge. Testing 'everything at once' is exactly the mistake that turns a routine check into a controller replacement.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "refrigeration-start-up",
        title: "Starting the new plant and setting its controls",
        minutes: 13,
        simple: "The first few hours of a plant's life are when most of the damage gets done. This lesson is the careful start-up routine — bump it, listen, watch the gauges and the ammeter — and then how to set the low pressure control by letting the plant itself tell you the right numbers rather than guessing from a chart.",
        refs: REFS,
        content: `
The first run of a new plant is the riskiest moment it will ever have. A
reversed three-phase compressor, a liquid slug, or an overloaded motor can turn
a new installation into a warranty claim inside a minute. Slow, deliberate
start-up is not fussiness; it is the cheapest insurance available.

Do the routine electrical checks and leak test first. Then:

1. **Fit gauges** to the high and low sides. Compare the standing pressures
   against the saturation pressure for that refrigerant at the prevailing
   ambient. On a plant that has been sitting idle, both gauges should read very
   close to the saturation pressure for ambient temperature. If the high side
   reads noticeably above it, you have non-condensables in the system — air was
   left in, or the evacuation was inadequate.
2. **Check the oil level** in the sight glass if one is fitted.
3. **Bump the compressor** — switch on, then straight off. Listen for knocking
   or scraping, and confirm the direction of rotation. Scroll and screw
   compressors will not pump backwards and will be damaged by prolonged reverse
   running; on a three-phase supply, swapping any two phases fixes it.
4. **Run normally and watch.** Keep your eyes on the gauges and put a clamp
   meter on the compressor. If the motor is drawing above nameplate current, or
   the suction pressure is climbing above normal limits as a warm room pulls
   down, throttle the suction service valve to hold the load back until the room
   temperature comes down.
5. **Work through the system** systematically: refrigerant charge, refrigerant
   control, temperature and pressure controls, in-line valve settings, and the
   running current of every motor.

>! Do not touch the expansion valve while the plant is still pulling down.
>! Superheat readings mean nothing until the room approaches temperature and the
>! valve settles. Unless serious flood-back is happening, leave it alone.

Then observe at least **two complete cycles**, making only fine adjustments.
Check the oil level again and top up if needed, remove the gauges, re-test the
connections for leaks, adjust belt tension, clean up, complete the paperwork,
get the owner's signature and explain the operating controls to them.

!FIG[gauge-pt-ring]

!SIM[See what non-condensables do to the gauges](fault=nonCondensables)

## Setting the low pressure control

Apprentices worry about this more than it deserves. Published setting charts
exist, but they are a guide only. The plant in front of you will tell you the
right numbers if you let it, because of three linked facts:

1. In a correctly designed plant there is a fixed relationship between room
   temperature and the evaporating temperature of the refrigerant.
2. Evaporating temperature sets the low-side pressure, and vice versa.
3. Therefore there is a direct relationship between suction pressure and room
   temperature — and it holds for the life of the plant, provided the charge is
   correct, the refrigerant control and compressor are working, and icing is no
   worse than normal.

### Method

1. Set the control to cut out at a pressure *below* the figure you expect to
   finish with, so it cannot stop the plant prematurely.
2. Run the plant until the room reaches its correct storage temperature, with
   the charge correct and the expansion valve adjusted.
3. Read the suction pressure. If it fluctuates, record the lowest point.
4. Set the control to **cut out** at that pressure.
5. Leave the compressor off for 15 to 20 minutes, or until the room rises to the
   highest temperature you are prepared to allow. Record the suction pressure
   again.
6. Set the control to **cut in** at that pressure.

**Worked example — dairy coolroom on R134a, storage 3.5 °C.** The room pulls
down and the suction settles, dipping to a low of 70 kPa gauge. That becomes the
cut-out. The compressor is stopped; after 18 minutes the room has drifted up to
5.5 °C and the suction has risen to 213 kPa gauge, so that becomes the cut-in.
The differential is 213 − 70 = **143 kPa**, and the plant will now hold the room
between roughly 3.5 °C and 5.5 °C for the rest of its life without further
attention.

If the evaporator is forced-draught and relies on **off-cycle defrost**, set the
cut-in to a pressure equivalent to a saturation temperature of about **4 °C**,
so the coil sits above freezing long enough during each off period to shed its
ice.

### Typical settings as a sanity check

These field-derived R134a figures (gauge pressures) are worth knowing as a check
on your own results, not as a substitute for them.

| Application | Storage temp °C | Cut-in kPa | Cut-out kPa | Defrosts per day | Defrost terminating pressure |
|---|---|---|---|---|---|
| Ice cream, electric defrost | −26 | 10 | −45 | 2 | 300 kPa |
| Frozen food, electric defrost | −20 | 20 | −40 | 2 | 300 kPa |
| Meat, electric defrost | 0.5 | 171 | 56 | 2 | 286 kPa |
| Dairy, electric defrost | 3.5 | 213 | 70 | 4 | 260 kPa |
| Fruit and vegetable room | 5.5 | 236 | 84 | Off-cycle | — |
| Walk-in freezer room, forced draught | −18 | 43 | −20 | 4 | 286 kPa |
| Walk-in meat room, forced draught | 0.5 | 171 | 43 | 4 | 260 kPa |
| Medium-temp cabinet, cross-fin | 3.5 | 236 | 43 | Off-cycle | — |

Negative figures are pressures below atmospheric — a vacuum on the gauge. Where
the control is used for **pump-down** rather than temperature control, the
thermostat operates a liquid-line solenoid and the pressure control simply
stops the compressor once the evaporator is empty: a low-temperature pump-down
setting would be around 50 kPa cut-in and −45 kPa cut-out. On R404A or R507 the
temperatures are the same but the pressures differ — take the equivalent
pressures from the pressure-temperature chart for that refrigerant.

## Solid-state pressure controls

Electronic controllers read suction pressure through a **pressure transducer**
instead of a bellows and capillary. That removes the perennial risk of a
fractured capillary, gives closer and more energy-efficient control, and lets
the controller make decisions a mechanical switch cannot: how many compressors
to run on a parallel rack, and rotating lead and lag machines so running hours
even out. Set them only with the manufacturer's instructions in front of you and
a clear understanding of how the plant is meant to operate.

## Setting a crankcase pressure regulator

A CPR protects the compressor motor from overload while a warm room or a
post-defrost coil dumps high-pressure vapour down the suction line. The trade-off
is recovery time — the more the valve throttles, the longer the pull-down. So it
must be set as high as it can go without overloading the motor, and an ammeter
is the only honest way to find that point.

1. Wind the adjustment fully anticlockwise to release all spring pressure.
2. Fit an ammeter to the compressor supply.
3. Start the unit and wind the adjustment clockwise while watching the meter,
   until the current reaches the full-load current on the nameplate.
4. Run the unit until the room is down to operating temperature.
5. Initiate a defrost.
6. With the defrost clock's pressure or time termination set correctly, watch
   the ammeter as the defrost finishes and re-trim the valve as in step 3.
7. Two or three minutes after that defrost — before pull-down is complete —
   initiate another defrost and check the current and setting again.

Steps 1 to 7 apply to a warm room. If the room is already at temperature and you
are only verifying an existing valve, steps 5 to 7 are enough.

## What to remember

- Compare standing pressures to the saturation pressure for ambient: a high
  reading on the high side means non-condensables.
- Bump-start to check noise and rotation before running.
- Throttle the suction, not the expansion valve, to control an overload during
  pull-down.
- Set the LP control from the plant's own readings: lowest suction at storage
  temperature is the cut-out, suction at the highest tolerable room temperature
  is the cut-in.
- Off-cycle defrost needs a cut-in equivalent to about 4 °C saturated.
- A CPR is set with an ammeter, to nameplate full-load current, and re-checked
  after a defrost.
`,
        quiz: [
          {
            q: "A new R134a system has been idle overnight at 25 °C ambient. The high-side gauge reads well above the R134a saturation pressure for 25 °C. What is the most likely cause?",
            options: [
              "The system is overcharged",
              "Non-condensable gas is in the system from inadequate evacuation",
              "The expansion valve is closed",
              "The gauge hose is restricted",
            ],
            answer: 1,
            explain: "At rest the refrigerant pressure follows its saturation temperature. Any partial pressure of air adds on top of it, so a standing high-side reading above the P-T value points to non-condensables. Overcharge raises pressure while running, not at rest with everything at ambient.",
          },
          {
            q: "During pull-down of a warm coolroom the compressor is drawing above nameplate current. What is the correct action?",
            options: [
              "Wind the expansion valve closed until the current drops",
              "Increase the fan speed on the condenser",
              "Throttle the suction service valve to limit the load until the room temperature falls",
              "Change the overload for a larger one",
            ],
            answer: 2,
            explain: "Throttling the suction reduces mass flow and therefore motor load, and can be opened up again as the room cools. Winding the TX valve closed during pull-down is the classic error — superheat readings are meaningless until the plant settles, and you will have to reset it anyway. Fitting a bigger overload just removes the protection.",
          },
          {
            q: "You are setting the LP control on a coolroom. The suction dips to 70 kPa with the room at its correct storage temperature, and rises to 213 kPa after the compressor has been off long enough for the room to reach its highest acceptable temperature. What settings do you use?",
            options: [
              "Cut-in 70 kPa, cut-out 213 kPa",
              "Cut-out 70 kPa, cut-in 213 kPa, differential 143 kPa",
              "Cut-out 213 kPa, differential 70 kPa",
              "Cut-in 143 kPa, cut-out 70 kPa",
            ],
            answer: 1,
            explain: "The low pressure corresponds to the cold room, so it is the cut-out; the higher pressure corresponds to the warmed room, so it is the cut-in. The differential is the difference between them, 143 kPa. Reversing them would make the control cut out as soon as it started.",
          },
          {
            q: "Why is a crankcase pressure regulator set with an ammeter rather than to a fixed pressure?",
            options: [
              "Because pressure gauges are not accurate enough on the low side",
              "Because the aim is the highest setting that still keeps the motor at or below its full-load current, which gives the fastest recovery after defrost",
              "Because the valve has no pressure adjustment",
              "Because the CPR controls discharge pressure, not suction pressure",
            ],
            answer: 1,
            explain: "The CPR exists to stop motor overload, and motor overload is measured in amps. Setting it as high as full-load current allows gives maximum capacity and the shortest post-defrost recovery. A conservative fixed pressure setting protects the motor but leaves the room recovering far too slowly.",
          },
        ],
      },
      /* --------------------------------------------------------------- */
      {
        id: "duct-design-procedure",
        title: "Ducts and the residential duct design procedure",
        minutes: 13,
        simple: "Ducts are just pipes for air, and sizing them is a balance between money and noise: small ducts are cheap and use less roof space but they roar and make the fan work hard. This lesson walks the whole design of a house system, from the heat load down to the diameter of each flexible duct, with the arithmetic shown.",
        refs: REFS_DUCT,
        content: `
The comfort a ducted system delivers comes down to three things at each outlet:
the **volume** of air, its **velocity** and its **temperature**. Get the duct
system wrong and no amount of clever control will rescue it, because if the fan
is supplying the right total volume, every litre per second delivered in excess
to one room has been stolen from another. Oversupply somewhere always means
undersupply somewhere else — and complaints from both.

## What a duct has to be

Air should be moved as quietly and as cheaply as possible. Small ducts cost less
and fit into tighter ceiling spaces, but they are noisier and demand more fan
power. Every duct, whatever the material, must be:

- **Airtight**, so air is not lost into a roof space
- **Rigid** enough for the fan pressure — roughly 0.25 to 0.5 kPa on low
  pressure systems and up to about 1.5 kPa on high pressure systems
- **As straight and smooth as possible** — roughness, every bend and every
  change of size adds resistance and fan power
- **Insulated**, so conditioned air does not gain or lose heat in a 55 °C roof
  space
- **Of low noise conductance**, so fan noise does not arrive in the bedroom and
  conversation in one room does not cross to the next
- **Big enough to carry the air** and to divide it proportionally between
  branches
- **Fire-rated where required**, with fire dampers that close automatically so a
  duct cannot carry flame from room to room

Materials range from galvanised steel and aluminium to foil-faced fibreglass
board and, in housing, **flexible duct**. Flexible duct changed the economics of
domestic air-conditioning: it is light, quick to install and forgiving of an
approximate layout. Round duct is preferred at higher pressures because a circle
is inherently strong, and exposed round spiral duct is often left as an
architectural feature in supermarkets and warehouses, where it needs no
insulation because it is inside the conditioned space.

## The starting equation

Ignore friction for a moment and duct sizing is one line:

**Q = A × V**, where Q is volume flow (m³/s), A is cross-sectional area (m²) and
V is velocity (m/s).

To carry 1000 L/s (1 m³/s) at 10 m/s:

A = Q ÷ V = 1 ÷ 10 = **0.1 m²**

That single area can be built as 0.5 m × 0.2 m rectangular, 0.316 m square, or
0.36 m diameter round. All three carry the same air at the same velocity — but
not with the same friction, because the round one has the least surface per unit
of area.

## Friction is what makes it a design job

Real ducts resist flow because of surface roughness, bends, tees, changes of
section, dampers, splitters, registers, diffusers and terminal units, and the
sheer length of duct run. The same thinking applies as to sizing a suction line:
on a long or complex run, every pressure-consuming component has to be counted.

There are three recognised methods of sizing low-velocity supply systems:

| Method | How it works | Where it suits |
|---|---|---|
| Velocity reduction | Pick a velocity at the fan and step it down progressively along the run, sizing each section from tables | Houses, shops, simple layouts; needs dampers and splitters for balancing |
| Equal friction | Size every section for the same pressure drop per metre | Most commercial low-velocity systems; a well-designed one needs little balancing |
| Static regain | Size each section so the static pressure recovered as velocity falls exactly offsets the friction in the next run | Large, high-velocity systems; the most complex |

Velocity reduction is the method used below because it suits residential and
small commercial work. Equal friction is covered in the next lesson.

## The procedure, step by step

1. Get a plan of the building.
2. Do a cooling load calculation, taking into account the **zoning** that suits
   the building. On a simple day-night two-zone system, calculate the day load
   for the living areas and the night load for the bedrooms, then size the plant
   for the larger of the two.
3. From the load estimate, get an airflow rate per cubic metre of conditioned
   space: total L/s supplied divided by the total volume of space supplied at
   any one time.
4. Work out the air volume for each room by multiplying that rate by the room
   volume.
5. Sketch a preliminary duct layout, with diffusers near the centre of each
   room. With flexible round duct, freehand is enough.
6. Tabulate every duct with a number and the volume it must carry.
7. Assign a velocity to each duct from a recommended-velocity table, according
   to whether it is a trunk, a branch or a return.
8. Size each duct — from a friction chart, a duct calculator, or the round-duct
   formula.
9. Round each result to the nearest commercially available size.
10. Select diffusers from a supplier's catalogue, checking rated volume, throw
    and noise level — the duct diameter is a good first guess at diffuser size.
11. List every accessory: elbows, tees, reducers, plus the sealing tape or
    straps that make the joints airtight.

### Recommended maximum duct velocities (m/s)

| Building type | Trunks and large risers | Small risers and branches | Return mains |
|---|---|---|---|
| Residences | 4–5 | 3–4 | 4–6 |
| Apartments | 7.5 | 5.5 | 5 |
| Theatres | 8 | 6 | 6 |
| Private offices | 8 | 6.5 | 5 |
| General offices | 11 | 7 | 6 |
| Restaurants | 9 | 7 | 6 |
| Small shops | 9 | 7.5 | 6 |
| Department store, lower floors | 10.5 | 8 | 6 |

Outdoor air intakes are kept to about 2.5 m/s in general buildings and 3.0 m/s
in restaurants, shops and industrial buildings; cloth filter face velocities
about 1.5 m/s and 1.75 m/s respectively — always check the filter maker's
figures.

## Worked example — a house on a day-night system

**Load estimate.** Living areas (lounge, dining, kitchen, family): 10.0 kW,
650 L/s. Bedrooms: 6.7 kW, 450 L/s. The plant is therefore sized for **10 kW**
and the supply fan for **650 L/s**.

**Airflow rate.** The day zone has a volume of 250 m³ (ceilings 3 m):

(L/s)/m³ = 650 ÷ 250 = **2.6 (L/s)/m³**

**Room volumes.** Multiply each room volume by 2.6:

| Room | Volume m³ | Supply air L/s |
|---|---|---|
| Lounge | 88 | 230 |
| Dining | 38 | 100 |
| Kitchen | 46 | 120 |
| Family | 77 | 200 |
| Bedroom 1 | 46 | 120 |
| Bedroom 2 | 50 | 130 |
| Bedroom 3 | 38 | 100 |
| Bedroom 4 | 38 | 100 |

Day total is 230 + 100 + 120 + 200 = 650 L/s. Night total is only
120 + 130 + 100 + 100 = 450 L/s — 200 L/s short of what the fan delivers. The
neat trick is to pipe the **family room duct so it flows continuously**, past
the day-night changeover splitter. At night the bedrooms take 450 L/s and the
family room keeps taking its 200 L/s, so the fan still sees 650 L/s and the
system stays balanced instead of being choked in one position of the splitter.

**Sizing.** Round duct diameter comes straight from Q = A × V with A = πD²/4:

D = square root of (4Q ÷ (π × V))

For duct 1 (lounge, 0.23 m³/s at 4 m/s):

D = sqrt(4 × 0.23 ÷ (3.142 × 4)) = sqrt(0.0732) = 0.2705 m ≈ **275 mm**

| Duct | Duty | Flow m³/s | Assigned velocity m/s | Calculated D mm | Nearest standard mm |
|---|---|---|---|---|---|
| 1 Lounge | Branch | 0.23 | 4 | 275 | 300 |
| 2 Dining | Branch | 0.10 | 4 | 175 | 200 |
| 3 Kitchen | Branch | 0.12 | 4 | 190 | 200 |
| 4 Day trunk (2+3) | Trunk | 0.22 | 5 | 240 | 250 |
| 5 Family | Branch | 0.20 | 4 | 250 | 250 |
| 6 Night trunk (7+8) | Trunk | 0.25 | 5 | 250 | 250 |
| 7 Bedroom 1 | Branch | 0.12 | 4 | 190 | 200 |
| 8 Bedroom 2 | Branch | 0.13 | 4 | 205 | 200 |
| 9 Bedroom 3 | Branch | 0.10 | 4 | 175 | 200 |
| 10 Bedroom 4 | Branch | 0.10 | 4 | 175 | 200 |
| 11 Night trunk (9+10) | Trunk | 0.20 | 5 | 225 | 250 |
| 12 Return | Return trunk | 0.65 | 6 | 375 | 400 |

Volumes in litres per second are divided by 1000 to give m³/s. Note that
rounding **up** to the next standard size lowers velocity and friction, while
rounding down raises both — which is why duct 8 at 205 mm going to 200 mm is
worth a second thought if the run is long.

>! Flexible duct must be pulled taut and supported. Duct left sagging or
>! compressed between joists can easily double its friction loss, and the room on
>! the end of it will be permanently short of air no matter how you set the
>! damper.

## What to remember

- Q = A × V is the whole of duct sizing before friction is considered.
- Size the plant for the larger zone load, and let one continuously-flowing duct
  soak up the difference between zones.
- Get (L/s)/m³ once, then multiply out room by room.
- Assign velocities from a recommended table — residential trunks 4–5 m/s,
  branches 3–4 m/s.
- D = sqrt(4Q ÷ πV), then round to a size you can actually buy.
- Velocity reduction suits houses and shops; it relies on dampers and splitters
  to finish the job during balancing.
`,
        quiz: [
          {
            q: "A duct must carry 0.20 m³/s at an assigned velocity of 4 m/s. What round duct diameter does that need?",
            options: ["160 mm", "200 mm", "250 mm", "320 mm"],
            answer: 2,
            explain: "Area = Q/V = 0.20/4 = 0.05 m². D = sqrt(4A/π) = sqrt(0.0637) = 0.252 m, so 250 mm is the nearest standard size. Picking 200 mm would push the velocity to about 6.4 m/s — noisy for a residential branch.",
          },
          {
            q: "On a day-night zoned house, why is the family room duct arranged to flow continuously in both zone positions?",
            options: [
              "Because the family room has the largest heat load",
              "Because the night zone would otherwise take 200 L/s less than the fan delivers, causing severe balancing problems",
              "Because the changeover splitter cannot fully close",
              "To provide fresh air when the bedrooms are closed off",
            ],
            answer: 1,
            explain: "The fan is sized for the bigger (day) zone at 650 L/s. The bedrooms only need 450 L/s, so without a duct that stays open the fan would be throttled against a much smaller system every night — high static, noise and poor distribution. The continuous duct absorbs the 200 L/s difference.",
          },
          {
            q: "Which statement about the three duct sizing methods is correct?",
            options: [
              "Static regain sizes every section for the same pressure drop per metre",
              "Equal friction picks a fan discharge velocity and steps it down along the run",
              "Velocity reduction suits simple layouts such as a house or a shop and relies on dampers and splitters for balancing",
              "Velocity reduction is the only method that needs no balancing",
            ],
            answer: 2,
            explain: "Velocity reduction is the simple method: assign velocities from a table and size each section. It leaves the fine distribution to dampers and splitters at balancing time. Equal friction is the constant Pa/m method, and static regain sizes each section so recovered static offsets the next section's friction.",
          },
          {
            q: "Rounding a calculated 205 mm duct down to a standard 200 mm will:",
            options: [
              "Reduce both the velocity and the friction loss",
              "Increase the velocity and the friction loss per metre",
              "Have no effect because the difference is under 5 per cent",
              "Increase the volume the duct can carry",
            ],
            answer: 1,
            explain: "A smaller area for the same flow means higher velocity, and friction loss rises steeply with velocity. On a short branch that is acceptable; on a long run it can be the difference between a room that balances and one that never does.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "duct-pressures-and-friction",
        title: "Static, velocity and total pressure, and the equal-friction method",
        minutes: 12,
        simple: "Air in a duct carries two kinds of pressure: the squeeze pushing outwards on the duct walls, and the punch it carries because it is moving. Add them and you get total pressure, which is the fan's whole budget and only ever gets smaller as the air travels. Understanding that split is what lets you use a pitot tube and size ducts properly.",
        refs: REFS_DUCT,
        content: `
Every measurement a balancing technician makes, and every duct sizing chart ever
printed, rests on one idea: the energy in moving air shows up as two different
pressures, and they add to a third.

| Pressure | What it is | How you measure it |
|---|---|---|
| Static pressure (ps) | The pressure pushing outwards on the duct wall, independent of motion | A probe against a small hole (6 mm minimum) in the duct wall, on a manometer |
| Velocity pressure (pv) | The extra pressure the air produces because it is moving; always positive | The difference between total and static — what a pitot tube gives you directly |
| Total pressure (pt) | ps + pv — the whole energy budget the fan supplies | A tube facing directly into the airstream |

The analogy that works: static pressure is the crowding in a packed lift, and
velocity pressure is the shove you feel from someone walking into you. The
crowding pushes evenly in all directions; the shove only exists along the
direction of travel.

!FIG[duct-static-velocity]

**Total pressure only ever falls** along a duct. Static and velocity can trade
places — a duct that gets bigger slows the air and converts velocity pressure
back into static pressure, which is exactly what the static regain method
exploits — but friction removes total pressure permanently, and only the fan
puts it back.

## Velocity pressure and velocity

For standard air at about 1.2 kg/m³:

**pv = 0.5 × ρ × v² = 0.6 v²** (pv in Pa, v in m/s)

and turned around,

**v = 1.29 × sqrt(pv)**

That equation is the printed conversion chart supplied with every pitot tube, in
algebraic form.

**Worked example.** A pitot tube in a duct reads a velocity pressure of 15 Pa.

v = 1.29 × sqrt(15) = 1.29 × 3.873 = **5.0 m/s**

Check it backwards: 0.6 × 5² = 15 Pa. At 10 m/s the velocity pressure would be
60 Pa; at 2.5 m/s only 3.75 Pa — which is why cheap manometers struggle at low
outlet velocities and why an anemometer or a flow hood is used near outlets.

## Friction loss per metre

Duct friction charts plot volume flow against friction loss in **pascals per
metre** for straight, circular galvanised duct at 20 °C, with duct diameter and
velocity as sloping lines. Read in at your flow, across to your velocity, and
read off both the diameter and the friction rate. For example, 0.23 m³/s in a
275 mm duct runs at about 4 m/s and loses roughly **0.9 Pa/m**.

## The equal-friction method

Instead of assigning a velocity to each section, you choose one **friction rate**
— typically 0.8 to 1.0 Pa/m for low-velocity commercial work — and size every
section of the system at that same rate. Because the friction per metre is
constant everywhere, a well-designed system arrives at every outlet with a
similar pressure available, and needs little or no balancing.

**Worked example at 1.0 Pa/m:**

| Section | Flow m³/s | Diameter at 1.0 Pa/m | Standard size | Resulting velocity m/s |
|---|---|---|---|---|
| Main trunk | 0.65 | 396 mm | 400 | 5.2 |
| Sub trunk | 0.45 | 346 mm | 350 | 4.7 |
| Large branch | 0.23 | 269 mm | 275 | 3.9 |
| Branch | 0.12 | 211 mm | 200 | 3.8 |
| Small branch | 0.10 | 197 mm | 200 | 3.2 |

Notice what happens by itself: velocity falls steadily as you move out along the
system, from 5.2 m/s in the trunk to about 3 m/s at the branches. That is the
same pattern the velocity reduction method produces by hand — equal friction
simply gets there arithmetically instead of by judgement.

## Fittings and equivalent lengths

A bend or a tee is not a length of duct, but it is convenient to treat it as
one. Every fitting is given an **equivalent length** — the metres of straight
duct of the same size that would lose the same pressure. Published data gives it
as a ratio of diameters, Le/D, so it scales with duct size.

| Fitting | Typical Le/D | Equivalent length on a 400 mm duct |
|---|---|---|
| Smooth radius 90° bend (r/D = 1.5) | about 12 | 4.8 m |
| Mitred 90° bend with turning vanes | about 15 | 6.0 m |
| Mitred 90° bend, no vanes | about 65 | 26 m |
| 45° bend | about 6 | 2.4 m |
| Branch take-off (45° tap) | about 20 | 8.0 m |

Those numbers explain why **turning vanes** exist. A square-cornered bend
without vanes throws away as much pressure as 26 metres of straight duct, and
does it noisily. Fitting vanes cuts that to about 6 metres. Always use the
fitting data from AIRAH DA03 or the manufacturer rather than a remembered
number, but keep the order of magnitude in your head.

## The index run

The fan has to be selected for the worst path through the system — the **index
run**, the route from fan to outlet with the greatest total pressure loss. It is
usually, but not always, the longest run.

**Worked example.** Index run: 6 m of 400 mm trunk with one smooth radius bend,
then 9 m of 300 mm branch taken off with a 45° tap, ending at a diffuser. The
system is designed at 1.0 Pa/m.

- Trunk: 6 m straight + 4.8 m equivalent for the bend = 10.8 m → 10.8 Pa
- Branch: 9 m straight + (20 × 0.3 =) 6.0 m equivalent for the take-off = 15 m
  → 15.0 Pa
- Diffuser total pressure from catalogue: 20 Pa
- Cooling coil: 60 Pa
- Filter, dirty allowance: 50 Pa
- Return air path and grille: 25 Pa

Total = 10.8 + 15.0 + 20 + 60 + 50 + 25 = **180.8 Pa**

So the fan must produce about 181 Pa of total pressure at 650 L/s. If the fan
discharge velocity is 8 m/s, its velocity pressure is 0.6 × 8² = 38 Pa, so the
**fan static pressure** is 181 − 38 = 143 Pa. Fan catalogues quote both; know
which one you are reading.

>! Dirty filters and crushed flexible duct are the two great destroyers of
>! commissioned performance. Always include a dirty-filter allowance in the fan
>! selection, or the system will meet specification on the day of handover and
>! fail six weeks later.

## What to remember

- pt = ps + pv, and total pressure only ever falls along a duct.
- pv = 0.6 v² and v = 1.29 sqrt(pv) for standard air.
- Equal friction means sizing every section for the same Pa/m, typically
  0.8–1.0 Pa/m; velocity falls naturally along the run.
- Fittings are counted as equivalent lengths of straight duct; an unvaned mitred
  bend can cost 65 diameters.
- The fan is selected on the index run, plus coil, filter, outlet and return
  losses, with a dirty-filter allowance.
`,
        quiz: [
          {
            q: "A pitot tube and manometer read a velocity pressure of 24 Pa in a duct. What is the air velocity?",
            options: ["3.4 m/s", "6.3 m/s", "14.4 m/s", "29 m/s"],
            answer: 1,
            explain: "v = 1.29 × sqrt(pv) = 1.29 × 4.90 = 6.3 m/s. Checking backwards, 0.6 × 6.3² = 23.8 Pa. Answer 14.4 comes from multiplying 0.6 by 24 instead of using the square-root relationship.",
          },
          {
            q: "Air flows from a 300 mm duct into a 400 mm duct with no fitting losses. What happens to the pressures?",
            options: [
              "Static pressure falls and velocity pressure rises",
              "Velocity pressure falls and some of it is converted back into static pressure",
              "Total pressure rises because the duct is bigger",
              "All three pressures stay the same because the flow is unchanged",
            ],
            answer: 1,
            explain: "Slowing the air reduces velocity pressure, and that energy reappears as static pressure — the static regain effect. Total pressure can never increase without a fan; friction always removes a little of it.",
          },
          {
            q: "Why does a mitred 90° bend get fitted with turning vanes?",
            options: [
              "To reduce the equivalent length from roughly 65 diameters to about 15, cutting pressure loss and noise",
              "To increase the velocity through the bend",
              "To seal the bend against air leakage",
              "To support the duct where it changes direction",
            ],
            answer: 0,
            explain: "An unvaned square bend is one of the most wasteful fittings in a duct system, worth about 65 duct diameters of straight duct. Vanes steer the air around the corner with far less turbulence, dropping the equivalent length to around 15 diameters.",
          },
          {
            q: "The equal-friction method sizes a system by:",
            options: [
              "Keeping the velocity constant in every section",
              "Choosing one friction rate in Pa/m and sizing every section to that rate",
              "Making every branch the same length",
              "Sizing on the shortest run and damping the rest",
            ],
            answer: 1,
            explain: "Equal friction fixes the pressure drop per metre, typically 0.8 to 1.0 Pa/m, and lets diameter and velocity fall out of that choice. Velocity then falls naturally along the run, which is why a properly designed equal-friction system needs very little balancing.",
          },
        ],
      },
      /* --------------------------------------------------------------- */
      {
        id: "air-outlets-and-selection",
        title: "Air outlets: throw, drop, noise and selection",
        minutes: 12,
        simple: "A diffuser is not just a decorative hole in the ceiling. It decides how far the cold air is thrown, how far it falls on the way, how much room air it drags along with it, and how much noise the occupants hear. Think of it as the nozzle on a hose: same water, completely different result depending on the nozzle you fit.",
        refs: REFS,
        content: `
The duct gets the air to the room. The **outlet** decides whether the people in
that room are comfortable or complaining. Two identical rooms with identical
airflow can feel completely different depending on the outlet chosen, where it
sits, and how far it throws.

## The language you need

| Term | Meaning |
|---|---|
| Primary air | The conditioned air delivered from the supply duct |
| Secondary air | Room air dragged into and mixed with the primary air by the jet |
| Supply outlet | Any wall, ceiling or floor outlet for conditioned air |
| Return outlet | Any opening through which air returns to the air-handling unit |
| Outlet velocity | Air speed measured at the face of the outlet, in m/s |
| Diffuser | An outlet discharging air in several directions and planes, usually in the ceiling, usually with a damper |
| Linear diffuser | An outlet discharging from a straight slot, in one or both directions |
| Grille | A cover over an opening through which air passes |
| Register | A grille, often on a sidewall, fitted with a damper or volume control |
| Damper | A device that varies the air volume by changing the free cross-sectional area |
| Turning vanes | Blades set into a bend to turn the air smoothly with minimum turbulence and loss |
| Gross area | Total face area of the grille within its frame |
| Free area | Total area of the actual openings air can pass through, in m² |
| Throw | Distance the jet travels before it slows to terminal velocity |
| Terminal velocity | The average jet velocity at the end of the throw |
| Drop | Vertical distance the bottom edge of a horizontal jet falls between outlet and end of throw |
| Spread | How much the jet widens after leaving the outlet — roughly 30° from the throw direction |
| Aspect ratio | Ratio of the long side of a duct cross-section to the short side |

## The rules that keep people comfortable

- **Terminal velocity** is taken as about **0.25 m/s** for registers and
  **0.5 m/s** for ceiling diffusers. Below that the jet has effectively merged
  with the room air.
- Terminal velocity should be reached **no lower than 2 m above the floor**, so
  the moving air is above head height by the time it dies.
- **Throw should not exceed three-quarters of the room width**, or
  three-quarters of the distance to the point where another outlet's throw ends.

Those two failure modes are worth picturing. **Underthrow** leaves the jet
falling short, so cold heavy air drops in the middle of the room and pools —
occupants sit in a cold column while the perimeter stays warm. **Overthrow**
sends the jet into the far wall still travelling faster than terminal velocity,
where it bounces back and down onto the people below as a draught. Long-throw
outlets need high face velocities, and high face velocities are noisy, which is
why several outlets are usually better than one in a large or long room.

## Patterns, stratification and short-circuits

On **cooling**, cold supply air is denser than room air and tends to fall, so
ceiling outlets that throw horizontally along the ceiling work well — the jet
clings to the ceiling, entrains room air, and gently descends.

On **heating**, the opposite happens: warm air from a ceiling outlet wants to
stay up. The result is **stratification** — a warm layer near the ceiling and
stagnant cool air around people's feet, made worse by a high return grille.
Floor registers discharging vertically distribute warm air far better and cut
the stagnant zone, which is why floor supply is the preferred arrangement in
cold climates.

A related design fault is **short-circuiting**: when supply and return are both
in the ceiling and close together, the supply air can slide straight across into
the return without ever reaching the occupied zone. Badly located return grilles
can also cause stratification during cooling. Both are design problems and are
very hard to fix in the field — which is worth remembering when you are asked to
"balance out" a complaint that balancing cannot cure.

## Noise

Noise is almost always a velocity problem. Keep outlet velocities within the
published limits for the type of space:

| Space | Outlet velocity m/s |
|---|---|
| TV and radio studios | 1.5–2.5 |
| Residences, apartments, hotel bedrooms | 2.5–3.75 |
| Theatres and sound-treated private offices | 2.5–3.75 |
| Private offices, no acoustic treatment | 4 |
| General offices | 5–6 |
| Stores, upper floors | 7.5 |
| Stores, main floor | 10 |

The second source of noise is **over-damping**. Outlets have no volume control
of their own and are normally fitted with an adjustable volume damper (AVD),
either in the neck or as a scoop or stream-splitter damper where a branch leaves
the main duct. The volume should be set mainly by correct duct sizing and fan
pressure, leaving the AVD to make a small final trim. Every degree you close a
damper accelerates the air through the remaining gap, and the noise rises
sharply. A damper more than half closed is a design or balancing failure, not a
solution.

## Choosing the outlet type

| Outlet | Typical use |
|---|---|
| Square or rectangular ceiling diffuser | The standard choice for ceiling supply in offices and homes; available with four-way, three-way, two-way and one-way patterns |
| Sidewall register with adjustable louvres | Exposed duct or wall supply, one-way horizontal throw, louvres adjust spread and direction |
| Linear slot diffuser | Long runs in commercial fit-outs; visually discreet, good along glass lines |
| Swirl diffuser | High induction and rapid mixing, suits high ceilings and high supply-to-room temperature differences |
| Eyelash or jet nozzle | Long throw in halls and atriums |
| Perforated ceiling | Whole ceiling plenum pressurised; very low face velocity |

## Worked selection

A large room roughly 8 m square needs an air volume of **0.23 m³/s** (230 L/s)
from a square four-way ceiling diffuser. Working through a manufacturer's
graphical selection chart — volume up the side, throw across the bottom, with
sloping constant-velocity lines and a family of curves for each nominal size:

- Reading in at 0.23 m³/s, a **300 mm × 300 mm nominal** diffuser sits on the
  velocity scale at about **2.5 m/s** outlet velocity.
- Reading across to the edges of that diffuser's performance envelope gives a
  **maximum throw of 4 m radius** and a **minimum throw of 2.2 m radius**.

Now test it against the rules. Three-quarters of the room width is
0.75 × 8 = 6 m, and the maximum throw of 4 m is comfortably inside that, so the
jet will not slam into the wall and bounce back. The four-way pattern covers the
room from a central position with a 4 m radius reaching the corners of an 8 m
square reasonably well. And 2.5 m/s outlet velocity is within the 2.5–3.75 m/s
band acceptable for a residence, so noise will not be an issue.

If the same 0.23 m³/s were forced through a smaller diffuser, the outlet
velocity would climb, the throw would lengthen past the 6 m limit and the noise
would rise — the same air, the wrong nozzle.

>! Diffusers and grilles are usually the last thing installed and the first thing
>! blamed. Before you touch an outlet damper on a complaint call, check the
>! obvious: filter condition, a crushed flexible duct in the ceiling, and whether
>! the return path from that room is actually open when the door is shut.

## What to remember

- Terminal velocity 0.25 m/s for registers, 0.5 m/s for diffusers, reached no
  lower than 2 m above the floor.
- Throw must stay under three-quarters of the room width; underthrow drops cold
  air in the middle, overthrow bounces draughts off the far wall.
- Heating from ceiling outlets stratifies; floor registers fix it.
- Select on volume, throw and outlet velocity together — one figure alone proves
  nothing.
- Outlets have no volume control of their own; set volume with duct size and use
  the AVD only for a final trim, never more than about half closed.
`,
        quiz: [
          {
            q: "A ceiling diffuser is selected with a maximum throw of 7 m for a room 8 m wide. What is the likely result?",
            options: [
              "Excellent coverage, since the jet reaches the far wall",
              "Overthrow — the jet strikes the far wall above terminal velocity and bounces back down as a draught on the occupants",
              "Stratification of warm air at ceiling level",
              "Reduced noise because the air spreads further",
            ],
            answer: 1,
            explain: "The rule is that throw should not exceed about three-quarters of the room width — 6 m in an 8 m room. A 7 m throw means the air is still moving faster than terminal velocity when it hits the wall, and the rebound lands on people as a draught. Long throws also need high face velocities, so noise increases too.",
          },
          {
            q: "A ducted system heats well at ceiling level but occupants complain of cold feet. What is happening and what is the real fix?",
            options: [
              "The outlets are too small; increase the outlet velocity",
              "Stratification — warm air stays in the upper part of the room; vertical-discharge floor registers distribute warm air far better",
              "The return grille is too low; raise it",
              "The throw is too short; open the outlet dampers fully",
            ],
            answer: 1,
            explain: "Warm supply air from a ceiling outlet is buoyant and stays up, leaving stagnant cool air at floor level; a high return grille makes it worse by pulling the warm layer straight back. Floor registers discharging vertically are the preferred arrangement where heating dominates.",
          },
          {
            q: "During balancing you find you must close an outlet's volume damper to about 20 per cent open to reach design flow. What does that indicate?",
            options: [
              "A correctly balanced outlet",
              "That the branch duct is undersized",
              "That too much pressure is available at that outlet — the branch damper or duct sizing should carry the reduction, because heavy damping at the outlet creates noise",
              "That the fan speed is too low",
            ],
            answer: 2,
            explain: "Volume should be set mainly by duct sizing and by the branch dampers upstream, leaving only a small trim at the outlet. Closing an outlet damper hard accelerates air through the remaining gap and generates noise right where people are sitting. No damper should end up more than about half closed.",
          },
          {
            q: "For a residential ceiling diffuser handling 0.23 m³/s, a catalogue offers a size giving 2.5 m/s outlet velocity and one giving 4.5 m/s. Which is appropriate and why?",
            options: [
              "4.5 m/s, because a higher velocity gives better mixing",
              "2.5 m/s, because residential outlet velocities are kept to about 2.5 to 3.75 m/s for noise",
              "Either, since noise depends only on the fan",
              "4.5 m/s, because it needs a smaller and cheaper diffuser",
            ],
            answer: 1,
            explain: "Recommended outlet velocities for residences, apartments and hotel bedrooms are 2.5 to 3.75 m/s. At 4.5 m/s the outlet will be audible in a quiet bedroom and the throw may also exceed the room limit. Outlet noise is a velocity problem, not just a fan problem.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "pre-start-equipment-checks",
        title: "Equipment checks before start-up",
        minutes: 11,
        simple: "Before you balance anything you have to know the plant is actually ready — fans free to turn, dampers open, filters in, pumps bled, water flushed. It is the same reason a pilot walks around the aircraft before flying it: five minutes of looking prevents the expensive kind of surprise.",
        refs: REFS_ELEC,
        content: `
Balancing measures what a system is doing. If the system is not ready, all you
measure is your own wasted afternoon. Before any adjusting or balancing starts,
work through a check of every item of plant — air side and water side — and
confirm it is genuinely ready to run.

The habit to build here is a specific one: **check the things that will make
your readings lie**. A fire damper left closed, a filter missing, a strainer
blocked or a pump running backwards will all produce plausible-looking numbers
that are completely false.

## Fans

1. Belt tension and alignment correct.
2. Bearings and motor lubricated.
3. Fan secured, with correct clearance in the scroll or ring.
4. Motor secured.
5. Area clean — no tools, rags or offcuts left in the casing. Anything loose
   inside a fan casing becomes a projectile.
6. Flexible connections intact and not stretched or twisted.
7. All keyways in place and every setscrew tight.
8. Vibration isolators correctly adjusted and not bottomed out or shipping-bolted.
9. Condensate drains connected and trapped.

Then confirm electrical power is available, the isolator and control switch
positions are known, inlet and outlet ducts are connected, and for outdoor plant
that weather and air seals are complete.

## Air-conditioning units

Follow the fan list, then add: air intake clear so the fan is not starved on
start-up; filters in place and clean; coil, filter and damper seals to the
casing complete so air cannot bypass the coil or the filter; condensate drains
and traps correct.

## Duct system

1. Fresh air, return air and exhaust dampers all operable.
2. All volume dampers and fire dampers installed and locked in the fully-open
   position for the start of balancing.
3. Duct joints, access doors and hardware tight and not leaking.
4. All terminals and terminal units installed, with their dampers fully open.
5. Coils, duct heaters and terminals checked for leakage at duct connections and
   pipe penetrations.
6. Pitot traverse locations identified and physically accessible — decide this
   before the ceiling goes in, not after.
7. Architectural plenums and ceilings tight; openings above ceilings adequate
   for the air to pass; doors, ceilings and other architectural features
   installed so the air circuits are as designed.

That last group matters more than it sounds. A ceiling used as a return plenum
that leaks into a roof space, or a room with no door undercut and no return
path, will defeat a perfectly built duct system.

## Pumps and water systems

| Item | Checks |
|---|---|
| Pumps | Alignment, coupling and fastening; air bled from the casing; vibration isolation and flexible connections aligned and restrained; lubrication; identification and correct rotation |
| Water piping | Hydrostatically tested, filled, flushed, refilled and vented; strainers cleaned after flushing; pressure-reducing valves checked on both system and make-up; all manual and automatic valves open; expansion tank water level correct; balancing valves and flow meters accessible through ceilings and walls |
| Coils and heat exchangers | Fin faces free of damage and debris; provision made in the pipework for flow and temperature measurement; water valves open and the circuit vented; return bends and tubes undamaged |
| Boilers | Started, tested, controls set and operating as specified; steam or water pressure and temperature as specified |

A blocked strainer after the first flush is normal — construction debris,
jointing compound and pipe scale all end up there. Clean strainers before you
believe a single flow reading.

## Chillers and condensers

Centrifugal and absorption machine start-up is normally supervised by the
manufacturer, under their instructions, and is not trade-level work. For
reciprocating chillers and compressor packages:

1. Purge air from the evaporator water side.
2. Prove the flow switch and the freeze-protection thermostat actually operate.
3. Confirm that the start-up settings and control adjustments are complete.
4. Record suction pressure and suction temperature to verify how the expansion
   valve is behaving and what superheat it is holding.
5. Check the high pressure, low pressure and oil safety cut-out settings and
   prove they operate.
6. Confirm crankcase heaters work.
7. On open compressors, check drives, shaft, seal leakage and coupling
   alignment.
8. Verify the refrigerant charge from the sight glass and any condenser liquid
   level indicator.
9. Confirm unloaders are set to hold the specified suction temperature.
10. Inspect the vibration isolation system and the alignment and restraint of
    flexible connections.

For condensers: check fan sections as for any fan; on evaporative condensers and
cooling towers check water level, float setting and nozzle spray pattern; verify
head pressure control adjustment; inspect vibration isolation.

!FIG[superheat-measure]

## Control system and BMS

1. On pneumatic controls, check the air compressor, after-cooler and air filters.
2. Check the operation and, just as important, the **location** of every input
   sensor. A return air sensor sitting in a stream of supply air, or an outdoor
   sensor in the sun, will make a good control system behave like a broken one.
3. Check and set damper motors and control linkages, and confirm the damper
   actually reaches both end positions.

>! Isolate and lock out before reaching into any fan, and never rely on a control
>! switch being off — a BMS or a time clock can start plant remotely with no
>! warning. Cooling tower and condenser water work carries a Legionella risk:
>! avoid generating aerosols, and follow the site water treatment procedures.

## What to remember

- Balancing readings are only as honest as the plant's readiness.
- All volume, fire and outlet dampers start **fully open**; filters in and clean.
- Bleed pumps, flush and vent water systems, and clean the strainers before
  believing any flow reading.
- Prove the safeties — flow switch, freeze stat, HP, LP and oil cut-outs — before
  the machine is trusted to run unattended.
- Sensor location is a commissioning item, not just sensor operation.
`,
        quiz: [
          {
            q: "Why must all volume dampers and fire dampers be set fully open before air balancing begins?",
            options: [
              "So the fan draws minimum current",
              "So the system is at its lowest resistance and the true fan performance and proportional distribution can be established before any restriction is added",
              "Because dampers are only adjusted by the electrician",
              "So the ductwork can be pressure tested",
            ],
            answer: 1,
            explain: "Balancing works from a known starting point: everything wide open, fan proved, then restriction added deliberately from the trunk outwards. A partly closed damper somewhere makes every measurement downstream meaningless and will send you chasing a fault that does not exist.",
          },
          {
            q: "A newly filled chilled water system gives a flow reading well below design at every terminal. Which pre-start check was most likely missed?",
            options: [
              "The expansion tank was painted",
              "The strainers were not cleaned after flushing, and construction debris is restricting flow",
              "The pump nameplate was not recorded",
              "The chiller crankcase heater was not energised",
            ],
            answer: 1,
            explain: "Construction debris, jointing compound and pipe scale collect in strainers during the first flush, and a blocked strainer throttles the whole circuit. Cleaning strainers after flushing, and bleeding air from pump casings, come before any flow measurement is believed.",
          },
          {
            q: "Which chiller commissioning task is normally carried out under the manufacturer's supervision rather than by the trade technician?",
            options: [
              "Purging air from the evaporator water side",
              "Checking crankcase heater operation on a reciprocating machine",
              "Start-up and check-out of centrifugal and absorption machines",
              "Recording suction pressure and temperature to check superheat",
            ],
            answer: 2,
            explain: "Centrifugal and absorption chiller start-up involves machine-specific procedures, protections and warranty conditions, and is done under the maker's supervision and instructions. The reciprocating machine checks listed alongside it are ordinary trade work.",
          },
          {
            q: "A BMS reports the return air temperature is always 3 K below the actual room temperature. What commissioning check would have caught this?",
            options: [
              "Checking damper motor linkages",
              "Checking the location of input sensors, not just whether they operate",
              "Checking the pneumatic air filters",
              "Checking the flow switch",
            ],
            answer: 1,
            explain: "A sensor can be perfectly calibrated and still be wrong if it sits in a stream of supply air, near a leak, or in direct sun. Control system commissioning checks operation and location of every input sensor for exactly this reason.",
          },
        ],
      },
      /* --------------------------------------------------------------- */
      {
        id: "measuring-airflow",
        title: "Measuring airflow: instruments, fan tests and traverses",
        minutes: 12,
        simple: "Before you can share the air out fairly you have to be able to measure it honestly, and air is a slippery thing to measure. This lesson covers the balancing technician's toolkit and the two skills that make the readings trustworthy: proving the fan first, and traversing a duct at properly measured points instead of poking a probe in and hoping.",
        refs: REFS_DUCT,
        content: `
Careful design can give near-perfect distribution on paper. Reality intervenes:
extra bends get added to dodge a beam, duct sizes change on site, room sizes and
uses change during the fit-out. **Balancing** is the process of measuring and
adjusting until every outlet delivers its specified quantity of air.

In a house that is a couple of hours' work. In a large building there may be
several trunks, dozens of branches and hundreds of outlets — and because every
adjustment changes the flow everywhere else, a technique is needed that avoids
endlessly going back over ground you have already covered.

## Preliminary steps

1. Study the duct drawings and find out what actually changed during
   construction — duct sizes, layout, room sizes and usage.
2. Make a worksheet to record every measurement as the job proceeds.
3. Get manufacturers' catalogues for the diffusers and registers fitted: neck
   velocities, throw, free area and total pressure.
4. Plan the sequence so that the **final** adjustments are at the outlets. Prove
   the fan volume first, then proportion trunks and branches, then trim the
   outlets. Doing it the other way around gives poor distribution and noise.
5. Record readings in the units the instrument gives, and convert later.

> Never do conversions in your head, and never write down a converted figure
> without the raw reading beside it. If someone has to recheck your work — or if
> you have to defend it — the raw numbers are the only evidence you have.

## The instrument kit

| Instrument | What it is for |
|---|---|
| Rotating vane anemometer (self-averaging) | Air velocity at grilles, filters and coil faces |
| Hot wire anemometer | Velocity in ducts and at low velocities; small probe fits a drilled hole |
| Manometer, U-tube or inclined | Duct static and velocity pressure |
| Magnehelic type gauge | Convenient pressure drop readings across filters and coils |
| Pitot tube and hoses | Duct traverses with a manometer, giving velocity pressure |
| Flow measuring hood | Direct volume from ceiling outlets |
| Thermometers | Duct and room temperatures |
| Tachometer or rev counter | Fan speed |
| Clamp meter and multimeter | Fan motor current and voltage against nameplate |
| Measuring tape | Duct and outlet dimensions — every volume calculation needs an area |

Modern instruments log and average digitally, but the physics has not changed.
When you first pick up an air-measuring instrument, experiment with it: take
readings at different angles to the flow, at different distances from filters,
coils, dampers, grilles and fans, and see how much the answer moves. Then settle
on one technique and one instrument and use it the same way every time.
Consistency beats theoretical accuracy in proportional work.

**Air turbulence persists for six to seven duct diameters downstream of any
restriction**, so genuinely accurate readings are only possible in the right
location.

## The flow measuring hood

A conical or pyramid hood placed over an outlet collects all the air and passes
it through a known area. If the hood's outlet area is 0.1 m², then

volume (m³/s) = 0.1 × velocity (m/s)

so a reading of 1.2 m/s at the hood throat is 0.12 m³/s, or 120 L/s. The hood
proportions are designed to keep turbulence low, but some turbulence is
unavoidable and the accuracy varies with the size, type and shape of the outlet.
That is exactly why hoods suit **proportional** balancing: on a system with many
identical outlets the same small error appears in every reading and cancels out
of the ratios. A hood can be used from the floor with the diffuser core left in
place, and the instrument mounts on the side so both hands are free.

## Fan tests

Open the whole system — supply and return — before starting the fan: air valves,
fire dampers, volume controls all open, outside air damper to minimum and return
to maximum. Start the fan, then measure:

- **Direction of rotation** (easily reversed on three-phase; a backward
  centrifugal fan still moves some air, which is what makes this trap dangerous)
- **Speed**, with a rev counter
- **Amperage and voltage** against the nameplate
- **Static pressure**, taken just downstream of the fan, using a probe against a
  drilled hole of at least 6 mm
- **Total supply volume**, measured across the filter, the coil or in the main
  trunk

If the measured speed is within 15 to 20 per cent of specification, do not change
the pulley yet — wait until balancing is complete. Whenever you do change a
pulley, check the motor current immediately, because a small increase in fan
speed produces a disproportionate increase in current.

Volume can be checked at several points, and all of them should agree:

- **Return air grille**, with the outside air damper shut and no plenum leaks
- **Filter**, most accurately on the downstream side
- **Coil face**, downstream. Any face area over about 0.1 m² (roughly
  300 × 300 mm) must be divided into segments and a reading taken in each:
  average m/s = total of all readings ÷ number of readings
- **Supply duct**, by pitot traverse

## Traverses

A single reading in a duct is worthless — velocity varies enormously across the
section. A **traverse** takes readings at carefully measured points, each
representing an equal area, and averages them.

**Rectangular ducts:** divide the section into 16 equal rectangles and read at
the centre of each. For very wide, shallow ducts, rearrange the grid to keep the
sub-areas roughly square.

**Round ducts:** read along both the horizontal and vertical axes, at points
that are the centres of equal-area annular rings. Distance from the centre is
the duct diameter multiplied by a constant:

| Readings per diameter | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| 6 | 0.2041 | 0.3535 | 0.4564 | — | — |
| 8 | 0.1768 | 0.3062 | 0.3953 | 0.4677 | — |
| 10 | 0.1580 | 0.2738 | 0.3535 | 0.4183 | 0.4743 |

**Worked example — a 200 mm duct, six readings per diameter:**

- P1 = 200 × 0.2041 = 40.8 mm from centre
- P2 = 200 × 0.3535 = 70.7 mm from centre
- P3 = 200 × 0.4564 = 91.3 mm from centre

**Worked example — a 400 mm duct, ten-point traverse.** The points are at
0.158 × 400 = 63.2 mm, then 109.5, 141.4, 167.3 and 189.7 mm from centre, on each
side of both axes. Suppose the ten velocities along one axis read 5.2, 5.6, 5.9,
6.1, 6.0, 5.8, 5.5, 5.3, 4.9 and 4.7 m/s.

Sum = 55.0 m/s, so average velocity = 55.0 ÷ 10 = **5.5 m/s**

Duct area = π × 0.2² = 0.1257 m²

Volume = 5.5 × 0.1257 = **0.691 m³/s = 691 L/s**

If a pitot and manometer are used, convert **each** velocity pressure reading to
a velocity first and then average the velocities. Averaging the pressures and
converting once overstates the flow, because velocity varies as the square root
of pressure.

### Where to drill the holes

Test holes belong at least **7.5 duct diameters** (or 7.5 times the long side of
a rectangular duct) downstream of the fan, or of any damper, splitter, bend or
transition. With air straighteners fitted that can come down to about 4
diameters. Any less and turbulence gives uneven, unreliable readings. In
practice, straight lengths are often not available — in that case the readings
are for reference only and must be used proportionally against a base figure,
not quoted as absolute volumes. Seal every hole afterwards with a proper cover
fixed with self-tapping screws.

>! Drilling test holes and taking readings puts you on ladders and scaffolds
>! beside running plant. Isolate and lock out before reaching into any fan or
>! duct access panel, watch for swarf when drilling, and seal and label every hole
>! you make.

## What to remember

- Prove the fan before measuring anything else: rotation, speed, amps, volts,
  static pressure, total volume.
- Pick one instrument and one technique, and use them the same way every time.
- Turbulence persists six to seven diameters past any restriction; test holes go
  at least 7.5 diameters downstream, or 4 with straighteners.
- Traverse at measured points — 16 on a rectangular duct, 10 per diameter on a
  round one — and average.
- Convert each velocity pressure to a velocity before averaging, never after.
- Volume = average velocity × area, every time; always measure the area.
- A hood of known throat area converts a velocity reading straight into a volume,
  and its small consistent error cancels out of proportional ratios.
`,
        quiz: [
          {
            q: "Why must pitot tube test holes be at least about 7.5 duct diameters downstream of a bend, damper or the fan?",
            options: [
              "So the hoses reach the manometer",
              "Because turbulence persists for six to seven diameters after any restriction and makes the velocity profile uneven and readings unreliable",
              "Because the duct is thicker near fittings",
              "To keep the velocity pressure below 100 Pa",
            ],
            answer: 1,
            explain: "Downstream of any disturbance the flow is turbulent and skewed, so traverse points no longer represent equal-area averages. Air straighteners can reduce the requirement to about four diameters. Where no straight length exists, readings are reference-only and must be used proportionally.",
          },
          {
            q: "A ten-point traverse of a 400 mm round duct gives an average velocity of 5.5 m/s. What volume is flowing?",
            options: ["0.22 m³/s", "0.69 m³/s", "2.2 m³/s", "0.44 m³/s"],
            answer: 1,
            explain: "Area = π × 0.2² = 0.1257 m². Volume = 5.5 × 0.1257 = 0.691 m³/s, or 691 L/s. Using the diameter instead of the radius in the area calculation is the usual way this goes wrong.",
          },
          {
            q: "Using a pitot tube and manometer for a traverse, what is the correct way to average the readings?",
            options: [
              "Average the velocity pressures, then convert the average to a velocity",
              "Convert each velocity pressure to a velocity, then average the velocities",
              "Take the highest reading, as it represents the duct centre",
              "Average the readings taken on one axis only",
            ],
            answer: 1,
            explain: "Velocity varies as the square root of velocity pressure, so averaging the pressures first and converting once gives an answer that is too high. Convert each reading, then average. Readings are also taken on both axes of a round duct, not one.",
          },
          {
            q: "You are asked to check the total supply volume of an air-handling unit with a 900 × 600 mm coil face. What is the correct method with a vane anemometer?",
            options: [
              "Take one reading at the centre of the coil and multiply by the face area",
              "Divide the face into segments of about 0.1 m² or less, read each, average the readings and multiply by the total face area",
              "Read at the outlet of the nearest diffuser instead",
              "Measure the static pressure across the coil and read the volume from a chart",
            ],
            answer: 1,
            explain: "Velocity across a coil face is far from uniform, so any face area over about 0.1 m² (roughly 300 × 300 mm) is divided into segments and each is read. The average velocity is the sum of the readings divided by their number, then volume = average velocity × total area.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "proportional-balancing",
        title: "Proportional balancing of the air system",
        minutes: 12,
        simple: "Balancing is sharing out the air so every room gets the share the designer intended. The trick is that closing one damper changes the flow everywhere else, so you never chase absolute numbers outlet by outlet. Instead you set everything to the same fraction of its design flow — like tuning a guitar by getting the strings in tune with each other first, then tightening them all together.",
        refs: REFS_DUCT,
        content: `
With the fan proved and reliable measurements available, the air has to be
shared out. The problem is interaction: every damper you close raises the
resistance of that path, which pushes air into every other path and changes
readings you have already taken. In a house you might get away with going round
twice. In a building with dozens of branches and hundreds of outlets you would
never finish.

The answer is **proportional balancing**. Instead of trying to hit each design
figure absolutely, you set every outlet and branch to the *same fraction* of its
design flow. Ratios do not change when the fan volume changes, so once everything
is proportional, a single correction at the fan lifts the whole system onto
design together.

## Proportioning the branches

Where a trunk divides, share the air out by ratio rather than trying to hit
absolute figures. **Worked example.** A 1500 L/s trunk feeds three branches with
design volumes of A = 600, B = 500 and C = 400 L/s. Measured, they total 1800 L/s
(fan capacity in hand, plus measurement error): A = 800, B = 400, C = 600 L/s.

Proportion ratio = actual total ÷ design total = 1800 ÷ 1500 = **1.2**

Now adjust each branch damper to design volume × 1.2:

- Branch A: 600 × 1.2 = 720 L/s
- Branch B: 500 × 1.2 = 600 L/s
- Branch C: 400 × 1.2 = 480 L/s
- Total 1800 L/s — unchanged, so the fan sees the same system resistance

Every branch now has the same *proportion* of its design flow. Correct the fan
once at the end and every branch lands on design together.

## Proportioning the outlets

Before you start: external doors and windows closed; filters in and clean; fan
proved; fresh and return dampers set for maximum return and minimum fresh air;
main branch dampers set to their correct volumes; fire dampers open; outlet
dampers fully open.

1. Measure the velocity at the outlet **furthest** from the fan and record it.
2. Work out the required velocity from the design volume:
   velocity m/s = design L/s ÷ (outlet area m² × 1000)
3. Calculate the ratio of actual to required velocity — but do **not** adjust
   this outlet.
4. Move to the second-furthest outlet on that branch and adjust it to the same
   ratio.
5. Re-measure the first outlet and record its new velocity, without adjusting it.
6. Repeat outlet by outlet back along the branch, each time setting the new one
   to the ratio and recording the previous one.
7. Do the next branch the same way.
8. Then pick any outlet other than the first or last in each of the two branches,
   measure both, and adjust the splitter or damper of the second branch until
   the ratio of actual to design is equal in both branches.
9. Balance the third branch proportionally, then to the second, and continue
   until all branches and trunks are proportional.

**Worked example.** An outlet with a design volume of 100 L/s is measured with a
flow hood of 0.1 m² throat area.

Required velocity = 100 ÷ (0.1 × 1000) = **1.0 m/s**

The hood reads 0.8 m/s, so the ratio is 0.8 ÷ 1.0 = **0.8 : 1**. The next outlet
along has a design volume of 130 L/s, so its required velocity is
130 ÷ (0.1 × 1000) = 1.3 m/s, and it is set to 1.3 × 0.8 = **1.04 m/s**. Every
outlet in the system ends up at 80 per cent of design — under-supplied, but
evenly and predictably so.

## Correcting the fan

Finally, measure the total return air quantity with the fresh air closed; it
should be close to the supply volume. Calculate the ratio of actual total to
design total and correct the fan speed:

**new fan r/s = (new volume ÷ original volume) × original fan r/s**

**fan pulley OD = (motor pulley OD × motor r/s) ÷ fan r/s**

**Worked example.** Design 1500 L/s; measured 1300 L/s at 12 r/s. The motor runs
at 24 r/s with a 100 mm pulley.

new fan r/s = (1500 ÷ 1300) × 12 = **13.85 r/s**

fan pulley OD = (100 × 24) ÷ 13.85 = **173 mm**

So the fan pulley comes down from its present size to about 173 mm. Check the
current immediately afterwards: fan power varies as the cube of speed, so this
15 per cent speed increase raises absorbed power by (13.85/12)³ = **1.54**, or 54
per cent. That is how an innocent-looking pulley change trips an overload.

## Finishing

- Retest the fan after the pulley change to confirm the volume matches the
  specification.
- Trim the outlet dampers so every outlet is within **10 per cent** of design.
- Make sure **no damper ends up more than 50 per cent closed** — beyond that you
  are manufacturing noise.
- Record all final measurements, including fan performance data.
- Set the fresh air and return air dampers to their specified proportions.
- Submit the tabulated results.

A test report sheet for outlets carries, column by column: outlet number, neck
or hood size, area, design volume, required velocity, the ratio of actual to
required, the individual test readings, the final velocity, the final volume and
comments.

>! Most of this work happens on ladders and scaffolds, under ceilings, with
>! running plant nearby. Isolate and lock out before any pulley or belt change,
>! and re-fit every guard before the fan is restarted.

## Testing and balancing — the short version

For a low-pressure all-air system the whole job reduces to this sequence:

1. Check every damper — duct, fire and outlet — is fully open and all grilles and
   registers are fitted.
2. Number and tabulate every outlet.
3. Measure the output of all outlets and total them to give fan delivery.
4. Check the total at the fan independently, by duct traverse if possible.
5. Work out the ratio of actual to design delivery.
6. Adjust the fan speed to suit the ratio.
7. Measure, check and record the fan motor full-load current.
8. Correct the total output for the adjusted fan speed ratio.
9. Adjust individual duct and outlet dampers to the design quantities.
10. If the measured motor current exceeds the plate rating, check the fan static
    pressure.
11. Submit the tabulated results.

## What to remember

- Work fan, then trunks, then branches, then outlets — never the reverse.
- Proportional balancing sets everything to the same fraction of design; one fan
  correction then lifts the whole system onto design.
- Branch proportion ratio = actual total ÷ design total, and each branch is set
  to design × that ratio.
- Required outlet velocity = design L/s ÷ (area m² × 1000).
- Fan speed scales with volume, but fan power scales with the cube of speed — so
  check the current after any pulley change.
- Finish within 10 per cent of design with no damper more than half closed, and
  write it all down.
`,
        quiz: [
          {
            q: "Three branches with design flows of 600, 500 and 400 L/s measure a total of 1800 L/s against a 1500 L/s design. What flow should branch B be set to?",
            options: ["500 L/s", "550 L/s", "600 L/s", "660 L/s"],
            answer: 2,
            explain: "The proportion ratio is 1800/1500 = 1.2, so each branch is set to design × 1.2. Branch B becomes 500 × 1.2 = 600 L/s. Setting B straight to its design 500 L/s would throw the other two out again, because the branches interact.",
          },
          {
            q: "An outlet with a design volume of 150 L/s is measured with a 0.1 m² flow hood. What velocity corresponds to design flow?",
            options: ["0.15 m/s", "1.5 m/s", "15 m/s", "1.5 L/s"],
            answer: 1,
            explain: "Required velocity = design L/s ÷ (area m² × 1000) = 150 ÷ (0.1 × 1000) = 1.5 m/s. The 1000 converts litres per second to cubic metres per second; forgetting it is the classic factor-of-1000 error.",
          },
          {
            q: "In the proportional method, why is the outlet furthest from the fan measured but NOT adjusted?",
            options: [
              "Because it is usually the noisiest outlet",
              "Because it sets the reference ratio that every other outlet on the branch is matched to — it is the one with the least pressure available, so damping it would only starve it further",
              "Because its damper is normally inaccessible",
              "Because the first outlet always reads high",
            ],
            answer: 1,
            explain: "The index outlet has the least pressure available, so it becomes the benchmark: whatever fraction of design it achieves, every other outlet is set to the same fraction. Throttling it would lower the ratio the whole branch has to match and waste fan energy.",
          },
          {
            q: "Balancing is complete at 1300 L/s against a design of 1500 L/s, with the fan at 12 r/s. What is the new fan speed required, and what should you check straight afterwards?",
            options: [
              "10.4 r/s; check the static pressure only",
              "13.85 r/s; check the motor current, because fan power varies with the cube of speed",
              "13.85 r/s; no further checks are needed",
              "24 r/s; check the belt tension",
            ],
            answer: 1,
            explain: "New fan r/s = (1500/1300) × 12 = 13.85 r/s. A 15 per cent speed rise increases absorbed power by about 54 per cent because power follows speed cubed, so the motor current must be checked immediately against the nameplate.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "hydronic-balancing-and-chiller-tests",
        title: "Hydronic balancing and chiller performance tests",
        minutes: 13,
        simple: "Water systems need balancing for the same reason air systems do: without it, the circuits nearest the pump hog the flow and the far ones never get warm or cold enough. And once everything is flowing correctly, you prove the chiller with two thermometers and a flow reading — the water tells you exactly how many kilowatts the machine is really moving.",
        refs: REFS_HYD,
        content: `
Medium and large air-conditioning systems move their heat around the building in
water rather than air. Chilled and heated water circuits behave exactly like duct
systems in one important way: water takes the easy path, so the circuits nearest
the pump take more than their share and the far ones are starved.

## What an unbalanced water system looks like

- Some rooms never reach setpoint, particularly after a change of load
- Room temperatures hunt continuously at low and medium load, even with
  sophisticated terminal controllers
- The chiller or boiler has ample rated capacity, but that capacity cannot be
  transmitted to the terminals — most obviously on start-up after a weekend or a
  night setback

The reason is simple: a control valve can only control if design flow is
available to it in the first place. Balancing means adjusting the flow with
**balancing valves** until it is, and it has to be done at three levels:

1. **Production units** — design flow through each boiler or chiller, and in most
   cases a *constant* flow. Fluctuating flow reduces production efficiency,
   shortens machine life and makes stable control impossible.
2. **The distribution system** — every terminal able to receive at least design
   flow, whatever the total load on the plant.
3. **The control loops** — proper working conditions for the control valves, with
   primary and secondary flows compatible.

Once the plant is balanced, every room responds the same way, and a central
optimiser or BMS strategy can be applied with confidence.

## Manual balancing valves

Three things are needed: a device that both regulates and measures flow, an
instrument, and a procedure.

A **manual balancing valve** does two jobs — it throttles the flow to a terminal
or branch, and it lets you measure the resulting flow. There are two types:

| Type | How it measures | Notes |
|---|---|---|
| Fixed orifice | Throttling and measuring are separate: a ball or globe valve throttles, a venturi or orifice plate measures. Usually one casting, sometimes screwed together | Measurement accuracy is independent of the valve position |
| Variable orifice | Measures the pressure drop across the throttling valve itself as it is throttled | Fewer parts; flow depends on both pressure drop and handwheel position |

Flow is found from the measured differential pressure and the valve's published
flow coefficient:

**Q = Kv × sqrt(Δp in bar)**, with Q in m³/h

**Worked example.** A balancing valve at its set position has a Kv of 6.3, and
the digital manometer across its test points reads 25 kPa.

25 kPa = 0.25 bar

Q = 6.3 × sqrt(0.25) = 6.3 × 0.5 = 3.15 m³/h = 3150 ÷ 3600 = **0.875 L/s**

The instrument used is a **digital manometer for hydronic balancing** that
measures, records and displays differential pressure, flow and temperature at the
valve — and doubles as the best troubleshooting tool on a water system.

## Interaction, and why method matters

Adjust one balancing valve and the pressure loss in that valve and its pipe
changes, which changes the differential pressure across every other balancing
valve. The circuits are **interactive**: each adjustment disturbs the valves you
have already set.

The various manual methods differ only in how they deal with that interaction.
Some do not compensate at all, so the balancer has to go around the loop several
times until the flows converge. Others compensate directly or indirectly:

- The **basic proportional method** — the water-side equivalent of proportional
  air balancing: set every circuit to the same fraction of design, then correct
  the whole module once at its partner valve
- The **compensated method**, a development of the proportional method that holds
  a reference valve at a fixed differential while the module is set
- **Computerised methods**, where a program in the digital instrument calculates
  the correct settings for a whole module after readings have been taken at every
  valve

Newer options exist: **automatic flow-limiting valves (AFLVs)**, common in
variable-flow systems, and **pressure-independent balancing and control valves
(PIBCVs)**, mainly used in large public and commercial buildings. Neither
removes the need to understand flow: the manual balancing valve remains the
simplest and most reliable way to obtain correct flow at design conditions in a
constant-flow system, and it is the only one that lets you *measure* flow for
diagnosis. Balancing with manual valves also reveals most hydronic abnormalities
and shows up **pump oversizing**, so pump head can then be trimmed down — which
is where the running-cost savings come from.

## Terminal flow — the everyday calculation

The water-side heat equation is the same one used everywhere:

**Q (kW) = mass flow (kg/s) × specific heat (4.187 kJ/kg·K) × temperature
difference (K)**

Since 1 litre of water is very close to 1 kg, litres per second and kilograms per
second are interchangeable for this purpose.

**Worked example.** A fan coil is rated at 20 kW with a design chilled water
temperature rise of 6 K. Its design flow is:

flow = 20 ÷ (4.187 × 6) = 20 ÷ 25.12 = **0.796 L/s**

That figure is what the balancing valve is set to. It also gives a fast
diagnostic afterwards: measure the flow and the water temperature difference
across the coil. If the flow is at design but the temperature difference is much
smaller than 6 K, the coil is not transferring its duty — a fouled coil, a
starved air side or a control valve that is not opening. If the temperature
difference is small because the flow is far above design, the circuit is simply
over-pumped and stealing water from somewhere else.

## Performance testing a chiller

Proving performance against the specification is the last part of commissioning.
There are three ways to test a chiller:

| Method | Advantage | Limitation |
|---|---|---|
| Approved factory test on the packaged unit | The chiller is proved on a test rig, independent of pumps, tower and coils, so it can be eliminated from later fault-finding | Does not prove the site installation |
| On-site test using the building load | Tests the real installation | Only possible in the hottest weather — the building cannot be loaded enough for most of the year, and chiller faults are hard to separate from system faults |
| On-site test using an added heat exchanger | A plate heat exchanger transfers condenser heat back into the chilled water circuit at a controlled rate, with the tower rejecting the excess, so any load can be created at any time of year | Requires extra pipework and isolation of the building load and other chillers |

Whatever the method, the instruments are the same: **thermometers in wells on
each water inlet and outlet, and flow meters** (orifice plate, venturi or
magnetic) on both circuits, plus voltage, current and power factor at the
starter.

### Worked example

A chiller on test gives:

| Reading | Value |
|---|---|
| Evaporator water flow | 45.5 L/s |
| Evaporator water in | 13.3 °C |
| Evaporator water out | 5.6 °C |
| Condenser water flow | 79.5 L/s |
| Condenser water in | 29.5 °C |
| Condenser water out | 35.0 °C |
| Supply voltage | 415 V |
| Current | 920 A |
| Power factor | 0.89 |

**1. Cooling produced in the evaporator**

Q = m × c × ΔT, with ΔT = 13.3 − 5.6 = 7.7 K

Q = 45.5 × 4.187 × 7.7 = **1467 kJ/s = 1467 kW**

**2. Heat rejected at the condenser**

ΔT = 35.0 − 29.5 = 5.5 K

Q = 79.5 × 4.187 × 5.5 = **1830 kJ/s = 1830 kW**

**3. Electrical input power**

Q = (V × A × PF) ÷ 1000 = (415 × 920 × 0.89) ÷ 1000 = **340 kW**

**4. Specific power performance**

input ÷ cooling = 340 ÷ 1467 = 0.232 kW per kW of cooling = **232 W/kW**

which is a coefficient of performance of 1 ÷ 0.232 = **4.3**.

### The check that proves the test

Heat in must equal heat out. The condenser has to reject the cooling done in the
evaporator plus the work put in by the compressor:

1467 + 340 = 1807 kW against a measured 1830 kW — agreement within about 1.3 per
cent, which is well inside instrument tolerance. That single sum validates the
whole test. If the two sides do not agree within a few per cent, something is
wrong with a flow reading, a thermometer or the electrical measurement, and no
conclusion about the chiller can be drawn yet.

> Always know which electrical equation your figures require. A single-phase
> input is V × A × PF; a balanced three-phase input is 1.732 × V × A × PF using
> line values. Getting this wrong changes the answer by 73 per cent — and the
> heat balance above is what catches it.

>! Accuracy discipline matters more here than anywhere else. The evaporator
>! temperature difference is only 7.7 K, so a 0.2 K error in each thermometer is a
>! 5 per cent error in the calculated capacity. Use matched, calibrated
>! thermometers in properly filled wells, let readings stabilise, and take flow
>! and temperature simultaneously at steady load.

## What to remember

- Controllers can only control if design flow is available; balancing valves are
  what make that true.
- Balance at three levels: production units, distribution, control loops.
- Manual balancing valves are fixed orifice (separate measuring element) or
  variable orifice (measures across the throttling valve); flow comes from
  Q = Kv × sqrt(Δp).
- Circuits interact, so use a compensating method — proportional, compensated or
  computerised — rather than going round and round.
- Chiller capacity is m × 4.187 × ΔT on the water side, and the heat balance
  evaporator + input = condenser is the proof that your test is sound.
- Specific power in W/kW, and its inverse the COP, are how chiller performance is
  reported.
`,
        quiz: [
          {
            q: "A chiller evaporator passes 30 L/s with water entering at 12.0 °C and leaving at 6.5 °C. What cooling duty is it producing?",
            options: ["165 kW", "691 kW", "1380 kW", "126 kW"],
            answer: 1,
            explain: "Q = m × c × ΔT = 30 × 4.187 × 5.5 = 691 kW. One litre of water is taken as one kilogram, and the specific heat of water is 4.187 kJ/kg·K. The 165 kW answer comes from omitting the specific heat.",
          },
          {
            q: "A chiller test gives 1467 kW cooling, 340 kW input power and 1830 kW rejected at the condenser. What does comparing these three numbers tell you?",
            options: [
              "Nothing — the circuits are independent",
              "That the machine is rejecting too much heat and the condenser is fouled",
              "That the test is self-consistent, because evaporator duty plus input power (1807 kW) matches condenser rejection within instrument tolerance",
              "That the power factor was measured incorrectly",
            ],
            answer: 2,
            explain: "The condenser must reject the heat absorbed in the evaporator plus the compressor work. 1467 + 340 = 1807 kW against 1830 kW measured is agreement within about 1.3 per cent, which validates the flow, temperature and power readings. A large mismatch means an instrument problem, not a chiller verdict.",
          },
          {
            q: "Why does adjusting one manual balancing valve disturb circuits that were already set?",
            options: [
              "Because the pump speed changes automatically",
              "Because throttling one valve changes the pressure loss in that valve and pipe, which alters the differential pressure across every other balancing valve",
              "Because the water temperature changes",
              "Because fixed-orifice valves cannot hold a setting",
            ],
            answer: 1,
            explain: "The circuits are hydraulically interactive. That is why balancing methods exist that compensate for the interaction — the basic proportional method, the compensated method, and computerised methods — instead of repeatedly re-setting the same valve until it converges.",
          },
          {
            q: "Which chiller test method allows a full-capacity performance test to be run on site in mild weather?",
            options: [
              "A test using the building load",
              "A factory test on the packaged unit",
              "A test using an added plate heat exchanger to return condenser heat into the chilled water circuit, with the tower rejecting the excess",
              "A test with the condenser fans disabled to raise head pressure",
            ],
            answer: 2,
            explain: "The building can only be loaded fully in the hottest weather, and a factory test happens before the machine reaches site. Adding a heat exchanger creates a controlled artificial load at any time of year. Disabling condenser fans is not a load test — it just trips the machine on high pressure.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
