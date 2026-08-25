/* =========================================================================
   Course content, module 105 — R1.5 Refrigerant controls and metering devices.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 5 — Refrigerant controls.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Chapter 5, Refrigerant controls",
    "Expansion valve and controller manufacturers' selection data (Danfoss, Emerson/Alco, Sporlan) — valve capacity tables, bulb charges and MOP designations",
    "Australia and New Zealand Refrigerant Handling Code of Practice (AIRAH) — recovery, evacuation and charging when a metering device is replaced",
  ];

  const MODULES = [
    {
      id: "v1-refrigerant-controls",
      stream: "v1",
      title: "R1.5 · Refrigerant controls and metering devices",
      blurb: "How liquid refrigerant is metered into the evaporator: hand valves, floats, automatic and thermostatic expansion valves, electronic valves and the capillary tube.",
      lessons: [

        /* ============================================================== */
        {
          id: "metering-device-basics",
          title: "What a metering device does, and the simplest one",
          minutes: 11,
          simple: "The metering device is the doorway between the high-pressure side and the low-pressure side of a fridge. It is a deliberate restriction: the compressor sucks refrigerant out of the evaporator faster than the doorway lets it back in, so one side stays squeezed and the other stays cheap and cold. Think of a bath with the tap barely cracked open and the plug pulled — the level in the bath depends on which of the two wins.",
          refs: REFS,
          content: `
Every vapour-compression system has four working parts: a compressor, a
condenser, a metering device and an evaporator. Three of them are easy to
picture — one squeezes, one dumps heat outdoors, one soaks heat up. The fourth
is the one apprentices skate over, and it is the one that causes most of the
service calls you will ever attend.

!FIG[cycle-loop]

## Two jobs, in this order

A refrigerant control — the trade also calls it a **metering device** or an
**expansion device** — has to do two things at once:

1. **Drop the pressure.** High-pressure liquid arrives from the condenser at a pressure whose saturation temperature is well above ambient. The control has to reduce it to a pressure whose saturation temperature is *below* the temperature of whatever you are trying to cool. That is the whole trick of refrigeration: choose the boiling point with pressure.
2. **Meter the flow.** It must feed the evaporator at the same rate the evaporator is boiling refrigerant off — enough that as much of the coil as possible is wet and working, but never so much that unboiled liquid runs out of the coil and reaches the compressor.

Those two duties pull against each other, and every device in this module is
just a different engineering answer to that tension.

## Why a plain restriction works

A metering device is, at heart, a restriction placed in the pipework. The
compressor pumps vapour out of the low side and pushes it into the high side.
Refrigerant flows back from high to low through the restriction. Provided the
compressor can pump vapour away *faster* than the restriction lets liquid
through, a pressure difference is created and held.

That difference is not a side effect — it is the point. It is what keeps the
evaporator pressure low enough for the refrigerant to boil at, say, −10 °C so
it can steal heat out of a coolroom, and what keeps the condenser pressure high
enough for the same refrigerant to condense at 45 °C and dump that heat to a
35 °C carpark.

So the compressor and the metering device are two ends of the same tug-of-war,
and they are in **series**. Their capacities must match at design conditions.
If they do not, the system simply finds a new balance point somewhere else —
usually one with a suction pressure that is too low, a head pressure that is
too high, or both. You will meet that idea again in the capillary tube lesson,
where it bites hardest.

## Flash gas: the price of the pressure drop

Nothing outside the system heats the refrigerant as it passes through the
valve. The liquid arrives warmer than its new, lower saturation temperature, so
part of it must boil immediately to cool the rest down. That is **flash gas**.
It does no useful cooling in the coil — it has already used its latent heat
cooling its own liquid — so the more flash gas you make, the less of each
kilogram of refrigerant is left to do the job.

This is why liquid line **subcooling** matters, and why a hot liquid line, a
long uninsulated run in the sun, or a partly blocked drier all cut capacity.
Warm liquid entering the valve means more flash gas, which means a valve that
was correctly sized on paper is now short of capacity.

## The eight families of control

| Control | What it senses | What it holds constant | Typical use |
|---|---|---|---|
| Hand expansion (needle) valve | nothing — set by hand | a fixed opening | industrial, liquid recirculation |
| Low-side float (LSF) | liquid level in the evaporator | evaporator liquid level | flooded beverage and liquid chillers |
| High-side float (HSF) | liquid level in the float chamber | high-side liquid level | centrifugal chillers, ammonia plant |
| Automatic expansion valve (AEV) | evaporator pressure | evaporator pressure | small, constant-load equipment |
| Thermostatic expansion valve (TXV) | coil outlet temperature and evaporator pressure | superheat | most commercial DX systems |
| Thermal-electric valve | suction vapour temperature (thermistor) | superheat | packaged and reverse-cycle units |
| Electronic valve (EEV) | electronic signal from a controller | whatever the controller is told to hold | supermarket and modern packaged plant |
| Capillary tube | nothing — fixed restriction | nothing | domestic and small sealed systems |

Read down the second column and a pattern appears. Every control in the list
works off **pressure changes**, **temperature changes**, **volume or level
changes**, or some combination — there is nothing else available to it.

## The hand-operated expansion (needle) valve

The oldest answer is the simplest: fit a fine-threaded needle valve in the
liquid line and let an operator set it. The valve is a hand wheel, a stem, a
packing nut, an index pointer and a needle seating in an orifice. Crack it open
and it feeds; wind it in and it starves.

Its virtue is that nothing can go wrong with it. Its vice is that it has no
brain. It suits large industrial installations — ice plants, cold storage
warehouses — where the load barely changes, the compressor runs continuously,
and there is an operator on site who can watch a gauge and tweak it.

It is a poor choice anywhere the load swings or the compressor cycles on a
thermostat. Every time conditions change, someone has to re-set it, and nobody
is going to do that on a small system in the back of a milk bar.

### Where you still find them: liquid recirculation

Hand expansion valves are alive and well in industrial **liquid recirculation**
plant, especially ammonia. Cold liquid is pumped from a big accumulator vessel
through the evaporators at a rate far above what the coils can boil — deliberate
overfeed, typically several times the evaporating rate — so every coil is
completely flooded no matter what the load is doing. The unboiled liquid simply
returns to the accumulator, where vapour separates off to the compressor and
liquid is pumped round again.

Because close metering is unnecessary in that arrangement, a cheap hand valve
is entirely adequate. Flood-back is prevented not by the valve but by a
**thermostat-controlled solenoid valve** upstream of it, which shuts the feed
off when the coil is no longer needed or when the compressor stops.

>! The high side stays pressurised after shutdown on any valve-controlled
>! system, including a hand valve. Never crack a fitting to "see if it feeds".
>! Fit gauges, and recover refrigerant to an approved cylinder before opening
>! any part of the system — under the Ozone Protection and Synthetic Greenhouse
>! Gas legislation, venting is an offence and you need an ARCtick licence to be
>! handling the refrigerant at all.

## On the job

- If you cannot explain what a system's metering device is *sensing*, you cannot fault-find it. Find that out first.
- Suction pressure too low and head pressure too high together points at a restriction, not a shortage of gas — the compressor is out-pumping the doorway.
- Flash gas in the liquid line (bubbles in the sight glass) starves any metering device, even a perfectly good one.
- A hand valve on a recirculation plant is not "old junk" — it is the right tool for a constant, deliberately overfed load.
`,
          quiz: [
            {
              q: "Why does a restriction in the liquid line allow the compressor to maintain two different pressures?",
              options: [
                "The restriction cools the refrigerant, and cold refrigerant has lower pressure",
                "The compressor can pump refrigerant out of the low side faster than the restriction lets it flow back in",
                "The restriction converts liquid to vapour, and vapour cannot flow backwards",
                "The restriction acts as a one-way valve that seals the high side from the low side",
              ],
              answer: 1,
              explain: "It is a race between two flow rates. The compressor removes vapour from the low side faster than the metering device passes liquid into it, so the low side is drawn down and the high side is built up. It is not a check valve — most metering devices leak freely in both directions when stopped, which is exactly why capillary systems equalise on shutdown.",
            },
            {
              q: "A liquid line runs 12 m uninsulated across a hot roof before reaching the expansion valve. What is the most likely effect on the valve?",
              options: [
                "The valve will produce more flash gas and effectively lose capacity",
                "The valve will feed more liquid because warm liquid is less viscous",
                "Nothing — the valve senses only evaporator conditions",
                "Superheat will fall because the liquid carries more heat into the coil",
              ],
              answer: 0,
              explain: "Heat picked up in the liquid line destroys subcooling. More of each kilogram flashes to vapour across the valve, so less liquid is left to boil in the coil and the valve behaves as if it were undersized. Warm liquid does not increase mass flow; it reduces the useful part of it.",
            },
            {
              q: "A hand-operated expansion valve is a sensible choice on which of these jobs?",
              options: [
                "A supermarket display case that defrosts six times a day",
                "A reverse-cycle split system in a house",
                "An industrial liquid-recirculation coolroom coil with a solenoid valve upstream",
                "A beverage cooler with a widely varying drinking load",
              ],
              answer: 2,
              explain: "Recirculation systems deliberately overfeed every coil and return the surplus liquid to an accumulator, so precise metering is unnecessary and a cheap, trouble-free hand valve is adequate — the solenoid does the stopping and starting. The other three all have swinging loads or cycling compressors, which a hand valve cannot follow.",
            },
            {
              q: "Which statement about the two duties of a refrigerant control is correct?",
              options: [
                "It must raise the liquid pressure so the refrigerant can reach the evaporator",
                "It must keep the evaporator completely dry of liquid at all times",
                "It must reduce the liquid pressure and meter flow so the coil is as fully supplied as possible without overfilling",
                "It must hold the compressor discharge temperature constant",
              ],
              answer: 2,
              explain: "The two duties are pressure reduction and flow control, and the flow control target is a fully used coil without liquid escaping into the suction line. Keeping the coil dry would waste most of its surface, and no metering device has any influence on discharge temperature except indirectly through superheat.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "float-controls",
          title: "Float controls: low-side and high-side",
          minutes: 13,
          simple: "A float control is a ballcock for refrigerant, exactly like the one in a toilet cistern. A ball rides on the liquid surface; when the level drops the ball drops and pulls a needle off its seat to let more in. A low-side float watches the level in the evaporator itself; a high-side float watches a small chamber next to the condenser and passes on whatever has condensed.",
          refs: REFS,
          content: `
Float controls are level-operated valves. They do not care about pressure or
superheat — they care only about where the liquid surface sits. That makes them
the most direct control in the module, and it also makes them the only family
that runs a **flooded** evaporator, where the coil is deliberately kept full of
boiling liquid rather than dried out at the outlet.

## Low-side float control (LSF)

The float ball sits on the low-pressure side, in the evaporator or in a float
chamber connected to it. As the compressor draws vapour away, liquid boils off
and the level falls. The falling float opens a needle valve, liquid enters from
the receiver, the level rises, the float rises, and the needle closes again.

It is a **positive** control: it opens the instant the level falls and closes
the instant it recovers. It will work provided there is enough refrigerant in
the system to fill the float chamber, and it does not care what the total charge
in the receiver is. That tolerance is why an LSF evaporator can be run on a
multiple system, alongside other LSF coils or alongside DX coils fed by
thermostatic expansion valves, all on one condensing unit.

### Flooded operation, and the oil problem

Because the coil is full of liquid, the inside wall is wetted almost everywhere,
and wetted-wall heat transfer is far better than the vapour-blanketed transfer
you get at the dry end of a DX coil. That is the big prize.

The penalty is oil. Oil that leaves the compressor arrives at the evaporator and
has nowhere to go — there is no fast, dry vapour stream to sweep it home. LSF
evaporators deal with this by taking suction through a **U-shaped tube fitted
with a wire-mesh wick**, which lifts oil off the liquid surface and into the
vapour stream where it can be dragged back to the compressor. The float is
calibrated so the liquid level sits at exactly the point where the suction line
does not frost, yet oil still returns.

### Calibration and levelling

Calibration is a bench job: a fixture and spacer blocks are used to measure
where the ball sits when the needle is closed, and the level is corrected by
carefully **bending the float arm** with a tool. Nobody adjusts a float with a
spanner in the field by feel.

Installation matters just as much, because a level-sensing device only makes
sense on a level evaporator:

| Fault | What happens |
|---|---|
| Evaporator slopes up towards the front | coil receives too little refrigerant; needle can sit above the liquid, causing wear and noise; oil returns badly and an excessively thick oil blanket forms |
| Evaporator slopes up towards the rear | liquid runs down the suction line, causing frosting of the suction line and oil pumping at the compressor |
| Evaporator level | needle stays submerged, level holds, oil returns as designed |

### Vertical low-side floats

Instantaneous beverage coolers of the Temprite type use a **vertical** float. The
float rises with the liquid and pushes a needle *into* its seat to shut the feed
off. Levelness still matters, but it is less critical than with a horizontal
float mechanism.

Their neat feature is a **replaceable needle-and-seat cartridge** that can be
changed without unsweating or unbolting the evaporator header. To change one:
pump the evaporator down, unbolt the liquid line flange from the float header
(usually two cap screws), lift the cartridge out by screwing a bolt into its
centre, then drop the new cartridge in. Often the old cartridge only needs
cleaning, not replacing.

### Where the LSF stands today

| Advantages | Disadvantages |
|---|---|
| Flooded coil gives a higher rate of heat transfer than a DX coil, because more liquid touches the coil wall | The float assembly is expensive to make and awkward to service |
| The deep column of liquid lets beverage coils be built inside the shell, giving a compact, very efficient cooler | Flooded evaporators are harder to defrost |
| Can be used on multiple systems, alongside other floats or TXV-fed DX coils | Needs a much larger refrigerant charge for the same coil area |

Outside beverage and liquid cooling, the low-side float has largely disappeared
from commercial refrigeration, but it remains a valuable control in industrial
plant.

## High-side float control (HSF)

The high-side float does the same job from the opposite end. It sits on the
**high-pressure** side, between the condenser and the evaporator, and holds a
constant level in its own small float chamber. Vapour condenses in the
condenser, drains into the chamber, lifts the ball, and the ball opens the port
to release a matching amount of liquid to the evaporator.

Here is the elegant part: the condenser condenses vapour at exactly the same
rate the evaporator boils it. So a device that passes on whatever arrives in the
chamber is automatically feeding the evaporator at the rate it is being emptied.
The HSF controls evaporator charge **indirectly** — it never looks at the
evaporator at all. When the compressor stops, the chamber level drops, the valve
closes, and it stays closed until the compressor restarts.

### The critical charge

Because the float chamber holds only a small, fixed quantity of liquid, three
things follow immediately:

- there can be **no other liquid receiver** on the high side
- the bulk of the charge always sits in the **evaporator**
- the charge is **critical** — it must be weighed in, not guessed.

| Charge error | Result |
|---|---|
| Overcharged | the float overfeeds, liquid floods back to the compressor; if badly overcharged the valve cannot throttle enough for the compressor to pull the evaporator pressure down |
| Undercharged | float operation becomes erratic and the evaporator is starved |

>! Never "top up" a high-side float system by watching the sight glass. There
>! is no receiver to absorb an error, and an overcharge sends liquid straight to
>! the compressor. Recover, weigh, and charge to the nameplate mass.

### Where it is used

Once the standard control on domestic refrigerators, the HSF was replaced there
by the capillary tube long ago. It survives in industrial and large commercial
plant: flooded shell-and-tube water chillers for air-conditioning — typically
with a centrifugal compressor and a water-cooled shell-and-tube condenser — and
ammonia systems. In a flooded chiller the liquid expands from the float chamber
into the shell through a short line, so no separate expansion valve is needed.

Large machines often add an **economiser**: a second high-side float staged
between the condenser and the evaporator float, so that flash gas is separated
off and returned to an intermediate point in the compressor, and only cold
liquid reaches the evaporator. Less flash gas at the evaporator means more
useful refrigerating effect per kilogram.

One hard limitation: because the HSF depends on being the *only* path for
condensed liquid, high-side floats **cannot be used in multiple** or in parallel
with other types of refrigerant control. One condenser, one float, one
evaporator circuit.

## What to remember

- LSF senses the level where the boiling happens; HSF senses the level where the condensing happens and passes it on.
- Both run flooded coils, both give excellent heat transfer, both need more refrigerant than a DX coil.
- LSF tolerates charge variation; HSF has a critical charge and no receiver.
- LSF can share a condensing unit with other coils; HSF cannot.
- A level control on an out-of-level evaporator is not a control at all.
`,
          quiz: [
            {
              q: "Why can a low-side float evaporator be run on a multiple system with other coils, while a high-side float cannot?",
              options: [
                "The LSF is a pressure-operated device and pressure is common to all coils",
                "The LSF only needs enough refrigerant to fill its own float chamber and is indifferent to total charge, while the HSF must be the only path for condensed liquid",
                "The HSF is too small to feed more than one coil",
                "The LSF is fitted with a solenoid valve and the HSF is not",
              ],
              answer: 1,
              explain: "An LSF holds its own level regardless of what the rest of the system is doing, so it coexists happily with other floats or TXV coils on one condensing unit. The HSF works by passing on everything that condenses, so a second liquid path or a receiver destroys the relationship it depends on.",
            },
            {
              q: "A horizontal low-side float evaporator has been installed sloping upwards towards the rear. What symptom would you expect?",
              options: [
                "Frosting of the suction line and oil pumping at the compressor",
                "A starved coil with the needle riding above the liquid",
                "High head pressure and low suction pressure",
                "The float valve locking shut and the compressor short cycling",
              ],
              answer: 0,
              explain: "Sloping up at the rear lets liquid run down the suction line, which frosts the line and carries liquid to the compressor, showing up as oil pumping. The starved coil with a needle above the liquid is the opposite fault — sloping up towards the front.",
            },
            {
              q: "A high-side float chiller has been overcharged by several kilograms. What happens?",
              options: [
                "The extra refrigerant is stored in the receiver and nothing changes",
                "The float closes and the system pumps down on the low-pressure switch",
                "The float overfeeds the evaporator, liquid floods back, and the compressor may not be able to pull the suction pressure down",
                "Head pressure falls because the condenser is flooded",
              ],
              answer: 2,
              explain: "There is no receiver on an HSF system — the surplus has nowhere to sit but the evaporator, so the float overfeeds and floods the compressor, and a serious overcharge stops the valve throttling enough for the suction pressure to come down. A flooded condenser raises head pressure, it does not lower it.",
            },
            {
              q: "What is the wire-mesh wick in the U-shaped suction tube of a low-side float evaporator for?",
              options: [
                "Filtering solid contaminants out of the returning vapour",
                "Lifting oil out of the liquid refrigerant and into the suction vapour so it returns to the compressor",
                "Preventing liquid slugs reaching the compressor during pull-down",
                "Damping float oscillation by slowing the level change",
              ],
              answer: 1,
              explain: "A flooded coil has no fast dry vapour stream to sweep oil along, so the wick lifts oil off the liquid surface into the vapour where it can be carried home. It is an oil-return device, not a filter or an accumulator.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "automatic-expansion-valve",
          title: "The automatic expansion valve (AEV)",
          minutes: 10,
          simple: "The automatic expansion valve holds one thing steady: the pressure in the evaporator. A spring pushes the valve open and the coil pressure pushes it shut, so it opens and closes to keep the coil at whatever pressure the spring is set for. The trouble is that it does the wrong thing when the load rises — it throttles back just when you want more cooling.",
          refs: REFS,
          content: `
The automatic expansion valve, written AEV or AXV, is sometimes called a
constant-pressure valve, and that second name is a much better description of
what it actually does. Understanding it properly is worth the effort even though
you will rarely fit one, because it is the clearest illustration of what happens
when a control is built to hold the wrong variable steady.

## Construction

The valve is a needle and seat, a bellows or diaphragm, and a spring whose
tension is set by an adjusting screw under a sealing cap. A strainer at the
liquid inlet keeps grit and swarf out of the seat — the same precaution you find
on every fine-orifice control in the trade.

## Two opposing forces

Only two pressures matter:

- **P(e), evaporator pressure**, acting on one face of the bellows or diaphragm, pushing the valve **closed**
- **P(s), spring pressure**, acting on the other face, pushing the valve **open**.

With the compressor running, the valve takes up whatever position makes these
two equal. If the evaporator pressure rises above the spring setting, the valve
throttles down; if it falls below, the valve opens up. The result is a coil held
at a constant pressure — and therefore, since the coil is full of boiling
refrigerant, a constant coil temperature.

That last point is genuinely useful in a few niches: a constant coil temperature
is exactly what you want on equipment that must never ice up, or where a fixed
plate temperature is part of the product specification.

## Why it fights you under load

Now think through what a rising load does. More heat into the coil means faster
boiling, which pushes the evaporator pressure up. The AEV sees the pressure
rising and **throttles the liquid back** to hold the setting, which limits how
much of the coil surface is wetted.

| Load condition | AEV response | Effect on the coil |
|---|---|---|
| Heavy load | throttles severely | only a small part of the coil holds liquid; capacity and efficiency are lowest exactly when you need them most |
| Light load | opens up and floods more surface | most of the coil holds liquid; if the load keeps falling the coil can overfeed and pass liquid into the suction line |

So the valve behaves in the opposite direction to a thermostatic expansion
valve. With a TXV, the greater the load, the greater the refrigerant flow. With
an AEV, the greater the load, the more the valve restricts.

In a properly designed system, overfeeding at very low load rarely gets far,
because the thermostat cuts the compressor out before the load falls past the
critical point. That is a designed-in escape, not a virtue of the valve.

## The other limitations

- **It must be set for the lowest coil temperature required in the cycle.** The coil pressure never changes during a running cycle, so the setting has to suit the coldest condition the plant must reach. You therefore give up all the capacity you could have had earlier in the run, when a flooded coil would naturally have sat at a higher, more efficient suction pressure.
- **It cannot be used with a low-pressure motor control.** An LP switch cycles the compressor by watching suction pressure fall during the running cycle. An AEV exists to stop suction pressure falling. The two are incompatible by definition — you need a thermostat instead.
- **Poor efficiency at high load** is the reason it has largely disappeared, displaced by controls that are both more efficient and often cheaper.

## Adjusting one

The adjusting screw sets **evaporator pressure**, not superheat. Screwing in
raises the spring force, which raises the pressure the valve holds, giving a
warmer coil and a higher suction pressure. Backing it out lowers the held
pressure and gives a colder coil.

The method is: fit gauges, run the plant at a steady load, adjust in small
increments, and allow several minutes between moves for the coil to settle. Do
not chase the gauge — a constant-pressure valve takes time to find its new
position.

>! An AEV at very low load will keep opening to defend its pressure setting, and
>! can push liquid out of the coil into the suction line. If you find one
>! serving a load that has been reduced since installation — a coolroom now half
>! empty, or a coil with new fans — check the suction line for sweating or frost
>! and check the compressor for oil dilution before you leave site.

## AEV against TXV, side by side

| | Automatic expansion valve | Thermostatic expansion valve |
|---|---|---|
| Holds constant | evaporator pressure | superheat at the coil outlet |
| Senses | coil pressure only | coil outlet temperature and coil pressure |
| As load rises | flow decreases | flow increases |
| Coil use at full load | poor — only part of the surface is wetted | full surface active |
| Works with an LP motor control | no | yes |
| Suits varying loads | no | yes |

## What to remember

- The AEV holds evaporator pressure, so it holds coil temperature — nothing else.
- It throttles as load increases, which is backwards for capacity.
- It must be set for the coldest condition of the cycle, so it wastes capacity the rest of the time.
- It rules out low-pressure motor control.
- Adjusting it changes the coil pressure, not the superheat — a completely different adjustment from the one on a TX valve.
`,
          quiz: [
            {
              q: "The load on an AEV-controlled coil suddenly increases. What does the valve do, and why?",
              options: [
                "Opens further, because faster boiling needs more liquid",
                "Throttles back, because the rising evaporator pressure acts to close the valve against the spring",
                "Stays put, because it senses only the outlet temperature",
                "Opens fully, because the spring pressure rises with temperature",
              ],
              answer: 1,
              explain: "The rising coil pressure is the closing force, so the valve restricts to defend its pressure setting. That is the AEV's central weakness — it gives least flow at the moment the plant most needs capacity. Only a TXV or an electronic valve increases flow with load.",
            },
            {
              q: "Why can an automatic expansion valve not be used with a low-pressure motor control?",
              options: [
                "The valve leaks on the off cycle, so the pressures equalise and the switch never resets",
                "An LP switch needs a substantial fall in suction pressure during the running cycle, and the AEV exists to prevent exactly that",
                "The AEV requires a three-phase supply that the LP switch cannot interrupt",
                "The LP switch would cause the valve to hunt",
              ],
              answer: 1,
              explain: "Cycling on an LP switch depends on the suction pressure dropping as the space pulls down. A constant-pressure valve holds the suction pressure steady, so the switch would never reach cut-out. A thermostat is used instead.",
            },
            {
              q: "A technician screws the adjusting stem of an AEV clockwise (in). What is the direct result?",
              options: [
                "Superheat increases",
                "The needle is mechanically pushed towards its seat, restricting flow permanently",
                "Spring pressure rises, so the valve holds a higher evaporator pressure and a warmer coil",
                "Bulb pressure rises, opening the valve",
              ],
              answer: 2,
              explain: "The AEV's screw sets the spring force, which is the opening force balanced against coil pressure — so more spring means a higher held pressure and a warmer coil. Superheat and bulb pressure belong to the TX valve, which has no bulb equivalent here at all.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "txv-operation",
          title: "The thermostatic expansion valve and its three pressures",
          minutes: 14,
          simple: "A TX valve is a self-adjusting doorway with a temperature sensor clamped to the pipe leaving the coil. If the vapour leaving the coil gets warm, the sensing bulb's pressure rises and pushes the valve open to feed more liquid; if the vapour gets cold, the spring and coil pressure push the valve shut. Balanced, it keeps the coil as full as it can be while still sending only dry vapour to the compressor.",
          refs: REFS,
          content: `
The thermostatic expansion valve — TXV, TX valve, or just "the valve" on site —
is the most important control in the trade. It is a precision device that meters
liquid into the evaporator in exact proportion to the rate at which the coil is
boiling it off, and it does this by holding a fixed amount of **superheat** at
the coil outlet.

Two inputs and only two: the **temperature of the vapour leaving the
evaporator**, and the **pressure inside the evaporator**. Everything the valve
does follows from comparing those.

## Construction

A TX valve is three sub-assemblies bolted or welded together:

- **The power element** — the sensing bulb, its capillary, the diaphragm and the diaphragm case. This is the sensing and actuating part.
- **The valve mechanism** — push rods running from the diaphragm down to a pin and pin carrier, seating in an orifice.
- **The superheat adjustment** — a spring under the pin carrier and an adjusting stem that changes its compression.

Everything else — spring guide, stem packing, sealing cap — exists to keep the
spring and pin carrier aligned and to stop refrigerant leaking out past the
stem. A **strainer** in the liquid inlet protects that small, precisely machined
seat from swarf, scale and filings.

## The saturation rule that makes it work

While liquid and vapour are together in the coil, the vapour is **saturated**:
it sits at the same temperature as the boiling liquid, and one pressure means
one temperature. Only when the last drop of liquid has boiled can the vapour
start to get warmer than that. The temperature it gains beyond the saturation
point is superheat, and it is direct proof that the coil is not passing liquid.

So the valve is operated by the difference in temperature between the liquid
boiling in the coil and the superheated vapour leaving it.

## The three pressures

!FIG[txv-balance]

- **P1 — bulb pressure**, on the top of the diaphragm. It **opens** the valve.
- **P2 — evaporator pressure**, on the underside of the diaphragm. It **closes** the valve.
- **P3 — spring pressure**, applied to the pin carrier and transmitted through the push rods to the underside of the diaphragm. It also **closes**.

When the valve is modulating:

**P1 = P2 + P3**

That single line is the whole valve. Note that the adjustable spring assists the
evaporator pressure in closing, which leaves the power element as the one
automatic variable — the part that continuously repositions the pin in response
to changing superheat.

The bulb is partly filled with liquid and partly with vapour, so like any
saturated vessel its pressure is set purely by its temperature. Warm the bulb
and P1 rises; cool it and P1 falls.

## Worked example — an R134a valve at normal temperature

Take a system with R134a in both the coil and the bulb, and the spring set at
**52 kPa**.

Evaporator pressure at the valve outlet and at the coil outlet: **171 kPa
gauge**.

1. Closing force = evaporator pressure + spring pressure = 171 + 52 = **223 kPa gauge**
2. So the bulb pressure must reach just over **223 kPa gauge** before the pin can lift.
3. From the R134a pressure-temperature chart, 223 kPa gauge is **3 °C**. The valve therefore starts to open when the bulb reaches 3 °C.
4. From the same chart, 171 kPa gauge is **−2 °C**, so the refrigerant is boiling in the coil at −2 °C.
5. Superheat = bulb temperature − saturated coil temperature = 3 − (−2) = **5 K**.

Now follow what happens next. The valve opens, more liquid enters, and the wet
part of the coil now extends closer to the bulb. The vapour has less coil left
in which to superheat, so superheat drops to, say, **3 K**. The bulb cools to
**0 °C**, where the R134a chart gives **191 kPa gauge**. Since 191 kPa is less
than the 223 kPa closing force, the spring and coil pressure push the pin back
towards its seat.

The valve is not hunting when it does this — it is hunting for balance, and it
settles at whatever opening keeps P1 equal to P2 plus P3.

## Worked example — the same valve running cold

Let the same cabinet pull down until the evaporator pressure has fallen to
**31 kPa gauge**, which on the R134a chart is **−20 °C**. The spring has not
been touched, so it is still 52 kPa.

1. Closing force = 31 + 52 = **83 kPa gauge**
2. From the chart, 83 kPa gauge is **−13 °C** — that is the bulb temperature needed to open the valve.
3. Superheat = −13 − (−20) = **7 K**.

The superheat has crept up from 5 K to 7 K without anyone touching the
adjustment. That is not a fault — it is the shape of the refrigerant's
saturation curve. At lower temperatures the curve is flatter, so the same fixed
52 kPa of spring corresponds to more kelvins of temperature. Over the normal
operating range of a plant the drift is small enough to ignore, which is why a
valve can be set once and left.

## What happens when the load changes

Suppose the load on the coil rises. The refrigerant boils faster, so the
evaporator pressure and temperature rise — and the bulb, sitting on a pipe
carrying that warmer vapour, warms with it.

Now look at the diaphragm. The extra evaporator pressure pushes up from
underneath. The extra bulb pressure pushes down from on top. The two increases
largely **cancel**, so the valve simply repositions itself to pass more liquid
with only a negligible change in superheat.

This is the property that makes the TXV so good: the flow rate rises with the
load, so the coil stays fully active across a wide range of conditions — the
exact opposite of the automatic expansion valve. The one condition is that there
must be enough **pressure drop across the valve** for it to pass its rated flow.

## What a TX valve is not

Learners regularly credit the valve with jobs it cannot do. A TX valve is **not**:

- a temperature control (that is the thermostat)
- a suction pressure control (that is an EPR or a crankcase pressure regulator)
- a control for compressor running time
- a humidity control.

Its only function is to keep the coil as completely refrigerated as possible
under all load conditions.

## Advantages

- Compact and flexible to install — the valve can be well away from the machine.
- Works over a wide range of temperatures and loads.
- Maintains high gas velocity in continuous-tube evaporators, which prevents oil logging.
- Flow increases with load, so cooling capacity rises when it is needed.
- Because the valve depends on nothing but its own bulb and the coil, any number of TXV-fed or float-fed evaporators can be run on one condensing unit as a multiple system.

## On the job

- Say **P1 = P2 + P3** to yourself before touching any TX valve fault.
- The bulb senses temperature; it cannot know whether the vapour is wet or dry except through that temperature.
- Superheat naturally drifts up a little as the plant runs colder. Do not "fix" it by re-adjusting at low temperature.
- No pressure drop across the valve means no flow, no matter how good the valve is — check head pressure before condemning one.
`,
          quiz: [
            {
              q: "An R134a valve has a spring setting of 52 kPa and the evaporator pressure at the coil outlet is 171 kPa gauge (−2 °C). At what bulb temperature does the valve begin to open, and what superheat does that represent?",
              options: [
                "−2 °C, giving 0 K superheat",
                "3 °C (223 kPa gauge), giving 5 K superheat",
                "5 °C (250 kPa gauge), giving 7 K superheat",
                "0 °C (191 kPa gauge), giving 2 K superheat",
              ],
              answer: 1,
              explain: "Closing force is 171 + 52 = 223 kPa gauge, and 223 kPa gauge on the R134a chart is 3 °C. Superheat is the bulb temperature minus the saturated coil temperature: 3 − (−2) = 5 K. The 191 kPa/0 °C figure is where the valve closes again once extra liquid has cut superheat to 3 K.",
            },
            {
              q: "The same valve is left untouched and the plant pulls down until the evaporator pressure is 31 kPa gauge (−20 °C). Superheat is now measured at 7 K instead of 5 K. What does that mean?",
              options: [
                "The valve is faulty and the power element has lost charge",
                "The spring has weakened with age and needs re-adjusting",
                "It is normal — the flatter saturation curve at low temperature means the same 52 kPa of spring corresponds to more kelvins",
                "The bulb has been mounted in the wrong place",
              ],
              answer: 2,
              explain: "Closing force is 31 + 52 = 83 kPa gauge, which is −13 °C on the R134a chart, so superheat is −13 − (−20) = 7 K. Refrigerants change more degrees per kilopascal at low temperature, so superheat drifts up slightly as the plant gets colder. Re-adjusting at low temperature would leave the valve flooding at normal temperature.",
            },
            {
              q: "Why does a rise in evaporator load cause almost no change in the superheat a TXV holds?",
              options: [
                "The spring compresses as the valve body warms, cancelling the change",
                "The extra evaporator pressure under the diaphragm and the extra bulb pressure above it largely cancel, so the valve simply repositions",
                "The valve has a fixed orifice, so flow cannot change",
                "The bulb is insulated, so it does not sense the load change",
              ],
              answer: 1,
              explain: "Both diaphragm faces see the increase — the coil pressure from below and the bulb pressure from above — and they offset, leaving the pin free to move to a larger opening at the same superheat. That is why TXV flow rises with load while AEV flow falls.",
            },
            {
              q: "Which of these is a job the thermostatic expansion valve actually does?",
              options: [
                "Holds the coolroom air temperature at its setpoint",
                "Holds the suction pressure constant for the compressor",
                "Keeps the evaporator as fully refrigerated as possible while protecting the compressor from liquid",
                "Controls the humidity in the space by varying coil temperature",
              ],
              answer: 2,
              explain: "That is the valve's whole function, achieved by holding superheat. Space temperature is the thermostat's job, suction pressure regulation belongs to an EPR or CPR, and humidity is a consequence of coil selection and airflow — none of them are the TXV's responsibility.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "txv-superheat",
          title: "Measuring superheat and adjusting a TX valve",
          minutes: 12,
          simple: "Superheat is how many degrees warmer the pipe leaving the coil is than the temperature at which the refrigerant inside is boiling. You get it from two readings and one subtraction: clamp a thermometer on the pipe, read the gauge, convert the pressure to a temperature, and take one from the other. Most systems want between 4 and 8 K.",
          refs: REFS,
          content: `
Superheat is the single most useful number a refrigeration technician can
measure. It tells you whether the coil is starved or flooded, whether the
compressor is safe, and whether the valve is doing its job — and it costs you
two readings and one subtraction.

!FIG[superheat-measure]

## The measurement

1. **Measure the temperature of the vapour leaving the evaporator**, at a point right next to the sensing bulb. Use an accurate thermometer — a clamp-on thermocouple or a well-strapped probe — with the sensor insulated from ambient air, otherwise you will read a blend of pipe and room temperature and your answer will be optimistic.
2. **Measure the saturated suction temperature.** Read the low-side pressure, ideally at the evaporator outlet if there is a fitting, otherwise at the compressor. Convert it to a temperature with the pressure-temperature chart or the gauge's PT ring for that refrigerant.
3. **Subtract**: suction line temperature − saturated suction temperature = operating superheat.

### Worked example

An R134a coolroom coil. The clamp thermometer beside the bulb reads **6 °C**.
The gauge at the coil outlet reads **171 kPa gauge**, which on the R134a chart
is **−2 °C**.

Superheat = 6 − (−2) = **8 K**

That is at the very top of the normal band. The coil is being fed a little
conservatively, and there is capacity to be recovered — but before touching
anything, check the preconditions below.

>! If you read the pressure at the compressor instead of at the coil, you are
>! reading a pressure that has already dropped along the suction line, so the
>! saturation temperature you calculate is lower than the true coil temperature
>! and your superheat figure comes out **too high**. On a long or undersized
>! suction line the error can be several kelvins. Read at the coil where you can,
>! and note where you read when you write the figure down.

## Before you adjust anything

A superheat reading is only meaningful if the rest of the system is right.
Confirm all of this first:

- the system is **fully charged** — bubbles in the sight glass make every valve look undersized
- evaporator and condenser are **clean**, and airflow across both is normal with no short-circuiting or blocked returns
- the plant is running **close to design conditions**, not mid pull-down and not in or just out of defrost
- the **bulb is correctly mounted, clamped tight and insulated** on a suitable section of pipe
- the external equaliser, if fitted, is **connected and not capped**.

Most "faulty valves" turn out to be one of those five. Fixing the real cause and
re-measuring saves you from adjusting a valve to compensate for a dirty
condenser — and then having to undo it later.

## Adjusting

Technicians say "I opened the valve" or "I closed the valve". Strictly, that is
wrong: there is **no mechanical linkage** between the adjusting stem and the
pin. Turning the stem changes only the spring pressure P3, and the valve then
has to find a new superheat at which P1 again equals P2 + P3.

- **Screwing the stem in (clockwise) increases spring pressure, which increases superheat** and tends to starve the coil. Remember it as "screw in to increase".
- **Backing the stem out decreases spring pressure, which decreases superheat** and tends to flood the coil.

Method:

1. Measure and record the starting superheat.
2. Move the stem a small amount — a quarter to a half turn is plenty on most valves.
3. Wait for the system to settle. Fifteen to thirty minutes is realistic; a large coil takes longer.
4. Re-measure. Repeat if needed, in the same small steps.
5. Record the final figure, the conditions and where you took the pressure.

**Normal superheat is 4 to 8 K.** Do not disturb a factory setting unless your
own measurement shows the superheat is outside that band. Valves leave the works
set correctly far more often than not.

## What each direction of error looks like

| Setting | Symptoms | What is going on |
|---|---|---|
| Superheat too high (starved) | poor pull-down, low suction pressure, warm suction line, only part of the coil frosted or cold, compressor runs long or short cycles on the LP switch | the wet part of the coil is short, so much of the surface is doing little; the low suction pressure walks the machine towards cut-out |
| Superheat too low (flooded) | cold, sweating or frosted suction line right back to the compressor, noisy compressor, falling oil level or foaming, high suction pressure | liquid is leaving the coil; it dilutes the oil and can break valves or bearings |
| Correct | steady superheat in the 4–8 K band, coil evenly cold, dry suction line | full coil, dry vapour, compressor safe |

A recorder trace makes the same point. On a valve set with excessive superheat,
the low-side pressure falls quickly from cut-in and the valve does not properly
meter refrigerant right down to cut-out, so the coil is partly starved, cooling
is incomplete and the plant tends to **short cycle**. With the superheat
correctly set to a small value, the valve is still metering refrigerant right
down to the cut-out point, so the coil stays fully supplied and the running
cycle is longer and smoother.

>! Low superheat is not a clever way to squeeze out capacity. Liquid does not
>! compress. A slug reaching the cylinders can break a valve plate, bend a
>! connecting rod or wash the bearings dry, and the damage often shows up weeks
>! later as a burnt-out motor. If in doubt, set on the high side of the band and
>! come back to it.

## What to remember

- Two readings and a subtraction — pipe temperature minus saturated coil temperature.
- Read the pressure as close to the coil outlet as you can.
- 4 to 8 K is the normal band for most direct-expansion work.
- Screw in to increase superheat; out to decrease.
- Quarter turn, wait, re-measure. Never a full turn and walk away.
- Fix the charge, the coils and the airflow before you touch the stem.
`,
          quiz: [
            {
              q: "A clamp thermometer beside the bulb reads 6 °C and the gauge at the coil outlet reads 171 kPa gauge, which is −2 °C for R134a. What is the superheat?",
              options: ["4 K", "6 K", "8 K", "2 K"],
              answer: 2,
              explain: "Superheat is the line temperature minus the saturated coil temperature: 6 − (−2) = 8 K. Subtracting a negative number is where most learners lose the marks — and 8 K is at the top of the normal 4–8 K band, so it is worth investigating rather than ignoring.",
            },
            {
              q: "You take the suction pressure at the compressor rather than at the coil outlet on a long suction line. How does this bias your superheat calculation?",
              options: [
                "It reads too low, because the pressure rises along the line",
                "It reads too high, because the pressure drop along the line makes the calculated saturation temperature colder than the real coil temperature",
                "It has no effect, because pressure is the same everywhere in the low side",
                "It reads too high, because the compressor heats the gauge",
              ],
              answer: 1,
              explain: "Friction drops the pressure between coil and compressor, so the pressure you read converts to a saturation temperature below the real coil temperature, and the subtraction gives you more superheat than actually exists. Believing that figure could lead you to wind superheat down and flood the compressor.",
            },
            {
              q: "A TXV is holding 12 K superheat on a system that is fully charged with clean coils. Which adjustment is correct?",
              options: [
                "Screw the stem in (clockwise) about half a turn, wait, re-measure",
                "Back the stem out (anticlockwise) about half a turn, wait 15–30 minutes, re-measure",
                "Replace the valve — 12 K means the power element has failed",
                "Add refrigerant until superheat falls into the 4–8 K band",
              ],
              answer: 1,
              explain: "Twelve kelvin is a starved coil, so you need less spring pressure: back the stem out, in small steps, allowing the system to settle before re-measuring. Screwing in would make it worse, and adding gas to a fully charged system just raises head pressure and hides the real problem.",
            },
            {
              q: "Why is it wrong to say that the adjusting stem 'opens' or 'closes' a thermostatic expansion valve?",
              options: [
                "Because the stem is factory sealed and cannot be moved",
                "Because there is no mechanical linkage between stem and pin — the stem only changes spring pressure, so the valve settles at a new superheat",
                "Because the stem only changes the bulb charge pressure",
                "Because the stem operates the external equaliser, not the pin",
              ],
              answer: 1,
              explain: "The stem alters P3, and the valve then repositions itself until P1 again equals P2 + P3 — the pin opening ends up wherever the new superheat requires. It is a superheat adjustment only; nothing about it forces the pin towards or away from the seat.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "txv-equaliser-bulb-charges",
          title: "Equalisers, distributors, bulb mounting and bulb charges",
          minutes: 13,
          simple: "The underside of the valve diaphragm needs to know the pressure at the coil outlet, not at the coil inlet. On a coil that loses much pressure between the two — especially one fed through a distributor — a small pipe called the external equaliser carries the right pressure back to the valve. And the bulb can be filled in several different ways, each of which changes how the valve behaves when things get hot or cold.",
          refs: REFS,
          content: `
This lesson covers the four things that most often turn a good TX valve into a
badly behaved one: the equaliser, the distributor it usually goes with, where
the bulb is clamped, and what is inside the bulb.

## Internal versus external equalisation

The valve balance is P1 = P2 + P3, where P2 is "evaporator pressure". The
question is: *which* evaporator pressure?

- On an **internally equalised** valve, the pressure at the valve outlet — that is, the **coil inlet** — reaches the underside of the diaphragm through a passage inside the valve, or simply through the clearance around the push rods.
- On an **externally equalised** valve, that internal path is sealed off, by packing around the push rods or by close-fitting rods forming a metal seal. Instead, an external equaliser line is connected from the **suction line at the evaporator outlet, downstream of the bulb**, to a fitting on the valve.

If the coil has almost no pressure drop, the two are the same and internal
equalisation is fine and cheaper.

## Why pressure drop breaks an internally equalised valve

Every coil loses some pressure from inlet to outlet through friction. Where that
drop exceeds about **20 kPa**, the pressure at the coil outlet is meaningfully
lower than the pressure holding the diaphragm down. The valve is therefore
closing against a pressure higher than the one that matters, and it demands more
bulb temperature — more superheat — before it will open. The coil is
**starved**, and the effect is worst of all when a refrigerant distributor is
fitted, because a distributor is a deliberate restriction.

### The distributor

A distributor splits one valve outlet into several parallel coil circuits so
every circuit gets an equal share of liquid and vapour. It is a small venturi:
refrigerant enters, accelerates through a **venturi throat** where the liquid
and flash gas are mixed into a fine, evenly distributed stream, then passes
through a **diverging section** into a set of **equal-length feeder tubes**, one
to each circuit. Equal tube lengths matter — an unequal set gives an unequal
split and some circuits will flood while others starve.

That mixing costs pressure. In a typical example, the valve outlet is at
**434 kPa gauge** (P1 in the distributor drawing) while the suction pressure at
the coil outlet is **226 kPa gauge** — a pressure drop of:

434 − 226 = **208 kPa**

An internally equalised valve on that coil would be trying to balance against
434 kPa when the outlet is at 226 kPa. It would hold a large and wildly
incorrect superheat, and the coil would be badly starved.

## Worked example — external equaliser on an R134a coil

Now the same idea with the valve correctly equalised. Spring pressure is
**52 kPa**. The evaporator inlet pressure at the valve outlet is **220 kPa
gauge**, but the suction pressure at the bulb, which the equaliser line reports,
is **174 kPa gauge**.

1. Closing force = suction pressure at the bulb + spring = 174 + 52 = **226 kPa gauge**
2. Bulb pressure needed to open = **226 kPa gauge**, which for R134a is **3 °C**
3. Saturated temperature at the coil outlet pressure of 174 kPa gauge is **−2 °C**
4. Superheat = 3 − (−2) = **5 K** — exactly as designed.

Compare that with what an internally equalised valve would have done on the same
coil. Its closing force would have been 220 + 52 = **272 kPa gauge**, which is
46 kPa higher. Near 0 °C, R134a changes about 10 kPa per kelvin (171 kPa is
−2 °C and 191 kPa is 0 °C, so 20 kPa buys 2 K). That extra 46 kPa is therefore
worth roughly:

46 ÷ 10 ≈ **4.6 K of extra superheat**

So the internally equalised valve would have held something near 9–10 K instead
of 5 K, and starved the coil for no reason at all.

>! Never cap off an external equaliser fitting, and never leave one connected
>! upstream of the bulb. A capped equaliser leaves the diaphragm underside at
>! whatever pressure happens to be trapped there and the valve loses control
>! completely — usually flooding, sometimes shutting. Connect it to the suction
>! line a short distance downstream of the bulb, on top of the line so oil
>! cannot fill it.

## Mounting the bulb

The bulb is the valve's only sense organ, and it reads pipe temperature. Get it
wrong and everything else is guesswork.

- Clamp it to a **horizontal run of suction line near the coil outlet**.
- **Never** put it where liquid can pool — a trap, a low point, or the bottom of a riser. Vaporising liquid next to the bulb chills it and the valve responds to a lie, usually by shutting down and starving the coil.
- On lines **up to 20 mm OD**, mount the bulb on **top** of the pipe.
- On lines **25 mm and larger**, mount it on the **side, just below the horizontal centre line**. This keeps it out of the oil layer that runs along the bottom of a large suction line, which would insulate the bulb from the vapour it is meant to be sensing.
- Clean the pipe back to bright metal, use the proper metal clamp — not a cable tie — and get full contact. Some bulbs are crimped or creased lengthwise to give double contact and better alignment with the line.
- **Insulate the bulb** after clamping so it senses refrigerant, not the plant room.

## Power element charges

What is inside the bulb changes how the valve behaves outside normal running.
Four charges matter.

### Liquid charge

The bulb holds the same refrigerant as the system, with liquid always present at
any temperature it will ever see. Its pressure follows the same saturation curve
as the system refrigerant, so the valve behaves predictably and the bulb can be
colder than the valve head without losing control.

The catch: because the two curves match, the valve will open whenever the bulb
is only about **4 to 6 K warmer** than the system refrigerant — a condition that
occurs easily during the off cycle, when the bulb warms to room temperature
while the coil is still cold. The valve opens and liquid drains into the coil
and on towards the compressor.

### Cross charge

Most valves made today are **cross-charged**: the fluid in the power element is
deliberately *different* from the system refrigerant, chosen so its
pressure-temperature curve crosses the system refrigerant's rather than tracking
it. The bulb pressure rises more slowly with temperature than the system
pressure does.

The result is exactly what you want. As bulb and system both warm up during the
off cycle or during a defrost, the system refrigerant pressure — always the
closing force — **overrides** the bulb pressure and holds the valve shut. It
stays shut until the compressor restarts and pulls the suction pressure back
down. A cross charge also gives more consistent superheat across a wide
operating range, which is why freezer valves are almost always cross-charged.

### Gas charge, and MOP

A **gas-charged** or **pressure-limiting** element contains only a small amount
of liquid. In normal cooling it behaves like a liquid charge and gives sensitive
control. But once the bulb temperature rises above a designed point, **all the
liquid in the bulb has vaporised**, and from there the pressure rises only a
small fraction as fast as it would if liquid were still present. The system
refrigerant pressure then overrides the bulb and throttles the valve.

That behaviour puts a ceiling on suction pressure — the **maximum operating
pressure**, or **MOP**. It is used where the plant sees periodic heavy loads or
where the bulb gets hot during the off cycle, such as air-conditioning units
that run heating elements in winter, and it stops the compressor motor being
overloaded during a hot start or after a defrost.

The price of an MOP charge is that the **bulb must always be the coldest part of
the power element**. If the valve head or capillary ever runs colder than the
bulb, the small charge condenses there and the valve loses all control.
Insulating the head, or keeping it in the warm airstream, is part of the
installation.

### Adsorption charge

An adsorption element works on a different principle again. The bulb contains a
solid adsorbent — activated charcoal or silica gel — together with a gas such as
carbon dioxide. Warming the bulb drives gas off the adsorbent and raises the
pressure; cooling lets the adsorbent soak it back up.

Because the pressure comes from adsorption rather than from boiling, the element
works well at very low temperatures, gives a nearly constant superheat across a
huge range, and is unaffected by whether the head is colder than the bulb. Its
drawback is a slower response than a liquid or cross charge, so it is chosen for
low-temperature and specialist work rather than for fast-swinging loads.

| Charge | Off-cycle behaviour | Typical use | Watch out for |
|---|---|---|---|
| Liquid | opens when bulb is 4–6 K above system temperature — flood-back risk | older and simple systems | needs a liquid line solenoid to stop off-cycle feeding |
| Cross | system pressure overrides and holds it shut | most modern valves, especially freezers | must match the valve to the refrigerant and range |
| Gas / MOP | shuts and limits suction pressure above the MOP | air-conditioning, heavy pull-down, post-defrost | bulb must be the coldest point or control is lost |
| Adsorption | pressure rises slowly, valve stays controlled | very low temperature, wide-range work | slower response to load changes |

>! Never replace a TX valve with "one that fits". The refrigerant, the charge
>! type, the MOP rating and the orifice all form part of the model designation.
>! A cross-charged freezer valve fitted to an air-conditioning coil, or an MOP
>! valve fitted where the head runs cold, will misbehave in ways no amount of
>! superheat adjustment can cure.

## On the job

- Distributor fitted? The valve must be externally equalised. No exceptions.
- Equaliser connects downstream of the bulb, into the top of the suction line.
- Bulb on top for pipe up to 20 mm, on the side below centre for 25 mm and up.
- Insulate the bulb; clean the pipe; use the correct clamp.
- Write down the valve's full model designation before you order a replacement.
`,
          quiz: [
            {
              q: "A DX coil is fed through a venturi distributor with a 208 kPa pressure drop between the valve outlet and the coil outlet. Why must the valve be externally equalised?",
              options: [
                "Because internally equalised valves cannot pass enough refrigerant for a multi-circuit coil",
                "Because an internal equaliser would report the higher coil inlet pressure, so the valve would demand far more superheat before opening and starve the coil",
                "Because the distributor blocks the internal equaliser passage with liquid",
                "Because the external equaliser line provides the pressure drop the distributor needs",
                ],
              answer: 1,
              explain: "The closing force must be the pressure at the coil outlet, where the bulb is sensing. Report the inlet pressure instead and the valve holds a superheat inflated by the whole coil-and-distributor pressure drop, starving the coil. The equaliser is a sensing line and passes no useful flow at all.",
            },
            {
              q: "Why is a cross-charged power element preferred over a liquid charge on a freezer valve?",
              options: [
                "It gives a faster response to load changes",
                "Its bulb pressure rises more slowly with temperature, so during the off cycle or defrost the system pressure overrides it and holds the valve shut",
                "It allows the bulb to be mounted in a liquid trap",
                "It removes the need for an external equaliser",
              ],
              answer: 1,
              explain: "A same-refrigerant liquid charge opens the valve whenever the bulb is about 4–6 K warmer than the coil, which happens routinely during the off cycle and lets liquid drain towards the compressor. A cross charge deliberately crosses the system curve so the closing force wins when everything warms up. It does not affect equaliser requirements.",
            },
            {
              q: "A sensing bulb is clamped to a 32 mm suction line at the bottom of the pipe. What is the likely consequence?",
              options: [
                "Nothing — bulb position around the pipe is unimportant",
                "The oil layer running along the bottom of the line insulates the bulb, so it senses poorly and the valve controls badly",
                "The bulb will read too warm and the valve will flood the coil",
                "The bulb charge will condense and the valve will lock open",
              ],
              answer: 1,
              explain: "Oil films along the bottom of large suction lines, and it insulates the bulb from the vapour it must sense. On 25 mm pipe and larger the bulb goes on the side, just below the horizontal centre line; on lines up to 20 mm OD it goes on top.",
            },
            {
              q: "A gas-charged (MOP) valve is fitted with the power element head sitting in a cold airstream while the bulb is on a warmer suction line. What happens?",
              options: [
                "The valve limits suction pressure more accurately",
                "The small charge condenses in the colder head, so the element loses control of the valve",
                "The valve holds a lower superheat than set",
                "The MOP point rises by a few kelvins",
              ],
              answer: 1,
              explain: "An MOP element carries only a little liquid, and that liquid always collects at the coldest point. If the head is colder than the bulb, the charge migrates there and the bulb no longer governs the pressure — control is lost entirely. Keeping the bulb the coldest part of the element is a rule of MOP installation.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "txv-selection-faults",
          title: "Sizing a TX valve, hunting and fault-finding",
          minutes: 13,
          simple: "A TX valve has to be chosen for the job, not just for the pipe size. Its capacity depends on the hole in it, the refrigerant, the pressure difference pushing liquid through it and how warm that liquid is. Too big a valve is worse than a slightly small one — it swings between flooding and starving, which technicians call hunting.",
          refs: REFS,
          content: `
Incorrect selection and incorrect adjustment cause more expansion valve service
calls than genuine valve failures do. This lesson covers how capacity is
determined, how to size one, why oversizing produces hunting, and how to
diagnose a valve on site.

## What determines a valve's capacity

Five things, and you have some influence over three of them:

1. **Orifice size.** The same valve body is built with a range of orifices — the bigger the orifice, the more liquid it passes in a given time. The body size and the connection size tell you almost nothing about capacity.
2. **The refrigerant.** Each refrigerant has its own density and latent heat, so the same orifice at the same pressure drop gives a different kW of cooling on R134a, R404A and R410A.
3. **The refrigeration load in kW.** The duty the coil has to meet at design conditions.
4. **The pressure difference across the valve.** This is the force pushing liquid through the orifice. Less difference, less flow.
5. **The temperature and condition of the liquid entering the valve.** Warm liquid means more flash gas across the orifice, and flash gas takes up room that liquid should be occupying — so capacity falls as liquid line temperature rises.

Manufacturers rate valves in **kW of refrigeration** at a stated evaporating
temperature and pressure drop. Different makers present it differently — some by
orifice size with head and suction pressures, some by orifice size and the
difference between them — so read the catalogue's basis before you read its
numbers.

## Worked example — finding the pressure drop available

An R134a coil is to be selected for **12 kW** at **−10 °C** evaporating, with
the plant condensing at **45 °C**. The coil is fed through a distributor and the
valve sits 3 m below the receiver.

From R134a saturation data:

- condensing at 45 °C is about **1160 kPa absolute**
- evaporating at −10 °C is about **200 kPa absolute**

Total pressure available:

1160 − 200 = **960 kPa**

Now subtract everything that eats into it before the liquid reaches the coil:

| Loss | kPa |
|---|---|
| Liquid line friction, drier and solenoid | 30 |
| Distributor and feeder tubes | 200 |
| Static head — valve is 3 m *below* the receiver, so this is a gain | −37 |

Static head for liquid R134a at about 1250 kg per cubic metre over 3 m:

3 × 1250 × 9.81 = 36 800 Pa ≈ **37 kPa** (a gain here, because the liquid is
falling to the valve — it would be a loss if the valve were above the receiver)

Net pressure drop available across the valve:

960 − 30 − 200 + 37 = **767 kPa**, say **760 kPa**

Now go to the catalogue and choose the smallest valve whose rating is **at least
12 kW at −10 °C evaporating with about 760 kPa across it**, then check the
maker's correction factor for the actual liquid subcooling. If subcooling is
poor, the correction reduces the rated capacity and you may need the next
orifice up.

## Why oversizing is the classic mistake

An oversized valve does not fail gracefully. It sits nearly closed, and small
movements of the pin produce large changes in flow, so the valve overshoots in
both directions. The result is **hunting**: superheat and suction pressure swing
up and down on a cycle of a minute or two, the coil alternately floods and
starves, and average capacity falls even though the valve is "big enough".

Worse, an oversized valve behaves badly exactly where refrigeration systems
spend most of their life: at part load. Erratic feeding at low load produces
patchy coil temperatures, poor air-off performance and — on refrigeration
coils — **icing**, because parts of the coil run colder than design while others
sit flooded.

### Causes of hunting, and cures

| Cause | Cure |
|---|---|
| Valve orifice oversized | re-select and fit the correct orifice or valve |
| Bulb loose, dirty, uninsulated or on the wrong part of the pipe | clean back to bare metal, clamp properly, insulate, relocate |
| Bulb sitting where liquid can pool | move it to a horizontal run near the coil outlet |
| External equaliser missing, capped or wrongly connected | connect downstream of the bulb, into the top of the line |
| Uneven feed from a distributor (unequal feeder tubes, wrong mounting) | rework feeders to equal lengths, mount the distributor as the maker specifies |
| Insufficient pressure drop across the valve — low head pressure in cold weather | fit head pressure control; check the condenser fan cycling |
| Moisture in the system | recover, replace the drier, evacuate properly |

## Reading a valve on the gauges

Every valve fault shows up as a pattern across three readings: suction pressure,
superheat and the state of the suction line.

| Symptom pattern | Suction | Superheat | Likely cause |
|---|---|---|---|
| Coil partly cold, poor pull-down, warm suction line | low | high | starved: undersized or blocked orifice, valve stuck closed, strainer blocked, moisture freeze, lost bulb charge, flash gas in the liquid line, low charge |
| Suction line cold and sweating back to the compressor, noisy compressor | high | very low or none | overfeeding: valve stuck open, oversized orifice, bulb loose or fallen off, superheat wound too far out |
| Suction and superheat swinging cyclically | swinging | swinging | hunting — see the table above |
| Everything low including head pressure, sight glass bubbling | low | high | undercharge, not a valve fault at all |

!SIM[Watch a stuck-closed expansion valve starve the coil](fault=txvStuckClosed)

!SIM[Now compare an overfeeding valve on the same gauges](fault=txvStuckOpen)

### The moisture freeze-up test

A classic, and worth knowing by name. The plant runs normally for a while, then
the suction pressure drops away and the coil starves. Warm the valve body with
your hand or a warm cloth and it feeds normally again for a few minutes before
repeating. That is **moisture freezing at the orifice**, not a mechanical fault:
the water only freezes once the valve has been running below 0 °C long enough.

The cure is never to warm it and leave. Recover the charge, fit a new liquid line
filter-drier of the correct capacity, evacuate to a deep vacuum with a standing
vacuum test, and recharge by weight.

>! Do not reach for the adjusting stem as a first response. Winding a valve out
>! to lift a low suction pressure caused by a dirty condenser, a blocked drier
>! or an undercharge will flood the compressor as soon as the real fault is
>! corrected. Measure, diagnose, fix the cause, then re-check superheat.

## What to remember

- Valve capacity comes from orifice, refrigerant, load, pressure drop and liquid condition — never from the connection size.
- Work out the pressure drop actually available before you open the catalogue.
- Oversized valves hunt, ice coils and behave worst at part load.
- Hunting is usually the bulb, the equaliser or the orifice, in that order of likelihood.
- A low suction with a bubbling sight glass is a charge or restriction problem, not a valve problem.
`,
          quiz: [
            {
              q: "An R134a plant condenses at 45 °C (about 1160 kPa absolute) and evaporates at −10 °C (about 200 kPa absolute). The liquid line and drier lose 30 kPa, the distributor 200 kPa, and the valve sits 3 m below the receiver, giving a 37 kPa static gain. What pressure drop is available across the valve?",
              options: ["960 kPa", "730 kPa", "767 kPa", "1160 kPa"],
              answer: 2,
              explain: "1160 − 200 = 960 kPa total, then 960 − 30 − 200 + 37 = 767 kPa. The static head is a gain because the liquid falls to the valve; had the valve been above the receiver you would subtract it, which is why vertical lifts on a liquid line matter so much in selection.",
            },
            {
              q: "Why does an oversized TX valve tend to hunt?",
              options: [
                "Because a larger orifice needs a larger bulb, which responds too slowly",
                "Because it operates nearly closed, so small pin movements cause large flow changes and the valve overshoots in both directions",
                "Because the spring cannot compress far enough to close it",
                "Because oversized valves are always internally equalised",
              ],
              answer: 1,
              explain: "Working at the very bottom of its travel makes the valve extremely sensitive, so it alternately floods and starves the coil, swinging superheat and suction pressure. This is worst at part load, where refrigeration plant spends most of its life, and it can ice the coil.",
            },
            {
              q: "A coolroom runs normally for 20 minutes, then the suction pressure falls and the coil starves. Warming the valve body restores normal operation for a few minutes. What is the fault?",
              options: [
                "The power element has lost its charge",
                "The superheat setting is too high",
                "Moisture in the system freezing at the valve orifice",
                "The compressor valves are leaking",
              ],
              answer: 2,
              explain: "The delay before it happens, and recovery on warming, are the signature of ice at the orifice — water only freezes once the valve has been running below 0 °C for a while. A lost power element charge would shut the valve permanently and warming it would change nothing. Fix it by recovering, fitting a new drier and evacuating properly.",
            },
            {
              q: "A system shows low suction pressure, high superheat, low head pressure and a bubbling sight glass. What should you do?",
              options: [
                "Back the TXV adjusting stem out to increase the feed",
                "Fit a larger orifice in the expansion valve",
                "Leak test and correct the charge — this pattern is an undercharge, not a valve fault",
                "Replace the power element",
              ],
              answer: 2,
              explain: "Low head pressure together with a bubbling sight glass points to a shortage of refrigerant reaching the valve, and the valve is simply doing its best with flash gas. Winding the stem out would make the plant appear better until the charge is corrected, then flood the compressor.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "electric-and-electronic-valves",
          title: "Thermal-electric and electronic expansion valves",
          minutes: 11,
          simple: "Instead of a bulb full of refrigerant, these valves use electricity. One type heats a bimetal strip with current from a temperature-sensing thermistor in the suction line. The other is driven by a controller that reads sensors and decides how far to open the valve — a bit like cruise control replacing a mechanical governor.",
          refs: REFS,
          content: `
Mechanical TX valves are excellent, but they can only balance the forces they
are given. Electrically operated valves can be told what to do by a controller
that knows the coil pressure, the coil outlet temperature, the room temperature
and the time of day — and that is why they dominate new supermarket and
packaged plant.

## The thermal-electric expansion valve

This is the direct descendant of the TX valve, with the power element replaced
by electrical parts. It has **no remote bulb**.

A **thermistor** is mounted so it sits directly in the refrigerant vapour inside
the suction line at the coil outlet. A thermistor's resistance falls as its
temperature rises, so:

1. Warm vapour leaves the coil (superheat is rising).
2. Thermistor resistance falls.
3. At a fixed supply voltage, current through the circuit rises.
4. That current passes through a heater on a **bimetal strip** in the valve body. The extra heat makes the bimetal bend further.
5. The bending bimetal lifts the needle, so the valve opens and feeds more liquid.

If the vapour leaving the coil cools — because the valve has fed too much — the
thermistor resistance rises, current falls, the bimetal cools and straightens,
and the valve closes down. The loop holds a superheat that the maker sets at the
factory, so there is normally nothing to adjust.

Power comes from a **low-voltage transformer** wired in series with the
thermistor and the valve's control element, so the sensor current *is* the
control signal. Nothing else is needed.

Variants exist for particular duties, and choosing the right one matters:

- **bi-flow** valves, which meter in either direction for reverse-cycle air-conditioning
- **pressure-limiting** versions, which do the job of an MOP charge
- **liquid injection** versions, used to cool discharge gas by injecting liquid into the suction or into the compressor body.

Advantages: no bulb clamping, no capillary to kink, no charge to lose, and no
sensitivity to where the head sits relative to the bulb. Drawbacks: it needs a
power supply, it is factory set, and a failed thermistor or transformer stops
the valve dead.

## Electronic expansion valves (EEV)

An electronic valve responds to an **electronic signal**. It has no idea what
superheat is — the intelligence sits in the controller.

### Pulse-width modulated valves

The Danfoss AKV family is the classic example. Mechanically it is almost a
solenoid valve: coil, armature, seat, DIN plug. Capacity is set by **pulse-width
modulation**. Within a fixed period of **6 seconds**, the controller energises
and de-energises the coil, and the fraction of that period for which the valve
is open sets the average flow:

**Opening degree (%) = (opening time ÷ time period) × 100**

Worked examples on a 6 second period:

- Controller calls for 40% → open time = 0.40 × 6 = **2.4 s open, 3.6 s closed**
- Controller calls for 75% → open time = 0.75 × 6 = **4.5 s open, 1.5 s closed**
- Heavy demand → the valve stays open for nearly the whole 6 s
- No refrigeration required → the valve stays closed and simply acts as a **solenoid valve**, which is why a PWM installation needs no separate liquid line solenoid for pump-down.

### Stepper-motor valves

The other common family uses a small **stepper motor** to drive the needle
through a precise number of steps — often several hundred between fully closed
and fully open. Flow is genuinely modulating rather than pulsed, which suits
larger duties and reversible systems. The controller usually drives the valve to
a known fully-closed position at start-up so it knows where the needle is.

### How the controller closes the loop

The controller reads a **pressure transducer** on the suction line, converts it
to saturation temperature for the refrigerant it has been configured for, reads
a **temperature sensor** at the coil outlet, and subtracts. It now has live
superheat, several times a second, and it drives the valve to hold a target —
often as low as 3 to 5 K, because a fast electronic loop can safely run closer
to the flooding point than a mechanical valve can.

Lower superheat means more of the coil is wet and working, which lifts suction
pressure and cuts compressor power. That, plus floating suction control and
adaptive defrost, is where the energy savings come from.

## What intelligent controllers add

- **Networking** — remote monitoring and adjustment from an office or from anywhere with a connection, instead of a site visit.
- **Accurate sensing** of both coil and room conditions, which enables real energy management rather than guesswork.
- **Fast recovery after defrost**, because the controller can drive the valve open deliberately rather than waiting for a bulb to cool.
- **Data logging** — the controller decides how often and how long to defrost from what it has actually recorded, and stores historical data that can verify storage conditions for a food safety audit.
- **Multi-function capability** — one controller can handle temperature control and defrost, display room temperature and coil pressure, and drive the valve.
- **No gauges needed** to read pressure day to day; the display or the remote system shows it.

The initial cost is high, but weigh it against what it replaces: the mechanical
thermometer, the defrost timer, the thermostat, the TX valve and the liquid line
solenoid. Consider the multi-function capability carefully at selection time,
because the savings are in the parts you no longer buy and the site visits you
no longer make.

## Field practice

- Check the controller is configured for the **actual refrigerant**. A controller set to the wrong refrigerant converts pressure to the wrong saturation temperature, so its superheat reading is wrong and it drives the valve wrong.
- Verify the controller's superheat display against your own gauge and thermometer measurement before you believe it.
- Sensor placement and clamping matter as much as a mechanical bulb's — a loose, uninsulated coil outlet sensor produces the same hunting you would get from a loose TXV bulb.
- Most EEVs default **closed** on loss of signal or power. Confirm the valve is powered and initialised before the compressor is allowed to run.
- Keep low-voltage sensor and valve wiring away from mains and contactor wiring; induced noise on a transducer line shows up as an unstable superheat reading.

>! Electronic valve work sits at the boundary of refrigeration and electrical
>! trades. In Australia, work on mains-voltage wiring requires the appropriate
>! electrical licence — isolate, lock out and test dead before opening a control
>! panel, and leave mains alterations to a licensed electrician if you do not
>! hold the licence yourself.

## What to remember

- Thermal-electric: thermistor in the vapour, current heats a bimetal, bimetal opens the needle. No bulb, factory set.
- PWM electronic valves modulate by opening time within a fixed 6 s period; opening degree = opening time ÷ period × 100.
- Stepper valves modulate the needle position directly.
- The controller, not the valve, calculates superheat from a transducer and a temperature sensor.
- Configure the refrigerant correctly, mount sensors properly, and verify the display against a real measurement.
`,
          quiz: [
            {
              q: "In a thermal-electric expansion valve, what causes the valve to open further?",
              options: [
                "Rising bulb pressure acting on a diaphragm",
                "Rising suction vapour temperature lowers the thermistor's resistance, increasing current through the bimetal heater so the bimetal bends further",
                "Falling suction pressure pulling the needle off its seat",
                "The controller sending a larger pulse width to the coil",
              ],
              answer: 1,
              explain: "The chain is temperature to resistance to current to bimetal deflection to needle lift, with a low-voltage transformer as the source. There is no bulb and no diaphragm, and pulse width belongs to the electronic AKV-type valve, not to the thermal-electric one.",
            },
            {
              q: "A pulse-width modulated electronic valve works on a fixed 6 second period. The controller calls for 75% opening degree. What does the valve do?",
              options: [
                "Opens the needle three-quarters of the way and holds it there",
                "Opens for 4.5 s and closes for 1.5 s in each 6 s period",
                "Opens for 0.75 s in each 6 s period",
                "Cycles at 75 pulses per second",
              ],
              answer: 1,
              explain: "Opening degree = opening time ÷ period × 100, so 0.75 × 6 = 4.5 s open and the remaining 1.5 s closed. The needle itself is either open or shut, like a solenoid; the average flow comes from the ratio. A stepper valve is the type that holds a partial position.",
            },
            {
              q: "Why can an electronic valve system safely run a lower superheat target than a mechanical TXV?",
              options: [
                "Because electronic valves cannot pass liquid refrigerant",
                "Because the controller measures superheat electronically several times a second and can react far faster than a bulb and diaphragm",
                "Because the compressor is protected by the pulse-width modulation",
                "Because the refrigerant charge is smaller",
              ],
              answer: 1,
              explain: "Speed of response is the whole advantage: a fast loop can hold nearer the flooding point without crossing it, so more of the coil is wet and suction pressure rises. Nothing about a PWM valve prevents liquid passing — if the control loop fails, it will flood the compressor exactly like any other valve.",
            },
            {
              q: "A controller has been commissioned with the wrong refrigerant selected. What is the consequence?",
              options: [
                "The valve will not open at all",
                "It converts the transducer pressure to the wrong saturation temperature, so its superheat calculation and therefore its valve control are wrong",
                "Only the display is affected; control is unaffected",
                "The valve will hunt at the pulse frequency",
              ],
              answer: 1,
              explain: "The controller derives saturation temperature from pressure using the refrigerant's own PT relationship. Choose the wrong refrigerant and every superheat figure it computes is offset, so it drives the valve to the wrong opening — this is a genuine commissioning fault, not a display cosmetic.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "capillary-tube-control",
          title: "Capillary tube control",
          minutes: 13,
          simple: "A capillary tube is just a few metres of very thin pipe between the condenser and the evaporator. It has no moving parts and nothing to adjust — the friction inside it does all the work. It only suits equipment with a steady load and a carefully weighed charge, which is why it is in almost every domestic fridge and split system and almost no supermarket.",
          refs: REFS,
          content: `
The capillary tube is the most common refrigerant control in the world, and the
only one with no moving parts, no adjustment and no failure mode of its own. It
is used in practically every mass-produced sealed system that runs one
evaporator on a fairly steady load: domestic refrigerators, commercial upright
storage cabinets, freezers, small coolrooms and domestic air-conditioners.

## What it is

A fixed length of small-bore tubing, fitted between the condenser and the
evaporator in place of the conventional liquid line. High friction from the long
length and small bore restricts and meters the flow of liquid, and holds the
pressure difference between the condenser and the evaporator.

Two features always go with it:

- A **filter-drier** in the liquid line ahead of the capillary. The bore is too small to tolerate any grit, wax or moisture.
- A **heat exchanger**: about a metre of the capillary is soldered or brazed along the suction line, so the returning cold vapour cools the liquid on its way in. That cooling reduces flash gas and adds capacity for free — and it warms the suction vapour a little, which helps keep the compressor dry.

## How the flow is set

For any given length and bore, the resistance is fixed, so the flow through the
tube at any instant is proportional to the **pressure difference** across it —
the difference between the condensing and evaporating pressures. The greater the
resistance (longer tube, smaller bore), the greater the pressure difference
needed for the same flow.

The garden hose is the honest analogy. Flow depends on the difference between
mains pressure and atmosphere, so people living low in a valley get better flow
than people up on the hill. Flow drops on a hot afternoon when reservoirs are
low and everyone is watering, and it drops again if you use a longer hose, a
thinner hose, or stand on it.

## The balance point

The capillary and the compressor sit in series, so their capacities **must be
equal** when the machine is running. For the system to perform as designed, the
length and bore must be such that the tube passes exactly what the compressor
pumps at the design condensing and evaporating pressures.

If they do not match, the system does not fail — it quietly balances somewhere
else, at conditions you did not want.

### Too much restriction (tube too long or bore too small)

The tube passes less than the compressor can pump. The coil is starved, and the
liquid the tube cannot swallow backs up in the bottom of the condenser at the
capillary entrance. Backed-up liquid reduces the effective condensing surface,
so condensing temperature and head pressure rise; the starved coil pulls suction
pressure down. Both changes push the system towards a new balance, at **lower
suction and higher head** than design, and with less capacity than design.

Real figures from a case like this: normal suction 35 kPa but actual **−3.3 kPa**
(that is, in vacuum), normal head 840 kPa but actual **945 kPa**.

The trap is what happens next. The evaporator looks short of refrigerant, so gas
gets added. Suction comes back to 35 kPa, but head pressure climbs to
**1190 kPa** — a far worse machine than before, with a higher compression ratio,
reduced compressor capacity and a much larger power bill. Nothing has been
fixed; the symptom has been bought off with efficiency.

!SIM[See what a restriction ahead of the metering device does to both gauges](fault=restrictedDrier)

### Too little restriction (tube too short or bore too large)

The tube passes more than the compressor can pump. The evaporator is overfed and
liquid can flood back to the compressor. There is also **no liquid seal** at the
tube entrance in the condenser, so uncondensed vapour is drawn into the tube
along with the liquid. That vapour brings its latent heat into the evaporator
without having rejected it, cutting capacity. And because the flow is excessive,
the compressor can never pull the coil down to the temperature it should reach —
suction pressure stays high.

| Condition | Suction pressure | Head pressure | Coil | Risk |
|---|---|---|---|---|
| Correct restriction | design | design | fully supplied | none |
| Too much restriction | low, can go into vacuum | high | starved | capacity loss, and gets far worse if gas is added |
| Too little restriction | high | low | overfed | liquid flood-back, no liquid seal, cannot pull down |

## Sizes and selection

- Practical lengths are about **2 m to 6 m**; bores about **0.6 mm to 2.25 mm**.
- The 2 m minimum exists so that at least **1 m** can be bonded to the suction line as a heat exchanger. Shorter tubes are used occasionally but cope poorly with varying load.
- Keep the bore as small as practical — but not so small that dirt, brazing slag or oil can block it.
- On larger units, several small-bore capillaries are run **in parallel** rather than one large-bore tube, which keeps the heat-exchange area and the fine metering while passing more refrigerant.

To increase restriction, make the tube longer or the bore smaller. A 3 m tube of
1 mm bore could be re-designed as either **5 m of 1 mm** or **3 m of 0.75 mm** —
two different routes to the same extra resistance.

Bore and length depend on:

- **the refrigerant** — different densities and latent heats mean the same volume of two refrigerants carries different mass and different heat-absorbing ability
- **the pumping capacity of the compressor** — more swept volume means more liquid must pass, so less resistance is needed
- **the condensing and evaporating pressures** — the bigger the pressure difference, the more restriction is needed for the same flow.

Manufacturers publish selection charts for this. A typical chart plots
**compressor displacement in cubic metres per hour** against the **equivalent
length of 1.1 mm ID capillary tube**, with separate families of curves for each
condensing temperature (for example 30 °C and 42 °C) and for each evaporating
temperature. You read off an equivalent length, then convert it to whatever bore
you are actually going to use.

Note the word *equivalent*. Any theoretically calculated capillary must be
tested under practical conditions and modified if necessary — which is exactly
why cabinets with widely varying loads, or with more than one evaporator, use a
thermostatic expansion valve instead. Nobody wants to run a test programme for a
one-off job.

## Design features that follow from having no shut-off

The capillary does not close when the compressor stops. Liquid keeps flowing
from the condenser into the evaporator until the pressures equalise throughout
the system. Four design consequences follow:

1. **An accumulator** at the evaporator outlet, sized to hold all the extra liquid that arrives after shutdown so it cannot spill into the suction line. On domestic systems it needs to hold only about **50 to 100 g**.
2. **No liquid line and no receiver** between condenser and capillary. Extra liquid stored there would overfill the accumulator on shutdown, and that liquid is hot, so it would warm the evaporator every time the plant stopped.
3. **A heat exchanger** — the metre of capillary soldered to the suction line — because liquid straight from the condenser is hotter than liquid from a receiver and would waste useful refrigerating effect as flash gas.
4. **An efficient filter-drier** ahead of the tube, to stop the fine bore blocking with debris or with ice from moisture in the system.

## The critical charge

The whole charge has to be contained in the evaporator and accumulator at
shutdown, so it must be accurate to within about **±30 g** on small systems.
Typical domestic charges are only **200 to 300 g**. That is why a capillary
system is always charged by **weight**, never by sight glass or by feel, and why
the correct procedure after any repair is recover, replace the drier, evacuate
properly, and weigh in the nameplate charge.

>! Charging a capillary system "until the frost pattern looks right" is how
>! compressors get flooded. Weigh it. And remember that because the pressures
>! equalise at shutdown, a stopped capillary system still holds refrigerant
>! above atmospheric pressure throughout — recover it to an approved cylinder
>! before opening anything.

## Advantages

- Simple and cheap to make, with nothing to wear out or adjust.
- Only a small charge is needed — it cannot be less than the volume of the evaporator tubes, nor more than evaporator plus accumulator.
- No liquid receiver required.
- Little or no risk of oil logging, because the evaporator fills completely with liquid each off cycle and the returning surge sweeps oil out.
- No risk of liquid flooding the compressor through a leaking control valve — a real risk with every valve-type control, and one that wrecks compressors.
- **Reduced starting load.** Because the pressures equalise on the off cycle, the compressor restarts with equal pressure on both sides of the piston. Large machines on other controls need complicated unloading gear to achieve what a capillary gets for nothing.
- That low starting load simplifies the compressor and motor: parts need not be as strong, starting vibration is lower, and cheap low-starting-torque motors such as split-phase and RSIR types can be used.

## Limits

- Suited to **one set of conditions only** — it cannot follow a wide load swing.
- Cannot serve **multiple evaporators**.
- Critical charge, with no receiver to absorb error.
- Blocks easily; demands scrupulous cleanliness and a good drier.
- Any theoretical size must be proven by test.

## The accurator and fixed-orifice devices

Some reverse-cycle air-conditioning uses an **accurator**: a fixed orifice like a
capillary, so also designed for a fairly constant load, but with a clever twist.
In the control direction, refrigerant pressure holds the restrictor against a
seat so all flow must pass through the small orifice. When the cycle reverses,
the flow pushes the restrictor off its seat and refrigerant passes freely around
it — so the device meters in one direction and flows full-bore in the other, and
the outdoor and indoor coils can each have their own accurator.

Manufacturers also build combination fittings — the Danfoss RD eliminator-
distributor family, for example, combines a check valve, an expansion device and
a distributor in one brazed-in body.

## On the job

- Low suction with high head on a capillary system is a **restriction**; low suction with low head is a **shortage of gas**. The head pressure is what tells them apart.
- Feel for a temperature drop or frost right at the drier outlet or capillary entry — a genuine restriction is usually cold there.
- Never add refrigerant to compensate for a restricted capillary. You will double the fault.
- Weigh every capillary charge, and record it.
- Blow a suspect capillary through with **oxygen-free nitrogen**, never oxygen and never compressed air, and fit a new drier afterwards.
`,
          quiz: [
            {
              q: "A capillary tube system reads suction pressure in a slight vacuum and head pressure well above normal. What is the fault, and what must you not do?",
              options: [
                "Undercharge — add refrigerant until suction returns to normal",
                "Too much restriction in the capillary — do not add refrigerant, because that only pushes head pressure far higher",
                "Too little restriction — fit a shorter capillary",
                "Compressor valve failure — replace the compressor",
              ],
              answer: 1,
              explain: "Low suction with high head means the tube is passing less than the compressor pumps, so liquid backs up in the condenser and reduces its effective surface. Adding gas restores the suction reading but drives head pressure up further, raising compression ratio and running cost while the real fault remains. An undercharge would show low head, not high.",
            },
            {
              q: "Why must a capillary tube system have an accumulator at the evaporator outlet?",
              options: [
                "To separate oil from the returning vapour",
                "To store refrigerant during the running cycle so the charge can be smaller",
                "Because the capillary does not shut off when the compressor stops, so liquid keeps draining into the evaporator until pressures equalise",
                "To provide the pressure drop the capillary needs",
              ],
              answer: 2,
              explain: "With no moving parts there is no shut-off, so refrigerant keeps flowing from the condenser after shutdown until the whole system equalises. The accumulator — only 50 to 100 g on a domestic system — holds that surplus so it cannot spill into the suction line and reach the compressor on the next start.",
            },
            {
              q: "A designer wants more restriction than a 3 m length of 1 mm bore capillary provides. Which changes would achieve that?",
              options: [
                "5 m of 1 mm bore, or 3 m of 0.75 mm bore",
                "2 m of 1 mm bore, or 3 m of 1.5 mm bore",
                "3 m of 2 mm bore only",
                "Two 3 m lengths of 1 mm bore in parallel",
              ],
              answer: 0,
              explain: "Restriction rises with length and falls with bore, so lengthening to 5 m or reducing the bore to 0.75 mm both increase it. Shorter or wider tubes reduce restriction, and putting two tubes in parallel roughly halves it — that is how large units pass more refrigerant while keeping a fine bore.",
            },
            {
              q: "Which of these is a genuine advantage of capillary tube control?",
              options: [
                "It automatically compensates for varying evaporator loads",
                "It can feed several evaporators from one condensing unit",
                "Pressures equalise on the off cycle, so the compressor restarts against no pressure difference and a low-starting-torque motor can be used",
                "It tolerates a wide range of refrigerant charge because the receiver absorbs the error",
              ],
              answer: 2,
              explain: "Equalisation on shutdown removes the starting load, which is why sealed units can use cheap split-phase and RSIR motors while larger valve-controlled machines need unloaders. The other three are precisely the capillary's weaknesses — it is a one-condition device, single-evaporator only, with a critical charge and no receiver.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
