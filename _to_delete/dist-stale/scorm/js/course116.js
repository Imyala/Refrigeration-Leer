/* =========================================================================
   Course content, module 116 — Measuring and test instruments.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 16 — Measuring and test instruments.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 16, Measuring and test instruments",
    "ARAC Vol 1 Ch 15 (electrical meters) and Ch 9 (specialised service equipment) — companion instrument coverage",
    "AS/NZS 4836 — safe working on low-voltage electrical installations; AS/NZS 3017 — verification testing methods",
    "AS/NZS 5149 and the Australian Refrigerant Handling Code of Practice — leak testing, evacuation and record keeping",
    "AIRAH DA27 / DA28 — building commissioning and air-conditioning system balancing: instrument selection and traverse method",
  ];

  const MODULES = [
    {
      id: "v1-measuring-instruments",
      stream: "v1",
      title: "R1.16 · Measuring and test instruments",
      blurb: "Every instrument a refrigeration technician carries — thermometers, gauges, micron gauges, manometers, anemometers, psychrometers, electrical meters, leak detectors and sound meters — and how to read them honestly.",
      lessons: [

        /* ============================================================== */
        {
          id: "accuracy-resolution-and-calibration",
          title: "What a reading is actually worth",
          minutes: 11,
          simple: "A number on a screen is not automatically the truth. Instruments have a smallest step they can show, a band of doubt around every reading, and a habit of drifting as they age. Think of a bathroom scale that shows grams but is two kilograms out — lots of detail, still wrong. This lesson teaches you how much to trust a reading and how to check it.",
          refs: REFS,
          content: `
Commissioning a plant, proving a warranty claim, or deciding whether a
compressor gets replaced all come down to numbers you wrote on a service
sheet. If those numbers are wrong, everything built on top of them is wrong
too — and the customer pays for it. So before any instrument gets taught in
this module, you need a way of thinking about what a reading is worth.

## Accuracy, resolution, repeatability

These three words get used as if they mean the same thing. They do not.

| Term | What it means | A trap it creates |
|---|---|---|
| Resolution | The smallest step the instrument can display — 0.1 °C, 1 kPa, 1 micron | A display showing 0.1 °C says nothing about whether the reading is correct |
| Accuracy | How close the reading is to the true value, quoted as a tolerance band | Often quoted as a percentage of *full scale*, not of your reading |
| Repeatability | Whether the same conditions give the same reading twice | An instrument can be repeatably wrong — steady drift feels like reliability |
| Drift | Slow change in the instrument over time, shock or temperature | The instrument never tells you it has happened |

The classic picture is a dartboard. Tight grouping in the wrong corner is good
repeatability with poor accuracy. Scattered darts averaging on the bullseye is
poor repeatability with reasonable accuracy. You want tight *and* central, and
you only get that by calibrating.

### Full scale versus reading

This one catches people constantly. A Bourdon-tube pressure gauge is usually
sold to an accuracy class expressed against its full-scale range.

**Worked example — what class 1.6 costs you.** A high-side gauge reads 0 to
3500 kPa and is class 1.6, meaning ±1.6% of full scale.

- Tolerance = 1.6% × 3500 kPa = **±56 kPa**, anywhere on the dial.
- You read 850 kPa. As a share of that reading, ±56 kPa is 56 ÷ 850 = **±6.6%**.
- Near 850 kPa gauge on R134a, the saturation curve moves roughly 30 kPa per
  kelvin, so ±56 kPa is about **±1.9 K** of saturated condensing temperature.

The lesson is not "gauges are useless". It is that a gauge should be used near
the top half of its range, and that a saturation temperature taken from a
general-purpose analogue gauge carries a couple of kelvins of doubt.

### Errors add up

**Worked example — the doubt in a superheat figure.** Superheat is a
subtraction of two measurements, so the uncertainties combine:

- Clamp thermometer on the suction line: ±0.5 K.
- Saturated evaporator temperature from the analogue gauge: ±1.9 K (above).
- Worst case doubt in the superheat = 0.5 + 1.9 = **±2.4 K**.

You measure 5 K superheat. The true value could sit anywhere between about
2.6 K and 7.4 K — which is the difference between a flooding evaporator and a
starved one. That is why technicians moved to digital manifolds with pressure
transducers quoted as a percentage *of reading*, and why the thermometer that
sets superheat is the one you calibrate most often.

## Where the errors really come from

The chapter is blunt about this, and field experience backs it: most bad
readings are not the instrument's fault. Three causes dominate.

1. **Misuse of the instrument** — wrong probe, wrong position, no time allowed
   to stabilise, reading taken through a gap in a grille instead of across it.
2. **Turbulence and disturbed conditions** where the reading is taken. Air
   coming out of any bend, damper, coil or fan stays disturbed for roughly six
   to seven duct diameters downstream. A perfect instrument in that zone still
   produces a meaningless number.
3. **Arithmetic** — especially confusing a velocity in m/s with a volume flow
   in m³/s, or converting units in your head.

The cure for the third one is a discipline: **write down every raw reading as
read, then write out every conversion line by line** so another person can
audit it. Never do conversions mentally on a ladder and write only the answer.

## Calibration

Calibration means comparing your instrument against a master instrument or an
accepted standard and recording the difference. In Australia the top of that
chain is a NATA-accredited laboratory, whose certificate states the readings
taken, the uncertainty, and traceability back to national standards. Most
service companies calibrate the instruments used for compliance work — data
loggers for food safety, gauges and thermometers used for commissioning
reports — on a set interval, typically annually, and immediately after an
instrument is dropped or gets a suspicious reading.

Between laboratory calibrations, you keep instruments honest with field checks:

| Instrument | Field check | What "good" looks like |
|---|---|---|
| Thermometer, low end | Stirred bath of crushed ice and water | 0.0 °C, within the instrument's stated tolerance |
| Thermometer, high end | Boiling distilled water at sea level | 100 °C, falling about 1 K per 300 m of altitude |
| Compound gauge | Open to atmosphere | 0 kPa gauge; correct with the adjuster under the lens or bezel |
| Micron gauge | Open to atmosphere | Reads off the top of scale, then falls smoothly as the pump runs |
| Multimeter | Known cell or precision resistor; second meter in parallel | Both meters agree within their combined tolerance |
| Clamp meter | Clamp the same conductor as a second clamp meter | Agreement within a few percent |
| Anemometer | Compare against a pitot traverse in the same duct | Same average within about 5% |
| Sling psychrometer | Remove the wick, let both thermometers dry | Both read identically — matched thermometers |
| Sound level meter | Acoustic calibrator, 94 dB at 1 kHz | Reads 94 dB before and after the survey |

Two habits go with this. Put a calibration-due sticker on the instrument and
keep a register. And when you first get an air-measuring instrument, spend an
hour deliberately taking readings at different angles, distances and locations
on one system so you can see how much the technique changes the answer — then
settle on one technique and use it every time.

>! Never guess at a value to fill in a gap on a report. A blank with a note
>! saying why the reading could not be taken is defensible; an invented number
>! is fraud, and on a commissioning or food-safety document it can end a
>! career.

## On the job

- Match the instrument's range to the job — a reading in the bottom quarter of
  a dial carries the same absolute error as one at the top.
- Resolution is what you can see; accuracy is what you can defend.
- Let every reading stabilise. Fast answers on slow sensors are guesses.
- Record raw readings first, conversions second, both in ink on the sheet.
- Check the obvious before you blame the plant: is the gauge zeroed, is the
  probe the right one, is the meter on the right range?
`,
          quiz: [
            {
              q: "A digital thermometer displays 4.7 °C. What does the fact it shows one decimal place tell you about its accuracy?",
              options: [
                "It is accurate to ±0.1 °C",
                "Nothing — resolution and accuracy are separate specifications",
                "It is accurate to ±0.05 °C, half the last digit",
                "It is accurate to ±1% of the reading",
              ],
              answer: 1,
              explain: "Resolution is only the smallest step the display can show. A meter can display tenths of a degree while being two degrees out. Accuracy is a separate figure the manufacturer states, and it is only kept honest by calibration.",
            },
            {
              q: "A 0–3500 kPa gauge is class 1.6 (±1.6% of full scale). What is its tolerance when the needle sits on 700 kPa?",
              options: [
                "±11 kPa, because the tolerance is a percentage of the reading",
                "±56 kPa, because full-scale tolerance applies anywhere on the dial",
                "±1.6 kPa",
                "Zero, provided the gauge was zeroed at atmosphere",
              ],
              answer: 1,
              explain: "Full-scale accuracy means 1.6% of 3500 kPa = ±56 kPa at every point on the dial. At 700 kPa that is ±8% of the reading, which is why low readings on a high-range gauge are so untrustworthy. Zeroing removes offset, not the accuracy class.",
            },
            {
              q: "According to the chapter, most incorrect readings in the field are caused by:",
              options: [
                "Manufacturing faults in the instruments",
                "Misuse of the instrument, turbulence where the reading is taken, and calculation errors",
                "Batteries going flat mid-reading",
                "Instruments being calibrated too often",
              ],
              answer: 1,
              explain: "The instrument is usually fine. Wrong probe placement, taking air readings inside a turbulent zone, and mistakes converting velocity to volume account for most bad data. That is why the same chapter insists on writing out every conversion instead of doing it in your head.",
            },
            {
              q: "How far downstream of a bend, damper or fan does air remain too disturbed for a reliable velocity reading?",
              options: [
                "About 100 mm regardless of duct size",
                "About six to seven duct diameters",
                "About half a duct diameter",
                "Turbulence has no effect on velocity readings",
              ],
              answer: 1,
              explain: "Roughly six to seven times the duct or outlet diameter. Inside that distance the velocity profile is skewed and swirling, so a traverse average is not representative. If there is nowhere clean to measure, note the limitation on the report rather than pretending the number is solid.",
            },
            {
              q: "Superheat is measured as 6 K using a thermometer of ±0.5 K and a gauge whose saturation reading carries ±2 K. What should you conclude?",
              options: [
                "Superheat is exactly 6 K",
                "The true superheat could reasonably lie between about 3.5 K and 8.5 K",
                "The errors cancel because one is a temperature and one is a pressure",
                "The gauge error does not matter because superheat is a temperature",
              ],
              answer: 1,
              explain: "Superheat is a subtraction of two uncertain numbers, so the doubts add: ±2.5 K around 6 K. The gauge error very much matters, because the saturated evaporator temperature is derived from it. This is the argument for a calibrated digital manifold when you are setting a valve.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "thermometers-and-temperature-sensors",
          title: "Thermometers and temperature sensors",
          minutes: 12,
          simple: "There are half a dozen different ways to turn heat into a number: liquid that swells in a tube, two metals that bend apart, a junction of two wires that makes a tiny voltage, a resistor that changes value, or a lens that catches invisible heat rays from a distance. Each one suits a different job, and picking the wrong one is how good technicians get bad numbers.",
          refs: REFS,
          content: `
Temperature is the measurement a refrigeration technician takes most often —
off coils, in ducts, in product, on motor windings, in the room the customer
is complaining about. Modern plant is full of sensors too, feeding a
microprocessor that makes control decisions from them, so understanding what
kind of sensor you are looking at is part of fault-finding as well as testing.

## The families of temperature sensor

| Sensor | How it works | Typical range | Strengths | Watch out for |
|---|---|---|---|---|
| Liquid-in-glass | Spirit or (historically) mercury expands up a bore | −30 to 110 °C | Cheap, needs no power, easy to check | Fragile, needs correct immersion depth, slow, mercury is a hazard |
| Bimetal dial | Two bonded metals expand unequally and a coil unwinds a pointer | −40 to 500 °C | Rugged, no battery, good for pockets and ducts | Slow, needs full stem immersion, drifts — recalibrate at the nut behind the dial |
| Vapour or liquid-filled dial | Sealed bulb and capillary; bulb pressure moves a Bourdon tube | −40 to 150 °C | Remote reading, drives chart recorders | Capillary damage kills it, bulb placement is everything |
| Thermocouple | Two dissimilar metals joined; the junction generates millivolts (Seebeck effect) | Type T −200 to 350 °C, type K −200 to 1260 °C | Very fast, tiny, tough, cheap, many channels | Needs cold-junction compensation and matching extension wire; typically ±1 K |
| Thermistor (NTC) | Semiconductor whose resistance falls steeply as it warms | −50 to 150 °C | Very sensitive over a narrow band, ±0.2 K achievable | Strongly non-linear, limited range, self-heating if over-driven |
| RTD (Pt100) | Platinum resistance rises about 0.385 Ω per kelvin from 100 Ω at 0 °C | −200 to 600 °C | The most stable and linear, best for reference work | Costs more, slower, lead resistance needs 3- or 4-wire connection |
| Infrared | A lens focuses emitted infrared onto a detector | −30 to 500 °C and beyond | No contact, reads in half a second, reaches inaccessible or hazardous spots | Emissivity and reflections, reads surfaces only, spot size grows with distance |

### The contact instruments

**Liquid-in-glass** thermometers are still found in psychrometers and as
reference thermometers. The bore and bulb have to be immersed to the marked
depth or the exposed stem sits at room temperature and pulls the reading
towards it. Mercury versions are now banned from most food and pharmaceutical
sites and are being retired everywhere else.

**Bimetal dial** thermometers are the workhorses hanging in coolrooms and
screwed into duct pockets. They are slow, which is often a virtue in a
coolroom because they average out door openings. They also drift, so give
every one an ice-bath check when you service the room; most have an adjusting
nut under the dial or behind the pointer.

**Vapour-pressure and liquid-filled** dial instruments work exactly like the
sensing bulb of a thermostatic expansion valve. That similarity is worth
holding on to: everything you know about bulb placement, bulb temperature and
capillary damage on a TXV applies here too. They drive the drum-chart recording
thermometers used to prove cold-chain performance, available with 24-hour or
seven-day rotation.

### The electrical sensors

A **thermocouple** produces only a few tens of microvolts per kelvin, so the
instrument has to know the temperature of its own terminals — that is
cold-junction compensation, done automatically inside any modern meter. Two
practical rules follow. Use extension wire of the same type as the couple (a
type K probe on type T wire produces nonsense), and remember the junction is
tiny, which is what makes it fast enough to catch a defrost termination or a
hot-gas pulse.

A **thermistor** is what sits in most service thermometers and most electronic
controllers. Its resistance change per kelvin is enormous compared with an
RTD, which makes precise readings easy over a narrow band — and a broken or
corroded thermistor lead is one of the most common controller faults you will
chase. A controller reading a wildly improbable temperature usually has a
sensor or lead problem, not a refrigeration problem.

An **RTD**, usually a Pt100, is the reference sensor: stable, linear and
repeatable. Building management systems and laboratories use them, and the
master instrument your gear is calibrated against will probably be one.

### Infrared thermometers

An infrared thermometer is non-contact. Everything above absolute zero radiates
infrared energy, and the hotter it is the more it radiates; a lens gathers that
energy onto a detector which converts it to an electrical signal and then to a
temperature. Response time is around half a second. Ordinary service models
work from a few centimetres out to about three metres, and long-range
instruments reach 30 m. The laser is only an aiming aid — it does not measure
anything.

Two things decide whether the reading means anything.

**Emissivity** is how efficiently a surface radiates. Painted, oxidised,
rubber, cardboard and most building materials sit near 0.95, which is what
service instruments assume. Bright copper, polished aluminium and stainless
sit as low as 0.05, so a shiny suction line will read far too low while the
instrument mostly sees the reflected temperature of whatever is behind you.
The fix is to stick a square of matt tape or dab flat paint on the pipe and aim
at that.

**Distance-to-spot ratio** tells you how big a circle the instrument averages.

**Worked example.** An instrument with 12:1 optics is used from 1.8 m away.

- Spot diameter = 1800 mm ÷ 12 = **150 mm**.
- Aimed at a 15 mm suction line, the pipe fills only about a tenth of the spot
  width — a tiny fraction of the area — so the reading is dominated by the
  wall behind the pipe.

Get within 200 mm (spot about 17 mm) or use a contact probe. Infrared is
excellent for scanning product in a merchandiser, checking a hot electrical
connection from a safe distance, comparing compressor body temperatures, or
finding a blocked circuit on a condenser. It is the wrong tool for setting
superheat.

Thermal imaging cameras are the same physics with thousands of detectors, and
they earn their keep finding hot terminations in switchboards and mapping
uneven coil temperatures.

## Probes and how they are attached

| Probe | Use |
|---|---|
| Touch or surface probe | Quick spot readings on pipe and coil surfaces — no clamp needed, so it saves time |
| Clamp probe | Clips over a pipe; the right choice when the sensor has to stay put for a long test |
| Pipe-wrap or hook-and-loop probe | Straps a bead sensor onto a suction line for superheat work |
| Air probe | Low mass, exposed junction, for duct and grille readings |
| Immersion probe | Sealed stem for liquids, water loops and calibration baths |
| Penetration probe | Food product core temperatures, HACCP checks |

Response time follows thermal mass. A fine bead thermocouple settles in a few
seconds; a heavy stainless immersion probe can take minutes. Waiting for the
reading to stop moving is not optional.

Multi-channel digital service thermometers let you watch on-coil, off-coil,
suction line and liquid line at once, and most log the results. The same family
includes the indoor climate analyser, which reads air and surface temperature,
air velocity, humidity and radiant temperature together and stores the lot for
replay when you are investigating a comfort complaint.

>! Do not put a mercury-in-glass thermometer anywhere near food, a coolroom, or
>! a customer's product. A breakage means a contamination clean-up and possibly
>! a condemned stock line. Spirit-filled or electronic instruments only.

## What to remember

- Choose the sensor for the job: thermocouple for speed and range, thermistor
  for service work, RTD for reference accuracy, infrared for distance.
- Infrared is only as good as the emissivity and the spot size — matt tape
  fixes shiny pipes, closer range fixes the spot.
- Match extension wire to thermocouple type; never mix them.
- A wandering controller sensor is a fault to find, not a plant symptom.
- Check every dial thermometer in an ice bath while you are on site anyway.
`,
          quiz: [
            {
              q: "You aim an infrared thermometer at a bright copper suction line and get −2 °C, but a clamp probe on the same pipe reads 7 °C. What is the most likely explanation?",
              options: [
                "The clamp probe is faulty",
                "The polished copper has very low emissivity, so the infrared reading is dominated by reflections",
                "Infrared thermometers always read low on cold surfaces",
                "The laser pointer was not switched on",
              ],
              answer: 1,
              explain: "Bright copper radiates poorly (emissivity around 0.05) while the instrument assumes about 0.95, so it sees mostly reflected surroundings. Sticking matt tape on the pipe and aiming at that brings the reading into line. The clamp probe, in good contact, is the trustworthy one here.",
            },
            {
              q: "An infrared thermometer with a 12:1 distance-to-spot ratio is used 3 m from the target. How wide is the area it averages?",
              options: [
                "12 mm",
                "36 mm",
                "250 mm",
                "It always measures a 25 mm spot regardless of distance",
              ],
              answer: 2,
              explain: "3000 mm ÷ 12 = 250 mm. Anything smaller than that circle is averaged together with its background, which is why small pipes and small components need close range or a contact probe.",
            },
            {
              q: "Which sensor is the best choice when you need a stable, linear reference for calibrating other thermometers?",
              options: [
                "NTC thermistor",
                "Type K thermocouple",
                "Platinum RTD (Pt100)",
                "Bimetal dial thermometer",
              ],
              answer: 2,
              explain: "A Pt100 changes about 0.385 Ω per kelvin in a near-linear way and holds its calibration, which is why reference and BMS applications use it. Thermistors are more sensitive but non-linear over a narrow band, and thermocouples produce only microvolts and depend on cold-junction compensation.",
            },
            {
              q: "Why must thermocouple extension wire be the same type as the probe?",
              options: [
                "So the colours match the meter",
                "Because a junction of dissimilar metals anywhere in the loop generates its own voltage and corrupts the reading",
                "Because different types carry different currents",
                "It does not matter as long as the connection is tight",
              ],
              answer: 1,
              explain: "A thermocouple works because dissimilar metals joined together produce a voltage. Splice type K into type T wire and you have created extra unwanted junctions generating their own millivolts, so the meter reads a mixture of the process temperature and the junction box temperature.",
            },
            {
              q: "A bimetal dial thermometer in a coolroom reads 4 °C but an ice bath check shows it reading 2.5 °C in melting ice. What is the coolroom air temperature most likely to be?",
              options: [
                "4 °C — the ice bath test only checks low temperatures",
                "About 1.5 °C, because the instrument reads about 2.5 K high",
                "About 6.5 °C",
                "Unknown; a bimetal thermometer cannot be checked",
              ],
              answer: 1,
              explain: "The ice bath shows a +2.5 K offset, so subtract it: 4 − 2.5 = about 1.5 °C. Either correct the instrument at its adjusting nut or note the offset on the sheet. Ignoring a known offset on a food-storage room is how product ends up outside its required band.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "temperature-measurement-technique",
          title: "Getting the probe in the right place",
          minutes: 13,
          simple: "Most wrong temperature readings come from where the probe was put, not from the instrument. A sensor taped loosely to a pipe in a draught, or a thermometer sitting against a coolroom wall, is measuring something other than what you think. This lesson is a tour of the places technicians commonly get it wrong and what to do instead.",
          refs: REFS,
          content: `
An expensive thermometer in the wrong spot loses to a cheap one in the right
spot every time. Heat arrives at a sensor by conduction, convection and
radiation, and unless you control all three the number you read belongs to
something other than the thing you are trying to measure.

## Reading the surface of a finned evaporator

A finned coil shows a wide spread of temperatures depending on where you touch
it, because fin surfaces sit somewhere between the refrigerant and the air.

- Take readings at a **U-bend**, or on any straight length of unfinned tube.
  These are the closest thing to bare primary surface.
- Do not read **within 300 mm of the refrigerant control**. Liquid entering the
  coil is still dropping in temperature there, so the reading is high.
- Do not read at the **outlet end**. By then all the liquid has boiled off and
  the vapour is superheated by 4 to 5 K, so again the reading is high.
- Attach the sensor across the flat side of the bend to maximise contact area,
  and hold it with a **metal saddle or clip** — two straps, or one wide strap,
  so contact is made along the whole sensor.
- **Never rely on insulation tape as the fixing.** Tape holds the sensor away
  from the metal and insulates it from the very heat path you are trying to
  measure. Clamp first with metal, then insulate over the top if you like.
- On a forced-draught coil, **shield the sensor from the airstream**, or the
  air will drag the reading towards air temperature.

If that sounds familiar, it should: it is exactly the discipline used when
fitting the remote bulb of a TX valve.

Done properly, a surface reading on an evaporator sits within about **2 to 3 K**
of the refrigerant inside — and the surface is always the warmer of the two.
The same clamping approach works on condensers.

Touch-probe digital thermometers make spot checks quick because no clamp is
needed; clamp probes earn their place when the sensor has to stay put while
the system settles.

### Turning a surface temperature into a pressure

The real value of a surface reading is the link back to system pressure.

**Worked example.** On an R134a coil you measure a surface temperature of
−20 °C with a suction pressure of 20 kPa.

- 20 kPa gauge is about 121 kPa absolute; on the R134a saturation curve that is
  roughly **−22 °C**.
- So the refrigerant is about **2 K colder than the surface** — exactly the
  relationship described above.

Now flip it around. On a sealed unit with no gauge ports, that same
relationship lets you estimate suction pressure from a surface reading: measure
−20 °C at a U-bend, assume the refrigerant is about 2 K colder at −22 °C, look
up the saturation pressure, and you have a usable estimate of suction pressure
without ever breaking into the system. On a hermetic domestic unit that is
often the only measurement available.

!FIG[pt-curve]

## Measuring superheat honestly

Superheat is the suction-line temperature at the TXV bulb minus the saturated
evaporator temperature. Two errors ruin it:

1. The thermometer is not properly attached at the bulb position — use a clamp
   probe or a pipe-wrap probe, clean the pipe, and insulate over the sensor.
2. **Pressure drop in the suction line.** Any run longer than three or four
   metres drops pressure between the evaporator outlet and the gauge port at
   the compressor, so the gauge under-reads the true evaporator pressure. As a
   working figure the suction gauge typically indicates about 1 K colder than
   the actual saturated refrigerant in the coil.

**Worked example — superheat with a pressure-drop allowance.** R134a system,
suction line about 4 m long.

- Clamp probe at the TXV bulb: **−1 °C**.
- Suction pressure at the compressor: **150 kPa**, which is about −6 °C
  saturated.
- Allow 1 K for line pressure drop: true saturated evaporator temperature
  = −6 + 1 = **−5 °C**.
- Superheat = −1 − (−5) = **4 K**.

Read carelessly, the same system looks like 5 K of superheat. On a coil set for
4 K that one kelvin is the difference between adjusting the valve and leaving
it alone. The clean solution is a Schrader valve at the evaporator outlet or in
the TX valve external equaliser line, which gives you the saturation pressure
where it actually matters.

!FIG[superheat-measure]

!SIM[Watch superheat change as the coil floods and starves](fault=txvStuckOpen)

## Air temperature readings

Air temperatures vary far more across a space than most people expect,
especially across the face of a propeller-fan evaporator. Induced-draught
arrangements are steadier but still need care.

### Inside a refrigerated space

Every one of these will bias a coolroom or cabinet reading:

- Warm product sitting close to the sensor.
- Radiant heat from a light bulb within 200 to 300 mm.
- Contact with a wall — walls are always warmer than the air.
- Radiant heat through display glass. A real case: ice-cream at the top of a
  freezer melted from a chicken rotisserie standing about a metre from the
  plastic lids.
- Warm air pouring in from an opened door.
- Natural stratification — cold air sinks. A reading taken across the top of a
  bin freezer is not representative; measure the full range top to bottom.
- Air blowing directly off the evaporator, which is colder than the space.

The practical answer is several readings, mapped, plus a clear note of where
each was taken. For product temperature, measure between packages or use a
simulated product probe rather than a sensor waving in the airstream.

### Room air-conditioners

The fastest check on a room air-conditioner is the temperature difference across
the cooling coil:

1. Switch the unit to **full recirculation** — close the ventilation damper —
   so you are not mixing outside air into the result.
2. Read the on-coil air at the **filter**, where access is easy.
3. Read the off-coil air **beyond the fan**: inside the plenum directly above
   the fan outlet, and at the discharge grille, centre, left and right.
4. Take the **lowest** reading as the air-off temperature, because room air
   entrained into the discharge will bias the others high.

What the answer means:

| Measured temperature difference | Interpretation |
|---|---|
| About 10 to 12 K with normal to dry room air | Normal — for example 22 °C room, 12 °C off the coil |
| About 8 to 10 K with very humid room air | Normal — more of the coil's capacity is doing latent work |
| Less than the above | Condensing unit inefficiency — low charge, poor condensing, tired compressor |
| More than 12 K with the fan on high | Restricted airflow — dirty filter, blocked coil, fan fault |

### Open-top merchandisers

Big open cabinets have all the problems of a room air-conditioner plus shop
draughts, air-curtain spillage and over-stacked product. Take plenty of
readings:

- **Product-related readings** go among the food at representative points, not
  in the airstream, and never in freshly loaded warm stock.
- **Plant-related readings** go across the coil at accessible points, inside
  the air outlet, and at the outlet and return grilles.
- On a **multiplexed run of cabinets**, read at similar locations every metre
  or so along the line and plot the results on a diagram or graph. Patterns
  show up immediately — a warm end usually means a distribution or defrost
  issue, not a plant issue.

Many cabinets now carry permanent sensors feeding an alarm system that calls
for service on a temperature rise, and infrared thermometers have become the
standard supermarket tool for spot-checking product surface temperature.

>! Temperature records on food-storage plant are legal documents under food
>! safety law. Record where each reading was taken and with what instrument. A
>! product reading taken in the discharge airstream, then written up as product
>! temperature, is a falsified record.

## On the job

- U-bends and bare tube for surface readings; nothing within 300 mm of the
  metering device or the coil outlet.
- Metal strap for contact, insulation over the top, shield from the draught.
- Allow about 1 K for suction line pressure drop before you judge superheat.
- Take the lowest off-coil reading on a room air-conditioner as the true one.
- Map a cabinet with many readings before blaming the refrigeration plant.
`,
          quiz: [
            {
              q: "Where should a surface temperature be measured on a finned evaporator to best represent the refrigerant inside?",
              options: [
                "On a fin near the middle of the coil",
                "At a U-bend or on unfinned straight tube, more than 300 mm from the refrigerant control and away from the outlet",
                "As close as possible to the expansion valve outlet",
                "On the suction line at the compressor",
              ],
              answer: 1,
              explain: "Fins sit between refrigerant and air, so they read high. U-bends and bare tube are primary surface. Within 300 mm of the metering device the liquid is still cooling down, and at the outlet the vapour is already superheated 4 to 5 K, so both ends read high.",
            },
            {
              q: "Why should a temperature sensor not be fixed to a pipe with insulation tape alone?",
              options: [
                "The tape melts at coil temperatures",
                "The tape holds the sensor off the metal and insulates it from the heat path being measured",
                "Tape leaves residue that voids the warranty",
                "It is fine — tape is the recommended method",
              ],
              answer: 1,
              explain: "Contact conduction is the whole mechanism. Tape acts as a spacer and an insulator, so the sensor drifts toward air temperature. Clamp with a metal saddle or clip — two straps or one wide strap for full-length contact — then insulate over the top if the coil is in a draught.",
            },
            {
              q: "Suction pressure at the compressor is 150 kPa (about −6 °C saturated), the suction line is 4 m long, and the clamp probe at the TXV bulb reads −1 °C. What is the superheat?",
              options: [
                "5 K, because −1 − (−6) = 5",
                "4 K, after allowing about 1 K for suction line pressure drop",
                "6 K",
                "1 K",
              ],
              answer: 1,
              explain: "The gauge is downstream of the line pressure drop, so it shows a saturation temperature about 1 K colder than the real evaporator. Correcting gives −5 °C in the coil, so superheat = −1 − (−5) = 4 K. A Schrader at the evaporator outlet or in the equaliser line removes the guesswork entirely.",
            },
            {
              q: "A room air-conditioner on full recirculation shows 15 K temperature difference across the coil with the fan on high. What does that suggest?",
              options: [
                "Excellent performance, nothing to do",
                "Restricted airflow — dirty filter, blocked coil or a fan problem",
                "Overcharge of refrigerant",
                "The ventilation damper has been left open",
              ],
              answer: 1,
              explain: "Normal is about 10 to 12 K in dry conditions and 8 to 10 K in humid air. Too little air across the coil means each kilogram of air spends longer in contact with it and leaves colder, so the split rises. Less than the normal band points the other way — towards condensing unit inefficiency.",
            },
            {
              q: "You measure −20 °C at a U-bend on an R134a evaporator. What is the refrigerant temperature inside likely to be?",
              options: [
                "About −20 °C — surface and refrigerant are the same",
                "About −22 °C, since the surface always sits a couple of kelvins warmer",
                "About −17 °C, since the surface is always colder",
                "It cannot be estimated without gauges",
              ],
              answer: 1,
              explain: "On an evaporator, heat flows from the air into the refrigerant, so the metal surface must be warmer than the refrigerant — typically by 2 to 3 K when the sensor is properly attached. That relationship is what lets you estimate suction pressure on a sealed system with no gauge ports.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "pressure-gauges-and-the-manifold",
          title: "Pressure gauges, the service manifold and the barometer",
          minutes: 12,
          simple: "The gauge manifold is the single most useful tool a refrigeration technician owns. Two gauges and a few valves let you read what is happening inside a sealed system, add refrigerant or oil, and pull a vacuum. This lesson covers what the gauges actually measure, what the valves do, and the unit conversions you need to read anyone's equipment.",
          refs: REFS,
          content: `
Ask a refrigeration technician to give up every tool but one and they keep the
gauge manifold. It reads system pressures, charges refrigerant, evacuates,
adds oil and connects to recovery gear. Everything else in this lesson exists
to make sure the numbers it gives you are true.

## How a gauge senses pressure

Almost every analogue service gauge uses a **Bourdon tube**: a flattened tube
curved into a C, sealed at one end. Pressure inside tries to straighten it, and
that small movement drives a geared pointer. It is simple, robust and cheap —
and it explains two of the gauge's habits. It responds to *gauge* pressure,
meaning pressure above the surrounding atmosphere, and it is far too coarse to
measure a deep vacuum, which is why micron gauges exist (next lesson).

## The two gauges on a manifold

| Gauge | Range for common refrigerants | Range for R410A | What it reads |
|---|---|---|---|
| Compound (low side) | −100 to 700 kPa | −100 to 2100 kPa | Suction pressure, and pressures below atmospheric |
| High pressure | 0 to about 2800 kPa | 0 to about 5500 kPa | Discharge and condensing pressure |

"Compound" simply means it reads both sides of atmospheric — positive pressure
and vacuum on one dial. Identify the gauges by their **colour and their scale**
(blue and compound for the low side, red and high-range for the high side)
rather than by which side of the manifold they sit on, because manifold layouts
vary between makers and the position is not a reliable guide.

Around the outside of the dial is the pressure scale. Inside it sit one or more
coloured **pressure-temperature rings**, each printed for a particular
refrigerant, so you can read saturation temperature straight off the needle
without a chart. Those inner scales are only valid for the refrigerant named on
them, and only while liquid and vapour coexist in the coil.

!FIG[gauge-pt-ring]

### Gauge pressure and absolute pressure

The dial reads zero when it is open to the room, because a Bourdon tube has
atmospheric pressure on the outside as well. Absolute pressure is what the
thermodynamic tables use.

**Absolute = gauge + atmospheric**, with standard atmospheric pressure taken as
101.3 kPa (often rounded to 100 kPa for rough work).

**Worked example.** An R410A high-side gauge reads 2620 kPa on a 35 °C day.

- Absolute pressure = 2620 + 101.3 = **2721.3 kPa absolute**.
- On the R410A saturation curve that is roughly **45 °C** condensing.
- The liquid line measures 39 °C, so subcooling = 45 − 39 = **6 K**.

!FIG[subcool-measure]

### Converting between pressure units

You will meet imperial gauges, bar-marked European equipment and kPa on
Australian paperwork. Learn three conversions:

| From | To kPa | Note |
|---|---|---|
| 1 bar | 100 kPa | Handy on European chillers and nitrogen regulators |
| 1 psi | 6.895 kPa | Older or imported gauges, US data sheets |
| 1 mm Hg (1 torr) | 0.1333 kPa | Only ever used down in the vacuum range |

**Worked example.** An imported gauge on an R410A system reads 220 psig.

- 220 × 6.895 = **1516.9 kPa gauge**, call it 1517 kPa.
- In bar: 1517 ÷ 100 = **15.2 bar gauge**.
- Absolute: 1517 + 101.3 = **1618 kPa absolute**, about 26 °C saturated for
  R410A — a plausible suction pressure for that refrigerant, not a discharge
  pressure. Sanity-check every conversion against what the system should be
  doing.

## The manifold itself

The body carries two hand valves, two gauge ports, and three (or four) hose
connections: low side, high side, and a centre service hose to the cylinder,
vacuum pump or recovery unit. The hand valves do **not** isolate the gauges —
each gauge always reads its own port. What the valves control is whether that
port is connected to the centre hose.

| Valve position | What is connected | Used for |
|---|---|---|
| Both valves closed (screwed in) | Gauges read both sides; centre hose isolated | Normal running test — read suction and discharge |
| Low valve open only | Low side joined to centre hose | Charging vapour, adding oil, drawing a sample |
| High valve open only | High side joined to centre hose | Charging liquid into the high side of an off system |
| Both valves open | Low, high and centre all joined | Evacuating the whole system, bypassing, equalising |

Hoses need care of their own. Purge air and moisture from the hoses before
opening them to the system, or you push non-condensables straight into the
plant. Use hoses rated for the refrigerant — R410A work needs hoses and gauges
rated to the higher pressures, typically a burst rating around 4830 kPa. Fit
**low-loss or ball-valve ends** so the hose contents are not dumped to
atmosphere when you disconnect: venting refrigerant is illegal and every gram
is charged against your handling licence obligations.

On plant with compressor service valves, the valve stem position decides what
you can see:

- **Back-seated** (stem wound fully out): the service port is closed. This is
  the running position.
- **Mid-seated** (cracked off the back seat about one turn): the port is open
  to the line and the gauge reads. This is how you take a reading.
- **Front-seated** (stem wound fully in): the line is isolated from the
  compressor and the port is open to the compressor only. Used for pump-down
  and isolation — and running a compressor with the suction valve front-seated
  will pull it into deep vacuum and can destroy it.

## Electronic manifolds

A digital manifold replaces Bourdon tubes with pressure transducers and adds
temperature clamps. It does the arithmetic for you: superheat and subcooling
live on the screen with the refrigerant selected from a built-in library, and
the better units also measure vacuum in microns, run a
temperature-compensated tightness test, log a whole service visit and hand the
data to a phone. The accuracy advantage is real, because a transducer is
usually quoted as a percentage of reading rather than of full scale.

## Barometers

A barometer measures atmospheric pressure. In air-conditioning work these are
usually **aneroid** — a sealed bellows or diaphragm that flexes as atmospheric
pressure changes, driving a pointer — and recording versions run a pen over a
drum chart on a 24-hour or seven-day rotation, exactly like recording
thermometers.

Two reasons a technician cares. First, absolute pressure calculations use the
*actual* barometric pressure, not the standard 101.3 kPa, and a plant at
altitude or a low-pressure weather system can shift that by several kilopascals.
Second, boiling points move with it — the 100 °C check on a thermometer only
holds at sea level, dropping around 1 K per 300 m of altitude.

## Looking after gauges

- Zero the gauge with the port open to atmosphere; correct with the adjuster
  under the lens or behind the bezel.
- Compare both of your gauges on the same port occasionally — disagreement
  means at least one is wrong.
- Never over-range a gauge. Once the Bourdon tube is stretched, the calibration
  is gone even at low readings.
- A gauge that has been dropped is suspect until checked.
- Do not leave a manifold connected to a running plant for days. Every Schrader
  connection is a potential leak and a source of contamination.

>! R410A operates at roughly 50 to 60 per cent higher pressures than R22. Never
>! connect an R22-era manifold, hose set or recovery cylinder to an R410A
>! system. Always wear eye protection when connecting or disconnecting: liquid
>! refrigerant hitting an eye causes an instant freeze burn.

## What to remember

- Compound gauge reads both vacuum and pressure; identify gauges by colour and
  scale, not by position on the manifold.
- Absolute = gauge + 101.3 kPa; 1 bar = 100 kPa; 1 psi = 6.895 kPa.
- The hand valves connect the centre hose, they do not isolate the gauges.
- Mid-seat a service valve to read it; never run a compressor front-seated on
  the suction side.
- Purge hoses, use low-loss fittings, and never vent refrigerant.
`,
          quiz: [
            {
              q: "Both manifold hand valves are screwed fully in (closed) and the hoses are connected to a running system. What do the gauges show?",
              options: [
                "Nothing — closing the valves isolates the gauges",
                "Suction pressure on the compound gauge and discharge pressure on the high gauge",
                "Both gauges show the same equalised pressure",
                "Only the high side reads, because the low valve blocks the compound gauge",
              ],
              answer: 1,
              explain: "Each gauge is permanently connected to its own port. The hand valves only decide whether that port is joined to the centre service hose. Closed valves is exactly the position you use to read a running system without moving any refrigerant.",
            },
            {
              q: "An R410A high-side gauge reads 2620 kPa. What is the absolute pressure?",
              options: [
                "2620 kPa — service gauges read absolute",
                "2721.3 kPa, adding standard atmospheric pressure of 101.3 kPa",
                "2518.7 kPa, subtracting atmospheric pressure",
                "2620 bar",
              ],
              answer: 1,
              explain: "A Bourdon tube has atmosphere on its outside, so it reads pressure above atmosphere. Absolute = gauge + 101.3 kPa. Thermodynamic tables and P-h charts are in absolute units, so the addition matters whenever you move from the gauge to the chart.",
            },
            {
              q: "A compressor is run with its suction service valve front-seated. What happens?",
              options: [
                "Nothing — that is the normal running position",
                "The compressor is cut off from the suction line and pulls itself into a deep vacuum, which can destroy it",
                "The discharge pressure rises to relief valve setting",
                "The service port is closed so no gauge can be fitted",
              ],
              answer: 1,
              explain: "Front-seating isolates the suction line from the compressor while leaving the service port open to the compressor. With nothing to draw on, the machine pulls a deep vacuum on itself — motor cooling disappears, oil foams and internal arcing becomes possible. Back-seated is the running position; mid-seated is the reading position.",
            },
            {
              q: "An imported gauge reads 145 psig. What is that in kPa gauge?",
              options: [
                "About 1000 kPa",
                "About 21 kPa",
                "About 1450 kPa",
                "About 145 kPa",
              ],
              answer: 0,
              explain: "145 × 6.895 = 999.8 kPa, so about 1000 kPa gauge. The two useful conversions to keep in your head are 1 psi = 6.895 kPa and 1 bar = 100 kPa. Write the working down rather than doing it mentally on a roof.",
            },
            {
              q: "Why is the pressure-temperature ring printed inside a gauge dial only usable in certain conditions?",
              options: [
                "It only works below 0 °C",
                "It is valid only for the refrigerant it is printed for, and only where liquid and vapour coexist as saturated mixture",
                "It only works when the compressor is off",
                "It becomes valid once the gauge is zeroed",
              ],
              answer: 1,
              explain: "The ring is a printed saturation curve for one refrigerant. Use it on a different refrigerant and it is simply the wrong curve. Use it on superheated vapour or subcooled liquid and there is no fixed pressure-temperature relationship to read — which is precisely why you also need a thermometer to get superheat and subcooling.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "vacuum-and-micron-gauges",
          title: "Measuring a vacuum: micron gauges and vacuum scales",
          minutes: 12,
          simple: "A service gauge cannot tell a good vacuum from a useless one — the whole difference happens in the last hair's breadth of needle movement. A micron gauge measures that region by seeing how fast a hot wire cools, because in a good vacuum there are hardly any air molecules left to carry heat away. This lesson covers the instrument, the confusing unit names, and how to read a decay test.",
          refs: REFS,
          content: `
Evacuation removes air and moisture before a system is charged. Whether it
worked is a measurement question, and it is the one measurement where the
familiar compound gauge is genuinely useless.

## Why the compound gauge cannot do this job

A Bourdon tube or diaphragm dial gauge resolves, at best, around **133 Pa** —
one millimetre of mercury. Everything that matters in evacuation happens well
below that.

**Worked example — the needle cannot show it.** Compare a wet, unusable system
at 5000 microns with a properly dry one at 500 microns.

- 5000 microns = 5000 × 0.1333 Pa = 666.6 Pa = 0.667 kPa absolute. As gauge
  pressure that is 0.667 − 101.3 = **−100.6 kPa**.
- 500 microns = 500 × 0.1333 Pa = 66.7 Pa = 0.067 kPa absolute, or
  **−101.2 kPa** gauge.
- The difference between a system you must keep pumping and one ready to charge
  is **0.6 kPa** — thinner than the needle on the dial.

Mercury manometers can read that low, but they are fragile, awkward and
dangerous in service work. Careless handling can fill the instrument with
compressor oil, or worse, draw mercury back into the compressor.

## The thermocouple (electronic) vacuum gauge

The service instrument, often called an electronic vacustat or micron gauge,
uses a heated filament with a thermocouple attached to it inside a small
chamber connected to the system.

Air molecules striking the filament carry heat away. As the pump removes
molecules there is less and less to cool it, so the filament runs hotter and
the thermocouple output rises. **Fewer molecules, hotter filament, deeper
vacuum.** The scale is calibrated directly in microns. (Instruments using a
thermistor instead of a thermocouple — Pirani gauges — work on the same
principle by measuring the filament's resistance.) Digital service manifolds
increasingly include the same function.

Practical rules:

- Mount the sensor **upright** so oil, dirt and debris cannot fall into it.
- **Never let system pressure reach it.** Isolate the gauge before breaking
  vacuum or charging. A shot of refrigerant or oil ruins the sensor and it
  will then read a beautifully deep, entirely false vacuum.
- Connect the gauge at the point **furthest from the pump**, not on the pump
  port. Right at the pump you measure the pump; at the far end of the system
  you measure the system.
- Keep the sensor clean. Oil film on the filament changes how it loses heat.

## The unit zoo

Vacuum gets quoted in at least four ways, which is a fertile source of
mistakes.

- **Micron (µm Hg)** — a micrometre of mercury, one thousandth of a millimetre.
- **Torr** — one torr equals one millimetre of mercury, so 1000 microns = 1 torr.
- **Pascal (Pa)** — the SI unit, and where Australian practice is slowly
  heading.
- **kPa absolute** — how the number would appear on an absolute-pressure scale.

| Microns (µm Hg) | Torr (mm Hg) | Pascals | kPa absolute |
|---|---|---|---|
| 760 000 | 760 | 101 592 | 101.6 (atmosphere) |
| 25 000 | 25 | 3 330 | 3.33 |
| 5 000 | 5 | 667 | 0.667 |
| 1 000 | 1 | 133.3 | 0.133 |
| 500 | 0.5 | 66.7 | 0.067 |
| 150 | 0.15 | 20.0 | 0.020 |
| 100 | 0.1 | 13.3 | 0.013 |
| 50 | 0.05 | 6.6 | 0.007 |
| 10 | 0.01 | 1.3 | 0.001 |

The single number to memorise is **1 micron = 0.1333 Pa**, or turned around,
**1 Pa = 7.5 microns**.

**Worked example — microns to pascals.** A gauge reads 250 microns.
250 × 0.1333 = **33.3 Pa**.

**Worked example — pascals to microns.** A specification calls for evacuation
to 20 Pa. 20 ÷ 0.1333 = **150 microns**. So a job sheet demanding "20 Pa" and
one demanding "150 microns" are asking for exactly the same thing.

## Why the target is where it is

Evacuation is really about boiling water out of the system, and water boils at
whatever temperature matches the pressure above it.

**Worked example — boiling water at room temperature.** At 20 °C the saturation
pressure of water is 2.34 kPa absolute.

- In microns: 2340 Pa ÷ 0.1333 = about **17 500 microns**.
- So once the system is below roughly 17 500 microns, any liquid water in it
  begins to boil at room temperature and can be pumped away as vapour.
- Pulling further down to 500 microns keeps water boiling even when the metal
  has chilled itself down to around −25 °C through evaporation, which is what
  happens in a cold plantroom.

That is the reasoning behind the usual field target: pump to below **500
microns**, isolate, and require the reading to hold. It also explains **triple
evacuation** — pump down, break the vacuum with dry nitrogen to re-warm the
system and dilute what remains, and repeat. Nitrogen carries the stubborn
moisture out with it.

## Reading a decay (standing vacuum) test

Isolate the pump with the gauge still connected and watch for ten to fifteen
minutes:

| What the needle or display does | What it means | Action |
|---|---|---|
| Holds steady at or below target | System is dry and tight | Charge it |
| Rises, then levels off well below atmosphere | Moisture still boiling off, or oil outgassing | Keep pumping, consider nitrogen break, check pump oil |
| Rises steadily and does not stop | Leak drawing air in | Stop. Pressure test with dry nitrogen and find it |

!FIG[vacuum-decay]

A slow, endless rise is often blamed on a leak when the real cause is a tired
vacuum pump with contaminated oil. Pump oil absorbs moisture and its ultimate
vacuum collapses; change it after every wet job, and blank off the pump and
check it can reach its rated vacuum on its own before condemning the system.

>! Never use the system's own compressor to pull a vacuum. Motor windings rely
>! on refrigerant vapour for cooling and insulation, and in deep vacuum internal
>! arcing can occur. Also never leave a stopped vacuum pump connected to an
>! evacuated system — oil can be drawn back into the plant.

## On the job

- The compound gauge tells you a vacuum exists; only a micron gauge tells you
  whether it is good enough.
- 1 micron = 0.1333 Pa; 1000 microns = 1 torr = 133.3 Pa.
- Connect the micron gauge furthest from the pump, mounted upright.
- Isolate the micron gauge before refrigerant or pressure can reach it.
- Steady = dry and tight; levelling rise = moisture; endless rise = leak.
`,
          quiz: [
            {
              q: "Why can a compound gauge not verify a proper evacuation?",
              options: [
                "It reads gauge pressure, and vacuum is negative",
                "Its best resolution is around 133 Pa, while the difference between a wet system and a dry one is a fraction of that",
                "It is only calibrated for refrigerant, not air",
                "It reads too slowly to follow a vacuum pump",
              ],
              answer: 1,
              explain: "A Bourdon or diaphragm dial resolves about 1 mm Hg, or 133 Pa. Between 5000 microns and 500 microns the absolute pressure changes by only about 0.6 kPa, so the needle sits hard against the stop the whole time. Only a micron gauge can see into that region.",
            },
            {
              q: "In a thermocouple vacuum gauge, what indicates a deeper vacuum?",
              options: [
                "The heater filament runs cooler because there is less current",
                "The heater filament runs hotter because there are fewer molecules to carry heat away",
                "The mercury column rises higher",
                "The Bourdon tube straightens further",
              ],
              answer: 1,
              explain: "Gas molecules conduct heat away from the filament. Remove molecules and the filament heats up, so the attached thermocouple produces more millivolts. The instrument turns that into a micron reading — an indirect measurement of pressure through a heat-transfer effect.",
            },
            {
              q: "A specification requires evacuation to 20 Pa absolute. What is that in microns?",
              options: [
                "About 20 microns",
                "About 150 microns",
                "About 2670 microns",
                "About 15 microns",
              ],
              answer: 1,
              explain: "One micron is 0.1333 Pa, so 20 ÷ 0.1333 = 150 microns. Being able to move between the two scales matters because equipment manuals, gauges and specifications in Australia mix pascals, torr and microns freely.",
            },
            {
              q: "During a standing vacuum test the reading rises from 400 microns, then settles at about 1500 microns and stops climbing. What does that indicate?",
              options: [
                "A leak in the system",
                "Moisture still boiling off inside the system, or outgassing oil",
                "The system is dry and ready to charge",
                "The micron gauge has failed",
              ],
              answer: 1,
              explain: "A leak lets atmosphere in continuously, so the reading keeps climbing towards atmospheric and never levels. A rise that levels off is vapour being generated inside a sealed volume until it reaches equilibrium — almost always water. Keep pumping, break with dry nitrogen and pump again.",
            },
            {
              q: "Where should the micron gauge be connected during evacuation?",
              options: [
                "On the vacuum pump inlet port, so it sees the deepest reading",
                "At the point in the system furthest from the pump",
                "On the centre hose of the manifold",
                "Anywhere — the reading is the same throughout",
              ],
              answer: 1,
              explain: "At the pump you measure the pump, which will always look excellent while a restriction or a long hose hides a poor vacuum out in the system. Reading at the far end proves the whole volume reached the target. Mount the sensor upright and isolate it before any pressure is admitted.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "airflow-measurement",
          title: "Airflow: duct pressures, pitot tubes and anemometers",
          minutes: 14,
          simple: "You cannot see air, so you measure it by the push it makes. A tube facing into the stream feels the moving air pressing on it, and a little arithmetic turns that push into a speed; multiply speed by the size of the opening and you have litres per second. Different instruments suit different places, and no single one does the lot.",
          refs: REFS,
          content: `
Half the air-conditioning complaints you will ever attend come down to airflow,
and airflow is the measurement most often taken badly. There is no single
instrument that measures air velocity well everywhere — each type suits
particular duties. Most of them work by sensing the pressure the moving air
makes, using it to spin a propeller, deflect a vane or move a liquid column.
The one exception is the thermal anemometer, where a heated wire is cooled by
the passing air.

## The three pressures in a duct

| Pressure | What it is | How it is measured |
|---|---|---|
| Static pressure (SP) | Pressure acting equally in all directions — the pressure trying to burst or collapse the duct | A probe at a small hole in the duct wall, connected to a manometer |
| Velocity pressure (VP) | The pressure due to the air's motion alone | A tube facing into the stream, with static pressure balanced out on the other side of the manometer |
| Total pressure (TP) | The sum of the two | A tube facing directly into the airstream |

Where duct pressure is positive:

- TP = SP + VP
- VP = TP − SP
- SP = TP − VP

Velocity pressure can never be measured directly by a single tube facing the
flow, because that tube also feels the static pressure. The trick in every
velocity-pressure instrument is to feed static pressure to *both* sides of the
measuring device so it cancels, leaving only the velocity component.

## Manometers

The simplest manometer is a U-shaped glass or plastic tube part-filled with
water, with a scale between the legs. Air pressure on one leg pushes the water
up the other, and the difference in levels is the pressure. Scales read in
pascals or millimetres of water gauge (**1 mm WG = 9.81 Pa**, near enough to
9.8).

- **Vertical U-tube** — cheap, self-calibrating (the fluid density is the
  calibration), fine for larger pressures.
- **Inclined manometer** — one leg laid at a shallow angle so a small vertical
  height stretches into a long, readable travel along the tube. These use a
  light coloured oil instead of water and are the standard instrument for
  velocity-pressure work. They must be levelled and zeroed before use.
- **Micromanometer** — the electronic equivalent, with a pressure transducer,
  digital display, often built-in velocity and volume-flow calculation.

The same three hook-ups shown for the U-tube give static, total or velocity
pressure depending on where the probes go and which legs are connected.

## Differential pressure gauges

A Magnehelic-type differential gauge has two connections and reads the
difference between them directly on a dial, using a diaphragm movement. It
lives permanently across filters and fans in air-handling plant: once the
pressure drop across a filter passes the set figure, the filter is changed or
cleaned. It can substitute for a manometer for duct work, but it is not as
accurate, so it is a monitoring instrument rather than a commissioning one.

## The pitot tube

The pitot tube is the reference method for duct velocity, and it is beautifully
simple: a tube within a tube, bent into an L so the short leg faces directly
into the airstream.

- The **inner tube** opens at the nose, straight into the flow, and carries
  **total pressure**.
- The **outer tube** has small radial holes around its side, parallel to the
  flow, and carries **static pressure**.
- Connect one to each side of a manometer and it reads (SP + VP) − SP = **VP**,
  the velocity pressure alone.

Face the nose squarely into the flow — even a modest yaw angle costs accuracy —
and enter the duct through a small access hole sealed afterwards.

### Turning velocity pressure into velocity

Velocity pressure is the kinetic energy of the air stream: VP = ½ρv², so

**v = √(2 × VP ÷ ρ)**

where v is in m/s, VP in Pa and ρ is air density in kg/m³. Standard air is
taken as **1.200 kg/m³**, which is air at 18 °C and 50% relative humidity at sea
level. Substituting that density gives the shortcut **v = 1.291 × √VP**.

**Worked example — velocity from velocity pressure.** A pitot tube and
manometer read 29 Pa.

- v = 1.291 × √29
- √29 = 5.385
- v = 1.291 × 5.385 = **6.95 m/s**, call it 7.0 m/s.

**Worked example — correcting for air density.** The same 44 Pa of velocity
pressure measured in a 45 °C heating supply duct.

- Standard-air answer: v = 1.291 × √44 = 1.291 × 6.633 = 8.56 m/s.
- Actual density: ρ = 1.200 × (291 ÷ 318) = **1.098 kg/m³** (291 K is 18 °C,
  318 K is 45 °C).
- v = √(2 × 44 ÷ 1.098) = √80.1 = **8.95 m/s**.

That is 4.5% high, which matters on a commissioning report and does not matter
on a quick comparative check. Know which one you are doing.

### From velocity to volume flow

**Worked example — a duct traverse.** A rectangular duct is 600 mm × 400 mm. A
16-point equal-area traverse gives velocity pressures whose individual
velocities average 8.5 m/s.

- Area = 0.600 × 0.400 = **0.24 m²**
- Volume flow = area × velocity = 0.24 × 8.5 = **2.04 m³/s**
- In the units on Australian drawings: 2.04 × 1000 = **2040 L/s**

Two traps. First, average the **velocities**, not the velocity pressures —
because velocity goes with the square root of pressure, averaging pressures
gives a biased answer. Second, m/s is not m³/s: forgetting to multiply by area
is the single most common calculation error in air balancing.

## Anemometers

| Instrument | Principle | Best used for | Limitations |
|---|---|---|---|
| Rotating vane | A propeller turns at a speed set by air velocity; essentially a revolution counter reading m/s | Large free openings — filters, coil faces, supply and return grilles without deflectors | Needs free area above about 60% of gross; bearings wear; poor at low velocity |
| Swinging vane (velometer) | An aluminium vane deflects against a spring, moving a pointer | Direct reading at grilles; probe versions adapt it to ducts and small openings | Position and orientation sensitive; mechanical, so it drifts |
| Thermal (hot wire) | A heated element is cooled by the airflow; cooling is converted to velocity | Low velocities, small openings, duct traverses through a small hole | Fragile element; dirt changes the calibration; direction sensitive |
| Flow hood (balometer) | A fabric hood captures the entire outlet and passes the air through a measuring grid, reading L/s directly | Terminal outlets and diffusers during balancing | The hood adds back-pressure, so it can change the flow it is measuring; correction factors apply |

### Using a vane anemometer at a grille

Place it with its edge **level with, or against but not inside**, the grille or
fins. Provided the free area exceeds about 60% of the gross area, the readings
are accurate enough for service work. Take a traverse across the face and
average — electronic vane instruments do this for you, averaging over about
three seconds and displaying m/s directly.

There is one standard correction: when reading **return air entering a grille**
from the downstream side, multiply by a factor of **0.85**.

**Worked example — return air quantity.** A return grille measures 600 mm ×
400 mm gross. A nine-point face traverse averages 1.9 m/s, read downstream.

- Gross area = 0.6 × 0.4 = **0.24 m²**
- Uncorrected flow = 0.24 × 1.9 = 0.456 m³/s
- Apply the 0.85 correction: 0.456 × 0.85 = **0.388 m³/s = 388 L/s**

## Where you are allowed to measure

Air stays turbulent for six to seven times the outlet diameter downstream of any
restriction — a bend, damper, coil or fan. Readings taken inside that distance
are not representative no matter how good the instrument is. Truly accurate
readings only happen under close-to-ideal conditions, so on real plant you
choose the least-bad location and say so on the report.

When you first pick up an air-measuring instrument, deliberately experiment:
same system, different locations, different angles to the flow, different
distances from filters, coils, dampers and grilles, and note how much the
answer moves. Then settle on one technique for that instrument and use it every
time, so at least your readings are comparable with each other.

>! Write down every raw reading and every conversion line, in order, so another
>! technician can re-check the arithmetic. Confusing m/s with m³/s, or leaving
>! out a free-area factor, turns a correct measurement into a wrong report — and
>! commissioning reports get relied on for years.

## On the job

- TP = SP + VP; a pitot tube measures VP by cancelling SP on both sides.
- v = 1.291 × √VP for standard air of 1.200 kg/m³; correct the density when it
  matters.
- Average velocities, never velocity pressures, across a traverse.
- Vane anemometer at the face of open grilles, 0.85 on downstream return air.
- Flow hood for diffusers; thermal anemometer for low speeds and small holes.
- Nothing measured within six or seven duct diameters of a disturbance is
  worth much.
`,
          quiz: [
            {
              q: "A pitot tube connected to a manometer reads 29 Pa velocity pressure in standard air. What is the air velocity?",
              options: [
                "About 3.5 m/s",
                "About 7.0 m/s",
                "About 24 m/s",
                "About 29 m/s",
              ],
              answer: 1,
              explain: "v = 1.291 × √VP for air at 1.200 kg/m³. √29 = 5.385, and 1.291 × 5.385 = 6.95, so about 7.0 m/s. Velocity goes with the square root of pressure, which is why doubling the velocity pressure does not double the speed.",
            },
            {
              q: "How does a pitot tube separate velocity pressure from static pressure?",
              options: [
                "It subtracts a fixed correction factor",
                "The inner tube faces the flow and carries total pressure, while radial holes on the outer tube carry static pressure to the other side of the manometer, so static cancels",
                "It measures only when the duct pressure is negative",
                "The manometer fluid density does the correction automatically",
              ],
              answer: 1,
              explain: "Total pressure on one side, static on the other, so the manometer displays (SP + VP) − SP = VP. That is why the outer tube's holes must be parallel to the flow: they must sense static pressure only, unaffected by the air's motion.",
            },
            {
              q: "A supply duct is 500 mm × 400 mm and a traverse gives an average velocity of 6.0 m/s. What is the volume flow?",
              options: [
                "6.0 L/s",
                "1200 L/s",
                "120 L/s",
                "12 000 L/s",
              ],
              answer: 1,
              explain: "Area = 0.5 × 0.4 = 0.20 m². Flow = 0.20 × 6.0 = 1.2 m³/s = 1200 L/s. Failing to multiply velocity by area — quoting m/s where m³/s is meant — is the classic air-balancing calculation error the textbook warns about.",
            },
            {
              q: "When a rotating vane anemometer is used to read air entering a return grille from the downstream side, what correction is applied?",
              options: [
                "Multiply by 1.15",
                "Multiply by 0.85",
                "No correction is needed",
                "Subtract the free area percentage",
              ],
              answer: 1,
              explain: "A factor of 0.85 is recommended for return air read downstream of the grille, because the converging stream through the free area reads higher than the true face-average. The instrument is also only reliable where free area exceeds about 60% of gross area.",
            },
            {
              q: "Which airflow instrument does NOT work from the velocity pressure of the moving air?",
              options: [
                "Rotating vane anemometer",
                "Swinging vane velometer",
                "Thermal (hot wire) anemometer",
                "Pitot tube with inclined manometer",
              ],
              answer: 2,
              explain: "The thermal anemometer measures how fast moving air cools an electrically heated element, so it senses the air's cooling effect rather than its pressure. That makes it the instrument of choice at low velocities where velocity pressure is too small to measure reliably.",
            },
            {
              q: "Why should a traverse be averaged as velocities rather than as velocity pressures?",
              options: [
                "Because pressures cannot be added",
                "Because velocity varies with the square root of velocity pressure, so averaging pressures biases the result",
                "Because manometers read in mm WG, not Pa",
                "Because velocity pressure changes with duct size",
              ],
              answer: 1,
              explain: "Square-root relationships are not linear, so the average of the square roots is not the square root of the average. Convert each velocity pressure to a velocity first, then average the velocities. On a duct with an uneven profile the difference is easily a few percent.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "humidity-comfort-and-data-logging",
          title: "Humidity, comfort and data logging instruments",
          minutes: 12,
          simple: "Air carries invisible water, and how much it carries decides whether a room feels sticky, whether a coil drips, and whether stored food dries out. The oldest instrument for measuring it is two thermometers, one with a wet sock on it, whirled through the air. This lesson covers that and its modern electronic descendants, plus the loggers that record conditions while you are off site.",
          refs: REFS,
          content: `
Temperature alone does not describe air. Two rooms both at 24 °C feel entirely
different at 40% and at 75% relative humidity, and the refrigeration plant sees
a different job in each — one is mostly sensible cooling, the other loads the
coil with latent heat as moisture condenses out. Humidity measurement is also
how you decide whether a coolroom is drying product out, whether a
dehumidifier is earning its keep, and why a duct is sweating.

## The sling psychrometer

The oldest and still the most trusted field instrument is two matched
thermometers in a frame with a swivel handle. One reads plain air temperature —
the **dry bulb**. The other has a cotton wick or sock over its bulb, wetted with
water — the **wet bulb**. Whirling the instrument forces air past the wick, the
water evaporates, and evaporation takes latent heat out of that thermometer's
bulb, dragging it down. The drier the air, the faster the evaporation and the
bigger the drop.

Using it:

1. Wet the wick with **distilled water only**. Tap water leaves mineral solids
   in the cotton which block evaporation and quietly wreck the accuracy.
2. Grip the handle firmly and whirl the instrument at about **two to three
   revolutions per second**.
3. Stop, read the wet bulb first (it starts rising the moment you stop), then
   the dry bulb. Repeat until successive readings stop changing — the wet bulb
   has reached its steady depression.
4. Check the instrument occasionally by removing the wick, letting the bulb dry
   and confirming both thermometers read **exactly the same**. Manufacturers
   supply them as matched pairs and a mismatch means the readings are worthless.

An **aspirated psychrometer** does the same job with a small battery fan drawing
air over the two bulbs, which is more repeatable and much easier in a tight
plantroom. Either way the air speed over the wick must be brisk — around 3 to
5 m/s — or the wet bulb will read high.

### Turning the two readings into humidity

The pair of temperatures is the entry point into a psychrometric chart, which
then gives everything else.

**Worked example.** A sling psychrometer in an office reads dry bulb 24.0 °C,
wet bulb 17.0 °C.

- Wet-bulb depression = 24.0 − 17.0 = **7.0 K**.
- Entering the chart at 24 °C dry bulb and following up to the 17 °C wet-bulb
  line gives roughly **50% relative humidity**.
- From the same point, the dew point is about **13 °C** and the moisture content
  about **9.3 g of water per kg of dry air**.

That dew point figure is the practical one. A cooling coil surface at 8 °C is
below 13 °C, so it will condense moisture and dehumidify. A chilled water pipe
run through that office at 7 °C without insulation will sweat, and the drips
will end up on someone's desk.

## Electronic humidity instruments

| Instrument | Principle | Typical accuracy | Notes |
|---|---|---|---|
| Digital RH meter | A thin polymer film whose electrical capacitance changes with absorbed moisture | ±2 to ±3% RH | Reads RH and air temperature together, computes dew point and wet bulb, holds max and min |
| Mechanical hygrometer / hygrograph | Human hair or a fibre element lengthens with humidity, driving a pointer or a chart pen | ±5% RH at best | Cheap, no power, needs regular re-setting; still found on wall panels |
| Chilled-mirror dew point meter | A mirror is cooled until condensation forms, detected optically; the mirror temperature is the dew point | Very high | A fundamental method — used as the reference standard and for very dry applications |
| Data logger with RH sensor | Capacitive sensor plus memory and clock | ±2 to ±3% RH | Records temperature, RH and dew point over days or weeks |

Capacitive sensors drift with age and are poisoned by solvents, so they need
periodic checking. In the field this is done against saturated salt solutions in
a sealed jar, which hold a known humidity at a given temperature — sodium
chloride sits near 75% RH, magnesium chloride near 33%, and lithium chloride
near 11% — or by comparison against a freshly checked psychrometer.

## Comfort instruments

An **indoor climate analyser** exists because thermal comfort is not one
number. It measures air temperature, surface temperature, air velocity,
relative humidity and radiant temperature (using a globe sensor — a black
sphere with a thermometer at its centre) and logs all of them for later replay.

That combination answers complaints a plain thermometer cannot:

- "It's 23 °C but I'm cold." A cold window nearby has dropped the mean radiant
  temperature, or air velocity at the desk is too high — a draught.
- "It's the right temperature but it feels stuffy." High humidity, low air
  movement, or inadequate outside air. AS 1668.2 sets the ventilation rates.
- "Only in the afternoon." Logged data shows solar gain arriving faster than
  the plant can respond.

## Data loggers

A data logger is a small battery instrument with a sensor, a clock and memory.
Some are the size of a USB stick and plug straight into a computer to download.
They measure and record temperature, relative humidity and dew point over
hours, days or weeks.

Two quite different uses:

- **Temporary** — dropped into a coolroom, a duct or a complaint area for a
  week to prove what actually happens overnight and at weekends. This is how
  intermittent faults get caught, because the fault happens while nobody is
  watching.
- **Permanent** — required in applications where the customer or the service
  company must be able to prove that temperature and humidity never moved
  outside specification. Cold chain, food storage, pharmaceutical rooms and
  archives all run on these records.

Getting logged data right:

- **Placement decides the answer.** A logger sitting in the discharge airstream
  records the airstream, not the product. For product temperature, bury it
  among the stock or use a simulated product block.
- **Choose the interval deliberately.** One reading a minute fills memory and
  flattens the battery but catches defrost cycles; one every fifteen minutes
  covers a fortnight but can miss a short excursion entirely.
- **Calibration matters legally.** A logger used for food-safety or
  pharmaceutical records needs a current calibration certificate, or the record
  it produced is not defensible.
- **Note what else was happening.** A spike at 0600 every day is a delivery
  door, not a plant fault, and only the site diary tells you that.

>! Only distilled water on a psychrometer wick, and never dry the wick out and
>! re-wet it repeatedly without replacing it. A hardened, mineral-crusted wick
>! reads a wet bulb that is too high, which makes the air look far more humid
>! than it is — and that error will send you looking for a dehumidification
>! problem that does not exist.

## What to remember

- Dry bulb and wet bulb together define the air's condition; everything else
  comes off the psychrometric chart.
- Whirl at two to three revolutions per second until the readings stop moving,
  and check the thermometers match with the wick off.
- Wet-bulb depression is the measurement — a big drop means dry air.
- Dew point tells you what will sweat and what will dehumidify.
- Electronic RH sensors drift; check them against a salt solution or a known
  reference.
- A logger measures where you put it — placement is the measurement.
`,
          quiz: [
            {
              q: "Why must only distilled water be used on a sling psychrometer wick?",
              options: [
                "Distilled water evaporates faster than tap water",
                "Minerals from tap water build up in the cotton and interfere with evaporation, biasing the wet-bulb reading",
                "Tap water freezes at a different temperature",
                "It is a hygiene requirement only",
              ],
              answer: 1,
              explain: "The wet bulb depends on free evaporation from the wick. Dissolved solids left behind by tap water clog the fibres and slow evaporation, so the wet bulb does not fall as far and the air appears more humid than it is. Replace hardened wicks rather than persevering with them.",
            },
            {
              q: "A psychrometer reads 24 °C dry bulb and 24 °C wet bulb. What does that tell you?",
              options: [
                "The instrument is broken",
                "The air is saturated — 100% relative humidity, and the dew point equals the dry bulb",
                "The air is completely dry",
                "The wick has fallen off",
              ],
              answer: 1,
              explain: "With no wet-bulb depression there is no net evaporation, which only happens when the air can hold no more moisture. Dry bulb, wet bulb and dew point all coincide at saturation. Worth confirming the wick is genuinely wet before accepting the reading, though — a dry wick gives the same result for the wrong reason.",
            },
            {
              q: "Office air is 24 °C dry bulb, about 50% RH, dew point about 13 °C. An uninsulated chilled water pipe runs through at 7 °C. What happens?",
              options: [
                "Nothing — 7 °C is above freezing",
                "The pipe surface is below the dew point, so moisture condenses on it and it drips",
                "The pipe raises room humidity",
                "The pipe frosts over",
              ],
              answer: 1,
              explain: "Any surface below the air's dew point collects condensation. At 13 °C dew point a 7 °C pipe will run wet continuously. This is exactly why dew point, rather than relative humidity on its own, is the number you check before deciding whether insulation is adequate.",
            },
            {
              q: "A logger placed in a coolroom to verify product temperature is hung in the evaporator discharge air. What is wrong with that?",
              options: [
                "Nothing — off-coil air is the coldest, so it is the safest reading",
                "It records the airstream, which is colder and swings far more than the product; product temperature must be logged among the stock",
                "The airflow will flatten the battery",
                "Loggers cannot be used below 0 °C",
              ],
              answer: 1,
              explain: "Off-coil air is colder than the room and swings with every defrost, so it flatters the record and misrepresents the product. Where the record must prove product condition, put the logger among the stock or use a simulated product block whose thermal mass behaves like the goods.",
            },
            {
              q: "How is a digital capacitive humidity sensor commonly checked in the field?",
              options: [
                "By breathing on it and seeing if it reads 100%",
                "In a sealed container above a saturated salt solution of known humidity, or against a freshly checked psychrometer",
                "By comparing it with a dry-bulb thermometer",
                "It cannot be checked and must be replaced annually",
              ],
              answer: 1,
              explain: "Saturated salt solutions hold a stable, known relative humidity in a sealed jar — sodium chloride around 75%, magnesium chloride around 33%. That gives a repeatable check point for a sensor that drifts with age and can be poisoned by solvents. A psychrometer comparison is the other practical check.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "electrical-test-instruments",
          title: "Electrical test instruments",
          minutes: 13,
          simple: "Most air-conditioners that will not start have an electrical problem, so a technician spends a lot of time with meters. A multimeter tells you voltage and resistance, a clamp meter reads current without breaking the circuit, an insulation tester finds windings leaking to earth, and a rotation tester stops you destroying a scroll compressor by running it backwards.",
          refs: REFS,
          content: `
Electrical meters get their own detailed treatment in the electrical chapters
of this course, but no instrument module is complete without them, because on
most callouts they come out of the bag before the gauges do.

>! Electrical work in Australia is licensed work. An ARCtick refrigerant
>! handling licence does not authorise you to work on fixed wiring, and the
>! boundary of what a restricted electrical licence permits varies by state.
>! Test only within your authorisation, work to AS/NZS 4836, isolate and lock
>! out wherever the task allows it, and treat every circuit as live until you
>! have proved it dead.

## The digital multimeter

The DMM is the general-purpose instrument: AC and DC volts, current, resistance,
continuity, capacitance in microfarads, diode test, and on service models
frequency and a socket for a type K thermocouple probe.

Two specifications matter more than the feature list.

**True RMS.** Cheaper meters assume a clean sine wave and calculate the RMS
value from the average. Downstream of a variable speed drive, an electronic
soft starter, or an inverter-driven compressor, the waveform is nothing like a
sine, and an averaging meter can read badly wrong. Any meter used on modern
plant should say **true RMS** on the face.

**Accuracy and counts.** A meter is quoted as, for example, ±(0.5% of reading
+ 2 digits) on a 6000-count display.

**Worked example.** Reading 240.0 V on the 600.0 V range:

- 0.5% of 240.0 = **1.2 V**
- Two digits at 0.1 V resolution = **0.2 V**
- Total uncertainty = **±1.4 V**, so the true voltage is between about 238.6
  and 241.4 V.

Good enough to decide about supply voltage; not good enough to argue about
0.5 V with a utility.

Other habits worth having:

- A high-impedance DMM picks up **ghost voltages** from capacitive coupling in
  long parallel runs. A reading of 60 V on a disconnected conductor is usually
  not a real supply — confirm with a low-impedance (LoZ) setting or a
  solenoid-type tester before deciding.
- Measure **voltage drop across a component**, not just presence of supply.
  Zero volts across a closed contact is normal; full supply across it means it
  is open.
- Use **fused leads**, shrouded probes, and check the leads for damage every
  time.

### CAT ratings

| Category | Where it applies | Typical RAC example |
|---|---|---|
| CAT II | Appliance and socket-outlet level circuits | Plug-in room air-conditioner cord |
| CAT III | Fixed installation, distribution boards, three-phase equipment | Rooftop package unit isolator and control panel |
| CAT IV | Origin of installation, service entrance, outdoor supply | Main switchboard, incoming supply |

The category describes the transient energy the meter can survive without the
arc coming out at your hand. A CAT II meter on a CAT III switchboard is a
serious hazard, and the rating on the *leads* has to match the meter.

## The clamp meter

A clamp meter reads current without breaking the circuit. The jaws form a
current transformer around the conductor; for DC, a Hall-effect sensor does the
same job.

- Clamp **one conductor only**. Around a two-core flex the two currents cancel
  and you read close to zero.
- Use the **inrush** function to capture starting current and locked rotor
  amps, and **min/max** to catch a current spike while you watch something else.
- For very small currents, run the conductor through the jaws several times and
  divide.

**Worked example.** A conductor is passed ten times through the jaws and the
meter reads 4.2 A. Actual current = 4.2 ÷ 10 = **0.42 A**.

Compare measured running current with the nameplate full-load amps. High
current with normal voltage says mechanical load or a failing motor; low current
often says the machine is not doing the work it should — low charge, closed
metering device, or a belt that is not driving anything.

**Worked example — voltage imbalance.** A three-phase supply measures 405 V,
398 V and 415 V.

- Average = (405 + 398 + 415) ÷ 3 = **406 V**
- Greatest deviation from average = 415 − 406 = **9 V**
- Imbalance = 9 ÷ 406 × 100 = **2.2%**

Above the usual 2% limit. It matters because current imbalance in a motor runs
several times the voltage imbalance, so a couple of percent on the volts can
mean 15% or more on one winding's current and a motor that cooks itself.

## The insulation resistance tester

Also called a megohmmeter or "megger". It applies a high DC test voltage —
normally **500 V** for 230/400 V equipment — between a conductor and earth and
measures the leakage in megohms. It is how you find a motor winding whose
insulation has been degraded by moisture, heat or a burnout.

- A working rule of thumb is a minimum of **1 MΩ per kV of rating plus 1 MΩ**,
  so a 400 V motor should exceed about 1 MΩ. Healthy new windings usually read
  hundreds of megohms.
- Values fall as insulation absorbs moisture and as temperature rises, so
  compare like with like and **trend the readings** service to service. A motor
  dropping from 200 MΩ to 20 MΩ over two years is telling you something even
  though it still passes.
- **Disconnect electronics first.** Variable speed drives, control boards,
  soft starters, electronic expansion valve drivers and surge protection can be
  destroyed by 500 V DC. Isolate the section under test.
- The instrument leaves the winding **charged**. Discharge it before touching
  the terminals; better instruments do this automatically.
- Never apply it to a live circuit.

## The phase rotation tester

Three-phase motors run whichever way the rotating field turns. Get it wrong on
a fan and airflow drops away or reverses. Get it wrong on a **scroll or screw
compressor** and it can be wrecked in minutes — a scroll running backwards does
not pump, gets noisy, loses oil flow and overheats.

A rotation tester connects to the three phases (contact types) or straps to the
cables (non-contact types) and lights up L1-L2-L3 or the reverse. Use it:

- Whenever new plant is connected.
- After **any** switchboard, isolator, supply or contactor work — a utility
  crew swapping phases upstream is a genuine cause of a compressor failure.
- Before the first start of any three-phase compressor.

Companion protection is a **phase failure and phase sequence relay** in the
control circuit, which will not let the contactor pull in on reversed rotation,
lost phase, or excessive imbalance.

## Other instruments in the electrical bag

- **Capacitance meter** — check run and start capacitors against the marked
  microfarads. Run capacitors are usually made to about ±6%; a reading well
  below the marking explains a hard-starting single-phase motor. Discharge the
  capacitor through a resistor first.
- **Earth continuity tester and RCD tester** — verification instruments per
  AS/NZS 3017, used where the licence permits.
- **Proving unit** — a known live source used for the test-prove-test sequence:
  prove the tester on a known source, test the circuit, prove the tester again.
  Without the last step a meter that failed mid-test can convince you a live
  circuit is dead.

## On the job

- True RMS or you cannot trust a reading anywhere near a drive.
- One conductor in the clamp jaws; use inrush for locked rotor current.
- 500 V insulation test, electronics disconnected, winding discharged after.
- Check phase rotation before every three-phase compressor start.
- Compare measured current with nameplate FLA and voltage imbalance with the 2%
  rule before you condemn a motor.
`,
          quiz: [
            {
              q: "Why should a meter used on inverter-driven air-conditioning equipment be a true RMS type?",
              options: [
                "True RMS meters have higher voltage ratings",
                "The drive output is not a sine wave, and an averaging meter calculates RMS assuming one, so it reads incorrectly",
                "True RMS meters measure DC more accurately",
                "It is required for insulation testing",
              ],
              answer: 1,
              explain: "An averaging meter measures the average and scales it by a constant that is only valid for a pure sine wave. Chopped inverter output breaks that assumption, so the reading can be well out. A true RMS meter computes the heating-equivalent value regardless of waveform.",
            },
            {
              q: "A clamp meter placed around the two-core flex of a running fan reads almost zero amps. Why?",
              options: [
                "The fan is drawing no current",
                "Active and neutral currents flow in opposite directions and their magnetic fields cancel",
                "The clamp needs to be on the DC range",
                "The jaws are not closed properly",
              ],
              answer: 1,
              explain: "A clamp meter senses the magnetic field around a conductor. With both conductors inside the jaws, equal and opposite currents produce fields that cancel. Clamp one conductor only. The same effect is used deliberately in an RCD, which trips when the two currents stop matching.",
            },
            {
              q: "A three-phase supply reads 405 V, 398 V and 415 V. Is the imbalance acceptable?",
              options: [
                "Yes — 17 V spread is trivial on 400 V",
                "No — the imbalance is about 2.2%, above the usual 2% limit, and motor current imbalance will be several times worse",
                "Yes, provided each phase is above 380 V",
                "It cannot be assessed without measuring current",
              ],
              answer: 1,
              explain: "Average 406 V, worst deviation 9 V, so 9/406 = 2.2%. Motors amplify voltage imbalance into much larger current imbalance, overheating one winding. Report it rather than replacing a motor that will simply fail again.",
            },
            {
              q: "Before insulation-resistance testing a hermetic compressor on a system fitted with a variable speed drive, what must you do?",
              options: [
                "Nothing — the drive is protected internally",
                "Disconnect or isolate the drive and any electronic boards, because 500 V DC will destroy them",
                "Set the tester to 1000 V for a more reliable result",
                "Run the compressor first to warm the windings",
              ],
              answer: 1,
              explain: "The tester deliberately impresses a high DC voltage on the circuit. Semiconductors, control boards, EEV drivers and surge devices are not built for it. Isolate the section under test, apply 500 V for 230/400 V equipment, and discharge the winding afterwards.",
            },
            {
              q: "Why is a phase rotation check essential before first-starting a three-phase scroll compressor?",
              options: [
                "Reverse rotation only affects the fan motors",
                "A scroll running backwards does not pump, quickly overheats and loses oil flow, and can be destroyed within minutes",
                "It is only needed for star-delta starting",
                "Reverse rotation raises the discharge pressure and trips the high-pressure switch harmlessly",
              ],
              answer: 1,
              explain: "Reversed, the scroll set orbits the wrong way, generates no useful compression, runs noisy and hot with no refrigerant flow to cool the motor or move oil. The damage is fast. Check rotation on commissioning and after any upstream switchboard or supply work, and fit a phase sequence relay for permanent protection.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "leak-flow-and-sound-instruments",
          title: "Leak detectors, acid tests, flow meters and sound level meters",
          minutes: 13,
          simple: "The last group of instruments answers three different questions: is refrigerant escaping, how much liquid is moving through a pipe, and is this machine going to keep the neighbours awake. Leak detectors sniff the air for refrigerant, flow meters count litres per second, and sound meters put a number on noise so a complaint can be argued with facts.",
          refs: REFS,
          content: `
Three loose ends, each with its own instrument, and all three come up on real
service calls. Refrigerant that leaks out is money, environmental damage and a
regulatory problem. Water or brine flow is how a chilled water plant's capacity
is proven. And noise is the complaint that costs an installer the most money
after the job is finished.

## Leak detection

| Method | Sensitivity | Where it earns its place | Limitations |
|---|---|---|---|
| Soap solution or leak spray | Moderate, but positive | Pinpointing a joint you already suspect, under pressure | Needs positive pressure and access; misses very small leaks |
| Halide torch | Moderate | Historic method for chlorine-bearing refrigerants | Useless on HFCs; open flame; toxic decomposition products |
| Electronic detector | Down to around 15 g per year, better with modern infrared cells | Searching a whole system quickly | False alarms from solvents and oils; drafts; needs a clean probe tip |
| Ultraviolet dye | Depends on leak rate and access | Slow, intermittent leaks that are never leaking when you visit | Needs a UV lamp and line of sight; must be compatible with the oil |
| Ultrasonic detector | Moderate | Noisy plantrooms where a sniffer is swamped, large pressure leaks | Detects the sound of escaping gas, not the gas itself |
| Standing pressure test with dry nitrogen | Very good over time | Proving a new or repaired system before charging | Must be temperature-compensated or ambient swings look like leaks |

### The halide torch

Alcohol, propane or acetylene burns with an almost colourless flame. Put a
copper reaction plate in that flame and it stays colourless — until a halogen
refrigerant reaches it. A rubber search hose draws air into the burner from
wherever you hold the open end, and the smallest trace of a chlorine-bearing
refrigerant turns the flame bright green.

It is a piece of history worth understanding but not a tool for today's work.
The refrigerants it detects (R12, R22, R502 and their relatives) have been
phased out, HFCs such as R134a and R410A do not respond usefully, and burning
refrigerant produces hydrogen fluoride and other decomposition products.

>! Never use an open flame to search for refrigerant leaks. Halocarbon
>! refrigerants passing through a flame or over a hot surface break down into
>! highly toxic and corrosive products. There is also no place for a naked
>! flame around a plantroom that may contain flammable refrigerant or oil
>! vapour.

### The electronic leak detector

This is the sensitive instrument — capable of finding leaks as small as about
15 grams per year. The probe draws an air sample over a sensing element whose
electrical behaviour changes in the presence of refrigerant, and the instrument
responds with a rising tone, a flashing light, or both.

Using it properly:

1. Switch on and let it zero itself **in clean air**, away from the plant.
2. Move the probe slowly — around 25 to 50 mm per second. Sweeping it about
   like a wand finds nothing.
3. Search **underneath** joints. Common refrigerants are heavier than air and
   sink.
4. Shield the area from wind and fan draughts, or shut fans off briefly.
5. Confirm every hit with bubbles before you cut anything open.
6. Keep the probe tip clean and unblocked, and keep it out of oil.

False alarms come from solvents, cleaning products, some adhesives and even
windscreen washer fluid. A calibrated reference leak is the way to prove the
instrument is still sensitive.

Under the Refrigerant Handling Code of Practice a leak must be found and
repaired before the system is recharged, and the work recorded. Pressure
testing is done with **oxygen-free nitrogen** through a regulator, never with
oxygen (violently reactive with oil) and never with compressed air (moisture,
and a flammable mixture with some refrigerants).

## Acid test kits

Acid in the oil means contamination — usually a motor burnout, or moisture
reacting with refrigerant and oil. Because moisture usually got in through a
leak, acid testing sits naturally alongside leak checking. Field kits from any
wholesaler let you test halocarbon systems without any chemistry background.

The general method, using a typical two-bottle kit:

1. Draw an oil sample from the compressor.
2. Fill a mixing bottle with the indicator solution supplied.
3. Add the neutraliser solution one drop at a time until the contents go
   **permanently red**.
4. Transfer that red liquid to the second mixing bottle, filling it to the mark.
5. Charge the measuring vial to its own mark with the oil sample, then tip the
   vial contents into the second bottle.
6. **If the mixture stays red or darkens, the oil is acceptable.** A colour
   change away from red indicates acid, and the system needs a clean-up:
   change the oil, fit suction-line and liquid-line clean-up cores, run and
   re-test.

Different kits use different concentrations and colour conventions, so read the
instructions with the kit rather than relying on memory. Wear gloves and eye
protection — these are laboratory chemicals.

## Flow meters

Where a system moves water, brine or glycol, measuring the flow turns
temperatures into kilowatts.

| Meter type | How it works | Typical use |
|---|---|---|
| Variable area (rotameter) | A float rides in a tapered tube; height indicates flow | Small chilled water circuits, cooling water to a condenser |
| Turbine or paddle | Flow spins a rotor; pulses are counted | Packaged chillers, plant monitoring |
| Electromagnetic | A conductive liquid moving through a magnetic field generates a voltage | Permanent BMS metering, no moving parts |
| Clamp-on ultrasonic | Sound pulses sent with and against the flow; the timing difference gives velocity | Portable service and commissioning — no need to cut the pipe |
| Orifice plate or venturi with a differential gauge | A known restriction creates a pressure drop related to flow | Fixed plant, and balancing valves with pressure test points |

**Worked example — proving capacity from flow and temperature.** A chilled
water coil circuit carries 2.5 L/s of water, entering at 12 °C and leaving at
7 °C.

- Water flow of 1 L/s is very nearly 1 kg/s, so mass flow = **2.5 kg/s**.
- Temperature difference = 12 − 7 = **5 K**.
- Specific heat capacity of water = **4.19 kJ/kg·K**.
- Capacity = 2.5 × 4.19 × 5 = **52.4 kW**.

Compare that with the selection duty on the schedule. If the coil should be
doing 70 kW, either the flow is short, the water is too warm, or the coil is
fouled — and the flow reading tells you which conversation to have.

## Sound level meters

Sound is a train of pressure waves travelling through air. Two different
quantities get confused:

- **Sound power** is the total acoustic output of a machine — a property of the
  machine itself, independent of where you stand.
- **Sound pressure level (SPL)** is the strength of the sound at a particular
  point, after it has travelled a distance. It is what a meter reads and what a
  neighbour experiences.

Both are quoted in **decibels (dB)**, a logarithmic scale. Frequency is
measured in **hertz (Hz)**, and better meters break the sound into octave bands,
which is how you tell a fan blade-pass whine from compressor rumble.

Because human hearing is far less sensitive at low frequencies, readings are
usually A-weighted and quoted as **dB(A)** — that is the unit in council and
EPA noise conditions.

| Roughly | Sound pressure level |
|---|---|
| Threshold of hearing | 0 dB |
| Quiet outback night | 10 to 20 dB |
| Bedroom at night | 30 dB |
| Library | 40 dB |
| Normal conversation | 60 dB |
| Passing car | 70 dB |
| Passing truck | 80 dB |
| Jackhammer | 100 dB |
| Rock concert, front row | 110 dB |
| Jet engine, close up | 140 dB — threshold of pain |

Taking a reading:

- Point the microphone at the source, hold the instrument away from your body,
  and fit the windshield outdoors.
- **Calibrate before and after** with an acoustic calibrator (typically 94 dB at
  1 kHz). A survey that fails the closing calibration is not evidence.
- Measure the **background level** with the plant off. If background is within
  10 dB of the running level, the plant is not what you are measuring and the
  result needs correction.
- Measure at the position that matters — usually the affected boundary or
  window, not next to the machine.

**Worked example — how far away does it need to be?** A condensing unit is
measured at 62 dB(A) one metre away. In free space, sound pressure falls about
6 dB for every doubling of distance.

- At 2 m: 62 − 6 = **56 dB(A)**
- At 4 m: 56 − 6 = **50 dB(A)**
- At 8 m: 50 − 6 = **44 dB(A)**

If the night-time limit at the neighbour's boundary is 45 dB(A), the unit needs
roughly 8 m of separation — or an acoustic barrier, or night-mode fan speed
control. Reflections off walls and hard ground make the real result worse than
the free-space calculation, so leave margin.

Interpreting sound measurements properly is specialist work, and serious
disputes go to an acoustic consultant. But knowing where the plant will sit
relative to bedrooms *before* it is craned into place has saved more jobs than
any silencer ever fitted afterwards — especially for equipment that runs all
night.

>! Sustained exposure above 85 dB(A) damages hearing. Plantrooms, condensing
>! unit decks and roof-mounted chillers routinely exceed it. Wear hearing
>! protection and treat it as seriously as eye protection.

## On the job

- Zero an electronic detector in clean air, move slowly, search under joints,
  and confirm with bubbles.
- No open flames for leak testing; nitrogen only for pressure tests, never
  oxygen or compressed air.
- Acid in the oil means contamination — change oil, fit clean-up cores, retest.
- Flow plus temperature difference equals kilowatts: Q = mass flow × 4.19 × ΔT.
- Calibrate a sound meter before and after, measure background, and record the
  position.
- Sound falls about 6 dB per doubling of distance — siting is the cheapest
  noise control there is.
`,
          quiz: [
            {
              q: "Why is the halide torch obsolete for modern service work?",
              options: [
                "It is too sensitive and gives false alarms",
                "It responds to chlorine-bearing refrigerants which are phased out, it does not usefully detect HFCs, and burning refrigerant produces toxic decomposition products",
                "It cannot be used outdoors",
                "It requires an electrical supply",
              ],
              answer: 1,
              explain: "The green flame reaction depends on chlorinated refrigerants like R12, R22 and R502. Today's HFCs do not respond usefully, and passing any halocarbon through a flame creates hydrogen fluoride and related products. An open flame around a plantroom is a hazard in its own right.",
            },
            {
              q: "You are sweeping an electronic leak detector around a suspect joint. What technique gives the best chance of finding the leak?",
              options: [
                "Move the probe quickly over a wide area to cover the whole system fast",
                "Move slowly, around 25 to 50 mm per second, passing underneath joints, with fans and draughts stopped",
                "Hold the probe 300 mm away so it does not become contaminated",
                "Hold the probe above each joint, since refrigerant vapour rises",
              ],
              answer: 1,
              explain: "The instrument needs time to draw a sample and respond, so slow movement is essential. Common refrigerants are heavier than air and sink, so search below joints. Draughts disperse the plume, which is why fans are stopped, and every indication is confirmed with bubbles before cutting into anything.",
            },
            {
              q: "In a typical field acid test kit, which result indicates the oil is acceptable?",
              options: [
                "The mixture turns clear",
                "The mixture stays red or darkens after the oil sample is added",
                "The mixture turns yellow",
                "The mixture separates into two layers",
              ],
              answer: 1,
              explain: "The neutraliser is added until the indicator turns permanently red; adding the oil sample then tests whether acid in the oil can shift that colour. Staying red, or darkening, means no significant acid. Colour loss means contamination, and the system needs an oil change, clean-up cores and a retest. Always follow the specific kit's instructions since concentrations and colours vary.",
            },
            {
              q: "A chilled water coil carries 3.0 L/s with water entering at 12 °C and leaving at 6 °C. What is its duty?",
              options: [
                "18 kW",
                "75.4 kW",
                "12.6 kW",
                "6.0 kW",
              ],
              answer: 1,
              explain: "Q = mass flow × specific heat × temperature difference = 3.0 kg/s × 4.19 kJ/kg·K × 6 K = 75.4 kW. One litre per second of water is very close to one kilogram per second, which makes this arithmetic quick in the field once you have a flow reading.",
            },
            {
              q: "A condensing unit measures 65 dB(A) at 1 m. Approximately what would you expect at 4 m in free space?",
              options: [
                "About 61 dB(A)",
                "About 53 dB(A)",
                "About 16 dB(A)",
                "About 65 dB(A) — sound does not reduce with distance",
              ],
              answer: 1,
              explain: "Sound pressure falls about 6 dB for each doubling of distance in free space: 1 m to 2 m loses 6 dB, 2 m to 4 m another 6 dB, giving 53 dB(A). Real sites do worse because walls and hard ground reflect sound, so leave margin against the boundary limit.",
            },
            {
              q: "Why is the background sound level measured with the plant switched off before a noise survey?",
              options: [
                "To warm up the instrument",
                "Because if background is within about 10 dB of the running level, the meter is largely measuring other sources and the result needs correction",
                "Because sound meters only work in quiet conditions",
                "To check the batteries",
              ],
              answer: 1,
              explain: "Decibels add logarithmically. When the background is close to the total level, most of what the meter reads comes from traffic, wind or other plant, not the machine in question. Establishing background, calibrating before and after, and recording the exact measuring position are what make a noise measurement defensible.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
