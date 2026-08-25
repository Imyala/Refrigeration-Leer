/* =========================================================================
   Course content, module 112 — Electrical components.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 12 — Electrical components.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 12, Electrical components",
    "AS/NZS 3000 (the Wiring Rules) — motor and circuit protection, connections and terminations",
    "AS/NZS 4836 — safe working on low-voltage electrical installations; Australian Refrigerant Handling Code of Practice, Part 1",
  ];

  const MODULES = [
    {
      id: "v1-electrical-components",
      stream: "v1",
      title: "R1.12 · Electrical components",
      blurb: "Every switch, sensor, control, overload, capacitor, relay and controller bolted to a refrigeration plant — what it does, how it is rated, how it fails and how you test it.",
      lessons: [

        /* ============================================================== */
        {
          id: "switches-and-switching-devices",
          title: "Switches and switching devices",
          minutes: 10,
          simple: "A switch is just a pair of metal contacts that either touch or do not touch. Think of a drawbridge: it is either down so traffic crosses, or up so nothing crosses — there is no halfway. The different names for switches only describe how many bridges there are and how many roads each one can join.",
          refs: REFS,
          content: `
Nearly every fault you will chase on a refrigeration plant comes down to one
question: is this pair of contacts touching when it should be? Switches are the
simplest device in the whole electrical system and also the one that most often
strands a technician, because a switch that looks perfectly fine can have a
burnt face that will not pass current.

A switch contains contacts that sit in one of exactly two states — closed
(making, current flows) or open (broken, no current flows). There is no
in-between position on any mechanical switch. What varies between switch types
is how many separate circuits are switched at once, and how many destinations
each of those circuits can be sent to.

## Poles and throws

Two words describe every switch ever made.

- **Pole** — how many electrically separate circuits the one operating lever
  controls. A single-pole switch breaks one wire; a three-pole switch breaks
  three wires at the same instant, which is what you need for a three-phase
  motor.
- **Throw** — how many positions each pole can be connected to. Single throw
  means on or off. Double throw means the common terminal is handed from one
  destination to another.

| Switch | Short form | What it does | Where you meet it |
|---|---|---|---|
| Single-pole, single-throw | SPST | Breaks one conductor, on or off | Isolators for a single load, simple on/off controls |
| Single-pole, double-throw | SPDT | Common terminal C makes to 1 or to 2, never both | Two-way switching, heat/cool changeover, thermostat contacts |
| Double-pole, double-throw | DPDT | Two contact sets change over together | Reversing circuits, changing a motor's direction |
| Intermediate (changeover) | — | Swaps two pairs of conductors through a crossover | Three-way lighting, where a load is switched from three places |
| Triple-pole | TPST | Three single-pole units in one case, ganged | Three-phase isolation and switching |
| Rotary, single- or multi-pole | — | One or more poles selected across several angular positions | Fan-speed selectors — low/medium/high, mode switches |
| Three-heat switch | — | A rotary switch that combines two heating elements to give three heat outputs | Heater banks, defrost heat selection |

The intermediate switch is worth a second look because students often meet it
in a lighting question. Two conductors come in and two go out; operating it
either passes them straight through or crosses them over. That crossover is
what allows a lamp to be controlled from three or more positions when it sits
between two two-way switches.

The three-heat switch is named for its job, not its construction. With two
heating elements it can give a low output (elements in series), a medium output
(one element only) and a high output (both elements in parallel). It is
correctly described as a rotary switch.

## Mercury switches

On older air-conditioning thermostats the moving end of a bimetal coil carries a
small sealed glass tube holding a bead of mercury and two contacts. As the coil
twists with temperature, the tube tilts and the mercury runs down to bridge the
contacts. The mass of the mercury makes the change decisive — a clean snap
rather than a slow drag — so there is no arcing across slowly parting contacts
and no pitting. The trade-off is that the switch has to be mounted level, and
mercury is now controlled waste: a mercury thermostat that comes out of a plant
does not go in the bin, it goes to a licensed waste stream.

## How a switch is rated and selected

- **Voltage rating** — the insulation and contact gap must suit the circuit,
  typically 250 V or 440 V AC on refrigeration controls.
- **Current rating** — usually quoted separately for resistive and inductive
  loads. Inductive loads such as contactor coils and small motors draw a surge
  and then arc as the contacts part, so the inductive rating is always lower.
- **Utilisation category** — AC-1 for resistive duty, AC-3 for squirrel-cage
  motor duty. A switch rated 20 A AC-1 may only be good for 9 A AC-3.
- **DC rating** — much lower than the AC rating for the same contacts, because
  a DC arc has no current zero to help extinguish it.
- **Mechanical items** — enclosure IP rating, ambient temperature, number of
  operations, terminal type.

## How switches fail, and how you test one

Contacts pit and blacken from arcing, then run hot; springs weaken so contact
pressure drops; moisture corrodes the faces; a spade terminal works loose and
the heat finishes the job. Every one of those failures shows as *resistance*
where there should be almost none.

Dead testing, with the circuit isolated and proven dead:

1. Isolate, lock off, and prove the circuit dead with a tester you have proven
   on a known live source before and after.
2. Disconnect at least one side of the switch so you are not reading a path
   through the rest of the circuit.
3. Put the meter on continuity or the lowest ohms range. Short the leads first
   and note the lead resistance — often 0.2 to 0.5 ohms — and subtract it.
4. Operate the switch through every position and check every pole. A good
   closed contact reads under about 1 ohm; open reads OL.
5. On a multi-position rotary switch, confirm that only the intended contacts
   make in each position and that adjacent positions do not overlap.

Live testing, which only an appropriately licensed and authorised person may do:
measure the voltage *across* the switch while it is closed and carrying load.
A healthy closed contact drops close to zero volts. Anything more than about a
volt or two across a closed contact means resistance is building heat inside it,
and that switch is on its way out even though continuity looked acceptable at
zero current.

>! Only a licensed electrical worker may work on or test live low-voltage parts.
>! An ARCtick refrigerant handling licence authorises refrigerant work, not
>! electrical work. Where you are permitted to test live, follow the prove-test-prove
>! routine, use a CAT III or CAT IV rated meter with fused leads, and treat every
>! conductor as live until your own tester says otherwise.

## What to remember

- Poles = how many circuits are broken; throws = how many destinations each pole
  can reach.
- There is no mid position: a switch is either making or broken.
- A switch's inductive (AC-3) rating is the one that matters for motors and coils.
- Continuity proves the contacts touch; a live volt-drop test proves they can
  carry current without heating.
- Mercury switches must be level and are disposed of as controlled waste.
`,
          quiz: [
            {
              q: "A three-phase compressor is switched by a device that opens all three phases at once from a single handle. What is it?",
              options: ["Single-pole, double-throw switch", "Intermediate switch", "Triple-pole switch", "Three-heat switch"],
              answer: 2,
              explain: "Three poles means three separate circuits broken simultaneously by one operating mechanism. An intermediate switch crosses two conductors over for multi-point lighting control, and a three-heat switch is a rotary switch used to combine heating elements — neither isolates three phases.",
            },
            {
              q: "A contactor coil is switched by a control switch. The switch is rated 20 A AC-1 and 8 A AC-3. Which figure governs your selection?",
              options: ["AC-1, because the coil is a small load", "AC-3, because the coil is an inductive load that arcs as the contacts part", "Neither — coil loads have no rating", "Whichever is larger, to give a safety margin"],
              answer: 1,
              explain: "AC-3 is the inductive/motor duty rating and it is always the lower of the two, because an inductive load sustains an arc as the contacts open. Choosing the higher AC-1 number would leave the contacts burning out within months.",
            },
            {
              q: "A rotary fan-speed switch passes a continuity test on every position, yet the fan runs slowly and the switch body is hot after an hour. What is the most likely explanation?",
              options: ["The switch is fine; the fan motor must be faulty", "The contacts have enough resistance to drop voltage under load even though they read continuity at zero current", "Continuity testing cannot detect a closed contact", "The switch has been wired with the poles reversed"],
              answer: 1,
              explain: "A continuity test passes a few milliamps, which a pitted contact will carry. Under real load that same resistance produces a voltage drop and heat. This is exactly why a live volt-drop measurement across a closed contact — expect near zero volts — is the definitive test.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "sensors-and-probes",
          title: "Sensors: temperature, pressure and humidity",
          minutes: 12,
          simple: "A sensor is the part of a control that actually feels the world. Some sensors bend, some swell, and some just change how easily electricity passes through them. It is like the difference between a thermometer you read with your eyes and a smoke alarm that shouts at you — the sensing part is the same idea, only the way it reports differs.",
          refs: REFS,
          content: `
Every control system, from a five dollar bimetal stat to a supermarket rack
controller, starts at the same place: something has to react to the controlled
variable. That something is the sensor. It responds to a change in temperature,
pressure or humidity by changing its shape, its position, its length or its
electrical resistance, and the controller turns that change into action.

Get this straight and half of control fault-finding becomes easy, because a
controller can only be as right as the sensor feeding it. A probe reading three
kelvins high will hold a coolroom three kelvins warm and nothing about the
controller is wrong.

## Temperature sensors

| Type | What physically changes | Signal out | Typical use |
|---|---|---|---|
| Vapour or vapour-and-liquid charged power element | Charge boils, bellows expands | Mechanical force | Refrigeration thermostats, TX valves |
| Liquid-filled power element | Liquid expands hydraulically against a diaphragm | Mechanical force | Higher-force applications, industrial stats |
| Bimetal strip, spiral or helical | Two bonded metals of different expansion bend the strip | Mechanical movement | Air-conditioning thermostats, overloads |
| Rod and tube | High-expansion brass tube grows around a low-expansion invar rod | Mechanical movement | Chilled and hot water immersion sensing |
| Thermocouple | Two dissimilar metals generate a small EMF between hot and cold junctions | Millivolts | Instruments, flue and high-temperature work |
| Resistance sensor — RTD or thermistor | Resistance changes with temperature | Ohms | Electronic controllers, everything modern |

A **power element** is a sealed bulb, capillary and bellows charged with a
fluid. Warm the bulb and the pressure inside rises, pushing the bellows out. It
is the same trick used in a TX valve's power head. Vapour and vapour-and-liquid
charges push against the bellows with pressure; a fully liquid charge works
hydraulically, which gives a stiffer, more powerful action against a diaphragm.

A **bimetal** is two metals with very different coefficients of expansion bonded
together — commonly brass for high expansion and invar for low. Heat it and the
high-expansion side grows more, so the strip curls towards the low-expansion
side. Wound into a spiral or a helix, that small bend becomes a useful amount of
rotation at the free end, which can carry contacts, a mercury switch or an air
valve. The same principle powers overloads, so a bimetal you meet in a thermostat
and a bimetal you meet in an overload relay work identically.

The **rod and tube** element is the same differential-expansion idea, turned
inside out for immersion work. Water gives up heat quickly, so a small surface
area does the job and the movement is positive and fast.

**Electronic sensors** have taken over almost everything. Their advantages are
worth listing because they explain why every new plant is electronic: very low
mass, so they respond quickly; no mechanical link between sensor and controller,
so the probe can live metres away from the board; almost no moving parts to wear;
low cost; and dozens of them can feed one controller.

Two families dominate:

- **Thermistors** — usually NTC (negative temperature coefficient), so
  resistance *falls* as temperature rises. Ten kilohms at 25 °C is the near
  universal HVAC standard.
- **RTDs** — platinum elements, Pt100 (100 ohms at 0 °C) or Pt1000. Resistance
  rises with temperature at about 0.385 ohms per kelvin for a Pt100, so 20 °C
  reads roughly 107.7 ohms. They are more linear and more stable than a
  thermistor, and are what a chiller or a BMS air handler usually uses.

Typical readings for a 10 kilohm NTC probe, which you should carry in your head:

| Probe temperature | Approximate resistance |
|---|---|
| 0 °C | 33 kilohms |
| 10 °C | 20 kilohms |
| 25 °C | 10 kilohms |
| 40 °C | 5.3 kilohms |

A thermocouple works differently again: a current flows in a loop of two
dissimilar metals whenever the two junctions are at different temperatures, so
the millivolt output depends on the *difference* between the hot junction at the
measuring point and the cold reference junction. A type K gives roughly 40
microvolts per kelvin, which is why you need an instrument, not a bare
multimeter, to make sense of it.

## Pressure sensors

A bellows or a diaphragm converts pressure into movement. Make the diaphragm
large and it becomes extremely sensitive: a duct pressure sensor uses a big
diaphragm working on a lever so that a pressure change of a few pascals across a
filter produces enough force to drive a controller. The same diaphragm is the
heart of every pneumatic control and every pneumatic actuator.

Electronic pressure transducers have replaced most of this on refrigeration
plant. They output a standard signal — 4 to 20 milliamps, 0 to 10 volts, or a
ratiometric 0.5 to 4.5 volts referenced to a 5 volt supply. The controller then
converts the signal to a pressure and, using the refrigerant's PT relationship,
to a saturation temperature.

## Humidity sensors

Precise humidity measurement is done with a wet-bulb psychrometer or a dewpoint
instrument, but neither adapts well to continuous automatic control. Control
sensors instead use materials that change with moisture:

- **Mechanical** — human hair, nylon ribbon or wood. Hair shortens as it dries;
  linked to a lever it can switch a humidifier. That is a humidistat.
- **Electronic** — carbon grains on a moisture-absorbing cellulose base, or
  hygroscopic salts on a gold foil grid. The electrical resistance between the
  conductors changes as the material takes up or loses moisture, and the
  controller acts on the change.

## Testing sensors with a multimeter

1. **Compare, do not guess.** Read the controller's displayed value, then
   measure the actual medium with a calibrated instrument. A difference of more
   than about 1 K on a refrigeration probe deserves investigation.
2. **Resistance check.** Isolate, unplug the probe from the controller and
   measure across it on ohms. Compare with the manufacturer's resistance table
   at the temperature you can verify. An ice-water slurry gives you a free,
   genuinely accurate 0 °C reference — a 10 kilohm NTC should read about 33
   kilohms in it.
3. **Open or shorted.** OL means an open probe or a broken lead; a few ohms or
   near zero means water has got into the probe or the lead is crushed. Most
   controllers alarm these as probe faults and drive the output to a safe default.
4. **Lead faults.** Flex the cable at the gland while watching the meter. An
   intermittent reading is a broken strand, not a bad sensor.
5. **Transducers.** With the transducer powered, measure its output signal at
   the controller terminals and convert it against the manufacturer's scale,
   then compare with a gauge on the same port. A transducer that reads correctly
   at rest but wanders under load usually has a supply or screening problem.
6. **Power elements.** You cannot ohm-test a bulb and bellows. Warm the bulb in
   your hand or drop it in warm water and watch the contacts change over; a lost
   charge shows as no movement at all.

Never megger a circuit with electronic sensors connected — the test voltage will
destroy them. Disconnect them first.

## On the job

- The sensor sets the accuracy ceiling of the whole control loop.
- Bimetal and power elements produce force; thermistors and RTDs produce a number.
- 10 kilohms at 25 °C for an NTC; 100 ohms at 0 °C for a Pt100.
- Ice slurry gives you a reliable 0 °C calibration check anywhere on site.
- Probe location beats probe accuracy: a perfect sensor in a draught still lies.
`,
          quiz: [
            {
              q: "An NTC probe unplugged from a coolroom controller measures 20 kilohms. The room is holding steady. What is the probe seeing?",
              options: ["About 0 °C", "About 10 °C", "About 25 °C", "About 40 °C"],
              answer: 1,
              explain: "A standard 10 kilohm NTC reads 10 kilohms at 25 °C and rises as it gets colder — roughly 20 kilohms at 10 °C and 33 kilohms at 0 °C. Reading 20 kilohms as 25 °C would be reading the nominal rating instead of the curve.",
            },
            {
              q: "Why does a bimetal element bend when it is heated?",
              options: ["One metal conducts heat faster than the other", "The two metals have different coefficients of expansion, so one grows more than the other", "The magnetic field of the current pulls it over", "The metals oxidise at different rates"],
              answer: 1,
              explain: "Bonded strips of brass (high expansion) and invar (low expansion) grow by different amounts for the same temperature rise, so the strip curls toward the low-expansion side. Conduction rate is irrelevant once the strip reaches a uniform temperature.",
            },
            {
              q: "A technician is asked to insulation-test a control panel that contains electronic temperature probes and a microprocessor controller. What must be done first?",
              options: ["Nothing — insulation testers are safe on electronics", "Disconnect the electronic sensors and controller from the circuit being tested", "Set the tester to 1000 V for a faster test", "Test only while the plant is running"],
              answer: 1,
              explain: "An insulation tester applies hundreds of volts, which destroys semiconductors and thermistors. Disconnect the electronics first. Raising the test voltage makes the damage more certain, and insulation testing is never done on a live circuit.",
            },
            {
              q: "What is a humidistat's hair or nylon element actually doing?",
              options: ["Changing electrical resistance with humidity", "Changing length as it absorbs or loses moisture, which moves a lever", "Measuring wet-bulb depression directly", "Condensing moisture to give a dewpoint reading"],
              answer: 1,
              explain: "Hair, nylon ribbon and wood change dimension with moisture content — hair shortens as it dries — and that movement drives the switch. Resistance change describes the electronic type using carbon on cellulose or salts on a gold foil grid.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "thermostats",
          title: "Thermostats: bimetal, bulb-and-bellows and electronic",
          minutes: 12,
          simple: "A thermostat is a sensor with a switch bolted to it. It watches the temperature and flicks the power on when things get too warm and off when they get cold enough. The gap between those two points is deliberate — without it the plant would flick on and off constantly, like a tap you keep nudging.",
          refs: REFS,
          content: `
A thermostat is the most common control on any plant, and the one most often
blamed for faults it did not cause. Strip it back and it is only two parts: a
temperature sensor and a switch the sensor operates. What changes from model to
model is the sensor type, the range it covers, and how far the temperature has
to move before the switch changes state.

## The three families

**Bimetal thermostats** are the classic room and air-conditioning stat. A
bimetal spiral or helix carries the moving contact, or tilts a mercury switch,
at its free end. They are cheap, robust and slow, which suits air where nothing
changes quickly.

**Bulb-and-bellows thermostats** are the workhorse of refrigeration. A charged
bulb sits in the medium, a capillary carries the pressure to a bellows in the
control body, and the bellows works against an adjustable range spring to
operate a snap-action switch. This is what you find controlling a coolroom, a
freezer, a display case or a defrost termination. Because the bulb can hang on
the end of a metre or two of capillary, you can put the control where the
technician can reach it and the bulb where the temperature matters.

**Electronic thermostats and controllers** use a thermistor or RTD probe feeding
a microprocessor, which drives a relay output. They can hold much tighter
differentials, log alarms, run defrost cycles and be programmed for probe
offsets — and they cannot be adjusted with a screwdriver, only through the
keypad.

## Cut-in, cut-out and differential

Every on/off thermostat has two switching points, and knowing which one you have
set is the single most useful piece of thermostat knowledge.

- **Cut-out** — the temperature at which the contacts open and stop the plant.
- **Cut-in** — the temperature at which they close again and start it.
- **Differential** — the gap between them.

For a cooling application, a refrigeration thermostat *closes on temperature
rise*. Its bulb warms, bellows pressure rises, contacts make, compressor runs.

**Worked example.** A coolroom must average about 4 °C.

- Set cut-out (contacts open) at 2 °C.
- Set differential at 4 K.
- Cut-in is then 2 + 4 = 6 °C.
- Average air temperature = (2 + 6) ÷ 2 = 4 °C.

Widen the differential to 6 K and the cut-in becomes 8 °C — an average of 5 °C
and fewer, longer compressor runs. Narrow it to 1 K and the room holds tighter
but the compressor starts far more often, which shortens motor life and wastes
energy on repeated pull-down. On many controls the range screw moves both points
together and the differential screw moves only the cut-in, so always confirm both
points after adjusting either.

## Anticipators and hunting

*Hunting* is the tendency of a control to over-correct, so the temperature swings
wide above and below setpoint. Air-conditioning thermostats fight it with
anticipators, which are small heaters inside the stat that fool it into
switching slightly early.

- A **heat anticipator** is wired *in series* with the heating contacts. While
  heating runs it warms the bimetal, so the stat satisfies before the room does
  and the residual heat in the plant finishes the job. It is adjustable and must
  be set to match the current drawn by the heating control circuit.
- A **cold anticipator** is wired *in parallel* with the cooling contacts. It
  passes a small current during the off cycle, warming the element and bringing
  the cooling on slightly early.

Either way, the room ends up held at a steadier average temperature than the
mechanical differential alone would allow.

## Multi-stage thermostats

A two-stage thermostat has two sets of contacts arranged to operate at slightly
different temperatures. Stage one might bring on one compressor or one heater
bank, and stage two adds the second when the first cannot hold the space. Larger
air-conditioning stats provide two stages of heating and two of cooling, plus a
system switch (heat/off/cool) and a fan switch (auto/on).

## Selecting a thermostat

Work through this list before you order a replacement:

1. Temperature range required.
2. Differential between on and off, and whether it is fixed or adjustable.
3. Whether the contacts must open or close on temperature rise.
4. The medium being sensed — air, water, or clamped to a pipe or evaporator.
5. Number of stages required.
6. Operating voltage of the switch.
7. Current rating of the switch, for the load it will actually carry.

Bulb length, capillary length and the charge type also matter. A control whose
bulb runs colder than its body needs a cross-ambient charge, or the charge will
condense in the cold bulb and the control will stop responding.

## How thermostats fail

| Symptom | Likely cause |
|---|---|
| Plant never runs, contacts never close | Lost bulb charge — bellows collapsed; or open contacts/burnt out |
| Plant never stops, room over-cools | Welded contacts, or bulb dislodged and sensing return air instead of the room |
| Temperature swings widely | Differential set too wide, bulb badly located, or anticipator wrong |
| Rapid short cycling | Differential too narrow, bulb in a draught off the evaporator |
| Reading drifts over years | Bimetal fatigue, corroded probe, capillary kinked at a bracket |

A kinked or chafed capillary is a very common field failure. If the capillary is
pierced the charge escapes, the bellows relaxes, and a cooling thermostat's
contacts fall open — so the compressor never starts. That fail-safe direction is
deliberate.

## Testing a thermostat

1. Isolate and prove dead. Note which terminals are common, and which make on
   rise and on fall.
2. Measure the medium the bulb is actually sensing with a calibrated thermometer.
3. Set the dial well below the measured temperature — a cooling stat's contacts
   should be closed. Meter across them on continuity: expect under about 1 ohm.
4. Wind the dial up past the measured temperature. The contacts should snap open
   and read OL. If they do not, the control is dead or the charge is lost.
5. To check the actual set points, put the bulb in a stirred water bath with a
   calibrated thermometer, cool it slowly and note the temperature at which the
   contacts open, then warm it and note where they close. The difference is the
   real differential.
6. Live, where you are authorised: measure across the thermostat terminals in
   circuit. Closed contacts read close to 0 V; open contacts read full supply
   voltage because the load is completing the circuit on the other side.
7. On an electronic stat, verify the probe resistance first, then the relay
   output — you should hear the relay and measure continuity across the output
   terminals when the controller calls.

## On the job

- Cut-in equals cut-out plus differential on a cooling control; confirm both.
- A wide differential means longer, fewer runs; a narrow one means tighter
  control and far more starts.
- Anticipators reduce hunting; heat in series, cold in parallel.
- Lost charge on a cooling stat fails safe — the plant will not run.
- Always check where the bulb is before condemning the control.
`,
          quiz: [
            {
              q: "A coolroom thermostat is set to cut out at 1 °C with a 5 K differential. What is the cut-in temperature and the approximate average room temperature?",
              options: ["Cut-in 5 °C, average 3 °C", "Cut-in 6 °C, average 3.5 °C", "Cut-in −4 °C, average −1.5 °C", "Cut-in 6 °C, average 6 °C"],
              answer: 1,
              explain: "A cooling thermostat closes on rise, so cut-in = cut-out + differential = 1 + 5 = 6 °C, and the room cycles between 1 and 6 °C for an average near 3.5 °C. Subtracting the differential would describe a heating control, not a cooling one.",
            },
            {
              q: "A bulb-and-bellows coolroom thermostat has had its capillary chafed through on a bracket. What will the plant do?",
              options: ["Run continuously and freeze the room", "Refuse to start, because the bellows collapses and the cooling contacts open", "Short cycle rapidly", "Run normally but with a wider differential"],
              answer: 1,
              explain: "Losing the charge relaxes the bellows, which on a cooling control lets the contacts fall open — a deliberate fail-safe. Continuous running is the signature of welded contacts or a bulb sensing the wrong air.",
            },
            {
              q: "Which statement about a heat anticipator is correct?",
              options: ["It is wired in parallel with the heating contacts and cools the bimetal", "It is wired in series with the heating contacts and warms the bimetal so the stat satisfies early", "It is a second bimetal that senses outdoor air", "It increases the differential to reduce compressor starts"],
              answer: 1,
              explain: "The heat anticipator carries the heating control current in series and its heat makes the stat switch off before the room reaches setpoint, letting residual plant heat finish the job. The cold anticipator is the one wired in parallel, and it works during the off cycle.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "pressure-controls",
          title: "Pressure controls and how to set them",
          minutes: 13,
          simple: "A pressure control is a thermostat that feels pressure instead of temperature. A little bellows is plumbed to the system; when the pressure pushes hard enough, it flicks a switch. One watches the suction side to cycle or protect the plant, another watches the discharge side to shut things down before something bursts.",
          refs: REFS,
          content: `
Pressure controls do two very different jobs on a refrigeration plant and it
matters that you know which one you are looking at. Some are *operating*
controls that cycle the plant to hold conditions. Others are *safety* controls
that exist purely to shut the plant down before it damages itself or hurts
somebody. Never adjust a safety control to make a fault go away.

Mechanically they are all the same idea as a bulb thermostat, with one
substitution: instead of a charged bulb, a small tube carries actual system
pressure to the bellows. The bellows expands or collapses against an adjustable
range spring and operates a snap-action switch.

## The four you will meet

| Control | Connected to | Opens on | Job |
|---|---|---|---|
| Low pressure (LP) | Suction line | Falling pressure | Cycles compressor on load, pump-down control, protects against freeze-up and loss of charge |
| High pressure (HP) | Discharge line | Rising pressure | Shuts the plant down before discharge pressure becomes dangerous |
| Dual pressure control | Both, two separate bellows | Either condition | One case, one switch, less wiring than two separate controls |
| Oil pressure differential | Oil pump discharge and crankcase | Loss of net oil pressure, after a delay | Protects the compressor from running without lubrication |

A dual control has one bellows for each side, both arranged to operate the one
set of contacts. It saves wiring in the control circuit and takes up less panel
space, but it also means one failed control loses both protections.

LP controls are also built as *manual reset safety switches*. The switch works
the same way, but once the bellows has opened it, a latch holds it open until
somebody presses the reset button. It is set below the normal operating LP
control so it only acts if the operating control has failed, and it is fitted on
plant where an ice-up would do real damage — a water chiller is the obvious
example, where freezing the evaporator tubes wrecks the machine. HP and dual
controls are made in both auto-reset and manual-reset versions too.

>! An HP control that has tripped has done its job. Resetting it repeatedly
>! without finding out why head pressure rose is how condensers get destroyed
>! and relief devices get lifted. Never wind an HP setting up to keep a plant
>! running, and never bridge out a safety control to prove a point.

## Range, differential and setting them

Two scales, two screws, two very different meanings.

- The **range** (or cut-out) screw sets the pressure at which the control
  operates.
- The **differential** screw sets how far the pressure has to move back before
  the contacts return.

For an LP control, the contacts open on falling pressure, so:

**cut-in = cut-out + differential**

**Worked example — LP cycling control.** A coolroom is to pump down at 150 kPa
gauge and restart at 350 kPa gauge.

- Set the cut-out scale to 150 kPa.
- Required differential = 350 − 150 = 200 kPa.
- Set the differential scale to 200 kPa.
- Confirm on a gauge manifold: slowly throttle the suction and watch the point at
  which the contacts open, then let pressure recover and note the restart.

Always sanity-check the numbers against the refrigerant's PT relationship. A
150 kPa cut-out means very different saturation temperatures on R134a and on
R404A, and it is the *saturation temperature* that decides whether the coil ices.

For an HP control, the contacts open on rising pressure, so:

**reset pressure = cut-out − differential**

**Worked example — HP safety.** An air-cooled R404A plant is set to trip at
2500 kPa gauge with a fixed differential of 400 kPa. It will cut out at 2500 kPa
and, if the control is auto-reset, close again once head pressure falls to
2500 − 400 = 2100 kPa. The trip must sit safely below the design pressure of the
system and below the setting of any pressure relief device — the relief device is
the last line of defence, and the HP switch should always act first.

!SIM[Watch head pressure climb toward an HP trip on a dirty condenser](fault=dirtyCondenser)

!SIM[See suction pressure fall toward an LP cut-out on low charge](fault=lowCharge)

## The oil pressure differential switch

This one confuses people because it is not measuring oil pressure at all — it is
measuring the *difference* the oil pump is producing.

An oil pump on a semi-hermetic compressor draws from a crankcase that is already
at suction pressure. If the crankcase sits at 380 kPa and the gauge on the pump
discharge reads 850 kPa, the pump is only actually generating:

**net oil pressure = 850 − 380 = 470 kPa**

That net figure is what lubricates the bearings, and that is what the control
watches. Two bellows oppose each other — one from the pump discharge, one from
the crankcase — working on one set of contacts.

The clever part is the time delay. On start-up, the pump has not built pressure
yet, so a control without a delay would trip every start. Instead, when net oil
pressure is low the contacts close and energise a small heater. The heater warms
a bimetal. If net oil pressure recovers within the delay period, the heater is
de-energised and nothing happens. If it does not, the bimetal bends far enough to
open a second set of contacts wired into the compressor control circuit, and the
compressor stops. Typical settings are a trip at roughly 65 kPa net oil pressure
with a delay in the order of 45 to 120 seconds depending on the model, and almost
all of them require a manual reset before the compressor can restart.

That manual reset is deliberate. A compressor that has lost oil pressure has
probably already been damaged, and nobody wants it starting again unattended.

## Failure modes

- **Bellows leak** — the control reads low or stops responding; on an LP control
  the plant will not start, on an HP control the protection is silently gone.
- **Blocked or kinked capillary or a seized Schrader** — the control sees an old
  pressure and acts late or not at all.
- **Contacts welded** — no protection at all; the plant runs to destruction.
- **Corroded adjusting mechanism** — settings drift or the screw will not move.
- **Wrong control fitted** — an LP body used on the high side will be destroyed.

## Testing a pressure control

1. Isolate the electrical supply and prove dead. Connect a gauge manifold to the
   same side of the system the control senses.
2. Dead test the contacts: with the plant off and the pressure known, meter
   across the terminals. Compare with what the setting says the contacts should
   be doing at that pressure.
3. To verify the cut-out, run the plant and throttle the appropriate valve
   slowly, watching gauge and meter together. Note the pressure at the instant
   the contacts change. Never force a plant into a high-pressure trip by
   blocking the condenser air path any longer than it takes to reach trip.
4. Off the plant, a control can be tested on a nitrogen rig through a regulator
   and a gauge, raising and lowering pressure to find both switch points.
5. Live, where authorised: full supply voltage across the control's terminals in
   circuit means it is open; near 0 V means it is closed and passing current.
6. On an oil control, check the delay too — time from contacts closing to
   compressor shutdown with a watch, and compare to the nameplate.

## What to remember

- LP: cut-in = cut-out + differential. HP: reset = cut-out − differential.
- Operating controls cycle the plant; safety controls stop it. Do not confuse them.
- Net oil pressure = oil pump discharge − crankcase pressure.
- The oil control's delay exists so start-up does not trip it; the manual reset
  exists so a damaged compressor cannot restart itself.
- Every pressure trip has a cause. Find it before you reset anything.
`,
          quiz: [
            {
              q: "An LP control is to cut out at 120 kPa gauge and cut in at 340 kPa gauge. What differential must be set?",
              options: ["120 kPa", "220 kPa", "340 kPa", "460 kPa"],
              answer: 1,
              explain: "For a control that opens on falling pressure, cut-in = cut-out + differential, so differential = 340 − 120 = 220 kPa. Adding the two figures (460 kPa) confuses the differential with the cut-in point.",
            },
            {
              q: "A semi-hermetic compressor's crankcase is at 250 kPa and the oil pump discharge gauge reads 700 kPa. What net oil pressure is the differential switch seeing?",
              options: ["250 kPa", "450 kPa", "700 kPa", "950 kPa"],
              answer: 1,
              explain: "The pump has to lift oil from a crankcase already at suction pressure, so the useful pressure is the difference: 700 − 250 = 450 kPa. Reading the discharge gauge alone (700 kPa) is the classic mistake and would badly overstate lubrication.",
            },
            {
              q: "Why does an oil pressure failure switch include a heater and a bimetal rather than tripping instantly?",
              options: ["To limit the current through the contacts", "To give a time delay so the compressor can build oil pressure after starting without nuisance tripping", "To keep the oil warm in cold ambients", "To provide the manual reset function"],
              answer: 1,
              explain: "At the instant of starting there is no oil pressure, so an instantaneous trip would stop every start. The heater and bimetal introduce a delay of roughly 45 to 120 seconds. The manual reset is a separate latch, and the heater does nothing to oil temperature.",
            },
            {
              q: "A plant keeps tripping on high pressure in hot weather. What is the correct response?",
              options: ["Raise the HP cut-out setting until it stops tripping", "Fit a jumper across the HP contacts until parts arrive", "Find and fix the cause of the high head pressure — dirty condenser, failed fan, overcharge or non-condensables", "Reduce the HP differential so it resets sooner"],
              answer: 2,
              explain: "The HP control is a safety device reporting a real fault; it is not the fault. Raising the setting or bridging it removes the only protection standing between the plant and a burst component, and reducing the differential just makes it cycle on the trip point.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "overloads-and-motor-protection",
          title: "Overloads, fuses and motor protection",
          minutes: 13,
          simple: "A motor that is working too hard gets hot, and a hot motor eventually cooks its own insulation. An overload is a device that notices the motor is drawing too much current and pulls the plug before that happens — a bit like a circuit breaker, except it is watching the motor rather than the wiring.",
          refs: REFS,
          content: `
Under AS/NZS 3000, the Wiring Rules, any motor above 100 watts that runs
unattended must have overload protection. That is not optional and it is not
negotiable, and every refrigeration plant is by definition unattended. Somebody
has to notice when the motor is drawing more current than it should, and stop it
before the winding insulation is destroyed.

Understand this distinction before anything else:

- A **fuse or circuit breaker** protects the *cable* and clears a short circuit.
  It reacts to very large faults quickly and must be able to ride through a
  motor's locked-rotor inrush without tripping.
- An **overload** protects the *motor*. It reacts to a modest, sustained
  overcurrent — say 115 to 130 per cent of full-load current — which a fuse
  would happily carry all day while the winding slowly cooks.

One does not substitute for the other.

## The main types of overload

| Type | Sensing method | Reset | Typical application |
|---|---|---|---|
| Thermal disc (klixon type), external | Bimetal disc heated by a small element carrying motor current, or by the compressor shell | Auto or manual | Small single-phase hermetic compressors, fan motors |
| Embedded (internal, imbedded) | Sensor buried in the winding, reacts to winding temperature | Usually auto, after cooling | Hermetic and semi-hermetic motors |
| Thermal overload relay (bimetal, three-phase) | One bimetal strip per phase, heated by motor current | Selectable hand or auto | Every three-phase contactor starter |
| Electronic motor protection module | PTC thermistor chain in the windings, plus current sensing | Manual, usually | Modern scroll and semi-hermetic compressors |
| Magnetic overload | Solenoid coil trips instantly on a large surge | Manual | Instantaneous short-circuit protection in starters |

### Thermal disc overload

A bimetal disc sits close to a small heating element, and the motor current
flows through that element. Draw more current than normal and the element heats;
enough heat and the disc snaps over, opening the contacts and stopping the motor.
Manual-reset versions have a small button that re-shapes the disc to reclose the
contacts. In an enclosed type, heat conducted from the motor body itself does the
work — and in some designs the bimetal *is* the heater, serving both purposes.

This is the familiar external overload clipped to the shell of a small hermetic
compressor. Note that it senses two things at once: the current flowing and the
temperature of the shell. That combination is why a compressor with a blocked
condenser trips even when its current looks acceptable.

### Embedded overload

These are strictly *over-temperature* devices, even though everyone calls them
overloads, because they respond to winding temperature rather than current
directly. A small cylindrical sensor with a lead out each end is wound into the
motor coil.

Two wiring arrangements exist and telling them apart matters:

- **In series with the winding** — the device carries motor current, and when it
  trips the winding is directly disconnected. Nothing on the terminal block will
  tell you it has operated.
- **Brought out separately to the terminal block** — the device carries only a
  small control current and its contacts are wired into the contactor circuit.
  This is preferred on anything of size, because the contactor drops out rather
  than the winding breaking under load.

Modern compressors bring out a chain of PTC thermistors instead of contacts, into
an electronic module. The module trips when the chain's resistance rises past a
defined threshold and resets when it falls again — so you cannot test it as a
simple open/closed contact; you measure resistance against the manufacturer's
figures.

### Thermal overload relay

This is the bar-shaped unit that clips under a three-phase contactor. Inside are
three bimetal trips, one per phase, each heated by the current in that phase.
As they bend, they push a trip bar, which moves a switch rocker through a current
setting screw and a temperature-compensation bimetal, until a snap-action
auxiliary contact flips over.

The important contacts are:

- **95–96, normally closed** — wired in the contactor coil circuit. When the
  overload trips, this opens, the coil de-energises, and the motor is
  disconnected.
- **97–98, normally open** — used for an alarm lamp or a fault input.

Because the bimetals are in series with the motor, disconnecting the motor also
stops heating them, so they cool and return to their initial position. A
reset selector lets you choose hand or auto reset — hand reset is required
wherever an unexpected restart could injure somebody.

The temperature-compensation bimetal on the switch rocker deserves a mention: it
bends with *ambient* temperature and offsets the trips, so a relay in a hot
plantroom does not trip a motor that is running perfectly well.

**Setting the relay.** The current setting screw is set to the motor's full-load
current from the nameplate, not to the circuit breaker size and not to whatever
stops the nuisance trips. Trip classes describe how long the relay will carry a
starting current: class 10 trips within 10 seconds at 7.2 times setting, class 20
within 20 seconds, class 30 within 30. Ordinary refrigeration compressors use
class 10; a high-inertia fan may need class 20.

## Fuses and circuit breakers

- **HRC fuses** — high rupturing capacity, sand-filled. General purpose (gG)
  fuses protect cables; motor-rated (aM) fuses deliberately ignore starting
  surge and only clear short circuits, so they must always be paired with a
  separate overload.
- **Miniature circuit breakers** — the tripping curve is what matters. A type C
  breaker tolerates 5 to 10 times rated current briefly and suits most HVAC
  loads; a type D tolerates 10 to 20 times and suits high-inrush motors and
  transformers. A type B breaker on a compressor circuit will trip on inrush.
- **RCDs** — 30 milliamp residual current devices for personnel protection where
  the Wiring Rules require them. A wet compressor terminal box or a damaged
  heater will trip an RCD long before it trips an overload.

Rating is set by the cable, the load and discrimination: the device nearest the
fault should clear first so the whole plant does not go dark.

## Why overloads trip

| Symptom | Cause to look for |
|---|---|
| Trips after long running in hot weather | Dirty condenser, failed condenser fan, high head pressure |
| Trips shortly after start, motor hums | Locked rotor, failed start capacitor or relay, seized compressor |
| Trips randomly, current unbalanced | Loose terminal, single phasing, supply voltage imbalance |
| Trips only with a second plant running | Supply voltage sag, undersized cable, poor connection upstream |
| Never trips, motor burns out | Overload set too high, wrong device, welded contacts, bypassed |

Voltage imbalance is the quiet killer. A small voltage imbalance produces a much
larger current imbalance and a lot of extra heat in the rotor.

**Worked example — current imbalance.** Clamp readings on a three-phase
compressor: 12.1 A, 11.4 A, 12.5 A.

- Average = (12.1 + 11.4 + 12.5) ÷ 3 = 36.0 ÷ 3 = 12.0 A
- Greatest deviation from average = 12.0 − 11.4 = 0.6 A
- Imbalance = 0.6 ÷ 12.0 × 100 = **5 per cent**

Five per cent current imbalance is worth investigating; ten per cent needs
correcting before the motor is damaged. Check supply voltages phase to phase,
then the terminal connections, before blaming the motor.

## Testing overload protection

1. Read the nameplate. Note full-load current (FLA) and, on a hermetic, the
   locked rotor current (LRA).
2. Clamp each phase while running and compare with FLA. A compressor running at
   or above FLA is being asked to do too much, whatever the trip status.
3. Check the relay's dial setting matches FLA.
4. Press the test button on a thermal overload relay and confirm the contactor
   drops out — that tests the mechanism and the control wiring in one move.
5. Dead test 95–96 for continuity: closed and near 0 ohms when healthy, OL when
   tripped.
6. On an external klixon, isolate, disconnect it and measure across the terminals
   — near 0 ohms when cool and closed, OL when hot or failed. A klixon that has
   just tripped needs to cool before it can be tested meaningfully.
7. On internal protection brought out to the terminal block, measure across those
   terminals; for a PTC chain, compare the resistance with the manufacturer's
   trip and reset figures rather than expecting a simple short.
8. Never bridge an overload to prove it is the problem and then leave it bridged.

## On the job

- Fuses and breakers protect cable; overloads protect motors. You need both.
- Set the overload to nameplate FLA, never to whatever stops it tripping.
- 95–96 is the normally closed contact that drops the contactor.
- An overload that trips is telling you something true. Find out what.
- Check voltage and current balance before condemning a three-phase motor.
`,
          quiz: [
            {
              q: "Under AS/NZS 3000, which motors operating unattended must have overload protection?",
              options: ["All three-phase motors only", "Any motor above 100 watts", "Any motor above 1 kilowatt", "Only hermetic compressors"],
              answer: 1,
              explain: "The Wiring Rules set the threshold at 100 watts for unattended motors, single- or three-phase. Restricting it to three-phase or to 1 kW would leave the majority of refrigeration fan and compressor motors unprotected.",
            },
            {
              q: "Three-phase compressor currents measure 9.6 A, 10.2 A and 10.2 A. What is the current imbalance?",
              options: ["2 per cent", "4 per cent", "6 per cent", "10 per cent"],
              answer: 1,
              explain: "Average = (9.6 + 10.2 + 10.2) ÷ 3 = 10.0 A; greatest deviation = 10.0 − 9.6 = 0.4 A; imbalance = 0.4 ÷ 10.0 × 100 = 4 per cent. Comparing the highest to the lowest reading instead of to the average is the usual error and gives a misleading figure.",
            },
            {
              q: "Why can a motor-rated aM fuse never be used as the only protection on a compressor circuit?",
              options: ["It cannot break a short circuit", "It is designed to ignore starting surge and sustained modest overcurrent, so it will not protect the winding from cooking", "It only works on three-phase supplies", "It has no voltage rating"],
              answer: 1,
              explain: "aM fuses deliberately tolerate inrush and only clear short circuits, which is exactly why they must be paired with a separate overload sized to the motor's full-load current. They break short circuits very well — that is their whole purpose.",
            },
            {
              q: "An external klixon-type overload on a small hermetic compressor senses which of the following?",
              options: ["Only the current drawn by the motor", "Only the temperature of the compressor shell", "Both the current through its element and the heat conducted from the compressor shell", "The suction pressure"],
              answer: 2,
              explain: "The disc is heated both by the element carrying motor current and by heat from the shell it is clipped to, which is why a compressor with a blocked condenser trips even at apparently acceptable current. Neither single-cause option describes how the device actually behaves.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "contactors-relays-solenoids-timers",
          title: "Contactors, relays, solenoid coils and timers",
          minutes: 13,
          simple: "A contactor is an electrically operated switch: a small current through a coil makes a magnet, and the magnet slams a set of heavy contacts closed to feed a motor. It lets a tiny thermostat control a huge compressor, the way a light switch on the wall can open an entire garage door.",
          refs: REFS,
          content: `
The whole point of a contactor is leverage. A thermostat's contacts could never
carry the current a three-phase compressor draws, and you would not want mains
motor current running through a control panel to a wall thermostat anyway.
Instead, the control circuit switches a small coil, and the coil switches the
heavy stuff.

## Contactor construction

Four parts: an electromagnet coil, a fixed magnetic core, a moving armature, and
the contacts carried on that armature.

Energise the coil and its magnetic field pulls the hinged or sliding armature
onto the core, which drives the contacts closed and completes the motor circuit.
De-energise it and a spring — or in some designs simply the weight of the
armature — pulls everything back, opening the contacts.

That behaviour gives you a free safety feature: on a power failure the contactor
drops out and stays out. The plant cannot restart itself when supply returns
unless the control circuit deliberately calls it. That is *undervoltage release*
and it is one of the reasons a latch circuit is used instead of a simple switch.

A contactor carries two kinds of contact:

- **Main (power) contacts** — heavy, silver-alloy faced, normally open, numbered
  1–2, 3–4 and 5–6 on a three-pole unit. These carry motor current.
- **Auxiliary (control) contacts** — small, used for interlocks, hold-in
  circuits, sequencing, crankcase heaters and indication. A typical unit offers
  two normally open (13–14, 43–44) and two normally closed (21–22, 31–32). The
  coil terminals are marked A1 and A2.

The numbering is not decoration. The second digit tells you the function: a
contact ending in 1–2 is normally closed, one ending in 3–4 is normally open.

**Shading rings.** On an AC coil, the magnetic force falls to zero twice every
cycle, which would make the armature buzz and hammer. A copper shading ring set
into the pole face carries an induced current that keeps a portion of the flux
alive through the zero crossing and holds the armature down. A broken shading
ring, or dirt and rust on the pole faces, is the usual cause of a loudly chattering
contactor.

## Rating and selection

- **Coil voltage** — must match the control circuit exactly: 240 V, 415 V, 24 V
  or 110 V. A 24 V coil on 240 V burns out in seconds.
- **Utilisation category** — AC-3 for squirrel-cage motor duty (the rating that
  counts on a compressor), AC-1 for resistive loads such as heater banks.
- **Rated current or motor kW at 415 V** — chosen for the motor's full-load
  current with the starting current in mind.
- **Auxiliary contacts required** — for latching, interlocking and status.
- **Number of poles** and enclosure/IP rating.

Control relays work identically but are physically smaller because they never
have to make or break motor starting current. Their contacts do the same job as a
contactor's auxiliary contacts: interlocking, sequencing, isolating a control
signal, or switching a low-current load. They are commonly plug-in units on an
8- or 11-pin base clipped to a DIN rail, which makes swapping one a 30-second
job.

Do not confuse control relays with the *start relays* used on single-phase
hermetic compressors. Those do a different job and are covered separately.

## Solenoid valves and their coils

A solenoid valve is the same electromagnet in miniature, lifting a plunger
instead of an armature. Energise the coil and the magnetic field draws the
plunger up, which either lifts the seat directly (a direct-acting valve) or opens
a pilot port and lets pressure difference do the work (a servo or pilot-operated
valve). De-energise it and the plunger falls back under gravity and spring force.

Key ratings:

- **Coil voltage and frequency** — 240 V 50 Hz is standard here, but 24 V and DC
  coils are common on packaged equipment. The frequency matters on an AC coil.
- **MOPD — maximum opening pressure differential.** A pilot-operated valve needs
  *some* differential to open, and cannot open against more than its MOPD. Fit a
  valve with too low an MOPD and it will simply refuse to open under high head
  pressure.
- **Port size and capacity**, and whether it is normally closed or normally open.

Failure modes are predictable. A coil left energised with the plunger jammed
draws far more current than normal — the plunger's presence is what limits the
coil current — and burns out. Dirt on the seat means the valve leaks by and a
pump-down never completes. A buzzing valve is usually low voltage, a worn plunger
or debris in the tube. A blown coil often follows a stuck valve, so replacing only
the coil is a good way to be back next week.

## Timers and defrost timers

Timers appear all over refrigeration.

- **Electromechanical defrost time clocks** — a small synchronous motor drives a
  cam wheel through gears; pins on the wheel initiate and terminate defrost. The
  familiar four-terminal unit has terminal 1 as the incoming active and common,
  terminal 2 feeding the compressor, terminal 3 feeding the defrost heaters, and
  terminal 4 as the neutral for the timer motor. Terminals 2 and 3 are the two
  ends of a changeover contact, so the compressor is off while the heaters are on.
- **Defrost strategies** — *time initiated, time terminated* ends the defrost when
  the clock says so. *Time initiated, temperature terminated* is better: a
  defrost termination thermostat clipped to the evaporator ends the defrost as
  soon as the coil is clear, with the clock providing a fail-safe time limit if
  the thermostat never satisfies.
- **Drip and fan delay** — a short delay after defrost lets water drain and the
  coil re-cool before the fans restart, so you do not blow water and warm air into
  the room.
- **Anti-short-cycle timers** — enforce a minimum off time, typically several
  minutes, so a compressor cannot restart against equalised-but-not-yet-settled
  pressures. On older plant this was built from a latch relay and a timer; today
  it is a parameter in the controller.
- **Starting timers** — the changeover delay in a star-delta or part-winding
  starter, and the sequencing delays between a pump starting and a compressor
  following it.
- **Electronic controllers** absorb all of the above into software. The clock is
  still there, it just has no gears.

## Testing with a multimeter

**Contactor or relay coil.** Isolate and prove dead, disconnect at least one coil
lead, and measure across A1 and A2. Depending on size, a 240 V AC coil measures
from tens to several hundred ohms — the value matters less than the two failure
extremes: OL means an open, burnt-out coil; a reading near zero means a shorted
coil that will blow the control fuse the moment it is energised. Compare with the
manufacturer's data or with an identical spare.

**Contacts.** Dead test each pole with the armature released (expect OL on the
normally open mains contacts) and again with the armature pushed in by hand
(expect under about 1 ohm). Push it gently and squarely — do not lever it.

**Under load.** Where you are authorised to test live, measure the volt drop
across each closed main contact while the motor runs. Near zero volts is healthy.
A volt or more means a pitted contact that is generating heat, and the contactor
should be replaced before it welds.

**Chatter diagnosis.** Measure the actual coil voltage while the contactor is
attempting to pull in. Well below nominal points to supply sag, a weak
transformer, or a long control run. Correct voltage plus chatter points to a
broken shading ring or dirty pole faces.

**Solenoid coil.** Measure coil resistance disconnected, and check for continuity
to the coil housing (there should be none). With the coil in place and the plant
running, a simple field check is to hold a screwdriver blade against the top of
the coil: energised, it will be pulled firmly onto the enclosure tube. If the
coil is magnetic but the valve does not pass, the valve body or plunger is at
fault, not the electrics.

**Timers.** With the supply isolated, advance the cam by hand and check the
changeover contacts with a meter — continuity 1 to 2 in refrigeration, and 1 to 3
in defrost. Confirm the timer motor runs by watching the pointer over a few
minutes. On an electronic controller, force a manual defrost and verify the
output relay actually closes.

>! Contactor coils and control transformers stay live even when the motor
>! circuit is isolated, because control supplies are frequently fed from a
>! different circuit. Prove every conductor dead — not just the ones you expect
>! to be live.

## What to remember

- Contactor: coil, core, armature, contacts. Small current controls big current.
- Contact numbers ending in 3–4 are normally open; ending in 1–2 are normally closed.
- 95–96 on the overload drops the coil circuit; A1 and A2 are the coil terminals.
- MOPD governs whether a solenoid valve can open against system pressure.
- A defrost that is temperature terminated with a fail-safe time beats a
  time-terminated one every time.
`,
          quiz: [
            {
              q: "A three-phase contactor buzzes loudly but the measured coil voltage is correct at 240 V. What is the most likely cause?",
              options: ["The coil is open circuit", "A broken shading ring or dirt on the pole faces", "The overload is set too low", "The main contacts are welded closed"],
              answer: 1,
              explain: "The shading ring keeps flux alive through the AC zero crossings and stops the armature hammering; if it is broken, or the pole faces cannot seat cleanly, the contactor chatters even at correct voltage. An open coil would not pull in at all, and welded contacts do not buzz.",
            },
            {
              q: "Which contactor terminals are the normally closed auxiliary contact?",
              options: ["13–14", "21–22", "1–2 on the main pole", "A1–A2"],
              answer: 1,
              explain: "Auxiliary contacts ending in 1–2 are normally closed and those ending in 3–4 are normally open, so 21–22 is NC and 13–14 is NO. A1–A2 are the coil terminals, and 1–2 on a main pole is a heavy normally open power contact numbered under a different convention.",
            },
            {
              q: "A liquid line solenoid coil has burnt out twice in a month. What should you check before fitting a third coil?",
              options: ["Only the supply voltage", "Whether the plunger is free to lift and the valve is the right MOPD for the pressure differential", "The refrigerant charge weight", "The compressor oil level"],
              answer: 1,
              explain: "A coil's current is limited by the plunger being drawn into it; a jammed plunger, or a valve asked to open against more than its MOPD, leaves the coil drawing high current until it cooks. Supply voltage is worth checking too, but replacing coils without freeing the valve just repeats the failure.",
            },
            {
              q: "On a four-terminal defrost time clock, which terminals feed the defrost heaters and the timer motor neutral respectively?",
              options: ["1 and 2", "2 and 3", "3 and 4", "4 and 1"],
              answer: 2,
              explain: "Terminal 1 is the incoming active and common, 2 feeds the compressor, 3 feeds the defrost heaters, and 4 is the timer motor neutral. Terminals 2 and 3 are the two ends of one changeover contact, which is why the compressor stops while the heaters run.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "capacitors",
          title: "Capacitors: start, run and power factor",
          minutes: 14,
          simple: "A capacitor is two sheets of metal separated by a thin insulator; it stores electricity like a very small, very fast battery. In a single-phase motor it is used to push some of the current out of step with the rest, which is what gives the motor something to twist against so it can start turning.",
          refs: REFS,
          content: `
Capacitors do two jobs on refrigeration plant: they get single-phase motors
started and running, and they correct power factor on larger installations. They
are also the component most likely to hurt you, because a capacitor holds its
charge after the power is off.

>! A capacitor can hold a lethal charge for a long time after the plant is
>! isolated. Before touching the terminals, discharge it deliberately through a
>! resistor of about 20 kilohms rated 2 watts held across the terminals for at
>! least 10 seconds, then confirm with a meter that it reads 0 V. Never short a
>! capacitor with a screwdriver blade: the discharge current can weld the tip,
>! spray molten metal, and rupture the capacitor.

## Construction and what the ratings mean

A capacitor is two conducting plates separated by an insulator called the
dielectric. Two properties follow directly from that:

- **Plate area determines capacitance** — how much charge it stores per volt.
- **Dielectric type and thickness determine the voltage rating** — how much
  potential it can stand before it punches through.

For refrigeration duty both electrolytic and film types are built in *rolled*
form: two layers of aluminium foil rolled up between layers of insulation, with
one end of each foil brought out as a lead. Rolling gives an enormous plate area
in a small can.

Capacitance is measured in **farads**, which is an absurdly large unit, so
everything you handle is marked in **microfarads** — one millionth of a farad.
You will see this written as µF, uF, MFD, mfd or MF on different labels; they all
mean the same thing.

## What happens electrically

Apply voltage and electrons pile onto the plate connected to the negative side
while electrons are drawn off the other plate. When the plate holds as many
electrons as that voltage can push onto it, the capacitor is charged. Remove the
supply and the charge stays. Connect a load and the capacitor discharges through
it until the plates are equal again.

Left alone, a capacitor slowly self-discharges as electrons leak through the
dielectric — and how long that takes is one of the traditional ways of judging
whether a capacitor is still serviceable. Because the charge can persist,
larger capacitors are often fitted with a small **bleed resistor** across the
terminals to discharge them after the supply is removed. If you are measuring a
capacitor, that resistor has to be disconnected or it will distort your readings.

On AC, a capacitor makes current **lead** the voltage by 90 degrees. The reason
is simple: charging current is greatest at the instant the voltage starts to rise
from zero, and falls to nothing when the voltage is at its peak and the capacitor
is full. That 90 degree lead is exactly what a split-phase motor needs — it puts
the start winding's current out of step with the run winding's, producing a
rotating field and starting torque.

## Start capacitors versus run capacitors

| | Start capacitor | Run capacitor |
|---|---|---|
| Dielectric | Electrolytic | Paper or plastic film, often oil-filled |
| Case | Black plastic, usually | Metal can, usually |
| Typical size | 50 to 400 µF and up | 2 to 30 µF |
| Voltage rating | Typically 250 or 330 V AC | Typically 400, 440 or 450 V AC |
| Duty | A few seconds per start only | Continuous, energised whenever the motor runs |
| Rated in | Operations (starts) per hour, commonly six to eight | Continuous current and voltage |

An electrolytic capacitor is polarity sensitive, so on its own it would break
down 50 times a second on AC. The trick used in start capacitors is to build two
sections into one case connected back to back, so that on each half cycle one
section is shorted out while the other is connected the correct way round. That
works, but the shorted half heats, which is precisely why a start capacitor may
only be in circuit for a few seconds and why it is rated in starts per hour.

Run capacitors have only one set of plates, are not polarity sensitive, and are
built to sit in circuit permanently. For the same capacitance they are physically
several times larger than an electrolytic.

## The dot, and why it matters

Many capacitors carry a small dot or arrow beside one terminal. That terminal is
connected to the plate nearest the case. **Connect the marked terminal to the
supply (active) side of the circuit.** If the capacitor then breaks down to its
case, the fault goes to the supply and blows the protective device instead of
driving excess current through the motor's start winding. The same marking and
the same rule apply to run capacitors in split-phase motors.

## Power factor correction

Inductive loads — motors, transformers, chokes — make current *lag* voltage.
Capacitors make current *lead* it. Put the right amount of capacitance in
parallel with an inductive load and the two cancel, bringing the power factor
towards unity (1.0). Correction capacitors are the paper or film type and range
from a few microfarads to hundreds, depending on the size of the installation.
Most Australian supply authorities require an installation to maintain a power
factor of at least 0.85.

## Selecting a replacement

- **Capacitance must match the manufacturer's figure.** Too small and the motor
  will not develop the torque; too large and the start winding sees excessive
  current. Either can damage the windings.
- **Voltage rating may be equal or higher, never lower.** A 450 V run capacitor
  is a legitimate substitute for a 400 V one; the reverse is not.
- **Starts per hour** must suit the application on a start capacitor.
- Physical size, terminal type and mounting must let you secure it properly. A
  capacitor rattling loose in a compressor compartment will fail.

## How capacitors fail

| Symptom | Likely capacitor fault |
|---|---|
| Motor hums, will not start, trips the overload on LRA | Open or badly degraded start capacitor, or open run capacitor on a PSC motor |
| Protective device blows the instant the motor is called | Shorted capacitor |
| Motor starts but runs hot and draws high current | Run capacitor low in capacitance or partly failed |
| Bulged can, split top, oily residue underneath | Capacitor has vented — replace, and find out why |
| Repeated start capacitor failures | Start relay contacts sticking, leaving the capacitor in circuit continuously |

That last one is worth remembering: a start capacitor that keeps blowing is
usually reporting a faulty start relay, not its own weakness.

## Testing a capacitor

Discharge it first, as above, every time.

**1. Capacitance meter (the definitive test).** Disconnect both leads, remove or
account for any bleed resistor, and measure on the capacitance range. Compare
with the marked value and tolerance — run capacitors are commonly ±6 per cent,
while start capacitors are marked as a range such as 88–108 µF. Outside
tolerance means replace.

**2. Ohmmeter test, when you have no capacitance range.** On a high ohms range,
a healthy capacitor makes the reading swing towards zero and then climb steadily
back to OL as it charges from the meter's battery. A reading that stays at zero
means shorted plates. No movement at all means open. A reading that settles at
some middling resistance means a leaky dielectric.

**3. Ammeter method, on a running motor, where you are authorised to test live.**
Clamp the run capacitor lead and measure voltage across the capacitor, then
calculate at 50 Hz:

**C (µF) = 3183 × I ÷ V**

*Worked example.* A run capacitor marked 20 µF is measured in service at 242 V
with 1.42 A flowing.

- C = 3183 × 1.42 ÷ 242
- C = 4519.9 ÷ 242
- C = **18.7 µF**

Tolerance on a 20 µF run capacitor at ±6 per cent is 18.8 to 21.2 µF. At 18.7 µF
this one has fallen just outside tolerance and should be replaced — and you have
proven it with numbers rather than a hunch.

**4. Leakage to case.** Measure between either terminal and the metal can. There
should be no continuity. Any reading means the capacitor is breaking down to its
case and is dangerous.

## On the job

- Discharge before touching. Every time, no exceptions.
- Capacitance is set by plate area; voltage rating by the dielectric.
- Start capacitors: electrolytic, seconds only, rated in starts per hour.
  Run capacitors: film, 2 to 30 µF, continuous duty.
- Match the microfarads exactly; match or exceed the volts.
- Connect the dotted terminal to the supply side.
- C (µF) = 3183 × I ÷ V at 50 Hz gives you a live, in-service capacitance check.
`,
          quiz: [
            {
              q: "A run capacitor is measured in service at 240 V drawing 1.13 A on a 50 Hz supply. What is its actual capacitance?",
              options: ["About 10 µF", "About 15 µF", "About 20 µF", "About 25 µF"],
              answer: 1,
              explain: "C = 3183 × I ÷ V = 3183 × 1.13 ÷ 240 = 3596.8 ÷ 240 ≈ 15 µF. The constant 3183 comes from 10^6 ÷ (2π × 50); using it in the wrong direction, or dividing current by voltage without it, gives nonsense values.",
            },
            {
              q: "Why is an electrolytic start capacitor built as two sections connected back to back?",
              options: ["To double its capacitance", "So one section is always connected in the correct polarity during each half of the AC cycle", "To halve the voltage across each section", "To provide a spare if one section fails"],
              answer: 1,
              explain: "Electrolytics are polarity sensitive and would break down on AC. Back-to-back sections mean one is always correctly polarised while the other is shorted — and it is the heating of that shorted half that limits the capacitor to a few seconds of duty and to roughly six to eight starts per hour.",
            },
            {
              q: "What does the small dot or arrow beside one capacitor terminal indicate?",
              options: ["The terminal that must go to neutral", "The terminal connected to the plate nearest the case, which must go to the supply (active) side", "The positive terminal for DC operation", "The terminal to which the bleed resistor is fitted"],
              answer: 1,
              explain: "The marked terminal connects to the plate closest to the can. Wiring it to the active side means an internal breakdown to the case blows the supply protection rather than pushing fault current through the motor's start winding.",
            },
            {
              q: "A single-phase compressor has destroyed three start capacitors in six weeks. What should you suspect?",
              options: ["The run capacitor is oversized", "The start relay contacts are sticking, leaving the start capacitor energised continuously", "The supply voltage is too low for the compressor", "The capacitor voltage rating is too high"],
              answer: 1,
              explain: "A start capacitor is only rated for a few seconds per start; if the relay fails to drop the start winding out, the capacitor stays in circuit and cooks. A voltage rating higher than required is always safe, and a run capacitor problem shows as high running current, not repeated start capacitor failures.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "single-phase-start-relays",
          title: "Start relays for single-phase motors",
          minutes: 12,
          simple: "A single-phase motor needs a helper winding to get moving, but that helper must be switched out once the motor is up to speed or it will burn. A start relay is the automatic doorman that lets the helper in for a second and then shows it out. There are three common designs, each sensing a different clue that the motor is running.",
          refs: REFS,
          content: `
A single-phase supply on its own produces a pulsing field, not a rotating one, so
a single-phase induction motor has no natural starting torque. The fix is a
second winding — the start (auxiliary) winding — fed with current shifted in
phase, which together with the run winding produces a rotating field. Once the
rotor is up near running speed the start winding has done its job and must come
out of circuit, because it is wound with fine wire and will overheat quickly.

Something has to make that decision automatically. That something is the start
relay. Three designs are common, and each senses a different symptom of "the
motor is now running".

## Motor configurations first

| Type | Start capacitor | Run capacitor | Where used |
|---|---|---|---|
| RSIR (split phase) | No | No | Very small hermetics, low starting torque needed |
| CSIR | Yes | No | Small hermetics on capillary systems |
| PSC | No | Yes | Fan motors and small compressors with equalising metering |
| CSR | Yes | Yes | Compressors needing high starting torque, often with a TX valve |

A PSC motor has no start relay at all: the run capacitor stays in circuit
permanently and provides both the starting phase shift and improved running
performance. That is why a PSC compressor with a failed run capacitor will not
start.

## Current (amperage) relay

The coil is a few turns of heavy wire wired **in series with the run winding**,
and its contacts are **normally open**, wired in series with the start winding.

At the instant of starting, the motor draws locked-rotor current — several times
full-load — and that heavy current through the relay coil creates enough magnetic
force to lift the armature and close the contacts, energising the start winding.
As the rotor accelerates, back-EMF builds and run current falls. At a designed
drop-out value the magnetic pull is no longer enough, the armature falls back
under gravity, and the start winding is disconnected.

Two consequences follow from that description:

- The relay is **gravity dependent** and must be mounted the right way up. Most
  are marked "UP" or "TOP". Mount one upside down and the contacts stay closed,
  the start winding stays energised, and the compressor or capacitor is destroyed.
- The relay is **matched to the compressor**. Its pick-up and drop-out currents
  are chosen for a particular motor. A relay from a different compressor of
  similar size is not a substitute.

## Potential (voltage) relay

The coil is many turns of fine wire connected **across the start winding**, and
its contacts are **normally closed**, in series with the start capacitor.

As the motor accelerates, the voltage generated across the start winding rises
well above supply voltage. When it reaches the relay's **pick-up voltage** the
coil pulls the armature in and *opens* the normally closed contacts, taking the
start capacitor out of circuit. When the motor stops and start-winding voltage
collapses below the **drop-out voltage**, the contacts reclose ready for the next
start.

Notice the inversion: a current relay closes to start and opens to run; a
potential relay is closed at rest and opens to run. It is not gravity dependent,
which is why it can be mounted in any position, and it is the type used on the
larger CSR compressors that need both a start and a run capacitor.

Terminal numbering is conventionally 2 and 5 for the coil, with 1 and 2 the
normally closed contacts.

## PTC starter

A solid-state device with no moving parts. A positive temperature coefficient
thermistor is wired in series with the start winding. Cold, its resistance is
low, so the start winding is effectively connected. Current through it heats it
rapidly, its resistance climbs by orders of magnitude within a second or two, and
the start winding current falls away to almost nothing. Effectively the start
winding has been switched out.

The catch is that the PTC has to cool before it can do it again. Depending on
type, that is around five to ten minutes. Attempting rapid restarts with a hot
PTC gives a compressor that hums and trips its overload — which is often
misdiagnosed as a seized compressor. PTC devices are marked with a nominal cold
resistance such as 25 or 47 ohms.

## Hard start kits

A hard start kit adds a start capacitor and either a potential relay or a PTC to
a motor that would otherwise start only on its run capacitor. Legitimate uses:
supply voltage genuinely low at the end of a long run, a system with a TX valve
that does not equalise before restart, or a compressor at the end of its service
life being nursed to a planned replacement. What a hard start kit is *not* is a
cure for low voltage caused by a loose connection, an undersized cable, or a
condenser that has never been cleaned. Fix the cause.

## Testing start relays

Discharge every capacitor before touching anything, and isolate and prove dead.

**Current relay.**
1. Remove the relay and identify the terminals from the diagram on its body.
2. Measure the coil: a few turns of heavy wire should read close to zero ohms.
   OL means an open coil and the compressor will never start.
3. Measure the contacts with the relay upright and undisturbed: they must read
   OL (open). Continuity at rest means welded contacts — replace, and check the
   start capacitor as well, because it has probably been cooked.
4. Invert the relay gently and the contacts should close. That confirms the
   armature is free.
5. Check the part number against the compressor. Never fit "near enough".

**Potential relay.**
1. Measure across the coil terminals: a fine-wire coil normally reads in the
   thousands of ohms. OL means it is open, and the start capacitor will stay in
   circuit permanently.
2. Measure across contacts 1 and 2 at rest: they must be closed, under about
   1 ohm. OL at rest means the compressor will not start.
3. Inspect the contacts for pitting and burning, which is the sign of a relay
   about to weld.
4. Pick-up and drop-out voltages can be verified on a variable supply in a
   workshop, but on site a resistance check plus a compressor that starts and
   drops the capacitor cleanly is the practical test.

**PTC starter.**
1. Let it cool for at least ten minutes.
2. Measure across it cold and compare with the marked value — 25 or 47 ohms
   typically. A very low reading means it has failed short; OL means it has
   failed open.
3. If a compressor will not start, wait for the cool-down period before
   condemning the compressor. This alone saves a lot of unnecessary changeouts.

## Identifying compressor terminals

While you are in there, prove the motor before blaming the relay. Isolate,
discharge, disconnect all leads and measure between each pair of the three
terminals:

- The **highest** reading is between S and R.
- The terminal *not* involved in that highest reading is **C**.
- From C, the lower reading goes to **R** (run winding, thick wire) and the
  higher to **S** (start winding, fine wire).
- Check the arithmetic: C–S plus C–R should equal S–R.

*Worked example.* Readings of 3.2, 12.6 and 15.8 ohms. The 15.8 ohm pair is S–R,
so the terminal left out of it is C. From C we read 3.2 ohms (that is R) and 12.6
ohms (that is S). Check: 3.2 + 12.6 = 15.8 ohms. The windings are continuous and
correctly identified. Then check each terminal to the shell — any reading below
the manufacturer's insulation limit means a motor earth fault and the compressor
is condemned.

>! Compressor terminals can blow out under pressure if a terminal is arcing or
>! the compressor is faulty. Never stand in line with a compressor terminal box,
>! never energise a compressor with the terminal cover off, and always confirm
>! the system is not under abnormal pressure before working on the terminals.

## On the job

- Current relay: NO contacts, coil in series with run, gravity dependent, must be
  upright and matched to the compressor.
- Potential relay: NC contacts, coil across the start winding, opens on back-EMF,
  mounts any way up.
- PTC: no moving parts, must cool five to ten minutes between starts.
- A PSC motor has no start relay — its run capacitor does the job.
- S–R is the highest resistance; C is the odd terminal out; C–S + C–R = S–R.
`,
          quiz: [
            {
              q: "A current-type start relay is fitted upside down. What happens?",
              options: ["The compressor will not start at all", "The contacts stay closed, leaving the start winding energised and destroying the capacitor or winding", "The relay operates normally — orientation does not matter", "The run capacitor overheats"],
              answer: 1,
              explain: "A current relay relies on gravity to drop the armature and open the contacts once run current falls. Mounted the wrong way up the contacts never open, so the start winding stays in circuit. Orientation is irrelevant only for a potential relay, which uses a coil across the start winding instead.",
            },
            {
              q: "Compressor terminal readings are 2.8, 9.4 and 12.2 ohms. Which is the resistance from common to the start winding?",
              options: ["2.8 ohms", "9.4 ohms", "12.2 ohms", "It cannot be determined from these readings"],
              answer: 1,
              explain: "The highest reading, 12.2 ohms, is S–R, so common is the terminal not in that pair. From common, the lower reading (2.8 ohms) is the heavy run winding and the higher (9.4 ohms) is the fine start winding. The check confirms it: 2.8 + 9.4 = 12.2.",
            },
            {
              q: "A small hermetic with a PTC starter hums and trips its overload when restarted two minutes after a shutdown, but starts normally after fifteen minutes. What is happening?",
              options: ["The compressor is mechanically seized", "The PTC has not cooled, so its resistance is still high and the start winding is not being energised", "The run capacitor has failed open", "The overload is set too low"],
              answer: 1,
              explain: "A PTC's resistance stays high while hot, which is exactly how it switches the start winding out — and it needs five to ten minutes to cool before it can start the motor again. Recognising this prevents needlessly condemning a perfectly good compressor as seized.",
            },
            {
              q: "In a potential (voltage) relay, what actually causes the contacts to open?",
              options: ["The falling run current as the motor speeds up", "The rising voltage generated across the start winding as the motor approaches running speed", "A bimetal heated by the start capacitor", "The pressure differential across the compressor"],
              answer: 1,
              explain: "The relay coil is connected across the start winding and responds to the back-EMF, which rises with speed until it reaches the relay's pick-up voltage and pulls the normally closed contacts open. Falling run current is what a current relay senses, and it works in the opposite direction — closing to start.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "control-circuits-and-fault-finding",
          title: "Control circuits, terminations and fault-finding",
          minutes: 14,
          simple: "Control circuits are built from a handful of standard patterns: hold yourself on, lock the other one out, start things in order. Once you can spot those three patterns on a drawing, most panels stop being mysterious. Fault-finding is then just walking along the wire asking where the voltage stops.",
          refs: REFS,
          content: `
Everything in a refrigeration control panel is assembled from a small number of
standard circuit patterns. Learn them and a wiring diagram you have never seen
before becomes readable in a couple of minutes. Fail to learn them and every
panel is a puzzle.

## Series and parallel — the base rule

- A **series** circuit passes current through each component in turn. Break it
  anywhere and everything stops.
- A **parallel** circuit gives current a path through each component
  simultaneously. Break one branch and the others carry on.

From that comes the rule that governs every control panel ever built:

**Control devices go in series with the load they control. Loads go in parallel
with each other.**

So a thermostat, an LP switch, an HP switch and an overload contact all sit in
series in a single rung: every one must be closed for the contactor coil at the
end of the rung to pull in. Meanwhile the compressor contactor, the condenser fan
contactor and the crankcase heater are each on their own rung, in parallel across
the same supply. Combined circuits are common too, where one control device feeds
several parallel loads.

!FIG[ladder-rung]

## Reading a ladder diagram

A ladder (rung) diagram draws the supply as two vertical rails — active on the
left, neutral on the right — with each control circuit drawn as a horizontal
rung between them. You read a rung left to right and ask one question at each
device: is it closed?

Symbols to know: a normally open contact is drawn as two facing terminals with a
gap; a normally closed contact has a diagonal bar through it; a coil is a circle
or a rectangle; a contact controlled by a coil carries that coil's label, so R1-1
means the first contact operated by relay R1.

## Pattern 1: the latch, or hold-in circuit

This is the direct-on-line (DOL) starter and it appears everywhere.

A momentary **start** button is wired in series with a **stop** button and the
contactor coil. In parallel with the start button sits a normally open auxiliary
contact operated by that same coil.

1. Press start. Current flows through the closed stop button to the coil.
2. The coil energises and closes its auxiliary contact, which bridges the start
   button.
3. Release start. Current still reaches the coil through the auxiliary contact,
   so the coil stays energised — it has *latched* or *held in*.
4. Press stop, or lose supply for a moment, and the coil drops out, the auxiliary
   contact opens, and the circuit cannot re-establish itself until somebody
   presses start again.

That last property is the safety feature. A latched starter will not restart on
its own after a power interruption, so nobody gets caught by a machine coming
back to life unexpectedly. The same building block is used in short-cycle
prevention circuits on coolrooms.

## Pattern 2: the lock-out interlock

Used wherever only one of two operations may happen at a time.

Two relays, R1 and R2, each with a start button. R1's coil is fed through a
normally closed contact of R2 (R2-2), and R2's coil is fed through a normally
closed contact of R1 (R1-2). Each relay also has a normally open contact latching
its own button.

Press button 1 first: R1 energises, latches itself through R1-1, and opens R1-2 —
which breaks the supply to R2's coil. Press button 2 now and nothing happens; R2
is locked out. Start with button 2 instead and R1 is the one locked out. Adding a
stop button in series with the whole control circuit gives you a way to release
the lock-out and choose again.

The classic refrigeration application is a **three-phase reversing starter**. A
forward contactor and a reverse contactor both feed the same motor with two
phases swapped. If both closed at once, two phases would be shorted together
directly — a dead short across the supply. The electrical interlock prevents it,
and good practice adds a mechanical interlock between the two contactors as well,
so a stuck armature cannot defeat the circuit. Star-delta starters use the same
idea to stop the star and delta contactors ever closing together.

## Pattern 3: the sequence interlock

Used to guarantee a plant always starts in the same order.

Each stage's contact feeds the next stage's coil. Close the control switch: R1
energises and its contacts both start its own load and feed R2's coil. R2
energises, starts its load and feeds R3. R3 energises and starts the last load.
The order is fixed by the wiring, so it cannot come up in the wrong order no
matter how the plant is switched.

On a chiller this is exactly how you get the chilled water pump running before
the compressor is allowed to start — with a short timer between stages to let
each motor reach full speed before the next is called. Run a compressor into a
chiller with no water flow and you freeze and split the tubes.

## Terminal blocks and connections

The most common electrical fault on a refrigeration plant is not a failed
component at all. It is a loose connection.

- **DIN rail terminal blocks** land field wiring against panel wiring and give
  every conductor a numbered identity that matches the drawing. Number your
  terminals and label your cores; the next technician is entitled to that.
- **One conductor per terminal**, unless the terminal is specifically designed
  for two. Doubling up under a screw means one conductor is loose.
- **Ferrules on stranded conductors** under screw terminals stop strands
  splaying and spreading the clamping force.
- **Torque to the manufacturer's figure**, and re-check after the panel has been
  through some heat cycles. Aluminium and large copper conductors in particular
  relax after loading.
- **Heat is the tell-tale.** A connection with resistance drops voltage, and
  volts times amps is watts of heat right at that point. A discoloured terminal,
  a smell of hot plastic, or a hot spot on a thermal image all mean the same
  thing: get in there before it fails.
- Loose connections cause nuisance overload trips, contactor chatter, and
  intermittent faults that vanish the moment you disturb the wiring — which is
  itself a diagnostic clue.

## Fault-finding with a multimeter

**Dead testing first, always.** Isolate, lock off, prove dead with a tester you
have proven on a known source before and after. Then, with the circuit
de-energised, work along each rung with the meter on continuity, checking that
each device is in the state the plant's condition says it should be in.

**Live rung testing**, where you are licensed and authorised, is faster on a
running plant. The logic is simple: a series circuit shares the supply voltage
among whatever is open. If exactly one device in the rung is open, *all* the
supply voltage appears across that one device and near zero appears across
everything else.

| Meter reading | What it tells you |
|---|---|
| Full supply voltage across a control device | That device is open — you have found the break |
| Near 0 V across a control device | It is closed and passing current |
| Full voltage across the coil, coil not pulling in | Open coil, or the coil circuit is broken inside the coil |
| Full voltage at the coil terminal to neutral but nothing happens | Check the neutral connection — an open neutral looks like a dead load |
| Volts present at every point, load still dead | Suspect a broken neutral or a poor earth reference |

The single most useful measurement in the whole trade is the voltage across an
open control device in a live rung: it converts a panel full of wires into a
single answer.

>! Live testing is electrical work. Only a licensed electrical worker may carry
>! it out, and an ARCtick licence does not authorise it. Where you are
>! authorised: use a CAT III or CAT IV meter with fused leads, work with one
>! hand where practical, never assume an isolator has opened every supply into
>! the panel, and remember that control circuits are often fed from a separate
>! circuit that a plant isolator does not touch.

## On the job

- Controls in series with the load; loads in parallel with each other.
- Latch = hold-in, and it also gives you undervoltage protection.
- Lock-out = each device's NC contact in the other's coil circuit.
- Sequence = each stage feeds the next, so order is guaranteed.
- Full voltage across a device in a series rung means that device is open.
- Check terminations before you replace parts.
`,
          quiz: [
            {
              q: "A compressor contactor coil circuit contains a thermostat, an LP switch, an HP switch and an overload contact in series. A voltmeter reads 240 V across the LP switch and near 0 V across the others. What does that tell you?",
              options: ["The LP switch is closed and healthy", "The LP switch is open — it is the device stopping the plant", "The contactor coil is open circuit", "The overload has tripped"],
              answer: 1,
              explain: "In a series rung the whole supply voltage appears across whatever is open, and near zero across everything closed. Reading full voltage across the LP switch identifies it as the break; if the coil were open, the full voltage would appear across the coil instead.",
            },
            {
              q: "What safety property does a latch (hold-in) circuit give a DOL starter?",
              options: ["It limits starting current", "It prevents the motor restarting by itself when supply is restored after an interruption", "It protects against overload", "It prevents reverse rotation"],
              answer: 1,
              explain: "When the coil drops out, the auxiliary contact that was bridging the start button opens, so the circuit cannot re-establish until someone presses start — that is undervoltage release. Starting current is limited by star-delta or soft starters, and overload protection is a separate device.",
            },
            {
              q: "Why must the two contactors in a three-phase reversing starter be interlocked?",
              options: ["To share the load current between them", "Because if both closed at once, two phases would be shorted together across the supply", "To reduce the coil current", "To allow the overload to reset automatically"],
              answer: 1,
              explain: "The reverse contactor swaps two phases, so with both closed those two phases would be connected directly together — a dead short. Electrical interlocking through normally closed auxiliary contacts, backed by a mechanical interlock, prevents that.",
            },
            {
              q: "A plant trips its overload intermittently, and the fault always clears for a week after someone opens the panel and wiggles the wiring. What should you investigate first?",
              options: ["The refrigerant charge", "Loose or heat-damaged terminations causing voltage drop and current imbalance", "The thermostat differential", "The compressor valves"],
              answer: 1,
              explain: "A fault that responds to physical disturbance of the wiring is almost always a connection, not a component. A loose terminal drops voltage, generates heat at that point, and unbalances the currents enough to trip the overload — none of which the charge or the thermostat setting would explain.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "electronic-and-ddc-controls",
          title: "Electronic controls, PID and direct digital control",
          minutes: 14,
          simple: "An electronic controller replaces springs and bellows with a small computer. It reads a number from a sensor, compares it with the number you asked for, and decides how hard to push. The clever bit is how it decides: a bit like driving to a speed limit, part guess, part checking the speedo, part slamming the brakes when something changes fast.",
          refs: REFS,
          content: `
Electronic control has taken over almost everything, and for good reasons that
follow directly from the sensor. An electronic sensor has almost no mass, so it
responds quickly. It needs no mechanical linkage, so it can sit far from the
controller. It costs little, has no moving parts, and dozens of them can feed a
single controller. Once the signal is a number, the controller can do arithmetic
with it that no bellows and lever could ever manage.

## The vocabulary you must own

| Term | Meaning |
|---|---|
| Setpoint (SP) | The value you want the system to hold |
| Process variable (PV) | The value actually being measured — usually a temperature |
| Error (e) | Setpoint minus process variable |
| Control output (CO) | The signal sent to the actuator — valve or damper |
| Feedback | The measured result being fed back so the controller can correct |
| Offset | A steady deviation of the process variable from setpoint |
| Oscillation / hunting | Repeated over-correction, so the value swings either side of setpoint |
| Direct acting | PV rises, output rises — a cooling valve |
| Reverse acting | PV rises, output falls — a heating valve |

## Two-position, proportional, and the offset problem

Two-position (on/off) control is what a thermostat does: full on or full off,
with a differential to stop it chattering. It is cheap and it works, but the
controlled value always swings across a band.

**Proportional control** moves the output an amount proportional to the error.
Picture a lever with the sensor on one end, a pivot in the middle and a valve on
the other end. At setpoint the valve sits at 50 per cent; below setpoint it opens
further; above setpoint it closes. Moving the pivot changes how much valve
movement each kelvin of error produces.

The **proportional band** (also called the throttling range) is the span of the
process variable that produces 100 per cent of output movement.

**Worked example.** A heating valve is fully closed at 22 °C and fully open at
18 °C.

- Proportional band = 22 − 18 = **4 K**
- Proportional gain, Kc = 100 ÷ PB = 100 ÷ 4 = **25**
- Control output = Kc × e

Narrow the band and the control becomes aggressive: a small error swings the
valve a long way, and the loop is likely to overshoot and oscillate. Widen the
band and the control becomes sluggish and may never reach setpoint at all.

That last point is proportional control's inherent flaw. As the error shrinks,
the output correction shrinks with it, until the correction is too small to move
the actuator. The result is a permanent **offset** — the system parks near
setpoint but never on it. Where a small offset does not matter, as with a TX
valve holding superheat, proportional control alone is perfectly acceptable.

## Reset (integral) and rate (derivative)

**Reset**, mathematically the **integral**, fixes offset by slowly shifting the
setpoint itself. In the lever analogy, the pivot creeps upward while the
temperature stays below setpoint and downward while it is above, until the offset
has been driven out. Its magnitude is expressed as how quickly it repeats the
proportional action — a reset rate in minutes, or its reciprocal in repeats per
minute.

**Rate**, mathematically the **derivative**, responds to how fast the error is
*changing* rather than how big it is. If the error suddenly starts moving
quickly, rate action backs the output off to prevent overshoot. Its magnitude is
given as the time it takes to cancel out the integral value.

Put all three together and you have PID control, an equation first derived by
Lagrange around 1780 — long before there was anything to control with it.

The driving analogy makes it stick. The speed limit is 60 km/h — that is your
setpoint. The lights go green and you put your foot down by an amount your
experience suggests: that is proportional, and it gets you into the ballpark. You
glance at the speedo and make small corrections: that is integral, nudging you
exactly onto target. You spot a speed camera and brake hard because things
changed suddenly: that is derivative.

Tuning rules of thumb worth carrying:

- Too much of *any* of the three causes oscillation.
- Most HVAC loops need only P and I. P gets you close, I finishes the job.
- Sometimes P alone is right, particularly where the process has long delays.
- D is rarely needed, because most HVAC processes move slowly and are reasonably
  stable.

## Digital control and DDC

A mechanical controller is continuous — it never stops watching. A digital
controller is **discrete**: it samples the process variable periodically,
computes, and periodically updates its outputs. Direct digital control (DDC)
means the digital controller itself is closing the control loop, replacing the
old pneumatic or analogue electronic local loop.

Since the PID equations had to be reworked for sampled digital operation, every
manufacturer ended up with a slightly different implementation. PID in a computer
is not strictly the classical PID; it is a generic name for a controller with
three adjustable terms whose effects you understand.

Inside the box:

- **Microprocessor** — does the arithmetic.
- **Program memory** — holds the operating and application software. It must be
  non-volatile so the program survives a power failure: ROM or PROM for a fixed
  function controller, EEPROM or flash where the program must be field-alterable.
- **Working memory** — holds live values.
- **Real-time clock**, battery backed, times both program execution and the
  time-of-day functions.
- **A/D and D/A converters**, because nearly all sensors are analogue and nearly
  all actuators are analogue. Resolution is quoted in bits: an 8-bit converter
  resolves one count in 256, a 14-bit converter one count in 16 384. DDC
  applications commonly use 8 to 14 bit A/D and 8 to 12 bit D/A; a single 12-bit
  converter multiplexed across all inputs, fed by two-wire high-resistance RTDs,
  gives good temperature performance economically.
- **Input signal conditioning** — time delay circuits, filters and optical
  coupling to defeat contact bounce, induced voltage and electrical transients;
  plus linearisation, scaling and lead-wire resistance compensation.
- **Input and output multiplexers** — one converter shared across many points.
- **Communications port** — for tuning, for a portable terminal, and for talking
  to other controllers and a building management system.

## Zone-level and system-level controllers

**Zone-level controllers** handle terminal equipment: VAV boxes, fan coils, unit
ventilators, heat pumps, exhaust and pressurisation. They have relatively few
I/O points, standard control sequences, and are often built into the equipment —
a VAV controller may be packaged with its own damper actuator, and a packaged
unit controller may live inside the thermostat housing as a "smart thermostat".

**System-level controllers** handle central plant: air handlers, VAV supply
systems, chiller and boiler plants. They have more capacity, more flexible I/O,
and usually run customised programs. Because the number and mix of inputs and
outputs cannot be predicted, they are packaged as fixed I/O, universal I/O
(where the user defines what each terminal does), plug-in function boards, or
master and slave I/O modules.

A **configurable** controller offers a library of pre-written sequences with
adjustable parameters but no ability to change the programs. A fully programmable
controller lets you build sequences, today almost always by linking graphical
control blocks rather than writing code.

## Energy management software

Because the controller already has the sensors and the clock, the same box runs
energy programs:

- **Optimum start** — calculates how much lead time is needed to bring the space
  to condition exactly at occupancy, using indoor and outdoor temperature and a
  multiplier learned from yesterday's start-up. Longer lead times after a weekend
  shutdown, and outdoor air dampers stay shut during warm-up unless indoor air
  quality demands otherwise.
- **Optimum stop** — shuts plant down early and coasts on stored energy to the
  end of occupancy, using measured drift rates.
- **Night cycle** — cycles the air handler with the outdoor damper closed to hold
  a low limit in winter or a high limit in summer during unoccupied hours.
- **Night purge** — pre-cools the building with cool night air. Typical
  conditions: outdoor air above the changeover point of about 10 °C, outdoor
  temperature below space temperature, outdoor dewpoint below 16 °C, and space
  temperature above about 24 °C.
- **Enthalpy changeover** — compares outdoor and return air enthalpy and selects
  whichever air source needs less total heat removed.
- **Load reset** — samples every zone's demand and resets the plant to satisfy
  only the neediest one. A chilled water plant designed at 6.5 °C might raise its
  setpoint whenever every control valve is less than 80 per cent open, and lower
  it again only when one valve exceeds 95 per cent — a 15 per cent hysteresis
  band that keeps the system stable. Typical parameters are 0.2 K increments on a
  4 minute execution interval for a fast discharge-air loop, or about 15 minutes
  where a slow space temperature loop is involved, with the setpoint bounded
  between 6.5 and 10.5 °C. It works best with between 2 and 30 monitored loads,
  and does nothing at all if any one load is undersized and permanently calling.
- **Zero energy band** — a dead band in which neither heating nor cooling energy
  is used and the space is allowed to float, with the mixing dampers using
  outdoor air if it is suitable.
- **Distributed power demand** — one controller watches total electrical demand
  and broadcasts shed or restore messages to the others, each of which has a
  prioritised shed table. Sequencing prevents the same loads being shed first
  every time.

## Actuators

Electronic controllers move things through motorised actuators — small DC or
stepper motors, heavily geared to swing the drive shaft through 90 or 160 degrees
over 10 to 120 seconds depending on the gear train. Supply voltages are typically
240 V, 24 V or 15 V.

- **Two-position** actuators drive one way and are held by an internal brake
  winding until power is removed, whereupon a return spring takes them back.
  Spring return is what closes fire dampers on power failure.
- **Floating** actuators have two digital inputs, open and close. They run while
  the input is made and stop where they are when it opens, so they can take up any
  position — useful for tank levels and static pressure control.
- **Proportional (modulating)** actuators take an analogue input, usually 1 to 5
  volts or 0 to 10 volts, and drive to the corresponding position.

## Control boards in packaged equipment

Even a small inverter split has a board carrying components that have nothing
directly to do with heating or cooling: chokes and filters to suppress
electromagnetic and common-mode noise, inductors acting as line filters, a
switched-mode power supply, rectification, power factor control, inverter
switching devices, and the drive for the variable-speed DC compressor motor.

## Testing electronic controls

You do not repair boards in the field; you prove what is around them.

1. Confirm the supply — correct voltage and, on 24 V systems, that the
   transformer is not overloaded or its secondary fuse blown.
2. Verify every input independently: measure probe resistances against the
   manufacturer's table, and measure transducer output signals in volts or
   milliamps, then compare with the controller's displayed value.
3. Check the outputs: for a digital output, meter continuity across the relay
   terminals when the controller calls; for a 0 to 10 volt output, measure the
   signal at the terminals and confirm the actuator responds.
4. Check parameters before condemning hardware. A controller that will not defrost
   is far more often mis-set than faulty.
5. Observe static precautions and never insulation-test a circuit with the
   controller connected.

>! Inverter drives and variable-speed boards contain DC bus capacitors that
>! remain charged at hundreds of volts after isolation. Wait for the
>! manufacturer's stated discharge time — commonly five to ten minutes — and
>! then measure the DC bus with a meter to confirm it is at a safe voltage
>! before touching anything on the board.

## What to remember

- PB = the span of PV that gives 100 per cent output; Kc = 100 ÷ PB.
- Proportional alone always leaves an offset; integral removes it; derivative
  reacts to rate of change and is rarely needed.
- Too much of any term makes the loop oscillate.
- Digital control samples, then acts; A/D resolution is quoted in bits.
- Program memory must be non-volatile so the plant survives a blackout.
- Prove the sensors and the settings before condemning a board.
`,
          quiz: [
            {
              q: "A cooling valve is fully closed at 21 °C and fully open at 24 °C. What are the proportional band and the proportional gain?",
              options: ["PB = 3 K, Kc = 33.3", "PB = 3 K, Kc = 3", "PB = 24 K, Kc = 4.2", "PB = 45 K, Kc = 2.2"],
              answer: 0,
              explain: "The proportional band is the span of process variable that gives full output movement: 24 − 21 = 3 K. Gain is Kc = 100 ÷ PB = 100 ÷ 3 = 33.3. Confusing gain with the band itself is the common slip — they are reciprocally related, not equal.",
            },
            {
              q: "A proportionally controlled heating loop settles at 20.6 °C when its setpoint is 21 °C, and stays there. What is happening and what fixes it?",
              options: ["The sensor is faulty; replace it", "This is proportional offset; adding integral (reset) action will drive it out", "The proportional band is too narrow; widen it", "The actuator has failed; replace it"],
              answer: 1,
              explain: "As the error shrinks, so does the proportional correction, until it is too small to move the actuator — a permanent offset is inherent to proportional-only control. Integral action slowly shifts the effective setpoint until the offset disappears. Widening the band would make the offset larger, not smaller.",
            },
            {
              q: "Why must a microprocessor controller's program memory be non-volatile?",
              options: ["So it runs faster", "So the control program survives a power outage and the plant restarts correctly", "So it can be read by a portable terminal", "So the A/D converter has more resolution"],
              answer: 1,
              explain: "ROM, PROM, EEPROM and flash retain their contents with no power, which is why they hold the program while working memory holds live values. Speed, communications and converter resolution are separate design issues entirely.",
            },
            {
              q: "A chilled water load reset program raises the water temperature setpoint when all valves are below 80 per cent open but only lowers it when one valve exceeds 95 per cent. Why the gap between those two figures?",
              options: ["To allow for sensor error", "It is a hysteresis dead band that stops the program constantly reversing its own commands", "Because valves cannot be positioned accurately above 80 per cent", "To keep the chiller running at full load"],
              answer: 1,
              explain: "The 15 per cent gap gives long periods of stability between reset increases and decreases; a well-tuned load reset program should not reverse direction more than once or twice a day. Without hysteresis the program would chase itself, upsetting every load on the plant.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
