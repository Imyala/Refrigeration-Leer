/* =========================================================================
   Course content, module 304 — Resistors and resistance measurement.
   Source: Electrical Principles for the Electrical Trades, 8th edition
   (McGraw-Hill Australia), Chapter 4 — Resistors and resistance measurement.

   Written for this course: requirements and technical content are
   paraphrased for teaching; the source texts remain the authority.

   Loaded as a plain script (extends the COURSE array) and require()-able in
   Node for tests.
   ========================================================================= */
(function (root) {
  "use strict";

  const REFS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — Ch 4, resistors and resistance measurement",
  ];

  const REFS_CLASSES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — types and applications of fixed and variable resistors used in the electrotechnology industry",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — linear and non-linear variable resistance responses, rheostats and potentiometers",
  ];

  const REFS_CONSTRUCTION = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistor construction: wire-wound, carbon-composition, carbon-film and metal-film types",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — cast grid resistors, co-axial sheathed elements, liquid resistors and non-inductive (bifilar) resistors",
  ];

  const REFS_SPECIAL = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — special-purpose resistors and resistors as transducers",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — thermistors (NTC and PTC), voltage-dependent resistors and light-dependent resistors",
  ];

  const REFS_CODE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistor labelling and colour codes",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — preferred resistor values and the E series",
  ];

  const REFS_POWER = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — power ratings of a resistor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — specifying and selecting a resistor for a particular application",
  ];

  const REFS_FACTORS = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the four factors that affect the resistance of a conductor",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistivity of materials and calculating conductor resistance",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — superconductors and their applications",
  ];

  const REFS_TEMP = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — the effect of temperature on resistance and the inferred zero method",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — temperature coefficient of resistance and motor winding temperature calculation",
  ];

  const REFS_CABLES = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — effects of resistance on current-carrying capacity, voltage drop and power loss in cables",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistance tables and resistance faults (high and low resistance)",
    "AS/NZS 3000:2018 Wiring Rules — voltage drop limit; AS/NZS 3008.1 cable selection tables",
  ];

  const REFS_MEASURE = [
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — resistance measurement with digital and analogue ohmmeters",
    "Electrical Principles for the Electrical Trades, 8th ed. (McGraw-Hill) — earth continuity testing, insulation resistance testing and care in the use of IR testers",
    "AS/NZS 3000:2018 Wiring Rules — Section 8, verification and testing",
  ];

  const MODULES = [
    {
      id: "elec-resistors",
      stream: "elec",
      title: "E.4 · Resistors and resistance measurement",
      blurb: "Resistor types and special-purpose transducers, colour codes and preferred values, power ratings, what sets a conductor's resistance, and how resistance is measured and tested on site.",
      lessons: [
        /* ------------------------------------------------------------- 1 */
        {
          id: "resistance-and-resistor-classes",
          title: "Resistance, and the three classes of resistor",
          minutes: 11,
          simple: "A resistor is a deliberate traffic jam for electricity. Squeezing the flow does two useful things: it uses up some voltage, and it makes heat. Some resistors have one fixed value, some you can turn with a knob, and some a technician tweaks once with a screwdriver.",
          refs: REFS_CLASSES,
          content: `## Why a trade course starts with resistance

Resistance is the opposition a material offers to current flow. Physically it comes from moving electrons colliding with the atoms of the material they are travelling through, and it is measured in ohms, symbol Ω. Georg Ohm pinned the definition down: one ohm is the resistance between two points in a conductor when one volt applied across those points drives exactly one ampere through it. That gives the relationship you will use for the rest of your career, R = V / I.

For an electrician, resistance shows up in two practical ways, and both matter every day.

- **A voltage drop appears across it.** Push current through resistance and volts are consumed. That is a nuisance in a long submain feeding a motor, but it is exactly what you want in a dropping resistor feeding an indicator lamp.
- **Heat is produced.** Sometimes that is the whole point — a stove element, an oven, a strip heater, a hot water element. Sometimes it is pure waste, like the heat in a cable run that you paid for at the meter and never used.

Every resistor you will ever fit is chosen against four numbers: resistance value, power dissipation, current-carrying capacity and voltage rating. Those four together mostly decide how big the component physically is.

## The three classes

Resistors sort into three families, and the difference is about **who** changes the value and **how**.

| Class | Value can be changed by | Typical example |
|---|---|---|
| Fixed | Nobody — value is set in manufacture | Carbon-film resistor in a control board |
| Variable | The operator, from a control panel, live or dead | Volume knob, motor speed rheostat |
| Adjustable | A technician, with a tool, during commissioning | Trimpot setting a sensor gain |

A **fixed resistor** has one value that does not change with voltage, current or (within reason) temperature. It is drawn with the IEC symbol: a plain rectangle in the line of the circuit. Fixed resistors are far and away the most common type in electronic control gear.

A **variable resistor** has a resistive track and a sliding or rotating contact — the **wiper** — that runs along it. Move the wiper and you tap the track at a different point, so the resistance between the wiper and one end changes. The IEC symbol is the rectangle with an arrow through it. The volume control on a radio is the classic example. Variable resistors are used where the exact value is not known in advance, or where the user needs to change it while the circuit is running.

An **adjustable resistor** sits between the two. It is a variable resistor, but it is meant to be set once by a technician to calibrate or fine-tune a circuit, not fiddled with by the end user. It is drawn as the rectangle with an arrow and a small line indicating screwdriver adjustment. In the trade these are called **trimmers**, **trimpots** or **pre-set** resistors — "pre-set" usually when it is wired as a rheostat rather than a potentiometer. Some large wire-wound resistors are instead adjusted by physically sliding a metal tap along an exposed section of the winding and clamping it.

### Rheostat or potentiometer?

This is the distinction that gets asked in every assessment, and the answer is about terminals and about the job.

| | Rheostat | Potentiometer |
|---|---|---|
| Terminals used | Two: one end plus the wiper | Three: both ends plus the wiper |
| Connected as | In series with the load | Across the supply, wiper is the output |
| Controls | Current | Voltage |
| Typical use | Motor field current, lamp dimming | Volume, setpoint, sensor reference |

A potentiometer works as a voltage divider: the full supply sits across the whole track, and the wiper picks off a fraction of it. A rheostat works as a variable series resistance: you are changing how much opposition is in the current path.

In practice most components sold are three-terminal potentiometers, and a technician turns one into a rheostat simply by linking the wiper to one end terminal. It is still commonly called a "pot" even when it is wired as a rheostat. Linking the unused end to the wiper is good practice — if the wiper ever loses contact with the track through wear or dirt, the circuit sees the whole track rather than an open circuit, which usually fails safe.

## Linear and non-linear tracks

Variable and adjustable resistors are further classed by how the resistance changes as the control moves.

A **linear** track changes resistance in direct proportion to wiper travel. Take a 0–10 kΩ linear pot:

- Wiper at 50% of travel: R = 0.50 × 10 kΩ = 5 kΩ
- Wiper at 85% of travel: R = 0.85 × 10 kΩ = 8.5 kΩ

A **non-linear** (often logarithmic, or "log taper") track does not. On a typical non-linear 0–10 kΩ pot, the first 40% of travel might only bring the resistance up to about 500 Ω — half a kilohm out of ten. Move the same amount again, to 80% of travel, and the resistance has climbed to roughly 5.5 kΩ. Most of the range is crowded into the last part of the rotation.

That sounds awkward until you know why it exists. Human hearing responds logarithmically, so a log-taper volume pot feels like it changes loudness evenly across the whole rotation, whereas a linear pot would seem to do everything in the first quarter turn. Non-linear tracks are also used where a control needs fine adjustment at one end of its range and coarse adjustment at the other.

>! Never assume a control resistor is safe to touch because it is only a knob. In motor starters and heater controls the track may be sitting at supply potential and carrying significant current. Isolate, lock off and prove dead before you remove a knob or a faceplate.

## On the job

- If you can turn it from the panel it is a variable resistor; if it needs a screwdriver and a service manual it is an adjustable one.
- Two terminals in series with the load means it is doing a rheostat's job — controlling current.
- Three terminals across a supply with the output taken from the middle means it is a potentiometer — controlling voltage.
- A scratchy, jumpy reading as you rotate a pot means a worn or dirty track. Replace it rather than cleaning it if the circuit is a safety or setpoint function.
- Record the original setting of any trimpot before you move it. Half of all "the trimmer is faulty" calls are really "somebody wound it to the end".`,
          quiz: [
            {
              q: "A three-terminal component is wired with the supply across the outer two terminals and the output taken from the wiper. What is it doing?",
              options: [
                "Acting as a rheostat, controlling current in series with the load",
                "Acting as a potentiometer, dividing the supply voltage",
                "Acting as a fixed resistor because all three terminals are used",
                "Acting as an adjustable resistor for factory calibration only",
              ],
              answer: 1,
              explain: "Supply across the whole track with the output tapped off the wiper is the definition of a potentiometer — a voltage divider. It is tempting to call it a rheostat because it is variable, but a rheostat uses only two terminals and sits in series with the load to control current.",
            },
            {
              q: "A 0 to 10 kΩ linear potentiometer has its wiper set at 85% of travel. What resistance appears between the wiper and the starting end?",
              options: ["1.5 kΩ", "5 kΩ", "8.5 kΩ", "It cannot be calculated without a curve"],
              answer: 2,
              explain: "Linear means resistance is directly proportional to travel, so 0.85 × 10 kΩ = 8.5 kΩ. You would need a published curve only if the track were non-linear — on a non-linear track the same 85% might give a very different figure.",
            },
            {
              q: "Which statement best describes an adjustable (trimmer) resistor?",
              options: [
                "A resistor whose value drifts with temperature by design",
                "A resistor the appliance user turns from the front panel during normal operation",
                "A variable resistor intended to be set with a tool by a technician to calibrate a circuit",
                "A fixed resistor with its value printed rather than colour coded",
              ],
              answer: 2,
              explain: "Trimpots and pre-set resistors are adjusted once, with a screwdriver, to trim a circuit into calibration. A front-panel control the user operates is a variable resistor; a value that changes with temperature describes a thermistor.",
            },
            {
              q: "Why is a logarithmic (non-linear) track used for an audio volume control?",
              options: [
                "It dissipates less power than a linear track",
                "Human hearing responds logarithmically, so the change in loudness feels even across the rotation",
                "It is cheaper to manufacture than a linear track",
                "It prevents the wiper from going open circuit",
              ],
              answer: 1,
              explain: "The taper is matched to the ear, not to the electronics — a linear pot would seem to make all its change in the first part of the rotation. Power rating and wiper reliability are unrelated to the taper.",
            },
          ],
        },

        /* ------------------------------------------------------------- 2 */
        {
          id: "fixed-resistor-construction",
          title: "How fixed resistors are built, and where each type belongs",
          minutes: 11,
          simple: "Resistors are made in different ways for different jobs — a thin film of carbon on a ceramic rod for tiny circuit-board parts, wire wound on a former for the ones that get hot, and a big cast iron grid for controlling a crane motor. Bigger body almost always means more heat it can shed.",
          refs: REFS_CONSTRUCTION,
          content: `## Same value, very different components

Three resistors can all read 100 Ω on the meter and be completely different components: a speck on a circuit board, a cream cylinder with coloured bands, and a cement-filled block the size of your thumb. What separates them is how much heat they can throw away and how stable their value is. Knowing the construction tells you what a part is for and how it fails.

## The main fixed types

| Type | How it is made | Typical range | Notes for the trade |
|---|---|---|---|
| Wire-wound | Resistance wire wound on a ceramic former, coated or cemented | Fractions of an ohm to a few kΩ | 5 W to several hundred W; value and rating printed on the body; adds inductance |
| Carbon-composition | Rod of carbon and binder with end caps and leads | Ohms to megohms | Old but rugged; 1/4, 1/2, 1 and 2 W are the common ratings; drifts with age |
| Carbon-film | Carbon film on a ceramic tube, laser-spiralled to value | About 0.01 Ω to 10 MΩ | Cheap general-purpose part; brown or cream body |
| Metal-film | Metal film on a ceramic tube, spiral trimmed | Ohms to megohms | Tighter tolerance, low noise, stable; usually blue or green body |
| Metal-oxide film / metal glaze | Oxide or glaze layer fired onto ceramic | Ohms to megohms | Tolerates higher temperature and surge than carbon film |
| Foil | Etched metal foil bonded to a substrate | Precision values | Best stability and tolerance; instrumentation and standards |
| Chip / SMD | Thick or thin film printed on a tiny ceramic chip | Ohms to megohms | Soldered flat to the board; values printed, not banded |

### Wire-wound resistors

A length of resistance wire — nichrome, manganin or a similar alloy — is wound on a ceramic former, then insulated to protect the winding from damage and corrosion. Ratings from about five watts up to several hundred are normal. Because they run hot by design, big ones are built with plenty of surface area, and some come pressed into a finned aluminium heatsink that works exactly like a radiator. They are physically large enough for the value and wattage to be printed on the body, so no colour code is needed. Some are made with a tapping point, or with a shaft and knob so they can be set from a panel.

### Carbon-composition and film resistors

Carbon-composition resistors are the small cylinders in older equipment: a rod of carbon compound between two end caps. They are physically small and low-powered, commonly 1/4 W, 1/2 W, 1 W and 2 W.

Carbon-film construction improved on that. A resistive carbon layer is deposited on a ceramic tube, then a laser cuts a spiral groove through the film. Cutting the spiral makes the current path longer and narrower, so the manufacturer can trim each part to its exact value within tolerance. Varying the thickness and mix of the film gives a range from roughly 0.01 Ω up to 10 MΩ.

The weakness of carbon is ageing — the value drifts over years, which is unacceptable in a measuring circuit. That drove the metal-film resistor, made the same way but with a metal layer instead of carbon. Same size, same shape; often the only visual clue is the base colour. Carbon parts are usually brown or cream, metal-film parts blue or green.

Variable carbon resistors are made by painting a conductive track onto a non-conductive base and running a wiper across the paint. That track is the wear point — dust, moisture and wiper pressure eventually make the contact intermittent.

None of these small parts has room for printed text, which is exactly why the colour code exists. Notice also that the bands are always grouped nearer one end of the body: that is how you know which end to read from.

### Chip and surface-mount resistors

Modern boards use surface-mount devices soldered flat to the copper. Here the story came full circle: as parts shrank, thin coloured bands became harder to read than printed characters, so SMD resistors carry a printed numeric code instead. A part measuring 0.8 mm by 1.2 mm is far too small for bands. Chip resistors have very low power ratings — often 1/16 W to 1/4 W — and rely on the copper pads and board for heat sinking, so a lifted or dry joint changes both the resistance and the cooling.

## Heavy-current and specialised constructions

**Cast grid resistors** are large elements cast from iron or an iron alloy, cooled by forced air or by liquid flowing through a hollow core. They exist where very large currents must be controlled — starting and speed control for winding motors on lifts, cranes and traction motors.

**Co-axial sheathed elements** are the heating elements in stoves, fry pans and strip heaters. They are built in three layers: a nichrome resistance conductor at the centre, packed in ceramic insulating powder, all inside an earthed metal sheath. The earthed sheath is the safety feature — it puts a conductive, bonded barrier between a live element and the user. A stove element sheath runs at roughly 660 °C, which is hot enough to melt an aluminium saucepan left empty on the hotplate.

**Liquid resistors** are used in the rotor circuit of wound-rotor induction motor starters. Electrodes dip into a tank of resistive liquid; the tank surface sheds the heat by convection and conduction, so the tank is sized to suit the dissipation. A useful bonus is that the liquid's resistance falls as it heats up — a negative temperature coefficient — which suits starting duty, because the resistance is naturally highest at the moment of highest inrush and tapers off as the motor runs up.

**Non-inductive (bifilar) resistors** solve a problem you meet in switching and high-frequency circuits. A wire-wound resistor is physically a coil, so it behaves partly like an inductor and can upset a fast-switching circuit. The fix is to wind the wire back on itself: current travels out along one strand and back along the other, so the two magnetic fields cancel and the residual inductance is very small. That construction is called bifilar.

>! Sheathed elements and cast grid resistors operate at temperatures that will burn you badly and will ignite dust, timber or insulation. Allow real cooling time before touching, keep combustibles clear of resistor banks, and never defeat the earth on a sheathed element — the sheath is the fault-protection barrier.

## What to remember

- Physical size tracks power rating, not resistance value. Three 100 Ω resistors of different sizes are three different wattages.
- Carbon film is the cheap general-purpose part; metal film where stability and tolerance matter; wire-wound where heat must be dissipated.
- Wire-wound is inductive unless it is bifilar wound — that matters in electronic and switching circuits.
- Parts of 5 W and above carry printed markings; anything smaller is colour coded or SMD coded.
- A discoloured, cracked or blistered body means the resistor has been overloaded. Find out why before you just fit a replacement.`,
          quiz: [
            {
              q: "Why is the resistive film on a carbon-film or metal-film resistor cut into a spiral during manufacture?",
              options: [
                "To make the part flexible so the leads do not snap",
                "To lengthen and narrow the current path so the part can be trimmed to its exact value",
                "To cancel inductance in the same way as bifilar winding",
                "To let the coloured bands adhere to the ceramic",
              ],
              answer: 1,
              explain: "The laser-cut spiral increases the length and reduces the width of the conductive path, which raises resistance in a controlled way so each part lands inside its tolerance. Cancelling inductance is done by bifilar winding on wire-wound parts, not by spiralling a film.",
            },
            {
              q: "A three-layer element in a domestic stove consists of a nichrome conductor, ceramic powder, and an outer metal sheath. Why is the sheath earthed?",
              options: [
                "To improve heat transfer into the cooking vessel",
                "So the element resistance stays stable as it heats",
                "So a breakdown of the ceramic insulation causes a fault current that operates the protection instead of energising the sheath",
                "To stop the ceramic powder absorbing moisture",
              ],
              answer: 2,
              explain: "The earthed sheath is fault protection: if the ceramic insulation fails, current flows to earth and the protective device disconnects, rather than leaving an exposed conductive part live. Heat transfer happens regardless of whether the sheath is earthed.",
            },
            {
              q: "A designer needs a 10 Ω resistor in a fast switching circuit and is worried about stray inductance. Which construction is most appropriate?",
              options: [
                "A standard wire-wound resistor on a ceramic former",
                "A bifilar-wound non-inductive resistor",
                "A cast grid resistor",
                "A carbon-composition resistor rated at 1/4 W",
              ],
              answer: 1,
              explain: "Bifilar winding takes the wire out and back so the magnetic fields cancel, leaving an almost purely resistive part. An ordinary wire-wound resistor is effectively a coil; a cast grid resistor is a heavy-current device and a 1/4 W carbon part would likely be under-rated.",
            },
            {
              q: "Why do surface-mount resistors carry printed numeric codes rather than colour bands?",
              options: [
                "Because SMD resistors have no tolerance specification",
                "Because coloured bands cannot be applied to ceramic",
                "Because on a part as small as 0.8 mm by 1.2 mm very thin bands are harder to read than printed characters",
                "Because SMD parts are always 1% tolerance so no code is needed",
              ],
              answer: 2,
              explain: "The colour code was invented because tiny parts had no room for text, but once devices shrank to a millimetre or so the bands themselves became unreadable, and printed codes returned. SMD parts still have tolerances, and the code carries the value.",
            },
          ],
        },

        /* ------------------------------------------------------------- 3 */
        {
          id: "special-purpose-resistors",
          title: "Special-purpose resistors: thermistors, VDRs and LDRs",
          minutes: 12,
          simple: "Some resistors are built to change value on purpose — with heat, with light, or with voltage. That makes them sensors and protectors: a thermistor tells a control board how hot a motor winding is, an LDR turns a streetlight on at dusk, and a varistor swallows a lightning surge before it reaches the equipment.",
          refs: REFS_SPECIAL,
          content: `## Resistors that are meant to change

An ordinary resistor is called **ohmic**: apply more voltage and current rises in exact proportion, so a graph of voltage against current is a straight line and the resistance is constant. Plenty of components are **non-ohmic** — their resistance depends on something else entirely. A tungsten lamp filament, a photo-sensitive resistor, a voltage-dependent resistor and a temperature-sensitive resistor are all non-ohmic.

That is not a defect. When a resistor's value tracks a physical quantity, it becomes a **transducer** — a device that turns a physical condition into an electrical signal a control circuit can read. Most of the sensors on a modern air-conditioner, refrigeration controller or motor protection relay are exactly this.

## Thermistors

A thermistor is a resistor whose value changes markedly with small changes in temperature — the name is just "thermal" plus "resistor". They come in two flavours.

| Type | Resistance as temperature rises | Current through it as temperature rises | Symbol marking |
|---|---|---|---|
| NTC (negative temperature coefficient) | Falls | Rises | Rectangle with a sloped line marked −t° |
| PTC (positive temperature coefficient) | Rises | Falls | Rectangle with a sloped line marked +t° |

The behaviour is strongly non-linear. A representative NTC device might read around 10 kΩ at 10 °C and fall smoothly to a couple of kΩ by 80 °C — a curve that is normally plotted on a logarithmic scale because the change is so large. A PTC is more dramatic still: it can sit at only about 4 Ω at room temperature and then climb steeply once it passes roughly 50 °C. That sharp "knee" is what makes a PTC useful as a switch-like protection device rather than a measuring element.

That difference decides how each is used:

- **NTC** — temperature measurement and control. Suction line and coil sensors, oven and hair-dryer thermostats, appliance and computer temperature monitoring, 3D printer hot ends. Also used as inrush limiters: cold and high-resistance at switch-on, then warming down to a low resistance in normal running.
- **PTC** — protection. Embedded in motor windings so that when the winding overheats the thermistor resistance shoots up, the protection relay sees it and drops the contactor out. Also used as self-resetting overcurrent devices.

Because a PTC in a winding is a protection device, it is wired into the control circuit through a dedicated thermistor relay — never spliced into an unrelated circuit or bypassed to "get the plant running".

## Low temperature coefficient resistors

The opposite requirement also exists: sometimes a resistor must hold its value regardless of temperature. **Manganin** is the classic material, with a temperature coefficient of about 0.00001 per °C (1 × 10⁻⁵). That is so small compared with ordinary metals that some tables simply list it as zero. Manganin is used for shunts and precision resistors inside measuring instruments, where a value that drifted with the instrument's own warm-up would corrupt every reading. Advance is another alloy in the same family, with a coefficient of about 0.00002 per °C.

## Voltage-dependent resistors (VDRs / varistors)

A VDR changes its resistance according to the voltage applied to it. It is made from a mixture of materials — modern ones are sintered ceramic metal oxides, hence **metal-oxide varistor** or **MOV** — that give a very high resistance at normal voltages and a very low resistance once a critical voltage is exceeded. They are usually a flat disc with two leads.

How it is used:

1. It is connected **in parallel** with the supply, as close as practical to the equipment it protects.
2. At normal supply voltage it looks almost like an open circuit and draws negligible current.
3. When a surge — a lightning strike, a switching transient — pushes the voltage above the design threshold, the VDR's resistance collapses and it conducts the surge energy away from the protected equipment.
4. Its response is extremely fast, which it has to be: a surge is over in microseconds.

In some designs the VDR is intended to draw enough current to blow a fuse or trip a circuit-breaker, isolating the protected circuit. VDRs are also packaged into surge protectors fitted at the main switchboard or at the consumer's terminals.

>! A varistor is a consumable. Depending on the device and the severity of the surge, it may be degraded or destroyed by a single event, and a failed MOV can fail short and run hot enough to start a fire. After a lightning event or a known surge, treat surge diverters as suspect: check the status indicator and replace per the manufacturer's instructions rather than assuming they still protect anything.

## Light-dependent resistors (LDRs)

An LDR is a photoresistor: its resistance depends on the light falling on it. Construction is typically a cadmium-sulphide film on a ceramic or phenolic plate, covered by a conductive grid, and sealed inside an evacuated glass envelope or a clear plastic encapsulation to keep contamination off the active surface.

The change in value is enormous — in complete darkness an LDR can be as high as 10 MΩ, dropping to something like 100 Ω in full sunlight. That is five orders of magnitude, which is why the characteristic is drawn on a logarithmic axis.

The everyday application is the PE (photo-electric) cell on a power pole that switches streetlights and other night lighting. The LDR does not switch the load itself — it feeds an electronic circuit that senses the resistance change and operates a relay or solid-state switch. Anywhere a light level needs to control something, an LDR is a candidate: security lighting, display dimming, dusk-to-dawn controls.

## Other transducer resistors

The same idea extends to other physical quantities:

- **Magneto resistor** — resistance varies with magnetic field strength; used for position and speed sensing.
- **Humistor** — resistance varies with humidity; used in humidity sensing and control.
- **Force-sensitive resistor** — resistance varies with applied pressure or force; used in touch and load sensing.

## On the job

- Two wires from a motor terminal box that read a few hundred ohms cold and are not part of the winding are almost certainly a PTC thermistor chain. Do not link them out.
- Test a thermistor with the meter on ohms and a heat source: an NTC should fall smoothly as you warm it, a PTC should rise, and no change at all means an open sensor or a dead lead.
- A varistor that measures a low resistance across it has failed short — replace it and find out what surged.
- Check an LDR by covering it: megohms in the dark, hundreds of ohms in bright light. If it barely moves, it is dirty, fogged or dead.
- Manganin and Advance are the go-to alloys when a resistance must not drift with temperature — that is why they are inside your test instruments.`,
          quiz: [
            {
              q: "A motor's terminal box has two extra leads reading about 300 Ω cold, and the resistance climbs steeply when the motor is hot. What are they?",
              options: [
                "An NTC inrush limiter in the supply",
                "PTC thermistors embedded in the windings for over-temperature protection",
                "A voltage-dependent resistor across the supply",
                "The winding resistance of the auxiliary phase",
              ],
              answer: 1,
              explain: "Rising resistance with rising temperature is positive temperature coefficient behaviour, and PTC thermistors in the windings feeding a thermistor relay are standard motor protection. An NTC would fall as it heated, and a VDR responds to voltage, not heat.",
            },
            {
              q: "How is a metal-oxide varistor connected, and what does it do in normal operation?",
              options: [
                "In series with the load, dropping a fixed voltage continuously",
                "In parallel with the supply, conducting almost nothing until the voltage exceeds its threshold",
                "In series with earth, carrying the earth fault current",
                "In parallel with the load, drawing a steady bleed current to stabilise the supply",
              ],
              answer: 1,
              explain: "A VDR sits across the supply near the equipment it protects and is effectively an open circuit at normal voltage; only when a surge exceeds its threshold does its resistance collapse and divert the energy. Putting it in series would drop voltage continuously and burn it out.",
            },
            {
              q: "In complete darkness an LDR measures around 10 MΩ. What would you expect in bright sunlight?",
              options: ["About 100 Ω", "About 1 MΩ", "About 10 MΩ, LDRs change very little", "An open circuit"],
              answer: 0,
              explain: "LDR resistance falls dramatically with illumination — megohms in the dark down to roughly 100 Ω in sunlight. A device that barely changed would be faulty, fogged or contaminated.",
            },
            {
              q: "Why is manganin used for resistors inside measuring instruments?",
              options: [
                "It has a very high resistivity so instruments can be made small",
                "Its resistance changes sharply with temperature, giving a built-in thermometer",
                "Its temperature coefficient is about 0.00001 per °C, so its value barely drifts as the instrument warms up",
                "It is the cheapest resistance alloy available",
              ],
              answer: 2,
              explain: "Stability is the point: a coefficient of roughly 1 × 10⁻⁵ per °C is so small it is often listed as zero, so the reference resistance does not shift as the instrument heats. A material that changed sharply with temperature would corrupt every reading.",
            },
          ],
        },

        /* ------------------------------------------------------------- 4 */
        {
          id: "colour-code-and-preferred-values",
          title: "Reading the colour code and the preferred value series",
          minutes: 13,
          simple: "Small resistors are too tiny to print numbers on, so their value is written in coloured stripes. Two or three stripes give the digits, the next gives how many zeros to add, and the last gives how far out the maker allows it to be. Manufacturers only make a set list of values, so you pick the nearest one.",
          refs: REFS_CODE,
          content: `## Two ways a resistor tells you its value

Resistors of 5 W and up are big enough to have the value printed on the body, and there is a standard way of writing it. The ohm symbol is dropped in favour of a letter that doubles as the decimal point, so nobody can mistake a printed dot for a scratch:

| Printed on the body | Actual value |
|---|---|
| 100R | 100 Ω |
| 4R7 | 4.7 Ω |
| 33k | 33 kΩ |
| 6k8 | 6.8 kΩ |
| 1M | 1 MΩ |
| 1M2 | 1.2 MΩ |

R means ohms, k means kilohms, M means megohms, and the letter sits where the decimal point would go. You will see the same convention on drawings and parts lists, so learn to read it both ways.

Everything smaller is colour coded.

## The colour code

Each colour stands for a digit, and the same colours are reused as multipliers and tolerances.

| Colour | Digit | Multiplier | Tolerance |
|---|---|---|---|
| Black | 0 | × 1 | — |
| Brown | 1 | × 10 | ±1% |
| Red | 2 | × 100 | ±2% |
| Orange | 3 | × 1 000 | — |
| Yellow | 4 | × 10 000 | — |
| Green | 5 | × 100 000 | ±0.5% |
| Blue | 6 | × 1 000 000 | ±0.25% |
| Violet | 7 | × 10 000 000 | ±0.1% |
| Grey | 8 | — | — |
| White | 9 | — | — |
| Gold | — | × 0.1 | ±5% |
| Silver | — | × 0.01 | ±10% |
| No band | — | — | ±20% |

Band counts:

- **Four bands** — two digits, multiplier, tolerance.
- **Five bands** — three digits, multiplier, tolerance. Used for precision parts where two digits are not enough.
- **Six bands** — as five, plus a final band giving the temperature coefficient in parts per million per °C.

### Which end do you read from?

The bands are deliberately printed closer to one end during manufacture, so the grouped end is the start. Turn the resistor so the grouped bands are on your left and read left to right. If you read it backwards you get nonsense — reading red-violet-yellow-gold from the wrong end gives gold as a first digit, which does not exist, so you know to turn it round.

## Worked example 1 — bands to value

A resistor has four bands: **red, violet, yellow, gold**.

1. First band red = 2 (first digit)
2. Second band violet = 7 (second digit) → so far the value is 27
3. Third band yellow = multiplier × 10 000, that is four zeros
4. R = 27 × 10 000 = 270 000 Ω = **270 kΩ**
5. Fourth band gold = ±5% tolerance

Tolerance in ohms = 270 000 × 0.05 = 13 500 Ω = 13.5 kΩ

So an acceptable part measures anywhere between:

- Minimum: 270 − 13.5 = **256.5 kΩ**
- Maximum: 270 + 13.5 = **283.5 kΩ**

A meter reading of 265 kΩ on this resistor is not a fault. A reading of 300 kΩ is.

## Worked example 2 — a small value using a gold multiplier

Bands: **brown, black, gold, silver**.

1. Brown = 1, black = 0 → digits give 10
2. Gold in the third position is a multiplier of × 0.1
3. R = 10 × 0.1 = **1.0 Ω**
4. Silver in the fourth position is ±10% tolerance, so 0.9 Ω to 1.1 Ω

Gold and silver are mostly tolerance colours, but below 10 Ω they do duty as fractional multipliers — 0.1 and 0.01 respectively. Position tells you which job the colour is doing.

## Worked example 3 — five bands

Bands: **yellow, violet, black, brown, brown**.

1. Yellow = 4, violet = 7, black = 0 → digits give 470
2. Fourth band brown = multiplier × 10
3. R = 470 × 10 = 4 700 Ω = **4.7 kΩ**
4. Fifth band brown = ±1%, so 4 653 Ω to 4 747 Ω

## Worked example 4 — value to bands (the reverse direction)

You need to mark up **2.7 MΩ ±5%**, four bands.

1. Write the value in ohms: 2 700 000 Ω
2. Take the first two significant digits: 2 and 7 → red, violet
3. Count what is left after those digits: 2.7 MΩ = 27 × 100 000, so the multiplier is × 100 000 = green
4. ±5% = gold

Answer: **red, violet, green, gold**.

Two more for practice, worked the same way:

- **68 Ω ±10%** → 68 = 68 × 1, so blue (6), grey (8), black (× 1), silver (±10%)
- **33 kΩ ±1%, five band** → 33 000 = 330 × 100, so orange (3), orange (3), black (0), red (× 100), brown (±1%)

## Chip and SMD codes

Surface-mount resistors carry printed numbers instead:

- **Three digits** — two digits plus a multiplier count of zeros. "472" = 47 followed by two zeros = 4 700 Ω = 4.7 kΩ.
- **Four digits** — three digits plus a zero count, used for 1% parts. "4701" = 470 followed by one zero = 4 700 Ω = 4.7 kΩ.
- **R notation** — the same letter-as-decimal-point trick: "4R7" = 4.7 Ω, "R47" = 0.47 Ω.
- **EIA-96** — very small 1% parts use a two-digit code plus a letter, where the digits look up a value in a table and the letter is the multiplier. You need the table; do not guess.

## Preferred values — the E series

No manufacturer can make every possible value, so a standard set of **preferred values** is produced, spaced so that the tolerance bands of neighbouring values just about touch. Work through the logic on the ±10% scale:

- A 10 Ω ±10% part covers 9 Ω to 11 Ω.
- Step up by about twice the tolerance: 10 + 2 = 12 Ω. A 12 Ω ±10% part covers 10.8 Ω to 13.2 Ω, so it almost touches the top of the 10 Ω part.
- 12 Ω tolerance is 1.2 Ω, and 12 + 2.4 = 14.4, so the next value is 15 Ω, covering 13.5 Ω to 16.5 Ω.
- 15 Ω tolerance is 1.5 Ω, and 15 + 3 = 18 Ω, and so on.

Twelve values chosen that way cover the whole decade from 10 to 100 with almost no gaps — that is the **E12** series. The pattern then repeats in every decade: 100 to 1 000, 1 000 to 10 000, and so on.

| Series | Values per decade | Matching tolerance | The values (first decade) |
|---|---|---|---|
| E6 | 6 | ±20% | 10, 15, 22, 33, 47, 68 |
| E12 | 12 | ±10% | 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 |
| E24 | 24 | ±5% | 10, 11, 12, 13, 15, 16, 18, 20, 22, 24, 27, 30, 33, 36, 39, 43, 47, 51, 56, 62, 68, 75, 82, 91 |
| E48 | 48 | ±2% | Three-digit values, e.g. 100, 105, 110, 115 … |
| E96 | 96 | ±1% | Three-digit values, e.g. 100, 102, 105, 107 … |

The tighter the tolerance, the more values are needed to cover the decade without gaps — that is the whole idea behind the series.

The practical consequence: your calculation will rarely land exactly on a stock value. If you calculate 137 Ω, the nearest E24 values are 130 Ω and 150 Ω; if the circuit needs it closer than that, you go to an E96 part, or you fit the nearest preferred value and trim the difference with an adjustable resistor such as a trimpot.

## What to remember

- Grouped bands go on the left; digits, then multiplier, then tolerance.
- Gold and silver mean ±5% and ±10% in the tolerance position, but × 0.1 and × 0.01 in the multiplier position.
- Tolerance is not a fault. Work out the allowed band before you condemn a part.
- Printed codes use the letter as the decimal point: 4R7, 6k8, 1M2.
- Preferred values exist so that neighbouring parts overlap within tolerance — pick the nearest one and trim if you must.`,
          quiz: [
            {
              q: "A four-band resistor reads red, violet, yellow, gold. Your meter shows 262 kΩ. What is the correct conclusion?",
              options: [
                "The resistor is 270 kΩ ±5% and 262 kΩ is inside the allowed 256.5 to 283.5 kΩ band — it is serviceable",
                "The resistor is 27 kΩ and has failed high",
                "The resistor is 270 kΩ ±10% and is out of tolerance",
                "The resistor is 2.7 MΩ and has failed low",
              ],
              answer: 0,
              explain: "Red-violet gives 27, yellow multiplies by 10 000 for 270 kΩ, and gold is ±5%, which is ±13.5 kΩ — a range of 256.5 to 283.5 kΩ. Condemning a part that is inside its published tolerance is the classic mistake.",
            },
            {
              q: "What colour bands mark a 2.7 MΩ ±5% resistor with four bands?",
              options: [
                "Red, violet, blue, gold",
                "Red, violet, green, gold",
                "Red, violet, green, silver",
                "Orange, violet, green, gold",
              ],
              answer: 1,
              explain: "2 700 000 Ω is 27 × 100 000, so the digits are red (2) and violet (7) and the multiplier is green (× 100 000), with gold for ±5%. Blue would multiply by a million and give 27 MΩ; silver would mean ±10%.",
            },
            {
              q: "On a four-band resistor the third band is gold. What does it mean?",
              options: [
                "A tolerance of ±5%",
                "A multiplier of × 0.1, so the resistor is below 10 Ω",
                "The resistor is a precision metal-film type",
                "The band should be ignored and the fourth band read as the multiplier",
              ],
              answer: 1,
              explain: "Position decides the meaning: in the multiplier position gold means × 0.1 and silver × 0.01, which is how values below 10 Ω are coded. Gold means ±5% only when it appears in the tolerance position.",
            },
            {
              q: "A calculation calls for 137 Ω. Why is that value not on the shelf in an E24 range, and what do you do?",
              options: [
                "E24 has only twelve values per decade, so use 100 Ω and accept the error",
                "E24 spacing suits ±5% parts and offers 130 Ω and 150 Ω nearby — fit the nearest preferred value, or use an E96 part or a trimpot if it must be exact",
                "137 Ω cannot be colour coded, so it is never manufactured",
                "Preferred values only exist above 1 kΩ, so any value below that must be special ordered",
              ],
              answer: 1,
              explain: "Preferred value series are spaced so that neighbouring values overlap within their tolerance, so E24 jumps 130, 150. The fix is the nearest preferred value, a tighter series such as E96, or a trimmer to make up the difference.",
            },
            {
              q: "A wire-wound resistor is printed 6k8. What is its value?",
              options: ["6.8 Ω", "68 Ω", "6.8 kΩ", "68 kΩ"],
              answer: 2,
              explain: "The multiplier letter is written where the decimal point would go, so 6k8 means 6.8 kΩ. The convention exists so a printed decimal point cannot be mistaken for a scratch on the body — the same reason 4.7 Ω is printed 4R7.",
            },
          ],
        },

        /* ------------------------------------------------------------- 5 */
        {
          id: "power-rating-and-specifying",
          title: "Power rating, derating and specifying a resistor",
          minutes: 12,
          simple: "Every resistor turns some electricity into heat, and there is a limit to how much heat it can get rid of before it cooks. Working out the watts and then choosing a part with plenty of headroom is what stops a repair from turning brown and smelly six months later.",
          refs: REFS_POWER,
          content: `## Heat is the limit, not volts

Every component in a circuit can only shed so much heat, and that limit is stated as a power figure in watts — the **power rating**. Exceed it and the component fails, usually by going open circuit after a period of running discoloured and hot.

For a resistor whose job is limiting current or producing a voltage drop, the power rating is the maximum it can dissipate **continuously** without damage. For a resistor whose job is producing heat or light — an element, a lamp — the rating is the output you get when rated voltage and the resulting current are applied.

The tell-tale is physical size. Three resistors can all be 100 Ω and yet be visibly different sizes; the difference is the wattage, because a bigger body has more surface area to move heat into the surrounding air.

The three power formulae you already know all apply:

- P = I² × R — use it when you know the current through the resistor
- P = V² / R — use it when you know the voltage across it
- P = V × I — use it when you know both

## Worked example 1 — the power a resistor must dissipate

A 100 Ω resistor is required to carry 100 mA. What power rating is needed?

1. P = I² R
2. P = (0.1)² × 100
3. P = 0.01 × 100
4. P = **1 W**

That is the power it will actually dissipate. It is not the part you fit — see derating below.

## Worked example 2 — sizing a current-limiting resistor

A device with negligible resistance of its own must be fed 100 mA from a 12 V supply. What resistor is needed, and what will it dissipate?

1. R = V / I = 12 / 0.1 = **120 Ω** (which is conveniently an E12 preferred value)
2. P = V × I = 12 × 0.1 = **1.2 W**
3. Check with the other formula: P = I² R = (0.1)² × 120 = 0.01 × 120 = 1.2 W — agrees

So the specification is 120 Ω, and a part rated well above 1.2 W.

## Worked example 3 — a real selection, tolerance included

An LED indicator dropping 2.1 V at 20 mA is to run from a 24 V d.c. control supply.

1. Volts the resistor must drop: V = 24 − 2.1 = 21.9 V
2. R = V / I = 21.9 / 0.02 = **1 095 Ω**
3. Nearest E24 preferred value: **1.1 kΩ**
4. P = I² R = (0.02)² × 1 100 = 0.0004 × 1 100 = **0.44 W**
5. Choose a 1 W part, giving better than 2:1 headroom

Now check what the tolerance does. A 1.1 kΩ ±5% part is between 1 045 Ω and 1 155 Ω:

- At 1 045 Ω: I = 21.9 / 1 045 = 0.0210 A = **21.0 mA**
- At 1 155 Ω: I = 21.9 / 1 155 = 0.0190 A = **19.0 mA**

Both are comfortably within what an indicator LED will accept, so a ±5% part is fine here. If the circuit were a precision reference instead, that ±1 mA swing might not be acceptable, and you would specify ±1%.

## Derating — why you never fit a 1 W part in a 1 W job

A resistor's rating is quoted at a stated ambient temperature, typically 25 °C or 70 °C, in free air. In a real enclosure — a switchboard cavity, a sealed control box, a plant room in a Queensland summer — the surrounding air is much hotter and the part cannot shed heat as fast.

Two rules of thumb keep you out of trouble:

1. **Fit at least twice the calculated wattage.** A resistor working at 1 W belongs in a 2 W package. This is the single most common lesson learned the expensive way.
2. **Apply the manufacturer's derating curve above the stated ambient.** A typical film resistor is rated at full power to 70 °C and derates linearly to zero at 155 °C.

### Worked example 4 — derating for ambient temperature

A 2 W resistor with full rating to 70 °C and zero at 155 °C is mounted where the ambient reaches 100 °C. What can it actually dissipate?

1. Derating factor = (155 − 100) / (155 − 70)
2. = 55 / 85
3. = 0.647
4. Usable power = 2 × 0.647 = **1.29 W**

So a nominal 2 W part is really a 1.3 W part in that location. If your calculated dissipation were 1.2 W you would have almost no margin left, and you should go up a size or improve the ventilation.

Other things that eat into the rating: mounting the part flat against a board or another component, stacking resistors together in a bank, and pulse loading — a part may take short pulses well above its continuous rating, but only within the published pulse curve.

## Specifying a resistor: the full order

Start from the purpose. The circuit function decides the type first:

| Job to be done | Type to specify |
|---|---|
| Set a current or divide a voltage | Fixed film resistor |
| Operator adjustment of voltage or current | Potentiometer or rheostat |
| One-off calibration by a technician | Trimpot or pre-set |
| Sense temperature | NTC thermistor |
| Protect a winding from over-temperature | PTC thermistor |
| Sense light level | LDR |
| Divert a voltage surge | VDR / MOV |
| Dissipate serious heat | Wire-wound, cast grid, or a liquid resistor for motor starting |

Once the type is settled, three values are quoted whenever a resistor is ordered:

1. **Resistance value** in ohms, from the circuit calculation.
2. **Tolerance**, chosen from how much the current or voltage is allowed to vary — and remember that tolerance drives which E series the value must come from.
3. **Power rating**, from the dissipation calculation with derating applied.

For anything but a general-purpose part you will also state the construction (metal film, wire-wound), the temperature coefficient if stability matters, and the mounting style (axial leads, chassis mount, SMD package).

>! An under-rated resistor does not simply stop working. It runs at a temperature that scorches boards and terminal blocks, degrades adjacent insulation, and can start a fire inside a sealed enclosure. If a replacement resistor is discoloured on arrival at a repeat fault, the original was never the problem — the sizing was.

## On the job

- Calculate the watts, then buy at least double.
- Physical size is your quickest clue to wattage; never fit a physically smaller part just because the ohms match.
- Check the tolerance effect on the circuit current before choosing a cheap ±10% part.
- In hot enclosures apply the derating curve — nameplate watts are not the watts you get.
- Order by three numbers: ohms, tolerance, watts.`,
          quiz: [
            {
              q: "A 100 Ω resistor must carry 100 mA continuously. What is the dissipation, and what part would you fit?",
              options: [
                "0.1 W dissipation, fit a 1/4 W part",
                "1 W dissipation, fit a 2 W part for headroom",
                "10 W dissipation, fit a 10 W wire-wound part",
                "1 W dissipation, fit a 1 W part because that is exactly the rating required",
              ],
              answer: 1,
              explain: "P = I²R = 0.1² × 100 = 1 W. Fitting a part rated at exactly the calculated dissipation leaves no margin for ambient temperature or poor ventilation, so the trade practice is at least double the calculated wattage.",
            },
            {
              q: "A 2 W resistor is rated at full power to 70 °C and derates linearly to zero at 155 °C. What can it dissipate in a 100 °C enclosure?",
              options: ["2 W, ratings are absolute", "1.29 W", "0.65 W", "0.35 W"],
              answer: 1,
              explain: "The derating factor is (155 − 100) / (155 − 70) = 55/85 = 0.647, so 2 × 0.647 = 1.29 W. Assuming the nameplate figure holds at any ambient is exactly how resistors get cooked inside hot switchboards.",
            },
            {
              q: "A 12 V supply must deliver 100 mA to a load of negligible resistance. What series resistor is needed and what will it dissipate?",
              options: ["1.2 Ω dissipating 12 W", "120 Ω dissipating 1.2 W", "120 Ω dissipating 12 W", "1.2 kΩ dissipating 0.12 W"],
              answer: 1,
              explain: "R = V/I = 12/0.1 = 120 Ω, and P = VI = 12 × 0.1 = 1.2 W (I²R gives the same: 0.01 × 120). Getting the decimal place wrong on 100 mA is the usual source of the 1.2 Ω answer.",
            },
            {
              q: "Which three values are always quoted when a resistor is ordered?",
              options: [
                "Resistance, voltage rating and physical length",
                "Resistance, tolerance and power rating",
                "Resistance, colour code and manufacturer",
                "Resistance, temperature coefficient and lead diameter",
              ],
              answer: 1,
              explain: "Ohms, tolerance and watts are the minimum specification — the value from the circuit calculation, the tolerance the circuit can live with, and the dissipation after derating. Construction and temperature coefficient are added only when stability or the environment demands it.",
            },
          ],
        },

        /* ------------------------------------------------------------- 6 */
        {
          id: "factors-affecting-resistance",
          title: "The four factors that set a conductor's resistance",
          minutes: 13,
          simple: "Four things decide how much a wire fights the current: how long it is, how fat it is, what it is made of, and how hot it is. Longer is worse, fatter is better, copper beats steel, and heat usually makes it worse still.",
          refs: REFS_FACTORS,
          content: `## Everything in the circuit has resistance

The supply, the conductors and the load all resist current. Even the chemistry inside a battery has resistance that shifts with temperature, state of charge and dissolved gas. To predict how a circuit will behave, you need to know what actually sets the resistance of a piece of material. There are four factors, and only four:

1. Length
2. Cross-sectional area
3. Type of material (resistivity)
4. Temperature

The first three are covered here; temperature has its own lesson because it comes with its own calculations.

## Length

Resistance comes from collisions between the drifting electrons and the atoms of the conductor. Think of driving down a road: the further you travel, the more chances there are of a collision, and twice the distance means twice the risk. Resistance is therefore directly proportional to length:

R ∝ l

You can prove it on a 100 m roll of 1 mm² cable with nothing but a meter:

- Measure the active conductor end to end: about 1.7 Ω.
- Measure the neutral conductor the same way: about 1.7 Ω again.
- Now link active and neutral together at the far end of the roll and measure the pair from the near end. You have made one 200 m conductor, and the meter reads about 3.4 Ω — double.

That is also why a "1 m of cable" is 2 m of conductor when you are estimating volt drop: the current goes down the active and comes back along the neutral.

## Cross-sectional area

The CSA is the area of the cut face if you slice the conductor at 90°. It is what the cable label means by "1 mm²" — an area, not a diameter. Double the CSA and there is twice as much room for electrons to move, so resistance halves. Resistance is inversely proportional to area:

R ∝ 1 / A

Back to the roll of cable: connect the active and neutral in parallel at both ends and you have effectively made a 100 m conductor of 2 mm² instead of 1 mm². The reading drops to about 0.85 Ω, half of what one conductor read.

For a round conductor you get CSA from the diameter with A = π d² / 4. Take care with the units — there are 1 000 × 1 000 square millimetres in a square metre, so 1 mm² = 1 × 10⁻⁶ m².

## Resistivity — the material itself

Every material has a characteristic resistance called **resistivity**, given the Greek letter rho (ρ). It is defined as the resistance measured between opposite faces of a one-metre cube of the material at a stated temperature, usually 20 °C, and its unit is the ohm-metre (Ωm). Nobody actually machines a cubic metre of copper; a sample such as 100 m of 1 mm² wire is measured and the resistivity is calculated from it.

Resistance is directly proportional to resistivity: R ∝ ρ. Putting all three factors together gives the formula you will use constantly:

**R = ρ l / A**

where R is in ohms, ρ in ohm-metres, l in metres and A in square metres.

| Material | Resistivity at 20 °C (Ωm) | Use |
|---|---|---|
| Silver | 1.63 × 10⁻⁸ | Best conductor, too expensive for general wiring |
| Copper (annealed) | 1.72 × 10⁻⁸ | The standard conductor material |
| Gold | 2.44 × 10⁻⁸ | Plating on connectors, corrosion resistance |
| Aluminium | 2.83 × 10⁻⁸ | Overhead lines and large mains, light and cheap |
| Platinum | 10.09 × 10⁻⁸ | RTD temperature sensors |
| Lead | 20.4 × 10⁻⁸ | Sheathing, batteries |
| German silver | 33 × 10⁻⁸ | Resistance wire |
| Manganin | 48 × 10⁻⁸ | Precision resistance wire, very stable |
| Advance | 49 × 10⁻⁸ | Resistance wire |
| Nichrome | 112 × 10⁻⁸ | Heating elements |

Two things to notice. Silver is the best conductor, but copper is a close second and far cheaper, which is why copper is used everywhere. And the four alloys at the bottom have resistivities tens of times higher than the pure metals — they are chosen precisely because they oppose current, which is what makes them resistance and element wire.

Resistivity also depends on the condition of the material. Annealed copper — softened by heating so it bends easily — has a slightly higher resistivity than hard-drawn copper. Purity matters too, along with any gas trapped in the metal during casting; that is the (much over-sold) argument behind oxygen-free speaker cable.

## Worked example 1 — resistance of a cable run

Find the resistance of 500 m of copper cable of 2.5 mm² CSA. Take ρ for copper as 1.72 × 10⁻⁸ Ωm.

First convert the area: 2.5 mm² = 2.5 × 10⁻⁶ m².

1. R = ρ l / A
2. R = (1.72 × 10⁻⁸ × 500) / (2.5 × 10⁻⁶)
3. Numerator: 1.72 × 10⁻⁸ × 500 = 8.6 × 10⁻⁶
4. R = 8.6 × 10⁻⁶ / 2.5 × 10⁻⁶
5. R = **3.44 Ω**

## Worked example 2 — how much wire to make a resistor

You need to wind a 15 Ω resistor from manganin wire of 0.2 mm diameter. What length is required? Take ρ for manganin as 48 × 10⁻⁸ Ωm.

First find the CSA from the diameter:

1. A = π d² / 4
2. A = π × (0.2 × 10⁻³)² / 4
3. A = π × (4 × 10⁻⁸) / 4
4. A = 3.14 × 10⁻⁸ m² (that is 0.0314 mm²)

Now transpose R = ρ l / A to make length the subject: l = R A / ρ

5. l = (15 × 3.14 × 10⁻⁸) / (48 × 10⁻⁸)
6. Numerator: 15 × 3.14 × 10⁻⁸ = 4.71 × 10⁻⁷
7. l = 4.71 × 10⁻⁷ / 4.8 × 10⁻⁷
8. l = **0.981 m, or 981 mm**

## Worked example 3 — the roll on the van

What is the resistance of one conductor in a full 100 m roll of 2.5 mm² copper?

1. R = ρ l / A = (1.72 × 10⁻⁸ × 100) / (2.5 × 10⁻⁶)
2. = 1.72 × 10⁻⁶ / 2.5 × 10⁻⁶
3. = **0.688 Ω**

And the reverse question: how much cable is left on that roll if the conductor now measures 0.1032 Ω?

4. l = R A / ρ = (0.1032 × 2.5 × 10⁻⁶) / (1.72 × 10⁻⁸)
5. = 2.58 × 10⁻⁷ / 1.72 × 10⁻⁸
6. = **15 m**

That is a genuinely useful trick — a resistance measurement tells you how much cable is on a part-used drum without unrolling it.

## Superconductors

Cool many materials far enough and resistance does not just fall, it disappears. Below a critical temperature — for lead, around −256.8 °C — electrons pass through the material with effectively zero resistance. Various pure metals and special alloys each have their own critical temperature.

The consequences are remarkable. Once current is started in a superconducting loop it keeps circulating with no applied voltage, because nothing is dissipating it. With no resistance there is no heating, so current can be pushed far beyond normal values — although not without limit, since above a certain current the superconductivity collapses. The circulating current creates a magnetic field that opposes any applied field, which allows extraordinarily powerful electromagnets.

Three applications you will hear about:

- **Magnetic levitation trains** — superconducting magnets cooled by liquid nitrogen float the train above the track, so there is no rolling friction and the train runs faster and more quietly.
- **Magnetic resonance imaging (MRI)** — powerful superconducting magnets excite atoms in the body, which emit radio-frequency signals used to build images in far more detail than X-rays.
- **Particle accelerators** — very strong magnets steer and accelerate subatomic particles for physics research.

Research into higher-temperature superconductors continues, but for now they still need chilling to well below the temperature at which most gases liquefy.

## What to remember

- R = ρ l / A. Length up, resistance up; area up, resistance down.
- Convert mm² to m² by multiplying by 10⁻⁶ before you substitute, every time.
- 1 m of two-core cable is 2 m of conductor for volt-drop purposes.
- Copper is the practical conductor; nichrome, manganin, Advance and German silver are chosen for the opposite reason.
- Transposed, l = R A / ρ tells you the length of wire needed for a given resistance — or how much is left on the drum.`,
          quiz: [
            {
              q: "What is the resistance of 500 m of 2.5 mm² copper cable, taking ρ = 1.72 × 10⁻⁸ Ωm?",
              options: ["0.344 Ω", "3.44 Ω", "34.4 Ω", "8.6 Ω"],
              answer: 1,
              explain: "R = ρl/A = (1.72 × 10⁻⁸ × 500) / (2.5 × 10⁻⁶) = 8.6 × 10⁻⁶ / 2.5 × 10⁻⁶ = 3.44 Ω. The factor-of-ten errors nearly always come from forgetting that 2.5 mm² is 2.5 × 10⁻⁶ m², not 2.5 × 10⁻³.",
            },
            {
              q: "You measure 1.7 Ω across the active of a 100 m roll of 1 mm² cable. You then join active and neutral at the far end and measure from the near end. What do you expect?",
              options: [
                "About 0.85 Ω, because the two conductors are now in parallel",
                "About 1.7 Ω, because the cable length has not changed",
                "About 3.4 Ω, because you have made a single 200 m conductor",
                "Zero ohms, because you have shorted the cable",
              ],
              answer: 2,
              explain: "Joining them at the far end puts the two conductors in series, giving 200 m of conductor and double the resistance. You would get about 0.85 Ω only if you joined them at both ends, which parallels them and effectively doubles the CSA.",
            },
            {
              q: "How much manganin wire of 0.0314 mm² CSA is needed to make a 15 Ω resistor, with ρ = 48 × 10⁻⁸ Ωm?",
              options: ["98 mm", "981 mm", "9.81 m", "0.0981 m"],
              answer: 1,
              explain: "Transposing gives l = RA/ρ = (15 × 3.14 × 10⁻⁸) / (48 × 10⁻⁸) = 4.71 × 10⁻⁷ / 4.8 × 10⁻⁷ = 0.981 m, that is 981 mm. Note the CSA had to come from A = πd²/4 first — the 0.2 mm figure is a diameter, not an area.",
            },
            {
              q: "Nichrome has a resistivity of 112 × 10⁻⁸ Ωm against copper's 1.72 × 10⁻⁸ Ωm. Why is that useful?",
              options: [
                "It makes nichrome a better conductor for long cable runs",
                "The high resistivity means a short, manageable length produces a lot of resistance and therefore heat — ideal for elements",
                "It means nichrome does not change resistance with temperature",
                "It allows nichrome to be used as a superconductor at room temperature",
              ],
              answer: 1,
              explain: "High resistivity is exactly what you want in a heating element: a practical length of wire gives high resistance and dissipates substantial heat. Higher resistivity makes it a worse conductor, not a better one, so it would be useless for a cable run.",
            },
            {
              q: "Which statement about superconductors is correct?",
              options: [
                "Once cooled below the critical temperature they can carry unlimited current",
                "Current started in a superconducting loop continues without any applied voltage, but above a certain current the superconductivity is destroyed",
                "They work at room temperature in commercially available cable today",
                "They have very low but measurable resistance, typically a few microhms",
              ],
              answer: 1,
              explain: "With no resistance there is nothing to dissipate the current, so it persists without an applied potential — but exceeding a critical current level collapses the effect. Practical superconductors still need cooling to temperatures below where most gases liquefy.",
            },
          ],
        },

        /* ------------------------------------------------------------- 7 */
        {
          id: "temperature-and-resistance",
          title: "Temperature and resistance, and finding a winding's temperature",
          minutes: 13,
          simple: "Metals get harder to push current through as they heat up. That is a nuisance for cable calculations, but it is also a gift: by measuring how much a motor winding's resistance has risen, you can work out how hot the inside of the motor got without taking it apart.",
          refs: REFS_TEMP,
          content: `## The fourth factor

Every resistance figure you look up is quoted at a stated temperature, normally 20 °C. Away from that temperature the value changes, and in trade work the change is big enough to matter — a hot cable run has noticeably more resistance than the same run cold, which means more volt drop and more loss.

Materials fall into two groups:

- **Positive temperature coefficient (PTC)** — resistance rises as temperature rises. Nearly all metallic conductors, including copper and aluminium, behave this way.
- **Negative temperature coefficient (NTC)** — resistance falls as temperature rises. Carbon, semiconductors, electrolytes and the liquid in a motor-starter resistance tank behave this way.

**Temperature coefficient of resistance**, symbol alpha (α), tells you how much each ohm of resistance changes for every degree Celsius of temperature change (a degree Celsius and a degree Kelvin being the same size).

There are two ways of calculating a resistance at a new temperature. Both are in daily use, and they agree with each other.

## Method 1 — the inferred zero method

For metals, resistance plots as a near-straight line against temperature over the working range. Extend that straight line backwards and it crosses zero resistance at a temperature well below zero — the **inferred zero**. For copper, the inferred zero is **−234.5 °C**. Different metals have different inferred zeros.

Because the line is straight, resistance is proportional to the temperature measured from the inferred zero rather than from 0 °C. That gives a simple ratio:

**R₂ = R₁ × (234.5 + t₂) / (234.5 + t₁)**

where R₁ is the resistance at temperature t₁ and R₂ the resistance at t₂, both in °C. The 234.5 is the copper figure; substitute the correct inferred zero for other metals.

### Worked example 1 — a coil warming up

A copper coil measures 34 Ω at 15 °C. What is its resistance at 70 °C?

1. R₂ = R₁ × (234.5 + t₂) / (234.5 + t₁)
2. R₂ = 34 × (234.5 + 70) / (234.5 + 15)
3. R₂ = 34 × 304.5 / 249.5
4. R₂ = 34 × 1.2204
5. R₂ = **41.49 Ω**

A 55 degree rise added over 20% to the resistance. That is why a motor that draws its nameplate current cold can behave differently once it is hot.

## Method 2 — the temperature coefficient

The same job can be done from tabulated coefficients. The new resistance is the old resistance plus the change, and the change is the coefficient times the temperature rise times the original resistance:

**R₂ = R₁ [1 + α (t₂ − t₁)]**

The coefficient itself changes slightly with temperature, so tables state the temperature it applies at, written as a subscript: α₀ is the coefficient referred to 0 °C and α₂₀ the coefficient referred to 20 °C. Use the one that matches your starting temperature.

| Material | α at 0 °C (/°C) | α at 20 °C (/°C) |
|---|---|---|
| Aluminium | 0.00423 | 0.0039 |
| Copper | 0.00427 | 0.00393 |
| Gold | 0.00368 | 0.00343 |
| Lead | 0.00411 | 0.0039 |
| Platinum | 0.00367 | 0.0039 |
| Silver | 0.004 | 0.004 |
| Zinc | 0.00402 | 0.004 |
| German silver | 0.0004 | 0.0004 |
| Nichrome | 0.0002 | 0.0002 |
| Advance | 0.00002 | 0.00002 |
| Manganin | 0.00001 | 0.00001 |

Look at the bottom of that table. Manganin's coefficient is roughly four hundred times smaller than copper's — that is why it goes inside instruments, and why the resistance wire in a precision shunt is not copper.

### Worked example 2 — a cable run in a hot ceiling

A 2.5 mm² copper conductor measures 0.241 Ω at an ambient of 20 °C. What is its resistance at 75 °C? Use α₂₀ for copper, 0.00393.

1. R₂ = R₁ [1 + α (t₂ − t₁)]
2. R₂ = 0.241 × [1 + 0.00393 × (75 − 20)]
3. R₂ = 0.241 × [1 + 0.00393 × 55]
4. R₂ = 0.241 × [1 + 0.21615]
5. R₂ = 0.241 × 1.21615
6. R₂ = **0.293 Ω**

Do the bracket first, every time — that is where marks and answers get lost.

Cross-check it with the inferred zero method: 0.241 × (234.5 + 75) / (234.5 + 20) = 0.241 × 309.5 / 254.5 = 0.241 × 1.2161 = 0.293 Ω. The two methods agree, which is a useful way of proving your own arithmetic.

The practical point: that conductor's resistance rose by more than 21% in a roof space on a hot day. Volt drop and copper loss rise with it, which is exactly why cable selection to AS/NZS 3008 uses conductor resistance at operating temperature, not at 20 °C.

## Finding the temperature of a motor winding

Here is where this stops being an exercise and becomes a technique. You want to know how hot a motor's windings get at full load. Measuring directly would mean pulling the motor apart to bury a probe in the winding. Instead, use the copper itself as the thermometer:

1. With the motor cold and isolated, measure the winding resistance and record the ambient temperature.
2. Run the motor at full load until temperatures stabilise.
3. Shut down, isolate, and immediately measure the winding resistance again — speed matters, because it starts cooling the moment it stops.
4. Calculate the hot temperature from the resistance ratio.

### Worked example 3 — winding temperature

A motor at 20 °C has a winding resistance of 16 Ω. After running at full load the resistance measures 24.8 Ω. What is the winding temperature?

Start from the inferred zero relationship and transpose for t₂:

1. R₂ = R₁ × (234.5 + t₂) / (234.5 + t₁)
2. Transposing: t₂ = (R₂ / R₁) × (234.5 + t₁) − 234.5
3. t₂ = (24.8 / 16) × (234.5 + 20) − 234.5
4. t₂ = 1.55 × 254.5 − 234.5
5. t₂ = 394.5 − 234.5
6. t₂ = **160 °C**

That result matters. Insulation classes have temperature limits — Class B is commonly rated to 130 °C and Class F to 155 °C — so a winding at 160 °C is being cooked and its insulation life is being burned through at several times the normal rate. The usual causes are overload, a blocked or reversed cooling fan, high ambient, an unbalanced supply or too many starts per hour.

>! Never measure winding resistance on a machine that has not been isolated, locked off and proved dead. A motor that is coasting, or one connected to a driven load such as a fan in a duct with air flow through it, can generate voltage back into its own terminals. Discharge and prove dead before the leads go on.

## What to remember

- Metals are PTC: hot means more resistance, more volt drop and more loss.
- Copper's inferred zero is −234.5 °C, and R₂ = R₁ (234.5 + t₂) / (234.5 + t₁).
- The coefficient method R₂ = R₁ [1 + α(t₂ − t₁)] gives the same answer — use it to check your work.
- Use α₂₀ = 0.00393 for copper when starting from 20 °C.
- Resistance change is a legitimate way to measure winding temperature, and it needs a cold reading taken before the test to be worth anything.`,
          quiz: [
            {
              q: "A copper coil measures 34 Ω at 15 °C. What is its resistance at 70 °C?",
              options: ["27.9 Ω", "34.0 Ω", "41.5 Ω", "48.6 Ω"],
              answer: 2,
              explain: "Using the inferred zero: R₂ = 34 × (234.5 + 70)/(234.5 + 15) = 34 × 304.5/249.5 = 41.49 Ω. Copper has a positive temperature coefficient, so an answer below 34 Ω has the ratio upside down.",
            },
            {
              q: "A motor winding is 16 Ω at 20 °C and 24.8 Ω immediately after a full-load run. What is the winding temperature?",
              options: ["31 °C", "86 °C", "160 °C", "254 °C"],
              answer: 2,
              explain: "t₂ = (R₂/R₁)(234.5 + t₁) − 234.5 = 1.55 × 254.5 − 234.5 = 160 °C. Forgetting to subtract the 234.5 at the end gives 394.5 °C; forgetting to add it at the start gives a badly low answer.",
            },
            {
              q: "A 2.5 mm² copper conductor is 0.241 Ω at 20 °C. Using α₂₀ = 0.00393, what is it at 75 °C?",
              options: ["0.241 Ω", "0.264 Ω", "0.293 Ω", "0.452 Ω"],
              answer: 2,
              explain: "R₂ = 0.241[1 + 0.00393 × 55] = 0.241 × 1.21615 = 0.293 Ω. The bracket must be evaluated first; multiplying 0.241 by 0.00393 before adding is the usual wrong turn.",
            },
            {
              q: "Manganin has a temperature coefficient of about 0.00001 /°C against copper's 0.00393 /°C. What does that make it suitable for?",
              options: [
                "Heating elements, because it stays hot longer",
                "Precision shunts and instrument resistors, because its value barely drifts as it warms",
                "Motor windings, because the resistance change indicates temperature",
                "Overhead conductors, because it is a better conductor than copper",
              ],
              answer: 1,
              explain: "A near-zero coefficient means the resistance does not shift as the instrument or shunt self-heats, which is essential for accurate measurement. Winding temperature measurement relies on the opposite property — copper's large, predictable change.",
            },
            {
              q: "Why does AS/NZS 3008 cable selection use conductor resistance at operating temperature rather than at 20 °C?",
              options: [
                "Because insulation resistance falls when hot",
                "Because a conductor at operating temperature has significantly higher resistance, so volt drop and power loss are greater than the 20 °C figures suggest",
                "Because copper becomes an NTC material above 50 °C",
                "Because cable manufacturers only test at operating temperature",
              ],
              answer: 1,
              explain: "The worked example showed a 2.5 mm² conductor rising over 21% in resistance between 20 °C and 75 °C. Designing on cold resistance would under-estimate both volt drop and copper loss at the temperature the cable actually runs at.",
            },
          ],
        },

        /* ------------------------------------------------------------- 8 */
        {
          id: "cables-volt-drop-and-losses",
          title: "Resistance in cables: current capacity, volt drop and copper loss",
          minutes: 13,
          simple: "A cable is a long thin resistor you are forced to include in every circuit. It steals some voltage on the way to the load, wastes some energy as heat, and if you push too much current through it the heat damages the insulation. The Wiring Rules put a 5% limit on how much voltage you are allowed to lose.",
          refs: REFS_CABLES,
          content: `## The cable is part of the circuit

Every conductor has resistance, so every cable drops voltage and dissipates heat. Three consequences follow, and all three are examinable and all three appear on site.

## 1. Current-carrying capacity

Each conductor size has a resistance, so the power lost per metre depends on the current it carries: P = I² R. That lost power appears as heat in the conductor, and the conductor temperature rises until heat leaving equals heat generated. If the temperature exceeds the cable's rating, the insulation degrades, and in a poorly ventilated installation the result can be a fire.

That is why the current a conductor may carry is not a property of the copper alone but of the **installation method**. A single cable clipped in free air sheds heat far better than the same cable bunched with five others inside a conduit in a hot roof space, where each one is heating its neighbours. Standards Australia publishes maximum current-carrying capacities for every size and installation arrangement in AS/NZS 3008.1, and the Wiring Rules require conductors to be selected accordingly. The derating factors for grouping, ambient temperature and thermal insulation are part of that selection — a cable rated 32 A in air may be good for far less bunched in a wall.

## 2. Voltage drop

AS/NZS 3000 limits total conductor voltage drop from the point of supply to any point of use to **5% of the nominal supply voltage**. On the standard 230 V single-phase supply:

Maximum allowable drop = 0.05 × 230 = **11.5 V**

Under-voltage at the load is not a cosmetic problem. Motors draw more current at reduced voltage to deliver the same torque, which makes them run hotter; contactor coils chatter or fail to pull in; heating elements deliver less than rated output; and electronic supplies drop out on brownouts.

### Worked example 1 — checking a run against the limit

A 2.5 mm² copper circuit supplies 15 A to an air-conditioner. The total conductor resistance (active plus neutral, there and back) is 0.43 Ω.

1. V = I × R
2. V = 15 × 0.43
3. V = **6.45 V**

Compare with the limit: 6.45 V is less than 11.5 V, so the circuit complies.

### Worked example 2 — how far could that run go?

If the circuit run is 25 m long, what is the drop per metre, and at what length would it exceed the limit on a 230 V supply?

1. Volt drop per metre = total drop / length
2. = 6.45 / 25
3. = **0.258 V per metre**

Now find the length at which the drop reaches 11.5 V:

4. V_drop = V per metre × length, so length = V_drop / V per metre
5. length = 11.5 / 0.258
6. length = **44.6 m**

So this cable and load combination can run about 44.6 m before it breaches the 5% limit. Beyond that you go up a conductor size, which lowers the resistance and brings the drop back under the limit.

Note carefully that the 0.43 Ω figure is the resistance of the **loop** — the active out and the neutral back. A 25 m circuit run is 50 m of conductor. Missing that is the single most common volt-drop mistake.

### Worked example 3 — estimating from a cable spec

A 1 mm² TPS cable has a resistance of 1.7 Ω per 100 m per conductor. A load draws 10 A. What voltage is lost per metre of cable?

1. Resistance of one conductor per metre = 1.7 / 100 = 0.017 Ω/m
2. One metre of cable is two metres of conductor, so loop resistance per metre = 2 × 0.017 = 0.034 Ω/m
3. V per metre = I × R = 10 × 0.034
4. V per metre = **0.34 V per metre of cable run**

At that rate you would reach the 11.5 V limit in 11.5 / 0.34 = 33.8 m. A 1 mm² cable is simply not a 10 A circuit over any distance.

## 3. Power loss — "copper loss"

The power consumed in the conductors is lost as far as the load is concerned. The trade name for it is **copper loss**, and it is calculated the same way as any other resistive loss:

**P = I² R**

### Worked example 4 — the cost of that air-conditioner run

The same 2.5 mm² circuit carries 15 A through 0.43 Ω of conductor.

1. P = I² R
2. P = 15² × 0.43
3. P = 225 × 0.43
4. P = **96.75 W**

Nearly 100 W is being turned into heat inside the wall, permanently, whenever that air-conditioner runs. It is heat you are metered for and never use, and it also warms the cable and the insulation around it.

There are only three ways to reduce copper loss, and they follow directly from P = I²R:

1. **Reduce the current.** To deliver the same power at lower current you must raise the voltage — which is precisely why transmission networks run at high voltage.
2. **Shorten the cable run.** Less length, less resistance.
3. **Increase the cross-sectional area.** More copper, less resistance.

Lowering the resistance reduces copper loss and volt drop together, which is why one cable upsize often fixes both problems at once.

## Resistance tables

You rarely calculate conductor resistance from resistivity on site. AS/NZS 3008.1 tabulates it directly, in ohms per kilometre, for every size and conductor material, and you scale it to the run you have. For example, 10 mm² cable is listed at 1.79 Ω per 1 000 m, so 100 m of it is 0.179 Ω. The same tables also give volt drop directly in millivolts per ampere per metre, which is quicker still for design work.

## Resistance faults: what a reading tells you

Resistance measurement is one of the electrician's most powerful diagnostic tools, because it lets you predict how a circuit will behave before it is energised, and locate a fault after it has failed. Faults sort into two families.

### High resistance

A high reading means something is obstructing current. The extreme case is infinite ohms — an open circuit, where nothing will flow and the circuit is dead. An open circuit behaves like a switch left off; a fuse or circuit-breaker is a device deliberately designed to create one.

Common causes of high resistance and open circuits:

- Failed heater elements
- Poor or loose electrical connections, and corroded terminals
- Burnt cables and terminals
- Incorrectly wired relay or contactor contacts
- Failed motor windings

A partial high resistance — a loose terminal, not a broken one — is the dangerous case. It does not stop the circuit; it makes a hot joint that gets worse over time, and it is a classic cause of switchboard fires.

### Low resistance

A low reading means current will be far higher than intended. Take the worst case: a dead short across a load in a domestic circuit, leaving only the cable in the loop, with a resistance of perhaps 0.01 Ω.

1. I = V / R
2. I = 230 / 0.01
3. I = **23 000 A**

Nothing in a domestic installation can carry 23 kA. If the current were allowed to flow, cables, accessories and fittings would be destroyed, with a fire or an explosion very likely. This one calculation is the whole argument for circuit protection: a fuse or circuit-breaker interrupts a fault like this in a fraction of a second.

Common low resistance faults:

- Moisture ingress into equipment and enclosures
- Earth faults, where an active conductor finds a path to earth
- Failure of any coil or winding — motors, transformers, relays, contactors, fluorescent ballasts

If protection has operated, never simply reset it. Find out why it operated and what condition caused it, then repair the fault. Testing for high and low resistance faults before a circuit is placed in service is mandatory, not optional.

>! Resistance measurements are made on dead circuits only. Isolate, lock off, and prove dead with a voltage tester before an ohmmeter goes anywhere near the conductors. Connecting an ohmmeter to a live circuit can destroy the instrument and can cause it to explode in your hand.

## On the job

- 5% of 230 V is 11.5 V — that is the number you check every volt-drop calculation against.
- A 25 m run is 50 m of conductor. Always work with the loop.
- Copper loss is I²R, so halving the current quarters the loss.
- Upsizing the conductor fixes volt drop and copper loss at the same time.
- A slightly high resistance at a terminal is a fire waiting to happen; a very low one is a fault current waiting to happen.`,
          quiz: [
            {
              q: "A 230 V circuit carries 15 A through conductors with a total loop resistance of 0.43 Ω. What is the voltage drop, and does it comply with AS/NZS 3000?",
              options: [
                "6.45 V, which exceeds the 5% limit of 11.5 V",
                "6.45 V, which is within the 5% limit of 11.5 V",
                "96.75 V, which grossly exceeds the limit",
                "0.43 V, which is well within the limit",
              ],
              answer: 1,
              explain: "V = IR = 15 × 0.43 = 6.45 V, and 5% of 230 V is 11.5 V, so the circuit complies. The 96.75 figure is the power lost in watts (I²R), not a voltage.",
            },
            {
              q: "The same circuit is 25 m long and drops 6.45 V. How long could the run be before the 5% limit is exceeded?",
              options: ["25 m", "About 44.6 m", "About 89 m", "About 11.5 m"],
              answer: 1,
              explain: "Drop per metre is 6.45/25 = 0.258 V/m, so the limiting length is 11.5/0.258 = 44.6 m. Doubling to 89 m would be right only if you forgot that the drop per metre already accounts for both the active and the neutral.",
            },
            {
              q: "A 15 A load runs through conductors of 0.43 Ω total. How much power is wasted in the cable?",
              options: ["6.45 W", "96.75 W", "3 450 W", "0.43 W"],
              answer: 1,
              explain: "Copper loss is P = I²R = 15² × 0.43 = 225 × 0.43 = 96.75 W, dissipated as heat in the wall. The 6.45 figure is the volt drop; multiplying volts by amps would give the loss too (6.45 × 15 = 96.75 W).",
            },
            {
              q: "A dead short leaves only 0.01 Ω of cable resistance in a 230 V circuit. What prospective current does that imply, and what is the lesson?",
              options: [
                "2.3 A, so the fault would go unnoticed",
                "230 A, which a 20 A breaker would clear eventually",
                "23 000 A, far beyond what any accessory can survive — which is why fast circuit protection is essential",
                "23 A, which is a normal circuit loading",
              ],
              answer: 2,
              explain: "I = V/R = 230/0.01 = 23 000 A. No domestic cable, accessory or fitting can carry that, so without a protective device operating in a fraction of a second the result is destruction and probably fire.",
            },
            {
              q: "A 1 mm² cable is quoted at 1.7 Ω per 100 m per conductor and carries 10 A. What is the volt drop per metre of cable run?",
              options: ["0.17 V/m", "0.34 V/m", "0.017 V/m", "1.7 V/m"],
              answer: 1,
              explain: "One conductor is 0.017 Ω/m, but a metre of cable contains a metre of active and a metre of neutral, so the loop is 0.034 Ω/m, and V = 10 × 0.034 = 0.34 V/m. Using only one conductor halves the answer and is the standard error.",
            },
          ],
        },

        /* ------------------------------------------------------------- 9 */
        {
          id: "measuring-resistance",
          title: "Measuring resistance: ohmmeters, bridges and insulation tests",
          minutes: 14,
          simple: "An ohmmeter pushes its own small current through a dead circuit and reads back the resistance. Different jobs need different instruments: a multimeter for general work, a special tester for the earth system, a 500 volt tester for insulation, and a four-wire method for resistances so small the test leads themselves would spoil the reading.",
          refs: REFS_MEASURE,
          content: `## The instrument supplies the current

Every resistance measurement works the same way underneath: the instrument passes a known current from its own internal battery through the unknown resistance, measures the resulting voltage, and displays the ratio. That single fact explains the golden rule — **the circuit must be dead**. Any voltage from the circuit adds to or fights the meter's own source and the reading is meaningless, and on a mains circuit the instrument can be destroyed, or can rupture in your hand.

>! Isolate, lock off, tag, and prove dead with an approved voltage tester before any ohmmeter is connected. Prove your tester on a known source before and after. Never take a resistance measurement on a live circuit, and treat every capacitor, cable run and motor winding as charged until you have discharged it.

## Ohmmeters, analogue and digital

Today the ohmmeter is normally the ohms function of a good digital multimeter, which combines voltmeter, ammeter and ohmmeter in one instrument. Two controls matter:

- **Function** — voltmeter, ammeter or ohmmeter, and a.c. or d.c. where relevant.
- **Range** — the full-scale value. It must suit the quantity being measured. Many instruments auto-range and select it for you.

Analogue ohmmeters — the moving needle type — are still found, and they have habits you must know:

- The ohms scale is **reversed and non-linear**: zero ohms is at the full-deflection end and infinity at the rest position, and the divisions crowd together at the high end. Readings are most accurate near mid-scale, so pick the range that puts the needle around the middle.
- They must be **zeroed before every measurement**. Short the leads together and adjust the "zero ohms" control until the needle reads exactly zero. This compensates for lead resistance and for the falling voltage of an ageing internal battery. Re-zero every time you change range. This is exactly what an examiner means by "what must be done before taking the measurement" when checking an earth connection.
- A needle gives you something a digital display does not: sweeping a pot or flexing a cable and watching for a smooth movement or a flicker reveals intermittent faults that a digital reading may not catch.

On a digital meter the equivalent of zeroing is the **REL** or **zero** function: short the leads, press REL, and the meter subtracts the lead resistance from every subsequent reading. On low-value measurements that lead resistance — often 0.2 to 0.5 Ω — is bigger than the thing you are trying to measure.

Most multimeters also have a **continuity** range with a buzzer, which is a fast go/no-go check but not a measurement. A buzz tells you a path exists; it does not tell you the path is good enough. A joint at 5 Ω will buzz cheerfully and still cook.

## The voltmeter-ammeter method

Before precision ohmmeters, and still useful where a resistance must be measured at its normal working current, resistance is found from Ohm's law directly: energise the resistor from a supply, measure the voltage across it with a voltmeter and the current through it with an ammeter, then divide.

**R = V / I**

### Worked example 1

A heating element is supplied from a d.c. source. The ammeter reads 0.6 A and the voltmeter reads 4.8 V.

1. R = V / I
2. R = 4.8 / 0.6
3. R = **8 Ω**

The catch is meter loading. Connect the voltmeter directly across the resistor and the ammeter reads the resistor current **plus** the small current the voltmeter draws, so the calculated resistance is slightly low — best for low-value resistors. Connect the voltmeter across the resistor and ammeter together and it reads the resistor voltage **plus** the drop in the ammeter, so the result is slightly high — best for high-value resistors. Choose the connection that puts the error where it matters least, and remember this method measures the resistance **hot**, at working current, which for an element is exactly what you want.

## The Wheatstone bridge

For precision, a bridge beats a direct reading, because it compares the unknown against known standards instead of relying on the accuracy of a meter movement. Four resistances form a diamond: two ratio arms P and Q, a calibrated variable standard S, and the unknown X. A sensitive galvanometer bridges the middle.

The standard is adjusted until the galvanometer reads exactly **zero** — the bridge is **balanced**, meaning both sides of the diamond divide the supply in the same proportion, so there is no potential difference across the detector. At balance:

**X = S × (Q / P)**

The beauty of a null method is that the answer does not depend on the supply voltage or on the galvanometer's calibration at all — only on the accuracy of the standard resistors and the sensitivity of the detector near zero.

### Worked example 2

The ratio arms are P = 100 Ω and Q = 1 000 Ω. Balance is achieved with the standard set to 47.5 Ω. What is the unknown resistance?

1. X = S × (Q / P)
2. X = 47.5 × (1 000 / 100)
3. X = 47.5 × 10
4. X = **475 Ω**

Bridges of this kind are used in calibration laboratories, in strain-gauge and RTD measurement circuits, and in cable fault location.

## Four-wire (Kelvin) measurement

When the resistance you want is very small — a bonding conductor, a busbar joint, a motor winding of a few milliohms — the resistance of your test leads and their contacts swamps the result. A two-wire measurement gives you the resistance of everything between the meter's terminals, and only some of that is the item.

The four-wire or **Kelvin** method separates the two functions:

1. Two **current** leads carry a known test current through the item.
2. Two separate **sense** leads, connected inside the current leads, measure the voltage developed across the item alone.

Because the sense leads carry almost no current (the voltmeter is high impedance), their own resistance drops almost no voltage, so lead and contact resistance drop out of the result entirely.

### Worked example 3

An earth bond is measured two-wire at 0.42 Ω, and shorting the leads together shows 0.40 Ω of lead resistance.

1. True resistance = 0.42 − 0.40 = **0.02 Ω** — but that is the difference of two similar numbers, so the uncertainty is large.

The same joint measured four-wire with a 1 A test current and a sensed voltage of 12 mV:

2. R = V / I
3. R = 0.012 / 1
4. R = **0.012 Ω**, measured directly and with no lead error

That difference is why low-resistance ohmmeters (micro-ohmmeters) and dedicated earth continuity testers use four terminals.

## Earth continuity testing

AS/NZS 3000:2018 requires every part of the earthing system to be installed and tested so that protective devices — circuit-breakers and RCDs — will operate on a fault, and so that exposed conductive parts such as equipment enclosures and metallic pipework never sit at a dangerous voltage. The requirements are in Section 8.

The test is made between each part required to be earthed — the earth pin of every socket-outlet, appliance enclosures, bonded pipework — and the main earthing conductor at the switchboard. The expected value is **not greater than 0.1 Ω**.

That is a small number, which is why the technique matters: null the leads (or use a four-wire tester), make firm clean contact on bare metal rather than on paint, and use an instrument that injects a substantial test current rather than a multimeter's few milliamps. A high-current test proves the connection will hold up under fault conditions; a low-current continuity buzz can be fooled by a corroded joint that would fail the moment real current arrived.

## Insulation resistance testing

Where continuity testing proves a wanted path exists, insulation resistance (IR) testing proves the unwanted paths do not. AS/NZS 3000:2018 requires the insulation of an installation to be good enough to prevent electric shock in normal use, fire from short circuits, and equipment damage. Again, Section 8.

The test:

- Applied between the **live conductors** (all actives and neutrals joined) and **earth**.
- The tester must output **500 V d.c.** to genuinely stress the insulation. A multimeter's 9 V battery would show a fault-free reading through insulation that breaks down instantly at working voltage.
- The reading must be **not less than 1 MΩ**.

Before testing, disconnect or account for equipment that will be damaged by 500 V or that will read low legitimately — electronics, surge diverters, dimmers, some lamps and control gear. A reading that is low because a VDR is doing its job is not an insulation fault.

## Care with insulation resistance testers

A 500 V IR tester can give you a serious shock. Inadvertent contact with the leads while testing will do it, and it can also shock another worker handling the same conductors elsewhere in the installation. Underground cables are often tested at higher voltages still — 3 000 V IR testers are common.

There is a second hazard beyond the direct shock: **stored charge**. An armoured or metal-sheathed underground cable, and MIMS cable, forms a capacitor between the conductor and the sheath, and the tester's d.c. charges it. Capacitance is quoted per unit length, typically around 0.2 µF per 300 m, so a long run stores a lot.

### Worked example 4 — the energy in a tested cable

Take 300 m of cable at 0.2 µF, tested at 3 000 V. Energy stored is E = ½ C V²:

1. E = 0.5 × 0.2 × 10⁻⁶ × 3 000²
2. E = 0.5 × 0.2 × 10⁻⁶ × 9 × 10⁶
3. E = **0.9 J**

Now scale that to a real job. An aerodrome or a large industrial site can have kilometres of underground cable, so 2 km at the same figure gives roughly 1.33 µF:

4. E = 0.5 × 1.33 × 10⁻⁶ × 9 × 10⁶
5. E ≈ **6 J** at 3 000 V

That is enough charge at enough voltage to immobilise a technician, sometimes requiring medical attention — and it is a reportable incident by law.

So: **always discharge the cable after testing.** Electricians often do it by shorting a screwdriver between conductor and sheath, but that flashes and carries its own hazards. The safer method is a controlled discharge through a high-value, high-wattage bleed resistor, then confirm with a tester that the charge is gone.

Cable capacitance also affects the reading itself. On a long run, the tester may initially show a low resistance simply because it is pouring current into the cable's capacitance. Keep the test running: as the cable charges to the tester's voltage, the reading climbs and eventually settles. Only a stabilised reading is the true insulation resistance — walking away from an early low reading condemns good cable.

## What to remember

- Dead circuit, proved dead, every time. The meter supplies the current, not the installation.
- Analogue ohmmeters: zero the leads on every range, and read near mid-scale.
- Digital meters: use REL to null lead resistance before any low-value measurement.
- Earth continuity: 0.1 Ω or less, back to the main earthing conductor, per Section 8.
- Insulation resistance: 500 V d.c. between live conductors and earth, 1 MΩ minimum.
- Long or armoured cables store charge — let the reading stabilise, then discharge safely through a bleed resistor.`,
          quiz: [
            {
              q: "Why must a circuit be isolated and proved dead before an ohmmeter is connected?",
              options: [
                "Because the ohmmeter cannot display a reading while current is flowing",
                "Because the meter supplies its own test current, so any circuit voltage corrupts the reading and can destroy or rupture the instrument",
                "Because AS/NZS 3000 requires all testing to be done dead",
                "Because the internal battery would be recharged by the circuit",
              ],
              answer: 1,
              explain: "An ohmmeter works by pushing a known current from its own battery through the unknown resistance; external voltage adds to or opposes that and makes the reading nonsense, and on mains it can destroy the meter or cause it to explode. Some tests, such as RCD and earth loop impedance, are deliberately done live — so it is not a blanket rule about all testing.",
            },
            {
              q: "An analogue ohmmeter is to be used to check an earth connection. What must be done first?",
              options: [
                "Set the meter to the highest range available",
                "Short the test leads together and adjust the zero-ohms control until the needle reads zero",
                "Connect the leads to the circuit and press REL",
                "Measure the supply voltage to confirm the battery is good",
              ],
              answer: 1,
              explain: "Zeroing on shorted leads compensates for lead resistance and for the internal battery's declining voltage, and it must be repeated on every range change. On a 0.1 Ω earth continuity test, lead resistance alone could be several times the value being measured.",
            },
            {
              q: "A Wheatstone bridge has ratio arms P = 100 Ω and Q = 1 000 Ω, and balances with the standard at 47.5 Ω. What is the unknown resistance?",
              options: ["4.75 Ω", "47.5 Ω", "475 Ω", "4 750 Ω"],
              answer: 2,
              explain: "At balance X = S × (Q/P) = 47.5 × (1000/100) = 475 Ω. Because it is a null method, the answer depends only on the standard and the ratio arms — not on the supply voltage or the galvanometer's calibration.",
            },
            {
              q: "Why is a four-wire (Kelvin) connection used to measure a bonding conductor of a few milliohms?",
              options: [
                "It doubles the test current so the reading is larger",
                "The separate sense leads carry almost no current, so lead and contact resistance do not appear in the result",
                "It allows the measurement to be made on a live circuit",
                "It automatically corrects for the temperature of the conductor",
              ],
              answer: 1,
              explain: "Current leads carry the test current while high-impedance sense leads measure only the voltage across the item itself, so the lead and contact resistance drops out. A two-wire reading of 0.42 Ω that includes 0.40 Ω of leads leaves you subtracting two similar numbers with poor accuracy.",
            },
            {
              q: "During an insulation resistance test on a long underground cable the tester initially shows a low resistance, then the reading climbs. What is happening?",
              options: [
                "The insulation is breaking down under the applied voltage",
                "The tester's battery is recovering",
                "The tester is charging the cable's capacitance; once it charges to the test voltage the reading rises and stabilises at the true value",
                "Moisture is being driven out of the insulation by the test current",
              ],
              answer: 2,
              explain: "A long armoured cable is a capacitor between conductor and sheath, and the charging current initially looks like a low resistance path. Only the stabilised reading is the true insulation resistance, so condemning the cable on the first low reading would be wrong — and the stored charge must then be discharged safely before anyone handles the conductors.",
            },
            {
              q: "What are the AS/NZS 3000 values an electrician checks for earth continuity and for insulation resistance?",
              options: [
                "Not more than 1 Ω for earth continuity; not less than 0.5 MΩ at 250 V d.c. for insulation",
                "Not more than 0.1 Ω for earth continuity; not less than 1 MΩ at 500 V d.c. for insulation",
                "Not less than 0.1 MΩ for earth continuity; not more than 1 MΩ for insulation",
                "Not more than 0.1 Ω for both tests",
              ],
              answer: 1,
              explain: "Section 8 requires earth continuity of no more than 0.1 Ω back to the main earthing conductor, and insulation resistance of at least 1 MΩ measured at 500 V d.c. between live conductors and earth. The 500 V is essential — a low-voltage test could pass insulation that would break down at working voltage.",
            },
          ],
        },
      ],
    },
  ];

  root.COURSE = (root.COURSE || []).concat(MODULES);
  if (typeof module !== "undefined" && module.exports) module.exports = MODULES;
})(globalThis);
