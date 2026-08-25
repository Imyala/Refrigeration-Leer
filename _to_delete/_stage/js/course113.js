/* =========================================================================
   Course content, module 113 — Electrical wiring.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 13 — Electrical wiring.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 13, Electrical wiring",
    "AS/NZS 3000 (the Wiring Rules) — electrical installations: earthing, protection, terminations, verification",
    "AS/NZS 3008.1.1 — selection of cables: current-carrying capacity, derating and voltage drop",
    "AS/NZS 3017 — verification guidelines (continuity, insulation resistance, polarity, RCD tests); AS/NZS 4836 — safe working on low-voltage installations; AS/NZS 3760 — in-service testing and tagging",
  ];

  const MODULES = [
    {
      id: "v1-electrical-wiring",
      stream: "v1",
      title: "R1.13 · Electrical wiring",
      blurb: "The wiring side of refrigeration work: the Wiring Rules, diagrams, cables and sizing, terminations, earthing and the MEN system, protection, isolation, control circuits and testing.",
      lessons: [

        /* ============================================================== */
        {
          id: "wiring-rules-diagrams-and-licensing",
          title: "The Wiring Rules, the diagrams and where your authority ends",
          minutes: 11,
          simple: "Every electrical job in Australia follows one rule book, and every machine comes with two kinds of picture: one that shows how the circuit thinks, and one that shows where each wire actually goes. Like a subway map versus a street map of the same city — same stations, drawn for two different jobs. You also need the right licence before you touch fixed wiring.",
          refs: REFS,
          content: `
An air-conditioner that will not start is an electrical problem far more often
than a refrigeration problem. That means a refrigeration technician spends a
large share of the working week with a multimeter in one hand and a drawing in
the other. Before any of that, though, two things have to be straight in your
head: which rule book governs the work, and which parts of the work you are
legally allowed to do.

## The Wiring Rules

Electrical installation work in Australia and New Zealand is governed by
**AS/NZS 3000, Electrical installations**, universally called *the Wiring
Rules*. It is called up by law in every state and territory, so it is not
advice — it is the legal minimum. The chapter this module is built on was
written against the 2007 edition; the current edition is AS/NZS 3000:2018 with
its amendments. The numbering of clauses changes between editions, so always
work from the current one, and always read the notes printed under a table
before you use a value out of it.

Several companion standards do the detailed arithmetic that AS/NZS 3000 calls
for:

| Standard | What you use it for |
|---|---|
| AS/NZS 3000 | The rules themselves — earthing, protection, isolation, verification |
| AS/NZS 3008.1.1 | Cable current-carrying capacity, derating factors, voltage-drop figures |
| AS/NZS 3017 | How to carry out and interpret the verification tests |
| AS/NZS 4836 | Safe working on or near low-voltage installations |
| AS/NZS 3760 | In-service inspection and testing of cords and portable equipment (test and tag) |

Australian low-voltage supply is nominally **230 V single phase and 400 V
between phases** (AS 60038). You will still see equipment and older texts
marked 240/415 V; the tolerance band covers both, so treat them as the same
system. "Low voltage" in the Standard means above extra-low voltage and up to
1000 V AC — so ordinary 230 V mains *is* low voltage, not something mild.
**Extra-low voltage (ELV)** is 50 V AC or less, and that is the region where
24 V control circuits live.

>! In every Australian state, installing, altering, repairing or connecting
>! fixed electrical wiring is licensed work. A refrigeration mechanic normally
>! holds a **restricted electrical licence** — commonly a disconnect/reconnect
>! endorsement — which allows disconnection and reconnection of the equipment
>! they service, and nothing more. An ARCtick refrigerant handling licence
>! says nothing at all about electrical work; they are separate authorisations.
>! Doing electrical work outside your licence is an offence, voids insurance,
>! and is how people die.

## Three kinds of drawing

Manufacturers supply more than one diagram of the same machine because the two
questions you ask — *how is this supposed to work?* and *which terminal does
this wire land on?* — need different pictures.

### Block diagram

The coarsest view: boxes for supply, isolator, starter, compressor, controller,
with lines showing what feeds what. No terminals, no contacts. Useful for
orienting yourself on a plant you have never seen, and for explaining a fault to
a customer.

### Schematic (ladder) diagram

The thinking diagram. Two vertical rails carry the supply — active on the left,
neutral (or the second leg of a control transformer) on the right. Between them
run horizontal **rungs**. Each rung reads left to right as a sentence: all the
*conditions* (switches, contacts, thermostats, safety cut-outs) in series, then
one *load* (a contactor coil, solenoid, lamp) at the right-hand end. Components
are drawn in logical order, not physical order, and a device is split up — a
relay coil appears on one rung while its contacts appear on three others, tied
together only by their label.

!FIG[ladder-rung]

Two habits make ladder diagrams easy. First, every rung has exactly one load;
if you think you see two loads in series, look again, because one of them is
almost certainly a contact. Second, a device is always drawn in its
**de-energised, at-rest** state — a normally-closed high-pressure switch is
shown closed even though the plant is running.

### Wiring (connection) diagram

The building diagram. Components are drawn roughly where they physically sit in
the enclosure, with their real terminal markings, and every conductor is shown
with its colour or wire number. This is what you wire from and what you trace
with when a wire has been pulled off. A **terminal (interconnection) diagram**
takes it one step further and simply lists what lands on each terminal — common
on packaged plant and on switchboards built to order.

| | Schematic / ladder | Wiring / connection |
|---|---|---|
| Shows | Circuit logic and sequence | Physical terminals and wire runs |
| Layout | Logical, top to bottom by function | Follows the real layout of the panel |
| Devices | Split into coil and contacts | Drawn whole, as one component |
| Best for | Understanding and fault-finding | Wiring, re-terminating, tracing |

## Reading a circuit on the job

Work the ladder diagram to decide *what should be closed right now*, then use
the wiring diagram to find where to put the probes. A voltmeter across a
**closed** switch reads about zero volts, because there is no resistance to drop
voltage across. A voltmeter across an **open** switch in a live rung reads
almost the full supply, because the whole rung voltage appears across the break.
That single fact turns a ladder diagram into a fault-finding map: walk the rung
from left to right, and the first device showing full voltage across it is the
one that has opened.

## What to remember

- AS/NZS 3000 is law, not guidance; use the current edition and read the table
  notes.
- Nominal supply is 230 V single phase, 400 V three phase; ELV is 50 V or less.
- Ladder diagrams show logic — one load per rung, devices shown de-energised.
- Wiring diagrams show terminals and wire numbers; you build and trace from
  these.
- Your licence, not your confidence, decides what electrical work you may do.
`,
          quiz: [
            {
              q: "On a ladder (schematic) diagram, why do a contactor coil and its auxiliary contacts appear on different rungs?",
              options: [
                "Because they are separate components ordered separately",
                "Because the diagram is drawn by circuit function rather than physical layout, so each part of a device is drawn where it acts",
                "Because auxiliary contacts operate on a different voltage",
                "Because the coil is power wiring and the contacts are always ELV",
              ],
              answer: 1,
              explain: "A ladder diagram is organised by logic, not geography, so a multi-part device is split and its pieces are tied together only by the label. The wiring diagram is the one that draws the contactor as a single physical object with its real terminal numbers.",
            },
            {
              q: "You measure 230 V across the terminals of a pressure switch in a live control rung. What does that tell you?",
              options: [
                "The switch contacts are closed and passing current",
                "The switch contacts are open, so the whole rung voltage is dropped across the break",
                "The coil at the end of the rung has failed open",
                "The neutral is disconnected upstream",
              ],
              answer: 1,
              explain: "Full supply voltage across a device in a live rung means the circuit is broken at that device. A closed, healthy switch drops close to 0 V because it has almost no resistance. A failed coil would instead show voltage across the coil, not across the switch.",
            },
            {
              q: "A refrigeration mechanic holds an ARCtick licence and a restricted electrical (disconnect/reconnect) licence. Which job is within that authority?",
              options: [
                "Running a new sub-mains cable to a plant room switchboard",
                "Adding a new final subcircuit and circuit breaker at the switchboard",
                "Disconnecting and reconnecting the condensing unit they are servicing at its existing isolator",
                "Rewiring a switchboard after a fire",
              ],
              answer: 2,
              explain: "A disconnect/reconnect endorsement covers exactly that — disconnecting and reconnecting the equipment being serviced. New circuits, sub-mains and switchboard work are installing work for a licensed electrician. ARCtick governs refrigerant handling only and adds no electrical authority.",
            },
            {
              q: "Which standard would you open to find the derating factor for a cable that is grouped with five others in a hot roof space?",
              options: ["AS/NZS 3760", "AS/NZS 3008.1.1", "AS/NZS 4836", "AS 60038"],
              answer: 1,
              explain: "AS/NZS 3008.1.1 carries the current-carrying capacity tables, grouping and ambient derating factors and voltage-drop data. AS/NZS 3760 is test and tag, AS/NZS 4836 is safe working practice, and AS 60038 defines the standard supply voltages.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "conductors-cables-and-insulation",
          title: "Conductors, cable types and insulation",
          minutes: 12,
          simple: "A cable is just copper wrapped in plastic, but the wrapping is what decides where you are allowed to use it. Some cables have one coat, some have a coat and an overcoat, some wear chain mail. Picking the wrong one is like wearing a t-shirt to weld in — fine until something touches it.",
          refs: REFS,
          content: `
Copper carries the current; everything wrapped around it decides where that
cable may legally and safely be run. Get the construction right and the
installation survives twenty years in a plant room. Get it wrong and you have a
cable that chafes through on a sharp edge, absorbs water in a coolroom wall, or
melts against a discharge line.

## Two definitions worth being precise about

- **Conductor** — the metal path itself. A **bare conductor** has no covering
  or insulation at all; earth stakes and some earthing conductors are bare.
- **Cable** — one insulated conductor, solid or stranded, or several such
  conductors laid up together, with or without bare conductors, fillers,
  reinforcement or protective coverings.

Note what that means: a single insulated wire is already a cable. The everyday
trade habit of calling a single core "wire" and a multicore "cable" is loose
talk, and the Rules do not use it.

## TPI — thermoplastic-insulated building wire

The simplest product: copper with one layer of coloured PVC over it, commonly
called **building wire**. Standard metric building wire is rated **0.6/1 kV**
(600 V conductor-to-earth, 1000 V between conductors), which is far above the
230/400 V it normally works at — the rating is about withstanding surges and
faults, not everyday voltage.

Building wire is classified by its insulation and the maximum temperature that
insulation will tolerate continuously. **V75** is PVC (vinyl) rated to 75 °C at
the conductor; V90 grades exist for hotter work. That temperature is the whole
point of the current-rating tables in the next lesson: a cable's rating is
simply the current that will heat the conductor to its insulation limit under
the stated installation conditions.

TPI has **one** layer of insulation only, so it must be enclosed — in conduit or
duct — unless it is installed as approved open wiring in a location the Rules
allow. You will never see bare building wire stapled across a plant room wall on
a compliant job.

### Conductor size and stranding

Metric cable size is the **total cross-sectional area of the conductor in square
millimetres** — not its overall diameter. Sizes of 2.5 mm² and below are made
either solid (one strand) or stranded; above 2.5 mm², building wire must be
stranded, because solid copper that size is too stiff to terminate and work
harden-cracks when flexed.

| Nominal area (mm²) | Strands / diameter of each strand |
|---|---|
| 1 | 1 / 1.13 |
| 1.5 | 1 / 1.38, or 7 / 0.50 |
| 2.5 | 1 / 1.78, or 7 / 0.67 |
| 4 | 7 / 0.85 |
| 6 | 7 / 1.04 |
| 10 | 7 / 1.35 |
| 16 | 7 / 1.70 |

Read "7 / 0.85" as seven strands each 0.85 mm in diameter. The size and type are
normally printed on the drum or reel, and repeated along the cable sheath — so
when you find an unlabelled coil in the van, read the sheath rather than guess.

### Colours

Colour is a safety code, not decoration. In fixed wiring, **earth is always
green-yellow**; neutral is black in the older code or light blue in the current
code; actives are red, brown, blue, white or violet depending on vintage. Plain
yellow may not be used on any conductor at all, and plain green is no longer
permitted either — both were dropped precisely because they invited confusion
with the green-yellow earth.

>! Black is a neutral colour in single-phase work, but black is also a permitted
>! **active** colour in multiphase cables and flexible cords. Never decide a
>! conductor is safe because of its colour. Isolate, then test, then prove your
>! tester on a known live source.

## TPS — thermoplastic-sheathed

Take insulated cores and put a further **sheath** of insulation over the lot and
you have TPS: a double-insulated cable. The sheath is mechanical and
environmental protection; it is not there to be relied on as the main
insulation, but it means the cable can be run clipped to a surface without
conduit in many situations.

TPS comes as single core, twin (flat), twin and earth (flat), three-core and
earth, four-core and earth, and so on. The earthing core inside modern TPS is
insulated green-yellow; in older twin-and-earth the earth core was bare and had
to be sleeved green-yellow at every termination. Flat TPS is the ordinary wiring
of Australian buildings and of a great deal of light commercial refrigeration.

Flexible cords use the same idea but with circular construction and finely
stranded conductors — two-core, three-core and five-core sheathed cords are the
ones you meet on plant.

## MIMS — mineral-insulated metal-sheathed

One or more solid conductors sit inside a continuous copper (or aluminium)
tube, and the space between is packed with compressed **magnesium oxide**
powder. There is nothing in it that can burn, so MIMS survives fire and very
high ambient temperatures. It is often supplied with a PVC outer serving for
corrosion protection.

Its weakness is that magnesium oxide is strongly **hygroscopic** — it drinks
moisture out of the air, and wet MgO is a poor insulator. Every end must
therefore be sealed with a proper **pot seal**: a pot screwed onto the sheath,
filled with sealing compound, with insulating sleeving over each core. Cut a
MIMS cable and leave it open overnight and the insulation resistance will be
ruined back along the run.

The outer metal sheath of MIMS may be used as the **earthing conductor** for the
circuit inside it. An inner core of a multicore MIMS cable may **not** be used
as an earthing conductor.

## Armoured cable

Armoured cable protects the insulated cores with a layer of steel wire (SWA) or
steel braid under an outer serving of PVC or jute to stop the armour corroding.
Larger constructions include a separator, an inner sheath, earthing conductors
and sometimes a pilot core for control or monitoring. Armour is what you use
where the cable is exposed to mechanical abuse — buried runs, plant yards, under
gantries. The gland must clamp and bond the armour properly, or the armour is
simply an unearthed steel tube wrapped around live cores.

## Other constructions

| Type | Construction | Typical use |
|---|---|---|
| Elastomer-insulated | Synthetic rubber, compounded for moisture, flame or weather resistance | Flexible connections, damp and outdoor duties |
| Braided flexible cord | Multicore flex with a woven fabric outer | Appliances tolerating short bursts of local heat — kettles, toasters |
| Figure-of-eight cord | Twin single-insulated flexible cord | Small double-insulated portable appliances, pendant lighting |
| Heat-resistant glass or fibrous insulation | Glass fibre or mineral fibre insulation, highly flexible | Ovens, heaters, hotplates, defrost heater tails |

>! Fibrous heat-resistant insulation in older equipment may contain asbestos.
>! It has not been used for decades, but you will still meet it in old ovens,
>! heaters and industrial plant. Do not cut, sand or disturb suspect material —
>! stop and follow the site asbestos procedure.

## On the job

- Match the construction to the environment first, then size the copper.
- TPI is single-insulated: it must be enclosed unless it is approved open wiring.
- Size means conductor cross-sectional area in mm², not overall diameter.
- MIMS ends must be pot-sealed the day they are cut; the sheath may be the earth,
  an inner core may not.
- Green-yellow is earth, always; plain green and plain yellow are not permitted
  on any conductor.
`,
          quiz: [
            {
              q: "Why must copper building wire larger than 2.5 mm² be stranded?",
              options: [
                "Stranded copper has lower resistance than solid copper of the same area",
                "Solid conductors of that size are too stiff to bend and terminate, and work-harden and crack in service",
                "Stranded conductors have a higher voltage rating",
                "The Rules require stranding so that the earth can be identified",
              ],
              answer: 1,
              explain: "Stranding is about flexibility and fatigue, not conductivity — for the same cross-sectional area, resistance is essentially the same. Solid copper above 2.5 mm² is unworkable in a terminal and cracks where it is bent repeatedly.",
            },
            {
              q: "A MIMS cable has been cut and left open in a plant room for two days before termination. What is the likely consequence?",
              options: [
                "None — magnesium oxide is inert and unaffected by air",
                "The copper sheath will oxidise and lose its earth continuity",
                "The magnesium oxide has absorbed moisture, so the insulation resistance of the run will be low",
                "The conductors will have annealed and must be replaced",
              ],
              answer: 2,
              explain: "MgO is hygroscopic; open ends draw moisture in along the cable, and damp MgO insulates poorly. That is exactly why pot seals must be fitted promptly. The copper sheath oxidising superficially does not destroy its earthing function.",
            },
            {
              q: "Which statement about earthing with MIMS cable is correct?",
              options: [
                "The outer metal sheath may be used as the circuit earthing conductor",
                "An inner core of a multicore MIMS cable may be used as the earthing conductor",
                "MIMS circuits do not require an earthing conductor because MgO is non-conductive",
                "The PVC serving is the earthing path",
              ],
              answer: 0,
              explain: "The continuous metal sheath is a permitted earthing conductor for the circuit it encloses; using an inner core as the earth is specifically not permitted. The PVC serving is corrosion protection only and conducts nothing.",
            },
            {
              q: "What does the V75 marking on building wire tell you?",
              options: [
                "It may be used on circuits up to 75 V",
                "The vinyl (PVC) insulation is rated for a maximum continuous conductor temperature of 75 °C",
                "It carries 75 A",
                "It has 75 strands",
              ],
              answer: 1,
              explain: "V75 is an insulation temperature classification — vinyl good for 75 °C at the conductor. That temperature limit is what fixes the cable's current rating under any given installation condition; the voltage rating of normal building wire is 0.6/1 kV.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "current-rating-cable-sizing-and-voltage-drop",
          title: "Current rating, cable sizing and voltage drop",
          minutes: 14,
          simple: "A cable can only carry so much current before its plastic coat cooks, and a long cable also loses some of the push along the way. So you size a cable twice: once so it does not overheat, and once so the motor at the far end still gets enough voltage. Like a garden hose — thin and long means a weak trickle at the sprinkler.",
          refs: REFS,
          content: `
Two independent questions decide the size of a cable, and a cable is only
correct when it passes both.

1. **Will it overheat?** The current-carrying capacity question.
2. **Will there be enough voltage left at the load?** The voltage-drop question.

On short runs the first question usually governs. On long runs — a condensing
unit at the back of a car park, a coolroom at the far end of a warehouse — the
second question almost always governs, and the cable ends up bigger than the
current alone would suggest.

## Current-carrying capacity

The **current rating** of a cable is the maximum continuous current it may carry
under stated operating conditions. It is not a property of the copper alone. It
is the current that will raise the conductor to its insulation temperature limit
(75 °C for V75, for instance) given how the cable is installed. The Wiring Rules
and AS/NZS 3008.1.1 tabulate these ratings, and the notes under the tables carry
conditions that change the answer. Read them.

What pushes the rating down:

- **Installation method** — clipped in free air is best; enclosed in conduit is
  worse; buried in thermal insulation in a ceiling is worst, because the heat
  cannot escape.
- **Ambient temperature** — a plant room at 45 °C leaves far less temperature
  headroom than a 25 °C corridor.
- **Grouping** — several loaded cables in the same conduit or tray heat each
  other.
- **Insulation type** — a 90 °C insulation tolerates more current than a 75 °C
  one in the same position.

**Worked example — applying derating.** Suppose the tables give a 4 mm² V75
two-core cable a base rating of 32 A for the installation method you are using,
and the notes give a grouping factor of 0.80 for six circuits on the tray and an
ambient factor of 0.87 for the 45 °C plant room.

Derated capacity = 32 × 0.80 × 0.87 = **22.3 A**

So a cable "rated 32 A" on the drum is really a 22 A cable in that position.
Size the circuit against 22.3 A, and then make sure the protective device rating
sits at or below that figure — a circuit breaker must protect the *cable*, so
its rating can never exceed the derated capacity of the conductor it is feeding.

## Working out the load current

Nameplates often give watts rather than amps. For a resistive load, power,
voltage and current are simply related:

**W = V × A**, so **A = W ÷ V**

**Worked example — a resistive heater.** A 1000 W radiator on 240 V:

A = 1000 ÷ 240 = **4.17 A**

A flexible cord of 0.75 mm² nominal area (24 strands of 0.20 mm) suits that
load.

Motors are different. A motor draws magnetising current that circulates without
doing work, so the current is larger than watts ÷ volts. That is what **power
factor** accounts for:

**W = V × A × PF**, so **A = W ÷ (V × PF)**

**Worked example — an air-conditioner with poor power factor.** A 240 V unit
rated 1500 W with a power factor of 0.6:

A = 1500 ÷ (240 × 0.6) = 1500 ÷ 144 = **10.4 A**

At 10.4 A a 10 A cord is sitting right on its limit, so the correct choice is
1.5 mm² flex (30 strands of 0.25 mm), rated 15 A.

Now repeat with a better power factor of 0.75:

A = 1500 ÷ (240 × 0.75) = 1500 ÷ 180 = **8.33 A**

That fits comfortably on a 32/0.20 cord rated 10 A. Same machine, same watts —
the power factor alone moved it a cable size. This is why you use the nameplate
**full load amps (FLA)**, not the kilowatts, whenever the nameplate gives it.

>! Never size a motor circuit on rated watts alone, and never on the locked
>! rotor current alone. The conductor and overload are sized on full load
>! current (with the allowance the Rules require for a continuous motor load);
>! locked rotor current matters for the *short-circuit* protective device and
>! for volt-drop on starting, not for the cable's thermal rating.

## Voltage drop

Every conductor has resistance, so every conductor loses some volts along its
length. Those volts are converted to heat in the wall cavity instead of doing
work in the motor. AS/NZS 3000 limits the total drop from the point of supply to
any point in the installation to **5 %** of nominal voltage — that is 11.5 V on
a 230 V system.

Undervoltage is destructive to motors. A motor's torque falls roughly with the
square of the voltage, so a 10 % voltage sag leaves about 81 % of the torque.
The motor takes longer to come up to speed, draws high current for longer, runs
hotter, and eventually trips the overload or burns the windings. Hermetic
compressors that will not start on a hot afternoon are very often a voltage-drop
problem, not a compressor problem.

For a single-phase circuit, both the active and the neutral carry the current,
so the copper in the loop is twice the route length:

**Vd = I × R_loop**, where **R_loop = 2 × ρ × L ÷ A**

with ρ the resistivity of copper (about 0.0172 Ω·mm²/m at 20 °C, higher when the
cable is hot), L the one-way route length in metres and A the conductor area in
mm². For a three-phase circuit the multiplier is √3 (about 1.732) instead of 2,
because of the phase relationship between the conductors. In practice you would
read a millivolt-per-amp-per-metre figure straight out of AS/NZS 3008.1.1, but
the arithmetic below shows what that figure is doing.

**Worked example — a condensing unit 35 m from the board.** Load 12 A, 2.5 mm²
copper, 230 V single phase.

R_loop = 2 × 0.0172 × 35 ÷ 2.5 = 0.482 Ω

Vd = 12 × 0.482 = **5.8 V**, which is 5.8 ÷ 230 = **2.5 %**. Comfortably inside
the 5 % limit.

**Same unit, 100 m from the board.**

R_loop = 2 × 0.0172 × 100 ÷ 2.5 = 1.376 Ω

Vd = 12 × 1.376 = **16.5 V** = **7.2 %** — a fail. Step up to 4 mm²:

R_loop = 2 × 0.0172 × 100 ÷ 4 = 0.86 Ω

Vd = 12 × 0.86 = **10.3 V** = **4.5 %** — a pass, with very little margin. On
that job you would talk to the electrician about 6 mm², because the 5 % budget
also has to cover the drop in the consumer mains and submains upstream, not just
your final subcircuit.

## What to remember

- Size for heat *and* for volt drop; the bigger of the two answers wins.
- Table ratings are starting points — derate for grouping, ambient and
  installation method before you use them.
- The protective device must be rated at or below the derated cable capacity.
- Use nameplate FLA where it exists; if you must calculate from watts on a
  motor, divide by power factor as well as voltage.
- 5 % is the total volt-drop budget from the point of supply, not per circuit.
- Low volts means low torque, high current and hot windings — chase volt drop
  before you condemn a compressor.
`,
          quiz: [
            {
              q: "A 4 mm² cable has a tabulated rating of 32 A. The tables give a grouping factor of 0.8 and an ambient factor of 0.87 for the installation. What current may it carry, and what does that mean for the circuit breaker?",
              options: [
                "32 A; the breaker may be up to 32 A because that is the cable's rating",
                "22.3 A; the breaker must be rated at or below 22.3 A",
                "22.3 A; the breaker should be 32 A so it does not nuisance-trip",
                "40 A; grouping factors increase capacity for cables on a tray",
              ],
              answer: 1,
              explain: "32 × 0.8 × 0.87 = 22.3 A. The protective device exists to protect the conductor, so it must operate before the derated capacity is exceeded — fitting a 32 A breaker would let the cable cook without ever tripping.",
            },
            {
              q: "A 240 V motor is rated 1500 W with a power factor of 0.6. What current does it draw?",
              options: ["6.25 A", "10.4 A", "3.75 A", "15 A"],
              answer: 1,
              explain: "A = W ÷ (V × PF) = 1500 ÷ (240 × 0.6) = 10.4 A. The tempting answer, 6.25 A, comes from dividing watts by volts alone — that only works for a resistive load, and would undersize the cord by a whole size.",
            },
            {
              q: "A 12 A single-phase load is fed by 2.5 mm² copper over a 100 m route, giving about 16.5 V drop on a 230 V system. Why is that unacceptable?",
              options: [
                "It exceeds the 5 % (11.5 V) limit, and low voltage cuts motor torque and raises running current",
                "It is acceptable because 16.5 V is less than 10 % of 230 V",
                "It exceeds the limit but is harmless because the cable does not overheat",
                "Volt drop only applies to lighting circuits",
              ],
              answer: 0,
              explain: "16.5 V is 7.2 %, above the 5 % budget from the point of supply. The consequence is real, not paperwork: torque falls roughly with the square of voltage, so the motor accelerates slowly, draws high current for longer and overheats.",
            },
            {
              q: "Which installation condition gives a cable its LOWEST current rating?",
              options: [
                "Single cable clipped to a wall in free air at 25 °C",
                "Single cable in a conduit at 25 °C",
                "Cable surrounded by thermal insulation in a 45 °C ceiling space with five other loaded circuits",
                "Cable buried in the ground in conduit",
              ],
              answer: 2,
              explain: "Current rating is set by how well heat escapes. Thermal insulation traps it, high ambient removes the temperature headroom, and grouped loaded circuits heat each other — all three derating factors apply at once. Free air is the most favourable case.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "flexible-cords-plugs-and-colour-codes",
          title: "Flexible cords, plugs and colour codes",
          minutes: 11,
          simple: "A flexible lead is the part of the job that gets kicked, dragged, rolled over by trolleys and pinched in doors, so the rules about it are strict. Colours tell you what each wire is for, and the plug has one pin longer than the others — that is the earth, deliberately first to connect and last to let go.",
          refs: REFS,
          content: `
Fixed wiring sits still for twenty years. A flexible cord gets pulled, twisted,
kinked, walked on and shut in doors, and it is the part of an installation most
likely to injure someone. The Rules reflect that.

## Choosing a flex

For refrigeration installation and service work, flexible cords should be
**ordinary duty sheathed** — elastomer or PVC sheathed, with stranded insulated
conductors of not less than **0.75 mm²** nominal area, of a type approved by the
local supply authority. Very fine strand counts (24/0.20 for 0.75 mm², 30/0.25
for 1.5 mm²) are what give a cord its flexibility; solid conductors would fatigue
and break inside the insulation.

- **Two-core light duty and sheathed flexes** may be used for double-insulated
  appliances and luminaires, and only where the cord is not subject to rough
  handling.
- **Sheathed, or screened-and-sheathed, flexes** are the choice for hazardous
  locations and for any use as fixed wiring — the alternative being
  single-core unsheathed flexible cord, which must then be further enclosed in
  accordance with the Rules.
- **Never** use single-insulated flexible cord for any duty where damage would
  expose live copper. There is no situation on a refrigeration job that justifies
  it.

The current a flexible cord carries must never exceed the rating given in the
Wiring Rules for that conductor size. Work out the load current first (see the
previous lesson — remember power factor for motors), then pick the cord.

## The rules that catch people out

**Open to view.** A flexible cord that is not being used as fixed wiring must be
open to view along its whole length. It must not be run inside conduit, casing,
troughing or similar enclosure. The one concession is that flexible PVC hose may
be slipped over a short length that takes rough treatment. The reason is
simple: a hidden cord cannot be inspected, and a damaged hidden cord energises
whatever encloses it.

**Doorways and walls.** You may not fix a flexible cord in place so that it runs
through a wall, a partition, a window or a doorway and leaves the room in which
it joins the permanent wiring. A lead through a coolroom wall to a compressor in the next
room is not a temporary shortcut — it is a defect. That run needs fixed wiring.

**Joints and connections.** Joints in a flexible cord (other than where the cord
is fixed wiring) must be made with an approved plug and cord-extension socket.
The only alternative is a harness-type joint encapsulated in an approved moulding
integral with the cord. Twisted joints wrapped in tape are not a repair; cut the
cord back and fit a proper plug and socket, or replace the lead.

**Every strand clamped.** When landing a flex in a terminal, make certain every
strand is captured. One stray strand bridging to the next terminal is a
short-circuit or, worse, energises an earthed frame. Flexing over time works
loose strands adrift, so the clamping must be positive, not just "tight enough".

**Cord anchorage.** Every cord must be anchored to the appliance, connector,
plug or extension so that no stress reaches the electrical terminations. That is
done with a cord grip, clamp, pillar, post or a deliberate tortuous path through
the housing. Without it, the first hard tug lands on the terminal screws — and
the earth conductor, usually cut longest, is the last to pull off, which is the
only piece of good news in that failure.

>! A plug with no cord grip does not get "fixed". Replace it. The same goes for
>! any lead with a cut, a crushed section, exposed conductor, heat damage, or a
>! plug that is cracked, loose on the cord, or shows heat marking on the pins.

## Colour codes

Fixed wiring and flexible cords use related but not identical codes, and both
have an older and a current form. Learn them all, because you will meet all of
them.

| Function | Current flexible cord colour | Older Australian colour |
|---|---|---|
| Active (phase) | Brown | Red |
| Neutral | Light blue | Black |
| Earth | Green-yellow | Green |

Multicore cords follow this pattern:

| Cores | Colours |
|---|---|
| Single core | Brown (active) or light blue (neutral) |
| Two-core | Brown (active), light blue (neutral) |
| Three-core | Brown, light blue, green-yellow — or brown, light blue and black where all three are actives |
| Four-core | Brown, light blue, black (actives), green-yellow (earth) |
| Five-core | Either brown, black and white as the actives, with light blue for the neutral and green-yellow for the earth; or actives of brown, white, orange and black alongside a light blue neutral |

Two traps live in that table. First, a three-core cord with brown, light blue
and black cores may be **three actives**, not active-neutral-earth. Second,
black is a neutral colour in the older single-phase code and an *active* colour
in multiphase cords. Colour narrows the possibilities; only a test proves what a
conductor is.

## Wiring a three-pin plug

The Australian three-pin plug has two angled pins and one vertical pin. The
vertical pin is the **earth**, and besides its different angle it is
**physically longer** than the other two, and marked with "E", "Earth", the word
green, or the international earth symbol.

That extra length is a deliberate safety design: as the plug is pushed in, the
earth pin makes contact **first**, before the active and neutral; as it is
withdrawn, the earth is the **last** to break. The appliance frame is therefore
earthed for the whole time it can possibly be live.

Looking into the socket with the earth pin at the bottom, the **active is on the
left** and the **neutral is on the right**. Land brown (or red) on active, light
blue (or black) on neutral, green-yellow (or green) on earth. Cut the earth
conductor slightly longer than the other two inside the plug body so that if the
cord is ever wrenched out of its grip, the earth is the last connection to part.
Fit and tighten the cord grip on the *sheath* of the cord, never on the
individual cores.

## On the job

- Ordinary duty sheathed flex, 0.75 mm² minimum, for service and installation work.
- Cords stay open to view, do not pass through walls or doorways, and are jointed
  only with approved plug-and-socket or moulded joints.
- Every strand clamped; every cord anchored so the terminals take no strain.
- Earth pin is longer on purpose — first to make, last to break.
- Earth core cut longest inside the plug; cord grip clamps the sheath.
- Colours are a guide, never a proof — isolate, test, prove the tester.
`,
          quiz: [
            {
              q: "Why is the earth pin of an Australian three-pin plug longer than the active and neutral pins?",
              options: [
                "To make the plug easier to align in the socket",
                "So the earth connects before, and disconnects after, the live pins — the frame is earthed the whole time it could be live",
                "Because the earth carries more current than the other pins",
                "So the earth pin cannot be mistaken for a phase pin by colour",
              ],
              answer: 1,
              explain: "Make-first, break-last is the entire point: the appliance is never live without an earth path. Earth conductors normally carry no current at all, and pin identification is done by the different angle plus the E marking.",
            },
            {
              q: "A technician runs a flexible extension lead through a hole in a coolroom wall and clips it in place to feed a fan motor in the next room. What is wrong with this?",
              options: [
                "Nothing, provided the cord is rated for the current",
                "A flexible cord may not be clipped or otherwise fixed in place where it passes through a wall or doorway out of the room in which it joins the permanent wiring — that run requires fixed wiring",
                "It is acceptable if the hole is sealed with non-setting compound",
                "It is acceptable if an RCD protects the circuit",
              ],
              answer: 1,
              explain: "The Rules specifically prohibit fixing a flexible cord through a doorway, window, wall or partition into another room. An RCD or a sealant does not cure it — the correct fix is properly installed fixed wiring by a licensed electrician.",
            },
            {
              q: "You open a three-core flexible cord and find brown, light blue and black cores. What must you assume?",
              options: [
                "Black is the earth in the older code",
                "It could be three active conductors rather than active-neutral-earth, so it must be tested before assumptions are made",
                "Light blue is always the earth in flexible cords",
                "It is a factory error and the cord should be discarded",
              ],
              answer: 1,
              explain: "A brown / light blue / black three-core is a recognised all-active combination. Earth is only ever green-yellow (or green in the old code), so the absence of a green-yellow core is a warning that this is not a simple A-N-E cord.",
            },
            {
              q: "What is the purpose of a cord grip in a plug or appliance, and what should it clamp?",
              options: [
                "To improve earthing; it clamps the earth core",
                "To relieve strain so no stress reaches the terminals; it clamps the outer sheath of the cord",
                "To seal the entry against moisture; it clamps the individual cores",
                "To hold the plug together; it clamps the pins",
              ],
              answer: 1,
              explain: "The grip takes the mechanical load off the terminations, and it must grip the sheath — clamping individual cores crushes insulation and defeats the purpose. A plug with no cord grip is replaced, not patched.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "terminations-glands-and-enclosures",
          title: "Terminations, crimping, glands and enclosures",
          minutes: 12,
          simple: "Wires almost never fail in the middle — they fail where they join something. A loose or badly made joint has resistance, resistance makes heat, and heat makes the joint worse until it burns. Doing terminations properly, and putting them inside the right box, is most of what makes a job last.",
          refs: REFS,
          content: `
Ask any experienced service technician where electrical faults live and the
answer is always the same: at the joints. Copper in the middle of a run does not
degrade. A termination, though, is a small contact area under mechanical load in
a vibrating, heat-cycling machine — and a joint with resistance generates heat,
which oxidises the contact, which raises resistance further. That runaway is why
burnt terminals are such a common find inside contactor boxes on refrigeration
plant.

## Approved ways to terminate copper

The Rules recognise a defined set of methods. Anything else is improvisation.

- **Blue point connectors** — insulated screw-clamp connectors, common for
  junctions in fixed wiring.
- **Tunnel-type connectors** — the conductor enters a metal tunnel and a screw
  clamps it against a flat face rather than driving a point into the strands.
- **Threaded pillar or post terminals with soldered or solderless lugs.**
- **Crimped (compression) lugs** — the standard method for anything substantial.
- **Threaded pillar or post terminals with no terminating device**, provided
  every conductor is securely clamped between metal surfaces and no strands are
  cut away to make it fit.
- **Soldered connections** for small equipment.
- **Twisting and soldering** — and note the specific rule that joints in main
  earthing conductors up to 16 mm² must be soldered, using a **non-corrosive
  flux such as resin**.
- **Special terminating fittings** where the cable demands them, as with MIMS
  pot seals.

>! Corrosive (acid) fluxes must never be used on electrical terminations, and
>! never on earthing conductors. The residue keeps corroding for years after the
>! job, quietly turning a good joint into a high-resistance one. Resin-cored
>! solder only.

## Treating the cable end

- Strip **only** as much insulation as the terminating device needs. The
  conductor should extend the full depth of the terminal with no bare copper
  standing outside it.
- Do not nick or cut strands to make a conductor fit. Cutting strands away
  reduces the cross-sectional area and creates a hot spot exactly where you
  least want one.
- Any joint between insulated cables must be insulated to a standard no worse
  than the cable's own insulation.
- If soldering heat damages the insulation, cut it back and replace it with
  insulation equivalent to the original — heat-shrink or approved sleeving, not
  a wrap of tape over a charred core.

## Crimping properly

A crimp is a cold weld: the die deforms the barrel and the strands until they
flow into one solid mass with no air gap. It works only if three things match —
lug, conductor size, and die.

1. Choose a lug sized for the conductor and for the stud it lands on.
2. Strip to the depth of the barrel, no more, and check that every strand goes
   in — a single strand outside the barrel means the crimp is undersized on
   copper and over-tight on nothing.
3. Use the correct die in a ratchet tool and let the ratchet complete its cycle.
   Pliers are not a crimping tool.
4. Give the finished crimp a firm pull test. A good crimp will not move.
5. Insulate the barrel with heat-shrink or the lug's own insulated sleeve.

**Do not tin stranded conductors that go under a screw terminal.** Solder
creeps under sustained pressure, so a tinned conductor slowly loosens in the
terminal and ends up as a hot joint. Where a stranded conductor must go into a
screw terminal, use an **insulated bootlace ferrule** crimped on the end. And
after final tightening, torque matters: a terminal screw that is under-tightened
arcs, and one that is over-tightened crushes and breaks strands. Manufacturers
give torque figures on the terminal block or in the manual — use them.

## Glands and enclosure entries

The gland is what makes an enclosure keep its IP rating and what stops the cable
being pulled out of its terminals.

- Match the gland to the cable type: compression glands for TPS and circular
  flex, armoured (SWA) glands that clamp *and electrically bond* the steel wire
  armour, pot seals with gland nuts for MIMS.
- Enter enclosures from **below** or the side wherever possible, and leave a
  **drip loop** so water tracking along the cable falls off before the entry.
- Every unused entry must be blanked. An open knockout ruins the IP rating and
  lets vermin and water in — both regular causes of plant room failures.
- Enclosures in wet, dusty or washdown areas need the IP rating to match: an
  IP56 enclosure for outdoor and hose-down duty, a sealed gland at every entry.

## Support, conduit and mechanical protection

TPI building wire is single-insulated, so it lives in **conduit** — heavy-duty
rigid PVC, corrugated flexible conduit for short flexible sections, or
galvanised steel where mechanical protection matters — or in **ducting or
cable tray**. Sheathed cable may be surface-clipped where the Rules allow.

- Support cables at regular intervals with saddles or clips so the weight is
  never carried by the terminations. Vertical runs need particular attention.
- Protect cables from sharp edges with grommets or bushes at every metal entry.
- Cables crossing a walkway or driveway must be routed **overhead or covered**
  with a proper protective cover — a lead lying across a loading dock is a trip
  hazard and will be crushed.
- Buried cable needs mechanical protection and adequate cover (typically around
  500 mm), plus marker tape above it, per the Rules.
- Keep cables clear of hot discharge lines and away from sharp sheet-metal edges
  inside condensing units — vibration plus a raw edge equals a cut cable.

## Refrigeration-specific enclosure practice

- **Coolroom and freezer cables must be sealed at both ends with a non-setting
  sealing compound.** Otherwise moist warm air travels down the cable core into
  the cold space, condenses, and eventually freezes — the classic "water pouring
  out of the isolator" fault. Every fitting and conduit in a cold space also
  needs a way to drain condensate that forms inside it.
- Fit **totally enclosed fan-cooled (TEFC)** motors anywhere dust, moisture or
  corrosive atmosphere is expected. Windings and switchgear are sealed inside the
  case, heat is carried out through external fins, and a shrouded shaft-driven
  fan blows over them.
- All electrical equipment in **fruit ripening rooms** must be flameproof —
  fans, lights, switches, the lot — because the ripening gases used are
  flammable.
- Keep **ammonia plant switchboards** out of the machinery room, in a location
  isolated from where refrigerant could leak, so the plant can be shut down
  safely during a leak. Ammonia is flammable in air over its range and is
  aggressively corrosive to copper and electrical components.

## What to remember

- Faults live at joints; a hot terminal is a warning, not a nuisance.
- Strip to the terminal depth, cut no strands, clamp every strand.
- Crimping needs matched lug, conductor and die, plus a pull test.
- Never tin a conductor going under a screw; use a bootlace ferrule.
- Resin flux only, and soldered joints in main earths up to 16 mm².
- Seal coolroom cable ends both ends; blank every unused entry; drip loop in.
`,
          quiz: [
            {
              q: "Why should a stranded conductor NOT be tinned with solder before being clamped under a screw terminal?",
              options: [
                "Solder increases the resistance of copper significantly",
                "Solder creeps under sustained clamping pressure, so the joint loosens over time and becomes a high-resistance hot spot",
                "Solder prevents the conductor from being identified by colour",
                "Tinned conductors cannot be re-terminated",
              ],
              answer: 1,
              explain: "Cold flow (creep) of solder under pressure is the problem — the joint that was tight on installation day is loose months later, and a loose joint heats. Where a stranded conductor must enter a screw terminal, crimp on an insulated bootlace ferrule instead.",
            },
            {
              q: "Coolroom wiring must be sealed at both ends with a non-setting compound. What failure does that prevent?",
              options: [
                "Refrigerant migrating along the conduit into the switchboard",
                "Warm moist air travelling along the cable core into the cold space, condensing and freezing inside fittings",
                "The cable insulation cracking at low temperature",
                "Loss of the enclosure's earth continuity",
              ],
              answer: 1,
              explain: "The cable interior is a small air path between a warm room and a cold one; unsealed, moisture migrates and condenses, then freezes. That is why fittings and conduits in cold spaces also need provision to drain internal condensate.",
            },
            {
              q: "Which flux is acceptable for soldering electrical terminations, particularly earthing conductors?",
              options: [
                "An active acid flux, because it cleans the copper better",
                "A non-corrosive flux such as resin",
                "Any plumbing flux, provided the joint is wiped afterwards",
                "No flux at all is permitted on electrical work",
              ],
              answer: 1,
              explain: "Only non-corrosive (resin) flux is permitted. Acid flux residue keeps attacking the copper long after the job, steadily raising joint resistance — an especially dangerous outcome on an earth conductor, where the fault is invisible until it is needed.",
            },
            {
              q: "A gland for steel wire armoured cable must do two jobs. What are they?",
              options: [
                "Seal the entry, and provide strain relief only",
                "Seal the entry and clamp the cable, and electrically bond the steel armour so it is earthed",
                "Support the cable weight and insulate the armour from the enclosure",
                "Cool the cable and provide a drip loop",
              ],
              answer: 1,
              explain: "Mechanical clamping plus earthing of the armour. Unbonded armour is a conductive metal layer wrapped around live cores with no fault path — if a core fails onto it, nothing trips and the cable becomes live to touch.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "earthing-double-insulation-and-men",
          title: "Earthing, double insulation and the MEN system",
          minutes: 13,
          simple: "Earthing gives fault current an easy road home so it does not use you as the road. If a live wire touches a metal case, the earth wire carries a huge current instantly and the fuse or breaker blows. Some appliances instead use two separate layers of insulation, so there is nothing metal to make live in the first place.",
          refs: REFS,
          content: `
Earthing is the single most important protective measure in an installation, and
it is the one most often quietly defeated — by a missing star washer, a painted
mounting surface, a rubber-mounted motor, or a green-yellow wire someone left
off when they refitted a panel.

## Why earth at all

Current is carried in insulated conductors, but insulation gets damaged and
connections come loose. If an active conductor contacts the metal casing of an
appliance, that casing is now at 230 V relative to earth. Anyone touching it
while standing on concrete, or touching a tap or a pipe, becomes the conductor
back to earth — and the current goes through the chest.

An earthing conductor bonded to the casing gives the fault an alternative path
with far lower resistance than a human body. Two things then happen, and both
help:

1. The fault current is large — hundreds or thousands of amps — so the circuit
   breaker trips or the fuse blows in a fraction of a second, removing the
   danger.
2. Even if the leakage is too small to operate the protective device, the vast
   majority of it flows in the low-resistance earth conductor rather than the
   high-resistance human body.

**Earthed**, in the Rules' sense, means connected to the general mass of earth
*and* to the supply neutral, in the manner the Wiring Rules require. Both halves
of that matter — see the MEN system below.

## Earthed situations

An **earthed situation** is anywhere a person could reasonably touch exposed
metal or another conductive medium that is in contact with earth, so that a
circuit through their body to earth can be completed. In these situations all
appliances, fittings and wiring enclosures must be earthed:

- Within **2.5 m**, measured in any direction, of a conductive floor — brick,
  tile, concrete or earth — or of metallic pipe or conduit, a surface that stays
  permanently damp, cable sheathing or armour, or anything else conductive that a
  person may stand on.
- **Outdoors**, with one exception: an isolated item such as switchgear or a
  luminaire mounted more than 2.5 m above the ground and clear of any exposed
  earthed metal is not deemed an earthed situation.
- Within 2.5 m of the floor, ground or platform in rooms with earthed socket
  outlets, where a person could touch exposed metal of electrical equipment and
  the conductive part of a connected appliance at the same time.
- **All parts of a bathroom, laundry, lavatory, toilet or kitchen.**

Read that list with a refrigeration eye: a plant room with a concrete floor, a
coolroom with a metal-clad interior, an outdoor condensing unit on a slab, a
commercial kitchen — every workplace you go to is an earthed situation.

## What must be earthed

- All conductors, switches, power points and metal-clad controllers wired to
  refrigeration or air-conditioning plant — and the plant itself — earthed back to
  the switch.
- Exposed metal of ranges, water heaters, motors and generators.
- Transformer metalwork, except where both primary and secondary are low voltage
  in the sense the Rules define for that exemption.
- Metal or other fixed equipment installed in earthed situations.
- Socket outlets for appliances that require earthing — they must have an earthed
  contact and are themselves deemed to be in an earthed situation.
- Exposed metal of light fittings.
- All portable appliances, except those that are double insulated.
- All frames on which appliances are mounted.

Usually the components of a refrigeration unit are bolted and piped together, so
metal-to-metal continuity means earthing the main frame earths the lot. That
assumption has one classic hole in it.

>! **The resiliently mounted fan motor.** Motors on rubber anti-vibration mounts
>! are electrically isolated from the frame by those very mounts. They need a
>! deliberate earth bonding strap back to the frame. Without one, even with no
>! insulation fault at all, static charge builds up on the motor and delivers
>! painful, spectacular sparks — and with a fault, the case stays live. Check
>! the bonding strap on every resilient-mounted motor you service, and refit it
>! if it has been left off.

Bonding practice matters too: land the earth on a dedicated earth stud with a
star washer, onto clean bare metal — not onto paint, not onto a self-tapper into
sheet metal that will vibrate loose, and never share an earth stud with a
mechanical fixing that gets removed regularly.

## The MEN system

Australia and New Zealand use the **Multiple Earthed Neutral** system. Its
essentials:

- The supply neutral is earthed at the distribution transformer and again at
  multiple points along the distribution network — hence "multiple earthed".
- At each installation's **main switchboard**, the earth bar is connected to the
  neutral bar by the **MEN link**, and an earthing conductor runs from that bar
  to an **earth electrode** (typically a driven rod at least 1.2 m long) at the
  premises.
- Downstream of the main switchboard, neutral and earth are kept strictly
  separate. Every final subcircuit has its own earthing conductor run with the
  active and neutral.

The reason for the link is fault-loop impedance. An earth fault current does not
mainly return through the soil — soil resistance is far too high to blow a fuse.
It returns along the earthing conductor to the earth bar, through the MEN link
into the neutral, and back along the neutral to the transformer. That is a
metallic path of very low impedance, which is what allows hundreds of amps to
flow and the protective device to disconnect fast. The earth electrode's job is
to hold the installation near true earth potential and give lightning and
high-voltage faults somewhere to go — it is not the main fault path.

The main earthing conductor is sized in proportion to the active conductors of
the installation, from the table in AS/NZS 3000. Equipotential bonding ties the
metal water pipework and other conductive services to the earth bar, so that all
touchable metal in the building sits at the same potential — you cannot get a
shock between two things at the same voltage.

>! Never open a MEN link or disconnect a neutral on a live installation. A
>! disconnected neutral on a loaded circuit can put full supply voltage onto
>! metalwork and onto the neutral conductor itself.

## Double insulation and all-insulated construction

Some equipment is protected without an earth at all.

**Double insulation** means two completely separate insulation systems between
live parts and any metal the user can touch:

- **Functional insulation** — the ordinary insulation that confines current to
  its intended path; without it the machine would not work.
- **Protective insulation** — a second, robust, generously sized insulating
  barrier between the working parts and any accessible metal. In a
  double-insulated drill, for example, the motor frame is not metallically
  connected to the chuck or moving head; an insulating linkage separates them,
  and any other external metal is likewise isolated from the motor frame.

If either layer fails or is bridged — by a stray strand of flex, say — the
second layer still protects the user. Accessible metal becomes live only if both
layers fail together, which is why these appliances are marked with the double
square symbol or the words meaning "do not earth — double insulated" and are
supplied with two-core flex.

**All-insulated** construction goes further: the whole casing is insulating
material, with no accessible external metal and no aperture through which a
probe could reach live parts. It works only where the casing can be made strong
enough for the service conditions, and it is unsuitable where a film of water
could compromise the insulation.

>! Do not fit an earthed three-core lead to a double-insulated appliance in the
>! belief that you are improving it, and do not leave the earth off equipment
>! that is not marked as double insulated. Follow the appliance's marking.

## On the job

- Earthing works by making the fault current huge so protection operates fast.
- Nearly every refrigeration workplace counts as an earthed situation.
- Resilient-mounted motors need their own bonding strap — check it every time.
- MEN links earth and neutral at the main switchboard only; keep them separate
  downstream.
- Double-insulated tools are marked, use two-core flex, and must not be earthed.
- Earth studs go to clean bare metal with a star washer, not to paint.
`,
          quiz: [
            {
              q: "In the MEN system, what is the main return path for an earth fault current, and why?",
              options: [
                "Through the soil from the earth electrode back to the transformer, because soil is a good conductor",
                "Along the earthing conductor to the earth bar, through the MEN link into the neutral, and back to the transformer — a low-impedance metallic path that lets enough current flow to trip protection",
                "Through the RCD sensing coil, which carries the fault current to earth",
                "Back through the active conductor once the breaker opens",
              ],
              answer: 1,
              explain: "Soil resistance is far too high to operate a fuse or breaker. The MEN link creates a metallic earth-neutral loop back to the transformer, so fault current is large and disconnection is fast. The electrode holds the installation near earth potential; it is not the working fault path.",
            },
            {
              q: "A resiliently mounted condenser fan motor gives painful sparks when touched, yet insulation tests on the windings are perfectly good. What is the most likely cause?",
              options: [
                "The windings are shorted turn to turn",
                "The rubber anti-vibration mounts isolate the motor from the frame and its earth bonding strap is missing, allowing static charge to build up",
                "The capacitor is discharging through the frame",
                "The supply neutral is disconnected",
              ],
              answer: 1,
              explain: "Rubber mounts break the metal-to-metal path that normally earths a motor through the frame, so a separate bonding strap is required. With it missing, static builds on an isolated metal mass — and if an insulation fault ever did occur, the case would stay live.",
            },
            {
              q: "Which of these is NOT an earthed situation as defined in the Wiring Rules?",
              options: [
                "A plant room with a concrete floor",
                "All parts of a commercial kitchen",
                "A luminaire mounted 3 m above the ground outdoors, clear of any exposed earthed metal",
                "Within 2.5 m of a permanently damp surface",
              ],
              answer: 2,
              explain: "There is a specific exception for isolated equipment such as switchgear or a luminaire mounted more than 2.5 m above ground and clear of exposed earthed metal — a person cannot bridge it to earth. Concrete floors, damp surfaces and kitchens are all earthed situations.",
            },
            {
              q: "What distinguishes double insulation from ordinary insulation?",
              options: [
                "The insulation is twice as thick on the same conductors",
                "There are two separate systems — functional insulation confining the current, plus a robust protective insulation between working parts and any accessible metal — so failure of one still protects the user",
                "The appliance has both an earth wire and an RCD",
                "The casing is made entirely of plastic with no internal metal",
              ],
              answer: 1,
              explain: "Two independent barriers, not one thick one: functional insulation makes the machine work, protective insulation keeps accessible metal safe if the first fails. An all-plastic casing with no accessible metal is the separate 'all-insulated' construction.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "protection-isolation-and-shock-safety",
          title: "Protection devices, isolation, tagging and shock safety",
          minutes: 14,
          simple: "Fuses and circuit breakers protect the wiring; RCDs protect people; isolating and tagging protects you personally. The rule that keeps you alive is simple: switch it off, lock it off, then test that it really is off — and test your tester on something you know is live.",
          refs: REFS,
          content: `
Refrigeration units carry their own overloads, but a unit's overload protects
only the unit. The circuit itself needs its own protection — against a failed
motor, against overloaded equipment, and against the everyday possibility that
someone plugs in enough extra appliances to exceed what the wiring can carry.
Overheated wiring inside walls and ceilings is a leading cause of building fires,
and the classic reason is somebody "fixing" nuisance tripping by increasing the
fuse rating.

## Overcurrent protection

Every active conductor of a final subcircuit must be protected by a device that
can disconnect the circuit when excessive current is drawn. The options:

| Device | How it works | Notes |
|---|---|---|
| Rewireable (semi-enclosed) fuse | A high-resistance fuse wire melts | Obsolete for new work; can be, and is, rewired with the wrong wire |
| HRC cartridge fuse | Sand-filled cartridge with a precise element | Accurate, high breaking capacity, cannot be tampered with |
| Circuit breaker (MCB) | Thermal element for overload, magnetic element for short circuit | Resettable, accurate, preferred for new work |

For commercial and industrial installations the HRC fuse and the circuit breaker
are preferred over rewireable fuses, for good reasons: accuracy and sensitivity,
easy replacement or resetting, less deterioration from weather and load, and —
above all — they cannot be rewired with oversized or doubled-up wire.

Both operate on the same principle in a fault. When insulation fails and causes a
short circuit, or a live conductor touches earthed metal and dumps current down
the earth conductor, the current rises enormously and the element melts or the
breaker trips, cutting supply to the faulty circuit.

Rules that are not negotiable:

- The fuse rating is marked on the carrier. Never fit an element above that
  rating, which normally matches the maximum current rating of the circuit
  conductor.
- **Never** double up fuse wire or substitute ordinary wire for high-resistance
  fuse wire. Both raise the fuse's capacity above the wiring it was there to
  protect.
- HRC cartridge fuses must never be replaced with fuse wire — the plastic carrier
  will burn.
- Never mask a fault with a bigger fuse or a raised breaker setting.
- Motor circuits use breakers with a curve that tolerates starting inrush (Type C
  or D), not a bigger breaker.

>! If a fuse blows or a breaker trips, find the cause **before** restoring power.
>! Re-closing onto a hard short or an earth fault can produce a blinding
>! arc-flash explosion at the board, with molten metal and burns. Isolate, test
>! the circuit, then decide.

## Protecting people: the RCD

Overcurrent devices protect conductors. They will happily let 30 mA flow through
a person's chest all day, because 30 mA is nothing to a 20 A breaker. That is
what the **earth leakage core balance** device — the residual current device —
is for.

Under healthy conditions the current flowing out in the active exactly equals the
current returning in the neutral. Pass both through a sensing coil wound on a
common core and their magnetic effects cancel, so the coil sees nothing. If some
current escapes to earth — through a faulty appliance, or through a person — the
active and neutral currents are no longer equal. The imbalance produces a signal
in the sensing coil, which is amplified and fed to a tripping coil that opens the
breaker. It is exactly the principle of the clamp (tong) ammeter, used as a
safety device.

Typical Australian requirements: **30 mA** residual current for socket outlet and
lighting final subcircuits, tripping within the times set by the Standard — of
the order of 300 ms at rated residual current, and much faster at several times
that current. That is well inside the time believed necessary to cause a fatal
shock, which is why RCDs are so valuable where hand tools are used and insulation
damage is most likely. Portable plug-in RCDs are available for construction and
service work.

Their limits, which every technician must understand:

- An RCD **cannot** protect a person who contacts active and neutral at the same
  time — the currents stay balanced, because the person has simply become part of
  the load.
- An RCD does not replace overcurrent protection; it does not protect the cable.
- An RCD does not replace proper earthing, sound cords and equipment, or safe
  work practice.
- RCDs can nuisance-trip where genuine small leakage is normal, such as damp
  domestic appliances — but that inconvenience never justifies removing one.

Also in the "prevent contact" category are **interlocks**: enclosure covers and
doors wired so supply is disconnected before access is possible. A good example
is the electrostatic air filter used in large air-conditioning plants, working at
12 to 13 kV: the door is held by a large screw lock that disconnects power near
the fully closed position, and the time taken to unscrew it lets the residual
electrostatic charge dissipate before the door can open.

## Isolation and tagging

Before any repair or alteration begins, the circuit or equipment must be isolated
and tagged. This is the procedure that keeps you alive:

1. Identify the correct circuit — confirm it, do not assume from a label.
2. Switch off and isolate at the protective device or isolator.
3. **Remove the fuses and keep them in your pocket** so nobody can replace them
   while you work. If you have switched off a breaker, lock it off and fit a
   **danger tag** naming you, the date and the reason.
4. **Test the circuit dead** with a voltmeter or approved voltage indicator, at
   every conductor including neutral.
5. **Prove your tester** afterwards on a known live source, to confirm it was
   working when it told you the circuit was dead.

Step 5 is the one people skip and the one that kills. A meter with a flat
battery, a blown fuse or a broken lead reads zero volts on a live circuit and
looks entirely convincing. Test — prove — test.

A danger tag carries the name of the person who fitted it, the date, the reason
and the planned completion date, and it may be removed only by the person named
on it. Unauthorised removal is a serious offence on any site.

Things that have killed people despite an "isolation":

- The wrong fuses were pulled — the labelling was wrong.
- An added-on circuit bypassed the board, or was fed from a different
  switchboard entirely.
- Someone inconvenienced by the isolation put the fuses back.
- **Control circuits stayed live** even with the power breakers off — control
  supplies are very often fed from elsewhere.
- On a single-phase circuit the switch was in the **neutral**, not the active, so
  the equipment was dead but every active terminal remained at 230 V.

>! Live work is prohibited except in the narrow circumstances the WHS
>! regulations and AS/NZS 4836 permit — essentially where testing or fault
>! finding genuinely cannot be done dead, with a documented risk assessment, a
>! trained safety observer, insulated tools and appropriate PPE. "It is quicker"
>! is not a justification. If in doubt, isolate.

**Removing equipment.** Where equipment is taken out of service temporarily, the
circuit wiring must be terminated inside an enclosure — a junction box or blue
point connector. If the removal is permanent, an electrician must remove the
circuit wiring from the switchboard and terminate it correctly at both ends. Bare
conductors taped over and pushed into a cavity are a fire and shock waiting to
happen.

## Why shock is dangerous

The human body has a fairly high resistance, but a current still flows whenever
contact is made simultaneously with two objects at different potentials — one
terminal in each hand, or one hand on a live part while standing on a conductive
floor. The current rises with the potential difference. Voltages below about
32 V are generally harmless to a healthy person under normal conditions; the
public supply is 230 V to earth and 400 V between phases, and shock at those
levels can be dangerous or fatal.

## General safety measures for the plant room

- Know where the main switchboard is before you start, and keep at least **one
  metre** of clear access all around it.
- Switchboards for hazardous plant — ammonia especially — must be located away
  from where refrigerant could leak, so the plant can be shut down safely during a
  leak, and to keep the corrosive, flammable vapour away from switchgear.
- Fruit ripening rooms require flameproof fittings throughout, because the
  ripening gases are flammable.
- Coolroom cables sealed both ends; provision for draining internal condensate.
- Resin-cored solder only; no corrosive flux, especially on earths.
- TEFC motors in dusty, damp or corrosive locations.
- Have equipment inspected regularly for faulty earths, damaged leads, poor
  connections and case or insulation damage. Most sites require periodic testing
  and tagging of leads and portable equipment.
- Replace worn power and extension leads rather than repairing them.
- Size and select extension leads properly for the voltage, current and
  environment; route them overhead or under covers where they cross walkways or
  driveways.
- Always re-check that an appliance really is disconnected before you work on it.

## What to remember

- Fuses and breakers protect conductors; RCDs protect people; nothing protects a
  technician who skips isolation.
- Never uprate a fuse or breaker to stop nuisance tripping — find the fault.
- An RCD is blind to an active-to-neutral shock and does not replace earthing.
- Remove fuses and pocket them; lock and tag; test dead; prove the tester.
- Control circuits and neutral-switched circuits can be live after the mains
  breaker is off.
`,
          quiz: [
            {
              q: "Why is the 'prove the tester' step after testing a circuit dead so important?",
              options: [
                "It confirms the circuit will stay dead while you work",
                "It confirms the tester itself was functioning — a meter with a flat battery, blown fuse or broken lead reads zero on a live circuit",
                "It is only required for three-phase work",
                "It discharges any stored capacitance in the circuit",
              ],
              answer: 1,
              explain: "A dead reading proves nothing unless the instrument is known good. Test on the circuit, prove on a known live source or proving unit, then test again. Nothing about proving the tester keeps the circuit isolated — that is what locks and tags do.",
            },
            {
              q: "A worker grasps the active and neutral terminals of a 230 V circuit, one in each hand. Will the RCD protect them?",
              options: [
                "Yes — the RCD detects any current flowing through a person",
                "Yes, provided it is a 30 mA RCD",
                "No — the active and neutral currents remain balanced, so the RCD sees nothing; the person has simply become part of the load",
                "No, because RCDs only work on three-phase circuits",
              ],
              answer: 2,
              explain: "The RCD compares active and neutral current. In an active-to-neutral contact all the current still returns through the neutral, so there is no imbalance to detect. RCDs protect against current escaping to earth only — which is why they never replace earthing and safe practice.",
            },
            {
              q: "Why are HRC cartridge fuses and circuit breakers preferred over rewireable fuses in commercial installations?",
              options: [
                "They are cheaper to install",
                "They are more accurate and sensitive, easier to replace or reset, deteriorate less, and cannot be defeated by fitting oversized or doubled fuse wire",
                "They allow a higher current to be drawn from the same cable",
                "They eliminate the need for an earthing conductor",
              ],
              answer: 1,
              explain: "The tamper-proof aspect is the big one: a rewireable fuse invites someone to double the wire and defeat the protection of the cable. HRC and MCB devices also have far better accuracy and breaking capacity. They change nothing about cable rating or earthing requirements.",
            },
            {
              q: "You have switched off and locked the main circuit breaker feeding a packaged chiller. Which assumption is dangerous?",
              options: [
                "That the compressor terminals are now dead",
                "That the control circuit inside the panel is also dead — control supplies are often fed from another source or another board",
                "That you should still test before touching conductors",
                "That a danger tag must name you and the date",
              ],
              answer: 1,
              explain: "Control circuits are frequently fed from a separate supply, a different board, or an added-on circuit that bypasses the main board — so they can remain live after the power breaker is opened. Similarly, on single-phase equipment a switch may be in the neutral, leaving actives live.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "control-wiring-condensing-unit-and-testing",
          title: "Control wiring, wiring a condensing unit and testing the job",
          minutes: 15,
          simple: "The control circuit is a chain of small switches that all have to agree before the compressor is allowed to run. Wiring a condensing unit means getting the right cable to the right terminals, earthing it properly, then proving with tests that it is safe before you press start — and knowing what to do if someone does get shocked.",
          refs: REFS,
          content: `
Everything in the previous lessons comes together at one machine: a condensing
unit on a slab that has to be connected, proved safe and started. This lesson
walks through the control circuit that governs it, the connection work itself,
and the tests that turn a finished installation into a *verified* installation.

## The control circuit

Refrigeration control wiring is almost always drawn as a ladder, and the master
rung is the compressor contactor coil. Everything that must be true before the
compressor may run appears as a contact in series with that coil:

- **Thermostat** or controller output — is cooling actually called for?
- **Low pressure switch** — is there refrigerant and suction pressure?
- **High pressure switch** — is discharge pressure safe? (Often a manual-reset
  device, and on larger plant a separate manual-reset HP cut-out is mandatory.)
- **Oil pressure differential switch** — does the compressor have oil pressure?
- **Motor overload / thermal protector** — is the motor within temperature?
- **Anti-recycle or off-delay timer** — has the compressor been off long enough?
- **Phase failure / phase sequence relay** on three-phase plant — are all three
  phases present, balanced and in the right order?

One open contact anywhere in that series string means the coil is de-energised
and the compressor cannot run. That is the whole logic, and it is why fault
finding is a walk along one rung.

Around that master rung sit the supporting circuits:

- A **start/stop station** with a seal-in (hold-in) auxiliary contact across the
  start button, so the circuit latches once started and drops out on stop or on
  loss of supply. That drop-out on power loss is a safety feature, not an
  inconvenience: plant does not restart unattended after a blackout.
- A **liquid line solenoid valve** wired for **pump-down** control: the
  thermostat operates the solenoid, not the compressor, and the low pressure
  switch stops the compressor once the evaporator has been pumped out. This
  keeps liquid refrigerant out of the crankcase during the off cycle.
- **Crankcase heater** wired so it is energised when the compressor is *off* —
  typically through a normally-closed auxiliary contact — to keep refrigerant
  from condensing into the oil.
- **Condenser fan** control, often via a head pressure switch or fan speed
  controller.
- **Defrost** timer, termination thermostat and drain line heater on freezer
  applications.
- **Alarm and run indication** contacts back to a BMS or an alarm panel.

Control circuits may run at line voltage (230 V) or, more commonly on larger
plant, at ELV through a **control transformer** — 230 V to 24 V, with the
secondary fused and one leg earthed. ELV controls are safer to work on and are
what packaged equipment and DDC controllers usually expect. Control wiring is
also physically separated from power wiring inside the panel: run in separate
ducts, crossing at right angles where they must cross, so that switching
transients and induced voltages do not upset control signals.

The voltmeter technique from lesson 1 is the whole fault-finding method: with the
control circuit live, walk the rung from the supply end, and the first device with
full control voltage across it is the open one. Zero volts across a device means
it is closed and passing.

## Wiring a condensing unit, step by step

1. **Read the nameplate.** Note supply voltage and phases, full load amps (FLA),
   locked rotor amps (LRA), and the maximum overcurrent protective device or
   minimum circuit ampacity if given. These figures, not the kilowatt rating,
   govern the circuit.
2. **Confirm the supply** matches — voltage, phases and available fault level.
   On three-phase, check phase-to-phase voltages are within about 2 % of each
   other; voltage imbalance produces a much larger current imbalance and cooks
   windings.
3. **Select the cable** for derated current-carrying capacity *and* for volt drop
   over the actual route (lesson 3). Long runs to a rooftop or car park unit are
   usually volt-drop governed.
4. **Provide an isolator within sight of the unit** — a lockable isolating switch
   at the machine, so the person working on it controls the isolation. This is a
   requirement for fixed appliances of this type and is basic self-preservation.
5. **Route and support** the cable clear of hot discharge lines and sharp sheet
   metal, saddled at proper intervals, entering the electrical enclosure from
   below through a matched gland with a drip loop, and blank any unused entries.
6. **Terminate** in the machine's terminal block: correct lugs or ferrules,
   every strand captured, screws to the manufacturer's torque.
7. **Earth it.** Green-yellow to the dedicated earth stud on clean bare metal
   with a star washer. Check the bonding strap on the resiliently mounted fan
   motor while you are in there.
8. **Wire the controls** — thermostat, pressure switches, solenoid, crankcase
   heater — to the manufacturer's wiring diagram, keeping control conductors out
   of the power duct.
9. **Energise the crankcase heater** and leave it on for the period the
   manufacturer specifies (commonly several hours to 24 h) before the first start,
   so liquid refrigerant is driven out of the oil.
10. **Check rotation on three-phase** at first start. A scroll or screw compressor
    running backwards makes a distinctive noise, does not build discharge
    pressure, and can be damaged in minutes — shut down at once and swap two
    phases at the isolator.
11. **Measure running current** on each phase with a clamp meter and compare with
    the nameplate FLA. Log the voltages and currents on the commissioning sheet.

>! Steps 1 to 8 are electrical connection work. Do only what your restricted
>! electrical licence covers, and hand the rest to a licensed electrician. Never
>! energise a circuit you have not verified, and never work inside a live panel
>! to "just check something".

## Testing a completed installation

AS/NZS 3000 requires verification before an installation is energised and put
into service, and AS/NZS 3017 explains how each test is done. The sequence
matters — the dead tests come first, because they are what makes it safe to
energise.

| Test | What it proves | Typical acceptance |
|---|---|---|
| Visual inspection | Correct devices, sound terminations, IP integrity, identification, no damage | No defects found |
| Continuity of the earthing system | Every exposed conductive part is connected back to the main earth bar | A fraction of an ohm — check the Standard's stated limit for the run |
| Insulation resistance | No breakdown between actives, neutral and earth | Not less than 1 MΩ at 500 V DC |
| Polarity and correct connections | Active lands on active, neutral on neutral, switches in the active | Correct at every point |
| Earth fault-loop impedance | The fault loop is low enough for the protective device to disconnect in time | Within the value for that device and cable |
| RCD operation | The device trips at its rated residual current within the required time | Trips within the Standard's stated times |
| Functional / operational test | Controls, interlocks and safeties actually do what the diagram says | All sequences correct |

Points worth stressing:

- **Insulation resistance is tested with equipment disconnected** — 500 V DC
  applied to an electronic controller, VSD or PCB will destroy it. Isolate or
  link out sensitive components first, and note that on the test sheet.
- **Insulation resistance testing on a motor** is the single most useful test for
  a burnt-out hermetic: a healthy winding reads many megohms to the shell; a
  motor that has burnt reads very low, often near zero.
- Polarity errors are lethal and invisible. A transposed active and neutral
  leaves a "switched off" appliance with a live frame path, and the RCD will not
  necessarily reveal it.
- Portable equipment and leads are separately inspected, tested and tagged under
  AS/NZS 3760 on the intervals the site requires.
- Record the results. An unrecorded test is, for practical and legal purposes, a
  test that never happened.

## If someone is shocked

Electrocution rarely kills instantly. It commonly stuns the casualty, stops
breathing and disrupts the heart — so the first minutes decide the outcome.

**Rescue.** Switch off the electricity if you possibly can, then move the
casualty. If you cannot switch off, remember the casualty is still electrified,
and take care not to become the second victim: push or pull them clear using dry
insulating material — dry wood, rope, clothing, rubber, plastic. Never use metal
or anything damp. Sometimes it is easier to move the conductor off the casualty
than the casualty off the conductor. Protect them from injury if they will fall.

**Call for help immediately** — 000 — especially if the casualty is unconscious.
Send someone else to call while you begin treatment.

**Resuscitation.** If the casualty is not breathing and has no pulse, start CPR
at once and do not stop until help takes over. Give **2 breaths to 30 chest
compressions**, repeating the cycle. Compressions are on the lower half of the
breastbone, centre of the chest, heels of both hands one on top of the other,
arms straight, about **4 to 5 cm** deep on an adult (much less on a child) at
roughly **100 compressions per minute**. Excessive force breaks ribs and can
puncture a lung, so firm and controlled, not violent. Correctly applied
compressions produce a pulse you can feel at the neck. Stop compressions
periodically to check the carotid pulse; if a pulse returns, stop compressions
but keep checking it — rescue breathing may still be needed. A casualty who has
stopped breathing may still have a pulse and need breaths only; if the heart has
stopped, both are needed.

Every electric shock casualty needs medical assessment even if they seem fine —
cardiac rhythm problems can develop later.

>! This is the outline only. Every tradesperson should hold a current first aid
>! and CPR certificate and refresh it, because recommended procedures change. If
>! your apprenticeship did not include a first aid course, enrol in one.

## On the job

- One open contact in the series string stops the compressor — walk the rung with
  a voltmeter.
- Pump-down control switches the solenoid, and the LP switch stops the compressor.
- Crankcase heater on well before the first start; check rotation on three-phase.
- Size from the nameplate FLA, provide a lockable isolator within sight of the
  unit, and earth to clean metal.
- Dead tests first: continuity, insulation resistance, polarity — then energise.
- Disconnect electronics before applying 500 V DC insulation tests.
- Rescue with dry insulating material only, call 000, then 2 breaths to 30
  compressions.
`,
          quiz: [
            {
              q: "In a pump-down control circuit, what does the thermostat actually switch, and what stops the compressor?",
              options: [
                "The thermostat switches the compressor contactor directly; the overload stops the compressor",
                "The thermostat switches the liquid line solenoid valve; the low pressure switch stops the compressor once the evaporator is pumped out",
                "The thermostat switches the crankcase heater; the high pressure switch stops the compressor",
                "The thermostat switches the condenser fan; the oil pressure switch stops the compressor",
              ],
              answer: 1,
              explain: "Pump-down puts the thermostat in charge of the solenoid. Closing the solenoid starves the evaporator, suction pressure falls, and the LP switch then stops the compressor — leaving refrigerant stored in the receiver rather than migrating to the crankcase during the off cycle.",
            },
            {
              q: "Why must electronic controllers and variable speed drives be disconnected before an insulation resistance test?",
              options: [
                "They give a falsely high reading",
                "The 500 V DC test voltage will damage or destroy their semiconductors",
                "They interfere with the earth continuity test instead",
                "The test cannot be performed on any circuit containing a transformer",
              ],
              answer: 1,
              explain: "An insulation tester applies 500 V DC — far beyond what control electronics can survive. Isolate or link out sensitive equipment, note it on the test sheet, and test the wiring itself. A falsely low reading, not a high one, is what connected electronics usually cause.",
            },
            {
              q: "A three-phase scroll compressor is started for the first time and makes a loud rushing noise while discharge pressure barely rises. What should you do?",
              options: [
                "Let it run for ten minutes to settle in",
                "Add refrigerant, since low discharge pressure indicates undercharge",
                "Shut it down immediately — this is reverse rotation; isolate and swap two phases at the isolator",
                "Replace the high pressure switch, which is limiting the head pressure",
              ],
              answer: 2,
              explain: "A scroll running backwards will not pump and is damaged quickly, so the response is immediate shutdown and a phase swap. Charging on a false low-pressure reading would leave the machine overcharged as well as damaged.",
            },
            {
              q: "You must free a casualty who is still in contact with a live conductor and you cannot switch off the supply. What do you use?",
              options: [
                "A metal tool with a rubber-covered handle",
                "Dry insulating material such as dry wood, rope, clothing, rubber or plastic",
                "A damp cloth, which reduces arcing",
                "Your hands, provided you are wearing leather gloves",
              ],
              answer: 1,
              explain: "Only dry insulating material. Metal conducts even through a rubber grip that may be damaged, and moisture makes any material conductive — both would make you the second casualty. Push or pull the casualty clear, or move the conductor away from them.",
            },
            {
              q: "What is the correct CPR ratio and compression depth for an adult electric shock casualty with no pulse?",
              options: [
                "5 breaths to 15 compressions, 2 to 3 cm deep",
                "2 breaths to 30 compressions, about 4 to 5 cm deep, at roughly 100 compressions per minute",
                "1 breath to 10 compressions, as deep as possible",
                "Compressions only, 60 per minute",
              ],
              answer: 1,
              explain: "Two breaths then thirty compressions, repeated, with compressions about 4 to 5 cm deep at around 100 per minute on the lower half of the breastbone. Too much force breaks ribs and can puncture a lung, so it is firm and controlled — and every casualty needs medical assessment afterwards.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
