/* =========================================================================
   Course content, module 114 — Electric motors.
   Source: Australian Refrigeration and Air-conditioning, Volume 1
   (Graham Boyle, pub. AIRAH), Chapter 14 — Electric motors.
   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Australian Refrigeration and Air-conditioning (ARAC) Vol 1, Boyle — pub. AIRAH — Ch 14, Electric motors",
    "AS/NZS 3000 (the Wiring Rules) — motor circuits, isolation, protection and verification testing",
    "AS 60034 series (IEC 60034) — rotating electrical machines: rating, duty, temperature rise, insulation and IP classification",
    "AS/NZS 1359.5 / MEPS — minimum energy performance for three-phase cage induction motors; AS/NZS 4836 — safe working on low-voltage installations",
  ];

  const MODULES = [
    {
      id: "v1-electric-motors",
      stream: "v1",
      title: "R1.14 · Electric motors",
      blurb: "How the motors that drive compressors, fans and pumps work: rotating fields, slip, single- and three-phase types, starting methods, inverters, protection and fault testing.",
      lessons: [

        /* ============================================================== */
        {
          id: "motor-families-and-dc-machines",
          title: "What a motor actually does, and the family tree",
          minutes: 10,
          simple: "A motor turns electricity into turning force by making two magnetic fields push against each other. There are many kinds, but they all do that one trick. Think of two magnets on a table: slide one past the other and the second one follows it around. The differences between motor types are just different ways of making the first magnet move.",
          refs: REFS,
          content: `
Almost every moving part in a refrigeration plant is turned by an electric
motor. The compressor, the condenser fans, the evaporator fans, the chilled and
condenser water pumps, the damper actuators and the oil pumps are all motor
driven. When a system will not run, the fault is electrical far more often than
it is mechanical, so knowing what is inside the motor casing and what should be
happening in there is core trade knowledge.

## Energy conversion

An electric motor is an energy converter: electrical energy in, mechanical
energy (torque at a rotating shaft) out. It does this through the interaction of
magnetic fields with current-carrying conductors. Run the same machine
backwards — drive the shaft mechanically — and it produces electricity instead,
which is what an alternator or dynamo does. Because many machines can work
either way, motors and generators are grouped together as **electric machines**.

Nothing is free in that conversion. The difference between electrical input and
mechanical output shows up as heat in the windings, the iron and the bearings.
That waste heat is why motor insulation has a temperature limit, why hermetic
compressor motors have to be cooled by returning suction gas, and why an
undersized or overloaded motor eventually destroys itself.

## The first split: DC or AC

The most useful first sort is by the supply the motor is designed for.

| Supply | Families you will meet |
|---|---|
| DC | Brushed DC (series, shunt, compound), brushless DC / EC, stepper |
| AC | Universal, synchronous, induction (three-phase and single-phase), shaded-pole |

### Brushed DC motors

A brushed DC motor makes its own switching internally. Stationary magnets
(permanent or wound field coils) surround a wound rotor, and a **commutator**
with carbon **brushes** reverses the current in the rotor windings as it turns,
so the rotor field keeps being pushed away from the stator field. The result is
continuous rotation from a DC supply with no electronics at all.

The trade-off is maintenance. Brushes and their springs wear, the commutator
gets dirty and pitted, and both need periodic attention — so brushed DC motors
have low first cost and dead-simple speed control (change the voltage, change
the speed), but a short life in hard continuous duty.

### Brushless DC and EC motors

Take the same idea and do the switching electronically instead. A brushless DC
motor puts permanent magnets (or a soft magnetic core, in a switched reluctance
design) on the rotor and windings on the stator, and an electronic controller
feeds those stator windings in sequence to produce a rotating field that drags
the rotor around. Because the switching — technically the *commutation* — is
done by electronics, these are called **electronically commutated (EC)** motors.

EC motors give you everything good about a DC motor, especially smooth variable
speed, without brushes to wear out, so their design life matches or beats an AC
induction motor. They are typically 65–80 per cent efficient and, importantly,
they *stay* efficient at part speed, where a conventional induction motor falls
away badly. In fan duties they commonly draw between a third and a half of the
energy of the shaded-pole or PSC motor they replace, and they run noticeably
cooler because less input energy is wasted as heat.

Two developments made them practical: high-energy magnet materials such as
neodymium alloys, which hold a strong field in a small rotor, and cheap
high-power switching semiconductors, which made the controller affordable.

### Stepper motors

A stepper is a brushless DC motor that divides one revolution into a fixed
number of equal steps. Toothed electromagnets are arranged around a gear-shaped
iron rotor. Energise one electromagnet and the rotor teeth snap into line with
it; energise the next and the rotor moves one small step to align again. Because
each pulse produces a known angle, the controller can command a position without
any feedback sensor — open-loop control. In HVAC you meet steppers in electronic
expansion valves and in damper and vane actuators, where knowing *exactly* how
far the valve has opened matters.

## How the field is connected: series, shunt, compound

For wound-field DC motors, how the field winding is connected to the armature
sets the whole character of the machine.

| Connection | Field vs armature | Behaviour | Typical use |
|---|---|---|---|
| Series | In series | Very high starting torque, poor speed regulation (speed falls sharply as load rises) | High-inertia starts: trains, hoists, lifts |
| Shunt | In parallel | Good speed regulation, more modest starting torque | Adjustable-speed industrial drives, machine tools |
| Compound | Both, combined | A blend: good starting torque plus reasonable speed holding | Where you need both |

A **cumulative** compound motor has the series field aiding the shunt field,
which lifts starting torque at the cost of speed regulation. A **differential**
compound motor opposes the two fields and gives good speed regulation at a near
constant speed.

### Universal motors

A universal motor is a series-wound machine built to run on either AC or DC at
about the same speed and output. It gives you DC-style high starting torque from
a normal power point, in a compact body, at very high speed. The costs are noise,
brush maintenance and a short life, so you find them in intermittent-duty
hand tools and small appliances — an angle grinder or a vacuum cleaner — not in
plant that runs continuously.

## AC motors: synchronous versus asynchronous

Every AC motor has a fixed **stator** whose windings are fed with alternating
current to produce a rotating magnetic field, and a **rotor** that develops a
field of its own. The interaction between the two turns the shaft.

- A **synchronous** motor has a rotor that turns at exactly the speed of the
  stator's rotating field. The rotor field has to come from somewhere other than
  induction — either DC fed in through slip rings, or permanent magnets.
- An **asynchronous** or **induction** motor has a rotor that always runs a
  little slower than the rotating field. The stator field induces current in the
  rotor, exactly like a transformer whose secondary is free to rotate, and that
  induced current makes the rotor field. Induction motors are the workhorse of
  the refrigeration industry.

Induction motors split again into **squirrel-cage** types, where the rotor
winding is a set of heavy copper or aluminium bars shorted together, and
**wound-rotor** types, where a real three-phase winding on the rotor is brought
out to slip rings.

## What to remember

- All motors work by pushing one magnetic field against another; the type just
  tells you how the moving field is made.
- Brushes mean maintenance; EC motors get DC-motor controllability without them,
  and hold their efficiency at part speed.
- Series field equals big starting torque and sloppy speed; shunt field equals
  steady speed and less starting torque.
- Synchronous means the rotor keeps up with the field; induction means it never
  quite does.
- Efficiency losses become winding heat, and heat is what kills motors.
`,
          quiz: [
            {
              q: "Why is a brushless EC motor able to outlast a brushed DC motor of the same rating?",
              options: [
                "It runs on AC rather than DC, so the windings never overheat",
                "The commutation is done electronically, so there are no brushes or commutator to wear",
                "It has no rotor, so there is nothing to wear out",
                "Its rotor is made of neodymium, which does not conduct current",
              ],
              answer: 1,
              explain: "Brush and commutator wear is the life-limiting item on a brushed DC motor. An EC motor moves that switching into a controller, so the only wearing parts left are the bearings. Neodymium magnets help make the design compact, but they are not why it lasts.",
            },
            {
              q: "A hoist needs to break away with a very heavy load already hanging on it. Which DC connection is the natural choice?",
              options: ["Shunt", "Series", "Differential compound", "Universal shunt"],
              answer: 1,
              explain: "A series motor puts the full armature current through the field, so field strength and torque both climb steeply at standstill — ideal for high-inertia, heavily loaded starts. A shunt motor holds speed well but cannot produce that breakaway torque.",
            },
            {
              q: "What distinguishes a synchronous motor from an induction motor?",
              options: [
                "The synchronous motor has no stator field",
                "The synchronous rotor runs at exactly the speed of the rotating field, and its rotor field is not produced by induction",
                "The synchronous motor can only run on DC",
                "The induction motor rotor runs faster than the stator field",
              ],
              answer: 1,
              explain: "A synchronous rotor is magnetised independently — by DC through slip rings or by permanent magnets — so it can lock to the field. An induction rotor must slip behind the field, because relative motion is the only thing that induces rotor current in the first place.",
            },
            {
              q: "Why does an EC fan motor typically use far less energy than the PSC motor it replaces when both are throttled back?",
              options: [
                "Because it produces no waste heat at all",
                "Because it holds high efficiency at part speed, whereas an induction motor's efficiency collapses as it is slowed",
                "Because it draws current only in short pulses",
                "Because it runs at synchronous speed with zero slip losses",
              ],
              answer: 1,
              explain: "Part-load performance is the real prize. An induction motor slowed by voltage reduction gets increasingly inefficient, while an EC motor's controller keeps the drive optimal down the speed range — commonly a third to a half of the energy for the same air movement.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "rotating-field-synchronous-speed-and-slip",
          title: "The rotating magnetic field, synchronous speed and slip",
          minutes: 12,
          simple: "Three-phase power arrives as three voltages that peak one after another, so the magnetic pull inside a motor keeps swinging around the inside of the stator like the hand of a clock. The rotor chases that pull but never catches it, and the small amount it falls behind is called slip. If it ever caught up, there would be nothing to make it turn.",
          refs: REFS,
          content: `
Everything about an AC induction motor — its speed, its torque, why it draws a
huge current at start, why a nameplate says 1440 and not 1500 rpm — comes back to
one idea: a magnetic field that rotates inside the stator while nothing
mechanical moves to make it rotate.

## Why three phases make a field spin on their own

A three-phase supply is three voltages of equal size, each one a third of a cycle
(120 electrical degrees) behind the last. Wire three sets of coils into the
stator, spaced 120 degrees apart around the bore, and feed one phase to each set.
Now track what a small compass needle inside the stator would do over one cycle:

- At 0 degrees the red phase is at maximum positive while yellow (in practice
  white in Australia) and blue are both at half value negative. The resulting
  pull points at the red pole, and the compass points there.
- At 120 degrees the white phase is at maximum positive and the other two are at
  half value negative, so the compass has swung round to the white pole.
- At 240 degrees the blue phase peaks and the compass swings again.
- At 360 degrees the pattern is back where it started, and the compass has made
  one complete revolution.

No moving parts were involved. The changing currents alone dragged the magnetic
pole around the stator bore. In a two-pole stator, one electrical cycle produces
exactly one revolution of the field, so at 50 Hz the field turns 50 times per
second — 3000 rpm. Add more poles and the field has more stops to make per cycle,
so it turns more slowly.

Single-phase supplies do not do this by themselves — a single winding just
produces a field that pulses back and forth along one axis. That is why every
single-phase motor needs a trick (a start winding, a capacitor, a shading ring)
to fake a second phase and get the field rotating. That is the next lesson.

## Synchronous speed

The speed of the rotating field is the **synchronous speed**, and it depends on
only two things: the supply frequency and the number of stator poles.

**Ns = 120 × f / p**

where Ns is in rev/min, f is frequency in hertz and p is the number of poles (not
pairs of poles). Divide by 60 for rev/s.

### Worked example 1 — a four-pole motor on Australian mains

A four-pole cage motor is supplied at 50 Hz.

- Ns = 120 × f / p
- Ns = 120 × 50 / 4
- Ns = 6000 / 4 = **1500 rpm**
- In rev/s: 1500 / 60 = **25 r/s**

### Worked example 2 — an eight-pole condenser fan motor

- Ns = 120 × 50 / 8 = 6000 / 8 = **750 rpm**

### Worked example 3 — the same two-pole motor on a 60 Hz supply

Imported equipment is often built for 60 Hz. A two-pole motor there runs at:

- Ns = 120 × 60 / 2 = 7200 / 2 = **3600 rpm**

Run that same motor on our 50 Hz supply and the field turns at 3000 rpm — 17 per
cent slower — so a direct-drive fan or pump moves proportionally less air or
water. This is a classic trap with imported equipment.

## Standard speeds and the 4 per cent rule

At 50 Hz, a fully loaded cage motor typically runs about 4 per cent below
synchronous speed. That gives the familiar family of nameplate speeds.

| Poles | Field (synchronous) speed, rpm | Slip at 4%, rpm | Loaded shaft speed, rpm |
|---|---|---|---|
| 2 | 3000 | 120 | 2880 |
| 4 | 1500 | 60 | 1440 |
| 6 | 1000 | 40 | 960 |
| 8 | 750 | 30 | 720 |
| 12 | 500 | 20 | 480 |

When you read 2880 or 1440 on a nameplate, you are reading the loaded speed, not
the field speed — and you now know instantly how many poles the motor has.

## Slip: why the rotor can never catch up

A squirrel-cage rotor has no electrical connection to anything. Its current is
**induced**, and induction only happens when magnetic lines of force cut the
rotor bars. Cutting requires relative movement between the field and the rotor.

Follow the logic through:

1. At standstill the field sweeps past the stationary bars at full speed, so a
   large current is induced and a strong rotor field appears. Like poles repel,
   so the rotor is pushed around and accelerates.
2. As the rotor speeds up, the field passes it more slowly, so fewer lines of
   force are cut per second, so rotor current and rotor field weaken and torque
   falls.
3. If the rotor ever reached synchronous speed, nothing would be cut, no current
   would be induced, no torque would exist — and it would immediately slow down.

The rotor therefore settles at the speed where the torque it develops exactly
matches the load torque. That shortfall is **slip**:

**slip % = (Ns − Nr) / Ns × 100**

### Worked example 4 — slip from a measured speed

A six-pole motor on 50 Hz is driving a fan. A tachometer on the shaft reads
960 rpm.

- Ns = 120 × 50 / 6 = **1000 rpm**
- Slip = (1000 − 960) / 1000 × 100
- Slip = 40 / 1000 × 100 = **4 per cent** — a normally loaded motor.

### Worked example 5 — slip from the nameplate

A four-pole motor is stamped 1425 rpm at full load.

- Ns = 1500 rpm, so slip = (1500 − 1425) / 1500 × 100 = 75 / 1500 × 100 = **5 per cent**

The frequency of the current actually circulating in the rotor bars is the slip
fraction of the supply frequency: 0.05 × 50 = **2.5 Hz** at full load. At the
instant of starting, slip is 100 per cent and rotor frequency equals supply
frequency — which is exactly why locked-rotor current is so large.

> Slip is a load gauge you can read with a tachometer. Near zero slip means the
> motor is barely loaded. Slip well above nameplate means it is overloaded, the
> supply voltage is low, or the driven machine is in trouble — a seizing bearing,
> a blocked filter forcing a fan into a bad part of its curve, or a compressor
> pumping against an excessive head.

## On the job

- Ns = 120f/p. Memorise 3000 / 1500 / 1000 / 750 for 2, 4, 6 and 8 poles at 50 Hz.
- Nameplate speed is loaded speed; the gap up to the nearest standard speed is
  the slip.
- No slip means no torque — slip is not a defect, it is the operating principle.
- Change the frequency and you change the speed proportionally: that is exactly
  what a variable-speed drive does.
- A 60 Hz nameplate on 50 Hz mains means everything driven by that motor runs
  17 per cent slow.
`,
          quiz: [
            {
              q: "A motor nameplate reads 960 rpm on a 50 Hz supply. How many poles does the stator have?",
              options: ["2", "4", "6", "8"],
              answer: 2,
              explain: "960 rpm is just under a standard speed. 120 x 50 / 6 = 1000 rpm synchronous, and 960 is 4 per cent below that — a six-pole machine. A four-pole would show around 1440 and an eight-pole around 720.",
            },
            {
              q: "Why can a squirrel-cage rotor never reach synchronous speed?",
              options: [
                "Bearing friction always absorbs exactly 4 per cent of the torque",
                "At synchronous speed no lines of force cut the rotor bars, so no current and no torque are produced",
                "The rotor bars would melt from the induced current",
                "The stator winding resistance limits the top speed",
              ],
              answer: 1,
              explain: "Induction needs relative motion. At zero slip nothing is cut, nothing is induced, and there is no rotor field to react against the stator — so the rotor immediately falls back until enough slip exists to carry the load. Friction is a real loss but it is not the reason.",
            },
            {
              q: "A four-pole 50 Hz motor is measured at 1470 rpm. What does this tell you?",
              options: [
                "The motor is overloaded",
                "Slip is 2 per cent — the motor is running well below full load",
                "The supply frequency must be wrong",
                "The motor has developed a shorted turn",
              ],
              answer: 1,
              explain: "Ns = 1500, so slip = (1500-1470)/1500 = 2 per cent, half the typical full-load figure. Light slip means light load. An overloaded motor slips more, not less, so it would read well below 1440.",
            },
            {
              q: "A 60 Hz two-pole motor from an imported package is connected to Australian 50 Hz mains. What happens to its speed?",
              options: [
                "It stays at 3600 rpm because speed is set by the poles alone",
                "Synchronous speed falls to 3000 rpm, about 17 per cent slower",
                "It rises to 4320 rpm",
                "It will not start at all",
              ],
              answer: 1,
              explain: "Ns = 120f/p, so cutting frequency from 60 to 50 Hz cuts field speed from 3600 to 3000 rpm. The motor still runs, but any directly driven fan or pump delivers substantially less — a common cause of poor performance on imported plant.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "three-phase-induction-motors",
          title: "Three-phase induction motors: construction, star and delta",
          minutes: 12,
          simple: "A three-phase motor is a set of coils in a steel shell with a solid-looking rotor spinning inside. The rotor is really a cage of metal bars. The six ends of the stator coils can be joined in two different patterns, star or delta, and which one you choose decides how much voltage each coil sees. Get it wrong and the motor either crawls or cooks.",
          refs: REFS,
          content: `
The three-phase cage induction motor is the most common machine in commercial
refrigeration: rugged, cheap, self-starting, with no brushes, no slip rings and
nothing to adjust. Understanding its build and its two connection patterns lets
you commission it, reverse it and diagnose it.

## Inside the machine

- **Frame and stator core.** The stator core is built from thin insulated steel
  laminations stacked and clamped, with slots around the bore. Laminating the
  core breaks up eddy currents, which would otherwise circulate in solid iron and
  waste energy as heat.
- **Stator windings.** Insulated copper coils are laid into the slots to form
  three phase groups spaced 120 degrees apart, then varnish-impregnated and
  baked. The six ends are usually brought out to a terminal block labelled
  U1/V1/W1 and U2/V2/W2 (older motors A1/B1/C1 and A2/B2/C2).
- **Squirrel-cage rotor.** Heavy aluminium or copper bars are cast into a
  laminated iron core and shorted at each end by end rings. The end rings often
  carry small vanes that act as an internal fan. The bars are usually **skewed**
  slightly relative to the shaft, which smooths the torque and stops the rotor
  locking magnetically at standstill (cogging).
- **End shields and bearings.** Cast iron or aluminium end shields carry the
  bearings and hold the rotor concentric in the stator bore, keeping the air gap
  small and even. A dragging or bent rotor means a bearing or shield problem.
- **Cooling.** Open motors carry an external fan and cooling fins; hermetic and
  semi-hermetic compressor motors are cooled by the returning suction gas
  flowing over the windings.

## Wound-rotor motors

The alternative to the cage is a **wound rotor** (slip-ring) motor, which carries
a real three-phase winding on the rotor brought out through slip rings and
brushes. Adding external resistance in that rotor circuit at start-up gives high
starting torque with a modest starting current, and the resistance is then
progressively shorted out as the motor runs up. Wound-rotor machines cost more
and need brush maintenance, so today they are largely displaced by variable-speed
drives — but you will still meet them on large old fans and crushing plant.

## Star and delta connections

Three coils can be joined to a three-phase supply in two ways.

**Star (wye).** One end of each coil is joined to a common point — the star point
— and the other ends go to the three phase wires. Trace the current and it passes
through two coils in series between any two phases, so each coil sees only the
phase-to-neutral voltage. On a 400 V system (older texts and plates say 415 V),
each coil sees about 230 V (240 V).

**Delta.** Each coil is joined end-to-end with the next, and the junctions go to
the phase wires. Now the current path goes through one coil between phases, so
each coil sees the full line voltage: 400 V.

| Connection | Voltage across each winding | Line current vs winding current |
|---|---|---|
| Star | Line voltage / √3, i.e. about 230 V on a 400 V supply | Line current = winding current |
| Delta | Full line voltage, 400 V | Line current = √3 × winding current |

That single fact is why a motor plated "400/690 V" may be run in delta on our
400 V mains, and why the same motor connected in star on 400 V would be badly
under-fluxed and could not produce its rated torque. It is also the whole basis
of star-delta starting, covered later in this module.

>! Never re-link a motor terminal block on a hunch. Read the plate. A delta-only
>! motor linked in star will run gutless and stall under load; a star-connected
>! motor re-linked into delta on the same supply sees 1.73 times its design
>! voltage per winding and will burn out, sometimes within minutes.

## Torque, current and the starting problem

At the instant of switch-on, slip is 100 per cent, the rotor acts like a
short-circuited transformer secondary, and the motor draws its **locked rotor
current** — typically five to eight times full-load current, often quoted as
about 7.5 times. Starting torque, by comparison, is only around 1.5 times
full-load torque. So you pay a very large current bill for a fairly modest torque
bonus.

Key points on the torque-speed curve:

- **Locked-rotor (starting) torque** — what it produces at standstill.
- **Pull-up torque** — the minimum during run-up; if the load torque exceeds it,
  the motor stalls part-way up.
- **Breakdown (pull-out) torque** — the maximum the motor can ever produce,
  typically 2 to 3 times full load. Load it past that and it stalls.
- **Full-load torque** — at nameplate speed and nameplate current.

Torque is proportional to the **square** of the applied voltage. Lose 10 per cent
of your voltage and you lose about 19 per cent of your torque, which is why long
undersized supply cables cause motors to struggle and trip on start.

## Reversing a three-phase motor

Swap any two of the three phase conductors and the field rotates the other way.
Any pair will do — red and blue, blue and white, or red and white. Swapping all
three changes nothing.

>! Direction matters. A scroll or screw compressor run backwards makes noise,
>! pumps nothing and can be destroyed in minutes; a centrifugal fan running
>! backwards still moves some air, so it fools people. After any switchboard
>! work, re-check rotation against the arrow on the housing, and use a phase
>! rotation tester on new installations.

## Field checks that matter

1. Measure supply voltage at the motor terminals with the motor running, not at
   the board.
2. Clamp all three line currents. They should be within a few per cent of one
   another and at or below the nameplate FLC.
3. Check the terminal block links and compare them with the plate.
4. Turn the shaft by hand with the motor isolated — it should spin freely with no
   rumble or drag.
5. Confirm rotation direction against the arrow before coupling to a compressor.
`,
          quiz: [
            {
              q: "A motor's windings are connected in star to a 400 V three-phase supply. What voltage appears across each winding?",
              options: ["400 V", "About 230 V", "About 690 V", "115 V"],
              answer: 1,
              explain: "In star, the current passes through two windings in series between phases, so each winding sees the phase-to-neutral voltage, 400 / 1.73 = about 230 V. In delta each winding would see the full 400 V.",
            },
            {
              q: "A three-phase motor runs but the compressor it drives makes noise and pumps nothing. What should you check first?",
              options: [
                "Whether the star point is earthed",
                "The direction of rotation — swap any two phases if it is backwards",
                "The insulation resistance of the windings",
                "Whether the motor is a wound-rotor type",
              ],
              answer: 1,
              explain: "Scroll and screw compressors only pump one way. Reverse rotation gives noise, no pressure rise and rapid damage. Swapping any two of the three line conductors reverses the rotating field; swapping all three does nothing.",
            },
            {
              q: "Why is the stator core made of thin insulated laminations rather than solid steel?",
              options: [
                "To make the motor lighter to carry",
                "To break up eddy currents that would otherwise circulate in solid iron and waste energy as heat",
                "To allow the windings to be removed easily",
                "To increase the air gap",
              ],
              answer: 1,
              explain: "The alternating field would induce large circulating eddy currents in a solid core, heating it for no useful output. Laminating with insulation between layers confines those currents to thin slices and cuts the loss dramatically.",
            },
            {
              q: "The supply voltage at a motor's terminals sags to 90 per cent of nominal during starting. What happens to the starting torque?",
              options: [
                "It also falls to 90 per cent",
                "It falls to about 81 per cent, because torque varies with the square of voltage",
                "It is unaffected, since torque depends only on frequency",
                "It rises, because the current increases",
              ],
              answer: 1,
              explain: "Torque is proportional to voltage squared, so 0.9 squared = 0.81. The loss of torque is nearly twice the loss of voltage, which is why voltage drop in long or undersized cables so often shows up as a motor that will not start on load.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "single-phase-motors",
          title: "Single-phase motors: split-phase, shaded-pole and the capacitor family",
          minutes: 13,
          simple: "A single-phase supply cannot make a magnetic field spin on its own, so these motors cheat. They add a second winding, or a capacitor, or a copper ring around part of a pole, to make a second magnetic push arrive slightly late. Two pushes out of step are enough to get the rotor moving, the way you need two hands out of step to spin a merry-go-round.",
          refs: REFS,
          content: `
Every domestic and light commercial refrigeration product runs on single-phase:
domestic fridges, bottle coolers, split-system indoor fans, evaporator fans in
display cabinets, small condensing units. All of them share one problem and a
family of solutions to it.

## The single-phase problem

Feed one winding from one phase and the field it produces simply pulses back and
forth along a single axis. It gets stronger, dies away, reverses and grows again,
but it never rotates. A stationary rotor sitting in that field feels equal pull
in both directions and will not start — though if you spin it by hand it will
keep running. Every single-phase motor therefore needs a device that produces a
second magnetic pull *displaced in time* from the first.

## The split-phase motor (RSIR)

The split-phase, or resistance-start induction-run motor, is the ancestor of the
whole family.

**Construction.** Four parts matter:

- **Stator windings.** Two of them, physically 90 degrees apart around the bore.
  The **run** (main) winding has many turns of heavy-gauge wire set deep in the
  slots, giving it a high inductance and low resistance. The **start**
  (auxiliary) winding has fewer turns of small-diameter wire set near the top of
  the slots, giving it low inductance and higher resistance.
- **Rotor.** An ordinary squirrel cage: single heavy aluminium or copper bars
  cast into an iron core, shorted by end rings that often carry cooling vanes.
- **Bearings and end shields**, which hold the rotor centred in the bore.
- **A starting switch or relay** to take the start winding out of circuit.

**How the field is made to rotate.** Because the start winding is resistive
rather than inductive, its current rises early in the cycle, while the heavily
inductive run winding lags behind. The two windings therefore reach their peaks
at different moments and in different places around the stator, so the magnetic
pole shuffles around the bore. A compass inside the stator would step from the
start winding's pole to the run winding's pole and on around, once per cycle in a
two-pole stator.

It works, but not smoothly. The phase difference achieved by resistance alone is
only about 30 electrical degrees, where a genuinely smooth rotating field needs
90 degrees. Lumpy field, low starting torque — hence the search for something
better.

**Disconnecting the start winding.** Once the rotor reaches roughly 75 per cent
of full speed, the spinning rotor plus the run winding alone can sustain the
rotating field, and the fine start winding must come out or it will overheat. In
an open motor a **centrifugal switch** does this: spring-loaded weights on the
shaft fly outward and open contacts in series with the start winding. In a sealed
compressor a centrifugal switch is impossible, because the arc at its contacts
would decompose the refrigerant and oil; an externally mounted **relay** does the
job instead.

## The shaded-pole motor

The simplest motor made. There is no start winding at all — instead a heavy
closed loop of copper, roughly 10 mm wide, is fitted around one side of each
stator pole. As the main flux builds, the loop opposes the change through its own
portion of the pole, so the flux in the shaded part lags the flux in the unshaded
part. The magnetic north effectively sweeps across the face of each pole from the
unshaded side to the shaded side, and that tiny sweep is enough to start the
rotor. From there it runs up and behaves as an ordinary induction motor.

Cheap, robust, no capacitor, no relay, nothing to fail electrically. But starting
torque is very low and efficiency is poor — around 50 per cent — so it suits only
small direct-drive fans. Shaded-pole motors cannot be reversed electrically at
all; the only way is to pull the rotor out and refit it from the other end.

## Adding capacitors

Put a capacitor in series with the start winding and its current leads the
voltage instead of merely arriving early. The phase displacement between the two
windings moves much closer to the ideal 90 degrees, and starting torque climbs
sharply.

**Capacitor-start (CSIR).** A start capacitor in series with the start winding,
both removed from circuit by the relay once the motor is up to speed. Big
starting torque, so it can start a compressor against an unequalised head.

**Permanent-split capacitor (PSC).** The relay is deleted and a single run
capacitor is left permanently in series with the start winding, which now stays
energised all the time. Simplest circuit, fewest parts, quiet and smooth running,
better running efficiency and power factor — but starting torque is modest, so a
PSC compressor needs an equalised system pressure to start. Used everywhere for
fan motors and for compressors in room air-conditioners.

**Capacitor-start, capacitor-run (CSR or CSCR).** Both: a large start capacitor
that is switched out by the relay, plus a smaller run capacitor that keeps the
start winding energised at reduced current. This gives the high breakaway torque
of a CSIR and the smooth, efficient running of a PSC — the usual arrangement for
larger single-phase compressors.

| Type | Strengths | Limitations | Where used |
|---|---|---|---|
| Split-phase (RSIR) | Cheap, simple circuit | Low starting torque, efficiency around 60% | General purpose, small compressors |
| Capacitor-start (CSIR) | High starting torque, starts against load | Limit about 8 starts per hour | Compressors starting loaded |
| Cap-start, cap-run (CSR) | High starting torque plus better run torque and efficiency | About 8 starts per hour, more parts, dearer | Larger compressors, continuous running |
| Permanent-split cap (PSC) | Very simple, few parts, more start torque than split-phase, smooth and quiet | Less starting torque than capacitor-start | Fans and room air-conditioner compressors |
| Shaded-pole | Cheapest, nothing to fail | Very low start torque, poor efficiency (about 50%) | Small fans only |

### The two capacitors are not interchangeable

- **Start capacitors** are electrolytic, physically small for their microfarad
  value, rated for intermittent duty only — a few seconds per start. Fit one in a
  run position and it will fail, sometimes violently.
- **Run capacitors** are oil-filled or metallised polypropylene, continuously
  rated, and much lower in capacitance for their size. Always replace like for
  like on microfarads and on voltage rating (equal or higher voltage, never
  lower).

>! Capacitors hold a charge after the supply is removed and can deliver a
>! painful or dangerous shock, and a start capacitor can burst if it is faulty or
>! wrongly rated. Isolate, then discharge through a suitable resistor — never by
>! shorting the terminals with a screwdriver, which damages the capacitor and
>! throws molten metal.

## Reversing single-phase motors

Swap the leads of *either* the start winding or the run winding — not both — and
the motor reverses. Reversing both simply restores the original direction. The
exception is the shaded-pole motor, which has no reversible winding and must be
turned around mechanically.

## What to remember

- One winding gives a pulsating field, not a rotating one; every single-phase
  motor needs a second, time-shifted push.
- The start winding is fine wire, high resistance, near the slot mouth; the run
  winding is heavy wire, low resistance, deep in the slot.
- Start windings come out at about 75 per cent of full speed, by centrifugal
  switch in open motors and by relay in hermetics.
- Capacitors buy torque; a run capacitor also buys smoothness, efficiency and
  power factor.
- Capacitor-start machines are limited to roughly eight starts an hour — check
  the anti-short-cycle timer if a unit is hunting.
`,
          quiz: [
            {
              q: "In a split-phase motor, what makes the start winding's current arrive at a different moment from the run winding's?",
              options: [
                "The start winding is wound with fewer turns of fine wire, giving it high resistance and low inductance",
                "The start winding is fed from a different phase of the supply",
                "The start winding is fitted with its own rotor",
                "The start winding is wound in the opposite direction",
              ],
              answer: 0,
              explain: "The physical difference in the windings does it: a resistive, low-inductance start winding lets current rise early, while the heavy, deeply set, highly inductive run winding lags. That difference is only about 30 electrical degrees, which is why starting torque is modest.",
            },
            {
              q: "A shaded-pole evaporator fan needs to run the other way. What is the only practical method?",
              options: [
                "Swap the two supply leads",
                "Reverse the start winding connections",
                "Remove the rotor and refit it from the opposite end",
                "Add a run capacitor to the shading coil",
              ],
              answer: 2,
              explain: "A shaded-pole motor has no start winding and the shading rings fix the direction of field sweep, so no wiring change reverses it. Physically turning the rotor end for end is the accepted method.",
            },
            {
              q: "Why does a PSC compressor generally require the system pressures to equalise before it will restart?",
              options: [
                "Because the run capacitor must discharge first",
                "Because its starting torque is modest — enough for an equalised start, but not to break away against a standing head",
                "Because the relay contacts need time to cool",
                "Because the run winding is disconnected at start",
              ],
              answer: 1,
              explain: "A PSC has no big start capacitor, so its breakaway torque is limited. Left with discharge pressure still on the compressor, it will stall and trip its overload. That is why PSC systems use capillary or other pressure-equalising metering and an anti-short-cycle delay.",
            },
            {
              q: "A technician fits an electrolytic start capacitor in place of a failed run capacitor of the same microfarad value. What is the likely outcome?",
              options: [
                "The motor will run more efficiently",
                "The capacitor will overheat and fail, because it is rated only for a few seconds of intermittent duty",
                "Nothing — the two are interchangeable if the microfarads match",
                "The motor will run backwards",
              ],
              answer: 1,
              explain: "Start capacitors are electrolytic and intermittently rated for a handful of seconds per start; a run capacitor is continuously rated oil-filled or polypropylene. Leave a start capacitor permanently energised and it will overheat and can rupture.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "start-relays-and-hermetic-motors",
          title: "Start relays, hermetic motors and C-S-R terminals",
          minutes: 12,
          simple: "A sealed compressor cannot have a mechanical switch inside it, because sparks would ruin the refrigerant. So a small relay bolted to the outside does the job of cutting the start winding out once the motor is up to speed. The three pins poking out of the compressor are common, start and run, and you can tell which is which with an ohmmeter.",
          refs: REFS,
          content: `
On a hermetic compressor everything electrical you can touch is outside the
shell: the relay, the capacitors, the overload and the terminal cover. Everything
you cannot touch — stator, rotor, windings — is sitting in refrigerant and oil.
Learning the four relay types and how to identify the three terminals is what
lets you diagnose a compressor that hums, trips or will not start.

## Why a relay rather than a switch

An open motor uses a centrifugal switch on the shaft. In a hermetic that is
unacceptable: the arc drawn each time the contacts open would break down the
refrigerant and the oil, producing acid and contaminating the whole system. So
the switching function is moved outside the shell into a relay. Whatever type is
fitted, two rules always hold:

1. The relay's job is to open-circuit the start winding (or, in a CSR motor, the
   start capacitor) once the motor is up to normal speed.
2. The run winding stays in circuit at all times, during both starting and
   running.

## Current (amperage) relay

Used with split-phase and capacitor-start motors.

The coil is a few turns of heavy wire connected **in series with the run
winding**, its resistance so low that it has no effect on normal running. Its
contacts are **normally open** — unusual among relays.

- At switch-on the motor draws locked-rotor current through the run winding and
  therefore through the relay coil. The coil's magnetism pulls the armature up
  and closes the contacts, energising the start winding and start capacitor.
- As the rotor accelerates it generates a back (counter) EMF that opposes the
  supply, so line current falls.
- At the reduced current the coil can no longer hold the armature, and gravity or
  a spring drops the contacts open, taking the start circuit out of service.

Because it depends partly on gravity, a current relay must be mounted the right
way up — there is usually a "TOP" mark. Some current relays also house a thermal
overload and heater, which does not change how the relay itself works.

>! Fit only the relay model specified for that compressor. Relays are matched to
>! the motor's locked-rotor and running currents; the wrong one either never lets
>! go of the start winding (burning it out in seconds) or never picks up at all.

Current relays are not used on capacitor-start capacitor-run motors, because the
run capacitor can discharge across the contacts as they close and burn them.

## Potential (voltage) relay

Used with CSIR and CSR motors.

Its coil is many turns of fine wire connected **in parallel with the start
winding**, and its contacts are **normally closed** when de-energised. As the
motor accelerates, the start winding generates a back EMF proportional to speed.
When that voltage reaches the relay's pick-up value — near normal running speed —
the coil finally has enough force to open the contacts and drop out the start
capacitor. Potential relays are specified by pick-up and drop-out voltages as
well as coil voltage, so again, only the listed part will do.

## Solid-state (PTC) relay

A direct replacement for many current relays, with no moving contacts at all. It
uses a **positive temperature coefficient** thermistor: cold, its resistance is
low, so current flows freely to the auxiliary winding at switch-on. Within two or
three seconds the current heats the PTC pellet, its resistance climbs steeply,
and the current through the start winding falls to a few milliamps — effectively
disconnected.

Key practical points:

- It is not connected to the main winding, so it does nothing to protect it; a
  separate internal or external bi-metal overload is still required.
- It does give some protection to the auxiliary winding, because the pellet heats
  faster than the winding does.
- With no contacts, there is nothing to arc or burn.
- It must cool down between starts: allow a minimum **45 seconds off-cycle**
  before restarting, which most anti-short-cycle timers already provide.
- Do not use it on motors fitted with a run capacitor (CSR types).

## Hot-wire relay

The oldest type, common until the late 1960s and now found only on legacy plant.
It uses the heating effect rather than the magnetic effect of the starting
current: a special alloy wire expands as the high start current heats it, and its
movement opens the start contacts. The same wire, heated by sustained overcurrent,
also opened the main circuit, so the device doubled as an overload. If you replace
a hot-wire relay with a solid-state relay, you must add a correctly sized separate
overload, because that protective function is otherwise lost.

## Reading the three hermetic terminals

The fused-glass terminal on the shell has three pins: **C** (common), **S**
(start/auxiliary) and **R** (run/main). Common is the junction of the two
windings inside the motor. With the compressor isolated and all external wiring
removed, measure between each pair with a good low-ohms meter:

| Reading | What it means |
|---|---|
| Highest of the three | Start to Run (S–R), the two windings in series |
| Middle | Common to Start (C–S), the fine, high-resistance start winding |
| Lowest | Common to Run (C–R), the heavy, low-resistance run winding |

The check that proves it: **R(S–R) should equal R(C–S) + R(C–R)**. For example,
if you read 12 Ω, 9 Ω and 3 Ω, then S–R is the 12 Ω pair, C–S is 9 Ω, C–R is 3 Ω,
and 9 + 3 = 12 confirms the identification. An open circuit on one pair means an
open winding; a reading far below expected suggests shorted turns; any measurable
continuity from a pin to the shell means an earthed winding.

>! Hermetic terminal pins can blow out of the shell under pressure if a winding
>! shorts to a pin, throwing hot oil and refrigerant. Always refit the terminal
>! cover and fence before energising, never stand in line with the terminal
>! block, and never apply power with the cover off to "watch what happens".

## How the motor is cooled and protected

In a suction-gas-cooled hermetic, cool returning vapour washes over the stator
before entering the cylinders. Anything that starves that flow overheats the
motor: low charge, a blocked drier, an iced evaporator, a compressor short
cycling so it never gets a proper suction flow, or long running at very low
suction pressure. Motor protection is usually an internal bi-metal (klixon) disc
embedded in the winding head, an external overload strapped to the shell, or on
larger machines thermistors in the windings feeding an electronic protection
module.

## On the job

- Current relay: normally open contacts, coil in series with run, mounted the
  correct way up.
- Potential relay: normally closed contacts, coil across the start winding, opens
  on back EMF.
- PTC relay: no contacts, needs 45 s off-time, not for run-capacitor motors, does
  not protect the main winding.
- Identify C, S and R by resistance and confirm with the addition check.
- A compressor that hums and trips is nearly always a start component — relay,
  capacitor or overload — before it is a seized compressor. Prove it before you
  condemn a compressor.
`,
          quiz: [
            {
              q: "An ohmmeter across a hermetic compressor's three pins reads 4 ohms, 15 ohms and 19 ohms. Which pair is common to run?",
              options: [
                "The 19 ohm pair",
                "The 15 ohm pair",
                "The 4 ohm pair",
                "It cannot be determined without energising the compressor",
              ],
              answer: 2,
              explain: "The run winding is heavy-gauge and lowest in resistance, so C-R is the 4 ohm pair; C-S is 15 ohms and S-R is the highest at 19 ohms. The check 15 + 4 = 19 confirms the identification with no power applied.",
            },
            {
              q: "Why is a mechanical centrifugal switch not used inside a hermetic compressor?",
              options: [
                "It would be too heavy for the rotor",
                "Arcing at its contacts would break down the refrigerant and oil and contaminate the system",
                "It cannot operate in an oil-rich atmosphere",
                "It would prevent the motor reaching 75 per cent speed",
              ],
              answer: 1,
              explain: "Contamination is the reason. Each opening arc would decompose refrigerant and oil into acids and sludge inside a sealed system that cannot be cleaned easily. The switching function is therefore moved outside the shell to a relay.",
            },
            {
              q: "A current-type start relay is found mounted upside down on a small condensing unit. What is the likely consequence?",
              options: [
                "None — the relay is purely magnetic",
                "Its contacts may not drop out, leaving the start winding energised and burning it out",
                "The compressor will run backwards",
                "The run capacitor will overcharge",
              ],
              answer: 1,
              explain: "A current relay relies on gravity or spring action to drop the armature once current falls. Mounted the wrong way up, the contacts can stay made, so the fine start winding stays in circuit at full running current and cooks in seconds.",
            },
            {
              q: "Which statement about a solid-state PTC start relay is correct?",
              options: [
                "It protects both the main and auxiliary windings, so no overload is needed",
                "It needs a minimum off-cycle of about 45 seconds and must not be used on run-capacitor motors",
                "It is the preferred relay for capacitor-start capacitor-run motors",
                "It disconnects the run winding once the motor is up to speed",
              ],
              answer: 1,
              explain: "The PTC pellet has to cool before it can pass start current again, hence the 45 second minimum off-time, and it is unsuitable for CSR motors. It offers some auxiliary-winding protection but the main winding still needs its own bi-metal or electronic overload.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "nameplates-contactors-and-protection",
          title: "Nameplates, contactors, DOL starting and motor protection",
          minutes: 14,
          simple: "The metal plate on the side of a motor tells you everything you need to size its switchgear and protection. A contactor is the heavy-duty switch that a small thermostat contact can operate safely, and the overload is the device that stops the motor before its windings cook. Think of it as a light switch operating a drawbridge.",
          refs: REFS,
          content: `
A motor circuit has three jobs to do: switch the motor on and off remotely,
protect the cable and switchgear from short circuits, and protect the *motor*
from sustained overload. Different devices do each one, and the numbers that size
them all come off the nameplate.

## Reading the nameplate

| Plate item | What it tells you |
|---|---|
| Output kW (or hp) | Mechanical power at the shaft — not input power |
| Voltage / connection, e.g. 400 V D / 690 V Y | Supply voltage and how the terminal block must be linked |
| Full-load current (FLC or FLA), A | The current at rated output — the basis for overload setting |
| Frequency, Hz | 50 Hz here; a 60 Hz plate means the shaft will run 17% slow |
| Speed, rpm | Loaded speed; tells you the pole count and the slip |
| Power factor (cos φ) and efficiency | Used to calculate input power and check running condition |
| Insulation class and temperature rise | The winding's thermal limit |
| Duty (S1, S2, S3...) | S1 is continuous; short-time and intermittent ratings are lower |
| IP rating, e.g. IP55 | Protection against solids and water |
| Frame size, bearing numbers, serial | For replacement and spares |

### Insulation class and temperature rise

Winding insulation ages with heat. As a working rule, every 10 K of sustained
over-temperature roughly halves insulation life, so a motor run 20 K hot does not
fail immediately — it fails in a quarter of the time you expected.

| Class | Maximum hot-spot temperature |
|---|---|
| A | 105 °C |
| E | 120 °C |
| B | 130 °C |
| F | 155 °C |
| H | 180 °C |

Those limits assume a standard maximum ambient of 40 °C. A Class F motor rated
for a Class B rise, for instance, is designed for an 80 K rise over that ambient
and keeps the rest of Class F's margin in reserve — a common and desirable
specification. On a plantroom roof in a Queensland summer, the ambient assumption
is the thing that gets violated: shade, ventilation and clean cooling fins are
not cosmetic.

## Contactor or starter?

Strictly, a **contactor** is a load-carrying device that makes and breaks to
start and stop the motor. Add protective devices to it and the correct name is a
**starter**. In everyday trade use, "starter" tends to be reserved for anything
more elaborate than direct-on-line — star-delta, autotransformer, soft starter.

### Why you need one at all

The contacts inside a thermostat or pressure control are typically rated for only
four or five amps. A 6 kW three-phase motor draws around 5 A per phase and a
single-phase motor can exceed 5 A at 1 kW, so wiring the motor directly through a
control contact would destroy it. Instead the control operates a small solenoid —
the **hold-in coil** — drawing only milliamps, and the coil closes heavy contacts
that carry the motor current. The same arrangement lets you protect all three
phases: overload devices simply open the coil circuit, which drops out every
phase at once.

## The direct-on-line (DOL) starter

DOL applies full line voltage to the motor in one action. It is the cheapest and
gives the highest starting torque, but it also draws the full locked-rotor current
of five to eight times FLC. Supply authorities therefore limit its use — commonly
to motors up to about 5 kW, or up to about 10 per cent of the total input power of
the building, at the local authority's discretion.

A DOL starter contains:

- Three heavy main contacts rated to carry the full motor current.
- A control circuit operating the hold-in coil, connected either between two
  phases (400 V coil) or between one phase and neutral (230 V coil). Extra-low
  voltage 24 V control is very common in air-conditioning.
- Overload heaters or sensors in two or three phases, mechanically linked to a
  contact that opens the *control* circuit and so stops the motor.

!FIG[ladder-rung]

Practical notes worth memorising:

1. Overload devices are selected on the motor's running current plus a maximum of
   10 per cent — no more.
2. An overload on any phase, or the loss of a phase, stops the motor.
3. The coil circuit is electrically independent of the main circuit, so any coil
   voltage may be used.
4. Contactors often have four or five main poles, with the spares used for
   condenser fans or other loads that must switch with the compressor.
5. Auxiliary contacts may be normally open (for the seal-in or hold-in path and
   for run indication) or normally closed (to energise something only while the
   motor is off, such as a crankcase heater).

## Worked example — full-load current and overload setting

An 11 kW, 400 V, three-phase compressor motor has a nameplate power factor of
0.86 and an efficiency of 90 per cent. Find its full-load current, the maximum
overload setting, and its likely DOL starting current.

Three-phase input current:

**I = P / (√3 × V × pf × η)**

- I = 11 000 / (1.732 × 400 × 0.86 × 0.90)
- 1.732 × 400 = 692.8
- 692.8 × 0.86 = 595.8
- 595.8 × 0.90 = 536.3
- I = 11 000 / 536.3 = **20.5 A**

Maximum overload setting = 20.5 × 1.10 = **22.6 A**. Set it there or lower, never
higher — an overload wound up "to stop the nuisance tripping" is how windings
burn.

Starting current at 6 × FLC = 6 × 20.5 = **123 A** on DOL. That figure is what
drives the choice of starting method, cable size and the supply authority's view
of the installation.

### Worked example — a single-phase fan motor

A 750 W PSC fan motor runs at 230 V with a power factor of 0.95 and an efficiency
of 65 per cent.

**I = P / (V × pf × η)**

- I = 750 / (230 × 0.95 × 0.65)
- 230 × 0.95 = 218.5; 218.5 × 0.65 = 142.0
- I = 750 / 142.0 = **5.3 A**

Note how a modest 0.75 kW single-phase motor already exceeds the contact rating of
a typical thermostat — hence the relay or contactor.

## Protection: which device does what

| Device | Protects against | Notes |
|---|---|---|
| HRC fuse or circuit breaker | Short circuit and earth fault | Sized to let the starting surge pass; does not protect the motor from overload |
| Thermal overload relay (bi-metal) | Sustained overload, stalled rotor, single-phasing | Set to FLC, maximum 10% above; trip classes 10 or 20 for normal or long run-up |
| Electronic overload relay | As above, with better accuracy and phase-loss detection | Adjustable, often with a separate phase-imbalance trip |
| Internal bi-metal (klixon) | Winding over-temperature in hermetics | Embedded in the winding head, auto-resetting when cool |
| PTC thermistors plus module | Winding over-temperature, precisely | Fitted in each phase winding; the module trips the control circuit |
| Phase-failure / phase-sequence relay | Loss or reversal of a phase | Essential where reverse rotation would wreck a compressor |
| Under/over voltage relay | Supply voltage outside limits | Low voltage means high current and low torque |

**Single-phasing** deserves special mention. Lose one phase while a three-phase
motor is running and it does not stop — it keeps turning on the remaining two,
with the current in those two rising by roughly 1.7 times or more. Overloads on
only two phases can miss it, which is why three-pole protection or an electronic
relay with phase-loss detection is preferred.

>! Isolate, lock out and tag before opening any starter enclosure, then prove
>! dead with a tester you have proved on a known source before and after. Control
>! circuits are often fed from a different supply to the power circuit, so a
>! dead main circuit does not mean a dead panel.

## On the job

- Everything you need to size the circuit is on the plate; photograph it before
  it corrodes away.
- Overload setting equals nameplate FLC, plus 10 per cent absolute maximum.
- Fuses and breakers protect cable; overloads protect motors. They are not
  interchangeable.
- Measure running current on all three phases and compare with FLC — that single
  measurement catches an enormous number of developing faults.
- A repeatedly tripping overload is telling you something true. Find out what.
`,
          quiz: [
            {
              q: "A 7.5 kW, 400 V three-phase motor has a power factor of 0.85 and an efficiency of 88 per cent. What is its approximate full-load current?",
              options: ["10.8 A", "14.5 A", "18.7 A", "25.0 A"],
              answer: 1,
              explain: "I = P / (1.732 x V x pf x eff) = 7500 / (1.732 x 400 x 0.85 x 0.88) = 7500 / 518 = about 14.5 A. Forgetting the efficiency or the root-three term is the usual source of the wrong answers here.",
            },
            {
              q: "That same motor draws a measured 14.5 A at full load. What is the highest acceptable overload setting?",
              options: ["14.5 A", "About 16 A", "About 22 A", "Whatever stops it nuisance tripping"],
              answer: 1,
              explain: "Overloads are set on running current plus a maximum of 10 per cent: 14.5 x 1.1 = 15.95, so about 16 A. Winding the setting up to cure nuisance tripping removes the very protection that keeps the winding below its insulation class limit.",
            },
            {
              q: "Why is a thermostat with 5 A contacts not wired directly in series with a three-phase compressor motor?",
              options: [
                "Because the thermostat would run backwards",
                "Because the motor current far exceeds the contact rating; the thermostat should carry only the milliamps needed by a contactor coil",
                "Because thermostats cannot switch three-phase neutrals",
                "Because the contacts would cause the motor to single-phase",
              ],
              answer: 1,
              explain: "The control contact is a signalling device, not a load-carrying one. It energises the hold-in coil, and the contactor's heavy contacts carry the motor current on all three phases — which also gives you one place to put the overload protection.",
            },
            {
              q: "A three-phase motor loses one supply phase while running. What typically happens?",
              options: [
                "It stops instantly and safely",
                "It keeps running on two phases with sharply increased current in those phases, and will overheat unless protection detects it",
                "It doubles its speed",
                "It reverses direction",
              ],
              answer: 1,
              explain: "Single-phasing does not stop a running motor; it forces the same power through two phases, raising their current by roughly 1.7 times or more, and the winding overheats. Three-pole thermal protection or an electronic phase-loss relay is what catches it.",
            },
            {
              q: "A Class F motor's winding runs continuously about 20 K above its design temperature. What is the practical consequence?",
              options: [
                "No effect, since Class F allows 180 °C",
                "Insulation life is cut to roughly a quarter, because every 10 K of over-temperature approximately halves it",
                "The motor loses exactly 20 per cent of its output",
                "The bearings fail first, and the insulation is unaffected",
              ],
              answer: 1,
              explain: "The 10 K halving rule compounds: 20 K over means about one quarter of the expected life. Class F's limit is 155 °C, not 180 °C (that is Class H), and the failure is gradual insulation degradation rather than an immediate loss of output.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "reduced-voltage-starting",
          title: "Reduced-voltage and soft starting",
          minutes: 13,
          simple: "Switching a big motor straight onto full voltage is like dumping the clutch: it works, but everything jolts and the supply sags. Reduced-voltage starters feed the motor less voltage for the first few seconds so the current surge is smaller. The catch is that less voltage also means much less turning force, because torque follows voltage squared.",
          refs: REFS,
          content: `
A cage motor started direct-on-line draws roughly 5 to 8 times its full-load
current — often quoted around 7.5 times — while producing only about 1.5 times
full-load torque. On a large machine that surge dips the supply voltage enough to
make lights flicker across a building, upsets electronics, stresses the supply
authority's network and slams the driven equipment mechanically. Reduced-voltage
starting trades starting torque for a smaller surge.

## The rule that governs every method

Motor torque is proportional to the **square** of the applied voltage:

**T ∝ V²**

Line current, for methods that simply reduce motor terminal voltage, falls
roughly in proportion to voltage. Halve the voltage and you halve the current but
you are left with a quarter of the torque. That single relationship decides
whether a given method can start a given load.

### Worked example — a 50 per cent tapping

A three-phase motor is started through a primary resistance starter set on the
50 per cent tapping.

- Motor terminal voltage V = 0.5 × supply voltage
- T ∝ V², so T is proportional to (0.5)² = 0.25
- Starting torque = 0.25 × 100 = **25 per cent of normal running torque**

If the load needs more than a quarter of full-load torque to break away, the
motor will simply sit and stall on that tap. This is why every reduced-voltage
start should be applied to an *unloaded* or lightly loaded machine wherever
possible — compressors with unloaders or pressure-equalised starts, fans with
closed dampers, pumps with a closed discharge valve.

## Star-delta starting

The most common method in refrigeration plant. It needs a motor designed to run
in **delta** on the supply voltage, with all six winding ends brought out to a
six-terminal block.

At start, the windings are connected in star. Each winding then sees only
1/√3 = **58 per cent** of the line voltage. Both the line current and the torque
fall to **33 per cent** of their DOL values. After a timed interval the star
contactor drops out and the delta contactor picks up, putting full line voltage
across each winding for normal running.

In numbers: starting current drops from about 7.5 times full load to about 2.5
times, and starting torque falls from about 1.5 times full-load torque to about
0.5 times.

The control sequence in a typical automatic starter: energise the control
circuit, the star contactor closes first; through its auxiliary contact the main
line contactor closes and the timer is energised; when the timer times out it
de-energises the star contactor, which then allows the delta contactor to pick
up. Mechanical and electrical interlocks make it impossible for star and delta to
be closed together, which would be a dead short across the supply.

Limitations:

- Only suits motors brought out to six terminals and designed to run in delta.
- Only about a third of DOL torque, so it cannot start heavily loaded machines.
- Standard open-transition changeover briefly disconnects the motor, which can
  cause a current and torque transient at the moment of re-connection. Closed
  transition versions avoid this.

## Primary resistance starting

Resistors are connected in series with each line during starting and then shorted
out once the motor has picked up speed. Simple, cheap, low maintenance, and it
works on **any** three-phase motor, star or delta, three-terminal or six.

Its weakness is inherent: the volt drop across the resistors is greatest when the
current is greatest, that is at standstill, so the motor gets its least voltage
exactly when it most needs torque. Starting torque is low and the resistors waste
energy as heat. Two or more stages are often used, each timing out in turn to
short out another block of resistance and give controlled acceleration.

## Autotransformer starting

An autotransformer — either a three-coil star-connected unit or a two-coil "open
delta" arrangement — supplies reduced voltage to the motor during starting.
Tappings are typically provided at 40, 50, 60, 70 and 80 per cent of line voltage.

The advantage over star-delta is choice. Torque still follows V², but line
current draw follows V² as well for this method, because the transformer trades
current for voltage. On the 80 per cent tap you get 0.8² = **64 per cent of DOL
starting torque**, nearly double what star-delta offers, with a corresponding
increase in starting line current. That makes autotransformer starters suitable
for heavier starting loads.

Better units use the **Korndorfer** connection, which keeps the motor connected to
the supply throughout the transition from start to run. The motor never gets a
chance to decelerate, so the high transient currents of an open changeover are
avoided.

## Part-winding starting

Requires a motor with a specially designed split winding. Two contactors are
used. Energising only the first half of the winding at start-up gives roughly half
the locked-rotor current and half the starting torque of a full-winding DOL start;
the second contactor then brings in the remaining winding for running.

- The second (run) contactor must close **within two seconds** of starting — the
  energised half is not rated to carry the load alone for long.
- The winding design is specialised so that the torque produced by one half is
  balanced.
- Accessible hermetic compressor motors are a common application, and because the
  split is not necessarily even, starting torque and locked-rotor amps may be up
  to about 65 per cent of full-winding values.

## Solid-state soft starters

A soft starter controls the voltage electronically. Each phase carries a pair of
**silicon controlled rectifiers (SCRs)** connected in reverse parallel, because an
SCR conducts in one direction only and the supply alternates. An SCR starts
conducting when a gate signal is applied and stops at the next zero crossing of
the supply, so by advancing or retarding the firing point within each half-cycle
the starter chooses how much of the waveform reaches the motor.

That gives you two adjustments the older methods do not have: the **initial
voltage** (set just high enough to break the load away) and the **ramp time** (how
quickly voltage rises to full). Many units also offer current limiting, a soft
stop for pumps to avoid water hammer, and a kick-start pulse. A **bypass
contactor** shorts out the SCRs once the motor is at full speed so they are not
dissipating heat during normal running. Power connections resemble a primary
resistance starter, with SCR pairs in place of the resistors.

A soft starter can be applied to any motor, three- or six-terminal, and is now
the default retrofit where a mechanical starter has become troublesome.

| Method | Start torque (of DOL) | Motor needed | Notes |
|---|---|---|---|
| DOL | 100% | Any | Highest surge; usually limited to about 5 kW |
| Star-delta | 33% | Six terminals, delta-run | Cheap and common; open transition unless specified otherwise |
| Primary resistance | Varies with tap; 25% on the 50% tap | Any | Simple, but least torque when torque is needed most |
| Autotransformer | 64% on the 80% tap | Any | Selectable taps; Korndorfer gives closed transition |
| Part-winding | About 50% (up to 65% on hermetics) | Special split winding | Second contactor within 2 seconds |
| Soft starter | Adjustable | Any | Smooth ramp, current limit, bypass contactor for running |

>! Reduced voltage always means reduced torque. Before you fit or adjust a
>! reduced-voltage starter, confirm the driven machine can actually break away on
>! the torque available — a motor that stalls half-way up its run draws
>! locked-rotor current for the whole ramp and can burn out before the overload
>! trips.

## On the job

- Work out the torque before the current: T ∝ V² decides whether the start will
  succeed at all.
- Star-delta gives 58 per cent winding voltage, 33 per cent current, 33 per cent
  torque.
- Autotransformer 80 per cent tap gives 64 per cent torque — the choice for
  heavier loads.
- Part-winding needs the run contactor within two seconds.
- On a soft starter, the two settings that matter are initial voltage and ramp
  time, and the bypass contactor should be closed once running.
`,
          quiz: [
            {
              q: "A motor is started through an autotransformer set on the 70 per cent tapping. What starting torque results, as a fraction of DOL starting torque?",
              options: ["70%", "58%", "49%", "35%"],
              answer: 2,
              explain: "Torque follows voltage squared: 0.70 squared = 0.49, so 49 per cent. Picking 70 per cent ignores the square-law relationship, which is the single most important idea in reduced-voltage starting.",
            },
            {
              q: "Star-delta starting reduces the voltage across each winding to 58 per cent of line voltage. What does that do to starting current and torque?",
              options: [
                "Both fall to 58 per cent",
                "Both fall to about 33 per cent",
                "Current falls to 33 per cent but torque is unchanged",
                "Current falls to 58 per cent and torque to 25 per cent",
              ],
              answer: 1,
              explain: "0.58 squared is about 0.33, so both starting line current and starting torque become roughly one third of the DOL values — starting current falls from about 7.5 times FLC to about 2.5 times, and torque from about 1.5 to 0.5 times full-load torque.",
            },
            {
              q: "Why is a primary resistance starter said to give its least help exactly when it is most needed?",
              options: [
                "Because the resistors only heat up after the motor is running",
                "Because the volt drop across the resistors is greatest at standstill, when the current is highest — so terminal voltage and torque are lowest at breakaway",
                "Because the resistors are shorted out during starting",
                "Because it can only be used on six-terminal motors",
              ],
              answer: 1,
              explain: "Current is maximum at zero speed, so the series resistance drops the most voltage precisely at breakaway. It is simple and cheap and works on any motor, but its starting economy and torque are poor compared with an autotransformer.",
            },
            {
              q: "What is the Korndorfer connection used for in an autotransformer starter?",
              options: [
                "To allow the motor to run permanently at reduced voltage",
                "To keep the motor connected to the supply during the start-to-run transition, avoiding deceleration and high transient currents",
                "To provide overload protection",
                "To reverse the direction of rotation",
              ],
              answer: 1,
              explain: "It gives a closed transition. The motor is never disconnected, so it cannot slow down and then be re-connected out of step, which is what produces the current and torque transient in a plain open-transition changeover.",
            },
            {
              q: "In a solid-state soft starter, why are two SCRs fitted per phase in reverse parallel?",
              options: [
                "For redundancy in case one fails",
                "Because an SCR conducts in one direction only, so a second is needed for the opposite half-cycle",
                "To double the available starting torque",
                "To convert the AC supply into DC",
              ],
              answer: 1,
              explain: "An SCR is a one-way device that stops conducting at each zero crossing. One handles the positive half-cycle and its reverse-parallel partner the negative, so the pair can chop both halves of the waveform and control the voltage seen by the motor.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "vsds-inverters-ecm-and-efficiency",
          title: "Inverters, VSDs, EC motors and motor efficiency",
          minutes: 13,
          simple: "Because motor speed follows supply frequency, a drive that can make its own frequency can make the motor run at any speed you like. For fans and pumps that saves an enormous amount of energy, because power rises with the cube of speed. A drive is also the gentlest starter there is, since it starts the motor from almost zero speed.",
          refs: REFS,
          content: `
Everything in this module so far assumes a motor connected to a fixed 50 Hz
supply, running at one speed and switched on and off to control capacity. The
variable-speed drive breaks that assumption, and with it most of the energy waste
in a refrigeration plant.

## How a VSD works

A variable-speed drive (VSD, variable-frequency drive, or "inverter") has three
stages:

1. **Rectifier.** The incoming AC is rectified to DC.
2. **DC bus.** Capacitors smooth that DC into a steady rail and store energy.
3. **Inverter.** Fast semiconductor switches (IGBTs) chop the DC rail into pulses
   of varying width — pulse width modulation — so the *average* voltage traces
   out an AC waveform of whatever frequency and amplitude the drive chooses.

Recall Ns = 120f/p. Change f and you change the shaft speed directly.

### Worked example — speed from drive frequency

A four-pole motor is running from a drive set to 35 Hz.

- Ns = 120 × 35 / 4 = 4200 / 4 = **1050 rpm** synchronous
- At about 4 per cent slip under load, the shaft turns roughly
  1050 × 0.96 = **1008 rpm**

### Volts per hertz

If you reduce frequency without reducing voltage, the magnetic flux in the iron
rises, the core saturates and the motor overheats. So a drive holds a roughly
constant **volts-per-hertz** ratio: 400 V at 50 Hz means about 280 V at 35 Hz.
Constant V/f keeps flux, and therefore available torque, roughly constant right
down the speed range. Above 50 Hz the drive cannot raise voltage further, so flux
and available torque fall away — useful for fans, but a trap if you overspeed a
constant-torque load.

## Why this saves so much energy

For fans and centrifugal pumps, the affinity laws apply:

- Flow ∝ speed
- Pressure ∝ speed²
- **Absorbed power ∝ speed³**

Run a fan at 80 per cent speed and it absorbs 0.8³ = 0.51, about half the power,
for 80 per cent of the air. Run it at 50 per cent speed and it absorbs one eighth.
No damper or throttling valve comes close, because those methods keep the motor
working hard and simply waste the result.

For compressors the gain is different but just as real. An inverter compressor
modulates its capacity continuously to match the load, instead of cycling on and
off. It spends most of its life running slowly against a smaller temperature
lift, which raises the coefficient of performance at part load, holds the
controlled temperature within a much tighter band, and removes the repeated
inrush and mechanical shock of starting.

The drive is also, incidentally, the best soft starter available: it starts the
motor from near-zero frequency, so starting current need never exceed full-load
current.

## The catches

- **Motor cooling.** A standard TEFC motor is cooled by a shaft-mounted fan. At
  low speed that fan moves little air, so a motor at 20 Hz carrying full torque
  can overheat. Constant-torque duties need force-ventilated or inverter-rated
  motors.
- **Insulation stress.** The fast switching edges of PWM produce voltage spikes
  at the motor terminals, worse with long cables. Use inverter-duty motors with
  reinforced insulation on new work.
- **Bearing currents.** Common-mode voltage can drive current through the
  bearings, pitting and fluting the races. Shaft-earthing rings, insulated
  bearings and correct high-frequency bonding of the screened cable prevent it.
- **Harmonics and EMC.** The rectifier draws non-sinusoidal current, distorting
  the supply and heating neutrals and transformers. Line reactors, DC chokes or
  active front ends are used to control it. Motor cable must be screened, with
  the screen bonded 360 degrees at both ends through proper EMC glands.
- **Minimum speed for compressors.** Oil return and motor cooling both set a
  lower speed limit; ignore it and the compressor is starved of oil.
- **Resonance.** Skip frequencies are programmed to avoid speeds where the fan or
  duct system resonates.

>! A VSD's DC bus capacitors hold a lethal charge after the supply is removed.
>! Isolate, wait the manufacturer's stated discharge time (commonly five minutes
>! or more), then prove dead at the DC terminals before touching anything. Never
>! carry out an insulation resistance test through a drive — disconnect the motor
>! cable at the drive first, or the test voltage will destroy the electronics.

## EC and BLDC motors

An EC (electronically commutated) motor takes the same electronics and builds
them into a permanent-magnet motor. The rotor carries magnets; the controller
energises the stator windings in sequence, using Hall-effect sensors or sensorless
position detection to know where the rotor is. Because the rotor field comes from
magnets rather than induction, there is no rotor current, no slip loss, and no
magnetising current drawn from the supply.

Practical advantages in refrigeration and ventilation:

- High efficiency, in the order of 65–80 per cent and better in larger sizes, and
  crucially it is held right down to part speed.
- No start capacitor, no start relay, no centrifugal switch.
- Speed set by a 0–10 V signal, PWM input or building-management network, so a
  cabinet fan can be trimmed to exactly the airflow needed.
- Constant-airflow or constant-torque programming: the motor holds the set duty as
  filters load up.
- Runs cool, which matters directly in refrigerated display cases where fan heat
  is a load on the very coil the fan serves.

EC replacements for shaded-pole and PSC evaporator fan motors are one of the most
reliable energy retrofits available in commercial refrigeration, typically cutting
fan energy by half or more and the associated cabinet heat load along with it.

## Motor efficiency

Efficiency is simply useful output over electrical input:

**η = Pout / Pin × 100**

### Worked example

The 11 kW motor from the previous lesson draws 20.5 A at 400 V with a power
factor of 0.86.

- Pin = √3 × V × I × pf = 1.732 × 400 × 20.5 × 0.86
- 1.732 × 400 = 692.8; × 20.5 = 14 202; × 0.86 = 12 214 W = **12.2 kW**
- η = 11 / 12.2 × 100 = **90 per cent**

The missing 1.2 kW is heat: copper loss (I²R in the windings), iron loss
(hysteresis and eddy currents), windage and friction.

Points that matter in practice:

- Three-phase induction motors sold in Australia must meet **MEPS** levels under
  AS/NZS 1359.5 across the common size range, expressed internationally as IE
  efficiency classes (IE1 standard, IE2 high, IE3 premium, IE4 super premium).
- Efficiency peaks around 75 per cent of rated load and falls away sharply below
  about 50 per cent. Oversizing a motor "for safety" costs efficiency and power
  factor for the life of the plant.
- Poor power factor does not itself waste energy in the motor, but it increases
  line current, cable losses and demand charges. Capacitor correction is applied
  at the board, not usually at the motor, and must never be left connected across
  a motor fed from a VSD.
- Rewound motors typically lose one to two points of efficiency per rewind;
  beyond a certain size and count, replacement beats rewinding.

## What to remember

- Speed follows frequency; the drive makes its own frequency.
- Fan and pump power follows the cube of speed — the biggest single energy saving
  available in HVAC.
- Constant V/f preserves torque; above base speed torque falls.
- EC motors hold efficiency at part speed and need no start components.
- Never megger through a drive, and never open one until the DC bus has
  discharged.
`,
          quiz: [
            {
              q: "A VSD is set to 25 Hz on a four-pole motor. What is the synchronous speed?",
              options: ["375 rpm", "750 rpm", "1500 rpm", "3000 rpm"],
              answer: 1,
              explain: "Ns = 120 x 25 / 4 = 750 rpm. The formula does not change when a drive supplies the frequency — halving the frequency from 50 to 25 Hz halves the field speed from 1500 to 750 rpm.",
            },
            {
              q: "A supply fan is slowed from full speed to 70 per cent by a VSD. Roughly what happens to the absorbed power?",
              options: [
                "It falls to 70 per cent",
                "It falls to about 49 per cent",
                "It falls to about 34 per cent",
                "It is unchanged, because the motor still runs",
              ],
              answer: 2,
              explain: "Fan power follows the cube of speed: 0.7 cubed = 0.343, so about 34 per cent of full-speed power for 70 per cent of the airflow. The square (49 per cent) is the pressure relationship, not the power one.",
            },
            {
              q: "Why does a VSD reduce output voltage in proportion to output frequency?",
              options: [
                "To limit the motor's top speed",
                "To hold magnetic flux roughly constant — full voltage at low frequency would saturate the iron and overheat the motor",
                "To protect the DC bus capacitors",
                "Because the motor windings cannot take low frequencies",
              ],
              answer: 1,
              explain: "Flux depends on volts per hertz. Keep the voltage up while dropping frequency and the core saturates, magnetising current soars and the motor cooks. Constant V/f keeps flux, and therefore available torque, roughly constant down the speed range.",
            },
            {
              q: "You need to insulation-test the motor on a VSD-driven fan. What must you do first?",
              options: [
                "Run the drive at full speed to warm the windings",
                "Disconnect the motor cable at the drive output and test the motor alone, after the DC bus has discharged",
                "Set the drive to its lowest frequency and test through it",
                "Nothing — the drive is designed to withstand test voltages",
              ],
              answer: 1,
              explain: "A 500 V DC test applied through a drive destroys its output semiconductors. Isolate, wait the stated DC bus discharge time, disconnect the motor leads at the drive and test the motor and its cable on their own.",
            },
            {
              q: "Why is an EC motor particularly attractive as an evaporator fan in a refrigerated display case?",
              options: [
                "It produces cold air directly",
                "It holds high efficiency at part speed and runs cool, so it adds far less heat to the very coil it serves",
                "It needs a larger start capacitor than a PSC motor",
                "It runs at synchronous speed with 4 per cent slip",
              ],
              answer: 1,
              explain: "Every watt a fan motor wastes inside a cabinet becomes a refrigeration load. An EC motor cuts both the fan energy and the heat rejected into the case, and it needs no start capacitor or relay. Slip belongs to induction motors, not permanent-magnet EC machines.",
            },
          ],
        },

        /* ============================================================== */
        {
          id: "motor-faults-and-testing",
          title: "Motor faults, testing and fault-finding",
          minutes: 13,
          simple: "Most motor problems come down to four things: a broken winding, a winding shorting to itself, a winding leaking to the metal frame, or a rotor that will not turn. A meter tells you which, in about five minutes, once the power is off and proved off. The trick is to test in a fixed order rather than guessing.",
          refs: REFS,
          content: `
A motor that will not run is a puzzle with a small number of possible answers.
Work through them in the same order every time and you will find the fault
quickly, and — just as important — you will not condemn a good compressor.

## Before any test

>! Isolate at the local isolator, lock and tag it, and prove dead with a tester
>! you have proved on a known live source immediately before and after. Discharge
>! start and run capacitors through a suitable resistor. On drive-fed motors,
>! respect the DC bus discharge time. Working live on motor circuits requires the
>! appropriate electrical licence and a documented reason; AS/NZS 4836 sets the
>! ground rules.

## The four electrical faults

| Fault | What has happened | How it shows on a meter | Symptom |
|---|---|---|---|
| Open circuit | A winding, joint or thermal cut-out is broken | Infinite resistance across a winding pair | Motor hums or does nothing; no current in one phase |
| Short circuit (turn to turn) | Insulation between turns has failed | Resistance noticeably lower than the matching phase; phases unbalanced | Runs hot, high current, trips overload, burnt smell |
| Earth fault | Insulation to the frame has failed | Continuity or low insulation resistance from a winding to the frame | Trips the RCD or breaker instantly, casing may be live |
| Locked rotor | Rotor cannot turn — seized bearing, seized compressor, jammed load | Windings measure normally, but current stays at LRA | Loud hum, no rotation, overload trips in seconds |

## Test sequence

**1. Look and listen.** Burn marks, discoloured or blistered insulation, a
distinctive acrid burnt-varnish smell, oil or water ingress, a bulging or leaking
capacitor, loose terminations, blocked cooling fins, a fan cowl full of dust. A
huge share of faults are found here before a meter comes out.

**2. Turn the shaft by hand.** Free and quiet is good. Rough, notchy or seized
tells you the problem is mechanical and no amount of electrical testing will fix
it.

**3. Check the supply.** Measure voltage at the motor terminals, not at the
board, and preferably under load. Then check balance between phases.

**Voltage imbalance % = (maximum deviation from average / average) × 100**

Worked example: phase voltages measure 405 V, 400 V and 386 V.

- Average = (405 + 400 + 386) / 3 = 1191 / 3 = 397 V
- Deviations: 8 V, 3 V, 11 V — the largest is 11 V
- Imbalance = 11 / 397 × 100 = **2.8 per cent**

That is over the usual 2 per cent working limit. Small voltage imbalance produces
a current imbalance several times larger and substantial extra winding heating, so
above 2 per cent the cause must be found — commonly a poor connection, an
unbalanced single-phase load elsewhere in the building, or a failing supply
transformer.

**4. Measure winding resistance.** Use a meter with a genuine low-ohms range;
ordinary multimeters are unreliable below a few ohms. On a three-phase motor the
three phase windings should be within roughly 5 per cent of each other. On a
single-phase or hermetic motor, use the C, S and R identification from the earlier
lesson and check that S–R equals C–S plus C–R. An infinite reading is an open
winding; a reading well below its partner suggests shorted turns. Remember that
an internal thermal cut-out that has tripped will read open until the motor cools,
so let a hot motor stand and re-test before condemning it.

**5. Insulation resistance (megger) test.** With everything disconnected, apply
500 V DC between the windings (all joined together) and the frame.

- The absolute minimum for a low-voltage circuit under AS/NZS 3000 is **1 MΩ**.
- The traditional rule of thumb for machines is 1 MΩ plus 1 MΩ per kV of rating,
  so a 400 V motor should comfortably exceed 1 MΩ.
- A healthy dry motor commonly reads tens or hundreds of megohms. A falling trend
  over successive services is more informative than any single number — record
  it.
- A low reading on a cold, wet or long-idle motor may be moisture. Dry it out with
  space heaters or low-voltage circulating current and re-test before writing it
  off.

>! Never apply a megger to a hermetic compressor that is under vacuum. The
>! dielectric strength of the winding space collapses at low pressure and the test
>! voltage can flash over and destroy a serviceable motor. Bring the system back
>! to at least atmospheric pressure with dry nitrogen or refrigerant vapour first.
>! Disconnect PTC relays, electronic protection modules and any drive before
>! testing, because the test voltage will destroy them.

**6. Measure running current.** Clamp each line and compare with nameplate FLC.
Current above FLC means overload — mechanical load, low or unbalanced voltage,
high head pressure on a compressor, or a failing motor. Current well below FLC on
a compressor may mean it is not pumping. Current in only two of three phases means
a lost phase or an open winding.

**7. Locked-rotor check.** If the motor hums and draws locked-rotor current
(five to eight times FLC) without turning, the fault is either mechanical seizure
or a missing starting function. For a single-phase motor that means the start
capacitor, start relay or start winding. Do not leave it energised: the overload
should trip within seconds, and if it does not, kill the supply yourself.

## Single-phase specific checks

- **Capacitors.** Test with a capacitance meter after discharging. A run capacitor
  should be within about 5–6 per cent of its marked value; a start capacitor is
  usually marked with a range. Any bulging, leaking or open-circuit capacitor is
  scrap. Never substitute a lower voltage rating.
- **Start relay.** Check the contacts and coil per the type: current relay
  contacts normally open, potential relay contacts normally closed, PTC pellet a
  few ohms when cold. Confirm the correct model for the compressor and correct
  mounting orientation.
- **Overload.** An external overload should show continuity when cool. Let a hot
  one cool before deciding it has failed.

## Hermetic burnout

If a hermetic motor has burned out, the refrigerant and oil are contaminated with
acid and carbon. Recover the charge, test the oil for acid, replace the drier with
a burnout-rated one (and often a suction line filter drier), flush or replace
components as the severity requires, evacuate thoroughly, and check acid levels
again after a period of running. Skipping this step guarantees a second failure of
the replacement compressor.

## Common causes behind the fault you found

- Sustained overload or high head pressure
- Low or unbalanced supply voltage, or a lost phase
- Short cycling — repeated inrush with no time to cool
- Blocked cooling airflow, high ambient, dirty fins or an internal fan failure
- Bearing failure, misalignment or excessive belt tension
- Moisture or refrigerant-oil contamination in the windings
- Wrong or wound-up overload setting that allowed the winding to overheat

## On the job

- Isolate, lock, prove dead, discharge — every time, no exceptions.
- Test in order: look, turn by hand, supply, resistance, insulation, current.
- Record insulation resistance values so you can see the trend, not just today's
  number.
- Never megger a hermetic under vacuum, and never megger through a VSD or an
  electronic protection module.
- Find the cause, not just the failure. A replacement motor fitted to an unsolved
  problem fails the same way.
`,
          quiz: [
            {
              q: "Three-phase voltages at a motor measure 410 V, 400 V and 390 V. What is the voltage imbalance, and does it matter?",
              options: [
                "2.5 per cent — acceptable, no action needed",
                "About 2.5 per cent — above the usual 2 per cent limit, so the cause should be found",
                "5 per cent — but imbalance has no effect on motors",
                "It cannot be calculated without the current readings",
              ],
              answer: 1,
              explain: "Average = 400 V, largest deviation = 10 V, so 10/400 = 2.5 per cent. Voltage imbalance produces a current imbalance several times larger and significant extra winding heating, so above about 2 per cent you look for a poor connection or an unbalanced load.",
            },
            {
              q: "Why must a hermetic compressor never be insulation tested while the system is under vacuum?",
              options: [
                "The reading will be too high to be useful",
                "At low pressure the dielectric strength inside the shell collapses, so the test voltage can flash over and destroy a good winding",
                "The vacuum pump would be damaged",
                "The oil would be drawn into the windings",
              ],
              answer: 1,
              explain: "Gas at low pressure ionises far more easily, so a test voltage that is harmless at atmospheric pressure can arc across the winding under vacuum. Restore at least atmospheric pressure with dry nitrogen or refrigerant vapour before testing.",
            },
            {
              q: "A single-phase compressor hums, draws locked-rotor current and does not turn, but all three winding resistances read correctly and add up. What is the most likely cause?",
              options: [
                "An earth fault in the run winding",
                "A failed start component — start capacitor, start relay or its wiring",
                "The supply frequency is wrong",
                "The compressor has shorted turns",
              ],
              answer: 1,
              explain: "Good, balanced winding resistances rule out open and grossly shorted windings, so the motor is not getting its starting phase shift. Check the start capacitor and relay before considering mechanical seizure — and never leave it energised drawing LRA.",
            },
            {
              q: "A three-phase motor's winding resistances read 2.1, 2.2 and 1.4 ohms. What does this suggest?",
              options: [
                "Normal variation between phases",
                "An open circuit in one phase",
                "Shorted turns in the phase reading 1.4 ohms",
                "An earth fault",
              ],
              answer: 2,
              explain: "Phases should match within roughly 5 per cent. A phase reading around a third lower has lost turns to a turn-to-turn short, which is why that winding will run hot and trip the overload. An open circuit would read infinite, and an earth fault shows up between winding and frame, not between phases.",
            },
            {
              q: "An insulation resistance test on a 400 V motor returns 0.4 megohms. What is the correct response?",
              options: [
                "Accept it — anything above zero is serviceable",
                "Reject the reading as failing the 1 megohm minimum, then check for moisture and consider drying the motor before condemning it",
                "Re-test at 1000 V to get a better reading",
                "Fit a larger overload to compensate",
              ],
              answer: 1,
              explain: "0.4 megohms is below the 1 megohm minimum for a low-voltage circuit and the motor must not be returned to service as it stands. Moisture in a cold or long-idle motor is a common and reversible cause, so dry it out and re-test before deciding the insulation has genuinely failed.",
            },
          ],
        },

      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
