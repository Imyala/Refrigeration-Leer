/* =========================================================================
   Course content, module 111 — Electrical principles.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 11 — Electrical principles.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 11, Electrical principles",
  ];

  const REFS_WIRING = REFS.concat([
    "AS/NZS 3000 Wiring Rules — installation requirements, protective earthing, MEN system and cable identification",
    "AS 60038 Standard voltages — nominal 230 V single-phase / 400 V three-phase at 50 Hz in Australia",
  ]);

  const REFS_SAFE = REFS.concat([
    "AS/NZS 4836 Safe working on or near low-voltage electrical installations and equipment — isolation, testing and proving de-energised",
  ]);

  const REFS_MOTOR = REFS.concat([
    "AS/NZS 3000 Wiring Rules — circuit protection, voltage drop and motor circuit requirements",
  ]);

  const MODULES = [

  /* ======================================================================
     Module R1.11 — Electrical principles for refrigeration
     ====================================================================== */
  {
    id: "v1-electrical-principles",
    stream: "v1",
    title: "R1.11 · Electrical principles for refrigeration",
    blurb: "Electron flow to three-phase supply: Ohm's law, power and energy, series and parallel circuits, meters, magnetism and induction, AC waveforms, reactance and power factor, and Australian supply practice.",
    lessons: [

      /* --------------------------------------------------------------- */
      {
        id: "nature-of-electricity",
        title: "What electricity is, and what carries it",
        minutes: 13,
        simple: "Everything is built from atoms, and atoms have tiny negative particles called electrons whizzing around the outside. In some materials, such as copper, the outer electrons are held loosely and can be pushed along from atom to atom, like people shuffling along a crowded row of seats. That shuffle is an electric current. In other materials the electrons are held tightly and nothing moves, so we use those materials for insulation.",
        refs: REFS,
        content: `
Every fault you will ever chase on a refrigeration system comes back to one
question: are the electrons getting where they are supposed to go? Before you
can answer that with a meter, you need a mental picture of what is moving and
why some materials let it move while others do not.

## Matter, atoms and electrons

Matter is anything that takes up space and has mass. Break a material down and
you reach the **molecule**, the smallest piece that is still that material.
Break the molecule down and you reach **atoms** — water, for example, is two
hydrogen atoms locked to one oxygen atom.

An atom has a **nucleus** of protons and neutrons at the centre, with
**electrons** orbiting it in layers called shells (labelled K, L, M, N, O, P, Q
from the inside out). Protons carry a positive charge, electrons carry an equal
negative charge, and neutrons carry none. In a balanced atom the number of
protons equals the number of electrons, so the atom is electrically neutral.

The shell that matters to an electrician is the **outermost** one, called the
valence shell. It is the count of electrons in that shell — not the size of the
atom — that decides whether a material conducts.

| Electrons in the outer shell | Electrical behaviour | Typical materials |
|---|---|---|
| 1 to 3 | Conductor — outer electrons break free easily | Copper, silver, aluminium |
| 4 to 5 | Semiconductor — conducts under the right conditions | Silicon, germanium |
| 6 to 8 | Insulator — outer electrons held tightly | Rubber, glass, most plastics |

Copper is a good illustration. It has 29 protons and its electrons fill up in
the pattern 2, 8, 18 and then **1** in the outer shell — one loosely held
electron per atom, and copper is one of the best practical conductors there is.
Silicon has 2, 8 and **4**, which is why it sits in the middle and became the
foundation of every solid-state control you will ever replace.

## The two laws of charge

- Like charges repel each other: positive pushes positive away, negative pushes
  negative away.
- Unlike charges attract each other: positive pulls negative towards it.

An atom that loses an electron is left with more protons than electrons, so it
carries a net positive charge. An atom with a spare electron carries a net
negative charge. Those charged atoms are called ions, and it is this imbalance
that drives everything else in this module.

## Electron flow and conventional flow

Connect a source of electrical pressure across a copper conductor and the
negative terminal repels the loose electrons while the positive terminal
attracts them. Each electron jumps to the neighbouring atom, knocking another
one along, and the shuffle runs the length of the conductor. That is
**true electron flow**, and it runs from **negative to positive**.

Long before electrons were discovered, early workers guessed that something
flowed from positive to negative. That guess is still used in most textbooks,
schematics and semiconductor symbols, and it is called **conventional current
flow**. Both descriptions predict the same meter readings and the same fault
symptoms, so neither is wrong to work with — but you must know which one a rule
is written for. The left-hand rules taught later in this module are for true
electron flow; the equivalent right-hand rules found elsewhere are written for
conventional flow.

## Conductors

Most conductors are metals, because metals have that loosely held outer
electron. Every conductor still has some opposition to electron movement, and
that opposition is described by **resistivity** (also called specific
resistance), measured in ohm metres at 20 degrees C.

| Material | Resistivity (ohm metres at 20 C) | Where you meet it |
|---|---|---|
| Silver | 1.63 x 10 to the minus 8 | Contact faces in switchgear |
| Copper | 1.72 x 10 to the minus 8 | Almost all cabling and windings |
| Aluminium | 2.83 x 10 to the minus 8 | Large mains cables, condenser fins |
| Tungsten | 5.51 x 10 to the minus 8 | High-speed switching contacts |
| Nickel | 7.20 x 10 to the minus 8 | Alloys, plating |
| Iron | 10.0 x 10 to the minus 8 | Cores, structural steel |
| Nichrome | 110 x 10 to the minus 8 | Defrost and duct heater elements |
| Carbon | 4000 to 7000 x 10 to the minus 8 | Brushes, composition resistors |

Silver is the best of them but is far too expensive to run around a building,
so copper does the job. Aluminium is used in large cables where copper prices
bite, but its resistance for a given cross-section is roughly two-thirds higher
than copper, so aluminium conductors must be sized up. Nichrome earns its place
by being both high resistance and able to sit red hot without falling apart —
exactly what a defrost element needs.

### Worked example: resistance of a run of cable

The resistance of a conductor is found from R = (rho x L) / A, where rho is
resistivity in ohm metres, L is length in metres and A is cross-sectional area
in square metres.

Take 30 m of 2.5 mm squared copper feeding a condensing unit. Note that
2.5 mm squared = 2.5 x 10 to the minus 6 square metres.

- R = (1.72 x 10 to the minus 8 x 30) / (2.5 x 10 to the minus 6)
- R = (5.16 x 10 to the minus 7) / (2.5 x 10 to the minus 6)
- R = **0.206 ohms** for one conductor

Current has to go out and come back, so the loop is 60 m and the circuit
resistance is about **0.41 ohms**. At 10 A that costs you roughly 4.1 V of
volt drop, which is why cable sizing is a real calculation and not a guess.

## Contact materials

Every contactor, thermostat and pressure switch you touch makes and breaks
current across a pair of contacts, so contact metal is chosen for arc
resistance and wear as much as for conductivity.

| Contact material | Strengths | Weaknesses |
|---|---|---|
| Copper and copper alloys | Good conductivity, good heat capacity, cheap | Oxide film raises contact resistance; wears quickly |
| Silver | Very low contact resistance; oxide stays conductive | Soft, wears under high pressure |
| Tungsten | Very hard, takes high temperature and fast switching | Oxides raise contact resistance unless wiped or heavily loaded |
| Platinum | Stable, low contact resistance, little build-up | Expensive; only for low current and low pressure |

Special-purpose contacts are often alloyed or **sintered** — powdered metals
pressed and heated into shape. When you find a contactor with pitted, black
tips and a warm cable, you are looking at oxide build-up raising contact
resistance, and heat is the result.

## Insulators

An insulator lets so little current through under normal voltage that the leak
can be ignored. Insulation is often rated by the voltage needed to puncture it,
in kV per mm. Push the voltage high enough and **every** insulator eventually
breaks down.

| Insulating material | Notes for the field |
|---|---|
| Mica | Naturally layered, very high temperature (melts near 1117 C), brittle |
| Rubber | Elastic, tough, corrosion resistant, but softens with heat and is attacked by oil |
| Vulcanised fibre | Mechanically strong slot insulation for motor windings; swells if wet |
| Fabrics (cotton, cambric, linen) | Flexible but porous, so impregnated with varnish or oil |
| Plastics and synthetic resins | Huge range; check the maker's temperature rating |
| Bakelite | Early moulded insulator; good under compression but can carbonise and conduct if overheated |
| Laminated board | Switchboard panels and switch mouldings |
| Glass and ceramics | Long-established, still used where heat and tracking matter |

Asbestos appears in old plant as high-temperature insulation on stoves, heater
banks and heating cable. It is no longer used and must never be disturbed.

>! Any suspected asbestos-insulated equipment stops work immediately. Do not
>! cut, drill, sand or sweep it. Report it and let a licensed asbestos removalist
>! deal with it.

Mechanical strength matters as much as electrical strength. Insulation on a
compressor terminal box lives with vibration, oil mist, heat and moisture, and
it is the combination that kills it — not voltage alone.

## What to remember

- The number of electrons in the outer shell decides whether a material is a
  conductor, a semiconductor or an insulator.
- True electron flow is negative to positive; conventional flow is the opposite
  and is what most drawings and symbols use.
- Copper is the practical conductor; nichrome is the practical heater; silver
  is the practical contact face.
- Resistance of a conductor rises with length and falls with cross-sectional
  area — R = rho L / A.
- Insulation breakdown happens to every insulator eventually, and heat, oil and
  vibration get there before voltage does.
`,
        quiz: [
          {
            q: "A material has six electrons in its outer shell. What would you expect it to be?",
            options: ["A good conductor", "A semiconductor", "An insulator", "A superconductor"],
            answer: 2,
            explain: "Conductors carry one to three outer electrons, semiconductors four or five, and insulators six to eight. With six the nucleus holds the outer electrons firmly, so applied voltage cannot dislodge them and no useful current flows.",
          },
          {
            q: "Doubling the length of a copper conductor while keeping the same cross-section will:",
            options: ["Halve its resistance", "Double its resistance", "Leave resistance unchanged", "Quadruple its resistance"],
            answer: 1,
            explain: "R = rho L / A, so resistance is directly proportional to length. Doubling length doubles resistance and doubles the volt drop at a given current. Cross-sectional area is the term that works the other way — doubling area halves the resistance.",
          },
          {
            q: "Why is aluminium used for large mains cables even though copper conducts better?",
            options: ["Aluminium has lower resistivity than copper", "Aluminium is cheaper and lighter, so the cable is sized up to compensate", "Aluminium does not oxidise", "Aluminium can carry DC only"],
            answer: 1,
            explain: "Aluminium resistivity is 2.83 x 10 to the minus 8 ohm metres against copper's 1.72, so an aluminium conductor must be larger for the same current. Cost and weight still make it attractive in big cables, which is exactly why you never assume a cable size from a copper table when the conductor is aluminium.",
          },
          {
            q: "A contactor is found with blackened, pitted tips and its supply cable is running hot. The most likely explanation is:",
            options: ["The coil voltage is too high", "Oxide build-up has raised the contact resistance", "The contacts are made of platinum", "The circuit is drawing too little current"],
            answer: 1,
            explain: "Oxide and arc damage on the contact faces adds resistance in series with the load. Current through that resistance dissipates heat right at the joint, which then accelerates the damage. The coil voltage affects whether the contactor pulls in, not the condition of the contact faces once closed.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "ohms-law-power-and-cost",
        title: "Current, voltage, resistance, Ohm's law and power",
        minutes: 14,
        simple: "Voltage is the push, current is how much is flowing, and resistance is what holds it back. It works like water in a hose: pressure pushes, litres per second flow, and a kink in the hose is resistance. Ohm's law just says that if you know two of the three, you can work out the third.",
        refs: REFS_MOTOR,
        content: `
This is the arithmetic you will use on site more than any other. Everything
from sizing a fuse to explaining a running cost to a customer sits on Ohm's law
and the power formula.

## The working vocabulary

| Term | Symbol | Unit | What it actually is |
|---|---|---|---|
| Electromotive force (EMF) | E | volt (V) | The electrical pressure a supply produces |
| Potential difference | V or E | volt (V) | The difference in pressure between two points |
| Current | I | ampere (A) | The rate of electron flow past a point |
| Resistance | R | ohm | Opposition to current flow |
| Power | P or W | watt (W) | Rate of doing electrical work |
| Energy | — | kilowatt hour (kWh) | Power multiplied by time; what you pay for |

A **circuit** is simply conductors connecting a load to a supply. A **supply**
is the source of the electrons — a battery, an alternator or the grid. An
**insulator** keeps them where you want them, and a **conductor** carries them.

The distinction between EMF and potential difference trips people up. EMF is
what the source generates with no load on it. Potential difference is what you
measure between two points in a working circuit — across a load, across a
switch, across a set of contacts. When a technician says "I have 230 V at the
contactor coil", that is a potential difference measurement.

## Ohm's law

Ohm's law says that in a circuit at constant temperature, the current is
directly proportional to the applied voltage and inversely proportional to the
resistance:

- I = E / R
- E = I x R
- R = E / I

Raise the voltage and current rises. Raise the resistance and current falls.
Those two sentences explain most electrical faults you will meet.

### Worked example 1 — find the current

A 20 V supply feeds a 10 ohm resistor.

- I = E / R
- I = 20 / 10
- I = **2 A**

Now lift the supply to 40 V with the same resistor:

- I = 40 / 10 = **4 A**

Double the pressure, double the flow. Now put the supply back to 20 V and
double the resistance to 20 ohms:

- I = 20 / 20 = **1 A**

Double the opposition, halve the flow.

### Worked example 2 — find the resistance of a coil

A contactor coil draws 0.19 A from 230 V.

- R = E / I
- R = 230 / 0.19
- R = **1210 ohms** (about 1.2 k)

That figure is worth knowing, because when you put an ohmmeter across a
suspect coil and read 3 ohms you have found a shorted winding, and when you
read open circuit you have found a burnt-out coil.

## Power

Forcing electrons through resistance makes them do work, and that work leaves
as heat, light or magnetic flux. The rate of doing it is power, in watts:

- P = E x I
- P = I squared x R
- P = E squared / R

All three come from combining Ohm's law with P = E x I, and you pick whichever
one matches the values you already have.

### Worked example 3 — power in a resistive load

A 40 V supply feeds a 20 ohm resistor.

Step 1, find the current:

- I = E / R = 40 / 20 = **2 A**

Step 2, find the power:

- P = E x I = 40 x 2 = **80 W**

Check it with the other formula: P = I squared x R = 2 x 2 x 20 = 80 W. Same
answer, which is a useful habit — if two routes disagree, you have made an
arithmetic slip.

### Worked example 4 — a defrost element

A 230 V defrost element measures 26.5 ohms cold.

- P = E squared / R
- P = (230 x 230) / 26.5
- P = 52 900 / 26.5
- P = **1996 W, about 2 kW**

And its running current:

- I = E / R = 230 / 26.5 = **8.7 A**

That tells you the element is healthy and that an 8.7 A load needs protection
and cable sized accordingly.

## Energy and running cost

Power is a rate. What the customer pays for is **energy**: power multiplied by
time. The trade unit is the kilowatt hour — 1000 watts drawn for one hour.

- Cost = kW x hours x cost per kWh

### Worked example 5 — a room air conditioner

A 1.4 kW room air conditioner runs for 3 hours. Electricity costs 30 cents per
kWh (check the customer's actual tariff — it varies by state and retailer).

- Cost = 1.4 x 3 x 0.30
- Cost = **$1.26**

### Worked example 6 — when the nameplate gives amps, not watts

Many devices give current, not power. For a purely resistive load you can
simply multiply volts by amps. For anything with a winding in it — motors,
transformers, solenoids — the current lags the voltage and you must include the
**power factor**:

- P = I x E x power factor

A fan motor draws 3.2 A at 230 V with a power factor of 0.85, running 5 hours a
day.

- P = 3.2 x 230 x 0.85
- P = **625.6 W, or 0.626 kW**
- Energy = 0.626 x 5 = **3.13 kWh per day**
- Cost = 3.13 x 0.30 = **94 cents per day**

Notice that 3.2 x 230 on its own gives 736 VA. That is apparent power, and it
is what the cable and the fuse have to carry — but it is not what the meter
bills. Power factor is taught properly later in this module.

## Volt drop: where Ohm's law bites in the field

Cable has resistance, so every amp you push down it burns some voltage before
it reaches the load. Using the 60 m loop of 2.5 mm squared copper from the
previous lesson at about 0.41 ohms, with a 10 A compressor:

- Volt drop = I x R = 10 x 0.41 = **4.1 V**

The motor sees 230 minus 4.1, about 226 V. That is acceptable. Double the run
or halve the cable and you are into the territory where a motor pulls extra
current, runs hot and trips on overload — and the fault is in the cable, not
the compressor.

>! Never work on live equipment to take these measurements unless you hold the
>! required electrical licence and are following a safe-working procedure. In
>! Australia, electrical installation work must be carried out by a licensed
>! electrical worker; a refrigeration technician needs a restricted electrical
>! licence even to disconnect and reconnect fixed-wired equipment.

## On the job

- I = E / R, and its two rearrangements, will solve most circuit questions.
- P = E x I, P = I squared R and P = E squared / R are the same relationship in
  three convenient forms.
- Bills are in kWh: kW multiplied by hours multiplied by the tariff.
- Any load with a winding needs the power factor in the wattage calculation.
- Volt drop equals current multiplied by cable resistance, and it is a real
  cause of motor faults on long runs.
`,
        quiz: [
          {
            q: "A 230 V element measures 46 ohms. What current will it draw?",
            options: ["0.2 A", "5 A", "10 580 A", "46 A"],
            answer: 1,
            explain: "I = E / R = 230 / 46 = 5 A. The tempting error is multiplying (230 x 46 = 10 580), which gives a nonsense figure. A quick sanity check helps: a 230 V load pulling 5 A is about 1.15 kW, which is a believable element.",
          },
          {
            q: "A compressor motor draws 8 A at 230 V with a power factor of 0.8. Its true power is:",
            options: ["1840 W", "1472 W", "2300 W", "230 W"],
            answer: 1,
            explain: "P = I x E x power factor = 8 x 230 x 0.8 = 1472 W. The 1840 W answer is the apparent power (8 x 230 = 1840 VA), which is what the cable and protection must carry but not what the energy meter records.",
          },
          {
            q: "A 2.4 kW heater runs for 6 hours at 32 cents per kWh. The running cost is:",
            options: ["$0.46", "$4.61", "$46.08", "$14.40"],
            answer: 1,
            explain: "Cost = kW x hours x rate = 2.4 x 6 x 0.32 = $4.61. Getting the decimal point wrong is the usual mistake here: 14.4 kWh of energy at about a third of a dollar each has to land near four or five dollars.",
          },
          {
            q: "A long cable run causes 12 V of drop at the compressor terminals. The most useful next calculation is:",
            options: ["Cable resistance from volt drop divided by current", "The power factor of the supply", "The frequency of the supply", "The insulation resistance of the motor"],
            answer: 0,
            explain: "Volt drop = I x R, so R = volt drop / current tells you whether the cable is undersized or whether a joint or terminal has developed resistance. Frequency and power factor do not create volt drop along a conductor; resistance and current do.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "series-parallel-and-kirchhoff",
        title: "Series circuits, parallel circuits and Kirchhoff's rules",
        minutes: 14,
        simple: "In a series circuit everything is in one line, so the same current goes through every part and the voltage gets shared out. In a parallel circuit each part has its own path, so every part gets the full voltage and the current splits up. Christmas lights in one long string are series; the power points around your house are parallel.",
        refs: REFS,
        content: `
Almost every control circuit you meet is a mixture of the two. Safety switches
and thermostats sit in **series** so that any one of them can stop the load;
compressors, fans and heaters sit in **parallel** so that each gets full
voltage and can run independently. Knowing which is which tells you what your
meter should read.

!FIG[ladder-rung]

## Series circuits

Components in series share one path, so:

- the current is the same everywhere in the circuit
- the total resistance is the sum of the individual resistances
- the supply voltage is shared out as volt drops, in proportion to resistance

The total resistance formula is simply:

- R total = R1 + R2 + R3 ...

### Worked example — three resistors in series

Resistors of 20, 30 and 60 ohms are connected in series across 110 V.

Step 1, total resistance:

- R total = 20 + 30 + 60 = **110 ohms**

Step 2, circuit current:

- I = E / R = 110 / 110 = **1 A**

Step 3, volt drop across each resistor. Use V = I x R with the current common
to all:

- V across R1 = 1 x 20 = **20 V**
- V across R2 = 1 x 30 = **30 V**
- V across R3 = 1 x 60 = **60 V**

The three drops add up to 110 V, which is the supply — that is the check.

Step 4, power in each resistor. The voltage used **must** be the drop across
that resistor, not the supply:

- P1 = V x I = 20 x 1 = **20 W**
- P2 = 30 x 1 = **30 W**
- P3 = 60 x 1 = **60 W**

Check: total power = E x I = 110 x 1 = 110 W, and 20 + 30 + 60 = 110 W. The
figures agree, so the working is sound.

### What this means on a ladder rung

A control string of thermostat, low-pressure switch, high-pressure switch and
overload feeding a contactor coil is a series circuit. The coil has all the
resistance, so it takes nearly all the volt drop and the closed switches drop
almost nothing. Put a voltmeter across a **closed** switch and you read about
0 V; put it across the **open** one and you read full supply voltage, because
the whole 230 V is now dropped across the break. That single fact is how you
find an open safety switch in seconds without disconnecting anything.

## Parallel circuits

Components in parallel each have their own path across the supply, so:

- the voltage is the same across every branch
- the total current is the sum of the branch currents
- the total resistance is always **less** than the smallest branch resistance

The total resistance formula uses reciprocals:

- 1 / R total = 1/R1 + 1/R2 + 1/R3 ...

### Worked example — three resistors in parallel

The same 20, 30 and 60 ohm resistors, now in parallel across 110 V.

Step 1, total resistance:

- 1/20 = 0.05
- 1/30 = 0.03333
- 1/60 = 0.01667
- Sum = 0.1
- R total = 1 / 0.1 = **10 ohms**

Ten ohms is less than the smallest branch, as expected — adding a path always
makes it easier for current to flow.

Step 2, branch currents. Each branch sees the full 110 V:

- I1 = 110 / 20 = **5.5 A**
- I2 = 110 / 30 = **3.67 A**
- I3 = 110 / 60 = **1.83 A**

Step 3, check against the total: I total = E / R total = 110 / 10 = 11 A, and
5.5 + 3.67 + 1.83 = 11 A. Correct.

Step 4, power in each branch. Here the **current** must be the branch current:

- P1 = 110 x 5.5 = **605 W**
- P2 = 110 x 3.67 = **403.7 W**
- P3 = 110 x 1.83 = **201.3 W**
- Total = 1210 W, which matches E x I total = 110 x 11 = 1210 W

For just two resistors in parallel there is a shortcut worth memorising, the
product over sum: R total = (R1 x R2) / (R1 + R2). For 20 and 30 ohms that is
600 / 50 = 12 ohms.

## Series and parallel compared

| Feature | Series | Parallel |
|---|---|---|
| Current | Same through every component | Divides between branches |
| Voltage | Divides as volt drops | Same across every branch |
| Total resistance | Sum of all resistances | Less than the smallest branch |
| One component opens | Everything stops | Only that branch stops |
| Used for | Safety switches, overloads, control strings | Loads: motors, fans, heaters, lights |

## Kirchhoff's rules

Kirchhoff generalised what the two examples above showed, and the two rules
between them will solve circuits that Ohm's law alone will not.

**Kirchhoff's current law (the junction rule):** the total current arriving at
any junction equals the total current leaving it. Charge does not pile up in a
terminal block. If 11 A comes into a junction and two branches take 5.5 A and
3.67 A, the third must be taking 1.83 A.

**Kirchhoff's voltage law (the loop rule):** around any closed loop, the sum of
the applied EMFs equals the sum of the volt drops. Nothing is left over. In the
series example, 110 V in equals 20 + 30 + 60 V of drops.

### Worked example — using the loop rule to find a bad joint

A 230 V circuit feeds a 20 ohm heater through a switch and a suspect terminal.
The heater is measured at 218 V while running, and the current is 10.9 A.

- Missing voltage = 230 minus 218 = **12 V**
- By the loop rule that 12 V must be dropped somewhere else in the loop
- R of the fault = V / I = 12 / 10.9 = **1.1 ohms**
- Power burnt in the fault = V x I = 12 x 10.9 = **131 W**

A 131 W heater buried in a terminal block is how connections char and burn out.
The loop rule turned a "seems a bit low" reading into a located fault with a
number attached.

>! Working inside a live board to take these readings is licensed electrical
>! work. If you are not licensed for it, isolate, lock off and hand the live
>! testing to someone who is.

## On the job

- Series: current common, voltages add, one break stops everything.
- Parallel: voltage common, currents add, total resistance below the smallest
  branch.
- Volt drop across a closed contact is near zero; across an open one it is the
  full supply. That is the fastest control-circuit diagnosis there is.
- Kirchhoff's current law says branch currents must add up to the supply
  current; if they do not, you have another path — often an earth fault.
- Kirchhoff's voltage law says missing volts have to be dropped somewhere, and
  that somewhere is usually a loose or corroded connection.
`,
        quiz: [
          {
            q: "Resistors of 10, 20 and 30 ohms are connected in series across 60 V. What is the circuit current?",
            options: ["1 A", "6 A", "0.55 A", "11 A"],
            answer: 0,
            explain: "Total R = 10 + 20 + 30 = 60 ohms, so I = 60 / 60 = 1 A, and that same 1 A flows through all three. The 11 A answer would come from treating them as parallel, which would give a much lower total resistance and a much larger current.",
          },
          {
            q: "Two 60 ohm heaters are connected in parallel across 230 V. The total resistance is:",
            options: ["120 ohms", "60 ohms", "30 ohms", "3.8 ohms"],
            answer: 2,
            explain: "Equal resistors in parallel give R total = R divided by the number of branches, so 60 / 2 = 30 ohms. Total resistance in parallel is always less than the smallest branch, so any answer of 60 ohms or more can be ruled out on sight.",
          },
          {
            q: "You measure 230 V across the high-pressure switch in a control string while the contactor is not pulled in. This tells you:",
            options: ["The switch is closed and healthy", "The switch contacts are open", "The coil is short circuited", "The supply is faulty"],
            answer: 1,
            explain: "In a series string the full supply appears across the break. A closed switch drops almost nothing because it has almost no resistance, so a reading of full voltage across the device identifies it as the open one. The coil being shorted would show up as excessive current and no volt drop across the coil.",
          },
          {
            q: "A supply feeds three parallel branches drawing 4 A, 6 A and 5 A, but the clamp meter on the main active reads 17 A. What does Kirchhoff's current law suggest?",
            options: ["The branch readings must be wrong by 2 A total", "There is an extra current path, such as an earth leakage", "Parallel currents do not have to add up", "The power factor is below unity"],
            answer: 1,
            explain: "Current into a junction must equal current out, so 4 + 6 + 5 = 15 A should match the main. Two extra amps means current is returning by a route you have not measured, and an earth fault is the classic cause. Power factor changes the phase relationship, not the arithmetic of currents at a junction.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "meters-and-measurement",
        title: "Meters: how they work and how to use them safely",
        minutes: 12,
        simple: "A voltmeter is like a pressure gauge, so you put it across the thing you are testing without breaking anything open. An ammeter is like a flow meter, so the current has to go through it. An ohmmeter has its own little battery inside, so the circuit it is testing must be dead or you will destroy the meter.",
        refs: REFS_SAFE,
        content: `
Ohm's law tells you what a circuit should be doing. A meter tells you what it
is actually doing. The gap between the two is the fault.

## Analogue movements

Two mechanisms cover the traditional analogue meters, and both still turn up on
plant panels.

**Moving iron.** A coil surrounds two pieces of iron, one fixed and one on a
pivoted spindle carrying the pointer. Current through the coil magnetises both
pieces with the same polarity, they repel, and the pointer swings. Because it
does not care about polarity it works on **AC or DC**, and it is rugged enough
to live on a vibrating panel. The scale is non-linear and cramped at one end,
which is poor for voltage but handy for current — it lets a panel ammeter show
a motor's starting surge without slamming the needle off the scale.

**Moving coil.** A small coil on a pivot sits in the field of a permanent
magnet. Current through the coil creates its own field, the two fields react,
and the pointer moves. Deflection is directly proportional to current, so the
scale is **linear**, which makes it the preferred movement for voltage. Because
the permanent magnet gives it a fixed polarity, it reads DC only — to use it on
AC, a small diode bridge is built in to rectify the input first.

Moving coil movements are extremely sensitive; full-scale deflection may need a
fraction of a milliamp. That sensitivity is turned into useful ranges by adding
resistors:

- a **multiplier** resistor in **series** turns the movement into a voltmeter,
  because a bigger voltage is then needed for full-scale deflection
- a **shunt** resistor in **parallel** turns it into an ammeter, because most
  of the current bypasses the movement

A rotary switch selecting different multipliers and shunts is what makes one
movement into a multi-range meter. Digital meters do the same job electronically
and now do most of the work in the trade, but the connection rules below are
identical.

## Connecting the three basic meters

| Meter | Connection | Internal resistance | Golden rule |
|---|---|---|---|
| Voltmeter | Across (in parallel with) the device | Very high | Start on the highest range and work down |
| Ammeter | In series, so the current flows through it | Very low | Never connect it in parallel |
| Ohmmeter | Across the device, circuit dead | Low, has its own battery | Never connect it to a live circuit |

**Voltmeter.** The most useful instrument you own, because it tests a working
circuit without disconnecting a single wire. Make sure you have selected AC or
DC to match the circuit. If you do not know the voltage, start high and step
down until you get a usable reading.

**Ammeter.** Because it must be in series, an in-line ammeter means breaking
the circuit. That is why the trade lives on the **clamp meter** instead: it
clips around one conductor and reads the current from the magnetic field around
it, with no disconnection and no break in the circuit. Clamp one conductor only
— clamp both active and neutral together and the fields cancel, giving you a
reading of near zero.

>! An ammeter has almost no internal resistance. Connect one across a live
>! supply and you have made a bolted short circuit through the instrument. The
>! result is an arc flash, not just a blown meter. Ammeters go in series, never
>! in parallel.

**Ohmmeter.** It works by pushing a small current from its own internal battery
through the device and measuring what comes back. Four rules make readings
trustworthy:

1. **Isolate the supply first.** An ohmmeter's low internal resistance will be
   destroyed by 230 V, and you may be too.
2. **Disconnect one end of the item under test.** Otherwise parallel paths
   through the rest of the circuit give you a false, lower reading.
3. **Zero the meter** with the leads touched together, to cancel lead
   resistance and allow for a tired battery.
4. **Use the lowest range that will read the value** — the low ranges are the
   accurate ones.

## Meters in refrigeration service

| Instrument | Typical use in RAC |
|---|---|
| Digital multimeter (volts) | Supply voltage, volt drop across contacts, control voltage present |
| Clamp meter (amps) | Running current against nameplate FLA, checking a stuck contactor |
| Ohmmeter | Motor winding resistance (start, run and common), coil continuity, element continuity |
| Insulation resistance tester | Winding-to-earth insulation, typically 500 V DC test, looking for megohms |
| Clamp-on power meter | True power, apparent power and power factor on a running unit |

Reading a hermetic compressor's three terminals with an ohmmeter is the classic
check: common to run is the smallest reading, common to start the largest, and
start to run equals the sum of the other two. Any reading to the shell should be
open circuit — a winding to earth means the compressor is finished.

An insulation resistance tester applies a high DC test voltage, usually 500 V,
because that is the only way to find insulation that holds at low voltage but
breaks down at working voltage. It must never be used on a circuit containing
electronic boards, inverter drives or capacitors without disconnecting them,
because the test voltage will destroy them.

## Choosing a safe instrument

Meters carry a **category rating** — CAT II, CAT III, CAT IV — which describes
the transient energy they can survive at the point in the installation where
they are used. Work at a switchboard needs at least a CAT III instrument rated
for the voltage present. Check the leads too: cracked insulation, exposed metal
at the probe shoulders or a missing fuse in the current input makes the whole
instrument unsafe.

>! Live testing is electrical work. In Australia only a licensed electrical
>! worker may carry out electrical installation work, and a refrigeration
>! technician needs a restricted electrical licence even to disconnect and
>! reconnect fixed-wired plant. Before touching anything, isolate, lock and tag,
>! then prove dead using the test-prove-test method: test your meter on a known
>! live source, test the isolated circuit, then re-test on the known source to
>! prove the meter still works.

## On the job

- Voltmeter in parallel, ammeter in series, ohmmeter only on a dead circuit.
- Moving coil is linear and DC only; moving iron takes AC or DC and tolerates
  vibration.
- Multipliers extend voltage range, shunts extend current range.
- Disconnect one end of anything you measure with an ohmmeter, or parallel
  paths will lie to you.
- Match the instrument's CAT rating to the job, and inspect the leads every
  time.
`,
        quiz: [
          {
            q: "Why must an ammeter never be connected in parallel with a load?",
            options: ["It will read zero", "Its very low internal resistance creates a short circuit", "It only works on DC", "Its shunt resistor will be bypassed"],
            answer: 1,
            explain: "An ammeter is deliberately built with almost no resistance so it does not disturb the circuit it measures. Placed directly across a supply, that near-zero resistance becomes a bolted fault path, with fault current limited only by the supply. It would not simply read zero — it would fail violently.",
          },
          {
            q: "A moving coil movement is preferred for voltage measurement because:",
            options: ["It works on AC without any modification", "Its deflection is proportional to current, giving a linear scale", "It has a cramped scale that allows for surges", "It needs no permanent magnet"],
            answer: 1,
            explain: "Deflection of a moving coil is directly proportional to the current through the coil, so the scale is evenly spaced and easy to read accurately. The cramped, non-linear scale belongs to the moving iron movement, which is useful for current because it accommodates motor starting surges.",
          },
          {
            q: "Before using an ohmmeter on a motor winding you should:",
            options: ["Set the highest range and leave the circuit energised", "Isolate the supply and disconnect one end of the winding", "Zero the meter on a live terminal", "Connect it in series with the winding"],
            answer: 1,
            explain: "The supply must be off because the meter's own battery is the source and mains voltage would destroy it. Disconnecting one end removes parallel paths through the rest of the circuit, which would otherwise read lower than the winding itself and hide a fault.",
          },
          {
            q: "A clamp meter placed around both the active and neutral of a single-phase load reads almost zero. Why?",
            options: ["The load is not running", "The magnetic fields of the two equal and opposite currents cancel", "The clamp is not rated for that current", "Neutral carries no current"],
            answer: 1,
            explain: "A clamp meter senses the magnetic field around a conductor. Active and neutral carry equal current in opposite directions, so their fields cancel and the reading collapses to near zero. Clamp one conductor only. In fact a small residual reading in that arrangement indicates earth leakage.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "magnetism-and-electromagnetism",
        title: "Magnetism, electromagnetism and coils",
        minutes: 12,
        simple: "A magnet has an invisible field around it that pulls on iron. Wrap a wire into a coil and pass current through it and you make the same kind of field, but you can switch it on and off. That is how a contactor pulls in, how a solenoid valve opens and how a motor turns.",
        refs: REFS,
        content: `
Nearly every moving electrical part on a refrigeration system is magnetism at
work: contactor armatures, relay tongues, solenoid valve plungers, reversing
valve pilots, motor rotors and the transformer in the control panel.

## Magnets and magnetic fields

Magnets are either natural (lodestone) or artificial. Most so-called permanent
magnets in equipment are manufactured.

The **domain theory** gives a workable explanation. In ordinary iron, tiny
groups of aligned atoms called domains point in random directions, so their
effects cancel. In a magnet the domains are lined up, so their effects add and
the material shows a north and a south pole.

Around every magnet is a **magnetic field** — the region where the magnetic
force acts. We draw it as **lines of force**, which are imaginary but behave
consistently enough to reason with:

- They form continuous loops: out of the north pole, around outside the magnet,
  into the south pole, and back through the magnet from south to north.
- They take the path of least resistance. In air that is the shortest path
  between poles, but if a magnetisable material is nearby the lines will bend
  to travel through it instead.
- They never cross one another.
- Where they are crowded together, the field is strong; where they are widely
  spaced, it is weak. Lines always crowd at the poles.

### The laws of magnetism

- Like poles repel: north repels north, south repels south.
- Unlike poles attract: north pulls south.

## Shielding

There is no known insulator for magnetism, so you cannot block a magnetic
field. What you can do is give it an easier path. Surround a sensitive item
with a ring of soft iron and the lines of force divert around the ring rather
than passing through the middle, because the iron offers less magnetic
resistance than air. That is **magnetic shielding**, and it is why sensitive
instruments sit inside steel cans.

## Magnetic induction

Bring a magnet near a piece of magnetisable material and the material's domains
line up with the field, so it becomes a magnet itself while the field is
present. Where the field enters the material an **unlike** pole is induced, and where it
leaves again a like pole appears — south at the entry face, north at the exit
face. Because unlike poles attract, the material is then pulled towards the
magnet. That is why a magnet picks up a nail that was not magnetic a moment ago,
and it is what makes a contactor armature snap up to the pole faces.

## Electromagnetism

Every conductor carrying current has a magnetic field around it. Hold a compass
near a current-carrying cable and it deflects; remove the current and it swings
back. Two rules govern that field:

- Its **strength** depends on the amount of current flowing.
- Its **direction** depends on the direction of current flow.

### The left-hand rule for a conductor

Grip the conductor with your left hand, thumb pointing the way the electrons
travel (negative to positive). Your fingers then curl in the direction of the
magnetic flux, north to south.

### The left-hand rule for a solenoid

Wind the conductor into a coil and the fields of the individual turns add
together along the coil axis, so the field strengthens in proportion to the
number of turns. Wrap your left hand around the coil with your fingers
following the direction of electron flow in the windings; your extended thumb
points to the **north** pole of the coil.

Some texts give right-hand rules instead. Those are written for conventional
current flow, positive to negative. Use one convention consistently and you
will get the right answer either way.

### Making it stronger

Slide an iron core into the coil and the lines of force concentrate through the
iron instead of scattering through air, so the coil becomes a much stronger
magnet — an **electromagnet** — for as long as current flows. Three factors set
its strength:

- the number of turns on the coil
- the current flowing in the coil
- the type and amount of core material

Kill the current and the field collapses, which is exactly the behaviour you
want from a switching device.

## Where this shows up in RAC plant

| Device | What the magnetism does |
|---|---|
| Contactor and relay | Coil becomes an electromagnet, pulls the armature and its moving contacts closed |
| Solenoid valve | Coil pulls a steel plunger up against a spring to open the port |
| Reversing valve pilot | Small solenoid shifts the pilot, and gas pressure does the rest |
| Motor stator | Rotating magnetic field drags the rotor around with it |
| Transformer | Alternating field in the core links one winding to another |
| Clamp meter | Reads the field around a conductor to infer current |

A solenoid coil that is buzzing is usually not getting enough voltage or has a
plunger that cannot seat, so the magnetic circuit never closes. A coil that has
burnt out has usually been left energised with the plunger stuck, or has been
fed the wrong voltage.

>! Solenoid and contactor coils run hot in normal service and stay live even
>! when the plant looks idle. Isolate and prove dead before you touch a coil,
>! and check the coil voltage marked on the label before fitting a replacement
>! — a 24 V coil on 230 V will burn out in seconds.

## Self-induction and back EMF

There is a sting in the tail with any coil. When current in a coil changes, the
coil's own moving magnetic field cuts its own turns and generates a voltage
that **opposes** the change. That is **self-induction**, and the opposing
voltage is called **back EMF**.

Two practical consequences follow:

- On switch-on, the back EMF resists the build-up of current, so current in a
  coil rises gradually rather than instantly. That lag is what makes motor
  current lag voltage, which is the origin of power factor.
- On switch-off, the field collapses fast and can generate a voltage spike many
  times the supply voltage. That spike is what draws an arc across opening
  contacts, pits relay contacts and destroys the output transistors of a
  controller.

That is why DC coils driven from a control board get a diode fitted across them
to give the collapsing field somewhere harmless to dump its energy, and why AC
contactor coils switched by electronics often have a snubber across them.

## What to remember

- Lines of force run north to south outside the magnet, take the easiest path,
  and never cross.
- Like poles repel; unlike poles attract; there is no magnetic insulator, only
  diversion by shielding.
- Coil strength depends on turns, current and core.
- Left-hand rules are for electron flow, right-hand rules for conventional
  flow.
- A collapsing coil field produces a back-EMF spike that damages contacts and
  electronics if it is not suppressed.
`,
        quiz: [
          {
            q: "Three factors set the strength of an electromagnet. Which list is correct?",
            options: ["Voltage, frequency and wire colour", "Number of turns, current in the coil and the core material", "Length of the leads, temperature and polarity", "Resistance, capacitance and phase angle"],
            answer: 1,
            explain: "Adding turns adds the field of each turn, more current makes each turn's field stronger, and an iron core concentrates the flux instead of letting it scatter through air. Voltage matters only through the current it drives, and polarity sets the direction of the field, not its strength.",
          },
          {
            q: "A steel instrument case is used to shield a sensitive device from a nearby magnetic field. This works because:",
            options: ["Steel is a magnetic insulator", "The lines of force prefer the low-resistance steel path and divert around the device", "Steel cancels magnetism by reversing polarity", "Steel absorbs and destroys the lines of force"],
            answer: 1,
            explain: "No material insulates against magnetism. Shielding works by offering a much easier magnetic path, so the lines of force travel through the steel ring rather than through the space inside it. The field still exists; it just goes around.",
          },
          {
            q: "Contacts that switch a solenoid coil pit and burn much faster than contacts switching a heater of the same current. Why?",
            options: ["Coils draw more current than heaters", "The collapsing magnetic field generates a back-EMF spike as the contacts open", "The coil has a lower resistance", "Heaters are always on a separate circuit"],
            answer: 1,
            explain: "When current in a coil is interrupted, the field collapses rapidly and induces a voltage many times the supply, which strikes an arc across the opening gap. A resistive heater has no stored magnetic energy, so it breaks cleanly. Suppression across the coil is the usual cure.",
          },
          {
            q: "Using the left-hand rule for a solenoid, your extended thumb points to:",
            options: ["The south pole of the coil", "The north pole of the coil", "The direction of electron flow", "The direction of the applied voltage"],
            answer: 1,
            explain: "With the fingers wrapped in the direction of electron flow through the windings, the thumb indicates the north pole. Remember it is the left hand only for true electron flow, negative to positive; texts using conventional flow give the same answer with the right hand.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "induction-generators-transformers",
        title: "Electromagnetic induction, generators and transformers",
        minutes: 13,
        simple: "If you move a wire through a magnetic field, a voltage appears in the wire. That is how every power station on the grid makes electricity, and it also works the other way around: a coil fed with alternating current makes a moving field that can create a voltage in a second coil beside it. That second trick is a transformer.",
        refs: REFS,
        content: `
One discovery underpins the entire electricity supply: move a conductor through
a magnetic field and a voltage appears in it. Understand that sentence and
generators, alternators, transformers and induction motors all follow.

## Electromagnetic induction

When lines of force cut across a conductor, a potential is generated in that
conductor. Connect it to a load and current flows for as long as the cutting
continues. The amount of voltage generated depends on three things:

- how **strong** the magnetic field is
- how **fast** the lines of force sweep across the conductor
- the **length** of conductor being cut (which is why conductors are wound into
  coils — more turns means more effective length)

There are three ways to arrange the cutting:

1. Move a conductor through a stationary field.
2. Move a field past a stationary conductor.
3. Keep both still and make the field itself change — feed a coil with
   alternating or pulsing current so its field grows and collapses, and let
   that changing field cut a second conductor.

Methods 1 and 2 are how generators and alternators work. Method 3 is the
principle of the transformer, the induction motor and the ignition coil.

## Alternators and generators

Both machines use the same physics; the difference is what happens to the
output at the terminals.

**Rotating armature.** The conductors spin inside a stationary magnetic field
and the output is taken off through slip rings and brushes. Simple, but all the
output current has to pass through the sliding contacts, so it suits smaller
portable machines.

**Rotating field.** The magnet spins and the output conductors sit still in the
stator around it. Only the small DC excitation current for the field has to
cross the slip rings, so this arrangement handles large outputs and is what
power station and large standby alternators use.

An **alternator** delivers AC directly. A **generator** produces AC internally
too, but a **commutator** — a split ring that reverses the connection every half
turn — flips the output so that current always leaves in the same direction,
giving DC. A single coil gives a lumpy, pulsing DC; adding more coils spaced
around the armature and overlapping their pulses smooths the output to a nearly
steady DC with a small ripple.

What sets the output:

| Output quantity | Governed by |
|---|---|
| Volts | Number of turns, field strength, speed of cutting |
| Amps | Number and size of parallel conductors |
| Frequency | Rotational speed and number of poles |

### Worked example — frequency, poles and speed

Frequency in hertz is f = (poles x rev/min) / 120.

A two-pole alternator turning at 3000 rev/min:

- f = (2 x 3000) / 120
- f = 6000 / 120
- f = **50 Hz**

Rearranged, the synchronous speed of a machine is N = (120 x f) / poles. On the
Australian 50 Hz supply:

- 2 poles: (120 x 50) / 2 = **3000 rev/min**
- 4 poles: (120 x 50) / 4 = **1500 rev/min**
- 6 poles: (120 x 50) / 6 = **1000 rev/min**

That is why a 4-pole fan motor nameplate reads about 1400 rev/min — the few per
cent below 1500 is the slip an induction motor needs to develop torque.

## The induction coil

Feed a coil with pulsing DC through a set of interrupter contacts and wind a
second coil over it. Closing the switch makes the field grow, and the growing
field cuts the second winding, producing an output. Once the current settles,
the field stops moving and the output stops — a still field induces nothing.
Open the switch and the field collapses, cutting the second winding again, this
time in the other direction, so the output reverses. That collapse is fast, so
the output voltage is high, which is exactly how a petrol engine ignition coil
makes tens of thousands of volts from 12 V.

## Transformers

A transformer is method 3 done continuously with AC. Two windings share a
laminated iron core. Alternating current in the **primary** creates a
continuously changing flux in the core, the core carries that flux to the
**secondary**, and a voltage is induced there. There are no moving parts and no
electrical connection between the two windings — energy crosses as magnetism.

The voltage ratio equals the turns ratio:

- Vp / Vs = Np / Ns

Because a transformer cannot create energy, and is close to loss-free, the
current ratio is the inverse:

- Ip / Is = Ns / Np

### Worked example — a control transformer

A panel uses a 230 V to 24 V control transformer rated 40 VA. The primary has
1150 turns.

Secondary turns:

- Ns = Np x (Vs / Vp)
- Ns = 1150 x (24 / 230)
- Ns = 1150 x 0.1043
- Ns = **120 turns**

Maximum secondary current at the VA rating:

- Is = VA / Vs = 40 / 24 = **1.67 A**

Corresponding primary current:

- Ip = VA / Vp = 40 / 230 = **0.174 A**

The voltage steps down by a factor of about 9.6 and the current steps up by the
same factor. That is the trade every transformer makes.

If the secondary is loaded to 2.5 A, the transformer is being asked for
24 x 2.5 = 60 VA from a 40 VA unit — it will overheat and either trip its
internal thermal cutout or burn out. Adding solenoid valves to an existing
control circuit without checking the transformer VA is a common way to create
an intermittent fault that only appears when everything energises at once.

Transformers are everywhere in this trade: distribution transformers dropping
11 kV to 400/230 V in the street, control transformers giving 24 V for
thermostats and valves, ignition transformers on gas trains, and **current
transformers** which are simply a core clamped around a conductor so the
current in that conductor induces a proportional small current in a winding —
the working principle of your clamp meter.

>! A transformer secondary being low voltage does not make the primary safe. The
>! primary side and the incoming supply remain at full mains voltage, and a
>! transformer with a burnt secondary can still have a live primary. Isolate at
>! the source, not at the transformer.

## What to remember

- Voltage is induced whenever lines of force cut a conductor; more field, more
  speed and more turns all raise the output.
- Rotating field machines suit large outputs; rotating armature machines suit
  small ones.
- A commutator is what turns generated AC into DC at the terminals.
- Frequency depends on poles and speed: f = poles x rev/min / 120.
- Transformer voltages follow the turns ratio; currents follow the inverse.
- Size a control transformer by VA, adding up every coil it has to hold in.
`,
        quiz: [
          {
            q: "A coil is held stationary in a strong but steady magnetic field. What voltage is induced in it?",
            options: ["A large voltage, because the field is strong", "None, because nothing is changing", "A small DC voltage proportional to field strength", "A voltage that depends on the coil resistance"],
            answer: 1,
            explain: "Induction requires lines of force to cut the conductor, which means relative movement or a changing field. A strong but static field induces nothing, which is exactly why a transformer will not work on DC once the current has settled.",
          },
          {
            q: "A four-pole motor is supplied at 50 Hz. Its synchronous speed is:",
            options: ["3000 rev/min", "1500 rev/min", "1000 rev/min", "750 rev/min"],
            answer: 1,
            explain: "N = 120 f / poles = (120 x 50) / 4 = 1500 rev/min. The actual nameplate speed will read a little below this, around 1400 rev/min, because an induction motor must slip behind the rotating field to produce torque.",
          },
          {
            q: "A 230 V to 24 V transformer is rated 50 VA. The maximum secondary current it can supply is about:",
            options: ["0.22 A", "2.08 A", "50 A", "1200 A"],
            answer: 1,
            explain: "I = VA / V = 50 / 24 = 2.08 A. The 0.22 A figure is the primary current (50 / 230), a useful cross-check but not the load the 24 V solenoids see. Exceeding the VA rating overheats the winding even though the voltage still measures correctly on a light test load.",
          },
          {
            q: "Why does a large alternator use the rotating field arrangement rather than a rotating armature?",
            options: ["It produces DC directly", "Only the small DC excitation current has to pass through the slip rings", "It runs at a lower speed", "It does not need a magnetic field"],
            answer: 1,
            explain: "With a rotating field, the heavy output current is taken from fixed stator windings and only the modest field current crosses the sliding contacts. A rotating armature would force the full output through the slip rings and brushes, which limits it to small machines.",
          },
        ],
      },
      /* --------------------------------------------------------------- */
      {
        id: "ac-fundamentals-sine-rms",
        title: "DC, AC, sine waves, frequency and RMS values",
        minutes: 12,
        simple: "Direct current always flows the same way, like water from a tank. Alternating current keeps swapping direction, fifty times a second in Australia, like a tide running in and out. Because the AC voltage is changing all the time, we quote an average-effect value called RMS, and that is the 230 V figure everyone talks about.",
        refs: REFS_WIRING,
        content: `
Everything on the grid side of a refrigeration system is AC. Everything inside
a controller, an inverter drive or a battery is DC. You need to be fluent in
both and, more importantly, know which value of an AC waveform a given number
refers to.

## Direct current

Direct current flows in one direction only. Its size may vary — the output of a
simple generator pulses — but it never reverses. Batteries, solar cells,
thermocouples and rectified supplies all give DC. Control boards, PLC inputs,
electronic expansion valve drivers and inverter DC links all run on it.

## Alternating current

Alternating current reverses direction repeatedly. In an alternator, each
conductor passes a north pole, then a south pole, so the induced voltage rises
to a peak in one direction, falls back through zero, rises to a peak the other
way and returns. Plotted against time, that traces a **sine wave**.

One complete pattern — positive half plus negative half — is a **cycle**. The
number of cycles per second is the **frequency**, in hertz (Hz). Australia
standardised on **50 Hz**, so the supply completes 50 full cycles every second
and reverses direction 100 times a second.

### Period

The time for one cycle is the period, T:

- T = 1 / f
- T = 1 / 50
- T = **0.02 s, or 20 milliseconds**

Each half cycle therefore lasts 10 ms. That number matters: it is why a
contactor cannot be expected to interrupt current instantly, why a filament
lamp appears steady rather than flickering, and why a scope trace of mains
shows one full sine every 20 ms.

## Values of a sine wave

Because an AC voltage is different at every instant, several different values
are quoted for the same waveform and they are not interchangeable.

| Value | Meaning | Relationship |
|---|---|---|
| Instantaneous | The value at one particular moment | Anything from zero to peak |
| Peak (maximum) | The highest value reached in a half cycle | Peak = 1.414 x RMS |
| Peak to peak | Positive peak to negative peak | Twice the peak |
| RMS (effective) | The DC value that would do the same heating work | RMS = 0.707 x peak |
| Average | Mean of one half cycle | Average = 0.637 x peak |

**RMS** stands for root mean square, and it is the one that matters in practice.
It answers the question: what steady DC value would produce the same heating in
a resistor as this alternating waveform? For a sine wave the answer is 0.707 of
the peak. Every meter reading, every nameplate and every quoted supply voltage
in this trade is an RMS value unless it says otherwise.

### Worked example — peak value of the Australian supply

The nominal single-phase supply is 230 V RMS.

- Peak = 1.414 x RMS
- Peak = 1.414 x 230
- Peak = **325 V**

And peak to peak:

- 2 x 325 = **650 V**

So insulation, capacitors and semiconductors on a 230 V circuit have to
withstand 325 V, not 230 V. That is why a capacitor for mains use is marked
400 V or more, and why a component rated 250 V will not survive on the mains.

### Worked example — back the other way

An oscilloscope shows a waveform with a peak of 340 V.

- RMS = 0.707 x peak
- RMS = 0.707 x 340
- RMS = **240 V**

which tells you the site is sitting at the old nominal 240 V rather than at
230 V. Both are legal: AS 60038 gives 230 V nominal with a tolerance of plus
10 per cent and minus 6 per cent, that is 216 V to 253 V, and much of the
Australian network still delivers close to 240 V.

### Average value and form factor

The average of a half cycle is 0.637 of peak. It is not what your meter shows,
but it matters for rectified supplies: a full-wave rectified 230 V AC feeding a
DC load without smoothing gives roughly 0.637 x 325 = **207 V DC average**. The
ratio of RMS to average, 1.11, is called the form factor, and it is what an
averaging meter uses internally to display an RMS number.

>! A cheap averaging multimeter assumes a clean sine wave. On a circuit fed
>! from an inverter drive or a phase-controlled speed controller the waveform is
>! not sinusoidal and that meter will read wrong, sometimes badly. Use a true
>! RMS instrument on any circuit involving electronic speed control.

## Why the world uses AC

- Transformers work only on changing flux, so AC voltage can be stepped up for
  transmission and down again for use. Sending power at 132 kV instead of 230 V
  cuts the current for the same power by a factor of over 500, and losses fall
  with the square of current.
- AC can be rectified to DC easily; DC cannot be transformed easily.
- Induction motors, which have no brushes and almost nothing to wear out, need
  the rotating field that polyphase AC creates naturally.

## Phase

Two AC quantities of the same frequency are **in phase** if they reach their
peaks at the same instant, and **out of phase** if one lags or leads the other.
Phase difference is measured in degrees of the cycle, where one full cycle is
360 degrees. A quarter cycle is 90 degrees, which at 50 Hz is 5 ms.

In a purely resistive circuit — an element, an incandescent lamp — current and
voltage are exactly in phase. Put a winding or a capacitor in the circuit and
they no longer are, and that is where power factor comes from. That is the
subject of the next lesson.

Three-phase supply is nothing more than three sine waves of the same frequency,
each one 120 degrees behind the last, produced by three sets of stator windings
spaced 120 degrees apart.

## What to remember

- DC flows one way; AC reverses, 50 times a second in Australia.
- Period at 50 Hz is 20 ms; a half cycle is 10 ms.
- RMS is the working value: RMS = 0.707 x peak, peak = 1.414 x RMS.
- 230 V RMS has a 325 V peak, so component voltage ratings must clear the peak.
- Nominal supply is 230 V single-phase, plus 10 per cent, minus 6 per cent.
- Use a true RMS meter wherever electronics are shaping the waveform.
`,
        quiz: [
          {
            q: "The peak value of a 230 V RMS sine wave supply is closest to:",
            options: ["163 V", "230 V", "325 V", "460 V"],
            answer: 2,
            explain: "Peak = 1.414 x RMS = 1.414 x 230 = 325 V. The 163 V answer applies the 0.707 factor in the wrong direction. Getting this right matters when selecting capacitors and semiconductors, which must withstand the peak, not the RMS value.",
          },
          {
            q: "At 50 Hz, one complete cycle takes:",
            options: ["50 ms", "20 ms", "10 ms", "2 ms"],
            answer: 1,
            explain: "T = 1 / f = 1 / 50 = 0.02 s, that is 20 ms. Ten milliseconds is the half cycle, which is the interval between successive current zeros and is why AC arcs across opening contacts get a chance to self-extinguish.",
          },
          {
            q: "Why is RMS the value quoted on nameplates and by meters?",
            options: ["It is the largest value the waveform reaches", "It is the DC value that would produce the same heating effect", "It is the average of one half cycle", "It is easier to measure than peak"],
            answer: 1,
            explain: "Root mean square is defined by equivalent heating: 230 V RMS heats a resistor exactly as 230 V DC would. The largest value reached is the peak (325 V for a 230 V supply), and the half-cycle average is a different figure again, 0.637 of peak.",
          },
          {
            q: "A technician measures the output of a variable speed drive with a basic averaging multimeter and gets a suspicious reading. The best explanation is:",
            options: ["The drive output is DC", "The waveform is not sinusoidal, so an averaging meter's built-in form factor does not apply", "The meter is on the wrong range", "The frequency is too low to measure"],
            answer: 1,
            explain: "An averaging meter measures the average and multiplies by the form factor 1.11, which is only correct for a clean sine wave. A drive output is a chopped waveform, so the assumed relationship fails and the display is wrong. A true RMS instrument measures the heating value directly and is unaffected.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "reactance-impedance-power-factor",
        title: "Inductance, capacitance, impedance and power factor",
        minutes: 15,
        simple: "A coil fights any change in current, and a capacitor fights any change in voltage, so on AC both of them hold current back without turning it into heat. That extra opposition is called reactance. It also pushes the current out of step with the voltage, and how far out of step it is is what we call power factor.",
        refs: REFS_MOTOR,
        content: `
Resistance is not the only thing limiting current on AC. Motors, transformers
and solenoids contain coils, and almost every single-phase motor in this trade
has a capacitor bolted to it. Both change the current and both shift its timing
relative to the voltage.

## Inductance and inductive reactance

Inductance is a coil's tendency to oppose a change in current, through the back
EMF it induces in itself. Its symbol is L and the unit is the **henry (H)** —
in practice millihenries for small coils, whole henries for big chokes.

On AC the current is changing continuously, so a coil is continuously
generating back EMF against the supply. The result is an opposition measured in
ohms, called **inductive reactance**, symbol XL:

- XL = 2 x pi x f x L

Three things raise it:

- more turns on the coil (higher L)
- higher frequency (more changes per second)
- more iron in the core (higher L again)

Remove the iron and the reactance falls, which is exactly what happens to a
solenoid coil when its plunger is missing or jammed out of the coil: reactance
drops, current climbs, and the coil cooks. That is one of the standard
solenoid failure modes.

Note that reactance is measured in ohms but **cannot be read with an
ohmmeter** — an ohmmeter uses DC and sees only the winding's resistance. A
contactor coil may measure 90 ohms of DC resistance yet present well over 1000
ohms of impedance on AC. Never judge a coil from resistance alone.

### Worked example — reactance of a choke

A choke has an inductance of 0.1 H and is fed at 50 Hz.

- XL = 2 x 3.1416 x 50 x 0.1
- XL = 314.16 x 0.1
- XL = **31.4 ohms**

On a 230 V supply, ignoring the small winding resistance:

- I = V / XL = 230 / 31.4 = **7.3 A**

Put the same choke on 60 Hz and XL becomes 37.7 ohms, so the current falls to
6.1 A. Frequency matters, which is why plant designed for 60 Hz behaves
differently on our 50 Hz supply.

## Capacitance and capacitive reactance

A capacitor is two conductive plates separated by an insulator, the dielectric.
It stores a charge, and its capacitance C is measured in **farads (F)** — a
huge unit, so real components are marked in microfarads (uF, one millionth) or
picofarads.

- C = Q / V, where Q is charge in coulombs

A capacitor blocks DC completely once charged, but on AC it is charged one way,
discharged, then charged the other way, so current flows in the circuit
continuously. Its opposition is **capacitive reactance**, XC:

- XC = 1 / (2 x pi x f x C)

Note the inversion: bigger capacitance means **less** reactance, and higher
frequency also means less reactance. Capacitors and inductors behave in
opposite ways in every respect, including their effect on phase.

### Worked example — a run capacitor

A permanent split capacitor motor has a 40 uF run capacitor on 50 Hz. Remember
40 uF = 40 x 10 to the minus 6 farads.

- XC = 1 / (2 x 3.1416 x 50 x 0.000040)
- XC = 1 / (314.16 x 0.000040)
- XC = 1 / 0.012566
- XC = **79.6 ohms**

Current through it at 230 V:

- I = V / XC = 230 / 79.6 = **2.9 A**

Capacitors in **parallel add** their capacitance (two 20 uF in parallel give
40 uF), which is how technicians make up an unusual value from stock. In
**series** they combine like parallel resistors, using reciprocals.

| Capacitor type in RAC | Typical value | Duty |
|---|---|---|
| Run capacitor | 3 to 60 uF, oil filled, metal can | In circuit continuously; improves torque and power factor |
| Start capacitor | 80 to 400 uF, electrolytic, plastic case | In circuit for a second or two only, dropped out by a relay |
| Power factor correction | Sized per kVAr required | Across the supply at the board |

Fit a start capacitor where a run capacitor belongs and it will fail within
minutes — electrolytics are not built for continuous duty.

>! Capacitors hold a dangerous charge after the supply is removed. A 200 uF
>! start capacitor charged to 325 V peak stores about 10 joules, which is
>! easily enough to hurt you. Always discharge a capacitor through a suitable
>! resistor before handling it, and check with a meter that it is at zero.

## Impedance

Most real loads have resistance and reactance together — a motor winding has
copper resistance plus inductance. The combined opposition is **impedance**,
symbol Z, also in ohms. Because the resistive and reactive voltages peak at
different instants, they cannot simply be added; they combine at right angles:

- Z = square root of (R squared + X squared)

### Worked example — impedance and current of a motor winding

A single-phase motor winding has R = 6 ohms and XL = 8 ohms, on 230 V.

- Z = square root of (6 squared + 8 squared)
- Z = square root of (36 + 64)
- Z = square root of 100
- Z = **10 ohms**

Current:

- I = V / Z = 230 / 10 = **23 A**

Notice that if you had used the 6 ohms measured with your ohmmeter you would
have predicted 38 A. Reactance is what keeps the real current down.

## Phase angle and power factor

In that winding, the current lags the voltage by an angle set by the ratio of
reactance to resistance. **Power factor** is the cosine of that angle, and it
is also the ratio of resistance to impedance and of true power to apparent
power:

- power factor = cos of the phase angle = R / Z = P / S

For the example above:

- power factor = R / Z = 6 / 10 = **0.6 lagging**
- phase angle = **53 degrees**

A purely resistive load — an element, a heater — has a power factor of 1.0 and
current in phase with voltage. Inductive loads such as motors and transformers
give **lagging** power factor. Capacitors give **leading** power factor, which
is why they are used to correct it.

## Real, apparent and reactive power

| Quantity | Symbol | Unit | What it is |
|---|---|---|---|
| True (real) power | P | watt, kW | Power actually converted to work and heat; what the energy meter bills |
| Apparent power | S | volt-amp, kVA | Volts x amps; what the cable, switchgear and transformer must carry |
| Reactive power | Q | volt-amp reactive, kVAr | Power that surges in and out of magnetic and electric fields, doing no net work |

They form a right-angled triangle: S squared = P squared + Q squared.

### Worked example — the power triangle for a fan motor

A motor draws 8.5 A at 230 V with a power factor of 0.82.

- S = V x I = 230 x 8.5 = **1955 VA, or 1.96 kVA**
- P = S x power factor = 1955 x 0.82 = **1603 W, or 1.6 kW**
- Q = square root of (1955 squared minus 1603 squared)
- Q = square root of (3 822 025 minus 2 569 609)
- Q = square root of 1 252 416
- Q = **1119 VAr**

The customer is billed for 1.6 kW, but the cable, contactor and supply
transformer all have to handle 8.5 A, the current that 1.96 kVA demands.

### Correcting the power factor

Adding capacitance supplies the reactive power locally so the supply does not
have to. To lift that motor from 0.82 to 0.95:

- Required Q at 0.95 = P x tan(18.2 degrees) = 1603 x 0.329 = 527 VAr
- Capacitor must supply 1119 minus 527 = **592 VAr**
- C = Q / (2 x pi x f x V squared) = 592 / (314.16 x 52 900)
- C = 592 / 16 619 000
- C = 0.0000356 F = **36 uF**

The motor still does the same work, but the current falls from 8.5 A to about
7.3 A.

## Why low power factor costs money

For the same true power, a lower power factor means more current, and more
current means:

- larger cross-sectional area conductors
- larger supply transformers
- higher rated switchgear and higher rated fuses
- greater volt drop along the run
- lower alternator efficiency, more fuel, higher generating cost
- on commercial tariffs, a demand charge based on kVA, not kW

That last point is why building owners pay for power factor correction
equipment at the main switchboard.

## On the job

- XL = 2 pi f L rises with turns, iron and frequency; XC = 1 / (2 pi f C) does
  the opposite.
- Reactance is in ohms but an ohmmeter cannot see it — it uses DC.
- Z = square root of (R squared + X squared); current is V / Z, not V / R.
- Power factor = cos of the phase angle = R / Z = kW / kVA.
- Motors lag, capacitors lead, resistive loads are unity.
- kW is what is billed on a domestic tariff, kVA is what the cable carries and
  what a commercial demand charge is based on.
`,
        quiz: [
          {
            q: "A contactor coil measures 90 ohms with an ohmmeter, yet draws only 0.2 A from 230 V. Why is that not a contradiction?",
            options: ["The ohmmeter is faulty", "On AC the coil's inductive reactance adds to its resistance, giving a much higher impedance", "The coil has a hidden series resistor", "Ohm's law does not apply to coils"],
            answer: 1,
            explain: "An ohmmeter uses DC and reads only winding resistance. On AC the coil also presents inductive reactance, and the combined impedance is over 1000 ohms, which limits the current to about 0.2 A. This is why a coil cannot be judged healthy or faulty on its DC resistance alone.",
          },
          {
            q: "A circuit has R = 8 ohms and XL = 6 ohms. Its impedance is:",
            options: ["14 ohms", "10 ohms", "2 ohms", "48 ohms"],
            answer: 1,
            explain: "Z = square root of (8 squared + 6 squared) = square root of 100 = 10 ohms. Simply adding to get 14 ohms is the common error: resistive and reactive voltages peak a quarter cycle apart, so they combine as the sides of a right-angled triangle, not arithmetically.",
          },
          {
            q: "A 10 A load at 230 V has a power factor of 0.7. Its true power and apparent power are:",
            options: ["2300 W and 1610 VA", "1610 W and 2300 VA", "1610 W and 1610 VA", "2300 W and 2300 VA"],
            answer: 1,
            explain: "Apparent power S = V x I = 2300 VA, and true power P = S x power factor = 1610 W. The cable and protective device must be sized for the 10 A that the 2300 VA demands, even though only 1610 W is being converted to useful work.",
          },
          {
            q: "Doubling the supply frequency to a capacitor will:",
            options: ["Double its capacitive reactance", "Halve its capacitive reactance", "Leave reactance unchanged", "Turn the capacitor into an inductor"],
            answer: 1,
            explain: "XC = 1 / (2 pi f C), so reactance is inversely proportional to frequency: double the frequency and reactance halves, so more current flows. An inductor does the opposite, which is why the two are used to oppose each other in filters and in power factor correction.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "single-and-three-phase-supply",
        title: "Australian supply: single phase, three phase, star and delta",
        minutes: 14,
        simple: "The power station makes three separate voltages at once, each one a third of a cycle behind the last. Your house is connected to just one of them plus a neutral, which gives about 230 V. Bigger plant is connected to all three, which gives about 400 V between any two of them and much smoother, stronger motors.",
        refs: REFS_WIRING,
        content: `
The size of the plant decides the supply. Domestic and light commercial split
systems run single phase; packaged units, chillers and anything over a few
kilowatts run three phase. Knowing how the two are related keeps you out of
trouble on a switchboard.

## How three phase is produced

A three-phase alternator has three sets of stator windings spaced 120 degrees
apart around the stator. As the field rotates it cuts each winding in turn, so
each winding produces a sine wave of the same size and frequency, but each one
peaks 120 degrees of rotation after the last. That is all "three phase" means:
three sine waves, evenly staggered.

## Star (Y) connection

Join one end of each of the three windings together and that common point
becomes the **star point** or **neutral**. The three free ends are the phases,
traditionally identified as A, B and C (older Australian plant marks them red,
white and blue).

Two voltages then become available:

- **Phase voltage** — between any one phase and the neutral
- **Line voltage** — between any two phases

They are not simply double, because the two windings do not peak at the same
instant. The relationship is the square root of 3, that is **1.732**:

- Line voltage = 1.732 x phase voltage

### Worked example — Australian voltages

- 230 x 1.732 = **398 V**, quoted as the nominal 400 V
- 240 x 1.732 = **415.7 V**, the older 415 V figure still marked on plant

AS 60038 gives Australia a nominal 230 V single-phase and 400 V three-phase
supply at 50 Hz, with a tolerance of plus 10 per cent and minus 6 per cent.
Plenty of installations still measure close to 240 and 415 V and this is
entirely normal — 240/415 and 230/400 describe the same supply.

In a star connection, line current equals phase current, because there is only
one winding in each line.

## Delta connection

Connect the end of each winding to the start of the next so the three form a
closed triangle, and take the three lines from the corners. There is no
neutral. Now:

- Line voltage = phase voltage
- Line current = 1.732 x phase current

| Quantity | Star | Delta |
|---|---|---|
| Line voltage | 1.732 x phase voltage | Equals phase voltage |
| Line current | Equals phase current | 1.732 x phase current |
| Neutral available | Yes | No |
| Typical use | Distribution supply, motor start winding in star-delta starting | Motor run connection, three-phase heaters, transformer primaries |

### Worked example — the same heater bank in star and in delta

Three 40 ohm elements on a 400 V three-phase supply.

Connected in **delta**, each element sees the full line voltage:

- Phase current = 400 / 40 = 10 A
- Line current = 1.732 x 10 = 17.3 A
- Total power = 1.732 x 400 x 17.3 = **12 000 W, or 12 kW**

Connected in **star**, each element sees only the phase voltage:

- Phase voltage = 400 / 1.732 = 231 V
- Phase current = 231 / 40 = 5.8 A, and line current is the same 5.8 A
- Total power = 1.732 x 400 x 5.8 = **4000 W, or 4 kW**

Star gives exactly one third of the delta power from the same elements. That
one-third relationship is the whole basis of star-delta starting: start the
motor in star for reduced current and torque, then switch to delta to run.

## Three-phase power

- P = 1.732 x line voltage x line current x power factor

### Worked example — a three-phase compressor

A compressor draws 12 A per line at 400 V with a power factor of 0.85.

- P = 1.732 x 400 x 12 x 0.85
- P = 692.8 x 12 x 0.85
- P = 8313.6 x 0.85
- P = **7067 W, about 7.1 kW**

Its apparent power is 1.732 x 400 x 12 = 8314 VA, or 8.3 kVA, which is the
figure the supply authority and the switchgear care about.

## Why three phase is worth having

- For the same power, a higher voltage means less current, so smaller
  conductors and smaller protective devices.
- Three-phase motors are self-starting with no capacitors, centrifugal switches
  or start relays to fail.
- Power delivery is continuous rather than pulsing, so the machine runs smoother
  with less vibration and less noise.
- Balanced three-phase loads draw no neutral current at all.

## Neutral and earth

The star point of the supply transformer is connected to earth. That anchors
the neutral at close to earth potential so it can never float up to a dangerous
voltage. In the Australian **MEN** system (multiple earthed neutral), the
neutral and the earthing conductor are also linked at the main switchboard,
which gives fault current a low-resistance path back to the source so that the
protective device operates quickly.

>! The neutral is never switched, and a neutral is never safe to assume dead.
>! If the neutral is broken or disconnected upstream while the circuit is live,
>! the neutral conductor can sit at full phase voltage. Treat every neutral as
>! live until you have proved otherwise.

## Cable identification in Australia

Colours have changed, and both systems are in service, so you will meet both.

| Conductor | Older Australian colours | Current harmonised colours |
|---|---|---|
| Single-phase active | Red | Brown |
| Neutral | Black | Light blue |
| Earth | Green, or green and yellow | Green and yellow |
| Three-phase actives | Red, white, blue | Brown, black, grey |

>! Colour is an aid, never a proof. Older installations, imported equipment,
>! extensions and past repairs all break the pattern, and a black conductor may
>! be an active in one system and a neutral in another. Always isolate, lock,
>! tag and prove dead with a tester that you have proved on a known live source
>! before and after the test.

## Phase rotation

The order in which the three phases reach their peaks is the phase rotation or
sequence. Swap any two phases at the terminals and the rotation reverses, and
so does the direction of every three-phase motor on that supply. On a
compressor, particularly a scroll or a screw, reverse rotation is destructive —
a scroll running backwards will not pump, will get noisy immediately and can be
ruined in minutes. That is why phase rotation is checked at commissioning with
a rotation meter or a phase failure relay, and why the correction is to swap two
phases, not three.

Phase failure and phase imbalance relays are fitted for the same reason: a
three-phase motor running on two phases, called single phasing, draws heavily
on the remaining phases and burns out.

>! In Australia only a licensed electrical worker may carry out electrical
>! installation work, including connecting or disconnecting fixed wiring,
>! altering a switchboard or replacing protective devices. A refrigeration
>! technician requires a restricted electrical licence to disconnect and
>! reconnect fixed-wired plant, and an ARCtick refrigerant handling licence for
>! the refrigerant side. Working outside your licence is illegal, uninsured, and
>! at three-phase fault levels an arc flash is life-changing.

## What to remember

- Three phase is three sine waves 120 degrees apart.
- Star: line voltage = 1.732 x phase voltage, currents equal. Delta: voltages
  equal, line current = 1.732 x phase current.
- Australian nominal supply: 230 V single-phase, 400 V three-phase, 50 Hz.
- Three-phase power = 1.732 x V line x I line x power factor.
- MEN earths the neutral; a broken neutral can be at full phase voltage.
- Prove dead, never trust a colour, and check rotation before you start a
  compressor.
`,
        quiz: [
          {
            q: "A star-connected supply has 230 V between each phase and neutral. The voltage between any two phases is:",
            options: ["460 V", "400 V", "230 V", "133 V"],
            answer: 1,
            explain: "Line voltage = 1.732 x phase voltage = 230 x 1.732 = 398 V, quoted as 400 V nominal. It is not 460 V because the two windings do not reach their peaks at the same instant; they are 120 degrees apart, so their voltages add vectorially, not arithmetically.",
          },
          {
            q: "A three-phase motor draws 15 A per line at 400 V with a power factor of 0.8. Its true power is about:",
            options: ["4.8 kW", "8.3 kW", "12 kW", "6 kW"],
            answer: 1,
            explain: "P = 1.732 x 400 x 15 x 0.8 = 8313 W, about 8.3 kW. Forgetting the 1.732 factor gives 4.8 kW, and forgetting the power factor gives 10.4 kVA of apparent power. Both errors turn up in cable and protection sizing.",
          },
          {
            q: "A newly installed scroll compressor is noisy, will not build pressure and draws low current. The first thing to check is:",
            options: ["The refrigerant charge", "The phase rotation", "The suction filter", "The oil level"],
            answer: 1,
            explain: "A scroll running in reverse rotation makes an immediate change in noise, does not pump, and draws less current than normal. It is destroyed quickly if left running. Swapping any two of the three line conductors reverses rotation and fixes it, which is why rotation is checked at commissioning.",
          },
          {
            q: "Three identical elements draw 12 kW when connected in delta on a 400 V supply. Reconnected in star on the same supply they will draw:",
            options: ["12 kW", "6.9 kW", "4 kW", "36 kW"],
            answer: 2,
            explain: "In star each element sees 400 / 1.732 = 231 V instead of 400 V, so both the voltage and the resulting current fall by 1.732, and power falls by a factor of three: 12 / 3 = 4 kW. This one-third relationship is exactly what star-delta starting exploits to limit starting current.",
          },
        ],
      },

      /* --------------------------------------------------------------- */
      {
        id: "components-semiconductors-and-dc-sources",
        title: "Resistors, semiconductors, rectifiers and DC sources",
        minutes: 15,
        simple: "Inside a controller you find tiny parts doing simple jobs: resistors limit current, diodes let electricity pass one way only, and transistors let a small signal switch a big one. Diodes turned the other way around convert mains AC into the steady DC the board needs. Batteries and solar cells make DC directly.",
        refs: REFS,
        content: `
Open any modern refrigeration controller, defrost timer, inverter drive or
electronic expansion valve driver and you meet the same handful of components.
You will rarely repair one — field repair of solid-state assemblies is almost
never practical — but you must be able to tell a failed board from a board
being fed the wrong inputs.

## Resistors and how their values are marked

Carbon composition and metal film resistors carry a colour code. Reading from
the end where the bands are crowded together:

- band 1 is the first digit
- band 2 is the second digit
- band 3 is the multiplier, the number of noughts to add
- band 4, set apart at the other end, is the tolerance

| Colour | Digit / multiplier | Colour | Tolerance |
|---|---|---|---|
| Black | 0 | None | plus or minus 20 per cent |
| Brown | 1 | Silver | plus or minus 10 per cent |
| Red | 2 | Gold | plus or minus 5 per cent |
| Orange | 3 | Red | plus or minus 2 per cent |
| Yellow | 4 | Brown | plus or minus 1 per cent |
| Green | 5 | | |
| Blue | 6 | | |
| Violet | 7 | | |
| Grey | 8 | | |
| White | 9 | | |

### Worked example — reading a resistor

Bands orange, violet, green, silver:

- Orange = 3
- Violet = 7
- Green = 5 noughts, so multiply by 100 000
- Value = 37 followed by five noughts = 3 700 000 ohms = **3.7 megohms**
- Silver = plus or minus 10 per cent, so anywhere from 3.33 to 4.07 megohms is
  within specification

Another: brown, black, red, gold = 1, 0, two noughts = 1000 ohms = **1 kilohm,
plus or minus 5 per cent**.

### Preferred values

Resistors are not made in every value. The common E12 series repeats these
twelve figures in each decade: 1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7,
5.6, 6.8 and 8.2. Tighter series such as E24 fill in between them at higher
cost. If a calculation calls for 1170 ohms you fit the nearest preferred value,
1200 ohms, and check that the tolerance still suits the job.

### SI multipliers

| Symbol | Name | Multiplier | In words |
|---|---|---|---|
| p | pico | 10 to the minus 12 | Millionth of a millionth |
| n | nano | 10 to the minus 9 | Thousand millionth |
| u | micro | 10 to the minus 6 | Millionth |
| m | milli | 10 to the minus 3 | Thousandth |
| k | kilo | 10 to the 3 | Thousand |
| M | mega | 10 to the 6 | Million |

So 1 000 000 ohms is written 1 M, 1000 ohms is 1 k, and 0.000001 farad is 1 uF.

## Semiconductors

Semiconductors sit between conductors and insulators, with four electrons in
the outer shell. Adding controlled impurities produces **n-type** material
(surplus electrons) and **p-type** material (a shortage, described as holes).
Joining the two creates a p-n junction, and every solid-state device is built
from junctions.

What makes them so useful is that their conductivity can be controlled by an
electrical signal, by light, by pressure or by temperature — so they can act as
switches, relays and sensors with no moving parts.

## The diode

A diode is a single p-n junction and behaves like an electrical check valve: it
passes electrons in one direction and blocks them in the other. Its two
terminals are the **anode** and the **cathode**, and the cathode end is marked
with a band so it can be fitted the right way round.

- **Forward biased** — polarised to conduct. A silicon diode drops about 0.7 V
  when conducting.
- **Reverse biased** — polarised to block.

Exceed the reverse voltage rating and the junction breaks down and the diode
usually fails short circuit. This is why reversing battery polarity or getting
jumper leads the wrong way round destroys an alternator's rectifier diodes.

## Rectification

Feed AC to a diode and it conducts only on the half cycles that forward bias
it, so the output is a series of pulses, all of the same polarity. That is a
**half-wave rectifier**: simple, but half the input is thrown away and the
output is very lumpy.

Four diodes in a bridge give **full-wave rectification**. On the first half
cycle, current passes through one pair of diodes to the load; on the second
half cycle the other pair conducts and pushes current through the load in the
**same** direction. Nothing is wasted and the ripple frequency is doubled to
100 Hz on our supply, which is far easier to smooth.

A capacitor across the output charges to the peak and holds the voltage up
between pulses, turning the pulsing output into near-steady DC. That is why an
inverter drive DC bus sits at roughly the peak of the incoming supply, not its
RMS value.

### Worked example — output of a bridge rectifier

A 24 V AC control transformer feeds a bridge rectifier and a smoothing
capacitor.

- Peak of the AC = 1.414 x 24 = **33.9 V**
- Two diodes conduct in series on each half cycle, each dropping about 0.7 V
- Smoothed DC = 33.9 minus 1.4 = **about 32.5 V**

If you measure 24 V DC on that bus instead, the capacitor has almost certainly
failed and you are reading the rectified average rather than the smoothed peak.

>! The DC bus capacitors in an inverter drive stay charged to hundreds of volts
>! after the supply is isolated. Wait the time stated on the drive label,
>! usually five to fifteen minutes, and then prove the bus is at zero volts
>! before touching anything. Isolating the drive is not the same as making it
>! safe.

## Transistors, SCRs and triacs

A **transistor** is a three-layer sandwich, either PNP or NPN, with terminals
called emitter, base and collector. A small current in the base circuit controls
a much larger current from emitter to collector, by a factor that can be a
thousand or more. It therefore acts both as an amplifier and as a solid-state
relay with no contacts to wear or arc.

A **silicon-controlled rectifier (SCR)** is a three-terminal device — anode,
cathode and gate — with two states, off and on. A short positive pulse on the
gate latches it on, and it stays on until the current through it falls close to
zero. Think of a latch-operated check valve: pull the latch and flow continues
until the flow itself dies away, then the latch resets. On AC the current
passes through zero every half cycle, so the SCR turns off naturally and must
be re-triggered — which is how gate timing controls power to a load.

A **triac** is effectively two SCRs back to back, so it conducts in both
directions when gated. That makes it the standard device for AC power control:
fan speed controllers, dimmers and solid-state relays.

Other semiconductors you meet: **photocells** in door controls, **thermistors**
as temperature sensors on nearly every electronic controller, and **diode
bridges** built into meters so a DC moving coil movement can read AC.

## Sources of DC

### Static electricity

Strip electrons off a substance and it carries a charge. Lightning is the
natural example: wind and turbulence separate charge in a cloud until the base
becomes strongly negative, and when the potential exceeds the resistance of the
air, an enormous electron flow equalises it. Static is also why electronic
boards ship in antistatic bags and should be handled by the edges.

### Thermocouples

Join two dissimilar metals — copper and constantan, for example — and heat the
junction, and a small voltage appears. The output is tiny, so thermocouples are
used as sensors rather than as power sources, particularly for high
temperatures where other sensors will not survive.

### Solar cells

A solar cell is a large-area p-n junction. Light falling on the junction frees
electrons and drives a current in the external circuit. One cell produces about
**0.5 V** regardless of size; cells are connected in series for more voltage.
Current depends on light intensity and cell area.

### Cells and batteries

- A **primary cell** consumes its chemicals to produce current and cannot be
  recharged. Modern types use a carbon positive electrode and a zinc negative
  electrode in an ammonium chloride paste with manganese dioxide as a
  depolariser, which extends the useful life. Alkaline and silver oxide cells
  are refinements of the same idea. Mercury cells have been withdrawn for
  environmental reasons.
- A **secondary cell** changes its chemical composition instead of consuming
  it, so it can be recharged: lead-acid, nickel-cadmium, nickel-metal hydride,
  lithium-ion and lithium polymer.

| Cell type | Terminal volts | Ampere hours |
|---|---|---|
| Zinc-carbon D cell | 1.5 | 4.0 |
| Alkaline D cell | 1.5 | 5.5 |
| Nickel-cadmium C cell | 1.25 | 1.7 |
| Lead-acid cell (car battery, per cell) | 2.0 | about 40 |

A car battery is six 2 V lead-acid cells in series, giving 12 V. Primary cells
have a shelf life: nine to twelve months for zinc-carbon, around fifteen months
for alkaline.

**Lead-acid** cells use a lead peroxide positive plate, a spongy lead negative
plate and sulphuric acid electrolyte. On discharge the reaction runs
PbO2 + 2H2SO4 + Pb to give 2PbSO4 + 2H2O, both plates tending towards lead
sulphate and the acid becoming weaker. Charging drives the reaction back the
other way and the specific gravity of the acid rises again. Internal resistance
is very low, so lead-acid cells deliver enormous short-duration currents, which
is why they crank engines.

Testing a lead-acid battery is done either with a **high-current tester**,
which loads the cell to as much as 200 A while watching the voltage (a good cell
holds about 2 V per cell under that load), or with a **hydrometer** measuring
the specific gravity of the electrolyte, which tracks the state of charge
directly.

**Nickel-cadmium** cells use nickel hydroxide and cadmium hydroxide plates in
potassium hydroxide electrolyte. Their internal resistance is much higher, so
they are unsuited to very high discharge rates, but they are mechanically
tough, tolerate vibration, survive short circuits and being left flat, and
sealed types manage up to about 1000 charge cycles in any orientation. Their
discharge curve is flat, so terminal voltage tells you almost nothing about
state of charge — the test is a controlled discharge followed by a full
recharge.

Cells are connected in **series for higher voltage** (two 1.5 V cells give 3 V
at the same current capability) and in **parallel for more current** (two 1.5 V
cells give 1.5 V at double the amp hours).

>! Lead-acid batteries give off hydrogen while charging and it is explosive.
>! Charge in ventilated areas, never make or break a connection at the terminals
>! of a charging battery, and wear eye protection — the electrolyte is
>! sulphuric acid.

## Diagnosing a solid-state control

The field procedure is short. Check that the device has its **supply voltage**
and its **control signals** — a thermostat input, a sensor resistance, an
enable contact. If the inputs are all correct and the output still does not
follow, the device has failed and is replaced, not repaired. The commonest
failure inside a motor control is a shorted diode or SCR.

## On the job

- Colour bands: two digits, a multiplier, then tolerance set apart.
- A diode conducts one way only and drops about 0.7 V forward; a bridge gives
  full-wave DC and a capacitor smooths it towards the peak value.
- Transistors amplify and switch; SCRs latch on until current falls to zero;
  triacs do the same in both directions for AC control.
- Solar cells give about 0.5 V each; lead-acid cells 2 V; NiCd 1.25 V.
- Series for volts, parallel for amps.
- If a control has correct inputs and a wrong output, replace it — field repair
  of semiconductors is not realistic.
`,
        quiz: [
          {
            q: "A resistor is banded brown, black, orange, gold. Its value is:",
            options: ["103 ohms plus or minus 5 per cent", "10 kilohms plus or minus 5 per cent", "1 kilohm plus or minus 10 per cent", "10 megohms plus or minus 5 per cent"],
            answer: 1,
            explain: "Brown is 1, black is 0 and orange is a multiplier of three noughts, giving 10 000 ohms, that is 10 kilohms, and gold means plus or minus 5 per cent. The classic error is treating the third band as a digit rather than the multiplier, which would give 103 ohms.",
          },
          {
            q: "What is the main advantage of a full-wave bridge rectifier over a half-wave rectifier?",
            options: ["It produces AC from DC", "It uses both half cycles, giving higher output with less ripple", "It needs no diodes", "It works only on three-phase supply"],
            answer: 1,
            explain: "The bridge routes both half cycles through the load in the same direction, so no input is wasted and the ripple frequency doubles to 100 Hz, which is far easier to smooth with a capacitor. A half-wave circuit discards half the input and leaves large gaps between pulses.",
          },
          {
            q: "An SCR in a motor control switches on when gated, but the fault is that it never turns off. On a normal AC circuit an SCR turns off when:",
            options: ["The gate signal is removed", "The current through it falls close to zero at the end of each half cycle", "The supply voltage rises", "Its temperature drops"],
            answer: 1,
            explain: "An SCR latches: once triggered it ignores the gate and keeps conducting until the current through it falls near zero, which on AC happens at every current zero. An SCR that will not turn off has usually failed short circuit, which is one of the most common failures inside a motor control.",
          },
          {
            q: "Two 1.5 V cells rated 4 Ah are connected in parallel. The result is:",
            options: ["3 V at 4 Ah", "1.5 V at 8 Ah", "3 V at 8 Ah", "1.5 V at 2 Ah"],
            answer: 1,
            explain: "Parallel connection keeps the voltage the same and adds the capacity, giving 1.5 V at 8 Ah. Series connection is the one that adds voltages, giving 3 V at 4 Ah. Remember it as series for volts, parallel for amps.",
          },
          {
            q: "Why must a nickel-cadmium battery's state of charge not be judged from its terminal voltage?",
            options: ["Its voltage is too high to measure safely", "Its discharge curve is flat, so voltage barely changes until it is exhausted", "It produces AC, not DC", "Its voltage rises as it discharges"],
            answer: 1,
            explain: "A NiCd holds close to 1.25 V for almost the whole discharge, so a voltage reading cannot distinguish a full cell from a nearly flat one. The reliable test is a controlled discharge followed by a full recharge for the specified period. Lead-acid is different, because its specific gravity tracks the state of charge.",
          },
        ],
      },

    ],
  },

  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
