/* =========================================================================
   Course content, module 408 — C.8 Components, applications and piping
   schematics (capstone exam revision).
   Source: Australian Refrigeration and Air-conditioning Vols 1 and 2 (Boyle,
   AIRAH), ancillary equipment and commercial plant chapters; component
   manufacturers' application data; AS/NZS 5149.2.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Practice
   questions are original scenarios written for revision, not reproduced from
   any assessment paper.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — ancillary equipment and system accessories",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — commercial and industrial plant, capacity control and reverse-cycle systems",
    "Component manufacturers' application data (Henry, Sporlan, Danfoss, Emerson) — accumulators, oil separators, EPR and CPR valves, burnout and bi-flow driers, hot gas bypass regulators",
    "AS/NZS 5149.2 — Refrigerating systems and heat pumps: piping, installation, marking and commissioning",
  ];

  const MODULES = [
    {
      id: "cap-components-schematics",
      stream: "capstone",
      title: "C.8 · Components, applications and piping schematics",
      blurb: "Capstone revision on what every ancillary component does, where it sits and why, and a repeatable method for drawing a labelled piping schematic from a written brief.",
      lessons: [

        /* ============================================================== */
        {
          id: "component-answer-method",
          title: "Answering component questions: purpose, position, application",
          minutes: 11,
          simple: "Component questions always want the same three things: what the part is for, where in the pipework it goes, and what sort of system you would find it on. Learn the three-part shape and you can answer about a part you have never touched, because you can reason from where the refrigerant is liquid, where it is hot gas and where it is cold vapour.",
          refs: REFS,
          content: `
A large block of the capstone is component recall. The question is short — name
the purpose of a suction accumulator, say where it is fitted and what type of
system it is normally found on — and so is the answer, provided you have a shape
to pour it into.

## The three-part answer

Every component question in this family wants the same three sentences:

1. **Purpose** — what problem it solves. Not what it is; what it *does*, and for whose benefit.
2. **Position** — which line it sits in (discharge, liquid, suction) and what it sits between.
3. **Application** — the type of system it is normally found on, and why that type needs it.

Give all three and you have answered the question. Give only the first and you
have thrown away two thirds of the marks on a question you knew.

## Why the table has to be understood, not memorised

Under exam pressure a memorised list of sixteen components collapses into a
blur, because nothing in it is connected to anything else. A reasoned answer
does not collapse, because you can rebuild it from one fact you cannot forget:
**the refrigerant is in a different physical condition in each of the three
lines**, and every accessory has to be placed where its condition exists.

!FIG[cycle-loop]

| Line | What is in it | What belongs there | Why |
| Discharge | Hot, high-pressure superheated vapour, carrying oil | Oil separator, hot gas bypass take-off, hot gas defrost take-off, discharge check valve, reversing valve | These parts either need hot gas or need to catch oil while it is still entrained |
| Liquid | High-pressure liquid, ideally subcooled and solid | Receiver, filter-drier, sight glass and moisture indicator, liquid line solenoid, hand valves, metering device, distributor | These parts must see liquid: a drier desiccant works on liquid, a sight glass shows liquid quality, a solenoid must seal on liquid |
| Suction | Low-pressure vapour with some superheat, plus returning oil, plus any liquid that got past the coil | Suction accumulator, EPR, CPR, burnout drier, suction filter | These parts protect the compressor or set evaporator conditions, and both jobs live on the low side |

Ask yourself two questions about any component and the position answers itself:

- **What state must the refrigerant be in for this part to work?** That names the line.
- **What is it protecting, and from what?** That names the end of the line it sits at. Parts that protect the compressor sit near the compressor; parts that protect the metering device sit near the metering device.

## The master revision table

| Component | Purpose | Where it sits | Normally found on |
| Suction accumulator | Traps liquid returning down the suction line and meters it back slowly as vapour, with a metered oil return | Suction line, between the evaporator (or reversing valve) and the compressor, close to the compressor | Low-temperature plant, hot gas defrost systems, reverse-cycle units, wide-load-swing systems |
| Liquid receiver | Stores liquid, absorbs charge variation between operating conditions, keeps a solid liquid seal to the metering device and allows pump-down | High side, immediately after the condenser outlet, before the liquid-line accessories | TX valve systems with variable load: commercial and industrial plant. Not on critically charged capillary systems |
| Evaporator pressure regulator (EPR) | Stops the evaporator pressure falling below a set minimum, holding that coil's temperature up | Suction line at the outlet of the coil it controls, before that branch joins the common suction | Multi-temperature systems on one compressor, high-humidity cool rooms, chillers that must not freeze |
| Crankcase pressure regulator (CPR) | Limits the maximum suction pressure reaching the compressor, preventing motor overload | Suction line immediately before the compressor, after the accumulator | Low-temperature systems that pull down from ambient, hot gas defrost systems, transport refrigeration |
| Burnout (clean-up) drier | Strips acid, moisture and contaminant from the system after a motor burnout | Suction line just before the compressor, with isolation valves each side; often a liquid-line drier as well | Any hermetic or semi-hermetic system after a burnout — a temporary fitment |
| Standard filter-drier | Removes moisture, acid and particulate to protect the metering device and compressor | Liquid line, after the receiver, before the sight glass, solenoid and metering device | Effectively every field-erected or serviced system |
| Oil separator | Separates oil from the discharge gas and returns it to the crankcase before it can log the condenser and evaporator | Discharge line, between compressor and condenser, close to the compressor | Low-temperature plant, long pipe runs and risers, flooded systems, multi-compressor racks, screw compressors, heat pumps |
| Sight glass and moisture indicator | Shows liquid condition (bubbles mean flash gas) and indicates moisture content by colour change | Liquid line, after the filter-drier, as close to the metering device as practical | Commercial systems with a receiver and a TX valve |
| Liquid line solenoid | Electrically operated shut-off that stops liquid feed on thermostat satisfaction, enabling pump-down and preventing off-cycle migration | Liquid line, close to the expansion valve of the coil it serves | Systems with pump-down control and multi-evaporator systems |
| Distributor | Divides the flashing mixture leaving the expansion valve evenly between the parallel circuits of the coil | Directly at the TX valve outlet, feeding equal-length tubes to the coil inlet | Any multi-circuit DX evaporator |
| Diaphragm hand valve | Manual isolation with a diaphragm sealing the stem, so there is no packing to leak | Wherever a section must be isolated for service: either side of the drier, at the receiver outlet, around solenoids and regulators | Commercial and industrial plant where leak-tightness matters |
| Check valve | Allows flow one way only, preventing reverse flow or migration | Discharge lines of multiplexed compressors, hot gas defrost lines, around bi-flow metering devices, condenser drain lines | Heat pumps, multi-compressor plant, hot gas defrost, head-pressure control |
| Reversing (4-way) valve | Reverses the direction of refrigerant flow so the coils swap roles between evaporator and condenser | At the compressor, with connections to discharge, suction, indoor coil and outdoor coil | Reverse-cycle air conditioners and heat pumps |
| Bi-directional (bi-flow) drier | Filters and dries with flow in either direction without releasing what it has already collected | In the liquid line between the two coils of a reverse-cycle system | Heat pumps and reverse-cycle units |
| Hot gas bypass | Feeds discharge gas into the low side to create an artificial load, holding suction pressure up at low load | Teed off the discharge line through a regulator and solenoid, injected at the evaporator inlet or the distributor side port | Systems with wide load swings and no other unloading: process chillers, single-compressor air conditioning, computer-room units |
| Hot gas defrost line | Carries hot discharge gas to the evaporator to melt frost from inside the tubes | Teed from the discharge line after the oil separator, through a solenoid and check valve, to the evaporator | Low-temperature commercial and industrial plant: freezer rooms, blast freezers, ammonia plant |

## Exam technique for this block

- Answer in the order asked: purpose, position, application. Markers work down a list.
- Name the **line** (discharge, liquid, suction) explicitly. "Near the compressor" is ambiguous; "in the suction line immediately before the compressor" is not.
- Give a *type* of system, not a brand or a specific job. "Low-temperature freezer plant" earns the mark; "the one at the fish shop" does not.
- If the question says "list four", write four items. Padding with a fifth weak item can cost you if the marker takes the first four.

## Written practice

**1.** Set out the three-part answer shape for component questions, and explain
why it beats memorising a list.

>? **Model answer**
>
> The shape is: **purpose** (the problem it solves), **position** (which line it
> sits in and what it sits between), **application** (the type of system it is
> normally found on, and why that type needs it).
>
> It beats a memorised list because it is reconstructible. Under pressure a
> rote list has no internal logic to fall back on, so a missing item is simply
> gone. The three-part shape ties the component to the physical condition of the
> refrigerant in each line — hot gas in the discharge line, subcooled liquid in
> the liquid line, cold vapour with oil and possible carryover in the suction
> line — and to what the component is protecting. From those two ideas the
> position can be derived even for a component you have not seen, and the
> application follows from why that type of system creates the problem in the
> first place.

**2.** A candidate is asked where a filter-drier and a burnout drier each go,
and answers "in the pipework" for both. Write the answer that would earn the
marks, and explain why the two driers sit in different lines.

>? **Model answer**
>
> **Standard filter-drier** — purpose: removes moisture, acid and particulate
> from the refrigerant to protect the metering device and the compressor.
> Position: in the **liquid line**, downstream of the receiver and upstream of
> the sight glass, liquid line solenoid and metering device, fitted with the
> arrow in the direction of flow. Application: fitted to effectively every
> commercial system, and mandatory whenever a system has been opened.
>
> **Burnout (clean-up) drier** — purpose: strips the acid, moisture and
> contamination left behind after a compressor motor burnout. Position: in the
> **suction line** immediately before the compressor, with isolating valves each
> side so its pressure drop can be checked and it can be changed; a liquid-line
> drier is usually fitted as well. Application: any hermetic or semi-hermetic
> system after a burnout, as a temporary fitment that is replaced once the
> system runs clean.
>
> They sit in different lines because they have different jobs. The liquid-line
> drier guards the small orifice downstream of it and works best on liquid. The
> burnout drier has to intercept contamination on its way **back to the
> compressor**, which is the suction line — the acid and debris are circulating
> and the compressor is what must be protected.

**3.** Using only the idea that each line carries the refrigerant in a different
condition, work out and justify the correct line for: an oil separator, a
suction accumulator and a sight glass.

>? **Model answer**
>
> **Oil separator — discharge line.** Oil leaves the compressor entrained in the
> hot discharge gas as a mist. That is the only place in the system where the
> oil is concentrated and still moving with the gas, so it is the only place it
> can be separated out efficiently. Fitted between compressor and condenser,
> close to the compressor, with the return line back to the crankcase.
>
> **Suction accumulator — suction line.** Its job is to catch liquid refrigerant
> that has escaped the evaporator before it reaches the compressor. Liquid
> carryover only exists on the low side, and the compressor is what needs
> protecting, so it goes in the suction line close to the compressor.
>
> **Sight glass and moisture indicator — liquid line.** It has to be looking at
> a solid column of liquid for bubbles to mean anything; in a vapour line there
> would be nothing to see. It is fitted downstream of the filter-drier so it
> reports the condition of the liquid actually being delivered to the metering
> device, and as close to that device as practical.
`,
          quiz: [
            {
              q: "A component question asks for purpose, location and system type. Which answer is complete?",
              options: [
                "It is a vessel fitted to the suction line",
                "It catches liquid refrigerant, is fitted in the suction line between the evaporator and the compressor, and is normally found on low-temperature and hot gas defrost systems",
                "It protects the compressor from liquid",
                "It is a suction accumulator",
              ],
              answer: 1,
              explain: "Only that answer supplies all three parts. Naming the part, or giving purpose alone, leaves two thirds of the marks on the table even though the candidate clearly knows what the component is.",
            },
            {
              q: "Which reasoning correctly places a component without memorising a list?",
              options: [
                "Everything protective goes in the liquid line",
                "Work out what physical state the refrigerant must be in for the part to work, then what it is protecting and from what",
                "Anything with a solenoid goes on the discharge line",
                "Accessories are fitted wherever there is room in the plant",
              ],
              answer: 1,
              explain: "The state of the refrigerant names the line — desiccant and sight glasses need liquid, oil separation needs hot gas, liquid interception needs the suction line — and what the part protects names which end of that line it goes to.",
            },
            {
              q: "Why is a burnout drier fitted in the suction line rather than the liquid line?",
              options: [
                "Because desiccant works better on vapour",
                "Because it must intercept circulating acid and debris on the way back to the compressor, which is what needs protecting",
                "Because there is more room in the suction line",
                "Because suction pressure is lower and the drier is not rated for high pressure",
              ],
              answer: 1,
              explain: "After a burnout the contamination is circulating through the whole system, and the target of that contamination is the replacement compressor. A suction-line clean-up drier stands directly in front of it. A liquid-line drier is normally fitted as well, but it guards the metering device.",
            },
            {
              q: "Which set of components all belong in the liquid line?",
              options: [
                "Oil separator, suction accumulator, CPR",
                "Receiver, filter-drier, sight glass, liquid line solenoid",
                "EPR, hot gas bypass regulator, reversing valve",
                "Discharge check valve, burnout drier, distributor tubes",
              ],
              answer: 1,
              explain: "All four in that set need to see high-pressure liquid to work. The other sets mix discharge-line and suction-line components, which is exactly the confusion the line-by-condition method prevents.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "high-side-and-liquid-line",
          title: "High-side and liquid-line components",
          minutes: 12,
          simple: "Between the condenser and the expansion valve the refrigerant is a solid column of liquid, and everything fitted in that stretch is there to keep it that way: a tank to store it, a drier to keep it clean and dry, a window to look at it, a valve to shut it off and a fitting to split it evenly into the coil.",
          refs: REFS,
          content: `
The liquid line is short and it is where most of the accessories live. Each one
has a job that only makes sense on liquid, and each has a defined position
relative to the others. Get the order right and the "why" comes with it.

## Standard order along the liquid line

**Condenser → receiver → hand valve → filter-drier → sight glass and moisture
indicator → liquid line solenoid → expansion valve → distributor → evaporator**

## Liquid receiver

- **Purpose.** A storage vessel on the high side. It holds the refrigerant the system does not need at the moment, so that the charge requirement can change — summer to winter, full load to part load, before and after a defrost — without the liquid line running dry or the condenser flooding. It guarantees a solid, uninterrupted liquid seal to the metering device, and it gives the system somewhere to pump the charge down into for service.
- **Position.** High side, immediately after the condenser outlet, which drains into it by gravity. Everything else in the liquid line comes after it.
- **Found on.** Systems with a thermostatic expansion valve and a varying load — commercial refrigeration, cool rooms, packaged plant, anything with a pump-down cycle. Not fitted to critically charged capillary systems, where the exact charge is the control.
- **Why there.** It has to sit at the lowest-pressure, coolest point of the high side so the condenser can drain into it freely. Putting a receiver anywhere else would let liquid back up in the condenser and raise head pressure.

>! Never fill a receiver completely. Liquid refrigerant expands hard with
>! temperature and a full vessel with no vapour space can be burst by a modest
>! rise in ambient. AS/NZS 5149.2 sets the fill limits and every pressure vessel
>! carries a relief device for the same reason.

## Standard filter-drier

- **Purpose.** Three jobs in one shell: a desiccant core adsorbs moisture (which would otherwise form acid with the oil and refrigerant, or freeze at the expansion valve orifice), activated alumina adsorbs acid, and the filter medium catches particulate before it reaches the small orifice downstream.
- **Position.** Liquid line, after the receiver, before the sight glass, solenoid and metering device. Fitted with the arrow pointing in the direction of flow. Isolating hand valves each side are good practice so it can be changed without recovering the whole charge.
- **Found on.** Essentially every field-erected or serviced system; always replaced when a system is opened.
- **Why there.** Moisture must be removed **before** the pressure drop at the expansion valve, because that is where it would freeze. Particulate must be stopped before the orifice for the same reason. And the desiccant is designed to work in liquid.

## Sight glass and moisture indicator

- **Purpose.** Two indications in one fitting. The glass shows the condition of the liquid: a clear, full glass means solid liquid; bubbles or streaming mean flash gas, from undercharge, a restriction, insufficient subcooling or excessive vertical lift. The moisture indicator is a chemically treated element that changes colour with the moisture content of the refrigerant — commonly green for dry, yellow for wet, with a reference chart printed on the fitting.
- **Position.** Liquid line, downstream of the filter-drier, as close to the metering device as practical. Some plants carry a second glass at the receiver outlet.
- **Found on.** Commercial systems with a receiver and a TX valve.
- **Why there.** Downstream of the drier so it reports what the valve will actually receive, and so a colour change tells you the drier is saturated. Close to the valve so any flash gas generated by line pressure drop or lift is visible.

A clear glass is not proof of correct charge. A grossly overcharged system shows
a clear glass, and so does a system so short of gas that the line is running
vapour. Always read it alongside subcooling.

## Liquid line solenoid

- **Purpose.** An electrically operated shut-off valve. When the space thermostat is satisfied it de-energises and closes, stopping liquid feed while the compressor keeps running and pumps the low side down to the cut-out setting of the low-pressure switch. That is a **pump-down cycle**, and it leaves the evaporator and suction line empty of liquid during the off period, so refrigerant cannot migrate to the crankcase and condense there. In a multi-evaporator system it also gives each coil independent control.
- **Position.** Liquid line, close to the expansion valve of the coil it serves, downstream of the drier and sight glass.
- **Found on.** Commercial systems with pump-down control; any multi-evaporator system; systems where the compressor is colder than the evaporator during the off cycle.
- **Why there.** It must be upstream of the metering device to stop the feed, and close to it so the length of liquid line left charged is small. Fit it in a horizontal run with the coil upright, as the manufacturer requires, or it may not seal.

## Diaphragm hand valve

- **Purpose.** Manual isolation. A metal diaphragm seals the stem from the refrigerant side, so unlike a packed-gland valve there is no stem packing to wear and leak. Used to isolate a section for service without recovering the whole system.
- **Position.** Wherever a section must be isolated: either side of the filter-drier, at the receiver outlet, around solenoids and regulators, on gauge and purge points.
- **Found on.** Commercial and industrial plant where leak-tightness is a design requirement.
- **Why there.** Placed so that the most frequently changed items — driers, solenoids, valves — can be isolated with the least amount of charge trapped or lost.

## Distributor

- **Purpose.** A multi-circuit evaporator has several parallel refrigerant paths. The distributor takes the flashing mixture leaving the expansion valve and splits it evenly between them. Its nozzle accelerates the mixture so the liquid and vapour stay mixed rather than separating, and equal-length distributor tubes give each circuit the same pressure drop.
- **Position.** Bolted directly to the outlet of the expansion valve, with its tubes running to the coil inlet header.
- **Found on.** Any multi-circuit DX evaporator: air conditioning coils, cool room coils, and both coils on a reverse-cycle unit.
- **Why there.** Directly at the valve, because the mixture must be split before it has a chance to separate. Its pressure drop is also why the valve feeding it must be **externally equalised** — the valve outlet sits well above the coil-outlet pressure.

## What to remember

- Order: receiver, drier, sight glass, solenoid, valve, distributor.
- The receiver takes up charge variation and lets you pump down.
- The drier goes before the orifice because that is where moisture would freeze.
- The sight glass goes after the drier so it reports what the valve gets.
- The solenoid enables pump-down and stops off-cycle migration.
- A distributor forces the use of an externally equalised expansion valve.

## Written practice

**1.** A commercial cool room is being piped. State the correct order of the
liquid-line components from the condenser to the coil, and justify the position
of the filter-drier and the sight glass relative to each other.

>? **Model answer**
>
> Order: condenser outlet, **liquid receiver**, isolating **hand valve**,
> **filter-drier**, **sight glass and moisture indicator**, **liquid line
> solenoid**, **thermostatic expansion valve**, **distributor**, evaporator.
>
> The filter-drier goes **before** the sight glass for two reasons. First, the
> glass then shows the condition of the liquid the expansion valve will actually
> receive, after the drier has taken its pressure drop — so any flash gas caused
> by a blocking drier is visible. Second, the moisture indicator element is
> reading the refrigerant **after** treatment, so a yellow indication means the
> drier is saturated and needs changing; downstream of the drier the reading is
> a direct report on the drier's condition, whereas upstream it would only tell
> you the system was wet.
>
> Both go before the solenoid and the expansion valve, because the whole point
> of the drier is to protect the small orifice from moisture freezing and from
> particulate.

**2.** Give the purpose, position and typical application of a liquid line
solenoid valve, and explain what a pump-down cycle protects against.

>? **Model answer**
>
> **Purpose.** An electrically operated shut-off in the liquid line. When the
> space thermostat is satisfied the solenoid de-energises and closes; the
> compressor continues to run and draws the low side down until the
> low-pressure switch cuts it out. It also allows individual evaporators in a
> multi-evaporator system to be controlled separately.
>
> **Position.** Liquid line, downstream of the filter-drier and sight glass, as
> close as practical to the expansion valve of the coil it serves, mounted as
> the manufacturer specifies (usually coil upright, in a horizontal run).
>
> **Application.** Commercial refrigeration with pump-down control, multi-coil
> systems, and any installation where the compressor sits in a cooler place than
> the evaporator.
>
> **What pump-down protects against.** During the off cycle, refrigerant
> migrates to the coldest part of the system and condenses there. If that is the
> compressor crankcase, the liquid refrigerant dissolves into the oil. On the
> next start the crankcase pressure drops, the dissolved refrigerant boils out,
> the oil foams and is pumped away, and the compressor runs with no lubrication
> — plus any liquid standing in the evaporator and suction line is drawn
> straight into the cylinders as a slug. Pumping the low side down before
> shutdown leaves nothing there to migrate.

**3.** A technician reports "bubbles in the sight glass, so the system is short
of gas". Explain why that conclusion is not safe on its own, and list three
other causes of bubbles.

>? **Model answer**
>
> A sight glass shows only whether the liquid arriving at that point is solid or
> flashing. Flashing has several causes, and undercharge is only one of them. A
> clear glass is equally weak as evidence: a badly overcharged system shows a
> clear glass, and a system so empty that the line is running pure vapour can
> also look clear. The reading must be paired with **subcooling** and with head
> and suction pressures before a conclusion is drawn.
>
> Other causes of bubbles at the glass:
>
> - **A restricted filter-drier or liquid line** — the pressure drop across the restriction flashes the liquid; here condenser-outlet subcooling stays normal or high and there is a measurable temperature drop across the drier.
> - **Insufficient subcooling for the installation** — for example a long liquid line or a large vertical lift to a roof-mounted evaporator, where the static head and friction drop the pressure below saturation even on a correct charge.
> - **Low condensing pressure**, often from over-effective head-pressure control in cool weather, leaving too little pressure difference to hold the liquid solid to the valve.
>
> A fourth: a partly closed or undersized hand valve or service valve in the
> liquid line acting as an unintended restriction.
`,
          quiz: [
            {
              q: "Why is the filter-drier fitted upstream of the metering device?",
              options: [
                "To reduce the pressure entering the valve",
                "Because moisture must be removed before the pressure drop at the orifice, where it would freeze, and particulate must be stopped before it can block the orifice",
                "Because desiccant only works at low pressure",
                "To provide a mounting point for the sight glass",
              ],
              answer: 1,
              explain: "The orifice is the coldest, smallest passage in the system, so it is where free moisture freezes and where debris lodges. The drier's whole purpose is to stand in front of it. It is not there to drop pressure — a drier that does drop pressure noticeably is a fault.",
            },
            {
              q: "The main purpose of a liquid receiver is to:",
              options: [
                "Subcool the liquid before it reaches the expansion valve",
                "Store liquid so charge requirements can vary, keep a solid liquid seal to the metering device, and allow pump-down",
                "Separate oil from the liquid refrigerant",
                "Reduce condensing pressure",
              ],
              answer: 1,
              explain: "A receiver is a buffer store on the high side. It does not subcool — liquid sitting in a receiver is at saturation, which is why receiver systems often need a separate subcooling arrangement or generous liquid-line design. Oil separation happens in the discharge line.",
            },
            {
              q: "A liquid line solenoid closing on thermostat satisfaction while the compressor keeps running is called:",
              options: ["Hot gas bypass", "A pump-down cycle", "Head pressure control", "Unloading"],
              answer: 1,
              explain: "Pump-down empties the low side of liquid before shutdown, so nothing can migrate to the crankcase during the off period and no slug is waiting in the evaporator at the next start. Hot gas bypass and unloading are capacity-control methods, not shutdown methods.",
            },
            {
              q: "A distributor is fitted directly at the expansion valve outlet because:",
              options: [
                "It reduces the pressure drop through the coil",
                "The flashing mixture must be split before liquid and vapour separate, and the nozzle keeps it mixed",
                "It allows the bulb to be mounted closer to the valve",
                "It is the only place with enough clearance",
              ],
              answer: 1,
              explain: "Once the mixture slows or turns, liquid and vapour separate and the circuits are fed unevenly. The nozzle accelerates and homogenises the flow, and equal-length tubes give every circuit the same drop. Its own pressure drop is why the valve must be externally equalised.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "suction-side-and-compressor-protection",
          title: "Suction-side and compressor-protection components",
          minutes: 12,
          simple: "Everything fitted between the coil and the compressor is there to make sure the compressor gets what it can handle: dry vapour, at a pressure its motor can pull, with its oil coming back and without a slug of liquid arriving unannounced.",
          refs: REFS,
          content: `
A compressor is a vapour pump with a bearing system that depends on oil. Every
component in this lesson exists because one of those two facts is under threat.

## Suction accumulator

- **Purpose.** A vessel in the suction line that intercepts liquid refrigerant returning from the evaporator, holds it, and meters it back to the compressor slowly as vapour instead of letting it arrive as a slug. Inside is an inverted U-tube whose outlet is near the top of the vessel, so only vapour is drawn off; a small metered orifice at the bottom of the U-tube bleeds oil, plus a controlled trickle of liquid refrigerant, back into the suction gas at a rate the compressor can handle.
- **Position.** Suction line, between the evaporator (or, on a reverse-cycle unit, the reversing valve) and the compressor suction, mounted as close to the compressor as practical and upright.
- **Found on.** Low-temperature plant, hot gas defrost systems, reverse-cycle units and heat pumps, flooded systems, transport refrigeration, and anything with large or sudden load swings.
- **Why there.** It must be the last thing before the compressor, because it is the last chance to intercept liquid. On a heat pump it must be downstream of the reversing valve, because there is only one suction path in either mode and liquid arrives in both.

The oil-return orifice is the detail that gets missed. Without it, oil collects
in the accumulator and never returns, and the compressor loses its charge of oil
just as surely as if it had been drained.

## Oil separator

- **Purpose.** A little oil always leaves the compressor with the discharge gas as a fine mist. The separator takes that mist out of the gas — by impingement on a screen, by centrifugal action, or with a coalescing element — collects it in a sump, and returns it directly to the crankcase through a float-operated valve. This keeps oil out of the condenser and evaporator, where it would coat tube walls and destroy heat transfer, and keeps the crankcase level up.
- **Position.** Discharge line, between the compressor and the condenser, close to the compressor. The oil return line runs from the separator sump back to the crankcase, usually through a sight glass and an isolating valve.
- **Found on.** Low-temperature plant (cold, viscous oil returns poorly), systems with long pipe runs or tall risers, flooded evaporators, multi-compressor racks, screw compressors (where it is essential, not optional), and heat pumps.
- **Why there.** It has to be in the discharge line because that is the only place the oil is concentrated and entrained in a fast-moving gas stream. Close to the compressor so the gas has not yet lost velocity and so the return line is short.

>! The oil return line from a separator is at discharge pressure on one side and
>! crankcase pressure on the other. If the float valve sticks open, hot discharge
>! gas blows straight into the crankcase. Fit the isolating valve so the line can
>! be shut off, and investigate a hot oil return line rather than ignoring it.

## Crankcase pressure regulator (CPR)

- **Purpose.** Limits the **maximum** suction pressure that can reach the compressor. Also called a suction pressure regulator or holdback valve. On a warm start or after a defrost, a low-temperature evaporator sits far above its design temperature and the suction pressure is correspondingly high. High suction pressure means high refrigerant density, high mass flow and a heavily loaded motor — enough to trip the overload or stall the machine. The CPR throttles to hold the pressure at the compressor at or below its setting until the system pulls down.
- **Position.** Suction line, immediately before the compressor, downstream of the accumulator. It senses the pressure on its **outlet** side — the compressor side — because that is the pressure it exists to limit.
- **Found on.** Low-temperature systems that pull down from ambient: freezer rooms, blast freezers, ice machines, transport refrigeration, and any system with hot gas defrost.
- **Why there.** Anything upstream of it in the suction line still sees the high evaporator pressure; only the compressor is protected. Downstream of the accumulator so that liquid is intercepted before the regulator, which is designed for vapour.

## Check valve

- **Purpose.** Permits flow one way and blocks it the other. In refrigeration that solves several problems: stopping hot discharge gas backing into a compressor that has stopped while others run; stopping liquid or vapour migrating backwards into a shut-down evaporator; steering flow through the correct metering device on a bi-flow heat pump circuit; and holding pressure in a hot gas defrost line.
- **Position.** Wherever a one-way condition is needed — discharge lines on multiplexed compressors, around a bi-flow expansion valve pair, in a hot gas defrost line, in a condenser drain line where head pressure control floods the condenser.
- **Found on.** Heat pumps and reverse-cycle units, multi-compressor plant, hot gas defrost systems, systems with flooded-condenser head pressure control.
- **Why there.** Always immediately at the junction where reverse flow would otherwise occur, with the arrow marked in the intended direction of flow. A check valve installed backwards is a blockage; a check valve installed in the wrong branch defeats the whole arrangement.

## Burnout (clean-up) drier

- **Purpose.** After a compressor motor burnout the system is contaminated with acid, moisture, carbon and varnish. A burnout drier has a much higher activated-alumina content than a standard drier so it can strip acid quickly, plus a fine filter for carbon. Its job is to clean the circulating refrigerant before it can attack the replacement compressor.
- **Position.** Suction line, immediately before the compressor, with isolating valves and pressure taps each side so the pressure drop across it can be measured. A liquid-line drier is normally fitted at the same time.
- **Found on.** Any hermetic or semi-hermetic system after a burnout.
- **Why there and why temporary.** The contamination is circulating and the compressor is the target, so the drier stands directly in front of it. It is a temporary fitment: check the pressure drop and acid level after a day or two of running, change the cores if needed, run for a further period, then replace with a standard liquid-line drier once tests show the system is clean. Left in permanently it becomes a suction-line restriction.

## Comparison at a glance

| Component | Line | Sits between | Protects against |
| Suction accumulator | Suction | Evaporator (or reversing valve) and compressor | Liquid slugging and oil loss |
| Oil separator | Discharge | Compressor and condenser | Oil logging the coils and starving the crankcase |
| CPR | Suction | Accumulator and compressor | Motor overload on high suction pressure |
| Check valve | Various | The two sides of a possible reverse flow | Backflow and migration |
| Burnout drier | Suction | System and compressor, temporarily | Acid attack on a replacement compressor |

## Written practice

**1.** Give the purpose, position and normal application of a suction
accumulator, and explain the function of the small orifice at the bottom of its
internal U-tube.

>? **Model answer**
>
> **Purpose.** To intercept liquid refrigerant returning down the suction line
> and hold it, releasing it back to the compressor slowly as vapour so that the
> compressor never receives a slug of liquid.
>
> **Position.** In the suction line between the evaporator outlet — or, on a
> reverse-cycle unit, between the reversing valve suction port — and the
> compressor suction, mounted upright and as close to the compressor as
> practical.
>
> **Application.** Low-temperature plant, hot gas defrost systems, reverse-cycle
> units and heat pumps, flooded systems, transport refrigeration, and any system
> subject to large or sudden load swings.
>
> **The orifice.** The internal pick-up tube draws from near the top of the
> vessel so it takes vapour only, which means anything liquid — including the
> oil that came back with the gas — would otherwise stay in the bottom for ever.
> The small metered hole at the bottom of the U-tube bleeds that pool back into
> the suction stream at a controlled rate: enough to return the oil to the
> compressor continuously, but slow enough that the refrigerant coming with it
> boils off in the suction gas rather than arriving as liquid. Without it the
> compressor would be starved of oil.

**2.** A freezer room with hot gas defrost trips its compressor overload every
time it restarts after a defrost. The charge, condenser and airflow are all
correct. Name the component that is either missing or misadjusted, explain the
mechanism, and say exactly where it belongs.

>? **Model answer**
>
> The component is a **crankcase pressure regulator (CPR)**, also called a
> suction pressure regulator or holdback valve.
>
> **Mechanism.** At the end of a hot gas defrost the evaporator and its
> refrigerant are far warmer than the design condition. When the compressor
> restarts, the suction pressure it sees is very high, so the vapour entering
> the cylinders is dense, mass flow is high, and the power required is far above
> the design figure. A motor sized for low-temperature operation cannot carry
> that load, so the overload trips. The same thing happens on any warm
> pull-down.
>
> **Where it belongs.** In the suction line immediately before the compressor,
> downstream of the suction accumulator. It senses the pressure on its outlet
> (compressor) side and throttles to hold that pressure at or below its setting
> until the room pulls down and the suction pressure falls naturally.
>
> If a CPR is already fitted, it is set too high or is stuck open, and should be
> adjusted down to the compressor manufacturer's maximum continuous suction
> pressure and rechecked on the next defrost recovery.

**3.** Explain why an oil separator is fitted in the discharge line rather than
anywhere else, and give three types of system where one is normally specified.

>? **Model answer**
>
> Oil leaves the compressor as a fine mist entrained in the hot discharge gas.
> The discharge line is the only point in the circuit where the oil is both
> concentrated and moving fast enough for impingement, centrifugal or coalescing
> separation to work. Downstream of that, in the condenser and liquid line, the
> oil is dissolved or dispersed through a much larger volume of refrigerant and
> cannot practically be recovered; in the suction line what is left of it is
> returning slowly along the pipe wall. So the separator is fitted between the
> compressor and the condenser, close to the compressor, with a float-controlled
> return line back to the crankcase.
>
> Three applications:
>
> - **Low-temperature plant** — cold oil is viscous and returns poorly along suction lines, so intercepting it before it leaves the compressor is far more reliable.
> - **Systems with long pipe runs or tall risers** — the further the oil has to travel and the higher it has to be lifted, the more of it is in circulation at any moment and the more the coils are logged.
> - **Screw compressors and multi-compressor racks** — a screw circulates large quantities of oil by design, and on a rack the oil must be shared correctly between machines; separation is not optional in either case.
>
> Flooded evaporators and heat pumps are two further examples.
`,
          quiz: [
            {
              q: "The small metered orifice at the bottom of a suction accumulator's internal U-tube exists to:",
              options: [
                "Drain the vessel during pump-down",
                "Return oil and a controlled trickle of liquid refrigerant to the compressor at a safe rate",
                "Equalise pressure across the accumulator",
                "Allow the accumulator to be charged with refrigerant",
              ],
              answer: 1,
              explain: "The pick-up tube draws vapour from the top, so oil arriving with the returning gas would otherwise be trapped for ever. The orifice bleeds the pool back slowly enough for the refrigerant to boil off in the suction gas but fast enough to keep the compressor lubricated.",
            },
            {
              q: "A crankcase pressure regulator is fitted:",
              options: [
                "At the evaporator outlet, sensing its inlet pressure",
                "In the suction line immediately before the compressor, sensing its outlet pressure",
                "In the liquid line before the expansion valve",
                "In the discharge line after the oil separator",
              ],
              answer: 1,
              explain: "The CPR limits the pressure that reaches the compressor, so it must sit right in front of it and sense the compressor side. A regulator at the evaporator outlet sensing inlet pressure is an EPR, which does the opposite job — it holds coil pressure up rather than compressor pressure down.",
            },
            {
              q: "On a reverse-cycle unit, the suction accumulator must be fitted:",
              options: [
                "At the outlet of the outdoor coil only",
                "Downstream of the reversing valve, in the common suction line to the compressor",
                "In the liquid line between the coils",
                "Upstream of the oil separator",
              ],
              answer: 1,
              explain: "In cooling and in heating, whichever coil is acting as the condenser dumps liquid toward the suction side at changeover. There is only one suction path — from the reversing valve to the compressor — so that is the only position that protects the compressor in both modes.",
            },
            {
              q: "A burnout drier is described as a temporary fitment because:",
              options: [
                "Its desiccant expires after a few weeks regardless of use",
                "Once the system is clean it is only a suction-line restriction, so it is removed and replaced with a standard liquid-line drier",
                "It cannot withstand normal suction pressure for long",
                "It only works while the system is under vacuum",
              ],
              answer: 1,
              explain: "It is fitted to clean up circulating acid and carbon after a burnout, with taps each side so its pressure drop can be monitored. Once tests show the system is clean it has no remaining function and its pressure drop would only cost capacity and suction superheat.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "regulators-and-capacity-control",
          title: "EPR, CPR and hot gas bypass: holding conditions where you want them",
          minutes: 12,
          simple: "Three valves solve three different pressure problems. One stops a coil getting too cold, one stops the compressor being asked to do too much work, and one gives the compressor something to do when the real load has disappeared. Mixing them up is the classic exam mistake, and the giveaway is which side of itself each one is watching.",
          refs: REFS,
          content: `
The EPR and the CPR look similar, sit in the same line and are often confused.
Hot gas bypass is a third answer to a related problem. Learn them as a set,
because the question that separates them is always "which pressure is it
sensing, and which way is it protecting?"

## Evaporator pressure regulator (EPR)

- **Purpose.** Prevents the evaporator pressure from falling **below** a set minimum, which holds the coil's saturation temperature — and therefore its surface temperature — up at a chosen value.
- **How it senses.** It sits in the suction line at the coil outlet and responds to its **inlet** pressure, which is the evaporator pressure. When that pressure falls to the setting, the valve throttles, restricting flow out of the coil until the pressure recovers.
- **Position.** In the suction line, at the outlet of the evaporator it controls, **before** that branch joins the common suction line.
- **Found on.**
  - Multi-temperature systems on one compressor, where the compressor must pull the suction line down to suit the coldest coil while the warmer coils must be held up.
  - High-humidity rooms — flowers, produce, some cheese and meat rooms — where the coil must stay above 0 °C so it does not frost and does not dehydrate the stock.
  - Water chillers and process coolers where freezing the fluid would be a disaster.
- **Why there.** It has to be downstream of the coil so that the coil is on its high-pressure side; put it anywhere else and it throttles something other than the coil it is protecting.

An EPR always costs capacity and efficiency on the coil it controls, because it
adds pressure drop. That is the price of the control, and it is why you only fit
one where the coil genuinely must be held up.

## Crankcase pressure regulator (CPR)

- **Purpose.** Prevents the suction pressure at the compressor from rising **above** a set maximum, protecting the motor from overload during warm pull-down or defrost recovery.
- **How it senses.** It responds to its **outlet** pressure — the compressor side. When that pressure rises to the setting, the valve throttles, starving the compressor until the system pulls down.
- **Position.** Suction line immediately before the compressor, downstream of the accumulator.
- **Found on.** Low-temperature plant, hot gas defrost systems, blast freezers, ice machines, transport refrigeration.

## Telling them apart

| | EPR | CPR |
| Limits | A minimum evaporator pressure | A maximum compressor suction pressure |
| Senses | Its inlet (the coil side) | Its outlet (the compressor side) |
| Position | Suction line at the outlet of one evaporator | Suction line immediately before the compressor |
| Protects | The product, the coil surface, the chilled fluid | The compressor motor |
| Typical system | Multi-temperature systems, high-humidity rooms, chillers | Low-temperature plant, hot gas defrost, transport |

A one-line memory hook: the **E**PR looks back at the **E**vaporator; the
**C**PR looks forward at the **C**ompressor.

## Hot gas bypass

- **Purpose.** Capacity control at low load. When the real load falls away, a fixed-capacity compressor keeps pumping, suction pressure falls, the coil ices, and the machine either short-cycles on the low-pressure switch or runs at a compression ratio it was never designed for. Hot gas bypass introduces a **false load**: discharge gas is fed into the low side through a modulating regulator, keeping suction pressure at or above a set minimum so the machine can run continuously at reduced net capacity.
- **How it senses.** The regulator responds to the pressure **downstream of itself** — the evaporator or suction pressure. As that falls toward the setting, the valve opens progressively.
- **Position.** Teed off the discharge line, downstream of the oil separator, through a solenoid valve and the hot gas bypass regulator. There are two injection points:
  - **Preferred: into the evaporator inlet**, at the auxiliary side connection on the distributor. The hot gas is desuperheated by the boiling refrigerant in the coil, the coil keeps a reasonable velocity so oil keeps moving, and the compressor receives properly conditioned suction gas.
  - **Alternative: into the suction line** downstream of the coil. Simpler to pipe, but the compressor then receives very hot gas and needs a separate liquid-injection desuperheater to keep discharge temperature and motor temperature under control, and oil return in the coil suffers.
- **The solenoid.** A separate solenoid in the bypass line, interlocked to close when bypass is not wanted — when the compressor is off, during pump-down, or during a defrost — so the regulator cannot leak discharge gas into the low side and destroy efficiency or prevent a pump-down completing.
- **Found on.** Systems with wide load variation and no other means of unloading: process and water chillers, single-compressor air conditioning, computer-room and process-control units, some supermarket cases.
- **Why not just let it cycle?** Because frequent starting overheats motors, wears contactors, upsets oil return and produces temperature swings the process cannot tolerate. Bypass is the trade-off: energy is wasted deliberately to keep control stable.

>! Hot gas bypass consumes full compressor power while delivering reduced useful
>! cooling. It is a control solution, never an efficiency solution, and it must
>! never be used to mask an oversized compressor, a fouled coil or an
>! undercharge.

## Related: hot gas defrost

Hot gas defrost uses the same source — discharge gas — for a different purpose.
Instead of a modulating regulator holding a pressure, a solenoid opens a line
that dumps hot gas into the **evaporator** on a timer or termination sensor,
melting frost from **inside** the tubes.

!FIG[frost-spiral]

- **Position.** Teed from the discharge line, after the oil separator and before the condenser, through a solenoid valve and usually a check valve, to the evaporator inlet or its suction header depending on the arrangement.
- **Why an accumulator is mandatory with it.** During defrost the hot gas condenses in the cold coil, so a large slug of liquid is produced and heads for the compressor. The suction accumulator catches it.
- **Why a CPR usually goes with it.** At the end of the defrost the coil is warm and the suction pressure on restart is far above design, which is exactly the motor-overload condition the CPR exists for.
- **Found on.** Low-temperature commercial and industrial plant — freezer rooms, blast freezers, industrial ammonia plant, multi-evaporator racks — where electric defrost would be slow, costly and would add heat to the space.

## What to remember

- EPR: minimum evaporator pressure, senses inlet, at the coil outlet, protects the product.
- CPR: maximum suction pressure, senses outlet, at the compressor, protects the motor.
- Hot gas bypass: false load at low load, senses downstream pressure, injected preferably at the distributor side port, always with a solenoid.
- Hot gas defrost: same gas source, different job — melts frost from inside, and demands an accumulator and usually a CPR.

## Written practice

**1.** A single condensing unit serves a cool room held at 2 °C and a freezer
room held at −22 °C. Explain why an EPR is required, which room it is fitted to,
where exactly it goes, and what would happen without it.

>? **Model answer**
>
> The compressor can only produce one suction pressure. To hold the freezer at
> −22 °C the common suction line must be pulled down to roughly a −30 °C
> saturation temperature. Both coils are connected to that same suction line, so
> without a regulator the cool room coil would also be pulled down to about
> −30 °C.
>
> The EPR is fitted to the **cool room** — the warmer of the two evaporators. It
> goes in that room's **suction line, at the coil outlet, upstream of the point
> where the branch joins the common suction line**. It senses its **inlet**
> pressure, which is the cool room evaporator pressure, and throttles whenever
> that pressure tries to fall below the setting — set for roughly a −5 °C
> saturation temperature for a 2 °C room.
>
> Without it: the cool room coil would run at about −30 °C, so it would frost
> heavily and continuously, airflow would collapse as the frost built, the room
> would be badly dehydrated and the stock would dry out and suffer freeze
> damage, and the coil would need constant defrosting. Room temperature control
> would also become erratic, since the coil would over-cool the space every time
> the freezer called.
>
> The freezer coil gets no regulator: it is the lowest-temperature evaporator
> and it sets the suction pressure, so a regulator there would only add pressure
> drop and lose capacity.

**2.** Distinguish an EPR from a CPR under four headings: what it limits, which
pressure it senses, where it is fitted, and what it protects.

>? **Model answer**
>
> | | EPR | CPR |
> | Limits | The **minimum** evaporator pressure — stops the coil pressure falling below the setting | The **maximum** suction pressure at the compressor — stops it rising above the setting |
> | Senses | Its **inlet** pressure, which is the evaporator pressure | Its **outlet** pressure, which is the compressor suction pressure |
> | Fitted | Suction line at the outlet of the evaporator it controls, before that branch joins the common suction | Suction line immediately before the compressor, downstream of the accumulator |
> | Protects | The product, the coil surface and any chilled fluid — by holding coil temperature up | The compressor motor, from overload during warm pull-down or defrost recovery |
>
> Memory hook: the EPR looks back at the evaporator, the CPR looks forward at
> the compressor.

**3.** A process chiller with one fixed-capacity compressor short-cycles badly
whenever the process load drops away. Explain how hot gas bypass would solve it,
where the bypass line is taken from and injected, why a solenoid is fitted in
the line, and one drawback the client should be told about.

>? **Model answer**
>
> **How it solves it.** With the real load gone, suction pressure falls until
> the low-pressure switch cuts the machine out; it restarts as soon as pressure
> recovers, and the cycle repeats. Hot gas bypass creates an artificial load: a
> modulating regulator senses the pressure downstream of itself and opens
> progressively as suction pressure approaches its setting, feeding discharge
> gas into the low side. The compressor keeps running continuously at reduced
> net capacity and the low side never falls to the cut-out point, so cycling
> stops and the leaving fluid temperature holds steady.
>
> **Where from and where to.** Teed off the **discharge line downstream of the
> oil separator**, through a solenoid valve and the hot gas bypass regulator.
> Preferred injection is into the **evaporator inlet at the distributor's
> auxiliary side connection**, so the hot gas is desuperheated by the boiling
> refrigerant and coil velocity is maintained for oil return. Injecting into the
> suction line instead is simpler but delivers very hot gas to the compressor
> and then requires a liquid-injection desuperheater.
>
> **Why a solenoid.** So the bypass can be positively shut off when it is not
> wanted — compressor off, during pump-down, during defrost. Without it, a
> regulator that leaks by would bleed discharge gas into the low side
> continuously, waste energy and prevent a pump-down cycle from ever completing.
>
> **Drawback to disclose.** The compressor draws close to full power while
> delivering reduced useful cooling, so running costs at low load are high. It
> is a control fix, not an efficiency fix; if low load is the normal condition,
> a properly staged or variable-capacity plant would be the better answer.
`,
          quiz: [
            {
              q: "An EPR valve is fitted at the outlet of an evaporator and senses:",
              options: [
                "Its outlet pressure, to protect the compressor motor",
                "Its inlet pressure, to stop the evaporator pressure falling below a set minimum",
                "Discharge pressure, to control condensing",
                "Liquid line pressure, to control the metering device",
              ],
              answer: 1,
              explain: "The coil is on the EPR's inlet side, so sensing inlet pressure is sensing evaporator pressure. It throttles when that pressure tries to fall too low, holding the coil temperature up. Sensing outlet pressure to protect the motor is what a CPR does.",
            },
            {
              q: "On a two-temperature system with a cool room and a freezer room on one compressor, the EPR goes:",
              options: [
                "In the freezer room suction line",
                "In the cool room suction line at that coil's outlet, before it joins the common suction",
                "In the common suction line before the compressor",
                "In the liquid line to the cool room",
              ],
              answer: 1,
              explain: "The compressor must pull the common suction down for the freezer, which is the lowest-temperature coil and therefore sets the suction pressure. The warmer coil is the one that must be held up, so the regulator goes in its branch, upstream of the junction.",
            },
            {
              q: "The preferred injection point for hot gas bypass is the evaporator inlet at the distributor side connection because:",
              options: [
                "It is the shortest pipe run",
                "The hot gas is desuperheated by the boiling refrigerant and coil velocity is maintained for oil return",
                "It avoids the need for a regulator",
                "The distributor nozzle meters the bypass flow",
              ],
              answer: 1,
              explain: "Injecting into the suction line instead sends very hot gas straight to the compressor and needs a liquid-injection desuperheater, while leaving the coil with little flow and poor oil return. Injecting at the coil inlet solves both problems at once.",
            },
            {
              q: "Why is a suction accumulator effectively mandatory on a system with hot gas defrost?",
              options: [
                "To store the extra charge needed for defrost",
                "Because hot gas condenses in the cold coil during defrost and a slug of liquid heads for the compressor",
                "To reduce the noise of the defrost solenoid",
                "To separate oil from the defrost gas",
              ],
              answer: 1,
              explain: "Defrost deliberately puts hot gas into a coil cold enough to condense it, so liquid is produced in the low side by design. The accumulator intercepts it and meters it back as vapour. Oil separation is a discharge-line job.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "reverse-cycle-components",
          title: "Reverse-cycle components: the 4-way valve and its companions",
          minutes: 11,
          simple: "A reverse-cycle unit is an ordinary system with a valve that can swap which way the gas goes round. Once the flow can run either way, some ordinary parts stop working — a one-way drier, a one-way expansion valve — so each of them gets a two-way version or a pair with check valves around them.",
          refs: REFS,
          content: `
A reverse-cycle machine has the same four basic parts as any other system. What
makes it different is that two of them swap jobs on demand, and every accessory
in the reversible part of the circuit has to cope with flow in both directions.

!FIG[reversing-valve]

## Reversing (4-way) valve

- **Purpose.** Reverses the direction of refrigerant flow through the coils so the same machine can cool or heat. In cooling, the indoor coil is the evaporator and the outdoor coil is the condenser; energise or de-energise the pilot solenoid and they swap.
- **How it works.** A slide inside the main body is moved by pressure difference, not by the solenoid directly. A small pilot solenoid valve ports discharge pressure to one end of the slide and suction pressure to the other; the slide shifts and connects the ports the other way round. This is why a reversing valve will not change over on a system with too little pressure difference — a very low charge or a compressor that is not pumping will leave it stuck mid-stroke.
- **Position.** At the compressor, with four connections: **compressor discharge**, **compressor suction** (through the accumulator), **indoor coil** and **outdoor coil**. Piped so that the discharge port always carries hot gas whichever way the machine is running.
- **Found on.** Reverse-cycle air conditioners, split and packaged heat pumps, and some systems that use flow reversal for defrost.

A leaking (bypassing) slide is a common fault: discharge gas leaks internally to
the suction port, so the suction line runs warm, capacity falls in both modes,
and the temperature difference across the valve body between the discharge port
and the suction port narrows. Comparing the four pipe temperatures at the valve
is the standard field check.

## Bi-directional (bi-flow) drier

- **Purpose.** Filters and dries the refrigerant with flow in **either** direction, without releasing the moisture, acid and debris it has already collected when the flow reverses. A standard drier run backwards would wash its collected contamination straight back into the circuit and would eventually shed desiccant fines.
- **Position.** In the liquid line **between the two coils** — the only section of a reverse-cycle circuit that is a liquid line in both modes.
- **Found on.** Heat pumps and reverse-cycle units of all sizes. The alternative arrangement, common on larger plant, is two conventional driers each with a check valve, piped so that flow always passes through one of them in its correct direction.
- **Why there.** Between the coils is where liquid exists whichever way the machine is running. Anywhere in the reversible sections nearer the coils would see two-phase flow in one of the modes.

## Distributors on both coils

On a reverse-cycle unit each coil is an evaporator half the time, so each needs a
distributor to feed its circuits evenly. In the other mode that same distributor
is at the outlet of a condensing coil, where the flow is leaving rather than
entering and the nozzle would be an unwanted restriction. The usual arrangement
is a **check valve piped around the distributor nozzle**, so that liquid leaving
the coil in condensing mode bypasses the nozzle, while flow entering the coil in
evaporating mode is forced through it.

## Bi-directional expansion arrangement

The metering device must expand liquid flowing toward whichever coil is the
evaporator, and must not restrict liquid flowing the other way. Two standard
answers:

1. **A pair of externally equalised TX valves, each with a check valve in parallel.** In cooling, liquid passes through the indoor valve and bypasses the outdoor one through its check valve; in heating, the reverse. Each valve has its own bulb on the line that becomes the suction line in that mode, at that coil's outlet, and its own external equaliser connected to that same line just downstream of its bulb.
2. **A single bi-flow TX valve** built to meter in either direction, with an internal or external check arrangement.

The external equaliser matters here for the same reason it matters anywhere with
a distributor: the pressure drop through the distributor nozzle and the coil is
large enough that an internally equalised valve would sense the wrong saturation
pressure and starve the coil.

## Accumulator and oil separator on a reverse-cycle unit

- **Suction accumulator.** Fitted in the common suction line **between the reversing valve suction port and the compressor**. It is not optional on a reverse-cycle machine: at every changeover the coil that has just been condensing is full of liquid, and that liquid is swept toward the compressor as the flow reverses. There is only one suction path, so this is the only position that protects the compressor in both modes.
- **Oil separator.** Fitted in the discharge line **between the compressor and the reversing valve**. Placing it upstream of the reversing valve means it always sees hot gas flowing in the same direction, whatever mode the machine is in, so its separation and float return work normally at all times. Downstream of the valve it would see reversed flow and would not function.

## Defrost on a reverse-cycle unit

In heating mode the outdoor coil is the evaporator, running below ambient and
below freezing in cold, damp weather. Frost builds, insulates the coil, blocks
the airflow, drives the coil colder still, and the frost grows faster.

!FIG[frost-spiral]

The standard cure is **reverse-cycle defrost**: the controller flips the
reversing valve back to cooling for a few minutes, so hot gas goes to the
outdoor coil and melts the frost from inside, usually with the outdoor fan
stopped and often with the indoor fan stopped or supplementary heat energised so
the occupants do not get a blast of cold air. Termination is on coil temperature,
pressure, or time as a backstop.

Some units also carry **hot gas bypass** with its own solenoid, used to hold
suction pressure up at very low load, and a **discharge check valve** where two
compressors share a circuit.

## What to remember

- The reversing valve is moved by pressure difference through a pilot solenoid, not by the solenoid itself.
- The bi-flow drier belongs between the coils, the only permanent liquid line.
- Both coils need a distributor, each with a check valve around the nozzle.
- Two TX valves with parallel check valves, or one bi-flow valve — externally equalised either way, each bulb on the line that is the suction line in its mode.
- Accumulator downstream of the reversing valve; oil separator upstream of it.

## Written practice

**1.** Explain why the suction accumulator on a reverse-cycle unit must be
downstream of the reversing valve and the oil separator must be upstream of it.

>? **Model answer**
>
> **Accumulator downstream of the reversing valve.** In cooling, liquid can
> return from the indoor coil; in heating, it can return from the outdoor coil,
> and at every changeover the coil that has just been condensing empties its
> liquid toward the suction side. Those two paths merge at the reversing valve,
> and from the valve's suction port to the compressor there is only one line. An
> accumulator anywhere upstream would protect one mode and not the other, so the
> only position that works in both is between the reversing valve suction port
> and the compressor.
>
> **Oil separator upstream of the reversing valve.** A separator works on hot,
> fast-moving discharge gas flowing in one direction, and its float return line
> assumes discharge pressure on one side. The pipe between the compressor
> discharge and the reversing valve is the only part of the circuit that carries
> discharge gas in the same direction in both modes. Downstream of the valve the
> line reverses with the mode, so a separator there would run backwards half the
> time and would not separate or return oil.

**2.** A reverse-cycle system has been re-piped with a standard one-way
filter-drier in the line between the two coils, and a single internally
equalised TX valve. Identify both faults and explain the consequences of each.

>? **Model answer**
>
> **Fault 1 — a standard one-way drier in a reversible line.** The drier is
> designed for flow in the direction of its arrow only. Run backwards it washes
> the moisture, acid and debris it has already collected straight back into the
> circuit, and it will shed desiccant fines that then travel to the metering
> device and the compressor. The core can also be displaced. The correct part is
> a **bi-directional (bi-flow) drier**, or two conventional driers each with a
> check valve so flow always passes through one of them the right way.
>
> **Fault 2 — a single internally equalised TX valve.** Two problems. First, an
> ordinary TX valve meters in one direction only, so in the reverse mode there
> is no proper expansion device and no superheat control; the arrangement needs
> either a pair of valves with parallel check valves or a purpose-built bi-flow
> valve. Second, both coils are fed through distributors, whose nozzle pressure
> drop is substantial; an internally equalised valve senses its own outlet
> pressure rather than the coil outlet, so it reads a saturation temperature
> well above the true one, throttles, and holds the coil permanently starved
> with high superheat and poor capacity. The valves must be **externally
> equalised**, each with its bulb on the line that is the suction line in its
> mode and its equaliser connected to that line just downstream of the bulb.

**3.** Describe how a reversing valve actually changes over, and explain why a
system with a very low charge may leave it stuck part way.

>? **Model answer**
>
> The main slide inside the valve body is not moved by the solenoid. The
> solenoid is a small **pilot valve** that ports pressure through capillary
> tubes to the two ends of the slide chamber: it connects one end to compressor
> **discharge** pressure and the other end to compressor **suction** pressure.
> The resulting pressure difference across the slide pushes it along its bore
> until it seats at the other end, which re-connects the coil ports to the
> discharge and suction ports the opposite way round.
>
> The force available is therefore proportional to the pressure difference the
> compressor is generating. On a system with a very low charge — or with a
> compressor that has lost its valves, or one that has been stopped — there is
> little or no difference between discharge and suction pressure, so there is
> little or no force on the slide. It can stop part way along its bore, leaving
> both coils partly connected to both ports. The symptoms are a warm suction
> line, very poor capacity in both modes, discharge and suction pressures
> converging toward each other, and small temperature differences between the
> four pipes at the valve body. The remedy is to restore the charge and confirm
> the compressor is pumping before condemning the valve.
`,
          quiz: [
            {
              q: "A reversing valve slide is moved by:",
              options: [
                "The solenoid coil acting directly on the slide",
                "The pressure difference between discharge and suction, ported to the ends of the slide by a small pilot solenoid valve",
                "A spring, released when the solenoid is energised",
                "Refrigerant flow momentum through the coil ports",
              ],
              answer: 1,
              explain: "The pilot valve is the only thing the solenoid moves; it decides which end of the slide chamber sees discharge pressure and which sees suction. That is why a system with almost no pressure difference can leave the slide stranded mid-stroke.",
            },
            {
              q: "A bi-directional drier is fitted in the liquid line between the two coils because:",
              options: [
                "It is the coolest part of the circuit",
                "That section carries liquid in both modes, and a one-way drier run backwards would release what it has already collected",
                "The reversing valve needs a filter on its suction side",
                "It is the only place with enough pipe length",
              ],
              answer: 1,
              explain: "Between the coils is the only permanent liquid line on a reversible circuit. A standard drier run backwards washes its collected acid, moisture and debris back into the system and can shed desiccant fines into the metering device.",
            },
            {
              q: "On a reverse-cycle unit, the oil separator is fitted:",
              options: [
                "Between the reversing valve and the outdoor coil",
                "Between the compressor discharge and the reversing valve",
                "In the common suction line before the compressor",
                "In the liquid line between the coils",
              ],
              answer: 1,
              explain: "That pipe carries hot discharge gas in the same direction in both modes, so the separator always sees the conditions it was designed for. Downstream of the reversing valve the flow direction changes with the mode and the separator would not work.",
            },
            {
              q: "Why does each coil on a reverse-cycle unit normally have a check valve piped around its distributor nozzle?",
              options: [
                "To prevent oil collecting in the distributor tubes",
                "So liquid leaving the coil in condensing mode bypasses the nozzle, while flow entering the coil in evaporating mode is forced through it",
                "To equalise pressure between the circuits",
                "To allow the distributor to be removed for service",
              ],
              answer: 1,
              explain: "The nozzle exists to homogenise and split the flashing mixture entering an evaporator. In the other mode that same coil is condensing and the liquid is leaving, so the nozzle would simply be a restriction — the check valve gives it a way around.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "schematic-drawing-method",
          title: "Drawing a piping schematic from a written brief: the method",
          minutes: 12,
          simple: "A schematic question hands you a shopping list of parts and asks you to draw the system. The trick is not artistic ability — it is order. Start at the compressor, walk right around the loop the way the gas goes, and drop each part in as you reach the place where it belongs. Label everything and put arrows on every line.",
          refs: REFS,
          content: `
A schematic question gives you a written brief — a list of components and a
description of the duty — and asks for a drawn, labelled circuit. It is a
generous question, because the marks are for placement and labelling and both
are things you can rehearse.

>! The drawing itself has to be done on paper, by hand, under exam conditions.
>! Nothing in this lesson replaces that practice. Work the two examples in the
>! next lessons with a pencil and a blank page beside you, then compare — reading
>! a walk-through and drawing a circuit are different skills.

## The eight-step method

1. **Read the brief twice and list the components.** Tick each one off as you place it. An unplaced component is a lost mark, and the list is your checklist.
2. **Draw the compressor first**, in the lower left or centre of the page, as a rectangle or circle with two connections. Mark **D** for discharge and **S** for suction. Everything else hangs off this.
3. **Work around the loop in flow order**, discharge first: discharge line, condenser, receiver, liquid line, metering device, evaporator, suction line, back to the compressor. Draw the bare loop with plenty of space before adding anything else — most bad schematics are drawn too small.
4. **Place each accessory where the flow condition requires it.** Ask of each: does this need hot gas, liquid or vapour? That names the line. Then: what is it protecting? That names which end of the line. Discharge-line items near the compressor; liquid-line items in order — receiver, drier, sight glass, solenoid, valve, distributor; suction-line items in order — coil regulators at their coil, then accumulator, then CPR, then compressor.
5. **Label every component with its full name.** Not "acc" or a symbol on its own. Where a component has a setting that matters — an EPR held at a stated saturation temperature, a CPR at a stated maximum — write the setting next to it.
6. **Show flow direction with arrows on every line**, and in both modes if the system reverses. On a reversible circuit use solid arrows for one mode and dashed for the other, with a key.
7. **Add the expansion valve details**: the sensing bulb on the suction line at that coil's outlet, and the external equaliser line from the valve to the suction line just downstream of the bulb. Draw them as thin lines so they are clearly control connections and not refrigerant pipes. On a two-temperature system, do this for **each** valve.
8. **Walk the loop out loud and check.** Start at the compressor discharge and name the condition of the refrigerant at every point: hot superheated vapour, desuperheating, condensing, subcooled liquid, flashing mixture, boiling, saturated vapour, superheated vapour. If a component is sitting somewhere its stated condition does not exist, it is in the wrong place.

## Conventions worth following

| Convention | Why it earns marks |
| Name the three lines on the drawing — discharge, liquid, suction | Shows the marker you understand what each carries |
| Draw the receiver below the condenser outlet | Reflects the gravity drain and is technically correct |
| Draw distributor tubes as several equal-length lines into the coil header | Shows you know why equal lengths matter |
| Draw bulb and equaliser as thin lines, touching the suction line | Distinguishes control connections from refrigerant piping |
| Put a small arrowhead on every line, not just one per circuit | Direction is explicitly marked in the criteria |
| Show isolating hand valves either side of the drier | Shows serviceability thinking |
| Add a legend if you use any symbol more than once | Removes ambiguity from the marker's job |

## Common ways marks are lost

- Components listed in the brief but never drawn. Tick them off.
- An accessory in the wrong line — the classic is an oil separator drawn in the suction line, or an accumulator drawn in the liquid line.
- No flow arrows, or arrows only on part of the circuit.
- A bulb drawn on the liquid line, or on the suction line **downstream** of the external equaliser tapping instead of upstream of it.
- An EPR drawn in the common suction line instead of in the branch of the coil it controls.
- A CPR drawn at the evaporator instead of at the compressor.
- Drawing too small to label. Use the whole page.
- No explanation. Where the question asks why a component sits where it does, a sentence per component is what is being marked, not the neatness of the lines.

## The reasoning is the answer

Placement questions are really "explain the system" questions with a drawing
attached. If you can say, for every component, *"it is here because at this
point the refrigerant is X and this part needs X, and it protects Y from Z"*,
you can rebuild any schematic from scratch and you can defend every position.
That is what makes the drawing reproducible under pressure rather than
remembered.

## Written practice

**1.** Write out the eight-step drawing method in your own words, then explain
step 4 — placing accessories by flow condition — using three examples.

>? **Model answer**
>
> 1. Read the brief twice and list the components as a checklist.
> 2. Draw the compressor first, marked with discharge and suction.
> 3. Draw the bare loop in flow order — discharge, condenser, liquid line, metering device, evaporator, suction — large, with room to label.
> 4. Place each accessory where the flow condition it needs actually exists.
> 5. Label every component fully, with settings where they matter.
> 6. Put flow arrows on every line, with a key if the system reverses.
> 7. Add each expansion valve's bulb at its coil outlet and its external equaliser just downstream of that bulb, drawn as thin control lines.
> 8. Walk the loop and name the refrigerant condition at every point as a check.
>
> **Step 4 by example:**
>
> - **Oil separator** needs hot discharge gas with oil still entrained and moving fast, so it goes in the discharge line close to the compressor. In any other line the oil is dissolved or crawling along the pipe wall and cannot be separated.
> - **Sight glass** needs a solid column of liquid for bubbles to mean anything, so it goes in the liquid line — and after the drier, so it reports what the expansion valve will actually receive.
> - **Suction accumulator** needs to intercept liquid that has escaped the coil before it reaches the compressor, and liquid carryover only exists on the low side, so it goes in the suction line as close to the compressor as practical.

**2.** List six ways marks are commonly lost on a schematic question and say how
to avoid each.

>? **Model answer**
>
> - **A component from the brief never drawn.** Avoid it by writing the brief's component list down the margin and ticking each one off as it goes on the page.
> - **An accessory in the wrong line** — an oil separator in the suction line, an accumulator in the liquid line. Avoid it by asking what physical state the part needs before you place it.
> - **Missing flow arrows.** Put an arrowhead on every line segment as you draw it, not at the end as an afterthought.
> - **Bulb and equaliser wrong.** The bulb goes on the suction line at the coil outlet and the equaliser connects downstream of the bulb; draw them as thin lines so they read as control connections.
> - **EPR or CPR in the wrong place.** The EPR belongs in the branch of the coil it controls, before that branch joins the common suction; the CPR belongs immediately before the compressor.
> - **Drawing too small to label.** Use the whole page and draw the bare loop first, before adding anything, so there is room.
>
> A seventh: giving no reasoning where the question asks why a component is
> placed as it is — those sentences carry marks of their own.

**3.** Explain why the "walk the loop and name the condition" check in step 8
finds placement errors, and demonstrate it around a simple single-evaporator
system.

>? **Model answer**
>
> Every component needs the refrigerant to be in a particular state to do its
> job. Naming the state at each point in turn means each component is checked
> against a requirement rather than against a memory of a drawing, so a part in
> the wrong place shows up immediately as a mismatch.
>
> Walking a simple system:
>
> - **Compressor discharge** — hot, high-pressure superheated vapour with oil mist. Oil separator belongs here; a drier would not.
> - **Condenser, first section** — desuperheating; then condensing at constant pressure; **outlet** — saturated to slightly subcooled liquid.
> - **Receiver** — saturated liquid with a vapour space above it. Correct for a storage vessel; nothing that needs subcooled liquid should be inside it.
> - **Liquid line** — subcooled liquid at high pressure. Drier, sight glass, hand valves and solenoid all belong here, and the sight glass only means anything here.
> - **Through the expansion valve** — flashing mixture of liquid and vapour, low pressure. Only the distributor belongs here; a solenoid or drier placed after the valve would be seeing two-phase flow and would be wrong.
> - **Evaporator** — boiling, then dry saturated, then a few kelvin of superheat at the outlet. The TX valve bulb belongs at this point and nowhere else.
> - **Suction line** — low-pressure superheated vapour, carrying oil and possibly liquid carryover. Accumulator, EPR (at its coil), CPR and a burnout drier all belong in this line.
> - **Compressor suction** — dry vapour with enough superheat to be safe and enough mass flow to cool the motor.
>
> If, for instance, a sight glass had been drawn between the expansion valve and
> the coil, the walk-through names that point as a flashing two-phase mixture and
> the error is obvious.
`,
          quiz: [
            {
              q: "The first thing to draw when answering a schematic question is:",
              options: [
                "The evaporator, because that is the point of the system",
                "The compressor, marked with its discharge and suction connections",
                "The condenser and receiver together",
                "The legend and title block",
              ],
              answer: 1,
              explain: "The compressor is the fixed reference the loop is built around, and it defines the direction of flow. Drawing it first with D and S marked makes every subsequent placement a question of 'how far around the loop from here', which is exactly how the accessories are specified.",
            },
            {
              q: "Which drawing error would a marker treat most seriously?",
              options: [
                "Slightly uneven line spacing",
                "An oil separator drawn in the suction line",
                "No title block",
                "Using a rectangle rather than a circle for the compressor",
              ],
              answer: 1,
              explain: "Placing a component in the wrong line shows the underlying principle has not been understood — an oil separator only works on hot, fast-moving discharge gas. Presentation details cost little; a wrong line costs the placement mark and usually the reasoning mark with it.",
            },
            {
              q: "On the schematic, the TX valve's external equaliser should be drawn connecting to the suction line:",
              options: [
                "Upstream of the sensing bulb",
                "Downstream of the sensing bulb",
                "At the compressor suction service valve",
                "At the distributor inlet",
              ],
              answer: 1,
              explain: "Connecting downstream of the bulb means a leaking equaliser joint cannot blow refrigerant across the bulb and give the valve a false cold signal. Connecting at the compressor would include the whole suction line pressure drop and defeat the purpose of external equalisation.",
            },
            {
              q: "The purpose of walking the loop and naming the refrigerant condition at each point is to:",
              options: [
                "Estimate the refrigerant charge",
                "Check every component against the state it needs, so a part in the wrong line shows up as a mismatch",
                "Calculate the pressure drop in each line",
                "Decide the pipe sizes",
              ],
              answer: 1,
              explain: "It converts placement from something remembered into something checked. A sight glass drawn after the expansion valve, for instance, is instantly wrong once that point is named as a flashing two-phase mixture.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "two-temperature-schematic",
          title: "Worked example: two-temperature system on one compressor",
          minutes: 14,
          simple: "One condensing unit, two rooms at different temperatures. The compressor can only make one suction pressure, so it is set for the cold room and the warmer room gets a valve that stops its coil going too cold. Walk the loop once and every other part falls into place.",
          refs: REFS,
          content: `
**The brief.** A single semi-hermetic condensing unit is to serve two rooms: a
cool room held at 2 °C and a freezer room held at −22 °C. The system is to
include an oil separator, a liquid receiver, a filter-drier, a sight glass and
moisture indicator, a liquid line solenoid for each room, a thermostatic
expansion valve and distributor for each coil, an evaporator pressure regulator,
a crankcase pressure regulator and a suction accumulator. Draw and label the
piping schematic, show flow direction, and explain the position of each
component.

>! Draw this on paper as you read. The walk-through below is the marking
>! commentary, not a substitute for putting a pencil on a page.

## Step 1 — the design decision that drives everything

The compressor produces one suction pressure. The freezer needs a saturated
suction temperature of about **−30 °C** to hold −22 °C with a normal TD. The
cool room only needs about **−5 °C** saturated to hold 2 °C.

So the common suction line runs at the **freezer's** condition, and the cool room
coil must be **held up** to its own condition by a regulator. That single
sentence decides where the EPR goes, why the freezer gets no regulator, and why
a CPR is needed. Write it at the top of your answer.

## Step 2 — the loop, in flow order

**Compressor discharge → oil separator → condenser → liquid receiver → hand
valve → filter-drier → sight glass and moisture indicator → the liquid line
splits into two branches.**

**Cool room branch:** liquid line solenoid → TX valve (externally equalised) →
distributor → cool room evaporator → **EPR** → joins the common suction.

**Freezer branch:** liquid line solenoid → TX valve (externally equalised) →
distributor → freezer evaporator → joins the common suction.

**Common suction:** the two branches merge → **suction accumulator** → **CPR** →
compressor suction.

## Step 3 — component by component, and why

### Oil separator — discharge line, close to the compressor

Oil leaves the compressor entrained in hot discharge gas, and this is the only
place it is concentrated and moving fast enough to be separated. It matters more
than usual here: the freezer circuit runs cold enough that oil returning along
its suction line is viscous and sluggish, and the system has two long suction
runs. Without a separator the coils would log with oil and the crankcase level
would fall. Its float-controlled return line goes back to the crankcase, drawn
as a thin line with a sight glass and an isolating valve.

### Liquid receiver — immediately after the condenser outlet

The condenser drains into it by gravity. It is needed because the two rooms
switch on and off independently and the freezer defrosts, so the amount of
refrigerant the system needs in circulation changes constantly; the receiver
absorbs that variation and keeps a solid liquid seal to both expansion valves.
It also gives the system somewhere to pump down into, which is exactly how the
two solenoids control the rooms.

### Filter-drier and sight glass — liquid line, in that order

The drier goes upstream of both expansion valves so that moisture is removed
before the pressure drop where it would freeze, and so debris is stopped before
either orifice. It sits before the branch, so one drier serves both circuits.
The sight glass goes downstream of the drier, so it shows the condition of the
liquid the valves will actually receive and its moisture indicator reports on
the drier's condition. Isolating hand valves either side of the drier let it be
changed with the minimum of charge lost.

### Liquid line solenoid — one per branch, close to its expansion valve

Each room's thermostat controls its own solenoid. When a room is satisfied its
solenoid closes; when both are satisfied the compressor keeps running and pumps
the low side down until the low-pressure switch cuts it out. That is the
pump-down cycle, and it stops refrigerant migrating to the crankcase during off
periods — important here because a freezer coil is far colder than the plant
room and migration would otherwise be severe.

### Two expansion valves — one per coil, each externally equalised

Two coils at two temperatures need two separate metering devices, each sized for
its own duty and each with its own superheat setting: around **5 to 8 K** on the
cool room coil and around **6 to 10 K** on the freezer coil. Each is externally
equalised because each coil is fed through a distributor whose nozzle pressure
drop would otherwise be read as extra closing force.

Draw each valve with:

- its **bulb** on the suction line at that coil's outlet, on a horizontal run, at the 4 or 8 o'clock position, insulated;
- its **external equaliser** connected to that same line just downstream of the bulb.

**A detail that carries a mark on the cool room branch:** the bulb and the
equaliser must both connect **between the coil outlet and the EPR** — upstream of
the regulator. If the equaliser were connected on the compressor side of the
EPR, the valve would sense a pressure lower than its own coil's by the whole EPR
pressure drop, would behave as though superheat were far higher than it is, and
would flood the cool room coil.

### Distributors — one per coil, directly at each valve outlet

Both coils are multi-circuit, so the flashing mixture must be split evenly
between circuits. Equal-length distributor tubes to the coil header, drawn as
several equal lines.

### EPR — cool room suction line, at that coil's outlet

The cool room's coil would otherwise be pulled down to the freezer's −30 °C. The
EPR senses its **inlet** pressure — the cool room evaporator pressure — and
throttles whenever that pressure tries to fall below its setting, held at about
a **−5 °C saturation temperature**. It must be in that branch, upstream of the
junction with the common suction, so that the cool room coil is on its
high-pressure side.

Without it the cool room coil would frost solid, airflow would collapse, the
stock would be dehydrated and freeze-damaged and the room would need constant
defrosting.

### No regulator on the freezer branch

The freezer is the lowest-temperature evaporator, so it is the one that sets the
suction pressure. A regulator there would add pressure drop and cost capacity
for no benefit. Say this explicitly in the answer — it shows the principle is
understood rather than the rule copied.

### Suction accumulator — common suction, after the junction

It has to be after the two branches merge so that it protects the compressor from
liquid arriving from **either** room. Liquid arrives from the freezer coil at
the end of a defrost and from the cool room coil after a door-open surge or a
period of heavy load. It sits upstream of the CPR because it is the accumulator's
job to remove liquid, and the CPR is a vapour device.

### CPR — common suction, immediately before the compressor

After a defrost, or on a warm start, the freezer coil is far above its design
temperature and the suction pressure it produces would overload the compressor
motor. The CPR senses its **outlet** pressure — the compressor side — and
throttles to hold that pressure at or below the compressor manufacturer's
maximum continuous suction pressure until the room pulls down. It is the last
component before the compressor because it exists to protect only the
compressor; anything upstream of it still sees the high evaporator pressure.

## Step 4 — finish the drawing

- Label the three lines: discharge, liquid, suction.
- Arrowheads on every segment.
- Settings written next to the EPR and CPR.
- A short note that both bulbs are insulated and mounted at 4 or 8 o'clock.
- Tick every component off the brief's list.

## What to remember

- The lowest-temperature evaporator sets the suction pressure; the warmer coil gets the EPR.
- EPR in the warm coil's branch, before the junction; CPR in the common suction, right at the compressor.
- Accumulator after the junction, before the CPR.
- One drier, sight glass and receiver serve both branches; each branch gets its own solenoid, valve and distributor.
- Each valve's bulb and equaliser connect between its coil outlet and any regulator in that branch.

## Written practice

**1.** For the system above, state where the EPR and the CPR each go, which
pressure each senses, and what would happen if the two were swapped.

>? **Model answer**
>
> **EPR** — in the cool room suction line, at that coil's outlet, upstream of
> the junction with the common suction. It senses its **inlet** pressure, which
> is the cool room evaporator pressure, and throttles to stop it falling below
> about a −5 °C saturation temperature.
>
> **CPR** — in the common suction line immediately before the compressor,
> downstream of the accumulator. It senses its **outlet** pressure, which is the
> compressor suction pressure, and throttles to stop it rising above the
> compressor's maximum continuous suction pressure.
>
> **If swapped:** a CPR placed at the cool room coil outlet would sense the
> pressure on the common-suction side and throttle only when that pressure rose
> too high — which is never, since the freezer holds it down. It would therefore
> sit wide open and the cool room coil would be pulled to about −30 °C: heavy
> continuous frosting, collapsed airflow, dehydrated and freeze-damaged stock.
>
> An EPR placed in the common suction at the compressor would sense its inlet —
> the common suction pressure — and throttle to stop it falling below the
> setting. That would prevent the compressor from ever pulling the freezer coil
> down to −30 °C, so the freezer would never reach −22 °C. Meanwhile nothing
> would limit suction pressure on a warm start, so the motor would still
> overload after every defrost.
>
> The two valves are not interchangeable: one limits a minimum and senses
> upstream, the other limits a maximum and senses downstream.

**2.** Explain why the cool room TX valve's external equaliser must be connected
upstream of the EPR, and what would happen if it were connected downstream.

>? **Model answer**
>
> The external equaliser exists to give the valve the true saturation pressure
> **at its own coil's outlet**, so that the superheat it calculates is the
> superheat that coil is actually producing.
>
> The EPR deliberately creates a large pressure drop between the cool room coil
> outlet and the common suction line — that is its entire function. If the
> equaliser were connected on the compressor side of the EPR, the valve's
> diaphragm underside would see the common suction pressure, which corresponds
> to a saturation temperature around −30 °C rather than the coil's actual −5 °C.
>
> That much lower closing pressure would leave the bulb pressure winning
> heavily, so the valve would open far wider than it should. The cool room coil
> would be flooded, superheat at its outlet would fall to nothing, and liquid
> would pass down the branch. The EPR would pass it on, the accumulator would
> then be catching liquid continuously, and the compressor would be at risk.
>
> Both the bulb and the equaliser therefore connect between the coil outlet and
> the EPR, with the equaliser just downstream of the bulb.

**3.** Justify the inclusion of the receiver, the accumulator and the oil
separator on this particular system — not in general, but for this duty.

>? **Model answer**
>
> **Receiver.** Two rooms cycle on and off independently and the freezer
> defrosts periodically, so the mass of refrigerant the system needs in
> circulation changes constantly. Without a receiver, the charge that suits one
> combination of running coils would either starve the valves or back liquid up
> into the condenser in another. The receiver absorbs that variation, guarantees
> a solid liquid seal to both expansion valves, and provides the volume the
> pump-down cycle needs when the two solenoids close.
>
> **Suction accumulator.** Both coils can deliver liquid to the suction line —
> the freezer coil most obviously at the end of a defrost, when the coil is warm
> and full, and the cool room coil after a door-open surge or when the EPR opens
> quickly. Fitted in the common suction after the junction, it intercepts liquid
> from either branch and meters it back as vapour, with its oil-return orifice
> keeping the compressor lubricated.
>
> **Oil separator.** Low-temperature operation is the hardest condition for oil
> return: the oil is cold and viscous in the freezer coil and its suction line,
> and mass flow at −30 °C is low, so oil crawls. There are also two long suction
> runs to different rooms. Without separation at the compressor the coils would
> progressively log with oil, heat transfer would fall away and the crankcase
> would run down. Fitting it in the discharge line close to the compressor takes
> the oil out while it is still an entrained mist and returns it directly.
`,
          quiz: [
            {
              q: "On a two-temperature system with one compressor, which evaporator determines the common suction pressure?",
              options: [
                "The cool room evaporator, because it is larger",
                "The freezer evaporator, because it is the lowest-temperature coil",
                "Whichever coil is calling at the time",
                "Neither — the CPR sets it",
              ],
              answer: 1,
              explain: "The compressor must pull the common suction line down far enough to satisfy the coldest coil. The warmer coil is then the one that must be held up by a regulator, which is why the EPR goes in the cool room branch.",
            },
            {
              q: "In the two-temperature system, the suction accumulator is fitted:",
              options: [
                "In the freezer branch only, before the junction",
                "In the common suction after the two branches merge and before the CPR",
                "In the cool room branch after the EPR",
                "Between the receiver and the filter-drier",
              ],
              answer: 1,
              explain: "Liquid can return from either room, so the accumulator must be after the junction to catch both. It goes before the CPR because removing liquid is its job and the CPR is a vapour device that should not be fed liquid.",
            },
            {
              q: "Why does the freezer branch have no pressure regulator in its suction line?",
              options: [
                "Because freezers do not need protection",
                "Because it is the lowest-temperature coil and sets the suction pressure, so a regulator would only add pressure drop and lose capacity",
                "Because the CPR already regulates it",
                "Because the accumulator performs that function",
              ],
              answer: 1,
              explain: "A regulator holds a coil's pressure up. The freezer coil is already at the lowest pressure in the system and needs to be — that is the condition the compressor is being asked to produce. Restricting it would simply cost capacity.",
            },
            {
              q: "The cool room TX valve's bulb and external equaliser must both connect:",
              options: [
                "Between the coil outlet and the EPR",
                "Between the EPR and the common suction junction",
                "In the common suction line after the accumulator",
                "At the compressor suction service valve",
              ],
              answer: 0,
              explain: "The EPR creates a large deliberate pressure drop. Sensing on its downstream side would give the valve a saturation pressure around the freezer's condition instead of its own coil's, so the valve would open wide and flood the cool room coil.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "reverse-cycle-schematic",
          title: "Worked example: reverse-cycle packaged unit",
          minutes: 14,
          simple: "A reverse-cycle unit is drawn like any other system, except the middle section can run either way. Draw the compressor and the 4-way valve first, then the two coils either side of the liquid line between them, and every two-way component — the drier, the metering arrangement, the distributors — goes in that middle section.",
          refs: REFS,
          content: `
**The brief.** Draw and label the piping schematic of a reverse-cycle packaged
unit. It has an indoor coil and an outdoor coil, a four-way reversing valve, a
bi-directional filter-drier, a distributor on each coil, an externally equalised
bi-directional thermostatic expansion arrangement, hot gas bypass with a
controlling solenoid, a suction accumulator and an oil separator. Show the flow
direction in both cooling and heating, and explain why each component sits where
it does.

>! As with the previous example, draw it. Use solid arrows for cooling and
>! dashed arrows for heating, with a key — that convention is worth marks on its
>! own and it forces you to check both modes.

!FIG[reversing-valve]

## Step 1 — build the fixed spine first

Three things never change direction, so draw them first and get them right:

1. **Compressor**, marked D and S.
2. **Oil separator** in the discharge line, between the compressor discharge and the reversing valve, with its float return line back to the crankcase.
3. **Suction accumulator** in the suction line, between the reversing valve's suction port and the compressor suction.

Then draw the **reversing valve** with its four connections clearly labelled:
**compressor discharge**, **compressor suction (via the accumulator)**, **indoor
coil**, **outdoor coil**.

Everything drawn so far carries refrigerant in the same direction in both modes.
Everything drawn next does not.

## Step 2 — the reversible middle

From the reversing valve, one line runs to the **indoor coil** and one to the
**outdoor coil**. Between the two coils runs the section that is the **liquid
line in both modes**, and that is where the reversible components go:

**Indoor coil → indoor distributor → indoor TX valve (with its parallel check
valve) → bi-directional filter-drier → outdoor TX valve (with its parallel check
valve) → outdoor distributor → outdoor coil.**

## Step 3 — component by component, and why

### Reversing (4-way) valve — at the compressor

Its four ports connect the two coils alternately to the discharge and suction
sides. Its slide is moved by the pressure difference between discharge and
suction, ported to the ends of the slide chamber by a small **pilot solenoid**.
Draw the pilot solenoid and its capillaries as thin lines to the valve body.

In **cooling**: discharge → outdoor coil (condenser); indoor coil (evaporator) →
suction. In **heating**: discharge → indoor coil (condenser); outdoor coil
(evaporator) → suction.

### Oil separator — discharge line, before the reversing valve

That short pipe between the compressor discharge and the reversing valve is the
**only** part of the circuit carrying hot discharge gas in the same direction in
both modes. A separator there always sees the flow it was designed for and its
float return works in both modes. Downstream of the reversing valve, the line
reverses with the mode and the separator would run backwards half the time.

### Suction accumulator — after the reversing valve, before the compressor

Essential on a reverse-cycle machine, not optional. At every changeover the coil
that has been condensing is full of liquid, and reversing the flow sweeps that
liquid toward the compressor. Both coils feed the same single suction path from
the reversing valve to the compressor, so this is the only position that
protects the compressor in both modes. Its oil-return orifice keeps the
compressor lubricated.

### Bi-directional (bi-flow) drier — between the two coils

The section between the coils is the liquid line whichever way the machine is
running, so it is the only place a drier can be permanently useful. It must be a
bi-flow type — or two conventional driers each with a check valve, piped so
that flow always passes through one of them in its correct direction — because a
one-way drier run backwards releases the acid, moisture and debris it has already
collected and can shed desiccant fines into the metering devices and the
compressor.

### Distributors on both coils, each with a check valve around the nozzle

Each coil is an evaporator in one mode, so each needs a distributor to split the
flashing mixture evenly between its circuits. In the other mode that same coil is
condensing and the liquid is leaving through the distributor, where the nozzle
would only be a restriction — so a **check valve is piped around the nozzle** to
give the leaving liquid a path. Draw the distributor tubes as several
equal-length lines into each coil header.

### Externally equalised bi-directional expansion arrangement

Two acceptable arrangements; draw and label whichever you choose.

- **A pair of externally equalised TX valves, each with a check valve in parallel.** In cooling, liquid flows through the indoor valve and bypasses the outdoor valve through its check valve; in heating the reverse. Each valve has its **own bulb** on the line that is the suction line in that valve's mode — the indoor valve's bulb on the indoor coil's outlet line, the outdoor valve's bulb on the outdoor coil's outlet line — and its **own external equaliser** connected to that same line just downstream of its bulb.
- **A single bi-flow TX valve** designed to meter in either direction, with its check arrangement built in.

External equalisation is required in either case because both coils are fed
through distributors, and the nozzle plus coil pressure drop would otherwise be
sensed as extra closing force, starving whichever coil is evaporating.

### Hot gas bypass with a controlling solenoid

Teed off the **discharge line downstream of the oil separator**, through a
**solenoid valve** and then the **hot gas bypass regulator**, and injected at the
**auxiliary side connection of the evaporating coil's distributor**. The
regulator senses the pressure downstream of itself and opens progressively as
suction pressure falls toward its setting, creating an artificial load so the
machine runs continuously at low load instead of short-cycling on the
low-pressure switch or icing the indoor coil.

The **solenoid** is what makes it safe to fit. It positively closes the bypass
when it is not wanted — compressor off, during defrost, at high load — so a
regulator that leaks by cannot bleed discharge gas into the low side, waste
energy and confuse the pressure controls. Interlock it to the compressor
contactor and to the defrost control.

Injecting at the distributor side port rather than into the suction line means
the hot gas is desuperheated by the boiling refrigerant in the coil and coil
velocity is maintained for oil return; a suction-line injection point would
deliver very hot gas to the compressor and would need a separate liquid-injection
desuperheater.

## Step 4 — defrost, and the flow arrows

In heating, the outdoor coil runs below ambient and frosts in cold damp weather.
Frost insulates the coil and blocks the airflow, which drives it colder and makes
the frost grow faster.

!FIG[frost-spiral]

Reverse-cycle defrost breaks that loop: the controller flips the reversing valve
to cooling for a few minutes so hot gas melts the frost from inside the outdoor
coil, usually with the outdoor fan stopped and the indoor fan stopped or
supplementary heat energised. Termination is on coil temperature or pressure with
a time backstop. Note on the drawing that the hot gas bypass solenoid is closed
during defrost.

Finish with **solid arrows for cooling and dashed arrows for heating**, a key,
and full labels on all four reversing-valve ports.

## What to remember

- Fixed spine: compressor, oil separator before the reversing valve, accumulator after it.
- Reversible middle: distributors, expansion arrangement and bi-flow drier, all between the coils.
- Both coils get a distributor with a check valve around the nozzle.
- Each expansion valve's bulb goes on the line that is the suction line in that valve's mode, with its equaliser just downstream.
- Hot gas bypass: off the discharge line after the separator, through a solenoid and a regulator, into the evaporating coil's distributor side port.

## Written practice

**1.** Explain why the oil separator and the suction accumulator sit on opposite
sides of the reversing valve, and what would go wrong if each were moved to the
other side.

>? **Model answer**
>
> **Oil separator — compressor side of the reversing valve.** The pipe between
> the compressor discharge and the reversing valve carries hot discharge gas in
> the same direction in both modes, which is what a separator needs: fast-moving
> hot gas with the oil still entrained, and discharge pressure on the float
> return line. Moved to the coil side of the valve, that line would reverse with
> the mode; the separator would run backwards half the time, would not separate,
> and its float return could be exposed to the wrong pressure difference.
>
> **Accumulator — suction side of the reversing valve.** Liquid can return from
> whichever coil has just been condensing, and at changeover it is swept toward
> the compressor. The only line common to both modes is from the reversing
> valve's suction port to the compressor, so that is the only position that
> catches liquid in both. Moved to a coil line, it would protect one mode only
> and in the other mode it would sit in a condensing line, where it would fill
> with liquid and log the circuit.

**2.** Describe the bi-directional expansion arrangement for this unit, and
explain where each bulb and each external equaliser connects and why external
equalisation is necessary.

>? **Model answer**
>
> The usual arrangement is a **pair of externally equalised TX valves, each with
> a check valve piped in parallel with it**, in the liquid line between the two
> coils. In cooling, liquid flows from the outdoor coil through the outdoor
> valve's check valve (bypassing that valve), through the bi-flow drier, and
> expands through the indoor valve into the indoor distributor. In heating the
> path reverses and the outdoor valve does the metering while the indoor valve
> is bypassed. A single purpose-built bi-flow TX valve is the alternative.
>
> **Bulbs.** Each valve's bulb goes on the line that becomes the **suction line
> in that valve's operating mode**, at that coil's outlet: the indoor valve's
> bulb on the indoor coil's connecting line, the outdoor valve's bulb on the
> outdoor coil's connecting line. Each is mounted on a horizontal run at the
> correct clock position, in clean metal-to-metal contact, and insulated.
>
> **Equalisers.** Each valve's external equaliser connects to that **same line,
> just downstream of its own bulb** — downstream so a leaking joint cannot blow
> across the bulb, and on top of the line so oil cannot block the tube.
>
> **Why external equalisation.** Both coils are fed through distributors. The
> nozzle plus coil pressure drop is large, so an internally equalised valve
> would sense its own outlet pressure — a saturation temperature well above the
> true coil-outlet value — under its diaphragm. That extra closing force acts
> like extra spring pressure, so the valve would hold a much higher superheat
> than its setting implies and would starve whichever coil is evaporating.

**3.** The unit is fitted with hot gas bypass. State where the line is taken
from, where it is injected, the purpose of the solenoid valve in the line, and
why it must be closed during defrost.

>? **Model answer**
>
> **Taken from.** The discharge line, downstream of the oil separator, so the
> gas has already had its oil removed and the separator is not bypassed.
>
> **Injected into.** The auxiliary side connection on the distributor of the
> coil that is evaporating, so the hot gas is desuperheated by the boiling
> refrigerant in the coil and coil velocity is maintained for oil return.
> Injecting into the suction line instead would deliver very hot gas straight to
> the compressor and would require a separate liquid-injection desuperheater to
> control discharge and motor temperature.
>
> **Purpose of the solenoid.** To shut the bypass off positively when it is not
> required — compressor off, at high load, during pump-down and during defrost.
> A modulating regulator can leak by; without a solenoid that leak would bleed
> discharge gas continuously into the low side, wasting energy, raising suction
> pressure and interfering with the pressure controls.
>
> **Why closed during defrost.** Defrost works by sending the full discharge gas
> flow to the frosted coil to melt the ice from inside. If the bypass were open
> it would divert some of that gas and reduce condensing pressure, so the
> defrost would take longer or fail to clear the coil, and the termination
> sensor might never be satisfied. It would also be feeding hot gas into a coil
> circuit at the same time the reversing valve is doing so, upsetting the
> pressure balance the changeover depends on.
`,
          quiz: [
            {
              q: "On a reverse-cycle packaged unit, the bi-directional filter-drier is fitted:",
              options: [
                "In the suction line before the compressor",
                "In the liquid line between the two coils",
                "In the discharge line after the oil separator",
                "Between the reversing valve and the indoor coil",
              ],
              answer: 1,
              explain: "The section between the coils is the liquid line in both modes, which is the only place a drier is permanently useful and permanently seeing liquid. Between the reversing valve and a coil, that line is a discharge line in one mode and a suction line in the other.",
            },
            {
              q: "Why does each coil's distributor have a check valve piped around its nozzle?",
              options: [
                "To prevent liquid migration during the off cycle",
                "So liquid leaving the coil in condensing mode bypasses the nozzle, while flow entering the coil in evaporating mode is forced through it",
                "To equalise pressure between the two coils at changeover",
                "To allow hot gas bypass to be injected",
              ],
              answer: 1,
              explain: "The nozzle exists to homogenise and split the flashing mixture entering an evaporator. When that same coil is condensing, the liquid is leaving and the nozzle is only a restriction, so a bypass path is provided.",
            },
            {
              q: "Each TX valve in a bi-directional arrangement has its bulb fitted:",
              options: [
                "On the liquid line between the coils",
                "On the line that acts as the suction line in that valve's operating mode, at that coil's outlet",
                "On the compressor discharge line",
                "On the common suction line after the accumulator",
              ],
              answer: 1,
              explain: "A bulb must sense the temperature of refrigerant leaving the coil that its valve is feeding. For the indoor valve that is the indoor coil's connecting line during cooling; for the outdoor valve it is the outdoor coil's line during heating.",
            },
            {
              q: "The solenoid valve in a hot gas bypass line is there to:",
              options: [
                "Modulate the bypass flow in proportion to load",
                "Positively shut the bypass off when it is not wanted, so a leaking regulator cannot bleed discharge gas into the low side",
                "Reduce the discharge pressure entering the regulator",
                "Meter oil back to the crankcase",
              ],
              answer: 1,
              explain: "Modulation is the regulator's job; the solenoid is a positive on-off interlocked to the compressor and the defrost control. Without it a regulator that leaks by would waste energy continuously, hold suction pressure up and prevent a pump-down completing.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
