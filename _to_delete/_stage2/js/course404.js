/* =========================================================================
   Course content, capstone module C.4 — Calculations under exam conditions.
   Source: capstone knowledge-assessment topic brief (topics only), the
   Australia and New Zealand Refrigerant Handling Code of Practice, AS/NZS
   3000, manufacturers' installation data and standard refrigerant
   pressure-temperature data.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Every
   worked example, practice question, scenario and number in this module is
   original to this course and was checked arithmetically before publication.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigeration calculations, heat load, psychrometrics and system performance",
    "Australia and New Zealand Refrigerant Handling Code of Practice (COP), Part 2 — refrigerant mass, charging records, recovery cylinders and cylinder filling",
    "AS/NZS 3000 (the Wiring Rules) — circuit protection, conductor current-carrying capacity and verification of electrical work",
    "AS 2030 series — gas cylinders: cylinder markings, tare mass, water capacity and filling ratios",
    "AS/NZS 60038 — standard voltages: 230 V single phase and 400 V three phase nominal, and the tolerance band around them",
    "Refrigerant pressure-temperature (saturation) data for R134a, R404A, R410A and R22, as published on manufacturers' PT charts and in the course PT tool",
    "Manufacturers' installation and commissioning manuals — base pipe length, additional charge rate in grams per metre, and maximum permitted equivalent length",
  ];

  const MODULES = [
    {
      id: "cap-calculations",
      stream: "capstone",
      title: "C.4 · Calculations under exam conditions",
      blurb: "The eight calculations a written assessment actually asks for, each taught as a repeatable method, worked twice with different numbers, then practised — with the sanity checks that catch a slipped decimal point.",
      lessons: [

        /* ================================================================ */
        {
          id: "ohms-law-and-power",
          title: "Ohm's law and power for resistive loads",
          minutes: 13,
          simple: "A heater is the simplest electrical load there is: push voltage across a resistance and current flows, and that current turns into heat. If you know any two of voltage, current and resistance you can find the other two and the wattage. Think of it like water in a hose — voltage is the pressure, resistance is how narrow the hose is, and current is how much actually flows.",
          refs: REFS,
          content: `
Defrost heaters, crankcase heaters, drain-line traces and door-frame heaters are
purely resistive loads. No motor, no power factor, no starting current worth
worrying about. That makes them the easiest electrical calculation in the trade,
which is exactly why an assessment uses them: there is nowhere to hide. You are
being marked on whether you can pick the right form of the equation, substitute
correctly, and carry the units through.

A resistive load also gives you a genuine field tool. Measure the resistance of a
defrost element with the circuit isolated, compare it with what the nameplate
wattage says it should be, and you know within a minute whether the element is
open, partly failed, or fine.

## The four quantities and the four forms

| Symbol | Quantity | Unit | What it is |
|---|---|---|---|
| V | Voltage | volt (V) | The electrical pressure across the load |
| I | Current | ampere (A) | The rate of flow of charge through it |
| R | Resistance | ohm | How hard the load makes it for current to flow |
| P | Power | watt (W) | The rate at which the load turns electricity into heat |

Ohm's law links the first three:

**V = I x R**, so **I = V / R** and **R = V / I**

Power links all four. All four forms below are the same statement, rearranged.
You use whichever one matches the two quantities you were actually given:

| You are given | Use | Typical question |
|---|---|---|
| Voltage and current | P = V x I | Clamp meter reading on a running heater |
| Voltage and resistance | P = V squared / R | Measured element on a known supply |
| Current and resistance | P = I squared x R | Working out heat in a cable or a shunt |
| Power and voltage | I = P / V | Sizing a circuit for a nameplate heater |

The one to have on the tip of your tongue for defrost work is
**P = V squared / R**, because resistance is the thing you can actually measure
with the machine isolated and voltage is the thing you already know.

## The method

1. Write down what you were given, with units. Cross out anything that is not V, I, R or P.
2. Decide which quantity is asked for.
3. Choose the form of the equation that uses only what you have.
4. Substitute the numbers, showing the substitution on the page.
5. Give the answer with its unit, and convert to kW if it is over a thousand watts.
6. Cross-check with a second form of the equation. This costs ten seconds and catches most errors.

Nominal single-phase supply in Australia is **230 V** (AS/NZS 60038). Use 230 V
unless the question states something else.

## Worked example 1 — a coolroom defrost element

*A defrost element in a freezer-room evaporator is supplied at 230 V. With the
circuit isolated, it measures 19.2 ohms. Find the current it will draw and its
power.*

Current, from Ohm's law:

I = V / R = 230 V / 19.2 ohms = **11.98 A**, call it **12.0 A**

Power, from voltage and current:

P = V x I = 230 V x 11.98 A = **2755 W = 2.76 kW**

Cross-check with the resistance form:

P = V squared / R = (230 x 230) / 19.2 = 52 900 / 19.2 = **2755 W**. Agrees.

So the element is a nominal 2.75 kW heater drawing about 12 A. On a 16 A circuit
that is comfortable; on a 10 A circuit it is not.

## Worked example 2 — a crankcase heater

*A compressor crankcase heater on a 230 V supply measures 950 ohms. What does it
draw, and what is its wattage?*

I = V / R = 230 / 950 = **0.242 A** (242 mA)

P = V x I = 230 x 0.242 = **55.7 W**

Cross-check: P = V squared / R = 52 900 / 950 = **55.7 W**. Agrees.

That is the right order of magnitude for a crankcase heater — they are tens of
watts, not kilowatts, because their job is to keep oil a few kelvin above the
rest of the machine so refrigerant will not migrate into it, not to boil it. If
your arithmetic had produced 5.6 kW you would know instantly that something was
wrong.

## Worked example 3 — an element bank in parallel

*Three identical defrost elements, each 57.5 ohms, are wired in parallel across
230 V. Find the current in each element, the total current, the combined
resistance and the total power.*

Each element sees the full 230 V, because that is what parallel means:

I (each) = 230 / 57.5 = **4.0 A**
P (each) = 230 x 4.0 = **920 W**

Total current is the sum of the branch currents:

I (total) = 3 x 4.0 = **12.0 A**

Combined resistance of equal resistors in parallel is one resistance divided by
how many there are:

R (total) = 57.5 / 3 = **19.17 ohms**

Total power, two ways:

P = 3 x 920 = **2760 W = 2.76 kW**
P = V squared / R = 52 900 / 19.17 = **2760 W**. Agrees.

Notice that adding elements in parallel *lowers* the total resistance and
*raises* the current. Students often expect the opposite. If you find one element
of a three-element bank open circuit, the bank still works — at two thirds of its
output, drawing two thirds of the current — which is why a defrost that "sort of
works" and takes forever is worth an element-by-element resistance check.

## The length distractor

Assessment questions describe the equipment realistically, and realistic
descriptions include facts you do not need. A question that says *"a 3.6 m
defrost element rated for 230 V measures 19.2 ohms"* has given you the length
purely to see whether you know it is irrelevant. The resistance of that element
already accounts for its length, its wire gauge and its alloy. Once you have the
resistance, the length adds nothing.

The one time length matters is when the question gives you a **rate** instead of
a resistance — watts per metre or ohms per metre. Then length is essential:

- Given 45 W/m and 8 m of drain-line trace heater: P = 45 x 8 = **360 W**, and I = P / V = 360 / 230 = **1.57 A**.
- Given 2.4 ohms/m and 8 m: R = 2.4 x 8 = **19.2 ohms**, then carry on as normal.

The test is simple: **does the number you were given carry a "per metre" in its
unit?** If it does, you need the length. If it does not, you do not.

>! Measure resistance only on a circuit you have isolated, locked, tagged and
>! proven de-energised. An ohmmeter connected across a live 230 V heater will
>! destroy the instrument and can injure you, and a reading taken with the supply
>! present is meaningless anyway. Element heaters also fail to their sheath, so
>! follow the resistance check with an insulation resistance test to earth at
>! 500 V d.c. before you re-energise.

## Reading the answer back

A defrost element that measures **open circuit** has a broken element and no
current will flow. One measuring far *lower* than expected has shorted turns and
will draw more current than the circuit is protected for. Compare against what
the nameplate implies: for a nameplate 2.75 kW element at 230 V, the expected
resistance is R = V squared / P = 52 900 / 2750 = **19.2 ohms**. A reading of
19 to 20 ohms is healthy; 38 ohms says half the element is gone; 2 ohms says
stop and investigate before energising anything.

## What to remember

- V = I x R, and the four power forms are the same equation rearranged.
- Pick the form that uses only the two quantities you were actually given.
- Cross-check every answer with a second form — ten seconds, most errors caught.
- Elements in parallel: same voltage, currents add, total resistance falls.
- A stated length is a distractor unless the other figure is "per metre".
- Expected resistance from a nameplate is R = V squared / P; use it to judge a measured element.

### Practice — work it through before opening the model answer

A door-frame heater on a freezer-room door is supplied at 230 V and measures
28.75 ohms with the circuit isolated. Find the current and the power, and state
the smallest standard circuit breaker rating you would expect to see protecting
it. Show your workings.

>? **Current**
>?
>? I = V / R = 230 V / 28.75 ohms = **8.0 A**
>?
>? **Power**
>?
>? P = V x I = 230 V x 8.0 A = **1840 W = 1.84 kW**
>?
>? Cross-check with the other form: P = V squared / R = 52 900 / 28.75 =
>? **1840 W**. The two forms agree, so the arithmetic holds.
>?
>? **Circuit protection**
>?
>? The load is 8.0 A continuous. A 10 A device is the smallest standard rating
>? above the load current, and it is what you would expect to find, provided the
>? cable feeding it has a current-carrying capacity of at least 10 A after
>? derating for how it is installed. The protective device has to protect the
>? *cable*, so quoting a breaker rating without checking the conductor is only
>? half an answer.

### Practice

A technician clamps 6.5 A on a single defrost heater running at 230 V. Calculate
the heater's resistance and its power output, and verify your power answer using
a different form of the power equation.

>? **Resistance**
>?
>? R = V / I = 230 V / 6.5 A = **35.4 ohms** (35.38 ohms before rounding)
>?
>? **Power, from voltage and current**
>?
>? P = V x I = 230 V x 6.5 A = **1495 W = 1.50 kW**
>?
>? **Verification, from current and resistance**
>?
>? P = I squared x R = 6.5 x 6.5 x 35.38 = 42.25 x 35.38 = **1495 W**. Agrees.
>?
>? A third check if you want it: P = V squared / R = 52 900 / 35.38 = 1495 W.
>? All three forms return the same figure, which is what "showing your workings"
>? is meant to demonstrate — not that you can operate a calculator, but that you
>? understand the relationship well enough to come at it from two directions.

### Practice

Two 1.2 kW defrost elements are connected in parallel across a 230 V supply.
Calculate the current drawn by each element, the total current, the resistance of
one element, the combined resistance of the pair, and the total power. Then state
whether a 16 A circuit is adequate.

>? **Current in each element**
>?
>? I = P / V = 1200 W / 230 V = **5.22 A**
>?
>? **Total current** (parallel branches add)
>?
>? I (total) = 2 x 5.22 = **10.43 A**
>?
>? **Resistance of one element**
>?
>? R = V squared / P = 52 900 / 1200 = **44.08 ohms**
>? (or R = V / I = 230 / 5.22 = 44.1 ohms — same answer)
>?
>? **Combined resistance of two equal resistors in parallel**
>?
>? R (total) = 44.08 / 2 = **22.04 ohms**
>?
>? **Total power**
>?
>? P = 2 x 1200 = **2400 W = 2.4 kW**
>? Check: P = V squared / R (total) = 52 900 / 22.04 = **2400 W**. Agrees.
>? Check again: P = V x I (total) = 230 x 10.43 = **2400 W**. Agrees.
>?
>? **Is 16 A adequate?**
>?
>? Yes for the load itself: 10.43 A sits comfortably under 16 A. But state the
>? condition — the answer holds only if this circuit supplies the heaters alone.
>? If the same circuit also carries the evaporator fans and the drain trace, add
>? those currents before you judge it. And as always the cable must be rated for
>? the protective device, not merely for the load.
`,
          quiz: [
            {
              q: "A defrost element on a 230 V supply measures 34.5 ohms cold. Which single calculation gets you the power in one step?",
              options: [
                "P = I squared x R, using the nameplate current",
                "P = V squared / R = 52 900 / 34.5",
                "P = V x R = 230 x 34.5",
                "P = V / R squared",
              ],
              answer: 1,
              explain: "You were given voltage and resistance, so the form that uses only those two is P = V squared / R, giving 1533 W. P = I squared x R would work but needs you to find the current first, so it is not one step. P = V x R is not a form of the power equation at all — multiplying volts by ohms gives a meaningless number, and that is a common way to lose a mark.",
            },
            {
              q: "An exam question states: 'A 4.2 m defrost heater rated 230 V measures 23 ohms.' What is the length for?",
              options: [
                "It is needed to find the power, which is watts per metre times length",
                "It is a distractor — resistance already accounts for the element's length",
                "It is used to derate the current for the ambient temperature",
                "It tells you the number of elements in the bank",
              ],
              answer: 1,
              explain: "Once resistance is given, the length has already been baked into it. The length would only be needed if the question gave a rate — watts per metre or ohms per metre. The test is whether the figure supplied carries a 'per metre' in its unit; here it does not.",
            },
            {
              q: "Three identical defrost elements are wired in parallel. Compared with one element on its own, the bank has:",
              options: [
                "Three times the resistance and one third the current",
                "One third the resistance and three times the current",
                "The same resistance and three times the current",
                "Three times the resistance and three times the current",
              ],
              answer: 1,
              explain: "Each parallel branch sees the full supply voltage and draws its own current, so the currents add — three times the current. Since the same voltage is now pushing three times the current, the combined resistance must be one third. Expecting resistance to add is the classic error; that happens in series, not parallel.",
            },
            {
              q: "A defrost element with a 1.15 kW nameplate at 230 V should measure about 46 ohms. Twelve months on, the same element measures 92 ohms. The most likely conclusion is:",
              options: [
                "The element is fine; resistance rises normally with age",
                "Roughly half the element has failed open, so it will produce about half its rated heat and defrosts will run long or terminate on time",
                "The element is shorted and will draw excess current",
                "The supply voltage has dropped",
              ],
              answer: 1,
              explain: "Expected resistance from the nameplate is R = V squared / P = 52 900 / 1150 = 46 ohms, so 92 ohms is double what it should be. At a fixed 230 V, doubling resistance halves the current (2.5 A instead of 5 A) and halves the power (575 W instead of 1150 W). Less heat means the coil does not clear, so defrosts run to their time limit instead of terminating on temperature. A shorted element measures lower, not higher, and supply voltage has no bearing on a resistance measurement taken with the circuit isolated.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "design-suction-pressure",
          title: "Design suction pressure from air-on temperature and TD",
          minutes: 14,
          simple: "Before you can say a system is running badly you need to know what it should be running at. Work out how cold the coil is meant to be — that is the air going into it minus the design temperature difference — then look that temperature up on the refrigerant's pressure chart. That gives you the pressure your gauge should show. Every refrigerant gives a different pressure for the same coil temperature, so the chart has to match the gas in the system.",
          refs: REFS,
          content: `
A gauge reading on its own tells you nothing. 420 kPa is a perfectly healthy
suction pressure on an R404A coolroom and a catastrophically low one on an R410A
split system. What turns a number into a judgement is knowing what the pressure
*should* be, and that comes from the design conditions of the coil, not from
memory or from what the last machine read.

This calculation is the backbone of commissioning and of fault diagnosis, and it
is a favourite in written assessments because it has two distinct steps and a
well-known trap sitting between them.

## The two steps

**Step 1 — find the design saturated suction temperature (SST).**

**SST = air-on temperature − evaporator TD**

The evaporator TD (temperature difference) is the gap the designer chose between
the air entering the coil and the refrigerant boiling inside it. It is the
driving force for heat transfer: a bigger TD moves more heat through the same
coil, but it also drives the coil colder relative to the air, which pulls more
moisture out and dries the room out.

**Step 2 — convert that temperature to a pressure using the saturation data for
the refrigerant actually in the system.**

That means a PT chart, a PT app, the manufacturer's table or the PT tool in this
course. There is no formula you can do in your head; the relationship is a curve
that is different for every refrigerant.

!FIG[gauge-pt-ring]

## Choosing the TD when it is not given

If the question states the TD, use it. If it does not, you are expected to know
the normal range for the application, because TD is chosen by the humidity the
product needs.

| Application | Typical evaporator TD (air-on to SST) | Why |
|---|---|---|
| High-humidity coolroom — unwrapped meat, produce, flowers (90–95% RH) | 4 to 6 K | A small TD keeps the coil close to the air dewpoint so little moisture is stripped out |
| General coolroom, packaged product (around 85% RH) | 6 to 8 K | The usual compromise between coil size and dehumidification |
| Freezer room | 6 to 9 K | Moisture is already low; a moderate TD limits frost build-up |
| Low-humidity store, wrapped or dry goods | 9 to 12 K | Drier air is wanted, and a bigger TD lets a smaller coil do the job |
| Comfort air conditioning, direct expansion | 12 to 16 K | Dehumidification is a *desired* output, so the coil runs well below room dewpoint |

The designer's selection always beats the table. The table is for when the
question expects you to reason rather than recall.

## Gauge or absolute — this is where marks are lost

A refrigeration gauge is calibrated to read **zero at atmospheric pressure**. It
measures the difference between system pressure and the atmosphere around it. So
a gauge reads **gauge pressure**, written kPa(g) or just "kPa gauge".

Saturation tables are often published in **absolute** pressure, kPa(a) — measured
up from a perfect vacuum. Standard atmospheric pressure is **101.3 kPa**, so:

**gauge pressure = absolute pressure − 101.3 kPa**
**absolute pressure = gauge pressure + 101.3 kPa**

In bar, subtract or add **1.013 bar** (near enough to 1 bar for a rough check,
but use 101.3 kPa when you are showing workings).

Three habits keep you out of trouble:

1. Write "(a)" or "(g)" after **every** pressure you put on the page, including intermediate ones.
2. Check what the chart you are using is quoting. Many field PT apps offer both; a printed chart usually says at the top.
3. Sanity-check the size of the correction. About 100 kPa is a big slice of a 250 kPa suction pressure and a trivial slice of a 2500 kPa discharge pressure, so the error hurts most where you can least afford it — on the low side.

## Worked example 1 — R404A meat coolroom

*A coolroom is held at 2 °C with an R404A evaporator selected for a 7 K TD. What
saturated suction temperature is the coil designed for, and what should the
suction gauge read?*

Step 1: SST = air-on − TD = 2 °C − 7 K = **−5 °C**

Step 2: from the R404A PT chart, saturation pressure at −5 °C is **5.20 bar
absolute = 520 kPa(a)**.

Step 3: convert to gauge, because that is what the instrument reads:

520 kPa(a) − 101.3 kPa = **419 kPa(g)**, call it **420 kPa(g)**

So a suction gauge on this machine, with the room at setpoint and the coil clean,
should sit at roughly 420 kPa. If it reads 300 kPa the coil is starved, iced or
short of refrigerant; if it reads 550 kPa the room is not down to temperature yet
or the coil is oversized for the load.

## Worked example 2 — R134a cabinet, same coil temperature

*A self-contained display cabinet using R134a runs with air-on of 4 °C and a 9 K
TD. Find the design SST and the expected suction gauge pressure.*

Step 1: SST = 4 °C − 9 K = **−5 °C**

Step 2: from the R134a PT chart, saturation pressure at −5 °C is **2.437 bar
absolute = 243.7 kPa(a)**.

Step 3: 243.7 kPa(a) − 101.3 = **142 kPa(g)**

The coil temperature is identical to Example 1 — both at −5 °C — but the expected
gauge pressure is 142 kPa instead of 420 kPa. That is a factor of three. It is
the single strongest reason to confirm what refrigerant is in a machine before
you interpret a gauge, and the reason "the suction looks low" is not a diagnosis.

## Worked example 3 — R410A comfort air conditioning

*A ducted split system returns air at 24 °C to an R410A indoor coil selected for
a 14 K TD. What should the suction gauge read at the outdoor unit's service
valve, ignoring line losses?*

Step 1: SST = 24 °C − 14 K = **10 °C**

Step 2: R410A saturation pressure at 10 °C is **10.9 bar absolute = 1090 kPa(a)**.

Step 3: 1090 − 101.3 = **989 kPa(g)**, call it **990 kPa(g)**

## Worked example 4 — R404A freezer room

*Freezer room air-on −18 °C, evaporator TD 7 K.*

SST = −18 − 7 = **−25 °C**. R404A at −25 °C is **2.51 bar(a) = 251 kPa(a)**,
so the gauge should read 251 − 101.3 = **150 kPa(g)**.

Note how small that is. On the low side of a freezer, a 100 kPa mistake in the
gauge-versus-absolute conversion is a *two thirds* error. This is exactly where
candidates lose marks.

## What the trap costs, in kelvin

Take Example 3. The chart gave 1090 kPa absolute for the 10 °C design SST.
Suppose the technician charges the machine until the **gauge** reads 1090 kPa.
The true pressure in the system is then 1090 + 101.3 = **1191 kPa(a) = 11.91
bar(a)**, which on the R410A curve is a saturation temperature of about
**13 °C** — three kelvin warmer than design.

The evaporator TD has quietly fallen from 14 K to about 11 K. Since the heat the
coil moves is roughly proportional to that difference, the machine is now
delivering something like a fifth less capacity than it was selected for, the
space will struggle on a hot afternoon, and the technician's next move — adding
refrigerant to "fix" a machine that is not short of it — makes things worse.

!SIM[Match a gauge pressure to its saturation temperature](r=R410A&view=pt)

>! Do not correct a gauge reading for altitude in an exam unless the question
>! gives you the local atmospheric pressure. In the field it does matter: at
>! about 700 m elevation atmospheric pressure is nearer 93 kPa than 101 kPa, so
>! a gauge calibrated at sea level reads roughly 8 kPa high there. It is a small
>! effect on the high side and a noticeable one on a deep vacuum, which is why
>! evacuation is judged with a micron gauge and not with a compound gauge.

## What to remember

- SST = air-on − TD. That is step one and it is a temperature, not a pressure.
- Step two is a lookup, on the chart for the refrigerant actually in the machine.
- Label every pressure (a) or (g), and convert with 101.3 kPa.
- The same coil temperature gives wildly different pressures on different refrigerants.
- A gauge/absolute slip on the low side can be a two-thirds error; on the high side it hides.
- If the TD is not stated, choose it from the application and say why you chose it.

### Practice — work it out before opening the model answer

A legacy R22 coolroom holds product at 3 °C and its evaporator was selected for
an 8 K TD. Calculate the design saturated suction temperature and the suction
pressure you would expect to see on the gauge. Show every step and label your
pressures.

>? **Step 1 — design saturated suction temperature**
>?
>? SST = air-on − TD = 3 °C − 8 K = **−5 °C**
>?
>? **Step 2 — saturation pressure for R22 at −5 °C**
>?
>? From the R22 PT chart, R22 saturates at −5 °C at **4.22 bar absolute =
>? 422 kPa(a)**.
>?
>? **Step 3 — convert to gauge pressure**
>?
>? 422 kPa(a) − 101.3 kPa = **321 kPa(g)**
>?
>? **Answer:** design SST −5 °C, expected suction gauge pressure about
>? **320 kPa(g)**.
>?
>? Worth noting for comparison: an R404A machine at the same −5 °C coil
>? temperature would show about 420 kPa(g), and an R134a machine about
>? 142 kPa(g). Same coil, three different gauge readings. The refrigerant has to
>? be confirmed before the number means anything.

### Practice

An R134a chilled-water-free dairy cabinet takes air on at 10 °C and its coil is
selected for a 10 K TD. Find the design SST and the expected suction gauge
pressure in kPa. Then state what you would conclude if the gauge actually read
90 kPa(g) with the cabinet at setpoint.

>? **Design SST**
>?
>? SST = 10 °C − 10 K = **0 °C**
>?
>? **Saturation pressure**
>?
>? R134a at 0 °C = **2.928 bar absolute = 292.8 kPa(a)**
>?
>? **Gauge pressure**
>?
>? 292.8 − 101.3 = **191.5 kPa(g)**, call it **192 kPa(g)**
>?
>? **If the gauge read 90 kPa(g) instead**
>?
>? Convert back to find out what the coil is actually doing:
>? 90 + 101.3 = 191.3 kPa(a) = 1.913 bar(a), which on the R134a curve is a
>? saturation temperature of roughly **−11 °C**.
>?
>? The coil is running about 11 K colder than design, so the TD has grown from
>? 10 K to about 21 K. A coil that cold with the cabinet still at setpoint means
>? the evaporator is not absorbing the heat it should. The usual causes are a
>? starved coil — restricted drier or expansion device, undercharge — or an
>? air-side problem: a blocked coil face, an iced coil, a failed evaporator fan.
>? Check the superheat next: a starved coil gives high superheat, whereas a
>? blocked airflow gives low superheat with the same low pressure. That one extra
>? measurement separates the two families of cause.

### Practice

A commissioning sheet for an R410A ducted system specifies a design SST of 5 °C.
An apprentice reads 9.36 bar from a table headed "saturation pressure,
absolute" and charges the system until the low-side gauge reads 936 kPa.
Explain, with numbers, what he has actually set the machine to and what the
consequence is.

>? **What the table gave him**
>?
>? The table value is correct: R410A saturates at 5 °C at about **9.36 bar
>? absolute = 936 kPa(a)**. The correct gauge target is
>? 936 − 101.3 = **835 kPa(g)**.
>?
>? **What he actually set**
>?
>? He put 936 kPa on the **gauge**, so the true system pressure is
>? 936 + 101.3 = **1037 kPa(a) = 10.37 bar(a)**.
>?
>? On the R410A curve, 10.37 bar(a) sits between the 5 °C value (9.36 bar) and
>? the 10 °C value (10.9 bar), working out at roughly **8.3 °C** saturated
>? suction temperature — about 3.3 K warmer than the 5 °C he was aiming for.
>?
>? **The consequence**
>?
>? - The evaporator TD is reduced by that 3.3 K, so the coil moves less heat and the system delivers below its rated capacity.
>? - A warmer coil dehumidifies less, so the space feels muggy even when the dry-bulb setpoint is met.
>? - The pressure is high because he over-charged to reach a target that was never the right target, so the machine is now also carrying surplus refrigerant — expect raised head pressure, reduced subcooling control and a risk of liquid returning to the compressor at low load.
>?
>? **The fix and the lesson:** recover the surplus back to the correct charge and
>? re-commission to **835 kPa(g)**. The habit that prevents it is writing "(a)"
>? or "(g)" after every pressure the moment it is written down, and reading the
>? heading of the table before using a number out of it.
`,
          quiz: [
            {
              q: "A coolroom holds 4 °C and its R404A evaporator is selected for a 6 K TD. The design saturated suction temperature is:",
              options: [
                "10 °C",
                "−2 °C",
                "−6 °C",
                "It cannot be found without the condensing temperature",
              ],
              answer: 1,
              explain: "SST = air-on − TD = 4 − 6 = −2 °C. Adding the TD instead of subtracting gives 10 °C, which would mean the coil is warmer than the room it is meant to cool — a physical impossibility and a useful self-check. The condensing side has no bearing on the design coil temperature.",
            },
            {
              q: "A table gives the saturation pressure of R404A at −10 °C as 439 kPa absolute. What should the suction gauge read?",
              options: [
                "540 kPa",
                "439 kPa",
                "338 kPa",
                "4.39 kPa",
              ],
              answer: 2,
              explain: "A gauge reads zero at atmosphere, so gauge = absolute − 101.3 = 439 − 101.3 = 338 kPa(g). Adding 101.3 instead (540) is the same mistake in reverse and would have you charging to a coil temperature several kelvin warm. Quoting the absolute figure straight onto a gauge is the single most common way to lose marks in this calculation.",
            },
            {
              q: "Two machines both run a coil at −5 °C saturated: one on R404A, one on R134a. Their suction gauges will read:",
              options: [
                "The same, because saturation temperature fixes the pressure",
                "Very differently — about 420 kPa(g) for R404A and about 142 kPa(g) for R134a",
                "Very differently, but only because the gauges are calibrated differently",
                "The same, provided both gauges are compound gauges",
              ],
              answer: 1,
              explain: "Each refrigerant has its own pressure-temperature curve. At the same −5 °C, R404A sits at 520 kPa(a) and R134a at 244 kPa(a), which is 420 and 142 kPa(g) respectively — nearly a factor of three apart. The gauges are identical instruments; it is the fluid that differs, which is why identifying the refrigerant comes before interpreting any reading.",
            },
            {
              q: "You are asked for the design suction pressure of a high-humidity produce coolroom held at 2 °C, and no TD is given. The best approach is:",
              options: [
                "Assume a 14 K TD, the standard air conditioning value",
                "Choose a small TD, around 4 to 6 K, because high humidity requires the coil to stay close to the air dewpoint, and state the assumption you made",
                "Say the question cannot be answered",
                "Use a 10 K TD because it makes the arithmetic easy",
              ],
              answer: 1,
              explain: "TD is selected by the humidity the product needs. A small TD keeps the coil surface near the air dewpoint so it strips out very little moisture, which is what unwrapped produce and meat require. A 14 K TD belongs to comfort air conditioning, where dehumidification is wanted. Stating your assumption in writing is what earns the mark when the question deliberately leaves the figure out.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "superheat-and-subcooling",
          title: "Superheat and subcooling from field data",
          minutes: 15,
          simple: "Superheat is how much warmer the gas leaving the evaporator is than the temperature at which it was boiling. Subcooling is how much colder the liquid leaving the condenser is than the temperature at which it was condensing. Both are found the same way: turn a gauge pressure into a temperature, then compare it with a thermometer reading taken at the same spot. Together they tell you whether the charge and the metering device are right.",
          refs: REFS,
          content: `
Superheat and subcooling are the two numbers that turn a set of gauges into a
diagnosis. Neither can be read directly off any instrument. Both are calculated,
and both are calculated the same way: convert a pressure to the temperature the
refrigerant is saturating at, then subtract or add a measured temperature.

Get the arithmetic right and you know whether the evaporator is being fed
correctly and whether there is enough refrigerant in the machine. Get it wrong —
usually by mixing gauge and absolute pressure, or by taking pressure at one end
of the system and temperature at the other — and you will chase a fault that does
not exist.

## Superheat: the method

1. Read the **suction gauge pressure** at the point you care about.
2. Convert to absolute: **absolute = gauge + 101.3 kPa**.
3. Look that pressure up on the PT chart for **the refrigerant in the system** to get the **saturated suction temperature (SST)**.
4. Measure the **actual suction line temperature at the same point**, with the probe clamped to clean pipe and re-insulated.
5. **Superheat = measured temperature − SST**, and the answer is in **kelvin**, because it is a difference.

!FIG[superheat-measure]

## Subcooling: the same method, other end of the system

1. Read the **liquid-line or high-side gauge pressure**.
2. Convert to absolute.
3. Look it up to get the **saturated condensing temperature (SCT)**.
4. Measure the **liquid line temperature** at the same point.
5. **Subcooling = SCT − measured temperature**, again in kelvin.

Superheat subtracts saturation from measured; subcooling subtracts measured from
saturation. Both come out positive on a healthy machine. If either comes out
negative you have made an arithmetic error or a measurement error — a vapour
cannot be colder than its saturation temperature and a liquid cannot be hotter.
That sign check is free and it catches a lot.

!FIG[subcool-measure]

## Where to measure, and why it changes the number

| What you want | Where you measure | What it tells you |
|---|---|---|
| TX valve superheat | At the bulb: pressure at the evaporator outlet (or corrected for line drop), temperature on the line under the bulb | Whether the valve is feeding the coil correctly |
| Total superheat | At the compressor suction service valve | Whether the compressor is safe — floodback risk if too low, overheating if too high |
| Subcooling | Liquid line at the condenser outlet | Whether there is enough refrigerant and whether liquid reaching the metering device is solid |

Total superheat at the compressor is always **higher** than superheat at the
bulb, because the suction line picks up heat on the way and its pressure drop
lowers the saturation temperature. On a short, well-insulated run the difference
is a kelvin or two. On a long run through a plant room it can be ten.

## Accepted operating values

| Measurement | Usual acceptable band | Reading outside it means |
|---|---|---|
| Superheat at a TX valve bulb | 4 to 8 K | Below: valve overfeeding, floodback risk. Above: coil starved |
| Total superheat at the compressor | roughly 8 to 20 K, and always within the compressor manufacturer's limit | Below: liquid reaching the compressor. Above: discharge temperature climbing, oil breaking down |
| Superheat, fixed orifice or capillary at design load | 5 to 15 K, and it moves with load | It is load-dependent, so judge it against the manufacturer's charging chart, not a fixed number |
| Subcooling at the condenser outlet, no receiver | 4 to 8 K | Below: undercharge or flash gas. Above: overcharge, restriction or a flooded condenser |
| Subcooling at a receiver outlet | close to 0 K by design | The receiver holds saturated liquid, so measure subcooling *before* it |

Always prefer the manufacturer's stated target where there is one — many split
systems have a target subcooling printed on the outdoor unit's data plate.

## Worked example 1 — an R404A coolroom that is running well

*Field data: suction gauge at the evaporator outlet 420 kPa(g); temperature on
the suction line under the TX bulb +2 °C. Liquid gauge 1750 kPa(g); liquid line
temperature at the condenser outlet 34 °C.*

**Superheat**

Absolute suction pressure = 420 + 101.3 = **521 kPa(a) = 5.21 bar(a)**
R404A saturates at 5.20 bar(a) at **−5 °C**, so SST = **−5 °C**
Superheat = 2 °C − (−5 °C) = **7 K**

Careful with that subtraction: subtracting a negative adds. Writing it out as
"2 plus 5" is fine, but write the step down so the marker can see you did it
deliberately and not by luck.

**Subcooling**

Absolute liquid pressure = 1750 + 101.3 = **1851 kPa(a) = 18.51 bar(a)**
R404A saturates at 18.5 bar(a) at **40 °C**, so SCT = **40 °C**
Subcooling = 40 °C − 34 °C = **6 K**

**Verdict:** 7 K superheat sits in the 4 to 8 K band, so the TX valve is feeding
correctly. 6 K subcooling sits in the 4 to 8 K band, so the charge is right and
the liquid arriving at the valve is solid. This machine is healthy, and you now
have two numbers on the service report that prove it.

## Worked example 2 — an R410A split on a hot day

*Suction gauge at the outdoor service valve 990 kPa(g), suction line temperature
there 18 °C. Liquid gauge 2310 kPa(g), liquid line 31 °C. Ambient 35 °C.*

**Total superheat**

990 + 101.3 = **1091 kPa(a) = 10.91 bar(a)** → SST = **10 °C**
Total superheat = 18 − 10 = **8 K**

**Subcooling**

2310 + 101.3 = **2411 kPa(a) = 24.11 bar(a)** → SCT = **40 °C**
Subcooling = 40 − 31 = **9 K**

**Verdict:** 8 K total superheat measured at the outdoor unit implies rather less
than that at the indoor coil outlet, so the valve is feeding generously but not
dangerously. 9 K subcooling is at the top of the normal band and slightly above
the 5 to 8 K many R410A splits specify — worth comparing against the target on
the data plate before deciding, but a candidate for a small overcharge. Note also
that 40 °C condensing in a 35 °C ambient is a healthy 5 K condenser split; a
dirty condenser would have pushed that much higher and lifted the subcooling for
a completely different reason.

## Worked example 3 — reading the pair together

*R404A. Suction gauge 267 kPa(g), evaporator outlet temperature 0 °C. Liquid
gauge 1750 kPa(g), liquid line 38 °C.*

267 + 101.3 = **368 kPa(a) = 3.68 bar(a)** → SST = **−15 °C**
Superheat = 0 − (−15) = **15 K** — far too high, the coil is starved.

1750 + 101.3 = **1851 kPa(a)** → SCT = **40 °C**
Subcooling = 40 − 38 = **2 K** — too low, so there is not a solid column of
liquid arriving at the valve.

**High superheat with low subcooling is the signature of an undercharge.** There
is not enough refrigerant in the machine to fill the condenser sufficiently to
subcool the liquid, so the valve receives part-flashed refrigerant, cannot pass
enough mass, and starves the coil. Leak-test before adding anything.

| Superheat | Subcooling | Most likely cause |
|---|---|---|
| High | Low | Undercharge or a leak |
| High | High | Restriction between condenser and valve — blocked drier, kinked liquid line, valve stuck closed |
| Low | High | Overcharge, or a TX valve overfeeding |
| Low | Low | TX valve overfeeding, bulb loose or badly located, or very low evaporator load |

!SIM[Compare superheat and subcooling on a system running low on charge](fault=lowCharge)

>! Low superheat is a compressor-killer, not just an efficiency problem. Liquid
>! refrigerant returning down the suction line washes oil off the bearings and
>! can be drawn into the cylinder, where it does not compress. If you calculate
>! superheat below about 3 K at the compressor, do not keep running the machine
>! while you think about it — shut it down and find out why.

## What to remember

- Both numbers are calculated, never read directly off an instrument.
- Always add 101.3 kPa to a gauge reading before entering a table of absolute pressures.
- Superheat = measured − SST. Subcooling = SCT − measured. Both in kelvin.
- A negative answer means you made a mistake, not that you found something exotic.
- Pressure and temperature must come from the same point in the system.
- Read the pair together: it is the combination that names the fault.

### Practice — work it out before opening the model answer

An older R22 packaged unit gives the following field data: suction gauge
397 kPa(g) with the suction line under the TX bulb at 6 °C; liquid gauge
1430 kPa(g) with the liquid line at the condenser outlet at 33 °C. Calculate the
superheat and the subcooling, show your workings, and judge whether the system is
operating acceptably.

>? **Superheat**
>?
>? Absolute suction pressure = 397 + 101.3 = **498 kPa(a) = 4.98 bar(a)**
>? From the R22 PT chart, 4.98 bar(a) is the saturation pressure at **0 °C**, so
>? SST = **0 °C**.
>? Superheat = measured − SST = 6 °C − 0 °C = **6 K**
>?
>? **Subcooling**
>?
>? Absolute liquid pressure = 1430 + 101.3 = **1531 kPa(a) = 15.31 bar(a)**
>? From the R22 PT chart, 15.3 bar(a) is the saturation pressure at **40 °C**, so
>? SCT = **40 °C**.
>? Subcooling = SCT − measured = 40 °C − 33 °C = **7 K**
>?
>? **Judgement**
>?
>? 6 K superheat sits in the middle of the 4 to 8 K band expected at a TX valve
>? bulb, so the valve is metering correctly. 7 K subcooling is within the 4 to
>? 8 K band expected at a condenser outlet, so the charge is adequate and the
>? liquid reaching the valve is solid. **The system is operating acceptably** and
>? both numbers should go on the service report as evidence, not just the word
>? "OK".

### Practice

An R410A split system reads: suction gauge 989 kPa(g), suction line at the indoor
coil outlet 12 °C; liquid gauge 2620 kPa(g), liquid line 34 °C, ambient 38 °C.
Calculate superheat and subcooling, state what the pair is telling you, and say
what you would do next and in what order.

>? **Superheat**
>?
>? 989 + 101.3 = **1090 kPa(a) = 10.90 bar(a)** → SST = **10 °C**
>? Superheat = 12 − 10 = **2 K**
>?
>? **Subcooling**
>?
>? 2620 + 101.3 = **2721 kPa(a) = 27.21 bar(a)** → SCT = **45 °C**
>? Subcooling = 45 − 34 = **11 K**
>?
>? **What the pair says**
>?
>? Low superheat with high subcooling is the classic **overcharge** signature.
>? The surplus refrigerant backs up into the condenser, so the liquid leaving it
>? is unusually cold relative to its saturation temperature (11 K of subcooling),
>? and the metering device is passing more than the coil can boil off, so the gas
>? leaving the evaporator is barely superheated. A TX valve overfeeding — bulb
>? loose, poorly located, or wrongly adjusted — produces low superheat too, but
>? it does not by itself raise subcooling, so the combination points at charge.
>?
>? Note the condensing temperature is 45 °C in a 38 °C ambient, a 7 K split. That
>? is on the high side but not wild, which is consistent with a condenser holding
>? surplus liquid rather than one that is dirty or short of airflow.
>?
>? **What you do, in order**
>?
>? 1. **Stop treating it as a running machine.** 2 K superheat means liquid is very likely reaching the compressor. Note the risk and be prepared to shut down.
>? 2. **Confirm the basics before touching the charge** — check the bulb is tight, correctly positioned on the horizontal suction line and insulated, and check the airflow across both coils. A cheap cause first.
>? 3. **Check the manufacturer's target subcooling** on the data plate. Charge on subcooling for a TX-valve system, and use the manufacturer's number rather than a rule of thumb where one is published.
>? 4. **Recover the surplus into a recovery cylinder** — never vent it — in small increments, letting the system stabilise for several minutes between each, and re-measure both numbers each time.
>? 5. **Stop when subcooling is back in band and superheat has risen with it**, then record the final charge and the readings.

### Practice

A technician on an R404A coolroom takes the suction pressure at the compressor
service valve, 30 m of suction line away from the evaporator, where the gauge
reads 360 kPa(g). He measures the suction line temperature at the evaporator
outlet, +2 °C, and reports the superheat from those two figures. The pressure at
the evaporator outlet is actually 420 kPa(g). Calculate both the superheat he
reported and the true superheat at the coil, and explain the consequence of his
method.

>? **What he reported**
>?
>? 360 + 101.3 = **461 kPa(a) = 4.61 bar(a)**. On the R404A curve this lies
>? between the −10 °C value (4.39 bar) and the −5 °C value (5.20 bar), giving a
>? saturated suction temperature of about **−8.6 °C**.
>? Reported superheat = 2 − (−8.6) = **10.6 K**
>?
>? **The true superheat at the coil**
>?
>? 420 + 101.3 = **521 kPa(a) = 5.21 bar(a)** → SST = **−5 °C**
>? True superheat = 2 − (−5) = **7 K**
>?
>? **The error and its consequence**
>?
>? He has overstated superheat by about **3.6 K**, and he did it by pairing a
>? pressure from one end of the suction line with a temperature from the other.
>? The 60 kPa of pressure drop along 30 m of pipe corresponds to roughly 3.6 K of
>? saturation temperature on R404A, and that whole amount lands in his answer as
>? false superheat.
>?
>? Believing the coil is starved at 10.6 K, he is likely to open the TX valve to
>? bring the number down. That drops the true superheat from a healthy 7 K to
>? around 3 K, and the machine that was working correctly now floods liquid back
>? to the compressor at low load.
>?
>? **The correct method:** take pressure and temperature at the **same point**.
>? For TX valve superheat, that is the evaporator outlet at the bulb — either
>? fit a gauge at the evaporator service port, or measure at the compressor and
>? correct the pressure for the known line drop, stating that you have done so.
>? If you want the compressor's total superheat, use the compressor's pressure
>? *and* the compressor's suction temperature: 2 °C at the coil will have warmed
>? by the time it gets there, and both figures must come from the same place.
`,
          quiz: [
            {
              q: "An R404A system reads 267 kPa(g) suction with the evaporator outlet at 0 °C. R404A saturates at −15 °C at 368 kPa absolute. The superheat is:",
              options: [
                "0 K, because the coil outlet is at 0 °C",
                "15 K",
                "−15 K",
                "It cannot be found without the subcooling",
              ],
              answer: 1,
              explain: "Convert first: 267 + 101.3 = 368 kPa(a), which is −15 °C saturated. Superheat = measured − SST = 0 − (−15) = 15 K. Subtracting a negative adds, and forgetting that is the commonest slip here — it produces −15 K, which is physically impossible because vapour leaving a coil cannot be colder than the temperature it boiled at.",
            },
            {
              q: "A system shows superheat of 16 K and subcooling of 2 K. The most likely cause is:",
              options: [
                "Overcharge",
                "Undercharge or a leak",
                "A TX valve overfeeding",
                "A dirty condenser",
              ],
              answer: 1,
              explain: "Too little refrigerant means the condenser cannot hold enough liquid to subcool it, so subcooling collapses and part-flashed refrigerant reaches the metering device. The valve then cannot pass enough mass and the coil starves, driving superheat up. An overcharge or an overfeeding valve gives the opposite — low superheat — and a dirty condenser raises head pressure and subcooling rather than lowering them.",
            },
            {
              q: "Why is total superheat measured at the compressor always higher than superheat measured at the TX valve bulb?",
              options: [
                "Because the compressor gauge is less accurate",
                "Because the suction line picks up heat on the way and its pressure drop lowers the saturation temperature, so both terms of the subtraction move the same way",
                "Because superheat rises as the refrigerant is compressed",
                "It is not — the two readings are always identical",
              ],
              answer: 1,
              explain: "Two effects add. The line gains heat through imperfect insulation, raising the measured temperature. The line's pressure drop lowers the pressure and therefore the saturation temperature it is compared with. Measured up, saturation down, so the difference grows. Compression happens after the measurement point, so it has no bearing on suction superheat.",
            },
            {
              q: "You calculate a subcooling of −3 K on a running system. The correct response is:",
              options: [
                "Report it as negative subcooling, which indicates flash gas",
                "Recheck your work: the liquid line temperature or the pressure conversion is wrong, because liquid leaving a condenser cannot be hotter than its saturation temperature",
                "Add refrigerant until it becomes positive",
                "Convert it to kelvin by adding 273",
              ],
              answer: 1,
              explain: "A negative result is a signal that something in the measurement or the arithmetic is wrong — most often a gauge reading used as absolute, a temperature probe not clamped to the pipe, or the wrong refrigerant's chart. Subcooling and superheat are differences, so they are already in kelvin and adding 273 is meaningless. Fix the measurement before touching the charge.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "recovery-cylinder-fill",
          title: "Recovery cylinder fill: the 80% rule",
          minutes: 13,
          simple: "A cylinder of liquid refrigerant must never be filled right up. Liquid expands as it warms, and if there is no vapour space left for it to expand into, the pressure rises fast enough to burst the cylinder. So you work out the most refrigerant it may hold, weigh what is already in it, and subtract. If the job will not fit, you get a second cylinder — you never squeeze it in.",
          refs: REFS,
          content: `
A recovery cylinder is a pressure vessel you carry around in the back of a ute.
Overfill one and you are transporting a bomb whose fuse is a warm afternoon. The
80% rule exists for one reason: **liquid refrigerant expands a great deal as it
warms, and it is incompressible.**

While a vapour space remains above the liquid, warming simply raises the
saturation pressure along the refrigerant's PT curve — high, but predictable and
within the cylinder's design. Once the liquid expands to fill the cylinder
completely there is no vapour left to compress. From that moment the pressure is
set by *hydraulic* expansion against a steel wall, and it climbs by hundreds of
kilopascals per kelvin. A cylinder left in the sun goes from full to failed in
minutes. The vapour space is not spare capacity. It is the safety margin.

!FIG[recovery-hookup]

## What the cylinder tells you

Every refillable cylinder is stamped, usually on the shoulder or on a collar:

| Marking | Means | Used for |
|---|---|---|
| **TW** or **tare** | The mass of the empty cylinder and its valve, in kg | Subtracted from the gross weight to find how much refrigerant is inside |
| **WC** (water capacity) | The mass of water the cylinder would hold if filled completely, in kg (numerically the same as its volume in litres) | The basis for the maximum fill |
| **TP** (test pressure) | The pressure the cylinder was hydrostatically tested to | Confirms it suits the refrigerant you intend to put in it |
| **Test date** | Date of the last periodic inspection and test | A cylinder out of test date must not be filled or transported |
| **Standard / serial** | The design standard and the cylinder's unique number | Traceability |

Gross weight is what the scales read with the cylinder sitting on them:
**gross = tare + refrigerant**.

## The method

1. **Read the tare and the water capacity** off the cylinder. Do not assume; two cylinders of the same size can have different tares.
2. **Maximum refrigerant mass = 0.8 x water capacity.** This is the 80% rule.
3. **Maximum gross weight = tare + maximum refrigerant mass.** This is the figure to watch on the scales.
4. **Current refrigerant = current gross weight − tare.**
5. **Room remaining = maximum refrigerant mass − current refrigerant.**
6. **Compare with the charge you have to recover.** If it does not fit, use a second cylinder. Never part-recover and hope.

!CITE[cop:2:13.4.3] and !CITE[cop:2:12.2.3] set the requirements this method
serves. Where a cylinder or the refrigerant supplier states a **filling ratio**
or a maximum charge for a specific refrigerant, that figure takes precedence over
the general 80% calculation — denser refrigerants reach their safe mass sooner
than lighter ones. The 80% figure is the rule you work to when only the tare and
water capacity are stamped on the cylinder, and it is the one an assessment
expects you to apply.

## Worked example 1 — the cylinder can be used

*You are recovering the 9 kg charge from a supermarket condensing unit. Your
recovery cylinder is stamped TW 26.5 kg, WC 55 kg, and the scales read a gross
weight of 58.0 kg. May you use it?*

Maximum refrigerant = 0.8 x 55 = **44.0 kg**
Maximum gross weight = 26.5 + 44.0 = **70.5 kg**
Refrigerant already in the cylinder = 58.0 − 26.5 = **31.5 kg**
Room remaining = 44.0 − 31.5 = **12.5 kg**

The job needs 9 kg and there is room for 12.5 kg, so **yes, the cylinder may be
used.** At the end of the recovery it will hold 31.5 + 9 = 40.5 kg of
refrigerant, at a gross weight of 26.5 + 40.5 = **67.0 kg**, which is 3.5 kg
below the 70.5 kg limit.

Two conditions on that "yes": the existing 31.5 kg must be **the same
refrigerant** you are about to recover, and the cylinder must be in test date. If
the heel is a different gas, the answer becomes no regardless of the arithmetic
— see !CITE[cop:2:12.2.5].

## Worked example 2 — the cylinder cannot be used

*A second cylinder is stamped TW 22.0 kg, WC 40 kg. The scales read a gross
weight of 56.0 kg. You need to recover a 6 kg charge. May you use it?*

Maximum refrigerant = 0.8 x 40 = **32.0 kg**
Maximum gross weight = 22.0 + 32.0 = **54.0 kg**
Refrigerant already in the cylinder = 56.0 − 22.0 = **34.0 kg**
Room remaining = 32.0 − 34.0 = **−2.0 kg**

**No.** The answer is not merely "it will not fit". This cylinder is **already
overfilled by 2 kg** and its gross weight of 56.0 kg exceeds the 54.0 kg limit.
It is unsafe as it stands.

What you do about it:

- Do not add anything to it, and do not put it in the vehicle.
- Keep it in the shade, upright and restrained, away from heat and out of the sun.
- Decant the excess into another suitable, in-date, correctly labelled cylinder of the same refrigerant, using proper transfer equipment and weighing continuously — or return it to the refrigerant supplier or recovery agent for safe handling.
- Recover the 6 kg job into a different cylinder that you have checked by this same method.
- Record what you found, because an overfilled cylinder means somebody skipped the weigh-in and that is worth knowing.

>! Never estimate a cylinder's contents from pressure, from how it feels when you
>! lift it, or from how far the liquid line frosts. A cylinder's pressure is the
>! saturation pressure of the refrigerant at its temperature and is almost the
>! same whether it holds 2 kg or 40 kg. **Scales are the only instrument that
>! tells you how full a cylinder is**, and the recovery unit must be sitting on
>! them from the start of the job to the end.

## Before you connect to any cylinder

- **Is it a recovery cylinder?** Refillable recovery cylinders have both a liquid and a vapour connection and are marked for refrigerant recovery. Single-trip disposable containers must never be refilled — see !CITE[cop:2:12.5].
- **Is it in test date?** Out of date means out of service.
- **What is in it?** A heel of a different refrigerant contaminates the whole cylinder and turns a recoverable gas into a mixed waste stream that can only be destroyed.
- **Is it fit?** No dents, gouges, corrosion, fire damage, bent valve or missing valve cap.
- **Is it suitable for the pressure?** An R410A recovery needs a cylinder rated for R410A's pressures.
- **Can you handle it?** A cylinder at its maximum gross weight can approach 75 kg. That is a trolley or a two-person lift, not a heave from the tailgate.

## What to remember

- The vapour space is the safety margin against hydraulic expansion, not spare room.
- Maximum refrigerant = 0.8 x water capacity; maximum gross = tare + that figure.
- Current contents = gross − tare. Room = maximum − current.
- Weigh continuously throughout recovery; pressure tells you nothing about quantity.
- If it will not fit, get another cylinder. Never approach the limit "just this once".
- A cylinder that is already over the limit is a hazard to make safe, not a cylinder to top up.

### Practice — work it out before opening the model answer

You need to recover a 14 kg charge. The cylinder on the ute is stamped TW 24.5 kg
and WC 47 kg, and the scales show a gross weight of 61.3 kg. Calculate the
maximum permitted refrigerant mass, the maximum gross weight, the contents, the
room remaining, and state clearly whether the cylinder may be used.

>? **Maximum permitted refrigerant mass**
>?
>? 0.8 x WC = 0.8 x 47 kg = **37.6 kg**
>?
>? **Maximum gross weight**
>?
>? tare + maximum refrigerant = 24.5 + 37.6 = **62.1 kg**
>?
>? **Refrigerant currently in the cylinder**
>?
>? gross − tare = 61.3 − 24.5 = **36.8 kg**
>?
>? **Room remaining**
>?
>? 37.6 − 36.8 = **0.8 kg**
>?
>? **Answer: no, this cylinder cannot be used for this job.**
>?
>? It has 0.8 kg of capacity left and the job needs 14 kg — it is within 0.8 kg
>? of the legal limit and effectively full. Fitting the job in would take the
>? contents to 50.8 kg against a 37.6 kg limit, and the gross weight to 75.3 kg
>? against a 62.1 kg limit.
>?
>? Take an empty, in-date recovery cylinder of the right type, verify its tare
>? and water capacity, confirm it is clean or holds a heel of the same
>? refrigerant, and set it on the scales before you start. Label the nearly full
>? cylinder clearly and return it for reclaim rather than leaving it on the
>? vehicle to be topped up by the next person.

### Practice

A cylinder is stamped TW 18.0 kg, WC 30 kg, and the scales read 30.4 kg gross.
Calculate how much refrigerant it currently holds, how much more it may legally
take, and the gross weight at which you must stop.

>? **Contents now**
>?
>? gross − tare = 30.4 − 18.0 = **12.4 kg of refrigerant**
>?
>? **Maximum permitted refrigerant mass**
>?
>? 0.8 x 30 = **24.0 kg**
>?
>? **How much more it may take**
>?
>? 24.0 − 12.4 = **11.6 kg**
>?
>? **Gross weight at which you stop**
>?
>? tare + maximum = 18.0 + 24.0 = **42.0 kg**
>?
>? So the cylinder may accept up to a further 11.6 kg, and the number to watch on
>? the scales during recovery is **42.0 kg**. Set that as your stop figure before
>? you open a valve, write it on the job sheet, and confirm the heel already in
>? the cylinder is the same refrigerant as the charge you are recovering. If the
>? machine you are working on holds more than 11.6 kg, have the second cylinder
>? standing by and changed over before you reach 42.0 kg, not after.

### Practice

A near-empty cylinder is stamped TW 26.0 kg, WC 61.5 kg and reads 27.2 kg gross.
Work out the heel it contains, its maximum permitted fill, the room available and
its maximum gross weight. Then state one non-arithmetic hazard that this
particular cylinder presents and how you deal with it.

>? **Heel currently in the cylinder**
>?
>? 27.2 − 26.0 = **1.2 kg**
>?
>? **Maximum permitted refrigerant mass**
>?
>? 0.8 x 61.5 = **49.2 kg**
>?
>? **Room available**
>?
>? 49.2 − 1.2 = **48.0 kg**
>?
>? **Maximum gross weight**
>?
>? 26.0 + 49.2 = **75.2 kg**
>?
>? **The non-arithmetic hazard: manual handling.**
>?
>? A cylinder that is legally full here weighs **75.2 kg**. That is far beyond a
>? safe one-person lift, and it will be lifted from a plant room floor, onto a
>? tailgate, and off again — usually by someone tired at the end of a job. Plan
>? the handling before you fill it: use a cylinder trolley, load with a ramp or
>? a tail lift, restrain it upright in the vehicle, and use two people for any
>? lift you cannot avoid. If the position is awkward, deliberately stop the fill
>? well short of 49.2 kg and use a second cylinder — the 80% figure is a legal
>? maximum, not a target you have to reach.
>?
>? Second point worth making: identify the 1.2 kg heel before you add anything.
>? If it is not the same refrigerant as the charge you are recovering, the
>? cylinder cannot be used no matter how much room the arithmetic says it has.
`,
          quiz: [
            {
              q: "A recovery cylinder is stamped TW 25 kg and WC 50 kg. The maximum mass of refrigerant it may hold, and the maximum gross weight, are:",
              options: [
                "50 kg and 75 kg",
                "40 kg and 65 kg",
                "40 kg and 40 kg",
                "20 kg and 45 kg",
              ],
              answer: 1,
              explain: "Maximum refrigerant = 0.8 x water capacity = 0.8 x 50 = 40 kg. Maximum gross = tare + that = 25 + 40 = 65 kg. Answering 50 kg ignores the 80% rule entirely; answering 40 kg for the gross forgets that the scales are also carrying 25 kg of steel. Both figures matter: one is what you may recover, the other is what the scales must not exceed.",
            },
            {
              q: "Why must a cylinder of liquid refrigerant never be filled completely?",
              options: [
                "Because the recovery unit cannot push refrigerant into a full cylinder",
                "Because liquid expands as it warms and, with no vapour space left, the pressure rises hydraulically and can rupture the cylinder",
                "Because the refrigerant would dissolve the cylinder lining",
                "Because the cylinder would be too heavy to transport legally",
              ],
              answer: 1,
              explain: "While vapour remains above the liquid, warming just moves the cylinder up the refrigerant's saturation curve. Once liquid fills the vessel there is nothing compressible left, and further warming produces enormous hydraulic pressure over a few kelvin. Weight limits and pump capability are real considerations, but they are not the reason for the 80% rule.",
            },
            {
              q: "Halfway through a recovery you realise the cylinder will reach its maximum gross weight before the system is empty. The correct action is:",
              options: [
                "Continue to the end and vent the last of the charge to atmosphere",
                "Continue past the limit, since the cylinder will cool overnight",
                "Stop at the maximum gross weight, close the valves, change to a second checked cylinder and continue",
                "Chill the cylinder in ice so more will fit",
              ],
              answer: 2,
              explain: "You stop at the limit and change cylinders. Venting is illegal and cooling the cylinder only defers the problem — the refrigerant is still there when it warms up in the vehicle, and the mass, not the pressure, is what the limit controls. Planning for the changeover before you start is what keeps this from becoming a decision made under pressure.",
            },
            {
              q: "A cylinder holds a 3 kg heel of R134a and you are about to recover R404A from a coolroom. The arithmetic shows plenty of room. You should:",
              options: [
                "Proceed, because the 80% rule is satisfied",
                "Proceed, but label the cylinder as a mixture",
                "Use a different cylinder — mixing refrigerants contaminates the whole contents and the mixture can generally only be destroyed, not reclaimed",
                "Recover the R404A as vapour only, which prevents mixing",
              ],
              answer: 2,
              explain: "Mixed refrigerants cannot be separated economically, so a cylinder that could have gone for reclaim becomes waste bound for destruction, at the technician's cost. The fill calculation is only one of several checks — refrigerant identity, test date, cylinder condition and pressure rating all have to pass as well. Recovering as vapour does not help; it still ends up in the same cylinder.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "additional-charge-long-run",
          title: "Additional refrigerant charge for a long pipe run",
          minutes: 12,
          simple: "A split system arrives with enough refrigerant in it for a short pipe run. If your pipes are longer than that, the extra metres of tube hold extra liquid, so you must weigh in more refrigerant at the rate the manufacturer states — so many grams for every metre past the base length. There is also a longest run the unit will tolerate at all, and going past it is not a charging problem, it is a redesign problem.",
          refs: REFS,
          content: `
Every split and multi-head system leaves the factory holding a charge sized for a
stated **base pipe length** — the manufacturer calls it the standard, nominal or
chargeless length. Run the pipework longer than that and the extra metres of
liquid line contain extra liquid refrigerant that has to come from somewhere. If
you do not add it, the system runs permanently undercharged: low subcooling,
flash gas at the metering device, high superheat, poor capacity, and a compressor
running hot.

Three numbers come out of the installation manual and nowhere else:

- the **base length** the factory charge covers,
- the **additional charge rate**, in grams per metre beyond that length,
- the **maximum permitted pipe length** (and usually a maximum height difference between indoor and outdoor units).

## The method

1. **Measure the actual liquid line length** along the route the pipe really takes — round the bends, up the wall, through the ceiling space, plus the slack coiled at each end. Not the straight-line distance between the two units, and not the length you guessed from the plan.
2. **Extra length = actual length − base length.** If the answer is zero or negative, there is nothing to add.
3. **Additional charge = extra length x rate.** The rate is in grams per metre, so the answer is in grams; divide by 1000 for kilograms.
4. **Total system charge = factory charge + additional charge.**
5. **Check the actual length against the maximum** permitted length, and the vertical separation against the maximum height difference.
6. **Weigh the additional charge in** with electronic scales, then **record it and label the unit** with the total charge.

## Typical rates, and why they differ

| Liquid line outside diameter | Typical additional charge rate | Comment |
|---|---|---|
| 6.35 mm (1/4 in) | roughly 15 to 20 g/m | Small residential splits |
| 9.52 mm (3/8 in) | roughly 20 to 30 g/m | Larger splits and small ducted |
| 12.7 mm (1/2 in) | roughly 45 to 60 g/m | Ducted and light commercial |

The rate rises steeply with pipe size because it follows the **internal
cross-sectional area** of the liquid line — double the bore and you hold about
four times the liquid per metre. These are typical figures for orientation only.
**Use the rate in the manual for the model in front of you**, and quote it in
your workings so the marker can see where the figure came from.

## Worked example 1 — a residential split

*A wall-mounted split is factory charged with 1.45 kg of R410A for a base pipe
length of 7.5 m. The manual specifies 20 g/m of additional charge beyond that,
and a maximum pipe length of 30 m. The installed liquid line measures 22 m. How
much refrigerant must be added, and what is the total charge?*

Extra length = 22 − 7.5 = **14.5 m**
Additional charge = 14.5 m x 20 g/m = **290 g = 0.29 kg**
Total charge = 1.45 + 0.29 = **1.74 kg**

Length check: 22 m against a 30 m maximum — **within limits**, so the
installation is acceptable and only the charge needs adjusting.

## Worked example 2 — a light commercial ducted unit

*A ducted unit is factory charged with 3.2 kg of R410A for a base length of 15 m,
with an additional charge rate of 45 g/m and a maximum pipe length of 50 m. The
run measures 38 m.*

Extra length = 38 − 15 = **23 m**
Additional charge = 23 m x 45 g/m = **1035 g = 1.035 kg**
Total charge = 3.2 + 1.035 = **4.235 kg**, round to **4.24 kg**

Length check: 38 m against 50 m — **within limits**.

Because the total charge is now on the equipment label and in the logbook, it is
worth carrying it one step further for the records:

CO2 equivalent = charge x GWP = 4.235 kg x 2088 (R410A, AR4)
= 8843 kg CO2-e = **8.84 tonnes CO2-e**

That figure drives leak-inspection frequency and reporting obligations on larger
systems, so it belongs on the commissioning sheet next to the charge.

!CITE[cop:2:6.4] requires the mass charged to be determined properly, and
!CITE[cop:2:6.7] requires it recorded. "Topped up until the sight glass cleared"
satisfies neither.

## Worked example 3 — beyond the maximum

*A small split is factory charged for a 5 m base length, adds 15 g/m beyond it,
and has a stated maximum pipe length of 25 m. The only practical route between
the proposed indoor and outdoor positions is 34 m. What do you do?*

The arithmetic is easy and it is also **the wrong question**:

Extra length = 34 − 5 = 29 m; 29 x 15 = 435 g. But **34 m exceeds the 25 m
maximum**, so this charge must not simply be added and the installation must not
proceed as drawn.

Why the maximum exists:

- **Liquid line pressure drop.** Over-long liquid lines, especially with a vertical lift, drop the pressure below saturation and produce flash gas before the metering device. The valve then meters vapour instead of liquid and the coil starves however much refrigerant you add.
- **Suction line pressure drop.** Every extra metre costs suction pressure, which lowers the saturated suction temperature, thins the returning gas and cuts mass flow. Capacity falls and the compressor runs hotter.
- **Oil return.** Oil has to be dragged back up risers by gas velocity. Beyond the tested length the manufacturer can no longer promise it comes back, and oil that stays in the evaporator is oil that is not in the compressor.
- **Rated capacity.** Manufacturers publish a derating per metre of pipe. Long runs deliver measurably less than the badge says, and the customer notices in February.
- **Warranty.** Installing beyond the stated maximum voids it, and the failure it causes is exactly the failure the warranty would otherwise have covered.

What you actually do: relocate the outdoor or indoor unit to shorten the run,
find a shorter route, or select equipment rated for the distance. Then recalculate
from that model's own base length and rate. Document the decision — an installer
who exceeds a published limit owns every consequence of it.

>! Weigh the additional charge in with electronic scales. Do not add refrigerant
>! "until the pressures look right", and do not use a sight glass as the primary
>! measure on a system with a receiver — a receiver keeps the glass clear over a
>! wide range of charge. On a blended refrigerant such as R410A or R404A, always
>! charge as **liquid**. Drawing vapour off the cylinder fractionates the blend
>! and changes the composition of both what goes in and what is left behind.

## Two traps in the wording

**"Total pipe length" versus "liquid line length".** Most manuals state the
additional charge against the liquid line length, which for a paired run is the
same as the run length — not the sum of both pipes. Read which one the manual
means; if a question is ambiguous, state your interpretation and carry on.

**"Base length" versus "pre-charged for".** Some manuals say "no additional
charge required up to 15 m". That 15 m is the base length. Others give a factory
charge "for 7.5 m of pipe". Same idea, different words. In both cases you
subtract the base length before multiplying by the rate — a very common mistake
is to multiply the *whole* run by the rate, which on Example 1 would give
22 x 20 = 440 g instead of 290 g, and leave the system 150 g overcharged.

## What to remember

- Additional charge = (actual length − base length) x rate. Subtract first, then multiply.
- If the run is shorter than the base length, add nothing — and remove nothing either.
- Always check the run against the maximum permitted length before doing any charging arithmetic.
- Weigh it in, then record and label the total charge on the unit.
- Charge blends as liquid, always.
- Grams to kilograms: divide by 1000. A misplaced decimal here is the difference between a correct charge and three times the charge.

### Practice — work it out before opening the model answer

A ducted split is factory charged with 2.10 kg of refrigerant for a base pipe
length of 10 m. The manual gives an additional charge rate of 22 g/m and a
maximum pipe length of 40 m. The installed run measures 27.5 m. Calculate the
additional charge and the total system charge, and confirm the installation is
within limits.

>? **Extra length beyond the base**
>?
>? 27.5 m − 10 m = **17.5 m**
>?
>? **Additional charge**
>?
>? 17.5 m x 22 g/m = **385 g = 0.385 kg**
>?
>? **Total system charge**
>?
>? 2.10 kg + 0.385 kg = **2.485 kg**, which is sensibly written as **2.49 kg**
>? on the label and the commissioning sheet.
>?
>? **Length check**
>?
>? 27.5 m installed against a 40 m maximum — **within limits**, with 12.5 m to
>? spare, so no derating or redesign question arises.
>?
>? Method note: weigh the 385 g in as liquid, using scales, with the cylinder on
>? the scales from the start so the reading is a measurement and not a
>? subtraction from memory. Record the additional charge, the total charge and
>? the pipe length on the commissioning documentation, and write the total charge
>? on the equipment label.

### Practice

A high-wall split is factory charged with 1.05 kg for a base length of 7 m, with
an additional charge rate of 16 g/m. The installed pipe run measures 6 m.
Calculate the additional charge required and explain what you do about the
difference between 6 m and 7 m.

>? **Extra length beyond the base**
>?
>? 6 m − 7 m = **−1 m**
>?
>? A negative extra length means the run is *shorter* than the base length, so:
>?
>? **Additional charge = nil.** 16 g/m x 0 m = **0 g**. The total system charge
>? stays at the factory figure of **1.05 kg**.
>?
>? **What you do about the missing metre**
>?
>? **Nothing.** You do not remove 16 g of refrigerant to "correct" the charge.
>? The base length is the length the factory charge is *guaranteed to cover*, not
>? a length the charge is exactly matched to. The manufacturer builds the charge
>? with a margin, and systems are designed to run correctly anywhere from a
>? minimum run up to the base length on the factory charge alone.
>?
>? Recovering refrigerant to chase a calculation would leave the system genuinely
>? undercharged, cost you refrigerant, and add a needless recovery and
>? re-evacuation to the job.
>?
>? What you *do* do is confirm the run is not shorter than any stated **minimum**
>? pipe length — some manuals set one, typically around 3 m, because a very short
>? run gives too little pressure drop and can allow liquid to reach the
>? compressor. Then record 6 m and 1.05 kg on the commissioning sheet.

### Practice

An installer measures the only available route for a ducted unit at 46 m. The
manual states a base length of 10 m, an additional charge rate of 30 g/m, a
factory charge of 3.0 kg and a maximum pipe length of 40 m. Calculate what the
additional charge would have been, then explain why the installation must not
proceed as planned and what the options are.

>? **The arithmetic, for completeness**
>?
>? Extra length = 46 − 10 = **36 m**
>? Additional charge = 36 m x 30 g/m = **1080 g = 1.08 kg**
>? Total charge would have been 3.0 + 1.08 = **4.08 kg**
>?
>? **Why it must not proceed**
>?
>? 46 m exceeds the manufacturer's stated maximum of 40 m. That limit is not a
>? charging figure — you cannot buy your way past it with refrigerant. Beyond the
>? tested length:
>?
>? - liquid line pressure drop produces flash gas before the metering device, so the coil starves no matter what the charge is;
>? - suction line pressure drop lowers the saturated suction temperature, cutting mass flow, capacity and compressor cooling;
>? - gas velocity may no longer be sufficient to return oil up the risers, and oil left in the evaporator is oil missing from the compressor;
>? - the unit's rated capacity is derated over distance, so the customer pays for a machine that cannot meet the load;
>? - the warranty is void, and the failure mode this causes is precisely the one the warranty would have covered.
>?
>? **The options**
>?
>? 1. Shorten the run: relocate the outdoor unit closer, or find a more direct route through the building.
>? 2. Relocate the indoor unit, if that is the easier end to move.
>? 3. Select a different model or a different product family rated for 46 m or more, then start the calculation again from *that* model's base length, rate, factory charge and maximum height difference.
>? 4. Split the load into two smaller systems on shorter runs.
>?
>? Whichever is chosen, put the reason in writing to the client or the builder
>? before any pipe goes in the wall. Once the pipework is buried, the cheap fix
>? has gone and the argument is about who pays for a wall.
`,
          quiz: [
            {
              q: "A split is pre-charged for a 7 m base length and requires 20 g/m beyond it. The installed run is 19 m. The additional charge is:",
              options: [
                "380 g",
                "240 g",
                "140 g",
                "520 g",
              ],
              answer: 1,
              explain: "Subtract the base length first: 19 − 7 = 12 m of extra pipe, then 12 x 20 = 240 g. Multiplying the whole 19 m by the rate gives 380 g and leaves the system 140 g overcharged — that is the single most common error in this calculation, and it shows up as high subcooling and raised head pressure at commissioning.",
            },
            {
              q: "The installed pipe run works out longer than the manufacturer's maximum permitted length. The correct response is:",
              options: [
                "Add the calculated additional charge anyway and monitor the system",
                "Add half the calculated charge as a compromise",
                "Do not proceed as designed — shorten the run, relocate a unit, or select equipment rated for the distance",
                "Add the charge and fit a larger liquid line drier",
              ],
              answer: 2,
              explain: "The maximum length is a design limit covering liquid line flash gas, suction pressure drop, oil return and rated capacity. None of those are fixed by adding refrigerant, and exceeding the limit voids the warranty on the very failures it causes. The answer is a design change, documented before the pipework is installed.",
            },
            {
              q: "Why does the additional charge rate in grams per metre rise so steeply with liquid line size?",
              options: [
                "Because larger pipe has thicker walls",
                "Because the rate follows the internal cross-sectional area, so doubling the bore holds roughly four times the liquid per metre",
                "Because larger systems always use a denser refrigerant",
                "Because longer runs always use larger pipe",
              ],
              answer: 1,
              explain: "The extra refrigerant is the liquid that fills the extra pipe, and volume per metre is proportional to the square of the bore. Doubling the internal diameter quadruples the volume, so the grams-per-metre figure climbs far faster than the pipe size suggests. Wall thickness affects the pipe's mass, not its contents.",
            },
            {
              q: "You have calculated an additional charge of 0.385 kg. The correct way to get it into the system is:",
              options: [
                "Add vapour from the cylinder until the suction pressure looks right",
                "Weigh it in as liquid using electronic scales, then record the total charge and label the unit",
                "Add refrigerant until the sight glass clears",
                "Estimate it from the running current",
              ],
              answer: 1,
              explain: "Charge is a mass, so it is measured on scales and nothing else. Blends such as R410A and R404A must be taken from the cylinder as liquid, because drawing vapour fractionates the blend and changes the composition of both the charge and the remaining cylinder contents. A sight glass will clear over a wide range of charge on a system with a receiver, and running current is a poor proxy for charge.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "air-side-duty",
          title: "Air-side duty: capacity from airflow and temperature drop",
          minutes: 14,
          simple: "If you know how much air is going through a coil and how much colder it comes out, you know how much heat the coil is removing. Air has a known weight per litre and takes a known amount of energy to warm or cool by one degree, so the sum is just those two facts multiplied by the flow and the temperature change. Turn it around and you can work out how much air a given duty needs.",
          refs: REFS,
          content: `
Gauges tell you what the refrigerant is doing. The air-side duty tells you what
the *customer* is getting. A machine can have textbook superheat and subcooling
and still be delivering half its rated capacity because the coil is blocked, a
filter is choked, a fan is running backwards or a damper is shut. The only way to
know is to measure the air and do the arithmetic.

## The physics in one line

**Q = mass flow x specific heat capacity x temperature change**

**Q = m x cp x ΔT**

- **Q** is the duty in kW when mass flow is in kg/s
- **m** is the mass flow of air in **kg/s**
- **cp** is the specific heat capacity of air, about **1.005 kJ/kg·K**
- **ΔT** is the temperature difference across the coil, in **K**

Air is measured on site in litres per second, not kilograms per second, so there
is one conversion in front of the formula.

## From litres per second to kilograms per second

**m (kg/s) = volume flow (m³/s) x density (kg/m³)**, and 1000 L/s = 1 m³/s.

Air density at around 20 °C and sea level is **1.2 kg/m³**. It rises as air gets
colder and denser, and falls at altitude and in hot air:

| Air temperature | Density (kg/m³) |
|---|---|
| −5 °C | 1.32 |
| 0 °C | 1.29 |
| 10 °C | 1.25 |
| 20 °C | 1.20 |
| 35 °C | 1.15 |

For comfort air conditioning, 1.2 kg/m³ is the standard working value. For a
coolroom or freezer coil, using 1.2 kg/m³ understates the duty by five to ten per
cent, so use the density at the actual air-on temperature and say that you did.

## The sensible-heat shortcut

Combining the density and the specific heat:

**Q (kW) = 1.2 x airflow (L/s) x ΔT / 1000**

That is the version worth having in your head. It says roughly **1.2 watts per
litre per second per kelvin**. Keep in mind it is a *sensible* heat calculation —
it accounts only for the temperature change of the air, not for the moisture the
coil condenses out.

## Total duty, when the coil is wet

A cooling coil below the air's dewpoint also removes latent heat as it condenses
moisture, and dry-bulb temperature cannot see that. For total duty you need
enthalpy, which comes from a psychrometric chart using dry-bulb and wet-bulb
temperatures:

**Q (total, kW) = m (kg/s) x Δh (kJ/kg)**

Then:

**Latent duty = total duty − sensible duty**
**Sensible heat ratio (SHR) = sensible duty / total duty**

Typical comfort air conditioning runs an SHR around 0.7 to 0.85. A very high SHR
means the coil is barely dehumidifying — often because airflow is too high or the
coil is running too warm.

## Worked example 1 — a ducted air conditioning coil

*Measured airflow 850 L/s. Air on the coil 24 °C dry bulb, 17 °C wet bulb. Air
off the coil 13 °C dry bulb, 12 °C wet bulb.*

**Mass flow**

m = (850 / 1000) m³/s x 1.2 kg/m³ = **1.02 kg/s**

**Sensible duty**

ΔT = 24 − 13 = **11 K**
Q = 1.02 kg/s x 1.005 kJ/kg·K x 11 K = **11.28 kW**

By the shortcut: 1.2 x 850 x 11 / 1000 = **11.22 kW**. The two differ by half a
per cent, which is far inside the accuracy of any site airflow measurement.

**Total duty**

From a psychrometric chart, 24 °C DB / 17 °C WB has an enthalpy of about
**47.6 kJ/kg**, and 13 °C DB / 12 °C WB about **34.1 kJ/kg**.

Δh = 47.6 − 34.1 = **13.5 kJ/kg**
Q (total) = 1.02 kg/s x 13.5 kJ/kg = **13.8 kW**

**Latent duty and SHR**

Latent = 13.8 − 11.3 = **2.5 kW**
SHR = 11.3 / 13.8 = **0.82**

**Reading the result:** 13.8 kW total from a machine rated around 14 kW is a
healthy result. The SHR of 0.82 is at the dry end of normal, which fits the
airflow: 850 L/s for 13.8 kW is about 62 L/s per kW, a generous airflow that
gives good sensible cooling and less dehumidification. That is a coherent story,
and coherence is what tells you the measurements are believable.

## Worked example 2 — a coolroom evaporator, with the density correction

*Airflow across the coil 1400 L/s. Air on 2 °C, air off −3.5 °C.*

ΔT = 2 − (−3.5) = **5.5 K**

Using the standard 1.2 kg/m³:
Q = 1.2 x 1400 x 5.5 / 1000 = **9.29 kW**

Using the density of air at 2 °C, about **1.28 kg/m³**:
m = 1.4 m³/s x 1.28 = **1.792 kg/s**
Q = 1.792 x 1.005 x 5.5 = **9.91 kW**

The correction is worth **0.6 kW**, about 7% — enough to matter when you are
comparing a measured duty against a selection. Below 0 °C the coil is frosting
rather than draining, so the latent component is small and the sensible figure is
close to the total.

## Worked example 3 — the calculation run backwards

*A room needs 14 kW of sensible cooling and the design supply air temperature
gives a 10 K drop across the coil. What airflow is required?*

Rearrange the shortcut for airflow:

**airflow (L/s) = Q (W) / (1.2 x ΔT)**

airflow = 14 000 W / (1.2 x 10) = 14 000 / 12 = **1167 L/s**

Check by substituting back: 1.2 x 1167 x 10 / 1000 = **14.0 kW**. Correct.

Sanity check against the rule of thumb: comfort air conditioning generally runs
around **50 to 60 L/s per kW** of total capacity. At 1167 L/s and roughly 17 kW
total (14 kW sensible at an SHR of about 0.8) that is 69 L/s per kW — a bit
generous, consistent with the fairly small 10 K drop specified. If the answer had
come out at 5 L/s per kW or 500 L/s per kW you would know immediately that
something had gone wrong.

## Measuring the air in the first place

| Instrument | Where it is used | Watch out for |
|---|---|---|
| Rotating vane anemometer | Across a grille or a coil face | Needs a proper traverse of many points and a stated free area |
| Hot-wire anemometer | In a duct through test holes | Very sensitive to probe angle and to being in a straight run of duct |
| Pitot-static tube and manometer | In a duct, the reference method | Requires a full traverse and a straight run each side |
| Flow hood (balometer) | Over a diffuser or return grille | The quickest reading on site, but needs the hood sealed against the ceiling |

>! Take air-off dry bulb where the air is actually mixed, not in the first few
>! hundred millimetres past a wet coil. A probe sitting in the drift off a wet
>! fin reads water temperature, not air temperature, and it will make a healthy
>! machine look like it is over-performing. Take several points and average them,
>! and let the readings settle before you write anything down.

## What to remember

- Q = m x cp x ΔT, with cp for air about 1.005 kJ/kg·K.
- Site shortcut: Q (kW) = 1.2 x L/s x ΔT / 1000.
- Airflow required = Q (W) / (1.2 x ΔT).
- Dry bulb gives sensible duty only; total duty needs enthalpy from wet bulb as well.
- Correct the density for cold air on refrigeration coils — it is worth 5 to 10 per cent.
- Sanity check with 50 to 60 L/s per kW for comfort air conditioning.

### Practice — work it out before opening the model answer

A fan coil unit moves 620 L/s of air. The air enters the coil at 25 °C dry bulb
and leaves at 12.5 °C dry bulb. Calculate the sensible cooling duty in kW, and
state clearly what your answer does and does not include.

>? **Temperature change**
>?
>? ΔT = 25 °C − 12.5 °C = **12.5 K**
>?
>? **Sensible duty, by the shortcut**
>?
>? Q = 1.2 x airflow (L/s) x ΔT / 1000
>? Q = 1.2 x 620 x 12.5 / 1000 = **9.3 kW**
>?
>? **The same thing the long way, as a check**
>?
>? m = (620 / 1000) x 1.2 = **0.744 kg/s**
>? Q = 0.744 x 1.005 x 12.5 = **9.35 kW**. Agrees to within half a per cent.
>?
>? **What the answer includes and excludes**
>?
>? This is the **sensible** duty only — the heat removed in lowering the dry-bulb
>? temperature of the air. It does **not** include the latent heat removed as
>? moisture condenses on the coil. A coil dropping air from 25 °C to 12.5 °C is
>? almost certainly running below the dewpoint of the entering air and therefore
>? doing latent work as well, so the **total** duty is higher than 9.3 kW —
>? typically 15 to 30 per cent higher at a normal SHR.
>?
>? To find the total duty you would need wet-bulb temperatures on and off the
>? coil, read the enthalpy of each condition from a psychrometric chart, and use
>? Q = m x Δh.

### Practice

A zone requires 6.5 kW of sensible cooling. The design supply air is to be 9 K
colder than the room. Calculate the airflow needed in L/s, and check your answer
against the usual rule of thumb.

>? **Rearrange for airflow**
>?
>? Q (kW) = 1.2 x airflow (L/s) x ΔT / 1000
>? so airflow (L/s) = Q (W) / (1.2 x ΔT)
>?
>? **Substitute**
>?
>? airflow = 6500 W / (1.2 x 9) = 6500 / 10.8 = **601.9 L/s**, call it
>? **600 L/s**
>?
>? **Check by substituting back**
>?
>? Q = 1.2 x 602 x 9 / 1000 = **6.50 kW**. Correct.
>?
>? **Rule-of-thumb check**
>?
>? If the sensible duty is 6.5 kW at a typical SHR of about 0.8, the total duty
>? is roughly 6.5 / 0.8 = 8.1 kW. That gives 602 / 8.1 = about **74 L/s per kW**,
>? which is on the generous side of the usual 50 to 60 L/s per kW — exactly what
>? you would expect from specifying a small 9 K drop. A smaller temperature
>? difference always demands more air to shift the same heat.
>?
>? If the client wanted less air (quieter, smaller ducts), the answer is to
>? design for a bigger ΔT: at 12 K the same duty needs 6500 / (1.2 x 12) =
>? **451 L/s**, a quarter less air.

### Practice

A ducted system is measured at 900 L/s with air on the coil at 27 °C DB / 19 °C
WB and air off at 14 °C DB / 13 °C WB. Enthalpies from the psychrometric chart
are 53.8 kJ/kg on and 36.6 kJ/kg off. Calculate the sensible duty, the total
duty, the latent duty and the sensible heat ratio, and comment on the result.

>? **Mass flow**
>?
>? m = (900 / 1000) m³/s x 1.2 kg/m³ = **1.08 kg/s**
>?
>? **Sensible duty**
>?
>? ΔT = 27 − 14 = **13 K**
>? Q (sensible) = 1.2 x 900 x 13 / 1000 = **14.04 kW**
>? (long form: 1.08 x 1.005 x 13 = 14.11 kW — same answer within measurement
>? accuracy)
>?
>? **Total duty**
>?
>? Δh = 53.8 − 36.6 = **17.2 kJ/kg**
>? Q (total) = 1.08 kg/s x 17.2 kJ/kg = **18.58 kW**, call it **18.6 kW**
>?
>? **Latent duty**
>?
>? Latent = total − sensible = 18.58 − 14.04 = **4.54 kW**
>?
>? **Sensible heat ratio**
>?
>? SHR = 14.04 / 18.58 = **0.76**
>?
>? **Comment**
>?
>? An SHR of 0.76 sits squarely in the normal 0.7 to 0.85 band for comfort air
>? conditioning, so the coil is doing a sensible amount of dehumidification
>? alongside its cooling — about a quarter of its work is latent. The airflow of
>? 900 L/s for 18.6 kW total is 48 L/s per kW, just under the usual 50 to 60,
>? which is consistent with a coil running slightly wet and producing decent
>? moisture removal. The three figures agree with one another, which is the best
>? evidence you have that the measurements are sound.
`,
          quiz: [
            {
              q: "A coil moves 500 L/s of air and drops it by 10 K. The sensible duty is approximately:",
              options: [
                "5 kW",
                "6 kW",
                "60 kW",
                "0.6 kW",
              ],
              answer: 1,
              explain: "Using Q = 1.2 x L/s x ΔT / 1000 = 1.2 x 500 x 10 / 1000 = 6 kW. Answering 5 kW forgets the 1.2 density factor, and the 60 kW and 0.6 kW answers are the classic factor-of-ten slips — a quick check against 50 to 60 L/s per kW would eliminate both instantly.",
            },
            {
              q: "You measure only dry-bulb temperatures across a wet cooling coil. Your calculated duty is:",
              options: [
                "The total duty, because dry bulb captures all the heat removed",
                "The sensible duty only — the latent heat removed as moisture condenses is not included, so the true total is higher",
                "The latent duty only",
                "Meaningless, because duty cannot be found from air measurements",
              ],
              answer: 1,
              explain: "Dry-bulb temperature responds only to sensible heat. The heat removed in condensing water vapour on the fins does not change the dry-bulb reading at all, so it is invisible to that calculation. Total duty needs enthalpy, which means wet-bulb readings on and off the coil and a psychrometric chart, then Q = m x Δh.",
            },
            {
              q: "For the same duty, halving the design temperature drop across a coil means the required airflow:",
              options: [
                "Halves",
                "Doubles",
                "Stays the same",
                "Falls by a quarter",
              ],
              answer: 1,
              explain: "Airflow = Q / (1.2 x ΔT), so airflow is inversely proportional to ΔT — halve the temperature difference and you need twice the air to move the same heat. This is the trade-off behind every duct design: a small ΔT means gentler, quieter supply air but bigger ducts, bigger fans and more fan power.",
            },
            {
              q: "Calculating a coolroom evaporator duty using an air density of 1.2 kg/m³ rather than the density at the actual 0 °C air-on temperature will:",
              options: [
                "Overstate the duty by about 7 per cent",
                "Understate the duty by roughly 5 to 10 per cent, because cold air is denser than 1.2 kg/m³",
                "Make no measurable difference",
                "Understate the duty by a factor of two",
              ],
              answer: 1,
              explain: "Air at 0 °C has a density near 1.29 kg/m³, about 7 per cent more than the 1.2 kg/m³ value used for comfort conditions. More mass per litre means more heat carried per litre, so using 1.2 understates the duty. It is not a large error but it is systematic, and it matters when you are checking a measured duty against a manufacturer's selection.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "water-side-duty-and-input",
          title: "Water-side duty, electrical input, and putting them together",
          minutes: 14,
          simple: "Water carries about four times as much heat per kilogram per degree as air does, so a chiller's duty comes from the litres per second flowing through it and how much the water temperature changes. The electrical input comes from volts, amps and power factor. Divide the heat you moved by the electricity you paid for and you have the machine's efficiency.",
          refs: REFS,
          content: `
Chillers, water-cooled condensers, heat-recovery coils and hydronic plant are all
judged the same way: how much heat is the water carrying, and how much electricity
did it cost to move it. The two calculations are simple on their own, and putting
them together gives you the one number an owner actually cares about — the COP.

## Water-side duty

**Q = m x cp x ΔT**

Same equation as the air side, with two convenient differences:

- The specific heat capacity of water is about **4.18 kJ/kg·K**, roughly four times that of air.
- The density of water is about 1 kg/L, so **flow in litres per second is numerically the same as mass flow in kilograms per second**. No density conversion.

So for water:

**Q (kW) = flow (L/s) x 4.18 x ΔT (K)**

Where the circuit runs a glycol mix, the specific heat capacity drops — a 30%
propylene glycol solution is nearer 3.8 kJ/kg·K — and the density rises slightly.
If a question gives you a glycol percentage, it wants you to use the fluid's
figures, not water's, and to say so.

## Worked example 1 — a chiller evaporator

*Chilled water flow 3.6 L/s, entering the evaporator at 12 °C and leaving at
7 °C.*

ΔT = 12 − 7 = **5 K**
Q = 3.6 L/s x 4.18 kJ/kg·K x 5 K = **75.24 kW**

Note that a 5 K rise across the evaporator, with 7 °C flow and 12 °C return, is
the standard design condition for a comfort chilled-water system. Seeing those
numbers should feel familiar; seeing a 1 K difference should immediately make you
suspect the flow is far higher than design or the machine is barely loaded.

## Electrical input power

| Supply | Real power | Notes |
|---|---|---|
| Single phase | **P = V x I x PF** | 230 V nominal |
| Three phase | **P = 1.732 x V x I x PF** | 1.732 is the square root of 3; V is the line-to-line voltage and I the line current |
| Resistive load (heater) | **P = V x I** | Power factor is 1, so it drops out |

Power factor is the fraction of the apparent power that does real work. Motors
draw magnetising current that contributes to the amps but not to the output, so
their power factor is below 1 — typically 0.8 to 0.9 for a loaded compressor
motor, and lower still at part load. Apparent power (kVA) is the same expression
without the PF term; **PF = kW / kVA**.

The nominal three-phase supply under AS/NZS 60038 is 400 V, though many
Australian sites still measure close to 415 V. Use the voltage the question gives
you, or the one you actually measured, and write it down.

## Worked example 2 — the compressor input

*The chiller in Example 1 has a three-phase compressor. Measured line voltage
415 V, line current 32 A, power factor 0.85.*

P = 1.732 x 415 V x 32 A x 0.85
P = 1.732 x 415 = 718.8; 718.8 x 32 = 23 001; 23 001 x 0.85 = **19 551 W**
**P = 19.55 kW**

Do the multiplication in stages and write each stage down. A single-line
calculator entry that comes out wrong earns nothing, while a staged calculation
with one slip still earns method marks.

## Putting them together — COP and EER

**COP (coefficient of performance) = useful heat moved / power input**, both in
the same units, so the answer has no units at all.

COP = 75.24 kW / 19.55 kW = **3.85**

The machine moves 3.85 kW of heat for every 1 kW of electricity it consumes. That
is not a violation of anything — the compressor is not creating the heat, it is
*pumping* it from a cold place to a warm one, and the electricity pays for the
pumping.

**EER (energy efficiency ratio)** expressed in kW/kW is numerically the same as
the COP: **3.85**. Where an older data sheet quotes EER in Btu/h per watt,
multiply the COP by 3.412:

EER = 3.85 x 3.412 = **13.1 Btu/h per W**

Typical values worth knowing as sanity checks:

| Machine | Typical cooling COP |
|---|---|
| Air-cooled packaged air conditioner | 2.8 to 3.6 |
| Water-cooled chiller, full load | 4.5 to 6.5 |
| Low-temperature freezer plant | 1.2 to 2.0 |
| Reverse-cycle heat pump, heating mode, mild ambient | 3.5 to 5.0 |

A calculated COP of 0.4 or of 40 is an arithmetic error, not a discovery.

## The heat balance — a free check on all of it

Everything the evaporator absorbs, plus everything the compressor put in, has to
leave through the condenser:

**Heat rejection = evaporator duty + compressor input**
Heat rejection = 75.24 + 19.55 = **94.8 kW**

*Condenser water on the same machine is measured at 5.0 L/s, entering at 30.0 °C
and leaving at 34.5 °C.*

ΔT = 4.5 K
Q = 5.0 x 4.18 x 4.5 = **94.05 kW**

94.05 kW measured against 94.8 kW predicted — under one per cent apart. That
agreement is worth more than either number on its own: it says the flows, the
temperature probes and the electrical reading are all telling the same story. If
the two had differed by thirty per cent you would go looking for a wrong flow
rate or a probe in the wrong pocket before you drew any conclusion about the
machine.

## Single-phase inputs on the same plant

*Condenser fan: 230 V, measured 3.4 A, power factor 0.78.*
P = 230 x 3.4 x 0.78 = **610 W = 0.61 kW**

*Defrost heater bank: 230 V, measured 12 A, resistive so PF = 1.*
P = 230 x 12 x 1 = **2760 W = 2.76 kW**

Notice that the heater and the fan are treated differently for one reason only:
the heater has no power factor to allow for. Applying a power factor to a
resistive load understates its power; ignoring power factor on a motor overstates
it.

>! A clamp meter on one phase gives you one phase's current. The three-phase
>! formula assumes a balanced load, so measure all three and use the average —
>! and if they differ by more than about 5 per cent, stop and investigate before
>! calculating anything. Unbalanced phase currents on a three-phase motor mean a
>! supply problem or a winding problem, and both will destroy the motor long
>! before efficiency becomes the issue.

## What to remember

- Water duty: Q (kW) = L/s x 4.18 x ΔT. Litres per second equals kilograms per second for water.
- Glycol lowers the specific heat capacity — use the fluid's figure and state it.
- Single phase: P = V x I x PF. Three phase: P = 1.732 x V x I x PF.
- Heaters have a power factor of 1; motors do not.
- COP = duty / input, dimensionless. EER in kW/kW is the same number; x 3.412 for Btu/h per W.
- Heat rejected = duty + input. Use it to check that your measurements agree with each other.

### Practice — work it out before opening the model answer

A water-cooled condenser is measured with 2.4 L/s of condenser water entering at
29 °C and leaving at 35 °C. Calculate the heat rejection in kW, and state what
you would expect the evaporator duty to be if the compressor input is 12 kW.

>? **Temperature rise**
>?
>? ΔT = 35 °C − 29 °C = **6 K**
>?
>? **Heat rejection**
>?
>? Q = flow x 4.18 x ΔT
>? Q = 2.4 L/s x 4.18 kJ/kg·K x 6 K = **60.2 kW**
>?
>? **Expected evaporator duty**
>?
>? Everything the condenser rejects came from the evaporator plus the compressor:
>?
>? heat rejection = evaporator duty + compressor input
>? 60.2 = duty + 12
>? duty = 60.2 − 12 = **48.2 kW**
>?
>? So this machine should be producing about **48 kW** of cooling. If a
>? measurement on the chilled water side gave 48 to 49 kW, all three measurements
>? corroborate one another and you can trust them. If the chilled water side gave
>? 30 kW, something is wrong with a flow reading or a temperature probe and that
>? needs resolving before any judgement is made about the plant.
>?
>? A quick efficiency check while you are there: COP = 48.2 / 12 = **4.0**, which
>? is a plausible figure for a water-cooled machine.

### Practice

A three-phase compressor is measured at 415 V line-to-line, drawing an average of
18.5 A per phase at a power factor of 0.88. The chiller it drives is producing
42 kW of cooling. Calculate the electrical input power and the COP, showing your
workings in stages.

>? **Input power**
>?
>? P = 1.732 x V x I x PF
>? P = 1.732 x 415 x 18.5 x 0.88
>?
>? Stage by stage:
>? 1.732 x 415 = **718.8**
>? 718.8 x 18.5 = **13 298**
>? 13 298 x 0.88 = **11 702 W**
>?
>? **P = 11.70 kW**
>?
>? **COP**
>?
>? COP = duty / input = 42 kW / 11.70 kW = **3.59**
>?
>? **Sanity check**
>?
>? A COP of 3.6 is entirely plausible for a compressor on a chilled-water or
>? air-cooled package. Had the answer come out at 36, the likely cause would be
>? treating the 11 702 as kilowatts instead of watts; had it come out at 0.36,
>? the division is upside down. Both errors are caught in two seconds by asking
>? "does this machine move about three or four times as much heat as it consumes
>? in electricity?"
>?
>? Present it as: formula, substitution, staged arithmetic, answer with units.
>? That is what "show all workings" means, and it is what earns method marks even
>? if a keystroke goes astray.

### Practice

The same machine — 42 kW of cooling, compressor input 11.70 kW — also runs two
condenser fans drawing 0.61 kW each and an evaporator fan drawing 0.85 kW.
Calculate the total electrical input and the system COP, and explain why it
differs from the compressor COP of 3.59 and which figure should be quoted to a
client.

>? **Total electrical input**
>?
>? Compressor: **11.70 kW**
>? Condenser fans: 2 x 0.61 = **1.22 kW**
>? Evaporator fan: **0.85 kW**
>?
>? Total input = 11.70 + 1.22 + 0.85 = **13.77 kW**
>?
>? **System COP**
>?
>? COP = 42 kW / 13.77 kW = **3.05**
>?
>? **Why it differs**
>?
>? The compressor COP of 3.59 counts only the compressor's electricity. The
>? auxiliaries — 2.07 kW of fans — are just as real on the electricity bill, and
>? including them drops the figure by about 15 per cent. Nothing has changed about
>? the machine; only the boundary drawn around it has.
>?
>? This is why published efficiency figures always state what is included. A
>? compressor-only COP will always look better than a whole-of-unit figure, and a
>? whole-of-unit figure will look better than a seasonal figure that also accounts
>? for part-load operation, cycling and defrosts.
>?
>? **Which figure to quote**
>?
>? Quote the **system COP of 3.05** to a client, and say what it includes. It is
>? the number that corresponds to what they will actually pay. Quote the
>? compressor COP only when you are comparing compressors or diagnosing the
>? refrigeration circuit in isolation, and label it clearly as such. Quoting a
>? compressor-only figure as if it were the machine's efficiency is, at best,
>? misleading — and the client will find out when the bill arrives.
`,
          quiz: [
            {
              q: "Chilled water flows at 4.0 L/s and rises from 6 °C to 12 °C across a chiller evaporator. The duty is:",
              options: [
                "24 kW",
                "100.3 kW",
                "16.7 kW",
                "418 kW",
              ],
              answer: 1,
              explain: "Q = flow x 4.18 x ΔT = 4.0 x 4.18 x 6 = 100.3 kW. Answering 24 kW forgets the specific heat capacity of water altogether, which is the whole point of the calculation. For water, litres per second and kilograms per second are the same number, so no density conversion is needed.",
            },
            {
              q: "A three-phase motor measures 400 V, 25 A per phase, power factor 0.86. Its real input power is:",
              options: [
                "10.0 kW",
                "8.6 kW",
                "14.9 kW",
                "17.3 kW",
              ],
              answer: 2,
              explain: "P = 1.732 x 400 x 25 x 0.86 = 14 895 W, so 14.9 kW. Answering 8.6 kW uses the single-phase formula and drops the root-three factor; 10 kW forgets power factor as well. The root three is what accounts for three phases sharing the load with a 120-degree phase displacement, and leaving it out understates a three-phase input by nearly half.",
            },
            {
              q: "A packaged unit removes 28 kW of heat while drawing 9 kW. Its COP is:",
              options: [
                "0.32",
                "3.11",
                "252",
                "3.11 kW",
              ],
              answer: 1,
              explain: "COP = useful heat moved / power input = 28 / 9 = 3.11, and it is dimensionless because both quantities are in kilowatts — quoting it in kW is wrong. Inverting the division gives 0.32, which would suggest the machine takes three kilowatts to move one, and a COP below 1 for a cooling machine is a signal to check the arithmetic.",
            },
            {
              q: "You calculate an evaporator duty of 75 kW and a compressor input of 20 kW, then measure the condenser water side and get 60 kW of heat rejection. The right conclusion is:",
              options: [
                "The machine is 35 kW more efficient than expected",
                "The measurements disagree — rejection should be about 95 kW, so a flow rate or a temperature reading is wrong and must be resolved before drawing conclusions",
                "The missing 35 kW is radiated from the pipework",
                "The compressor input should be subtracted, not added",
              ],
              answer: 1,
              explain: "Heat rejected must equal the heat absorbed plus the work put in, so about 95 kW. A 35 kW discrepancy is far too big to be casing losses, which amount to a fraction of a per cent. The heat balance is a check on your instruments, and when it fails the correct response is to find the faulty measurement, not to invent physics that explains it away.",
            },
          ],
        },

        /* ================================================================ */
        {
          id: "checking-an-answer",
          title: "Checking an answer for sense",
          minutes: 13,
          simple: "The last thirty seconds of a calculation are the most valuable ones. Look at your answer and ask whether a real machine could behave like that. Are the units right? Is it about the size you expected? Does it need a hundred added or taken off for gauge pressure? Most marks lost in a calculation are lost to a slipped decimal point that a moment's thought would have caught.",
          refs: REFS,
          content: `
Every calculation in this module can be done correctly and still produce a wrong
answer, because a keystroke went astray, a unit was dropped, or a gauge pressure
was fed into a table of absolute pressures. The difference between a technician
who catches those and one who does not is not arithmetic ability. It is the habit
of spending thirty seconds at the end asking whether the answer could possibly be
true.

In an assessment, that habit converts a lost mark into a kept one. In the field
it stops you fitting a 32 A breaker to a 15 A load, venting refrigerant that
would have fitted in the cylinder, or opening a TX valve that was already set
correctly.

## The five checks

**1. Units.** Every number on the page carries a unit, and the units have to
survive the arithmetic. Watts divided by volts gives amps. Kilowatts divided by
kilowatts gives a bare number, which is why a COP has no unit. If the units of
your answer do not match the units the question asked for, you have made an
error, not a discovery.

**2. Order of magnitude.** Compare against a benchmark you know. This is the
single most powerful check and it needs no calculator.

| Quantity | Benchmark worth memorising |
|---|---|
| Current of a resistive load at 230 V | About **4.3 A per kW**, so a 2.4 kW heater draws about 10 A |
| Comfort air conditioning airflow | **50 to 60 L/s per kW** of total capacity |
| Air-side duty | About **1.2 W per L/s per kelvin** |
| Water-side duty | About **4.2 kW per L/s per kelvin** |
| Cooling COP | **2.5 to 4** for packaged plant, up to about **6** for a good water-cooled chiller |
| TX valve superheat | **4 to 8 K** at the bulb |
| Subcooling at the condenser outlet | **4 to 8 K** |
| Air-cooled condenser split | Condensing about **8 to 15 K** above ambient |
| Crankcase heater | Tens of watts, never kilowatts |
| Recovery cylinder at its limit | **60 to 75 kg** gross for common sizes |

**3. Gauge or absolute.** Any calculation that turns a pressure into a
temperature, or a temperature into a pressure, has this trap in it. Write "(a)"
or "(g)" beside every pressure, and remember that the correction is 101.3 kPa —
trivial next to a discharge pressure and enormous next to a low-side one.

**4. Sign and direction.** Superheat and subcooling are always positive on a
running machine. A saturated suction temperature is always below the air-on
temperature. A condensing temperature is always above ambient. Additional charge
for a run shorter than the base length is zero, not negative. A negative answer
where none is possible means recheck, not report.

**5. A second route to the same number.** Wherever a relationship can be
rearranged, do it. P = V x I checked against P = V squared / R. An air-side duty
checked against 50 to 60 L/s per kW. An evaporator duty checked against the
condenser heat balance. Two independent routes agreeing is the strongest evidence
you can put on a page.

## The factor-of-ten traps

| Confusion | Factor | Where it bites |
|---|---|---|
| Grams and kilograms | 1000 | Additional charge, cylinder contents |
| Watts and kilowatts | 1000 | Every duty and input calculation |
| L/s and m³/s | 1000 | Air-side duty |
| kPa and bar | 100 | Every PT chart lookup |
| kPa and MPa | 1000 | Manufacturers' data sheets, which often use MPa |
| Gauge and absolute | 101.3 kPa | Suction pressure, superheat, evacuation |

Two of these are not powers of ten at all, which is exactly why they are so
dangerous: 1 bar is 100 kPa, and the gauge correction is 101.3 kPa. The numbers
are close enough to look interchangeable and far enough apart to ruin an answer.

## Spot the error — four worked cases

**Case 1.** *A candidate calculates the current of a 230 V, 19.2 ohm defrost
element as I = V x R = 230 x 19.2 = 4416 A.*

The formula is wrong: current is voltage **divided by** resistance. But you do
not need to spot that to know the answer is nonsense. 4416 A is more than a
suburban street draws. No cable in a coolroom carries it and no circuit breaker
would survive it. Correct: I = 230 / 19.2 = **12.0 A**, which is a believable
number for a defrost element.

**Case 2.** *An installer calculates the additional charge for 14.5 m of extra
pipe at 20 g/m and writes "290 kg".*

14.5 x 20 = 290, but the rate was in **grams** per metre, so the answer is 290 g
= **0.29 kg**. 290 kg of refrigerant is about six full recovery cylinders, would
cost more than the air conditioner, and would not fit in the pipe. The unit was
carried wrongly, not the arithmetic.

**Case 3.** *On an R404A system the suction gauge reads 267 kPa. A candidate
enters 2.67 bar straight into a table of absolute pressures, reads a saturated
suction temperature of about −23.5 °C, and with an evaporator outlet at 0 °C
reports 23.5 K of superheat.*

The gauge reads gauge pressure. Absolute = 267 + 101.3 = 368 kPa(a) = 3.68 bar(a),
which is **−15 °C** saturated, giving a superheat of 0 − (−15) = **15 K**.

The error is **8.5 K**, and it is not harmless. 15 K says the coil is starved and
needs investigating; 23.5 K says it is severely starved and invites a dramatic
response. The candidate would open the valve far too far, and the machine would
flood back.

**Case 4.** *A chiller moves 75.24 kW with a compressor input of 19 551 W. A
candidate divides 75.24 by 1.955 and reports a COP of 38.5.*

A COP of 38.5 would mean 1 kW of electricity moving 38 kW of heat. No vapour
compression machine comes within a factor of six of that. The decimal point moved
when the watts were converted: 19 551 W is **19.55 kW**, not 1.955 kW.
COP = 75.24 / 19.55 = **3.85**, which sits exactly where a chiller should.

## Exam technique that actually earns marks

**"Show all workings" is marked on four things:** the formula you chose, the
substitution of the given values into it, the arithmetic, and the answer with its
unit. Three of those four survive a wrong keystroke. A bare number on the page
gets one mark or none; a fully set-out calculation with one slip usually keeps
most of them.

- **Write the formula first**, before you touch the calculator, even for something as familiar as Ohm's law.
- **Substitute with units attached**, then do the arithmetic in stages you can see.
- **State your data source** — "R404A PT chart", "air density 1.2 kg/m³ at 20 °C", "manufacturer's rate of 20 g/m". This shows the value did not come from nowhere.
- **State assumptions where the question leaves a gap** — "TD not given; a 6 K TD assumed for a general coolroom at 85% RH". An assumption stated is a mark; an assumption hidden is a guess.
- **Give the answer with its unit** and, where it helps, in the unit the question asked for: kW as well as W, kg as well as g.
- **Do not round hard in the middle.** Carry a couple of extra figures through and round only the final answer. Rounding 11.979 to 12 early is harmless; rounding 0.2421 to 0.2 is not.
- **Answer the question that was asked.** If it says list four, give four — a fifth item cannot earn a mark and a padded answer costs you time you need elsewhere.
- **Leave the wrong working visible.** If you change your mind, rule a single line through it. Crossed-out work is still marked if the replacement is incomplete; scribbled-out work is not.

>! In the field, an unchecked number does not just cost a mark. Fitting a
>! protective device sized from a wrong current calculation leaves a cable
>! unprotected. Charging to a wrongly converted pressure leaves a compressor
>! flooding. Filling a cylinder past a limit you calculated wrongly puts a
>! pressure vessel in your vehicle. Take the thirty seconds.

## What to remember

- Check units, magnitude, gauge versus absolute, sign, and a second route.
- Memorise a handful of benchmarks; they do most of the checking for you.
- 1 bar is 100 kPa; the gauge correction is 101.3 kPa. They are not the same thing.
- A negative superheat, a COP of 38 or a 4000 A heater is an error, not a finding.
- Set the working out so that a slip costs one mark instead of all of them.
- State assumptions and data sources — they are marks lying on the table.

### Practice — work it out before opening the model answer

A candidate is asked for the COP of a chiller producing 68 kW of cooling with a
measured compressor input of 17 800 W. The answer submitted is "COP = 3.82 kW".
Identify every fault in that answer and give the correct one, fully set out.

>? **Fault 1 — the unit.**
>?
>? COP is **dimensionless**. It is kilowatts of heat moved divided by kilowatts of
>? electricity consumed, and the units cancel. Writing "3.82 kW" shows the
>? candidate does not understand what the number is. There is no such thing as a
>? COP measured in kilowatts.
>?
>? **Fault 2 — the arithmetic.**
>?
>? 68 / 17.8 = 3.82 is correct **only if** the input was converted to kilowatts
>? first, and the answer as written suggests it was, so the number itself
>? survives. But the working does not show the conversion, so a marker cannot
>? tell whether the candidate converted 17 800 W to 17.8 kW deliberately or
>? divided by the wrong figure and got lucky. No visible conversion means no
>? method marks.
>?
>? **The correct answer, fully set out**
>?
>? Convert the input to the same units as the duty:
>? 17 800 W ÷ 1000 = **17.8 kW**
>?
>? COP = useful heat moved / power input
>? COP = 68 kW / 17.8 kW = **3.82** (dimensionless)
>?
>? **Sanity check:** 3.82 sits in the normal 2.5 to 6 range for a cooling
>? machine, so the answer is plausible. Had the candidate divided by 17 800
>? without converting, the answer would have been 0.0038 — a machine consuming
>? 260 times more energy than it moves, which is impossible and should have been
>? spotted immediately.

### Practice

An apprentice measures 990 kPa on the suction gauge of an R410A split system and
looks it up in a table headed "saturation pressure (absolute)". He reads
approximately 5 °C at 9.36 bar and 10 °C at 10.90 bar, decides 990 kPa is 9.90 bar
and so about 8 °C, and with a suction line temperature of 18 °C reports 10 K of
superheat. Find his error, calculate the correct superheat, and state the size and
the consequence of the mistake.

>? **The error**
>?
>? 990 kPa came off a **gauge**, so it is gauge pressure. The table is in
>? **absolute** pressure. He has fed one into the other without converting.
>?
>? **The correct calculation**
>?
>? Absolute pressure = 990 + 101.3 = **1091 kPa(a) = 10.91 bar(a)**
>? From the table, 10.90 bar(a) corresponds to **10 °C** saturated suction
>? temperature.
>? Superheat = measured − SST = 18 °C − 10 °C = **8 K**
>?
>? **The size of the mistake**
>?
>? He used a saturation temperature of about 8 °C instead of 10 °C, so his
>? superheat is 10 K where the true figure is **8 K** — an overstatement of
>? **2 K**.
>?
>? **The consequence**
>?
>? On this occasion the error is modest, because 101.3 kPa is a small fraction of
>? a 1000 kPa R410A suction pressure. Both 8 K and 10 K would be judged
>? acceptable, so no harm follows.
>?
>? That is exactly what makes the habit dangerous. The same mistake made on a
>? low-temperature system is catastrophic: on an R404A freezer running at
>? 150 kPa(g), treating the gauge reading as absolute puts the saturation
>? temperature roughly 10 K out and turns a healthy machine into an apparent
>? disaster or the reverse. **The correction is always 101.3 kPa; only its
>? significance changes.** Apply it every time and it can never catch you out.

### Practice

A 7.1 kW split system is measured at 340 L/s with a 8 K dry-bulb drop across the
indoor coil. The technician calculates the duty, gets 3.26 kW, and assumes he has
made an arithmetic mistake because the unit is rated at 7.1 kW. Check his
arithmetic, check whether the airflow is plausible, and state the correct
conclusion.

>? **Check the arithmetic**
>?
>? Q (sensible) = 1.2 x airflow (L/s) x ΔT / 1000
>? Q = 1.2 x 340 x 8 / 1000 = **3.26 kW**
>?
>? His arithmetic is **correct**.
>?
>? **Check the airflow is plausible**
>?
>? 340 L/s on a 7.1 kW unit is 340 / 7.1 = **48 L/s per kW**, which sits right in
>? the usual 50 to 60 L/s per kW band for comfort air conditioning. So the
>? airflow measurement is believable and is not the source of the discrepancy.
>?
>? **What the machine should be doing**
>?
>? At a typical sensible heat ratio of 0.8, a 7.1 kW unit should be producing
>? about 7.1 x 0.8 = **5.7 kW** of sensible cooling. At 340 L/s that would need a
>? temperature drop of
>?
>? ΔT = 5700 W / (1.2 x 340) = **13.9 K**
>?
>? He measured 8 K, a bit over half of that.
>?
>? **The correct conclusion**
>?
>? The calculation is right and the airflow is right, so **the machine is faulty**
>? — it is delivering roughly 57 per cent of its rated sensible capacity.
>?
>? This is the important limit of a sanity check: it tells you whether an answer
>? is *possible*, not whether it is what you hoped for. An answer that disagrees
>? with the nameplate is not automatically wrong. Having confirmed the arithmetic
>? and the measurement, the next step is diagnosis, not recalculation — put gauges
>? on it, calculate superheat and subcooling, and check the condenser, the filter
>? and the fan speed. A 43 per cent capacity shortfall with sound airflow points
>? straight at the refrigerant circuit.
`,
          quiz: [
            {
              q: "A candidate calculates that a 230 V defrost heater of 23 ohms draws 5290 A. The fastest way to know this is wrong is:",
              options: [
                "Recheck it on a different calculator",
                "Recognise that no coolroom circuit carries thousands of amps — the answer is impossible by inspection, and Ohm's law divides rather than multiplies",
                "Convert the answer to milliamps",
                "Assume the resistance was measured incorrectly",
              ],
              answer: 1,
              explain: "5290 is 230 multiplied by 23, so the formula was inverted. But you do not need to find the algebraic error to reject the answer: a domestic street does not draw thousands of amps, let alone one heating element. The correct answer is 230 / 23 = 10 A. Magnitude checks catch this class of error faster than re-doing the algebra.",
            },
            {
              q: "Which pair of conversions is most often confused, and why is it dangerous?",
              options: [
                "Watts and kilowatts, because the factor is 1000",
                "Bar to kPa (x 100) and gauge to absolute (+ 101.3 kPa), because the two numbers look similar but do completely different jobs",
                "Kelvin and degrees Celsius, because the factor is 273",
                "Litres and cubic metres, because the factor is 1000",
              ],
              answer: 1,
              explain: "1 bar is 100 kPa — a multiplication that changes the unit. Gauge to absolute is an addition of 101.3 kPa — a datum shift that changes what the number means. Because 100 and 101.3 are nearly the same figure, the two get muddled, and applying one where the other belongs corrupts every pressure-to-temperature lookup that follows.",
            },
            {
              q: "You calculate an air-side duty of 84 kW from a fan coil that moves 700 L/s with an 8 K drop. Before reporting it you should:",
              options: [
                "Report it, since the arithmetic used the correct formula",
                "Recheck: 1.2 x 700 x 8 / 1000 = 6.7 kW, and 84 kW would be about 8 L/s per kW, far outside the 50 to 60 L/s per kW benchmark",
                "Multiply by the sensible heat ratio to correct it",
                "Convert it to Btu/h",
              ],
              answer: 1,
              explain: "The correct answer is 6.7 kW; 84 kW is the result of dividing by 1000 in the wrong place or misplacing a decimal. The benchmark check is instant — 700 L/s could never carry 84 kW, because that would be about 8 L/s per kW against a normal 50 to 60. Applying an SHR would compound the error rather than reveal it.",
            },
            {
              q: "Your calculated duty disagrees with the equipment nameplate. The disciplined response is:",
              options: [
                "Adjust the calculation until it matches the nameplate",
                "Verify the arithmetic and the plausibility of each measurement; if both stand up, treat the shortfall as a genuine fault and start diagnosing",
                "Report the nameplate figure, since it is the manufacturer's",
                "Assume the instrument is faulty and stop",
              ],
              answer: 1,
              explain: "A sanity check establishes whether an answer is possible, not whether it is convenient. Once the arithmetic is confirmed and the inputs are shown to be plausible — airflow near the expected litres per second per kilowatt, temperatures taken in mixed air — a shortfall against the nameplate is information about the machine. Bending the calculation to match the badge is how genuine faults get signed off as healthy.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
