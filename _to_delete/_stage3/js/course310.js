/* =========================================================================
   Course content, module 310 — Alternating current circuits: three phase.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 10 — Alternating current circuits:
   three phase.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS_WHY = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — efficiency of single-phase, two-phase and three-phase generation and distribution",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — two-phase systems and why polyphase systems beyond three phases are uneconomical",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — generating a three-phase supply, alternator construction and three-phase winding arrangements",
  ];

  const REFS_SEQ = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phase sequence and phase rotation of a three-phase supply",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase sine wave construction and phasor diagrams of the three phase voltages",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — determining the phase sequence of an installation with a phase rotation meter",
    "AS/NZS 3000:2018 Wiring Rules — identification of multiphase conductors",
  ];

  const REFS_STAR = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase star (wye) connections, star point, line and phase values",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — derivation of the root-three relationship between line and phase voltage in star",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effect of phase reversal on a star-connected system",
  ];

  const REFS_DELTA = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase delta connections and the root-three relationship between line and phase current",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — limitations and uses of open delta (V) connections",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effect of phase reversal on a delta system and loss of one supply line",
  ];

  const REFS_NEUTRAL = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — purpose of the neutral conductor in a three-phase four-wire system",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effects of a broken neutral and balanced versus unbalanced loads",
    "AS/NZS 3000:2018 Wiring Rules — Clause 3.5.2, current-carrying capacity and size of neutral conductors including harmonic content",
  ];

  const REFS_IN = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — calculating the neutral current of an unbalanced three-phase four-wire load",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phasor addition of line currents and the tip-to-tail method",
    "AS/NZS 3000:2018 Wiring Rules — Clause 3.5.2, conditions permitting a reduced neutral in multiphase circuits",
  ];

  const REFS_POWER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase power in star and delta connections",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — loads in typical power systems and interconnected star and delta combinations",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power of a three-phase load connected in star compared with delta",
  ];

  const REFS_MEAS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — methods of three-phase power measurement using one, two and three wattmeters",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — dynamometer wattmeters, electronic power meters and power analysers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — VAR, VA, power factor, energy and total harmonic distortion measurement",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power factor improvement in three-phase installations",
  ];

  const REFS_GRID = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the infinite grid, transmission voltages and three-phase distribution",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Single-Wire Earth-Return (SWER) distribution",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — fault-loop impedance of an a.c. power system and its measurement",
    "AS/NZS 3000:2018 Wiring Rules — Appendix B paragraphs B4 and B5, fault-loop impedance; Tables 8.1 and 8.2; AS/NZS 3017 verification guidelines",
  ];

  const MODULES = [
  /* ======================================================================
     E.10 — Alternating current circuits: three phase
     ====================================================================== */
  {
    id: "elec-ac-three-phase",
    stream: "elec",
    title: "E.10 · Alternating current: three phase",
    blurb: "Three-phase supply from the alternator to the switchboard: star and delta, the root-three relationships, the neutral, unbalanced loads, three-phase power, its measurement and correction, and fault-loop impedance.",
    lessons: [

      /* ---------------------------------------------------------------- */
      {
        id: "why-three-phase",
        title: "Why three phase, and how the three voltages are made",
        minutes: 12,
        simple: "A single-phase supply is like one person pushing a swing: they can only push part of the time, so the swing moves in jerks. Three phase is like three people spaced evenly around the swing, each pushing in turn, so the push never stops. Three generator windings spaced 120 degrees apart do exactly that with electricity, which is why every serious motor and every power station uses it.",
        refs: REFS_WHY,
        content: `
Nearly everything with real power behind it — a chiller compressor, a lift
motor, a welding plant, the transformer on the pole outside — runs on three
phase. It is not fashion. Single-phase alternating current wastes a large
slice of the machine that drives it, and three phase is the cheapest way of
getting that slice back.

## The problem three phase solves

A single-phase sine wave passes through zero twice every cycle. At those two
instants the voltage is zero, so no power at all is delivered to the load. On
a 50 Hz supply that happens 100 times a second. Between the zeros the power
swells to a peak and collapses again, so the power delivered to the load
pulses at twice the supply frequency — 100 pulses a second.

Two consequences follow, and both cost money:

- The alternator, and the turbine or engine driving it, is sized for the peak
  but only paid for the average. The chapter puts the useful output of a
  single-phase machine at roughly 63% of what the driving machine could
  deliver.
- The torque taken from the driving machinery also drops to zero 100 times a
  second. That produces a 100 Hz mechanical vibration in the machine, which
  means noise, bearing wear and heavier shafts and mounts.

## Two phases, then three

The fix is to generate a second voltage that peaks while the first is passing
through zero. Two windings set 90 mechanical degrees apart in the same machine
produce two voltages 90 electrical degrees apart, and the gaps in one are
filled by the other. Efficiency rises to about 90%. Note the two different
symbols used here: 90 degrees M means a physical, mechanical angle between the
coils; 90 degrees E means an electrical phase angle between the waveforms.

Two-phase systems have almost disappeared in Australia. The reason is not that
they do not work, but that they are not cheap enough: a two-phase system needs
at least three wires and normally four — exactly what a three-phase system
needs. If you have to run the wires anyway, you may as well get the better
result.

Adding a third winding means sharing 360 degrees between three waveforms, so
they sit 120 degrees apart. This is the arrangement with the smoothest total
power, and the chapter quotes the resulting efficiency at roughly 94.5 to 96%
against 63% for single phase.

!FIG[three-phase-waves]

| System | Phase displacement | Wires needed | Approximate efficiency |
|---|---|---|---|
| Single phase | none | 2 | about 63% |
| Two phase | 90 degrees E | 3 or 4 | about 90% |
| Three phase | 120 degrees E | 3 or 4 | about 95% |
| Four or more phases | 360 divided by n | one extra per phase | marginally better than three |

## Why not four, or six, or twelve?

Every extra phase needs another conductor along every kilometre of line, and
another winding, another terminal and another protective device at each end.
Beyond three phases the efficiency gain is tiny and the extra copper is not.
Three phase is therefore the most efficient and economical polyphase system
available. (Any system with more than one phase is a **polyphase**, or
multiphase, system.) Higher phase numbers do appear inside equipment — large
industrial rectifiers use transformer connections that produce six, twelve or
twenty-four pulses — but they are made from a three-phase supply, not
transmitted as such.

## What three phase buys you

- For the same physical size and weight, a three-phase machine gives a larger
  output than a single-phase machine.
- For the same output, a three-phase machine can be made smaller.
- Power delivered is far steadier. Single-phase power pulses at twice the line
  frequency; three-phase power pulses at six times the line frequency with
  much smaller amplitude. Steadier power means steadier torque, so less
  vibration.
- One connection method gives you two usable voltages from the same set of
  wires: 230 V and 400 V.
- For the same power delivered, the three conductors of a three-phase system
  contain less conductor material in total than the equivalent single-phase
  system.
- A three-phase motor starts by itself. The sequence of the phases produces a
  rotating magnetic field, so no starting winding, capacitor or centrifugal
  switch is needed.

## Making the three voltages

A three-phase supply comes from a machine with three windings spaced 120
electrical degrees apart around the stator. Spin a magnetic field past them
and each winding produces the same sine wave, one after another, 120 degrees
apart. Nothing more clever than that is required — the phase shift is built
into the geometry of the machine.

The same principles apply to single- and three-phase alternators; the only
real difference is one winding or three identical ones. In practice the
useful form is the one where the a.c. windings are stationary in the stator
and the magnetic field system rotates. That way the heavy load current is
taken from fixed terminals rather than through slip rings, and only the much
smaller field excitation passes through sliding contacts.

## How the windings sit in the iron

Unlike a d.c. machine, the poles of a three-phase machine generally overlap,
and that overlapping is part of what keeps the current and power balanced
between phases. Take a 24-slot stator laminate wound as a three-phase,
four-pole machine. Four pole means four sets of coils for each phase, and
each pole is normally formed from two coils, so:

2 coils per pole per phase x 3 phases x 4 poles = 24 coils, one per slot.

Each phase therefore occupies one third of the slots, spread evenly around the
stator so no part of the iron is loaded harder than any other. Remember also
that in a four-pole machine one complete mechanical revolution of 360 degrees M
sweeps 720 degrees E — two full electrical cycles.

> Draw the three sine waves by hand at least once. Plot A phase in the normal
> way, then start B phase 120 degrees later and C phase 240 degrees later,
> using exactly the same curve. Adding the three instantaneous values at any
> point on the axis gives zero, and seeing that once is worth more than
> memorising it.

## What to remember

- Single-phase power falls to zero 100 times a second on a 50 Hz supply;
  three-phase power never does.
- Three windings 120 degrees E apart is the best balance across 360 degrees.
- Two-phase is rare because it costs the same in wires as three-phase and
  performs worse; four-phase and above cost more wire for almost no gain.
- Three phase gives more output per kilogram of machine, smoother torque, two
  voltages from one supply, less conductor material and self-starting motors.
`,
        quiz: [
          {
            q: "Why does the power delivered by a single-phase alternator fall to zero 100 times per second on a 50 Hz supply?",
            options: [
              "Because the frequency doubles under load",
              "Because both the voltage and the current pass through zero twice in every cycle",
              "Because the alternator field collapses at each half cycle",
              "Because the neutral conductor carries no current at those instants",
            ],
            answer: 1,
            explain: "A sine wave crosses zero twice per cycle, and at 50 Hz that is 100 crossings per second. With no voltage there is no power, whatever the load. The frequency does not change with load, and the field of an alternator is a steady d.c. field, so neither of those explanations holds.",
          },
          {
            q: "A two-phase system reaches about 90% efficiency against about 95% for three phase. Why did two-phase systems still disappear?",
            options: [
              "Two-phase machines cannot be built above a few kilowatts",
              "Two-phase supplies cannot drive transformers",
              "A two-phase system needs three or four wires — the same as three phase — so it costs the same to install but delivers less",
              "Two-phase voltages are unsafe at 230 V",
            ],
            answer: 2,
            explain: "The deciding factor is conductors, not capability. Two phase needs at least three wires and usually four, which is exactly what three phase needs, so the extra efficiency of three phase is free. Two-phase machines and transformers work perfectly well; they are simply not worth the wire.",
          },
          {
            q: "Why is a supply with six or more phases not used for transmission, even though its power would be even smoother?",
            options: [
              "Each extra phase needs another conductor, so the cost rises much faster than the benefit",
              "More than three phases cannot be generated in one machine",
              "The phase angle would be less than 60 degrees, which causes short circuits",
              "Protective devices cannot be made for more than three phases",
            ],
            answer: 0,
            explain: "Efficiency gains beyond three phases are marginal but every extra phase adds a conductor for the whole route plus terminations and protection at each end. Multi-pulse arrangements do exist inside large rectifier installations, but they are created locally from a three-phase supply rather than transmitted.",
          },
          {
            q: "In a three-phase four-pole machine, how many electrical degrees are swept in one complete mechanical revolution?",
            options: ["360 degrees E", "180 degrees E", "1080 degrees E", "720 degrees E"],
            answer: 3,
            explain: "Electrical degrees equal mechanical degrees multiplied by the number of pole pairs. A four-pole machine has two pole pairs, so 360 degrees M x 2 = 720 degrees E, which is two complete electrical cycles per revolution. That is also why a four-pole machine runs at half the speed of a two-pole machine at the same frequency.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "phase-sequence",
        title: "Phase identification, sequence and rotation",
        minutes: 11,
        simple: "The three voltages always arrive in a fixed order, like three horses passing the same post one after another. Swap two of them over and the order reverses, which makes every motor fed from that supply run backwards. Naming the phases properly and checking their order with a rotation meter is how you stop that happening.",
        refs: REFS_SEQ,
        content: `
Three-phase voltages are not just three separate supplies that happen to share
a switchboard. They arrive in a fixed order, and that order — the **phase
sequence**, also called phase rotation — decides which way every three-phase
motor in the installation turns. Getting it wrong reverses a fan, a pump or a
compressor, and reversing a scroll or screw compressor can destroy it in
seconds.

## Naming the phases

Before you can state a sequence you have to be able to name the conductors.
Australian practice uses several parallel schemes and you will meet all of
them:

| Scheme | Designations | Where you see it |
|---|---|---|
| Letters | A, B, C | Textbook theory, phasor diagrams, machine terminals |
| Traditional colours | red, white, blue | Supply and distribution identification; older installations |
| Pre-1981 colours | red, yellow, blue | Very old installations — treat with care |
| Line numbers | L1, L2, L3 | Switchgear, drawings, equipment terminals |
| Harmonised cable cores | brown, black, grey with a blue neutral | New multiphase wiring under current AS/NZS 3000 identification rules |

A-phase, red and L1 refer to the same conductor; B is white and L2, C is blue
and L3. The neutral is not counted as a line. When you meet a switchboard with
red, white and blue busbars feeding cables cored brown, black and grey, both
identifications are legitimate and both mean the same three phases.

## The sequence itself

By convention a set of windings driven in the normal direction produces the
sequence A, B, C — the phasors pass the reference position in the order red,
white, blue. Reverse the direction of the driving magnet and the sequence
becomes A, C, B. Nothing else changes: the voltages, the frequency and the 120
degree spacing are identical. Only the order of arrival reverses.

That is worth sitting with for a moment, because it explains why a sequence
fault is invisible to a voltmeter. Every line-to-line voltage still reads
400 V and every line-to-neutral voltage still reads 230 V whichever way round
the sequence runs.

## Drawing it

Two pictures describe the same thing.

**The waveform diagram.** Draw the A-phase sine wave, then the same curve
starting 120 degrees later for B, then 240 degrees later for C. At every point
on the horizontal axis the three instantaneous values add to zero.

**The phasor diagram.** Draw V-A horizontally to the right as the reference at
0 degrees. Phasors are taken to rotate anticlockwise, so a lagging phasor sits
clockwise from the reference. V-B is 120 degrees after V-A, which places it at
the lower left. V-C is 240 degrees after V-A — equivalently 120 degrees
anticlockwise from it — placing it at the upper left. The three phasors then
sit at 0, minus 120 and plus 120 degrees, like a three-spoked wheel.

You may use white or blue as the reference instead of red if that suits the
problem, as long as the sequence between them is kept correct.

## Why the sequence matters in the field

- **Direction of rotation.** The sequence creates the rotating magnetic field
  in an induction motor. Swap any two lines and the field, and therefore the
  rotor, turns the other way.
- **Interconnection.** Where two supplies or two sections of a grid are to be
  paralleled, the sequences must agree or the connection is a short circuit
  between phases.
- **Plugs and sockets.** If every socket in a workshop is wired to the same
  sequence, a machine moved from one socket to another still runs the correct
  way. If one socket was wired differently, a saw or a pump will run backwards
  the first time it is plugged in there.
- **Parallel conductors.** Conductors of the same phase must be paralleled to
  each other, never across phases.

## Proving the sequence

**Voltage checks between like conductors.** If a conductor labelled A or red
is to be connected to another conductor also labelled A or red, the voltage
between them must be zero, because they are at the same potential. If one of
them has been mislabelled or crossed, you will measure the full line voltage
of 400 V between two conductors that both say red. Do this check on every
parallel or interconnection before you bolt anything together.

**Phase rotation meter.** The traditional instrument is a small three-phase
motor with three leads. Connect it to the supply and it turns clockwise for
one sequence, anticlockwise for the other. Modern testers do the same job
electronically with two lamps or a display showing 1-2-3 or 3-2-1, and some
will also do the test without contact by sensing the field around the
conductors. The practical technique is not to trust the label but to connect
the same coloured lead to the same coloured conductor at every socket or
terminal and confirm the meter indicates the same direction every time.

>! Phase rotation testing is live work. The leads carry full line voltage and
>! the test is only valid on an energised supply. Use insulated probes and
>! leads rated for the installation category, keep to the safe work method for
>! live testing, and prove your instrument on a known supply before and after
>! the test. Where the risk cannot be justified, the alternative is to run the
>! machine uncoupled and observe rotation, or to use a non-contact rotation
>! meter.

## Motor rotation on site

Once you know the sequence is consistent, correcting a motor that runs
backwards is simple: swap any two of the three line conductors at the motor
terminals. Swap them at the motor, not at the switchboard, so the rest of the
installation keeps its normal sequence. Mark the change on the drawing and in
the terminal box, because the next technician will assume standard sequence
unless told otherwise.

## What to remember

- A, B, C equals red, white, blue equals L1, L2, L3; new cable cores are
  brown, black, grey with a blue neutral.
- Normal sequence is A-B-C; reversing the drive gives A-C-B, and all voltages
  read exactly the same either way.
- Sequence sets motor direction, so it must be identical throughout an
  installation and across any interconnection.
- Between two conductors of the same phase you should read 0 V; 400 V means a
  crossed or mislabelled conductor.
- Swap any two lines at the motor to reverse it.
`,
        quiz: [
          {
            q: "A three-phase socket is suspected of having a reversed phase sequence. Which measurement will reveal it?",
            options: [
              "Line-to-line voltage at the socket",
              "Line-to-neutral voltage at the socket",
              "A phase rotation meter connected with the same coloured lead on the same coloured conductor",
              "Insulation resistance between phases",
            ],
            answer: 2,
            explain: "Reversing the sequence changes nothing that a voltmeter can see — all line voltages are still 400 V and all phase voltages 230 V. Only an instrument that detects the order in which the phases peak, such as a rotation meter, will show it. Insulation resistance is a separate test entirely.",
          },
          {
            q: "Two cables in a switchboard are both labelled red phase. A voltmeter across them reads 400 V. What does that mean?",
            options: [
              "Normal — that is the line voltage of the system",
              "One of the cables is mislabelled or crossed; they are on different phases",
              "The neutral is open circuit",
              "The supply transformer is delta connected",
            ],
            answer: 1,
            explain: "Two conductors of the same phase are at the same potential, so the reading should be zero. Four hundred volts is the voltage between two different phases, which proves the labelling or the connection is wrong. Bolting them together would create a phase-to-phase fault.",
          },
          {
            q: "A newly installed three-phase pump runs backwards. What is the correct fix?",
            options: [
              "Interchange any two of the three line conductors at the pump terminals",
              "Interchange the active and neutral at the switchboard",
              "Reverse all three line conductors at the pump",
              "Change the supply frequency",
            ],
            answer: 0,
            explain: "Swapping any two lines reverses the sequence seen by that motor and so reverses the rotating field. Doing it at the motor keeps the rest of the installation on standard sequence. Reversing all three simply restores the original order and changes nothing, and a three-phase motor has no neutral connection to swap.",
          },
          {
            q: "On a phasor diagram of a normal ABC sequence with V-A drawn as the reference at 0 degrees, where does V-B sit?",
            options: [
              "At plus 120 degrees, upper left, because it leads V-A",
              "At minus 120 degrees, lower left, because it lags V-A by 120 degrees",
              "At 180 degrees, directly opposite V-A",
              "At minus 90 degrees, directly below V-A",
            ],
            answer: 1,
            explain: "Phasors rotate anticlockwise, so a phasor that lags is drawn clockwise from the reference. B phase peaks 120 degrees after A, so it is drawn 120 degrees clockwise, at the lower left, while C sits at plus 120 degrees at the upper left.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "star-connection",
        title: "Star connection: where 400 V and 230 V come from",
        minutes: 13,
        simple: "Join one end of all three generator windings together and you get a star. The joined point becomes the neutral, so every winding gives you 230 V to neutral, and between any two lines you get 400 V. The 400 is not two lots of 230 added up, because the two windings peak at different times, so it works out at 1.732 times 230.",
        refs: REFS_STAR,
        content: `
Every domestic and light commercial supply in Australia is the low-voltage
side of a star-connected transformer. Understanding star is what lets you
explain why the same set of terminals gives 230 V to one appliance and 400 V
to another.

## Making the connection

Take the three windings and join one end of each together — either all three
starts or all three finishes, but not a mixture. That common junction is the
**star point**. The three free ends become the supply actives, or lines, and
are labelled A, B and C. Drawn out on paper the three windings radiate from
the common point like a star, which is where the name comes from. It is also
called a wye connection after the letter Y.

Four terms have to stay straight in your head:

| Term | Symbol | Meaning in a star system |
|---|---|---|
| Phase voltage | V-P | Voltage across one winding, line to star point |
| Line voltage | V-L | Voltage between any two lines |
| Phase current | I-P | Current through one winding |
| Line current | I-L | Current in one line conductor |

The neutral is connected to the star point and is normally earthed at the
main switchboard. It is not counted as a line.

## Current in star

Look at where the current can go. Line A is in series with winding A and there
is no other path, so whatever flows in the line flows in the winding.

For a star system: **I-L = I-P**

That is the whole story for current in star, and it is why star-connected
windings must be sized for the full line current.

## Voltage in star

Voltage is different, because between any two lines there are two windings in
series — but not in phase. The line voltage is the phasor difference between
two phase voltages:

V-AB = V-A minus V-B

Subtracting a phasor means reversing it and adding. V-A is at 0 degrees and
V-B is at minus 120 degrees, so minus V-B sits at plus 60 degrees. The two
phasors being added are therefore 60 degrees apart and equal in length, so the
resultant lies exactly halfway between them, at 30 degrees, and its length is:

V-L = 2 x V-P x cos 30 degrees = 2 x 0.866 x V-P = 1.732 x V-P

For a star system: **V-L = 1.732 V-P**, and the line voltage leads the phase
voltage by 30 degrees.

The number 1.732 is the square root of 3, and it turns up throughout
three-phase work for exactly this reason: it is 2 cos 30 degrees, which comes
straight out of the 120 degree spacing.

!FIG[star-delta]

### Worked example 1 — the Australian supply

A distribution transformer has a star-connected secondary with 230 V across
each winding. Find the line voltage.

- Formula: V-L = 1.732 x V-P
- Substitute: V-L = 1.732 x 230 V
- Arithmetic: V-L = 398.4 V
- Answer: **V-L = 398 V, called 400 V nominal**

That is the origin of the 230/400 V system. A single-phase load connects
between one line and neutral and sees 230 V; a three-phase load connects
across all three lines and sees 400 V.

### Worked example 2 — line values from phase values

A star-connected alternator has a phase voltage of 230 V and a phase current
of 10 A. Find the line voltage and line current.

- V-L = 1.732 x V-P = 1.732 x 230 = **398 V**
- I-L = I-P = **10 A**

### Worked example 3 — phase values from line values

A star-connected system has a line voltage of 500 V and a line current of
10 A. Find the phase voltage and phase current.

- V-P = V-L divided by 1.732 = 500 divided by 1.732 = **288.7 V**
- I-P = I-L = **10 A**

### Worked example 4 — a star-connected heater

Three 11.5 ohm elements are connected in star to a 230/400 V supply. Find the
current in each element.

- Each element sits across one phase voltage, so V-P = 230 V
- I-P = V-P divided by R = 230 V divided by 11.5 ohms = **20 A**
- Line current I-L = I-P = **20 A**

Notice how the star connection protects the elements: even though the supply
is described as a 400 V supply, each element only ever sees 230 V.

## Why consumers get star

The supply authority could deliver either connection. Star wins on the
consumer side for two reasons:

- **Two voltages from one set of conductors.** 230 V for lighting, socket
  outlets and appliances; 400 V for motors, ovens and larger plant.
- **An earth reference.** The star point is a natural zero-volt point. Earthing
  it fixes the voltage of every line at 230 V with respect to earth instead of
  letting the whole system float, which is what makes shock protection and the
  MEN system possible.

## When one winding is connected backwards

Reverse the ends of one winding — say C — and its voltage is shifted by 180
degrees. The three phase voltages are then no longer 120 degrees apart. The
displacement stays 120 degrees between A and B, but becomes 60 degrees between
A and C and between C and B.

The consequences are worth knowing because the symptoms are distinctive:

- All three phase voltages still measure the same, so a line-to-neutral check
  looks perfectly healthy.
- Two of the three line voltages collapse from 400 V to the phase value of
  230 V, while the third stays at 400 V.
- The sequence is wrong, so the load is no longer balanced and motors will
  probably run backwards, or stall and burn.

>! Two different line-to-line readings on the same board — say 400 V, 230 V,
>! 230 V — is a reversed winding or a crossed connection, not a supply fault.
>! Do not energise a motor on that supply. The winding will draw heavily
>! unbalanced current and can burn out in minutes while the overload sees
>! nothing unusual on the phase that is still correct.

## What to remember

- Star = three windings joined at a common star point, which becomes the
  neutral.
- I-L = I-P in star. Always.
- V-L = 1.732 V-P in star, with the line voltage leading the phase voltage by
  30 degrees.
- 230 V x 1.732 = 398 V, which is the 400 V nominal line voltage.
- Star gives consumers two voltages and an earth reference point.
- One reversed winding leaves the phase voltages looking correct while two line
  voltages drop to 230 V.
`,
        quiz: [
          {
            q: "A star-connected three-phase system has a line voltage of 400 V and a line current of 25 A. What are the phase voltage and phase current?",
            options: [
              "V-P = 693 V and I-P = 25 A",
              "V-P = 231 V and I-P = 25 A",
              "V-P = 231 V and I-P = 14.4 A",
              "V-P = 400 V and I-P = 43.3 A",
            ],
            answer: 1,
            explain: "In star the line current is the phase current, so I-P = 25 A. The phase voltage is the line voltage divided by 1.732: 400 divided by 1.732 = 231 V. Dividing the current by 1.732 is the delta relationship and does not apply here.",
          },
          {
            q: "Why is the line voltage in a star system 1.732 times the phase voltage rather than twice the phase voltage?",
            options: [
              "Because one of the two windings is only half connected",
              "Because the two phase voltages are 120 degrees apart, so they must be subtracted as phasors, giving 2 cos 30 degrees times V-P",
              "Because of losses in the star point connection",
              "Because the neutral carries part of the current away",
            ],
            answer: 1,
            explain: "Two windings sit between any pair of lines but they do not peak together. Subtracting the phasors gives a resultant of 2 x V-P x cos 30 degrees = 1.732 V-P, leading the phase voltage by 30 degrees. Only if the two voltages were in phase would they simply add to twice the value.",
          },
          {
            q: "A technician measures line-to-neutral voltages of 230 V, 230 V and 230 V, but line-to-line voltages of 400 V, 230 V and 230 V. What is the most likely cause?",
            options: [
              "A lost neutral",
              "A blown fuse in one line",
              "One phase winding connected in reverse",
              "The supply transformer is delta connected",
            ],
            answer: 2,
            explain: "A reversed winding shifts one phase voltage by 180 degrees. All three windings still produce their normal 230 V, so the line-to-neutral checks look fine, but the angles between two of the pairs collapse to 60 degrees and those line voltages fall to the phase value. A blown fuse would give a missing or badly reduced voltage on one line, not a symmetrical pair of 230 V readings.",
          },
          {
            q: "Three 11.5 ohm heating elements are connected in star to a 230/400 V supply. What current flows in each element?",
            options: ["34.8 A", "20 A", "60.3 A", "11.5 A"],
            answer: 1,
            explain: "Each element in star sits across the phase voltage of 230 V, so I = 230 divided by 11.5 = 20 A. The 34.8 A answer is what the same element would draw if it were connected in delta across 400 V, and 60.3 A would be the resulting delta line current.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "delta-connection",
        title: "Delta connection, open delta and reversal faults",
        minutes: 13,
        simple: "Instead of joining the three windings at one point, join them end to end in a closed triangle and bring a line out of each corner. Now each winding sees the full line voltage, and the line current is shared between two windings, so the line carries 1.732 times what any winding carries. Connect one winding the wrong way round and the triangle no longer adds to zero, which produces a huge circulating current.",
        refs: REFS_DELTA,
        content: `
Delta is the other way of tying three windings together, and it is the one you
find inside motors, on transformer primaries and on high-voltage transmission,
where a neutral is not needed. It swaps the star relationships around: in
delta the voltages are simple and the currents need the 1.732.

## Making the connection

Join the windings end to end in a closed loop — the finish of one to the start
of the next — and take a line conductor from each of the three junctions.
Drawn out, the three windings form a triangle, which is why it takes its name
from the Greek capital letter delta.

Because each winding is connected directly between two lines:

For a delta system: **V-L = V-P**

There is no star point, so no neutral is available and no natural earth
reference exists in the windings themselves.

It is worth confirming that the loop is safe to close. Any one winding is in
parallel with the series combination of the other two. The phasor sum of those
two is exactly equal in magnitude and phase to the third winding, so around the
closed triangle the voltages add to zero and no current circulates in the loop
with no load connected.

## Current in delta

Each line conductor connects to a junction where two windings meet, so the
line current is the phasor difference between two phase currents. The geometry
is the same as the voltage case in star, and the answer is the same factor:

For a delta system: **I-L = 1.732 I-P**, and the line current leads the phase
current in that winding by 30 degrees.

The neat symmetry between the two connections is worth memorising as a pair:

| Quantity | Star | Delta |
|---|---|---|
| Line voltage | 1.732 x phase voltage | equal to phase voltage |
| Line current | equal to phase current | 1.732 x phase current |
| Neutral available | yes, at the star point | no |
| Voltages available | two (230 V and 400 V) | one (400 V) |
| Typical use | consumer supplies, distribution, single-phase loads | motors, transformer windings, transmission, generators |

!FIG[star-delta]

### Worked example 1 — phase values from line values

A delta-connected three-phase system has a line current of 10 A and a line
voltage of 230 V. Find the phase current and phase voltage.

- Formula: I-P = I-L divided by 1.732
- Substitute: I-P = 10 A divided by 1.732
- Arithmetic: I-P = **5.77 A**
- Voltage: V-P = V-L = **230 V**

### Worked example 2 — a delta motor on a 400 V supply

A three-phase motor is delta connected and each winding has an impedance of
10 ohms. It is fed from a star-connected 230/400 V supply. Find the winding
current and the line current.

- Each winding sits across the full line voltage: V-P = 400 V
- Winding current: I-P = V-P divided by Z = 400 V divided by 10 ohms = **40 A**
- Line current: I-L = 1.732 x I-P = 1.732 x 40 A = **69.3 A**

Because the supply is star connected and star line current equals star phase
current, the alternator or transformer windings also carry 69.3 A. This is a
classic interconnected system: a delta load fed from a star source, each side
obeying its own rules.

### Worked example 3 — the same heater in delta

Three 11.5 ohm elements are connected in delta to the same 230/400 V supply.

- V-P = V-L = 400 V
- I-P = 400 V divided by 11.5 ohms = **34.78 A**
- I-L = 1.732 x 34.78 A = **60.2 A**

Compare that with the star connection of the same elements, which drew 20 A
per element. Reconnecting a load from star to delta triples its power, and
that is the basis of the star-delta starter: start the motor in star at a
third of the power and inrush, then switch to delta for running.

## Open delta

Three-phase can be produced from only two windings. Connect the start of one
winding to the end of the other, and take the three line connections from the
two free ends and the junction. This is the **open delta** or V connection.
Two transformers instead of three is cheaper to install, and a third can be
added later to close the delta.

The catch is capacity. In a closed delta the power is:

P = 1.732 x V-L x I-L x power factor, or equivalently 3 x V-L x I-P x PF

With one winding missing there are only two current paths, and the total power
becomes:

P open delta = 1.732 x V-L x I-P x PF

Taking the ratio of open to closed, the V-L, I-P and PF terms cancel:

1.732 divided by 3 = 0.577

So an open delta bank can only deliver **57.7%** of the power of the same
three windings closed. Not two thirds, as most people guess — the two
remaining windings are not working in phase with each other. Worked as
numbers: three 100 kVA transformers in closed delta give 300 kVA, while two of
them in open delta give 173 kVA, not 200 kVA.

## Getting a winding backwards

In star a reversed winding gives reduced voltages. In delta it gives the
opposite problem, and a far more violent one.

Reverse the ends of one winding and its voltage shifts by 180 degrees. Now,
instead of the three winding voltages summing to zero around the loop, the
reversed winding adds to the other two. Around the loop you get twice the
phase voltage. On a 400 V delta system that is **800 V** appearing across the
gap where the triangle would close.

Close the triangle on that and you have created a short circuit around the
windings themselves. The 800 V drives an enormous circulating current through
the winding impedance, and the windings burn out very quickly. Nothing outside
the delta may show any fault at all until the smoke appears.

>! Never close the last connection of a delta group without proving it first.
>! Leave one junction open, connect a voltmeter across the two open ends and
>! energise. A correct delta reads zero volts. A reversed winding reads twice
>! the phase voltage — 800 V on a 400 V system. Only close the loop on a zero
>! reading. Take care that dissimilar ends are joined: a2 to b1, never a2 to
>! b2.

## Losing a supply line to a delta load

If one supply line to a delta-connected load is lost — a broken conductor, a
dropped fuse, an open pole in a contactor — the load does not stop. Suppose
line B is lost from a delta load fed at 400 V. The system becomes single
phase: 400 V still exists between the two remaining lines A and C, so:

- Winding 1, connected directly between A and C, still has 400 V across it and
  carries its full current.
- Windings 2 and 3 are now in series with each other, and that series pair is
  in parallel with winding 1 across A and C. Their impedances add, so each
  carries about half its normal current.

The motor may keep turning, badly, with grossly unbalanced winding currents,
noise and heat. This is single phasing, and it is one of the most common ways
of destroying a three-phase motor. It is exactly why motor protection should
respond to phase failure and unbalance, not just total current.

## What to remember

- Delta: V-L = V-P, I-L = 1.732 I-P, line current leads phase current by 30
  degrees, no neutral.
- The same load in delta draws three times the power it does in star — the
  basis of star-delta starting.
- Open delta gives only 57.7% of closed delta capacity.
- A reversed winding in delta produces twice the phase voltage around the loop
  and destructive circulating current; always prove the last junction at zero
  volts before closing it.
- Losing one line turns a delta load into a single-phase series-parallel
  circuit; the load runs on, unbalanced and overheating.
`,
        quiz: [
          {
            q: "A delta-connected three-phase load draws 30 A in each line. What current flows in each winding?",
            options: ["30 A", "51.9 A", "17.3 A", "10 A"],
            answer: 2,
            explain: "In delta the line current is 1.732 times the phase current, so the phase current is 30 divided by 1.732 = 17.3 A. Multiplying by 1.732 instead of dividing gives 51.9 A, which would be the line current if 30 A were flowing in the windings.",
          },
          {
            q: "Three transformers of 50 kVA each are connected in closed delta. If one is removed and the bank is run in open delta, what capacity remains?",
            options: ["100 kVA", "150 kVA", "86.6 kVA", "75 kVA"],
            answer: 2,
            explain: "Open delta delivers 57.7% of the closed delta rating: 150 kVA x 0.577 = 86.6 kVA. The intuitive answer of 100 kVA is wrong because the two remaining windings do not deliver their power in phase with each other, so their outputs add as phasors rather than arithmetically.",
          },
          {
            q: "Before closing the final junction of a 400 V delta winding group, a voltmeter across the two open ends reads 800 V. What should you do?",
            options: [
              "Close the connection — 800 V is the normal open-circuit reading",
              "Do not close it; one winding is reversed and closing the loop would cause a destructive circulating current",
              "Close it but fit a larger fuse",
              "Reverse all three windings and retest",
            ],
            answer: 1,
            explain: "A correctly connected delta reads zero across the last open junction, because the three winding voltages sum to zero around the loop. Twice the phase voltage means one winding is connected the wrong way round. Closing it puts 800 V around a loop of winding impedance and burns the windings out. Reversing that one winding, not all three, is the fix.",
          },
          {
            q: "One supply line to a delta-connected motor is lost. What happens?",
            options: [
              "The motor stops immediately because a delta load needs all three lines",
              "The motor is unaffected because delta has no neutral",
              "The load becomes a single-phase series-parallel circuit with badly unbalanced winding currents and overheating",
              "The winding voltages double",
            ],
            answer: 2,
            explain: "The remaining two lines still have full line voltage between them. One winding sits directly across them, and the other two are in series across the same pair, so current still flows by two unequal paths. The motor keeps running, unbalanced and overheating — single phasing — which is why protection must detect phase failure and not just overcurrent.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "four-wire-neutral",
        title: "The four-wire system, the neutral and unbalanced loads",
        minutes: 13,
        simple: "The fourth wire is the neutral, and it is the return path that holds every single-phase load at its correct 230 V. If the loads on the three phases are identical the neutral carries nothing at all. If they are not, it carries the difference, which is why the neutral is never fused, never switched alone, and never allowed to go open circuit.",
        refs: REFS_NEUTRAL,
        content: `
A three-phase four-wire system is three line conductors plus a neutral taken
from the star point of the supply transformer and earthed there. Almost every
building in Australia is fed this way. The three lines do the work; the neutral
does something less obvious but every bit as important, and misunderstanding
it is behind a large share of serious electrical incidents.

## What the neutral is actually for

Two jobs, and they are different.

**Job one: it fixes the voltage of each phase.** Connect three identical
single-phase loads, one to each phase, and join their far ends together. Those
joined tails form a star point at the load. With identical loads that point
sits naturally at zero volts and each load gets its correct 230 V without any
neutral at all. Make the loads different, though, and the load star point
drifts away from zero. The lightly loaded phase now has more than 230 V across
it and the heavily loaded phase less. Tying the load star point back to the
supply star point with a neutral conductor pins it at zero volts, so every
phase keeps its 230 V no matter what the other two are doing.

**Job two: it carries the out-of-balance current.** Whatever current is left
over when the three line currents are added as phasors has to go somewhere.
That is the neutral current, and its size is the measure of how unbalanced the
installation is.

## Balanced and unbalanced loads

There are two conditions for a load to be balanced, and both must be met:

1. The current in each phase must be the same.
2. Each of those currents must have the same power factor.

Meet both and the phasor sum of the three line currents is zero, so the neutral
current is zero. Miss either one and current flows in the neutral.

Look at what that means instant by instant. On a balanced load, at the moment
A phase is at its positive peak of, say, 1 A, B and C are each at minus 0.5 A.
Add them: 1 minus 0.5 minus 0.5 = 0. A quarter of the way on, A is passing
through zero, B is at plus 0.866 A and C at minus 0.866 A. Again zero. The
three currents are changing constantly in both size and direction, yet at every
single instant they add to nothing. Nothing is left over for the neutral to
carry.

| Load type | Typical examples | Neutral current |
|---|---|---|
| Balanced three-phase load | three-phase motor, three-phase hot water element, three-phase heater bank | zero |
| Unbalanced load | main switchboard mixing stove, air conditioner, hot water and lighting; street distribution feeding individual houses | equal to the phasor sum of the line currents, reversed |

A genuine three-phase load, where all three windings or elements have the same
impedance, is balanced by construction and needs no neutral. That is why a
three-phase motor is fed with three wires and an earth. The neutral only
appears if control gear inside the equipment needs 230 V.

Distribution boards are the opposite case. A house full of single-phase
appliances switching on and off can never be perfectly balanced, and a street
where four houses hang off each phase never is. Balance is the aim — spread
the single-phase circuits across the phases as evenly as the connected loads
allow — but service rules accept a degree of imbalance in practice.

## Sizing the neutral

Clause 3.5.2 of AS/NZS 3000:2018 sets the rule: the neutral must have the same
current-carrying capacity and cable size as the active conductor for a
single-phase circuit, and as the largest associated active conductor for a
multiphase circuit. In other words, do not treat the neutral as a lesser
conductor.

The clause also requires the harmonic content of the load to be considered,
and this is where modern installations catch people out. Third harmonic
currents, and the odd multiples of it — the triplen harmonics — do not cancel
in the neutral the way the fundamental does. They arrive in all three phases at
the same instant and add arithmetically instead. Electronic ballasts,
switch-mode power supplies, LED drivers, computers and variable-speed drives
all generate them. In a heavily loaded office or data hall the neutral current
can exceed the line currents even when the loads look perfectly balanced on a
clamp meter set to average sensing.

A reduced neutral is permitted in a multiphase circuit only where either a
detection device is fitted and arranged to stop the neutral current exceeding
its capacity, or the circuit predominantly supplies multiphase equipment and
the neutral capacity will not be exceeded by out-of-balance and harmonic
currents.

## The broken neutral

This is the single most dangerous fault in a four-wire system.

**Shock risk.** An appliance on one phase at 230 V simply stops working when
the neutral opens. It looks dead. It is not: the active conductor is still
connected and still live. Someone investigating a dead appliance can contact
the active, complete the circuit through their body to earth, and be
electrocuted.

**MEN risk.** Under the Multiple Earthed Neutral system, the neutral and the
earthing system are connected at the main switchboard, so the earth conductors
and every earthed metal part in the installation take their potential from the
neutral. Break the supply neutral and that potential can rise towards mains
voltage. Exposed metalwork — a stove, a tap, a metal appliance case — can then
become live, right across the installation.

**Voltage chaos on unbalanced loads.** With the neutral gone the load star
point is free to drift:

- The voltage across the lightest loaded phase rises, sometimes far above
  230 V, which cooks electronics and lamps.
- The voltage across the heaviest loaded phase falls, so motors stall and heat.
- The third phase may go either way.
- The power factors of the individual line currents can shift as well.

Anything upstream of the break is unaffected. Single-phase loads and unbalanced
three-phase loads downstream of it are all affected at once, which is the
diagnostic signature: several unrelated circuits misbehaving, some with high
voltage and some with low, all fed from the same board.

>! Never fit a fuse or a single-pole switch in a neutral. Under normal
>! installation conditions the neutral is never fused. Neutral links and
>! switches in substations are bolted or locked for the same reason. If the
>! neutral opens while the actives stay connected, earthed metalwork can rise
>! to near mains potential and equipment that appears dead is still live.
>! Before disconnecting a neutral link at a live board, prove there is no
>! current in it and no potential difference across the link.

## On the job

- Spread single-phase circuits across the three phases as evenly as the
  connected load allows, and record which phase each circuit is on.
- Measure the neutral current at a board with a clamp meter. It should be
  modest. A neutral current approaching or exceeding a line current says
  either a badly unbalanced board or serious triplen harmonics.
- Use a true RMS clamp meter. An average-responding meter will under-read
  harmonic-rich neutral current and hide the problem.
- Treat a neutral as a live conductor at all times, because under a fault it is.
- Investigate any complaint of lamps brightening in one part of a building
  while equipment fails elsewhere as a suspected lost neutral, urgently.
`,
        quiz: [
          {
            q: "What are the two conditions that must both be met for a three-phase load to be balanced?",
            options: [
              "Equal current in each phase, and equal power factor in each phase",
              "Equal current in each phase, and a neutral conductor connected",
              "Equal voltage on each phase, and equal cable length",
              "Equal resistance in each phase, and a star connection",
            ],
            answer: 0,
            explain: "Balance requires the three line currents to be equal in magnitude and to have the same phase angle relative to their own phase voltage. Equal currents at different power factors will still leave a phasor sum, and therefore neutral current. Equal voltages are supplied anyway and do not by themselves balance the load.",
          },
          {
            q: "Why can the neutral current of an apparently balanced office lighting board exceed the line currents?",
            options: [
              "Because the neutral is normally a smaller conductor",
              "Because third harmonic and other triplen currents arrive in phase in all three phases and add arithmetically in the neutral",
              "Because the neutral carries earth fault current continuously",
              "Because 230 V loads always draw more than 400 V loads",
            ],
            answer: 1,
            explain: "The fundamental currents of a balanced load cancel in the neutral because they are 120 degrees apart. Triplen harmonics generated by electronic ballasts, drivers and switch-mode supplies are in phase with each other in all three phases, so they add instead of cancelling. AS/NZS 3000 Clause 3.5.2 requires this to be considered when sizing the neutral.",
          },
          {
            q: "A three-phase motor with equal winding impedances is fed from a four-wire supply. How much current flows in the neutral?",
            options: [
              "One third of the line current",
              "1.732 times the phase current",
              "Zero, because the phasor sum of three equal line currents at equal power factor is zero",
              "The same as the largest line current",
            ],
            answer: 2,
            explain: "A three-phase motor is balanced by construction, so the three line currents are equal in size and phase angle and their phasor sum is zero at every instant. That is why three-phase motors are supplied with three actives and an earth, and a neutral is only run if internal control gear needs 230 V.",
          },
          {
            q: "An appliance on a 230 V circuit has stopped working following a supply neutral fault. Why is this situation dangerous?",
            options: [
              "The appliance frame is isolated from earth",
              "The active conductor remains connected and live, and under MEN the earthed metalwork can rise towards mains potential",
              "The appliance will restart without warning",
              "The circuit current increases to the fuse rating",
            ],
            answer: 1,
            explain: "A lost neutral makes equipment look dead while the active is still connected, so anyone probing inside can complete a circuit to earth through their body. Under the MEN system the earthing of the installation is referenced to the neutral, so losing it can lift exposed metalwork across the whole installation towards mains voltage.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "neutral-current",
        title: "Calculating neutral current in an unbalanced load",
        minutes: 14,
        simple: "When the three phases carry different currents, the leftover has to return down the neutral. You cannot just subtract the numbers, because the three currents peak at different moments. You break each one into an across component and an up component, add those separately, and then use Pythagoras to get the size of what is left.",
        refs: REFS_IN,
        content: `
Every switchboard you will ever work on is unbalanced to some degree, and the
size of the neutral current is what tells you how badly. This lesson is the
arithmetic behind that number. It is the same phasor addition used in
single-phase work, applied three times over.

## The rule

The current in the neutral of any three-phase four-wire system equals the
phasor sum of the three line currents, with its direction reversed:

**I-N = minus (I-A + I-B + I-C)**

The minus sign matters physically but not numerically: it says the current
flows back up the neutral toward the star point, opposite to the convention
used for the line currents. The magnitude you read on a clamp meter is the
magnitude of the phasor sum.

Two ways to get there:

- **Graphically.** Choose a scale, draw the three phase voltages 120 degrees
  apart, draw each current at its own power factor angle from its own voltage,
  then add tip to tail: draw I-B from the tip of I-A parallel to its original
  direction, then I-C from the tip of I-B. A phasor drawn from the origin to
  the final tip is the sum; reflect it 180 degrees to get I-N. Measure and
  scale it. The parallelogram method gives the same answer.
- **By calculation.** Resolve each current into horizontal and vertical
  components, add the components, then use Pythagoras. This is more accurate
  and is the method shown below.

## Setting up the angles

Take V-A as the reference at 0 degrees. Then V-B is at minus 120 degrees and
V-C is at plus 120 degrees. Each current is displaced from its own phase
voltage by its power factor angle, and a lagging current is negative:

- Angle of I-A = 0 minus the A-phase power factor angle
- Angle of I-B = minus 120 minus the B-phase power factor angle
- Angle of I-C = plus 120 minus the C-phase power factor angle

A leading power factor makes that displacement positive instead.

### Worked example 1 — the simple case, resistive loads

A distribution board carries 30 A on A phase, 20 A on B phase and 10 A on C
phase. All three loads are resistive, so all are at unity power factor. Find
the neutral current.

Step 1. Angles. Unity power factor means each current is in phase with its own
voltage, so the currents sit at 0, minus 120 and plus 120 degrees.

Step 2. Resolve into components.

| Current | Magnitude | Angle | Horizontal (I cos) | Vertical (I sin) |
|---|---|---|---|---|
| I-A | 30 A | 0 degrees | 30 x 1 = 30.00 | 30 x 0 = 0.00 |
| I-B | 20 A | minus 120 degrees | 20 x (minus 0.5) = minus 10.00 | 20 x (minus 0.866) = minus 17.32 |
| I-C | 10 A | plus 120 degrees | 10 x (minus 0.5) = minus 5.00 | 10 x 0.866 = 8.66 |
| Sum | | | 15.00 | minus 8.66 |

Step 3. Pythagoras.

- I-N = square root of (15.00 squared + 8.66 squared)
- I-N = square root of (225.0 + 75.0)
- I-N = square root of 300.0
- **I-N = 17.32 A**

Step 4. Angle, if wanted. tan of the angle = 8.66 divided by 15.00 = 0.5773,
so the resultant lies 30 degrees below the reference, and the neutral current
itself is that phasor reversed.

There is a shortcut worth knowing for the all-resistive case only:

I-N = square root of (I-A squared + I-B squared + I-C squared minus I-A x I-B
minus I-B x I-C minus I-C x I-A)

Check it: 900 + 400 + 100 minus 600 minus 200 minus 300 = 300, and the square
root of 300 is 17.32 A. The same answer. Note the useful result — 30 A, 20 A
and 10 A on the phases gives only 17.3 A in the neutral, not the 60 A you would
get if you added them arithmetically. Three-phase working is why the neutral
gets away with being no larger than an active.

### Worked example 2 — real loads at lagging power factors

A three-phase star-connected distribution system carries:

- A phase: 125 A at 0.79 power factor lagging
- B phase: 147 A at 0.85 power factor lagging
- C phase: 215 A at 0.80 power factor lagging

Find the neutral current.

Step 1. Convert power factors to angles. Lagging is negative.

- Angle A = minus the inverse cosine of 0.79 = minus 37.81 degrees
- Angle B = minus the inverse cosine of 0.85 = minus 31.79 degrees
- Angle C = minus the inverse cosine of 0.80 = minus 36.87 degrees

Step 2. Refer each to the common reference. Add the phase voltage angle.

- I-A sits at 0 minus 37.81 = minus 37.81 degrees
- I-B sits at minus 120 minus 31.79 = minus 151.79 degrees
- I-C sits at plus 120 minus 36.87 = plus 83.13 degrees

Step 3. Resolve.

| Current | Magnitude | Angle | Horizontal | Vertical |
|---|---|---|---|---|
| I-A | 125 A | minus 37.81 deg | 125 x 0.790 = 98.75 | 125 x (minus 0.613) = minus 76.64 |
| I-B | 147 A | minus 151.79 deg | 147 x (minus 0.881) = minus 129.57 | 147 x (minus 0.473) = minus 69.49 |
| I-C | 215 A | plus 83.13 deg | 215 x 0.120 = 25.75 | 215 x 0.993 = 213.45 |
| Sum | | | minus 5.07 | plus 67.33 |

Step 4. Magnitude.

- I-N = square root of (5.07 squared + 67.33 squared)
- I-N = square root of (25.7 + 4533.3)
- I-N = square root of 4559.0
- **I-N = 67.5 A**

Step 5. Angle. The resultant lies at about 94.3 degrees from the reference, so
the neutral current is that reversed — about 85.7 degrees lagging V-A.

Stand back and look at what that says. The heaviest phase is carrying 215 A
and the lightest 125 A, a difference of 90 A, yet the neutral only carries
67.5 A. The phasor geometry always works in your favour compared with simple
subtraction, which is exactly why an equally sized neutral is adequate for
normal out-of-balance duty.

### Worked example 3 — equal currents, unequal power factors

A three-phase four-wire system has 100 A in every line. The power factors are
0.9 lagging on A, 0.8 lagging on B and 0.9 leading on C. Does any current flow
in the neutral?

Step 1. Angles: minus 25.84 degrees, minus 36.87 degrees, and plus 25.84
degrees (leading, so positive).

Step 2. Referred to the reference: I-A at minus 25.84 degrees, I-B at minus
156.87 degrees, I-C at 120 plus 25.84 = plus 145.84 degrees.

Step 3. Resolve.

| Current | Horizontal | Vertical |
|---|---|---|
| I-A, 100 A at minus 25.84 deg | 90.00 | minus 43.59 |
| I-B, 100 A at minus 156.87 deg | minus 91.95 | minus 39.28 |
| I-C, 100 A at plus 145.84 deg | minus 82.76 | plus 56.15 |
| Sum | minus 84.71 | minus 26.72 |

Step 4. I-N = square root of (84.71 squared + 26.72 squared) = square root of
(7175.8 + 714.0) = square root of 7889.8 = **88.8 A**

Equal currents in all three lines, and yet nearly 89 A in the neutral — almost
as much as a line conductor carries. This is the practical proof of the second
condition for balance. A clamp meter on the three actives would show a
perfectly even 100 A, 100 A, 100 A, and an inspector who stopped there would
call the board balanced. It is not. Power factor correction capacitors left
switched in on a lightly loaded phase are a common real-world cause of exactly
this pattern.

## What the number is used for

- **Cable and link sizing.** The neutral must have the capacity of the largest
  associated active. A calculated or measured neutral current higher than that
  means the design is wrong, not that the rule can be relaxed.
- **Deciding whether a reduced neutral is allowable.** It is only permitted
  where a detection device prevents the neutral rating being exceeded, or the
  circuit predominantly supplies multiphase equipment and out-of-balance plus
  harmonic currents will not exceed the neutral capacity.
- **Diagnosing harmonics.** Calculate the neutral current the loads should
  produce, then measure it with a true RMS clamp. A measured value well above
  the calculation points to triplen harmonics rather than plain imbalance,
  because those add arithmetically instead of cancelling.

## What to remember

- I-N is the phasor sum of the three line currents, reversed.
- Resolve each current into horizontal and vertical components using its total
  angle, add the components, then take the square root of the sum of squares.
- Lagging power factor angles are negative, leading are positive.
- Unequal currents at the same power factor give a modest neutral current;
  equal currents at different power factors can give a very large one.
- Measured neutral current far above the calculated value means harmonics.
`,
        quiz: [
          {
            q: "A four-wire board carries 30 A, 20 A and 10 A, all at unity power factor. What is the neutral current?",
            options: ["60 A", "20 A", "17.3 A", "10 A"],
            answer: 2,
            explain: "The three currents are 120 degrees apart, so they must be added as phasors. Resolving gives 15.0 A horizontally and minus 8.66 A vertically, and the square root of the sum of the squares is 17.3 A. Adding the magnitudes arithmetically to get 60 A ignores the phase displacement completely.",
          },
          {
            q: "All three lines of a four-wire system carry exactly 100 A, but the power factors are 0.9 lagging, 0.8 lagging and 0.9 leading. What can you say about the neutral?",
            options: [
              "The neutral current is zero because the line currents are equal",
              "The neutral current is 300 A",
              "A substantial neutral current of about 89 A flows because the currents are at different angles",
              "The neutral current equals 100 A divided by 1.732",
            ],
            answer: 2,
            explain: "Balance needs equal currents AND equal power factors. With one leading and two different lagging angles the three phasors no longer cancel, and the sum works out at about 89 A — close to a full line current. Equal readings on a clamp meter are not proof of a balanced system.",
          },
          {
            q: "When resolving line currents to find neutral current, what angle is used for a B-phase current of 0.85 power factor lagging?",
            options: [
              "minus 31.79 degrees",
              "minus 120 minus 31.79 = minus 151.79 degrees",
              "plus 120 minus 31.79 = plus 88.21 degrees",
              "minus 85 degrees",
            ],
            answer: 1,
            explain: "The power factor angle is measured from that phase's own voltage, and V-B itself sits at minus 120 degrees from the reference V-A. The two must be added, giving minus 151.79 degrees relative to the common reference. Using minus 31.79 degrees alone would treat all three phases as if they shared one voltage.",
          },
          {
            q: "A calculation predicts about 12 A of neutral current on an office lighting board, but a true RMS clamp meter reads 38 A. What is the most likely explanation?",
            options: [
              "The clamp meter is faulty",
              "The neutral is shared with another circuit's active",
              "Triplen harmonic currents from electronic ballasts and drivers are adding in the neutral instead of cancelling",
              "The line currents are higher than assumed at unity power factor",
            ],
            answer: 2,
            explain: "The fundamental components cancel according to the phasor calculation, but third harmonic and its odd multiples are in phase in all three phases and therefore add arithmetically in the neutral. A true RMS instrument captures them, which is why the measurement exceeds a fundamental-only calculation. This is precisely the harmonic content Clause 3.5.2 requires to be considered.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "three-phase-power",
        title: "Power in three-phase circuits",
        minutes: 14,
        simple: "Three loads instead of one means three times the power, so long as they are all the same. Because it is easier to measure at the lines than inside the windings, the formula gets rearranged into the one you will actually use: 1.732 times the line voltage times the line current times the power factor. It works for star and delta alike, but only when the load is balanced.",
        refs: REFS_POWER,
        content: `
Any power calculation you do on three-phase plant — sizing a cable, checking a
motor nameplate, working out a running cost — comes back to one formula. It is
worth understanding where it comes from, because the same formula is wrong if
you apply it to an unbalanced load.

## Building the formula

Power in a single-phase a.c. circuit is P = V x I x cos of the phase angle,
where cos of the angle is the power factor. Connect three identical loads to
one supply and the total is simply three times that:

P total = 3 x V-P x I-P x power factor

That is correct for any balanced three-phase load, star or delta, and you can
use it whenever you know the phase values. The trouble is that on site you
almost never do. You can clamp a line conductor and put probes across two
lines; you cannot easily get inside a motor to measure a winding. So the
formula gets converted to line values.

**In star**, I-L = I-P and V-P = V-L divided by 1.732. Substituting:

P = 3 x (V-L divided by 1.732) x I-L x power factor = **1.732 x V-L x I-L x
power factor**

**In delta**, V-L = V-P and I-P = I-L divided by 1.732. Substituting:

P = 3 x V-L x (I-L divided by 1.732) x power factor = **1.732 x V-L x I-L x
power factor**

Identical. So for any balanced three-phase load:

**P total = 1.732 x V-L x I-L x cos of the phase angle**, with V and I as line
values.

The same pattern gives the other two members of the power triangle:

| Quantity | Symbol | Three-phase formula | Unit |
|---|---|---|---|
| Apparent power | S | 1.732 x V-L x I-L | VA or kVA |
| True power | P | 1.732 x V-L x I-L x power factor | W or kW |
| Reactive power | Q | 1.732 x V-L x I-L x sin of the phase angle | VAr or kVAr |

!FIG[power-triangle]

>! This formula applies to balanced loads only. Do not use it on an unbalanced
>! load such as a distribution board — there is no single line current or
>! single power factor to substitute, and the answer will be wrong. For
>! unbalanced loads the power in each phase must be worked out separately and
>! the three results added.

### Worked example 1 — a motor

A three-phase 400 V motor draws 12 A at a power factor of 0.85 lagging. How
much power does it consume?

- Formula: P = 1.732 x V-L x I-L x power factor
- Substitute: P = 1.732 x 400 V x 12 A x 0.85
- Arithmetic: 1.732 x 400 = 692.8; 692.8 x 12 = 8313.6; 8313.6 x 0.85 = 7066.6
- Answer: **P = 7067 W, or 7.07 kW**

Its apparent power is 1.732 x 400 x 12 = 8314 VA, so the supply and the cable
have to carry 8.31 kVA to deliver 7.07 kW of real power. The difference is what
poor power factor costs you in copper.

### Worked example 2 — a larger motor

A three-phase 400 V motor draws 15 A at 0.89 power factor lagging.

- P = 1.732 x 400 V x 15 A x 0.89
- P = 692.8 x 15 x 0.89 = 10 392 x 0.89
- **P = 9249 W, or 9.25 kW**

### Worked example 3 — the same heater in star and in delta

This is the calculation that explains star-delta starting, so work through it
carefully. Three 11.5 ohm elements are supplied from a 230/400 V system at
unity power factor.

**Connected in star:**

- Each element sees the phase voltage: V-P = 230 V
- I-P = 230 V divided by 11.5 ohms = 20 A
- Line current: I-L = I-P = 20 A
- P = 1.732 x 400 V x 20 A x 1 = 692.8 x 20 = 13 856 W
- **P star = 13.86 kW**

Check it the other way: 3 x V-P x I-P = 3 x 230 x 20 = 13 800 W. The small
difference is only the rounding of 398 V to 400 V.

**Connected in delta:**

- Each element now sees the line voltage: V-P = 400 V
- I-P = 400 V divided by 11.5 ohms = 34.78 A
- I-L = 1.732 x 34.78 A = 60.25 A
- P = 1.732 x 400 V x 60.25 A x 1 = 692.8 x 60.25 = 41 740 W
- **P delta = 41.7 kW**

The ratio: 41.7 divided by 13.86 = 3.01. The same three elements produce three
times the power in delta as in star. That single fact drives a lot of
equipment design:

- **Star-delta starters.** Start a motor with its windings in star, so it draws
  a third of the current and produces a third of the torque, then switch to
  delta for running. It limits inrush without any electronics.
- **Two-speed or two-heat elements.** A heater bank can be reconnected to give
  a low and a high output with no change of elements.
- **Nameplate voltages.** A motor marked 400/690 V runs delta on a 400 V
  supply and star on a 690 V supply — the winding sees 400 V either way.

### Worked example 4 — an interconnected system

A star-connected 230/400 V supply feeds a delta-connected motor with 10 ohms
of impedance per winding. Find the currents everywhere.

- Motor winding voltage = line voltage = 400 V (delta)
- Motor winding current = 400 V divided by 10 ohms = 40 A
- Motor line current = 1.732 x 40 A = 69.3 A
- Supply line current = motor line current = 69.3 A
- Supply winding (phase) current = line current = **69.3 A** because the supply
  is star connected

Each side keeps its own rules. Confusing which set applies where is the single
most common error in three-phase calculations, so name the connection before
you pick the formula.

### Worked example 5 — an unbalanced load

Three resistors of 10, 20 and 30 ohms are connected in star to a 230/400 V
supply. Find the total power.

Each resistor sits across 230 V, so:

- P-A = V squared divided by R = 230 x 230 divided by 10 = 52 900 divided by
  10 = 5290 W
- P-B = 52 900 divided by 20 = 2645 W
- P-C = 52 900 divided by 30 = 1763 W
- P total = 5290 + 2645 + 1763 = **9698 W, or 9.7 kW**

The line currents here are 23 A, 11.5 A and 7.67 A — all different — so there
is no single value of I-L to put into the 1.732 formula. Adding the phases is
the only correct method.

### Worked example 6 — is the circuit big enough?

A factory has three lighting circuits on a 230/400 V system, one per phase.
Each carries 120 fluorescent luminaires of 40 W at a power factor of 0.99, and
each is protected by a 20 A circuit breaker.

- Power per phase = 120 x 40 W = 4800 W
- Current per phase = P divided by (V x power factor) = 4800 divided by (230 x
  0.99) = 4800 divided by 227.7 = **21.1 A**

That exceeds the 20 A breaker, so there are too many luminaires on the circuit
before any allowance is even made for control gear losses. Total power supplied
to the three circuits = 3 x 4800 W = **14.4 kW**.

Now suppose 20 lamps fail on B phase and 30 fail on C phase:

- A phase: 120 lamps, 4800 W, 21.1 A
- B phase: 100 lamps, 4000 W, 4000 divided by 227.7 = 17.6 A
- C phase: 90 lamps, 3600 W, 3600 divided by 227.7 = 15.8 A

All three are at the same power factor, so the resistive shortcut applies:

- I-N = square root of (21.1 squared + 17.6 squared + 15.8 squared minus 21.1 x
  17.6 minus 17.6 x 15.8 minus 15.8 x 21.1)
- I-N = square root of (445 + 310 + 250 minus 371 minus 278 minus 334)
- I-N = square root of 22 = **4.7 A**

Failed lamps unbalance the board and put current into a neutral that carried
almost nothing before.

## What to remember

- P = 1.732 x V-L x I-L x power factor, for balanced loads in star or delta.
- The same load in delta takes three times the power it takes in star.
- Apparent power S = 1.732 x V-L x I-L; the difference between S and P is what
  a poor power factor costs in cable and switchgear.
- For unbalanced loads, calculate each phase and add. Never use the 1.732
  formula.
- Name the connection — star or delta, source or load — before choosing which
  relationship to apply.
`,
        quiz: [
          {
            q: "A balanced three-phase 400 V load draws 25 A at 0.8 power factor lagging. What real power does it consume?",
            options: ["8.0 kW", "13.9 kW", "20.0 kW", "17.3 kW"],
            answer: 1,
            explain: "P = 1.732 x 400 x 25 x 0.8 = 692.8 x 25 x 0.8 = 13 856 W, or 13.9 kW. The 17.3 kW figure is the apparent power in kVA with the power factor left out, and 8.0 kW is a single-phase calculation.",
          },
          {
            q: "Why does the formula P = 1.732 x V-L x I-L x power factor give the same result for star and for delta?",
            options: [
              "Because star and delta always draw the same current",
              "Because in star the voltage is divided by 1.732 while in delta the current is, so the substitution into 3 x V-P x I-P x PF gives the same expression either way",
              "Because power factor corrects for the difference",
              "Because the 1.732 applies to voltage in both connections",
            ],
            answer: 1,
            explain: "Both connections start from P = 3 x V-P x I-P x PF. In star, V-P = V-L divided by 1.732; in delta, I-P = I-L divided by 1.732. Either substitution turns the 3 into 1.732 and leaves line values, so the final formula is identical even though the loads themselves behave very differently.",
          },
          {
            q: "A three-phase heater bank draws 12 kW when connected in star. What will the same elements draw in delta on the same supply?",
            options: ["4 kW", "12 kW", "20.8 kW", "36 kW"],
            answer: 3,
            explain: "Each element goes from the 230 V phase voltage to the 400 V line voltage, so the current through it rises by 1.732 and the power by 1.732 squared, which is 3. Three times 12 kW is 36 kW. This is why a star-delta starter limits starting current and torque to a third of the delta values.",
          },
          {
            q: "A distribution board has line currents of 23 A, 11.5 A and 7.7 A. How should its total power be calculated?",
            options: [
              "Use 1.732 x V-L x average I-L x power factor",
              "Use 1.732 x V-L x largest I-L x power factor",
              "Calculate the power in each phase separately and add the three results",
              "Multiply the single-phase power of the largest load by three",
            ],
            answer: 2,
            explain: "The 1.732 formula assumes one line current and one power factor common to all three phases, which is untrue here. For an unbalanced load, each phase must be evaluated on its own phase voltage, current and power factor, and the three powers added. Using an average or the largest current will give a wrong answer.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "power-measurement",
        title: "Measuring three-phase power and correcting power factor",
        minutes: 14,
        simple: "A wattmeter watches the voltage and the current at the same time and multiplies them, so it reads real power rather than just volts times amps. On three phase you can use one meter moved from phase to phase, two meters whose readings are added, or three meters. Once you know the real power and the apparent power you know the power factor, and capacitors are how you fix it.",
        refs: REFS_MEAS,
        content: `
You cannot work out real power from a voltmeter and a clamp meter alone,
because you do not know the phase angle between them. A wattmeter does know,
and on three-phase there are several standard ways of connecting one, two or
three of them. Knowing which method suits which system — and which will lie to
you — is the point of this lesson.

## How a wattmeter works

The classic instrument uses a dynamometer movement with two circuits. A fixed
coil carries the load current, and a moving coil in series with a high value
resistor carries a current proportional to the load voltage. The deflection
depends on the product of the two fields, which is voltage times current times
the cosine of the angle between them — real power. Because it depends on the
actual product rather than on separate readings, it works on d.c. and on a.c.
alike, and it responds correctly to a distorted waveform.

The movement is accurate but fragile, temperature sensitive and needs
occasional recalibration. Electronic instruments took over slowly because
multiplying two rapidly varying quantities is difficult in analogue
electronics; only digital and computerised instruments really replaced the
moving-coil wattmeter.

## One wattmeter, four-wire system

Connect the current coil in one line and the voltage coil from that line to the
neutral. You are then measuring the power of one phase.

- Balanced load: P total = 3 x the reading.
- Unbalanced load: connect or switch the meter into each phase in turn and add
  the three readings, P total = P-A + P-B + P-C.

| Advantages | Disadvantages |
|---|---|
| Only one instrument needed | A neutral connection is essential |
| Works on balanced and unbalanced loads | Not accurate on a fluctuating unbalanced load, because the three readings are taken at different times |
| Cheap and simple | The meter must be moved or switched through each phase; the switch must never break the line while it is under load |

## One wattmeter, three-wire system

With no neutral there is no correct reference point for the voltage coil, and
because the line voltage leads the phase voltage by 30 degrees, connecting the
voltage coil across a line pair would give a wrong angle. The solution is an
**artificial star point**: two impedances that closely match the impedance of
the wattmeter's own voltage circuit are connected from the other two lines to
form a star with it. The accuracy of the reading depends entirely on how well
those two impedances match the meter, so they must be very close.

Balanced load: P total = 3 x the reading. Unbalanced: switch through each phase
and add. The disadvantages are those of the four-wire method, plus the need for
the two matched impedances.

## Two wattmeters, three-wire system

This is the standard workshop method for three-wire loads. Put the current
coils of two wattmeters in any two lines and connect both voltage coils to the
third line. Neither meter on its own means anything, but their **algebraic**
sum is the total power:

**P total = W1 + W2**

The word algebraic is doing real work there, because one reading can be
negative:

- Balanced load at unity power factor: both meters read the same.
- As the power factor falls, the lower reading W1 falls faster than the total.
- At a power factor of exactly 0.5 with a balanced load, W1 reads zero and W2
  alone reads the total power.
- Below 0.5, W1 tries to read backwards. Reverse its current or voltage
  connections to get a number, and treat that number as negative:
  P total = W2 minus W1.
- On a purely reactive load, W1 reads the same magnitude as W2 but negative, so
  the sum is zero — exactly right, since a purely reactive circuit consumes no
  real power.

For a balanced load only, the readings also give the power factor:

angle = inverse tangent of [1.732 x (W1 minus W2) divided by (W1 + W2)]

and the power factor is the cosine of that angle. It holds only for balanced
loads and sinusoidal waveforms.

### Worked example 1 — a lightly loaded motor

Two wattmeters on a three-phase motor read 5 kW and 1 kW, with the second
meter's connections reversed to obtain a reading. Find the total power and the
power factor.

- P total = W1 + W2 = 5 + (minus 1) = **4 kW**
- Angle = inverse tangent of [1.732 x (5 minus (minus 1)) divided by (5 + (minus 1))]
- Angle = inverse tangent of [1.732 x 6 divided by 4]
- Angle = inverse tangent of 2.598 = 68.9 degrees
- Power factor = cos 68.9 degrees = **0.36 lagging**

A motor running at 0.36 power factor is running almost unloaded. The
calculation has just diagnosed an oversized motor.

### Worked example 2 — a loaded motor

Two wattmeters are used to measure the input of a 230/400 V three-phase
induction motor. Both read positive, W1 = 13.5 kW and W2 = 7.5 kW. Determine
the power input, the power factor and the line current.

- P total = 13.5 + 7.5 = **21 kW**
- Angle = inverse tangent of [1.732 x (13.5 minus 7.5) divided by 21]
- Angle = inverse tangent of [1.732 x 6 divided by 21] = inverse tangent of
  0.4949 = 26.3 degrees
- Power factor = cos 26.3 degrees = **0.896 lagging**
- Line current from P = 1.732 x V-L x I-L x PF, so I-L = P divided by (1.732 x
  V-L x PF)
- I-L = 21 000 divided by (1.732 x 400 x 0.896) = 21 000 divided by 620.7
- **I-L = 33.8 A**

>! The two-wattmeter method must not be used on a four-wire star-connected
>! system. A single-phase component of current can return through the neutral
>! without passing through either current coil, so the reading will simply be
>! wrong — and wrong in a way that looks perfectly plausible. Four wires means
>! three wattmeters, or one moved through each phase.

## Three wattmeters

**Three-wire system.** Where no neutral exists but three identical meters are
available, their three voltage circuits can be joined to form their own star
point, so no external matched impedances are needed. P total = W1 + W2 + W3.

**Four-wire system.** A four-wire supply is really three separate single-phase
supplies with a common neutral, so one wattmeter per phase, each with its
voltage coil to the neutral, is the natural arrangement. P total = W1 + W2 + W3.

Both arrangements suit balanced and unbalanced loads, give the total directly
with no sign traps, and — because all three phases are read at the same instant
— are far more accurate on fluctuating loads than one meter switched around.
The only drawback is needing three instruments.

| Method | System | Balanced | Unbalanced | Key limitation |
|---|---|---|---|---|
| One wattmeter | four-wire | yes, x 3 | yes, switched | needs neutral; inaccurate on fluctuating loads |
| One wattmeter | three-wire | yes, x 3 | yes, switched | needs two matched impedances for an artificial star |
| Two wattmeters | three-wire | yes | yes | must not be used on four-wire; watch the sign of W1 |
| Three wattmeters | three-wire | yes | yes | three instruments; artificial star from the voltage coils |
| Three wattmeters | four-wire | yes | yes | three instruments |
| Electronic analyser | either | yes | yes | needs a battery |

## Electronic meters and analysers

A modern three-phase power meter measures all three line voltages and all three
line currents, using current transformers where the current is beyond direct
connection. Digital instruments convert voltage and current with
analogue-to-digital converters and take the phase angle from zero crossings,
then compute true, apparent and reactive power, power factor, phase angle,
frequency, total harmonic distortion and true RMS values, some displaying
waveforms or phasors. They suit any load on a three- or four-wire system, need
no calculations, are rugged and often IP56 or better, and are selected by push
button. The realistic disadvantage is that they need a battery.

Other instruments you will meet:

| Instrument | How it works | Typical range or use |
|---|---|---|
| Handheld wattmeter | Battery powered, true RMS, rotary range switch for V, I and W | To about 750 V and 20 A, roughly 400 W to 15 kW, 15 Hz to 1 kHz, about 5% accuracy |
| Bench wattmeter | Mains powered laboratory instrument, much higher accuracy | To about 1000 V and 10 A, d.c. to about 15 kHz, 250 mW to 10 kW |
| VA and VAr meter | VA is simply V x I; VAr comes from the power triangle, VAr = square root of (VA squared minus P squared) | Reactive load assessment, supply authority monitoring |
| Power factor meter | Computed from P and VA, or from the time between voltage and current zero crossings smoothed into a proportional voltage | Half scale is unity, less is leading, more is lagging |
| Energy meter | A wattmeter that integrates power over time, and logs data for later harvesting | kWh billing, tariff and demand analysis |
| Frequency meter | Times the period of one cycle and inverts it | Hundredths of a hertz, updated many times a second |
| High-frequency wattmeter | Heating effect of the current on a thermocouple | Well above power frequencies |
| Ultra-high-frequency wattmeter | Parallel lines, one carrying load current and one with a voltage induced, rectified against a calibrated scale | Above 300 MHz |
| THD meter | Displays harmonic content, spikes and supply distortion | Diagnosing overheated neutrals, nuisance tripping, transformer heating |

>! On high-energy circuits, always work through current transformers and
>! potential transformers rather than connecting instruments directly. In power
>! stations and substations the CTs and PTs are permanently installed and the
>! instruments live in the control room. Never open-circuit the secondary of an
>! energised CT — dangerous voltages appear across the open terminals.

## Reactive power and why the supplier cares

Under conditions of supply, distributors generally require an installation's
overall power factor to be no worse than 0.9 lagging. That keeps circulating
VArs out of their mains. Where several power stations feed one grid it is
useful to know how much reactive power is moving between them, so reactive
readouts are provided in the control room.

There is an irony worth knowing: long transmission lines have significant
capacitance between conductors, so a lightly loaded line can produce a
**leading** power factor. The reactive current circulating up the line can push
the voltage up at the far end, and the effect is worse on underground cables
than on overhead lines.

## Correcting the power factor

The theory is exactly the same as for single phase — add capacitive reactive
power to cancel the inductive reactive power of motors and other magnetic
loads. What differs is where the equipment goes. In single-phase work the
capacitor tends to sit inside the equipment at its supply terminals. In a
three-phase installation, power factor correction is usually a separate
assembly close to the point of supply, built as three- or four-wire equipment,
often with contactor-switched capacitor steps controlled by a relay that
watches the incoming power factor.

### Worked example 3 — sizing correction for a factory

A 400 V three-phase factory load draws 50 kW at 0.75 power factor lagging.
Correct it to 0.95 lagging.

Step 1. Reactive power now.

- Angle 1 = inverse cosine of 0.75 = 41.41 degrees; tan 41.41 = 0.882
- Q1 = P x tan of angle 1 = 50 kW x 0.882 = **44.1 kVAr**

Step 2. Reactive power wanted.

- Angle 2 = inverse cosine of 0.95 = 18.19 degrees; tan 18.19 = 0.329
- Q2 = 50 kW x 0.329 = **16.4 kVAr**

Step 3. Capacitive kVAr needed.

- Q-C = Q1 minus Q2 = 44.1 minus 16.4 = **27.7 kVAr total**, which is 9.22 kVAr
  per phase

Step 4. What it saves in current.

- Before: I-L = P divided by (1.732 x V-L x PF) = 50 000 divided by (692.8 x
  0.75) = 50 000 divided by 519.6 = **96.2 A**
- After: I-L = 50 000 divided by (692.8 x 0.95) = 50 000 divided by 658.2 =
  **76.0 A**

Twenty amps per phase less for exactly the same 50 kW of useful work — less
heating in the mains, less voltage drop and headroom to add load.

Step 5. Capacitance, if you are specifying capacitors rather than a kVAr
rating. Using C = Q per phase divided by (2 x pi x f x V squared):

- Delta connected, each capacitor across 400 V: C = 9220 divided by (314.16 x
  400 x 400) = 9220 divided by 50 265 600 = **183 microfarad per phase**
- Star connected, each capacitor across 230 V: C = 9220 divided by (314.16 x
  230 x 230) = 9220 divided by 16 619 064 = **555 microfarad per phase**

Delta-connected capacitors need only a third of the capacitance for the same
correction, which is why correction banks are normally delta connected — but
each capacitor must then be rated for the full line voltage.

>! Power factor correction capacitors store charge and remain dangerous after
>! isolation. Discharge resistors are fitted for that reason, but they take
>! time to work. Isolate, wait the manufacturer's stated discharge time, then
>! prove dead and short the terminals to earth before touching them. Never
>! connect correction capacitors on the load side of a variable-speed drive.

## What to remember

- A wattmeter reads real power because it multiplies instantaneous voltage and
  current; volts times amps from separate meters gives VA, not W.
- One wattmeter: multiply by three for a balanced load, or switch through each
  phase and add for an unbalanced one.
- Two wattmeters: three-wire only, add algebraically, and W1 goes negative
  below 0.5 power factor.
- Three wattmeters: works for anything, most accurate on fluctuating loads.
- Power factor from two wattmeters is valid only for balanced sinusoidal loads.
- Correct power factor with capacitors near the point of supply; delta
  connection needs a third of the capacitance of star.
`,
        quiz: [
          {
            q: "Two wattmeters on a balanced three-wire load read 8 kW and 4 kW, both positive. What is the total power and the power factor?",
            options: [
              "4 kW at 0.5 power factor",
              "12 kW at 0.866 power factor",
              "12 kW at unity power factor",
              "8 kW at 0.866 power factor",
            ],
            answer: 1,
            explain: "Total power is the algebraic sum: 8 + 4 = 12 kW. The angle is the inverse tangent of 1.732 x (8 minus 4) divided by 12 = the inverse tangent of 0.577 = 30 degrees, so the power factor is cos 30 = 0.866. Subtracting the readings gives the reactive information, not the power, and only two equal readings would mean unity power factor.",
          },
          {
            q: "Why must the two-wattmeter method not be used on a four-wire star-connected system?",
            options: [
              "Because the meters would be damaged by the neutral current",
              "Because a single-phase current component can return through the neutral without passing through either current coil, so the power is not correctly recorded",
              "Because there is no line voltage to connect the voltage coils to",
              "Because four-wire systems are always balanced",
            ],
            answer: 1,
            explain: "The method relies on all the load current passing through the two current coils. A neutral gives current another path home, so any single-phase component returning that way is never measured. The reading still looks reasonable, which makes the error more dangerous than an obvious failure.",
          },
          {
            q: "One wattmeter connected between one line and neutral of a balanced four-wire load reads 50 W. What is the total power?",
            options: ["50 W", "86.6 W", "150 W", "16.7 W"],
            answer: 2,
            explain: "The meter is reading the power of one phase only. For a balanced load the other two phases consume the same, so the total is three times the reading, 150 W. The 1.732 factor belongs to the line-value power formula, not to summing the phases.",
          },
          {
            q: "A 400 V plant draws 50 kW at 0.75 power factor. What is the main practical benefit of correcting it to 0.95?",
            options: [
              "The plant consumes less real power",
              "The line current falls from about 96 A to about 76 A for the same useful output, reducing heating and voltage drop",
              "The supply voltage rises to 415 V",
              "The motors run faster",
            ],
            answer: 1,
            explain: "Correction does not change the real power the plant needs; it reduces the reactive component, so the current the cables and switchgear must carry drops from 96.2 A to 76.0 A. That means less I squared R heating, less voltage drop and spare capacity in existing mains. Motor speed is set by frequency and poles and is unaffected.",
          },
        ],
      },

      /* ---------------------------------------------------------------- */
      {
        id: "grid-and-fault-loop",
        title: "From the grid to the fault loop: distribution, SWER and earthing",
        minutes: 15,
        simple: "The grid is so much bigger than any load you will connect that its voltage and frequency never budge, so you can treat 230/400 V at 50 Hz as fixed. Power travels at very high voltage to keep the current, and therefore the losses, small. At the other end of the story, when a fault happens, the current has to run a complete loop back to the transformer, and that loop must have low enough impedance to trip the protection quickly.",
        refs: REFS_GRID,
        content: `
Everything so far has assumed a supply that simply is 230/400 V at 50 Hz. This
lesson is about where that supply comes from, how it reaches a rural fence line
or a suburban switchboard, and what happens in the instant a fault occurs.

## The infinite grid

The distribution network is so large compared with any load you will connect
that for practical purposes it is infinite. Put it in numbers: a load drawing
100 A per phase at 230/400 V sounds substantial, but a fairly modest 500 MW
power station can supply over 700 000 A per phase at 230 V, and the grid as a
whole is far larger again.

The consequence for calculations is a gift. The voltage, the frequency and the
120 degree separation between phases are fixed and cannot be shifted by
anything you connect. So you may always assume 230/400 V, 50 Hz and 120 degree
spacing. Engineers designing large plant still have to account for supply
impedance; for installation work you do not.

## Why transmission voltage is so high

Power could be sent at low voltage and high current, but losses in the line are
I squared R — proportional to the square of the current. Double the current and
you quadruple the heat lost in the conductors. For a given power, raising the
transmission voltage lowers the current in direct proportion, so the losses
fall by the square of that factor, and the conductor can be smaller as well.
Higher transmission voltage therefore means both lower losses and cheaper
lines, which is why distances of hundreds of kilometres are covered at voltages
up to about 500 kV or more.

Consumers cannot use those voltages, so the level is stepped down in stages:

| Stage | Typical voltage |
|---|---|
| Generator terminals | 11, 16 or 26 kV |
| Transmission lines | 132 kV up to about 500 kV or more |
| Sub-transmission lines | 11, 33 or 66 kV |
| Distribution substation output | 230/400 V |
| Consumer installation | 230/400 V three phase, or 230 V single phase |

Values vary between states and territories and even within one state.

## Redundancy: duplication and ring feeds

Main transmission and sub-transmission lines are usually duplicated with
alternative routes, so a locality can be fed another way during maintenance or
after a breakdown. Some distribution systems are **ring fed** — the lines form
a complete loop, so a faulted section can be isolated while the rest of the
ring keeps supplying customers from the other direction.

>! A ring-fed section can be energised from either end. Two disconnections are
>! needed to make a section safe, not one. Isolating the obvious source and
>! assuming the line is dead has killed people. Prove dead at the point of work
>! after both isolations, and apply your own locks and tags to both.

## SWER

In rural areas the loads are small and spread over long distances, and a
conventional three-wire line is uneconomic. The Single-Wire Earth-Return system
runs one conductor across country and uses the earth itself as the return path.

- An isolating transformer may be connected to the sub-transmission line, with
  its secondary feeding the single conductor. Line voltages are typically about
  16 kV or 19 kV depending on the state and locality.
- If the isolating transformer is omitted, the SWER line can be taken directly
  from one conductor of a three-phase 33 kV line, in which case the voltage to
  earth is 19 kV. Where several SWER lines leave in different directions from
  different phases, the three-phase line stays reasonably balanced.
- Because the voltage is high, both the line current and the earth-return
  current are small.
- At the consumer end a SWER distribution transformer has two secondary
  windings. Connected in parallel they give 230 V; connected in series they
  give 460 V at half the current.

SWER is not used in built-up areas. Earth-return currents in ground containing
a lot of buried metal cause electrolytic corrosion, and the bonding needed to
control it would make the system uneconomic.

## Three-wire and four-wire distribution

A three-wire system uses only the three line conductors. The source windings
may be delta, or star with the star point earthed or not. A four-wire system
adds the neutral, taken from the star point and earthed.

For the supply authority either arrangement is workable. For the consumer, star
is clearly better: it offers a choice of voltages and an earth reference point,
which is what makes MEN earthing and shock protection possible. Delta is used
where the phase currents differ little and the extra conductor is not wanted —
generators, motors, and high-voltage transmission and distribution. All
low-voltage consumer supplies in Australia are three-phase four-wire or
single-phase two-wire.

Voltage drop shapes how the low-voltage network is laid out, because consumers
furthest from the transformer receive the lowest voltage. For a small country
town, one central transformer with mains radiating from it works, with the
conductors getting smaller as distance increases. In denser suburbs each block
is fed from its own transformer and the mains are interconnected between
blocks, so any consumer can be supplied from more than one direction — at the
cost of more protective devices and greater difficulty isolating a section for
maintenance.

Inside an installation the same problem is handled by calculation. AS/NZS
3000:2018 limits the total voltage drop from the point of supply to any point
in the installation to 5% of the nominal voltage, and AS/NZS 3008.1:2017
provides the cable data used to calculate it. Working in line values matters
here: a three-phase circuit uses the three-phase voltage drop figures, not the
single-phase ones, and for the same power delivered a three-phase circuit
suffers far less drop than a single-phase one.

## Fault-loop impedance

When a fault puts an active conductor onto the metalwork of an appliance, the
exposed conductive parts become live. The protective earthing system exists to
give that current a low-impedance path back to the source, so that enough
current flows to operate the protective device quickly and disconnect the
supply. That complete path is the **fault loop**, and its impedance is the
**fault-loop impedance**.

Trace the loop from the fault: through the protective earth conductor of the
final subcircuit, through the submain earth, through the MEN connection at the
main switchboard, back along the consumer mains neutral and the supply
authority's service line neutral to the transformer star point, through the
transformer winding, then out along the service line active, the consumer mains
active, the submain active and the final subcircuit active to the point of the
fault. So the components are:

- the impedance of the supply transformer windings
- the resistance and reactance of the service line active
- the consumer mains active
- the submain active, if there is one
- the final subcircuit active
- the impedance of the fault itself, normally negligible
- the final subcircuit protective earth
- the submain protective earth, if any
- the MEN connection, normally negligible
- the consumer mains neutral
- the service line neutral

AS/NZS 3000:2018 divides that list at the protective device the final
subcircuit originates from. Everything downstream — the part under the control
of electrical workers — is the **internal fault-loop impedance**, Z-int.
Everything upstream, including the service line, distribution and transformer,
is the **external fault-loop impedance**, Z-ext, which belongs to the supply
authority and is less easily known.

### Designing to a value

Under fault conditions it is assumed that at least 80% of the nominal supply
voltage appears at the protective device, even allowing for the volt drop
caused by the large fault current. That gives the design equation:

Z-int = (0.8 x U-o) divided by I-a

where U-o is the nominal phase voltage, 230 V, and I-a is the current needed to
operate the protective device within the required disconnection time.

### Worked example — a final subcircuit

A final subcircuit is protected by a 20 A circuit breaker whose characteristic
requires 200 A to trip it within the required time. What is the maximum
permissible internal fault-loop impedance?

- Formula: Z-int = (0.8 x U-o) divided by I-a
- Substitute: Z-int = (0.8 x 230 V) divided by 200 A
- Arithmetic: 0.8 x 230 = 184 V; 184 divided by 200 = 0.92
- Answer: **Z-int = 0.92 ohms**

If the measured loop resistance of that circuit came back at 1.4 ohms, the
circuit fails: at 230 V the fault current would be too low to trip the breaker
in time, and the metalwork would stay live. The remedy is a larger active and
earth conductor, a shorter run, or a protective device that operates at a lower
current.

## Measuring it

There are two accepted methods, and they do not give the same numbers.

1. **Fault-loop impedance tester.** Connected to a live circuit under normal
   conditions, it measures the whole loop, Z-s. It works by switching a known
   resistance between a phase and earth and comparing the no-fault voltage with
   the voltage under that simulated fault, then computing the impedance in
   ohms. Compare the result with Table 8.1 of AS/NZS 3000:2018. These are
   called **hot** values, because the circuit is energised and the conductors
   can be up to the temperature limits of Table 3.2.
2. **Ohmmeter.** The method set out in AS/NZS 3017 gives a resistance value for
   the internal part of the loop only, and is compared with Table 8.2. Those
   values are **cold**: 64% of the Table 8.1 values, because the voltage at the
   protective device is taken as 80% and the de-energised conductors at ambient
   temperature have about 80% of their hot resistance. 0.8 x 0.8 = 0.64.

Getting the two tables mixed up is a classic error. A reading taken cold and
compared against the hot table will pass a circuit that should fail.

### The ohmmeter procedure

AS/NZS 3000:2018 makes fault-loop impedance testing mandatory for circuits
supplying socket outlets that are not protected by RCDs, and it must be done
before the circuit is connected to supply. AS/NZS 3017 sets out the steps:

1. Verify that the circuit is isolated from supply.
2. Bridge the active and the protective earth conductor together at the origin
   of the circuit, in the switchboard the circuit comes from.
3. Measure the resistance between the active and protective earth contacts at
   the furthest point on the circuit.
4. Compare the reading with Table 8.2 of AS/NZS 3000:2018.

Table 8.2 also lists values for the active and protective earth conductors
individually, so the earth continuity verification can be combined with this
test and save a second trip around the building.

>! Live loop testing on modern installations can trip RCDs and, on some
>! electronic equipment, cause damage. Losing supply may be a nuisance in a
>! house and a serious safety problem in an industrial plant, so plan the
>! outage before you test. WHS regulations require de-energised testing in most
>! circumstances; use the ohmmeter method against Table 8.2 unless there is a
>! justified reason to test live, and follow AS/NZS 3017 either way. A sound
>! earth return is essential both for shock protection and for RCD operation.

## What to remember

- Treat the grid as infinite: 230/400 V, 50 Hz, 120 degrees, unaffected by your
  load.
- Transmission uses high voltage because line losses go as the square of the
  current.
- Ring-fed sections need two disconnections to be made safe.
- SWER uses one conductor at about 16 to 19 kV with an earth return, and gives
  230 V or 460 V at the consumer transformer; it is unsuitable near buried
  metal.
- Consumers get star four-wire supplies for the two voltages and the earth
  reference; delta suits generation, motors and transmission.
- Fault-loop impedance must be low enough for the protective device to operate:
  Z-int = 0.8 x 230 divided by I-a.
- Live tester readings go against Table 8.1 (hot); ohmmeter readings against
  Table 8.2 (cold, 64%).
`,
        quiz: [
          {
            q: "Why is bulk electrical power transmitted at very high voltage?",
            options: [
              "Because transformers only work above 100 kV",
              "Because line losses are proportional to the square of the current, so raising voltage and lowering current cuts losses sharply and allows smaller conductors",
              "Because high voltage travels further before it decays",
              "Because consumers need high voltage for three-phase motors",
            ],
            answer: 1,
            explain: "For a fixed power, current falls in proportion as voltage rises, and I squared R losses fall as the square of that reduction. Smaller currents also permit smaller conductors, so both the running losses and the capital cost of the line fall. Voltage does not decay with distance in the way the third option suggests.",
          },
          {
            q: "A final subcircuit is protected by a device requiring 320 A to operate in the required time. What is the maximum permissible internal fault-loop impedance?",
            options: ["0.72 ohms", "0.58 ohms", "1.25 ohms", "0.46 ohms"],
            answer: 1,
            explain: "Z-int = 0.8 x U-o divided by I-a = 0.8 x 230 divided by 320 = 184 divided by 320 = 0.575 ohms. The 0.72 ohm answer comes from using the full 230 V instead of 80% of it, which would allow a loop impedance too high to guarantee disconnection under real fault conditions.",
          },
          {
            q: "Why are the values in AS/NZS 3000:2018 Table 8.2 only 64% of those in Table 8.1?",
            options: [
              "Because Table 8.2 applies to single-phase circuits only",
              "Because two independent 80% factors apply: 80% of supply voltage at the protective device, and de-energised conductors at ambient temperature having about 80% of their hot resistance",
              "Because ohmmeters read 36% low",
              "Because Table 8.2 excludes the protective earth conductor",
            ],
            answer: 1,
            explain: "Table 8.1 values are hot values measured on an energised circuit. Table 8.2 is for a de-energised measurement, so the reduced voltage assumption of 0.8 and the lower cold resistance factor of 0.8 combine to 0.64. Comparing a cold reading against the hot table would wrongly pass a marginal circuit.",
          },
          {
            q: "Which statement about SWER distribution is correct?",
            options: [
              "It uses two conductors and no earth connection",
              "It uses one conductor at about 16 to 19 kV with the earth as the return path, and is unsuitable in areas with much buried metal",
              "It supplies three-phase 400 V directly to rural consumers",
              "It operates at low voltage to keep the earth-return current small",
            ],
            answer: 1,
            explain: "SWER runs a single high-voltage conductor and returns the current through the ground, which keeps both the line and earth currents small precisely because the voltage is high. Earth-return current causes electrolytic corrosion of buried metal, so the system is confined to sparsely developed rural areas. The consumer transformer gives 230 V with its secondaries in parallel or 460 V in series.",
          },
        ],
      },
    ],
  },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
