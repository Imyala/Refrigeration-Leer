/* =========================================================================
   Course content, module 309 — Alternating current circuits: single phase.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 9 — Alternating current circuits:
   single phase.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — alternating current circuits, single phase",
  ];

  const REFS_WAVE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — identifying a.c. waveforms: sinusoidal, square, sawtooth and triangular",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — mark/space ratio and the convention of stating a.c. values as RMS",
  ];

  const REFS_EMF = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — generation of an a.c. EMF by a loop rotating in a magnetic field",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Fleming's right-hand rule and the expression e = Blv sin theta",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — alternator poles, electrical versus mechanical degrees and n = 120f/p",
  ];

  const REFS_VALUES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — cycle, period, frequency and angular velocity of a sinusoidal waveform",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — instantaneous, maximum, peak-to-peak, average and root-mean-square values",
  ];

  const REFS_SCOPE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — use of oscilloscopes to measure d.c. and a.c. voltage levels",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — interpreting an oscilloscope display, dual-trace scopes and power analysers",
  ];

  const REFS_PHASOR = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phasor diagrams, reference phasors, lead and lag",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phasor addition by the parallelogram, tip-to-tail and trigonometric methods",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — sine, cosine and tangent ratios and Pythagoras' theorem applied to a.c. problems",
  ];

  const REFS_RL = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistance in a.c. circuits and non-inductive resistors",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — inductance in a.c. circuits and inductive reactance XL = 2 pi f L",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — inductors in series and parallel, chokes and ballasts",
  ];

  const REFS_C = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitors in a.c. circuits and capacitive reactance XC = 1/(2 pi f C)",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitors in series and parallel on a.c. and their applications",
    "AS/NZS 3000:2018 Wiring Rules — Clause 4.15, installation and discharge of capacitors",
  ];

  const REFS_SERIES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — R-L, R-C and R-L-C series a.c. circuits, impedance and phase angle",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — comparison of inductors and resistors as current-limiting devices",
  ];

  const REFS_PARALLEL = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — parallel a.c. circuits, branch currents and circuit impedance",
  ];

  const REFS_POWER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power in resistive, inductive and capacitive a.c. circuits",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — true, apparent and reactive power, the power triangle and power factor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — measuring single-phase power, energy and demand with wattmeters and analysers",
  ];

  const REFS_PFC = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effects and causes of low power factor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power factor correction and calculating capacitor size",
    "AS/NZS 3000:2018 Wiring Rules — Clause 4.15; local Service and Installation Rules on power factor",
  ];

  const REFS_RES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — harmonics, harmonic sources, sequences and their effects",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — series and parallel resonance and the resonant frequency",
    "AS/NZS 3000:2018 Wiring Rules — Clauses 1.5.11, 2.7 and 3.5.2, overvoltage and neutral conductor sizing for harmonic currents",
  ];

  const MODULES = [

  /* ======================================================================
     Module E.9 — Alternating current: single phase
     ====================================================================== */
  {
    id: "elec-ac-single-phase",
    stream: "elec",
    title: "E.9 · Alternating current: single phase",
    blurb: "Single-phase a.c. from first principles: how the sine wave is generated, RMS and peak values, phasors, reactance and impedance, resonance, power factor and how to correct it.",
    lessons: [

      /* ---------------------------------------------------------------- */
      {
        id: "ac-waveforms",
        title: "Alternating current and the waveforms you will meet",
        minutes: 11,
        simple: "Direct current is a steady push in one direction, like water from a tap. Alternating current pushes one way then the other, fifty times a second, so it wobbles like water sloshing in a bath. That wobble has a shape, and the shape our power supply uses is a smooth curve called a sine wave. Other shapes exist inside electronic gear, and knowing which one you are looking at tells you what the circuit is doing.",
        refs: REFS_WAVE,
        content: `
Everything in the a.c. half of your trade rests on one idea: the voltage at a
power point is not a fixed value. It rises from zero to a positive peak, falls
back through zero to a negative peak, and returns — fifty times every second.
If you cannot picture that shape, nothing that follows about reactance, phase
angle or power factor will make sense.

## Why the grid uses a.c. at all

Direct current works perfectly well for a torch or a car. It falls apart at
the scale of a state-wide network, for one reason: you cannot easily change
its voltage. Transmitting 200 MW at 415 V would need conductors the size of
tree trunks. Transmitting it at 330 kV needs a fraction of the copper, because
power is voltage times current and a higher voltage means a smaller current
for the same power.

Changing voltage cheaply and efficiently means a transformer, and a
transformer only works on a *changing* magnetic flux. Steady d.c. produces a
steady flux and induces nothing in the secondary. Alternating current produces
a continuously changing flux, so mutual induction works and transformers work.
The same argument applies to induction motors, solenoids, relays and contactor
coils. A.c. is used wherever self-induction or mutual induction is wanted.

## The sine wave

When a coil turns at a steady speed inside a uniform magnetic field, the
voltage it produces follows the mathematical sine function exactly. That is
not a design choice; it falls out of the geometry of a circle. The word
**sinusoidal** means the shape follows the sine function strictly — not
roughly, not a chain of half-circles, which is a common misconception.

The curve has no corners anywhere, because the rate of change is itself
changing smoothly. The first half is a mirror image of the second half: the
first half is entirely positive, the second entirely negative.

Four things make the sine wave the right waveform for power:

- It occurs naturally from rotating machinery, so it is easy and cheap to
  produce.
- It is the only waveform where the current drawn by a resistive load has the
  same shape as the voltage that drives it. Every other shape distorts.
- It gives the greatest usable power for a given physical size of machine.
- Because voltage, current and flux all alternate smoothly, anything relying
  on mutual induction — every transformer on the network — will work.

In the power industry, any waveform that is *not* sinusoidal is called
**distorted**. That word is a warning, not a description.

## The other waveforms

Other shapes are generated deliberately, but for control and signalling, never
for transmitting bulk energy. You will meet them on an oscilloscope screen.

| Waveform | What it looks like | Where you meet it |
|---|---|---|
| Direct voltage | A flat horizontal line. It may drift up or down over time but it does not repeat | Batteries, rectified supplies, control voltages |
| Sinusoidal | Smooth symmetrical curve about the zero line, constant rate of change | The mains supply, alternator output |
| Sawtooth | Rises at a steady rate, then collapses abruptly to its most negative value | Timing and sweep circuits, oscilloscope time bases |
| Triangular | Rises and falls at the same steady rate | Timing circuits, PWM comparators |
| Square (symmetrical) | Equal time on and off, abrupt transitions | Logic circuits, clock signals, inverter output stages |
| Rectangular (asymmetrical) | On time not equal to off time | Power control, variable frequency drives |

Sawtooth and triangular waves are easy to confuse. Both rise in a straight
line. The difference is the return: a triangular wave falls at the same rate
it rose, while a sawtooth drops almost vertically. Both are used in timing
because voltage changes in direct proportion to time.

The square wave switches between a positive level and zero — or between
positive and negative, where an electronic circuit must be driven hard off
rather than merely to zero. The transition looks instantaneous, but in a real
circuit it always takes a measurable time, and that finite switching time is
exactly what creates the electrical noise that non-linear loads inject into
an installation.

## Mark/space ratio

When the on time and the off time are not equal, the wave is asymmetrical or
rectangular, and the ratio of on time to off time is the **mark/space ratio**.
This is how a square wave controls power. A load fed by the wave only receives
energy while the wave is positive, so there are two ways to vary the power
delivered:

1. Keep the cycle length fixed and vary the proportion of on time to off time.
   The pulse frequency does not change. This is pulse-width modulation, used
   in variable-speed drives and inverter air conditioning.
2. Keep the on time fixed and vary the off time. The frequency of the pulses
   changes.

A wave that is on for 2.5 microseconds and off for 7.5 microseconds has a
mark/space ratio of 1:3 and a duty cycle of 25 per cent, so it delivers a
quarter of the power that continuous conduction would.

## How a.c. values are written

There is a convention worth learning now, because it removes a lot of
confusion later.

- Capital letters (V, I) are used for d.c. values.
- Lower-case letters (v, i) are used for a.c. *instantaneous* values — the
  value at one particular instant.
- RMS values are also written in capitals, because an RMS value does the same
  work as the equivalent d.c. value.

The second convention is the important one on site: **unless a value is
specifically labelled otherwise, an a.c. value is an RMS value.** When a
nameplate says 230 V, that is 230 V RMS. Modern a.c. instruments are
calibrated in RMS, and better instruments are marked *true RMS*, meaning they
read correctly even when the waveform is distorted rather than a clean sine.

## What to remember

- A.c. is used because transformers, induction motors and every other device
  relying on changing flux need a changing supply.
- A pure sine wave is smooth, symmetrical about zero, and is the only waveform
  that produces an undistorted current in a resistive load.
- Sawtooth, triangular, square and rectangular waves exist for control and
  timing, not for energy transmission.
- Mark/space ratio describes an asymmetrical square wave and is the basis of
  pulse-width power control.
- An a.c. value with no qualifier is an RMS value.
`,
        quiz: [
          {
            q: "Why can a transformer not change the voltage of a steady d.c. supply?",
            options: [
              "Because d.c. has too high a current for the windings",
              "Because a transformer needs a changing magnetic flux to induce a voltage in the secondary, and steady d.c. produces a steady flux",
              "Because the d.c. resistance of the primary is too low",
              "Because d.c. cannot pass through an iron core",
            ],
            answer: 1,
            explain: "Mutual induction depends on flux that is changing. Steady d.c. gives a constant flux, so nothing is induced in the secondary. The winding resistance is low, which is why a d.c. supply connected to a transformer primary is a near short circuit — but that is a consequence, not the reason transformation fails.",
          },
          {
            q: "A technician looks at two waveforms. Both rise in a straight line, but one falls at the same rate it rose while the other collapses almost vertically. Which is which?",
            options: [
              "The one falling at the same rate is a sawtooth; the vertical collapse is triangular",
              "The one falling at the same rate is triangular; the vertical collapse is a sawtooth",
              "Both are sawtooth waves at different frequencies",
              "Both are square waves with different mark/space ratios",
            ],
            answer: 1,
            explain: "A triangular wave is symmetrical in rise and fall. A sawtooth rises steadily then drops abruptly to its most negative value, which is what makes it useful as a sweep or timing ramp.",
          },
          {
            q: "A drive output is on for 2.5 ms and off for 7.5 ms in each cycle. What is the mark/space ratio and roughly what proportion of full power reaches the load?",
            options: [
              "3:1, about 75 per cent",
              "1:3, about 25 per cent",
              "1:4, about 20 per cent",
              "1:3, about 33 per cent",
            ],
            answer: 1,
            explain: "Mark (on) to space (off) is 2.5 to 7.5, which is 1:3. The cycle is 10 ms long and power flows for 2.5 ms of it, so the duty cycle is 2.5/10 = 25 per cent. The tempting 1:4 comes from comparing on time with total cycle time, which is duty cycle, not mark/space ratio.",
          },
          {
            q: "A motor nameplate reads 230 V. What does that value represent?",
            options: [
              "The peak value of the supply waveform",
              "The peak-to-peak value of the supply waveform",
              "The RMS value, because an unqualified a.c. value is always RMS",
              "The average value over one half cycle",
            ],
            answer: 2,
            explain: "By convention an a.c. value with no qualifier is RMS, the value that does the same work as the same number of d.c. volts. The peak of a 230 V supply is about 325 V and the peak-to-peak about 650 V — both real numbers, but neither is what a nameplate means.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "emf-generation",
        title: "How an a.c. EMF is generated",
        minutes: 12,
        simple: "Move a wire across a magnet's field and a voltage appears in the wire. Spin a loop of wire between two magnet poles and that voltage grows, shrinks, reverses and grows again once every turn. Which way it points depends on which way the wire is moving, and how big it is depends on how strong the magnet is, how long the wire is, and how fast it moves. That spinning loop is an alternator, and it is where every volt in the grid starts.",
        refs: REFS_EMF,
        content: `
A machine that produces an alternating voltage at its terminals is an
**alternator**. You will also hear "a.c. generator", which is correct, though
in Australian practice "generator" usually means a d.c. machine. Every
alternator, from a 2 kVA petrol set on a building site to a 600 MW turbine
alternator in a power station, does the same thing: it moves conductors and a
magnetic field past each other.

## The single-loop alternator

Picture a single loop of wire mounted on a shaft between the north and south
poles of a fixed magnet. Each end of the loop is brought out to a metal ring
on the shaft — a **slip-ring** — and a carbon brush rubs on each ring to carry
the current out to the external circuit.

Spin the loop and the two sides of the loop sweep through the magnetic flux.
Cutting flux induces an EMF in a conductor. Because the two sides move in
opposite directions at any instant, their EMFs add around the loop rather than
cancelling.

## Which way does the voltage point?

The direction of the induced EMF depends on the direction of relative motion
between the conductor and the flux. **Fleming's right-hand rule** gives it.
Hold the thumb, first finger and second finger of the right hand at right
angles to each other:

- First finger points along the **F**lux, north to south.
- Thumb points in the direction of **M**otion of the conductor.
- Second finger then gives the direction of the induced **E**MF and current.

Get into the habit of using the right hand for generators and the left for
motors. Swapping them is the single most common mistake in the exam.

## How big is the voltage?

Three things fix the size of the induced EMF: how dense the magnetic field is,
how much conductor is in that field, and how fast the two move relative to
each other. But there is a fourth factor — the *angle* at which the conductor
cuts the flux. A conductor sliding along the flux lines cuts nothing.

Putting all four together gives the generated EMF equation:

**e = B l v sin (theta)**

where e is the instantaneous induced voltage in volts, B is the flux density,
l is the length of conductor in the field in metres, v is the velocity in
metres per second, and theta is the angle of rotation.

### Worked example 1 — the EMF through one revolution

An alternator has B x l x v = 325 V. Find the terminal voltage at 0, 90, 180,
270 and 360 degrees of rotation.

- At 0 degrees: e = 325 x sin (0) = 325 x 0 = **0 V**
- At 90 degrees: e = 325 x sin (90) = 325 x 1 = **325 V**
- At 180 degrees: e = 325 x sin (180) = 325 x 0 = **0 V**
- At 270 degrees: e = 325 x sin (270) = 325 x (-1) = **-325 V**
- At 360 degrees: e = 325 x sin (360) = 325 x 0 = **0 V**

Those five numbers are the skeleton of the sine wave: zero, maximum positive,
zero, maximum negative, zero.

## What the loop is doing at each of those points

- **At 0 degrees** the loop is vertical and its sides are sliding *along* the
  flux, not across it. No flux is cut, so no EMF is generated.
- **Rotating towards 90 degrees** the sides begin cutting the flux at an
  increasing angle, so the EMF rises.
- **At 90 degrees** the sides cut squarely across the flux at 90 degrees. This
  is maximum EMF.
- **Towards 180 degrees** the cutting angle falls away again and so does the
  EMF, back to zero.
- **Past 180 degrees** each side of the loop is now travelling in the opposite
  direction relative to the flux, while the field direction is unchanged.
  The induced EMF must therefore reverse.
- **At 270 degrees** the EMF is again maximum, but of opposite polarity, and
  by 360 degrees the loop is back where it started with zero output.

One revolution has produced one complete alternation in each direction: one
**cycle**.

## Rotating coil or rotating field?

The relative motion is what matters, so it makes no difference whether the
coil moves past the field or the field moves past the coil. Large machines
almost always keep the generating coils stationary in the stator and rotate
the magnetic field instead. The advantages are worth knowing:

- No slip-rings are needed to carry the load current, so the output
  connections are solid. Solid connections handle far higher voltages and
  currents safely.
- On small alternators the rotating field can come from a permanent magnet.
- On large alternators the field is fed from a small excitation generator,
  which keeps the field adjustable while removing the main brush gear.
- Removing sliding contacts removes friction, brush wear, carbon dust and a
  whole class of maintenance and safety problems.

Output voltage is raised by adding turns to the coil, adding more coils,
increasing the flux density, or spinning faster.

>! The iron core of a rotor or stator is itself a conductor moving in a
>! magnetic field, so currents are induced in the iron. These eddy currents,
>! together with hysteresis, are the "iron losses" and they appear as heat.
>! A machine that is running hot with no obvious overload may be suffering
>! core damage — shorted laminations — not a winding fault.

## Poles, electrical degrees and frequency

A two-pole alternator produces one electrical cycle per mechanical
revolution. Put four poles in the machine and a given coil side passes north,
south, north, south in one turn, producing **two** electrical cycles per
revolution.

So the number of cycles per second depends on the poles as well as on the
speed. To avoid confusion we write one electrical cycle as 360 degrees
electrical (360 degrees E) and label mechanical rotation in degrees mechanical
(degrees M). For a two-pole machine they are equal. For a four-pole machine,
360 degrees M produces 720 degrees E.

The relationship is:

**n = 120 f / p**

where n is speed in revolutions per minute, f is frequency in hertz and p is
the number of poles. The 120 comes from 60 seconds in a minute multiplied by
the two poles that make up one pole pair.

### Worked example 2 — driving speed for 50 Hz

What speed must an alternator be driven at to generate 50 Hz?

Two-pole machine:

- n = 120 f / p = (120 x 50) / 2
- n = 6000 / 2 = **3000 rpm**

Four-pole machine:

- n = 120 f / p = (120 x 50) / 4
- n = 6000 / 4 = **1500 rpm**

### Worked example 3 — the other way round

A six-pole alternator is driven at 1000 rpm. What frequency does it produce?

- Transpose: f = n p / 120
- f = (1000 x 6) / 120 = 6000 / 120
- f = **50 Hz**

This is why engine-driven sets are governed so tightly. A generator set
running 5 per cent slow delivers 47.5 Hz, and every induction motor connected
to it runs 5 per cent slow with reduced cooling.

## On the job

- Generators use the right-hand rule; motors use the left.
- Zero output happens at the position of *no flux cutting*, not at the
  position of no movement.
- Frequency is set by speed and poles together, never by speed alone.
- Fewer poles means a faster machine for the same frequency; a two-pole
  50 Hz alternator must turn at 3000 rpm.
- Solid stator connections with a rotating field are preferred on anything
  large, because slip-rings limit voltage and add maintenance.
`,
        quiz: [
          {
            q: "A single-loop alternator produces zero output twice per revolution. Why?",
            options: [
              "Because the loop momentarily stops moving at those points",
              "Because at those points the loop sides move parallel to the flux and cut no flux",
              "Because the brushes lose contact with the slip-rings at those points",
              "Because the magnetic field reverses at those points",
            ],
            answer: 1,
            explain: "The loop turns at constant speed throughout, and the field polarity is fixed. Output falls to zero where the conductors are sliding along the flux lines instead of across them, so no flux is being cut.",
          },
          {
            q: "An eight-pole alternator must produce 50 Hz. What speed is required?",
            options: [
              "3000 rpm",
              "1500 rpm",
              "750 rpm",
              "375 rpm",
            ],
            answer: 2,
            explain: "n = 120f/p = (120 x 50)/8 = 6000/8 = 750 rpm. More poles means more electrical cycles per revolution, so the machine can turn slower for the same frequency — which is why low-speed hydro machines carry many poles.",
          },
          {
            q: "Why do large alternators rotate the magnetic field rather than the generating coils?",
            options: [
              "Because a rotating field produces a higher frequency for the same speed",
              "Because the load current can then leave through solid stator connections instead of slip-rings and brushes",
              "Because permanent magnets are cheaper than copper",
              "Because it removes the need for an iron core",
            ],
            answer: 1,
            explain: "Relative motion is all that matters for induction, so either arrangement generates. Keeping the output windings stationary means the full load current never passes through sliding contacts, which allows much higher voltages and currents and removes brush wear and dust.",
          },
          {
            q: "In e = Blv sin (theta), what does the sin (theta) term account for?",
            options: [
              "The strength of the magnetic field",
              "The number of turns in the coil",
              "The angle at which the conductor cuts the flux at that instant",
              "The resistance of the winding",
            ],
            answer: 2,
            explain: "B, l and v fix the maximum possible EMF. The sine term scales it for the instantaneous cutting angle: 1 when the conductor cuts squarely across the flux, 0 when it slides along the flux. Winding resistance is a separate matter and affects terminal voltage under load, not the generated EMF.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "sine-wave-values",
        title: "Cycle, period, frequency and the values of a sine wave",
        minutes: 13,
        simple: "A sine wave is never one number, it is a whole trip from zero up, down through zero, and back. So we describe it several ways: how long one trip takes, how many trips per second, how high it gets, and the one value that matters most, which is the steady d.c. voltage that would heat a kettle element just as fast. That last one is the RMS value, and for a sine wave it is 0.707 of the peak.",
        refs: REFS_VALUES,
        content: `
An a.c. voltage has a different value at every instant, so a single number
cannot describe it. Instead we use a family of values, each answering a
different question. Learning which one to use, and when, is the whole game.

## Cycle and period

A **cycle** is one complete recurring set of events — like summer, autumn,
winter, spring. One cycle of an alternating waveform takes it from zero, up to
maximum positive, back through zero, down to maximum negative and back to
zero. That is 360 degrees E.

The **period** (symbol T) is the time one cycle takes, in seconds.

## Frequency

The **frequency** (symbol f) is the number of cycles completed in one second,
measured in hertz (Hz). In Australia the supply frequency is **50 Hz** — fifty
complete sine waves every second.

Period and frequency are reciprocals:

- **f = 1 / T**
- **T = 1 / f**

At 50 Hz: T = 1 / 50 = 0.02 s = **20 ms**. Burn that number in. Every time you
see a 50 Hz waveform on a scope, one cycle is 20 ms wide, one half-cycle is
10 ms, and one quarter-cycle is 5 ms.

## Angular velocity

Because the wave comes from rotation, it is often more convenient to work in
radians per second than in degrees. The **angular velocity** (symbol omega) is:

**omega = 2 pi f**

At 50 Hz: omega = 2 x 3.1416 x 50 = **314.2 radians per second**.

That lets the instantaneous value be written against time rather than angle:

**v = Vmax sin (omega t)**

## Instantaneous value

The **instantaneous value** is the value at one particular moment. For a sine
wave:

- **v = Vmax x sin (theta)** for voltage
- **i = Imax x sin (theta)** for current

Because sin (90 degrees) = 1, the maximum occurs at 90 degrees, which is why
the peak value is written Vmax or Vm.

### Worked example 1 — instantaneous voltage at five angles

The maximum EMF generated in an alternator coil is 200 V. Find the
instantaneous voltage at 30, 75, 150, 240 and 310 degrees.

- v = Vmax sin (theta) = 200 x sin (30) = 200 x 0.500 = **100 V**
- v = 200 x sin (75) = 200 x 0.966 = **193.2 V**
- v = 200 x sin (150) = 200 x 0.500 = **100 V**
- v = 200 x sin (240) = 200 x (-0.866) = **-173.2 V**
- v = 200 x sin (310) = 200 x (-0.766) = **-153.2 V**

Note that 30 degrees and 150 degrees give the same value: the first half of
the wave is a mirror image about 90 degrees. Beyond 180 degrees the sine is
negative, and so is the voltage.

### Worked example 2 — instantaneous voltage against time

A 230 V 50 Hz supply has a peak of 325.3 V. What is the instantaneous voltage
2 ms after the wave crosses zero going positive?

- omega = 2 pi f = 2 x 3.1416 x 50 = 314.2 rad/s
- omega t = 314.2 x 0.002 = 0.6284 radians, which is 36 degrees
- v = Vmax sin (omega t) = 325.3 x sin (36) = 325.3 x 0.5878
- v = **191.2 V**

## Peak and peak-to-peak

The **peak** or maximum value (Vmax) is the height of the wave from the zero
line to either tip.

The **peak-to-peak** value is measured from the positive tip to the negative
tip. For a symmetrical waveform that is simply twice the peak:

**Vp-p = 2 x Vmax**

Peak-to-peak matters on the job when you are reading an oscilloscope trace
that has no visible zero line — you can still count divisions tip to tip.

## Average value

Mathematically the average of a sine function over a half-cycle is 2 divided
by pi, which is **0.637**:

- **Vav = 0.637 x Vmax**
- **Iav = 0.637 x Imax**

Two cautions. First, this only holds for a sine wave. Second, it applies to
one half-cycle only. Over a full cycle the negative half cancels the positive
half exactly, so the average of a complete a.c. cycle is **zero** — which is
why a moving-coil (d.c.) meter reads zero on raw a.c. Average values matter
mostly in rectifier and battery-charging work, where a.c. is converted to d.c.

## RMS — the value that does the work

Average value is useless for comparing the heating or working effect of a.c.
against d.c. For that we use the **root-mean-square** value: square the
instantaneous values, take their mean, then take the square root. The result
is the value of a.c. that produces exactly the same heating effect as the same
number of d.c. volts.

For a sine wave:

- **Vrms = 0.707 x Vmax**
- **Irms = 0.707 x Imax**

and transposed:

- **Vmax = Vrms / 0.707** (or Vrms x 1.414)

### Worked example 3 — the peak of the domestic supply

- Vmax = Vrms / 0.707 = 230 / 0.707
- Vmax = **325.3 V**
- Vp-p = 2 x 325.3 = **650.6 V**

That is why insulation and semiconductor ratings on a 230 V circuit must
withstand well over 325 V, and why a 400 V d.c.-rated component is not
generous on a 230 V a.c. circuit — it is barely adequate.

## Form factor and peak factor

Two ratios tie these values together and both are worth knowing.

**Form factor** = RMS value / average value = 0.707 / 0.637 = **1.11** for a
sine wave. Older rectifier-type a.c. meters actually respond to the average
value and are simply scaled by 1.11 so the dial reads RMS. That works
perfectly on a clean sine and reads wrong on anything else — the reason true
RMS instruments exist.

**Peak factor** (also called crest factor) = peak value / RMS value =
1 / 0.707 = **1.414** for a sine wave. A distorted waveform with tall narrow
current peaks — a switch-mode power supply, for instance — can have a crest
factor of 2.5 or 3. Both factors are 1.0 for pure d.c. and both change with
waveform shape, so quote them only for a sine wave unless you have measured
otherwise.

| Quantity | Sine wave relationship | For a 230 V supply |
|---|---|---|
| RMS | 0.707 x Vmax | 230 V |
| Peak (max) | 1.414 x Vrms | 325.3 V |
| Peak-to-peak | 2 x Vmax | 650.6 V |
| Average (half cycle) | 0.637 x Vmax | 207.2 V |
| Form factor | RMS / average | 1.11 |
| Peak factor | Peak / RMS | 1.414 |
| Period at 50 Hz | 1 / f | 20 ms |

### Worked example 4 — putting it all together

Take a sine-shaped a.c. waveform whose maximum value is 300 V and whose period
measures 50 ms. Work out its frequency, its peak-to-peak value, its average and
RMS values, and the instantaneous value 45 degrees into the cycle.

Frequency:

- f = 1 / T = 1 / 0.05
- f = **20 Hz**

Peak-to-peak:

- Vp-p = 2 x Vmax = 2 x 300
- Vp-p = **600 V**

Average:

- Vav = 0.637 x Vmax = 0.637 x 300
- Vav = **191.1 V**

RMS:

- Vrms = 0.707 x Vmax = 0.707 x 300
- Vrms = **212.1 V**

Instantaneous value at 45 degrees:

- v = Vmax sin (theta) = 300 x sin (45) = 300 x 0.7071
- v = **212.1 V**

The last two coming out equal is not a coincidence: the RMS value of a sine
wave is its instantaneous value at 45 degrees.

## What to remember

- One cycle at 50 Hz occupies 20 ms; f and T are reciprocals.
- The instantaneous value needs the angle; the peak, average and RMS values
  describe the whole wave.
- RMS is the working value: it is what meters read, what nameplates state and
  what you use in every power calculation.
- The 0.707, 0.637, 1.11 and 1.414 factors apply to sine waves only. On a
  distorted waveform you need a true RMS instrument.
- Peak voltage on a 230 V supply is 325 V, and that is what insulation sees.
`,
        quiz: [
          {
            q: "An oscilloscope shows a 50 Hz supply. How wide is one complete cycle on the time axis?",
            options: [
              "50 ms",
              "20 ms",
              "10 ms",
              "5 ms",
            ],
            answer: 1,
            explain: "T = 1/f = 1/50 = 0.02 s = 20 ms. The 10 ms answer is one half cycle and 5 ms is a quarter cycle — both useful numbers, but not one full cycle.",
          },
          {
            q: "A moving-coil meter connected directly across a 230 V a.c. supply reads zero. What does this show?",
            options: [
              "The meter is faulty",
              "The supply is dead",
              "The average value of a complete a.c. cycle is zero, because the negative half cancels the positive half",
              "The RMS value of a sine wave is zero",
            ],
            answer: 2,
            explain: "A moving-coil movement responds to the average value. Over a full cycle a symmetrical a.c. wave averages to zero, so the needle sits still. The 0.637 average applies only to a half cycle, which is why rectification is used in average-responding a.c. meters.",
          },
          {
            q: "A waveform has a peak value of 400 V. What are its RMS and peak-to-peak values, assuming it is sinusoidal?",
            options: [
              "RMS 282.8 V, peak-to-peak 800 V",
              "RMS 565.6 V, peak-to-peak 800 V",
              "RMS 254.8 V, peak-to-peak 400 V",
              "RMS 282.8 V, peak-to-peak 400 V",
            ],
            answer: 0,
            explain: "Vrms = 0.707 x 400 = 282.8 V and Vp-p = 2 x 400 = 800 V. The 254.8 V figure is the average value (0.637 x 400), which is a common trap because the two factors look similar.",
          },
          {
            q: "Why does a rectifier-type analogue a.c. voltmeter read incorrectly on the distorted current drawn by a switch-mode power supply?",
            options: [
              "Because it responds to the average value and is scaled by the sine-wave form factor of 1.11, which no longer applies",
              "Because its coil resistance changes with frequency",
              "Because distorted waveforms have no RMS value",
              "Because it is calibrated for d.c. only",
            ],
            answer: 0,
            explain: "The movement measures average and the dial is multiplied by 1.11 to display RMS. That factor is only correct for a sine wave. A distorted wave has a different form factor, so the displayed RMS is wrong — hence true RMS instruments, which compute RMS from the actual samples.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "oscilloscope",
        title: "Measuring d.c. and a.c. with an oscilloscope",
        minutes: 11,
        simple: "A multimeter gives you one number. An oscilloscope draws you the picture: it plots voltage going up the screen against time going across. Once you know how many volts each square is worth and how much time each square is worth, you can read peak voltage, peak-to-peak voltage and frequency straight off the grid by counting squares.",
        refs: REFS_SCOPE,
        content: `
An oscilloscope shows what a voltage is doing over time, as a picture. Any
electrical quantity you can convert into a voltage — current through a clamp,
pressure through a transducer, engine crank position through a sensor — can be
displayed and studied. Oscilloscopes look intimidating only because they are
so versatile.

They are standard equipment in electronics labs, in automotive workshops for
injection and engine-management diagnosis, in medical equipment, in broadcast
work and in any plant with a serious amount of electronic control.

## CRO or DSO

Older instruments were **cathode ray oscilloscopes** (CROs) — large, heavy,
bench-bound, and displaying a live trace on a phosphor screen. Modern
instruments are **digital storage oscilloscopes** (DSOs) with LCD or LED
screens. A DSO samples the signal, stores it, and can then hold it, expand
it, measure it automatically, keep settings in memory, and export the captured
waveform to a computer or network. The footprint difference is dramatic: a
DSO that outperforms a bench CRO fits in a toolbag.

Handheld scopes and handheld **power quality analysers** — the Fluke 43x class
of instrument, for example — have become part of the standard kit for
electrotechnology workers. They measure like a multimeter but also show the
waveform, log it, and calculate true, apparent and reactive power and harmonic
content.

## Reading the screen

The display carries a grid. Each square is one **division**. Two controls set
what a division is worth:

- The vertical attenuator sets **volts per division** (V/div).
- The time base sets **time per division** (s/div, ms/div or microseconds per
  division).

Then it is arithmetic. Count divisions, multiply by the setting.

- Peak-to-peak volts = (vertical divisions tip to tip) x (V/div)
- Peak volts = peak-to-peak / 2
- RMS volts (sine wave only) = peak x 0.707
- Period = (horizontal divisions for one cycle) x (time/div)
- Frequency = 1 / period

### Worked example 1 — a sinusoidal trace

Two cycles of a sine wave occupy 8 divisions horizontally and the trace is
6.8 divisions tall from tip to tip. The attenuator is on 50 V/div and the time
base on 5 ms/div. Find the peak-to-peak voltage, the RMS voltage and the
frequency.

Horizontal:

- 8 divisions for 2 cycles = 4 divisions per cycle
- T = 4 x 5 ms = 20 ms = 0.02 s
- f = 1 / T = 1 / 0.02 = **50 Hz**

Vertical:

- Vp-p = 6.8 x 50 = **340 V**
- Vmax = 340 / 2 = 170 V
- Vrms = 0.707 x 170 = **120.2 V**

### Worked example 2 — a lower-voltage trace

The same trace shape is displayed with the attenuator on 5 V/div and the time
base on 10 ms/div. The waveform is 6 divisions tall tip to tip and one cycle
occupies 4 divisions. Find the peak-to-peak voltage, the peak voltage, the RMS
voltage and the frequency.

- Vp-p = 6 x 5 = **30 V**
- Vmax = 30 / 2 = **15 V**
- Vrms = 0.707 x 15 = **10.6 V**
- T = 4 x 10 ms = 40 ms = 0.04 s
- f = 1 / 0.04 = **25 Hz**

## The time base does not change the signal

A common beginner error is to think a waveform has changed frequency when only
the time base has been altered. Consider one square wave viewed three ways:

| Time base | Divisions per cycle | Period | Frequency |
|---|---|---|---|
| 1 microsecond/div | 10 | 10 microseconds | 100 kHz |
| 2 microseconds/div | 5 | 10 microseconds | 100 kHz |
| 10 microseconds/div | 1 | 10 microseconds | 100 kHz |

Identical signal, identical frequency, three appearances. At 1 microsecond per
division the high period is clearly 2.5 divisions and the low period 7.5
divisions, so mark/space is easy to read. At 10 microseconds per division the
whole cycle is squeezed into one division and mark/space is almost
unreadable. Choose a slow time base to see the overall pattern and a fast one
to expand a single cycle for analysis.

## Measuring d.c. levels

For d.c., set the input coupling to DC, establish where the zero (ground)
reference line sits on the screen with the input shorted or coupling set to
GND, then apply the signal and count divisions from that reference. On AC
coupling the scope blocks the d.c. component — useful for looking at a small
ripple riding on a large d.c. rail, but it will hide the d.c. level itself.
Reading zero volts d.c. because the scope was left on AC coupling is a classic
lost afternoon.

## Dual and multi-trace scopes

Comparing an input waveform with an output waveform, or a voltage with a
current, needs both on screen at once against the same time axis. A dual-trace
scope has two vertical inputs and a single time base, so both signals are
displayed against identical timing and any displacement between them can be
measured directly — that displacement is the phase difference. There is no
theoretical limit to the number of traces, but four is the practical limit,
and four channels is exactly what is needed to display a three-phase supply
with its three waveforms 120 degrees apart plus the neutral.

## What a scope is used for

Electrical work:

- Observing waveform shape in a circuit
- Measuring voltage, current, power and phase angle
- Comparing an unknown frequency with a known one
- Measuring very short time intervals
- Examining the characteristics of magnetic materials
- Examining the harmonic content of a waveform

Electronic work: aligning tuned circuits for audio and radio frequency,
television servicing, modulation measurement in transmitters and testing radio
components.

>! Oscilloscopes usually reference their probe earth to the mains protective
>! earth. Clipping that earth lead to a live conductor puts a fault current
>! straight through the instrument and its case. On mains-connected work use a
>! properly rated differential probe or an instrument with isolated inputs,
>! never a mains-referenced scope with a "floated" earth by removing the earth
>! pin. Check the CAT rating of the probe and the scope against the circuit
>! before connecting.

## On the job

- Set the vertical and horizontal controls first, then read the grid — every
  measurement is divisions multiplied by the setting.
- Peak-to-peak is the easiest reading to take because you do not need a zero
  line.
- Convert to RMS with the 0.707 factor only if the trace really is sinusoidal.
- A change of time base changes the picture, never the signal.
- Never earth a mains-referenced probe to anything but earth potential.
`,
        quiz: [
          {
            q: "A sine wave occupies 5 divisions per cycle with the time base on 2 ms/div, and is 8 divisions tip to tip with the attenuator on 20 V/div. What are the frequency and the RMS voltage?",
            options: [
              "100 Hz and 160 V RMS",
              "100 Hz and 56.6 V RMS",
              "10 Hz and 113.1 V RMS",
              "50 Hz and 80 V RMS",
            ],
            answer: 1,
            explain: "T = 5 x 2 ms = 10 ms, so f = 1/0.01 = 100 Hz. Vp-p = 8 x 20 = 160 V, so Vmax = 80 V and Vrms = 0.707 x 80 = 56.6 V. Answer 1 treats the peak-to-peak reading as if it were RMS, which is the usual mistake.",
          },
          {
            q: "A technician changes the time base from 5 ms/div to 1 ms/div and the waveform now shows only one cycle across the screen instead of five. What has happened to the signal?",
            options: [
              "Its frequency has fallen to one fifth of the original",
              "Its frequency has risen five times",
              "Nothing — only the horizontal scale has changed, so the same cycle occupies more divisions",
              "Its amplitude has increased five times",
            ],
            answer: 2,
            explain: "The time base only sets how much time one division represents. A faster sweep spreads each cycle over more divisions, expanding it for analysis. The period in seconds, and therefore the frequency, is unchanged.",
          },
          {
            q: "Why must a dual-trace oscilloscope, rather than two separate readings on one channel, be used to measure the phase difference between a voltage and a current?",
            options: [
              "Because one channel cannot display a.c.",
              "Because both signals must be displayed against the same time base for their displacement in time to be seen",
              "Because a single channel measures only RMS values",
              "Because phase difference can only be measured on a CRO",
            ],
            answer: 1,
            explain: "Phase difference is a displacement in time between two waves. Showing them one after the other loses the timing relationship entirely. Two channels sharing one time base preserve it, so the horizontal gap between the two zero crossings can be read directly and converted to degrees.",
          },
          {
            q: "A scope is left on AC input coupling while a technician tries to measure a 24 V d.c. control supply. What will be seen?",
            options: [
              "A trace 24 V above the zero line",
              "A flat trace at the zero line, because AC coupling blocks the d.c. component, with only any ripple visible",
              "A 50 Hz sine wave",
              "A trace 24 V below the zero line",
            ],
            answer: 1,
            explain: "AC coupling puts a capacitor in series with the input, which blocks steady d.c. and passes only the changing part. That is exactly what you want to examine a few hundred millivolts of ripple on a 24 V rail, and exactly wrong for reading the rail itself.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "phasors",
        title: "Phasors, phase difference and phasor addition",
        minutes: 13,
        simple: "Two a.c. voltages of 200 V and 113 V do not always add up to 313 V, because they may not peak at the same moment. A phasor is a little arrow that stores both the size of a voltage or current and the moment it peaks. Adding arrows is like walking 200 m east then 113 m north: you do not end up 313 m away, you end up 230 m away in a new direction.",
        refs: REFS_PHASOR,
        content: `
Once a circuit contains anything other than pure resistance, the current stops
peaking at the same instant as the voltage. Arithmetic addition then gives the
wrong answer, and a tradesperson who adds meter readings straight up will
misjudge a circuit badly. Phasors are the tool that fixes this.

## Vector, phasor, reference

A **vector** is a line whose length represents a magnitude and whose direction
represents an angle — force, velocity, and so on.

A **phasor** is a rotating vector used for a.c. quantities. It has a reference,
a magnitude and an angle. The length of a voltage or current phasor represents
its **RMS value**, and the angle represents its phase difference from the
reference. Unless told otherwise, always scale phasor diagrams to RMS.

Two conventions make phasor diagrams readable:

- The **reference phasor** is drawn horizontally to the right, and every angle
  is measured from it.
- All phasors are assumed to rotate **anticlockwise**.

Which quantity is the reference? The one that is common to the whole circuit:

- **Series circuit: use current as the reference**, because the same current
  flows in every component.
- **Parallel circuit: use voltage as the reference**, because the same voltage
  appears across every branch.

## In phase, leading and lagging

When voltage and current cross zero together and reach their peaks together in
the same direction, they are **in phase**, and their phasors sit on top of one
another at 0 degrees.

When they do not, they are **out of phase**, and the angle between them is the
**phase angle**, symbol phi. (Phi is the angle between two phasors. Theta is
an angle of rotation. They are not interchangeable.)

- A phasor drawn **anticlockwise from** the reference is **leading** it — it
  gets there first.
- A phasor drawn **clockwise from** the reference is **lagging**.

On a sine-wave plot: if the current wave starts its rise 60 degrees *after*
the voltage wave, the current lags by 60 degrees. If it starts 60 degrees
*before*, it leads by 60 degrees. The circuit rule to memorise now, and prove
in the next lessons, is **CIVIL**: in a **C**apacitor, **I** leads **V**;
**V** leads **I** in an **L** (inductor).

## The trigonometry you need

Every phasor problem ends in a right-angle triangle, so two pieces of
mathematics carry the whole topic.

**SOH CAH TOA** relates the sides of a right-angle triangle to its angles. The
hypotenuse is the longest side, the opposite is opposite the angle you are
working with, and the adjacent is beside it.

- Sine = Opposite / Hypotenuse
- Cosine = Adjacent / Hypotenuse
- Tangent = Opposite / Adjacent

**Pythagoras' theorem** gives a missing side when two are known:

- Hypotenuse = square root of (Opposite squared + Adjacent squared)
- Opposite = square root of (Hypotenuse squared - Adjacent squared)
- Adjacent = square root of (Hypotenuse squared - Opposite squared)

### Worked example 1 — the three Pythagoras cases

(a) Adjacent 40 units, opposite 50 units. Find the hypotenuse.

- Hyp = square root of (50 squared + 40 squared) = square root of (2500 + 1600)
- Hyp = square root of 4100 = **64.03 units**

(b) Hypotenuse 100 units, opposite 70 units. Find the adjacent.

- Adj = square root of (100 squared - 70 squared) = square root of (10000 - 4900)
- Adj = square root of 5100 = **71.41 units**

(c) Adjacent 60 units, hypotenuse 90 units. Find the opposite.

- Opp = square root of (90 squared - 60 squared) = square root of (8100 - 3600)
- Opp = square root of 4500 = **67.08 units**

## Adding phasors graphically

Out-of-phase quantities cannot be added arithmetically. One method is to draw
them to scale and use the **parallelogram** construction:

1. Draw the reference phasor horizontally to the right.
2. Draw each phasor to scale at its measured angle from the reference, using a
   protractor.
3. Set a compass to the length of the first phasor and, from the tip of the
   second, strike an arc.
4. Set the compass to the length of the second phasor and, from the tip of the
   first, strike a second arc.
5. Draw the resultant from the common origin to where the arcs cross.
6. Measure the resultant with a rule and apply the scale; measure its angle
   from the reference with a protractor.

The **tip-to-tail** method gives the same answer with less drawing: draw the
first phasor, start the second at the arrowhead of the first (using a
construction line parallel to the reference to get its angle right), then draw
the resultant from the start of the first to the tip of the last.

### Worked example 2 — two voltages at awkward angles

Two voltages are connected in series. Voltage A is 150 V and leads the current
by 45 degrees. Voltage B is 100 V and lags the current by 30 degrees. Find the
total EMF and its phase angle.

Series circuit, so current is the reference. Resolve each phasor into a part
along the reference and a part at right angles to it:

- Va along reference = 150 x cos (45) = 150 x 0.7071 = 106.07 V
- Va at right angles = 150 x sin (45) = +106.07 V (leading, so positive)
- Vb along reference = 100 x cos (30) = 100 x 0.8660 = 86.60 V
- Vb at right angles = 100 x sin (30) = -50.00 V (lagging, so negative)

Add the two directions separately:

- Along the reference: 106.07 + 86.60 = 192.67 V
- At right angles: 106.07 - 50.00 = 56.07 V

Now combine with Pythagoras and tangent:

- Vtotal = square root of (192.67 squared + 56.07 squared)
- Vtotal = square root of (37121.7 + 3143.8) = square root of 40265.5
- Vtotal = **200.7 V**
- phi = tan inverse (56.07 / 192.67) = tan inverse (0.2910)
- phi = **16.2 degrees leading**

A careful scale drawing of the same problem gives about 201 V at about
17 degrees leading. That is the honest limit of graphical work: it is quick,
it shows the physical relationship at a glance, and it is accurate to about a
degree. Use it to check calculations, not to replace them.

## Adding phasors by trigonometry when they are at 90 degrees

Most series-circuit problems put one phasor in phase with the reference and
one at exactly 90 degrees to it. That is a plain right-angle triangle and no
resolving is needed.

### Worked example 3 — the 90 degree case

Two voltages in series: A is 200 V in phase with the current, B is 113.58 V
and leads the current by 90 degrees. Find the total voltage and phase angle.

Phase angle first, using tangent:

- tan phi = Opposite / Adjacent = Vb / Va = 113.58 / 200 = 0.5679
- phi = tan inverse (0.5679) = **29.59 degrees leading**

Total voltage, using cosine:

- cos phi = Adjacent / Hypotenuse = Va / Vtotal
- Vtotal = Va / cos phi = 200 / cos (29.59) = 200 / 0.8696
- Vtotal = **230 V**

Or, for the magnitude alone, straight to Pythagoras:

- Vtotal = square root of (Va squared + Vb squared)
- Vtotal = square root of (200 squared + 113.58 squared)
- Vtotal = square root of (40000 + 12900.4) = square root of 52900.4
- Vtotal = **230 V**

Note what happened: 200 V and 113.58 V measured with a voltmeter across two
series components give 230 V across the pair, not 313.58 V. That is not a
faulty meter. It is the whole reason phasors exist.

### Worked example 4 — practise the method

Two voltages in series: A is 180 V in phase with the current, B is 120 V
leading the current by 90 degrees. Find the total voltage and the phase angle.

- Vtotal = square root of (180 squared + 120 squared) = square root of (32400 + 14400)
- Vtotal = square root of 46800 = **216.3 V**
- phi = tan inverse (120 / 180) = tan inverse (0.6667)
- phi = **33.69 degrees leading**

## On the job

- Series circuit, current is the reference; parallel circuit, voltage is the
  reference.
- Phasor lengths are RMS values, and anticlockwise is ahead.
- Never add out-of-phase meter readings arithmetically. Voltmeter readings
  around an R-L or R-C series circuit will always sum to more than the supply
  voltage, and that is correct behaviour.
- For phasors at 90 degrees, Pythagoras gives the magnitude and tangent gives
  the angle. For other angles, resolve into in-phase and right-angle parts
  first, then combine.
`,
        quiz: [
          {
            q: "A voltmeter reads 96 V across a resistor and 128 V across a pure inductor in the same series circuit. What is the supply voltage?",
            options: [
              "224 V, the sum of the two readings",
              "160 V, the phasor sum, because the two voltages are 90 degrees apart",
              "32 V, the difference of the two readings",
              "112 V, the average of the two readings",
            ],
            answer: 1,
            explain: "VR is in phase with the current and VL leads it by 90 degrees, so they form a right-angle triangle: square root of (96 squared + 128 squared) = square root of 25600 = 160 V. Adding arithmetically to 224 V would be correct only if both were in phase, which they never are in an R-L circuit.",
          },
          {
            q: "In a parallel circuit, which quantity should be used as the reference phasor, and why?",
            options: [
              "Current, because it divides between the branches",
              "Voltage, because it is common to every branch",
              "Impedance, because it is the largest quantity",
              "Whichever is largest in magnitude",
            ],
            answer: 1,
            explain: "The reference is always the quantity common to all parts of the circuit. In parallel that is the voltage; in series it is the current. Choosing the wrong reference makes the angles meaningless.",
          },
          {
            q: "A current phasor is drawn 40 degrees clockwise from the voltage reference. What does this describe?",
            options: [
              "A current leading the voltage by 40 degrees, so a capacitive circuit",
              "A current lagging the voltage by 40 degrees, so an inductive circuit",
              "A current in phase with the voltage",
              "A resonant circuit",
            ],
            answer: 1,
            explain: "Phasors rotate anticlockwise, so a phasor drawn clockwise from the reference reaches the reference position later — it lags. Lagging current means the circuit is predominantly inductive, which fits CIVIL: V leads I in an inductor.",
          },
          {
            q: "Voltage A is 150 V leading the reference current by 45 degrees, and voltage B is 100 V lagging it by 30 degrees. Why is the resultant about 201 V rather than 250 V?",
            options: [
              "Because the two voltages partly oppose one another in the direction at right angles to the reference",
              "Because RMS values must be halved before adding",
              "Because the meter readings must have been wrong",
              "Because voltages in series always subtract",
            ],
            answer: 0,
            explain: "Resolved along the reference the two add (106.07 + 86.60 = 192.67 V), but at right angles one leads and one lags, so they partly cancel (106.07 - 50.00 = 56.07 V). The resultant is the phasor sum of those two, 200.7 V at 16.2 degrees leading — always less than the arithmetic sum unless the phasors are in phase.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "resistance-inductance-ac",
        title: "Resistance and inductance in a.c. circuits",
        minutes: 13,
        simple: "A heater element treats a.c. exactly like d.c.: push harder, more current, and the current rises and falls in step with the voltage. A coil of wire is different. Every time the current tries to change, the coil fights back, so the current is always running late behind the voltage. That fight is measured in ohms and it gets worse as the frequency rises.",
        refs: REFS_RL,
        content: `
Real a.c. loads are combinations of three things: resistance, inductance and
capacitance. This lesson deals with the first two on their own, because you
cannot understand a motor, a ballast or a transformer until you can predict
what a coil does to current.

## Resistance on a.c.

A pure resistance behaves on a.c. exactly as it does on d.c. Ohm's law applies
at every instant, so I = V / R holds all the way round the cycle. Because the
current follows the voltage instant by instant, the **current is in phase with
the voltage** — both cross zero together, both peak together.

Using RMS values throughout:

- **Irms = Vrms / R**
- **P = Vrms x Irms = Irms squared x R = Vrms squared / R**

Kirchhoff's voltage and current laws apply unchanged, and resistors in series
and parallel combine exactly as they do on d.c. In a purely resistive circuit,
every d.c. rule still works.

### Pure and non-inductive resistance

At 50 Hz we treat incandescent lamps, radiators and kettle elements as pure,
or non-inductive, resistance. A resistance element is usually a coil of
resistance wire, which theoretically has some inductance, but at mains
frequency the value is so small it can be ignored. The same goes for its
capacitance.

At the higher switching frequencies inside switch-mode supplies and motor
controllers this stops being true. There, either the design allows for the
inductance or a **non-inductive resistor** is used: one half of the element is
wound clockwise on a non-magnetic former and the other half anticlockwise, so
the two magnetic fields cancel and no self-induced voltage appears. Capacitive
effects cannot be cancelled so neatly and must be minimised instead, which on
transmission lines means keeping conductors as far apart as economics allows.

### Worked example 1 — a resistive circuit from peak values

A pure resistance of 12 ohms is connected across a supply that produces a pure
sine wave of 100 V peak. What current flows and what power is taken?

First convert the peak to RMS, because power calculations demand RMS:

- Vrms = 0.707 x Vmax = 0.707 x 100 = **70.71 V**

Current:

- Irms = Vrms / R = 70.71 / 12 = **5.89 A**

Power, three ways, all agreeing:

- P = Vrms x Irms = 70.71 x 5.89 = **416.5 W**
- P = Vrms squared / R = (70.71 x 70.71) / 12 = 5000 / 12 = **416.7 W**
- P = Irms squared x R = (5.89 x 5.89) x 12 = 34.69 x 12 = **416.3 W**

The small differences are rounding only. Had we used the peak values by
mistake, P = 100 x 8.33 = 833 W, exactly double the truth.

### Worked example 2 — resistors in series on a.c.

Three resistors of 100 ohms, 47 ohms and 22 ohms are connected in series
across a 100 V 50 Hz supply. Find the current and the power.

- Rtotal = 100 + 47 + 22 = **169 ohms**
- I = V / R = 100 / 169 = **0.592 A**
- P = V x I = 100 x 0.592 = **59.2 W**

Frequency never entered the calculation. For pure resistance it cannot.

## Inductors on a.c.

An inductor is a coil, often on an iron core. It matters in a.c. work for two
opposite reasons. Its magnetic effects are useful — motors, generators,
transformers, relays, solenoids and solenoid valves all depend on them. And
its opposition to *change* in current is useful too: an inductor used
deliberately to limit current is called a **choke** or, in a light fitting, a
**ballast**. Coupled with a capacitor it tunes radio and communications
circuits, and as a **line reactor** it blocks unwanted frequencies in power
quality work.

## Why the current lags

Any change of current in a coil induces an EMF in it, and by Lenz's law that
EMF opposes the change causing it. On d.c. this only shows up at switch-on,
where the current rises slowly to its final value. On a.c. the current is
changing continuously, so the opposing EMF is present continuously.

The result: in a purely inductive circuit the **current lags the voltage by 90
degrees**. Where the voltage is at maximum, the current is passing through
zero and rising. Where the voltage is zero, the current is at maximum. Drawn
as phasors with voltage as the reference, the current sits at right angles
below it.

## Inductive reactance

This opposition to alternating current is **inductive reactance**, symbol XL,
measured in ohms. Ohm's law works with it:

- **I = V / XL**

Its value depends on the inductance and on how fast the current is being made
to change, which means on frequency:

**XL = 2 x pi x f x L**

where XL is in ohms, f is in hertz and L is inductance in henrys. Double the
frequency and you double the reactance. Take the frequency to zero — d.c. —
and the reactance disappears, leaving only winding resistance, which is why a
contactor coil designed for 230 V a.c. burns out instantly on 230 V d.c.

### Worked example 3 — reactance at two frequencies

A coil has an inductance of 0.05 H. Find its inductive reactance at 25 Hz and
at 50 Hz, and the frequency at which its reactance would be 10 ohms.

At 25 Hz:

- XL = 2 pi f L = 2 x 3.1416 x 25 x 0.05
- XL = **7.85 ohms**

At 50 Hz:

- XL = 2 x 3.1416 x 50 x 0.05
- XL = **15.71 ohms**

For XL = 10 ohms, transpose to f = XL / (2 pi L):

- f = 10 / (2 x 3.1416 x 0.05) = 10 / 0.3142
- f = **31.8 Hz**

### Worked example 4 — current in a coil

A 500 V 50 Hz supply is applied to a coil of 0.12 H with negligible
resistance. Find the current.

- XL = 2 pi f L = 2 x 3.1416 x 50 x 0.12 = **37.70 ohms**
- I = V / XL = 500 / 37.70
- I = **13.26 A**

### Worked example 5 — finding the inductance of a choke

A 230 V 50 Hz supply is applied to a choke of negligible resistance and 2.5 A
flows. Find the inductance.

- XL = V / I = 230 / 2.5 = **92 ohms**
- L = XL / (2 pi f) = 92 / (2 x 3.1416 x 50) = 92 / 314.16
- L = 0.2928 H = **293 mH**

## Inductors in series and parallel

Two inductors in series each produce their own opposing EMF, so both the total
inductance and the total reactance add, exactly like resistors in series:

- **Ltotal = L1 + L2 + L3 ...**
- **XL total = XL1 + XL2 + XL3 ...**

In parallel each draws its own current, and because both currents lag the
voltage by the same 90 degrees they are in phase with each other and can be
added arithmetically. The combination therefore behaves like resistors in
parallel:

- **XL total = 1 / (1/XL1 + 1/XL2 + ...)**
- **Ltotal = 1 / (1/L1 + 1/L2 + ...)**

### Worked example 6 — two inductors in series

Inductive reactances of 11 ohms and 12 ohms are connected in series across a
230 V 50 Hz supply. Find the total reactance and the current.

- XL total = 11 + 12 = **23 ohms**
- I = V / XL total = 230 / 23 = **10 A**

### Worked example 7 — two inductors in parallel

Inductive reactances of 10 ohms and 8 ohms are connected in parallel across
230 V 50 Hz. Find the total reactance and the total current.

- XL total = 1 / (1/10 + 1/8) = 1 / (0.1 + 0.125) = 1 / 0.225
- XL total = **4.44 ohms**
- I = 230 / 4.44 = **51.75 A**

### Worked example 8 — inductance, reactance and current together

A 0.25 H inductor is connected in series with a 0.35 H inductor. Find the
total inductance, the reactance and the current for three supplies.

- Ltotal = 0.25 + 0.35 = **0.6 H**

(a) 120 V 50 Hz:

- XL = 2 x 3.1416 x 50 x 0.6 = **188.5 ohms**
- I = 120 / 188.5 = **0.637 A**

(b) 200 V 75 Hz:

- XL = 2 x 3.1416 x 75 x 0.6 = **282.7 ohms**
- I = 200 / 282.7 = **0.707 A**

(c) 50 V 100 Hz:

- XL = 2 x 3.1416 x 100 x 0.6 = **377.0 ohms**
- I = 50 / 377.0 = **0.133 A**

## Why a choke beats a resistor for limiting current

Both a resistor and an inductor will limit a.c. current, but a resistor
converts the surplus energy to heat and wastes it. An inductor is mostly
copper with little resistance, so it consumes very little real power while
still presenting a large reactance. That is the reason a fluorescent fitting
uses an iron-cored ballast rather than a series resistor.

The second advantage is behaviour during a surge. An inductor opposes any
*change* in current, so under a heavy inrush — a fluorescent tube striking, or
a short circuit — the back EMF produced by the rapid current rise reduces the
peak. This is why line reactors are fitted ahead of drives and power supplies.

>! An inductive circuit stores energy in its magnetic field. Breaking that
>! circuit forces the field to collapse rapidly and the induced voltage can be
>! many times the supply voltage — enough to arc across opening contacts and to
>! give a severe shock from a coil on a nominally low-voltage control circuit.
>! Never break a live inductive circuit at a terminal you are holding, and fit
>! the suppression diode or RC snubber the equipment manufacturer specifies.

## What to remember

- Resistance: current in phase with voltage, frequency irrelevant, real power
  consumed.
- Inductance: current lags voltage by 90 degrees in a pure inductor, and
  reactance rises with frequency.
- XL = 2 pi f L, and Ohm's law then applies as I = V / XL.
- Inductive reactances add in series and combine reciprocally in parallel,
  like resistors.
- A choke limits current with little power loss; a resistor limits current by
  wasting energy as heat.
`,
        quiz: [
          {
            q: "A 230 V a.c. contactor coil is connected to a 230 V d.c. supply. What happens and why?",
            options: [
              "It operates normally, because the RMS voltage is the same",
              "It draws a very large current and burns out, because at zero frequency the inductive reactance disappears and only the small winding resistance limits the current",
              "It fails to pull in, because d.c. cannot magnetise iron",
              "It operates but chatters at 50 Hz",
            ],
            answer: 1,
            explain: "XL = 2 pi f L, so at f = 0 the reactance is zero. On a.c. most of the coil's opposition is reactance, not resistance; remove the reactance and the coil is close to a short circuit across the supply.",
          },
          {
            q: "A 0.1 H choke is used on 50 Hz. What is its reactance, and what happens to it if the supply is changed to 60 Hz?",
            options: [
              "31.4 ohms, and it falls to 26.2 ohms at 60 Hz",
              "31.4 ohms, and it rises to 37.7 ohms at 60 Hz",
              "3.14 ohms, and it is unchanged at 60 Hz",
              "314 ohms, and it rises to 377 ohms at 60 Hz",
            ],
            answer: 1,
            explain: "XL = 2 pi f L = 2 x 3.1416 x 50 x 0.1 = 31.4 ohms. Reactance is directly proportional to frequency, so 60/50 of 31.4 gives 37.7 ohms. Equipment imported for 60 Hz service will therefore draw more current on Australian 50 Hz, not less.",
          },
          {
            q: "Two inductive reactances of 12 ohms and 6 ohms are connected in parallel across 240 V. What is the total current?",
            options: [
              "13.3 A",
              "60 A",
              "20 A",
              "30 A",
            ],
            answer: 1,
            explain: "Both branch currents lag by the same 90 degrees, so they are in phase with each other and add arithmetically: 240/12 = 20 A plus 240/6 = 40 A gives 60 A. The same answer comes from XL total = 1/(1/12 + 1/6) = 4 ohms, so I = 240/4 = 60 A. The 13.3 A option comes from wrongly adding the reactances in parallel as though they were currents.",
          },
          {
            q: "Why is an iron-cored ballast, rather than a series resistor, used to limit the current in an older fluorescent fitting?",
            options: [
              "Because a resistor cannot pass alternating current",
              "Because the ballast provides reactance with very little power loss, and also limits the inrush when the tube strikes",
              "Because a resistor would put the current out of phase with the voltage",
              "Because the ballast increases the supply voltage to strike the tube",
            ],
            answer: 1,
            explain: "A resistor limits current by turning the surplus into heat, wasting energy and needing to be sized for that heat. A choke limits current mainly by reactance, which consumes almost no real power, and its opposition to change of current also softens the inrush at strike.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "capacitance-ac",
        title: "Capacitance and capacitive reactance",
        minutes: 12,
        simple: "A capacitor is two metal plates with an insulator between them, so nothing can actually flow through it. But on a.c. it is charged one way then the other, over and over, so an ammeter in the lead reads a current. The faster the voltage changes, the more current flows. That makes a capacitor the exact opposite of a coil: its current arrives early instead of late.",
        refs: REFS_C,
        content: `
Capacitors are everywhere in the trade: correcting power factor on a
switchboard, starting and running single-phase motors, tuning circuits,
suppressing interference and dropping voltage in tiny mains-powered
electronics. Their behaviour on a.c. is the mirror image of an inductor's, and
that opposition is what makes power factor correction possible.

## What a capacitor does on a.c.

A capacitor charges at a rate set by how fast the applied voltage is changing.
Follow one cycle:

- As the supply voltage sweeps through zero it is changing fastest, so the
  charging current is at its **maximum**.
- As the voltage approaches its peak it is barely changing, so the current
  falls to **zero**.
- As the voltage starts to fall, the capacitor discharges and the current
  **reverses**.

The current is already at maximum when the voltage is still at zero, so the
current appears to arrive ahead of the voltage. In a purely capacitive circuit
the **current leads the applied voltage by 90 degrees**. Draw the voltage as
the reference phasor and the current sits at right angles above it — exactly
opposite to the inductor.

## Displacement current

Nothing crosses the dielectric. An ammeter in the capacitor's lead is
measuring charge flowing into and out of the plates, called a **displacement
current**. Its size depends on the applied voltage, the supply frequency and
the capacitance.

## Capacitive reactance

The opposition a capacitor offers to a.c. is **capacitive reactance**, symbol
XC, measured in ohms:

**XC = 1 / (2 x pi x f x C)**

where f is in hertz and C is in farads. Note the inversion: capacitive
reactance **falls** as frequency rises and as capacitance rises. That single
fact explains most capacitor applications. At d.c. (f = 0) reactance is
infinite and the capacitor blocks; at high frequency it is nearly a short
circuit, which is why a capacitor to earth is used to shunt interference away.

Ohm's law applies: **I = V / XC**.

Take care with the units. Capacitors are marked in microfarads, so 8
microfarads must be entered as 8 x 10 to the power -6 farads. Forgetting the
exponent is the single most common error in these calculations.

### Worked example 1 — reactance and current of a capacitor

Find the capacitive reactance of an 8 microfarad capacitor and the current it
draws from a 100 V 50 Hz supply.

- XC = 1 / (2 pi f C) = 1 / (2 x 3.1416 x 50 x 8 x 10 to the power -6)
- XC = 1 / 0.002513 = **397.9 ohms**
- I = V / XC = 100 / 397.9 = 0.2513 A
- I = **251 mA**

### Worked example 2 — a larger capacitor on 230 V

Calculate the current drawn by a 16 microfarad capacitor on a 230 V 50 Hz
supply.

- XC = 1 / (2 x 3.1416 x 50 x 16 x 10 to the power -6)
- XC = 1 / 0.005027 = **198.9 ohms**
- I = 230 / 198.9 = **1.156 A**

Doubling the capacitance from 8 to 16 microfarads halved the reactance and
doubled the current. Capacitance and reactance are inversely proportional.

## Capacitors in series

Putting capacitors in series is like moving the outer plates further apart:
total capacitance falls and total opposition rises. Reactances add, exactly
like resistors in series:

**XC total = XC1 + XC2 + XC3 ...**

### Worked example 3 — two capacitors in series

The 8 microfarad capacitor from example 1 is now connected in series with a
second 8 microfarad capacitor across the same 100 V 50 Hz supply. Find the new
current.

- XC total = 397.9 + 397.9 = **795.8 ohms**
- I = V / XC total = 100 / 795.8 = 0.1257 A
- I = **125.7 mA**

Half the current of a single capacitor, because the reactance doubled.

## Capacitors in parallel

In parallel the effective plate area increases, so total capacitance rises and
total reactance falls. Reactances combine reciprocally, like resistors in
parallel:

**XC total = 1 / (1/XC1 + 1/XC2 + ...)**

Each branch simply draws its own current, and because all capacitive branch
currents lead by the same 90 degrees they are in phase with one another and
can be added arithmetically.

### Worked example 4 — two capacitors in parallel

Two 8 microfarad capacitors are connected in parallel across 100 V 50 Hz. Find
each branch current and the total current.

- Each branch: XC = 397.9 ohms, so I = 100 / 397.9 = **251 mA per branch**
- XC total = 1 / (1/397.9 + 1/397.9) = 397.9 / 2 = **198.9 ohms**
- Itotal = 100 / 198.9 = 0.5028 A = **502.8 mA**

Compare with example 3: identical capacitors and identical supply, but the
series connection gave 125.7 mA and the parallel connection gave 502.8 mA — a
factor of four. Series and parallel are not interchangeable.

### Worked example 5 — mixed sizes in series

A 10 microfarad capacitor is connected to a 200 V 50 Hz supply. Find its
reactance and current, then the current if a 20 microfarad capacitor is placed
in series with it.

- XC(10 microfarad) = 1 / (2 x 3.1416 x 50 x 10 x 10 to the power -6) = **318.3 ohms**
- I = 200 / 318.3 = **0.628 A**
- XC(20 microfarad) = 1 / (2 x 3.1416 x 50 x 20 x 10 to the power -6) = **159.2 ohms**
- XC total = 318.3 + 159.2 = **477.5 ohms**
- I = 200 / 477.5 = **0.419 A**

## Where capacitive a.c. circuits are used

- **Power factor correction.** A capacitor connected in parallel with an
  inductive load such as a motor or an iron-ballasted fluorescent fitting
  supplies leading current that cancels part of the lagging current. Banks of
  capacitors do the same job for a whole installation at the main switchboard.
- **Single-phase motor starting and running.** A capacitor in the auxiliary
  winding shifts its current in phase and creates the rotating field a
  single-phase motor needs to start.
- **Tuned and resonant circuits.** With a matched inductor — one whose
  inductive reactance equals the capacitive reactance at the chosen frequency
  — a capacitor forms a tuned circuit for radio, television, mobile
  communications and frequency-sensitive relays used for off-peak switching.
- **Transformerless power supplies.** A specially designed capacitor in series
  with the load drops 230 V a.c. to a few volts before rectification, which is
  how mains-powered electronics became so small. There is no isolation from
  the mains in such a supply, so every part of it is live.

## AS/NZS 3000:2018 requirements for capacitors

Capacitors store energy and can sit at a high potential across their terminals
long after the supply is isolated. Clause 4.15 of the Wiring Rules sets
requirements accordingly. The main points:

- Switchgear must be suitable for switching the **reactive** component of the
  current. Utilisation category **AC-6b** is the category specifically for
  switching capacitors.
- Capacitors not connected in parallel with individual appliances — a power
  factor correction bank at the main switchboard, for example — require their
  own circuit breaker for protection and control, and the requirement applies
  to units and banks rated over 100 kVAR.
- Connecting conductors must be sized for the capacitor current, with the
  arrangement depending on whether the capacitor is connected in parallel with
  an individual appliance or not.
- Capacitors larger than 0.5 microfarads must be provided with a **discharge
  path**, typically a resistor permanently connected across the terminals.

Capacitors that are an integral part of equipment — inside a motor, a
fluorescent fitting or an appliance — are deemed to satisfy these
requirements, because they have been engineered with the correct rating and
their own discharge path.

A warning notice is required where a discharge path is provided, telling
workers to ensure the capacitors are fully discharged before working on the
equipment.

>! Discharge times are **one minute** for capacitors rated up to 650 V and
>! **five minutes** for capacitors rated above 650 V, after which the terminal
>! voltage must not exceed 50 V. Do not rely on the timer alone: isolate,
>! wait, then **prove the capacitor is dead with a meter** before touching the
>! terminals. A power factor correction bank that has lost its discharge
>! resistors will still be sitting at peak supply voltage — 325 V or more on a
>! 230 V bank — hours after the switchboard was isolated.

## On the job

- Current leads voltage by 90 degrees in a pure capacitor. Remember CIVIL.
- XC = 1/(2 pi f C): reactance falls as either frequency or capacitance rises.
- Series capacitors add reactance and reduce current; parallel capacitors
  reduce reactance and increase current.
- Convert microfarads to farads before you touch the calculator.
- Treat every capacitor as charged until you have measured it as discharged.
`,
        quiz: [
          {
            q: "A 25 microfarad capacitor is connected to a 230 V 50 Hz supply. What current does it draw?",
            options: [
              "1.81 A",
              "0.55 A",
              "3.62 A",
              "18.1 A",
            ],
            answer: 0,
            explain: "XC = 1/(2 x 3.1416 x 50 x 25 x 10 to the power -6) = 1/0.007854 = 127.3 ohms, so I = 230/127.3 = 1.81 A. The most common error is entering 25 instead of 25 x 10 to the power -6, which shifts the answer by a factor of a million.",
          },
          {
            q: "Two identical capacitors are connected first in series and then in parallel across the same a.c. supply. How do the total currents compare?",
            options: [
              "The series current is twice the parallel current",
              "The parallel current is four times the series current",
              "They are equal",
              "The parallel current is twice the series current",
            ],
            answer: 1,
            explain: "In series the reactance doubles, halving the current. In parallel the reactance halves, doubling it. From half to double is a factor of four — as in the worked examples, 125.7 mA against 502.8 mA.",
          },
          {
            q: "Why is a capacitor an effective way of shunting high-frequency interference to earth while leaving the 50 Hz supply almost untouched?",
            options: [
              "Because capacitors only pass currents above 1 kHz",
              "Because capacitive reactance is inversely proportional to frequency, so it is high at 50 Hz and low at interference frequencies",
              "Because capacitors block a.c. and pass d.c.",
              "Because the dielectric conducts only at high frequency",
            ],
            answer: 1,
            explain: "XC = 1/(2 pi f C). A capacitor that presents thousands of ohms at 50 Hz may present only a few ohms at 100 kHz, so it offers the interference an easy path while barely loading the supply.",
          },
          {
            q: "A switchboard power factor correction bank has been isolated for twenty minutes. Under AS/NZS 3000:2018 what should you still do before working on the terminals?",
            options: [
              "Nothing — the one-minute discharge time has long passed",
              "Prove the capacitors are discharged with a meter, because the discharge resistors may have failed",
              "Short the terminals with a screwdriver",
              "Re-energise briefly to reset the capacitors",
            ],
            answer: 1,
            explain: "The one and five minute discharge times assume the required discharge path is intact. A failed or disconnected discharge resistor leaves the bank at peak supply voltage indefinitely. Test before you touch. Shorting with a screwdriver is dangerous and can weld the tool and damage the capacitor.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "series-rlc",
        title: "Series R-L, R-C and R-L-C circuits: impedance and phase angle",
        minutes: 14,
        simple: "Put a coil and a resistor in the same circuit and neither the resistance nor the reactance alone tells you the current. You have to combine them, but not by adding, because they act at right angles to each other. The combined opposition is called impedance and you find it with the same triangle you learned in maths: the long side of a right-angle triangle.",
        refs: REFS_SERIES,
        content: `
Pure components exist only in textbooks. Every real load is some mix of
resistance, inductance and capacitance, and once they are combined in series
you need one number for the total opposition to current. That number is
**impedance**.

## The three effects, side by side

| Component | Phase relationship | Symbol for opposition | Consumes real power? |
|---|---|---|---|
| Resistance | Current in phase with voltage | R, in ohms | Yes |
| Inductance | Current lags voltage by 90 degrees | XL = 2 pi f L, in ohms | No (in theory) |
| Capacitance | Current leads voltage by 90 degrees | XC = 1/(2 pi f C), in ohms | No |

## Impedance

The combined opposition of resistance and reactance is **impedance**, symbol
Z, measured in ohms. Ohm's law still holds:

**Z = Vrms / Irms**

In a series circuit the current is common to every component, so each voltage
drop is proportional to the opposition that produced it: VR = I R, VL = I XL,
VC = I XC and V = I Z. Because the voltage drops form a right-angle triangle,
so do R, X and Z — the two triangles are similar. That gives:

- Series R-L: **Z = square root of (R squared + XL squared)**
- Series R-C: **Z = square root of (R squared + XC squared)**
- Series R-L-C: **Z = square root of (R squared + (XL - XC) squared)**

In an R-L-C circuit the inductive and capacitive voltages are 180 degrees
apart, so they partly cancel and only the **difference** (XL - XC) counts. If
XC is the larger, that difference is negative, which does not affect Z because
squaring a negative gives a positive — but it does tell you the circuit is
capacitive overall and the current leads. In practice subtract the smaller
from the larger and note which one won.

## Phase angle

The angle phi between R and Z in the impedance triangle is the same as the
angle between the supply voltage and the current. Any of the three
trigonometric ratios will find it:

- **phi = cos inverse (R / Z)**
- **phi = tan inverse (X / R)**
- **phi = sin inverse (X / Z)**

If XL dominates, the current lags. If XC dominates, the current leads. If they
are equal the reactances cancel, Z = R, and the circuit behaves as though
purely resistive — that condition is **resonance**, covered in the last lesson
of this module.

## Series R-C circuits

Current through a series R-C circuit produces VR across the resistor, in phase
with the current, and VC across the capacitor, lagging the current by 90
degrees. The supply voltage is the phasor sum of the two, and the **current
leads the supply voltage** by phi. At 50 Hz a commercial capacitor can be
treated as pure capacitance; its losses are negligible.

## Series R-L circuits

Here VR is in phase with the current and VL leads it by 90 degrees. The supply
voltage is the phasor sum, and the **current lags the supply voltage** by phi.

A practical inductor is never pure. Its winding has resistance (copper loss)
and its core has eddy current and hysteresis loss (iron loss), so the phase
shift it produces is always less than a full 90 degrees. When you measure a
real choke, you are measuring a series R-L circuit whether or not an external
resistor is fitted.

### Worked example 1 — a ballasted lamp

A projector lamp needs 110 V and is fed from a 230 V supply through a series
choke. The voltmeter across the choke reads 202 V. Confirm the supply voltage
and find the phase angle.

The lamp is resistive so VR = 110 V is in phase with the current; the choke
voltage leads by 90 degrees.

- V = square root of (VR squared + VL squared) = square root of (110 squared + 202 squared)
- V = square root of (12100 + 40804) = square root of 52904
- V = **230 V** — which is exactly what the supply is

- phi = tan inverse (VL / VR) = tan inverse (202 / 110) = tan inverse (1.836)
- phi = **61.4 degrees lagging**

Note that 110 V and 202 V read on the same circuit total 312 V arithmetically
but only 230 V as phasors. The choke drops 202 V while consuming almost no
power, which is why it is used instead of a series resistor — and it also
smooths current spikes that would shorten lamp life.

### Worked example 2 — impedance of an R-L-C circuit from reactances

A resistance of 30 ohms is in series with an inductive reactance of 60 ohms
and a capacitive reactance of 20 ohms. Find the impedance.

- Net reactance X = XL - XC = 60 - 20 = 40 ohms (inductive)
- Z = square root of (R squared + X squared) = square root of (30 squared + 40 squared)
- Z = square root of (900 + 1600) = square root of 2500
- Z = **50 ohms**

### Worked example 3 — the full method from component values

A 20 ohm resistor is in series with a 0.25 H inductor and an 80 microfarad
capacitor across a 230 V 50 Hz supply. Find the impedance, the current and the
phase angle.

Reactances first:

- XL = 2 pi f L = 2 x 3.1416 x 50 x 0.25 = **78.54 ohms**
- XC = 1/(2 pi f C) = 1/(2 x 3.1416 x 50 x 80 x 10 to the power -6) = 1/0.02513
- XC = **39.79 ohms**

Net reactance:

- X = XL - XC = 78.54 - 39.79 = **38.75 ohms**, inductive

Impedance:

- Z = square root of (20 squared + 38.75 squared) = square root of (400 + 1501.6)
- Z = square root of 1901.6 = **43.6 ohms**

Current:

- I = V / Z = 230 / 43.6 = **5.28 A**

Phase angle:

- phi = cos inverse (R / Z) = cos inverse (20 / 43.6) = cos inverse (0.4587)
- phi = **62.7 degrees lagging**

Check the component voltages: VR = 5.28 x 20 = 105.6 V, VL = 5.28 x 78.54 =
414.7 V, VC = 5.28 x 39.79 = 210.1 V. Voltages far above the 230 V supply
appear across individual reactive components. That is normal, and it is why
components in reactive circuits must be rated for far more than the supply
voltage.

### Worked example 4 — another R-L-C circuit

A 30 ohm resistor in series with a 0.3 H inductor of negligible resistance and
a 100 microfarad capacitor is connected to 230 V 50 Hz. Find the impedance,
the current and the phase angle.

- XL = 2 x 3.1416 x 50 x 0.3 = **94.25 ohms**
- XC = 1/(2 x 3.1416 x 50 x 100 x 10 to the power -6) = **31.83 ohms**
- X = 94.25 - 31.83 = **62.42 ohms**, inductive
- Z = square root of (30 squared + 62.42 squared) = square root of (900 + 3896.2)
- Z = square root of 4796.2 = **69.3 ohms**
- I = 230 / 69.3 = **3.32 A**
- phi = cos inverse (30 / 69.3) = cos inverse (0.433) = **64.3 degrees lagging**

### Worked example 5 — a plain R-L circuit with power

A 30 ohm resistor in series with a 0.1 H inductor is placed across 230 V
50 Hz. Find the total current, the total power and the phase angle.

- XL = 2 x 3.1416 x 50 x 0.1 = **31.42 ohms**
- Z = square root of (30 squared + 31.42 squared) = square root of (900 + 987.2)
- Z = square root of 1887.2 = **43.4 ohms**
- I = 230 / 43.4 = **5.30 A**
- phi = cos inverse (30 / 43.4) = cos inverse (0.691) = **46.3 degrees lagging**

Power is consumed only in the resistance:

- P = I squared x R = (5.30 x 5.30) x 30 = 28.09 x 30
- P = **842.7 W**

Check by the a.c. power formula: P = V I cos phi = 230 x 5.30 x 0.691 =
842.3 W. The two agree.

### Worked example 6 — a full R-L-C circuit including power factor

A 230 V 50 Hz series circuit contains a 33 ohm resistive element, a 0.3 H
inductive coil and a 100 microfarad capacitor. Find the current, the phase
angle and the power factor.

- XL = **94.25 ohms**, XC = **31.83 ohms**, so X = **62.42 ohms** inductive
- Z = square root of (33 squared + 62.42 squared) = square root of (1089 + 3896.2)
- Z = square root of 4985.2 = **70.6 ohms**
- I = 230 / 70.6 = **3.26 A**
- Power factor = R / Z = 33 / 70.6 = **0.467 lagging**
- phi = cos inverse (0.467) = **62.1 degrees lagging**

## Where series R-L-C circuits are used

Series combinations of all three are mostly an electronics matter — radio
tuning circuits above all. In power work the same arrangement, with values
chosen deliberately, makes a **low-pass filter** that passes 50 Hz and
attenuates higher frequencies. Series R-L-C circuits also produced the high
voltage arc in older coil-and-points car ignition systems.

>! In a series circuit with large reactances, the voltage across the inductor
>! or the capacitor can be several times the supply voltage. A 230 V circuit
>! can carry thousands of volts across a single component. Assume nothing from
>! the supply voltage label: measure before you touch, and select component
>! voltage ratings for the calculated component voltage, not the supply.

## What to remember

- Impedance combines resistance and reactance at right angles, never by
  addition.
- Z = square root of (R squared + (XL - XC) squared) covers every series case;
  set the missing reactance to zero.
- The phase angle comes from the same triangle: cos phi = R / Z.
- Inductive dominant means lagging current; capacitive dominant means leading.
- Only the resistance consumes power, so P = I squared x R always works.
`,
        quiz: [
          {
            q: "A series circuit has R = 40 ohms and XL = 30 ohms on 230 V. What are the impedance and the current?",
            options: [
              "70 ohms and 3.29 A",
              "50 ohms and 4.6 A",
              "10 ohms and 23 A",
              "50 ohms and 5.75 A",
            ],
            answer: 1,
            explain: "Z = square root of (40 squared + 30 squared) = square root of 2500 = 50 ohms, so I = 230/50 = 4.6 A. Adding R and XL arithmetically to 70 ohms ignores the 90 degree phase difference between the resistive and reactive voltage drops.",
          },
          {
            q: "In a series R-L-C circuit, XL = 45 ohms, XC = 80 ohms and R = 28 ohms. What is the impedance and does the current lead or lag?",
            options: [
              "Z = 153 ohms, current lags",
              "Z = 44.8 ohms, current leads",
              "Z = 44.8 ohms, current lags",
              "Z = 35 ohms, current leads",
            ],
            answer: 1,
            explain: "Net reactance is 80 - 45 = 35 ohms capacitive, so Z = square root of (28 squared + 35 squared) = square root of 2009 = 44.8 ohms. Because XC is the larger reactance the circuit is capacitive overall and the current leads the supply voltage.",
          },
          {
            q: "A voltmeter reads 414 V across the inductor of a 230 V series R-L-C circuit. What should the technician conclude?",
            options: [
              "The meter is faulty, because no voltage can exceed the supply",
              "This is normal: reactive voltages in a series circuit can exceed the supply voltage because VL and VC partly cancel each other",
              "The supply must actually be 415 V",
              "There is a fault to earth",
            ],
            answer: 1,
            explain: "VL and VC are 180 degrees apart, so a large VL can be offset by a large VC and the phasor sum with VR still equals the 230 V supply. It is real voltage though, dangerous to touch, and every component must be rated for it.",
          },
          {
            q: "Why does P = I squared x R give the true power of a series R-L-C circuit, even though the current also flows through the inductor and capacitor?",
            options: [
              "Because the reactances are usually small",
              "Because ideal reactances return all stored energy to the supply each cycle and consume no net power",
              "Because reactive components carry no current",
              "Because the formula only applies at resonance",
            ],
            answer: 1,
            explain: "An ideal inductor stores energy in its magnetic field and a capacitor in its electric field, then returns it to the supply in the next quarter cycle. Only resistance converts electrical energy to heat, so only R appears in the true power calculation.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "parallel-ac",
        title: "Parallel a.c. circuits",
        minutes: 12,
        simple: "Everything plugged into a house is wired in parallel, because every appliance needs the same 230 V. In parallel the voltage is the thing they share, so you work out how much current each branch takes on its own, then combine those currents as arrows rather than adding them up. Only then can you say what the whole circuit draws.",
        refs: REFS_PARALLEL,
        content: `
Almost every load you will ever connect is in parallel. A.c. equipment needs a
fixed supply voltage, so lights, socket outlets, motors and appliances are all
looped active to active and neutral to neutral across the same supply. Power
factor correction capacitors are connected in parallel too. If you can analyse
a parallel a.c. circuit you can analyse a real installation.

## The method

In a parallel circuit the **voltage is common**, so it is the reference
phasor. The rule is simple and never varies:

1. Work out the current in each branch on its own, using Ohm's law with that
   branch's R, XL, XC or Z.
2. Note the phase of each branch current relative to the voltage.
3. Add the branch currents **as phasors** to get the total line current.
4. Only then find the circuit impedance, from Z = V / Itotal.

The branch phases are:

- **Resistive branch:** IR is in phase with V.
- **Inductive branch:** IL lags V by 90 degrees.
- **Capacitive branch:** IC leads V by 90 degrees.

Because IL and IC are 180 degrees apart, they subtract directly. What is left
is at 90 degrees to IR, so the final combination is an ordinary right-angle
triangle:

- **IX = IL - IC** (take the smaller from the larger and note which won)
- **Itotal = square root of (IR squared + IX squared)**
- **phi = tan inverse (IX / IR)**
- **Z = V / Itotal**

>! Do not use the impedance triangle from series circuits on a parallel
>! circuit. Impedance, resistance and reactance in parallel are each inversely
>! proportional to the branch current, so combining them directly with
>! Pythagoras gives a wrong answer. Always go via the branch currents.

## Parallel R-L circuits

A resistor and an inductor across the same supply: IR is in phase with V, IL
lags by 90 degrees, and the total current lags V by an angle between 0 and 90
degrees depending on the relative sizes.

A **practical** inductor is itself a series R-L circuit, so its branch current
lags by less than 90 degrees, at an angle phi(L) = cos inverse (R / Z) for
that branch. When a question gives you a coil with resistance, work out the
branch impedance and branch angle first, then resolve that branch current into
its in-phase and quadrature parts before combining.

## Parallel R-C circuits

IR is in phase with V and IC leads by 90 degrees, so the total current **leads**
the supply voltage. Increasing the capacitance increases IC, and pushes the
total current further into the leading region.

## Parallel R-L-C circuits

All three branches together. IL and IC oppose, and whichever is larger decides
whether the total current lags or leads.

### Worked example 1 — the full parallel R-L-C calculation

A resistance of 115 ohms is connected across a 230 V 50 Hz supply, in parallel
with a pure inductive reactance of 77 ohms and a capacitive reactance of 120
ohms. Find the total current, the circuit impedance and the phase angle.

Branch currents:

- IR = V / R = 230 / 115 = **2.00 A**, in phase with V
- IL = V / XL = 230 / 77 = **2.99 A**, lagging V by 90 degrees
- IC = V / XC = 230 / 120 = **1.92 A**, leading V by 90 degrees

Net reactive current (the inductive branch is larger, so the result lags):

- IX = IL - IC = 2.99 - 1.92 = **1.07 A lagging**

Total current:

- Itotal = square root of (IR squared + IX squared) = square root of (2.00 squared + 1.07 squared)
- Itotal = square root of (4.00 + 1.14) = square root of 5.14
- Itotal = **2.27 A**

Impedance:

- Z = V / Itotal = 230 / 2.27
- Z = **101.3 ohms**

Phase angle:

- phi = tan inverse (IX / IR) = tan inverse (1.07 / 2.00) = tan inverse (0.535)
- phi = **28.1 degrees lagging**

Note the impedance, 101.3 ohms, is smaller than any of the three branch
oppositions. That is exactly what you expect in parallel — adding branches
always increases the current and lowers the impedance.

Drawn as a phasor diagram, you would plot IR along the voltage reference, IL
straight down and IC straight up, subtract IC from IL to leave IX, then
complete the parallelogram of IR and IX. A scale drawing reads about 2.3 A at
roughly 25 to 28 degrees lagging, confirming the calculation.

### Worked example 2 — a second parallel R-L-C circuit

Across a 230 V 50 Hz supply sit three parallel branches: a resistance of
130 ohms, an inductive reactance of 90 ohms and a capacitive reactance of
110 ohms. Find the branch currents, the total current, the impedance and the
phase angle.

- IR = 230 / 130 = **1.77 A** in phase
- IL = 230 / 90 = **2.56 A** lagging
- IC = 230 / 110 = **2.09 A** leading
- IX = 2.56 - 2.09 = **0.47 A lagging**
- Itotal = square root of (1.77 squared + 0.47 squared) = square root of (3.13 + 0.22)
- Itotal = square root of 3.35 = **1.83 A**
- Z = 230 / 1.83 = **125.7 ohms**
- phi = tan inverse (0.47 / 1.77) = tan inverse (0.266) = **14.9 degrees lagging**

The capacitor has pulled the phase angle down from what it would be without it
— which is precisely the mechanism of power factor correction.

### Worked example 3 — a simple parallel R-L circuit

A 0.5 H inductor is connected in parallel with a 100 ohm resistance across
100 V 50 Hz. Find the current in each component and the total current.

- XL = 2 pi f L = 2 x 3.1416 x 50 x 0.5 = **157.1 ohms**
- IR = 100 / 100 = **1.00 A** in phase
- IL = 100 / 157.1 = **0.64 A** lagging by 90 degrees
- Itotal = square root of (1.00 squared + 0.64 squared) = square root of (1.00 + 0.41)
- Itotal = square root of 1.41 = **1.19 A**
- phi = tan inverse (0.64 / 1.00) = **32.6 degrees lagging**
- Z = 100 / 1.19 = **84.0 ohms**

## Capacitors and inductors in parallel

Recapping the combination rules, because parallel circuits are where they get
used:

| Combination | Total capacitance or inductance | Total reactance |
|---|---|---|
| Capacitors in parallel | C adds | XC total = 1/(1/XC1 + 1/XC2 ...) |
| Capacitors in series | C falls | XC total = XC1 + XC2 ... |
| Inductors in parallel | L falls | XL total = 1/(1/XL1 + 1/XL2 ...) |
| Inductors in series | L adds | XL total = XL1 + XL2 ... |

Two equal capacitors in parallel each draw their normal current, so the line
current doubles. Two pure inductors in parallel each draw their own current,
and since both lag by the same 90 degrees the currents are in phase with each
other and add arithmetically.

## When does a parallel circuit draw minimum current?

When the inductive and capacitive branch currents are equal, they cancel
completely and the supply sees only the resistive current. The circuit is then
at **parallel resonance**, drawing minimum current at maximum impedance, even
though a large current may be circulating between L and C. That is the subject
of the final lesson.

## Parallel connections in the industry

- Every final subcircuit: lights and socket outlets looped in parallel so each
  point receives full supply voltage.
- Power factor correction capacitors, connected in parallel with an individual
  load or with the incoming supply at the main switchboard.
- Filtering that passes 50 Hz but opposes low-frequency interference.
- Shunt protection, diverting surge current from lightning or high-voltage
  injection to earth before it reaches equipment.

## On the job

- Voltage is the reference in parallel: solve branch by branch.
- IL and IC subtract; the survivor combines with IR at 90 degrees.
- Total impedance is always found last, from Z = V / Itotal.
- Never apply the series impedance triangle to a parallel circuit.
- Adding a parallel branch always raises the line current and lowers the
  impedance, even if that branch is a capacitor that reduces the phase angle.
`,
        quiz: [
          {
            q: "A 46 ohm resistor and a pure inductive reactance of 46 ohms are connected in parallel across 230 V. What is the total current?",
            options: [
              "10 A",
              "5 A",
              "7.07 A",
              "20 A",
            ],
            answer: 2,
            explain: "IR = 230/46 = 5 A in phase and IL = 230/46 = 5 A lagging by 90 degrees. They are at right angles, so Itotal = square root of (25 + 25) = 7.07 A, not 10 A. Adding branch currents arithmetically is only valid when they are in phase.",
          },
          {
            q: "Why must the impedance of a parallel a.c. circuit be found from Z = V / Itotal rather than from a Pythagoras combination of R and X?",
            options: [
              "Because parallel circuits have no impedance",
              "Because in parallel, resistance and reactance are each inversely proportional to their branch current, so they cannot be combined by the series triangle",
              "Because the voltage is not common in a parallel circuit",
              "Because Pythagoras only works below 100 Hz",
            ],
            answer: 1,
            explain: "The series impedance triangle works because current is common and each voltage drop is proportional to its opposition. In parallel it is the voltage that is common, and branch oppositions relate to the reciprocal of branch current, so the triangle must be built from currents instead.",
          },
          {
            q: "In a parallel R-L-C circuit, IR = 8 A, IL = 9 A and IC = 3 A. What is the total line current and is it leading or lagging?",
            options: [
              "20 A lagging",
              "10 A lagging",
              "10 A leading",
              "12.4 A lagging",
            ],
            answer: 1,
            explain: "IX = 9 - 3 = 6 A lagging, since IL is larger. Itotal = square root of (8 squared + 6 squared) = square root of 100 = 10 A, lagging the supply voltage by tan inverse (6/8) = 36.9 degrees.",
          },
          {
            q: "A capacitor is connected in parallel with a running motor and the line current falls. What has happened to the current in the motor itself?",
            options: [
              "It has fallen by the same amount",
              "It is unchanged, because the motor still has the same voltage across it and the same load",
              "It has risen to compensate",
              "It has reversed direction",
            ],
            answer: 1,
            explain: "Each parallel branch is independent: the motor sees the same 230 V and the same mechanical load, so it draws exactly the same current at exactly the same power factor. The leading capacitor current cancels part of the motor's lagging current, so only the line current upstream of the connection point falls.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "ac-power",
        title: "Power in a.c. circuits: true, apparent and reactive",
        minutes: 14,
        simple: "In a d.c. circuit, volts times amps equals watts and that is the end of it. In a.c. it is not, because some of the current is only sloshing energy in and out of coils and capacitors without doing any work. Volts times amps gives you the current the cables have to carry. Only part of it turns into heat, light or motion, and the fraction that does is called the power factor.",
        refs: REFS_POWER,
        content: `
Understanding a.c. power is what separates someone who can pass an exam from
someone who can size a transformer, explain a network charge, or tell a client
why their switchboard is at capacity while their meter says they are only
using half the energy.

## Power in a resistive circuit

Multiply the instantaneous voltage and current at every point round the cycle
and plot the result. The power curve for a purely resistive circuit is
sinusoidal, but with three notable features:

- It never goes negative, because when v and i are both negative their product
  is still positive.
- It completes **two** cycles for each cycle of voltage or current.
- Its average value is exactly half of its peak value.

That last point is the proof of the RMS factors: because the average power is
half the peak power, the effective voltage and current must each be 1 divided
by the square root of 2, which is 0.707, of their maximum values.

Which is why **a.c. power calculations must use RMS values**. Take a circuit
carrying 1 A RMS at 1 V RMS:

- Correctly: P = Vrms x Irms = 1 x 1 = **1 W**
- Using peaks: P = 1.414 x 1.414 = **2 W** — exactly double, and wrong

For a resistive circuit all the d.c. relationships hold, provided RMS values
are used throughout: V = I R, and P = V I = V squared / R = I squared x R.

## Power in a capacitive circuit

A capacitor charges during one quarter cycle and returns that charge to the
supply during the next. Multiply v and i and the power curve spends as much
time above the zero line as below it. The **average power in a pure capacitive
circuit is zero.**

## Power in an inductive circuit

The same story with a magnetic field instead of an electric one. As current
rises, energy is drawn from the supply to build the field; as current falls,
the field collapses and returns that energy. The power waveform is again at
twice supply frequency, and again it alternates between positive and negative
every quarter cycle. The negative sections are not "negative power" — they are
energy being handed back. Over a whole cycle the positive and negative areas
cancel, so the **average power consumed by a pure inductor is zero.**

## The three powers

Put resistance and reactance in the same circuit and you get something in
between: more positive than negative power, so a net positive average, but
less than a purely resistive load would consume.

**True power (P), in watts.** The power actually converted to heat, light or
mechanical work. Only the in-phase component of the current does this, so
P = VR x I. Since VR / V = cos phi, we can write VR = V cos phi, and
therefore:

**P = V I cos phi**

The term cos phi is the **power factor**. Strictly, the general symbol for
power factor on any waveform is lambda, but for the sinusoidal waveforms of
power work, power factor = cos phi = lambda.

**Apparent power (S), in volt-amperes (VA).** Simply the measured line voltage
multiplied by the measured line current:

**S = V I**

It is called apparent power because that is what the supply appears to be
providing. It is the number that matters for sizing conductors, switchgear and
transformers, because they must carry the full line current regardless of
whether it does work. Alternators and transformers are rated in VA or kVA for
this reason: the voltage rating fixes the insulation and the current rating
fixes the conductor size. A 100 kVA alternator might deliver only 80 kW.

**Reactive power (Q), in volt-amperes reactive (VAR).** The product of the
line voltage and the quadrature (reactive) component of the current — the part
that does no work:

**Q = V I sin phi**

A pure capacitor exhibits only reactive power, which is why it is sometimes
called *wattless* power.

## The power triangle

P, Q and S form a right-angle triangle: P along the base, Q vertical, S the
hypotenuse.

!FIG[power-triangle]

- **S = square root of (P squared + Q squared)**
- **P = S cos phi**
- **Q = S sin phi**
- **Power factor = cos phi = P / S = R / Z**

Cos phi runs from 1 for a purely resistive circuit down to 0 for a purely
reactive one. Sin phi does the opposite. Power factor is described as
**lagging** when the current lags (inductive load, the normal case) and
**leading** when it leads (capacitive).

## Power losses in a real inductor

A real coil consumes some power. Its winding resistance produces **copper
loss** (I squared x R), and its iron core produces **iron loss** from eddy
currents and hysteresis. Total losses are the sum of the two.

### Worked example 1 — splitting the losses in a ballast

A 40 W fluorescent ballast has a winding resistance of 36 ohms, draws 0.4 A
and consumes 10 W in total. Find the copper loss and the iron loss.

- Copper loss = I squared x R = (0.4 x 0.4) x 36 = 0.16 x 36
- Copper loss = **5.76 W**
- Iron loss = total - copper = 10 - 5.76
- Iron loss = **4.24 W**

Because a practical inductor consumes power, it must be modelled as pure
inductance in series with pure resistance — never as pure inductance.

### Worked example 2 — power factor and phase angle of a ballast

Determine the power factor and phase angle of a ballast with 1.8 ohms of
resistance and an inductance of 150 mH at 50 Hz.

- XL = 2 pi f L = 2 x 3.1416 x 50 x 0.15 = **47.12 ohms**
- Z = square root of (R squared + XL squared) = square root of (1.8 squared + 47.12 squared)
- Z = square root of (3.24 + 2220.3) = square root of 2223.5 = **47.16 ohms**
- Power factor = R / Z = 1.8 / 47.16 = **0.038 lagging**
- phi = cos inverse (0.038) = **87.8 degrees lagging**

An almost purely reactive load. Uncorrected, a bank of these fittings drags an
installation's power factor down badly, which is exactly why fluorescent
fittings carry correction capacitors.

### Worked example 3 — a motor from nameplate data

A single-phase 230 V motor draws 4.5 kW from the supply and the supply current
is 30 A. Find the apparent power, the power factor and the phase angle.

- S = V x I = 230 x 30 = 6900 VA = **6.9 kVA**
- Power factor = P / S = 4500 / 6900 = **0.652 lagging**
- phi = cos inverse (0.652) = **49.3 degrees lagging**

The cable, switchgear and any supplying transformer must handle 30 A, even
though the customer is billed for 4.5 kW.

### Worked example 4 — the whole power triangle

A 230 V 50 Hz circuit passes 1.6 A at a power factor of 0.8. Find the phase
angle, the true power, the apparent power and the reactive power.

- phi = cos inverse (0.8) = **36.87 degrees lagging**
- P = V I cos phi = 230 x 1.6 x 0.8 = **294.4 W**
- S = V I = 230 x 1.6 = **368 VA**
- Q = V I sin phi = 230 x 1.6 x sin (36.87) = 368 x 0.6
- Q = **220.8 VAR**

Check with Pythagoras: square root of (294.4 squared + 220.8 squared) =
square root of (86671 + 48753) = square root of 135424 = 368 VA. Correct.

### Worked example 5 — sizing from a kVA rating

A 400 V single-phase alternator is rated at 32 kVA. What is the maximum safe
power output at (a) unity power factor and (b) 0.8 power factor?

- (a) P = S x cos phi = 32 x 1.0 = **32 kW**
- (b) P = 32 x 0.8 = **25.6 kW**

The machine is limited by its current rating either way — S = 32 kVA gives
32000 / 400 = 80 A in both cases. Only the useful output changes.

### Worked example 6 — current from power and power factor

A single-phase motor draws 1150 W from a 230 V 50 Hz supply and a power factor
meter in the circuit reads 0.54. Determine the current taken from the supply.

- P = V I cos phi, so I = P / (V cos phi)
- I = 1150 / (230 x 0.54) = 1150 / 124.2
- I = **9.26 A**

At unity power factor the same 1150 W would need only 1150 / 230 = 5 A. The
poor power factor has nearly doubled the current in the cable.

## Measuring a.c. power

You cannot get true power from a voltmeter and an ammeter on a.c. Their
product gives **apparent** power, which only equals true power when the load is
purely resistive.

A **wattmeter** (dynamometer type) does give true power, because its current
coil responds to the instantaneous product of voltage and current and
therefore averages the real power. On a purely reactive load the 90 degree
phase shift makes that average zero, which is the correct answer.

The wattmeter has two coils. The current coil is few turns of large
cross-section, connected in series with the load. The voltage (potential) coil
is many turns of fine wire, connected across the supply. Terminals are usually
marked M (mains) and L (load) for the current coil and C (common) and V for
the voltage coil; some instruments use A1/A2 and V1/V2 instead. The standard
single-phase connection is:

- M to the supply active (line side)
- L to the load active
- V1 (C) commoned back to M
- V2 (V) to neutral

Digital wattmeters and **power analysers** do all of this and more,
displaying true, apparent and reactive power together with harmonic content,
and usually taking their current signal from a clamp or flexible current probe
rather than being wired in series.

**Energy** is measured in kilowatt hours by a kWh meter — historically a
dynamometer driving a geared register through a rotating disc, now almost
always an electronic **smart meter** that logs multiple tariffs for different
demand periods and reports remotely to the retailer. Power analysers with
time-of-use logging perform the same function for diagnostic work.

### Worked example 7 — power factor from three instruments

A 230 V single-phase motor pulls 2.7 A, and a wattmeter connected into the same
circuit indicates 450 W. Work out the power factor, then the phase angle.

- S = V x I = 230 x 2.7 = **621 VA**
- Power factor = P / S = 450 / 621 = **0.725 lagging**
- phi = cos inverse (0.725) = **43.5 degrees lagging**

A **power factor meter** connects the same way as a wattmeter and reads power
factor directly on a scale from 0 to 1.0.

### Worked example 8 — power factor from a d.c. and an a.c. test

A coil is tested twice at the same terminal voltage of 230 V. On d.c. it draws
2 A; on 50 Hz a.c. it draws 1 A. Find the phase angle.

The d.c. test sees only resistance; the a.c. test sees impedance.

- R = V / I(d.c.) = 230 / 2 = **115 ohms**
- Z = V / I(a.c.) = 230 / 1 = **230 ohms**
- Power factor = R / Z = 115 / 230 = **0.5**
- phi = cos inverse (0.5) = **60 degrees lagging**

This two-test method is a genuinely useful field technique for separating a
coil's resistance from its reactance with nothing but a multimeter and a d.c.
source.

## What to remember

- Always use RMS values in a.c. power calculations.
- True power P = V I cos phi, in watts: what does the work.
- Apparent power S = V I, in VA: what the cables and switchgear must carry.
- Reactive power Q = V I sin phi, in VAR: what sloshes back and forth.
- Power factor = cos phi = P / S = R / Z, from 0 to 1.
- Only a wattmeter, power analyser or power factor meter gives true power on
  a.c.; volts times amps gives VA.
`,
        quiz: [
          {
            q: "A single-phase load draws 20 A at 230 V with a power factor of 0.75 lagging. What are the apparent, true and reactive powers?",
            options: [
              "4.6 kVA, 3.45 kW, 3.04 kVAR",
              "4.6 kVA, 6.13 kW, 3.04 kVAR",
              "3.45 kVA, 4.6 kW, 2.3 kVAR",
              "4.6 kVA, 3.45 kW, 1.15 kVAR",
            ],
            answer: 0,
            explain: "S = 230 x 20 = 4600 VA. P = S cos phi = 4600 x 0.75 = 3450 W. sin phi = sin (cos inverse 0.75) = 0.661, so Q = 4600 x 0.661 = 3.04 kVAR. Check: square root of (3.45 squared + 3.04 squared) = 4.6 kVA.",
          },
          {
            q: "Why are transformers and alternators rated in kVA rather than kW?",
            options: [
              "Because kVA is a larger number and sounds better",
              "Because the windings and insulation are limited by current and voltage, which are fixed regardless of the load power factor",
              "Because they cannot deliver real power",
              "Because kW ratings only apply to motors",
            ],
            answer: 1,
            explain: "The conductor size sets the maximum current and the insulation sets the maximum voltage, and their product is the apparent power. How much of that apparent power becomes useful watts depends entirely on the connected load's power factor, which the machine's designer cannot know.",
          },
          {
            q: "A voltmeter and an ammeter on a motor circuit read 230 V and 12 A, while a wattmeter reads 1932 W. What is the power factor, and why do the first two instruments alone not give the answer?",
            options: [
              "0.7 lagging; volts times amps gives apparent power, not true power, unless the load is purely resistive",
              "1.0; the readings must be wrong",
              "0.7 leading; a motor is a capacitive load",
              "0.35 lagging; power factor is P divided by V only",
            ],
            answer: 0,
            explain: "S = 230 x 12 = 2760 VA and PF = P/S = 1932/2760 = 0.7 lagging. A voltmeter and ammeter cannot see the phase relationship, so their product is always apparent power. A motor is inductive, so the power factor is lagging.",
          },
          {
            q: "The same coil is measured at 230 V on d.c. and on a.c., drawing 2 A and 1 A respectively. What does this tell you?",
            options: [
              "The coil is faulty on a.c.",
              "Its resistance is 115 ohms and its impedance is 230 ohms, so its power factor is 0.5 and the current lags by 60 degrees",
              "Its impedance is 115 ohms and its resistance is 230 ohms",
              "The a.c. supply voltage must be lower than stated",
            ],
            answer: 1,
            explain: "On d.c. there is no reactance, so R = 230/2 = 115 ohms. On a.c. the same voltage produces less current because impedance includes reactance: Z = 230/1 = 230 ohms. PF = R/Z = 0.5 and phi = cos inverse 0.5 = 60 degrees lagging.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "pf-correction",
        title: "Power factor correction and sizing the capacitor",
        minutes: 14,
        simple: "A motor with a poor power factor makes the cables carry far more current than the work it does actually needs. Adding a capacitor across it does not change what the motor does, but it supplies the sloshing current locally instead of dragging it all the way from the substation. The line current drops, the cables run cooler, and the customer's demand charge falls.",
        refs: REFS_PFC,
        content: `
Power factor correction is the most commercially important calculation in this
chapter. It is what an electrician is asked to do when a client is charged in
kVA, when a switchboard is at its limit, or when a supply authority writes
demanding that an installation be brought into line.

## What a poor power factor costs

For a given true power, the lower the power factor the higher the current.
Since P = V I cos phi, halving the power factor doubles the current. That
extra current does no work but has to be carried anyway, so:

- Larger cross-sectional area conductors are needed
- Larger transformers are needed
- Higher-rated switchgear and higher-rated protective devices are needed
- Voltage drop along the conductors increases
- Copper losses (I squared x R) increase, in the installation and in the
  network
- Efficiency falls, fuel burn and generating costs rise
- Capital cost of the whole supply chain rises

### Worked example 1 — the same load at three power factors

Supply a 1 kW load from 250 V a.c. Find the current it draws at unity power
factor, and again at 0.8 and at 0.4.

- I = P / (V cos phi)
- At PF = 1.0 (phi = 0 degrees): I = 1000 / (250 x 1.0) = **4 A**
- At PF = 0.8 (phi = 37 degrees): I = 1000 / (250 x 0.8) = **5 A**
- At PF = 0.4 (phi = 66 degrees): I = 1000 / (250 x 0.4) = **10 A**

Same kilowatt, same energy bill for consumption, two and a half times the
current. Every cable and every contact in the path has to be sized for 10 A.

### Worked example 2 — what a kVA rating really limits

A transformer is designed for 250 V and 40 A. What is its rating and how much
power can it deliver?

- Rating = V x I = 250 x 40 = 10 000 VA = **10 kVA**
- Feeding a resistive furnace at unity power factor: P = 10 000 x 1.0 = **10 kW**
- Feeding a load at 0.8 power factor: P = 10 000 x 0.8 = **8 kW**

This is why a transformer must be rated in VA. The VA figure is its true
limit, independent of what is connected.

### Worked example 3 — an installation-scale illustration

A 230 V single-phase installation supplies motors totalling 10 kW.

- The working (in-phase) current is 10 000 / 230 = **43.5 A**
- At a power factor of 0.6: I = 10 000 / (230 x 0.6) = **72.5 A**
- Corrected to 0.8: I = 10 000 / (230 x 0.8) = **54.3 A**

A drop of about 20 per cent in line current for exactly the same useful output.

## What causes a poor power factor

Nearly all bad power factor is **lagging**, caused by inductive loads. Leading
power factor is rare, though it does occur on lightly loaded long transmission
lines. The main offenders:

- Induction motors, especially **lightly loaded or oversized** ones. A motor
  running at a quarter load has a far worse power factor than the same motor
  at full load.
- Lightly loaded transformers.
- Fluorescent and discharge lighting with iron-cored ballasts. Modern
  electronic ballasts are designed for a power factor near unity.

The first fix, before any capacitor is considered, is to size motors and
transformers to run at or near full load.

## How a capacitor corrects it

A pure capacitor is a load that operates at a leading power factor with zero
true power. Connect one in parallel with an inductive load and its leading
current cancels part of the load's lagging current, without consuming any
power and without changing the load.

Five things happen, and it is worth being able to say all of them:

- The motor current and the motor's own power factor are **unchanged** — it
  still sees 230 V and its own mechanical load.
- The in-phase (power) component of the line current is **unchanged**.
- The line current is **reduced**, even though a component has been added.
- The combined power factor is **improved**, and the VA and VAR of the
  combined circuit are reduced.
- The power consumption in watts is **unchanged**.

## How much correction?

For economic reasons the accepted target is a power factor of about **0.9
lagging**. Below 0.9 the current climbs steeply. Above 0.9 the cost of extra
capacitors outweighs the saving. Supply rules generally require the power
factor to be held between 0.9 lagging and unity, and to **never go leading**.

### Worked example 4 — what a guessed capacitor size achieves

An induction motor running on single-phase 230 V 50 Hz pulls 15 A at a power
factor of 0.6. Someone fits an 80 microfarad capacitor across the line. Find
the resulting line current and power factor.

Resolve the motor current into its two components:

- In-phase (power) component: IP = Imotor x PF = 15 x 0.6 = **9 A**
- phi(motor) = cos inverse (0.6) = **53.13 degrees**
- Reactive component: IXL = Imotor x sin phi = 15 x sin (53.13) = 15 x 0.8
- IXL = **12 A lagging**

Now the capacitor branch:

- XC = 1/(2 pi f C) = 1/(2 x 3.1416 x 50 x 80 x 10 to the power -6) = **39.79 ohms**
- IC = V / XC = 230 / 39.79 = **5.78 A leading**

Net reactive current and new line current:

- IX = IXL - IC = 12 - 5.78 = **6.22 A lagging**
- Iline = square root of (IP squared + IX squared) = square root of (81 + 38.7)
- Iline = square root of 119.7 = **10.94 A**
- New PF = IP / Iline = 9 / 10.94 = **0.823 lagging**

The line current fell from 15 A to 10.94 A, but 0.823 still does not meet the
0.9 target. Guessing a capacitor size is not a method. Calculate it.

## Sizing the capacitor properly

The reliable approach uses the power triangle, because **true power does not
change** during correction. Only the reactive power is reduced.

1. Find the true power: P = V I cos phi (or take it from the nameplate).
2. Find the existing reactive power: Q1 = P x tan (phi1), where
   phi1 = cos inverse (PF1). Equivalently Q1 = V I sin phi1.
3. Find the target reactive power: Q2 = P x tan (phi2), where
   phi2 = cos inverse (PF2).
4. The capacitor must supply the difference: **QC = Q1 - Q2**.
5. Convert to a capacitor: IC = QC / V, then XC = V / IC, then
   C = 1 / (2 pi f XC). Or in one step, **C = QC / (2 pi f V squared)**.

### Worked example 5 — sizing a capacitor to reach 0.9

Fed from 230 V 50 Hz, a motor draws 10 A at a lagging power factor of 0.65.
Size the capacitor that will lift the power factor to 0.9 lagging, and find the
new line current.

True power:

- P = V I cos phi = 230 x 10 x 0.65 = **1495 W**

Reactive power before:

- phi1 = cos inverse (0.65) = 49.46 degrees, tan (49.46) = 1.169
- Q1 = P x tan phi1 = 1495 x 1.169 = **1747 VAR**

Reactive power wanted:

- phi2 = cos inverse (0.9) = 25.84 degrees, tan (25.84) = 0.4843
- Q2 = 1495 x 0.4843 = **724 VAR**

Capacitor duty:

- QC = Q1 - Q2 = 1747 - 724 = **1023 VAR**

Capacitor size:

- IC = QC / V = 1023 / 230 = **4.45 A**
- XC = V / IC = 230 / 4.45 = **51.7 ohms**
- C = 1 / (2 pi f XC) = 1 / (2 x 3.1416 x 50 x 51.7) = 1 / 16242
- C = 6.16 x 10 to the power -5 F = **61.6 microfarads**

New line current:

- S2 = P / PF2 = 1495 / 0.9 = **1661 VA**
- I2 = S2 / V = 1661 / 230 = **7.22 A**

The same result comes from the shortcut I2 = I1 x (cos phi1 / cos phi2) =
10 x (0.65 / 0.9) = 7.22 A, which is useful for a quick check.

A 61.6 microfarad capacitor is not a stock item. In practice choose the
**nearest standard rating at or just below** the calculated value, so the
installation lands just under 0.9 rather than overshooting into a leading
power factor, which supply rules do not allow.

### Worked example 6 — selecting from a manufacturer's catalogue

A 230 V single-phase installation has a total apparent power of 4375 VA at
0.6 power factor lagging, to be corrected to 0.9345. Specify the capacitor.

Step 1 — the triangle before correction:

- P = S1 x PF1 = 4375 x 0.6 = **2625 W**
- sin (cos inverse 0.6) = 0.8, so Q1 = 4375 x 0.8 = **3500 VAR**

Step 2 — the triangle after correction. The watts do not change:

- S2 = P / PF2 = 2625 / 0.9345 = **2809 VA**
- sin (cos inverse 0.9345) = 0.3559, so Q2 = 2809 x 0.3559 = **1000 VAR**

Step 3 — the capacitor duty:

- QC = Q1 - Q2 = 3500 - 1000 = **2500 VAR = 2.5 kVAR**

A catalogue of single-phase correction capacitors will list a 230 V 2.5 kVAR
unit, and that is the one to order. Manufacturers' tables specify the kVAR at
the rated voltage, the capacitance, the current, the physical dimensions, and
whether an internal discharge resistor is fitted — check that last column,
because if no discharge resistor is included you must fit an external one to
satisfy the Wiring Rules.

### Worked example 7 — the kVAR method on a whole installation

On a non-standard 480 V single-phase installation the load is 54 A at 0.55
power factor. Work out the current that would flow once the power factor has
been lifted to 0.8, and the kVAR rating of capacitor required.

New current:

- I2 = I1 x (cos phi1 / cos phi2) = 54 x (0.55 / 0.8) = 54 x 0.6875
- I2 = **37.1 A**

Reactive power before and after:

- sin (cos inverse 0.55) = 0.8352
- Q1 = V I1 sin phi1 = 480 x 54 x 0.8352 = **21.65 kVAR**
- sin (cos inverse 0.8) = 0.6
- Q2 = V I2 sin phi2 = 480 x 37.1 x 0.6 = **10.68 kVAR**
- QC = Q1 - Q2 = 21.65 - 10.68 = **10.97 kVAR, so an 11 kVAR unit**

### Worked example 8 — a full installation correction

A single-phase 230 V installation has a total load of 20 kW at a power factor
of 0.6. Find the capacitor size in kVAR to correct to 0.9, the new supply
current and the current rating of the capacitor.

- phi1 = cos inverse (0.6) = 53.13 degrees, tan = 1.3333
- Q1 = P x tan phi1 = 20 000 x 1.3333 = **26.67 kVAR**
- phi2 = cos inverse (0.9) = 25.84 degrees, tan = 0.4843
- Q2 = 20 000 x 0.4843 = **9.69 kVAR**
- QC = 26.67 - 9.69 = **16.98 kVAR, so a 17 kVAR bank**

New supply current:

- S2 = P / PF2 = 20 000 / 0.9 = 22 222 VA
- I2 = 22 222 / 230 = **96.6 A**

(Before correction S1 = 20 000 / 0.6 = 33 333 VA, so I1 = 144.9 A. Correction
has removed 48 A from the consumer's mains.)

Capacitor current rating:

- IC = QC / V = 16 980 / 230 = **73.8 A**

That capacitor current is real current and the capacitor's own circuit
conductors, switchgear and protection must be sized for it.

## Where the capacitors go

- **For a single load**, one capacitor connected in parallel with that load,
  switched with it. Simple, and it unloads the whole circuit back to the
  switchboard.
- **For a whole installation**, a bank at the main switchboard. Because the
  installation load varies, banks are usually **stepped** — several capacitors
  switched in and out by a power factor controller. Steps should not be
  excessive; 50 kVAR increments are a typical limit.
- **For very large loads**, over-excited synchronous motors can be run as
  leading-power-factor machines to provide correction, or a purpose-built
  power factor correction unit is installed.

## Rules and requirements

Power factor is a performance matter, not a safety matter, so AS/NZS 3000:2018
says relatively little about it directly — its Clause 4.15 requirements cover
the safe installation, switching, protection and discharge of the capacitors
themselves. The performance requirements live in the **local supply
authority's Service and Installation Rules**, which vary by jurisdiction.
Typically they require:

- Compliance with AS/NZS 3000:2018 for switching and isolation of capacitor
  installations
- Power factor maintained between 0.9 lagging and unity, never leading
- Sensible step sizes in a switched bank
- Series resonance to be avoided
- Harmonics and voltage spikes to be controlled so they do not affect the
  network or other customers

Historically these requirements applied only to installations billed in kVA
hours, which meant non-domestic customers. That is changing as the grid and
tariff structures evolve.

>! Capacitors switched onto a supply that already contains harmonic currents
>! can form a resonant circuit with the supply transformer's inductance. The
>! result can be very large circulating currents at a harmonic frequency,
>! blown capacitor fuses and failed capacitors, sometimes months after a
>! correction bank was installed. Where non-linear load is significant, use
>! detuned (reactor-connected) capacitor steps rather than plain capacitors.

## On the job

- Correct the cause first: right-size the motor, replace iron ballasts.
- True power never changes during correction; only the reactive power does.
- QC = P (tan phi1 - tan phi2) is the workhorse formula.
- Convert QC to capacitance with C = QC / (2 pi f V squared) and pick the
  nearest standard size at or just below it.
- Check the capacitor circuit's own conductors, switching category (AC-6b)
  and discharge arrangements before energising.
`,
        quiz: [
          {
            q: "A 5 kW single-phase load on 230 V has its power factor corrected from 0.5 to 0.9. Roughly what happens to the line current?",
            options: [
              "It falls from about 43.5 A to about 24.2 A",
              "It falls from about 24.2 A to about 21.7 A",
              "It rises, because a capacitor has been added",
              "It is unchanged, because the power is unchanged",
            ],
            answer: 0,
            explain: "I = P/(V cos phi). At 0.5: 5000/(230 x 0.5) = 43.5 A. At 0.9: 5000/(230 x 0.9) = 24.2 A. The capacitor adds a branch but supplies the reactive current locally, so the current upstream of it falls even though a component has been added.",
          },
          {
            q: "Which quantity stays exactly the same when a capacitor is connected across a motor to correct its power factor?",
            options: [
              "The apparent power of the combined load",
              "The reactive power of the combined load",
              "The true power in watts, and the motor's own current and power factor",
              "The line current",
            ],
            answer: 2,
            explain: "The motor still sees the same voltage and drives the same mechanical load, so its current, its power factor and the watts it consumes are untouched. What changes is the line current, the combined VA and the combined VAR upstream of the capacitor.",
          },
          {
            q: "An installation draws 12 kW at a power factor of 0.7 and is to be corrected to 0.95. What reactive power must the capacitor supply?",
            options: [
              "About 12.2 kVAR",
              "About 8.3 kVAR",
              "About 3.9 kVAR",
              "About 17.1 kVAR",
            ],
            answer: 1,
            explain: "phi1 = cos inverse 0.7 = 45.57 degrees, tan = 1.0202, so Q1 = 12 x 1.0202 = 12.24 kVAR. phi2 = cos inverse 0.95 = 18.19 degrees, tan = 0.3287, so Q2 = 12 x 0.3287 = 3.94 kVAR. QC = 12.24 - 3.94 = 8.3 kVAR. The 12.2 and 3.9 figures are Q1 and Q2 themselves, not the difference.",
          },
          {
            q: "Why do supply rules require a corrected installation to stay at or below unity power factor rather than going leading?",
            options: [
              "Because leading power factor cannot be metered",
              "Because a leading power factor still produces excess line current and can raise system voltage and cause resonance with network inductance",
              "Because capacitors would explode",
              "Because leading power factor produces no true power",
            ],
            answer: 1,
            explain: "Overcorrection swings the reactive current the other way. The line current rises again for the same watts, the voltage at the point of connection tends to rise, and the surplus capacitance can resonate with network and transformer inductance. Correction is aimed at about 0.9 lagging for exactly these reasons.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "harmonics-resonance",
        title: "Harmonics and resonance in a.c. systems",
        minutes: 14,
        simple: "Every wobbly waveform is really a bundle of clean sine waves at multiples of 50 Hz added together. Modern electronics chop up the supply and inject those extra frequencies back into the wiring, where they overheat neutrals and transformers. Separately, if a coil and a capacitor happen to match each other at the supply frequency, they can swap energy back and forth and build up voltages or currents far bigger than the supply that feeds them.",
        refs: REFS_RES,
        content: `
This lesson covers two effects that are easy to miss on a multimeter and can
wreck equipment: the extra frequencies injected by modern electronic loads,
and the energy build-up that happens when inductive and capacitive reactance
match.

## Every waveform is made of sine waves

Apart from pure d.c., every repeating waveform is a sum of sine waves. A clean
a.c. supply contains only one — the **fundamental**, 50 Hz in Australia. Any
other shape is the fundamental plus **harmonics**: sine waves at whole-number
multiples of the fundamental frequency, each with its own amplitude.

- 2nd harmonic = 2 x 50 = 100 Hz
- 3rd harmonic = 3 x 50 = 150 Hz
- 5th harmonic = 250 Hz, 7th = 350 Hz, and so on

Add a fundamental to a series of harmonics of decreasing amplitude and
recognisable shapes appear:

- Fundamental plus **all** harmonics (2nd at half amplitude, 3rd at one third,
  and so on) builds a **sawtooth** wave. A perfect sawtooth needs an infinite
  number of harmonics.
- Fundamental plus **odd harmonics only** (3rd at one third, 5th at one fifth,
  7th at one seventh) builds a **square** wave. A perfect square wave needs an
  infinite number of odd harmonics.
- A single high-frequency component riding on the fundamental — say 1000 Hz at
  one twentieth of the amplitude — appears as a visible ripple on an otherwise
  normal 50 Hz sine.

Harmonics are not inherently bad. Radio and television broadcasting would be
impossible without them. In a distribution system they are a nuisance at best
and destructive at worst.

## Where harmonics come from

Loads split into two families.

**Linear loads** are the older, simpler technology: resistive heaters,
induction motors, halogen lamps, iron-cored transformers. They draw current in
proportion to the applied voltage and barely distort the waveform.

**Non-linear loads** are electronic and work by "cutting up" the waveform —
high-frequency switching to produce a different voltage, current or frequency.
That chopping generates other frequencies in the supply. The equipment is
efficient, compact and modern, and it is everywhere:

- Switched-mode power supplies in computers, chargers and small appliances
- Electronic ballasts
- Electronic low-voltage transformers for downlights
- Variable frequency drives in motor speed control
- Inverters, including rooftop solar and battery systems

## Why harmonics cause trouble

Harmonic problems split into effects of the harmonic **order** (even or odd)
and effects of the harmonic **sequence**.

| Sequence | Harmonic orders | Effect in a motor |
|---|---|---|
| Positive | Fundamental, 4th, 7th, 10th | Fields rotate in the same direction as the fundamental |
| Negative | 2nd, 5th, 8th, 11th | Fields rotate against the fundamental, producing braking torque and heat |
| Zero | 3rd, 6th, 9th, 12th | No rotating field, but additional I squared x R losses in the machine |

By order, even harmonics tend to cancel and cause less trouble than odd ones.
Odd harmonics that are not multiples of three come from three-phase non-linear
loads. Non-linear single-phase loads, by contrast, generate **zero-sequence**
harmonics — the 3rd, 6th, 9th and so on — together with other odd harmonics.

The zero-sequence, or triplen, harmonics are the dangerous ones in a
three-phase installation. Because they are in phase in all three phases, they
**add** in the neutral rather than cancelling. A neutral conductor sized on
the assumption of balanced 50 Hz load can then be carrying more current than
any active, and overheat. Other symptoms of third-harmonic trouble are supply
transformers running hot and circuit protection nuisance-tripping.

## Dealing with harmonics

- **Remove or relocate the source** where practical.
- **Increase the neutral conductor size** in three-phase installations, or
  provide each phase with its own neutral.
- **Fit inductor/capacitor filters** tuned to reduce harmonic current at the
  troublesome frequencies. The inductors used for this are called **line
  reactors**.

## Testing for harmonics

- An **oscilloscope** shows the wave shape directly; distortion is visible.
- A **power analyser** performs a harmonic analysis, listing the magnitude of
  each harmonic order.
- A **clamp meter comparison** is the field method when no analyser is
  available: compare a reading from a standard RMS clamp meter with one from a
  true RMS clamp meter with wide frequency response. A significant difference
  between the two indicates harmonic content rather than simple out-of-balance
  current.

## Standards on harmonics

AS/NZS 3000:2018 addresses harmonics mainly through conductor current rating
and sizing. Clause 3.5.2 sets out the requirements: a harmonic current greater
than **40 per cent of the phase current** is enough to require a change in the
cross-sectional area of the conductors, and third-harmonic content can require
a neutral **larger** than the associated active conductors so it can carry the
cumulative harmonic current.

Local Service and Installation Rules concentrate on the effect of harmonics on
the network and other customers, and place limits on switched-mode supplies
and on inverters, to prevent harmonic distortion (which changes the RMS values
seen by other equipment), data corruption and unwanted operation of frequency
relays.

## Resonance

When a circuit's power factor is corrected all the way to unity, the current is
brought exactly into phase with the voltage. The circuit may still contain
plenty of inductive and capacitive reactance, but they cancel and it behaves
as a purely resistive circuit.

Both reactances depend on frequency — XL rises with frequency, XC falls. There
is therefore always one frequency at which they are exactly equal. At that
frequency the circuit is **resonant**. Energy simply shuttles between the
magnetic field of the inductor and the electric field of the capacitor, one
quarter cycle at a time. The frequency at which this happens is the
**resonant frequency**:

At resonance XL = XC, so 2 pi f L = 1 / (2 pi f C). Rearranging:

**fr = 1 / (2 pi x square root of (L x C))**

where fr is in hertz, L in henrys and C in farads.

## Series resonance: dangerous voltages

In a series circuit at resonance, XL - XC = 0, so:

- **Z = R** — impedance is at its **minimum**
- **I = V / R** — current is at its **maximum**
- Power factor is **unity**

The current is common to both reactive components, so each develops a voltage
V = I XL and V = I XC. Those voltages are equal and 180 degrees apart, so they
cancel as far as the supply is concerned — but each one is individually
present, and can be many times the supply voltage.

### Worked example 1 — how bad it gets

A 10 ohm resistor, a 460 mH inductor and a 22 microfarad capacitor are
connected in series across a 230 V 50 Hz supply. Find the current and the
voltage across each component.

- XL = 2 pi f L = 2 x 3.1416 x 50 x 0.46 = **144.5 ohms**
- XC = 1/(2 pi f C) = 1/(2 x 3.1416 x 50 x 22 x 10 to the power -6) = **144.7 ohms**

The two are equal for practical purposes, so the circuit is resonant at 50 Hz:

- Z = square root of (10 squared + (144.5 - 144.7) squared) = **10 ohms**
- I = V / Z = 230 / 10 = **23 A**
- VR = I x R = 23 x 10 = **230 V**
- VL = I x XL = 23 x 144.5 = **3324 V**
- VC = I x XC = 23 x 144.7 = **3328 V**

Confirm the resonant frequency:

- fr = 1 / (2 pi x square root of (0.46 x 22 x 10 to the power -6))
- L x C = 0.46 x 0.000022 = 1.012 x 10 to the power -5
- square root = 3.181 x 10 to the power -3
- fr = 1 / (2 x 3.1416 x 0.003181) = 1 / 0.01999 = **50.0 Hz**

>! Read those numbers again. A 230 V supply has produced more than 3300 V
>! across two components. That is enough to break down insulation, to start a
>! fire and to kill. It will also destroy a multimeter set to a 600 V range. A
>! series resonant circuit must be avoided in general electrical work unless
>! deliberate precautions are taken: enough series resistance to limit the
>! current, components and cabling insulated for the calculated voltage, and
>! extreme care when testing.

### Worked example 2 — a second series resonant circuit

A 20 ohm resistor, a 253 mH inductor and a 40 microfarad capacitor are
connected in series across 230 V 50 Hz. Find the reactances, the impedance,
the current and the voltage across the inductor and capacitor.

- XL = 2 x 3.1416 x 50 x 0.253 = **79.48 ohms**
- XC = 1/(2 x 3.1416 x 50 x 40 x 10 to the power -6) = **79.58 ohms**
- Net reactance = 79.58 - 79.48 = 0.1 ohms, negligible
- Z = square root of (20 squared + 0.1 squared) = **20 ohms**
- I = 230 / 20 = **11.5 A**
- VL = 11.5 x 79.48 = **914 V**
- VC = 11.5 x 79.58 = **915 V**

Again, roughly four times the supply voltage across each reactive component,
in a circuit whose supply-side behaviour looks entirely ordinary.

### Worked example 3 — finding the resonant frequency

A series circuit is built from 25 mH of inductance, 100 microfarads of
capacitance and 10 ohms of resistance. At what frequency does it resonate, and
what impedance does it present there?

- L x C = 0.025 x 0.0001 = 2.5 x 10 to the power -6
- square root of (L x C) = 1.581 x 10 to the power -3
- fr = 1 / (2 x 3.1416 x 0.001581) = 1 / 0.009935
- fr = **100.7 Hz**
- At resonance Z = R = **10 ohms**

Note this circuit resonates near the second harmonic of the supply, not at
50 Hz. A harmonic-rich supply can excite it even though the fundamental
cannot — one of the ways harmonics and resonance combine to cause trouble.

## Parallel resonance: dangerous circulating currents

When an inductor and a capacitor are in parallel and their reactances are
equal, the two branch currents are equal and 180 degrees apart. They cancel at
the supply terminals. In theory the supply current would be zero, while a
large current circulates round the L-C loop.

In practice the inductor has some resistance, so the parallel resonant circuit
appears to the supply as a pure resistance and draws just enough in-phase
current to make up the circuit losses. The lower the losses, the smaller the
supply current.

So the parallel resonant circuit is the mirror image of the series one:

| | Series resonance | Parallel resonance |
|---|---|---|
| Impedance at resonance | Minimum, equal to R | Maximum |
| Supply current | Maximum | Minimum |
| The hazard | Very high voltages across L and C | Very high circulating current between L and C |
| Power factor | Unity | Unity |

The same formula, fr = 1/(2 pi x square root of (L C)), gives the parallel
resonant frequency closely enough for practical purposes. Strictly it is
approximate, because a real inductor is a series R-L branch, but the
difference is usually smaller than the tolerance of the components.

## Where resonance is put to work

- **Radio tuning.** A parallel L-C circuit presents maximum impedance at its
  resonant frequency, so only that station's frequency is passed on and the
  rest are shunted away. Making L or C adjustable selects the station.
- **Filtering.** A series resonant circuit passes its resonant frequency and
  attenuates everything else, since off-resonance frequencies see a higher
  impedance.
- **Instruments and sensors.** Parallel resonance is used to measure
  capacitance, in frequency-dependent transducers, and in metal detectors.

## Standards on resonance

AS/NZS 3000:2018 and the local Service and Installation Rules both address
resonance. Series resonance can cause overvoltage within a circuit, which is a
safety concern: Clauses 1.5.11 and 2.7 require that where danger to persons or
property could arise, the installation be protected against overvoltage —
satisfied either by insulation and separation or by protective devices.
Parallel resonance can cause excessive currents, so conductors carrying them
must be sized correctly, and the local rules generally require measures such
as **de-tuning reactors** and resistors to prevent resonance with the network
that could produce high inrush currents.

## What to remember

- Any non-sinusoidal repeating waveform is a fundamental plus harmonics at
  multiples of 50 Hz.
- Non-linear electronic loads are the source; overheated neutrals, hot
  transformers and nuisance tripping are the symptoms.
- Triplen harmonics (3rd, 6th, 9th) add in the neutral instead of cancelling.
- Resonance occurs when XL = XC, at fr = 1/(2 pi x square root of (L C)).
- Series resonance: minimum impedance, maximum current, dangerous voltages.
- Parallel resonance: maximum impedance, minimum supply current, dangerous
  circulating current.
`,
        quiz: [
          {
            q: "What is the third harmonic of a 50 Hz supply, and why does it matter in a three-phase installation?",
            options: [
              "16.7 Hz; it causes flicker in lighting",
              "150 Hz; it is a zero-sequence harmonic so it adds in the neutral instead of cancelling, and can overheat the neutral conductor",
              "150 Hz; it cancels in the neutral like the fundamental",
              "100 Hz; it produces braking torque in motors",
            ],
            answer: 1,
            explain: "The third harmonic is 3 x 50 = 150 Hz. Triplen harmonics are in phase in all three phases, so instead of cancelling in the neutral they add. That is why AS/NZS 3000:2018 Clause 3.5.2 can require a neutral larger than the actives where harmonic content is significant.",
          },
          {
            q: "A 12 ohm resistor, an inductor of XL = 200 ohms and a capacitor of XC = 200 ohms are in series across 240 V. What is the current and the voltage across the inductor?",
            options: [
              "0.58 A and 116 V",
              "20 A and 4000 V",
              "1.2 A and 240 V",
              "20 A and 240 V",
            ],
            answer: 1,
            explain: "At resonance the reactances cancel, so Z = R = 12 ohms and I = 240/12 = 20 A. The inductor then develops I x XL = 20 x 200 = 4000 V, which is cancelled at the supply terminals by an equal and opposite 4000 V across the capacitor. Both voltages are real and lethal.",
          },
          {
            q: "How do series and parallel resonance differ from the point of view of the supply?",
            options: [
              "Series resonance gives maximum impedance and minimum current; parallel gives the opposite",
              "Series resonance gives minimum impedance and maximum current; parallel gives maximum impedance and minimum supply current",
              "Both give minimum impedance and maximum current",
              "Neither affects the supply current",
            ],
            answer: 1,
            explain: "In series the reactive voltages cancel leaving only R, so impedance is minimum and current is maximum. In parallel the reactive currents cancel at the terminals, so the supply sees maximum impedance and supplies only the losses, while a large current circulates inside the L-C loop.",
          },
          {
            q: "A technician compares two clamp meter readings on a neutral: a standard RMS meter reads 18 A and a wide-bandwidth true RMS meter reads 31 A. What is the most likely explanation?",
            options: [
              "One of the meters is faulty",
              "Significant harmonic current is present, which the standard meter cannot respond to",
              "The circuit is unbalanced",
              "The neutral is shared with another circuit",
            ],
            answer: 1,
            explain: "A standard average-responding or narrow-bandwidth meter is calibrated for a 50 Hz sine wave and under-reads distorted current. A wide-bandwidth true RMS meter captures the harmonic content as well. The difference between the two readings is the field indicator of harmonics, as distinct from a simple out-of-balance load, which both meters would read alike.",
          },
        ],
      },
    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
