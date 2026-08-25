/* =========================================================================
   Course content, module 410 — Wiring diagrams, safeties and control circuits.
   Source: capstone knowledge-assessment revision; manufacturer wiring diagram
   conventions, AS/NZS 3000 Wiring Rules, AS/NZS 4836 safe working on low
   voltage electrical installations, and packaged-unit control practice.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Every
   practice question and every worked brief is original revision material,
   not a reproduction of any assessment paper.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_DIAG = [
    "AS/NZS 3000:2018 Wiring Rules — circuit arrangements, identification and diagrams",
    "AS 1102 series — graphical symbols for electrotechnical documentation",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — electrical circuits and wiring diagrams for refrigeration plant",
  ];

  const REFS_SAFETY = [
    "AS/NZS 4836 — Safe working on or near low-voltage electrical installations and equipment",
    "AS/NZS 3000:2018 Wiring Rules — Section 8, verification and testing",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — protection and safety devices on refrigeration plant",
  ];

  const REFS_CONTROL = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — control circuits, contactors, relays and timers",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — packaged plant control and safety interlocks",
    "AS/NZS 5149.2 — Refrigerating systems and heat pumps: design, construction and safety switching devices",
  ];

  const REFS_DEFROST = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — defrost systems, time clocks and termination control",
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 2, Boyle — pub. AIRAH — pump-down control and liquid line solenoid operation",
    "AS/NZS 3000:2018 Wiring Rules — control circuits and isolation requirements",
  ];

  const MODULES = [
    {
      id: "cap-circuits-and-diagrams",
      stream: "capstone",
      title: "C.10 · Wiring diagrams, safeties and control circuits",
      blurb: "Reading a manufacturer's diagram under time pressure, naming every device in the lockout string, dead-testing to find which safety tripped, and drawing a control circuit from a written brief.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "diagram-types-and-layout",
          title: "How a manufacturer's wiring diagram is laid out",
          minutes: 12,
          simple: "A wiring diagram is not one drawing, it is usually two on the same page: a heavy-current part that feeds the motors, and a light-current part that decides when the motors run. Learn to see the split and the page stops being a plate of spaghetti — like separating the plumbing in a house from the taps that turn it on.",
          refs: REFS_DIAG,
          content: `Open the door of a packaged unit and there is a folded drawing in a pocket. Under exam conditions, or at 4 pm on a hot Friday, the difference between a technician who can use that drawing and one who cannot is worth an hour. The drawing is not random: it follows conventions, and once you know them you can find any device on it in seconds.

## Three kinds of drawing, three jobs

| Drawing type | What it shows | What you use it for |
|---|---|---|
| Schematic or ladder diagram | The electrical logic — every device drawn between two supply rails, arranged so each circuit is one horizontal rung, with no attempt to show physical position | Understanding how the unit decides to run, and fault-finding the control circuit |
| Connection or wiring diagram | Every terminal, every wire number, every physical connection, with components drawn roughly where they sit | Landing wires, checking terminations, tracing an actual conductor |
| Pictorial or layout diagram | Where the components physically are in the cabinet | Finding the part you have just identified on the schematic |

The one that answers "why will this unit not start" is the **schematic**. The one that answers "which terminal does the brown wire go on" is the **connection diagram**. Candidates lose time by trying to fault-find on a connection diagram, which is drawn to show wires, not logic.

## The split that matters: power circuit and control circuit

Almost every diagram divides into two parts, usually with the power circuit drawn at the top or on the left.

**The power circuit** carries the current that actually does the work:

- Incoming supply, main switch or isolator, and the circuit protection.
- The **main contacts** of each contactor — heavy contacts, drawn with the load they feed.
- The motors: compressor, condenser fan or fans, evaporator fan, plus heaters.
- Overload devices in the motor circuit.
- On three-phase plant, three lines drawn in parallel with the contacts across all three.

**The control circuit** carries only enough current to operate coils and small devices:

- The supply for the control circuit, which may be one phase and neutral tapped off the incoming supply, or the secondary of a small **control transformer** at 24 V or 240 V.
- Thermostats, pressure switches, timers, relays and interlocks.
- The **coils** of the contactors — the coil is in the control circuit, its main contacts are in the power circuit. That is the single most important idea on the page.
- Indicator lamps and fault outputs.

The link between them is the contactor. The control circuit decides; the coil pulls in; the main contacts in the power circuit close and the motor runs. When you trace a fault, you are almost always in the control circuit, because that is where the decisions and the safeties live.

## Conventions you can rely on

- **Devices are drawn de-energised and in their normal position** — the state they sit in with no power on and no process condition applied. A normally-closed contact is drawn closed. A normally-open contact is drawn open.
- **Contacts belonging to a coil carry the coil's label.** A relay labelled CR has contacts labelled CR wherever they appear, sometimes with a number: CR1, CR2. Finding all the contacts of one relay is how you work out what it does.
- **Line types often distinguish factory wiring from field wiring** — commonly solid for factory-installed, dashed for wiring installed on site. The legend says which.
- **Terminal strips are drawn as numbered blocks**, and the numbers on the drawing match the numbers printed on the strip in the unit. That correspondence is what makes dead testing quick.
- **Wire numbers or colours** are printed against the conductors. Under harmonised Australian colours, active is brown, neutral is blue and earth is green and yellow; older equipment uses red, black and green.
- **Rungs are numbered down the left margin**, and a cross-reference beside a coil lists the rungs where its contacts appear.

!FIG[ladder-rung]

## Reading one under time pressure

Do not read the whole drawing. Work backwards from the thing that is not happening.

1. **Name the load** that is not running: compressor, condenser fan, evaporator fan, heater.
2. **Find that load in the power circuit** and identify the contactor or relay whose contacts feed it.
3. **Find that coil in the control circuit.** Every device between the coil and the supply rail is a condition that must be satisfied for the load to run.
4. **List those conditions in order.** That list is your test sequence — you now know exactly what to check and in what order.
5. **Use the legend for every abbreviation** rather than guessing. Guessing HPS as "high pressure switch" is usually right; guessing OPS as "oil pressure switch" when this manufacturer means "over-pressure sensor" is how you chase the wrong device.

>! Treat every diagram as a guide, not a guarantee. Equipment gets modified, retrofitted and repaired, and the drawing in the pocket may be a generation out of date. Prove what is actually there by test before you rely on it — and prove the circuit is de-energised before you put a probe or a hand anywhere near it.

## Written practice

**1.** A packaged unit's evaporator fan runs but the compressor does not. Describe, step by step, how you would use the manufacturer's schematic to narrow the fault, and explain why you start at the load rather than at the supply.

>? - Identify the load that is not running: the compressor motor.
>? - Find the compressor motor in the power circuit and identify the contactor whose main contacts feed it — for example a contactor labelled CC or C1.
>? - Find the coil with that same label in the control circuit. Everything drawn in series between that coil and the supply rail is a condition that must be met before the compressor can run.
>? - Write those conditions down in the order they appear — for example isolation, control supply, thermostat, low pressure switch, high pressure switch, overload, lockout relay contact, anti-recycle timer contact. Use the legend to confirm every abbreviation rather than assuming.
>? - That ordered list becomes the test sequence: check each device in turn, using the terminal numbers on the drawing, which match the numbers on the terminal strip.
>? - Note which of those devices are manual reset, because a popped reset button is immediate evidence of which one tripped.
>?
>? Why start at the load: the evaporator fan running already proves the incoming supply, the isolator and the control supply are alive, so testing from the supply end repeats work that is already done. Starting at the load that has failed and working back through only the devices that feed it confines the search to the part of the circuit that can possibly be at fault, which is faster and does not depend on reading the whole drawing.

**2.** Explain the relationship between a contactor coil and its main contacts, and why that relationship decides where you look for a fault.

>? A contactor has two electrically separate parts. The coil is a small electromagnet supplied from the control circuit, drawing a low current. The main contacts are heavy contacts in the power circuit, rated for the motor current. When the coil is energised, the magnetic field pulls the armature in and closes the main contacts, so the motor is switched by the contacts, not by the control devices.
>?
>? On the diagram the two parts are drawn in different places — the coil down in the control circuit and the contacts up in the power circuit — but they carry the same label, which is how you connect them. Auxiliary contacts of the same contactor may appear in other rungs again, carrying the same label.
>?
>? Why it decides where to look: the control devices — thermostat, pressure switches, timers, safeties — are all in series with the coil, which means every one of them is a condition for the load to run. So when a load does not run, the fault is far more often in the low-current control path than in the power circuit. Finding the coil and listing what feeds it gives you the complete set of conditions and therefore the complete set of things to test. It also explains why the control circuit can be at a different voltage from the power circuit: a 24 V control transformer can operate a coil that switches a 415 V motor.

**3.** Name the three types of drawing a manufacturer may supply for a packaged unit and state which one you would use for each of these tasks: landing field wiring at the terminal strip, working out why a lockout relay has tripped, and locating the phase failure relay inside the cabinet.

>? The three types are the schematic or ladder diagram (electrical logic drawn as rungs between two rails), the connection or wiring diagram (every terminal, wire number and physical connection), and the pictorial or layout diagram (where the components physically sit in the cabinet).
>?
>? - Landing field wiring at the terminal strip: the connection diagram, because it shows each terminal number, which conductor lands on it and which wiring is field-installed rather than factory-installed.
>? - Working out why a lockout relay has tripped: the schematic, because it shows the logic — which safety devices are in series in the control path, where the lockout relay coil is energised from and where its contacts appear.
>? - Locating the phase failure relay inside the cabinet: the pictorial or layout diagram, because it shows physical position rather than electrical logic.

## What to remember

- The schematic shows logic, the connection diagram shows wires, the pictorial shows position.
- The power circuit carries motor current; the control circuit carries coil current and holds the decisions.
- The coil lives in the control circuit, its main contacts live in the power circuit, and they share a label.
- Devices are drawn de-energised and in their normal state.
- Work backwards from the load that is not running, and list every condition in series with its coil.
- The legend defines every abbreviation on that particular drawing — read it, do not guess.`,
          quiz: [
            {
              q: "On a manufacturer's schematic, where do you find a contactor's coil and where do you find its main contacts?",
              options: [
                "Both in the power circuit, drawn together",
                "Coil in the control circuit, main contacts in the power circuit, both carrying the same label",
                "Coil in the power circuit, main contacts in the control circuit",
                "Both in the control circuit, drawn together",
              ],
              answer: 1,
              explain: "The coil is a low-current electromagnet operated by the control circuit; the main contacts carry motor current in the power circuit. They are drawn apart but share a label, which is how you connect the decision to the load. Drawing them together would defeat the purpose of a ladder diagram, which arranges circuits by logic rather than by physical grouping.",
            },
            {
              q: "A contact is drawn closed on the schematic, but the device is a high pressure switch on a running unit. What does the drawn position tell you?",
              options: [
                "The switch is faulty, because it should be drawn open",
                "Devices are drawn de-energised and in their normal position, so this switch is normally closed and opens on rising pressure",
                "The switch has been bypassed at the factory",
                "The drawing shows the unit in a locked-out state",
              ],
              answer: 1,
              explain: "Diagram convention is to draw every device de-energised and in its normal state. A high pressure switch is normally closed and opens when pressure rises to the setting, so a closed contact on the drawing is exactly what you expect. Reading drawn state as actual state is a common and expensive mistake.",
            },
            {
              q: "You need to land field wiring on a rooftop package. Which drawing do you work from?",
              options: [
                "The ladder or schematic diagram",
                "The connection or wiring diagram",
                "The refrigeration piping schematic",
                "The pictorial layout diagram",
              ],
              answer: 1,
              explain: "The connection diagram shows terminal numbers, wire identification and which wiring is field-installed rather than factory-installed — exactly what landing conductors needs. The schematic shows logic without physical terminals, and the pictorial only shows where things sit.",
            },
            {
              q: "Why is working backwards from the load that has failed faster than tracing from the supply?",
              options: [
                "Because the supply end is usually inaccessible",
                "Because a load that is not running has a known coil, and everything in series with that coil is the complete set of conditions to test",
                "Because the power circuit cannot be tested safely",
                "Because manufacturers draw the diagram backwards",
              ],
              answer: 1,
              explain: "Identifying the failed load leads you to one coil, and the devices in series with that coil are the entire list of possible causes in the control path — a short, ordered test sequence. Tracing from the supply covers circuits that are already proved by whatever else on the unit is still running.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "legend-and-abbreviations",
          title: "The legend is the key to the whole drawing",
          minutes: 11,
          simple: "Every diagram uses short codes instead of words, and the little box of definitions in the corner tells you what each code means on that particular drawing. Skip it and you are guessing at a foreign language; read it first and the drawing translates itself. It is the key on a street map.",
          refs: REFS_DIAG,
          content: `The legend is a small block of text, usually in a corner or on a separate sheet, listing every abbreviation used on the drawing. It takes thirty seconds to read and it is the highest-value thirty seconds you will spend on a diagram, because manufacturers do not agree with each other. One brand's CR is a control relay; another's is a compressor relay. One brand's TD is a time delay; another's is a temperature difference.

**Read the legend before you read the circuit, every time.** In an assessment, quoting the legend's own words when you name a device is what proves you read the drawing rather than recited a list.

## Abbreviations you will meet most often

| Code | Usual meaning | What it is |
|---|---|---|
| COMP, C, CM | Compressor motor | Load |
| CC, C1, KM1 | Compressor contactor | Coil plus contacts |
| CFM, OFM | Condenser fan motor, outdoor fan motor | Load |
| EFM, IFM | Evaporator fan motor, indoor fan motor | Load |
| CH, CCH | Crankcase heater | Load |
| HPS, HP, HPC | High pressure switch or cut-out | Safety |
| LPS, LP, LPC | Low pressure switch or cut-out | Safety or control |
| OPS, OPD | Oil pressure differential switch | Safety |
| OL, OLR, TOL | Overload relay, thermal overload | Safety |
| IOL, KLIXON | Internal overload, internal thermal protector | Safety |
| DTS, DGT | Discharge temperature switch, discharge gas thermostat | Safety |
| PFR, PMR, PSR | Phase failure, phase monitor or phase sequence relay | Safety |
| FS, PS | Flow switch, proof-of-flow switch | Safety |
| FT, AFT | Freeze thermostat, anti-frost thermostat | Safety |
| LOR, LR | Lockout relay | Latching relay |
| ARD, ASCT, TDR | Anti-recycle device, anti-short-cycle timer, time delay relay | Timer |
| TC, TS, RT, ST | Thermostat, room thermostat, space thermostat | Control |
| DTC, DFT | Defrost time clock, defrost timer | Control |
| DTT, DTERM | Defrost termination thermostat | Control |
| LLS, SV | Liquid line solenoid valve | Load |
| RV, 4WV | Reversing valve solenoid | Load |
| CR, RY | Control relay | Coil plus contacts |
| T, CT, TX | Control transformer | Supply |
| F, FU | Fuse | Protection |
| SC, RC | Start capacitor, run capacitor | Motor component |
| PR, PTCR | Potential relay, positive temperature coefficient start device | Motor starting |

## Symbol conventions

- A **normally-open contact** is drawn as two short parallel lines with a gap. A **normally-closed contact** has the same shape with a diagonal stroke through it. Both are drawn in the de-energised state.
- A **coil** is drawn as a circle or a rectangle in the rung, with its label inside or beside it.
- A **motor** is a circle with M, or the load symbol the manufacturer's key defines.
- **Pressure-operated** and **temperature-operated** devices carry a small symbol or a letter indicating what operates them, and the setting is often printed beside them.
- **A manual reset device** is marked, often with an R or the word reset, and the legend will say so. That marking is worth finding before you start testing.
- **Links and jumpers** fitted at the factory to make a circuit complete where an optional device is not fitted are shown as a short bar between terminals. Removing a link and fitting the optional device is a normal commissioning task — and a link left in when a device was fitted is a real fault.

## Wire identification

- **Wire numbers** printed against each conductor correspond to terminal numbers. On a well-drawn diagram, every conductor between two terminals carries the number of the node, so all conductors joined at one point share a number.
- **Colours** under the harmonised Australian scheme: brown for active, blue for neutral, green and yellow for earth; brown, black and grey for the three actives of a three-phase supply. Older equipment uses red for active, black for neutral and green for earth, and imported equipment may use anything the legend defines.
- Never identify a conductor by colour alone on used equipment. Prove it.

>! Colour is an indication, never proof. Equipment gets rewired, imported, repaired and modified. Before touching any conductor, isolate, lock and tag, and prove de-energised with a tester you have proved on a known live source before and after — test, verify, test.

## Written practice

**1.** You open a drawing and find the devices labelled CC, IOL, LOR and ARD in the same rung. Explain what each is likely to be and how you would confirm it.

>? - CC is most likely the compressor contactor. In this rung it will be the coil; its main contacts will appear in the power circuit feeding the compressor motor, and any auxiliary contacts will appear elsewhere with the same label.
>? - IOL is most likely the compressor internal overload, the thermal protector embedded in or attached to the motor windings, wired into the control path so that it drops the contactor out when the windings get too hot.
>? - LOR is most likely the lockout relay. The contact in this rung will be one of its contacts; its coil will appear in another rung fed from the safety trip path.
>? - ARD is most likely the anti-recycle device, a timer contact that keeps the compressor off for a minimum period after it stops.
>?
>? How to confirm: read the legend on that drawing, which defines every abbreviation for that manufacturer, and cross-check by finding every occurrence of each label on the sheet — a coil somewhere and its contacts elsewhere. Manufacturers do not use the same codes as each other, so a code that means one thing on one brand can mean something different on the next, and confirming against the legend rather than assuming is what the assessment is testing.

**2.** Why must a technician not identify a conductor by its colour alone when working on an existing packaged unit?

>? Colour is a convention, not a guarantee. Australian harmonised colours are brown for active, blue for neutral and green and yellow for earth, with brown, black and grey for three-phase actives; older Australian equipment uses red, black and green, and imported equipment may follow a different scheme again, which is why the legend states which convention the drawing uses.
>?
>? Beyond that, existing equipment has been worked on. Wires get replaced with whatever was on the van, circuits get modified, control transformers get added, and repairs get made without records. A conductor coloured as a neutral may have been reused as a switched active.
>?
>? The consequence is that assuming a colour can put a person in contact with a live conductor they believed was neutral or earth. The correct approach is to isolate, lock and tag, then prove de-energised with a test instrument that has been proved on a known live source immediately before and immediately after the test, and to use the drawing plus continuity testing to establish what each conductor actually is.

**3.** A commissioning sheet says "remove factory link between terminals 7 and 8 when a remote flow switch is fitted". Explain what the link is doing and what fault you would expect if it were left in place.

>? The link is a short bar or wire fitted at the factory that makes the control path continuous across terminals 7 and 8 where no optional device is fitted. Without it the rung would be open and the load could never run, so the manufacturer completes the circuit with a link and lets the installer replace it with the optional device.
>?
>? When a remote flow switch is fitted, its contacts belong in that gap so that the compressor circuit is only complete while the switch proves water flow.
>?
>? If the link were left in place with the flow switch also wired in, the link would parallel the switch and permanently bridge it. The safety would then be electrically inert: the unit would start and run with no flow at all, and the flow switch could open without having any effect. That is a bypassed safety, with the risk of freezing or bursting the heat exchanger, and it would also make the switch appear healthy on a continuity test taken across the terminals, because you would be reading the link rather than the switch.

## What to remember

- Read the legend before the circuit; abbreviations are manufacturer-specific.
- A coil and its contacts share a label and appear in different places.
- Devices are drawn de-energised and in their normal position; NC contacts are drawn closed.
- Factory links complete a rung where an option is not fitted, and must come out when the option goes in.
- Harmonised colours are brown active, blue neutral, green and yellow earth — but prove every conductor.
- Note which devices are manual reset before you begin testing.`,
          quiz: [
            {
              q: "Why must the legend be read before tracing the circuit?",
              options: [
                "Because it lists the unit's serial number",
                "Because abbreviations are manufacturer-specific and the same letters mean different devices on different drawings",
                "Because it gives the refrigerant charge",
                "Because it is required by AS/NZS 3000",
              ],
              answer: 1,
              explain: "There is no universal abbreviation standard, so CR, TD, OPS and similar codes vary between brands. The legend defines them for that drawing, and quoting it is what proves you read the diagram rather than recalled a generic list.",
            },
            {
              q: "A factory link is fitted between two control terminals where an optional freeze thermostat can be installed. What happens if the thermostat is wired in but the link is left in place?",
              options: [
                "The thermostat operates normally",
                "The link parallels the thermostat, permanently bridging it, so the safety has no effect",
                "The control circuit fuse blows immediately",
                "The thermostat becomes manual reset",
              ],
              answer: 1,
              explain: "A link across the device is a permanent parallel path, so the circuit stays complete whether the safety opens or not. The safety is electrically bypassed and will even read as closed on a continuity test taken across the terminals, because the meter reads the link.",
            },
            {
              q: "Under the harmonised Australian colour scheme, which colours identify active, neutral and earth in a single-phase circuit?",
              options: [
                "Red, black, green",
                "Brown, blue, green and yellow",
                "Black, grey, brown",
                "Blue, brown, black",
              ],
              answer: 1,
              explain: "Harmonised colours are brown for active, blue for neutral, and green and yellow striped for earth; the three-phase actives are brown, black and grey. Red, black and green is the older Australian scheme still found on existing equipment — which is exactly why colour is treated as an indication and every conductor is proved by test.",
            },
            {
              q: "On a schematic you find one device labelled LOR drawn as a coil, and another LOR drawn as a contact in a different rung. What does that tell you?",
              options: [
                "There are two separate lockout relays",
                "The drawing contains an error",
                "They are the coil and one contact of the same lockout relay, and the coil operates that contact",
                "The contact is a spare terminal",
              ],
              answer: 2,
              explain: "Shared labelling is the convention that ties a coil to its contacts wherever they appear on the sheet. Finding every occurrence of one label is how you work out what a relay actually does — and a lockout relay typically has a contact in the compressor rung and a sealing contact around its own coil.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "power-and-control-under-pressure",
          title: "Following one rung at a time",
          minutes: 11,
          simple: "A ladder diagram is read like a list of sentences, not like a picture. Each horizontal rung says: if all these switches are closed, this one thing turns on. Take them one at a time and even a busy drawing becomes a handful of short sentences.",
          refs: REFS_DIAG,
          content: `Panic on a wiring diagram comes from trying to see all of it at once. You do not have to. A ladder diagram is built so that each rung is independent, and each rung says one sentence. Read the sentences.

## The grammar of a rung

Two vertical rails carry the supply — on a single-phase control circuit, an **active rail** on the left and a **neutral rail** on the right. Between them run horizontal rungs. Each rung contains:

- **Switching devices**, drawn in series, on the active side.
- **One load**, drawn at the neutral end of the rung.

The sentence it makes is: *if every switch in this rung is closed, the load at the end of it is energised.* Nothing more. A rung with a thermostat, a low pressure switch, a high pressure switch and a contactor coil says: if the room calls, and the suction pressure is above the cut-out, and the head pressure is below the cut-out, the compressor contactor pulls in.

Two structural rules make the whole thing work, and they are the two things a marker checks first when you draw one:

1. **Switches and safeties go in series** with the load they control, because series means *all conditions must be true*. Any one of them opening breaks the path and stops the load. That is the definition of a safety chain.
2. **Loads go in parallel** across the rails, each on its own rung. Parallel means each load gets the full supply voltage and each is independent. Two loads in series would share the voltage, so neither would work properly and one failing would stop the other.

!FIG[ladder-rung]

## The 60-second method

Given a drawing and a symptom, work like this:

1. **Find the rails** and note the control voltage. Is it 240 V active and neutral, or the secondary of a transformer at 24 V?
2. **Find the load that is misbehaving** and put your finger on its rung.
3. **Read that rung left to right**, naming each device from the legend. Say it out loud as a sentence with "and" between the conditions.
4. **For any contact in the rung, find its coil.** A contact labelled CR is not a condition in itself — it is the output of another rung. Go to that rung and read it too. This is how a two-line problem turns into a chain you can follow.
5. **Note the reset type** of every safety in the chain as you go.
6. Only then start testing.

### Worked reading

Suppose a rung reads, left to right: active rail, a contact marked IS, a contact marked ARD, a contact marked LOR, a switch marked TC, a switch marked LPS, a switch marked HPS, a coil marked CC, neutral rail.

Read it as: *the isolation switch is on, and the anti-recycle timer has timed out, and the lockout relay has not tripped, and the thermostat is calling, and the suction pressure is above the low pressure cut-in, and the head pressure is below the high pressure cut-out — then the compressor contactor is energised.*

That single sentence is your fault list. Six conditions, tested in order, and one of them is false.

## Where the two circuits meet

Remember that the control circuit and the power circuit are usually at different current levels and sometimes different voltages. The coil CC in the sentence above may draw well under an amp; its main contacts in the power circuit may switch 30 A per phase. A control transformer at 24 V lets a low-voltage thermostat and a run of thin control cable operate a 415 V motor safely.

This is also why you must never try to run a load directly from a control device that was never rated for it. A room thermostat with 5 A contacts will weld shut if somebody wires a compressor through it.

>! Never bypass, link out or jumper a safety device to get a unit running, not even "just to prove it". Every device in that chain is there because something can destroy the plant or hurt a person. If you must operate a device to test it, operate it as the manufacturer specifies, restore it immediately, and never leave the site with a safety defeated. Bypassing a safety is both a serious safety breach and, where the device is a required safety switching device, a compliance breach.

## Written practice

**1.** A rung on a chiller schematic reads: active rail, FS, FT, CR1 contact, CC coil, neutral rail. Write out the sentence the rung states and explain what you would do next if the compressor is not running.

>? The sentence: if the flow switch proves water flow, and the freeze thermostat is above its cut-out setting, and the contact CR1 is closed, then the compressor contactor coil CC is energised.
>?
>? What to do next:
>? - Confirm every abbreviation against the legend rather than assuming — the flow switch and freeze thermostat identifications in particular.
>? - CR1 is a contact, not a primary condition, so find the rung where the CR1 coil sits and read that rung as well. Its own conditions become part of the chain — it might be the run enable, an interlock from a building management system, or a sequence relay.
>? - Note which of the devices are manual reset. A freeze thermostat is very commonly manual reset, and a popped button is immediate evidence.
>? - Build the ordered condition list: water flow, freeze protection, CR1 and its own conditions, then the coil itself.
>? - Look at the plant for physical evidence before testing: is the pump running, is there flow, is the chilled water temperature low, is a reset button out.
>? - Then isolate, lock, tag and prove de-energised, and test continuity across each device in that list in order until one reads open circuit.

**2.** Explain why safeties are wired in series and loads in parallel, and what would go wrong if each rule were broken.

>? Safeties in series: series means the current has one path through every device, so all of them must be closed for the load to be energised. That is exactly the logic a safety chain needs — any single device opening for any reason must stop the load. If safeties were wired in parallel instead, each one would provide an alternative path around the others, so a device that opened would have no effect at all and the whole protective function would be lost.
>?
>? Loads in parallel: parallel means each load is connected directly across the two supply rails, so each receives the full supply voltage and each operates independently of the others. If two loads were wired in series, they would share the supply voltage between them according to their impedance, so neither would receive its rated voltage — a motor would not develop rated torque and would overheat, a solenoid might not pull in, a heater would deliver a fraction of its rated output. Worse, they would be interdependent: one load failing open would stop the other, and switching one would affect the other.
>?
>? Those two rules are also what a marker checks first on a drawn circuit, because they show whether the candidate understands the circuit or has only copied a picture.

**3.** Why is a contactor used rather than switching a compressor directly through the room thermostat?

>? A contactor separates the decision from the load. Its coil is a small electromagnet in the control circuit drawing well under an amp, and its main contacts are heavy contacts in the power circuit rated for the full motor current and for the inrush when the motor starts.
>?
>? Switching a compressor directly through a thermostat would put the entire motor current, and the much larger starting current, through contacts designed for a small control load. They would arc, overheat and weld shut, which leaves the compressor running continuously with no control at all — a failure that is both hard to spot and damaging.
>?
>? The contactor also allows the control circuit to be a different, lower voltage from the power circuit, so a 24 V control transformer can operate the coil while the contacts switch a 415 V three-phase motor. That keeps low-voltage control wiring, remote thermostats and long control runs safe and cheap. It also gives a convenient place to interrupt the motor circuit for every safety in the chain at once, and provides auxiliary contacts for interlocking other loads such as the condenser fans.

## What to remember

- Each rung is one sentence: all switches closed, one load on.
- Switches and safeties in series; loads in parallel across the rails.
- A contact in a rung is the output of another rung — go and read that one too.
- Note the control voltage and the reset type of every safety before you test.
- A contactor keeps motor current out of control devices and allows a lower control voltage.
- Never bypass a safety, not even temporarily.`,
          quiz: [
            {
              q: "Why are safety devices wired in series in the control path?",
              options: [
                "To share the supply voltage between them",
                "Because any one of them opening must be able to stop the load",
                "To reduce the current each device carries",
                "Because parallel connection would exceed the control transformer rating",
              ],
              answer: 1,
              explain: "Series gives a single current path through every device, so all must be closed for the load to run and any one opening breaks the chain. In parallel, each device would provide a path around the others, so an opening safety would have no effect at all — the protective function would be entirely lost.",
            },
            {
              q: "Two loads are accidentally wired in series across a 240 V control circuit. What is the result?",
              options: [
                "Both operate normally",
                "Each receives only part of the 240 V, so neither works correctly and one failing open stops the other",
                "Each receives 240 V, but the current doubles",
                "The circuit protection trips immediately",
              ],
              answer: 1,
              explain: "In series the supply voltage divides between the loads according to their impedance, so neither gets its rated voltage — motors will not develop rated torque and solenoids may not pull in. The loads also become interdependent, which is why every load belongs on its own rung in parallel across the rails.",
            },
            {
              q: "A rung contains a contact labelled CR2. What should you do with it when building your fault list?",
              options: [
                "Treat it as a fixed link and ignore it",
                "Find the rung containing the CR2 coil and read that rung as well, because its conditions are part of the chain",
                "Assume it is closed because relays fail closed",
                "Replace the relay before testing anything else",
              ],
              answer: 1,
              explain: "A relay contact is the output of another rung, not a condition in itself. Following the label back to the coil is what turns a short rung into the full chain of conditions. Assuming its state, or replacing parts before testing, is guessing.",
            },
            {
              q: "Under what circumstances may a technician link out a high pressure switch to get a unit running?",
              options: [
                "When the customer needs the plant urgently",
                "Briefly, provided the link is removed before leaving site",
                "Never — a safety device must not be bypassed",
                "When another safety in the string is still functional",
              ],
              answer: 2,
              explain: "There is no acceptable case for defeating a safety. The device is there because a condition exists that can destroy the plant or injure someone, and a bypass removes the protection at exactly the moment the plant is proving it is needed. It is a serious safety breach and, where the device is a required safety switching device, a compliance breach as well.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "the-lockout-string",
          title: "The lockout string: every device and what it senses",
          minutes: 14,
          simple: "A packaged unit has a row of guard switches wired one after another in the control wire. Each one watches a different thing that could wreck the machine, and if any single one opens, the whole compressor circuit drops out. Like a string of fairy lights wired the old way: one bulb out and the lot goes dark, which is the point.",
          refs: REFS_CONTROL,
          content: `Given a manufacturer's diagram and its legend, you may be asked to identify the safety devices in the lockout string that could have tripped a lockout relay. The answer that scores is not a list of names — it is a list of names **with what each one senses**, because that is what tells the marker you could actually find the fault.

## What the string is

The lockout string is the run of safety devices wired **in series** in the control path that feeds the compressor contactor coil, usually through a lockout relay. Every device is normally closed while the plant is healthy. Any one of them opening breaks the path, the contactor drops out, the compressor stops, and on most packaged units the lockout relay latches so the unit stays off until somebody attends.

Not every unit has every device. Small air-cooled packages may have three; a water-cooled chiller may have nine. Read the drawing.

## The devices

| Device | What it senses | Typical cause of a trip | Usual reset |
|---|---|---|---|
| High pressure switch (HPS) | Discharge or condensing pressure | Dirty or blocked condenser, failed condenser fan, non-condensables, overcharge, blocked airflow, closed discharge valve, high ambient | Manual, almost always |
| Low pressure switch (LPS) | Suction pressure | Loss of charge, restricted liquid line or drier, closed liquid line solenoid, iced or blocked evaporator, failed evaporator fan, low load | Auto where used for pump-down control; manual where it is a true safety |
| Compressor internal overload or thermal protector (IOL, klixon) | Motor winding temperature, and current through the windings | Overloading, high discharge temperature, low airflow over a hermetic shell, single phasing, locked rotor, short cycling | Auto, but only after the windings cool — which can take an hour or more |
| External overload relay (OL, TOL) | Current drawn by the motor, thermally or electronically | Sustained overcurrent, single phasing, mechanical binding, low supply voltage | Manual or auto depending on the relay; usually set to manual on plant |
| Oil pressure differential switch (OPS) | Net oil pressure, the difference between oil pump discharge pressure and crankcase pressure, over a fixed time delay | Low oil level, worn oil pump, refrigerant flooding or foaming in the crankcase, blocked oil strainer, badly worn bearings | Manual, always — it has a time delay and a reset button |
| Phase failure or phase sequence relay (PFR) | Loss of a phase, phase reversal, phase imbalance, and often under- and over-voltage | Blown fuse in one phase, supply fault, incorrect connection after a supply change, voltage excursion | Auto on most, with a delay; some are manual |
| Freeze or anti-frost thermostat (FT) | Chilled water temperature or air-off temperature at the evaporator | Low water flow, low load, low charge, iced coil, failed evaporator fan, controller set too low | Manual, commonly |
| Discharge temperature switch (DTS) | Discharge line or compressor head temperature | High compression ratio, high superheat, low charge, non-condensables, failed valves, loss of cooling to the head | Manual, commonly |
| Flow switch (FS) | Water or brine flow through the heat exchanger, proving flow before the compressor can run | Pump not running, closed valve, blocked strainer, air locked circuit, failed switch paddle | Auto on the switch, but usually latched by a lockout relay |

Two more that often sit in the same string: a **high or low water temperature cut-out**, and on modern equipment an electronic **motor protection module** monitoring a chain of thermistors buried in the windings.

## Why the reset type matters

The distinction between **manual reset** and **auto reset** is not a design detail — it is a decision about whether a condition is allowed to clear itself.

- **Auto reset** is used where the condition is transient and self-correcting, and where restarting is not itself dangerous. A low pressure switch used for pump-down control resets automatically every cycle, by design. An internal overload resets when the windings cool.
- **Manual reset** is used where the trip means something is genuinely wrong and a person must look at it before the plant runs again. High pressure, oil failure, freeze protection and discharge temperature all fall here. If they reset themselves the plant would cycle on the fault, hiding the cause and destroying the compressor.

There is a diagnostic gift in this. **A manual reset device that has tripped leaves a popped button.** Walk up to the unit and look before you do anything else — you may have found the answer in five seconds. It is also why you must never simply press reset and walk away: the reset tells you which device tripped, and pressing it destroys that evidence without fixing anything.

>! Resetting a tripped safety without finding out why it tripped is the fastest way to turn a service call into a compressor replacement. Record which device tripped, find the cause, fix it, and only then reset. If a unit trips twice on the same safety, do not reset it a third time — investigate.

## Written practice

**1.** From a manufacturer's diagram for a water-cooled packaged unit you are asked to name the safety devices in the lockout string and say what each senses. Write the answer.

>? - High pressure switch: senses discharge or condensing pressure and opens on a rise, protecting against condenser fouling or blockage, loss of condenser water or fan, non-condensables and overcharge. Manual reset.
>? - Low pressure switch: senses suction pressure and opens on a fall, protecting against loss of charge, a restricted liquid line or drier, a closed solenoid, a blocked or iced evaporator and loss of load.
>? - Compressor overload, internal thermal protector or external overload relay: senses motor winding temperature and motor current, protecting the windings against overload, single phasing, locked rotor and repeated short cycling.
>? - Oil pressure differential switch: senses net oil pressure, that is oil pump discharge pressure minus crankcase pressure, over a fixed time delay, protecting the bearings against low oil level, a worn pump, a blocked strainer and refrigerant foaming in the crankcase. Manual reset.
>? - Phase failure or phase sequence relay: senses loss of a phase, reversed phase sequence and phase imbalance, protecting the motor against single phasing and protecting a scroll or screw compressor against reverse rotation.
>? - Freeze or anti-frost thermostat: senses chilled water or air-off temperature at the evaporator and opens on a fall, protecting the heat exchanger from freezing and bursting.
>? - Discharge temperature switch: senses discharge line or head temperature, protecting the compressor and the oil against thermal breakdown from high compression ratio, high superheat or low charge.
>? - Flow switch: proves water or brine flow through the heat exchanger before the compressor is permitted to run, protecting against a stopped pump, a closed valve or a blocked strainer.
>?
>? All of them are wired in series in the control path to the compressor contactor coil, normally closed while healthy, so that any one opening drops the contactor out and latches the lockout relay.

**2.** Explain the difference between manual reset and auto reset devices, and give two examples of each with the reason for the choice.

>? An auto reset device closes again by itself once the condition that opened it has gone. A manual reset device latches open when it trips and stays open until a person presses its reset button, regardless of whether the condition has cleared.
>?
>? Auto reset examples:
>? - A low pressure switch used as a pump-down control. It is designed to open and close every cycle as the suction pressure falls and rises, so automatic operation is the whole point.
>? - A compressor internal thermal protector. It opens on winding temperature and closes again when the windings cool, which protects the motor without needing anyone to attend; the condition is often transient, such as a single high-load start.
>?
>? Manual reset examples:
>? - A high pressure switch. A high head pressure trip means something real has happened — condenser fouled, fan failed, air in the system, overcharge. If it reset itself the plant would cycle on high pressure, hammering the compressor and hiding the cause.
>? - A freeze or anti-frost thermostat. A freeze trip means the heat exchanger was approaching the point of freezing and bursting, so a person must establish why before the plant runs again.
>?
>? The general principle: auto reset where the condition is transient and self-correcting and restarting is safe; manual reset where the trip indicates a genuine fault that a person must investigate. A useful consequence is that a manual reset device that has tripped leaves a popped button, which is direct evidence of which device operated.

**3.** A packaged unit has tripped twice this week on the same safety. The customer asks you to "just reset it and leave the button accessible so we can do it ourselves". Write your response and justify it.

>? I would decline, and explain why in these terms.
>?
>? A safety device is not an inconvenience — it is the last line of protection for the compressor and, in some cases, for people. It has operated because a real condition existed: high head pressure, low oil pressure, a freeze condition or an overload. Resetting it does nothing about that condition, so the plant simply runs back up to the same trip.
>?
>? A device that has tripped twice on the same fault is telling us the cause is still present and probably getting worse. Continuing to reset it means the compressor runs repeatedly into the very condition the device exists to prevent, which typically ends in motor burnout, bearing failure or a burst heat exchanger — a far larger bill than the diagnosis, and potentially a refrigerant release.
>?
>? Leaving the reset accessible to untrained staff also removes the diagnostic evidence. The popped button is how the next technician knows which device operated, and repeated resets erase both that and any pattern in the fault history.
>?
>? What I will do instead: record which device tripped and its setting, diagnose the cause — check condenser condition and airflow or water flow, charge, superheat, oil level and pressure, supply voltage and phases as the device indicates — repair it, then reset the device myself, run the unit and verify it holds. If the plant needs to keep running before a part arrives, that is a conversation about temporary measures that do not defeat the protection, not about bypassing or repeatedly resetting it.

## On the job

- The string is series-connected, normally-closed devices in the control path to the compressor contactor.
- Name the device **and** what it senses — that is where the marks are.
- Oil pressure switches sense the difference between oil pump discharge and crankcase pressure, on a time delay.
- Phase failure relays protect against single phasing and, on scrolls and screws, reverse rotation.
- Manual reset means a person must investigate; auto reset means the condition is transient.
- Look for a popped reset button before you pick up a meter.`,
          quiz: [
            {
              q: "What does an oil pressure differential switch actually measure?",
              options: [
                "The absolute pressure at the oil pump discharge",
                "The difference between oil pump discharge pressure and crankcase pressure, over a time delay",
                "The oil level in the sight glass",
                "The temperature of the oil in the sump",
              ],
              answer: 1,
              explain: "Useful oil pressure is net pressure: what the pump develops above the crankcase pressure it is working against. A time delay lets that difference build during starting before the switch is allowed to trip. Absolute discharge pressure alone would read high simply because the crankcase is at suction pressure, and level and temperature are separate measurements.",
            },
            {
              q: "Which safety device protects a scroll compressor against running backwards after a supply alteration?",
              options: [
                "High pressure switch",
                "Discharge temperature switch",
                "Phase failure and phase sequence relay",
                "Flow switch",
              ],
              answer: 2,
              explain: "Reverse rotation comes from reversed phase sequence, which only a phase sequence or phase monitoring relay detects — and it detects it before the compressor starts. A scroll run backwards makes noise and no pressure difference, so a high pressure switch never sees anything and a discharge temperature switch reacts far too late.",
            },
            {
              q: "Why are high pressure switches on packaged plant almost always manual reset?",
              options: [
                "Because they are cheaper to manufacture",
                "Because the trip indicates a genuine fault that a person must investigate before the plant runs again",
                "Because they cannot detect when pressure falls",
                "Because AS/NZS 3000 requires it",
              ],
              answer: 1,
              explain: "A high pressure trip means something real: fouled condenser, failed fan, non-condensables, overcharge. An auto reset device would let the plant cycle repeatedly on the fault, hiding the cause and destroying the compressor. Manual reset forces attendance and leaves a popped button as evidence of which device operated.",
            },
            {
              q: "A unit will not start and the low pressure switch is found open, but the standing pressure is normal and the switch is used for pump-down control. What does this suggest?",
              options: [
                "The switch has failed and must be replaced immediately",
                "The unit has lost its charge",
                "The switch may simply be in its normal pumped-down state, so the liquid line solenoid and thermostat circuit should be checked first",
                "The compressor is seized",
              ],
              answer: 2,
              explain: "On a pump-down system the low pressure switch is a control, not just a safety: it is meant to be open when the system has pumped down and the thermostat is satisfied. Before condemning the switch, check whether the thermostat is calling and whether the liquid line solenoid is opening — if the solenoid stays shut, suction pressure never rises to the cut-in.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "lockout-relays-and-timers",
          title: "Lockout relays and anti-recycle timers",
          minutes: 11,
          simple: "A lockout relay is a memory: when a safety opens even for a moment, the relay remembers and holds the machine off until someone comes and resets it. An anti-recycle timer is a stopwatch that stops the compressor restarting too soon after it stops. Together they stop a machine hammering itself to death.",
          refs: REFS_CONTROL,
          content: `A safety device on its own has a weakness: if the condition clears, the contact closes and the plant restarts. On a high pressure trip, that means the unit runs up, trips, cools slightly, restarts, trips again — dozens of times an hour, each restart another inrush and another shock to the compressor. The lockout relay and the anti-recycle timer are the two devices that stop that.

## The lockout relay

A **lockout relay** is a latching relay in the control circuit. Wired around the safety string, it converts a momentary trip into a permanent stop.

The classic arrangement works like this:

1. The safety string feeds the compressor contactor coil.
2. A lockout relay coil is connected so that it is energised when the safety string opens — often through the safety string's other side, or through a normally-closed auxiliary path.
3. Once energised, the lockout relay **seals itself in** through one of its own normally-open contacts, so it stays energised even after the safety device closes again.
4. A **normally-closed lockout relay contact in the compressor rung opens**, keeping the compressor off.
5. Because the seal-in path is fed from the control supply, the only way to drop the relay out is to **interrupt the control circuit supply** — pressing a reset button that breaks the seal-in, or switching the unit off at the isolator.

The behaviour you should be able to describe: **a single momentary opening of any device in the string locks the unit out until it is manually reset**, and the unit will not restart on its own no matter what the plant does afterwards.

Modern packaged units and chillers do the same thing in software: the controller latches a fault code, holds the compressor off and requires a reset at the keypad or a power cycle. The logic is identical, and the fault code replaces the popped button as your evidence.

### Why lockout is worth having

- It **preserves evidence**. A latched lockout tells you the plant tripped even if the condition has long since cleared. Without it, a unit that tripped at 2 am on high head pressure looks perfectly healthy at 9 am.
- It **prevents cycling on a fault**, which is what actually destroys compressors — repeated inrush current, repeated liquid slugging and repeated loss of oil return.
- It **forces attendance**, which is the entire purpose of a manual reset philosophy.

## The anti-recycle timer

An **anti-recycle timer** (also called an anti-short-cycle timer or minimum off-time timer) enforces a minimum period between compressor stops and the next start — commonly around five minutes on commercial plant, sometimes three, sometimes longer on large machines. Some also enforce a **minimum run time** once started.

Three reasons it exists:

1. **Pressure equalisation.** Immediately after a compressor stops, the discharge side is still at high pressure. A single-phase compressor with a permanent split capacitor motor and no start assistance has very little starting torque and may not be able to start against that differential — it will stall, draw locked-rotor current and trip its overload. Waiting lets the pressures equalise through the system.
2. **Motor thermal protection.** Starting current is several times run current, and each start puts heat into the windings. A motor started repeatedly in quick succession heats up faster than it can shed the heat, and the internal overload eventually opens — leaving the plant off for an hour while the windings cool.
3. **Oil return and general wear.** Very short run cycles never return oil to the compressor, and repeated contactor operations wear the contacts.

On the diagram, the timer usually appears as a contact in series in the compressor rung, labelled ARD, ASCT or TDR, sometimes drawn with the symbol for a timed contact. It may be a plug-in timer module, a function of the unit controller, or a small board mounted next to the contactor.

### Time delay on make and time delay on break

Two different timer behaviours appear on refrigeration diagrams, and the assessment likes the distinction:

- **Time delay on energisation (on make)** — the contact changes state a set time *after* the coil is energised. Used to stagger starts, to hold a compressor off while a fan or pump proves flow, and for the oil pressure switch's start-up bypass.
- **Time delay on de-energisation (on break)** — the contact changes state a set time *after* the coil is de-energised. Used to run a fan on after a compressor stops, and for minimum off-time functions.

>! A unit that keeps stopping and starting is not cured by shortening or bypassing the anti-recycle timer. Short cycling is a symptom — of an oversized machine, a differential set too tight, a low charge, a fouled coil or a control fault. Find the cause. Removing the timer just lets the compressor destroy itself faster.

## Written practice

**1.** Describe how a lockout relay converts a momentary safety trip into a permanent stop, and explain how the unit is reset.

>? The lockout relay is a latching relay in the control circuit. Its coil is arranged to be energised when a device in the safety string opens. As soon as it energises, one of its own normally-open contacts closes to form a seal-in path around the coil, so the coil now holds itself energised from the control supply independently of the safety device that started it. At the same time a normally-closed contact of the same relay, wired in series in the compressor contactor rung, opens.
>?
>? The result is that even if the safety device closes again a second later — a high pressure switch whose pressure has fallen, for example — the compressor cannot restart, because the lockout relay is still energised through its own seal-in and its normally-closed contact is still holding the compressor rung open.
>?
>? Resetting requires the seal-in path to be broken, which means interrupting the control circuit supply: pressing the reset button, which opens that path, or switching the unit off at the isolation switch and back on. Once the coil drops out, the normally-closed contact recloses and the compressor rung is restored, provided the original safety device has itself closed.
>?
>? On electronic controllers the same logic is implemented in software: the controller latches a fault code, holds the compressor off and requires a reset at the keypad or a power cycle.

**2.** A single-phase condensing unit trips its overload every time it attempts to restart within a minute of stopping, but starts normally after ten minutes. Explain what is happening and what device prevents it.

>? Immediately after the compressor stops, the discharge side of the system is still at high pressure while the suction side is low. The compressor motor has to start against that pressure difference.
>?
>? A single-phase motor, particularly a permanent split capacitor type with no start capacitor or start relay, develops very little starting torque. Against a large pressure differential it cannot break away: the rotor stalls, the motor draws locked-rotor current — several times its running current — and the winding temperature climbs quickly until the internal overload or thermal protector opens. After ten minutes the pressures have equalised through the system, so the load at start is small and the motor starts easily.
>?
>? The device that prevents it is the anti-recycle timer, also called an anti-short-cycle or minimum off-time timer. It holds the compressor off for a set minimum period after each stop, commonly around five minutes, so a restart cannot be attempted until pressures have equalised and the windings have shed some heat. Its contact appears in series in the compressor contactor rung.
>?
>? The correct response is not to shorten or bypass the timer but to find why the unit is short cycling in the first place — thermostat differential too tight, oversized plant, low charge, fouled condenser or a control fault — and to check whether the compressor should have a start capacitor and relay fitted.

**3.** Explain the difference between a time delay on energisation and a time delay on de-energisation, and give one refrigeration use for each.

>? A time delay on energisation, also called delay on make or on-delay, changes the state of its contacts a set time after its coil is energised. Nothing happens at the instant of switch-on; the contact operates once the set time has elapsed.
>?
>? A time delay on de-energisation, also called delay on break or off-delay, changes the state of its contacts a set time after its coil is de-energised. The contact holds its energised state through the delay and then releases.
>?
>? A refrigeration use for delay on energisation: staggering the start of a compressor behind its condenser water pump or evaporator fan, so that flow is established and proved before the compressor is permitted to start. The same function bypasses the oil pressure differential switch during starting, giving the oil pump time to build net pressure before the switch is allowed to trip.
>?
>? A refrigeration use for delay on de-energisation: running the evaporator fan or the condenser fan on for a period after the compressor stops, to recover the remaining cooling from the coil, help oil and refrigerant migration settle, or continue to remove heat from a hot condenser.

## What to remember

- A lockout relay seals itself in and turns a momentary trip into a latched stop.
- Reset requires the seal-in path to be interrupted — reset button or isolator, not just the safety reclosing.
- Lockout preserves the evidence of a trip and prevents cycling on a fault.
- Anti-recycle timers enforce a minimum off time, commonly around five minutes.
- The reasons are pressure equalisation, motor winding heat and oil return.
- Delay on make times from energisation; delay on break times from de-energisation.`,
          quiz: [
            {
              q: "How does a lockout relay stay energised after the safety device that tripped it has closed again?",
              options: [
                "The safety device latches mechanically",
                "It seals itself in through one of its own normally-open contacts fed from the control supply",
                "A capacitor holds the coil energised",
                "The contactor holds it in through an auxiliary contact",
              ],
              answer: 1,
              explain: "The seal-in contact provides a parallel path around the initiating device, so the coil holds itself on from the control supply. That is why resetting means breaking the control supply through a reset button or the isolator — the safety reclosing on its own does nothing.",
            },
            {
              q: "What is the main reason an anti-recycle timer enforces a minimum off period?",
              options: [
                "To save energy during light load",
                "To let system pressures equalise and let the motor windings cool, so the compressor can start against a low differential",
                "To allow the defrost cycle to complete",
                "To reduce noise complaints from neighbours",
              ],
              answer: 1,
              explain: "Immediately after a stop the discharge side is still at high pressure, and a single-phase motor especially may not develop enough torque to start against it — it stalls, draws locked-rotor current and trips the overload. The delay also lets the windings shed start-up heat and improves oil return. Energy and noise are incidental.",
            },
            {
              q: "A timer contact changes state five minutes after its coil is de-energised. What type of timer is it, and what is a typical refrigeration use?",
              options: [
                "Delay on make, used to stagger a compressor behind a pump",
                "Delay on break, used to run a fan on after the compressor stops",
                "Delay on make, used for defrost termination",
                "Delay on break, used to prove water flow before starting",
              ],
              answer: 1,
              explain: "Timing from de-energisation is delay on break, or off-delay, and running a fan on after the compressor stops is a standard use. Staggering a start behind a pump and proving flow before starting both time from energisation, so they are delay-on-make functions.",
            },
            {
              q: "Why is a latched lockout useful to the technician who arrives the next morning?",
              options: [
                "It automatically clears the fault",
                "It preserves evidence that the unit tripped and on which device, even after the condition has cleared",
                "It logs the ambient temperature at the time of the trip",
                "It prevents the customer from calling for service",
              ],
              answer: 1,
              explain: "A unit that tripped overnight on high head pressure can look perfectly healthy in the cool of the morning. The latched lockout — or the controller's latched fault code — is what tells you it tripped at all and which device operated, which is the starting point for the diagnosis.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "finding-the-tripped-safety",
          title: "Working out which safety tripped on a de-energised unit",
          minutes: 13,
          simple: "With the power off you cannot watch anything happen, so you test each guard switch to see whether it is closed or open. A closed one lets the meter's test current straight through; the open one is the one that stopped the machine. It is checking a string of fairy lights bulb by bulb.",
          refs: REFS_SAFETY,
          content: `You are handed a unit that will not run. The safest way to find the tripped device is with the power off, using resistance and continuity across each device in turn against the manufacturer's diagram. It is quick, it is repeatable, and it does not require anybody to stand in front of an open switchboard with a live probe.

## Before the meter comes out

1. **Isolate** at the unit's isolation switch and, where required, at the switchboard.
2. **Lock and tag** the isolation point. Your lock, your tag, your name.
3. **Prove de-energised**: prove the test instrument on a known live source, test every conductor and every combination at the point of work, then prove the instrument again on the known live source. Test, verify, test.
4. **Discharge and prove capacitors** are dead before touching them — run and start capacitors hold a charge that will hurt you.
5. **Get the diagram and the legend**, and identify the terminal numbers you will be testing at.
6. **Look at the unit first.** A popped manual reset button, a tripped overload flag, a controller fault code, a blown control fuse, a burnt contact, oil around a joint or a frosted line all point at an answer before you test anything.

>! Never work on or test a live circuit as a first resort. Under AS/NZS 4836 the default is that work is carried out de-energised, with a documented risk assessment, justification and controls before any live work is contemplated, and the electrical safety regulations require a risk assessment before testing an energised circuit. If a live measurement is genuinely unavoidable, it needs the correct instrument, correct PPE, a safety observer and authorisation. Dead testing answers this particular question, so there is no case for going live.

## The dead-test method

The principle: a **closed** switch is a piece of wire, so an ohmmeter across its two terminals reads close to zero — a fraction of an ohm up to about one ohm allowing for the leads. An **open** switch is a gap, so the meter reads open circuit, over-range or OL. Work along the string until you find the one that reads open.

1. **List the string from the diagram**, in order, with the terminal numbers for each device.
2. **Null your leads.** Touch the probes together and note the lead resistance, or use the meter's relative function, so you are not calling 0.4 ohms of lead a bad contact.
3. **Measure across each device in turn**, probe on one terminal and probe on the other.
4. **Watch for parallel paths.** This is the step that catches people. If an indicator lamp, a resistor, another rung or a factory link is connected across the device you are testing, the meter reads that path instead of the switch and an open switch will look closed. If the diagram shows any parallel path, **disconnect one leg of the device** and measure the device alone.
5. **Record each reading** as you go, against the device name. A written list is what you show the customer and what you use to explain the repair.
6. **The device reading open circuit is the one holding the unit off.** If more than one reads open, work out which is cause and which is effect — for example, an open low pressure switch on a system that has lost its charge through a leak that also tripped nothing else.
7. **Confirm with physical evidence** before you condemn anything: standing pressures on the gauges, oil level in the sight glass, condenser condition, water flow, supply voltage on all phases, coil condition. A switch that reads open because the condition is genuinely present is a healthy switch doing its job.

### Interpreting the readings

| Reading across a safety device | What it means |
|---|---|
| Near zero ohms | Contact closed — this device is not the one holding the unit off |
| Open circuit / OL | Contact open — either it has tripped on a real condition, or the device has failed open |
| A few hundred ohms or an odd stable value | You are reading a parallel path, an indicator lamp or a coil, not the switch. Disconnect a leg and re-measure |
| Fluctuating or high but not open | Dirty, pitted or high-resistance contacts, or a poor termination — a real fault that will cause nuisance tripping and heating |

### Working out cause from the device

Once you know which device opened, the device itself tells you where to look:

- **High pressure switch open** — condenser airflow or water flow, fan operation, condenser cleanliness, non-condensables, overcharge, ambient.
- **Low pressure switch open** — charge, leak, liquid line restriction or drier, solenoid, evaporator airflow, ice, load.
- **Overload open** — supply voltage and balance, running current against nameplate, mechanical condition, short cycling history.
- **Oil pressure switch open** — oil level, oil pressure with the compressor running, foaming at start, crankcase heater operation, bearing condition.
- **Phase failure relay open** — fuses, supply voltage on all three phases, phase sequence, terminal tightness.
- **Freeze thermostat open** — water flow, load, charge, airflow, controller setpoint.
- **Flow switch open** — pump running, valves open, strainer clean, paddle intact, air locking.

## A short worked case

A rooftop package will not run. The unit is isolated, locked, tagged and proved dead. The diagram shows the compressor rung as: control supply, HPS, LPS, IOL, LOR contact, ARD contact, CC coil, neutral.

Readings taken, leads nulled at 0.3 ohms:

- Across HPS: **open circuit**
- Across LPS: 0.3 ohms
- Across IOL: 0.4 ohms
- Across LOR contact: 0.3 ohms
- Across ARD contact: 0.3 ohms
- Across CC coil: 41 ohms — a sensible coil resistance, so the coil is not open

The high pressure switch is open, and everything else in the string is closed. The unit is locked out on high pressure. Now go and find out why: standing pressure is high for the ambient, the condenser coil is matted with cottonwood, and the fan runs. Clean the condenser, verify head pressure after restart, then reset the switch and confirm the unit holds.

Notice that the coil resistance reading also proved the coil is not open circuit, which is a common failure that mimics a tripped safety.

## Written practice

**1.** Write the full procedure for determining which safety device has tripped on a packaged unit that is not energised, from arriving on site to identifying the device.

>? 1. Talk to the site and check the plant history, then look at the unit before touching anything: a popped manual reset button, a tripped overload flag, a controller fault code, a blown control fuse, burnt contacts, oil at a joint or a frosted line often identify the device immediately.
>? 2. Isolate at the unit isolation switch and at the switchboard where required, then lock and tag the isolation point with my own lock and tag.
>? 3. Prove de-energised: prove the test instrument on a known live source, test all conductors and combinations at the point of work, then prove the instrument again on the known live source.
>? 4. Discharge and prove any capacitors dead before working near them.
>? 5. Obtain the manufacturer's schematic and legend, identify the compressor contactor coil, and list every device in series with it in order, with its terminal numbers.
>? 6. Null the meter leads on the resistance range so lead resistance is not mistaken for a poor contact.
>? 7. Measure resistance across each device in the string in turn. A closed contact reads near zero; an open contact reads open circuit.
>? 8. Check the diagram for any parallel path across a device — an indicator lamp, a resistor, a factory link or another rung. Where one exists, disconnect one leg of the device and measure the device alone, or the parallel path will make an open switch read closed.
>? 9. Record each reading against the device name as I go.
>? 10. Identify the device that reads open circuit as the one holding the unit off, and check the contactor coil resistance as well to rule out an open coil.
>? 11. Confirm against physical evidence — standing pressures, oil level, condenser condition, water flow, supply voltage and phases — to establish whether the device tripped on a genuine condition or has failed.
>? 12. Diagnose and rectify the cause, then reset, restart and verify the unit holds, and record the whole thing.

**2.** Explain why a parallel path across a device can make a tripped safety read as healthy, and describe how you avoid the error.

>? An ohmmeter measures the resistance between the two points its probes touch, not the resistance of a particular component. If anything else is connected between those same two points, the meter reads the combination — and in a parallel combination the lowest resistance dominates.
>?
>? On a control circuit there are several things that can sit across a device: an indicator lamp or neon showing that the safety has tripped, a resistor, a factory link left in from a non-fitted option, a bypass timer contact around an oil pressure switch, or another rung that happens to connect the same two nodes. If any of these is present, an open safety device will still show a complete path, so the meter reads a low or moderate resistance and the switch looks closed. The tripped device is then missed entirely and the fault is chased somewhere else.
>?
>? How to avoid it: read the diagram before measuring, and specifically look for anything connected across the device's two terminals. If there is a parallel path, disconnect one leg of the device under test and measure the device on its own. Also treat any odd but stable reading — a few hundred ohms, or a value that looks like a lamp or a coil — as a warning that you are reading something other than the switch, and re-measure with a leg lifted.

**3.** A meter reads 0.3 ohms across the low pressure switch, 0.4 ohms across the overload, open circuit across the freeze thermostat, and 38 ohms across the compressor contactor coil. Interpret each reading and state your next action.

>? - Low pressure switch, 0.3 ohms: closed. With leads nulled this is effectively zero, so the contact is made and the switch is not holding the unit off.
>? - Overload, 0.4 ohms: closed. Also effectively zero; the overload has not tripped.
>? - Freeze thermostat, open circuit: open. This is the device holding the unit off — either it has tripped on a genuine low temperature condition, or the device has failed open.
>? - Compressor contactor coil, 38 ohms: a sensible coil resistance, so the coil is intact and not open circuit. An open coil is a common fault that looks like a tripped safety, so this reading usefully rules it out.
>?
>? Next action: do not reset. Establish why the freeze thermostat operated. Check water or brine flow through the evaporator — pump running, valves open, strainer clean, flow switch operating — and on an air coil check airflow, filter condition and fan operation. Check the refrigerant charge and suction pressure, look for ice on the coil, and check the controller setpoint and the thermostat's own setting and sensor position. Verify the thermostat itself by warming the sensing element and confirming it closes; if it will not close with the sensor warm, the device has failed and needs replacing.
>?
>? Then rectify the cause, reset the device, restart and verify that the unit holds and that the evaporator temperature stays above the cut-out, and record the readings, the cause and the repair.

## On the job

- Isolate, lock, tag, and prove dead with test, verify, test before any meter goes in.
- Look for a popped reset button or a fault code before you test anything.
- Null your leads, then measure across each device: near zero is closed, open circuit is the trip.
- Check the diagram for parallel paths, and lift a leg where one exists.
- Measure the contactor coil too — an open coil mimics a tripped safety.
- Diagnose the cause before resetting, and record every reading.`,
          quiz: [
            {
              q: "With the unit isolated and proved dead, what resistance would you expect across a healthy closed safety switch?",
              options: [
                "Open circuit",
                "Near zero ohms, allowing for lead resistance",
                "Around 40 ohms",
                "1 megohm or more",
              ],
              answer: 1,
              explain: "A closed contact is just a piece of conductor, so it reads a fraction of an ohm once the leads are nulled. Around 40 ohms is what a contactor coil reads, and a megohm reading belongs to an insulation resistance test, not a continuity check across a contact.",
            },
            {
              q: "A safety device reads 220 ohms rather than near zero or open circuit. What is the most likely explanation?",
              options: [
                "The switch is partly closed",
                "You are reading a parallel path such as an indicator lamp, a resistor or a bypass contact, not the switch itself",
                "The meter battery is low",
                "The device is a manual reset type",
              ],
              answer: 1,
              explain: "Contacts are either made or not; there is no partly closed. A stable moderate resistance means the meter is reading something else connected across the same two nodes. Lift one leg of the device and measure it alone, or a tripped safety will be missed.",
            },
            {
              q: "Which statement about testing an energised circuit is correct under Australian practice?",
              options: [
                "Live testing is normal practice for control circuit fault finding",
                "Work is carried out de-energised by default, and a risk assessment with justification, controls, correct instruments and a safety observer is required before any energised testing",
                "Live testing is acceptable provided rubber-soled boots are worn",
                "Any licensed person may test live without further requirements",
              ],
              answer: 1,
              explain: "AS/NZS 4836 and the electrical safety regulations make de-energised work the default; energised testing needs a documented risk assessment, justification, controls, the correct instruments and PPE, and an observer. Footwear is not a control, and holding a licence does not remove the requirements. Dead testing answers the which-safety-tripped question anyway.",
            },
            {
              q: "Both the low pressure switch and the freeze thermostat read open circuit on a chiller. What should you do?",
              options: [
                "Replace both devices",
                "Reset both and restart the unit",
                "Work out which is cause and which is effect, using the plant condition — for example loss of water flow can produce both",
                "Bypass the freeze thermostat to test the low pressure switch",
              ],
              answer: 2,
              explain: "Two open devices usually share one root cause: loss of flow, for instance, drives the evaporator temperature down until the freeze thermostat opens and the suction pressure down until the low pressure switch opens. Replacing healthy devices or resetting without diagnosis fixes nothing, and bypassing a safety is never acceptable.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "drawing-a-control-circuit",
          title: "Drawing a control circuit from a written specification",
          minutes: 15,
          simple: "You get a paragraph describing what should switch what, and you have to turn it into a drawing. The trick is to sort every device into two piles first: things that do work and things that decide. Things that do work hang across the two supply wires; things that decide sit in a line in front of them.",
          refs: REFS_CONTROL,
          content: `This is a drawing question with a written brief, and it is very winnable, because the marker is checking a short list of specific things. Learn the method, apply it the same way every time, and check your drawing against the brief sentence by sentence.

## The method

**Step 1 — read the brief twice and list every device.** Write them in a column down the side of your page with the abbreviation you will use. Do not start drawing yet.

**Step 2 — sort every device into loads or switches.** A **load** consumes power to do work: a motor, a solenoid coil, a heater, a contactor coil, a lamp. A **switch** simply makes or breaks a path: an isolation switch, a thermostat, a pressure switch, a relay contact, a timer contact. Everything you have listed is one or the other.

**Step 3 — draw the two rails.** For a single-phase 240 V circuit, a vertical line on the left labelled **Active (A)** and a vertical line on the right labelled **Neutral (N)**. Label the supply as 240 V, 50 Hz, single phase. Leave plenty of vertical space.

**Step 4 — put whatever must control everything at the top of the active rail.** An isolation switch that kills the whole unit goes in the active rail **before any branch**, so that every rung below it is fed through it. This is the step candidates most often get wrong by drawing the isolator in only one branch.

**Step 5 — draw one rung per load, top to bottom, in the order the brief introduces them.** Each rung runs from the active rail across to the neutral rail with exactly **one load** in it. All loads therefore end up in parallel across the rails, which is what the brief will almost always require.

**Step 6 — place each load's control devices in series in its own rung, on the active side of the load.** Put them in the order the brief lists them. A device that controls several loads goes in a common branch that then splits into those loads' rungs.

**Step 7 — label and legend.** Every device gets its abbreviation, every rail gets its label, and a legend lists what each abbreviation means. Then check the brief sentence by sentence and tick each requirement off against your drawing.

!FIG[ladder-rung]

## Worked brief 1

**The specification:**

*A single-phase 240 V unit with an active rail and a neutral rail. An isolation switch kills the evaporator fan and the compressor circuit, which includes two condenser fans. The evaporator fan runs continuously whenever the isolation switch is on. The compressor and the condenser fans run only when the thermostat, the low pressure switch and the high pressure switch are all closed. Every load is connected in parallel.*

### Step 1 — list the devices

- IS — isolation switch
- EFM — evaporator fan motor
- COMP — compressor motor
- CFM1, CFM2 — condenser fan motors
- TC — thermostat
- LPS — low pressure switch
- HPS — high pressure switch

### Step 2 — sort them

- **Loads:** EFM, COMP, CFM1, CFM2. Four loads, therefore four rungs.
- **Switches:** IS, TC, LPS, HPS.

### Step 3 and 4 — rails and isolation

Active rail on the left, neutral rail on the right, 240 V 50 Hz between them. **IS goes in the active rail at the top, above every branch**, because the brief says it kills both the evaporator fan and the compressor circuit. Call the point below IS the common active node.

### Step 5 and 6 — the rungs

| Rung | Path from the common active node to the neutral rail | What it does |
|---|---|---|
| 1 | EFM, then N | Evaporator fan runs whenever IS is on — nothing else is in this rung |
| 2 | TC, LPS, HPS in series, then COMP, then N | Compressor runs only when all three are closed |
| 3 | Takes its supply from the point after HPS, then CFM1, then N | First condenser fan follows the compressor |
| 4 | Takes its supply from the same point after HPS, then CFM2, then N | Second condenser fan follows the compressor |

Rungs 2, 3 and 4 share the series string TC, LPS, HPS. Draw that string once, from the common active node, and take the three loads off the node at the end of it — that node is the **switched active**. Each of the three loads then goes from the switched active node to the neutral rail, in parallel with each other.

### Why it is drawn that way

- **IS in the active rail above every branch** — because one switch has to remove supply from all four loads. If it were drawn only in the compressor branch, the evaporator fan would keep running when the unit was switched off, and the brief would not be met.
- **EFM on its own rung directly from the common active node** — because it must run continuously whenever IS is on. Nothing else may be in that rung; putting the thermostat in front of it would stop the fan when the room is satisfied.
- **TC, LPS and HPS in series** — because the brief says all three must be closed. Series means all conditions true. Any one opening removes supply from the whole switched-active node.
- **COMP, CFM1 and CFM2 in parallel off the switched active** — because they must all run together under the same conditions, each at full 240 V. In series they would share the voltage and none would run properly.
- **Every load between the switched or common active and the neutral rail** — so each load sees the full supply voltage.

### What a marker is looking for

1. Two rails, clearly labelled active and neutral, with the supply stated as 240 V single phase.
2. The isolation switch in the active rail **before any branch**.
3. The evaporator fan on its own rung with no control devices in it.
4. The thermostat, low pressure switch and high pressure switch drawn **in series** in the control path.
5. The compressor and **both** condenser fans in **parallel**, all fed after those three devices — two condenser fans, not one.
6. Every load with one end on the neutral rail; no load in series with another load.
7. Correct symbols, every device labelled, and a legend.
8. Nothing extra invented that the brief did not ask for.

>! In the real world the three control devices would switch a contactor coil, and the contactor's main contacts would switch the compressor and fans, because a thermostat's contacts are not rated for motor current or inrush. If the brief asks for direct switching, draw what the brief asks for — but say in a note that on plant the safeties would operate a contactor coil. That note usually earns credit rather than losing it.

## Written practice

**1.** From the worked brief above, explain in writing why the isolation switch is drawn in the active rail above the branches rather than in the compressor branch.

>? The brief requires the isolation switch to kill both the evaporator fan and the compressor circuit including the two condenser fans. That means all four loads must lose supply when it is opened.
>?
>? A switch placed in the active rail above every branch is in series with every rung below it, so opening it removes supply from all of them at once — one switch, one action, everything dead. That is what an isolation switch is for, and it also means there is a single defined point at which the unit can be isolated, locked and tagged for service.
>?
>? If the switch were drawn inside the compressor branch instead, it would only interrupt the branch it sits in. The evaporator fan, drawn on its own rung directly from the active rail, would keep running with the switch open. The unit would not be isolated, the brief would not be met, and anyone working on the equipment believing it was switched off would be exposed to a live fan circuit.

**2.** Redraw the worked brief in words as a rung-by-rung description, and state which devices are in series and which are in parallel.

>? Rails: a vertical active rail on the left and a vertical neutral rail on the right, 240 V 50 Hz single phase between them.
>?
>? In the active rail, above every branch, the isolation switch IS. The point below it is the common active node.
>?
>? - Rung 1: from the common active node, directly to the evaporator fan motor EFM, then to the neutral rail. No control devices in this rung.
>? - Control string: from the common active node, through the thermostat TC, then the low pressure switch LPS, then the high pressure switch HPS, all three in series. The point at the end of the string is the switched active node.
>? - Rung 2: from the switched active node to the compressor COMP, then to the neutral rail.
>? - Rung 3: from the switched active node to condenser fan motor CFM1, then to the neutral rail.
>? - Rung 4: from the switched active node to condenser fan motor CFM2, then to the neutral rail.
>?
>? In series: the isolation switch with everything below it; and the thermostat, low pressure switch and high pressure switch with each other and with the three loads they control. Series is used because all of those conditions must be satisfied together.
>?
>? In parallel: the evaporator fan across the rails on its own rung; and the compressor, CFM1 and CFM2 across the rails from the switched active node. Parallel is used so each load receives the full 240 V and operates independently of the others.

**3.** List the specific things a marker checks on a drawn control circuit, and explain how you would check your own drawing before handing it in.

>? What the marker checks:
>? - Two labelled rails with the supply stated, active on one side and neutral on the other.
>? - The isolation switch positioned so it actually isolates everything the brief says it must.
>? - Loads drawn in parallel, each with one end on the neutral rail, and no load in series with another load.
>? - Control and safety devices drawn in series in the control path, in the right branch, so that all required conditions must be met.
>? - Every device the brief names present, and the correct quantity of each — two condenser fans means two symbols, not one.
>? - Any load the brief says runs continuously drawn with nothing but the isolation switch in front of it.
>? - Standard symbols, every device labelled, and a legend defining the labels.
>? - Nothing invented that the brief did not ask for.
>?
>? How to check my own drawing: go back to the brief and read it one sentence at a time, and for each sentence put a tick on the drawing where that requirement is satisfied. Then trace each rung with a finger from the active rail to the neutral rail and say out loud what has to be closed for that load to run, and confirm it matches the brief. Count the loads against my device list, count the symbols, and confirm each has exactly one load in its path. Finally, check that opening the isolation switch would kill everything the brief says it should, and that opening any one of the safeties stops what it is supposed to stop and nothing it is not.

## What to remember

- List devices, then sort into loads and switches, before drawing anything.
- Rails first: active on the left, neutral on the right, supply labelled.
- Isolation switch in the active rail above every branch.
- One load per rung, loads in parallel across the rails.
- Control and safety devices in series, on the active side of the load they control.
- Label everything, add a legend, and check the drawing against the brief sentence by sentence.`,
          quiz: [
            {
              q: "In the worked brief, where must the isolation switch be drawn?",
              options: [
                "In the compressor branch only",
                "In the active rail above every branch, so it removes supply from all loads",
                "In the neutral rail",
                "In series with the evaporator fan only",
              ],
              answer: 1,
              explain: "The brief requires it to kill the evaporator fan and the compressor circuit including both condenser fans, so it must be in series with every rung — which means in the active rail above all branches. Placed in one branch it isolates only that branch, and switching in the neutral leaves the loads connected to the active.",
            },
            {
              q: "Why must the evaporator fan rung contain no control devices?",
              options: [
                "Because fans cannot be switched",
                "Because the brief requires it to run continuously whenever the isolation switch is on",
                "Because it draws less current than the compressor",
                "Because it is wired to the neutral rail",
              ],
              answer: 1,
              explain: "Continuous running whenever the isolator is on means only the isolation switch may be in its path. Putting the thermostat or a safety in front of it would stop the fan whenever the room was satisfied or a safety opened, which is not what the brief specifies — and on a real system also loses the air circulation the space needs.",
            },
            {
              q: "The compressor and two condenser fans must all run under the same conditions. How are they connected relative to each other?",
              options: [
                "In series, so they start in sequence",
                "In parallel across the rails from the switched active node, so each receives full voltage",
                "In series with the evaporator fan",
                "Each with its own separate thermostat",
              ],
              answer: 1,
              explain: "Parallel gives each load the full 240 V and makes them independent of each other while sharing the same series control string. In series they would divide the supply voltage between them, so none would operate correctly, and one failing open would stop the others.",
            },
            {
              q: "A brief asks for direct switching of a compressor through a thermostat and two pressure switches. What is worth adding as a note?",
              options: [
                "That the circuit will not work as specified",
                "That in practice the control devices would operate a contactor coil, because control device contacts are not rated for motor current and inrush",
                "That the thermostat should be replaced with a timer",
                "That the circuit needs three-phase supply",
              ],
              answer: 1,
              explain: "Draw what the brief asks for, then note the real-world practice. Control contacts switching motor current will arc, overheat and eventually weld shut, leaving the compressor running with no control at all — which is why a contactor is used. Showing you know the difference generally earns credit.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "second-worked-brief",
          title: "A second worked brief: pump-down, defrost and a lockout relay",
          minutes: 15,
          simple: "The same drawing method again, but on a harder brief: a cool room that pumps its refrigerant into the receiver before it stops, defrosts on a clock, and locks itself out if a safety trips. Once you can sort loads from switches, a complicated brief is just more rungs.",
          refs: REFS_DEFROST,
          content: `The method does not change when the brief gets harder. List, sort, rails, isolation, one rung per load, controls in series, label and check. This brief adds three things you should be able to draw: **pump-down control**, a **defrost time clock**, and a **lockout relay with manual reset**.

## Worked brief 2

**The specification:**

*A 240 V single-phase coolroom control with an active rail and a neutral rail. An isolation switch supplies the whole circuit. A defrost time clock has a normally-closed refrigeration contact and a normally-open defrost contact. During refrigeration the room thermostat energises the liquid line solenoid valve. The compressor contactor coil is energised whenever the low pressure switch is closed, provided the high pressure switch is closed and the lockout relay has not tripped. The condenser fan runs whenever the compressor contactor is energised. The evaporator fan runs during refrigeration and is off during defrost. During defrost the defrost heater is energised through the defrost contact and a normally-closed defrost termination thermostat. All loads are connected in parallel. The lockout relay must be manual reset.*

### Step 1 — list the devices

- IS — isolation switch
- DTC-R — defrost time clock, refrigeration contact, normally closed
- DTC-D — defrost time clock, defrost contact, normally open
- TC — room thermostat
- LLS — liquid line solenoid valve coil
- LPS — low pressure switch
- HPS — high pressure switch
- LOR — lockout relay, coil plus contacts, manual reset
- RST — reset push button, normally closed
- CC — compressor contactor coil, with auxiliary contact CC-aux
- CFM — condenser fan motor
- EFM — evaporator fan motor
- DTT — defrost termination thermostat, normally closed
- DH — defrost heater

### Step 2 — sort them

- **Loads:** LLS coil, CC coil, CFM, EFM, DH, LOR coil. Six loads, six rungs.
- **Switches:** IS, DTC-R, DTC-D, TC, LPS, HPS, LOR contacts, CC-aux, DTT, RST.

Note that a **contactor coil and a relay coil are loads**. Candidates often forget this and try to draw a coil as a switch. The coil is the load in its own rung; its contacts appear as switches in other rungs.

### Steps 3 to 6 — the rungs

Active rail on the left, neutral rail on the right, IS in the active rail above every branch. The node below IS is the common active.

| Rung | Path from the common active node to the neutral rail | Purpose |
|---|---|---|
| 1 | DTC-R, TC, LLS coil, N | Liquid line solenoid opens when the clock is in refrigeration and the room calls |
| 2 | LPS, HPS, LOR normally-closed contact, CC coil, N | Compressor contactor energised on suction pressure, provided head pressure is safe and the unit is not locked out |
| 3 | CC-aux normally-open contact, CFM, N | Condenser fan follows the compressor contactor |
| 4 | DTC-R, EFM, N | Evaporator fan runs in refrigeration, stops in defrost |
| 5 | DTC-D, DTT, DH, N | Defrost heater energised in defrost until the termination thermostat opens |
| 6 | RST normally-closed push button, then the trip-sensing path, LOR coil, N, with an LOR normally-open contact sealing around the trip-sensing path | Lockout relay latches on a safety trip and holds until the reset button is pressed |

### How the pump-down works

This is the part of the brief that separates a good answer from a copied one.

1. The room reaches temperature and the **thermostat opens**. The liquid line solenoid coil de-energises, so the **solenoid valve closes**.
2. The compressor keeps running, because its rung is fed through the **low pressure switch**, not through the thermostat. It pumps the refrigerant out of the evaporator and suction line into the receiver and condenser.
3. Suction pressure falls until the low pressure switch reaches its **cut-out**, and the compressor contactor drops out. The compressor stops with the low side pumped down and most of the charge stored on the high side.
4. When the room warms, the **thermostat closes**, the solenoid opens, refrigerant flows into the evaporator, suction pressure rises to the low pressure switch **cut-in**, and the compressor restarts.

Two benefits, and both are worth stating: the evaporator and suction line are left almost empty, so **liquid cannot migrate to the compressor** during the off cycle and slug it on start-up; and the compressor always starts against a **low suction pressure**, which is easier on the motor.

### How the lockout works

The lockout relay coil is arranged so that a safety trip energises it. Once energised, its own normally-open contact seals it in from the control supply, so it stays energised after the safety recloses. Its normally-closed contact in rung 2 opens and keeps the compressor contactor de-energised.

The **manual reset** is the normally-closed push button in series with the seal-in path. Pressing it breaks the path, the coil drops out, the normally-closed contact recloses, and the compressor rung is restored — provided the safety itself has closed again. Releasing the button does not re-energise the relay, because the safety that started it is no longer open.

### How the defrost works

The time clock has two contacts that change together. In refrigeration, **DTC-R is closed and DTC-D is open**: the solenoid rung and the evaporator fan rung are alive, and the heater rung is dead. When the clock initiates defrost the contacts swap: **DTC-R opens**, which closes the solenoid and stops the evaporator fan, and **DTC-D closes**, energising the defrost heater through the normally-closed termination thermostat.

The evaporator fan is stopped during defrost for a reason worth writing down: a running fan would blow the heat from the defrost heater straight into the room, warming the product and wasting most of the energy.

The **termination thermostat** opens when the coil reaches its set temperature, cutting the heater before the clock's defrost period ends — so defrost ends on temperature rather than on time when the coil clears early. The clock still ends the cycle on time as a backstop. Many controls also add a short **drain-down or fan-delay period** after defrost before the evaporator fan restarts, so water on the coil is not blown into the room as it refreezes.

>! Never bypass a defrost termination thermostat to make a defrost "work better". It exists to stop the heater cooking the coil, the fan motors, the drain and, in a freezer room, the product above it. A heater left energised on a coil that has already cleared is a fire risk as well as a product loss.

## What a marker is looking for on this brief

1. Two labelled rails, supply stated, isolation switch above every branch.
2. Six loads, each on its own rung, all in parallel — including the two coils, which are loads.
3. The compressor rung fed through **LPS**, not through the thermostat, which is what makes it a pump-down circuit.
4. The thermostat in the **solenoid** rung, not the compressor rung.
5. HPS and the lockout relay contact in series in the compressor rung.
6. A lockout relay coil rung with a **seal-in contact** and a **normally-closed reset button** in the latch path.
7. The evaporator fan fed through the clock's refrigeration contact so it stops during defrost.
8. The heater fed through the defrost contact **and** the normally-closed termination thermostat, in series.
9. The condenser fan following the compressor contactor via an auxiliary contact.
10. Every device labelled, a legend, and correct normally-open and normally-closed symbols.

## Written practice

**1.** Explain, in the order it happens, what occurs in worked brief 2 when the room reaches setpoint, and state the two benefits of the arrangement.

>? 1. The room reaches setpoint and the thermostat contacts open.
>? 2. The liquid line solenoid coil is de-energised, so the solenoid valve closes and refrigerant can no longer flow into the evaporator.
>? 3. The compressor keeps running, because its contactor rung is fed through the low pressure switch and not through the thermostat. It continues to draw vapour from the evaporator and suction line and discharge it into the condenser and receiver.
>? 4. Suction pressure falls steadily until it reaches the low pressure switch cut-out setting, at which point the switch opens.
>? 5. The compressor contactor coil de-energises, the main contacts open and the compressor stops. The condenser fan, fed through the contactor auxiliary contact, stops with it. The low side is now pumped down and the charge is stored in the receiver and condenser.
>? 6. When the room warms, the thermostat closes, the solenoid opens, refrigerant flows into the evaporator and suction pressure rises to the low pressure switch cut-in, restarting the compressor.
>?
>? Two benefits: liquid refrigerant cannot migrate from the evaporator to the compressor during the off cycle, so the compressor is not slugged with liquid or diluted oil at start-up; and the compressor always restarts against a low suction pressure and a low load, which reduces starting torque demand and motor heating.

**2.** Describe how the lockout relay in this circuit latches and how it is reset, naming the contacts involved.

>? Latching: the lockout relay coil is arranged so that it becomes energised when a device in the safety string opens. As soon as the coil pulls in, one of its own normally-open contacts closes across the initiating path, forming a seal-in that holds the coil energised from the control supply independently of the safety device. At the same time its normally-closed contact, wired in series in the compressor contactor rung, opens.
>?
>? Because the coil is now holding itself in, the compressor stays off even if the safety device recloses a moment later — for example a high pressure switch whose head pressure has fallen after the compressor stopped. That is what turns a momentary trip into a latched lockout, and it preserves the evidence that the unit tripped.
>?
>? Resetting: a normally-closed push button is wired in series in the seal-in path. Pressing it breaks that path, the lockout relay coil de-energises, its seal-in contact opens and its normally-closed contact in the compressor rung recloses. Releasing the button does not re-latch the relay, because the coil is only energised again if a safety opens again. The compressor can then restart, provided the safety device itself is closed and the anti-recycle period, if fitted, has elapsed.
>?
>? Contacts involved: the lockout relay normally-open seal-in contact, the lockout relay normally-closed contact in the compressor rung, and the normally-closed reset push button in the latch path.

**3.** Why is the evaporator fan stopped during defrost, and what is the function of the defrost termination thermostat?

>? The evaporator fan is stopped during defrost so that the heat from the defrost heater stays at the coil and does the job it is there to do — melting the ice off the fins. If the fan kept running it would blow that heat straight into the room, which raises the product temperature, wastes almost all of the defrost energy, extends the defrost time because the coil never gets warm enough, and blows melt water off the coil into the room where it refreezes on the floor and on the product.
>?
>? The defrost termination thermostat is a normally-closed temperature switch sensing the evaporator coil. It is wired in series with the defrost contact of the time clock and the heater. When the coil reaches its set temperature — proof that the ice has cleared — it opens and cuts the heater, so defrost ends on temperature rather than running for the full clock period.
>?
>? That does two things: it saves energy and product temperature by not heating a coil that is already clear, and it protects the coil, fan motors, drain pan and any nearby product from being overheated by a heater left energised. The time clock still ends the defrost cycle at the end of its period as a backstop if the thermostat does not terminate. Many controls then hold the evaporator fan off for a short drain-down or fan-delay period so water on the coil is not blown into the room.

## On the job

- Contactor coils and relay coils are loads and get their own rungs.
- Pump-down: thermostat in the solenoid rung, low pressure switch in the compressor rung.
- Pump-down stops liquid migration and lets the compressor start against a low suction pressure.
- A lockout relay needs a seal-in contact, a normally-closed contact in the compressor rung, and a normally-closed reset button in the latch path.
- The defrost clock's refrigeration contact feeds the solenoid and the evaporator fan; its defrost contact feeds the heater.
- The termination thermostat ends defrost on temperature; the clock ends it on time as a backstop.`,
          quiz: [
            {
              q: "In a pump-down circuit, which device is wired in the compressor contactor rung rather than the thermostat?",
              options: [
                "The room thermostat",
                "The low pressure switch",
                "The defrost termination thermostat",
                "The condenser fan",
              ],
              answer: 1,
              explain: "The thermostat controls the liquid line solenoid, and the compressor is controlled by the low pressure switch. That is what allows the compressor to keep running after the room is satisfied until it has pumped the low side down. Putting the thermostat in the compressor rung would stop the compressor immediately and defeat the pump-down.",
            },
            {
              q: "What is the main benefit of pump-down control?",
              options: [
                "It reduces the compressor's running current",
                "It leaves the low side almost empty so liquid cannot migrate to the compressor during the off cycle",
                "It removes the need for a high pressure switch",
                "It speeds up defrost",
              ],
              answer: 1,
              explain: "Storing the charge in the receiver and condenser during the off cycle stops liquid migrating to the crankcase, which is what causes slugging and oil dilution on start-up. It also lets the compressor start against a low suction pressure. It does not change running current, replace any safety, or affect defrost.",
            },
            {
              q: "Why is the evaporator fan switched off during an electric defrost?",
              options: [
                "To reduce electrical load while the heater runs",
                "So the defrost heat stays at the coil instead of being blown into the room, warming product and wasting energy",
                "Because the fan motor cannot run at defrost temperatures",
                "To allow the time clock to reset",
              ],
              answer: 1,
              explain: "A running fan carries the heater's output straight into the room: product warms, energy is wasted, the coil takes longer to clear, and melt water is blown off the coil to refreeze on the floor. Load reduction is incidental, and fan motors are not the limitation.",
            },
            {
              q: "Which combination correctly describes a manual-reset lockout relay arrangement?",
              options: [
                "A normally-open contact in the compressor rung and a normally-open reset button in the coil rung",
                "A normally-open seal-in contact around the trip path, a normally-closed contact in the compressor rung, and a normally-closed reset button in the latch path",
                "Two normally-closed contacts in the compressor rung and no reset button",
                "A normally-closed seal-in contact and a normally-open contact in the compressor rung",
              ],
              answer: 1,
              explain: "The seal-in must be normally open so it closes when the coil pulls in and holds it energised; the contact in the compressor rung must be normally closed so it opens on lockout; and the reset must be normally closed and in series with the latch path so pressing it breaks the seal-in. Any other combination either fails to latch or fails to release.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
