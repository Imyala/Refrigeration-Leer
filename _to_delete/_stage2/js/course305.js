/* =========================================================================
   Course content, module 305 — Capacitors.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 5 — Capacitors.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Ch 5, capacitors",
  ];

  const REFS_INTRO = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — identification of capacitor types used in the electrotechnology industry",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — passive and active components; capacitor construction, plates and dielectric",
  ];

  const REFS_TYPES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitor types: ceramic, stacked-plate, rolled, electrolytic, oil-filled, variable and trimmer",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — IEC circuit symbols used in electrical drawings for capacitors",
  ];

  const REFS_UNITS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — terms and units for capacitance and electric charge; the farad and the coulomb",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitance parameters: plate area, plate separation and permittivity",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — dielectric constants and dielectric strength (Table 5.1)",
  ];

  const REFS_RC = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — behaviour of a series d.c. circuit containing resistance and capacitance; charge and discharge curves",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the RC time constant and harnessing the time constant",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — energy stored in a capacitor",
  ];

  const REFS_DANGER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — dangers of a charged capacitor and the consequences of discharging one through a person",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — safe handling procedures and bleed resistors",
    "AS/NZS 3000:2018 Wiring Rules — discharge of capacitors exceeding 0.5 microfarad to 50 V or less",
  ];

  const REFS_COMBO = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitors connected in parallel",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — capacitors connected in series and the division of voltage between them",
  ];

  const REFS_FAULTS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — common faults in capacitors; dielectrics drying out",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — techniques for testing capacitors to determine serviceability; ESR meters and LCR bridges",
  ];

  const REFS_APPS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — application of capacitors in the electrotechnology industry",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — motor starting and running capacitors, power factor correction, filtering and snubbing",
  ];

  const MODULES = [
    {
      id: "elec-capacitors",
      stream: "elec",
      title: "E.5 · Capacitors",
      blurb: "How capacitors store charge, what sets their capacitance, RC time constants, series and parallel banks, faults, testing, and the stored charge that can kill you.",
      lessons: [

        /* ---------------------------------------------------------------- */
        {
          id: "what-a-capacitor-is",
          title: "What a capacitor is and what it does",
          minutes: 9,
          simple: "A capacitor is two metal sheets with an insulator squeezed between them. It cannot pass current through the middle, but it can hold a pile of electrons on one sheet, like a tiny rechargeable battery that fills and empties in a flash.",
          refs: REFS_INTRO,
          content: `A capacitor is one of the three passive components you will meet in every trade circuit, alongside the resistor and the inductor. Passive means it does not generate anything of its own: it only works with the energy the surrounding circuit hands it. Active components — diodes, transistors, integrated circuits — are the opposite. They use a separate supply to control voltage or current in the main circuit. Knowing which family a part belongs to tells you what to expect when you meet it in a fault-finding job.

## Two plates and a sandwich filling

Physically a capacitor is a sandwich. Two conducting surfaces, called **plates**, face each other, and between them sits an insulating layer called the **dielectric**. Each plate has its own lead brought out to a terminal. That is the whole device. Everything else — the aluminium can, the epoxy blob, the oil-filled steel cylinder bolted into an air-conditioner — is packaging chosen to suit the voltage, the heat and the environment.

Because the dielectric is an insulator, **no current passes through a capacitor**. What looks like current in the external circuit is electrons being dragged off one plate and stacked onto the other. Connect a capacitor across a battery and the positive terminal pulls free electrons out of the plate wired to it, leaving that plate positively charged; those same electrons are pushed onto the plate wired to the negative terminal. Nothing crossed the gap. Charge simply got rearranged.

## The field that does the storing

Once the plates carry opposite charges, an **electrostatic field** exists in the dielectric. The surplus electrons on the negative plate are electrostatically attracted to the positive ions on the other side, and that attraction is strong enough to hold them in place after the supply is disconnected. This is the twin of the magnetic field you meet in coils and motors, with one crucial difference: a magnetic field is produced by *current*, and it collapses the instant the current stops. An electrostatic field is produced by *potential difference*, and it sits there for as long as the charge stays put — minutes, hours, sometimes days.

That is why a capacitor is dangerous in a way an inductor is not. An inductor needs current flowing to hold its energy. A capacitor needs nothing at all.

>! A disconnected capacitor is not a safe capacitor. The charge stays on the plates after the supply is removed, and the terminals of a motor or power-supply capacitor can still be sitting at several hundred volts hours later. Prove it dead before you touch it.

## Think of it as a very fast battery

The most useful mental picture for trade work is a battery that charges and discharges almost instantly. When the circuit voltage rises, the capacitor soaks up energy; when the voltage sags, the capacitor gives it back. Chemistry limits how fast a battery can do this. A capacitor has no chemistry to wait for, so it can dump its whole store in milliseconds — which is exactly what makes it useful for smoothing supplies, absorbing surges and firing a camera flash.

A water analogy also works. Picture a rubber diaphragm sealed across a pipe. Water cannot get through the diaphragm, but push water at one side and the diaphragm stretches, so water does move in the pipe on both sides for a moment. Let go and the diaphragm springs back, pushing the water the other way. A stiff diaphragm that barely stretches is a small capacitance; a big floppy one that holds a lot of water is a large capacitance; burst it with too much pressure and you have a failed capacitor.

## Where you meet them in the field

| Where | What the capacitor is doing |
|---|---|
| Single-phase motor, air-conditioner compressor | Producing the phase shift that starts the motor and improves its running torque |
| Switchboard PFC bank | Supplying reactive current locally so the supply cable does not have to |
| Power supply, welder inverter, VSD d.c. bus | Smoothing rectified d.c. into something close to a flat voltage |
| Fluorescent and discharge lighting | Power factor correction across the ballast |
| Relay and contactor contacts | Snubbing the arc when a d.c. inductive circuit opens |
| Surge protection, distribution equipment | Diverting fast surge energy safely to earth |
| Electronic boards | Coupling, decoupling, filtering, tuning and timing |

Inductors dominate heavy electrical work; capacitors dominate electronics. But every electrician meets both, and the capacitors an electrician meets tend to be the big, energetic, dangerous ones.

## What to remember

- A capacitor is two conductors separated by a dielectric; it stores energy in an electrostatic field.
- Current never flows *through* a capacitor — electrons only move to and from the plates.
- It behaves like a fast battery: takes energy when circuit voltage is high, returns it when circuit voltage falls.
- It is a passive component; it cannot amplify or supply energy it was never given.
- Stored charge outlives the supply. Treat every capacitor as live until you have discharged and proven it.`,
          quiz: [
            {
              q: "Why is a capacitor classed as a passive component?",
              options: [
                "Because it has no moving parts",
                "Because it only handles energy supplied by the circuit it sits in, rather than controlling the circuit from a separate supply",
                "Because it cannot fail in service",
                "Because it will only work on d.c.",
              ],
              answer: 1,
              explain: "Passive components (resistors, inductors, capacitors) work with the energy the circuit gives them. Active components such as transistors and ICs use an external supply to control voltage or current in the main circuit. Having no moving parts is true of resistors too, but it is not the definition.",
            },
            {
              q: "A technician measures current in the lead feeding a capacitor while it charges. What is that current actually doing?",
              options: [
                "Passing straight through the dielectric from plate to plate",
                "Leaking through the capacitor case to earth",
                "Moving electrons off one plate and onto the other through the external circuit",
                "Circulating inside the dielectric without leaving the capacitor",
              ],
              answer: 2,
              explain: "The dielectric is an insulator, so nothing crosses the gap. The external circuit strips electrons from one plate and delivers them to the other; the meter sees that movement as current. If current really did cross the dielectric, the capacitor would be faulty.",
            },
            {
              q: "What is the key practical difference between the magnetic field of an inductor and the electrostatic field of a capacitor?",
              options: [
                "The magnetic field stores more energy per kilogram",
                "The electrostatic field needs current to be maintained, the magnetic field does not",
                "The magnetic field needs current to be maintained, so it collapses when the supply is removed, whereas the electrostatic field persists on the stored charge",
                "Neither field can store energy once the supply is switched off",
              ],
              answer: 2,
              explain: "A magnetic field is a current effect and dies with the current. An electrostatic field is a potential-difference effect held up by charge sitting on the plates, so it survives disconnection — which is precisely why charged capacitors kill people.",
            },
            {
              q: "Which description best fits how a capacitor behaves in a working circuit?",
              options: [
                "A very fast battery that absorbs energy when the voltage rises and returns it when the voltage falls",
                "A resistor whose value changes with temperature",
                "A one-way valve that only lets current flow in one direction",
                "A device that converts electrical energy into heat",
              ],
              answer: 0,
              explain: "The fast-battery picture explains smoothing, surge absorption and motor-run duty in one idea. A one-way valve is a diode; the heat converter is a resistor.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "capacitor-types-and-symbols",
          title: "Capacitor types and circuit symbols",
          minutes: 11,
          simple: "Capacitors come in families, sorted by what the insulating filling is made of. Ceramic ones are tiny, electrolytic ones hold a lot but must go in the right way round, and the fat oil-filled cans on an air-conditioner run the motor. The drawing symbol is two short parallel lines.",
          refs: REFS_TYPES,
          content: `Capacitor families are named after the dielectric, because the dielectric decides almost everything: how much capacitance fits in a given size, how much voltage it will stand, how it fails and whether it cares which way round you wire it. Learn the families and you can usually pick a part off a board or out of an outdoor unit at a glance.

## The common families

**Ceramic.** Both faces of a ceramic disc or square chip are silver-plated, and the whole thing is encapsulated in ceramic, enamel or epoxy. The encapsulation protects the plating and cuts leakage between the two faces. Values run from about 0.5 pF up to roughly 0.1 microfarad, with voltage ratings that can exceed 6 kV. Small capacitance, big voltage, and excellent behaviour at very high frequencies where other types simply cannot cope. In electrical work you see them as surge suppressors and arc suppressors, and as chunky tubular ceramic units in distribution equipment.

**Stacked-plate.** Plates and dielectric sheets are stacked like a pack of cards, with alternate plates joined together to make two large facing areas. Silver-mica capacitors are the classic example, named for the mica dielectric. They are prized for stability, high voltage and low capacitance — radio transmitters, medical equipment — and in the electrical trade for surge and contact-arc suppression.

**Rolled (film).** A thin sheet of polyester, polycarbonate, polypropylene or similar plastic is metallised on one side by exposing it to an aluminium plasma cloud. Two sheets rolled together give the conductor/insulator/conductor/insulator stack, and the roll is then cut, leaded and encapsulated. Values from around 1 pF up to several microfarads in the small sizes. Large rolled types are the workhorses of motor starting and running and of power factor correction. Plastic film has replaced paper almost everywhere.

**Electrolytic.** Built like a rolled capacitor, but the dielectric is an absorbent separator soaked in a borax electrolyte and the plates are etched so their surface is a mass of tiny bumps and hollows. That etching multiplies the effective plate area, so an electrolytic gives huge capacitance for its size — from about 1 microfarad up to 1 farad, typically rated 10 V to 500 V. The price is **polarity**: the electrolyte only forms the oxide dielectric one way round, so reversed voltage destroys it, often violently. Aluminium and tantalum are the two common constructions. Electrolytics are the standard d.c. filter in power supplies, switch-mode supplies and large amplifiers.

**Oil-filled.** High-power, high-voltage units, usually a wound metallised polypropylene film in an oil-filled can. They store large amounts of energy and shrug off a.c. duty, which is why you find them on air-conditioners, single-phase motors, fluorescent lighting and compressors.

**Variable and trimmer.** In a variable capacitor one set of plates swings inside the other so the facing area changes; other designs vary the plate spacing or slide the dielectric in and out. Ranges are typically a few pF to about 1000 pF. They were everywhere in radio tuning, antennas, amplifiers and test gear, and are rare now. A trimmer is a small screwdriver-adjusted version used to set or re-calibrate a circuit and to pull it back into tolerance if it drifts.

**Supercapacitors.** Electrolytic technology taken to the extreme — 25 F in a package small enough to sit on a board, though at a working voltage of only a couple of volts. They are used where a battery would otherwise be needed for backup or short-term energy storage.

| Family | Typical range | Typical voltage | Polarised? | Where you see it |
|---|---|---|---|---|
| Ceramic | 0.5 pF – 0.1 microfarad | up to and above 6 kV | No | Surge and arc suppression, HF electronics |
| Stacked-plate (silver-mica) | pF range | High | No | Stable HF circuits, surge suppression |
| Rolled film (polyester, polypropylene) | 1 pF – several microfarads (small); tens of microfarads (large) | 250–1000 V | No | Motor run, PFC, electronics |
| Electrolytic (aluminium, tantalum) | 1 microfarad – 1 F | 10–500 V | **Yes** | D.C. filtering, smoothing, motor start |
| Oil-filled | Microfarad range | High | No | Motor run, lighting, compressors, HV plant |
| Variable / trimmer | A few pF – 1000 pF | Low | No | Tuning and calibration |
| Supercapacitor | 1 F and up (25 F available) | About 2.5 V | Yes | Backup power, energy storage |

## Circuit symbols

The IEC symbols used on Australian drawings are simple and worth getting exactly right:

- **Fixed capacitor** — two short parallel straight lines, one on each lead, with a gap between them. Both lines identical.
- **Electrolytic or polarised capacitor** — the same two lines, but one is drawn as a curved or filled bar to mark the negative plate, and a plus sign is usually placed at the positive lead. If a drawing shows that curve, polarity is not optional.
- **Variable capacitor** — the fixed symbol with a diagonal arrow drawn through it.
- **Trimmer (preset) capacitor** — the fixed symbol with a diagonal line through it ending in a short cross-bar rather than an arrowhead.

>! Fitting a polarised electrolytic backwards, or across a.c., is a genuine explosion hazard. The electrolyte boils, the case vents and hot electrolyte and foil are ejected. Motor start capacitors are a special non-polarised a.c. electrolytic construction — never substitute a d.c. electrolytic for one.

## Reading what is on the can

Large motor and PFC capacitors are marked in microfarads with a tolerance (commonly plus or minus 5 or 6 per cent) and an **a.c.** voltage rating — typically 250 V a.c. or 440 V a.c. in Australian equipment. Never fit a capacitor with a lower voltage rating than the original, and never assume a 400 V d.c. rating is good for 400 V a.c.; a.c. duty is much harder on the dielectric. Small electronic capacitors often use a three-digit code, where the third digit is the number of zeros in picofarads: 104 means 100 000 pF, which is 100 nF or 0.1 microfarad.

## On the job

- Identify by the dielectric first — it predicts polarity, voltage capability and failure mode.
- Electrolytic equals polarised equals large capacitance in a small can; film and oil equal a.c. duty.
- Match a replacement on capacitance, tolerance, voltage rating, a.c. or d.c. duty, temperature class and terminal style.
- A curved plate or a plus sign on the drawing symbol means polarity matters.
- Ceramic and mica types are the small, high-voltage, high-frequency suppression parts, not energy stores.`,
          quiz: [
            {
              q: "Why does an electrolytic capacitor achieve so much more capacitance per cubic centimetre than a film capacitor?",
              options: [
                "The electrolyte conducts, which shortens the circuit path",
                "It runs at a much higher voltage",
                "Its plates are etched to greatly increase effective surface area and the electrolyte-formed dielectric is extremely thin",
                "It contains many more separate plates stacked together",
              ],
              answer: 2,
              explain: "Capacitance rises with plate area and falls with plate separation. Etching multiplies area and the formed oxide layer is extraordinarily thin, so both factors push capacitance up. The trade-offs are polarity sensitivity and a limited voltage rating.",
            },
            {
              q: "A drawing shows a capacitor symbol in which one plate is a curved bar and a plus sign marks one lead. What must the installer do?",
              options: [
                "Observe polarity — it is an electrolytic or polarised type",
                "Fit a variable capacitor",
                "Connect it either way round, the curve is decorative",
                "Fit it only on a.c. supplies",
              ],
              answer: 0,
              explain: "The curved or filled plate identifies the negative side of a polarised capacitor. Connecting it backwards can boil the electrolyte and burst the can. A diagonal arrow through the symbol, not a curved plate, indicates a variable type.",
            },
            {
              q: "Which capacitor family would you expect to find as the run capacitor bolted inside a single-phase air-conditioner outdoor unit?",
              options: [
                "A silver-mica stacked-plate capacitor",
                "A ceramic disc capacitor",
                "A tantalum electrolytic",
                "A rolled metallised-film or oil-filled capacitor rated for continuous a.c. duty",
              ],
              answer: 3,
              explain: "Run capacitors sit across a.c. permanently and must handle continuous heating, so metallised polypropylene film or oil-filled construction is used. Ceramic and mica types are tiny suppression parts, and a polarised tantalum on a.c. would fail immediately.",
            },
            {
              q: "A small board capacitor is marked 104. What is its value?",
              options: [
                "104 pF",
                "0.1 microfarad",
                "104 microfarads",
                "10.4 nF",
              ],
              answer: 1,
              explain: "The third digit is the number of zeros added to the first two, in picofarads: 10 followed by four zeros is 100 000 pF, which is 100 nF or 0.1 microfarad. Reading it as 104 pF would be out by a factor of a thousand.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "capacitance-charge-dielectric",
          title: "Capacitance, charge and the dielectric",
          minutes: 13,
          simple: "Capacitance measures how much electrical charge a capacitor holds for each volt you put across it. Bigger plates, a thinner gap and a better insulating filling all hold more. Push too many volts through that thin filling and it punches through, like arcing across a spark plug gap.",
          refs: REFS_UNITS,
          content: `Capacitance is the measure of how much charge a capacitor holds for every volt across it. Trade slang still calls the value the capacitor's "capacity", and in the automotive world capacitors are often called condensers — a hangover from the old belief that they condensed electricity. The correct quantity symbol is **C** and the unit is the **farad (F)**.

## The farad and the coulomb

One farad is the capacitance that stores one coulomb of charge when one volt is applied across it. The **coulomb (Q)** is the quantity of charge that passes a point in one second when a current of one ampere flows. Putting those two definitions together gives the relationships you will use constantly:

- C = Q / V
- **Q = CV**
- **Q = It**
- and therefore **Q = CV = It**

with Q in coulombs, C in farads, V in volts, I in amperes and t in seconds. That last chain is worth memorising, because it links the static world of stored charge to the dynamic world of current and time, and it is where the RC time constant comes from.

The farad is an enormous unit for most practical parts, so sub-multiples rule the trade:

| Sub-multiple | Symbol | Value in farads |
|---|---|---|
| Microfarad | uF (Greek mu F) | 1 x 10 to the power minus 6 |
| Nanofarad | nF | 1 x 10 to the power minus 9 |
| Picofarad | pF | 1 x 10 to the power minus 12 |

Microfarads and picofarads dominate. Even a 10 000 microfarad electrolytic is written in microfarads rather than as 10 millifarads, purely by tradition. Technology has caught up with the unit, though: supercapacitors of 25 F at 2.5 V are now sold over the counter, and multi-thousand-farad devices exist.

### Worked example 1 — charge stored

A 10 microfarad capacitor is charged to 100 V. Find the charge.

Q = CV = 10 x 10 to the minus 6 x 100 = 0.001 C = **1 mC**

Now take a 1000 microfarad capacitor charged to just 1 V:

Q = CV = 1000 x 10 to the minus 6 x 1 = 0.001 C = **1 mC**

Identical charge from very different parts. The lesson: the same quantity of charge can sit in a large capacitor at low voltage or a small one at high voltage. Capacitance alone tells you nothing about how much charge — or how much danger — is present. You need the voltage as well.

### Worked example 2 — working backwards

A 1000 microfarad capacitor is found to be holding 1 coulomb. What is the terminal voltage?

V = Q / C = 1 / (1000 x 10 to the minus 6) = 1 / 0.001 = **1000 V**

That is a realistic figure inside switch-mode equipment, and it is why "it is only a capacitor" is a dangerous thought.

## What decides the capacitance

Three physical parameters set the value, and all three are visible in one equation.

**Effective plate area (A).** Capacitance is directly proportional to the area of plate that actually faces a plate of opposite polarity. Double the facing area and you double the capacitance. Manufacturers increase it by stacking more plates, by rolling long strips, or by etching the foil so its real surface is far larger than its apparent size. Note the word *effective*: the outward faces of the two end plates in a stack face nothing, so they do not count. (Strictly, some stray capacitance exists between any two conductors anywhere, but it is ignored in calculations.)

**Plate separation (d).** Capacitance is inversely proportional to the distance between the plates. Bring the plates closer and the electrostatic field between them becomes more intense for the same voltage, so more charge is held. Halve the spacing and you double the capacitance.

**Permittivity of the dielectric.** Swap the material in the gap and the capacitance changes. The measure of that effect is **permittivity**. Even a vacuum has permittivity — the permittivity of free space, or absolute permittivity, symbol epsilon-zero, equal to 8.85 x 10 to the minus 12. Every practical material is quoted as a **relative permittivity** or **dielectric constant** (epsilon-r), the factor by which it beats air.

For two parallel plates:

**C = (epsilon-zero x epsilon-r x A) / d**

where C is in farads, A in square metres and d in metres.

### Worked example 3 — calculating capacitance

Two plates each 200 mm x 150 mm are separated by a paper dielectric 0.1 mm thick. Paper has a dielectric constant of 2. Find the capacitance.

- A = 0.200 x 0.150 = 0.03 square metres
- d = 0.1 mm = 0.0001 m
- C = (8.85 x 10 to the minus 12 x 2 x 0.03) / 0.0001
- Numerator: 8.85 x 10 to the minus 12 x 2 = 1.77 x 10 to the minus 11; x 0.03 = 5.31 x 10 to the minus 13
- C = 5.31 x 10 to the minus 13 / 1 x 10 to the minus 4 = 5.31 x 10 to the minus 9 F

C = **5.31 nF**, or 0.00531 microfarad. Notice how much plate area it takes to make even a few nanofarads with a 0.1 mm gap — which is exactly why real capacitors use metres of rolled foil and dielectrics only microns thick.

## Dielectric constants and dielectric strength

The dielectric constant tells you how many times the capacitance increases when you replace air with that material, all else equal. If two plates in air measure 120 pF and the air is replaced with glass, the same plates now measure about 720 pF, because glass has a dielectric constant of about 6. So a high dielectric constant buys capacitance without extra size.

The second property that matters is **dielectric strength**: the volts per unit thickness that the material will stand before it punches through and stops being an insulator. Once it breaks down, it is destroyed and the capacitor is finished.

| Dielectric | Dielectric constant | Dielectric strength (kV/mm) |
|---|---|---|
| Air / vacuum | 1 | 3 |
| Paper | 2 | 40 |
| Transformer oil | 4 | 15 |
| Mica | 5 | 100 |
| Glass | 6 | 30 |
| Porcelain | 6 | High, comparable with glass |

Designers are caught between two pressures. Thinning the dielectric raises capacitance and shrinks the part — but it also lowers the voltage the part will survive, because breakdown depends on both material and thickness.

### Worked example 4 — breakdown voltage

The paper dielectric above is 0.1 mm thick with a dielectric strength of 40 kV/mm. What voltage will punch through it?

Breakdown voltage = 40 kV/mm x 0.1 mm = **4 kV**

The maker will rate the finished part far below that — perhaps 630 V — to allow for surges, ageing, temperature and imperfections in the film.

## On the job

- Q = CV = It ties charge, capacitance, voltage, current and time together; almost every capacitor calculation starts there.
- Capacitance rises with plate area and dielectric constant, and falls as plate spacing increases.
- Charge, not capacitance, is what a capacitor holds; you cannot judge stored energy without knowing the voltage.
- Dielectric strength sets the voltage rating. Exceed it once and the capacitor is scrap, often a short circuit.
- Fitting a capacitor with the right microfarads but a lower voltage rating is a failure waiting to happen.`,
          quiz: [
            {
              q: "A 47 microfarad capacitor is charged to 240 V d.c. How much charge is stored?",
              options: [
                "11.28 mC",
                "1.128 C",
                "0.1128 mC",
                "11.28 C",
              ],
              answer: 0,
              explain: "Q = CV = 47 x 10 to the minus 6 x 240 = 0.01128 C = 11.28 mC. The common slip is dropping the 10 to the minus 6, which inflates the answer by a million.",
            },
            {
              q: "The plate separation of a parallel-plate capacitor is halved while area and dielectric stay the same. What happens to capacitance?",
              options: [
                "It halves",
                "It is unchanged",
                "It doubles",
                "It falls to a quarter",
              ],
              answer: 2,
              explain: "C = epsilon-zero x epsilon-r x A / d, so capacitance is inversely proportional to d. Halving d doubles C. The trap is thinking that a smaller gap means less room for charge; in fact the closer plates hold a stronger field, so more charge stays put.",
            },
            {
              q: "Two plates in air measure 100 pF. The air is replaced by mica (dielectric constant 5), leaving area and spacing unchanged. The new capacitance is about:",
              options: [
                "20 pF",
                "105 pF",
                "500 pF",
                "100 pF, since only geometry matters",
              ],
              answer: 2,
              explain: "The dielectric constant is the factor by which the material beats air, so 100 pF x 5 = 500 pF. Mica also has very high dielectric strength, so it raises capacitance and voltage capability at once.",
            },
            {
              q: "What does the dielectric strength of an insulating material tell a technician?",
              options: [
                "How many times it multiplies capacitance compared with air",
                "How much mechanical force it can withstand",
                "How much its capacitance drifts with temperature",
                "The voltage per unit thickness at which it will break down and stop insulating",
              ],
              answer: 3,
              explain: "Dielectric strength, quoted in kV/mm, fixes the breakdown voltage once you know the thickness. The multiplying factor compared with air is the dielectric constant — a different property, and a material can be strong in one and weak in the other.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "rc-time-constant",
          title: "Charging, discharging and the RC time constant",
          minutes: 13,
          simple: "Put a resistor in front of a capacitor and it can no longer fill instantly - it fills along a curve. One time constant, R times C, gets it to about 63 per cent full, and five time constants gets it as full as it is ever going to be. Emptying follows the same curve backwards.",
          refs: REFS_RC,
          content: `Connect a capacitor straight across a battery with no resistance in the loop and it charges almost instantaneously: electrons stream off one plate and onto the other until the capacitor voltage equals the supply voltage, at which point there is no potential difference left to push them and current stops. Add resistance and the whole thing slows down in a way you can calculate — and that calculation is the basis of timing circuits, discharge times, smoothing and the safe-to-touch rule.

## Where the time constant comes from

Start with the relationship from the previous lesson:

Q = CV = It

Rearranged for time: t = CV / I. And Ohm's Law gives R = V / I. Substituting turns the expression into:

**t = RC**

with t in seconds, R in ohms and C in farads. This time is called the **time constant** and is written with the Greek letter tau. One time constant is the time a capacitor takes to charge to **63.2 per cent** of the applied voltage through that resistance.

Two things about this equation deserve attention. First, the only way to change the timing is to change R or C — increase either and the circuit slows down, decrease either and it speeds up. Second, and this surprises people, **voltage does not appear in it at all**. Doubling the supply voltage doubles the charging current, but it also doubles the amount of charge that must be delivered, so the two effects cancel and the time is unchanged. A 100 microfarad capacitor charging through 10 kilohms takes exactly the same time from a 12 V supply as from a 400 V supply.

### Worked example 1 — a basic time constant

A 47 microfarad capacitor charges through a 100 kilohm resistor from a 24 V d.c. supply.

- tau = RC = 100 000 x 47 x 10 to the minus 6 = **4.7 s**
- After one time constant: 0.632 x 24 = **15.2 V**
- Practically fully charged after 5 tau = 5 x 4.7 = **23.5 s**

## The charge and discharge curves

Plot capacitor voltage against time and you get an exponential curve rising towards the supply voltage, steepest at the beginning and flattening as it goes. The formula behind it is v = V(1 - e to the power minus t/RC), but for trade work the percentages are what you need:

| Time constants elapsed | Charged to (% of supply) | Discharging: remaining (%) |
|---|---|---|
| 1 tau | 63.2 | 36.8 |
| 2 tau | 86.5 | 13.5 |
| 3 tau | 95.0 | 5.0 |
| 4 tau | 98.2 | 1.8 |
| 5 tau | 99.3 | 0.7 |
| 10 tau | 99.995 | 0.005 |

Strictly the curve never arrives. An exponential keeps rising forever and only reaches the supply voltage at infinity. That is a mathematician's problem, not an electrician's, which is why the trade uses the **five time constant rule**: after 5 tau a capacitor is treated as fully charged (or fully discharged), because it is within about 0.7 per cent and no instrument in your bag will argue.

Discharge into a fixed resistance produces the mirror image — an exponential falling towards zero. Current during discharge is drawn as negative because it flows the other way: charge is coming out of the capacitor now, not going in.

The current curve is the one that catches people out. **Current is greatest when the voltage is changing fastest**, which is the instant the switch closes, and it decays as the capacitor voltage rises to oppose the supply. At the start of charging, the uncharged capacitor behaves almost like a short circuit; when fully charged it behaves like an open circuit on d.c. So current is maximum when voltage is minimum, and zero when voltage is steady.

## Small resistance, huge current

Because tau = RC, shrinking the resistance shrinks the time — and Q = CV = It says that if the same charge moves in a much shorter time, the current must be enormous. Discharge times of millionths of a second are entirely possible, and the currents that go with them are measured in hundreds or thousands of amperes. That is useful in a camera flash and catastrophic across a screwdriver blade.

>! Never short a charged capacitor with a screwdriver, a shifter or a piece of wire. The peak current can weld the tool, blast molten metal into your eyes and rupture the capacitor. Discharge through a resistor, using a purpose-made discharge tool, then prove the terminals dead with a meter.

## Leakage and bleed resistors

No dielectric is perfect, so every charged capacitor slowly loses charge as current leaks internally from one plate to the other. A good capacitor may hold a useful charge for a very long time — hours or days — so leakage cannot be relied upon as a safety measure.

That is why many high-voltage, high-power circuits include a permanently connected **bleed resistor** across the capacitor. It is a deliberate, high-value leakage path that drains the charge to a safe level once the supply is removed. AS/NZS 3000:2018 sets the target: a capacitor greater than 0.5 microfarad must fall to 50 V or less within 1 minute where the capacitor is rated up to and including 650 V, and within 5 minutes where it is rated above 650 V. A bleed resistor is not required where the capacitor naturally discharges through something else, such as a motor winding permanently connected across it.

## Harnessing the time constant

Because the time to reach a chosen voltage is predictable from R and C, an **RC circuit** is the cheapest timer in electrical engineering. Feed the capacitor voltage into a **voltage comparator** and you have a circuit that switches at a set time after power-up: a lamp that turns off after a delay, a run-on fan timer, a star-delta changeover, a motor soft-start sequence. An electrician rarely designs one, but they fail and drift, and diagnosing "the timer is running short" means understanding that either R or C has changed value — usually C, because capacitors age and lose capacitance.

### Worked example 2 — a timing circuit

A control board charges a 10 microfarad capacitor through 1 megohm and its comparator trips at 63 per cent of the supply.

tau = RC = 1 000 000 x 10 x 10 to the minus 6 = **10 s**, so the output switches 10 s after power-up. If the capacitor has dried out to 6 microfarads, tau falls to 6 s and the delay is 40 per cent short — the classic "timer runs too fast" complaint.

## Energy stored

A charged capacitor holds real energy in the electrostatic field, and unlike an inductor it needs no current flowing to keep it there. The stored energy is:

**W = 1/2 C V squared**

with W in joules, C in farads and V in volts. Note that the energy goes up with the **square** of the voltage: double the voltage and you quadruple the stored energy.

### Worked example 3 — energy in a capacitor

A 33 microfarad capacitor is charged to 100 V.

W = 0.5 x 33 x 10 to the minus 6 x 100 squared = 0.5 x 33 x 10 to the minus 6 x 10 000 = **0.165 J**

Now the same capacitor at 400 V:

W = 0.5 x 33 x 10 to the minus 6 x 160 000 = **2.64 J**

Sixteen times the energy for four times the voltage. This is why the voltage on a capacitor matters far more than its microfarad rating when you are judging risk.

## What to remember

- tau = RC, in seconds, ohms and farads. One tau gives 63.2 per cent.
- Five time constants equals fully charged or fully discharged for all practical purposes.
- Supply voltage does not change the charging time; only R and C do.
- Charging current is highest at the instant of switch-on and falls to zero when the capacitor is full.
- Energy is 1/2 C V squared and rises with the square of voltage.
- Bleed resistors exist so the capacitor is safe by the time you get the cover off — but always verify.`,
          quiz: [
            {
              q: "A 220 microfarad capacitor charges through a 22 kilohm resistor. What is the time constant, and roughly how long until it is considered fully charged?",
              options: [
                "4.84 s, fully charged in about 24 s",
                "0.484 s, fully charged in about 2.4 s",
                "48.4 s, fully charged in about 4 minutes",
                "4.84 ms, fully charged in about 24 ms",
              ],
              answer: 0,
              explain: "tau = RC = 22 000 x 220 x 10 to the minus 6 = 4.84 s, and the five time constant rule gives 5 x 4.84 = 24.2 s. Watch the powers of ten: microfarads must become farads before multiplying.",
            },
            {
              q: "The same RC circuit is fed from 12 V instead of 240 V. How does the charging time change?",
              options: [
                "It is twenty times longer",
                "It does not change",
                "It is twenty times shorter",
                "It halves",
              ],
              answer: 1,
              explain: "Voltage does not appear in t = RC. A higher supply drives proportionally more current but must also deliver proportionally more charge, so the two cancel exactly. Only R and C set the timing.",
            },
            {
              q: "At the instant a switch closes on an uncharged capacitor in series with a resistor, the circuit current is:",
              options: [
                "Zero, rising as the capacitor charges",
                "Constant throughout the charging period",
                "At its maximum, then decaying as the capacitor voltage rises",
                "Impossible to predict without knowing the capacitance alone",
              ],
              answer: 2,
              explain: "An uncharged capacitor initially offers no opposing voltage, so it behaves almost like a short circuit and current is limited only by the resistance. As capacitor voltage builds it opposes the supply and current decays towards zero. Current is greatest where voltage is changing fastest.",
            },
            {
              q: "A 100 microfarad capacitor is charged to 500 V. How much energy is stored?",
              options: [
                "12.5 J",
                "0.025 J",
                "25 J",
                "2.5 J",
              ],
              answer: 0,
              explain: "W = 0.5 x C x V squared = 0.5 x 100 x 10 to the minus 6 x 250 000 = 12.5 J. That is easily enough to cause a severe shock or a violent arc, and it comes from a capacitor that would fit in your hand.",
            },
            {
              q: "AS/NZS 3000:2018 requires a capacitor greater than 0.5 microfarad rated at 400 V to discharge to 50 V or less within:",
              options: [
                "1 minute",
                "5 minutes",
                "10 seconds",
                "30 minutes",
              ],
              answer: 0,
              explain: "One minute applies to capacitors rated up to and including 650 V; five minutes applies above 650 V. Even so, the requirement is a design rule, not a substitute for testing — a failed bleed resistor leaves the capacitor fully charged.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "capacitor-danger-and-handling",
          title: "The stored-charge hazard and safe handling",
          minutes: 12,
          simple: "A capacitor can sit there fully charged long after the power is off, and it dumps everything it has the moment something bridges its terminals. If that something is your hand, hundreds of volts and a huge current go through you in an instant. Always discharge and prove dead before touching.",
          refs: REFS_DANGER,
          content: `Of everything in this module, this is the part that keeps people alive. Capacitors are the one component that stays lethal after you have isolated, locked off and confirmed the supply is dead at the incomer. They do not need the supply. They are already holding what they need.

>! A capacitor removed from a live circuit remains charged. Motor capacitors commonly sit above 300 V, capacitors used on three-phase line voltage can hold over 500 V, and the d.c. bus capacitors in a switch-mode welder or a variable speed drive can be charged well above the supply voltage — hundreds of volts still present with the plug on the floor. Treat every capacitor as live until you have discharged it and proven it dead.

## What actually hurts you

Two quantities decide the outcome: the **voltage**, which decides whether current can be driven through your body at all, and the **energy**, which decides how much damage that current does. Voltage across the terminals of an ordinary motor capacitor is easily over 300 V, more than enough to break down skin resistance and push current through the chest.

Energy comes from W = 1/2 C V squared. Some real figures:

| Typical part | Capacitance | Voltage | Stored energy |
|---|---|---|---|
| Air-conditioner run capacitor | 25 microfarads | 400 V | 2.0 J |
| Power supply filter capacitor | 470 microfarads | 340 V | 27.2 J |
| VSD d.c. bus capacitor | 1000 microfarads | 560 V | 156.8 J |

Check the last one: W = 0.5 x 1000 x 10 to the minus 6 x 560 squared = 0.5 x 0.001 x 313 600 = **156.8 J**. Delivered into a body in a fraction of a second, that is a serious risk of ventricular fibrillation, deep burns at the entry and exit points, and violent muscle contraction that throws you off a ladder or into the switchboard behind you. Even where the energy is too small to stop a heart, the involuntary reaction to an unexpected shock causes most of the secondary injuries in this trade.

## Why the current is so high

A capacitor has no internal mechanism limiting its output. Discharge current is set only by the resistance of the path you provide. The textbook case: a 1000 microfarad capacitor charged to 1000 V holds Q = CV = 1000 x 10 to the minus 6 x 1000 = **1 coulomb**. If that coulomb leaves in 1 millisecond, then from Q = It:

I = Q / t = 1 / 0.001 = **1000 A**

A thousand amperes, internally, through foil a few microns thick. This is why sudden shorting damages capacitors as well as people, and why photographic flash units — a capacitor charged to 200 to 500 V dumped into a xenon tube — produce such a violent burst of light from such a small device. The same principle drives tasers and railguns.

## Bleed resistors and the wiring rules

Well-designed equipment discharges itself. A **bleed resistor** permanently connected across the capacitor provides a controlled leakage path. AS/NZS 3000:2018 requires that a capacitor greater than 0.5 microfarad discharges to 50 V or less within 1 minute if rated up to and including 650 V, or within 5 minutes if rated above 650 V. No bleed resistor is needed where the capacitor discharges naturally through another component, such as a motor winding wired permanently across it.

### Worked example — sizing a bleed resistor

A 100 microfarad capacitor works at 400 V and must fall to 50 V within 60 seconds.

Discharge follows v = V x e to the power minus t/tau, so:

- 50 = 400 x e to the power minus 60/tau
- 50 / 400 = 0.125, and the natural log of 8 is 2.079
- 60 / tau = 2.079, so tau = 60 / 2.079 = **28.9 s**
- R = tau / C = 28.9 / (100 x 10 to the minus 6) = **289 kilohms maximum**

Choose the next standard value below that, 220 kilohms: tau = 220 000 x 100 x 10 to the minus 6 = 22 s, and the time to reach 50 V is 2.079 x 22 = **45.7 s** — comfortably inside the minute. Then check the resistor rating: P = V squared / R = 400 squared / 220 000 = 160 000 / 220 000 = **0.73 W**, so fit at least a 2 W resistor so it runs cool for years.

Note the compromise a designer faces. A low-value bleed resistor discharges fast but wastes power continuously and runs hot; a high value saves energy but leaves the capacitor dangerous for longer.

## Safe handling procedure

1. **Isolate and lock off** the supply, and apply your danger tag.
2. **Wait.** Give any bleed resistors time to work, but do not trust them — a failed bleed resistor is a common and invisible fault.
3. **Prove your tester** on a known live source or proving unit before and after the test.
4. **Test the capacitor terminals** for voltage, on a range that covers the expected d.c. as well as a.c.
5. **Discharge through a resistor**, not a screwdriver. A purpose-made discharge tool — typically a resistor of a few tens of kilohms in an insulated probe body — limits the current to a safe value and stops the capacitor being damaged.
6. **Re-test** after discharging, and only then handle the terminals. Some capacitors show "dielectric recovery", where a small voltage reappears minutes after discharging as charge trapped deep in the dielectric works its way out.
7. **Short and earth** capacitors that will be left disconnected for any time, and label them.

### Worked example — a discharge tool

A 40 microfarad run capacitor sits at 400 V. Discharging through a 20 kilohm tool:

- Peak current = V / R = 400 / 20 000 = **20 mA** — safe for the tool and the capacitor
- tau = RC = 20 000 x 40 x 10 to the minus 6 = **0.8 s**
- Fully discharged after 5 tau = **4 s**

Four seconds of patience against an arc flash. Small capacitors, of a few microfarads or less, can be discharged with a direct short without much drama, but the habit of always using a resistive tool means you never have to make that judgement under pressure on a hot roof.

## High-voltage cables are capacitors too

Any two conductors separated by insulation form a capacitor, and a long high-voltage cable is exactly that: metres of conductor separated from screen and earth by insulation. A disconnected HV cable can hold a great deal of energy, and it can even be re-charged by induction from adjacent live circuits. This is why HV work requires the cable to be earthed with a **grounding hook or earthing stick** applied after testing, so any stored or induced energy is dissipated into the mass of earth and kept there while people work.

## What to remember

- Isolation does not discharge a capacitor. The charge is independent of the supply.
- Motor capacitors above 300 V, three-phase capacitors above 500 V, drive and welder buses higher again.
- Energy is 1/2 C V squared and quadruples when voltage doubles.
- Bleed resistors are a design requirement under AS/NZS 3000:2018, not a guarantee — verify with a meter every time.
- Discharge through a resistor; never short terminals with a tool.
- Re-test after discharging, and earth HV cables with a grounding hook before working on them.`,
          quiz: [
            {
              q: "A drive has been isolated for twenty minutes and the supply is proven dead at the incoming terminals. What is the correct assumption about the d.c. bus capacitors?",
              options: [
                "They are safe, since the supply has been dead for far longer than five minutes",
                "They must still be tested for stored voltage and discharged if required",
                "They cannot hold charge once the drive has stopped running",
                "They only hold charge while the drive is displaying a fault",
              ],
              answer: 1,
              explain: "The discharge times in AS/NZS 3000:2018 assume the bleed path is intact. A failed bleed resistor or open discharge circuit leaves the bus fully charged with no external sign, so the only safe practice is prove the tester, test the terminals, discharge, and re-test.",
            },
            {
              q: "A 470 microfarad capacitor is charged to 340 V. The stored energy is closest to:",
              options: [
                "2.7 J",
                "0.08 J",
                "27 J",
                "272 J",
              ],
              answer: 2,
              explain: "W = 0.5 x 470 x 10 to the minus 6 x 340 squared = 0.5 x 470 x 10 to the minus 6 x 115 600 = 27.2 J. That is a dangerous amount of energy in a can the size of a drink bottle, and it is why smoothing capacitors are treated with the same respect as live busbars.",
            },
            {
              q: "Why is a resistive discharge tool preferred over shorting a capacitor with a screwdriver?",
              options: [
                "It discharges the capacitor faster",
                "It removes the need to test for voltage afterwards",
                "It converts the stored energy into magnetic energy",
                "It limits the peak discharge current, protecting both the technician and the capacitor from a violent arc",
              ],
              answer: 3,
              explain: "A dead short is theoretically zero ohms, so the discharge current is limited only by internal resistance of a few milliohms — hundreds or thousands of amps, an arc flash and possible rupture. The resistor is slower on purpose, and you still must re-test afterwards.",
            },
            {
              q: "A 200 microfarad capacitor working at 500 V needs to fall to 50 V within 60 seconds. What is the largest bleed resistor that will do it?",
              options: [
                "About 260 kilohms",
                "About 130 kilohms",
                "About 1.3 megohms",
                "About 13 kilohms",
              ],
              answer: 1,
              explain: "500 to 50 V is a ratio of 10, and the natural log of 10 is 2.303, so tau must be no more than 60 / 2.303 = 26.1 s. R = tau / C = 26.1 / (200 x 10 to the minus 6) = about 130 kilohms. Choosing a larger resistor saves standing losses but breaks the wiring rules requirement.",
            },
            {
              q: "Why must a disconnected high-voltage cable be earthed with a grounding hook before work begins?",
              options: [
                "To prevent the insulation from drying out",
                "To reduce the resistance of the joint",
                "Because the cable itself has capacitance and can hold or acquire a dangerous stored charge",
                "Because the wiring rules require all cables to be earthed at all times",
              ],
              answer: 2,
              explain: "Conductor, insulation and screen form a capacitor over the whole cable length, so a long HV cable stores real energy and can also be charged by induction from nearby live circuits. The earthing stick provides a permanent path to the mass of earth for the duration of the work.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "capacitors-series-parallel",
          title: "Capacitors in parallel and in series",
          minutes: 13,
          simple: "Wire capacitors side by side and it is like making the plates bigger, so you just add the values up. Wire them in a chain and it is like pushing the plates further apart, so the total is smaller than the smallest one - the opposite of what resistors do.",
          refs: REFS_COMBO,
          content: `Capacitors combine in exactly the opposite way to resistors, and the reason is geometric rather than mathematical. Once you can picture what the connection does to the plates, you will never mix the two rules up again.

## Parallel: bigger plates

Connecting capacitors in parallel joins all the positive plates together and all the negative plates together. Electrically that is the same as one capacitor with a much larger plate area — and capacitance is directly proportional to plate area. The physical dimensions of the individual units do not matter at all. So:

**C total = C1 + C2 + C3 + ... + Cn**

Because they are in parallel, they all sit across the same voltage:

V total = V1 = V2 = V3

The charge on each one is its own capacitance times that shared voltage, and the total charge is the sum of the individual charges — which must also equal C total x V total.

### Worked example 1 — a parallel bank

Three capacitors of 8 microfarads, 12 microfarads and 30 microfarads are connected in parallel across a 230 V d.c. supply. Find the total capacitance, the charge on each, the total charge and the stored energy.

Total capacitance:

C total = 8 + 12 + 30 = **50 microfarads**

Charge on each (all see 230 V):

- Q1 = C1 x V = 8 x 10 to the minus 6 x 230 = 0.00184 C = **1.84 mC**
- Q2 = C2 x V = 12 x 10 to the minus 6 x 230 = 0.00276 C = **2.76 mC**
- Q3 = C3 x V = 30 x 10 to the minus 6 x 230 = 0.0069 C = **6.9 mC**

Total charge, two ways — they must agree:

- By summing: Q total = 1.84 + 2.76 + 6.9 = **11.5 mC**
- By the total capacitance: Q total = 50 x 10 to the minus 6 x 230 = 0.0115 C = **11.5 mC**

Stored energy:

W = 0.5 x 50 x 10 to the minus 6 x 230 squared = 0.5 x 50 x 10 to the minus 6 x 52 900 = **0.66 J**

### Worked example 2 — the simple case

A 7 F supercapacitor is paralleled with a 16 F supercapacitor:

C total = 7 + 16 = **23 F**

Note that all capacitors in a parallel group must be rated for the full applied voltage, because they all get the full applied voltage. Paralleling does nothing for voltage capability — only for capacitance and for the current the bank can supply.

## Series: wider gap

Connecting capacitors in series stacks the dielectric gaps end to end, so the effective distance between the outermost plates increases. Capacitance is inversely proportional to plate separation, so the total falls:

**1 / C total = 1/C1 + 1/C2 + 1/C3 + ...**

For just two capacitors the product-over-sum shortcut works, exactly as for parallel resistors:

C total = (C1 x C2) / (C1 + C2)

And for n identical capacitors in series, C total = C / n.

The total capacitance of a series group is **always less than the smallest capacitor in the group**. If that result ever comes out larger than the smallest member, you have made an arithmetic error.

Two circuit laws finish the picture. By Kirchhoff's Current Law, the same current flows through every element of a series circuit, and since Q = It, the same current for the same time means **the same charge on every capacitor**:

Q total = Q1 = Q2 = Q3

By Kirchhoff's Voltage Law, the individual voltages must add up to the supply:

V total = V1 + V2 + V3

Since Q is common and V = Q / C, the **smallest capacitor takes the largest share of the voltage**. That is a safety point, not a curiosity.

### Worked example 3 — two in series

Find the equivalent capacitance of a 7 microfarad and a 33 microfarad capacitor in series.

C total = (7 x 33) / (7 + 33) = 231 / 40 = **5.775 microfarads**

Less than the 7 microfarad unit, as expected.

### Worked example 4 — three in series with the voltage split

Capacitors of 22 microfarads, 33 microfarads and 47 microfarads are connected in series across 300 V d.c. Find the total capacitance, the circuit charge and the voltage across each capacitor.

Total capacitance (working in reciprocals of microfarads):

- 1/22 = 0.045455
- 1/33 = 0.030303
- 1/47 = 0.021277
- Sum = 0.097035
- C total = 1 / 0.097035 = **10.31 microfarads**

Total charge:

Q total = C total x V total = 10.31 x 10 to the minus 6 x 300 = 0.003092 C = **3.092 mC**

And because it is a series circuit, every capacitor carries that same 3.092 mC.

Voltage across each, from V = Q / C:

- V1 = 0.003092 / (22 x 10 to the minus 6) = **140.5 V**
- V2 = 0.003092 / (33 x 10 to the minus 6) = **93.7 V**
- V3 = 0.003092 / (47 x 10 to the minus 6) = **65.8 V**

Check with KVL: 140.5 + 93.7 + 65.8 = **300 V**. Correct.

Look at what happened: the 22 microfarad unit — the smallest — is carrying nearly half the supply voltage. If all three were 250 V parts you would be fine here, but change the ratio and the smallest capacitor can be pushed past its rating and fail short circuit, which then dumps the whole supply onto the next one, and the group fails in a cascade.

## Why series connections are used at all

Nobody puts capacitors in series to lose capacitance. They do it to **share voltage**. Two 470 microfarad, 250 V electrolytics in series give 235 microfarads at a nominal 500 V rating — a standard trick on the d.c. bus of drives and welders where a single part of that rating is expensive or unavailable. In practice, equal-value **balancing resistors** are fitted across each capacitor to force the voltage to divide evenly despite differences in leakage current, and those same resistors double as the bleed path.

| Connection | Total capacitance | Voltage across each | Charge on each |
|---|---|---|---|
| Parallel | Sum of the values, always larger than the biggest | The same on all | Proportional to its own capacitance |
| Series | Reciprocal formula, always smaller than the smallest | Divides, biggest share on the smallest capacitor | The same on all |

## On the job

- Parallel adds up; series uses the reciprocal formula. This is the reverse of resistors.
- Always sanity-check: a series total below the smallest member, a parallel total above the largest.
- In series, charge is common and voltage divides; in parallel, voltage is common and charge divides.
- The smallest capacitor in a series string sees the highest voltage — check its rating.
- Never replace a run capacitor with two paralleled units unless both are rated for the full a.c. working voltage and continuous duty.`,
          quiz: [
            {
              q: "Capacitors of 4 microfarads, 6 microfarads and 10 microfarads are connected in parallel across 240 V. What is the total charge stored?",
              options: [
                "4.8 mC",
                "0.48 mC",
                "48 mC",
                "20 mC",
              ],
              answer: 0,
              explain: "C total = 4 + 6 + 10 = 20 microfarads, so Q = CV = 20 x 10 to the minus 6 x 240 = 0.0048 C = 4.8 mC. You get the same answer by adding the individual charges of 0.96, 1.44 and 2.4 mC.",
            },
            {
              q: "What is the equivalent capacitance of a 10 microfarad and a 15 microfarad capacitor in series?",
              options: [
                "25 microfarads",
                "12.5 microfarads",
                "6 microfarads",
                "5 microfarads",
              ],
              answer: 2,
              explain: "Product over sum: (10 x 15) / (10 + 15) = 150 / 25 = 6 microfarads. It must be less than 10, the smallest member. Adding them would be the parallel rule, and it is a common mix-up because it is the opposite of the resistor rules.",
            },
            {
              q: "Why does the smallest capacitor in a series string carry the largest voltage?",
              options: [
                "Because it has the highest internal resistance",
                "Because the charge is the same on all of them and V = Q / C, so the smallest C gives the biggest V",
                "Because it charges last",
                "Because smaller capacitors always have higher voltage ratings",
              ],
              answer: 1,
              explain: "Series means one current and one time for every element, so by Q = It the charge is identical on each capacitor. With Q fixed, V = Q / C makes voltage inversely proportional to capacitance. It is a real hazard: the smallest unit can be pushed past its rating.",
            },
            {
              q: "Two 470 microfarad 250 V electrolytics are connected in series on a d.c. bus, with balancing resistors across each. What has the designer achieved?",
              options: [
                "940 microfarads at 250 V",
                "235 microfarads at a nominal 500 V rating",
                "470 microfarads at 500 V",
                "235 microfarads at 125 V",
              ],
              answer: 1,
              explain: "Series halves the capacitance of two equal units (C/n) and nominally doubles the voltage capability. The balancing resistors force an even voltage split despite unequal leakage, and they also act as the bleed path when the bus is switched off.",
            },
            {
              q: "A technician calculates the series total of 15, 22 and 33 microfarads and gets 70 microfarads. What has gone wrong?",
              options: [
                "Nothing, that is correct",
                "They used the correct method but the wrong units",
                "They should have used product over sum on all three",
                "They added the values, which is the parallel rule; the series answer must be below 15 microfarads",
              ],
              answer: 3,
              explain: "The series total must always be smaller than the smallest member, so 70 microfarads is impossible. Working the reciprocals gives 1/15 + 1/22 + 1/33 = 0.0667 + 0.0455 + 0.0303 = 0.1425, so C total = 7.02 microfarads.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "capacitor-faults-and-testing",
          title: "Common faults and testing for serviceability",
          minutes: 12,
          simple: "Capacitors fail by punching a hole through the insulation, by losing their internal connection, or by slowly drying out and losing value. You find them with your eyes first - bulges and leaks - then with a capacitance meter or an ESR meter, always after discharging.",
          refs: REFS_FAULTS,
          content: `Capacitors are among the most failure-prone parts in electrical equipment, and the reason is that manufacturers keep pushing them: more capacitance, smaller can, thinner dielectric. Every gram saved is more stress on the insulation and on the thin conductive foils.

## Why the dielectric is under such stress

Put the numbers on it. A voltage of 100 V across an insulator only 0.1 mm thick is a voltage gradient of:

100 / 0.0001 = **1 000 000 V per metre**, that is 1 MV/m, or 1 kV/mm

A megavolt per metre inside a part that costs a few dollars. If any single point in that film has a flaw, a contaminant or a thin spot, the dielectric punches through there, and once punctured the whole capacitor is finished — a capacitor with a hole in its insulation is not a degraded capacitor, it is a short circuit.

Current is the other stressor. Because a capacitor discharges at whatever rate the external resistance allows, shorting the terminals produces enormous internal currents. A theoretical dead short is zero ohms and would give infinite current; in reality the internal resistance of a few milliohms is all that limits it. Recall the example: a 1000 microfarad capacitor at 1000 V holds 1 coulomb, and if that leaves in 1 millisecond the internal current is around 1000 A. That is more than enough to fuse the thin foil conductors, which is one way a capacitor becomes open circuit.

## Dielectrics drying out

Electrolytic and oil-filled capacitors depend on a wet dielectric, and wet things dry. Seals harden, electrolyte escapes as vapour or as a visible leak, and the capacitance falls steadily until the part no longer meets its design value. Nothing dramatic happens: the equipment just misbehaves — a motor that hesitates to start, a timer that runs short, a power supply that hums.

Heat accelerates all of it. Dielectric heating occurs in every capacitor and becomes much worse at higher frequency, which is why electrolytics in switch-mode power supplies run far hotter than the same part on d.c. or 50 Hz. A capacitor near a hot heatsink is always the first suspect on an old board.

| Fault | What you see or measure | Usual cause |
|---|---|---|
| Short circuit | Near zero ohms; blown fuse or tripped protective device | Dielectric puncture from overvoltage, surge or a flaw |
| Open circuit | No capacitance at all; equipment simply does not function | Fused internal foil or a failed internal connection |
| Loss of capacitance | Measured value well below the marked value | Dried-out or leaked electrolyte, ageing, heat |
| High ESR | Poor ESR meter reading; capacitor runs hot; ripple on the supply | Deteriorated electrolyte |
| Excess leakage | Will not hold charge; warms up in service | Contaminated or degraded dielectric |
| Bulging or venting | Domed top or swollen base, crust or wet residue around the seal | Overheating, overvoltage, reverse polarity, gas pressure |

>! Discharge and prove dead before any test. Ohmmeter and capacitance tests on a charged capacitor can destroy the meter and injure you. Never test in circuit if you can avoid it — parallel paths through windings and other components give false readings.

## Testing techniques

**Visual inspection first.** A bulging top or bottom, a split vent, brown crust or oily residue around the seal, or a capacitor that has pushed itself off the board condemns the part on the spot. Replace it even if it still measures acceptably, because it will not stay that way.

**Capacitance meter or multimeter capacitance range.** The direct method: discharge, disconnect at least one lead, select the capacitance range and read the value. Compare with the marking and the tolerance — a run capacitor marked 40 microfarads plus or minus 5 per cent is serviceable between 38 and 42 microfarads. Be aware that many general-purpose multimeters only measure to around 200 microfarads, so large start capacitors and bus capacitors need a dedicated capacitor tester.

**Ohmmeter method for large capacitors.** With the capacitor discharged, connect an ohmmeter across the terminals. The meter's own battery charges the capacitor, so a serviceable unit reads a low resistance at first and then climbs steadily towards a very high value or over-range. A reading that stays near zero means a shorted capacitor; a reading that sits at over-range from the outset means an open circuit. The method proves that capacitance exists, not that it is the right amount — for that, run the same test on a known-good capacitor of the same value on the same range and compare how the readings behave.

**ESR meter.** Effective series resistance meters have become the instrument of choice for electrolytics. ESR is the internal series resistance of the capacitor, and it rises as the electrolyte deteriorates long before the measured capacitance goes badly out of range. An ESR meter therefore catches a dying capacitor that a capacitance meter still passes, and many models measure in circuit.

**Time constant method.** Where no capacitance meter is available, use the RC relationship. Remove the capacitor from circuit, connect it in series with a resistor of known value across a d.c. supply, and time how long it takes to reach 63 per cent of the supply voltage. That time is one time constant, so C = t / R.

*Worked example:* a capacitor is charged through a 100 kilohm resistor from a 20 V supply. It reaches 63 per cent of 20 V, which is 12.6 V, in 4.5 seconds.

C = t / R = 4.5 / 100 000 = 45 x 10 to the minus 6 = **45 microfarads**

The nameplate says 47 microfarads with a tolerance of plus or minus 10 per cent, so the acceptable band is 42.3 to 51.7 microfarads. At 45 microfarads the capacitor passes.

**Capacitance or LCR bridge.** Small capacitors are best compared against a known-good reference at their intended operating frequency in a bridge circuit, because their behaviour is frequency dependent in ways a d.c. test cannot reveal.

## Field symptoms that point to a capacitor

- Single-phase motor hums but will not start, and starts if you spin the shaft: suspect the start capacitor or its relay.
- Compressor runs but draws high current and runs hot: suspect a low-value or open run capacitor.
- PFC bank fuse blowing, or measured kvar well below nameplate: suspect a failed capacitor element.
- Power supply output with visible ripple or audible hum: suspect high ESR or dried filter capacitors.
- Timer or delay circuit that operates too quickly: suspect a capacitor that has lost value.

## On the job

- Discharge, then prove dead, then test. In that order, every time.
- Look before you measure — bulges and residue condemn a capacitor without instruments.
- Measure out of circuit wherever possible and judge the reading against the marked tolerance.
- ESR finds tired electrolytics that still measure the right capacitance.
- Match the replacement on microfarads, tolerance, a.c. or d.c. voltage rating, temperature class and physical fit.`,
          quiz: [
            {
              q: "A serviceable large capacitor is tested with an ohmmeter after being discharged. What behaviour should the technician expect?",
              options: [
                "A steady mid-range resistance that does not move",
                "Over-range immediately and permanently",
                "A low reading at first that climbs steadily towards over-range",
                "A reading that falls steadily towards zero",
              ],
              answer: 2,
              explain: "The meter's internal battery charges the capacitor, so the initial current is high and the indicated resistance low; as the capacitor charges, current falls and the reading climbs. A permanently low reading means a short, and immediate over-range means an open circuit or a very small capacitance.",
            },
            {
              q: "Why can an ESR meter condemn a capacitor that still measures the correct capacitance?",
              options: [
                "It measures the voltage rating rather than the value",
                "It measures the internal series resistance, which rises as the electrolyte deteriorates before the capacitance falls out of tolerance",
                "It tests at the rated voltage, unlike a capacitance meter",
                "It measures the dielectric strength directly",
              ],
              answer: 1,
              explain: "Deteriorating electrolyte raises internal series resistance well before it changes the measured value enough to fail. High ESR causes overheating and ripple on a supply, so an ESR test catches the fault at the stage where it is causing symptoms but a capacitance check still passes.",
            },
            {
              q: "A capacitor charged through a 200 kilohm resistor reaches 63 per cent of the supply voltage in 9.4 seconds. What is its capacitance?",
              options: [
                "47 microfarads",
                "4.7 microfarads",
                "470 microfarads",
                "18.8 microfarads",
              ],
              answer: 0,
              explain: "The 63 per cent point is one time constant, so tau = 9.4 s and C = t / R = 9.4 / 200 000 = 47 x 10 to the minus 6 F = 47 microfarads. The method needs the capacitor out of circuit, otherwise parallel paths change the effective resistance.",
            },
            {
              q: "An electrolytic capacitor on a switch-mode power supply board has a domed top but still measures within tolerance. What should be done?",
              options: [
                "Leave it, since it measures correctly",
                "Re-form it by applying rated voltage through a resistor",
                "Replace it, because bulging indicates internal gas pressure and imminent failure",
                "Fit a second capacitor in parallel to share the load",
              ],
              answer: 2,
              explain: "A bulge or leaking electrolyte means the seal and the electrolyte are already compromised, so the value will keep drifting and the part may vent. The rule is to replace bulging or leaking capacitors even if they are still working — measuring within tolerance today says nothing about next month.",
            },
            {
              q: "A 100 V potential exists across a dielectric 0.1 mm thick. What voltage gradient is the material withstanding?",
              options: [
                "1000 V per metre",
                "1 kV per metre",
                "100 kV per metre",
                "1 000 000 V per metre",
              ],
              answer: 3,
              explain: "100 V divided by 0.0001 m is 1 000 000 V/m, that is 1 kV/mm. Seeing the gradient rather than the terminal voltage explains why a thin, cheap film has such a hard life and why a single flaw destroys the whole capacitor.",
            },
          ],
        },

        /* ---------------------------------------------------------------- */
        {
          id: "capacitor-applications",
          title: "Applications across the electrotechnology industry",
          minutes: 12,
          simple: "The same trick - store charge, give it back fast - does a dozen different jobs. It gives a single-phase motor the shove it needs to start, supplies reactive current so the supply cable does not have to, smooths lumpy d.c. into flat d.c., times things, and soaks up the spark when contacts open.",
          refs: REFS_APPS,
          content: `Every capacitor application is the same physics wearing different clothes: store charge when the voltage is high, give it back when the voltage falls, and pass changing voltages while blocking steady d.c. What changes is the timescale and the size of the part.

## Motor starting and running

A single-phase supply cannot produce a rotating magnetic field on its own, so a single-phase induction motor needs a second winding carrying current that is shifted in time from the main winding. A capacitor in series with the auxiliary winding produces that shift, and the motor develops starting torque.

- **Start capacitor** — a non-polarised a.c. electrolytic, large value (typically tens to a few hundred microfarads), rated for short-duty intermittent use only. It gives maximum phase shift and maximum starting torque, and a centrifugal switch or a start relay cuts it out once the motor is up to speed. Leave it in circuit and it overheats and bursts.
- **Run capacitor** — a metallised film or oil-filled unit, smaller value (commonly 2 to 60 microfarads), rated for continuous a.c. duty at 250 V a.c. or 440 V a.c. It stays in circuit permanently, improving running torque, efficiency and power factor.
- **Capacitor start / capacitor run (CSCR)** motors use both, and are common on hermetic compressors that must start against system pressure.

A weak or failed run capacitor is one of the most common air-conditioning callouts: the compressor draws high current, runs hot and trips on overload, or hums without starting.

### Worked example — run capacitor current

A 30 microfarad run capacitor sits across a 230 V, 50 Hz supply. What current does it draw?

- Capacitive reactance: Xc = 1 / (2 x pi x f x C) = 1 / (2 x 3.1416 x 50 x 30 x 10 to the minus 6)
- 2 x pi x 50 = 314.16; 314.16 x 30 x 10 to the minus 6 = 0.0094248
- Xc = 1 / 0.0094248 = **106.1 ohms**
- I = V / Xc = 230 / 106.1 = **2.17 A**

That current leads the voltage by 90 degrees, which is exactly what makes the phase shift work — and it is also a quick field check, since a capacitor drawing far less than its calculated current has lost value.

## Power factor correction

An inductive load — motors, transformers, discharge lighting ballasts — draws lagging reactive current that flows all the way back to the supply transformer, loading cables and switchgear without doing useful work. A capacitor draws leading reactive current. Connect one at the load and the two exchange reactive current locally, so the supply only has to deliver the real power.

The reactive power a capacitor supplies is Q = V x I = V squared / Xc, or Q = V squared x 2 x pi x f x C.

Using the capacitor above: Q = 230 x 2.17 = **499 var**, about 0.5 kvar from a single 30 microfarad unit.

### Worked example — sizing correction for a motor

A single-phase 230 V, 50 Hz load draws 5 kW at a power factor of 0.75 lagging, and is to be corrected to 0.95 lagging.

- Existing reactive power: cos of the angle is 0.75, so the angle is 41.4 degrees and its tangent is 0.882. Q1 = 5 x 0.882 = **4.41 kvar**
- Target reactive power: cos of the angle is 0.95, angle 18.2 degrees, tangent 0.329. Q2 = 5 x 0.329 = **1.64 kvar**
- Capacitor must supply the difference: 4.41 - 1.64 = **2.77 kvar**
- C = Q / (V squared x 2 x pi x f) = 2770 / (52 900 x 314.16) = 2770 / 16 619 000 = 1.67 x 10 to the minus 4 F = **167 microfarads**

Correction capacitors are built as parallel banks, often switched in steps by a power factor controller so the plant does not end up over-corrected and leading at light load. On a smaller scale, the same idea appears as the correction capacitor inside a fluorescent luminaire.

## Filtering and smoothing

Rectify a.c. and you get lumpy, pulsating d.c. Put a large electrolytic across the output and it charges to the peaks and holds the voltage up between them, so the ripple is reduced to a manageable wobble. This is the standard job of the big can in every power supply, welder inverter and variable speed drive.

The same principle appears in miniature everywhere on electronic boards:

- **Decoupling** — a small capacitor across the supply pins of an IC provides local instantaneous current so fast load changes do not drag the board's supply rail around.
- **Coupling** — a capacitor in series with a signal passes the a.c. component while blocking the d.c. bias, letting stages be joined without upsetting each other.
- **High and low pass filters** — because reactance falls as frequency rises, a capacitor passes high frequencies more readily than low ones; that is the basis of tone controls, crossovers, noise filters and radio tuning.
- **EMI filters** — X-class capacitors across the line and Y-class capacitors to earth divert conducted electrical noise before it leaves or enters equipment.

## Timing

An RC network charging towards a threshold gives a delay that depends only on R and C, so capacitors set the timing in delay-on and delay-off relays, star-delta changeovers, run-on fans, flashing beacons and oscillators. In electronics the capacitor voltage is compared against a reference by a **voltage comparator**, which switches the output when the threshold is crossed. Electricians rarely design these, but they do fail and drift, and a delay that has become too short is nearly always a capacitor that has lost value.

*Quick example:* an RC delay uses 470 kilohms and 22 microfarads. tau = 470 000 x 22 x 10 to the minus 6 = **10.3 s**, so a comparator set at 63 per cent trips a little over 10 seconds after power-up.

## Snubbing and surge suppression

Opening a d.c. inductive circuit — a relay coil, a contactor, a solenoid, a d.c. motor — makes the collapsing magnetic field try to maintain current, generating a high voltage across the parting contacts and drawing an arc that erodes them. An **RC snubber**, typically a capacitor of around 0.1 microfarad in series with a resistor of around 100 ohms wired across the contacts or the load, gives that energy somewhere to go: the capacitor absorbs the rush of charge while the resistor limits the current on re-closure. Contacts last far longer, and radiated interference drops.

Ceramic and mica capacitors do the related job of surge and arc suppression, diverting fast transient energy safely to earth in distribution equipment and control gear.

## Energy storage and pulse power

Where energy must be released faster than any battery could manage, capacitors are the only choice. Photographic flash units charge a capacitor to between 200 and 500 V and dump it into a xenon tube in a few milliseconds. Supercapacitors above 1 F provide short-term backup and load levelling. The same pulse-power principle powers welders, defibrillators, tasers and railguns.

>! Every one of these applications leaves energy stored after the equipment is switched off, and the pulse-power ones store enough to kill. Isolate, wait, test, discharge through a resistor, then re-test before you put a hand anywhere near the terminals.

## What to remember

- Start capacitors are large, non-polarised electrolytic and short-duty; run capacitors are film or oil and continuously rated.
- A capacitor supplies leading reactive current, which is what corrects a lagging power factor.
- Filtering, coupling, decoupling and tone shaping all rely on reactance falling as frequency rises.
- RC networks give repeatable time delays; a shortened delay means lost capacitance.
- Snubbers protect contacts on inductive d.c. circuits.
- Every application stores energy that outlives the supply.`,
          quiz: [
            {
              q: "Why must a start capacitor be switched out of circuit once a single-phase motor reaches speed?",
              options: [
                "It would correct the power factor too far",
                "It is a short-duty non-polarised electrolytic and will overheat and burst if left energised continuously",
                "It would reverse the motor",
                "It would prevent the motor from being switched off",
              ],
              answer: 1,
              explain: "Start capacitors trade continuous rating for high capacitance in a small can, and are rated for only a few seconds of duty per start. A centrifugal switch or start relay removes them. A run capacitor is the type designed to stay in circuit permanently.",
            },
            {
              q: "A 40 microfarad run capacitor is connected across 240 V, 50 Hz. Approximately what current should it draw?",
              options: [
                "0.3 A",
                "12 A",
                "3.0 A",
                "1.2 A",
              ],
              answer: 2,
              explain: "Xc = 1 / (2 x pi x 50 x 40 x 10 to the minus 6) = 1 / 0.012566 = 79.6 ohms, so I = 240 / 79.6 = 3.0 A. Measuring far less than the calculated current is a quick indication that the capacitor has lost value.",
            },
            {
              q: "How does a capacitor improve the power factor of an inductive load?",
              options: [
                "It reduces the real power the load consumes",
                "It increases the supply voltage at the load",
                "It supplies leading reactive current locally, so the lagging reactive current no longer has to come from the supply",
                "It converts reactive power into real power",
              ],
              answer: 2,
              explain: "The capacitor and the inductive load exchange reactive current between themselves, so the supply cable and transformer only carry the real component. Real power is unchanged — the load still does the same work — and no conversion of reactive to real power occurs.",
            },
            {
              q: "An RC snubber of 0.1 microfarad and 100 ohms is fitted across a d.c. contactor's contacts. What is it doing?",
              options: [
                "Correcting the power factor of the coil",
                "Absorbing the inductive energy at contact opening so the arc is suppressed and the contacts survive",
                "Increasing the coil current so the contactor pulls in faster",
                "Filtering ripple from the d.c. supply",
              ],
              answer: 1,
              explain: "When the contacts part, the collapsing field drives a high voltage that strikes an arc. The capacitor gives that energy somewhere to go, and the series resistor limits the discharge current when the contacts close again. Power factor correction applies to a.c. and is a different job entirely.",
            },
            {
              q: "A delay-on-make timer that used to give a 20 second delay now switches after about 12 seconds. What is the most likely cause?",
              options: [
                "The supply voltage has risen",
                "The bleed resistor has failed short circuit",
                "The timing capacitor has lost capacitance",
                "The supply frequency has changed",
              ],
              answer: 2,
              explain: "The delay is set by tau = RC, and supply voltage does not appear in that equation at all. Resistors seldom drift far, whereas electrolytic capacitors dry out and lose value with age and heat — so a shortened delay points straight at the capacitor.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
