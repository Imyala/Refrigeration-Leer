/* =========================================================================
   Course content, module 313 — Develop and connect electrical control
   circuits.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 13 — Develop and connect electrical
   control circuits.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — develop and connect electrical control circuits",
  ];

  const REFS_SYMBOLS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — graphical symbols in electrical drawing practice and the five parts of a control circuit",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — AS/NZS 1102 and IEC 60617 graphical symbols for diagrams",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — symbols as physical components: make-and-break contacts and the devices that operate them",
  ];

  const REFS_DRAWINGS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — circuit representations: circuit, ladder, block, single-line and wiring diagrams",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — drawing circuit diagrams: vertical and horizontal layouts, power flow and control sequence",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — conventions in line work, line numbering, cable identification and drawing cross-reference grids",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — converting diagrams between orientations and between relay logic and ladder logic",
  ];

  const REFS_CONTACTORS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — relays, contactors and timers: construction and operation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — drawing relays and contactors: attached, semi-detached and detached representation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — thermal overloads and their auxiliary contacts in the control circuit",
  ];

  const REFS_TIMERS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — timers: pneumatic, electro-mechanical, electronic and programmable",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — timed contact symbols, on-delay and off-delay relay coils",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — timer applications in machine start-up sequences and star-delta changeover",
  ];

  const REFS_STARTSTOP = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — control circuit operation: start, stop and the latching or hold-in contact",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — control circuit variations: multiple stops, two-position 3-wire control, local and remote operation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — 2-wire control, combined 2-wire and pushbutton control, and jogging control",
  ];

  const REFS_DEVICES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — control devices, types of control and the distinction between control and protection",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — sensors, actuators and transducers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — photoelectric, inductive, capacitive and ultrasonic sensing principles",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — selection of control devices and duty ratings",
  ];

  const REFS_INTERLOCK = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — reversing circuits and the two-contactor reversing starter",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — mechanical and electrical interlocking of contactors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase motor reversal by interchanging two stator leads",
  ];

  const REFS_STARTERS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — requirements of motor-control equipment and limitation of starting currents",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — direct-on-line, star-delta, primary resistance, autotransformer and secondary resistance starting",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase motor-starter contactor circuits and their sequence of operation",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — soft starters, inverters, variable speed drives and variable frequency drives",
  ];

  const REFS_BRAKING = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase motor braking: mechanical, eddy-current, dynamic, regenerative and plug braking",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — speed control of a.c. induction motors by pole changing and frequency changing",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — wound-rotor speed control and types of motor speed control",
  ];

  const REFS_SAFETY = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — PLCs and safety: controller protection, equipment safety and safety of personnel",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — safety relays, safeguarding, two-hand control and machine stop categories",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — programmable relays and programmable logic controllers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — PLC programming rules, ladder logic symbols and input-output listings",
  ];

  const REFS_FAULT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — developing a control schematic from a description or list of conditions",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — fault finding control circuits: symptoms, faults and causes",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — checking and testing techniques, live and dead testing, motor test points",
  ];

  const MODULES = [
    {
      id: "elec-control-circuits",
      stream: "elec",
      title: "E.13 · Develop and connect electrical control circuits",
      blurb: "How control circuits are drawn, built, interlocked and fault-found: symbols, ladder schematics, contactors, timers, sensors, motor starters, emergency stops and PLCs.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "power-vs-control",
          title: "Power circuits, control circuits and the symbol language",
          minutes: 11,
          simple: "A control circuit is the small-current thinking part of a machine, and the power circuit is the big-current muscle. Think of a light switch on the wall and the floodlight on the roof: your finger only moves a tiny switch, but the floodlight draws a lot. Symbols on a drawing are like road signs — they tell you what a part does no matter what language you speak.",
          refs: REFS_SYMBOLS,
          content: `
Open the door of any refrigeration switchboard and you are looking at two
circuits that live side by side but do completely different jobs. Heavy cable
runs from the isolator through a contactor and an overload to the compressor
motor — that is the **power circuit**, and it carries the full running current.
Threaded through the same enclosure is a spider's web of small wire linking a
thermostat, a low-pressure switch, a high-pressure switch and a contactor coil
— that is the **control circuit**, and it may carry less than an amp.

The whole trade of control work rests on that split. The control circuit makes
the decision; the power circuit carries out the decision. A 30 kW compressor
can be started and stopped by a thermostat with contacts the size of a
fingernail, because the thermostat never carries motor current. It only has to
energise a coil.

## What a control circuit is made of

Strip any control circuit down and you find the same five parts, no matter
whether it runs a chiller, a conveyor or a roller door:

- a supply — the source of voltage for the circuit
- circuit protection — a fuse or circuit-breaker
- control devices — switches, pilot devices and timed devices that decide
- load devices — the things that do work: coils, solenoids, lamps
- conductors — the wiring that ties the four together

Recognising those five parts on an unfamiliar drawing is the first step in
reading it. Find the supply rails, find the protection, then read what sits
between them.

## Symbols: why they exist and where they come from

Graphical symbols do the same job on a schematic that they do on a road sign.
A skid symbol on a wet road warns a driver regardless of the language they
read, and it does it in a fraction of a second. Electrical symbols were
invented for the same reason. Early circuit drawings in the nineteenth century
were literal sketches of what the drafter could see, usually with a key
alongside. Over time they were stylised: components became abstract shapes,
wires were pulled apart and drawn straight, and the drawing stopped looking
anything like the real hardware.

Standardisation followed. The International Electrotechnical Commission
publishes **IEC 60617** as the international standard for graphical symbols
for diagrams. Australia's own standard, **AS/NZS 1102**, sits very close to
IEC 60617 and most Australian organisations follow it. A caution worth knowing:
sections 101 to 113 of AS/NZS 1102 were withdrawn in December 2016 and have
not yet been replaced. A withdrawn standard can still be used or referenced by
an industry if it chooses, and in this case it still is, because nothing has
replaced it.

That matters on site because Australia buys plant from everywhere. Equipment
from China, Japan, the United Kingdom, the United States and continental Europe
may arrive with symbols that differ from AS/NZS 1102 — even from each other.
American drawings are often to **NEMA** conventions, which look noticeably
different: for example NEMA drawings usually show each of the three overload
elements as a separate normally closed contact rather than one combined
symbol. Because of this, a good drawing set carries a **legend** or symbol key.
Always read the key before you assume you know what a symbol means.

Symbols have no fixed size, but every symbol on a given drawing should be the
same relative size and proportion. Neatness here is not vanity — a drawing that
is easy to scan is a drawing that is fault-found quickly at 2 am.

## Two families of symbol: contacts and the things that move them

Every device in a control circuit falls into one of two groups, and separating
them in your head makes schematics much easier to read.

**Contacts** physically open or close a circuit path. They are the switching
element — the make-and-break pair of metal faces that either carry current or
do not.

**Operators** are the mechanisms that force contacts to change state. A finger
on a pushbutton is an operator. So is a relay coil, a contactor coil, a timer
coil, a bimetal strip warmed by overload current, a float on a rising water
level, or a bellows pushed by refrigerant pressure.

Contacts are always drawn in one of two rest conditions:

| Term | Abbreviation | State shown on the drawing | What happens when operated |
|---|---|---|---|
| Normally open | NO | Gap between the contacts | Closes, making the circuit |
| Normally closed | NC | Contacts touching | Opens, breaking the circuit |
| Changeover | CO | Common plus one NO and one NC | Transfers from one path to the other |

The word **normally** has a precise meaning that trips up nearly every
apprentice: it means *de-energised and un-operated*. Not "normal for this
machine", not "how it sits while the plant is running". A high-pressure switch
that is closed while the plant runs happily is still drawn as a normally closed
contact, because that is its state with no pressure applied. A drawing is a
photograph of the circuit at rest.

There is one more convention worth committing to memory. When a contact symbol
is drawn being operated — by hand or by its coil — the line representing the
moving part is shown rotating **clockwise**. Every symbol on every AS/NZS 1102
drawing obeys it, so once you know it you can work out any unfamiliar contact
symbol by asking which way it would swing.

## Control is not protection

Control devices and protection devices both disconnect circuits, so they are
easy to confuse. The difference is what they respond to.

- **Protection devices** respond to electrical abuse: overcurrent, overload,
  overvoltage or earth leakage. A fuse blows, a circuit-breaker trips, an RCD
  trips. Their job is to protect people and equipment from the electricity.
- **Control devices** respond to almost anything else: a finger, a temperature,
  a pressure, a level, an object arriving at a position, a timed interval.
  Their job is to make the plant do what it is supposed to do.

A thermal overload sits awkwardly between the two, which is exactly why it is
worth stating the rule clearly. The overload heater senses motor current
(protection), but the contact it operates is wired into the control circuit and
drops out the contactor coil (control). One device, two roles.

## On the job

- Trace the supply rails first. Everything else on a schematic hangs between
  them.
- Read the drawing legend before you read the drawing, especially on imported
  plant.
- NO and NC always describe the de-energised, un-operated state — never the
  running state.
- Control circuits switch coils; power circuits switch motors. Never assume a
  pilot device is rated to carry motor current.
- If a symbol is unfamiliar, work out which way the moving element rotates —
  the clockwise convention will usually give you the answer.
`,
          quiz: [
            {
              q: "A high-pressure cut-out on a running chiller has its contacts closed. How should it be drawn on the schematic?",
              options: [
                "As a normally open contact, because it is open when the plant is off",
                "As a normally closed contact, because that is its state with no pressure applied",
                "Either way, provided a note is added",
                "As a changeover contact, because it has two states",
              ],
              answer: 1,
              explain: "Drawings show devices de-energised and un-operated. The switch is closed when nothing is acting on it, so it is a normally closed contact. Confusing 'normal' with 'while running' is the classic apprentice error and it makes a schematic unreadable.",
            },
            {
              q: "Which pair correctly separates a protection device from a control device?",
              options: [
                "A fuse controls; a pressure switch protects",
                "A circuit-breaker protects against overcurrent; a float switch controls in response to level",
                "Both respond only to overcurrent, so there is no real difference",
                "Control devices always operate faster than protection devices",
              ],
              answer: 1,
              explain: "Protection responds to electrical abuse — overcurrent, overload, overvoltage, earth leakage. Control responds to almost anything else, such as level, pressure, temperature or position. Speed has nothing to do with the distinction.",
            },
            {
              q: "Why does a drawing set for imported plant normally include a symbol legend?",
              options: [
                "Because AS/NZS 1102 forbids the use of symbols without a legend",
                "Because manufacturers in different countries may use symbol conventions that differ from IEC 60617 and from each other",
                "Because legends are required for insurance purposes",
                "Because computer-aided drafting cannot produce standard symbols",
              ],
              answer: 1,
              explain: "IEC 60617 is the international standard and AS/NZS 1102 is close to it, but some countries and manufacturers still use their own conventions, and new technologies appear before symbols are standardised. The legend is what lets you read the drawing with confidence.",
            },
            {
              q: "Which list correctly names the five parts of a control circuit?",
              options: [
                "Supply, protection, control devices, load devices and conductors",
                "Motor, starter, overload, isolator and cable",
                "Active, neutral, earth, switch and lamp",
                "Sensor, actuator, transducer, coil and contact",
              ],
              answer: 0,
              explain: "Every control circuit is a supply, some circuit protection, devices that decide, loads that do work, and the wiring between them. The other lists describe hardware you might find, but they are not the functional breakdown used when reading a schematic.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "circuit-drawings",
          title: "Types of circuit drawing and the conventions that govern them",
          minutes: 15,
          simple: "There are several ways to draw the same circuit, and each one answers a different question. A block diagram says what the machine does, a schematic says how it works, and a wiring diagram says where every wire actually goes. Like a street map, a train map and a photo of the street — all true, all useful for different jobs.",
          refs: REFS_DRAWINGS,
          content: `
The same control circuit can be drawn five different ways, and choosing the
wrong one wastes hours. A wiring diagram will not tell you why a compressor
refuses to start. A schematic will not tell you which terminal a wire lands on.
Knowing which drawing answers which question is a core trade skill.

## The five representations

| Drawing type | Question it answers | Typical use |
|---|---|---|
| Block diagram | What does it do? | Overview of a complex system before opening the schematic |
| Single-line diagram | How does power flow through the installation? | Distribution, power-flow studies, three-phase runs shown as one line |
| Circuit diagram (schematic) | How does it work? | Understanding operation, fault finding, design |
| Ladder diagram | In what sequence does it operate? | Control circuits, and a stepping stone to PLC programming |
| Wiring (connection) diagram | Where does each wire actually go? | Wiring up a panel, checking terminations, tracing cables |

### Block diagrams

A block diagram shows function, not connections. Groups of components become
labelled rectangles, and arrows show the direction and order of flow. Block
diagrams usually do not show the power supply at all, because they are not
claiming to represent real connections.

Their value is that a frighteningly complex circuit reduces to something a
person can hold in their head. A whole AM radio receiver becomes seven blocks —
tuning, mixer, oscillator, IF amplifier, detector, audio amplifier, output. A
resistance-start motor starter becomes five: line contactor, control and timing
circuit, starting resistors, accelerating contactor, motor. Read that block
diagram and the story is already clear — the supply reaches the line contactor
but cannot pass until the control and timing circuit allows it; the line
contactor closes and feeds the motor through current-limiting starting
resistors; after a set time, with the motor nearly up to speed, the
accelerating contactor closes and shorts out the resistors so full supply
reaches the motor.

### Single-line diagrams

A single-line diagram uses one line to represent a three-phase circuit, with
three short tick marks across it to say "there are really three conductors
here". It strips away repetition so that the shape of a distribution system
can be seen at a glance. It is the standard notation for power-flow studies.

### Circuit diagrams (schematics)

A schematic represents components and the electrical relationships between
them, and it deliberately bears no resemblance to the physical layout. That is
not a shortcoming — it is the point. Freed from physical positions, the drafter
can arrange the circuit so its logic reads clearly.

### Ladder diagrams

A ladder diagram is a schematic drawn with the two supply lines forming the
stiles of a ladder and each parallel branch forming a rung. Control circuits
are drawn this way more often than any other. Each rung is one complete idea:
a set of conditions in series feeding one load. Ladder layout also maps almost
directly onto PLC programming, which is why it has outlived the relay panels
it was invented for.

!FIG[ladder-rung]

### Wiring or connection diagrams

A wiring diagram is a stylised but *true* representation of the components and
their wiring. Components appear in roughly their real relative positions, with
their outlines often drawn as dashed lines, and terminals drawn as small
circles. Conductors are drawn as straight, separate, evenly spaced lines, and
where several land on one terminal the lines are angled into the terminal
circle so each one is individually traceable.

A photograph would be useless for this: real wires bunch together and
disappear behind other equipment. Drawing a wiring diagram is effectively
wiring the panel on paper — each line is a real cable, cut to length, stripped
and terminated. That is why it is the drawing you take to a panel you are
building or checking.

One rule separates the two most-used drawings and it is worth memorising: **in
a wiring diagram, connections are only ever made at terminals; in a circuit
diagram, connections between conductors can be shown at any point along a
conductor, away from the components.**

## Using drawings against each other

Because they answer different questions, drawings check each other. A textbook
example: a wiring diagram of an automatic motor starter is drawn with two
missing connections. Stare at the wiring diagram alone and the omission hides.
Redraw the power circuit as a schematic from what the wiring diagram shows,
compare it with the correct schematic, and the two absent wires jump out
immediately.

Converting between drawings is a normal part of the job — vertical to
horizontal orientation, wiring diagram to schematic, or relay schematic to PLC
ladder logic. Three things must be preserved in any conversion: the direction
of power flow, the sequence of operation, and the correct orientation of every
symbol.

## Layout conventions

Schematics may be drawn vertically or horizontally. What matters is that two
directions are established and then followed.

- **Vertical layout:** power flows from the top supply rail down to the bottom
  rail; the control sequence reads left to right.
- **Horizontal layout (ladder):** power flows left to right along each rung;
  the control sequence reads rung by rung, top to bottom.

It is not always possible to obey these perfectly on a complicated drawing, but
you follow them as closely as you can. Read a schematic against the convention
and the order of events tells itself.

## Line work

- Conductors are drawn as straight lines with right-angle turns, whatever path
  the real cable takes. Line length carries no meaning — a line simply says
  "these two things are connected".
- **Line weight carries meaning.** Power conductors are drawn bold or double
  width; ordinary conductors are single weight; signal conductors are thin or
  half weight. In a motor schematic the control circuit is deliberately drawn
  in lighter lines than the power circuit, because it transfers no energy to
  the motor and is wired in smaller cable.
- Dashed or dotted lines show temporary connections, and also mechanical
  linkage between a coil and the contacts it operates, or between contacts that
  move together.
- Crossing conductors that are not joined get no dot and should cross at right
  angles. Joins get a distinct dot. Older drawings used a little hop-over
  symbol for "not joined" — it is no longer used.
- Joins drawn as a simple four-way cross with a dot are not recommended for
  hand drawing: a stray ink spot can turn a crossover into a join. Offsetting
  the join by two or three millimetres at 45 degrees, or the double-offset
  style used by many CAD packages, removes the ambiguity.
- Connect to a symbol a short distance away from it — around 5 mm at typical
  drawing scale — so conductor lines are never confused with the symbol
  outline. CAD symbols come with connection tails for exactly this reason.

## Arranging components

- Energy-consuming devices — coils, solenoids, indicator lamps — go at the
  **end** of a rung or circuit path, next to the return rail.
- Lamps and coils in a control circuit may be connected in parallel, **never**
  in series. Two coils in series each get part of the voltage and neither
  operates reliably.
- Align similar symbols with each other and space them evenly. Repetitive parts
  of a circuit should be drawn identically.
- Where two components sit in parallel and one is more important, the important
  one stays in line with the conductor and the other is offset. If they are
  equally important, they are placed symmetrically either side of the line.

## Labelling and cross-referencing

Without a labelling system, a drawing of any size becomes unusable. Good
practice uses all of the following:

1. **Component labels** — S for switches, K for contactor and relay coils, F
   for fuses, and so on, numbered in sequence: S1, S2, K1, K2, F1.
2. **Contact designations** — a contact carries its parent's label plus a
   number: K1.1, K1.2, K1.3 for the power contacts of contactor K1, K1.4 for
   its auxiliary hold-in contact.
3. **Rung or line numbers** down the side of the drawing.
4. **Cable or wire numbers** applied before and after each device, so every
   conductor has an identity.
5. **An alpha-numeric grid** across the top and down the side of the sheet, so
   any component can be quoted by grid reference — start button S1 at C2, coil
   K1 at G2, contact K1.1 at C4.
6. **A contact list beside each coil** stating how many contacts it has and
   which are NO and which are NC, plus the grid reference where each one
   appears.

That last item is what makes a multi-sheet drawing set usable. If the list
beside K1 shows four contacts but only K1.1 and K1.2 appear on this page, there
is at least one more sheet and you know to go looking. Printing press and
process plant drawing sets routinely run to four sheets or more.

A caution on wire numbering: in a standard electrical installation a wire
carries one identifying label, the same at both ends. Equipment wiring does not
always follow that. One end may land on a terminal strip and the other on a
plug or a printed circuit card socket, and the two ends may be labelled
differently. Trace it with the drawing, not with an assumption.

## What to remember

- Block diagram = what it does; schematic = how it works; wiring diagram =
  where the wires go. Pick the drawing that answers your question.
- Connections in a wiring diagram happen only at terminals.
- Heavy lines for power, light lines for control; dashed lines for mechanical
  linkage and temporary connections.
- Coils and lamps live at the end of a rung and are paralleled, never seriesed.
- Grid references and contact lists beside coils are how you find the other
  half of a circuit on another page.
`,
          quiz: [
            {
              q: "You need to know which terminal on a contactor a particular blue wire lands on. Which drawing do you reach for?",
              options: [
                "The block diagram",
                "The single-line diagram",
                "The wiring (connection) diagram",
                "The ladder schematic",
              ],
              answer: 2,
              explain: "Only the wiring diagram is a true representation of components and terminations — connections in it are made solely at terminals. A schematic deliberately ignores physical layout, and a block diagram shows no connections at all.",
            },
            {
              q: "On a motor schematic, why is the control circuit drawn in lighter lines than the power circuit?",
              options: [
                "To show it operates at extra-low voltage",
                "Because it transfers no energy to the motor and is wired in smaller cable",
                "Because it is optional and may be omitted",
                "To indicate the wiring is temporary",
              ],
              answer: 1,
              explain: "Line weight is a drawing convention that distinguishes power conductors from control conductors. It says nothing about the control voltage — many control circuits shown in light lines run at full line voltage. Dashed lines, not light lines, indicate temporary connections.",
            },
            {
              q: "Two coils need to operate together from the same rung of a control circuit. How should they be connected?",
              options: [
                "In series, so both must be healthy for either to work",
                "In parallel, each with its own path to the return rail",
                "In series with a resistor to balance the voltage",
                "One in the power circuit and one in the control circuit",
              ],
              answer: 1,
              explain: "Coils and lamps in a control circuit are paralleled, never seriesed. In series each coil sees only part of the supply voltage and neither pulls in reliably. Parallel connection gives each coil full voltage.",
            },
            {
              q: "The contact list beside coil K1 shows four contacts, but only K1.1 and K1.2 appear on the sheet you are reading. What does this tell you?",
              options: [
                "The drawing contains an error and two contacts are missing",
                "K1.3 and K1.4 are spare and unused",
                "There is at least one further sheet in the drawing set carrying the other contacts",
                "The contactor has been replaced with a smaller model",
              ],
              answer: 2,
              explain: "The contact list beside a coil is precisely the cross-reference that tells you what exists and where to find it. Contacts that do not appear on this page must appear elsewhere in the set, which is why page and grid referencing exist.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "contactors-relays",
          title: "Contactors, relays, contact numbering and thermal overloads",
          minutes: 13,
          simple: "A contactor is an electrically operated switch: put voltage on its coil and a magnet pulls a set of contacts closed. It lets a tiny thermostat switch a big motor, the way a light switch beside the door can turn on a floodlight. A thermal overload sits next to it and drops the coil out if the motor pulls too much current for too long.",
          refs: REFS_CONTACTORS,
          content: `
Contactors and relays are the workhorses of every control panel you will ever
open. Both are the same idea: energise a coil, and a set of contacts changes
state. The difference is scale. Convention says a **relay** is a low-powered
device used for control and logic, while a **contactor** is a heavy-duty device
that switches supply to high-current loads such as motors and heating elements.
A contactor is, in many ways, just a big relay, and there are borderline
devices where either name would be fair.

## Inside the device

An electromechanical contactor or relay has three parts:

1. **The operating coil** — an electromagnet wound on a bobbin.
2. **The magnetic circuit** — a fixed core and a movable armature, with an air
   gap between them when de-energised.
3. **The contacts** — fixed contacts and movable contacts, the movable set
   attached to (but electrically insulated from) the armature, and returned by
   a spring.

Energise the coil and a magnetic field is set up in the magnetic circuit. The
field pulls the hinged armature across the air gap against spring tension,
completing the magnetic circuit. As the armature travels, the movable contacts
close against the fixed contacts. Normally open contacts close and normally
closed contacts open, all at the same instant, because they share one mechanical
linkage. De-energise the coil and the spring drags the armature back open,
overcoming any residual magnetism in the iron.

Current reaches the moving contact through a flexible braid, not through the
hinge — a detail worth remembering, because a broken or corroded flexible
conductor is a real failure mode on old contactors.

A **solid state relay (SSR)** does the same job with no moving parts, switching
with thyristors, TRIACs, diodes or transistors. No contacts means no contact
wear, no arcing and no chatter, but SSRs need heatsinking, have a small leakage
current when off, and fail short-circuited rather than open — a difference that
matters a great deal when you are designing a safety-related circuit.

## Contact designations and terminal numbering

Standard terminal numbering is what lets you wire an unfamiliar contactor
without a manual:

| Terminals | What they are |
|---|---|
| A1, A2 | Coil terminals (some timers and relays use L and N instead) |
| 1-2, 3-4, 5-6 | Main power contacts (three-pole contactor) |
| 13-14, 23-24 | Auxiliary normally open contacts (unit digits 3 and 4) |
| 11-12, 21-22 | Auxiliary normally closed contacts (unit digits 1 and 2) |

The tens digit gives the position of the contact on the block; the units digit
gives its function. Read the last digit and you know instantly whether you are
holding an NO or an NC contact. Timer relays are a partial exception — many
have a single changeover set with a common terminal shared between the NO and
NC contacts, and manufacturers vary. Read the manufacturer's diagram printed on
the side of the device.

On the schematic, a contact carries the designation of its parent device plus a
number. Contactor K1 with four contacts has K1.1, K1.2, K1.3 as its three power
contacts and K1.4 as its auxiliary. That numbering is not decorative — it is
how you find the other end of the story on a multi-page drawing.

AS/NZS 1102 does not really distinguish power contacts from control contacts.
It offers two symbols, labelled Form 1 and Form 2, and drafters commonly use
one form for control contacts and the contactor symbol for power contacts, for
clarity.

## Three ways to draw a contactor

- **Attached representation** shows the coil and all its contacts together
  inside a broken-line box, indicating one physical assembly. It is honest about
  the hardware but it wrecks the logical layout of a schematic, so it is seldom
  used.
- **Semi-detached representation** draws the coil and its contacts separately,
  joined by a dashed line showing which coil operates which contacts. Useful
  when the parts happen to sit close together or in line.
- **Detached representation** is the normal method. Coil and contacts are drawn
  wherever the circuit logic wants them, and the relationship is carried
  entirely by labelling. The coil symbol carries the device designation (K1)
  and a number stating how many contacts it operates. Nothing physically links
  them on the page — the label does all the work.

## Ratings and utilisation categories

A contactor is not simply rated in amps. It is rated for a *duty*, because
switching a resistive heater is a far gentler job than breaking the current of
a running motor.

| Category | Duty | Example |
|---|---|---|
| AC-1 | Non-inductive or slightly inductive loads | Resistance heating, incandescent lighting |
| AC-2 | Slip-ring motor starting and switching off | Wound-rotor motors |
| AC-3 | Squirrel cage motors, breaking at running speed | Compressors, fans, pumps — most refrigeration work |
| AC-4 | Plugging, inching and jogging duty | Machine set-up, positioning drives |

Contactors used for motor starting are designed to carry around five times
their rated current for a short time, because that is what a direct-on-line
start demands. A contactor selected on running current alone but used for
jogging duty will weld its contacts within months. Jogging circuits need AC-4
rated starters, and an AC-3 contactor asked to jog is a scheduled failure.

## Coil voltages and the control supply

Coils are wound for a nominated voltage: 400 V, 230 V, 110 V a.c., or 24 V a.c.
or d.c. The control circuit may be taken directly from two line conductors of
the supply (a line-voltage control circuit, which is common on simple motor
starters) or fed from a dedicated **control transformer**.

A control transformer is worth its cost in most plant. It gives you:

- A lower, safer control voltage — 110 V or 24 V rather than 400 V at every
  pushbutton, limit switch and float switch spread around the plant.
- Isolation from the power circuit, so a control-circuit earth fault does not
  put line voltage on a pilot device.
- A stable supply for electronic controllers and PLCs, which typically want
  extra-low voltage — 24 V, 12 V or 5 V — derived from the mains through a
  transformer.

Protect both sides. Fuse the primary, fuse the secondary, and where the
secondary supplies a control circuit it is normal Australian practice to earth
one leg so that a single earth fault blows a fuse rather than energising the
circuit unexpectedly.

>! Contactor coils store energy in their magnetic field, and control circuits
>! can hold dangerous voltage from a source you have not isolated — a control
>! transformer, a separate control supply, or an interlock fed from another
>! board. Isolating the motor feed does not necessarily make the control
>! circuit dead. Isolate, lock out, tag out and prove dead at the point of work
>! before touching terminals.

## Thermal overloads

Fuses and circuit-breakers protect the *circuit*. A thermal overload protects
the *motor windings*, and it is a different job. A motor drawing 115 per cent
of full-load current will destroy its insulation over an hour while a correctly
sized circuit-breaker sits there quite happily.

A thermal overload relay clips onto the load side of the contactor, in series
with the motor windings. Motor current flows through small heater elements,
warming a bimetallic strip. Because the two metals expand at different rates,
the strip bends, and after a time that depends on how large the overcurrent is,
it trips a small mechanism. That mechanism operates auxiliary contacts: normally
closed contacts open, normally open contacts close.

The normally closed auxiliary contact — labelled TOL on most drawings — is
wired in series with the contactor coil in the control circuit. When the
overload trips, that contact opens, the coil de-energises, all the power
contacts open and the motor stops. The normally open contact is often used to
light a fault lamp or signal a controller.

Two consequences follow, and both matter in the field:

- The motor will **not** restart by itself. The latching circuit has been
  broken, so somebody must reset the overload and press start. That is
  deliberate — automatic restart after an overload trip is dangerous.
- The overload must be **matched to the motor**, not to the contactor's
  capacity, and set to the motor's full-load current from the nameplate. An
  overload wound back so it stops nuisance tripping is no longer protection.

Overloads are current-sensing devices with an adjustable setting and a trip
class describing how long they tolerate a given overcurrent. On refrigeration
plant they are one of the few things standing between a stalled compressor and
a burnt-out motor.

## On the job

- Terminal numbers tell you the contact function: units digit 1-2 means NC,
  3-4 means NO, A1-A2 is the coil.
- Detached representation is normal; the label, not a line on the page, links a
  coil to its contacts.
- Select contactors on duty category, not just amps. Jogging duty is AC-4.
- Set the overload to nameplate full-load current, and never wind it up to stop
  nuisance trips — find out why it is tripping.
- A chattering contactor usually means low coil voltage, a broken shading ring
  or dirt in the magnetic circuit, and it will burn contacts fast.
`,
          quiz: [
            {
              q: "You find a contactor auxiliary block with terminals marked 21 and 22. What is it?",
              options: [
                "A normally open auxiliary contact",
                "A normally closed auxiliary contact",
                "A coil connection",
                "A main power contact",
              ],
              answer: 1,
              explain: "The units digit gives function: 1-2 is a normally closed contact, 3-4 is normally open. The tens digit (2) just says it is the second contact position on the block. A1-A2 would be the coil.",
            },
            {
              q: "A machine set-up circuit jogs a drive motor dozens of times a shift using an AC-3 rated contactor. What is the likely outcome?",
              options: [
                "Normal service life, because AC-3 covers all motor duties",
                "Rapid contact erosion and eventual welding, because jogging is AC-4 duty",
                "The overload will trip on every jog",
                "The coil will overheat and open-circuit",
              ],
              answer: 1,
              explain: "AC-3 covers starting a squirrel cage motor and breaking it at running speed. Jogging makes and breaks locked-rotor current repeatedly, which is AC-4 duty. The contactor is not damaged by the coil or the overload — it is the contacts that erode and weld.",
            },
            {
              q: "Why is the normally closed thermal overload contact wired into the control circuit rather than the power circuit?",
              options: [
                "Because it cannot carry motor current and its job is to de-energise the contactor coil",
                "Because the power circuit already has fuses",
                "Because AS/NZS 1102 requires all contacts in the control circuit",
                "Because it needs a lower voltage to operate the bimetal",
              ],
              answer: 0,
              explain: "The auxiliary contact is a small control contact. Opening the coil circuit makes the contactor drop out, which opens the three main contacts that actually carry motor current. The heater elements, not the contact, sit in the power circuit.",
            },
            {
              q: "A control panel is fed from a 400/110 V control transformer. Which statement is correct?",
              options: [
                "Isolating the motor supply at the isolator always makes the control circuit dead",
                "The control circuit may still be live from the transformer or another board, so it must be proven dead at the point of work",
                "A control transformer removes the need to fuse the secondary",
                "Control transformers are only used with PLCs",
              ],
              answer: 1,
              explain: "Control circuits are frequently fed from a separate source, including interlocks from other switchboards. Isolating one feed proves nothing about the rest. Both primary and secondary should be fused, and control transformers are used far more widely than just for PLCs.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "timers",
          title: "Timers and timing functions in control circuits",
          minutes: 10,
          simple: "A timer is a relay that waits. Some wait after you switch them on before their contacts move, some hold their contacts over for a while after you switch them off, and some give one fixed pulse. That waiting is what lets a machine warn people before it starts, or lets a compressor rest before it tries again.",
          refs: REFS_TIMERS,
          content: `
A great deal of what a control circuit does is not "if this, then that" but
"if this, then that, *after* a while". Compressor anti-recycle delays, pump-down
sequences, defrost termination, warning horns before a conveyor starts and the
star-to-delta changeover of a motor starter are all timing problems.

## Kinds of timing device

- **Pneumatic** timers use a bellows and an adjustable air bleed. Clip-on
  pneumatic delay blocks are still fitted as accessories to older contactors,
  and stairwell lighting timers used the same principle.
- **Electro-mechanical** timers use a synchronous motor turning a cam shaft,
  with cams operating micro-switches. This is how older dishwashers, glasswashers
  and washing machines ran their cycles — a rotating shaft physically sequencing
  the machine.
- **Electronic (solid state)** timers use an oscillator and counter. The
  installer sets on and off times; accuracy and repeatability are far better
  than mechanical devices.
- **Programmable** timers and programmable relays hold multiple set points per
  day and per week, and combine timing with counting and logic.

Mechanical timers have been superseded, but their principle is worth knowing
because it shows that *position, sequence, cycle and timing* are used almost
interchangeably as control terms. Timing always needs a reference point. And in
electronic and programmable systems the reference is often not time at all —
counters register pulses, and a start or stop step may be triggered by a count
rather than by seconds elapsed.

## Timed contacts and coils

A timed contact is drawn with a semicircle — a "parachute" — on the moving
element, indicating that the contact is slowed in its operation. Four
combinations exist, and they must be read carefully because the symbols are
similar:

| Contact | Symbol cue | Behaviour |
|---|---|---|
| NO, on-delay | Parachute opposing the closing direction | Open at rest; closes a set time after the coil energises |
| NO, off-delay | Parachute opposing the opening direction | Closes immediately on energising; reopens a set time after de-energising |
| NC, on-delay | Parachute on the closed contact | Closed at rest; opens a set time after the coil energises |
| NC, off-delay | Parachute reversed | Opens immediately on energising; recloses a set time after de-energising |

The coil symbols are marked to match. A normal relay coil is a plain rectangle;
an **on-delay** coil carries two diagonals in a rectangle at one end; an
**off-delay** coil carries a filled-in rectangle at one end. Coils with slow
closing action give on-delay contacts; coils with slow releasing action give
off-delay contacts. Programmable timer relays combine instantaneous, on-delay
and off-delay contacts in a single device.

## The three timing functions in plain language

- **On-delay (delay on energisation).** Apply voltage to the coil, and nothing
  happens for the set time. Then the contacts change. Remove voltage and they
  reset instantly. Used to hold something off until a condition has persisted —
  a compressor that must not restart within three minutes of stopping, a
  star-delta changeover, a low-pressure switch that must be ignored during
  pull-down.
- **Off-delay (delay on de-energisation).** Apply voltage and the contacts
  change immediately. Remove voltage and they hold their new state for the set
  time, then release. Used to run something on after the main load stops — a
  condenser fan or an evaporator fan running on after the compressor, or a
  purge cycle.
- **Interval (one-shot).** Apply voltage and the contacts change immediately,
  then revert after the set time whether or not the coil is still energised.
  Used to produce one pulse of fixed length — a warning horn that sounds for
  five seconds regardless of how long the operator leans on the button.

Terminal designations on timer relays are usually A1 and A2 for the coil, or L
and N depending on manufacturer, and many use a single changeover contact with
a shared common. Always check the diagram on the device.

## A sequence built from timers

A production machine start-up shows the idea nicely. The operator presses START.
That does not start the machine. It starts two timers at once.

1. A short window, typically three to five seconds, during which flashing
   lights and a warning buzzer alert anyone near the machine, and during which
   the RUN button is deliberately dead.
2. A longer window, perhaps ten seconds from the same instant, during which the
   RUN button will work.

So the operator must wait out the warning period, then press RUN inside the
remaining window. Press it too early and nothing happens. Leave it too late and
the control circuit resets, and the whole start sequence must begin again.
Newspaper press start sequences work on this principle.

There is a second, quieter reason for timed starting. When production stops
unexpectedly, mechanical arms and levers can be left in the wrong physical
position. A timed start gives those parts time to return to their home position
before drive power is applied, which prevents machinery damaging itself on
start-up.

## Timers in motor starters

Timers are what turn a bank of contactors into a starter:

- **Star-delta:** the timer holds the star contactor in while the motor
  accelerates, then, after a set time, drops star out and picks delta up.
- **Primary and secondary resistance starters:** timers short out starting
  resistors stage by stage as the motor comes up to speed.
- **Autotransformer starters:** a delayed-opening contact takes the motor off
  the transformer tapping and onto full line voltage.

In each case the timer setting is a compromise. Too short and the motor is
thrown onto full voltage before it has accelerated, producing a current surge
almost as bad as direct-on-line starting. Too long and the starting windings,
resistors or transformer are cooked. Set it from the manufacturer's data and
the actual run-up time you measure, not from habit.

>! Never defeat an anti-recycle or minimum-off timer on a refrigeration
>! compressor to "get the plant going". Those timers exist to stop the
>! compressor restarting against a high head pressure and to give oil and motor
>! windings time to recover. Bypassing one converts a nuisance call into a
>! burnt-out compressor motor.

## On the job

- On-delay waits before acting; off-delay acts immediately and waits before
  releasing; interval gives one fixed pulse.
- The parachute always points against the direction that is being slowed down.
- Programmable relays replace stacks of separate timers, relays and counters
  and give you a display that shows time remaining — a real fault-finding aid.
- Suspect a timer only after you have proven its coil is being energised. Most
  "faulty timer" calls turn out to be a missing input.
- Record any timer setting you change, on the drawing and in the panel.
`,
          quiz: [
            {
              q: "An evaporator fan must keep running for two minutes after the compressor stops. Which timing function is required?",
              options: [
                "On-delay",
                "Off-delay",
                "Interval (one-shot)",
                "A counter",
              ],
              answer: 1,
              explain: "Off-delay contacts change state immediately when the coil is energised and hold that state for the set time after de-energisation — exactly the run-on behaviour needed. On-delay would delay the fan starting instead, and an interval timer would give a fixed pulse regardless of the compressor.",
            },
            {
              q: "A star-delta timer has been wound down to one second on a loaded conveyor drive that takes eight seconds to run up. What is the consequence?",
              options: [
                "The motor will fail to start at all",
                "The changeover to delta happens before the motor has accelerated, producing a large current surge",
                "The star contactor will overheat",
                "Nothing — the timer only affects the control circuit",
              ],
              answer: 1,
              explain: "Star-delta only limits current while the motor is in star. Switching to delta at low speed applies full voltage to a nearly stationary motor, so the current surge approaches the direct-on-line value and much of the benefit of the starter is thrown away.",
            },
            {
              q: "What does the semicircle or 'parachute' on a contact symbol indicate?",
              options: [
                "That the contact is rated for higher current",
                "That the contact is slowed in operation and belongs to a timed device",
                "That the contact is in the power circuit",
                "That the contact is manually operated",
              ],
              answer: 1,
              explain: "The parachute marks a timed contact, and its orientation shows which direction of travel is delayed. Power contacts use the contactor symbol; manual operation is shown by a separate actuator symbol.",
            },
            {
              q: "In the timed start sequence described, why is the RUN pushbutton dead for the first few seconds after START is pressed?",
              options: [
                "To let the contactor coils charge",
                "To force a warning period during which lights and a buzzer alert anyone near the machine",
                "Because the PLC scan cycle takes that long",
                "To allow the overload to reset",
              ],
              answer: 1,
              explain: "The first timed window is a safety warning period. Only after it expires does the second window allow RUN to work, and if RUN is not pressed inside that window the sequence resets and must be started again.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "start-stop-control",
          title: "Start-stop control: latching, two-wire, three-wire and jogging",
          minutes: 13,
          simple: "A start button is only pressed for a moment, so something has to hold the circuit on after your finger leaves. That something is an extra contact on the contactor wired around the start button — the hold-in contact. Once you understand that one trick, most motor control circuits make sense.",
          refs: REFS_STARTSTOP,
          content: `
The direct-on-line start-stop circuit is the single most important circuit in
the trade. Nearly every control circuit you will meet is this one with
additions. Learn it properly and the variations fall out almost by themselves.

## The basic circuit and how it operates

Take a three-phase motor fed through contactor K1 and a thermal overload. The
power circuit is three normally open contacts K1.1, K1.2 and K1.3 in the three
lines, with the overload heaters below them. The control circuit is connected
across two of the supply lines — line voltage control — and contains, in series:
the normally closed **stop** button, the normally open **start** button, the
coil K1, and the normally closed thermal overload contact.

Press start. Current flows through the closed stop button, through the start
button you are holding, through coil K1 and the closed overload contact back to
the supply. K1 pulls in. Every K1 contact changes state at the same instant:
K1.1, K1.2 and K1.3 close and put line voltage on the motor.

Now let go. The start button springs open — it is a momentary device, and the
symbol shows that. Without help the coil would drop straight back out. What
keeps it in is a fourth contact, **K1.4**, a normally open auxiliary contact
wired in parallel across the start button. When K1 pulled in, K1.4 closed, and
it now provides a path around the released start button.

That contact is the **latching**, **hold-in** or **maintaining** contact, and
it is the heart of the circuit. It takes over from the start button. The coil
holds itself in through its own contact.

To stop, press the momentary stop button. Its normally closed contacts open,
the current path through the coil is broken, K1 drops out, K1.4 opens with all
the others, and the motor stops. Release the stop button and nothing restarts,
because the latch is broken and only the start button can re-establish it.

The same happens if the thermal overload trips: the TOL contact in series with
the coil opens, the coil drops out, the motor stops, and it cannot be restarted
until the overload has been reset and start pressed again.

!FIG[ladder-rung]

## Why this is called three-wire control

Look at what has to be run out to a remote start-stop station: a wire in to the
stop button, a wire from stop to start, and a wire back from the start button
and the hold-in contact. Three wires. Hence **three-wire control**.

Three-wire control has a safety property that gives it its real value:
**low-voltage release**. If the supply is lost for even a moment, the coil drops
out and the latch breaks. When the supply returns, the motor stays stopped
until somebody presses start. A machine that restarted by itself after a power
interruption — with a fitter's hands inside it — is exactly the scenario this
prevents.

## Adding stations: the two golden rules

Real plant needs more than one place to start and stop. The rules are simple
and absolute:

- **Extra stop buttons go in series.** Any one of them, pressed, must break the
  circuit. Series connection means every stop button must be closed for the
  circuit to hold in.
- **Extra start buttons go in parallel.** Any one of them, pressed, must make
  the circuit. Parallel connection means any single start button can complete
  the path.

A circuit with one start position and several stop positions is common where a
machine needs emergency stops at several places along its length — a conveyor is
the obvious case. Only one place starts it, but anyone can stop it.

Two start and two stop stations gives **two-position control**. The pattern
extends indefinitely: three stations, four stations, remote stations mounted in
another room. Each remote station is normally shown on the schematic inside a
dotted-line box, because it is a separate physical assembly.

## Local and remote selection

Sometimes it is dangerous to have two stations both live. If a fitter is
setting the machine up at the machine while an operator sits at a remote panel,
the wrong person could start it. The fix is a **local/remote selector switch** —
a hand-operated changeover switch that puts either the local pushbuttons or the
remote pushbuttons into circuit, never both. This costs one extra contactor
auxiliary contact and one changeover switch.

There is a catch you must be aware of, and it catches people: with the selector
in LOCAL, only the **local** stop buttons are in circuit. Somebody at the
remote panel hammering the remote stop button will achieve nothing. Processing
and production plant needs local/remote for maintenance and for switching
between run mode and set-up mode, but the limitation must be understood by
everyone who works on the machine.

## Two-wire control

Many circuits do not have pushbuttons at all. A thermostat on a coolroom, a
float switch on a water tank, a pressure switch on an air compressor — each is a
single automatic device that both starts and stops the load. Only two wires run
out to it, so this is called **two-wire control**.

The circuit is simply the automatic device in series with the contactor coil.
No latching contact is required, because the device holds itself closed as long
as the condition persists. On a pressure switch schematic the device is drawn
as a small square containing a lower-case p.

Two-wire control has the opposite restart behaviour to three-wire, and this is
the crucial trade point: **two-wire control restarts automatically after a
supply interruption**, because the controlling contact is still closed when the
power comes back. For a coolroom that is exactly what you want — the room must
recover. For a machine with moving parts it may be unacceptable. Choose the
control philosophy to match the risk.

## Two-wire and pushbutton control combined

Sometimes you want an operator to start something but a process condition to
stop it. Put the automatic device in series with the stop button of an
otherwise conventional three-wire circuit. A pump started by hand fills a tank
and then a float switch stops it automatically when the tank is full. The
operator can stop it at any time with the stop button, but cannot restart it
until the water level falls and the float switch recloses. Start is manual;
stop is either manual or automatic.

## Jogging (inching) control

Setting a machine up often means nudging it a few degrees at a time — feeding
paper through the rollers of a press, aligning a tool, threading sheet steel in
a mill or cloth in a textile plant. Trying to do that with start and stop
buttons is unreliable, clumsy and genuinely dangerous.

**Jogging** means the motor runs only while a button is held. The circuit uses a
jog pushbutton with a changeover action: pressing it opens the path through the
hold-in contact K1.4 and simultaneously closes a path around the start button
directly to the coil. So the coil energises, the motor turns — and because the
hold-in contact has been isolated, the instant the button is released the coil
drops out. There is no latch to keep it running.

The jog button must be **break-before-make**: its normally closed section must
open before its normally open section closes, or the hold-in path would remain
live and the motor would latch on. Some jog buttons add a small delay on
reclosing to give the contactor time to drop K1.4 out.

Jogging circuits normally sit behind a RUN/SET-UP changeover switch. In RUN the
machine operates at production speed; in SET-UP it crawls, typically under
10 rpm, so staff can work on it. Jogging duty is severe on contactors and
requires AC-4 rated starters.

>! Slow does not mean safe. Even under 10 rpm, rotating machinery has taken
>! fingers and limbs. Jogging is a set-up function performed under a documented
>! safe work procedure, with guards in place wherever possible and everybody
>! near the machine aware that it is about to move. Never jog a machine because
>! it is quicker than isolating it.

## On the job

- The hold-in contact is a normally open auxiliary of the coil it holds, wired
  in parallel with the start button.
- Stops in series, starts in parallel. No exceptions.
- Three-wire control will not restart after a power interruption; two-wire
  control will. Pick deliberately.
- With a local/remote selector on LOCAL, the remote stop buttons do nothing —
  tell the operators.
- A motor that starts while the button is held but drops out when released has
  a hold-in contact problem: an open auxiliary contact, or its wire.
`,
          quiz: [
            {
              q: "A motor runs while the start button is held but stops the moment it is released. What is the most likely fault?",
              options: [
                "The thermal overload is tripped",
                "The stop button contacts are open",
                "The hold-in (latching) auxiliary contact or its wiring is open circuit",
                "The contactor coil is open circuit",
              ],
              answer: 2,
              explain: "The coil is clearly energising, so the coil, stop button and overload contact must all be sound. What has failed is the parallel path around the start button — the auxiliary hold-in contact K1.4 or the wire to it.",
            },
            {
              q: "A coolroom compressor is under two-wire thermostat control. The site loses supply for ten seconds. What happens when supply returns?",
              options: [
                "Nothing until somebody presses start",
                "The compressor restarts automatically, because the thermostat contact is still closed",
                "The overload must be reset first",
                "The contactor latches out and must be reset at the panel",
              ],
              answer: 1,
              explain: "Two-wire control has no latching contact, so there is nothing to break. The controlling contact is still closed and the contactor picks up again as soon as the supply returns. That automatic restart is desirable on a coolroom but must be a deliberate design choice, not an accident.",
            },
            {
              q: "Three additional stop buttons are to be added to an existing start-stop circuit. How are they connected?",
              options: [
                "In parallel with the existing stop button",
                "In series with the existing stop button",
                "In parallel with the start button",
                "In series with the contactor coil, after the overload",
              ],
              answer: 1,
              explain: "Stop buttons are normally closed and must each be able to break the circuit, so they go in series. Paralleling them would mean the circuit stayed made through the other buttons and no single stop would work. Start buttons, being normally open, go in parallel.",
            },
            {
              q: "Why must a jog pushbutton be break-before-make?",
              options: [
                "To protect the contactor coil from voltage spikes",
                "So the hold-in path is opened before the coil is fed, otherwise the motor would latch on and keep running",
                "To reduce arcing at the main contacts",
                "Because AS/NZS 1102 requires it for all changeover switches",
              ],
              answer: 1,
              explain: "If the normally open section closed before the normally closed section opened, the hold-in contact would still be in circuit and the motor would latch and run continuously — the opposite of jogging, and dangerous during set-up work.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "pilot-devices-sensors",
          title: "Pilot devices, sensors, transducers and indicator lamps",
          minutes: 14,
          simple: "These are the parts of a control circuit that notice things: buttons you press, switches an object bumps into, and sensors that detect heat, pressure, level or something passing by without touching it. They are the machine's senses, and the coils and motors are its muscles.",
          refs: REFS_DEVICES,
          content: `
A control circuit only knows what its input devices tell it. Choosing the right
device, mounting it correctly and wiring it into the right part of the circuit
is most of the job of control work.

## Two ways of controlling

At the crudest level there are only two things a control device can do:

1. **Control current** — open or close a series path so current either flows or
   does not. This is what switches, contacts and relays do, and it is by far the
   more common.
2. **Control voltage** — vary resistance so that the voltage available to the
   rest of the circuit changes. Potentiometers, rheostats and switched resistor
   banks do this. Insert resistance and you drop voltage across it, leaving less
   for the load.

The second idea underpins reduced-voltage starting and some speed control:
star-delta, primary resistance and autotransformer starters all reduce the
voltage reaching the motor, and secondary resistance in a wound-rotor circuit
regulates speed the same way.

## Categories of control device

| Group | Examples | Operated by |
|---|---|---|
| Manual contact switches | Pushbuttons (momentary and latching), toggle, selector, thumbwheel, DIP | A person |
| Mechanically operated switches | Limit switches, pressure switches, temperature controls, float and flow switches | Machine position or process condition |
| Relays and controllers | General-purpose relays, solid state relays, timer, counter and temperature controllers | Coil current or a program |
| Non-contact sensors | Inductive, capacitive, ultrasonic, photoelectric (including fibre optic and laser), temperature, pressure/flow, code readers | Field, beam or emitted signal |

### Pushbuttons and selector switches

A pushbutton is two things bolted together: a mechanical operator and a contact
block. The block may be NO, NC, or a stack of both. Momentary buttons spring
back; latching buttons stay where you put them. Multi-pole and multi-throw
versions exist for switching several circuits at once. Selector switches are
maintained-position rotary devices used for HAND/OFF/AUTO, LOCAL/REMOTE and
RUN/SET-UP duties.

### Limit switches

A limit switch is a mechanical switch operated by a machine reaching a position
— a door hitting its open stop, a conveyor extending to its travel limit, a
roller shutter reaching its upper or lower limit. Limit switches earn their
keep on travel limits, where they cut supply to a motor contactor before
something is destroyed.

### Float and flow switches

A float switch responds to liquid level, typically by a ball moving a lever
that operates contacts, or by a float carrying a magnet past a reed switch.
Bore pumps use them to stop the pump running dry. Flow switches confirm that
liquid is actually moving — vital on water-cooled condensers and chiller
evaporators, where loss of flow means freezing or overheating.

### Pressure switches

A pressure switch senses gas or liquid pressure against a bellows or diaphragm
and operates contacts at a set point. In refrigeration they are everywhere:
high-pressure cut-outs, low-pressure controls, oil differential pressure
switches and fan cycling pressure controls. Note that any mechanical pressure or
temperature switch has a **differential** — the point at which it resets is not
the point at which it trips, and often cannot be, mechanically.

### Thermostats and temperature sensing

A simple thermostat closes at one temperature and opens at another. The gap
between them is the differential, and it is what stops the plant short-cycling.
If a thermostat's contacts open at 22 °C they will almost certainly not close
again until noticeably lower — perhaps 18 °C, a differential of 4 K. Simple
on-off control gives you exactly two states, and for many processes that is not
accurate enough, which is one reason programmable controllers replaced them.

Temperature sensors used as inputs to controllers:

- **Thermocouple** — two dissimilar metals joined at one end; heating the
  junction produces a small voltage at the open end. This is the Seebeck effect.
  A copper/constantan pair with a cold junction held constant produces about
  4.3 mV at 100 °C and 14.8 mV at 300 °C — near enough to linear over a limited
  range that a millivoltmeter can be calibrated directly in degrees.
- **Thermistor** — resistance falls as temperature rises (NTC types).
- **Resistance temperature detector (RTD)** — resistance rises with temperature.
- **Semiconductor sensors** — silicon has a positive temperature coefficient,
  germanium a negative one.

### Non-contact sensing

- **Inductive proximity sensors** detect ferrous metal without touching it. A
  ferrite core with a coil, an oscillator, a Schmitt trigger and an output
  amplifier set up an electromagnetic field. A ferrous target entering the field
  has eddy currents induced in its surface, which changes the reluctance of the
  magnetic circuit and is detected as a change in the oscillator. Eddy-current
  sensors use an air-cored coil instead of a ferrite core, which means a much
  narrower working air gap.
- **Capacitive proximity sensors** produce an electrostatic field. An object
  approaching the sensing face changes the capacitance in the oscillator
  circuit, changing its amplitude and triggering the output. They will detect
  non-metals — paper, glass, cloth, liquids — and can sense through some
  container walls.
- **Photoelectric sensors** detect a broken light beam. The **through-beam**
  type has an emitter and receiver facing each other; the **retro-reflective**
  type houses both in one unit and bounces the beam off a reflector. Both are
  vulnerable to dust, dirt, smoke, moisture and direct or reflected sunlight,
  and need the emitter, receiver and reflector wiped regularly.
- **Fibre optic and laser sensors** carry or focus light for very small targets
  or very tight sensing areas, and for detection at a distance.
- **Ultrasonic sensors** emit a high-frequency sound pulse and time the echo.
  Because echo time is proportional to distance, they measure as well as detect —
  level in small containers, stack height, contour recognition, counting.
- **Rotary (shaft) encoders** convert shaft rotation into output pulses, giving
  position and speed. Pulses from several encoders let multiple conveyor drives
  be speed-synchronised.
- **Code readers and OCR** read barcodes — bars and spaces of varying width —
  and are standard in distribution, logistics and mail processing.

## Sensors, actuators and transducers

The words are used loosely on site, so it pays to be precise:

- A **sensor** is an input. It detects a physical change or a form of energy —
  heat, light, motion, chemical — and converts it into an analogue or digital
  electrical signal.
- An **actuator** is an output. It converts energy into motion or action.
  Relays, contactors and solenoids are actuators. So is a bimetallic strip,
  which converts heat directly into movement because the two metals have
  different coefficients of thermal expansion and the strip bends towards the
  metal that expands less.
- A **transducer** is any device that reproduces a variation in one form of
  energy as a measurable variation in another — usually as a voltage, often only
  millivolts. Depending on which way it works, a transducer may be classified as
  a sensor or an actuator. An electric motor is both.

| Transducer type | Example and conversion |
|---|---|
| Electroacoustic | Loudspeaker: electrical signal to sound; microphone: sound to signal |
| Electromagnetic | Generator: motion in a magnetic field to electrical energy |
| Electromechanical | Strain gauge: deformation to resistance; motor: electrical to mechanical |
| Electrochemical | Battery: chemical energy to electrical energy |
| Thermoelectric | Thermocouple: heat to voltage; thermistor: heat to resistance change |

Note that in a PLC system relays and their contacts often form part of the
internal logic rather than being outputs at all — only the contactors, solenoids
and indicator lamps count as outputs.

## Indicator lamps

Indicator lamps are outputs and they belong at the end of a rung, in parallel
with other loads, never in series with a coil. Standard Australian colour
practice is worth knowing: red for a dangerous condition or an emergency, green
or white for normal or safe conditions and "ready", amber or yellow for caution
and abnormal conditions, blue for a mandatory action. A "motor running" lamp
driven by an auxiliary contact of the run contactor tells you the contactor has
actually pulled in — a lamp driven from the coil circuit only tells you the coil
has been asked to pull in. Wire it from the auxiliary contact.

## Selecting devices

The chapter calls these **duty ratings**, and they apply from pilot lamps right
up to contactors:

- the power the device must handle
- the type and magnitude of voltage across it
- the type and magnitude of current through it, and for how long
- how many circuits it controls, and of what type
- what it does to the circuit — opens it or closes it

Components may be specified for you in a bill of materials from the client or
engineer, or you may have to select them yourself from a manufacturer's
catalogue.

Placement matters too. As a general rule, control devices go at the start of
the circuit, after the circuit protection. Devices may be paralleled where the
logic calls for it, but limit switches and proximity switches deserve care:
although they are control devices, they perform a function very close to
protection, so they belong in **series** with emergency stops and other control
devices rather than in a parallel branch.

## Failure modes

- Manual switch contacts wear out. That is their normal end of life.
- Resistive control devices are vulnerable to over-power and burn out.
- Limit and proximity switches fail through misalignment far more often than
  through electrical failure. Misaligned, they detect the wrong object or
  nothing at all.
- Photoelectric sensors fail dirty long before they fail electrically.

The compensating advantage of manual devices is that they are robust and cheap.
Automatic devices earn their place where no person is available to act, or where
the input is something a person cannot sense reliably.

## On the job

- Every mechanical pressure or temperature switch has a differential; know it
  before you blame the plant for cycling.
- Clean photoelectric emitters, receivers and reflectors as routine
  maintenance, not as a repair.
- Wire "running" lamps from an auxiliary contact, so the lamp proves the
  contactor actually closed.
- Limit and proximity switches go in series with the safety string, not on a
  parallel branch of their own.
- Check alignment before condemning a proximity or limit switch.
`,
          quiz: [
            {
              q: "A coolroom thermostat opens its contacts at 2 °C and does not close again until 5 °C. What is this 3 K gap called, and why does it exist?",
              options: [
                "Hysteresis error — it indicates a faulty thermostat",
                "The differential — it is inherent in the device and stops the plant short-cycling",
                "Offset — it must be calibrated out before commissioning",
                "Deadband error — it indicates the sensor is misplaced",
              ],
              answer: 1,
              explain: "A mechanical switching thermostat cannot open and close at the same temperature. The gap is the differential, and it is a feature, not a fault: without it the compressor would chatter on and off around the set point.",
            },
            {
              q: "Which sensing technology will reliably detect a cardboard carton passing on a conveyor without touching it?",
              options: [
                "An inductive proximity sensor",
                "A capacitive proximity or photoelectric sensor",
                "An eddy-current sensor",
                "A thermocouple",
              ],
              answer: 1,
              explain: "Inductive and eddy-current sensors respond to metal targets, so cardboard is invisible to them. Capacitive sensors detect non-metallic materials by the change in an electrostatic field, and a photoelectric sensor detects the beam being broken. A thermocouple measures temperature, not presence.",
            },
            {
              q: "Where should limit and proximity switches be placed in a control circuit, and why?",
              options: [
                "In a parallel branch of their own, so they cannot stop the machine",
                "In series with the emergency stops and other control devices, because they perform a protective function",
                "In the power circuit, in series with the motor",
                "Immediately before the circuit protection",
              ],
              answer: 1,
              explain: "Although limit and proximity switches are classed as control devices, their travel-limit and interlock roles are close to protection. Series connection means any one of them opening will stop the machine. Nothing except the supply and protection sits ahead of the control devices.",
            },
            {
              q: "Which statement about actuators and transducers is correct?",
              options: [
                "A transducer is always an input device",
                "A relay coil is a sensor because it senses current",
                "An actuator converts energy into motion, and an electric motor acts as both transducer and actuator",
                "A bimetallic strip is a transducer but not an actuator",
              ],
              answer: 2,
              explain: "Actuators are output devices that convert energy into motion — relays, contactors, solenoids and motors. A motor converts electrical energy to magnetic and then to mechanical energy, so it is both. A bimetallic strip converts heat directly into movement, making it a thermal actuator.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "interlocking-reversing",
          title: "Interlocking, reversing starters and sequence control",
          minutes: 12,
          simple: "Some pairs of contactors must never close together, because if they did they would short two phases straight across each other. An interlock is a lock-out that makes that impossible — one mechanical, like a bar that physically blocks the second contactor, and one electrical, like a contact that opens the other one's coil circuit.",
          refs: REFS_INTERLOCK,
          content: `
Reversing a three-phase motor is trivial in principle: swap any two of the
three supply lines and the rotating magnetic field reverses, so the rotor
follows it the other way. The rotor always tries to run in the direction of the
rotating field, and the direction of that field is set by the phase sequence of
the applied voltages.

In practice you do the swap with two contactors. Contactor K1 connects L1, L2
and L3 straight through to U, V and W for forward. Contactor K2 connects the
same three lines with two of them crossed over for reverse. That is the whole
power circuit of a reversing starter.

And there is the problem. Look at the power circuit and imagine both contactors
closed at the same time. Two supply lines are connected directly together
through the crossed-over contacts. That is a phase-to-phase short circuit — a
dead short, with a flashover and an arc-flash hazard at the contactor, and
whatever upstream protection exists will have to clear it. Preventing that
condition is what interlocking is for.

## Mechanical interlocking

A mechanical interlock is a physical device fitted between two adjacent
contactors. Two pegs or bars reach from the interlock into each contactor. When
one contactor's armature pulls in, its peg moves, and inside the interlock the
movement swings a flap that physically blocks the other contactor's armature
from travelling. Energise the second coil and it will hum and try, but the
contacts cannot close.

On the schematic, mechanical interlocking is indicated between the two sets of
power contacts by a small equilateral triangle and a broken line.

Mechanical interlocking is the preferred method, and the reason is important:
**it is the only method recognised by the Australian Standards as giving
complete assurance of interlocking should a contact fail.** A mechanical
interlock does not care whether a control contact has welded, whether a wire is
mis-terminated or whether somebody has bridged a terminal during fault finding.
It is a physical impossibility, not a logical one.

## Electrical interlocking

Electrical interlocking uses spare normally closed auxiliary contacts. The
normally closed contact of K1 is wired in series with coil K2, and the normally
closed contact of K2 is wired in series with coil K1.

With neither contactor energised, both those contacts are closed and either
coil can be energised. Energise K1, and its normally closed contact K1.5 opens,
breaking the supply path to coil K2. Press the reverse button all you like —
coil K2 cannot be energised. The mirror image applies if K2 energises first.

Electrical interlocking is cheap and it works, but its integrity depends
entirely on those normally closed contacts opening when they are supposed to.
If the normally closed contact on the energised contactor fails to open — welded,
or mechanically jammed — the second contactor is free to close and you get the
short circuit and phase-to-phase flashover that the interlock existed to
prevent.

>! Electrical interlocking should be used only as a back-up to mechanical
>! interlocking, or on systems where the risk of harm is genuinely minimal.
>! Never remove, bridge out or "temporarily" defeat an interlock contact to
>! prove a circuit during fault finding. A bridged interlock on a reversing
>! starter is a phase-to-phase fault waiting for the next button press, and the
>! arc energy released at a contactor is capable of killing the person standing
>! in front of it. Restore every interlock before you re-energise.

Where the contactor panel is mounted on moving machinery — a crane or a hoist —
mechanical interlocks are essential rather than merely preferable. If the crane
runs into its end stops, sheer inertia can slam both contactors closed.

## The reversing control circuit, step by step

A typical reversing circuit has two coils, K1 and K2, each with five contacts —
which is what the figure 5 written in the coil symbol means.

1. Press the **forward** start button. Current passes through the normally
   closed stop button, through the normally closed interlock contact K2.5,
   through coil K1 and the normally closed overload contact, back to the supply
   line. K1 energises.
2. All five K1 contacts change state at once. K1.1, K1.2 and K1.3 close and
   apply line voltage to the motor in the forward phase sequence.
3. K1.4, wired in parallel with the forward start button, latches the coil in.
   The start button can be released.
4. K1.5, a normally closed contact in the reverse coil circuit, opens. Coil K2
   is now electrically locked out.
5. To reverse, the **stop** button must be pressed first. All coils drop out,
   all contacts return to their de-energised state, and the reverse button will
   then work.
6. Pressing stop at any time de-energises everything and the motor coasts to
   rest.

Note step 5. On a plain reversing circuit you cannot go straight from forward
to reverse; you must stop first. That is deliberate. Slamming a running motor
into reverse is plug braking, it draws close to locked-rotor current, and it is
mechanically brutal on shafts and couplings. Circuits that do allow direct
changeover are designed for it and use timers.

The chapter's note on this is worth quoting as a principle: the arrangement
where the contacts of one contactor must de-energise and open before the second
can energise is a **break-before-make** system, and a timer is often added to
guarantee a momentary state in which both contactors are de-energised.

## A field example: the dispatch conveyor

Loading docks and dispatch bays run extendable conveyors that move packages
into truck trays. Extend/retract and raise/lower each have their own motor, and
each is driven by a forward-reverse contactor pair working exactly as described
above.

Around that sit the rest of the control system: multiple start-stop stations for
operators and contractors working along the belt, emergency stops within reach
of anyone, and **position limit switches** at every extreme of travel. The limit
switches de-energise the motor contactors when the conveyor reaches its
extend, retract, raise or lower limits. They are simultaneously equipment
protection and operator safeguards.

The same arrangement runs factory and warehouse roller shutter doors: upper and
lower limit switches cut supply to the door motor, and mechanically interlocked
contactors interchange two supply lines to reverse the direction of travel.

## Sequence control and interlocking between machines

Interlocking is a broader idea than just forward and reverse. It means making
one part of a plant conditional on another, and it is everywhere in
refrigeration:

- A compressor contactor with a normally open auxiliary contact from the
  condenser fan contactor in series with its coil, so the compressor cannot run
  without condenser airflow.
- A chiller compressor interlocked with a chilled-water flow switch and pump
  auxiliary contact, so it cannot run against no flow.
- A conveyor cascade where each belt is interlocked with the one downstream of
  it, so an upstream belt cannot run and pile product onto a stopped belt.
- A star-delta starter, where star and delta contactors are interlocked against
  each other exactly as forward and reverse are — for exactly the same reason.

Sequence control is built the same way. Take an auxiliary contact from the
contactor that must operate first, wire it in series with the coil that must
operate second, and the second cannot start until the first has actually pulled
in. Note that a contact from the coil circuit proves only that the coil was
asked to energise; a contact on the contactor itself proves it operated. Use
the auxiliary contact.

## On the job

- Two supply lines shorted together is what an interlock exists to prevent.
- Mechanical interlocking is the only method giving assurance if a contact
  fails. Fit both mechanical and electrical.
- Direction changes go through stop. Break-before-make, with a timer if needed.
- Interlock a compressor to the things it must not run without: condenser fan,
  water flow, oil pressure.
- After any work on a reversing starter, prove interlock integrity before
  handing the plant back.
`,
          quiz: [
            {
              q: "Why is mechanical interlocking preferred over electrical interlocking on a reversing starter?",
              options: [
                "It is cheaper and needs no auxiliary contacts",
                "It is the only method recognised by the Australian Standards as giving complete assurance should a contact fail",
                "It responds faster than an electrical interlock",
                "It removes the need for a stop button between direction changes",
              ],
              answer: 1,
              explain: "Electrical interlocking depends on a normally closed contact actually opening. If that contact welds or jams, the second contactor can close and short two phases. A mechanical interlock physically blocks the armature regardless of the state of any contact, which is why the Standards recognise it as complete assurance.",
            },
            {
              q: "On a conventional two-contactor reversing circuit, what must happen before the direction can be changed?",
              options: [
                "The overload must be reset",
                "The stop button must be pressed so all coils drop out",
                "The local/remote switch must be changed",
                "Nothing — pressing the opposite start button changes direction directly",
              ],
              answer: 1,
              explain: "While K1 is energised its interlock contact holds coil K2 out, so the reverse button does nothing. Pressing stop drops everything out and returns all contacts to the de-energised state. This also protects the machine: going straight into reverse is plug braking and draws near locked-rotor current.",
            },
            {
              q: "A compressor must not be able to run without condenser airflow. What is the correct way to achieve this?",
              options: [
                "Fit a larger thermal overload on the compressor",
                "Wire a normally open auxiliary contact of the condenser fan contactor in series with the compressor contactor coil",
                "Wire the two coils in series",
                "Fit a time delay so the compressor starts after the fan",
              ],
              answer: 1,
              explain: "An auxiliary contact on the fan contactor proves the fan contactor actually pulled in and puts that proof in series with the compressor coil. Coils are never wired in series, and a timer alone would let the compressor start even if the fan contactor had failed.",
            },
            {
              q: "What does a small equilateral triangle with a broken line between two sets of power contacts on a schematic indicate?",
              options: [
                "The contacts are timed",
                "The contactors are mechanically interlocked",
                "The contacts are in the control circuit",
                "The contacts operate simultaneously",
              ],
              answer: 1,
              explain: "That symbol marks mechanical interlocking between two contactors. A plain broken line linking contacts means they move together with one coil; a semicircle would mark a timed contact.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "reduced-voltage-starting",
          title: "Starting three-phase motors: DOL, star-delta and reduced-voltage starters",
          minutes: 15,
          simple: "Switch a big motor straight onto full voltage and it grabs up to seven times its normal current for a second or two, which dims lights and shocks the machinery it drives. Reduced-voltage starters feed it less voltage to begin with, the way you ease a clutch out instead of dumping it, then hand over full voltage once it is spinning.",
          refs: REFS_STARTERS,
          content: `
A motor starter has one prime function: connect a motor and the machine it
drives to the supply without disturbing other users, and do it repeatedly with
minimal maintenance. Everything else follows from that.

## What a starter has to do

When you select a starter you are balancing:

- limiting starting current to a value the distribution entity will accept, so
  other customers' line voltage is not dragged down
- controlling starting and accelerating torque, to keep mechanical shock off
  shafts, belts, couplings and the driven machine
- protecting the motor against overload and overheating
- isolating the motor in the event of a fault
- interlocking this motor's operation with other motors and machines
- reversal, speed control and braking where required

Australian distribution entities all impose limits on motor starting current,
scaled to motor size, and the limits differ between entities. Their published
rules almost always carry a clause reserving the entity engineer's discretion,
so for anything substantial you ask them. The intent is to prevent large
transient currents causing voltage disturbance on the consumer mains to the
detriment of other users.

## Why starting current is so large

At the instant of switch-on the stator is completely demagnetised, winding
resistance is low, and the stationary rotor bars behave exactly like the
short-circuited secondary of a transformer. Current is limited only by
impedance, and it is normal for the starting current of a squirrel cage motor
to reach **seven times full-load current**. It usually lasts only a second or
two. Starting torque is typically two to three times full-load torque and
arrives almost instantly, which is what shocks the mechanical drive train.

Current is roughly proportional to rotor slip, so as the motor accelerates and
slip falls, current falls with it.

## The compromise at the heart of every starter

To reduce starting current you must reduce the voltage applied to the motor.
But motor torque is proportional to the **square** of the applied voltage:

T ∝ V²

So reducing voltage costs you torque, fast. At 100 per cent of rated voltage
you get 100 per cent of rated torque. At 90 per cent of rated voltage you get
0.90 × 0.90 = 0.81, or 81 per cent of torque. Starting unloaded, that is fine.
Starting loaded, there may not be enough torque left to overcome the load and
the motor will stall — drawing locked-rotor current until the overload trips.

Every reduced-voltage starting method is a different answer to that one
compromise.

## Direct-on-line (DOL)

Full voltage straight onto the stator of a stationary motor. It is the simplest
and cheapest method: one contactor, one overload, a start-stop circuit with a
hold-in contact.

Sequence: press start; current flows through the normally closed stop button to
coil K1 and through the overload contact; K1 energises and K1.1, K1.2 and K1.3
apply full line voltage to the motor; K1.4 bridges out the start button so the
circuit is latched on. Press stop and the latch is broken.

Motors up to about 4 kW are normally started DOL, and in special circumstances
motors up to 25 kW have been. DOL is also generally restricted to situations
where the motor starts with little or no load. A centrifugal pump is a good
example — most of its load appears only after it is running and pressure builds.

For very large motors the mechanical shock of DOL starting can shear shafts or
cause severe belt slip and accelerated wear.

## Star-delta

For star-delta starting all six winding ends must be brought out to the
terminal box. The windings are first connected in **star**, then switched to
**delta** once the motor is near speed.

In star, each phase winding sees the line voltage divided by the square root of
three. On a 400 V system each winding sees about 231 V, roughly **58 per cent**
of rated voltage. Since torque follows voltage squared, starting torque falls to
about 0.58 × 0.58 = 0.33, or **33 per cent** of the DOL value.

The current story is just as important. In star, line current equals phase
current. Reconnect in delta and phase voltage rises by a factor of the square
root of three — about 173 per cent — so phase current rises by the same ratio,
and line current becomes three times the star value. For a winding impedance of
23 ohms the textbook figures are about 10 A line current in star rising to about
30 A in delta, with roughly 17 A phase current in delta.

Star must give enough torque to run the machine up to about 75 to 80 per cent of
full-load speed. If it cannot, star-delta is the wrong choice.

**Changeover transients.** During the open-circuit gap between dropping star and
picking up delta, the motor coasts and its own rotating flux generates a voltage.
When delta is connected, that generated voltage may add to or subtract from the
line voltage at random. The transient current can reach up to twenty times normal
running current for a few milliseconds — enough to put voltage spikes on the
supply. A **closed-transition** star-delta starter puts resistors in parallel
with each winding so current keeps flowing through resistors and windings in
series during the transition, then shorts the resistors out afterwards. It needs
an extra contactor and substantial resistors, is much more expensive, and is
seldom used.

### Star-delta starter circuit sequence

Four devices: K1 line contactor, K2 star contactor, K3 delta contactor, K4 timer.

1. Press start. The path runs through the normally closed stop button and two
   normally closed interlock contacts (K4.1 and K3.4) to coil K2 and the
   overload contact.
2. K2 energises. Contacts K2.1, K2.2 and K2.3 join the winding ends together in
   star.
3. Simultaneously K2.5 opens the circuit to K3, the delta contactor. Star and
   delta must never both be connected — they are electrically interlocked, and
   are usually mechanically interlocked as well.
4. K2.4 closes, energising timer K4 and coil K1. K1.4 closes and bridges the
   start button.
5. K1.1, K1.2 and K1.3 close and apply line voltage to the winding starts, so
   the motor runs up in star at 58 per cent of rated winding voltage.
6. The timer times out. K4.1 opens, K2 de-energises and the star connection
   drops away.
7. K2.5 recloses and energises K3. K3.4 opens the interlock and K3.5 switches
   the timer off.
8. K3.1, K3.2 and K3.3 close, completing delta, and the motor runs on full line
   voltage.
9. Pressing stop drops all coils out and the starter resets.

**Applications:** anything that can start unloaded — centrifugal pumps, farm dam
pumps, large fans and blowers, lathes with a clutch, and installations at the end
of long runs where DOL would cause an unacceptable voltage drop.

## Primary resistance starting

Resistors (occasionally inductors) are connected in series between the supply
lines and the motor terminals, dropping voltage at the motor terminals and
limiting starting current. Once the motor reaches about 75 to 80 per cent of
rated speed, the resistors are shorted out.

It has a genuinely elegant property. As the motor accelerates its current falls,
so the voltage dropped across the resistors falls, so the voltage at the motor
terminals rises — torque increases automatically as the motor speeds up.
Working against this slightly, the resistors heat up and their resistance rises.

Because the motor is never disconnected from the supply when the resistors are
shorted out, there is **no open-circuit transition and no changeover transient**.

**Liquid resistor starters** use an electrolyte in sealed insulated containers,
one per phase, with permanently immersed electrodes. Modern electrolytes have a
negative temperature coefficient: starting current heats the liquid, resistance
falls progressively, and the motor accelerates smoothly up to about 80 to 90 per
cent of full-load speed where the resistance stabilises. A timer then operates a
contactor that bridges out the electrodes. The metallic version uses a positive
temperature coefficient element; the liquid version a negative one, which is
precisely why the liquid type accelerates more smoothly.

**Applications:** loads with low initial torque requirement — fans, blowers and
water pumps.

### Worked example — primary resistance starting

A 400 V three-phase induction motor draws 160 A DOL. A primary resistance
starter reduces the motor terminal voltage to 280 V for starting. Find the
percentage of rated voltage, the starting current and the percentage of DOL
torque.

Percentage voltage = (280 ÷ 400) × 100 = **70 per cent**

Starting current is directly proportional to applied voltage:
Is = 0.70 × 160 = **112 A**

Torque follows voltage squared:
T = (0.70)² = 0.49, so **49 per cent of DOL starting torque**

### Primary resistance starter circuit sequence

1. Press start; the path runs through the stop button to coil K1 and the
   overload contact. K1 energises.
2. K1.4 closes and bridges the start button, latching the circuit.
3. K1.1, K1.2 and K1.3 close, feeding the motor through the resistors in series
   with each line, so starting current is limited below the DOL value.
4. Delayed-action contact K1.5 operates after the set delay and energises coil
   K2.
5. K2.1, K2.2 and K2.3 close, shorting out the resistors and applying full line
   voltage.
6. Stop de-energises all coils.

## Autotransformer starting

Two autotransformers connected in open delta supply the motor at a tapped,
reduced voltage. Tappings — commonly 50, 65 and 80 per cent — let you select the
starting torque. Three key relationships:

1. Motor starting current varies directly with the applied motor voltage.
2. **Line** current varies as the square of the motor voltage, because of
   transformer action.
3. Torque varies as the square of the motor voltage.

Point 2 is the whole advantage. For the same line current drawn from the supply,
an autotransformer starter delivers more motor torque than a primary resistance
starter.

### Worked example — autotransformer starting

The same 400 V motor drawing 160 A DOL, started on the 70 per cent tapping.

Motor voltage = 0.70 × 400 = **280 V**

Motor current = 0.70 × 160 = **112 A**

For a transformer, ignoring losses, V1 × I1 = V2 × I2, so the current drawn from
the supply is:

I1 = (V2 × I2) ÷ V1 = (280 × 112) ÷ 400 = **78.4 A**

That is 49 per cent of the DOL current. Torque is (0.70)² = **49 per cent** of
DOL torque. So the motor got 70 per cent voltage and 49 per cent torque, but the
line only supplied 49 per cent of DOL current.

### Comparison for the same 49 per cent line current

| Starter type | Voltage at motor | Line starting current | Starting torque |
|---|---|---|---|
| Primary resistance | 49% | 49% | (49%)² = 24% |
| Autotransformer | 70% | 49% | (70%)² = 49% |

Twice the torque for the same demand on the supply. That is why autotransformer
starters are used on heavy loads that must start from rest — larger refrigeration
units and air compressors that may have to start against a substantial head
pressure. In some cases electrically operated relief valves are fitted to
unload the head pressure so the motor can start at all.

Major characteristics of the autotransformer starter: low line current, low line
power, low power factor, an open-circuit transition period, and acceleration in
a series of steps rather than continuously.

The **Korndorfer** variant uses three autotransformers and an extra contactor so
that during transition the motor stays connected through part of the transformer
windings, which then act as series inductors. It maintains continuous torque
through the changeover and eliminates the open-circuit transient, but costs
enough that it is used only where there is no reasonable alternative.

### Autotransformer starter circuit sequence

1. Press start; the path runs through the stop button, normally closed delay
   contact K1.5, electrical interlock K3.3, coil K2 and the overload contact.
2. K2 energises; K2.1 and K2.2 connect the autotransformer ends to L1 in open
   delta.
3. K2.3 closes and K2.4 (the interlock) opens, locking out K3.
4. K2.3 energises coil K1. K1.1 to K1.4 close: full line voltage onto the
   autotransformers, reduced voltage to the motor via the tapping, and K1.4
   holds the control circuit in.
5. Delayed-opening contact K1.5 opens after the set time, de-energising K2 and
   opening the delta connection of the transformers. K2.4 recloses and K3
   energises.
6. K3.1 and K3.2 close, applying full line voltage to the motor through the K1
   contacts in series with two lines. K3.3 opens and isolates coil K2.
7. Stop de-energises everything.

## Secondary resistance starting (wound rotor)

A wound-rotor or slip-ring motor brings its rotor windings out to slip-rings,
where external resistance can be inserted. Maximum torque is produced when rotor
resistance equals rotor inductive reactance. At the instant of starting the rotor
is stationary, so rotor frequency equals line frequency and rotor reactance is at
its highest. Adding external resistance lets you match the two and obtain
**maximum torque at standstill while simultaneously minimising starting current**
— something no squirrel cage starter can do.

Full line voltage goes to the stator; the external rotor resistance is then
reduced in stages as the motor accelerates, either by hand or by contactors. The
more stages, the smoother the acceleration. Liquid resistors eliminate the steps
entirely: current heats the electrolyte, partial vaporisation changes the
resistance between the electrodes progressively, and a timed contactor finally
shorts the chambers out.

Circuit sequence: start energises K1 and, in parallel with it, timer K2. K1.4
latches the circuit; K1.1 to K1.3 apply full stator voltage with two resistors in
series with each rotor winding. After the delay, K2.1 closes and energises K4
along with a second time-delay relay K3. K4.1 and K4.2 cut out part of the
resistance and the motor speeds up. After a further delay K3.1 closes, energising
K5, whose contacts K5.1 and K5.2 remove the remaining rotor resistance and the
motor is in normal run mode.

**Applications:** machines handling impact loads — presses, drop-forging hammers,
guillotines — where heavy loads are applied suddenly and a flywheel carries the
blow; and overhead cranes, where rotor resistance doubles as speed control.

## Electronic starters

**Solid state reduced-voltage starters** and **soft starters** use six thyristors
or SCRs to phase-control the voltage applied to the motor. A microprocessor takes
three inputs — the starting circuit, line voltage and line current — and controls
firing accordingly. It monitors line current continuously, typically limiting
start current to around 300 per cent of full-load current. If any phase voltage
strays outside set limits or disappears, the motor protection circuit tells the
processor and it acts.

Soft starters operate at fixed supply frequency, so full torque is only available
at full voltage. They ramp the motor up smoothly and can ramp it down for a
controlled stop. Conveyors benefit — no jerk at start or stop — and printing
presses use ramped stopping as an immediate-slow-to-stop function to avoid
damaging product. They are popular retrofits for old reduced-voltage starters,
but check the insulation resistance of existing cabling first: the switching
spikes a solid-state controller generates are harder on tired insulation than a
clean sine wave.

Beyond the soft starter, an electronically controlled starter can add control of
starting current, overload current, over- and under-voltage monitoring, motor
protection, frequency, motor isolation, sequencing of other motors, dynamic
braking, low-speed operation, slip compensation and remote computer control.
These convert a.c. to d.c., filter it, and invert it back to a.c. with high-speed
switching. Ramping describes the controlled variation of motor current during
starting and stopping — current is held between a predetermined maximum and a
minimum sufficient to keep enough torque to accelerate.

Units are made above 300 kW. They can run squirrel cage motors well above and
below design speed, so where a motor will be started frequently or run slowly for
long periods, cooling must be checked — a shaft-mounted fan moves much less air
at low speed.

>! Everything in this lesson is three-phase work at 400 V and above, with fault
>! levels capable of producing an arc flash. Starting current transients of seven
>! times full-load current pass through the same terminals you test at. Isolate,
>! lock out, tag out and prove dead before working inside a starter. Where live
>! testing genuinely cannot be avoided, it must be authorised, risk assessed,
>! done with correct PPE and rated instruments, and with a competent observer.

## What to remember

- Torque follows voltage squared. Every reduced-voltage method trades torque for
  current.
- Star gives 58 per cent of winding voltage and 33 per cent of DOL torque.
- Primary resistance and secondary resistance have no open-circuit transition,
  so no changeover transient. Star-delta and autotransformer do.
- Autotransformer beats primary resistance on torque for the same line current,
  because line current falls as the square of motor voltage.
- Wound rotor is the only method that gives maximum torque at standstill with
  low starting current.
`,
          quiz: [
            {
              q: "A 400 V motor drawing 150 A DOL is started on a primary resistance starter that reduces the motor terminal voltage to 320 V. What starting current and percentage of DOL torque result?",
              options: [
                "120 A and 80 per cent of DOL torque",
                "120 A and 64 per cent of DOL torque",
                "96 A and 64 per cent of DOL torque",
                "150 A and 80 per cent of DOL torque",
              ],
              answer: 1,
              explain: "320 ÷ 400 = 0.80, so 80 per cent voltage. Starting current is directly proportional to voltage: 0.80 × 150 = 120 A. Torque follows voltage squared: (0.80)² = 0.64, so 64 per cent. The common error is applying the square to the current as well.",
            },
            {
              q: "Why does a star-delta starter give only about 33 per cent of DOL starting torque?",
              options: [
                "Because star connection halves the line current",
                "Because each winding receives about 58 per cent of rated voltage and torque follows voltage squared",
                "Because the timer limits the time full torque is available",
                "Because the star contactor has a lower current rating",
              ],
              answer: 1,
              explain: "In star each winding sees line voltage divided by the square root of three — about 231 V on a 400 V system, or 58 per cent. Since torque is proportional to the square of applied voltage, (0.58)² is about 0.33, or 33 per cent.",
            },
            {
              q: "For the same 49 per cent line starting current, why does an autotransformer starter produce more torque than a primary resistance starter?",
              options: [
                "Because transformer action means line current falls as the square of motor voltage, so the motor can be held at 70 per cent voltage while the line only supplies 49 per cent current",
                "Because autotransformers have no losses",
                "Because the autotransformer supplies a higher frequency during starting",
                "Because primary resistors get hot and lose voltage",
              ],
              answer: 0,
              explain: "In a resistance starter, motor current and line current are the same, so 49 per cent line current means 49 per cent motor voltage and (0.49)² = 24 per cent torque. With a transformer, V1 × I1 = V2 × I2, so 70 per cent motor voltage draws only 49 per cent line current, giving (0.70)² = 49 per cent torque.",
            },
            {
              q: "Which starting method produces no changeover transient because the motor is never disconnected from the supply during the transition?",
              options: [
                "Conventional star-delta",
                "Open-transition autotransformer",
                "Primary resistance",
                "Direct-on-line",
              ],
              answer: 2,
              explain: "In a primary resistance starter the resistors are simply shorted out, so supply to the motor is continuous. Conventional star-delta and open-transition autotransformer starters both have an open-circuit gap during which the coasting motor generates its own voltage, which can produce a large transient on reconnection. DOL has no transition at all — it is full voltage from the start.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "braking-speed-control",
          title: "Braking and speed control of three-phase motors",
          minutes: 15,
          simple: "Switching a motor off does not stop it — it coasts. If you need it stopped quickly or held still, you add braking: a friction brake, or a trick that turns the motor into a generator so its own energy fights the spin. Changing its speed means changing either the number of magnetic poles or the frequency it is fed.",
          refs: REFS_BRAKING,
          content: `
In plenty of installations letting a machine coast to rest is perfectly
acceptable — friction inside the machine dissipates the inertia and it stops in
its own time. On larger machines that inertia is considerable, and on a
production line, time spent watching a machine coast is time wasted. Then you
need braking.

The braking method has to suit the machine. The single most important question
is whether you need to *slow it down* or *hold it still*, because most electrical
methods can do the first and none of them can do the second.

## Mechanical braking

Deliberate friction between rotating and stationary parts. Brake shoes clamp a
flat pulley, or a disc brake is built into the motor.

The crucial design feature is that the brake is applied by a **spring** and
released by a **solenoid or magnetic coil**. Apply power to the motor and the
coil energises and lifts the brake off. Lose power for any reason — including a
supply failure — and the spring applies the brake automatically. That is what
makes it **fail-safe**, and it is why travelling cranes use solenoid braking on
every directional movement.

Three-phase motors can be supplied with an integral disc brake. Spring tension
sets the braking pressure and is adjustable to suit the application; the brake is
released by a magnetic coil fed with d.c. from a rectifier in the motor terminal
box. Because the rectifier is fed from the motor terminals, interrupting supply
to the motor applies the brake.

A variant uses a disc rotating in finely powdered iron, dry or as a paste in
liquid, with a coil around the container. Apply d.c. and the iron powder grips
the disc and locks it to the container. With two free discs the same device works
as a clutch.

**Mechanical braking is the only method that brings a machine to a complete halt
and holds it there.** Every other method on this list needs a mechanical holding
brake as well.

## Eddy-current disc braking

A sturdy disc on the machine shaft rotates between stationary coils. Energise the
coils and eddy currents induced in the disc load the machine and slow it. As it
slows, the induced voltages and currents fall, so the braking effort falls too.

An eddy-current disc cannot stop a machine completely and cannot hold it. It
simply increases the rate of slowing down.

## Dynamic braking (d.c. injection)

Use the motor as a generator and dissipate the machine's inertia as electrical
energy. On an a.c. motor this means disconnecting the running motor from the
supply and applying **direct current** to the stator windings. The still-turning
rotor has circulating currents generated in it, which load the machine and slow
it much faster than coasting.

Like eddy-current braking, it only hastens the slowing process and cannot bring
the motor to a complete stop or hold it, so a mechanical holding brake is still
needed.

A typical circuit interlocks the main contactor against the d.c. injection
contactor:

- Press start. K1 energises; K1.1, K1.2 and K1.3 connect the supply; K1.5
  isolates contactors K2 and K3.
- Press stop. K1 drops out, and the normally open section of the stop button
  completes the circuit to K2.
- K2 isolates the main contactor and applies direct current to the stator
  windings. Timer K3 is energised at the same instant.
- After the preset time K3 operates and switches the direct current off.

Note the field consequence: **the stop button must be held in for a moment** to
activate the braking, because the braking path runs through the stop button's
normally open section. The direct current is usually obtained from a rectified
a.c. supply.

Electric trains use dynamic braking, dissipating the generated energy in banks of
resistors. Another form uses the machine as an **induction generator**: capacitors
are connected across the motor terminals, and when stopping is required the
supply is removed and resistors are connected across the terminals. The still-
turning motor generates alternating current which is dissipated in the resistors.
It needs extra contactors, resistors and large capacitors, but it controls
overhauling loads very well.

## Regenerative braking

Regenerative braking uses the inertia of a moving load to generate electrical
energy and feed it **back into the supply**. It is used less often with a.c.
sources because it is more involved and needs extra equipment, and the energy
recovered has to be large enough to justify that expense — which means the
mechanical energy must be large too.

Electric trains and trams are the classic application: thousands of tonnes on the
move represent enormous inertia, and recovering it saves both electricity and
brake shoe wear. The system becomes less effective as the vehicle slows, and at
some point the generated energy is too small to feed back and the system must be
disconnected. Mechanical braking, and sometimes dynamic braking, finishes the job.
Because it cannot stop and hold a machine, its a.c. applications are largely
limited to controlling overhauling loads such as a crane lowering a heavy load.

## Plug braking

Plugging means reconnecting a still-running motor to rotate in the **reverse**
direction while it is still turning forwards. It is sudden and almost violent,
and how long it takes depends on the inertia of the machine.

The essential requirement is a means of removing all power at the instant the
shaft stops, or the motor will simply run up in reverse. That is done with a
friction-operated single-pole changeover switch on the motor shaft — a zero-speed
or plugging switch, which opens whenever the shaft is stationary — or by an
eddy-current disc rotating between magnets to operate contacts.

Circuit operation of a typical plug-braking circuit:

- Press start: K1 energises through the stop button and TOL contact. K1.1, K1.2
  and K1.3 connect the supply so the motor runs normally. K1.5 energises K2.
- Opening of K2.1 blocks K3 from picking up. K2.2 makes, and current reaches K4
  through shaft rotation switch S1, which is closed while the shaft turns and
  open at standstill.
- With K4.1 and K1.4 both made, the start button is bridged out, so releasing it
  leaves K1 held in.
- Press stop: K1 drops out and K1.5 opens, de-energising K2. K2.1 recloses, and
  because K4 is still held in through S1, K3 energises and connects the supply in
  the reverse phase sequence. When the shaft stops turning, S1 opens, and K4 and
  K3 both drop out.

Plugging is hard on hardware. Motors for this duty need stronger drive shafts to
withstand the forces created by the driven machine's inertia, and extra
mechanical force is exerted on the rotor bars. The windings may need special
design for repeated starting and stopping. The current drawn when plugging is
almost equal to normal starting current and flows for almost as long, so **one
plugging stop is generally reckoned equivalent to about three normal starts** in
terms of heating. The most common application is larger production lathes doing
repetitive work, where a mechanical holding brake may not be needed. Electronic
starters with current limiting or ramping can use plugging with some success, and
inverter circuits can sometimes reverse in action and dissipate the excess energy
as d.c. through dynamic braking — but they usually cannot feed it back to the
supply the way a true regenerative system does.

>! Braking circuits energise a motor in the reverse direction, or inject d.c.
>! into stator windings, at times when a technician may assume the machine is
>! stopped. A machine that is electrically braked is not a machine that is safe
>! to touch. Isolate, lock out, tag out and prove dead, and where the machine can
>! be turned by its load — a crane, a hoist, a fan in a duct with airflow — use
>! the mechanical holding brake and mechanical restraint as well.

## Speed control: only two variables

Torque in an induction motor comes from the interaction of two magnetic fields:
the rotating field set up by stator currents, and the field produced by currents
induced in the rotor by that rotating field. The rotor accelerates to roughly
96 per cent of the speed of the stator field — the 4 per cent difference at full
load is **slip**, and without slip the motor develops no torque at all.

Motor speed is governed by the speed of the stator field, and that synchronous
speed depends on exactly two things:

n = 120f ÷ p

where n is synchronous speed in rpm, f is line frequency in hertz and p is the
number of poles. The 120 comes from 60 seconds in a minute combined with the fact
that magnetic poles always occur in pairs.

Speed rises with frequency and falls as the number of poles increases. Those are
the only two variables. Everything else is a method of manipulating one of them.

### Pole changing

Changing the number of poles always gives a step change, never a smooth one. On
50 Hz a two-pole motor runs at 3000 rpm ignoring slip; switch to four poles and
it drops abruptly to 1500 rpm. The step can put transients on the supply lines,
so with larger motors a short time delay should be introduced during the change.

The usual method is a winding designed so its connections can be reconfigured,
invariably in a 1:2 ratio — two-pole to four-pole, four-pole to eight-pole. The
centre tap of the phase winding is brought out to a terminal. With the two ends
bridged and connected to one line and the centre tap to another, the winding
produces the lower number of conventional poles. Remove the bridge and reconnect
so current flows through all four pole groups in series, and every coil produces
the same polarity — the flux is forced to leave the stator between those like
poles, creating **consequent poles** between them and doubling the pole number.

To escape the 1:2 restriction, some stators carry two electrically separate
windings — say a two-pole and a six-pole — used one at a time, giving 3000 rpm or
1000 rpm. The unused winding must have its delta bridges open-circuited (unless
it is star connected) to stop induced currents circulating in it. With a suitable
switch the windings can be exchanged without stopping the machine.

**Pole amplitude modulation (PAM)** is a less common system giving closer ratios —
four-pole to six-pole, eight-pole to ten-pole — using unequal coil groupings
established at manufacture and special contactors to select the steps. PAM
windings are made under licence, in sizes from 0.5 kW up to 7 MW.

### Frequency changing

Change the frequency and speed changes smoothly. Two practical points come with
it.

At higher frequencies a standard motor runs above its base design speed. Air
circulation improves, so cooling improves, so higher current densities can be
used — offset by increased friction and windage losses at speed and increased
iron losses at higher frequency. Winding impedance also rises with frequency, so
maintaining the designed air-gap flux density needs a higher supply voltage. This
is why the drive holds the **volts-per-hertz ratio constant**:

V ÷ f = k

Any change in frequency must be matched by a change in voltage. At constant flux
density, torque is proportional to current, and since power depends on both torque
and speed, motor power output rises faster than speed does.

Frequency changing is applied to specific machines or groups of machines, not to
whole plants — raising the frequency of an entire site would speed up every motor
on it, which is rarely what anyone wants. A row of transport rollers in a steel
mill is a typical group application.

Two methods exist. Rotating machinery — the Schrage motor, where speed is altered
by adjusting brush positions for each phase, or the Kramer system, using four
rotating machines to control the speed of one wound-rotor motor — is expensive
and less efficient than electronic methods, but extremely reliable with few
maintenance problems, and is justified only for very large motors or integrated
groups in heavy industry. Kramer systems can be built in megawatt ranges.

The second method is electronic switching, which synthesises an alternating
waveform from d.c.

### Inverters, VSDs and VFDs

The terminology is genuinely muddled in industry, so hold on to the distinctions:

- An **inverter** is a frequency converter. It rectifies the fixed-frequency a.c.
  supply to d.c., conditions and smooths it, then switches it back to a.c. as
  pulses — pulse width modulation — to control motor speed and torque. It can also
  convert single-phase input to three-phase output.
- A **variable speed drive (VSD)** changes motor speed by changing the input
  voltage, and can be used with a.c. or d.c. motors. VSDs can often be retrofitted
  to existing motors and used alongside soft starters.
- A **variable frequency drive (VFD)** applies to a.c. drives only, and varies
  speed by varying frequency. A VSD for a d.c. motor varies speed by varying
  voltage instead. Modern electronic VSDs are usually also VFDs.
- **Variable-voltage/variable-frequency (VVVF)** drives, used in mining, refer to
  an a.c. drive that automatically adjusts voltage to suit the frequency the motor
  is running at.

The d.c. link can be produced two ways. An **uncontrolled rectifier** — a plain
bridge — gives a d.c. output governed by the a.c. input voltage, then feeds a
chopper circuit that switches the d.c. on and off faster than the supply
frequency, adjusting the average d.c. level supplied to the inverter, before
filtering. A **controlled rectifier** using SCRs with phase control responds
faster, is relatively cheap, and can regenerate power back into the mains, at the
cost of operating at a lagging power factor; it needs no chopper, so it tends to
be simpler and possibly more efficient.

Load type determines the drive selection. **Constant torque** loads have torque
independent of speed, so halving the speed halves the power: cranes, hoists,
conveyors, positive displacement pumps, reciprocating and rotary screw air
compressors, punch presses, wire drawing machines, paper machines, printing
presses. **Variable torque** loads have torque proportional to speed, with low
torque at high speed and high torque at low speed: pumps and fans. Reducing fan
or pump speed by 20 per cent can cut the power required by around half, which is
why VSDs on fans and pumps pay for themselves so quickly in HVAC plant.

### Wound-rotor speed control

In a wound-rotor motor, slip is proportional to rotor copper losses, and external
resistance in the rotor circuit varies those losses and therefore the speed. But
rotor current is proportional to developed torque, so rotor losses vary with load
and so does the speed: increase the load and speed falls; decrease it and speed
rises.

That makes rotor-resistance speed control satisfactory only for a steady load.
Speeds below about half full-load speed are impractical, losses at low speed
raise winding temperatures beyond the motor's rating, efficiency is poor, speed
regulation is poor, and the external resistors waste power as heat. Its most
common surviving use is the hoist and lowering mechanism of overhead cranes.

| Motor type | Speed drop, no load to full load | Method of speed control |
|---|---|---|
| a.c. squirrel cage, multi-speed | Up to 5% from two or more initial speeds | Pole changing: separate windings, or reconnecting one winding |
| a.c. squirrel cage, single speed | Up to 15% depending on design | Primary voltage control; stator frequency control at constant volts per hertz |
| a.c. slip-ring | Up to 50% depending on rotor resistance | Secondary resistors on the slip-rings; solid-state feedback of rotor power |
| a.c. synchronous | No speed drop; speed set by stator frequency | Adjustable frequency from a motor-generator set or a solid-state converter |

## On the job

- Only mechanical braking can stop and hold a machine. Everything else just
  slows it down.
- Spring-applied, coil-released brakes are fail-safe: lose power and the brake
  applies.
- On d.c. injection circuits the stop button must be held momentarily for
  braking to occur.
- One plugging stop heats a motor about as much as three normal starts.
- Synchronous speed n = 120f ÷ p. Only frequency and poles change speed.
- VSDs on fans and pumps save large amounts of energy because those are variable
  torque loads.
`,
          quiz: [
            {
              q: "A hoist must be brought to rest and then held stationary with a load suspended. Which braking method is essential?",
              options: [
                "Dynamic (d.c. injection) braking",
                "Eddy-current disc braking",
                "A spring-applied, solenoid-released mechanical brake",
                "Regenerative braking",
              ],
              answer: 2,
              explain: "Dynamic, eddy-current and regenerative braking all only increase the rate of slowing and become weaker as speed falls — none can hold a load. A spring-applied mechanical brake holds the load and is fail-safe, because loss of supply de-energises the solenoid and the spring applies the brake.",
            },
            {
              q: "A four-pole 50 Hz motor is fed by a VFD set to 30 Hz. What is its synchronous speed, and what else must the drive do?",
              options: [
                "900 rpm, and it must reduce the output voltage to keep volts per hertz constant",
                "900 rpm, and it must raise the output voltage to maintain torque",
                "1500 rpm, because pole number fixes the speed",
                "1800 rpm, and no voltage change is needed",
              ],
              answer: 0,
              explain: "n = 120f ÷ p = (120 × 30) ÷ 4 = 900 rpm. Winding impedance falls with frequency, so the drive must reduce voltage proportionally to keep the volts-per-hertz ratio and therefore the air-gap flux density constant. Holding full voltage at reduced frequency saturates the iron and overheats the motor.",
            },
            {
              q: "Why does a plug-braking circuit need a shaft-mounted zero-speed switch?",
              options: [
                "To limit the braking current",
                "To remove power at the instant the shaft stops, otherwise the motor would run up in reverse",
                "To reset the thermal overload after braking",
                "To prevent the mechanical brake being applied too early",
              ],
              answer: 1,
              explain: "Plugging works by applying reverse phase sequence to a still-turning motor. Once the shaft reaches zero speed the reverse supply would simply accelerate it backwards, so the shaft switch opens at standstill and drops the reversing contactors out.",
            },
            {
              q: "A stator winding is reconnected so that current flows through all four pole groups in series, giving every coil the same polarity. What is the result?",
              options: [
                "The motor runs at double speed",
                "Consequent poles are created between the like poles, doubling the pole number and halving the speed",
                "The motor will not start because the poles oppose",
                "The winding becomes a delta connection",
              ],
              answer: 1,
              explain: "With all coils producing the same polarity, the flux is forced to leave the stator between them, creating consequent poles. A four-pole winding becomes an eight-pole machine and synchronous speed halves. This 1:2 ratio is the standard pole-changing arrangement.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "estop-safety-plc",
          title: "Emergency stops, safety circuits and programmable control",
          minutes: 15,
          simple: "An emergency stop has to work even when everything else has failed, so it is wired straight through the circuit rather than asking a computer for permission. Programmable relays and PLCs replace stacks of relays and timers with a small box you program, but they never replace the hard-wired safety chain.",
          refs: REFS_SAFETY,
          content: `
Relay logic ran industry for decades. Then mass production and original equipment
manufacturers wanted speeds, reliability and low maintenance that mechanical
relays could not deliver, and programmable control took over. What did *not*
change is the requirement that safety functions remain hard-wired and independent
of the program. Understanding both halves — the programmable half and the
hard-wired half — is what this lesson is about.

## Programmable relays

The programmable relay arrived as a relay replacer: one small unit doing the work
of several relays, timers and counters, managing on-off sequencing of motors and
solenoids. It has since grown into a broad category covering everything from
dedicated single-function controllers to units with full PLC capability, some
marketed as mini or micro PLCs.

A programmable relay accepts inputs from sensors — photovoltaic, temperature,
flow, level — and from control devices such as start-stop pushbuttons and timers,
and makes decisions from logic programmed into it through onboard software and a
human-machine interface (HMI). Most carry an LCD and function keys so the program
can be entered, monitored and edited without a computer.

Where the plain solid-state controller falls down is precision. A thermostat that
closes contacts at a temperature and opens at another is a two-state device with
a differential — contacts that open at 22 °C may not close again until 18 °C, a
4 K differential. Industrial process control often needs better than that, which
is where a programmable relay or a PLC earns its place.

Typical building and commercial applications include door and gate control,
security and access control, automated window blinds and awnings, roller shutters,
weather-condition control, lighting control (daylight-dependent, timer-dependent,
energy management), entertainment and theatre control, compressor control,
conveyor control, pump control, air quality monitoring, and HVAC with temperature,
time-temperature and energy management functions.

Advantages over relay control:

- One unit replaces many separate timers, relays and counters, and can combine
  sensing, two-wire and start-stop control.
- Electronic switching means no moving contacts, so far less wear and far fewer
  replacements.
- Processes become easier to manage and troubleshoot.
- Installation labour, wiring, commissioning and testing time all fall.
- An integrated display shows alarms and input-output status, often removing the
  need to chase a fault with a multimeter or logic probe.

## Programmable logic controllers

A PLC costs relatively little compared with the wiring and hardware of an
equivalent relay logic system, and it can be reprogrammed when production
requirements change. Inside it, a microprocessor block contains the CPU, RAM,
program logic and internal storage. The CPU reads the stored program and examines
the status of the input devices as part of its **scan cycle**, uses the program
logic to decide when events should happen and in what order, and drives the
outputs accordingly. Events may be internal (timers, counters, internal relays) or
external (contactors, solenoids, lamps).

Everything needs a supply. Line voltage is transformed down to extra-low voltage —
24 V, 12 V or 5 V, usually 5 V for the CPU and memory. Smaller PLCs have a built-in
HMI for checking and programming; larger industrial units need a PC or laptop with
a keyboard and display to enter and modify the logic. Some HMI units detach and
support upload, download and backup by USB or Ethernet; older equipment may still
use a serial cable; wireless and Bluetooth are common now.

A note on vocabulary: IT people call keyboards and mice peripherals or human
interface devices (HIDs). In control work the programming and display hardware for
programmable relays and PLCs is called a human-machine interface (HMI).

| Feature | Programmable relay | Programmable logic controller |
|---|---|---|
| Programming | Built-in LCD or HMI, function keys | Needs a PC with proprietary software, or an extra-cost HMI |
| Best suited to | Stand-alone, low-complexity applications such as home and small building automation | Managing, monitoring and controlling complex industrial automation |
| Expandability | Usually fixed number of inputs and outputs | Input and output modules added as needed |
| Cost | Lower investment | Higher investment |

## Programming languages and ladder logic

A program is a step-by-step procedure that solves a problem, initiates actions or
manipulates stored data. Programming languages fall into two families:

- **Textual:** instruction list (IL), structured text (ST).
- **Graphical:** ladder diagrams (LD), function block diagram (FBD), sequential
  function chart (SFC).

**Ladder diagrams are the most widely used**, because relay ladder logic is
already the language of control drawings and it maps onto the gate logic of
solid-state electronics and onto Boolean algebra. Graphical user interfaces have
gone further still: some manufacturers now let you drag and drop function blocks,
connect the inputs that trigger them, nominate the outputs, and let the software
compile the ladder logic for download. Each brand has its own proprietary
software, and training is worth doing.

### Programming rules

- The scan runs left to right, rung by rung, top to bottom, until the end of the
  program, then restarts at the top and cycles again. Electricity can flow in any
  direction in a real circuit; a program scan cannot.
- Every line must start at the left bus and end in a coil, timer or counter.
- Contacts must not be placed to the right of a coil, timer or counter.
- A coil output may be used only once in the program, but contacts belonging to
  that coil may be used as many times as needed.
- Every program component is individually addressed.
- Contacts are programmed as normally open, including for input devices that are
  physically normally closed.
- The program should finish with an END statement.

Scan time is the time taken to complete one scan cycle.

### The fail-safe stop button, and why it looks wrong

Here is the point that confuses every apprentice moving from relay logic to PLC
logic. In relay logic, all stop pushbuttons and emergency stops are physically
normally closed, opening when operated to de-energise the circuit. That is
fail-safe: a broken wire opens the circuit and the machine stops.

In a PLC, the physical device is still a normally closed contact, but the
**instruction in the program** is written as examine-if-closed (XIC), which looks
on the ladder like a normally open contact. During the scan, the input is true
while the button is un-operated and current is flowing into the input. Press the
stop button and the input goes false, and the rung breaks. Break the wire to the
button and the input also goes false, and the rung breaks. Both failure modes stop
the machine.

Writing the stop as examine-if-open (XIO) is explicitly not considered good
practice, because a broken wire would then look exactly like a healthy
un-operated button and the machine would keep running.

The same trap exists when connecting normally closed devices generally: a PLC may
interpret the absence of an input from a pressed NC switch as the switch not being
operated, when in fact the wire to it is damaged. Rather than opening the circuit,
the PLC does nothing.

### Inputs, outputs and IO listings

Any control device can be an input; most can also be outputs, though obviously a
proximity switch, limit switch or light sensor cannot. Connections are identified
by straight numbering (1, 2, 3) or by letter-and-number addressing (I1, I2 for
inputs, Q1 or O1, O2 for outputs). An **input-output listing** is standard practice
in developing PLC control circuits: it tabulates each field device against its
address, so wiring, terminal numbers and drawings all agree. A typical small listing
might be I1 start pushbutton, I2 stop pushbutton, I3 emergency stop, I4 limit
switch, I5 thermal overload; Q1 contactor coil, Q2 indicator lamp.

Inputs may be **digital** — a switch with binary ON or OFF states, ON usually being
the presence of a voltage — or **analogue**, such as a thermostat or pressure
transducer giving a continuously variable signal. On receiving inputs, the processor
writes them into a table for processing.

Mechanical limit switches tell the PLC a machine has reached a position. Pressure
switches with contacts give an on-off signal, or with a resistive element can give
a continuously variable pressure reading. Thermistors, positive or negative
temperature coefficient, work as temperature indicators provided they are
calibrated.

Output modules drive their loads through relay, transistor, SCR or TRIAC circuits.
Input and output modules are almost always **optically isolated** — photocouplers
or opto-isolators — which block high voltages, surges and transients and keep the
sensitive microprocessor separate from the load side. Photo-transistor couplers
serve both a.c. and d.c. input and output modules; photo-SCR and photo-TRIAC types
are generally used for outputs, and photo-TRIACs for a.c. only.

### Checking and troubleshooting

PLC software includes a checker that verifies correct set-up and a simulator that
lets you operate the switches and watch the logic, including timer set values and
time remaining. The most common faults in a PLC installation are not the PLC at
all — they are the field devices: the switches used as inputs and the relays or
contactors used as outputs. So:

1. Operate the switches manually and see whether the PLC responds correctly.
2. If the field devices work but the PLC is turning on the wrong outputs or
   ignoring an input, download the program to a laptop and run the error checking.
3. If no errors are found and the simulation runs correctly, re-upload the program
   to the PLC. A program altered by someone, or corrupted by a failing battery or
   memory chip, is fixed by re-uploading.

**Advantages:** the software handles the logic, so features are almost unlimited —
its own clock allows multiple timers for multiple events; almost any sensor can be
accepted through a suitable transducer; fewer moving parts make it more reliable
than mechanical relays; fewer components make fault finding easier.

**Disadvantages:** a computer with proprietary software is needed to work on the
ladder program, a battery is needed to retain operation, and the units are costly.

## PLC protection

An industrial PLC needs mechanical protection as well as electrical. Transducer
cables radiate out from the controller and pick up induced spurious voltages —
**electrical noise** — which the microprocessor can misread as an input. The result
is erratic operation and incorrect data, and it is notoriously hard to trace.

Industrial sites switch machines on and off constantly, producing voltage spikes
and surges on the supply, and because a PLC runs at extra-low voltage through a
transformer, those surges pass through to the processor. Noise suppression is
essential: shielded wiring on special runs to the transducers, and suppression at
the transducer itself. The opto-isolators in the IO modules block high voltages,
surges and transients from reaching the processor.

## Equipment and personnel safety

>! A PLC must never be the only control for the safety-related parts of a machine.
>! Safety switches, safeguarding and emergency stops are designed into the
>! equipment and the circuit, hard-wired, and they act whether or not the program
>! is running correctly. An emergency stop that relies on a PLC scan to take
>! effect is not an emergency stop.

Where machinery is PLC-controlled, extra equipment is installed so that erratic
PLC operation cannot destroy the machine. A second limit switch may be fitted as a
back-up to the one the PLC monitors. On a heating bath a second temperature sensor
may be fitted to override the PLC regardless of what the main sensor reports.

**Safety relays** monitor and control door safety switches, guards and emergency
stop switches. They provide additional equipment safety by detecting fault
conditions including wire breaks, faulty contactors, faulty safety actuators and
timing faults. Door safety switches, the emergency stop loop and other safeguarding
measures are connected in series with one or more safety relay circuits, and those
relays isolate power safely and appropriately — including power to the PLC output
module actuators.

A typical arrangement makes the design intent obvious. The emergency stop
pushbutton has **two sets of contacts**. The normally open set is wired to a PLC
input, purely for monitoring and indication. The normally closed set is hard-wired
into the safety relay and master control relay chain. If the PLC hardware fails or
the program does not respond to the input, the hard-wired path still removes all
power from the output module and the actuators. That is hard-wired fail-safe
redundancy, and it is what "hard-wired e-stop" actually means.

### Safeguarding

- Machine guards — fixed, movable and powered
- Light curtains for presence detection of hands, arms, head and upper body
- Safety mats — pressure-sensitive mats ensuring operators are positioned safely
  and cannot lean into a machine process
- Two-hand control — two separate hand-operated switches in series with the stop
  control circuit, so both hands must be occupied and neither can be in the
  machine. Standard on guillotines to prevent crush and amputation injuries, and
  usually combined with light curtains, guards and mats.

### Stop categories

| Category | Description |
|---|---|
| Category 0 | Uncontrolled stop — immediate removal of power to the machine actuators, equivalent to pulling the plug |
| Category 1 | Controlled stop with power available to the actuators to achieve the stop, then removal of power |
| Category 2 | Controlled stop with power still available to the actuators afterwards |

An emergency stop is in most situations a Category 0 stop.

### Emergency stop requirements

>! An emergency stop must override all other input signals. Operating it while the
>! machine is mid-cycle must bring the equipment to a quick, safe stop and must
>! also prevent start-up. Resetting the e-stop must never by itself restart the
>! machine — the operator must go back through the normal start sequence. Every
>! e-stop must be hard-wired so that PLC output power is removed through a safety
>! relay circuit or a master control relay circuit; PLC input contacts may serve
>! only for monitoring, indication and control-circuit function. Never rewire,
>! bypass or program around an emergency stop.

Unexpected starting or stopping caused by spurious signals getting into system
wiring can injure operators and maintenance staff, which is precisely why the
e-stop must be independent of the electronics.

Finally, AS/NZS 3000 makes it mandatory for isolating switches to be provided for
equipment that is not directly under the control of a worker, and those isolating
switches must be able to stop the PLC bypassing them. **Isolation has to take
the form of a physical barrier — switching electronic equipment off is not
enough.** Programs can be changed, memory can corrupt and outputs can fail on;
a physically open isolator cannot.

## On the job

- Ladder logic is the dominant PLC language because it is already the language of
  control drawings.
- Program stop buttons and e-stops as examine-if-closed so a broken wire stops the
  machine.
- The most common "PLC fault" is a field device. Operate the switches by hand
  first.
- Safety relays, e-stop loops and guard switches are hard-wired in series and
  independent of the program.
- Isolation must be a physical barrier. A PLC output turned off is not isolation.
`,
          quiz: [
            {
              q: "An emergency stop pushbutton on a PLC-controlled machine has two contact sets. How should they be used?",
              options: [
                "Both wired to PLC inputs so the program can respond twice",
                "The normally closed set hard-wired through the safety relay chain, and the normally open set to a PLC input for monitoring only",
                "Both wired into the safety relay for redundancy, with nothing going to the PLC",
                "The normally open set hard-wired and the normally closed set to a PLC input",
              ],
              answer: 1,
              explain: "The stop function must not depend on the PLC. The hard-wired normally closed path through the safety relay and master control relay removes power from the outputs and actuators regardless of the program, while the normally open set gives the PLC monitoring and indication only.",
            },
            {
              q: "Why is a stop pushbutton programmed as an examine-if-closed instruction even though the physical device is normally closed?",
              options: [
                "Because PLCs cannot accept normally closed devices",
                "So the rung goes false both when the button is pressed and when its wire breaks, stopping the machine either way",
                "To reduce the scan time",
                "Because examine-if-open instructions are not available in ladder logic",
              ],
              answer: 1,
              explain: "With examine-if-closed, the instruction is true only while current is actually flowing into the input. Pressing the button and losing the wire both make it false, which is fail-safe. Examine-if-open on a stop button is expressly bad practice because a broken wire would look identical to a healthy un-operated button.",
            },
            {
              q: "A PLC-controlled conveyor is behaving erratically, occasionally starting when no input has changed. Which cause should you investigate first?",
              options: [
                "A corrupt ladder program",
                "Electrical noise inducing spurious voltages in the transducer cabling",
                "A failed opto-isolator on the CPU board",
                "Incorrect scan time setting",
              ],
              answer: 1,
              explain: "Transducer cables radiating out from the controller are prone to induced spurious voltages from all the switching on an industrial site. The microprocessor can misread that noise as an input. The fix is shielded wiring and suppression at the transducer. Scan time is not user-set in that way, and a corrupt program usually fails consistently rather than intermittently.",
            },
            {
              q: "AS/NZS 3000 requires isolating switches for equipment not directly under a worker's control, and requires that the PLC cannot bypass them. What does this mean in practice?",
              options: [
                "The PLC program must include an isolation routine",
                "Isolation must be a physical barrier, not merely switching off electronic equipment",
                "The isolator must be lockable but may be operated by a PLC output",
                "A software interlock is acceptable if it is password protected",
              ],
              answer: 1,
              explain: "Programs can be altered, memory can corrupt and outputs can fail energised. Only a physically open isolator guarantees the circuit is dead, so the standard requires a physical barrier that no program can defeat.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "develop-and-faultfind",
          title: "Developing a control circuit from a specification, and fault finding it",
          minutes: 15,
          simple: "Designing a control circuit starts with a written list of what the machine must do. You turn that list into a list of parts, work out which part depends on which, and draw it as rungs. Fault finding is the same job backwards: read the drawing, then use your senses and a meter to find where the chain is broken.",
          refs: REFS_FAULT,
          content: `
Two skills close out this module and they are two sides of one coin. Designing a
control circuit means turning a written description into rungs. Fault finding
means reading rungs and working out which condition is not being met. Do either
well and the other becomes easier.

## Developing a schematic from a description

A specification is nothing more than a list of the conditions the equipment must
satisfy to work correctly and safely. Turning it into a schematic takes three
steps:

1. **Identify and list the circuit components.**
2. **Establish the circuit relationships** — what depends on what, what must
   happen before what, and what must never happen at the same time.
3. **Lay out the components on the drawing, observing proper drawing
   conventions.**

### A worked development

Take a written specification for a coolroom condensing unit:

- The unit runs on demand from a room thermostat.
- The compressor must not run unless the condenser fan contactor has pulled in.
- A high-pressure switch and a low-pressure switch must stop the compressor.
- After stopping, the compressor must not restart for three minutes.
- A green lamp shows the compressor is running; a red lamp shows a fault trip.
- An emergency stop, hard-wired, stops everything.

**Step 1 — list the components.** Supply and control transformer; control fuse
F1; emergency stop S1 (NC, latching mushroom head); thermostat S2 (two-wire
control device); high-pressure switch S3 (NC); low-pressure switch S4 (NC);
condenser fan contactor K1 with auxiliary NO contact K1.4; compressor contactor
K2 with thermal overload TOL; anti-recycle on-delay timer K3; green lamp H1; red
lamp H2.

**Step 2 — establish relationships.** The e-stop kills the whole control supply,
so it goes first, immediately after the protection. The thermostat is the demand
signal, so it starts the fan contactor. The compressor coil needs, in series: the
demand, the fan auxiliary contact (proving airflow), both pressure switches, the
timer contact (proving the rest period is over) and the overload contact. The
green lamp is driven by an auxiliary contact of K2, not by the coil circuit, so
it proves the contactor actually closed. The red lamp is driven by the normally
open auxiliary of the overload.

**Step 3 — lay it out.** One idea per rung, coils at the right-hand end, supply
rails at each side, rungs numbered, wires numbered before and after each device,
and a contact list beside each coil:

- Rung 1: F1 — S1 — S2 (thermostat) — K1 coil
- Rung 2: S2 — K1.4 — S3 — S4 — K3 timed contact — TOL — K2 coil
- Rung 3: K2 auxiliary NO — H1 (green, running)
- Rung 4: TOL auxiliary NO — H2 (red, tripped)

Check it against the specification line by line. Every stated condition must
appear as a device in series with the coil it controls, or as a rung of its own.
Anything in the specification that does not appear somewhere on the drawing is a
requirement you have not met.

Two design habits worth building: put safety and protection devices in series so
that any one of them opening stops the plant, and never place two coils in
series.

## Fault finding: causes fall into three groups

- **Equipment design faults.** Production tasks outside the equipment's normal
  specification, imported plant not suited to local conditions, or previous
  modifications. These show up as unexpected production stops on certain
  functions.
- **Wiring and equipment faults.** Electrical or mechanical damage from the work
  environment, wear and tear, sensors and detectors out of adjustment, and
  maintenance that has been deferred because no window of opportunity was
  available.
- **Operator error.** Lack of training or support, set-up mistakes, fatigue,
  stress, an emergency stop left latched in, blocked or misaligned sensors.

Fault finding well requires familiarity with how the equipment operates normally,
observation of what it was doing when the fault appeared, and careful study of
the schematics and wiring diagrams. Plant maintenance staff build that knowledge
over time; the chapter's honest estimate is that after three to six months on a
plant with experienced mentors, a technician can handle roughly 80 per cent of
the fault rectification, repair and maintenance work required.

## Symptom, fault and cause are three different things

A conveyor stops suddenly and will not restart. That is a **symptom**. The
**fault** might be a tripped overload. The **cause** might be a mechanical jam,
or a dropped phase. And there is a cause behind the cause: what jammed it, or why
did the phase drop?

Stopping at the fault and not chasing the cause is the classic way to be called
back to the same machine next week. Reset the overload and the conveyor runs —
until the jam recurs and the motor stalls again, this time perhaps damaging the
windings.

### Talk to the operator

If you do not know the machine, or the fault report is thin, listen to the
operator's description and then ask questions:

- What happened?
- What was the machine doing when the fault occurred?
- How does it work normally?

Where the machine still runs, watch it closely during operation or when the fault
recurs.

### Use your senses before you use a meter

- **Look** — smoke, sparks, blown fuses, tripped overloads, broken mechanical
  parts or brackets, misaligned sensors, jammed moving parts, broken cables,
  exposed, overheated or burnt wiring, coils or components.
- **Listen** — clunking, grinding or scraping metal, noisy bearings, a labouring
  motor, humming, buzzing, or a chattering relay or contactor.
- **Smell** — hot plastic or rubber suggests overheating cables; a varnish smell
  suggests burnt or overheated coils, contactors, transformer windings or motor
  windings.
- **Touch** — check motors for excessive vibration or overheating, carefully,
  avoiding burns and electric shock.

These steps rule out most simple faults and tell you whether power is present at
all. If you find something faulty, damaged or out of adjustment, follow the
equipment shutdown, isolation, lock-out and tag-out procedure before working on
it.

After any adjustment, replacement or repair, check the rest of the circuit.
There may be other faults, and damaged components — particularly circuit cards —
can be damaged further or fail outright when the circuit is re-energised.

If the fault is still not found, follow the site's **fault escalation procedure**,
which should state who is notified, when, and what time frames apply.

## Two systematic test approaches

**Systemic testing.** One meter probe is attached to the circuit neutral (or the
return rail). The other probe is moved along the circuit path, checking each
component or device in series, until the point where voltage disappears. That
point is the open device. Live testing for voltage, or dead testing for
continuity, both work this way.

**Circuit division (half-splitting).** Test at the mid-point of the circuit,
which tells you which half contains the fault; then split that half, and so on.
This is far faster on a long series string and is the standard approach on
**emergency stop loops**, where a dozen devices in series all look identical and
you need to know which one is open and where it is.

Dead testing with a multimeter on the resistance range is often better than live
testing. With the circuit de-energised you can check from the contactor coil back
to the active supply rail, and pressing the start pushbutton establishes
continuity through the circuit path without any supply present at all. You prove
the circuit logic works without ever energising anything.

## Test equipment

| Instrument | Use |
|---|---|
| Voltage tester | Usually a high-impedance multimeter on a voltage range. Fused, insulated low-impedance test lamps are used in some situations |
| Ohmmeter | Continuity and resistance: open circuits, zero resistance across closed switch contacts, conductors, terminal connections, and relay coil and element resistance |
| Clamp meter | Non-contact current measurement, checking three-phase load balance and leakage. Modern clamp meters add voltage and resistance functions with probes |
| Insulation resistance tester | Insulation integrity of conductors, and testing between motor phase windings. Some include continuity and resistance functions |

Dedicated instruments are preferable to a general-purpose multimeter, because
selecting the wrong range on a multimeter can damage the equipment under test.
Testers with inherent capacitance in their design must not be used where they
could cause a false start of an equipment sequence.

>! Live testing by inexperienced workers is dangerous and can cause electric
>! shock or equipment damage. Before any testing, work through these questions:
>! Are you trained, qualified and authorised to carry out this testing? Does the
>! workplace have policies and procedures for work on live equipment, and do you
>! know them? Do you have the right PPE, tools and test instruments? Have you
>! checked and tested them for damage and correct operation? Are you familiar
>! with this equipment and able to follow the manufacturer's recommendations? Do
>! you have the wiring and schematic drawings and the manuals? Do you need a
>! rescue kit and a safety observer? Have you completed a risk assessment? If you
>! are an outside contractor, all of these questions are yours to ask and answer.

## Testing motor circuits

Sometimes a motor must be checked while running — the casing is hot to touch,
there is a grinding or high-pitched squeal, or it is tripping overloads. If it is
running hot or tripping, the cause may be electrical or mechanical; if it is
making strange noises, the fault is more likely to be mechanical.

| Test point | Location | Instrument and measurement |
|---|---|---|
| A | Contactor, incoming supply (line) terminals | Terminal voltage on the multimeter |
| B | Contactor, outgoing (load) terminals | Terminal voltage on the multimeter; line current on the clamp meter |
| C | Thermal overload outgoing terminals | Terminal voltage on the multimeter; load current on the clamp meter |
| D | The isolator mounted next to the motor | Terminal voltage on the multimeter; load current on the clamp meter |
| E | Motor terminal box or junction box | Phase voltages on the multimeter; phase currents on the clamp meter |

What each point tells you:

- **A** — is the supply present and equal on each phase? Are all three phases
  there?
- **B** — does the load side match the supply side? A phase that is low or absent
  means contacts sticking, stuck or not making properly.
- **C** — do the voltages match those on the contactor load side? If not, suspect
  the overload unit. Clamp each phase: are the currents similar? Unequal currents
  mean an unbalanced load.
- **D** — compare line and load sides of the isolator contacts; check the phase
  currents again.
- **E** — phase voltages and phase currents at the motor itself.

Whether to test at the isolator or the terminal box is a decision about safety
and access. The isolator is often easier to reach, but if there appears to be a
problem, the checks will eventually need to confirm whether it is at the motor.

Voltage checks to make:

- Single phase, three tests: active-neutral, active-earth, neutral-earth.
- Three phase, ten tests: three phase-to-phase, three phase-to-neutral, three
  phase-to-earth, and neutral-earth.

## A worked fault-finding sequence

A coolroom compressor will not start; the fan is running.

1. Ask and observe. The operator says it stopped during a hot afternoon and the
   red lamp is lit. Red lamp means overload tripped — that narrows the search
   before a probe comes out.
2. Look, listen, smell. The condenser is caked with dust and the fan is running.
   Nothing smells burnt.
3. Reset the overload, but do not start yet. Chase the cause. A blocked condenser
   raises head pressure, which raises motor current, which trips the overload.
   The overload did exactly its job.
4. Dead test to confirm the control string. Meter on resistance from the
   compressor coil back to the active rail: with the thermostat calling, the fan
   auxiliary made, both pressure switches closed and the timer timed out, you
   should read the coil resistance. An open reading means one of those conditions
   is not met — half-split the string to find which.
5. Clean the condenser, restore, then start and clamp each phase at test point C.
   Balanced currents at or below nameplate full-load current say the fault is
   cleared.
6. Record what you found, what you did and any settings you changed.

## On the job

- Design from the specification, then check the drawing back against the
  specification line by line.
- Symptom, fault and cause are three different things. Find all three.
- Look, listen, smell and touch before you reach for a meter.
- Half-split long series strings, especially e-stop loops.
- Dead testing proves circuit logic without energising anything — use it first
  where you can.
- Reset an overload only after you know why it tripped.
`,
          quiz: [
            {
              q: "An emergency stop loop with twelve devices in series is open somewhere. Which test approach finds the open device fastest?",
              options: [
                "Replace each device in turn until the loop closes",
                "Circuit division — test at the mid-point, then split the faulty half again",
                "Systemic testing from one end, checking every device in order",
                "Megger the loop to find the break",
              ],
              answer: 1,
              explain: "Half-splitting narrows twelve devices to one in about four tests, whereas working from one end can take up to twelve. This is exactly why circuit division is the standard approach on emergency stop loops. An insulation tester is the wrong instrument for a continuity problem.",
            },
            {
              q: "A motor trips its thermal overload. You reset it and the motor runs normally. What should you do next?",
              options: [
                "Nothing — the fault has cleared",
                "Increase the overload setting slightly to prevent nuisance trips",
                "Find why the current rose: check for a mechanical jam, a dropped phase, or a condition raising the load",
                "Replace the overload as a precaution",
              ],
              answer: 2,
              explain: "The trip is the fault; the reason the current rose is the cause. A tripped overload almost always means excessive current, and until you know why, the machine will trip again. Raising the setting removes the protection rather than the problem.",
            },
            {
              q: "You measure equal voltage on all three phases at the contactor line side, but one phase is missing on the load side while the contactor is energised. What does this indicate?",
              options: [
                "A faulty thermal overload",
                "A contact that is not making — sticking, stuck open or badly eroded",
                "A dropped phase in the supply",
                "An unbalanced motor winding",
              ],
              answer: 1,
              explain: "The supply is proven good at test point A, so the loss occurs across the contactor itself. The overload is downstream at test point C and cannot cause it, and a supply phase loss would show at point A. This is why comparing line and load side voltages at each device is such a productive test.",
            },
            {
              q: "In developing a schematic from a written specification, what are the three steps in order?",
              options: [
                "Draw the power circuit, draw the control circuit, add labels",
                "List the components, establish circuit relationships, lay out the components observing drawing conventions",
                "Select the contactor, size the cable, choose the overload",
                "Write the IO listing, program the PLC, test the simulation",
              ],
              answer: 1,
              explain: "The specification is a list of conditions. You turn it into a parts list, work out what depends on what and what must never occur together, then lay it out following the drawing conventions. The other options describe tasks that come before or after this process.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
