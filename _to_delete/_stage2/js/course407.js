/* =========================================================================
   Course content, module 407 — C.7 TX valves, superheat and operating
   conditions (capstone exam revision).
   Source: Australian Refrigeration and Air-conditioning Vol 1 (Boyle, AIRAH),
   refrigerant-control chapters; expansion valve manufacturers' application
   data; the Australia and New Zealand Refrigerant Handling Code of Practice.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority. Practice
   questions are original scenarios written for revision, not reproduced from
   any assessment paper.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — refrigerant controls and thermostatic expansion valves",
    "Expansion valve manufacturers' application data (Danfoss, Emerson/Alco, Sporlan) — superheat setting, bulb charges, bulb location, external equalisers and MOP",
    "Australia and New Zealand Refrigerant Handling Code of Practice (AIRAH) — gauge connection, recovery and charging when a metering device is worked on",
    "AS/NZS 5149.2 — Refrigerating systems and heat pumps: design, construction, installation and commissioning checks",
  ];

  const MODULES = [
    {
      id: "cap-txv-and-conditions",
      stream: "capstone",
      title: "C.7 · TX valves, superheat and operating conditions",
      blurb: "Capstone revision on the three pressures that balance a TX valve, measuring superheat correctly, the faults that shift it, adjusting and de-hunting a valve, and judging a system from field data.",
      lessons: [

        /* ============================================================== */
        {
          id: "three-pressures",
          title: "The three operational pressures acting on a TX valve",
          minutes: 12,
          simple: "A thermostatic expansion valve is settled by a tug-of-war between three pushes. One push comes from a little bulb strapped to the pipe leaving the evaporator and it opens the valve. The other two — the pressure inside the coil and a spring you can adjust — push it shut. When the pull one way equals the pull the other way, the valve stops moving and sits at whatever opening keeps the coil fed.",
          refs: REFS,
          content: `
Ask a capstone candidate to name the three operational pressures acting on a
thermostatic expansion valve and you separate the people who understand the
valve from the people who have only replaced one. It is a three-mark question
with three named answers and three stated functions, and it is worth being able
to write it out cold.

!FIG[txv-balance]

## The valve is a force balance, not a thermostat

A TX valve has a metal diaphragm with a pin and seat hanging off it. Anything
that pushes down on the top of that diaphragm opens the port. Anything that
pushes up on the underside of it, or up on the pin from below, closes the port.
The valve does not "decide" anything — it simply moves until the pushes cancel,
and it re-balances continuously as conditions change.

### Pressure 1 — bulb (power element) pressure: the OPENING force

The **sensing bulb** is clamped to the suction line at the evaporator outlet and
is joined to the space above the diaphragm by a capillary tube. Bulb, capillary
and the dome above the diaphragm are one sealed volume containing a charge of
fluid — the **power element**.

The bulb takes up the temperature of the pipe it is clamped to, so the charge
inside it sits at its own saturation pressure for that temperature. Warm the
suction line and bulb pressure rises; cool it and bulb pressure falls. That
pressure acts **downwards on the top of the diaphragm**, so it is the force that
**opens** the valve.

Its function in one sentence: bulb pressure reports the temperature of the
refrigerant leaving the coil and opens the valve to feed more liquid when that
temperature rises.

### Pressure 2 — evaporator (or equaliser) pressure: a CLOSING force

The pressure of the refrigerant in the evaporator is fed to the **underside of
the diaphragm**, so it acts **upwards** and **closes** the valve.

- On an **internally equalised** valve it is the pressure at the valve outlet, picked up through a drilling inside the valve body.
- On an **externally equalised** valve it is taken by a small tube from the suction line at the coil outlet, so the valve sees the true pressure at the end of the coil rather than at its own outlet.

Its function: evaporator pressure is the saturation-pressure half of the
superheat sum. Because it sits under the diaphragm, the valve is subtracting the
coil's saturated temperature from the bulb's actual temperature — and the
difference between them **is** superheat. That is why a TX valve controls
superheat and not temperature, pressure, or box conditions.

### Pressure 3 — superheat spring pressure: the adjustable CLOSING force

Under the pin sits a coil spring whose compression you can change with the
adjusting stem. It pushes **up** on the pin, so it **closes** the valve, and it
is the only one of the three you can set.

Its function: the spring sets how much superheat has to build before the bulb
can win. Wind the spring in and the bulb needs a warmer, more superheated
suction line before the valve opens — superheat setting goes up. Back it off and
superheat setting comes down.

## The balance equation

Write it this way and it is impossible to muddle:

**P bulb = P evaporator + P spring**

Opening force on the left, closing forces on the right. Rearranged, the spring
pressure equals the difference between bulb pressure and coil pressure — and
that pressure difference, converted back to temperature on the PT chart, is the
operating superheat.

| Pressure | Where it acts | Direction | Set by |
| Bulb / power element | Top of diaphragm | Opens | Suction line temperature at the bulb |
| Evaporator or external equaliser | Underside of diaphragm | Closes | Saturation pressure in the coil |
| Superheat spring | Under the pin | Closes | The adjusting stem — the technician |

## Static, opening and operating superheat

Manufacturers split the spring's job into two parts, and the terms come up:

- **Static superheat** — the superheat that must exist before the valve cracks off its seat at all. Typically factory-set around 4 K.
- **Opening superheat** — the extra superheat needed to drive the valve from just-cracked to its rated opening. Typically 2 to 3 K.
- **Operating superheat** — static plus opening. This is the number you measure in the field.

That is why nudging the stem changes the whole operating band, not just one
point on it.

>! Never wind a TX valve open to lift a low suction pressure without first
>! proving the charge, the subcooling and the liquid line. If the real fault is
>! an undercharge or a restriction, opening the valve does nothing while the
>! fault lasts — and floods the compressor the moment it is fixed.

## What to remember

- Three pressures: **bulb opens; evaporator/equaliser closes; spring closes**.
- Bulb pressure is a temperature signal; evaporator pressure is a saturation signal; the valve lives on the difference, which is superheat.
- The spring is the only adjustable one, and it sets the superheat band.
- An external equaliser changes *where* pressure 2 is measured, never *what* it does.
- Name all three with their functions — a list of three names without functions is a half-answered question.

## Written practice

**1.** A candidate writes: "The bulb pressure opens the valve and the spring
closes it." Marked out of three, what has been lost, and what would a full
answer add?

>? **Model answer**
>
> One of the three pressures is missing: evaporator pressure (or external
> equaliser pressure) acting on the underside of the diaphragm as the second
> closing force. A full answer names all three and gives each a function:
>
> - Bulb / power-element pressure — set by the suction-line temperature at the evaporator outlet, acts on top of the diaphragm, opens the valve to increase liquid feed.
> - Evaporator or equaliser pressure — the saturation pressure in the coil, acts under the diaphragm, closes the valve; it is what makes the valve subtract saturated temperature from actual temperature.
> - Superheat spring pressure — adjustable, acts under the pin, closes the valve and sets the superheat at which the balance is struck.
>
> It would also state the balance: bulb pressure equals evaporator pressure plus
> spring pressure.

**2.** Explain in your own words why a thermostatic expansion valve controls
superheat rather than evaporator temperature.

>? **Model answer**
>
> The valve compares two signals mechanically. The bulb reports the *actual*
> temperature of the refrigerant leaving the coil as a pressure on top of the
> diaphragm. The equaliser reports the *saturated* temperature of the coil as a
> pressure under the diaphragm. The valve moves on the difference between them,
> and the difference between actual and saturated temperature is the definition
> of superheat. Coil temperature itself never appears as a separate input, so
> the valve will hold the same superheat whether the coil is running at 2 °C or
> at minus 25 °C.

**3.** A service report says the spring on a valve was "wound in two full turns
to get the box down". Describe what that actually did to each of the three
pressures and to the coil.

>? **Model answer**
>
> Winding the stem in increases spring pressure only — bulb pressure and
> evaporator pressure are set by the system, not by the stem. The extra closing
> force means the bulb must reach a higher temperature (higher pressure) before
> the balance is restored, so the valve throttles and the operating superheat
> setting rises. The coil is fed less liquid, the last part of it dries out, the
> effective evaporator surface shrinks, capacity falls and the box takes longer
> to pull down, not less. Suction pressure typically falls further. The
> adjustment made the reported symptom worse.
`,
          quiz: [
            {
              q: "Which pressure acting on a TX valve is the opening force?",
              options: [
                "Evaporator pressure under the diaphragm",
                "Bulb / power-element pressure on top of the diaphragm",
                "Superheat spring pressure under the pin",
                "Condensing pressure at the valve inlet",
              ],
              answer: 1,
              explain: "Bulb pressure acts down on the diaphragm and opens the port. Evaporator pressure and spring pressure both close it. Condensing pressure at the inlet affects the valve's capacity but is not one of the three balancing pressures.",
            },
            {
              q: "Why does an external equaliser exist?",
              options: [
                "To add a fourth balancing pressure to the valve",
                "To move the point at which evaporator pressure is sensed to the coil outlet, so coil pressure drop is not counted as superheat",
                "To increase the opening force from the bulb",
                "To vent the power element if the bulb overheats",
              ],
              answer: 1,
              explain: "The external equaliser changes only where pressure 2 is picked up. On a coil with a distributor the valve outlet is at a much higher pressure than the coil outlet, so an internally equalised valve would sense the wrong saturation pressure and throttle hard. It does not add a pressure or alter the bulb's job.",
            },
            {
              q: "The balance a settled TX valve holds is best written as:",
              options: [
                "P spring = P bulb + P evaporator",
                "P evaporator = P bulb + P spring",
                "P bulb = P evaporator + P spring",
                "P bulb + P evaporator + P spring = 0",
              ],
              answer: 2,
              explain: "Opening force on one side, the two closing forces on the other. Rearranged, spring pressure is the difference between bulb and coil pressure, which converts on the PT chart to the operating superheat.",
            },
            {
              q: "Operating superheat is best described as:",
              options: [
                "Static superheat only",
                "Opening superheat only",
                "Static superheat plus opening superheat",
                "Total superheat measured at the compressor",
              ],
              answer: 2,
              explain: "Static superheat gets the pin off the seat; opening superheat drives the valve to its rated opening. Added together they are the operating superheat you measure at the bulb. Total superheat at the compressor is a different number because the suction line adds heat gain.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "measuring-superheat",
          title: "Measuring superheat: exactly where, exactly how",
          minutes: 12,
          simple: "Superheat is just two readings and one subtraction: how cold the refrigerant is boiling inside the pipe, and how warm the pipe actually is. If you take those two readings in the wrong places, or let the sun and the air get at your thermometer, the subtraction is meaningless — you end up adjusting a valve to fix a measurement error.",
          refs: REFS,
          content: `
Superheat is the number the whole TX valve conversation turns on, and the
capstone will ask for the method, not just the definition. Almost every wrong
superheat figure in the field comes from measuring in the wrong place or from
letting ambient air reach the temperature sensor.

!FIG[superheat-measure]

## Definition first

Superheat is the number of kelvin a vapour sits **above** the saturation
temperature corresponding to its own pressure. Once the last droplet in the coil
has boiled, any further heat added is sensible heat and the vapour temperature
climbs away from saturation. That climb is superheat, and its unit is K (a
temperature *difference*), not °C.

## The four things you must get right

### 1. Where the pressure is read

Use a pressure tapping **as close to the evaporator outlet as you can get** —
ideally the Schrader on the suction header, or the external equaliser tapping if
one is fitted with a tee.

If the only access is the compressor suction service valve, you are reading a
pressure that has already been reduced by suction line friction. On a long or
undersized suction line, or on a low-temperature system, that can be a whole
kelvin or more of saturation temperature, and it makes the calculated superheat
read **higher** than it really is at the bulb. Say so in your working; note the
tapping used.

### 2. Converting pressure to saturation temperature

Read the gauge, add nothing to it beyond your own care, and take the saturation
temperature off the PT chart or the gauge scale **for the actual refrigerant in
the system**. For a zeotropic blend with temperature glide, take the **dew
point** column — the coil outlet is where the last liquid disappears, and dew
point is the saturation temperature at that condition. Using the bubble point on
a glide refrigerant will overstate your superheat.

### 3. Where the temperature is read

Clamp the thermometer to the suction line **at the bulb, or immediately
downstream of it** — you want the same pipe temperature the valve is reacting
to. Then:

- Clean the pipe back to bright metal. Paint, oxide, oil film and lagging residue all lift the reading away from the true pipe temperature.
- Use a clamp or strap thermocouple with real metal-to-metal contact, not a probe held on by hand.
- Fit it on the side of the line, not on the bottom, for the same oil-film reason the bulb is not mounted at 6 o'clock.
- **Insulate the sensor and a short length of pipe either side of it** with closed-cell insulation. This is the step people skip. A suction line at minus 5 °C in a 32 °C plant room will drag your uninsulated sensor several kelvin warm, and every one of those kelvin is added to your superheat figure. You then wind the valve open to cure superheat that never existed, and flood the compressor.
- Let the reading settle. Thirty seconds is not settled; give it a few minutes and watch it stop moving.

### 4. The arithmetic

**Superheat (K) = measured suction line temperature (°C) − saturation
temperature at the measured pressure (°C)**

Show both readings, the conversion, and the subtraction. In a capstone paper
"show all workings" is marked on exactly that: the pressure, the saturation
temperature it converts to, the line temperature, and the subtraction with its
unit.

### Worked example — R404A cool room

- Suction pressure at the evaporator outlet: **340 kPa gauge**
- R404A dew point at 340 kPa gauge: **−10 °C**
- Suction line temperature at the bulb: **−3 °C**

Superheat = −3 − (−10) = **7 K**.

### Worked example — R134a chiller

- Suction pressure at the coil outlet: **190 kPa gauge**
- R134a saturation at 190 kPa gauge: **0 °C**
- Suction line temperature at the bulb: **6 °C**

Superheat = 6 − 0 = **6 K**.

## Subcooling — the companion reading

Take subcooling in the same visit, because superheat on its own cannot tell you
whether the valve or the charge is at fault.

!FIG[subcool-measure]

**Subcooling (K) = saturation temperature at discharge/liquid pressure (°C) −
measured liquid line temperature (°C)**

Read the liquid line temperature close to the condenser outlet (or at the valve
inlet if you are hunting a liquid-line restriction), insulated the same way.

### Worked example — R22 packaged unit

- Discharge pressure 1433 kPa gauge, R22 saturation **40 °C**
- Liquid line at the condenser outlet **33 °C**

Subcooling = 40 − 33 = **7 K** — a healthy solid column of liquid to the valve.

## Total superheat versus superheat at the bulb

| Reading | Taken where | Typical healthy value | What it tells you |
| Superheat at the bulb | Coil outlet pressure and temperature | 4–8 K, application dependent | Whether the valve is doing its job |
| Total superheat | Compressor suction service valve | Bulb value plus suction-line gain, commonly 10–20 K | Whether the compressor is getting dry, cool-enough gas |

A valve set correctly at the bulb can still deliver a compressor 30 K of total
superheat if the suction line lagging has fallen off. That is a suction-line
fault, not a valve fault, and the fix is insulation.

>! Gauge lines hold liquid refrigerant under pressure. Wear eye protection and
>! gloves, purge properly, and recover rather than vent — connecting and
>! disconnecting gauges is refrigerant handling work and sits under ARCtick.

## On the job

- Two readings, one subtraction — but the readings have to be honest.
- Pressure as close to the coil outlet as the system allows; note where you took it.
- Dew point for blends with glide.
- Clean pipe, clamped sensor, **insulated**, and given time to settle.
- Always take subcooling too; superheat alone will send you to the wrong fault.

## Written practice

**1.** A technician measures superheat on a small cool room with the suction
gauge on the compressor service valve and a bare clamp thermocouple on the
suction line at the evaporator, in a 34 °C plant room. Explain the direction of
error each of those two choices introduces, and what the technician is likely to
do wrong as a result.

>? **Model answer**
>
> Reading pressure at the compressor means the measured pressure is below the
> true coil-outlet pressure because of suction line pressure drop. A lower
> pressure converts to a lower saturation temperature, so the subtraction gives
> a **larger** superheat than the valve is actually seeing.
>
> A bare sensor in 34 °C air on a cold suction line is warmed by the surrounding
> air, so it reads the pipe **warmer** than it is — again inflating the
> superheat figure.
>
> Both errors push the same way. The technician concludes the valve is starving
> the coil and winds the superheat setting down. The valve is now actually set
> too low; on the next cold-start or defrost recovery the coil floods and liquid
> reaches the compressor.
>
> The fix: read pressure at or near the coil outlet (or allow for line drop and
> say so), clean the pipe, clamp the sensor, insulate it and let it settle.

**2.** A system is charged with a zeotropic blend that has about 6 K of glide.
Write the rule for which saturation column to use at the evaporator outlet, and
explain what happens to the calculated superheat if the wrong column is used.

>? **Model answer**
>
> Use the **dew point** column at the evaporator outlet, because dew point is
> the saturation temperature at the condition where the last liquid has just
> boiled away — which is exactly the point superheat is measured from. (At the
> condenser outlet, for subcooling, you use the bubble point for the same
> reason in reverse.)
>
> Bubble point is the *lower* temperature of the pair. Subtracting a lower
> saturation temperature from the same measured line temperature produces a
> larger answer, so using the bubble point overstates superheat — by roughly the
> glide, here about 6 K. A valve genuinely running 6 K would appear to be
> running 12 K, and adjusting on that figure would set it dangerously low.

**3.** Set out, as a numbered field procedure, the steps you would follow to
obtain a defensible superheat figure on a commercial DX coil.

>? **Model answer**
>
> 1. Confirm the refrigerant from the nameplate and have the correct PT data.
> 2. Let the system run and stabilise — at least 15 minutes at steady load, and not immediately after a defrost or a start-up.
> 3. Connect the gauge to a tapping as close to the evaporator outlet as available; note which tapping was used.
> 4. Clean the suction line at the bulb back to bright metal.
> 5. Clamp the temperature sensor to the side of the line at or just downstream of the bulb.
> 6. Insulate the sensor and a short length of pipe each side with closed-cell insulation.
> 7. Allow both readings to settle and stop drifting.
> 8. Convert the pressure to saturation temperature (dew point for a glide blend).
> 9. Subtract: superheat = line temperature − saturation temperature, answer in K.
> 10. Take subcooling at the liquid line in the same visit, and record air-on temperature and load conditions with the result.
`,
          quiz: [
            {
              q: "A clamp thermocouple on a cold suction line is left uninsulated in a warm plant room. What does the calculated superheat do?",
              options: [
                "Reads lower than the true value",
                "Reads higher than the true value",
                "Is unaffected, because the clamp is metal",
                "Becomes negative",
              ],
              answer: 1,
              explain: "Warm ambient air heats the exposed sensor, so the measured line temperature is too high. Subtracting the same saturation temperature from a higher line temperature gives an inflated superheat — and tempts you to set the valve too low.",
            },
            {
              q: "Superheat is calculated as:",
              options: [
                "Saturation temperature minus suction line temperature",
                "Suction line temperature minus saturation temperature at the measured pressure",
                "Discharge temperature minus condensing temperature",
                "Air-on temperature minus coil temperature",
              ],
              answer: 1,
              explain: "Superheat measures how far the vapour has risen above its own boiling point, so it is line temperature minus saturation temperature. Option A is the subcooling arithmetic with the terms reversed, and option D is evaporator TD.",
            },
            {
              q: "On a blend with significant temperature glide, which saturation value is used at the evaporator outlet?",
              options: ["Bubble point", "Dew point", "The mean of bubble and dew", "Critical temperature"],
              answer: 1,
              explain: "Dew point is the temperature at which the last liquid has just vaporised, which is where superheat begins. Using bubble point would understate the saturation temperature and overstate superheat by roughly the glide.",
            },
            {
              q: "Why should subcooling be measured on the same visit as superheat?",
              options: [
                "Because subcooling is used to calculate superheat",
                "Because superheat alone cannot distinguish a valve fault from a charge or liquid-line fault",
                "Because the standards require both to be logged",
                "Because subcooling sets the spring pressure",
              ],
              answer: 1,
              explain: "High superheat has several causes. Adding subcooling separates them: low subcooling points at charge or a liquid-line restriction, while healthy subcooling with high superheat points at the valve, the bulb or distribution.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "superheat-targets",
          title: "Correct superheat ranges and what set correctly means",
          minutes: 11,
          simple: "There is no single right superheat number. Too little and wet gas gets to the compressor; too much and most of the coil is doing nothing. The right band depends on what the system is cooling, and a valve is only set correctly if it holds that band steadily when the load changes, not just at the one moment you happened to measure it.",
          refs: REFS,
          content: `
"Is the valve set correctly?" is a judgement, and the capstone expects the
judgement to be defended with a number, a range and a reason. Learn the bands,
and learn what makes a valve *correctly set* rather than merely *cold*.

## Why there is a band and not a number

Superheat is a compromise between two failures.

- **Too little superheat** means the boiling front reaches the end of the coil and liquid carries over. Liquid refrigerant in a compressor cylinder does not compress; it washes oil off bearings, dilutes the crankcase and, if a slug arrives, breaks valves or a rod. This is the failure that destroys machines.
- **Too much superheat** means the last stretch of coil is full of dry vapour, which is a poor heat-transfer fluid. The effective evaporator surface shrinks, capacity falls, suction pressure sags and discharge temperature climbs. On a suction-cooled motor the compressor also loses its cooling.

The correct band sits between them, and where it sits depends on the coil, the
load, and how much protection the compressor needs.

## Typical operating superheat at the bulb

| Application | Typical evaporating temperature | Superheat at the bulb |
| Direct-expansion air conditioning | 2 to 8 °C | 4–6 K |
| DX liquid chiller (shell and tube, dry expansion) | 0 to 4 °C | 4–6 K |
| Medium-temperature cool room / display case | −8 to 0 °C | 5–8 K |
| Low-temperature freezer room / blast freezer | −35 to −18 °C | 6–10 K |
| Multi-circuit coil fed through a distributor | any | Toward the upper end of the band |

Always work to the equipment manufacturer's commissioning data where it exists;
these bands are the fallback when it does not, and they are what a well-prepared
candidate can quote and justify.

Two supporting figures worth carrying:

- **Total superheat at the compressor suction service valve**: commonly 10–20 K. Below about 5 K you are risking floodback; much above 25 K and either the coil is starved or the suction line is gaining too much heat.
- **Evaporator TD** (air-on temperature minus saturated suction temperature) tells you whether the coil is loaded properly: roughly 5–8 K on a high-humidity cool room, 8–12 K on comfort air conditioning, 5–7 K on a low-temperature room.

## What "set correctly" actually means

A valve is set correctly when **all** of the following are true:

1. **Measured superheat at the bulb sits in the band for that application** — measured properly, insulated sensor, pressure at the coil outlet.
2. **It is stable.** A needle swinging over 5 K every 90 seconds is hunting, not controlling, even if its average looks perfect.
3. **It holds at part load as well as full load.** Many valves look fine on pull-down and flood at low load. Check again once the room is near set point.
4. **The rest of the system is healthy first.** Full charge, adequate subcooling, clean condenser, clear filter-drier, clean coil, correct airflow. Superheat that reads high on a starved liquid line is a liquid-line report card, not a valve setting.
5. **The whole coil is working.** Even frost or even sweating across all circuits; no half-frosted, half-clear pattern.
6. **The compressor is protected.** Total superheat at the suction valve is inside the compressor manufacturer's window and the suction line lagging is intact.

Meeting the room set point proves none of that. A badly flooded valve will still
pull a room down — right up until the compressor fails.

## MOP charges and why a freezer valve differs

Low-temperature systems pull down from ambient, and while the coil is warm the
suction pressure is high, which loads the compressor motor heavily. A valve with
a **maximum operating pressure (MOP)** charge has a limited-charge power element
that runs out of liquid above a set pressure, so the valve simply cannot hold
the suction pressure above that ceiling. It protects the motor during pull-down.

The trade-off is that an MOP valve gives up control above its MOP point and can
be sluggish, so bulb location and insulation matter even more. Bulb charges you
should be able to name:

| Charge type | Behaviour | Typical use |
| Liquid (full) charge | Bulb always contains liquid; valve controls at any pressure | General purpose; no MOP protection |
| Gas / limited liquid charge | Charge fully vaporises above a set pressure — gives MOP | Low temperature, motor protection on pull-down |
| Cross charge | Power element fluid differs from the refrigerant, so superheat setting changes with evaporating temperature | Low temperature, wide operating range |
| Adsorption charge | Charge held on an adsorbent; slow, very wide range | Special and very-low-temperature duties |

>! A bulb, capillary and power element are a sealed pressure vessel. Never apply
>! a flame near them and never cut a capillary to "test" it — the charge is lost
>! instantly and the valve will drive shut.

## What to remember

- Air conditioning and DX chillers 4–6 K; medium temperature 5–8 K; low temperature 6–10 K, at the bulb.
- Total superheat at the compressor commonly 10–20 K, and never below about 5 K.
- Correctly set means in-band, stable, and still in-band at part load, on a system that is otherwise healthy.
- MOP protects the motor on pull-down by limiting how high the valve can let suction pressure rise.
- Manufacturer data beats a rule of thumb every time.

## Written practice

**1.** A freezer room valve is measured at 3 K superheat at the bulb, rock
steady, with the room at −20 °C. The customer is happy because the room holds
temperature. Explain why the valve is not set correctly and what you would
expect to find if nothing is done.

>? **Model answer**
>
> Three kelvin is well below the 6–10 K band for a low-temperature coil. A
> steady 3 K at full load leaves no margin: the boiling front is effectively at
> the coil outlet, so any drop in load, any airflow reduction, or the surge of
> liquid after a defrost will push liquid straight past the bulb.
>
> Expected consequences: a sweating or frosting suction line back toward the
> compressor, falling crankcase temperature, oil dilution and foaming, loss of
> oil pressure on a machine that has an oil pump, and eventually valve or
> bearing damage or a liquid slug. The room holding temperature proves capacity,
> not safety.
>
> Action: verify the measurement (pressure at the coil outlet, dew point,
> insulated sensor), then raise the superheat setting in small increments with
> settling time between them until it sits in band, and re-check at part load.

**2.** Two systems both measure 9 K superheat at the bulb: one is a comfort air
conditioning unit, one is a freezer coil fed through a distributor. Comment on
each.

>? **Model answer**
>
> Air conditioning: 9 K is above the 4–6 K band. The coil is being underfed, so
> the last circuits are dry, capacity and dehumidification are down and suction
> pressure will be low for the air-on temperature. Check charge and subcooling
> first, then the liquid line and drier, then bulb contact and insulation,
> before touching the setting.
>
> Freezer with a distributor: 9 K sits inside the 6–10 K band and is a
> reasonable figure. Distributor-fed coils are normally run toward the upper end
> so that no single circuit floods while the others are still wet. Provided the
> reading is stable, the frost pattern is even and part-load behaviour is
> checked, this valve can be reported as set correctly.

**3.** List four conditions that must all be satisfied before you sign off a
valve as "set correctly", and give the reason for each.

>? **Model answer**
>
> - **Superheat in the band for the application** — the band is the compromise between floodback and lost coil surface, so being in it is the actual specification.
> - **Stable, not hunting** — an oscillating valve averages in-band while spending part of every cycle flooded and part starved, so the average is not evidence of control.
> - **Still in band at part load** — most floodback happens near set point, not on pull-down, so a full-load-only check misses the dangerous condition.
> - **The rest of the system verified healthy first (charge, subcooling, clean coils, clear drier, correct airflow)** — a valve cannot meter liquid it is not being supplied with, so adjusting it to compensate for another fault sets it wrongly for when the fault is repaired.
>
> A fifth worth adding: total superheat at the compressor within the compressor
> manufacturer's window, because the valve protects the coil but the suction
> line decides what the compressor actually swallows.
`,
          quiz: [
            {
              q: "The usual operating superheat band at the bulb for direct-expansion comfort air conditioning is about:",
              options: ["0–2 K", "4–6 K", "10–14 K", "18–22 K"],
              answer: 1,
              explain: "Air conditioning coils run 4–6 K at the bulb. 0–2 K risks floodback; 10 K or more means the last part of the coil is dry and capacity is being thrown away. 18–22 K is closer to a total-superheat figure at a badly lagged compressor.",
            },
            {
              q: "Why is a low-temperature coil normally set to a higher superheat than an air conditioning coil?",
              options: [
                "Because low-temperature refrigerants boil hotter",
                "Because the wider operating range, distributor feed and defrost surges need more margin against floodback",
                "Because the compressor runs cooler at low temperature",
                "Because superheat cannot be measured accurately below 0 °C",
              ],
              answer: 1,
              explain: "Low-temperature coils see big swings — pull-down, defrost recovery, uneven distributor feed — so more superheat margin is carried to keep any one circuit from flooding. Refrigerant boiling temperature is set by pressure, not by the application.",
            },
            {
              q: "A TX valve reads an average of 6 K but swings between 2 K and 10 K every couple of minutes. This valve is:",
              options: [
                "Set correctly, because the average is in band",
                "Hunting, and not correctly set — it is flooded for part of every cycle",
                "Set too high and should be wound out",
                "Normal for any valve fitted with an external equaliser",
              ],
              answer: 1,
              explain: "Stability is part of the specification. A valve at 2 K for part of each cycle is delivering wet gas to the compressor at those moments, whatever the average says. The cure is to find the cause of the hunt, not to accept the mean.",
            },
            {
              q: "What does an MOP (maximum operating pressure) bulb charge do?",
              options: [
                "Prevents the evaporator pressure from falling below a set value",
                "Limits how high the valve can let suction pressure rise, protecting the motor during pull-down",
                "Holds a constant superheat regardless of evaporating temperature",
                "Stops the valve opening if the liquid line is restricted",
              ],
              answer: 1,
              explain: "A limited-charge power element runs out of liquid above a set pressure, so the valve loses its opening force and throttles — capping suction pressure and therefore motor load on a warm pull-down. It does not set a lower limit; that is an EPR's job.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "undercharge-and-superheat",
          title: "What an undercharge does to TX superheat, and why",
          minutes: 11,
          simple: "If a system is short of gas there is not enough liquid to fill the pipe going to the valve, so bubbles of vapour arrive instead of solid liquid. The valve can only pass so much volume, and vapour carries almost no cooling, so the coil is underfed. The far end of the coil dries out early and the gas leaving it gets hot — superheat goes up.",
          refs: REFS,
          content: `
"What does an undercharge do to TX valve superheat, and why?" is a set-piece
question. The answer is one word plus a mechanism, and the mechanism is what
earns the marks.

## The short answer

**An undercharge raises superheat.**

## The mechanism, step by step

1. Short of refrigerant, the condenser and receiver cannot maintain a solid, subcooled column of liquid all the way to the expansion valve.
2. Subcooling falls toward zero. With no subcooling margin, the small pressure drop through the liquid line, the drier and the vertical lift is enough to drop the liquid below its saturation pressure, and some of it flashes to vapour. That is **flash gas** — bubbles in the sight glass.
3. A TX valve orifice is sized to pass **liquid**. Vapour occupies far more volume per kilogram, so a valve passing a liquid-and-vapour mixture passes far fewer kilograms per second than its rating.
4. The evaporator is therefore **underfed**. The refrigerant that does get in boils off well before the coil outlet.
5. Beyond that point the coil is dry. The vapour keeps picking up sensible heat from the air for the rest of the coil length, so it arrives at the bulb well above saturation.
6. The bulb sees a hot line and drives the valve wide open — but the valve is already the wrong bottleneck. Opening further cannot conjure liquid that is not there, so superheat stays high.

That last point is the one to write down: on an undercharge the valve is
typically **at or near full open and still cannot satisfy the bulb**. The valve
is not faulty; it has run out of authority.

## The full symptom set

| Reading | Undercharged TX system |
| Superheat at the bulb | High, often 12 K and rising |
| Subcooling at the condenser outlet | Very low or zero |
| Sight glass | Bubbles, flashing, or clear-but-empty at very low charge |
| Suction pressure | Low |
| Discharge pressure | Low to normal |
| Discharge temperature | High |
| Running current | Low |
| Evaporator | Starved: frost or sweat only at the inlet end, TD high, poor pull-down |
| Compressor | May short-cycle on the low-pressure switch |
| Liquid line | Warm, close to ambient |

!SIM[Watch an undercharge starve the coil on the gauges](fault=lowCharge)

The combination that identifies it is **high superheat with low subcooling and
low suction pressure**. Two of the three is not enough — high superheat with
*healthy* subcooling is a different family of faults entirely.

>! Never top up a system to make the symptoms go away. Under the Refrigerant
>! Handling Code of Practice a leak must be found and repaired before charging,
>! and adding gas to a leaking system is both a compliance failure and a
>! guarantee of a repeat call-out.

## Undercharge versus a liquid-line restriction

Both starve the valve, both raise superheat, both drop subcooling *at the valve
inlet*. They are separated at the condenser outlet and across the restriction.

| Check | Undercharge | Restricted liquid line or drier |
| Subcooling at the condenser outlet | Low or zero | Normal or high — liquid is backing up |
| Temperature across the filter-drier | No meaningful difference | Noticeably colder outlet; may sweat or frost |
| Sight glass position | Bubbles regardless of where you look | Clear before the restriction, bubbling after |
| Head pressure | Low to normal | Normal to slightly high |
| Receiver level | Low | Normal or high |

!SIM[Compare a restricted drier on the same gauges](fault=restrictedDrier)

## Distinguishing an undercharge from a genuinely misadjusted valve

A valve set too high on superheat also starves the coil, but the charge is
intact: subcooling is normal, the sight glass is full and clear, and the liquid
line is properly cold. The difference is the liquid supply, and that is why the
subcooling reading decides the diagnosis. Correct the charge first; only then is
a superheat reading worth adjusting to.

## On the job

- Undercharge raises superheat, always, on a TX system.
- The chain is: low charge → no subcooling → flash gas → valve passes less mass → coil starved → dry coil outlet → hot vapour at the bulb.
- Confirm with low subcooling, low suction, high superheat, low current and a bubbling sight glass.
- Distinguish from a restriction with the temperature difference across the drier and the subcooling at the condenser outlet.
- Find the leak, repair it, evacuate and weigh in a charge — do not top up.

## Written practice

**1.** A cool room on R404A shows 14 K superheat at the bulb, 1 K subcooling,
low suction pressure and a bubbling sight glass. The apprentice with you wants
to wind the TX valve out to bring superheat down. Explain, with the mechanism,
why that is wrong and what you would do instead.

>? **Model answer**
>
> The readings describe a liquid-supply problem, not a valve setting problem.
> One kelvin of subcooling and a bubbling glass mean flash gas is arriving at
> the valve, so the valve is metering a mixture instead of liquid and cannot
> pass its rated mass flow no matter how far it opens. It is almost certainly
> near full open already. Winding it out changes nothing while the fault exists.
>
> It is also dangerous. Once the charge is corrected, the valve is left set far
> below its proper superheat and the coil will flood, sending liquid to the
> compressor.
>
> Instead: confirm the charge condition, leak-test and find the leak, repair it,
> recover, evacuate, weigh in the correct charge, then re-measure superheat and
> subcooling and only adjust the valve if it is still out of band.

**2.** Explain why an undercharged TX system usually shows a *high* discharge
temperature even though its discharge pressure is low.

>? **Model answer**
>
> Discharge pressure follows the condensing conditions, and with little
> refrigerant in circulation there is little heat to reject, so condensing
> pressure sits low.
>
> Discharge temperature follows the temperature of the gas entering the
> compressor and the compression ratio. The starved coil delivers heavily
> superheated vapour, so suction gas is hot before compression begins. At the
> same time low suction pressure against a normal-ish head raises the
> compression ratio, adding more heat of compression. On a suction-cooled
> hermetic or semi-hermetic there is also less mass flow to carry motor heat
> away. Hot in, plus a high ratio, plus poor motor cooling, gives a hot
> discharge on a low gauge.

**3.** You are handed these readings on an R134a system: superheat 13 K,
subcooling at the condenser outlet 9 K, a 6 K temperature drop across the
filter-drier, sight glass clear at the receiver and bubbling at the valve.
State the fault and justify it from the data.

>? **Model answer**
>
> The fault is a **restricted filter-drier** (a liquid-line restriction), not an
> undercharge.
>
> - Subcooling at the condenser outlet is a healthy 9 K, so the system holds a proper charge — an undercharge would show near-zero subcooling here.
> - A 6 K temperature drop across the drier is the signature of a restriction: the pressure drop through the blockage causes flashing, and flashing takes latent heat out of the remaining liquid, cooling the outlet. Liquid backing up behind the restriction is also what keeps condenser-outlet subcooling high.
> - The sight glass being clear upstream and bubbling downstream places the restriction between the two.
> - Superheat is high because the valve is being fed a flashing mixture and cannot pass its rated mass flow, so the coil is starved.
>
> Action: recover, replace the filter-drier (and investigate why it blocked —
> moisture, debris, or the residue of a previous burnout), evacuate, recharge and
> re-check superheat and subcooling.
`,
          quiz: [
            {
              q: "An undercharge on a TX valve system does what to superheat, and why?",
              options: [
                "Lowers it, because less liquid means less boiling",
                "Raises it, because flash gas at the valve reduces liquid mass flow and the coil outlet runs dry",
                "Leaves it unchanged, because the valve compensates automatically",
                "Raises it, because the spring pressure increases as the charge falls",
              ],
              answer: 1,
              explain: "Loss of subcooling lets liquid flash before the valve; the orifice then passes far less mass, the coil is underfed and the outlet section runs dry and hot. The valve does try to compensate by opening, but it is not the bottleneck, so it cannot. Spring pressure is mechanical and does not change with charge.",
            },
            {
              q: "Which pair of readings, taken together, best identifies an undercharge rather than a valve set too high?",
              options: [
                "High superheat and high subcooling",
                "High superheat and low subcooling",
                "Low superheat and low subcooling",
                "Low superheat and high discharge temperature",
              ],
              answer: 1,
              explain: "Both faults starve the coil and raise superheat. The charge is what separates them: an undercharge cannot maintain subcooling, whereas a system with a valve set too high still holds a full, subcooled liquid line.",
            },
            {
              q: "What most reliably separates a restricted filter-drier from an undercharge in the field?",
              options: [
                "Suction pressure",
                "Superheat at the bulb",
                "A measurable temperature drop across the drier with normal or high subcooling at the condenser outlet",
                "Running current",
              ],
              answer: 2,
              explain: "Both faults give low suction and high superheat, so those readings cannot separate them. A restriction flashes refrigerant across itself, producing a cold drier outlet, while liquid banked up behind it keeps condenser-outlet subcooling normal or high.",
            },
            {
              q: "On a badly undercharged TX system, the valve itself is usually:",
              options: [
                "Closed, because bulb pressure has collapsed",
                "Near full open and still unable to satisfy the bulb",
                "Hunting rapidly between open and shut",
                "Frozen shut with moisture",
              ],
              answer: 1,
              explain: "The bulb sees a hot suction line and drives the valve wide open. It stays there because the limit on flow is the flashing liquid line, not the orifice — which is exactly why adjusting the valve achieves nothing until the charge is restored.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "valve-fault-family",
          title: "Overcharge, restriction, blocked distributor, lost bulb charge and stuck valves",
          minutes: 12,
          simple: "Several different faults all end up looking like a bad expansion valve. This lesson lines them up side by side so you can tell them apart from the gauges and a couple of pipe temperatures, instead of changing the valve and hoping.",
          refs: REFS,
          content: `
An expansion valve is a favourite thing to blame. Most of the time it is
innocent. The capstone will hand you a symptom list and ask what it is, so build
the comparison table into your memory and, more importantly, understand the
mechanism behind each row.

## Overcharge

On a receiver system a modest overcharge is simply stored, and little changes.
Push past what the receiver can hold and liquid backs up into the condenser,
drowning tube surface that should be condensing.

- Condensing pressure and temperature rise; head pressure high.
- **Subcooling becomes abnormally high** — 15 K or more — because the liquid is sitting in cold condenser tubes.
- Discharge temperature rises, running current rises, efficiency falls.
- Superheat at the bulb often stays close to normal, because the valve is still doing its job. This surprises people. An overcharge is a **high-side** problem first.
- The real danger is at start-up and after defrost: with the coil and suction line already full of liquid, the compressor gets a slug.
- On a capillary-tube system, by contrast, an overcharge floods the evaporator directly and superheat collapses — the difference is that a capillary has no valve to hold superheat.

!SIM[See an overcharge on the high side](fault=overcharge)

## Restricted filter-drier or liquid line

Covered in the previous lesson, and worth repeating in one line: **normal or
high subcooling at the condenser outlet, a measurable temperature drop across
the restriction, flash gas after it, starved coil, high superheat, low suction.**
Look for a sweating or frosted drier outlet.

## Blocked or partly blocked distributor

A distributor and its nozzle split one liquid stream evenly between many coil
circuits. Block one nozzle port, kink a distributor tube, or let debris settle
in the nozzle and the split stops being even.

- Some circuits get too much and flood; others get almost nothing and run dry and hot.
- The bulb sees the **mixed** outlet temperature, so the reading looks moderately high while some circuits are actually flooding — a genuinely dangerous combination.
- The give-away is a **patchy frost or sweat pattern**: some circuits frosted to the header, others clear.
- Capacity is well down, suction pressure low, superheat high and often unsteady.
- A distributor tube that has been shortened, re-bent or replaced with unequal lengths does the same thing.

## Lost bulb charge

The power element charge leaks out through a fractured capillary, a corroded
bulb or a failed diaphragm.

- Opening force disappears completely, so the spring and evaporator pressure win and the valve **drives shut**.
- Suction pressure falls fast and keeps falling; the system trips the low-pressure switch, restarts, trips again.
- Superheat is enormous or unmeasurable, the coil is dead, running current is low, head pressure low.
- A quick field check: warm the bulb in your hand or with a warm cloth. A healthy element makes the valve open and the suction pressure rise within a minute. No response means the element is dead.

## Stuck valve — closed

Debris on the seat, ice at the orifice from moisture in the system, or a seized
pin.

- Symptoms are the same family as a lost charge: very low suction, LP trips, dead coil, huge superheat.
- Moisture freezing at the orifice is **cyclic**: the system starves, the coil warms, the ice melts, flow resumes, then it freezes again a few minutes later. That rhythm is the clue.
- Warming the bulb produces no response if the pin is truly stuck — which distinguishes it from a lost charge only by inspection, so both usually mean removing and checking the valve.

!SIM[A valve stuck closed on the gauges](fault=txvStuckClosed)

## Stuck valve — open

Debris wedged in the port, a broken spring, or a bulb that has fallen off the
line and is sitting in warm air.

- Suction pressure is high; the coil floods.
- **Superheat at the bulb near zero**, suction line sweating or frosting all the way back to the compressor.
- Compressor runs cold, crankcase may frost, oil is diluted and foams on start.
- Discharge temperature low, capacity poor despite high suction, and a real risk of liquid slugging.
- Before condemning the valve, check the bulb is still strapped tight to the line and properly insulated. A dislodged bulb is the commonest cause of an apparently "stuck open" valve, and it costs nothing to fix.

!SIM[A valve stuck open, flooding the coil](fault=txvStuckOpen)

## The comparison table

| Fault | Superheat | Suction pressure | Subcooling | Head pressure | Signature |
| Undercharge | High | Low | Very low | Low–normal | Bubbles everywhere, warm liquid line |
| Overcharge (receiver system) | Near normal | Normal–high | Very high | High | High current, floodback at start |
| Restricted drier | High | Low | Normal–high | Normal | Temperature drop across the drier |
| Blocked distributor | High and unsteady | Low | Normal | Normal | Patchy frost across the coil circuits |
| Lost bulb charge | Very high | Very low, LP trips | Normal | Low | No response when the bulb is warmed |
| Stuck closed | Very high | Very low, LP trips | Normal | Low | Dead coil; cyclic if it is moisture ice |
| Stuck open / bulb dislodged | Near zero | High | Normal | Normal | Sweating suction line to the compressor |

>! Floodback and liquid slugging destroy compressors quickly and can burst a
>! valve plate. If you find near-zero superheat and a sweating suction line at
>! the compressor, shut the machine down before you continue diagnosing.

## What to remember

- Superheat plus subcooling plus head pressure identify the family; the signature check confirms it.
- Overcharge is a high-side fault with high subcooling and near-normal superheat.
- Patchy coil frost means distribution, not valve setting.
- Warming the bulb is a free, fast test of the power element.
- A dislodged bulb mimics a stuck-open valve — check it before you cut anything out.

## Written practice

**1.** An R410A split system has high head pressure, 17 K subcooling, normal
superheat at the bulb, high running current, and the owner reports a loud
knocking noise for a few seconds on every start. Diagnose it and explain each
piece of evidence.

>? **Model answer**
>
> The system is **overcharged**.
>
> - 17 K of subcooling is far above the normal 4–10 K range and means liquid is backing up into the condenser, drowning tubes that should be condensing.
> - Less effective condenser surface raises condensing pressure, hence the high head and the high running current.
> - Superheat is near normal because the TX valve is still controlling; an overcharge is a high-side fault, and this is exactly why superheat alone would have missed it.
> - The knock on start-up is liquid refrigerant that migrated into the suction line and compressor while off, being pumped through the cylinders — a slug.
>
> Action: shut down before more damage occurs, verify the charge against the
> nameplate, recover the excess into a recovery cylinder (checking the 80 % fill
> limit), and re-check subcooling, head pressure, current and superheat.

**2.** A cool-room coil is half frosted and half clear. Superheat at the bulb
reads 9 K and wanders. Explain what is happening inside the coil and why the
superheat reading is misleading here.

>? **Model answer**
>
> The distribution to the coil circuits is uneven — a partly blocked distributor
> nozzle, debris in a port, or distributor tubes of unequal length or a kinked
> tube. Some circuits receive more liquid than they can boil and are flooding
> (those are the frosted ones, wet right to the header); others receive almost
> nothing, dry out early and deliver hot vapour.
>
> The bulb sits on the common suction header and senses the **mixture** of those
> streams. Hot vapour from starved circuits and cold wet vapour from flooded
> ones average out to a plausible-looking 9 K, so the reading hides the fact
> that some circuits are delivering liquid. The wandering is the valve reacting
> to a signal that does not represent any single circuit.
>
> Action: inspect and clean or replace the distributor nozzle, check every
> distributor tube for kinks and equal length, and confirm an even frost pattern
> before re-measuring superheat.

**3.** Describe the bulb-warming test, state what a healthy result looks like,
and name two faults it helps you separate.

>? **Model answer**
>
> With the system running and a gauge on the suction side, hold the sensing bulb
> in a warm hand or wrap it in a warm cloth for up to a minute, watching the
> suction pressure.
>
> Healthy result: bulb pressure rises, the power element pushes the diaphragm
> down, the valve opens and **suction pressure rises noticeably** within about a
> minute. Remove the heat and it settles back.
>
> No response at all points to either a **lost power-element charge** or a
> **valve mechanically stuck shut** — both give a dead coil, very low suction
> and LP tripping, and the test separates them from other causes of low suction
> such as an undercharge or a restriction, which would still show a live,
> responsive valve. Distinguishing the two from each other normally means
> recovering the charge and inspecting or replacing the valve.
`,
          quiz: [
            {
              q: "On a receiver system, an overcharge typically shows:",
              options: [
                "Very low superheat and low head pressure",
                "Very high subcooling, high head pressure and near-normal superheat",
                "High superheat and zero subcooling",
                "Patchy frost on the evaporator",
              ],
              answer: 1,
              explain: "The excess liquid backs up into the condenser, so subcooling and head pressure climb while the TX valve keeps controlling superheat normally. Zero subcooling with high superheat is an undercharge; patchy frost is a distribution fault.",
            },
            {
              q: "A suction line sweating all the way back to the compressor with near-zero superheat most likely means:",
              options: [
                "Undercharge",
                "Restricted filter-drier",
                "Valve stuck open, or a bulb that has come loose from the line",
                "Lost bulb charge",
              ],
              answer: 2,
              explain: "Near-zero superheat means liquid is leaving the coil. Either the valve is jammed open or the bulb has fallen off and is reading warm ambient air, which drives the valve open. Check the bulb strap first — it is free to fix. The other three options all starve the coil and raise superheat.",
            },
            {
              q: "Low suction pressure that recovers for a few minutes and then collapses again, repeatedly, most suggests:",
              options: [
                "Moisture freezing and thawing at the valve orifice",
                "An overcharge",
                "A dirty condenser",
                "An oversized valve",
              ],
              answer: 0,
              explain: "The cycle is the signature: ice starves the coil, the valve body warms, the ice melts, flow resumes, and it re-freezes. A steady restriction would not recover on its own, and an overcharge or dirty condenser raises head pressure rather than cycling the low side.",
            },
            {
              q: "Warming the bulb by hand produces no change in suction pressure. This points to:",
              options: [
                "A normal, correctly set valve",
                "A lost power-element charge or a valve mechanically stuck shut",
                "An undercharge",
                "An external equaliser fitted upstream of the bulb",
              ],
              answer: 1,
              explain: "A live power element must open the valve when the bulb is heated. No response means the opening force is gone or the pin cannot move. An undercharged system would still show a responsive valve, because the fault there is liquid supply, not the element.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "adjusting-and-hunting",
          title: "Adjusting a TX valve properly, and curing a hunting valve",
          minutes: 11,
          simple: "Adjusting an expansion valve is slow work. You turn the stem a small amount, then wait — the system takes a quarter of an hour to show you what you did. People who turn it a full turn and read the gauge straight away end up chasing the valve in circles and usually leave it worse than they found it.",
          refs: REFS,
          content: `
Most TX valves in service have been adjusted by someone who did not need to
adjust them. Before you touch a stem, satisfy yourself that the charge,
subcooling, airflow, coil cleanliness, drier and bulb mounting are all right. An
adjustment is the last step, not the first.

## Which way is which

The adjusting stem sits behind a sealing cap at the bottom of the valve body.
Turning it clockwise (in) compresses the superheat spring, adding closing force,
so the valve throttles and **superheat increases**. Anti-clockwise (out) reduces
spring force and **superheat decreases**.

| Turn | Spring force | Valve | Superheat | Suction pressure tends to |
| Clockwise / in | Increases | Throttles | Increases | Fall |
| Anti-clockwise / out | Decreases | Opens | Decreases | Rise |

Typical sensitivity is around 0.5 to 1 K of superheat per quarter turn on a
small valve, but it varies widely between makes and sizes — which is exactly why
you move in small steps and measure.

## The procedure

1. **Prove the system first.** Correct charge, subcooling in range, sight glass clear, coils clean, airflow correct, drier not restricted, bulb clean, tight and insulated, equaliser clear.
2. **Let it stabilise.** Run at steady load for at least 15 minutes, and not straight after a defrost or a start-up.
3. **Record the starting point.** Note the existing superheat, and count and write down the stem position — number of turns from fully in — so you can always get back to where you started.
4. **Remove the seal cap** and fit the correct adjusting tool.
5. **Move a small increment.** A **quarter to a half turn maximum**, one step at a time. Never a full turn.
6. **Wait for the system to settle: 15 to 30 minutes.** The bulb is a thermal mass, the coil has to re-establish a new boiling front, and the valve has a deliberately slow response so it does not chase itself. Reading the gauge two minutes after a turn tells you nothing useful.
7. **Re-measure superheat properly** — coil-outlet pressure, insulated sensor, settled readings.
8. **Repeat** in small steps until superheat sits in the band for the application.
9. **Check at part load** as the room or space approaches set point, because that is where floodback appears.
10. **Refit the seal cap** (it is a pressure-containing seal, not a dust cover) and record the final superheat, subcooling, pressures and stem position on the service report.

>! An adjusting stem on some valves can be wound out far enough to unseat the
>! packing and release the charge. Count your turns, do not force the stem past
>! its stop, and treat the seal cap as part of the pressure envelope.

## Hunting: what it looks like

Hunting is a sustained oscillation — the valve overfeeds, the bulb goes cold,
the valve slams shut, the coil starves, the bulb goes hot, the valve opens wide,
and round again. On the gauges you see suction pressure swinging with a period
typically between 30 seconds and several minutes, and superheat swinging with
it. The suction line alternately sweats and dries.

It matters because the low half of each swing is a floodback event.

## Causes and cures

| Cause | Why it oscillates | Cure |
| Superheat set too low | The valve has no stable band left; it can only overshoot both ways | Increase the setting in quarter turns with settling time |
| Bulb loose, dirty pipe, or poorly insulated | The bulb responds partly to air temperature and lags the refrigerant, so its signal arrives out of phase | Clean the pipe, re-strap the bulb properly, insulate it |
| Bulb badly located — near a heat source, in the fan draught, on a trap or after a heat exchanger | Same problem: the signal does not represent the coil outlet | Relocate to the horizontal line at the coil outlet, correct clock position |
| Valve oversized for the load | A large orifice makes a big flow change for a small movement, so every correction overshoots | Fit the correct capacity valve or orifice; check the coil is not being run at part load permanently |
| Uneven distributor feed | The bulb senses an averaged, noisy signal | Clean or replace the nozzle; correct tube lengths |
| Flash gas in the liquid line (low subcooling) | Flow through the orifice is erratic because the density of what it is passing keeps changing | Restore subcooling: correct charge, fix restriction, address excessive vertical lift |
| Missing, blocked or wrongly connected external equaliser | The valve senses the wrong pressure and cannot form a correct superheat signal | Fit or clear the equaliser, connect downstream of the bulb, on top of the line |
| Wide load swings or short-cycling | The valve is being asked to track faster than it physically can | Address the load control, cycle rate, or fit a valve with an appropriate charge |
| Moisture in the system | Intermittent icing at the orifice | Recover, replace the drier, evacuate deeply, recharge |

The order to work through in the field: **bulb mounting and insulation, then
subcooling and flash gas, then the equaliser, then the setting, and only then
valve sizing.** The first three cost nothing but time and account for most
hunting.

## On the job

- Adjust only after the system is proved healthy.
- Quarter to half a turn, then wait 15 to 30 minutes. No exceptions.
- Clockwise raises superheat; anti-clockwise lowers it.
- Count and record turns so you can return to the starting point.
- Hunting is usually a bulb, subcooling or equaliser problem before it is a setting problem.
- Re-check at part load and record everything on the report.

## Written practice

**1.** A technician turns a TX valve stem one and a half turns anti-clockwise,
watches the gauge for three minutes, sees little change, and turns it another
turn. Describe the likely outcome and write the correct procedure they should
have used.

>? **Model answer**
>
> Outcome: two and a half turns of spring force have been removed, but the
> system had not begun to respond when the second adjustment was made. Ten or
> fifteen minutes later the valve opens far too wide, superheat collapses toward
> zero, the coil floods, the suction line sweats back to the compressor and
> liquid reaches the crankcase — oil dilution, foaming, possible valve damage.
> With no record of the original stem position, returning to a known state now
> means resetting from the manufacturer's factory setting.
>
> Correct procedure: prove charge, subcooling, airflow, drier and bulb mounting
> first; run 15 minutes at steady load; record the existing superheat and stem
> position; make **one quarter to half turn**; wait **15 to 30 minutes**;
> re-measure superheat properly with an insulated sensor and coil-outlet
> pressure; repeat in small steps until in band; verify at part load; refit the
> seal cap and record the result.

**2.** List five causes of a hunting TX valve and give the cure for each.

>? **Model answer**
>
> - **Superheat set too low** — no stable operating band remains, so the valve overshoots both ways. Cure: raise the setting a quarter turn at a time with settling between steps.
> - **Bulb loose, on a dirty pipe or uninsulated** — the bulb partly senses ambient air and lags, so its signal is out of phase with the coil. Cure: clean the line to bright metal, strap the bulb tight with full contact, insulate it.
> - **Bulb badly located** (in the fan draught, near a hot pipe, on a trap, downstream of a heat exchanger) — the signal does not represent the coil outlet. Cure: relocate to the horizontal suction line at the coil outlet at the correct clock position.
> - **Flash gas in the liquid line from low subcooling** — the density of what the orifice is passing keeps changing, so flow is erratic. Cure: restore subcooling by correcting the charge, clearing a liquid-line restriction, or addressing excessive vertical lift.
> - **Valve oversized for the load** — a large orifice makes a big flow change for a small stem movement, so every correction overshoots. Cure: fit the correctly rated valve or orifice for the actual duty.
>
> A missing or blocked external equaliser and an uneven distributor feed are two
> more worth naming.

**3.** Explain why a settling time of 15 to 30 minutes is required after each
adjustment, in terms of what is physically happening in the system.

>? **Model answer**
>
> Changing the spring force changes the valve opening immediately, but the
> consequences take time to appear:
>
> - The boiling front inside the coil has to move to a new position, and the refrigerant mass distributed through the coil has to redistribute.
> - The sensing bulb is a lump of metal and charge with real thermal mass; it takes minutes to reach the new pipe temperature and therefore minutes for its pressure signal to become truthful.
> - Suction pressure, condensing pressure and the receiver liquid level all shift and then interact, so the operating point moves more than once before it settles.
> - TX valves are deliberately damped so they do not chase transient signals, which means the valve itself approaches its new balance slowly.
>
> Reading the gauge before all of that has happened gives a number that is on
> its way somewhere else, and adjusting on that number is how a technician ends
> up chasing the valve back and forth and finishing far from the target.
`,
          quiz: [
            {
              q: "Turning the TX valve adjusting stem clockwise (in) does what?",
              options: [
                "Reduces spring force, opens the valve, lowers superheat",
                "Increases spring force, throttles the valve, raises superheat",
                "Increases bulb pressure and raises suction pressure",
                "Has no effect until the seal cap is refitted",
              ],
              answer: 1,
              explain: "Clockwise compresses the superheat spring, adding closing force, so the bulb must reach a higher temperature before the valve opens — superheat rises and suction pressure usually falls. Bulb pressure is set by the system, not by the stem.",
            },
            {
              q: "The correct increment and settling time for a TX valve adjustment is about:",
              options: [
                "Two full turns, read immediately",
                "A quarter to half a turn, then 15 to 30 minutes to settle",
                "One full turn, then 2 minutes to settle",
                "As many turns as needed until the gauge reaches the target",
              ],
              answer: 1,
              explain: "The bulb's thermal mass, the coil's boiling front and the valve's own damping all take minutes to respond. Small steps with real settling time is the only way to land on the target instead of oscillating past it.",
            },
            {
              q: "Before adjusting superheat, which should be verified first?",
              options: [
                "That the room has reached set point",
                "Charge, subcooling, airflow, coil cleanliness, drier and bulb mounting",
                "The compressor's oil level only",
                "The age of the expansion valve",
              ],
              answer: 1,
              explain: "Every one of those can produce an out-of-band superheat reading that the valve is not responsible for. Adjusting to compensate for them sets the valve wrongly for the day the real fault gets fixed.",
            },
            {
              q: "Which is the most common cause of a hunting valve and the cheapest to check?",
              options: [
                "An oversized valve orifice",
                "A poorly mounted, dirty or uninsulated sensing bulb",
                "A worn compressor",
                "Incorrect refrigerant type",
              ],
              answer: 1,
              explain: "A bulb that is partly sensing air temperature, or lagging because of a poor contact surface, sends a delayed signal that puts the valve out of phase with the coil. Cleaning the pipe, re-strapping and insulating costs nothing and cures a large share of hunting complaints.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "bulb-and-equaliser",
          title: "Bulb positioning and external equalisers",
          minutes: 11,
          simple: "The bulb is the valve's only eye on the coil, and the equaliser tube is how the valve finds out what the pressure is at the far end of the coil. Put the bulb in the wrong spot, or forget the equaliser, and the valve is working from bad information — no amount of adjusting will fix that.",
          refs: REFS,
          content: `
Two installation details decide whether a TX valve can control at all. Both are
free to get right and expensive to get wrong, and both come up in capstone
questions on why a valve will not hold superheat.

## Bulb positioning

### Where along the line

On the **suction line, on a horizontal run, as close to the evaporator outlet as
possible**, and **upstream of the external equaliser connection**.

Avoid:

- Downstream of a suction-to-liquid heat exchanger — the bulb would read gas that has been artificially warmed and the valve would flood the coil.
- On or immediately after a trap, an oil-return U-bend or the bottom of a riser, where liquid and oil collect and mislead the bulb.
- On a header, a fitting, a valve body or a length of pipe of a different size — you want plain, straight tube.
- In the discharge draught of the evaporator fan, near a defrost heater, near a hot pipe, or in direct sun on a rooftop unit.
- Inside the refrigerated space where the coil is, if the line runs somewhere with a truer reading available just outside; but never so far away that the reading no longer represents the coil outlet.

### Clock position

Looking at the end of the pipe as a clock face:

| Suction line outside diameter | Recommended bulb position |
| Up to about 22 mm | 12 o'clock is acceptable; 2 or 10 o'clock is safer |
| About 22 mm and larger | 4 o'clock or 8 o'clock — roughly 45 degrees below the horizontal centreline |
| Any size | **Never 6 o'clock** |

The reason is oil. Oil and any liquid refrigerant run along the bottom of a
horizontal line. A bulb at 6 o'clock reads that liquid film rather than the
vapour, so it reports a colder-than-true temperature, throttles the valve, and
starves the coil. On a large line the vapour at the very top can also be
stratified, which is why the recommendation moves to 4 or 8 o'clock as the pipe
gets bigger.

### Fitting it

1. Clean the pipe back to bright bare metal — no paint, oxide or oil film.
2. Use both manufacturer's straps or clamps, tight, with the full length of the bulb in metal-to-metal contact along the pipe.
3. The bulb must lie **along** the pipe, not across it.
4. Insulate the bulb and its clamps with closed-cell insulation, sealed at both ends, so ambient air cannot reach it. This is mandatory on any line running in a space warmer than the suction gas, which is nearly all of them.
5. If the line must be vertical, mount on a section with **upward** flow and place the bulb so the capillary leaves it pointing up, so any condensed charge drains back to the bulb rather than to the power element.

>! On a rooftop or plant-deck unit, an uninsulated bulb in summer sun can read
>! 20 K above the pipe. The valve will hold the coil flooded all day and the
>! compressor will fail long before anyone suspects a strip of missing lagging.

## External equalisers

### What it does

An external equaliser is a small-bore tube from the underside of the valve
diaphragm to the **suction line at the evaporator outlet**. It replaces the
internal drilling that would otherwise feed valve-outlet pressure to the
diaphragm, so the valve senses coil-**outlet** pressure instead of coil-**inlet**
pressure.

### When it is required

Fit an external equaliser whenever there is significant pressure drop between
the valve outlet and the point where the bulb sits. In practice that means:

- Any coil fed through a **refrigerant distributor** — the nozzle alone drops a substantial pressure.
- Long or multi-pass coils with high circuit pressure drop.
- Any system with a pressure-dropping device between valve and bulb, such as an EPR or a solenoid in the coil circuit.
- As a rule of thumb, when coil-plus-distributor pressure drop exceeds roughly 1 K of saturation temperature, an internally equalised valve will read enough error to matter.

### Why an internally equalised valve fails there

Suppose the coil-plus-distributor pressure drop is worth 3 K of saturation
temperature. An internally equalised valve senses the higher inlet pressure — a
saturation temperature 3 K above the true coil outlet — under its diaphragm.
That extra closing force behaves exactly like extra spring force, so the valve
throttles and the actual superheat at the bulb runs about 3 K higher than the
setting says. The coil is permanently starved and no amount of winding the stem
out fixes it cleanly, because the error also changes with load.

### Fitting the equaliser

- Connect it to the suction line **downstream of the bulb**, typically 100 to 200 mm past it, so that if the equaliser connection ever leaks, refrigerant escaping into the line does not blow directly across the bulb.
- Connect on **top of the line (12 o'clock)** so oil cannot run into the tube and block it.
- Route it without traps or kinks and support it so vibration does not fatigue the tube.
- **Never cap, plug or omit it** on a valve designed for external equalisation. Blocked or plugged, the diaphragm underside sees a trapped, meaningless pressure and the valve loses control entirely — usually driving wide open and flooding.

## What to remember

- Bulb: horizontal suction line, at the coil outlet, upstream of the equaliser tapping.
- Never at 6 o'clock; 4 or 8 o'clock on lines 22 mm and larger.
- Clean metal, both straps, along the pipe, insulated.
- Equaliser required with a distributor or wherever coil pressure drop is significant.
- Equaliser connects downstream of the bulb, on top of the line, never plugged.

## Written practice

**1.** A 28 mm suction line has the TX valve bulb strapped to the bottom of the
pipe with one cable tie, over the original paint, with no insulation. The valve
will not hold superheat. Explain each of the four faults and its effect.

>? **Model answer**
>
> - **6 o'clock position on a 28 mm line** — oil and any carried-over liquid run along the bottom of the pipe, so the bulb reads that film rather than the vapour. It reports colder than the true gas temperature, the valve throttles and the coil is starved. A line of this size should have the bulb at 4 or 8 o'clock.
> - **One cable tie instead of the manufacturer's straps** — the bulb is not in full metal-to-metal contact along its length, so it responds slowly and only partly to the pipe. The signal lags, which causes both offset error and hunting.
> - **Fitted over paint** — paint is an insulator between bulb and pipe, worsening the contact problem and slowing the response further.
> - **No insulation** — the exposed part of the bulb senses ambient air. If the plant room is warmer than the suction gas, the bulb reads high, drives the valve open and floods the coil; the two errors also fight each other, producing erratic control.
>
> Remedy: strip the paint back to bright metal, refit at 4 or 8 o'clock with
> both straps along the pipe, and insulate the bulb and clamps with sealed
> closed-cell insulation. Then re-measure superheat before adjusting anything.

**2.** A coil is fed through a distributor and the pressure drop across
distributor and coil is worth about 3 K of saturation temperature. An internally
equalised valve has been fitted. Explain what the valve is actually controlling
and what you would see on your instruments.

>? **Model answer**
>
> The valve senses its own outlet pressure under the diaphragm — the pressure
> *before* the distributor and coil. That pressure corresponds to a saturation
> temperature about 3 K higher than the true saturation temperature at the coil
> outlet where the bulb sits.
>
> Because that pressure is a closing force, the extra 3 K acts exactly like
> extra spring pressure. The valve therefore holds about 3 K more superheat at
> the bulb than its setting nominally calls for, and the error moves with load
> because coil pressure drop moves with load.
>
> On instruments: measured superheat at the bulb consistently 3 K or more above
> the intended band, low suction pressure, high evaporator TD, the last coil
> circuits dry and clear of frost, poor capacity, and a valve that cannot be
> made to behave by adjustment alone.
>
> Remedy: fit an externally equalised valve, with the equaliser connected to the
> suction line downstream of the bulb and on top of the line.

**3.** Give three rules for connecting an external equaliser and the reason
behind each.

>? **Model answer**
>
> - **Connect to the suction line downstream of the sensing bulb** (roughly 100 to 200 mm past it) — so that if the equaliser joint ever leaks, escaping refrigerant does not blow across the bulb and give the valve a false cold signal.
> - **Connect on top of the line, at 12 o'clock** — oil travels along the bottom of a horizontal suction line; a bottom or side connection will fill with oil and block the tube, and a blocked equaliser leaves the valve controlling on a trapped pressure.
> - **Never cap, plug or omit it on a valve built for external equalisation** — the underside of the diaphragm must see true coil-outlet pressure. Plugged, it sees a meaningless trapped pressure, loses the closing force that forms the superheat signal, and typically drives wide open and floods the compressor.
>
> A fourth: route it free of traps and kinks and support it against vibration,
> because a fatigued or trapped capillary produces intermittent, baffling faults.
`,
          quiz: [
            {
              q: "Why must a TX valve bulb never be mounted at the 6 o'clock position on a horizontal suction line?",
              options: [
                "The capillary would be too short",
                "Oil and liquid running along the bottom of the line make the bulb read colder than the true vapour temperature",
                "It would be too close to the external equaliser",
                "Vibration is greatest at the bottom of the pipe",
              ],
              answer: 1,
              explain: "The bulb would sense the oil and liquid film rather than the vapour, report a falsely cold line, throttle the valve and starve the coil. On lines 22 mm and larger the recommendation is 4 or 8 o'clock.",
            },
            {
              q: "An external equaliser should be connected to the suction line:",
              options: [
                "Upstream of the bulb, on the bottom of the line",
                "Downstream of the bulb, on top of the line",
                "At the compressor suction service valve",
                "Directly to the liquid line",
              ],
              answer: 1,
              explain: "Downstream of the bulb keeps a leaking joint from blowing across the bulb; on top of the line stops oil filling and blocking the tube. Connecting at the compressor would include the whole suction line pressure drop and defeat the purpose.",
            },
            {
              q: "A coil fed through a distributor with an internally equalised valve will typically:",
              options: [
                "Flood the compressor",
                "Run a superheat higher than the setting implies, by roughly the distributor and coil pressure drop expressed in kelvin",
                "Hold superheat perfectly but lose subcooling",
                "Trip on high pressure",
              ],
              answer: 1,
              explain: "The valve senses inlet pressure, whose saturation temperature is higher than at the coil outlet. That extra closing force acts like extra spring pressure, so actual superheat at the bulb runs high and the coil is starved.",
            },
            {
              q: "The bulb must not be fitted downstream of a suction-to-liquid heat exchanger because:",
              options: [
                "The pipe is too thin there",
                "The gas has been artificially warmed, so the valve would over-feed and flood the coil",
                "The heat exchanger causes excessive pressure drop",
                "It would be too far from the compressor",
              ],
              answer: 1,
              explain: "Heat added after the coil raises the line temperature without representing coil-outlet conditions. The bulb reads hot, the valve opens further than it should, and the coil floods even though the measured superheat downstream looks acceptable.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "judging-from-field-data",
          title: "Judging a system from field data: a repeatable method",
          minutes: 14,
          simple: "Given four or five numbers off a system, there is a fixed order to work through them that gets you to the right answer every time: turn pressures into saturation temperatures, do the two subtractions, compare each result with what it should be, and only then say what is wrong. Do it the same way every time and it stops being guesswork.",
          refs: REFS,
          content: `
This is the lesson that turns everything before it into marks. The capstone
hands you a set of field readings — liquid line temperature, suction pressure,
evaporator outlet temperature, bulb temperature, sometimes discharge pressure —
and asks whether the valve is set correctly. Answer it with a method, not an
opinion.

## The method

1. **Note the refrigerant and the application.** Both are needed: the refrigerant to convert pressures, the application to know the target band.
2. **Convert suction pressure to saturation temperature.** PT chart, dew point for a glide blend. Write it down.
3. **Superheat = evaporator-outlet (or bulb) temperature − saturated suction temperature.** Show the subtraction, answer in K.
4. **Convert discharge/liquid pressure to condensing saturation temperature** where it is given.
5. **Subcooling = condensing saturation temperature − liquid line temperature.** Show the subtraction, answer in K.
6. **Compare superheat with the band** for that application (4–6 K air conditioning, 5–8 K medium temperature, 6–10 K low temperature).
7. **Compare subcooling with its band** — commonly 4–10 K at the condenser outlet on a receiver-less system, and enough to keep the sight glass clear on any system.
8. **Cross-check the bulb temperature against the evaporator outlet temperature.** They should be within about a kelvin. A large gap means the bulb is not sensing the line properly — poor contact, wrong clock position, no insulation, or a hot draught.
9. **Sanity-check the liquid line temperature against ambient.** A liquid line close to or below ambient with almost no subcooling says flash gas; a very warm liquid line says the condenser is not rejecting heat.
10. **State the conclusion in one sentence**, then state the action.

Two sentences to have ready for the answer:

- *"The valve is set correctly"* — superheat is in band, subcooling is in band, bulb and outlet temperatures agree, so the coil is fully active and the compressor is protected.
- *"The valve is not the fault"* — superheat is out of band but subcooling shows the liquid supply is at fault, so the valve is responding correctly to bad information.

!FIG[superheat-measure]

## Worked example 1 — R404A cool room

Readings: suction pressure at the coil outlet **340 kPa gauge**; evaporator
outlet temperature **−3.5 °C**; bulb temperature **−3 °C**; discharge pressure
**1723 kPa gauge**; liquid line temperature **32 °C**; room set point 2 °C.

- Saturated suction temperature, R404A dew at 340 kPa gauge = **−10 °C**
- Superheat = −3 − (−10) = **7 K**
- Condensing saturation temperature at 1723 kPa gauge = **40 °C**
- Subcooling = 40 − 32 = **8 K**
- Bulb versus evaporator outlet: −3 against −3.5, a difference of 0.5 K — the bulb is sensing the line properly.

Target for a medium-temperature cool room is 5–8 K, and 7 K sits inside it.
Subcooling of 8 K is healthy. **Conclusion: the valve is set correctly and the
system is operating normally. No adjustment.**

## Worked example 2 — R134a cool room, same method, different answer

Readings: suction pressure **142 kPa gauge**; evaporator outlet **6 °C**; bulb
temperature **6.5 °C**; discharge pressure **669 kPa gauge**; liquid line
temperature **29 °C**; ambient 28 °C; sight glass bubbling.

- Saturated suction temperature, R134a at 142 kPa gauge = **−5 °C**
- Superheat = 6 − (−5) = **11 K**
- Condensing saturation temperature at 669 kPa gauge = **30 °C**
- Subcooling = 30 − 29 = **1 K**
- Bulb and outlet agree within 0.5 K, so the bulb mounting is sound.

Superheat of 11 K is well above the 5–8 K band, so the coil is starved. But
subcooling of 1 K, a liquid line only 1 K below the condensing temperature, an
ambient of 28 °C and a bubbling sight glass all say the liquid supply is the
problem. **Conclusion: the system is undercharged (or has a liquid-line
restriction). The valve is responding correctly to a starved liquid line and
must not be adjusted.** Action: check for a temperature drop across the
filter-drier to separate the two, leak test, repair, evacuate and weigh in the
correct charge, then re-measure.

## Worked example 3 — R22 packaged air conditioner

Readings: suction pressure **483 kPa gauge**; evaporator outlet **8 °C**; bulb
temperature **8 °C**; discharge pressure **1433 kPa gauge**; liquid line
temperature **33 °C**; air-on the indoor coil 24 °C.

- Saturated suction temperature, R22 at 483 kPa gauge = **5 °C**
- Superheat = 8 − 5 = **3 K**
- Condensing saturation temperature at 1433 kPa gauge = **40 °C**
- Subcooling = 40 − 33 = **7 K**
- Evaporator TD = 24 − 5 = **19 K**, which is high, consistent with a coil that is not fully wetted or with low airflow.

Superheat of 3 K is below the 4–6 K air conditioning band. Subcooling of 7 K is
healthy, so the charge and liquid line are sound and this **is** a valve setting
issue. **Conclusion: the valve is set too low and is at risk of floodback,
particularly at part load.** Action: verify the readings with an insulated
sensor, then turn the stem clockwise a quarter turn, wait 20 minutes, re-measure,
and repeat until superheat sits at 4–6 K; then confirm at part load. Also
investigate the high TD — check indoor airflow and filters.

## Worked example 4 — R410A split system, bulb check catches it

Readings: suction pressure **833 kPa gauge**; evaporator outlet **8 °C**; bulb
temperature **15 °C**; liquid line **35 °C**; discharge pressure **2280 kPa
gauge**.

- Saturated suction temperature, R410A at 833 kPa gauge = **5 °C**
- Superheat from the evaporator outlet = 8 − 5 = **3 K**
- Apparent superheat from the bulb temperature = 15 − 5 = **10 K**
- The 7 K disagreement between bulb and evaporator outlet is the finding.

The coil is actually running at 3 K superheat — near floodback — while the bulb
believes it is at 10 K and keeps the valve open. **Conclusion: the bulb is not
sensing the suction line: poor contact, wrong clock position, missing
insulation, or sitting in a warm draught.** Action: do not adjust the valve.
Clean the line to bright metal, refit the bulb correctly with both straps at the
right clock position, insulate it, let the system settle and re-measure. Only
then judge the setting.

## Exam technique for this question type

- Write the refrigerant and the conversion you used before the arithmetic. Two marks usually sit in the conversion.
- Keep superheat and subcooling in **K** and temperatures in **°C**; mixing them loses marks.
- Answer the question actually asked. If it asks "is the valve set correctly", the answer begins yes or no, then the number, then the reason.
- If the data point at a charge or restriction problem, say so explicitly — "the valve is not at fault" is a valid and often expected conclusion.
- Do not invent readings that were not given. If subcooling cannot be calculated because no discharge pressure was supplied, say what you would measure next.

## Written practice

**1.** A blast freezer on R404A gives: suction pressure at the coil outlet 104
kPa gauge; evaporator outlet temperature −22 °C; bulb temperature −21.5 °C;
discharge pressure 1305 kPa gauge; liquid line temperature 22 °C. Calculate
superheat and subcooling, and state whether the valve is set correctly.

>? **Model answer**
>
> Refrigerant R404A; low-temperature application; target superheat 6–10 K.
>
> - Saturated suction temperature at 104 kPa gauge (dew) = **−30 °C**
> - Superheat = −21.5 − (−30) = **8.5 K**
> - Condensing saturation temperature at 1305 kPa gauge = **30 °C**
> - Subcooling = 30 − 22 = **8 K**
> - Bulb (−21.5 °C) versus evaporator outlet (−22 °C): 0.5 K apart, so the bulb is reading the line correctly.
>
> Superheat of 8.5 K is inside the 6–10 K band for a low-temperature coil.
> Subcooling of 8 K is healthy, so the liquid supply is sound.
>
> **Conclusion: yes, the valve is set correctly.** No adjustment. Confirm the
> frost pattern is even across all coil circuits and re-check superheat once the
> room is near set point, since low-temperature valves are most likely to flood
> at part load.

**2.** An R134a chilled-water package gives: suction pressure 192 kPa gauge;
evaporator outlet 1 °C; bulb temperature 1 °C; discharge pressure 786 kPa gauge;
liquid line temperature 26 °C. Calculate superheat and subcooling and give your
conclusion and action.

>? **Model answer**
>
> Refrigerant R134a; DX chiller; target superheat 4–6 K.
>
> - Saturated suction temperature at 192 kPa gauge = **0 °C**
> - Superheat = 1 − 0 = **1 K**
> - Condensing saturation temperature at 786 kPa gauge = **35 °C**
> - Subcooling = 35 − 26 = **9 K**
> - Bulb and evaporator outlet agree, so the bulb mounting is sound.
>
> Superheat of 1 K is far below the 4–6 K band — the coil is effectively flooded
> and wet vapour, probably liquid, is leaving the evaporator. Subcooling of 9 K
> is healthy, so the charge and liquid line are fine and this is a valve
> problem, not a supply problem.
>
> **Conclusion: no, the valve is not set correctly — it is set far too low and
> the compressor is at risk of floodback and oil dilution.**
>
> Action: shut down if the suction line is sweating back to the compressor and
> the crankcase is cold. Check first that the bulb has not come loose or been
> placed after a heat source, and that any external equaliser is clear and
> correctly connected, because those mimic a low setting. If the mounting is
> sound, wind the stem clockwise a quarter turn, allow 20 minutes, re-measure,
> and repeat until superheat is 4–6 K. Verify at part load and record the final
> readings.

**3.** Write out the step-by-step method you would use for any "is this valve
set correctly" question, and explain why the bulb-versus-evaporator-outlet
comparison is worth doing.

>? **Model answer**
>
> 1. Note the refrigerant and the application.
> 2. Convert suction pressure to saturated suction temperature (dew point for a glide blend).
> 3. Superheat = evaporator outlet or bulb temperature − saturated suction temperature, in K.
> 4. Convert discharge or liquid pressure to condensing saturation temperature.
> 5. Subcooling = condensing saturation temperature − liquid line temperature, in K.
> 6. Compare superheat with the band for the application.
> 7. Compare subcooling with its expected range, and check the sight glass.
> 8. Compare bulb temperature with evaporator outlet temperature.
> 9. Sanity-check the liquid line temperature against ambient.
> 10. State the conclusion — yes or no, the number, the reason — then the action.
>
> The bulb-versus-outlet comparison matters because superheat is only meaningful
> if the bulb is sensing what the coil is actually delivering. The two readings
> should agree within about a kelvin. A significant gap means the bulb is not in
> proper thermal contact with the line, is at the wrong clock position, is
> uninsulated, or is sitting in a draught or near a heat source. In that case
> the valve is controlling on false information, and adjusting the setting would
> move the valve further from correct rather than closer to it — the fix is to
> remount and insulate the bulb, then start the measurement again.
`,
          quiz: [
            {
              q: "R404A, suction pressure at the coil outlet 340 kPa gauge (saturated −10 °C), evaporator outlet temperature −3 °C, subcooling 8 K, medium-temperature cool room. The valve is:",
              options: [
                "Set too low — superheat is 3 K",
                "Set correctly — superheat is 7 K, inside the 5–8 K band",
                "Set too high — superheat is 13 K",
                "Impossible to judge without the compressor discharge temperature",
              ],
              answer: 1,
              explain: "Superheat is −3 − (−10) = 7 K, which sits in the 5–8 K medium-temperature band, and healthy subcooling confirms the liquid supply. Discharge temperature is useful but not needed to answer this question.",
            },
            {
              q: "Superheat measures 12 K and subcooling measures 1 K with a bubbling sight glass. The correct conclusion is:",
              options: [
                "The valve is set too high and should be wound out",
                "The liquid supply is at fault — undercharge or restriction — and the valve is responding correctly",
                "The valve is set too low",
                "The condenser is overcharged",
              ],
              answer: 1,
              explain: "One kelvin of subcooling with a bubbling glass means flash gas is reaching the valve, so it cannot pass its rated mass flow whatever the setting. Adjusting it would leave the valve set dangerously low once the real fault is repaired.",
            },
            {
              q: "The bulb reads 15 °C while the evaporator outlet reads 8 °C on the same line, with saturated suction 5 °C. What does this tell you?",
              options: [
                "Superheat is 10 K and the valve is set correctly",
                "The bulb is not sensing the line properly — real superheat is 3 K and the valve is being held open on false information",
                "The refrigerant charge is too high",
                "The suction line pressure drop is excessive",
              ],
              answer: 1,
              explain: "The two readings should agree within about a kelvin. A 7 K gap means poor contact, wrong clock position, missing insulation or a warm draught. The coil is actually near floodback at 3 K while the valve believes it is running 10 K.",
            },
            {
              q: "In a written answer, why should you state the saturation temperature you converted the gauge pressure to?",
              options: [
                "It is required by AS/NZS 5149.2",
                "Because the conversion is a marked step and the subtraction cannot be checked without it",
                "Because gauges are calibrated in saturation temperature",
                "It is not necessary if the final answer is correct",
              ],
              answer: 1,
              explain: "Show-all-workings questions award marks for the method: the pressure, the refrigerant and the saturation temperature it converts to, then the subtraction with units. A bare final number cannot be part-credited if an arithmetic slip creeps in.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
