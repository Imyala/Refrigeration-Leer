/* =========================================================================
   Course content, module 311 — Single- and three-phase transformers.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 11 — Single- and three-phase
   transformers.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — single- and three-phase transformers",
  ];

  const REFS_PRINCIPLE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the transformer as a mutual induction device: primary winding, secondary winding and magnetic core",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — step-up, step-down and one-to-one transformers and their circuit symbols",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phasor diagrams of a transformer on no load and under load",
  ];

  const REFS_CONSTRUCTION = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — types of laminations and core construction: core, shell and toroidal",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase core construction, including cruciform or stepped cores",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — arrangement of windings: side-by-side, sandwich and concentric, and degree of coupling",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transformer insulation materials and the distribution transformer nameplate",
    "AS/NZS 60076 Power transformers — general requirements; AS/NZS 2374 — transformer terminal identification",
  ];

  const REFS_RATIOS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — value of induced voltage, V = 4.44 x flux x f x N and V = 4.44 x B x A x f x N",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transformation ratios: turns ratio, voltage ratio and current ratio",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — worked examples on output voltage, secondary current and primary current",
  ];

  const REFS_RATING = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transformer power and current ratings expressed in volt-amperes",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power losses in a transformer: eddy-current, hysteresis and copper losses",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — relationship between transformer cooling and rating",
  ];

  const REFS_PERFORMANCE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — determining power losses by the no-load (open-circuit) and short-circuit tests",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — determining transformer efficiency and the condition for maximum efficiency",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transformer voltage regulation and percentage impedance",
  ];

  const REFS_THREEPHASE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — three-phase transformer connections: star-star, delta-delta, delta-star and star-delta",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — winding polarity, instantaneous polarity testing and parallel operation of transformers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — phase sequence, phase-angle shift and vector groups when paralleling three-phase transformers",
  ];

  const REFS_PLANT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power transformer components: tank, conservator, Buchholz relay, bushings and tap changers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — insulating and cooling media, transformer oil and the tests conducted on it",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — failure modes of transformers and basic electrical tests for fault finding and commissioning",
    "AS/NZS 3000:2018 Wiring Rules — Clause 4.14 transformers and Clause 7.4 electrical separation",
  ];

  const REFS_SPECIAL = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — transformers with multiple secondaries and tapped windings",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — autotransformers and variable-voltage autotransformers (variacs)",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — isolation transformers and high-reactance or flux-leakage transformers",
    "AS/NZS 3000:2018 Wiring Rules — Clause 4.14.4 autotransformers; AS/NZS 61558 — safety of transformers",
  ];

  const REFS_INSTRUMENT = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — voltage (potential) transformers, burden and safe working procedures",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — current transformers, construction, burden and the danger of an open-circuited secondary",
    "AS/NZS 1243 — voltage transformer secondary voltages; IEC 60044 — current transformer secondary current ratings",
  ];

  const MODULES = [
    {
      id: "elec-transformers",
      stream: "elec",
      title: "E.11 · Single- and three-phase transformers",
      blurb: "How transformers change voltage and current by mutual induction, how they are built, rated, tested and connected, and the safety rules for autotransformers, isolating transformers, CTs and VTs.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "mutual-induction",
          title: "How a transformer works: mutual induction",
          minutes: 12,
          simple: "A transformer is two coils of wire sharing an iron core. One coil is fed with alternating current, which makes a magnetic field that keeps growing and collapsing, and that moving magnetism pushes a voltage into the second coil. It is like two tuning forks on the same bench: strike one and the other starts humming, without them ever touching.",
          refs: REFS_PRINCIPLE,
          content: `
Without transformers there would be no grid. Generators produce a few hundred
to about 25 000 volts. Transmission lines need hundreds of kilovolts to move
bulk power without melting, and your power point needs 230 V. Only one device
can convert cheaply and efficiently between those levels, and it has no moving
parts at all.

## The parts and the words

A simple double-wound transformer is two separate insulated coils wound on a
common magnetic core.

- **Primary winding** — the winding connected to the source of supply. Which
  winding is "primary" is decided by where the supply is connected, not by how
  the transformer is built. Many transformers work perfectly well backwards.
- **Secondary winding** — the winding connected to the load.
- **Magnetic core** — usually laminated silicon steel. It is there to
  concentrate the magnetic flux so that nearly all of the flux made by one
  winding passes through the other.

The two windings are electrically separate. Energy crosses from one to the
other only as magnetism. That process is called **mutual induction**, or
"transformer action".

If the secondary voltage is higher than the primary it is a **step-up**
transformer; lower and it is a **step-down** transformer; identical and it is a
**one-to-one** or **isolating** transformer. Ratings run from a few VA in a
doorbell supply up to hundreds of MVA in a transmission substation, and the
efficiency of a large power transformer exceeds 99 per cent — better than any
rotating machine you will ever work on.

On drawings you will meet two symbols: the detailed one showing two coils
either side of parallel lines that denote the iron core, and the plain general
symbol (two overlapping circles) used on single-line diagrams.

## Why it must be a.c.

Connect the primary of a 230 V transformer to a 230 V battery and you will
destroy it. The winding is essentially a low-resistance coil of wire; d.c.
would produce an enormous current limited only by that few ohms of copper.

On a.c. the story is completely different. The alternating current produces an
alternating flux in the core. That changing flux induces a **self-induced
(back) EMF** in the primary itself, opposing the applied voltage and almost
equal to it. What limits the primary current is not resistance but that
opposing induced voltage. Take the flux away — as happens with d.c., where the
flux is steady — and there is nothing to oppose the supply.

The same changing flux threads the secondary turns and induces the secondary
voltage. No current flows there until you connect a load, but the voltage is
present the instant the primary is energised.

## No load: the excitation current

With nothing connected to the secondary, the transformer still draws a small
current called the **excitation** or **no-load current**, typically only 1 to 3
per cent of full-load current. It splits into two parts:

- The **magnetising component**, which sets up the mutual flux. It is purely
  inductive, so it lags the applied voltage by 90 electrical degrees and sits
  in phase with the flux.
- The **energy component**, which supplies the iron losses plus the tiny
  copper loss in the primary. It is resistive, so it is in phase with the
  applied voltage. A wattmeter in the primary reads this power.

When drawing transformer phasor diagrams the **mutual flux is the reference
phasor**, because it is the one quantity common to both windings — the same
reasoning that makes voltage the reference in a parallel circuit and current
the reference in a series circuit. With flux as reference, the applied voltage
leads the flux by 90 degrees, and the self-induced primary voltage sits 180
degrees out of phase with the applied voltage because it opposes it.

The phasor sum of the magnetising and energy components is the no-load current,
and because the magnetising part dominates, the angle between supply voltage
and no-load current approaches 90 degrees. **An unloaded transformer has a
dreadful power factor.** That is why an idle transformer bank still shows
reactive demand on a power analyser.

## On load: the ampere-turn balance

Connect a load and secondary current flows. Lenz's Law says that current must
oppose the change that created it, so the secondary ampere-turns set up a
**demagnetising flux** that tries to reduce the mutual flux. The moment the
mutual flux dips, the back EMF in the primary dips with it, the primary is no
longer so well opposed, and more primary current flows — restoring the mutual
flux to its original value.

All of that happens continuously and simultaneously. The practical results:

- The mutual flux in the core stays effectively **constant at all loads**.
- **Secondary load current forces primary line current up.** The transformer
  draws from the supply only what the load takes, plus losses.
- Under load the primary current is the phasor sum of the load component and
  the excitation current, so the primary power factor follows the load's power
  factor fairly closely once the transformer is reasonably loaded.

>! Energising a transformer draws an **inrush (magnetising) current that can
>! reach about 20 times rated current** for a few cycles, because the core can
>! be driven briefly into saturation. Protection must be chosen to ride through
>! it — a D-curve circuit-breaker or an HRC motor-rated fuse — never a standard
>! C-curve breaker sized only on rated current. A contractor once chased a
>! "faulty" autotransformer starter that was simply tripping the wrong breaker
>! curve on every start.

## What to remember

- Mutual induction transfers the energy; the windings never touch.
- The primary is whichever winding is fed from the supply.
- Back EMF, not resistance, limits primary current — so a transformer must
  never be energised from d.c.
- No-load current is 1-3 per cent of full load and is almost pure magnetising
  current.
- Mutual flux is the reference phasor, and it stays constant from no load to
  full load.
`,
          quiz: [
            {
              q: "Why does a transformer primary draw only a small current when the secondary is open-circuited?",
              options: [
                "The winding resistance is high enough to limit the current",
                "The self-induced back EMF almost equals and opposes the applied voltage",
                "The core saturates and blocks current flow",
                "The secondary open circuit breaks the primary circuit",
              ],
              answer: 1,
              explain: "The primary is a low-resistance coil; resistance alone would let a destructive current flow, which is exactly what happens on d.c. On a.c. the changing flux induces a back EMF nearly equal to the supply, and that opposition sets the small excitation current. Nothing about the open secondary interrupts the primary circuit.",
            },
            {
              q: "A transformer supplying a workshop is switched from half load to full load. What happens to the mutual flux in the core?",
              options: [
                "It doubles, because the secondary current doubles",
                "It halves, because the secondary demagnetising flux doubles",
                "It stays effectively constant, because primary current rises to restore it",
                "It reverses direction",
              ],
              answer: 2,
              explain: "Extra secondary current creates a demagnetising flux that momentarily drops the mutual flux; the primary back EMF drops with it and more primary current flows until the mutual flux is back where it was. Constant mutual flux at all loads is what makes the voltage ratio hold up.",
            },
            {
              q: "An unloaded 500 kVA distribution transformer is measured with a power analyser. What would you expect?",
              options: [
                "Near unity power factor and small current",
                "Very poor lagging power factor and small current",
                "Very poor leading power factor and large current",
                "Unity power factor and large current",
              ],
              answer: 1,
              explain: "The no-load current is mostly the magnetising component, which lags the applied voltage by 90 degrees, so the angle between voltage and current approaches 90 degrees and the power factor is very poor and lagging. The current itself is only 1-3 per cent of full load.",
            },
            {
              q: "Which statement about the primary winding is correct?",
              options: [
                "It is always the high-voltage winding",
                "It is always the winding with more turns",
                "It is whichever winding is connected to the supply",
                "It is always the winding nearest the core",
              ],
              answer: 2,
              explain: "Primary and secondary are defined by function, not construction. Many transformers are fully reversible: feed the low-voltage winding and it becomes the primary of a step-up transformer. The low-voltage winding is normally nearest the core, but that is an insulation decision, not what makes it primary.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "construction",
          title: "Cores, windings, insulation and the nameplate",
          minutes: 12,
          simple: "The iron in a transformer is not a solid lump; it is a stack of thin steel sheets, insulated from each other, cut in shapes like the letters E, I and U so they interlock. The coils sit around the steel or the steel wraps around the coils. The metal plate bolted to the tank tells you everything the designer decided, and you must be able to read it.",
          refs: REFS_CONSTRUCTION,
          content: `
Open a burnt-out 230/12 V transformer and you will find a stack of thin steel
stampings, two coils and a lot of paper and varnish. Every one of those choices
is deliberate. AS/NZS 60076 sets the general requirements for power
transformers, and the construction detail below is what those requirements
produce in the field.

## Laminations and the two classic core shapes

The core is built from **laminations** of high-grade silicon steel of a defined
thickness, stacked and clamped. They are laminated because a solid core would
behave like a short-circuited turn and cook itself with eddy currents (more on
that in the losses lesson). The way the stampings are shaped and stacked
decides the core type.

| Construction | Lamination shape | Where the windings sit | Suits |
|---|---|---|---|
| Core type | U-I stampings, alternate layers reversed | Windings surround the core | Higher voltages, above 1000 V a.c. |
| Shell type | E-I stampings, alternate layers reversed | Core surrounds the windings | Moderate voltages, 50-1000 V a.c. |
| Toroidal | Continuous ribbon of alloy strip wound on a former | Windings spread around the whole ring | Low leakage, compact, low noise |

In a **core-type** transformer the cross-sectional area (CSA) is uniform all
the way round, so the flux density is uniform. The magnetic path is longer and
the core lighter, the windings need more turns but each turn is shorter, and
the window space is generous — which is why core type wins where you need many
turns and a lot of insulation, i.e. at high voltage.

In a **shell-type** transformer the flux splits and returns through two outer
limbs, so the **centre limb is made twice the CSA of the outer limbs** to keep
flux density uniform. Shell construction dominates in small single-phase
transformers: fewer turns, less insulation, higher currents.

A **toroidal** core is wound tightly from thin tape of a special alloy and
consolidated under pressure. The winding is distributed around the full 360
degrees, giving a short constant-section magnetic path and very low leakage
flux. Slice a toroid in two and grind the faces flat and you have a **C-core**:
the halves are clamped around pre-wound coils with a metal band, the ground
faces pressed hard together so the residual air gap is negligible.

## Three-phase cores

A three-phase transformer can be three identical single-phase units, but it is
normally one common core carrying three identical sets of primary and secondary
windings. Most three-phase transformers are **core type**.

- **Three-limb core type** — the usual shape for distribution transformers.
  Each leg has equal CSA. Shorter length per turn than shell type, longer
  magnetic path.
- **Three-phase shell type** — extra return limbs even out the tendency of the
  core type towards unequal flux densities between phases.
- **Cruciform or stepped core** — the core cross-section is built up in steps
  to approximate a circle, so large-CSA conductors do not have to be bent
  through 90 degrees. It needs many different lamination widths and is
  expensive, so it appears mainly on large power transformers.
- Toroidal and C-core forms are also made for three-phase duty.

## Winding arrangements and coupling

- **Side by side (cheek to cheek)** — the simplest, primary beside secondary on
  the same limb. Better than putting them on separate limbs, but leakage is
  still relatively high.
- **Sandwich or pancake** — winding sections interleaved. This gives the
  closest coupling and least leakage. Used on some distribution transformers
  because the sections are easy to wind, handle and repair, and on small
  audio-frequency transformers.
- **Concentric** — one winding wound directly over the other with insulation
  between. Increasingly the standard for distribution transformers because it
  suits the Australian insulation requirements between windings.

With concentric windings the **low-voltage winding always goes next to the
core**, because it is far easier to insulate a low-voltage winding from the
earthed core than a high-voltage one. So a step-up transformer has the LV
(primary) inside and the HV (secondary) outside; a step-down transformer has
the arrangement reversed.

**Coupling** is deliberately chosen. A transformer is **close coupled** when
practically all the primary flux links the secondary. If a lot of flux bypasses
the secondary it is **loosely coupled**. A distribution transformer is
deliberately a little less than close coupled, so leakage reactance limits the
current if the overhead mains on its secondary are damaged. A neon sign
transformer is far more loosely coupled again, because its on-load voltage must
collapse well below its open-circuit voltage.

## Insulation

In power transformers, insulating oil does double duty as a liquid dielectric
and a coolant. Small non-power transformers dissipate so little heat that no
oil is needed. Solid insulation between turns, between windings, and between
windings and the earthed core or frame includes:

- presspaper and pressboard
- enamel, lacquer, polymer or varnish film on the winding wire itself
- flexible multi-layer laminated insulation materials
- mica.

## Reading the nameplate

The nameplate is the transformer's specification, and you are expected to work
from it. On an oil-cooled distribution transformer expect to find:

| Group | Data on the plate |
|---|---|
| Identity | Manufacturer, serial number, year of manufacture, diagram number |
| Electrical | Number of phases, frequency, kVA or MVA rating, HV and LV voltage ratings, HV and LV current ratings, tap voltages |
| Connection | Connection diagram, vector group and vector diagram, percentage impedance |
| Thermal | Cooling class such as ONAN, winding temperature rise, oil temperature rise |
| Physical | Type of insulating liquid, oil volume, mass of core and windings, mass of liquid, total and transport mass |

A worked reading: a plate showing 1250 kVA, 11 000 V HV, 433 V LV, 65.61 A HV,
1667 A LV, impedance 4.65 per cent, cooling ONAN, tells you the full-load
currents you will see on the CT circuits and the impedance you need to
calculate fault level.

## Terminal identification

AS/NZS 2374 sets the marking system for power transformers: a letter plus a
subscript number, **upper case for the higher-voltage winding and lower case
for the lower-voltage winding** — A1, A2 on the HV, a1, a2 on the LV; on
three-phase units A, B, C and a, b, c with N and n for the star points. Where
more than one end of a winding is brought out, the higher number is the line
terminal unless a specific phase shift is wanted. Markings are permanently
stamped on or beside the terminal. Note that network operators sometimes add
their own markings to suit installation and phase sequencing.

## On the job

- Count the limbs and look at where the coils sit: that tells you core or shell
  immediately.
- LV nearest the core is normal; find HV nearest the core and you are probably
  looking at a step-up unit.
- Never remove or "improve" interwinding barriers — they are the separation the
  Standards require.
- Photograph the nameplate before you start work. Vector group and percentage
  impedance are the two entries you will wish you had recorded.
`,
          quiz: [
            {
              q: "In a single-phase shell-type transformer, why is the centre limb made twice the cross-sectional area of the outer limbs?",
              options: [
                "To carry the mechanical weight of the windings",
                "Because the flux divides between two outer return paths, so the centre limb carries twice as much",
                "To lower the resistance of the magnetic circuit for the secondary only",
                "To increase leakage flux and limit fault current",
              ],
              answer: 1,
              explain: "The shell core gives the flux two parallel return paths through the outer limbs, so the centre limb carries the full flux and each outer limb only half. Doubling the centre CSA keeps flux density uniform, which keeps iron losses predictable.",
            },
            {
              q: "A concentric-wound distribution transformer has its low-voltage winding next to the core. Why?",
              options: [
                "The LV winding runs cooler so it protects the core",
                "It is much easier to insulate a low-voltage winding from the earthed core",
                "The LV winding carries less current, so it needs less space",
                "It reduces the turns ratio",
              ],
              answer: 1,
              explain: "The core and frame are earthed, so whichever winding sits against them must be insulated to its own voltage. Putting the LV winding there needs far less insulation than putting the HV winding there. The LV winding actually carries the larger current, so option 3 is wrong on the facts.",
            },
            {
              q: "Why is a distribution transformer deliberately made slightly less than close coupled?",
              options: [
                "To improve its efficiency at light load",
                "So that the leakage reactance limits current if the secondary mains are damaged",
                "To allow it to run on d.c. if necessary",
                "To reduce the noise it makes",
              ],
              answer: 1,
              explain: "Leakage is a design variable. A little extra leakage reactance gives some inherent current limitation on a secondary fault. A flux-leakage transformer takes the same idea much further so that the output voltage collapses under load, which is exactly what a neon sign or a welder needs.",
            },
            {
              q: "Which pair of nameplate entries would you record before paralleling two distribution transformers?",
              options: [
                "Total mass and transport mass",
                "Year of manufacture and serial number",
                "Vector group and percentage impedance",
                "Oil volume and type of insulating liquid",
              ],
              answer: 2,
              explain: "Paralleling needs the same phase-angle shift (vector group) and compatible internal impedance for load sharing, both of which are on the plate. The other entries matter for transport, records and maintenance but tell you nothing about whether the two units can be paralleled.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "emf-ratios",
          title: "The EMF equation and the transformation ratios",
          minutes: 13,
          simple: "Every turn of wire on the core gets exactly the same voltage pushed into it, because every turn sits in the same magnetic flux. So if one coil has ten times the turns of the other, it gets ten times the volts. The trade-off is current: whatever you gain in volts you lose in amps, because the transformer cannot create power out of nothing.",
          refs: REFS_RATIOS,
          content: `
This is the arithmetic you will use for the rest of your career: how many
turns, how many volts, how many amps. It all comes from one equation and one
balance.

## The EMF equation

The voltage induced in a winding depends on only three things: how fast the
flux alternates, how many turns are linked, and how much flux there is.

**V = 4.44 x flux(max) x f x N**

where flux(max) is the maximum instantaneous flux in webers, f is frequency in
hertz and N is the number of turns. The 4.44 comes from 2 x pi divided by root
2 — it converts the average rate of change of a sine wave into an RMS value.

Because designers work to a permissible **flux density** in the steel rather
than a total flux, the same equation is usually written:

**V = 4.44 x B(max) x A x f x N**

where B(max) is maximum flux density in tesla and A is the core CSA in square
metres. The link between the two forms is simply flux = B x A.

### Worked example 1 — turns per volt

A 230 V, 50 Hz transformer uses a core of CSA 40 square centimetres
(0.0040 square metres) worked at a maximum flux density of 1.2 T. How many
primary turns are needed, and how many secondary turns for a 12 V output?

1. Volts per turn = 4.44 x B x A x f = 4.44 x 1.2 x 0.0040 x 50 = **1.066 V per turn**.
2. Primary turns N1 = 230 / 1.066 = 215.8, so use **216 turns**.
3. Secondary turns N2 = 12 / 1.066 = 11.3, so use **12 turns** (round up; the
   extra fraction of a volt covers the secondary voltage drop on load).

Notice what this tells you physically: to get more volts per turn you need a
bigger core or a higher flux density. That is why a 50 Hz transformer for a
given rating is bigger and heavier than a 400 Hz aircraft transformer of the
same rating — halve the frequency and you must double the flux, hence the iron.

## Turns ratio and voltage ratio

The mutual flux is common to both windings, so it induces **the same voltage
per turn in every winding on the core**. Divide the primary volts per turn by
the secondary volts per turn and the flux cancels:

**V1 / V2 = N1 / N2**

On no load the applied voltage V1 is almost exactly equal to the induced
voltage, so this ratio is what you measure at the terminals.

### Worked example 2 — output voltage

A transformer has 1000 primary turns and 200 secondary turns, with 250 V
applied to the primary. Find the secondary voltage.

V2 = V1 x N2 / N1 = 250 x 200 / 1000 = **50 V**

The turns ratio is 5:1, so the voltage ratio is 5:1 — a step-down transformer.

## Current ratio: the ampere-turn balance

Load the secondary and current I2 flows, producing a demagnetising effect
proportional to the secondary **ampere-turns** I2 x N2. The primary responds by
drawing enough extra current to cancel it exactly:

**I1 x N1 = I2 x N2**

Rearranged, **I1 / I2 = N2 / N1** — the current ratio is the inverse of the
turns ratio. Combine everything and you have the full transformation ratio:

**V1 / V2 = N1 / N2 = I2 / I1**

Step the voltage down by five and the current steps up by five. The
volt-amperes in equals the volt-amperes out, apart from the small losses.

!FIG[transformer-core]

### Worked example 3 — secondary and primary current

A transformer has 1000 primary turns and 500 secondary turns. The primary is
fed 220 V at 50 Hz and a purely resistive 40 ohm load is connected to the
secondary. Find the output voltage, the secondary current and the primary
current.

1. Output voltage: V2 = 220 x 500 / 1000 = **110 V**
2. Secondary current: I2 = V2 / R = 110 / 40 = **2.75 A**
3. Primary current: I1 = I2 x N2 / N1 = 2.75 x 500 / 1000 = **1.375 A**

Check the ratios: turns 1000:500 = 2:1, voltage 220:110 = 2:1, current
1.375:2.75 = 1:2. Check the power: 220 x 1.375 = 302.5 VA in, 110 x 2.75 =
302.5 VA out. Equal, as it must be for an ideal transformer.

### Worked example 4 — working backwards to turns

A 400/24 V transformer has 400 turns on the primary. How many secondary turns?

N2 = N1 x V2 / V1 = 400 x 24 / 400 = **24 turns**

This transformer happens to be wound at one volt per turn, which is a common
result for a small mains transformer and a handy sanity check when you are
counting turns on a rewind.

### Worked example 5 — primary current from a load resistance

A 230/110 V transformer feeds a 22 ohm resistive load. Find the primary
current.

1. Secondary current: I2 = 110 / 22 = 5 A
2. Primary current: I1 = I2 x V2 / V1 = 5 x 110 / 230 = **2.39 A**

Or use apparent power directly: S = 110 x 5 = 550 VA, so I1 = 550 / 230 =
2.39 A. Same answer, and the VA route is usually faster on site.

> **Sanity check that saves you every time:** volt-amperes in must equal
> volt-amperes out. If your calculated primary current does not give roughly
> the same VA as the secondary, you have inverted a ratio.

## What to remember

- Same flux, same volts per turn, in every winding on the core.
- V1/V2 = N1/N2 = I2/I1. Voltage and turns go together; current goes the other
  way.
- Volts per turn = 4.44 x B x A x f. Bigger core or higher flux density means
  fewer turns.
- Ampere-turns primary equals ampere-turns secondary — this is why the primary
  current tracks the load.
- Always verify with a VA balance before you trust the number.
`,
          quiz: [
            {
              q: "A 230/23 V transformer supplies 4 A to its load. Ignoring losses, what is the primary current?",
              options: ["0.4 A", "4 A", "40 A", "0.04 A"],
              answer: 0,
              explain: "The turns and voltage ratio is 10:1 step down, so the current ratio is 1:10 the other way: I1 = I2 x V2/V1 = 4 x 23/230 = 0.4 A. Check by VA: 23 x 4 = 92 VA out, and 92/230 = 0.4 A in. Answering 40 A inverts the ratio — a step-down transformer cannot draw more primary current than secondary.",
            },
            {
              q: "A transformer core is worked at 1.1 T with a CSA of 0.005 square metres at 50 Hz. What is the volts per turn?",
              options: ["0.55 V", "1.22 V", "2.44 V", "4.44 V"],
              answer: 1,
              explain: "V per turn = 4.44 x B x A x f = 4.44 x 1.1 x 0.005 x 50 = 1.22 V. A 230 V winding would then need about 189 turns. Simply multiplying B by A gives the flux (0.0055 Wb) and forgets both the 4.44 factor and the frequency.",
            },
            {
              q: "Why does the same voltage per turn appear on both windings of a transformer?",
              options: [
                "Because both windings use the same size wire",
                "Because both windings are linked by the same mutual flux",
                "Because the windings have equal resistance",
                "Because the primary and secondary currents are equal",
              ],
              answer: 1,
              explain: "One flux, common to both windings, induces the same EMF in each turn it links. That single fact is what produces the turns-to-voltage ratio. Wire size follows from the current each winding must carry, and the currents are certainly not equal unless the ratio is 1:1.",
            },
            {
              q: "A 1000/250 turn transformer is fed 240 V and loaded with 30 ohms. What is the primary current?",
              options: ["0.5 A", "2.0 A", "8.0 A", "0.25 A"],
              answer: 0,
              explain: "V2 = 240 x 250/1000 = 60 V; I2 = 60/30 = 2 A; I1 = 2 x 250/1000 = 0.5 A. Check: 60 x 2 = 120 VA and 120/240 = 0.5 A. Answering 2 A reports the secondary current instead of the primary.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "rating-losses",
          title: "Why transformers are rated in kVA, and where the losses go",
          minutes: 12,
          simple: "A transformer does not know or care what your load's power factor is; it only knows how many amps are heating its windings and how many volts are stressing its insulation. So it is rated in volt-amperes, not watts. The heat comes from two places: the copper wire, which gets worse as load rises, and the steel core, which loses the same amount whenever the transformer is switched on.",
          refs: REFS_RATING,
          content: `
A 50 kVA transformer will not deliver 50 kW. Understanding why is the
difference between sizing a transformer correctly and having it fail early.

## Rated in volt-amperes, not watts

Once a transformer is installed, nobody controls what gets plugged into it. The
designer must assume the load could be anything, at any power factor. Two
things limit the transformer physically:

- **Current** heats the windings (copper loss goes as current squared).
- **Voltage** stresses the insulation and sets the core flux.

Neither depends on power factor. So a transformer is rated on the product of
its rated secondary voltage and rated secondary current: **apparent power in
VA, kVA or MVA**.

A single-phase transformer able to deliver 100 A at 500 V is rated at
500 x 100 = 50 000 VA = **50 kVA**. What that means in useful watts depends on
the load:

| Load power factor | Full-load current | Real power delivered |
|---|---|---|
| 1.0 | 100 A | 50 kW |
| 0.8 lagging | 100 A | 40 kW |
| 0.5 lagging | 100 A | 25 kW |

The current — and therefore the heating — is 100 A in every row. Only the
useful watts change. Rating the unit in watts would be meaningless.

### Worked example 1 — sizing a transformer in kVA

A lighting circuit is to be fed from a dedicated transformer: 20 metal halide
luminaires, each drawing 3.2 A at 230 V with a power factor of 0.87 lagging.
The banks of four are time-delayed so they do not all strike together. What kVA
rating is required?

1. Total current: I = 20 x 3.2 = 64 A
2. Apparent power: S = V x I = 230 x 64 = 14 720 VA = **14.72 kVA**
3. Real power (for interest): P = S x power factor = 14 720 x 0.87 = **12.8 kW**

A standard **15 kVA** transformer covers the load. Note the trap: if you had
sized on the 12.8 kW figure and bought a 13 kVA unit, it would run permanently
overloaded by about 13 per cent, because the current is set by the VA, not the
watts. The staged switching matters too — it keeps the combined magnetising
inrush within what the protection can ride through.

### Worked example 2 — full-load currents from the rating

A 5 kVA single-phase 50 Hz transformer has a 240 V primary and 120 V secondary.

- Primary full-load current: I1 = 5000 / 240 = **20.8 A**
- Secondary full-load current: I2 = 5000 / 120 = **41.7 A**

These are the numbers you set overload protection and select cable against.

The **current rating of the windings depends on how fast heat can get out**.
That makes the rating a function of temperature rise plus ambient temperature.
A transformer in a hot roof space or an unventilated cupboard must be derated;
the same unit in a cool, ventilated switchroom can carry more.

## Iron losses: constant whenever energised

The power absorbed by the core is called **iron loss** and has two parts.

**Eddy-current loss.** The alternating flux induces an EMF in the steel itself.
In a solid core that EMF drives large circulating currents which dump heat. The
cure is **lamination**: thin sheets, each varnished or oxide-coated so it is
insulated from its neighbours, break the current paths into many small,
high-resistance loops. Lamination reduces eddy-current loss dramatically but
never eliminates it.

**Hysteresis loss.** Every cycle, the magnetic domains in the steel are dragged
around and re-aligned; on 50 Hz supply the magnetic polarity reverses 100 times
a second. Work is done shuffling those domains and it comes out as heat. The
energy lost per cycle is proportional to the area enclosed by the material's
B-H (hysteresis) loop. **Silicon steel** has a narrow loop — a small enclosed
area — so it loses far less energy per cycle than carbon steel, which is
exactly why laminations are made from it.

Both iron losses depend on supply voltage and frequency, not on load. They are
present the moment the transformer is energised and are effectively **constant
from no load to full load**.

## Copper losses: they follow the load squared

Copper loss is the I squared R heating in the windings:

**P(cu) = I1 squared x R1 + I2 squared x R2**

Winding resistance is low, but because the loss goes as the *square* of
current, it is negligible at light load and dominant at heavy load. Halve the
load and the copper loss falls to a quarter:

| Loading | Copper loss as a fraction of full-load copper loss |
|---|---|
| 25 per cent | 0.0625 |
| 50 per cent | 0.25 |
| 75 per cent | 0.5625 |
| 100 per cent | 1.0 |
| 125 per cent | 1.5625 |

Plot the two losses against load current and you get the classic picture: a
flat horizontal line for iron loss and a rising curve for copper loss, crossing
somewhere around three-quarters to five-sixths of full load.

## Cooling sets the rating

Everything above ends up as heat, and heat is what kills winding insulation.
The cooling system therefore determines both the **life** and the **kVA
rating** of the transformer: improve the cooling and you can push more kVA
through the same iron and copper. A transformer held to an 80 degree Celsius
rise uses roughly 13 to 23 per cent less energy than the same unit run at a
150 degree rise, because hotter copper has higher resistance and higher losses.

Small transformers shed heat by convection and radiation from their own
surface. As size grows, volume grows faster than surface area, so at some point
natural surface cooling is not enough and forced or liquid cooling must take
over — the subject of the power transformer lesson.

## On the job

- Size transformers on VA, from the actual current the load will draw.
- Iron loss is your standing cost: an energised, unloaded transformer still
  burns energy 8760 hours a year.
- Copper loss quadruples when the load doubles.
- Derate for high ambient temperature and for poor ventilation.
- Silicon steel and thin laminations are loss-control measures, not structural
  ones — never replace a laminated part with a solid one.
`,
          quiz: [
            {
              q: "A 100 kVA transformer supplies a load at 0.7 power factor lagging and full rated current. What real power is being delivered?",
              options: ["100 kW", "70 kW", "143 kW", "30 kW"],
              answer: 1,
              explain: "P = S x power factor = 100 x 0.7 = 70 kW. The transformer is still fully loaded in terms of heating because the current is at its rated value; the poor power factor simply means less of that current does useful work.",
            },
            {
              q: "A transformer has full-load copper losses of 400 W and iron losses of 150 W. What are the copper losses at half load?",
              options: ["200 W", "100 W", "75 W", "400 W"],
              answer: 1,
              explain: "Copper loss varies with the square of load current: 0.5 squared = 0.25, so 0.25 x 400 = 100 W. Halving the loss to 200 W is the common mistake — that would only be true if the loss were proportional to current rather than current squared. The 150 W iron loss does not change.",
            },
            {
              q: "Why is a transformer core built from thin insulated laminations rather than solid steel?",
              options: [
                "To reduce hysteresis loss by shrinking the B-H loop",
                "To reduce eddy-current loss by breaking up the circulating current paths",
                "To make the core lighter and cheaper to transport",
                "To increase the leakage flux and limit fault current",
              ],
              answer: 1,
              explain: "Laminating attacks eddy currents: many thin, insulated, high-resistance paths instead of one big low-resistance one. Hysteresis loss is attacked separately by choosing silicon steel, whose narrow B-H loop encloses a small area and so loses less energy each cycle.",
            },
            {
              q: "Sixteen luminaires each draw 2.5 A at 230 V with a power factor of 0.9. What size transformer is required?",
              options: [
                "8.3 kVA, because you use the real power",
                "9.2 kVA, from the total current and voltage",
                "4.6 kVA, because half the load is reactive",
                "40 kVA, from the sum of the individual ratings",
              ],
              answer: 1,
              explain: "Total current is 16 x 2.5 = 40 A, so S = 230 x 40 = 9200 VA = 9.2 kVA, and you would fit a 10 kVA unit. The real power is 9.2 x 0.9 = 8.28 kW, but sizing on that figure would leave the windings carrying more current than they are rated for.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "efficiency-regulation",
          title: "Open-circuit and short-circuit tests, efficiency, regulation and percentage impedance",
          minutes: 14,
          simple: "You cannot measure a big transformer's losses by weighing the heat it makes. Instead you run two cheap tests: one with the output open, which measures the steel losses, and one with the output shorted at low voltage, which measures the copper losses. From those two numbers you can work out efficiency, how much the output voltage sags on load, and how much fault current the transformer can push.",
          refs: REFS_PERFORMANCE,
          content: `
A power transformer can be over 99 per cent efficient, which means measuring
input and output power directly and subtracting is hopeless — the difference is
smaller than the instrument error. Instead you measure the **losses** directly
with two standard tests, then calculate everything else from them.

## The no-load (open-circuit) test — iron losses

Connect the transformer at its **rated voltage and frequency** with the
secondary open-circuited. Measure input power with a wattmeter on the primary.

Because no-load current is under about 3 per cent of full-load current, the
primary I squared R loss is under 0.1 per cent of full-load copper loss —
negligible. The core, however, is at full rated flux. **The wattmeter reading
is therefore taken as the total iron loss.** The test also gives you the
excitation current and the no-load power factor.

## The short-circuit test — copper losses

Short the secondary through an ammeter. Feed the primary from a **variac** and
wind the voltage up slowly from zero until **rated current** flows in the
windings. That usually takes only a few per cent of rated voltage.

Because the applied voltage is tiny, the core flux is tiny and iron losses are
negligible, while the windings are carrying full rated current. **The wattmeter
reading is therefore taken as the full-load copper loss.**

>! The short-circuit test is run from a variac starting at zero volts. Applying
>! anything near rated voltage to a transformer with a shorted secondary will
>! produce a fault current of many times rated current and can destroy the
>! transformer and the test set. Wind up slowly and watch the ammeter, not the
>! voltmeter.

## Efficiency

Efficiency is output over input, but since input equals output plus losses:

**Efficiency = output / (output + copper loss + iron loss)**

with output = V2 x I2 x cos(phi).

### Worked example 1 — efficiency at a stated load

A single-phase 11 kV/230 V transformer supplies an inductive load of 30 A at
0.9 power factor lagging. A short-circuit test gave full-load copper losses of
330 W, and an open-circuit test gave iron losses of 230 W. Find the efficiency.

1. Output: P(out) = 230 x 30 x 0.9 = **6210 W**
2. Total losses: 330 + 230 = 560 W
3. Input: 6210 + 560 = 6770 W
4. Efficiency = 6210 / 6770 x 100 = **91.73 per cent**

That looks poor for a transformer, and it is — this is a small unit carrying a
load at mediocre power factor. Raise the power factor to unity and the same
losses give 6900 / 7460 = 92.5 per cent.

### Worked example 2 — efficiency on a resistive load

Tests on a 19 kV/480 V, 50 Hz single-phase transformer gave iron losses of
526 W and full-load copper losses of 570 W. It supplies a 9.6 ohm resistive
load at 480 V. Find the efficiency.

1. Load current: I2 = 480 / 9.6 = 50 A
2. Output (resistive, so power factor = 1): P = 480 x 50 = **24 000 W**
3. Losses: 526 + 570 = 1096 W
4. Efficiency = 24 000 / 25 096 x 100 = **95.63 per cent**

## Maximum efficiency

Iron loss is fixed; copper loss rises with the square of load. **Maximum
efficiency occurs at the loading where copper loss has risen to equal the iron
loss.**

Loading for maximum efficiency = square root of (iron loss / full-load copper
loss).

Using the first example: square root of (230 / 330) = square root of 0.697 =
**0.8349**, or about 83.5 per cent of full load. Check it:

- Copper loss at that loading = 0.8349 squared x 330 = 0.697 x 330 = **230 W** —
  equal to the iron loss, as predicted.
- Output = 6210 x 0.8349 = 5184.7 W
- Input = 5184.7 + 230 + 230 = 5644.7 W
- Efficiency = 5184.7 / 5644.7 x 100 = **91.85 per cent**, slightly better than
  at full load.

Try 0.82 or 0.85 loading and the efficiency comes out a few thousandths of a
per cent lower. That is why distribution transformers are deliberately sized so
their normal daily load sits a bit below nameplate rating.

## Voltage regulation

The secondary voltage falls as load is applied, because of winding resistance
and leakage reactance. **Voltage regulation** quantifies that droop:

**Regulation (per cent) = (V(no load) - V(full load)) / V(full load) x 100**

To obtain a valid figure, hold the primary at rated voltage and state the load
power factor — the answer is only valid for that power factor, that ratio and
that load current. (This expression is strictly accurate for single-phase
transformers.)

### Worked example 3 — regulation

A transformer measures 243 V at its secondary terminals on no load. With full
load applied at 0.8 power factor lagging the terminal voltage falls to 233 V.

Regulation = (243 - 233) / 233 x 100 = 10 / 233 x 100 = **4.29 per cent**

Good regulation means a small number. A distribution transformer with 4 per
cent regulation, fed at nominal voltage, keeps consumers inside the statutory
230 V +10 / -6 per cent band. Very low regulation is not automatically
desirable: it goes hand in hand with low impedance, and low impedance means
high fault current.

## Percentage impedance

**Percentage impedance is the percentage of rated primary voltage needed to
drive rated full-load current through the secondary when the secondary
terminals are short-circuited.**

**Z per cent = V(ps) / V(p) x 100**

where V(ps) is the reduced primary test voltage that produces rated secondary
current with the secondary shorted, and V(p) is rated primary voltage. It is
measured with exactly the short-circuit test rig described above, minus the
wattmeter. Typical distribution transformer values are **1 to 5 per cent**, and
the figure is stamped on the nameplate.

### Worked example 4 — impedance and prospective fault current

An 11 kV/415 V, 500 kVA three-phase transformer needed 495 V on the primary to
circulate rated current with the LV shorted.

1. Z per cent = 495 / 11 000 x 100 = **4.5 per cent**
2. Secondary full-load current: I = 500 000 / (1.732 x 415) = 500 000 / 718.8 =
   **695.6 A**
3. Prospective short-circuit current at the LV terminals =
   full-load current / (Z per cent / 100) = 695.6 / 0.045 = **15 460 A**, or
   about 15.5 kA.

That last figure is why percentage impedance matters to you: it sets the
prospective short-circuit current (PSC) the switchboard, its busbars and every
protective device downstream must be able to withstand and break. Fit a
replacement transformer with a lower percentage impedance and you silently
raise the fault level of the whole installation, possibly beyond the breaking
capacity of the installed devices.

## What to remember

- Open circuit at rated voltage gives iron loss; short circuit at rated current
  gives copper loss.
- Efficiency = output / (output + copper + iron).
- Maximum efficiency is where copper loss equals iron loss.
- Regulation compares no-load and full-load secondary voltage, and is only
  meaningful with the power factor stated.
- Percentage impedance sets the fault level. Never substitute a transformer
  with a different Z per cent without checking the switchboard ratings.
`,
          quiz: [
            {
              q: "In the short-circuit test, why can the wattmeter reading be taken as the full-load copper loss?",
              options: [
                "Because the secondary current is zero so only the primary heats",
                "Because the applied voltage is low, so core flux and iron losses are negligible while rated current flows",
                "Because copper loss is always much larger than iron loss",
                "Because the wattmeter cannot register iron losses",
              ],
              answer: 1,
              explain: "The two tests each suppress one loss. The short-circuit test runs at a few per cent of rated voltage, so the flux and therefore the iron loss are tiny, but the windings carry full rated current. The open-circuit test does the reverse: full flux, almost no current.",
            },
            {
              q: "A transformer has iron losses of 200 W and full-load copper losses of 800 W. At what loading is its efficiency greatest?",
              options: ["25 per cent", "50 per cent", "71 per cent", "100 per cent"],
              answer: 1,
              explain: "Maximum efficiency occurs where copper loss equals iron loss. Loading = square root of (200/800) = square root of 0.25 = 0.5, i.e. 50 per cent of full load. Check: 0.5 squared x 800 = 200 W, equal to the iron loss.",
            },
            {
              q: "A transformer delivers 234 V on no load and 225 V at full load. What is its voltage regulation?",
              options: ["3.85 per cent", "4.00 per cent", "9.00 per cent", "0.96 per cent"],
              answer: 1,
              explain: "Regulation = (234 - 225)/225 x 100 = 9/225 x 100 = 4.00 per cent. Dividing by the no-load voltage instead gives 3.85 per cent, which is the common slip; the definition used here divides by the full-load value.",
            },
            {
              q: "A replacement 415 V transformer of the same kVA has 2 per cent impedance instead of the original 5 per cent. What is the main consequence?",
              options: [
                "The transformer will be less efficient",
                "The prospective short-circuit current at the switchboard rises sharply",
                "The secondary voltage will be 3 per cent low",
                "The transformer can no longer be paralleled with itself",
              ],
              answer: 1,
              explain: "Fault current is roughly full-load current divided by per-unit impedance, so dropping from 5 per cent to 2 per cent multiplies the prospective short-circuit current by 2.5. The switchboard, busbars and protective devices may no longer have adequate breaking or withstand capacity. Regulation would improve slightly, which is exactly what disguises the danger.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "three-phase-connections",
          title: "Three-phase connections, vector groups and parallel operation",
          minutes: 14,
          simple: "Three-phase transformers have three sets of coils, and each set can be joined end to end in a ring (delta) or all tied to a common point (star). The choice changes the output voltage by a factor of about 1.73 and can shift the timing of the output by 30 degrees. Two transformers can only share a load if they agree about voltage, timing and which way round their coils are wound.",
          refs: REFS_THREEPHASE,
          content: `
The transformer on the pole outside a suburban house is almost certainly a
delta-star unit, and the reason is written into the earthing system of the
entire country. This lesson is about which connection to use, how the numbers
work out, and what has to match before two transformers can run in parallel.

## The four common connections

Both primary and secondary windings can be star (wye, Y) or delta (D). In power
and distribution transformers the connections are made inside the tank.

| Connection | Written as | Typical use |
|---|---|---|
| Star-star | YY | HV transmission, where windings only need insulating for phase voltage |
| Delta-delta | DD | Industrial supplies where no neutral is needed; one unit can be removed for open-delta running |
| Delta-star | Dy | The standard MEN distribution transformer, and step-up at the head of an HV line |
| Star-delta | Yd | Step-down at the end of a long transmission line |

**Star-star** is economical at high voltage because the voltage across each
phase winding is 1.732 times less than the line voltage, so the winding
insulation is cheaper. **Delta-star step-up feeding a star-delta step-down** is
the classic long-distance transmission pairing.

For the Australian **MEN** system, the **delta-star step-down** transformer is
what makes the low-voltage network possible: the star point of the secondary
gives both the neutral conductor and a solid, stable earth reference for the
whole distribution area. The delta primary also gives circulating triplen
harmonic currents somewhere to run, keeping them off the HV lines.

**Zigzag (interconnected star, Z)** windings split each phase winding into two
halves placed on different limbs and connect them in opposition. The result is
a winding set that handles a heavily unbalanced or single-phase-to-neutral load
without unbalancing the flux, and that presents a low zero-sequence impedance.
You meet zigzag windings in **earthing (neutral-earthing) transformers**, in
harmonic-mitigating transformers, and as the Yz or Dz secondaries of some
distribution units.

## Vector groups

Delta-star and star-delta connections shift the secondary line voltage relative
to the primary — normally by 30 degrees. That shift is recorded on the
nameplate as a **vector group**, using clock-face notation: the HV winding is
the twelve, and the number tells you where the corresponding LV phasor points.

- **Dyn11** — delta HV, star LV with the neutral brought out, LV leading the HV
  by 30 degrees. The commonest Australian distribution transformer.
- **Dyn1** — same windings, LV lagging by 30 degrees.
- **Yyn0** — star-star, no phase shift.
- **Dd0** — delta-delta, no phase shift.
- **Yzn11**, **Dzn0** — zigzag secondaries used where unbalance or harmonics
  must be handled.

Two transformers with different vector groups cannot be paralleled, no matter
how well the voltages match.

### Worked example — output line voltage for each connection

Take a three-phase step-down transformer supplied at 400 V, wound with 200
turns per phase on the primary side and 40 turns per phase on the secondary
(a phase turns ratio of 5:1).
Find the secondary line voltage for each of the four connections.

**(a) Star-star**

1. Primary phase voltage: V(p1) = 400 / 1.732 = 231 V
2. Secondary phase voltage: V(p2) = 231 x 40 / 200 = 46 V
3. Secondary line voltage: V(L2) = 1.732 x 46 = **80 V**

**(b) Delta-delta**

1. Primary phase voltage = line voltage = 400 V
2. Secondary phase voltage = 400 x 40 / 200 = 80 V
3. Secondary line voltage = phase voltage = **80 V**

**(c) Delta-star**

1. Primary phase voltage = 400 V
2. Secondary phase voltage = 400 x 40 / 200 = 80 V
3. Secondary line voltage = 1.732 x 80 = **139 V**

**(d) Star-delta**

1. Primary phase voltage = 400 / 1.732 = 231 V
2. Secondary phase voltage = 231 x 40 / 200 = 46 V
3. Secondary line voltage = phase voltage = **46 V**

Same iron, same copper, same turns — four different outputs spanning nearly 3:1
(46 V to 139 V). **Always apply the turns ratio to the phase voltages, then
convert to line voltage according to how each side is connected.**

## Winding polarity

Before any two transformers can be paralleled you must know their
**instantaneous polarity**. On a diagram this is shown by a dot at the start of
each winding: when the dotted end of the primary is instantaneously positive,
so is the dotted end of the secondary.

Physical direction of winding matters. Two transformers may have identically
wound primaries but secondaries wound in opposite directions, so their induced
voltages act in opposite directions — Lenz's Law demands the secondary flux
oppose the mutual flux, and the winding direction decides which terminal that
makes positive.

### Testing polarity

1. Link one primary terminal to one secondary terminal.
2. Feed the primary from a **variac** at a low, safe test voltage.
3. Read a voltmeter across the two remaining (unlinked) terminals.

- Reads **more than** the applied voltage: **additive polarity**. The windings
  are in series aiding, so dissimilar ends have been bridged. The open end of
  the primary and the bridged end of the secondary are the "start" ends.
- Reads **less than** the applied voltage: **subtractive polarity**. Similar
  ends are bridged, and both open ends are the starts (dot them).

## Paralleling: what has to match

Transformers are paralleled to carry a load beyond the rating of an existing
unit — cheaper than replacing it — and so that one can be taken out for
maintenance without losing supply. Conditions for **single-phase** transformers:

- **Equal output voltage.** Any voltage difference drives a circulating current
  between the two secondaries, limited only by winding impedance. It generates
  heat, loads one transformer against the other and steals capacity from the
  load. Equal voltages means equal turns ratios for the same style of
  connection.
- **Compatible internal impedance.** Load sharing between paralleled units is
  set by their impedances. Two units only share according to design if their
  percentage impedances match; a mismatch overloads the one with the lower
  impedance long before the other reaches its rating.
- **Identical instantaneous polarity.** Get this wrong and the two secondaries
  end up in series and short-circuited on themselves. Enormous circulating
  currents flow in both primaries and secondaries.

For **three-phase** transformers, two more conditions apply:

- **Same phase sequence.** Cross-connected sequences at best short-circuit
  between lines, driving heavy circulating currents and near-certain damage to
  both transformers and possibly the installation.
- **Same phase-angle shift (same vector group).** A Dyn11 cannot be paralleled
  with a Dyn1: the 60-degree difference between their secondaries appears
  across the paralleling link.

>! Always verify voltage, polarity, phase sequence and vector group **before**
>! energising a paralleled or newly connected transformer, and prove it with a
>! voltmeter across the open paralleling link — it should read close to zero.
>! An incorrectly connected transformer can destroy itself in seconds and puts
>! anyone standing at the switchboard at risk of arc flash and electric shock.

## On the job

- Turns ratio applies to phase voltages, never straight to line voltages.
- Dyn11 is the default Australian distribution connection; the star point gives
  the MEN neutral and earth reference.
- Zigzag windings are for unbalance and harmonics, and for earthing
  transformers.
- Never parallel across differing vector groups or phase sequences.
- Prove zero volts across the open link before closing it.
`,
          quiz: [
            {
              q: "A three-phase transformer has 300 turns per phase primary and 30 turns per phase secondary, connected delta-star and fed at 11 000 V line. What is the secondary line voltage?",
              options: ["1100 V", "635 V", "1905 V", "367 V"],
              answer: 2,
              explain: "Delta primary means phase voltage equals line voltage, 11 000 V. Secondary phase voltage = 11 000 x 30/300 = 1100 V. The star secondary gives line voltage = 1.732 x 1100 = 1905 V. Answering 1100 V forgets the star conversion; 635 V wrongly divides instead of multiplying.",
            },
            {
              q: "Why is delta-star the standard connection for an Australian LV distribution transformer?",
              options: [
                "It gives the highest possible secondary voltage",
                "The star point provides the MEN neutral and a stable earth reference",
                "It is the only connection that avoids a phase shift",
                "Delta windings need less insulation than star windings",
              ],
              answer: 1,
              explain: "The MEN system needs a neutral point that is both a current-carrying conductor and a stable earth reference; the secondary star point provides exactly that. The delta primary also gives triplen harmonic currents a circulating path. Delta-star does introduce a 30-degree shift, and it is star windings, not delta, that need less insulation for a given line voltage.",
            },
            {
              q: "During a polarity test at 240 V, the voltmeter across the two unlinked terminals reads 264 V. What does that tell you?",
              options: [
                "Subtractive polarity, similar ends are bridged",
                "Additive polarity, dissimilar ends are bridged",
                "The transformer has an interwinding short",
                "The turns ratio is 1.1:1 and polarity cannot be determined",
              ],
              answer: 1,
              explain: "A reading higher than the applied voltage means the two windings are in series aiding, which is additive polarity, so dissimilar ends have been bridged. A subtractive connection reads less than the supply because the windings oppose. The 24 V difference simply reflects the secondary voltage of the transformer.",
            },
            {
              q: "Two 500 kVA transformers with the same voltage ratio and vector group are paralleled, but one has 4 per cent impedance and the other 6 per cent. What happens?",
              options: [
                "They share the load equally at 250 kVA each",
                "The 4 per cent unit takes the greater share and reaches full load first",
                "The 6 per cent unit takes the greater share and reaches full load first",
                "A large circulating current flows even with no load connected",
              ],
              answer: 1,
              explain: "Load divides in inverse proportion to impedance, so the lower-impedance unit takes more current: roughly 60 per cent against 40 per cent here. It reaches its rating while the other is still lightly loaded, so the pair cannot deliver a full 1000 kVA. No circulating current flows on no load because the voltage ratios and vector groups match.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "power-transformer-plant",
          title: "Power transformer plant: oil, cooling, tap changers, testing and maintenance",
          minutes: 14,
          simple: "A big oil-filled transformer is a tank of insulating oil with the coils sitting in it. The oil both insulates and carries heat out to the fins on the outside. Bolted to the tank is a collection of gadgets that watch the oil, catch gas bubbles from an internal fault, and change the output voltage a step at a time. Servicing one is mostly about testing the oil and proving the alarms work.",
          refs: REFS_PLANT,
          content: `
Power transformers are the units built for transmission and distribution
voltages and high currents. Like small transformers they are single- or
three-phase and core- or shell-type, but they are also classified by their
insulating and cooling fluid: **liquid filled, gas filled or dry type**.

## What is bolted to the tank

| Component | What it does |
|---|---|
| Tank | Houses core, windings and oil; corrugated or finned to increase heat-dissipating surface |
| Conservator tank | Holds a reservoir of oil and takes up the expansion and contraction as the oil heats and cools |
| Oil level indicator | Sight gauge on the conservator giving an instant check on oil level |
| Buchholz (gas-actuated) relay | Sits in the pipe between tank and conservator; collects gas bubbles from an internal fault, alarms on slow gassing and trips on a surge |
| Bushings | Insulated feed-throughs taking HV and LV connections through the tank wall |
| Bushing current transformers | Ring CTs around the bushing stem for metering and protection |
| Tap changer | Adjusts the turns ratio to correct the output voltage |
| Tap changer motor drive | Operates on-load tap changers, usually under an automatic voltage regulator (AVR) |
| Core and windings | The active part, clamped to survive fault forces |
| Oil release valve | Drains oil for sampling and maintenance |
| Vacuum valve | Lets air and moisture be drawn out of the oil |
| Breather with silica gel | Dries the air drawn in as the oil contracts; the desiccant changes colour when spent |

The tank is more than a box. Load changes cause the oil to expand and contract,
so the tank sees alternating pressure and occasional vacuum and must be built
to take it without deforming or stress cracking. Even the paint matters:
low-sheen black, green or grey finishes let the oil run cooler than a glossy or
light finish.

## Tap changing

The voltage delivered to consumers drifts with load and with distance down the
feeder, so most power transformers can adjust their turns ratio:

- **Off-load (off-circuit) tap changer** — the transformer must be de-energised
  and isolated before the tap is moved. Cheap, used where the setting is chosen
  once at commissioning. Typical distribution transformers offer taps at plus
  or minus 2.5 and 5 per cent.
- **On-load tap changer (OLTC)** — changes taps while the transformer is
  energised and loaded, using a diverter switch so the load current is never
  broken. Motor driven and usually controlled automatically by an AVR, so line
  voltage is regulated with no manual intervention. Used where the transformer
  is important and regulation is needed continuously.

Taps are almost always on the **HV winding**, where the current is lower and
the switching duty easier.

## Cooling media and the nameplate code

Two media dominate: **air (A)** and **oil (O)**. Nameplate abbreviations follow
the IEC scheme and state the medium and how it is circulated — for example
**ONAN** is Oil Natural, Air Natural, and **ONAF** is Oil Natural, Air Forced.
**SF6 gas** transformers are used where oil would be a fire, explosion or leak
hazard, such as underground or offshore substations.

- **Air (dry type)** — ducts between coils and between core and housing let air
  be blown through. The air must be filtered, because dust settling in the
  ducts absorbs moisture and eventually causes faults. Air-blast cooling suits
  installations where weight, space or fire risk rules out oil, but it is
  rarely used above about 20 kV or on very large units.
- **Oil natural** — the whole active part is immersed in transformer oil. Oil
  conducts heat from core and windings to the tank wall and the external
  cooling tubes, where it is given up to the surrounding air, and circulates by
  natural convection. Oil insulates and cools at the same time.
- **Forced circulation** — on very large units convection is not fast enough.
  Oil is drawn from the top of the tank, pumped through an air- or water-cooled
  heat exchanger, and returned to the bottom of the tank.

## Transformer oil

Oil is chosen for more than dielectric strength. **Viscosity** sets how freely
it circulates. **Purity** limits oxidation and sludge formation. Typical
**flash point is above 140 degrees Celsius** and **fire point above 170 degrees
Celsius**.

The most common power transformer worldwide is the hermetically sealed oil
type, where the oil never meets air — but it still degrades and must be tested.
A sample is drawn from the tank with the transformer de-energised and sent to
an accredited laboratory.

| Test | What it detects |
|---|---|
| Visual check of colour, level and sludge | Ageing and contamination; sludge bakes onto windings and blocks cooling ducts |
| Dielectric breakdown voltage | Water, dirt and conductive particles lowering the insulation strength |
| Dissolved gas analysis (DGA) | Gases characteristic of arcing, partial discharge or overheating inside the tank |
| Interfacial tension (IFT) | Polar contaminants and the onset of oxidation |
| Acid number | Acidic by-products of oil breakdown that attack insulation |
| Power factor (dissipation factor) test | Overall deterioration and moisture in the oil |

## Failure modes

- **Earth faults** — insulation failure lets a winding or connection short to
  the earthed core, frame or tank.
- **Interwinding faults** — insulation between primary and secondary breaks
  down, putting HV onto the LV system.
- **Shorted turns** — adjacent turns weld together, changing winding
  resistance and the ratio, and generating local heat.
- **Open circuit** — a broken winding or failed joint.

Causes behind those: normal ageing, high ambient temperature, moisture ingress,
internal overtemperature, overvoltage transients, sustained overload and poor
workmanship.

## Basic tests before it goes into service

1. **Visual inspection** — signs of overheating, discoloured varnish,
   mechanical damage, leaks, damaged bushings.
2. **Insulation resistance test** — with an insulation resistance tester,
   between each winding and earth and between windings, checked against the
   minimum requirement.
3. **Continuity test** — with an ohmmeter, to prove no open circuits and to
   help identify which terminals belong to which winding.

For power and distribution transformers add specialised tests, including
**winding resistance** measured with a high-resolution (low-resistance)
ohmmeter.

Commissioning a three-phase power transformer on site typically also covers:
voltage ratio on all three phases at every tap position; vector group
verification; nameplate impedance; insulation resistance at 5 kV primary to
tank, secondary to tank and primary to secondary; control and power cabling
insulation at 1 kV; bushing condition; tap changer operation and indication;
oil levels in main tank and tap-change compartment; oil valve positions;
silica gel condition; functional testing of every alarm and trip contact
including temperature and pressure devices; winding and oil temperature
indicator accuracy; and fan and pump starting, rotation direction and overload
protection.

## Installation and protection

AS/NZS 3000:2018 deals with transformers principally in **Clause 4.14**, which
covers installation, equipment connected to secondary circuits, control and
protection, isolating transformers and autotransformers, and in **Clause 7.4**,
which covers protection by electrical separation and the testing and
verification that goes with it (7.4.8). **Clause 2.7.2** deals with protection
by insulation or separation, including adequate insulation, screening or
separation of windings.

>! Transformer inrush current can reach around **20 times rated current** for
>! the first few cycles. Protective devices must be selected to ride through
>! that surge while still protecting against overload and short circuit — a
>! D-curve circuit-breaker or an equivalent time-delayed device. A standard
>! C-curve breaker sized on rated current will nuisance-trip on every
>! energisation, and the temptation to simply fit a larger breaker leaves the
>! transformer unprotected against overload.

## On the job

- Record oil level, breather colour and any Buchholz alarm on every visit.
- Sample oil de-energised, never from a running transformer, and use an
  accredited laboratory.
- Prove ratio at every tap when commissioning, not just at the service tap.
- Insulation resistance and continuity are the two tests that catch most faults
  before energisation.
- Protection must be chosen for inrush, not just for rated current.
`,
          quiz: [
            {
              q: "What does a Buchholz relay detect?",
              options: [
                "Overcurrent in the secondary winding",
                "Gas produced by an internal fault, collecting in the pipe to the conservator",
                "Loss of cooling fan supply",
                "Earth leakage on the LV neutral",
              ],
              answer: 1,
              explain: "The Buchholz relay sits in the pipe between the tank and the conservator and catches gas bubbles generated by arcing or overheating inside the oil, alarming on slow accumulation and tripping on a sudden oil surge. Overcurrent and earth leakage are the job of separate protection relays fed from CTs.",
            },
            {
              q: "A transformer nameplate is marked ONAF. What does that mean?",
              options: [
                "Oil natural circulation, air forced over the radiators",
                "Oil is not present; air-cooled with a fan",
                "Oil forced by pump, air natural convection",
                "Oil-filled, non-flammable type",
              ],
              answer: 0,
              explain: "The IEC code reads medium then circulation method for the internal cooling, then the same for the external: Oil Natural, Air Forced — the oil circulates by convection while fans blow across the radiators. Pumped oil with natural air would be OFAN.",
            },
            {
              q: "Why must an oil sample be taken with the transformer de-energised?",
              options: [
                "The oil is too hot to handle when energised",
                "Because the drain valve is inside the HV enclosure and the unit must be isolated for safe access",
                "Because dissolved gas analysis only works on cold oil",
                "The oil level indicator is unreliable under load",
              ],
              answer: 1,
              explain: "Sampling means opening a valve on a live HV apparatus at the drain point; the transformer is isolated and de-energised so the work can be done safely. Hot oil complicates handling but the safety reason is access to energised plant, and DGA is performed on samples taken under controlled conditions rather than requiring cold oil.",
            },
            {
              q: "A new 15 kVA transformer trips its C-curve circuit-breaker every time it is switched on, but the load is well within rating. What is the most likely cause and cure?",
              options: [
                "A shorted turn; rewind the transformer",
                "Magnetising inrush current; fit a D-curve breaker of the same nominal rating",
                "Undersized cable; increase the cable size",
                "Wrong tap selected; move to the next tap",
              ],
              answer: 1,
              explain: "Inrush of up to about 20 times rated current for a few cycles trips instantaneous elements set for ordinary loads. The fix is a device with a delayed instantaneous characteristic, such as a D-curve breaker, at the same nominal current so overload protection is retained. Fitting a bigger breaker instead would leave the windings unprotected.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "special-transformers",
          title: "Multiple secondaries, autotransformers, isolating and welding transformers",
          minutes: 13,
          simple: "Not every transformer has two separate coils. Some have one coil with a tap partway along, sharing part of the winding between input and output; some have several outputs from one core; some are deliberately made inefficient so their voltage collapses under load, which is exactly what a welder needs. Each type has its own safety catch.",
          refs: REFS_SPECIAL,
          content: `
Once you understand turns, volts and ampere-turns, the special transformers are
just variations on the theme. What changes is what each one is for — and where
each one can bite you.

## Transformers with multiple secondaries

When several voltages are needed it is usually cheaper to wind several
secondaries on one slightly larger core than to buy several transformers.
Safety may occasionally force separate transformers, but one core with three
secondaries is the normal answer.

The voltage and current ratios still apply to each winding individually. The
catch is the rating: **the VA rating of the transformer is the sum of the
individual windings' ratings.** A unit with 50 VA, 55 VA and 40 VA secondaries
must be built as a 145 VA transformer.

If the windings are phased correctly they can be connected in **series aiding**
to add their voltages. Secondaries of 200 V, 110 V and 12 V in series aiding
give 322 V. Get the phasing wrong and you subtract instead — another use for
the polarity test.

## Tapped windings

A tapped winding brings out connections part-way along a coil to give a range
of voltages from a common point — for example taps at 110 V, 120 V and 130 V on
a 230 V primary. It is not restricted to secondaries: **tapped primaries** are
common so one transformer can be used on 220 V, 230 V or 240 V supplies, and
distribution transformers use exactly the same idea at HV.

Once you know the **turns per volt**, positioning a tap is simple arithmetic.
A **centre-tapped** secondary is the special case: 0 V, 24 V, 48 V with the tap
at the electrical centre.

Remember the VA rule. Rewiring a 24 V, 240 VA transformer to run at 12 V allows
twice the current — 20 A instead of 10 A — but only if the winding conductor
CSA is adequate for that current. The VA rating is the limit, not the voltage.

## Autotransformers

An autotransformer has **one winding only**, with part of it common to both the
input and the output circuit. It can step up or step down. There is no separate
secondary winding, though the output is still loosely called the secondary.

The voltage at any tapping is set by the turns per volt. A winding at one volt
per turn on a 240 V supply needs 240 turns; tappings at 220 and 230 turns then
give 220 V and 230 V. A voltmeter from the common (neutral) terminal to each
tap in turn reads 220, 230 and 240 V, and a 230 V appliance can be run from any
of those supplies simply by selecting the right tap.

### Worked example 1 — currents in an autotransformer

An autotransformer is fed at 230 V and tapped to give 180 V output. A 45 ohm
resistive load is connected across the output.

1. Output current: I2 = V2 / R = 180 / 45 = **4 A**
2. Input current from VA balance: I1 = I2 x V2 / V1 = 4 x 180 / 230 = **3.13 A**
3. Current in the common section of the winding = I2 - I1 = 4 - 3.13 =
   **0.87 A** (about 1 A)

Check the VA: 230 x 3.13 = 720 VA in, 180 x 4 = 720 VA out. The common section
carries only the *difference* between input and output currents, which is why
an autotransformer is smaller, lighter and cheaper than a double-wound
transformer of the same rating — the closer the ratio is to 1:1, the greater
the saving.

### Worked example 2 — a step-down autotransformer

A step-down autotransformer has 500 turns in total, tapped at 300 turns. The
primary current is 30 A and the secondary voltage is 330 V. Find the secondary
current, primary voltage and common-winding current.

1. Primary voltage: V1 = V2 x N1 / N2 = 330 x 500 / 300 = **550 V**
2. Secondary current: I2 = I1 x N1 / N2 = 30 x 500 / 300 = **50 A**
3. Common section current = 50 - 30 = **20 A**

Check the VA: 550 x 30 = 16 500 VA and 330 x 50 = 16 500 VA. Consistent.

>! The autotransformer's fatal flaw: because primary and secondary share a
>! winding, **there is no electrical separation**. If the common (shared)
>! section opens while in service, the **full input voltage appears across the
>! open circuit** and on the output terminals — a 415 V input can appear on
>! what should be a 110 V output. For this reason AS/NZS 3000:2018 limits
>! autotransformers for general use: equipment supplied through one must not
>! have a voltage rating less than the highest input or output voltage of the
>! autotransformer (Clause 4.14.4).

Autotransformers are used in three-phase induction motor starters (reduced
voltage starting), power supplies, transmission line voltage regulators and
laboratory work.

### Variacs

Extend the tapping idea to a tap on every turn and you have a **variac**:
originally a trade name, now the generic term for a toroidal autotransformer
with one side of the winding ground clear of insulation so a carbon **wiper**
can be swept along it. The output looks continuously variable; strictly it
changes in steps of one volt per turn, except while the wiper bridges two
adjacent turns. Variacs are standard laboratory and test-bench equipment — they
are what you use to run the short-circuit test and the polarity test safely.

## Isolating and safety transformers

Every transformer except an autotransformer gives some isolation, but an
**isolating transformer** is a specific device: equal primary and secondary
turns, so output voltage equals input voltage, and **no earth connection on the
secondary**.

Because the secondary is not referenced to earth, a person touching one output
conductor while standing on earthed ground completes no circuit. Shock requires
contact with **both** output conductors. That does not eliminate shock risk,
but it greatly reduces it in an MEN system, where any active conductor is at
230 V to earth. Units must comply with AS/NZS 61558, and AS/NZS 3000:2018
Clause 7.4 sets out the requirements for protection by electrical separation,
including verification and testing.

Applications:

- protection by electrical separation in damp situations and in medical
  installations
- preventing interference to sensitive communication and instrumentation
  circuits, since the transformer blocks d.c. while passing a.c.
- as the supply transformer in a SWER (single wire earth return) distribution
  system
- fault finding and laboratory work, such as RCD testing to the Standards.

The related **safety isolating transformer** used for extra-low-voltage tool
and lighting supplies (for example 230 V to 32 V or 12 V) uses the same
principle with reinforced separation between windings.

## High-reactance (flux leakage) and welding transformers

Usually a designer works hard to minimise leakage flux. Sometimes poor coupling
is precisely what is wanted. A **high-reactance** or **flux-leakage**
transformer produces a high open-circuit voltage and a comparatively small
short-circuit current — it is inherently current limiting.

Construction: the primary and secondary are spaced well apart on the core, and
fixed or adjustable **magnetic shunts** are fitted between them.

- **On no load** the air gaps in the shunt paths give them high reluctance, so
  little flux is diverted, leakage is low and the secondary sees nearly the
  full turns-ratio voltage — a high striking voltage.
- **On load** the secondary current sets up a flux opposing the primary flux,
  which pushes more flux through the magnetic shunts instead of the secondary.
  Less flux links the secondary, so its voltage falls, and it falls faster as
  load current increases.

Plot secondary voltage against load current and you get the drooping curve
typical of a welding set: high open-circuit voltage to strike and maintain an
arc, then a controlled fall so the current is limited whatever the arc does.
Moving the **adjustable flux shunt** in a stick-welding transformer varies the
welding current — this is the coarse current control on a basic home welder.

The same principle is used for furnace ignition transformers and gaseous
discharge (neon) lighting transformers.

## What to remember

- Multiple secondaries: the core VA is the sum of the winding VAs.
- Tapped windings and turns per volt let one transformer serve several supply
  voltages.
- Autotransformers save iron and copper but give no isolation; the shared
  winding going open circuit puts full voltage on the output.
- Isolating transformers give 1:1 with an unearthed secondary — reduced, not
  eliminated, shock risk.
- Flux-leakage transformers are deliberately loosely coupled to limit current.
`,
          quiz: [
            {
              q: "A 240/120 V autotransformer supplies 10 A to its load. What current flows in the common section of the winding?",
              options: ["10 A", "5 A", "15 A", "20 A"],
              answer: 1,
              explain: "Input current from the VA balance is 10 x 120/240 = 5 A, so the common section carries the difference: 10 - 5 = 5 A. That reduced current in the shared portion is exactly why an autotransformer uses less copper than a double-wound unit of the same rating.",
            },
            {
              q: "What is the principal safety objection to using an autotransformer to supply 110 V tools from a 415 V supply?",
              options: [
                "Autotransformers are less efficient than double-wound transformers",
                "There is no electrical separation, so a break in the shared winding can put the full 415 V on the output",
                "Autotransformers cannot supply enough current for power tools",
                "The output frequency is not stable",
              ],
              answer: 1,
              explain: "Primary and secondary share a winding, so the supply is galvanically connected to the output. If the common section opens the full input voltage appears at the output terminals. AS/NZS 3000:2018 Clause 4.14.4 therefore requires equipment fed through an autotransformer to be rated for the highest voltage present. Efficiency is actually better than a double-wound unit.",
            },
            {
              q: "Why does the secondary voltage of a welding transformer fall steeply as welding current increases?",
              options: [
                "The turns ratio changes as the electrode heats up",
                "Load current diverts flux through the magnetic shunts so less flux links the secondary",
                "The copper losses in the secondary consume the voltage",
                "The core saturates and the frequency drops",
              ],
              answer: 1,
              explain: "It is deliberate design: widely spaced windings plus magnetic shunts. As load current rises its opposing flux pushes more of the primary flux through the shunt paths, cutting the flux linking the secondary and dropping its voltage. That drooping characteristic limits the current whatever the arc does, and moving the shunt sets the welding current.",
            },
            {
              q: "A transformer has three secondaries rated 60 VA, 80 VA and 40 VA. What must the transformer be rated at, and what happens if all three are used in series aiding?",
              options: [
                "80 VA, and the voltages subtract",
                "180 VA, and the voltages add",
                "60 VA, and the currents add",
                "180 VA, but only one winding may be used at a time",
              ],
              answer: 1,
              explain: "The core must carry the sum of the winding ratings, 60 + 80 + 40 = 180 VA. Connected in series aiding with correct phasing the secondary voltages add, which is a standard way of obtaining a higher voltage than any single winding provides. Get the phasing wrong and they partly cancel.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "instrument-transformers",
          title: "Instrument transformers: CTs, VTs and the rules that keep you alive",
          minutes: 13,
          simple: "You cannot wire a switchboard ammeter directly into an 800 amp busbar, or a voltmeter straight onto an eleven thousand volt line. Instead, small transformers make a scaled-down copy of the current or the voltage for the meter to read. The current type has one absolute rule: never let its output circuit go open, or it will generate thousands of volts.",
          refs: REFS_INSTRUMENT,
          content: `
Connecting instruments, protection relays and control gear directly to
high-voltage or high-current circuits is unsafe and often impossible.
**Instrument transformers** produce a small, accurately proportional copy of
the quantity being measured while keeping the high-energy circuit away from the
metering wiring. There are two types: the **voltage transformer (VT)**, called
a **potential transformer (PT)** in metering work, and the **current
transformer (CT)**.

A typical HV metering panel uses both: a VT across the line feeding the
voltmeter and the wattmeter voltage coil, and a CT in series with the line
feeding the ammeter and the wattmeter current coil.

## Voltage (potential) transformers

A VT is a conventional double-wound transformer whose secondary voltage is much
lower than, but accurately proportional to, the primary. Its primary must be
insulated for the full system voltage and is often oil-immersed. Construction
is the opposite of a power transformer in emphasis: **low flux density in a
relatively large core CSA, few turns of large-section conductor** for the tiny
current drawn.

The ratio of primary to secondary voltage is simply the turns ratio, exactly as
in any transformer.

Standard secondary voltages under **AS/NZS 1243**:

- **110 V** for single-phase work
- **63.5 V** per transformer where three VTs are star-connected for substation
  control work, giving 110 V line to line (63.5 x 1.732 = 110 V)

Because the energy being measured is large, VT losses are irrelevant. What
matters is **ratio accuracy and freedom from phase-angle error**. A phase angle
of 0 degrees is wanted (180 degrees is acceptable), particularly for wattmeters
and protection relays with more than one operating coil, where a phase error
directly falsifies the reading.

### VT burden and worked example

The **burden** is the load the secondary can supply, stated in VA. It is small
because meters and relays need very little energy.

A 200 VA VT with a 110 V secondary can supply:
I = 200 / 110 = **1.82 A** of secondary current for meters and relays.

Reading a line voltage: an 11 000/110 V VT has a ratio of 100:1. If the
secondary voltmeter reads 106 V, the line voltage is 106 x 100 = **10 600 V**.
Switchboard voltmeters are usually scaled directly in kV so you read the line
value straight off.

### VT safety rules

- The four terminals are always designated and must be connected correctly,
  with the two voltage systems properly isolated from each other.
- **One secondary terminal is earthed**, so that a breakdown of the insulation
  between primary and secondary cannot put HV onto the metering wiring.
- Take care that instruments and their wiring do not introduce a **second
  earth** somewhere else in the secondary circuit.
- Many VTs contain an earthed non-magnetic **electrostatic shield** between
  windings, both for operator protection and to keep noise out of the metering.
- Protect both primary and secondary with fuses.
- **Never short-circuit a VT secondary** — like any voltage source feeding a
  high-impedance load, a short causes high primary and secondary currents.

## Current transformers

A CT produces a secondary current accurately proportional to the alternating
current in its primary, allowing large currents to be measured safely while
isolating the metering from the system voltage.

Physical forms:

- a wound primary of a few turns of heavy conductor
- a straight bar primary passing through a hole in the core
- a **ring or toroidal CT** slipped over an existing busbar or cable — the
  cable is the single-turn primary and the wound ring is the secondary
- bushing CTs mounted around transformer or circuit-breaker bushings.

### How a CT differs from a power transformer

| Quantity | Power transformer | Current transformer |
|---|---|---|
| Core flux density | High | Very low in normal service |
| What sets the primary current | The secondary load | The external circuit — the CT has no say |
| Ratio that matters | Voltage ratio | Current ratio |
| Secondary load | Any load up to rating | A very low impedance: ammeter and relay coils |
| Secondary circuit | May be open | Must always be closed |

The primary is in **series with the load** and is typically one turn of busbar,
so its impedance is negligible and the primary current is decided entirely by
the external circuit. The secondary, which has many turns, is closed through
low-impedance coils, and the secondary current produces a flux that opposes the
primary flux. That opposition is what keeps the core flux density low.

The current ratio is the inverse of the turns ratio, so **the secondary has far
more turns than the primary**.

### Worked example 1 — CT ratio

A CT is marked 800/5 A. Its single-turn primary busbar carries 600 A.

1. Ratio = 800 / 5 = **160:1**, so the secondary has 160 turns for the one-turn
   primary.
2. Secondary current = 600 / 160 = **3.75 A**.
3. The ammeter movement is a 0-5 A instrument but its scale is printed 0-800 A,
   so it indicates **600 A** directly.

If you clamp a multimeter on the CT secondary and read 4.4 A, the line current
is 4.4 x 160 = 704 A. That is the calculation you do when proving a metering
installation.

### Worked example 2 — what an open secondary does

A CT has one primary turn and 160 secondary turns. The ammeter is removed
without shorting the secondary and the 400 V circuit is energised. What appears
across the open secondary terminals?

V(s) = V(p) x N2 / N1 = 400 x 160 / 1 = 64 000 V = **64 kV**

With the secondary open there is no opposing ampere-turns, so nothing limits
the core flux. The primary current — set by the load, not by the CT — drives the
core hard into saturation and the enormous rate of change of flux at each zero
crossing induces a huge voltage in the many secondary turns.

>! **Never open-circuit the secondary of a live current transformer.** With no
>! secondary current to oppose the primary flux, the core saturates and the
>! secondary terminals can develop tens of kilovolts — lethal to anyone
>! touching them, and enough to break down the CT's own insulation and set the
>! saturated core cooking. Before disconnecting any meter or relay from a CT
>! circuit, **short the CT secondary first** using the shorting link on the
>! metering test block, and prove the short is made. Every connection and
>! disconnection in a CT circuit follows a standard operating procedure that
>! guarantees the secondary is never open at any stage. Even a brief open
>! circuit can magnetise the core and permanently degrade the CT's accuracy.

### CT burden and secondary standards

The **burden** is the total impedance of the secondary circuit — meter coils,
relay coils and the connecting leads — expressed in VA. It must be as low as
possible, typically around 5 VA, so the CT does not disturb the circuit it is
measuring. Because the secondary must always be closed, the burden is always
present, causing a very small voltage drop in the primary conductor.

**IEC 60044** specifies two standard secondary currents: **1 A and 5 A**. Five
amps is still widely used, but 1 A is increasingly chosen in substation work
where the relays and instruments are a long way from the CT, because at the
lower current the resistance and impedance of the connecting cable matter far
less.

CT windings must be clamped firmly to withstand the magnetic forces produced by
overloads, surges and faults. As with VTs, one side of the secondary is
normally earthed, and a non-magnetic screen may be fitted between windings.

## On the job

- Check the marked ratio before you interpret any reading — 800/5 and 400/5
  CTs look identical on a busbar.
- Short the CT secondary before touching the metering circuit. Every time.
- Never short a VT secondary; never open a CT secondary.
- Keep exactly one earth in each instrument transformer secondary circuit.
- A CT that has been open-circuited should be treated as suspect for accuracy
  even if it looks undamaged.
`,
          quiz: [
            {
              q: "A 600/5 A current transformer is installed on a busbar and the ammeter in its secondary reads 3.2 A on a 0-5 A movement. What is the line current?",
              options: ["3.2 A", "120 A", "384 A", "600 A"],
              answer: 2,
              explain: "The ratio is 600/5 = 120:1, so the line current is 3.2 x 120 = 384 A. In service the ammeter scale would be printed 0-600 A so it indicates 384 A directly. Reading 3.2 A as the line current ignores the CT entirely.",
            },
            {
              q: "Why must the secondary of an energised current transformer never be left open-circuited?",
              options: [
                "The ammeter will read zero and metering data will be lost",
                "The primary current will rise dangerously and trip the feeder",
                "With no secondary ampere-turns to oppose it, the core saturates and a very high voltage appears at the secondary terminals",
                "The CT will draw excessive current from the supply",
              ],
              answer: 2,
              explain: "The secondary current normally produces an opposing flux that holds core flux density low. Remove it and nothing limits the flux; the core saturates and the many secondary turns develop tens of kilovolts, which is lethal and can destroy the CT's insulation. The primary current is unaffected because it is set by the external circuit.",
            },
            {
              q: "A 150 VA voltage transformer has a 110 V secondary. What secondary current can it supply to meters and relays?",
              options: ["0.73 A", "1.36 A", "13.6 A", "1.5 A"],
              answer: 1,
              explain: "I = VA / V = 150 / 110 = 1.36 A. The burden rating tells you both how much metering load the VT can carry and what load it imposes on the system it is measuring; instrument coils need very little, which is why VT ratings are small.",
            },
            {
              q: "Which pair of statements about instrument transformer secondaries is correct?",
              options: [
                "Short a CT secondary before disconnecting a meter; never short a VT secondary",
                "Short a VT secondary before disconnecting a meter; never short a CT secondary",
                "Both secondaries should be left open when meters are removed",
                "Both secondaries should be shorted when meters are removed",
              ],
              answer: 0,
              explain: "A CT is effectively a current source and must always have a closed secondary, so you short it with the test-block link before breaking the meter connection. A VT is a voltage source into a high-impedance load, so shorting it would drive large primary and secondary currents. The two rules are exact opposites and confusing them is dangerous.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
